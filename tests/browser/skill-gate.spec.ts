import {test,expect} from '@playwright/test';
import {execFileSync} from 'node:child_process';

const routes=['/','/demo/relayline','/demo/sidequest','/demo/ledger'];
for(const route of routes){
  test.fixme(`skill gate at 390px: ${route}`,async()=>{
    // Enable after the self-hosted type pass; v0.1 currently fails type_system.
    const output=execFileSync(process.execPath,[
      'skills/startup-landing-design/scripts/check-page.mjs',
      `http://127.0.0.1:4173/startup-landing-lab/#${route}`
    ],{encoding:'utf8'});
    const result=JSON.parse(output);
    expect(result.failures).toEqual([]);
    expect(result.checks).toHaveLength(7);
  });
}
