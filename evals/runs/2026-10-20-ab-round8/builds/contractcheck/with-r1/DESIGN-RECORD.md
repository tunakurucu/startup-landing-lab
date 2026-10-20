# DESIGN-RECORD

Page: `index.html` (static, opens from disk; fonts in `fonts/` and inlined in the page). Built in Build mode from `BRIEF.md`.

## Product interpretation
- Audience, category, business model, brand constraints: backend engineers and API platform teams use it, the team lead approves the paid plan; a GitHub App that checks staging responses against an OpenAPI spec on pull requests; free for public repositories, $19 a month per private repository; no existing brand, no customers or usage numbers to show.
- Promise (who / what changes / how): backend teams with an OpenAPI spec / learn about a broken response on the pull request instead of from a client team's bug report / a GitHub App runs the spec against staging on every PR and fails the check on a mismatch.
- Five-second line, quoted as shown in the first screen (who + what): "Contractcheck is a GitHub App for backend teams. On every pull request it runs your OpenAPI spec against your staging API, and fails the check when a response stops matching the spec."
- Current alternative, including doing nothing: doing nothing and hearing it from a client team's bug report; a hand-maintained Postman collection nobody runs.
- The one advantage only this product has: it runs on every pull request by itself against staging, so a response that drifts from the spec fails the PR before merge (the Postman collection only works when someone runs it).
- Category frame (existing, subcategory or new) and what it costs to teach: existing frame "GitHub App" plus "OpenAPI spec check"; costs nothing to teach to the audience.
- Best-fit customer, and who it is not for: teams that keep an OpenAPI spec in the repo and have a staging API; not for teams without a spec, without staging, or wanting production monitoring.
- Users' own words (three phrases with source, or 'none yet'): none yet (no customers or interviews supplied); the hero adapts the trade's own validator phrasing ("expected number, got string").
- Biggest reason not to click, and the line that answers it: cost and data access; "Free for public repositories; $19 a month per private repository. It reads responses from your staging API only, never production." sits under the button.
- Conversion action and destination: "Install the GitHub App" to https://github.com/apps/contractcheck; secondary "Read the docs" to https://contractcheck.example/docs.
- Visitor doubt 1 → artifact: "What does a failing check actually look like?" → the stamped sample check run in the first screen, operable.
- Visitor doubt 2 → artifact: "Does it touch production / what does it read?" → reach diagram with production stamped NEVER plus three diligence answers.
- Visitor doubt 3 → artifact: "What will the team lead approve?" → stamped tariff and a private-repository cost calculator.

## Interview log
- Questions asked, each with the recommended default you offered: none sent (nobody available); defaults chosen: (1) primary action = install the GitHub App; (2) show the three failure kinds the brief names; (3) no founder or company details since none supplied.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults.
- Assumptions that change the page: a repository config file exists in some form (shown as an example of the shape, labelled); the check output wording and layout are this page's design, labelled as a sample.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Canary (runcanary.ai, audited 2026-10-19): replayed real failures and diffs as the proof; limit: self-advancing tabs ignored clicks, unsourced stats | Make the claim the evidence: show the failure itself, with red and green reserved for fail and pass | Yellow highlight-bar poster headline, rolling agent name, all-caps display on every section, auto-advancing tabs |
| Brand composition | Keyframe Labs (keyframelabs.com, audited 2026-10-19): condensed headline set against the product's real output in a hairline-ruled light grid; limit: low-contrast mono labels, an evidence panel showing a stand-in instead of video | Condensed display headline beside the real output at true size, on a light ground with hairline rules, so a technical buyer reads developer-grade without a dark theme | Condensed serif, magenta frame, mono spec strip, avatar video, scroll-driven capability list |
| Counterexample | Warp (warp.dev, audited 2026-10-20): hero fig. 1 is an animated grid of abstract task squares; attractive but "signals activity without showing what a task is" | Every mark in the hero object is a readable field (endpoint, field, spec pointer, status) | Abstract live-state squares, all-mono body, lavender dot-grid ground |

Departure from the typographic-technical recipe: the h1 is smaller than the recommended 94px (76px) to keep it to two lines in the 1440 column; the artifact is an object (the check report) rather than a code trace.

