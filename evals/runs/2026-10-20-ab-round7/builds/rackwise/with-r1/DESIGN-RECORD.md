# DESIGN-RECORD

Page: `index.html` (opens from disk; fonts, icons and script are local). Built from `src/build.mjs` (data and drawings in `src/core.js`, behaviour in `src/app.js`, styles in `src/style.css`); run `node src/build.mjs` to regenerate.

## Product interpretation
- Audience, category, business model, brand constraints: lab managers at small biotech companies and university labs buy; researchers and technicians use it at the freezer, often in gloves. Category: sample-location map for −80 °C freezers. Pre-launch, early access by request. No existing brand; no proof beyond "four labs are testing it"; must not imply temperature monitoring.
- Promise (who / what changes / how): lab staff find a sample's freezer, shelf, rack, box and well before opening the door, because Rackwise keeps a live map of every position with who put each tube there and when.
- Five-second line, quoted as shown in the first screen (who + what): "Rackwise is a live map of the −80 °C freezers in small biotech and university labs: every rack, box and tube position, who put each tube there, and when."
- Current alternative, including doing nothing: a shared spreadsheet that is always out of date, plus handwritten box labels that fade in the cold; doing nothing means searching with the door open.
- The one advantage only this product has: the answer (freezer, shelf, rack, box, well, who and when) exists before the door opens, and stays current because taking a tube out is logged on the same map.
- Category frame (existing, subcategory or new) and what it costs to teach: subcategory of lab inventory, framed plainly as "a live map of the −80 °C freezers"; costs one sentence.
- Best-fit customer, and who it is not for: small biotech and university labs with a few −80 °C freezers and a shared sheet; not for labs wanting temperature monitoring or alarms, and not a reagent-ordering or LIMS replacement (not claimed).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no interviews; the hero adapts the brief's own wording ("always out of date", "fade in the cold").
- Biggest reason not to click, and the line that answers it: "is this real, and what does the button commit me to?" Answered beside the button: "Opens the request page on rackwise.example. Four labs are testing Rackwise now."
- Conversion action and destination: "Request early access" → https://rackwise.example/early-access (the brief's URL), same label in nav, hero, close and footer.
- Visitor doubt 1 → artifact: "Will it actually tell me where the tube is?" → the hero finder: search a name, get the freezer/shelf/rack/box/well strip, the box grid and the shelf elevation.
- Visitor doubt 2 → artifact: "Will it stay current, unlike our sheet?" → the take-out/put-back log in the finder, which also writes into the Box 4 log further down; the before/after panel (faded lid + stale sheet row vs. sample record).
- Visitor doubt 3 → artifact: "As the manager, can I see who did what?" → the Box 4 log with person filters that ring that person's positions on the box grid.

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (nobody answers during this task). Defaults I would have offered: (1) is early access a form on rackwise.example? default yes, link to it; (2) can sample names and people be invented for a labelled sample? default yes; (3) pricing public? default no, say "not published yet".
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the finder's freezer layout (5 shelves, racks A–D, 5 boxes per rack, 9 × 9 boxes) is a plausible sample, labelled as made up; no pricing shown; no device or platform named.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | snag (functional-entrance, audited 2026-10-19): the search control is the hero and real inventory sits beneath it, so the first screen is already a result; limit: thin trust explanation, prefilled city may misdirect | Make the product's own lookup the hero, prefilled with a sensible result, and recompose the input for phones rather than shrinking it | Peach band, lowercase voice, photo listing shelves, pill search bar |
| Brand composition | Meuze (workflow-theater, reference tier, audited 2026-10-20): one dot-matrix/halftone treatment held across photo, illustrations, charts and logo; tiny operational artifacts instead of feature icons; limit: 4,000px scroll track and dimmed copy | Hold one graphic language (here: 1.5px technical line, flat steel tone steps, orange only for the thing being found) across the hero, the lid, the rack diagram and the log grid | Halftone imagery, dark ground, pinned scroll scenes, scroll-scrubbed reveals |
| Counterexample | Retool (functional-entrance, reference tier, audited 2026-10-20): a hero prompt box that produces nothing until sign-up | Every control in the hero answers on the page; the only off-page action is the real early-access link, and the line beside it says so | A hero input that defers its result to sign-up; promo pill beside the headline |

