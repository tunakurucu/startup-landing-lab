# DESIGN-RECORD

Copy this file next to the page as `DESIGN-RECORD.md` and replace every prompt with a decision. Keep answers to a line or two and link logs instead of pasting them. Write `unknown` rather than leaving a field empty, and never present an assumption as observed evidence. `node scripts/verify-record.mjs <page-dir>` checks the record: it fails on a `- Label:` line with nothing after it, an empty cell in the decision tables, an unanswered checklist row, an unfinished marker, a missing or wrong-width screenshot, or a status line the evidence does not support. Exit 0 means the record is complete and honest; only `OK DONE` means the page was also rendered and checked.

## Product interpretation
- Audience, category, business model, brand constraints: Node developers evaluating an open-source background-job queue (Drumbeat); free OSS package, no pricing; no brand assets, logos, testimonials, benchmarks, docs URL or npm name supplied; must not claim unmeasured throughput.
- Promise (who / what changes / how): Node developers / slow work (emails, exports, webhooks) leaves the request path and they can still say what happened to each job / Drumbeat queues the job and moves it through a small set of states (queued, running, waiting to retry, done, failed).
- Conversion action and destination: "Read the lifecycle docs" → in-page `#docs` lifecycle reference (state-by-state). No external docs URL or package name was supplied, so no install command or repo link is invented; maintainer swaps in the real docs URL at launch.
- Visitor doubt 1 → artifact: "What actually happens when my handler throws?" → the beat rail: one job stepped event by event through three scenarios, with the retry gaps drawn to scale.
- Visitor doubt 2 → artifact: "Does the job still block my request?" → the rail's separate request lane, which ends at an illustrative 4 ms while the job lane carries on.
- Visitor doubt 3 → artifact: "Is this marketing, or something I can reason about?" → the job ledger (same job ID on every attempt, error and next-run time) plus a lifecycle reference and a "what this page does not claim" section with no throughput numbers.

## Interview log
- Questions asked, each with the recommended default you offered: (1) Primary audience solo developers or platform teams? default: write for the individual developer who installs it, and give platform teams their own checklist in Limits. (2) Docs URL and npm package name? default: in-page lifecycle reference as the docs destination, no install line. (3) Any benchmark to cite? default: none, state that no throughput numbers are published.
- Answers, or "no answer; proceeded on defaults": no answer (client unavailable); proceeded on defaults.
- Assumptions that change the page: the trace is a labelled browser model of the lifecycle, not Drumbeat's API or log format; state names, 4-attempt limit and 2 s doubling backoff are illustrative; the conversion destination is in-page until real docs links exist.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Interfere (interfere.com, desktop-audit 2026-10-19): one incident example recurs from detection to source-linked fix beneath a spare hero; limit: workspace was not operable and the "never breaks" claim exceeds what a homepage can show | Follow one work item through its whole lifecycle so the page explains by continuity, not feature lists | Inbox/timeline workspace chrome, pink-blue halo, absolute reliability claim |
| Brand composition | Keyframe Labs (keyframelabs.com, desktop-mobile-audit 2026-10-19): hairline-ruled, mono-labelled grid on a light ground with real output framed beside the headline; limit: low-contrast mono labels, an evidence panel showing no video, capability list auto-advanced while scrolling | Signal developer-grade precision with rules, mono only for data, and a light ground instead of a dark theme | Condensed serif display, magenta frame, inline tag chips, avatar video, scroll-driven advancing |
| Counterexample | AgentPhone (agentphone.ai, desktop-mobile-audit 2026-10-19): a scripted call with running timer and captions sits under the headline and keeps moving under reduced motion | Attractive "product already running" moment, but for a queue it would fake live execution and take the reading pace away from an engineer | Trace advances only when the visitor presses a control, is labelled as a model and is static under reduced motion; no auto-playing timers, gradients or mascots |

