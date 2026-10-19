# Editorial Platform recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 103 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 55–77px, 90th percentile 95px), weight 500, tracking −0.025em; h1 about 3.8× the body size; body 17px at about 62 characters per line; phone h1 about 0.58× desktop (median 37px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

| Decision | Recipe |
| --- | --- |
| Fit | Broad platform with distinct buyer decisions. Wrong for narrow one-feature startup; wrong for product with no evidence beyond a waitlist. |
| Hero A | A typographic thesis sits beside an indexed buyer path; each path links to a distinct workflow. |
| Hero B | Audience chapters begin above the fold; the selected chapter previews one real integration or process. |
| Type | Serif display signals breadth; sans body supports scanning; mono only for references. |
| Scale **recommended** | H1 `clamp(4rem, 7vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 56–72ch; tracking -0.04em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1360px; asymmetric introduction; pathway grid changes width and density by topic. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Large calm fields and section-specific accent; use rules and typographic hierarchy before cards. |
| Product artifact | A path chooser swaps a concrete workflow and preserves an ordinary link to the full explanation. |
| Sections | Promise → buyer paths → selected path artifact → integration/trust → action. Delete first: a complete-product inventory before the buyer paths. |
| Mobile | path list becomes native disclosure or stacked links; selected artifact fills width. |
| Evidence | Stripe's product menu grouped capabilities; AnswerThis's Features menu exposed research stages (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Path selection | Path choice → relevant workflow appears → direct link list → 150–220ms opacity ease-out. |
| Chapter marker | Section transition → reveal a chapter marker, not essential text → all visible → 250–330ms opacity/translate ease-out. |

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Newsreader / Instrument Serif / Source Serif 4 |
| Body | IBM Plex Sans / Source Sans 3 / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
