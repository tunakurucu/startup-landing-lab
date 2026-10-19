# Voltair

Inspected: 2026-10-19 · desktop-mobile-audit · expressive-world

https://voltairlabs.com/

A full-bleed studio render of the orange VTOL drone carries the first screen; the headline is a short stacked label beside it.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Full-bleed render of an orange-and-white fixed-wing VTOL drone, nose and camera gimbal toward the viewer, on a soft grey studio ground. Bottom-left: US-flag badge 'Engineered, manufactured, and deployed in America', three-line headline 'Drone / Infrastructure / Layer' with 'Layer' in orange, and 'Built for the grid'. Logo mark top-left, dark pill 'Book a Demo' top-right, orange pill 'Plan Your Mission' bottom-right. No navigation links.

### Typography

No h1 element was measured. Largest display text 84px, measured family Neue June Medium, a wide grotesque set tight. Body 16px with line-height 1.1, measured family Garet Regular, measure about 51ch. Measured family Geist Mono carries bracketed index labels such as '[01 // AIRCRAFT]' and stat captions ('FLIGHT RANGE').

### Visual System

White ground for content sections, grey studio renders for hero and a mid-page band, near-black final section with faint map-line texture. One accent: saturated orange (headline words, pill CTAs, index labels, globe markers). Imagery: drone renders, sensor outputs (aerial RGB, false-colour thermal, LiDAR point cloud), a line drawing of the drone on its charging station, and a dotted wireframe globe. Footer ends on a large grey VOLTAIR wordmark.

### Page Sequence

Render hero → four utility co-op logos → Faraday-1 aircraft: three sensor cards and four stat tiles (85 mi, 135 min, 12 min, <500 ms) → Lighthouse-1 ground station: proactive vs reactive mission lists flanking a line drawing → 'eyes in the sky' line → render band with 'Reserve Pilot Slot' → 'How Voltair Works' globe steps (select mission, deploy VTOL, receive data) → dark CTA 'Autonomous aerial coverage for critical infrastructure.' → contact/navigation footer.

### Interaction

The page has no tabs, toggles or inputs; only links. Hovered 'Book a Demo': no visible change in the capture. Zero running CSS animations at load and after scroll. On scroll, the Faraday-1 block was caught mid-fade, and the globe section advanced 01 → 02 → 03: region marker, drone with orange beams, then an orange data card that filled with a line-drawn structure. Hero captures 2.5s apart were identical with and without reduced motion.

### Accessibility

No h1 element in the measurement. White 'Drone Infrastructure' sits partly over the light grey of the render. Content captured mid-fade was very low contrast. Body line-height measured 1.1, tight for multi-line paragraphs. No visible text navigation in the header. No horizontal overflow; mobile scrollWidth matched 390.

### Mobile

The hero crops to the drone nose and gimbal; the headline drops to 48px and 'Plan Your Mission' becomes a full-width pill under it, with 'Book a Demo' kept top-right. Logos regroup 2×2, sensor cards stack, stat tiles go 2×2, mission lists stack around the line drawing, and the globe steps persist with a narrower globe and the step text below. The footer stacks, moving the wordmark between navigation and the description.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 16 | 16 |
| Characters per line | 51 | 39 |
| Sections | 0 | 0 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For physical products, let a full-bleed render of the hardware be the hero and keep the headline to a short category label.
- Index each product as a numbered system component so a hardware stack reads as one service rather than separate SKUs.
- Show the operating model as numbered steps on one pinned visual so buyers see how the service runs, not just what it contains.
- Put named customer logos directly under the hero when the buyer is a regulated utility that buys on precedent.

Suits hardware, robotics and defence or utility suppliers whose object is visually distinctive and whose buyers want proof of capability. Wrong for software products with no physical artefact, where a render-led hero would have nothing to show.

Risk: The first screen names a category ('infrastructure layer') but not the job (inspection data for utilities) until the sensor cards. There is no h1 and no text navigation, which weakens structure for assistive tech and scanning. Repeated 'Plan Your Mission' CTAs with no pricing or spec sheet leave little for a technical evaluator to take away.

## Limitations

- Full-page screenshots were missing from the input bundle; the page was reviewed through live scroll captures instead.
- Desktop screenshots timed out and the 390 capture hung in the globe section; mobile frames were taken with WebGL disabled, so mobile canvas rendering may differ from a real device.
- No safe in-page control exists; only a hover was performed.
- Did not verify whether the globe sequence honours reduced motion while scrolling.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://voltairlabs.com/
- https://www.ycombinator.com/companies/voltair
