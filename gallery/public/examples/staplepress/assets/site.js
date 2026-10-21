/* Staplepress page script: menu, one-time section reveals, and the local PDF check. Nothing is sent anywhere. */
(() => {
  'use strict';

  /* ---------- Menu (phones) ---------- */
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('site-menu');
  const mq = window.matchMedia('(max-width: 820px)');
  const setMenu = open => {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = mq.matches ? !open : false;
    document.body.style.overflow = open && mq.matches ? 'hidden' : '';
  };
  setMenu(false);
  mq.addEventListener('change', () => setMenu(false));
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); }
  });
  document.addEventListener('click', e => {
    if (btn.getAttribute('aria-expanded') !== 'true') return;
    if (e.target.closest('.menu a') || (!menu.contains(e.target) && !btn.contains(e.target))) setMenu(false);
  });
  menu.addEventListener('focusout', e => {
    if (mq.matches && e.relatedTarget && !menu.contains(e.relatedTarget) && !btn.contains(e.relatedTarget)) setMenu(false);
  });

  /* ---------- Section reveals: once, when a block is most of the way into view ---------- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }, {rootMargin: '0px 0px -12% 0px'});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('in'));

  /* ---------- The PDF check ---------- */
  const $ = id => document.getElementById(id);
  const out = {file: $('r-file'), kind: $('r-kind'), pages: $('r-pages'), size: $('r-size'), plan: $('r-plan'), fold: $('r-fold'),
    price: $('r-price'), cover: $('r-cover'), proof: $('r-proof'), verdict: $('r-verdict')};
  const own = $('own'), ownLabel = $('own-label'), radios = [...document.querySelectorAll('input[name=sample]')];

  const SAMPLES = {
    'low-tide': {name: 'low-tide.pdf', pages: 24, w: 148, h: 210, bleed: false},
    'field-notes': {name: 'field-notes.pdf', pages: 26, w: 148, h: 210, bleed: false},
    'harbour': {name: 'harbour-prints.pdf', pages: 40, w: 210, h: 297, bleed: true}
  };
  const SIZES = [['A6', 105, 148], ['A5', 148, 210], ['A4', 210, 297], ['A3', 297, 420], ['B5', 176, 250],
    ['US Letter', 215.9, 279.4], ['US half letter', 139.7, 215.9], ['US Legal', 215.9, 355.6]];
  const MAX_BYTES = 150 * 1024 * 1024;
  const fmt = n => (Math.round(n * 10) / 10).toString();

  const nameSize = (w, h) => {
    const a = Math.min(w, h), b = Math.max(w, h);
    const hit = SIZES.find(([, x, y]) => Math.abs(a - x) <= 2 && Math.abs(b - y) <= 2);
    const orient = w > h + 1 ? ', landscape' : '';
    return hit ? {label: `${hit[0]}${orient}, ${fmt(hit[1])} × ${fmt(hit[2])} mm`, key: hit[0]} : {label: `${fmt(w)} × ${fmt(h)} mm (not a standard size)`, key: null};
  };
  // A page box that is a standard size plus 2.5–5 mm on every side reads as bleed.
  const withoutBleed = (w, h) => {
    for (const [, x, y] of SIZES) {
      const a = Math.min(w, h), b = Math.max(w, h);
      const da = (a - x) / 2, db = (b - y) / 2;
      if (da >= 2.4 && da <= 5.2 && db >= 2.4 && db <= 5.2 && Math.abs(da - db) < 1) return w <= h ? [x, y] : [y, x];
    }
    return null;
  };

  // Two working days from today, counting Monday to Friday only.
  const proofDate = () => {
    const d = new Date(); let n = 0;
    while (n < 2) { d.setDate(d.getDate() + 1); const wd = d.getDay(); if (wd !== 0 && wd !== 6) n++; }
    return d.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long'});
  };

  // The flatplan: every page as a thumbnail in the file's proportions, grouped into folded sheets of four.
  const drawSheets = (pages, w, h) => {
    out.plan.textContent = '';
    out.plan.style.setProperty('--ar', w && h ? `${Math.round(w)} / ${Math.round(h)}` : '148 / 210');
    if (!pages) return;
    const full = Math.floor(pages / 4), over = pages % 4, show = Math.min(full, 24);
    const sheet = (n, i, cls) => { const s = document.createElement('span'); s.className = 'plan__sheet' + (cls ? ' ' + cls : ''); s.style.setProperty('--i', i);
      for (let k = 0; k < n; k++) s.append(document.createElement('i')); out.plan.append(s); };
    for (let i = 0; i < show; i++) sheet(4, i);
    if (full > show) { const m = document.createElement('span'); m.className = 'plan__more'; m.textContent = `+${full - show} sheets`; out.plan.append(m); }
    if (over) sheet(over, show, 'plan__sheet--over');
  };

  const setTone = (el, tone) => { if (tone) el.dataset.tone = tone; else delete el.dataset.tone; };

  const render = r => {
    out.file.textContent = r.name;
    out.kind.textContent = r.own ? 'Your file' : 'Sample';
    out.proof.textContent = `By ${proofDate()} if you upload today (Monday to Friday; holidays not counted).`;
    if (r.error) {
      out.pages.textContent = 'No pages read'; out.size.textContent = '–'; out.fold.textContent = ''; drawSheets(0);
      out.price.textContent = '–'; out.cover.textContent = 'Keep cover art inside a white border: full-bleed covers can’t be printed yet.'; setTone(out.cover);
      out.verdict.textContent = r.error; out.verdict.dataset.tone = 'warn';
      return;
    }
    const p = r.pages, fours = p % 4 === 0, size = nameSize(r.w, r.h);
    out.pages.textContent = `${p} ${p === 1 ? 'page' : 'pages'}`;
    out.size.textContent = size.label + (r.bleed ? ', with bleed' : '');
    drawSheets(p, r.w, r.h);
    if (fours) out.fold.textContent = `fold from ${p / 4} ${p / 4 === 1 ? 'sheet' : 'sheets'} of 4, stapled at the fold`;
    else out.fold.textContent = `make ${Math.floor(p / 4)} ${Math.floor(p / 4) === 1 ? 'sheet' : 'sheets'} of 4, with ${p % 4} ${p % 4 === 1 ? 'page' : 'pages'} left over`;

    const a5 = size.key === 'A5' && !(r.w > r.h + 1);
    if (a5 && p === 24) out.price.textContent = 'From $2.10 a copy at 50 copies, black ink on uncoated paper.';
    else if (a5) out.price.textContent = `The $2.10 starting price is for 24 A5 pages, so ${p} pages is priced differently.`;
    else out.price.textContent = 'Other sizes cost more than the $2.10 starting price, which is for A5.';

    if (r.bleed) { out.cover.textContent = 'Your pages carry bleed, which usually means art runs to the edge. Full-bleed covers can’t be printed yet.'; setTone(out.cover, 'warn'); }
    else { out.cover.textContent = 'No bleed found. Keep cover art inside a white border: full-bleed covers can’t be printed yet.'; setTone(out.cover); }

    const n = Math.floor(p / 4);
    let v, tone = 'good';
    if (!fours) {
      const lo = Math.max(4, n * 4), hi = n * 4 + 4;
      v = lo === hi || lo > p ? `${p} pages won’t fold evenly. Stapled zines come in fours: try ${hi}.` : `${p} pages won’t fold evenly. Stapled zines come in fours: try ${lo} or ${hi}.`;
      tone = 'warn';
    } else if (r.bleed) { v = `Folds into ${n} ${n === 1 ? 'sheet' : 'sheets'}, but check the cover: full-bleed covers can’t be printed yet.`; tone = 'warn'; }
    else if (a5 && p === 24) v = 'Folds into 6 sheets and matches the $2.10 starting price.';
    else v = `Folds into ${n} ${n === 1 ? 'sheet' : 'sheets'}. ` + (a5 ? 'Priced separately from the 24-page starting price.' : 'Other sizes cost more than the A5 starting price.');
    out.verdict.textContent = v; out.verdict.dataset.tone = tone;
  };

  /* Reading a real PDF: page count from the page tree, size from TrimBox or MediaBox. Compressed object streams are
     inflated with the browser's own DecompressionStream; page content is never decoded. */
  const latin1 = u8 => new TextDecoder('latin1').decode(u8);
  const inflate = async u8 => {
    for (const fmtName of ['deflate', 'deflate-raw']) {
      try {
        const src = fmtName === 'deflate-raw' ? u8.subarray(2) : u8;
        const stream = new Blob([src]).stream().pipeThrough(new DecompressionStream(fmtName));
        return new Uint8Array(await new Response(stream).arrayBuffer());
      } catch { /* try the next format */ }
    }
    return null;
  };
  const box = (txt, key) => {
    const m = txt.match(new RegExp('/' + key + '\\s*\\[\\s*(-?[\\d.]+)\\s+(-?[\\d.]+)\\s+(-?[\\d.]+)\\s+(-?[\\d.]+)\\s*\\]'));
    if (!m) return null;
    const [x0, y0, x1, y1] = m.slice(1).map(Number);
    const w = Math.abs(x1 - x0) * 25.4 / 72, h = Math.abs(y1 - y0) * 25.4 / 72;
    return w > 10 && h > 10 ? {w, h} : null;
  };
  const analyse = async buf => {
    const u8 = new Uint8Array(buf);
    if (!/%PDF-/.test(latin1(u8.subarray(0, 1024)))) return {error: 'That file isn’t a PDF. Export a print-ready PDF and try again.'};
    const txt = latin1(u8), texts = [txt];
    if ('DecompressionStream' in window) {
      const re = /stream(\r\n|\n|\r)/g; let m, n = 0;
      while ((m = re.exec(txt)) && n < 400) {
        const before = txt.slice(Math.max(0, m.index - 600), m.index);
        const dict = before.slice(before.lastIndexOf('obj') + 3);
        if (!/\/ObjStm/.test(dict) || !/\/FlateDecode/.test(dict)) continue;
        const start = m.index + m[0].length, end = txt.indexOf('endstream', start);
        if (end < 0) break;
        const data = await inflate(u8.subarray(start, end).slice());
        if (data) { texts.push(latin1(data)); n++; }
        re.lastIndex = end;
      }
    }
    const all = texts.join('\n');
    let tree = 0;
    for (const m of all.matchAll(/\/Type\s*\/Pages\b/g)) {
      const s = all.lastIndexOf('<<', m.index), e = all.indexOf('>>', m.index);
      const c = all.slice(s, e).match(/\/Count\s+(\d+)/);
      if (c) tree = Math.max(tree, Number(c[1]));
    }
    const leaves = (all.match(/\/Type\s*\/Page(?![a-zA-Z])/g) || []).length;
    const pages = tree || leaves;
    if (!pages) return {error: 'Couldn’t count the pages in this file. It may be encrypted or damaged; try exporting it again.'};
    const rot = /\/Rotate\s+(90|270)\b/.test(all);
    const trim = box(all, 'TrimBox'), media = box(all, 'MediaBox');
    let w, h, bleed = false;
    if (trim && media && (media.w - trim.w > 4 || media.h - trim.h > 4)) { w = trim.w; h = trim.h; bleed = true; }
    else if (trim || media) {
      ({w, h} = trim || media);
      const nb = withoutBleed(w, h);
      if (nb) { [w, h] = nb; bleed = true; }
    } else return {error: 'Couldn’t find a page size in this file. Try exporting it again as a print-ready PDF.'};
    if (rot) [w, h] = [h, w];
    return {pages, w, h, bleed};
  };

  let token = 0;
  const readFile = async file => {
    if (!file) return;
    const my = ++token;
    radios.forEach(r => { r.checked = false; });
    ownLabel.classList.add('is-on');
    out.verdict.textContent = 'Reading your PDF on this laptop…'; out.verdict.dataset.tone = 'busy';
    const name = file.name || 'your-file.pdf';
    let r;
    if (file.size === 0) r = {error: 'That file is empty. Export the PDF again and try once more.'};
    else if (file.size > MAX_BYTES) r = {error: 'That PDF is over 150 MB, too big to read in this browser. The check needs a smaller export.'};
    else { try { r = await analyse(await file.arrayBuffer()); } catch { r = {error: 'Couldn’t read this file. It may be damaged; try exporting it again.'}; } }
    if (my !== token) return;
    render({...r, name, own: true});
  };

  const showSample = key => {
    token++;
    ownLabel.classList.remove('is-on');
    if (own.value) own.value = '';
    render({...SAMPLES[key], name: SAMPLES[key].name, own: false});
  };

  radios.forEach(r => r.addEventListener('change', () => { if (r.checked) showSample(r.value); }));
  own.addEventListener('change', () => readFile(own.files && own.files[0]));
  ['dragenter', 'dragover'].forEach(t => ownLabel.addEventListener(t, e => { e.preventDefault(); ownLabel.classList.add('is-drag'); }));
  ['dragleave', 'drop'].forEach(t => ownLabel.addEventListener(t, () => ownLabel.classList.remove('is-drag')));
  ownLabel.addEventListener('drop', e => { e.preventDefault(); readFile(e.dataTransfer && e.dataTransfer.files[0]); });

  showSample('low-tide');
})();
