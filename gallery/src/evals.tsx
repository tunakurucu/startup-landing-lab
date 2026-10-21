import r1key from '../../evals/runs/2026-10-19-ab-round1/mapping.json';
import r1queue from '../../evals/runs/2026-10-19-ab-round1/queue-grade.json';
import r1gift from '../../evals/runs/2026-10-19-ab-round1/gift-grade.json';
import r1renewal from '../../evals/runs/2026-10-19-ab-round1/renewal-grade.json';
import r1checks from '../../evals/runs/2026-10-19-ab-round1/checker.json';
import r2key from '../../evals/runs/2026-10-19-ab-round2/mapping.json';
import r2queue from '../../evals/runs/2026-10-19-ab-round2/queue-grade.json';
import r2gift from '../../evals/runs/2026-10-19-ab-round2/gift-grade.json';
import r2renewal from '../../evals/runs/2026-10-19-ab-round2/renewal-grade.json';
import r2practice from '../../evals/runs/2026-10-19-ab-round2/practice-grade.json';
import r2checks from '../../evals/runs/2026-10-19-ab-round2/checker.json';
import t3 from '../../evals/runs/2026-10-20-ab-round3/results/results.json';
import t4 from '../../evals/runs/2026-10-20-ab-round4/results/results.json';
import t5 from '../../evals/runs/2026-10-20-ab-round5/results/results.json';
import t6 from '../../evals/runs/2026-10-20-ab-round6/results/results.json';
import t7 from '../../evals/runs/2026-10-20-ab-round7/results/results.json';
import t8 from '../../evals/runs/2026-10-20-ab-round8/results/results.json';
import xfam from '../../evals/runs/2026-10-20-xfam/rows.json';

/* Every number on this page is computed at build time from the committed run files: each grader's scores,
   the blind A/B key (mapping.json: "with" or "with2" is the skill page, "without" the other) and the skill's checker output. */
type Scores=Record<string,number>;
type Grade={A:{scores:Scores};B:{scores:Scores};preference:string;confidence:string};
type Key=Record<string,Record<'A'|'B',string>>;
type Checks=Record<string,{summary:string;failures:string[]}>;
type Pair={brief:string;preferred:'with'|'without';with:Scores;without:Scores;withTotal:number;withoutTotal:number;confidence:string};
type Round={n:number;commit:string;folder:string;pairs:Pair[];checks:Checks};

const repo='https://github.com/tunakurucu/startup-landing-lab';
const runs=repo+'/tree/main/evals/runs/';
const sum=(s:Scores)=>Object.values(s).reduce((a,b)=>a+b,0);
function pairs(key:Key,grades:Record<string,Grade>):Pair[]{
  return Object.keys(key).map(brief=>{
    const g=grades[brief],k=key[brief];
    const w=k.A==='without'?'B':'A',wo=w==='A'?'B':'A';
    if(!g||k[w]==='without'||k[wo]!=='without'||!['A','B'].includes(g.preference))throw new Error(`Eval data for ${brief}: the key needs one skill page and one without, and a preference of A or B`);
    return {brief,preferred:g.preference===w?'with':'without',with:g[w].scores,without:g[wo].scores,withTotal:sum(g[w].scores),withoutTotal:sum(g[wo].scores),confidence:g.confidence};
  });
}
const round1:Round={n:1,commit:'ec80c9c',folder:'2026-10-19-ab-round1',pairs:pairs(r1key,{queue:r1queue,gift:r1gift,renewal:r1renewal}),checks:r1checks};
const round2:Round={n:2,commit:'b94f92d',folder:'2026-10-19-ab-round2',pairs:pairs(r2key,{queue:r2queue,gift:r2gift,renewal:r2renewal,practice:r2practice}),checks:r2checks};
const rounds=[round1,round2];

const BRIEFS:Record<string,{brand:string;topic:string}>={queue:{brand:'Drumbeat',topic:'background jobs for Node'},gift:{brand:'Poolday',topic:'a gift among friends'},renewal:{brand:'Ledgerlight',topic:'contract renewals'},practice:{brand:'Halfstep',topic:'piano practice'}};
const holdout=(brief:string)=>!round1.pairs.some(p=>p.brief===brief);
const CRITERIA=Object.keys(round1.pairs[0].with);
const OUT_OF=CRITERIA.length*10;

/* Rounds 3 to 8: three graders per pair (designer, buyer, engineer), ten criteria out of 100, tallied by
   evals/round3/scripts/tally.py into each run's results/results.json. */
