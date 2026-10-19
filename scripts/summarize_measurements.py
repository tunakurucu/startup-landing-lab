"""Summarise research/measurements.jsonl into the percentile table and counts in research/measurements.md.

Rewrites only the block between <!-- summary:start --> and <!-- summary:end -->. Percentiles use the
nearest-rank method on records that returned complete desktop and phone measurements.
Usage: python3 scripts/summarize_measurements.py [--check]
"""
import json, sys, math
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC, DOC = ROOT / 'research/measurements.jsonl', ROOT / 'research/measurements.md'
recs = [json.loads(l) for l in SRC.open() if l.strip()]
ok = [r for r in recs if not r['error'] and 'desktop' in r['viewports'] and 'mobile' in r['viewports']]
D = lambda r: r['viewports']['desktop']
M = lambda r: r['viewports']['mobile']


def pct(vals, p):
    v = sorted(x for x in vals if x is not None)
    return v[max(0, math.ceil(p / 100 * len(v)) - 1)] if v else None


def fmt(x, nd):
    if x is None: return '—'
    s = (f'{x:.{nd}f}'.rstrip('0').rstrip('.') if nd == 3 else f'{x:.{nd}f}') if nd else str(round(x))
    return s.replace('-', '−')


def ratio(a, b): return a / b if a and b else None


ROWS = [
    ('Desktop h1 size (px)', [D(r)['h1_px'] for r in ok], 0),
    ('Desktop h1 weight', [D(r)['h1_weight'] for r in ok], 0),
    ('Desktop h1 tracking (em)', [D(r)['h1_tracking_em'] for r in ok], 3),
    ('h1 ÷ body size', [ratio(D(r)['h1_px'], D(r)['body_px']) for r in ok], 1),
    ('Desktop body size (px)', [D(r)['body_px'] for r in ok], 1),
    ('Body characters per line', [D(r)['body_measure_ch'] for r in ok], 0),
    ('Phone h1 size (px)', [M(r)['h1_px'] for r in ok], 0),
    ('Phone h1 ÷ desktop h1', [ratio(M(r)['h1_px'], D(r)['h1_px']) for r in ok], 2),
    ('Phone body size (px)', [M(r)['body_px'] for r in ok], 1),
    ('Font families in use', [len(D(r)['families']) for r in ok], 0),
    ('Top-level sections', [D(r)['section_count'] for r in ok], 0),
    ('Desktop nav height (px)', [D(r)['nav_height_px'] for r in ok], 0),
]
n = len(ok)
lines = [f'## What {n} startup homepages actually do', '',
         '| Measure | 10th pct | 25th | Median | 75th | 90th |', '| --- | --- | --- | --- | --- | --- |']
for label, vals, nd in ROWS:
    cells = [fmt(pct(vals, p), nd) for p in (10, 25, 50, 75, 90)]
    cells[2] = f'**{cells[2]}**'
    lines.append(f'| {label} | ' + ' | '.join(cells) + ' |')
rm = Counter(D(r)['reduced_motion_rule'] for r in ok)
dark = sum(1 for r in ok if D(r)['dark_background'])
fam = Counter(f for r in ok for f in D(r)['families'][:2])
top = fam.most_common(2)
mono = sum(1 for r in ok if any('mono' in f.lower() for f in D(r)['families'][:2]))
lines += ['',
          f"- A `prefers-reduced-motion` rule was found on {rm['observed']} of {n} pages ({rm['not_observed']} had none; {rm['unverified']} could not be inspected because their CSS is cross-origin).",
          f'- {dark} heroes sit on a dark ground and {n - dark} on a light one (median luminance of the first-screen capture).',
          f"- {sum(1 for r in ok if D(r)['sticky_nav'])} headers are sticky or fixed.",
          f"- {sum(1 for r in ok if D(r)['animations_on_load'])} pages had animations running at load; {sum(1 for r in ok if D(r)['has_video'])} contain a `<video>`, {sum(1 for r in ok if D(r)['has_canvas'])} a `<canvas>`.",
          f"- Pages that scrolled sideways at 390 px: {sum(1 for r in ok if M(r)['horizontal_overflow'])}.",
          f'- The most common first or second family is {top[0][0]} ({top[0][1]} pages), then {top[1][0]} ({top[1][1]}). A monospace family is first or second on {mono}.']
block = '\n'.join(lines)

def med(vals): return pct(vals, 50)
h1 = [D(r)['h1_px'] for r in ok]
observed = (f"**Observed** across {n} measured startup homepages (2026-10-19): desktop h1 median {fmt(med(h1), 0)}px "
            f"(middle half {fmt(pct(h1, 25), 0)}–{fmt(pct(h1, 75), 0)}px, 90th percentile {fmt(pct(h1, 90), 0)}px), weight {fmt(med(ROWS[1][1]), 0)}, "
            f"tracking {fmt(med(ROWS[2][1]), 3)}em; h1 about {fmt(med(ROWS[3][1]), 1)}× the body size; body {fmt(med(ROWS[4][1]), 0)}px at about "
            f"{fmt(med(ROWS[5][1]), 0)} characters per line; phone h1 about {fmt(med(ROWS[7][1]), 2)}× desktop (median {fmt(med(ROWS[6][1]), 0)}px); "
            f"two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.")
stale = []
for recipe in sorted((ROOT / 'skills/startup-landing-design/references/recipes').glob('*.md')):
    lines_r = recipe.read_text().split('\n')
    updated = [observed if l.startswith('**Observed** across') else l for l in lines_r]
    if updated != lines_r:
        stale.append(recipe.name)
        if '--check' not in sys.argv: recipe.write_text('\n'.join(updated))

doc = DOC.read_text()
start, end = '<!-- summary:start -->', '<!-- summary:end -->'
if start not in doc:
    raise SystemExit('measurements.md lacks summary markers')
new = doc.split(start)[0] + start + '\n' + block + '\n' + end + doc.split(end)[1]
if '--check' in sys.argv:
    sys.exit(0 if new == doc and not stale else 1)
DOC.write_text(new)
print(f'{len(recs)} attempted, {n} complete')
