# Queue skill evaluation

Commit: `efdeb7a38594651c82b0a5c700ec6f28a028370b` (short: `efdeb7a`).
Date: 2026-10-19.
Environment: independent agent, separate environment.

The skill produced a more explicit decision trail, an inspectable event-by-event artifact and a documented structural revision. It did not establish better rendered quality. Browser installation failed, both renders failed, and both browser checkers exited before producing JSON. There is no defensible visual winner or numeric uplift.

## Scope and controls

Only the queue brief was evaluated. During construction, repository access was restricted to `skills/startup-landing-design/` and `evals/briefs/queue.md`. `evals/assertions.json` was first opened after both runs and their checkpoints were complete. Gallery, docs, other evaluation files and repository demos were not opened. The repository was cloned and never edited, committed, pushed or used to open a pull request.

Two empty output folders were created. Only the designated skill folder was copied into `run-with/.skill/`. Dependencies were installed in a third folder. A parent dependency symlink made that external installation resolvable to the unchanged scripts. The baseline did not receive an installed skill; the skill's measurement scripts were called from outside it after building.

This is a sequential same-agent comparison. Reading the skill first creates unavoidable carryover into the baseline. The baseline's build did not intentionally apply reference selection, recipe selection, a decision record, detector gates or a structural-revision process. It is not a blind or randomized control. Both runs also share the explicit honesty and safety constraints in the brief.

The copied skill is an immutable input fixture and is omitted from the downloadable archives. Restore it from the recorded commit to reproduce the commands. No dependencies or repository clone are bundled. Empty screenshot folders and zero-byte checker stdout are retained, rather than replaced with fabricated artifacts.

Evaluator product and model identity are omitted from all deliverables. Subject/reference names and verbatim requested-tool errors are preserved as task evidence; a literal prohibition on those names conflicts with the brief and exact-error requirement.

## Assertion grading

Verdicts use the requested `pass`, `fail`, and `can't-establish`. An unavailable check is not a pass. All assertions are reproduced below, including the cross-brief assertions which this one-brief experiment cannot establish. Process requirements are scored literally for the baseline, but their absence is expected and does not demonstrate a worse landing page.

| Assertion | With skill | Without skill |
| --- | --- | --- |
| verify-record.mjs exits 0 on the output folder (record complete, screenshots real, checker JSON present, before/after evidence present) | **fail**: `run-with/verify-record.log` says `OK DONE_WITH_CONCERNS`, but no PNG exists and `check.json` is empty; the full assertion is false. | **fail**: `run-without/verify-record.log` reports missing `DESIGN-RECORD.md`, exit 1. |
| one named archetype and two different hero variants are compared and scored before implementation | **pass**: `run-with/DESIGN-RECORD.md`, Hypothesis and Two hero variants before code; decision record was filled before the HTML was written. | **fail**: `run-without/BUILD-NOTES.md` and output folder contain no archetype or scored pre-code variants. |
| pre-implementation gate is recorded with block findings resolved or justified | **pass**: `run-with/DESIGN-RECORD.md`, Gate before implementation records the retained single sans family warning and hierarchy justification; no source-plan block identified. | **fail**: no gate or design record in `run-without/`. |
| post-render gate is recorded with accepted/rejected findings | **fail**: `run-with/DESIGN-RECORD.md`, Gate after render is explicitly a source-only fallback; `render-after.log` proves no render occurred. | **fail**: no post-render gate in `run-without/`; `render.log` reports browser launch failure. |
| check-page.mjs JSON reports no failures | **can't-establish**: `run-with/check.json` is empty, `check-error.log` shows launch failure before checks. | **can't-establish**: `run-without/check.json` is empty, `check-error.log` shows the same launch failure. |
| screenshots exist at 1440, 768 and 390 pixels and are not blank | **fail**: `run-with/shots/` and `shots-before/` contain no PNG; see render logs. | **fail**: `run-without/shots/` contains no PNG; see `render.log`. |
| one structural rather than cosmetic revision is recorded with before and after evidence | **pass**: `run-with/before.html` versus `index.html`: docs moved before production limits; state-specific explanation added inside the job instrument. Source fallback is explicitly allowed when rendering fails. | **fail**: no before/after revision evidence in `run-without/`. |
| the agent's final reply ends with DONE, DONE_WITH_CONCERNS or BLOCKED, matching the record | **can't-establish**: final reply is outside this zip and had not been emitted when this report was frozen; record status is in `run-with/DESIGN-RECORD.md`. | **fail**: no baseline record status exists to match. |
| the named archetype differs across all three briefs | **can't-establish**: only queue ran; `run-with/DESIGN-RECORD.md` names typographic technical. | **can't-establish**: only queue ran and baseline has no named archetype. |
| all three conversion actions have honest destinations or local results | **can't-establish**: only queue ran; `run-with/index.html` links to actual local `#docs` and `demo.mjs`. | **can't-establish**: only queue ran; `run-without/index.html` links to actual local `#docs` and `example.mjs`. |
| no fabricated customers, metrics or endorsements | **pass, scoped to this run**: `run-with/index.html` has no customer proof or measured-performance claims; example policies and interface are labelled illustrative. | **pass, scoped to this run**: `run-without/index.html` has no customer proof or measured-performance claims; example policies and interface are labelled illustrative. |

