import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b=await chromium.launch();
const url='file:///home/claude/r3/work/W014/index.html';
for (const [w,h] of [[1440,900],[390,844]]) {
  const p=await b.newPage({viewport:{width:w,height:h}});
  await p.goto(url); await p.waitForTimeout(500);
  const fig=p.locator('#sunrise');
  for (const v of [-30,-8,0]) {
    await p.evaluate(v=>{const r=document.getElementById('t'); r.value=v; r.dispatchEvent(new Event('input',{bubbles:true}));},v);
    await p.waitForTimeout(300);
    await fig.screenshot({path:`shots/state-${w}-${v===0?'0':'m'+Math.abs(v)}.png`});
  }
  // drag the dial from its centre towards the right edge (value should rise)
  const d=await p.locator('#dial').boundingBox();
  await p.mouse.move(d.x+d.width/2,d.y+d.height/2); await p.mouse.down(); await p.mouse.move(d.x+d.width-6,d.y+d.height/2,{steps:5}); await p.mouse.up();
  const afterDrag=await p.evaluate(()=>document.getElementById('t').value+' / '+document.getElementById('min').textContent);
  // play, capture mid-run with the pause label
  await p.click('#play'); await p.waitForTimeout(2500);
  const playing=await p.evaluate(()=>document.getElementById('play').textContent+' | '+document.getElementById('min').textContent);
  await fig.screenshot({path:`shots/state-${w}-playing.png`});
  await p.waitForTimeout(14000);
  const ended=await p.evaluate(()=>document.getElementById('play').textContent+' | '+document.getElementById('min').textContent);
  console.log(w,{afterDrag,playing,ended});
  if (w===390){ await p.click('.menu-btn'); await p.waitForTimeout(200); await p.screenshot({path:'shots/state-390-menu.png'}); }
  await p.close();
}
await b.close();
