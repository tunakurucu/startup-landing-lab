/* Tidewise landing page: sample mornings, window maths and drawing.
   One classic script so the page opens from disk. The same functions run in Node
   (src/build.mjs) to write the no-JavaScript still into index.html. */
(function (root) {
  'use strict';

  // ---- Sample data (written for this page, not a forecast) -----------------
  var START = 5, END = 13;                 // chart runs 05:00 to 13:00
  var FIRST_LIGHT = 6 + 58 / 60;           // 06:58
  var SUNRISE = 7 + 31 / 60;               // 07:31
  var RULES = { tide: 2.2, swell: 0.7, onshore: 14, offshore: 18 };
  var PERIOD = 12.42;                      // hours between high waters

  var MORNINGS = {
    calm: {
      key: 'calm', tab: 'Calm', title: 'Calm morning',
      hw: 9 + 10 / 60, mean: 2.5, amp: 2.0, temp: 13.6,
      wind: [[5, 4, 'W', 'off'], [8, 6, 'W', 'off'], [10, 7, 'SW', 'off'], [13, 8, 'SW', 'off']],
      swell: [[5, 0.2], [13, 0.3]],
      earlierEnd: null
    },
    onshore: {
      key: 'onshore', tab: 'Wind turns onshore', title: 'Wind turns onshore',
      hw: 8 + 40 / 60, mean: 2.5, amp: 2.0, temp: 13.4,
      wind: [[5, 8, 'W', 'off'], [6.5, 7, 'NW', 'off'], [7, 9, 'N', 'cross'], [7.5, 12, 'NE', 'on'], [7.75, 15, 'NE', 'on'],
             [8, 17, 'NE', 'on'], [9, 19, 'NE', 'on'], [11, 17, 'NE', 'on'], [13, 14, 'NE', 'on']],
      swell: [[5, 0.4], [9, 0.5], [13, 0.6]],
      earlierEnd: 9.5
    },
    swell: {
      key: 'swell', tab: 'Big swell', title: 'Big swell',
      hw: 10.5, mean: 2.5, amp: 2.0, temp: 13.1,
      wind: [[5, 16, 'SE', 'on'], [9, 20, 'E', 'on'], [13, 22, 'E', 'on']],
      swell: [[5, 1.1], [9, 1.3], [13, 1.4]],
      earlierEnd: null
    }
  };
  var ORDER = ['calm', 'onshore', 'swell'];
  var DEFAULT = { morning: 'onshore', t: 6.5 };

  // ---- Maths ---------------------------------------------------------------
  function tide(m, t) { return m.mean + m.amp * Math.cos(2 * Math.PI * (t - m.hw) / PERIOD); }
  function rising(m, t) { return Math.sin(2 * Math.PI * (t - m.hw) / PERIOD) < 0; }
  function lerp(knots, t) {
    if (t <= knots[0][0]) return knots[0][1];
    for (var i = 1; i < knots.length; i++) {
      if (t <= knots[i][0]) {
        var a = knots[i - 1], b = knots[i], f = (t - a[0]) / (b[0] - a[0]);
        return a[1] + (b[1] - a[1]) * f;
      }
    }
    return knots[knots.length - 1][1];
  }
  function wind(m, t) {
    var k = m.wind, at = k[0];
    for (var i = 0; i < k.length; i++) if (k[i][0] <= t + 1e-9) at = k[i];
    return { mph: Math.round(lerp(k, t)), dir: at[2], side: at[3] };
  }
  function swell(m, t) { return Math.round(lerp(m.swell, t) * 10) / 10; }
  function fails(m, t) {
    var out = [], h = tide(m, t), w = wind(m, t), s = swell(m, t);
    if (h < RULES.tide) out.push('Tide ' + h.toFixed(1) + ' m is under the ' + RULES.tide + ' m sample limit.');
    if (s > RULES.swell) out.push('Swell ' + s.toFixed(1) + ' m is over the ' + RULES.swell + ' m sample limit.');
    if (w.side !== 'off' && w.mph > RULES.onshore) out.push('Wind ' + w.mph + ' mph ' + (w.side === 'on' ? 'onshore' : 'cross-shore') + ' is over the ' + RULES.onshore + ' mph sample limit.');
    if (w.side === 'off' && w.mph > RULES.offshore) out.push('Wind ' + w.mph + ' mph offshore is over the ' + RULES.offshore + ' mph sample limit.');
    return out;
  }
  function lane(m, test) {               // minute-by-minute runs where test(t) holds
    var runs = [], open = null;
    for (var i = 0; i <= (END - START) * 60; i++) {
      var t = START + i / 60, ok = test(t);
      if (ok && open === null) open = t;
      if ((!ok || i === (END - START) * 60) && open !== null) { runs.push([open, ok ? t : t - 1 / 60]); open = null; }
    }
    return runs;
  }
  function lanes(m) {
    return {
      tide: lane(m, function (t) { return tide(m, t) >= RULES.tide; }),
      swell: lane(m, function (t) { return swell(m, t) <= RULES.swell; }),
      wind: lane(m, function (t) { var w = wind(m, t); return w.side === 'off' ? w.mph <= RULES.offshore : w.mph <= RULES.onshore; }),
      windows: lane(m, function (t) { return fails(m, t).length === 0; })
    };
  }
  function windows(m) { return lanes(m).windows; }

  // ---- Formatting ----------------------------------------------------------
  function hhmm(t) {
    var mins = Math.round(t * 60), h = Math.floor(mins / 60), mm = mins % 60;
    return (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm;
  }
  function dur(h) {
    var mins = Math.round(h * 60), hh = Math.floor(mins / 60), mm = mins % 60;
    return (hh ? hh + ' h ' : '') + (mm || !hh ? mm + ' min' : '').trim();
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function pct(t) { return ((t - START) / (END - START) * 100).toFixed(3) + '%'; }
  function edge(t) { return t <= START + 1 / 60 ? 'from before 05:00' : hhmm(t); }
  function span(w) { return (w[0] <= START + 1 / 60 ? 'before 05:00' : hhmm(w[0])) + '–' + (w[1] >= END - 1 / 60 ? 'after 13:00' : hhmm(w[1])); }

  // ---- Readout (HTML) ------------------------------------------------------
  function verdict(m, t) {
    var ws = windows(m), cur = null, next = null, last = null, i;
    for (i = 0; i < ws.length; i++) {
      if (t >= ws[i][0] - 1e-6 && t <= ws[i][1] + 1e-6) cur = ws[i];
      else if (ws[i][0] > t && !next) next = ws[i];
      else if (ws[i][1] < t) last = ws[i];
    }
    var early = m.earlierEnd && ws.length && Math.abs(ws[0][1] - m.earlierEnd) > 0.05 ? ws[0] : null;
    var head, note = '', state;
    if (cur) {
      state = 'in';
      head = 'In a window, ' + span(cur);
      note = cur[1] >= END - 1 / 60 ? 'Open past 13:00.' : cur[1] - t < 1 / 60 ? 'Closes now.' : 'Closes in ' + dur(cur[1] - t) + '.';
      if (early && cur === early) note += ' Closes early: last night it ran to ' + hhmm(m.earlierEnd) + '.';
    } else if (next) {
      state = 'out';
      head = 'Outside the windows';
      note = 'Next window opens at ' + hhmm(next[0]) + ', in ' + dur(next[0] - t) + '.';
    } else if (last) {
      state = 'out';
      head = 'Outside the windows';
      note = 'The last one closed at ' + hhmm(last[1]) + (early && last === early ? ', early: last night it ran to ' + hhmm(m.earlierEnd) + '.' : '.');
    } else {
      state = 'none';
      head = 'No window between 05:00 and 13:00';
      note = 'Nothing lines up this morning.';
    }
    return { state: state, head: head, note: note, why: cur ? [] : fails(m, t) };
  }

  function readout(m, t) {
    var v = verdict(m, t), h = tide(m, t), w = wind(m, t), s = swell(m, t);
    var side = w.side === 'off' ? 'offshore' : w.side === 'on' ? 'onshore' : 'cross-shore';
    var why = v.why.length ? '<p class="ro-why">' + v.why.map(esc).join(' ') + '</p>' : '';
    return '' +
      '<p class="ro-time"><span class="ro-clock">' + hhmm(t) + '</span> <span class="ro-state ro-' + v.state + '">' + esc(v.head) + '</span></p>' +
      '<p class="ro-note' + (/early/.test(v.note) ? ' ro-early' : '') + '">' + esc(v.note) + '</p>' + why +
      '<dl class="ro-grid">' +
        '<div><dt>Tide</dt><dd>' + h.toFixed(1) + ' m, ' + (rising(m, t) ? 'rising' : 'falling') + '</dd></div>' +
        '<div><dt>Wind</dt><dd>' + w.mph + ' mph ' + w.dir + ', ' + side + '</dd></div>' +
        '<div><dt>Swell</dt><dd>' + s.toFixed(1) + ' m</dd></div>' +
        '<div><dt>Water</dt><dd>' + m.temp.toFixed(1) + '°C</dd></div>' +
      '</dl>';
  }

  // ---- The portrait (SVG, stretched; labels are HTML on top) ---------------
  var VW = 960, VH = 300, TOP = 58, BOT = 300;   // plot from y=58 to the bottom edge
  var HMAX = 5;
  function X(t) { return (t - START) / (END - START) * VW; }
  function Y(h) { return BOT - (h / HMAX) * (BOT - TOP); }
  function chop(m, t) {                    // how lumpy the surface is drawn: swell plus onshore wind
    var w = wind(m, t), s = lerp(m.swell, t);
    var windPart = w.side === 'off' ? 0 : Math.max(0, w.mph - 6) * 0.45;
    return Math.min(12, s * 6 + windPart);
  }
  function surfacePoints(m) {
    var pts = [];
    for (var i = 0; i <= 960; i++) {
      var t = START + (END - START) * i / 960;
      var a = chop(m, t);
      var r = a * (0.7 * Math.sin(i * 0.26) + 0.3 * Math.sin(i * 0.61 + 1.3));
      pts.push([X(t), Y(tide(m, t)) + r]);
    }
    return pts;
  }
  function portrait(m) {
    var ws = windows(m), s = '';
    s += '<rect x="0" y="0" width="' + X(FIRST_LIGHT).toFixed(1) + '" height="' + VH + '" class="sky-night"/>';
    s += '<rect x="' + X(FIRST_LIGHT).toFixed(1) + '" y="0" width="' + (X(SUNRISE) - X(FIRST_LIGHT)).toFixed(1) + '" height="' + VH + '" class="sky-dawn"/>';
    s += '<rect x="' + X(SUNRISE).toFixed(1) + '" y="0" width="' + (VW - X(SUNRISE)).toFixed(1) + '" height="' + VH + '" class="sky-day"/>';
    if (m.earlierEnd && ws.length) {
      s += '<rect x="' + X(ws[0][1]).toFixed(1) + '" y="' + (TOP - 8) + '" width="' + (X(m.earlierEnd) - X(ws[0][1])).toFixed(1) + '" height="' + (VH - TOP + 8) + '" class="ghost"/>';
    }
    ws.forEach(function (w) {
      s += '<rect x="' + X(w[0]).toFixed(1) + '" y="' + (TOP - 8) + '" width="' + (X(w[1]) - X(w[0])).toFixed(1) + '" height="' + (VH - TOP + 8) + '" class="win"/>';
    });
    var pts = surfacePoints(m);
    var line = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('');
    s += '<path d="' + line + 'L' + VW + ' ' + VH + 'L0 ' + VH + 'Z" class="sea"/>';
    s += '<path d="' + line + '" class="surface"/>';
    s += '<line x1="0" x2="' + VW + '" y1="' + Y(RULES.tide).toFixed(1) + '" y2="' + Y(RULES.tide).toFixed(1) + '" class="limit"/>';
    if (m.earlierEnd && ws.length) {
      s += '<line x1="' + X(ws[0][1]).toFixed(1) + '" x2="' + X(ws[0][1]).toFixed(1) + '" y1="' + (TOP - 8) + '" y2="' + VH + '" class="early"/>';
    }
    return s;
  }
  function labels(m) {
    var ws = windows(m), out = '';
    out += '<span class="lb lb-sky lb-minor lb-before" style="left:' + pct(FIRST_LIGHT) + '">First light ' + hhmm(FIRST_LIGHT) + '</span>';
    out += '<span class="lb lb-sky" style="left:' + pct(SUNRISE) + '">Sunrise ' + hhmm(SUNRISE) + '</span>';
    ws.forEach(function (w) {
      out += '<span class="lb lb-win" style="left:' + pct(w[0]) + '">Window ' + span(w) + '</span>';
    });
    if (!ws.length) out += '<span class="lb lb-none" style="left:0%">No window this morning</span>';
    var hwY = (Y(m.mean + m.amp) / VH * 100).toFixed(2);
    if (m.hw > START + 0.4 && m.hw < END - 0.6) {
      out += '<span class="lb lb-hw" style="left:' + pct(m.hw) + ';top:calc(' + hwY + '% + 1.4em)">High water ' + hhmm(m.hw) + ', ' + (m.mean + m.amp).toFixed(1) + ' m</span>';
    }
    if (m.earlierEnd && ws.length) {
      out += '<span class="lb lb-early" style="left:' + pct(ws[0][1]) + '"><b>Closes ' + hhmm(ws[0][1]) + ', not ' + hhmm(m.earlierEnd) + '</b>Wind turns onshore</span>';
    }
    return out;
  }
  function markerHTML(m, t) {
    var y = (Y(tide(m, t)) / VH * 100).toFixed(2);
    return '<span class="you-line" style="left:' + pct(t) + ';height:' + y + '%"></span>' +
           '<span class="you-dot" style="left:' + pct(t) + ';top:' + y + '%"></span>';
  }
  function axis() {
    var out = '';
    for (var h = START; h <= END; h++) out += '<span style="left:' + pct(h) + '">' + (h < 10 ? '0' : '') + h + ':00</span>';
    return out;
  }

  // ---- Lanes (how a window is found) ---------------------------------------
  function bar(runs) {
    return '<svg viewBox="0 0 960 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
      '<rect x="0" y="9" width="960" height="2" class="lane-off"/>' +
      runs.map(function (r) { return '<rect x="' + X(r[0]).toFixed(1) + '" y="2" width="' + Math.max(2, X(r[1]) - X(r[0])).toFixed(1) + '" height="16" rx="2" class="lane-on"/>'; }).join('') +
      '</svg>';
  }
  function runsText(runs) { return runs.length ? runs.map(span).join(', ') : 'not this morning'; }
  function lanesHTML(m) {
    var L = lanes(m);
    var row = function (name, rule, runs, cls) {
      return '<li class="lane ' + (cls || '') + '"><p class="lane-name"><b>' + name + '</b> <span>' + rule + '</span></p>' +
        '<div class="lane-bar">' + bar(runs) + '</div><p class="lane-runs">' + runsText(runs) + '</p></li>';
    };
    return row('Tide', 'over ' + RULES.tide + ' m', L.tide) +
      row('Swell', 'under ' + RULES.swell + ' m', L.swell) +
      row('Wind', 'onshore under ' + RULES.onshore + ' mph, offshore under ' + RULES.offshore, L.wind) +
      row('Window', 'all three at once', L.windows, 'lane-result') +
      '<li class="lane lane-temp"><p class="lane-name"><b>Water</b> <span>shown on every window</span></p><p class="lane-runs">' + m.temp.toFixed(1) + '°C all morning</p></li>';
  }

  function state(key, t) {
    var m = MORNINGS[key];
    return { svg: portrait(m), labels: labels(m), marker: markerHTML(m, t), readout: readout(m, t), lanes: lanesHTML(m), title: m.title };
  }

  var api = { MORNINGS: MORNINGS, ORDER: ORDER, DEFAULT: DEFAULT, START: START, END: END, RULES: RULES,
    state: state, axis: axis, hhmm: hhmm, windows: windows, verdict: verdict, tide: tide, VW: VW, VH: VH };
  root.TW = api;

  // ---- Page wiring (browser only) ------------------------------------------
  if (typeof document === 'undefined') return;
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    var sig = document.querySelector('[data-signature]');
    if (!sig) return;
    var svg = sig.querySelector('.pt-svg'), lab = sig.querySelector('.pt-labels'), mk = sig.querySelector('.pt-marker');
    var out = sig.querySelector('.readout'), range = sig.querySelector('#arrive'), rangeOut = sig.querySelector('#arrive-out');
    var tabs = [].slice.call(sig.querySelectorAll('[data-morning]'));
    var reset = sig.querySelector('[data-reset]');
    var lanesEl = document.querySelector('.lanes'), lanesTitle = document.querySelector('[data-lanes-title]');
    var cur = { morning: DEFAULT.morning, t: DEFAULT.t };

    function drawMorning() {
      var st = state(cur.morning, cur.t);
      svg.innerHTML = st.svg; lab.innerHTML = st.labels;
      if (lanesEl) lanesEl.innerHTML = st.lanes;
      if (lanesTitle) lanesTitle.textContent = st.title;
      tabs.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-morning') === cur.morning)); });
      sig.setAttribute('data-morning-now', cur.morning);
    }
    function drawTime() {
      var m = MORNINGS[cur.morning];
      mk.innerHTML = markerHTML(m, cur.t);
      out.innerHTML = readout(m, cur.t);
      rangeOut.textContent = hhmm(cur.t);
      range.setAttribute('aria-valuetext', hhmm(cur.t) + ', ' + verdict(m, cur.t).head);
    }
    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        cur.morning = b.getAttribute('data-morning');
        svg.classList.remove('intro'); svg.classList.add('swap');
        drawMorning(); drawTime();
      });
    });
    range.addEventListener('input', function () {
      var v = Math.max(START * 60, Math.min(END * 60, parseInt(range.value, 10) || DEFAULT.t * 60));
      cur.t = v / 60; drawTime();
    });
    reset.addEventListener('click', function () {
      cur = { morning: DEFAULT.morning, t: DEFAULT.t };
      range.value = String(DEFAULT.t * 60);
      drawMorning(); drawTime();
    });
    drawMorning(); drawTime();
  });

  // Header menu (build baseline): closed once script runs; Escape, outside click and tabbing out close it.
  ready(function () {
    var b = document.querySelector('.menu-btn'), m = document.getElementById('site-menu');
    if (!b || !m) return;
    var set = function (open) { b.setAttribute('aria-expanded', String(open)); m.hidden = !open; };
    set(false);
    b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') { set(false); b.focus(); } });
    document.addEventListener('click', function (e) { if (!m.contains(e.target) && e.target !== b && b.getAttribute('aria-expanded') === 'true') set(false); });
    m.addEventListener('focusout', function (e) { if (!m.contains(e.relatedTarget) && e.relatedTarget !== b) set(false); });
    m.addEventListener('click', function (e) { if (e.target.closest('a') && matchMedia('(max-width: 899px)').matches) set(false); });
  });
})(typeof window !== 'undefined' ? window : globalThis);
