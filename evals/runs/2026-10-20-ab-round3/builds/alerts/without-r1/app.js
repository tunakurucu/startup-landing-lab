(function () {
  var TOTAL = 5;
  var notes = {
    1: "The monitoring system raised this alert. Casefold opened a case for it and recorded what the rule saw.",
    2: "A queue rule assigned the case. The reviewer and the due date are now part of the record, not a calendar reminder.",
    3: "Each check is entered as it is done, with what was found and when. Attachments sit on the entry they support.",
    4: "The decision and the reason are written by the person who made it, before the case can close. A second reviewer signs off.",
    5: "This is the file as it would be handed over. Nothing in it was assembled afterwards."
  };

  var casefile = document.querySelector(".casefile");
  var panel = document.getElementById("panel");
  var blocks = Array.prototype.slice.call(panel.querySelectorAll(".block"));
  var stepButtons = Array.prototype.slice.call(document.querySelectorAll(".step"));
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var note = document.getElementById("step-note");
  var count = document.getElementById("cf-count");
  var status = document.getElementById("cf-status");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = 1;

  function render(step, fromUser) {
    current = Math.max(1, Math.min(TOTAL, step));
    casefile.setAttribute("data-step", String(current));

    blocks.forEach(function (b) {
      var n = Number(b.getAttribute("data-block"));
      b.classList.remove("is-new");
      if (n <= current) {
        b.hidden = false;
      } else {
        b.hidden = true;
      }
    });

    stepButtons.forEach(function (btn) {
      var n = Number(btn.getAttribute("data-go"));
      btn.classList.toggle("is-current", n === current);
      btn.classList.toggle("is-done", n < current);
      if (n === current) {
        btn.setAttribute("aria-current", "step");
      } else {
        btn.removeAttribute("aria-current");
      }
    });

    note.textContent = notes[current];
    count.textContent = "Step " + current + " of " + TOTAL;

    if (current === TOTAL) {
      status.textContent = "Closed";
      status.classList.add("is-closed");
    } else {
      status.textContent = "Open";
      status.classList.remove("is-closed");
    }

    prevBtn.disabled = current === 1;

    // On narrow screens the step list scrolls sideways; keep the current step visible.
    var steps = document.getElementById("steps");
    if (steps.scrollWidth > steps.clientWidth + 2) {
      var cur = stepButtons[current - 1];
      steps.scrollTo({ left: cur.offsetLeft - 12, behavior: reduceMotion ? "auto" : "smooth" });
    }
    nextBtn.textContent = current === TOTAL ? "Start over" : "Next";

    if (fromUser) {
      var fresh = blocks[current - 1];
      if (!reduceMotion) fresh.classList.add("is-new");
      // Keep the newly revealed part of the file in view.
      var panelScrolls = panel.scrollHeight > panel.clientHeight + 2;
      if (panelScrolls) {
        panel.scrollTo({ top: fresh.offsetTop - panel.offsetTop - 8, behavior: reduceMotion ? "auto" : "smooth" });
      } else {
        var r = fresh.getBoundingClientRect();
        var footH = casefile.querySelector(".casefile-foot").offsetHeight;
        if (r.top < 0 || r.bottom > window.innerHeight - footH) {
          fresh.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
        }
      }
    }
  }

  prevBtn.addEventListener("click", function () { render(current - 1, true); });
  nextBtn.addEventListener("click", function () {
    render(current === TOTAL ? 1 : current + 1, true);
    if (current === 1) panel.scrollTo({ top: 0 });
  });
  stepButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      render(Number(btn.getAttribute("data-go")), true);
    });
  });

  casefile.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowRight") { e.preventDefault(); render(current + 1, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); render(current - 1, true); }
  });

  render(1, false);

  // Copy the sandbox address for people whose mail client does not open from a link.
  var copyBtn = document.getElementById("copy-btn");
  var copyDone = document.getElementById("copy-done");
  var addr = "sandbox@casefold.example";
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      function done(ok) {
        copyDone.textContent = ok ? "Copied." : "Select the address above and copy it.";
        setTimeout(function () { copyDone.textContent = ""; }, 3000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(function () { done(true); }, function () { done(false); });
      } else {
        try {
          var ta = document.createElement("textarea");
          ta.value = addr;
          ta.setAttribute("readonly", "");
          ta.style.position = "absolute";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          var ok = document.execCommand("copy");
          document.body.removeChild(ta);
          done(ok);
        } catch (err) {
          done(false);
        }
      }
    });
  }
})();
