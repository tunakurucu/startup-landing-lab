# Expressive World recipe

All numbers are **recommended**, not measured from the references. Desktop observations are dated in the evidence row. Tune after rendering the actual brief. Font candidates have SIL OFL distributions; verify the exact font files and license before self-hosting.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 103 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 55–77px, 90th percentile 95px), weight 500, tracking −0.025em; h1 about 3.8× the body size; body 17px at about 62 characters per line; phone h1 about 0.58× desktop (median 37px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (9 audited sites, measured 2026-10-19: Arbital, Cactus, HeyClicky, Imperfect, Palette, Pingo, Prized, Sparkles, Voltair): desktop h1 median 77.4px at weight 500 and -0.02em; body 17px at about 51 characters per line; 7 sections; phone h1 42px; 3 of 9 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Broad suite or playful consumer system. Wrong for regulated decision under time pressure; wrong for single-purpose API. |
| Hero A | A labelled map offers three destinations; selecting one reveals a different task and its outcome. |
| Hero B | A large, tangible object anchors the headline while a compact card deck lets visitors try one action. |
| Type | Heavy sans gives the world its voice; restrained body sans keeps instructions readable. |
| Scale **recommended** | H1 `clamp(4rem, 8vw, 6.5rem)` / 0.94–1.08 line-height; body 17–19px / 1.5; measure 55–68ch; tracking -0.04em to -0.015em; display 500–800, body 400–500. |
| Layout **recommended** | Max width 1260px; asymmetric object field with 3/9 or 4/8 copy/scene. Desktop section padding 88–144px, mobile 52–80px. Density: open → dense → quiet → active → short. |
| Color/material | A vivid field, or a pale ground chosen from where the product is used. Cream with a serif display is a common generated default, so record the product reason if you land there. One controlled accent per state; paper edges and outlines before shadow. |
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
| Display | Bricolage Grotesque / Syne / Unbounded |
| Body | IBM Plex Sans / Source Sans 3 / Inter |
| Mono | IBM Plex Mono / JetBrains Mono / Source Code Pro |

Use only the roles the product actually needs. A distinct type system may use two families and multiple weights; do not download fonts to satisfy a count.
