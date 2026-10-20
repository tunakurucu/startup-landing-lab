// Measure MOTION BEHAVIOUR on the rendered homepage of each site in a list, at 1440 × 900.
// Usage: node scripts/measure-motion.mjs <sites.json> <out.jsonl> [--concurrency 2] [--resume]
//   sites.json: [{"id": "...", "url": "https://..."}]
// Companion to measure.mjs, same conventions: per-context proxy for external sites (HTTPS_PROXY), robots.txt
// "Disallow: /" for all agents respected, 4xx/5xx stops that site, 30 s navigation timeout, numbers and short
// enums only (never page content beyond short selectors), no assets stored, one line appended per site as soon
// as it finishes so a crash loses nothing. --resume skips ids already present in <out.jsonl>.
// Two visits per site: one normal load (load, media, counters, scroll, hover, libraries) and one reload with
// prefers-reduced-motion: reduce. At most --concurrency sites run at once (default 2: parallel loads through the
// proxy drop stylesheets).
import {chromium} from 'playwright';
import {readFileSync, appendFileSync, existsSync} from 'node:fs';

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : dflt; };
const [listPath, outPath] = args.filter(a => !a.startsWith('--') && a !== flag('--concurrency') );
const CONCURRENCY = Math.max(1, Number(flag('--concurrency', 2)) || 2);
const RESUME = args.includes('--resume');
if (!listPath || !outPath) { console.error('usage: measure-motion.mjs <sites.json> <out.jsonl> [--concurrency N] [--resume]'); process.exit(2); }

const NAV_TIMEOUT = 30000, IDLE_TIMEOUT = 10000, IDLE_TIMEOUT_REDUCED = 6000, SETTLE_MS = 1200, SITE_TIMEOUT = 360000, STARVED_FRAME_MS = 250, SEVERE_FRAME_MS = 700;
const VIEWPORT = {width: 1440, height: 900};
const today = new Date().toISOString().slice(0, 10);
const proxy = process.env.HTTPS_PROXY ? {server: process.env.HTTPS_PROXY} : undefined;
const isLocal = u => ['localhost', '127.0.0.1'].includes(new URL(u).hostname);

let sites = JSON.parse(readFileSync(listPath, 'utf8'));
if (RESUME && existsSync(outPath)) {
  const done = new Set(readFileSync(outPath, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l).id; } catch { return null; } }));
  sites = sites.filter(s => !done.has(s.id));
}

