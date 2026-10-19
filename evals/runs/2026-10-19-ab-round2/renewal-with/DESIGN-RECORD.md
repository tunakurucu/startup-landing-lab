# DESIGN-RECORD

Ledgerlight landing page. Page: `index.html` (+ `styles.css`, `app.js`, `fonts/`). Served for checks from `http://localhost:8765/index.html`; it also works opened from disk with no network.

## Product interpretation
- Audience, category, business model, brand constraints: Small legal teams (in-house legal operations and small outside-counsel practices) · contract renewal tracking · B2B, sold through a consultation (pricing not supplied) · no existing brand, code, logo or palette; no approved quotes, certifications or savings figures.
- Promise (who / what changes / how): Small legal teams / stop contracts renewing on silence: every renewal gets a named owner, a notice deadline and an open decision before the window closes / one record per contract holding owner, notice deadline, next decision and a review trail.
- Conversion action and destination: "Request a consultation" → in-page `#consult` form that validates and prepares the request text locally (copy button); no endpoint exists, so the line beside the button says nothing is sent yet. Client must supply: a form endpoint or a booking/email address.
- Visitor doubt 1 → artifact: "Will I actually see who owns a renewal and what is due next?" → hero sample record: one fictional contract stepped through four states (logged, in review, decided, notice sent) with owner, waiting-on, notice deadline countdown, next decision and a growing review trail.
- Visitor doubt 2 → artifact: "Our notice clauses are messy; will the deadline be right?" → clause-to-record excerpt (sample renewal clause with its phrases mapped to the record's dates) plus a working notice-deadline calculator that runs in the browser.
- Visitor doubt 3 → artifact: "Is this for a team like mine (in-house vs outside counsel)?" → a short comparison table showing how the same record's owner, decision-maker and trail work for each team type.

## Interview log
- Questions asked, each with the recommended default you offered: Running unattended; the client is unavailable, so no questions were sent. Defaults that would have been asked: (1) main buyer → default: write for "small legal teams" and let one comparison table serve both in-house legal ops and outside counsel; (2) consultation destination → default: local form that prepares the request, labelled as not sent; (3) brand → default: new wordmark only, no logo mark; (4) sample data → default: one fictional contract, people named by initial, dates in the real near future (today is 19 Oct 2026).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: buyer left open (comparison table instead of a single persona); the CTA cannot send anything, so its result is a prepared request; no proof section at all because no proof was supplied.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Toothy AI (desktop audit, 2026-10-18/19): plain promise faces a verification/billing process panel; clicking Billing swaps the timeline; pricing caveats sit next to the buying action. Limit: reports time saved and collection ratios without verification. | One concrete work trace beside the promise, switchable by the visitor, with qualifications next to the claim they qualify. | Checkmarked benefit list, outcome percentages, insurance/billing tile layout and its colours. |
| Brand composition | Sherpa (desktop audit, 2026-10-19): calm statement about ownership, sample requests and approvals in a reviewable paper-like artifact; sample data kept separate from customer outcomes. Limit: mockups resemble live integrations; many examples lengthen the page. | A calm page earns trust by making ownership and approval inspectable in one believable artifact, not by enterprise proof. | Warm ivory ground, centred hero, peelable corner, orange accent, illustration alternative. |
| Counterexample | Andera (desktop+mobile audit, 2026-10-19): audit/compliance product with "We raised $37M" bar, gradient tail phrase in a centred headline, "Trusted by audit teams" logo row and a scroll-pinned walkthrough. Limit: pale text, pinned section blank in static captures, motion under reduced motion. | Constraint to retain: legal/compliance buyers judge control and history; show the log of who did what, not funding or logos. | Funding bar, gradient headline, logo row, scroll-pinned narration, selection-handle decoration. |

## Hypothesis
- Archetype and why: Workflow theater. A renewal is a multi-step operational decision (log → review → decide → give notice) whose value is visible owner, state and next action; one fictional contract moving through states is the product.
- Type roles, faces and why they fit this product: Display: Lora (OFL, self-hosted) for H1/H2 and the contract title, because contracts and notice letters are serif documents and the headline speaks in the document's voice. Text/data: Inter (OFL, self-hosted) for body, fields, dates and the trail, with tabular figures for dates and day counts. No mono: Inter tabular numerals already align the trail.
- Composition and grid: 12-column, max 1240px. Hero split 5/7: promise left, sample record right. Later sections alternate a narrow explanation column with a wide working object (clause, table, calculator).
- Ground, colour and material, and why this ground: Cool pale sage-grey ground (#EEF2EF) with a near-white record surface, fine rules instead of shadows; it reads like a desk of filed documents, not a cream editorial page. Colour carries state only: amber for the open notice window, green for action and settled states, red only if a deadline is missed.
- Signature artifact and its local behaviour: "Sample record": a term timeline with the notice window lit as a band (the "light" in the name), a today marker, owner/waiting-on/deadline/next-decision fields and a review trail. Four step tabs move "today" through the renewal; fields and trail update and the change is announced.
- Section sequence, with one section deliberately omitted: Hero + sample record (open) → clause to record (dense) → two kinds of team (quiet) → notice-deadline calculator (active) → request a consultation (short) → footer. Omitted: proof/logo/testimonial strip and a generic feature-card row.
- Primary interaction and motion purpose: Step tabs in the sample record; the today marker slides along the timeline and the newest trail entry moves into place to show what changed. Calculator updates instantly with no motion.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (split record beside the promise vs full-width timeline under the promise).

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split: promise and CTA left; full sample record right (timeline band, owner, deadline, next decision, trail) with four step tabs | Doubt 1 (who owns it, what is due) in the first screen | 8 | 6 | 6 | 7 | 7 | The record must read as a legal artifact, not a dashboard card; the lit notice window must be the memorable image |
| B | Stacked: short promise; a full-width term timeline (start → notice window → renewal) with a draggable today marker; record fields below the fold | Doubt 2 (when is notice due) strongly, doubt 1 only after scroll | 6 | 7 | 7 | 6 | 5 | Owner and next decision would have to appear in the first screen; on phones a wide timeline needs a full recomposition |

- Chosen variant and why: A. The brief names owner, notice deadline, next decision and review trail as what the buyer must see; A puts all four in the first screen. B's lit-window timeline is kept as the top strip of A's record.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Cream ground with a serif display, chosen by default | Warn | Ground changed to cool sage-grey, not cream; the serif stays because contracts are serif documents and only the display/contract-title role uses it. |
| Three equal adjective cards | Block | Not planned; the "what the record holds" idea is drawn as a clause annotated into the record instead of four field cards. |
| Unsupported trust logos or testimonials / metrics without sources | Block | No proof section; every date and day count is in the fictional sample and labelled as such; calculator results are the visitor's own input. |
| Control without destination/result | Block | Consultation form has no endpoint: submit prepares the request locally, shows it with a copy button, and says beside the button that nothing is sent yet. |
| Small tracked-caps label above every heading | Warn | Not used; sections open on the heading itself. Step numbers appear only on the four renewal steps, a real sequence. |
| Fake liveness | Warn | The today marker does not move on its own; it changes only when a step is chosen. |
| Every section has same width and padding | Warn | Planned density change: open hero, dense clause, quiet table, active calculator, short consult. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened: not blank, 1440 wide. H1, lede, CTA and the record's owner, waiting-on, notice deadline and next decision all in the first screen; trail starts at the fold. Full page `shots/1440.png`: density open → dense clause → quiet table → active calculator → short consult. Record states 1–4 in `shots/states/state-1440-step1..4.png`: today marker moves, fields and trail update, no clipped labels; legend wraps to two lines (accepted). |
| 768×1024 | shots/768-top.png | Opened: not blank, 768 wide. Nav collapses to a Menu button (first pass had a cramped 4-item nav that wrapped; fixed by collapsing below 900px). Hero stacks; record keeps its 2×2 fields and one-line legend. Full page `shots/768.png`: calculator in two columns, table readable, no leftover 3-column grid. |
| 390×844 | shots/390-top.png | Opened: not blank, 390 wide. H1 on three lines with no single-word last line, CTA and the record's Owner visible. States `shots/states/state-390-step1..4.png`: steps become a 4-up compact row, fields stack, trail stacks date/person/action, timeline fits after an overflow fix. Menu open `state-390-menu.png`; calculator past-deadline state `state-390-calc-passed.png`; consult error and prepared states `state-390-consult-error.png`, `state-390-consult-prepared.png`. |

## Checker result
- JSON: check.json
- Failures fixed: LY-01 and LY-02 (horizontal scroll at 390/320): the timeline's today marker, a full-width translated layer, extended past the record; fixed with `overflow-x: clip` on the track (first run kept in the scratchpad, 61 passed / 2 block). MB-08 warning cleared by the same fix. Final: 64 passed, 0 block failures, 0 warnings, 0 not run (served from http://localhost:8765 so PF-04 could run).
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error network 'proxy' config is set properly." (not installed locally); web-design-guidelines not available in this environment.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 1440-top/390-top: "small legal teams", "no contract renews without a decision", "one record per contract: owner, last day to give notice, open decision, reviews". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Headline plus a contract record with owner and notice deadline beside it at 1440; on 390 the record starts in the first screen. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | Hero artifact is a sample renewal record (owner, waiting on, deadline, next decision, timeline, trail), labelled fictional. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubt 1 → stepped sample record; doubt 2 → clause-to-record map + working calculator; doubt 3 → in-house vs outside-counsel table. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero = what a record holds; clause = where dates come from; table = who fills it; calculator = try your own; consult = act. No repeated feature claims. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: four defaults written, run unattended, proceeded on defaults. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were compared and scored before any code. | pass | Variants A/B on structure, scored before index.html was written. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | Toothy AI (explanation), Sherpa (composition), Andera (counterexample), each with a "not borrowed" cell. |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Workflow theater recipe. Departures: H1 clamp(2.5rem…4.25rem) below the recommended 3.4–6.5rem because the hero is split with a dense record; serif display (Lora) instead of a display sans for the document voice; no mono face; max width 1240px vs 1320px. |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | n/a | Hero is a left-aligned split with a working record, not a centred headline over a screenshot. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440: "a decision." ; 768: "without a decision." ; 390: "a decision." |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | styles.css: hero height comes from content and padding; no vh units. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | pass | All hero copy and record values are in the HTML; JS only re-renders the same state; no entrance animation. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Lora = display and document voice (H1/H2, contract title, clause); Inter = body, fields, dates with tabular figures. No third face. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | pass | 1440.png: open hero → dense clause on a darker band → quiet narrow table → active calculator on paper → short consult. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | pass | 768: nav collapses to Menu, hero stacks, calculator 2 columns, consult single column (first pass nav was cramped; fixed). |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Green = actions, selected step, settled state; amber = open notice window, days left, clause marks that feed dates; red only for a passed deadline. |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Numbers only on the four renewal steps and the clause-to-field keys (a correspondence); sections are unnumbered. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | The page is built from the renewal record, notice clause and deadline calculator specific to contract renewals. |
| TT-10 | The signature idea still works if the palette changes. | pass | The stepped record and lit notice window work by position, edge and labels; colour is supplementary to text ("30 days left", legend labels). |
| TT-11 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass: no copy, names, numbers or assets from Toothy, Sherpa or Andera; no checkmark list, ivory/orange, peel corner, logo row, gradient phrase or pinned scroll. Shared grammar only: a split hero with a switchable process panel (Toothy) — ours is a contract record with timeline and trail. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | styles.css: all :hover rules are inside `@media (hover: hover) and (pointer: fine)`. |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | n/a | No staggered sequences on the page. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | See motion contracts below the checklist. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | New trail rows move 6px into place (transform only); no opacity on text. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | 390 states: steps become a compact 4-up row, fields stack, trail rows stack, legend becomes a list, table becomes labelled blocks. |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | .wrap padding uses max(gutter, env(safe-area-inset-left/right)); footer bottom padding adds env(safe-area-inset-bottom); nothing is fixed. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | Record step changes → role=status sentence; calculator result → role=status; consult messages → role=status. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Record dates/day counts sit under "Sample record · fictional contract and people"; clause labelled "written for this page"; calculator numbers come from the visitor's input; contract-count ranges are form options, not claims. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Label is the first line inside the record and the clause; calculator and consult notes sit beside their controls. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Request a consultation" → consult form; "Prepare my request" → visible prepared text + copy (state-390-consult-prepared.png), with "can't send requests yet" beside the button; "Work out a notice deadline" → calculator; footer OFL link → fonts/OFL.txt. Client must supply a form endpoint or booking/email address. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, and the signature artifact was captured in each of its states. | pass | All six PNGs and the state captures in shots/states were opened; record steps 1–4 at 1440 and 390, menu, calculator and consult states captured. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Record reordered and phone steps recomposed; see Structural revision with before/after paths and rescores. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Render and checker ran; no unverified rows; optional Impeccable not run is recorded and is not one of the 100 checks. |
<!-- checklist:end -->

Motion contracts:
- Step tab → today marker slides along the term timeline (transform translateX) to show where this moment sits against the notice deadline → static fallback: marker already positioned in HTML for step 2 → 280ms cubic-bezier(.2,.7,.2,1).
- Step tab forward → newly revealed trail rows move up 6px into place with a faint background to show what changed → fallback: rows appear immediately → 240ms same easing.
- Button hover (fine pointers only) → background darkens to confirm the target → 160ms same easing.
- Reduced motion: all animation and transitions removed; every state change and all content stay.

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Scaled-down desktop on mobile | Block | First 390 render: timeline layer caused page overflow; fixed. Steps were a 2×2 grid pushing the fields out of the first screen; recomposed (see revision). |
| Every section has same width and padding | Warn | Not matched: paddings and widths vary (hero 72/112, clause 112/72 on a darker band, table narrower 980px, calculator on paper). |
| Cream ground with a serif display | Warn | Not matched: ground #eef2ef is cool; checker CO-05 passed. Serif kept for the document voice (record title, clause, headings). |
| Control without destination/result | Block | Not matched: every button and link clicked in the state captures produced its result. |
| Fake liveness / glow / gradient text / tracked-caps labels | Warn | Not matched: nothing moves on its own; no glows, gradients or eyebrow labels. |

## Structural revision
- Weakest explanation or most template-like decision: In the record, the four things the brief says the buyer must see (owner, notice deadline, next decision, trail) sat below the timeline and a two-line legend; at 390 the 2×2 step grid pushed every field out of the first screen, so the hero read as a generic split with a card.
- Change made (structure, not styling): Reordered the record to steps → owner/waiting-on/deadline/next-decision → timeline → trail, shortened the legend, and recomposed the phone step control from a 2×2 grid into a compact 4-up row (dates move into the timeline flag).
- Before: shots/v1/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 9, Identity 7, Originality 6, Composition 8, Proof 8 (was 8/6/6/7/7). Owner and next decision now appear first at all widths (390 shows Owner in the first screen; before: shots/v1/390-top.png, after: shots/390-top.png). Still short of 10: the split hero grammar is common, and the lit notice window is not yet the memorable image of the brand.
- Removal pass (each decorative element → its job, or "removed"): darker band behind the clause section → marks the dense reading section; record and clause borders → separate sample material from page copy; amber window band → state (open notice window); deadline edge and term-end ticks → dates; underline + superscript key in the clause → links phrases to fields; trail "new row" tint → shows what the step added; 2px rule over "Your dates" → groups the calculator result. Removed: a bordered field grid inside the record (would have nested cards) in favour of rules; no shadows, gradients or icons were added.

## Remaining weaknesses
- What a buyer still cannot judge: how records get created (manual entry, import or clause reading), pricing, security posture and integrations; none were supplied. The consultation form cannot send anything until the client supplies an endpoint or address.
- What was not verified: Impeccable detect (not installed); real screen-reader output (only role=status markup was checked); the page on Safari/Firefox (Chromium only).

## Status
DONE
