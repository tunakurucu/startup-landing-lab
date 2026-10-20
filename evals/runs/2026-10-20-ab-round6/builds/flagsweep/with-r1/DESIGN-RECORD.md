# DESIGN-RECORD

Page: `index.html` (opens from disk, no network). Skill: startup-landing-design v0.7, Build mode. Built 2026-10-20.

## Product interpretation
- Audience, category, business model, brand constraints: Engineers and tech leads who run feature flags in LaunchDarkly, Unleash or plain config files; an open-source CLI (Python, installed with pipx); no paid plan, MIT licensed, no company behind it yet; no existing brand, so name, mark and palette were made here.
- Promise (who / what changes / how): Engineers who use feature flags get a list of the flags that should already be gone, with the files and lines that still read them, because the CLI checks every flag key found in code against the flag service's history.
- Five-second line, quoted as shown in the first screen (who + what): "Flagsweep is an open-source CLI for engineers who use feature flags."
- Current alternative, including doing nothing: A quarterly "flag cleanup day" that keeps getting moved, plus a spreadsheet of flags with no owner; in practice, doing nothing and leaving dead branches in the code.
- The one advantage only this product has: It joins the two halves nobody joins by hand: each flag's history in the flag service (or config file) and every file:line in the code that reads it, across LaunchDarkly, Unleash and config files, in one report.
- Category frame (existing, subcategory or new) and what it costs to teach: Existing frame "open-source CLI" plus the job "finds stale feature flags"; costs nothing to teach to engineers.
- Best-fit customer, and who it is not for: Best fit: a team with dozens of flags in one or more repos and flag history in LaunchDarkly, Unleash or a versioned config file. Not for: teams with a handful of flags, or anyone wanting a hosted dashboard or a paid, supported product.
- Users' own words (three phrases with source, or 'none yet'): none yet. The brief supplies no user quotes; the hero adapts the brief's own phrase "flags that should have been deleted".
- Biggest reason not to click, and the line that answers it: "Is this a paid tool or a trial?" Answered beside the install button: "Free, MIT licensed, no paid plan."
- Conversion action and destination: Copy `pipx install flagsweep` (button "Copy install command", copies to the clipboard with a visible "Copied" status); lighter paths: "Read the docs" (https://flagsweep.example/docs) and GitHub (https://github.com/flagsweep/flagsweep), both from the brief.
- Visitor doubt 1 → artifact: "What does it actually output?" → the sample report in the first screen: nine flags, their 120-day rollout history, state, days unchanged, line counts and a listed / not listed result that recomputes with the cutoff.
- Visitor doubt 2 → artifact: "Does it point at real code, and can I trust what it says is dead?" → the "lines that still read it" panel: a report entry with file:line references and the example code with the dead lines struck, for one ON flag and one OFF flag.
- Visitor doubt 3 → artifact: "Does it work with our flag source, and what does setup look like?" → the final install block: copyable install command plus LaunchDarkly / Unleash / config file tabs with example scan commands, labelled as examples.

## Interview log
- Questions asked, each with the recommended default you offered: None asked; the task said nobody would answer. Defaults I would have offered: (1) primary action = copy the pipx command (default yes); (2) show a stale cutoff as an option (default yes, labelled illustrative); (3) say "no company yet" on the page (default yes, beside the licence facts).
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: The CLI accepts a configurable cutoff (shown as `--stale-after 30d`); the report format (columns, file:line list) is my plausible shape; the tool reports rather than editing code. All are labelled illustrative on the page and listed under To confirm.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Rive (rive.app, audited 2026-10-20): the exact CLI install command with an OS switch and a copy button sits in the hero beside the headline; limit: its hero video tiles stayed blank and the phone h1 dropped to 21px. | Put the exact install command and a copy control in the first screen, next to real output, so the claim can be checked in seconds. | Rive's black ground, all-caps Orbitron display face, drifting video tile column and OS tabs. |
| Brand composition | Neon (neon.com, audited 2026-10-20): one toggle on one chart shows both buyer motives with the same data; section heads are sentence claims; limit: late-loading media left black voids. | One dataset, one control: changing the cutoff re-reads the same nine flag histories, so the visitor sees the rule rather than two separate claims. | Neon's black ground with glowing bar clusters, mono chapter labels, two-tone grey headlines and logo row. |
| Counterexample | Warp (warp.dev, audited 2026-10-20): the hero figure is an 8×28 grid of abstract task squares changing state; the audit notes it "signals activity without showing what a task is". | Rejected: abstract activity marks. Constraint kept: every mark in the data portrait is a named flag with its key, source, state and days unchanged in text beside it. | Warp's abstract squares, all-monospace body text and self-animating hero. |

Departures from the typographic-technical recipe: light cool ground instead of the family's common dark; the artifact is a data portrait inside a report rather than a code tab switcher; mono body text avoided, as the recipe says.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): kebab-case flag keys; the rollout percentage stepping 0→10→50→100; a flag's change history that goes flat; the SDK call `variation("key")` and the `flags["key"]` lookup; file:line references; the dead else-branch; `flags.yaml`; the cleanup-day calendar invite moved every quarter; the flag spreadsheet with an empty owner column; the kill switch kept off on purpose; the stale cutoff in days; the struck-through lines in a PR diff
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Flagsweep" with seed 801412481 (node scripts/deal.mjs "Flagsweep" --seed 801412481). Moves: data portrait, audience's notation, character with a job; canon exit.
- Chosen move and why, or canon and the buyer-risk reason: Data portrait. The product's whole judgment is a pattern over time (a line that stopped moving), so drawing each flag's real rollout history with the cutoff window over it shows the rule itself; the report frame borrows the audience's notation (CLI output, file:line) as its container. Character rejected: engineers evaluating a tool that tells them to delete code want the mechanism, not a mascot.
- Idea sentence ("[inventory thing] becomes [the move]"): Each flag's change history becomes a data portrait: nine rollout lines from one repo, with a cutoff window you move, and the ones that run flat through it turn red and get their file and line count.
- The same sentence with the nearest competitor, and why it fails: "LaunchDarkly's change history becomes nine rollout lines from one repo, LaunchDarkly, Unleash and flags.yaml mixed, each with the files and lines that read it" fails: LaunchDarkly shows only its own flags, not Unleash or config-file flags, and its pages sell the flag service, not deleting flags from code.
- Statement level (quiet, bold or loud) and why: bold. Developer tool, self-adopted; the first screen carries the portrait, the sections below stay quiet and carry proof.
- First viewport at 1440 (placement, sizes, live thing, refused default): Nav 60px; h1 at ~92px Heros Cn bold, two lines, left 7/12; right 5/12 the subhead (five-second line in bold), the install box with "Copy install command" and "Free, MIT licensed, no paid plan. Read the docs"; from y≈420 the full-width sample report: label, command line, four cutoff buttons, summary, then the rows with 340px history strips; about 480px of it visible. Refused: a centred headline with two buttons over a framed screenshot, and a black terminal window with traffic-light dots.
- First viewport at 390: h1 two lines at 40px, the subhead (five lines), install box with a 48px "Copy" button (accessible name "Copy install command"), the note line, then the report from y≈465: label, command, four 44px cutoff buttons in one row, the summary, and the first row; control and result (summary, cutoff line, verdict tags) on one screen.
- Name test (the one with the …, eight words or fewer): the one with the flag lines that go flat

## Hypothesis
- Archetype and why: Typographic technical: a focused developer CLI where "what does it output" and "how does it decide" are the buying questions.
- Type roles, faces and why they fit this product: Display TeX Gyre Heros Cn Bold (GUST licence, shipped as woff): a condensed grotesk that reads like a printed report header and fits a long headline in two lines on phones. Body Inter Regular/SemiBold (OFL, shipped): body only, chosen for small-size legibility in dense report rows; it is not the display face. Data Latin Modern Mono (GUST, shipped): flag keys, commands and file:line refs; its typewriter cut makes the report read as printed output rather than the default dark terminal.
- Composition and grid: 1240px max, open statement over a full-width instrument; h1 7/12 + lede 5/12; below, quiet sections with one dense artifact each; the end block inverts to ink.
- Ground, colour and material, and why this ground: Cool grey paper #eef0f0 with a near-white sheet for artifacts and 1.5px ink rules, no shadows: the report should read like output you print and mark up. Ink #131619 for actions; one accent, rust #b3360e, only for "listed" (stale) state: the flat run of a listed flag, its tag, the count and the struck dead lines.
- Signature artifact and its local behaviour: The sample report (`figure.report[data-signature]`). Four buttons (14, 30, 60, 90 days) set the cutoff: the shaded window and its line move on every strip, rows flip between "listed" and "under N d" / "rolling out", the command line's `--stale-after` value changes, and the summary recomputes the listed count and line total (aria-live).
- Signature on a phone (where the result shows after a tap): The buttons sit directly above the summary line (count + line total) and the first rows; after a tap the summary and the first row's tag change in view (checker MB-07 passed, 4 controls, none off-screen).
- Sample audit (counts, weekdays, states and stated rules agree): Scan date fixed at 2026-10-14, no weekdays shown. Listed counts: 14 d → 8 flags / 27 lines; 30 d → 6 / 22; 60 d → 4 / 14; 90 d → 2 / 6 (verified by script). "Since" dates are computed from the scan date (74 days → Aug 1, 103 → Jul 3). Partial flags (recs-carousel 50%) are never listed, matching the stated rule. The detail panel's counts match the rows (6 lines in 4 files; 4 lines in 3 files). The kill switch is listed at every cutoff, which the caveat text says.
- To confirm with the client (claims and terms kept off the page): A public URL for the page so og:image can be absolute; the real command, subcommand and option names (`flagsweep scan`, `--stale-after`, `--source`, `--file`, env var names); whether the cutoff is configurable and its default; the real report format; whether the tool can edit code itself (page assumes it only reports); how history is read for plain config files (page does not say); whether there is an ignore list for kill switches; supported Python versions.
- Section sequence, with one section deliberately omitted: Hero + sample report → lines that still read each flag → how it decides (3 real steps + kill-switch caveat) → what it replaces (calendar invite, spreadsheet) → install, pick a source, scan → footer. Omitted: a features grid and any proof/testimonial section (no users or numbers exist).
- Primary interaction and motion purpose: Cutoff buttons move the window (transform, 220ms ease-out) so the eye follows which lines run flat through it; everything else is still.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): structure (split hero with the artifact in a side column vs. an open statement over a full-width artifact).
- Category default and anti-default this plan avoids: Default for a dev CLI: dark ground, all-mono type, a black terminal window with traffic-light dots under a centred headline. Anti-default: cream ground with an editorial serif headline. Plan: cool paper ground, condensed grotesk, a printed report with drawn history lines.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | 5/7 split: headline, lede and install on the left; the report in the right column with short history strips | What does it output | 7 | 6 | 5 | 7 | 7 | Strips wide enough to read as a portrait; the right column squeezed them into sparklines |
| B | Open statement over a full-width report: the data portrait gets the page width, cutoff window across all rows | What does it output, and by what rule | 8 | 8 | 7 | 7 | 8 | Real report output from the real CLI instead of an illustrative format |

