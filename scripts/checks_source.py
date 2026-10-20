"""Canonical source for the skill's 100 checks (v0.4). Run `python3 scripts/checks_source.py` to regenerate
skills/startup-landing-design/assets/checks.json, skills/startup-landing-design/references/checklist.md and the
checklist table inside skills/startup-landing-design/assets/decision-record.md. Never hand-edit those outputs.

Every check is written in this project's own words. `credit` names the skill, guideline or study where the idea
appears (see docs/attribution.md for links and licences); SLL marks checks that come from this project's own
research or from failures found while building the demos.

verify: auto = scripts/check-page.mjs decides it; shot = judge from the rendered screenshots;
        code = read the source; record = answered in DESIGN-RECORD.md.
"""
import json
import re
from collections import Counter
from pathlib import Path

CREDITS = {
    'IMP': 'Impeccable (Paul Bakaus)', 'GST': 'gstack design-review (Garry Tan)', 'EK': "Emil Kowalski's skills",
    'VWG': 'Vercel Web Interface Guidelines', 'MP': "Matt Pocock's skills", 'AFD': 'Anthropic frontend-design',
    'ASC': 'Anthropic skill-creator', 'JK': "Jakub Krehel's interface skills", 'MT': "Meng To's design skills",
    'SLL': 'Startup Landing Lab research',
    'NNG': 'Nielsen Norman Group research (nngroup.com)',
    'WCAG': 'W3C Web Content Accessibility Guidelines 2.2',
    'WEB': 'web.dev (Core Web Vitals, LCP, fonts)',
    'APL': 'Apple Human Interface Guidelines',
    'JS': 'Julian Shapiro, growth handbook (julian.com)',
    'HD': 'Harry Dry, Marketing Examples',
    'AD': 'April Dunford, positioning',
    'CH': 'Copyhackers / Joanna Wiebe',
    'PG': 'Paul Graham essays',
    'YC': 'Y Combinator advice',
    '37S': '37signals',
    'SWC': 'Stanford Web Credibility Research',
    'UB': 'Unbounce conversion benchmark report (2024)',
    'WPAI': 'Wikipedia, "Signs of AI writing"',
    'CHN': 'Corey Haines, marketingskills (MIT)',
    'AUT': 'auteur skill (MIT)',
    'UI': 'ibelick ui-skills, fixing-metadata (MIT)',
    'EM': 'Evil Martians, study of 100 developer-tool landing pages',
    'CXL': 'CXL Institute social-proof research',
    'SO': 'Stack Overflow Developer Survey 2025',
    'HS': 'HockeyStack B2B SaaS benchmark',
    'HUB': 'HubSpot landing-page form research',
    'BAY': 'Baymard Institute',
    'GOOG': 'Google Search guidance on intrusive interstitials',
    'FTC': 'US Federal Trade Commission rule on fake reviews and testimonials (2024)',
    'MATH': 'Mathur et al. 2019, dark patterns at scale',
}

SECTIONS = {'PS': 'Product and story', 'CP': 'Copy and positioning', 'HR': 'Hero', 'ST': 'Structure and conversion',
            'TY': 'Type', 'LY': 'Layout', 'CO': 'Colour', 'TT': 'Template tells', 'MO': 'Motion',
            'MB': 'Mobile and input', 'AX': 'Accessibility and robustness', 'PF': 'Performance and metadata',
            'HP': 'Honesty and proof', 'PR': 'Process'}