No aggregate score is calculated. Counting process-only failures as design losses would unfairly penalize a no-skill baseline. Cross-brief diversity cannot be inferred from one brief.

## Execution evidence

| Operation | With skill | Without skill |
| --- | --- | --- |
| Initial render | exit 1, `render-before.log`; no PNG | not applicable: baseline has one render attempt |
| Final render | exit 1, `render-after.log`; no PNG | exit 1, `render.log`; no PNG |
| check-page | exit 1 before any checks; `check-error.log`; 0-byte `check.json` | exit 1 before any checks; `check-error.log`; 0-byte `check.json` |
| Automatic block failures / warnings | unavailable / unavailable; no result exists | unavailable / unavailable; no result exists |
| verify-record | exit 0 on `run-with/`; `verify-record.log`: `OK DONE_WITH_CONCERNS` | exit 1 on `run-without/`; `verify-record.log`: missing design record |
| Local command-line example | all three scenarios exit 0; stable job ID and expected terminal state, `cli-test.log` | all three scenarios exit 0; stable job ID and expected terminal state, `cli-test.log` |
| Optional detector | exit 1; no scan result; exact error in `optional-check.log` | not run; baseline did not use this design tool |

Commands used from the evaluation root:

```sh
bash run-with/.skill/scripts/render.sh run-with/index.html run-with/shots-before
node run-with/.skill/scripts/check-page.mjs run-with/index.html > run-with/check.json
bash run-with/.skill/scripts/render.sh run-with/index.html run-with/shots
node run-with/.skill/scripts/check-page.mjs run-with/index.html > run-with/check.json
node run-with/.skill/scripts/verify-record.mjs run-with
bash run-with/.skill/scripts/render.sh run-without/index.html run-without/shots
node run-with/.skill/scripts/check-page.mjs run-without/index.html > run-without/check.json
node run-with/.skill/scripts/verify-record.mjs run-without
```

The first render saw the original `index.html`; its source was preserved as `before.html` before revision. The latter render saw the revised source. Both failed before capture. There were no PNGs to open or recapture. No visual, keyboard, contrast, zoom or actual-package tests passed merely because source and local traces exist.

Initial browser-install errors observed:

```text
Error: End of central directory record signature not found. Either not a zip file, or file is truncated.
Failed to install browsers
Error: Failed to download Chrome for Testing 156.0.8078.4 (playwright chromium v1248), caused by
Error: Download failure, code=1
```

Render and checker errors are preserved verbatim in each run's logs. The decisive line is:

```text
browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell
```

The checker emits no fallback JSON because browser launch occurs before its try block. Empty stdout is evidence of failure to measure, not a clean report. Both runs' limitations apply equally.

## Product assessment from source only

The skill-guided artifact is closer to the brief's central question: an event ledger keeps job identity visible while the visitor explicitly advances through retry and terminal failure. Revision adds the missing meaning of each state. The baseline prints the entire trace in one click, which is simpler to operate but gives less guidance per event. Both provide actual safe command-line examples and honest on-page tutorial destinations.

Neither example integrates the actual package. The brief supplies no verified API, package coordinates or official docs URL, so both avoid inventing one. This prevents a false integration claim but leaves the installation conversion weak. The pages teach a state model rather than establish that the named queue implements those semantics. A supplied minimal package API and official docs URL would materially improve this evaluation.

The guided record is much larger than the page's decision problem needs. It visibly improves traceability, but its successful exit is not evidence that the page renders. The benefit here is documented reasoning and a more deliberate artifact, with visual quality unresolved.

## Instruction problems and guesses

Paths below refer to the copied skill at the recorded commit. These are all issues encountered or identified in the instructions read for this run. Unopened families were not audited.

1. **The headline completion contract is false as written.** `SKILL.md:13`: “It fails on any empty field, missing screenshot, missing checker output”. In this run it exits 0 with zero screenshots and zero checker JSON, because unavailable evidence plus a concerns status is allowed. Say explicitly that exit 0 means a complete and internally consistent record, not a successfully validated page. This is the largest problem.

