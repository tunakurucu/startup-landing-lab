# DESIGN-RECORD

## Product interpretation
- Audience, category, business model, brand constraints: Volunteer treasurers and offering counters at churches and small charities (UK and US) use it weekly; the finance committee or trustees decide whether to adopt. Bookkeeping app, free 60-day trial, then unstated pricing. Must earn the trust of someone handling other people's money without feeling like corporate finance software.
- Promise (who / what changes / how): Volunteer treasurers and counters → Sunday's offering is signed off by two people and written down once, and January's statements are already done → two volunteers count on a phone and both sign, the count posts to the ledger, and year end produces each donor's giving statement.
- Five-second line, quoted as shown in the first screen (who + what): "Tallyhall is bookkeeping for churches and small charities"
- Current alternative, including doing nothing: A paper counting sheet signed by two counters, re-typed into a spreadsheet only the treasurer understands, then giving statements written by hand in January (or carrying on with exactly that).
- The one advantage only this product has: The count two volunteers sign is the same record that lands in the ledger and on each donor's statement: written once, not three times.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing category, plainly named ("bookkeeping for churches and small charities"); nothing to teach.
- Best-fit customer, and who it is not for: Congregations and small charities with a volunteer treasurer and a weekly cash-and-cheque offering. Not for organisations wanting online giving or card payments (it is not a payment processor), nor (inferred) large charities with paid finance staff.
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no user quotes; the hero adapts the brief's own description ("two volunteers count the Sunday offering on a phone and both sign it off").
- Biggest reason not to click, and the line that answers it: "Changing how the church keeps its books needs the committee, and I can't commit them" → "Free for 60 days: eight Sundays of counting to show your finance committee before anyone decides." (60 days always contains at least eight Sundays.)
- Conversion action and destination: "Start a free 60-day trial" → https://tallyhall.example/trial (supplied by the brief), same label in nav, hero and close.
- Visitor doubt 1 → artifact: "Is counting on a phone really safer than our paper sheet?" → the playable count sheet in the hero: two columns, a line that doesn't agree, signing refused until it does.
- Visitor doubt 2 → artifact: "What do trustees get to check?" → the sample ledger directly below, showing two names and sign times against every Sunday, which updates when the visitor's count is signed.
- Visitor doubt 3 → artifact: "Will January still be lost to statements?" → the sample giving statement for donor no. 22 built from a year of Sunday lines, beside the envelope it starts from.

## Interview log
- Questions asked, each with the recommended default you offered: None could be asked (no one answers during this task). Defaults I would have offered: (1) default region UK, with a UK/US switch; (2) no pricing shown beyond the free 60-day trial; (3) sample names and churches invented and labelled as samples; (4) attribution of named gifts to donors shown as envelope numbers.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The count happens on one phone shared by both counters (the brief says "on a phone"); named gifts (envelopes, cheques) are recorded against donor numbers so statements can be produced; the ledger shows who signed and when. All are listed under To confirm.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | End Close (casebook, 2026-10-19): hero shows a reconciliation table with matched/unmatched counts and an "Agent resolved" toast, so the exception being resolved carries the claim. Limit: the frame reads as common B2B SaaS and its 99.999% claim is unsourced. | Show the mismatch being resolved, not a dashboard: the hero opens on one line that does not agree, and the visitor fixes it. | Framed split box, violet accent, stat row, monospace for money, any AI claim. |
| Brand composition | Opal Electronics (casebook, 2026-10-20): the page ground is the company's own table of real artefacts, and the phone version is art-directed around the objects. Limit: no CTA, no h1, white text over a busy photo. | Build the page out of the visitor's own material: the treasurer's ruled analysis pad (ledger-green ground, green ruling, red double rule under totals, blue-black pen for signatures) and drawn paper objects. | Letter-as-homepage, photography, grain overlay, dropping navigation and the action. |
| Counterexample | Ramp (casebook, 2026-10-20): finance-platform hero with announcement bar, email capture, celebrity photo, self-cycling product UI and live counters. Attractive "serious finance software" signal. | Wrong here: the brief says not to feel like corporate finance software, and a careful volunteer distrusts tickers and claims. Constraint kept: one action, nothing moves by itself, every number is a labelled sample. | Self-cycling UI, live counters, stacked first-screen elements, email capture. |

