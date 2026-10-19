// Find Playwright and a Chromium to drive, wherever they were installed.
// Playwright is looked up from, in order: $SLD_DEPS (a folder containing node_modules), the current directory,
// and this skill folder. So `npm i --prefix /tmp/sld-deps playwright` plus `SLD_DEPS=/tmp/sld-deps` works
// without touching the project. If Playwright's own browser is missing, a system Chrome or Chromium is used:
// $CHROME_PATH first, then chromium, chromium-browser, google-chrome, google-chrome-stable on PATH.
import {createRequire} from 'node:module';
import {pathToFileURL, fileURLToPath} from 'node:url';
import {join, dirname} from 'node:path';
import {existsSync} from 'node:fs';
import {execSync} from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const bases = [process.env.SLD_DEPS, process.cwd(), here].filter(Boolean);

export class Unavailable extends Error {}

export async function load(name, {optional = false} = {}) {
  for (const base of bases) {
    try { return await import(pathToFileURL(createRequire(join(base, 'noop.js')).resolve(name)).href); } catch { /* next */ }
  }
  if (optional) return null;
  throw new Unavailable(`cannot find "${name}". Install it with: npm i --prefix /tmp/sld-deps ${name} && npx --prefix /tmp/sld-deps playwright install chromium, then set SLD_DEPS=/tmp/sld-deps`);
}

function systemChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  for (const bin of ['chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable']) {
    try { const p = execSync(`command -v ${bin}`, {stdio: ['ignore', 'pipe', 'ignore']}).toString().trim(); if (p) return p; } catch { /* next */ }
  }
  return null;
}

export async function launch() {
  const mod = await load('playwright');
  const chromium = (mod.chromium ? mod : mod.default).chromium;
  try { return await chromium.launch(); } catch (first) {
    const exe = systemChrome();
    if (exe) { try { return await chromium.launch({executablePath: exe}); } catch { /* fall through */ } }
    throw new Unavailable(String(first.message || first).split('\n')[0] + (exe ? ` (also tried ${exe})` : ' (no system Chrome found; set CHROME_PATH)'));
  }
}
