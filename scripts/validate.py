"""Validate schema, identity joins, standalone skill references and Markdown links."""
import json,re,sys
from pathlib import Path
from jsonschema import Draft202012Validator
ROOT=Path(__file__).resolve().parents[1]
def validate_data():
 for name in ['candidates','sites']:
  data=json.loads((ROOT/f'research/{name}.json').read_text());schema=json.loads((ROOT/f'research/schema/{name}.schema.json').read_text())
  errors=list(Draft202012Validator(schema).iter_errors(data))
  if errors: raise ValueError('\n'.join(f'{name}: {e.json_path}: {e.message}' for e in errors))
  ids=[s['id'] for s in data]
  if len(ids)!=len(set(ids)):raise ValueError(f'Duplicate {name} IDs')
 candidates={s['id']:s for s in json.loads((ROOT/'research/candidates.json').read_text())}
 for s in json.loads((ROOT/'research/sites.json').read_text()):
  c=candidates[s['id']]
  for key in ['name','yc_status','batch','archetype','category']:
   if c[key]!=s[key]:raise ValueError(f'Catalog/audit mismatch: {s["id"]} {key}')
  if not (ROOT/f'research/audits/{s["id"]}.md').exists():raise ValueError('Missing audit file')
 return len(candidates)
def validate_links():
 count=0
 for f in ROOT.rglob('*.md'):
  if any(x in f.parts for x in ['node_modules','.git','dist']):continue
  for target in re.findall(r'\[[^\]]*\]\(([^)]+)\)',f.read_text()):
   if re.match(r'^(?:https?://|mailto:|#)',target):continue
   target=target.split('#')[0]
   if not (f.parent/target).exists():raise ValueError(f'Broken internal link: {f.relative_to(ROOT)} → {target}')
   count+=1
 return count
def validate_summary():
 import subprocess
 if subprocess.run([sys.executable,str(ROOT/'scripts/summarize_measurements.py'),'--check']).returncode:raise ValueError('research/measurements.md is out of date: run python3 scripts/summarize_measurements.py')
 if subprocess.run([sys.executable,str(ROOT/'scripts/summarize_type.py'),'--check']).returncode:raise ValueError('references/type-observed.md is out of date: run python3 scripts/summarize_type.py')
 if subprocess.run([sys.executable,str(ROOT/'scripts/summarize_motion.py'),'--check']).returncode:raise ValueError('references/motion-patterns.md is out of date: run python3 scripts/summarize_motion.py')
if __name__=='__main__':
 try:validate_summary();print(f'PASS: {validate_data()} candidates; {validate_links()} internal file links; measurement summary current')
 except Exception as e:print(e,file=sys.stderr);sys.exit(1)
