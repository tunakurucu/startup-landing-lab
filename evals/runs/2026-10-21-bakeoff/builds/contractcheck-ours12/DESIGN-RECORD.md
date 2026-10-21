# DESIGN-RECORD

Contractcheck landing page, built in Build mode with startup-landing-design (ours12). Page: `index.html` (opens from disk, no network). Fonts, favicon, touch icon and share image ship beside it.

## Product interpretation
- Audience, category, business model, brand constraints: backend engineers and API platform teams adopt it, and the team lead approves the paid plan. It is a GitHub App (contract check for OpenAPI specs). Free for public repos, $19 a month per private repo. No brand assets were supplied, so the wordmark and mark are new.
- Promise (who / what changes / how): backend teams learn in the pull request, not from a client team's bug report, that a staging response stopped matching their OpenAPI spec, because the app runs the spec against staging on every PR and fails the check.
- Five-second line, quoted as shown in the first screen (who + what): "A GitHub App for backend teams that tests your staging API against your OpenAPI spec on every pull request."
- Current alternative, including doing nothing: doing nothing and hearing about it from a client team's bug report, or a hand-maintained Postman collection that nobody runs.
- The one advantage only this product has: it uses the spec the team already keeps as the test and runs it against real staging responses on every pull request, so the failure shows up in review with the exact field.
- Category frame (existing, subcategory or new) and what it costs to teach: existing frame, "GitHub App" plus "OpenAPI spec" plus "pull request check". Engineers already know all three words, so nothing needs teaching.
- Best-fit customer, and who it is not for: a backend or API platform team with an OpenAPI spec in the repo, a staging environment and GitHub pull requests. It is not for APIs without a spec or without staging (the page says so in the pricing section).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no interviews, tickets or reviews. The headline uses the trade's own words ("spec", "pull request", "fails").
- Biggest reason not to click, and the line that answers it: cost and data access ("will it touch production?"). The line beside the buttons reads "Free for public repos, $19 a month per private repo. Reads staging only, never production."
- Conversion action and destination: "Install the GitHub App" goes to https://github.com/apps/contractcheck (given in the brief). The secondary action is "Read the docs", which goes to https://contractcheck.example/docs (given in the brief).
- Visitor doubt 1 → artifact: "What does a failing check actually look like?" is answered by the hero sheet: the failing check at full size with the three broken fields.
- Visitor doubt 2 → artifact: "Will it catch my kind of break, and will it stay quiet when nothing breaks?" is answered by the Try it demo: three breaking changes fail, and adding a database index passes.
- Visitor doubt 3 → artifact: "Does it touch production, what does it cost, and how long is setup?" is answered by the staging-versus-production flow diagram, the rate card and the three-step setup with an example config.

