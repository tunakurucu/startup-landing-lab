# DESIGN-RECORD

Swaptide landing page, built from BRIEF.md with the startup-landing-design skill (Build mode), 2026-10-20.

## Product interpretation
- Audience, category, business model, brand constraints: Nurse managers and directors of nursing (payers, department budget) and the unit's nurses (daily users, on phones, on breaks). Category: shift-swap app for hospital nursing units. B2B, sold per department via a pilot. Constraints: no payroll, never suggest it overrides union agreements or the manager's decision, no measured results, should feel like a 12-hour shift and not HR software.
- Promise (who / what changes / how): For a unit manager, every swap reaches them before it is worked (instead of after), because nurses post and pick up on their phones and Swaptide checks skill mix and hours before the manager taps approve or decline.
- Five-second line, quoted as shown in the first screen (who + what): "Swaptide is a shift-swap app for hospital nursing units."
- Current alternative, including doing nothing: The whiteboard by the break room, group texts, hallway agreements, and the manager hearing about a swap after it has happened (doing nothing).
- The one advantage only this product has: The swap arrives at the manager already checked against the unit's own skill-mix and hours limits, and is decided in one tap, before the shift.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing subcategory ("shift-swap app for hospital nursing units"); costs one plain sentence.
- Best-fit customer, and who it is not for: Best fit: a nurse manager of one inpatient unit on 12-hour D/N shifts whose swaps live on a whiteboard or group text. Not for: buyers looking for payroll, timekeeping or full scheduling software.
- Users' own words (three phrases with source, or 'none yet'): none yet (the brief supplies no interviews; the sample note "Anyone want my night?" is written for the page, not quoted).
- Biggest reason not to click, and the line that answers it: "What am I committing to on a sales call?" Answered beside the button: "Three months into a pilot on one medical-surgical unit. The call covers your unit's swap rules and whether a pilot fits."
- Conversion action and destination: Book a pilot call, https://swaptide.example/pilot (from the brief), same label in nav, hero and final block.
- Visitor doubt 1 → artifact: "Does it actually check our staffing rules?" → the hero swap board: tap a nurse on the roster, see skill mix, shifts-in-a-row and week-hours checks, then approve or decline.
- Visitor doubt 2 → artifact: "Will it take decisions away from me or fight our union agreement?" → the manager's limits sheet with steppers and a sample queue where flagged swaps still reach the manager; the "Your call, every time" line and the union FAQ answer.
- Visitor doubt 3 → artifact: "Does it fit how a unit actually works?" → the whiteboard drawing (what it replaces) and the night-to-day timeline with the unit plan (03:10 night break to 19:00 handoff).

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (nobody answers during this task). Defaults I would have offered: pilot-call page as the only CTA (default yes); sample unit "4 North Med-Surg" with fictional names (default yes); show no pricing (default yes, cost covered on the call).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: Shift times shown as 07:00–19:30 and 19:00–07:30 with each shift counted as 12 hours; sample limits (3 in a row, 48 h/week, one charge-qualified RN per shift) are illustrative, labelled as samples.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | End Close (endclose.com, casebook 2026-10-19): hero reconciliation table with an "Agent resolved · EXC-004" toast; tabs swap the mock state. Limit: common B2B layout, unsourced 99.999% claim. | Show the exception being handled (a flagged swap reaching the manager), not a dashboard; every control changes the product state. | Framed split hero box, stat row, violet, AI framing, any numbers. |
| Brand composition | Meuze (meuze.ai, casebook 2026-10-20): one halftone treatment across photo, illustration and data; tiny operational cards ("Pull 12kg, today 14:00"). Limit: 4,000px pinned scroll track, content hidden until scrolled. | One graphic language across the page: the D/N schedule notation (amber day, navy night, ink rules) recurs in the hero, whiteboard drawing, timeline bands, unit plan, share card and final band. | Halftone, dark full-bleed photo, scroll-pinned scenes. |
| Counterexample | Plena Health (plena.health, casebook 2026-10-19): healthcare workflow page with rotating headline, YC badge, lavender gradient card and hard outcome numbers. | Healthcare buyers need a still headline, honest status and proof beside claims. | Rotating headline, badge above h1, gradient card, outcome numbers (we have none). |

