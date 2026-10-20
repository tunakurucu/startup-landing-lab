# DESIGN-RECORD

Grainline homepage, built in the client's Next.js 16 app (`app/page.tsx` and `components/`), static export, Tailwind 3 brand tokens and the existing `Button` component. Checked on 2026-10-20 against the production build (`npm run build`, `out/` served over HTTP on 127.0.0.1:3000). Mode: Build.

## Product interpretation
- Audience, category, business model, brand constraints: Head brewers (judge on a phone with wet hands) and the owner who pays (laptop). Category: brew-day log for small craft breweries. Pre-launch, early-access requests only, no pricing yet. Brand: Tailwind tokens `ink / wort / foam / barley / hop / steel`, system font stacks, `Button` component, static export, no new dependencies.
- Promise (who / what changes / how): Brewers at small craft breweries / stop writing the brew sheet wet and typing it up dry / each reading is tapped on the brewhouse tablet as it is taken and the batch record assembles itself by knockout.
- Current alternative, including doing nothing: A paper brew sheet on a clipboard, sometimes typed into a spreadsheet after the brew day; doing nothing means the clipboard stays.
- The one advantage only this product has: The log is the brew day itself: readings go in at the kettle, in the moment, and the record is finished when the brew is, with no second pass (inferred from the brief: "readings go in on a brewhouse tablet and the batch record builds itself").
- Category frame (existing, subcategory or new) and what it costs to teach: Existing noun, "brew-day log", said in the subhead; costs nothing to teach a brewer, and "the brew sheet" in the h1 names what it replaces.
- Best-fit customer, and who it is not for: A small brewhouse still logging on paper or in a spreadsheet. Not for breweries with a production system already logging the brewhouse, or anyone who needs excise reporting (the brief forbids that claim; the page says so twice, beside the record claim and in the early-access scope).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplied none; the page uses the trade's own nouns instead (brew sheet, knockout, mash in, FV, pre-boil gravity) and the record lists interviews as the evidence that would unlock quotes.
- Biggest reason not to click, and the line that answers it: "What am I signing up for?" Beside the action: "Email and brewery name. No card, no sales call." Beside the form button: "No card, no sales call. You hear back by email." Cost status is stated in the early-access scope: "Pricing is not set yet."
- Conversion action and destination: "Request early access" → the `#early-access` form (email + brewery name). There is no inbox yet (brief), so `EARLY_ACCESS_ENDPOINT` in `components/EarlyAccessForm.tsx` is empty and the form says plainly that nothing was sent; the client supplies the endpoint and the form posts there.
- Visitor doubt 1 → artifact: "Can I use it mid-brew with wet hands?" → the hero pad: 56px keys, two taps per reading, step list with status, runs locally (`components/BrewDayPad.tsx`).
- Visitor doubt 2 → artifact: "Does the record really build itself, and what does the owner get?" → the "Batch 231 record" sheet that fills in as readings are logged (hero, left column at 1440, under the pad on phones) and the finished sample record in the `#record` section (`components/BatchRecordSheet.tsx`).
- Visitor doubt 3 → artifact: "What happens when a reading is off?" → logging 1.044 SG against a 1.046–1.050 target flags the row (hero) and the `#flags` section shows the flagged row with the brewer's note.

