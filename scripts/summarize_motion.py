"""Summarise research/motion.jsonl (from scripts/measure-motion.mjs) into the observed block of
skills/startup-landing-design/references/motion-patterns.md, between <!-- motion:start --> and <!-- motion:end -->.

Counts only; one browser (headless Chromium, 1440 x 900), one visit per site, one date. Records with an error or
low confidence are left out of the shares and reported separately.
Usage: python3 scripts/summarize_motion.py [--check]
"""
import json, sys, math
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'research/motion.jsonl'
DOC = ROOT / 'skills/startup-landing-design/references/motion-patterns.md'
recs = [json.loads(l) for l in SRC.open() if l.strip()]
errors = [r for r in recs if r.get('error')]
ok = [r for r in recs if not r.get('error') and (r.get('confidence') or {}).get('level') != 'low']
low = len(recs) - len(errors) - len(ok)
n = len(ok)


def g(r, path, default=None):
    cur = r
    for k in path.split('.'):
        if not isinstance(cur, dict) or k not in cur: return default
        cur = cur[k]
    return cur


def count(path, pred=bool): return sum(1 for r in ok if pred(g(r, path)))
def pct(k, d=None): d = d or n; return f'{round(100 * k / d)}%' if d else '—'
def med(vals):
    v = sorted(x for x in vals if x is not None)
    return v[max(0, math.ceil(len(v) / 2) - 1)] if v else None


h1_hidden = count('load.text.h1.initially_hidden')
copy_hidden = count('load.text.first_screen_text_hidden_initially')
never = count('load.text.never_visible', lambda x: (x or 0) > 0)
entrance = count('load.text.entrance_on_load')
reveals = count('scroll.entrance_reveals')
pinned = count('scroll.pinned_scene')
linked = count('scroll.scroll_linked')
_le = [g(r, 'scroll.scroll_linked_elements', 0) or 0 for r in ok if g(r, 'scroll.scroll_linked')]
linked_zero, linked_small, linked_many = sum(1 for x in _le if x == 0), sum(1 for x in _le if 1 <= x <= 3), sum(1 for x in _le if x >= 4)
css_tl = count('scroll.scroll_linked_css_timeline') + 0
css_any = count('styles.animation_timeline_css')
parallax = count('scroll.parallax')
scrub_video = count('scroll.scrubbed_video')
snap = count('scroll.scroll_snap')
infinite = count('load.animations.infinite_running', lambda x: (x or 0) > 0)
marquee = sum(1 for r in ok if (g(r, 'load.animations.infinite_kinds.marquee', 0) or 0) + (g(r, 'load.animations.infinite_kinds.marquee_vertical', 0) or 0) > 0)
counters = count('counters.found')
video = count('media.video.present')
autoplay = count('media.video.autoplay_count', lambda x: (x or 0) > 0)
canvas = count('media.canvas.present')
webgl = count('media.canvas.webgl')
hover_tr = count('hover.any_transition')
hover_rev = count('hover.hover_reveal')
rm_rule = count('styles.reduced_motion_rule', lambda x: x == 'observed')
rm_ok = count('reduced_motion.compliant')
rm_infinite = count('reduced_motion.infinite_running', lambda x: (x or 0) > 0)
rm_marquee = count('reduced_motion.marquee_running', lambda x: (x or 0) > 0)
rm_hidden = count('reduced_motion.anything_hidden')
rm_video = count('reduced_motion.video_playing')
libs = Counter(k for r in ok for k, v in (r.get('libraries') or {}).items() if v)
builders = Counter(r.get('builder') for r in ok if r.get('builder'))
dur = [g(r, 'hover.primary.duration_ms') for r in ok if g(r, 'hover.primary.transition_ran')]
LIBNAME = {'gsap': 'GSAP', 'scrolltrigger': 'ScrollTrigger', 'framer_motion': 'Framer Motion / Motion', 'lenis': 'Lenis smooth scroll', 'locomotive': 'Locomotive Scroll',
           'aos': 'AOS', 'swiper': 'Swiper', 'splide': 'Splide', 'lottie': 'Lottie', 'rive': 'Rive', 'three': 'three.js', 'spline': 'Spline'}
lib_line = ', '.join(f'{LIBNAME.get(k, k)} {v}' for k, v in libs.most_common(8))
builder_line = ', '.join(f'{k} {v}' for k, v in builders.most_common(4))