# (id, check, verify, severity, credits)
CHECKS = [
  # Product and story
  ('PS-01', 'The first screen says who it is for, what changes for them and how, in plain words.', 'shot', 'block', 'SLL GST NNG'),
  ('PS-02', 'A stranger can say what the product does after five seconds on the first screen.', 'shot', 'block', 'GST NNG'),
  ('PS-03', 'The hero artifact is the product or its real output, not decoration.', 'shot', 'block', 'SLL NNG'),
  ('PS-04', 'Each of the visitor\'s first three doubts is answered by a specific artifact on the page.', 'record', 'block', 'SLL'),
  ('PS-05', 'Every section tells the visitor something the sections above did not; repeated claims are cut.', 'shot', 'warn', 'SLL GST'),
  ('PS-06', 'There is one primary action, worded the same wherever it appears.', 'auto', 'warn', 'GST NNG'),
  ('PS-07', 'Questions to the user carried a recommended default; unanswered ones were assumed and logged.', 'record', 'warn', 'MP'),
  ('PS-08', 'Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category\'s obvious default or the obvious "anti-default".', 'record', 'block', 'SLL GST AFD JK AUT'),
  ('PS-09', 'Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded.', 'record', 'block', 'SLL'),
  # Copy and positioning
  ('CP-01', 'The h1 has 3–12 words and says more than the product or company name.', 'auto', 'warn', 'JS HD NNG'),
  ('CP-02', 'A subhead of one or two sentences, at most 40 words, follows the h1 and is visible without scrolling.', 'auto', 'warn', 'JS CH'),
  ('CP-03', 'The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame.', 'shot', 'warn', 'AD PG YC'),
  ('CP-04', 'The record names the visitor\'s current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative\'s page.', 'record', 'block', 'AD HD CHN'),
  ('CP-05', 'Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor\'s page unchanged.', 'record', 'warn', 'CHN'),
  ('CP-06', 'The record lists at least three phrases in the target users\' own words with their source, or says none exist yet; the hero uses or adapts one.', 'record', 'warn', 'CH HD'),
  ('CP-07', 'The first screen contains none of the generic marketing phrases on the list (for example seamless, supercharge, unlock, unleash, streamline, effortless, all-in-one, next-gen, cutting-edge, revolutionize, "AI-powered", "not just X, it\'s Y", "say goodbye to").', 'auto', 'warn', 'HD IMP GST WPAI'),
  ('CP-08', 'No superlative (best, #1, leading, fastest, world\'s first, unmatched) appears unless its block also holds a source link or citation.', 'auto', 'warn', 'HD NNG SWC'),
  ('CP-09', 'One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data.', 'shot', 'warn', 'HD CH JS 37S'),
  ('CP-10', 'Section headings carry the argument on their own: reading only the headings explains the product.', 'shot', 'warn', 'NNG'),
  ('CP-11', 'Body copy scores Flesch–Kincaid grade 9 or below, or the record gives the audience reason.', 'auto', 'warn', 'UB NNG'),
  # Hero
  ('HR-01', 'The headline and primary action are visible without scrolling at 1440×900 and 390×844.', 'auto', 'block', 'GST VWG NNG'),
  ('HR-02', 'The primary action\'s label starts with a verb and names the outcome in 2–5 words; "Get started", "Learn more", "Start now" or "Try it now" alone fail. "Book a demo" and "Join the waitlist" pass.', 'auto', 'warn', 'IMP GST VWG NNG'),
  ('HR-03', 'The headline has no single-word last line at any of the three widths.', 'shot', 'warn', 'IMP VWG JK'),
  ('HR-04', 'A headline above about 6.5rem is the signature of the page and keeps each line to three words or fewer.', 'auto', 'warn', 'IMP SLL'),
  ('HR-05', 'The first screen is not a false floor: at 1440×900 and 390×844 some content below the hero, or a hero element cut by the fold, shows in the bottom 15% of the viewport.', 'auto', 'warn', 'NNG'),
  ('HR-06', 'The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars.', 'code', 'warn', 'EK'),
  # Structure and conversion
  ('ST-01', 'Cost is easy to find: a header or footer link to pricing or plans, or visible prices; otherwise the record says how cost is disclosed and why.', 'auto', 'warn', 'NNG SO HS'),
  ('ST-02', 'Within 5 seconds at 390×844, no dialog or fixed overlay covers more than 30% of the viewport, except a legally required consent prompt named in the record.', 'auto', 'warn', 'GOOG NNG'),
  ('ST-03', 'Clickable things look clickable: the primary action has a fill or a border with at least 3:1 contrast against its surroundings, and links inside paragraphs are underlined or differ from body text by at least 3:1.', 'auto', 'warn', 'NNG WCAG'),
  ('ST-04', 'Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company.', 'record', 'warn', 'EM CXL NNG'),
  ('ST-05', 'The conversion form shows at most three fields before submit, no textarea and at most one select.', 'auto', 'warn', 'HUB BAY NNG'),
  ('ST-06', 'For developer products, the first two screenfuls show an install command or code sample, and the header links to docs or a quickstart; other products are n/a.', 'auto', 'warn', 'SO EM'),
  # Type
  ('TY-01', 'Exactly one h1.', 'auto', 'block', 'GST VWG'),
  ('TY-02', 'Heading levels never skip (no h1 → h3).', 'auto', 'block', 'IMP VWG'),
  ('TY-03', 'The h1 and the first h2 are each at least 1.25× the body size.', 'auto', 'block', 'IMP GST'),
  ('TY-04', 'Headline letter-spacing is no tighter than −0.04em.', 'auto', 'block', 'IMP'),
  ('TY-05', 'Body text is at least 16px on phones.', 'auto', 'warn', 'GST IMP'),
  ('TY-06', 'No readable text below 11px.', 'auto', 'block', 'IMP GST'),
  ('TY-07', 'Body paragraphs stay under about 80 rendered characters per line.', 'auto', 'warn', 'IMP AFD WCAG'),
  ('TY-08', 'Body line-height is at least 1.35.', 'auto', 'warn', 'IMP'),
  ('TY-09', 'Weights under 400 appear only at 28px and up; smaller text is 400 or heavier.', 'auto', 'warn', 'JK'),
  ('TY-10', 'A display face that is everywhere (Inter, Space Grotesk, Fraunces, Roboto, Poppins, Montserrat) has a stated reason, and every face has a role (display, text, data).', 'auto', 'warn', 'IMP GST AFD'),
  # Layout
  ('LY-01', 'No horizontal scroll at 390px.', 'auto', 'block', 'GST VWG'),
  ('LY-02', 'No horizontal scroll at 320px.', 'auto', 'block', 'EK WCAG'),
  ('LY-03', 'No text is cut off by its container.', 'auto', 'block', 'IMP'),
  ('LY-04', 'Body text keeps at least 12px from the screen edge on phones.', 'auto', 'block', 'IMP'),
  ('LY-05', 'No boxed card sits inside another boxed card.', 'auto', 'warn', 'IMP'),
  ('LY-06', 'In-page anchor targets and focused controls are not hidden under a sticky header.', 'auto', 'warn', 'VWG JK WCAG'),
  ('LY-07', 'A footer exists and holds real destinations.', 'auto', 'warn', 'SLL'),
  # Colour
  ('CO-01', 'Text meets WCAG AA contrast (4.5:1, or 3:1 for 24px+ or 18.66px+ bold); text over images or gradients is sampled at its worst point.', 'auto', 'block', 'IMP VWG GST WCAG'),
  ('CO-02', 'No gradient-filled text and no coloured glow used as decoration.', 'auto', 'warn', 'IMP AFD'),
  ('CO-03', 'The ground colour is chosen from where the product is used; cream with a serif display needs a reason.', 'auto', 'warn', 'IMP AFD'),
  ('CO-04', 'Accent colour marks state or action and is not sprinkled for decoration.', 'shot', 'warn', 'GST'),
  # Template tells
  ('TT-01', 'No row of three equal cards with short adjective headings standing in for a product explanation.', 'auto', 'warn', 'GST AFD SLL'),
  ('TT-02', 'No icon tile stacked above every card heading.', 'auto', 'warn', 'IMP'),
  ('TT-03', 'No small tracked-caps label above nearly every section heading.', 'auto', 'warn', 'IMP AFD'),
  ('TT-04', 'No thick coloured side stripe on cards and no grid, dot or stripe background used as filler.', 'auto', 'warn', 'IMP GST'),
  ('TT-05', 'Replacing the logo would not turn this into another company\'s page.', 'record', 'block', 'SLL'),
  ('TT-06', 'Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced.', 'record', 'block', 'SLL MT'),
  # Motion
  ('MO-01', 'With reduced motion, nothing translates, scales or zooms and nothing is hidden; short fades are allowed.', 'auto', 'block', 'VWG EK SLL WCAG APL'),
  ('MO-02', 'After loading and one scroll, no text is still invisible.', 'auto', 'block', 'IMP'),
  ('MO-03', 'No transition: all.', 'auto', 'block', 'VWG EK'),
  ('MO-04', 'Only transform, translate, scale, rotate and opacity animate; never layout properties.', 'auto', 'warn', 'VWG IMP'),
  ('MO-05', 'Nothing that moves or changes by itself runs longer than 5 seconds without a visible pause control, and the h1 and primary action never change by themselves.', 'auto', 'block', 'WCAG NNG BAY'),
  ('MO-06', 'Overshoot or bounce easing appears only in playful archetypes; entrances never start from scale(0) or ease-in.', 'auto', 'warn', 'IMP EK'),
  ('MO-07', 'Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input.', 'code', 'warn', 'EK'),
  ('MO-08', 'Every animation has a written contract: trigger, purpose, fallback, duration, easing.', 'record', 'block', 'SLL'),
  # Mobile and input
  ('MB-01', 'The viewport meta never disables zoom.', 'auto', 'block', 'VWG EK'),
  ('MB-02', 'On phones, the primary action and navigation controls are at least 44×44px.', 'auto', 'warn', 'GST APL'),
  ('MB-03', 'Every other control is at least 24×24px or has enough space around it (WCAG 2.5.8); links inside sentences are exempt.', 'auto', 'block', 'WCAG VWG'),
  ('MB-04', 'Inputs use at least 16px text, so phones do not zoom on focus.', 'auto', 'warn', 'EK VWG'),
  ('MB-05', 'If the nav collapses on phones, a working menu control replaces it.', 'auto', 'block', 'GST'),
  ('MB-06', 'Dense artifacts are recomposed for phones, not shrunk or removed.', 'shot', 'block', 'SLL'),
  # Accessibility and robustness
  ('AX-01', 'Every link and button has an accessible name.', 'auto', 'block', 'VWG'),
  ('AX-02', 'Every image has alt text, empty only when decorative.', 'auto', 'block', 'VWG'),
  ('AX-03', 'Every focusable control shows a focus indicator from the keyboard: an outline at least 2px with at least 3:1 contrast against adjacent colours.', 'auto', 'block', 'VWG WCAG'),
  ('AX-04', 'Nothing is clickable without being a link or button.', 'auto', 'block', 'VWG'),
  ('AX-05', 'Every form control has a label.', 'auto', 'block', 'VWG'),
  ('AX-06', 'The html element declares a language and the page has a main landmark.', 'auto', 'block', 'VWG'),
  ('AX-07', 'No script errors or console errors while loading.', 'auto', 'block', 'IMP GST'),
  ('AX-08', 'Links point somewhere real: no empty href, "#" or missing anchor or file.', 'auto', 'block', 'SLL'),
  ('AX-09', 'No broken images.', 'auto', 'block', 'IMP'),
  ('AX-10', 'Results of local actions are announced (aria-live or role=status).', 'code', 'warn', 'VWG'),
  ('AX-11', 'With WCAG 1.4.12 text spacing applied (line-height 1.5, paragraph spacing 2em, letter-spacing 0.12em, word-spacing 0.16em), no text is clipped or overlaps.', 'auto', 'block', 'WCAG'),
  # Performance and metadata
  ('PF-01', 'Images declare width and height or an aspect-ratio, and images below the first screen load lazily.', 'auto', 'warn', 'VWG'),
  ('PF-02', 'The largest element in the first screen (LCP) is not lazy-loaded or injected after load, and an LCP image has fetchpriority="high" or a preload.', 'auto', 'block', 'WEB'),
  ('PF-03', 'Web fonts use font-display swap or optional.', 'auto', 'warn', 'VWG WEB'),
  ('PF-04', 'Layout shift (CLS) through load, one scroll and one interaction stays at or under 0.1.', 'auto', 'warn', 'WEB'),
  ('PF-05', 'On a throttled mobile profile, lab LCP is at or under 2.5 seconds (a lab estimate, not field data).', 'auto', 'warn', 'WEB'),
  ('PF-06', 'The page has a title and a meta description; for an unknown brand the title leads with the category or audience.', 'auto', 'warn', 'CHN UI'),
  ('PF-07', 'Sharing works: og:title, og:description, an absolute og:image, twitter:card, a favicon and an apple-touch-icon are present, and theme-color matches the page background.', 'auto', 'warn', 'UI CHN VWG'),
  # Honesty and proof
  ('HP-01', 'No customer logos or testimonials that were not supplied and verified.', 'shot', 'block', 'SLL GST FTC'),
  ('HP-02', 'Every number has a source or is labelled illustrative.', 'shot', 'block', 'SLL'),
  ('HP-03', 'Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section.', 'shot', 'block', 'SLL'),
  ('HP-04', 'Every action reaches what its label promises (install, docs, a real page or a visible local result).', 'shot', 'block', 'SLL'),
  ('HP-05', 'No false urgency or scarcity: no countdown timer, "only N left" or "spots filling fast" unless it is true and sourced.', 'auto', 'warn', 'FTC MATH'),
  # Process
  ('PR-01', 'Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states.', 'record', 'block', 'IMP'),
  ('PR-02', 'One structural revision was made after rendering, with before and after evidence and the hero rescored.', 'record', 'block', 'SLL GST'),
  ('PR-03', 'Every decorative element left on the page has a named job; ones without a job were removed and are listed.', 'record', 'warn', 'MT'),
  ('PR-04', 'The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is.', 'record', 'block', 'GST IMP ASC'),
]

