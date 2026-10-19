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

To add a client row: install only the skill folder into a fresh project in that client, run one brief with the skill and once without it, and preserve prompts, pages, records, rendered screenshots and graded assertions. Compare product fit and output diversity as well as the mechanical checks. Three trials cannot establish a general performance claim.
