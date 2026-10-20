/* Dockline sample board. All data is invented; nothing leaves the page. */
(function () {
  'use strict';

  var grid = document.getElementById('grid');
  if (!grid) return;

  var START = 6 * 60;          // board starts 06:00
  var SLOTS = 22;              // 22 x 30 minutes = 06:00-17:00
  var NOW = 9 * 60 + 40;       // 09:40 sample clock
  var CLOSED = [12];           // 12:00-12:30 lunch, slot index
  var nextRef = 4482;

  var doors = [
    { n: 1, kind: 'Live unload', win: 2, bookings: [
      [0, 2, 'Harlan Frt', 'PO 88213', 'done'],
      [2, 2, 'Pinebrook', 'PO 88220', 'done'],
      [6, 2, 'RMX', 'At door', 'at-door'],
      [10, 2, 'Kessler', 'PO 88301'],
      [14, 2, 'Northway', 'PO 88315'],
      [18, 2, 'Pinebrook', 'PO 88330']
    ]},
    { n: 2, kind: 'Live unload', win: 2, bookings: [
      [0, 2, 'Tollgate', 'PO 88199', 'done'],
      [4, 2, 'Beacon Haul', 'Late 08:25', 'late'],
      [8, 2, 'Harlan Frt', 'PO 88262'],
      [13, 2, 'Sable Lines', 'PO 88290'],
      [16, 2, 'RMX', 'PO 88318'],
      [20, 2, 'Greyfield', 'PO 88341']
    ]},
    { n: 3, kind: 'Drop trailers', win: 1, short: true, bookings: [
      [1, 1, 'PNBK', '4471', 'done'],
      [3, 1, 'HRLN', '3310', 'done'],
      [5, 1, 'SABL', '1187', 'done'],
      [7, 1, 'KSLR', 'At door', 'at-door'],
      [9, 1, 'NRWY', '2208'],
      [11, 1, 'HRLN', '3310'],
      [14, 1, 'GRYF', '9020'],
      [17, 1, 'PNBK', '4471'],
      [19, 1, 'TLGT', '6615'],
      [21, 1, 'SABL', '1190']
    ]},
    { n: 4, kind: 'Live unload', win: 2, bookings: [
      [0, 2, 'Sable Lines', 'PO 88201', 'done'],
      [3, 2, 'Greyfield', 'PO 88238', 'done'],
      [6, 2, 'Northway', 'At door', 'at-door'],
      [9, 2, 'Beacon Haul', 'PO 88277'],
      [13, 2, 'Tollgate', 'PO 88296'],
      [16, 2, 'Harlan Frt', 'PO 88322'],
      [20, 2, 'Kessler', 'PO 88339']
    ]},
    { n: 5, kind: 'Reefer only', win: 2, bookings: [
      [1, 2, 'Coldspan', 'PO 88209', 'done'],
      [6, 2, 'Coldspan', 'At door', 'at-door'],
      [10, 2, 'Frostline', 'PO 88288'],
      [15, 2, 'Coldspan', 'PO 88310'],
      [19, 2, 'Frostline', 'PO 88336']
    ]},
    { n: 6, kind: 'Out of service', oos: 'Leveler repair until Thursday', bookings: [] }
  ];

  function t(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }
  function slotTime(i) { return t(START + i * 30); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* header row */
  grid.appendChild(el('div', 'corner'));
  for (var i = 0; i < SLOTS; i++) {
    var th = el('div', 'time-head' + (i % 2 ? ' half' : ''), i % 2 ? '' : slotTime(i));
    th.style.gridColumn = String(i + 2);
    th.setAttribute('aria-hidden', 'true');
    grid.appendChild(th);
  }

  /* door rows */
  doors.forEach(function (d, r) {
    var row = r + 2;
    var label = el('div', 'door' + (d.oos ? ' oos' : ''));
    label.style.gridRow = String(row);
    label.style.gridColumn = '1';
    label.innerHTML = '<b>Door ' + d.n + '</b><small>' + d.kind + (d.win ? ' · ' + (d.win * 30) + ' min' : '') + '</small>';
    grid.appendChild(label);

    var taken = {};
    d.bookings.forEach(function (b) { for (var k = 0; k < b[1]; k++) taken[b[0] + k] = true; });

    for (var c = 0; c < SLOTS; c++) {
      var cell = el('div', 'cell' + (c % 2 ? '' : ' hour') + (CLOSED.indexOf(c) > -1 ? ' closed' : '') + (d.oos ? ' oos' : ''));
      cell.style.gridRow = String(row);
      cell.style.gridColumn = String(c + 2);
      grid.appendChild(cell);
    }

    if (d.oos) {
      var note = el('div', 'oos-note', d.oos);
      note.style.gridRow = String(row);
      note.style.gridColumn = '2 / span ' + SLOTS;
      note.innerHTML = '<span class="sr">Door ' + d.n + ': </span>' + d.oos;
      grid.appendChild(note);
      return;
    }

    d.bookings.forEach(function (b) { grid.appendChild(makeSlot(d, row, b[0], b[1], b[2], b[3], b[4] || '')); });

    for (var c2 = 0; c2 < SLOTS; c2++) {
      if (START + c2 * 30 < NOW) continue;           // past windows aren't bookable
      var fits = true;
      for (var k2 = 0; k2 < d.win; k2++) {
        var cc = c2 + k2;
        if (cc >= SLOTS || taken[cc] || CLOSED.indexOf(cc) > -1) { fits = false; break; }
      }
      if (!fits) continue;
      var btn = el('button', 'slot-open');
      btn.type = 'button';
      btn.style.gridRow = String(row);
      btn.style.gridColumn = String(c2 + 2);
      btn.dataset.door = String(r);
      btn.dataset.slot = String(c2);
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Open window, Door ' + d.n + ', ' + slotTime(c2) + ' to ' + slotTime(c2 + d.win) + '. Book it.');
      btn.innerHTML = '<span class="lbl">Open</span>';
      btn.addEventListener('click', onPick);
      grid.appendChild(btn);
    }
  });

  function makeSlot(d, row, start, len, carrier, detail, status) {
    var s = el('div', 'slot' + (status ? ' ' + status : '') + (d.short ? ' tight' : ''));
    s.style.gridRow = String(row);
    s.style.gridColumn = (start + 2) + ' / span ' + len;
    s.innerHTML = '<span class="sr">Door ' + d.n + ', ' + slotTime(start) + ' to ' + slotTime(start + len) + ': </span><b>' + carrier + '</b><small>' + detail + '</small>';
    return s;
  }

  /* column width follows the board's width; the now line follows the columns */
  var cs = getComputedStyle(document.documentElement);
  var doorW = parseFloat(cs.getPropertyValue('--door-col')) || 112;
  var now = el('div', 'now');
  now.setAttribute('data-label', t(NOW));
  now.setAttribute('aria-hidden', 'true');
  grid.appendChild(now);
  var shell = document.getElementById('board');
  function fit() {
    var avail = shell.clientWidth - doorW;
    var slotW = Math.max(44, Math.min(60, Math.floor(avail / SLOTS)));
    grid.style.setProperty('--slot', slotW + 'px');
    now.style.left = (doorW + ((NOW - START) / 30) * slotW) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);

  /* booking drawer */
  var booking = document.getElementById('booking');
  var form = document.getElementById('bk-form');
  var done = document.getElementById('bk-done');
  var win = document.getElementById('bk-window');
  var po = document.getElementById('bk-po');
  var carrierIn = document.getElementById('bk-carrier');
  var trailer = document.getElementById('bk-trailer');
  var pallets = document.getElementById('bk-pallets');
  var current = null;   // { door, slot, len, btns }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function clearPick() {
    if (!current) return;
    current.btns.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    current = null;
  }

  function onPick(e) {
    var b = e.currentTarget;
    var di = +b.dataset.door, si = +b.dataset.slot;
    var d = doors[di];
    clearPick();
    var len = d.win;
    var btns = [b];
    for (var k = 1; k < len; k++) {
      var nb = grid.querySelector('.slot-open[data-door="' + di + '"][data-slot="' + (si + k) + '"]');
      if (nb) btns.push(nb);
    }
    b.setAttribute('aria-pressed', 'true');
    current = { door: di, slot: si, len: len, btns: btns };

    if (d.n === 5) trailer.value = "53' reefer";
    else if (trailer.value === "53' reefer") trailer.value = "53' dry van";

    win.innerHTML = 'Door ' + d.n + ' · ' + slotTime(si) + '–' + slotTime(si + len) +
      '<small>' + d.kind + ', ' + (len * 30) + '-minute window</small>';
    form.hidden = false; done.hidden = true;
    booking.hidden = false;
    po.removeAttribute('aria-invalid');
    booking.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    po.focus({ preventScroll: true });
  }

  booking.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!current) return;
    if (!po.value.trim()) {
      po.setAttribute('aria-invalid', 'true');
      po.placeholder = 'Needed: the gate asks for it';
      po.focus();
      return;
    }
    var d = doors[current.door];
    var ref = 'DL-' + (nextRef++);
    var name = carrierIn.value.trim() || 'Your carrier';
    var detail = po.value.trim().match(/^\d+$/) ? 'PO ' + po.value.trim() : po.value.trim();
    var s = makeSlot(d, current.door + 2, current.slot, current.len, name, ref + ' · ' + detail, 'mine just-booked');
    var a = current.slot, z = current.slot + current.len;
    Array.prototype.forEach.call(grid.querySelectorAll('.slot-open[data-door="' + current.door + '"]'), function (x) {
      var xs = +x.dataset.slot;
      if (xs < z && xs + d.win > a) x.remove();
    });
    grid.insertBefore(s, now);
    document.getElementById('bk-ref').textContent = ref;
    document.getElementById('bk-done-text').textContent =
      'Booked. Door ' + d.n + ', ' + slotTime(current.slot) + '–' + slotTime(current.slot + current.len) +
      ', ' + trailer.value + '. The driver gives ' + ref + ' at the gate. Arrive up to 15 minutes early; more than 20 minutes late and the window is released.';
    current = null;
    form.hidden = true; done.hidden = false;
    document.getElementById('bk-another').focus({ preventScroll: true });
  });

  document.getElementById('bk-close').addEventListener('click', function () {
    clearPick(); booking.hidden = true;
  });
  document.getElementById('bk-another').addEventListener('click', function () {
    booking.hidden = true; po.value = '';
    var first = grid.querySelector('.slot-open');
    if (first) first.focus();
  });
})();
