# AquaShield

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://aquashieldai.com

Three short sections, each a sentence and an embedded animated wireframe of a building with one red pipe, funnel to a single Calendly demo button.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A sticky 97px bar: ring logo and wordmark left, one blue pill 'Get in touch' right. Two-column hero: left, a small blue tracked eyebrow 'WATER LEAK DETECTION FOR REAL ESTATE' with a short rule, a three-line headline 'Make hidden water networks visible' with the last word blue, a one-line grey subhead, a blue pill 'Book a demo' and a 'Backed by Y Combinator and OpenAI' line. Right, an embedded animation: a glass-wireframe five-storey building with a blue riser, dark pipes and one orange pipe on a faint floor grid.

### Typography

Measured h1 76px, weight 700, line-height 1.1, tracking -0.05em, family Inter; body 15.7px / 1.6 Inter, measure 78ch; Inter is the only family. Section headings ('Full visibility. Zero disruption.', 'Learn. Detect. Prevent.', 'See AquaShield in action') repeat the heavy tight-set style at a smaller size. Eyebrows are small blue uppercase with wide tracking and a leading rule. Button labels are semibold sentence case. On mobile the h1 is 42.1px with the same weight and tracking.

### Visual System

Pure black ground with a slightly lighter band for the proof strip. One blue accent (headline word, eyebrows, pills, pipes) and orange reserved for the anomaly pipe, the anomaly ring and the chart line. No cards; sections separate by whitespace. Imagery is three animations embedded in iframes: the wireframe building, a close-up pipe network with an orange node ringed in red, and the building with an overlaid 'Consumption analysis — Riser B' chart and an 'ANOMALY' tag. MIT, EPFL and Y Combinator logos in the proof strip.

### Page Sequence

Sticky nav → hero (eyebrow, headline, subhead, Book a demo, backers, building animation) → grey proof band: one sentence of value and three institution logos → 'How it works' row: pipe-network animation left, 'Full visibility. Zero disruption.' and one paragraph right → 'Real-time monitoring' row: 'Learn. Detect. Prevent.' and paragraph left, building-plus-chart animation right → 'Book a demo' centred: 'See AquaShield in action', one line, a wide blue pill 'Schedule a Demo for Your Buildings' → footer: copyright, mail and LinkedIn icons.

### Interaction

Operated the nav's 'Get in touch' link (an in-page anchor to #contact): the page scrolled from 0 to 2267px to the demo section; nothing else changed. The 'Schedule a Demo' button carries an inline handler that opens a Calendly popup; it was not operated. On load the hero building animation inside its iframe kept changing between captures 1.5s apart. On scroll each block (proof logos, copy, animation panels, contact card) ran a CSS transition as it entered view; measurement counted 19. With reducedMotion set no page-level animations ran but the hero iframe still changed over one second.

### Accessibility

Headline and button contrast is high; grey body copy and the 'Backed by' line are mid-contrast on black. The two animation panels are iframes with aria-labels ('Water network solution preview', 'AquaShield dashboard preview'). The hero iframe has a title but is tabindex -1. The 'Get in touch' pill is removed from the nav on mobile, leaving the demo button as the only CTA until the bottom. The 390 capture shows no horizontal overflow; the measured mobile content width is 250px, giving a 46ch body measure.

### Mobile

The nav keeps only the logo and wordmark; 'Get in touch' disappears. The hero recomposes centred: the building animation moves above the text, then the eyebrow (wrapping to two lines), a four-line 42px headline, subhead, the 'Book a demo' pill and backers. The proof band stacks its sentence over three logos. The two feature rows become single columns with the heading and paragraph above the animation. Page height 2890px versus 3167px on desktop.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 76 | 42.1 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.05 | -0.05 |
| Body px | 15.7 | 15.7 |
| Characters per line | 78 | 46 |
| Sections | 3 | 3 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product makes something invisible visible, build the page around one recurring visual of that reveal and let every section reuse it at a different zoom.
- Isolate heavy animations in their own embedded documents so the marketing page stays plain HTML with a single font.
- Three sections and one Calendly button is enough when the only next step is a sales call; do not add pricing or feature grids you cannot support yet.
- Use orange for exactly one thing, the problem, and keep the brand accent for everything else.

Suits early B2B hardware or property-tech companies selling to a small number of portfolio owners by demo. Wrong for a self-serve or developer product, where the lack of any product UI, pricing or documentation would stall evaluation.

Risk: No real product screenshot, customer or number appears; the proof strip offers institutions, not clients. The animations run inside iframes that ignore reduced motion and were the only visual interest, so a blocked or slow frame leaves an empty hero. The page's single CTA depends on a third-party popup, and the mobile nav loses its contact link.

## Limitations

- The Calendly 'Schedule a Demo' button was not operated, so the popup was not verified; the animations inside the iframes were observed only as changing pixels, not frame by frame.
- What the hero iframe animates under reduced motion was not inspected inside the frame.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://aquashieldai.com
- https://www.ycombinator.com/companies/aquashield