## Statement
- Subject inventory (8–12 things only this product owns; semicolons): the failing check on a pull request; the OpenAPI spec file openapi.yaml; JSON pointers into the spec (#/components/schemas/Order/required); "expected number, got string" validator phrasing; HTTP status codes (200, 404, 409); the staging base URL; the client team's bug report; the Postman collection nobody runs; the PR checks list; the request line (GET /orders/{id}); the red X and green check; a refactor PR that quietly changes a serializer.
- Dealt hand (first line of `node scripts/deal.mjs`, with its seed): Dealt for "Contractcheck" with seed 3117165061 — object portrait, generative system, voice, canon.
- Chosen move and why, or canon and the buyer-risk reason: object portrait; the product's output is a document (the check run report), so the honest object is that report, built from real fields, with a rubber-stamp verdict as the single ownable mark.
- Idea sentence ("[inventory thing] becomes [the move]"): the failing pull-request check becomes an object portrait: a printed contract-breach report stamped FAILED, listing each response that broke openapi.yaml, which the visitor fixes line by line until the stamp reads PASSED.
- The same sentence with the nearest competitor, and why it fails: "Optic's PR comment becomes a stamped report of staging responses that broke the spec" fails because Optic diffs spec versions against each other and has no received-response column; with Schemathesis or Dredd it fails because their output is a CLI log, not a check on a pull request.
- Statement level (quiet, bold or loud) and why: bold; engineers and a team lead, not a regulated committee; the stamp owns the first screen, later sections reuse the stamp and ruled-paper language quietly.
- First viewport at 1440 (placement, sizes, live thing, refused default): left column: 76px condensed two-line h1, five-second line, black "Install the GitHub App" plus docs link, cost/data line, a three-kind legend; right column: the 620px white report sheet from y=116 past the fold with the FAILED stamp top right and three fix buttons; refused default: centred headline over a dark terminal or dashboard screenshot.
- First viewport at 390: 44px two-line h1, four-line five-second line, button and docs link side by side, cost/data line; the sheet starts at y≈482 showing its sample band, run name, FAILED stamp, verdict and the first problem; fix buttons in each problem row.
- Name test (the one with the …, eight words or fewer): the one with the stamped failing check report.

## Hypothesis
- Archetype and why: typographic technical; focused developer infrastructure where the buying questions are "what does it catch" and "what does it touch".
- Type roles, faces and why they fit this product: display TeX Gyre Heros Cn Bold (a condensed grotesk like a stamped label; also the stamp face); text TeX Gyre Heros (neutral, readable, metrics-matched fallback); mono DejaVu Sans Mono shipped as "Code Mono" only for paths, JSON and config. All GUST or Bitstream Vera licences allow embedding.
- Composition and grid: 1280px max, hero 1 : 1.1 split with copy left and the sheet as the dominant object right; sections below on one wrap with varied forms (timeline, ruled form, reach diagram, tariff + calculator).
- Ground, colour and material, and why this ground: cool light grey (#dde2e6) like a desk under paper, white paper object with a single-light layered shadow; ink black for actions; red only for failure, green only for pass. Not dark-terminal, not cream.
- Signature artifact and its local behaviour: sample check run with three problems (missing currency, total as string, undocumented 409); each row has a fix/undo button; an editable response body revalidates required fields and types as you type; stamp flips FAILED/PASSED; Reset restores all.
- Signature on a phone (where the result shows after a tap): each row rewrites itself in place ("Fixed — … The check still fails on 2 problems") next to the tapped button; an sr-only status announces the count; the stamp and verdict sit at the top of the sheet.
- Sample audit (counts, weekdays, states and stated rules agree): 3 problems across 2 responses; the GET is 200 with status "shipped", so the cancel's 409 is consistent; counts recompute from the actual state; no weekdays shown; date 2026-10-14 only inside JSON.
- To confirm with the client (claims and terms kept off the page): config file name and keys (.github/contractcheck.yml, spec, staging_url are an example shape); exact check run wording and annotation layout; whether checks beyond required fields, types and status codes run (sample limits itself to those); billing interval wording "a month"; og.png must be hosted at https://contractcheck.example/og.png; no contact address or sign-in supplied, so none shown.
- Section sequence, with one section deliberately omitted: hero + sample check → where the break gets found (today vs with check) → setup as one ruled form → what it reads (staging only) → pricing + calculator → final action; omitted: testimonials/logos (none exist) and a features grid.
- Primary interaction and motion purpose: fixing problems in the sample; the stamp re-strikes (scale 1.16→1, 200ms) only when the verdict changes.

## Two hero variants before code
- Axis the variants differ on (structure, density, emphasis, type or voice): emphasis (object versus type).
- Category default and anti-default this plan avoids: default = dark ground, neon mono terminal, centred h1 over a dashboard or code screenshot; anti-default = cream ground, editorial serif, hand-drawn spot illustrations. The plan uses a cool grey ground, condensed grotesk and a printed report object.

| Variant | Structure and artifact | Visitor doubt answered | Fit | Identity | Originality | Composition | Proof | What a 10 needs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Object portrait: copy left, stamped check report sheet right bleeding past the fold, fix buttons per problem | What a failing check looks like, and that it passes once fixed | 8 | 8 | 7 | 7 | 9 | The sheet reads as a physical object at a glance and the left column has no slack |
| B | Typographic statement: one-line 150px "Expected number. Got string." across the top, wide landscape report below the fold line | Same, but the report shows only its header in the first screen | 7 | 7 | 6 | 7 | 6 | The report's problems visible in the first screen at 1440 |

- Chosen variant and why: A; the brief asks that an engineer know what a failing check looks like before scrolling, and only A shows the problems themselves in the first screen at both widths.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| Plan matches category default or anti-default | Block | Avoided: light cool ground, condensed grotesk, report object; both defaults written above |
| Steps row beside a code block | Warn | First build had it; removed in the structural revision (setup became one ruled form) |
| Small tracked-caps label above every heading | Warn | Not used; tracked caps appear only as problem kinds inside the report, where they carry state |

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | shots/1440-top.png | Two-line h1, five-second line, action and full sheet with stamp and three problems above the fold; full page in shots/1440.png |
| 768×1024 | shots/768-top.png | Stacked: h1, line, action, then sheet with stamp and first two problems; menu button; full page shots/768.png |
| 390×844 | shots/390-top.png | h1 two lines, line, action and docs side by side, sheet from y≈482 with stamp; full page shots/390.png at 7.6 screens |

Artifact states: shots/states/1440-*.png and shots/states/390-*.png (default, one fixed, all fixed PASSED, double click, empty, nonsense, own input, array, 5000 characters, reset). The 390 run used reduced motion.

## Checker result
- JSON: check.json
- Failures fixed: LY-02/AX-11 (inline-block link widening the setup grid), CO-01 (red and grey on the darker section ground), AX-07 (font preload CORS error from disk), LY-04 (wide code line on phones), PF-04 layout shift 0.25 from font swap (metric-matched fallback faces and inlined Heros), PS-06 (fix buttons made unfilled).
- Warnings kept and why: none.
- Optional tools (Impeccable detect, web-design-guidelines): not run: no network and nothing installed (npx --no-install impeccable not available offline).

## Checklist
<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a / unverified) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | pass | 1440-top and 390-top: "GitHub App for backend teams … fails the check when a response stops matching the spec" |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | pass | Five-second line plus the FAILED sample check visible at both widths |
| PS-03 | The hero artifact is the product or its real output, not decoration. | pass | The hero is the check run output with real fields, operable |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Sample check; reach diagram + Q&A; tariff + calculator |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Hero=what fails; path=where it is caught; setup=how to install; access=what it reads; pricing=cost |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Interview log lists defaults |
| PS-08 | Two hero variants that differ on one named axis (structure, density, emphasis, type or voice) were scored before code, one of them is the statement dealt and chosen for this product, and neither is the category's obvious default or the obvious "anti-default". | pass | Variants A/B on emphasis; A is the dealt object move |
| PS-09 | Two references serve different jobs, one counterexample is named, what is not borrowed is stated, and departures from the chosen recipe are recorded. | pass | References table and recipe departure note |
| CP-03 | The first screen says what kind of thing the product is: a plain category noun or an "X for Y" frame. | pass | "a GitHub App for backend teams" |
| CP-04 | The record names the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, and who it is for and not for; the headline would be false or odd on the alternative's page. | pass | Product interpretation; "Expected number. Got string." is odd on a bug report or Postman page |
| CP-05 | Every headline and section heading passes two of three tests: a reader can picture it, it could be proven false, it would not fit a named competitor's page unchanged. | pass | Headings name the PR, the bug report, staging vs production, $19 per private repo |
| CP-06 | The record lists at least three phrases in the target users' own words with their source, or says none exist yet; the hero uses or adapts one. | pass | "none yet"; hero adapts validator phrasing engineers read daily |
| CP-09 | One line next to the primary action answers the biggest reason not to click: cost, card, time, setup or data. | pass | Cost and staging-only line under both action rows |
| CP-10 | Section headings carry the argument on their own: reading only the headings explains the product. | pass | Read in order: caught on the PR, install and point at spec/staging, reads staging never production, free public / $19 private, make the next break fail a check |
| HR-06 | The hero is sized with svh/dvh or by its content, not a fixed 100vh that clips under mobile browser bars. | pass | Hero sized by content; no vh heights in CSS |
| ST-04 | Real proof, when supplied, appears within the first two screenfuls or beside the claim it supports, and every quote carries name, role and company. | n/a | No proof supplied; none shown |
| CO-04 | Accent colour marks state or action and is not sprinkled for decoration. | pass | Red = failure, green = pass/free, black = action |
| TT-05 | Replacing the logo would not turn this into another company's page, and the idea sentence fails with the nearest competitor's name in it. | pass | Statement section: Optic/Dredd/Schemathesis swap fails |
| TT-06 | Compared with each reference on copy, names, numbers, imagery, layout and motion, no distinctive element or combination is reproduced. | pass | No highlight bar, rolling words, serif, magenta frame or square grid; copy original |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine), and staggers stay between 30 and 80ms without blocking input. | pass | Only hover colour changes on buttons/links, no hover-only content or motion; no staggers |
| MO-08 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Motion contracts listed under Structural revision notes below |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk or removed. | pass | Problem rows stack kind/text/pointer/button at 390; timeline turns vertical; reach diagram stacks |
| AX-10 | Results of local actions are announced (aria-live or role=status). | pass | sr-only role=status announcer; editor role=status; calculator output aria-live |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | None on page |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Only brief prices and labelled sample data |
| HP-03 | Illustrative interfaces and code are labelled right beside them, not in a separate disclaimer section. | pass | SAMPLE band at top of sheet; config labelled "Example of the shape"; strip tagged SAMPLE |
| HP-04 | Every action reaches what its label promises (install, docs, a real page or a visible local result). | pass | Install → github.com/apps/contractcheck; docs → contractcheck.example/docs; fix buttons change the sheet |
| PR-01 | Every screenshot listed was opened, is not blank and is the width it claims, the 768 layout was looked at, and the signature artifact was captured in each of its states. | pass | Opened 1440/768/390 top and full; states in shots/states |
| PR-02 | One structural revision was made after rendering, with before and after evidence and the hero rescored. | pass | Setup section rebuilt; before/after full pages listed |
| PR-03 | Every decorative element left on the page has a named job; ones without a job were removed and are listed. | pass | Removal pass below |
| PR-04 | The status line is DONE only if nothing above is unverified or unavailable; otherwise it names what is. | pass | Checker clean, render ran, nothing unverified |
<!-- checklist:end -->