lines = [f'## What {n} startup homepages do', '',
         f'Measured with `scripts/measure-motion.mjs` on 2026-10-20: headless Chromium at 1440 × 900, one normal visit (load, scroll in steps, hover the primary action and nav) and one reload with `prefers-reduced-motion: reduce`. {len(errors)} sites failed to load and {low} returned low-confidence records; both are left out. Counts describe what moved in this browser on this date, not timing or easing, and say nothing about whether the motion helped.', '',
         '| Observed | Pages | Share |', '| --- | --- | --- |',
         f'| First-screen copy hidden at first paint, waiting for an entrance animation | {copy_hidden} | {pct(copy_hidden)} |',
         f'| The h1 itself hidden at first paint | {h1_hidden} | {pct(h1_hidden)} |',
         f'| Text that started hidden and was still hidden when the visit ended (can include unopened tabs, carousel slides and menus) | {never} | {pct(never)} |',
         f'| Text revealed by scroll (entrance on scroll) | {reveals} | {pct(reveals)} |',
         f'| Something animating forever at load (spinner, pulse, marquee, float) | {infinite} | {pct(infinite)} |',
         f'| A marquee or ticker running | {marquee} | {pct(marquee)} |',
         f'| Pinned scene that changes while the page scrolls | {pinned} | {pct(pinned)} |',
         f'| Scroll-linked behaviour of any kind ({linked_zero} with no moving element counted, {linked_small} one to three elements, {linked_many} four or more) | {linked} | {pct(linked)} |',
         f'| CSS `animation-timeline` present in the stylesheets | {css_any} | {pct(css_any)} |',
         f'| Parallax layers | {parallax} | {pct(parallax)} |',
         f'| Scroll-scrubbed video | {scrub_video} | {pct(scrub_video)} |',
         f'| Scroll snap | {snap} | {pct(snap)} |',
         f'| Animated number counter | {counters} | {pct(counters)} |',
         f'| `<video>` on the page / autoplaying | {video} / {autoplay} | {pct(video)} / {pct(autoplay)} |',
         f'| `<canvas>` / WebGL context | {canvas} / {webgl} | {pct(canvas)} / {pct(webgl)} |',
         f'| Primary action or nav changed on hover | {hover_tr} | {pct(hover_tr)} |',
         '',
         '**Under reduced motion**',
         '',
         f'- A `prefers-reduced-motion` rule was found on {rm_rule} pages ({pct(rm_rule)}); the page met all of this measure\'s conditions (nothing moving forever, nothing hidden, no autoplaying video) on {rm_ok} ({pct(rm_ok)}).',
         f'- Something still animated forever on {rm_infinite} pages, a marquee on {rm_marquee}, and video kept playing on {rm_video}.',
         f'- Copy stayed hidden (because its entrance animation was removed without showing the end state) on {rm_hidden}. This is the failure MO-02 exists for: the reduced-motion visitor gets less page, not less motion.',
         '',
         '**What this means for a build**',
         '',
         f'- Hidden-until-animated copy is common ({pct(copy_hidden)} of first screens) and is the pattern that costs most: it delays reading, fails captures and crawlers, and is the one reduced motion most often breaks. Ship copy visible at first paint (MO-02).',
         f'- Pinned, scrubbed stages are rare ({pct(pinned)}). Scroll-linked behaviour is common ({pct(linked)}) but small: a stylesheet timeline or a handful of elements, not a moving story. A pinned stage is a signature, which is why the skill allows one per page.',
         f'- Infinite motion is the norm at load ({pct(infinite)}) and survives reduced motion on {pct(rm_infinite)}; give anything that runs past five seconds a pause control (MO-05) and stop it under reduce (MO-01).',
         f'- Libraries detected: {lib_line or "none"}. Site builders: {builder_line or "none detected"}. The library does not decide the quality; the contract does.',
         ]
block = '\n'.join(lines)
doc = DOC.read_text()
s, e = '<!-- motion:start -->', '<!-- motion:end -->'
if s in doc:
    new = doc.split(s)[0] + s + '\n' + block + '\n' + e + doc.split(e)[1]
else:
    new = doc.replace('\n## Sources', '\n' + s + '\n' + block + '\n' + e + '\n\n## Sources', 1)
if '--check' in sys.argv:
    sys.exit(0 if new == doc else 1)
DOC.write_text(new)
print(f'{len(recs)} records, {n} used, {len(errors)} errors, {low} low confidence')
