import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {pathToFileURL} from 'node:url';
const url = pathToFileURL(process.cwd()+'/index.html').href;
const b = await chromium.launch();
const log = [];
async function shotTape(p, name){ await p.locator('#tape').screenshot({path:`shots/states/${name}.png`}); }
import {mkdirSync} from 'node:fs'; mkdirSync('shots/states',{recursive:true});
for (const [w,h,tag] of [[1440,900,'1440'],[390,844,'390']]) {
  const ctx = await b.newContext({permissions:['clipboard-read','clipboard-write'], viewport:{width:w,height:h}}); const p = await ctx.newPage();
  const errors=[]; p.on('pageerror',e=>errors.push(String(e))); p.on('console',m=>{ if(m.type()==='error') errors.push(m.text()); });
  await p.goto(url); await p.waitForTimeout(300);
  const outcome = () => p.locator('#outcome-text').textContent();
  const badge = () => p.locator('#outcome-badge').textContent();
  log.push([tag,'default', await badge(), (await outcome()).slice(0,60)]);
  await shotTape(p, `${tag}-default`);
  // Empty: scrub to 0
  await p.locator('#step').fill('0'); await p.waitForTimeout(100);
  log.push([tag,'step0', await badge(), (await outcome()).slice(0,80), 'rows done=' + await p.locator('.ev.is-done').count()]);
  await shotTape(p, `${tag}-step0`);
  // Out of range via DOM value
  await p.evaluate(()=>{const s=document.getElementById('step'); s.value='99'; s.dispatchEvent(new Event('input',{bubbles:true}));});
  log.push([tag,'value 99', await p.locator('#step').inputValue(), await badge()]);
  await p.evaluate(()=>{const s=document.getElementById('step'); s.value='-5'; s.dispatchEvent(new Event('input',{bubbles:true}));});
  log.push([tag,'value -5', await p.locator('#step').inputValue(), await badge()]);
  await p.evaluate(()=>{const s=document.getElementById('step'); s.value='banana'; s.dispatchEvent(new Event('input',{bubbles:true}));});
  log.push([tag,'value banana', await p.locator('#step').inputValue(), await badge()]);
  // Play, capture mid-run
  await p.locator('#play').click(); await p.waitForTimeout(900);
  log.push([tag,'mid-play', await p.locator('#play').textContent(), await badge(), (await outcome()).slice(0,60)]);
  await shotTape(p, `${tag}-midplay`);
  // Double click play (restart) then wait to finish
  await p.locator('#play').click(); // stop
  log.push([tag,'stop pressed', await p.locator('#play').textContent(), await p.locator('#step').inputValue()]);
  await p.locator('#play').click(); await p.locator('#play').click(); await p.locator('#play').click(); // start, stop, start
  await p.waitForTimeout(3500);
  log.push([tag,'after full play', await p.locator('#play').textContent(), await badge(), await p.locator('#step').inputValue()]);
  // Switch to plain mode
  await p.locator('#step').fill('7');
  await p.locator('input[value="plain"]').check({force:true}); await p.waitForTimeout(100);
  log.push([tag,'plain', await badge(), (await outcome()).slice(0,70), 'differs=' + await p.locator('.m.diff').count(), 'head=' + await p.locator('#lap-head').textContent()]);
  await shotTape(p, `${tag}-plain`);
  // Play in plain mode and switch mode mid-play
  await p.locator('#play').click(); await p.waitForTimeout(700);
  await p.locator('input[value="rerun"]').check({force:true}); await p.waitForTimeout(100);
  log.push([tag,'mode switch mid-play', await p.locator('#play').textContent(), await badge(), await p.locator('#step').inputValue()]);
  // Keyboard: tab to play and press Enter; arrow keys on slider
  await p.locator('#step').fill('0');
  await p.locator('#play').focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(3500);
  log.push([tag,'keyboard play', await badge(), await p.locator('#step').inputValue()]);
  await p.locator('#step').focus(); await p.keyboard.press('ArrowLeft'); await p.keyboard.press('ArrowLeft');
  log.push([tag,'keyboard arrows', await p.locator('#step').inputValue(), await badge()]);
  await p.locator('#step').focus(); await p.locator('#step').screenshot({path:`shots/states/${tag}-focus-step.png`});
  // Copy button
  await p.locator('.js-copy').first().click(); await p.waitForTimeout(200);
  log.push([tag,'copy', await p.locator('#copy-status-1').textContent()]);
  if (tag==='390') { await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(200); console.log('summary box', await p.locator('.nav-menu summary').boundingBox()); await p.locator('.nav-menu summary').click({force:true}); await p.waitForTimeout(200); await p.screenshot({path:'shots/states/390-menu-open.png'}); }
  log.push([tag,'errors', errors]);
  await p.close();
}
// Reduced motion
const p = await b.newPage({viewport:{width:1440,height:900}, reducedMotion:'reduce'});
await p.goto(url); await p.waitForTimeout(300);
await p.locator('#play').click(); await p.waitForTimeout(900);
const anims = await p.evaluate(()=>document.getAnimations().length);
await p.screenshot({path:'shots/states/1440-reduced-motion-midplay.png'});
await p.waitForTimeout(3000);
log.push(['rm','reduced motion', 'running animations mid-play='+anims, await p.locator('#outcome-badge').textContent()]);
// no-JS
const p2 = await b.newPage({viewport:{width:1440,height:900}, javaScriptEnabled:false});
await p2.goto(url); await p2.waitForTimeout(300);
await p2.screenshot({path:'shots/states/1440-nojs-top.png'});
log.push(['nojs','noscript table rows', await p2.locator('noscript').count(), await p2.locator('#outcome-text').textContent()]);
await b.close();
for (const l of log) console.log(JSON.stringify(l));
