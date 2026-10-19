// Halfstep sample take: choose a passage, choose a tempo step, hear it locally. Nothing leaves the browser.
(function () {
  'use strict';

  // Right-hand melody, bars 1–16 of Minuet in G (BWV Anh. 114): [MIDI note, length in quavers].
  var A = [[74, 2], [67, 1], [69, 1], [71, 1], [72, 1]], B = [[74, 2], [67, 2], [67, 2]],
      C = [[76, 2], [72, 1], [74, 1], [76, 1], [78, 1]], D = [[79, 2], [67, 2], [67, 2]],
      E = [[72, 2], [74, 1], [72, 1], [71, 1], [69, 1]], F = [[71, 2], [72, 1], [71, 1], [69, 1], [67, 1]];
  var MELODY = { 1: A, 2: B, 3: C, 4: D, 5: E, 6: F, 7: [[66, 2], [67, 1], [69, 1], [71, 1], [67, 1]], 8: [[69, 6]],
    9: A, 10: B, 11: C, 12: D, 13: E, 14: F, 15: [[69, 2], [71, 1], [69, 1], [67, 1], [66, 1]], 16: [[67, 6]] };
  var TAKE_BPM = 104;

  // Illustrative findings for the sample take, written for this page.
  var GROUPS = {
    g57: { bars: [5, 6, 7], name: 'Bars 5–7', noticed: 'The quavers hurried ahead of the beat each time the run began.', steps: [66, 78, 90, 104] },
    g11: { bars: [11], name: 'Bar 11', noticed: 'A touch uneven on the climb up to the F♯. One slow pass should settle it.', steps: [84, 104] },
    g1415: { bars: [14, 15], name: 'Bars 14–15', noticed: 'A small pause before bar 15, where the hand moves down to the F♯.', steps: [60, 74, 88, 104] }
  };
  function selection(id) {
    if (GROUPS[id]) return GROUPS[id];
    var n = Number(id.slice(1));
    return { bars: [n], name: 'Bar ' + n, noticed: 'Steady in this take. Nothing to practise here, so leave it be.', steps: [], steady: true };
  }

  var $ = function (s) { return document.querySelector(s); };
  var cells = document.querySelectorAll('.score .cell');
  var title = $('#plan-title'), noticed = $('#plan-noticed'), ladder = $('#plan-ladder'), rungs = $('#plan-rungs'),
      ladderNote = $('#plan-ladder-note'), play = $('#play'), playLabel = $('#play-label'), status = $('#status');
  var current = 'g57', bpm = 66;

  function range(sel) { var b = sel.bars; return b.length > 1 ? (b.length === 2 ? 'bars ' + b[0] + '–' + b[1] : 'bars ' + b[0] + '–' + b[b.length - 1]) : 'bar ' + b[0]; }
  function setPlayLabel() { var sel = selection(current); playLabel.textContent = 'Hear ' + range(sel) + ' at ' + bpm; }

  function renderRungs(sel) {
    rungs.textContent = '';
    sel.steps.forEach(function (v, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'rung'; b.dataset.bpm = v; b.textContent = v;
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      rungs.appendChild(b);
    });
  }

  function choose(id, announce) {
    stop(true);
    current = id;
    var sel = selection(id);
    cells.forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.sel === id ? 'true' : 'false'); });
    title.textContent = sel.name;
    noticed.textContent = sel.noticed;
    if (sel.steady) {
      ladder.hidden = true; bpm = TAKE_BPM;
    } else {
      ladder.hidden = false; renderRungs(sel); bpm = sel.steps[0];
      ladderNote.textContent = sel.steps.length > 2
        ? 'Start at ' + bpm + '. Move up a step when it feels easy; ' + TAKE_BPM + ' is the tempo of your take. There’s no test to pass.'
        : 'One pass at ' + bpm + ', then back to the tempo of your take. There’s no test to pass.';
    }
    setPlayLabel();
    if (announce) status.textContent = sel.steady
      ? sel.name + ' was steady. You can still hear it at the tempo of your take.'
      : sel.name + ' selected. Start at ' + bpm + ' beats per minute.';
  }

  cells.forEach(function (c) { c.addEventListener('click', function () { choose(c.dataset.sel, true); }); });
  rungs.addEventListener('click', function (e) {
    var r = e.target.closest('.rung'); if (!r) return;
    stop(true);
    bpm = Number(r.dataset.bpm);
    rungs.querySelectorAll('.rung').forEach(function (x) { x.setAttribute('aria-pressed', x === r ? 'true' : 'false'); });
    setPlayLabel();
    status.textContent = 'Tempo set to ' + bpm + ' beats per minute.';
  });

  // Playback: a soft synthesised piano-like tone; notes light up as they sound.
  var ctx = null, voices = [], timers = [], playing = false;
  function lightNote(bar, i, on) {
    var g = document.querySelector('.notes[data-bar="' + bar + '"]');
    var n = g && g.querySelector('[data-i="' + i + '"]');
    if (n) n.classList.toggle('on', on);
  }
  function stop(silent) {
    timers.forEach(clearTimeout); timers = [];
    voices.forEach(function (v) { try { v.stop(); } catch (e) { /* already stopped */ } }); voices = [];
    document.querySelectorAll('.staff .n.on').forEach(function (n) { n.classList.remove('on'); });
    if (playing && !silent) status.textContent = 'Stopped.';
    playing = false; play.classList.remove('playing'); setPlayLabel();
  }
  function start() {
    var sel = selection(current);
    var AC = window.AudioContext || window.webkitAudioContext;
    var audible = false;
    if (AC) { try { ctx = ctx || new AC(); if (ctx.resume) ctx.resume(); audible = true; } catch (e) { audible = false; } }
    var q = 30 / bpm, t0 = audible ? ctx.currentTime + 0.12 : 0, t = 0;
    sel.bars.forEach(function (bar) {
      MELODY[bar].forEach(function (note, i) {
        var len = note[1] * q, at = t;
        if (audible) {
          var osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = 440 * Math.pow(2, (note[0] - 69) / 12);
          gain.gain.setValueAtTime(0.0001, t0 + at);
          gain.gain.exponentialRampToValueAtTime(0.22, t0 + at + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.0001, t0 + at + Math.max(len * 0.95, 0.12));
          osc.connect(gain).connect(ctx.destination);
          osc.start(t0 + at); osc.stop(t0 + at + len + 0.05);
          voices.push(osc);
        }
        timers.push(setTimeout(function () { lightNote(bar, i, true); }, (at + 0.12) * 1000));
        timers.push(setTimeout(function () { lightNote(bar, i, false); }, (at + 0.12 + len * 0.97) * 1000));
        t += len;
      });
    });
    playing = true; play.classList.add('playing'); playLabel.textContent = 'Stop';
    status.textContent = (audible ? 'Playing ' : 'This browser can’t play sound, so the notes light up in time instead: ') + range(sel) + ' at ' + bpm + ' beats per minute.';
    timers.push(setTimeout(function () {
      var next = sel.steps && sel.steps[sel.steps.indexOf(bpm) + 1];
      stop(true);
      status.textContent = next
        ? 'Done. Play it again at ' + bpm + ', or try ' + next + ' when it feels easy.'
        : 'Done. That was ' + range(sel) + ' at ' + bpm + '.';
    }, (t + 0.2) * 1000));
  }
  play.addEventListener('click', function () { if (playing) stop(false); else start(); });

  // Beta: build the email note from the chosen role. There is no backend; the visitor's own email app sends it.
  var link = $('#beta-link'), betaStatus = $('#beta-status');
  var ADDRESS = 'beta@halfstep.example';
  function betaHref() {
    var role = (document.querySelector('input[name="role"]:checked') || {}).value;
    var who = role === 'teacher' ? 'I teach adults who are coming back to the piano.' : 'I’m coming back to the piano.';
    var subject = 'Halfstep beta: ' + (role === 'teacher' ? 'piano teacher' : 'coming back to the piano');
    return 'mailto:' + ADDRESS + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('Please add me to the Halfstep beta. ' + who);
  }
  document.querySelectorAll('input[name="role"]').forEach(function (r) { r.addEventListener('change', function () { link.href = betaHref(); }); });
  link.addEventListener('click', function () {
    link.href = betaHref();
    betaStatus.textContent = 'Your email app should open with the note ready to send. If it doesn’t, write to ' + ADDRESS + '.';
  });
})();
