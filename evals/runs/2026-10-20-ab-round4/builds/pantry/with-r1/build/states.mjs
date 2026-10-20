// Operates the sample planner through its states at 1440 and 390 and screenshots each.
import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {mkdirSync} from 'node:fs';
const out = process.cwd() + '/shots/states';
mkdirSync(out, {recursive: true});
const b = await chromium.launch();
const log = [];
const status = p => p.evaluate(() => ({status: document.getElementById('plan-status').textContent, count: document.getElementById('buy-count').textContent, rows: [...document.querySelectorAll('#plan-rows li')].map(l => l.textContent.replace(/\s+/g, ' ').trim().slice(0, 70)), list: [...document.querySelectorAll('#buy-list li')].map(l => l.textContent.trim()), list2: [...document.querySelectorAll('#buy-list-2 li')].map(l => l.textContent.trim()), errors: window.__errs || []}));

for (const [w, h] of [[1440, 900], [390, 844]]) {
  for (const reduce of [false, true]) {
    const ctx = await b.newContext({viewport: {width: w, height: h}, reducedMotion: reduce ? 'reduce' : 'no-preference'});
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(String(e.message)));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto('file://' + process.cwd() + '/index.html');
    await p.waitForTimeout(300);
    const tag = `${w}${reduce ? '-rm' : ''}`;
    const shot = async name => { await p.locator('#planner').screenshot({path: `${out}/${tag}-${name}.png`}); };
    await shot('1-default'); log.push([tag, 'default', await status(p)]);
    if (reduce) {
      // Reduced motion: toggle once and record that nothing moved (transform) — the flash is opacity only.
      await p.locator('input[value="rice"]').click({force: true});
      await p.waitForTimeout(100);
      const moving = await p.evaluate(() => document.getAnimations().map(a => ({name: a.animationName || a.id || 'anim', target: a.effect?.target?.className, props: a.effect?.getKeyframes ? a.effect.getKeyframes().flatMap(k => Object.keys(k)).filter(k => !/offset|computedOffset|easing|composite/.test(k)) : []})));
      log.push([tag, 'toggle rice under reduced motion; running animations', moving, await status(p)]);
      await shot('2-after-toggle');
      await ctx.close();
      continue;
    }
    // Visitor's own input: untick rice and chicken (two perishable things), tick pasta.
    await p.locator('input[value="rice"]').click({force: true});
    await p.locator('input[value="chicken"]').click({force: true});
    await p.locator('input[value="pasta"]').click({force: true});
    await p.waitForTimeout(800);
    await shot('2-own-input'); log.push([tag, 'untick rice, chicken; tick pasta', await status(p)]);
    // Vetoes: all three on.
    for (const v of ['mushrooms', 'spicy', 'mixed']) await p.locator(`input[value="${v}"]`).click({force: true});
    await p.waitForTimeout(800);
    await shot('3-all-vetoes'); log.push([tag, 'all three vetoes on', await status(p)]);
    // Out of range: everything ticked + all vetoes.
    for (const i of await p.locator('input[name="have"]').all()) if (!(await i.isChecked())) await i.click({force: true});
    await p.waitForTimeout(800);
    await shot('4-everything'); log.push([tag, 'all 12 ticked + all vetoes', await status(p)]);
    // Empty: untick everything.
    for (const i of await p.locator('input[name="have"]').all()) if (await i.isChecked()) await i.click({force: true});
    await p.waitForTimeout(800);
    await shot('5-empty'); log.push([tag, 'nothing ticked', await status(p)]);
    // Short: one item only.
    await p.locator('input[value="tortillas"]').click({force: true});
    await p.waitForTimeout(800);
    await shot('6-one-item'); log.push([tag, 'only tortillas', await status(p)]);
    // Repeat: double-click a chip quickly (toggles twice) and hammer reset.
    const egg = p.locator('input[value="eggs"]');
    await egg.click({force: true}); await egg.click({force: true}); await egg.click({force: true});
    await p.waitForTimeout(300);
    log.push([tag, 'eggs clicked three times fast (expect checked)', await egg.isChecked(), await status(p)]);
    // Reset.
    const reset = p.locator('#reset');
    await reset.click(); await reset.click();
    await p.waitForTimeout(800);
    await shot('7-reset'); log.push([tag, 'reset twice', await status(p)]);
    // Keyboard only: tab to the first chip and press space, then to reset and press enter.
    await p.evaluate(() => document.querySelector('input[value="spinach"]').focus());
    await p.keyboard.press('Space');
    await p.waitForTimeout(400);
    await shot('8-keyboard'); log.push([tag, 'keyboard: space on spinach', await status(p), await p.evaluate(() => { const el = document.activeElement; const lb = el.closest('label'); const s = getComputedStyle(lb.querySelector('.chip-body')); return {focused: el.value, outline: s.outlineStyle + ' ' + s.outlineWidth}; })]);
    await p.keyboard.press('Tab');
    await p.evaluate(() => document.getElementById('reset').focus());
    await p.keyboard.press('Enter');
    await p.waitForTimeout(400);
    log.push([tag, 'keyboard: enter on reset', await status(p)]);
    // Nonsense: inject a bogus checkbox value via script (a tampered form).
    await p.evaluate(() => { const i = document.createElement('input'); i.type = 'checkbox'; i.name = 'have'; i.value = 'unicorn'; i.checked = true; i.setAttribute('aria-label', 'tampered'); document.getElementById('fridge').appendChild(i); i.dispatchEvent(new Event('change', {bubbles: true})); });
    await p.waitForTimeout(300);
    log.push([tag, 'nonsense: injected have=unicorn', await status(p), 'errors:', errs]);
    if (w === 390) {
      // Phone menu.
      await p.locator('#menu-btn').click();
      await p.waitForTimeout(200);
      await p.screenshot({path: `${out}/390-menu-open.png`});
      log.push([tag, 'menu open', await p.evaluate(() => ({expanded: document.getElementById('menu-btn').getAttribute('aria-expanded'), hidden: document.getElementById('menu-list').hidden}))]);
      await p.keyboard.press('Escape');
      log.push([tag, 'menu after Escape', await p.evaluate(() => ({expanded: document.getElementById('menu-btn').getAttribute('aria-expanded'), hidden: document.getElementById('menu-list').hidden, focus: document.activeElement.id}))]);
    }
    // No-JS still: block scripts and screenshot the first screen.
    await ctx.close();
  }
  const ctx2 = await b.newContext({viewport: {width: w, height: h}, javaScriptEnabled: false});
  const p2 = await ctx2.newPage();
  await p2.goto('file://' + process.cwd() + '/index.html');
  await p2.waitForTimeout(300);
  await p2.screenshot({path: `${out}/${w}-nojs-top.png`});
  log.push([`${w}-nojs`, 'first screen without scripts', await p2.evaluate(() => ({rows: document.querySelectorAll('#plan-rows .plan-row').length, status: document.getElementById('plan-status').textContent}))]);
  await ctx2.close();
}
await b.close();
console.log(JSON.stringify(log, null, 1));