- Chosen variant and why: B. The portrait only works when the lines are long enough to see them go flat, and the cutoff window across every row shows the rule at a glance.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block | Avoided: no dark terminal, no cream-and-serif; cool paper, condensed grotesk, printed-report artifact. |
| Centred headline over a framed screenshot | Warn | Not used: left-aligned statement with the lede beside it; the artifact is live HTML, not a screenshot. |
| Redrawn browser or phone chrome | Warn | Not used: the report has a label bar with the sample notice, no window dots. |
| Section numbers on content that is not a sequence | Warn | Numbers only on the three real steps of the decision and the two install steps. |
| Overused display face without a reason | Warn | Inter is the body face only; display is TeX Gyre Heros Cn. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened: 1440 wide, not blank; h1 two lines, lede, install and "Read the docs" visible; report from y≈420 with label, command, cutoff buttons, summary and four rows; full page shots/1440.png checked section by section. |
| 768×1024 | shots/768-top.png | Opened: 768 wide; h1 two lines; report columns recomposed (refs column dropped, header matches); full page shots/768.png: all sections single or two column, no overflow. |
| 390×844 | shots/390-top.png | Opened: 390 wide; h1 two lines, five-second line, install with Copy, report from y≈465 with buttons, summary and first row; full page shots/390.png is 6,227px (7.4 screens). |

