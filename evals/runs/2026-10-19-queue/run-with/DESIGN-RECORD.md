# DESIGN-RECORD

Copy this file next to the page as `DESIGN-RECORD.md` and replace every prompt with a decision. Write `unknown` rather than leaving a field empty, and never present an assumption as observed evidence. `node scripts/verify-record.mjs <page-dir>` decides whether the task is finished: it fails on any empty field, empty table cell or unfinished marker.

## Product interpretation
- Audience, category, business model, brand constraints: Solo developers maintaining Node services; open-source queue; commercial model unknown. No supplied identity, customers, telemetry or verified package endpoint.
- Promise (who / what changes / how): For a Node developer, move work out of the request and understand each job by inspecting enqueue, execution, retry and terminal states.
- Conversion action and destination: Read the docs → #docs, a real on-page getting-started guide for the supplied local example. Package publication and API remain unverified; no invented install command.
- Visitor doubt 1 → artifact: What happens after enqueue? → persistent job ID with user-stepped lifecycle trace.
- Visitor doubt 2 → artifact: What happens when work fails? → recovery and exhausted-retry scenarios with attempts and final state.
- Visitor doubt 3 → artifact: Can I try this safely? → downloadable standalone demo.mjs, no dependencies, account, server or network.

## Interview log
- Questions asked, each with the recommended default you offered: Unattended evaluation. Audience decision: recommended default solo developers because a no-server local example answers their first adoption question. No question sent.
- Answers, or "no answer; proceeded on defaults": no answer; proceeded on defaults
- Assumptions that change the page: Choose solo developers, not enterprise teams. The example models queue states but does not import the unverified package. Documentation is local tutorial documentation, not claimed upstream API documentation.

## References
| Job | Reference, dated observed decision and limit | Transferable principle | Treatment not borrowed |
| --- | --- | --- | --- |
| Product explanation | Resend, observed integration chooser changed snippet; casebook gives 2026-10-19 measurements but recipe cites 2026-10-18; sending unverified | Make adoption concrete with a runnable example | No black/serif treatment or light ray |
| Brand composition | Keyframe Labs, 2026-10-19; labelled output beside claim; price/performance not independently established here | Share the first screen between claim and inspectable output | No avatar/video frame or spec-strip imitation |
| Counterexample | Traverse, 2026-10-19; plain short thesis and contact; no product evidence | Retain brevity but include behavior | No contact-only homepage |

## Hypothesis
- Archetype and why: Typographic technical; a concrete state instrument makes integration and recovery inspectable. Depart from recipe H1 default to 64px desktop/40px phone for early proof visibility; use system fonts instead of downloads.
- Type roles, faces and why they fit this product: Arial system sans, 700 display/400 text, familiar technical reading; system monospace for IDs and code only. No downloaded fonts.
- Composition and grid: Offset promise on a 5/7 split with unframed state ledger; 1200px maximum, 64px desktop headline, 18px text, 1.55 body leading, -0.025em display tracking. At 900px collapse to one column.
- Ground, colour and material, and why this ground: White #fafafa developer reference-sheet ground, ink #17232b, state/action green #176042. Thin neutral rules; no shadows. Spacing tokens 8/16/24/40/64/96px, controls 44px minimum.
- Signature artifact and its local behaviour: Job receipt job-001 persists through queued → running → retrying → completed or failed. Select scenario and advance explicitly; no fake live timer.
- Section sequence, with one section deliberately omitted: Open promise + dense state ledger → quiet production limits → active local docs/example → short installation decision. Omit testimonials and generic benefit cards.
- Primary interaction and motion purpose: Scenario selection resets trace; Next event appends one state. No animation or transition, duration 0ms, easing none, immediate static fallback identical; reduced motion preserves all content.

