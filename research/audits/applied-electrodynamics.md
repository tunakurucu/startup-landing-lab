# Applied Electrodynamics

Inspected: 2026-10-19 · desktop-mobile-audit · immersive-editorial

https://www.ae-dyn.com/

A long scroll-scrubbed canvas sequence of the camera and walls being 'seen through' replaces conventional feature sections entirely.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Near-black page with a rounded hero card holding a dark product render of a box-shaped camera with a striped-ring logo on its face; "A new kind of camera" sits bottom left inside the card. Below: a grey two-line subline ("See through walls, and much more."), a green "Preorder Now" pill and a centred down arrow. Header has the striped-ring wordmark left and "Backed by Y Combinator" plus green "Preorder" pills right.

### Typography

Single measured family, Söhne, for everything: h1 83.8px, weight 500, line-height 1, tracking -0.025em; body 30px/1.1 with a 72ch measure. Captions pair a white lead phrase with grey continuation in the same size ("See through walls. Map mechanical…"). The wordmark is widely spaced uppercase.

### Visual System

Near-black ground throughout with slightly lighter rounded panels. Imagery is a dark product render and wall scenes (ornate wallpaper, a framed painting) with a magenta-purple imaging overlay revealing what is behind the surface. Muted green is the only accent, used for every preorder button. Logo grid uses white marks on dark rounded tiles.

### Page Sequence

Hero card → scroll-scrubbed product sequence (camera turns, wall scenes with imaging overlay; captions "See through walls.", "Pinpoint issues in no time.", "Keep secure.") → "Built by engineers from Apple, Google, and MIT." → eight-tile logo grid → YC and "250+ patents" paragraph → preorder form → footer of pill links.

### Interaction

Operated the header "Preorder" link: the page jumped to the preorder form (#waitlist-head). On load only the down arrow pulsed. Scrolling scrubbed the canvas: the camera body turned and the wall scenes and captions changed with scroll position. With reduced motion the arrow kept pulsing and the scroll-scrubbed sequence still moved with scroll; the measurement record lists no reduced-motion rule.

### Accessibility

Grey secondary text on near-black (subline, second half of captions, "Be first to see through walls.") is noticeably lower contrast. Form fields use placeholders with aria-labels but no visible labels; a fifth unlabelled text input is present in the DOM. One frame showed body text passing under the sticky header pills without a backdrop. In the static full-page capture the sequence area is roughly 4,000px of blank dark space.

### Mobile

The two header pills stack, with "Backed by" shrinking to the word plus the Y mark. The hero card becomes a tall portrait panel with the h1 at 32px; body drops to 16px. The canvas sequence remains (hero region measures 5,317px). The logo grid becomes two columns, the form stacks under its heading, and footer pills form two columns.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 83.8 | 32 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 30 | 16 |
| Characters per line | 72 | 44 |
| Sections | 3 | 3 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For hardware with a hard-to-believe capability, show the capability happening on a recognisable surface before any claims.
- Use one family at one weight and let white versus grey within a sentence do the hierarchy work.
- Keep a single accent colour reserved for the purchase action so it is findable at every scroll depth.
- If the story lives in a scroll-scrubbed canvas, provide a static fallback for reduced motion and for crawlers or captures.

Suits deep-tech hardware with one striking visual demonstration (imaging, sensing, optics). Wrong for a software product with many features or buyers who need specs and pricing up front.

Risk: Most of the page's information is locked in a canvas that renders blank in static capture and may load slowly; the claims list is three captions long. Reduced motion is not honoured. Credibility rests on logo tiles and a patent count rather than technical detail or images from the device itself that are labelled as such.

## Limitations

- Did not type into or submit the preorder form.
- Could not confirm whether the imaging overlays are real device output or illustration.
- Canvas frames may have loaded partially during the scroll pass; some frames showed only the black device face.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.ae-dyn.com/
- https://www.ycombinator.com/companies/applied-electrodynamics-inc
