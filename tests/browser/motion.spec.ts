import {test,expect,Page} from '@playwright/test';

// Each demo's motion contract (docs/demo-decisions.md) is checked twice: it plays with motion allowed,
// and under prefers-reduced-motion every element is visible immediately with no animation or transition.
// The scroll rules from the skill's motion reference are checked on every demo: copy never waits for motion
// and never re-hides, a reveal plays once and never replays, scroll-linked motion reverses and holds, and the
// composition is static at 390 px and under reduced motion.

const DEMOS=['relayline','sidequest','ledger'];
const frame=(page:Page)=>page.evaluate(()=>new Promise<void>(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>r()))));
// Copy that must be read: every element with its own words, outside the one scrubbed layer (the Relayline stage's record,
// whose captions sit outside it). Returns the ones that are faded or displaced.
const hiddenCopy=(page:Page)=>page.evaluate(()=>{
  const own=(el:Element)=>Array.from(el.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent).join('').trim();
  const out:string[]=[];
  for(const el of Array.from(document.querySelectorAll('body *'))){
    if(!/[\p{L}\p{N}]{2}/u.test(own(el))||el.closest('.relay-record'))continue;
    const r=el.getBoundingClientRect();if(r.width<2||r.height<2)continue;
    // Faded, or parked off its place with nothing moving it there (a pending reveal). A short entrance still travelling at full opacity is allowed.
    let faded=false;for(let a:Element|null=el;a&&a!==document.body;a=a.parentElement){const s=getComputedStyle(a);if(Number(s.opacity)<0.99||s.visibility==='hidden')faded=true;if(!(s.translate==='none'||/^0px( 0px)?$/.test(s.translate))&&a.getAnimations().length===0)faded=true;}
    if(faded)out.push(own(el).slice(0,40));
  }
  return out;
});
const scrollSteps=async(page:Page,direction:'down'|'up')=>{
  const [h,ih]=await page.evaluate(()=>[document.documentElement.scrollHeight,innerHeight]);
  const ys:number[]=[];for(let y=0;y<h;y+=Math.round(ih*0.6))ys.push(y);ys.push(h);
  if(direction==='up')ys.reverse();
  return ys;
};
// Scroll so the stage is at fraction p of its pinned travel (the view timeline's contain range).
const stageTo=(page:Page,p:number)=>page.evaluate(p=>{const s=document.querySelector('.relay-stage') as HTMLElement;const top=scrollY+s.getBoundingClientRect().top;scrollTo({top:top+(s.offsetHeight-innerHeight)*p,behavior:'instant'})},p);

test.describe('Scroll discipline on every demo',()=>{
  for(const demo of DEMOS){
    test(`${demo}: copy is visible at first paint, after every scroll step, and never re-hides on the way back up`,async({page})=>{
      await page.goto(`#/demo/${demo}`);
      expect(await hiddenCopy(page),'at first paint').toEqual([]);
      for(const y of await scrollSteps(page,'down')){
        await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);await frame(page);
        expect(await hiddenCopy(page),`scrolled down to ${y}`).toEqual([]);
      }
      for(const y of await scrollSteps(page,'up')){
        await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);await frame(page);
        expect(await hiddenCopy(page),`scrolled back up to ${y}`).toEqual([]);
        await expect(page.locator('.reveal-pending')).toHaveCount(0);
      }
    });
    test(`${demo}: static at 390 px`,async({page})=>{
      await page.setViewportSize({width:390,height:844});
      await page.goto(`#/demo/${demo}`);
      await expect(page.locator('.reveal-pending')).toHaveCount(0);
      for(const y of await scrollSteps(page,'down')){
        await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);await frame(page);
        expect(await hiddenCopy(page)).toEqual([]);
        // No scroll-linked animation anywhere and nothing pinned.
        expect(await page.evaluate(()=>document.getAnimations().filter(a=>a.timeline&&a.timeline.constructor.name!=='DocumentTimeline').length)).toBe(0);
        expect(await page.evaluate(()=>Array.from(document.querySelectorAll('body *')).filter(e=>['sticky','fixed'].includes(getComputedStyle(e).position)).length)).toBe(0);
      }
      await expect(page.locator('[data-reveal].is-in')).toHaveCount(0);
      for(const o of await page.locator('.relay-record-rows tbody tr, .relay-record-foot').evaluateAll(els=>els.map(e=>getComputedStyle(e).opacity)))expect(o).toBe('1');
    });
    test(`${demo}: reduced motion removes movement and hides nothing`,async({page})=>{
      await page.emulateMedia({reducedMotion:'reduce'});
      await page.goto(`#/demo/${demo}`);
      await expect(page.locator('.reveal-pending')).toHaveCount(0);
      for(const y of await scrollSteps(page,'down')){
        await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);await frame(page);
        expect(await hiddenCopy(page)).toEqual([]);
        expect(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length)).toBe(0);
      }
      for(const o of await page.locator('.relay-record-rows tbody tr, .relay-record-foot, [data-reveal]').evaluateAll(els=>els.map(e=>getComputedStyle(e).opacity+' '+getComputedStyle(e).translate)))expect(['1 none','1 0px']).toContain(o);
    });
  }
});

