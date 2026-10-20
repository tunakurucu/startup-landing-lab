import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const url = 'file:///home/claude/r5/work/W002/index.html';
const out = [];
for (const [w,h] of [[1440,900],[390,844]]) {
  const p = await b.newPage({viewport:{width:w,height:h}});
  await p.goto(url);
  const sig = p.locator('[data-signature]');
  const shot = async (name) => { await p.waitForTimeout(250); await sig.screenshot({path:`shots/state-${w}-${name}.png`}); out.push(`state-${w}-${name}.png`); };
  // car on
  await p.locator('label.chip', {hasText:'A car'}).click(); await shot('car-on');
  // owned off, rented on
  await p.locator('label.chip', {hasText:'Owned their home'}).click(); await p.locator('label.chip', {hasText:'Rented their home'}).click(); await shot('rented');
  // will off
  await p.locator('label.chip', {hasText:'A will'}).click(); await shot('no-will');
  // everything off
  for (const t of ['A bank account','A private or work pension','The State Pension or benefits','A car','Phone, broadband or TV','Rented their home']) await p.locator('label.chip', {hasText:t}).click();
  await shot('all-off');
  out.push('sum all-off: ' + await p.locator('[data-sum]').innerText());
  // double click a chip quickly
  const chip = p.locator('label.chip', {hasText:'A car'}); await chip.click(); await chip.click(); await p.waitForTimeout(100);
  out.push('after double click car checked=' + await p.locator('input[value=car]').isChecked());
  // reset
  await p.locator('[data-reset]').click(); await shot('reset');
  out.push('sum reset: ' + await p.locator('[data-sum]').innerText());
  // copy (headless: clipboard may fail -> fallback)
  await p.locator('[data-copy]').first().click(); await p.waitForTimeout(400);
  out.push('copy status: ' + await p.locator('[data-copy-status]').first().innerText() + ' | fallback hidden=' + await p.locator('[data-copy-fallback]').isHidden());
  await p.screenshot({path:`shots/state-${w}-copied.png`}); out.push(`state-${w}-copied.png`);
  // keyboard only: tab to first chip and toggle with space
  await p.goto(url);
  await p.locator('input[value=car]').focus(); await p.keyboard.press('Space'); await p.waitForTimeout(200);
  out.push('kb: car checked=' + await p.locator('input[value=car]').isChecked() + ' active=' + await p.evaluate(()=>document.activeElement.value||document.activeElement.tagName));
  await p.screenshot({path:`shots/state-${w}-kb-focus.png`}); out.push(`state-${w}-kb-focus.png`);
  // interest form: empty, nonsense, long, valid
  await p.locator('#email').fill(''); await p.locator('[data-save]').click(); await p.waitForTimeout(100);
  out.push('empty: ' + await p.locator('[data-save-status]').innerText());
  await p.locator('#email').fill('not an email'); await p.locator('[data-save]').click(); await p.waitForTimeout(100);
  out.push('nonsense: ' + await p.locator('[data-save-status]').innerText());
  await p.locator('#email').fill('a'.repeat(100)+'@example.com'); await p.locator('[data-save]').click(); await p.waitForTimeout(100);
  out.push('long: ' + await p.locator('[data-save-status]').innerText() + ' scrollW=' + await p.evaluate(()=>document.documentElement.scrollWidth));
  await p.locator('#email').fill('someone@example.com'); await p.locator('[data-save]').click(); await p.waitForTimeout(100);
  out.push('valid: ' + await p.locator('[data-save-status]').innerText() + ' stored=' + await p.evaluate(()=>localStorage.getItem('settle-interest')));
  await p.locator('#standing').screenshot({path:`shots/state-${w}-interest.png`}); out.push(`state-${w}-interest.png`);
  await p.close();
}
// reduced motion + no JS first screens
for (const [w,h] of [[1440,900],[390,844]]) {
  const p = await b.newPage({viewport:{width:w,height:h}, reducedMotion:'reduce'});
  await p.goto(url); await p.locator('label.chip', {hasText:'A car'}).click(); await p.waitForTimeout(100);
  await p.screenshot({path:`shots/state-${w}-reduced.png`}); out.push(`state-${w}-reduced.png`);
  await p.close();
  const c = await b.newContext({viewport:{width:w,height:h}, javaScriptEnabled:false}); const q = await c.newPage(); await q.goto(url);
  await q.screenshot({path:`shots/state-${w}-nojs.png`}); out.push(`state-${w}-nojs.png`); await c.close();
}
// 768 middle
const p7 = await b.newPage({viewport:{width:768,height:1024}}); await p7.goto(url);
await p7.locator('#needs').screenshot({path:'shots/state-768-kit.png'}); await p7.locator('#letters').screenshot({path:'shots/state-768-letters.png'});
await b.close();
console.log(out.join('\n'));
