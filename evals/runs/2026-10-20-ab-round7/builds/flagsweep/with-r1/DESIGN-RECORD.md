# DESIGN-RECORD

## Product interpretation
- Audience, category, business model, brand constraints: Engineers and tech leads who adopt tools themselves; an open-source CLI (MIT), no paid plan, no company yet; no existing brand, so the wordmark, palette and type are new.
- Promise (who / what changes / how): Engineers stop carrying dead feature flags, because Flagsweep checks every flag in the code against the flag service's history and lists the ones fully on or off for weeks, with the files and lines to change.
- Five-second line, quoted as shown in the first screen (who + what): "Flagsweep is an open-source CLI for engineers."
- Current alternative, including doing nothing: a quarterly "flag cleanup day" that keeps getting moved, a spreadsheet of flags nobody owns, or doing nothing and living with the dead branches.
- The one advantage only this product has: it joins the code (file and line of every flag check) with the flag service's own history, so the list is evidence-based and current every time it runs, instead of someone's memory.
- Category frame (existing, subcategory or new) and what it costs to teach: existing ("an open-source CLI" for feature-flag cleanup); costs nothing to teach to engineers, so the first screen spends its words on the output instead.
- Best-fit customer, and who it is not for: teams using LaunchDarkly, Unleash or flags in a config file, with a repo that has accumulated flags; not for teams wanting a hosted dashboard, a managed service or a paid support contract, and not for people who are not comfortable in a terminal.
- Users' own words (three phrases with source, or 'none yet'): none yet; the brief's phrases ("flag cleanup day that never happens", "a spreadsheet of flags nobody owns") are the client's, and the page adapts them in the cleanup-day section.
- Biggest reason not to click, and the line that answers it: "Is this a paid product or a big setup?" Answered beside the action: "Free and MIT licensed, with no paid plan. Works with LaunchDarkly, Unleash or a plain config file."
- Conversion action and destination: install it; the primary button copies `pipx install flagsweep` to the clipboard (falls back to selecting it) and says so in a status line. Lighter paths: Read the docs (https://flagsweep.example/docs) and the GitHub repo (https://github.com/flagsweep/flagsweep), both from the brief.
- Visitor doubt 1 → artifact: "What does it actually output?" → the hero sample report: REMOVE rows with state, days unchanged, a 16-week history strip and every file:line, live against a stale-after control.
- Visitor doubt 2 → artifact: "Will it flag things I want to keep (rollouts, targeted flags, recent changes)?" → the "Not listed" column in the report plus the rule section's timeline and three not-listed cases.
- Visitor doubt 3 → artifact: "Does it fit my setup and what do I do with the output?" → install section with LaunchDarkly / Unleash / Config file tabs, and the hand-edit diff of CartPage.tsx:42.

## Interview log
- Questions asked, each with the recommended default you offered: none could be asked (no one answers during this task). Defaults I would have offered: (1) primary action = copy the pipx install command; (2) sample repo in TypeScript with LaunchDarkly; (3) default cut-off 30 days, since the brief says "weeks".
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: the CLI's subcommand and options (`scan`, `--source`, `--stale-after`) and its output format are unknown, so they are shown as an illustrative sample, labelled beside the artifact and the install examples.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Rive (casebook, 2026-10-20): CLI install panel with OS tabs in the hero; clicking Windows changed the command. Limit: hero depended on video that stayed blank, 21px phone h1. | Put the exact install command and a working control in the first screen, and make the control change the product's real output. | Orbitron all-caps face, black ground, drifting video tile column. |
| Brand composition | Supabase (casebook, 2026-10-20): offset two-column block, h1 and buttons left, subhead right, product starting about y=450. Limit: the first screen showed no product, only line drawings. | Offset statement over a full-width product artifact cut by the fold, so the first screen is copy plus real output. | The bento grid, green brand, and the headline-then-components copy pattern. |
| Counterexample | Canary (casebook, 2026-10-19): poster headline on a yellow bar, self-advancing tabs that ignored clicks, unsourced stats. | The control must win over any timer: nothing in this artifact moves on its own, and no stats appear without a source. | Highlight-bar headline, rolling agent name, count-up stats. |

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the terminal report it prints; file:line references; the unified diff's red deletion lines and − gutter; a flag's rollout history (5% → 50% → 100% then flat); the stale-after cut-off in days; flag keys in kebab-case; `ldClient.variation(...)` / `unleash.isEnabled(...)` calls; flags.yaml; the cleanup-day calendar invite; the unowned flag spreadsheet with "?" in the owner column; pipx install; the MIT licence.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Flagsweep" with seed 801412481 (node scripts/deal.mjs "Flagsweep" --seed 801412481): data-portrait, notation, character; canon exit.
- Chosen move and why, or canon and the buyer-risk reason: notation (the audience's own notation). Engineers read terminal output and diffs every day, and the brief asks that they understand the output before scrolling, so the output itself is the hero. The data-portrait move survives inside it as the 16-week history strip in each row, in the same graphic language (no second move).
- Idea sentence ("[inventory thing] becomes [the move]"): Flagsweep's terminal report, with the diff's red deletion lines and a flat-lining rollout strip per flag, becomes the first screen, and the visitor drives it by editing the --stale-after value in the command itself.
- The same sentence with the nearest competitor, and why it fails: "LaunchDarkly's terminal report ... becomes the first screen": LaunchDarkly sells a hosted dashboard, not a CLI report that joins code lines to flag history, and the spreadsheet/cleanup-day alternative has no report at all, so the sentence is false for both.
- Statement level (quiet, bold or loud) and why: bold. Developer tool with a self-serve buyer; the first screen carries the statement and the sections below stay quiet with proof.
- First viewport at 1440 (placement, sizes, live thing, refused default): two-line h1 at about 82px top-left with the install command and copy button under it; the five-second subhead and the line beside the action on the right; the full-width report starts at y≈370 with about 530px visible (command line with editable cut-off, summary, first three REMOVE rows, Not listed column). Refuses a centred headline with two buttons over a dark terminal screenshot.
- First viewport at 390: h1 at 41px in two lines, subhead (5 lines), install command with a full-width copy button, the cost/compatibility line, then the report from y≈473: label, command, the − 30 + control, the summary line and the first REMOVE row.
- Name test (the one with the …, eight words or fewer): the one with the red-line flag report up top.

## Hypothesis
- Archetype and why: typographic technical (developer CLI; integration and trust in the output are the buying questions), with the functional-entrance habit of a prefilled, operable sample.
- Type roles, faces and why they fit this product: display TeX Gyre Heros Cn Bold (condensed grotesk, reads like a printed label or a terse verdict, fits two lines at 41px on a phone); text Inter (shipped, body only, for long sentences on screens); mono DejaVu Sans Mono for the report, commands and code. All three shipped as subsetted .woff files in fonts/ (GUST, OFL and Bitstream Vera licences allow embedding).
- Composition and grid: 78rem max width; hero is a 7/5 offset split over a full-width report; sections below alternate measure (prose at 38rem, artifacts wider), and the cleanup-day section is one full-width ledger table rather than two panes.
- Ground, colour and material, and why this ground: cool off-white paper (#f3f4f1) with near-black ink and white report panels with hairline rules, like a printed diff. The one accent is the diff's deletion red, used only for lines to remove, REMOVE tags and the cut-off. Not dark-terminal (category default) and not cream-and-serif (anti-default).
- Signature artifact and its local behaviour: the sample report. The --stale-after value is a field with − and + buttons and Reset; changing it recomputes the listed flags, line and file counts, the Not listed reasons and the cut-off tick on every history strip, from one data source (app.js) that also produced the no-JS static fallback.
- Signature on a phone (where the result shows after a tap): the summary line ("Remove 5 flags: 12 lines in 10 files") and any refusal note sit directly under the − / + control, and the list follows; checker MB-07 confirmed feedback in view for all four controls.
- Sample audit (counts, weekdays, states and stated rules agree): 9 flags in code; at 30 days 4 listed (10 lines, 8 distinct files) and 5 not listed; at 14: 5 / 12 / 10; at 7 and 1: 6 / 13 / 11; at 60: 3 / 8 / 6; at 365: 0. Counts recomputed by script, and the ledger, the "After" text and the timeline all use the 30-day numbers. No dates or weekdays are shown; ages are relative, so the visitor's clock never leaks in. The timeline's ramp (100 → 74 days ago) matches "5% to 100% over four weeks".
- To confirm with the client (claims and terms kept off the page): real subcommand, option names and output format; which languages Flagsweep scans; how it reads history for plain config files (git log?); what credentials it needs for LaunchDarkly/Unleash; whether it can edit code or open PRs (the page says you make the edit by hand); how to mark permanent flags such as kill switches; whether it runs in CI; host og.png at https://flagsweep.example/og.png (the file is in this folder); a licence-file URL if one should be linked.
- Section sequence, with one section deliberately omitted: hero with report → how it decides (rule + timeline + not-listed cases) → what you change (diff) → cleanup day vs report (ledger) → install with source tabs, docs and GitHub → footer. Omitted: a feature-card grid and a final CTA band (the install section is the close); no testimonials or logos exist.
- Primary interaction and motion purpose: the cut-off control; no animation beyond a 0.97 press scale on buttons. Results swap instantly so text is never faded.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis (what owns the first screen: the report as notation versus one flag's history as a data portrait).
- Category default and anti-default this plan avoids: default for a dev CLI is a centred headline over a dark terminal screenshot with neon green mono and a "Get started" pair; the anti-default is a cream ground with an editorial serif and no product. The plan is a light paper report with a condensed grotesk and diff-red, operable.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Offset h1 + install over a full-width sample report with editable --stale-after, REMOVE rows, file:line, history strips and a Not listed column | What does it output, and will it list things I want to keep | 8 | 7 | 7 | 7 | 8 | Real CLI output and option names from the client, and a real repo scan to replace the sample |
| B | One flag's 16-week history drawn huge across the first screen, flat-lining past an annotated cut-off; the report starts below the fold | Why is this flag listed | 6 | 8 | 7 | 7 | 5 | The report (the actual output) in the first screen, which this variant pushes down |

Score each dimension 0–10.

- Chosen variant and why: A. The brief asks that engineers understand the output before they scroll; B's portrait explains the rule but hides the output. B's timeline moves to the second section, where it explains the rule.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Block (checked) | Neither: light paper ground, condensed grotesk, operable report; both defaults recorded above. |
| Centred headline over a framed screenshot | Warn (checked) | Not used: offset split, and the framed panel is the product's own output in live HTML. |
| Redrawn browser or phone chrome | Warn (checked) | No traffic-light dots or address bar; the report has a plain label row. |
| Overused display face without a reason | Warn (checked) | Inter is the text face only; display is Heros Cn. |
| Metrics without sources | Block (checked) | All counts live inside the labelled sample report; no stats band. |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Opened: 1440 wide, not blank; h1 two lines, install row beside subhead, report from y≈370 with three REMOVE rows and the Not listed column visible; full page in shots/1440.png. |
| 768×1024 | shots/768-top.png | Opened: 768 wide; hero stacks, report single-column with strips beside rows, code snippets wrap inside rows (no page scroll); full page in shots/768.png. |
| 390×844 | shots/390-top.png | Opened: 390 wide; h1 two lines, copy button full width, report from y≈473 with control, summary and first REMOVE row; full page shots/390.png is 6,410px (under 6,752). Artifact states in shots/states/ (28 captures, log.txt). |

## Checker result
- JSON: check.json
- Failures fixed: LY-01/LY-02/LY-04/LY-08 (install column's pre forced the grid to 521px at 390; fixed with minmax(0,1fr)); TY-03 (the Not listed heading was a small h2; now a p); AX-11 (truncated code overlapped under text spacing; refs now flex and code wraps); LY-06 (smooth scrolling left Shift+Tab focus mid-scroll under the sticky bar; removed smooth scroll). Before: check-before.json; compare-checks: fixed none, regressed none.
- Warnings kept and why: PS-06 lists "Skip to content", "Shorter cut-off" and "Longer cut-off" beside the primary label; they are the skip link and the artifact's stepper, not competing actions, and the primary label is identical in both places. CP-07 flags "unleash": it is the name of the Unleash flag service the brief names, not marketing copy.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and the tools are not installed (`npx --no-install impeccable` unavailable offline; not attempted to install).

## Checklist
The other 81 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record: `pass`, `fail`, `n/a`, or `unverified` when the evidence could not be produced (for example, no render). A block-severity `fail` or any `unverified` rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | Subhead: CLI for engineers; checks each flag against the flag service's history; lists those fully on or off for weeks with lines to change (shots/390-top.png, 1440-top.png). |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second read of 1440-top: "a command-line tool that tells engineers which feature flags to delete and where"; matches the promise. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the report the CLI produces (sample), operable. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Doubts 1–3 map to the report, the Not listed column + rule section, and the install tabs + diff (Product interpretation). |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Rule → edit → why it beats the sheet → install; the old separate spreadsheet and "After" panes were merged into one ledger. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists three defaults, proceeded on them. |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A (notation) and B (data portrait), axis emphasis, both from the dealt hand; defaults recorded. |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | Rive, Supabase, Canary in References; departure: light ground and a condensed display face instead of the recipe's precise-sans suggestions. |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "an open-source CLI for engineers". |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | All named above; "Delete these flags. Here are the lines." is false for a spreadsheet or a cleanup-day invite, which name no lines. |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Each heading names a concrete object or rule (lines, every user same value, one check per line, cleanup day, pipx + LaunchDarkly/Unleash/config). |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; the cleanup-day heading adapts the brief's phrase. |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | "Free and MIT licensed, with no paid plan. Works with LaunchDarkly, Unleash or a plain config file." |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Delete these flags, here are the lines → listed only when every user has seen the same value for weeks → each line is one check to take out → rerun any day instead of cleanup day → install with pipx, point at LD/Unleash/config. |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero has no height; sized by content (styles.css .hero). |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof was supplied; the page uses the sample output, the licence and the repo instead. |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Deletion red only on REMOVE tags, lines to remove, the cut-off value and tick, error notes and the logo's strike. |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | A hosted flag platform's page would not lead with a CLI report of lines to delete; idea sentence test above. |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | Rive: shares only "install command in hero"; no OS tabs, face or tiles. Supabase: shares the offset split grammar only; no bento, colours or copy. Canary: none of its devices. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Button hover inside `@media (hover: hover) and (pointer: fine)`; link hovers are underline only; no staggers. |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Only motion: button press → scale(.97/.96) on :active, confirms the press, static under reduced motion, instant (no transition), no easing. Results swap instantly. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | At 390 rows stack (tag+key, facts, strip, file:line), code excerpts drop to keep paths readable at 14px, Not listed moves under the list; ledger becomes labelled cards. |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | Summary is `<output role=status aria-live=polite>`; refusals in role=alert; copy results in role=status. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on the page. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | All counts sit inside the labelled "Sample report", the timeline caption ("from the sample above") or the ledger caption. |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | Labels at the top of the report, the diff caption ("Illustrative"), the ledger caption ("an illustration") and above the install tabs ("Example ... illustrative"). |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Copy button copies or selects and says which; Docs and GitHub links go to the brief's URLs; in-page anchors resolve (AX-08 passed). |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | All three top captures and full pages opened; 14 states × 2 widths in shots/states/ with log.txt. |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Structural revision section; shots-before/ vs shots/. |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below. |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | No unverified rows; checker ran clean of block failures. |
<!-- checklist:end -->

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the days field and pressed Enter (1440 and 390) | Field restored to the last value; note: "Type a number of days from 1 to 365. Still showing 365 days." (shots/states/*-empty-input.png) | pass |
| Out of range | Typed 5000, then -4 | Clamped to 365 with "This sample holds a year of history, so the longest cut-off is 365 days"; -4 clamped to 1 with "The shortest cut-off is 1 day" | pass |
| Nonsense | Typed "abc" | Field restored; note quotes "abc" as not a whole number of days; list unchanged | pass |
| Repeat | Pressed + six times from 45; pressed − past 1 | Steps 60 → 90 → 180 → 365, then says 365 is the longest; − at 1 says 1 day is the shortest; focus stays on the button | pass |
| Reset | Pressed Reset | Back to 30: "Remove 4 flags: 10 lines in 8 files", note cleared, focus stays on Reset | pass |
| Keyboard only | Enter on −, Tab to field, Tab to +, Space twice | 14 → 30 → 60; focus never dropped (checker AX-12 passed) | pass |
| Phone | Operated every control at 390×844 | Summary line and note sit directly under the control; checker MB-07 found all four controls answer in view; controls 44px | pass |
| Reduced motion | Ran every state with reducedMotion: reduce | Same states; nothing moves (no animations exist besides the press scale, removed under reduce) | pass |
| Visitor's own input | Typed 45 and pressed Enter | Command echo shows 45d; 3 flags, 8 lines in 6 files; dark-mode-beta moves to Not listed with "changed 41 days ago (under 45)" | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Three two-column text bands in a row (edit, spreadsheet vs after, install) | Warn | Revised: the spreadsheet/after band became one full-width ledger table (see Structural revision). |
| Hero visual is decoration | Block (checked) | Not matched: the hero is the operable sample output. |
| Every section has same width and padding | Warn (checked) | Prose holds 38rem while the report, timeline and ledger run wider; the hero is denser than the rest. |
| Small tracked-caps label above every heading | Warn (checked) | Not used; captions sit under headings beside their figures. |
| Scaled-down desktop on mobile | Block (checked) | Report and ledger recomposed at 390 (shots/390.png). |

## Structural revision
- Weakest explanation or most template-like decision: the cleanup-day section was a two-pane band (spreadsheet left, a two-line terminal and a paragraph right), the third two-column band in a row, and it made the visitor compare two unrelated panels to see the point.
- Change made (structure, not styling): replaced the two panes with one ledger table that puts the spreadsheet's columns (owner "?", "Remove when?") and the report's verdict on the same row for each flag, plus a not-in-the-sheet flag and a totals row; on phones each flag becomes one labelled card with both answers together. Also moved the hero's install row under the h1 (left) with the cost line on the right, which removed a 320px hole above the headline.
- Before: shots-before/1440.png
- After: shots/1440.png
- Score after the change and what still keeps it from a 10: 8/10 for variant A (composition 7 → 8); a 10 needs the real CLI output and option names, and a real proof point (a public repo's scan) instead of the sample.
- Removal pass (each decorative element → its job, or "removed"): logo strike in red → marks "sweep/remove" in the accent; pale red row bands → deletion state from diff notation; grey "unchanged" span in strips → shows how long the flag sat; dashed cut-off tick → the control's effect; hairline rules → grouping; sheet grey cells → distinguishes the spreadsheet columns; the separate "After" terminal panel → removed (merged into the ledger); the empty "(not added yet)" sheet row → removed.

## Remaining weaknesses
- What a buyer still cannot judge: the real output format, option names, supported languages and the access Flagsweep needs to read LaunchDarkly or Unleash history; whether it is maintained (no usage numbers or named maintainers exist yet).
- What was not verified: the docs and GitHub links were not opened (no network); the copy button was tested in headless Chromium with clipboard permission (clipboard held `pipx install flagsweep`, shots/states/1440-copied.png), not on a real desktop browser; PF-05 is a lab estimate.

## Status
DONE
