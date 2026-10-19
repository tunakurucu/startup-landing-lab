// Poolday landing page: one gift tag, modelled locally in this tab. Nothing is sent anywhere and no payment is taken.
(function () {
  'use strict';
  var money = function (n) {
    var whole = Math.round(n * 100) % 100 === 0;
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 });
  };
  var clean = function (s) { return String(s || '').replace(/\s+/g, ' ').trim(); };
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  // ---------- mobile menu ----------
  var menuBtn = $('.menu-btn');
  var nav = document.getElementById('site-nav');
  var setMenu = function (open) {
    if (!menuBtn || !nav) return;
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
  };
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  // ---------- the tag ----------
  var root = document.getElementById('start');
  if (!root) return;
  var tag = $('.tag', root);
  var view = $('[data-pool-view]', root);
  var startForm = $('[data-start-form]', root);
  var addForm = $('[data-add-form]', root);
  var status = $('[data-status]', root);
  var label = $('[data-mode-label]', root);
  var organizer = $('[data-organizer]', root);
  var friendsIn = document.getElementById('st-friends');
  var other = document.getElementById('ex-other');
  var nameIn = document.getElementById('ex-name');

  var EXAMPLE = {
    who: 'Maya', occ: 'turning 30 on Saturday', gift: 'The ceramic pour-over set she keeps sending everyone links to', price: 180, starter: 'Jonah',
    people: [
      { name: 'Jonah', note: 'Started this. Happy 30th, M!', amount: 40 },
      { name: 'Priya', note: 'For all the mornings you made us coffee', amount: 35 },
      { name: 'Sam', note: 'in!!', amount: 25 }
    ]
  };
  var copyPool = function (p) { var c = Object.assign({}, p); c.people = p.people.slice(); return c; };
  var pool = copyPool(EXAMPLE);
  var own = null;      // the visitor's practice pool, once made
  var mode = 'example';

  var total = function () { return pool.people.reduce(function (a, p) { return a + p.amount; }, 0); };
  var say = function (msg, isError) { status.textContent = msg; status.classList.toggle('is-error', !!isError); };

  function renderPool(newIndex) {
    $('[data-for]', view).textContent = pool.who;
    $('[data-occ]', view).textContent = pool.occ || 'a gift from friends';
    $('[data-gift]', view).textContent = pool.gift;
    $('[data-price]', view).textContent = money(pool.price);
    var list = $('[data-sigs]', view);
    list.textContent = '';
    pool.people.forEach(function (p, i) {
      var li = document.createElement('li');
      if (i === newIndex) li.className = 'is-new';
      var n = document.createElement('span'); n.className = 'sig-name'; n.textContent = p.name;
      var t = document.createElement('span'); t.className = 'sig-note'; t.textContent = p.note || '';
      var a = document.createElement('span'); a.className = 'sig-amt'; a.textContent = money(p.amount);
      li.append(n, t, a); list.appendChild(li);
    });
    list.hidden = pool.people.length === 0;
    var sum = total();
    $('[data-in]', view).textContent = money(sum);
    var box = $('[data-need-box]', view);
    if (sum > pool.price) {
      $('[data-need-label]', view).textContent = 'Over the price by';
      $('[data-need]', view).textContent = money(sum - pool.price);
      box.classList.add('covered');
    } else {
      $('[data-need-label]', view).textContent = 'Still needed';
      $('[data-need]', view).textContent = money(pool.price - sum);
      box.classList.toggle('covered', sum === pool.price);
    }
    $('[data-fill]', view).style.transform = 'scaleX(' + Math.min(sum / pool.price, 1).toFixed(4) + ')';
    var first = pool.who.split(' ')[0];
    $('[data-add-btn]', view).textContent = 'Add to ' + first + '’s gift';
    $('[data-note-label]', view).textContent = 'A line for ' + first;
    if (own) renderOrganizer();
  }

  function renderOrganizer() {
    var sum = total();
    var need = Math.max(pool.price - sum, 0);
    var n = Math.max(1, Math.min(40, Math.round(Number(friendsIn.value) || 1)));
    $('[data-need-2]', organizer).textContent = need > 0 ? money(need) : 'Nothing';
    $('[data-each]', organizer).textContent = need > 0 ? money(Math.ceil((need / n) * 100) / 100) : '$0';
    var slug = pool.who.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'gift';
    var mine = pool.people.length && pool.people[0].you ? pool.people[0].amount : 0;
    $('[data-msg]', organizer).textContent = 'Going in on ' + pool.gift.replace(/^(A|An|The) /, function (m) { return m.toLowerCase(); }) + ' for ' + pool.who + (pool.occ ? ' (' + pool.occ + ')' : '') +
      '. It’s ' + money(pool.price) + ' in total' + (mine ? ' and I’ve put in ' + money(mine) : '') + '. Add what you can: poolday.example/' + slug + ' – ' + pool.starter;
  }

  function setMode(next, focus) {
    mode = next;
    root.querySelectorAll('[data-mode]').forEach(function (b) {
      var on = (b.getAttribute('data-mode') === 'example' && next === 'example') || (b.getAttribute('data-mode') === 'start' && next !== 'example');
      b.setAttribute('aria-pressed', String(on));
    });
    startForm.hidden = next !== 'start';
    view.hidden = next === 'start';
    organizer.hidden = next !== 'own';
    tag.classList.toggle('is-own', next !== 'example');
    if (next === 'example') {
      pool = copyPool(EXAMPLE);
      label.textContent = 'You’re one of Maya’s friends. Sign the tag and add what you can.';
      $('[data-sign-title]', view).textContent = 'Your line on the tag';
      $('[data-foot]', view).textContent = 'Example pool. Maya, Jonah, Priya and Sam are made up, and so are the amounts.';
      $('[data-reset]', view).textContent = 'Reset example';
      renderPool(-1);
    } else if (next === 'start') {
      label.textContent = 'You’re the organizer. Fill in the tag; it stays in this tab.';
    } else {
      label.textContent = 'Your practice pool. Play a friend adding to it and watch what’s still needed.';
      $('[data-sign-title]', view).textContent = 'Pretend you’re a friend';
      $('[data-foot]', view).textContent = 'Started by ' + pool.starter + ' · practice pool, only in this tab, no money moves.';
      $('[data-reset]', view).textContent = 'Clear friends’ lines';
      renderPool(-1);
    }
    if (focus) {
      var target = next === 'start' ? document.getElementById('st-for') : nameIn;
      target.focus({ preventScroll: true });
    }
  }

  root.querySelectorAll('[data-mode]').forEach(function (b) {
    b.addEventListener('click', function () {
      var want = b.getAttribute('data-mode');
      if (want === 'start' && own && mode !== 'start') { setMode('start', true); say(''); return; }
      setMode(want, false); say('');
    });
  });
  // Every "Start a practice pool" link lands on the tag in start mode.
  document.querySelectorAll('a[href="#start"]').forEach(function (a) {
    a.addEventListener('click', function () { setMode('start', false); say(''); setTimeout(function () { document.getElementById('st-for').focus({ preventScroll: true }); }, 0); });
  });
  document.querySelectorAll('a[href="#example"]').forEach(function (a) {
    a.addEventListener('click', function () { if (mode !== 'example') { setMode('example', false); say(''); } });
  });
  if (location.hash === '#start') setMode('start', false);

  // adding a line
  other.addEventListener('input', function () { if (other.value !== '') $('input[name=amount][value=other]', addForm).checked = true; });
  $('input[name=amount][value=other]', addForm).addEventListener('change', function () { other.focus(); });
  addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    nameIn.removeAttribute('aria-invalid'); other.removeAttribute('aria-invalid');
    var name = clean(nameIn.value);
    var picked = $('input[name=amount]:checked', addForm);
    var amount = picked && picked.value === 'other' ? Number(other.value) : Number(picked && picked.value);
    if (!name) { nameIn.setAttribute('aria-invalid', 'true'); nameIn.focus(); return say('Add a name first, so ' + pool.who.split(' ')[0] + ' knows who signed.', true); }
    if (!amount || amount < 1 || amount > 2000 || !isFinite(amount)) {
      other.setAttribute('aria-invalid', 'true'); other.focus();
      return say('Pick an amount, or type one between $1 and $2,000.', true);
    }
    amount = Math.round(amount * 100) / 100;
    var before = total();
    pool.people.push({ name: name, note: clean($('#ex-note').value), amount: amount });
    renderPool(pool.people.length - 1);
    var after = total();
    var msg = name + ' added ' + money(amount) + '. ';
    if (after < pool.price) msg += money(pool.price - after) + ' still needed.';
    else if (before < pool.price && after === pool.price) msg += 'That covers the gift exactly.';
    else msg += 'The gift is covered, ' + money(after - pool.price) + ' over the price. What happens to extra isn’t decided yet.';
    say(msg);
    addForm.reset();
    $('input[name=amount][value="20"]', addForm).checked = true;
  });

  $('[data-reset]', view).addEventListener('click', function () {
    addForm.reset(); nameIn.removeAttribute('aria-invalid'); other.removeAttribute('aria-invalid');
    if (mode === 'own') { pool = copyPool(own); renderPool(-1); say('Friends’ lines cleared. ' + money(Math.max(pool.price - total(), 0)) + ' still needed.'); }
    else { pool = copyPool(EXAMPLE); renderPool(-1); say('Example reset: three friends in, $80 still needed.'); }
  });

  // starting a pool
  startForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = startForm.elements;
    [f['for'], f.occasion, f.gift, f.price, f.own, f.organizer].forEach(function (el) { el.removeAttribute('aria-invalid'); });
    var who = clean(f['for'].value), occ = clean(f.occasion.value), gift = clean(f.gift.value), name = clean(f.organizer.value);
    gift = gift.charAt(0).toUpperCase() + gift.slice(1);
    var price = Number(f.price.value), mine = f.own.value === '' ? 0 : Number(f.own.value);
    var fail = function (el, msg) { el.setAttribute('aria-invalid', 'true'); el.focus(); say(msg, true); };
    if (!who) return fail(f['for'], 'Who is the gift for?');
    if (!gift) return fail(f.gift, 'Say what the gift is, so friends know what they’re chipping in on.');
    if (!price || price < 1 || price > 10000 || !isFinite(price)) return fail(f.price, 'Give the price as a number from 1 to 10,000.');
    if (!isFinite(mine) || mine < 0 || mine > price) return fail(f.own, 'Your own share can be anything from 0 up to the price.');
    if (!name) return fail(f.organizer, 'Add your name, so friends know who started it.');
    price = Math.round(price * 100) / 100; mine = Math.round(mine * 100) / 100;
    own = { who: who, occ: occ, gift: gift, price: price, starter: name,
      people: mine > 0 ? [{ name: name, note: 'Started this.', amount: mine, you: true }] : [] };
    pool = copyPool(own);
    setMode('own', false);
    say('Tag made for ' + who + '. ' + money(Math.max(price - mine, 0)) + ' still needed. The link in the message below is an example address.');
    tag.scrollIntoView({ block: 'start' });
    nameIn.focus({ preventScroll: true });
  });
  $('[data-back]', startForm).addEventListener('click', function () { setMode(own ? 'own' : 'example', false); say(''); });
  $('[data-restart]', organizer).addEventListener('click', function () { startForm.reset(); setMode('start', true); say(''); });
  friendsIn.addEventListener('input', renderOrganizer);

  $('[data-copy]', organizer).addEventListener('click', function () {
    var box = $('[data-msg]', organizer), out = $('[data-copy-status]', organizer);
    var selectIt = function () {
      var r = document.createRange(); r.selectNodeContents(box);
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      out.textContent = 'Message selected. Copy it with your keyboard or a long-press.';
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(box.textContent).then(function () { out.textContent = 'Copied to your clipboard.'; }, selectIt);
    else selectIt();
  });

  root.addEventListener('input', function (e) { if (e.target.getAttribute('aria-invalid')) e.target.removeAttribute('aria-invalid'); });
  renderPool(-1);
})();
