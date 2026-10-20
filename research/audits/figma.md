# Figma

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.figma.com

The hero sets a four-word h1, a stacked collage of finished design work and one oversized black button side by side, letting outputs stand in for the tool.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Three zones on a white first screen: the h1 set left over three lines, a centred collage of overlapping artifacts (a phone audio-player UI with a bird photo, an orange chat card, photos), and a large black 'Get started' button on the right. The nav carries 'Log in', 'Contact sales' and a black 'Get started for free'. A pale-blue Config banner with its own button pins to the viewport bottom a few seconds after load.

### Typography

One family carries the page: measured h1 56px/1.0, weight 400, tracking -0.022em, figmaSans (36px, -0.035em at 390). Measured body 30px/1.2 figmaSans—the large intro paragraphs. figmaMono is the only other measured family. Headings never go bold; hierarchy comes from size and a black-then-grey split within one sentence pair. The closing 'Get started' bar sets display-size type inside the button.

### Visual System

White ground, black text, black buttons; colour comes almost entirely from product media—illustration, type specimens, photos and UI—in a staggered tile grid with round play buttons. Hairline dividers and wide blank space separate sections. The only tinted surface is the pale-blue Config banner with a black, distorted wordmark. The footer flips to black.

### Page Sequence

Hero (h1, artifact collage, Get started) → 'Move fast in the right direction on an AI-native canvas' with 'Your built-in creative collaborator' → 'One workspace for your entire product development process' with media and design/build links → 'Powerfully expressive. Incredibly precise.' staggered media grid → 'Start with design context. Build with consistency.' (Figma Make) → 'The products you love are designed in Figma' quote, 95% stat, logo marquee → 'Ideas no longer have to wait their turn' full-width Get started → template carousel → black footer.

### Copy

h1: 'The full-stack creative canvas'. Section lines name the audience as teams working with agents ('Teammates and AI agents work in the same space with shared context'; 'Made so your whole team can go from WIP to ship, together'). Primary buttons: 'Get started' (hero, closing bar) and 'Get started for free' (nav). Proof is one statistic, '95% of the Fortune 500 uses Figma', beside one named quote.

### Interaction

Clicked the template carousel's 'Next slide' arrow: the counter changed from '1 of 10' to '2 of 10' and the card row shifted one card left. The hero collage held still across ~7 s; the Config banner appeared at the viewport bottom; the logo marquee scrolled sideways, with a pause button at its end. Video tiles showed a 'Player error' overlay in this Chromium. At one scroll step the page re-flowed and the scroll position jumped back ~740px. Reduced motion: frames still, no animations reported running.

### Accessibility

Grey continuation sentences on white are lighter than the lead but large (30px measured). The fixed Config banner covers the bottom ~90px of the viewport at 1440 and a taller stacked block at 390 until dismissed. At 390, inline 'Explore …' links measure ~22px tall. The logo marquee has a visible pause control and a skip link is present. No horizontal overflow at either width (measured).

### Mobile

Nav keeps the logo, a black 'Get started for free' button and a menu icon. The hero stacks: h1 (36px) → artifact collage at reduced width → centred 'Get started'. The Config banner becomes a stacked block with a full-width 'Read more'. The media grid drops to two staggered columns; quote, stat and template sections stack; footer link groups run as one long list.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 36 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.022 | -0.035 |
| Body px | 30 | 24 |
| Characters per line | 58 | 29 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Show what customers make with the tool rather than the tool's chrome when the output is more persuasive than the interface.
- Use one typeface and carry hierarchy with size and a black/grey value split, so a restrained page frames colourful media.
- Give the one action that matters unusual physical scale—a hero button rivalling the h1, a full-width closing bar.
- Pair one strong statistic with one named quote instead of a wall of testimonials.

Suits visual and creative products with varied, attractive output—design, video, presentation and site builders. Wrong for infrastructure, security or compliance tools whose output is invisible and whose buyers need mechanism and evidence.

Risk: The argument depends on video tiles: when playback fails the page shows error overlays and blank slots. The h1 is abstract and does not tell a newcomer what the product does. A persistent promotional banner competes with the primary button and covers content on both widths.

## Limitations

- Video tiles failed to play in headless Chromium ('Player error'), so their motion and content could not be seen.
- Full-page captures contain large blank areas where media had not rendered; those sections were checked only in live frames.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.figma.com
- https://saaslandingpage.com/figma/
