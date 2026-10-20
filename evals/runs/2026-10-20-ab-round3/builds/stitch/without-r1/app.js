/* Crossling landing page — on-page pattern editor.
   Plain JS, no dependencies, runs from disk. */
(function () {
  'use strict';

  /* ---------- site config: fill these in when known ---------- */
  var CONFIG = {
    BETA_URL: '',                       // final beta editor address; while empty, "Open the beta editor" scrolls to the on-page editor
    CONTACT_EMAIL: 'hello@crossling.app' // used for the seller / contact mailto links
  };

  /* ---------- thread catalogue (code, name, hex) ---------- */
  var THREADS = [
    ['B5200', 'Snow White', '#ffffff'],
    ['3865', 'Winter White', '#f9f7f1'],
    ['415', 'Pearl Grey', '#d1d1d1'],
    ['414', 'Steel Grey Dark', '#8c8c8c'],
    ['3799', 'Pewter Grey Very Dark', '#424242'],
    ['310', 'Black', '#000000'],
    ['3371', 'Black Brown', '#1e1108'],
    ['801', 'Coffee Brown Dark', '#653919'],
    ['436', 'Tan', '#c89e6b'],
    ['3770', 'Tawny Very Light', '#ffeee3'],
    ['353', 'Peach', '#fec9b6'],
    ['3689', 'Mauve Light', '#fbbfc2'],
    ['3806', 'Cyclamen Pink Light', '#ff8cc0'],
    ['3607', 'Plum Light', '#c54989'],
    ['321', 'Red', '#c72b3b'],
    ['606', 'Bright Orange-Red', '#fa3203'],
    ['740', 'Tangerine', '#ff8b00'],
    ['743', 'Yellow Medium', '#ffe300'],
    ['3078', 'Golden Yellow Very Light', '#fdf9c0'],
    ['907', 'Parrot Green Light', '#c9e238'],
    ['702', 'Kelly Green', '#47a72f'],
    ['904', 'Parrot Green Very Dark', '#2a7a3a'],
    ['500', 'Blue Green Very Dark', '#044d37'],
    ['913', 'Nile Green Medium', '#6dd09b'],
    ['3846', 'Bright Turquoise Light', '#06e3e6'],
    ['598', 'Turquoise Light', '#90c3cc'],
    ['827', 'Blue Very Light', '#bddded'],
    ['996', 'Electric Blue Medium', '#30c2ec'],
    ['798', 'Delft Blue Dark', '#466a8e'],
    ['820', 'Royal Blue Very Dark', '#0e2d7a'],
    ['208', 'Lavender Very Dark', '#835b8b'],
    ['3042', 'Antique Violet Light', '#b7a3b3']
  ];
  var SYMBOLS = ['·', '○', '●', '□', '■', '△', '▲', '◇', '◆', '☆', '★', '+', '×', '/', '\\', '=', '#', '%', '&', '@', '$', '?', '!', '~', '^', '<', '>', 'Z', 'T', 'L', 'V', 'N'];
  var CODE_INDEX = {};
  THREADS.forEach(function (t, i) { CODE_INDEX[t[0]] = i; t.rgb = hexToRgb(t[2]); t.lab = rgbToLab(t.rgb); t.lum = luminance(t.rgb); });

  /* ---------- original sample patterns ---------- */
  var SAMPLES = {
    sailboat: {
      name: 'Sailboat',
      key: { '.': '827', 'S': '743', 'c': 'B5200', 'm': '3371', 's': '3865', 'H': '801', 'r': '321', '~': '798', 'w': '996' },
      rows: [
        '........................',
        '..........SS............',
        '.........SSSS....cc.....',
        '..cc.....SSSS...cccc....',
        '.cccc.....SS............',
        '........................',
        '............mr..........',
        '...........sm.s.........',
        '..........ssm.ss........',
        '.........sssm.sss.......',
        '........ssssm.ssss......',
        '.......sssssm.sssss.....',
        '......ssssssm.ssssss....',
        '.....sssssssm.sssssss...',
        '....ssssssssm.ssssssss..',
        '...sssssssssm...........',
        '............m...........',
        '..HHHHHHHHHHHHHHHHHHHH..',
        '...HrrrrrrrrrrrrrrrrH...',
        '....HHHHHHHHHHHHHHHH....',
        '~~~~~~~~~~~~~~~~~~~~~~~~',
        '~~w~~~~w~~~~w~~~~w~~~~w~',
        '~~~~~~~~~~~~~~~~~~~~~~~~',
        '~~~~~w~~~~w~~~~w~~~~w~~~'
      ]
    },
    pear: {
      name: 'Pear',
      key: { '.': null, 'm': '801', 'L': '904', 'l': '500', 'g': '907', 'G': '3078', 'd': '702' },
      rows: [
        '........................',
        '............m...........',
        '...........mm.LLL.......',
        '...........m.LLLLL......',
        '..........gmg..LLl......',
        '.........ggggg..........',
        '.........ggggg..........',
        '........gggggGd.........',
        '........ggggGGd.........',
        '........gggggGd.........',
        '.......gggggggdd........',
        '......gggggggggdd.......',
        '.....gggggggggggdd......',
        '....ggggggggggggddd.....',
        '....gggGGgggggggddd.....',
        '....ggGGGGggggggddd.....',
        '....ggGGGGggggggddd.....',
        '....gggGGgggggggddd.....',
        '.....ggggggggggdddd.....',
        '.....gggggggggdddd......',
        '......gggggggddd........',
        '.......ggggddd..........',
        '.........dd.............',
        '........................'
      ]
    }
  };

  function sampleToPattern(s) {
    var h = s.rows.length, w = s.rows[0].length, cells = new Int16Array(w * h);
    for (var y = 0; y < h; y++) {
      if (s.rows[y].length !== w) throw new Error('Sample row ' + y + ' has wrong width');
      for (var x = 0; x < w; x++) {
        var code = s.key[s.rows[y][x]];
        cells[y * w + x] = code == null ? -1 : CODE_INDEX[code];
      }
    }
    return { w: w, h: h, cells: cells, name: s.name };
  }

  /* ---------- colour maths ---------- */
  function hexToRgb(hex) { var n = parseInt(hex.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function luminance(rgb) { return (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255; }
  function rgbToLab(rgb) {
    var r = srgbLin(rgb[0] / 255), g = srgbLin(rgb[1] / 255), b = srgbLin(rgb[2] / 255);
    var x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    var y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    var z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = labF(x); y = labF(y); z = labF(z);
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  }
  function srgbLin(c) { return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
  function labF(t) { return t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116; }
  function labDist(a, b) { var dl = a[0] - b[0], da = a[1] - b[1], db = a[2] - b[2]; return dl * dl + da * da + db * db; }
  function nearestThread(lab, allowed) {
    var best = -1, bd = Infinity;
    for (var i = 0; i < THREADS.length; i++) {
      if (allowed && !allowed[i]) continue;
      var d = labDist(lab, THREADS[i].lab);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }
  function shade(hex, amt) {
    var c = hexToRgb(hex);
    return 'rgb(' + c.map(function (v) { return Math.max(0, Math.min(255, Math.round(v * amt))); }).join(',') + ')';
  }

  /* ---------- state ---------- */
  var pattern = null, original = null;
  var undoStack = [];
  var tool = 'brush', view = 'stitch', showGrid = true;
  var activeThread = CODE_INDEX['321'];
  var swapMode = false;
  var cursor = { x: 0, y: 0, visible: false };
  var cell = 20, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('pattern'), ctx = canvas.getContext('2d');
  var wrap = $('canvas-wrap');
  var fabricPattern = null;

  /* ---------- rendering ---------- */
  function layout() {
    if (!pattern) return;
    var maxW = Math.max(200, wrap.clientWidth), maxH = Math.max(320, Math.min(640, window.innerHeight * 0.7));
    cell = Math.max(4, Math.floor(Math.min(maxW / pattern.w, maxH / pattern.h)));
    var cw = cell * pattern.w, ch = cell * pattern.h;
    canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
    canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
    fabricPattern = null;
    draw();
  }

  function makeFabric() {
    var s = cell * dpr, c = document.createElement('canvas');
    c.width = s; c.height = s;
    var g = c.getContext('2d');
    g.fillStyle = '#efe6d4'; g.fillRect(0, 0, s, s);
    g.fillStyle = 'rgba(120,100,70,.18)';
    var r = Math.max(0.6, s * 0.07);
    [[0, 0], [s, 0], [0, s], [s, s]].forEach(function (p) { g.beginPath(); g.arc(p[0], p[1], r, 0, Math.PI * 2); g.fill(); });
    g.strokeStyle = 'rgba(120,100,70,.07)'; g.lineWidth = Math.max(0.5, s * 0.03);
    g.beginPath(); g.moveTo(0, s / 2); g.lineTo(s, s / 2); g.moveTo(s / 2, 0); g.lineTo(s / 2, s); g.stroke();
    return ctx.createPattern(c, 'repeat');
  }

  function draw() {
    if (!pattern) return;
    var w = pattern.w, h = pattern.h, s = cell * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (view === 'stitch') drawStitches(w, h, s); else drawChart(w, h, s);
    if (showGrid) drawGrid(w, h, s);
    if (cursor.visible) {
      ctx.lineWidth = Math.max(2, s * 0.12); ctx.strokeStyle = '#2b4c7e';
      ctx.strokeRect(cursor.x * s + ctx.lineWidth / 2, cursor.y * s + ctx.lineWidth / 2, s - ctx.lineWidth, s - ctx.lineWidth);
    }
  }

  function drawStitches(w, h, s) {
    if (!fabricPattern) fabricPattern = makeFabric();
    ctx.fillStyle = fabricPattern; ctx.fillRect(0, 0, w * s, h * s);
    var inset = s * 0.16, lw = Math.max(1.2, s * 0.3);
    ctx.lineCap = 'round';
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var t = pattern.cells[y * w + x]; if (t < 0) continue;
      var hex = THREADS[t][2], x0 = x * s + inset, y0 = y * s + inset, x1 = (x + 1) * s - inset, y1 = (y + 1) * s - inset;
      // under-stitch shadow
      ctx.strokeStyle = 'rgba(0,0,0,.28)'; ctx.lineWidth = lw;
      ctx.beginPath(); ctx.moveTo(x0 + s * 0.04, y0 + s * 0.08); ctx.lineTo(x1 + s * 0.04, y1 + s * 0.08); ctx.stroke();
      // bottom leg
      ctx.strokeStyle = shade(hex, 0.88); ctx.lineWidth = lw;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      // top leg with shadow
      ctx.strokeStyle = 'rgba(0,0,0,.28)';
      ctx.beginPath(); ctx.moveTo(x1 + s * 0.04, y0 + s * 0.08); ctx.lineTo(x0 + s * 0.04, y1 + s * 0.08); ctx.stroke();
      ctx.strokeStyle = hex;
      ctx.beginPath(); ctx.moveTo(x1, y0); ctx.lineTo(x0, y1); ctx.stroke();
      // highlight
      if (s > 10) {
        ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = lw * 0.3;
        ctx.beginPath(); ctx.moveTo(x1 - s * 0.03, y0 - s * 0.03); ctx.lineTo(x0 - s * 0.03, y1 - s * 0.03); ctx.stroke();
      }
    }
  }

  function drawChart(w, h, s) {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w * s, h * s);
    var showSym = s >= 11;
    ctx.font = Math.round(s * 0.62) + 'px ui-monospace, Menlo, Consolas, monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var t = pattern.cells[y * w + x]; if (t < 0) continue;
      ctx.fillStyle = THREADS[t][2]; ctx.fillRect(x * s, y * s, s, s);
      if (showSym) {
        ctx.fillStyle = THREADS[t].lum > 0.5 ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,.92)';
        ctx.fillText(SYMBOLS[t % SYMBOLS.length], x * s + s / 2, y * s + s / 2 + s * 0.04);
      }
    }
  }

  function drawGrid(w, h, s) {
    var chart = view === 'chart';
    ctx.lineWidth = 1;
    ctx.strokeStyle = chart ? 'rgba(0,0,0,.12)' : 'rgba(80,60,30,.10)';
    ctx.beginPath();
    for (var x = 0; x <= w; x++) { ctx.moveTo(x * s + 0.5, 0); ctx.lineTo(x * s + 0.5, h * s); }
    for (var y = 0; y <= h; y++) { ctx.moveTo(0, y * s + 0.5); ctx.lineTo(w * s, y * s + 0.5); }
    ctx.stroke();
    ctx.lineWidth = Math.max(1.5, dpr * 1.2);
    ctx.strokeStyle = chart ? 'rgba(0,0,0,.55)' : 'rgba(80,60,30,.32)';
    ctx.beginPath();
    for (x = 0; x <= w; x += 10) { ctx.moveTo(x * s, 0); ctx.lineTo(x * s, h * s); }
    for (y = 0; y <= h; y += 10) { ctx.moveTo(0, y * s); ctx.lineTo(w * s, y * s); }
    ctx.stroke();
  }

  /* ---------- editing ---------- */
  function pushUndo() {
    undoStack.push(new Int16Array(pattern.cells));
    if (undoStack.length > 60) undoStack.shift();
    $('btn-undo').disabled = false;
  }
  function undo() {
    if (!undoStack.length) return;
    pattern.cells = undoStack.pop();
    $('btn-undo').disabled = undoStack.length === 0;
    afterChange();
  }
  function setCell(x, y, t) {
    if (x < 0 || y < 0 || x >= pattern.w || y >= pattern.h) return false;
    var i = y * pattern.w + x;
    if (pattern.cells[i] === t) return false;
    pattern.cells[i] = t; return true;
  }
  function floodFill(x, y, t) {
    var w = pattern.w, h = pattern.h, from = pattern.cells[y * w + x];
    if (from === t) return false;
    var stack = [x, y], c = pattern.cells;
    while (stack.length) {
      var cy = stack.pop(), cx = stack.pop();
      if (cx < 0 || cy < 0 || cx >= w || cy >= h) continue;
      var i = cy * w + cx; if (c[i] !== from) continue;
      c[i] = t;
      stack.push(cx + 1, cy, cx - 1, cy, cx, cy + 1, cx, cy - 1);
    }
    return true;
  }
  function applyTool(x, y, first) {
    if (x < 0 || y < 0 || x >= pattern.w || y >= pattern.h) return;
    var changed = false;
    if (tool === 'brush') changed = setCell(x, y, activeThread);
    else if (tool === 'erase') changed = setCell(x, y, -1);
    else if (tool === 'fill') { if (first) changed = floodFill(x, y, activeThread); }
    else if (tool === 'pick') {
      if (first) { var t = pattern.cells[y * pattern.w + x]; if (t >= 0) { setActiveThread(t); setTool('brush'); toast('Picked ' + THREADS[t][0] + ' ' + THREADS[t][1]); } }
    }
    if (changed) afterChange();
  }
  function replaceThread(from, to) {
    var c = pattern.cells, any = false;
    for (var i = 0; i < c.length; i++) if (c[i] === from) { c[i] = to; any = true; }
    return any;
  }
  function afterChange() { draw(); renderPalette(); renderStats(); }

  var painting = false, strokeStarted = false;
  function cellFromEvent(e) {
    var r = canvas.getBoundingClientRect();
    return { x: Math.floor((e.clientX - r.left) / (r.width / pattern.w)), y: Math.floor((e.clientY - r.top) / (r.height / pattern.h)) };
  }
  canvas.addEventListener('pointerdown', function (e) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault(); canvas.focus({ preventScroll: true });
    canvas.setPointerCapture(e.pointerId);
    painting = true;
    var p = cellFromEvent(e);
    cursor.x = clamp(p.x, 0, pattern.w - 1); cursor.y = clamp(p.y, 0, pattern.h - 1); cursor.visible = false;
    if (tool !== 'pick') pushUndo();
    strokeStarted = true;
    applyTool(p.x, p.y, true);
  });
  canvas.addEventListener('pointermove', function (e) {
    if (!painting || (tool !== 'brush' && tool !== 'erase')) return;
    var p = cellFromEvent(e); applyTool(p.x, p.y, false);
  });
  function endStroke(e) { if (!painting) return; painting = false; try { canvas.releasePointerCapture(e.pointerId); } catch (_) {} }
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);
  canvas.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  canvas.addEventListener('keydown', function (e) {
    var moves = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    if (moves[e.key]) {
      e.preventDefault(); cursor.visible = true;
      cursor.x = clamp(cursor.x + moves[e.key][0], 0, pattern.w - 1);
      cursor.y = clamp(cursor.y + moves[e.key][1], 0, pattern.h - 1);
      draw();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); cursor.visible = true;
      if (tool !== 'pick') pushUndo();
      applyTool(cursor.x, cursor.y, true);
      if (!['brush', 'erase', 'fill'].includes(tool)) draw();
    } else if (e.key === 'Escape') { cursor.visible = false; draw(); }
  });
  canvas.addEventListener('blur', function () { if (cursor.visible) { cursor.visible = false; draw(); } });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      if (document.activeElement && /input|select|textarea/i.test(document.activeElement.tagName)) return;
      e.preventDefault(); undo(); return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!document.querySelector('.workbench').contains(document.activeElement)) return;
    if (document.activeElement && /input|select|textarea/i.test(document.activeElement.tagName)) return;
    var k = e.key.toLowerCase();
    if (k === 'b') setTool('brush'); else if (k === 'f') setTool('fill'); else if (k === 'i') setTool('pick'); else if (k === 'e') setTool('erase');
  });

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---------- tools / view UI ---------- */
  function setTool(t) {
    tool = t;
    document.querySelectorAll('[data-tool]').forEach(function (b) {
      var on = b.dataset.tool === t; b.classList.toggle('is-active', on); b.setAttribute('aria-checked', on);
    });
    canvas.style.cursor = t === 'pick' ? 'copy' : t === 'fill' ? 'cell' : 'crosshair';
    $('stage-hint').textContent = {
      brush: 'Click or drag on the squares to stitch with the selected thread. Keyboard: arrows move, Enter stitches.',
      fill: 'Click a square to fill every connected square of the same thread.',
      pick: 'Click a square to make its thread the active one.',
      erase: 'Click or drag to unpick stitches and show the fabric.'
    }[t];
  }
  document.querySelectorAll('[data-tool]').forEach(function (b) { b.addEventListener('click', function () { setTool(b.dataset.tool); }); });
  document.querySelectorAll('[data-view]').forEach(function (b) {
    b.addEventListener('click', function () {
      view = b.dataset.view;
      document.querySelectorAll('[data-view]').forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-checked', on); });
      draw();
    });
  });
  $('chk-grid').addEventListener('change', function () { showGrid = this.checked; draw(); });
  $('btn-undo').addEventListener('click', undo);
  $('btn-reset').addEventListener('click', function () {
    if (!original) return; pushUndo(); pattern.cells = new Int16Array(original); afterChange(); toast('Pattern reset');
  });

  /* ---------- palette ---------- */
  function usedThreads() {
    var counts = {}; var c = pattern.cells;
    for (var i = 0; i < c.length; i++) if (c[i] >= 0) counts[c[i]] = (counts[c[i]] || 0) + 1;
    return counts;
  }
  var extraThreads = {}; // threads added but not yet stitched
  function renderPalette() {
    var counts = usedThreads(), ul = $('palette'); ul.innerHTML = '';
    var ids = Object.keys(counts).map(Number);
    Object.keys(extraThreads).map(Number).forEach(function (t) { if (!counts[t] && t !== undefined) ids.push(t); });
    if (!counts[activeThread] && ids.indexOf(activeThread) < 0) ids.push(activeThread);
    ids.sort(function (a, b) { return (counts[b] || 0) - (counts[a] || 0) || a - b; });
    ids.forEach(function (t) {
      var th = THREADS[t], li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.className = 'swatch' + (t === activeThread ? ' is-active' : '');
      b.setAttribute('aria-pressed', t === activeThread);
      b.innerHTML = '<span class="swatch-colour" style="background:' + th[2] + '"></span>' +
        '<span class="swatch-sym" aria-hidden="true">' + SYMBOLS[t % SYMBOLS.length] + '</span>' +
        '<span class="swatch-name"><b>' + th[0] + '</b>' + th[1] + '</span>' +
        '<span class="swatch-count">' + (counts[t] ? counts[t] : '—') + '</span>';
      b.title = th[0] + ' ' + th[1] + (counts[t] ? ' · ' + counts[t] + ' stitches' : ' · not used yet');
      b.addEventListener('click', function () { setActiveThread(t); if (tool === 'pick' || tool === 'erase') setTool('brush'); });
      li.appendChild(b); ul.appendChild(li);
    });
    var sw = $('swap-row'), th = THREADS[activeThread];
    sw.hidden = !counts[activeThread];
    $('swap-label').textContent = th[0] + ' is used in ' + (counts[activeThread] || 0) + ' squares.';
    if (!counts[activeThread] && swapMode) exitSwap();
    document.querySelectorAll('.cat-item').forEach(function (b) { b.classList.toggle('is-active', Number(b.dataset.t) === activeThread); });
  }
  function setActiveThread(t) { activeThread = t; renderPalette(); }

  // catalogue
  var catGrid = $('catalogue-grid');
  THREADS.forEach(function (th, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cat-item'; b.style.background = th[2]; b.dataset.t = i;
    b.title = th[0] + ' ' + th[1]; b.setAttribute('aria-label', th[0] + ' ' + th[1]);
    b.addEventListener('click', function () {
      if (swapMode) {
        if (i === activeThread) { toast('That is the same thread'); return; }
        pushUndo(); var from = activeThread;
        replaceThread(from, i); extraThreads[i] = true; delete extraThreads[from];
        activeThread = i; exitSwap(); afterChange();
        toast('Swapped ' + THREADS[from][0] + ' for ' + THREADS[i][0] + ' ' + THREADS[i][1]);
      } else {
        extraThreads[i] = true; setActiveThread(i); if (tool !== 'fill') setTool('brush');
        toast(THREADS[i][0] + ' ' + THREADS[i][1] + ' is the active thread');
      }
    });
    catGrid.appendChild(b);
  });
  var catOpen = false;
  function setCatalogue(open) {
    catOpen = open; $('catalogue').hidden = !open; $('btn-catalogue').setAttribute('aria-expanded', open);
    $('btn-catalogue').textContent = open ? '– Close catalogue' : '+ Add a thread';
  }
  $('btn-catalogue').addEventListener('click', function () { if (swapMode) exitSwap(); setCatalogue(!catOpen); });
  $('btn-swap').addEventListener('click', function () {
    if (swapMode) { exitSwap(); return; }
    swapMode = true; setCatalogue(true); $('catalogue').classList.add('is-swap');
    $('catalogue-title').textContent = 'Pick the thread to replace ' + THREADS[activeThread][0] + ' everywhere';
    $('btn-swap').textContent = 'Cancel swap';
  });
  function exitSwap() {
    swapMode = false; $('catalogue').classList.remove('is-swap');
    $('catalogue-title').textContent = 'Thread catalogue · click to use';
    $('btn-swap').textContent = 'Swap for another thread';
  }

  /* ---------- stats ---------- */
  function renderStats() {
    var counts = usedThreads(), n = 0, k = Object.keys(counts).length;
    for (var key in counts) n += counts[key];
    var count = Number($('fabric-count').value), per = count === 28 ? 14 : count;
    var win = pattern.w / per, hin = pattern.h / per;
    $('stat-dims').textContent = pattern.w + ' × ' + pattern.h;
    $('stat-count').textContent = n.toLocaleString() + ' of ' + (pattern.w * pattern.h).toLocaleString();
    $('stat-threads').textContent = k + (k === 1 ? ' thread' : ' threads');
    $('stat-size').textContent = fmt(win * 2.54) + ' × ' + fmt(hin * 2.54) + ' cm (' + fmt(win) + ' × ' + fmt(hin) + ' in)';
  }
  function fmt(v) { return (Math.round(v * 10) / 10).toString(); }
  $('fabric-count').addEventListener('change', renderStats);

  /* ---------- loading patterns ---------- */
  function loadPattern(p, label) {
    pattern = p; original = new Int16Array(p.cells); undoStack = []; extraThreads = {};
    $('btn-undo').disabled = true; cursor = { x: 0, y: 0, visible: false };
    var counts = usedThreads(); var first = Object.keys(counts).map(Number).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    if (first !== undefined && !counts[activeThread]) activeThread = first;
    if (swapMode) exitSwap();
    canvas.setAttribute('aria-label', (label || 'Pattern') + ', ' + p.w + ' by ' + p.h + ' stitches. Editable. Use arrow keys to move, Enter to apply the current tool.');
    layout(); renderPalette(); renderStats();
  }
  function setSourceChip(name) {
    document.querySelectorAll('[data-sample]').forEach(function (b) { b.classList.toggle('is-active', b.dataset.sample === name); });
  }
  document.querySelectorAll('[data-sample]').forEach(function (b) {
    b.addEventListener('click', function () {
      loadPattern(sampleToPattern(SAMPLES[b.dataset.sample]), SAMPLES[b.dataset.sample].name + ' sample');
      setSourceChip(b.dataset.sample); $('photo-input').value = '';
    });
  });

  /* ---------- photo import (all local) ---------- */
  $('photo-input').addEventListener('change', function () {
    var file = this.files && this.files[0]; if (!file) return;
    if (!/^image\//.test(file.type)) { toast('That file is not an image'); return; }
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () {
      URL.revokeObjectURL(url);
      try {
        var p = imageToPattern(img, Number($('import-width').value), Number($('import-colours').value));
        loadPattern(p, 'Your photo'); setSourceChip(null);
        toast('Converted to ' + p.w + ' × ' + p.h + ' stitches using ' + Object.keys(usedThreads()).length + ' threads');
      } catch (err) { toast('Could not convert that image'); }
    };
    img.onerror = function () { URL.revokeObjectURL(url); toast('Could not read that image'); };
    img.src = url;
  });

  function imageToPattern(img, w, maxColours) {
    var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
    var h = Math.max(4, Math.min(80, Math.round(w * ih / iw)));
    // step-down resize for smoother averaging
    var src = img, sw = iw, sh = ih;
    while (sw / 2 > w && sh / 2 > h) {
      var c = document.createElement('canvas'); c.width = Math.round(sw / 2); c.height = Math.round(sh / 2);
      var g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
      g.drawImage(src, 0, 0, c.width, c.height); src = c; sw = c.width; sh = c.height;
    }
    var out = document.createElement('canvas'); out.width = w; out.height = h;
    var og = out.getContext('2d'); og.imageSmoothingEnabled = true; og.imageSmoothingQuality = 'high';
    og.drawImage(src, 0, 0, w, h);
    var data = og.getImageData(0, 0, w, h).data, cells = new Int16Array(w * h), labs = new Array(w * h), counts = {};
    for (var i = 0; i < w * h; i++) {
      if (data[i * 4 + 3] < 128) { cells[i] = -1; continue; }
      var lab = rgbToLab([data[i * 4], data[i * 4 + 1], data[i * 4 + 2]]); labs[i] = lab;
      var t = nearestThread(lab); cells[i] = t; counts[t] = (counts[t] || 0) + 1;
    }
    var keep = Object.keys(counts).map(Number).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, maxColours);
    if (keep.length < Object.keys(counts).length) {
      var allowed = {}; keep.forEach(function (t) { allowed[t] = true; });
      for (i = 0; i < w * h; i++) if (cells[i] >= 0 && !allowed[cells[i]]) cells[i] = nearestThread(labs[i], allowed);
    }
    return { w: w, h: h, cells: cells, name: 'Your photo' };
  }

  /* ---------- export ---------- */
  $('btn-export').addEventListener('click', function () {
    var counts = usedThreads(), ids = Object.keys(counts).map(Number).sort(function (a, b) { return counts[b] - counts[a]; });
    var s = 22, pad = 40, w = pattern.w, h = pattern.h, legendRow = 26, titleH = 54;
    var legendH = ids.length * legendRow + 30;
    var c = document.createElement('canvas'); c.width = w * s + pad * 2; c.height = titleH + h * s + pad + legendH + pad;
    var g = c.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
    g.fillStyle = '#211d19'; g.font = '600 20px system-ui, sans-serif'; g.textBaseline = 'alphabetic';
    g.fillText('Crossling · ' + (pattern.name || 'Pattern') + ' · ' + w + ' × ' + h + ' stitches · ' + ids.length + ' threads', pad, 34);
    g.save(); g.translate(pad, titleH);
    g.font = Math.round(s * 0.62) + 'px ui-monospace, Menlo, Consolas, monospace'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var t = pattern.cells[y * w + x]; if (t < 0) continue;
      g.fillStyle = THREADS[t][2]; g.fillRect(x * s, y * s, s, s);
      g.fillStyle = THREADS[t].lum > 0.5 ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,.92)';
      g.fillText(SYMBOLS[t % SYMBOLS.length], x * s + s / 2, y * s + s / 2 + 1);
    }
    g.lineWidth = 1; g.strokeStyle = 'rgba(0,0,0,.18)'; g.beginPath();
    for (x = 0; x <= w; x++) { g.moveTo(x * s + 0.5, 0); g.lineTo(x * s + 0.5, h * s); }
    for (y = 0; y <= h; y++) { g.moveTo(0, y * s + 0.5); g.lineTo(w * s, y * s + 0.5); }
    g.stroke();
    g.lineWidth = 2; g.strokeStyle = 'rgba(0,0,0,.7)'; g.beginPath();
    for (x = 0; x <= w; x += 10) { g.moveTo(x * s, 0); g.lineTo(x * s, h * s); }
    for (y = 0; y <= h; y += 10) { g.moveTo(0, y * s); g.lineTo(w * s, y * s); }
    g.stroke();
    g.restore();
    // legend
    var ly = titleH + h * s + pad;
    g.fillStyle = '#211d19'; g.font = '600 14px system-ui, sans-serif'; g.textAlign = 'left'; g.textBaseline = 'middle';
    g.fillText('Thread key', pad, ly); ly += 24;
    ids.forEach(function (t) {
      var th = THREADS[t];
      g.fillStyle = th[2]; g.fillRect(pad, ly - 9, 18, 18); g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 1; g.strokeRect(pad + 0.5, ly - 8.5, 17, 17);
      g.fillStyle = th.lum > 0.5 ? '#000' : '#fff'; g.font = '13px ui-monospace, Menlo, Consolas, monospace'; g.textAlign = 'center';
      g.fillText(SYMBOLS[t % SYMBOLS.length], pad + 9, ly + 1);
      g.fillStyle = '#211d19'; g.textAlign = 'left'; g.font = '14px system-ui, sans-serif';
      g.fillText(th[0] + '  ' + th[1] + '  ·  ' + counts[t] + ' stitches', pad + 28, ly);
      ly += legendRow;
    });
    var a = document.createElement('a');
    a.download = 'crossling-' + (pattern.name || 'pattern').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.png';
    a.href = c.toDataURL('image/png'); document.body.appendChild(a); a.click(); a.remove();
    toast('Chart downloaded');
  });

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg) {
    var el = $('toast'); el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  /* ---------- site links ---------- */
  document.querySelectorAll('.js-beta').forEach(function (a) {
    if (CONFIG.BETA_URL) { a.href = CONFIG.BETA_URL; a.rel = 'noopener'; }
    else a.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('editor').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { canvas.focus({ preventScroll: true }); }, 500);
      toast('The beta is moving to its permanent address. Until then, the editor below is the real thing.');
    });
  });
  document.querySelectorAll('.js-contact').forEach(function (a) {
    a.href = 'mailto:' + CONFIG.CONTACT_EMAIL + '?subject=' + encodeURIComponent(a.dataset.subject || 'Crossling');
  });

  /* ---------- decorative: thread strip + step art ---------- */
  (function () {
    var strip = $('thread-strip'), picks = ['321', '740', '743', '907', '702', '904', '3846', '996', '798', '820', '3607', '3806', '3689', '353', '436', '801', '414', '310', '208', '3042', '598', '913', '3078', '3865'];
    picks.forEach(function (code) {
      var th = THREADS[CODE_INDEX[code]], d = document.createElement('div');
      d.className = 'thread'; d.style.background = th[2]; d.title = th[0] + ' ' + th[1];
      d.innerHTML = '<span>' + th[0] + '</span>'; strip.appendChild(d);
    });
    // step 2: photo gradient turned into thread squares
    var svg2 = $('step-art-2'), svg3 = $('step-art-3'), ns = 'http://www.w3.org/2000/svg';
    var cols = 12, rows = 9, cw = 10, ch2 = 10;
    function mix(a, b, t) { return [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)]; }
    var top = hexToRgb('#bddded'), mid = hexToRgb('#c9e238'), bot = hexToRgb('#2a7a3a');
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
      var t = (y / (rows - 1)) * 0.8 + (x / (cols - 1)) * 0.2, rgb = t < 0.55 ? mix(top, mid, t / 0.55) : mix(mid, bot, (t - 0.55) / 0.45);
      if (y === 2 && x >= 8 && x <= 9) rgb = hexToRgb('#ffe300');
      var th = THREADS[nearestThread(rgbToLab(rgb))];
      var r = document.createElementNS(ns, 'rect');
      r.setAttribute('x', x * cw); r.setAttribute('y', y * ch2); r.setAttribute('width', cw); r.setAttribute('height', ch2);
      r.setAttribute('fill', th[2]); r.setAttribute('stroke', 'rgba(0,0,0,.12)'); r.setAttribute('stroke-width', '.5');
      svg2.appendChild(r);
      var r3 = r.cloneNode(); svg3.appendChild(r3);
    }
    var lbl = document.createElementNS(ns, 'text'); lbl.setAttribute('x', 118); lbl.setAttribute('y', 86); lbl.setAttribute('text-anchor', 'end');
    lbl.setAttribute('font-size', '7'); lbl.setAttribute('font-family', 'ui-monospace, monospace'); lbl.setAttribute('fill', '#211d19');
    lbl.textContent = '827 · 907 · 702 · 904 · 743'; svg2.appendChild(lbl);
    // step 3: a cursor + a swapped region
    var hi = document.createElementNS(ns, 'rect'); hi.setAttribute('x', 50); hi.setAttribute('y', 30); hi.setAttribute('width', 30); hi.setAttribute('height', 20);
    hi.setAttribute('fill', '#c43a2f'); hi.setAttribute('opacity', '.9'); svg3.appendChild(hi);
    var cur = document.createElementNS(ns, 'rect'); cur.setAttribute('x', 61); cur.setAttribute('y', 31); cur.setAttribute('width', 8); cur.setAttribute('height', 8);
    cur.setAttribute('fill', 'none'); cur.setAttribute('stroke', '#211d19'); cur.setAttribute('stroke-width', '2'); svg3.appendChild(cur);
  })();

  /* ---------- init ---------- */
  loadPattern(sampleToPattern(SAMPLES.sailboat), 'Sailboat sample');
  setTool('brush');
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 80); });
})();
