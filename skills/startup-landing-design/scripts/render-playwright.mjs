import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const [url, out] = process.argv.slice(2);
if (!url || !out) { console.error('usage: render-playwright.mjs <url> <out-dir>'); process.exit(2); }
await mkdir(out, {recursive:true});
const browser = await chromium.launch();
try {
  for (const [width,height] of [[1440,900],[768,1024],[390,844]]) {
    const page = await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.evaluate(async () => {
      const step = Math.max(400, innerHeight);
      for (let y=0; y<document.documentElement.scrollHeight; y+=step) {
        scrollTo(0,y);
        await new Promise(requestAnimationFrame);
      }
      scrollTo(0,0);
    });
    await page.screenshot({path:resolve(out,`${width}.png`),fullPage:true,animations:'disabled'});
    await page.close();
  }
} finally { await browser.close(); }
