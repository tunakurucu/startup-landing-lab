# DESIGN-RECORD

Page: `index.html` (opens from disk). Mode: Build. Skill: startup-landing-design 0.6. Rendered and checked on 2026-10-20 with Playwright/Chromium from `SLD_DEPS=/home/claude/r3/deps`.

## Product interpretation
- Audience, category, business model, brand constraints: Buyers are general contractors' site managers; users are appointed persons and crane supervisors. Category: a lift plan app for construction sites. Business model not stated (pilots, request at https://liftplan.example/pilot). No brand files supplied; the brief asks that the page feel like a construction site, not a SaaS template, and never suggest the product replaces the appointed person's judgment.
- Promise (who / what changes / how): For appointed persons and the site managers who buy for them, the lift plan stops being a copied spreadsheet with chart values typed in by hand, because Liftplan quotes the chart row for the load, crane, radius and ground and writes the plan they sign on a tablet.
- Five-second line, quoted as shown in the first screen (who + what): "Liftplan is a lift plan app for construction sites."
- Current alternative, including doing nothing: a spreadsheet template copied from job to job, with capacities read off PDF load charts by hand; or doing nothing new and keeping that routine.
- The one advantage only this product has: the plan is checked against the load chart (and the ground) before it reaches the appointed person, on the tablet they sign on.
- Category frame (existing, subcategory or new) and what it costs to teach: existing ("lift plan", which every appointed person writes) with the X-for-Y frame "a lift plan app for construction sites"; nothing to teach.
- Best-fit customer, and who it is not for: a general contractor's site with regular critical lifts and an appointed person on site. Not for one-off hires without an appointed person, and not for anyone wanting the software to decide the lift.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief supplies no quotes. The page uses the trade's own terms from the brief (appointed person, load chart, radius, ground conditions, critical lift).
- Biggest reason not to click, and the line that answers it: a site manager fears a sales process and a tool that overrides the appointed person. Line beside the action: "A pilot runs on one site. Your appointed person still signs every lift."
- Conversion action and destination: "Request a site pilot" → https://liftplan.example/pilot (supplied by the brief). Used in the header, hero, pilots section and footer with the same label.
- Visitor doubt 1 → artifact: "Does it get the chart right?" → the sample lift (`#sample`): the chart column is shown, the row used is marked, radius is rounded up to the next row, the gross load and rated capacity sit side by side.
- Visitor doubt 2 → artifact: "Does it replace the appointed person's judgment?" → part 6 of the sample sheet (empty signature box: "Liftplan never signs") and the "Filled by Liftplan / Decided by the appointed person" split in `#signs`.
- Visitor doubt 3 → artifact: "Is anyone actually using it?" → `#pilots`: two unnamed contractors in pilots, stated plainly with no logos, beside the pilot action.

## Interview log
- Questions asked, each with the recommended default you offered: none asked (nobody would answer). Defaults taken: (1) thresholds in the sample are 75 % flag / 90 % not issued, labelled "sample thresholds"; (2) a sample 100 t all-terrain crane with an invented chart, labelled "not a manufacturer's chart"; (3) no pricing on the page, since the brief gives none; (4) share card hosted at https://liftplan.example/og.png (file shipped as `og.png`).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the ground check (75 % of crane plus gross load on one outrigger, 4 m² mats) is a sample rule written for this page and says so beside the numbers; "rounded up to the next chart row, never interpolated" is standard practice assumed to match the product, listed under To confirm.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Firecrawl (functional-entrance, desktop audit 2026-10-18): an operation field with mode controls and the output preview directly beneath; clicking Scrape changed the preview. Limit: benchmark claims unverified, pale microtext. | Show the shape of the input and the output before any feature list; let the trade's technical affordance (here the chart row) be the visual motif. | Orange headline emphasis, the API playground framing, the 18-section length. |
| Brand composition | Sway (functional-entrance, desktop-mobile audit 2026-10-20): one input as the hero with a step tracker beneath; one saturated colour reserved for the most important panel and its buttons, every other section white or grey. Limit: dense first 900 px, date-bound copy. | Reserve one saturated colour for the single action and the state it marks; stack an inline control as labelled fields with a full-width action on phones. | The purple panel, the countdown, the promo strip, carousels. |
| Counterexample | Retool (functional-entrance, 2026-10-20): the hero prompt produces nothing until sign-up, so the first screen promises an interaction and defers it. | A toy in the first screen must answer locally and say so; otherwise it is a picture of an input. | A prompt box that leads to sign-up; the dropdown "starter prompts" that did not open. |