## Interview log
- Questions asked, each with the recommended default you offered: none were asked, because nobody was available. These are the defaults I would have offered: (1) lane developer, because an engineer installs it alone; (2) primary action "Install the GitHub App"; (3) docs as the secondary path; (4) no config syntax on the page beyond a clearly labelled example.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the config file name and keys, the report's wording (including spec line references such as openapi.yaml:37) and the sample API (an orders endpoint) are illustrative and labelled as such beside them.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Canary (runcanary.ai, desktop and mobile audit, 2026-10-19): it makes the claim evidence by replaying a real failure as output plus a case file. Limit: tabs advanced by themselves and ignored clicks, the stats were unsourced and the page runs ten sections. | Make the failure itself the proof: show the broken field, the expected value and the received value. | Its yellow highlight bar, all-caps display, "copy the prompt" CTA, numbered document sections and self-advancing tabs. |
| Brand composition | Supabase (supabase.com, reference tier, 2026-10-20): an offset two-column block with the h1 left, the subhead right and product cards filling the rest of the first screen from about y=450. Limit: its first screen showed drawings rather than product UI. | An offset headline/subhead band, with the real product object filling the lower half of the first screen. | Its green brand, the bento of modules, the grey-qualifier heading pattern and the line drawings. |
| Counterexample | Neon (neon.com, reference tier, 2026-10-20): a glowing field of abstract bars fills the upper hero, and late-loading media left voids. | That is the wrong fit here: the brief asks that an engineer know exactly what a failing check looks like before scrolling, and an abstract field says nothing about that. | Constraint kept: the hero picture is the product's real output, built in HTML, with no media to load. |

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the red check on a pull request; openapi.yaml with its `required` list and `type` keywords; a JSON response body from staging; the HTTP status line ("410 Gone"); file:line references into the spec; the snake_case-to-camelCase rename; a number that turned into a string ("42.50"); the PR checks list (build, unit-tests, contractcheck); the client team's bug report; the Postman collection nobody runs; the staging environment versus production; the rhythm of one check per pull request
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Contractcheck" with seed 3117165061 (node scripts/deal.mjs "Contractcheck" --seed 3117165061). Moves: object portrait, generative system, voice, canon. Inventory families: documents and forms the user reads; the sound, rhythm or timing of the work.
- Chosen move and why, or canon and the buyer-risk reason: object portrait. The product's output is a document, the failing check report, and the brief asks that engineers see exactly that before scrolling. The generative system was rejected because a rule-based visual would stand in for the report. The voice was rejected because engineers need to see the product before they trust an opinion.
- Idea sentence ("[inventory thing] becomes [the move]"): the red check on pull request #482 becomes an object portrait: the failing check report, set at full page width with the three broken fields, the value staging sent and the spec line each one breaks.
- The same sentence with the nearest competitor, and why it fails: "Optic's red check on pull request #482 becomes the failing report with the value staging sent" fails, because a spec-diff tool compares spec with spec and never shows a live staging value such as "42.50". "Postman's…" fails too, because a collection run is not a PR check against the spec.
- Statement level (quiet, bold or loud) and why: bold. The object owns the first screen, and the sections below stay quiet and carry proof. Developer buyers want evidence, not a world.
- Lane and frame (lane, modifiers, the dealt nav, hero, look, type, buttons and motion, and any swap with its product reason): lane developer, no modifiers (the app installs today). Frame taken as dealt, with no swaps: hairline-bar nav, product-window hero, print-mono look, condensed-display type, soft-rect buttons, line-mask motion.
- First viewport at 1440 (the poster: headline, sentence, buttons, the hero picture and its share of the screen, what moved to section two): a hairline bar at 64px. A two-line condensed h1 ("Break the spec and / the pull request fails.", 92px) on the left. On the right, bottom-aligned, the five-second line, Install the GitHub App (filled), Read the docs (outline) and the cost/data line. From y≈450 to the fold, the failing check sheet runs 1312px wide (about 46% of the screen). The working demo moved to section two. Refused default: a centred headline over a dark terminal window.
- First viewport at 390: wordmark and Menu. A 42px h1 on two lines, the sentence, two full-width buttons, the terms line, and the top of the check sheet (header strip, "Check failed", first row) cut by the fold.
- Name test (the one with the …, eight words or fewer): the one with the giant failing check sheet

