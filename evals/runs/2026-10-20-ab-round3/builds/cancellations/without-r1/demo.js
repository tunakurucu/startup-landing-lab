/* Chairtime — page behaviour
   1. BOOKING_URL: paste the scheduling link here once a tool is chosen.
      Every "Book a setup call" button points at it. While it's empty the
      buttons open a short "not connected yet" notice instead.
   2. The demo board: a scripted example of one cancelled slot being filled. */

(function () {
  'use strict';

  /* ───────────── 1. Booking link ───────────── */
  var BOOKING_URL = ''; // e.g. 'https://cal.com/chairtime/setup'

  var modal = document.getElementById('bookModal');
  var bookLinks = document.querySelectorAll('.js-book');
  for (var i = 0; i < bookLinks.length; i++) {
    (function (a) {
      if (BOOKING_URL) {
        a.setAttribute('href', BOOKING_URL);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
        return;
      }
      a.addEventListener('click', function (e) {
        if (!modal || typeof modal.showModal !== 'function') return; // let the anchor fall through to #call
        e.preventDefault();
        modal.showModal();
      });
    })(bookLinks[i]);
  }

  // Links inside the notice jump to a section, so close the notice first.
  if (modal) {
    var modalLinks = modal.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < modalLinks.length; j++) {
      modalLinks[j].addEventListener('click', function () { modal.close(); });
    }
  }

  /* ───────────── 2. Demo board ───────────── */
  var board = document.getElementById('board');
  if (!board) return;

  var clock = document.getElementById('clock');
  var caption = document.getElementById('caption');
  var slot = document.getElementById('slot230');
  var slotWho = document.getElementById('slot230who');
  var slotStatus = document.getElementById('slot230status');
  var thread = document.getElementById('thread');
  var emptyNote = thread.querySelector('[data-empty]');
  var msgs = thread.querySelectorAll('.msg');
  var waitRows = board.querySelectorAll('.wait__row');
  var playBtn = document.getElementById('play');
  var replayBtn = document.getElementById('replay');
  var dots = document.querySelectorAll('#steps button');

  // Each step is the full state of the board, so any step can be shown directly.
  var STEPS = [
    { clock: '11:02 am',
      caption: 'Tuesday morning. Three patients booked, three on the waitlist.',
      slot: ['booked', 'Priya M.', 'Booked'],
      wait: { dana: ['waiting', 'Waiting'], luis: ['waiting', 'Waiting'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:04 am',
      caption: 'Priya cancels. The front desk marks the 2:30 open.',
      slot: ['cancelled', 'Priya M.', 'Cancelled 11:04'],
      wait: { dana: ['waiting', 'Waiting'], luis: ['waiting', 'Waiting'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:04 am',
      caption: 'Chairtime texts Dana, first in line. She has ten minutes to reply.',
      slot: ['offering', 'Offered to Dana', 'Reply by 11:14'],
      wait: { dana: ['texted', 'Texted 11:04'], luis: ['waiting', 'Waiting'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:09 am',
      caption: 'Dana passes. She keeps her place for next time.',
      slot: ['offering', 'Offered to Dana', 'Passed'],
      wait: { dana: ['passed', 'Passed'], luis: ['waiting', 'Waiting'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:09 am',
      caption: 'Straight on to Luis, second in line.',
      slot: ['offering', 'Offered to Luis', 'Reply by 11:19'],
      wait: { dana: ['passed', 'Passed'], luis: ['texted', 'Texted 11:09'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:12 am',
      caption: 'Luis says yes.',
      slot: ['offering', 'Offered to Luis', 'Said yes'],
      wait: { dana: ['passed', 'Passed'], luis: ['took', 'Took it'], hannah: ['waiting', 'Waiting'] } },
    { clock: '11:12 am',
      caption: 'Confirmed. The 2:30 is filled, and Hannah was never bothered.',
      slot: ['filled', 'Luis O.', 'Filled 11:12'],
      wait: { dana: ['passed', 'Passed'], luis: ['took', 'Took it'], hannah: ['untouched', 'Not texted'] } }
  ];

  var LAST = STEPS.length - 1;
  var STEP_MS = 2400;
  var current = -1;
  var timer = null;
  var playing = false;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(n, animate) {
    var s = STEPS[n];
    var wasShown = current;
    current = n;

    clock.textContent = s.clock;
    caption.textContent = s.caption;

    slot.setAttribute('data-state', s.slot[0]);
    slotWho.textContent = s.slot[1];
    slotStatus.textContent = s.slot[2];

    for (var w = 0; w < waitRows.length; w++) {
      var row = waitRows[w];
      var st = s.wait[row.getAttribute('data-who')];
      row.setAttribute('data-state', st[0]);
      row.querySelector('[data-label]').textContent = st[1];
    }

    var visible = 0;
    for (var m = 0; m < msgs.length; m++) {
      var step = parseInt(msgs[m].getAttribute('data-step'), 10);
      var show = step <= n;
      msgs[m].hidden = !show;
      msgs[m].classList.remove('is-new');
      if (show) {
        visible++;
        if (animate && !reduceMotion && step === n && step > wasShown) {
          msgs[m].classList.add('is-new');
        }
      }
    }
    emptyNote.hidden = visible > 0;
    // Keep the newest text in view, like a phone would.
    thread.scrollTop = thread.scrollHeight;

    for (var d = 0; d < dots.length; d++) {
      if (d === n) dots[d].setAttribute('aria-current', 'step');
      else dots[d].removeAttribute('aria-current');
      dots[d].classList.toggle('is-done', d < n);
    }

    replayBtn.hidden = n !== LAST;
    playBtn.hidden = n === LAST;
  }

  function stop() {
    playing = false;
    if (timer) { clearTimeout(timer); timer = null; }
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.setAttribute('aria-label', 'Play');
  }

  function tick() {
    if (!playing) return;
    if (current >= LAST) { stop(); return; }
    render(current + 1, true);
    if (current >= LAST) { stop(); return; }
    timer = setTimeout(tick, STEP_MS);
  }

  function play() {
    if (current >= LAST) render(0, false);
    playing = true;
    playBtn.setAttribute('aria-pressed', 'true');
    playBtn.setAttribute('aria-label', 'Pause');
    timer = setTimeout(tick, STEP_MS);
  }

  playBtn.addEventListener('click', function () {
    if (playing) stop(); else play();
  });
  replayBtn.addEventListener('click', function () {
    stop();
    render(0, false);
    play();
  });
  for (var k = 0; k < dots.length; k++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        stop();
        render(parseInt(btn.getAttribute('data-go'), 10), true);
      });
    })(dots[k]);
  }

  // Start: with reduced motion, leave the finished example on screen and let
  // people step through it. Otherwise rewind and play once when the board is in view.
  if (reduceMotion) {
    render(LAST, false);
    return;
  }

  render(0, false);

  var started = false;
  function startOnce() {
    if (started) return;
    started = true;
    play();
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) { startOnce(); io.disconnect(); }
      }
    }, { threshold: 0.25 });
    io.observe(board);
  } else {
    setTimeout(startOnce, 600);
  }
})();