Departures from the functional-entrance recipe: the hero is a sheet with controls, not a single input field; the H1 runs larger than the recipe's 80 px cap at 1440 (88 px, two lines of three to five words) because the condensed uppercase face reads as site signage; body is 18 px and the artifact is full width (1180 px) rather than capped at 760 px, because the sheet has two columns.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the load chart table read column by column; the lift plan sheet with numbered parts; the appointed person's signature box; the crane supervisor's walk-round before the lift; radius measured from the slew centre; outrigger mats and the ground under them; the gross load (block, slings, shackles under the hook); hazard tape and site hoarding; the laminated form pinned in the site office; "critical lift" as a flag on the day's board; the tablet in a hi-vis pocket; the chart row rounded up, never interpolated.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Liftplan" with seed 310198543 (node scripts/deal.mjs "Liftplan" --seed 310198543): 1 typographic statement (`type`), 2 the product as a toy (`toy`), 3 a character with a job (`character`), 4 canon. Families to start from: objects the user handles at work; rituals and routines of the user's day.
- Chosen move and why, or canon and the buyer-risk reason: the product as a toy. The core interaction is one that shows its value in seconds with safe sample data: move load and radius, pick boom and ground, and the sheet answers with the chart row, the share of rated capacity and a stamp. A character would be wrong for a buyer accountable for a lift, and a typographic statement would hide the product the brief says must be seen checking.
- Idea sentence ("[inventory thing] becomes [the move]"): the lift plan sheet with its numbered parts becomes a toy: the visitor fills parts 1 to 4 with sliders and selects, parts 3 to 5 answer from the chart, and part 6, the signature, stays empty for the appointed person.
- The same sentence with the nearest competitor, and why it fails: "3D Lift Plan's lift plan sheet becomes a toy where the signature stays empty for the appointed person" fails: 3D Lift Plan's artifact is a 3D scene of crane and site, and the spreadsheet template has no stamp and no chart row to quote. The sheet-that-refuses-to-sign belongs to this product's own positioning.
- Statement level (quiet, bold or loud) and why: bold. The first screen is the sheet and its controls; the sections below are quiet ruled forms that carry the mechanism and the honest status. Not loud: a buyer accountable for safety should not meet a world or a character.
- First viewport at 1440 (placement, sizes, live thing, refused default): sticky 64 px bar (wordmark left, three links and the orange action right) over an 8 px hazard tape. H1 in condensed bold uppercase, 88 px, two lines, full 1180 px measure, top at about 120 px. Deck row below: subhead (20 px, 56ch) left, orange "Request a site pilot" with the one-site line right. The sheet (`#sample`, white, 2 px black rule) starts at about 465 px: title and sample label, then a black readout (68 % of chart, stamp, one-line reason) and the net-load slider on the left, parts 1 and 2 of the lift plan on the right. The live thing is the slider-to-stamp loop. Refused default: a centred headline with two buttons over a framed screenshot, and a split hero with a decorative crane illustration.
- First viewport at 390: bar with wordmark and Menu button; H1 44 px in three lines; subhead; full-width orange action with the one-site line; the sheet starts at 515 px with its title, sample label and the readout (68 % of chart, stamp, reason) visible; the first slider label at 795 px. The readout is sticky inside the artifact so every control's result stays on screen.
- Name test (the one with the …, eight words or fewer): the one with the lift plan sheet that stamps itself.

