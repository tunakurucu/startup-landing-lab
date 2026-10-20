# Astro Mechanica

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://www.astromecha.co

A full-bleed test-stand video with one line of copy, followed by a pinned scroll-reveal statement and a single product claim; news and a newsletter stand in for a CTA.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The first screen is a looping video of a jet engine on a test stand with a glowing exhaust window, filling the viewport edge to edge. A small logo lockup sits top-left and four spaced-caps nav links (HOME underlined) top-right over the video. The only text is a two-line statement bottom-left, "We're building the next generation of flight." There is no button, no subhead and no proof element in the first screen.

### Typography

One measured family, TWK lausanne, for everything. The hero statement is the measured display at 60 px; the semantic h1 is lower on the page, measured 42 px, weight 300, line-height 1.2, zero tracking (33.6 px on mobile). Body 16 px at 1.4. Eyebrow labels, nav and footer legal are small letter-spaced caps; the footer closes with the company name set as a very large wordmark across the full content width.

### Visual System

Black ground throughout; the hero and a later section use full-bleed video, and a pinned section shows faint concentric arc lines on near-black while a statement fills in word by word from grey to white. The product section pairs the h1 with a cut-away engine render on a dark grid. A single cyan accent is used for the eyebrow, the MORE NEWS outline button and the Subscribe button. News cards use dark photos with publication logos overlaid.

### Page Sequence

Full-bleed hero video with statement → second full-bleed video band → pinned section where a one-sentence mission statement reveals word by word on scroll → product claim (eyebrow + h1 + engine cut-away render) → Recent News (three cards, MORE NEWS button) → newsletter form + link columns → giant wordmark and legal line.

### Interaction

Operated the newsletter email input by typing "audit" without submitting: the field rendered the text in uppercase and nothing else on the page changed. On load two videos were already playing (hero and second band) and a third started when scrolled into view; the control scan found no tabs, toggles or carousels, only the email input and submit button. Running animations rose from 0 to 7 while the pinned text revealed, then back to 0. With reduced motion on, all three videos still played and the reveal still ran; no prefers-reduced-motion rule was found in accessible stylesheets.

### Accessibility

White text sits directly over moving video without a scrim in the hero, and the nav links are small letter-spaced caps over the video. The reveal section renders unread words in dark grey on near-black, which looks very low contrast until scrolled. The email input uppercases typed text, which may hide case errors. No horizontal overflow at either width. The full-page capture shows a blank band where the pinned section is, so content there depends on scroll position.

### Mobile

The nav collapses to a logo and hamburger icon. The hero keeps the video with the statement near the bottom. The product section stacks: eyebrow, 33.6 px h1, then the engine render below. The three news cards stack vertically with the MORE NEWS button moved above them; the newsletter input and Subscribe button stack full width; footer link columns sit side by side and the wordmark shrinks to a single line. Page grows to 5766 px.

### Copy

H1 (semantic): "The world’s first jet engine that’s engineered for efficiency across subsonic and supersonic speeds."; the hero display line reads "We're building the next generation of flight." There is no primary action in the first screen; the first labelled action on the page is the outline button "MORE NEWS" and the form button "SUBSCRIBE". First-screen proof is the test-stand footage itself; no logos or numbers.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 42 | 33.6 |
| Headline weight | 300 | 300 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 0 | 0 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When you have real hardware footage, let it be the entire first screen and keep copy to one sentence.
- Put the semantic h1 on the single concrete product claim, not on the mission slogan, so the page's strongest statement is also its most specific.
- Use one accent colour for every clickable element so sparse pages still signal where the actions are.
- A pinned word-by-word reveal buys attention for a mission sentence but should degrade to static text under reduced motion.

Suits deep-tech and hardware companies whose audience is press, recruits and investors rather than self-serve buyers; wrong for a SaaS product that needs to explain features, show pricing or convert in the first screen.

Risk: Autoplaying video ignores reduced motion and raises page weight; the pinned reveal leaves a large empty band in non-scrolled renders and crawlers; there is no primary CTA, so the only conversions are a newsletter and news links.

## Limitations

- Video playback under reduced motion was checked by media state, not by frame comparison.
- The news cards' link targets and the MORE NEWS button were not followed.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.astromecha.co
- https://neo.com/startups?tab=Neo%20portfolio
