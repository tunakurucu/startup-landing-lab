import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:900}});
await p.goto('file:///home/claude/r4/work/W001/index.html');
for (const px of [68,64,60,56,52]) {
  const r = await p.evaluate(px => { const h=document.querySelector('h1'); h.style.fontSize=px+'px'; const lh=parseFloat(getComputedStyle(h).lineHeight); return {px, lines: Math.round(h.getBoundingClientRect().height/lh), w: h.getBoundingClientRect().width, fam:getComputedStyle(h).fontFamily.split(',')[0]}; }, px);
  console.log(JSON.stringify(r));
}
await b.close();
