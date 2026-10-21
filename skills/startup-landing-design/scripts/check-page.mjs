// Run the automatic checks from assets/checks.json (81 of the skill's 112) against a rendered page.
// Usage: node scripts/check-page.mjs <url-or-html-file>
// Prints JSON: every check with id, severity, pass and detail, plus failures (block), warnings (warn) and not_run.
// Exits 1 when any block-severity check fails, and 3 when no browser could run: it then still prints JSON with
// "status": "unavailable" and the exact error, so a missing browser is never mistaken for a clean page.
// Needs Playwright with Chromium (see browser.mjs for where it looks); @axe-core/playwright is optional
// and powers the contrast check (CO-01), which is reported as not_run without it.
// PF-05 throttles CPU and network through the Chrome DevTools Protocol. A page opened from disk is served from a
// temporary local HTTP server (127.0.0.1, this one measurement only) so the network throttle applies. Its numbers
// are lab estimates, not field data. Every other check runs on the page exactly as given.
// The other 31 checks need eyes: they are answered in DESIGN-RECORD.md and enforced by verify-record.mjs.
import {launch, load, Unavailable} from './browser.mjs';
import {resolve, dirname, extname, relative, sep} from 'node:path';
import {existsSync, readFileSync, statSync} from 'node:fs';
import {pathToFileURL, fileURLToPath} from 'node:url';
import {createServer} from 'node:http';
import {inflateSync} from 'node:zlib';

const T0 = Date.now();
const input = process.argv[2];
if (!input) { console.error('usage: check-page.mjs <url-or-html>'); process.exit(2); }
const url = /^https?:\/\//.test(input) ? input : pathToFileURL(resolve(input)).href;
const isFile = url.startsWith('file:');
const CATALOG = Object.fromEntries(JSON.parse(readFileSync(new URL('../assets/checks.json', import.meta.url), 'utf8')).map(c => [c.id, c]));
const out = {status: 'ran', target: url, checked_on: new Date().toISOString().slice(0, 10), checks: [], failures: [], warnings: [], not_run: []};
const done = new Set();
let touched = null;   // checks decided inside the section that is running
function check(id, pass, detail = null) {
  const c = CATALOG[id]; if (!c || c.verify !== 'auto') throw new Error(`unknown auto check ${id}`);
  touched?.add(id);
  if (done.has(id)) { const prev = out.checks.find(x => x.id === id); if (prev.pass && !pass) { prev.pass = false; prev.detail = detail; } return; }
  done.add(id); out.checks.push({id, check: c.check, severity: c.severity, pass: !!pass, detail});
}
function notRun(id, why) {
  const prev = out.checks.find(x => x.id === id);
  if (prev) { prev.pass = null; prev.detail = `not_run: ${why}`; } else out.checks.push({id, check: CATALOG[id].check, severity: CATALOG[id].severity, pass: null, detail: `not_run: ${why}`});
  done.add(id); if (!out.not_run.includes(id)) out.not_run.push(id);
}
// Run one group of checks; if it throws, every check it owns and had not decided yet is reported as not_run with the
// error, never as a pass.
// A check this section shares with an earlier one (two viewports) is not left as a pass on half the evidence.
async function section(name, ids, fn) {
  const mine = touched = new Set();
  try { await fn(); } catch (e) {
    const why = `${name} could not finish: ${String(e?.message || e).split('\n')[0].slice(0, 160)}`;
    for (const id of ids) {
      if (!done.has(id)) notRun(id, why);
      else if (!mine.has(id) && out.checks.find(x => x.id === id)?.pass) notRun(id, `measured at one viewport only; ${why}`);
    }
  } finally { touched = null; }
}

let browser;
try { browser = await launch(); } catch (e) {
  const autos = Object.values(CATALOG).filter(c => c.verify === 'auto').map(c => c.id);
  console.log(JSON.stringify({...out, status: 'unavailable', error: String(e.message || e).split('\n')[0], not_run: autos,
    summary: `browser unavailable: none of the ${autos.length} automatic checks ran`}, null, 2));
  process.exit(e instanceof Unavailable ? 3 : 1);
}

// Observers installed before any page script: layout shifts (session windows, input excluded), LCP, and the DOM at load.
const PERF_INIT = () => {
  const s = window.__cls = {max: 0, cur: 0, first: 0, last: 0, top: [], skip: []};
  try {
    new PerformanceObserver(l => {
      for (const e of l.getEntries()) {
        if (e.hadRecentInput || s.skip.some(([a, b]) => e.startTime >= a && e.startTime <= b)) continue;
        if (s.cur && (e.startTime - s.last > 1000 || e.startTime - s.first > 5000)) s.cur = 0;
        if (!s.cur) s.first = e.startTime;
        s.cur += e.value; s.last = e.startTime; s.max = Math.max(s.max, s.cur);
        s.top.push({value: +e.value.toFixed(4), at_ms: Math.round(e.startTime), sources: (e.sources || []).slice(0, 3).map(x => x.node ? x.node.nodeName.toLowerCase() + (typeof x.node.className === 'string' && x.node.className.trim() ? '.' + x.node.className.trim().split(/\s+/)[0] : '') : '?')});
      }
    }).observe({type: 'layout-shift', buffered: true});
  } catch { /* no layout-shift support */ }
  window.__lcp = null;
  try { new PerformanceObserver(l => { const e = l.getEntries().at(-1); window.__lcp = {t: e.startTime, el: e.element, url: e.url, size: e.size}; }).observe({type: 'largest-contentful-paint', buffered: true}); } catch { /* none */ }
  window.__atLoad = null;
  addEventListener('load', () => { window.__atLoad = new WeakSet(document.querySelectorAll('*')); window.__loadT = performance.now(); });
};
// Records motion while reduced motion is on: CSS animations and transitions, WAAPI animations and inline styles rewritten by script.
const MOTION_INIT = () => {
  window.__moves = [];
  const MOVE = /^(transform|translate|scale|rotate|top|left|right|bottom|inset|offset-|margin|zoom|background-position)/;
  const props = a => { try { if (a.transitionProperty) return [a.transitionProperty]; return [...new Set(a.effect.getKeyframes().flatMap(k => Object.keys(k)).filter(k => !['offset', 'easing', 'composite', 'computedOffset'].includes(k)).map(k => k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())))]; } catch { return []; } };
  const note = a => {
    const moving = props(a).filter(p => MOVE.test(p)); if (!moving.length) return;
    let d = 0; try { d = a.effect.getComputedTiming().activeDuration; } catch { /* none */ }
    if (!(d > 50) || !a.effect?.target) return;
    window.__moves.push({el: a.effect.target, props: moving, d, name: a.animationName || a.transitionProperty || a.id || 'script animation'});
  };
  window.__noteAll = () => { for (const a of document.getAnimations()) if (a.playState === 'running') note(a); };
  document.addEventListener('animationstart', e => { for (const a of e.target.getAnimations()) if (a.animationName === e.animationName) note(a); }, true);
  document.addEventListener('transitionrun', e => { for (const a of e.target.getAnimations()) if (a.transitionProperty === e.propertyName) note(a); }, true);
  window.__styleMoves = new Map();
  const pick = s => ((s || '').match(/(?:^|;)\s*(?:transform|translate|scale|rotate|top|left|right|bottom|inset)\s*:[^;]+/g) || []).join(';');
  const start = () => new MutationObserver(ms => { for (const m of ms) if (pick(m.oldValue) !== pick(m.target.getAttribute('style'))) window.__styleMoves.set(m.target, (window.__styleMoves.get(m.target) || 0) + 1); })
    .observe(document.documentElement, {subtree: true, attributes: true, attributeFilter: ['style'], attributeOldValue: true});
  if (document.documentElement) start(); else document.addEventListener('DOMContentLoaded', start);
};

async function open(viewport, options = {}, init = []) {
  const ctx = await browser.newContext({viewport, ...options});
  const page = await ctx.newPage();
  for (const fn of init) await page.addInitScript(fn);
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
  for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) { scrollTo({top: y, behavior: 'instant'}); await new Promise(r => setTimeout(r, 140)); window.__noteAll?.(); }
  scrollTo({top: 0, behavior: 'instant'}); await new Promise(r => setTimeout(r, 900)); window.__noteAll?.();
});

