# Workflow Theater recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 103 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 55–77px, 90th percentile 95px), weight 500, tracking −0.025em; h1 about 3.8× the body size; body 17px at about 62 characters per line; phone h1 about 0.58× desktop (median 37px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (12 audited sites, measured 2026-10-19: AgentPhone, Andera, Copperlane, Drafted, End Close, Hotbox, Interfere, LightSprint, Linear, Marble, Toothy AI, screenpipe): desktop h1 median 60px at weight 550 and -0.022em; body 16px at about 68 characters per line; 8 sections; phone h1 36px; 3 of 12 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Multi-step operational decision with visible artifacts. Wrong for simple consumer purchase; wrong for one-screen lead capture. |
| Hero A | An incident workspace shows owner, current state and next action beside the promise. |
| Hero B | The state timeline fills the hero, with a compact explanation attached to each transition. |
| Type | Display sans frames decisions; plain body handles nuance; mono names states and IDs. |
| Scale **recommended** | H1 `clamp(3.4rem, 6vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 54–70ch; tracking -0.04em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1320px; narrow explanation / wide recurring workspace; alternate overview and close-up. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Product state carries color; restrained field, fine rules, high-contrast status accent. |
| Product artifact | One fictional work item moves through selectable states; owner and next action update with the state. |
| Sections | Problem state → timeline → selected decision → evidence/limits → action. Delete first: a second generic feature-card row. |
| Mobile | current step and detail become a vertical sequence; no shrunken dashboard. |
| Evidence | Linear's issue context, LightSprint's selected QA stage, Interfere's recurring incident, Toothy's billing tab (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| State inspection | Step selection → current artifact and explanation update → immediate selected text → 160–220ms opacity ease-out. |
| Timeline connector | Timeline progress → connector draws only when state advances → static numbered sequence → 260–380ms transform/opacity ease-out. |

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Schibsted Grotesk / IBM Plex Sans / Hanken Grotesk |
| Body | Source Sans 3 / IBM Plex Sans / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
