# DESIGN-RECORD

Poolday landing page. Page: `index.html` (+ `poolday.css`, `poolday.js`, `fonts/`). Record started before code; sections below the gate were filled after rendering. Served for checks at http://127.0.0.1:8765/ (static; also opens from disk).

## Product interpretation
- Audience, category, business model, brand constraints: Groups of friends (and the one friend who usually organizes) buying a single shared present; consumer social-payments idea, pre-product. Business model unknown (not in brief). No existing brand, code or assets; only the name "Poolday". Brief constraints: feel like a human occasion, not a finance dashboard; a local example usable without payment details; no real reviews or volume.
- Promise (who / what changes / how): For friends buying one present together, nobody has to front the whole cost and chase everyone afterwards, because one person starts the gift, the others add what they can, and the organizer always sees what's still needed.
- Conversion action and destination: "Start a practice pool" → `#start`, a local builder that turns who/occasion/gift/price into a gift tag, a share message and the organizer's "still needed" view. Secondary text link "See how a pool runs" → `#how`. No real signup exists, so the action produces a visible local result rather than a fake form.
- Visitor doubt 1 → artifact: "Will this feel like a bank app or a money request between friends?" → the hero gift tag: an example pool written like a card friends sign (names, short notes in their own words, amounts), with a blank line where the visitor signs and adds what they can.
- Visitor doubt 2 → artifact: "As the organizer, will I know what's still needed without chasing people?" → the tag's ribbon and "still needed" figure, which update on every addition, including the over-the-price state; plus the builder's organizer readout with an even-split helper.
- Visitor doubt 3 → artifact: "Do I have to enter card details or move money to try it? Is any of this real yet?" → no payment field anywhere; every demo is labelled "runs in this tab, no money moves", and a short "What's not decided yet" section states what does not exist (money handling, fees, amount visibility, reviews, volume).

## Interview log
- Questions asked, each with the recommended default you offered: Client unavailable, so questions were logged with defaults instead of sent. (1) Primary action: start a pool or see how it works? Default: "Start a practice pool" as the primary, "See how a pool runs" as a text link. (2) Is there a signup/waitlist destination? Default: none; the primary action produces a local result. (3) Brand colours or type? Default: none exist; choose from the occasion. (4) Can contributors see each other's amounts? Default: not decided; the example shows amounts but the page says this is open. (5) Which currency/market? Default: US dollars.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: No sign-up exists, so no email form; the CTA scrolls to a working local builder. Example names, occasion and amounts are made up and labelled. How money is collected, held and paid out is not described because the brief does not define it.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | snag (snagsublets.com), casebook desktop-mobile audit 2026-10-19: the search control is the hero and real priced listings sit directly under it; on phones the pill search becomes stacked labelled fields with a full-width button. Limit: trust and verification barely explained; leans on an unsourced 30,000-students claim. | Make the product's one operation the first screen and show its result immediately; rebuild the input as stacked labelled fields on phones rather than shrinking it. | Peach band, pill search bar, lowercase headline, listing shelves and any user-count claim. |
| Brand composition | Juno (junocompanion.com), casebook audit 2026-10-19 (live visits returned 502; observations from stored capture): frames a sensitive tool as personal support by showing what a person would say ("My headache is bad today") in context rather than screenshots. Limit: product UI barely shown; stock-feeling portraits; reveals rendered blank. | Show the product through people's own words in a real-life frame; here the words friends write on a card carry the human tone. | Photography, inset rounded photo hero, chat-bubble overlays, HSA/FSA-style eligibility line, long 14,000px page. |
| Counterexample | Mercury (mercury.com), partial desktop record 2026-10-19: cinematic landscape behind a centred finance statement with signup/demo actions and a financial disclaimer. Limit: only partially inspected; foreground text competes with the image. | Attractive because it makes money feel aspirational, but it frames the product as finance, which the brief rules out. Constraint retained: keep material qualifications (here "no money moves, nothing decided about payments") right next to the promise. | Landscape scene, banking vocabulary, signup form, account/dashboard framing, centred statement over an image. |

