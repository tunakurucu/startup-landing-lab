(function () {
  'use strict';

  var samples = {
    'Oakdale': {
      subject: 'Oakdale is on next Tuesday’s council agenda',
      body: 'Item 7B: The council will hold a public hearing on changing the zoning of eight lots on <mark>Oakdale Avenue</mark> between 3rd and 5th Street, from single-family homes only to homes plus small shops. This is the first of two votes. Anyone can speak at the hearing.',
      link: 'agenda/2026-10-28-item-7b.html'
    },
    'Mill District': {
      subject: 'Mill District is on next Tuesday’s council agenda',
      body: 'Item 6A: Public Works will give an update on the <mark>Mill Street bridge</mark> closure. No vote. The report says the bridge is expected to reopen to one lane in late November; the detour via Canal Road stays until then.',
      link: 'agenda/2026-10-28-item-7b.html#item-6a'
    },
    'Northside': {
      subject: 'Northside is on next Tuesday’s council agenda',
      body: 'Item 8B: A vote on a $412,000 contract to replace the roof of the <mark>Northside branch library</mark>, using money already in this year’s budget. Work would run January to March and the branch would stay open.',
      link: 'agenda/2026-10-28-item-7b.html#item-8b'
    },
    'Riverview': {
      subject: 'Riverview is on next Tuesday’s council agenda',
      body: 'Item 8A: A vote on charging $2 an hour on weekends in the <mark>Riverview public lot</mark>, which is free today. Residents with a permit would keep parking free. Staff estimate about $140,000 a year, set aside for lot maintenance.',
      link: 'agenda/2026-10-28-item-7b.html#item-8a'
    },
    'Eastgate': {
      subject: 'Nothing about Eastgate on next Tuesday’s agenda',
      body: 'No item on the October 28 agenda mentions <mark>Eastgate</mark>. We only email you when your neighbourhood or a topic you follow comes up, so you would not get an alert this week. The full agenda is still summarised below.',
      link: 'agenda/2026-10-28-item-7b.html'
    },
    'Downtown': {
      subject: 'Downtown is on next Tuesday’s council agenda',
      body: 'Item 5A: Routine payments on the consent list include $38,000 for holiday lighting on <mark>Main Street</mark> and the Civic Plaza, approved in one vote without discussion unless a council member pulls it.',
      link: 'agenda/2026-10-28-item-7b.html#item-5a'
    },
    'Not sure': {
      subject: 'Five items on next Tuesday’s council agenda',
      body: 'A <mark>citywide</mark> digest: a rezoning hearing on Oakdale Avenue, a bridge update for Mill Street, weekend parking fees at the Riverview lot, a library roof contract in Northside, and routine payments. About four minutes to read.',
      link: 'agenda/2026-10-28-item-7b.html'
    }
  };

  var area = document.getElementById('area');
  var email = document.getElementById('email');
  var es = document.getElementById('es');
  var form = document.getElementById('signup');
  var card = document.getElementById('alert-card');
  var subject = document.getElementById('alert-subject');
  var body = document.getElementById('alert-body');
  var done = document.getElementById('signup-done');
  var doneArea = document.getElementById('done-area');
  var cardLinks = card ? card.querySelectorAll('.links a') : [];
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSample(name) {
    var s = samples[name];
    if (!s) return;
    var apply = function () {
      subject.textContent = s.subject;
      body.innerHTML = s.body;
      if (cardLinks[1]) cardLinks[1].setAttribute('href', s.link);
      card.removeAttribute('data-swapping');
    };
    if (reduceMotion) { apply(); return; }
    card.setAttribute('data-swapping', 'true');
    window.setTimeout(apply, 160);
  }

  function remember(key, value) {
    try { window.localStorage.setItem('commonread.' + key, value); } catch (e) { /* storage unavailable */ }
  }
  function recall(key) {
    try { return window.localStorage.getItem('commonread.' + key); } catch (e) { return null; }
  }

  // Restore a previously chosen neighbourhood (per-device convenience only).
  var saved = recall('area');
  if (saved && samples[saved]) {
    area.value = saved;
    showSample(saved);
  }

  area.addEventListener('change', function () {
    if (area.value) {
      showSample(area.value);
      remember('area', area.value);
      setInvalid('field-area', false);
    }
  });

  email.addEventListener('input', function () { setInvalid('field-email', false); });

  function setInvalid(id, bad) {
    var field = document.getElementById(id);
    field.setAttribute('data-invalid', bad ? 'true' : 'false');
    var control = field.querySelector('select, input');
    control.setAttribute('aria-invalid', bad ? 'true' : 'false');
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var ok = true;
    if (!area.value) { setInvalid('field-area', true); ok = false; }
    if (!validEmail(email.value)) { setInvalid('field-email', true); ok = false; }
    if (!ok) {
      var first = form.querySelector('[data-invalid="true"] select, [data-invalid="true"] input');
      if (first) first.focus();
      done.setAttribute('data-show', 'false');
      return;
    }

    // No backend yet: the sign-up is a prefilled email to the volunteer inbox.
    var lang = es.checked ? 'Spanish' : 'English';
    var mailSubject = 'Alerts for ' + area.value;
    var mailBody = 'Please add me to Commonread alerts.\n\n'
      + 'Neighbourhood: ' + area.value + '\n'
      + 'Email: ' + email.value.trim() + '\n'
      + 'Alert language: ' + lang + '\n\n'
      + '(Sent from the Commonread sign-up form.)';
    var href = 'mailto:alerts@commonread.org'
      + '?subject=' + encodeURIComponent(mailSubject)
      + '&body=' + encodeURIComponent(mailBody);

    doneArea.textContent = area.value === 'Not sure' ? 'the citywide' : area.value;
    done.setAttribute('data-show', 'true');
    remember('area', area.value);
    window.location.href = href;
  });
})();
