# DESIGN-RECORD

Build mode. Page: `index.html` (opens from disk, no network). Skill: startup-landing-design v0.4. Screenshots in `shots/`, checker output in `check.json`.

## Product interpretation
- Audience, category, business model, brand constraints: Cross-stitchers (hobbyists are most traffic) and pattern sellers (likelier to pay). Category: a cross-stitch pattern editor that charts photos. Business model not set; commercial-use terms undecided. Brand: only the name "Crossling"; no palette, type or logo supplied, so a mark was drawn (a single red stitch on aida).
- Promise (who / what changes / how): A cross-stitcher gets a chart of their own photo in thread colours they can buy, and can change any square, because the chart is an editable grid rather than a fixed export.
- Current alternative, including doing nothing: free photo-to-pattern converters that output a fixed chart (no stitch-level editing), buying someone else's pattern, or drawing on graph paper. Doing nothing: stitching from a bought pattern.
- The one advantage only this product has: the chart stays editable square by square in real thread colours after the photo is converted (fix the stem, swap a shade, unpick a square), not a one-shot export.
- Category frame (existing, subcategory or new) and what it costs to teach: existing, "pattern editor for cross-stitchers" (subhead). Costs nothing to teach; "turn a photo into a cross-stitch pattern" is already how stitchers describe it.
- Best-fit customer, and who it is not for: a stitcher who has a photo they want to stitch (pet, house, holiday) and will tidy the chart by hand; and a seller who needs a symbol chart and a thread list. Not for: knitters or embroiderers (different charts), people who want a finished, printed kit, or anyone needing commercial terms today.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief supplies no interviews, tickets or reviews. The hero uses the brief's own phrasing ("edit square by square", "real thread colours").
- Biggest reason not to click, and the line that answers it: uploading a personal photo and making an account before seeing anything. Line beside the button: "It runs here in your browser on a sample picture. No account, nothing uploaded."
- Conversion action and destination: "Try the sample editor" → `#editor`, the working on-page editor, which takes keyboard focus. The real conversion (open the beta editor) has no address yet; the final block says so and reserves the slot. Link the client must supply: the beta editor URL (then relabel the primary action "Open the beta editor").
- Visitor doubt 1 → artifact: "Can I really edit it?" → the editor in the hero: stitch, swap a colour across the pattern, unpick, undo, start over; keyboard and pointer; live thread counts.
- Visitor doubt 2 → artifact: "Will it look like anything at a size I can stitch?" → the Sizes section: the same drawing charted at 12, 22 and 40 stitches by the same code, with finished sizes computed from fabric count.
- Visitor doubt 3 → artifact: "Are the colours threads I can buy, and what does the computer get wrong?" → How it works: the grid overlay on the source, screen colour → matched thread pairs computed live, and the 4-thread chart before/after a hand-stitched stem.

## Interview log
- Questions asked, each with the recommended default you offered: none asked (nobody would answer). Decisions that would have been questions: (1) is the beta free? default yes, stated as "free to use while pricing is worked out"; (2) which thread catalogue? default: common catalogue codes with names, labelled approximate and unbranded; (3) what does the product export? default: show chart view and thread list, claim no file format; (4) is there a contact address for sellers? default: none, so the commercial-use note promises an on-page answer instead of an email.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the beta is free (Pricing section and ST-01 rest on it; confirm or reword); the thread codes and names are examples (labelled beside the list); the sample source is an original drawing of a pear, not a photo (labelled in the editor header).

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | tldraw (canvas-first, 2026-10-20): the hero ships the real component with the draw tool preselected, so the first drag already produces a stroke; limit: the canvas starts empty, so a visitor who does not draw sees a blank box. | Make the hero the product itself with a tool preselected so the first pointer action changes the artifact; start it filled (the charted pear), not empty. | The install command and code panel, the logo strip, the narrow centred column. |
| Brand composition | Excalidraw (canvas-first, 2026-10-20): the editor's own output idiom (hand-drawn type, doodles, cursor tags) is the page's brand; limit: the hero shows a static screenshot, feature videos were blank frames, hero has no in-body action. | Let the product's output be the brand: stitched crosses on aida are the mark, the favicon, the hero and the section artifacts, all drawn by the same engine. | Hand-drawn display type, pastel doodles, star badge, testimonial carousel, screenshot-only hero. |
| Counterexample | mmm.page (canvas-first, 2026-10-20): the homepage is an editable instance with no login; limit: no heading structure, scroll trapped in an inner container, desktop sidebar kept at 390 so the canvas is a 190px column, two equal buttons. | Keep "no account, edit in place", but inside a normal document: real headings, page scroll, one primary action, and a phone recomposition (canvas full width, tools then palette then list). | The whole-page-as-canvas, inner-container scrolling, fixed EDIT button, maximalist collage. |

