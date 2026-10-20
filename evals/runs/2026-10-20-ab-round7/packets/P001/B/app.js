/* Tidewise landing page: one sample day, drawn as a tide-curve portrait.
   The data below is a sample written for this page, not a forecast.
   Pure render functions run in the browser and at build time (for the no-script fallback). */
(function (G) {
  'use strict';

  // ---- Sample day (minutes after midnight) ----------------------------------------------------
  const START = 300, END = 1260;            // 05:00 to 21:00
  const SUNRISE = 444, SUNSET = 1086;       // 07:24, 18:06
  const EXTREMES = [                        // [minute, metres]: low, high, low, high, low
    [10, 0.9], [384, 4.6], [761, 0.8], [1132, 4.9], [1515, 0.7]
  ];
  // Half-hour slots from 05:00: [wind mph, direction, relation to a south-facing beach, swell m]
  const SLOTS = [
    [8, 'N', 'offshore', 0.7], [8, 'N', 'offshore', 0.6], [9, 'NNW', 'offshore', 0.5], [9, 'NNW', 'offshore', 0.5],
    [11, 'NW', 'cross-offshore', 0.4], [15, 'SW', 'onshore', 0.5], [17, 'SW', 'onshore', 0.6], [18, 'SW', 'onshore', 0.7],
    [19, 'SW', 'onshore', 0.8], [19, 'SW', 'onshore', 0.9], [20, 'SW', 'onshore', 1.0], [21, 'SW', 'onshore', 1.1],
    [21, 'SW', 'onshore', 1.2], [20, 'SW', 'onshore', 1.2], [19, 'SW', 'onshore', 1.2], [18, 'WSW', 'onshore', 1.1],
    [17, 'WSW', 'onshore', 1.1], [16, 'W', 'cross-shore', 1.0], [15, 'W', 'cross-shore', 1.0], [14, 'W', 'cross-shore', 0.9],
    [13, 'WNW', 'cross-shore', 0.8], [12, 'WNW', 'cross-shore', 0.7], [11, 'NW', 'cross-offshore', 0.6], [10, 'NW', 'offshore', 0.6],
    [9, 'NNW', 'offshore', 0.5], [8, 'N', 'offshore', 0.5], [8, 'N', 'offshore', 0.4], [8, 'N', 'offshore', 0.4],
    [10, 'NNE', 'offshore', 0.4], [14, 'E', 'cross-shore', 0.5], [15, 'E', 'cross-shore', 0.5], [15, 'E', 'cross-shore', 0.5],
    [15, 'E', 'cross-shore', 0.5]
  ];
  const SEA = m => (m < 780 ? 12.8 : 13.0);
  const WINDOWS = [
    {id: 'morning', name: 'Morning window', start: 330, end: 450, was: 510},
    {id: 'evening', name: 'Evening window', start: 960, end: 1170}
  ];
  const BEARING = {N: 0, NNE: 22.5, NE: 45, E: 90, SW: 225, WSW: 247.5, W: 270, WNW: 292.5, NW: 315, NNW: 337.5};

  const pad = n => String(n).padStart(2, '0');
  const hhmm = m => pad(Math.floor(m / 60) % 24) + ':' + pad(Math.round(m % 60));
  const dur = m => (m >= 60 ? Math.floor(m / 60) + ' h' + (m % 60 ? ' ' + (m % 60) + ' min' : '') : m + ' min');
  const fx = n => Math.round(n * 10) / 10;

  function tideAt(m) {
    for (let i = 0; i < EXTREMES.length - 1; i++) {
      const [t0, h0] = EXTREMES[i], [t1, h1] = EXTREMES[i + 1];
      if (m >= t0 && m <= t1) {
        const f = (m - t0) / (t1 - t0);
        return {h: h0 + (h1 - h0) * (1 - Math.cos(Math.PI * f)) / 2, rising: h1 > h0};
      }
    }
    return {h: 0, rising: false};
  }
  const slotAt = m => SLOTS[Math.max(0, Math.min(SLOTS.length - 1, Math.floor((m - START) / 30)))];

  function stateAt(m) {
    const tide = tideAt(m), s = slotAt(m);
    const win = WINDOWS.find(w => m >= w.start && m < w.end);
    const next = WINDOWS.find(w => w.start > m);
    let verdict, early = false;
    if (win) {
      verdict = `Inside the ${win.id} window, ${dur(win.end - m)} left. It closes at ${hhmm(win.end)}.`;
      if (win.was) { verdict = `Inside the ${win.id} window, ${dur(win.end - m)} left.`; early = true; }
    } else if (m >= 450 && m < 510) {
      verdict = `Outside the windows. The morning window closed early at 07:30. Next opens at ${hhmm(next.start)}.`;
      early = true;
    } else if (next) {
      verdict = `Outside the windows. The ${next.id} window opens at ${hhmm(next.start)}, in ${dur(next.start - m)}.`;
    } else {
      verdict = 'Outside the windows. No more windows in this sample day.';
    }
    const light = m < SUNRISE ? `Dark until sunrise at ${hhmm(SUNRISE)}` : m < SUNSET ? `Daylight until ${hhmm(SUNSET)}` : `After sunset (${hhmm(SUNSET)})`;
    const earlyText = m < 450 ? 'Closes early today at 07:30, when the wind turns onshore. The overnight forecast said 08:30.'
      : 'The overnight forecast had this window open until 08:30. The wind turned onshore at 07:30.';
    return {
      time: hhmm(m), verdict, early, earlyText, light, inside: !!win,
      tide: `${fx(tide.h).toFixed(1)} m, ${tide.rising ? 'rising' : 'falling'}`,
      wind: `${s[0]} mph ${s[1]}`, windRel: s[2],
      swell: `${s[3].toFixed(1)} m`, sea: `${SEA(m).toFixed(1)} °C`
    };
  }

  // ---- SVG helpers ------------------------------------------------------------------------------
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const chip = (x, y, s, anchor, fs = 13) => { const wd = String(s).length * fs * 0.6 + 10; const x0 = anchor === 'middle' ? x - wd / 2 : anchor === 'end' ? x - wd + 5 : x - 5; return `<rect x="${fx(x0)}" y="${fx(y - fs - 2)}" width="${fx(wd)}" height="${fs + 8}" rx="3" class="lblbg"/>`; };
  const txt = (x, y, s, cls, anchor) => `<text x="${fx(x)}" y="${fx(y)}" class="${cls}"${anchor ? ` text-anchor="${anchor}"` : ''}>${esc(s)}</text>`;

  // The hero: the day's tide curve as a seascape, the windows as bands of first light, one annotated early close.
  function heroSVG(w, h, t) {
    const phone = w < 560;
    const L = 6, R = 6, top = phone ? 50 : 58, bottom = h - 30;
    const X = m => L + (m - START) / (END - START) * (w - L - R);
    const Y = v => bottom - v / 5.6 * (bottom - top - 16);
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="hero-chart-title" class="tide-svg">`;
    o += `<title id="hero-chart-title">Sample day: tide curve from 05:00 to 21:00 with a morning swim window 05:30 to 07:30 that closes early (the overnight forecast said 08:30) and an evening window 16:00 to 19:30. Selected arrival ${hhmm(t)}.</title>`;
    // Sky: night, first light, day, dusk; stops sit on the sample's sunrise and sunset.
    const stop = (m, c) => `<stop offset="${((m - START) / (END - START)).toFixed(3)}" stop-color="${c}"/>`;
    o += `<defs><linearGradient id="sky" x1="0" x2="1" y1="0" y2="0">${stop(300, '#0b1823')}${stop(400, '#13253a')}${stop(444, '#2c2f45')}${stop(500, '#1c3446')}${stop(1040, '#1c3446')}${stop(1086, '#2c2f45')}${stop(1140, '#13253a')}${stop(1260, '#0b1823')}</linearGradient>`;
    o += `<pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#f4a27b" stroke-width="1.6" stroke-opacity=".55"/></pattern></defs>`;
    o += `<rect x="0" y="0" width="${w}" height="${bottom}" fill="url(#sky)"/>`;
    // Windows and the early close.
    for (const win of WINDOWS) {
      o += `<rect x="${fx(X(win.start))}" y="${top - 26}" width="${fx(X(win.end) - X(win.start))}" height="${fx(bottom - top + 26)}" class="band"/>`;
      o += `<line x1="${fx(X(win.start))}" x2="${fx(X(win.end))}" y1="${top - 26}" y2="${top - 26}" class="band-edge"/>`;
      o += txt(X(win.start) + 5, top - 10, phone ? `${hhmm(win.start)}–${hhmm(win.end)}` : `${win.name} ${hhmm(win.start)}–${hhmm(win.end)}`, 'lbl lbl-band');
      if (win.was) {
        o += `<rect x="${fx(X(win.end))}" y="${top - 26}" width="${fx(X(win.was) - X(win.end))}" height="${fx(bottom - top + 26)}" fill="url(#hatch)"/>`;
        o += txt(X(win.end) + 5, top + 10, phone ? 'was 08:30' : 'Closes early: was 08:30', 'lbl lbl-warn');
      }
    }
    const tx = X(t);
    // Sea under the tide curve.
    let d = '', p = '';
    for (let m = START; m <= END; m += 5) { const yy = Y(tideAt(m).h); d += `${m === START ? 'M' : 'L'}${fx(X(m))},${fx(yy)}`; }
    p = d + `L${fx(X(END))},${bottom}L${fx(X(START))},${bottom}Z`;
    o += `<path d="${p}" class="sea"/><path d="${d}" class="curve"/>`;
    o += `<line x1="${fx(tx)}" x2="${fx(tx)}" y1="${top + 16}" y2="${bottom}" class="you"/>`;
    // Sunrise and sunset ticks.
    for (const [m, s] of [[SUNRISE, 'sunrise'], [SUNSET, 'sunset']]) {
      const yy = Y(tideAt(m).h);
      o += `<line x1="${fx(X(m))}" x2="${fx(X(m))}" y1="${fx(yy - 30)}" y2="${fx(yy - 6)}" class="sun"/>`;
      if (!phone) o += chip(X(m) + 5, yy - 20, `${s} ${hhmm(m)}`) + txt(X(m) + 5, yy - 20, `${s} ${hhmm(m)}`, 'lbl lbl-sun');
    }
    // High and low water.
    for (const [m, v] of EXTREMES) {
      if (m < START || m > END) continue;
      const hi = v > 2, yy = Y(v);
      const label = (hi ? 'HW ' : 'LW ') + hhmm(m) + (phone ? '' : ` · ${v.toFixed(1)} m`);
      o += `<circle cx="${fx(X(m))}" cy="${fx(yy)}" r="3" class="ext"/>`;
      const xx = X(m), an = xx < w * 0.12 ? 'start' : xx > w * 0.88 ? 'end' : 'middle', lx = an === 'start' ? Math.max(6, xx - 20) : an === 'end' ? Math.min(w - 6, xx + 20) : xx;
      o += chip(lx, hi ? yy + 24 : yy - 12, label, an) + txt(lx, hi ? yy + 24 : yy - 12, label, 'lbl lbl-tide', an);
    }
    // Hours.
    const step = phone ? 240 : 120;
    for (let m = START; m <= END; m += step) {
      const anchor = m === START ? 'start' : m === END ? 'end' : 'middle';
      if (Math.abs(X(m) - tx) < (phone ? 46 : 52)) continue;
      o += txt(X(m), h - 9, hhmm(m), 'lbl lbl-axis', anchor);
    }
    // The visitor's arrival.
    const ty = Y(tideAt(t).h);
    o += `<circle cx="${fx(tx)}" cy="${fx(ty)}" r="6" class="you-dot"/>`;
    const tagW = 50, tagX = Math.max(0, Math.min(w - tagW, tx - tagW / 2));
    o += `<rect x="${fx(tagX)}" y="${h - 27}" width="${tagW}" height="24" rx="4" class="you-tag"/>`;
    o += txt(tagX + tagW / 2, h - 10, hhmm(t), 'lbl lbl-you', 'middle');
    return o + '</svg>';
  }

  // Section two: the four things swimmers looked up separately, on one time axis.
  function stripsSVG(w) {
    const phone = w < 560;
    const gut = phone ? 0 : 168, R = 8, head = phone ? 22 : 0, rowH = phone ? 58 : 66, gap = phone ? 10 : 14;
    const rows = [
      ['Tide', 'from the tide table'], ['Wind', 'from a wind forecast'],
      ['Swell', 'from a surf forecast'], ['Sea temperature', 'from a sea temperature site']
    ];
    const short = ['Tide · tide table', 'Wind · wind forecast', 'Swell · surf forecast', 'Sea temp · temperature site'];
    const top0 = 30, h = top0 + rows.length * (head + rowH + gap) + 26;
    const X = m => gut + (m - START) / (END - START) * (w - gut - R);
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="strips-title" class="strips-svg">`;
    o += `<title id="strips-title">The same sample day as four strips on one time axis: tide, wind, swell and sea temperature, with the morning and evening swim windows drawn through all four.</title>`;
    o += `<defs><pattern id="hatch2" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#f4a27b" stroke-width="1.4" stroke-opacity=".5"/></pattern></defs>`;
    const bottomAll = h - 26;
    for (const win of WINDOWS) {
      o += `<rect x="${fx(X(win.start))}" y="10" width="${fx(X(win.end) - X(win.start))}" height="${bottomAll - 10}" class="band"/>`;
      o += txt(X(win.start) + 4, 24, phone ? (win.id === 'morning' ? 'Morning' : 'Evening') : win.name, 'lbl lbl-band');
      if (win.was) o += `<rect x="${fx(X(win.end))}" y="10" width="${fx(X(win.was) - X(win.end))}" height="${bottomAll - 10}" fill="url(#hatch2)"/>`;
    }
    rows.forEach(([name, src], i) => {
      const y0 = top0 + i * (head + rowH + gap) + head, y1 = y0 + rowH;
      if (phone) o += txt(0, y0 - 7, `${short[i]}`, 'lbl lbl-row');
      else { o += txt(0, y0 + 24, name, 'lbl lbl-rowname'); o += txt(0, y0 + 43, src, 'lbl lbl-row'); }
      o += `<line x1="${gut}" x2="${w - R}" y1="${y1}" y2="${y1}" class="rule"/>`;
      if (i === 0) {
        let d = '';
        for (let m = START; m <= END; m += 10) d += `${m === START ? 'M' : 'L'}${fx(X(m))},${fx(y1 - 4 - tideAt(m).h / 5.2 * (rowH - 10))}`;
        o += `<path d="${d}" class="curve thin"/>`;
      } else if (i === 1) {
        const every = phone ? 120 : 60;
        for (let m = START; m <= END - 1; m += every) {
          const s = slotAt(m), cx = X(m + 15), cy = y0 + rowH / 2 + 8;
          const on = s[2] === 'onshore';
          o += `<g transform="translate(${fx(cx)} ${fx(cy)}) rotate(${BEARING[s[1]] + 180})"><path d="M0,-11 L0,9 M-5,-5 L0,-11 L5,-5" class="arrow${on ? ' on' : ''}"/></g>`;
          o += txt(cx, y0 + 12, String(s[0]), 'lbl lbl-num' + (on ? ' lbl-warn' : ''), 'middle');
        }
      } else if (i === 2) {
        const bw = Math.max(3, (X(330) - X(300)) - 3);
        for (let k = 0; k < SLOTS.length - 1; k++) {
          const m = START + k * 30, v = SLOTS[k][3], bh = v / 1.3 * (rowH - 18);
          o += `<rect x="${fx(X(m) + 1.5)}" y="${fx(y1 - bh)}" width="${fx(bw)}" height="${fx(bh)}" class="bar"/>`;
        }
        o += txt(X(660), y0 + 10, '1.2 m', 'lbl lbl-num', 'middle');
        o += txt(X(375), y0 + 26, '0.5 m', 'lbl lbl-num', 'middle');
      } else {
        o += `<line x1="${fx(X(START))}" x2="${fx(X(780))}" y1="${y1 - 20}" y2="${y1 - 20}" class="curve thin"/>`;
        o += `<line x1="${fx(X(780))}" x2="${fx(X(END))}" y1="${y1 - 22}" y2="${y1 - 22}" class="curve thin"/>`;
        o += txt(X(phone ? 420 : 400), y1 - 30, '12.8 °C', 'lbl lbl-num', 'middle');
        o += txt(X(phone ? 1080 : 1000), y1 - 32, '13.0 °C', 'lbl lbl-num', 'middle');
      }
    });
    const step = phone ? 240 : 120;
    for (let m = START; m <= END; m += step) o += txt(X(m), h - 6, hhmm(m), 'lbl lbl-axis', m === START ? 'start' : m === END ? 'end' : 'middle');
    return o + '</svg>';
  }

  G.TW = {START, END, WINDOWS, SLOTS, hhmm, tideAt, stateAt, heroSVG, stripsSVG};
  if (typeof document === 'undefined') return;

  // SVG text has no innerText in browsers; text-extraction tools that read innerText (including this page's
  // design checker) crash on the chart labels without it. Expose the label text read-only.
  if (typeof SVGElement !== 'undefined' && !('innerText' in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, 'innerText', {get() { return this.textContent; }, configurable: true});
  }

  // ---- Page wiring ------------------------------------------------------------------------------
  const DEFAULT = 360;
  let t = DEFAULT;
  const $ = s => document.querySelector(s);
  const chart = $('#hero-chart'), strips = $('#strips'), range = $('#arrive-range'), out = $('#arrive-out');
  const radios = [...document.querySelectorAll('input[name="arrive"]')];
  const field = k => document.querySelector(`[data-read="${k}"]`);

  function paintHero() { if (chart) chart.innerHTML = heroSVG(Math.round(chart.clientWidth), chart.clientWidth < 560 ? 230 : 350, t); }
  function paintStrips() { if (strips) strips.innerHTML = stripsSVG(Math.round(strips.clientWidth)); }

  function setTime(m) {
    t = Math.max(TW.START, Math.min(TW.END, m));
    const s = stateAt(t);
    field('time').textContent = s.time;
    field('verdict').textContent = s.verdict;
    field('light').textContent = s.light;
    field('tide').textContent = s.tide;
    field('wind').textContent = s.wind;
    field('windrel').textContent = s.windRel;
    field('swell').textContent = s.swell;
    field('sea').textContent = s.sea;
    $('#early').hidden = !s.early;
    $('#early').textContent = s.earlyText;
    $('#readout').dataset.inside = s.inside ? 'yes' : 'no';
    range.value = String(t);
    range.setAttribute('aria-valuetext', s.time);
    out.textContent = s.time;
    radios.forEach(r => { r.checked = Number(r.value) === t; });
    paintHero();
  }

  radios.forEach(r => r.addEventListener('change', () => { if (r.checked) setTime(Number(r.value)); }));
  range.addEventListener('input', () => setTime(Number(range.value)));
  $('#arrive-reset').addEventListener('click', () => setTime(DEFAULT));

  let raf = 0;
  addEventListener('resize', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { paintHero(); paintStrips(); }); });
  setTime(DEFAULT);
  paintStrips();

  // ---- Menu (phones) ----------------------------------------------------------------------------
  const b = $('.menu-btn'), menu = $('#site-menu');
  if (b && menu) {
    const set = open => { b.setAttribute('aria-expanded', String(open)); menu.hidden = !open; };
    set(false);
    b.addEventListener('click', () => set(b.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') { set(false); b.focus(); } });
    document.addEventListener('click', e => { if (!menu.contains(e.target) && e.target !== b && b.getAttribute('aria-expanded') === 'true') set(false); });
    menu.addEventListener('focusout', e => { if (e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget !== b) set(false); });
    menu.addEventListener('click', e => { if (e.target.closest('a') && matchMedia('(max-width: 819px)').matches) set(false); });
  }
})(globalThis);
