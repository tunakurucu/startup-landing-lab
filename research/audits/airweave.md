# Airweave

Inspected: 2026-10-19 · desktop-audit · typographic-technical

https://airweave.ai/

A dark developer page moves from a restrained promise into an editable-feeling API example and a three-step retrieval model.

## Company evidence

YC: verified-yc; batch: P25.

- desktop: 1363 × 936: rendered hero, section scan and selected interaction
- tablet: not inspected
- mobile: 390 × 844: computed styles measured 2026-10-19; not visually inspected

## Observations

### Hero

A centered Build smarter agents statement, YC badge and two actions sit on a dark blue-to-warm gradient. A wide code panel takes over the lower half of the first screen, with Python selected beside cURL and Node.

### Typography

Large plain sans-serif headline, small tracked uppercase navigation and monospaced code. Exact font families unverified.

### Visual System

Nearly black surface, muted blue and warm gradient light, hairline code frames and small orange selected-state accents. The technical artifact carries more visual weight than decorative imagery.

### Page Sequence

Hero/API example → customer strip and infrastructure rationale → three-step How Airweave Works → feature illustrations → four pricing tiers → blog/academy → FAQ → footer. Selected middle regions were scrolled separately because scroll reveal lowered text visibility in an intermediate viewport.

### Interaction

Clicked cURL in the hero example. The selected language changed from Python and the visible snippet changed to cURL requests. No API request, account signup or pricing purchase was made.

### Accessibility

The code language chooser was clickable in the rendered page; its labels were visible but not surfaced as named tabs in the accessibility tree. Keyboard, contrast and screen-reader behavior remain untested.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80 | 41 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.03 | -0.03 |
| Body px | 18.1 | 14.4 |
| Characters per line | 79 | 43 |
| Sections | 10 | 10 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- Let a representative integration example answer the first technical adoption question.
- Use one small system diagram to explain where infrastructure sits.
- Keep the free-start and assisted-demo paths distinct.

Useful for a developer tool whose installation and place in a stack are central buyer questions.

Risk: The quiet supporting copy appeared faint in an early render and needs contrast review. The roundup praised a previous snapshot; its judgment is not automatically transferable to the current site.

## Limitations

- One cloud Chromium session at a 1363 × 936 desktop viewport on 2026-10-19; the homepage can change.
- Tablet, mobile, keyboard-only, screen-reader, color contrast and reduced-motion behavior were not tested.
- Exact font names, animation timing, implementation libraries and conversion effects were not established.
- A third-party design mention is a selection lead, not an independent conversion or product-quality endorsement.
- The external roundup praised Airweave’s clean dark visuals; the current page was inspected independently.

## Sources

- https://airweave.ai/
- https://www.ycombinator.com/companies/airweave
- https://www.linkedin.com/posts/rishabhsamb_i-found-my-favorite-landing-pages-from-recent-activity-7378140765811568640-oUaI
