// Measure the rendered homepage of each site in a list: computed type, layout and motion facts at 1440 and 390 px.
// Usage: node scripts/measure.mjs <sites.json> <out.jsonl> [--shots <dir>]
//   sites.json: [{"id": "...", "url": "https://..."}]
// Stores numbers only. Screenshots (optional) are temporary research evidence and must not be committed.
// One visit per site per viewport; robots.txt "Disallow: /" for all agents is respected; 4xx/5xx stops that site.
import {chromium} from 'playwright';
import {readFileSync, appendFileSync, mkdirSync} from 'node:fs';
import {join} from 'node:path';

const [listPath, outPath] = process.argv.slice(2);
const shotsIdx = process.argv.indexOf('--shots');
const shots = shotsIdx > -1 ? process.argv[shotsIdx + 1] : null;
if (!listPath || !outPath) { console.error('usage: measure.mjs <sites.json> <out.jsonl> [--shots dir]'); process.exit(2); }
if (shots) mkdirSync(shots, {recursive: true});
const sites = JSON.parse(readFileSync(listPath, 'utf8'));
const proxy = process.env.HTTPS_PROXY ? {server: process.env.HTTPS_PROXY} : undefined;
const isLocal = u => ['localhost', '127.0.0.1'].includes(new URL(u).hostname);
const browser = await chromium.launch();
const today = new Date().toISOString().slice(0, 10);
const VIEWPORTS = [{name: 'desktop', width: 1440, height: 900}, {name: 'mobile', width: 390, height: 844}];

async function robotsBlocked(ctx, url) {
  try {
    const r = await ctx.request.get(new URL('/robots.txt', url).href, {timeout: 10000});
    if (!r.ok()) return false;
    const txt = await r.text();
    let star = false;
    for (const raw of txt.split('\n')) {
      const line = raw.split('#')[0].trim();
      if (/^user-agent:\s*\*$/i.test(line)) star = true;
      else if (/^user-agent:/i.test(line)) star = false;
      else if (star && /^disallow:\s*\/\s*$/i.test(line)) return true;
    }
  } catch { /* no robots.txt reachable: proceed */ }
  return false;
}

