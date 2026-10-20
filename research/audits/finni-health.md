# Finni Health

Inspected: 2026-10-20 · desktop-mobile-audit · expressive-world

https://www.finnihealth.com/

A fox mascot, blob-shaped photo frames and saturated orange, violet and green bands make an autism-care service feel warm, while a zip-code match field sits above the headline.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

On a light grey ground, the left column stacks an orange kicker ('Navigating Autism, Together'), a short dark line about 1,000+ families in 25+ states, a zip-code field with an orange 'Find a match' button, and then the large violet h1. The right column holds a family photo in a rounded diamond frame with a white pill of three checks (insurance, HIPAA, families helped). A white 'We accept most insurance' bar with payer logos sits on an orange arc at the fold.

### Typography

Measured h1: Outfit, 56px, weight 700, tracking 0, line-height 1.1, in violet. Measured body: General Sans, 16px, line-height 1.3, 83ch measure; Switzer also present. Section headings use the same rounded geometric sans in orange with a violet second clause; small outlined pill labels ('Provider-Led Care', 'The Finni Match') act as kickers.

### Visual System

Full-width bands of orange, violet, light grey, grass green and near-black. A cartoon fox mascot recurs across sections, alongside illustrated scenes (bedtime, a flower-and-bush hill) and white blob shapes holding statistics. Photography of children and families appears in rounded cards. Coloured tag chips list support areas. Orange is the action colour throughout.

### Page Sequence

Hero with zip match → insurance logo bar → orange 'Finni providers are the best in the business' stat blobs → violet 'big feelings... big results' outcome cards with photos → three-step intake process → 'takes the weight off autism care' illustrated card with support tags → 'Snug as a glove' therapist profile and accordion → Parent Portal tabs (Scheduling, Progress Tracking, Insurance Management) → green testimonial → dark FAQ and contact → 'Find a provider with Finni Today' zip CTA → orange footer with state links.

### Interaction

Operated the 'Progress Tracking' tab: the active pill turned orange and the carousel slid from the violet 'Shared Calendar and Scheduling' card to an orange 'Progress Tracking' card with a phone mockup showing '7 of 9 Treatment Goals Mastered' and a bar chart. On load the insurance logo row scrolls horizontally; with reducedMotion 'reduce' it still moved.

### Accessibility

White body text on orange and violet bands and orange text on light grey look low contrast. Stat text inside the blobs is small and orange-on-white. The logo row keeps moving under reduced motion. The zip field relies on placeholder text ('Enter Zip Code') with no visible label. On mobile the 'Find a match' button appears about 40px tall. No horizontal overflow.

### Mobile

At 390 the photo moves above the copy, everything centres, and the h1 drops to a measured 36px and sits below the zip form. The nav keeps the logo, an orange 'Get Started' pill and a menu icon. The three stat blobs stack vertically, outcome cards become a horizontal strip, and the page is 10,810px tall.

### Copy

H1: "Finni Delivers Expert ABA & Mental Health Care Nationwide"; primary action "Find a match" (nav: "Get Started"). First-screen proof is the '1,000+ families in over 25 states' line, the insurance/HIPAA/families check pill and a row of insurer logos (Medicaid, UnitedHealthcare, Aetna, Kaiser Permanente, Anthem, Cigna, Optum).

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 56 | 36 |
| Headline weight | 700 | 700 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | 83 | 50 |
| Sections | 11 | 11 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When the first question a visitor has is 'is this available to me?', put the eligibility input (a zip code) in the first screen ahead of the headline.
- Show the payer or partner logos that decide whether a customer can buy, not just brand-name customers, directly under the hero.
- A recurring mascot can soften a clinical, anxious decision and give long pages a consistent thread between sections.
- Preview the logged-in product (a parent portal) with tabbed phone mockups so post-purchase experience becomes part of the pitch.

Suits consumer-facing healthcare, childcare and family services where trust, warmth and coverage matter more than technical depth. It would be wrong for a clinical B2B tool sold to health systems, where cartoon motifs could undercut perceived rigour.

Risk: The zip field sits above the h1, so the reading order puts the action before the claim. Outcome ranges (40-50%, 30-40%) carry no stated method. Many saturated bands and white-on-orange text weaken contrast, and the logo marquee ignores reduced motion. A large dark band near the FAQ rendered mostly empty in captures.

## Limitations

- The zip-code match form was not submitted, so the matching flow is unverified.
- Measurement reports no sticky nav, but during the live scroll the nav stayed at the top; the discrepancy was not resolved.
- The dark band near the FAQ showed only the phrase 'long wait lists' in the full-page capture; its intended content was not seen.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.finnihealth.com/
- https://www.joinef.com/portfolio/
