# Canvas First recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 211 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 54–76px, 90th percentile 96px), weight 500, tracking −0.025em; h1 about 3.7× the body size; body 17px at about 58 characters per line; phone h1 about 0.57× desktop (median 38px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

| Decision | Recipe |
| --- | --- |
| Fit | Creative tool whose work area is the product. Wrong for service sold through human trust; wrong for hardware with no editable surface. |
| Hero A | A narrow tool rail opens beside an editable canvas; a saved draft and reset action stay visible. |
| Hero B | An unfinished composition occupies the hero; choosing a tool edits it immediately and reveals the next action. |
| Type | Display sans frames the workspace; body explains actions; mono is optional for code/export metadata. |
| Scale **recommended** | H1 `clamp(3.2rem, 6vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 48–62ch; tracking -0.04em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1360px; 4/8 explanation/canvas split; canvas may bleed to viewport edge. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Neutral work surface with one active tool color; thin bounds and cursor/focus state show hierarchy. |
| Product artifact | A local editable canvas must change output, expose undo/reset and describe its empty state without pretending to save remotely. |
| Sections | Task invitation → canvas → result variations → method → action. Delete first: a screenshot-only gallery that implies editing. |
| Mobile | replace multi-panel canvas with a single active workspace and bottom toolbar. |
| Evidence | Onlook's editor canvas dominated the hero but its scene failed in the inspected browser (desktop 2026-10-18). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Tool focus | Tool selection → affordance and state update → selected outline → 150–220ms opacity ease-out. |
| Canvas revision | Artifact edit → visible output changes → immediate final state → 180–260ms transform/opacity ease-out. |

In these contracts, opacity applies to a container, highlight or decorative layer. Text the visitor must read swaps in immediately or moves into place; it never fades in.

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Bricolage Grotesque / Schibsted Grotesk / Familjen Grotesk |
| Body | IBM Plex Sans / Source Sans 3 / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
