# DESIGN-RECORD

Copy this file next to the page as `DESIGN-RECORD.md` and replace every prompt with a decision. Keep answers to a line or two and link logs instead of pasting them. Write `unknown` rather than leaving a field empty, and never present an assumption as observed evidence. `node scripts/verify-record.mjs <page-dir>` checks the record: it fails on a `- Label:` line with nothing after it, an empty cell in the decision tables, an unanswered checklist row, an unfinished marker, a missing or wrong-width screenshot, or a status line the evidence does not support. Exit 0 means the record is complete and honest; only `OK DONE` means the page was also rendered and checked.

## Product interpretation
- Audience, category, business model, brand constraints: Adults returning to the piano after years away (primary); their teachers (secondary, undecided by client). Consumer practice app, pre-launch, beta waitlist only. No brand assets supplied beyond the name Halfstep; tone must be encouraging, not exam-like. No results, endorsements or accuracy numbers exist.
- Promise (who / what changes / how): Adults coming back to the piano / stop replaying the whole piece and know which bars to practise and how slowly / record one run-through on a phone and Halfstep circles the bars and writes a starting tempo beside each.
- Conversion action and destination: "Join the beta". No backend exists, so the button opens the visitor's email app with a pre-written request (role chosen on the page) to a stand-in address `beta@halfstep.example` that the client must replace.
- Visitor doubt 1 → artifact: "What would it actually tell me from one recording?" → the hero sample take: 16 bars of a public-domain minuet with pencil circles on the bars to practise, each bar operable.
- Visitor doubt 2 → artifact: "How slowly, and how do I get back up to speed?" → the tempo-step ladder in the plan panel, with a button that plays the selected bars at that tempo in the browser (Web Audio, no upload).
- Visitor doubt 3 → artifact: "Will it make me feel graded, like an exam?" → the panel's own wording (steady bars are left unmarked and say "nothing to practise here") plus the "pencil, not red pen" section showing the exact note the sample take produces.

## Interview log
- Questions asked, each with the recommended default you offered: Running unattended, client unavailable, so no questions were sent. The questions that would have changed the page, with my default: (1) Learners or teachers first? Default: returning adult learners; teachers get one option in the beta form. (2) Where should beta requests go? Default: a mailto to a stand-in address the client replaces. (3) Does the app show any overall score? Default: no score; it shows bars and tempos only. (4) Which piece for the example? Default: Minuet in G, BWV Anh. 114 (public domain, a common return-to-piano piece). (5) British or American spelling? Default: British, matching the brief's "practise".
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: Page speaks to returning learners; the beta form asks "I'm coming back to the piano / I teach adults who are" so sign-ups show the split. Sample analysis is written by me and labelled illustrative beside the sheet. "No overall score" is stated as product behaviour; client must confirm. Beta address is a stand-in.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Firecrawl (desktop audit, 2026-10-19): the operation field with its modes is the entrance and the output preview follows immediately; clicking Scrape changed the preview. Limit: its benchmark claims were not validated and microtext is pale. | Show the input and its output before any feature list; the first click should already produce a result. | Centred headline, mode tabs inside a field, developer playground, orange emphasis, benchmark language. |
| Brand composition | Imperfect (desktop and phone audit, 2026-10-19): forgiving emotional headline with the literal category beside it; one tactile illustration system (torn paper, cut-out athletes) carries the brand while product views stay small. Limit: the core coaching interaction is never shown at full size; scroll-entrance cards are empty until triggered. | Let one hand-made mark system carry the encouraging tone, here a teacher's pencil on a score, and put the plain category right next to the warm promise. | Torn-paper collage, cut-out figures, the orange line motif, their headline wording, scroll-entrance card animation. |
| Counterexample | Cyclon (desktop audit, 2026-10-18/19): a centred waitlist statement, email form and a phone render; no product demonstration on the homepage. Attractive because it is quick to build for a pre-launch product. | Inappropriate here: a returning player cannot judge "which bars, how slowly" from a phone render. Constraint kept: one clear action while collecting interest. | Phone render as the only anchor, centred bold statement, backing badge under the form. |

