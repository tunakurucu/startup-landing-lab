(function () {
  "use strict";

  var STORE_KEY = "ledgerlight-example-v1";
  var DAY = 86400000;

  /* ---------- dates ---------- */
  function today() {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12);
  }
  function toISO(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  function fromISO(s) {
    var p = String(s).split("-").map(Number);
    if (p.length !== 3 || p.some(isNaN)) return null;
    return new Date(p[0], p[1] - 1, p[2], 12);
  }
  function offset(n) { return toISO(new Date(today().getTime() + n * DAY)); }
  function addDays(iso, n) { return toISO(new Date(fromISO(iso).getTime() + n * DAY)); }
  function diffDays(iso) { return Math.round((fromISO(iso) - today()) / DAY); }
  function fmt(iso) {
    return fromISO(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function rel(n) {
    if (n === 0) return "today";
    if (n === 1) return "tomorrow";
    if (n === -1) return "yesterday";
    return n > 0 ? "in " + n + " days" : Math.abs(n) + " days ago";
  }

  /* ---------- sample data (fictional) ---------- */
  function sampleData() {
    return [
      {
        id: "s1", name: "Office lease, 3rd floor", owner: "Sam K. · Facilities",
        renewal: offset(190), notice: 180, auto: true,
        decision: "Exercise the renewal option, or give notice to vacate?",
        trail: [
          { date: offset(-52), who: "Rae L. · Legal", what: "Lease uploaded; renewal option and 180-day notice clause confirmed" },
          { date: offset(-20), who: "Sam K. · Facilities", what: "Headcount plan for next year requested from Finance" },
          { date: offset(-6), who: "Sam K. · Facilities", what: "Two comparable spaces toured; notes attached" }
        ]
      },
      {
        id: "s2", name: "E-signature software, annual plan", owner: "Rae L. · Legal",
        renewal: offset(58), notice: 30, auto: true,
        decision: "Renew at the current seat count, or reduce seats?",
        trail: [
          { date: offset(-41), who: "Rae L. · Legal", what: "Order form reviewed; auto-renewal with 30 days' notice" },
          { date: offset(-12), who: "Rae L. · Legal", what: "Seat usage export requested from IT" },
          { date: offset(-3), who: "Jordan P. · IT", what: "Usage export shared: about half of seats active last quarter" }
        ]
      },
      {
        id: "s3", name: "Managed IT support, master services agreement", owner: "Jordan P. · IT",
        renewal: offset(45), notice: 60, auto: true,
        decision: "The window has passed. Plan an exit for the following term, or renegotiate now?",
        trail: [
          { date: offset(-130), who: "Rae L. · Legal", what: "MSA added; 60-day notice clause flagged" },
          { date: offset(-24), who: "Jordan P. · IT", what: "Service review postponed" }
        ]
      },
      {
        id: "s4", name: "Data room licence, project workspace", owner: "Rae L. · Legal",
        renewal: offset(75), notice: 14, auto: false,
        decision: "Extend for one more quarter, or archive and let it end?",
        trail: [
          { date: offset(-90), who: "Rae L. · Legal", what: "Licence added; fixed term, no auto-renewal" }
        ]
      },
      {
        id: "s5", name: "Payroll processing, order form 2", owner: "Ana M. · Finance",
        renewal: offset(300), notice: 90, auto: true,
        decision: "Review pricing against the current plan before the notice window.",
        trail: [
          { date: offset(-200), who: "Rae L. · Legal", what: "Order form added; 90-day notice confirmed" },
          { date: offset(-35), who: "Ana M. · Finance", what: "Noted a price increase clause for the next term" }
        ]
      }
    ];
  }

  /* ---------- storage (best effort) ---------- */
  function load() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        if (Array.isArray(data) && data.every(function (c) { return c && c.id && fromISO(c.renewal); })) return data;
      }
    } catch (e) { /* storage unavailable */ }
    return sampleData();
  }
  function save() {
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(contracts)); } catch (e) { /* ignore */ }
  }

  /* ---------- status ---------- */
  function deadlineOf(c) { return addDays(c.renewal, -Number(c.notice || 0)); }
  function status(c) {
    var left = diffDays(deadlineOf(c));
    if (c.decided) return { cls: "done", label: "Decided: " + c.decided };
    if (diffDays(c.renewal) < 0) return { cls: "late", label: c.auto ? "Renewed" : "Ended" };
    if (left < 0) return { cls: "late", label: c.auto ? "Notice window closed" : "Decision overdue" };
    if (left <= 30) return { cls: "soon", label: "Notice due " + (left === 0 ? "today" : "in " + left + "d") };
    return { cls: "", label: "On track" };
  }
  function termLine(c) {
    var verb = c.auto ? "Renews " : "Ends ";
    return verb + fmt(c.renewal) + " · " + c.notice + "-day notice" + (c.auto ? " · auto-renews" : " · no auto-renewal");
  }

  /* ---------- helpers ---------- */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (ch) { if (ch) n.appendChild(typeof ch === "string" ? document.createTextNode(ch) : ch); });
    return n;
  }
  function pill(st) { return el("span", { class: "pill " + st.cls, text: st.label }); }
  function sortedTrail(c) { return c.trail.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; }); }

  /* ---------- state ---------- */
  var contracts = load();
  var selectedId = null;

  var listEl = document.getElementById("contract-list");
  var detailEl = document.getElementById("detail");

  function sorted() {
    return contracts.slice().sort(function (a, b) {
      var da = deadlineOf(a), db = deadlineOf(b);
      if (!!a.decided !== !!b.decided) return a.decided ? 1 : -1;
      return da < db ? -1 : da > db ? 1 : 0;
    });
  }

  function renderList() {
    listEl.innerHTML = "";
    sorted().forEach(function (c) {
      var left = diffDays(deadlineOf(c));
      var btn = el("button", { type: "button", class: "c-row", "data-id": c.id, "aria-current": String(c.id === selectedId) }, [
        el("span", { class: "c-name", text: c.name }),
        pill(status(c)),
        el("span", { class: "c-sub", text: "Notice by " + fmt(deadlineOf(c)) + " (" + rel(left) + ") · " + c.owner })
      ]);
      btn.addEventListener("click", function () { select(c.id, true); });
      listEl.appendChild(el("li", null, [btn]));
    });
  }

  function renderDetail() {
    var c = contracts.filter(function (x) { return x.id === selectedId; })[0];
    detailEl.innerHTML = "";
    if (!c) { detailEl.appendChild(el("p", { class: "muted", text: "Select a contract to see its details." })); return; }

    var dl = deadlineOf(c), left = diffDays(dl);
    detailEl.appendChild(el("div", { class: "d-top" }, [
      el("h3", { class: "d-name", id: "d-name", text: c.name }),
      pill(status(c))
    ]));

    detailEl.appendChild(el("dl", { class: "facts d-facts" }, [
      el("div", null, [el("dt", { text: "Owner" }), el("dd", { text: c.owner })]),
      el("div", null, [
        el("dt", { text: "Notice deadline" }),
        el("dd", null, [
          el("span", { class: "d-deadline-big", text: fmt(dl) }), " ",
          el("span", { class: "muted", text: "(" + rel(left) + ")" })
        ])
      ]),
      el("div", { class: "span-2" }, [
        el("dt", { text: "Next decision" }),
        el("dd", { text: c.decided ? "Decided: " + c.decided : c.decision })
      ]),
      el("div", { class: "span-2" }, [el("dd", { class: "d-explain", text: termLine(c) + ". Notice deadline = renewal date minus notice period." })])
    ]));

    var items = sortedTrail(c).map(function (t) {
      return el("li", t.isNew ? { class: "new" } : null, [
        el("span", { class: "t-when", text: fmt(t.date) }),
        el("span", null, [t.what, " ", el("span", { class: "t-who", text: "· " + t.who })])
      ]);
    });
    detailEl.appendChild(el("div", { class: "trail" }, [el("h4", { text: "Review trail" }), el("ol", null, items)]));

    detailEl.appendChild(recordForm(c));
  }

  function recordForm(c) {
    var outcome = null;
    var choices = ["Renew", "Renegotiate", "Give notice", "Let it end"];
    var row = el("div", { class: "choice-row", role: "group", "aria-label": "Outcome (optional)" });
    choices.forEach(function (label) {
      var b = el("button", { type: "button", "aria-pressed": "false", text: label });
      b.addEventListener("click", function () {
        outcome = outcome === label ? null : label;
        Array.prototype.forEach.call(row.children, function (x) { x.setAttribute("aria-pressed", String(x.textContent === outcome)); });
      });
      row.appendChild(b);
    });

    var note = el("input", { id: "r-note", maxlength: "160", placeholder: "e.g. Asked vendor for a 12-month term at current price" });
    var err = el("p", { class: "form-error", role: "alert" }); err.hidden = true;
    var form = el("form", { class: "record stack", novalidate: "" }, [
      el("h4", { text: "Add to the trail" }),
      row,
      el("div", { class: "field" }, [el("label", { for: "r-note", text: "Note" }), note]),
      err,
      el("div", { class: "form-actions" }, [el("button", { class: "btn btn-small", type: "submit", text: "Add entry" })])
    ]);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = note.value.trim();
      if (!text && !outcome) { err.textContent = "Choose an outcome or write a note."; err.hidden = false; note.focus(); return; }
      var what = outcome ? "Decision: " + outcome + (text ? ". " + text : "") : text;
      c.trail.forEach(function (t) { delete t.isNew; });
      c.trail.push({ date: toISO(today()), who: "You (example)", what: what, isNew: true });
      if (outcome) c.decided = outcome;
      save();
      renderList();
      renderDetail();
      renderHero();
      var h = document.getElementById("d-name");
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    });
    return form;
  }

  function select(id, userInitiated) {
    selectedId = id;
    renderList();
    renderDetail();
    if (userInitiated && window.matchMedia("(max-width: 960px)").matches) {
      detailEl.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }

  /* ---------- hero card ---------- */
  function renderHero() {
    var c = contracts.filter(function (x) { return x.id === "s1"; })[0] || sampleData()[0];
    var q = function (k) { return document.querySelector('[data-hero="' + k + '"]'); };
    var st = status(c);
    var p = q("status"); p.className = "pill " + st.cls; p.textContent = st.label;
    q("name").textContent = c.name;
    q("owner").textContent = c.owner;
    q("deadline").textContent = fmt(deadlineOf(c));
    q("countdown").textContent = "(" + rel(diffDays(deadlineOf(c))) + ")";
    q("decision").textContent = c.decided ? "Decided: " + c.decided : c.decision;
    var ol = q("trail"); ol.innerHTML = "";
    sortedTrail(c).slice(-3).forEach(function (t) {
      ol.appendChild(el("li", null, [el("span", { class: "t-when", text: fmt(t.date) }), el("span", { class: "t-what", text: t.what })]));
    });
  }

  /* ---------- add contract ---------- */
  var addForm = document.getElementById("add-form");
  var addErr = document.getElementById("add-error");
  document.getElementById("f-renewal").value = offset(90);

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = addForm.elements;
    var problems = [];
    [["name", "contract name"], ["owner", "owner"], ["renewal", "renewal date"], ["decision", "next decision"]].forEach(function (pair) {
      var input = f[pair[0]];
      var bad = !input.value.trim() || (pair[0] === "renewal" && !fromISO(input.value));
      input.setAttribute("aria-invalid", String(bad));
      if (bad) problems.push(pair[1]);
    });
    var notice = parseInt(f.notice.value, 10);
    var noticeBad = isNaN(notice) || notice < 0 || notice > 730;
    f.notice.setAttribute("aria-invalid", String(noticeBad));
    if (noticeBad) problems.push("notice period (0 to 730 days)");

    if (problems.length) {
      addErr.textContent = "Please add: " + problems.join(", ") + ".";
      addErr.hidden = false;
      addForm.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    addErr.hidden = true;
    var c = {
      id: "u" + Date.now(),
      name: f.name.value.trim(), owner: f.owner.value.trim(),
      renewal: f.renewal.value, notice: notice, auto: f.auto.checked,
      decision: f.decision.value.trim(),
      trail: [{ date: toISO(today()), who: "You (example)", what: "Added to the renewal list", isNew: true }]
    };
    contracts.push(c);
    save();
    addForm.reset();
    f.notice.value = 30;
    f.renewal.value = offset(90);
    select(c.id, true);
  });

  document.getElementById("reset-demo").addEventListener("click", function () {
    contracts = sampleData();
    try { window.localStorage.removeItem(STORE_KEY); } catch (e) { /* ignore */ }
    selectedId = sorted()[0].id;
    renderList(); renderDetail(); renderHero();
  });

  /* ---------- consultation request ---------- */
  var cForm = document.getElementById("consult-form");
  var cErr = document.getElementById("consult-error");
  var cResult = document.getElementById("consult-result");

  function summaryText(data) {
    return [
      "Consultation request: Ledgerlight",
      "Name: " + data.name,
      "Email: " + data.email,
      "Team: " + data.team,
      "Contracts tracked: " + (data.contracts || "Not sure"),
      data.message ? "Renewing next: " + data.message : null
    ].filter(Boolean).join("\n");
  }

  function showResult(title, body, text) {
    cResult.innerHTML = "";
    cResult.appendChild(el("h3", { text: title }));
    cResult.appendChild(el("p", { text: body }));
    if (text) {
      cResult.appendChild(el("pre", { text: text }));
      var copy = el("button", { type: "button", class: "btn btn-small btn-quiet", text: "Copy details" });
      copy.addEventListener("click", function () {
        var done = function () { copy.textContent = "Copied"; };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { selectPre(); });
        } else { selectPre(); }
      });
      cResult.appendChild(copy);
    }
    cResult.hidden = false;
    cResult.focus();
  }
  function selectPre() {
    var pre = cResult.querySelector("pre");
    var r = document.createRange(); r.selectNodeContents(pre);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  cForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = cForm.elements;
    var problems = [];
    var name = f.name.value.trim(), email = f.email.value.trim(), team = f.team.value;
    f.name.setAttribute("aria-invalid", String(!name)); if (!name) problems.push("your name");
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    f.email.setAttribute("aria-invalid", String(!emailOk)); if (!emailOk) problems.push("a valid work email");
    f.team.setAttribute("aria-invalid", String(!team)); if (!team) problems.push("your team");
    if (problems.length) {
      cErr.textContent = "Please add " + (problems.length > 1 ? problems.slice(0, -1).join(", ") + " and " + problems[problems.length - 1] : problems[0]) + ".";
      cErr.hidden = false;
      cForm.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    cErr.hidden = true;
    var data = { name: name, email: email, team: team, contracts: f.contracts.value, message: f.message.value.trim() };
    var endpoint = (cForm.getAttribute("data-endpoint") || "").trim();

    if (!endpoint) {
      showResult(
        "Your request is ready, but it has not been sent",
        "This page is not connected to an inbox yet, so nothing was submitted. Your details are below so you can keep them.",
        summaryText(data)
      );
      return;
    }

    var btn = cForm.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = "Sending…";
    fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        showResult("Request sent", "Thanks, " + name + ". Your request reached the Ledgerlight team.", null);
        cForm.reset();
      })
      .catch(function () {
        showResult("We could not send your request", "Something went wrong on our side. Your details are below so nothing is lost.", summaryText(data));
      })
      .then(function () { btn.disabled = false; btn.textContent = "Request a consultation"; });
  });

  /* ---------- init ---------- */
  document.getElementById("today-label").textContent = "Today: " + fmt(toISO(today()));
  selectedId = sorted()[0].id;
  renderList();
  renderDetail();
  renderHero();
})();
