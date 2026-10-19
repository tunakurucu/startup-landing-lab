// Decide whether a landing-page task is finished. No dependencies; Node 18+.
// Usage: node scripts/verify-record.mjs <page-dir>
// Reads <page-dir>/DESIGN-RECORD.md (from assets/decision-record.md) and exits:
//   0  the record is complete and its status line is consistent with the evidence
//   1  something required is missing, empty or pending (each reason is printed)
// The task is not done until this exits 0. A record may honestly end in DONE_WITH_CONCERNS or BLOCKED;
// what it may not do is leave fields empty or claim DONE without evidence.
import {readFileSync, existsSync, statSync} from 'node:fs';
import {join, resolve} from 'node:path';

const dir = process.argv[2];
if (!dir) { console.error('usage: verify-record.mjs <page-dir>'); process.exit(2); }
const recordPath = join(dir, 'DESIGN-RECORD.md');
const problems = [];
if (!existsSync(recordPath)) { console.log(`FAIL\n- ${recordPath} does not exist. Copy assets/decision-record.md there and fill it.`); process.exit(1); }
const text = readFileSync(recordPath, 'utf8');

const REQUIRED = ['Product interpretation', 'Interview log', 'References', 'Hypothesis', 'Two hero variants before code',
  'Gate before implementation', 'Render evidence', 'Checker result', 'Gate after render', 'Structural revision', 'Remaining weaknesses', 'Status'];
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
const fileOk = (p, minBytes = 1) => { const f = resolve(dir, p); return existsSync(f) && statSync(f).size >= minBytes; };

// Render evidence: each row is a real PNG over 8 KB (blank captures are tiny), or an explicit "unavailable:" with the quoted error.
let renderUnavailable = false;
for (const row of sections['Render evidence'] || []) {
  const cells = row.split('|').slice(1, -1).map(c => c.trim());
  if (cells.length < 2 || /^-{3}/.test(cells[0]) || /^viewport$/i.test(cells[0])) continue;
  const shot = cells[1].replace(/`/g, '');
  if (/^unavailable:/i.test(shot)) { renderUnavailable = true; continue; }
  if (!/\.png$/i.test(shot)) problems.push(`Render evidence for ${cells[0]} is not a .png path or "unavailable: <error>"`);
  else if (!fileOk(shot, 8000)) problems.push(`screenshot ${shot} is missing or under 8 KB (probably blank)`);
}
// Checker result: path to the saved check-page.mjs JSON, or unavailable.
const checker = value('Checker result', 'JSON');
let checkerClean = false;
if (!checker) problems.push('Checker result needs "- JSON: <path to saved check-page.mjs output>" or "- JSON: unavailable: <error>"');
else if (!/^unavailable:/i.test(checker)) {
  const f = resolve(dir, checker.replace(/`/g, ''));
  if (!existsSync(f)) problems.push(`checker JSON ${checker} does not exist`);
  else { try { const j = JSON.parse(readFileSync(f, 'utf8')); checkerClean = Array.isArray(j.failures) && j.failures.length === 0; } catch { problems.push(`checker JSON ${checker} is not valid JSON`); } }
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
if (status === 'DONE' && !checkerClean) problems.push('Status is DONE but the checker JSON is missing or has failures: fix them or use DONE_WITH_CONCERNS');
if (status === 'BLOCKED' && !/["`].+["`]/.test(statusLine)) problems.push('BLOCKED must quote the exact error that blocked you');

if (problems.length) { console.log('FAIL\n' + problems.map(p => '- ' + p).join('\n')); process.exit(1); }
console.log(`OK ${status}`);
