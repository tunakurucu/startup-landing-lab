import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:1440,height:900}});
await p.goto('file:///home/claude/r5/work/W002/index.html');
await p.evaluate(()=>scrollTo(0,1200)); await p.waitForTimeout(200);
await p.screenshot({path:'shots/after-1440-mid.png'});
await b.close();
