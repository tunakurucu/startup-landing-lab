# Elyra

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://www.elyrasystems.com/

A warm, photographic hero with a large light serif headline sells the guest's feeling first and leaves the reservation product almost entirely off the first screen.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A full-bleed close photograph of a tablecloth, plate and folded napkin under a dark brown overlay. Left-aligned: a tracked eyebrow 'AI-POWERED RESTAURANT OPERATIONS', a four-line serif headline ending in italic 'feel.', two lines of description, a white 'Book a demo' pill and a 'See the platform →' text link. A dark strip along the bottom holds 'Backed by Y Combinator' and moving restaurant-group logos.

### Typography

Measured h1 72px, line-height 1.1, weight 300, tracking 0, family Playfair Display (high-contrast serif); body 15px/1.6 measured Inter at about 60 characters. Phone h1 40px. Section headings repeat the device of one italic serif word in a muted tone ('service.', 'comes back.', 'regular?'). Eyebrows are small tracked uppercase sans.

### Visual System

Warm amber restaurant photography; cream and off-white section grounds alternate with near-black bands. Almost no colour beyond the photographs: white pills on dark, black pills on light, orange only in the YC badge. A small line drawing of a plate and wine glass decorates the word-list section. Stats are set in large serif numerals.

### Page Sequence

Photo hero + logo strip → 'The finest restaurants use Elyra for' scroll-highlighted list (Voice Booking … Campaign Outreach) with 'Explore Platform' → 'We follow the heartbeat of your restaurant': Before service / Peak hours / After hours photo cards → dark 'By the numbers' four stats → 'Give every guest Michelin-grade service.' three product cards → dark 'Our philosophy' with photo and 92.4% overlay → FAQ accordion → dark CTA 'Ready to make every guest a regular?' with phone number → footer with 'All systems operational' pill.

### Interaction

Clicked the FAQ item 'Is Elyra a reservation system?': it expanded to show a paragraph answer and its plus became a cross. The logo strip drifts sideways; the word list darkens one item at a time as you scroll; the monthly-revenue stat read $9,304 in one scrolled frame and $9,500 in the capture. Under reduced motion the logo strip stopped, but in three reduced-motion loads the hero headline, description and buttons never appeared while the nav and logo strip did.

### Accessibility

Hero copy disappeared entirely under reduced motion in this browser. The hero eyebrow and stat captions are low-contrast grey on dark; inactive list words are pale grey on white. The phone nav 'Book a demo' pill looks about 30px tall. FAQ items are buttons. No horizontal overflow.

### Mobile

Hero stays full height with copy pushed to the lower half; headline 40px over the photo. Nav keeps 'Log in', a 'Book a demo' pill and a menu icon. The logo strip shows one or two logos. The word list remains, slightly smaller. The three time-of-day cards stack, stats become 2×2, FAQ runs full width and the footer folds to two columns.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 40 |
| Headline weight | 300 | 300 |
| Headline tracking em | 0 | 0 |
| Body px | 15 | 15 |
| Characters per line | 60 | 43 |
| Sections | 9 | 9 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For a hospitality product, lead with the guest's experience in photography and serif type, then explain the system in the sections below.
- Organise 'how it works' by the operator's day (before service, peak hours, after hours) rather than by feature list.
- Repeat one typographic device, such as a single italic word per heading, to hold a voice across sections.

Suits premium hospitality, restaurant and guest-experience products where buyers respond to atmosphere. Wrong for a developer or back-office tool where the buyer needs to see the interface first.

Risk: The product itself is hard to find: the three platform cards rendered as empty white panels in this browser and no interface appears above the fold. Reduced-motion visitors lose the hero copy. Stats carry no source. Low-contrast grey text recurs on both dark and light grounds.

## Limitations

- Video elements (four, including the platform-card media) reported paused at 0 s in this headless Chromium, so the platform cards appeared blank; they may show product footage in other browsers.
- In one default-motion load the hero headline was also absent for 9 s after DOMContentLoaded; a later default-motion load after the load event showed it, and the reduced-motion load at the same timing did not.
- The 390 layout was captured, not operated live.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.elyrasystems.com/
- https://www.ycombinator.com/companies/elyra