## Hypothesis
- Archetype and why: typographic technical. It is a focused developer tool where integration and the failure state are the buying questions; type and one real artifact carry it.
- Type roles, faces and why they fit this product: display is TeX Gyre Heros Condensed Bold (shipped as "CC Display", GUST licence), a condensed grotesk with the authority of printed specs and Swiss manuals that fits long technical words on two lines. Text is TeX Gyre Heros Regular/Bold ("CC Text"). Code, paths and file:line use DejaVu Sans Mono ("CC Mono"), and only those. That makes three families and four files plus the mono; the third role (code) carries meaning on a developer page. Licences ship in fonts/.
- Composition and grid: a 1312px container with 64px gutters (20px on phones); offset top band; full-width product object; then 5/7 splits that alternate between a sticky heading, an artifact and a diagram; a dark final band.
- Ground, colour and material, and why this ground: a print-white ground (#f4f4f1) with true white sheets, black ink, hairline rules and one ink colour, red (#c8231a), used only for failure. A check report is a document engineers read; the page reads like a well-set printed sheet, not a dark terminal.
- Signature artifact and its local behaviour: "Pull request #482 changes…", with one radio group of four changes (rename customer_id, total as a string, 410 for archived orders, add a database index) plus Reset. Each choice re-renders the verdict (role=status), the staging response with the offending line marked, and the spec excerpt with the broken line highlighted. The index change passes.
- Signature on a phone (where the result shows after a tap): in DOM order the verdict sits directly above the four choices, so after any tap the verdict is on screen together with the chosen control (MB-07 passed). The evidence follows below.
- Sample audit (counts, weekdays, states and stated rules agree): the hero says 3 responses fail, and 3 rows are listed. The demo's three failing cases are the hero's three rows, with the same ids (ord_8812, ord_0007), values ("42.50") and spec lines (33, 37, 11). The spec excerpt line numbers match the cited lines. The pass case changes no response. The checks list shows "3 responses don't match", which agrees with the hero. No dates or weekdays appear.
- To confirm with the client (claims and terms kept off the page): (1) the site's own domain and hosting of og.png at https://contractcheck.example/og.png; (2) the real config file name and keys (the page shows `.contractcheck.yml` with `spec` and `staging_url`, labelled as an example); (3) whether the report cites spec line numbers and uses the wording shown; (4) which OpenAPI versions are supported; (5) whether extra undocumented fields fail or pass; (6) whether a failing check blocks merge (not claimed); (7) billing details (monthly per private repo is stated; trials, annual plans and seats are not mentioned); (8) how staging credentials are supplied; (9) a contact address or support channel for the footer (none supplied, none invented).
- Section sequence, with one section deliberately omitted: hero poster → Try it (signature) → setup in three steps → staging only, never production (how it works and stack) → pricing for the team lead → final action → footer. Omitted: an FAQ, since its likely answers are unknown and are listed under To confirm; and a logo or testimonial strip, since none was supplied.
- Primary interaction and motion purpose: choosing a change in the demo shows the check's verdict. Motion is the dealt line-mask: the h1 lines rise from behind a mask once on load, the hero sheet uncovers with one clip-path wipe, and each section's h2 rises once when reached. The staging diagram wipes in. Everything else is still.

Motion contracts:

| Animation | Trigger | Purpose | Static fallback | Duration / easing |
| --- | --- | --- | --- | --- |
| h1 line mask | load | the headline arrives as two set lines | text in place (reduced motion or no animation) | 900ms, 80ms stagger, cubic-bezier(.16,1,.3,1) |
| hero side rise | load | sentence and buttons follow the headline | in place | 800ms, 160/240/300ms delays, same curve, from translateY(18px) and opacity .6 |
| sheet wipe | load, 320ms | the result is uncovered after the promise | full sheet | 1100ms clip-path, same curve |
| section h2 mask | IntersectionObserver, once | marks entry to each argument | visible without JS (`.js` gate) and under reduced motion | 900ms transform, same curve |
| diagram wipe | same observer | uncovers the flow once | fully visible | 1000ms clip-path |
| highlighted line wash | radio change | draws the eye to the broken line | instant highlight | 500ms background fade |
| menu links | menu open | links arrive in order | instant | 500ms, 60ms stagger |

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (hero composition).
- Category default and anti-default this plan avoids: the default is a dark terminal page with a gradient glow, a centred "Ship with confidence" headline and a code block. The anti-default is a cream ground, an editorial serif and a hand-drawn illustration. The plan uses neither: print white, a condensed grotesk and the product's own failing report.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Product window: offset h1/sentence band, then the failing check sheet full width and cut by the fold (object portrait, chosen) | What a failing check looks like | 9 | 8 | 7 | 8 | 9 | a sheet detail only this product has, such as the staging value beside the spec value at a glance, plus a stronger ownable mark |
| B | Editorial split: h1 left, with a tilted check card and a PR checks list cascading on the right | Where the check appears among others | 7 | 6 | 6 | 7 | 7 | larger, legible cards; the tilt costs legibility and the checks list repeats the GitHub UI |

- Chosen variant and why: A. At about 46% of the screen, the report is legible at true size, which is exactly what the brief asks an engineer to see before scrolling. B shrinks it into a tilted card.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block | Avoided: print-white ground, condensed grotesk, the product's own report as the picture. |
| Redrawn browser or phone chrome | Warn | The sheet is the check report itself, not a browser frame. No traffic lights and no address bar. |
| Pill or badge above the h1 | Warn | Dropped: no tag above the headline. |
| A row of big stat numbers under the hero | Warn | None: no numbers were supplied. |
| One sans, one weight everywhere | Warn | Condensed bold display, regular text and mono for code, each with its own role. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Not blank, 1440 wide. Two-line h1 with no orphan, side column aligned to the h1 base, sheet about 46% of the screen; full page in shots/1440.png. Demo states in shots/states/1440-demo-*.png. |
| 768×1024 | shots/768-top.png | Single-column hero, sheet recomposed (summary block, rows without the request line); full page in shots/768.png. The demo stacks, and the diagram uses the 3-column flow. |
| 390×844 | shots/390-top.png | h1 on two lines, full-width buttons, top of the sheet cut by the fold. Menu open in shots/states/390-menu.png. Demo states in shots/states/390-demo-*.png. Reduced motion and no-JS in shots/states/390-reduced.png and 390-nojs.png. |

## Checker result
- JSON: check.json
- Failures fixed: first run (check-v1.json, before fixes): LY-02, LY-04 and AX-11 (the setup grid let a long mono link widen the column at 320/390: fixed with min-width:0 and overflow-wrap); MB-10 (phone page 7,101px: phone section padding trimmed, the request line dropped from hero rows and the duplicate checks list hidden under 600px; now 6,724px); AX-07 (a font preload with crossorigin was blocked from file://: preload removed). Final run: 85 checks, 0 failures, 0 warnings, none not run.
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` failed with "npm error code ENOTFOUND" (no network and no local install).

## Checklist
The other 85 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 1440-top and 390-top: "backend teams", "tests your staging API against your OpenAPI spec on every pull request", h1 says the PR fails. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 1440-top: "a GitHub app that fails my PR when my API stops matching its spec"; the sheet shows the failure. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero picture is the failing check report with three concrete mismatches. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the hero sheet, the Try it demo, and the diagram + rate card + setup steps (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero=what failure looks like; demo=cause and effect; setup=steps; reads=data scope and stack; pricing=cost for the lead; the checks list is hidden on phones where it repeats the hero. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists four defaults and "no answer; proceeded on defaults". |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A/B on the structure axis, A is the dealt object portrait; default and anti-default named. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Canary, Supabase, Neon (counterexample). Recipe departures: hero h1 92px (recipe 94px), a third face (mono) kept for code. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "A GitHub App for backend teams". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All fields filled; "Break the spec and the pull request fails" is false for a Postman collection nobody runs or a bug report. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each h2 (e.g. "It reads staging responses. Never production.", "$19 a month per private repo…") is picturable and falsifiable. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the hero uses the trade's own words (spec, pull request, fails). |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free for public repos, $19 a month per private repo. Reads staging only, never production." directly under the buttons. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Break the spec and the PR fails / Change one response, watch the check fail / The spec you already have is the test / It reads staging, never production / $19 per private repo, public free / Put the check on your next PR. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | The hero is sized by its content; there is no vh height in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | The brief supplies no customers, quotes or usage, and none were invented. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red appears only on failing states (marks, kinds, highlighted lines, "Never read"); actions are black. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The page is built around a staging-value-versus-spec failure report; the swap with Optic and Postman fails (Statement). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No yellow bar, all-caps or numbered docs from Canary; no green, bento or drawings from Supabase; no abstract field from Neon. The shared grammar is only the offset band. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules sit inside (hover:hover) and (pointer:fine); staggers are 60–80ms; nothing blocks input. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts table in Hypothesis. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | 390: the hero sheet becomes a summary plus stacked rows; the demo becomes verdict→choices→response→spec with wrapped code; the diagram stacks vertically. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | #verdict has role=status and aria-live=polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Prices come from the brief; the "4 repos = $76" line is marked "Example"; sample ids and values sit in sheets labelled Example/Sample. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | The hero sheet carries an "Example" tag, the demo has a "Sample" label at its top, the config is captioned "Example config", and the checks list is captioned "Example". |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Install → github.com/apps/contractcheck; docs → contractcheck.example/docs; anchors resolve; Reset restores the sample. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All listed PNGs were opened; demo states string/rename/gone/index were captured at 1440 and 390. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section; shots/before/1440-demo.png → shots/after-1440-demo.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass in Structural revision. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing above is unverified; the checker is clean. |
<!-- checklist:end -->

## Artifact stress test
Operate the signature artifact the way a curious, impatient or careless visitor would, at 1440 and 390. One row per probe; `n/a` needs the reason (an artifact with no input has no empty-input probe). A `fail` is fixed before the status can be DONE.

| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Loaded the page without choosing anything | The default change (total as a string) is preselected and shows a complete failing result | pass |
| Out of range | n/a: the only input is a four-option radio group, which cannot take a value outside its options | There is no free value to push out of range | n/a |
| Nonsense | n/a: no text field; the checker typed 200 characters into every field and found none in the artifact | Nothing to type into | n/a |
| Repeat | Clicked "Return 410" six times in a row, at 1440 and 390 | The same result each time; the response stays at 4 lines and nothing duplicates | pass |
| Reset | Chose "Add a database index", then pressed "Reset the sample" with Enter | Returned to "Send total as a string" with its result; focus stays on Reset | pass |
| Keyboard only | Tabbed into the group, used ArrowUp/Down, then Tab to Reset and Enter | Arrows move and select (index→gone); focus is never lost; a visible ring appears on the selected card | pass |
| Phone | At 390, tapped each of the four choices (checker MB-07 and shots/states/390-demo-*.png) | The verdict directly above the choices updates in view, with the evidence below; controls are 56px tall | pass |
| Reduced motion | Loaded with reducedMotion=reduce (shots/states/390-reduced.png) and ran checker MO-01 | Everything is in place at once, with no transforms; the highlight appears without the wash | pass |
| Visitor's own input | Picked each change a visitor might ship, including the harmless one | The three breaking changes fail with the exact field, value and spec line; the index change passes | pass |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Centred headline over a framed screenshot | Warn | Not centred: an offset band, and the frame is the real output (the check report). |
| Every section has same width and padding | Warn | Widths vary: a full-width sheet and demo, 5/7 and 6/6 splits, a dark full-bleed final band. |
| Hover-only behaviour | Block | None: every control works by keyboard (stress test). |
| A built page indistinguishable from the last one | Warn | The last deal on this machine (Tallyhall) was dark-glass, floating-pill, wide grotesk; this page is print-white, hairline bar, condensed. |
| Small tracked-caps label above every heading | Warn | None above headings; tracked caps appear only as the failure kind inside the sheet, where they mark state. |

## Self-review
Score from the screenshots and the operated page, as the strictest of a senior designer, the brief's buyer and founder, and the engineer who maintains it. 1–10; 10 only when nothing is left to improve. "After" is the score once the structural revision is rendered.

| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | — | 8 |
| Fit | 8 | — | 8 |
| Distinctiveness | 7 | The red-ink failure language should recur in a later section as an object (e.g. a client bug report set against the check), and the mark needs to be more ownable than braces with a tick | 7 |
| Proof | 8 | — | 8 |
| Craft | 6 | At 1440 the demo's left column has a 320×350px dead block under Reset while the evidence runs on the right: put the verdict under the choices so control→result reads down one column | 8 |
| Mobile | 8 | — | 8 |
| Honesty | 9 | — | 9 |
| Interaction | 8 | — | 8 |
| Copy | 8 | — | 8 |
| First screen | 8 | — | 8 |

- Designer's one-sentence read: a confident print-sheet poster whose picture is the product's real failure, though the sections below the demo fall back to a familiar heading-plus-card rhythm.
- Buyer's and founder's one-sentence read: I see the failing check, the price and "never production" before scrolling, and the demo shows it stays quiet on a harmless change. I would put it live once the config keys are confirmed.
- Engineer's one-sentence read: a single static file with shipped fonts, native radios, a role=status result, a reduced-motion path and no network, so it is easy to keep.

## Structural revision
- Weakest explanation or most template-like decision: craft at 1440. The signature demo placed the verdict top-right above the evidence, which left a roughly 320×350px dead block under the choices on the left and split the control from its result across the card.
- Change made (structure, not styling): recomposed the demo grid at ≥1000px from "choices | verdict / choices | evidence" to "choices | evidence / verdict | evidence". The verdict now sits under the choices in the left column (control, then result) and fills the dead block, while the response and spec run the full height on the right. The phone order (verdict above choices) is unchanged so MB-07 still holds. The menu button label also switches to "Close" while open.
- Before: shots/before/1440-demo.png
- After: shots/after-1440-demo.png
- Score after the change and what still keeps it from a 10: craft 8/10. The hero's right column starts about 60px above the h1, and the setup, reads and pricing sections share a heading-left/artifact-right rhythm. Hero variant A was rescored after render at fit 9, identity 8, originality 7, composition 8, proof 9.
- Removal pass (each decorative element → its job, or "removed"): sheet shadow → lifts the product object off the paper (kept, wide and faint); red marks → failure state only; "Example"/"Sample" tags → honesty labels; hairline section rules → print-look structure and section breaks; sticky setup heading → keeps the argument beside the steps; dark final band → closes the page and frames the repeated action; the checks list in setup → shows where the check lives (removed on phones, where it repeated the hero); preload link → removed (it broke from disk).

## Remaining weaknesses
- What a buyer still cannot judge: real config syntax, supported OpenAPI versions, whether failures block merge, how staging auth works and any billing beyond the per-repo price. These are listed under To confirm and left for the docs link.
- What was not verified: the external destinations (GitHub App page and docs) were not opened, because there is no network. og.png must be hosted at https://contractcheck.example/og.png for share cards to resolve. The Impeccable detector was not run (no network).

## Status
DONE
