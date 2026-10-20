import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {pathToFileURL} from 'node:url';
const b = await chromium.launch();
const shots = [['tools/og.html',1200,630,'assets/og.png'],['tools/icon.html',180,180,'assets/apple-touch-icon.png']];
for (const [src,w,h,out] of shots) {
  const p = await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});
  await p.goto(pathToFileURL(new URL(src, import.meta.url).pathname.replace('/tools/tools/','/tools/')).href);
  await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
  await p.screenshot({path:out}); await p.close();
}
await b.close(); console.log('ok');
