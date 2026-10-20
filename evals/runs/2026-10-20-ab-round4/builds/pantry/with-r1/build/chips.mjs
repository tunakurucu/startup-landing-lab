import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
for (const w of [320, 360, 390, 430]) {
  const p = await b.newPage({viewport:{width:w,height:844}});
  await p.goto('file://' + process.cwd() + '/index.html');
  const r = await p.evaluate(() => {
    const bad = [];
    for (const body of document.querySelectorAll('.chip-body')) {
      const span = body.querySelector('span');
      const range = document.createRange(); range.selectNodeContents(span);
      const rects = [...range.getClientRects()];
      // a word broken mid-way shows as a rect whose text is a fragment; detect overflow instead
      if (span.scrollWidth > span.clientWidth + 1) bad.push(span.textContent + ' overflows');
      const words = span.textContent.split(' ');
      const lines = new Set(rects.map(r => Math.round(r.top))).size;
      if (lines > words.length) bad.push(span.textContent + ' breaks mid-word');
    }
    return {sw: document.documentElement.scrollWidth, bad};
  });
  console.log(w, r);
  await p.close();
}
await b.close();
