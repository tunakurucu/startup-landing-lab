(function () {
  'use strict';

  // What a family might have in the house. Oil, salt, pepper and butter are
  // treated as staples and never appear on the shopping list.
  var ITEMS = [
    { id: 'eggs', name: 'Eggs', group: 'fridge' },
    { id: 'cheddar', name: 'Cheddar', group: 'fridge' },
    { id: 'milk', name: 'Milk', group: 'fridge' },
    { id: 'chicken', name: 'Chicken thighs', group: 'fridge' },
    { id: 'beef', name: 'Mince', group: 'fridge' },
    { id: 'sausages', name: 'Sausages', group: 'fridge' },
    { id: 'spinach', name: 'Half a bag of spinach', group: 'fridge' },
    { id: 'carrots', name: 'Carrots', group: 'fridge' },
    { id: 'pepper', name: 'A bell pepper', group: 'fridge' },
    { id: 'broccoli', name: 'Broccoli', group: 'fridge' },
    { id: 'tortillas', name: 'Tortillas', group: 'fridge' },
    { id: 'pasta', name: 'Pasta', group: 'cupboard' },
    { id: 'rice', name: 'Rice', group: 'cupboard' },
    { id: 'tomatoes', name: 'Tinned tomatoes', group: 'cupboard' },
    { id: 'beans', name: 'Black beans', group: 'cupboard' },
    { id: 'tuna', name: 'Tinned tuna', group: 'cupboard' },
    { id: 'potatoes', name: 'Potatoes', group: 'cupboard' },
    { id: 'onion', name: 'An onion', group: 'cupboard' },
    { id: 'bread', name: 'Bread', group: 'cupboard' },
    { id: 'peas', name: 'Frozen peas', group: 'freezer' },
    { id: 'fishfingers', name: 'Fish fingers', group: 'freezer' }
  ];

  // Example dinners, each written for a weeknight. `main` stops the week
  // turning into five tortilla nights in a row.
  var DINNERS = [
    { name: 'Cheesy egg fried rice', needs: ['rice', 'eggs', 'peas', 'cheddar'], main: 'rice' },
    { name: 'Chicken quesadillas', needs: ['tortillas', 'cheddar', 'chicken'], main: 'tortillas' },
    { name: 'Sheet-pan sausages and potatoes', needs: ['sausages', 'potatoes', 'carrots'], main: 'sausages' },
    { name: 'Build-your-own tacos', needs: ['beef', 'tortillas', 'cheddar'], main: 'tortillas' },
    { name: 'Tomato pasta with hidden spinach', needs: ['pasta', 'tomatoes', 'spinach', 'onion'], main: 'pasta' },
    { name: 'Mac and cheese with peas', needs: ['pasta', 'cheddar', 'milk', 'peas'], main: 'pasta' },
    { name: 'Breakfast for dinner', needs: ['eggs', 'bread', 'sausages'], main: 'eggs' },
    { name: 'Black bean quesadillas', needs: ['tortillas', 'beans', 'cheddar'], main: 'tortillas' },
    { name: 'Tuna melts', needs: ['bread', 'tuna', 'cheddar'], main: 'bread' },
    { name: 'Chicken and broccoli rice bowls', needs: ['chicken', 'broccoli', 'rice'], main: 'rice' },
    { name: 'Build-your-own baked potatoes', needs: ['potatoes', 'cheddar', 'beans'], main: 'potatoes' },
    { name: 'Mince and veg stir-fry rice', needs: ['beef', 'rice', 'pepper', 'carrots'], main: 'rice' },
    { name: 'Egg and cheese wraps', needs: ['eggs', 'tortillas', 'cheddar'], main: 'tortillas' },
    { name: 'Spaghetti bolognese', needs: ['pasta', 'beef', 'tomatoes', 'onion'], main: 'pasta' },
    { name: 'Creamy chicken pasta', needs: ['pasta', 'chicken', 'milk', 'spinach'], main: 'pasta' },
    { name: 'Veggie fried rice', needs: ['rice', 'eggs', 'broccoli', 'pepper'], main: 'rice' },
    { name: 'Chicken fajita wraps', needs: ['chicken', 'pepper', 'onion', 'tortillas'], main: 'tortillas' },
    { name: 'Potato and pea omelette', needs: ['eggs', 'potatoes', 'peas', 'onion'], main: 'eggs' },
    { name: 'Fish finger wraps', needs: ['fishfingers', 'tortillas', 'peas'], main: 'fishfingers' },
    { name: 'Fish fingers, peas and mash', needs: ['fishfingers', 'potatoes', 'peas', 'milk'], main: 'fishfingers' },
    { name: 'Tuna and sweetcorn pasta bake', needs: ['pasta', 'tuna', 'tomatoes', 'cheddar'], main: 'pasta' },
    { name: 'Sausage and bean one-pot', needs: ['sausages', 'beans', 'tomatoes', 'onion'], main: 'sausages' },
    { name: 'Broccoli and cheddar baked potatoes', needs: ['potatoes', 'broccoli', 'cheddar'], main: 'potatoes' },
    { name: 'Cheesy beans on toast', needs: ['bread', 'beans', 'cheddar'], main: 'bread' }
  ];

  var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  var START = ['eggs', 'cheddar', 'spinach', 'tortillas', 'rice', 'peas'];

  var itemById = {};
  ITEMS.forEach(function (it) { itemById[it.id] = it; });

  var have = {};
  START.forEach(function (id) { have[id] = true; });
  var shuffleSeed = 0;

  var shelves = document.getElementById('shelves');
  var weekEl = document.getElementById('week');
  var shoppingEl = document.getElementById('shopping');
  var shoppingEmpty = document.getElementById('shopping-empty');

  function renderChips() {
    ITEMS.forEach(function (it) {
      var host = shelves.querySelector('[data-group="' + it.group + '"]');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = it.name;
      b.dataset.id = it.id;
      b.setAttribute('aria-pressed', have[it.id] ? 'true' : 'false');
      b.addEventListener('click', function () {
        have[it.id] = !have[it.id];
        b.setAttribute('aria-pressed', have[it.id] ? 'true' : 'false');
        update();
      });
      host.appendChild(b);
    });
  }

  function planWeek() {
    var scored = DINNERS.map(function (d, i) {
      var has = d.needs.filter(function (n) { return have[n]; });
      var missing = d.needs.filter(function (n) { return !have[n]; });
      return { d: d, has: has, missing: missing, i: i,
        score: has.length / d.needs.length - missing.length * 0.15 +
          (shuffleSeed ? ((i * 31 + shuffleSeed * 17) % 7) * 0.06 : 0) };
    }).filter(function (s) { return s.has.length >= 2 || (s.has.length === 1 && s.d.needs.length <= 3); });

    scored.sort(function (a, b) { return b.score - a.score; });

    var week = [];
    var usedMains = {};
    var usedNames = {};
    // First pass: best dinners with no repeated main.
    scored.forEach(function (s) {
      if (week.length >= 5 || usedMains[s.d.main] || usedNames[s.d.name]) return;
      week.push(s); usedMains[s.d.main] = true; usedNames[s.d.name] = true;
    });
    // Second pass: fill remaining nights, allowing a main twice.
    scored.forEach(function (s) {
      if (week.length >= 5 || usedNames[s.d.name]) return;
      week.push(s); usedNames[s.d.name] = true;
    });
    return week;
  }

  function names(ids) {
    return ids.map(function (id) { return itemById[id].name.toLowerCase(); });
  }

  function joinNames(list) {
    if (list.length <= 1) return list.join('');
    return list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1];
  }

  function update() {
    var week = planWeek();
    weekEl.innerHTML = '';
    var shopping = {};
    var shoppingFor = {};

    DAYS.forEach(function (day, i) {
      var li = document.createElement('li');
      var dayEl = document.createElement('span');
      dayEl.className = 'day';
      dayEl.textContent = day;
      li.appendChild(dayEl);

      var s = week[i];
      if (!s) {
        li.className = 'empty';
        var e = document.createElement('span');
        e.className = 'dinner';
        e.textContent = i === 0 && week.length === 0 ? 'Tap a few things above to start.' : 'Tap a couple more things to fill this night.';
        li.appendChild(e);
      } else {
        var name = document.createElement('span');
        name.className = 'dinner';
        name.textContent = s.d.name;
        li.appendChild(name);

        var uses = document.createElement('span');
        uses.className = 'uses';
        uses.innerHTML = 'From the house: <b>' + joinNames(names(s.has)) + '</b>' +
          (s.missing.length ? '. Buy: ' + joinNames(names(s.missing)) + '.' : '. Nothing to buy.');
        li.appendChild(uses);

        s.missing.forEach(function (id) {
          shopping[id] = true;
          (shoppingFor[id] = shoppingFor[id] || []).push(day);
        });
      }
      weekEl.appendChild(li);
    });

    shoppingEl.innerHTML = '';
    var ids = Object.keys(shopping);
    ids.sort(function (a, b) {
      var ga = itemById[a].group, gb = itemById[b].group;
      return ga === gb ? itemById[a].name.localeCompare(itemById[b].name) : ga.localeCompare(gb);
    });
    ids.forEach(function (id) {
      var li = document.createElement('li');
      li.textContent = itemById[id].name + ' ';
      var f = document.createElement('span');
      f.className = 'list-for';
      f.textContent = '(' + shoppingFor[id].join(', ') + ')';
      li.appendChild(f);
      shoppingEl.appendChild(li);
    });
    shoppingEmpty.hidden = ids.length !== 0 || week.length === 0;
    if (week.length === 0) {
      shoppingEmpty.hidden = false;
      shoppingEmpty.textContent = 'The list writes itself once there are dinners to plan.';
    } else {
      shoppingEmpty.textContent = 'Nothing. The whole week is already in the house.';
    }
  }

  document.getElementById('reshuffle').addEventListener('click', function () {
    shuffleSeed += 1;
    update();
  });

  renderChips();
  update();
})();