type Tally={tests:{brief_level:{wins:number;ties:number;losses:number;p_two_sided:number}};brief_verdicts:Record<string,string>;persona:Record<string,{prefers_with:number;prefers_without:number;mean_total_with:number;mean_total_without:number}>};
type Later={n:number;version:string;commit:string;folder:string;what:string;tally:Tally};
const later:Later[]=[
  {n:3,version:'v0.4',commit:'1bd8387',folder:'2026-10-20-ab-round3',what:'Twelve new briefs, the first pre-registered round with three graders and adjudicated hard fails.',tally:t3},
  {n:4,version:'v0.5',commit:'80d59dc',folder:'2026-10-20-ab-round4',what:'A written design statement before building.',tally:t4},
  {n:5,version:'v0.6',commit:'51cd338',folder:'2026-10-20-ab-round5',what:'Eleven checks that operate the product demo on a phone. Target 87.',tally:t5},
  {n:6,version:'v0.7',commit:'2492853',folder:'2026-10-20-ab-round6',what:'A second demo for whoever pays, length caps on phones. Target 87.',tally:t6},
  {n:7,version:'v0.8',commit:'8861cb2',folder:'2026-10-20-ab-round7',what:'Round 6’s skill pages rebuilt on the graders’ notes, against the same pages without it. Target 91.',tally:t7},
  {n:8,version:'v0.9',commit:'925ee3e',folder:'2026-10-20-ab-round8',what:'The builder reviews its own page as the graders would. Four briefs never used for tuning. Target 91.',tally:t8},
];
const personas=(t:Tally)=>Object.values(t.persona);
const mean=(xs:number[])=>xs.reduce((a,b)=>a+b,0)/xs.length;
const withMean=(t:Tally)=>mean(personas(t).map(p=>p.mean_total_with));
const withoutMean=(t:Tally)=>mean(personas(t).map(p=>p.mean_total_without));
const runsFor=(t:Tally)=>personas(t).reduce((n,p)=>n+p.prefers_with,0);
const runsAll=(t:Tally)=>personas(t).reduce((n,p)=>n+p.prefers_with+p.prefers_without,0);
const one=(n:number)=>n.toFixed(1);
const span=(xs:number[])=>`${Math.round(Math.min(...xs))}–${Math.round(Math.max(...xs))}`;
const recent=later.filter(r=>r.n>=5);
const laterBriefs=new Set(later.flatMap(r=>Object.keys(r.tally.brief_verdicts))).size;
const laterWins=later.reduce((n,r)=>n+r.tally.tests.brief_level.wins,0);
const laterCount=later.reduce((n,r)=>n+Object.keys(r.tally.brief_verdicts).length,0);
type XRow={gpt_pref:string;cl_pref:string};
const xRows=xfam as XRow[];
const xFor=xRows.filter(r=>r.gpt_pref==='with').length;
const xAgree=xRows.filter(r=>r.gpt_pref===r.cl_pref).length;

