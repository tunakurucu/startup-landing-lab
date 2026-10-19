// Mechanical checks for a rendered landing page. Prints JSON; exits 1 if any "fail" check fails, 0 otherwise.
// Usage: node scripts/check-page.mjs <url-or-html-file>
// Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
// If @axe-core/playwright is installed, a colour-contrast check runs too; otherwise it is reported as not_run.
// These checks are evidence, not proof of quality. A clean run still needs a screenshot critique.
import {chromium} from 'playwright';
import {resolve} from 'node:path';
import {existsSync} from 'node:fs';
import {pathToFileURL, fileURLToPath} from 'node:url';

const input = process.argv[2];
if (!input) { console.error('usage: check-page.mjs <url-or-html>'); process.exit(2); }
const url = /^https?:\/\//.test(input) ? input : pathToFileURL(resolve(input)).href;
const browser = await chromium.launch();
const findings = {target: url, checks: [], failures: [], warnings: []};
const check = (name, severity, pass, detail) => {
  findings.checks.push({name, severity, pass, detail});
  if (!pass) (severity === 'fail' ? findings.failures : findings.warnings).push(name);
};

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
  await page.waitForTimeout(600);
  return {ctx, page, errors};
}
async function scrollThrough(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) { scrollTo(0, y); await new Promise(r => setTimeout(r, 140)); }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(900);
}

