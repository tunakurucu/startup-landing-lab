import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
const b=await chromium.launch();
for (const w of [1440,1100,768,600,390,320]) {
  const p=await b.newPage({viewport:{width:w,height:900}});
  await p.goto('file:///home/claude/r3/work/W014/index.html');
  const lines=await p.evaluate(()=>{const h=document.querySelector('h1');const r=document.createRange();const out=[];for(const n of h.childNodes){if(n.nodeType!==3)continue;const t=n.textContent;let last=null;for(let i=0;i<t.length;i++){r.setStart(n,i);r.setEnd(n,i+1);const rect=r.getBoundingClientRect();if(!rect.width)continue;if(last===null||Math.abs(rect.top-last)>3){out.push('');last=rect.top;}out[out.length-1]+=t[i];}}return out.map(l=>l.trim());});
  console.log(w,JSON.stringify(lines));
  await p.close();
}
await b.close();
