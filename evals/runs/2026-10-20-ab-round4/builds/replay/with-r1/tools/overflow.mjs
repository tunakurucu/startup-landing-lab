import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {pathToFileURL} from 'node:url';
const b = await chromium.launch();
for (const [w, spacing] of [[320,false],[390,true]]) {
  const p = await b.newPage({viewport:{width:w,height:844}});
  await p.goto(pathToFileURL(process.cwd()+'/index.html').href);
  if (spacing) await p.addStyleTag({content:'*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}'});
  await p.waitForTimeout(300);
  const r = await p.evaluate((w)=>{
    const out=[]; for (const el of document.querySelectorAll('body *')) { const r=el.getBoundingClientRect(); if (r.right>w+0.5 && r.width>0) out.push(el.tagName+'.'+el.className+' right='+Math.round(r.right)+' text='+(el.textContent||'').trim().slice(0,30)); }
    return {sw:document.documentElement.scrollWidth, out:out.slice(0,15)};
  }, w);
  console.log(w, spacing, r);
  await p.close();
}
await b.close();