try {
  // ---- 390 px pass: structure, type, links, targets, motion hygiene
  const {ctx, page, errors} = await open({width: 390, height: 844});
  await scrollThrough(page);
  const r = await page.evaluate(() => {
    const cs = el => getComputedStyle(el);
    const visibleBox = el => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
    const ownText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
    const all = [...document.querySelectorAll('body *')];
    const textEls = all.filter(el => ownText(el) && visibleBox(el));
    // Type hierarchy: the H1 and the first H2 must each be at least 1.25x the body size; at least two weights in use.
    const h1 = document.querySelector('h1');
    const bodyP = [...document.querySelectorAll('p')].find(p => visibleBox(p) && p.textContent.trim().length > 60) || document.body;
    const px = el => el ? parseFloat(cs(el).fontSize) : null;
    const h2 = document.querySelector('h2');
    const weights = [...new Set(textEls.map(el => Math.round(Number(cs(el).fontWeight) / 100) * 100))];
    const tracking = h1 ? (cs(h1).letterSpacing === 'normal' ? 0 : parseFloat(cs(h1).letterSpacing) / parseFloat(cs(h1).fontSize)) : 0;
    // Hidden text after a full scroll: reveal animations that never fired.
    const hidden = textEls.filter(el => { let a = el; while (a && a !== document.body) { const s = cs(a); if (Number(s.opacity) < 0.1 || s.visibility === 'hidden') return true; a = a.parentElement; } return false; });
    // transition: all with a real duration.
    const transitionAll = all.filter(el => { const s = cs(el); return s.transitionProperty.split(',').some(p => p.trim() === 'all') && s.transitionDuration.split(',').some(d => parseFloat(d) > 0); }).slice(0, 5).map(el => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''));
    // Names, links, headings.
    const accessibleName = el => el.getAttribute('aria-label')?.trim() || el.getAttribute('title')?.trim() || el.innerText?.trim() || el.querySelector('img[alt]')?.getAttribute('alt')?.trim() || '';
    const nameless = [...document.querySelectorAll('a,button')].filter(el => !accessibleName(el)).map(el => el.outerHTML.slice(0, 140));
    const links = [...document.querySelectorAll('a')].map(a => ({href: a.getAttribute('href'), resolved: a.href, html: a.outerHTML.slice(0, 140)}));
    const missingAnchors = links.filter(l => l.href && l.href.startsWith('#') && !l.href.startsWith('#/') && l.href.length > 1 && !document.getElementById(l.href.slice(1))).map(l => l.html);
    const emptyLinks = links.filter(l => !l.href || l.href === '#' || /^javascript:/i.test(l.href)).map(l => l.html);
    const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => Number(h.tagName[1]));
    const skips = levels.flatMap((lv, i) => i && lv > levels[i - 1] + 1 ? [`${levels[i - 1]}→${lv}`] : []);
    // Targets: header/nav controls and visually boxed buttons need 44px; other controls 24px. Inline text links are exempt.
    const boxed = el => { const s = cs(el); return (s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') || parseFloat(s.borderTopWidth) > 0; };
    const small = [...document.querySelectorAll('button,[role=button],select,header a,nav a')].filter(visibleBox).filter(el => cs(el).display !== 'inline').map(el => {
      const b = el.getBoundingClientRect(); const min = el.closest('header,nav') || boxed(el) ? 44 : 24;
      return b.height < min ? `${(el.innerText || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30)} (${Math.round(b.height)}px < ${min})` : null;
    }).filter(Boolean);
    const unsized = [...document.querySelectorAll('img')].filter(i => !(i.getAttribute('width') && i.getAttribute('height')) && cs(i).aspectRatio === 'auto').map(i => i.getAttribute('src')?.slice(0, 80));
    const viewport = document.querySelector('meta[name=viewport]')?.getAttribute('content') || '';
    const hasMotion = all.some(el => { const s = cs(el); return s.animationName !== 'none' || s.transitionDuration.split(',').some(d => parseFloat(d) > 0); }) || document.getAnimations().length > 0;
    return {
      h1Count: document.querySelectorAll('h1').length,
      ratioH1: h1 ? px(h1) / px(bodyP) : 0, ratioH2: h2 ? px(h2) / px(bodyP) : null, bodyPx: px(bodyP), weights,
      tracking: Math.round(tracking * 1000) / 1000,
      hiddenShare: textEls.length ? hidden.length / textEls.length : 0, hiddenSample: hidden.slice(0, 4).map(el => el.textContent.trim().slice(0, 40)),
      transitionAll, nameless, missingAnchors, emptyLinks, fileLinks: links.filter(l => l.resolved.startsWith('file:')).map(l => l.resolved),
      skips, small: small.slice(0, 8), unsized: unsized.slice(0, 5), viewport, hasMotion,
      overflow390: document.documentElement.scrollWidth > innerWidth + 1
    };
  });
  check('one_h1', 'fail', r.h1Count === 1, r.h1Count);
  check('type_hierarchy', 'fail', r.ratioH1 >= 1.25 && (r.ratioH2 === null || r.ratioH2 >= 1.25) && r.weights.length >= 2,
    {h1_to_body: Math.round(r.ratioH1 * 100) / 100, h2_to_body: r.ratioH2 && Math.round(r.ratioH2 * 100) / 100, weights: r.weights});
  check('display_tracking_floor', 'fail', r.tracking >= -0.0405, `${r.tracking}em (floor −0.04em)`);
  check('body_size_mobile', 'warn', r.bodyPx >= 16, `${r.bodyPx}px`);
  check('no_page_errors', 'fail', errors.length === 0, errors.slice(0, 5));
  check('zoom_enabled', 'fail', !/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(r.viewport), r.viewport);
  check('content_visible_after_scroll', 'fail', r.hiddenShare <= 0.05, {share: Math.round(r.hiddenShare * 100) + '%', sample: r.hiddenSample});
  check('no_transition_all', 'fail', r.transitionAll.length === 0, r.transitionAll);
  check('no_overflow_390', 'fail', !r.overflow390, r.overflow390);
  check('named_controls', 'fail', r.nameless.length === 0, r.nameless);
  const missingFiles = r.fileLinks.filter(f => { try { return !existsSync(fileURLToPath(f.split('#')[0])); } catch { return false; } });
  check('valid_links', 'fail', !r.emptyLinks.length && !r.missingAnchors.length && !missingFiles.length, {empty: r.emptyLinks, missing_anchor: r.missingAnchors, missing_file: missingFiles});
  check('heading_order', 'fail', r.skips.length === 0, r.skips);
  check('touch_targets', 'fail', r.small.length === 0, r.small);
  check('images_sized', 'warn', r.unsized.length === 0, r.unsized);

  // Focus visibility: every focusable control must look different when focused from the keyboard.
  await page.keyboard.press('Tab');
  const noFocusStyle = await page.evaluate(() => {
    const sig = el => { const s = getComputedStyle(el); return [s.outlineStyle, s.outlineWidth, s.boxShadow, s.backgroundColor, s.color, s.textDecorationLine, s.borderColor].join('|'); };
    const out = [];
    for (const el of [...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')].slice(0, 40)) {
      if (!el.getBoundingClientRect().width) continue;
      el.blur(); const before = sig(el); el.focus({focusVisible: true}); const after = sig(el);
      if (before === after) out.push((el.innerText || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30));
    }
    document.activeElement?.blur();
    return out;
  });
  check('focus_visible', 'fail', noFocusStyle.length === 0, noFocusStyle.slice(0, 8));

  // Contrast via axe when it is installed.
  let axe = null; try { axe = (await import('@axe-core/playwright')).default; } catch {}
  if (axe) {
    const res = await new axe({page}).withRules(['color-contrast']).analyze();
    check('contrast', 'fail', res.violations.length === 0, res.violations.flatMap(v => v.nodes.map(n => n.target.join(' '))).slice(0, 8));
  } else check('contrast', 'warn', false, 'not_run: install @axe-core/playwright, or check contrast another way');
  await ctx.close();

  // ---- 320 px: narrow-phone overflow
  {
    const {ctx: c, page: p} = await open({width: 320, height: 640});
    check('no_overflow_320', 'fail', !(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)), null);
    await c.close();
  }

  // ---- Reduced motion, tested by behaviour rather than by searching for the media query
  if (!r.hasMotion) check('reduced_motion', 'fail', true, 'not applicable: no animations or transitions found');
  else {
    const {ctx: c, page: p} = await open({width: 390, height: 844}, {reducedMotion: 'reduce'});
    await scrollThrough(p);
    const rm = await p.evaluate(() => ({
      running: document.getAnimations().filter(a => a.playState === 'running').map(a => a.animationName || a.transitionProperty || 'animation').slice(0, 5),
      hidden: [...document.querySelectorAll('body *')].filter(el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && Number(getComputedStyle(el).opacity) < 0.1).length
    }));
    check('reduced_motion', 'fail', rm.running.length === 0 && rm.hidden === 0, rm);
    await c.close();
  }
} catch (error) { findings.failures.push('runtime'); findings.error = String(error).split('\n')[0]; }
finally { await browser.close(); }
console.log(JSON.stringify(findings, null, 2));
if (findings.failures.length) process.exitCode = 1;
