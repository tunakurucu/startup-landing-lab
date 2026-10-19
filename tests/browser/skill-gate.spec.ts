import {test,expect} from '@playwright/test';
import {execFileSync} from 'node:child_process';

// The site must pass the skill's own 64 automatic checks. Block failures are never allowed.
// Warnings are allowed only where docs/demo-decisions.md records the product reason ("Gate warnings we kept").
const KEPT:Record<string,string[]>={
  '/demo/relayline':['TY-12'],
  '/demo/sidequest':['TT-03','MO-06'],
  '/demo/ledger':['CO-05','TT-03'],
};
const routes=['/','/references','/skill','/demos','/reference/resend','/demo/relayline','/demo/sidequest','/demo/ledger'];
for(const route of routes){
  test(`skill gate: ${route}`,async()=>{
    test.setTimeout(120000);
    const result=JSON.parse(execFileSync(process.execPath,['skills/startup-landing-design/scripts/check-page.mjs',`http://127.0.0.1:4173/startup-landing-lab/#${route}`],{encoding:'utf8'}));
    expect(result.checks).toHaveLength(64);
    expect(result.failures).toEqual([]);
    expect(result.not_run).toEqual([]);
    expect(result.warnings.sort()).toEqual((KEPT[route]??[]).sort());
  });
}