// ---------------------------------------------------------------------------------------------------------------
// Library signatures. URL patterns match script src; body patterns match the text of script/stylesheet/document
// responses as they arrive (scanned in memory, never stored). Globals and DOM markers are checked in the page.
const LIBS = {
  gsap: {url: /gsap(?:\.min)?\.js|\/gsap\//i, body: /\b_gsap\b|gsap\.registerPlugin|gsap\.core\b/, global: ['gsap']},
  scrolltrigger: {url: /ScrollTrigger/i, body: /ScrollTrigger|pin-spacer/, global: ['ScrollTrigger']},
  framer_motion: {url: /framer-motion|\/motion(?:\.min)?\.js|motion-dom/i, body: /framer-motion|framerAppearId|data-framer-appear-id|whileHover|whileInView|AnimatePresence/, global: ['Motion', 'FramerMotion']},
  lenis: {url: /lenis/i, body: /lenis-(?:smooth|scrolling|stopped)|data-lenis-prevent|@studio-freight\/lenis|\blenis\.(?:raf|scrollTo)\b/i, global: ['Lenis']},
  locomotive: {url: /locomotive/i, body: /locomotive-scroll|has-scroll-smooth|data-scroll-container|data-scroll-speed/, global: ['LocomotiveScroll']},
  aos: {url: /\baos(?:\.min)?\.(?:js|css)/i, body: /aos-animate|data-aos-/, global: ['AOS']},
  swiper: {url: /swiper/i, body: /swiper-slide|swiper-wrapper/, global: ['Swiper']},
  splide: {url: /splide/i, body: /splide__slide|splide__track/, global: ['Splide']},
  lottie: {url: /lottie|bodymovin/i, body: /lottie-player|dotlottie|bodymovin|lottie-web|\.lottie\b|lottiefiles/i, global: ['lottie', 'bodymovin']},
  rive: {url: /rive/i, body: /@rive-app|rive-canvas|rive\.(?:min\.)?js|RiveCanvas|\.riv["'\s]/i, global: ['rive']},
  three: {url: /three(?:\.module|\.min)?\.js|\/three\//i, body: /THREE\.\w+:|@react-three|three\/build|WebGLRenderer/, global: ['THREE']},
  spline: {url: /splinetool|spline\.design/i, body: /@splinetool|spline-viewer|prod\.spline\.design|spline\.design/i, global: ['SPLINE']},
};
const CSS_BODY = {reduced_motion: /prefers-reduced-motion/, animation_timeline: /animation-timeline|scroll-timeline|view-timeline/, scroll_snap: /scroll-snap-type\s*:\s*(?!none)/, bg_attachment_fixed: /background-attachment\s*:\s*fixed/};

// ---------------------------------------------------------------------------------------------------------------
// In-page probe: installed before any page script runs, on every navigation, main frame only. It polls the first
// screen's text during load (initial hidden state, time to visibility, h1 delay), records which canvas contexts
// get created, and exposes the helpers each phase calls through page.evaluate. Nothing leaves the page except
// numbers, booleans, short enums and short selectors.
function probe(opts) {
  if (window !== window.top) return;
  opts = opts || {};
  const mm = window.__mm = {t0: performance.now(), tracked: new Map(), h1: {seen: null, hist: []}, contexts: {}, pins: new Map(), targets: [], hover: {}, polls: 0, webglBlocked: !!opts.blockWebGL};
  const cs = el => getComputedStyle(el);
  const parseT = t => {
    if (!t || t === 'none') return {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0, s: 1, raw: 'none'};
    const m = t.match(/matrix(3d)?\(([^)]+)\)/);
    if (!m) return {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0, s: 1, raw: t};
    const v = m[2].split(',').map(Number);
    return m[1] ? {a: v[0], b: v[1], c: v[4], d: v[5], tx: v[12], ty: v[13], s: Math.hypot(v[0], v[1]), raw: t}
                : {a: v[0], b: v[1], c: v[2], d: v[3], tx: v[4], ty: v[5], s: Math.hypot(v[0], v[1]), raw: t};
  };
  const off = p => Math.hypot(p.tx, p.ty);
  mm.parseT = parseT;
  mm.sel = el => {
    if (!el || !el.tagName) return null;
    let s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    const cls = typeof el.className === 'string' ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2) : [];
    if (cls.length) s += '.' + cls.join('.');
    return s.slice(0, 60);
  };
  const SKIP = new Set(['SCRIPT', 'STYLE', 'LINK', 'META', 'NOSCRIPT', 'TEMPLATE', 'HEAD', 'TITLE']);
  const hasText = el => { for (const n of el.childNodes) if (n.nodeType === 3 && n.textContent.trim().length > 2) return true; return false; };
  const directText = el => { let t = ''; for (const n of el.childNodes) if (n.nodeType === 3) t += n.textContent.trim(); return t; };
  mm.hasText = hasText;
  const rectOf = el => el.getBoundingClientRect();

  // Effective (ancestor-inclusive) opacity, translate offset and hidden flag, cached per poll.
  function effState(el, cache) {
    if (cache.has(el)) return cache.get(el);
    const s = cs(el);
    const p = parseT(s.transform);
    let st = {o: parseFloat(s.opacity), off: off(p), hid: s.visibility === 'hidden' || s.display === 'none', cp: s.clipPath !== 'none' && /inset\(\s*(?:100%|50%)|circle\(0/.test(s.clipPath)};
    const par = el.parentElement;
    if (par && par !== document.documentElement) { const ps = effState(par, cache); st = {o: st.o * ps.o, off: st.off + ps.off, hid: st.hid || ps.hid, cp: st.cp || ps.cp}; }
    cache.set(el, st);
    return st;
  }
  mm.effState = effState;

  function poll() {
    mm.polls++;
    const now = performance.now();
    const cache = new Map();
    const h1 = document.querySelector('h1');
    if (h1) {
      if (mm.h1.seen === null) mm.h1.seen = now;
      const r = rectOf(h1), st = effState(h1, cache);
      const entry = {t: now, o: Math.round(st.o * 100) / 100, off: Math.round(st.off), hid: st.hid || r.width === 0 || r.height === 0 || st.cp};
      const last = mm.h1.hist[mm.h1.hist.length - 1];
      if (!last || Math.abs(last.o - entry.o) >= 0.05 || Math.abs(last.off - entry.off) >= 2 || last.hid !== entry.hid) if (mm.h1.hist.length < 40) mm.h1.hist.push(entry);
    }
    const update = (el, rec) => {
      const st = effState(el, cache);
      const entry = {t: now, o: Math.round(st.o * 100) / 100, off: Math.round(st.off), hid: st.hid || st.cp};
      const last = rec.hist[rec.hist.length - 1];
      if (!last || Math.abs(last.o - entry.o) >= 0.05 || Math.abs(last.off - entry.off) >= 2 || last.hid !== entry.hid) if (rec.hist.length < 40) rec.hist.push(entry);
      if (rec.text0 === undefined) { const t = directText(el); rec.text0 = t.length <= 40 && /\d/.test(t) ? t : null; }
    };
    for (const [el, rec] of mm.tracked) if (el.isConnected) update(el, rec);
    if (mm.tracked.size < 160) {
      let budget = 2500;
      for (const el of document.querySelectorAll('h1,h2,h3,h4,p,a,button,li,span,label,strong,div')) {
        if (budget-- <= 0 || mm.tracked.size >= 160) break;
        if (mm.tracked.has(el) || !hasText(el)) continue;
        const r = rectOf(el);
        if (r.width === 0 || r.height === 0 || r.top >= innerHeight || r.bottom <= 0) continue;
        const rec = {hist: []};
        mm.tracked.set(el, rec);
        update(el, rec);
      }
    }
    const el = now - mm.t0;
    if (el < 3000) setTimeout(poll, 50); else if (el < 8000) setTimeout(poll, 150);
  }
  setTimeout(poll, 0);

  // Canvas contexts requested by page scripts (side-effect-free WebGL detection). With opts.blockWebGL the
  // request is counted but refused, which is how a page whose software-rendered WebGL starves the main thread
  // gets measured on its no-WebGL path instead of at a fraction of a frame per second.
  const gc = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
    try { mm.contexts[type] = (mm.contexts[type] || 0) + 1; } catch {}
    if (opts.blockWebGL && /webgl|webgpu/i.test(String(type))) return null;
    return gc.call(this, type, ...rest);
  };
  // Median requestAnimationFrame interval over a short window: a saturated main thread shows up as seconds per frame.
  mm.frameProbe = windowMs => new Promise(res => {
    const deltas = []; let last = performance.now(); const t0 = last;
    const done = () => { const s = deltas.slice().sort((a, b) => a - b); res({frames: deltas.length, median_ms: s.length ? Math.round(s[Math.floor(s.length / 2)]) : null, max_ms: s.length ? Math.round(s[s.length - 1]) : null}); };
    const tick = () => { const now = performance.now(); deltas.push(now - last); last = now; if (now - t0 < windowMs && deltas.length < 150) requestAnimationFrame(tick); else done(); };
    requestAnimationFrame(tick);
    setTimeout(() => { if (deltas.length < 2) res({frames: deltas.length, median_ms: null, max_ms: null}); }, windowMs + 4000);
  });

  // ---- reports -----------------------------------------------------------------------------------------------
  mm.textReport = () => {
    const cache = new Map();
    const visibleAt = (hist, finalOff) => { for (const h of hist) if (h.o >= 0.1 && !h.hid && h.off <= finalOff + 1) return h.t; return null; };
    const out = {tracked: 0, initially_hidden: 0, revealed: 0, visible_within_2s: 0, never_visible: 0, hidden_at_settle: 0, polls: mm.polls, counter_during_load: null};
    for (const [el, rec] of mm.tracked) {
      if (!el.isConnected || !rec.hist.length) continue;
      out.tracked++;
      if (rec.text0 && !out.counter_during_load) { const t = directText(el); if (t !== rec.text0 && /\d/.test(t)) out.counter_during_load = mm.sel(el); }
      const first = rec.hist[0], st = effState(el, cache);
      const finalOff = Math.round(st.off);
      const hiddenNow = st.o < 0.1 || st.hid;
      const initiallyHidden = first.o < 0.1 || first.hid || (first.off >= 8 && finalOff <= first.off - 4);
      if (hiddenNow) out.hidden_at_settle++;
      if (initiallyHidden) {
        out.initially_hidden++;
        const v = visibleAt(rec.hist, finalOff);
        if (v !== null && !hiddenNow) { out.revealed++; if (v - first.t <= 2000) out.visible_within_2s++; }
        else out.never_visible++;
      }
    }
    const h1 = document.querySelector('h1');
    const H = {present: !!h1, initially_hidden: null, first_seen_ms: mm.h1.seen === null ? null : Math.round(mm.h1.seen), first_visible_ms: null, hidden_at_settle: null};
    if (h1 && mm.h1.hist.length) {
      const first = mm.h1.hist[0], st = effState(h1, cache), finalOff = Math.round(st.off);
      H.initially_hidden = first.o < 0.1 || first.hid || (first.off >= 8 && finalOff <= first.off - 4);
      H.hidden_at_settle = st.o < 0.1 || st.hid;
      const v = visibleAt(mm.h1.hist, finalOff);
      H.first_visible_ms = v === null ? null : Math.round(v);
    }
    out.h1 = H;
    return out;
  };

  const COMPOSITOR = new Set(['transform', 'opacity', 'translate', 'rotate', 'scale', 'offsetDistance', 'offsetPath', 'offsetRotate', 'perspective', 'transformOrigin']);
  const LAYOUT = /^(width|height|top|left|right|bottom|inset|margin|padding|fontSize|lineHeight|letterSpacing|gap|rowGap|columnGap|flex|grid|border(Top|Right|Bottom|Left)?Width|maxWidth|maxHeight|minWidth|minHeight|wordSpacing|textIndent|verticalAlign|strokeWidth|fontWeight|fontVariationSettings|r$|rx$|ry$|cx$|cy$|x$|y$)/;
  const kfProps = a => {
    try {
      const kfs = a.effect.getKeyframes();
      const props = new Set();
      for (const k of kfs) for (const key of Object.keys(k)) if (!['offset', 'computedOffset', 'easing', 'composite'].includes(key)) props.add(key);
      if (a.transitionProperty) props.add(a.transitionProperty.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
      return {props: [...props], kfs};
    } catch { return {props: a.transitionProperty ? [a.transitionProperty] : [], kfs: []}; }
  };
  const classify = props => {
    if (!props.length) return 'unknown';
    if (props.some(p => LAYOUT.test(p))) return 'layout';
    if (props.every(p => COMPOSITOR.has(p))) return 'compositor';
    return 'paint';
  };
  const num = (str, re) => { const m = str.match(re); return m ? Math.abs(parseFloat(m[1])) : 0; };
  const kindOf = (props, kfs) => {
    const vals = kfs.map(k => [k.transform, k.rotate, k.scale, k.opacity].filter(v => v !== undefined).join(' ')).join(' | ');
    let tx = Math.max(num(vals, /translateX\(\s*(-?[\d.]+)(?:%|px|vw)/), num(vals, /translate(?:3d)?\(\s*(-?[\d.]+)(?:%|px|vw)/));
    let txIsPct = /translate(?:X|3d)?\(\s*-?[\d.]+(?:%|vw)/.test(vals) || /translate(?:X|3d)?\(\s*calc\(\s*-?\d+%/.test(vals);
    if (/translate(?:X|3d)?\(\s*calc\(\s*-?\d+%/.test(vals)) tx = Math.max(tx, 100);
    let ty = Math.max(num(vals, /translateY\(\s*(-?[\d.]+)(?:%|px|vh)/), num(vals, /translate(?:3d)?\(\s*-?[\d.]+(?:%|px|vw)?\s*,\s*(-?[\d.]+)(?:%|px|vh)/));
    // bare `translate` property keyframes ("-50% 0px")
    for (const k of kfs) if (typeof k.translate === 'string') { const m = k.translate.match(/^(-?[\d.]+)(%|px|vw)?(?:\s+(-?[\d.]+)(%|px|vh)?)?/); if (m) { if (m[2]) { tx = Math.max(tx, Math.abs(parseFloat(m[1]))); if (m[2] !== 'px') txIsPct = true; } if (m[3] && m[4]) ty = Math.max(ty, Math.abs(parseFloat(m[3]))); } else if (/calc\(/.test(k.translate)) { tx = Math.max(tx, 100); txIsPct = true; } }
    const rot = Math.max(num(vals, /rotate(?:Z)?\(\s*(-?[\d.]+)deg/), num(vals, /rotate(?:Z)?\(\s*(-?[\d.]+)turn/) * 360, num(vals, /rotate3d\([^)]*,\s*(-?[\d.]+)deg/), num(vals, /(?:^|\s|\|)(-?[\d.]+)deg/));
    const hasRotate = rot >= 90 || (props.includes('rotate') && !props.includes('transform'));
    if (hasRotate && tx < 50 && ty < 50) return 'spin';
    if (tx >= 100 || (txIsPct && tx >= 20)) return 'marquee';
    if (ty >= 100 || (ty >= 20 && /translate(?:Y|3d)?\([^)]*%/.test(vals) && tx < 20)) return 'marquee_vertical';
    if (tx > 0 || ty > 0) return 'float';
    if (props.every(p => ['opacity', 'scale', 'transform', 'boxShadow', 'filter', 'backgroundColor', 'color', 'borderColor', 'fill', 'stroke'].includes(p))) return 'pulse';
    return 'other';
  };
  mm.animReport = () => {
    const anims = document.getAnimations().slice(0, 600);
    const out = {total: anims.length, running: 0, css_animations: 0, css_transitions: 0, waapi: 0, compositor_only: 0, paint: 0, layout: 0, unknown: 0,
      longest_duration_ms: 0, longest_total_ms: 0, infinite: 0, infinite_running: 0, infinite_kinds: {marquee: 0, marquee_vertical: 0, spin: 0, pulse: 0, float: 0, other: 0}, infinite_items: [], scroll_timeline: 0};
    for (const a of anims) {
      const type = a.constructor.name;
      if (type === 'CSSAnimation') out.css_animations++; else if (type === 'CSSTransition') out.css_transitions++; else out.waapi++;
      const running = a.playState === 'running';
      if (running) out.running++;
      let timing = {}; try { timing = a.effect.getTiming(); } catch {}
      const dur = typeof timing.duration === 'number' ? timing.duration : 0;
      const iter = timing.iterations;
      out.longest_duration_ms = Math.max(out.longest_duration_ms, dur);
      if (iter !== Infinity) out.longest_total_ms = Math.max(out.longest_total_ms, dur * (iter || 1));
      const {props, kfs} = kfProps(a);
      const cls = classify(props);
      if (cls === 'compositor') out.compositor_only++; else if (cls === 'paint') out.paint++; else if (cls === 'layout') out.layout++; else out.unknown++;
      try { if (a.timeline && /Scroll|View/.test(a.timeline.constructor.name)) out.scroll_timeline++; } catch {}
      if (iter === Infinity) {
        out.infinite++;
        if (running) out.infinite_running++;
        const kind = kindOf(props, kfs);
        out.infinite_kinds[kind] = (out.infinite_kinds[kind] || 0) + 1;
        if (out.infinite_items.length < 8) {
          const t = a.effect && a.effect.target;
          const r = t && t.getBoundingClientRect ? t.getBoundingClientRect() : null;
          out.infinite_items.push({kind, tag: t && t.tagName ? t.tagName.toLowerCase() : null, selector: mm.sel(t), duration_ms: Math.round(dur), in_first_screen: r ? r.top < innerHeight && r.bottom > 0 && r.width > 0 : null, running});
        }
      }
    }
    out.longest_duration_ms = Math.round(out.longest_duration_ms); out.longest_total_ms = Math.round(out.longest_total_ms);
    return out;
  };
  mm.infTargets = () => { const s = new Set(); for (const a of document.getAnimations().slice(0, 600)) { let it; try { it = a.effect.getTiming().iterations; } catch {} if (it === Infinity || (a.timeline && /Scroll|View/.test(a.timeline.constructor.name))) { const t = a.effect && a.effect.target; if (t) s.add(t); } } return s; };

  mm.mediaReport = () => {
    const videos = [...document.querySelectorAll('video')].slice(0, 20);
    const vinfo = v => {
      const r = v.getBoundingClientRect();
      const src = v.currentSrc || v.src || (v.querySelector('source') || {}).src || '';
      const type = ((v.querySelector('source') || {}).type || '').toLowerCase();
      let kind = null;
      if (/\.m3u8|mpegurl/i.test(src + type)) kind = 'hls'; else if (/webm/i.test(src + type)) kind = 'webm'; else if (/\.mp4|\.m4v|\.mov|mp4/i.test(src + type)) kind = 'mp4'; else if (/^blob:/.test(src)) kind = 'blob'; else if (src || type) kind = 'other';
      return {selector: mm.sel(v), autoplay: v.autoplay || v.hasAttribute('autoplay'), muted: v.muted || v.hasAttribute('muted'), loop: v.loop, controls: v.controls, poster: !!v.poster, playsinline: v.playsInline || v.hasAttribute('playsinline'),
        source_kind: kind, ready_state: v.readyState, playing: !v.paused && !v.ended && v.readyState >= 2, paused: v.paused, current_time_s: Math.round(v.currentTime * 10) / 10, error: v.error ? v.error.code : null,
        in_first_screen: r.top < innerHeight && r.bottom > 0 && r.width > 0, width_px: Math.round(r.width), top_px: Math.round(r.top + scrollY)};
    };
    const infos = videos.map(vinfo);
    const hero = infos.find(i => i.in_first_screen && i.width_px >= 120) || infos.find(i => i.top_px < innerHeight * 2 && i.width_px >= 120) || infos[0] || null;
    const probe = document.createElement('video');
    const canvases = [...document.querySelectorAll('canvas')].filter(c => { const r = c.getBoundingClientRect(); return r.width >= 100 && r.height >= 100; });
    const ctx = mm.contexts;
    const q = s => !!document.querySelector(s);
    return {
      video: {present: videos.length > 0, count: videos.length, autoplay_count: infos.filter(i => i.autoplay).length, playing_count: infos.filter(i => i.playing).length, unplayable_count: infos.filter(i => i.error || (i.autoplay && i.ready_state < 2)).length, hero},
      h264_supported: probe.canPlayType('video/mp4; codecs="avc1.42E01E"') !== '', webm_supported: probe.canPlayType('video/webm; codecs="vp9"') !== '',
      canvas: {present: canvases.length > 0, count: canvases.length, webgl: (ctx.webgl || 0) + (ctx.webgl2 || 0) + (ctx['experimental-webgl'] || 0) > 0, webgpu: (ctx.webgpu || 0) > 0, canvas2d: (ctx['2d'] || 0) > 0, webgl_blocked: mm.webglBlocked, in_first_screen: canvases.some(c => { const r = c.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; })},
      markers: {
        lottie: q('lottie-player,dotlottie-player,dotlottie-wc,[class*="lottie" i],[id*="lottie" i],[data-lottie],[data-animation-path]') || !!(window.lottie || window.bodymovin),
        rive: q('canvas[class*="rive" i],canvas[id*="rive" i],[data-rive]') || !!window.rive,
        spline: q('spline-viewer,canvas[id*="spline" i],canvas[class*="spline" i],iframe[src*="spline.design"]'),
      },
    };
  };

  mm.libReport = () => {
    const g = name => { try { return window[name] !== undefined; } catch { return false; } };
    const q = s => { try { return !!document.querySelector(s); } catch { return false; } };
    const srcs = [...document.scripts].map(s => s.src).filter(Boolean).join('\n');
    const inline = [...document.scripts].filter(s => !s.src).map(s => s.textContent).join('\n').slice(0, 3e6);
    const html = document.documentElement.outerHTML.slice(0, 2e6);
    return {
      globals: {gsap: g('gsap'), scrolltrigger: g('ScrollTrigger') || !!(window.gsap && window.gsap.core && window.gsap.core.globals && window.gsap.core.globals().ScrollTrigger), framer_motion: g('Motion') || g('FramerMotion'), lenis: g('Lenis'), locomotive: g('LocomotiveScroll'), aos: g('AOS'), swiper: g('Swiper'), splide: g('Splide'), lottie: g('lottie') || g('bodymovin'), rive: g('rive'), three: g('THREE'), spline: g('SPLINE')},
      dom: {aos: q('[data-aos]'), swiper: q('.swiper,.swiper-container,.swiper-slide'), splide: q('.splide,.splide__slide'), lottie: q('lottie-player,dotlottie-player,dotlottie-wc,[data-lottie]'), rive: q('canvas[class*="rive" i],[data-rive]'), spline: q('spline-viewer'), lenis: q('html.lenis,[data-lenis-prevent],.lenis'), locomotive: q('[data-scroll-container],.has-scroll-smooth'), scrolltrigger: q('.pin-spacer'), framer_motion: q('[data-framer-appear-id]')},
      builder: q('[data-framer-name],[data-framer-component-type]') || /framerusercontent\.com/.test(html) ? 'framer' : q('html[data-wf-page],[data-wf-site]') ? 'webflow' : /wp-content\//.test(html) ? 'wordpress' : q('[data-sb-object-id],[data-mesh-id]') ? 'wix' : null,
      srcs, inline,
    };
  };

  mm.styleReport = () => {
    let reduced = 'not_observed', timeline = false, snap = false, bgFixed = false, inaccessible = 0, total = 0;
    for (const sheet of document.styleSheets) {
      total++;
      try {
        for (const r of sheet.cssRules) {
          const t = r.cssText;
          if (t.includes('prefers-reduced-motion')) reduced = 'observed';
          if (/animation-timeline|scroll-timeline|view-timeline/.test(t)) timeline = true;
          if (/scroll-snap-type\s*:\s*(?!none)/.test(t)) snap = true;
          if (/background-attachment\s*:\s*fixed/.test(t)) bgFixed = true;
        }
      } catch { inaccessible++; if (reduced === 'not_observed') reduced = 'unverified'; }
    }
    return {reduced_motion_rule: reduced, animation_timeline_css: timeline, scroll_snap_css: snap, bg_attachment_fixed_css: bgFixed, sheets: total, inaccessible_sheets: inaccessible, matches_reduce: matchMedia('(prefers-reduced-motion: reduce)').matches};
  };

  // ---- scrolling ----------------------------------------------------------------------------------------------
  mm.setupScroller = () => {
    const root = document.scrollingElement || document.documentElement;
    window.scrollTo({top: 60, behavior: 'instant'});
    let kind = 'window', el = null;
    if (window.scrollY < 30) {
      const cands = [];
      let n = 0;
      for (const e of document.querySelectorAll('body *')) {
        if (n++ > 6000) break;
        const s = cs(e);
        if (!/(auto|scroll)/.test(s.overflowY)) continue;
        if (e.scrollHeight <= e.clientHeight + 100) continue;
        const r = e.getBoundingClientRect();
        if (r.width < innerWidth * 0.6 || r.height < innerHeight * 0.6) continue;
        cands.push({e, area: r.width * r.height});
      }
      cands.sort((a, b) => b.area - a.area);
      if (cands.length) { el = cands[0].e; el.scrollTo({top: 60, behavior: 'instant'}); if (el.scrollTop >= 30) kind = 'element'; else { el = null; kind = 'none'; } }
      else kind = root.scrollHeight > innerHeight + 50 ? 'blocked' : 'none';
    }
    mm.scroller = el;
    if (el) el.scrollTo({top: 0, behavior: 'instant'}); else window.scrollTo({top: 0, behavior: 'instant'});
    const height = el ? el.scrollHeight : root.scrollHeight;
    const maxScroll = Math.max(0, height - innerHeight);
    return {kind, page_height_px: height, max_scroll_px: maxScroll};
  };
  mm.scrollTo = y => { if (mm.scroller) mm.scroller.scrollTo({top: y, behavior: 'instant'}); else window.scrollTo({top: y, behavior: 'instant'}); return mm.scrollY(); };
  mm.scrollY = () => Math.round(mm.scroller ? mm.scroller.scrollTop : window.scrollY);

  mm.snap = () => {
    const m = new Map();
    let n = 0;
    for (const el of document.querySelectorAll('body *')) {
      if (n++ > 6000) break;
      if (SKIP.has(el.tagName)) continue;
      const s = cs(el);
      m.set(el, {o: parseFloat(s.opacity), t: s.transform, v: s.visibility});
    }
    return m;
  };
  mm.diff = (prev, cur, excl) => {
    let changed = 0, revealed = 0, example = null;
    for (const [el, c] of cur) {
      const p = prev.get(el);
      if (!p || excl.has(el)) continue;
      const oChanged = Math.abs(p.o - c.o) >= 0.05, tChanged = p.t !== c.t;
      if (oChanged || tChanged || p.v !== c.v) changed++;
      if (c.o >= 0.9 && c.v !== 'hidden') {
        const pp = parseT(p.t), cc = parseT(c.t);
        const byOpacity = p.o <= 0.5 || p.v === 'hidden';
        const byMove = (Math.hypot(pp.tx - cc.tx, pp.ty - cc.ty) >= 8 || Math.abs(pp.s - cc.s) >= 0.05) && off(cc) <= 1 && Math.abs(cc.s - 1) <= 0.02;
        if (byOpacity || byMove) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0 && r.top < innerHeight * 1.5 && r.bottom > -innerHeight * 0.5) { revealed++; if (!example) example = mm.sel(el); }
        }
      }
    }
    return {changed, revealed, example};
  };
  mm.sampleStep = () => {
    const cur = mm.snap();
    const excl = mm.infTargets();
    const d = mm.prevSnap ? mm.diff(mm.prevSnap, cur, excl) : {changed: 0, revealed: 0, example: null};
    mm.prevSnap = cur;
    const y = mm.scrollY();
    // pinned candidates: large sticky/fixed elements other than the header
    let n = 0, pinsSeen = 0;
    for (const el of document.querySelectorAll('body *')) {
      if (n++ > 6000 || pinsSeen >= 12) break;
      const s = cs(el);
      if (s.position !== 'sticky' && s.position !== 'fixed') continue;
      if (/^(HEADER|NAV)$/.test(el.tagName)) continue;
      const r = el.getBoundingClientRect();
      if (r.height < innerHeight * 0.4 || r.width < innerWidth * 0.4) continue;
      pinsSeen++;
      const sig = mm.sig(el);
      const rec = mm.pins.get(el) || {pinned_steps: 0, changes: 0, lastTop: null, lastSig: null, lastY: null, selector: mm.sel(el), position: s.position};
      if (rec.lastTop !== null && Math.abs(rec.lastTop - r.top) <= 2 && y !== rec.lastY) { rec.pinned_steps++; if (rec.lastSig !== sig) rec.changes++; }
      rec.lastTop = r.top; rec.lastSig = sig; rec.lastY = y;
      mm.pins.set(el, rec);
    }
    const videos = [...document.querySelectorAll('video')].slice(0, 10).map(v => ({ct: Math.round(v.currentTime * 100) / 100, paused: v.paused}));
    return {y, changed: d.changed, revealed: d.revealed, example: d.example, videos};
  };
  mm.sig = el => {
    let h = 5381, n = 0;
    const add = str => { for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0; };
    add(String(el.textContent.length));
    for (const d of el.querySelectorAll('*')) {
      if (n++ > 400) break;
      if (SKIP.has(d.tagName)) continue;
      const s = cs(d), r = d.getBoundingClientRect();
      add(d.tagName + s.opacity + s.transform + s.clipPath + (s.visibility) + Math.round(r.width / 4) + ':' + Math.round(r.height / 4) + ':' + (d.scrollLeft | 0));
      if (d.tagName === 'VIDEO') add('v' + Math.round(d.currentTime * 2));
      if (d.tagName === 'IMG') add('i' + (d.currentSrc || '').length);
    }
    return h;
  };
  mm.pinReport = () => {
    let best = null;
    for (const [, rec] of mm.pins) if (rec.pinned_steps >= 2 && rec.changes >= 1 && (!best || rec.changes > best.changes)) best = rec;
    const anyPinned = [...mm.pins.values()].some(r => r.pinned_steps >= 2);
    return {pinned_scene: !!best, selector: best ? best.selector : null, position: best ? best.position : null, pinned_steps: best ? best.pinned_steps : 0, content_changes: best ? best.changes : 0, large_pinned_element: anyPinned};
  };
  mm.tsnap = () => { const m = new Map(); let n = 0; for (const el of document.querySelectorAll('body *')) { if (n++ > 6000) break; if (SKIP.has(el.tagName)) continue; const s = cs(el); m.set(el, {p: parseT(s.transform), o: parseFloat(s.opacity)}); } return m; };
  mm.linked = (s0, s1, s2, dy) => {
    const excl = mm.infTargets();
    const out = {linked: 0, parallax: 0, counter_scroll: 0, horizontal: 0, other: 0, opacity_linked: 0, example: null, parallax_example: null};
    const ok = (d1, d2, min) => Math.abs(d1) >= min && Math.abs(d2) >= min && Math.sign(d1) === Math.sign(d2) && Math.abs(d2 / d1) >= 0.5 && Math.abs(d2 / d1) <= 2;
    for (const [el, a0] of s0) {
      const a1 = s1.get(el), a2 = s2.get(el);
      if (!a1 || !a2 || excl.has(el)) continue;
      const p0 = a0.p, p1 = a1.p, p2 = a2.p;
      const ty = ok(p1.ty - p0.ty, p2.ty - p1.ty, 1), tx = ok(p1.tx - p0.tx, p2.tx - p1.tx, 1);
      const mat = ['a', 'b', 'c', 'd'].some(k => ok(p1[k] - p0[k], p2[k] - p1[k], 0.01));
      if (ok(a1.o - a0.o, a2.o - a1.o, 0.02)) out.opacity_linked++;
      if (!ty && !tx && !mat) continue;
      out.linked++;
      if (!out.example) out.example = mm.sel(el);
      if (ty && !tx && !mat) {
        const ratio = (p1.ty - p0.ty) / dy;
        if (ratio >= 0.9 && ratio <= 1.1) out.counter_scroll++; else { out.parallax++; if (!out.parallax_example) out.parallax_example = mm.sel(el); }
      } else if (tx && !ty && !mat) out.horizontal++; else out.other++;
    }
    return out;
  };
  mm.snapReport = () => {
    const root = cs(document.documentElement).scrollSnapType !== 'none' || cs(document.body).scrollSnapType !== 'none';
    let any = root, n = 0;
    if (!any) for (const el of document.querySelectorAll('body *')) { if (n++ > 6000) break; const s = cs(el); if (s.scrollSnapType !== 'none' && /(auto|scroll)/.test(s.overflowY + s.overflowX) && el.scrollHeight + el.scrollWidth > el.clientHeight + el.clientWidth + 50) { any = true; break; } }
    return {scroll_snap: any, scroll_snap_root: root};
  };

  // ---- phase runners: one evaluate per phase, waits happen inside the page ------------------------------------
  mm.sleep = ms => new Promise(r => setTimeout(r, ms));
  mm.loadReport = () => {
    const n = performance.getEntriesByType('navigation')[0];
    return {anim: mm.animReport(), text: mm.textReport(), media: mm.mediaReport(), style: mm.styleReport(), nav: n ? {dcl_ms: Math.round(n.domContentLoadedEventEnd), load_ms: Math.round(n.loadEventEnd)} : {dcl_ms: null, load_ms: null}};
  };
  mm.runScroll = async maxScroll => {
    const steps = [], videoSamples = [];
    let linked = null;
    mm.prevSnap = mm.snap(); mm.pins = new Map();
    videoSamples.push(mm.sampleStep().videos);
    for (let i = 1; i <= 8; i++) {
      const y = Math.round(maxScroll * i / 8);
      mm.scrollTo(y);
      await mm.sleep(500);
      const s = mm.sampleStep();
      steps.push({y: s.y, changed: s.changed, revealed: s.revealed, example: s.example});
      videoSamples.push(s.videos);
      if (i === 3 && maxScroll > 400) {
        // Two further samples 100 px apart: transforms moving in proportion to scroll are scroll-linked.
        const ts0 = mm.tsnap();
        mm.scrollTo(y + 100); await mm.sleep(700);
        const ts1 = mm.tsnap();
        mm.scrollTo(y + 200); await mm.sleep(700);
        const ts2 = mm.tsnap();
        linked = mm.linked(ts0, ts1, ts2, 100);
        mm.prevSnap = mm.snap();
      }
    }
    const pin = mm.pinReport(), snap = mm.snapReport();
    const a = document.getAnimations();
    mm.prevSnap = null;
    mm.scrollTo(0);
    return {steps, videoSamples, linked, pin, snap, animAfter: {total: a.length, running: a.filter(x => x.playState === 'running').length}};
  };
  mm.counterProbe = async y => {
    if (y) { mm.scrollTo(y); await mm.sleep(400); }
    const n0 = mm.numSnap();
    await mm.sleep(2000);
    const n1 = mm.numSnap();
    const ch = mm.numDiff(n0, n1);
    if (!ch.length) return {found: false, tracked: n0.size};
    await mm.sleep(1000);
    const again = mm.numDiff(n1, mm.numSnap()).length;
    return {found: true, selector: mm.sel(ch[0]), kind: again > 0 ? 'keeps_changing' : 'settles', tracked: n0.size, count: ch.length};
  };
  mm.hoverProbe = async (i, x, y) => {
    for (let k = 0; k < 6; k++) { await mm.sleep(50); mm.hoverDuring(i, x, y); }
    return mm.hoverAfter(i, x, y);
  };

  // ---- counters -----------------------------------------------------------------------------------------------
  mm.numSnap = () => {
    const m = new Map();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n = 0, node;
    while ((node = walker.nextNode()) && n < 20000) {
      n++;
      const t = node.textContent.trim();
      if (t.length === 0 || t.length > 40 || !/\d/.test(t)) continue;
      const el = node.parentElement;
      if (!el || SKIP.has(el.tagName)) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0 || r.top >= innerHeight * 2 || r.bottom <= 0) continue;
      let txt = '';
      for (const c of el.childNodes) if (c.nodeType === 3) txt += c.textContent.trim();
      m.set(el, txt);
      if (m.size >= 500) break;
    }
    return m;
  };
  mm.numDiff = (prev, cur) => {
    const changed = [];
    for (const [el, t] of prev) { if (!el.isConnected) continue; const c = cur.get(el); if (c !== undefined && c !== t && /\d/.test(c)) changed.push(el); }
    return changed;
  };

  // ---- hover --------------------------------------------------------------------------------------------------
  const visible = el => { if (el.checkVisibility && !el.checkVisibility({opacityProperty: true, visibilityProperty: true})) return false; const r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) return false; const s = cs(el); return s.visibility !== 'hidden' && parseFloat(s.opacity) >= 0.1; };
  mm.hoverTargets = () => {
    const header = document.querySelector('header') || document.querySelector('nav');
    const inHeader = el => header ? header.contains(el) : el.getBoundingClientRect().top < 120;
    const CTA = /get started|start|sign ?up|try|book|request|demo|join|download|install|buy|contact|talk|free|waitlist|apply|launch|learn more|explore|see|watch|schedule|order|preorder|pre-order|build|deploy|create|log ?in/i;
    const cands = [];
    for (const el of document.querySelectorAll('a[href],button,[role="button"]')) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.top >= innerHeight || r.bottom <= 0 || r.width < 40 || r.height < 24 || r.width > innerWidth * 0.6) continue;
      const text = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ');
      if (text.length < 2 || text.length > 40) continue;
      const s = cs(el);
      const bg = s.backgroundColor.match(/[\d.]+/g) || [];
      const opaqueBg = bg.length && (bg.length < 4 || parseFloat(bg[3]) > 0.1) && !(bg[0] === '0' && bg[1] === '0' && bg[2] === '0' && bg.length === 4 && parseFloat(bg[3]) === 0);
      const bordered = parseFloat(s.borderTopWidth) > 0 && !/rgba\(\s*0,\s*0,\s*0,\s*0\)/.test(s.borderTopColor);
      const score = (opaqueBg ? 3 : 0) + (bordered ? 1 : 0) + (CTA.test(text) ? 2 : 0) + (r.height >= 36 ? 1 : 0) + (r.width >= 90 ? 1 : 0) - (inHeader(el) ? 2 : 0) - (parseFloat(s.fontSize) < 12 ? 2 : 0);
      cands.push({el, score, top: r.top});
    }
    cands.sort((a, b) => b.score - a.score || a.top - b.top);
    const primary = cands.length && cands[0].score >= 3 ? cands[0].el : null;
    const navLinks = [];
    const navScope = header ? header.querySelectorAll('a[href]') : document.querySelectorAll('a[href]');
    for (const a of navScope) {
      if (a === primary || !visible(a)) continue;
      const r = a.getBoundingClientRect();
      if (r.top >= 160 || r.bottom <= 0 || r.width < 20) continue;
      const text = (a.innerText || '').trim();
      if (!text || text.length > 30) continue;
      navLinks.push(a);
      if (navLinks.length >= 3) break;
    }
    mm.targets = [];
    if (primary) mm.targets.push({el: primary, role: 'primary'});
    for (const a of navLinks) mm.targets.push({el: a, role: 'nav'});
    return mm.targets.map(t => { const r = t.el.getBoundingClientRect(); return {role: t.role, selector: mm.sel(t.el), x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2)}; });
  };
  const HPROPS = ['backgroundColor', 'color', 'borderColor', 'boxShadow', 'transform', 'opacity', 'textDecorationLine', 'filter', 'outlineColor', 'backgroundImage', 'backgroundPosition', 'width', 'paddingLeft', 'paddingRight', 'letterSpacing', 'textDecorationColor', 'gap'];
  const propName = p => p.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
  const scopeOf = el => { const s = new Set([el]); for (const d of el.querySelectorAll('*')) { s.add(d); if (s.size > 60) break; } let p = el.parentElement; for (let i = 0; i < 3 && p && p !== document.body; i++, p = p.parentElement) s.add(p); return s; };
  const styleSnap = el => { const out = []; const list = [el, ...[...el.querySelectorAll('*')].slice(0, 20)]; for (const e of list) { const s = cs(e); out.push(HPROPS.map(p => s[p])); } return out; };
  mm.hoverBefore = async (i, settleMs) => {
    if (settleMs) await mm.sleep(settleMs);
    const t = mm.targets[i].el;
    const s = cs(t);
    const base = new Set(); let n = 0;
    for (const el of document.querySelectorAll('body *')) { if (n++ > 6000) break; if (SKIP.has(el.tagName)) continue; if (visible(el)) base.add(el); }
    const dprops = s.transitionProperty.split(',').map(x => x.trim()).filter(Boolean);
    const ddurs = s.transitionDuration.split(',').map(x => parseFloat(x) * (x.trim().endsWith('ms') ? 1 : 1000) || 0);
    const declared = new Map();
    dprops.forEach((p, k) => { const d = ddurs[k % ddurs.length]; if (d > 0) declared.set(p, d); });
    mm.hover[i] = {scope: scopeOf(t), before: styleSnap(t), anims: new Set(document.getAnimations()), base, props: new Set(), types: new Set(), maxDur: 0, hit: null, declared};
    return {declared_transition: dprops.slice(0, 6).join(', ').slice(0, 80), declared_duration_ms: Math.round(Math.max(0, ...ddurs))};
  };
  mm.hoverDuring = (i, x, y) => {
    const h = mm.hover[i];
    if (h.hit === null) { const e = document.elementFromPoint(x, y); h.hit = !!e && (h.scope.has(e) || mm.targets[i].el.contains(e)); }
    for (const a of document.getAnimations().slice(0, 600)) {
      if (h.anims.has(a)) continue;
      const t = a.effect && a.effect.target;
      if (!t || !h.scope.has(t)) continue;
      const type = a.constructor.name === 'CSSTransition' ? 'transition' : a.constructor.name === 'CSSAnimation' ? 'animation' : 'waapi';
      h.types.add(type);
      const {props} = kfProps(a);
      for (const p of props) h.props.add(propName(p));
      try { const d = a.effect.getTiming().duration; if (typeof d === 'number') h.maxDur = Math.max(h.maxDur, d); } catch {}
    }
  };
  mm.hoverAfter = (i, x, y) => {
    const h = mm.hover[i], t = mm.targets[i].el;
    const after = styleSnap(t);
    const changed = new Set();
    for (let k = 0; k < Math.min(after.length, h.before.length); k++) for (let p = 0; p < HPROPS.length; p++) if (after[k][p] !== h.before[k][p]) changed.add(propName(HPROPS[p]));
    const tr = t.getBoundingClientRect();
    let revealed = 0, example = null, n = 0;
    for (const el of document.querySelectorAll('body *')) {
      if (n++ > 6000) break;
      if (SKIP.has(el.tagName) || h.base.has(el) || el === t) continue;
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      const near = t.contains(el) || (r.bottom > tr.top - 400 && r.top < tr.bottom + 400 && r.right > tr.left - 400 && r.left < tr.right + 400);
      if (near) { revealed++; if (!example) example = mm.sel(el); }
    }
    const e = document.elementFromPoint(x, y);
    const hit = h.hit || (!!e && (h.scope.has(e) || t.contains(e)));
    // A changed property that the target declares a transition for ran a transition even if the poll missed it.
    const all = h.declared.get('all');
    const declaredHits = [...changed].filter(p => all || h.declared.has(p));
    const types = new Set(h.types);
    if (declaredHits.length && !types.size) types.add('transition');
    const props = new Set([...h.props, ...declaredHits]);
    let maxDur = h.maxDur;
    for (const p of declaredHits) maxDur = Math.max(maxDur, all || h.declared.get(p) || 0);
    return {hit, transition_ran: types.size > 0, types: [...types], props: [...props].slice(0, 8), duration_ms: Math.round(maxDur), changed_props: [...changed].slice(0, 8), reveal: revealed > 0, revealed_count: revealed, reveal_example: example, cursor: cs(t).cursor};
  };
}

// ---------------------------------------------------------------------------------------------------------------
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

function attachScanner(page, found) {
  page.on('response', async resp => {
    try {
      const type = resp.request().resourceType();
      if (!['script', 'stylesheet', 'document'].includes(type)) return;
      const url = resp.url();
      if (type === 'script') for (const [k, sig] of Object.entries(LIBS)) if (!found.libs[k] && sig.url.test(url)) { found.libs[k] = true; found.evidence[k] = 'src'; }
      if (resp.status() >= 400 || resp.status() === 204 || resp.status() === 304) return;
      const len = Number(await resp.headerValue('content-length'));
      if (len > 8e6) return;
      const body = await resp.text();
      if (!body || body.length > 8e6) return;
      found.scanned++;
      if (type === 'script' || type === 'document') for (const [k, sig] of Object.entries(LIBS)) if (!found.libs[k] && sig.body.test(body)) { found.libs[k] = true; found.evidence[k] = 'body'; }
      if (type === 'stylesheet' || type === 'document') for (const [k, re] of Object.entries(CSS_BODY)) if (!found.css[k] && re.test(body)) found.css[k] = true;
    } catch { /* body unavailable (cache, navigation, redirect) */ }
  });
}

async function settle(page, note, idleTimeout = IDLE_TIMEOUT) {
  const idle = await page.waitForLoadState('networkidle', {timeout: idleTimeout}).then(() => true).catch(() => false);
  if (!idle) note('networkidle_timeout');
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(SETTLE_MS);
  return idle;
}

async function phase(record, name, fn) {
  if (record._aborted) return null;
  const t = Date.now();
  try { return await fn(); }
  catch (e) { if (!record._aborted) record.phase_errors[name] = String(e.message || e).split('\n')[0].slice(0, 160); return null; }
  finally { record.phase_ms[name] = Date.now() - t; }
}

const starvedProbe = f => f.starved && f.webgl_requested;
async function frameCheck(page, windowMs) {
  const f = await page.evaluate(w => window.__mm.frameProbe(w).then(r => ({...r, webgl_requested: Object.keys(window.__mm.contexts).some(k => /webgl|webgpu/i.test(k))})), windowMs);
  f.starved = f.median_ms === null || f.median_ms > STARVED_FRAME_MS;
  return f;
}

// Returns 'restart' when software WebGL starves the main thread and the site should be measured again with WebGL
// context creation blocked (once). Everything else lands in `record`.
async function measureSite(site, record, blockWebGL, skipRobots) {
  const notes = new Set();
  const note = n => notes.add(n);
  record.confidence = {level: 'high', notes: []};
  const ctx = await browser.newContext({viewport: VIEWPORT, proxy: isLocal(site.url) ? undefined : proxy});
  record._contexts.push(ctx);
  if (!skipRobots && await robotsBlocked(ctx, site.url)) { record.error = 'robots.txt disallows all agents'; return; }
  const found = {libs: Object.fromEntries(Object.keys(LIBS).map(k => [k, false])), evidence: {}, css: {}, scanned: 0};
  const tNav = Date.now();
  await ctx.addInitScript(probe, {blockWebGL});
  const page = await ctx.newPage();
  page.on('dialog', d => d.dismiss().catch(() => {}));
  attachScanner(page, found);
  const resp = await page.goto(site.url, {waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT});
  if (resp && resp.status() >= 400) { record.error = `HTTP ${resp.status()}`; return; }
  record.final_url = page.url();
  const idle = await settle(page, note);
  const probeOk = await page.evaluate(() => !!window.__mm).catch(() => false);
  if (!probeOk) throw new Error('probe did not install');
  const frame = await frameCheck(page, 1500);
  frame.webgl_blocked = blockWebGL;
  if (!blockWebGL && starvedProbe(frame)) return 'restart';
  if (blockWebGL) note('webgl_blocked');
  if (frame.starved && frame.median_ms !== null && frame.median_ms > SEVERE_FRAME_MS) note('main_thread_starved');
  record.frame = frame;
  record.phase_ms.navigate = Date.now() - tNav;
  const starved = frame.starved;

  // ---- load --------------------------------------------------------------------------------------------------
  let loadText = null;
  await phase(record, 'load', async () => {
    const {anim, text, media, style, nav} = await page.evaluate(() => window.__mm.loadReport());
    loadText = text;
    record.load = {networkidle: idle, ...nav, animations: anim, text: {...text, first_screen_text_hidden_initially: text.initially_hidden > 0, entrance_on_load: text.revealed > 0, becomes_visible_within_2s: text.revealed > 0 && text.visible_within_2s >= Math.ceil(text.revealed * 0.8)}};
    record.media = media;
    record.styles = style;
    if (media.video.present && media.video.unplayable_count > 0) note('media_unplayable');
    if (media.video.present && !media.h264_supported && media.video.hero && media.video.hero.source_kind === 'mp4') note('no_h264');
    if (!text.h1.present) note('h1_missing');
    if (style.inaccessible_sheets > 0 && !found.css.reduced_motion) note('css_cross_origin');
  });
  // ---- counters: numbers that changed during load, then over 2 s in the first screen, then in the second -------
  await phase(record, 'counters', async () => {
    let result = {found: false, selector: null, kind: null, where: null, numbers_tracked: null};
    if (loadText && loadText.counter_during_load) result = {found: true, selector: loadText.counter_during_load, kind: 'settles', where: 'load', numbers_tracked: null};
    else {
      const c1 = await page.evaluate(() => window.__mm.counterProbe(0));
      result.numbers_tracked = c1.tracked;
      if (c1.found) result = {found: true, selector: c1.selector, kind: c1.kind, where: 'first_screen', numbers_tracked: c1.tracked};
      else if (!starved) {
        await page.evaluate(() => window.__mm.setupScroller());
        const c2 = await page.evaluate(() => window.__mm.counterProbe(innerHeight));
        if (c2.found) result = {found: true, selector: c2.selector, kind: c2.kind, where: 'second_screen', numbers_tracked: c1.tracked};
        await page.evaluate(() => window.__mm.scrollTo(0));
      }
    }
    record.counters = result;
  });

  // WebGL that starts after settle shows up here; restart once with it blocked rather than measure at 0.3 fps.
  if (!blockWebGL) { const late = await phase(record, 'frame_late', () => frameCheck(page, 1000)); if (late) { record.frame.late_median_ms = late.median_ms; if (starvedProbe(late)) return 'restart'; } }

  // ---- scroll --------------------------------------------------------------------------------------------------
  await phase(record, 'scroll', async () => {
    const sc = await page.evaluate(() => window.__mm.setupScroller());
    if (sc.kind === 'blocked') note('scroll_blocked');
    if (sc.max_scroll_px <= 0) note('page_short');
    const canScroll = sc.max_scroll_px > 0 && sc.kind !== 'blocked' && sc.kind !== 'none';
    const run = canScroll ? await page.evaluate(max => window.__mm.runScroll(max), sc.max_scroll_px)
                          : {steps: [], videoSamples: [], linked: null, pin: {pinned_scene: false, selector: null, position: null, pinned_steps: 0, content_changes: 0, large_pinned_element: false}, snap: await page.evaluate(() => window.__mm.snapReport()), animAfter: null};
    const {steps, videoSamples, linked, pin, snap, animAfter} = run;
    // scrubbed video: paused in most samples yet currentTime moved with the steps
    let scrubbed = false, scrubSel = null;
    const nV = Math.max(0, ...videoSamples.map(v => v.length));
    for (let k = 0; k < nV; k++) {
      const col = videoSamples.map(v => v[k]).filter(Boolean);
      if (col.length < 4) continue;
      const times = col.map(c => c.ct), pausedShare = col.filter(c => c.paused).length / col.length;
      const distinct = new Set(times.map(t => Math.round(t * 10))).size;
      if (pausedShare >= 0.75 && distinct >= 3) { scrubbed = true; scrubSel = k; break; }
    }
    const revealsTotal = steps.reduce((a, s) => a + s.revealed, 0);
    const linkedCss = (record.load && record.load.animations.scroll_timeline > 0) || (record.styles && record.styles.animation_timeline_css) || !!found.css.animation_timeline;
    const bgFixed = !!(record.styles && record.styles.bg_attachment_fixed_css) || !!found.css.bg_attachment_fixed;
    record.scroll = {
      scroller: sc.kind, page_height_px: sc.page_height_px, max_scroll_px: sc.max_scroll_px, steps,
      reveals_total: revealsTotal, entrance_reveals: revealsTotal >= 3, reveal_example: (steps.find(s => s.example) || {}).example || null,
      ...pin,
      scroll_linked: !!linkedCss || (linked ? linked.linked > 0 : false), scroll_linked_css_timeline: !!linkedCss, scroll_linked_elements: linked ? linked.linked : 0, counter_scroll_elements: linked ? linked.counter_scroll : 0, horizontal_linked_elements: linked ? linked.horizontal : 0, opacity_linked_elements: linked ? linked.opacity_linked : 0, scroll_linked_example: linked ? linked.example : null,
      parallax: (linked ? linked.parallax > 0 : false) || bgFixed, parallax_elements: linked ? linked.parallax : 0, parallax_example: linked ? linked.parallax_example : null, background_attachment_fixed: bgFixed,
      scroll_snap: snap.scroll_snap || !!(record.styles && record.styles.scroll_snap_css) || !!found.css.scroll_snap, scroll_snap_root: snap.scroll_snap_root,
      scrubbed_video: scrubbed, scrubbed_video_index: scrubSel, animations_after_scroll: animAfter,
    };
    await page.waitForTimeout(300);
  });

  // ---- hover ---------------------------------------------------------------------------------------------------
  await phase(record, 'hover', async () => {
    await page.mouse.move(2, 450);
    const targets = (await page.evaluate(() => window.__mm.hoverTargets())).slice(0, starved ? 2 : 4);
    const results = [];
    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      if (t.x < 0 || t.y < 0 || t.x > VIEWPORT.width || t.y > VIEWPORT.height) continue;
      const t0 = Date.now();
      const decl = await page.evaluate(i => window.__mm.hoverBefore(i, 250), i);
      const t1 = Date.now();
      await page.mouse.move(t.x, t.y);
      const t2 = Date.now();
      const r = await page.evaluate(([i, x, y]) => window.__mm.hoverProbe(i, x, y), [i, t.x, t.y]);
      const t3 = Date.now();
      results.push({role: t.role, selector: t.selector, ...decl, ...r});
      await page.mouse.move(2, 450);
      if (process.env.MOTION_DEBUG) console.error(`hover ${site.id} ${t.role}: before ${t1 - t0} move ${t2 - t1} probe ${t3 - t2} away ${Date.now() - t3}`);
    }
    const primary = results.find(r => r.role === 'primary') || null;
    record.hover = {primary, nav: results.filter(r => r.role === 'nav'), hover_reveal: results.some(r => r.reveal), any_transition: results.some(r => r.transition_ran), targets_found: results.length};
  });

  // ---- libraries -----------------------------------------------------------------------------------------------
  await phase(record, 'libraries', async () => {
    const lib = await page.evaluate(() => window.__mm.libReport());
    for (const [k, sig] of Object.entries(LIBS)) {
      if (lib.globals[k]) { found.libs[k] = true; found.evidence[k] = found.evidence[k] || 'global'; }
      if (lib.dom[k]) { found.libs[k] = true; found.evidence[k] = found.evidence[k] || 'dom'; }
      if (!found.libs[k] && (sig.url.test(lib.srcs) || sig.body.test(lib.inline))) { found.libs[k] = true; found.evidence[k] = 'inline'; }
    }
    const markers = record.media && record.media.markers;
    for (const k of ['lottie', 'rive', 'spline']) if (markers && markers[k]) { found.libs[k] = true; found.evidence[k] = found.evidence[k] || 'dom'; }
    record.libraries = found.libs;
    record.library_evidence = found.evidence;
    record.builder = lib.builder;
    record.responses_scanned = found.scanned;
    if (record.styles) {
      if (found.css.reduced_motion && record.styles.reduced_motion_rule !== 'observed') { record.styles.reduced_motion_rule = 'observed'; record.styles.reduced_motion_rule_source = 'stylesheet_body'; }
      else if (record.styles.reduced_motion_rule === 'observed') record.styles.reduced_motion_rule_source = 'cssom';
      else record.styles.reduced_motion_rule_source = null;
    }
  });
  await page.close().catch(() => {});

  // ---- reduced motion reload ----------------------------------------------------------------------------------
  await phase(record, 'reduced_motion', async () => {
    const ctx2 = await browser.newContext({viewport: VIEWPORT, proxy: isLocal(site.url) ? undefined : proxy, reducedMotion: 'reduce'});
    record._contexts.push(ctx2);
    const found2 = {libs: {}, evidence: {}, css: {}, scanned: 0};
    await ctx2.addInitScript(probe, {blockWebGL});
    const p2 = await ctx2.newPage();
    p2.on('dialog', d => d.dismiss().catch(() => {}));
    attachScanner(p2, found2);
    const r2 = await p2.goto(site.url, {waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT});
    if (r2 && r2.status() >= 400) { record.reduced_motion = {error: `HTTP ${r2.status()}`}; return; }
    const idle2 = await settle(p2, n => note(n === 'networkidle_timeout' ? 'networkidle_timeout_reduced' : n), IDLE_TIMEOUT_REDUCED);
    const {anim, text, media, style} = await p2.evaluate(() => window.__mm.loadReport());
    const rule = style.reduced_motion_rule === 'observed' || found2.css.reduced_motion || (record.styles && record.styles.reduced_motion_rule === 'observed') ? 'observed' : style.reduced_motion_rule;
    const normalHidden = record.load ? record.load.text.hidden_at_settle : 0;
    record.reduced_motion = {
      matches: style.matches_reduce, networkidle: idle2, rule,
      animations_total: anim.total, animations_running: anim.running, infinite_running: anim.infinite_running, marquee_running: anim.infinite_items.filter(i => i.running && /marquee/.test(i.kind)).length,
      infinite_kinds: anim.infinite_kinds, text_hidden_count: text.hidden_at_settle, text_hidden_count_normal: normalHidden, h1_hidden: text.h1.hidden_at_settle,
      // "still hidden" is judged against the normal load: menus that sit at opacity 0 in both loads do not count.
      anything_hidden: text.hidden_at_settle > normalHidden || (text.h1.hidden_at_settle === true && record.load && record.load.text.h1.hidden_at_settle !== true),
      video_playing: media.video.playing_count > 0, video_autoplay_count: media.video.autoplay_count,
      compliant: rule === 'observed' && anim.infinite_running === 0 && !(text.hidden_at_settle > normalHidden || (text.h1.hidden_at_settle === true && record.load && record.load.text.h1.hidden_at_settle !== true)) && media.video.playing_count === 0,
    };
    await p2.close().catch(() => {});
  });
  record.confidence.notes = [...notes];
}

// ---------------------------------------------------------------------------------------------------------------
const browser = await chromium.launch();
const queue = sites.slice();
let done = 0, failed = 0;

async function runSite(site) {
  const record = {id: site.id, url: site.url, measured_on: today, viewport: VIEWPORT, final_url: null, load: null, media: null, styles: null, counters: null, scroll: null, hover: null, libraries: null, library_evidence: null, builder: null, reduced_motion: null, frame: null, confidence: null, phase_errors: {}, phase_ms: {}, error: null, _contexts: []};
  const started = Date.now();
  const work = (async () => {
    let outcome = await measureSite(site, record, false, false);
    if (outcome === 'restart') {
      for (const c of record._contexts.splice(0)) await c.close().catch(() => {});
      for (const k of ['final_url', 'load', 'media', 'styles', 'counters', 'scroll', 'hover', 'libraries', 'library_evidence', 'builder', 'reduced_motion', 'frame', 'confidence']) record[k] = null;
      record.phase_errors = {}; record.phase_ms = {};
      outcome = await measureSite(site, record, true, true);
    }
  })();
  work.catch(() => {});
  let timer;
  try {
    await Promise.race([work, new Promise((_, rej) => { timer = setTimeout(() => rej(new Error(`site timeout after ${SITE_TIMEOUT / 1000} s`)), SITE_TIMEOUT); })]);
  } catch (e) { record.error = String(e.message || e).split('\n')[0].slice(0, 200); }
  clearTimeout(timer);
  record._aborted = true;
  for (const c of record._contexts) await c.close().catch(() => {});
  delete record._contexts; delete record._aborted;
  record.duration_ms = Date.now() - started;
  if (record.confidence) {
    const n = record.confidence.notes || [];
    const errs = Object.keys(record.phase_errors).length;
    record.confidence.level = record.error || errs > 1 || n.includes('scroll_blocked') || n.includes('main_thread_starved') ? 'low' : (errs === 1 || n.some(x => ['networkidle_timeout', 'media_unplayable', 'no_h264', 'page_short', 'css_cross_origin', 'webgl_blocked'].includes(x))) ? 'medium' : 'high';
  }
  appendFileSync(outPath, JSON.stringify(record) + '\n');
  done++; if (record.error) failed++;
  console.log(`${record.error ? 'ERR ' : 'ok  '} ${String(done).padStart(3)} ${site.id} ${Math.round(record.duration_ms / 1000)}s ${record.error || ''}${Object.keys(record.phase_errors).length ? ' phase_errors=' + Object.keys(record.phase_errors).join(',') : ''}`);
}

async function worker() { while (queue.length) { const site = queue.shift(); try { await runSite(site); } catch (e) { console.error(`fatal ${site.id}: ${e.message}`); } } }
await Promise.all(Array.from({length: CONCURRENCY}, worker));
await browser.close();
console.log(`${done} measured, ${failed} failed`);
