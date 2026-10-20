# Pitch

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://pitch.com

A 180px headline over a purple scene of blurred slide templates, with an AI prompt box directly beneath it as the first action.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A lavender announcement bar ('Pitch's MCP & API are here') sits over a saturated purple scene of blurred, scattered slide-template thumbnails. The h1 fills the centre in two huge white lines. Directly under it is a white prompt box pre-filled 'Generate a sales presentation for a digital marketplace' with '+', 'Prompts' and a pale 'Generate' button, then a two-line subhead. Nav: logo, five items, white 'Log in' pill and lime 'Sign up'; the desktop hero has no separate signup button.

### Typography

Measured h1 180px, weight 700, line-height 0.8, tracking -0.04em, family Mark Pro Bold (a heavy geometric sans); 82px at 390. Body 18px Eina 03 Regular, line-height 1.6, about 49ch measure; 14px on mobile. Section heads are bold sans in black or violet; eyebrows ('WHY PITCH', 'THE PAYOFF', 'HOW TO', 'TOOLKIT') are uppercase in a typewriter-style face not named in the measured families. Stats use very large violet numerals.

### Visual System

Two grounds alternate: saturated purple/violet (hero, Solutions, Templates, FAQ) and white (features, stats, steps, toolkit). Accents are lime green (Sign up, Get a demo, a quote card) and lavender cards. Imagery is product UI on violet gradient tiles with collaborator cursors and name tags, real slide templates, and portrait testimonial cards. A giant ghosted 'Let's Pitch' sits behind the FAQ. Icons are thin violet line glyphs.

### Page Sequence

Announcement → nav → hero (h1, prompt box, subhead) → customer logo strip → 'Pitch is your presentation workspace' with four feature rows → 'The payoff' stats (4M+, 150+, 5H+) → 'From first draft to closed deal' numbered steps ((01) Create …) → testimonial wall → 'A complete presentation toolkit' bento (AI Agent, Slide editor, Viewer analytics, Pitch rooms, Brand library …) → 'Generate slides from your existing stack' → Solutions with four audience tabs → Templates (150+) category list → FAQ ('Not just another slide tool') → footer.

### Copy

H1: 'Create slides that win.' Subhead: 'From prompt to presentation, 4M+ teams create and deliver winning slides together in Pitch.' The desktop hero's action is the prompt box's 'Generate'; the nav and mobile hero use 'Sign up' / 'Sign up for free' and 'Get a demo'. The page title and a section head call it a 'presentation workspace'; the audience is 'teams' and, in Solutions, software companies, creative agencies, leading brands and freelance designers.

### Interaction

Operated: the 'Creative agencies' tab in Solutions. The underline moved from 'Software companies', the heading changed from 'Ramp your sales engine' to 'Win more pitches' with agency copy, and the image slot was blank about 2 s later. On scroll the h1 left the hero while the prompt box stayed, nav links faded leaving Log in/Sign up pinned, and the full nav returned over purple sections. Fast scrolling produced long blank viewports. With reduced motion a viewport about 3,600px down was still blank across two captures; the measurement found no reduced-motion rule.

### Accessibility

The white subhead over a light-lavender gradient is low contrast, more so once scrolling lightens the hero. Inactive Solutions tabs are dim lavender on deep purple. The 'Generate' button is pale violet with white text. At 390 the hero buttons are 44px tall and the logo link 30px. The 390 DOM query found no unlabeled buttons or images without alt, and no horizontal overflow (matching the measurement).

### Mobile

The h1 drops to 82px and breaks into three centred lines. In the measurement capture the prompt box is an empty frosted panel, and two buttons, 'Sign up for free' and lime 'Get a demo', appear in the hero instead. The nav becomes logo plus a round menu button. Feature rows stack image over text; stats sit in two columns; testimonials and Solutions tabs run off the right edge as sideways rows; toolkit cards stack.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 180 | 82 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 18 | 14 |
| Characters per line | 49 | 30 |
| Sections | 11 | 11 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- If the product starts from a prompt, put the input directly under the headline so the first action is using the product rather than signing up.
- One oversized, tightly leaded headline can carry brand identity on its own if it stays at four or five words that still fit a phone screen.
- Introduce audience tabs after the general tour, once visitors know what the product does, so each segment sees tailored proof without a fork at the top.

Suits AI-assisted creative tools with a single-prompt starting point and a strong visual brand (decks, documents, design generators). Wrong for compliance-heavy or infrastructure buyers who need specifics and evidence before a playful prompt.

Risk: Scroll-gated reveals leave blank screens on fast scrolling and stayed blank under reduced motion, with no reduced-motion rule found. Light text on lavender loses contrast. Desktop leads with 'Generate' while mobile leads with signup buttons and an empty-looking prompt panel, so the first action differs by breakpoint. The page is long (about 14,350px at 1440).

## Limitations

- No 1440 full-page capture was supplied; the desktop sequence comes from live scroll captures, several of which were blank until sections revealed.
- The prompt was not submitted, so generated output was not observed.
- Two video elements did not play in headless Chromium; their motion is unverified.
- The live 390 load rendered mostly blank in a loaded session; mobile observations rely on the measurement captures.
- The typeface of the uppercase eyebrow labels is not in the measured family list.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://pitch.com
- https://saaslandingpage.com/pitch/
