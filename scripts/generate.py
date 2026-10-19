"""Generate distributable research views from the canonical JSON. No network calls."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sites=json.loads((ROOT/'research/sites.json').read_text())
for s in sites:
 text=f"# {s['name']}\n\nInspected: {s['inspected_on']} · {s['coverage']} · {s['archetype']}\n\n{s['url']}\n\n{s['summary']}\n\n## Company evidence\n\nYC: {s['yc_status']}; batch: {s['batch'] or 'not verified'}.\n\n"
 text+='\n'.join(f'- {k}: {v}' for k,v in s['viewports'].items())+'\n\n## Observations\n\n'
 text+='\n\n'.join(f"### {k.replace('_',' ').title()}\n\n{v}" for k,v in s['observations'].items())
 m=s.get('measurements')
 if m:
  text+='\n\n## Measured\n\n| Measure | 1440 px | 390 px |\n| --- | --- | --- |\n'
  for k,l in [('h1_px','Headline px'),('h1_weight','Headline weight'),('h1_tracking_em','Headline tracking em'),('body_px','Body px'),('body_measure_ch','Characters per line'),('section_count','Sections'),('reduced_motion_rule','Reduced-motion rule')]:
   text+=f"| {l} | {m['desktop'].get(k)} | {(m.get('mobile') or {}).get(k)} |\n"
  text=text.rstrip('\n')
 text+='\n\n## Interpretation\n\n'+'\n'.join('- '+p for p in s['interpretation']['principles'])
 text+='\n\n'+s['interpretation']['fit']+'\n\nRisk: '+s['interpretation']['risks']
 text+='\n\n## Limitations\n\n'+'\n'.join('- '+x for x in s['limitations'])
 text+='\n\n## Sources\n\n'+'\n'.join('- '+x for x in dict.fromkeys(s['sources']))+'\n'
 (ROOT/f"research/audits/{s['id']}.md").write_text(text)
case='# Dated reference casebook\n\nGenerated from research/sites.json. Each entry carries its inspection date in the canonical record. These are desktop observations, not current universal claims. Mobile, tablet, exact typefaces and reduced-motion behavior were not verified. Entries marked partial-desktop are selected-region field notes, not complete deep audits.\n\n'
for s in sites:
 case+=f"## {s['name']} · {s['archetype']}\n\n{s['url']} · {s['coverage']}\n\n{s['summary']}\n\nObserved: {s['observations']['hero']} {s['observations']['interaction']}\n\nTransfer: {' '.join(s['interpretation']['principles'])}\n\nAvoid/limit: {s['interpretation']['risks']}\n\n"
 m=s.get('measurements')
 if m:
  d=m['desktop']; mo=m.get('mobile') or {}
  case=case.rstrip('\n')+f"\n\nMeasured {m['measured_on']}: desktop h1 {d.get('h1_px')}px, weight {d.get('h1_weight')}, tracking {d.get('h1_tracking_em')}em; body {d.get('body_px')}px; {d.get('section_count')} sections; phone h1 {mo.get('h1_px')}px.\n\n"
 if s['observations'].get('mobile'): case=case.rstrip('\n')+f"\n\nOn phones: {s['observations']['mobile']}\n\n"
skill=ROOT/'skills/startup-landing-design'
(skill/'references').mkdir(parents=True,exist_ok=True)
(skill/'references/casebook.md').write_text(case)
print('Generated',len(sites),'audit documents and standalone casebook')
