# Typographic technical recipe

All numeric values below are **recommended design defaults**, not measurements of reference sites. The cited observations are dated 2026-10-18/19; each says whether it was seen at desktop or phone width, and the observed medians below come from the separate measured set. Tune values after rendering real content.

Floors shared with the [default gate](../default-detector.md): display tracking no tighter than −0.04em; an H1 above about 6.5rem only when it is the page's signature and each line holds three words or fewer; Inter, Space Grotesk and Fraunces are so common as display faces that choosing one needs a stated product reason (Inter remains a sound body fallback).

**Observed** across 211 measured startup homepages (2026-10-19): desktop h1 median 64px (middle half 54–76px, 90th percentile 96px), weight 500, tracking −0.025em; h1 about 3.7× the body size; body 17px at about 58 characters per line; phone h1 about 0.57× desktop (median 38px); two families. The recommended values below are deliberately at the bolder end; when in doubt, size the headline toward the median and let the artifact carry the page.

**Observed in this family** (11 audited sites, 4 of them reference tier, measured 2026-10-19/20: Airweave, Canary, Hedge, Keyframe Labs, Neon, Normal, Resend, Rive, Supabase, Traverse, Warp): desktop h1 median 54px at weight 400 and −0.015em; body 17.0px at about 53 characters per line; 8 sections; phone h1 32px; 5 of 11 on a dark ground.

| Decision | Recipe |
| --- | --- |
| Fit | Focused developer infrastructure where integration and reliability are the buying questions. Wrong for a tactile consumer object or an emotional destination brand. |
| Hero A | Offset statement + working code or trace instrument. Artifact: input, output and one failure state. |
| Hero B | Sparse editorial promise + compact integration chooser below the fold. Artifact: language tabs that actually change a local example. |
| Type | Display: precise sans with a distinctive weight contrast; body: calm sans; mono only for code, IDs and state. Avoid mono body paragraphs. |
| Scale **recommended** | H1 `clamp(2.375rem, 1.208rem + 5.19vw, 5.875rem)` (about 40px on a 390px phone, 94px at 1440) / 1.0–1.1 line-height; body 17–19px / 1.5; copy measure 55–75 rendered characters (about 45–60ch in most fonts); display tracking −0.04em to 0, by face. Weight 500–700 for display, 400–500 for body. |
| Layout **recommended** | Max content 1280px; hero 5/7 split or open statement over full-width artifact; desktop section padding 88–144px, mobile 56–80px. Density: open promise → dense proof → quiet qualification → active example → short CTA. |
| Color/material | Light or dark according to product positioning; one signal accent for live state. Thin rules, code syntax and deliberate whitespace carry depth before shadow. |
| Artifact | A locally operable integration trace: for example, switch language or failure mode and see the code or the result change. What is required is that the visitor operates it and sees the product's real behaviour; the exact control is a choice. Label simulation. |
| Section sequence | Promise → runnable shape of input/output → install command and first code example → real proof, only when it exists (named users, real usage) → failure/recovery explanation → technical limits the engineer must plan around → pricing or free tier → docs and install as the final action, with the primary label. Delete a generic three-benefit grid first. |
| Mobile | Stack statement and instrument; show one current step with a readable detail. Keep code inside its own horizontally scrollable labelled region. |
| Evidence | Resend: observed integration tab changed snippet (desktop, 2026-10-18). Airweave: observed cURL tab changed snippet (desktop, 2026-10-19). Scale, grid and timings here are recommendations, not observed values. |

| Motion contract | Trigger → state/purpose → static fallback → **recommended** timing |
| --- | --- |
| Active code tab | User selection → swap example to compare adoption paths → immediate swap → 150–200ms opacity ease-out. |
| Trace step | User selection → highlight same event identity → selected border and text → 180–240ms transform/opacity ease-out. |
| Entrance | Once after load → orient instrument only, never delay copy → fully visible instrument → 280–360ms opacity/translate ease-out. |

In these contracts, opacity applies to a container, highlight or decorative layer. Text the visitor must read swaps in immediately or moves into place; it never fades in.

OFL candidates to verify and self-host from their official distributions: display **IBM Plex Sans / Schibsted Grotesk / Hanken Grotesk**; body **IBM Plex Sans / Source Sans 3 / Inter**; mono **IBM Plex Mono / JetBrains Mono / Source Code Pro**. Use one or two faces if a third role adds no meaning; the gate asks for a justified type system, not unnecessary downloads.
