/* Rackwise landing page: the sample lab behind "Find a tube" and the freezer map.
   Everything here runs in the visitor's browser. Nothing is saved or sent. */
(function () {
  'use strict';

  // ---------- menu ----------
  var mb = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu');
  if (mb && menu) {
    var mq = window.matchMedia('(max-width: 899px)');
    var setMenu = function (open) { if (mb.getAttribute('aria-expanded') !== String(open)) mb.setAttribute('aria-expanded', String(open)); var h = !open && mq.matches; if (menu.hidden !== h) menu.hidden = h; };
    setMenu(false);
    mq.addEventListener ? mq.addEventListener('change', function () { setMenu(false); }) : mq.addListener(function () { setMenu(false); });
    mb.addEventListener('click', function () { setMenu(mb.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mb.getAttribute('aria-expanded') === 'true') { setMenu(false); mb.focus(); } });
    document.addEventListener('click', function (e) { if (mq.matches && !menu.contains(e.target) && !mb.contains(e.target)) setMenu(false); });
    menu.addEventListener('focusout', function (e) { if (mq.matches && !menu.contains(e.relatedTarget) && e.relatedTarget !== mb) setMenu(false); });
    menu.addEventListener('click', function (e) { if (mq.matches && e.target.closest('a')) setMenu(false); });
  }

  // ---------- sample lab ----------
  var ROWS = 'ABCDEFGHI'.split('');
  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function when(y, m, d, hh, mm) { return {y: y, m: m, d: d, hh: hh, mm: mm}; }
  function fmtDate(w) { var dt = new Date(Date.UTC(w.y, w.m - 1, w.d)); return DAYS[dt.getUTCDay()] + ' ' + w.d + ' ' + MONTHS[w.m - 1] + ' ' + w.y; }
  function fmtWhen(w) { if (w.now) return 'just now, on this page'; return fmtDate(w) + ', ' + String(w.hh).padStart(2, '0') + ':' + String(w.mm).padStart(2, '0'); }
  function stamp(w) { return w.now ? 9e12 : Date.UTC(w.y, w.m - 1, w.d, w.hh, w.mm); }

  // Seeded generator so every visit shows the same sample lab.
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  // Boxes: number, freezer, shelf (1 = top), rack (1 = left), drawer in the rack (1 = top), who fills it, name stems, tubes.
  var BOX_DEFS = [
    {n: 14, fz: 'B', shelf: 3, rack: 2, drawer: 3, who: 'Priya N.', stems: ['HEK293 p10, vial ', 'HEK293 p11, vial '], fill: 34},
    {n: 15, fz: 'B', shelf: 3, rack: 2, drawer: 4, who: 'Priya N.', stems: ['HeLa p6, vial '], fill: 41},
    {n: 18, fz: 'B', shelf: 3, rack: 4, drawer: 1, who: 'Priya N.', stems: ['HEK293-GFP clone 4, vial '], fill: 22},
    {n: 7, fz: 'B', shelf: 1, rack: 1, drawer: 3, who: 'Tom R.', stems: ['DH5α competent cells, aliquot '], fill: 60},
    {n: 41, fz: 'B', shelf: 2, rack: 3, drawer: 1, who: 'Sam K.', stems: ['Serum, mouse '], fill: 44},
    {n: 40, fz: 'B', shelf: 5, rack: 4, drawer: 2, who: 'Ana M.', stems: ['Primer stock F-1'], fill: 52},
    {n: 3, fz: 'A', shelf: 1, rack: 4, drawer: 2, who: 'Tom R.', stems: ['pUC19 miniprep ', 'pET-28a miniprep '], fill: 37},
    {n: 5, fz: 'A', shelf: 3, rack: 2, drawer: 1, who: 'Tom R.', stems: ['Primer stock R-0'], fill: 48},
    {n: 22, fz: 'A', shelf: 2, rack: 1, drawer: 1, who: 'Sam K.', stems: ['Anti-GFP aliquot '], fill: 30},
    {n: 23, fz: 'A', shelf: 2, rack: 1, drawer: 2, who: 'Sam K.', stems: ['Anti-Myc aliquot '], fill: 26},
    {n: 31, fz: 'A', shelf: 4, rack: 3, drawer: 4, who: 'Ana M.', stems: ['Liver RNA, mouse '], fill: 39},
    {n: 32, fz: 'A', shelf: 4, rack: 3, drawer: 5, who: 'Ana M.', stems: ['Kidney RNA, mouse '], fill: 28}
  ];
  // Named tubes the page talks about. Their dates are the latest in their boxes.
  var NAMED = [
    {box: 14, pos: 'D7', name: 'HEK293 p12, vial 1', who: 'Priya N.', w: when(2026, 10, 14, 16, 5)},
    {box: 14, pos: 'D8', name: 'HEK293 p12, vial 2', who: 'Priya N.', w: when(2026, 10, 14, 16, 5)},
    {box: 14, pos: 'C9', name: 'HEK293 p11, vial 1', who: 'Priya N.', w: when(2026, 10, 8, 11, 30)},
    {box: 22, pos: 'B4', name: 'Anti-GFP aliquot 3', who: 'Sam K.', w: when(2026, 10, 5, 10, 20)},
    {box: 31, pos: 'F5', name: 'Liver RNA, mouse 4', who: 'Ana M.', w: when(2026, 10, 15, 10, 12)},
    {box: 31, pos: 'E2', name: 'Serum, mouse 22', who: 'Sam K.', w: when(2026, 10, 7, 15, 20)},
    {box: 3, pos: 'A2', name: 'pUC19 miniprep 1', who: 'Tom R.', w: when(2026, 10, 16, 17, 48)},
    {box: 7, pos: 'G1', name: 'DH5α competent cells, aliquot 1', who: 'Tom R.', w: when(2026, 10, 13, 8, 55)},
    {box: 40, pos: 'I9', name: 'Primer stock F-118', who: 'Ana M.', w: when(2026, 10, 2, 9, 15)}
  ];
  var KEEP_EMPTY = {14: ['C2']}; // Tom took HEK293 p9 out of C2 on Mon 12 Oct.

  // Older put-ins fall between Mon 3 Aug and Wed 7 Oct 2026, before every logged move.
  var START = Date.UTC(2026, 7, 3), END = Date.UTC(2026, 9, 7);
  var boxes = {}, base = [];
  (function build() {
    var r = rng(4235572338);
    BOX_DEFS.forEach(function (b) {
      var box = {n: b.n, fz: b.fz, shelf: b.shelf, rack: b.rack, drawer: b.drawer};
      boxes[b.n] = box;
      var taken = {}, names = {};
      NAMED.forEach(function (t) { if (t.box === b.n) { taken[t.pos] = 1; names[t.name] = 1; base.push({box: b.n, pos: t.pos, name: t.name, who: t.who, w: t.w}); } });
      (KEEP_EMPTY[b.n] || []).forEach(function (p) { taken[p] = 1; });
      var free = [];
      ROWS.forEach(function (row) { for (var c = 1; c <= 9; c++) if (!taken[row + c]) free.push(row + c); });
      for (var i = free.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var tmp = free[i]; free[i] = free[j]; free[j] = tmp; }
      var already = NAMED.filter(function (t) { return t.box === b.n; }).length;
      var count = b.fill - already, ks = {}, picked = free.slice(0, count);
      picked.sort(function (p, q) { return p.charCodeAt(0) - q.charCodeAt(0) || (+p.slice(1)) - (+q.slice(1)); });
      picked.forEach(function (pos, idx) {
        var stem = b.stems[idx % b.stems.length], name;
        ks[stem] = ks[stem] || 1;
        do { name = stem + (/\d$/.test(stem) ? String(ks[stem]).padStart(2, '0') : ks[stem]); ks[stem]++; } while (names[name]);
        names[name] = 1;
        var t = START + Math.floor(r() * (END - START) / 60000) * 60000;
        var hh = 8 + Math.floor(r() * 10), mm = Math.floor(r() * 12) * 5;
        var dt = new Date(t);
        base.push({box: b.n, pos: pos, name: name, who: b.who, w: when(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), hh, mm)});
      });
    });
  })();

  var tubes = base.slice();
  var state = {q: 'HEK293 p12', pick: null, person: null};
  var DEFAULT_Q = 'HEK293 p12';

  function addr(b) { return b.fz + '·' + b.shelf + '·' + b.rack; }
  function inBox(n) { return tubes.filter(function (t) { return t.box === n; }); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); }
  function norm(s) { return String(s).toLowerCase().replace(/α/g, 'alpha').replace(/[^a-z0-9]+/g, ' ').trim(); }
  function search(q) {
    var nq = norm(q); if (!nq) return [];
    var words = nq.split(' ');
    var hits = tubes.filter(function (t) { var nn = norm(t.name); return words.every(function (w) { return nn.indexOf(w) !== -1; }); });
    hits.sort(function (a, b) {
      var ea = norm(a.name) === nq ? 0 : 1, eb = norm(b.name) === nq ? 0 : 1;
      return ea - eb || a.name.localeCompare(b.name, 'en', {numeric: true});
    });
    return hits;
  }
  function firstFree(n) {
    var used = {}; inBox(n).forEach(function (t) { used[t.pos] = 1; });
    for (var i = 0; i < ROWS.length; i++) for (var c = 1; c <= 9; c++) if (!used[ROWS[i] + c]) return ROWS[i] + c;
    return null;
  }

  // ---------- drawings ----------
  function freezerSVG(target) {
    // Upright freezer, door swung open to the left: 5 shelves, 4 racks on each.
    var x0 = 56, y0 = 30, rw = 30, gap = 4, rh = 34, sg = 6;
    var s = '<svg viewBox="0 0 230 252" aria-hidden="true" focusable="false">';
    s += '<rect class="dw-body" x="42" y="12" width="176" height="228" rx="4"/>';
    s += '<path class="dw-body" d="M42 14 L10 26 L10 230 L42 238 Z"/>';
    s += '<path class="dw-thin" d="M18 60 L18 110"/>';
    s += '<rect class="dw-frost" x="52" y="24" width="144" height="208"/>';
    s += '<rect class="dw-line" x="52" y="24" width="144" height="208"/>';
    for (var sh = 1; sh <= 5; sh++) {
      var y = y0 + (sh - 1) * (rh + sg + 0.5);
      if (sh === target.shelf) s += '<rect class="dw-shelfband" x="53" y="' + (y - 3) + '" width="142" height="' + (rh + 6) + '"/>';
      s += '<path class="dw-thin" d="M52 ' + (y + rh + 3) + ' H196"/>';
      for (var rk = 1; rk <= 4; rk++) {
        var x = x0 + (rk - 1) * (rw + gap) + 1;
        var hit = sh === target.shelf && rk === target.rack;
        s += '<rect class="' + (hit ? 'dw-hit' : 'dw-slot') + '" x="' + x + '" y="' + y + '" width="' + rw + '" height="' + rh + '" rx="1"/>';
      }
    }
    s += '<rect class="dw-line" x="58" y="240" width="14" height="8"/><rect class="dw-line" x="188" y="240" width="14" height="8"/>';
    return s + '</svg>';
  }
  function rackSVG(target) {
    // Drawer rack seen from the front, built in HTML so the box numbers stay real text; the drawer holding the box slides out.
    var fz = target.fz, sh = target.shelf, rk = target.rack, h = '<div class="rackd" aria-hidden="true"><span class="rk-top"></span><div class="rk-body">';
    for (var d = 1; d <= 5; d++) {
      var box = null;
      for (var k in boxes) { var b = boxes[k]; if (b.fz === fz && b.shelf === sh && b.rack === rk && b.drawer === d) box = b; }
      h += box ? '<div class="drw' + (d === target.drawer ? ' hit' : '') + '">' + box.n + '</div>' : '<div class="drw empty"></div>';
    }
    return h + '</div></div>';
  }
  function boxGrid(n, pos, mineName) {
    var used = {}; inBox(n).forEach(function (t) { used[t.pos] = t; });
    var r = pos ? pos[0] : '', c = pos ? pos.slice(1) : '';
    var h = '<i></i>';
    for (var col = 1; col <= 9; col++) h += '<i' + (String(col) === c ? ' class="on"' : '') + '>' + col + '</i>';
    ROWS.forEach(function (row) {
      h += '<i' + (row === r ? ' class="on"' : '') + '>' + row + '</i>';
      for (var col2 = 1; col2 <= 9; col2++) {
        var p = row + col2, cls = p === pos ? 'hit' : used[p] ? 't' : '';
        h += '<span' + (cls ? ' class="' + cls + '"' : '') + '></span>';
      }
    });
    return h;
  }

  // ---------- the finder ----------
  var $ = function (s, r) { return (r || document).querySelector(s); };
  // Only touch the DOM when the content really changes, so nothing flickers or re-announces.
  var last = new WeakMap();
  function setText(el, t) { if (el && el.textContent !== t) el.textContent = t; }
  function setHTML(el, html) { if (!el || last.get(el) === html) return; last.set(el, html); el.innerHTML = html; }
  var finder = $('[data-signature]');
  var verdict = $('#verdict'), qInput = $('#q'), vHead = $('#verdict .v-head'), vMore = $('#verdict .v-more');

  function show(t, hits, q) {
    var b = boxes[t.box];
    var vals = {freezer: b.fz, shelf: b.shelf, rack: b.rack, box: b.n, pos: t.pos};
    Object.keys(vals).forEach(function (k) { var el = $('[data-path="' + k + '"]'); if (el && el.textContent !== String(vals[k])) el.textContent = vals[k]; });
    setHTML($('[data-render="freezer"]'), freezerSVG(b));
    setHTML($('[data-render="rack"]'), rackSVG(b));
    setHTML($('[data-render="box"]'), boxGrid(b.n, t.pos));
    var bl =  'Box ' + b.n + ' seen from above, 9 by 9 positions, ' + inBox(b.n).length + ' tubes, ' + t.pos + ' marked';
    if ($('[data-render="box"]').getAttribute('aria-label') !== bl) $('[data-render="box"]').setAttribute('aria-label', bl);
    setHTML($('[data-cap="freezer"]'), 'Freezer ' + b.fz + ', door open: <b>shelf ' + b.shelf + '</b> from the top, <b>rack ' + b.rack + '</b> from the left');
    setHTML($('[data-cap="rack"]'), 'Rack ' + b.rack + ': <b>box ' + b.n + '</b> in drawer ' + b.drawer + ' from the top');
    setHTML($('[data-cap="box"]'), 'Box ' + b.n + ' from above: <b>row ' + t.pos[0] + ', column ' + t.pos.slice(1) + '</b>');
    var who = t.who === 'You' ? 'you' : t.who;
    var head = '<p class="v-name echo">' + esc(t.name) + '</p>' +
      '<p class="v-meta">Put here by <span class="who">' + esc(who) + '</span> \u00b7 <span class="num">' + fmtWhen(t.w) + '</span>' + (t.who === 'You' ? '. Nothing is saved or sent.' : '') + '</p>';
    var more = '';
    if (hits.length > 1) {
      more = '<p>' + hits.length + ' tubes match \u201c<span class="echo">' + esc(q) + '</span>\u201d' + (hits.length > 4 ? '. The first four:' : ':') + '</p>';
      hits.slice(0, 4).forEach(function (o) { var ob = boxes[o.box]; more += '<button type="button" class="v-btn" aria-pressed="false" data-go="' + tubes.indexOf(o) + '">' + esc(o.name) + ' \u00b7 box ' + ob.n + ', ' + o.pos + '</button>'; });
    }
    if (verdict.className !== 'verdict') verdict.className = 'verdict';
    setHTML(vHead, head); setHTML(vMore, more);
    var cur = String(tubes.indexOf(t));
    vMore.querySelectorAll('[data-go]').forEach(function (bt) {
      var on = bt.getAttribute('data-go') === cur;
      if (bt.getAttribute('aria-pressed') !== String(on)) bt.setAttribute('aria-pressed', String(on));
      if (bt.disabled !== on) bt.disabled = on; // the tube already on the map cannot be picked again
    });
  }
  function miss(q) {
    if (verdict.className !== 'verdict miss') verdict.className = 'verdict miss';
    var nq = q.trim();
    if (!nq) { setHTML(vHead, '<p class="v-name">Type a sample name first.</p><p class="v-meta">Or tap one of the samples below. The map stays on the last tube you found.</p>'); setHTML(vMore, ''); return; }
    var cur = boxes[+$('[data-path="box"]').textContent] || boxes[14];
    var spot = firstFree(cur.n), target = cur;
    if (!spot) { for (var k in boxes) { var s2 = firstFree(+k); if (s2) { target = boxes[k]; spot = s2; break; } } }
    setHTML(vHead, '<p class="v-name">No tube called “<span class="echo">' + esc(nq) + '</span>” in this sample lab.</p>' +
      '<p class="v-meta">Names are matched word by word, so “liver 4” finds “Liver RNA, mouse 4”. The map still shows the last tube found.</p>');
    setHTML(vMore, spot ? '<button type="button" class="v-btn put" data-put="' + esc(nq) + '" data-box="' + target.n + '" data-pos="' + spot + '">Put it away in box ' + target.n + ', ' + spot + '</button>' : '');
  }
  function find(q, pickIndex) {
    state.q = q;
    document.querySelectorAll('.chip[data-q]').forEach(function (c) { var v = String(norm(c.getAttribute('data-q')) === norm(q)); if (c.getAttribute('aria-pressed') !== v) c.setAttribute('aria-pressed', v); });
    var hits = search(q);
    if (pickIndex != null) { var t = tubes[pickIndex]; show(t, hits.indexOf(t) === -1 ? [t] : hits, q); return; }
    if (!hits.length) { miss(q); return; }
    show(hits[0], hits, q);
  }
  function putAway(name, n, pos) {
    var t = {box: n, pos: pos, name: name, who: 'You', w: {now: true}};
    tubes.push(t);
    find(name, tubes.indexOf(t));
    renderLog(); renderFleet(); renderCounts();
  }

  // ---------- box 14's record ----------
  var MOVES = [
    {w: when(2026, 10, 14, 16, 5), who: 'Priya N.', what: 'Put in HEK293 p12, vial 2', pos: 'D8'},
    {w: when(2026, 10, 14, 16, 5), who: 'Priya N.', what: 'Put in HEK293 p12, vial 1', pos: 'D7'},
    {w: when(2026, 10, 12, 9, 40), who: 'Tom R.', what: 'Took out HEK293 p9', pos: 'C2, now empty'},
    {w: when(2026, 10, 9, 14, 12), who: 'Ana M.', what: 'Moved box 14 from rack 4 to rack 2', pos: 'shelf 3'},
    {w: when(2026, 10, 8, 11, 30), who: 'Priya N.', what: 'Put in HEK293 p11, vial 1', pos: 'C9'}
  ];
  function renderLog() {
    var list = $('[data-render="log"]'); if (!list) return;
    var mine = tubes.filter(function (t) { return t.who === 'You' && t.box === 14; }).map(function (t) { return {w: t.w, who: 'You', what: 'Put in ' + t.name, pos: t.pos, you: true}; }).reverse();
    var rows = mine.concat(MOVES);
    setHTML(list, rows.map(function (m) {
      return '<li' + (m.you ? ' class="you"' : '') + '><span class="when num">' + fmtWhen(m.w) + '</span><span class="who">' + esc(m.who) + '</span><span class="what echo">' + esc(m.what) + '</span><span class="pos">' + esc(m.pos) + '</span></li>';
    }).join(''));
    var older = base.filter(function (t) { return t.box === 14 && stamp(t.w) < stamp(when(2026, 10, 8, 0, 0)); });
    var first = older.reduce(function (a, t) { return stamp(t.w) < stamp(a.w) ? t : a; }, older[0]);
    var last = older.reduce(function (a, t) { return stamp(t.w) > stamp(a.w) ? t : a; }, older[0]);
    var foot = $('[data-render="logfoot"]');
    if (foot) setText(foot, 'Older lines: ' + older.length + ' tubes put in between ' + fmtDate(first.w) + ' and ' + fmtDate(last.w) + '. Box 14 holds ' + inBox(14).length + ' tubes today.');
  }

  // ---------- the freezer map for lab managers ----------
  function renderFleet() {
    var host = $('[data-render="fleet"]'); if (!host) return;
    var p = state.person;
    var hitBoxes = {};
    tubes.forEach(function (t) { if (p && t.who === p) hitBoxes[t.box] = (hitBoxes[t.box] || 0) + 1; });
    var html = '';
    ['A', 'B'].forEach(function (fz) {
      html += '<div class="fz"><h3>Freezer ' + fz + '</h3><div class="fz-grid" role="img" aria-label="Freezer ' + fz + ': 5 shelves by 4 racks' + (p ? ', boxes holding tubes put in by ' + esc(p) + ' marked' : '') + '"><i class="sh"></i>';
      for (var rk = 1; rk <= 4; rk++) html += '<i class="sh">' + rk + '</i>';
      for (var sh = 1; sh <= 5; sh++) {
        html += '<i class="sh">' + sh + '</i>';
        for (var r2 = 1; r2 <= 4; r2++) {
          html += '<span class="rk">';
          for (var d = 1; d <= 5; d++) {
            var box = null;
            for (var k in boxes) { var b = boxes[k]; if (b.fz === fz && b.shelf === sh && b.rack === r2 && b.drawer === d) box = b; }
            html += box ? '<b class="bx' + (hitBoxes[box.n] ? ' hit' : '') + '">' + box.n + '</b>' : '<b></b>';
          }
          html += '</span>';
        }
      }
      html += '</div></div>';
    });
    setHTML(host, html);
    var v = $('[data-render="fleetverdict"]');
    var people = {}; tubes.forEach(function (t) { people[t.who] = 1; });
    var nBoxes = Object.keys(boxes).length;
    if (!p) {
      setHTML(v, '<b>' + Object.keys(people).length + ' people</b> have put <b class="num">' + tubes.length + ' tubes</b> into ' + nBoxes + ' boxes across 2 freezers. Pick a person to mark the boxes holding their tubes.');
    } else {
      var mine = tubes.filter(function (t) { return t.who === p; });
      var list = Object.keys(hitBoxes).map(Number).sort(function (a, b) { return a - b; });
      setHTML(v, '<b>' + esc(p) + '</b> put in <b class="num">' + mine.length + ' tubes</b>. They sit in ' + list.length + (list.length === 1 ? ' box: ' : ' boxes: ') +
        list.map(function (n) { return 'box ' + n + ' at ' + addr(boxes[n]) + ' (' + hitBoxes[n] + ')'; }).join(', ') + '.');
    }
    document.querySelectorAll('.person').forEach(function (c) { var v = String((c.getAttribute('data-person') || null) === p); if (c.getAttribute('aria-pressed') !== v) c.setAttribute('aria-pressed', v); });
  }
  function renderCounts() {
    document.querySelectorAll('[data-count="tubes"]').forEach(function (el) { setText(el, String(tubes.length)); });
    document.querySelectorAll('[data-count="boxes"]').forEach(function (el) { setText(el, String(Object.keys(boxes).length)); });
  }

  // ---------- wire up ----------
  if (finder) {
    $('#find-form').addEventListener('submit', function (e) { e.preventDefault(); find(qInput.value); });
    finder.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (chip) { qInput.value = chip.getAttribute('data-q'); find(chip.getAttribute('data-q')); return; }
      var go = e.target.closest('[data-go]');
      if (go) {
        var prev = vMore.querySelector('[data-go][disabled]');
        find(state.q, +go.getAttribute('data-go'));
        if (go.disabled) (prev && !prev.disabled ? prev : qInput).focus(); // keep focus on a usable control
        return;
      }
      var put = e.target.closest('[data-put]');
      if (put) { var name = put.getAttribute('data-put'); qInput.value = name; putAway(name, +put.getAttribute('data-box'), put.getAttribute('data-pos')); qInput.focus(); return; }
    });
    $('#reset').addEventListener('click', function () {
      tubes = base.slice(); state.person = null; qInput.value = DEFAULT_Q;
      find(DEFAULT_Q); renderLog(); renderFleet(); renderCounts();
    });
  }
  document.querySelectorAll('.person').forEach(function (c) {
    c.addEventListener('click', function () { state.person = c.getAttribute('data-person') || null; renderFleet(); });
  });

  if (qInput) qInput.value = DEFAULT_Q;
  find(DEFAULT_Q); renderLog(); renderFleet(); renderCounts();
})();
