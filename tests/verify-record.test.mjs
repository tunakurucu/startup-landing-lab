import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, copyFileSync, writeFileSync, readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const script = 'skills/startup-landing-design/scripts/verify-record.mjs';
const run = dir => spawnSync(process.execPath, [script, dir], {encoding: 'utf8'});
const template = readFileSync('skills/startup-landing-design/assets/decision-record.md', 'utf8');

function filled(dir, {status = 'DONE', checkerFailures = [], checker = null, verdict = 'pass', score = '7'} = {}) {
  for (const n of ['1440', '768', '390']) copyFileSync(`docs/screenshots/demo-relayline-${n === '768' ? '390' : n}.png`, join(dir, `shot-${n}.png`));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'before.png'));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'after.png'));
  writeFileSync(join(dir, 'check.json'), JSON.stringify(checker || {status: 'ran', failures: checkerFailures, warnings: []}));
  let t = template.replace(/^(\s*-\s+[^:\n]{3,80}:)\s*$/gm, '$1 decided');
  t = t.replace(/\| (Product explanation|Brand composition|Counterexample) \| \| \| \|/g, '| $1 | a | b | c |');
  t = t.replace(/\| (A|B) \| \| \| \| \| \| \| \| \|/g, `| $1 | a | b | ${score} | 6 | 5 | 6 | 7 | real data |`);
  t = t.replace(/\| \| \| \|/g, '| none found | — | — |');
  t = t.replace(/\| (1440|768|390)×(\d+) \| \| \|/g, '| $1×$2 | shot-$1.png | hero and footer |').replace('| 768×1024 | shot-768.png |', '| 390×844 (768 stand-in) | shot-768.png |');
  t = t.replace('- JSON: decided', '- JSON: check.json').replace('- Before: decided', '- Before: before.png').replace('- After: decided', '- After: after.png');
  t = t.replace(/^\| ([A-Z]{2}-\d{2}) \| ([^|]+) \| \| \|$/gm, `| $1 | $2 | ${verdict} | seen in shot-1440.png |`);
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
  filled(dir, {status: 'DONE_WITH_CONCERNS: touch targets on mobile nav', checkerFailures: ['touch_targets']});
  assert.equal(run(dir).status, 0);
});

test('an unanswered checklist item blocks completion', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rec-'));
  filled(dir);
  const p = join(dir, 'DESIGN-RECORD.md');
  writeFileSync(p, readFileSync(p, 'utf8').replace(/^\| PS-01 \| ([^|]+) \| pass \| [^|]+ \|$/m, '| PS-01 | $1 | | |'));
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stdout, /Checklist: 1 of 36/);
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
