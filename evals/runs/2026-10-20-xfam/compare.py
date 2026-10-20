import json, glob, statistics as st, collections, sys
import os
S=os.path.dirname(os.path.abspath(__file__))
R=os.path.dirname(S)
key=json.load(open(f'{S}/key.json'))
rows=[]
for x,k in key.items():
    m={p['packet']:p for p in json.load(open(f"{R}/{k['round']}/key/mapping.json"))['packets']}[k['packet']]
    arm={s:('with' if m[s].split('/')[1].startswith('with-') else 'without') for s in 'AB'}
    for per in ('designer','buyer','engineer'):
        g=json.load(open(f'{S}/grades/{x}/{per}.json'))
        c=json.load(open(f"{R}/{k['round']}/grades/{k['packet']}/{per}.json"))
        def tot(G,a): s=[q for q in 'AB' if arm[q]==a][0]; return sum(G[s]['scores'].values()), G[s]['scores']
        gw,gws=tot(g,'with'); go,_=tot(g,'without'); cw,cws=tot(c,'with'); co,_=tot(c,'without')
        gp=arm[g['preference']]; cp=arm[c['preference']]
        ghf={a:[h['code'] for h in g[[q for q in 'AB' if arm[q]==a][0]].get('hard_fail_flags') or []] for a in ('with','without')}
        chf={a:[h['code'] for h in c[[q for q in 'AB' if arm[q]==a][0]].get('hard_fail_flags') or []] for a in ('with','without')}
        rows.append(dict(x=x,round=k['round'][-6:],packet=k['packet'],brief=m['brief'],persona=per,model=g.get('grader_model') or 'unrecorded (X01-X05)',
            gpt_with=gw,gpt_without=go,cl_with=cw,cl_without=co,gpt_pref=gp,cl_pref=cp,gpt_hf=ghf,cl_hf=chf,gpt_conf=g.get('confidence'),cl_conf=c.get('confidence')))
json.dump(rows,open(f'{S}/rows.json','w'),indent=1)
def report(sel,label):
    if not sel: return
    agree=sum(r['gpt_pref']==r['cl_pref'] for r in sel)
    gw=sum(r['gpt_pref']=='with' for r in sel); cw=sum(r['cl_pref']=='with' for r in sel)
    dg=[r['gpt_with']-r['gpt_without'] for r in sel]; dc=[r['cl_with']-r['cl_without'] for r in sel]
    print(f"\n== {label}: {len(sel)} grader runs")
    print(f" preference agreement GPT vs Claude: {agree}/{len(sel)}")
    print(f" GPT prefers skill page: {gw}/{len(sel)}; Claude: {cw}/{len(sel)}")
    print(f" mean totals GPT  with {st.mean(r['gpt_with'] for r in sel):.1f} without {st.mean(r['gpt_without'] for r in sel):.1f} (diff {st.mean(dg):+.1f})")
    print(f" mean totals Claude with {st.mean(r['cl_with'] for r in sel):.1f} without {st.mean(r['cl_without'] for r in sel):.1f} (diff {st.mean(dc):+.1f})")
    if len(sel)>2:
        try: print(f" correlation of (with-without) margins: {st.correlation(dg,dc):.2f}")
        except Exception: pass
report(rows,'all')
report([r for r in rows if r['model'].startswith('unrecorded')],'X01-X05 (model unrecorded)')
report([r for r in rows if not r['model'].startswith('unrecorded')],'X06-X16 (gpt-6-luna)')
for per in ('designer','buyer','engineer'): report([r for r in rows if r['persona']==per], per)
# per-packet verdicts
print('\nper packet: brief | GPT votes for skill | Claude votes | GPT delta | Claude delta')
pk=collections.defaultdict(list)
for r in rows: pk[r['x']].append(r)
for x,rs in sorted(pk.items()):
    print(x, rs[0]['round'], rs[0]['brief'], sum(r['gpt_pref']=='with' for r in rs), sum(r['cl_pref']=='with' for r in rs), sum(r['gpt_with']-r['gpt_without'] for r in rs), sum(r['cl_with']-r['cl_without'] for r in rs), [h for r in rs for a,h in r['gpt_hf'].items() if h])
