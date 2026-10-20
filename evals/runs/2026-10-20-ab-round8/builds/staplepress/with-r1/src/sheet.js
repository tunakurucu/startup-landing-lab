/* Staplepress proof sheet: imposition for a saddle-stitched (stapled) A5 zine.
   Shared by the page (window.ProofSheet) and the build script (module.exports),
   so the no-JS page shows exactly what the script draws by default. */
(function (root) {
  'use strict';

  var MIN = 4, MAX = 64;

  // Sheet i (1 = outermost). Outside carries the higher page on the left; inside the even page on the left.
  function sides(total, i) {
    return {
      outside: [total - 2 * (i - 1), 1 + 2 * (i - 1)],
      inside: [2 * i, total - 1 - 2 * (i - 1)]
    };
  }

  function lines(x, y, w, count, step, seed, cls) {
    var out = '';
    for (var k = 0; k < count; k++) {
      var short = (k + seed) % 5 === 4;
      var lw = short ? w * (0.45 + ((k * 7 + seed) % 4) * 0.08) : w;
      out += '<rect class="' + (cls || 'ln') + '" x="' + x.toFixed(1) + '" y="' + (y + k * step).toFixed(1) + '" width="' + lw.toFixed(1) + '" height="2.6"/>';
    }
    return out;
  }

  // One A5 page, drawn in sheet units (1 unit = 1 mm), as an imposition dummy: light content, big page number.
  function page(p, x, y, state) {
    var w = 148.5, h = 210, m = 13, s = '';
    var blank = p > state.pages;
    var cover = p === 1;
    var back = p === state.total && !blank && state.total > 2;
    s += '<g class="pg" data-page="' + p + '">';
    if (blank) {
      s += '<rect class="blank" x="' + (x + m) + '" y="' + (y + m) + '" width="' + (w - 2 * m) + '" height="' + (h - 2 * m) + '"/>';
    } else if (cover) {
      // No full-bleed covers yet: the art stops at a white border; red proof marks show where.
      var ix = x + 11, iy = y + 11, iw = w - 22, ih = h - 22;
      s += '<rect class="art" x="' + ix + '" y="' + iy + '" width="' + iw + '" height="' + ih + '"/>';
      s += '<rect class="art-dark" x="' + (ix + 12) + '" y="' + (iy + 14) + '" width="' + (iw - 24) + '" height="22"/>';
      s += '<circle class="art-sun" cx="' + (x + w / 2) + '" cy="' + (iy + 78) + '" r="26"/>';
      s += '<path class="art-line" d="M' + ix + ' ' + (iy + 112) + ' h' + iw + ' M' + ix + ' ' + (iy + 120) + ' h' + iw + ' M' + ix + ' ' + (iy + 128) + ' h' + iw + '"/>';
      var b = 9;
      s += '<path class="mark-red" d="M' + ix + ' ' + (iy + b) + ' V' + iy + ' H' + (ix + b) +
        ' M' + (ix + iw - b) + ' ' + iy + ' H' + (ix + iw) + ' V' + (iy + b) +
        ' M' + (ix + iw) + ' ' + (iy + ih - b) + ' V' + (iy + ih) + ' H' + (ix + iw - b) +
        ' M' + (ix + b) + ' ' + (iy + ih) + ' H' + ix + ' V' + (iy + ih - b) + '"/>';
    } else if (back) {
      s += '<rect class="art" x="' + (x + w / 2 - 22) + '" y="' + (y + h - 62) + '" width="44" height="30"/>';
      s += lines(x + w / 2 - 30, y + 30, 60, 3, 8, p, 'ln');
    } else {
      var v = p % 3;
      if (v === 0) {
        s += lines(x + m, y + m + 4, w - 2 * m, 17, 7.6, p);
      } else if (v === 1) {
        s += '<rect class="art" x="' + (x + m) + '" y="' + (y + m) + '" width="' + (w - 2 * m) + '" height="74"/>';
        s += lines(x + m, y + m + 86, w - 2 * m, 13, 7.6, p);
      } else {
        s += '<rect class="art" x="' + (x + m) + '" y="' + (y + m) + '" width="' + (w - 2 * m) + '" height="' + (h - 2 * m) + '"/>';
        s += '<path class="art-line" d="M' + (x + m) + ' ' + (y + 150) + ' L' + (x + 60) + ' ' + (y + 96) + ' L' + (x + 92) + ' ' + (y + 128) + ' L' + (x + w - m) + ' ' + (y + 70) + '"/>';
      }
    }
    // The page number, as on a printer's dummy.
    // (the number itself is HTML laid over this chip, so it stays real, selectable text)
    var cx = x + w / 2, cy = y + 128;
    s += '<rect class="chip" x="' + (cx - 34) + '" y="' + (cy - 40) + '" width="68" height="' + (blank ? 62 : 52) + '"/>';
    s += '</g>';
    return s;
  }

  function marks() {
    var s = '', k = 'class="mk"';
    // Crop marks at the four trim corners (trim: 18,18 to 315,228).
    [[18, 18, -1, -1], [315, 18, 1, -1], [315, 228, 1, 1], [18, 228, -1, 1]].forEach(function (c) {
      var x = c[0], y = c[1], dx = c[2], dy = c[3];
      s += '<path ' + k + ' d="M' + (x + dx * 3) + ' ' + y + ' H' + (x + dx * 15) + ' M' + x + ' ' + (y + dy * 3) + ' V' + (y + dy * 15) + '"/>';
    });
    // Fold marks above and below the spine.
    s += '<path class="mk dash" d="M166.5 3 V14 M166.5 232 V243"/>';
    // Registration targets, left and right.
    [[8.5, 123], [324.5, 123]].forEach(function (r) {
      s += '<circle ' + k + ' cx="' + r[0] + '" cy="' + r[1] + '" r="3.6"/><path ' + k + ' d="M' + (r[0] - 6) + ' ' + r[1] + ' H' + (r[0] + 6) + ' M' + r[0] + ' ' + (r[1] - 6) + ' V' + (r[1] + 6) + '"/>';
    });
    // A black (K) step wedge in the top margin: 100, 80, 60, 40, 20 per cent.
    ['#161616', '#474747', '#767676', '#a5a5a5', '#d3d3d3'].forEach(function (f, i) {
      s += '<rect x="' + (226 + i * 9) + '" y="5" width="9" height="7" fill="' + f + '"/>';
    });
    return s;
  }

  function svg(state) {
    var pair = sides(state.total, state.sheet)[state.side];
    var s = '<div class="sheet-inner" role="img" aria-label="' + alt(state) + '">';
    s += '<svg class="sheet" viewBox="0 0 333 246" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">';
    s += '<rect class="paper" x="0" y="0" width="333" height="246"/>';
    s += page(pair[0], 18, 18, state) + page(pair[1], 166.5, 18, state);
    s += '<path class="fold" d="M166.5 18 V228"/>';
    s += marks();
    s += '</svg>';
    s += '<span class="pnum pl" aria-hidden="true">' + pair[0] + (pair[0] > state.pages ? '<small>blank</small>' : '') + '</span>';
    s += '<span class="pnum pr" aria-hidden="true">' + pair[1] + (pair[1] > state.pages ? '<small>blank</small>' : '') + '</span>';
    s += '</div>';
    return s;
  }

  function alt(state) {
    var pair = sides(state.total, state.sheet)[state.side];
    return 'Sheet ' + state.sheet + ' of ' + state.total / 4 + ', ' + state.side + ': page ' + pair[0] + ' on the left, page ' + pair[1] + ' on the right, with crop marks, fold marks and registration targets.';
  }

  function slug(state) {
    return 'STAPLEPRESS PROOF · SAMPLE · ' + state.total + 'pp A5 · BLACK ON UNCOATED · SHEET ' + state.sheet + '/' + state.total / 4 + ' ' + state.side.toUpperCase();
  }

  function status(state) {
    var pair = sides(state.total, state.sheet)[state.side];
    return 'Sheet ' + state.sheet + ' of ' + state.total / 4 + ', ' + state.side + ': pages ' + pair[0] + ' and ' + pair[1] + '. ' +
      pair[0] + '\u00a0+\u00a0' + pair[1] + '\u00a0=\u00a0' + (state.total + 1) + ', like every side of every sheet in a ' + state.total + '\u2011page zine.';
  }

  function note(state) {
    var pair = sides(state.total, state.sheet)[state.side];
    var S = state.total / 4;
    var blanks = pair.filter(function (p) { return p > state.pages; });
    if (blanks.length) {
      return 'Your ' + state.pages + ' pages need ' + (state.total - state.pages) + ' blank' + (state.total - state.pages > 1 ? 's' : '') + ' to fill whole sheets. We drew them at the end (' + (state.pages + 1 === state.total ? 'page ' + state.total : 'pages ' + (state.pages + 1) + '–' + state.total) + '); in your PDF you choose where blanks go.';
    }
    if (pair.indexOf(1) > -1) return 'Page 1 is your cover. We can’t print full-bleed covers yet, so cover art stops short of the edge (red marks).';
    if (state.sheet === S && state.side === 'inside') return 'This is the centre spread: the one place your facing pages print side by side, so art can cross the fold here.';
    if (state.side === 'outside') return 'Turn the sheet over for its inside. Each side is a printer’s spread, not a reading spread.';
    return 'Pages ' + pair[0] + ' and ' + pair[1] + ' face each other only on the press. Folded and stapled, they land in order.';
  }

  // Parse what the visitor typed. Returns {ok, pages} or {ok:false, msg}.
  function parse(raw) {
    var v = String(raw == null ? '' : raw).trim();
    if (v === '') return {ok: false, msg: 'Type a page count from ' + MIN + ' to ' + MAX + ' to redraw the sheet.'};
    if (/^-\d+$/.test(v)) return {ok: false, msg: 'A zine can’t have ' + v + ' pages. This sketch draws ' + MIN + ' to ' + MAX + '; the sheet still shows {prev}.'};
    if (!/^\d+$/.test(v)) return {ok: false, msg: '“' + v.slice(0, 24) + '” isn’t a page count. Type a whole number from ' + MIN + ' to ' + MAX + '.'};
    var n = parseInt(v, 10);
    if (n < MIN || n > MAX) return {ok: false, msg: 'This sketch draws ' + MIN + ' to ' + MAX + ' pages, so ' + n + ' is outside it. The sheet still shows ' + '{prev}' + '.'};
    return {ok: true, pages: n};
  }

  function make(pages, sheet, side) {
    var total = Math.ceil(pages / 4) * 4;
    var S = total / 4;
    return {pages: pages, total: total, sheet: Math.min(Math.max(1, sheet || 1), S), side: side || 'outside'};
  }

  var api = {MIN: MIN, MAX: MAX, sides: sides, svg: svg, slug: slug, status: status, note: note, parse: parse, make: make, alt: alt};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ProofSheet = api;
})(this);
