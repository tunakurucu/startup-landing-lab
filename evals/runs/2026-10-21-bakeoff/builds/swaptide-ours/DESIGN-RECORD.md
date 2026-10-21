# DESIGN-RECORD

Page: `index.html` (static, opens from disk, no network). Skill mode: Build. Source: `BRIEF.md` (the only project document).

## Product interpretation
- Audience, category, business model, brand constraints: Buyers are nurse managers and directors of nursing, paying from a department budget; users are nurses on the unit, on their phones and often on a break. Category: shift-swap app for hospital nursing units. No brand assets supplied. Constraints: no payroll claim, nothing implying it overrides union agreements or the manager's decision, no pilot results, tone of "a 12-hour shift, not HR software".
- Promise (who / what changes / how): Nurses on a hospital unit post and pick up shift swaps from their phones; the swap reaches the unit manager with skill-mix and hours-limit checks already run, and she approves or declines it in one tap, before the shift happens.
- Five-second line, quoted as shown in the first screen (who + what): "A shift-swap app for hospital nursing units. Staffing rules get checked first; the unit manager approves or declines in one tap."
- Current alternative, including doing nothing: The whiteboard by the break room, group texts, and swaps that reach the manager after they already happened (all named in the brief).
- The one advantage only this product has: The staffing rules (skill mix, hours limits) are checked before the manager sees the swap, and the manager decides each swap in one tap, so the swap is settled before it happens.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing subcategory, "shift-swap app for hospital nursing units"; costs nothing to teach because nurses already swap shifts.
- Best-fit customer, and who it is not for: A nurse manager of an inpatient unit running 12-hour shifts whose swaps happen on a whiteboard or in group texts. Not for anyone looking for payroll, a full scheduling or timekeeping system, or automatic approval without a manager.
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief gives no interviews; the page adapts the nurses' own vocabulary instead (7p–7a, twelves, charge nurse, handoff, on break), marked as my inference.
- Biggest reason not to click, and the line that answers it: "Has this ever run on a real unit?" Answered beside the button: "Piloted on one medical-surgical unit for three months."
- Conversion action and destination: "Book a pilot call" → https://swaptide.example/pilot (supplied by the brief); same label in header, menu, hero, pilot section and footer.
- Visitor doubt 1 → artifact: "What does a swap actually look like for a nurse?" → the working sample swap in section two (pick who covers Priya's Thursday night).
- Visitor doubt 2 → artifact: "Does it take my decision away or bend the union rules?" (manager) → the split "Swaptide does / Stays with you" in the managers section, and the demo's Approve/Decline on every swap, including flagged ones.
- Visitor doubt 3 → artifact: "Does this fit how a 12-hour night really runs?" → the night-shift ruler (7p to 7:30a) with the swap posted on one break, picked up on another, approved at handoff.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (nobody answers during this task). Defaults I would have offered: (1) conversion action = "Book a pilot call" at the supplied URL; (2) the pilot's length and cost stay off the page; (3) sample names, unit and rule values are made up and labelled.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: Night shift 7p–7a with a 7:30a overlap; rule values in the demo (charge-trained RN on the night, at most three twelves in a row, 10 hours off) are sample settings, labelled as such; a flagged swap still goes to the manager, who may approve or decline it.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Granola (casebook, audited 2026-10-20): one named meeting note recurs before, during and after a meeting. Limit: hero demo ignored reduced motion; meaning sat in images that failed to load. | Carry one named sample item (Priya's Thursday night, Priya → Dana) through hero, demo, night ruler and share card, so the visitor follows one story. | Its serif display, lime and charcoal bands, typing animation and app-window chrome. |
| Brand composition | Cal.com (casebook, audited 2026-10-20): the hero shows the artifact the user's customers will see (a booking page) beside the promise. Limit: its booker chips looked clickable and did nothing. | Show the finished output the buyer cares about (the approved swap card, as the manager sees it) as the hero picture; keep all controls in the working demo below, where every one responds. | Its framed white card hero, review-star rows, two sign-up buttons and month grid. |
| Counterexample | Deel (casebook, audited 2026-10-20): HR platform hero with a gradient card, task-picker tiles that changed nothing, offer bar, rotating quote, numeric proof bands. | The brief says "not like HR software": no gradient card, no task tiles, no numeric proof bands, no rotating quotes. Constraint retained: one action, nothing moves by itself. | Everything: gradient panel, photo of a person at a laptop, marquee, offer bar, stats. |

