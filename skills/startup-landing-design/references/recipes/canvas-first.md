# Canvas First recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

| Decision | Recipe |
| --- | --- |
| Fit | Creative tool whose work area is the product. Wrong for service sold through human trust; wrong for hardware with no editable surface. |
| Hero A | A narrow tool rail opens beside an editable canvas; a saved draft and reset action stay visible. |
| Hero B | An unfinished composition occupies the hero; choosing a tool edits it immediately and reveals the next action. |
| Type | Display sans frames the workspace; body explains actions; mono is optional for code/export metadata. |
| Scale **recommended** | H1 `clamp(3.2rem, 6vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 48–62ch; tracking -0.05em to -0.015em; display 500–800, body 400–500. |
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

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Space Grotesk / Bricolage Grotesque / Inter |
| Body | Inter / IBM Plex Sans / Source Sans 3 |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
