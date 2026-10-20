// Decide whether a landing-page task is finished. No dependencies; Node 18+.
// Usage: node scripts/verify-record.mjs <page-dir>
// Reads <page-dir>/DESIGN-RECORD.md (from assets/decision-record.md) and exits:
//   0  the record is complete and its status line is consistent with the evidence
//   1  something required is missing, empty or pending (each reason is printed)
// Exit 0 means the record is complete and its status is honest about the evidence. Only "OK DONE" also means
// the page was rendered and checked; DONE_WITH_CONCERNS and BLOCKED are honest outcomes that say what is not.
// Hero scores are capped by the evidence: any block failure in the checker JSON caps every score at 6; a failed
// TT-05 caps Originality at 4, a failed PS-03 caps Proof at 4, and a failed PS-02 caps Fit at 5.
import {readFileSync, existsSync, statSync} from 'node:fs';
import {join, resolve} from 'node:path';

const dir = process.argv[2];
if (!dir) { console.error('usage: verify-record.mjs <page-dir>'); process.exit(2); }
const recordPath = join(dir, 'DESIGN-RECORD.md');
const problems = [];
if (!existsSync(recordPath)) { console.log(`FAIL\n- ${recordPath} does not exist. Copy assets/decision-record.md there and fill it.`); process.exit(1); }
const text = readFileSync(recordPath, 'utf8');

const REQUIRED = ['Product interpretation', 'Interview log', 'References', 'Hypothesis', 'Two hero variants before code',
  'Gate before implementation', 'Render evidence', 'Checker result', 'Checklist', 'Gate after render', 'Structural revision', 'Remaining weaknesses', 'Status'];
