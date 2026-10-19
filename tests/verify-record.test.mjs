import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, copyFileSync, writeFileSync, readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const script = 'skills/startup-landing-design/scripts/verify-record.mjs';
const run = dir => spawnSync(process.execPath, [script, dir], {encoding: 'utf8'});
const template = readFileSync('skills/startup-landing-design/assets/decision-record.md', 'utf8');

function filled(dir, {status = 'DONE', checkerFailures = []} = {}) {
  for (const n of ['1440', '768', '390']) copyFileSync('docs/screenshots/demo-relayline-390.png', join(dir, `shot-${n}.png`));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'before.png'));
  copyFileSync('docs/screenshots/demo-relayline-1440.png', join(dir, 'after.png'));
  writeFileSync(join(dir, 'check.json'), JSON.stringify({failures: checkerFailures, warnings: []}));
  let t = template.replace(/^(\s*-\s+[^:\n]{3,80}:)\s*$/gm, '$1 decided');
  t = t.replace(/\| (Product explanation|Brand composition|Counterexample) \| \| \| \|/g, '| $1 | a | b | c |');
  t = t.replace(/\| (A|B) \| \| \| \|/g, '| $1 | a | b | 7 |');
  t = t.replace(/\| \| \| \|/g, '| none found | — | — |');
  t = t.replace(/\| (1440|768|390)×(\d+) \| \| \|/g, '| $1×$2 | shot-$1.png | hero and footer |');
  t = t.replace('- JSON: decided', '- JSON: check.json').replace('- Before: decided', '- Before: before.png').replace('- After: decided', '- After: after.png');
  t = t.replace(/<!--[\s\S]*?-->/, status);
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
