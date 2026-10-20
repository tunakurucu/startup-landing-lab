import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b = await chromium.launch();
for (const w of [390, 1440]) {
  const p = await b.newPage({viewport:{width:w,height:w===390?844:900}});
  await p.goto('file:///home/claude/r5/work/W002/index.html');
  const r = await p.evaluate(() => [...document.querySelectorAll('header, main > section, footer, [data-signature], .chips, .lines, .kit, .letter')].map(el => `${el.tagName.toLowerCase()}#${el.id||el.className.split(' ')[0]} top=${Math.round(el.getBoundingClientRect().top+scrollY)} h=${Math.round(el.getBoundingClientRect().height)}`));
  console.log(w, r.join('\n'), '\ntotal', await p.evaluate(()=>document.documentElement.scrollHeight));
}
await b.close();
