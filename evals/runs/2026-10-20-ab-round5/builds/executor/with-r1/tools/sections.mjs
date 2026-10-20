import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:390,height:844}});
await p.goto('file:///home/claude/r5/work/W002/index.html');
for (const id of ['needs','letters','scope','standing']) await p.locator('#'+id).screenshot({path:`shots/state-390-${id}.png`});
await p.locator('footer').screenshot({path:'shots/state-390-footer.png'});
await b.close();