## Hypothesis
- Archetype and why: Functional entrance. Halfstep is a single input/output product (one run-through in, circled bars and tempos out) and the brief asks for a try-it example without upload; the recipe's "prefilled safe example with output" is exactly that.
- Type roles, faces and why they fit this product: Display: Lora (OFL, bundled) at 500, for the headline and section statements; its calligraphic warmth reads as a printed music edition, not an exam form. Annotation: Lora Italic for the pencil notes on the score (tempo marks, "steady"), the teacher's-hand voice. Text and data: Inter subset (OFL) 400/500/600 with tabular figures for tempos and bar numbers. Inter is a body face here, not the display.
- Composition and grid: 1180px max, 12 columns. Hero: headline 7 cols and subhead + action 5 cols on one row; below it the sample sheet (8 cols, two systems of 8 bars) beside the plan panel (4 cols). At 768 the panel drops under the sheet; at 390 the sheet re-flows to four systems of four bars, like a printed page.
- Ground, colour and material, and why this ground: A pale sage-grey room ground (#F2F3EE) with a white paper sheet for the score; ink #1E2320. One accent, pencil vermilion #B23A15, used only for circles, selected state and the primary action. The ground is where the product is used: a music stand under lamp light, the score being the thing written on. Not cream, not a red "wrong note" colour.
- Signature artifact and its local behaviour: The sample take: 16 bars drawn as simplified melody (note heads on a staff), with hand-drawn pencil circles around bars 5–7, 11 and 14–15. Each bar or circled group is a button; selecting one updates the plan panel (what was noticed, tempo steps, steady-bar reassurance). Tempo steps are buttons; "Hear bars 5–7 at ♩ = 66" synthesises the melody locally and lights each note as it sounds. Labelled "Illustrative sample" beside the sheet.
- Section sequence, with one section deliberately omitted: Hero with sample take (open + active) → An evening's practice, four real steps (dense) → Pencil, not red pen: the tone argument with the sample's exact note (quiet) → Join the beta on ink ground (active) → footer (short). Omitted: a teachers section and any pricing/FAQ/testimonial block; teachers get one choice in the beta form.
- Primary interaction and motion purpose: Choosing a circled passage and hearing it slower. Motion is limited to state: the selected circle darkens (180ms opacity), notes light in time with the audio (colour change, no movement), button press states (150ms). Copy is never animated.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure: score-first wide sheet under the promise vs a split with a phone-framed practice screen.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Two-line promise and action on one row; below, the full sample score (two systems of 8 bars) with pencil circles, beside the plan panel with tempo steps and a play button. | 1 and 2 directly in the first screen; 3 through the panel's wording. | 8 | 8 | 7 | 7 | 8 | A real recording from the product and a teacher-written note; the score must stay legible at 390 without shrinking. |
| B | Promise left (6 cols), phone frame right showing a "Today" list: "Bars 5–7 at 66, bars 14–15 at 60". | 1 partly (a list, not the score); 2 as text; 3 not answered. | 6 | 5 | 4 | 6 | 5 | The phone frame would need to be operable and show the score; it shrinks badly on phones. |

Score each dimension 0–10.

- Chosen variant and why: A. A piece is a horizontal sequence of bars, so a wide score is the product's own shape; the circles are the output, and the visitor can operate it in the first screen. B hides the score behind device chrome and repeats Cyclon's phone-render problem.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Cream ground with a serif display, chosen by default | warn | Ground changed to a sage-grey room tone with white paper, not cream. The serif stays: Lora reads as a music edition and supports the encouraging voice; recorded here. |
| Section numbers on content that is not a sequence | warn | Numbers only on the four practice steps, which are a real order. |
| Small tracked-caps label above every heading | warn | No eyebrow labels planned; the sample's caption is a real data line, not a kicker. |
| Unsupported trust logos or testimonials | block | None planned; no proof section at all. |
| Metrics without sources | block | Only numbers are tempos, bar numbers and timings inside the sample, which is labelled illustrative beside the sheet. |
| Control without destination/result | block | Every bar, step and play button produces a local result; "Join the beta" opens a pre-written email; stand-in address listed for the client. |
| No reduced-motion rule | block | prefers-reduced-motion rule planned: transitions drop to 0; note lighting still changes state. |
| Only generic actions | warn | Action reads "Join the beta" (not "Join waitlist"); the sample's action is "Hear bars 5–7 at ♩ = 66". |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened; not blank, 1440 wide. Headline (3 lines, last line "speed that feels easy."), action and the whole sample score with plan panel fit the first screen. Full page shots/1440.png checked for pacing: open hero → white stair section → quiet pencil section → ink beta → short footer. States at 1440 in shots/states/1440-1…8 (default, bars 14–15, tempo 74, playing with a lit note, finished, steady bar 3, bar 11, beta teacher choice): no clipped labels or overflow. |
| 768×1024 | shots/768-top.png | Opened; 768 wide. Headline on two lines, lede full width with action below, score keeps 8 bars per system at about 85px each, plan panel re-composed into two columns (text left, tempo steps right). Full page shots/768.png: stair becomes a vertical indented list, slip beside copy, no cramped three-column leftovers. |
| 390×844 | shots/390-top.png | Opened; 390 wide. Headline in 4 lines (last "that feels easy."), lede and "Join the beta" inside the first screen; header fits on one row. Full page shots/390.png: score re-flows into four systems of four bars, circles stay within each system, stair is a two-column list. States in shots/states/390-1…8 checked, including playing and steady-bar states. |

## Checker result
- JSON: check.json
- Failures fixed: CO-01 (beta button used dark text on a lighter orange: now white on the pencil accent, same as the hero); LY-02 (horizontal scroll at 320px from the 12-column grid gaps and the header row: grids collapse to one column under 700px and the header may wrap under 360px). PF-03 and PF-04 could not run on file://, so the final check was run over a local HTTP server (http://127.0.0.1:8765/index.html): 64 passed, 0 failures, 0 warnings, 0 not run.
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error code ENOTFOUND" (not installed; no network). web-design-guidelines: not run: not installed.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 1440-top/390-top: "Practise the bars that need it…" plus lede "for adults coming back to the piano… circles the bars… slower starting tempo". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Headline names the outcome; the circled score beside it shows the output at 1440 and 768. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the sample take with circles and tempos, operable; labelled illustrative. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → circled score; 2 → tempo steps + play button + tempo stair; 3 → steady-bar wording and the pencil section's note. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: output for one take. Stair: pacing over an evening. Pencil: tone and the full note. Beta: role choice and what the button does. The old four-step list that repeated the lede was replaced. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists five questions with defaults; run unattended. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Variants A/B on the structure axis, scored before code. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | Firecrawl (product explanation), Imperfect (brand composition), Cyclon (counterexample). |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Functional entrance recipe: H1 clamp ~66px, body 17px, 1180 width, quiet base and one accent. Departures: serif display (Lora) instead of a compact sans, for the music-edition voice; a split hero (score beside panel) instead of a centred 760px surface, because the score is wide; no error state in the sample (no input is accepted), replaced by a steady-bar state. |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | pass | Headline is left-aligned with the lede on the right; no screenshot frame. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "speed that feels easy." (1440), "it, at a speed that feels easy." (768), "that feels easy." (390). |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css: hero height comes from content and padding; no vh units. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | No entrance animation; score and copy are static HTML at first paint. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Lora: display and pencil annotations (italic). Inter: text and tabular data. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | 1440.png: open hero with active score → structured stair on white → quiet pencil copy → dark beta → short footer. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | 768.png: panel becomes two columns, stair becomes a vertical list, hero stacks. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Pencil vermilion is used for circles and tempo marks (the product's output), selected states, the illustrative labels and the primary button. |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | No section numbers; the stair uses clock times and tempos. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The page is built from the sample score, pencil circles and tempo stair specific to Halfstep's output. |
| TT-10 | The signature idea still works if the palette changes. | pass | Circles, tempo marks and the stair are shapes and positions; dashed vs solid circles carry "light" vs "practise". |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass below: no Firecrawl field or tabs, no Imperfect collage, headline wording or orange line, no Cyclon phone render. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | All :hover rules are inside @media (hover: hover) and (pointer: fine). |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggers; note lighting follows the music's own timing and Stop is always available. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Hypothesis → Primary interaction and in Remaining weaknesses → motion contract line. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | No text fades; panel text swaps immediately. Only the selection wash and circle stroke change opacity. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | 390.png: score re-flows to four systems of four bars at about 80px per bar; panel stacks below. |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | viewport-fit=cover; gutters use env(safe-area-inset-left/right); header top and footer bottom use safe-area insets. No fixed elements. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | #status and #beta-status are role=status aria-live=polite; texts confirmed in the states run. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Tempos, timings and clock times sit inside the sample, the stair and the slip, each labelled illustrative beside it. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Illustrative sample, not a real recording or analysis" in the score caption; "Illustrative evening…" in the stair intro; "Illustrative, written for this page." under the slip. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Bars, tempo steps and play produce local results (states run); "Join the beta" opens a pre-written email and announces it; nav and footer anchors exist. The address beta@halfstep.example is a stand-in the client must replace (listed below). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, and the signature artifact was captured in each of its states. | pass | All six renders opened; artifact states captured at 1440 and 390 in shots/states/ (default, passage, tempo, playing, finished, steady bar, light circle, beta choice). |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Four-step grid replaced by the tempo stair; before shots/before/1440.png, after shots/1440.png; rescored below. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Render, checker and states ran; nothing unverified in the checklist. |
<!-- checklist:end -->

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Section numbers on content that is not a sequence (before revision: 1–4 on the steps grid) | warn | The steps were a real sequence, but the 2×2 numbered grid was the most template-like block; replaced by the tempo stair with clock times. |
| Cream ground with a serif display | warn | Ground is sage-grey #F2F3EE (checker CO-05 passed); Lora kept for the edition voice, reason recorded in Hypothesis. |
| Every section has same width and padding | warn | Not matched: paddings 40/72, 120/112, 104/96, 88/92, and the stair breaks the column grid. |
| Scaled-down desktop on mobile | block | Not matched: 390.png shows the score re-flowed to four systems and the panel stacked. |
| Centred claim over browser frame | block | Not matched: left headline, score is the product output. |

## Structural revision
- Weakest explanation or most template-like decision: The "An evening at the piano" section was a 2×2 grid of numbered steps whose text repeated the hero lede ("play it once… circles… slower tempo"); it looked like any app's how-it-works block and added no new information.
- Change made (structure, not styling): Replaced the grid with a tempo stair: five treads that rise across the section (desktop) or step in as a list (tablet, phone), each a moment in one evening on bars 5–7 with its tempo (one take → 3 circles → 66 → 78 → 90, stop for tonight). The section now carries new information (pacing over time, going back down is fine) and ties the product name to its layout. Also re-composed the tablet hero (lede full width, action below) and moved the slip's tempo marks into unbreakable runs.
- Before: shots/before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Rendered before revision: Fit 8, Identity 7, Originality 6, Composition 6, Proof 7. After: Fit 8, Identity 8, Originality 8, Composition 7, Proof 8 (self-comparison, not a calibrated metric). A 10 needs a real recording and real output from the product, a notated left hand, and a stronger hero bottom edge at 1440, where the panel runs longer than the sheet.
- Removal pass (each decorative element → its job, or "removed"): pencil circles → the product's output; dashed circle → "light, optional" state; selection wash → selected state; crotchet marks → tempo data; sheet hairline ring → separates the paper score (the product object) from the room ground; tread rules and risers → the sequence and its rise; slip box → shows the note as a single object; brand mark (white key with adjacent black key) → identity, a literal half step; footer rule → groups the legal note. Removed: the italic 1–4 step numerals (replaced by times), the separate lighter orange on the beta button (one accent only).

## Remaining weaknesses
- What a buyer still cannot judge: Whether real analysis matches the sample (the whole take and its findings are written for the page); how recording works on the phone; price and launch timing. Client must supply: the real beta address to replace beta@halfstep.example (or a form endpoint), and confirm that the app shows no overall score. Audience is still learner-first; the beta choice will show the learner/teacher split.
- What was not verified: Audio playback was triggered in headless Chromium (note lighting confirmed) but not listened to; screen-reader output was not tested by ear; real iOS Safari safe areas not tested. Motion contracts: selection wash and circle stroke, trigger click, 180ms opacity, cubic-bezier(.2,.7,.2,1), fallback immediate state; button and tempo-step hover/press, 150ms colour; note lighting, trigger Play, colour change timed to the audio, fallback lights without sound; all set to 0ms under reduced motion.

## Status
DONE
