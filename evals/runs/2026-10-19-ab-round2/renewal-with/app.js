(() => {
  'use strict';
  const DAY = 86400000;
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const utc = iso => { const [y, m, d] = iso.split('-').map(Number); return Date.UTC(y, m - 1, d); };
  const fmt = t => { const d = new Date(t); return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`; };
  const fmtLong = t => `${WEEKDAYS[new Date(t).getUTCDay()]} ${fmt(t)}`;
  const daysBetween = (a, b) => Math.round((b - a) / DAY);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    const setOpen = open => { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.textContent = open ? 'Close' : 'Menu'; };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); menuBtn.focus(); } });
  }

  /* ---------- Sample record: four steps of one fictional renewal ---------- */
  const RANGE = [utc('2026-10-01'), utc('2027-04-15')];
  const DEADLINE = utc('2026-12-31');
  const pos = t => ((t - RANGE[0]) / (RANGE[1] - RANGE[0]) * 100).toFixed(2);
  const STEPS = [
    { name: 'Logged', today: '2026-10-19', waiting: 'No one yet', waitingRole: 'Reminder set for the business owner on 16 Nov', next: 'Ask the business owner if the service is still needed', nextDue: 'Due 16 Nov 2026', shown: 2 },
    { name: 'In review', today: '2026-12-01', waiting: 'M. Reyes', waitingRole: 'Head of operations, business owner', next: 'Renew, renegotiate or give notice', nextDue: 'Due 17 Dec 2026', shown: 4 },
    { name: 'Decided', today: '2026-12-17', waiting: 'A. Lindqvist', waitingRole: 'General counsel, approves the notice', next: 'Approve and send the notice of non-renewal', nextDue: 'Due 22 Dec 2026', shown: 6 },
    { name: 'Notice sent', today: '2026-12-22', waiting: 'Harbor & Finch', waitingRole: 'Counterparty, preparing new pricing', next: 'Agree new terms or let the contract end', nextDue: 'Due 31 Mar 2027', shown: 8 }
  ];
  const record = document.getElementById('record-body');
  const tabs = [...document.querySelectorAll('.step[role="tab"]')];
  if (record && tabs.length) {
    const f = name => record.querySelector(`[data-f="${name}"]`);
    const items = [...record.querySelectorAll('.trail-list li')];
    const today = record.querySelector('.tl-today');
    let current = 1;
    const render = (i, announce) => {
      const s = STEPS[i];
      const t = utc(s.today);
      const left = daysBetween(t, DEADLINE);
      const sent = i === 3;
      today.style.setProperty('--at', pos(t));
      f('todayShort').textContent = fmt(t).replace(/ \d{4}$/, '');
      f('waiting').textContent = s.waiting;
      f('waitingRole').textContent = s.waitingRole;
      f('next').textContent = s.next;
      f('nextDue').textContent = s.nextDue;
      const due = f('left');
      due.textContent = sent ? `Notice given ${plural(left, 'day')} early` : `${plural(left, 'day')} left`;
      due.dataset.tone = sent ? 'settled' : 'open';
      items.forEach((li, n) => {
        li.hidden = n >= s.shown;
        li.classList.toggle('is-new', announce && i > current && n >= STEPS[current].shown && n < s.shown);
      });
      tabs.forEach((tab, n) => { const on = n === i; tab.setAttribute('aria-selected', String(on)); tab.tabIndex = on ? 0 : -1; });
      record.setAttribute('aria-labelledby', tabs[i].id);
      record.dataset.state = String(i);
      if (announce) f('announce').textContent = `Step ${i + 1} of 4, ${s.name}, ${fmt(t)}. ${due.textContent} to the notice deadline. Next decision: ${s.next}.`;
      current = i;
    };
    tabs.forEach((tab, i) => tab.addEventListener('click', () => render(i, true)));
    tabs.forEach((tab, i) => tab.addEventListener('keydown', e => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      let n = null;
      if (k) n = (i + k + tabs.length) % tabs.length;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End') n = tabs.length - 1;
      if (n === null) return;
      e.preventDefault(); tabs[n].focus(); render(n, true);
    }));
    render(1, false);
  }

  /* ---------- Notice-deadline calculator (local only) ---------- */
  const form = document.getElementById('calc-form');
  if (form) {
    const out = id => document.getElementById(id);
    const now = new Date();
    const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const minusMonths = (t, n) => {
      const d = new Date(t); const day = d.getUTCDate();
      const target = Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - n, 1);
      const last = new Date(Date.UTC(new Date(target).getUTCFullYear(), new Date(target).getUTCMonth() + 1, 0)).getUTCDate();
      return Date.UTC(new Date(target).getUTCFullYear(), new Date(target).getUTCMonth(), Math.min(day, last));
    };
    const calc = () => {
      const end = form.termEnd.value;
      const period = parseInt(form.period.value, 10);
      const lead = Math.max(0, parseInt(form.lead.value, 10) || 0);
      const unit = form.unit.value;
      const bad = !end || !(period > 0);
      form.termEnd.setAttribute('aria-invalid', String(!end));
      form.period.setAttribute('aria-invalid', String(!(period > 0)));
      if (bad) {
        out('out-deadline').textContent = '—';
        out('out-left').textContent = !end ? 'Enter the date the current term ends.' : 'Enter a notice period of at least 1.';
        out('out-left').dataset.tone = 'passed';
        out('out-decide').textContent = '—';
        out('out-note').textContent = '';
        return;
      }
      const endT = utc(end);
      let deadline = unit === 'months' ? minusMonths(endT, period) : endT - period * DAY;
      let moved = '';
      const wd = new Date(deadline).getUTCDay();
      if (form.weekend.checked && (wd === 0 || wd === 6)) {
        deadline -= (wd === 6 ? 1 : 2) * DAY;
        moved = ' Moved back from the weekend to the Friday before.';
      }
      const decide = deadline - lead * DAY;
      const left = daysBetween(todayUtc, deadline);
      out('out-deadline').textContent = fmtLong(deadline);
      const l = out('out-left');
      if (left > 0) { l.textContent = `${plural(left, 'day')} from today (${fmt(todayUtc)})`; l.dataset.tone = 'open'; }
      else if (left === 0) { l.textContent = `That is today (${fmt(todayUtc)}).`; l.dataset.tone = 'passed'; }
      else { l.textContent = `Passed ${plural(-left, 'day')} ago. Check whether the contract has already renewed.`; l.dataset.tone = 'passed'; }
      out('out-decide').textContent = lead ? fmtLong(decide) : 'Same day as the deadline';
      out('out-note').textContent = `${period} ${unit === 'months' ? (period === 1 ? 'month' : 'months') : 'calendar days'} before the term ends on ${fmtLong(endT)}.${moved}`;
    };
    form.addEventListener('input', calc);
    form.addEventListener('change', calc);
    form.addEventListener('submit', e => { e.preventDefault(); calc(); });
    calc();
  }

  /* ---------- Consultation request: prepared locally, never sent ---------- */
  const cform = document.getElementById('consult-form');
  if (cform) {
    const msg = document.getElementById('consult-msg');
    const prepared = document.getElementById('prepared');
    const text = document.getElementById('prepared-text');
    const copy = document.getElementById('copy-btn');
    cform.addEventListener('submit', e => {
      e.preventDefault();
      const name = cform.elements.name, email = cform.elements.email;
      [name, email].forEach(el => el.setAttribute('aria-invalid', String(!el.checkValidity() || !el.value.trim())));
      if (!name.value.trim()) { msg.textContent = 'Add your name to prepare the request.'; name.focus(); return; }
      if (!email.value.trim() || !email.checkValidity()) { msg.textContent = 'Add a work email address so we can reply.'; email.focus(); return; }
      const note = cform.elements.note.value.trim();
      text.value = [
        'Subject: Ledgerlight consultation request',
        '',
        `Name: ${name.value.trim()}`,
        `Work email: ${email.value.trim()}`,
        `Team: ${cform.elements.team.value}`,
        `Contracts tracked: ${cform.elements.count.value}`,
        `How renewals are tracked today: ${note || 'not given'}`
      ].join('\n');
      prepared.hidden = false;
      msg.textContent = 'Request prepared below. It has not been sent.';
    });
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text.value); msg.textContent = 'Request copied to your clipboard. It has not been sent.'; }
      catch { text.focus(); text.select(); msg.textContent = 'Request selected. Press Ctrl+C or Cmd+C to copy it.'; }
    });
  }
})();
