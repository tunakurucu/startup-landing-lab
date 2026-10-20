/* Tankshift — day schedule example and install-list form.
   Everything here runs locally; nothing is sent anywhere. */
(function () {
  'use strict';

  var HOURS = 24;
  var RESERVE = 1; // uses kept in the tank at all times

  /* ---------- example tariffs ----------
     Price weights are relative, not currency: off-peak 1, shoulder 2, peak 4. */
  var TARIFFS = {
    evening: {
      name: 'Evening peak',
      bands: [[0, 7, 'off'], [7, 16, 'shoulder'], [16, 21, 'peak'], [21, 24, 'shoulder']]
    },
    twopeak: {
      name: 'Morning and evening peaks',
      bands: [[0, 6, 'off'], [6, 9, 'peak'], [9, 17, 'shoulder'], [17, 20, 'peak'], [20, 22, 'shoulder'], [22, 24, 'off']]
    },
    midday: {
      name: 'Cheap midday',
      bands: [[0, 10, 'shoulder'], [10, 15, 'off'], [15, 17, 'shoulder'], [17, 21, 'peak'], [21, 24, 'shoulder']]
    }
  };
  var PRICE = { off: 1, shoulder: 2, peak: 4 };
  var BAND_NAME = { off: 'Off-peak', shoulder: 'Shoulder', peak: 'Peak' };

  var USAGE = {
    family: [6, 7, 8, 20],
    couple: [7, 21, 22],
    home: [7, 12, 18, 22]
  };

  var state = {
    tariff: 'evening',
    draws: USAGE.family.slice(),
    capacity: 3,
    firstRender: true
  };

  /* ---------- DOM ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var rulerEl = $('ruler');
  var bandsEl = $('bands');
  var drawsEl = $('draws');
  var stdEl = $('heat-standard');
  var tsEl = $('heat-tankshift');
  var levelEl = $('level');
  var tariffSelect = $('tariff-select');
  var usageSelect = $('usage-select');
  var tariffName = $('tariff-name');
  var readoutNote = $('readout-note');

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pad(h) { return (h < 10 ? '0' : '') + h + ':00'; }

  /* ---------- helpers ---------- */
  function priceAt(bands) {
    var p = new Array(HOURS);
    var type = new Array(HOURS);
    bands.forEach(function (b) {
      for (var h = b[0]; h < b[1]; h++) { p[h] = PRICE[b[2]]; type[h] = b[2]; }
    });
    return { price: p, type: type };
  }

  /* Tankshift schedule: pick heating hours (one per use) that keep the tank
     between empty and full over a repeating day, at the lowest total price.
     One use is always kept in reserve for the unexpected, so the tank
     never runs below one. Small dynamic programme over hour x tank level,
     tried from each possible midnight level so the day closes where it
     opened. Ties go to the later hour, which means less time standing hot. */
  function tankshiftSchedule(draws, price, C) {
    var isDraw = new Array(HOURS);
    for (var h = 0; h < HOURS; h++) isDraw[h] = false;
    draws.forEach(function (d) { isDraw[d] = true; });

    var best = null;
    for (var L0 = RESERVE; L0 <= C; L0++) {
      var INF = 1e9;
      var cost = [];
      var choice = [];
      for (var t = 0; t <= HOURS; t++) { cost.push(new Array(C + 1)); choice.push(new Array(C + 1)); }
      for (var l = 0; l <= C; l++) cost[0][l] = INF;
      cost[0][L0] = 0;

      for (t = 0; t < HOURS; t++) {
        for (l = 0; l <= C; l++) cost[t + 1][l] = INF;
        for (l = 0; l <= C; l++) {
          if (cost[t][l] >= INF) continue;
          var lvl = l;
          if (isDraw[t]) { if (lvl < RESERVE + 1) continue; lvl -= 1; }
          // no heating this hour
          if (cost[t][l] < cost[t + 1][lvl]) { cost[t + 1][lvl] = cost[t][l]; choice[t + 1][lvl] = { from: l, heat: false }; }
          // heating this hour
          if (lvl < C) {
            var c = cost[t][l] + price[t] - t * 1e-6;
            if (c < cost[t + 1][lvl + 1]) { cost[t + 1][lvl + 1] = c; choice[t + 1][lvl + 1] = { from: l, heat: true }; }
          }
        }
      }
      if (cost[HOURS][L0] < INF && (best === null || cost[HOURS][L0] < best.cost)) {
        // walk back
        var hours = [];
        var levels = new Array(HOURS);
        var cur = L0;
        for (t = HOURS; t > 0; t--) {
          levels[t - 1] = cur;
          var ch = choice[t][cur];
          if (ch.heat) hours.push(t - 1);
          cur = ch.from;
        }
        hours.sort(function (a, b) { return a - b; });
        best = { cost: cost[HOURS][L0], hours: hours, levels: levels };
      }
    }
    return best;
  }

  /* ---------- rendering ---------- */
  function renderRuler() {
    var frag = document.createDocumentFragment();
    for (var h = 0; h < HOURS; h++) {
      var tick = document.createElement('div');
      tick.className = 'tick' + (h % 6 === 0 ? ' major' : '') + (h === 0 ? ' first' : '');
      if (h % 3 === 0) {
        var s = document.createElement('span');
        s.textContent = h === 0 ? '0' : String(h);
        tick.appendChild(s);
      }
      frag.appendChild(tick);
    }
    rulerEl.appendChild(frag);
  }

  function renderBands() {
    var t = TARIFFS[state.tariff];
    bandsEl.innerHTML = '';
    var desc = [];
    t.bands.forEach(function (b) {
      var el = document.createElement('div');
      el.className = 'band ' + b[2];
      el.style.left = 'calc(' + b[0] + ' * 100% / 24 + 1px)';
      el.style.width = 'calc(' + (b[1] - b[0]) + ' * 100% / 24 - 2px)';
      el.textContent = (b[1] - b[0]) >= 3 ? BAND_NAME[b[2]] : '';
      el.title = BAND_NAME[b[2]] + ' ' + pad(b[0]) + ' to ' + pad(b[1] % 24);
      bandsEl.appendChild(el);
      desc.push(BAND_NAME[b[2]].toLowerCase() + ' from ' + pad(b[0]) + ' to ' + pad(b[1] % 24));
    });
    bandsEl.setAttribute('aria-label', 'Example tariff, ' + t.name + ': ' + desc.join(', '));
    tariffName.textContent = t.name;
  }

  var dropSvg = '<svg viewBox="0 0 12 16" aria-hidden="true" focusable="false"><path d="M6 1 C6 1 1 7.5 1 10.5 a5 5 0 0 0 10 0 C11 7.5 6 1 6 1 Z" fill="currentColor"/></svg>';

  function renderDraws() {
    if (!drawsEl.childElementCount) {
      var frag = document.createDocumentFragment();
      for (var h = 0; h < HOURS; h++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'draw';
        b.dataset.hour = String(h);
        b.innerHTML = dropSvg;
        b.addEventListener('click', onDrawClick);
        frag.appendChild(b);
      }
      drawsEl.appendChild(frag);
    }
    var set = {};
    state.draws.forEach(function (d) { set[d] = true; });
    for (var i = 0; i < HOURS; i++) {
      var btn = drawsEl.children[i];
      var on = !!set[i];
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.setAttribute('aria-label', 'Hot water used at ' + pad(i));
    }
  }

  function onDrawClick(e) {
    var h = Number(e.currentTarget.dataset.hour);
    var idx = state.draws.indexOf(h);
    if (idx >= 0) state.draws.splice(idx, 1); else state.draws.push(h);
    state.draws.sort(function (a, b) { return a - b; });
    usageSelect.value = 'custom';
    update();
  }

  function placeBlock(el, hour) {
    el.style.left = 'calc(' + hour + ' * 100% / 24 + 1px)';
    el.style.width = 'calc(100% / 24 - 2px)';
  }

  function renderBlocks(container, hours, label, animateFrom) {
    // Keep existing block elements so position changes can animate.
    var blocks = container.querySelectorAll('.block');
    var note = container.querySelector('.empty-note');
    if (note) note.remove();
    var i;
    for (i = blocks.length; i < hours.length; i++) {
      var el = document.createElement('div');
      el.className = 'block';
      if (animateFrom && animateFrom[i] !== undefined) placeBlock(el, animateFrom[i]);
      container.appendChild(el);
    }
    for (i = hours.length; i < blocks.length; i++) blocks[i].remove();
    blocks = container.querySelectorAll('.block');
    var apply = function () {
      for (var j = 0; j < hours.length; j++) placeBlock(blocks[j], hours[j]);
    };
    if (animateFrom && !reduceMotion) {
      // let the starting positions paint first, then move
      requestAnimationFrame(function () { requestAnimationFrame(apply); });
    } else {
      apply();
    }
    if (!hours.length) {
      var n = document.createElement('div');
      n.className = 'empty-note';
      n.textContent = 'No hot water used, so no heating.';
      container.appendChild(n);
      container.setAttribute('aria-label', label + ': no heating, because no hot water is used.');
    } else {
      container.setAttribute('aria-label', label + ' heats at ' + hours.map(pad).join(', ') + '.');
    }
  }

  function renderLevels(levels, C) {
    if (!levelEl.childElementCount) {
      for (var h = 0; h < HOURS; h++) {
        var bar = document.createElement('div');
        bar.className = 'bar';
        levelEl.appendChild(bar);
      }
      var res = document.createElement('div');
      res.className = 'reserve';
      res.innerHTML = '<span>kept in reserve</span>';
      levelEl.appendChild(res);
    }
    levelEl.querySelector('.reserve').style.bottom = Math.round(RESERVE / C * 100) + '%';
    for (var i = 0; i < HOURS; i++) {
      var b = levelEl.children[i];
      var lv = levels ? levels[i] : 0;
      var pct = Math.max(6, Math.round(lv / C * 100));
      b.style.height = pct + '%';
      b.title = pad(i) + ': ' + lv + ' of ' + C + ' uses in the tank';
    }
  }

  function countByBand(hours, type) {
    var c = { off: 0, shoulder: 0, peak: 0 };
    hours.forEach(function (h) { c[type[h]] += 1; });
    return c;
  }

  function update() {
    var t = TARIFFS[state.tariff];
    var pt = priceAt(t.bands);
    var C = state.capacity;

    renderBands();
    renderDraws();

    var standardHours = state.draws.slice();
    var ts = state.draws.length ? tankshiftSchedule(state.draws, pt.price, C) : { hours: [], levels: null };

    renderBlocks(stdEl, standardHours, 'Standard heater');
    // On the first paint, start Tankshift's blocks where the standard heater
    // would run and let them slide to the cheaper hours: the one moment of motion.
    renderBlocks(tsEl, ts.hours, 'Tankshift', state.firstRender ? standardHours : null);
    state.firstRender = false;

    // Tank level: when nothing is drawn the tank just sits full.
    var levels = ts.levels;
    if (!levels) { levels = []; for (var i = 0; i < HOURS; i++) levels.push(C); }
    renderLevels(levels, C);

    var cs = countByBand(standardHours, pt.type);
    var ct = countByBand(ts.hours, pt.type);
    $('r-peak-s').textContent = cs.peak; $('r-peak-t').textContent = ct.peak;
    $('r-sh-s').textContent = cs.shoulder; $('r-sh-t').textContent = ct.shoulder;
    $('r-off-s').textContent = cs.off; $('r-off-t').textContent = ct.off;

    var n = state.draws.length;
    if (!n) {
      readoutNote.textContent = 'Tap an hour on the strip to add a hot water use.';
    } else if (ct.peak === 0 && cs.peak > 0) {
      readoutNote.textContent = 'Hot water was there for every use, and Tankshift did none of its heating at peak.';
    } else if (ct.peak > 0) {
      readoutNote.textContent = 'Hot water was there for every use. With this much use and a tank this size, some heating still lands at peak; a larger tank moves more of it.';
    } else {
      readoutNote.textContent = 'Hot water was there for every use. Neither heater needed to run at peak with this pattern.';
    }
  }

  /* ---------- controls ---------- */
  tariffSelect.addEventListener('change', function () {
    state.tariff = tariffSelect.value;
    update();
  });
  usageSelect.addEventListener('change', function () {
    if (USAGE[usageSelect.value]) {
      state.draws = USAGE[usageSelect.value].slice();
      update();
    }
  });
  Array.prototype.forEach.call(document.querySelectorAll('input[name="tank"]'), function (r) {
    r.addEventListener('change', function () {
      if (r.checked) { state.capacity = Number(r.value); update(); }
    });
  });

  renderRuler();
  update();

  /* ---------- install list form (local only) ---------- */
  var KEY = 'tankshift-install-list';
  var form = $('join-form');
  var done = $('join-done');
  var summary = $('join-summary');
  var postcode = $('postcode');
  var email = $('email');
  var heater = $('heater');

  function readSaved() {
    try { var raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function writeSaved(entry) {
    try { localStorage.setItem(KEY, JSON.stringify(entry)); return true; } catch (e) { return false; }
  }
  var ROLE_TEXT = { homeowner: 'a homeowner', electrician: 'an electrician', utility: 'with a utility programme' };

  function showDone(entry, focus) {
    var when = '';
    try { when = new Date(entry.savedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { when = ''; }
    summary.textContent = 'Joined ' + (when ? 'on ' + when + ' ' : '') + 'as ' + (ROLE_TEXT[entry.role] || entry.role) +
      ', postcode ' + entry.postcode + ', at ' + entry.email + '.' + (entry.heater ? ' Heater: ' + entry.heater + '.' : '');
    form.hidden = true;
    done.hidden = false;
    if (focus) done.focus();
  }

  function setError(input, errEl, show) {
    errEl.hidden = !show;
    input.setAttribute('aria-invalid', show ? 'true' : 'false');
    if (show) input.setAttribute('aria-describedby', errEl.id); else input.removeAttribute('aria-describedby');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var pc = postcode.value.trim();
    var em = email.value.trim();
    var pcOk = pc.length >= 3;
    var emOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    setError(postcode, $('postcode-error'), !pcOk);
    setError(email, $('email-error'), !emOk);
    if (!pcOk) { postcode.focus(); return; }
    if (!emOk) { email.focus(); return; }
    var role = (form.querySelector('input[name="role"]:checked') || {}).value || 'homeowner';
    var entry = { role: role, postcode: pc, email: em, heater: heater.value.trim(), savedAt: new Date().toISOString() };
    writeSaved(entry);
    showDone(entry, true);
  });

  $('join-edit').addEventListener('click', function () {
    var saved = readSaved();
    if (saved) {
      var r = form.querySelector('input[name="role"][value="' + saved.role + '"]');
      if (r) r.checked = true;
      postcode.value = saved.postcode || '';
      email.value = saved.email || '';
      heater.value = saved.heater || '';
    }
    done.hidden = true;
    form.hidden = false;
    postcode.focus();
  });

  var existing = readSaved();
  if (existing && existing.email) showDone(existing, false);
})();