## Interview log
- Questions asked, each with the recommended default you offered: none asked; nobody could answer during this task, so the defaults below were taken and logged.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: (1) Units in the sample are °C, SG and hL (brief spells "colour", so UK conventions); the page says units and targets are the brewery's own. (2) Early access gives the brewery Grainline on its own tablet with its own step list and targets, and direct contact with the builders; the client should confirm. (3) Targets come from a recipe set once per beer; an off reading is flagged, never blocked; a reading can be changed from the same step. These are design claims to confirm with the product. (4) The site origin `https://grainline.example` in `app/layout.tsx` (needed for absolute share-card URLs) must be replaced with the real domain. (5) The form endpoint must be supplied before launch. (6) "You hear back by email" is a promise the client must keep.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Marble (workflow-theater, 2026-10-19): each capability has its own concrete artifact (invoice, PO checklist, prep sheet) and clicking a tab changes the evidence, not only the caption; on phones the tab set is unrolled into stacked sections. Limit: scroll-driven tab changes competed with clicks and the page ran to 16,000px. | Every control changes the artifact itself; one artifact per doubt; recompose the dense panel as a vertical sequence on phones. | The burnt-orange accent word in the headline, the isometric kitchen illustration, the logo row, scroll-driven selection. |
| Brand composition | End Close (workflow-theater, 2026-10-19): the exception being resolved ("Agent resolved · EXC-004") carries the claim better than the dashboard; a monospace face reserved for money and identifiers so data reads as data. Limit: the hairline-framed two-column hero box and stat row read like every B2B SaaS peer; the tab progress fill ignored reduced motion. | Show the failure case (the flagged reading) as the proof, and keep a mono role for readings, times and targets only. | The framed hero box, the four-cell stat row, violet accent, the "you / build in-house / legacy vendor" comparison. |
| Counterexample | Cal.com (workflow-theater, 2026-10-20): the hero booking page looked operable (duration chips, dates) and ignored clicks; grey body text under 4.5:1. | Attractive choice: draw a realistic tablet UI as a picture. Inappropriate here because the wet-hands claim is only credible if the keys work. Constraint retained: every drawn control in the pad responds within 300 ms, or it is not drawn. | A static mock with chips and dates; light-grey body text; star-rating rows. |

Departures from the workflow-theater recipe: H1 capped at 4.5rem (72px) instead of 5.5rem because the headline is ten words and the artifact, not the headline, is the signature; no step-timeline connector (the step list's status text does that job); one section deliberately omitted (a feature-card row).

## Hypothesis
- Archetype and why: Workflow theater. The value unfolds through steps of one brew day, and one work item (batch 231) recurs across the page: the brewer's pad (close-up), the record filling in (overview), the finished sheet (owner's overview), the flagged row (close-up).
- Type roles, faces and why they fit this product: Display = the brand's system sans stack at weight 800, −0.02em, `clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)`; body = same stack at 400, 17px/1.55; data = the brand's system mono stack for readings, times, targets and batch IDs (tabular numerals). The brand file fixes system stacks and the brief forbids new dependencies and web assets, so no face was added; contrast comes from weight, scale and the mono data role.
- Composition and grid: 1320px content width, 12-column grid. Hero: promise (5 cols) beside the tablet pad (7 cols), with the filling-in record under the promise at 1440 and under the pad below 1024. Record section: 4 cols text / 8 cols sheet. Flags section narrower (1024px, two equal columns). Early access: 6 / 6 with the form on the right. Density: open → dense → quiet → short.
- Ground, colour and material, and why this ground: Foam (brand ground) for the page, the colour of a bright brewhouse office. Two materials carry the two sides: the brewer's tablet is ink (dark glass, rounded) and the owner's record is white paper (square, hairline). Barley marks the current step and flags on ink; wort marks actions and flagged readings on paper; hop is reserved for a sent-request status.
- Signature artifact and its local behaviour: The brew-day pad: a step list with status (logged value and time / up next / later), a keypad for the current step, "Log reading" and "Use the sample reading". A reading outside the recipe range is flagged, never blocked; a logged step can be changed; a complete batch can be reset. Each log appends a row to the paper record beside the promise. All local; "Sample batch. Runs in your browser; nothing is saved." sits in the pad's header.
- Section sequence, with one section deliberately omitted: Hero (promise + pad + record) → the finished record for the owner, with the excise limit beside the claim → the flagged reading (mechanism and failure case) → early access (fit, not-for, what you get, cost status, form) → footer. Omitted on purpose: a feature-card row, and any logo or testimonial strip (none exist).
- Primary interaction and motion purpose: Tapping a reading in and seeing it land on the record. Motion is limited to colour: a 180ms colour swap on the selected step, a 900ms colour wash on a newly logged row, and a 120ms key press scale behind `prefers-reduced-motion: no-preference`. Nothing runs by itself.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure: a split hero with the brewer's pad beside the promise (A) against a full-width brew-day timeline under a short promise (B).
- Category default and anti-default this plan avoids: Default for brewery software: centred headline over a browser-framed dashboard screenshot, three feature cards (Log / Track / Report), a stock photo of a brewer with a tablet, hop-green palette. Anti-default: a dark "industrial terminal" page, or kraft-paper cream with a letterpress serif. The plan uses the brand's cream with a heavy system sans and an operable dark tablet beside a paper record: neither.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Promise left; operable tablet pad right (step list + keypad); record strip below the pad; sheet section later | Wet-hands entry; the record building itself | 8 | 7 | 7 | 7 | 7 | A real brewery's batch with permission, and the owner's side visible in the first screen |
| B | Short promise; full-width horizontal timeline mash-in → knockout with a reading pad opening under the selected step | The shape of the whole brew day | 6 | 7 | 8 | 6 | 6 | A timeline that survives a 390px screen without becoming a cropped strip |

