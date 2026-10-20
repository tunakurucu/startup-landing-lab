# Deel

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.deel.com/

A task-picker hero ('What would you like to do with Deel?') sits beside a photo with payroll UI, then six product cards map the platform.

## Company evidence

YC: verified-yc; batch: W19. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A black offer bar ('Get 3 months free of PEO*', 'Claim offer') and a white nav sit above two rounded panels. Left: an indigo-to-violet gradient card with a three-line white headline, the question 'What would you like to do with Deel?' and five checkbox tiles (Hire anywhere, Run payroll, Secure visas, Manage HR & people, Ship equipment), then 'Book a demo', review scores and a customer quote. Right: a photo of a person at a laptop overlaid with product cards (a payroll total, currency, visa and worker-type chips).

### Typography

h1 measured 60px, weight 500, line-height 1.1, tracking -0.003em, measured family BagossCondensedFont; section h2s are 44px/500 and card h3s 24px in the same condensed face. Stats ('150+', '$20B+') are 64px weight 600 in BagossExtendedFont, a wide cut of the family. Body and UI text 18px/1.5, measured family Inter, hero measure 30ch. Small uppercase eyebrows label sections ('WHAT DEEL DOES', 'DEEL SPEED'). Phone h1 38px.

### Visual System

White ground. The hero pairs a saturated indigo-violet gradient panel with a warm photo; elsewhere colour is restrained: warm off-white product cards, near-black bands for the 'modern experience' and review sections, black pill buttons, and lavender for selected states and the expert-call pill. Product cards carry miniature, job-specific UI (flags and avatars for payroll, a shipping timeline for IT, benefit chips, a visa status card). Customer logos are grey.

### Page Sequence

Offer bar + nav → split hero (intent tiles | photo with UI) → 'Speak with a trusted expert' pill and 'Trusted by 40,000+ companies' two-row logo marquee → 'The global people platform', six product cards → 'Accomplish more in less time' with a product toggle (Payroll, HR, IT, Hire) and a Today / Hours later / Tomorrow timeline → dark 'One modern experience for today's workforce' → 'Our customer reviews' video carousel → stats band → dark G2 reviews carousel ('Excellent global payroll', 4.7/5) → footer.

### Copy

h1: 'Hire, manage, pay, & equip anyone, anywhere.' There is no subhead; the question 'What would you like to do with Deel?' takes its place above five task tiles. Primary button 'Book a demo' (hero and header); 'Claim offer' in the bar. The category is named in the first h2, 'The global people platform', and in the title ('Global Payroll, Compliance, HR Solutions | HRIS'). Proof is numeric and repeated: '40,000+ companies', '150+ countries', '$20B+ compliantly processed global payroll', review counts.

### Interaction

Ticked the 'Run payroll' tile: its aria-checked changed from false to true, and the tile filled lavender with a check mark; the other tiles, the 'Book a demo' button and the URL did not change. In the same interval the hero quote switched from a Robinhood quote to a Hugging Face quote. The two-row logo marquee scrolls continuously and kept moving under reduced motion. The offer bar and nav stayed pinned while scrolling. No other motion seen.

### Accessibility

Hero tiles are buttons with role checkbox, an aria-label and aria-checked. A Cookiebot banner covered the bottom 176px of the 1440 first screen and roughly the lower 240px at 390. Grey quote attribution measures 3.6:1. At 390 the hero tiles are 73–106px tall, the menu button 40×40 and the offer-bar close 24×24; 85 of 124 targets are under 44px tall, footer legal links 20px. No horizontal overflow.

### Mobile

The offer bar wraps, with 'Claim offer' on its own line. The header keeps logo, 'Book a demo' and a hamburger. The gradient card holds a centred 38px headline, the question and the same two-then-three tile grid; the cookie banner covered the rest of the first screen. Product cards, the timeline and the dark sections stack to one column, and the footer lists every link group in full. Page height grows from 7,787px to 10,540px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 38 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.003 | -0.005 |
| Body px | 18 | 17 |
| Characters per line | 30 | 30 |
| Sections | 5 | 5 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- Replace the subhead with a multi-select 'what do you need?' question so the first click segments visitors before the demo request.
- Give every product card a miniature UI fragment specific to its job (pay statuses, shipping steps, visa state) instead of a generic icon.
- Turn speed claims into a three-step Today / Hours later / Tomorrow timeline for each product.

Suits broad B2B suites sold to operations or HR buyers who arrive with one job in mind and convert through a sales demo. Wrong for a single-purpose self-serve tool, where task tiles that all lead to the same demo button add a step with no payoff.

Risk: Ticking a tile changed nothing else on the page, so the visitor sees no result from the selection. The offer bar, cookie banner, rotating quote and marquee all compete with the hero. The marquee ignores reduced motion. Repeated numeric claims and two separate review sections lengthen the page without adding product detail.

## Limitations

- The right hero panel showed a different photo and overlay on another load (a 'Pay run · May 2026' list instead of a payroll total); whether it rotates or varies per visit was not determined.
- Whether the quote change was triggered by the tile click or by an automatic rotation could not be separated.
- The cookie banner was left in place to avoid setting consent; parts of both first screens were inspected only through the DOM.
- Whether the tile selection is passed to the demo form was not checked, since that would mean submitting it.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.deel.com/
- https://saaslandingpage.com/deel/
- https://www.ycombinator.com/companies/deel
