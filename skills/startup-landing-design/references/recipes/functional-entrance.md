# Functional Entrance recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 329 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 54–76px, 90th percentile 96px), weight 500, tracking −0.025em; h1 about 3.7× the body size; body 17px at about 56 characters per line; phone h1 about 0.59× desktop (median 38px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (14 audited sites, 2 of them reference tier, measured 2026-10-19/20: 21st, Acely, Agency, AquaShield, CodeWisp, Context.dev, Cyclon, Firecrawl, InLoop Robotics, Oasiz, Pitch, Retool, Sway, snag): desktop h1 median 64px at weight 600 and −0.022em; body 16.0px at about 54 characters per line; 7 sections; phone h1 40px; 6 of 14 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Single-action input/output product. Wrong for abstract platform with no safe sample input; wrong for high-stakes signup before explanation. |
| Hero A | An input field and output pane form the first screen, with a prefilled safe example. |
| Hero B | A terse promise introduces one operation; the form follows immediately and shows its result inline. |
| Type | Compact sans makes action clear; body explains limits; mono labels structured output. |
| Scale **recommended** | H1 `clamp(2.5rem, 1.667rem + 3.7vw, 5rem)` (about 41px on a 390px phone, 80px at 1440) / 1.0–1.1 line-height; body 17–19px / 1.5; measure 55–75 rendered characters (about 45–60ch in most fonts); tracking −0.04em to 0, by face; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1180px; centered functional surface, capped at 760px, with evidence beside or below. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Quiet base with one action accent; structured output uses rules and syntax, not shadow stacks. |
| Product artifact | A local task must accept input, show an output and an error or empty state, and label the simulation. |
| Sections | Input → output → real proof, only when it exists → how it works → edge cases and limits → cost or free tier → final action with the primary label. Delete first: speculative performance claims. |
| Mobile | single-column input and result; preserve labels; cap result panel overflow. |
| Evidence | Firecrawl's Scrape selection changed action destination and preview; Cyclon's waitlist had one action but no demo (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Mode switch | Mode change → output changes → immediate swap → 150–200ms opacity ease-out. |
| Example result | Submit local example → result/status appears → text result without animation → 200–280ms opacity ease-out. |

In these contracts, opacity applies to a container, highlight or decorative layer. Text the visitor must read swaps in immediately or moves into place; it never fades in.

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | IBM Plex Sans / Schibsted Grotesk / Hanken Grotesk |
| Body | Source Sans 3 / IBM Plex Sans / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
