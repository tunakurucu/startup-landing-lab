# Sway

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://sway.co

The hero is the product's first step: an address field inside a purple panel, with a live countdown and a four-step tracker underneath, before any explanation.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white 69 px sticky nav (logo, three links, purple "Log in" pill) sits over a pale promo strip ("Throw a ballot party. Get $500 from Sway." with floating badge illustrations and a "See how it works" button). Below it a rounded deep-purple panel holds a yellow countdown pill ("15 days to Nov 3"), the h1, a subline, a white address input with a "Preview my ballot" button, and a registration link; tilted ballot cards decorate both edges. A "Your 4 steps" tracker (Address, Ballot, Plan, Save) and the first row of group cards complete the first screen.

### Typography

Measured families: Manrope for headings, Inter for body. H1 40 px, weight 600, line-height 1.2, tracking -0.012 em, white on purple (32 px, weight 500 on mobile). Body 16 px at 1.4 with about 43 characters per line. Section headings are mid-size and centred; small green eyebrow labels ("Proven impact", "How it works") sit above them. The ballot-card decorations use a slightly rotated, hand-placed look.

### Visual System

White ground with one saturated purple for the hero panel, buttons and links, plus yellow for the countdown pill and green for eyebrows and bar charts. Surfaces are rounded cards with thin grey borders. Imagery mixes photographic group cards (campaign-style photos and posters), halftone black-and-white illustrations (Capitol dome, scales of justice, raised fists with megaphones) and framed product screenshots of a map, office list, messaging form and leaderboard.

### Page Sequence

Sticky nav → promo strip → purple hero with address input → 4-step tracker → "Voting groups across the country" carousel → "Popular voting groups" carousel → grey band "Regular people drive political change" with two buttons → "Proven impact" stat card (2.2× bar chart) → three-step how-it-works → "Free. Private. Neutral." band → "Everything you need to lead" feature cards (map, offices, messaging, results, referrals) → app-store CTA over halftone crowd image → footer with link columns and Español link.

### Interaction

Operated the right arrow on the "Voting groups across the country" carousel: the row advanced by four cards (first card became "The Forward Party Voting Group") and the previously disabled, 40 %-opacity left arrow became enabled. The arrows carry aria-labels. Nothing was seen visibly moving on load in screenshots; the measurement record counted 0 running animations on load and 18 after scroll on desktop, and the live visit sampled 56 on first load dropping to 0–4 while scrolling. With reduced motion on the same first-load count appeared and then 0 after scrolling; a prefers-reduced-motion rule is present.

### Accessibility

Carousel cards carry 20 × 20 px share icon buttons, which are small targets. Card titles are white text over photographs with a dark gradient band. The countdown pill is live data and changed between captures (15 days, then 14 days). No horizontal overflow at either width. Nav links and buttons are text-labelled.

### Mobile

Nav keeps logo, "Explore" and "Log in". The promo strip shrinks to text plus a circular arrow button. The hero panel stacks and the address input loses its text button in favour of an arrow icon. The four step tiles become square icon tiles in one row; the carousels become horizontally scrollable rows with no arrows (arrows are hidden below the small breakpoint). All later sections stack to one column with the halftone illustrations placed below their text; feature screenshots stack vertically. Page height 9008 px.

### Copy

H1: "Voting made easy" with subline "Make your plan and picks all in one spot." Primary action: "Preview my ballot" on the address field (secondary: "Register or check your registration", "See how it works", "Log in"). First-screen proof is live: a countdown to election day and a row of real voting groups with member and voter counts (for example "65 recs · 68 voters"); no logos.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 40 | 32 |
| Headline weight | 600 | 500 |
| Headline tracking em | -0.012 | -0.016 |
| Body px | 16 | 16 |
| Characters per line | 43 | 29 |
| Sections | 11 | 11 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If the product starts with one input, make that input the hero and show the remaining steps as a tracker so the commitment looks small.
- Use live data in the first screen (countdown, group counts) as proof that the product is in use, instead of static logos.
- Reserve one saturated colour for the single most important panel and its buttons; keep every other section white or grey.
- Hide carousel arrows on small screens and let the row scroll natively rather than shrinking the controls.

Suits consumer or civic products with a single clear first step tied to a deadline (voting, tax filing, enrolment, booking); wrong for products that need explanation or trust before any input is reasonable, such as high-ticket B2B or financial onboarding.

Risk: The page is dense: a promo strip, countdown, input, tracker and two carousels compete in the first 900 px, and tiny share icons and photo-overlaid titles reduce legibility. Date-bound copy ages daily and the group cards show partisan content that may alienate some visitors before they reach the "Neutral" claim.

## Limitations

- The address input and "Preview my ballot" were not submitted, so the flow after the hero was not seen.
- Running-animation counts differed between the measurement record and the live visit; no visible motion was identified in screenshots.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://sway.co
- https://neo.com/startups?tab=Neo%20portfolio