Motion contracts: (1) stamp re-strike: trigger = verdict changes between FAILED and PASSED after a fix, undo, reset or edit; purpose = confirm the outcome; fallback = stamp swaps text and colour instantly (reduced motion: no animation); 200ms, cubic-bezier(.2,.7,.2,1), scale 1.16→1 and opacity .35→1 on the stamp only. (2) Button press: trigger = :active; purpose = acknowledge the press; fallback = none needed; 120ms transform scale .97, same ease. (3) Smooth anchor scrolling only under prefers-reduced-motion: no-preference. Nothing moves by itself.

## Artifact stress test
| Probe | What you did | What the page did | Verdict |
| --- | --- | --- | --- |
| Empty | Cleared the response body | "Empty body" row: spec expects an Order object; editor says the body is empty; stamp FAILED | pass |
| Out of range | Typed 5000 characters; total -5 | Textarea stops at 4,000 and says so; -5 accepted because the sample checks types only, as the note under the editor says | pass |
| Nonsense | Typed "banana {{{" | "Not JSON" row with the parse error, wrapped inside the sheet; the two field rows show "Not checked" | pass |
| Repeat | Double-clicked "Undo" on the 409 row at 1440 and 390 | Two toggles land on the same button (verdict height reserved so nothing moves); state consistent | pass |
| Reset | Pressed Reset after edits and fixes | Body, rows, verdict and stamp return to the 3-problem sample; focus stays on Reset | pass |
| Keyboard only | Tab to each fix button, Enter/Space; summary with Enter | All work; focus stays on the pressed button (label changes, element kept) | pass |
| Phone | 390×844 checker pass and state shots | Every control answered in view (MB-07), controls ≥44px, no sideways scroll | pass |
| Reduced motion | 390 run with reducedMotion: reduce | Stamp swaps without scaling; all content visible | pass |
| Visitor's own input | Pasted {"id": 42, "status": "lost", ...} and an array | id flagged "Type changed: spec says string, staging sent 42"; array flagged as wrong type; counts update | pass |

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| Steps row beside a dark code block | Warn | Fixed in the revision: setup is one ruled paper form with the file inside step 2 |
| Every section has same width and padding | Warn | Kept partly: sections share the wrap, but forms differ (timeline, form, diagram, tariff) and grounds alternate grey/deep grey/paper |
| Centred headline over a framed screenshot | Warn | Not present: offset copy beside the report object |