Artifact states captured: shots/states/1440-cut14.png, 1440-cut30.png, 1440-cut60.png, 1440-cut90.png, 390-cut14.png … 390-cut90.png; other states: 390-menu.png, 1440-lines-off.png, 390-lines-off.png, 390-install-unleash.png, 390-nojs-reduced.png.

## Checker result
- JSON: check.json
- Failures fixed: TY-06 (11px text in the step drawings → 14px in a fixed-width SVG); LY-06 (a cutoff button hidden under the sticky header on Shift+Tab → focus handler keeps focused controls clear of the header, plus scroll-margin); LY-04, LY-01, LY-02 after the revision (the install grid child overflowed with the code block → div items with min-width 0); PS-06 warning (artifact buttons and tabs had opaque fills and counted as CTAs → transparent unselected states).
- Warnings kept and why: CP-07 matches "unleash" because Unleash is the name of a flag service the product supports; it is not marketing copy. PF-07: og:image is relative (og.png) because the brief gives no public URL for the page; inventing one is not allowed. Set it absolute on deploy.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and installing packages was not allowed; `npx --no-install impeccable` is not present in this environment.

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 390-top and 1440-top: "open-source CLI for engineers who use feature flags… lists every flag stuck fully on or off for weeks… with the files and lines". |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second test from the captures: "a CLI that finds feature flags stuck on/off so engineers can delete them; copy the pipx command". |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero artifact is a sample of the CLI's report, operable, labelled as a sample. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the sample report, the file:line panel and the install/source block (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Output → lines and dead branches → decision rule and limits → what it replaces → install and source; the old separate Sources section was merged into install. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three defaults; no questions could be answered. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A/B differ on structure; B is the dealt data portrait; defaults named and avoided. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Rive, Neon, Warp counterexample; departures under References. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "an open-source CLI for engineers who use feature flags". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named above; "Find the flags you forgot to delete" is odd on a cleanup-day invite or a spreadsheet template page. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each h2 names a concrete thing (lines that read a flag, cutoff, cleanup day and spreadsheet, the install steps) and could be false; none fits LaunchDarkly's page unchanged. |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the hero adapts the brief's "flags that should have been deleted". |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free, MIT licensed, no paid plan." directly under the install box. |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Find the flags you forgot to delete → Every listed flag comes with the lines that still read it → A flag is listed when it has served one value for longer than your cutoff → It replaces cleanup day and the flag spreadsheet nobody owns → Install it, point it at your flags, scan one repo. |
| HR-03 | The headline has no single-word last line at any of the three widths. | pass | "Find the flags you / forgot to delete" at 1440, 768 and 390. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero is sized by content; no vh heights in the CSS. |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; none shown. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Rust appears only on listed state: flat runs, "listed" tags, the listed count, struck dead lines, and the mark's flat segment (the brand mark is the same flat-line state). |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | The page is about deleting flags across LaunchDarkly, Unleash and config files from code; LaunchDarkly's version of the sentence fails (Statement). |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No dark ground, display faces, bar fields, tile columns, chapter labels or self-animating figures from Rive, Neon or Warp; only the install-in-hero and one-control-one-dataset principles transfer. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | All :hover rules are inside @media (hover:hover) and (pointer:fine); no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts below. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 each report row becomes key + tag / full-width strip / one meta line; the axis row is dropped; code panels scroll inside labelled regions. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | Summary `#sum` and both copy statuses are role=status aria-live=polite. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All numbers are inside the report and panels labelled "Sample report… written for this page" and "example code". |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Label bar at the top of the report; "Report entry · sample" and "example code" headers; "Example: option names show the shape" under each command. |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Copy copies and shows "Copied"; Docs and GitHub links go to the brief's URLs; in-page links resolve; cutoff buttons and tabs change content. |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All three widths opened; 768 fixed after viewing; cutoff states 14/30/60/90 captured at 1440 and 390 in shots/states. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision below; shots-v1/390.png → shots/390.png. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Checker clean of blocks, nothing unverified; status DONE. |
<!-- checklist:end -->