function collect() {
  const cs = el => getComputedStyle(el);
  const px = v => Math.round(parseFloat(v) * 10) / 10;
  const fam = el => cs(el).fontFamily.split(',')[0].replace(/["']/g, '').trim();
  const visible = el => { const r = el.getBoundingClientRect(); const s = cs(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const h1 = [...document.querySelectorAll('h1')].find(visible) || null;
  // Largest visible text in the first screen stands in for the hero headline when h1 is missing or tiny.
  const firstScreen = [...document.querySelectorAll('h1,h2,p,span,div,a')].filter(el => {
    const r = el.getBoundingClientRect(); return visible(el) && r.top < innerHeight && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2);
  });
  const display = firstScreen.sort((a, b) => parseFloat(cs(b).fontSize) - parseFloat(cs(a).fontSize))[0] || h1;
  const paras = [...document.querySelectorAll('main p, body p')].filter(p => visible(p) && p.textContent.trim().length > 80);
  const bodyP = paras[0] || document.body;
  const measure = p => { const s = cs(p); const chW = parseFloat(s.fontSize) * 0.5; return Math.round(p.getBoundingClientRect().width / chW); };
  const header = document.querySelector('header') || document.querySelector('nav');
  const famCount = {};
  for (const el of document.querySelectorAll('body *')) {
    if (!visible(el)) continue;
    const t = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    if (t.length) famCount[fam(el)] = (famCount[fam(el)] || 0) + t.length;
  }
  const families = Object.entries(famCount).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([f]) => f);
  const root = document.querySelector('main') || document.body;
  let sections = [...root.children].filter(el => visible(el) && el.getBoundingClientRect().height > 200);
  if (sections.length <= 2) sections = [...root.querySelectorAll('section')].filter(el => visible(el) && el.getBoundingClientRect().height > 200);
  let reduced = 'not_observed';
  for (const sheet of document.styleSheets) {
    try { if ([...sheet.cssRules].some(r => r.cssText.includes('prefers-reduced-motion'))) reduced = 'observed'; }
    catch { if (reduced === 'not_observed') reduced = 'unverified'; }
  }
  const container = h1 ? (() => { let el = h1; while (el.parentElement && el.parentElement !== document.body && el.getBoundingClientRect().width < innerWidth * 0.6) el = el.parentElement; return Math.round(el.getBoundingClientRect().width); })() : null;
  const heroBottom = h1 ? (() => { let el = h1; while (el.parentElement && el.parentElement !== root && el.parentElement !== document.body) el = el.parentElement; return Math.round(el.getBoundingClientRect().bottom + scrollY); })() : null;
  const hS = h1 && cs(h1), dS = display && cs(display), bS = cs(bodyP);
  return {
    h1_text: h1 ? h1.textContent.trim().replace(/\s+/g, ' ').slice(0, 90) : null,
    h1_px: hS ? px(hS.fontSize) : null, h1_line_height: hS ? px(parseFloat(hS.lineHeight) / parseFloat(hS.fontSize) || 0) || null : null,
    h1_weight: hS ? Number(hS.fontWeight) : null, h1_tracking_em: hS ? (hS.letterSpacing === 'normal' ? 0 : Math.round(parseFloat(hS.letterSpacing) / parseFloat(hS.fontSize) * 1000) / 1000) : null,
    h1_family: h1 ? fam(h1) : null,
    display_px: dS ? px(dS.fontSize) : null, display_family: display ? fam(display) : null,
    body_px: px(bS.fontSize), body_line_height: px(parseFloat(bS.lineHeight) / parseFloat(bS.fontSize) || 0) || null, body_family: fam(bodyP), body_measure_ch: paras.length ? measure(bodyP) : null,
    families, content_width_px: container, nav_height_px: header ? Math.round(header.getBoundingClientRect().height) : null,
    sticky_nav: header ? ['sticky', 'fixed'].includes(cs(header).position) || ['sticky', 'fixed'].includes(cs(header.parentElement || header).position) : null,
    hero_height_px: heroBottom, section_count: sections.length, page_height_px: document.documentElement.scrollHeight,
    horizontal_overflow: document.documentElement.scrollWidth > innerWidth + 1, reduced_motion_rule: reduced,
    has_video: !!document.querySelector('video'), has_canvas: !!document.querySelector('canvas'),
    // Background behind the hero: walk up from the element at the centre of the first screen to the first opaque background.
    dark_background: (() => { let el = document.elementFromPoint(innerWidth / 2, innerHeight / 2); while (el) { const m = cs(el).backgroundColor.match(/[\d.]+/g)?.map(Number); if (m && (m.length < 4 || m[3] > 0.5)) return (m[0] * 299 + m[1] * 587 + m[2] * 114) / 1000 < 90; el = el.parentElement; } return false; })()
  };
}

for (const site of sites) {
  const record = {id: site.id, url: site.url, measured_on: today, viewports: {}, error: null};
  const ctx = await browser.newContext({viewport: VIEWPORTS[0], proxy: isLocal(site.url) ? undefined : proxy});
  try {
    if (await robotsBlocked(ctx, site.url)) { record.error = 'robots.txt disallows all agents'; throw null; }
    for (const vp of VIEWPORTS) {
      const page = await ctx.newPage();
      await page.setViewportSize({width: vp.width, height: vp.height});
      const resp = await page.goto(site.url, {waitUntil: 'domcontentloaded', timeout: 30000});
      if (resp && resp.status() >= 400) { record.error = `HTTP ${resp.status()}`; await page.close(); break; }
      await page.waitForLoadState('networkidle', {timeout: 12000}).catch(() => {});
      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(1200);
      const animationsOnLoad = await page.evaluate(() => document.getAnimations().length);
      if (shots) await page.screenshot({path: join(shots, `${site.id}-${vp.width}-top.png`)});
      for (let i = 1; i <= 3; i++) { await page.evaluate(y => scrollTo(0, y), vp.height * i); await page.waitForTimeout(500); }
      const animationsAfterScroll = await page.evaluate(() => document.getAnimations().length);
      await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(300);
      const data = await page.evaluate(collect);
      if (shots) {
        // Scroll the whole page once so lazy and scroll-triggered sections render, then capture full height (capped).
        await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } scrollTo(0, 0); });
        await page.waitForTimeout(400);
        const h = Math.min(await page.evaluate(() => document.documentElement.scrollHeight), vp.width > 800 ? 9000 : 12000);
        await page.screenshot({path: join(shots, `${site.id}-${vp.width}-full.png`), clip: {x: 0, y: 0, width: vp.width, height: h}, fullPage: true}).catch(() => {});
      }
      record.viewports[vp.name] = {width: vp.width, height: vp.height, animations_on_load: animationsOnLoad, animations_after_scroll: animationsAfterScroll, final_url: page.url(), ...data};
      await page.close();
    }
  } catch (e) { if (e) record.error = String(e.message || e).split('\n')[0].slice(0, 200); }
  await ctx.close();
  appendFileSync(outPath, JSON.stringify(record) + '\n');
  console.log(`${record.error ? 'ERR ' : 'ok  '} ${site.id} ${record.error || ''}`);
}
await browser.close();
