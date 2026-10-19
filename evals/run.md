# Skill evaluations

Give an agent **only** the standalone `skills/startup-landing-design/` directory and one raw brief from `briefs/`. Put each output in an empty separate folder. Do not show the agent the assertion list, demo code, expected archetype or another run's output. Ask it to finish the page and `DESIGN-RECORD.md`, then score against [assertions.json](assertions.json).

Run `node skills/startup-landing-design/scripts/check-page.mjs <url-or-html>` where Playwright is installed and save its JSON. Use `scripts/render.sh` for 1440/768/390 screenshots; inspect hero, middle and footer, and check the saved record's pre/post gates and actual structural revision. Repeat a brief with the same agent/environment to see whether results vary. For an external client, first install only the skill folder; log its model, version, date and output path. A source-only code check is not a rendered pass.

| Brief | Agent / environment | Date | Passed | Notes |
| --- | --- | --- | --- | --- |
| queue | Sandboxed agent, standalone skill folder and brief only | 2026-10-19 | 2/7 | Archetype chosen and two hero variants compared; pre-build gate passed. Post-gate, render and revision sections left pending. Checker fails `type_system`, `reduced_motion_rule`, `valid_links`; no screenshots. |
| gift | Sandboxed agent, standalone skill folder and brief only | 2026-10-19 | 2/7 | Archetype chosen and two hero variants compared; pre-build gate passed. Post-gate, render and revision pending. Checker fails `type_system`; no screenshots. |
| renewal | Sandboxed agent, standalone skill folder and brief only | 2026-10-19 | 1/7 | HTML page only; checker passes all seven checks, but no `DESIGN-RECORD.md` and no screenshots. Other assertions fail or cannot be established. |

These are first-run outputs, not complete eval passes. The three runs were isolated from the demo source and the assertion file. The cross-run archetype distinction is **unverified**, since the renewal run produced no decision record. Local control behavior and a structural revision were not manually verified. Output folders were kept outside the repository; this table preserves the observed results. The checker command was `node skills/startup-landing-design/scripts/check-page.mjs <output>/index.html`. No run inside a supported client (Claude Code, Codex, Cursor) has been performed yet.

The pattern across all three runs is the same: the agent does the interpretation and selection steps and stops before rendering and revision. That is a skill weakness, not only an environment limit, and it is the first thing to fix in v0.3.

## v0.3: first with/without comparison

[Full report and outputs](runs/2026-10-19-queue/REPORT.md). Brief: queue. Skill at commit `efdeb7a`. An independent agent in a separate environment built the page twice, once following the skill and once without it, then graded both against `assertions.json`, which it opened only after both runs.

| Assertion | With skill | Without skill |
| --- | --- | --- |
| verify-record exits 0 | fail: exited 0 as DONE_WITH_CONCERNS with no screenshots or checker JSON, which the assertion does not accept | fail: no record |
| Archetype and two scored hero variants before code | pass | fail |
| Pre-build gate recorded | pass | fail |
| Post-render gate recorded | fail: source only | fail |
| check-page JSON has no failures | can't establish: browser never launched | can't establish |
| Screenshots at 1440, 768, 390 | fail: browser download failed | fail |
| Structural revision with before/after | pass (source evidence) | fail |
| No fabricated proof | pass | pass |

Neither page could be rendered: the environment could not download a browser, and the skill's scripts crashed instead of reporting that. So the run shows a clearer decision trail and a more deliberate artifact with the skill, and says nothing yet about visual quality. Three assertions about cross-brief behaviour need the other two briefs.

The evaluator listed 28 places where the instructions were unclear or overclaimed. Fixed in response:

- `browser.mjs` finds Playwright from `SLD_DEPS`, the working directory or the skill folder, and falls back to a system Chrome. `check-page.mjs` and `render.sh` now exit 3 with `"status": "unavailable"` and the exact error instead of crashing with empty output; `verify-record` refuses DONE when that happens.
- The completion contract no longer overclaims: exit 0 means the record is complete and honest; only `OK DONE` means rendered and checked.
- Checklist verdicts gain `unverified`, which rules out DONE.
- `verify-record` reads each PNG's width from its header and rejects a screenshot that does not match its row, instead of trusting file size.
- Both render backends write the same files (`<width>-top.png`, `<width>.png`).
- The hero table has one column per score, and the scores must be numbers.
- Motion tables no longer fade text that must be read; "desktop-only" evidence labels, the "short" record, the effort budget, the backend boundary, "revise once" and "offline" were reworded.

Still open from the report: dating an interaction and its measurement separately in each casebook entry, and a way to mark the primary action explicitly.

To add a client row: install only the skill folder into a fresh project in that client, run one brief with the skill and once without it, and preserve prompts, pages, records, rendered screenshots and graded assertions. Compare product fit and output diversity as well as the mechanical checks. Three trials cannot establish a general performance claim.