// Shared in-page helpers. Written as a function so regexes need no double escaping; its body is injected into every evaluate.
/* eslint-disable no-unused-vars */
function helpers() {
  var cs = el => getComputedStyle(el);
  var box = el => el.getBoundingClientRect();
  var seen = el => { const b = box(el); if (b.width < 2 || b.height < 2) return false; if (el.checkVisibility && !el.checkVisibility({visibilityProperty: true})) return false; for (let a = el; a && a !== document.documentElement; a = a.parentElement) { const s = cs(a); if (s.display === 'none' || s.visibility === 'hidden') return false; } return true; };
  var ownText = el => [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').replace(/\s+/g, ' ').trim();
  var textEls = () => [...document.querySelectorAll('body *')].filter(el => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'TITLE', 'TEMPLATE'].includes(el.tagName) && ownText(el).length > 1 && seen(el));
  var px = el => parseFloat(cs(el).fontSize);
  var __cx = null, __cc = new Map();
  // Any CSS colour (rgb, hex, oklch, color(), …) to [r, g, b, alpha] through a 1×1 canvas.
  var toRGBA = c => {
    if (!c || c === 'none' || c === 'transparent') return [0, 0, 0, 0];
    if (__cc.has(c)) return __cc.get(c);
    if (!__cx) { const cv = document.createElement('canvas'); cv.width = cv.height = 1; __cx = cv.getContext('2d', {willReadFrequently: true}); }
    __cx.clearRect(0, 0, 1, 1); __cx.fillStyle = '#000'; __cx.fillStyle = c; __cx.fillRect(0, 0, 1, 1);
    const d = __cx.getImageData(0, 0, 1, 1).data; const v = [d[0], d[1], d[2], d[3] / 255]; __cc.set(c, v); return v;
  };
  var opaque = c => toRGBA(c)[3] > 0.5;
  var groundAt = (x, y) => { for (let el = document.elementFromPoint(x, y); el; el = el.parentElement) { const c = toRGBA(cs(el).backgroundColor); if (c[3] > 0.5) return c; } return [255, 255, 255, 1]; };
  var groundBehind = el => { for (let a = el.parentElement; a; a = a.parentElement) { const c = toRGBA(cs(a).backgroundColor); if (c[3] > 0.5) return c; } return [255, 255, 255, 1]; };
  var lin = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  var lum = c => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
  var contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  var blend = (fg, bg) => { const a = fg[3] ?? 1; return [0, 1, 2].map(i => fg[i] * a + bg[i] * (1 - a)).concat(1); };
  var boxed = el => { const s = cs(el); return (opaque(s.backgroundColor)) || parseFloat(s.borderTopWidth) > 0; };
  var filled = el => opaque(cs(el).backgroundColor);
  var label = el => {
    const by = el.getAttribute('aria-labelledby');
    const ref = by ? by.split(/\s+/).map(i => document.getElementById(i)?.innerText || '').join(' ') : '';
    return (el.getAttribute('aria-label') || ref || el.innerText || (el.tagName === 'INPUT' ? el.value : '') || el.getAttribute('title') || '').replace(/[↗↓→←↻↺✓+−]/g, '').replace(/\s+/g, ' ').trim();
  };
  var bodyP = () => [...document.querySelectorAll('p')].filter(p => seen(p) && p.textContent.trim().length > 60);
  var cardsIn = parent => [...parent.children].filter(c => seen(c) && box(c).width > 120);
  var visibleOpacity = el => { let o = 1; for (let a = el; a && a !== document.documentElement; a = a.parentElement) o *= Number(cs(a).opacity); return o; };
  var fixedAnc = el => { for (let a = el; a && a !== document.documentElement; a = a.parentElement) { const p = cs(a).position; if (p === 'fixed' || p === 'sticky') return a; } return null; };
  var describe = el => {
    if (!el) return null;
    const base = el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/)[0] : '');
    const t = (el.innerText || el.getAttribute?.('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 32);
    return base + (t ? ` "${t}"` : '');
  };
  var h1El = () => document.querySelector('h1');
  // Site chrome: nav, footer, or a header/banner that is not the hero (does not hold the h1).
  var chrome = el => { if (el.closest('nav,footer,[role=contentinfo]')) return true; const hd = el.closest('header,[role=banner]'); return !!hd && !(h1El() && hd.contains(h1El())); };
  var actions = () => [...document.querySelectorAll('a[href],button,[role=button],input[type=submit],input[type=button]')].filter(el => seen(el) && label(el) && label(el).length <= 40);
  // The primary action: the first filled (else bordered) action in the first screen outside site chrome; else a filled one in the
  // header; else the first plain button or link in the hero (so an action that does not look clickable is still found and judged).
  var primaryAction = () => {
    const A = actions().filter(el => { const b = box(el); return b.top + scrollY < innerHeight && b.bottom + scrollY > 0 && b.right > 0 && b.left < innerWidth && b.width < 360 && b.height < 90 && !/^skip\b/i.test(label(el)); });
    const hero = A.filter(el => !chrome(el));
    return hero.find(filled) || hero.find(boxed) || A.find(filled) || hero.find(el => el.tagName === 'BUTTON' || el.matches('input,[role=button]')) || hero[0] || null;
  };
  // The signature artifact: the element marked data-signature; else a guess, the region outside site chrome holding the most
  // controls (ties go to the smaller one). Returns {el, marked}.
  var CTL_SEL = 'button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=tab],[role=switch],[role=slider],[role=radio],[role=checkbox],[role=option]';
  var signature = () => {
    const m = document.querySelector('[data-signature]');
    if (m && m.getAttribute('data-signature').startsWith('none')) return {none: m.getAttribute('data-signature').replace(/^none:?\s*/, '') || 'no reason given'};
    if (m) return {el: m, marked: true};
    const ctls = el => [...el.querySelectorAll(CTL_SEL)].filter(c => seen(c) && !c.disabled && c.type !== 'submit' && c.type !== 'email').length;
    const pageArea = document.documentElement.scrollHeight * innerWidth;
    let best = null, bestN = 1;
    for (const el of document.querySelectorAll('main section, main figure, main article, main div, main form, section, figure')) {
      if (!seen(el) || chrome(el)) continue;
      const b = box(el); if (b.width * b.height > pageArea * 0.5) continue;
      const n = ctls(el);
      if (n > bestN || (n === bestN && best && b.width * b.height < box(best).width * box(best).height)) { best = el; bestN = n; }
    }
    return best ? {el: best, marked: false} : null;
  };
  // Words on the last rendered line of an element (HR-03): each word's box, grouped by line top.
  var lastLineWords = el => {
    const tops = [];
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = walk.nextNode(); n; n = walk.nextNode()) {
      const re = /\S+/g; let m;
      while ((m = re.exec(n.textContent))) { const g = document.createRange(); g.setStart(n, m.index); g.setEnd(n, m.index + m[0].length); const q = g.getClientRects()[0]; if (q && q.width > 0) tops.push({top: q.top, word: m[0]}); }
    }
    if (!tops.length) return null;
    const last = Math.max(...tops.map(t => t.top));
    const lines = new Set(tops.map(t => Math.round(t.top / 4))).size;
    const onLast = tops.filter(t => t.top > last - 4);
    return {lines, words: onLast.length, text: onLast.map(t => t.word).join(' ')};
  };
  var textRects = el => { const r = [];for (const n of el.childNodes) if (n.nodeType === 3 && n.textContent.trim()) { const g = document.createRange(); g.selectNodeContents(n); r.push(...[...g.getClientRects()].filter(q => q.width > 0 && q.height > 0)); } return r; };

  // LY-09: buttons that sit side by side share their height and their vertical centre.
  var alignRows = () => {
    const isBtn = el => { const st = cs(el), b = box(el); return el.tagName === 'BUTTON' || (el.tagName === 'A' && b.height >= 32 && (toRGBA(st.backgroundColor)[3] > 0.5 || parseFloat(st.borderTopWidth) > 0) && parseFloat(st.paddingLeft) >= 8); };
    const off = [];
    for (const parent of document.querySelectorAll('body *')) {
      const kids = [...parent.children].filter(k => seen(k) && isBtn(k)); if (kids.length < 2) continue;
      for (let i = 1; i < kids.length; i++) {
        const a = box(kids[i - 1]), b = box(kids[i]);
        const sameRow = Math.abs((a.top + a.bottom) / 2 - (b.top + b.bottom) / 2) < Math.max(a.height, b.height) / 2 && b.left >= a.right - 1;
        if (!sameRow) continue;
        const dh = Math.abs(a.height - b.height), dc = Math.abs((a.top + a.bottom) / 2 - (b.top + b.bottom) / 2);
        if (dh > 2 || dc > 2) off.push(`${(label(kids[i - 1]) || 'button').slice(0, 20)} | ${(label(kids[i]) || 'button').slice(0, 20)}: heights ${Math.round(a.height)}/${Math.round(b.height)}px, centres ${Math.round(dc)}px apart`);
      }
    }
    return [...new Set(off)].slice(0, 6);
  };
  // The calm first screen (HR-09, HR-10): what a visitor sees before scrolling, outside the site header and the hero picture.
  var calm = () => {
    scrollTo({top: 0, behavior: 'instant'});
    const s = signature(); if (s?.none) return {none: s.none};
    const vh = innerHeight, hd = document.querySelector('header,[role=banner]');
    const pics = [...document.querySelectorAll('[data-hero-visual]')];
    // Pictures do not count: the marked hero picture, and anything drawn (svg, canvas) or hidden from assistive tech.
    const out = el => (hd && hd.contains(el)) || pics.some(v => v.contains(el)) || !!el.closest('svg,canvas,[aria-hidden=true],[role=img],[role=presentation]');
    const inView = r => r.bottom > 0 && r.top < vh && r.width > 0 && r.height > 0;
    let words = 0; const mono = new Set(), eyebrow = [];
    const h = h1El(), hb = h ? box(h) : null;
    for (const el of textEls()) {
      if (out(el)) continue;
      // The next section peeking in at the bottom (HR-05 wants it) is not part of the poster.
      const rects = textRects(el).filter(r => inView(r) && r.top < vh * 0.88); if (!rects.length) continue;
      const t = ownText(el); words += (t.match(/[\p{L}\p{N}][\p{L}\p{N}'’.,:%$€£-]*/gu) || []).length;
      const st = cs(el);
      if (/mono|courier|consolas|menlo/i.test(st.fontFamily.split(',')[0])) mono.add(t.slice(0, 30));
      if (hb && st.textTransform === 'uppercase' && parseFloat(st.letterSpacing) > 0.5 && rects[0].bottom <= hb.top + 2 && hb.top - rects[0].bottom < 140) eyebrow.push(t.slice(0, 30));
    }
    const fields = [...document.querySelectorAll('input:not([type=hidden]),select,textarea,table,[role=table],[role=grid],[role=tablist],[role=slider]')]
      .filter(el => seen(el) && !out(el) && inView(box(el))).map(el => describe(el));
    const isBtn = el => { const st = cs(el), b = box(el); return el.tagName === 'BUTTON' || (b.height >= 32 && (toRGBA(st.backgroundColor)[3] > 0.5 || parseFloat(st.borderTopWidth) > 0) && parseFloat(st.paddingLeft) >= 8); };
    const skipLink = el => el.tagName === 'A' && /^#/.test(el.getAttribute('href') || '') && /^skip/i.test(label(el) || '');
    const actions = [...document.querySelectorAll('a[href],button,[role=button]')].filter(el => seen(el) && !out(el) && !skipLink(el) && inView(box(el)) && box(el).top < vh * 0.88 && isBtn(el)).map(el => (label(el) || el.tagName).slice(0, 30));
    const picCtl = pics.flatMap(v => [...v.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')]).filter(seen).length;
    return {words, mono: [...mono].slice(0, 5), eyebrow: eyebrow.slice(0, 3), fields: fields.slice(0, 5), actions, picture: pics.length ? describe(pics[0]) : null, picture_controls: picCtl};
  };
}
/* eslint-enable no-unused-vars */
const HELPERS = helpers.toString().replace(/^[^{]*\{/, '').replace(/\}\s*$/, '');
const run = (page, fn, arg) => page.evaluate(`(() => { ${HELPERS}; return (${fn.toString()})(${JSON.stringify(arg ?? null)}); })()`);

// ---------- Node-side helpers ----------
// Minimal PNG decoder for Chromium screenshots (8-bit RGB or RGBA, not interlaced).
function decodePNG(buf) {
  let pos = 8, w = 0, h = 0, depth = 8, type = 6; const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos), t = buf.toString('ascii', pos + 4, pos + 8), data = buf.subarray(pos + 8, pos + 8 + len);
    if (t === 'IHDR') { w = data.readUInt32BE(0); h = data.readUInt32BE(4); depth = data[8]; type = data[9]; if (data[12]) return null; }
    else if (t === 'IDAT') idat.push(data); else if (t === 'IEND') break;
    pos += 12 + len;
  }
  if (depth !== 8 || ![2, 6].includes(type)) return null;
  const ch = type === 6 ? 4 : 3, stride = w * ch, raw = inflateSync(Buffer.concat(idat)), px = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = y * (stride + 1) + 1, dst = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? px[dst + x - ch] : 0, b = y ? px[dst - stride + x] : 0, c = x >= ch && y ? px[dst - stride + x - ch] : 0;
      let v = raw[src + x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      px[dst + x] = v & 255;
    }
  }
  return {w, h, ch, px};
}
const lin = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = c => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const near = (a, b) => a && b && a.slice(0, 3).every((v, i) => Math.abs(v - b[i]) <= 12);
const fileOf = u => { try { return u.startsWith('file:') ? fileURLToPath(u.split('#')[0].split('?')[0]) : null; } catch { return null; } };
const TYPES = {'.html': 'text/html', '.htm': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.webm': 'video/webm', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json'};
// Serve a page from disk over 127.0.0.1 so CDP network throttling applies. The root climbs one folder per "../" the page uses.
function serve(file) {
  const html = readFileSync(file, 'utf8');
  const ups = Math.max(0, ...(html.match(/(?:\.\.\/)+/g) || []).map(m => m.length / 3));
  let root = dirname(file); for (let i = 0; i < ups; i++) root = dirname(root);
  const server = createServer((req, res) => {
    try {
      const f = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://x').pathname));
      if ((f !== root && !f.startsWith(root + sep)) || !existsSync(f) || !statSync(f).isFile()) { res.writeHead(404).end(); return; }
      res.writeHead(200, {'content-type': TYPES[extname(f).toLowerCase()] || 'application/octet-stream'}); res.end(readFileSync(f));
    } catch { res.writeHead(500).end(); }
  });
  return new Promise(ok => server.listen(0, '127.0.0.1', () => ok({server, href: `http://127.0.0.1:${server.address().port}/` + relative(root, file).split(sep).map(encodeURIComponent).join('/')})));
}
const part = {};   // results measured in more than one pass, combined at the end

// ---------- in-page measurements used by several passes ----------
const FALSE_FLOOR = () => {
  const ih = innerHeight;
  if (document.documentElement.scrollHeight <= ih + 2) return {pass: true, why: 'the page fits in one screen'};
  let hero = h1El();
  if (hero) while (hero.parentElement && !['MAIN', 'BODY'].includes(hero.parentElement.tagName)) hero = hero.parentElement;
  if (hero && box(hero).bottom < ih - 24) return {pass: true, why: `the hero ends at ${Math.round(box(hero).bottom)}px, above the fold`};
  const band = ih * 0.85;
  const background = el => { const b = box(el); return ['absolute', 'fixed'].includes(cs(el).position) && b.width >= innerWidth * 0.8 && b.height >= ih * 0.5; };
  const cands = [];
  for (const el of textEls()) { if (fixedAnc(el) || visibleOpacity(el) < 0.1) continue; for (const q of textRects(el)) cands.push({el, q}); }
  for (const el of document.querySelectorAll('img,video,canvas,svg,picture,iframe')) { if (!seen(el) || fixedAnc(el) || visibleOpacity(el) < 0.1 || background(el)) continue; cands.push({el, q: box(el)}); }
  const hit = cands.find(({q}) => q.bottom > band && q.top < ih && q.right > 0 && q.left < innerWidth);
  return {pass: !!hit, why: hit ? `${describe(hit.el)} shows at ${Math.round(hit.q.top)}–${Math.round(hit.q.bottom)}px` : `nothing visible in the bottom 15% of the screen (${Math.round(band)}–${ih}px): it reads as the end of the page`};
};
// Text clipping and overlap of text boxes, recorded per element so a second call can be diffed against the first.
const SPACING_MEASURE = () => {
  const W = window.__tsIds || (window.__tsIds = new Map());
  const leaves = textEls().filter(el => !el.closest('[aria-hidden=true]')).slice(0, 600);
  for (const el of leaves) if (!W.has(el)) W.set(el, W.size);
  const hides = v => v === 'hidden' || v === 'clip';
  const clipped = [], rects = new Map();
  for (const el of leaves) {
    const s = cs(el), b = box(el), tr = textRects(el); rects.set(el, tr);
    let c = b.width >= 8 && b.height >= 8 && ((hides(s.overflowX) && el.scrollWidth > el.clientWidth + 2) || (hides(s.overflowY) && el.scrollHeight > el.clientHeight + 2) || (s.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth));
    if (!c && tr.length) {
      const u = {l: Math.min(...tr.map(q => q.left)), t: Math.min(...tr.map(q => q.top)), r: Math.max(...tr.map(q => q.right)), b: Math.max(...tr.map(q => q.bottom))};
      let sx = ['auto', 'scroll'].includes(s.overflowX), sy = ['auto', 'scroll'].includes(s.overflowY);   // past a scroll container, overflow on that axis is reachable by scrolling
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
        const sa = cs(a), hx = !sx && hides(sa.overflowX), hy = !sy && hides(sa.overflowY);
        const ab = box(a);
        if ((hx && (u.l < ab.left - 2 || u.r > ab.right + 2)) || (hy && (u.t < ab.top - 2 || u.b > ab.bottom + 2))) { c = true; break; }
        if (['auto', 'scroll'].includes(sa.overflowX)) sx = true;
        if (['auto', 'scroll'].includes(sa.overflowY)) sy = true;
      }
    }
    if (c) clipped.push(W.get(el));
  }
  // What can be seen of each text box: cut to every ancestor that clips or scrolls its overflow.
  const visibleRects = el => {
    let c = {left: -1e9, top: -1e9, right: 1e9, bottom: 1e9};
    for (let a = el; a && a !== document.body; a = a.parentElement) { const sa = cs(a); if (sa.overflowX !== 'visible' || sa.overflowY !== 'visible') { const ab = box(a); c = {left: Math.max(c.left, ab.left), top: Math.max(c.top, ab.top), right: Math.min(c.right, ab.right), bottom: Math.min(c.bottom, ab.bottom)}; } }
    return (rects.get(el) || []).map(q => ({left: Math.max(q.left, c.left), top: Math.max(q.top, c.top), right: Math.min(q.right, c.right), bottom: Math.min(q.bottom, c.bottom)})).filter(q => q.right - q.left > 1 && q.bottom - q.top > 1);
  };
  const items = leaves.flatMap(el => visibleRects(el).map(q => ({el, q}))).sort((a, b) => a.q.top - b.q.top);
  const pairs = new Set();
  for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length && items[j].q.top < items[i].q.bottom - 2; j++) {
    const A = items[i], B = items[j];
    if (A.el === B.el || A.el.contains(B.el) || B.el.contains(A.el)) continue;
    const ox = Math.min(A.q.right, B.q.right) - Math.max(A.q.left, B.q.left), oy = Math.min(A.q.bottom, B.q.bottom) - Math.max(A.q.top, B.q.top);
    if (ox > 2 && oy > 2) { const a = W.get(A.el), b = W.get(B.el); pairs.add(a < b ? `${a}-${b}` : `${b}-${a}`); }
  }
  const names = {}; for (const el of leaves) names[W.get(el)] = ownText(el).slice(0, 28);
  const overflow = document.documentElement.scrollWidth > innerWidth + 1;
  const scrolls = el => { for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) if (['auto', 'scroll', 'hidden', 'clip'].includes(cs(a).overflowX)) return true; return false; };
  let wide = [];
  if (overflow) {
    // What sticks out: a box wider than the screen, or a line of text running past its box (a word that cannot wrap).
    const boxes = [...document.querySelectorAll('body *')].filter(el => seen(el) && box(el).right > innerWidth + 1 && !scrolls(el)).sort((a, b) => box(a).width - box(b).width).slice(0, 2).map(el => `${describe(el)} reaches ${Math.round(box(el).right)}px`);
    const lines = leaves.filter(el => !scrolls(el) && textRects(el).some(q => q.right > innerWidth + 1)).slice(0, 2).map(el => `text "${ownText(el).slice(0, 28)}" runs to ${Math.round(Math.max(...textRects(el).map(q => q.right)))}px`);
    wide = [...lines, ...boxes].slice(0, 3);
    if (!wide.length) wide = [`the page scrolls sideways (${document.documentElement.scrollWidth}px wide at ${innerWidth}px)`];
  }
  return {clipped, overlaps: [...pairs], overflow, wide, names};
};
const SPACING_CSS = '*{line-height:1.5!important;letter-spacing:0.12em!important;word-spacing:0.16em!important}p,li,dd{margin-bottom:2em!important}';
async function textSpacing(page, where) {
  await page.evaluate(() => window.__cls?.skip.push([performance.now(), Infinity]));
  const base = await run(page, SPACING_MEASURE);
  const tag = await page.addStyleTag({content: SPACING_CSS});
  await page.waitForTimeout(300);
  const after = await run(page, SPACING_MEASURE);
  await tag.evaluate(n => n.remove()); await page.waitForTimeout(150);
  await page.evaluate(() => { const s = window.__cls?.skip.at(-1); if (s) s[1] = performance.now(); });
  const name = i => after.names[i] ?? base.names[i] ?? `#${i}`;
  const clipped = after.clipped.filter(i => !base.clipped.includes(i)).map(i => `"${name(i)}" clipped`);
  const overlaps = after.overlaps.filter(k => !base.overlaps.includes(k)).map(k => k.split('-').map(i => `"${name(i)}"`).join(' overlaps '));
  return {where, clipped, overlaps, overflow: after.overflow && !base.overflow ? after.wide : false};
}

// ---------- the idle watch: no input, snapshots at about 1, 5.5, 7 and 8.5 seconds ----------
const SNAP = () => {
  const W = window.__snapIds || (window.__snapIds = new WeakMap());
  let n = window.__snapN || 0;
  const id = el => { if (!W.has(el)) W.set(el, ++n); return W.get(el); };
  const lim = innerHeight * 2;
  const els = [...document.querySelectorAll('body *')].filter(el => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName)).filter(el => { const b = box(el); return b.width >= 2 && b.height >= 2 && b.top + scrollY < lim && b.bottom + scrollY > 0; }).filter(seen).slice(0, 2500);
  const items = els.map(el => { const b = box(el), s = cs(el); return [id(el), ownText(el).slice(0, 80), Math.round(b.left + scrollX), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height), s.transform === 'none' ? '' : s.transform.replace(/-?[\d.]+(e-?\d+)?/g, v => (+v).toFixed(2)), Math.round(Number(s.opacity) * 20) / 20, describe(el)]; });
  window.__snapN = n;
  const h1 = h1El(), pa = primaryAction();
  const inRegion = el => { const b = box(el); return b.top + scrollY < lim && seen(el); };
  const anims = document.getAnimations().filter(a => { if (a.playState !== 'running' || !a.effect?.target || !(a.effect.target instanceof Element)) return false; const t = a.effect.getComputedTiming(); return (t.iterations === Infinity || t.activeDuration > 5000) && inRegion(a.effect.target); }).map(a => `${describe(a.effect.target)} (${a.animationName || a.transitionProperty || 'animation'})`);
  const videos = [...document.querySelectorAll('video')].filter(v => !v.paused && !v.ended && v.currentTime > 0 && inRegion(v)).map(v => ({what: describe(v), controls: v.controls}));
  const pause = [...document.querySelectorAll('button,[role=button],input[type=button]')].filter(seen).map(label).find(l => /\b(pause|stop)\b/i.test(l)) || null;
  return {t: Math.round(performance.now()), items, h1: h1 ? h1.innerText.replace(/\s+/g, ' ').trim() : null, pa: pa ? label(pa) : null, anims: [...new Set(anims)], videos, pause};
};
const OVERLAY = () => {
  const cols = 8, rows = 16, hits = new Map(), h1 = h1El(), main = document.querySelector('main');
  const root = el => { let r = null; for (let a = el; a && a !== document.documentElement; a = a.parentElement) if (a.matches('dialog[open],[role=dialog],[role=alertdialog],[aria-modal=true]') || cs(a).position === 'fixed') r = a; return r; };
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const el = document.elementFromPoint((i + 0.5) * innerWidth / cols, (j + 0.5) * innerHeight / rows); if (!el) continue;
    const r = root(el); if (!r || (h1 && r.contains(h1)) || (main && r.contains(main))) continue;
    hits.set(r, (hits.get(r) || 0) + 1);
  }
  return [...hits].map(([el, n]) => ({what: describe(el), share: Math.round(n / (cols * rows) * 100), consent: /cookie|consent|gdpr|privacy/i.test(el.innerText || '')})).sort((a, b) => b.share - a.share);
};
async function idleWatch(viewport, withOverlay) {
  const ctx = await browser.newContext({viewport});
  try {
    const page = await ctx.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 30000});
    await page.addStyleTag({content: '*{caret-color:transparent!important}'}).catch(() => {});
    const at = async ms => { const now = await page.evaluate(() => performance.now()); if (ms > now) await page.waitForTimeout(ms - now); };
    await at(1000); const s1 = await run(page, SNAP);
    let overlay = null;
    if (withOverlay) { await at(5000); overlay = await run(page, OVERLAY); }
    await at(5500); const s2 = await run(page, SNAP); const px2 = await page.screenshot();
    await at(7000); const s3 = await run(page, SNAP);
    await at(8500); const s4 = await run(page, SNAP); const px4 = await page.screenshot();
    return {viewport: `${viewport.width}×${viewport.height}`, snaps: [s1, s2, s3, s4], overlay, pixelsChanged: !px2.equals(px4)};
  } finally { await ctx.close(); }
}
function diffSnaps(a, b) {
  const A = new Map(a.items.map(x => [x[0], x])), out = [];
  for (const x of b.items) {
    const y = A.get(x[0]);
    if (!y) { if (x[1]) out.push({what: x[8], how: 'appeared', text: x[1]}); continue; }
    const how = [x[1] !== y[1] && 'text', (Math.abs(x[2] - y[2]) > 1 || Math.abs(x[3] - y[3]) > 1 || Math.abs(x[4] - y[4]) > 1 || Math.abs(x[5] - y[5]) > 1) && 'position', x[6] !== y[6] && 'transform', x[7] !== y[7] && 'opacity'].filter(Boolean);
    if (how.length) out.push({what: x[8], how: how.join('+'), text: x[1], was: y[1]});
  }
  return out;
}