2. **The evaluation disagrees with the skill's fallback.** `SKILL.md:44`: “or on the source if rendering failed”. The evaluation demands a post-render gate and real screenshots. Following the documented fallback cannot pass those assertions. Separate fallback completion from verified-page completion in both contracts.

3. **“Every field” is stronger than the actual verifier.** `assets/decision-record.md`, opening paragraph: “it fails on any empty field, empty table cell or unfinished marker.” The script checks selected sections and bullet patterns, not every conceivable field or table cell. The prose makes a broader guarantee than the implementation.

4. **Missing runtime setup instructions.** `SKILL.md:41`: “install Playwright in a scratch folder outside the project”. The ESM scripts import the dependency relative to their own location. An external installation alone does not make it resolvable. I supplied a parent symlink. Document a tested dependency-resolution mechanism; do not make every evaluator discover one.

5. **No machine-readable failure result.** `SKILL.md:43`: “64 automatic checks.” Launch failure produces empty JSON stdout rather than a structured unavailable report. The record's JSON field supports an unavailable string, but the measurement artifact does not. A downstream grader cannot safely treat exit 1 as page failures. Catch setup errors and emit a distinct non-result with the exact cause.

6. **Screenshot outputs differ by backend.** `scripts/render.sh`: `agent-browser screenshot --full "$output/$width.png"`; `scripts/render-playwright.mjs`: “it saves <width>-top.png ... and <width>.png”. One backend gives full-page captures only, the other also gives viewport captures. Yet visual QA requests first-screen and full-page evidence. Define one consistent manifest and output contract.

7. **File size is not screenshot validity.** `scripts/verify-record.mjs`: “each row is a real PNG over 8 KB”. The code checks path suffix, existence and byte count, not dimensions, image decoding or content. A large wrong-width or invalid file can satisfy it. The manual opening requirement helps, but the automatic claim remains overstated.

8. **The manual verdict vocabulary cannot express unavailable evidence.** `assets/decision-record.md`, Checklist: “Verdict (pass / fail / n/a)”. A failed render is neither a demonstrated visual failure nor inapplicability. I used conservative fail entries with explicitly unverified evidence, while the report distinguishes can't-establish. Add an unavailable/unverified verdict and enforce its status consequences.

9. **A final-reply check is circular.** `assets/decision-record.md`, PR-04: “verify-record.mjs exits 0 and the final reply ends with the record's status line.” The record must be complete before verification, but the final reply does not exist yet. The pre-verification pass entry is only a commitment, not evidence. Verify the record and final transcript separately.

10. **Before-code sequencing is not machine-established.** `SKILL.md:25`: “before writing code”. The record captures decisions but provides no immutable chronology or transcript mechanism. This report can state the actual order followed, but the final files alone cannot prove it. Do not imply the verifier certifies chronology.

11. **The effort budget has no measurement rule.** `SKILL.md:13`: “Spend at most a third of your effort on steps 1–3”. Effort could mean elapsed time, tokens, tool calls or reasoning work. The mandatory reading is already substantial. Use a practical time/reading budget or call this guidance rather than a requirement.

12. **The “short” record is not short.** `references/implementation-workflow.md`, step 2: “Create a short design record ... Keep it proportional to the page.” The asset simultaneously mandates many sections and 36 manual answers. The record in this run exceeds the page source in bytes, partly because exact errors must be preserved. Offer a compact schema and links to logs rather than duplicative prose.

13. **Five-dimensional scores have a one-cell template.** `SKILL.md:25`: “score each 0–10 for product fit, identity, originality, composition and product proof”. The asset supplies a single score/evidence cell per variant. I packed all five scores into it. Separate the five dimensions and require a short reason for each if that level of scoring matters.

14. **The scoring instruction and this run's record are not equally detailed.** `references/visual-qa.md`: “each with one sentence of evidence and what a 10 would need.” The filled record uses grouped evidence and grouped ceilings. It names all five scores but does not provide one full evidence sentence per dimension. That is an evaluator compliance weakness, not a successful enforcement result; the verifier accepted it. Make this mechanically inspectable or simplify it.

15. **Evidence populations are not reconciled.** `references/reference-selection.md`: “52 dated records”; `references/recipes/typographic-technical.md:7`: “103 measured startup homepages”. These may be different datasets, but the standalone skill does not explain the relationship, inclusion criteria or aggregate calculation. I treated the numbers as supplied research claims, not independently verified measurements.

16. **Desktop-only language conflicts with phone observations.** `references/recipes/typographic-technical.md:3`: “The cited observations are desktop-only”. The same file immediately reports phone H1 medians, and several family casebook entries are explicitly desktop-mobile audits. Tighten the evidence labels.