Score each dimension 0–10.

- Chosen variant and why: A. It proves the wet-hands claim with working keys, and on a phone the pad is the product's own form, while B's timeline would have to be cropped or scrolled sideways at 390px.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| One sans, one weight everywhere | warn | Display 800 / body 400 / mono data role; brand stacks forbid adding a face. |
| Cream ground with a serif display | warn | Ground is the brand token `foam`; display is sans, so the signature does not apply. |
| Every section same width and padding | warn | Flags section narrowed to 1024px with equal columns; hero and record use 5/7 and 4/8 splits. |
| Centred headline over a framed screenshot | warn | Not used: split hero, operable artifact. |
| Control without destination/result | block | Every pad control changes the pad or the record; the primary action targets the form; the form shows a status. No `href="#"`. |
| No reduced-motion rule | block | `prefers-reduced-motion` rules in `app/globals.css`; movement is opt-in under `no-preference`. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Promise, action and line beside it; pad with three logged steps, step 4 current, keypad; record sheet under the promise cut by the fold (no false floor); nav with the same action label. Full page: shots/1440.png. States: shots/states/1440-1-initial.png … 1440-7-form-status.png. |
| 768×1024 | shots/768-top.png | Headline on two lines, no orphan; nav collapsed to Menu (the inline nav wrapped at this width before the fix); pad keeps two panes; sheet table fits without wrapping targets. Full page: shots/768.png. |
| 390×844 | shots/390-top.png | h1 at 96px and primary action at 14px top (menu button) and the hero button in the first screen; subhead visible; pad starts within the screen. Full page: shots/390.png shows the step list as an accordion, the sheet as stacked rows, the form full-width. States: shots/states/390-1-initial.png … 390-8-menu-open.png. |

