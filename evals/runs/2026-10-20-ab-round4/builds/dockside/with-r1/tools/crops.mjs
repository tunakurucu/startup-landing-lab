import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
for (const [w,h,sel,name] of [[390,844,'#gate','390-gate'],[390,844,'#rules','390-rules'],[390,844,'#pricing','390-pricing'],[768,1024,'#gate','768-gate'],[1440,900,'#booking','1440-booking']]) {
  const p = await b.newPage({viewport:{width:w,height:h}}); await p.goto('file:///home/claude/r4/work/W001/index.html'); await p.waitForTimeout(300);
  await p.locator(sel).screenshot({path:`shots/states/${name}.png`}); await p.close();
}
await b.close();