try {
  // ======================= 390 × 844 (main pass) with the idle watches running beside it =======================
  const idle = Promise.allSettled([idleWatch({width: 390, height: 844}, true), idleWatch({width: 1440, height: 900}, false)]);
  let r = null;
  await section('the 390px pass', ['HR-01', 'TY-01', 'TY-02', 'TY-03', 'TY-04', 'TY-05', 'TY-06', 'TY-08', 'TY-09', 'LY-01', 'LY-03', 'LY-04', 'MO-02', 'MO-03', 'MB-01', 'MB-02', 'MB-03', 'MB-04', 'MB-05', 'AX-01', 'AX-02', 'AX-04', 'AX-05', 'AX-06', 'AX-07', 'AX-08', 'AX-09', 'PF-01', 'PF-02', 'PF-04', 'CO-01'], async () => {
    const {ctx, page, errors} = await open({width: 390, height: 844}, {}, [PERF_INIT]);
    try {
      // PF-02: the LCP element, read before any scroll or input can end LCP.
      const lcp = await run(page, () => {
        const e = window.__lcp; if (!e) return null;
        const el = e.el; if (!el) return {gone: true, url: e.url || null, t: Math.round(e.t)};
        const file = u => { try { return new URL(u, location.href).pathname.split('/').pop(); } catch { return u; } };
        const f = e.url ? file(e.url) : null;
        return {element: describe(el), tag: el.tagName, url: e.url || null, t: Math.round(e.t), image: !!e.url, file: f,
          present_at_load: window.__atLoad ? window.__atLoad.has(el) : null, after_load_ms: window.__loadT ? Math.round(e.t - window.__loadT) : null, lazy: el.getAttribute?.('loading') === 'lazy',
          fetchpriority: (el.getAttribute?.('fetchpriority') || '').toLowerCase() || null,
          preload: !!f && [...document.querySelectorAll('link[rel~=preload][as=image]')].some(l => (l.href && file(l.href) === f) || (l.getAttribute('imagesrcset') || '').includes(f))};
      });
      if (!lcp) check('PF-02', true, 'no LCP entry was reported (nothing large painted in the first screen)');
      else if (lcp.gone) check('PF-02', false, {problem: 'the LCP element was removed from the page after it painted', url: lcp.url});
      else {
        let initialHTML = null;
        try { initialHTML = isFile ? readFileSync(fileURLToPath(url.split('#')[0]), 'utf8') : await (await ctx.request.get(url.split('#')[0], {timeout: 8000})).text(); } catch { /* unknown */ }
        // Client-rendered pages add the hero right after load; that is a warning for the record (frameworks.md), not a block.
        // A block needs the element to arrive late enough to be felt: more than a second after the load event.
        const problems = [lcp.lazy && 'it is lazy-loaded', lcp.present_at_load === false && (lcp.after_load_ms ?? 0) > 1000 && `it was injected ${lcp.after_load_ms} ms after the load event`,
          lcp.image && lcp.tag === 'IMG' && lcp.fetchpriority !== 'high' && !lcp.preload && 'the image has neither fetchpriority="high" nor a preload',
          lcp.image && lcp.tag !== 'IMG' && !lcp.preload && 'the CSS or SVG image has no preload'].filter(Boolean);
        check('PF-02', problems.length === 0, {...lcp, note: lcp.present_at_load === false && problems.length === 0 ? 'rendered by script after load: put the first screen in the server HTML (see frameworks.md)' : undefined, in_initial_html: initialHTML && lcp.file ? initialHTML.includes(lcp.file) : (lcp.image ? null : 'n/a (text)'), problems});
      }
      const first = await run(page, () => {
        const h1 = h1El();
        const acts = [...document.querySelectorAll('a[href],button')].filter(el => seen(el) && boxed(el));
        return {h1Top: h1 ? box(h1).top : null, actionTop: Math.min(...acts.map(a => box(a).top), 1e9), ih: innerHeight};
      });
      part.floor390 = await run(page, FALSE_FLOOR);
      await scrollThrough(page);
      const loadErrors = errors.slice();
      r = await run(page, () => {
        const all = [...document.querySelectorAll('body *')];
        const T = textEls();
        const h1 = h1El(), h2 = document.querySelector('h2');
        const P = bodyP(); const p0 = P[0] || document.body;
        const trackingEm = el => cs(el).letterSpacing === 'normal' ? 0 : parseFloat(cs(el).letterSpacing) / px(el);
        const hidden = T.filter(el => { for (let a = el; a && a !== document.body; a = a.parentElement) if (Number(cs(a).opacity) < 0.1) return true; return false; });
        const transitionAll = all.filter(el => { const s = cs(el); const props = s.transitionProperty.split(','), durs = s.transitionDuration.split(','); return props.some((p, i) => p.trim() === 'all' && parseFloat(durs[i % durs.length]) > 0); }).slice(0, 5).map(el => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0]);
        const nameless = [...document.querySelectorAll('a,button')].filter(el => !label(el) && !(!seen(el) && el.textContent.trim()) && !el.querySelector('img[alt]:not([alt=""]), svg[aria-label], svg title, [aria-label]')).map(el => el.outerHTML.slice(0, 120));
        const links = [...document.querySelectorAll('a')].map(a => ({href: a.getAttribute('href'), abs: a.href, html: a.outerHTML.slice(0, 120)}));
        const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(seen).map(h => Number(h.tagName[1]));
        const header = document.querySelector('header');
        // Targets (MB-02, MB-03): rectangles in page coordinates.
        const rectOf = el => { const b = box(el); return {l: b.left + scrollX, t: b.top + scrollY, r: b.right + scrollX, b: b.bottom + scrollY, w: b.width, h: b.height}; };
        const inSentence = el => { if (cs(el).display !== 'inline') return false; const blk = el.parentElement?.closest('p,li,dd,td,blockquote,figcaption'); if (!blk) return false; return blk.innerText.replace(/\s+/g, ' ').trim().length > (el.innerText || '').replace(/\s+/g, ' ').trim().length + 1; };
        const TSEL = 'a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=tab],[role=link],[role=switch],[role=checkbox],[role=radio],[role=menuitem],[tabindex]:not([tabindex="-1"])';
        const targets = [...document.querySelectorAll(TSEL)].filter(el => seen(el) && !el.disabled && cs(el).pointerEvents !== 'none' && !el.closest('[aria-hidden=true],[inert]') && visibleOpacity(el) > 0.05 && !(['checkbox', 'radio'].includes(el.type) && el.labels && el.labels.length));
        const TG = targets.map(el => ({el, r: rectOf(el), inline: inSentence(el)})).filter(x => x.r.r > 0 && x.r.l < innerWidth);
        const under = x => x.r.w + 0.5 < 24 || x.r.h + 0.5 < 24;
        const ctr = q => [(q.l + q.r) / 2, (q.t + q.b) / 2];
        const circleHits = (c, q) => { const dx = Math.max(q.l - c[0], 0, c[0] - q.r), dy = Math.max(q.t - c[1], 0, c[1] - q.b); return dx * dx + dy * dy < 144; };
        const related = (a, b) => a.contains(b) || b.contains(a);
        const name = el => label(el).slice(0, 26) || el.tagName.toLowerCase();
        const small24 = TG.filter(x => !x.inline && under(x)).map(x => {
          const c = ctr(x.r);
          const clash = TG.find(u => u !== x && !related(u.el, x.el) && (circleHits(c, u.r) || (under(u) && !u.inline && Math.hypot(c[0] - ctr(u.r)[0], c[1] - ctr(u.r)[1]) < 24)));
          return clash ? `${name(x.el)} ${Math.round(x.r.w)}×${Math.round(x.r.h)}px, too close to "${name(clash.el)}"` : null;
        }).filter(Boolean);
        const pa = primaryAction();
        const navCtl = [...document.querySelectorAll('header a[href],header button,nav a[href],nav button,[role=banner] a[href],[role=banner] button')].filter(el => seen(el) && visibleOpacity(el) > 0.05 && !el.closest('footer,[role=contentinfo]') && (el.closest('nav') || !(h1 && el.closest('header,[role=banner]').contains(h1))));
        const small44 = [...new Set([pa, ...navCtl].filter(Boolean))].map(el => ({el, r: rectOf(el)})).filter(x => x.r.r > 0 && x.r.l < innerWidth && (x.r.w + 0.5 < 44 || x.r.h + 0.5 < 44)).map(x => `${name(x.el)} ${Math.round(x.r.w)}×${Math.round(x.r.h)}px`);
        const imgs = [...document.querySelectorAll('img')];
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
        return {
          h1Count: document.querySelectorAll('h1').length, levels,
          ratioH1: h1 ? px(h1) / px(p0) : 0, ratioH2: h2 ? px(h2) / px(p0) : null,
          h1Tracking: h1 ? Math.round(trackingEm(h1) * 1000) / 1000 : 0,
          bodyPx: px(p0), tiny: T.filter(el => px(el) < 11.95 &&!el.closest('[aria-hidden=true]')).slice(0, 6).map(el => `${ownText(el).slice(0, 24)} (${px(el).toFixed(1)}px)`),
          thinSmall: T.filter(el => px(el) < 28 && Number(cs(el).fontWeight) < 400).slice(0, 4).map(el => `${ownText(el).slice(0, 30)} (${px(el)}px/${cs(el).fontWeight})`),
          leading: P.filter(p => { const lh = cs(p).lineHeight; return (lh === 'normal' ? 1.2 : parseFloat(lh) / px(p)) < 1.35; }).slice(0, 3).map(p => p.textContent.trim().slice(0, 30)),
          hiddenShare: T.length ? hidden.length / T.length : 0, hiddenSample: hidden.slice(0, 3).map(el => ownText(el).slice(0, 30)),
          transitionAll, nameless,
          emptyLinks: links.filter(l => !l.href || l.href === '#' || /^javascript:/i.test(l.href)).map(l => l.html),
          missingAnchors: links.filter(l => l.href && l.href.startsWith('#') && !l.href.startsWith('#/') && l.href.length > 1 && !document.getElementById(decodeURIComponent(l.href.slice(1)))).map(l => l.html),
          fileLinks: links.filter(l => l.abs.startsWith('file:')).map(l => l.abs),
          small44: small44.slice(0, 8), small24: small24.slice(0, 8), targets: TG.length,
          noAlt: imgs.filter(i => !i.hasAttribute('alt')).map(i => (i.getAttribute('src') || '').slice(0, 60)).slice(0, 5),
          broken: imgs.filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map(i => i.getAttribute('src').slice(0, 60)).slice(0, 5),
          unsized: imgs.filter(i => !(i.getAttribute('width') && i.getAttribute('height')) && cs(i).aspectRatio === 'auto').length,
          eager: imgs.filter(i => box(i).top + scrollY > innerHeight * 1.5 && i.loading !== 'lazy').length,
          clickable: clickable.slice(0, 5).map(el => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0]),
          unlabelled: fields.filter(f => !(f.labels && f.labels.length) && !f.getAttribute('aria-label') && !f.getAttribute('aria-labelledby')).length,
          main: !!document.querySelector('main,[role=main]'), lang: document.documentElement.getAttribute('lang') || '',
          nearEdge: textNodesNearEdge.slice(0, 4).map(el => el.textContent.trim().slice(0, 30)), clipped: clipped.slice(0, 4).map(el => ownText(el).slice(0, 30)),
          inputsSmall: inputsSmall.length, viewport,
          navHiddenAt390: headerNav.filter(el => !seen(el)).length, navTotal: headerNav.length,
          overflow: document.documentElement.scrollWidth > innerWidth + 1
        };
      });
      check('HR-01', first.h1Top !== null && first.h1Top < first.ih && first.actionTop < first.ih, {at: '390×844', h1_top: first.h1Top === null ? null : Math.round(first.h1Top), first_action_top: Math.round(first.actionTop)});
      check('TY-01', r.h1Count === 1, r.h1Count);
      const skips = r.levels.flatMap((lv, i) => i && lv > r.levels[i - 1] + 1 ? [`${r.levels[i - 1]}→${lv}`] : []);
      check('TY-02', skips.length === 0, skips);
      check('TY-03', r.ratioH1 >= 1.25 && (r.ratioH2 === null || r.ratioH2 >= 1.25), {h1_to_body: +r.ratioH1.toFixed(2), h2_to_body: r.ratioH2 && +r.ratioH2.toFixed(2)});
      check('TY-04', r.h1Tracking >= -0.0405, `${r.h1Tracking}em`);
      check('TY-05', r.bodyPx >= 16, `${r.bodyPx}px`);
      check('TY-06', r.tiny.length === 0, r.tiny);
      check('TY-08', r.leading.length === 0, r.leading);
      check('TY-09', r.thinSmall.length === 0, r.thinSmall);
      // Pages that size canvases or images from devicePixelRatio break only on dense screens; phones are 2–3×.
      const dense = await open({width: 390, height: 844}, {deviceScaleFactor: 3, isMobile: true, hasTouch: true});
      let denseWidth = null;
      try { await dense.page.waitForTimeout(600); denseWidth = await dense.page.evaluate(() => document.documentElement.scrollWidth); } finally { await dense.ctx.close(); }
      check('LY-01', !r.overflow && (denseWidth === null || denseWidth <= 391), {at: '390 at 1× and 3× pixel density', scroll_width_3x: denseWidth});
      check('LY-03', r.clipped.length === 0, r.clipped);
      check('LY-04', r.nearEdge.length === 0, r.nearEdge);
      check('MO-02', r.hiddenShare <= 0.05, {share: Math.round(r.hiddenShare * 100) + '%', sample: r.hiddenSample});
      check('MO-03', r.transitionAll.length === 0, r.transitionAll);
      check('MB-01', !/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(r.viewport), r.viewport);
      check('MB-02', r.small44.length === 0, {under_44x44: r.small44});
      check('MB-03', r.small24.length === 0, {targets_measured: r.targets, under_24_without_spacing: r.small24, note: 'links inside sentences are exempt; WCAG 2.5.8 spacing: a 24px circle on each undersized target must not touch another target or its circle'});
      check('MB-04', r.inputsSmall === 0, r.inputsSmall);
      check('AX-01', r.nameless.length === 0, r.nameless);
      check('AX-02', r.noAlt.length === 0, r.noAlt);
      check('AX-04', r.clickable.length === 0, r.clickable);
      check('AX-05', r.unlabelled === 0, r.unlabelled);
      check('AX-06', !!r.lang && r.main, {lang: r.lang || null, main_landmark: r.main});
      // Malformed markup the parser repaired silently: an attribute whose name holds a quote, '=' or '<' (a missing closing quote).
      // Read both the live DOM and the HTML as delivered (script may replace the broken rows, but no-JS visitors still get them).
      let srcHTML = null;
      try { srcHTML = isFile ? readFileSync(fileURLToPath(url.split('#')[0]), 'utf8') : await (await ctx.request.get(url.split('#')[0], {timeout: 8000})).text(); } catch { /* unknown */ }
      const badAttrs = await page.evaluate(src => {
        const out = [];
        const scan = root => { for (const el of root.querySelectorAll('*')) for (const at of el.attributes) if (/["'=<]/.test(at.name)) { out.push(`<${el.tagName.toLowerCase()} ${at.name.slice(0, 40)}>`); break; } };
        scan(document);
        if (src) scan(new DOMParser().parseFromString(src, 'text/html'));
        return [...new Set(out)].slice(0, 5);
      }, srcHTML);
      check('AX-07', loadErrors.length === 0 && badAttrs.length === 0, badAttrs.length ? {errors: loadErrors.slice(0, 5), malformed_attributes: badAttrs, note: 'an attribute name with a quote or = in it means a missing closing quote'} : loadErrors.slice(0, 5));
      const missingFiles = r.fileLinks.filter(f => { try { return !existsSync(fileURLToPath(f.split('#')[0])); } catch { return false; } });
      check('AX-08', !r.emptyLinks.length && !r.missingAnchors.length && !missingFiles.length, {empty: r.emptyLinks, missing_anchor: r.missingAnchors, missing_file: missingFiles});
      check('AX-09', r.broken.length === 0, r.broken);
      check('PF-01', r.unsized === 0 && r.eager === 0, {unsized: r.unsized, eager_below_the_fold: r.eager});

      // AX-11 at 390, before any click changes the page. Layout shifts it causes are excluded from CLS.
      part.spacing390 = await textSpacing(page, '390');
      await page.evaluate(() => scrollTo({top: 0, behavior: 'instant'}));

      // CO-01: axe for contrast, then sample text axe could not resolve over images, gradients or with translucent colour at its worst point.
      const axeMod = await load('@axe-core/playwright', {optional: true});
      const Axe = axeMod ? (axeMod.AxeBuilder || axeMod.default?.AxeBuilder || axeMod.default?.default || axeMod.default) : null;
      if (!Axe) notRun('CO-01', 'install @axe-core/playwright to measure contrast');
      else {
        await page.evaluate(() => { scrollTo({top: 0, behavior: 'instant'}); window.__cls?.skip.push([performance.now(), Infinity]); });
        const res = await new Axe({page}).withRules(['color-contrast']).analyze();
        const fails = res.violations.flatMap(v => v.nodes.map(n => n.target.join(' ')));
        // Sample only what the check names: text over images, gradients or semi-transparent text. Overlaps and the rest stay "needs review".
        const SAMPLE = ['bgImage', 'bgGradient', 'imgNode', 'pseudoContent', 'fgAlpha'];
        const keyOf = n => n.any?.[0]?.data?.messageKey || (typeof n.any?.[0]?.data === 'string' ? n.any[0].data : 'unknown');
        const incomplete = res.incomplete.flatMap(v => v.nodes).filter(n => n.target.length === 1 && typeof n.target[0] === 'string');
        const todo = incomplete.filter(n => SAMPLE.includes(keyOf(n))).slice(0, 15);
        const review = incomplete.filter(n => !SAMPLE.includes(keyOf(n)) && !['shortTextContent', 'nonBmp', 'equalRatio'].includes(keyOf(n))).map(n => `${n.target[0]} (${keyOf(n)})`);
        const sampled = [], unsampled = [];
        if (todo.length) await page.addStyleTag({content: '[data-sll-hide],[data-sll-hide] *{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important;text-decoration-color:transparent!important;transition:none!important}'});
        for (const n of todo) {
          const sel = n.target[0];
          const info = await run(page, s => {
            const el = document.querySelector(s); if (!el || !seen(el)) return null;
            el.scrollIntoView({block: 'center', behavior: 'instant'});
            const g = document.createRange(); g.selectNodeContents(el);
            const rs = [...g.getClientRects()].filter(q => q.width > 1 && q.height > 1); if (!rs.length) return null;
            const l = Math.max(0, Math.min(...rs.map(q => q.left))), t = Math.max(0, Math.min(...rs.map(q => q.top))), rr = Math.min(innerWidth, Math.max(...rs.map(q => q.right))), b = Math.min(innerHeight, Math.max(...rs.map(q => q.bottom)));
            if (rr - l < 2 || b - t < 2) return null;
            const fg = toRGBA(cs(el).color); const size = px(el), weight = Number(cs(el).fontWeight);
            el.setAttribute('data-sll-hide', '');
            return {clip: {x: l, y: t, width: rr - l, height: b - t}, fg, large: size >= 24 || (size >= 18.66 && weight >= 700), text: (el.innerText || '').trim().slice(0, 30)};
          }, sel);
          if (!info || info.fg[3] === 0) { unsampled.push(sel); continue; }
          await page.waitForTimeout(30);
          const png = decodePNG(await page.screenshot({clip: info.clip}));
          await page.evaluate(s => document.querySelector(s)?.removeAttribute('data-sll-hide'), sel);
          if (!png) { unsampled.push(sel); continue; }
          // Background averaged over 4×4 px cells (so a hairline or a single noisy pixel is not "the background"), judged at the worst cell.
          const rs = [], a = info.fg[3], N = 4;
          for (let y = 0; y < png.h; y += N) for (let x = 0; x < png.w; x += N) {
            const sum = [0, 0, 0]; let n = 0;
            for (let yy = y; yy < Math.min(png.h, y + N); yy++) for (let xx = x; xx < Math.min(png.w, x + N); xx++) { const i = (yy * png.w + xx) * png.ch; sum[0] += png.px[i]; sum[1] += png.px[i + 1]; sum[2] += png.px[i + 2]; n++; }
            const bg = sum.map(v => v / n); rs.push(ratio(info.fg.slice(0, 3).map((v, k) => v * a + bg[k] * (1 - a)), bg));
          }
          rs.sort((p, q) => p - q);
          const worst = rs[0];
          const need = info.large ? 3 : 4.5;
          sampled.push({target: sel, why: keyOf(n), text: info.text, worst: +worst.toFixed(2), need, pass: worst >= need});
        }
        await page.evaluate(() => { scrollTo({top: 0, behavior: 'instant'}); document.querySelectorAll('[data-sll-hide]').forEach(e => e.removeAttribute('data-sll-hide')); });
        await page.waitForTimeout(150);
        await page.evaluate(() => { const s = window.__cls?.skip.at(-1); if (s) s[1] = performance.now(); });
        const sampleFails = sampled.filter(s => !s.pass);
        check('CO-01', fails.length === 0 && sampleFails.length === 0, {axe_violations: fails.slice(0, 8), sampled_over_images_or_gradients: sampled.length, sampled_failures: sampleFails.slice(0, 6).map(s => `${s.target} "${s.text}" (${s.why}) worst ${s.worst}:1 < ${s.need}:1`), not_sampled: unsampled.slice(0, 4), axe_needs_review: review.length ? review.slice(0, 4) : undefined, method: 'axe color-contrast; text axe cannot resolve is screenshotted with the text hidden and judged at the worst 4×4 px cell of its background'});
      }
      // PF-04: CLS through load, the scroll above and one click on the first control that does not navigate.
      const ctl = await run(page, () => {
        const C = [...document.querySelectorAll('button,[role=button],[role=tab],[role=switch],summary,input[type=checkbox],input[type=radio]')].filter(el => seen(el) && !el.disabled && el.tagName !== 'A' && !(el.tagName === 'BUTTON' && el.type === 'submit' && el.form) && cs(el).pointerEvents !== 'none' && visibleOpacity(el) > 0.1);
        const el = C.find(e => !e.closest('header,nav,footer,[role=banner]')) || C[0];
        if (!el) return null; el.setAttribute('data-sll-click', '1'); return describe(el);
      });
      const before = page.url();
      let clicked = null;
      if (ctl) { try { await page.locator('[data-sll-click]').first().click({timeout: 3000}); clicked = ctl; } catch (e) { clicked = `click failed: ${String(e.message).split('\n')[0].slice(0, 80)}`; } await page.waitForTimeout(1500); }
      const cls = await page.evaluate(() => window.__cls && {max: window.__cls.max, top: window.__cls.top.sort((a, b) => b.value - a.value).slice(0, 3)});
      if (!cls) notRun('PF-04', 'this browser does not report layout-shift entries');
      else check('PF-04', cls.max <= 0.1, {cls: +cls.max.toFixed(3), clicked: clicked || 'no control to click', navigated: page.url() !== before || undefined, largest_shifts: cls.top});
      await page.keyboard.press('Escape').catch(() => {});

      // MB-05: if header nav items disappear on phones, a header button must bring them back.
      // (The PF-04 click may already have opened the menu; then fewer items are hidden than before any click.)
      if (r.navTotal && r.navHiddenAt390) {
        const hiddenNow = () => run(page, () => [...document.querySelector('header').querySelectorAll('nav a, nav button')].filter(el => !seen(el)).length);
        let ok = (await hiddenNow()) < r.navHiddenAt390;
        if (!ok) {
          const menu = page.locator('header button[aria-expanded]:visible, header button[aria-controls]:visible, header [role=button][aria-expanded]:visible');
          const btn = (await menu.count()) ? menu.first() : page.locator('header button:visible').first();
          if (await btn.count()) { await btn.click().catch(() => {}); await page.waitForTimeout(400); ok = (await hiddenNow()) < r.navHiddenAt390; }
        }
        check('MB-05', ok, ok ? 'menu control reveals the navigation' : `${r.navHiddenAt390} of ${r.navTotal} header nav items are hidden at 390px and no header button reveals them`);
      } else check('MB-05', true, 'navigation stays visible');

    } finally { await ctx.close(); }
  });

  // ======================= 390 × 844: the signature artifact, keyboard and stress =======================
  // Fresh pages, so nothing the main pass clicked carries over. Each probe that could navigate reloads the page after.
  await section('the 390px interaction pass', ['HR-07', 'MB-07', 'MB-08', 'MB-09', 'MB-10', 'AX-12', 'AX-13', 'LY-08', 'LY-06', 'MB-05', 'HR-03', 'HR-09', 'HR-10', 'MB-11', 'LY-09'], async () => {
    let {ctx, page} = await open({width: 390, height: 844});
    const fresh = async () => { await ctx.close(); ({ctx, page} = await open({width: 390, height: 844})); };
    try {
      // AX-13: the first Tab stop is on screen and big enough to see.
      await page.evaluate(() => { scrollTo({top: 0, behavior: 'instant'}); document.activeElement?.blur?.(); });
      await page.keyboard.press('Tab'); await page.waitForTimeout(250);
      const tab1 = await run(page, () => {
        const el = document.activeElement; if (!el || el === document.body) return {none: true};
        const b = box(el); const onScreen = b.bottom > 0 && b.top < innerHeight && b.right > 0 && b.left < innerWidth;
        return {el: describe(el), w: Math.round(b.width), h: Math.round(b.height), onScreen, opacity: visibleOpacity(el), skip: /skip/i.test(label(el))};
      });
      check('AX-13', !!tab1.none || (tab1.onScreen && tab1.w >= 16 && tab1.h >= 16 && tab1.opacity > 0.5), tab1.none ? 'nothing on the page takes focus' : {first_tab_stop: tab1.el, size: `${tab1.w}×${tab1.h}px`, on_screen: tab1.onScreen, opacity: +tab1.opacity.toFixed(2)});

      // HR-03 at 390: the headline's last line holds more than one word.
      const orphan390 = await run(page, () => { const h = h1El(); return h ? lastLineWords(h) : null; });
      if (orphan390) part.orphan390 = orphan390;

      // MB-10: phone page length.
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      const sigH = await run(page, () => { const s = signature(); return s && !s.none ? Math.round(box(s.el).height) : (s?.none ? -1 : null); });
      if (sigH === -1) check('MB-10', true, {page_height_px: height, note: 'declared no signature artifact (an index or document page): length not limited'});
      else check('MB-10', height <= 6752 && (sigH === null || sigH <= 1688), {page_height_px: height, screens: +(height / 844).toFixed(1), signature_height_px: sigH, limits: 'page at most 8 screens (6,752px); the signature artifact at most 2 screens (1,688px): group, collapse or page a long list'});

      // HR-09 and HR-10 at 390.
      part.calm390 = await run(page, () => calm());
      part.align390 = await run(page, () => alignRows());
      // HR-07 at 390, and the signature's controls.
      const sig = await run(page, () => {
        scrollTo({top: 0, behavior: 'instant'});
        const s = signature(); if (!s) return null;
        if (s.none) return {none: s.none};
        const b = box(s.el);
        const visible = Math.max(0, Math.min(b.bottom, 2 * innerHeight) - Math.max(b.top, 0));
        const C = [...s.el.querySelectorAll(CTL_SEL + ',a[href]')].filter(c => seen(c) && !c.disabled && visibleOpacity(c) > 0.1 && cs(c).pointerEvents !== 'none');
        const inSentence = el => cs(el).display === 'inline' && !!el.parentElement?.closest('p,li,dd,td,figcaption');
        const small = C.filter(c => !inSentence(c) && !(['checkbox', 'radio'].includes(c.type) && c.labels?.length)).map(c => ({c, b: box(c)})).filter(x => x.b.width + 0.5 < 44 || x.b.height + 0.5 < 44)
          .map(x => `${(label(x.c) || x.c.tagName.toLowerCase()).slice(0, 24)} ${Math.round(x.b.width)}×${Math.round(x.b.height)}px`);
        // Visually hidden checkboxes and radios are used through their visible label (chips, swatches).
        const viaLabel = [...s.el.querySelectorAll('input[type=checkbox],input[type=radio]')].filter(c => (!seen(c) || visibleOpacity(c) <= 0.1) && !c.disabled && c.labels?.[0] && seen(c.labels[0])).map(c => seen(c) ? c : c.labels[0]);
        // A radio that is already checked does nothing when chosen again; it is skipped, not counted as dead.
        const probe = [...C, ...viaLabel].filter(c => c.tagName !== 'A' && !(c.type === 'radio' && c.checked) && !(c.tagName === 'LABEL' && c.control?.type === 'radio' && c.control.checked) && !['date', 'time', 'datetime-local', 'month', 'week', 'color', 'file', 'hidden'].includes(c.type) && !(c.type === 'submit' && c.form && c.form.getAttribute('action'))).slice(0, 12);
        probe.forEach((c, i) => c.setAttribute('data-sll-ctl', String(i)));
        const groups = new Set([...C, ...viaLabel].map(c => { const t = c.tagName === 'LABEL' ? c.control : c; return t && t.type === 'radio' && t.name ? 'radio:' + t.name : t; }));
        return {decisions: groups.size, marked: s.marked, el: describe(s.el), top: Math.round(b.top), height: Math.round(b.height), visible: Math.round(visible), small, n: probe.length,
          kinds: probe.map(c => c.tagName === 'LABEL' ? 'label' : c.tagName === 'SELECT' ? 'select' : c.tagName === 'TEXTAREA' ? 'text' : c.tagName === 'INPUT' ? (['checkbox', 'radio'].includes(c.type) ? 'toggle' : c.type === 'range' ? 'range' : ['text', 'search', 'number', 'email', 'url', 'tel', ''].includes(c.type) ? 'text' : 'click') : (c.getAttribute('role') === 'slider' ? 'range' : 'click')),
          labels: probe.map(c => (label(c) || c.getAttribute('name') || c.tagName.toLowerCase()).slice(0, 30))};
      });
      const need = s => Math.min(280, s.height - 1);
      if (sig?.none) {
        for (const id of ['HR-07', 'MB-07', 'MB-09', 'AX-12', 'MB-11']) check(id, true, `declared none: ${sig.none} (an index or document page; verify-record does not accept this for a landing page)`);
      } else if (!sig) {
        for (const id of ['HR-07', 'MB-07', 'MB-09', 'AX-12', 'MB-11']) check(id, false, 'no signature artifact found: mark the product artifact with data-signature');
      } else {
        part.sig390 = sig;
        check('HR-07', sig.visible >= need(sig), {at: '390×844, first two screens', signature: sig.el, marked: sig.marked || 'no: guessed from the controls; mark it with data-signature', top_px: sig.top, visible_px: sig.visible, needed_px: need(sig)});
        check('MB-09', sig.small.length === 0, {under_44x44: sig.small.slice(0, 8)});
        check('MB-11', sig.decisions <= 3, {controls_in_artifact: sig.decisions, limit: 3, note: 'a radio group counts once; one decision and one result reads at a glance, a form does not', controls: sig.labels.slice(0, 8)});
        // MB-07 and AX-12: use each control from the keyboard, centred in the viewport, and watch what changes.
        const off = [], dead = [], dropped = [], probed = [];
        for (let i = 0; i < sig.n; i++) {
          const loc = page.locator(`[data-sll-ctl="${i}"]`);
          if (!(await loc.count()) || !(await loc.isVisible().catch(() => false)) || await loc.isDisabled().catch(() => true)) continue;
          const before = page.url();
          await run(page, k => {
            // A control in the first screen is used where the visitor first meets it, without scrolling; any other is centred.
            const c = document.querySelector(`[data-sll-ctl="${k}"]`); scrollTo({top: 0, behavior: 'instant'});
            if (c.getBoundingClientRect().bottom > innerHeight) c.scrollIntoView({block: 'center', behavior: 'instant'});
            window.__muts = [];
            window.__mo?.disconnect();
            window.__mo = new MutationObserver(ms => { for (const m of ms) { window.__muts.push(m.target.nodeType === 1 ? m.target : m.target.parentElement); for (const n of m.addedNodes || []) window.__muts.push(n.nodeType === 1 ? n : n.parentElement); } });
            window.__mo.observe(document.body, {subtree: true, childList: true, attributes: true, characterData: true});
          }, i);
          const kind = sig.kinds[i];
          try {
            if (kind === 'label') await loc.click({timeout: 1500});
            else await loc.focus({timeout: 1500});
            if (kind === 'label') { /* clicked */ }
            else if (kind === 'select') { const n = await loc.evaluate(s => s.options.length); const cur = await loc.evaluate(s => s.selectedIndex); if (n > 1) await loc.selectOption({index: (cur + 1) % n}); }
            else if (kind === 'text') { await loc.fill(''); await page.keyboard.type('Test 42', {delay: 5}); await page.keyboard.press('Enter'); }
            else if (kind === 'range') await page.keyboard.press('ArrowRight');
            else if (kind === 'toggle') await page.keyboard.press('Space');
            else await page.keyboard.press('Enter');
          } catch { continue; }
          await page.waitForTimeout(500);
          if (page.url().split('#')[0] !== before.split('#')[0]) { await fresh(); probed.push(`${sig.labels[i]}: navigated`); break; }
          const res = await run(page, k => {
            window.__mo?.disconnect();
            const c = document.querySelector(`[data-sll-ctl="${k}"]`);
            const changed = [...new Set(window.__muts)].filter(el => el && el.isConnected && c && !c.contains(el) && el !== document.body && el !== document.documentElement);
            const vis = el => { const b = box(el); const h = Math.max(0, Math.min(b.bottom, innerHeight) - Math.max(b.top, 0)); return b.height > 0 ? h / b.height : 0; };
            // A change counts as in view when at least half of the changed element is on screen; the biggest change (the result
            // itself, usually) must also be at least half on screen, so a badge flicker in view cannot stand in for a result below the fold.
            const shown = changed.filter(el => seen(el) && box(el).width * box(el).height > 0);
            // Other controls changing state (a sibling chip losing aria-pressed) is not a result; the result is content.
            const content = shown.filter(el => !el.matches(CTL_SEL) && !el.closest(CTL_SEL));
            const inView = content.filter(el => vis(el) >= 0.5 && box(el).height >= 16);
            const biggest = content.filter(el => !content.some(o => o !== el && o.contains(el))).sort((x, y) => box(y).width * box(y).height - box(x).width * box(x).height)[0];
            // A live region (role=status, aria-live, output) that changed is the result's text: it must be at least half on screen.
            const LIVE = '[aria-live]:not([aria-live=off]),[role=status],[role=alert],output';
            const lives = [...new Set(shown.map(el => el.closest(LIVE)).filter(Boolean))].filter(el => seen(el) && !el.closest('.sr-only,.visually-hidden') && box(el).width > 2 && box(el).height > 2);
            const liveOff = lives.filter(el => vis(el) < 0.5);
            if (liveOff.length) inView.length = 0;
            const a = document.activeElement;
            return {changed: changed.length, inView: inView.length, focusLost: !a || a === document.body, sample: liveOff.length ? `${describe(liveOff[0])} (the live result text) ${Math.round(vis(liveOff[0]) * 100)}% on screen` : describe(biggest || changed.find(el => seen(el)) || changed[0]) + (biggest ? ` ${Math.round(vis(biggest) * 100)}% on screen` : '')};
          }, i);
          probed.push(`${sig.labels[i]}: ${res.changed} changed, ${res.inView} in view`);
          if (res.changed === 0 && !/reset|clear|undo|start over|download|export|save .*file|copy/i.test(sig.labels[i])) dead.push(sig.labels[i]);
          else if (res.changed > 0 && res.inView === 0) off.push(`${sig.labels[i]} (changed ${res.sample}, off-screen)`);
          if (res.focusLost) dropped.push(sig.labels[i]);
        }
        check('MB-07', off.length === 0 && dead.length === 0, {controls_used: probed.length, feedback_off_screen: off.slice(0, 6), dead_controls: dead.slice(0, 6), method: 'each control used from the keyboard at 390×844, where it sits in the first screen or else centred; a change counts when content (not another control) at least 16px tall changes and is at least half on screen'});
        check('AX-12', dropped.length === 0, {focus_dropped_to_body_after: dropped.slice(0, 6)});
      }

      // MB-08: Escape closes the header menu and returns focus to its button.
      await fresh();
      const menu = page.locator('header button[aria-expanded]:visible, [role=banner] button[aria-expanded]:visible, nav button[aria-expanded]:visible, header summary:visible');
      if (!(await menu.count())) check('MB-08', true, 'n/a: no menu button at 390px');
      else {
        const btn = menu.first();
        const state = () => btn.evaluate(b => b.tagName === 'SUMMARY' ? b.parentElement.open : b.getAttribute('aria-expanded') === 'true');
        await btn.click({timeout: 3000}).catch(() => {}); await page.waitForTimeout(350);
        const opened = await state();
        if (!opened) check('MB-08', false, 'the menu button did not open anything (aria-expanded stayed false)');
        else {
          await page.keyboard.press('Escape'); await page.waitForTimeout(350);
          const closed = !(await state());
          const back = await btn.evaluate(b => document.activeElement === b);
          check('MB-08', closed && back, {closed_on_escape: closed, focus_returned_to_button: back});
        }
      }

      // LY-06 at 390: Tab forward, then Shift+Tab back, and check no fixed or sticky element covers the focused control.
      await fresh();
      const coveredAt390 = [];
      await page.evaluate(() => { document.activeElement?.blur?.(); scrollTo({top: 0, behavior: 'instant'}); });
      const stops = [];
      for (const key of [...Array(30).fill('Tab'), ...Array(30).fill('Shift+Tab')]) {
        await page.keyboard.press(key); await page.waitForTimeout(60);
        const f = await run(page, () => {
          const el = document.activeElement; if (!el || el === document.body || !seen(el) || fixedAnc(el)) return null;
          const b = box(el);
          const pts = [[(b.left + b.right) / 2, (b.top + b.bottom) / 2], [b.left + 2, b.top + 2], [b.right - 2, b.top + 2], [b.left + 2, b.bottom - 2], [b.right - 2, b.bottom - 2]].filter(([x, y]) => x >= 0 && y >= 0 && x < innerWidth && y < innerHeight);
          const hid = pts.length > 0 && pts.every(([x, y]) => { const t = document.elementFromPoint(x, y); return t && !el.contains(t) && !t.contains(el) && fixedAnc(t); });
          return {name: label(el).slice(0, 30) || describe(el), hid, by: hid ? describe(fixedAnc(document.elementFromPoint((b.left + b.right) / 2, (b.top + b.bottom) / 2))) : null};
        });
        if (f) { stops.push(f.name); if (f.hid) coveredAt390.push(`${f.name} (under ${f.by}, ${key})`); }
      }
      check('LY-06', coveredAt390.length === 0, {at: '390×844, Tab then Shift+Tab', focus_stops: stops.length, focused_controls_hidden: [...new Set(coveredAt390)].slice(0, 6)});

      // MB-05 without JavaScript: the phone menu must not cover the headline, and the nav must still be reachable.
      {
        const nojs = await browser.newContext({viewport: {width: 390, height: 844}, javaScriptEnabled: false});
        try {
          const np = await nojs.newPage();
          await np.goto(url, {waitUntil: 'domcontentloaded', timeout: 30000}); await np.waitForTimeout(500);
          const nj = await run(np, () => {
            const h1 = h1El(); if (!h1) return {h1: false};
            const b = box(h1); const x = Math.min(innerWidth - 2, (b.left + b.right) / 2), y = Math.min(innerHeight - 2, b.top + Math.min(b.height / 2, 20));
            const t = document.elementFromPoint(x, y);
            const coveredBy = t && !h1.contains(t) && !t.contains(h1) && t.closest('nav,header,[role=banner],[role=dialog]') ? describe(t.closest('nav,header,[role=banner],[role=dialog]')) : null;
            return {h1: true, covered_by: coveredBy};
          });
          if (nj.h1 && nj.covered_by) check('MB-05', false, {without_javascript: `the headline is covered by ${nj.covered_by}: hide the menu with a class that script adds (html.js) or use <details>`});
        } finally { await nojs.close(); }
      }

      // LY-08: a long unbroken string in every text field, submitted with Enter and with the field's own button.
      await fresh();
      const nFields = await run(page, () => {
        const F = [...document.querySelectorAll('input:not([type]),input[type=text],input[type=search],input[type=email],input[type=url],textarea')].filter(f => seen(f) && !f.disabled && !f.readOnly);
        F.forEach((f, i) => f.setAttribute('data-sll-field', String(i))); return F.length;
      });
      const wide = [];
      for (let i = 0; i < Math.min(nFields, 6); i++) {
        const f = page.locator(`[data-sll-field="${i}"]`);
        if (!(await f.count())) { await fresh(); continue; }
        const isEmail = await f.evaluate(x => x.type === 'email');
        const long = isEmail ? 'a'.repeat(60) + '@' + 'b'.repeat(130) + '.example' : 'W'.repeat(200);
        const before = page.url();
        try {
          await f.fill(long, {timeout: 2000});
          await f.press('Enter');
          await page.waitForTimeout(300);
          if (page.url().split('#')[0] === before.split('#')[0]) {
            const btn = await run(page, k => {
              const x = document.querySelector(`[data-sll-field="${k}"]`); if (!x) return false;
              let scope = x.form || x.parentElement; for (let up = 0; up < 3 && scope && !scope.querySelector('button'); up++) scope = scope.parentElement;
              const b = scope && [...scope.querySelectorAll('button')].find(b => seen(b) && !b.disabled && b.type !== 'reset');
              if (!b || (x.form && x.form.getAttribute('action') && b.type !== 'button')) return false;
              b.setAttribute('data-sll-go', ''); return true;
            }, i);
            if (btn) { await page.locator('[data-sll-go]').first().click({timeout: 2000}).catch(() => {}); await page.waitForTimeout(400); }
          }
        } catch { /* field could not be used */ }
        if (page.url().split('#')[0] !== before.split('#')[0]) { await fresh(); continue; }
        const sw = await page.evaluate(() => document.documentElement.scrollWidth);
        if (sw > 391) wide.push(`field ${i + 1} (${isEmail ? 'email' : 'text'}): page ${sw}px wide`);
        await page.evaluate(() => document.querySelectorAll('[data-sll-go]').forEach(b => b.removeAttribute('data-sll-go')));
      }
      check('LY-08', wide.length === 0, nFields ? {fields_tried: Math.min(nFields, 6), sideways_scroll: wide} : 'n/a: no text field');
    } finally { await ctx.close(); }
  });

  // ======================= 1440 × 900 =======================
  let d = null;
  await section('the 1440px pass', ['HR-01', 'HR-02', 'HR-04', 'PS-06', 'CP-01', 'CP-02', 'CP-07', 'CP-08', 'CP-11', 'ST-01', 'ST-03', 'ST-05', 'ST-06', 'TY-07', 'TY-10', 'LY-01', 'LY-05', 'LY-06', 'LY-07', 'CO-02', 'CO-03', 'TT-01', 'TT-02', 'TT-03', 'TT-04', 'MO-04', 'MO-06', 'PF-03', 'PF-06', 'PF-07', 'AX-03', 'HR-07', 'TY-11', 'CP-12', 'CP-13', 'CO-01', 'HR-03', 'HR-08', 'HR-09', 'HR-10', 'LY-09'], async () => {
    const {ctx: c, page: p} = await open({width: 1440, height: 900});
    try {
      d = await run(p, () => {
        const h1 = h1El();
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
        const isCard = el => { const s = cs(el); const b = box(el); return b.width > 80 && b.height > 60 && parseFloat(s.borderTopLeftRadius) > 2 && (parseFloat(s.borderTopWidth) > 0 || s.boxShadow !== 'none'); };
        const all = [...document.querySelectorAll('body *')].filter(seen);
        const cards = all.filter(isCard);
        const nested = cards.filter(cd => cards.some(o => o !== cd && o.contains(cd)));
        const footer = document.querySelector('footer');
        const footerLinks = footer ? [...footer.querySelectorAll('a[href]')].filter(a => a.getAttribute('href') && a.getAttribute('href') !== '#').length : 0;
        const gradientText = all.filter(el => /text/.test(cs(el).backgroundClip + cs(el).webkitBackgroundClip) && /gradient/.test(cs(el).backgroundImage)).length;
        const glow = all.filter(el => { const sh = cs(el).boxShadow; if (sh === 'none') return false; return sh.split(/,(?![^(]*\))/).some(part => { const m = part.match(/rgba?\(([^)]+)\)\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px/); if (!m) return false; const [r1, g1, b1] = m[1].split(',').map(Number); const chroma = Math.max(r1, g1, b1) - Math.min(r1, g1, b1); return Math.abs(+m[2]) < 1 && Math.abs(+m[3]) < 1 && +m[4] >= 16 && chroma > 40; }); }).length
          + all.filter(el => /radial-gradient/.test(cs(el).backgroundImage) && box(el).width > innerWidth * 0.5).length;
        // Template tells
        const ADJ = /^(fast|faster|secure|simple|powerful|reliable|scalable|flexible|easy|seamless|intuitive|smart|modern|beautiful|private|open|robust|effortless|instant|lightning|blazing|trusted|smarter|better|safe|unified)\b/i;
        const rows = all.filter(el => { const k = cardsIn(el); return k.length === 3 && Math.max(...k.map(x => box(x).width)) - Math.min(...k.map(x => box(x).width)) < 20; });
        const adjRows = rows.filter(row => cardsIn(row).filter(k => { const h = k.querySelector('h2,h3,h4'); return h && h.innerText.trim().split(/\s+/).length <= 3 && ADJ.test(h.innerText.trim()); }).length >= 2).length;
        const iconRows = rows.filter(row => cardsIn(row).every(k => { const f = k.firstElementChild; return f && /^(SVG|IMG|SPAN|DIV|I)$/.test(f.tagName) && box(f).width <= 72 && box(f).height <= 72 && (f.tagName === 'SVG' || f.querySelector('svg,img')) && k.querySelector('h3,h4'); })).length;
        const h2s = [...document.querySelectorAll('h2')].filter(seen);
        const kicked = h2s.filter(h => { const prev = h.previousElementSibling || h.parentElement?.previousElementSibling; if (!prev) return false; const t = prev.innerText?.trim() || ''; return t.length > 0 && t.length < 60 && px(prev) < 14 && (cs(prev).textTransform === 'uppercase' || t === t.toUpperCase()); }).length;
        const sideStripe = all.filter(el => { const s = cs(el); const l = parseFloat(s.borderLeftWidth); return l >= 3 && parseFloat(s.borderRightWidth) <= 1 && parseFloat(s.borderTopWidth) <= 1 && box(el).height > 40; }).length;
        const filler = all.filter(el => { const bi = cs(el).backgroundImage; const bs = cs(el).backgroundSize; return /repeating-(linear|radial)-gradient/.test(bi) || (/gradient/.test(bi) && /^\d{1,2}px/.test(bs) && box(el).width > innerWidth * 0.5); }).length;
        const faces = [...new Set(textEls().map(el => cs(el).fontFamily.split(',')[0].replace(/["']/g, '').trim()))];
        return {h1Px: h1 ? px(h1) : 0, h1Lines, h1Words, fam, faces, serif, cream, actionTop, h1Top: h1 ? box(h1).top : 1e9,
          ctaLabels: [...new Set(filledActions.map(el => label(el).toLowerCase()))], measures, nested: nested.length, footer: !!footer, footerLinks,
          gradientText, glow, adjRows, iconRows, h2Count: h2s.length, kicked, sideStripe, filler, overflow: document.documentElement.scrollWidth > innerWidth + 1};
      });
      check('HR-01', d.h1Top < 900 && d.actionTop < 900, {at: '1440×900', h1_top: Math.round(d.h1Top), first_action_top: Math.round(d.actionTop)});
      check('HR-04', d.h1Px <= 104 || d.h1Words / d.h1Lines <= 3.2, {h1_px: d.h1Px, words: d.h1Words, lines: d.h1Lines});
      check('PS-06', d.ctaLabels.length <= 3, d.ctaLabels);
      check('TY-07', d.measures.every(m => m <= 85), d.measures);
      const OVERUSED = /^(Inter|Inter Variable|InterVariable|Inter Display|Space Grotesk|Fraunces|Roboto|Poppins|Montserrat)$/i;
      check('TY-10', !OVERUSED.test(d.fam) && d.faces.length <= 3, {display_face: d.fam, faces: d.faces, note: OVERUSED.test(d.fam) ? 'an everywhere face: record the product reason, or choose another' : d.faces.length > 3 ? 'more than three faces: each needs a role (display, text, data)' : undefined});
      check('LY-05', d.nested === 0, `${d.nested} nested card(s)`);
      check('LY-07', d.footer && d.footerLinks > 0, {footer: d.footer, links: d.footerLinks});
      check('LY-01', !d.overflow, 'at 1440');
      check('CO-02', d.gradientText === 0 && d.glow === 0, {gradient_text: d.gradientText, coloured_glow: d.glow});
      check('CO-03', !(d.cream && d.serif), {cream_ground: d.cream, serif_display: d.serif, face: d.fam});
      check('TT-01', d.adjRows === 0, `${d.adjRows} row(s) of adjective cards`);
      check('TT-02', d.iconRows === 0, `${d.iconRows} row(s) of icon-topped cards`);
      check('TT-03', !(d.h2Count >= 3 && d.kicked / d.h2Count >= 0.75), `${d.kicked} of ${d.h2Count} h2s have a tracked-caps label above`);
      check('TT-04', d.sideStripe === 0 && d.filler === 0, {side_stripes: d.sideStripe, pattern_fill_backgrounds: d.filler});

      // HR-07 at 1440, TY-11 (faces render as named), CP-12 (builder notes), CP-13 (weekdays).
      const v6 = await run(p, async year => {
        scrollTo({top: 0, behavior: 'instant'});
        const s = signature(); let sigAt = null;
        if (s?.none) sigAt = {none: s.none};
        else if (s) { const b = box(s.el); sigAt = {el: describe(s.el), marked: s.marked, top: Math.round(b.top), height: Math.round(b.height), visible: Math.round(Math.max(0, Math.min(b.bottom, 2 * innerHeight) - Math.max(b.top, 0)))}; }
        // Which family in a stack actually renders: the first one whose glyph widths differ from both generic baselines.
        const cx = document.createElement('canvas').getContext('2d');
        const W = f => { cx.font = `48px ${f}`; return cx.measureText('Hamburgefonstiv 0123 QWxyz').width; };
        const base = {mono: W('monospace'), serif: W('serif'), sans: W('sans-serif')};
        const GENERIC = /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-serif|ui-sans-serif|ui-monospace|ui-rounded|math|emoji|fangsong)$/i;
        const SYSTEM = /^(-apple-system|BlinkMacSystemFont|system-ui|ui-sans-serif|ui-serif|ui-monospace|Segoe UI|SF Pro.*|SF Mono|Menlo|Consolas)$/i;
        const DEFAULTS = /^(Times New Roman|Times|Liberation Serif|DejaVu Serif|Nimbus Roman|Arial|Helvetica|Liberation Sans|DejaVu Sans|Nimbus Sans|Courier New|Courier|Liberation Mono|DejaVu Sans Mono)$/i;
        // A face declared with @font-face counts when any of its files loads (faces load lazily, so ask for them first);
        // an undeclared name counts when the system has it, judged by glyph widths against two generic baselines.
        const norm = f => f.replace(/["']/g, '').trim().toLowerCase();
        const declared = new Map();
        for (const f of document.fonts) { const k = norm(f.family); if (!declared.has(k)) declared.set(k, []); declared.get(k).push(f); }
        for (const faces of declared.values()) await Promise.allSettled(faces.filter(f => f.status === 'unloaded').map(f => f.load()));
        const has = fam => { const faces = declared.get(norm(fam)); if (faces) return faces.some(f => f.status === 'loaded'); const q = `"${fam}"`; return W(`${q}, monospace`) !== base.mono || W(`${q}, serif`) !== base.serif; };
        const resolve = stack => {
          const fams = stack.split(',').map(x => x.replace(/["']/g, '').trim()).filter(Boolean);
          const first = fams[0];
          // Linux-only defaults named first are a fallback face by choice: they read as the browser default to graders and visitors alike.
          if (first && /^(DejaVu Serif|DejaVu Sans|DejaVu Sans Mono|Liberation Serif|Liberation Sans|Liberation Mono|Nimbus Roman|Nimbus Sans|FreeSerif|FreeSans)$/i.test(first)) return {named: first, renders: first, default_face: true};
          if (!first || GENERIC.test(first) || SYSTEM.test(first) || DEFAULTS.test(first)) return null;
          if (has(first)) {
            // Present here, but would visitors have it? Only if the page ships it or every major platform has it.
            const PLATFORM = /^(Georgia|Times New Roman|Times|Arial|Helvetica|Helvetica Neue|Verdana|Tahoma|Trebuchet MS|Courier New|Courier|Palatino|Palatino Linotype|Book Antiqua|Garamond|Impact|Roboto|Noto Sans|Noto Serif|Menlo|Monaco|Consolas|Segoe UI|Avenir|Avenir Next|Charter|Iowan Old Style|Gill Sans|Optima|Futura|Didot|Baskerville|Hoefler Text|American Typewriter|Cambria|Calibri|Candara|Constantia|Corbel|Franklin Gothic Medium|Lucida Grande|Lucida Console|Andale Mono)$/i;
            if (declared.has(norm(first)) || PLATFORM.test(first)) return null;
            return {named: first, renders: first, default_face: false, not_shipped: true};
          }
          const used = fams.find(f => !GENERIC.test(f) && has(f)) || fams.find(f => GENERIC.test(f)) || 'browser default';
          return {named: first, renders: used, default_face: GENERIC.test(used) || DEFAULTS.test(used) || used === 'browser default'};
        };
        const stacks = [...new Set(textEls().map(el => cs(el).fontFamily))];
        const resolved = stacks.map(resolve).filter(Boolean);
        const fallbacks = resolved.filter(x => x.default_face);
        const unshipped = [...new Set(resolved.filter(x => x.not_shipped).map(x => x.named))];
        // Visible text, without form values and placeholders.
        const text = document.body.innerText;
        const LEAK = /\b((?:per|from|in|according to|not in) the brief|the brief (?:says|said|did not|does not|doesn't|didn't|supplies|supplied|gives|gave|asks)|(?:confirm|check) with the (?:client|founder)|ours to confirm|founder to confirm|to be confirmed by|placeholder (?:text|copy|image|logo)|lorem ipsum|TODO|FIXME|XXX|insert [a-z ]+ here|replace (?:this|with (?:the|your)))\b|\[(?:Company|Product|Name|Your [A-Za-z]+|Customer|Logo|Founder)\]/g;
        const leaks = [...new Set((text.match(LEAK) || []).map(x => x.trim()))].slice(0, 6);
        // Dates written with a weekday.
        const MON = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const years = (text.match(/\b20[2-3]\d\b/g) || []).reduce((m, y) => (m[y] = (m[y] || 0) + 1, m), {});
        const common = Object.entries(years).sort((a, b) => b[1] - a[1])[0]?.[0];
        const tryYears = [...new Set([year, common && Number(common)].filter(Boolean))];
        const D = '(Mon|Tue|Tues|Wed|Thu|Thur|Thurs|Fri|Sat|Sun)[a-z]*\\.?,?';
        const M = '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\\.?';
        const pats = [new RegExp(`\\b${D}\\s+(\\d{1,2})(?:st|nd|rd|th)?\\s+${M}(?:,?\\s+(20\\d\\d))?`, 'g'), new RegExp(`\\b${D}\\s+${M}\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b(?:,?\\s+(20\\d\\d))?`, 'g')];
        const wrong = [];
        let datesSeen = 0;
        for (const [k, re] of pats.entries()) for (const m of text.matchAll(re)) {
          const dayName = m[1].slice(0, 3).toLowerCase(); const day = Number(k === 0 ? m[2] : m[3]); const mon = MON.indexOf((k === 0 ? m[3] : m[2]).slice(0, 3).toLowerCase()); const y = m[4] ? [Number(m[4])] : tryYears;
          if (mon < 0 || day < 1 || day > 31) continue;
          datesSeen++;
          if (!y.some(yy => { const dt = new Date(Date.UTC(yy, mon, day)); return dt.getUTCMonth() === mon && DAYS[dt.getUTCDay()] === dayName; })) wrong.push(`${m[0].trim()} (${y.join(' or ')})`);
        }
        return {sigAt, fallbacks: fallbacks.slice(0, 4), unshipped: unshipped.slice(0, 4), stacks: stacks.length, leaks, wrong: [...new Set(wrong)].slice(0, 6), datesSeen, years: tryYears};
      }, Number(out.checked_on.slice(0, 4)));
      if (v6.sigAt?.none) check('HR-07', true, `declared none: ${v6.sigAt.none}`);
      else if (!v6.sigAt) check('HR-07', false, 'no signature artifact found at 1440: mark the product artifact with data-signature');
      else check('HR-07', v6.sigAt.visible >= Math.min(280, v6.sigAt.height - 1), {at: '1440×900, first two screens', signature: v6.sigAt.el, marked: v6.sigAt.marked || 'no: guessed; mark it with data-signature', top_px: v6.sigAt.top, visible_px: v6.sigAt.visible, needed_px: Math.min(280, v6.sigAt.height - 1)});
      check('TY-11', v6.fallbacks.length === 0 && v6.unshipped.length === 0, v6.fallbacks.length || v6.unshipped.length ? {falls_back: v6.fallbacks.map(f => `"${f.named}" is missing; renders as ${f.renders}`), installed_here_not_shipped: v6.unshipped.map(f => `"${f}" is on this machine but the page does not ship it, so most visitors get the fallback`), fix: 'ship the face with @font-face (a woff2 or woff file next to the page) or name a face every major platform has'} : `${v6.stacks} font stack(s) render as named`);
      check('CP-12', v6.leaks.length === 0, v6.leaks.length ? {builder_notes_on_page: v6.leaks} : 'no builder or client notes found in the visible text');
      check('CP-13', v6.wrong.length === 0, {dates_with_weekdays: v6.datesSeen, wrong_weekday: v6.wrong, years_assumed_when_none_given: v6.years});

      // HR-03 at 1440, and HR-08: the largest empty block in the 1440 first screen, below the header.
      const comp = await run(p, () => {
        scrollTo({top: 0, behavior: 'instant'});
        const h = h1El(); const orphan = h ? lastLineWords(h) : null;
        const C = 24, W = Math.floor(innerWidth / C), H = Math.floor(innerHeight / C);
        const grid = Array.from({length: H}, () => new Uint8Array(W));
        const mark = r => { for (let y = Math.max(0, Math.floor(r.top / C)); y < Math.min(H, Math.ceil(r.bottom / C)); y++) for (let x = Math.max(0, Math.floor(r.left / C)); x < Math.min(W, Math.ceil(r.right / C)); x++) grid[y][x] = 1; };
        // Content: text, media, controls, and boxes drawn with their own fill or a full border.
        const ground = toRGBA(cs(document.body).backgroundColor);
        for (const el of document.querySelectorAll('body *')) {
          if (!seen(el)) continue; const b = box(el); if (b.bottom < 0 || b.top > innerHeight) continue;
          if (/^(IMG|SVG|CANVAS|VIDEO|INPUT|SELECT|TEXTAREA|BUTTON|PICTURE|IFRAME)$/i.test(el.tagName)) { mark(b); continue; }
          for (const q of textRects(el)) mark(q);
          const st = cs(el); const bg = toRGBA(st.backgroundColor);
          const filledBox = bg[3] > 0.5 && (Math.abs(bg[0] - ground[0]) + Math.abs(bg[1] - ground[1]) + Math.abs(bg[2] - ground[2]) > 24) && b.width < innerWidth * 0.9;
          const framed = parseFloat(st.borderTopWidth) > 0 && parseFloat(st.borderLeftWidth) > 0 && b.width < innerWidth * 0.9 && b.height > 40;
          if (filledBox || framed) mark(b);
        }
        const hd = document.querySelector('header,[role=banner]'); const top = hd && !(h && hd.contains(h)) ? Math.min(H - 1, Math.ceil(box(hd).bottom / C)) : 0;
        // Largest all-empty rectangle (histogram method), from the header to the fold.
        let best = {a: 0}; const hist = new Array(W).fill(0);
        for (let y = top; y < H; y++) {
          for (let x = 0; x < W; x++) hist[x] = grid[y][x] ? 0 : hist[x] + 1;
          const st = [];
          for (let x = 0; x <= W; x++) {
            const hgt = x < W ? hist[x] : 0; let start = x;
            while (st.length && st[st.length - 1][1] >= hgt) { const [s0, h0] = st.pop(); const a = h0 * (x - s0); if (a > best.a) best = {a, x: s0, w: x - s0, h: h0, y: y - h0 + 1}; start = s0; }
            st.push([start, hgt]);
          }
        }
        return {orphan, empty: best.a ? {left: best.x * C, top: best.y * C, width: best.w * C, height: best.h * C, share: +(best.a / (W * (H - top) || 1)).toFixed(2)} : null};
      });
      {
        const o = [part.orphan390 && ['390', part.orphan390], comp.orphan && ['1440', comp.orphan]].filter(x => x && x[1].lines > 1 && x[1].words === 1);
        check('HR-03', o.length === 0, o.length ? {single_word_last_line: o.map(([w, x]) => `${w}px: "${x.text}"`), fix: 'text-wrap: balance on the h1, or a non-breaking space before the last word'} : 'no single-word last line at 390 or 1440');
      }
      const e = comp.empty;
      // The page's own side margins do not count: the block must reach into the middle half of the screen.
      const central = !!e && e.left < 1440 * 0.75 && e.left + e.width > 1440 * 0.25;
      if (v6.sigAt?.none) check('HR-08', true, `declared none: ${v6.sigAt.none} (an index or document page)`); else
      check('HR-08', !(central && e.width >= 320 && e.height >= 140 && e.share >= 0.08), e ? {largest_empty_block: `${e.width}×${e.height}px at (${e.left}, ${e.top})`, share_of_first_screen: e.share, note: central && e.share >= 0.08 && e.width >= 320 && e.height >= 140 ? 'a hole in the first screen: move the action, the status line or the artifact into it, or tighten the grid' : undefined} : 'no empty block');

      // HR-09 and HR-10: the calm first screen, at 1440 and 390.
      {
        const c14 = await run(p, () => calm()), c39 = part.calm390;
        if (c14?.none) { check('HR-09', true, `declared none: ${c14.none}`); check('HR-10', true, `declared none: ${c14.none}`); }
        else {
          const at = {'1440×900': c14, '390×844': c39 || {}};
          check('HR-09', Object.values(at).every(c => (c.words ?? 0) <= 60), {words_outside_header_and_hero_picture: {'1440×900': c14.words, '390×844': c39?.words}, limit: 60, fix: 'one headline, one sentence and the action; move the rest below the first screen', hero_picture: c14.picture || 'none marked: mark the hero picture with data-hero-visual so its own text is not counted'});
          const bad = Object.entries(at).filter(([, c]) => c.fields?.length || (c.actions?.length ?? 0) > 2 || c.picture_controls);
          check('HR-10', bad.length === 0, bad.length ? Object.fromEntries(bad.map(([w, c]) => [w, {tables_fields_or_tabs: c.fields, actions: c.actions, controls_inside_hero_picture: c.picture_controls}])) : {actions: c14.actions, note: 'no table, field or tab list; at most two actions'});
        }
      }
      // LY-09.
      {
        const a14 = await run(p, () => alignRows()), all = [...a14.map(x => '1440: ' + x), ...(part.align390 || []).map(x => '390: ' + x)];
        check('LY-09', all.length === 0, all.length ? {misaligned_buttons: all} : 'buttons that sit side by side share height and centre');
      }
      // CO-01 at 1440 too: header buttons and wide layouts get their own colours at desktop widths.
      const axeMod1440 = await load('@axe-core/playwright', {optional: true});
      const Axe1440 = axeMod1440 ? (axeMod1440.AxeBuilder || axeMod1440.default?.AxeBuilder || axeMod1440.default?.default || axeMod1440.default) : null;
      if (Axe1440) {
        const res = await new Axe1440({page: p}).withRules(['color-contrast']).analyze();
        const fails = res.violations.flatMap(v => v.nodes.map(n => n.target.join(' ')));
        check('CO-01', fails.length === 0, {at: '1440×900', axe_violations: fails.slice(0, 8)});
      }

      // Copy (CP) and urgency (HP-05) from the rendered text.
      const copy = await run(p, () => {
        const h1 = h1El();
        const norm = s => (s || '').toLowerCase().replace(/\b(back to (the )?top|back to|go to|home ?page|home|logo|top)\b/g, '').replace(/[^\p{L}\p{N}]+/gu, '');
        const firstLink = document.querySelector('header a[href], [role=banner] a[href], nav a[href]');
        const seg0 = (document.title.split(/\s+[|–—·-]\s+|\s*[|–—·]\s*|:\s+/)[0] || '').trim();
        const brands = [document.querySelector('meta[property="og:site_name"]')?.content, document.querySelector('meta[name="application-name"]')?.content, seg0.split(/\s+/).length <= 3 ? seg0 : '', firstLink && label(firstLink), firstLink?.innerText, firstLink?.querySelector('img[alt]')?.alt].map(norm).filter(b => b && b.length >= 2);
        const h1Text = h1 ? h1.innerText.replace(/\s+/g, ' ').trim() : '';
        const h1Words = h1Text.split(' ').filter(w => /[\p{L}\p{N}]/u.test(w)).length;
        // CP-02: the first p or h2 (or a plain text block of 5+ words) after the h1 inside its header, section or main.
        let sub = null;
        if (h1) {
          const scope = h1.closest('header,section,main') || document.body;
          const walker = document.createTreeWalker(scope, NodeFilter.SHOW_ELEMENT); walker.currentNode = h1; let n;
          while ((n = walker.nextNode())) {
            if (h1.contains(n) || n.closest('a,button,nav,label,form') || !seen(n)) continue;
            const words = (n.innerText || '').trim().split(/\s+/).filter(Boolean).length;
            if ((['P', 'H2'].includes(n.tagName) && words >= 3) || (/^(DIV|SPAN)$/.test(n.tagName) && ownText(n).split(/\s+/).filter(Boolean).length >= 5)) { sub = n; break; }
          }
        }
        const subText = sub ? sub.innerText.replace(/\s+/g, ' ').trim() : '';
        const fix = s => (s || '').replace(/[’‘]/g, "'");
        // CP-07: generic marketing phrases in the first screen (stock verbs, AI-copy tells).
        const GENERIC = [/\bseamless(ly)?\b/i, /\bsupercharge[sd]?\b/i, /\bunleash(es|ed|ing)?\b/i, /\brevolutioni[sz](e|es|ed|ing)\b/i, /\bcutting[- ]edge\b/i, /\bnext[- ]gen(eration)?\b/i, /\bgame[- ]chang(er|ers|ing)\b/i, /\bbest[- ]in[- ]class\b/i, /\bworld[- ]class\b/i, /\bempower(s|ed|ing)?\b/i, /\bunlock(s|ed|ing)?\b/i, /\belevat(e|es|ed|ing)\b/i, /\bstreamlin(e|es|ed|ing)\b/i, /\beffortless(ly)?\b/i, /\ball[- ]in[- ]one\b/i, /\bone[- ]stop\b/i, /\breimagin(e|ed|es|ing)\b/i, /\bharness(es|ed|ing)? the (full )?power\b/i, /\bthe power of (ai|data)\b/i, /\b(ai|ml)[- ]powered\b/i, /\bnot (just|only|merely) [^.!?]{1,40}?([,;:—–-]\s*)?(it's|but|we're)\b/i, /\bmore than (just )?an? (tool|app|platform|product|software)\b/i, /\bsay goodbye to\b/i, /\bwhether you're\b/i, /\bthe future of\b/i, /\bin today's (fast[- ]paced|digital|modern|ever[- ]changing)\b/i, /\blike never before\b/i, /\bmade (simple|easy|effortless)\b/i, /\bfocus on what (really |truly )?matters\b/i, /\bnext[- ]level\b/i, /\btransform (the way|how) you\b/i, /\bforward[- ]thinking\b/i, /\bready to (get started|transform|take|elevate)\b/i];
        const fsEls = textEls().filter(el => box(el).top + scrollY < innerHeight && !el.closest('[aria-hidden=true]'));
        const generic = [...new Set(fsEls.flatMap(el => { const t = fix(el.innerText); return GENERIC.map(re => t.match(re)?.[0]).filter(Boolean).map(m => m.toLowerCase()); }))];
        // CP-08: superlatives anywhere, unless their block holds a source link or citation.
        const SUP = /(?<![\w#-])(best|#\s?1|number one|(?:industry|market)[- ]leading|(?:the|a) leading|fastest|most (?:powerful|advanced|accurate|trusted|secure|reliable|complete)|world's (?:first|best|most)|unmatched|unparall?eled|unrivall?ed|ultimate)(?![\w-])/gi;
        const blockOf = node => { for (let a = node.parentElement; a; a = a.parentElement) { const dsp = cs(a).display; if (!/^inline/.test(dsp) && dsp !== 'contents') return a; } return document.body; };
        const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); const blocks = new Set(); let tn;
        while ((tn = tw.nextNode())) { const pe = tn.parentElement; if (!pe || !tn.textContent.trim() || pe.closest('script,style,noscript,template,code,pre,kbd,nav,[aria-hidden=true]') || !seen(pe)) continue; blocks.add(blockOf(tn)); }
        const sup = new Set();
        for (const b of blocks) {
          const t = fix(b.innerText);
          for (const m of t.matchAll(SUP)) {
            const before = t.slice(Math.max(0, m.index - 12), m.index), after = t.slice(m.index + m[0].length, m.index + m[0].length + 24);
            if (/^best$/i.test(m[0]) && (/^\s+(practices?|for\b|effort|regards|wishes|of luck)/i.test(after) || /\bat\s+(its\s+|their\s+|your\s+)?$/i.test(before))) continue;
            if (/leading$/i.test(m[0]) && /^\s+(zeros?|edge|spaces?|whitespace|slash(es)?|underscores?|digits?|line)/i.test(after)) continue;
            if (b.querySelector('a[href]:not([href="#"]), cite, sup')) continue;
            sup.add(`${m[0]}: "${t.slice(Math.max(0, m.index - 30), m.index + m[0].length + 30).replace(/\s+/g, ' ').trim()}"`);
          }
        }
        // CP-11: Flesch–Kincaid grade over prose in main (code, nav, footer and hidden text skipped).
        const lang = (document.documentElement.getAttribute('lang') || 'en').toLowerCase();
        const rootEl = document.querySelector('main') || document.body;
        const S = new Set([...rootEl.querySelectorAll('p,li,blockquote,figcaption,dd,h1,h2,h3')].filter(el => seen(el) && !el.closest('pre,code,kbd,nav,footer,[aria-hidden=true]')));
        const topEls = [...S].filter(el => { for (let a = el.parentElement; a; a = a.parentElement) if (S.has(a)) return false; return true; });
        const syll = w => { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 1; let n = (w.match(/[aeiouy]+/g) || []).length; if (w.length > 2 && w.endsWith('e') && !w.endsWith('le') && n > 1) n--; return Math.max(1, n); };
        let words = 0, sents = 0, syl = 0;
        for (const el of topEls) { const t = fix(el.innerText); const w = t.match(/[A-Za-z][A-Za-z'-]*/g) || []; if (!w.length) continue; words += w.length; sents += Math.max(1, t.split(/[.!?]+(?=\s)/).filter(s => /[A-Za-z]/.test(s)).length); syl += w.reduce((n, x) => n + syll(x), 0); }
        const grade = words ? 0.39 * words / sents + 11.8 * syl / words - 15.59 : null;
        // HP-05: false urgency and scarcity.
        const URG = [/\bonly \d+ (left|remaining|spots?|seats?|places?|units?|items?)\b/i, /\b\d+ (spots?|seats?|places?|units?) (left|remaining)\b/i, /\b(spots?|seats?|places?|stock) (are )?(filling|going|selling) (up )?fast\b/i, /\bselling (out )?fast\b/i, /\balmost (gone|sold out|full)\b/i, /\blimited[- ]time (offer|only|deal)\b/i, /\b(offer|sale|deal|discount|price) (ends|expires)\b/i, /\bends in \d/i, /\bhurry\b/i, /\blast chance\b/i, /\bdon't miss (out|this)\b/i, /\bact (now|fast)\b/i, /\bwhile (supplies|stocks?) last\b/i, /\b\d+ (people|others|users|visitors) (are )?(viewing|looking at|watching)\b/i, /\bin high demand\b/i, /\bbefore it's too late\b/i, /\bprices? (go(es)? up|increases?) (soon|in|on)\b/i];
        const urgency = [...new Set(textEls().flatMap(el => { const t = fix(el.innerText); return URG.map(re => t.match(re)?.[0]).filter(Boolean).map(m => m.toLowerCase()); }))];
        const countdownEls = [...document.querySelectorAll('[class*=countdown i],[id*=countdown i]')].filter(seen).map(describe).slice(0, 3);
        return {h1Text, h1Words, h1IsBrand: !!h1Text && brands.includes(norm(h1Text)), brands,
          sub: sub ? {tag: sub.tagName.toLowerCase(), text: subText.slice(0, 120), words: subText.split(' ').length, sentences: subText.split(/[.!?]+(?=\s|$)/).filter(s => s.trim().length > 1).length, top: Math.round(box(sub).top + scrollY), opacity: visibleOpacity(sub)} : null,
          generic, sup: [...sup].slice(0, 6), fk: {lang, words, sentences: sents, grade: grade === null ? null : +grade.toFixed(1)}, urgency, countdownEls};
      });
      part.copy = copy;
      check('CP-01', copy.h1Words >= 3 && copy.h1Words <= 12 && !copy.h1IsBrand, {h1: copy.h1Text.slice(0, 90), words: copy.h1Words, only_the_brand: copy.h1IsBrand});
      const sub = copy.sub;
      check('CP-02', !!sub && sub.sentences <= 2 && sub.words <= 40 && sub.top < 900 && sub.opacity > 0.1, sub ? {subhead: sub.text, element: sub.tag, words: sub.words, sentences: sub.sentences, top_px: sub.top, visible_without_scrolling: sub.top < 900} : 'no paragraph or h2 follows the h1 in the hero');
      check('CP-07', copy.generic.length === 0, copy.generic);
      check('CP-08', copy.sup.length === 0, copy.sup);
      if (!copy.fk.lang.startsWith('en')) check('CP-11', true, `n/a: the page language is "${copy.fk.lang}", not English`);
      else if (copy.fk.words < 100) check('CP-11', true, `n/a: only ${copy.fk.words} words of prose`);
      else check('CP-11', copy.fk.grade <= 9, {flesch_kincaid_grade: copy.fk.grade, words: copy.fk.words, sentences: copy.fk.sentences, note: copy.fk.grade > 9 ? 'simplify, or record the audience reason' : undefined});

      // Structure (ST), the 1440 false-floor reading and the primary action's label (HR-02).
      part.floor1440 = await run(p, FALSE_FLOOR);
      const st = await run(p, () => {
        const pa = primaryAction();
        // HR-02
        const VERBS = new Set('get start try install download deploy run book see watch read explore create build generate connect join request open upload scan check compare calculate find reconcile import inspect preview play talk ask sign subscribe schedule claim view browse launch make add apply buy order shop contact chat email call meet learn discover test ship send share save track plan design write draft record sync automate analyze analyse monitor measure map search convert translate publish host migrate set register reserve enroll enrol donate follow star fork clone copy drop pick choose deal roll spin draw take grab pull push fix debug review audit verify validate simulate model estimate price quote hire invite file submit continue go visit tour listen sample replay move use protect secure restore recover load stream render train evaluate benchmark query reply message text play pay split send claim match close catch gift give reach hear spot test run port lint format diff merge deploy back watch'.split(' '));
        const GENERIC = /^(get started( now| today| for free| free)?|learn more|start now|try (it )?now|click here|read more|see more|find out more|discover more|sign up( now)?|start here)$/i;
        const paLabel = pa ? label(pa) : null;
        const words = paLabel ? paLabel.split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)) : [];
        // ST-01: cost
        const chromeLinks = [...document.querySelectorAll('header a[href],nav a[href],footer a[href],[role=banner] a[href],[role=contentinfo] a[href]')];
        const priceLink = chromeLinks.find(a => /\b(pricing|prices?|plans?)\b/i.test(label(a) + ' ' + a.getAttribute('href')));
        const txt = document.body.innerText.replace(/[’‘]/g, "'");
        const PRICE_WORDS = /(\/\s?(mo|month|yr|year|user|seat)\b|per (month|year|user|seat|team|project)|pricing|\bplans?\b|subscription|one[- ]time|starts? at|starting at|billed|a month|a year|monthly|annually|\bfree\b)/i;
        const prices = [...txt.matchAll(/[$€£¥₹]\s?\d[\d,.]*|\b\d[\d,.]*\s?(?:USD|EUR|GBP)\b/g)].filter(m => PRICE_WORDS.test(txt.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40))).map(m => txt.slice(Math.max(0, m.index - 20), m.index + m[0].length + 20).replace(/\s+/g, ' ').trim());
        const free = txt.match(/\b(free (plan|tier|trial|forever|to (use|start|try))|free during (the )?beta|free and open[- ]source|open[- ]source and free|open[- ]source|MIT licen[cs]ed?|(it's|is|always|completely|100%) free|no cost)\b/i)?.[0] || null;
        // ST-03: signifiers
        let paSignal = null;
        if (pa) {
          const s = cs(pa), ground = groundBehind(pa);
          const bg = toRGBA(s.backgroundColor);
          const fill = bg[3] > 0.05 ? contrast(blend(bg, ground), ground) : 0;
          const stops = (s.backgroundImage.match(/(rgba?|oklch|oklab|lab|lch|color|hsla?)\([^)]*\)|#[0-9a-f]{3,8}\b/gi) || []).map(toRGBA).filter(c => c[3] > 0.05);
          const grad = stops.length ? Math.max(...stops.map(c => contrast(blend(c, ground), ground))) : 0;
          const bw = Math.max(...['Top', 'Right', 'Bottom', 'Left'].map(k => s[`border${k}Style`] === 'none' ? 0 : parseFloat(s[`border${k}Width`]) || 0));
          const border = bw >= 1 ? contrast(blend(toRGBA(s.borderTopColor), ground), ground) : 0;
          const ring = (s.boxShadow === 'none' ? [] : s.boxShadow.split(/,(?![^(]*\))/)).map(part => { const col = part.match(/(rgba?|oklch|oklab|lab|lch|color|hsla?)\([^)]*\)|#[0-9a-f]{3,8}\b/i)?.[0]; const lens = (part.replace(/(rgba?|oklch|oklab|lab|lch|color|hsla?)\([^)]*\)/gi, '').match(/-?[\d.]+px/g) || []).map(parseFloat); return col && (lens[3] || 0) >= 1 ? contrast(blend(toRGBA(col), ground), ground) : 0; });
          paSignal = {action: paLabel, fill_contrast: +Math.max(fill, grad).toFixed(2), border_contrast: +Math.max(border, ...ring, 0).toFixed(2)};
        }
        const inSentence = a => { if (!/^inline/.test(cs(a).display) || boxed(a)) return false; const blk = a.parentElement?.closest('p,li'); return !!blk && blk.innerText.replace(/\s+/g, ' ').trim().length > (a.innerText || '').replace(/\s+/g, ' ').trim().length + 1; };
        const inline = [...document.querySelectorAll('p a[href], li a[href]')].filter(a => seen(a) && !a.closest('nav,header,footer') && inSentence(a));
        const quiet = inline.filter(a => {
          const s = cs(a); const deco = [a, ...a.querySelectorAll('*')].some(e => /underline/.test(cs(e).textDecorationLine));
          if (deco || (parseFloat(s.borderBottomWidth) >= 1 && s.borderBottomStyle !== 'none') || /gradient/.test(s.backgroundImage)) return false;
          const blk = a.parentElement.closest('p,li'); const ground = groundBehind(a);
          return contrast(blend(toRGBA(s.color), ground), blend(toRGBA(cs(blk).color), ground)) < 3;
        }).map(a => `"${(a.innerText || '').trim().slice(0, 30)}"`);
        // ST-05: the conversion form
        const forms = [...document.querySelectorAll('form')].filter(seen);
        let form = pa?.closest('form') || null;
        if (!form && paLabel) form = forms.find(f => [...f.querySelectorAll('button,input[type=submit]')].some(b => label(b).toLowerCase() === paLabel.toLowerCase())) || null;
        if (!form) form = forms.find(f => f.querySelector('input[type=email]')) || null;
        const fieldsOf = f => [...f.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=image]):not([type=reset]),select,textarea')].filter(seen);
        const ff = form ? fieldsOf(form) : [];
        // ST-06: developer products
        const lim = innerHeight * 2;
        const codeEls = [...document.querySelectorAll('pre,code,kbd')].filter(el => seen(el) && (el.tagName === 'PRE' ? el.innerText.trim().length > 0 : el.innerText.trim().length >= 10));
        const INSTALL = /\b(npm (i|install)|npx \S|pnpm (add|i|install|dlx)|yarn (add|dlx)|bun (add|x)|pip3? install|uv (add|pip)|poetry add|brew install|cargo (add|install)|go (get|install)|gem install|composer require|docker (run|pull)|apt(-get)? install|helm install|kubectl apply)\b|\bcurl [^\n]*\|\s*(sh|bash)\b/i;
        const installAnywhere = txt.match(INSTALL)?.[0] || null;
        const isDev = codeEls.length > 0 || !!installAnywhere;
        const topCode = codeEls.some(el => box(el).top + scrollY < lim) || textEls().some(el => box(el).top + scrollY < lim && INSTALL.test(el.innerText));
        const docs = [...document.querySelectorAll('header a[href],nav a[href],[role=banner] a[href]')].find(a => !a.closest('footer') && /\b(docs?|documentation|api|reference|quick ?start|guides?|sdk|getting started)\b/i.test(label(a) + ' ' + a.getAttribute('href')));
        return {paLabel, verb: words.length ? VERBS.has(words[0].toLowerCase()) : false, words: words.length, generic: paLabel ? GENERIC.test(paLabel) : false,
          priceLink: priceLink ? label(priceLink) || priceLink.getAttribute('href') : null, prices: prices.slice(0, 2), free,
          paSignal, inlineLinks: inline.length, quiet: quiet.slice(0, 5),
          form: form ? {form: describe(form), fields: ff.length, textareas: ff.filter(x => x.tagName === 'TEXTAREA').length, selects: ff.filter(x => x.tagName === 'SELECT').length} : null,
          dev: {isDev, trigger: codeEls[0] ? describe(codeEls[0]) : installAnywhere, topCode, docs: docs ? label(docs) || docs.getAttribute('href') : null}};
      });
      check('HR-02', !!st.paLabel && st.verb && st.words >= 2 && st.words <= 5 && !st.generic, st.paLabel ? {primary_action: st.paLabel, starts_with_verb: st.verb, words: st.words, generic: st.generic || undefined} : 'no primary action found in the first screen');
      check('ST-01', !!(st.priceLink || st.prices.length || st.free), {pricing_link: st.priceLink, visible_price: st.prices[0] || null, free_statement: st.free, note: st.priceLink || st.prices.length || st.free ? undefined : 'no pricing link or visible price: say in the record how cost is disclosed and why'});
      const sig = st.paSignal;
      check('ST-03', !!sig && (sig.fill_contrast >= 3 || sig.border_contrast >= 3) && st.quiet.length === 0, {primary_action: sig || 'none found', inline_links_checked: st.inlineLinks, links_not_underlined_and_under_3_to_1: st.quiet});
      if (!st.form) check('ST-05', true, 'no conversion form on the page');
      else check('ST-05', st.form.fields <= 3 && st.form.textareas === 0 && st.form.selects <= 1, st.form);
      if (!st.dev.isDev) check('ST-06', true, 'n/a: not a developer product (no code, pre, kbd or install command on the page)');
      else check('ST-06', st.dev.topCode && !!st.dev.docs, {detected_by: st.dev.trigger, code_or_install_in_first_two_screens: st.dev.topCode, header_docs_link: st.dev.docs});

      // PF-06 and PF-07: metadata and share cards.
      const meta = await run(p, () => {
        const content = sel => document.querySelector(sel)?.getAttribute('content')?.trim() || '';
        const norm = s => (s || '').toLowerCase().replace(/\b(back to (the )?top|back to|go to|home ?page|home|logo|top)\b/g, '').replace(/[^\p{L}\p{N}]+/gu, '');
        const firstLink = document.querySelector('header a[href], [role=banner] a[href], nav a[href]');
        const brands = [content('meta[property="og:site_name"]'), content('meta[name="application-name"]'), firstLink && label(firstLink), firstLink?.innerText, firstLink?.querySelector('img[alt]')?.alt].map(norm).filter(b => b && b.length >= 2);
        const title = document.title.replace(/\s+/g, ' ').trim();
        const segs = title.split(/\s+[|–—·-]\s+|\s*[|–—·]\s*|:\s+/).filter(Boolean);
        const s0 = norm(segs[0]);
        const brandOnly = !!title && (brands.includes(norm(title)) || (segs.length === 1 && title.split(' ').length <= 2));
        const brandFirst = segs.length > 1 && brands.some(b => s0 === b || (s0.startsWith(b) && s0.length - b.length <= 3));
        const links = [...document.querySelectorAll('link[rel]')];
        const icon = links.find(l => l.rel.toLowerCase().split(/\s+/).includes('icon'));
        const touch = links.find(l => /apple-touch-icon/i.test(l.rel));
        const tcs = [...document.querySelectorAll('meta[name=theme-color]')];
        const tc = (tcs.find(x => !x.media || matchMedia(x.media).matches) || tcs[0])?.getAttribute('content') || null;
        return {title, description: content('meta[name=description]'), brandOnly, brandFirst, brands,
          og_title: !!content('meta[property="og:title"]'), og_description: !!content('meta[property="og:description"]'), og_image: content('meta[property="og:image"]') || content('meta[name="og:image"]') || null,
          twitter_card: content('meta[name="twitter:card"]') || content('meta[property="twitter:card"]') || null,
          icon: icon?.href || null, touch: touch?.href || null, theme: tc, themeRgb: tc ? toRGBA(tc) : null, top: groundAt(innerWidth / 2, 4)};
      });
      check('PF-06', !!meta.title && !!meta.description && !meta.brandOnly && !meta.brandFirst, {title: meta.title || null, description: meta.description ? meta.description.slice(0, 90) : null,
        note: meta.brandOnly ? 'the title is only the brand: lead with the category or audience' : meta.brandFirst ? 'the title leads with the brand: for an unknown brand put the category or audience first and the brand last, or record why the brand is known' : undefined});
      const reach = async u => {
        if (!u) return false;
        const f = fileOf(u); if (f) return existsSync(f);
        if (u.startsWith('data:')) return true;
        try { const res = await c.request.get(u, {timeout: 5000}); return res.ok(); } catch { return false; }
      };
      let icon = meta.icon, iconOk = await reach(icon);
      if (!icon && !isFile) { const fav = new URL('/favicon.ico', url).href; if (await reach(fav)) { icon = fav; iconOk = true; } }
      const touchOk = await reach(meta.touch);
      const missing = [!meta.og_title && 'og:title', !meta.og_description && 'og:description', !meta.og_image && 'og:image', meta.og_image && !/^https?:\/\//i.test(meta.og_image) && 'og:image is not an absolute URL',
        !meta.twitter_card && 'twitter:card', !icon && 'favicon', icon && !iconOk && 'favicon does not load', !meta.touch && 'apple-touch-icon', meta.touch && !touchOk && 'apple-touch-icon does not load',
        !meta.theme && 'theme-color', meta.theme && !near(meta.themeRgb, meta.top) && `theme-color ${meta.theme} does not match the page background rgb(${meta.top.slice(0, 3).join(', ')})`].filter(Boolean);
      check('PF-07', missing.length === 0, {missing, og_image: meta.og_image, twitter_card: meta.twitter_card, theme_color: meta.theme,
        note: isFile || /^https?:\/\/(localhost|127\.|\[::1\])/.test(url) ? `${isFile ? 'opened from disk' : 'served locally'}: tags and files were checked, but a share card can only be verified on a public URL` : undefined});

      // LY-06, part 1: in-page anchors land with their text below any sticky or fixed bar.
      const anchors = await run(p, () => {
        const html = document.documentElement, prev = html.style.scrollBehavior; html.style.scrollBehavior = 'auto';
        const fixed = [...document.querySelectorAll('body *')].filter(el => ['fixed', 'sticky'].includes(cs(el).position) && seen(el));
        const ids = [...new Set([...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(h => h.length > 1 && !h.startsWith('#/')))];
        const hidden = []; let checked = 0;
        for (const h of ids.slice(0, 12)) {
          let t = null; try { t = document.getElementById(decodeURIComponent(h.slice(1))); } catch { /* bad id */ }
          if (!t || !seen(t)) continue;
          t.scrollIntoView({block: 'start', behavior: 'instant'}); checked++;
          const bars = fixed.filter(el => { const b = box(el); return b.top <= 1 && b.bottom > 0 && b.width > innerWidth * 0.5 && b.height < innerHeight * 0.5 && !el.contains(t) && !t.contains(el); });
          const barBottom = Math.max(0, ...bars.map(b => box(b).bottom));
          const leaf = [t, ...t.querySelectorAll('*')].find(el => ownText(el).length > 1 && seen(el)) || t;
          const top = (textRects(leaf)[0] || box(leaf)).top;
          if (barBottom && top < barBottom - 4) hidden.push(`${h}: text at ${Math.round(top)}px under a ${Math.round(barBottom)}px bar`);
        }
        scrollTo({top: 0, behavior: 'instant'}); html.style.scrollBehavior = prev;
        return {checked, hidden};
      });

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
      // A page opened from disk hides its stylesheets' rules from the page, so read the files instead.
      if (!css.faces && css.opaqueSheets) {
        const hrefs = await p.evaluate(() => [...document.styleSheets].map(s => s.href).filter(Boolean));
        const local = hrefs.map(fileOf).filter(f => f && existsSync(f));
        if (local.length) {
          const blocks = local.flatMap(f => readFileSync(f, 'utf8').match(/@font-face\s*{[^}]*}/g) || []);
          check('PF-03', blocks.every(b => /font-display\s*:\s*(swap|optional|fallback)/.test(b)), `${blocks.length} @font-face rules read from disk`);
        } else notRun('PF-03', 'font rules are in cross-origin stylesheets');
      } else check('PF-03', css.badDisplay.length === 0, css.badDisplay);

      // AX-11 at 1440.
      part.spacing1440 = await textSpacing(p, '1440');

      // AX-03 and LY-06 part 2: tab through up to 40 controls; compare each one's focused and unfocused outline, ring and border.
      await p.addStyleTag({content: 'html{scroll-behavior:auto!important}'});
      await run(p, () => {
        const F = 'a[href],button,input:not([type=hidden]),select,textarea,summary,[tabindex]:not([tabindex="-1"]),[contenteditable=""],[contenteditable=true]';
        window.__unf = new Map(); window.__visited = new Set();
        // Unfocused styles of every control and of its three nearest ancestors (a :focus-within ring on a wrapper counts too).
        const sig = el => { const s = cs(el); return {outline: [s.outlineStyle, s.outlineWidth, s.outlineColor].join(' '), shadow: s.boxShadow, border: [s.borderTopWidth, s.borderTopStyle, s.borderTopColor].join(' ')}; };
        for (const el of document.querySelectorAll(F)) for (let a = el, i = 0; a && a !== document.body && i < 4; a = a.parentElement, i++) if (!window.__unf.has(a)) window.__unf.set(a, sig(a));
        document.activeElement?.blur(); scrollTo({top: 0, behavior: 'instant'});
        // Move the sequential focus starting point to the top of the document, so the first Tab lands on the first control.
        const b = document.body, had = b.getAttribute('tabindex'); b.setAttribute('tabindex', '-1'); b.focus({preventScroll: true}); if (had === null) b.removeAttribute('tabindex'); else b.setAttribute('tabindex', had);
      });
      const focus = [];
      for (let i = 0; i < 40; i++) {
        await p.keyboard.press('Tab');
        const f = await run(p, () => {
          const el = document.activeElement;
          if (!el || el === document.body || el === document.documentElement || window.__visited.has(el)) return {done: true};
          window.__visited.add(el);
          if (!seen(el)) return {skip: true};
          // Indicators: outline, box-shadow ring or border that changed on focus, on the control or on a wrapper up to three levels out.
          const rated = [];
          for (let node = el, depth = 0; node && node !== document.body && depth < 4; node = node.parentElement, depth++) {
            const s = cs(node), before = window.__unf.get(node); if (!before && depth) continue;
            const was = before || {}, ground = groundBehind(node), own = toRGBA(s.backgroundColor), ind = [];
            const outlineNow = [s.outlineStyle, s.outlineWidth, s.outlineColor].join(' ');
            if (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0 && outlineNow !== was.outline) ind.push({kind: s.outlineStyle === 'auto' ? 'browser focus ring' : 'outline', width: parseFloat(s.outlineWidth), color: toRGBA(s.outlineColor), auto: s.outlineStyle === 'auto', inset: parseFloat(s.outlineOffset) + parseFloat(s.outlineWidth) <= 0});
            if (s.boxShadow !== 'none' && s.boxShadow !== was.shadow) for (const part of s.boxShadow.split(/,(?![^(]*\))/)) {
              const col = part.match(/(rgba?|oklch|oklab|lab|lch|color|hsla?)\([^)]*\)|#[0-9a-f]{3,8}\b/i)?.[0];
              const lens = (part.replace(/(rgba?|oklch|oklab|lab|lch|color|hsla?)\([^)]*\)/gi, '').match(/-?[\d.]+px/g) || []).map(parseFloat);
              const w = Math.max(lens[3] || 0, (lens[2] || 0) === 0 ? Math.max(Math.abs(lens[0] || 0), Math.abs(lens[1] || 0)) : 0);
              if (col && w > 0) ind.push({kind: 'box-shadow ring', width: w, color: toRGBA(col), inset: /inset/.test(part)});
            }
            const borderNow = [s.borderTopWidth, s.borderTopStyle, s.borderTopColor].join(' ');
            if (s.borderTopStyle !== 'none' && parseFloat(s.borderTopWidth) > 0 && borderNow !== was.border) ind.push({kind: 'border', width: parseFloat(s.borderTopWidth), color: toRGBA(s.borderTopColor)});
            for (const x of ind) { const bg = x.inset && own[3] > 0.5 ? own : ground; rated.push({kind: (depth ? 'wrapper ' : '') + x.kind, width: x.width, auto: x.auto, contrast: +contrast(blend(x.color, bg), bg).toFixed(2)}); }
          }
          const ok = rated.some(x => x.auto || (x.width >= 2 && x.contrast >= 3));
          // Not obscured: some of the focused control must show past any fixed or sticky bar.
          const b = box(el);
          const pts = [[(b.left + b.right) / 2, (b.top + b.bottom) / 2], [b.left + 2, b.top + 2], [b.right - 2, b.top + 2], [b.left + 2, b.bottom - 2], [b.right - 2, b.bottom - 2]].filter(([x, y]) => x >= 0 && y >= 0 && x < innerWidth && y < innerHeight);
          const covered = !fixedAnc(el) && pts.length > 0 && pts.every(([x, y]) => { const t = document.elementFromPoint(x, y); return t && !el.contains(t) && !t.contains(el) && fixedAnc(t); });
          return {name: label(el).slice(0, 30) || describe(el), ok, indicators: rated, covered};
        });
        if (f.done) break;
        if (!f.skip) focus.push(f);
      }
      const noRing = focus.filter(f => !f.ok);
      check('AX-03', focus.length > 0 && noRing.length === 0, focus.length ? {controls_tabbed: focus.length, browser_default_ring: focus.filter(f => f.indicators.some(x => x.auto)).length || undefined,
        without_2px_3_to_1_indicator: noRing.slice(0, 8).map(f => `${f.name}: ${f.indicators.length ? f.indicators.map(x => `${x.kind} ${x.width}px ${x.contrast}:1`).join(', ') : 'no outline, ring or border change'}`)} : 'Tab reached no visible control');
      const covered = focus.filter(f => f.covered).map(f => f.name);
      check('LY-06', anchors.hidden.length === 0 && covered.length === 0, {anchor_targets_checked: anchors.checked, anchors_under_sticky_bar: anchors.hidden, focused_controls_hidden: covered.slice(0, 6)});
    } finally { await c.close(); }
  });

  // ======================= the idle watches (started with the 390 pass) =======================
  await section('the idle watch', ['MO-05', 'ST-02', 'HP-05'], async () => {
    const [w390, w1440] = await idle;
    if (w390.status === 'rejected' && w1440.status === 'rejected') throw w390.reason;
    const changes = [], textChanges = [], notes = [];
    let pause = null, h1Changed = null, paChanged = null;
    for (const w of [w390, w1440]) {
      if (w.status !== 'fulfilled') { notes.push(`one viewport could not be watched: ${String(w.reason?.message || w.reason).split('\n')[0].slice(0, 100)}`); continue; }
      const {snaps, viewport, pixelsChanged} = w.value; const [s1, s2, s3, s4] = snaps;
      pause = pause || s4.pause;
      const late = [...diffSnaps(s2, s3), ...diffSnaps(s3, s4)];
      for (const x of late) changes.push(`${viewport}: ${x.what} (${x.how})`);
      for (const x of [...diffSnaps(s1, s2), ...late]) if (x.how.includes('text')) textChanges.push(`${x.was ?? ''} → ${x.text ?? ''}`);
      for (const a of s4.anims) changes.push(`${viewport}: ${a} still running`);
      for (const v of s4.videos) { changes.push(`${viewport}: video ${v.what} playing`); if (v.controls) pause = pause || 'video controls'; }
      if (pixelsChanged && !late.length && !s4.anims.length && !s4.videos.length) changes.push(`${viewport}: first-screen pixels still change after 5 s (canvas, video, GIF or effect)`);
      const base = snaps.find(s => s.h1 !== null);
      if (base && snaps.some(s => s.h1 !== null && s.h1 !== base.h1)) h1Changed = `${viewport}: "${base.h1.slice(0, 40)}" → "${snaps.find(s => s.h1 !== null && s.h1 !== base.h1).h1.slice(0, 40)}"`;
      const pb = snaps.find(s => s.pa !== null);
      if (pb && snaps.some(s => s.pa !== null && s.pa !== pb.pa)) paChanged = `${viewport}: "${pb.pa}" → "${snaps.find(s => s.pa !== null && s.pa !== pb.pa).pa}"`;
      if (w.value.overlay) part.overlay = w.value.overlay;
    }
    const uniq = [...new Set(changes)];
    check('MO-05', !h1Changed && !paChanged && (uniq.length === 0 || !!pause), {still_changing_after_5s: uniq.slice(0, 6), pause_control: pause, h1_changed: h1Changed, primary_action_changed: paChanged, notes: notes.length ? notes : undefined});
    if (w390.status !== 'fulfilled') notRun('ST-02', `the 390px idle watch failed: ${String(w390.reason?.message || w390.reason).split('\n')[0].slice(0, 120)}`);
    else {
      const big = (part.overlay || []).filter(o => o.share > 30);
      check('ST-02', big.length === 0, {overlays_at_5s: (part.overlay || []).slice(0, 4).map(o => `${o.what}: ${o.share}% of the viewport`), note: big.some(o => o.consent) ? 'looks like a consent prompt: if the law requires it, name it in the record' : undefined});
    }
    const ticking = [...new Set(textChanges.filter(t => /\b\d{1,2}:\d{2}(:\d{2})?\b|\b\d+\s*(d|h|m|s|days?|hrs?|hours?|mins?|minutes?|secs?|seconds?)\b/i.test(t)))];
    const urg = part.copy ? part.copy.urgency : null;
    if (!urg) notRun('HP-05', 'the 1440px copy pass did not finish');
    else check('HP-05', urg.length === 0 && part.copy.countdownEls.length === 0 && ticking.length === 0, {urgency_phrases: urg, countdown_elements: part.copy.countdownEls, ticking_text: ticking.slice(0, 3), note: urg.length || ticking.length ? 'keep only if true, and cite the source beside it' : undefined});
  });

  // ======================= 320 px =======================
  await section('the 320px pass', ['LY-02'], async () => {
    const {ctx: c, page: p} = await open({width: 320, height: 640});
    try { check('LY-02', !(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1))); } finally { await c.close(); }
  });

  // ======================= Reduced motion, by behaviour =======================
  await section('the reduced-motion pass', ['MO-01'], async () => {
    const {ctx: c, page: p} = await open({width: 390, height: 844}, {reducedMotion: 'reduce'}, [MOTION_INIT]);
    try {
      await scrollThrough(p);
      const rm = await run(p, () => {
        window.__noteAll?.();
        const live = el => el.isConnected && seen(el);
        const moves = [...new Set((window.__moves || []).filter(m => live(m.el)).map(m => `${describe(m.el)}: ${m.props.join('/')} over ${m.d === Infinity ? '∞' : Math.round(m.d)}ms (${m.name})`))];
        const js = [...(window.__styleMoves || new Map())].filter(([el, n]) => n >= 3 && live(el)).map(([el, n]) => `${describe(el)}: inline transform/position rewritten ${n} times`);
        const hidden = textEls().filter(el => { for (let a = el; a && a !== document.body; a = a.parentElement) if (Number(cs(a).opacity) < 0.1) return true; return false; });
        return {moving: moves.slice(0, 6), moving_count: moves.length, script_motion: js.slice(0, 4), hidden_text: hidden.length, hidden_sample: hidden.slice(0, 3).map(el => ownText(el).slice(0, 30))};
      });
      check('MO-01', rm.moving_count === 0 && rm.script_motion.length === 0 && rm.hidden_text === 0, {...rm, note: 'opacity-only fades are allowed'});
    } finally { await c.close(); }
  });

  // Combine the checks measured at two widths.
  if (part.floor390 && part.floor1440) check('HR-05', part.floor390.pass && part.floor1440.pass, {'390×844': part.floor390.why, '1440×900': part.floor1440.why});
  else notRun('HR-05', 'one of the two viewports could not be measured');
  if (part.spacing390 && part.spacing1440) {
    const bad = [part.spacing390, part.spacing1440].filter(s => s.clipped.length || s.overlaps.length || s.overflow);
    check('AX-11', bad.length === 0, bad.length ? Object.fromEntries(bad.map(s => [s.where, {clipped: s.clipped.slice(0, 4), overlaps: s.overlaps.slice(0, 4), horizontal_scroll: s.overflow || undefined}])) : 'no new clipping, overlap or sideways scroll with WCAG 1.4.12 spacing at 390 and 1440');
  } else notRun('AX-11', 'one of the two viewports could not be measured');

  // ======================= PF-05: lab LCP on a throttled phone profile =======================
  await section('the throttled LCP runs', ['PF-05'], async () => {
    let target = url, server = null;
    if (isFile) { const s = await serve(fileURLToPath(url.split('#')[0])); server = s.server; target = s.href + (url.includes('#') ? url.slice(url.indexOf('#')) : ''); }
    try {
      const runs = []; let stopped = null;
      for (let i = 0; i < 3; i++) {
        const elapsed = (Date.now() - T0) / 1000, last = runs.length ? runs.at(-1).seconds : 12;
        if (i >= 2 && elapsed + last > 85) { stopped = `stopped after ${i} runs to keep the whole check under about 90 s`; break; }
        const t = Date.now();
        const ctx = await browser.newContext({viewport: {width: 390, height: 844}});
        try {
          const page = await ctx.newPage();
          await page.addInitScript(PERF_INIT);
          const cdp = await ctx.newCDPSession(page);
          await cdp.send('Network.enable');
          await cdp.send('Network.setCacheDisabled', {cacheDisabled: true});
          await cdp.send('Network.emulateNetworkConditions', {offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750});
          await cdp.send('Emulation.setCPUThrottlingRate', {rate: 4});
          await page.goto(target, {waitUntil: 'load', timeout: 45000});
          await page.waitForTimeout(1500);
          const l = await page.evaluate(() => window.__lcp && {t: Math.round(window.__lcp.t), el: window.__lcp.el ? window.__lcp.el.tagName.toLowerCase() : null});
          runs.push({lcp_ms: l ? l.t : null, element: l?.el ?? null, seconds: (Date.now() - t) / 1000});
        } finally { await ctx.close(); }
      }
      const vals = runs.map(x => x.lcp_ms).filter(v => v !== null).sort((a, b) => a - b);
      if (!vals.length) { notRun('PF-05', 'no LCP entry was reported on the throttled runs'); return; }
      const median = vals.length % 2 ? vals[(vals.length - 1) / 2] : Math.round((vals[vals.length / 2 - 1] + vals[vals.length / 2]) / 2);
      check('PF-05', median <= 2500, {lab_lcp_ms: median, runs: runs.map(x => x.lcp_ms), element: runs[0].element, profile: '390×844, 4× CPU slowdown, 1.6 Mbps down, 750 kbps up, 150 ms RTT, cold cache',
        note: [`median of ${vals.length} run${vals.length > 1 ? 's' : ''}; a lab estimate, not field data`, stopped, isFile && 'served from a temporary local server so the network throttle applies'].filter(Boolean).join('; ')});
    } finally { if (server) server.close(); }
  });
  // Facts for the record: the text a visitor can read in the first screen at each width, before any scrolling,
  // 1.5 s after load. verify-record.mjs checks the record's five-second line against it.
  out.facts = {first_screen_text: {}};
  for (const viewport of [{width: 1440, height: 900}, {width: 390, height: 844}]) {
    const {ctx, page} = await open(viewport);
    try {
      await page.waitForTimeout(800);
      out.facts.first_screen_text[String(viewport.width)] = await run(page, () => textEls()
        .filter(el => { const b = box(el); return b.top < innerHeight && b.bottom > 0 && Number(cs(el).opacity) > 0.1; })
        .map(el => el.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean).filter((t, i, a) => a.indexOf(t) === i).join(' | ').slice(0, 4000));
    } finally { await ctx.close(); }
  }
} catch (error) { out.failures.push('runtime'); out.error = String(error).split('\n')[0]; }
finally { await browser.close(); }

for (const id of Object.keys(CATALOG)) if (CATALOG[id].verify === 'auto' && !done.has(id)) notRun(id, out.error ? `the run stopped early: ${out.error}` : 'not measured by any pass');
const order = Object.keys(CATALOG);
out.checks.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
for (const c of out.checks) if (c.pass === false) (c.severity === 'block' ? out.failures : out.warnings).push(c.id);
out.runtime_s = Math.round((Date.now() - T0) / 100) / 10;
out.summary = `${out.checks.filter(c => c.pass).length} passed, ${out.failures.length} block failures, ${out.warnings.length} warnings, ${out.not_run.length} not run, of ${out.checks.length} automatic checks`;
console.log(JSON.stringify(out, null, 2));
if (out.failures.length) process.exitCode = 1;