const sections = {};
let current = null;
for (const line of text.split('\n')) {
  const h = line.match(/^##\s+(.+?)\s*$/);
  if (h) { current = h[1]; sections[current] = []; continue; }
  if (current) sections[current].push(line);
}
for (const name of REQUIRED) if (!(name in sections)) problems.push(`missing section "## ${name}"`);

// Placeholders anywhere in the record.
text.split('\n').forEach((line, i) => {
  if (/\b(pending|tbd|todo|fill (this|in)|placeholder)\b/i.test(line)) problems.push(`line ${i + 1} still says pending/TBD: "${line.trim().slice(0, 70)}"`);
  const field = line.match(/^\s*-\s+([^:]{3,80}):\s*$/);
  if (field) problems.push(`line ${i + 1}: "${field[1]}" is empty`);
});
// Empty table cells in sections that must be filled.
for (const name of ['References', 'Two hero variants before code', 'Gate before implementation', 'Render evidence', 'Gate after render']) {
  for (const row of sections[name] || []) {
    if (!/^\|/.test(row) || /^\|\s*-{3}/.test(row)) continue;
    const cells = row.split('|').slice(1, -1).map(c => c.trim());
    if (cells.some(c => c === '')) problems.push(`"${name}" has an empty table cell: ${row.trim().slice(0, 70)}`);
  }
}
const value = (section, key) => (sections[section] || []).map(l => l.match(new RegExp(`^\\s*-\\s+${key}:\\s*(.+)$`, 'i'))).find(Boolean)?.[1]?.trim();
// Positioning fields (v0.4): each must be present as a "- Label: answer" line. Empty answers are caught above.
const FIELDS = {
  'Product interpretation': ['Current alternative', 'The one advantage only this product has', 'Category frame', 'Best-fit customer', "Users' own words", 'Biggest reason not to click'],
  'Two hero variants before code': ['Category default and anti-default'],
};
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const fieldLine = (section, prefix) => (sections[section] || []).find(l => new RegExp(`^\\s*-\\s+${esc(prefix)}[^:]*:`, 'i').test(l));
for (const [section, prefixes] of Object.entries(FIELDS)) {
  if (!(section in sections)) continue;
  for (const prefix of prefixes) if (!fieldLine(section, prefix)) problems.push(`"${section}" is missing the line "- ${prefix}…:"`);
}
// Users' own words: three quoted phrases, each with a source, or an explicit "none yet".
const words = fieldLine('Product interpretation', "Users' own words")?.replace(/^[^:]*:/, '').trim();
if (words && !/\bnone yet\b/i.test(words) && (words.match(/"[^"]+"|“[^”]+”/g) || []).length < 3) problems.push(`"Users' own words" needs three quoted phrases with their sources, or "none yet"`);
const fileOk = (p, minBytes = 1) => { const f = resolve(dir, p); return existsSync(f) && statSync(f).size >= minBytes; };
// PNG width from the IHDR chunk, or null when the file is not a PNG.
const pngWidth = p => { try { const b = readFileSync(resolve(dir, p)); return b.subarray(1, 4).toString() === 'PNG' && b.subarray(12, 16).toString() === 'IHDR' ? b.readUInt32BE(16) : null; } catch { return null; } };

// Render evidence: each row is a real PNG over 8 KB (blank captures are tiny), or an explicit "unavailable:" with the quoted error.
let renderUnavailable = false;
for (const row of sections['Render evidence'] || []) {
  const cells = row.split('|').slice(1, -1).map(c => c.trim());
  if (cells.length < 2 || /^-{3}/.test(cells[0]) || /^viewport$/i.test(cells[0])) continue;
  const shot = cells[1].replace(/`/g, '');
  if (/^unavailable:/i.test(shot)) { renderUnavailable = true; continue; }
  if (!/\.png$/i.test(shot)) problems.push(`Render evidence for ${cells[0]} is not a .png path or "unavailable: <error>"`);
  else if (!fileOk(shot, 8000)) problems.push(`screenshot ${shot} is missing or under 8 KB (probably blank)`);
  else {
    const w = pngWidth(shot), claimed = Number((cells[0].match(/^(\d{3,4})/) || [])[1]);
    if (w === null) problems.push(`screenshot ${shot} is not a valid PNG`);
    else if (claimed && w !== claimed && w !== claimed * 2) problems.push(`screenshot ${shot} is ${w}px wide but the row claims ${claimed}`);
  }
}
// Checklist: every check that is not automatic needs a verdict and evidence.
const CATALOG = JSON.parse(readFileSync(new URL('../assets/checks.json', import.meta.url), 'utf8'));
const manual = CATALOG.filter(c => c.verify !== 'auto');
const answers = {};
for (const row of sections['Checklist'] || []) {
  const cells = row.split('|').slice(1, -1).map(c => c.trim());
  if (/^[A-Z]{2}-\d{2}$/.test(cells[0] || '')) answers[cells[0]] = {verdict: (cells[2] || '').toLowerCase(), evidence: cells[3] || ''};
}
const unanswered = manual.filter(c => !answers[c.id] || !/^(pass|fail|n\/a|unverified)$/.test(answers[c.id].verdict) || !answers[c.id].evidence);
if (unanswered.length) problems.push(`Checklist: ${unanswered.length} of ${manual.length} checks lack a pass/fail/n/a/unverified verdict with evidence (${unanswered.slice(0, 6).map(c => c.id).join(', ')}${unanswered.length > 6 ? ', …' : ''})`);
const blockFails = manual.filter(c => c.severity === 'block' && answers[c.id]?.verdict === 'fail').map(c => c.id);
const unverified = manual.filter(c => answers[c.id]?.verdict === 'unverified').map(c => c.id);

// Checker result: path to the saved check-page.mjs JSON, or unavailable.
const checker = value('Checker result', 'JSON');
let checkerClean = false, checkerUnavailable = null, checkerBlockFailures = [];
if (!checker) problems.push('Checker result needs "- JSON: <path to saved check-page.mjs output>" or "- JSON: unavailable: <error>"');
else if (!/^unavailable:/i.test(checker)) {
  const f = resolve(dir, checker.replace(/`/g, ''));
  if (!existsSync(f)) problems.push(`checker JSON ${checker} does not exist`);
  else { try { const j = JSON.parse(readFileSync(f, 'utf8')); checkerClean = j.status !== 'unavailable' && Array.isArray(j.failures) && j.failures.length === 0 && !(j.not_run || []).length; if (j.status === 'unavailable') checkerUnavailable = j.error || 'browser unavailable'; else if (Array.isArray(j.failures)) checkerBlockFailures = j.failures; } catch { problems.push(`checker JSON ${checker} is not valid JSON`); } }
}
// Structural revision: before and after evidence must exist (screenshots, or source excerpts when rendering failed).
for (const key of ['Before', 'After']) {
  const v = value('Structural revision', key);
  if (!v) problems.push(`Structural revision needs "- ${key}: <path>"`);
  else if (!fileOk(v.replace(/`/g, ''))) problems.push(`Structural revision ${key.toLowerCase()} file ${v} does not exist`);
}
// Status: exactly one allowed word, consistent with the evidence.
const statusLine = (sections['Status'] || []).map(l => l.trim()).find(l => l);
const status = statusLine?.match(/^(DONE_WITH_CONCERNS|DONE|BLOCKED)\b/)?.[1];
if (!status) problems.push('Status must start with DONE, DONE_WITH_CONCERNS or BLOCKED');
if (status === 'DONE' && renderUnavailable) problems.push('Status is DONE but rendering was unavailable: use DONE_WITH_CONCERNS');
if (status === 'DONE' && checkerUnavailable) problems.push(`Status is DONE but the checker did not run ("${checkerUnavailable}"): use DONE_WITH_CONCERNS`);
else if (status === 'DONE' && !checkerClean) problems.push('Status is DONE but the checker JSON is missing, has block failures, or has checks that did not run: fix them or use DONE_WITH_CONCERNS');
if (status === 'DONE' && blockFails.length) problems.push(`Status is DONE but block-severity checklist items failed (${blockFails.join(', ')}): fix them or use DONE_WITH_CONCERNS`);
if (status === 'DONE' && unverified.length) problems.push(`Status is DONE but checklist items are unverified (${unverified.join(', ')}): use DONE_WITH_CONCERNS and name them`);
// Hero scores: each of the five dimensions is a number from 0 to 10, read by column name.
const DIMS = ['Fit', 'Identity', 'Originality', 'Composition', 'Proof'];
const heroRows = (sections['Two hero variants before code'] || []).filter(l => /^\|/.test(l)).map(l => l.split('|').slice(1, -1).map(c => c.trim()));
const head = heroRows.find(c => c.some(x => /^fit$/i.test(x))) || ['Variant', 'Structure and artifact', 'Visitor doubt answered', ...DIMS, 'What a 10 needs'];
const col = Object.fromEntries(DIMS.map(n => [n, head.findIndex(x => x.toLowerCase() === n.toLowerCase())]));
const scoreOf = s => { const m = (s || '').match(/^(10|\d)(\/10)?$/); return m ? Number(m[1]) : null; };
const variants = [];
for (const cells of heroRows) {
  if (!/^[AB]$/.test(cells[0] || '')) continue;
  const scores = Object.fromEntries(DIMS.map(n => [n, scoreOf(cells[col[n]])]));
  if (cells.length >= 9 && DIMS.some(n => scores[n] === null)) problems.push(`hero variant ${cells[0]}: each of the five scores must be a number from 0 to 10`);
  variants.push({name: cells[0], scores});
}
// Score caps: a score may not claim more than the evidence allows.
const caps = [];
if (checkerBlockFailures.length) caps.push({dims: DIMS, max: 6, why: `check.json has block failures (${checkerBlockFailures.slice(0, 5).join(', ')})`});
if (answers['TT-05']?.verdict === 'fail') caps.push({dims: ['Originality'], max: 4, why: 'TT-05 failed (another company could use this page)'});
if (answers['PS-03']?.verdict === 'fail') caps.push({dims: ['Proof'], max: 4, why: 'PS-03 failed (the hero artifact is decoration)'});
if (answers['PS-02']?.verdict === 'fail') caps.push({dims: ['Fit'], max: 5, why: 'PS-02 failed (a stranger cannot say what it does)'});
for (const cap of caps) for (const v of variants) for (const n of cap.dims) {
  if (v.scores[n] !== null && v.scores[n] > cap.max) problems.push(`hero variant ${v.name}: ${n} is ${v.scores[n]}, but ${cap.why}, so no ${n} score may exceed ${cap.max}`);
}
const rescore = value('Structural revision', 'Score after the change[^:]*')?.match(/\b(10|\d)\s*\/\s*10\b/);
if (rescore && checkerBlockFailures.length && Number(rescore[1]) > 6) problems.push(`the score after the change is ${rescore[1]}/10, but check.json has block failures, so it may not exceed 6`);
if (status === 'BLOCKED' && !/["`].+["`]/.test(statusLine)) problems.push('BLOCKED must quote the exact error that blocked you');

if (problems.length) { console.log('FAIL\n' + problems.map(p => '- ' + p).join('\n')); process.exit(1); }
console.log(`OK ${status}` + (status === 'DONE' ? '' : ': the record is complete, but the page is not verified as done'));
