// Neutral renderer and mechanical probe, run by the operator on BOTH pages of every packet.
// It is not the skill's checker: it only gathers facts the hard-fail adjudicator and the engineer persona need.
//
// Usage: NODE_PATH=<dir containing playwright[, @axe-core/playwright]> node probe.cjs <file-or-url> <out-dir>
// Writes <out-dir>/{1440,768,390}-top.png, {1440,768,390}.png, 320-top.png and <out-dir>/probe.json.
// Requests to anything other than file:, data:, blob:, 127.0.0.1 and localhost are blocked (offline delivery).
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const [, , target, out] = process.argv;
if (!target || !out) { console.error('usage: node probe.cjs <file-or-url> <out-dir>'); process.exit(2); }
const url = /^https?:|^file:/.test(target) ? target : 'file://' + path.resolve(target);
fs.mkdirSync(out, { recursive: true });
const local = (u) => /^(file:|data:|blob:|about:)/.test(u) || /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?\//.test(u);

let axeBuilder = null;
try { axeBuilder = require('@axe-core/playwright').default; } catch { /* reported as unavailable */ }

(async () => {
  const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  const report = { url, chromium: browser.version(), widths: {} };
  for (const [w, h] of [[1440, 900], [768, 1024], [390, 844], [320, 640]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    const r = { console_errors: [], page_errors: [], blocked_requests: [], failed_requests: [] };
    await ctx.route('**/*', (route) => (local(route.request().url()) ? route.continue() : (r.blocked_requests.push(route.request().url()), route.abort())));
    page.on('console', (m) => { if (m.type() === 'error') r.console_errors.push(m.text()); });
    page.on('pageerror', (e) => r.page_errors.push(String(e)));
    page.on('requestfailed', (q) => { if (local(q.url())) r.failed_requests.push(q.url()); });
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(1500);
    } catch (e) { r.load_error = String(e); }
    Object.assign(r, await page.evaluate(() => {
      const vw = window.innerWidth;
      const h1 = document.querySelector('h1');
      const box = h1 ? h1.getBoundingClientRect() : null;
      let smallest = Infinity, under12 = 0;
      const seen = new Set();
      const walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const el = walker.currentNode.parentElement;
        if (!el || seen.has(el) || !walker.currentNode.textContent.trim()) continue;
        seen.add(el);
        const cs = getComputedStyle(el), rect = el.getBoundingClientRect();
        if (cs.visibility === 'hidden' || cs.display === 'none' || rect.width === 0 || rect.height === 0) continue;
        const fs = parseFloat(cs.fontSize);
        smallest = Math.min(smallest, fs);
        if (fs < 12) under12 += 1;
      }
      return {
        horizontal_overflow_px: document.documentElement.scrollWidth - vw,
        h1: h1 ? { text: h1.textContent.trim().slice(0, 160), left: Math.round(box.left), right: Math.round(box.right), top: Math.round(box.top), bottom: Math.round(box.bottom), within_viewport_x: box.left >= 0 && box.right <= vw + 1 } : null,
        smallest_text_px: smallest === Infinity ? null : smallest,
        text_elements_under_12px: under12,
        body_text_length: (document.body ? document.body.innerText : '').trim().length,
      };
    }));
    if (w !== 320) {
      await page.screenshot({ path: `${out}/${w}-top.png` });
      await page.screenshot({ path: `${out}/${w}.png`, fullPage: true });
    } else {
      await page.screenshot({ path: `${out}/320-top.png` });
    }
    // Copy the page's own errors before axe runs, so the page is never blamed for requests axe makes.
    const frozen = { console_errors: [...r.console_errors], page_errors: [...r.page_errors], failed_requests: [...r.failed_requests] };
    if (w === 1440 || w === 390) {
      if (!axeBuilder) {
        r.axe = 'unavailable: @axe-core/playwright not found on NODE_PATH';
      } else {
        try {
          const res = await new axeBuilder({ page }).options({ preload: false }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
          r.axe = res.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length }));
        } catch (e) { r.axe = `unavailable: ${String(e).split('\n')[0]}`; }
      }
    }
    Object.assign(r, frozen);
    report.widths[w] = r;
    await ctx.close();
  }
  fs.writeFileSync(`${out}/probe.json`, JSON.stringify(report, null, 1) + '\n');
  await browser.close();
  console.log(`probe written to ${out}/probe.json`);
})().catch((e) => { console.error(e); process.exit(1); });
