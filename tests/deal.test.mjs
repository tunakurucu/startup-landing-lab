import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';

import {mkdtempSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const deal = (...a) => spawnSync(process.execPath, ['skills/startup-landing-design/scripts/deal.mjs', '--no-history', ...a], {encoding: 'utf8'});
const dealH = (h, ...a) => spawnSync(process.execPath, ['skills/startup-landing-design/scripts/deal.mjs', ...a], {encoding: 'utf8', env: {...process.env, SLD_HISTORY: h}});

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
test('a lane filters the frame, and history keeps the next product off the last frame', () => {
  const out = deal('X', '--lane', 'developer').stdout;
  assert.match(out, /Frame dealt for the \*\*developer\*\* lane/);
  for (const axis of ['Nav', 'Hero composition', 'Look', 'Type', 'Buttons', 'Motion signature']) assert.match(out, new RegExp(`- \\*\\*${axis}: `));
  assert.doesNotMatch(out, /`(rounded-friendly|full-bleed|humanist-serif)`\)\. /);
  assert.equal(deal('X', '--lane', 'shop').status, 2);
  const h = join(mkdtempSync(join(tmpdir(), 'sld-')), 'history.json');
  const pick = o => [...o.matchAll(/^- \*\*(?:Hero composition|Look): [^(]+\(`([a-z-]+)`\)/gm)].map(m => m[1]);
  const a = pick(dealH(h, 'Alpha', '--lane', 'consumer').stdout), b = pick(dealH(h, 'Beta', '--lane', 'consumer').stdout);
  assert.notEqual(a[0], b[0]); assert.notEqual(a[1], b[1]);
});
