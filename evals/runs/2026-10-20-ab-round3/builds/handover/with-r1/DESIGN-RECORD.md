# DESIGN-RECORD

Page: `index.html` (opens from disk; checked from disk). Mode: Build (redesign of most of the page). Skill: startup-landing-design 0.4. Date: 2026-10-20.

## Product interpretation
- Audience, category, business model, brand constraints: Restaurant managers (read on a phone between services) and the owner who pays (reads later on a laptop). Category: a shared shift logbook / handover book. Self-serve trial at https://app.shiftnote.example/signup (works today). Keep the Shiftnote name, the logo mark (logo.svg) and the two brand colours, indigo #3B3FD9 and coral #FF7A59.
- Promise (who / what changes / how): Restaurant managers handing over between shifts / nothing from the close is lost by the open / one note written on a phone at close, read by whoever opens, with every item keeping an owner until it is handled.
- Current alternative, including doing nothing: the staff group chat (WhatsApp or texts), a paper manager's log in the office, or nothing (the closer tells whoever they happen to see). Doing nothing is probably the most common.
- The one advantage only this product has: an entry stays open with a named owner until someone marks it handled, and the owner can read the whole week from anywhere; a chat scrolls away and a paper book stays in the office. (Inference from the brief's description; not verified against the product.)
- Category frame (existing, subcategory or new) and what it costs to teach: existing, "a shift logbook for restaurant managers"; restaurant people already know the manager's log, so it costs one noun in the subhead.
- Best-fit customer, and who it is not for: best fit is an independent restaurant or small group with two or more managers who close and open on different days. Not for a single owner-operator who works every shift, and not a scheduler, POS or inventory tool (said on the page).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no interviews or tickets. The copy uses the trade's own vocabulary instead ("86", "called out", "walk-in", "the board"), marked here as the writer's choice, not quoted users.
- Biggest reason not to click, and the line that answers it: "another app my managers won't use / a sales process". Line beside the button: "Opens the signup page at app.shiftnote.example. No sales call; you set it up yourself." The sample note shows that writing an entry is a text-message-sized job.
- Conversion action and destination: "Start a free trial" → https://app.shiftnote.example/signup (the brief says trials start there and it works today). Same label in the header, hero, closing block and footer.
- Visitor doubt 1 → artifact: "Will the closing manager actually write in it?" → the composer in step 1 (five tag chips, one text field, Add) with a local result; the hero note shows how short real entries are.
- Visitor doubt 2 → artifact: "Will it just become another chat that scrolls away?" → the hero note's open/handled states with owner and time (operable: Mark handled / Undo), and the owner's week view where "nobody yet · Open 2 days" surfaces.
- Visitor doubt 3 → artifact: "Is this another system to run, and do I have to talk to sales?" → the "What stays out" box (schedules, POS, inventory, payroll stay where they are) and the line beside the button naming the self-serve signup page.

## Interview log
- Questions asked, each with the recommended default you offered: nobody answers during this task, so none were sent. Questions I would have asked, with the defaults used: (1) Is the trial free and does it need a card? Default: say "free trial", say nothing about a card. (2) What does it cost after the trial? Default: no price on the page; cost is disclosed on the signup page, which the client must confirm. (3) Is there a pricing, privacy or terms page? Default: none linked, because none exists in the folder. (4) Where will the site be hosted (for the share-card URL)? Default: https://www.shiftnote.example/share.png. (5) Do line staff need accounts? Default: not claimed.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the trial is free (ST-01 passes on that word; remove "free" if it is not); the signup page states the price; share.png will be hosted at the og:image URL; the product has the states the samples show (open with an owner, handled with a name and time, a week view for the owner).

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Marble (workflow-theater, 2026-10-19): each back-of-house job gets its own concrete artifact (invoice, PO checklist, prep sheet); on phones the tab set unrolls into stacked sections. Limit: scroll-driven tab changes fought clicks, pale grey secondary copy, a broken logo in the trust row, 16,000px long. | Give every claim its own artifact and recompose for phones by stacking, not shrinking. | The isometric kitchen illustration, the tab panel, the "Trusted by leading restaurant groups" logo row, the orange single-accent word in the headline. |
| Brand composition | Granola (workflow-theater, 2026-10-20): one named sample artifact (a specific meeting note) carried through every workflow stage; the objection-killer sits in the subhead; a serif display holds the brand while product UI stays in a plain sans. Limit: the hero demo kept typing under reduced motion and the 86px serif h1 ran four lines. | Carry one named note (Priya's Tuesday close) through write, read and the owner's week, and keep product UI in the system sans so the serif headline never competes with it. | The lime and charcoal brand bands, the typing note mock, the collage art panels, the download-pill hero, the 86px headline. |
| Counterexample | Attio (workflow-theater, 2026-10-20): a live-typing CRM workspace in a macOS frame under a one-line category claim; at 390 the workspace frame is cropped at the right edge and the rail's tables run off-screen. | A dense desktop window is the wrong artifact when the main reader is on a phone between services; the artifact must be phone-shaped first. | Constraint retained: no browser or phone chrome around the artifact, nothing that types by itself, no scroll-driven step rail. |

Departures from the workflow-theater recipe: the H1 scale is clamp(2.375rem, 1.55rem + 3.4vw, 4.25rem) (38–68px) instead of the recipe's 37–88px, because the headline is nine words and sits beside the artifact; sections are four plus the footer, not eight; display face is a serif stack (Charter) rather than the recipe's grotesks, with the reason under Hypothesis; the recipe's "cost" section is reduced to the free-trial line because no price was supplied.

## Hypothesis
- Archetype and why: Workflow theater. The product's value is a sequence (close writes → open reads → owner reads the week) around one work artifact, the note, whose state (open with an owner, handled with a name and time) is the product's whole argument.
- Type roles, faces and why they fit this product: Display: Charter / Bitstream Charter / Iowan Old Style / Georgia (serif) for the headline, section heads and the note titles, because the manager's log and the printed menu are the restaurant's own paper and the voice is the manager's, not a SaaS vendor's. Body: the system sans stack, because the page loads from disk with no web fonts and the product UI should look like the phone it runs on. Mono (ui-monospace stack) for times, dates and tags, the way kitchen chits and clocks are printed. Three faces, each with a role; no Inter or other everywhere-face on the H1.
- Composition and grid: 1200px page width. Hero: copy column (max 40rem) beside a 440px note; the honesty paragraph sits under the copy on desktop and under the note on phones. Steps: 5/12 explanation beside 7/12 artifact, three rows; the artifact alternates wide (composer, week table) and narrow (opening view). Scope: 7/12 list beside 5/12 box. Closing block: single 40rem column, left-aligned. Everything stacks to one column under 960px.
- Ground, colour and material, and why this ground: white ground, because the artifact is a note and white is the note's own colour; fine 1px rules and a 1.5px ink border with a dashed tear line on the note, composer, opening view and week view, so the product surfaces read as chits. Coral is used only as the "open" state dot and never for text (it fails contrast on white); indigo is the action colour and the "handled" state. No shadows, gradients, glows or textures.
- Signature artifact and its local behaviour: Priya's Tuesday close note as Sam reads it on Wednesday morning: five entries (86, Repair, Staff, Cash, Guest), two open with an owner. Pressing "Mark handled" swaps the state text to "Handled · Sam, <time>", colours the dot indigo, turns the button into "Undo" and announces the change in a polite live region; nothing is saved or sent and the caption says so beside the note.
- Section sequence, with one section deliberately omitted: hero (promise + note) → How it works (write / read / owner's week, each with its artifact) → What goes in it, what stays out → closing action → footer. Omitted on purpose: the proof slot (logos, testimonials, numbers), because the client has none; the template's invented ones were removed, and the hero and footer say so beside the samples.
- Primary interaction and motion purpose: pressing a state control on the note or adding an entry in the composer. Motion is a 160ms colour transition on buttons and chips only; text swaps immediately. No scroll reveals, no autoplay, nothing moves by itself.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure: one artifact state beside the promise (A) versus the whole three-step sequence filling the hero (B).
- Category default and anti-default this plan avoids: default for restaurant SaaS: centred gradient-text headline over a framed dashboard screenshot, a "trusted by" logo strip and three icon cards (the current site). Anti-default: cream paper ground, handwritten or script type, a clipboard or Polaroid illustration playing at nostalgia. The plan uses neither: white ground, a serif headline in the manager's voice, the note itself as HTML text, no frame, no illustration.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split hero: promise and action left, the Wednesday-morning note right with two open items you can mark handled; the sequence lives in the next section | "Will it scroll away like the chat?" (owner + state on every item) | 8 | 7 | 7 | 8 | 6 | Real entries from a real restaurant with permission, and a founder note with a name |
| B | The three steps (write, read, week) as a horizontal strip across the first screen, each with a small artifact, promise above | "Who writes it and who reads it?" | 6 | 7 | 7 | 5 | 5 | Three readable artifacts in one phone screen, which does not fit; it would shrink or carousel |

Score each dimension 0–10.

- Chosen variant and why: A. The main reader is on a phone, where one readable artifact beats three shrunken ones; the sequence is still told, one step at a time, in the section below.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not used: left-aligned split hero; the note is HTML text, not a framed image. |
| Hero visual is decoration | Block | The visual is the product's own artifact (a close note with real states and a working control). |
| Three equal adjective cards | Block | None; the old "Real-time sync / Smart checklists / Powerful analytics" cards were deleted. The five entry kinds are a list with examples, not cards. |
| Gradient blob / gradient text | Warn | Removed from the old page; no gradients remain. |
| Unsupported trust logos or testimonials | Block | Removed (the brief says none are customers); the page says it shows none. |
| Metrics without sources | Block | No metrics. Sample numbers (41°F, 2 portions, 2 days) sit inside artifacts captioned "Sample". |
| Cream ground with a serif display | Warn | Serif display kept with the reason above; ground is white (#FFFFFF), not cream. |
| Overused display face | Warn | Charter stack, not Inter; the old page used Inter. |
| Control without destination/result | Block | Every button does something locally or links to the real signup page; no href="#". |
| No reduced-motion rule | Block | Added; smooth scroll only under no-preference. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Headline four lines without an orphan, subhead and button in the first screen, note cut by the fold at the Guest entry, no clipping; full page shots/1440.png checked for section rhythm and the left-aligned closing block. |
| 768×1024 | shots/768-top.png | Single column: two-line headline, button beside its note, note stacked under the copy at 32rem; full page shots/768.png checked that steps stack and the week table fits without scrolling. |
| 390×844 | shots/390-top.png | Headline, subhead, full-width button and the note's first entry in the first screen; menu control present; full page shots/390.png and the state captures below. |

Artifact states, all opened: shots/1440-note-handled.png and shots/390-note-handled.png (walk-in item marked handled, Undo shown; the 390 element capture includes the sticky header at its top edge, a capture artefact), shots/1440-composer-added.png and shots/390-composer-added.png (Repair chip selected, entry added to "Tonight's note so far"), shots/1440-week.png and shots/390-week.png (table on desktop, stacked blocks on the phone), shots/1440-opening.png and shots/390-opening.png, shots/390-menu-open.png (menu open with links and the trial button; Escape closes it), shots/390-reduced-motion-top.png (identical to the normal load). Before-revision renders are in shots/before/.

## Checker result
- JSON: check.json
- Checker run: `node scripts/check-page.mjs index.html` from disk; status "ran", 0 failures, 0 warnings, 0 not run. Before the revision: check-before.json; `compare-checks.mjs` reports fixed PS-06, CP-02, PF-01, no regressions.
- Failures fixed: none reported as block failures. Warnings fixed between runs: PS-06 (ghost buttons and chips had a white fill and counted as eight filled actions; now transparent, so only the pressed chip and the trial button count), CP-02 (subhead was three sentences; now two, 39 words), PF-01 (footer logo now loading="lazy").
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` cannot run because the task forbids installing packages and no network is available; nothing is installed under /home/claude/r3/deps besides Playwright and axe.

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/390-top.png and shots/1440-top.png: "restaurant managers", "nothing from tonight's close gets lost", "write … on your phone at close; whoever opens reads it". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Subhead's first sentence: "Shiftnote is a shift logbook for restaurant managers"; the note beside it shows what a logbook entry is. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | shots/1440-top.png: the close note with tagged entries, times, owners and a working "Mark handled" control. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Product interpretation above: composer (doubt 1), note states + week view (doubt 2), "What stays out" + the line beside the button (doubt 3). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: the promise and the note as read. Step 1: writing. Step 2: the opener's first screen. Step 3: the owner's week. Scope: what goes in and what stays out. Closing: the action only. The template's testimonials, logos and feature cards were cut. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, no answers, assumptions listed. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A and B differ on structure; both defaults named and avoided (see the table above). |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table: Marble (explanation), Granola (composition), Attio (counterexample); departures listed under the table. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a shift logbook for restaurant managers" in the subhead; shots/390-top.png. |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Nothing from tonight's close gets lost by tomorrow's open" would be odd on WhatsApp's page and false of a paper log that stays in the office. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | H1: picture (a close, an open), falsifiable, odd on a chat app. "One note, written once, read by three people…": picture, falsifiable. "Close writes it before the lights go off" / "Open reads it before the first ticket" / "The owner reads the week, not the chat": picture, falsifiable. "Five kinds of entry cover most of what gets lost between shifts": falsifiable, not a chat app's line. "Try it on tonight's close": picture, odd elsewhere. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero uses trade vocabulary (86, called in, walk-in) in place of quoted users, marked as the writer's choice. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | shots/1440-top.png: "Opens the signup page at app.shiftnote.example. No sales call; you set it up yourself." beside the button; "free" in the label. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: nothing lost between close and open → one note, three readers → close writes it → open reads it → owner reads the week → five kinds of entry → what stays out → try it tonight. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "tomorrow's open." (1440, shots/1440-top.png), "gets lost by tomorrow's open." (768), "by tomorrow's open." (390). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css `.hero` has padding only; no vh/svh height anywhere. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No real proof was supplied; the page says so in the hero status line and the footer, and shows no quotes or logos. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Indigo: buttons, the pressed "Add" hover, the handled state and the logo. Coral: the open-state dot only (note, opening view, week view). Nothing else is coloured; shots/1440.png. |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The headline, the tags (86, Staff, Repair, Cash, Guest), the chit-style note and Priya's Tuesday close are specific to a restaurant handover book. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Marble: no isometric kitchen, no tabs, no logo row, no accent word. Granola: no lime/charcoal bands, no typing mock, no serif at 86px, no download pill; the shared "one named artifact through the stages" is a principle, not a treatment. Attio: no framed workspace, no step rail, no self-typing. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | styles.css: every `:hover` rule is inside `@media (hover: hover) and (pointer: fine)`; there are no staggers or entrance animations. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Contract 1: press a button or chip → background/border/colour change to confirm the press → immediate colour under reduced motion → 160ms cubic-bezier(.2,.7,.2,1). Contract 2: press Mark handled / Undo or Add → state text and list update, no animation → same text immediately → 0ms. Contract 3: anchor links → smooth scroll under no-preference only → instant jump under reduced motion. Nothing else animates (MO-04 reports 0 keyframes, 0 transitions running). |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/390-week.png: the week table becomes stacked blocks with labels kept; the note, composer and opening view are phone-width by design (shots/390-note-handled.png, shots/390-composer-added.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#note-status` and `#composer-status` are `role="status" aria-live="polite"`; the state captures logged their text ("Walk-in at 41°F marked handled by Sam at …", "Added a Repair entry to tonight's note: …"). |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | The template's six restaurant names and three quotes were removed; shots/1440.png shows none. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All numbers are inside artifacts captioned "Sample note", "Sample only", "Sample week". No metrics appear in prose. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Note figcaption, composer hint ("Sample only; nothing is sent"), week caption ("Sample week"); the hero status line sits under the copy, not in a separate section. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Start a free trial" → https://app.shiftnote.example/signup (the brief's working signup); Mark handled / Undo / chips / Add change the artifact; Menu toggles the nav; anchors exist (AX-08 pass). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All PNGs in Render evidence were opened in this session; widths 1440/768/390 confirmed by the render log and verify-record; note open and handled states captured at 1440 and 390. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: shots/before/390-top.png → shots/390-top.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing unverified; checker ran with 0 failures and 0 warnings. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not present: shots/1440-top.png shows a left-aligned split with HTML artifact. |
| Every section has same width and padding | Warn | Measure changes by task: hero 40rem copy beside 440px note; steps 5/12 beside 7/12; scope 7/12 beside a tinted box; closing a single 40rem column. Section padding is one token, which reads as rhythm rather than sameness because the inner grids differ. |
| Section numbers on content that is not a sequence | Warn | "STEP 1 · 10:52 PM" etc. label a real time sequence; they appear only in How it works. |
| Small tracked-caps label above every heading | Warn | Only the three step labels, which carry the step's time; TT-03 reports 0 of 3 h2s kicked. |
| Shadow is the only depth system | Warn | No shadows; rules, a 1.5px ink border and the dashed tear line do the grouping. |
| Fake liveness | Warn | None: no pulsing dots, no cursors, no counters. The state dots are static. |
| Scaled-down desktop on mobile | Block | shots/390-week.png: table recomposed into blocks; nothing is scaled. |

## Structural revision
- Weakest explanation or most template-like decision: on the phone, the main reader's device, the honesty paragraph sat between the button and the note, so the artifact started ~750px down and the first screen showed only the note's header; the week table scrolled sideways on phones (a shrunken desktop table behind a scroll region); the closing block was offset by a double `.wrap`.
- Change made (structure, not styling): the hero became a two-row grid, with the status paragraph placed under the copy on desktop and after the note on phones (DOM order: copy, note, status); the week table is recomposed on phones into one block per entry with the Owner and Status labels kept; the closing block is a single left-aligned column inside the page width. The subhead was cut to two sentences in the same pass.
- Before: shots/before/390-top.png
- After: shots/390-top.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 7, Originality 7, Composition 8, Proof 6 (overall 7/10). The first phone screen now shows headline, subhead, button and the note's first entry (shots/390-top.png). Proof stays at 6 because every artifact is a sample: a 10 needs real entries from a permitted customer and a named founder with a way to reach them.
- Removal pass (each decorative element → its job, or "removed"): gradient blob → removed; gradient headline text → removed; pill badge "Now with smart checklists" → removed; the empty grey mockup window → removed (replaced by the note); icon tiles on feature cards → removed; card shadows and hover lifts → removed; gradient avatars → removed; dashed tear line under each artifact's header → marks the surface as a chit (brand material), kept; 1.5px ink border on artifacts → separates product surfaces from page copy, kept; state dots (coral/indigo/grey) → carry the open/handled/info state, kept; the tinted panel behind captions and the "What stays out" box → groups qualifications with the artifact they qualify, kept; step labels in mono → carry the time of each step, kept; the rounded pill chips → distinguish a selectable kind from the square tags that show a chosen kind, kept.

## Remaining weaknesses
- What a buyer still cannot judge: whether real managers write in it (no customer or usage evidence exists yet), the price after the trial (not supplied; the page relies on the signup page to show it), whether the product's real screens match the sample states shown (open with owner, handled with name and time, a week view), and who is behind the company (no founder names or contact were supplied). Links the client must supply or confirm: a pricing or plans page, privacy and terms pages, the hosted share image at https://www.shiftnote.example/share.png, and whether the trial is free and card-free.
- What was not verified: the share card and og:image can only be checked on a public URL; rendering used Linux fallbacks (Bitstream Charter, DejaVu Sans, DejaVu Sans Mono), so the exact look of the system stacks on macOS, Windows and phones was not seen; the signup URL's content was not visited (no network). Impeccable detect was not run (no install allowed).

## Status
DONE