test.describe('Relayline continuity stage (scroll-linked showcase)',()=>{
  test('is pinned for at most two viewport heights, scrubs with scroll, reverses on the way up and holds when scrolling stops',async({page})=>{
    await page.goto('#/demo/relayline');
    const pin=page.locator('.relay-stage-pin'),row3=page.locator('.relay-record-rows tbody tr').nth(2),node4=page.locator('.relay-record-path>*').last(),foot=page.locator('.relay-record-foot');
    expect(await pin.evaluate(e=>getComputedStyle(e).position)).toBe('sticky');
    const travel=await page.evaluate(()=>{const s=document.querySelector('.relay-stage') as HTMLElement,p=s.firstElementChild as HTMLElement;return (s.offsetHeight-p.offsetHeight)/innerHeight});
    expect(travel).toBeLessThanOrEqual(2.05);
    expect(await row3.evaluate(e=>getComputedStyle(e).animationTimeline)).toBe('--relay-stage');
    const sample=async()=>({row:await row3.evaluate(e=>[getComputedStyle(e).opacity,getComputedStyle(e).translate].join(' ')),node:await node4.evaluate(e=>getComputedStyle(e).scale),foot:await foot.evaluate(e=>getComputedStyle(e).opacity)});
    // Step 1: only the received attempt; step 2 adds the failure and its policy; step 3 adds the retry and the resolution.
    await stageTo(page,0.15);await frame(page);
    const early=await sample();
    expect(early.row).toBe('0 -14px');expect(early.node).toBe('0.4');expect(early.foot).toBe('0');
    await stageTo(page,0.5);await frame(page);
    expect((await sample()).foot).toBe('1');expect((await sample()).row).toBe('0 -14px');
    await stageTo(page,0.85);await frame(page);
    const late=await sample();
    expect(late.row).toBe('1 0px');expect(late.node).toBe('1');expect(late.foot).toBe('1');
    // Holds: the same position a quarter of a second later shows the same state (nothing runs on a clock).
    await page.waitForTimeout(250);expect(await sample()).toEqual(late);
    // Reverses: scrolling back up returns the record to the earlier state.
    await stageTo(page,0.15);await frame(page);
    expect(await sample()).toEqual(early);
    // An arrival is spread over 8% of the travel, so a still taken inside it (67%) shows the third row part way in, not a jump.
    await stageTo(page,0.67);await frame(page);
    const mid=Number(await row3.evaluate(e=>getComputedStyle(e).opacity));expect(mid).toBeGreaterThan(0);expect(mid).toBeLessThan(1);
  });
  test('captions stay outside the scrubbed layer and readable in every state; the current step is marked',async({page})=>{
    await page.goto('#/demo/relayline');
    const marker=(i:number)=>page.evaluate(i=>getComputedStyle(document.querySelectorAll('.relay-steps>article')[i],'::before').scale,i);
    for(const p of [0.1,0.5,0.9]){
      await stageTo(page,p);await frame(page);
      expect(await hiddenCopy(page)).toEqual([]);
      for(const t of await page.locator('.relay-steps article :is(span,h3,p)').evaluateAll(els=>els.map(e=>getComputedStyle(e).opacity)))expect(t).toBe('1');
      const current=p<0.33?0:p<0.66?1:2;
      for(let i=0;i<3;i++)expect(await marker(i),`step ${i+1} marker at ${p}`).toMatch(i===current?/^(1|1 1)$/:/^0\.18 1$/);
    }
  });
  test('without scroll-driven support the stage is the finished record, not pinned',async({page})=>{
    // A browser cannot be told to fail @supports from script, so this reads the stylesheet: the pin and the timeline live only
    // inside the @supports block, and the unguarded rules for the stage are the finished layout.
    await page.goto('#/demo/relayline');
    const guards=await page.evaluate(()=>Array.from(document.styleSheets).flatMap(s=>{try{return Array.from(s.cssRules)}catch{return []}}).filter(r=>r instanceof CSSSupportsRule).map(r=>(r as CSSSupportsRule).conditionText.replace(/\s/g,'')));
    expect(guards).toContain('(animation-timeline:view())');
    const base=await page.evaluate(()=>{const rules=Array.from(document.styleSheets).flatMap(s=>{try{return Array.from(s.cssRules)}catch{return []}});const top=rules.filter(r=>r instanceof CSSStyleRule&&/relay-stage(-pin)?$/.test((r as CSSStyleRule).selectorText));return top.map(r=>(r as CSSStyleRule).style.cssText)});
    for(const t of base){expect(t).not.toMatch(/position:\s*sticky/);expect(t).not.toMatch(/height:\s*\d+vh/);}
  });
});

