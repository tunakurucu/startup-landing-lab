// Drumbeat landing page: local behaviour only. Nothing here talks to a server.
// 1. Job trace: a browser simulation of one job's lifecycle under three scenarios.
// 2. Retry planner: computes attempt times from a policy the visitor picks.
// 3. Copy buttons and the phone menu.
(function () {
  'use strict';

  var JOB = { id: 'job_8f3c2a', name: 'send-receipt', data: "{ to: 'ada@shop.example' }" };
  var ERR = 'ETIMEDOUT smtp.example:587';

  // t is milliseconds since the job was added. Simulated, not measured.
  var SCENARIOS = {
    first: {
      note: 'One attempt, no retry. The checkout request returned at +0.000 s and never waited for the email.',
      events: [
        { t: 0, state: 'queued', desc: 'Added by POST /checkout. The request responds without waiting.', attempt: '0 of 3', next: 'now', err: '—', result: '—' },
        { t: 3, state: 'active', desc: 'Attempt 1 of 3 starts in a worker.', attempt: '1 of 3', next: '—', err: '—', result: '—' },
        { t: 48, state: 'completed', desc: 'Handler returned. The result is stored on the job.', attempt: '1 of 3', next: '—', err: '—', result: "{ sentTo: 'ada@shop.example' }" }
      ],
      segments: [ { from: 3, to: 48, kind: 'run', label: '#1', outcome: 'completed' } ]
    },
    once: {
      note: 'Same ID from start to finish. The attempt-1 error stays in the history after attempt 2 succeeds.',
      events: [
        { t: 0, state: 'queued', desc: 'Added by POST /checkout. The request responds without waiting.', attempt: '0 of 3', next: 'now', err: '—', result: '—' },
        { t: 3, state: 'active', desc: 'Attempt 1 of 3 starts in a worker.', attempt: '1 of 3', next: '—', err: '—', result: '—' },
        { t: 5003, state: 'retrying', desc: 'Attempt 1 threw ETIMEDOUT after 5 s. Two attempts left; the next starts in 1 s.', attempt: '1 of 3', next: '+6.003 s', err: ERR, result: '—' },
        { t: 6003, state: 'active', desc: 'Attempt 2 of 3 starts with the same job ID and data.', attempt: '2 of 3', next: '—', err: ERR, result: '—' },
        { t: 6051, state: 'completed', desc: 'Handler returned on attempt 2. The job is done.', attempt: '2 of 3', next: '—', err: ERR + ' (attempt 1)', result: "{ sentTo: 'ada@shop.example' }" }
      ],
      segments: [
        { from: 3, to: 5003, kind: 'run', label: '#1', outcome: 'failed' },
        { from: 5003, to: 6003, kind: 'wait', label: '1 s' },
        { from: 6003, to: 6051, kind: 'run', label: '#2', outcome: 'completed' }
      ]
    },
    exhaust: {
      note: 'Backoff doubles between attempts (1 s, then 2 s). After the third failure nothing is rescheduled; the job stays failed with its last error until you act on it.',
      events: [
        { t: 0, state: 'queued', desc: 'Added by POST /checkout. The request responds without waiting.', attempt: '0 of 3', next: 'now', err: '—', result: '—' },
        { t: 3, state: 'active', desc: 'Attempt 1 of 3 starts in a worker.', attempt: '1 of 3', next: '—', err: '—', result: '—' },
        { t: 5003, state: 'retrying', desc: 'Attempt 1 threw ETIMEDOUT. Two attempts left; the next starts in 1 s.', attempt: '1 of 3', next: '+6.003 s', err: ERR, result: '—' },
        { t: 6003, state: 'active', desc: 'Attempt 2 of 3 starts with the same job ID and data.', attempt: '2 of 3', next: '—', err: ERR, result: '—' },
        { t: 11003, state: 'retrying', desc: 'Attempt 2 threw ETIMEDOUT. One attempt left; the next starts in 2 s.', attempt: '2 of 3', next: '+13.003 s', err: ERR, result: '—' },
        { t: 13003, state: 'active', desc: 'Attempt 3 of 3 starts. This is the last one.', attempt: '3 of 3', next: '—', err: ERR, result: '—' },
        { t: 18003, state: 'failed', desc: 'Attempt 3 threw. No attempts left: the job stops as failed.', attempt: '3 of 3', next: 'none', err: ERR, result: '—' }
      ],
      segments: [
        { from: 3, to: 5003, kind: 'run', label: '#1', outcome: 'failed' },
        { from: 5003, to: 6003, kind: 'wait', label: '1 s' },
        { from: 6003, to: 11003, kind: 'run', label: '#2', outcome: 'failed' },
        { from: 11003, to: 13003, kind: 'wait', label: '2 s' },
        { from: 13003, to: 18003, kind: 'run', label: '#3', outcome: 'failed' }
      ]
    }
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function secs(ms) { return '+' + (ms / 1000).toFixed(3) + ' s'; }
  function pct(v, total) { return total ? Math.max(0, Math.min(100, (v / total) * 100)) : 0; }

  function beatHTML(sc) {
    var total = sc.events[sc.events.length - 1].t;
    var html = '<div class="beat-line"></div>';
    sc.segments.forEach(function (s) {
      var left = pct(s.from, total), width = pct(s.to, total) - left;
      if (s.kind === 'wait') {
        html += '<div class="beat-gap" style="left:' + left.toFixed(2) + '%;width:' + width.toFixed(2) + '%"><span>' + esc(s.label) + ' backoff</span></div>';
      } else {
        var mark = s.outcome === 'completed' ? ' ✓' : ' ✕';
        html += '<div class="beat-run s-' + s.outcome + '" style="left:' + left.toFixed(2) + '%;width:' + Math.max(width, 0.6).toFixed(2) + '%"></div>';
        html += '<div class="beat-tick' + (left > 70 ? ' flip' : '') + '" style="left:' + left.toFixed(2) + '%"><span>' + esc(s.label) + mark + '</span></div>';
        html += '<div class="beat-tick is-' + s.outcome + ' is-end" style="left:' + pct(s.to, total).toFixed(2) + '%"></div>';
      }
    });
    return html;
  }

  function eventsHTML(sc, sel) {
    return sc.events.map(function (e, i) {
      return '<li><button type="button" class="event-btn" data-index="' + i + '"' + (i === sel ? ' aria-current="step"' : '') + '>' +
        '<span class="t">' + secs(e.t) + '</span>' +
        '<span class="state s-' + e.state + '">' + e.state + '</span>' +
        '<span class="desc">' + esc(e.desc) + '</span></button></li>';
    }).join('');
  }

  function snapshotHTML(e) {
    var rows = [
      ['id', JOB.id], ['name', JOB.name], ['state', '<span class="state s-' + e.state + '">' + e.state + '</span>'],
      ['attempt', e.attempt], ['data', esc(JOB.data)], ['next run', e.next], ['last error', esc(e.err)], ['result', esc(e.result)]
    ];
    return rows.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>'; }).join('');
  }

  function planDelays(attempts, base, strategy) {
    var delays = [];
    for (var n = 1; n < attempts; n++) delays.push(strategy === 'exponential' ? base * Math.pow(2, n - 1) : base);
    return delays;
  }
  function dur(ms) {
    if (ms === 0) return '0 s';
    if (ms < 1000) return ms + ' ms';
    var s = ms / 1000;
    if (s < 60) return (Math.round(s * 100) / 100) + ' s';
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = Math.round(s % 60);
    return (h ? h + ' h ' : '') + (m ? m + ' min' : '') + (r ? (m || h ? ' ' : '') + r + ' s' : '');
  }
  function planHTML(attempts, base, strategy) {
    var delays = planDelays(attempts, base, strategy);
    var starts = [0];
    delays.forEach(function (d, i) { starts.push(starts[i] + d); });
    var total = starts[starts.length - 1];
    var beat = '<div class="beat-line"></div>';
    starts.forEach(function (t, i) {
      if (i > 0) {
        var l = pct(starts[i - 1], total), w = pct(t, total) - l;
        beat += '<div class="beat-gap" style="left:' + l.toFixed(2) + '%;width:' + w.toFixed(2) + '%">' + (w >= 14 ? '<span>' + dur(delays[i - 1]) + '</span>' : '') + '</div>';
      }
      var left = total ? pct(t, total) : 0;
      var last = i === starts.length - 1;
      beat += '<div class="beat-tick' + (last ? ' is-failed' : '') + (left > 70 ? ' flip' : '') + '" style="left:' + left.toFixed(2) + '%">' + (i === 0 || last || attempts <= 5 ? '<span>#' + (i + 1) + '</span>' : '') + '</div>';
    });
    var list = starts.map(function (t, i) { return '<li><span>attempt ' + (i + 1) + '</span><span>+' + dur(t) + '</span></li>'; }).join('');
    var summary = attempts === 1
      ? 'One attempt and no retries: if it throws, the job is marked <span class="state s-failed">failed</span> straight away.'
      : 'If every attempt throws, attempt ' + attempts + ' starts <strong>' + dur(total) + '</strong> after the first, and the job is marked <span class="state s-failed">failed</span> when it throws. Add your handler’s own run time to each attempt.';
    return { beat: beat, list: list, summary: summary, scale: dur(total) };
  }

  // Exposed for the static pre-render step; harmless in the browser.
  var api = { SCENARIOS: SCENARIOS, beatHTML: beatHTML, eventsHTML: eventsHTML, snapshotHTML: snapshotHTML, planHTML: planHTML, secs: secs };
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; return; }

  // ---------- browser wiring ----------
  var current = { key: 'once', index: 2 };
  var trace = document.getElementById('trace');

  function renderTrace() {
    var sc = SCENARIOS[current.key];
    var e = sc.events[current.index];
    var total = sc.events[sc.events.length - 1].t;
    trace.querySelector('.beat-marks').innerHTML = beatHTML(sc);
    trace.querySelector('.playhead').style.setProperty('--x', pct(e.t, total).toFixed(2) + '%');
    trace.querySelector('.beat-end').textContent = secs(total);
    trace.querySelector('.events').innerHTML = eventsHTML(sc, current.index);
    trace.querySelector('.snapshot dl').innerHTML = snapshotHTML(e);
    trace.querySelector('.snapshot-title').textContent = 'The job as it was at ' + secs(e.t) + ' (' + e.state + ')';
    trace.querySelector('.snapshot-note').textContent = sc.note;
    trace.querySelectorAll('.scenario-btn').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.scenario === current.key)); });
  }

  if (trace) {
    trace.addEventListener('click', function (ev) {
      var sBtn = ev.target.closest('.scenario-btn');
      if (sBtn) {
        current.key = sBtn.dataset.scenario;
        var evs = SCENARIOS[current.key].events;
        // Land on the most telling event: the first retry or the final state.
        var idx = evs.findIndex(function (x) { return x.state === 'retrying'; });
        current.index = idx === -1 ? evs.length - 1 : idx;
        renderTrace();
        return;
      }
      var eBtn = ev.target.closest('.event-btn');
      if (eBtn) {
        current.index = Number(eBtn.dataset.index);
        renderTrace();
        var again = trace.querySelector('.event-btn[data-index="' + current.index + '"]');
        if (again) again.focus();
      }
    });
    // Arrow keys move through events, like stepping through a log.
    trace.addEventListener('keydown', function (ev) {
      if (!ev.target.classList.contains('event-btn')) return;
      if (ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp') return;
      ev.preventDefault();
      var n = SCENARIOS[current.key].events.length;
      current.index = (current.index + (ev.key === 'ArrowDown' ? 1 : n - 1)) % n;
      renderTrace();
      trace.querySelector('.event-btn[data-index="' + current.index + '"]').focus();
    });
  }

  // Retry planner
  var planner = document.getElementById('policy');
  function renderPlan() {
    var a = Number(document.getElementById('p-attempts').value);
    var b = Number(document.getElementById('p-base').value);
    var s = document.getElementById('p-strategy').value;
    var out = planHTML(a, b, s);
    document.getElementById('plan-beat').innerHTML = out.beat;
    document.getElementById('plan-list').innerHTML = out.list;
    document.getElementById('plan-summary').innerHTML = out.summary;
    document.getElementById('plan-end').textContent = '+' + out.scale;
  }
  if (planner) planner.addEventListener('change', renderPlan);

  // Copy buttons: copy the text of the element named in data-copy, announce the result.
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove(); return ok;
  }
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-copy]');
    if (!btn) return;
    var src = document.getElementById(btn.dataset.copy);
    var status = document.getElementById(btn.dataset.status);
    var text = src.innerText.replace(/^\$\s*/, '').trim();
    function done(ok) { if (status) status.textContent = ok ? 'Copied to your clipboard.' : 'Could not reach the clipboard here. Select the text and copy it.'; }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
    else done(fallbackCopy(text));
  });

  // Phone menu
  var menuBtn = document.querySelector('.menu-button');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') !== 'true';
      menuBtn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        menuBtn.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); menuBtn.focus();
      }
    });
    nav.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) { menuBtn.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
  }
})();
