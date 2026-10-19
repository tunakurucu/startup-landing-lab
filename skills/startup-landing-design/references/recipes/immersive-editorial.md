# Immersive Editorial recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 103 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 55–77px, 90th percentile 95px), weight 500, tracking −0.025em; h1 about 3.8× the body size; body 17px at about 62 characters per line; phone h1 about 0.58× desktop (median 37px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (11 audited sites, measured 2026-10-19: Applied Electrodynamics, Atomarine, Button Computer, Clair Health, Elyra, General Legal, Gravis Robotics, Juno, Known, Mercury, Nori): desktop h1 median 72px at weight 500 and -0.003em; body 16px at about 60 characters per line; 8 sections; phone h1 36px; 9 of 11 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Ambitious physical or emotional outcome with real imagery. Wrong for technical API that needs parameters first; wrong for weak or unavailable product imagery. |
| Hero A | A product object fills the first scene; a short caption identifies what the visitor can inspect. |
| Hero B | A close crop and offset statement lead to a selectable set of use cases with paired captions. |
| Type | Expressive serif or restrained sans display; very readable sans body; mono only for captions if useful. |
| Scale **recommended** | H1 `clamp(4rem, 7vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 50–64ch; tracking -0.04em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1440px; large scene plus asymmetrical text; proof and qualifications enter below. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Editorial warm or cool field matched to product; image contrast scrim only when needed. |
| Product artifact | An original or licensed scene must identify a product property through its caption; a descriptive still remains usable. |
| Sections | World/ambition → concrete offering → object/task evidence → terms → action. Delete first: mood-only imagery with no product link. |
| Mobile | crop for legibility, reposition action outside image, provide static poster and text alternative. |
| Evidence | Mercury's landscape/desk opening and Nori's product-scale robot hero; media limits recorded (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Object entrance | Scene entrance → guide attention to object → static poster → 280–380ms opacity ease-out. |
| Task selection | User selects task → image/caption changes together → immediate caption → 180–250ms opacity ease-out. |

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Newsreader / Instrument Serif / Gloock |
| Body | Source Sans 3 / IBM Plex Sans / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
