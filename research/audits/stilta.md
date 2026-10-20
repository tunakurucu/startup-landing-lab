# Stilta

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://stilta.com

A full-screen microscope-footage hero with a centred two-line claim, then a long, quiet enterprise narrative that alternates product panels, proof and a chat-styled FAQ across light and dark grounds.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

The whole first screen is blurred microscope footage (a green rod-shaped organism among dark particles) with a white two-line headline centred mid-screen, a one-line proof subhead ('Used on high-stakes patent matters by Fortune 500s and AmLaw 100s'), and a white 'Book a demo' pill beside a translucent 'Log in'. A 'Trusted by 100+ IP teams' logo marquee runs along the bottom edge. A cookie banner covers the lower right. Nav: wordmark, three left links, three right links and a white CTA pill.

### Typography

Measured h1 60px, weight 500, line-height 1, tracking 0, family Haas Recast Open; display 60px; body 16px at 1.4 line-height. Families present: Haas Recast Open and Haas Recast Dense. Mobile h1 44px, measure 44ch. Section headlines are two-line, medium-weight sans; eyebrows are small plain text ('Product', 'Technology'); on-screen UI mock text and chart labels are much smaller.

### Visual System

Warm off-white ground for product sections, a dark blue-to-black gradient panel for the product screen, near-black for 'Built beyond the prompt' and the FAQ, and a blue-grey gradient for the closing CTA and footer. Imagery: hero video, soft grey product-screen mocks under pill tags, a dotted-line pyramid diagram on a faint grid, a telecom-tower photograph, blurred-portrait testimonial cards with client logos (KUKA, Spotify). Rounded pills everywhere: tags, buttons, FAQ bubbles.

### Page Sequence

Nav → video hero + logo marquee → 'Litigation-grade' three mode cards (Offense/Defense/Strategy) → 'Two modes. One standard of evidence' dark panel with Project/Portfolio tabs and a laptop screen → 'Built to answer the hardest patent questions' pyramid diagram with three callout cards → 'Built for every field of innovation' practice-area list + photo → testimonial slider → dark 'Built beyond the prompt' → chat-styled FAQ with input → 'Bring a patent matter' CTA → footer.

### Interaction

Operated the '02 Portfolio' tab: aria-selected moved to it, the caption changed from 'Deep analysis for a high-stakes matter' to 'At-scale analysis across portfolios' and the laptop screen content changed to a prompt reading 'type @ to tag a portfolio'. On load the logo marquee scrolled and a progress-fill animation inside a 'patent-landscape' element ran; nothing ran after scroll. The nav switched from white-on-video to black-on-cream over light sections. With reduced motion no animations ran at all and the top screen was static.

### Accessibility

The hero video element exists but only its poster rendered in headless Chromium. Testimonial slider indicators are 6×6px dots (one 32×6), labelled by aria-label. Grey eyebrow and body text on cream, and grey text on near-black, are low-contrast. The cookie banner overlaps hero content on both widths. The FAQ's 'Send question' button is 32×32. No horizontal overflow measured.

### Mobile

Nav keeps the 'Book a demo' pill beside a hamburger. Headline 44px over the same footage; buttons stay in a row. The three mode cards, the pyramid callouts, the practice-area list and photo, and testimonials all stack to one column; the FAQ bubbles become full-width stacked pills. Page height grows from 9881 to 10992px with eight measured sections; the cookie banner occupies the bottom fifth of the first screen.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 44 |
| Headline weight | 500 | 500 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | None | 44 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Use footage of the subject matter (a microscope slide for patents) rather than the software to set tone, then show the product only in a framed panel further down.
- Let a two-option tab switch both the caption and the screen so one panel demonstrates two product modes without doubling the page.
- Phrase the FAQ as a chat transcript when the product itself is conversational, so the format demonstrates the interaction model.
- Swap nav colour by section ground instead of pinning a fixed bar, so the first screen stays uninterrupted.

Suits enterprise AI sold to conservative professional buyers (law, finance, compliance) who want calm proof over flash; wrong for a consumer or developer tool where visitors expect to try the product within the first screen.

Risk: Very long page (almost 10,000px) with the product first shown around 2,500px down; low-contrast grey copy throughout; tiny slider dots; the cookie banner competes with the hero CTA on every first visit; hero footage is decorative and says nothing about patents until the headline is read.

## Limitations

- Hero video did not play in headless Chromium; only the poster frame was seen.
- Did not dismiss the cookie banner or submit the FAQ input.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://stilta.com
- https://www.ycombinator.com/companies/stilta
