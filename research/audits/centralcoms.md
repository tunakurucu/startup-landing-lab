# CentralComs

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://centralcoms.com

A trades-photo hero with a plain benefit headline, then two tabbed demo sections that play call and text transcripts as examples, each with its own free-trial button.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A dark-blue announcement bar ('raises Seed round at a $30M valuation, led by Y Combinator') sits above a white-on-dark nav with Solutions, Pricing, Integrations, Resources, Login and a blue 'Start a free trial'. The first screen is a full-bleed photograph of two roofers, darkened, with a centred two-line white headline, a two-line subhead and one blue 'Start a free trial' button. Nothing else competes in the first screen.

### Typography

Measured h1 76px, weight 600, line-height 1.1, tracking -0.026em, family Figtree; body 20px at 1.6 line-height, measure 58ch, Figtree. A second family, foundryGridnik, is present and the wordmark is a serif-like logotype. Mobile h1 48px, body 18px. Section titles are medium-weight sans around half the h1 size; bullets and transcript text are small sans.

### Visual System

Mostly white and very pale blue-grey section bands; dark navy for the announcement bar, hero overlay, footer, transcript bubbles and phone mock; one mid-blue for every button. Imagery is photographic in the hero and closing band (tradespeople on a roof and at an HVAC unit), a teal video card with an illustrated air-conditioner, and chat/phone/email mocks with avatars. Integration logos float around a centred headline.

### Page Sequence

Announcement bar → nav → photo hero → video card ('Home Service Owners', mute and play controls) → 'Capture lost revenue' three tabs with example panel and bullets → 'Generate more revenue' four tabs with example panel → 'From first hello to a booked visit' three icons → 'Works with the tools you already use' logo cloud → FAQ (7 items, native details) → photo CTA 'Ready to book more of your leads?' → navy footer.

### Interaction

Operated the 'Reply to every text and email' tab: aria-selected moved to it, the phone-call mock was replaced by a text-message transcript ('Can you fix a clogged sink...') and the heading changed to 'Reply while they're ready to book'. On load and after scrolling zero animations were running; the nav became a translucent white bar with dark text once scrolled. With reduced motion nothing moved and the top screen was static.

### Accessibility

Video controls are 44×44 and labelled (Unmute, Play) with a range input for progress. FAQ uses native summary elements, 83px tall. Tabs carry role=tab and aria-selected. Hero white text over the sky area of the photo has reduced contrast at the headline's top edge. Mobile offers a 'Pause logo animation' link under the logo cloud. No horizontal overflow measured; the measurement record reports nav height 0, suggesting the sticky nav was not detected as a nav element.

### Mobile

Tabs disappear: every tab's example panel and copy are laid out in sequence as stacked blocks, each with its own free-trial button, so the page grows from 6978 to 12621px. The headline wraps to three lines at 48px; nav collapses to wordmark plus hamburger; the video card, icons row, logo cloud and FAQ stack one column; the closing photo band keeps its text left-aligned.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 76 | 48 |
| Headline weight | 600 | 600 |
| Headline tracking em | -0.026 | -0.033 |
| Body px | 20 | 18 |
| Characters per line | 58 | 38 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Demonstrate a conversational product with short, labelled example transcripts (Customer / Assistant) instead of describing features.
- Use tabs on desktop to keep seven scenarios compact, but on mobile unroll them in full rather than hiding them behind a swipe.
- Repeat one identical primary button after every section so the next step never depends on scrolling back to the nav.
- Choose photographs of the customer's trade, not the software, when the buyer is a small-business owner.

Suits SMB software sold to non-technical operators through a free trial, where trust and clarity beat novelty; wrong for a design-led or developer brand, where the stock-photo hero and template-like layout would read as generic.

Risk: Mobile page length doubles because tab content is unrolled; the hero depends on a stock-style photo for personality; no social proof beyond the funding bar and partner logos; the dark-on-dark nav over the photo and the near-identical repeated CTA blocks make the page feel templated.

## Limitations

- Did not play the product video.
- Could not confirm what the 'Pause logo animation' control pauses, since no animations were measured running.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://centralcoms.com
- https://www.ycombinator.com/companies/centralcoms