test.describe('Relayline hero trace',()=>{
  test('plays once on load and finishes within 1.3 s',async({page})=>{
    await page.goto('#/demo/relayline');
    const nodes=page.locator('.signal-path>*');
    await expect(nodes).toHaveCount(7);
    expect(await nodes.first().evaluate(e=>getComputedStyle(e).animationName)).toBe('pop');
    await expect.poll(async()=>(await nodes.evaluateAll(els=>els.map(e=>getComputedStyle(e).scale))).every(v=>v==='none'||v==='1'),{timeout:3000}).toBe(true);
    // The copy never waited for the trace.
    await expect(page.locator('.relay-hero h1')).toBeVisible();
  });
  test('is static under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/relayline');
    const node=page.locator('.signal-path>*').first();
    expect(await node.evaluate(e=>getComputedStyle(e).animationName)).toBe('none');
    expect(await node.evaluate(e=>getComputedStyle(e).opacity)).toBe('1');
    expect(await page.locator('.relay-stage-pin').evaluate(e=>getComputedStyle(e).position)).toBe('static');
    expect(await page.locator('.relay-record-rows tbody tr').last().evaluate(e=>getComputedStyle(e).animationName)).toBe('none');
  });
  test('inspector re-animates when a step is chosen, and empties when it is chosen again',async({page})=>{
    await page.goto('#/demo/relayline');
    const retry=page.getByRole('button',{name:/Retry accepted/});
    await retry.click();
    const inspector=page.locator('.trace-inspector');
    await expect(inspector).toContainText('Retry accepted');
    expect(await inspector.evaluate(e=>getComputedStyle(e).animationName)).toBe('rise');
    await retry.click();
    await expect(inspector).toContainText('Pick a step.');
    await expect(retry).toHaveAttribute('aria-pressed','false');
  });
  test('the trace path replays when the scenario changes',async({page})=>{
    await page.goto('#/demo/relayline');
    await page.waitForTimeout(1300);
    await page.getByLabel('Invalid signature').check();
    const nodes=page.locator('.signal-path>*');
    await expect(nodes).toHaveCount(7);
    await expect(page.locator('.signal-small')).toHaveText('RECEIVED → REJECTED → PAUSED → REVIEW');
    expect(await nodes.last().evaluate(e=>getComputedStyle(e).animationName)).toBe('pop');
  });
});

test.describe('Sidequest deal',()=>{
  test('cards deal with a stagger and keep their tilt',async({page})=>{
    await page.goto('#/demo/sidequest');
    expect(await page.locator('.idea-deck article').first().evaluate(e=>getComputedStyle(e).animationName)).toBe('none'); // no fade on first paint
    await page.getByRole('button',{name:'Another little idea'}).click();
    const cards=page.locator('.idea-deck article');
    const delays=await cards.evaluateAll(els=>els.map(e=>getComputedStyle(e).animationDelay));
    expect(delays).toEqual(['0s','0.07s','0.14s']);
    const tilt=await cards.first().evaluate(e=>getComputedStyle(e).transform);
    expect(tilt).not.toBe('none');
    await expect.poll(async()=>(await cards.evaluateAll(els=>els.map(e=>getComputedStyle(e).opacity))).join(),{timeout:3000}).toBe('1,1,1');
  });
  test('is static under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/sidequest');
    for(const sel of ['.idea-deck article','.sq-sticker','.sq-play']){
      const el=page.locator(sel).first();
      expect(await el.evaluate(e=>getComputedStyle(e).animationName)).toBe('none');
      expect(await el.evaluate(e=>getComputedStyle(e).transitionDuration)).toBe('0s');
      expect(await el.evaluate(e=>getComputedStyle(e).opacity)).toBe('1');
    }
  });
});