## Hypothesis
- Archetype and why: Functional entrance. Poolday's value is one small operation (add to a shared gift, see what's left) that can be performed safely in the browser; the brief asks for a usable local example. Departures from the recipe: the output is a paper gift tag rather than a technical output pane, the display face is wider and warmer than the recipe's compact sans, and the hero ground is a deep plum instead of a quiet base, because the occasion (an evening party, a card being passed) matters more than tool neutrality.
- Type roles, faces and why they fit this product: Bricolage Grotesque (OFL, self-hosted, variable opsz/wght/wdth) for display, UI and body: its rounded, slightly irregular forms read as invitation lettering, not banking, and opsz keeps 17px body readable; tabular figures for amounts. Lora Italic (OFL, unmodified file) only for what friends write on the card, so their words look like handwriting-adjacent notes distinct from the product's voice. No mono: nothing here needs code alignment.
- Composition and grid: 12-column, max 1180px. Hero split 5/7: promise and actions left, the gift tag right, tag tilted slightly as a physical object. Sequence section as a three-step horizontal track (vertical on phones). Scope section a single narrow 60ch column. Builder split form/tag.
- Ground, colour and material, and why this ground: Deep plum ground (#2A1130) for the two interactive sections (party-evening, unlike finance navy/green); paper-white tag (#FFF9F2) as the one material; blush (#F6EDE6) for reading sections. One accent, marigold (#FFB23F), used only for the primary action and the "still needed" state/ribbon fill.
- Signature artifact and its local behaviour: A gift tag for "Maya turns 30": the gift, its price, a ribbon that fills as friends add, signatures with notes and amounts, and a blank "sign here" line. The visitor adds a name, an amount and an optional note; the tag gains a signature, the ribbon and "still needed" update, and a status line announces the result. Covers the over-price state and validation errors. Labelled as an example with made-up names; reset available.
- Section sequence, with one section deliberately omitted: Hero tag (add to a gift) → How a pool runs (3 real steps incl. the message friends receive) → What's not decided yet (quiet) → Start a practice pool (builder: tag, share message, organizer view) → footer action. Omitted: testimonials/"loved by" and any stats band, because no reviews or volume exist; also no pricing section, since fees are undecided.
- Primary interaction and motion purpose: Adding to the gift. Motion only confirms state: the new signature moves up 6px into place (220ms), the ribbon fill scales to the new share (280ms); text values swap immediately. Reduced motion: no movement, same states.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure: which moment of a pool the hero shows (an empty tag being started vs. a tag already mid-pool).

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split hero: promise left; right a blank start-a-pool form that composes an empty gift tag as you type who/occasion/gift/price. | Can I start one quickly without payment details? | 7 | 5 | 5 | 6 | 6 | Starting would need to feel like writing a card, not a form; an empty tag shows no friends, so the "together" part is invisible. |
| B | Split hero: promise left; right an example tag mid-pool (three friends signed, $80 still needed) with a blank signature line where the visitor adds what they can; builder directly below. | Will it feel like a card between friends, and does the organizer see what's left? | 8 | 7 | 7 | 7 | 8 | The visitor should be able to go from adding to starting their own on the same object, without the page reading as two separate demos. |

Score each dimension 0–10.

- Chosen variant and why: B. It shows the social occasion and the organizer's "still needed" number in one object on the first screen, which is what separates Poolday from a payment request; starting a pool follows as the primary action.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Three equal adjective cards | Block (risk) | The "how a pool runs" row is a real three-step sequence with verbs and a message artifact, built as a connected track, not adjective cards. |
| Section numbers on content that is not a sequence | Warn (risk) | Numbers only on the three pool steps, which are a real order; no other section is numbered. |
| Metrics without sources | Block (risk) | Only example amounts, all inside labelled example tags; no stats band. |
| Unsupported trust logos or testimonials | Block (risk) | None planned; friends' notes on the tag are visibly part of the labelled made-up example, not reviews. |
| Cream ground with a serif display | Warn (risk) | Hero ground is plum and the H1 is a sans; serif italic appears only for friends' notes on the card. |
| Small tracked-caps label above every heading | Warn (risk) | No eyebrow labels above headings; small labels only inside the tag where they name a field. |
| Control without destination/result | Block (risk) | Every control acts locally (add, reset, make tag, copy, split, menu) or anchors to an existing section. |
| No reduced-motion rule | Block (risk) | `prefers-reduced-motion` removes transitions; states still change. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened; 1440px wide, not blank, fonts loaded. H1 sets on two lines ("Go in on one / gift, together."), primary action, mode switch and the Maya tag with "$80 still needed" all in the first screen. Full page `shots/1440.png`: hero → how → scope → footer, no overflow, no stray empty section. |
| 768×1024 | shots/768-top.png | Opened; 768px wide. Hero recomposed to one column (H1 fits one line), tag full width with name/note side by side; steps become a vertical track with each mini tag beside its text (`shots/768.png`), not a squeezed three-column row. |
| 390×844 | shots/390-top.png | Opened; 390px wide. H1 on two lines, full-width "Start a practice pool", mode switch and the top of the tag visible in the first screen. Full page `shots/390.png`: tag figures restacked (still needed on its own row), sign-line fields stacked, menu button in header. States operated at 390 and 1440: `shots/states/flow-390-start.png`, `flow-390-own.png`, `flow-1440-example-over.png`. |

Each screenshot cell is a relative `.png` path, or `unavailable: "<decisive error line>"` with the full log linked in the next cell. Open every PNG before listing it.

## Checker result
- JSON: check.json
- Failures fixed: Before revision (`check-v1.json`): PS-06 warned because the off-screen skip link was a filled button; made it transparent until focused. After revision: LY-02 (block) failed at 320px because the nowrap mode tab overflowed by 8px; tabs now wrap below 375px. Final run: 64 passed, 0 block failures, 0 warnings, 0 not run (served over http://127.0.0.1 so PF-04 could run).
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error network 'proxy' config is set properly" (not installed locally); web-design-guidelines not available in this environment.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, 390-top.png: "for friends buying a single present as a group… one of you starts… everyone adds… organizer sees what's still needed, so nobody fronts the whole thing". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | H1 "Go in on one gift, together." beside a tag showing price, in so far and still needed (1440-top.png). |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The tag is the product model: adding, starting, still-needed and over-price states all operate (shots/states/*). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → signed tag with friends' notes; doubt 2 → ribbon/still-needed + organizer readout (flow-1440-own.png); doubt 3 → "no money moves" labels and "What's not decided yet" section. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero = operate a pool; How = order and the group-chat message; Scope = what does not exist; footer = action. The separate builder section that repeated the hero tag was removed in the revision. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, no answer, proceeded on defaults. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | "Two hero variants before code": A empty tag vs B mid-pool tag, axis = structure, scored. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | References table: snag (explanation), Juno (composition), Mercury (counterexample), each with "not borrowed". |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Functional entrance recipe; departures listed under Hypothesis (paper tag output, warmer display face, plum ground). |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | n/a | Hero is left-aligned split with a live tag; no centred headline or screenshot frame. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440: "gift, together."; 768: one line; 390: "gift, together." (shots/*-top.png). |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | poolday.css: hero uses padding and content height; no vh units anywhere. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | No entrance animation; tag and copy are static HTML at first paint (1440-top.png captured at load). |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Bricolage Grotesque: display, UI, body, tabular amounts. Lora Italic: only friends' own notes on the tag. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | After revision: open+active hero (tag) → dense three-step track → quiet narrow scope column → short footer action (1440.png). Active moved into the hero by design; recorded in Structural revision. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | shots/768.png: single-column hero, vertical step track with minis beside text, full-width tag. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Marigold only on primary buttons, ribbon fill and the still-needed figure (and focus rings). |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Only the three pool steps are numbered (start → add → see what's left). |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The signed gift tag with ribbon, sign-here line and practice-pool mode is specific to Poolday's start/add/still-needed loop. |
| TT-10 | The signature idea still works if the palette changes. | pass | The idea is the card friends sign plus a still-needed figure; it is carried by structure and copy, not by plum/marigold. |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: snag (peach band, pill search, listing shelves), Juno (photo hero, chat overlays) and Mercury (landscape, centred statement) — none of their copy, imagery, layout devices or numbers appear; only principles transferred. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | poolday.css: button/link/mode hover colours are inside `@media (hover: hover) and (pointer: fine)`; nav link hover is a colour change only, and also has a focus ring. |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggered sequences; only one new signature row animates. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Structural revision → Removal pass and Hypothesis: sig-in, ribbon fill, button press, smooth scroll. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | New signature row uses translateY 6px→0 only; no opacity on text (keyframes sig-in). |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | pass | 390: figures restacked with still-needed on its own row, notes under names, form fields stacked, full-width button (shots/390.png, flow-390-own.png). |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | viewport-fit=cover; gutter uses env(safe-area-inset-left/right); header top and footer bottom pad with env(). No fixed elements. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | Add, reset, make-tag, validation and copy results write to role=status aria-live=polite elements (poolday.js `say`, copy status). |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None. Friends' notes sit inside the labelled made-up example. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All amounts are inside example tags labelled "made up" or the visitor's own input; no metrics. |
| HP-03 | Illustrative interfaces say so on the page. | pass | Tag foot "Example pool… made up"; practice pool foot "only in this tab, no money moves"; how-section note on poolday.example. |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | pass | "Start a practice pool" switches the tag to start mode and focuses "Who's it for?"; submitting produces the tag, message and split (flow script output, flow-1440-own.png). |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | pass | All six shots and the state captures were opened; verify-record checks the PNG widths. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | See Structural revision: builder section merged into the hero tag; before shots-v1/1440.png, after shots/1440.png, rescored. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below lists each element and its job; the empty dashed output box was removed. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Rendered, checker clean (64/64), no unverified rows; status DONE. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Three equal adjective cards | none found | The step row is a numbered verb sequence on one rule, with different mini artifacts (tag, chat message, tag). |
| Every section has same width and padding | none found | Paddings differ (checker LY-05 pass); scope is a 46rem column, hero and how are full width. |
| Scaled-down desktop on mobile (v1) | Warn (v1) | In v1 at 390 the first screen showed no part of the tag and the CTA jumped to a separate form; fixed by the structural revision and phone reordering (390-top.png now shows the mode switch and tag top). |
| Small tracked-caps label above every heading | none found | Only "FOR" on the tag uses caps; it names a field, not a section. |
| Cream ground with a serif display | none found | Plum hero, sans H1 (checker CO-05 pass); serif italic confined to notes. |
| Control without destination/result | none found | Every control operated in the flow script; anchors resolve (AX-10 pass). |

## Structural revision
- Weakest explanation or most template-like decision: v1 had two disconnected demos. The primary action jumped to a generic six-field form at the bottom whose output pane was an empty dashed box, so "start a pool" and "friends add" looked like different products, and on phones the first screen showed no tag at all.
- Change made (structure, not styling): Removed the separate "Start a practice pool" section. The hero tag now has two modes on one object: "Add to Maya's gift" (example) and "Start a practice pool" (the tag's face becomes the start form). Making the tag turns it into the visitor's own pool, where they play friends adding to it, with the organizer readout (message to send, copy, even-split helper) directly below. Every "Start a practice pool" link now opens that mode and focuses the first field. On phones the hero reorders to promise → action → tag → scope note. Page went from 5 to 4 sections.
- Before: shots-v1/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Fit 9, Identity 7, Originality 7, Composition 8, Proof 8 (B was 8/7/7/7/8 before code). A 10 would need real product evidence (an actual pooled gift), a decided answer on how money moves, and a hero left column that does more than hold copy at 1440 (it leaves empty plum below the note).
- Removal pass (each decorative element → its job, or "removed"): tag string and punched hole → identify the artifact as a gift tag (brand character, product meaning); clipped tag corners → same; -1.2° tilt → reads as a physical object on desktop (removed on phones); dashed rule above the sign line → marks "sign here" (product meaning); ribbon → state (share collected); marigold highlight on still-needed → state; numbered circles and connecting rule → real sequence; chat-bubble radius on the message → shows it is a group-chat message; hero-note top rule → separates the qualification from the actions (hierarchy); v1 dashed empty-output box → removed with the builder section. Motion: sig-in (new signature, translateY 6px→0, 220ms, cubic-bezier(.2,.7,.2,1), trigger add submit, fallback immediate); ribbon fill (scaleX, 280ms, same easing, trigger any total change, fallback immediate); button press translateY 1px 150ms; smooth anchor scroll. All removed under prefers-reduced-motion with states intact (MO-01 pass).

## Remaining weaknesses
- What a buyer still cannot judge: how money is actually collected, held and paid out, fees, privacy of amounts, and whether people want this; the page states these are undecided. There is no real sign-up destination, so the conversion is a local practice pool only. The share link is a reserved example address.
- What was not verified: Screen-reader output was not tested with an actual screen reader (only role=status regions and labels by checker/code); the Copy button's clipboard path was exercised only in headless Chromium over http; Safari/Firefox rendering of the variable fonts was not checked; Impeccable detect could not run (not installed, network blocked).

## Status
DONE
