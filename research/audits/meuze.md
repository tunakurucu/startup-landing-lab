# Meuze

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.meuze.ai/

A dark halftone restaurant hero pinned through a long scroll track hands off to scroll-driven scenes that stage forecasting, stock, labor and ordering with illustrative mock data.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Full-bleed dark, dot-screened (halftone) image of an empty quick-service dining room with menu boards fills the first screen. A two-line headline sits left of centre, a two-sentence description and a blue 'Book a Demo' button sit bottom-left, and a hairline rule captioned 'Live data, every shift' sits bottom-right. The nav carries four uppercase links and a blue 'See it Live' button.

### Typography

Measured h1: geist 47px, weight 300, tracking -0.025em, line-height 1.1, a light grotesque in title case (29.6px, -0.03em at 390). Section headlines switch to a book serif (measured families include lora) at a similar scale. Eyebrows and chart labels are tracked uppercase mono (measured family jetbrainsMono). Body: geist 15.5px/1.5, 53ch measure.

### Visual System

Near-black ground for hero, the scale band and the onboarding band; white panels framed by grey hairlines with small black square corner markers elsewhere. One saturated blue carries CTAs, active states and chart lines. Nearly all imagery is dot-matrix or halftone: the hero photo, an isometric store cutaway, a counter-scene illustration, a dotted globe and a large pixelated logo mark. Charts are small, light-grey and dotted.

### Page Sequence

Hero (pinned ~4,050px scroll track) → How it works (four steps beside an isometric store) → Operations (four mini-dashboards: demand, ordering, labor, supply chain, plus integration marks) → Built for scale ('2,000+' over a globe, dark) → Forecast (scenario illustration with five metric tiles) → Any device (app icon) → Forward deployed (four onboarding steps, dark) → blue closing CTA band → footer.

### Interaction

Clicked the 'Inventory' step in How it works: it turned blue, the page jumped ~1,460px down its track, and the store cutaway redrew with the dining room faded to dotted outline. On scroll, hero text dims to transparent and returns on scroll-up; Operations cards and onboarding steps light up in turn; the forecast scene swaps from a light weekday (740 guests) to a crowded night (2,220). Under reduced motion, no animations ran, nothing was hidden, the hero track collapsed, Operations cards and onboarding steps showed fully lit, and the forecast showed its night state.

### Accessibility

No horizontal overflow at either width. Inactive steps and not-yet-reached Operations cards render as pale grey text on white, low contrast until activated. Mono micro-labels on charts and metric tiles are very small. At 390, footer links measure 19px tall and the scenario buttons 36px. The menu button has an aria-label, the globe's 23 site markers are labelled buttons (24×24), and a skip link exists. The hero video did not decode in the test browser; only its poster showed.

### Mobile

Nav collapses to logo plus hamburger; 'See it Live' leaves the first screen. Hero recomposes: image band on top, headline (29.6px) beneath, description cut to its first sentence, 'Live data, every shift' caption gone. How it works becomes illustration, then active description, then a 2×2 tab grid. Operations cards stack full-width, all rendered fully. Forecast gains two visible buttons, 'Tue · Rain' and 'Sat · Match night', above five metric tiles in two columns. Page height drops from 19,710px to 10,389px.

### Copy

H1: "The Company Brain For Your QSR Business."; primary action "Book a Demo" (nav: "See it Live"). The first screen offers no proof beyond the description; further down the page claims '2,000+ QSR locations running on Meuze' and shows five small grey integration marks (one legible as a Sysco wordmark) labelled 'Plus any system you run'.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 47 | 29.6 |
| Headline weight | 300 | 300 |
| Headline tracking em | -0.025 | -0.03 |
| Body px | 15.5 | 15 |
| Characters per line | 53 | 80 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Show each capability as a tiny, specific operational artifact (a forecast curve with a 'match day' spike, a 'Pull 12kg, today 14:00' card) instead of a feature icon and a paragraph.
- Keep one image treatment (halftone and dot-matrix) across photo, illustration, data and logo, so very different content reads as one system.
- Pair a scroll-staged scenario with explicit buttons, as the mobile forecast does, so the comparison stays reachable without scrubbing.
- Design the reduced-motion version as a complete static page: collapse scroll tracks and show every scene in its finished state rather than just stopping motion.

Suits operations or vertical-SaaS products whose value is a chain of decisions a buyer can picture in their own location (forecast, staff, order). Wrong for a self-serve developer tool where visitors want docs, pricing or a signup within one screen.

Risk: At desktop the hero sits in a ~4,050px scroll track (about four and a half viewport heights) before the first explanation arrives, and a static or non-JS capture shows thousands of pixels of empty dark band. Content is dimmed until scrolled into view, and on desktop the forecast comparison is bound to scroll rather than a control. Proof rests on one unattributed count and five small marks, and the first screen offers none.

## Limitations

- The hero video (mp4) failed to decode in the test Chromium (no H.264), so the scroll-scrubbed footage was never seen; only the poster and the text fade were observed.
- The desktop full-page screenshot was capped at 9,000px of a 19,710px page; the lower desktop sections were checked through live viewport captures only.
- Desktop has no visible forecast switch (a 'Sat · Match night' button exists in the DOM but has zero size at 1440); the mobile scenario buttons were observed but not clicked.
- Hover changes and the logo-mark pulse come from the measurement record, not from visual inspection; whether the globe rotates was not confirmed.
- Only the homepage was visited; nav and footer destinations were not followed, and the '2,000+' figure and integration marks are recorded as page claims, not verified.
- Single browser, single inspection date; homepage content can change.
- Selected as a maintainer pick; no public design recognition was found and recorded.
- The site's robots.txt allows the homepage and a few named pages only; nothing else on the domain was visited.

## Sources

- https://www.meuze.ai/
