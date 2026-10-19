/* Drumbeat landing page: an in-browser model of one job's lifecycle.
   It does not run Drumbeat and sends no requests. Settings and timings are illustrative.
   The same render functions are used by build-prerender.js to write the no-script default into index.html. */
(function (root) {
  'use strict';

  var MODEL = { maxAttempts: 4, baseDelay: 2000, domain: 16000, firstStart: 30, respondAt: 4, okMs: 560, throwMs: 380 };
  var ERRORS = ['SMTP 451: temporary local error', 'ECONNRESET from mail provider', 'SMTP 421: service busy', 'ECONNRESET from mail provider'];
  var STATE_LABEL = { queued: 'queued', running: 'running', waiting: 'waiting to retry', done: 'done', failed: 'failed' };

  var SCENARIOS = {
    first: { label: 'Succeeds first try', outcomes: ['ok'] },
    recovers: { label: 'Recovers on attempt 3', outcomes: ['throw', 'throw', 'ok'] },
    exhausts: { label: 'Runs out of attempts', outcomes: ['throw', 'throw', 'throw', 'throw'] }
  };

  function secs(ms) { return (ms / 1000).toFixed(ms < 1000 ? 3 : 2) + ' s'; }
  function shortSecs(ms) { return (ms / 1000) + ' s'; }

  function buildEvents(key) {
    var out = SCENARIOS[key].outcomes;
    var ev = [
      { t: 0, kind: 'enqueue', lane: 'job', attempt: 0, state: 'queued', text: 'Enqueued send-receipt as job 0412', detail: 'Payload { order: "ord_1042", to: "buyer@shop.example" }' },
      { t: MODEL.respondAt, kind: 'respond', lane: 'request', attempt: 0, state: 'queued', text: 'Request answered', detail: 'The checkout handler returned 202 without waiting for the email.' }
    ];
    var t = MODEL.firstStart;
    for (var i = 0; i < out.length; i++) {
      var n = i + 1;
      ev.push({ t: t, kind: 'start', lane: 'job', attempt: n, state: 'running', text: 'Attempt ' + n + ' of ' + MODEL.maxAttempts + ' started', detail: 'A worker picked up job 0412.' });
      if (out[i] === 'ok') {
        t += MODEL.okMs;
        ev.push({ t: t, kind: 'complete', lane: 'job', attempt: n, state: 'done', text: 'Attempt ' + n + ' completed', detail: 'Receipt handed to the mail provider. Job 0412 is done.' });
      } else if (n < MODEL.maxAttempts) {
        t += MODEL.throwMs;
        var wait = MODEL.baseDelay * Math.pow(2, i);
        ev.push({ t: t, kind: 'throw', lane: 'job', attempt: n, state: 'waiting', error: ERRORS[i], wait: wait, next: t + wait, text: 'Attempt ' + n + ' threw ' + ERRORS[i], detail: 'Attempt ' + (n + 1) + ' scheduled for ' + secs(t + wait) + ', after waiting ' + shortSecs(wait) + '.' });
        t += wait;
      } else {
        t += MODEL.throwMs;
        ev.push({ t: t, kind: 'fail', lane: 'job', attempt: n, state: 'failed', error: ERRORS[i], text: 'Attempt ' + n + ' threw ' + ERRORS[i], detail: 'No attempts left. Job 0412 is failed and keeps all ' + n + ' errors for you to read.' });
      }
    }
    return ev;
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function pct(ms) { return (Math.min(ms, MODEL.domain) / MODEL.domain * 100).toFixed(3) + '%'; }

  // Summary of the job after `step` events have happened.
  function snapshot(events, step) {
    var cur = events[step - 1];
    var lastErr = null, attempt = 0, next = null;
    for (var i = 0; i < step; i++) {
      if (events[i].attempt) attempt = events[i].attempt;
      if (events[i].error) lastErr = events[i].error;
    }
    if (cur.kind === 'throw') next = cur.next;
    return { cur: cur, state: cur.state, attempt: attempt, lastErr: lastErr, next: next };
  }

  function chip(state) { return '<span class="chip s-' + state + '">' + STATE_LABEL[state] + '</span>'; }

  function railH(events, step) {
    var html = '';
    var ticks = '';
    for (var s = 0; s <= MODEL.domain; s += 2000) {
      ticks += '<span class="tick" style="--x:' + pct(s) + '"><span>' + (s / 1000) + ' s</span></span>';
    }
    var req = '', job = '';
    var shown = events.slice(0, step);
    var respond = shown.filter(function (e) { return e.kind === 'respond'; })[0];
    req += '<span class="req-bar" style="--x:0%;--w:' + pct(MODEL.respondAt) + '"></span>';
    req += respond
      ? '<span class="lane-note" style="--x:' + pct(MODEL.respondAt) + '">answered at ' + MODEL.respondAt + ' ms, job still queued</span>'
      : '<span class="lane-note" style="--x:' + pct(MODEL.respondAt) + '">request in progress</span>';
    job += '<span class="seg seg-queued" style="--x:0%;--w:' + pct(MODEL.firstStart) + '"></span>';
    for (var i = 0; i < shown.length; i++) {
      var e = shown[i];
      if (e.kind !== 'start') continue;
      var end = events[i + 1];
      var ended = i + 1 < step;
      var cls = !ended ? 's-running' : (end.kind === 'complete' ? 's-done' : 's-failed');
      job += '<span class="seg seg-attempt ' + cls + '" style="--x:' + pct(e.t) + ';--w:' + pct(end.t - e.t) + '"><span class="seg-num">#' + e.attempt + '</span></span>';
      if (ended && end.kind === 'throw') {
        job += '<span class="seg seg-wait" style="--x:' + pct(end.t) + ';--w:' + pct(end.wait) + '"><span class="wait-label">wait ' + shortSecs(end.wait) + '</span></span>';
      }
      if (ended && (end.kind === 'complete' || end.kind === 'fail')) {
        job += '<span class="flag ' + (end.kind === 'complete' ? 's-done' : 's-failed') + (end.t / MODEL.domain > 0.85 ? ' flag-left' : '') + '" style="--x:' + pct(end.t) + '">' + (end.kind === 'complete' ? 'done' : 'failed') + '</span>';
      }
    }
    var cur = events[step - 1];
    html += '<div class="axis" aria-hidden="true">' + ticks + '</div>';
    html += '<div class="lanes">';
    html += '<div class="lane"><span class="lane-name">request</span><div class="lane-track">' + req + '</div></div>';
    html += '<div class="lane"><span class="lane-name">job 0412</span><div class="lane-track">' + job + '</div></div>';
    var px = Math.min(cur.t, MODEL.domain) / MODEL.domain * 100;
    html += '<div class="playhead-track" aria-hidden="true"><span class="playhead" style="--x:' + px.toFixed(3) + '"></span></div>';
    html += '</div>';
    return html;
  }

  function readout(events, step) {
    var s = snapshot(events, step);
    return '<div><dt>Time</dt><dd>' + secs(s.cur.t) + '</dd></div>' +
      '<div><dt>State</dt><dd>' + chip(s.state) + '</dd></div>' +
      '<div><dt>Attempt</dt><dd>' + (s.attempt ? s.attempt + ' of ' + MODEL.maxAttempts : 'not started') + '</dd></div>' +
      '<div><dt>Next run</dt><dd>' + (s.next ? 'at ' + secs(s.next) : '—') + '</dd></div>' +
      '<div><dt>Last error</dt><dd>' + (s.lastErr ? esc(s.lastErr) : 'none') + '</dd></div>';
  }

  function ledger(events, step) {
    var html = '';
    for (var i = 0; i < step; i++) {
      var e = events[i];
      var current = i === step - 1;
      html += '<li class="row' + (current ? ' is-current' : '') + '"' + (current ? ' aria-current="step"' : '') + '>' +
        '<span class="c-t">' + secs(e.t) + '</span>' +
        '<span class="c-id">' + (e.lane === 'request' ? 'request' : 'job 0412') + (e.attempt ? ' · #' + e.attempt : '') + '</span>' +
        '<span class="c-ev"><strong>' + esc(e.text) + '</strong><span class="c-detail">' + esc(e.detail) + '</span></span>' +
        '<span class="c-state">' + chip(e.state) + '</span></li>';
      if (e.kind === 'throw' && i + 1 < step) {
        // On phones this gap is drawn to scale, so the ledger doubles as the rail and the backoff reads as a slowing beat.
        html += '<li class="gap" style="--gap:' + (e.wait / 1000 * 12 + 20) + 'px"><span>waits ' + shortSecs(e.wait) + '</span></li>';
      }
    }
    return html;
  }

  function status(key, events, step) {
    var s = snapshot(events, step);
    return SCENARIOS[key].label + ', event ' + step + ' of ' + events.length + ' at ' + secs(s.cur.t) + ': ' + s.cur.text + '. Job state: ' + STATE_LABEL[s.state] + (s.next ? ', next run at ' + secs(s.next) : '') + '.';
  }

  function renderAll(key, step) {
    var events = buildEvents(key);
    if (step == null || step > events.length) step = events.length;
    return { events: events, step: step, railH: railH(events, step), readout: readout(events, step), ledger: ledger(events, step), status: status(key, events, step) };
  }

  root.DrumbeatModel = { renderAll: renderAll, SCENARIOS: SCENARIOS, MODEL: MODEL };

  if (typeof document === 'undefined') return;

  var state = { key: 'recovers', step: null };
  function $(id) { return document.getElementById(id); }

  function paint() {
    var r = renderAll(state.key, state.step);
    state.step = r.step;
    $('rail-h').innerHTML = r.railH;
    $('readout').innerHTML = r.readout;
    $('ledger').innerHTML = r.ledger;
    $('trace-status').textContent = r.status;
    // aria-disabled rather than disabled, so keyboard focus is not lost when a bound is reached.
    $('step-prev').setAttribute('aria-disabled', String(r.step <= 1));
    $('step-next').setAttribute('aria-disabled', String(r.step >= r.events.length));
    $('step-count').textContent = 'Event ' + r.step + ' of ' + r.events.length;
  }

  function init() {
    if (!$('rail-h')) return;
    var radios = document.querySelectorAll('input[name="scenario"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', function (ev) { state.key = ev.target.value; state.step = 2; paint(); });
    }
    $('step-prev').addEventListener('click', function () { if (state.step > 1) { state.step -= 1; paint(); } });
    $('step-next').addEventListener('click', function () { var n = renderAll(state.key).events.length; if (state.step < n) { state.step += 1; paint(); } });
    $('step-restart').addEventListener('click', function () { state.step = 1; paint(); });
    document.documentElement.classList.add('js');
    paint();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})(typeof window !== 'undefined' ? window : globalThis);
