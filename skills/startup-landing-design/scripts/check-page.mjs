// Run the automatic checks from assets/checks.json (64 of the skill's 100) against a rendered page.
// Usage: node scripts/check-page.mjs <url-or-html-file>
// Prints JSON: every check with id, severity, pass and detail, plus failures (block), warnings (warn) and not_run.
// Exits 1 when any block-severity check fails. Needs Playwright with Chromium; @axe-core/playwright is optional
// and powers the contrast check (CO-01), which is reported as not_run without it.
// The other 36 checks need eyes: they are answered in DESIGN-RECORD.md and enforced by verify-record.mjs.
import {chromium} from 'playwright';
import {resolve} from 'node:path';
import {existsSync, readFileSync} from 'node:fs';
import {pathToFileURL, fileURLToPath} from 'node:url';

const input = process.argv[2];
if (!input) { console.error('usage: check-page.mjs <url-or-html>'); process.exit(2); }
const url = /^https?:\/\//.test(input) ? input : pathToFileURL(resolve(input)).href;
const CATALOG = Object.fromEntries(JSON.parse(readFileSync(new URL('../assets/checks.json', import.meta.url), 'utf8')).map(c => [c.id, c]));
const out = {target: url, checked_on: new Date().toISOString().slice(0, 10), checks: [], failures: [], warnings: [], not_run: []};
const done = new Set();
function check(id, pass, detail = null) {
  const c = CATALOG[id]; if (!c || c.verify !== 'auto') throw new Error(`unknown auto check ${id}`);
  if (done.has(id)) { const prev = out.checks.find(x => x.id === id); if (prev.pass && !pass) { prev.pass = false; prev.detail = detail; } return; }
  done.add(id); out.checks.push({id, check: c.check, severity: c.severity, pass, detail});
}
function notRun(id, why) { done.add(id); out.checks.push({id, check: CATALOG[id].check, severity: CATALOG[id].severity, pass: null, detail: `not_run: ${why}`}); out.not_run.push(id); }

const browser = await chromium.launch();
async function open(viewport, options = {}) {
  const ctx = await browser.newContext({viewport, ...options});
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(`pageerror: ${e.message}`.slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error') errors.push(`console: ${m.text()}`.slice(0, 200)); });
  await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 30000});
  await page.waitForLoadState('networkidle', {timeout: 10000}).catch(() => {});
  await page.locator('h1').first().waitFor({state: 'attached', timeout: 5000}).catch(() => {});
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(700);
  return {ctx, page, errors};
}
const scrollThrough = page => page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) { scrollTo(0, y); await new Promise(r => setTimeout(r, 140)); }
  scrollTo(0, 0); await new Promise(r => setTimeout(r, 900));
});

// Shared in-page helpers, injected as a string so every evaluate can use them.
const HELPERS = `
  var cs = el => getComputedStyle(el);
  var box = el => el.getBoundingClientRect();
  var seen = el => { const b = box(el); if (b.width < 2 || b.height < 2) return false; for (let a = el; a && a !== document.documentElement; a = a.parentElement) { const s = cs(a); if (s.display === 'none' || s.visibility === 'hidden') return false; } return true; };
  var ownText = el => [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').replace(/\\s+/g, ' ').trim();
  var textEls = () => [...document.querySelectorAll('body *')].filter(el => !['SCRIPT','STYLE','NOSCRIPT','TITLE'].includes(el.tagName) && ownText(el).length > 1 && seen(el));
  var px = el => parseFloat(cs(el).fontSize);
  var rgb = c => (c.match(/[\\d.]+/g) || []).map(Number);
  var opaque = c => { const v = rgb(c); return v.length >= 3 && (v.length < 4 || v[3] > 0.5); };
  var groundAt = (x, y) => { for (let el = document.elementFromPoint(x, y); el; el = el.parentElement) { const c = cs(el).backgroundColor; if (opaque(c)) return rgb(c); } return [255, 255, 255]; };
  var boxed = el => { const s = cs(el); return (opaque(s.backgroundColor)) || parseFloat(s.borderTopWidth) > 0; };
  var filled = el => opaque(cs(el).backgroundColor);
  var label = el => (el.getAttribute('aria-label') || el.innerText || el.getAttribute('title') || '').replace(/[↗↓→←↻↺✓+−]/g, '').replace(/\\s+/g, ' ').trim();
  var bodyP = () => [...document.querySelectorAll('p')].filter(p => seen(p) && p.textContent.trim().length > 60);
  var cardsIn = parent => [...parent.children].filter(c => seen(c) && box(c).width > 120);
`;
const run = (page, fn, arg) => page.evaluate(`(() => { ${HELPERS}; return (${fn.toString()})(${JSON.stringify(arg ?? null)}); })()`);

