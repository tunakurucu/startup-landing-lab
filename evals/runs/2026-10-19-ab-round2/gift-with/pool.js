/* Poolday sample pools. Everything here runs in the browser only: no network, no storage, no payment fields.
   renderPool() is also run once at build time (build-static.mjs in the scratchpad) so the hero tag is in the HTML
   before any script runs. */
(function (root) {
  'use strict';

  var money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c];
    });
  };
  var totals = function (p) {
    var added = p.contributions.reduce(function (a, c) { return a + c.amount; }, 0);
    return {added: added, left: Math.max(0, p.goal - added), full: added >= p.goal};
  };
  var listNames = function (names) {
    if (names.length < 2) return names.join('');
    return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
  };

  var BOW =
    '<svg class="bow" viewBox="0 0 64 52" width="56" height="46" aria-hidden="true" focusable="false">' +
      '<g class="bow-loose"><path d="M24 14 C 20 26, 30 34, 22 48" /><path d="M40 14 C 46 26, 34 34, 42 48" /></g>' +
      '<g class="bow-tied">' +
        '<path class="loop" d="M32 22 C 22 4, 4 4, 6 18 C 8 28, 22 28, 32 22 Z" />' +
        '<path class="loop" d="M32 22 C 42 4, 60 4, 58 18 C 56 28, 42 28, 32 22 Z" />' +
        '<path class="tail" d="M29 24 L 18 48 L 24 45 L 27 50 L 33 26 Z" />' +
        '<path class="tail" d="M35 24 L 46 48 L 40 45 L 37 50 L 31 26 Z" />' +
        '<rect class="knot" x="27" y="17" width="10" height="11" rx="3" />' +
      '</g>' +
    '</svg>';

  function ribbon(p, t) {
    var segs = p.contributions.map(function (c, i) {
      var cls = c.you ? 'seg seg-you' : 'seg seg-' + (i % 3);
      if (c.isNew) cls += ' is-new';
      return '<span class="' + cls + '" style="flex-basis:' + (Math.min(c.amount, p.goal) / p.goal * 100).toFixed(3) + '%"></span>';
    }).join('');
    var gap = t.left > 0 ? '<span class="seg-gap" style="flex-basis:' + (t.left / p.goal * 100).toFixed(3) + '%"></span>' : '';
    var label = t.full ? 'All ' + money(p.goal) + ' added; the ribbon is tied' : money(t.added) + ' of ' + money(p.goal) + ' added; ' + money(t.left) + ' still needed';
    return '<div class="ribbon-row' + (t.full ? ' is-full' : '') + '">' +
      '<div class="ribbon" role="img" aria-label="' + label + '">' + segs + gap + '</div>' + BOW + '</div>';
  }

  function signers(p) {
    return '<ul class="signers" aria-label="Who has added">' + p.contributions.map(function (c) {
      var role = c.organizer ? ' <span class="role">organizer</span>' : c.you ? ' <span class="role role-you">you</span>' : '';
      var note = c.note ? '<span class="note">“' + esc(c.note) + '”</span>' : '<span class="note note-empty">No note</span>';
      return '<li><span class="who">' + esc(c.name) + role + '</span>' + note + '<span class="amt">' + money(c.amount) + '</span></li>';
    }).join('') + '</ul>';
  }

  function friendPanel(p, t) {
    if (t.full) return '<p class="panel-done">The ribbon’s tied. This pool is full, so there’s nothing left to add.</p>';
    var id = p.id;
    return '<form class="chip" data-act="add" novalidate>' +
      '<div class="field"><label for="' + id + '-name">Your name</label><input id="' + id + '-name" name="who" autocomplete="off" value="' + esc(p.draft.who) + '"></div>' +
      '<div class="field field-amt"><label for="' + id + '-amt">Amount</label><span class="prefix" aria-hidden="true">$</span><input id="' + id + '-amt" name="amount" inputmode="numeric" autocomplete="off" value="' + esc(p.draft.amount) + '" aria-describedby="' + id + '-amt-hint"><span class="hint" id="' + id + '-amt-hint">Up to ' + money(t.left) + '</span></div>' +
      '<div class="field field-wide"><label for="' + id + '-note">A note for ' + esc(p.for) + ' <span class="opt">(optional)</span></label><input id="' + id + '-note" name="note" autocomplete="off" maxlength="80" value="' + esc(p.draft.note) + '"></div>' +
      '<div class="chip-actions"><button class="btn btn-primary" type="submit">Add to the pool</button>' +
      '<button class="btn btn-line" type="button" data-act="exact" hidden>Add ' + money(t.left) + ' instead</button></div>' +
    '</form>';
  }

  function organizerPanel(p, t) {
    if (t.full) return '<div class="org"><p class="org-left"><span class="org-num">' + money(p.goal) + '</span> is in.</p><p>' + esc(p.organizer) + ' can buy ' + esc(p.giftShort) + ' now. Everyone who added sees the tied ribbon.</p></div>';
    var waiting = p.invited.filter(function (n) { return !p.contributions.some(function (c) { return c.name === n; }); });
    var split = waiting.length
      ? '<p>Not added yet: ' + esc(listNames(waiting)) + '. Split ' + (waiting.length === 1 ? 'to one person' : waiting.length + ' ways') + ', that’s about <strong class="num">' + money(Math.ceil(t.left / waiting.length)) + '</strong> each.</p>'
      : '<p>In the app you\u2019d share this pool with the group chat. Here, add pretend friends to fill the ribbon.</p>';
    var extra = p.pretend ? '<button class="btn btn-line" type="button" data-act="pretend">Add a pretend friend</button>' : '';
    return '<div class="org"><p class="org-left"><span class="org-num">' + money(t.left) + '</span> still needed</p>' + split +
      '<div class="org-actions"><button class="btn btn-line" type="button" data-act="nudge">Copy a nudge</button>' + extra + '</div></div>';
  }

  function draftPanel(p, t) {
    return '<div class="org org-draft"><p class="org-left"><span class="org-num">' + money(t.left) + '</span> to fill</p>' +
      '<p>' + (p.example ? 'Example values until you type. ' : '') + 'Press \u201CStart a sample pool\u201D and this tag opens: switch views, add pretend friends, copy a nudge.</p></div>';
  }

  function renderPool(p) {
    var t = totals(p);
    var h = 'h' + p.level;
    var html =
      '<span class="tag-hole" aria-hidden="true"></span>' +
      '<p class="tag-sample">' + esc(p.sampleLabel) + '</p>' +
      '<p class="tag-occasion">' + esc(p.occasion) + '</p>' +
      '<' + h + ' class="tag-gift" id="' + p.id + '-title">' + esc(p.gift) + '</' + h + '>' +
      '<p class="tag-by">Started by ' + esc(p.organizer) + ' · <span class="num">' + money(p.goal) + '</span> total</p>' +
      (p.isDraft ? '' : '<div class="views" role="group" aria-label="Whose view">' +
        '<button type="button" data-act="view" data-view="friend" aria-pressed="' + (p.view === 'friend') + '">Friend’s view</button>' +
        '<button type="button" data-act="view" data-view="organizer" aria-pressed="' + (p.view === 'organizer') + '">' + esc(p.organizer) + '’s view</button>' +
        '<span class="views-pill" aria-hidden="true"></span>' +
      '</div>') +
      ribbon(p, t) +
      '<p class="ribbon-caption"><span class="num">' + money(t.added) + '</span> of ' + money(p.goal) + ' in' +
        (t.full ? ' · <strong>ribbon tied</strong>' : ' · <strong class="num">' + money(t.left) + ' to go</strong>') + '</p>' +
      signers(p) +
      (p.isDraft ? draftPanel(p, t) : p.view === 'organizer' ? organizerPanel(p, t) : friendPanel(p, t)) +
      '<div class="tag-foot"><p class="status" role="status" aria-live="polite">' + esc(p.status || '') + '</p>' +
        (p.resettable ? '<button class="text-btn" type="button" data-act="reset">Reset sample</button>' : '') + '</div>';
    p.contributions.forEach(function (c) { c.isNew = false; });
    return html;
  }

  function samplePool() {
    return {
      id: 'ines', level: 2, view: 'friend', resettable: true, pretend: false,
      sampleLabel: 'Sample pool · runs only in your browser',
      for: 'Ines', occasion: 'For Ines, turning 30 on Saturday',
      gift: 'A six-week wheel-throwing class', giftShort: 'the pottery class',
      organizer: 'Tom', goal: 240,
      contributions: [
        {name: 'Tom', amount: 60, note: 'You’ve talked about this for two years.', organizer: true},
        {name: 'Priya', amount: 40, note: 'I want the first wonky bowl.'},
        {name: 'Sam', amount: 25, note: 'Can’t do much this month, but I’m in.'},
        {name: 'Jo', amount: 30, note: 'From the whole flat.'}
      ],
      invited: ['Marco', 'Lea', 'Dev'],
      draft: {who: 'Alex', amount: '30', note: 'Happy 30th! Make me a mug.'},
      status: ''
    };
  }

  var PRETEND = [
    ['Robin', 20, 'From the running club lot.'], ['Kemi', 25, 'Wouldn’t miss it.'], ['Ola', 15, 'Small but mighty.'],
    ['Sasha', 30, 'Finally, a gift we all agree on.'], ['Noor', 20, 'Count me in.'], ['Ben', 35, '']
  ];

  function mount(el, p) {
    var draw = function (focusKey) {
      el.innerHTML = renderPool(p);
      el.setAttribute('data-view', p.view);
      if (focusKey) { var keys = [].concat(focusKey); for (var i = 0; i < keys.length; i++) { var f = el.querySelector(keys[i]); if (f) { f.focus(); break; } } }
    };
    var say = function (msg, isError) {
      var s = el.querySelector('.status');
      s.textContent = msg;
      s.classList.toggle('is-error', !!isError);
      p.status = isError ? '' : msg;
    };
    var add = function (name, amount, note, you) {
      if (you) p.contributions.forEach(function (c) { c.you = false; });
      p.contributions.push({name: name, amount: amount, note: note, you: you, isNew: true});
      var t = totals(p);
      p.status = t.full ? 'That tied the ribbon: all ' + money(p.goal) + ' is in for ' + p.for + '.'
        : 'Added ' + money(amount) + ' from ' + name + '. ' + money(t.left) + ' to go.';
      return t;
    };

    el.addEventListener('input', function (e) {
      if (e.target.name && e.target.name in p.draft) p.draft[e.target.name] = e.target.value;
    });
    el.addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target, t = totals(p);
      var name = form.who.value.trim(), raw = form.amount.value.trim().replace(/^\$/, ''), note = form.note.value.trim();
      var amount = Number(raw);
      var exact = form.querySelector('[data-act=exact]');
      exact.hidden = true;
      [form.who, form.amount].forEach(function (i) { i.removeAttribute('aria-invalid'); });
      if (!name) { form.who.setAttribute('aria-invalid', 'true'); form.who.focus(); return say('Add your name so ' + p.for + ' knows who it’s from.', true); }
      if (!/^\d+$/.test(raw) || amount <= 0) { form.amount.setAttribute('aria-invalid', 'true'); form.amount.focus(); return say('Enter an amount above $0, in whole dollars.', true); }
      if (amount > t.left) { form.amount.setAttribute('aria-invalid', 'true'); exact.hidden = false; return say('That’s more than the ' + money(t.left) + ' still needed.', true); }
      p.draft = {who: '', amount: '', note: ''};
      add(name, amount, note, true);
      draw(['button[type=submit]', '[data-act=view][aria-pressed=true]']);
    });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b || !el.contains(b)) return;
      var act = b.getAttribute('data-act'), t = totals(p);
      if (act === 'view') {
        p.view = b.getAttribute('data-view');
        p.status = p.view === 'organizer' ? 'Showing ' + p.organizer + '’s view: amounts and what’s still needed.' : 'Showing a friend’s view: names and notes, no amounts.';
        draw('[data-act=view][data-view=' + p.view + ']');
      } else if (act === 'exact') {
        var form = b.closest('form');
        var name = form.who.value.trim();
        if (!name) { form.who.focus(); return say('Add your name so ' + p.for + ' knows who it’s from.', true); }
        p.draft = {who: '', amount: '', note: ''};
        add(name, t.left, form.note.value.trim(), true);
        draw(['button[type=submit]', '[data-act=view][aria-pressed=true]']);
      } else if (act === 'nudge') {
        var text = p.giftShort.charAt(0).toUpperCase() + p.giftShort.slice(1) + ' for ' + p.for + ' still needs ' + money(t.left) + '. Add what you can?';
        var done = function (copied) { say((copied ? 'Copied: “' : 'Your nudge, ready to paste: “') + text + '”'); };
        try { navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); }); } catch (err) { done(false); }
      } else if (act === 'pretend') {
        var next = PRETEND[p.pretendIndex++ % PRETEND.length];
        add(next[0], Math.min(next[1], t.left), next[2], false);
        p.contributions[p.contributions.length - 1].you = false;
        draw(['[data-act=pretend]', '[data-act=view][aria-pressed=true]']);
      } else if (act === 'reset') {
        var fresh = samplePool();
        Object.keys(fresh).forEach(function (k) { p[k] = fresh[k]; });
        p.status = 'Sample reset to how Tom’s pool looked on Thursday.';
        draw('[data-act=view][data-view=friend]');
      }
    });
    draw();
  }

  var EXAMPLE = {for: 'Dana', occasion: 'Birthday', gift: 'A weekend cabin in the hills', cost: '300', organizer: 'Kim', share: '50'};
  function draftFrom(v) {
    var typed = ['for', 'gift', 'cost', 'organizer', 'share'].some(function (k) { return v[k] !== ''; });
    var pick = function (k) { return v[k] !== '' ? v[k] : EXAMPLE[k]; };
    var cost = /^\d+$/.test(pick('cost')) && +pick('cost') >= 10 ? +pick('cost') : +EXAMPLE.cost;
    var share = /^\d+$/.test(pick('share')) ? Math.min(+pick('share'), cost) : 0;
    return {
      id: 'draft', level: 3, view: 'organizer', isDraft: true, example: !typed,
      sampleLabel: 'Draft \u00B7 writes itself as you type', occasion: (v.occasion || 'Birthday') + ' for ' + pick('for'),
      for: pick('for'), gift: pick('gift'), giftShort: pick('gift'), organizer: pick('organizer'), goal: cost,
      contributions: share > 0 ? [{name: pick('organizer'), amount: share, note: '', organizer: true}] : [], invited: [], draft: {}
    };
  }
  function values(form) {
    var v = {};
    ['for', 'gift', 'cost', 'organizer', 'share', 'occasion'].forEach(function (f) { v[f] = form.elements[f].value.trim().replace(/^\$/, ''); });
    return v;
  }

  function builder(form, out) {
    var fields = ['for', 'gift', 'cost', 'organizer', 'share'];
    var drawDraft = function () {
      var tag = out.querySelector('.tag');
      if (!tag || tag.id !== 'draft-tag') {
        out.innerHTML = '<article class="tag" id="draft-tag" aria-labelledby="draft-title"></article>';
        tag = out.firstChild;
      }
      tag.innerHTML = renderPool(draftFrom(values(form)));
      tag.setAttribute('data-view', 'organizer');
    };
    form.addEventListener('input', drawDraft);
    form.addEventListener('change', drawDraft);
    var setErr = function (name, msg) {
      var input = form.elements[name], err = form.querySelector('#err-' + name);
      if (msg) { input.setAttribute('aria-invalid', 'true'); err.textContent = msg; err.hidden = false; }
      else { input.removeAttribute('aria-invalid'); err.textContent = ''; err.hidden = true; }
      return !msg;
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = {};
      fields.forEach(function (f) { v[f] = form.elements[f].value.trim().replace(/^\$/, ''); });
      var cost = Number(v.cost), share = v.share === '' ? 0 : Number(v.share);
      var ok = [
        setErr('for', v.for ? '' : 'Who is the present for?'),
        setErr('gift', v.gift ? '' : 'Name the gift, even roughly.'),
        setErr('cost', /^\d+$/.test(v.cost) && cost >= 10 && cost <= 10000 ? '' : 'Enter a whole-dollar total between $10 and $10,000.'),
        setErr('organizer', v.organizer ? '' : 'Add your name so friends know who started it.'),
        setErr('share', v.share === '' || (/^\d+$/.test(v.share) && share <= cost) ? '' : 'Your share should be a whole-dollar amount no bigger than the total.')
      ];
      var summary = document.getElementById('builder-status');
      if (ok.indexOf(false) !== -1) {
        summary.textContent = 'A few details are missing; they’re marked above.';
        form.querySelector('[aria-invalid=true]').focus();
        return;
      }
      var occ = form.elements.occasion.value;
      var p = {
        id: 'mine', level: 3, view: 'organizer', resettable: false, pretend: true, pretendIndex: 0,
        sampleLabel: 'Your sample pool · nothing leaves this page',
        for: v.for, occasion: occ + ' for ' + v.for, gift: v.gift, giftShort: v.gift.charAt(0).toLowerCase() + v.gift.slice(1),
        organizer: v.organizer, goal: cost,
        contributions: share > 0 ? [{name: v.organizer, amount: share, note: '', organizer: true}] : [],
        invited: [], draft: {who: '', amount: '', note: ''},
        status: 'Your pool is ready. In the app you’d share it with the group; here, add a pretend friend or switch to the friend’s view.'
      };
      summary.textContent = 'Pool started for ' + v.for + '. The tag is open in your view as organizer.';
      var tag = document.createElement('article');
      tag.className = 'tag';
      tag.setAttribute('aria-labelledby', 'mine-title');
      out.innerHTML = '';
      out.appendChild(tag);
      mount(tag, p);
      tag.querySelector('.tag-gift').setAttribute('tabindex', '-1');
      tag.querySelector('.tag-gift').focus({preventScroll: false});
    });
  }

  root.Poolday = {renderPool: renderPool, samplePool: samplePool, draftFrom: draftFrom, EXAMPLE: EXAMPLE};
  if (typeof document === 'undefined') return;
  var hero = document.getElementById('sample-tag');
  if (hero) { var sp = samplePool(); sp.pretendIndex = 0; mount(hero, sp); }
  var form = document.getElementById('builder');
  if (form) builder(form, document.getElementById('mypool'));
})(typeof window !== 'undefined' ? window : globalThis);
