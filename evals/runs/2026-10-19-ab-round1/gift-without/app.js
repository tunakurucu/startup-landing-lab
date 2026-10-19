/* Poolday: local-only example pool. Nothing here talks to a network. */
(function () {
  "use strict";

  var COLORS = ["var(--f1)", "var(--f2)", "var(--f3)", "var(--f4)", "var(--f5)", "var(--f6)"];
  var SAMPLES = [
    { name: "Jo", amount: 40, note: "She's going to make us all mugs, isn't she." },
    { name: "Priya", amount: 30, note: "Happy 30th!!" },
    { name: "Sam", amount: 25, note: "" },
    { name: "Dee", amount: 40, note: "From me and Biscuit." },
    { name: "Marcus", amount: 20, note: "Late but here." },
    { name: "Lena", amount: 35, note: "Can we all go to the class too" },
    { name: "Kofi", amount: 15, note: "" },
    { name: "Rosa", amount: 25, note: "Love you lots" }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    recipient: $("f-recipient"), occasion: $("f-occasion"), gift: $("f-gift"),
    target: $("f-target"), group: $("f-group"), setupErr: $("setup-error"),
    chip: $("chip"), cName: $("c-name"), cAmount: $("c-amount"), cNote: $("c-note"),
    chipErr: $("chip-error"), addSample: $("add-sample"),
    title: $("p-title"), giftOut: $("p-gift"), ribbon: $("p-ribbon"),
    raised: $("p-raised"), targetOut: $("p-target"), togo: $("p-togo"),
    list: $("p-list"), empty: $("p-empty"),
    needed: $("o-needed"), inCount: $("o-in"), split: $("o-split"), status: $("o-status"),
    invite: $("invite-text"), added: $("chip-added"), addedWrap: $("chip-added-wrap"), copy: $("copy-invite"), copied: $("copied"), reset: $("reset")
  };

  var state = { contributions: [], sampleIndex: 0, nextColor: 0 };

  function money(n) {
    var rounded = Math.round(n * 100) / 100;
    var opts = rounded % 1 === 0 ? { maximumFractionDigits: 0 } : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return "$" + rounded.toLocaleString("en-US", opts);
  }
  function clean(s) { return String(s || "").replace(/\s+/g, " ").trim(); }
  function possessive(name) { return name + "’s"; }

  function setup() {
    var recipient = clean(el.recipient.value) || "your friend";
    var occasion = clean(el.occasion.value);
    var gift = clean(el.gift.value) || "something they’ll love";
    var target = parseFloat(el.target.value);
    var group = parseInt(el.group.value, 10);
    var problems = [];
    var targetOk = isFinite(target) && target >= 1 && target <= 100000;
    var groupOk = isFinite(group) && group >= 1 && group <= 200;
    el.target.setAttribute("aria-invalid", targetOk ? "false" : "true");
    el.group.setAttribute("aria-invalid", groupOk ? "false" : "true");
    if (!targetOk) problems.push("Give the gift a cost between $1 and $100,000.");
    if (!groupOk) problems.push("Group size should be between 1 and 200.");
    el.setupErr.hidden = problems.length === 0;
    el.setupErr.textContent = problems.join(" ");
    return {
      recipient: recipient, occasion: occasion, gift: gift,
      target: targetOk ? target : 0, group: groupOk ? group : 0, ok: targetOk && groupOk
    };
  }

  function render() {
    var s = setup();
    var total = state.contributions.reduce(function (a, c) { return a + c.amount; }, 0);
    var remaining = Math.max(0, s.target - total);
    var over = Math.max(0, total - s.target);
    var count = state.contributions.length;

    el.title.textContent = "For " + possessive(s.recipient) + (s.occasion ? " " + s.occasion : " day");
    el.giftOut.textContent = s.gift;
    el.raised.textContent = money(total);
    el.targetOut.textContent = s.ok ? money(s.target) : "—";

    // ribbon segments, one per friend
    var scale = Math.max(s.target, total) || 1;
    el.ribbon.textContent = "";
    state.contributions.forEach(function (c) {
      var seg = document.createElement("span");
      seg.style.setProperty("--w", (c.amount / scale * 100) + "%");
      seg.style.setProperty("--c", c.color);
      el.ribbon.appendChild(seg);
    });
    el.ribbon.setAttribute("aria-label", money(total) + " raised of " + money(s.target) + ", " + (remaining > 0 ? money(remaining) + " still needed" : "fully covered"));

    if (!s.ok) {
      el.togo.textContent = "Set a cost";
      el.togo.classList.remove("done");
    } else if (remaining > 0) {
      el.togo.textContent = money(remaining) + " to go";
      el.togo.classList.remove("done");
    } else {
      el.togo.textContent = over > 0 ? "Covered, " + money(over) + " extra" : "Fully covered";
      el.togo.classList.add("done");
    }

    // list
    el.list.textContent = "";
    state.contributions.forEach(function (c) {
      var li = document.createElement("li");
      var chip = document.createElement("span");
      chip.className = "chip";
      chip.style.setProperty("--c", c.color);
      chip.setAttribute("aria-hidden", "true");
      chip.textContent = c.name.charAt(0).toUpperCase();
      var body = document.createElement("span");
      var b = document.createElement("b");
      b.textContent = c.name;
      body.appendChild(b);
      body.appendChild(document.createTextNode(" · " + money(c.amount)));
      if (c.note) {
        body.appendChild(document.createElement("br"));
        var i = document.createElement("i");
        i.textContent = "“" + c.note + "”";
        body.appendChild(i);
      }
      var rm = document.createElement("button");
      rm.type = "button";
      rm.className = "remove";
      rm.textContent = "Remove";
      rm.setAttribute("aria-label", "Remove " + c.name + "’s contribution");
      rm.addEventListener("click", function () {
        state.contributions = state.contributions.filter(function (x) { return x.id !== c.id; });
        render();
        el.cName.focus();
      });
      li.appendChild(chip); li.appendChild(body); li.appendChild(rm);
      el.list.appendChild(li);
    });
    el.empty.hidden = count > 0;

    // organizer view
    var groupSize = Math.max(s.group, count);
    var left = groupSize - count;
    el.needed.textContent = s.ok ? money(remaining) : "—";
    el.inCount.textContent = count + " of " + groupSize;
    if (!s.ok) el.split.textContent = "—";
    else if (remaining === 0) el.split.textContent = "Nothing";
    else if (left > 0) el.split.textContent = "~" + money(Math.ceil(remaining / left)) + " each";
    else el.split.textContent = "Ask a few more";

    var msg;
    if (!s.ok) msg = "Fix the gift details above to see the organizer view.";
    else if (count === 0) msg = "Share the pool with the group. Nobody has chipped in yet.";
    else if (remaining > 0 && left > 0) msg = "<b>" + left + (left === 1 ? " person hasn’t" : " people haven’t") + "</b> joined yet. A friendly nudge in the group chat should close the gap.";
    else if (remaining > 0) msg = "Everyone in the group is in, and you’re <b>" + money(remaining) + " short</b>. Invite a couple more friends or pick a slightly smaller gift.";
    else if (over > 0) msg = "You’re covered with <b>" + money(over) + " to spare</b> — enough for a card, wrapping, or cake.";
    else msg = "<b>Exactly covered.</b> Time to buy the gift.";
    el.status.innerHTML = msg;

    // invite message
    var lines = "We’re getting " + s.recipient + " " + lowerFirst(s.gift) + (s.occasion ? " for their " + s.occasion : "") + ".";
    if (s.ok) {
      lines += remaining > 0
        ? " It’s about " + money(s.target) + " and we still need " + money(remaining) + "."
        : " It’s covered — thank you all!";
    }
    if (remaining > 0) lines += "\nAdd whatever works for you, and leave a note for the card if you like.";
    el.invite.textContent = lines;
    el.copied.textContent = "";
  }

  function lowerFirst(str) {
    // keep proper nouns / acronyms: only lowercase "A ..." / "An ..." / "The ..."
    return str.replace(/^(A|An|The|Some)\b/, function (m) { return m.toLowerCase(); });
  }

  function add(name, amount, note) {
    state.contributions.push({
      id: Date.now() + Math.random(),
      name: name, amount: amount, note: note,
      color: COLORS[state.nextColor++ % COLORS.length]
    });
    el.chipErr.hidden = true;
    el.cName.removeAttribute("aria-invalid");
    el.cAmount.removeAttribute("aria-invalid");
    render();
  }

  // Short confirmation next to the form; on phones the pool card is further down the page.
  function confirmAdded(name, amount) {
    var s = setup();
    var total = state.contributions.reduce(function (a, c) { return a + c.amount; }, 0);
    var rem = Math.max(0, s.target - total);
    el.added.textContent = name + " is in with " + money(amount) + ". " +
      (s.ok ? (rem > 0 ? money(rem) + " still to go." : "The gift is covered.") : "");
    el.addedWrap.hidden = false;
  }

  el.chip.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = clean(el.cName.value);
    var amount = parseFloat(el.cAmount.value);
    var problems = [];
    var nameOk = name.length > 0;
    var amountOk = isFinite(amount) && amount >= 1 && amount <= 100000;
    el.cName.setAttribute("aria-invalid", nameOk ? "false" : "true");
    el.cAmount.setAttribute("aria-invalid", amountOk ? "false" : "true");
    if (!nameOk) problems.push("Add a name.");
    if (!amountOk) problems.push("Amount should be between $1 and $100,000.");
    el.chipErr.hidden = problems.length === 0;
    el.chipErr.textContent = problems.join(" ");
    if (problems.length) { (nameOk ? el.cAmount : el.cName).focus(); return; }
    add(name, Math.round(amount * 100) / 100, clean(el.cNote.value));
    confirmAdded(name, Math.round(amount * 100) / 100);
    el.chip.reset();
    el.cName.focus();
  });

  el.addSample.addEventListener("click", function () {
    var taken = state.contributions.map(function (c) { return c.name; });
    var tries = 0, s;
    do { s = SAMPLES[state.sampleIndex++ % SAMPLES.length]; tries++; }
    while (taken.indexOf(s.name) !== -1 && tries < SAMPLES.length);
    if (taken.indexOf(s.name) !== -1) s = { name: "Friend " + (state.contributions.length + 1), amount: 20, note: "" };
    add(s.name, s.amount, s.note);
    confirmAdded(s.name, s.amount);
  });

  ["recipient", "occasion", "gift", "target", "group"].forEach(function (k) {
    el[k].addEventListener("input", render);
  });

  el.copy.addEventListener("click", function () {
    var text = el.invite.textContent;
    function done(ok) { el.copied.textContent = ok ? "Copied. Paste it into your group chat." : "Select the text above to copy it."; }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallback(text)); });
    } else {
      done(fallback(text));
    }
  });
  function fallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  el.reset.addEventListener("click", function () {
    state.contributions = [];
    el.recipient.value = ""; el.occasion.value = ""; el.gift.value = "";
    el.target.value = "100"; el.group.value = "5";
    el.chipErr.hidden = true;
    el.addedWrap.hidden = true;
    render();
    el.recipient.focus();
  });

  // "Start a pool" buttons land on the first field of the builder
  Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (a) {
    a.addEventListener("click", function () {
      setTimeout(function () { el.recipient.focus({ preventScroll: true }); }, 450);
    });
  });

  // header border once scrolled
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("year").textContent = new Date().getFullYear();

  // Start the example with a couple of friends already in, so the organizer view has something to show.
  add("Jo", 40, SAMPLES[0].note);
  add("Priya", 30, SAMPLES[1].note);
  state.sampleIndex = 2;
})();