try {
  // ======================= 390 × 844 =======================
  const {ctx, page, errors} = await open({width: 390, height: 844});
  const first = await run(page, () => {
    const h1 = document.querySelector('h1');
    const actions = [...document.querySelectorAll('a[href],button')].filter(el => seen(el) && boxed(el));
    return {h1Top: h1 ? box(h1).top : null, actionTop: Math.min(...actions.map(a => box(a).top), 1e9), ih: innerHeight};
  });
  await scrollThrough(page);
  const r = await run(page, () => {
    const all = [...document.querySelectorAll('body *')];
    const T = textEls();
    const h1 = document.querySelector('h1'), h2 = document.querySelector('h2');
    const P = bodyP(); const p0 = P[0] || document.body;
    const weights = [...new Set(T.map(el => Math.round(Number(cs(el).fontWeight) / 100) * 100))];
    const trackingEm = el => cs(el).letterSpacing === 'normal' ? 0 : parseFloat(cs(el).letterSpacing) / px(el);
    const hidden = T.filter(el => { for (let a = el; a && a !== document.body; a = a.parentElement) if (Number(cs(a).opacity) < 0.1) return true; return false; });
    const transitionAll = all.filter(el => { const s = cs(el); const props = s.transitionProperty.split(','), durs = s.transitionDuration.split(','); return props.some((p, i) => p.trim() === 'all' && parseFloat(durs[i % durs.length]) > 0); }).slice(0, 5).map(el => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0]);
    const nameless = [...document.querySelectorAll('a,button')].filter(el => !label(el) && !el.querySelector('img[alt]:not([alt=""])')).map(el => el.outerHTML.slice(0, 120));
    const links = [...document.querySelectorAll('a')].map(a => ({href: a.getAttribute('href'), abs: a.href, html: a.outerHTML.slice(0, 120)}));
    const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(seen).map(h => Number(h.tagName[1]));
    const header = document.querySelector('header');
    const targetMin = el => (el.closest('header,nav') || boxed(el)) ? 44 : 24;
    const controls = [...document.querySelectorAll('button,[role=button],select,input:not([type=hidden]),header a,nav a,a.button')].filter(seen).filter(el => cs(el).display !== 'inline');
    const small = controls.filter(el => !['checkbox', 'radio'].includes(el.type)).map(el => ({el, min: targetMin(el), h: box(el).height})).filter(x => x.h + 0.5 < x.min);
    const imgs = [...document.querySelectorAll('img')];
    const svgs = [...document.querySelectorAll('svg')].filter(seen);
    const clickable = all.filter(el => seen(el) && cs(el).cursor === 'pointer' && !el.closest('a,button,label,summary,select,input,textarea,[role=button],[role=link],[role=tab],[role=option],[role=switch],[tabindex]'));
    const fields = [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]),select,textarea')];
    const textNodesNearEdge = [...document.querySelectorAll('p,li,h1,h2,h3,h4,blockquote,dd,dt')].filter(seen).filter(el => {
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) if (['auto', 'scroll'].includes(cs(a).overflowX)) return false;
      const rg = document.createRange(); rg.selectNodeContents(el); const b = rg.getBoundingClientRect();
      return b.width > 0 && (b.left < 12 || b.right > innerWidth - 12);
    });
    const clipped = T.filter(el => { const s = cs(el); const b = box(el); if (b.width < 8 || b.height < 8) return false;
      return (['hidden', 'clip'].includes(s.overflowX) && el.scrollWidth > el.clientWidth + 2) || (['hidden', 'clip'].includes(s.overflowY) && el.scrollHeight > el.clientHeight + 2) || s.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth; });
    const headerNav = header ? [...header.querySelectorAll('nav a, nav button')] : [];
    const inputsSmall = fields.filter(seen).filter(f => !['checkbox', 'radio', 'range', 'color'].includes(f.type) && px(f) < 16);
    const viewport = document.querySelector('meta[name=viewport]')?.getAttribute('content') || '';
    const hasMotion = all.some(el => { const s = cs(el); return s.animationName !== 'none' || s.transitionDuration.split(',').some(d => parseFloat(d) > 0); }) || document.getAnimations().length > 0;
    return {
      h1Count: document.querySelectorAll('h1').length, levels,
      ratioH1: h1 ? px(h1) / px(p0) : 0, ratioH2: h2 ? px(h2) / px(p0) : null, weights,
      h1Tracking: h1 ? Math.round(trackingEm(h1) * 1000) / 1000 : 0,
      wideTracked: T.filter(el => px(el) > 14 && trackingEm(el) > 0.12).slice(0, 4).map(el => ownText(el).slice(0, 30)),
      bodyPx: px(p0), tiny: T.filter(el => px(el) < 11 && !el.closest('[aria-hidden=true]')).slice(0, 6).map(el => `${ownText(el).slice(0, 24)} (${px(el).toFixed(1)}px)`),
      allCaps: P.filter(p => cs(p).textTransform === 'uppercase' || (p.textContent === p.textContent.toUpperCase() && /[A-Z]{4}/.test(p.textContent))).length,
      leading: P.filter(p => { const lh = cs(p).lineHeight; return (lh === 'normal' ? 1.2 : parseFloat(lh) / px(p)) < 1.35; }).slice(0, 3).map(p => p.textContent.trim().slice(0, 30)),
      hiddenShare: T.length ? hidden.length / T.length : 0, hiddenSample: hidden.slice(0, 3).map(el => ownText(el).slice(0, 30)),
      transitionAll, nameless,
      emptyLinks: links.filter(l => !l.href || l.href === '#' || /^javascript:/i.test(l.href)).map(l => l.html),
      missingAnchors: links.filter(l => l.href && l.href.startsWith('#') && !l.href.startsWith('#/') && l.href.length > 1 && !document.getElementById(decodeURIComponent(l.href.slice(1)))).map(l => l.html),
      fileLinks: links.filter(l => l.abs.startsWith('file:')).map(l => l.abs),
      small: small.slice(0, 8).map(x => `${label(x.el).slice(0, 28) || x.el.tagName} (${Math.round(x.h)}px < ${x.min})`),
      noAlt: imgs.filter(i => !i.hasAttribute('alt')).map(i => (i.getAttribute('src') || '').slice(0, 60)).slice(0, 5),
      broken: imgs.filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map(i => i.getAttribute('src').slice(0, 60)).slice(0, 5),
      unsized: imgs.filter(i => !(i.getAttribute('width') && i.getAttribute('height')) && cs(i).aspectRatio === 'auto').length,
      eager: imgs.filter(i => box(i).top + scrollY > innerHeight * 1.5 && i.loading !== 'lazy').length,
      svgUnlabelled: svgs.filter(s => s.getAttribute('aria-hidden') !== 'true' && !s.getAttribute('aria-label') && !s.querySelector('title') && !s.closest('[aria-hidden=true],a,button') && s.getAttribute('role') !== 'img').length,
      clickable: clickable.slice(0, 5).map(el => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0]),
      unlabelled: fields.filter(f => !(f.labels && f.labels.length) && !f.getAttribute('aria-label') && !f.getAttribute('aria-labelledby')).length,
      main: !!document.querySelector('main,[role=main]'), lang: document.documentElement.getAttribute('lang') || '',
      nearEdge: textNodesNearEdge.slice(0, 4).map(el => el.textContent.trim().slice(0, 30)), clipped: clipped.slice(0, 4).map(el => ownText(el).slice(0, 30)),
      inputsSmall: inputsSmall.length, viewport, hasMotion,
      navHiddenAt390: headerNav.filter(el => !seen(el)).length, navTotal: headerNav.length,
      overflow: document.documentElement.scrollWidth > innerWidth + 1
    };
  });
  check('HR-01', first.h1Top !== null && first.h1Top < first.ih && first.actionTop < first.ih, {at: '390×844', h1_top: Math.round(first.h1Top), first_action_top: Math.round(first.actionTop)});
  check('TY-01', r.h1Count === 1, r.h1Count);
  const skips = r.levels.flatMap((lv, i) => i && lv > r.levels[i - 1] + 1 ? [`${r.levels[i - 1]}→${lv}`] : []);
  check('TY-02', skips.length === 0, skips);
  check('TY-03', r.ratioH1 >= 1.25 && (r.ratioH2 === null || r.ratioH2 >= 1.25), {h1_to_body: +r.ratioH1.toFixed(2), h2_to_body: r.ratioH2 && +r.ratioH2.toFixed(2)});
  check('TY-04', r.weights.length >= 2, r.weights);
  check('TY-05', r.h1Tracking >= -0.0405, `${r.h1Tracking}em`);
  check('TY-06', r.wideTracked.length === 0, r.wideTracked);
  check('TY-07', r.bodyPx >= 16, `${r.bodyPx}px`);
  check('TY-08', r.tiny.length === 0, r.tiny);
  check('TY-10', r.leading.length === 0, r.leading);
  check('TY-11', r.allCaps === 0, r.allCaps);
  check('LY-01', !r.overflow);
  check('LY-03', r.clipped.length === 0, r.clipped);
  check('LY-04', r.nearEdge.length === 0, r.nearEdge);
  check('MO-02', r.hiddenShare <= 0.05, {share: Math.round(r.hiddenShare * 100) + '%', sample: r.hiddenSample});
  check('MO-03', r.transitionAll.length === 0, r.transitionAll);
  check('MB-01', !/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(r.viewport), r.viewport);
  check('MB-02', !r.small.some(s => s.endsWith('< 44)')), r.small.filter(s => s.endsWith('< 44)')));
  check('MB-03', !r.small.some(s => s.endsWith('< 24)')), r.small.filter(s => s.endsWith('< 24)')));
  check('MB-04', r.inputsSmall === 0, r.inputsSmall);
  check('AX-01', r.nameless.length === 0, r.nameless);
  check('AX-02', r.noAlt.length === 0, r.noAlt);
  check('AX-03', r.svgUnlabelled === 0, r.svgUnlabelled);
  check('AX-05', r.clickable.length === 0, r.clickable);
  check('AX-06', r.unlabelled === 0, r.unlabelled);
  check('AX-07', r.main);
  check('AX-08', !!r.lang, r.lang);
  check('AX-09', errors.length === 0, errors.slice(0, 5));
  const missingFiles = r.fileLinks.filter(f => { try { return !existsSync(fileURLToPath(f.split('#')[0])); } catch { return false; } });
  check('AX-10', !r.emptyLinks.length && !r.missingAnchors.length && !missingFiles.length, {empty: r.emptyLinks, missing_anchor: r.missingAnchors, missing_file: missingFiles});
  check('AX-11', r.broken.length === 0, r.broken);
  check('PF-01', r.unsized === 0, `${r.unsized} unsized`);
  check('PF-02', r.eager === 0, `${r.eager} eager below the fold`);

  // Mobile menu: if header nav items disappear on phones, a header button must bring them back.
  if (r.navTotal && r.navHiddenAt390) {
    const btn = page.locator('header button:visible').first();
    let ok = false;
    if (await btn.count()) { await btn.click().catch(() => {}); await page.waitForTimeout(400); ok = await run(page, () => [...document.querySelectorAll('header nav a, header nav button')].filter(seen).length > 0); }
    check('MB-05', ok, ok ? 'menu control reveals the navigation' : 'navigation hidden and no working header button');
  } else check('MB-05', true, 'navigation stays visible');

  // Focus visibility (AX-04)
  await page.keyboard.press('Tab');
  const noFocus = await run(page, () => {
    const sig = el => { const s = cs(el); return [s.outlineStyle, s.outlineWidth, s.boxShadow, s.backgroundColor, s.color, s.textDecorationLine, s.borderColor].join('|'); };
    const list = [];
    for (const el of [...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(seen).slice(0, 40)) {
      el.blur(); const a = sig(el); el.focus({focusVisible: true}); if (a === sig(el)) list.push(label(el).slice(0, 30) || el.tagName);
    }
    document.activeElement?.blur(); return list;
  });
  check('AX-04', noFocus.length === 0, noFocus.slice(0, 8));

  // Contrast via axe (CO-01)
  let Axe = null; try { Axe = (await import('@axe-core/playwright')).default; } catch {}
  if (Axe) { const res = await new Axe({page}).withRules(['color-contrast']).analyze(); check('CO-01', res.violations.length === 0, res.violations.flatMap(v => v.nodes.map(n => n.target.join(' '))).slice(0, 8)); }
  else notRun('CO-01', 'install @axe-core/playwright to measure contrast');
  await ctx.close();

  // ======================= 1440 × 900 =======================
  {
    const {ctx: c, page: p} = await open({width: 1440, height: 900});
    const d = await run(p, () => {
      const h1 = document.querySelector('h1');
      // Primary actions: filled buttons and links outside header, nav and footer, button-sized (not whole cards or banners).
      const filledActions = [...document.querySelectorAll('a[href],button')].filter(el => seen(el) && filled(el) && label(el) && label(el).length <= 40 && !el.closest('header,nav,footer') && box(el).width < 360 && box(el).height < 90);
      const actionTop = Math.min(...[...document.querySelectorAll('a[href],button')].filter(el => seen(el) && boxed(el)).map(a => box(a).top), 1e9);
      const h1Lines = h1 ? Math.max(1, Math.round(box(h1).height / (parseFloat(cs(h1).lineHeight) || px(h1) * 1.1))) : 1;
      const h1Words = h1 ? h1.innerText.trim().split(/\s+/).length : 0;
      const P = bodyP();
      // Characters per rendered line, from the paragraph's own text and line count (no font-width guess).
      const measures = P.filter(p => p.textContent.trim().length > 160).map(p => { const lh = parseFloat(cs(p).lineHeight) || px(p) * 1.4; const lines = Math.round(box(p).height / lh); return lines >= 3 ? Math.round(p.textContent.trim().length / lines) : null; }).filter(Boolean);
      const famStack = h1 ? cs(h1).fontFamily : '';
      const fam = famStack.split(',')[0].replace(/["']/g, '').trim();
      const serif = /serif/i.test(famStack) && !/sans-serif/i.test(famStack.split(',').slice(-1)[0] || '') || /(Serif|Garamond|Georgia|Times|Playfair|Fraunces|Newsreader|Lora|Merriweather|Gloock|Libre Baskerville)/i.test(fam);
      const g = groundAt(innerWidth / 2, Math.min(innerHeight / 2, h1 ? box(h1).bottom : 300));
      const cream = g[0] > 232 && g[1] > 222 && g[2] < 236 && g[0] - g[2] > 6;
      const root = document.querySelector('main') || document.body;
      let sections = [...root.children].filter(el => seen(el) && box(el).height > 200);
      if (sections.length < 3) sections = [...root.querySelectorAll('section')].filter(el => seen(el) && box(el).height > 200);
      const pads = sections.map(s => Math.round(parseFloat(cs(s).paddingTop) + parseFloat(cs(s).paddingBottom)));
      const isCard = el => { const s = cs(el); const b = box(el); return b.width > 80 && b.height > 60 && parseFloat(s.borderTopLeftRadius) > 2 && (parseFloat(s.borderTopWidth) > 0 || s.boxShadow !== 'none'); };
      const all = [...document.querySelectorAll('body *')].filter(seen);
      const cards = all.filter(isCard);
      const nested = cards.filter(cd => cards.some(o => o !== cd && o.contains(cd)));
      const header = document.querySelector('header');
      const sticky = header && ['sticky', 'fixed'].includes(cs(header).position) ? box(header).height : 0;
      const anchorsHidden = sticky ? [...document.querySelectorAll('a[href^="#"]:not([href^="#/"])')].map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean).filter(t => parseFloat(cs(t).scrollMarginTop) < sticky - 4).length : 0;
      const footer = document.querySelector('footer');
      const footerLinks = footer ? [...footer.querySelectorAll('a[href]')].filter(a => a.getAttribute('href') && a.getAttribute('href') !== '#').length : 0;
      const gradientText = all.filter(el => /text/.test(cs(el).backgroundClip + cs(el).webkitBackgroundClip) && /gradient/.test(cs(el).backgroundImage)).length;
      const glow = all.filter(el => { const sh = cs(el).boxShadow; if (sh === 'none') return false; return sh.split(/,(?![^(]*\))/).some(part => { const m = part.match(/rgba?\(([^)]+)\)\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px/); if (!m) return false; const [r1, g1, b1] = m[1].split(',').map(Number); const chroma = Math.max(r1, g1, b1) - Math.min(r1, g1, b1); return Math.abs(+m[2]) < 1 && Math.abs(+m[3]) < 1 && +m[4] >= 16 && chroma > 40; }); }).length
        + all.filter(el => /radial-gradient/.test(cs(el).backgroundImage) && box(el).width > innerWidth * 0.5).length;
      const hairShadow = all.filter(el => parseFloat(cs(el).borderTopWidth) > 0 && parseFloat(cs(el).borderTopWidth) <= 1 && /(\d+)px\s+(\d+)px\s+(\d+)px/.test(cs(el).boxShadow) && cs(el).boxShadow.match(/[\d.]+px/g).map(parseFloat).some((v, i, a) => i % 4 === 2 && v >= 20)).length;
      const meta = document.querySelector('meta[name=theme-color]')?.getAttribute('content');
      const metaRgb = meta && (() => { const t = document.createElement('i'); t.style.color = meta; document.body.appendChild(t); const v = rgb(cs(t).color); t.remove(); return v; })();
      const top = groundAt(innerWidth / 2, 4);
      // Template tells
      const ADJ = /^(fast|faster|secure|simple|powerful|reliable|scalable|flexible|easy|seamless|intuitive|smart|modern|beautiful|private|open|robust|effortless|instant|lightning|blazing|trusted|smarter|better|safe|unified)\b/i;
      const rows = all.filter(el => { const k = cardsIn(el); return k.length === 3 && Math.max(...k.map(x => box(x).width)) - Math.min(...k.map(x => box(x).width)) < 20; });
      const adjRows = rows.filter(row => cardsIn(row).filter(k => { const h = k.querySelector('h2,h3,h4'); return h && h.innerText.trim().split(/\s+/).length <= 3 && ADJ.test(h.innerText.trim()); }).length >= 2).length;
      const iconRows = rows.filter(row => cardsIn(row).every(k => { const f = k.firstElementChild; return f && /^(SVG|IMG|SPAN|DIV|I)$/.test(f.tagName) && box(f).width <= 72 && box(f).height <= 72 && (f.tagName === 'SVG' || f.querySelector('svg,img')) && k.querySelector('h3,h4'); })).length;
      const h2s = [...document.querySelectorAll('h2')].filter(seen);
      const kicked = h2s.filter(h => { const prev = h.previousElementSibling || h.parentElement?.previousElementSibling; if (!prev) return false; const t = prev.innerText?.trim() || ''; return t.length > 0 && t.length < 60 && px(prev) < 14 && (cs(prev).textTransform === 'uppercase' || t === t.toUpperCase()); }).length;
      const sideStripe = all.filter(el => { const s = cs(el); const l = parseFloat(s.borderLeftWidth); return l >= 3 && parseFloat(s.borderRightWidth) <= 1 && parseFloat(s.borderTopWidth) <= 1 && box(el).height > 40; }).length;
      const loops = document.getAnimations().filter(a => a.effect?.getComputedTiming().iterations === Infinity && a.effect?.target);
      const tinyLoops = loops.filter(a => box(a.effect.target).width < 40).length;
      const bigLoops = loops.filter(a => box(a.effect.target).width >= 150).length;
      const pauseControl = !![...document.querySelectorAll('button')].find(b => /pause|stop/i.test(label(b)));
      const copy = document.body.innerText;
      const buzz = (copy.match(/\b(seamless(ly)?|supercharge[sd]?|unleash(es|ed)?|revolutioni[sz]e[sd]?|cutting[- ]edge|next[- ]gen(eration)?|game[- ]chang(er|ing)|best[- ]in[- ]class|world[- ]class|empower(s|ing)?)\b/gi) || []);
      const filler = all.filter(el => { const bi = cs(el).backgroundImage; const bs = cs(el).backgroundSize; return /repeating-(linear|radial)-gradient/.test(bi) || (/gradient/.test(bi) && /^\d{1,2}px/.test(bs) && box(el).width > innerWidth * 0.5); }).length;
      return {h1Px: h1 ? px(h1) : 0, h1Lines, h1Words, fam, serif, cream, actionTop, h1Top: h1 ? box(h1).top : 1e9,
        ctaLabels: [...new Set(filledActions.map(el => label(el).toLowerCase()))], measures, pads, nested: nested.length, anchorsHidden, footer: !!footer, footerLinks,
        gradientText, glow, hairShadow, meta, metaRgb, top, adjRows, iconRows, h2Count: h2s.length, kicked, sideStripe, tinyLoops, bigLoops, pauseControl, buzz: [...new Set(buzz.map(b => b.toLowerCase()))],
        filler, overflow: document.documentElement.scrollWidth > innerWidth + 1};
    });
    check('HR-01', d.h1Top < 900 && d.actionTop < 900, {at: '1440×900', h1_top: Math.round(d.h1Top), first_action_top: Math.round(d.actionTop)});
    check('HR-04', d.h1Px <= 104 || d.h1Words / d.h1Lines <= 3.2, {h1_px: d.h1Px, words: d.h1Words, lines: d.h1Lines});
    const GENERIC = /^(get started|learn more|sign up|start free|try (it )?(now|free)|book a demo|request a demo|contact (us|sales)|join (the )?waitlist|start now)$/i;
    check('HR-05', d.ctaLabels.length === 0 || d.ctaLabels.some(l => !GENERIC.test(l)), d.ctaLabels);
    check('PS-06', d.ctaLabels.length <= 3, d.ctaLabels);
    check('TY-09', d.measures.every(m => m <= 85), d.measures);
    const OVERUSED = /^(Inter|Inter Variable|InterVariable|Space Grotesk|Fraunces|Roboto|Poppins|Montserrat)$/i;
    check('TY-12', !OVERUSED.test(d.fam), d.fam);
    check('LY-05', d.pads.length < 4 || new Set(d.pads).size > 1, d.pads);
    check('LY-06', d.nested === 0, `${d.nested} nested card(s)`);
    check('LY-08', d.anchorsHidden === 0, `${d.anchorsHidden} anchor target(s) under the sticky header`);
    check('LY-09', d.footer && d.footerLinks > 0, {footer: d.footer, links: d.footerLinks});
    check('LY-01', !d.overflow, 'at 1440');
    check('CO-02', d.gradientText === 0, d.gradientText);
    check('CO-03', d.glow === 0, d.glow);
    check('CO-04', d.hairShadow < 3, `${d.hairShadow} surfaces`);
    check('CO-05', !(d.cream && d.serif), {cream_ground: d.cream, serif_display: d.serif, face: d.fam});
    const near = (a, b) => a && b && a.slice(0, 3).every((v, i) => Math.abs(v - b[i]) <= 12);
    check('CO-07', !d.meta || near(d.metaRgb, d.top), {meta: d.meta, top_background: d.top});
    check('TT-01', d.adjRows === 0, `${d.adjRows} row(s) of adjective cards`);
    check('TT-02', d.iconRows === 0, `${d.iconRows} row(s) of icon-topped cards`);
    check('TT-03', !(d.h2Count >= 3 && d.kicked / d.h2Count >= 0.75), `${d.kicked} of ${d.h2Count} h2s have a tracked-caps label above`);
    check('TT-05', d.sideStripe === 0, d.sideStripe);
    check('TT-06', d.tinyLoops === 0, `${d.tinyLoops} small infinite animation(s)`);
    check('TT-07', d.buzz.length === 0, d.buzz);
    check('TT-08', d.filler === 0, d.filler);
    check('MO-05', d.bigLoops === 0 || d.pauseControl, {large_loops: d.bigLoops, pause_control: d.pauseControl});

    // Stylesheet scan: layout-property animation, overshoot/ease-in/scale(0), font-display.
    const css = await run(p, () => {
      const rules = []; let opaqueSheets = 0;
      const walk = list => { for (const rule of list) { rules.push(rule); if (rule.cssRules) walk(rule.cssRules); } };
      for (const sh of document.styleSheets) { try { walk(sh.cssRules); } catch { opaqueSheets++; } }
      const LAYOUT = /^(width|height|top|left|right|bottom|margin|padding|inset|max-width|max-height)/;
      const layoutKeyframes = rules.filter(r => r.type === CSSRule.KEYFRAMES_RULE && [...r.cssRules].some(k => [...k.style].some(p => LAYOUT.test(p)))).map(r => r.name);
      const layoutTransitions = [...document.querySelectorAll('body *')].filter(el => { const s = cs(el); return s.transitionProperty.split(',').some((pp, i) => LAYOUT.test(pp.trim()) && parseFloat(s.transitionDuration.split(',')[i % s.transitionDuration.split(',').length]) > 0); }).length;
      const fromZero = rules.filter(r => r.type === CSSRule.KEYFRAMES_RULE && [...r.cssRules].some(k => /^(from|0%)$/.test(k.keyText) && (/scale\(0\)/.test(k.style.transform) || k.style.scale === '0'))).map(r => r.name);
      const timings = [...document.querySelectorAll('body *')].flatMap(el => [cs(el).animationTimingFunction, cs(el).transitionTimingFunction]).join(',');
      const overshoot = (timings.match(/cubic-bezier\(([^)]+)\)/g) || []).filter(t => { const v = t.match(/-?[\d.]+/g).map(Number); return v[1] > 1 || v[3] > 1 || v[1] < 0 || v[3] < 0; });
      const easeInAnim = [...document.querySelectorAll('body *')].filter(el => cs(el).animationName !== 'none' && /(^|,\s*)ease-in($|,)/.test(cs(el).animationTimingFunction)).length;
      const faces = rules.filter(r => r.type === CSSRule.FONT_FACE_RULE);
      const badDisplay = faces.filter(f => !/^(swap|optional|fallback)$/.test(f.style.getPropertyValue('font-display'))).map(f => f.style.getPropertyValue('font-family'));
      return {layoutKeyframes, layoutTransitions, fromZero, overshoot: [...new Set(overshoot)], easeInAnim, faces: faces.length, badDisplay: [...new Set(badDisplay)], opaqueSheets};
    });
    check('MO-04', !css.layoutKeyframes.length && !css.layoutTransitions, {keyframes: css.layoutKeyframes, transitions: css.layoutTransitions});
    check('MO-06', !css.overshoot.length && !css.fromZero.length && !css.easeInAnim, {overshoot: css.overshoot, from_scale_0: css.fromZero, ease_in_entrances: css.easeInAnim});
    if (!css.faces && css.opaqueSheets) notRun('PF-03', 'font rules are in cross-origin stylesheets');
    else check('PF-03', css.badDisplay.length === 0, css.badDisplay);
    const bytes = await p.evaluate(() => [...performance.getEntriesByType('navigation'), ...performance.getEntriesByType('resource')].reduce((n, e) => n + (e.transferSize || e.encodedBodySize || 0), 0));
    if (url.startsWith('file:')) notRun('PF-04', 'transfer size is not reported for file:// pages');
    else check('PF-04', bytes < 2.5e6, `${(bytes / 1e6).toFixed(2)} MB`);
    await c.close();
  }
  // ======================= 320 px and 200 % zoom =======================
  {
    const {ctx: c, page: p} = await open({width: 320, height: 640});
    check('LY-02', !(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)));
    await c.close();
    const {ctx: z, page: q} = await open({width: 720, height: 450}, {deviceScaleFactor: 2});
    check('MB-08', !(await q.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)));
    await z.close();
  }
  // ======================= Reduced motion, by behaviour =======================
  if (!r.hasMotion) check('MO-01', true, 'no animations or transitions on the page');
  else {
    const {ctx: c, page: p} = await open({width: 390, height: 844}, {reducedMotion: 'reduce'});
    await scrollThrough(p);
    const rm = await run(p, () => ({running: document.getAnimations().filter(a => a.playState === 'running').length,
      hidden: textEls().filter(el => { for (let a = el; a && a !== document.body; a = a.parentElement) if (Number(cs(a).opacity) < 0.1) return true; return false; }).length}));
    check('MO-01', rm.running === 0 && rm.hidden === 0, rm);
    await c.close();
  }
} catch (error) { out.failures.push('runtime'); out.error = String(error).split('\n')[0]; }
finally { await browser.close(); }

for (const id of Object.keys(CATALOG)) if (CATALOG[id].verify === 'auto' && !done.has(id) && !out.error) notRun(id, 'not reached');
for (const c of out.checks) if (c.pass === false) (c.severity === 'block' ? out.failures : out.warnings).push(c.id);
out.summary = `${out.checks.filter(c => c.pass).length} passed, ${out.failures.length} block failures, ${out.warnings.length} warnings, ${out.not_run.length} not run, of ${out.checks.length} automatic checks`;
console.log(JSON.stringify(out, null, 2));
if (out.failures.length) process.exitCode = 1;