## Two hero variants before code
| Variant | Structure and artifact | Visitor doubt answered | Score 0–10 and what a 10 needs |
| --- | --- | --- | --- |
| A | Offset headline alongside unframed state ledger | Where does my job go after enqueue? | Fit 9, identity 8, originality 7, composition 8, proof 8. A 10 needs verified API behavior, distinctive owned typography and observed reader comprehension. |
| B | Full-width documentation-style headline; integration example below | How do I adopt? | Fit 7, identity 6, originality 5, composition 7, proof 6. A 10 needs proof on first screen and stronger queue-specific identity. |

- Chosen variant and why: A. Trace beside promise answers the job-state question immediately; B delays the only evidence until after a broad claim.

## Gate before implementation
| Detector signature | Block or warn | Revision, or the product reason it stays |
| --- | --- | --- |
| One sans family | warn | Deliberate 400/700 hierarchy; mono reserved for data, no extra decorative face. |

If nothing matched, write one row: `none found | — | —`.

## Render evidence
| Viewport | Screenshot | What you checked in it |
| --- | --- | --- |
| 1440×900 | unavailable: "browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell" | No screenshot produced; visual inspection did not run. |
| 768×1024 | unavailable: "browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell" | No screenshot produced; visual inspection did not run. |
| 390×844 | unavailable: "browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell" | No screenshot produced; visual inspection did not run. |

Each screenshot cell is a relative `.png` path, or `unavailable: "<exact error>"`. Open every PNG before listing it.

## Checker result
- JSON: unavailable: "browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell"; raw stdout check.json is empty; full stderr check-error.log
- Failures fixed: No automatic results obtained; checker exited 1 before generating JSON. No page failure can be inferred from that exit.
- Warnings kept and why: No warning results obtained; rendering and checker unavailable.
- Optional tools (Impeccable detect, web-design-guidelines): result, or "not run: <reason>": Optional scan did not run; see optional-check.log. Guidelines review not run: unavailable.

## Checklist
The other 64 checks run automatically in `check-page.mjs`. Answer each of these from the screenshots, the code or this record. A `fail` on a block-severity item rules out DONE. See `references/checklist.md` for severity and credit.

<!-- checklist:start -->
| ID | Check | Verdict (pass / fail / n/a) | Evidence |
| --- | --- | --- | --- |
| PS-01 | The first screen says who it is for, what changes for them and how, in plain words. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| PS-02 | A stranger can say what the product does after five seconds on the first screen. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| PS-03 | The hero artifact is the product or its real output, not decoration. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| PS-04 | Each of the visitor's first three doubts is answered by a specific artifact on the page. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PS-05 | Every section tells the visitor something the sections above did not; repeated claims are cut. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PS-07 | Questions to the user carried a recommended default; unanswered ones were assumed and logged. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PS-08 | Two structurally different hero variants were compared and scored before any code. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PS-09 | Two references serve different jobs, one counterexample is named, and what is not borrowed is stated. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PS-10 | The page starts from one archetype recipe and records where it departs from it. | pass | Hypothesis records recipe and numeric departures. |
| HR-02 | A centred headline above a framed screenshot is used only with a product reason in the record. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| HR-03 | The headline has no single-word last line at any of the three widths. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| HR-06 | The hero is sized with svh/dvh or content, not a fixed 100vh that clips under mobile browser bars. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| HR-07 | Nothing in the hero waits for an animation before it can be read. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| TY-13 | Each face has a role (display, text, data); a family is not added just to have two. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| LY-07 | Density changes down the page on purpose: open, dense, quiet, active, short. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| LY-10 | At 768px nothing is a cramped leftover of the desktop grid. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| CO-06 | Accent colour marks state or action and is not sprinkled for decoration. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| TT-04 | Section numbers appear only on content that is a real sequence. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| TT-09 | Replacing the logo would not turn this into another company's page. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| TT-10 | The signature idea still works if the palette changes. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| TT-11 | No referenced site's recognisable treatment (mascot, lighting, layout) is reproduced. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| MO-07 | Hover-only effects sit behind (hover:hover) and (pointer:fine). | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| MO-08 | Staggers stay between 30 and 80ms and never block input. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| MO-09 | Every animation has a written contract: trigger, purpose, fallback, duration, easing. | pass | Hypothesis states zero motion, duration 0ms, easing none, static fallback. |
| MO-10 | Text that must be read moves into place rather than fading in. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| MB-06 | Dense artifacts are recomposed for phones, not shrunk. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| MB-07 | Fixed or full-bleed elements respect safe-area insets. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| AX-12 | Results of local actions are announced (aria-live or role=status). | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| HP-01 | No customer logos or testimonials that were not supplied and verified. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| HP-02 | Every number has a source or is labelled illustrative. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| HP-03 | Illustrative interfaces say so on the page. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| HP-04 | The primary action leads somewhere real or produces a visible local result. | pass | index.html #docs is real local documentation; package install identity unverified. |
| PR-01 | Every screenshot listed as evidence was opened, is not blank and is the width it claims. | fail | Unverified: no PNG; exact error in render-after.log. Source intent is not screenshot evidence. |
| PR-02 | One structural revision was made after rendering, with before and after evidence. | pass | Source revision exists in before.html and index.html; rendering failed on both, so no visual comparison. |
| PR-03 | The hero scores were redone after the revision, with what still keeps it from a 10. | pass | Source index.html and the corresponding filled decision section in this record; not browser verified. |
| PR-04 | verify-record.mjs exits 0 and the final reply ends with the record's status line. | pass | verify-record.log records the actual verifier outcome; final artifact status remains concerns. |
<!-- checklist:end -->

