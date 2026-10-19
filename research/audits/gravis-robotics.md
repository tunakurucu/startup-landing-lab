# Gravis Robotics

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://www.gravisrobotics.com/

Full-bleed field footage of an excavator under a two-line bold headline, on a black ground with red used sparingly, lets the machine stand in for the pitch.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A black top bar holds the 'G' mark and six text links (Hardware, Software, About Us, News, Careers, Contact); there is no button. Below, full-width excavator footage under a dark gradient carries a small 'GRAVIS ROBOTICS' label, the centred two-line headline 'Tap your finger / move a mountain', a scroll cue, and a pause button at bottom right.

### Typography

Measured h1 72px, line-height 1.0, weight 700, tracking 0, family Bahnschrift (a condensed-leaning DIN-style sans); body 22px/1.3 measured Inter at about 45 characters. Phone h1 28px, body 14px. Section titles ('What we do', 'Why Autonomy?', 'Meet the Gravis Rack') use the same bold display face at smaller size; dates and footer labels are small red text.

### Visual System

Black ground with white type; red is the only accent (buttons, the active benefit icon, logo-carousel progress line, news dates, footer headings). Imagery is real machinery: aerial and close-up excavator footage, a red-boom photo carousel with rounded corners, a cab photo, a white rendered excavator beside a worker. A dark soil-texture band sits behind the customer logos.

### Page Sequence

Video hero → 'What we do' copy with red 'Watch the video' button beside an image carousel → 'Why Autonomy?' four-item accordion (Superhuman Productivity, Safety, Predictability, Simplicity) with image panel → 'Meet the Gravis Rack' photo and red 'Explore the Hardware' button → 'Trusted by market leaders' logo marquee on soil texture → 'Latest News' three cards → footer with offices and newsletter field.

### Interaction

Clicked 'Safety' in 'Why Autonomy?': it was already marked red; after the click a white render of an excavator and a standing worker filled the image panel, which was empty in the pre-click frame. With default motion, the hero footage changed shots between frames 2 s apart (35% of pixels). In one load the headline and logo were absent for 9 s after DOMContentLoaded; after the load event they were present. Under reduced motion the hero held one still frame with headline shown.

### Accessibility

White headline over footage sits on a darkening gradient. Small red dates and footer labels on black are low contrast. The newsletter email field had no aria-label attribute. The hero has a visible pause control. No horizontal overflow. Large areas rendered as empty black in full-page captures until scrolled into view.

### Mobile

Nav collapses to the 'G' mark and a menu icon. The hero shortens (measured 664px) and the headline drops to 28px, about 0.39× desktop. The photo carousel shows one image; the logo marquee shows about two logos at a time; news cards stack; the footer stacks with the newsletter button below the field. In the 390 capture the space between the carousel and the logos rendered as plain black.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 28 |
| Headline weight | 700 | 700 |
| Headline tracking em | 0 | 0 |
| Body px | 22 | 14 |
| Characters per line | 45 | 47 |
| Sections | 6 | 6 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When the product is a machine doing physical work, let unedited field footage carry the first screen and keep the headline to two short lines.
- Use one accent colour only for state and action so the active item reads instantly on a dark ground.
- Explain what the product does in one paragraph before showing customer logos and funding news.

Suits robotics, hardware and industrial autonomy with real field footage. Wrong for an API or SaaS product with nothing physical to film.

Risk: The first screen offers no action besides navigation and a scroll cue. Content depends on media and scroll reveals, leaving long black gaps while loading. The phone headline at 28px loses most of its weight. Benefit copy ('Less exposure, more awareness') stays generic next to strong imagery.

## Limitations

- Video elements reported paused to script in this headless Chromium even while hero pixels changed, so playback behaviour is described only from frame differences.
- Headline timing varied between loads; visibility depended on load progress over this proxy.
- Measurement could not verify a reduced-motion rule; only one reduced-motion load was compared.
- The 390 layout was captured, not operated live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.gravisrobotics.com/
- https://pear.vc/gravis-robotics-series-a/
