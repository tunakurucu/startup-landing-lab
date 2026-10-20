import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {mkdirSync} from 'node:fs';
mkdirSync('shots/states', {recursive: true});
const url = 'file:///home/claude/r4/work/W001/index.html';
const b = await chromium.launch();
const log = (...a) => console.log(...a);
async function status(p){ return p.locator('#status').innerText(); }

// ---- 1440 ----
let ctx = await b.newContext({viewport:{width:1440,height:900}}); let p = await ctx.newPage();
const errors = []; p.on('pageerror', e => errors.push(e.message)); p.on('console', m => { if (m.type()==='error') errors.push(m.text()); });
await p.goto(url); await p.waitForTimeout(500);
await p.screenshot({path:'shots/states/1440-initial.png'});
// past slot click
await p.locator('button.slot[data-door="3"][data-hour="8"]').click({force:true}); await p.waitForTimeout(100);
log('past click status:', await status(p));
// open 10:00 door 3
await p.locator('button.slot[data-door="3"][data-hour="10"]').click(); await p.waitForTimeout(300);
log('sheet visible:', await p.locator('#sheet').isVisible(), 'focused:', await p.evaluate(() => document.activeElement.id));
await p.screenshot({path:'shots/states/1440-sheet.png'});
// empty submit
await p.locator('#sheet-confirm').click(); await p.waitForTimeout(100);
log('empty submit error:', await p.locator('#f-carrier-err').innerText(), 'invalid:', await p.locator('#f-carrier').getAttribute('aria-invalid'));
await p.screenshot({path:'shots/states/1440-sheet-error.png'});
// nonsense / long input
await p.locator('#f-carrier').fill('   ¯\\_(ツ)_/¯ !!!! '.repeat(6)); 
log('carrier value length after maxlength:', (await p.locator('#f-carrier').inputValue()).length);
await p.locator('#f-carrier').fill('Keller Trucking'); await p.locator('#f-ref').fill('PO 44812');
// double click confirm
await p.locator('#sheet-confirm').click(); await p.waitForTimeout(50); log('focused right after confirm:', await p.evaluate(() => document.activeElement.id)); await p.locator('#sheet-confirm').click({force:true, timeout:2000}).catch(e=>log('second click:', String(e).split('\n')[0])); await p.waitForTimeout(300);
log('done visible:', await p.locator('#done').isVisible(), 'status:', await status(p));
log('yours cells:', await p.locator('.slot.is-yours').count(), 'bookings total:', await p.locator('.slot.is-booked').count());
log('focused after confirm:', await p.evaluate(() => document.activeElement.id));
await p.screenshot({path:'shots/states/1440-booked.png'});
// move clock to 10:15 -> trailer at door 3
await p.locator('#clock').fill('17'); await p.waitForTimeout(500);
log('clock out:', await p.locator('#clock-out').innerText(), 'trailer3 in:', await p.evaluate(() => document.querySelector('.trailer[data-door="3"]').classList.contains('is-in')), 'light3 red:', await p.evaluate(() => document.querySelector('.light[data-door="3"]').classList.contains('is-red')));
log('nose text:', await p.evaluate(() => document.querySelector('.trailer[data-door="3"] .nose-text').textContent));
await p.screenshot({path:'shots/states/1440-clock-1015.png'});
// clock bounds
for (const v of ['999','-5','abc','']) { await p.evaluate(v => { const c=document.getElementById('clock'); c.value=v; c.dispatchEvent(new Event('input',{bubbles:true})); }, v); log('clock set to', JSON.stringify(v), '->', await p.locator('#clock').inputValue(), await p.locator('#clock-out').innerText()); }
await p.locator('#clock').fill('40'); await p.waitForTimeout(100); log('at 16:00 open buttons:', await p.locator('button.slot:not([aria-disabled])').count());
await p.screenshot({path:'shots/states/1440-clock-1600.png'});
// reset
await p.locator('#reset').click(); await p.waitForTimeout(300);
log('after reset: yours', await p.locator('.slot.is-yours').count(), 'clock', await p.locator('#clock-out').innerText(), 'status', await status(p));
// keyboard only: tab to Door 2 10:00 and book with Enter, escape cancels
await p.locator('button.slot[data-door="2"][data-hour="10"]').focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(200);
log('kbd sheet open:', await p.locator('#sheet').isVisible(), 'focus:', await p.evaluate(()=>document.activeElement.id));
await p.keyboard.press('Escape'); await p.waitForTimeout(100);
log('after Esc sheet hidden:', !(await p.locator('#sheet').isVisible()), 'focus back on:', await p.evaluate(()=>document.activeElement.getAttribute('aria-label')));
await p.keyboard.press('Enter'); await p.waitForTimeout(100); await p.keyboard.type('Northline'); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
log('kbd booked:', await status(p));
// door tab at desktop
await p.locator('.door-tab[data-door="4"]').click(); await p.waitForTimeout(100); log('tab 4:', await status(p), 'pressed:', await p.locator('.door-tab[aria-pressed=true]').getAttribute('data-door'));
log('errors so far:', errors);
await ctx.close();