## Self-review
| Criterion | First score | What a 9 needs (for anything under 8) | After |
| --- | --- | --- | --- |
| Clarity | 8 | — | 8 |
| Fit | 8 | — | 8 |
| Distinctiveness | 7 | The setup section looked like every dev-tool page (steps beside a code block); carry the paper-and-stamp language into it | 8 |
| Proof | 8 | — | 8 |
| Craft | 7 | Problem text column was squeezed by wide buttons with pointers breaking mid-word; widen the text column and break pointers at slashes | 8 |
| Mobile | 8 | — | 8 |
| Honesty | 9 | — | 9 |
| Interaction | 7 | A double click missed because rows above changed height; keep other rows and the verdict at a stable height | 8 |
| Copy | 8 | — | 8 |
| First screen | 8 | — | 8 |

- Designer's one-sentence read: one clear idea, the stamped report, carried with restraint; below the hero the page is tidy but more conventional than the first screen.
- Buyer's and founder's one-sentence read: I see exactly what lands on my PR, what it reads, and what it costs per repo; I'd want real docs behind the link and a real check screenshot later.
- Engineer's one-sentence read: plain HTML/CSS/JS, native buttons, no dependencies, works from disk and by keyboard; the sample validator is honest about checking only required fields and types.

## Structural revision
- Weakest explanation or most template-like decision: the setup section was a numbered steps column beside a separate code card (the "steps row beside a code block" template), and it never showed where the check appears.
- Change made (structure, not styling): rebuilt setup as one ruled paper form with three numbered rows; the config file sits inside step 2, and step 3 now shows the sample check line as it sits in the PR checks list (red X, name, "3 problems in 2 responses", FAILED stamp); also widened the report's text column and stabilised row heights.
- Before: shots/before-1440.png
- After: shots/after-1440.png
- Score after the change and what still keeps it from a 10: hero 8/10; a real screenshot of the product's check run and named users would be needed, and sections below the hero share one width.
- Removal pass (each decorative element → its job, or "removed"): stamp texture mask → reads as ink, part of the statement; sheet shadow → lifts the report as an object; mini stamps on timeline/diagram/strip → mark where the break is found and what is never read; tariff stamps → price as a printed mark, ties pricing to the statement; brand mark → identity; removed: separate file-notes list under the config (said twice).

## Remaining weaknesses
- What a buyer still cannot judge: the real check output format, real setup steps and keys, and whether checks beyond required fields, types and status codes run; no users or usage exist to show.
- What was not verified: links to github.com/apps/contractcheck and contractcheck.example/docs were not opened (no network); og.png is not yet hosted at the absolute URL.

## Status
DONE
