# Atomarine

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://atomarine.co

A full-bleed render of floating platforms with a full-width uppercase claim along the bottom edge makes an unbuilt industrial system feel concrete.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A full-bleed aerial image of floating data-center platforms and a service vessel at sea fills the screen. The uppercase h1 'NUCLEAR DATA CENTERS AT SEA' runs the full content width along the bottom edge, with a yellow-dot label above it and a yellow 'SCROLL TO SEE THE PLATFORM ↓' cue at right. A three-line tagline sits mid-left. The nav holds only the wordmark and a yellow Contact button.

### Typography

Single measured family, Instrument Sans. Measured h1 80.7px, weight 500, tracking 0, line-height 0.9, set uppercase; 42px with line-height 1.1 at 390, wrapping to two lines. Body measured 14px/1.3. Section heads are mixed-case and medium weight; small uppercase labels with a dot mark each section (THE CONSTRAINT, SCALE, POWER).

### Visual System

Alternates near-black navy, white and deep blue grounds. A single yellow accent for buttons, labels and benefit headings. Imagery is photoreal pictures of platforms, ships and a desert data center; abstract dot-field and particle graphics accompany stats; the scale section uses white line drawings of platform layouts. A large outlined wordmark closes the footer.

### Page Sequence

Hero image → four-stat grid (4X, 1.5 GW, <1.1 PUE, 20–40 YR) with particle graphics → 'AI's bottleneck is access to power' numbered list beside a desert photo → 'Going offshore unlocks unparalleled scalability' with a platform image and four yellow-labelled benefits → 'The campus grows with demand' scroll section with line drawings → 'Gas today, nuclear tomorrow' comparison slider → backer logo strip → embedded YouTube video → 'Get in touch' form → footer.

### Interaction

Dragged the 'Gas today, nuclear tomorrow' comparison handle left: the divider moved from about 60% to about 15% of the width, so the branded marine-reactor vessel filled most of the frame over the LNG carrier. Section content appeared only after it entered view; captures taken under 0.5s after a scroll step showed blank sections. In the scale section, line drawings and a statement slid horizontally as I scrolled. Under reduced motion the hero video element still reported playback (about 1.5s elapsed).

### Accessibility

Small grey stat captions on near-black are low contrast. Hero tagline is white text directly over the render with no visible scrim. At 390, the footer email and back-to-top links are 16px tall, and a DOM check found 16 links or buttons with no text, aria-label or title. Contact form fields have visible labels. Measurement record marks the reduced-motion rule as unverified. No horizontal overflow.

### Mobile

The hero image is recropped to a portrait slice; the h1 drops to 42px and wraps to two lines under the label, losing the full-width edge effect, and the 'scroll to see' cue is gone. Stats become a single column; the constraint list moves above its photo; the four benefits stack under the platform image. Nav keeps wordmark and Contact. In my live 390 scroll most sections stayed blank in captures, while the batch full-page capture shows them.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80.7 | 42 |
| Headline weight | 500 | 500 |
| Headline tracking em | 0 | 0 |
| Body px | 14 | 14 |
| Characters per line | None | None |
| Sections | 8 | 8 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When the product is physical and not yet built, lead with a render that shows its scale in context and state the category in the headline.
- Order the narrative as constraint, answer, scale path, then transition story so a sceptical buyer meets the problem before the claim.
- Use a before/after slider when the pitch is a substitution, so the visitor performs the change themselves.
- Restrict accent colour to one hue for actions and labels so it survives across dark, white and photographic sections.

Suits deep-tech, energy and infrastructure companies selling to investors, operators and partners, where one bold image carries the thesis. It would be wrong for a self-serve software product that needs to show an interface and a sign-up path.

Risk: Reveal-on-scroll content leaves sections blank to fast scrollers, screenshots and possibly assistive tools. The page shows renders and claims (4X faster, <1.1 PUE) without sourcing on the homepage. A single Contact action and 14px body text limit depth for technical buyers, and the hero video kept playing under reduced motion.

## Limitations

- Embedded YouTube video was not played.
- Stat claims and renders are company statements; whether imagery is rendered or photographed was not verified.
- Whether reveal sections fail on real mobile devices or only in headless scrolling was not determined.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://atomarine.co
- https://www.ycombinator.com/companies/atomarine
