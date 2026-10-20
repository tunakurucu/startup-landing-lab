(function () {
  var panel = document.getElementById('demo-panel');
  if (!panel) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stepButtons = Array.prototype.slice.call(panel.querySelectorAll('.step'));
  var reveals = Array.prototype.slice.call(panel.querySelectorAll('.reveal'));
  var status = panel.querySelector('[data-status]');
  var replay = document.getElementById('replay');
  var stepNow = document.getElementById('step-now');
  var approveBtn = document.getElementById('approve-btn');

  var UNIT = 650;            // ms between staggered reveals inside one step
  var HOLD = [0, 2400, 3600, 3400, 3800, 0]; // how long each step stays before the next, when playing
  var TOTAL = 5;

  var current = 0;
  var timer = null;
  var statusTimer = null;
  var hasPlayed = false;

  var STATUS = {
    1: 'Reading the question. The library is not searched yet.',
    2: ['Searching 14 documents.', '2 passages found in 2 documents.'],
    3: 'Drafting from the 2 passages only.',
    4: ['Checking each sentence against its passage.', '3 sentences match their passages. 1 gap found.'],
    5: 'Nothing is exported until the reviewer approves.'
  };

  function clearTimers() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (statusTimer) { clearTimeout(statusTimer); statusTimer = null; }
  }

  function setStatus(step, animate) {
    var s = STATUS[step];
    if (!s) { status.textContent = ''; return; }
    if (typeof s === 'string') { status.textContent = s; return; }
    if (animate) {
      status.textContent = s[0];
      statusTimer = setTimeout(function () { status.textContent = s[1]; }, UNIT * 3);
    } else {
      status.textContent = s[1];
    }
  }

  function setStep(n, animate) {
    clearTimers();
    current = n;
    animate = animate && !reduce;

    for (var i = 1; i <= TOTAL; i++) {
      panel.classList.toggle('at-' + i, i <= n);
    }
    panel.classList.toggle('started', n > 0);
    panel.setAttribute('data-step', String(n));

    stepButtons.forEach(function (b) {
      var s = Number(b.getAttribute('data-step'));
      b.classList.toggle('done', s < n);
      b.classList.toggle('current', s === n);
      if (s === n) {
        b.setAttribute('aria-current', 'step');
        if (stepNow) stepNow.textContent = 'Step ' + s + ' of ' + TOTAL + ': ' + b.querySelector('.step-label').textContent;
      } else {
        b.removeAttribute('aria-current');
      }
    });

    reveals.forEach(function (el) {
      var from = Number(el.getAttribute('data-from'));
      var delay = Number(el.getAttribute('data-delay') || 0);
      var d = (animate && from === n) ? (delay * UNIT) + 'ms' : '0ms';
      el.style.transitionDelay = d;
      el.style.animationDelay = d;
      if (from <= n) {
        el.classList.add('on');
      } else {
        el.classList.remove('on');
      }
    });

    if (n === 5) {
      if (animate) {
        panel.classList.remove('is-approved');
        statusTimer = setTimeout(function () { panel.classList.add('is-approved'); }, UNIT * 2);
      } else {
        panel.classList.add('is-approved');
      }
    } else {
      panel.classList.remove('is-approved');
    }

    setStatus(n, animate);
  }

  function play(from) {
    clearTimers();
    hasPlayed = true;
    var n = from || 1;
    setStep(n, true);
    if (n >= TOTAL) return;
    timer = setTimeout(function () { play(n + 1); }, HOLD[n] + UNIT);
  }

  stepButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      hasPlayed = true;
      setStep(Number(b.getAttribute('data-step')), true);
    });
  });

  replay.addEventListener('click', function () {
    if (reduce) { setStep(1, false); return; }
    setStep(1, false);
    timer = setTimeout(function () { play(2); }, 900);
  });

  if (approveBtn) {
    approveBtn.addEventListener('click', function () {
      if (current === 5) panel.classList.add('is-approved');
    });
  }

  // Citation chips point at the passage beside the draft; nudge it instead of jumping the page.
  panel.querySelectorAll('.cite').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      if (current < 2) setStep(Math.max(current, 2), false);
      target.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
      target.querySelectorAll('mark').forEach(function (m) {
        m.classList.add('pulse');
        setTimeout(function () { m.classList.remove('pulse'); }, 900);
      });
    });
  });

  // Start once, when the panel comes into view.
  if (reduce) {
    setStep(5, false);
  } else {
    setStep(1, false);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !hasPlayed) {
            io.disconnect();
            timer = setTimeout(function () { play(2); }, 1200);
          }
        });
      }, { threshold: 0.35 });
      io.observe(panel);
    } else {
      play(2);
    }
  }
})();
