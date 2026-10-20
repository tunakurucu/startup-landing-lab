import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const dir = new URL('..', import.meta.url).pathname, url = 'file://' + dir + 'index.html';
const b = await chromium.launch(); const log = [];
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await b.newPage({viewport: {width: w, height: h}});
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(url); await p.waitForTimeout(400);
  const F = p.locator('[data-signature]');
  const info = async () => (await p.locator('.info').innerText()).replace(/\n/g, ' / ');
  const strip = async () => (await p.locator('.strip').innerText()).replace(/\n/g, ' ');
  const shot = async n => { await F.screenshot({path: `${dir}shots/states/${w}-${n}.png`}); log.push(`${w} ${n}: [${await strip()}] ${await info()}`); };
  await shot('1-default');
  await p.click('.take'); await shot('2-taken'); 
  log.push(`${w} log after take: ${(await p.locator('.log li').first().innerText()).replace(/\n/g,' ')}`);
  await p.click('.take'); await p.click('.take'); await p.click('.take'); log.push(`${w} after 3 more clicks (double+1): ${await info()}`);
  const q = async v => { await p.fill('#q', v); await p.press('#q', 'Enter'); await p.waitForTimeout(150); };
  await q('HEK293'); await shot('3-matches'); log.push(`${w} matches: ${await p.locator('.matches').innerText()}`.replace(/\n/g,' '));
  await p.locator('[data-pick="hek6"]').click(); log.push(`${w} pick p6: ${await info()} focus=${await p.evaluate(()=>document.activeElement.textContent)}`);
  await q(''); await shot('4-empty');
  await q('J12'); await shot('5-range');
  await q('Z0'); log.push(`${w} Z0: ${await info()}`);
  await q('E5'); await shot('6-well-empty');
  await q('E2'); log.push(`${w} E2: ${await info()}`);
  await q('asdf;;'); await shot('7-nonsense');
  await q('14'); log.push(`${w} "14": ${await info()}`);
  await q('1'); log.push(`${w} "1": ${await info()}`);
  await q('lys'); log.push(`${w} "lys": ${await info()}`);
  await q('x'.repeat(200)); await shot('8-long');
  log.push(`${w} long: overflow=${await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)} value length=${await p.inputValue('#q').then(v=>v.length)}`);
  await p.click('.reset'); await shot('9-reset'); log.push(`${w} reset q=${await p.inputValue('#q')}`);
  // keyboard only
  await p.focus('#q'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Enter');
  log.push(`${w} keyboard: focus=${await p.evaluate(()=>document.activeElement.textContent)} info=${await info()}`);
  // log filter
  await p.locator('[data-by-filter="T. Lindqvist"]').click();
  await p.locator('.logbox').screenshot({path: `${dir}shots/states/${w}-log-filter.png`});
  log.push(`${w} filter: ${await p.locator('.log-status').innerText()}`);
  log.push(`${w} errors: ${JSON.stringify(errs)}`);
  await p.close();
}
const rm = await b.newPage({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
await rm.goto(url); await rm.click('.take');
log.push('reduced motion anims: ' + await rm.evaluate(() => document.getAnimations().length));
await rm.locator('[data-signature]').screenshot({path: `${dir}shots/states/390-reduced-taken.png`});
const nj = await b.newContext({javaScriptEnabled: false, viewport: {width: 390, height: 844}}); const np = await nj.newPage(); await np.goto(url);
await np.screenshot({path: `${dir}shots/states/390-nojs.png`});
await b.close(); console.log(log.join('\n'));