if __name__ == '__main__':
    assert len(CHECKS) == 100, len(CHECKS)
    ids = [c[0] for c in CHECKS]; assert len(set(ids)) == 100
    for i, t, v, s, c in CHECKS:
        assert i[:2] in SECTIONS and v in ('auto', 'shot', 'code', 'record') and s in ('block', 'warn'), i
        for k in c.split(): assert k in CREDITS, f'{i}: unknown credit key {k}'
    root = Path(__file__).resolve().parents[1] / 'skills/startup-landing-design'
    data = [{'id': i, 'check': t, 'verify': v, 'severity': s, 'credit': c.split()} for i, t, v, s, c in CHECKS]
    (root / 'assets/checks.json').write_text(json.dumps(data, indent=1, ensure_ascii=False) + '\n')
    v = Counter(c[2] for c in CHECKS)
    manual = 100 - v['auto']
    out = ['# The 100 checks', '',
           f"Generated from `assets/checks.json`. **{v['auto']} auto** checks are decided by `scripts/check-page.mjs`; "
           f"**{v['shot']} screenshot**, **{v['code']} code** and **{v['record']} record** checks are answered in the "
           '`## Checklist` section of `DESIGN-RECORD.md`, one line each: `ID | pass, fail or n/a | evidence`. '
           '`scripts/verify-record.mjs` refuses to finish while any of them is unanswered.', '',
           '**block** = fix before calling the page done, or end with DONE_WITH_CONCERNS. **warn** = fix, or record the product reason it stays.', '',
           'Credits: ' + '; '.join(f'**{k}** {n}' for k, n in CREDITS.items()) + '. Every rule is written in this project\'s own words; see `docs/attribution.md` in the repository for links and licences.', '']
    for prefix, name in SECTIONS.items():
        out += [f'## {name}', '', '| ID | Check | Verify | Severity | Credit |', '| --- | --- | --- | --- | --- |']
        out += [f'| {i} | {t} | {vv} | {s} | {c} |' for i, t, vv, s, c in CHECKS if i.startswith(prefix)]
        out.append('')
    (root / 'references/checklist.md').write_text('\n'.join(out))
    # The checks that need eyes go into the decision-record template, between markers.
    rec = root / 'assets/decision-record.md'
    t = rec.read_text()
    rows = ['| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |', '| --- | --- | --- | --- |']
    rows += [f'| {i} | {txt} | | |' for i, txt, vv, sev, cr in CHECKS if vv != 'auto']
    start, end = '<!-- checklist:start -->', '<!-- checklist:end -->'
    t = t[:t.index(start) + len(start)] + '\n' + '\n'.join(rows) + '\n' + t[t.index(end):]
    t = re.sub(r'The other \d+ checks run automatically', f"The other {v['auto']} checks run automatically", t)
    t = re.sub(r'Answer each of these \d+ ', f'Answer each of these {manual} ', t)
    rec.write_text(t)
    print('100 checks:', dict(v))
