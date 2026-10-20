"""Generate distributable research views from the canonical JSON. No network calls."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sites=json.loads((ROOT/'research/sites.json').read_text())
for s in sites:
 text=f"# {s['name']}\n\nInspected: {s['inspected_on']} · {s['coverage']} · {s['archetype']}\n\n{s['url']}\n\n{s['summary']}\n\n## Company evidence\n\nYC: {s['yc_status']}; batch: {s['batch'] or 'not verified'}."+(" Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample." if s.get('tier')=='reference' else '')+"\n\n"
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
case='# Dated reference casebook\n\nGenerated from research/sites.json. Each entry carries its inspection date. Records marked desktop-mobile-audit (October 19, 2026) were rendered at 1440 and 390 px, scrolled, had one control operated and a reduced-motion load, and carry computed-style measurements; older records are desktop observations, and partial-desktop entries are selected-region notes. Exact typefaces, timings and libraries are not claimed. These describe what the pages did on that date, not what converts.\n\nEntries marked **reference tier** come from companies recognised for the design of their sites (October 20, 2026 audits); they are listed first in each family. The other entries are a sample of 2026 YC, a16z and Pear companies and earlier field notes, which show what typical startups ship.\n\n'
for s in sorted(sites, key=lambda s: s.get('tier')!='reference'):
 case+=f"## {s['name']} · {s['archetype']}\n\n{s['url']} · {s['coverage']}"+(' · **reference tier**' if s.get('tier')=='reference' else '')+f"\n\n{s['summary']}\n\nObserved: {s['observations']['hero']} {s['observations']['interaction']}\n\n"+(f"Copy: {s['observations']['copy']}\n\n" if s['observations'].get('copy') else '')+f"Transfer: {' '.join(s['interpretation']['principles'])}\n\nAvoid/limit: {s['interpretation']['risks']}\n\n"
 m=s.get('measurements')
 if m:
  d=m['desktop']; mo=m.get('mobile') or {}
  case=case.rstrip('\n')+f"\n\nMeasured {m['measured_on']}: desktop h1 {d.get('h1_px')}px, weight {d.get('h1_weight')}, tracking {d.get('h1_tracking_em')}em; body {d.get('body_px')}px; {d.get('section_count')} sections; phone h1 {mo.get('h1_px')}px.\n\n"
 if s['observations'].get('mobile'): case=case.rstrip('\n')+f"\n\nOn phones: {s['observations']['mobile']}\n\n"
skill=ROOT/'skills/startup-landing-design'
(skill/'references').mkdir(parents=True,exist_ok=True)
# Split by family so an agent loads only the family it is working in.
import re as _re
entries=_re.split(r'\n(?=## )', case)
head, bodies = entries[0], entries[1:]
fams={}
for b in bodies:
  fam=_re.match(r'## .*? · ([a-z-]+)', b).group(1); fams.setdefault(fam,[]).append(b.strip())
for old in (skill/'references').glob('casebook-*.md'): old.unlink()
index=head.rstrip()+'\n\nRead the file for the family you chose; each entry has the observed decision, the transferable principle, its limits and, where available, measurements and phone notes.\n\n| Family | Entries | Sites |\n| --- | --- | --- |\n'
for fam in sorted(fams):
  (skill/f'references/casebook-{fam}.md').write_text(f'# Casebook: {fam}\n\n'+'\n\n'.join(fams[fam])+'\n')
  names=', '.join(_re.match(r'## (.*?) · ', b).group(1) for b in fams[fam])
  index+=f'| [{fam}](casebook-{fam}.md) | {len(fams[fam])} | {names} |\n'
(skill/'references/casebook.md').write_text(index)
print('Generated',len(sites),'audit documents and standalone casebook')
