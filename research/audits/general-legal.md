# General Legal

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://general.legal

A dark full-bleed photograph of a contract on a desk sets a premium law-firm mood, then the page alternates warm photography with dense proof, people and prices.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Full-bleed dark photograph of a 'Master Services Agreement' document and pen on a wooden table fills the first screen. Cream text sits bottom-left: a two-line headline, a two-line description ending 'billing for outcomes, not hours', and a translucent rounded panel splitting two paths: 'Meet with our team...' with 'Book a call' and 'Open a matter to get a flat-fee quote' with 'Start a matter'. A transparent nav overlays the photo with a cream 'Get Started' pill.

### Typography

Measured h1 70.4px, line-height 1.0, weight 500, tracking -0.003em, family Geist; 36px at 390. Body measured 19.2px/1.5 Geist, 64ch measure (16.8px, 39ch at 390). Geist is the only measured family. A later section sets 'Expert judgment for every matter' far larger than the h1 across a photograph, and practice-area names appear as tilted display text inside a card.

### Visual System

Cream ground after the dark hero. Warm, desaturated photography: the contract still life, a wood-panelled interior with an armchair, and studio portraits of attorneys on pale grey. Cards are rounded, off-white with soft borders; one pricing tier is inverted to near-black. Client logos sit in individual tiles. Colour beyond cream, brown and black comes only from client logos.

### Page Sequence

Photo hero with split CTA panel → '500+ startups, scaleups, and enterprises trust General Legal' testimonial masonry + logo tiles → interior photo with 'Expert judgment for every matter' and four numbered steps (Start Today, Priced Up Front, Accessible Expertise, Legal at AI Speed) → 'A new kind of firm...' attorney portrait cards → 'The best lawyers, now on every matter' practice-area card → 'Simple, transparent pricing' four tiers → FAQ → closing CTA and footer.

### Interaction

Operated FAQ item '4. How does pricing work?': it expanded with a tinted row, the plus became a minus, and an answer with a 'pricing page' link appeared. On scroll, the large 'Expert judgment' line sat over the interior photo while step cards passed; the practice-area labels were at different angles in live and stored captures. The fixed header moved out of view when scrolling down. Nothing visibly moved on the first screen in either normal or reduced-motion loads.

### Accessibility

Cream text and the outlined 'Start a matter' button sit on a photograph; the right half of the description runs over the lighter document area. Where 'Expert judgment for every matter' crosses the photo, letters darken against the wood, reducing legibility. At 390 the menu icon is two thin lines. The hero image stops about 15px short of the right edge at both widths. No horizontal overflow measured.

### Mobile

The photo is cropped tighter on the document; headline, description and two full-width stacked buttons fill the lower half, and the panel's explanatory labels are dropped. Testimonials reduce to one card per row, logos to a two-column grid, attorney cards to a horizontal row cut at the edge. The 'Expert judgment' photo-and-steps section does not appear (measured sections 6 vs 7). Pricing tiers stack.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 70.4 | 36 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.003 | -0.007 |
| Body px | 19.2 | 16.8 |
| Characters per line | 64 | 39 |
| Sections | 7 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Split the hero CTA into two labelled paths ('talk to us' vs 'start now with a fixed quote') when buyers arrive at different levels of readiness.
- Use a still-life of the actual work product (a contract) as hero imagery to signal the service without stock-photo people.
- Put real prices on the homepage when the business model's differentiator is pricing; it turns a positioning claim into something checkable.
- Show the named experts with credentials early when trust in a new kind of firm depends on who does the work.

Suits professional services re-packaged as products (legal, accounting, advisory) where trust, people and pricing transparency matter more than a software UI. Wrong for a self-serve software tool, where atmosphere photography would delay showing what the product does.

Risk: The photographic mood costs legibility in two places (hero copy over the image, display text over the interior photo). The page is long (12,104px at 1440) and the mobile version silently drops the four-step process section, so phone visitors lose the explanation of how engagement works.

## Limitations

- Measurement record reports a video element, but nothing played on the first screen in this browser; headless Chromium may not support the video format, so hero motion was not verified.
- Rotation of the practice-area labels was inferred from two captures; its trigger was not observed.
- YC page location field is blank, so no geography evidence is recorded.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://general.legal
- https://www.ycombinator.com/companies/general-legal