Departures from the canvas-first recipe: the h1 is sized toward the measured median (56px at 1440) rather than the recipe's 88px, because an 11-word headline in a 5/12 column would run to six lines; the split is 5/7 not 4/8 so the headline keeps a readable measure; the canvas does not bleed to the viewport edge because it needs a visible frame to read as a tool.

## Hypothesis
- Archetype and why: canvas first. The brief says the canvas is the product and that visitors should edit a pattern on the page; there are no customers, counts or quotes, so the working editor is the only proof.
- Type roles, faces and why they fit this product: display "TeX Gyre Adventor" stack (URW Gothic / Avant Garde / Century Gothic / Futura fallbacks): a geometric sans whose round, grid-like letters fit a product that is literally a grid, and it is not one of the everywhere faces; body "TeX Gyre Heros" stack (Helvetica / Arial) for instructions beside a tool; mono "DejaVu Sans Mono" stack for thread codes and counts (tabular). No web fonts: the page must open offline, so these are local stacks and the visitor's machine may fall back within each stack.
- Composition and grid: 1360px max; hero 5/7 copy/editor; editor is its own grid (header / canvas + side panel / status); Sizes 3 equal columns; How it works a numbered 3-step sequence; Who it's for 2 columns; Pricing 2 columns (claim + definition list); final block narrow. Density: open → active → dense → quiet → short.
- Ground, colour and material, and why this ground: neutral light grey-white (#f3f3f1), the colour of a screen tool, not cream; the aida fabric (#ece4d1) is reserved for the product surface so it reads as material, not decoration; ink near-black; one accent, a thread red (#c0102b), used only for the primary action, the mark and focus. Rules and 1px borders carry hierarchy; no shadows, no gradients.
- Signature artifact and its local behaviour: a 22×22 stitch grid drawn as thread crosses on aida. The source is a procedural drawing of a pear; cells are sampled, k-means grouped into 4/7/10 colours and each group snapped to the nearest thread in a 40-thread catalogue. Visitors stitch (click, drag, or arrows + Enter), swap one thread for another across the pattern, unpick, undo and start over; a Chart view shows the symbol chart; the thread list and counts update live; a status region announces every action. Nothing is saved or uploaded, and the note says so.
- Section sequence, with one section deliberately omitted: hero with editor → Sizes (12/22/40) → How it works (3 steps with live artifacts) → Who it's for (hobbyist / seller, with the commercial-use status beside the seller claim) → Pricing (beta status) → final action → footer. Omitted on purpose: any proof section (testimonials, counts, community) because none exists, and a feature grid.
- Primary interaction and motion purpose: editing the grid. Motion is limited to a 150ms background-colour transition on buttons and smooth anchor scrolling under no-preference; the artifact changes state instantly on input. No autonomous motion anywhere.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure: whether the editor sits beside the copy as a complete tool (A) or the whole hero is the fabric with copy laid over it and a tool rail at the edge (B).
- Category default and anti-default this plan avoids: default for a craft/hobby app: cream ground, warm serif headline, pastel swatches, cute illustrated hero with a framed app screenshot and three feature cards. Anti-default: dark "pro tool" ground, monospace headline, terminal-like chrome. The plan is a light neutral ground with a geometric sans, the aida surface reserved for the product, and a working editor instead of a screenshot.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Copy left, complete editor right (canvas, tools, palette, thread list, status); phone stacks copy then a single workspace | "Can I really edit it, and what do I get?" (chart, list, counts) | 8 | 7 | 7 | 7 | 8 | A real photo upload in the beta and a visible path to it; the client's own voice in the copy |
| B | Full-bleed aida fills the hero; headline and button sit on it; a thin tool rail hugs the left edge; thread list hidden behind a drawer | "Is this a canvas I can touch?" | 6 | 8 | 8 | 5 | 6 | Copy legible over the fabric at every width, the drawer discoverable on phones, no text over the pattern |

Score each dimension 0–10.

- Chosen variant and why: A. B is more striking but puts the promise over a patterned ground (contrast unverified by design) and hides the thread list, which is half the product's output; A keeps copy and action independent of the canvas, so the page still explains itself if the script fails.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block (PS-08) | Neither: light neutral ground (not cream), geometric sans (not serif, not mono), a working editor instead of a framed screenshot; both defaults recorded above. |
| Hero visual is decoration | Block (PS-03) | The hero visual is the product: a working editor with real output (thread list and counts). |
| Three equal adjective cards | Block | None planned; the three-column rows are three sizes of the same chart and three numbered steps, each with a computed artifact. |
| Unsupported trust logos or testimonials; metrics without sources | Block | None. The only numbers are stitch counts computed on the page and sizes that are stitch count ÷ fabric count, both captioned. |
| Hover-only behaviour | Block | The grid is keyboard operable (arrows, Enter, Space); every control is a native button or radio. |
| Control without destination/result | Block | Every hero control changes the grid, the view, the palette or the list; the primary action lands on the editor and focuses it. |
| No reduced-motion rule | Block | Smooth scroll only under no-preference; button transition disabled under reduce; nothing else moves. |
| Scaled-down desktop on mobile | Block | Phone recomposition planned: canvas full width, tools, palette, list, status in one column. |
| Small tracked-caps label above every heading | Warn | None used. |
| Every section has same width and padding | Warn | Widths vary by task (3-column grids, 2-column, narrow final block); padding is one scale. |
| Grid, dot or stripe background used as filler | Warn | The aida holes are drawn on the product canvas only, never as a page background. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/v3/1440-top.png | Full page in shots/v3/1440.png. h1 four lines, no orphan; subhead, button and aside visible; editor complete in the first screen with the palette row and status cut by the fold (HR-05); thread list wraps instead of truncating; no dead space under the canvas. |
| 768×1024 | shots/v3/768-top.png | Full page in shots/v3/768.png. Nav collapsed to Menu; editor full width with canvas beside the side panel; Sizes keeps three columns; steps three columns; no overflow. |
| 390×844 | shots/v3/390-top.png | Full page in shots/v3/390.png. h1 four lines, no orphan; button at ~450px; editor header cut by the fold; editor states in shots/states/390-*.png (initial, stitched, swapped, chart, 4 threads, 10 threads, more threads open, keyboard); menu open in shots/states/390-menu.png. |

Editor states at 1440: shots/states/1440-1-initial.png … 1440-8-keyboard.png (stitch by drag, swap colour, chart view, 4 and 10 threads, the catalogue drawer, keyboard stitch). All opened and not blank.

## Checker result
- JSON: check.json
- Summary: 68 passed, 0 block failures, 0 warnings, 0 not run; lab LCP 436ms median on the throttled profile; CLS 0; Flesch–Kincaid grade 3.9.
- Failures fixed: TY-02 (an h3 "Thread list" inside the hero skipped from h1; now a labelled paragraph); AX-03 (the segmented control's focus ring was 2.81:1 against its own ink fill; controls rebuilt as native radio inputs with a 3px accent ring on the label against the white panel); PS-06 warning in v1 (tool and swatch buttons counted as filled actions; they are now radio inputs and transparent buttons, so the only filled action is "Try the sample editor"); LY-03 in v1 (truncated thread names, now wrap).
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: "npm error code ENOTFOUND" (no network to fetch the package).

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/v3/1440-top.png and 390-top.png: "for cross-stitchers", "charts the picture in real thread colours you can edit square by square". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | The h1 states photo → cross-stitch pattern → change any stitch, with the stitched pear beside it. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | A working editor: drag stitched a brown row and the list counted it (shots/states/1440-2-stitched.png). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Editor (editability), Sizes section (what it looks like at stitchable sizes), How it works (thread matching and the before/after stem). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: edit; Sizes: stitch count and finished size; How: mechanism; Who: use cases and commercial status; Pricing: cost status; final: where the beta link goes. The hero's duplicate "how to use" paragraph was removed. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four decisions with defaults and the assumptions that change the page. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A and B differ on structure; default and anti-default recorded and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table plus the departures paragraph under it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | Subhead: "a pattern editor for cross-stitchers". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "then change any stitch" is false on a fixed-export converter's page. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1 (3/3); "The same picture at 12, 22 and 40 stitches across" (3/3); "From a photo to a chart in three steps" (picturable, falsifiable); "For the photo on your fridge, and for the patterns you sell" (3/3); "The beta is free to use while pricing is worked out" (falsifiable, specific); "The sample is the real engine, at 22 stitches" (3/3). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero adapts the brief's own phrase "edit square by square". |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "It runs here in your browser on a sample picture. No account, nothing uploaded." beside both buttons. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings alone: photo → pattern → change any stitch; sizes; three steps; for you and for sellers; free beta; the sample is the real engine. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "change any stitch." (1440 and 390), "pattern, then change any stitch." (768). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero` has padding only; no vh units in the stylesheet. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied; none invented. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red appears on the primary button, the stitch mark, focus rings and the chart-view cursor only. |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The stitched pear, aida surface, thread list and the editor are specific to this product. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no tldraw code panel or install command; no Excalidraw hand-drawn type, doodles or carousel; no mmm.page whole-page canvas or fixed EDIT button. Shared grammar only (an editable artifact in the hero, a light ground). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Swatch hover outline is inside `@media (hover:hover) and (pointer:fine)`; no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Button hover/focus → background colour change → immediate colour under reduce → 150ms ease-out. Anchor click → smooth scroll → instant jump under reduce → browser default. Canvas edits repaint immediately with no animation. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/states/390-2-stitched.png: canvas full width at 16px cells, tools, palette and thread list stacked in one column; the Sizes and steps grids stack with capped widths. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#status` is `role="status" aria-live="polite"` and every tool, swatch, view and count change writes to it. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Stitch counts are computed live ("Counts come from this sample"); sizes are captioned as stitch count ÷ fabric count; thread codes are labelled as following a standard catalogue with approximate shades. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Editor header: "Sample only: the source is a drawing, not a photo. The beta editor takes your own photos." Thread list note sits under the list. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Try the sample editor" lands on and focuses the editor; every editor control changes the grid, view, palette or list; nav and footer links are in-page anchors that exist (AX-08 passed). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Opened v1, v2 and v3 at all three widths plus the eight editor states at 1440 and 390 and the open menu. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: shots/v2/1440-top.png → shots/v3/1440-top.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Rendering and the checker ran; nothing is unverified. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not present: left-aligned headline beside a working editor. |
| Hero visual is decoration | Block | Not present: shots/states/1440-2-stitched.png shows the artifact responding to input and the list counting it. |
| Every section has same width and padding | Warn | Widths differ (3-col, 3-step, 2-col, narrow final); kept. |
| Hover-only behaviour | Block | Not present: keyboard stitch captured in shots/states/1440-8-keyboard.png; AX-03 passed with 18 controls tabbed. |
| Scaled-down desktop on mobile | Block | Not present: 390 editor recomposed (shots/states/390-2-stitched.png); 768 nav collapsed to a working Menu. |
| Fake liveness | Warn | Not present: MO-05 passed, nothing changes by itself. |
| One sans, one weight everywhere | Warn | Not present: geometric display at 700, Helvetica-class body at 400/700, mono for codes. |

## Structural revision
- Weakest explanation or most template-like decision: the first editor layout stacked tools and palette under the canvas and put only the thread list beside it, so the editor ran to about 1,000px at 1440: the status line and palette fell below the fold, the left column had a large dead area under the copy, and the artifact read as "a canvas with stuff underneath" rather than an editor.
- Change made (structure, not styling): the editor became a canvas-plus-side-panel grid: tools and the thread list moved into a right-hand panel, the palette moved directly under the fabric, and on phones the grid is recomposed with `display:contents` into canvas → note → tools → palette → list → status. The whole editor now sits inside the first screen at 1440 with only the status line cut by the fold.
- Before: shots/v2/1440-top.png
- After: shots/v3/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 7, Originality 7, Composition 8/10, Proof 8. Composition rose from 7 to 8 (the editor reads as one tool, no dead space); Proof stays 8 because the source is a drawing and no photo can be uploaded on this page; Identity stays 7 because the type is a local system stack, not a licensed face the client chose.
- Removal pass (each decorative element → its job, or "removed"): the hero "how to use" paragraph → removed (the editor's own note says it); hairline borders on the editor and panels → separate the product surface from the page; the aida holes → show the fabric material the product targets; the 10-stitch bold grid lines in Chart view → the standard counting aid on printed charts; the stitch mark in the header and footer → the brand mark; the 2px rule above the two status notes → ties each note to the claim it qualifies; the numbered step labels → a real sequence; button hover colour → affordance. No glows, gradients, shadows, badges or eyebrows remain.

## Remaining weaknesses
- What a buyer still cannot judge: how the beta handles a real photo (noise, faces, dithering), how large a chart it supports, what it exports (PDF or otherwise), what it will cost, and whether patterns made with it may be sold. The page says each of these is open rather than guessing.
- What was not verified: the share card on a public URL (og:image points at https://crossling.example/og.png and must be replaced with the real domain; og.png is in the folder); how the fallback fonts render on the visitor's machine (the stacks end in Century Gothic / Futura / Helvetica / Arial); the thread codes against a current catalogue (they are labelled as examples); and the assumption that the beta is free, which the client must confirm or the Pricing section must be reworded. Impeccable detect could not run offline.

## Status
DONE