Departures from the workflow-theater recipe: one face instead of display/body/mono (no mono at all; times use tabular figures); H1 at 56px rather than the recipe's 88px top, following the first-screen rule; a dark band is used only for the night section, where it means night.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the break-room whiteboard of shifts; dry-erase marker strike-throughs; the sticky note asking for cover; 7p–7a and 7a–7p shifts; "twelves" in a row; the charge nurse star; handoff at 7; breaks taken between call lights; the night sky from dusk to dawn; the manager's one-tap approve; the unit name on the board (4 West); group texts at 2 a.m.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Swaptide" with seed 2062072642: generative, character, notation, canon.
- Chosen move and why, or canon and the buyer-risk reason: Notation (the audience's own format). Every nurse reads the unit's shift board daily, so the hero is that board, with the swap struck through in red marker, and the phone in front showing the same swap settled. Character was rejected (managers accountable for staffing risk; a mascot would read childish); generative was rejected (the rule has no beautiful hidden mechanism to draw).
- Idea sentence ("[inventory thing] becomes [the move]"): The break-room shift whiteboard becomes the hero notation: the struck-through Thursday night on the board, settled on the phone in front of it.
- The same sentence with the nearest competitor, and why it fails: "The break-room shift whiteboard becomes the hero notation for a general workforce-scheduling suite": it fails, because a suite's job is building the schedule, not settling a swap between two nurses before handoff; the struck name and "approved 7:04a" make no sense there.
- Statement level (quiet, bold or loud) and why: bold. The first screen owns the statement (board plus phone); everything below is calm and carries proof, because the buyer is a manager accountable for staffing.
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): Left column (620px): two-line headline at 56px, five-second line, "Book a pilot call" (filled) and "Try a swap" (quiet), one line of proof. Right: the hero picture, about 46% of the screen: the shift whiteboard tilted behind, a phone in front showing "Approved · Thursday 7p–7a · Priya → Dana · 3 checks · Kim approved 7:04a", bleeding past the fold. The working demo, sample label and rules moved to section two. Refuses: centred headline over a browser screenshot.
- First viewport at 390: Headline in three lines at 40px, the sentence, both buttons side by side, the proof line, then the top of the picture (board cropped left, phone in front) before the fold.
- Name test (the one with the …, eight words or fewer): the one with the whiteboard and the phone.