## Gate after render
| Detector signature | Block or warn | Fix, or the reason it stays |
| --- | --- | --- |
| No obvious block in source; screenshot gate unavailable | warn | Reviewed source for visible copy, native controls, reduced-motion rule, valid anchors, no social proof. Mobile visual behavior remains unverified. |

## Structural revision
- Weakest explanation or most template-like decision: The ledger originally named states without explaining what failure meant; generic limitations preceded the adoption example.
- Change made (structure, not styling): Added a state-specific explanation in the instrument and moved local docs before limits, making the sequence promise → inspectable states → runnable example → production qualifications → action.
- Before: before.html
- After: index.html
- Score after the change and what still keeps it from a 10: Source-only provisional scores: product fit 9, identity 8, originality 7, composition 8, proof 9. State explanations improve proof. A 10 needs verified API behavior, owned typography, rendered composition and reader testing. Not a measured visual score.

## Remaining weaknesses
- What a buyer still cannot judge: Actual package integration, persistence, retry policy, delivery semantics or production performance.
- What was not verified: All rendering, visual QA, automatic browser checks, keyboard interaction, zoom and actual package behavior.

## Status
DONE_WITH_CONCERNS: Rendering, browser checks and visual/accessibility behavior unverified; package API not supplied.

## Exact execution errors

Browser installation: `Error: End of central directory record signature not found. Either not a zip file, or file is truncated.`

Render before/after and checker stderr are preserved verbatim in their log files.

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
    at /workspace/scratch/977b7b19ec28/run-with/.skill/scripts/render-playwright.mjs:12:32 {
  log: [],
  name: 'Error'
}

Node.js v24.19.0

node:internal/modules/run_main:107
    triggerUncaughtException(
    ^

browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
    at /workspace/scratch/977b7b19ec28/run-with/.skill/scripts/check-page.mjs:25:32
    at async node:internal/modules/esm/loader:643:26 {
  log: [],
  name: 'Error'
}

Node.js v24.19.0

Optional detector exact error:

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.
npm error npx canceled due to missing packages and no YES option: ["impeccable@4.7.0"]
npm error A complete log of this run can be found in: /root/.npm/_logs/2026-10-19T18_14_04_857Z-debug-0.log
```