## Hypothesis
- Archetype and why: Workflow theater: the brief asks to explain one job's state from enqueue through retry or failure, which is exactly "one work item moves through selectable states". Departures: no human owner (an attempt number and next-run time replace owner/next action); headline below the recipe's clamp because the condensed face reads larger; ledger borrows typographic-technical's rule of mono only for data.
- Type roles, faces and why they fit this product: Display = Drumbeat Display Cn (self-hosted, renamed subset of TeX Gyre Heros Cn Bold, GUST licence): compact condensed authority that leaves width for the wide rail. Text = system UI stack: native, zero-download, calm for long sentences. Data = Drumbeat Mono (renamed DejaVu Sans Mono subset) only for state names, job IDs and times that must align.
- Composition and grid: 12 columns, max 1240px. Hero: headline cols 1–7, lede and actions cols 8–12 bottom-aligned, then the rail across all 12. Ledger: narrow explanation (4) beside wide log (8). Reference: full-width state rows. Limits: two lists. Closing: one line plus actions.
- Ground, colour and material, and why this ground: light cool grey (#f2f3f5) with white artifact panels and 1px rules, no shadows. Docs are read in a browser beside an editor; a light ground keeps five state colours distinct and avoids the dark-neon category default. Colour belongs only to states (slate queued, blue running, amber waiting, green done, red failed); actions are ink.
- Signature artifact and its local behaviour: the beat rail: a 0–16 s time axis with a request lane and a job lane; attempts are blocks, retry waits are gaps that lengthen (2 s, 4 s) so backoff reads as a slowing beat. Visitor picks a scenario (succeeds first try / recovers on attempt 3 / runs out of attempts) and steps event by event; rail, now-readout, ledger and a status line update.
- Section sequence, with one section deliberately omitted: header → hero (promise + rail) → job ledger → lifecycle reference (#docs) → limits and before-you-install checklists → closing action → footer. Omitted: a "why Drumbeat" benefit-card grid and any logo or testimonial row.
- Primary interaction and motion purpose: scenario radios and Previous/Next event buttons; the playhead slides to the current event's time (200ms ease-out) to show where in time the job is; ledger row highlight follows. No entrance animation.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure: a current-state snapshot beside the promise (A) vs. a full-width timeline of the whole lifecycle under the promise (B).

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split: promise left, right column is one job card (job ID, state chip, attempt 2 of 4, next run, last error) with an advance button | "What state is my job in right now?" | 7 | 5 | 4 | 6 | 6 | History, not only the current snapshot; something that shows retries over time rather than a status card any queue dashboard has |
| B | Stacked: left-aligned promise and lede above a full-width beat rail with request and job lanes, scenario choice and event stepping | "What happens across retries, and is my request still waiting?" | 9 | 8 | 7 | 7 | 7 | Real Drumbeat output instead of a labelled model, and a rail that stays legible and readable at phone width |

Score each dimension 0–10.

- Chosen variant and why: B. The brief's subject is the path from enqueue to retry or failure; only a timeline shows the path, the growing backoff gaps and the request finishing early in one view. A's status card becomes the rail's now-readout.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Metrics without sources (rail times 4 ms, 2 s, 4 s; attempt limit) | Block | Revised: artifact carries a visible "Illustrative model" label naming its settings; footer repeats that timings are examples; no throughput figures anywhere. |
| Scaled-down desktop on mobile (16 s horizontal rail at 390px) | Block | Revised: below 720px the rail is replaced by a vertical beat list whose gaps grow with the wait, from the same data. |
| Three equal cards (limits could become three boxes) | Block | Revised: limits are a ruled list and two plain checklists, not cards. |
| Fake liveness (a pulsing "running" state is tempting) | Warn | Revised: running is a static blue block; nothing moves without a click. |
| Only generic actions | Warn | Revised: "Read the lifecycle docs" and "Read the job ledger". |
| Small tracked-caps label above every heading | Warn | Revised: no eyebrows; mono labels only inside the artifact where they name data. |
| Control without destination | Block | Revised: docs action goes to the in-page #docs reference; every nav and footer link is an in-page anchor or a local file. |

If nothing matched, write one row: `none found | — | —`.

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened top and full (shots/1440.png): hero headline, both actions and the whole rail above the fold; wait labels, flags and ledger readable; no clipping. Also opened the exhausts state: failed flag now sits left of attempt 4 inside the panel. |
| 768×1024 | shots/768-top.png | Opened top and full (shots/768.png): headline 2 lines, rail still horizontal with labels clear of blocks, readout wraps in a row, ledger full width under its intro, reference collapses to 3 columns with Check under each row. |
| 390×844 | shots/390-top.png | Opened top and full (shots/390.png): headline 3 lines, both actions full-width above the fold; horizontal rail replaced by the ledger with wait gaps drawn taller as backoff grows; reference rows stacked with Enters/Leaves/Check labels; no horizontal scroll. |

Each screenshot cell is a relative `.png` path, or `unavailable: "<decisive error line>"` with the full log linked in the next cell. Open every PNG before listing it.

## Checker result
- JSON: check.json
- Failures fixed: LY-04 (nav link box 8px from phone edge: removed negative nav margin); AX-04 (disabled Next event button could not take focus: now aria-disabled and focusable); PS-06 (step buttons counted as filled actions: made transparent; closing secondary now reuses "Read the job ledger"). PF-03/PF-04 did not run on file://, so the final run serves the folder at http://127.0.0.1:18931; result 64 passed, 0 failures, 0 warnings, 0 not run.
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>": Impeccable not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (not installed, no network). web-design-guidelines not run: not installed. Extra: a Playwright script operated the scenario radios and stepping at 1440 and 390 (status text, 10 ledger rows, 3 gaps, no console errors) and confirmed 0s transitions under reduced motion.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | Hero: "Get slow work out of the request. Know where it went." + lede naming Node developers, the queue and the states (shots/1440-top.png). |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Headline, lede and the rail with request and job lanes say "Node job queue that retries and shows state" in the first screen. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | Hero artifact is the operable lifecycle model (labelled illustrative), not decoration. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → rail scenarios; doubt 2 → request lane ending at 4 ms; doubt 3 → ledger, lifecycle reference and "What this page doesn't claim". |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Revision removed the separate ledger section that repeated the rail; each remaining section adds new information (states reference, limits, action). |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three questions with defaults; no answer, defaults applied and logged. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Variants A (state card) and B (full-width timeline) scored before code on the structure axis. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | Interfere (explanation), Keyframe Labs (composition), AgentPhone (counterexample) with not-borrowed treatments. |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Workflow-theater recipe; departures recorded in Hypothesis (no owner, smaller H1, ledger merged into the instrument). |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | n/a | Hero headline is left-aligned; no framed screenshot. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "Know where it went." (1440, 390) and "request. Know where it went." (768). |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero is sized by content (padding only); no 100vh in styles.css. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | No entrance animation; hero copy and prerendered trace are in the HTML before scripts run. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Display condensed (headings), system text (prose), mono (times, IDs, states) each with one job; see Hypothesis. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | Open hero → dense instrument and ledger → quiet white reference → quieter limits → short action band (shots/1440.png). |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | shots/768.png: rail stays horizontal and readable, ledger and reference recomposed to full width; no three-column leftovers. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Colour appears only on state chips, attempt blocks and wait lines; actions are ink. |
| TT-04 | Section numbers appear only on content that is a real sequence. | n/a | No section numbers; attempt numbers #1–#4 are a real sequence inside the trace. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The beat rail with growing backoff gaps, the request lane and job 0412's ledger are specific to this queue's lifecycle story. |
| TT-10 | The signature idea still works if the palette changes. | pass | The idea is time-to-scale spacing of attempts; it reads in greyscale because gaps, labels and state names carry the meaning. |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no copy, names, numbers, imagery, layout device or motion from Interfere, Keyframe Labs or AgentPhone; shared grammar only (light ground, sans headline). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | All :hover rules are inside @media (hover: hover) and (pointer: fine). |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggers on the page. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Contracts written under Structural revision → motion contracts line (playhead, highlights, button colour). |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | No text fades; only the playhead (decorative line) moves and backgrounds change colour. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | pass | At ≤720px the horizontal rail is replaced by the ledger with scaled wait gaps; controls stack full width (shots/390.png). |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | viewport-fit=cover with env(safe-area-inset-*) on .wrap padding and footer bottom padding; no fixed elements. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | #trace-status has role=status aria-live=polite and is rewritten on every scenario or step change. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | No logos, testimonials or quotes anywhere. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Every number (4 ms, 2/4/8 s, 4 attempts, times) is labelled illustrative on the artifact, in Limits and in the footer; no throughput figures. |
| HP-03 | Illustrative interfaces say so on the page. | pass | Artifact caption: "Illustrative model running in your browser · not Drumbeat itself" (shots/1440-top.png). |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | pass | "Read the lifecycle docs" goes to the in-page #docs reference; trace controls produce visible local results (verified by script). |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | pass | All six PNGs opened; widths 1440/768/390 confirmed by verify-record; none blank. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Ledger merged into the instrument and phone rail replaced; before shots/before/1440.png, after shots/1440.png; rescored below. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision; removed the playhead time tag, phone dot list and separate ledger band. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Status is DONE: render, checker and all checklist rows produced evidence; nothing unverified. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Scaled-down desktop on mobile | Block | Not present: 390 shot shows the ledger-as-rail, not a shrunk timeline. |
| Every section has same width and padding | Warn | Not present: hero, white reference band, limits and short close band differ in padding and ground. |
| Small tracked-caps label above every heading | Warn | Not present: no eyebrows. |
| Thick coloured stripe on one side of cards | Warn | Not present: current ledger row uses a neutral tint. |
| One sans, one weight everywhere | Warn | Not present: condensed bold display, 400/600 text, mono data. |
| Fake liveness | Warn | Not present: nothing moves without a click. |
| Cream ground with a serif display | Warn | Not present: cool grey ground, sans display. |
| Text collision in the artifact (found in first render, not a detector row) | Warn | Fixed: wait labels moved above blocks, playhead time tag moved into the readout, failed flag flips left near 16 s. |

## Structural revision
- Weakest explanation or most template-like decision: the ledger was a separate section below the hero, repeating the rail while sitting a scroll away from the controls that change it (a familiar "demo, then explain the demo" sequence), and the phone got a third rendering of the same data.
- Change made (structure, not styling): merged the ledger into the trace instrument (controls → rail → readout → ledger in one figure), removed the standalone ledger section, put the wait gaps into the ledger and made it the phone's rail (gap height grows with backoff), moved the playhead time into the readout. Page went from 5 to 4 sections.
- Before: shots/before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: B rescored fit 9, identity 8, originality 7, composition 8, proof 8 (was 9/8/7/7/7). Still short of 10: it models the lifecycle rather than showing Drumbeat's real API or output, and on phones the artifact starts below the first screen. Motion contracts: playhead: step or scenario change → slides to the current event time to show position in time → static at final position → 200ms transform cubic-bezier(.2,.7,.2,1); row highlight and scenario/button fills: selection → mark current item → immediate colour → 160ms background-color ease-out; all set to 0s under reduced motion.
- Removal pass (each decorative element → its job, or "removed"): wordmark mark (four bars with widening gaps) → brand: backoff as rhythm; white bordered instrument panel → groups everything the controls change; ink rule above ledger and lists → hierarchy start of a dense list; tinted state chips → state; open checkbox squares → marks a checklist to work through; mono transition chips → state paths; ink footer → separates provenance note from content; playhead time tag → removed (collided, duplicated); phone dot beat list → removed (third copy of the data); separate ledger band and border → removed.

## Remaining weaknesses
- What a buyer still cannot judge: Drumbeat's real API, install command, storage model, delivery guarantees and performance: none were supplied, so the page models the lifecycle and points to an in-page reference. Real docs, repository and npm links must replace #docs before launch.
- What was not verified: rendering on Safari/Firefox and on real phones (Chromium only); screen-reader announcement wording was checked in the DOM, not with a screen reader; behaviour of system-ui body text on platforms other than this Linux render.

## Status
DONE
