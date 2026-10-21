// Staplepress: reveals, the proof date, the run calculator, the hero drift, the footer name fit.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- reveal once as things enter; never leaves content hidden ----
  const targets = document.querySelectorAll('[data-reveal], [data-slide], [data-group], .chapter');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    targets.forEach((el) => io.observe(el));
    window.addEventListener('load', () => setTimeout(() => {
      targets.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
    }, 2500));
  } else targets.forEach((el) => el.classList.add('is-in'));

  // ---- the day the proof photo goes up: two working days from today ----
  function proofDate(from = new Date()) {
    const d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    let left = 2;
    while (left > 0) { d.setDate(d.getDate() + 1); const w = d.getDay(); if (w !== 0 && w !== 6) left--; }
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }
  const when = 'by ' + proofDate();
  document.querySelectorAll('[data-proof-date]').forEach((el) => { el.textContent = `${el.dataset.proofDate} ${when}.`; });

  // ---- price your run (sample rates anchored to $2.10 a copy for 50 x 24pp A5 black) ----
  const form = document.getElementById('ticket');
  if (form) {
    const copies = form.querySelector('#copies');
    const copiesOut = form.querySelector('#copies-out');
    const pagesOut = form.querySelector('#pages-out');
    const each = document.getElementById('q-each');
    const total = document.getElementById('q-total');
    const sheetsText = document.getElementById('q-sheets');
    const imp = document.getElementById('q-imp');
    const quote = document.querySelector('.quote');
    let pages = 32, lastSheets = 0;
    const money = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    function price(n, p, ink, size) {
      const eff = Math.max(p, 24);
      let a = 2.10 + (eff - 24) * 0.055;
      if (ink === 'colour') a += eff * 0.07;
      if (size === 'A4') a *= 1.6;
      if (n < 50) a += 0.90;
      return Math.round(a * 100) / 100;
    }

    function render() {
      const n = +copies.value;
      const ink = form.querySelector('input[name="ink"]:checked').value;
      const size = form.querySelector('input[name="size"]:checked').value;
      const a = price(n, pages, ink, size);
      copiesOut.textContent = n;
      pagesOut.textContent = pages;
      each.textContent = money(a);
      total.textContent = `a copy, ${money(a * n)} for ${n}`;
      const sheets = pages / 4;
      sheetsText.textContent = `${sheets} sheets a copy (${size === 'A5' ? 'A4' : 'A3'}, printed both sides), nested, folded and stapled. The outer side of each sheet carries these pages:`;
      const items = [];
      for (let i = 0; i < sheets; i++) items.push(`<li${i >= lastSheets ? ` class="is-new" style="--i:${i - lastSheets}"` : ''}><span>${pages - 2 * i}</span><span>${1 + 2 * i}</span></li>`);
      imp.innerHTML = items.join('');
      lastSheets = sheets;
      if (!reduce) { quote.classList.remove('is-changing'); void quote.offsetWidth; quote.classList.add('is-changing'); }
    }

    form.addEventListener('input', render);
    form.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
      pages = Math.min(64, Math.max(8, pages + +b.dataset.step));
      render();
    }));
    lastSheets = pages / 4;
    render();
    quote.classList.remove('is-changing');
  }

  // ---- one moving picture: the proof sheet drifts slowly as the hero scrolls away ----
  const drift = document.querySelector('.drift');
  if (drift && !reduce) {
    let ticking = false;
    const move = () => {
      ticking = false;
      const y = Math.min(window.scrollY, innerHeight * 1.5);
      drift.style.transform = `translate3d(0, ${(-y * 0.05).toFixed(1)}px, 0)`;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
  }

  // ---- the phone menu closes when one of its links is followed ----
  const menu = document.querySelector('.menu');
  if (menu) menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu && menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });

  // ---- the footer name fitted to the content width by measurement ----
  const fit = document.getElementById('fit');
  if (fit) {
    const box = fit.parentElement;
    const doFit = () => {
      box.style.fontSize = '100px';
      const cs = getComputedStyle(box);
      const avail = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const w = fit.getBoundingClientRect().width;
      if (w > 0) box.style.fontSize = (100 * avail / w * 0.995).toFixed(2) + 'px';
    };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(doFit);
    let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(doFit, 120); });
  }
})();
