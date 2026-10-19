# snag

Inspected: 2026-10-19 · desktop-mobile-audit · functional-entrance

https://snagsublets.com

The homepage is the product: a search bar for where and when, then shelves of real priced sublet listings directly beneath it.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A peach band holds only the lowercase headline 'find sublet in minutes' and a white pill search bar with 'where' (pre-filled New York, clear button), 'when' ('add dates') and a round orange search button. Logo top-left, hamburger top-right; no other navigation. Below the band, the 'popular sublets' row of five listing cards is already visible in the first screen.

### Typography

Single measured family DM Sans throughout. h1 48px, weight 700, tracking -0.04em, line-height 1. Body 16px / 1.5. All headings and labels are lowercase ('popular sublets', 'best prices', 'list my place'). Listing captions are bold sans in white label boxes stacked over the photos.

### Visual System

Peach hero band over a pale cream page; bright orange for logo, search button and nothing else; charcoal footer. Imagery is real phone photos of rooms in tall rounded cards, overlaid with chips (avatar stacks with 'N interested', green '$N cheaper', red 'N saves'), a heart button, a white location/date label, a price pill and a verified host avatar. The host row uses selfie-style portraits with '+$63,281'-style earnings tags.

### Page Sequence

Search hero → 'popular sublets' row → 'best prices' row → 'most saved' row → 'sublet your place. save rent.' host earnings portraits → 'list my place' button → '30,000 students snagged their sublet' university logo strip → dark footer with app-store badges, company links and city sublet links.

### Interaction

Clicked 'add dates': a two-month calendar popover (October and November 2026) opened under the search bar, past dates greyed, overlapping the listing row. 21 animations were running at load and after scroll. In reduced-motion mode the count stayed at 21 and listing photos changed between captures 2.5s apart.

### Accessibility

Search field labels 'where' and 'when' are small grey text. University logos are pale grey on cream. Listing caption labels sit on varied photos but on solid white boxes. Mobile heart buttons are roughly 32px. Motion on listing photos continued with reduced motion requested. Desktop navigation is hamburger-only. No horizontal overflow.

### Mobile

An app-install banner ('snag sublets', 'get') takes the top. The h1 changes wording to 'find a sublet' at 40px. The pill search becomes stacked labelled fields with a full-width orange 'search' button. Each listing row becomes a horizontal scroller showing about 1.7 cards; host portraits show two at a time. The footer centres and stacks. The page grows from 2,572px to 3,152px tall.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 40 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 6 | 6 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- If the product is search, make the search control the hero and render real inventory immediately below it, so the first screen is already a result.
- Give each shelf one social-proof metric (interest, savings, saves) so rows read as ranked answers rather than generic browse.
- Rebuild an inline desktop search bar as stacked labelled fields with a full-width action on mobile instead of shrinking it.
- Show the supply side's payoff as concrete earnings next to real faces to recruit listers on the same page as renters.

Suits two-sided marketplaces with photogenic, location-bound inventory (rentals, events, local services). Wrong for B2B or regulated products where buyers need explanation, credentials or pricing before inventory makes sense.

Risk: There is almost no explanation of trust or how sublets are verified beyond small check badges, so it leans on the 30,000-students claim. Pre-filled New York may misdirect visitors from other cities. Lowercase-only headings and the missing article in 'find sublet in minutes' read casual. Image motion ignores reduced motion.

## Limitations

- Did not run a search, save a listing or open 'list my place'.
- Listings, prices and counts are live inventory and will differ on another visit.
- Did not inspect the hamburger menu contents.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://snagsublets.com
- https://speedrun.a16z.com/companies/snag
