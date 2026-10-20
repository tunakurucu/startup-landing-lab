import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, copyFileSync, writeFileSync, readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const script = 'skills/startup-landing-design/scripts/verify-record.mjs';
const run = dir => spawnSync(process.execPath, [script, dir], {encoding: 'utf8'});
const template = readFileSync('skills/startup-landing-design/assets/decision-record.md', 'utf8');

const DEFAULT_SCORES = {Fit: 7, Identity: 6, Originality: 5, Composition: 6, Proof: 7};
const LOW_SCORES = {Fit: 5, Identity: 5, Originality: 4, Composition: 5, Proof: 4};
const LINE = 'A payroll app for restaurants with tipped staff';
const FACTS = {first_screen_text: {1440: `Tipline | ${LINE} | Start a payroll run`, 390: `Tipline | ${LINE}`}};
function filled(dir, {status = 'DONE', checkerFailures = [], checker = null, verdict = 'pass', score = null, scores = {}, verdicts = {}, stress = {}, facts = FACTS, line = LINE} = {}) {
  const s = {...DEFAULT_SCORES, ...scores}; if (score !== null) s.Fit = score;
  for (const n of ['1440', '768', '390']) copyFileSync(`docs/screenshots/demo-relayline-${n === '768' ? '390' : n}.png`, join(dir, `shot-${n}.png`));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'before.png'));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'after.png'));
  writeFileSync(join(dir, 'check.json'), JSON.stringify(checker || {status: 'ran', failures: checkerFailures, warnings: [], facts}));
  let t = template.replace(/^(\s*-\s+[^:\n]{3,80}:)\s*$/gm, '$1 decided');
  t = t.replace(/\| (Product explanation|Brand composition|Counterexample) \| \| \| \|/g, '| $1 | a | b | c |');
  t = t.replace(/^(\s*-\s+Five-second line[^:\n]*:) decided$/m, `$1 "${line}"`);
  t = t.replace(/^\| (Empty|Out of range|Nonsense|Repeat|Reset|Keyboard only|Phone|Reduced motion|Visitor's own input) \| \| \| \|$/gm, (_, p) => `| ${p} | tried it at 1440 and 390 | responded with a clear message | ${stress[p] || 'pass'} |`);
  t = t.replace(/^(\s*-\s+Users' own words[^:\n]*:) decided$/m, '$1 "my close takes three days" (r/bookkeeping), "the payout never matches" (G2 review), "fees hide in the deposit" (support forum)');
  t = t.replace(/\| (A|B) \| \| \| \| \| \| \| \| \|/g, `| $1 | a | b | ${s.Fit} | ${s.Identity} | ${s.Originality} | ${s.Composition} | ${s.Proof} | real data |`);
  t = t.replace(/\| \| \| \|/g, '| none found | — | — |');
  t = t.replace(/\| (1440|768|390)×(\d+) \| \| \|/g, '| $1×$2 | shot-$1.png | hero and footer |').replace('| 768×1024 | shot-768.png |', '| 390×844 (768 stand-in) | shot-768.png |');
  t = t.replace('- JSON: decided', '- JSON: check.json').replace('- Before: decided', '- Before: before.png').replace('- After: decided', '- After: after.png');
  t = t.replace(/^\| ([A-Z]{2}-\d{2}) \| ([^|]+) \| \| \|$/gm, (_, id, txt) => `| ${id} | ${txt} | ${verdicts[id] || verdict} | seen in shot-1440.png |`);
  t = t.replace(/<!-- Exactly[\s\S]*?-->/, status);
  writeFileSync(join(dir, 'DESIGN-RECORD.md'), t);
}

test('an unfilled template fails with reasons', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  writeFileSync(join(dir, 'DESIGN-RECORD.md'), template);
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /is empty/);
  assert.match(r.stdout, /Status must start/);
});
test('a missing record fails', () => {
  assert.equal(run(mkdtempSync(join(tmpdir(), 'rec-'))).status, 1);
});
test('a complete record with clean checker output passes as DONE', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  const r = run(dir);
  assert.equal(r.status, 0, r.stdout);
  assert.match(r.stdout, /OK DONE/);
});
test('DONE is refused when the checker still reports failures', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {checkerFailures: ['touch_targets']});
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /DONE_WITH_CONCERNS/);
});
test('DONE_WITH_CONCERNS is accepted when the checker has failures', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {status: 'DONE_WITH_CONCERNS: touch targets on mobile nav', checkerFailures: ['MB-03'], scores: LOW_SCORES});
  const r = run(dir);
  assert.equal(r.status, 0, r.stdout);
});

test('an unanswered checklist item blocks completion', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  const p = join(dir, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^\| PS-01 \| ([^|]+) \| pass \| [^|]+ \|$/m, '| PS-01 | $1 | | |'));
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /Checklist: 1 of 32/);
});
test('a failed block-severity checklist item rules out DONE', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  const p = join(dir, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^\| PS-03 \| ([^|]+) \| pass \|/m, '| PS-03 | $1 | fail |'));
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /PS-03/);
});

