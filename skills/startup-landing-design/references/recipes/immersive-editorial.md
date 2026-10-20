# Immersive Editorial recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 329 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 54–76px, 90th percentile 96px), weight 500, tracking −0.025em; h1 about 3.7× the body size; body 17px at about 56 characters per line; phone h1 about 0.59× desktop (median 38px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (25 audited sites, 6 of them reference tier, measured 2026-10-19/20: Applied Electrodynamics, Astro Mechanica, Atomarine, Button Computer, Casa, Clair Health, Daylight, Dia, Elyra, General Legal, Gravis Robotics, Juno, Known, Krea, Mercury, Nori, Opal Electronics, Origin, Rex, Sierra, SketchPro.ai, Spore.Bio, Stilta, Superhuman, Voxel Energy): desktop h1 median 64px at weight 480 and −0.012em; body 16.0px at about 45 characters per line; 8 sections; phone h1 36px; 16 of 25 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Ambitious physical or emotional outcome with real imagery. Wrong for technical API that needs parameters first; wrong for weak or unavailable product imagery. |
| Hero A | A product object leads the first scene; a short caption identifies what the visitor can inspect. |
| Hero B | A close crop and offset statement lead to a selectable set of use cases with paired captions. |
| Type | Expressive serif or restrained sans display; very readable sans body; mono only for captions if useful. |
| Scale **recommended** | H1 `clamp(2.5rem, 1.25rem + 5.56vw, 6.25rem)` (about 42px on a 390px phone, 100px at 1440) / 1.0–1.1 line-height; body 17–19px / 1.5; measure 55–75 rendered characters (about 45–60ch in most fonts); tracking −0.04em to 0, by face; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1440px; large scene plus asymmetrical text; proof and qualifications enter below. Required: the first scene never fills the viewport alone; the top of the next section, or a scene element cut by the fold, shows at the bottom edge at 1440×900 and 390×844 (HR-05), so the opening never reads as the whole page. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Editorial warm or cool field matched to product; image contrast scrim only when needed. |
| Product artifact | An original or licensed scene must identify a product property through its caption; a descriptive still remains usable. |
| Sections | World/ambition, with the next section visible below it → concrete offering → object/task evidence → real proof, only when it exists → terms and cost → final action with the primary label. Delete first: mood-only imagery with no product link. |
| Mobile | crop for legibility, reposition action outside image, keep the next section peeking below the scene, provide static poster and text alternative. |
| Evidence | Mercury's landscape/desk opening and Nori's product-scale robot hero; media limits recorded (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Object entrance | Scene entrance → guide attention to object → static poster → 280–380ms opacity ease-out. |
| Task selection | User selects task → image/caption changes together → immediate caption → 180–250ms opacity ease-out. |

In these contracts, opacity applies to a container, highlight or decorative layer. Text the visitor must read swaps in immediately or moves into place; it never fades in.

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Newsreader / Instrument Serif / Gloock |
| Body | Source Sans 3 / IBM Plex Sans / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
