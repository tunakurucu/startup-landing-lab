# DESIGN-RECORD

## Product interpretation
- Audience, category, business model, brand constraints: Backend and platform engineers who adopt tools themselves; an open-source CLI (schema drift check for CI); free, MIT licensed, no company or paid plan; no existing brand, no usage numbers, no customers to cite.
- Promise (who / what changes / how): Backend and platform engineers stop finding schema drift through a failed deploy, because Driftcheck compares the schema their migrations will produce with production's and fails the CI job first.
- Five-second line, quoted as shown in the first screen (who + what): "Driftcheck is an open-source CLI for backend and platform engineers."
- Current alternative, including doing nothing: Doing nothing and finding out when the 6 pm deploy fails, or a hand-written schema-check script nobody maintains.
- The one advantage only this product has: A maintained, open-source check that compares migrations-will-produce against production-is-running and turns the difference into a CI exit code, installed with one `npx` line.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing frame "a CLI that fails CI on schema drift"; "schema drift" is known to the audience, so the cost is one subhead sentence.
- Best-fit customer, and who it is not for: Teams on Postgres or MySQL with a migrations folder and a CI job in front of deploys; not for teams on other databases, teams without CI, or buyers looking for a hosted product with support.
- Users' own words (three phrases with source, or 'none yet'): none yet. No interviews or reviews were supplied; the hero adapts the client's own phrasing ("a failed deploy at 6 pm", "a hand-written schema check script nobody maintains").
- Biggest reason not to click, and the line that answers it: Giving a CI tool access to the production database. Answered beside the action: "Free and MIT licensed, for Postgres and MySQL. Every line that reads your database is on GitHub."
- Conversion action and destination: Copy `npx driftcheck` (copies to the clipboard, confirms in a live region); secondary paths are the supplied docs (https://driftcheck.example/docs) and repo (https://github.com/driftcheck/driftcheck).
- Visitor doubt 1 → artifact: "Would it catch the drift that actually breaks my deploys?" → the drift bench: four hand-run changes plus the visitor's own statement, each producing a verdict, exit code and side-by-side schema table.
- Visitor doubt 2 → artifact: "How much work is it to wire into CI?" → the install command in the hero and the CI section with GitHub Actions, GitLab CI and shell examples (labelled as examples).
- Visitor doubt 3 → artifact: "Can I trust a tool that reads production?" → the line beside the action linking the MIT source, the mechanism diagram (what it reads, what the exit code does) and the spec list (licence, price, source).

## Interview log
- Questions asked, each with the recommended default you offered: None sent; nobody was available. Defaults I would have offered: (1) primary action = copy the `npx` command (default yes); (2) state "no paid plan" on the page (default yes, the brief says so); (3) show example CI config without real flag names (default yes, label it).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The CLI exits non-zero on drift (implied by "fails the CI job"); the output format and the sample's error messages are written for this page; CI examples use no flags or env var names.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Canary (runcanary.ai, audited 2026-10-19): replays a real agent failure as terminal output plus a case file, keeps one accent for action and reserves red/green for pass/fail. Limit: self-advancing tabs ignored clicks; unsourced stats. | Make the claim the evidence: show the failure the product catches as the output the engineer would read, with red/green meaning only fail/pass. | Yellow highlight-bar poster headline, all-caps display, numbered 01–08 sections, any auto-advancing control. |
| Brand composition | Keyframe Labs (keyframelabs.com, audited 2026-10-19): light ground, hairline rules, mono labels and a framed, labelled preview of real output beside the headline. Limit: capability list advanced on its own while scrolling. | Signal developer-grade infrastructure without a dark theme: hairlines, mono only for code and state, the product's output framed and labelled in the first screen. | Magenta frame, avatar video, bracketed tag chips in the subhead, mono spec strip. |
| Counterexample | Neon (neon.com, audited 2026-10-20): a glowing field of vertical bars fills the hero and much of the page depends on late-loading media, captured as black voids. | Attractive glow and media undercut a reliability pitch when they fail to render. | Constraint kept: every pixel of the page is HTML/CSS/inline SVG that renders from disk with no network; no glow, no video. |

Departures from the typographic-technical recipe: the hero is a headline band over a full-width instrument rather than an offset 5/7 split (see Structural revision); H1 peaks at 70px, below the recipe's 94px, so the bench owns the first screen.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the migrations/ folder of numbered SQL files; the hand-run hotfix typed into the production console; psql `\d orders` style table descriptions; the CI job log with a red ✕; process exit codes; the PR status check row; the deploy step that runs at the end of the day; the check_schema.sh script one person wrote; unified diff lines with − and +; index and column names like orders_created_at_idx; Postgres error text such as "relation already exists"
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Driftcheck" with seed 644075052: character, toy, generative (plus canon).
- Chosen move and why, or canon and the buyer-risk reason: Product as a toy. The product's value shows in one action (a schema difference becomes a failing exit code), and the sample can take the visitor's own SQL locally; a character would be a sticker for engineers judging reliability, and a generative system would hide the actual check.
- Idea sentence ("[inventory thing] becomes [the move]"): The hotfix someone typed into the production console becomes a toy: type it into a sample production database and watch the CI check go red before the deploy.
- The same sentence with the nearest competitor, and why it fails: "The hotfix typed into production becomes a toy for check_schema.sh / for a migration tool's validate command": a hand-written script has no page and only checks what its author remembered, and migration tools sell writing and applying migrations; the loop of hand-run change → schema diff → exit code before deploy is this product's whole job.
- Statement level (quiet, bold or loud) and why: bold. The first screen is owned by the bench; sections below stay quiet and carry setup, mechanism and licence facts, reusing only the red/green diff notation.
- First viewport at 1440 (placement, sizes, live thing, refused default): Headline band: 70px two-line h1 left (7/12), subhead + install row + licence line right (5/12). From y≈440 the full-width bench: chips and own-statement form | red CI verdict + output + why | the orders table as each side sees it. Refuses the centred headline with two buttons over a dark terminal window with traffic lights.
- First viewport at 390: Header with Docs and GitHub, 38px two-line h1, subhead (5 lines), install row with Copy command, licence line; bench from y=490 with its sample label, title, 2×2 chips and the top of the red verdict (354px of bench visible).
- Name test (the one with the …, eight words or fewer): The one where you break production yourself.

## Hypothesis
- Archetype and why: Typographic technical with a functional-entrance artifact: a focused developer CLI whose buying questions are "does it catch real drift" and "how do I wire it in".
- Type roles, faces and why they fit this product: Display and text: the platform system UI face (system-ui stack) at 800 for headlines and 400 for body, because no font files may load and the system face reads as native tooling; data: the platform monospace stack for commands, SQL, schema names and exit codes only.
- Composition and grid: 80rem wrap; headline band 7/5; bench as a full-width three-column instrument at ≥1101px, one column below; sections alternate between a 5/7 split (CI setup), a full-width diagram and a narrow diff.
- Ground, colour and material, and why this ground: Pale grey-green ground (#f1f3ef) like a printed log, white paper surfaces with ink hairlines and a flat offset edge; red only for drift/blocked and green only for pass, ink for actions. Light because engineers read CI logs and PR checks on light pages and the default is a dark terminal.
- Signature artifact and its local behaviour: The drift bench: a sample `orders` table where a preset or the visitor's own ALTER/CREATE/DROP statement changes "production"; the page recomputes the diff against what migrations/ builds and shows verdict, exit code, output lines, why it would break and a two-sided table.
- Signature on a phone (where the result shows after a tap): The verdict band sits directly under the 2×2 chips, so after a tap the red or green band and the output are in view; the own-statement form sits under the result, whose band stays within the same screen when the form is centred.
- Sample audit (counts, weekdays, states and stated rules agree): Expected schema has 6 columns and 2 indexes; each preset yields exactly one difference and the output says "1 difference"; rename yields 2 and says 2; the verdict, exit chip, output last line and table highlights always agree; no dates on the page; IF NOT EXISTS / IF EXISTS cases pass with a note, matching Postgres behaviour.
- To confirm with the client (claims and terms kept off the page): exit code on drift (page shows 1 in the sample, "≠ 0" in the diagram); real output format; how it connects (env var or flag names); whether it needs only read access to schema metadata; which objects it compares (columns, types, indexes, constraints, views); Node version requirement for npx; whether it diffs against migrations including the current branch's new files; deploy URL for an absolute og:image.
- Section sequence, with one section deliberately omitted: Hero + bench → mechanism (two schemas, one exit code) → CI setup examples → what it replaces (as a diff) → install + spec list → footer. Omitted: social proof and stats (none exist) and a pricing table (there is nothing to price).
- Primary interaction and motion purpose: Pressing a chip or running a statement swaps the result immediately; the verdict band gets a 320ms opacity flash (state/causality). Nothing moves by itself.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): Structure: where the instrument sits relative to the promise.
- Category default and anti-default this plan avoids: Default: dark ground, centred "Ship with confidence" headline, two buttons, a terminal window with traffic-light dots and a gradient glow, then three feature cards. Anti-default: cream ground with an editorial serif and hand-drawn illustrations. This plan is a light printed-log ground, system sans display, and a working instrument instead of a picture of a terminal.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | 5/7 split: promise and install left, drift bench right (single column inside) | Would it catch my drift? | 8 | 6 | 6 | 6 | 8 | Control, verdict and evidence visible together at 1440; less dead space under the left column |
| B | Headline band over a full-width bench whose three columns read control → verdict → both schemas | Would it catch my drift, and why exactly? | 8 | 7 | 7 | 7 | 8 | Real output format from the docs and a real repo or user quote once one exists |

- Chosen variant and why: Built A first (closest to the recipe), with B as the planned revision; after render A's weaknesses were confirmed and B shipped (see Structural revision).

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Avoided: no dark terminal window, no glow, no serif; light log ground with a working instrument. |
| Redrawn browser or phone chrome | Warn | Avoided: output is a plain `pre` in the bench, no traffic-light dots. |
| Three equal adjective cards | Block | Avoided: mechanism is a two-lane diagram, comparison is a diff. |
| Section numbers on non-sequence | Warn | Avoided: no section numbers. |
| Overused display face | Warn | System UI stack is named first, so the face is the visitor's platform face; recorded as a constraint (no font files allowed offline). |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Not blank, 1440 wide; h1 two lines, no orphan; bench from y≈440 showing chips, red verdict and table; table rows cut by the fold (no false floor). Full page shots/1440.png checked for the diagram, tabs, diff and spec list. |
| 768×1024 | shots/768-top.png | 768 wide; single-column hero; chips in one row of four; verdict and output visible; no overflow. Full page shots/768.png checked. |
| 390×844 | shots/390-top.png | 390 wide; h1 two lines; install row and line beside it; bench from y=490 with chips and the top of the verdict. Full page shots/390.png: table recomposed to stacked rows, diagram stacked, no sideways scroll. |

Artifact states captured in shots/states/: 1440-nothing.png, 1440-added-an-index.png, 1440-changed-a-type.png, 1440-dropped-a-column.png, the same four at 390, 1440-input-own.png, 390-input-own.png, 1440-input-nonsense.png, 390-input-nonsense.png and 390-reduced-motion.png.

## Checker result
- JSON: check.json
- Failures fixed: None at block level in the final run. Fixed before it: the "your-release-process.md" header row wrapped one letter per line (grid on the header li); the phone schema table broke "timestamptz" and "production" mid-word (recomposed into stacked label/value rows).
- Warnings kept and why: PS-06 lists the artifact's chips, Run check, Reset and the selected CI tab as filled actions; the only page action is "Copy command", identical in hero and close, and the others are instrument controls whose pressed state needs a fill. LY-05 counts the result panel inside the bench as a nested card; the bordered result groups verdict, output and reason as one unit inside the instrument, which is how a CI step looks. PF-07: og:image is relative (og.png) because the site's public domain was not supplied; inventing one is not allowed; swap in the absolute URL on deploy.
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>": not run: `npx --no-install impeccable --version` failed with an npm error (package not installed; no network to install it).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | Subhead names backend and platform engineers, what changes (CI fails before a breaking deploy) and how (compares two schemas); shots/1440-top.png, shots/390-top.png |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test from the captures: "a free CLI for backend engineers that fails CI when production's schema drifts from the migrations; copy npx driftcheck" |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The bench computes the diff and verdict from real local input; shots/states/ |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Bench; CI examples; MIT source line, mechanism diagram and spec list (Product interpretation) |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero=what and try; mechanism=exit code gates deploy; CI=where the step goes; replaces=the alternative; close=install facts |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Two hero variants table; both use the dealt toy move; defaults named |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table and departures line |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "an open-source CLI for backend and platform engineers" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Fail the CI job, not the 6 pm deploy" is false for the do-nothing path, where the deploy is what fails |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | h1 and four h2s each name a concrete object (CI job, two schemas, deploy step, check script) and are falsifiable |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; hero adapts the client's "6 pm" phrasing |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free and MIT licensed… Every line that reads your database is on GitHub." under the install row |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Fail the CI job, not the 6 pm deploy → It reads two schemas and fails the job when they differ → Add one step in front of your deploy step → It replaces the check script someone wrote once → Run it before your next deploy |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "the 6 pm deploy." at all three widths (non-breaking space in "6 pm") |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero is content-sized; no vh heights in the CSS |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; no quotes or logos on the page |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red only on drift/fail and the logo's drifted bar; green only on pass and the + lines; actions are ink |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The bench, sample and copy are specific to migrations-vs-production drift gating a deploy; Statement swap test |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No yellow bar or caps poster (Canary), no magenta frame or avatar video (Keyframe), no bar field or glow (Neon); copy and names original |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules are inside @media (hover:hover) and (pointer:fine); no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Verdict flash: chip/run/reset → state confirmation → none under reduced motion, text swaps instantly → 320ms opacity cubic-bezier(.2,.7,.2,1). Button press: pointer down → affordance → none → 150ms scale .97. Chip/tab colour: 150ms ease-out. Smooth anchor scroll only under no-preference. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Bench chips 2×2, table becomes stacked label/value rows, diagram stacks vertically; shots/390.png |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | Result panel, own-statement message and copy status are role=status aria-live=polite |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Only numbers are in the labelled sample (exit codes, char(3), run count) |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Bench label at its top; "Example config…" note at the top of the code panel |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Copy command copies and confirms; Docs/GitHub go to the supplied URLs; chips, Run check and Reset change the bench |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Render evidence and shots/states/ |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass list |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Checker ran clean of blocks; nothing unverified |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Submitted the own-statement form with nothing typed, at 1440 and 390 | Red message "Type a statement first, for example…", focus back in the field, result unchanged | pass |
| Out of range | Added a column with an 80-character name | Refused: names stop at 63 characters like Postgres; check not rerun and the message says so; input capped at 200 characters | pass |
| Nonsense | Typed "asdf qwerty ;;; DROP", then 200 unbroken Z's | One-statement message, then "The sample did not understand that…" listing what it reads; no sideways scroll (scrollWidth 390) | pass |
| Repeat | Double-clicked "Changed a type"; pressed a selected chip again | Same single-difference result; output notes "# run N on this page" so a re-run is visible | pass |
| Reset | Pressed Reset after own statements | Input cleared, "Added an index" pressed again, run counter reset, message confirms; focus stays on Reset | pass |
| Keyboard only | Focused chips and used Enter, Tab and Space; submitted the form with Enter; arrowed through CI tabs | Every control works; focus never drops to the body (checker AX-12 pass) | pass |
| Phone | Operated all chips and the form at 390×844 | Verdict and output in view after each tap (checker MB-07 pass, 7 controls); controls ≥44px | pass |
| Reduced motion | Loaded with reducedMotion: reduce and pressed "Dropped a column" | Verdict swapped instantly, animation-name none, nothing moved; shots/states/390-reduced-motion.png | pass |
| Visitor's own input | Ran ADD COLUMN refund_note, RENAME COLUMN, CREATE UNIQUE INDEX IF NOT EXISTS orders_pkey, MySQL MODIFY COLUMN currency CHAR(3), ADD on another table, duplicate column | Correct diffs (1, 2, 0 with note, 0), and Postgres-style errors for the other table and the duplicate column | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the bench is the working check; shots/states/ |
| Scaled-down desktop on mobile | Block | Matched in v2 for the schema table (words broken mid-token); fixed by stacked label/value rows |
| Every section has same width and padding | Warn | Not matched: split, full-width diagram, narrow diff and spec list vary measure |
| Shadow is the only depth system | Warn | Not matched: rules and one flat offset edge on the bench only |
| Overused display face without a reason | Warn | system-ui renders as the platform face (Inter-like here); kept because no font files may ship offline; reason recorded |

## Structural revision
- Weakest explanation or most template-like decision: Variant A's 5/7 split put the bench in a narrow column, so at 1440 the verdict and the two-sided schema table were stacked and the table fell below the fold, while the left column left a large empty area under the install row. The visitor saw a verdict without seeing what was compared.
- Change made (structure, not styling): Recomposed the hero into a headline band (h1 left, subhead and install right) over a full-width bench whose body is three columns: what was run (chips and own statement) → verdict, output and reason → the orders table as each side sees it. Phone order stays chips → verdict → own statement → table.
- Before: shots-v2/1440-top.png
- After: shots/1440-top.png
- Score after the change and what still keeps it from a 10: 7/10 composition and identity (Variant B row). A 10 needs the real output format and connection settings from the docs in place of the example, and real public proof once it exists.
- Removal pass (each decorative element → its job, or "removed"): logo's red bar → the "drift" in the mark and the only brand use of red; bench offset edge → marks the one instrument on the page; green-bar row banding in the schema table → row tracking across three columns; verdict flash → confirms a re-run; diagram arrows → the data flow; a dark terminal background for the output → removed (kept light so red/green read as state, not decoration).

## Remaining weaknesses
- What a buyer still cannot judge: The real output format, connection setup, permissions it needs, and which schema objects it compares; the page shows an example and sends them to the docs.
- What was not verified: Link destinations were not opened (no network); the share card can only be verified on a public URL; copying was checked in headless Chromium with clipboard permission (clipboard read back "npx driftcheck"); the selection fallback for blocked clipboards was not exercised.

## Status
DONE
