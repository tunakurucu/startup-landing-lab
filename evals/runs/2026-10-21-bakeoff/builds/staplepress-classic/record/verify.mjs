import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import fs from 'fs';
const dir='/home/claude/bk/work/staplepress-classic';
const url='file://'+dir+'/index.html';
const axe=fs.readFileSync('/home/claude/r3/deps/node_modules/axe-core/axe.min.js','utf8');
const browser=await chromium.launch();
for (const [name,vp] of [['desktop',{width:1440,height:900}],['tablet',{width:820,height:1180}],['mobile',{width:390,height:844}],['small',{width:320,height:640}]]) {
  const ctx=await browser.newContext({viewport:vp, deviceScaleFactor: name==='desktop'?1:2});
  const page=await ctx.newPage();
  const errs=[], reqs=[];
  page.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  page.on('pageerror',e=>errs.push(e.message));
  page.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith('data:'))reqs.push(r.url())});
  await page.goto(url);
  await page.waitForTimeout(1500);
  await page.screenshot({path:`${dir}/record/shots/${name}-fold.png`});
  // scroll through to trigger reveals
  const h=await page.evaluate(()=>document.body.scrollHeight);
  for(let y=0;y<h;y+=vp.height/2){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(120);}
  await page.waitForTimeout(1300);
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(300);
  await page.screenshot({path:`${dir}/record/shots/${name}-full.png`,fullPage:true});
  const info=await page.evaluate(()=>{
    const over=[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>window.innerWidth+1&&getComputedStyle(e).position!=='fixed'}).map(e=>e.tagName+'.'+e.className).slice(0,10);
    const hidden=[...document.querySelectorAll('.reveal')].filter(e=>!e.classList.contains('in')).length;
    return {sw:document.documentElement.scrollWidth, iw:window.innerWidth, over, hidden};
  });
  // fonts
  const cdp=await ctx.newCDPSession(page);
  await cdp.send('DOM.enable');await cdp.send('CSS.enable');
  const {root}=await cdp.send('DOM.getDocument',{depth:-1});
  const fonts=new Set();
  for(const sel of ['h1 .line','.lede','.eyebrow','.btn','.ticket dl','.spec th','.price-big','.foot','.step h3']){
    const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:sel});
    if(!nodeId) continue;
    const {nodeId:tn}=await cdp.send('DOM.querySelector',{nodeId,selector:'*'}).catch(()=>({nodeId:0}));
    const r=await cdp.send('CSS.getPlatformFontsForNode',{nodeId}).catch(()=>({fonts:[]}));
    r.fonts.forEach(f=>fonts.add(sel+' => '+f.familyName));
  }
  let menu='n/a';
  if(await page.locator('.burger').isVisible()){
    await page.click('.burger'); await page.waitForTimeout(1200);
    await page.screenshot({path:`${dir}/record/shots/${name}-menu.png`});
    const exp=await page.getAttribute('.burger','aria-expanded');
    await page.keyboard.press('Escape'); await page.waitForTimeout(800);
    menu=`opened aria-expanded=${exp}; after Esc=${await page.getAttribute('.burger','aria-expanded')}`;
  }
  await page.addScriptTag({content:axe});
  const ax=await page.evaluate(async()=>{const r=await axe.run(document,{resultTypes:['violations']});return r.violations.map(v=>v.id+'('+v.impact+'):'+v.nodes.length+' '+v.nodes.slice(0,3).map(n=>n.target.join(' ')).join(' | '))});
  console.log(JSON.stringify({name,...info,errs,reqs,fonts:[...fonts],menu,axe:ax},null,1));
  await ctx.close();
}
// reduced motion + no-JS
const c2=await browser.newContext({viewport:{width:1280,height:800},javaScriptEnabled:false});
const p2=await c2.newPage(); await p2.goto(url); await p2.screenshot({path:`${dir}/record/shots/nojs-full.png`,fullPage:true});
console.log('nojs ok');
await browser.close();
