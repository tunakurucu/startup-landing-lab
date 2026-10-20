# Congruent

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://congruent.io

A 100px all-caps claim and an exploded hardware render hand off to a scroll-pinned city scene whose caption steps through Record, Augment, Get synthetic data.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A fixed 65px header: wordmark at left, small tracked monospace links HOME, TECHNOLOGY, ABOUT US centred and CONTACT US at right. On a near-black ground with a blue radial glow, a three-line all-caps headline fills the left two-thirds: 'THE ONLY RADAR FOR' in white, 'END-TO-END AUTONOMY' in cyan. A three-line monospace paragraph, a cyan rectangular 'BOOK A DEMO' button and a 'Backed by Y Combinator' line sit beneath. An exploded render of the radar module (lid, antenna board, housing on pins) floats at the right, overlapping the headline's last word.

### Typography

Measured h1 100px, weight 800, line-height 1.1, tracking -0.02em, family Outfit, all caps; body 16px / 1.8 in JetBrains Mono, measure 65ch; only those two families. Section headings reuse Outfit bold with one cyan word ('Record real data.', 'Augment the scene…'); the later claim rows mix a light-weight Outfit first half with a bold second half. Nav, button labels and the demo-form fields are small tracked monospace. On mobile h1 is 32px and body drops to 12px at 24ch.

### Visual System

Dark navy-black ground, a single cyan accent used for the headline, the CTA, the 'TEAM' label and one word per heading; orange only in the YC mark. No cards or borders. Imagery is rendered 3D: the exploded radar module, a bird's-eye street with blue, yellow and red radar fans, a night-time street video that gains a cyan wireframe overlay and red bounding boxes, and a frontal car render with a cyan point-cloud skin. A faint perspective floor grid closes the hero. Two circular team photos at the end.

### Page Sequence

Fixed nav → hero (headline, mono paragraph, Book a Demo, YC line, exploded render) → 'the only radar with raw data, real or synthetic' beside a radar-fan street render → 'The Paradigm Shift: End-to-end Training' → pinned section: street video held left while the caption steps 'Record real data' → 'Augment the scene in your world model' (wireframe overlay, typed prompt '> Add a pedestrian on the sidewalk', a pedestrian appears) → 'Get synthetic raw data' → three claim rows with car renders → TEAM: two founders with bios → footer with Privacy Policy.

### Interaction

Operated 'BOOK A DEMO': the button was replaced in place by an inline form (name, email, use-case textarea, a Formspree notice, Cancel and Submit), which pushed the hero text up under the fixed header; nothing was submitted. On load one muted looping video autoplayed in the pinned section and a cursor blinked in the typed-prompt span. On scroll the video stayed pinned while captions and overlays changed and the prompt typed out. With reducedMotion set the video still autoplayed and the cursor still blinked; the first screen itself did not change over one second.

### Accessibility

The monospace paragraph is light grey on dark, fine at 16px but 12px on mobile where the radar render sits behind it. The exploded render overlaps 'AUTONOMY' at 1440. Demo-form fields have placeholders but no label elements. HOME, TECHNOLOGY and CONTACT US link to '#'. Opening the form pushes the headline under the fixed header, clipping it. The full-page capture rendered the sticky section as large blank areas.

### Mobile

Nav shrinks to the centred wordmark alone; the three nav links and CONTACT US disappear with no menu control. The headline becomes four centred lines at 32px; the exploded render moves behind the body paragraph instead of beside it, and the YC line wraps. The pinned street video becomes a small full-width strip with the wordmark bar overlapping it in the capture; the claim rows and team cards stack to one column. Page height 13302px with large empty stretches between pinned steps.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 100 | 32 |
| Headline weight | 800 | 800 |
| Headline tracking em | -0.02 | -0.031 |
| Body px | 16 | 12 |
| Characters per line | 65 | 24 |
| Sections | 6 | 6 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Pin one scene and change only the caption and overlay as the reader scrolls; the constant frame makes a three-step pipeline legible without a diagram.
- Reserve the accent colour for one word per heading so the claim hierarchy survives an all-dark page.
- Pair a geometric display face with a monospace body when the product is hardware plus data; the contrast separates the claim from the specification.
- Expanding a demo form in place keeps the reader in context, but reserve the vertical room for it so the hero does not jump.

Suits deep-tech hardware or simulation products whose pitch is a before/after transformation of a scene (sensors, robotics, synthetic data). Wrong for a product with many features or self-serve signup, since the page offers a single demo request and nothing to try.

Risk: Everything hinges on the pinned video; headless capture, slow connections or reduced-motion users get a long page of blank space and a video that keeps playing. Three nav links go nowhere, the hero render collides with the headline at 1440 and with the body text at 390, 12px body on mobile is hard to read, and 'the only radar' is asserted five times without evidence beyond renders.

## Limitations

- The pinned video's content was seen through viewport captures during scroll; frame-level changes between captures were not verified.
- Nav links resolve to '#', so TECHNOLOGY and CONTACT US targets could not be checked; the reduced-motion rule is 'unverified' in the measurement record and only live behaviour was observed.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://congruent.io
- https://www.ycombinator.com/companies/congruent