Departures from the chosen recipe (functional entrance): the input/output pane is a two-person count rather than one input field; the h1 is 61px at 1440 (recipe 80px) because the two-column hero needs "Counted by two." on one line; body face is Carlito, display Schola, no mono.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the paper counting sheet; two counters' signatures; the offering bag and plate; numbered weekly giving envelopes; coins bagged by value; cheques with names on them; the treasurer's ruled analysis pad with red double total rule; the spreadsheet tab called "FINAL (2)"; January's stack of hand-written statements; the vestry table after the service; tally marks in fives
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Tallyhall" with seed 832787386: world, voice, toy (canon exit).
- Chosen move and why, or canon and the buyer-risk reason: toy. The product's value shows in one action a treasurer recognises instantly (two counts that disagree, then agree, then two signatures), with real content and no data needed from the visitor. World was second choice but a drawn vestry would push the five-second line and the action down on phones; voice would ask a cautious buyer to trust a stance before seeing the product.
- Idea sentence ("[inventory thing] becomes [the move]"): The paper counting sheet becomes a playable two-counter count that refuses both signatures until every line agrees, then posts itself to the ledger below.
- The same sentence with the nearest competitor, and why it fails: "The paper counting sheet becomes a playable count… in Planning Center Giving / QuickBooks": fails, because those sell online giving and general accounting; neither is built around two volunteers signing a cash count, and a giving platform's page leads with the donate button Tallyhall does not have.
- Statement level (quiet, bold or loud) and why: bold. The count owns the first screen; everything below is calm paper objects carrying proof. Not loud, because the payer is a risk-conscious committee.
- First viewport at 1440 (placement, sizes, live thing, refused default): Left half: 61px Schola h1 on two lines, five-second line in bold as the subhead's first sentence, one blue-black button with the eight-Sundays line, then a three-row Counters / Treasurer / Trustees list. Right half: the count sheet (552px wide, all of it above 900px) on white ruled paper with the red "doesn't agree" status, six lines, totals over a red double rule and two signature lines. Refused: a centred headline over a dashboard screenshot, and stock photos of a congregation.
- First viewport at 390: h1 two lines (38px), subhead, button and line, then the sheet from y=480 with the region switch, the red status and the first rows visible (364px). Roles list and scope line move below the sheet.
- Name test (the one with the …, eight words or fewer): the one with the count that won't sign

