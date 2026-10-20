(function () {
  'use strict';
  /* Menu: closed only once script runs; Escape, outside click and tabbing out close it. */
  var mb = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu');
  if (mb && menu) {
    var mq = window.matchMedia('(max-width: 859px)');
    var set = function (open) { mb.setAttribute('aria-expanded', String(open)); menu.hidden = mq.matches ? !open : false; };
    set(false);
    mq.addEventListener ? mq.addEventListener('change', function () { set(false); }) : mq.addListener(function () { set(false); });
    mb.addEventListener('click', function () { set(mb.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mb.getAttribute('aria-expanded') === 'true') { set(false); mb.focus(); } });
    document.addEventListener('click', function (e) { if (mb.getAttribute('aria-expanded') === 'true' && !menu.contains(e.target) && !mb.contains(e.target)) set(false); });
    menu.addEventListener('focusout', function (e) { if (mb.getAttribute('aria-expanded') === 'true' && !menu.contains(e.relatedTarget) && e.relatedTarget !== mb) set(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a') && mq.matches) set(false); });
  }

  /* The finder */
  var F = document.querySelector('[data-signature]');
  if (!F) return;
  var $ = function (s, r) { return (r || F).querySelector(s); };
  var strip = $('.strip'), gridFig = $('.fig-grid .draw-slot'), elevFig = $('.fig-elev .draw-slot'),
      gridCap = $('.fig-grid .fig-cap'), info = $('.info'), take = $('.take'), form = $('.search'),
      q = $('#q'), matches = $('.matches'), chips = F.querySelectorAll('.chip');
  var DEFAULT_Q = 'HEK293 p12';
  var state = { sample: 'hek12', key: '3C4', well: 'E6', list: [], taken: {}, mode: 'found', echo: '' };

  function byId(id) { for (var i = 0; i < RW.SAMPLES.length; i++) if (RW.SAMPLES[i].id === id) return RW.SAMPLES[i]; return null; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function setStrip(vals, cls) {
    var v = strip.querySelectorAll('.v');
    for (var i = 0; i < 5; i++) v[i].textContent = vals[i];
    strip.className = 'strip' + (cls ? ' ' + cls : '');
  }

  function render() {
    var s = state.sample ? byId(state.sample) : null;
    var key = state.key, shelf = +key[0], rack = key[1], box = key.slice(2);
    if (state.mode === 'found' && s) {
      var out = !!state.taken[s.id];
      setStrip(['2', String(s.shelf), s.rack, String(s.box), s.well], out ? 'is-out' : '');
      gridFig.innerHTML = RW.gridSVG(key, { target: s.well, taken: out });
      elevFig.innerHTML = RW.elevSVG(s.shelf, s.rack);
      gridCap.textContent = 'Box ' + s.box + ', top view';
      info.innerHTML = '<p class="info-name echo">' + esc(s.name) + '</p>' +
        (out ? '<p class="info-meta"><b>Taken out by you, just now.</b> Put here by ' + esc(s.by) + ', ' + s.on + '.</p>'
             : '<p class="info-meta">Put here by <b>' + esc(s.by) + '</b>, ' + s.on + '.</p>') +
        '<p class="sr-only">Freezer 2, shelf ' + s.shelf + ', rack ' + s.rack + ', box ' + s.box + ', well ' + s.well + (out ? ', marked as taken out.' : '.') + '</p>';
      take.disabled = false;
      take.setAttribute('aria-pressed', String(out));
      take.textContent = out ? 'Log it as put back' : 'Log it as taken out';
    } else if (state.mode === 'well') {
      setStrip(['2', String(shelf), rack, box, state.well], 'is-plain');
      gridFig.innerHTML = RW.gridSVG(key, { target: state.well, taken: !RW.occupancy(key)[state.well] });
      elevFig.innerHTML = RW.elevSVG(shelf, rack);
      gridCap.textContent = 'Box ' + box + ', top view';
      var em = RW.EMPTIED[key + ':' + state.well], occ = RW.occupancy(key)[state.well];
      info.innerHTML = occ
        ? '<p class="info-name">' + state.well + ' holds a tube</p><p class="info-meta">This sample freezer names ten tubes. Try one of the names below.</p>'
        : '<p class="info-name">' + state.well + ' is empty</p><p class="info-meta">' + (em ? esc(em.name) + ' was taken out by <b>' + esc(em.by) + '</b>, ' + em.on + '.' : 'Nothing has been logged here.') + '</p>';
      take.disabled = true; take.setAttribute('aria-pressed', 'false'); take.textContent = 'Log it as taken out';
    } else {
      setStrip(['2', '–', '–', '–', '–'], 'is-empty');
      gridFig.innerHTML = RW.gridSVG(key, {});
      elevFig.innerHTML = RW.elevSVG(0, '');
      gridCap.textContent = 'Last box shown: Box ' + box;
      info.innerHTML = state.mode === 'empty'
        ? '<p class="info-name">Type a sample name</p><p class="info-meta">For example HEK293, pUC19, or a well such as E5.</p>'
        : state.mode === 'range'
          ? '<p class="info-name echo">There is no ' + esc(state.echo) + '</p><p class="info-meta">Boxes in this freezer are 9 × 9: rows A to I, columns 1 to 9.</p>'
          : '<p class="info-name echo">Nothing called “' + esc(state.echo) + '”</p><p class="info-meta">It is not in this sample freezer. Try HEK293, pUC19, or a well such as E5.</p>';
      take.disabled = true; take.setAttribute('aria-pressed', 'false'); take.textContent = 'Log it as taken out';
    }
    // Chips and match list
    var qv = q.value.trim().toLowerCase();
    for (var i = 0; i < chips.length; i++) chips[i].setAttribute('aria-pressed', String(chips[i].getAttribute('data-q').toLowerCase() === qv));
    if (state.list.length > 1) {
      matches.hidden = false;
      matches.innerHTML = '<p class="matches-lab">' + state.list.length + ' tubes match. Showing ' + esc(byId(state.sample).name) + '.</p>' +
        state.list.map(function (x) { return '<button type="button" class="chip" data-pick="' + x.id + '" aria-pressed="' + (x.id === state.sample) + '">' + esc(x.name) + '</button>'; }).join('');
    } else { matches.hidden = true; matches.innerHTML = ''; }
    syncLog();
  }

  function show(id, list) {
    var s = byId(id);
    state.sample = id; state.key = RW.boxKey(s); state.well = s.well; state.mode = 'found'; state.list = list || [];
    render();
  }

  function run(raw) {
    var v = String(raw || '').trim().slice(0, 60);
    state.echo = v;
    if (!v) { state.mode = 'empty'; state.sample = null; state.list = []; return render(); }
    var m = v.match(/^well\s*([a-z])\s*-?\s*(\d{1,4})$/i) || v.match(/^([a-z])\s*-?\s*(\d{1,4})$/i);
    if (m) {
      var row = m[1].toUpperCase(), col = +m[2], w = row + col;
      state.echo = w; state.list = []; state.sample = null;
      if (RW.ROWS.indexOf(row) < 0 || col < 1 || col > 9) { state.mode = 'range'; return render(); }
      var hit = RW.sampleAt(state.key, w);
      if (hit) return show(hit.id, []);
      state.mode = 'well'; state.well = w; return render();
    }
    var found = RW.search(v);
    if (!found.length) { state.mode = 'none'; state.sample = null; state.list = []; return render(); }
    show(found[0].id, found);
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); run(q.value); });
  F.addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (c && c.hasAttribute('data-pick')) { var keep = state.list; show(c.getAttribute('data-pick'), keep); var nb = F.querySelector('[data-pick="' + c.getAttribute('data-pick') + '"]'); if (nb) nb.focus(); return; }
    if (c && c.hasAttribute('data-q')) { q.value = c.getAttribute('data-q'); run(q.value); return; }
  });
  take.addEventListener('click', function () {
    if (!state.sample) return;
    state.taken[state.sample] = !state.taken[state.sample];
    render();
  });
  $('.reset').addEventListener('click', function () {
    state = { sample: 'hek12', key: '3C4', well: 'E6', list: [], taken: {}, mode: 'found', echo: '' };
    q.value = DEFAULT_Q;
    render();
  });

  /* The Box 4 log for lab managers, kept in step with the finder */
  var L = document.querySelector('.logbox');
  var filter = 'all', lastSig = null;
  function syncLog(force) {
    if (!L) return;
    // Only touch the log when the finder changed what it holds, so its status line never speaks off-screen.
    var sig = filter + '|' + RW.SAMPLES.filter(function (s) { return state.taken[s.id]; }).map(function (s) { return s.id; }).join(',');
    if (sig === lastSig && !force) return;
    lastSig = sig;
    var list = L.querySelector('.log'), you = list.querySelectorAll('.you');
    for (var i = 0; i < you.length; i++) you[i].remove();
    var takenHere = RW.SAMPLES.filter(function (s) { return RW.boxKey(s) === '3C4' && state.taken[s.id]; });
    takenHere.slice().reverse().forEach(function (s) {
      var li = document.createElement('li');
      li.className = 'you'; li.setAttribute('data-by', 'you');
      li.innerHTML = '<span class="when">Just now</span><span class="what">You took out ' + esc(s.name) + '</span><span class="pos">' + s.well + '</span>';
      list.insertBefore(li, list.firstChild);
    });
    var rows = list.querySelectorAll('li'), shown = 0, rings = {};
    for (i = 0; i < rows.length; i++) {
      var ok = filter === 'all' || rows[i].getAttribute('data-by') === filter || rows[i].getAttribute('data-by') === 'you' && filter === 'all';
      rows[i].hidden = !ok;
      if (ok) { shown++; rings[rows[i].querySelector('.pos').textContent] = true; }
    }
    var g = RW.gridSVG('3C4', { rings: filter === 'all' ? {} : rings });
    // Tubes the visitor took out leave their wells empty here too.
    if (takenHere.length) {
      var tmp = document.createElement('div'); tmp.innerHTML = g;
      takenHere.forEach(function (s) { var c = tmp.querySelector('[data-w="' + s.well + '"]'); if (c) c.setAttribute('class', 'well'); });
      g = tmp.innerHTML;
    }
    L.querySelector('.log-grid').innerHTML = g;
    var total = rows.length;
    var msg = filter === 'all'
      ? 'Showing every entry for Box 4.'
      : shown + ' of ' + total + ' entries are by ' + filter + '. Their positions are ringed.';
    var st = L.querySelector('.log-status');
    if (st.textContent !== msg) st.textContent = msg;
  }
  if (L) {
    L.addEventListener('click', function (e) {
      var b = e.target.closest('[data-by-filter]'); if (!b) return;
      filter = b.getAttribute('data-by-filter');
      var bs = L.querySelectorAll('[data-by-filter]');
      for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', String(bs[i] === b));
      syncLog();
    });
  }
  render();
})();