## Hypothesis
- Archetype and why: Workflow theater: one swap moves through post, check, decision; the value is the sequence and who decides.
- Type roles, faces and why they fit this product: One family, the platform UI face (`system-ui`: SF Pro on Apple phones, Segoe UI on Windows, Roboto on Android; Inter-like on this Linux build machine), at 650 for display and 400 for text, tabular figures for times. Reason: nurses meet the product on their phones, and no licensed font files could be shipped from this build environment (see To confirm). No monospace anywhere.
- Composition and grid: 1320px wrap; hero split 620px copy / picture; demo as one panel with three columns (post and picks / checks / Kim's phone); night section as a full-width ruler; managers as a two-part split with an arrow; pilot as a two-column card.
- Ground, colour and material, and why this ground: Whiteboard white with a cool green whisper (#f3f6f5) because the product replaces a whiteboard; ink #13201d; one action and state colour, deep green (#0d6a4f), for the button and "passed/approved"; marker red only for flags; night navy only for the night section, where the sky gradient is the time of night.
- Signature artifact and its local behaviour: "Pick who covers Priya's Thursday night": four people as radio cards; each pick reruns three sample rules (charge-trained RN, at most three twelves in a row, 10 hours off) and shows pass/flag with a reason; Kim's card shows the summary with Approve and Decline; the Thursday-night crew updates; Start over resets.
- Signature on a phone (where the result shows after a tap): The verdict line and the three checks sit directly under the 2×2 pick grid; Kim's decision line and the crew list sit directly under Approve/Decline; Start over sits under the crew list, next to what it resets.
- Sample audit (counts, weekdays, states and stated rules agree): Board, demo, hero phone, ruler and share card agree: Priya is charge on Tue and Thu nights; Dana works Mon and Tue nights, off Wed (Thursday is her 1st in a row; off from Wed 7:30a); Marcus Mon–Wed nights (Thursday 4th in a row); Ren Tue–Wed nights, not charge-trained, Thursday 3rd in a row; Jo works Thu 7a–7p and Fri night (3 twelves in a row counting Friday; no rest). Thursday night crew Priya/Sam/Lee/Ana, none of the others charge-trained. Nobody on the board breaks the three-in-a-row rule. No dates with weekdays are used.
- To confirm with the client (claims and terms kept off the page): Pricing and how cost is disclosed (no price on the page; ST-01); pilot length, effort and what the call involves; where data is held and whether it connects to a scheduling system; whether nurses get notifications; how a unit's rules are entered; that a flagged swap can still be approved by the manager; hosting of `og.png` at https://swaptide.example/og.png; the licensed display and text face to ship as woff2 (system stack used here).
- Section sequence, with one section deliberately omitted: Hero → Try a swap (demo) → A night shift (ruler + what it replaces) → For managers (does / stays with you) → Pilot → footer. Omitted: a testimonial or results section, because there are no shareable results.
- Primary interaction and motion purpose: Picking a person and deciding as Kim; motion only confirms state (short swaps) plus one entrance and one ruler draw.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Emphasis: A puts the trade's notation (whiteboard and phone) as the picture; B puts the 12-hour night ruler as the picture.
- Category default and anti-default this plan avoids: Default: blue or teal gradient, stock photo of a smiling nurse with a tablet, "Empower your workforce", three feature cards. Anti-default: dark "night mode" neon page or cream editorial serif. The plan uses a whiteboard-white ground, one green, the trade's own board and a real swap card.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Split poster: copy left; shift whiteboard with Priya struck out, phone in front showing the approved swap with its three checks | What it replaces and what the result looks like | 8 | 8 | 7 | 7 | 7 | A whiteboard drawn with real hand-lettering and the phone at true size without crowding the board |
| B | Split poster: copy left; a large dusk-to-dawn ruler 7p–7a with the four swap moments as cards | It fits a 12-hour night | 7 | 7 | 7 | 6 | 5 | The result (approved swap) visible without reading four captions; it shows time, not the product |

- Chosen variant and why: A. It shows the finished result (the approved swap) and the thing it replaces in one picture; B moves to section three, where its captions can be read.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Redrawn phone chrome | Warn | Kept: the product is used on phones; the frame is minimal and holds a real-sized swap card; first-screen guidance welcomes a device frame. |
| One sans, one weight everywhere | Warn | Revised: one family but distinct roles (650 display, 400 text, tabular figures); the character comes from the board and marker drawing. |
| Plan matches the category default or the obvious anti-default | Block | Revised before code: no gradient/stock nurse (default), no neon night or cream serif (anti-default); recorded above. |
| Centred headline over a framed screenshot | Warn | Avoided: left-aligned copy with the picture beside it. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/after/1440-top.png | Poster reads: two-line headline, sentence, two buttons, proof line; board with struck Priya visible beside the phone; phone bleeds past the fold; no clipping. Full page in shots/after/1440.png. |
| 768×1024 | shots/after/768-top.png | Menu collapses (no wrapped nav), headline two lines, picture below the buttons with board and phone readable; full page shots/after/768.png checked: demo becomes two columns plus a full-width Kim row; night ruler turns vertical. |
| 390×844 | shots/after/390-top.png | Headline three lines, sentence, both buttons on one row, proof line and top of the picture in the first screen; full page shots/after/390.png is 6,295px (under 8 screens). |

Artifact states: shots/states/1440-state-*.png and shots/states/390-state-*.png (default, marcus, ren, jo, jo-approved, jo-declined, reset); reduced motion: shots/states/1440-reduced-night.png. Before the revision: shots/before/.

## Checker result
- JSON: check.json
- Failures fixed: MB-07 (live-region text off-screen at 390: one visually hidden announcer now speaks results, visible results sit beside each control, Start over moved under the crew list); CO-01 (whiteboard lettering sampled over the phone bezel: the board is now one SVG image with alt text on the picture); a checker runtime error caused by SVG text in the first screen (same fix); earlier PF-06 title order.
- Warnings kept and why: PS-06 lists the demo's own buttons (Approve, Decline, Start over), not competing conversion actions; the only conversion label is "Book a pilot call" everywhere. HR-08: the space under the poster group at 1440 (about 1032×240) is the requested breathing room; the next section's heading and the hero phone cross the fold. ST-01: no price was supplied; cost is left to the pilot call and listed under To confirm. LY-05: cards inside the phone frame and the post card inside the demo panel are the product's own surfaces, not decorative nesting.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and nothing installed may be added in this environment (`npx --no-install impeccable` is not present).

## Checklist
The other 83 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/after/1440-top.png and 390-top.png: headline (swap on break, approved by handoff) plus the five-second line naming nursing units, rule checks and one-tap manager approval. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 1440-top: "a phone app where nurses swap shifts and the manager approves; replaces the whiteboard". |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The phone shows the approved swap card with its three checks and Kim's approval, the same result the demo produces. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the demo, the does/stays-with-you split, and the night ruler (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Demo = how a swap is checked; night = timing within a 12-hour shift and what it replaces; managers = who decides, union, payroll, buyer; pilot = status and next step. The old Q&A that repeated the demo was replaced. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three defaults; no answers, defaults used. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A and B differ on emphasis; A is the dealt notation move; defaults recorded. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Granola, Cal.com, counterexample Deel; recipe departures listed under References. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "A shift-swap app for hospital nursing units." |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named above; "Approved by handoff" is false for whiteboard and group-text swaps, which reach the manager after the fact. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | H1 (picture, falsifiable, odd for whiteboard); "Pick who covers Priya's Thursday night" (picture, specific); "Posted on one break, picked up on another" (picture, falsifiable); "Every swap reaches you already checked" (falsifiable, odd for group texts); "Start with one unit, like the first one" (picture, falsifiable). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; hero adapts trade vocabulary (on break, handoff, 7p–7a). |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Piloted on one medical-surgical unit for three months." answers "has this run on a real unit"; cost is not supplied, so no cost line is invented. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: swap on break, approved by handoff → pick who covers Priya's Thursday night → posted on one break, picked up on another → every swap reaches you already checked → start with one unit. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero is sized by content and the picture's clamp height; no 100vh in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | pass | The only supplied proof (three-month pilot on one med-surg unit) sits beside the primary action and again in the pilot section; no quotes. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Green appears on the action buttons, "approved/passed" marks and the approved headline phrase; red only on flags and the marker strikes. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Board with Priya struck out, Thursday-night demo and night ruler belong to this product; swap test recorded under Statement. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No Granola serif, art panels or typing; no Cal.com framed card, chips or reviews; no Deel elements. Shared only: left copy with a product picture, which is common grammar. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover rules are inside `@media (hover:hover) and (pointer:fine)`; entrance stagger is 70ms; no input is blocked. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contract below under Hypothesis notes. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/states/390-state-*.png: demo becomes one column with the verdict under the picks and the decision under the buttons; night ruler turns vertical below 900px. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#announce` (role=status, aria-live=polite) speaks each verdict, decision and reset. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Times, counts and rule values live inside the labelled sample demo or the "sample night" ruler; "three months" is from the brief. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample unit. Names and rules are made up for this page; nothing is sent." at the top of the demo; "A sample night, written for this page." under the ruler; "Sample rules for this page" under the checks. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Book a pilot call" links to the brief's pilot URL; "Try a swap" and nav links jump to their sections; demo controls change the visible result. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All shots/after and shots/states images opened; 768 checked (menu, ruler fix). |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Managers section rebuilt from a Q&A list into a does/stays-with-you split; shots/before vs shots/after; scores below. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Status below reflects check.json and this list. |
<!-- checklist:end -->

Motion contract (MO-08):
- Hero entrance: trigger page load; purpose one calm arrival of the poster; headline, sentence, buttons rise 20px from opacity 0.6, picture from 0; 850ms, cubic-bezier(.16,1,.3,1), 70ms stagger; fallback and reduced motion: everything static and visible.
- Night ruler (the one signature scroll moment): trigger the ruler reaching 20% in view, once; purpose show the swap's journey across the 12 hours; the green progress line draws from 7p to 7a with transform scaleX; 1.8s, cubic-bezier(.16,1,.3,1); fallback (no JS, no IntersectionObserver, reduced motion): line drawn in full; the numbered markers and all text are always visible.
- Demo swaps: trigger a pick or decision; purpose confirm state; card borders and backgrounds change over 160ms ease-out, text swaps instantly; reduced motion keeps the same instant text.
- Button press: scale .97 over 150ms; hover darkening only on fine pointers.

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe).

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Looked for a way to submit with nobody picked | Not possible: the radio group always has one person (Dana by default) and Kim's card always names who | n/a: no free-text input; the choice cannot be empty |
| Out of range | Tried to reach a state the rules would refuse (Marcus 4th night, Ren not charge-trained, Jo no rest) | Each shows exactly one red flag with its reason; the swap still goes to Kim, who decides | pass |
| Nonsense | No text field to type into; tried clicking the hero phone and whiteboard | The hero picture has no controls and does nothing, by design | n/a: no text input; the hero picture is a still |
| Repeat | Double-clicked Approve; pressed Approve then Decline; picked another person after deciding | Same approved result (no duplicate); Decline replaces Approve; a new pick resets the decision to "Waiting for Kim" | pass |
| Reset | Pressed Start over after Jo was declined | Dana re-selected, checks pass, "Waiting for Kim", crew shows the swap to Dana waiting; focus stays on Start over | pass |
| Keyboard only | Focused the picks, Arrow Right, Tab, Enter | Arrow moved the pick to Marcus and reran checks; Tab reached Approve; Enter approved; focus never dropped (checker AX-12 pass) | pass |
| Phone | Operated every control at 390 (shots/states/390-state-*.png) | Verdict and checks visible under the picks; decision line and crew visible under the buttons; all targets 44px or more (MB-07, MB-09 pass) | pass |
| Reduced motion | Loaded with reduced motion and scrolled to the night section | Ruler drawn in full with all markers; no movement; demo identical (shots/states/1440-reduced-night.png; MO-01 pass) | pass |
| Visitor's own input | Chose each of the four people and both decisions as a manager would | Every combination gives a consistent verdict, Kim summary, outcome and crew list | pass |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Redrawn phone chrome | Warn | Stays: minimal frame, real-sized card, the product's own surface on the device it runs on. |
| Rounded cards on most surfaces | Warn | Radii are by role: 999px buttons, 12–14px product cards, 22–28px panels; the night section and the board use none. |
| Every section has same width and padding | Warn | Fixed in the revision: the managers section now uses a split with a dark half, the night section is full-bleed dark, the pilot sits in a card. |
| Section numbers on content that is not a sequence | Warn | Numbers appear only on the night's real time sequence and the pilot call questions. |

## Self-review
Score from the screenshots and the operated page, as the strictest of a senior designer, the brief's buyer and founder, and the engineer who maintains it. 1–10; 10 only when nothing is left to improve. "After" is the score once the structural revision is rendered.

| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 7 | The payer needs a view of their own control, not a Q&A list; state the union and payroll limits as boundaries of the product. | 8 |
| Distinctiveness | 7 | A display face with character shipped as files, and the whiteboard's lettering looking hand-drawn rather than set in the UI face. | 7 |
| Proof | 8 | | 8 |
| Craft | 7 | The managers section was a two-column FAQ with a sticky heading leaving a tall empty column; vary the composition and close the gap before the pilot card. | 8 |
| Mobile | 8 | | 8 |
| Honesty | 9 | | 9 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 7 | The 1440 poster has an empty band under the copy; the struck Thursday on the board was hidden behind the phone in the first render (fixed by recomposing), the phone should not be cut flat by the hero edge. | 8 |

- Designer's one-sentence read: A calm poster whose picture says "whiteboard out, phone in", a demo that respects the thumb, and one dark night band that earns its colour; the type is competent but generic because it is the platform face.
- Buyer's and founder's one-sentence read: As a nurse manager I understand in seconds that swaps reach me checked and that I still decide, and the pilot call is clearly the next step; as a founder I'd put it live, after swapping in a licensed display face and a price line.
- Engineer's one-sentence read: One static file plus an SVG, no dependencies, semantic radios and buttons, one live region, motion gated by reduced-motion; the sample data sits in one small JS object, easy to keep in step with the static fallback.

## Structural revision
- Weakest explanation or most template-like decision: The managers section was a generic FAQ (five question/answer rows beside a sticky heading), restating the demo and leaving the payer with no picture of what they control.
- Change made (structure, not styling): Replaced the Q&A list with a two-part split, "Swaptide does" (posts and pickups, the rule checks, sending each swap to you) → arrow → "Stays with you" (the decision, your union agreement, payroll) on an ink panel; moved the buyer line into the lead; cut the gap before the pilot card. Earlier in the same pass the hero was recomposed so the struck Thursday on the board sits beside the phone and the phone bleeds past the fold.
- Before: shots/before/1440.png
- After: shots/after/1440.png
- Score after the change and what still keeps it from a 10: Fit 8 and craft 8 (first screen 8). What keeps it from 10: the face is the platform UI face, not a shipped display face; the whiteboard lettering is typeset, not hand-lettered; there is no real customer voice yet.
- Removal pass (each decorative element → its job, or "removed"): whiteboard and sticky note → the alternative being replaced; red marker strikes → the old ways struck out (graphic language from the board); phone frame → the device nurses use; night sky gradient and moon → the hours of a night shift; green progress line → the swap's journey across the night; drop shadows on board and phone → separate the two layers of the picture; arrow between the split halves → where the product hands over to the manager. Removed: the sticky section heading in the managers section and the FAQ rules.

## Remaining weaknesses
- What a buyer still cannot judge: Price, pilot length and effort, data handling, and whether it connects to their scheduling system; all are left to the pilot call and listed under To confirm.
- What was not verified: The share card on a public URL (og.png must be hosted at https://swaptide.example/og.png); rendering on real iOS, Android and Windows devices, where system-ui resolves to each platform's face.

## Status
DONE
