/* Ovenhour – local behaviour only. Nothing here talks to a server. */
(function () {
  'use strict';

  /* Menu */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = 'Menu';
      }
    });
  }

  /* The shift sheet */
  var sheet = document.querySelector('.sheet');
  if (!sheet) return;
  var blocks = Array.prototype.slice.call(sheet.querySelectorAll('.blk'));
  var modeBtns = Array.prototype.slice.call(sheet.querySelectorAll('.mode-btn'));
  var line = document.getElementById('panel-line');
  var hint = document.getElementById('panel-hint');
  var kicker = sheet.querySelector('.panel-kicker');
  var dts = Array.prototype.slice.call(sheet.querySelectorAll('.panel-grid dt'));
  var RATE = 38; // illustrative $ per hour, printed on the sheet
  var DAYS = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
  var selected = null;

  function mode() { return sheet.getAttribute('data-mode'); }
  function listed(b) { return b.getAttribute('aria-pressed') === 'true'; }
  function hours(b) { return Number(b.getAttribute('data-h')); }
  function span(b) { return b.getAttribute('data-from') + '–' + b.getAttribute('data-to'); }

  function labelBlock(b) {
    var day = DAYS[b.getAttribute('data-day')];
    var t = span(b);
    var h = hours(b) + ' hours';
    if (mode() === 'kitchen') {
      b.setAttribute('aria-label', day + ' ' + t + ', ' + h + ', ' + (listed(b) ? 'listed. Hold it back' : 'held. List it again'));
      b.removeAttribute('aria-disabled');
    } else {
      if (listed(b)) {
        b.setAttribute('aria-label', day + ' ' + t + ', ' + h + (b === selected ? ', your shift' : '. Pick as your shift'));
        b.removeAttribute('aria-disabled');
      } else {
        b.setAttribute('aria-label', day + ' ' + t + ', held by the kitchen, not bookable');
        b.setAttribute('aria-disabled', 'true');
      }
    }
    b.textContent = listed(b) ? t : 'held';
  }

  function renderPanel() {
    var m = mode();
    kicker.textContent = kicker.getAttribute(m === 'kitchen' ? 'data-k' : 'data-m');
    dts.forEach(function (dt) { dt.textContent = dt.getAttribute(m === 'kitchen' ? 'data-k' : 'data-m'); });
    if (m === 'kitchen') {
      var n = 0, h = 0, held = 0;
      blocks.forEach(function (b) { if (listed(b)) { n++; h += hours(b); } else held++; });
      line.textContent = n + ' block' + (n === 1 ? '' : 's') + ' · ' + h + ' h';
      hint.textContent = held
        ? held + ' block' + (held === 1 ? '' : 's') + ' held back. Held hours are never shown to makers. Click a block to list it again.'
        : 'Click a block to hold it back. Held hours are never shown to makers.';
    } else if (selected && listed(selected)) {
      var hh = hours(selected);
      line.textContent = selected.getAttribute('data-day') + ' ' + span(selected) + ' · ' + hh + ' h';
      hint.textContent = hh + ' h × $' + RATE + ' = $' + (hh * RATE) + ' at the illustrative price. Pick another block to compare.';
    } else {
      line.textContent = 'Pick a listed block';
      hint.textContent = 'Amber blocks are hours this kitchen rents. Click one to see what your shift comes with.';
    }
    blocks.forEach(labelBlock);
  }

  modeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var m = btn.getAttribute('data-mode');
      if (m === mode()) return;
      sheet.setAttribute('data-mode', m);
      modeBtns.forEach(function (x) { x.setAttribute('aria-pressed', x === btn ? 'true' : 'false'); });
      if (m === 'kitchen' && selected) { selected.classList.remove('is-selected'); selected = null; }
      renderPanel();
    });
  });

  blocks.forEach(function (b) {
    b.addEventListener('click', function () {
      if (mode() === 'kitchen') {
        b.setAttribute('aria-pressed', listed(b) ? 'false' : 'true');
      } else {
        if (!listed(b)) return;
        if (selected) selected.classList.remove('is-selected');
        selected = b;
        b.classList.add('is-selected');
      }
      renderPanel();
    });
  });

  renderPanel();

  /* Maker note: composes an email; nothing is stored or sent from here */
  var form = document.getElementById('makers');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      var county = form.county.value.trim();
      var makes = form.makes.value.trim();
      if (!county || !makes) return; // native validation shows the message
      e.preventDefault();
      var body = 'County: ' + county + '\nI make: ' + makes + '\n\nThe shift I need (hours, how often):\n';
      var href = 'mailto:makers@ovenhour.example?subject=' + encodeURIComponent('Shift wanted in ' + county) + '&body=' + encodeURIComponent(body);
      status.textContent = '';
      var p = document.createElement('span');
      p.textContent = 'Opening your mail app with this note. If nothing opens, copy it to makers@ovenhour.example:';
      var pre = document.createElement('pre');
      pre.textContent = 'To: makers@ovenhour.example\nSubject: Shift wanted in ' + county + '\n\n' + body;
      status.appendChild(p);
      status.appendChild(pre);
      window.location.href = href;
    });
  }
})();
