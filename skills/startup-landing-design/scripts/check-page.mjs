import {chromium} from 'playwright';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const input=process.argv[2];
if (!input) { console.error('usage: check-page.mjs <url-or-html>'); process.exit(2); }
const url=/^https?:\/\//.test(input)?input:pathToFileURL(resolve(input)).href;
const browser=await chromium.launch();
const failures=[];
const findings={target:url,checks:[],failures};
try {
  const page=await browser.newPage({viewport:{width:390,height:844}});
  await page.goto(url,{waitUntil:'networkidle',timeout:15000});
  await page.locator('h1').first().waitFor({state:'attached',timeout:5000}).catch(()=>{
    throw new Error('Timed out waiting for h1 after networkidle; the route did not render.');
  });
  const result=await page.evaluate(()=>{
    const all=[...document.querySelectorAll('*')];
    const headings=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')];
    const families=[...new Set([document.body, ...headings, ...document.querySelectorAll('code,nav,button')].map(el=>getComputedStyle(el).fontFamily.split(',')[0].replace(/['"]/g,'').trim()).filter(Boolean))];
    const accessibleName=el=>el.getAttribute('aria-label')?.trim()||el.getAttribute('title')?.trim()||el.innerText?.trim()||el.querySelector('img[alt]')?.getAttribute('alt')?.trim()||'';
    const nameless=all.filter(el=>el.matches('a,button') && !accessibleName(el)).map(el=>el.outerHTML.slice(0,160));
    const badLinks=[...document.querySelectorAll('a')].filter(a=>{
      const h=a.getAttribute('href');
      if(!h||h==='#') return true;
      if(h.startsWith('#/')) return false; // Valid client-side route, not an in-document anchor.
      if(h.startsWith('#')) return !document.getElementById(h.slice(1));
      return !/^(https?:\/\/|mailto:|tel:|\/)/.test(h);
    }).map(a=>a.outerHTML.slice(0,160));
    const levels=headings.map(h=>Number(h.tagName[1]));
    const skips=levels.flatMap((level,i)=>i && level>levels[i-1]+1?[`${levels[i-1]}→${level}`]:[]);
    const styles=[...document.querySelectorAll('style')].map(x=>x.textContent).join(' ');
    let hasReduced=styles.includes('prefers-reduced-motion');
    for(const sheet of document.styleSheets){
      try {if([...sheet.cssRules].some(rule=>rule.cssText.includes('prefers-reduced-motion'))) hasReduced=true;}catch{} // Cross-origin CSS is not inspectable.
    }
    return {h1:document.querySelectorAll('h1').length,families,hasReduced,overflow:document.documentElement.scrollWidth>innerWidth+1,nameless,badLinks,skips};
  });
  const assert=(name,ok,detail)=>{findings.checks.push({name,pass:ok,detail});if(!ok)failures.push(name);};
  assert('one_h1',result.h1===1,result.h1);
  const generic=new Set(['Arial','Helvetica','Georgia','Times','Times New Roman','Courier','Courier New']);
  assert('type_system',result.families.length>=2 && result.families.some(x=>!generic.has(x)),result.families);
  assert('reduced_motion_rule',result.hasReduced,result.hasReduced);
  assert('no_overflow_390',!result.overflow,result.overflow);
  assert('named_controls',!result.nameless.length,result.nameless);
  assert('valid_links',!result.badLinks.length,result.badLinks);
  assert('heading_order',!result.skips.length,result.skips);
  await page.close();
} catch(error) { failures.push('runtime'); findings.error=String(error); }
finally { await browser.close(); }
console.log(JSON.stringify(findings,null,2));
if(failures.length) process.exitCode=1;