Departures from the workflow-theater recipe: the h1 runs at 88px (recipe max 88) in a condensed face so it stays on two lines; the "one work item through selectable states" is expressed as the unit's own schedule notation rather than an app window.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the break-room swap whiteboard; the unit's D/N schedule grid; 07:00 and 19:00 handoff (report); the 03:10 night break; charge-qualified RN marker; consecutive 12-hour shifts; weekly hours; skill mix per shift; the scrub-pocket phone; the manager's office between meetings; sticky notes and dry-erase marker; the nurses' station.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Swaptide" with seed 2062072642: generative, character, notation, canon.
- Chosen move and why, or canon and the buyer-risk reason: notation (the audience's own notation). Nurse managers read the D/N schedule grid every day; filling it with the swap and its rule check is recognisable before a word is read. Generative would hide the mechanism; a character is wrong for a buyer accountable for staffing risk.
- Idea sentence ("[inventory thing] becomes [the move]"): The unit's D/N schedule grid becomes the swap itself: tap the nurse who picks up Priya's Saturday night, watch the charge marker, the four-nights run and the week hours flag on the grid, then tap approve.
- The same sentence with the nearest competitor, and why it fails: "Deputy's (or When I Work's) schedule grid becomes the swap itself…" fails: their grids are hourly retail blocks with no D/N 12s, no charge-qualified marker and no skill-mix rule, and the swaps are not routed to a nurse manager.
- Statement level (quiet, bold or loud) and why: bold. The roster owns the first screen; the sections below stay quiet (drawings, timeline, queue) because the buyer is accountable for safe staffing.
- First viewport at 1440 (placement, sizes, live thing, refused default): 88px two-line h1 top-left across 9 columns; status card top-right; left 4 columns: five-second line, Book a pilot call, note, nurse line; right 8 columns: the swap board (roster + checks + approve/decline), fully visible. Refuses a centred headline over a framed dashboard screenshot.
- First viewport at 390: two-line 36px h1, five-second subhead, CTA and note, then the board header, Priya's posted line and the "Tap a name" prompt with the roster starting at the fold (about 330px of the board visible).
- Name test (the one with the …, eight words or fewer): the one with the nurse schedule you tap

## Hypothesis
- Archetype and why: Workflow theater: a swap is a multi-step operational decision (post, pick up, check, approve) with an owner at each step.
- Type roles, faces and why they fit this product: TeX Gyre Heros Cn Bold (display, schedule cells, labels) reads like a printed unit roster and keeps a long headline to two lines; TeX Gyre Heros Regular/Bold for body. Both GUST-licensed, shipped as subset woff files in fonts/. No mono: times and hours use tabular figures.
- Composition and grid: 12-column grid, 1320px max; hero h1 across 9 columns, copy 4 / board 8; sections alternate split drawing, timeline strip, rules+queue split, two-column Q&A, night band.
- Ground, colour and material, and why this ground: Cool whiteboard white (#F7F8F7), ink rules; day amber and night navy come from the D/N notation; scrub teal marks actions and the selected nurse; amber-brown only for flags. The night navy is the final "19:00 handoff" band.
- Signature artifact and its local behaviour: Roster of four nurses Wed–Sat with week hours. Tapping Jo, Dana or Marcus (native radios in the row headers) recomputes three checks, the Sat cell, the week-hours column and the verdict; Approve/Decline update the grid (Priya's cell goes "off", taker gets N, or Priya "kept"); Reset restores Jo.
- Signature on a phone (where the result shows after a tap): Roster first, then the verdict (role=status) directly under it, then checks and the manager's buttons; after a name tap the verdict sits at y≈694–762 of 844; after Approve at y≈461–553.
- Sample audit (counts, weekdays, states and stated rules agree): Wed 11, Thu 12, Fri 13, Sat 14 Nov 2026 and Tue 10 / Wed 11 are correct weekdays. Week hours: Priya 36 (Tue N, Wed N, Sat N) → 24; Jo 24 → 36; Dana 36 → 48 with Wed–Fri N so Sat is her 4th in a row; Marcus 36 → 48 and not charge-qualified, with Ken and Ana on Sat night also not charge-qualified. Queue: Sam Wed D, Thu D + Fri D = 3rd in a row, 48 h; Tom not charge on Thu 19 day. Flagged swaps are never auto-declined.
- To confirm with the client (claims and terms kept off the page): pricing and contract terms; pilot length, scope and onboarding effort; whether nurses use a native app or the browser; data hosting, access control and HIPAA/security posture; integrations with scheduling or HR systems; notification behaviour; hosting og.png at https://swaptide.example/og.png; the real name of the pilot unit and whether it may be mentioned.
- Section sequence, with one section deliberately omitted: Hero (board) → whiteboard: what it replaces → one swap from night break to handoff (timeline + unit plan) → for nurse managers: limits and queue → questions from director, union rep and IT → final pilot call band → footer. Omitted: a testimonial/logo section (no supplied proof) and a features card row.
- Primary interaction and motion purpose: Tapping a nurse and approving; the only motion is a 260ms settle on the newly approved cell and 150ms colour transitions on controls.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (where the notation sits relative to the headline).
- Category default and anti-default this plan avoids: Default: blue SaaS hero with a centred headline, "Get a demo", a laptop dashboard screenshot and stock nurse photos. Anti-default: an emotional editorial page of hospital photography and a serif headline. The plan uses the trade's own schedule grid on a whiteboard ground instead.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Two-line h1 over a split: copy and CTA left, the live D/N roster with checks and approve/decline right (notation move, bold) | Does it check our rules, and do I keep the decision? | 8 | 8 | 7 | 7 | 8 | The roster itself as the control, and a drawn picture of the whiteboard it replaces close by |
| B | Full-width whiteboard drawing as the hero with the headline written on it; the live checker below the fold | What does it replace? | 6 | 8 | 7 | 6 | 4 | The product working in the first screen instead of the old way |

- Chosen variant and why: A, because the product's real output (the checked swap) is operable in the first screen; the whiteboard from B moves to the second section as the before picture.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Revised: neither blue SaaS dashboard nor photo editorial; ground and colour come from the schedule notation. |
| Three equal adjective cards | Block | Avoided: the "what it replaces" section is three numbered problems tied to spots on the drawing, not cards. |
| Overused display face | Warn | Avoided Inter (installed but common); TeX Gyre Heros Cn chosen for the roster register. |
| Redrawn phone chrome | Warn | Avoided: no phone frame; the artifact is the schedule notation at real size. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line h1, status card, CTA in headline column, whole board visible with Approve; full page shots/1440.png opened. |
| 768×1024 | shots/768-top.png | h1 two lines, board stacks into roster/slip columns, no overflow; full page shots/768.png opened. |
| 390×844 | shots/390-top.png | h1 two lines, five-second line, CTA, board header and roster prompt above the fold; full page shots/390.png under 8 screens. |

Artifact states captured at both widths in shots/states/ (1-default, 2-dana, 3-marcus, 4-marcus-approved, 5-changed-declined, 6-reset, managers-changed, 390-viewport-after-name-tap, 390-viewport-after-approve, 390-reduced, 390-nojs).

## Checker result
- JSON: check.json
- Failures fixed: LY-06 (focus under sticky header at 390: header made static on phones, scroll-margin added); CO-01 (red marker text over a strike line in the whiteboard drawing: strikes moved, red darkened); MB-10 (phone page 8,265px: plan drawing hidden under 700px where its labels were unreadable, duplicate FAQ answer removed, copy trimmed, now about 6,600px); AX-11 (SVG annotations overlapping under text spacing: repositioned); HR-08 (holes beside the h1: status card and nurse line fill them); TT-04 (hatched overlap band replaced with a solid tone); PF-07 (apple-touch-icon added, theme-color matches ground).
- Warnings kept and why: PS-06 lists the artifact's controls (Approve, Decline, Reset, steppers) as other actions; they are local demo controls, and the only conversion action, "Book a pilot call", is worded identically in all three places. ST-01: no price exists in the brief; the Q&A says cost and pilot terms are covered on the pilot call, the brief's stated path for a department-budget purchase.
- Optional tools (Impeccable detect, web-design-guidelines): not run: npx --no-install impeccable failed with "npm error network 'proxy' config is set properly" (not installed, no network).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, shots/390-top.png: subhead names hospital nursing units, nurses posting on phones, manager approving checked swaps. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 390-top: "a shift-swap app for nursing units; manager approves checked swaps; book a pilot call". |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The board is the swap with its rule check and the manager's decision, operable (shots/states). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the board, the limits sheet and queue, and the whiteboard/timeline/plan (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Union and final-call answers each appear once (limits line vs FAQ); final band no longer repeats the hero note. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists defaults and assumptions. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A and B scored on structure; A is the notation move. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table plus recipe departures line. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a shift-swap app for hospital nursing units". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | On a whiteboard or group text, swaps reach the manager after the shift; the h1 is false there. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Headings name the whiteboard, the night break and handoff, limits, the director/union rep/IT, one unit's swap rules. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | Recorded "none yet"; the hero's sample note uses floor phrasing ("Anyone want my night?") labelled as a written sample. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | Beside the button: pilot status and what the call covers (one unit's swap rules, fit). |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | h1 → whiteboard reaches you after → posted on a night break, settled before handoff → you set the limits → questions → bring one unit's rules to a pilot call. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content; no vh heights in CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; the only fact (three-month pilot on one med-surg unit) sits in the first screen; no quotes. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Teal only on CTAs, the selected nurse and checked results; amber-brown only on flags. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement: Deputy/When I Work sentence fails (no D/N 12s, charge marker or nurse-manager approval). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No toast, stat row or split frame from End Close; no halftone or pinned scroll from Meuze; no rotating headline or gradient card from Plena. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules are inside @media (hover:hover) and (pointer:fine); no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Approved cell: Approve tap → confirms where the taker landed → static outline under reduced motion → 260ms cubic-bezier(.2,.7,.2,1) scale .92→1. Controls: press → feedback → none under reduced motion → 150ms ease-out scale .97 and colour. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the board stacks roster, verdict, checks, manager buttons; roster keeps 44px+ name targets (shots/states/390-*). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #verdict and #queue-status are role=status, aria-live=polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Hours, limits, times and dates sit inside artifacts labelled "Sample…, written for this page"; "three months" is from the brief. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Board header, limits sheet header, queue caption, timeline and plan each carry a sample label. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Book a pilot call → https://swaptide.example/pilot; demo buttons change the board; nav anchors exist. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Opened 1440/768/390 top and full captures and the states in shots/states/. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section; revision/before and revision/after. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass list below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | All checks answered; checker has no block failures. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | n/a: the board has no free-text input; it opens on a chosen nurse (Jo) | Default state is a complete, valid result | n/a |
| Out of range | Pressed − on "shifts in a row" three times from 3 and + on weekly hours five times from 48 | Stopped at 2 and 60 and said "Sample range is 2 to 4 in a row." / "…36 to 60 hours." | pass |
| Nonsense | Approved a swap that breaks a rule (Marcus, no charge nurse left) | Approval allowed and labelled "flag noted": the demo never decides for the manager | pass |
| Repeat | Clicked Approve twice, then Decline after Approve | "Already approved. Pick someone else or Reset…"; then switched to declined with grid updated | pass |
| Reset | Reset after a declined Marcus swap | Jo selected, decision cleared, grid back to default, focus stays on Reset | pass |
| Keyboard only | Arrow keys in the roster radios, Enter on Approve, Space on Reset | Selection moved to Dana and recomputed; focus never left the control | pass |
| Phone | Tapped names and Approve at 390 | Verdict in view after each tap (694–762 and 461–553 of 844), shots/states/390-viewport-*.png | pass |
| Reduced motion | Loaded with reduced motion, picked Dana, approved | Same states, no scale on the cell or buttons (shots/states/390-reduced.png) | pass |
| Visitor's own input | Picked each of the three nurses and both decisions in every order | Each combination gives consistent cells, hours and verdict text | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the board is the operable product loop. |
| Thick coloured stripe repeated on cards | Warn | Not matched; the amber underline appears only on Dana's run of nights as state. |
| Every section has same width and padding | Warn | Not matched: split drawing, full-width timeline, rules split, two-column Q&A, navy band. |
| Small tracked-caps label above every heading | Warn | Only "19:00 · HANDOFF" on the final band, a real time in the sequence. |
| Pattern fill as filler | Warn | Fixed: hatched overlap band replaced with a solid tone (TT-04). |

## Self-review
| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | — | 8 |
| Fit | 8 | — | 8 |
| Distinctiveness | 7 | Make the notation itself the interface rather than a grid next to a separate chip picker, so the page is "the one where you tap the schedule". | 8 |
| Proof | 8 | — | 8 |
| Craft | 7 | Remove the separate chip row that duplicated the roster names and fix the cramped cell tags ("swapped" wrapping in a 44px cell). | 8 |
| Mobile | 6 | Put the choice inside the roster so the control starts at the fold and the verdict sits directly under the roster, not 1,000px down behind a chip row. | 8 |
| Honesty | 9 | — | 9 |
| Interaction | 8 | — | 8 |
| Copy | 8 | — | 8 |
| First screen | 7 | On the phone, show a control of the artifact at the fold, not only explanatory text. | 8 |

- Designer's one-sentence read: A recognisable D/N roster at heroic scale gives the page a point of view from the ward, and the whiteboard and unit plan carry the same graphic language; the lower sections are calm and plain by choice.
- Buyer's and founder's one-sentence read: As a nurse manager I can see that flagged swaps still come to me, that limits are mine to set, and exactly what the pilot call is for; nothing claims results we do not have.
- Engineer's one-sentence read: Static HTML with native radios and buttons, no dependencies, works from disk, state rebuilt from one data object; the static markup matches the JS default for no-JS visitors.

## Structural revision
- Weakest explanation or most template-like decision: The phone artifact: a separate three-chip "Who picks it up?" row sat below the checks, so on a phone the live loop began about 1,000px down and the roster names duplicated the chips.
- Change made (structure, not styling): The roster became the control: each candidate's row header is now a native radio with a 50px target, the chip fieldset was removed, a "Tap a name to have them pick it up." prompt heads the table, and the verdict, checks and manager buttons follow directly under the roster.
- Before: revision/before/390-1-default.png
- After: revision/after/390-1-default.png
- Score after the change and what still keeps it from a 10: Hero composition 8/10 (Fit 8, Identity 9, Originality 8, Composition 8, Proof 8). Still short of 10: on a phone the verdict is below the first screen until the visitor scrolls, and the desktop slip leaves some empty space under the manager buttons.
- Removal pass (each decorative element → its job, or "removed"): status card → product status; logo mark day/night halves → brand and D/N notation; whiteboard magnets, sticky notes and tray → recognise the current alternative; numbered pins → tie problems to spots on the drawing; plan door swings and beds → read as a real unit plan; amber run underline → state (4 in a row); hatched report band → removed (replaced by solid tone); red row-strike on the printed sheet in the drawing → shows the board's state of mess; hero chip row → removed in the revision.

## Remaining weaknesses
- What a buyer still cannot judge: pricing, pilot terms, data handling and security, how nurses install it, and any measured outcome; these are deferred to the pilot call and listed under To confirm.
- What was not verified: the og.png share card on a public URL (absolute og:image points at swaptide.example, which the client must host); real-device Safari rendering; the pilot destination itself, which is unreachable offline.

## Status
DONE
