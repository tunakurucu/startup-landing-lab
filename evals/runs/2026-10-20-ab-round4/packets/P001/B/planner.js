/* Pantrywise sample planner. Runs in the browser and in the build step (Node, via vm).
   Everything here is illustrative: a short list of staples, plain dinner names, and a scoring
   rule that prefers dinners which use what is ticked, uses perishable things first and buys little. */
(function (root) {
  'use strict';

  var ITEMS = [
    /* soon: use it up early; max: how many dinners one of it stretches to. */
    { id: 'eggs',      name: 'Six eggs',              short: 'eggs',      soon: false, max: 3 },
    { id: 'spinach',   name: 'Half a bag of spinach', short: 'spinach',   soon: true,  max: 2 },
    { id: 'rice',      name: 'Leftover rice',         short: 'rice',      soon: true,  max: 1 },
    { id: 'chicken',   name: 'Chicken thighs',        short: 'chicken',   soon: true,  max: 2 },
    { id: 'tortillas', name: 'Tortillas',             short: 'tortillas', soon: false, max: 3 },
    { id: 'cheddar',   name: 'Block of cheddar',      short: 'cheddar',   soon: false, max: 4 },
    { id: 'carrots',   name: 'Carrots',               short: 'carrots',   soon: false, max: 3 },
    { id: 'peas',      name: 'Frozen peas',           short: 'peas',      soon: false, max: 3 },
    { id: 'onion',     name: 'Half an onion',         short: 'onion',     soon: true,  max: 3 },
    { id: 'chickpeas', name: 'Tin of chickpeas',      short: 'chickpeas', soon: false, max: 1 },
    { id: 'pasta',     name: 'Pasta',                 short: 'pasta',     soon: false, max: 2 },
    { id: 'yogurt',    name: 'Plain yogurt',          short: 'yogurt',    soon: false, max: 2 }
  ];

  var DEFAULT_IN = ['eggs', 'spinach', 'rice', 'chicken', 'tortillas', 'cheddar', 'carrots', 'peas', 'onion'];

  var VETOES = [
    { id: 'mushrooms', label: 'No mushrooms',    kind: 'exclude' },
    { id: 'spicy',     label: 'Nothing spicy',   kind: 'exclude' },
    { id: 'mixed',     label: 'Nothing mixed in', kind: 'adapt' }
  ];

  /* uses: fridge items; extra: things the shelf list never holds, so they are always bought.
     tags: mushrooms / spicy exclude the dinner under that veto; mixed means the dish combines
     things, so under "nothing mixed in" it is served as parts on the plate. */
  var DINNERS = [
    { name: 'Egg fried rice with peas',           uses: ['eggs', 'rice', 'peas', 'onion'],          extra: ['soy sauce'],                tags: ['mixed'],     apart: 'egg and peas on the side' },
    { name: 'Chicken and cheddar quesadillas',    uses: ['chicken', 'tortillas', 'cheddar'],        extra: [],                           tags: [] },
    { name: 'Spinach and cheddar omelette',       uses: ['eggs', 'spinach', 'cheddar'],             extra: [],                           tags: ['mixed'],     apart: 'plain omelette, spinach beside it' },
    { name: 'Pea and spinach soup, cheese toast', uses: ['peas', 'spinach', 'onion', 'cheddar'],    extra: ['bread', 'stock cubes'],     tags: ['mixed'],     apart: 'cheese toast for the kids, soup for whoever wants it' },
    { name: 'Chicken noodle soup',                uses: ['chicken', 'carrots', 'onion'],            extra: ['noodles', 'stock cubes'],   tags: ['mixed'],     apart: 'noodles and chicken in a bowl, broth separate' },
    { name: 'Carrot and pea fritters',            uses: ['carrots', 'peas', 'eggs'],                extra: ['flour'],                    tags: ['mixed'],     apart: 'carrot fritters, peas on the side' },
    { name: 'Tortilla pizzas with grated carrot', uses: ['tortillas', 'cheddar', 'carrots'],        extra: ['passata'],                  tags: ['mixed'],     apart: 'cheese pizzas, carrot sticks beside them' },
    { name: 'Chicken, rice and carrot bowls',     uses: ['chicken', 'rice', 'carrots'],             extra: ['soy sauce'],                tags: [] },
    { name: 'Shakshuka with tortillas',           uses: ['eggs', 'tortillas', 'onion'],             extra: ['tin of tomatoes'],          tags: ['spicy'] },
    { name: 'Chicken fajitas',                    uses: ['chicken', 'tortillas', 'onion'],          extra: ['peppers', 'fajita spice'],  tags: ['spicy'] },
    { name: 'Spinach, egg and rice bowls',        uses: ['spinach', 'eggs', 'rice'],                extra: ['soy sauce'],                tags: [] },
    { name: 'Carrot and chickpea traybake',       uses: ['carrots', 'chickpeas', 'onion'],          extra: ['lemon'],                    tags: ['mixed'],     apart: 'roasted carrots and chickpeas in two piles' },
    { name: 'Chickpea and yogurt wraps',          uses: ['chickpeas', 'yogurt', 'tortillas', 'spinach'], extra: [],                      tags: ['mixed'],     apart: 'build-your-own wraps' },
    { name: 'Pasta with peas and butter',         uses: ['pasta', 'peas', 'cheddar'],               extra: ['butter'],                   tags: ['mixed'],     apart: 'buttered pasta, peas in a bowl' },
    { name: 'Cheesy baked pasta',                 uses: ['pasta', 'cheddar'],                       extra: ['tin of tomatoes'],          tags: [] },
    { name: 'Mushroom and spinach pasta',         uses: ['pasta', 'spinach'],                       extra: ['mushrooms', 'cream'],       tags: ['mushrooms', 'mixed'], apart: 'pasta plain, sauce beside it' },
    { name: 'Mushroom quesadillas',               uses: ['tortillas', 'cheddar'],                   extra: ['mushrooms'],                tags: ['mushrooms'] },
    { name: 'Yogurt chicken with rice',           uses: ['chicken', 'yogurt', 'rice'],              extra: ['lemon', 'garlic'],          tags: [] },
    { name: 'Peanut noodles with carrots',        uses: ['carrots', 'peas'],                        extra: ['noodles', 'peanut butter'], tags: ['mixed'],     apart: 'noodles plain, carrots and sauce beside' },
    { name: 'Fish finger wraps',                  uses: ['tortillas', 'peas'],                      extra: ['fish fingers'],             tags: [] }
  ];

  var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  var byId = {};
  ITEMS.forEach(function (it) { byId[it.id] = it; });

  function plan(state) {
    var have = state.have || {};
    var vetoes = state.vetoes || {};
    var ticked = ITEMS.filter(function (it) { return have[it.id]; }).length;

    var scored = DINNERS.map(function (d, i) {
      var excluded = d.tags.some(function (t) { return vetoes[t] && t !== 'mixed'; });
      var uses = d.uses.filter(function (id) { return have[id]; });
      var missingFromShelf = d.uses.filter(function (id) { return !have[id]; });
      var buy = missingFromShelf.map(function (id) { return byId[id].name.toLowerCase(); }).concat(d.extra);
      var soon = uses.filter(function (id) { return byId[id].soon; }).length;
      var score = uses.length * 3 + soon - buy.length * 2;
      return { d: d, i: i, excluded: excluded, uses: uses, buy: buy, soon: soon, score: score };
    });

    var fits = scored.filter(function (s) { return !s.excluded && s.uses.length > 0; });
    fits.sort(function (a, b) { return b.score - a.score || a.i - b.i; });
    // Greedy: best score first, but one tub of rice or one tin only stretches so far.
    var used = {};
    var picked = [];
    fits.forEach(function (s) {
      if (picked.length >= 7) return;
      var ok = s.uses.every(function (id) { return (used[id] || 0) < byId[id].max; });
      if (!ok) return;
      s.uses.forEach(function (id) { used[id] = (used[id] || 0) + 1; });
      picked.push(s);
    });
    // Perishable things first: dinners that use them take the early days.
    picked.sort(function (a, b) { return b.soon - a.soon || a.i - b.i; });

    var counts = {};
    var order = [];
    picked.forEach(function (s) {
      s.buy.forEach(function (b) {
        if (!counts[b]) { counts[b] = 0; order.push(b); }
        counts[b] += 1;
      });
    });
    var list = order.map(function (b) { return { item: b, count: counts[b] }; });

    var rows = picked.map(function (s, k) {
      var apart = vetoes.mixed && s.d.tags.indexOf('mixed') >= 0 ? s.d.apart : null;
      return {
        day: DAYS[k],
        name: s.d.name,
        uses: s.uses.map(function (id) { return byId[id].short; }),
        buy: s.buy,
        apart: apart
      };
    });

    var status;
    if (ticked === 0) status = 'empty';
    else if (rows.length < 7) status = 'short';
    else status = 'ok';

    return { rows: rows, list: list, ticked: ticked, status: status, excludedCount: scored.filter(function (s) { return s.excluded; }).length };
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function joinList(arr) {
    if (arr.length <= 1) return arr.join('');
    if (arr.length === 2) return arr[0] + ' and ' + arr[1];
    return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
  }

  function renderRows(result) {
    if (result.status === 'empty') {
      return '<li class="plan-empty"><p><strong>Nothing on the shelf.</strong> Tick at least one thing you have, or this week is just a shopping trip.</p></li>';
    }
    var html = result.rows.map(function (r) {
      var parts = '<span class="uses"><span class="k">uses</span> ' + esc(joinList(r.uses)) + '</span>';
      if (r.buy.length) parts += ' <span class="buy"><span class="k">buy</span> ' + esc(joinList(r.buy)) + '</span>';
      if (r.apart) parts += ' <span class="apart"><span class="k">kids</span> ' + esc(r.apart) + '</span>';
      return '<li class="plan-row"><span class="day">' + r.day + '</span><span class="dish"><span class="dish-name">' + esc(r.name) + '</span><span class="dish-meta">' + parts + '</span></span></li>';
    }).join('');
    if (result.status === 'short') {
      var n = result.rows.length;
      html += '<li class="plan-empty"><p><strong>Only ' + n + (n === 1 ? ' dinner fits.' : ' dinners fit.') + '</strong> With more on the shelf, or one more thing the kids will eat, the week fills up.</p></li>';
    }
    return html;
  }

  function renderList(result) {
    if (result.status === 'empty' || !result.rows.length) return '<li class="list-empty">Nothing to buy until something is on the shelf.</li>';
    if (!result.list.length) return '<li class="list-empty">Nothing. Every dinner this week is already on the shelf.</li>';
    return result.list.map(function (l) {
      return '<li><span class="tick" aria-hidden="true"></span>' + esc(l.item) + (l.count > 1 ? ' <span class="count">for ' + l.count + ' dinners</span>' : '') + '</li>';
    }).join('');
  }

  function summary(result) {
    if (result.status === 'empty') return 'Nothing on the shelf, so no plan yet.';
    var n = result.list.length;
    var things = n === 0 ? 'Nothing' : n === 1 ? '1 thing' : n + ' things';
    var shelf = result.ticked === 1 ? '1 thing' : result.ticked + ' things';
    var dinners = result.rows.length === 1 ? '1 dinner' : result.rows.length + ' dinners';
    return dinners + ' from ' + shelf + ' on the shelf. ' + things + ' to buy.';
  }

  function defaultState() {
    var have = {};
    DEFAULT_IN.forEach(function (id) { have[id] = true; });
    return { have: have, vetoes: {} };
  }

  root.Pantrywise = { ITEMS: ITEMS, VETOES: VETOES, DINNERS: DINNERS, DEFAULT_IN: DEFAULT_IN, plan: plan, renderRows: renderRows, renderList: renderList, summary: summary, defaultState: defaultState };
})(typeof window !== 'undefined' ? window : globalThis);
