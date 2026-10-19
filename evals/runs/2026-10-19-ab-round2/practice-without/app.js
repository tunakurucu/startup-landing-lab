/* Halfstep landing page: interactive example + waitlist form.
   Everything here is local: the "take" is synthesized with Web Audio, and the
   practice map is a fixed, pre-written example (not a live analysis). */
(function () {
  'use strict';

  /* ---------- Music data: Minuet in G, BWV Anh. 114, right hand, bars 1-16 ---------- */
  // [note, beats]  (quarter note = 1 beat, 3/4 time)
  var A = [['D5', 1], ['G4', .5], ['A4', .5], ['B4', .5], ['C5', .5]];
  var B = [['D5', 1], ['G4', 1], ['G4', 1]];
  var C = [['E5', 1], ['C5', .5], ['D5', .5], ['E5', .5], ['F#5', .5]];
  var D = [['G5', 1], ['G4', 1], ['G4', 1]];
  var E = [['C5', 1], ['D5', .5], ['C5', .5], ['B4', .5], ['A4', .5]];
  var F = [['B4', 1], ['C5', .5], ['B4', .5], ['A4', .5], ['G4', .5]];
  var SCORE = [
    A, B, C, D, E, F,
    [['F#4', 1], ['G4', .5], ['A4', .5], ['B4', .5], ['G4', .5]],
    [['A4', 3]],
    A, B, C, D, E, F,
    [['A4', 1], ['B4', .5], ['A4', .5], ['G4', .5], ['F#4', .5]],
    [['G4', 3]]
  ];

  var TAKE_BPM = 104;
  var QN = '<svg class="qn" viewBox="0 0 10 16" role="img" aria-label="quarter note"><ellipse cx="4.2" cy="12.4" rx="3.7" ry="2.7" transform="rotate(-22 4.2 12.4)"/><rect x="6.7" y="0.8" width="1.3" height="11.6" rx=".5"/></svg>';

  // How the sample take was "played": onsets (in beats from the bar line) and
  // how long the bar actually lasted. Bars not listed are steady, with tiny human wobble.
  var PERFORMED = {
    3: { onsets: [0, 1.0, 1.46, 2.04, 2.86], len: 3.4 },   // stop before the F#
    7: { onsets: [0, 0.96, 1.28, 1.58, 1.88], len: 2.6 },  // quick notes hurry
    15: { onsets: [0.42, 1.52, 1.97, 2.62, 2.95], len: 3.6 } // pause in, uneven walk down
  };

  var SPOTS = [
    {
      flag: 3, from: 3, to: 4, ladder: [76, 88, 96, 104],
      heard: 'A small stop at the top of the climb, just before the F♯. The notes leading up to it are fine.',
      tip: 'Loop bars 3–4, starting at ' + QN + ' = 76, so the F♯ lands on time and the leap up to G has room.'
    },
    {
      flag: 7, from: 6, to: 7, ladder: [80, 88, 96, 104],
      heard: 'The four quick notes after the F♯ hurry ahead of the beat, so bar 8 comes in a little early.',
      tip: 'Loop bars 6–7 at ' + QN + ' = 80 and let each quick note take its full half of the beat.'
    },
    {
      flag: 15, from: 14, to: 15, ladder: [72, 84, 96, 104],
      heard: 'A pause on the way into the bar, then the walk down to the F♯ comes out uneven.',
      tip: 'Loop bars 14–15 at ' + QN + ' = 72. Starting from bar 14 means the way in gets practised too.'
    }
  ];

  var STEADY_LINES = [
    'The timing held through this bar. Nothing to do here today.',
    'Steady all the way through. Leave this one as it is.',
    'This bar is settled. Spend your time on the marked spots instead.'
  ];

  /* ---------- Helpers ---------- */
  var SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function midi(name) {
    var m = /^([A-G])(#|b)?(\d)$/.exec(name);
    var s = SEMI[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
    return 12 * (parseInt(m[3], 10) + 1) + s;
  }
  function $(id) { return document.getElementById(id); }
  function spotFor(bar) {
    for (var i = 0; i < SPOTS.length; i++) if (SPOTS[i].flag === bar) return SPOTS[i];
    return null;
  }
  function loopFor(bar) {
    for (var i = 0; i < SPOTS.length; i++) if (bar >= SPOTS[i].from && bar <= SPOTS[i].to) return SPOTS[i];
    return null;
  }

  // Build the performed take: per bar, notes with onset + duration (beats), and bar length.
  function nominal(barIdx) {
    var t = 0, out = [];
    SCORE[barIdx].forEach(function (n) { out.push({ m: midi(n[0]), on: t, dur: n[1] }); t += n[1]; });
    return { notes: out, len: 3 };
  }
  function performed(barIdx) {
    var nom = nominal(barIdx);
    var p = PERFORMED[barIdx + 1];
    var notes = nom.notes.map(function (n, i) {
      var on = p ? p.onsets[i] : Math.max(0, n.on + (((barIdx * 5 + i * 3) % 7) - 3) * 0.008);
      return { m: n.m, on: on, dur: n.dur };
    });
    var len = p ? p.len : 3;
    notes.forEach(function (n, i) {
      var next = i < notes.length - 1 ? notes[i + 1].on : len;
      n.dur = Math.max(0.15, next - n.on);
    });
    return { notes: notes, len: len };
  }
  var TAKE = SCORE.map(function (_, i) { return performed(i); });

  /* ---------- Audio ---------- */
  var ctx = null, session = null;

  function audio() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function newSession(kind, el) {
    stopAll();
    var c = audio();
    if (!c) return null;
    var master = c.createGain();
    master.gain.value = 0.9;
    var comp = c.createDynamicsCompressor();
    master.connect(comp); comp.connect(c.destination);
    session = { kind: kind, el: el, master: master, comp: comp, raf: 0, ended: false };
    return session;
  }

  function stopAll() {
    if (!session) return;
    var s = session; session = null;
    cancelAnimationFrame(s.raf);
    try {
      s.master.gain.cancelScheduledValues(ctx.currentTime);
      s.master.gain.setTargetAtTime(0, ctx.currentTime, 0.02);
      setTimeout(function () { try { s.master.disconnect(); s.comp.disconnect(); } catch (e) {} }, 200);
    } catch (e) {}
    if (s.onStop) s.onStop();
  }

  function pianoNote(dest, m, t, dur, vel) {
    var f = 440 * Math.pow(2, (m - 69) / 12);
    var g = ctx.createGain();
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(f * 8, 9000), t);
    lp.frequency.setTargetAtTime(f * 2.5, t, 0.25);
    lp.connect(g); g.connect(dest);
    var parts = [['triangle', 1, 0.75], ['sine', 2, 0.22], ['sine', 3, 0.07], ['sine', 1.002, 0.25]];
    var end = t + dur + 1.2;
    parts.forEach(function (p) {
      var o = ctx.createOscillator(), og = ctx.createGain();
      o.type = p[0]; o.frequency.value = f * p[1]; og.gain.value = p[2];
      o.connect(og); og.connect(lp);
      o.start(t); o.stop(end);
    });
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vel, t + 0.006);
    g.gain.setTargetAtTime(vel * 0.22, t + 0.006, 0.4);
    g.gain.setTargetAtTime(0, t + Math.max(dur, 0.12), 0.12);
  }

  function click(dest, t, accent) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = accent ? 1760 : 1320;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(accent ? 0.22 : 0.13, t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    o.connect(g); g.connect(dest);
    o.start(t); o.stop(t + 0.06);
  }

  // Schedule bars [from..to] (1-based). source: 'take' (as played) or 'clean' (in time).
  // Returns array of {bar, start, end} in seconds relative to t0, plus total.
  function schedule(s, from, to, bpm, source, countIn, t0) {
    var spb = 60 / bpm, t = 0, marks = [];
    if (countIn) {
      for (var k = 0; k < 3; k++) click(s.master, t0 + k * spb, k === 0);
      t = 3 * spb;
    }
    for (var b = from; b <= to; b++) {
      var bar = source === 'take' ? TAKE[b - 1] : nominal(b - 1);
      bar.notes.forEach(function (n, i) {
        var vel = 0.34 + (n.on === 0 || Math.abs(n.on - Math.round(n.on)) < 0.05 ? 0.06 : 0) + ((b * 7 + i * 3) % 5) * 0.006;
        pianoNote(s.master, n.m, t0 + t + n.on * spb, n.dur * spb * 0.95, vel);
      });
      if (source === 'clean') for (var beat = 0; beat < 3; beat++) click(s.master, t0 + t + beat * spb, beat === 0);
      marks.push({ bar: b, start: t, end: t + bar.len * spb });
      t += bar.len * spb;
    }
    return { marks: marks, total: t };
  }

  /* ---------- Bar map rendering ---------- */
  var demo = $('demo'), mapEl = $('bar-map');
  var LO = midi('F#4'), HI = midi('G5'), SPAN = 3.6;
  var analysed = false, selected = null;
  var NS = 'http://www.w3.org/2000/svg';

  function svgEl(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  function renderMap() {
    TAKE.forEach(function (bar, i) {
      var n = i + 1;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bar ' + (spotFor(n) ? 'focus' : 'steady');
      btn.dataset.bar = n;
      btn.setAttribute('aria-label', 'Bar ' + n);
      btn.innerHTML = '<span class="bar-num">' + n + '</span><span class="bar-tag" aria-hidden="true">slower</span>';
      var svg = svgEl('svg', { viewBox: '0 0 100 52', preserveAspectRatio: 'none', 'aria-hidden': 'true', focusable: 'false' });
      for (var g = 0; g <= 3; g++) {
        var gx = 3 + (g / SPAN) * 94;
        svg.appendChild(svgEl('line', { x1: gx, x2: gx, y1: 2, y2: 50, 'class': 'grid-line' }));
      }
      bar.notes.forEach(function (note) {
        var x = 3 + (note.on / SPAN) * 94;
        var w = Math.max(3, (note.dur / SPAN) * 94 - 2);
        var y = 44 - ((note.m - LO) / (HI - LO)) * 38;
        svg.appendChild(svgEl('rect', { x: x.toFixed(2), y: (y - 2.5).toFixed(2), width: w.toFixed(2), height: 5, rx: 2.5, 'class': 'note' }));
      });
      btn.appendChild(svg);
      btn.addEventListener('click', function () {
        if (!analysed) analyse();
        select(n);
      });
      mapEl.appendChild(btn);
    });
  }

  function barBtn(n) { return mapEl.querySelector('[data-bar="' + n + '"]'); }
  function setPlayingBar(n) {
    mapEl.querySelectorAll('.bar.is-playing').forEach(function (b) { b.classList.remove('is-playing'); });
    if (n) { var b = barBtn(n); if (b) b.classList.add('is-playing'); }
  }

  /* ---------- Analysis reveal + panel ---------- */
  var planEl = $('plan'), detailEl = $('detail');

  function analyse() {
    if (analysed) return;
    analysed = true;
    demo.classList.add('analysed');
    $('legend').hidden = false;
    $('panel-intro').hidden = true;
    $('panel-result').hidden = false;
    $('map-hint').textContent = 'Tap any bar to see what happened there.';
    $('show-map').hidden = true;
    for (var n = 1; n <= 16; n++) {
      var b = barBtn(n);
      b.setAttribute('aria-label', 'Bar ' + n + ', ' + (spotFor(n) ? 'worth a slower pass' : 'steady'));
    }
    planEl.innerHTML = '';
    SPOTS.forEach(function (s) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.bar = s.flag;
      btn.innerHTML = '<span class="p-bars">Bars ' + s.from + '–' + s.to + '</span><span class="p-tempo">start at ' + QN + ' = ' + s.ladder[0] + '</span>';
      btn.addEventListener('click', function () { select(s.flag); });
      li.appendChild(btn);
      planEl.appendChild(li);
    });
    select(SPOTS[0].flag, true);
  }

  function select(n, quiet) {
    if (session && session.kind === 'snippet') stopAll();
    selected = n;
    mapEl.querySelectorAll('.bar').forEach(function (b) {
      var bn = +b.dataset.bar;
      b.classList.toggle('selected', bn === n);
      b.setAttribute('aria-pressed', bn === n ? 'true' : 'false');
      var lp = loopFor(n);
      b.classList.toggle('in-loop', !!(lp && spotFor(n) && bn >= lp.from && bn <= lp.to));
    });
    planEl.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-current', +b.dataset.bar === n ? 'true' : 'false');
    });
    renderDetail(n);
  }

  function renderDetail(n) {
    var s = spotFor(n);
    var html;
    if (s) {
      html = '<h4>Bars ' + s.from + '–' + s.to + ' <span class="chip chip-focus">Worth a slower pass</span></h4>' +
        '<p class="label">What happened in bar ' + n + '</p><p>' + s.heard + '</p>' +
        '<button class="link-btn" type="button" data-play="take" data-from="' + s.from + '" data-to="' + s.to + '">Hear bars ' + s.from + '–' + s.to + ' from the take</button>' +
        '<p class="label">Try this</p><p>' + s.tip + '</p>' +
        '<ul class="ladder" aria-label="Tempo steps">' +
        s.ladder.map(function (bpm, i) {
          return (i ? '<li class="arrow" aria-hidden="true">→</li>' : '') +
            '<li><button type="button" data-play="clean" data-from="' + s.from + '" data-to="' + s.to + '" data-bpm="' + bpm + '" aria-label="Hear bars ' + s.from + ' to ' + s.to + ' at ' + bpm + ' beats per minute">' +
            QN + bpm + (i === s.ladder.length - 1 ? ' <span class="yours">(your take)</span>' : '') + '</button></li>';
        }).join('') +
        '</ul>' +
        '<p class="ladder-note">Tap a step to hear it with a click. Start at the first one; when it feels easy three times in a row, move up.</p>';
    } else {
      var lp = loopFor(n);
      html = '<h4>Bar ' + n + ' <span class="chip chip-steady">Steady</span></h4>' +
        '<p>' + STEADY_LINES[n % STEADY_LINES.length] + '</p>' +
        (lp ? '<p class="ladder-note">It’s part of the bars ' + lp.from + '–' + lp.to + ' loop, because practising the way in (or out) helps the marked bar.</p>' : '') +
        '<button class="link-btn" type="button" data-play="take" data-from="' + n + '" data-to="' + n + '">Hear bar ' + n + ' from the take</button>';
    }
    detailEl.innerHTML = html;
  }

  detailEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-play]');
    if (!b) return;
    if (session && session.el === b) { stopAll(); return; }
    var from = +b.dataset.from, to = +b.dataset.to;
    if (b.dataset.play === 'take') playSnippet(b, from, to, TAKE_BPM, 'take');
    else playSnippet(b, from, to, +b.dataset.bpm, 'clean');
  });

  function playSnippet(el, from, to, bpm, source) {
    var s = newSession('snippet', el);
    if (!s) return;
    el.classList.add('is-playing');
    var origText = el.classList.contains('link-btn') ? el.textContent : null;
    if (origText) el.textContent = 'Stop';
    s.onStop = function () {
      el.classList.remove('is-playing');
      if (origText) el.textContent = origText;
      setPlayingBar(null);
    };
    var t0 = ctx.currentTime + 0.08;
    var plan = schedule(s, from, to, bpm, source, source === 'clean', t0);
    tick(s, t0, plan, null);
  }

  /* ---------- Main take player ---------- */
  var playBtn = $('play-take'), fill = $('progress-fill');

  function tick(s, t0, plan, onProgress) {
    function frame() {
      if (session !== s) return;
      var el = ctx.currentTime - t0;
      var cur = null;
      for (var i = 0; i < plan.marks.length; i++) if (el >= plan.marks[i].start && el < plan.marks[i].end) cur = plan.marks[i].bar;
      setPlayingBar(cur);
      if (onProgress) onProgress(Math.min(1, Math.max(0, el / plan.total)));
      if (el > plan.total + 0.35) { s.ended = true; stopAll(); return; }
      s.raf = requestAnimationFrame(frame);
    }
    s.raf = requestAnimationFrame(frame);
  }

  playBtn.addEventListener('click', function () {
    if (session && session.el === playBtn) { stopAll(); return; }
    var s = newSession('take', playBtn);
    if (!s) { analyse(); return; }
    playBtn.classList.add('is-playing');
    playBtn.querySelector('.play-label').textContent = 'Stop the sample take';
    s.onStop = function () {
      playBtn.classList.remove('is-playing');
      playBtn.querySelector('.play-label').textContent = 'Play the sample take again';
      setPlayingBar(null);
      fill.style.width = s.ended ? '100%' : fill.style.width;
      if (s.ended) analyse();
    };
    var t0 = ctx.currentTime + 0.12;
    var plan = schedule(s, 1, 16, TAKE_BPM, 'take', false, t0);
    tick(s, t0, plan, function (p) { fill.style.width = (p * 100).toFixed(1) + '%'; });
  });

  $('show-map').addEventListener('click', function () {
    stopAll();
    analyse();
    var panel = $('panel');
    if (window.matchMedia('(max-width: 900px)').matches) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  renderMap();

  /* ---------- Header border on scroll ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Waitlist form ---------- */
  var form = $('join-form'), email = $('email'), status = $('form-status');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = 'form-status ' + (kind || '');
  }

  email.addEventListener('input', function () {
    if (email.getAttribute('aria-invalid') === 'true' && EMAIL_RE.test(email.value.trim())) {
      email.removeAttribute('aria-invalid');
      setStatus('');
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = email.value.trim();
    if (!EMAIL_RE.test(value)) {
      email.setAttribute('aria-invalid', 'true');
      setStatus('Please enter an email address, like name@example.com.', 'err');
      email.focus();
      return;
    }
    email.removeAttribute('aria-invalid');
    var role = (form.querySelector('input[name="role"]:checked') || {}).value || 'player';
    var endpoint = (form.dataset.endpoint || '').trim();

    if (!endpoint) {
      // No backend yet: be honest rather than pretending the sign-up worked.
      setStatus('Thanks! This is a preview of the page and sign-ups aren’t switched on yet, so your email hasn’t been saved. Please check back soon.', 'info');
      return;
    }

    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    setStatus('Adding you to the list…');
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value, role: role, source: 'landing' })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      form.reset();
      setStatus(role === 'teacher'
        ? 'You’re on the list. We’ll be in touch about Halfstep for teachers.'
        : 'You’re on the list. We’ll email you when there’s a beta place for you.', 'ok');
    }).catch(function () {
      setStatus('That didn’t go through. Please try again in a moment.', 'err');
    }).then(function () { submit.disabled = false; });
  });
})();