## Checker result
- JSON: check.json
- Checker notes: 67 of 68 pass on the served production build (http://127.0.0.1:3000/); the first run before fixes is check-v1.json.
- Failures fixed: LY-02 (16px sideways scroll at 320px from the form's intrinsic width: `min-w-0` on the grid columns and `w-full min-w-0` on inputs); CO-01 (step number in `foam/50` on the selected row fell under 4.5:1: now `foam/70`). Also fixed from that run: CP-08 ("Best fit" → "Good fit"), PF-01 (footer mark now `loading="lazy"`).
- Warnings kept and why: ST-01, no pricing link or price: pricing is not set (brief); the early-access scope says "Pricing is not set yet. Early-access breweries hear first." beside the form, which is the honest disclosure until a price exists.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` → "npm error code ENOTFOUND" (no network, package not installed).

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, shots/390-top.png: "small craft breweries", "the brew sheet that fills itself in", "tap each reading on the brewhouse tablet". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | h1 + subhead name the category and the mechanism; the pad shows readings being logged. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The pad is the brewer's entry screen on sample data and the record is its output; both operable (shots/states/1440-3-logged-flagged.png). |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Product interpretation above: pad → wet-hands entry; record sheet → builds itself / owner's view; flagged row → off readings. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: entry and record building; record section: the finished whole, the owner, the excise limit; flags: targets, note, correction; early access: fit, not-for, cost. The flagged row repeats one sheet row on purpose as a close-up, with the note it carries. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: no answers possible; six assumptions logged. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Table above; axis: structure; default and anti-default named. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table and the departures line under it. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | Subhead: "a brew-day log for small craft breweries". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "The brew sheet that fills itself in as you brew" is false of a paper sheet and odd on a brewery ERP page. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1 (picture, false, odd elsewhere); "The batch record is finished at knockout and opens on the owner's laptop" (picture, false); "An off reading gets flagged, not blocked" (picture, false); "Early access is for breweries still on paper sheets" (picture, false). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero uses the trade's nouns (brew sheet, knockout). Evidence that would unlock quotes: brewer interviews or early-access replies. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Email and brewery name. No card, no sales call." beside the hero button; "No card, no sales call. You hear back by email." beside the form button (shots/1440-top.png, shots/states/1440-7-form-status.png). |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Headings in order: fills itself in as you brew → finished at knockout, opens on the owner's laptop → off reading flagged, not blocked → early access for breweries on paper sheets. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | Last lines: "as you brew." (1440), "itself in as you brew." (768), "in as you brew." (390). |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `app/page.tsx`: the hero section has padding only; no viewport-height rule anywhere. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No customers, numbers or quotes were supplied (brief); none shown. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Wort: buttons and flagged readings only. Barley: current step, flags and secondary actions on ink only. Hop: the "sent" status only. |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The brew-day pad, batch 231 record, flagged pre-boil gravity and the brewer-specific copy belong to this product. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Marble: no accent word, isometric art, logo row or scroll-driven tabs. End Close: no framed hero box, stat row, toast or violet. Cal.com: no static mock, no star rows. Common grammar only (split hero, two-column sections, footer). |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | `tailwind.config.ts` `future.hoverOnlyWhenSupported` wraps every `hover:` rule in `@media (hover:hover)` (verified in the built CSS); hover changes are colour only; no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Structural revision → motion contracts below. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | shots/390.png: the pad's step list becomes an accordion with the keypad inside the selected step; the record table becomes stacked rows; the flagged row stacks above its explanation. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `role="status" aria-live="polite"` in the pad (log, change, reset) and in the form (sent / unsent / error). |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All readings, times and targets belong to the sample batch labelled "Sample batch" in the pad header, the sheet caption and the flagged row; "8 readings · 1 flagged" counts that sample; no metrics. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | "Sample batch. Runs in your browser; nothing is saved." in the pad header; "Sample batch record" in the sheet header and under it; "Row from the sample record for batch 231" under the flagged row. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | "Request early access" reaches the form; the form submit shows a status that says exactly what happened; keys, Log reading, Use the sample reading, Change this reading, Start the sample over all change the pad and record (states/*.png); nav and footer anchors resolve (AX-08 pass). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All six renders opened and measured (1440×900, 1440×3115, 768×1024, 768×4100, 390×844, 390×5481); states captured at 1440 and 390: initial, typed, logged-flagged, logged-step view, complete, reset, form status, phone menu. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision below: shots-v1/1440-top.png → shots/1440-top.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing unverified; checker ran with no block failures. |
<!-- checklist:end -->

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | warn | Not present: left-aligned promise beside an operable pad (shots/1440-top.png). |
| Hero visual is decoration | block | Not present: the pad and record carry product state. |
| Three equal adjective cards | block | None on the page (TT-01 pass). |
| One sans, one weight everywhere | warn | Display 800 at 72px, body 400 at 17px, mono for data (TY-10 pass with two faces). |
| Every section has same width and padding | warn | Hero and record at 1320px with 5/7 and 4/8 splits; flags at 1024px, two equal columns; early access 6/6. |
| rounded-xl on every surface | warn | Radius by material: tablet 24px, keys 12px, buttons 8px, paper 0. |
| Shadow is the only depth system | warn | No shadows; depth from the ink surface, white paper on foam and hairlines. |
| Cream ground with a serif display | warn | Brand `foam` ground, sans display (CO-03 pass). |
| Fake liveness | warn | No clock, pulse or marquee; times come from the sample schedule and change only on a tap (MO-05 pass). |
| Small tracked-caps label above every heading | warn | None (TT-03 pass); mono labels appear only inside the artifacts as data. |
| Scaled-down desktop on mobile | block | shots/390.png: accordion pad, stacked record rows, stacked form. |
| Control without destination/result | block | AX-08 pass; every control operated in shots/states. |

## Structural revision
- Weakest explanation or most template-like decision: In the first render the "record so far" was a strip at the bottom of the dark pad, below the fold at 1440, so the first screen showed the brewer's entry but not the record writing itself, which is the h1's claim; and the left column under the action was empty, the template-like "copy left, big panel right" shape.
- Change made (structure, not styling): The hero became one client composition (`BrewDayHero`): the record moved out of the pad into a white paper sheet under the promise at 1440 (and under the pad below 1024), so the brewer's tablet and the owner's record share state and the first screen shows both sides. The pad's status line moved to its foot. Before/after checker runs: check-v1.json → check.json.
- Before: shots-v1/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 8, Identity 8, Originality 7, Composition 8, Proof 7 (overall 8/10). A 10 needs a real brewery's batch shown with permission, the product's actual tablet screens instead of a page-built pad, and a brewer's own words beside it.
- Removal pass (each decorative element → its job, or "removed"): tablet's rounded ink surface → marks the brewer's glass side and holds state colour; white square-cornered paper sheet → marks the owner's paper side; row colour wash on a newly logged row → shows which row the tap produced; hairline rules → group header/body/foot of each artifact; ⚑ and ✓ glyphs → logged and flagged state; mono face → data role; border-top before the early-access section → marks the shift to the conversion block; favicon-sized mark in header and footer → identity. Removed: the hero's inline record strip inside the pad (replaced by the paper sheet), the hop-green tick colour (failed contrast on ink), nothing else was added to remove (no glows, gradients, badges, eyebrows, icon tiles or shadows).

Motion contracts (MO-08):
- Step selection: tap a step → selected row background swaps, entry pane text swaps at once → static: the selected state and content are immediate → 180ms colour, ease-out `cubic-bezier(.2,.7,.2,1)`.
- Logged row: tap Log reading → the new record row appears at full opacity with a barley wash fading to transparent → static: the row is simply present → 900ms background-colour, same ease-out; colour-only, so it also runs under reduced motion.
- Key press: pointer down on a key → `scale(0.97)` → static: colour change only (`active:bg-foam/25`) → 120ms transform, same ease-out, inside `@media (prefers-reduced-motion: no-preference)`.
- Phone menu: tap Menu → list shown at once; no animation.

## Remaining weaknesses
- What a buyer still cannot judge: Whether the shipped tablet app matches the page-built pad (platform, key sizes, offline behaviour); what early access costs or when it starts; export formats; who is building it (no founder names or contact were supplied). The page says pricing is not set and that requests are not open yet; the client must set `EARLY_ACCESS_ENDPOINT`, the real site origin, and confirm the design claims in the interview log.
- What was not verified: The share card on a public URL (tags and files checked locally only); the rendered system fonts on the client's visitors' devices (this render used the machine's `ui-sans-serif`, which resolved to Inter, and DejaVu Sans Mono); Impeccable detect (no network).

## Status
DONE
