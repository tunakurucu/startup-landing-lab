// Render a page at 1440x900, 768x1024 and 390x844. For each width it saves <width>-top.png (the first screen,
// for legibility) and <width>.png (full page, for pacing). Waits for fonts and lets motion settle first, so the
// screenshots show the finished state. Usage: node render-playwright.mjs <url> <out-dir>
import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
import {statSync} from 'node:fs';
import {resolve} from 'node:path';

const [url, out] = process.argv.slice(2);
if (!url || !out) { console.error('usage: render-playwright.mjs <url> <out-dir>'); process.exit(2); }
await mkdir(out, {recursive: true});
const browser = await chromium.launch();
let tiny = 0;
try {
  for (const [width, height] of [[1440, 900], [768, 1024], [390, 844]]) {
    const page = await browser.newPage({viewport: {width, height}, deviceScaleFactor: 1});
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    await page.waitForLoadState('networkidle', {timeout: 10000}).catch(() => {});
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200);
    const top = resolve(out, `${width}-top.png`);
    await page.screenshot({path: top});
    // Scroll through once so scroll-triggered content has rendered, then capture the whole page.
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); }
      scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const full = resolve(out, `${width}.png`);
    await page.screenshot({path: full, fullPage: true});
    for (const f of [top, full]) { const kb = Math.round(statSync(f).size / 1024); console.log(`${f} ${kb} KB`); if (kb < 8) tiny++; }
    await page.close();
  }
} finally { await browser.close(); }
if (tiny) { console.error(`${tiny} screenshot(s) under 8 KB: probably blank. Open them before using them as evidence.`); process.exit(1); }
