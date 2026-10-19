# Expressive World recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

| Decision | Recipe |
| --- | --- |
| Fit | Broad suite or playful consumer system. Wrong for regulated decision under time pressure; wrong for single-purpose API. |
| Hero A | A labelled map offers three destinations; selecting one reveals a different task and its outcome. |
| Hero B | A large, tangible object anchors the headline while a compact card deck lets visitors try one action. |
| Type | Heavy sans gives the world its voice; restrained body sans keeps instructions readable. |
| Scale **recommended** | H1 `clamp(4rem, 8vw, 8rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 55–68ch; tracking -0.05em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1260px; asymmetric object field with 3/9 or 4/8 copy/scene. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | Cream or vivid field with one controlled accent per state; use paper edges and outlines before shadow. |
| Product artifact | A local card deck changes prompt, action and result together; the character or world never substitutes for the product. |
| Sections | Invitation → world map → selected local experience → practical detail → action. Delete first: a decorative feature carousel. |
| Mobile | collapse world map to a labelled list; keep one active scene; no tiny desktop chrome. |
| Evidence | PostHog's desktop-like shell and selected story tab changed; Pingo's conversation samples; Cactus's recurring character (desktop 2026-10-18/19). All scale, grid, spacing, and timing values are recommendations. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Zone selection | User chooses zone → content/context changes → static selected panel → 180–240ms opacity ease-out. |
| Deck shuffle | User creates or shuffles → new artifact appears → immediate replacement → 220–320ms transform/opacity spring-like CSS easing. |

| Font role | SIL OFL candidates (choose deliberately) |
| --- | --- |
| Display | Inter / Bricolage Grotesque / Syne |
| Body | Inter / IBM Plex Sans / Source Sans 3 |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