## Hypothesis
- Archetype and why: Functional entrance: one small representative task (reconcile two counts and sign) with its output shown inline, then the ledger and statement it produces.
- Type roles, faces and why they fit this product: Display and figures in TeX Gyre Schola (Century Schoolbook): the face of printed forms, hymn boards and school ledgers; plain and trustworthy, tabular figures by default. Text in Carlito (humanist sans, OFL) for warm, readable instructions. Both shipped as subset woff files with font-display swap.
- Composition and grid: 1240px wrap, two equal hero columns; below, alternating splits (ledger: narrow text, wide paper object; statements: wide statement, narrow envelope); one ruled Q&A list; close with the paper sheet it replaces.
- Ground, colour and material, and why this ground: Pale ledger green (#e8f0e1) from the treasurer's analysis pad, not cream; white paper objects with green ruling; red only for totals' double rule and disagreement; blue-black pen only for signatures and the one action.
- Signature artifact and its local behaviour: The count sheet: Ann's column fixed, Dev's column editable (−/input/+ per line), per-line agree marks, totals, a status line, two sign buttons. Signing is refused until all lines agree; changing a figure after a signature clears it; both signatures post the count and update the ledger section. UK £ / US $ switch swaps denominations, wording (cheques/checks), fund name and every sample on the page.
- Signature on a phone (where the result shows after a tap): The status line is pinned to the top of the sheet while it is on screen (viewports at least 700px tall), so each tap's result shows above the control; per-line marks and totals change beside the control; focus is kept clear of the pinned line.
- Sample audit (counts, weekdays, states and stated rules agree): UK: 2×£50 + 31×£20 + 38×£10 + 9×£5 + £63.40 + £178.00 = £1,386.40; Dev's 8×£5 gives £1,381.40, £5.00 short. US: 28×$20 + 22×$10 + 9×$5 + 64×$1 + $11.35 + $415.00 = $1,315.35. 18 Oct 2026, 4 Oct, 11 Oct 2026 are Sundays; 5 Jan, 12 Jan, 20 Apr (Easter), 28 Dec 2025 are Sundays. Ledger 1,212.75 + 1,148.20 = 2,360.95, + 1,386.40 = 3,747.35 once posted. Statement 45 × £20 + £100 = £1,000.00 (2 + 42 + 1 envelopes shown). Ledger row shows "Waiting for two signatures" until the demo is signed; sign times are fixed sample times, never the visitor's clock.
- To confirm with the client (claims and terms kept off the page): price after the 60-day trial and whether a card is needed; whether both counters use one phone or two; how named gifts are attributed (envelope numbers, cheque names) and whether statements are produced per calendar or tax year; that the ledger records who signed and when; whether a signature is cleared when a figure changes; data location and who can access it; Gift Aid (UK) and IRS acknowledgement wording (US), deliberately not mentioned; og.png, favicon.svg and apple-touch-icon.png to be hosted at https://tallyhall.example/.
- Section sequence, with one section deliberately omitted: Hero with count → trustees' ledger → giving statements → questions (scope: records money, never handles it) → close. Omitted: testimonials/logos (none can be named) and a pricing section (no price supplied).
- Primary interaction and motion purpose: Operating the count. Motion: signature stroke draws in 450ms on signing (confirms who signed); the ledger row the count posts into flashes from pale blue to clear once (shows where it landed). Nothing moves by itself.

Motion contracts:
| Animation | Trigger | State change / purpose | Static fallback | Duration, easing |
| --- | --- | --- | --- | --- |
| Signature stroke | Pressing "Ann signs" / "Dev signs" when lines agree | Blue stroke draws on the signature line; confirms the signature | Under reduced motion the stroke appears complete instantly | 450ms, cubic-bezier(.2,.7,.2,1) |
| Ledger row ink | Second signature posts the count | Background of the 18 Oct ledger row fades from pale blue to clear; shows where the count landed | Reduced motion: no animation, row text changes to Posted | 1.2s once, ease-out, background only |
| Button press | Pointer press on primary button | scale .98 for tactile feedback | Removed under reduced motion | instant transform |

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis (the playable count leads vs. the drawn vestry world leads).
- Category default and anti-default this plan avoids: Default: church-management SaaS page with a stock photo of a smiling congregation, purple/teal gradient, "All-in-one church management", a feature-card grid and a Donate/giving widget. Anti-default: cream paper with an editorial serif and a quiet "stewardship" mood, or a dark fintech terminal. This plan uses the treasurer's green analysis pad, schoolbook type and the counting sheet itself.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Two-column hero: headline, five-second line, trial button left; the playable two-counter count sheet right, opening on a line that doesn't agree | Is phone counting safer than paper? | 9 | 8 | 7 | 8 | 9 | Drawn paper objects that hold up next to the live sheet, and a ledger directly under the hero so the posted count lands in view |
| B | Full-width plan-view drawing of the vestry counting table (bags, envelopes, one phone) with the headline set into it; count sheet below the fold | What does counting with Tallyhall look like? | 6 | 8 | 8 | 7 | 4 | The phone in the drawing would have to be operable, and the action and five-second line would need to stay above the drawing on phones |

- Chosen variant and why: A. It puts the product working in the first screen at both widths and answers the careful volunteer's first doubt by letting them fail to sign; B is prettier and proves nothing.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Revised: ground is ledger green (analysis pad), not cream; hero is the count, not a photo or dashboard. |
| Cream ground with serif display | Warn | Stays with a reason: ground is green ruled paper, and Schoolbook is the face of printed forms and figures the audience reads weekly. |
| Three equal cards | Block | Avoided in plan; an early build had a 3-up "what it replaces" row and it was removed in the revision. |
| Row of big stat numbers | Warn | None: the only figure about the company (about 40 congregations) sits in a Q&A answer, as supplied. |
| Redrawn phone chrome | Warn | Refused: the count is shown as the sheet itself at real size, labelled as a sample. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line h1, five-second line, button with eight-Sundays line, the whole count sheet above 900px including sign buttons; no hole left of the sheet; full page shots/1440.png checked for section rhythm. |
| 768×1024 | shots/768-top.png | Single column: hero then sheet with value column, menu button; shots/768.png checked for roles list after the sheet, ledger, statement and envelope stacking. |
| 390×844 | shots/390-top.png | h1 on two lines, CTA and line, sheet starting at y=480 with status and first rows; shots/390.png checked: compact ledger rows, drawings beside captions, 5,763px total. |

Artifact states captured: shots/state-1440-1-default.png, -2-refused, -3-agree, -4-ann, -5-posted, -6-ledger, -7-us, -8-over (same set at 390), and shots/state-390-reduced-posted.png. Before-revision captures are in shots-v1/.

## Checker result
- JSON: check.json
- Failures fixed: LY-02 (sideways scroll at 320: Ann's column folded under the item name on narrow sheets via container queries); LY-06 (focused controls hidden under the pinned status on Shift+Tab: focus handler keeps them clear); HR-07 at 390 (sheet started at y=675: roles list and scope moved below the sheet on phones).
- Warnings kept and why: none in the final run (81 of 81 pass). Earlier warnings fixed: PS-06 (filled stepper buttons counted as competing actions: made outline-only), HR-08 (hole under hero copy: filled with the Counters / Treasurer / Trustees list), PF-06 (title now leads with the category), ST-01 (free trial stated in plain words), CO-03 (ground shifted to a clearer ledger green).
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and nothing may be installed; `npx --no-install impeccable` is not available in this environment.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png and 390-top.png: "bookkeeping for churches and small charities", two volunteers count on a phone and both sign, posts to ledger, statements at year end. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second line is the bold first sentence under the h1 at both widths; the count sheet beside it shows the job. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is an operable count sheet with real denominations and sign-off logic. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Count sheet (safer than paper), ledger with two names per Sunday (trustees), sample giving statement (January). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Revision removed the "what it replaces" section that restated the hero; each remaining section adds the ledger, the statement, then scope answers. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four defaults and the assumptions they change. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (toy) and B (world) on the emphasis axis, scored; defaults named. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | End Close, Opal Electronics, Ramp counterexample; recipe departures listed under References. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "bookkeeping for churches and small charities" in the first screen at both widths. |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Fields filled; "Written once." is false for the sheet-then-spreadsheet-then-letters process. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1, "Trustees see two names against every Sunday's total", "January's giving statements come out of the year's counts", "Tallyhall records the money. It never handles it.", "Count next Sunday's offering with Tallyhall." each picturable and falsifiable; the last two would be false on a giving platform's page. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; hero adapts the brief's description of the Sunday count. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free for 60 days: eight Sundays of counting to show your finance committee before anyone decides." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Counted by two / Trustees see two names / statements come out of the counts / records money, never handles it / Count next Sunday's offering. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content; no vh heights in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No quotes or nameable customers supplied; the one supplied fact (about 40 congregations) is stated in the Q&A without names, as the brief requires. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Blue-black pen only on the action, sign buttons and signatures; red only for disagreement and total rules; green only for agreement/posted. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | A two-counter cash count with refused signatures, envelope numbers and analysis-pad ruling would be false on a giving platform or general accounting page. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No framed split box, toast, stat row or violet (End Close); no photo ground or letter (Opal); no tickers or email capture (Ramp). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover only changes colour/border on buttons that also have focus styles; no hover-only content, no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts table under Hypothesis. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the value column hides, Ann's count moves under each item, status pins to the top; ledger becomes two-line rows (shots/state-390-6-ledger.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #status has role=status, aria-live=polite; every control writes its result there. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Count, ledger and statement are each labelled "written for this page" at their top; "about 40 congregations" is the client's supplied figure. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels sit at the top of the sheet, ledger and statement; "Nothing here is sent anywhere; it runs on this page." in the sheet footer. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | All trial buttons link to https://tallyhall.example/trial; nav anchors resolve; every sheet control changes the sheet or status. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Opened 1440, 768, 390 full and top captures and the state captures listed under Render evidence. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | See Structural revision: shots-v1/1440.png → shots/1440.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass listed under Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified; checker 81/81. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared Dev's $20 bills field (US) | Status: "No figure from Dev for $20 bills. Every line needs a count from both people before anyone signs."; line marked, total shows a dash | pass |
| Out of range | Typed 5000 notes; pressed − at 0 | 4-character field accepted 5000; status: "999 is the most $20 bills one line takes on this sample."; − at 0 stays 0 with "A count can't go below zero." | pass |
| Nonsense | Typed "abc5x" and "-3" | Non-digits stripped to 5 and 3; status adds "Numbers only: anything else was taken out." | pass |
| Repeat | Pressed sign before lines agreed; pressed a signed button again; pressed + repeatedly | Signing refused with the reason; a second press takes the signature back; repeated + keeps counting and updates the mismatch | pass |
| Reset | Pressed "Start the count again" after posting and after switching to US | Returns to the UK sample, mismatch restored, signatures cleared, ledger back to "Waiting for two signatures" | pass |
| Keyboard only | Tabbed through region radios, steppers, inputs, sign buttons; checker's AX-12 and LY-06 runs | All controls work with Enter/Space/arrow keys; after posting, focus moves to "Start the count again" (sign buttons disable); focused controls never sit under the pinned status | pass |
| Phone | Operated the full loop at 390 (shots/state-390-*.png); checker MB-07 operated 12 controls | Status pinned above the rows shows every result; no dead controls, no off-screen feedback | pass |
| Reduced motion | Loaded with reduced motion and signed both | Signatures appear complete instantly, ledger row changes without the fade, status reads Posted (shots/state-390-reduced-posted.png) | pass |
| Visitor's own input | Typed own counts into several lines, then matched them back | Totals, per-line marks and the difference update live; signing only allowed once every line equals Ann's | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Three equal cards / same layout repeated | Block | Fixed in the revision: the 3-up "what it replaces" row was removed; its drawings now sit beside the thing that replaces each paper object. |
| Cream ground with a serif display | Warn | Stays: green ledger ground (checker CO-03 now passes) and Schoolbook for forms and figures, recorded above. |
| Every section same width and padding | Warn | Avoided: hero 50/50, ledger 4/7, statement 7/4, Q&A narrow measure, close 1.3/1. |
| Shadow as the only depth system | Warn | Only the count sheet carries a soft shadow (the live object on the table); other paper objects use rules. |

## Self-review
| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | | 8 |
| Fit | 7 | The payer's control (the ledger) has to sit straight after the count, not two screens down behind a recap row, so the trustees' path is the next thing seen. | 8 |
| Distinctiveness | 7 | Drawings with a third level of detail (paper texture, handwriting that reads as figures), and the tally-gate mark carried into the ledger and statement as a real notation, not just the logo. | 7 |
| Proof | 8 | | 8 |
| Craft | 7 | Remove the 3-up drawing row and the 9rem gap after the hero; fix the clipped "178.00" input at 390; stop the close rule overhanging the content edge. | 8 |
| Mobile | 7 | Ledger rows at 390 were five labelled lines each; make them two lines (date, state, amount / signers) and keep the posted count's landing place directly below the sheet. | 8 |
| Honesty | 8 | | 8 |
| Interaction | 8 | | 8 |
| Copy | 8 | | 8 |
| First screen | 8 | | 8 |

- Designer's one-sentence read: A recognisably church-treasurer page (green ruled pad, Schoolbook figures, blue-pen signatures) whose live count is the strongest thing on it; the drawn paper objects are competent but plainer than the sheet.
- Buyer's and founder's one-sentence read: I can see exactly what counters do and what trustees get, nothing claims more than the brief allows, and the button says it's a free 60-day trial; I'd still want the price after day 60.
- Engineer's one-sentence read: One static file, no dependencies, one data object drives the count, ledger and statement in both regions; works by keyboard, from disk, at 320px and under reduced motion.

## Structural revision
- Weakest explanation or most template-like decision: Fit and craft: a standalone "It replaces…" section with three equal drawing columns sat between the count and the trustees' ledger, repeating the hero's claim in a template 3-up row and pushing the payer's control two screens down, so the posted count's "ledger below" was far away.
- Change made (structure, not styling): Deleted the 3-up section; the ledger now follows the hero directly; each drawing moved beside the thing that replaces it as an "Instead of" figure (spreadsheet → ledger section, hand-written letters → statements section, paper counting sheet → closing call to action); phone ledger recomposed into two-line rows; section gap reduced. Page at 390 went from 6,337px to 5,763px.
- Before: shots-v1/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: Hero rescored A: fit 9, identity 8, originality 7, composition 8, proof 9 (8/10 overall). Still short of 10: the drawings are simpler than the live sheet, the tally notation stays in the logo, and the price after the trial is unknown.
- Removal pass (each decorative element → its job, or "removed"): sheet shadow → marks the one live object; green ruling and red double rule → the analysis-pad notation for totals; blue signature strokes → show who signed; tally-gate logo → brand mark from the counting notation; three paper drawings → each shows the old object a section replaces; check-mark bullets in the trustees list → state (rules that hold); numbered circles in the 3-up row → removed with the row; large gap after hero → reduced.

## Remaining weaknesses
- What a buyer still cannot judge: price after the 60-day trial, where the data is held and who can access it, how gifts are attributed to donors, and whether statements cover UK Gift Aid or US tax acknowledgement needs (all left off the page and listed under To confirm).
- What was not verified: field performance (only the checker's lab estimate ran), real iOS/Android browsers (Chromium only), and the share image as it appears once hosted at https://tallyhall.example/og.png.

## Status
DONE
