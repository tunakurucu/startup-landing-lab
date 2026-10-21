// Swaptide page script. Everything on the page reads without it.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wide = matchMedia('(min-width: 900px)');

  /* ---------- the hero phone shows the visitor's own clock and the next handover ---------- */
  const clock = document.querySelector('[data-clock]');
  const handover = document.querySelector('[data-handover]');
  const pad = (n) => String(n).padStart(2, '0'); // clock digits taste-skill-ignore
  function tick() {
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes();
    if (clock) clock.textContent = `${pad(h)}:${pad(m)}`;
    if (!handover) return;
    const mins = h * 60 + m;
    const days = mins >= 7 * 60 && mins < 19 * 60;
    const target = days ? 19 * 60 : 7 * 60;
    const left = (target - mins + 1440) % 1440 || 1440;
    const hh = Math.floor(left / 60), mm = left % 60;
    const span = hh ? `${hh} h ${mm} min` : `${mm} min`;
    handover.textContent = days ? `On days. ${span} to the 19:00 handover.` : `On nights. ${span} to the 07:00 handover.`;
  }
  tick();
  setInterval(tick, 20000);

  /* ---------- the held stage: fit the phone, change its screen as the shift scrolls past ---------- */
  const field = document.querySelector('.stage__field');
  const wrap = document.querySelector('.phone-wrap');
  const screens = [...document.querySelectorAll('[data-screen]')];
  const intro = document.querySelector('.intro');
  const how = document.querySelector('.how');
  const groups = [...document.querySelectorAll('.slip__group')];
  const split = document.querySelector('.split');
  let current = 0;

  function show(n) {
    if (n === current) return;
    current = n;
    screens.forEach((s) => s.classList.toggle('is-on', Number(s.dataset.screen) === n));
    groups.forEach((g) => {
      const k = Number(g.dataset.stage);
      g.classList.toggle('is-now', k === n);
      g.classList.toggle('is-past', k < n);
    });
  }

  function fit() {
    if (!field || !wrap) return;
    const fh = field.clientHeight, fw = field.clientWidth;
    let k;
    if (wide.matches) k = Math.min(1, (fh - 48) / 790, (fw - 48) / 380);
    else k = Math.min(0.92, (fw - 32) / 380);
    wrap.style.setProperty('--k', Math.max(0.5, k).toFixed(3));
  }
  fit();
  addEventListener('resize', fit);

  let ticking = false;
  function onScroll() {
    ticking = false;
    if (!wide.matches) return;
    const line = innerHeight * 0.55;
    let n = 0;
    if (intro && intro.getBoundingClientRect().top < line) n = 1;
    if (how) {
      // the swap's four moments share the how-it-works section evenly, so each screen holds a while
      const r = how.getBoundingClientRect();
      const start = innerHeight * 0.6, run = Math.max(1, r.height - innerHeight * 0.3);
      if (r.top < start) n = 2 + Math.min(3, Math.floor(((start - r.top) / run) * 4));
    }
    show(n);
    if (!reduce && split && wrap) {
      const r = split.getBoundingClientRect();
      const run = Math.max(1, r.height - innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / run));
      wrap.style.setProperty('--drift', `${((0.5 - p) * 48).toFixed(1)}px`);
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // On a phone the stage is not held, so it plays the swap through slowly while it is on screen.
  let cycle = null, stageVisible = true;
  const order = [0, 1, 2, 3, 4, 5];
  function startCycle() {
    if (cycle || reduce || wide.matches) return;
    cycle = setInterval(() => {
      if (!stageVisible || document.hidden) return;
      const i = order.indexOf(current);
      show(order[(i + 1) % order.length]);
    }, 5600);
  }
  function stopCycle() { clearInterval(cycle); cycle = null; }
  const stageEl = document.querySelector('.stage');
  if (stageEl && 'IntersectionObserver' in window) {
    new IntersectionObserver((es) => { stageVisible = es[0].isIntersecting; }).observe(stageEl);
  }
  function mode() { fit(); if (wide.matches) { stopCycle(); onScroll(); } else startCycle(); }
  wide.addEventListener('change', mode);
  mode();

  /* ---------- reveal once ---------- */
  const targets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    targets.forEach((el) => io.observe(el));
    addEventListener('load', () => setTimeout(() => {
      targets.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
    }, 2500));
  } else targets.forEach((el) => el.classList.add('is-in'));

  /* ---------- who can take Saturday night ---------- */
  const tabs = [...document.querySelectorAll('.pick__tabs [role="tab"]')];
  const cells = document.querySelectorAll('.matrix td');
  const shade = (td) => {
    const v = parseInt(td.textContent.replace('−', '-'), 10);
    td.classList.toggle('z', v === 0);
    td.classList.toggle('neg', v < 0);
  };
  cells.forEach(shade);
  const rn = document.querySelector('[data-cell="rn"]');
  const charge = document.querySelector('[data-cell="charge"]');
  const rName = document.querySelector('[data-roster-name]');
  const rRole = document.querySelector('[data-roster-role]');
  const sum = document.querySelector('[data-plate-sum]');
  const fmt = (v) => (v > 0 ? `+${v}` : v < 0 ? `−${Math.abs(v)}` : '0');

  function pick(tab, focus) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.classList.toggle('is-on', on);
      panel.hidden = false;
      if (on) {
        rn.textContent = fmt(Number(panel.dataset.rn));
        charge.textContent = fmt(Number(panel.dataset.charge));
        shade(rn); shade(charge);
        rName.textContent = panel.dataset.name;
        rRole.textContent = panel.dataset.role;
        const stopped = !!panel.querySelector('.is-stop');
        rName.closest('li').classList.toggle('is-stopped', stopped);
        if (sum) { sum.textContent = panel.dataset.sum; sum.classList.toggle('is-stopped', stopped); }
      }
    });
    if (focus) tab.focus();
  }
  tabs.forEach((t, i) => {
    t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        pick(tabs[n], true);
      }
    });
  });
})();
