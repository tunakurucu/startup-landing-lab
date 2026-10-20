# DESIGN-RECORD

Page: `index.html` (opens from disk, no network). Mode: Build. Family: typographic technical. Skill version 0.4.

## Product interpretation
- Audience, category, business model, brand constraints: Developers whose code reads environment variables, with the platform team that owns CI as the second reader; a command-line checker for environment variables, on npm; cost and licence not stated in the brief; no brand files, so a new type and colour system was chosen from the product (terminal text, a ruled report).
- Promise (who / what changes / how): For a developer whose app reads env vars, the variable that is set on their laptop but missing from `.env.example` or CI is found before a deploy or a teammate hits it, because one local scan lists every variable the code reads and compares it with `.env.example` and the CI config, exiting non-zero on a problem.
- Current alternative, including doing nothing: grep for `process.env` by hand and eyeball `.env.example`; or doing nothing and finding out at runtime (`undefined`) or when a new teammate copies the example file.
- The one advantage only this product has: it reads the code (where variables are actually used) and compares that list with both `.env.example` and the CI config in one run, and can fail the CI job on the result; a `.env` linter checks only the file, grep checks only the code.
- Category frame (existing, subcategory or new) and what it costs to teach: existing "X for Y": a command-line checker for environment variables. It costs one sentence; "census" (the name) is explained by the report itself.
- Best-fit customer, and who it is not for: a repo whose code reads env vars and keeps a `.env.example`, with any CI that runs a shell step. Not for teams whose variables live only in a secrets manager and never in the repo (said in the Reference section, beside the install facts).
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief names no users; the hero adapts the folk phrase "works on my machine" (set on your laptop and nowhere else), which is not a sourced quote.
- Biggest reason not to click, and the line that answers it: "Will it upload my code or secrets?" Line beside the button: "Runs on your machine and sends nothing anywhere. It reads your source files, .env.example and your CI config. Installing from npm is free; there is no account and no key."
- Conversion action and destination: Copy the scan command (`npx envcensus`) and run it on your own repo; a lighter path "Read the help output" goes to the on-page `#reference`. The npm page is linked in the header and footer.
- Visitor doubt 1 → artifact: "Does it catch the variable I forgot?" → the census in the hero: a sample report whose rows you select to see the variable highlighted in `src/config.ts`, `.env.example` and `ci.yml`, with a sentence explaining the finding.
- Visitor doubt 2 → artifact: "What exactly counts as a problem, and what do I do?" → the three-row rules table (finding, what envcensus saw, the fix) in "Three files, one list, three kinds of problem".
- Visitor doubt 3 → artifact: "How does it fail CI?" → the workflow step, the job log and the exit-code list in "In CI, a missing or unused variable fails the job".
- Audience decision (the brief's open question): pitch the individual developer first, because the product is an npm package that gives a result in one command and there is no proof yet for a team purchase; the CI section is written to the platform team as the second step, so the same page carries the tool from one laptop to the pipeline.

## Interview log
- Questions asked, each with the recommended default you offered: (1) Developers or the platform team? default: developers first, CI section addressed to the platform team. (2) Install path shown? default: `npx envcensus` in the hero, `npm install -g envcensus` in Reference. (3) Flag names (`--ci`, `--example`, `--ignore`, `--fail-on`, `--json`, `--version`), exit codes 0/1/2 and the report's column layout? default: plausible shapes, labelled as examples beside each block. (4) Cost and licence? default: "installing from npm is free; no account", no licence named. (5) Domain for the share image and a contact address? default: `https://envcensus.dev/share.png` in meta only, no email on the page.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the five defaults above; also that the tool scans JavaScript/TypeScript-style `process.env` reads (the sample uses it because the package is on npm). Names to confirm before launch: every flag in Reference, the exit codes, the `--ci` step, the report format, which CI config files are read, the licence, the og:image domain.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Rive (typographic-technical, 2026-10-20): the exact CLI install command sits in the hero with an OS tab and a copy button beside the GUI path. Limit: the hero depended on video tiles that stayed blank, and the mobile command wrapped onto three lines. | For a tool developers install, put the real command and a copy control in the first screen, and keep it one short line on phones. | No video column, no Orbitron-style display face, no OS tabs (npm is the only path). |
| Brand composition | Hedge (typographic-technical, 2026-10-19): a full-width two-line headline, a hairline rule, then a ledger-like page where a coloured qualifier carries the niche; domain inventory becomes a browsable ruled grid. Limit: with no imagery every section weighs the same and the mobile page grows past 11,000px. | A ruled, ledger-like report can be the identity of a page about counting and checking; colour is reserved for the state words. | No green second clause on every heading, no `/01` section numbering, no scrolling ticker. |
| Counterexample | Warp (typographic-technical, 2026-10-20): all-monospace page with numbered figures, section tags, a dot grid and a live task grid in the hero. Attractive because a CLI product "looks like" a terminal paper. Inappropriate: mono body at 16px/1.7 reads slowly, the hero grid of squares showed activity without showing a task, and sections rendered blank on scroll. | Constraint retained: mono is a role (headline and product text), the body stays in a sans, and the hero shows a real report row, not abstract activity. | No all-mono body, no figure numbers, no dot grid, no section index replacing the nav. |

Departure from the recipe: the recipe's "language or scenario selector" became a row selector in the report (the product has no language variants); the recommended H1 maximum (94px) was cut to 52px because the mono face is wide and the statement shares the first screen with the report.

## Hypothesis
- Archetype and why: typographic technical. A focused developer CLI where "what goes in, what comes out, is the CI integration credible" are the buying questions; the product's only surface is text, so type and a real report carry identity.
- Type roles, faces and why they fit this product: display and headings in the system monospace stack (`ui-monospace, SF Mono, Menlo, Consolas, DejaVu Sans Mono…`), because the product's entire output is monospace terminal text and the page cannot load font files offline; body in the system sans (`system-ui…`) for reading speed; mono for code, report cells and state words. Two faces, each with a role. Inter/Geist avoided.
- Composition and grid: 1280px max; hero split 11/13: left-aligned statement, command and button on the left, the report on the right, then the three source panes in a full-width row of three; sections alternate a 5/7 text-to-evidence split; footer plain.
- Ground, colour and material, and why this ground: cool off-white `#f5f6f3` (not cream: r−b = 2) because the product is read in an editor and a CI log page, which are light for most visitors by day, and a dark terminal frame is the category default. Hairline rules and white panes carry depth; no shadows, no gradients. Yellow `#fff1a8` marks the selected row and highlighted lines only; red marks problems and `exit 1`; green marks a passing state. Action colour is ink.
- Signature artifact and its local behaviour: the census: a five-row report (variable, read in code, `.env.example`, `ci.yml`) whose rows are buttons; selecting one highlights the variable's line in `src/config.ts`, `.env.example` and `ci.yml`, writes a state line in each pane's caption ("not set here", "listed, but unused") and a plain-language sentence in a `role=status` region. Preselected row: the variable set on the laptop and nowhere else, matching the h1. Labelled "Example output" beside it.
- Section sequence, with one section deliberately omitted: promise + census → how it decides (three findings, exact lines, the fix) → in CI (step, log, exit codes) → reference (help output, install, where it runs, source status, who it is not for) → final action → footer. Omitted on purpose: a three-benefit grid and any "trusted by" or stars row (no users, no stars).
- Primary interaction and motion purpose: row selection to compare three sources at once; copy buttons that report their result. Motion is limited to 180ms background-colour transitions on rows, highlighted lines and buttons; nothing moves or fades text.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure.
- Category default and anti-default this plan avoids: default for a CLI dev tool: dark ground, neon accent, Inter headline centred over a terminal-window screenshot with a blinking cursor, three Fast/Private/Simple cards, a GitHub-stars badge and "Get started". Anti-default: cream paper, serif editorial headline, founder-letter tone, no code in the first screen. This plan: light cool ground, mono headline left-aligned, a ruled report as the artifact, no cards, no cursor, no stars.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Offset statement (h1, subhead, command, button) above a full-width census: report on the left, three source panes on the right, so the trace is one glance | Does it catch the variable I forgot; what does the output look like | 8 | 7 | 7 | 5 | 8 | The report and the statement sharing the first screen; the real shipped output format instead of an example |
| B | Split hero: statement on the left, the report on the right in the first screen; the three source panes in a full-width row beneath | Same, with the report visible before any scroll | 8 | 7 | 7 | 7 | 8 | The real output format; a visitor's own repo in the report instead of a sample |

Score each dimension 0–10.

- Chosen variant and why: A was built first because it keeps the report and its sources side by side; after render the first screen's right half at 1440 was empty (see Structural revision), so the page moved to B.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or anti-default | Block (PS-08) | Neither: light cool ground, mono display, ruled report, no cards, no cursor, no stars; see the default and anti-default above |
| Hero visual is decoration | Block (PS-03) | The hero visual is the product's report with its three inputs; every cell is a real finding on the sample |
| Metrics without sources | Block (HP-02) | "3 problems", line numbers and `exit 1` are labelled "Example output… on a sample repo" beside the report and "Example output on the sample repo above" beside the CI log |
| Hover-only behaviour | Block | Row hover only underlines the name; selection is a button with `aria-pressed`, keyboard-operable |
| No reduced-motion rule | Block (MO-01) | Transitions are declared inside `@media (prefers-reduced-motion: no-preference)` |
| Control without destination/result | Block (AX-08, HP-04) | Rows change three panes and a status line; copy buttons write the clipboard and report "Copied: …" or a failure; "Read the help output" reaches `#reference` |
| Small tracked-caps label above every heading | Warn (TT-03) | None above headings; caps appear only as column headers inside the report and the rules table, where they label columns |
| Overused display face without a reason | Warn (TY-10) | Display is the system monospace, not on the list; chosen because the product's medium is monospace text and fonts cannot be fetched offline |
| One sans, one weight everywhere | Warn | Two faces (mono display and data, sans body), weights 400/600/700 by role |
| Shadow is the only depth system | Warn | No shadows; hairline rules, a 2px ink rule above the census and the closing block, white panes on the off-white ground |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | h1 in four lines with no single-word last line; command, button and the line beside it in view; report with the preselected row and its explanation; source panes cut by the fold; nothing clipped; full page in shots/1440.png |
| 768×1024 | shots/768-top.png | h1 in three lines; buttons on one row; census head and the report's four columns aligned under their headers (the v1 misalignment is gone); full page in shots/768.png |
| 390×844 | shots/390-top.png | h1 at 36px in four lines; subhead; command box, then the full-width primary button and the help link; nav wraps to a second row with 44px targets; report rows recomposed to label/value pairs in shots/390.png and shots/state-390-missing.png |

Artifact states: shots/state-1440-ok.png (DATABASE_URL, all green), shots/state-1440-unused.png and shots/state-1440-unused-sources.png (LEGACY_SMTP_HOST: ".env.example: listed, but unused" in red, code pane "not read anywhere", CI pane "not needed"), shots/state-390-missing.png and shots/state-390-missing-sources.png (FEATURE_FLAGS_URL on a phone: row, sentence, highlighted code line, ".env.example: missing here"), shots/state-1440-copied.png (status line "Copied: npx envcensus" after the primary button), shots/320-top.png (320px reflow, no sideways scroll).

## Checker result
- JSON: check.json
- Checker summary: 68 passed, 0 block failures, 0 warnings, 0 not run; run from disk with `node scripts/check-page.mjs index.html` on 2026-10-20
- Failures fixed: TY-03 (census h2 was 16px against a 17–18px lead; now 24px); LY-04 (nav links pulled to the phone edge by a negative margin; margin removed); MB-02 (phone nav targets 31–32px wide; now min-width 44px). Earlier v1 run: shots/v1/check.json.
- Warnings kept and why: none kept. ST-01 passes on "Installing from npm is free"; no price or licence is named because the brief gives none (listed for the client).
- Optional tools (Impeccable detect, web-design-guidelines): not run: `npx --no-install impeccable --version` cannot run offline and the package is not installed; no network in this environment.

## Checklist
The other 68 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | shots/1440-top.png, shots/390-top.png: h1 names the outcome; subhead says "command-line checker for environment variables", what it scans and compares, and that it exits non-zero |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Subhead's first sentence plus the `$ npx envcensus` box and a report titled "What a run prints" in the same screen (shots/1440-top.png) |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero visual is the report with variable, code location, `.env.example` and `ci.yml` columns, and its three inputs (shots/1440-top.png, shots/state-1440-unused-sources.png) |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Product interpretation: census (doubt 1), rules table (doubt 2), CI step + log + exit codes (doubt 3) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero: outcome and output; How it decides: the three rules and fixes; In CI: the step, the log and exit codes; Reference: flags, install, status, who it is not for; Closing: the action only. The "sends nothing anywhere" line appears beside both action blocks on purpose (CP-09), not as a section |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log: five questions with defaults, no answer, defaults applied and listed |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants table: axis structure; default and anti-default written out and avoided |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table (Rive, Hedge, Warp) and the departure note under it |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "envcensus is a command-line checker for environment variables" is the subhead's first sentence (shots/390-top.png) |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Find the env var set on your laptop and nowhere else" is odd on grep's page and false of doing nothing |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1 3/3; "What a run prints, on a sample repo" 2/3 (picture, false); "Three files, one list, three kinds of problem" 3/3; "In CI, a missing or unused variable fails the job" 3/3; "The help output is the documentation" 2/3 (picture, false); "Run it on your repo. It takes one command." 3/3 |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet" recorded; the hero adapts the common developer phrase "works on my machine", flagged as unsourced |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Runs on your machine and sends nothing anywhere… Installing from npm is free; there is no account and no key." directly under the buttons (shots/1440-top.png) |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Find the env var set on your laptop and nowhere else → What a run prints → Three files, one list, three kinds of problem → In CI, a missing or unused variable fails the job → The help output is the documentation → Run it on your repo |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | 1440: "nowhere else."; 768: "and nowhere else."; 390: "nowhere else." (shots/1440-top.png, shots/768-top.png, shots/390-top.png) |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | `.hero` has padding only; no vh/svh height anywhere in the stylesheet |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied (no users, stars or benchmark); none invented; the working sample and the mechanism carry the page |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Yellow only on the selected row and highlighted lines; red only on problem words and `exit 1`; green only on passing states; the ink button is the action (shots/state-1440-unused-sources.png) |
| TT-05 | Replacing the logo would not turn this into another company's page. | pass | The headline, the census with its three named files and the help text are specific to envcensus; no other product's name or claim fits them |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Originality pass below: no Rive tile column or OS tabs, no Hedge two-tone headline, numbering or ticker, no Warp mono body, dot grid, figure numbers or task grid |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | The row-hover underline is inside `@media (hover: hover) and (pointer: fine)`; the row background hover is a plain colour change; there are no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts section below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Report rows become name + three label/value lines; the rules table becomes labelled stacks; source panes stack full width with inner horizontal scroll (shots/state-390-missing.png, shots/390.png) |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | `#detail` is `role=status aria-live=polite`; each copy button writes to a `role=status` span |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page (shots/1440.png) |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Report numbers sit under "Example output… on a sample repo"; the CI log says "Example output on the sample repo above"; exit codes are the tool's own contract, labelled example in Reference |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels sit in the census head, in each codeblock's caption ("Example step; adapt to your CI", "Example of the help text; run the command for the shipped version") |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Copy buttons write the clipboard and show "Copied: …" (shots/state-1440-copied.png); "Read the help output" and "Reference" reach `#reference`; "npm" reaches the package page on npmjs.com; rows change the panes |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All PNGs in Render evidence opened; widths 1440/768/390/320; states ok, not set (default), missing, unused and copied captured at 1440 and 390 |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision below: shots/v1/1440-top.png → shots/1440-top.png |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Nothing unverified; render and checker ran from disk |
<!-- checklist:end -->

## Motion contracts
| Animation | Trigger | State change and purpose | Static fallback | Duration and easing |
| --- | --- | --- | --- | --- |
| Row select | Click or keyboard on a report row | Selected row turns yellow, matching lines in three panes turn yellow, caption state and status sentence swap (text swaps at once) | Immediate colour change under reduced motion (transitions are inside `prefers-reduced-motion: no-preference`) | 180ms background-colour, `cubic-bezier(.2,.7,.2,1)` |
| Button hover | Pointer over a button | Slightly lighter fill to confirm the target | Immediate | 180ms background-colour, same curve |
| Copy result | Click on a copy button | "Copied: …" text appears in a reserved status line, clears after 4s | Text only, no movement | none |

## Gate after render
Run on the screenshots. If rendering failed, run it on the source and start the first row with `source only`.

| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: shots/1440-top.png shows the report with real findings as the hero visual |
| Centred headline over a framed screenshot | Warn | Not matched: left-aligned headline beside the report |
| Three equal adjective cards | Block | Not matched: the three findings are rows of a ruled table with sentence-long cells (shots/1440.png) |
| Scaled-down desktop on mobile | Block | Not matched: report rows and the rules table recompose at 390 (shots/390.png) |
| Small tracked-caps label above every heading | Warn | Not matched: no eyebrow above any h2; caps only as column headers |
| Fake liveness | Warn | Not matched: no cursor, pulse or ticker; MO-05 passed with nothing changing after 5s |
| Every section has the same width and padding | Warn | Partly matched: sections share padding, but the hero is a split, the rules section a 5/7 text-to-table split, Reference a 7/5 code-to-facts split and the closing a single column; densities differ (shots/1440.png) |
| Dead space in the first screen | Block (visual QA) | Matched in v1 (shots/v1/1440-top.png: empty right half); fixed by the structural revision |

## Structural revision
- Weakest explanation or most template-like decision: the v1 hero put the statement alone in the first screen with the right half empty at 1440 and the report starting at about 750px, so the strongest proof was below the fold on desktop; the report rows also rendered at 505px because of a global `li` measure, misaligning columns at 768.
- Change made (structure, not styling): the hero became a split: statement on the left, the census head and the report on the right in the first screen; the three source panes moved to a full-width row of three beneath; the li measure rule was scoped to prose. Also the Reference grid was flipped to 7/5 so the help text no longer scrolls sideways at 1440.
- Before: shots/v1/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: Fit 8/10, Identity 7/10, Originality 7/10, Composition 7/10, Proof 8/10. A 10 needs the shipped report format in place of an example, and a way for the visitor to paste their own `.env.example` and see their report, which would need the real scanner in the page.
- Removal pass (each decorative element → its job, or "removed"): brand glyph (lined box) → marks the product, repeated in the favicon; `$` prompt → says the box is a shell command; yellow fill on the selected row and highlighted lines → selection state; red and green words → finding states; 2px ink rule above the census head and the closing block → separates figure and final action from prose; 1px rules in the report, rules table and facts → table structure; border on the command box → marks it as copyable code; code chips in prose → distinguishes identifiers from words; reserved copy-status line → announces the copy result without layout shift. Removed or never added: dot grid, blinking cursor, section eyebrows, section numbers, shadows, gradients, icon tiles, GitHub-stars badge.

Originality pass: Rive — no tile column, no uppercase display, no OS tabs, no editor sign-up; only the "command + copy in the hero" principle. Hedge — no coloured second clause on headings, no `/01` numbering, no ticker; the ruled report is a table of findings, not a coverage grid. Warp — body in sans, no dot grid, no numbered figures, no section index, no abstract grid of squares. Common grammar shared (left-aligned headline, two buttons, a conventional section order).

House-style pass: no earlier pages from this skill exist in this project; choices broken on purpose against the skill's own recipe defaults: no dark ground, no language-tab chooser, mono display instead of a grotesk.

## Remaining weaknesses
- What a buyer still cannot judge: the real report format, the real flag names and which CI files are read (all examples until the client supplies the shipped help text); the languages and lookup patterns the scanner understands; scan speed; the licence and whether a paid tier is planned.
- What was not verified: the share card on a public URL (og:image points at a domain the client must confirm); the npm link's target (no network here); clipboard behaviour in browsers other than Chromium.

## Status
DONE