Motion contracts:
- Cutoff window: trigger = a cutoff button; state = window and line move to the new cutoff on all nine strips, tags and summary swap instantly; purpose = show which lines run flat through the window; fallback = the window jumps (reduced motion sets transition to 0s; the no-JS page shows the 30-day state); duration 220ms; easing cubic-bezier(.2,.7,.2,1); transform only.
- Cutoff button fill: trigger = press; colour change 150ms ease-out; fallback instant.
- Button press: :active scale .97, removed under reduced motion.
- Tabs and copy feedback: instant swaps, no animation.

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | No free-text input exists; tried pressing the already-selected 30 d button | Nothing changes, state stays valid; there is no field that can be empty | n/a: the artifact has only four preset buttons, no input field |
| Out of range | No numeric input; checked the extremes 14 d and 90 d | 14 d lists 8 flags / 27 lines with the window near the right edge; 90 d lists 2 / 6; the window never leaves the 120-day strip | n/a: presets only, both ends render correctly |
| Nonsense | No text entry possible inside the artifact | Not applicable | n/a: no field accepts typed input |
| Repeat | Double-clicked 60 d; clicked all four buttons in quick succession | Same result as a single click (4 / 14); no flicker or stuck transition | pass |
| Reset | Clicked 30 d after other cutoffs | Returns to the default: 6 / 22, command shows --stale-after 30d, same tags as first paint | pass |
| Keyboard only | Tabbed into the buttons, Enter on 30 d, Tab twice, Space on 90 d | Summary updated each time; focus stayed on the pressed button; never under the sticky header (LY-06 pass) | pass |
| Phone | Operated all four buttons at 390×844 | Summary and first row tag change in view; page did not scroll (scrollY 0); buttons 44px tall (MB-09 pass) | pass |
| Reduced motion | Loaded with reduced motion and no JavaScript (shots/states/390-nojs-reduced.png) | Full page visible, 30-day state rendered from static HTML, nav links shown in place; window jumps without sliding | pass |
| Visitor's own input | Chose each cutoff as a visitor would, read the command line | The `--stale-after` value in the command and every row follow the visitor's choice | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Hero visual is decoration | Block | Not matched: the hero artifact is operable sample output. |
| Small tracked-caps label above every heading | Warn | Not matched: no eyebrows. |
| Scaled-down desktop on mobile | Block | Initially the 768 layout had a header/column mismatch and a cut strip label; fixed by a tablet grid that drops the refs column and its header. Phone rows recomposed. |
| Same fade-up on every section | Warn | Not matched: no entrance animations. |
| A built page indistinguishable from the last one | Warn | Not compared: no earlier builds were available in this working directory; ground, faces and artifact were chosen from this product's inventory. |