Departures from the functional-entrance recipe: H1 72px max rather than 80px (three short lines at 1440); max width 1240px rather than 1180px; the answer (address strip and result) sits above the input, not below it, because on a phone the result must share the screen with the controls.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the 9 × 9 cryobox with its cut A1 corner; the freezer, shelf, rack, box, well address; marker labels on frosted lids; the upright −80 with its inner doors and five shelves; vertical racks pulled out by a handle; counting down boxes in a rack; nitrile gloves at an open door; the shared sheet's "Edited" column; tube caps seen from above; frost that hides the writing; who put a tube in and when
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Rackwise" with seed 4235572338: world, before-after, notation, canon.
- Chosen move and why, or canon and the buyer-risk reason: notation (the audience's own format). Lab staff read box grids and freezer/shelf/rack/box/well addresses every day; filled with the product's answer, the format is recognised before a word is read. Before-after is used once, lower down, as supporting proof.
- Idea sentence ("[inventory thing] becomes [the move]"): the freezer address a researcher reads off a rack tag (Freezer 2, Shelf 3, Rack C, Box 4, Well E6) becomes the hero's label-tape readout, set big enough to read at the door, above the 9 × 9 box with that well lit.
- The same sentence with the nearest competitor, and why it fails: "The shared spreadsheet's address becomes the label-tape readout above the box with the well lit": the spreadsheet holds a stale "Shelf 2?" row and no box map, so the sentence is false for it; a general lab-inventory tool (for example Quartzy, known for ordering) leads with purchasing, not with the door-side address.
- Statement level (quiet, bold or loud) and why: bold; the readout owns the first screen, and sections below stay quiet and carry proof (lid, rack diagram, log). The buyer is accountable for samples, not a consumer.
- First viewport at 1440 (placement, sizes, live thing, refused default): left column: 72px condensed headline over three lines, five-second line at 20px, payer line, orange "Request early access" with the status line; right column (about 650px): the finder card with the Freezer/Shelf/Rack/Box/Well strip (Well E6 in orange), shelf elevation, 9 × 9 box grid, result and "Log it as taken out", then input and five sample chips; the next section's heading shows at the bottom. Refuses a centred headline with two buttons over a dashboard screenshot.
- First viewport at 390: 38px headline on two lines, five-second line, payer line, CTA and status line; the finder starts at about y=535 with the strip, the result and "Log it as taken out" visible; input, chips and the drawings follow below.
- Name test (the one with the …, eight words or fewer): the one with the Well E6 label tape

## Hypothesis
- Archetype and why: functional entrance; the product is a lookup with a safe sample input and an immediate answer.
- Type roles, faces and why they fit this product: display and labels in TeX Gyre Heros Cn Bold/Regular (a condensed grotesque like printed rack tags and equipment plates, which fits five address cells on a phone); text in TeX Gyre Schola (Century Schoolbook lineage, the voice of a printed lab protocol). Both GUST-licensed, subset and shipped as woff in `fonts/` with the licence. No mono: the address uses tabular figures.
- Composition and grid: 1240px wrap; hero split .7fr / 1fr at 1040px and up, stacked below; finder is its own grid (strip, elevation, box, result, search, chips) that recomposes at 600 and 1040px.
- Ground, colour and material, and why this ground: frost grey-white (#EBF0F2), the inside of a defrosted −80; label-stock white for the artifact; slate ink; one cryobox orange (#C2410C) for the action and the found position only.
- Signature artifact and its local behaviour: "Find a sample": whole-token search over ten sample tubes, well lookup (E5, J12 refused), five chips, a match list for HEK293, take out / put back that updates the grid and the Box 4 log, and Reset.
- Signature on a phone (where the result shows after a tap): strip and result text sit above the take-out button and the search; drawings follow the chips, so every control's result (the status text) is on screen after a tap; checker MB-07 passed with 9 controls.
- Sample audit (counts, weekdays, states and stated rules agree): every weekday computed for 2026 (CP-13 passed); Box 4 holds 41 of 81 in both the record panel and the drawn grid (same seeded function); E5 is empty in the grid, the well lookup and the log (HEK293 p10 out on Tue 13 Oct 2026); the log's wells (E6, E5, D2, A1, A2) match the samples; "14" finds gRNA 14 and "1" finds nothing (whole tokens); "ten tubes" matches the ten samples.
- To confirm with the client (claims and terms kept off the page): what the early-access page asks for and what happens after; pricing; which devices/platforms Rackwise runs on (none named); whether logging a take-out is one tap and glove-friendly (the demo has large targets, the copy claims nothing); whether box/rack history beyond "who put it there and when" (take-outs, per-person filters) is in the product; data location and access controls; og.png and apple-touch-icon.png must be hosted at https://rackwise.example/ for the absolute og:image.
- Section sequence, with one section deliberately omitted: hero with finder → spreadsheet vs. record → at the freezer (three steps + rack diagram) → lab managers' Box 4 log → answers (temperature, testing, cost, what the button does) → close → footer. Omitted: a features grid and a testimonials/logo band (no supplied proof).
- Primary interaction and motion purpose: the search and take-out loop; motion is one ring-in on the found well (state) and a fill transition on the rack (continuity).

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (a label-tape readout beside copy vs. a full-width drawn freezer scene).
- Category default and anti-default this plan avoids: default: white page, blue accent, Inter, stock photo of pipettes or a dashboard screenshot under a centred headline. Anti-default: dark "cryogenic" page with glowing blue and terminal type. The plan uses a frost ground, an orange used only for state and action, a condensed label face with a schoolbook text face, and drawn technical elevations.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Notation: copy left; finder right with Freezer/Shelf/Rack/Box/Well label strip, shelf elevation, 9 × 9 box, search and chips | Will it tell me where the tube is? | 8 | 8 | 7 | 7 | 7 | A real lab's freezer data (with permission) and a named tester quote |
| B | Inhabited world: full-width drawing of an upright −80 with its door open, headline on the door, the finder drawn into the shelves | What is it like at the freezer? | 6 | 8 | 8 | 6 | 5 | A scene that stays readable at 390 without pushing the five-second line down |

- Chosen variant and why: A; it keeps the five-second line and the live loop in the first screen at 390, while B's scene would push both below the fold on phones. B's freezer survives as the elevation drawing inside A.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Avoided: frost ground, condensed label face plus schoolbook text, drawn elevations, orange as state only |
| Hero visual is decoration | Block | The hero visual is the working finder |
| Three equal adjective cards | Block | None; steps are a real sequence beside a diagram |
| Unsupported trust logos or testimonials | Block | None; only "four labs are testing it", unnamed, as the brief says |
| Metrics without sources | Block | Only sample counts (41 of 81), labelled as a sample record |
| Section numbers on content that is not a sequence | Warn | Numbers appear only on the three freezer steps, which are a sequence |
| Small tracked-caps label above every heading | Warn | Caps appear only as field labels inside the strip and record |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/final/1440-top.png | Headline, five-second line, CTA and full finder in view; next section heading at the bottom; full page in shots/final/1440.png |
| 768×1024 | shots/final/768-top.png | Stacked hero, finder with elevation beside result and grid capped at 300px; full page shots/final/768.png checked for pacing |
| 390×844 | shots/final/390-top.png | Two-line headline, CTA, status line, strip and result in view; full page shots/final/390.png is 6,401px (under 8 screens) |

Artifact states: shots/states/ (1440-* and 390-*: default, taken out, HEK293 matches, empty, J12 out of range, E5 empty well, nonsense, 200-character input, reset, log filter; 390-reduced-taken.png; 390-nojs.png).

## Checker result
- JSON: check.json
- Failures fixed: MB-07 in the first run (check-v1.json): the Box 4 log's status line (a live region) changed off-screen after every finder control, and Reset's result text sat below the fold at 390. Fixed by touching the log only when the take-out state changes and by moving the result above the controls. Also fixed warnings HR-08 (blank band under the 1440 hero), LY-05 (strip counted as a nested card) and PF-06 (title now leads with the category).
- Warnings kept and why: PS-06 lists the finder's own buttons (Find, chips, filters) as competing actions; there is one primary action, "Request early access", worded the same everywhere. ST-01: pricing is not published; the Answers section says so rather than inventing a price.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed (npm error, package not installed; no network).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 390-top and 1440-top: headline, five-second line naming small biotech and university labs, payer line |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | "a live map of the −80 °C freezers" plus the Freezer/Shelf/Rack/Box/Well strip in both first screens |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The finder returns positions, logs take-outs and refuses bad input |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the finder, the take-out log and lid/sheet comparison, and the Box 4 log (Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Sections cover cost of the old way, the door routine, the manager log, limits; status line repeated only beside each CTA |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three defaults, proceeded on them |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (notation) and B (world), both dealt, scored; defaults named |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | snag, Meuze, Retool; departures listed under References |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a live map of the −80 °C freezers in small biotech and university labs" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Find the tube before you open the door" is false for a stale spreadsheet |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each heading names a concrete object or claim (marker faded, which rack to pull, who put each tube, does not watch temperature) |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; hero adapts the brief's "always out of date" and "fade in the cold" |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Opens the request page on rackwise.example. Four labs are testing Rackwise now." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order read as the argument from problem to limits to action |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content (padding only) in src/style.css |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | Only supplied proof, "four labs are testing it", sits beside the CTA in the first screen; no quotes |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Orange only on CTAs, the found well/rack/strip cell, Box 4 in the diagram, pressed-chip underline and log rings |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement section swap test; the page is built around this product's freezer address |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No pill search, photo shelves, halftone, dark ground or scroll tracks; copy and drawings original |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules sit in media (hover:hover) and (pointer:fine); no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Remaining weaknesses → motion contract lines below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | 390: strip, result, action, search, chips, then grid beside a narrow elevation (shots/states/390-*) |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | Finder result is role=status aria-live=polite; log filter status is role=status |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Counts and dates sit in the "made up for this page" finder or under "Sample record"/"Sample entries" |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Finder title "Sample freezer, made up for this page"; sheet caption "(illustration)"; "Sample record"; "Sample entries" |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Request early access → https://rackwise.example/early-access; all finder and log controls change visible content |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Opened all shots/final PNGs and shots/states; 768 full page inspected |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: shots/v1 → shots/final |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Checker clean, renders present, nothing unverified |
<!-- checklist:end -->

Motion contracts (MO-08):
- Found-well ring: trigger a new result; purpose state (where to look); fallback ring shown at once; 220ms scale .9→1 with opacity, cubic-bezier(.2,.7,.2,1); only under prefers-reduced-motion: no-preference.
- Rack and shelf highlight: trigger a new result; purpose continuity; fallback instant colour; 160ms fill ease-out; no-preference only.
- Button press: trigger pointer press; purpose feedback; fallback none needed; scale .97 on :active, no transition.

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the field and pressed Enter at 1440 and 390 | Strip shows dashes, "Type a sample name" with examples; take-out disabled | pass |
| Out of range | Typed J12 and Z0 | "There is no J12. Boxes in this freezer are 9 × 9: rows A to I, columns 1 to 9." | pass |
| Nonsense | Typed "asdf;;" and "1" | "Nothing called “asdf;;”" with suggestions; "1" matches nothing (whole tokens) while "14" finds gRNA 14 | pass |
| Repeat | Clicked take-out four times quickly | Toggles out/back each time; ends in the matching state; log entry added and removed | pass |
| Reset | Pressed Reset after several states | Returns to HEK293 p12, E6, nothing taken out, field refilled; focus stays on Reset | pass |
| Keyboard only | Tab from the field to Find and the chips, Enter on pUC19; picking a match keeps focus on it | Result updates; focus never drops to body (AX-12 passed) | pass |
| Phone | Operated every control at 390 (stress script and checker MB-07) | Result text stays on screen after each tap; controls 44px+ (MB-09 passed) | pass |
| Reduced motion | Loaded with reduced motion and took a tube out (shots/states/390-reduced-taken.png) | No animations running (getAnimations = 0); state shown at once | pass |
| Visitor's own input | Typed 200 characters, "lys", "E5", "HEK293" | Input capped at 60; echo wraps without overflow; "lys" finds Liver lysate M7; E5 shows it empty with who took HEK293 p10 out; HEK293 lists four matches | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not present: the finder works in every capture |
| Scaled-down desktop on mobile | Block | Not present: finder recomposed at 390 |
| Every section has same width and padding | Warn | Kept partly: sections share padding, but the hero, compare panels, steps with diagram and log differ in width and density |
| Text still invisible after load and a scroll | Block | MO-02 passed; no reveal animations |
| A row of big stat numbers under the hero | Warn | Not present |

## Structural revision
- Weakest explanation or most template-like decision: in v1 the phone finder put the drawings between the result and the controls, so a tap's result fell below the fold (MB-07 failed), and the 1440 first screen ended in a blank band, reading as a false floor.
- Change made (structure, not styling): reordered the finder: result and take-out moved directly under the address strip, search and chips next, drawings last on phones; at 600px and up the finder became one grid with elevation, box and result side by side; the hero bottom and the first section were tightened so the next heading enters the first screen; the log only re-renders when the take-out state changes.
- Before: shots/v1/390-top.png
- After: shots/final/390-top.png
- Score after the change and what still keeps it from a 10: 8/10 for variant A; a 10 needs real tester data or a named quote, and a real early-access flow to describe.
- Removal pass (each decorative element → its job, or "removed"): frost blobs on the lid → show why labels can't be read (kept); marker smudge filter → shows fading (kept); freezer feet and open door in the elevation → identify it as an upright freezer (kept); pressed-chip orange underline → state (kept); menu panel shadow → separates the overlay from the page (kept); an empty text element in the rack diagram → removed.

## Remaining weaknesses
- What a buyer still cannot judge: what the real product's screens, setup and data entry look like; pricing; who the four test labs are.
- What was not verified: nothing on the checklist is unverified; impeccable detect could not run (not installed), which is optional.

## Status
DONE