// ---- reduced motion 1440 ----
ctx = await b.newContext({viewport:{width:1440,height:900}, reducedMotion:'reduce'}); p = await ctx.newPage(); await p.goto(url); await p.waitForTimeout(400);
await p.locator('#clock').fill('17'); await p.waitForTimeout(50);
const anims = await p.evaluate(() => document.getAnimations().filter(a=>a.playState==='running').map(a => (a.transitionProperty||a.animationName)+'@'+a.effect.target.className.baseVal));
log('reduced-motion running animations after clock move:', anims);
log('trailer transform under RM:', await p.evaluate(() => getComputedStyle(document.querySelector('.trailer[data-door="3"]')).transform));
await p.screenshot({path:'shots/states/1440-reduced-motion.png'});
await ctx.close();

// ---- no JS ----
ctx = await b.newContext({viewport:{width:1440,height:900}, javaScriptEnabled:false}); p = await ctx.newPage(); await p.goto(url); await p.waitForTimeout(300);
await p.screenshot({path:'shots/states/1440-nojs.png'});
log('nojs grid cells:', await p.locator('#grid .slot').count(), 'trailers in:', await p.locator('.trailer.is-in').count());
await ctx.close();

// ---- 390 ----
ctx = await b.newContext({viewport:{width:390,height:844}, hasTouch:true, isMobile:true}); p = await ctx.newPage(); await p.goto(url); await p.waitForTimeout(400);
await p.locator('.doors').scrollIntoViewIfNeeded(); await p.waitForTimeout(200);
await p.screenshot({path:'shots/states/390-list.png'});
await p.locator('.door-tab[data-door="3"]').tap(); await p.waitForTimeout(200);
log('390 visible cells:', await p.locator('#grid .slot:visible').count(), 'status:', await status(p));
await p.screenshot({path:'shots/states/390-door3.png'});
await p.locator('button.slot[data-door="3"][data-hour="10"]').tap(); await p.waitForTimeout(400);
log('390 sheet visible:', await p.locator('#sheet').isVisible(), 'sheet top in viewport:', await p.evaluate(() => { const r = document.getElementById('sheet').getBoundingClientRect(); return [Math.round(r.top), innerHeight]; }));
await p.screenshot({path:'shots/states/390-sheet.png'});
await p.locator('#f-carrier').fill('Keller Trucking'); await p.locator('#sheet-confirm').tap(); await p.waitForTimeout(300);
log('390 booked status:', await status(p), 'done top:', await p.evaluate(() => Math.round(document.getElementById('done').getBoundingClientRect().top)));
await p.screenshot({path:'shots/states/390-booked.png'});
await p.locator('#clock').scrollIntoViewIfNeeded(); await p.locator('#clock').fill('17'); await p.waitForTimeout(400);
await p.screenshot({path:'shots/states/390-clock-1015.png'});
// menu
await p.locator('.menu-btn').tap(); await p.waitForTimeout(200); await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(100);
await p.screenshot({path:'shots/states/390-menu.png'});
log('menu expanded:', await p.locator('.menu-btn').getAttribute('aria-expanded'), 'nav links visible:', await p.locator('#site-nav a:visible').count());
await ctx.close();
// ---- 320 ----
ctx = await b.newContext({viewport:{width:320,height:568}}); p = await ctx.newPage(); await p.goto(url); await p.waitForTimeout(300);
log('320 scrollWidth:', await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth]));
await p.screenshot({path:'shots/states/320-top.png'});
await ctx.close();
await b.close();
