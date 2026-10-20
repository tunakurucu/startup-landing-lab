import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const url = 'file:///home/claude/r5/work/W003/index.html';
const states = [
  ['default', {}],
  ['flag', {radius: '13'}],
  ['over90', {radius: '14', load: '14'}],
  ['over100', {radius: '16'}],
  ['offchart', {radius: '30'}],
  ['below-min', {boom: '40', radius: '4'}],
  ['ground', {ground: 'soft'}],
  ['ground-and-chart', {ground: 'soft', radius: '16'}],
];
const log = [];
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage({viewport: {width: w, height: h}});
  await page.goto(url); await page.waitForTimeout(300);
  for (const [name, vals] of states) {
    await page.click('#reset');
    for (const [k, v] of Object.entries(vals)) {
      await page.evaluate(([k, v]) => { const el = document.getElementById(k); el.value = v; el.dispatchEvent(new Event('input', {bubbles: true})); el.dispatchEvent(new Event('change', {bubbles: true})); }, [k, v]);
    }
    const r = await page.evaluate(() => ({pct: document.getElementById('r-pct').textContent, stamp: document.getElementById('r-stamp').textContent, line: document.getElementById('r-line').textContent, sheet: document.getElementById('s-stamp').textContent, reason: document.getElementById('s-reason').textContent, gcheck: document.getElementById('s-gcheck').textContent, row: document.getElementById('s-row').textContent}));
    log.push(`${w} ${name}: ${JSON.stringify(r)}`);
    await page.evaluate(() => document.getElementById('sample').scrollIntoView({block: 'start'}));
    await page.waitForTimeout(100);
    await page.screenshot({path: `shots/state-${w}-${name}.png`});
  }
  // keyboard-only: tab to load slider and press ArrowRight; type nonsense into the select
  await page.click('#reset');
  await page.focus('#load'); await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');
  await page.focus('#radius'); await page.keyboard.press('End');
  const kb = await page.evaluate(() => ({active: document.activeElement.id, load: document.getElementById('load-out').textContent, radius: document.getElementById('radius-out').textContent, stamp: document.getElementById('r-stamp').textContent}));
  log.push(`${w} keyboard: ${JSON.stringify(kb)}`);
  // repeat: double click reset, rapid inputs
  await page.dblclick('#reset');
  for (let i = 0; i < 30; i++) await page.evaluate(i => { const el = document.getElementById('radius'); el.value = String(4 + (i % 31)); el.dispatchEvent(new Event('input', {bubbles: true})); }, i);
  await page.click('#reset');
  const rep = await page.evaluate(() => ({active: document.activeElement.id, pct: document.getElementById('r-pct').textContent, radius: document.getElementById('radius-out').textContent, stamp: document.getElementById('r-stamp').textContent}));
  log.push(`${w} repeat+reset: ${JSON.stringify(rep)}`);
  // nonsense: inject bad values directly
  const bad = await page.evaluate(() => { const l = document.getElementById('load'); l.value = 'abc'; l.dispatchEvent(new Event('input', {bubbles: true})); const g = document.getElementById('ground'); g.value = 'zzz'; g.dispatchEvent(new Event('change', {bubbles: true})); return {load: document.getElementById('load-out').textContent, ground: document.getElementById('s-ground').textContent, pct: document.getElementById('r-pct').textContent}; });
  log.push(`${w} nonsense: ${JSON.stringify(bad)}`);
  await page.close();
}
// reduced motion still
const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
const p2 = await ctx.newPage(); await p2.goto(url); await p2.waitForTimeout(300);
await p2.evaluate(() => { const el = document.getElementById('radius'); el.value = '16'; el.dispatchEvent(new Event('input', {bubbles: true})); });
await p2.evaluate(() => document.getElementById('sample').scrollIntoView({block: 'start'}));
await p2.screenshot({path: 'shots/state-390-reduced-motion.png'});
log.push('390 reduced motion: ' + await p2.evaluate(() => document.getElementById('r-stamp').textContent + ' / animations running: ' + document.getAnimations().length));
await ctx.close();
await browser.close();
console.log(log.join('\n'));
