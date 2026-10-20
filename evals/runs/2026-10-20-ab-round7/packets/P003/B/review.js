/* Sample review file for member 20417. Everything here is invented for the page.
   One data source renders the readout, the spreadsheet row, the member details and the trail. */
(function (root) {
  var STAGES = [
    { title: 'Listed as due on Wed 7 Oct 2026',
      text: 'Medium-risk member, last reviewed Mon 7 Oct 2024. Your policy reviews this tier every 24 months, so the member is on today’s list.',
      sheet: ['10/7/24', 'due?', 'found by filtering the sheet by date'], edited: [1, 2] },
    { title: '3 details current, 2 missing',
      text: 'Refresh pulled what the credit union already holds. The photo ID expired in March, and the occupation was last confirmed in 2019.',
      sheet: ['10/7/24', 'pulling docs', 'ID in imaging? job from core'], edited: [1, 2] },
    { title: 'Request sent for the 2 missing details',
      text: 'A. Reyes in member services sent the member one request: a current photo ID and their occupation. Nothing on file is asked for again.',
      sheet: ['10/7/24', 'letter sent', 'mailed 10/8 with full document list'], edited: [1, 2] },
    { title: 'Both details received and checked',
      text: 'The member answered on Mon 12 Oct. A. Reyes checked the new licence against the member record the next morning.',
      sheet: ['10/7/24', 'waiting', 'called 10/13, left voicemail'], edited: [1, 2] },
    { title: 'Decision recorded by the BSA officer',
      text: 'J. Okafor kept the member at medium risk. Refresh prepared the file and recorded the decision; it did not make it.',
      sheet: ['10/7/24', 'OK – JO', 'binder to be built before exam'], edited: [1, 2] }
  ];

  // state per stage index: [label, class, note]
  var NONE = ['Not gathered yet', 'st-none', ''];
  var ITEMS = [
    { what: 'Name and date of birth', s: [NONE, ['On file', 'st-ok', 'Verified at account opening, 2019']] },
    { what: 'Home address', s: [NONE, ['On file', 'st-ok', 'Matches the core record, updated Jun 2025']] },
    { what: 'Expected account activity', s: [NONE, ['On file', 'st-ok', 'Confirmed at the last review, Oct 2024']] },
    { what: 'Photo ID', s: [NONE, ['Missing', 'st-ask', 'Licence on file expired 16 Mar 2026'], ['Requested', 'st-sent', 'Asked Thu 8 Oct 2026'], ['Checked', 'st-ok', 'New licence received 12 Oct, checked 13 Oct']] },
    { what: 'Occupation', s: [NONE, ['Missing', 'st-ask', 'Last confirmed 2019'], ['Requested', 'st-sent', 'Asked Thu 8 Oct 2026'], ['Checked', 'st-ok', 'Confirmed by the member 12 Oct']] }
  ];
  var DECISION = { what: 'Risk rating', s: ['Medium, unchanged', 'st-dec', 'Decided by J. Okafor, BSA officer, Wed 14 Oct 2026'] };

  var TRAIL = [
    { at: 0, who: 'sys', time: 'Wed 7 Oct 2026, 06:00', did: 'Listed as due under the rule: medium risk, every 24 months. Last review Mon 7 Oct 2024.' },
    { at: 1, who: 'sys', time: 'Wed 7 Oct 2026, 06:02', did: 'Gathered 3 current details. Flagged 2 as missing: expired photo ID, occupation from 2019.' },
    { at: 2, who: 'staff', name: 'A. Reyes', time: 'Thu 8 Oct 2026, 09:14', did: 'Sent the member a request for the 2 missing details.' },
    { at: 3, who: 'member', time: 'Mon 12 Oct 2026, 19:41', did: 'Uploaded a driver’s licence and confirmed their occupation.' },
    { at: 3, who: 'staff', name: 'A. Reyes', time: 'Tue 13 Oct 2026, 10:05', did: 'Checked the licence against the record. Marked both details received.' },
    { at: 4, who: 'officer', name: 'J. Okafor', time: 'Wed 14 Oct 2026, 15:30', did: 'Kept the rating at medium. Note: account activity unchanged.' },
    { at: 4, who: 'sys', time: 'Wed 14 Oct 2026, 15:31', did: 'Closed the review. Next one due Oct 2028 under the same rule.' }
  ];
  var WHO = { sys: ['Refresh', 'who-sys'], staff: ['Staff', 'who-staff'], member: ['Member', 'who-member'], officer: ['Officer', 'who-officer'] };

  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function readout(i) {
    var s = STAGES[i];
    return '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>';
  }
  function sheet(i) {
    var s = STAGES[i], cells = s.sheet.map(function (c, k) {
      return '<td' + (s.edited.indexOf(k) > -1 ? ' class="edited"' : '') + '>' + esc(c) + '</td>';
    }).join('');
    return '<p class="sheet-cap">The same member in a review-date spreadsheet:</p><table><colgroup><col class="c-row"><col class="c-last"><col class="c-status"><col class="c-notes"></colgroup>' +
      '<thead><tr><th class="rown" scope="col"><span class="sr-only">Row</span></th><th scope="col">B · Last review</th><th scope="col">C · Status</th><th scope="col">D · Notes</th></tr></thead>' +
      '<tbody><tr><th class="rown" scope="row">2814</th>' + cells + '</tr></tbody></table>';
  }
  function body(i, prev) {
    var items = ITEMS.map(function (it) {
      var st = it.s[Math.min(i, it.s.length - 1)];
      return '<li><span class="what">' + esc(it.what) + '</span><span class="state ' + st[1] + '">' + esc(st[0]) + '</span>' +
        (st[2] ? '<span class="note">' + esc(st[2]) + '</span>' : '') + '</li>';
    });
    if (i >= 4) items.push('<li><span class="what">' + DECISION.what + '</span><span class="state ' + DECISION.s[1] + '">' + esc(DECISION.s[0]) + '</span><span class="note">' + esc(DECISION.s[2]) + '</span></li>');
    var trail = TRAIL.filter(function (e) { return e.at <= i; }).map(function (e) {
      var w = WHO[e.who], fresh = typeof prev === 'number' && e.at > prev;
      return '<li' + (fresh ? ' class="new"' : '') + '><span class="who ' + w[1] + '">' + w[0] + '</span><time>' + esc(e.time) + (e.name ? ' · ' + esc(e.name) : '') + '</time><span class="did">' + esc(e.did) + '</span></li>';
    });
    return '<div class="pane"><h4>Member details</h4><ul class="items">' + items.join('') + '</ul></div>' +
      '<div class="pane"><h4>Audit trail, ' + trail.length + (trail.length === 1 ? ' entry' : ' entries') + '</h4><ol class="trail">' + trail.join('') + '</ol></div>';
  }

  var api = { STAGES: STAGES, readout: readout, sheet: sheet, body: body };
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; return; }

  var file = document.getElementById('review');
  if (!file) return;
  var radios = [].slice.call(file.querySelectorAll('input[name="stage"]'));
  var out = document.getElementById('readout'), sh = document.getElementById('sheet'), fb = document.getElementById('file-body');
  var next = document.getElementById('next'), reset = document.getElementById('reset');
  var cur = 0;

  function show(i, prev) {
    cur = i;
    out.innerHTML = readout(i);
    sh.innerHTML = sheet(i);
    fb.innerHTML = body(i, prev);
    radios.forEach(function (r, k) {
      r.checked = k === i;
      r.parentNode.classList.toggle('done', k < i);
    });
    var last = i === STAGES.length - 1;
    if (last && document.activeElement === next) reset.focus();
    next.disabled = last;
    next.textContent = last ? 'Review closed' : 'Next stage';
  }
  radios.forEach(function (r, k) {
    r.addEventListener('change', function () { if (r.checked) show(k, cur); });
  });
  next.addEventListener('click', function () { if (cur < STAGES.length - 1) show(cur + 1, cur); });
  reset.addEventListener('click', function () { show(0); });
  show(0);
})(this);
