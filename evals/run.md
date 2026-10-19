# Skill evaluations

Give an agent **only** the standalone `skills/startup-landing-design/` directory and one raw brief from `briefs/`. Put each output in an empty separate folder. Do not show the agent the assertion list, demo code, expected archetype or another run's output. Ask it to finish the page and `DESIGN-RECORD.md`, then score against [assertions.json](assertions.json).

Run `node skills/startup-landing-design/scripts/check-page.mjs <url-or-html>` where Playwright is installed and save its JSON. Use `scripts/render.sh` for 1440/768/390 screenshots; inspect hero, middle and footer, and check the saved record's pre/post gates and actual structural revision. Repeat a brief with the same agent/environment to see whether results vary. For an external client, first install only the skill folder; log its model, version, date and output path. A source-only code check is not a rendered pass.

| Brief | Agent / environment | Date | Passed | Notes |
| --- | --- | --- | --- | --- |
| queue | Isolated Work agent, standalone skill folder and brief | 2026-10-19 | 2/7 per-run | `../eval-queue/`: archetype and two variants, pre-gate pass. Record sections for post-gate, render and revision say pending. Checker fails `type_system`, `reduced_motion_rule`, `valid_links`; no screenshots. |
| gift | Isolated Work agent, standalone skill folder and brief | 2026-10-19 | 2/7 per-run | `../eval-gift/`: archetype and two variants, pre-gate pass. Post-gate, render and revision pending. Checker fails `type_system`; no screenshots. |
| renewal | Isolated Work agent, standalone skill folder and brief | 2026-10-19 | 1/7 per-run | `../eval-renewal/`: HTML page only; checker passes all seven checks, but no `DESIGN-RECORD.md` or screenshots. Other assertions fail or cannot be established. |

These are first-run outputs, not complete eval passes. The three runs were isolated from the demo source and assertion file. The requested cross-run archetype distinction is **unverified**, since renewal has no decision record. Local illustrative control behavior and a structural revision were not manually verified. Output folders live outside the repository and may not persist; this table preserves the observed results. The exact checker command was `node skills/startup-landing-design/scripts/check-page.mjs /workspace/scratch/02805d2c1737/eval-<brief>/index.html`. No Claude Code, standalone Codex CLI or Cursor run was performed.

For the user's later comparison: run the same three briefs in a fresh Claude Code project with the skill, then again without it. Preserve prompts, resulting pages, records, rendered screenshots and graded assertions. Claude's plugin eval and skill-doctor can complement this protocol where available, but neither was run here. Compare product fit and output diversity as well as mechanical checks; three trials cannot establish a general performance claim.
