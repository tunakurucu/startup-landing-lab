# Opal Electronics

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://op.al/

The homepage is one dated letter set in a narrow column over an overhead photograph of the company's prototype table, with no menu, buttons or product listing.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

No conventional hero. The first screen is an overhead photograph of a concrete table crowded with cameras, circuit boards, chrome parts and coloured prototypes, with a narrow centred white text column on top: bold 'the table', the date 'June 1, 2026', then the opening paragraphs of a letter. Only a small two-line 'opal electronics' wordmark sits top left; there is no navigation menu and no button.

### Typography

No h1. The title 'the table' is an h2 measured at 48.9px, weight 700, in the single measured family Die Grotesk C (a grotesque sans). Measured display sample 21px; body 16px/1.5 at 1440 and 14.6px/1.1 at 390, same family. Paragraphs are ragged right in a column about 360px wide in the desktop capture, white on the photograph; the sign-off 'See you soon.' is yellow.

### Visual System

Black ground under one long overhead photograph that runs the length of the letter and fades to black at its end. Colour comes only from the photographed objects (yellow, red, teal, chrome). Below the letter, a giant 'opal' wordmark drawn in grey dots on a canvas fills the width, then a minimal black footer. A faint full-page grain overlay (opacity 0.04) sits over everything.

### Page Sequence

Wordmark + title and date → letter over the table photograph (company history, the target customer, an investment announcement, three wishes) → 'See you soon.' → dotted 'opal' wordmark canvas → footer (Support, Terms, Privacy, Jobs, Contact, 'All rights reserved').

### Copy

No h1; title 'the table', dated 'June 1, 2026'. The letter opens 'In our office, there is a table.' and describes the company's webcams, its customer ('the golden decile: the ten percent of people who want something of extreme difference'), an investment announcement and three wishes. No primary button; the only links are the footer and the wordmark. The category is named in the text as 'top electronics for demanding customers'.

### Interaction

The page has no tabs, buttons or toggles; the one operable surface is the dotted wordmark canvas, which sets a crosshair cursor. Brighter patches of dots drifted across the letters while idle; after sweeping the pointer across it, lit patches covered more of 'pal', but the idle drift prevents attributing that to the pointer. Nothing else moved on load or scroll apart from the grain overlay. With reduced motion the grain overlay's animation still ran (frame-to-frame pixel changes up to 10/255).

### Accessibility

No h1 and no main landmark; the logo link has no text or label. White body text sits on a busy photograph without a scrim; at 390 several paragraphs overlap objects (for example the investors paragraph over dark glass shapes). At 390 the five footer links are 21px tall. No horizontal overflow at either width.

### Mobile

The photograph is recomposed, not just cropped: at 390 'the table' sits large on two lines beside a stack of cameras, and the letter breaks into blocks that alternate left and right around individual objects. The dotted-wordmark area rendered as black space in the 390 full-page capture, and footer links stack vertically. Page height 3,176px versus 3,656px on desktop.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 16 | 14.6 |
| Characters per line | None | 22 |
| Sections | 1 | 3 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- When there is little product to show yet, publish one dated letter as the homepage and let the voice and the taste of its imagery do the selling.
- Use a single photograph of real artefacts as the page ground so the body of work is visible without product cards.
- Drop navigation and calls to action entirely when the page's job is announcement and recall rather than conversion.
- Art-direct the mobile version separately, moving text blocks around objects instead of shrinking the desktop composition.

Suits design-led hardware companies at an announcement or stealth stage with a strong founder voice; wrong for any product that needs sign-ups, pricing comparison or self-serve onboarding.

Risk: No path to buy, sign up or learn product details; no h1, main landmark or named logo link; long white text over a busy photo strains legibility, worse at 390 where text overlaps objects; a dated letter goes stale; the grain overlay ignores reduced motion.

## Limitations

- Whether the dotted canvas responds to the pointer could not be separated from its idle motion.
- Reduced motion was checked at the top and mid-letter; the canvas was not re-checked under reduced motion.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://op.al/
- https://www.awwwards.com/sites/opal-tadpole
