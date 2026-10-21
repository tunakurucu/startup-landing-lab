import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const [,, file, out] = process.argv;
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await b.newPage({viewport: {width: w, height: h}});
  const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto('file://' + file); await p.waitForTimeout(900);
  const demo = p.locator('[data-signature]');
  const shot = async name => { await demo.scrollIntoViewIfNeeded(); await p.waitForTimeout(250); await p.screenshot({path: `${out}/${w}-state-${name}.png`}); };
  // phone: scroll so the picks are centred, like a thumb would
  if (w === 390) await p.evaluate(() => document.querySelector('.picks').scrollIntoView({block: 'center'}));
  else await p.evaluate(() => document.querySelector('[data-signature]').scrollIntoView({block: 'center'}));
  await p.waitForTimeout(300); await p.screenshot({path: `${out}/${w}-state-default.png`});
  for (const v of ['marcus', 'ren', 'jo']) { await p.locator(`label.pick:has(input[value=${v}])`).click(); await p.waitForTimeout(250); await p.screenshot({path: `${out}/${w}-state-${v}.png`}); }
  if (w === 390) await p.evaluate(() => document.querySelector('#approve').scrollIntoView({block: 'center'}));
  await p.click('#approve'); await p.waitForTimeout(250); await p.screenshot({path: `${out}/${w}-state-jo-approved.png`});
  await p.click('#decline'); await p.waitForTimeout(250); await p.screenshot({path: `${out}/${w}-state-jo-declined.png`});
  await p.click('#reset'); await p.waitForTimeout(250); await p.screenshot({path: `${out}/${w}-state-reset.png`});
  const st = await p.evaluate(() => ({checked: document.querySelector('input[name=pick]:checked').value, outcome: document.getElementById('outcome').textContent, verdict: document.getElementById('verdict').textContent, announce: document.getElementById('announce').textContent, active: document.activeElement.id}));
  // keyboard only: tab to radios, arrow
  await p.evaluate(() => document.querySelector('input[value=dana]').focus());
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(100);
  const kb1 = await p.evaluate(() => ({checked: document.querySelector('input[name=pick]:checked').value, verdict: document.getElementById('verdict').textContent, active: document.activeElement.value}));
  await p.keyboard.press('Tab'); const tabTo = await p.evaluate(() => document.activeElement.id || document.activeElement.textContent);
  await p.keyboard.press('Enter'); await p.waitForTimeout(100);
  const kb2 = await p.evaluate(() => document.getElementById('outcome').textContent);
  // double click approve
  await p.dblclick('#approve'); const dbl = await p.evaluate(() => document.getElementById('outcome').textContent + ' | ' + document.getElementById('slot').textContent);
  console.log(w, JSON.stringify({st, kb1, tabTo, kb2, dbl, errs}));
  await p.close();
}
// reduced motion
const p = await b.newPage({viewport: {width: 1440, height: 900}, reducedMotion: 'reduce'});
await p.goto('file://' + file); await p.evaluate(() => document.getElementById('night').scrollIntoView()); await p.waitForTimeout(400);
await p.screenshot({path: `${out}/1440-reduced-night.png`});
console.log('reduced armed?', await p.evaluate(() => document.getElementById('ruler').className));
await b.close();
