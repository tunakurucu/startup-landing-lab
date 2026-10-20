import { chromium } from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const url = 'file:///home/claude/r3/work/W020/index.html';
const out = '/home/claude/r3/work/W020/tests/';
const browser = await chromium.launch();
const errors = [];
for (const [name, w, h] of [['desktop', 1360, 900], ['mobile', 390, 800]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  page.on('pageerror', e => errors.push(name + ': ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(name + ' console: ' + m.text()); });
  page.on('request', r => { if (!r.url().startsWith('file:')) errors.push('network: ' + r.url()); });
  await page.goto(url);
  await page.waitForTimeout(400);
  await page.screenshot({ path: out + name + '-top.png' });
  // wait for demo to finish
  await page.waitForTimeout(2400 * 7 + 500);
  await page.screenshot({ path: out + name + '-done.png' });
  await page.screenshot({ path: out + name + '-full.png', fullPage: true });
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(name, 'scrollWidth', sw, 'viewport', w);
  await page.close();
}
console.log('errors', errors);
await browser.close();
