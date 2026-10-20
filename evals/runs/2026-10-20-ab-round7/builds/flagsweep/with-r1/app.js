/* Flagsweep landing page: the sample report (one data source for the static fallback and the live artifact). */
(function (root) {
  'use strict';

  // Sample repo written for this page. History is a list of [daysAgo, percentServed]; the last entry is the current state.
  // 'seg' means "on for one segment only" (targeting rules), which is never fully on or off.
  var FLAGS = [
    {key: 'new-checkout-flow', hist: [[999, 0], [100, 5], [93, 10], [86, 25], [80, 50], [74, 100]],
      refs: [
        ['src/checkout/CartPage.tsx', 42, "if (ldClient.variation('new-checkout-flow', user, false)) {"],
        ['src/checkout/CartPage.tsx', 118, "const payLabel = ldClient.variation('new-checkout-flow', user, false);"],
        ['src/api/orders.ts', 31, "if (await ld.variation('new-checkout-flow', ctx, false)) {"]
      ]},
    {key: 'legacy-search-fallback', hist: [[999, 100], [121, 0]],
      refs: [
        ['src/search/SearchBox.tsx', 27, "const old = ldClient.variation('legacy-search-fallback', user, false);"],
        ['src/search/SearchBox.tsx', 64, "{old && <LegacyResults query={query} />}"],
        ['src/search/query.ts', 12, "if (ld.variation('legacy-search-fallback', ctx, false)) {"],
        ['src/server/routes/search.ts', 58, "const old = await ld.variation('legacy-search-fallback', ctx, false);"]
      ]},
    {key: 'dark-mode-beta', hist: [[999, 0], [62, 10], [55, 50], [41, 100]],
      refs: [
        ['src/theme/ThemeProvider.tsx', 19, "const dark = ldClient.variation('dark-mode-beta', user, false);"],
        ['src/settings/Appearance.tsx', 33, "{ldClient.variation('dark-mode-beta', user, false) && <Toggle />}"]
      ]},
    {key: 'holiday-banner-2025', hist: [[999, 0], [330, 100], [290, 0]],
      refs: [
        ['src/layout/Header.tsx', 76, "{ldClient.variation('holiday-banner-2025', user, false) && <Banner />}"]
      ]},
    {key: 'pricing-page-v2', hist: [[999, 0], [33, 10], [26, 50], [19, 100]],
      refs: [
        ['src/pricing/PricingPage.tsx', 14, "if (ldClient.variation('pricing-page-v2', user, false)) {"],
        ['src/pricing/PlanCard.tsx', 9, "const v2 = ldClient.variation('pricing-page-v2', user, false);"]
      ]},
    {key: 'eu-checkout-copy', hist: [[999, 0], [9, 100]],
      refs: [
        ['src/checkout/Shipping.tsx', 51, "const eu = ldClient.variation('eu-checkout-copy', user, false);"]
      ]},
    {key: 'recs-model-b', hist: [[999, 0], [20, 10], [6, 50]], refs: []},
    {key: 'search-ranking-v3', hist: [[999, 0], [3, 10]], refs: []},
    {key: 'free-shipping-banner', hist: [[999, 0], [45, 'seg']], refs: []}
  ];

  var STRIP_DAYS = 112; // 16 weeks
  var MIN = 1, MAX = 365, LADDER = [1, 7, 14, 30, 60, 90, 180, 365];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function current(f) { return f.hist[f.hist.length - 1]; }
  function unchanged(f) { return current(f)[0]; }
  function fully(f) { var p = current(f)[1]; return p === 0 || p === 100; }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

  function stateText(f) {
    var p = current(f)[1];
    if (p === 100) return 'ON · 100%';
    if (p === 0) return 'OFF · 0%';
    if (p === 'seg') return 'ON for one segment';
    return p + '% rollout';
  }

  // A 16-week history strip, drawn at a fixed pixel size so nothing in it scales.
  function strip(f, cutoff, w, h) {
    w = w || 168; h = h || 28;
    var pad = 3, ih = h - pad * 2;
    function x(d) { return Math.max(0, Math.min(w, (STRIP_DAYS - d) / STRIP_DAYS * w)); }
    function y(p) { return pad + ih - (p === 'seg' ? 0.5 : p / 100) * ih; }
    var pts = [], hist = f.hist, i;
    for (i = 0; i < hist.length; i++) {
      var startD = Math.min(hist[i][0], STRIP_DAYS), endD = i + 1 < hist.length ? Math.min(hist[i + 1][0], STRIP_DAYS) : 0;
      if (startD <= endD && i + 1 < hist.length) continue;
      pts.push([x(startD), y(hist[i][1])], [x(endD), y(hist[i][1])]);
    }
    var line = pts.map(function (p, j) { return (j ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
    var area = line + ' L' + w + ' ' + (h - pad) + ' L0 ' + (h - pad) + ' Z';
    var still = x(Math.min(unchanged(f), STRIP_DAYS));
    var seg = current(f)[1] === 'seg';
    var out = '<svg class="strip" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true" focusable="false">';
    out += '<rect class="strip-bg" x="0" y="0" width="' + w + '" height="' + h + '"/>';
    out += '<rect class="strip-still" x="' + still.toFixed(1) + '" y="0" width="' + (w - still).toFixed(1) + '" height="' + h + '"/>';
    out += '<path class="strip-area' + (seg ? ' is-seg' : '') + '" d="' + area + '"/>';
    out += '<path class="strip-line" d="' + line + '"/>';
    if (cutoff != null && cutoff <= STRIP_DAYS) {
      var cx = x(cutoff).toFixed(1);
      out += '<line class="strip-cut" x1="' + cx + '" y1="0" x2="' + cx + '" y2="' + h + '"/>';
    }
    return out + '</svg>';
  }

  function scan(n) {
    var listed = [], skipped = [];
    FLAGS.forEach(function (f) {
      if (fully(f) && unchanged(f) >= n) listed.push(f);
      else skipped.push(f);
    });
    var lines = 0, files = {};
    listed.forEach(function (f) { f.refs.forEach(function (r) { lines++; files[r[0]] = 1; }); });
    return {listed: listed, skipped: skipped, lines: lines, files: Object.keys(files).length};
  }

  function summary(n, s) {
    if (!s.listed.length) return 'No flags to remove at ' + plural(n, 'day', 'days') + ': nothing in this sample has been fully on or off that long.';
    return 'Remove ' + plural(s.listed.length, 'flag', 'flags') + ': ' + plural(s.lines, 'line', 'lines') + ' in ' + plural(s.files, 'file', 'files');
  }

  function reason(f, n) {
    var p = current(f)[1];
    if (p === 'seg') return 'on for one segment only, not everyone';
    if (!fully(f)) return 'still rolling out at ' + p + '%';
    return (p === 100 ? 'fully on' : 'fully off') + ', but changed ' + unchanged(f) + ' days ago (under ' + n + ')';
  }

  function renderRows(n, s) {
    if (!s.listed.length) {
      return '<li class="row row-empty"><span class="tag tag-none">NONE</span><span>Try a shorter cut-off: the longest-unchanged flag in this sample has sat for 290 days.</span></li>';
    }
    return s.listed.map(function (f) {
      var refs = f.refs.map(function (r) {
        return '<li class="ref"><span class="ref-gutter" aria-hidden="true">−</span><span class="ref-path">' + esc(r[0]) + '<span class="ref-line">:' + r[1] + '</span></span><code class="ref-code">' + esc(r[2]) + '</code></li>';
      }).join('');
      return '<li class="row">' +
        '<div class="row-head"><span class="tag">REMOVE</span><span class="row-key">' + esc(f.key) + '</span>' +
        '<span class="row-facts"><span class="row-state">' + stateText(f) + '</span><span class="row-sep" aria-hidden="true"> · </span><span class="row-age">unchanged ' + unchanged(f) + ' days</span></span>' +
        strip(f, n) + '</div>' +
        '<ul class="refs" aria-label="' + esc(f.key) + ': ' + plural(f.refs.length, 'line', 'lines') + ' to change">' + refs + '</ul></li>';
    }).join('');
  }

  function renderSkipped(n, s) {
    return s.skipped.map(function (f) {
      return '<li><span class="skip-key">' + esc(f.key) + '</span><span class="skip-why">' + esc(reason(f, n)) + '</span></li>';
    }).join('');
  }

  root.FS = {FLAGS: FLAGS, scan: scan, summary: summary, renderRows: renderRows, renderSkipped: renderSkipped, strip: strip, MIN: MIN, MAX: MAX, LADDER: LADDER};

  if (typeof document === 'undefined') return;

  // ---------- Page wiring ----------
  var DEFAULT = 30, last = DEFAULT;
  var input = document.getElementById('cutoff');
  var rows = document.getElementById('rows');
  var skipped = document.getElementById('skipped');
  var skippedCount = document.getElementById('skipped-count');
  var status = document.getElementById('scan-status');
  var note = document.getElementById('scan-note');
  var echo = document.getElementById('cmd-echo');

  function apply(n, msg) {
    last = n;
    var s = scan(n);
    rows.innerHTML = renderRows(n, s);
    skipped.innerHTML = renderSkipped(n, s);
    skippedCount.textContent = s.skipped.length;
    status.textContent = summary(n, s);
    status.classList.toggle('is-empty', !s.listed.length);
    echo.textContent = n + 'd';
    note.textContent = msg || '';
    note.hidden = !msg;
  }

  function fromInput() {
    var raw = input.value.trim();
    if (!/^-?\d+$/.test(raw)) {
      input.value = last;
      apply(last, raw === '' ? 'Type a number of days from 1 to 365. Still showing ' + plural(last, 'day', 'days') + '.' : '“' + raw.slice(0, 24) + '” isn’t a whole number of days. Still showing ' + plural(last, 'day', 'days') + '.');
      return;
    }
    var n = parseInt(raw, 10);
    if (n < MIN || n > MAX) {
      var c = n < MIN ? MIN : MAX;
      input.value = c;
      apply(c, (n < MIN ? 'The shortest cut-off is 1 day' : 'This sample holds a year of history, so the longest cut-off is 365 days') + '. Showing ' + c + '.');
      return;
    }
    input.value = n;
    apply(n);
  }

  function step(dir) {
    var n = last, next = n, i;
    if (dir > 0) { for (i = 0; i < LADDER.length; i++) if (LADDER[i] > n) { next = LADDER[i]; break; } }
    else { for (i = LADDER.length - 1; i >= 0; i--) if (LADDER[i] < n) { next = LADDER[i]; break; } }
    if (next === n) {
      apply(n, dir > 0 ? '365 days is the longest cut-off in this sample.' : '1 day is the shortest cut-off.');
    } else {
      input.value = next;
      apply(next);
    }
  }

  if (input) {
    document.getElementById('cut-down').addEventListener('click', function () { step(-1); });
    document.getElementById('cut-up').addEventListener('click', function () { step(1); });
    document.getElementById('cut-reset').addEventListener('click', function () { input.value = DEFAULT; apply(DEFAULT); });
    input.addEventListener('change', fromInput);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); fromInput(); } });
    document.getElementById('cutoff-form').addEventListener('submit', function (e) { e.preventDefault(); fromInput(); });
    apply(DEFAULT);
  }

  // ---------- Copy the install command ----------
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(legacy);
    }
    return legacy();
    function legacy() {
      return new Promise(function (resolve, reject) {
        var t = document.createElement('textarea');
        t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
        document.body.appendChild(t); t.select();
        var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(t);
        ok ? resolve() : reject();
      });
    }
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (btn) {
    var out = document.getElementById(btn.getAttribute('aria-describedby').split(' ')[0]);
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      copyText(text).then(function () {
        out.textContent = 'Copied “' + text + '”. Paste it into your terminal.';
      }, function () {
        var code = document.getElementById(btn.getAttribute('data-select'));
        if (code) { var r = document.createRange(); r.selectNodeContents(code); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
        out.textContent = 'Your browser blocked the clipboard. The command is selected: press Ctrl+C (⌘C on a Mac).';
      });
    });
  });

  // ---------- Source tabs in the install section ----------
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') j = 0;
      if (e.key === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); select(tabs[j], true); }
    });
  });
  if (tabs.length) select(tabs[0]);

  // ---------- Menu ----------
  var mb = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu');
  if (mb && menu) {
    var set = function (open) { mb.setAttribute('aria-expanded', open); menu.hidden = !open; };
    set(false);
    mb.addEventListener('click', function () { set(mb.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mb.getAttribute('aria-expanded') === 'true') { set(false); mb.focus(); } });
    document.addEventListener('click', function (e) { if (!menu.contains(e.target) && !mb.contains(e.target)) set(false); });
    menu.addEventListener('focusout', function (e) { if (e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget !== mb) set(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a') && window.matchMedia('(max-width: 759px)').matches) set(false); });
  }
})(typeof window !== 'undefined' ? window : globalThis);