test('a screenshot whose width does not match its row is refused', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  copyFileSync('docs/screenshots/demo-relayline-390.png', join(dir, 'shot-1440.png'));
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /390px wide but the row claims 1440/);
});
test('unverified checklist items rule out DONE but allow DONE_WITH_CONCERNS', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {verdict: 'unverified'});
  assert.match(run(a).stdout, /unverified/);
  const b = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(b, {verdict: 'unverified', status: 'DONE_WITH_CONCERNS: visual checks unverified'});
  assert.equal(run(b).status, 0);
});
test('a checker that could not launch a browser rules out DONE', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {checker: {status: 'unavailable', error: 'Executable does not exist', failures: [], warnings: [], not_run: ['TY-01']}});
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /checker did not run/);
});
test('hero scores must be numbers from 0 to 10', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {score: 'good'});
  assert.match(run(dir).stdout, /five scores/);
});

test('the template carries the positioning fields and they are required', () => {
  for (const f of ['Current alternative, including doing nothing:', 'The one advantage only this product has:', 'Category frame (existing, subcategory or new) and what it costs to teach:',
    'Best-fit customer, and who it is not for:', "Users' own words (three phrases with source, or 'none yet'):", 'Biggest reason not to click, and the line that answers it:', 'Category default and anti-default this plan avoids:'])
    assert.ok(template.includes(`- ${f}\n`), f);
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  const p = join(dir, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^- Current alternative[^\n]*\n/m, ''));
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /missing the line "- Current alternative/);
});
test("users' own words need three quoted phrases or 'none yet'", () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a);
  const p = join(a, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^(- Users' own words[^:]*:).*$/m, '$1 bookkeepers hate spreadsheets'));
  assert.match(run(a).stdout, /three quoted phrases/);
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^(- Users' own words[^:]*:).*$/m, '$1 none yet; no reviews of the alternative were found'));
  assert.equal(run(a).status, 0);
});
test('block failures in check.json cap every hero score at 6', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {status: 'DONE_WITH_CONCERNS: MB-03 targets', checkerFailures: ['MB-03']});
  const r = run(a);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /Fit is 7, but check\.json has block failures \(MB-03\), so no Fit score may exceed 6/);
  assert.match(r.stdout, /Proof is 7/);
  const b = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(b, {status: 'DONE_WITH_CONCERNS: MB-03 targets', checkerFailures: ['MB-03'], scores: {Fit: 6, Identity: 6, Originality: 5, Composition: 6, Proof: 6}});
  assert.equal(run(b).status, 0, run(b).stdout);
  const c = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(c);   // no block failures: 7 is allowed
  assert.equal(run(c).status, 0);
});
test('the rescore after the structural revision is capped too', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {status: 'DONE_WITH_CONCERNS: MB-03 targets', checkerFailures: ['MB-03'], scores: LOW_SCORES});
  const p = join(a, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^(- Score after the change[^:]*:).*$/m, '$1 8/10; the artifact still needs a failure state'));
  assert.match(run(a).stdout, /score after the change is 8\/10/);
});
test('a failed TT-05 caps Originality at 4', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {status: 'DONE_WITH_CONCERNS: TT-05', verdicts: {'TT-05': 'fail'}});
  assert.match(run(a).stdout, /Originality is 5, but TT-05 failed.*may exceed 4/);
  const b = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(b, {status: 'DONE_WITH_CONCERNS: TT-05', verdicts: {'TT-05': 'fail'}, scores: {Originality: 4}});
  assert.equal(run(b).status, 0, run(b).stdout);
});
test('a failed PS-03 caps Proof at 4', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {status: 'DONE_WITH_CONCERNS: PS-03', verdicts: {'PS-03': 'fail'}});
  assert.match(run(a).stdout, /Proof is 7, but PS-03 failed.*may exceed 4/);
  const b = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(b, {status: 'DONE_WITH_CONCERNS: PS-03', verdicts: {'PS-03': 'fail'}, scores: {Proof: 4}});
  assert.equal(run(b).status, 0, run(b).stdout);
});
test('a failed PS-02 caps Fit at 5', () => {
  const a = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(a, {status: 'DONE_WITH_CONCERNS: PS-02', verdicts: {'PS-02': 'fail'}});
  assert.match(run(a).stdout, /Fit is 7, but PS-02 failed.*may exceed 5/);
  const b = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(b, {status: 'DONE_WITH_CONCERNS: PS-02', verdicts: {'PS-02': 'fail'}, scores: {Fit: 5}});
  assert.equal(run(b).status, 0, run(b).stdout);
});

test('the five-second line must be in the first screen at every width the checker read', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {facts: {first_screen_text: {1440: `Tipline | ${LINE}`, 390: 'Tipline | Pay your team'}}});
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /five-second line is not in the first screen at 390px/);
});
test('a failed stress probe rules out DONE but allows DONE_WITH_CONCERNS', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir, {stress: {'Out of range': 'fail'}});
  assert.match(run(dir).stdout, /artifact stress test failed \(Out of range\)/);
  const dir2 = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir2, {stress: {'Out of range': 'fail'}, status: 'DONE_WITH_CONCERNS: months field accepts 5000'});
  assert.equal(run(dir2).status, 0, run(dir2).stdout);
});