## Structural revision
- Weakest explanation or most template-like decision: The separate "Sources" section (heading + three one-line example commands) repeated "LaunchDarkly, Unleash or a config file" from the hero and sat apart from the install block, so the final action said "install" but the visitor had to scroll back up to see how to run it; the end block was a template final-CTA band.
- Change made (structure, not styling): Removed the Sources section and merged it into the final block as a two-step sequence: 1 install (copy command), 2 scan with your flag source (LaunchDarkly / Unleash / config file tabs). Nav "Sources" became "Install". Also recomposed the phone hero density (shorter sample label, compact Copy button) so the report's first row reaches the first screen.
- Before: shots-v1/390.png
- After: shots/390.png
- Score after the change and what still keeps it from a 10: Variant B rescored Fit 8, Identity 8, Originality 7, Composition 8, Proof 8 (8/10 overall); a 10 needs the real CLI's output and command names, and a real repo run instead of an illustrative sample.
- Removal pass (each decorative element → its job, or "removed"): flat-line mark in the logo → the product's own rule as identity; shaded cutoff window → the rule being applied; dashed rules in lists → separate file:line entries; step drawings in "how it decides" → each step's mechanism; calendar invite and spreadsheet drawings → the alternative the product replaces; ink end band → marks the conversion block. Removed: the "cutoff" text label that overlapped the axis date, and the paper fill on unselected tabs.

## Remaining weaknesses
- What a buyer still cannot judge: The real report format, command names and how config-file history is read; there is no real run, benchmark or user yet, and the page says the sample is illustrative.
- What was not verified: Browsers other than Chromium (copy, tabs and the cutoff were operated in headless Chromium only); the share card on a public URL, since none exists yet.

## Status
DONE
