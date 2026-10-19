// Ledgerlight landing page: local behaviour only. Nothing here sends data anywhere.
(function () {
  'use strict';

  // ---- Mobile menu ----
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
    });
  }

  // ---- Lifecycle model (fictional sample) ----
  var T1 = { d: '2026-10-19', t: '19 Oct', p: 'Clause 14.2 read: 60 days’ written notice before 31 Jan 2027 avoids a 12-month renewal. Notice deadline set to 2 Dec.', who: 'Priya Raman, paralegal' };
  var T2 = { d: '2026-10-21', t: '21 Oct', p: 'Owner assigned: Dana Ortiz. Decision due 18 Nov, two weeks before the deadline.', who: 'Priya Raman' };
  var T2b = { d: '2026-10-22', t: '22 Oct', p: 'Note: the vendor’s last price change was at the 2025 renewal.', who: 'Dana Ortiz' };
  var DECIDE = {
    renew: { d: '2026-11-16', t: '16 Nov', p: 'Decision: renew as is. Pricing is in line with the last two vendor bids.', who: 'Dana Ortiz' },
    renegotiate: { d: '2026-11-16', t: '16 Nov', p: 'Decision: renegotiate the per-page price. Send notice to keep the option to leave.', who: 'Dana Ortiz' },
    terminate: { d: '2026-11-16', t: '16 Nov', p: 'Decision: do not renew. Print moves to the facilities contract.', who: 'Dana Ortiz' }
  };
  var NOTICE = {
    renew: { d: '2026-11-24', t: '24 Nov', p: 'No notice sent, on purpose. Renewal to 31 Jan 2028 confirmed; next notice deadline 2 Dec 2027.', who: 'Dana Ortiz' },
    renegotiate: { d: '2026-11-24', t: '24 Nov', p: 'Notice of non-renewal sent under clause 22 by email and courier. Price talks open with the vendor.', who: 'Dana Ortiz' },
    terminate: { d: '2026-11-24', t: '24 Nov', p: 'Notice of non-renewal sent under clause 22 by email and courier. Vendor acknowledged receipt.', who: 'Dana Ortiz' }
  };
  var NEXT3 = {
    renew: 'Confirm no notice is sent — Dana, before 2 Dec',
    renegotiate: 'Send notice to keep leverage — Dana, before 2 Dec',
    terminate: 'Send notice of non-renewal — Dana, before 2 Dec'
  };
  var NEXT4 = {
    renew: 'Next review starts 11 Nov 2027',
    renegotiate: 'Agree new terms before the term ends on 31 Jan 2027',
    terminate: 'None — the agreement ends 31 Jan 2027'
  };
  var STATUS4 = { renew: 'Renewed on purpose', renegotiate: 'Notice sent in time · renegotiating', terminate: 'Notice sent in time · ending 31 Jan' };

  function stateFor(step, decision) {
    switch (step) {
      case 1: return { asof: 'as of 19 Oct 2026', today: ['2026-10-19', '19 Oct', 0], status: 'No owner yet', owner: 'Unassigned', next: 'Assign an owner — Priya, this week', trail: [T1],
        explain: 'The clause is read once and the notice deadline is written down, before anyone has to remember it.' };
      case 2: return { asof: 'as of 22 Oct 2026', today: ['2026-10-22', '22 Oct', 3], status: 'Decision due 18 Nov', owner: 'Dana Ortiz, legal operations', next: 'Renew, renegotiate or give notice — Dana, by 18 Nov', trail: [T1, T2, T2b],
        explain: 'The owner is named and has a date to decide by, two weeks before notice is due.' };
      case 3: return { asof: 'as of 16 Nov 2026', today: ['2026-11-16', '16 Nov', 27], status: 'Notice due by 2 Dec', owner: 'Dana Ortiz, legal operations', next: NEXT3[decision], trail: [T1, T2, T2b, DECIDE[decision]],
        explain: 'The decision and its reason go into the trail, so the choice can be explained later.' };
      default: return { asof: 'as of 24 Nov 2026', today: ['2026-11-24', '24 Nov', 35], status: STATUS4[decision], owner: 'Dana Ortiz, legal operations', next: NEXT4[decision], trail: [T1, T2, T2b, DECIDE[decision], NOTICE[decision]],
        explain: 'The record closes with what was done before the deadline, and when the next one falls.' };
    }
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.step-list [role="tab"]'));
  var record = document.getElementById('record');
  var panel = document.getElementById('record-body');
  var decisionSet = record ? record.querySelector('.decision') : null;
  var live = document.getElementById('record-status');
  var current = 2;

  function field(name) { return record.querySelector('[data-f="' + name + '"]'); }
  function decisionValue() { var el = document.querySelector('input[name="decision"]:checked'); return el ? el.value : 'renegotiate'; }

  function trailItem(e) {
    var li = document.createElement('li');
    var time = document.createElement('time'); time.dateTime = e.d; time.textContent = e.t;
    var p = document.createElement('p'); p.textContent = e.p;
    var who = document.createElement('span'); who.className = 'who'; who.textContent = e.who;
    li.appendChild(time); li.appendChild(p); li.appendChild(who);
    return li;
  }

  function render(step, announce) {
    var prevCount = field('trail').children.length;
    var s = stateFor(step, decisionValue());
    field('asof').textContent = s.asof;
    field('status').textContent = s.status;
    field('owner').textContent = s.owner;
    field('next').textContent = s.next;
    var today = field('today');
    today.style.setProperty('--at', s.today[2]);
    today.classList.toggle('is-late', s.today[2] > 20);
    var tt = today.querySelector('time'); tt.dateTime = s.today[0]; tt.textContent = s.today[1];
    var list = field('trail');
    list.textContent = '';
    s.trail.forEach(function (e, i) {
      var li = trailItem(e);
      if (i >= prevCount) li.className = 'is-new';
      list.appendChild(li);
    });
    field('explain').textContent = s.explain;
    decisionSet.hidden = step < 3;
    tabs.forEach(function (t) {
      var on = Number(t.dataset.step) === step;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', 'tab-' + step);
    if (announce) live.textContent = 'Step ' + step + ': ' + s.status + '. Next: ' + s.next + '.';
    current = step;
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { render(Number(t.dataset.step), true); });
    t.addEventListener('keydown', function (e) {
      var k = e.key, j = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') j = (i + 1) % tabs.length;
      if (k === 'ArrowUp' || k === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (k === 'Home') j = 0;
      if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); tabs[j].focus(); render(j + 1, true); }
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('input[name="decision"]'), function (r) {
    r.addEventListener('change', function () { render(current, true); });
  });

  // ---- Notice-deadline checker (calendar arithmetic only) ----
  var DAY = 86400000;
  var fmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  function parseISO(v) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v || ''); return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) : null; }
  function minusMonths(d, n) {
    var y = d.getUTCFullYear(), m = d.getUTCMonth() - n, day = d.getUTCDate();
    var last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    return new Date(Date.UTC(y, m, Math.min(day, last)));
  }
  function show(d) { return fmt.format(d).replace(',', ''); }
  var form = document.getElementById('checker');
  var outDeadline = document.getElementById('out-deadline');
  var outReview = document.getElementById('out-review');
  var outLeft = document.getElementById('out-left');

  function compute() {
    var end = parseISO(document.getElementById('term-end').value);
    var n = parseInt(document.getElementById('notice-n').value, 10);
    var unit = document.getElementById('notice-unit').value;
    var buf = parseInt(document.getElementById('buffer').value, 10);
    if (!end || isNaN(n) || n < 0) {
      outDeadline.textContent = 'Enter the term end date and a notice period';
      outReview.textContent = '—'; outLeft.textContent = '—';
      return;
    }
    if (isNaN(buf) || buf < 0) buf = 0;
    var deadline = unit === 'months' ? minusMonths(end, n) : new Date(end.getTime() - n * DAY);
    var review = new Date(deadline.getTime() - buf * DAY);
    var now = new Date();
    var today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    var left = Math.round((deadline - today) / DAY);
    outDeadline.textContent = show(deadline);
    outReview.textContent = show(review);
    if (left > 0) outLeft.textContent = left + (left === 1 ? ' day' : ' days') + ' left to give notice (from ' + show(today).replace(/^\w+ /, '') + ')';
    else if (left === 0) outLeft.textContent = 'Today is the last day to give notice';
    else if (end > today) outLeft.textContent = 'The notice deadline passed ' + (-left) + (left === -1 ? ' day' : ' days') + ' ago; if the contract renews automatically, it does so on ' + show(end);
    else outLeft.textContent = 'Both dates have passed; the contract may already have renewed';
  }
  if (form) {
    form.addEventListener('input', compute);
    form.addEventListener('change', compute);
    form.addEventListener('submit', function (e) { e.preventDefault(); compute(); });
    compute();
  }

  // ---- Consultation request: prepared locally; no inbox is connected yet ----
  var consult = document.getElementById('consult-form');
  var result = document.getElementById('consult-result');
  if (consult) {
    consult.addEventListener('submit', function (e) {
      e.preventDefault();
      var team = (consult.querySelector('input[name="team"]:checked') || {}).value || 'Not given';
      var volume = consult.querySelector('select[name="volume"]').value;
      var topics = Array.prototype.map.call(consult.querySelectorAll('input[name="topic"]:checked'), function (c) { return c.value; });
      var text = 'Consultation request for Ledgerlight\n' +
        'Team: ' + team + '\n' +
        'Contracts renewing in a typical year: ' + volume + '\n' +
        'To look at: ' + (topics.length ? topics.join(', ') : 'not specified');
      result.textContent = '';
      var h = document.createElement('h3'); h.textContent = 'Request prepared — not sent';
      var p = document.createElement('p');
      p.textContent = 'This page is not connected to a Ledgerlight inbox yet, so nothing has left your browser. Here is the request as it would be sent:';
      var pre = document.createElement('pre'); pre.textContent = text;
      var copy = document.createElement('button'); copy.type = 'button'; copy.className = 'button button-quiet'; copy.textContent = 'Copy the request text';
      var note = document.createElement('p'); note.className = 'copy-note';
      copy.addEventListener('click', function () {
        var done = function () { note.textContent = 'Copied.'; };
        var fallback = function () {
          var range = document.createRange(); range.selectNodeContents(pre);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
          note.textContent = 'Text selected; press Ctrl+C or Cmd+C to copy.';
        };
        try {
          if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
          else fallback();
        } catch (err) { fallback(); }
      });
      result.appendChild(h); result.appendChild(p); result.appendChild(pre); result.appendChild(copy); result.appendChild(note);
    });
  }
})();
