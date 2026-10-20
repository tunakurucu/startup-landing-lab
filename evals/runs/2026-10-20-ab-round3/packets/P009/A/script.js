// Shiftnote homepage. Everything here is local: nothing is saved or sent.
(function () {
  'use strict';

  // --- Mobile menu ---------------------------------------------------------
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        toggle.focus();
      }
    });
  }

  // --- The close note: mark an open item handled, and undo it --------------
  var noteStatus = document.getElementById('note-status');
  document.querySelectorAll('.entry [data-handle]').forEach(function (button) {
    var entry = button.closest('.entry');
    var stateText = entry.querySelector('[data-state-text]');
    var original = stateText.textContent;
    var item = entry.getAttribute('data-item') || 'Item';
    button.addEventListener('click', function () {
      var handled = entry.getAttribute('data-state') === 'handled';
      if (handled) {
        entry.setAttribute('data-state', 'open');
        stateText.textContent = original;
        button.textContent = 'Mark handled';
        if (noteStatus) noteStatus.textContent = item + ' is open again, with Sam.';
      } else {
        entry.setAttribute('data-state', 'handled');
        stateText.textContent = 'Handled · Sam, ' + clock();
        button.textContent = 'Undo';
        if (noteStatus) noteStatus.textContent = item + ' marked handled by Sam at ' + clock() + '. Priya will see that when she next opens the note.';
      }
    });
  });

  // --- The composer: pick a kind, type an entry, add it to tonight's note --
  var chips = document.querySelectorAll('.chip[data-chip]');
  var kind = '86';
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      kind = chip.getAttribute('data-chip');
    });
  });
  var input = document.getElementById('entry-text');
  var addButton = document.getElementById('add-entry');
  var list = document.getElementById('so-far-list');
  var empty = document.getElementById('so-far-empty');
  var composerStatus = document.getElementById('composer-status');
  var suggestions = [
    'Patio heater 3 won’t light. Told the Friday crew to keep table 9 and 10 off until it’s looked at.',
    'Dish machine is low on rinse aid. Order is in; use the backup jug under the sink.',
    'Mrs. Alvarez booked the big table for Sat 7 pm and asked for the corner again.'
  ];
  var next = 0;
  function addEntry() {
    if (!input || !list) return;
    var text = input.value.trim();
    if (!text) {
      if (composerStatus) composerStatus.textContent = 'Write something first.';
      input.focus();
      return;
    }
    var li = document.createElement('li');
    var tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = kind;
    var body = document.createElement('span');
    body.textContent = text;
    var meta = document.createElement('small');
    meta.textContent = clock() + ' · Priya M. · open, for whoever opens Wed';
    li.appendChild(tag);
    li.appendChild(body);
    li.appendChild(meta);
    list.appendChild(li);
    if (empty) empty.hidden = true;
    if (composerStatus) composerStatus.textContent = 'Added a ' + kind + ' entry to tonight’s note: ' + text;
    input.value = suggestions[next % suggestions.length];
    next += 1;
  }
  if (addButton) addButton.addEventListener('click', addEntry);
  if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); addEntry(); } });

  function clock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var suffix = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' : '') + m + ' ' + suffix;
  }
})();