function LaterTable(){
  return <div className="table-scroll" role="region" aria-label="Rounds 3 to 8 results" tabIndex={0}><table className="measure-table result-table later-table">
    <caption>Rounds 3 to 8: briefs won, grader runs preferring the skill page, and mean totals out of 100</caption>
    <thead><tr><th scope="col">Round</th><th scope="col">What changed</th><th scope="col">Briefs won / tied / lost</th><th scope="col">Graders for skill page</th><th scope="col">With skill /100</th><th scope="col">Without /100</th></tr></thead>
    <tbody>{later.map(r=>{const b=r.tally.tests.brief_level;return <tr key={r.n}>
      <th scope="row">{r.n}<span className="brief-key">{r.version} · {r.commit}</span></th>
      <td>{r.what}</td>
      <td>{b.wins} / {b.ties} / {b.losses}</td>
      <td>{runsFor(r.tally)} of {runsAll(r.tally)}</td>
      <td><strong className="won">{one(withMean(r.tally))}</strong></td>
      <td>{one(withoutMean(r.tally))}</td>
    </tr>})}</tbody>
  </table></div>
}
const WORDS=['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const word=(n:number)=>WORDS[n]??String(n);
const cap=(s:string)=>s[0].toUpperCase()+s.slice(1);
const list=(xs:string[])=>xs.length<2?xs.join(''):xs.slice(0,-1).join(', ')+' and '+xs[xs.length-1];
const range=(xs:number[])=>{const a=Math.min(...xs),b=Math.max(...xs);return a===b?String(a):`${a} to ${b}`};
const signed=(n:number)=>n>0?'+'+n:n<0?'−'+Math.abs(n):'0';
const wins=(r:Round)=>r.pairs.filter(p=>p.preferred==='with').length;
const pair=(r:Round,brief:string)=>r.pairs.find(p=>p.brief===brief)!;
const lowerOn=(r:Round,c:string)=>r.pairs.filter(p=>p.with[c]<p.without[c]).length;
const critSum=(r:Round,c:string)=>({w:r.pairs.reduce((n,p)=>n+p.with[c],0),wo:r.pairs.reduce((n,p)=>n+p.without[c],0)});
const pairCount=rounds.reduce((n,r)=>n+r.pairs.length,0);
const briefCount=new Set(rounds.flatMap(r=>r.pairs.map(p=>p.brief))).size;
const confidences=[...new Set(rounds.flatMap(r=>r.pairs.map(p=>p.confidence)))];
const allChecks=Object.entries({...round1.checks,...round2.checks});
const checkCount=Number(allChecks[0][1].summary.match(/of (\d+) automatic/)?.[1]);
const blockFailures=(skill:boolean)=>allChecks.filter(([k])=>k.endsWith('-without')!==skill).map(([,v])=>v.failures.length);
const repeated=round2.pairs.filter(p=>!holdout(p.brief)).map(p=>({brief:p.brief,before:pair(round1,p.brief).withoutTotal,after:p.withoutTotal}));
const drift=Math.max(...repeated.map(x=>Math.abs(x.before-x.after)));

const SHOTS:Record<string,string>={
  'round1-queue':'Drumbeat, round 1. Left, without the skill: a cream page headed “Know where every background job is.” beside a static job log card, with an npm install command under the headline. Right, with the skill: a grey page headed “Get slow work out of the request. Know where it went.” with a step-by-step job timeline and scenario buttons, and no install command. Both at desktop and phone width.',
  'round1-gift':'Poolday, round 1. Left, without the skill: a cream page with the serif headline “One good gift, from all of you.” beside a static example gift tag for Ama’s 30th. Right, with the skill: a dark plum page headed “Go in on one gift, together.” with a large gift tag for Maya that a visitor can sign, and “What’s not decided” in the navigation. Both at desktop and phone width.',
  'round1-renewal':'Ledgerlight, round 1. Left, without the skill: a beige page headed “Decide before the contract renews itself.” beside a sample contract card. Right, with the skill: a light grey page headed “Know who decides each renewal, and by when.” with a four-step renewal record showing the owner, the notice deadline and a timeline. Both at desktop and phone width.',
  'round2-queue':'Drumbeat, round 2. Left, the unchanged page without the skill. Right, the rebuilt skill page headed “Follow every job from enqueue to its last retry.” with a Read the docs button, a copyable npm install command and a simulated job trace with three failure scenarios. Both at desktop and phone width.',
  'round2-gift':'Poolday, round 2. Left, the unchanged page without the skill. Right, the rebuilt skill page on deep plum, headed “One present, from all of you.” with a sample pool for a six-week wheel-throwing class, a progress bar, friends’ notes and a form to add your share. Both at desktop and phone width.',
  'round2-renewal':'Ledgerlight, round 2. Left, the unchanged page without the skill. Right, the rebuilt skill page on pale green, headed “No contract renews without a decision.” with a sample services agreement showing its owner, notice deadline, next decision, a timeline and a review trail. Both at desktop and phone width.',
  'round2-practice':'Halfstep, the holdout brief. Left, without the skill: a cream page headed “Play it through once. Practise the bars that need it.” beside an illustrated phone. Right, with the skill: a pale page headed “Practise the bars that need it, at a speed that feels easy.” with a sample score where three passages are circled and tempo steps to choose from. Both at desktop and phone width.',
};

function Verdict({p,lower=false}:{p:Pair;lower?:boolean}){const [a,b]=p.preferred==='with'?[p.withTotal,p.withoutTotal]:[p.withoutTotal,p.withTotal];const text=p.preferred==='with'?'Skill page preferred':'No-skill page preferred';return <>{lower?text.toLowerCase():text}, {a} to {b}.</>}
function BriefName({brief}:{brief:string}){return <>{BRIEFS[brief].brand}<span className="brief-key">{brief}{holdout(brief)?' · holdout':''}</span></>}
function Score({value,won}:{value:number;won:boolean}){return won?<strong className="won">{value}</strong>:<>{value}</>}

function ResultTable({round}:{round:Round}){
  return <div className="table-scroll" role="region" aria-label={`Round ${round.n} results`} tabIndex={0}><table className="measure-table result-table">
    <caption>Round {round.n}: blind preference and totals out of {OUT_OF}</caption>
    <thead><tr><th scope="col">Brief</th><th scope="col">{'Prefer\u00ADred'}</th><th scope="col">With skill /{OUT_OF}</th><th scope="col">Without /{OUT_OF}</th><th scope="col">{'Confi\u00ADdence'}</th></tr></thead>
    <tbody>{round.pairs.map(p=><tr key={p.brief}>
      <th scope="row"><BriefName brief={p.brief}/></th>
      <td>{p.preferred==='with'?'With skill':'Without'}</td>
      <td><Score value={p.withTotal} won={p.preferred==='with'}/></td>
      <td><Score value={p.withoutTotal} won={p.preferred==='without'}/></td>
      <td>{cap(p.confidence)}</td>
    </tr>)}</tbody>
  </table></div>
}

function Comparisons({round}:{round:Round}){
  return <div className="compare-list">{round.pairs.map((p,i)=>{const file=`evals/round${round.n}-${p.brief}`;return <figure className="compare" key={p.brief}>
    <img src={file+'.jpg'} srcSet={`${file}-1600.jpg 1600w, ${file}.jpg 3064w`} sizes="(min-width: 1600px) 1440px, 90vw" width={3064} height={780} loading="lazy" decoding="async" alt={SHOTS[`round${round.n}-${p.brief}`]}/>
    <figcaption><span className="mono">{String(i+1).padStart(2,'0')} / {BRIEFS[p.brief].brand}, {BRIEFS[p.brief].topic}{holdout(p.brief)?' (holdout)':''}</span><span><Verdict p={p}/></span><a className="text-link" href={file+'.jpg'}>Full-size image<span className="visually-hidden">: {BRIEFS[p.brief].brand}, round {round.n}</span> ↗</a></figcaption>
  </figure>})}</div>
}

function CriteriaBoard({round}:{round:Round}){
  const max=round.pairs.length*10;
  const rows=CRITERIA.map(c=>({c,...critSum(round,c)}));
  const behind=rows.filter(r=>r.w<r.wo).map(r=>r.c),ahead=rows.filter(r=>r.w>r.wo);
  const pct=(v:number)=>`${(v/max)*100}%`;
  return <figure className="criteria-board">
    <figcaption>
      <h3>By criterion, <i>summed over {word(round.pairs.length)} briefs.</i></h3>
      <p>Each bar is out of {max}: {word(round.pairs.length)} briefs, up to 10 points each. The number beside each criterion is the difference, with the skill minus without.</p>
      <p>The skill pages scored higher on {word(ahead.length)} criteria and lower on {word(behind.length)}{behind.length?`: ${list(behind)}`:''}.</p>
    </figcaption>
    <div className="criteria-plot">
      <ol className="criteria">{rows.map(r=><li key={r.c}>
        <span className="crit-name">{cap(r.c)}<span className="visually-hidden">, difference</span></span>
        <span className="crit-delta">{signed(r.w-r.wo)}</span>
        <dl>
          <div><dt>With skill</dt><dd><span className="bar-track" aria-hidden="true"><span className="bar with" style={{width:pct(r.w)}}/></span><span className="bar-value">{r.w}</span></dd></div>
          <div><dt>Without</dt><dd><span className="bar-track" aria-hidden="true"><span className="bar without" style={{width:pct(r.wo)}}/></span><span className="bar-value">{r.wo}</span></dd></div>
        </dl>
      </li>)}</ol>
      <div className="criteria-axis" aria-hidden="true"><span><span>0</span><span>{max/2}</span><span>{max}</span></span></div>
    </div>
  </figure>
}

/** Everything below the evals page's heading. The heading itself renders from the main chunk (main.tsx) while the run files load. */
export function EvalsBody(){
  const lost=pair(round1,'queue'),lostAfter=pair(round2,'queue');
  const honesty=critSum(round2,'honesty'),craft=critSum(round2,'craft');
  const margins=(r:Round)=>r.pairs.map(p=>p.withTotal-p.withoutTotal);
  return <>
    <p className="page-intro">Over eight rounds of blind side-by-side grading, the page built with the skill won {laterWins} of {laterCount} briefs in rounds 3 to 8. In the last four rounds it averaged {span(recent.map(r=>withMean(r.tally)))} out of 100; the same brief built without it, {span(recent.map(r=>withoutMean(r.tally)))}.</p>
    <p className="page-intro intro-caveat">Builders and graders were AI agents. GPT graders, re-grading rounds 3 and 4, preferred the skill page in {xFor} of {xRows.length} runs. The pre-registered target of 91 was not reached, and a stop rule written before round 8 ended the tuning. Read it as consistent evidence on one narrow task, not a general performance claim.</p>
    <a className="button outline" href={repo+'/blob/main/evals/run.md'}>Read the full run log <span>↗</span></a>
    <div className="detail-meta"><span>8 ROUNDS / {laterBriefs+briefCount} BRIEFS</span><span>ROUNDS 5–8 / {span(recent.map(r=>withMean(r.tally)))} WITH · {span(recent.map(r=>withoutMean(r.tally)))} WITHOUT</span><span>CLAUDE GRADERS / GPT CROSS-CHECK</span></div>

    <section className="eval-round" aria-labelledby="rounds-later">
      <div className="detail-split">
        <div><h2 id="rounds-later">Rounds 3 to 8.<br/><i>A steady lead, then a plateau.</i></h2><p className="caption">Each round pre-registered before any build</p></div>
        <div>
          <p>From round 3 each pair went to three fresh graders, a senior designer, the brief’s buyer and the engineer who would maintain it, who scored ten criteria from 1 to 10. A separate blind adjudicator confirmed any hard fail (a broken main action, invented proof or an unreadable phone layout), which decides the brief whatever the scores.</p>
          <LaterTable/>
          <p>The lead held in every round, but the skill page’s own score stopped rising at about 84. Round 7 rebuilt the same pages and scored the same; its unchanged no-skill pages showed that one grader’s total moves about ±3 points on an identical page. Round 8 used briefs the skill was never tuned on and landed at the same level, so the result is not an artefact of tuning to those briefs.</p>
          <p>GPT graders re-graded all of rounds 3 and 4 blind: they preferred the skill page in {xFor} of {xRows.length} runs and agreed with the Claude grader’s choice in {xAgree}.</p>
          <a className="text-link" href={repo+'/tree/main/evals/runs/2026-10-20-xfam'}>Cross-family outputs and comparison ↗</a>
        </div>
      </div>
    </section>

    <section className="detail-split">
      <h2>Rounds 1 and 2:<br/><i>how they ran.</i></h2>
      <div>
        <p>The first two rounds used an earlier rubric of {CRITERIA.length} criteria and one grader per brief. For each brief, fresh agents built one static page with the skill and one without: same model, same rules, no network and no invented proof. A separate grader per brief saw only the two pages, labelled A and B, with the brief and screenshots at 1440, 768 and 390 px. It operated both pages, scored each criterion from 1 to 10 and named a preference.</p>
        <ul className="pills criteria-pills">{CRITERIA.map(c=><li key={c}>{c}</li>)}</ul>
        <p className="caption">Totals are the graders’ scores summed as written in each grade file. Which page was A and which was B is recorded in each run’s mapping.json.</p>
      </div>
    </section>

    <section className="eval-round" aria-labelledby="round-1">
      <div className="detail-split">
        <div><h2 id="round-1">Round 1.<br/><i>{cap(word(wins(round1)))} of {word(round1.pairs.length)}.</i></h2><p className="caption">Skill at {round1.commit}</p></div>
        <div>
          <p>{cap(word(round1.pairs.length))} briefs, each built once with the skill and once without, graded blind.</p>
          <ResultTable round={round1}/>
          <a className="text-link" href={runs+round1.folder}>Round 1 outputs, grades and A/B key ↗</a>
        </div>
      </div>
      <p className="caption compare-note">In every image the page built without the skill is on the left and the skill’s page on the right, each at desktop and phone width. Graders saw the live pages unlabelled, as A and B.</p>
      <Comparisons round={round1}/>
    </section>

    <section className="detail-split fix-split">
      <h2>What lost,<br/><i>what changed.</i></h2>
      <ol className="fix-list">
        <li><span className="mono">01</span><div>
          <h3>The {lost.brief} page lost, {lost.withTotal} to {lost.withoutTotal}.</h3>
          <p>No install command, no code at all, and a “docs” button that only scrolled the page, all from a rule added the same day.</p>
          <p className="fix"><strong>Fixed:</strong> complete the conversion path, with an install command, an example marked “illustrative API” when the real API is unknown, and no button that claims a destination it does not reach.</p>
          <p className="caption">Round 2: <Verdict p={lostAfter} lower/></p>
        </div></li>
        <li><span className="mono">02</span><div>
          <h3>Disclaimer sections read as internal notes.</h3>
          <p>Sections such as “What’s not decided yet” looked pasted onto a homepage.</p>
          <p className="fix"><strong>Fixed:</strong> honesty sits beside the claim it qualifies, never in a section about what the company lacks.</p>
          <p className="caption">Round 2 honesty: {honesty.w} to {honesty.wo} over {word(round2.pairs.length)} briefs.</p>
        </div></li>
        <li><span className="mono">03</span><div>
          <h3>Craft trailed in {word(lowerOn(round1,'craft'))} of {word(round1.pairs.length)}.</h3>
          <p>Dead space in the first screen, and a label clipped in one interactive state.</p>
          <p className="fix"><strong>Fixed:</strong> operate and screenshot the signature artifact in every state, and recompose it for phones rather than remove it.</p>
          <p className="caption">Round 2 craft: {craft.w} to {craft.wo} overall, still lower in {word(lowerOn(round2,'craft'))} of {word(round2.pairs.length)}.</p>
        </div></li>
      </ol>
    </section>

    <section className="eval-round" aria-labelledby="round-2">
      <div className="detail-split">
        <div><h2 id="round-2">Round 2.<br/><i>{cap(word(wins(round2)))} of {word(round2.pairs.length)}.</i></h2><p className="caption">Skill at {round2.commit}</p></div>
        <div>
          <p>The skill pages were rebuilt with the fixed skill and graded against the same pages built without it in round 1, plus a fourth brief neither side had seen, built both ways. New A/B order, new graders, same rubric.</p>
          <ResultTable round={round2}/>
          <p>The unchanged no-skill pages scored within {word(drift)} points of their round-1 totals under different graders ({repeated.map(x=>`${x.brief} ${x.before} and ${x.after}`).join(', ')}), which suggests the graders are reasonably consistent.</p>
          <a className="text-link" href={runs+round2.folder}>Round 2 outputs, grades and A/B key ↗</a>
        </div>
      </div>
      <CriteriaBoard round={round2}/>
      <Comparisons round={round2}/>
    </section>

    <section className="detail-split limits">
      <h2>Where evidence ends.</h2>
      <div>
        <ul>
          <li>Rounds 3 to 8 cover {laterBriefs} briefs; no round of four briefs can reach significance on its own (p = 0.125 at four of four), and round 3’s twelve briefs gave p = {t3.tests.brief_level.p_two_sided.toFixed(2)}.</li>
          <li>Every build and most grades came from one model family; the GPT re-grade covers rounds 3 and 4 only, and its hard-fail flags were not adjudicated.</li>
          <li>Rounds 1 and 2: {word(pairCount)} pairs over {word(briefCount)} briefs. {cap(word(round2.pairs.length-round2.pairs.filter(p=>holdout(p.brief)).length))} of the {word(round2.pairs.length)} round-2 briefs were the ones the fixes targeted; only {round2.pairs.filter(p=>holdout(p.brief)).map(p=>p.brief).join(', ')} was new to both sides.</li>
          <li>Every grader rated its confidence {list(confidences)}. Margins ran from {range(margins(round2))} points out of {OUT_OF} in round 2, and from {signed(Math.min(...margins(round1)))} to {signed(Math.max(...margins(round1)))} in round 1.</li>
          <li>On the skill’s own {checkCount} automatic checks, the pages built without it had {range(blockFailures(false))} block failures each and the skill pages {range(blockFailures(true))}. Those checks are the skill’s, so that comparison is not neutral.</li>
        </ul>
        <h3>Sources</h3>
        <ul>
          <li><a href={repo+'/blob/main/evals/run.md'}>evals/run.md, the full run log ↗</a></li>
          {[...rounds,...later].map(r=><li key={r.n}><a href={runs+r.folder}>evals/runs/{r.folder}, round {r.n} outputs and grades ↗</a></li>)}
          <li><a href={runs+'2026-10-20-xfam'}>evals/runs/2026-10-20-xfam, the GPT re-grade ↗</a></li>
          <li><a href={repo+'/tree/main/evals/briefs'}>evals/briefs, the {word(briefCount)} briefs ↗</a></li>
        </ul>
      </div>
    </section>
  </>
}
