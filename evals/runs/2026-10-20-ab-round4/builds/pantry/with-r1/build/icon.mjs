import {chromium} from '/home/claude/r3/deps/node_modules/playwright/index.mjs';
import {readFileSync} from 'node:fs';
const svg = readFileSync(new URL('../favicon.svg', import.meta.url), 'utf8');
const b = await chromium.launch();
const p = await b.newPage({viewport: {width: 180, height: 180}});
await p.setContent(`<html><body style="margin:0">${svg.replace('<svg ', '<svg width="180" height="180" ')}</body></html>`);
await p.screenshot({path: new URL('../apple-touch-icon.png', import.meta.url).pathname, clip: {x: 0, y: 0, width: 180, height: 180}});
await b.close();
console.log('icon written');
