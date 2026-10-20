/* Rackwise sample data and drawing functions. Shared by the build (static first paint) and the page script. */
var RW = (function () {
  var ROWS = 'ABCDEFGHI';
  var FREEZER = { id: 2, shelves: 5, racks: ['A', 'B', 'C', 'D'], boxes: 5 };

  // Sample freezer, written for this page. Every date is a real 2026 date with its weekday.
  var SAMPLES = [
    { id: 'hek12', name: 'HEK293 p12', shelf: 3, rack: 'C', box: 4, well: 'E6', by: 'M. Okafor', on: 'Wed 14 Oct 2026' },
    { id: 'hek8', name: 'HEK293 p8', shelf: 3, rack: 'C', box: 4, well: 'D2', by: 'M. Okafor', on: 'Tue 6 Oct 2026' },
    { id: 'hek6', name: 'HEK293 p6', shelf: 3, rack: 'C', box: 4, well: 'A1', by: 'T. Lindqvist', on: 'Mon 5 Oct 2026' },
    { id: 'hek4', name: 'HEK293 p4', shelf: 3, rack: 'C', box: 4, well: 'A2', by: 'J. Reyes', on: 'Fri 2 Oct 2026' },
    { id: 'puc', name: 'pUC19 miniprep 3', shelf: 1, rack: 'A', box: 2, well: 'B3', by: 'J. Reyes', on: 'Mon 12 Oct 2026' },
    { id: 'gfp', name: 'Anti-GFP aliquot 7', shelf: 2, rack: 'B', box: 1, well: 'A9', by: 'S. Haddad', on: 'Thu 8 Oct 2026' },
    { id: 'lys', name: 'Liver lysate M7', shelf: 4, rack: 'D', box: 3, well: 'H2', by: 'J. Reyes', on: 'Fri 9 Oct 2026' },
    { id: 'dh10b', name: 'DH10B competent cells', shelf: 1, rack: 'D', box: 5, well: 'C4', by: 'S. Haddad', on: 'Fri 2 Oct 2026' },
    { id: 'qc3', name: 'Plasma pool QC-3', shelf: 5, rack: 'A', box: 1, well: 'F7', by: 'T. Lindqvist', on: 'Mon 19 Oct 2026' },
    { id: 'g14', name: 'gRNA 14', shelf: 2, rack: 'C', box: 3, well: 'G5', by: 'T. Lindqvist', on: 'Thu 15 Oct 2026' }
  ];

  // Positions that were emptied, with what left them (keeps the well lookup and the box log in step).
  var EMPTIED = {
    '3C4:E5': { name: 'HEK293 p10', by: 'T. Lindqvist', on: 'Tue 13 Oct 2026' }
  };

  // The Box 4 log the lab manager reads. Newest first.
  var LOG = [
    { on: 'Wed 14 Oct 2026', by: 'M. Okafor', act: 'Put in', name: 'HEK293 p12', well: 'E6' },
    { on: 'Tue 13 Oct 2026', by: 'T. Lindqvist', act: 'Took out', name: 'HEK293 p10', well: 'E5' },
    { on: 'Fri 9 Oct 2026', by: 'J. Reyes', act: 'Put in', name: 'HEK293 p10', well: 'E5' },
    { on: 'Tue 6 Oct 2026', by: 'M. Okafor', act: 'Put in', name: 'HEK293 p8', well: 'D2' },
    { on: 'Mon 5 Oct 2026', by: 'T. Lindqvist', act: 'Put in', name: 'HEK293 p6', well: 'A1' },
    { on: 'Fri 2 Oct 2026', by: 'J. Reyes', act: 'Put in', name: 'HEK293 p4', well: 'A2' }
  ];

  function boxKey(s) { return '' + s.shelf + s.rack + s.box; }

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  // Which positions in a box hold a tube. Seeded per box, so every load shows the same freezer.
  function occupancy(key) {
    var s = hash('box' + key), set = {};
    for (var r = 0; r < 9; r++) for (var c = 1; c <= 9; c++) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      if (s / 4294967296 < 0.56) set[ROWS[r] + c] = true;
    }
    SAMPLES.forEach(function (x) { if (boxKey(x) === key) set[x.well] = true; });
    Object.keys(EMPTIED).forEach(function (k) { var p = k.split(':'); if (p[0] === key) delete set[p[1]]; });
    return set;
  }

  function sampleAt(key, well) {
    for (var i = 0; i < SAMPLES.length; i++) if (boxKey(SAMPLES[i]) === key && SAMPLES[i].well === well) return SAMPLES[i];
    return null;
  }

  // 9 x 9 cryobox, top view, cut corner at A1 like the real boxes.
  // opts: target (well), taken (bool), rings ({well:true}), label (bool)
  function gridSVG(key, opts) {
    opts = opts || {};
    var occ = occupancy(key), out = [];
    out.push('<svg class="grid-svg" viewBox="0 0 292 292" aria-hidden="true" focusable="false">');
    out.push('<path class="box-outline" d="M40 24H286V284H26V38Z"/>');
    for (var c = 0; c < 9; c++) out.push('<text class="g-lab" x="' + (44 + c * 28) + '" y="16" text-anchor="middle">' + (c + 1) + '</text>');
    for (var r = 0; r < 9; r++) out.push('<text class="g-lab" x="12" y="' + (46 + r * 28) + '" text-anchor="middle">' + ROWS[r] + '</text>');
    for (r = 0; r < 9; r++) for (c = 0; c < 9; c++) {
      var w = ROWS[r] + (c + 1), cx = 44 + c * 28, cy = 42 + r * 28;
      var isT = opts.target === w, filled = occ[w] && !(isT && opts.taken);
      var cls = 'well' + (filled ? ' on' : '') + (isT ? (opts.taken ? ' out' : ' hit') : '');
      out.push('<circle class="' + cls + '" data-w="' + w + '" cx="' + cx + '" cy="' + cy + '" r="10"/>');
      if (isT || (opts.rings && opts.rings[w])) out.push('<circle class="ring' + (isT ? ' ring-hit' : '') + '" cx="' + cx + '" cy="' + cy + '" r="13.5"/>');
    }
    out.push('</svg>');
    return out.join('');
  }

  // Upright freezer, front elevation with the outer door open: five shelves, racks A–D on each.
  function elevSVG(shelf, rack) {
    var out = [];
    out.push('<svg class="elev-svg" viewBox="0 0 196 330" aria-hidden="true" focusable="false">');
    out.push('<rect class="cab" x="22" y="6" width="168" height="306" rx="5"/>');
    out.push('<rect class="cab-in" x="32" y="16" width="148" height="284" rx="2"/>');
    out.push('<path class="door" d="M22 10 L4 22 L4 300 L22 310"/>');
    out.push('<path class="foot" d="M34 312v10M178 312v10"/>');
    var top = 22, h = 54.4;
    for (var s = 1; s <= 5; s++) {
      var y = top + (s - 1) * h;
      var cur = s === shelf;
      out.push('<rect class="shelf' + (cur ? ' shelf-hit' : '') + '" x="36" y="' + (y) + '" width="140" height="' + (h - 6) + '" rx="1.5"/>');
      out.push('<text class="e-lab" x="13" y="' + (y + h / 2 + 1) + '" text-anchor="middle">' + s + '</text>');
      for (var k = 0; k < 4; k++) {
        var rx = 40 + k * 34, hit = cur && FREEZER.racks[k] === rack;
        out.push('<rect class="rack' + (hit ? ' rack-hit' : '') + '" x="' + rx + '" y="' + (y + 4) + '" width="30" height="' + (h - 14) + '" rx="1"/>');
        if (s === 1) out.push('<text class="e-lab" x="' + (rx + 15) + '" y="' + (y + h / 2 + 2) + '" text-anchor="middle">' + FREEZER.racks[k] + '</text>');
      }
    }
    out.push('</svg>');
    return out.join('');
  }

  function tokens(s) { return String(s).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean); }

  // Whole-token search: "14" finds gRNA 14, never 140; letters may be a prefix ("lys" finds lysate).
  function search(q) {
    var qt = tokens(q);
    if (!qt.length) return [];
    return SAMPLES.filter(function (s) {
      var nt = tokens(s.name);
      return qt.every(function (t) {
        return nt.some(function (n) { return n === t || (/^[a-z]/.test(t) && t.length >= 3 && n.indexOf(t) === 0); });
      });
    });
  }

  return { ROWS: ROWS, FREEZER: FREEZER, SAMPLES: SAMPLES, EMPTIED: EMPTIED, LOG: LOG, boxKey: boxKey, occupancy: occupancy,
    sampleAt: sampleAt, gridSVG: gridSVG, elevSVG: elevSVG, search: search, tokens: tokens };
})();
if (typeof module !== 'undefined') module.exports = RW;
