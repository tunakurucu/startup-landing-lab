# Imperfect

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://imperfect.co

A torn-paper, cut-out-athlete collage world carries the brand, while the product shows up only as small schedule miniatures inside dark cards.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Split first screen on white: a large three-line headline "For the imperfect ones." bottom left, a short subhead, paragraph and orange "Talk to your coach" pill in the middle column, and a cut-out runner over overlapping torn-paper and translucent colour shapes on the right. A smaller collage and a thin orange line motif bleed off the top-left corner. Nav is a script-style wordmark plus four text links, no nav button.

### Typography

Display is a rounded geometric sans, measured family Rink: h1 96px, weight 500, line-height 0.9, tracking 0; the final period is set in blue. Body is measured Inter at 18px/1.4 with a 36ch measure in the hero. Families: Inter, Rink, system-ui. Section heads reuse the rounded display face at smaller sizes over small purple uppercase eyebrows. The measured h1 text contains the phrase twice in the DOM.

### Visual System

White and pale-grey grounds alternate with a deep navy band and a lilac app band. Saturated orange, mustard, olive, purple and blue appear as torn, textured paper shapes; athlete cut-outs (runner, cyclist, triathlete) sit on blue shadow shapes with hand-drawn orange route lines. Product UI appears only as small diagrams: a week grid with a moved session, a 'Today' card, a goal path, a dot-grid progress counter.

### Page Sequence

Hero → "Every pro has a coach" with three torn-paper benefit cards → navy "Built for imperfect weeks" 2×2 scenario cards → "Three sports. One coach." (Running, Cycling, Triathlon cards) → two-column FAQ accordion → lilac "Take your coach with you" with QR, store badges and two phone mockups → navy footer.

### Interaction

Operated the FAQ item "Do I need a watch?": the plus became an ×, aria-expanded went true and a short answer opened below. Nothing moved in the first screen on load. On scroll, the navy scenario cards appeared one after another with their diagrams drawing in; at about 1.5s the fourth card was still faint. With reduced motion, all four cards were fully rendered on arrival and I saw nothing move.

### Accessibility

Mobile body text measures 12px. Scenario-carousel dots on mobile measure 16×24px. In the static desktop full-page capture the fourth scenario card is empty because it had not yet animated in. FAQ buttons expose aria-expanded. No horizontal overflow measured at either width; no images without alt were found.

### Mobile

The hero recomposes: collage and runner move above the headline, which drops to 40px on two lines with copy and CTA beneath; nav collapses to a hamburger. Benefit cards stack with alternating offsets. The scenario grid becomes a swipe carousel with four dots, sport cards scroll sideways with the third card cropped at the edge, FAQ becomes one column, and the app band shows store badges without the QR code.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 96 | 40 |
| Headline weight | 500 | 500 |
| Headline tracking em | 0 | 0 |
| Body px | 18 | 12 |
| Characters per line | 36 | 57 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let one tactile illustration system (here torn paper and cut-out athletes) carry the brand so product screenshots can stay small and diagrammatic.
- Explain an adaptive product with before/after scenario cards that show the plan changing, rather than feature lists.
- Put the emotional promise in the headline and the literal category in the subhead directly beside it.
- When content animates in on scroll, make sure the reduced-motion and static states render every card fully.

Suits consumer apps selling a feeling as much as a function: fitness, habits, hobby coaching. Wrong for a product whose buyer needs to see dense UI or data before trusting it, such as an analytics tool.

Risk: The coach itself (the AI conversation) is never shown at full size, so the product's core interaction is left to imagination. Scroll-entrance cards are empty until triggered, which shows in static captures and possibly for fast scrollers. 12px mobile body text is small for the main explanatory copy.

## Limitations

- Did not open the hamburger menu or the store links; app behaviour not inspected.
- Animation count of 55 after scroll comes from the measurement record; I observed only the scenario cards visibly entering.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://imperfect.co
- https://www.ycombinator.com/companies/imperfect
