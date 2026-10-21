# DESIGN-RECORD

Swaptide landing page, built in Build mode with startup-landing-design (ours11). Page: `index.html` (opens from disk; fonts in `fonts/`, icons and `og.png` beside it). Working scripts used for screenshots live in `work/`.

## Product interpretation
- Audience, category, business model, brand constraints: Nurse managers and directors of nursing (buyers, department budget) and the nurses on their units (daily users, on a break); a shift-swap app for hospital nursing units; sold to the unit/department; no existing brand, so name, mark and palette were made here.
- Promise (who / what changes / how): For nurse managers, swaps stop arriving after they have happened: nurses post and pick up swaps on their phones, skill mix and hours limits are checked, and the manager approves or declines each in one tap.
- Five-second line, quoted as shown in the first screen (who + what): "A shift-swap app for hospital units: nurses trade shifts on their phones, and you approve or decline each one in a tap."
- Current alternative, including doing nothing: the whiteboard by the break room, group texts, and swaps the manager learns about after they have already happened (doing nothing = keep living with that).
- The one advantage only this product has: the staffing rules (skill mix, hours limits) are checked before the swap reaches the manager, and the decision is one tap on a phone; the whiteboard and group text check nothing and route nothing.
- Category frame (existing, subcategory or new) and what it costs to teach: existing subcategory "shift-swap app" inside nurse scheduling; costs nothing to teach, so the five-second line says it plainly.
- Best-fit customer, and who it is not for: a nurse manager running a 12-hour-shift inpatient unit (med-surg first) where swaps happen by whiteboard and text; not for anyone looking for payroll, a full scheduling/rostering suite, or a tool that approves swaps automatically.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief supplies no interview notes or quotes. The whiteboard note "Can anyone take my Thu N?? – P" on the page is written for the page in the trade's shorthand, not a quote.
- Biggest reason not to click, and the line that answers it: a manager fears a sales call that ignores their unit's rules and union agreement; the line beside the button says "For nurse managers and directors. The call starts with one of your units and its staffing rules."
- Conversion action and destination: "Book a pilot call" → https://swaptide.example/pilot (from the brief), in nav, hero, pilot section and footer.
- Visitor doubt 1 → artifact: "Will it actually check our rules, or just move the whiteboard to a phone?" → the signature demo: pick a taker, see skill-mix and hours checks flag or pass.
- Visitor doubt 2 → artifact: "Does software take the decision away from me (or the union agreement)?" → the demo's Approve/Decline belongs to the manager, a flagged swap can still be approved; the manager queue card; FAQ on auto-approval and union agreements.
- Visitor doubt 3 → artifact: "Will nurses really use it on a 12-hour shift?" → the 19:00–19:00 shift strip: posted on a 03:10 night break, picked up on a lunch break, approved at 13:05.

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (nobody answers during this task). Defaults I would have offered: (1) primary reader of the first screen = nurse manager, (2) demo scenario = a night shift with a charge-nurse constraint, (3) sample rules = one charge-trained RN per night and a 48 h weekly limit, (4) pricing = discussed on the pilot call.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the first screen addresses the manager ("you approve"); the sample unit rules and names are invented and labelled as samples; cost is not shown.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Cal.com (casebook, audited 2026-10-20): hero shows the booking page invitees will see; limit: its chips and dates looked clickable and did nothing | Show the finished artifact the reader recognises (here: the approved swap on a nurse's phone) and make the operable version respond locally | A booking-calendar frame inside a white card; static chips that pretend to be controls |
| Brand composition | Granola (casebook, audited 2026-10-20): one named sample note carried through before/during/after; characterful display face vs plain UI face | Carry one named sample (Priya's Thu 12 Nov night) through hero, demo, strip and queue; display face for claims, plain sans for product UI | Granola's serif, lime/charcoal bands, typing hero that ignores reduced motion |
| Counterexample | Plena Health (casebook, audited 2026-10-19): healthcare workflow page with a rotating headline, YC badge above h1 and illustrated mock screens; attractive for a clinical buyer | A clinical buyer needs the product's real decision, stated plainly and still; keep the h1 fixed and the proof concrete | Rotating headline, badge over the h1, marquee motion under reduced motion, lavender gradient hero card |

Departures from the workflow-theater recipe: H1 64px at weight 400 (recipe allows up to 88px at 500–800) because the first-screen rule asks for a lighter, calmer poster; display face is TeX Gyre Adventor, not one of the recipe's OFL grotesks, because those files were not available offline.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the 12-hour shift (07:00–19:00 / 19:00–07:00); 07:00 handover; the break-room whiteboard note "Can anyone take my Thu N??"; the charge nurse on nights; skill mix; weekly hours limits; the nurse manager's one-tap decision; the posted schedule's D/N shorthand; a 03:10 night break; the unit name on the door (4 West, Med-Surg); the dawn at the end of a night shift.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Swaptide" with seed 2062072642: generative, character, notation, canon.
- Chosen move and why, or canon and the buyer-risk reason: notation. Nurses and managers read the 12-hour shift as a 19:00–07:00 / 07:00–19:00 split every day; drawing the swap on that band (night half dark, day half light) is recognisable before a word is read. A character was rejected for an accountable clinical buyer; a generative system had no product rule worth animating.
- Idea sentence ("[inventory thing] becomes [the move]"): The 12-hour shift band (night half, day half, the 07:00 handover) becomes the notation every swap is drawn on, from a 03:10 break post to a 13:05 approval.
- The same sentence with the nearest competitor, and why it fails: "In a general scheduling suite, the 12-hour shift band becomes the notation every swap is drawn on, from a 03:10 break post to a 13:05 approval": it fails because those suites sell rostering grids and payroll, and their swaps are not posted and approved inside a break; the whiteboard (the real alternative) has no checks or approval to draw.
- Statement level (quiet, bold or loud) and why: bold (dealer default). The first screen owns it (night-to-dawn sky with the shift times, phone with the night shift band, the shift ribbon); sections below stay calm and carry proof; the band recurs in the strip section.
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): left column ≤560px: h1 "Shift swaps you see before they happen." (3 lines, 64px), the five-second line, "Book a pilot call" + "Try a sample swap", one line beside them; right, bleeding off the edge: the night-to-dawn panel (~44% of the screen) holding a tilted phone with Priya's approved night swap and the "Mon night into Tue" shift ribbon. The operable demo, sample label, rules and manager detail moved to section two and below. Refuses: centred headline with two buttons over a framed screenshot.
- First viewport at 390: wordmark + Menu pill; h1 in three lines; five-second line; two full-width buttons; one line; the top of the night panel with the phone showing "Thu 12 Nov, Night shift 19:00–07:00".
- Name test (the one with the …, eight words or fewer): the one with the night-shift phone at dawn.

## Hypothesis
- Archetype and why: workflow theater: a swap is a multi-step operational decision (post, pick up, checks, manager decision) with one recurring work item.
- Type roles, faces and why they fit this product: display = TeX Gyre Adventor (GUST font licence, geometric, 400 for headlines, 700 for the wordmark), a warm 1970s-signage geometric that reads like hospital wayfinding rather than HR software; text and UI = Inter 400/600 (OFL) for legibility in small product UI, chosen as body only. Both shipped as subset .woff files in `fonts/`.
- Composition and grid: 1200px container; editorial split hero with the picture bleeding off the right edge; then demo (two nested cards), full-width strip card, split manager section, dark pilot band; one column below 760px.
- Ground, colour and material, and why this ground: pale silver ground (#F4F5F7) for a work tool used under fluorescent light; night indigo (#1A2046) and dawn peach carry the 12-hour shift; coral marks the swap and selection; green/amber/red only for check and decision states. Nested shell-and-core cards with wide faint shadows.
- Signature artifact and its local behaviour: "Try it: hand off Priya's Thursday night": one radio choice of four nurses (Dana, Marcus, Jo, Sam) re-runs two sample checks (skill mix, hours limit) and updates the verdict; Approve and Decline set Renee's decision and toggle off on a second press; changing the taker resets the decision. Everything runs locally.
- Signature on a phone (where the result shows after a tap): takers become a 2×2 grid; the verdict (role=status) sits directly under the grid, then the two checks, then Approve/Decline; the dark shift header is hidden on phones to keep the loop short.
- Sample audit (counts, weekdays, states and stated rules agree): Tue 10 Nov 2026, Thu 12 Nov, Sat 14 Nov, Sun 15 Nov all checked against the 2026 calendar; Mon 9 to Tue 10 Nov strip; 12 h shifts so 24→36, 48→60 (over by 12), 12→24; rule "48 h in a week" enforced in the demo; Priya is the night's only charge-trained RN, so Marcus and Sam trip skill mix; same times (03:10, 12:40, 13:05) in hero, strip and queue.
- To confirm with the client (claims and terms kept off the page): who sets the staffing rules and which ones exist beyond skill mix and hours; whether Swaptide notifies nurses after a decision; whether nurses use personal phones; pilot length, effort and price; data storage and integrations with scheduling systems; that the og image should be hosted at https://swaptide.example/og.png (file supplied as `og.png`); the "4 West" unit name and all people are invented samples.
- Section sequence, with one section deliberately omitted: hero → try it (signature demo) → posted on a night break (shift strip, before/after) → every swap waits for your tap (manager) → pilot call + FAQ → footer. Omitted: a feature-card grid and a testimonial/logo row (no supplied proof).
- Primary interaction and motion purpose: choosing a taker and making Renee's call; motion only confirms change (a 320ms opacity pulse on the verdict and checks) and introduces the hero once.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis: what the hero picture centres on.
- Category default and anti-default this plan avoids: default = white/teal healthcare SaaS with a stock photo of a smiling nurse at a tablet and a dashboard screenshot; anti-default = dark terminal-style "ops" page or cream-and-serif editorial. The plan uses a pale silver ground with a night-to-dawn picture and a geometric display face.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Notation (chosen): split hero; night-to-dawn panel with a phone showing the approved night swap and a card with the swap's times | Does it understand a 12-hour shift and keep the manager in charge? | 8 | 8 | 7 | 8 | 7 | The shift band read instantly without labels; a real product screen instead of a drawn one |
| B | Canon-leaning: centred headline over a wide manager-queue screen with three swaps to decide | What will I see as the manager? | 7 | 5 | 4 | 6 | 7 | A visual that nobody else in scheduling software could use |

- Chosen variant and why: A, because it carries the dealt notation and the "12-hour shift, not HR software" ask; B's queue moved lower as the manager section's card.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Redrawn phone chrome | warn | Kept: the first-screen rule welcomes a device frame, and nurses use the product on a phone on break; the screen holds real fields, not decoration. |
| Gradient wash in the hero | warn | Kept with a job: it is the sky from 19:00 to the 07:00 dawn of a night shift, labelled with those times. |
| Shadow as only depth | warn | Depth also comes from overlap, rotation and nested shells. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Poster reads in one group; picture ~44% of screen bleeds right; h1 three lines; no clipped text; next state of demo in shots/demo-1440-*.png (all 7 states) and full page shots/1440.png |
| 768×1024 | shots/768-top.png | Hero stacks text over picture; strip switches to vertical below 900px after the 768 full page showed colliding labels (fixed); full page shots/768.png |
| 390×844 | shots/390-top.png | Headline, sentence, two buttons and top of the phone in one screen; approved banner fits panel; menu open shots/390-menu-open.png, no-JS shots/390-no-js.png, reduced motion shots/390-reduced-motion.png, demo states shots/demo-390-*.png |

## Checker result
- JSON: check.json
- Failures fixed: AX-07 (font preload blocked by CORS from file://, removed); MB-05 (no-JS phone menu covered the headline: header becomes static and wraps links without JS); MB-07 (verdict off-screen after a phone tap: verdict moved directly under the taker grid); HR-07 (demo too far down at 390: hero picture shortened, section padding tightened); LY-06 (smooth scrolling left focused Approve off-screen: smooth scroll removed); CO-01 (pseudo-elements and reveal opacity confused contrast sampling: notch, sun and glow made real nodes, reveals made transform-only).
- Warnings kept and why: PS-06, the checker counts the demo's Approve/Decline and the skip link as actions; the only conversion action is "Book a pilot call", worded identically everywhere. HR-08, the 1440 space between the floating nav and the headline is the 96px+ of air the first-screen rule asks for, with the picture filling the right. ST-01, no price exists in the brief; cost is disclosed as "How long the pilot runs and what it costs" on the pilot call agenda. LY-05, nested shell-and-core cards are the visual system's card construction. CO-02, the one radial "sun" in the hero sky is the dawn at the end of the night shift, not a glow around UI.
- Checker summary: 85 checks run, 0 not run, 0 block failures, exit 0. Other before/after pairs: shots/before-1440-top.png → shots/1440-top.png, shots/before-768-top.png → shots/768-top.png.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and the tools are not installed; installing packages was not allowed for this task.

## Checklist
The other 85 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "hospital units", nurses trade on phones, "you approve or decline each one in a tap", line beside names managers and directors |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 1440-top: a shift-swap app for hospital units; managers approve swaps before they happen; button books a pilot call |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero picture is the product's swap screen in its approved state plus the swap's timeline ribbon |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the demo, the manager queue/FAQ and the shift strip (Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Demo = checks and decision; strip = timing on a 12-hour shift and the old way; manager = control and limits; pilot = status, call agenda, FAQ |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four defaults; no answers; logged |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (dealt notation) and B scored on emphasis; defaults named and avoided |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Cal.com, Granola, Plena Health; recipe departures listed under References |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "A shift-swap app for hospital units" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Whiteboard swaps are seen after they happen, so "Shift swaps you see before they happen" is false for the alternative |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1, "Try it: hand off Priya's Thursday night", "Posted on a night break, approved by lunch", "Every swap waits for your tap", "Start with one unit and a pilot call" each pass picture + falsifiable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | Recorded as none yet; the hero adapts the brief's own phrase "swaps that reach the manager after they have already happened" |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "For nurse managers and directors. The call starts with one of your units and its staffing rules." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings alone: swaps seen before they happen → try handing off a night → posted on break, approved by lunch → every swap waits for your tap → start with one unit and a pilot call |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero-grid` min-height uses min(780px, 100svh − 120px); phone hero sized by content |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | Only supplied proof is the three-month single-unit pilot, stated beside the pilot call with "no measured results we can share yet"; no quotes |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Coral marks the swap arrow, the selected taker and the headline's key word; green/amber/red only for check and decision states |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The night-shift band, charge-nurse rule, break-time timeline and manager's one-tap call are this product's; see Statement |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No booking page or calendar (Cal.com), no serif or lime bands or typing note (Granola), no rotating headline, badge or lavender card (Plena) |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Arrow nudge is inside `@media (hover:hover) and (pointer:fine)`; staggers 70–80ms; nothing blocks input |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Remaining weaknesses → Motion contracts |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Demo takers become a 2×2 grid with verdict directly under; strip turns into a vertical timeline below 900px; queue rows restack |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#verdict` has role=status and aria-live=polite and states every result |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All hours, times and dates sit inside labelled samples; "three months" and "one medical-surgical unit" are from the brief |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample unit and nurses, written for this page" at the top of the demo; "Sample swap on 4 West…" on the strip; "Sample queue" on the manager card; footer repeats it |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Book a pilot call" links to https://swaptide.example/pilot (brief); "Try a sample swap" scrolls to the working demo; nav anchors land on their sections |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All top and full captures opened; 768 full page reviewed (led to the strip fix); demo states 1–7 captured at 1440 and 390 |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Hero picture recomposed; shots/before-*-top.png vs shots/*-top.png; scores in Self-review |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | See Removal pass |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Checker clean, nothing unverified; status DONE |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | n/a: the artifact has no text field; the radio group always has one taker selected | Default state is Dana with both checks passing, a complete result | n/a |
| Out of range | Picked Jo (48 h this week) | Hours check flags "60 h with this shift. Limit 48 h. Over by 12 h."; verdict says Jo is flagged for hours; Approve still available | pass |
| Nonsense | Picked Sam (LPN for an RN slot), then approved | Skill mix flag explains the RN slot and the lost charge RN; approval reads "Renee approved with the skill mix flag in front of her" | pass |
| Repeat | Pressed Approve twice, Decline twice, switched takers quickly | Second press toggles the decision off back to waiting; switching taker resets the decision; no stale text (demo-*-7 capture) | pass |
| Reset | Re-selected Dana after decisions | Returns to the default state: both checks pass, waiting for Renee | pass |
| Keyboard only | Tab into the radio group, arrow keys between nurses, Tab to Approve/Decline, Enter/Space | Selection and buttons work; focus ring visible; focus never drops to body (AX-12 pass) | pass |
| Phone | 390×844: tapped each nurse and both decisions | Verdict sits directly under the taker grid and stays on screen (MB-07 pass); all targets ≥44px (MB-09 pass) | pass |
| Reduced motion | Loaded with prefers-reduced-motion: reduce | Everything in place at once; verdict/check pulse disabled; content identical (shots/390-reduced-motion.png, MO-01 pass) | pass |
| Visitor's own input | Chose a combination of taker and decision of their own | Each of 4 takers × 3 decision states renders a distinct, consistent verdict | pass |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Redrawn phone chrome | warn | Stays: the product is a phone app used on break; the frame holds real fields at legible size. |
| Gradient wash behind the hero picture | warn | Stays: it is the night-to-dawn sky of a 19:00–07:00 shift, labelled 19:00 and 07:00. |
| Every section same width and padding | warn | Avoided: hero bleeds right, demo and strip are wide cards, manager is a 5/7 split, pilot is a full-bleed dark band. |
| Built page indistinguishable from the last one | warn | No earlier page from this skill in this project; house-style pass: chose a geometric display face and a night/dawn palette rather than a cream ground or Inter display. |

## Self-review
Score from the screenshots and the operated page, as the strictest of a senior designer, the brief's buyer and founder, and the engineer who maintains it. 1–10; 10 only when nothing is left to improve. "After" is the score once the structural revision is rendered.

| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 8 | | 8 |
| Distinctiveness | 6 | The 12-hour band has to be in the poster itself, not only one section down; the hero read as "phone over a gradient" with a ticket that repeated the checks | 7 |
| Proof | 7 | A real product screen or supplied pilot detail; the page can only show a labelled sample | 7 |
| Craft | 7 | At 390 the floating ticket covered the phone's key fields; at 768 the strip labels collided | 8 |
| Mobile | 6 | Phone hero showed a card on top of a card; make the phone alone carry the approved state; vertical strip on tablets | 8 |
| Honesty | 9 | | 9 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 7 | One picture, not two overlapping cards that both say "checked"; the approved state visible at 390 | 8 |

- Designer's one-sentence read: A calm, confident poster with a real point of view (the night shift ending at dawn); the strip is the strongest section, and the hero needed the same notation instead of a duplicate checklist card.
- Buyer's and founder's one-sentence read: As a nurse manager I can see what it does, that I keep the decision, that it doesn't touch payroll or my union agreement, and what the call is for; I'd want to see pricing and data handling, which the page leaves to the call.
- Engineer's one-sentence read: Single static file, fonts shipped, no network, keyboard and no-JS paths work; the demo logic is one small data table and a render function.

## Structural revision
- Weakest explanation or most template-like decision: the hero picture: a floating "Before Renee saw it" ticket that repeated the phone's checks, covered the phone at 390, and left the page's own notation (the 12-hour band) out of the poster.
- Change made (structure, not styling): replaced the ticket with a shift ribbon card (the Mon 19:00 → Tue 19:00 band with night and day halves and three pins: 03:10 posted, 12:40 picked up, 13:05 approved) so the hero and the strip section share one notation; on phones removed the overlapping card entirely and recomposed the phone screen so the approved state shows inside the panel; below 900px the strip becomes a vertical timeline.
- Before: shots/before-390-top.png
- After: shots/390-top.png
- Score after the change and what still keeps it from a 10: Distinctiveness 7, Mobile 8, First screen 8; still short of 10 because the product screen is a drawing of a sample, not the real app, and there is no supplied proof beyond the three-month pilot.
- Removal pass (each decorative element → its job, or "removed"): night-to-dawn sky → the 12-hour night shift ending at handover; sun radial → dawn at 07:00 (kept, single); pilot section radial glow → removed (no job); phone frame → nurses use it on a phone on break; ribbon band → the shift notation; coral diamond before sample labels → marks every sample label consistently; whiteboard sticky note → the old way in the trade's shorthand; card shadows → lift the two artifacts (queue, hero) only; floating ticket card → removed in the revision.

## Remaining weaknesses
- What a buyer still cannot judge: price, pilot length and effort, where scheduling data lives, what it connects to, and how rules are configured; all are left to the pilot call and listed under To confirm.
- What was not verified: behaviour on real iOS/Android browsers (only Chromium rendered); the Approve/Decline wording against the real product; Impeccable detect not run (not installed, no network).
- Motion contracts: (1) Hero entrance: trigger page load; purpose introduce the poster once; fallback everything visible (no-JS and reduced motion); 800ms, cubic-bezier(.16,1,.3,1), 80ms stagger, transform plus text opacity from .6. (2) Strip placement (the signature scroll moment): trigger IntersectionObserver once at 12% into view; purpose place the swap's events on the shift band in time order; fallback band and events static; band 600ms opacity, events 700ms translate, 70ms stagger, same ease. (3) Manager queue rows: trigger IntersectionObserver once; purpose bring the three swaps in as a queue; fallback static rows; 700ms translate, 70ms stagger. (4) Demo result pulse: trigger a taker or decision change; purpose show which parts changed; fallback instant text change; 320ms opacity .55→1, same ease, disabled under reduced motion. (5) Button press and arrow nudge: trigger press/hover (hover behind pointer:fine); purpose affordance; fallback none needed; 150–200ms. (6) Menu icon to X: trigger menu toggle; 250ms transform.

## Status
DONE