## Hypothesis
- Archetype and why: functional entrance. One input-to-output operation (load, crane, radius, ground → checked plan) that can run on sample data without an account, so the first screen is the operation itself.
- Type roles, faces and why they fit this product: display: TeX Gyre Heros Cn bold (a condensed grotesque, the face of load-chart plates and site signage; installed system face, falls back to Arial Narrow / Helvetica Neue). Text: Inter 400–600 (a neutral text face; body only, so TY-10 does not apply to it). Data: Liberation Mono bold for filled-in values on the sheet, so printed labels and filled values read as a form.
- Composition and grid: one 1180 px container with a 16–40 px gutter; the hero stacks headline, deck row (7/5) and the full-width sheet (4/8 inside). Lower sections alternate: a 5/7 split (heading beside its lede), full-width ruled rows, a 5/7 split with a two-column form, then a single 56ch column. Density: open → dense (the sheet) → ruled → dense → short.
- Ground, colour and material, and why this ground: concrete-grey ground (#e8e7e2) with white sheets ruled in 2 px black, like laminated forms on a site office wall; hi-vis orange (#ff8a1f, black text) on the one action and the "above 75 %" flag; red (#c8102e, white text) only on "Not issued"; grey fill for values Liftplan fills, dashed boxes for what the appointed person fills. No shadows; depth is rules and fills.
- Signature artifact and its local behaviour: `#sample` (`data-signature`): two sliders (net load 1–50 t, radius 4–34 m), two selects (30 m / 40 m boom; three ground types), a reset button. Every change recomputes gross load, the chart row (rounded up), rated capacity, share of chart, outrigger load, pad pressure, the ground check, the stamp (Within chart / Within chart · above 75 % / Not issued) and the reason, and redraws the chart column with the row marked. Off-chart radii and ground failures refuse with the reason. All data is invented and labelled at the top of the artifact.
- Signature on a phone (where the result shows after a tap): the readout (share of chart, stamp, reason) is `position: sticky` under the header inside the artifact, so after any slider, select or reset the result is on the same screen as the control; the full sheet follows below as compact labelled rows.
- Sample audit (counts, weekdays, states and stated rules agree): six numbered parts, six present; four inputs in `#checks`, four on the sheet; 12.0 + 0.9 = 12.9 t; 11 m rounds up to the 12 m row (19.0 t); 12.9 / 19.0 = 68 %; 0.75 × (60 + 12.9) = 54.7 t; 54.7 / 4.0 = 13.7 t/m² ≤ 25; sample thresholds (75 % / 90 %) match the code; no dates with weekdays; the signature box is empty in every state; the visitor's clock is never read.
- To confirm with the client (claims and terms kept off the page): whether radius is rounded up to the next chart row in the product; whether the product computes outrigger loads and ground bearing or only records them; the product's default thresholds; whether the plan is "not issued until the appointed person signs"; pricing and how a pilot is priced; the og.png location at https://liftplan.example/og.png; which crane models and charts are covered (kept off the page).
- Section sequence, with one section deliberately omitted: hero with the sample lift → how it checks (four ruled parts) → who signs (filled by Liftplan / decided by the appointed person) → pilots and the action → footer. Omitted on purpose: a pricing or plans section (the brief gives no prices) and a feature grid.
- Primary interaction and motion purpose: moving a slider or select and reading the stamp change. Motion is limited to a 180 ms colour transition on the stamp (confirms the state change) and a 150 ms press scale on buttons; no entrances, no scroll effects.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (artifact-first sheet vs type-first statement with the artifact below the fold).
- Category default and anti-default this plan avoids: default: a navy SaaS hero with a hard-hat-and-crane photo, centred headline, "Book a demo" and "Watch video", and a three-card "Fast · Safe · Compliant" row. Anti-default: a brutalist black page with hazard stripes on every section and a mono headline. The plan uses neither: a light concrete ground, one hazard tape, a condensed signage headline and a working form sheet.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Headline, deck row, then the full-width lift plan sheet with controls on the left and the numbered plan on the right; the toy is the hero. | "Does it get the chart right?" (row marked, rated beside gross) | 9 | 8 | 8 | 7 | 7 | A real manufacturer's chart and a named pilot site. |
| B | Monumental two-line condensed headline filling the screen, subhead and action beneath, the sheet starting at the fold. | "What is it?" only | 6 | 8 | 6 | 8 | 4 | The sheet in the first screen, which is variant A. |

Score each dimension 0–10.

- Chosen variant and why: A. The brief's product must be seen checking a lift; B spends the first screen on type and defers the proof.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| One sans, one weight everywhere | warn | Resolved: condensed display, Inter text, mono data, each with a role. |
| Every section has same width and padding | warn | Planned as 5/7 splits throughout; revised after render (see Structural revision): section 2 is full-width ruled rows, section 4 a single column. |
| Thick coloured stripe repeated on cards | warn | One 8 px hazard tape under the header only, as the site-hoarding cue; no stripes on cards. |
| Section numbers on content that is not a sequence | warn | Numbers appear only on the lift plan's parts 1–6 and the four inputs, which are the sheet's real order. |
| Centred headline over a framed screenshot | warn | Not matched: left-set headline, the artifact is a working sheet. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line headline, deck row, sheet starting at 465 px with readout, first slider and parts 1–2 visible; no clipped labels; full page in shots/1440.png (4 screens: sheet, ruled parts, who-signs split, pilots, footer). |
| 768×1024 | shots/768-top.png | Nav links on one line with the orange action; headline two lines; sheet stacked (readout and sliders above the plan); full page in shots/768.png. |
| 390×844 | shots/390-top.png | Three-line headline, full-width action, sheet from 515 px with the readout; menu open in shots/390-menu.png; compact sheet rows and footer in shots/390.png and shots/390-bottom.png. |

Artifact states, captured at both widths (shots/state-1440-*.png, shots/state-390-*.png): default (68 %, Within chart), flag (13 m → 85 %, above 75 %), over90 (14 t at 14 m → 98 %, Not issued), over100 (16 m → 104 %), offchart (30 m on the 30 m boom), below-min (4 m on the 40 m boom), ground (soft after rain → mats of 5.5 m² needed), ground-and-chart (both reasons), and shots/state-390-reduced-motion.png.

## Checker result
- JSON: check.json
- Failures fixed: none at block level in the final run. Earlier runs (check-v2.json) warned HR-05 at 390 (the sticky readout was the only thing in the bottom band) and MB-10 (7,340 px): fixed by compacting the readout and the phone sheet and trimming phone spacing (final 6,723 px).
- Warnings kept and why: ST-01 (no pricing link or price): the brief gives no prices; cost is discussed in the pilot request, and the record lists pricing under To confirm rather than inventing a figure.
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>": not run: no network and `npx --no-install impeccable` is not installed in the dependency path.

## Checklist
The other 79 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, shots/390-top.png: "a lift plan app for construction sites… checks them against the load chart and writes the plan your appointed person signs on a tablet". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test from the captures: for construction sites; checks a crane lift against the load chart and makes the plan; click "Request a site pilot". |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the lift plan sheet with working controls and a chart column (shots/state-1440-default.png). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Product interpretation: chart row in `#sample`, signature box and `#signs`, `#pilots`. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: the operation; `#checks`: what each input drives and the round-up rule; `#signs`: which boxes are the appointed person's; `#pilots`: status. The old-spreadsheet line appears once (in `#checks`). |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: no questions asked; four defaults logged. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants table: axis structure; A is the dealt toy; default and anti-default named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table and the departures paragraph under it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a lift plan app for construction sites" in the subhead at both widths (check.json facts.first_screen_text). |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Lift plans that read the load chart for you" is false on a spreadsheet template's page. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | H1: picture (reading a chart), falsifiable, odd on 3D Lift Plan's page. "Four boxes in. Every number comes off the chart." picture + falsifiable. "The appointed person signs. Liftplan never does." falsifiable + not a competitor's line. "Running on two contractors' sites now" falsifiable + specific. "Check a sample lift" picture + falsifiable. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero uses the trade's terms from the brief (appointed person, load chart, radius). |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "A pilot runs on one site. Your appointed person still signs every lift." beside the action in the hero and in `#pilots` (shots/1440-top.png, shots/390-bottom.png). |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: Lift plans that read the load chart for you → Check a sample lift → Four boxes in. Every number comes off the chart. → The appointed person signs. Liftplan never does. → Running on two contractors' sites now. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440 and 768: "…THE LOAD CHART FOR YOU"; 390: "CHART FOR YOU" (shots/*-top.png). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero` has padding only; no vh/svh height anywhere in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied beyond "two contractors in pilots who cannot be named"; that status is stated in `#pilots` with no logos or quotes. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Orange: the action button, the slider thumbs (the control) and the "above 75 %" stamp; red: "Not issued"; the hazard tape is the one brand use. shots/state-1440-flag.png, shots/state-1440-over100.png. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement: the swap sentence with 3D Lift Plan fails; the sheet that stamps itself and refuses to sign is this product's positioning. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Firecrawl: no mode tabs, no orange headline word, no playground; Sway: no purple panel, countdown or tracker; Retool: no prompt box. Shared grammar only (an input in the first screen). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Hover styles are colour-only on buttons and links (no hover-only motion); no staggers; the hover rule on chart cells was removed. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Stamp colour: trigger state change → confirms the new state → immediate swap under reduced motion → 180 ms cubic-bezier(.2,.7,.2,1). Button press: trigger :active → press feedback → none under reduced motion → 150 ms ease-out scale(.97). Menu: no animation. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 the sheet's value boxes become labelled rows, the readout is sticky, the chart column wraps to short rows (shots/390.png, shots/state-390-flag.png). |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `.readout` has role="status" aria-live="polite" aria-atomic="true"; the sliders' `output` elements update too. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page; `#pilots` says the contractors cannot be named. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | The artifact header says "Sample lift and chart, written for this page. Not a manufacturer's chart."; the ground rule says "a sample rule for this page"; thresholds are "sample thresholds"; the footer repeats that the sample is illustrative. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | The label sits in the artifact's title row (shots/1440-top.png). |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Request a site pilot" → https://liftplan.example/pilot (brief); nav and footer anchors exist (AX-08 passed); Reset returns the sample (states log). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All PNGs in shots/ opened during the build; widths 1440/768/390 confirmed by verify-record; eight states at both widths plus reduced motion. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision below: shots-v2/390.png → shots/390.png and shots-v2/1440.png → shots/1440.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | check.json ran with no failures or not_run; no unverified rows above. |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Looked for an emptiable field: the controls are two bounded range sliders, two selects and a reset; set the load slider's value to "" through script. | A range cannot be empty; the browser snaps to its midpoint (25.5 t) and the sheet recomputes to 139 %, Not issued, with the reason. No field can show a blank value. | n/a: no free-text input exists; sliders always hold a value |
| Out of range | Radius to 30 m on the 30 m boom; 4 m on the 40 m boom; load to 50 t at 4 m; keyboard End on the radius slider (34 m). | "Not issued" with the reason: "The 30 m boom chart ends at 24 m. There is no rated capacity at 30 m." / "The 40 m boom has no chart row under 6 m." The share reads "—" and the row "No row" (shots/state-*-offchart.png, state-*-below-min.png). | pass |
| Nonsense | Set the load slider to "abc" and the ground select to "zzz" through script. | The slider coerced to its midpoint and recomputed; the select fell back to compacted hardcore and the control was reset to it; no script errors (AX-07 passed). | pass |
| Repeat | Double-clicked Reset; fired 30 rapid radius changes; clicked each control repeatedly. | Each input recomputes in place; no accumulation, no duplicate chart cells, state matches the last value; CLS 0 (PF-04). | pass |
| Reset | Changed every control, then pressed Reset. | Load 12.0 t, radius 11 m, 30 m boom, compacted hardcore, 68 %, Within chart; focus stays on the Reset button. | pass |
| Keyboard only | Tab from the skip link through the sliders (Arrow keys), selects (Arrow keys), Reset (Enter). | Every control changes the readout and sheet; focus never drops to body (AX-12 passed); focus rings visible (AX-03 passed). | pass |
| Phone | Operated every control at 390×844 (checker MB-07 and the states script). | The sticky readout keeps the stamp and reason on screen for every control; all controls are at least 44 px tall (MB-09). | pass |
| Reduced motion | Loaded at 390 with reduced motion and changed the radius to 16 m. | Stamp swapped to "Not issued" instantly, no running animations, nothing hidden (shots/state-390-reduced-motion.png; MO-01 passed). | pass |
| Visitor's own input | Set a 7.5 t load at 20 m on the 40 m boom on soft ground. | Row 20 m, 8.7 t, 97 %: Not issued above 90 %, plus the ground failure with the mat area needed; both reasons on the stamp line. | pass |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Every section has same width and padding | warn | Fixed in the structural revision: section 2 is full-width ruled rows under a 5/7 heading row, section 3 keeps the split, section 4 is a single 56ch column. |
| Thick coloured stripe repeated on cards | warn | Stays: one hazard tape under the header, the page's single brand mark; TT-04 passed (no stripes on cards). |
| Section numbers on content that is not a sequence | warn | Stays: the numbers are the lift plan's parts 1–6 and the four inputs in sheet order. |
| Hero visual is decoration | block | Not matched: the sheet computes and refuses (shots/state-*.png). |
| Centred headline over a framed screenshot | warn | Not matched. |
| A row of big stat numbers under the hero | warn | Not matched: the one big number (68 %) is produced inside the artifact and labelled sample. |

## Structural revision
- Weakest explanation or most template-like decision: the most template-like decision was the same 5/7 text-beside-box split for all three lower sections at the same width and padding; the weakest explanation on the phone was a 2,500 px sheet of boxed values after 780 px of controls, which pushed the page to 8.7 screens and left the readout as the only thing in the first screen's bottom band.
- Change made (structure, not styling): section 2 rebuilt as full-width ruled rows (number · part · explanation · rule) under a heading row; section 4 collapsed to a single column with the action inline; the phone sheet recomposed from boxed cells to labelled rows and the readout compacted into one row so the first slider shows in the first screen. Page height at 390 went from 7,340 px to 6,723 px.
- Before: shots-v2/390.png
- After: shots/390.png
- Score after the change and what still keeps it from a 10: Fit 9, Identity 8, Originality 8, Composition 8, Proof 7 (hero A). Proof stays at 7 because the chart is invented and the pilots cannot be named; composition is held back by the readout and the sheet's part 5 both carrying a stamp.
- Removal pass (each decorative element → its job, or "removed"): hazard tape under the header → site-hoarding brand cue, repeated on the share card, kept; grey fills on sheet values → "filled by Liftplan" meaning, kept; dashed boxes → "filled by hand by the appointed person", kept; stamp outline → state, kept; orange slider thumbs → the control's colour, kept; hover tint on chart cells → removed (cells are not controls); "allowable bearing" hint inside the ground label → removed (the options already say it); the desktop 1440 "Rigging" small text → kept, it explains the 0.9 t.

## Remaining weaknesses
- What a buyer still cannot judge: whether the product's chart data matches real manufacturers' charts (the sample is invented), which cranes are covered, what a pilot costs, and what the plan looks like on the actual tablet (no product screenshot was supplied).
- What was not verified: the share card on a public URL (og.png is shipped but https://liftplan.example/og.png is the client's to host); rendering on macOS or Windows, where the condensed display falls back to Arial Narrow or Helvetica Neue; Impeccable detect (not installed).

## Status
DONE
