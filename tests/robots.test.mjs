import test from 'node:test';
import assert from 'node:assert/strict';
import {parseStarGroup, isAllowed} from '../scripts/robots.mjs';

const allowed = (txt, path) => isAllowed(parseStarGroup(txt), path);

test('homepage allowed by a longer Allow rule despite Disallow: /', () => {
  const txt = 'User-Agent: *\nAllow: /$\nAllow: /about$\nDisallow: /\n';
  assert.equal(allowed(txt, '/'), true);
  assert.equal(allowed(txt, '/about'), true);
  assert.equal(allowed(txt, '/pricing'), false);
});

test('Disallow: / for every agent blocks the homepage', () => {
  assert.equal(allowed('User-agent: *\nDisallow: /\n', '/'), false);
});

test('only the * group applies; grouped user-agent lines share rules', () => {
  assert.equal(allowed('User-agent: Googlebot\nDisallow: /\n\nUser-agent: *\nAllow: /\n', '/'), true);
  assert.equal(allowed('User-agent: GPTBot\nUser-agent: *\nDisallow: /\n', '/'), false);
});

test('wildcards, end anchors and empty rules', () => {
  assert.equal(allowed('User-agent: *\nDisallow: /*.pdf$\n', '/'), true);
  assert.equal(allowed('User-agent: *\nDisallow:\n', '/'), true);
  assert.equal(allowed('User-agent: *\nDisallow: /private\nAllow: /private/ok\n', '/private/ok/x'), true);
});
