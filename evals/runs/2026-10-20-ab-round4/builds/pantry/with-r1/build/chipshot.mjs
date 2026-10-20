import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:390,height:844}});
await p.goto('file://' + process.cwd() + '/index.html');
await p.locator('#fridge').screenshot({path: 'shots/states/390-fridge-chips.png'});
await b.close();
