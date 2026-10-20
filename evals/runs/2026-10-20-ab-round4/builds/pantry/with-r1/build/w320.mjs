import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
for (const w of [320, 390]) {
  const p = await b.newPage({viewport:{width:w,height:844}});
  await p.goto('file://' + process.cwd() + '/index.html');
  const r = await p.evaluate(() => {
    const wide = [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => el.tagName + '.' + el.className + ' ' + Math.round(el.getBoundingClientRect().right));
    return {sw: document.documentElement.scrollWidth, iw: innerWidth, wide: wide.slice(0, 8)};
  });
  console.log(w, r);
  await p.addStyleTag({content: '* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }'});
  await p.waitForTimeout(200);
  const r2 = await p.evaluate(() => {
    const wide = [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => el.tagName + '.' + el.className + ' ' + Math.round(el.getBoundingClientRect().right));
    return {sw: document.documentElement.scrollWidth, iw: innerWidth, wide: wide.slice(0, 8)};
  });
  console.log(w, 'spaced', r2);
  await p.close();
}
await b.close();
