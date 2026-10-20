# Dia

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://www.diabrowser.com

An oversized serif wordmark on a yellow scene outranks a modest h1, then numbered steps show finished artifacts Dia produces, with the waitlist button always on screen.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Saturated yellow, blurred foliage-like ground. A floating white pill nav (logo, What's New, Apps, Security) sits top centre over a one-line white serif h1. Below, an oversized white serif 'DIA' wordmark with swash terminals is half-hidden behind a cream macOS-style browser window showing a tab sidebar and an 'Ask anything…' field. A cream arc cuts across the bottom, holding a wide black 'Join the Waitlist' button and 'Available for macOS and Windows'.

### Typography

Measured h1 38.8px, weight 500, tracking -0.04em, line-height 1.1, family Exposure VAR (a serif); 28px at 390, where the measured largest text is 48px in ABC Oracle. The 'DIA' wordmark is far larger than the h1. Body 14px/1.4 ABC Oracle at 1440, 16px/1.5 at 390; measured families ABC Oracle, ABC Oracle Triple, ABC Favorit Mono and Exposure VAR. Section heads use the serif; feature cards use spaced uppercase pills; privacy toggles use mono and the footer mono uppercase.

### Visual System

Warm yellow hero, then cream for the rest of the page. Product evidence is shown as finished artifacts in framed, shadowed browser windows: a 'Friday Brief' with a landscape painting, a pale-blue 'Sarah's Week Recap', a chat summary. Bento cards with thin rounded borders, a dotted-border privacy box with a lock and On/Off chips, and the cream arc reused as a persistent bottom bar. The footer carries a circular Browser Company seal.

### Page Sequence

Pill nav → h1 → DIA wordmark and browser window → Join the Waitlist → 'Dia reads between the tabs' (01 Start your day two steps ahead, 02 Synthesis you'll actually use, 03 Find the answer without hunting it down, each with an artifact) → 'Built for how you actually work' bento (Profiles, Live Work, Better Meetings, Splits, Decks, Organized Tabs) → 'Privacy first with you in control' → 'Ready for a better day?' with Join the Waitlist → mono footer.

### Copy

H1: 'More than a browser. A better workday.' There is no subhead; the only supporting line is 'Available for macOS and Windows'. Primary button 'Join the Waitlist'; with a phone user agent it read 'Send download link'. The page names the category as a browser and immediately reframes it as a workday outcome; section copy addresses people juggling work, freelance and personal contexts, and names 'Dia for Work' for teams.

### Interaction

Clicking '02 Synthesis you'll actually use' scrolled the page so the 'Sarah's Week Recap' artifact sat beside the list, expanded 02's description with a left rule, and greyed 01 and 03; the active step also followed scroll position. After the hero, a sticky bottom arc with 'Join the Waitlist' and a top-right waitlist pill stayed on screen. The four video elements never loaded a source, and captures 2s apart at top and mid-page were identical; reduced motion looked the same, with all content visible.

### Accessibility

White serif h1 on yellow estimated at about 2.2:1 from screenshot pixels. Inactive step titles and footer links are light grey on cream. The sticky bottom bar covers roughly the lowest 100px of the viewport throughout. At 390 the menu toggle measured 16×16px and a tap on it timed out; 19 of 29 targets were under 24px tall. No horizontal overflow at either width.

### Mobile

The pill nav becomes a full-width bar with the 'Dia' wordmark and a '+' button. The h1 wraps to two lines; the wordmark and window scale down, and the waitlist button moves below the yellow arc at full width. The numbered steps recompose into artifact-then-caption pairs with no side list; the bento becomes one column; privacy chips are cropped at both edges; the footer becomes two mono columns.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 38.8 | 28 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 14 | 16 |
| Characters per line | 45 | 45 |
| Sections | 4 | 4 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Show what the product produces (a morning brief, a weekly recap, an answer) as finished artifacts rather than the interface mid-task.
- When the name is the asset, let the wordmark be the display type and keep the h1 to one supporting line.
- Keep a single conversion action persistent during long storytelling, and adapt its label to the visitor's device.
- On phones, recompose a scroll-linked side list into artifact-then-caption pairs instead of shrinking it.

Suits consumer or prosumer software with a distinctive brand and one action such as a waitlist or download. Wrong for B2B infrastructure or regulated buyers who need pricing, integrations, security detail and a sales path.

Risk: White text on yellow fails contrast, and the sticky bar permanently costs viewport height. The hero window is decorative (an empty 'Ask anything' field), so the first screen sells mood over capability. A waitlist-only action with no pricing leaves evaluators nothing to try immediately.

## Limitations

- Hero and feature-card videos did not load in this Chromium build, so their content was not seen.
- The 'Dia reads between the tabs' heading appeared clipped in the measurement full-page capture but rendered fully in the live visit.
- The main button label differed by user agent; other device-specific differences were not explored.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.diabrowser.com
- https://saaslandingpage.com/dia/
