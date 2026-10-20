import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';

const deal = (...a) => spawnSync(process.execPath, ['skills/startup-landing-design/scripts/deal.mjs', ...a], {encoding: 'utf8'});

test('the same product deals the same hand, with its seed printed', () => {
  const a = deal('Chairtime'), b = deal('Chairtime');
  assert.equal(a.status, 0);
  assert.equal(a.stdout, b.stdout);
  assert.match(a.stdout, /seed \d+/);
  assert.match(a.stdout, /Canon/);
  assert.equal((a.stdout.match(/^\d\. \*\*/gm) || []).length, 4);
});
test('a seed reproduces a hand and excluded moves are never dealt', () => {
  for (let s = 1; s <= 40; s++) assert.doesNotMatch(deal('X', '--seed', String(s), '--exclude', 'character,world').stdout, /`(character|world)`/);
  assert.equal(deal('X', '--seed', '9').stdout, deal('Y', '--seed', '9').stdout.replace(/"Y"/g, '"X"'));
});
test('the level is validated', () => {
  assert.equal(deal('X', '--level', 'medium').status, 2);
  assert.match(deal('X', '--level', 'loud').stdout, /\*\*loud\*\*/);
});