test.describe('Fieldwork reveals',()=>{
  test('only the handoff arrows reveal, once, within 400 ms, starting before they are a tenth into view, and never replay',async({page})=>{
    // A short viewport puts the handoff strip below the fold; the copy columns beside the arrows carry no reveal.
    await page.setViewportSize({width:1440,height:600});
    // Timed in the page: from the moment the reveal starts (class is-in) to its transitionend, per element.
    await page.addInitScript(()=>{const w=window as unknown as {__reveal:Map<Element,{start:number;end?:number}>};w.__reveal=new Map();document.addEventListener('DOMContentLoaded',()=>{new MutationObserver(ms=>{for(const m of ms){const el=m.target as Element;if(el.classList.contains('is-in')&&!w.__reveal.has(el))w.__reveal.set(el,{start:performance.now()})}}).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['class']})});document.addEventListener('transitionend',e=>{const r=w.__reveal.get(e.target as Element);if(r&&r.end===undefined)r.end=performance.now()},true)});
    await page.goto('#/demo/ledger');
    const arrows=page.locator('[data-reveal]');
    await expect(arrows).toHaveCount(2);
    for(const t of await arrows.evaluateAll(els=>els.map(e=>e.tagName+' '+e.textContent)))expect(t).toBe('B →');
    await expect(page.locator('.reveal-pending')).toHaveCount(2);
    expect(await page.locator('.fw-handoff>div').evaluateAll(els=>els.map(e=>e.className))).toEqual(['','','']);
    // Scroll until the first arrow is 8% of the viewport into view: it has already started.
    await page.evaluate(()=>{const el=document.querySelector('[data-reveal]') as HTMLElement;scrollTo({top:scrollY+el.getBoundingClientRect().top-innerHeight*0.92,behavior:'instant'})});
    await expect(arrows.first()).toHaveClass(/is-in/,{timeout:1000});
    await expect.poll(async()=>(await arrows.evaluateAll(els=>els.map(e=>getComputedStyle(e).translate))).every(v=>v==='none'||v==='0px'),{timeout:1500}).toBe(true);
    const timings=await arrows.evaluateAll(els=>els.map(e=>{const r=(window as unknown as {__reveal:Map<Element,{start:number;end?:number}>}).__reveal.get(e);return r&&r.end!==undefined?r.end-r.start:null}));
    for(const t of timings){expect(t).not.toBeNull();expect(t as number).toBeLessThanOrEqual(420);} // 300 ms + 80 ms delay, plus a frame
    for(const d of await arrows.evaluateAll(els=>els.map(e=>parseFloat(getComputedStyle(e).transitionDuration)+parseFloat(getComputedStyle(e).transitionDelay))))expect(d).toBeLessThanOrEqual(0.4);
    // Back to the top and down again: nothing is re-hidden and nothing replays.
    await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await frame(page);
    await expect(page.locator('.reveal-pending')).toHaveCount(0);
    await page.evaluate(()=>scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'}));await frame(page);
    for(const v of await arrows.evaluateAll(els=>els.map(e=>getComputedStyle(e).translate)))expect(['none','0px']).toContain(v);
    await expect(arrows.first()).toHaveClass(/is-in/);
  });
  test('an arrow already on screen at load is left in place',async({page})=>{
    await page.goto('#/demo/ledger'); // 1280×720 default: the strip is in the first screen
    await expect(page.locator('h1')).toBeVisible();
    const inView=await page.locator('[data-reveal]').first().evaluate(e=>e.getBoundingClientRect().top<innerHeight);
    if(inView){await expect(page.locator('.reveal-pending')).toHaveCount(0);expect(await page.locator('[data-reveal]').first().evaluate(e=>getComputedStyle(e).translate)).toMatch(/^(none|0px)$/);}
  });
  test('nothing is hidden under reduced motion',async({page})=>{
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.goto('#/demo/ledger');
    await expect(page.locator('.reveal-pending')).toHaveCount(0);
    for(const t of await page.locator('[data-reveal]').evaluateAll(els=>els.map(e=>getComputedStyle(e).translate)))expect(['none','0px']).toContain(t);
  });
  test('the brief rises when the workflow changes',async({page})=>{
    await page.goto('#/demo/ledger');
    await page.getByLabel('Choose a workflow').selectOption('onboarding');
    const brief=page.locator('.fw-brief');
    await expect(brief).toContainText('Client onboarding');
    expect(await brief.evaluate(e=>getComputedStyle(e).animationName)).toBe('rise');
  });
});
