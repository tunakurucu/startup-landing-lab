import { chromium } from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const url = 'file:///home/claude/r3/work/W020/index.html';
const axeSrc = fs.readFileSync('/home/claude/r3/deps/node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch();
const fails = [];
const ok = (c, m) => { if (!c) fails.push(m); };

// 1. Normal: autoplay runs to the end
{
  const p = await b.newPage({ viewport: { width: 1360, height: 900 } });
  await p.goto(url);
  ok(await p.textContent('#clock') === '11:02 am', 'starts at 11:02');
  ok(await p.getAttribute('#slot230', 'data-state') === 'booked', 'starts booked');
  await p.waitForTimeout(2400 * 7 + 500);
  ok(await p.textContent('#clock') === '11:12 am', 'ends at 11:12');
  ok(await p.getAttribute('#slot230', 'data-state') === 'filled', 'ends filled');
  ok(await p.isVisible('#replay'), 'replay visible at end');
  ok(!(await p.isVisible('#play')), 'play hidden at end');
  const visibleMsgs = await p.locator('.msg:visible').count();
  ok(visibleMsgs === 5, 'all 5 texts visible, got ' + visibleMsgs);
  // step dots
  await p.click('#steps button[data-go="1"]');
  ok(await p.getAttribute('#slot230', 'data-state') === 'cancelled', 'step 1 cancelled');
  ok(await p.locator('.msg:visible').count() === 0, 'no msgs at step 1');
  ok(await p.isVisible('[data-empty]'), 'empty note at step 1');
  await p.click('#steps button[data-go="3"]');
  ok((await p.getAttribute('.wait__row[data-who="dana"]', 'data-state')) === 'passed', 'dana passed at 3');
  ok(await p.locator('.msg:visible').count() === 2, '2 msgs at step 3');
  // play / pause
  await p.click('#play');
  ok(await p.getAttribute('#play', 'aria-pressed') === 'true', 'playing');
  await p.click('#play');
  ok(await p.getAttribute('#play', 'aria-pressed') === 'false', 'paused');
  const c = await p.textContent('#clock');
  await p.waitForTimeout(2600);
  ok(await p.textContent('#clock') === c, 'stays paused');
  // replay
  await p.click('#steps button[data-go="6"]');
  await p.click('#replay');
  await p.waitForTimeout(100);
  ok(await p.textContent('#clock') === '11:02 am', 'replay rewinds');
  // modal
  await p.click('.hero .js-book');
  ok(await p.evaluate(() => document.getElementById('bookModal').open), 'modal opens');
  await p.keyboard.press('Escape');
  ok(!(await p.evaluate(() => document.getElementById('bookModal').open)), 'modal closes on Esc');
  await p.click('.hero .js-book');
  await p.click('#bookModal a[href="#how"]');
  ok(!(await p.evaluate(() => document.getElementById('bookModal').open)), 'modal closes on link');
  // keyboard focus reaches controls
  await p.focus('#play');
  ok(await p.evaluate(() => document.activeElement.id) === 'play', 'play focusable');
  // axe
  await p.addScriptTag({ content: axeSrc });
  const res = await p.evaluate(async () => await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa'] }));
  for (const v of res.violations) fails.push('axe: ' + v.id + ' ' + v.nodes.map(n => n.target.join(' ')).join(' | '));
  await p.close();
}

// 2. Reduced motion: lands on final state, no autoplay
{
  const ctx = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1360, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(url);
  await p.waitForTimeout(300);
  ok(await p.getAttribute('#slot230', 'data-state') === 'filled', 'reduced motion shows final');
  ok(await p.isVisible('#replay'), 'reduced motion: replay offered');
  await ctx.close();
}

// 3. No JS: final state is in the HTML
{
  const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1360, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(url);
  ok(await p.getAttribute('#slot230', 'data-state') === 'filled', 'no-js final state');
  ok(await p.locator('.msg:visible').count() === 5, 'no-js all texts');
  ok(await p.getAttribute('.hero .js-book', 'href') === '#call', 'no-js CTA still goes to #call');
  await ctx.close();
}

// 4. With BOOKING_URL set, links go out
{
  const p = await b.newPage();
  await p.goto(url);
  const src = fs.readFileSync('/home/claude/r3/work/W020/demo.js', 'utf8').replace("var BOOKING_URL = '';", "var BOOKING_URL = 'https://example.test/book';");
  await p.evaluate(s => { const t = document.createElement('script'); t.textContent = s; document.body.appendChild(t); }, src);
  ok(await p.getAttribute('.hero .js-book', 'href') === 'https://example.test/book', 'BOOKING_URL wires CTA');
  await p.close();
}

await b.close();
console.log(fails.length ? 'FAIL\n' + fails.join('\n') : 'ALL PASS');
