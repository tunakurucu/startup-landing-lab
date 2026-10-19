# DESIGN-RECORD — Ledgerlight

Page: `index.html` (+ `styles.css`, `app.js`, `fonts/`). Skill: startup-landing-design v0.3. Date: 2026-10-19.

## Product interpretation
- Audience, category, business model, brand constraints: Small legal teams (in-house legal ops or outside counsel; undecided) buying a contract-renewal tracker; B2B, sold via consultation; no existing brand, code, logo, customers, certification or savings data.
- Promise (who / what changes / how): Small legal teams / stop discovering auto-renewals after the notice window has closed and decide each renewal on time / one record per contract holding the owner, the notice deadline taken from the clause, the next decision and a review trail.
- Conversion action and destination: "Request a consultation" → in-page request composer (#consult) that prepares the request locally and states plainly that no inbox is connected yet, so nothing is sent.
- Visitor doubt 1 → artifact: "Will I actually see who owns a renewal and when notice is due?" → hero sample record showing owner, notice deadline, next decision and review trail for one fictional contract.
- Visitor doubt 2 → artifact: "Does it get the notice deadline right, not just the renewal date?" → notice-window ruler plus a local date checker that counts back from the visitor's own term end and notice period.
- Visitor doubt 3 → artifact: "Could we show later who decided what, and why?" → four-step lifecycle stepper in which the review trail grows entry by entry and the visitor picks the decision.

## Interview log
- Questions asked, each with the recommended default you offered: (1) Main buyer: in-house legal ops or outside counsel? Default: stay buyer-neutral ("small legal teams") and ask in the request composer. (2) Where should consultation requests go? Default: local composer with an explicit "not connected" notice until an endpoint or address exists. (3) Can the page say there is no certification yet? Default: do not claim one; say security questions are answered in the consultation. (4) Brand assets? Default: wordmark set in type, no logo invented.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults (client unavailable, run unattended).
- Assumptions that change the page: request composer cannot send; buyer type is captured as a field instead of chosen in copy; sample contract, people and dates are fictional and labelled; product scope limited to what the brief states (owner, notice deadline, next decision, review trail) with no invented features such as integrations or automatic notices.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Marble (joinmarble.ai), audited 2026-10-19: each tab swaps in its own concrete artifact (invoice → purchase-order checklist); on phones the tab set unrolls into stacked sections. Limit: scroll-driven tab changes compete with clicks; 16,376px page; greyed logo row. | Selecting a step must change the evidence, not just the caption; recompose the step set for phones rather than shrinking it. | Orange accent word in the headline, isometric illustration, "trusted by" logos, scroll-driven tab switching, 01–04 tab styling. |
| Brand composition | Sherpa (withsherpa.ai), audited 2026-10-19: calm ownership-focused copy over one large reviewable paper-like artifact; separates illustrative examples from verified outcomes. Limit: mockups resemble live integrations; many examples lengthen the page. | A calm voice plus one reviewable document that makes ownership inspectable, clearly labelled as a sample. | Warm ivory ground, centred statement, peelable orange corner, basecamp illustration, browser-like frame. |
| Counterexample | General Legal (general.legal), audited 2026-10-19: dark full-bleed photo of a "Master Services Agreement" on a desk sets a premium law-firm mood. Attractive for any legal product; wrong here because Ledgerlight is a tool, has no photography, and the mood costs legibility; its phone layout dropped the process section. | Constraint retained: the contract appears as structured data the buyer can read, and the explanation survives intact on phones. | Photographic hero, copy over image, two-path CTA panel, prices, expert headshots. |

## Hypothesis
- Archetype and why: Workflow theater — a renewal is a multi-step decision (clause found → owner → decision → notice) with an artifact (the record) that recurs through each state. Borrowing one piece of functional entrance: a local date checker, because the brief asks for a locally usable example.
- Type roles, faces and why they fit this product: Display = TeX Gyre Schola (Century Schoolbook design) bold, because the Century family is the face lawyers know from briefs and notices — the page reads as a document of record. Text/UI = TeX Gyre Heros (Helvetica design) for paragraphs, fields and dates with tabular figures. No mono: dates align with tabular numerals, so a third family has no job. Both GUST Font License, subset and self-hosted.
- Composition and grid: 12-column, max 1240px; hero splits 5 (promise) / 7 (record). Narrow explanation beside wide recurring record; later sections alternate wide (lifecycle) and narrow (checker, scope).
- Ground, colour and material, and why this ground: Cool grey-white paper (#F3F5F6) with white record sheets, square corners and 1px ledger rules — the material of a docket, not a marketing card. Ink #17212B. One action colour (deep teal #0B5C55) and one state colour (vermilion #B2361C) reserved for the notice deadline, the date that actually matters. Not cream: the product lives on an office screen beside Word documents.
- Signature artifact and its local behaviour: The renewal record with a notice-window ruler (today → review start → notice deadline → term end). The deadline sits before the renewal date and is the only vermilion mark on the page. Locally: step through the lifecycle, pick the decision, watch the trail grow; type your own dates to compute your notice deadline.
- Section sequence, with one section deliberately omitted: Hero record (open) → lifecycle stepper (dense/active) → date checker (active) → what we can and cannot show you yet (quiet) → consultation request (short). Omitted: a feature-card grid and any logo/testimonial strip — no proof exists and the record already explains the features.
- Primary interaction and motion purpose: Step selection in the lifecycle; the ruler's "today" marker slides to the step's date and the new trail entry moves up into place to show order. No motion is needed to read anything.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure — record-led split versus timeline-led full width.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split: promise and action left (5 cols); full sample renewal record right (owner, notice deadline, next decision, ruler, 3-entry trail) | Doubt 1 directly; doubt 3 partly via the trail excerpt | 8 | 6 | 6 | 7 | 8 | The record must be operable in place, not a static card repeated below. |
| B | Full-width notice-window ruler fills the hero under a one-line promise; owner and next decision pinned as callouts on the ruler | Doubt 2 directly (deadline precedes renewal) | 6 | 8 | 8 | 6 | 5 | Owner, decision and trail would need to be legible without hunting along the line; on phones the ruler must become a list. |

- Chosen variant and why: A — the brief names owner, notice deadline, next decision and review trail as what the buyer must see, and A shows all four on the first screen; B's ruler is kept inside A's record so its signature survives.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Control without destination/result (consultation with no endpoint) | Block | Composer prepares the request locally, announces the result in a status region and states that nothing is sent until an inbox is connected. |
| Metrics without sources (day counts, dates in the sample) | Block | Every date and day count belongs to a record labelled "Sample record · fictional contract"; the checker computes only from the visitor's own input. |
| Scaled-down desktop on mobile (record + ruler) | Block | At ≤640px the ruler becomes a vertical dated list and the stepper becomes a stack of steps with the selected one expanded. |
| No reduced-motion rule | Block | Planned `prefers-reduced-motion: reduce` block removes transitions; all states remain. |
| Cream ground with serif display | Warn | Ground is cool grey-white, not cream; serif display kept for the document-of-record reason above. |
| Section numbers on non-sequence | Warn | Numbers 1–4 appear only on the lifecycle steps, a real order. |
| Rounded card on every surface | Warn | Square corners and rules by design; radius only on buttons and fields. |

## Build notes
- Recipe: workflow theater, recommended numbers adjusted. Departures: serif display (document-of-record reason above); H1 capped at 4rem (64px, near the family median 60px) because the record carries the page and the brief asks for calm; wrap 1240px instead of 1320px; one functional-entrance element (the date checker); hero B's ruler embedded in hero A's record.
- Tokens: type steps `--step--1`…`--step-4`, spacing `--space-1`…`--space-7`, `--wrap`, surfaces `--ground/--sheet/--quiet`, action `--action`, state `--deadline` (styles.css `:root`).
- Fonts: TeX Gyre Schola Bold/Regular and TeX Gyre Heros Regular/Bold, GUST Font License, Latin-subset WOFF in `fonts/` (88 KB), served as "LL Display"/"LL Text" with `font-display: swap`. No network requests.
- Local behaviour: step tabs (click or arrow keys) rewrite status, owner, next decision, "today" marker and trail; decision radios change steps 3–4; date checker computes from input; request composer prepares text and says it is not sent; phone menu with Escape to close. Operated with Playwright: `shots/1440-record-step4.png`, `shots/390-record-step4.png`, `shots/1440-consult-result.png`, `shots/390-consult-result.png`, `shots/390-menu-open.png`; no console errors.

| Motion contract | Trigger → state/purpose | Static fallback | Duration / easing |
| --- | --- | --- | --- |
| Trail entry | Step change adds a trail line → new line moves 8px up into place to show it is the newest | Line appears in place, fully opaque (no fade) | 260ms, cubic-bezier(.2,.7,.2,1) |
| Button hover | Pointer hover on a button → background darkens to confirm affordance; only under `(hover:hover) and (pointer:fine)` | Focus outline and unchanged button | 160ms, same curve |
| Anchor scroll | Nav or CTA link → smooth scroll to the section for orientation | Instant jump | browser default; `auto` under reduced motion |

Reduced motion: `prefers-reduced-motion: reduce` removes all animation and transitions; every state still changes. No staggers, no loops, no entrance animation; the hero is readable at first paint.

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened: not blank, 1440 wide. H1 four lines ending "by when.", both actions above the fold, record with step tabs, status, owner, vermilion deadline and ruler visible; ruler labels no longer collide. Full page `shots/1440.png`: hero → checker → scope → consult → footer. |
| 768×1024 | shots/768-top.png | Opened: 768 wide. Nav collapsed to a Menu button (was a cramped two-line nav in `shots-before/768-top.png`); H1 three lines; actions side by side; record full width with all four step tabs on one row. Full page `shots/768.png` single-column throughout. |
| 390×844 | shots/390-top.png | Opened: 390 wide. H1 four lines ("by when." last), lede, full-width actions on first screen, record starts at fold. Full page `shots/390.png`: steps 2×2, fields stacked, ruler as a dated vertical list, checker inputs stacked, menu works (`shots/390-menu-open.png`). |

## Checker result
- JSON: check.json
- Failures fixed: first run on the pre-revision page (`check-before.json`) failed LY-01 (horizontal overflow at 1440 from ruler markers positioned with a full-width translated box) and MB-02 (footer nav links 32px tall). Fixed by positioning ruler marks with `left` and zero width, and 44px footer links. An earlier attempt hit a different site because another process took port 8765; all recorded runs use port 47391 and were confirmed to serve this page's title. Final run: 64 passed, 0 block failures, 0 warnings, 0 not run.
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (not installed, no network). web-design-guidelines: not run: not installed.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "small legal teams" / decide each renewal by its deadline / one record with owner, notice deadline, next decision, trail. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | H1 plus the record titled with a contract, owner and notice deadline in shots/1440-top.png. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | Hero artifact is the renewal record itself, operable through four steps (shots/1440-record-step4.png). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → record fields; doubt 2 → ruler and date checker; doubt 3 → stepper and growing trail (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Revision removed the second copy of the record; remaining sections: record, own-dates checker, honest scope, request. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: four questions with defaults, no answer, assumptions listed. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Two hero variants table, axis = structure, scored before code. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | References table: Marble, Sherpa, General Legal counterexample, each with treatment not borrowed. |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Build notes: workflow theater recipe and five departures. |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | pass | Not used: left-aligned headline beside a ruled record (shots/1440-top.png). |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "by when." at 1440 and 390, "and by when." at 768. |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css `.hero` uses padding only; no vh height anywhere. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | Hero is static HTML with no entrance animation; script only adds interaction. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Schola = display/record titles; Heros = text, UI and tabular dates; mono dropped as it had no job. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | shots/1440.png: open promise beside dense record → active checker → quiet scope list → short request band. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | shots/768.png single column, collapsed nav, four tabs fit one row; before-version nav wrapping fixed. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Teal only on primary action, focus and checked inputs; vermilion only on notice deadlines. |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Numbers 1–4 only on the renewal steps; sections are unnumbered. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | Page is built around notice deadlines, a renewal record and a deadline checker specific to this product. |
| TT-10 | The signature idea still works if the palette changes. | pass | Deadline is distinguished by position before term end, a heavier tick and its label, not by colour alone. |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Marble: no orange keyword, logos, numbered side tabs or scroll-driven switching. Sherpa: no ivory ground, centred hero, peel or browser frame. General Legal: no photo or two-path panel. Copy and names original. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | styles.css `@media (hover: hover) and (pointer: fine)` holds all hover rules. |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggered animation on the page. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contract table in Build notes covers all three. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | Trail entry keyframe is translateY only, no opacity (styles.css `@keyframes entry`). |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | pass | shots/390-record-step4.png: steps 2×2, fields stacked, ruler becomes a vertical dated list. |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | Sticky header pads `env(safe-area-inset-top)`, wrap uses left/right insets, footer bottom inset. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | `#record-status`, `#check-result`, `#consult-result` are role=status/aria-live polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; scope section says none are approved. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Sample dates/days sit under "Sample record · fictional contract"; checker figures come from the visitor's input; footer repeats that samples are fictional. |
| HP-03 | Illustrative interfaces say so on the page. | pass | Record tag, hero note and footer note label the sample (shots/1440-top.png). |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | pass | CTA → #consult; submit produces "Request prepared — not sent" with the request text and copy control (shots/390-consult-result.png). |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | pass | All PNGs in shots/ and shots-before/ opened; widths 1440/768/390 confirmed. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section: duplicate record section removed, stepper moved into the hero; before/after paths and new scores. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass list in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Render and checker ran; no unverified rows; status DONE. |
<!-- checklist:end -->

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Repeated artifact / section repeating the same claim (before: hero record and lifecycle record identical, shots-before/1440.png) | Warn | Fixed structurally: one operable record in the hero; lifecycle section deleted. |
| Scaled-down desktop on mobile | Block | Not present: shots/390.png shows recomposed steps, fields and vertical ruler. |
| Control without destination/result | Block | Not present: request composer produces a visible local result and states nothing is sent; all links are in-page anchors that resolve. |
| Overflow at desktop (ruler, found by checker in first pass) | Block | Fixed: marks positioned with `left`; LY-01 passes. |
| Cramped nav at 768 (shots-before/768-top.png) | Warn | Fixed: menu collapses at ≤900px. |
| Cream ground with serif display | Warn | Not matched: ground #f3f5f6 is cool grey; CO-05 passes; serif kept for the document-of-record reason. |
| Centered claim over browser frame | Block | Not present: left-aligned split with a ruled record. |

## Structural revision
- Weakest explanation or most template-like decision: the first build showed the same sample record twice — a static copy in the hero and an operable copy in a separate "four moves" section — so the hero artifact could not be operated and the main proof repeated (shots-before/1440.png, 390 page 6,779px tall).
- Change made (structure, not styling): merged the lifecycle into the hero: step tabs, step explanation and decision choice now live inside the hero record; the separate lifecycle section and its record were deleted; nav "How a renewal moves" became "Sample record". Also rebuilt the ruler labelling (today above the line, deadline and term end below) to stop collisions.
- Before: shots-before/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 9, Identity 7, Originality 7, Composition 8, Proof 9 (was 8/6/6/7/8). Not a 10: the brand is a set wordmark with no mark; the date checker does not draw its result on the same ruler; the record shows one contract, not the portfolio view a team would live in.
- Removal pass (each decorative element → its job, or "removed"): tinted band after the deadline → shows the window where notice is too late; dotted "today" tick → current state; step-number circles → real sequence and selected state; 1px rules and square sheet borders → record structure and separating sample from claims; quiet grey request band → marks the action section; dark footer → end of page; "Sample record" tag → honesty. Removed: boxed status chip (now a Status row), the duplicate lifecycle section and its sheet, the sliding transition on ruler marks (no reading value; caused overflow), the mono family.

## Remaining weaknesses
- What a buyer still cannot judge: what the product looks like across many contracts (only one record is shown); how deadlines get into the record (the brief does not say whether clauses are read by people or software, so the page does not claim either); security and data handling; price. The consultation request cannot be sent until the client connects an inbox or endpoint — the page says so to visitors, but it is a launch dependency.
- What was not verified: Safari/iOS and Firefox rendering (Chromium only); a real screen-reader pass (roles and live regions checked in code only); the main-buyer choice remains open and is collected in the request form.

## Status
DONE
