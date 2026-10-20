# DESIGN-RECORD

## Product interpretation
- Audience, category, business model, brand constraints: BSA and compliance officers at credit unions with 20,000–200,000 members buy; member-service staff use it daily; members see one short request. B2B software sold through a demo. No brand assets supplied; name "Refresh", domain refresh.example.
- Promise (who / what changes / how): For credit-union BSA officers, periodic KYC reviews stop being a spreadsheet, letters and a pre-exam scramble, because Refresh finds who is due, gathers what is on file, asks members only for what is missing and records each step for the examiner.
- Five-second line, quoted as shown in the first screen (who + what): "Refresh is periodic KYC review software for credit unions with 20,000 to 200,000 members."
- Current alternative, including doing nothing: a spreadsheet of review dates, mailed letters and phone calls, and a binder assembled in a scramble before each exam.
- The one advantage only this product has: one file per member that shows why they were due, what was already on file, the short request for only the gaps, and who did what when, so an examiner can follow it.
- Category frame (existing, subcategory or new) and what it costs to teach: existing subcategory, "periodic KYC review software for credit unions"; costs nothing to teach because buyers already run periodic reviews.
- Best-fit customer, and who it is not for: credit unions of 20,000–200,000 members with a BSA officer who answers to examiners. Not for banks or fintechs outside credit unions, and not for anyone wanting software that makes the risk decision.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief supplies no interviews or reviews. The hero adapts the brief's "an audit trail an examiner can follow".
- Biggest reason not to click, and the line that answers it: "Will this put a machine between me and a decision I am accountable for, and is it real?" Answered beside the button: "In pilot at two credit unions. Refresh never sets a risk rating; your compliance officer does."
- Conversion action and destination: Book a demo → https://refresh.example/demo (supplied by the brief).
- Visitor doubt 1 → artifact: "What does a review look like inside it?" → the sample review file in the hero, stepped through five stages with the trail growing.
- Visitor doubt 2 → artifact: "Who makes the decision, and can I control the rules?" → the sample review policy table and "What stays with the officer" list (#officers), plus the Officer entry in the trail.
- Visitor doubt 3 → artifact: "What do I tell the examiner?" → the binder drawing, the four fields every trail entry records and the diligence questions (#exam).

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (no one answers during this task). Defaults I would have offered: (1) review cycles are set by the credit union's policy per risk tier, default yes; (2) staff send the member request, default yes; (3) a member with nothing missing gets no request, default yes; (4) no pricing on the page, default yes.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: risk tiers with review cycles (sample values, labelled), staff sending requests, and "nothing missing means no request" all appear in samples and are listed under To confirm.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | End Close (casebook, 2026-10-19): split hero with a reconciliation table and an "Agent resolved · EXC-004" toast; workflow tabs change the product state. Limit: reads like peers, tab fill ignores reduced motion, 99.999% unsourced. | Show one exception being handled, with identifiers, and tie each step control to its own product state. | Violet palette, floating pill nav, toast UI, stat row, any unsourced number. |
| Brand composition | Vanta (casebook, 2026-10-20): the standards buyers qualify on sit in the subhead; the hero shows the compliance workflow as steps. Limit: demo auto-cycles under reduced motion, illegible on phones; long, repeated proof. | Put the buyer's qualifying terms (periodic KYC, credit unions, member range) in the first sentence; show the workflow as visible steps. | Light serif headline, lilac field, llama mascot, email-to-demo field, auto-cycling demo, logo strip. |
| Counterexample | Andera (casebook, 2026-10-19): scroll-pinned walkthrough where audit-log lines appear one by one. Attractive for an audit buyer, but the pinned section is empty in static captures, logs animate under reduced motion, and a gradient tail phrase decorates the headline. | Constraint kept: the trail only grows when the visitor chooses a stage; every state is complete with no motion. | Scroll pinning, gradient headline text, "Trusted by" logo row. |

Departures from the workflow-theater recipe: H1 max 68px rather than 88px (quiet level, condensed face); no mono face (tabular figures in the text face do the job); section padding at the recipe's low end to keep the phone page under eight screens.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the review-date spreadsheet row; the mailed review letter in a window envelope; the follow-up phone call; the risk tier and its review cycle; the expired photo ID found on file; the member's short document request; the staff check of an uploaded licence; the BSA officer's sign-off with name and time; the exam binder with tabbed sections; the examiner's question "why was this member due?"; the audit-trail line (who, what, when).
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Refresh" with seed 3572655668 (level quiet): 1 generative system, 2 voice with a point of view, 3 before and after, 4 canon.
- Chosen move and why, or canon and the buyer-risk reason: before and after. Refresh replaces a spreadsheet, letters and calls, so the same member shown in both at every stage is the product's own argument; at quiet level it lives inside the artifact only. Generative was rejected (a rule-drawn image says nothing to a compliance officer); voice was rejected (this buyer needs to see the file before trusting a stance).
- Idea sentence ("[inventory thing] becomes [the move]"): the review-date spreadsheet row becomes a before-and-after: at each of five stages the same member's spreadsheet cells change beside the Refresh file and its growing audit trail.
- The same sentence with the nearest competitor, and why it fails: "a broad BSA/AML suite's case screen becomes a before-and-after beside the spreadsheet row" fails: a monitoring and case-management suite is not sold as replacing the periodic-review spreadsheet and letters, and does not centre on asking members only for what is missing.
- Statement level (quiet, bold or loud) and why: quiet; a regulated buyer whose first doubt is risk and examiner scrutiny.
- First viewport at 1440 (placement, sizes, live thing, refused default): left 5/12 column with 68px condensed h1 on two-three lines, the five-second line in bold, Book a demo and the pilot/decision line, then the trail legend; right 7/12 the review file from y≈115 to y≈835 with stage chips, readout, spreadsheet row, controls, details and trail. Refused default: centred headline with two buttons over a dashboard screenshot and a logo strip.
- First viewport at 390: 40px h1 on two lines, five-second line, button and note, file starting at y≈478 with title, sample label, five 56px stage chips and the readout visible (366px of the artifact).
- Name test (the one with the …, eight words or fewer): the one with the review file beside a spreadsheet row.

## Hypothesis
- Archetype and why: workflow theater; a multi-step operational review with owners, states and a record, which is exactly what the buyer needs to see.
- Type roles, faces and why they fit this product: display TeX Gyre Heros Cn Bold (condensed grotesque of official forms; holds the headline to two lines on phones); text TeX Gyre Heros (plain, sober); Carlito only inside the spreadsheet row, because it is the face such sheets are typed in. All three are embedded as woff data in fonts/fonts.css (GUST and OFL licences).
- Composition and grid: 12-column, max 1320px; hero 5/7 split; lower sections alternate text-and-artifact pairs on a two-column grid, single column below 960px.
- Ground, colour and material, and why this ground: cool paper grey #f3f4f1 and white bands, like back-office forms rather than a marketing gradient; ink #17201c; one green #1d5c45 for the action and for completed states; amber/blue/green fills only for actor and state labels; yellow only for the edited spreadsheet cell and the newest trail entry.
- Signature artifact and its local behaviour: "Review file: member 20417", radio stage chips 1–5 plus Next stage and Start over; each stage rewrites the readout (role=status), the spreadsheet row, the member details and the trail from one data source in review.js.
- Signature on a phone (where the result shows after a tap): the readout sits directly under the chips and holds the stage title and sentence; the spreadsheet row follows; details and trail continue below.
- Sample audit (counts, weekdays, states and stated rules agree): 5 details, 3 current + 2 missing; "request for the 2 missing details"; trail grows 1, 2, 3, 5, 7 entries and the heading counts them; Wed 7 Oct, Thu 8 Oct, Fri 9 Oct, Mon 12 Oct, Tue 13 Oct, Wed 14 Oct, Thu 15 Oct 2026 and Mon 7 Oct 2024 checked with Python; 24-month rule matches 7 Oct 2024 → 7 Oct 2026; the officer, not Refresh, sets the rating.
- To confirm with the client (claims and terms kept off the page): risk tiers and cycles set per credit union; who sends the member request and through which channel; that a member with nothing missing receives no request; which core systems Refresh reads; hosting, access and retention answers; pricing; og.png, favicon.svg and apple-touch-icon.png to be hosted at refresh.example (og:image points to https://refresh.example/og.png); whether the demo page should say anything about meeting length.
- Section sequence, with one section deliberately omitted: hero with review file → 1–2 policy and officer → 3 member request → 4 staff list → 5 exam trail, diligence questions and the closing Book a demo. Omitted: pricing (none supplied) and any logo or testimonial section (pilots cannot be named).
- Primary interaction and motion purpose: choosing a stage; the newest trail entries get a yellow highlight that fades so the eye finds what was added. No other motion.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis: the artifact owns the first screen (A) versus an opinion owns it with the artifact cut by the fold (B).
- Category default and anti-default this plan avoids: default is navy-and-white compliance SaaS with a shield, centred headline, dashboard screenshot, "Trusted by" logos and Secure/Automated/Compliant cards; anti-default is cream ground with an editorial serif and a mascot, or a dark terminal "compliance as code" look. The plan uses a cool form-grey ground, a condensed grotesque and a working review file.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split hero: headline, five-second line, Book a demo left; review file with stage chips, spreadsheet row and growing trail right (before-and-after, quiet) | What does a review look like, and who decides? | 8 | 7 | 7 | 7 | 8 | A real pilot file (anonymised) and the client's own policy wording |
| B | Voice: "The exam binder should build itself while the review happens" over the five-second line; review file starts under the fold | Why change from the spreadsheet? | 6 | 7 | 6 | 6 | 5 | The founders' own words and the file visible in the first screen |

- Chosen variant and why: A; the buyer must see the file and the officer's control before any stance, and A puts the working artifact in the first screen at both widths.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Revised before code: no navy, shield, logos or cards; no cream/serif; condensed grotesque on form grey with a working file. |
| Redrawn browser or phone chrome | Warn | Avoided: the file is drawn as its own surface, no window dots or phone frame. |
| Small label above every heading | Warn | Stage tags appear only on the four sections that map to real review stages 1–5, a true sequence. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Headline on three lines, five-second line, button and note, trail legend; file fully visible with 5 chips, readout, sheet row, details and trail. Full page in shots/1440.png. |
| 768×1024 | shots/768-top.png | Single column, menu button, file starts at y≈512 with chips and readout on screen; details and trail side by side. Full page in shots/768.png. |
| 390×844 | shots/390-top.png | Two-line h1, five-second line, button, note; file from y≈478 with chips and readout. Full page shots/390.png (6,187px). Menu open in shots/menu-390.png. |

Stage captures: shots/state-1440-1.png … state-1440-5.png, shots/state-390-1.png … state-390-5.png, reduced motion shots/state-390-reduced.png, no-JS shots/nojs-390-top.png, binder at phone width shots/binder-390.png.

## Checker result
- JSON: check.json
- Failures fixed: TY-02 (artifact h3 before any h2: file title is now an h2), TY-03 (first h2 was a 15px legend heading: now a paragraph; file title h2 is 22px), TY-06 and CO-01 (binder tab labels at 11px over strokes: tabs enlarged, labels 17px, SVG text colour set so the sampler reads the real fill), PF-06 (title now leads with the category).
- Warnings kept and why: PS-06 lists Next stage and Start over beside Book a demo; they are the artifact's own controls, and Book a demo is the only action, worded the same in nav, hero and close. ST-01: no price was supplied, so cost is not shown; the demo is where cost is disclosed, listed under To confirm.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and nothing may be installed; `impeccable` is not present in the dependency folder.

## Checklist
The other 81 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/390-top.png and 1440-top.png: five-second line plus "finds who is due, gathers what is on file, asks members only for what is missing and records each step". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | From the captures alone: KYC review software for credit unions; tracks due members, asks for missing documents, keeps a trail; click Book a demo. Matches the record. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The review file is the product's output (file, request status, trail), labelled as a sample. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the review file, the policy table and officer list, and the binder plus trail fields and diligence questions. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Policy (rules, decision), member request (wording), staff list (daily work, no-request case), exam (fields, diligence); the old final CTA band was merged into the exam section. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four defaults; none answered; all logged under To confirm. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (before-and-after, dealt) and B (voice, dealt) differ on emphasis; both defaults named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | End Close, Vanta, Andera in References; recipe departures listed under the table. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "periodic KYC review software for credit unions". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation fields; "KYC reviews your examiner can follow" is false for a spreadsheet of dates and letters. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each h2 names a concrete thing (policy and officer, one short request, one list instead of letters, the trail when an examiner asks) and can be false. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the hero adapts the brief's "audit trail an examiner can follow". |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "In pilot at two credit unions. Refresh never sets a risk rating; your compliance officer does." answers status and decision risk, the buyer's main reason. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: KYC reviews your examiner can follow → Your policy decides who is due, your officer decides the risk → Members get one short request… → Member services work one list… → When an examiner asks…, the answer is already in the trail. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero has no height; sized by content. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; pilot status stated beside the button. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Green only on Book a demo, completed states and the Officer label; yellow only on changed cells and new trail entries. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Spreadsheet row beside the file, credit-union member range and "only what is missing" are specific; swap sentence fails (Statement). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No toast, stat row, serif, mascot, lilac, pinning or gradient text; numbers and copy are original. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Button colour transitions sit inside (hover:hover) and (pointer:fine); no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | New-entry highlight: trigger stage change; purpose show what was added; fallback entry fully visible, highlight static then removed; 900ms after 300ms, cubic-bezier(.2,.7,.2,1); reduced motion 200ms linear opacity only. Button press scale .97 only with no-preference. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the details and trail stack, the trail badge sits beside the time with the text full width, tables become labelled rows (shots/state-390-5.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | Readout is role=status aria-live=polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | 20,000–200,000 and "two credit unions" are from the brief; all other figures sit in samples labelled as written for this page. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels at the top of the file, policy table, staff list and member request. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Book a demo links to https://refresh.example/demo; nav anchors exist; stage controls change the file. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All top and full captures opened; stage captures 1–5 at 1440 and 390 opened; 768 checked. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | See Structural revision. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | See Removal pass. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing unverified; checker has no block failures. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | n/a: the file has no text input; stage 1 is the starting state | Stage 1 shows details as dashed "Not gathered yet", visibly unlike filled states | n/a: no input field to leave empty |
| Out of range | Pressed Next stage past stage 5 | Next becomes "Review closed" and disabled; focus moves to Start over | pass |
| Nonsense | Pressed stage chips out of order (5, then 2, then 4) | Each stage renders its own complete state; counts and trail match the stage | pass |
| Repeat | Double-clicked Next from stage 1; pressed Start over at stage 1 | Advanced exactly two stages; Start over re-rendered stage 1 unchanged | pass |
| Reset | Start over from stage 5 | Returns readout, sheet, details, trail and chips to stage 1 | pass |
| Keyboard only | Tab to chips, arrow keys; Tab to Next, Enter ×4 | Arrows move stages; Enter advances; at stage 5 focus moves to Start over, never to body (AX-12 pass) | pass |
| Phone | 390×844, each chip tapped from the first screen | Readout under the chips updates on screen (MB-07 pass); stage 5 file is 1,661px, under two screens | pass |
| Reduced motion | Reload with reduced motion, choose stage 5 | No movement; highlight fades in 200ms; all content visible (shots/state-390-reduced.png) | pass |
| Visitor's own input | n/a: the sample is a fixed story of one member, by design, so the dates and counts stay consistent | Controls choose stages only | n/a: no visitor data is taken |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Every section has same width and padding | Warn | Partly kept: sections share the grid, but density changes (table, card plus drawing, list, binder plus questions). |
| Final CTA band | Warn | Fixed in the revision: the separate band was removed; the closing action ends the exam section. |
| Binder labels small on phones | Warn | Kept: labels render about 11px at 390 inside the scaled drawing, but the caption repeats them as text and the drawing is labelled. |

## Structural revision
- Weakest explanation or most template-like decision: below the hero the page was four interchangeable two-column bands plus a final CTA band, in an order (officers, staff, members, exam) that did not follow the review itself, so the lower page did not connect to the artifact.
- Change made (structure, not styling): reordered the sections to follow the review stages (policy 1–2, member request 3, staff list 4, exam 5), gave each a stage tag matching the file's chips, removed the separate closing band and moved the closing Book a demo into the exam section; shortened trail lines and recomposed the phone trail so the stage-5 file fits two screens.
- Before: shots/before-1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: 8/10 (fit 8, identity 8, originality 7, composition 8, proof 8); a 10 needs a real anonymised pilot file, the client's own policy terms, and answers on hosting and core systems instead of "covered in the demo".
- Removal pass (each decorative element → its job, or "removed"): yellow new-entry highlight → shows what a stage added; yellow edited cells → mark the spreadsheet change; actor labels → who acted; envelope and phone drawing → the old way the request replaces; binder drawing → the exam file and its five tabs; logo mark → brand; final CTA band → removed; heading label above the legend → removed (now a paragraph).

## Remaining weaknesses
- What a buyer still cannot judge: hosting, data access, core-system connections and price, all deferred to the demo; no named pilots or measured results exist yet.
- What was not verified: nothing on the checklist; the share card, favicon and touch icon are rendered locally but must be hosted at refresh.example for og:image to resolve.

## Status
DONE
