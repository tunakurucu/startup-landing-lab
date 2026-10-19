import {test,expect} from '@playwright/test';
import {execFileSync} from 'node:child_process';

// The site must pass the skill's own checker: every "fail" check clean, and no warnings either.
const routes=['/','/references','/skill','/demo/relayline','/demo/sidequest','/demo/ledger'];
for(const route of routes){
  test(`skill gate: ${route}`,async()=>{
    test.setTimeout(90000);
    const output=execFileSync(process.execPath,[
      'skills/startup-landing-design/scripts/check-page.mjs',
      `http://127.0.0.1:4173/startup-landing-lab/#${route}`
    ],{encoding:'utf8'});
    const result=JSON.parse(output);
    expect(result.failures).toEqual([]);
    expect(result.warnings).toEqual([]);
    expect(result.checks.length).toBeGreaterThanOrEqual(17);
  });
}
