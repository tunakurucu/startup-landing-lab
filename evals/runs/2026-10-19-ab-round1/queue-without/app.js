(function () {
  'use strict';

  /* ---------- Copy to clipboard (works from file:// too) ---------- */
  var toastEl = document.querySelector('[data-toast]');
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1600);
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
  function copy(text) {
    var done = function () { toast('Copied to clipboard'); };
    var fail = function () { toast(fallbackCopy(text) ? 'Copied to clipboard' : 'Press Ctrl/Cmd+C to copy'); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fail);
    } else {
      fail();
    }
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy], [data-copy-from]');
    if (!btn) return;
    var text = btn.getAttribute('data-copy');
    if (!text) {
      var src = document.getElementById(btn.getAttribute('data-copy-from'));
      text = src ? src.textContent : '';
    }
    if (text) copy(text);
  });

  /* ---------- Minimal JS highlighting (progressive; raw text is readable) ---------- */
  var KW = /\b(import|from|const|let|new|async|await|if|throw|return|for|of)\b/g;
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function highlight(src) {
    var re = /(\/\/[^\n]*)|('(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)/g;
    var out = '', last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index)).replace(KW, '<span class="tok-kw">$1</span>');
      out += m[1] ? '<span class="tok-com">' + esc(m[1]) + '</span>' : '<span class="tok-str">' + esc(m[2]) + '</span>';
      last = re.lastIndex;
    }
    out += esc(src.slice(last)).replace(KW, '<span class="tok-kw">$1</span>');
    return out;
  }
  Array.prototype.forEach.call(document.querySelectorAll('code[data-lang="js"]'), function (el) {
    el.innerHTML = highlight(el.textContent);
  });

  /* ---------- Lifecycle simulator ---------- */
  var root = document.querySelector('[data-sim]');
  if (!root) return;

  var MAX = 3, BASE = 200;
  var ERRORS = ['Error: ECONNRESET', 'Error: 503 from upstream', 'Error: ETIMEDOUT'];
  var out = {};
  Array.prototype.forEach.call(root.querySelectorAll('[data-out]'), function (el) { out[el.getAttribute('data-out')] = el; });
  var actionsEl = root.querySelector('[data-actions]');
  var logEl = root.querySelector('[data-log]');
  var nodes = {};
  Array.prototype.forEach.call(root.querySelectorAll('[data-node]'), function (el) { nodes[el.getAttribute('data-node')] = el; });
  var edges = {};
  Array.prototype.forEach.call(root.querySelectorAll('[data-edge]'), function (el) { edges[el.getAttribute('data-edge')] = el; });

  var job;

  function reset() {
    job = { state: 'queued', attempt: 0, clock: 0, delay: 0, error: null, visited: { queued: true }, edge: null };
    logEl.innerHTML = '';
    log('queued', 'enqueued · id j_7f3a');
    render();
  }

  function fmt(ms) { return (ms / 1000).toFixed(3); }

  function log(state, msg) {
    var li = document.createElement('li');
    li.className = 'is-new';
    li.innerHTML = '<span class="t">' + fmt(job.clock) + '</span><span class="s s--' + state + '">' + state + '</span><span class="m"></span>';
    li.querySelector('.m').textContent = msg;
    logEl.appendChild(li);
    logEl.scrollTop = logEl.scrollHeight;
    setTimeout(function () { li.classList.remove('is-new'); }, 700);
  }

  function go(state, edge) {
    job.state = state;
    job.visited[state] = true;
    job.edge = edge;
  }

  var ACTIONS = {
    claim: function () {
      job.clock += 12;
      job.attempt += 1;
      go('active', 'claim');
      log('active', 'attempt ' + job.attempt + ' of ' + MAX);
    },
    succeed: function () {
      job.clock += 34;
      go('completed', 'return');
      log('completed', 'handler returned · result stored');
    },
    throws: function () {
      job.clock += 28;
      job.error = ERRORS[(job.attempt - 1) % ERRORS.length];
      if (job.attempt < MAX) {
        job.delay = BASE * Math.pow(2, job.attempt - 1);
        go('retrying', 'retry');
        log('retrying', job.error + ' · next in ' + job.delay + 'ms');
      } else {
        go('failed', 'fail');
        log('failed', job.error + ' · no attempts left');
      }
    },
    due: function () {
      job.clock += job.delay;
      go('queued', 'due');
      log('queued', 'backoff elapsed · waiting for a worker');
    },
    reset: reset
  };

  function button(label, action, kind) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'act' + (kind ? ' act--' + kind : '');
    b.textContent = label;
    b.setAttribute('data-act', action);
    return b;
  }

  function render() {
    var s = job.state;
    Object.keys(nodes).forEach(function (k) {
      nodes[k].classList.toggle('is-current', k === s);
      nodes[k].classList.toggle('is-visited', !!job.visited[k] && k !== s);
    });
    Object.keys(edges).forEach(function (k) { edges[k].classList.toggle('is-hot', k === job.edge); });

    out.state.textContent = s;
    out.state.className = 'tag tag--' + s;
    out.attempt.textContent = job.attempt + ' of ' + MAX;
    out.error.textContent = job.error || 'none';
    out.clock.textContent = 't = ' + job.clock + 'ms';
    out.next.textContent =
      s === 'queued' ? 'when a worker is free' :
      s === 'active' ? 'running now' :
      s === 'retrying' ? 'in ' + job.delay + 'ms (t = ' + (job.clock + job.delay) + 'ms)' :
      'never (terminal)';

    var hadFocus = actionsEl.contains(document.activeElement);
    actionsEl.innerHTML = '';
    if (s === 'queued') actionsEl.appendChild(button('Worker claims it', 'claim', 'go'));
    if (s === 'active') {
      actionsEl.appendChild(button('Handler returns', 'succeed', 'go'));
      actionsEl.appendChild(button('Handler throws', 'throws', 'bad'));
    }
    if (s === 'retrying') actionsEl.appendChild(button('Wait ' + job.delay + 'ms', 'due', 'go'));
    if (s === 'completed' || s === 'failed') actionsEl.appendChild(button('Enqueue a new job', 'reset', 'go'));
    if (s !== 'completed' && s !== 'failed' && (job.attempt > 0 || s !== 'queued')) {
      actionsEl.appendChild(button('Reset', 'reset', 'ghost'));
    }
    if (hadFocus && actionsEl.firstChild) actionsEl.firstChild.focus();
  }

  actionsEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    ACTIONS[b.getAttribute('data-act')]();
    render();
  });

  reset();
})();