17. **Reference dates are hard to cite cleanly.** `references/recipes/typographic-technical.md:23` dates one integration interaction to 2026-10-18; its casebook entry reports 2026-10-19 measurements without dating the earlier observed interaction in its heading. I recorded the mismatch rather than silently choosing one. Date interactions and measurements separately.

18. **A family is selected before reading its casebook, but selection may change after reading.** `SKILL.md:21`: “only the casebook file for the family you are considering.” The text does not say whether switching families permits another file or how to select cross-family reference jobs. I stayed within one family and used three entries there. Clarify that the restriction limits unnecessary reading, not legitimate reconsideration.

19. **Actual product evidence versus a labelled model is underspecified.** `SKILL.md:31`: “Build real product evidence” and “Illustrative interfaces say so and do something locally.” With no supplied API, I chose an honest state model instead of invented integration code. The resulting local behavior is real, but it is not evidence of package behavior. Define the acceptable evidence level for an underspecified brief.

20. **The recipe's interaction expectation is narrower than the product task.** `references/recipes/typographic-technical.md:20`: “see both the code and result change.” A state ledger can answer this brief without changing code on every state selection. I prioritized evolving state/result and a fixed runnable model. Specify which artifact properties are examples and which are required.

21. **Motion advice conflicts inside the bundle.** Recipe motion table: “150–200ms opacity ease-out” for a code-tab change; `references/motion-and-responsive.md`: “Do not fade text that must be read”. Code and result text must be read. I omitted motion entirely. Distinguish fading decorative containers from essential text, or recommend immediate text swaps consistently.

22. **Optional discovery can still reach package resolution.** `SKILL.md:43`: “npx --no-install impeccable detect”. The observed result was `npm error npx canceled due to missing packages and no YES option: ["impeccable@4.7.0"]`, not a clean tool-level unavailable result. Use explicit executable detection or explain wrapper exit codes and possible registry lookup.

23. **Network availability is too binary.** `SKILL.md:43`: “not run: offline” when offline. Repository cloning and dependency install succeeded, but browser download returned invalid archive bytes. “Offline” would be inaccurate. Preserve the exact operation-specific error, as done here.

24. **One structural revision has no stopping rule if the weak point remains.** `SKILL.md:45`: “Revise once, structurally”. A required revision is useful, but one revision is not a quality threshold, especially when rerendering is unavailable. State whether the mandatory pass is a minimum, a budget cap or a forced change even when the initial page is adequate.

25. **The scope of “No backend” is ambiguous.** `SKILL.md:31`: “No backend to fake a product.” I interpreted this as prohibiting deceptive simulations, not forbidding a useful backend when a real product needs one. This brief needed no backend. State the intended boundary directly.

26. **Repository inspection conflicts with evaluation isolation.** `references/implementation-workflow.md`, step 1: “Read the repository instructions and existing app entry points”; `references/reference-selection.md`: “When the full repository is available, inspect research/sites.json and the audit file.” The user's isolation rules took priority, so neither was opened. Distinguish the host app repository from the skill's research repository and provide an explicit self-contained evaluation path.

27. **The primary-action check has no clear boundary.** Checklist PS-06: “There is one primary action, worded the same wherever it appears.” The baseline provides docs and a demo with similarly styled buttons. The guided page prioritizes docs but also styles the example download. The checker could not run, and visual hierarchy is unverified. Define primary through a semantic marker or explicit record field rather than inferring it only from generic button styling.

28. **Exact multi-line errors do not fit a Markdown table cell.** `SKILL.md:41`: `unavailable: "<exact error>"`. The record uses the exact decisive error line in each screenshot cell and includes full stderr below and in log files. Clarify that a quoted cause plus a verbatim log link is acceptable; otherwise escaping full stack traces into cells damages readability.

## Evaluator deviations and remaining work

The record's pre-code hypotheses and five scores exist, but score explanations are grouped rather than one sentence per dimension. The first gate records one retained warning rather than a row-by-row detector audit. The post-render gate is source-only and compact. Several manual checklist entries use general source/record evidence rather than precise selectors. These are weaknesses of this run, and the verifier did not reject them.

The guided mobile ledger retains accumulated states in a vertical list rather than showing only a single current step as the recipe recommends. Its visual density cannot be judged without rendering. No claim of complete instruction compliance or accessibility success is warranted.

To finish the evaluation: make the browser install succeed, rerun both unchanged pages through the same render/check scripts, open every PNG, exercise all controls and docs/download destinations, and replace unavailable verdicts using observed evidence. Then repeat with a genuinely fresh baseline context and evaluate the other briefs if cross-brief claims matter. No such future result is included in this report.

Final guided record status: `DONE_WITH_CONCERNS: Rendering, browser checks and visual/accessibility behavior unverified; package API not supplied.`
