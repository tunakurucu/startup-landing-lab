# Button Computer

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://buttoncomputer.com

A full-bleed lifestyle video of the device clipped to a person opens a commerce-template page that ends in a buy box and FAQ.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A tall 136 px white header holds the stacked BUTTON COMPUTER logo left and small uppercase ACCOUNT and CART (0) links right. Below, a full-width video frame shows a woman in a library with the small square device clipped to her collar; the white headline, one-line subcopy and a yellow 'PREORDER NOW' pill sit bottom-left. A 'Backed by Y Combinator / Featured in TechCrunch, WIRED' strip follows directly under the frame.

### Typography

Measured Poppins for display: h1 44 px, weight 500, line-height 1.2, tracking -0.02em; section heads in the same geometric sans at medium weight, centred statement lines larger. Body in measured DM Sans at 16 px / 1.5, 55ch measure. Small tracked uppercase labels for nav, 'BACKED BY', buttons and buy-box fields.

### Visual System

Light grey ground with white rounded cards, dark grey text, a single saturated yellow for the hero pill and subscribe button, and a lavender 'Buy with Shop' button. Imagery is warm, cinematic lifestyle photography and video of the device in use; no product renders on a plain background. Layout alternates image and text cards. Footer is a dark charcoal band.

### Page Sequence

Video hero → backer and press strip → statement 'You press it to talk to AI…' → Instant productivity (image | text) → statement on privacy → Private by design (text | image) → 'Watch the video' banner → three use cases (car, on the go, home) → Preorder today buy box with gallery → FAQ accordion → Meet the founders with photo → 'Not quite ready?' email signup → footer.

### Interaction

Operated the FAQ item 'When will my Button ship?'. After full load it expanded to show a one-line shipping answer and the previously open first item collapsed (single-open accordion); a click before load finished did nothing. On load the hero frame changed across a 1.5 s comparison (moving video); no Web Animations were running. With reduced motion the hero frame did not change across the same comparison.

### Accessibility

Hero text is white over a dark, moving video; legible in captures but contrast depends on the frame. FAQ answers are light grey on near-white. FAQ toggles carry aria-label but exposed no aria-expanded in the DOM probe. Buy box shows a grey 'SOLD OUT' button and 'Out Of Stock' badge beside the hero's 'PREORDER NOW'. Nav links are small uppercase text. No horizontal overflow at either width.

### Mobile

Header shrinks to 61 px and keeps ACCOUNT and CART. The video crops to a portrait-ish frame with h1 at 25 px over it. Press logos split into two centred rows. Alternating image/text pairs stack image-over-text. The three use cases become a single-item swipe row with dot indicators. Gallery thumbnails move below the main image. Footer 'COMPANY' links collapse into an accordion. Content width measured 270 px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 44 | 25 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 16 | 16 |
| Characters per line | 55 | 34 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- For a small device, show it worn and in use in the first frame so scale and context land before any spec.
- Name the category's main objection (an always-listening AI device) in its own section and again as the first FAQ.
- Keep price, availability and refund terms together in one buy box on the homepage when the page's job is to sell.

Suits consumer hardware and DTC products where desire and trust are built through lifestyle imagery and a short path to checkout. It would be wrong for a developer tool or API, where the visitor needs to see the interface or code rather than a mood.

Risk: The hero promise 'PREORDER NOW' meets a sold-out, out-of-stock buy box further down, which reads as a dead end. The device itself is small in the hero frame. The structure follows a generic commerce theme, so the page's identity rests almost entirely on footage and photography.

## Limitations

- One desktop navigation timed out at 45 s before succeeding with a longer wait; load performance was not measured.
- Under reduced motion no video element was found by the probe, so I could not tell whether the hero video was paused or not yet loaded.
- Did not play the 'Watch the video' content.
- Did not verify whether preorder is actually unavailable or whether the sold-out state is a display state.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://buttoncomputer.com
- https://www.ycombinator.com/companies/button-computer
