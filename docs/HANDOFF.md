# Maintainer handoff · v0.2.0

Public repo: `tunakurucu/startup-landing-lab`. Live gallery: https://tunakurucu.github.io/startup-landing-lab/. Both GitHub Actions workflows (Validate, Publish gallery) must be green on every push to `main`.

## Before v0.2.0

| Commit | What it added |
| --- | --- |
| `8a8e03d` | v0.1: 43 candidates, 20 desktop audits, 7 archetypes, skill v0.1, three demos, gallery, Pages. |
| `6aa337c` | Skill v0.2: seven archetype recipes (recommended numbers), 14-signature default-layout gate, decision-record template, `render.sh` / `check-page.mjs` scripts, companion-tool positioning. |
| `af3992e` | Gate wired into CI (`tests/browser/skill-gate.spec.ts`, fixme until fonts land); `check-page.mjs` waits for the SPA route; recipes de-templated. Gate baseline recorded in `docs/evaluation.md`: all four routes fail only `type_system`. |
| `2caa98d` | `evals/`: three raw briefs, `assertions.json`, `run.md` with honest first-run results (2/7, 2/7, 1/7). |

## v0.2.0 (released 2026-10-19)

| Commit | What it added |
| --- | --- |
| `e9a4ff1` | Neutral handoff and eval wording. |
| `b551372` | Five SIL-OFL families self-hosted with license texts; Arial/Georgia/Courier removed; `check-page.mjs` counts every rendering family; gate tests enabled and passing on all four routes; 12 screenshots replace 60. |
| `c6de11b` | Motion contracts on all three demos (translate/scale only; reduced motion removes all and hides nothing); eight contract tests. |
| `e2ec091` | Relayline restructured: the trace explorer is the hero, separate try-it section removed; empty inspector state; 320 px and 2x-scale stress spec; honest diversity review. |
| `5b9b358`, `29fb448` | Test hardening: polling instead of fixed waits; Sidequest deal no longer runs on first paint (axe caught text mid-fade). |

Browser suite: 85 tests, green locally on repeated runs and in CI.

## v0.3 plan

1. **Fix the early stop.** All three eval agents stopped before render, post-gate and revision. Make those steps produce required files and make "done" conditional on them; re-run the three briefs.
2. **Cross-check against reference skills** (Impeccable, Emil Kowalski's skills, Vercel web-design-guidelines, gstack design-review, Matt Pocock's grill-me, Anthropic skill-creator) and fold missing checkable rules into the detector and recipes.
3. **Research expansion:** 2026 YC / a16z / Pear candidates with source links, ~30 deep audits with measured numbers (`scripts/measure.mjs`, `measurements` schema object), so recipe values can move from *recommended* to *observed*. Needs a browser with open web access.
4. Structural wireframe thumbnails from each record's page sequence; prerendered routes for crawlers and link previews.
5. Client rows in `evals/run.md`: the same briefs in Claude Code, Codex and Cursor, with and without the skill.

## How to continue

```bash
git clone https://github.com/tunakurucu/startup-landing-lab && cd startup-landing-lab
npm ci && python3 -m pip install -r requirements.txt
npm run build && npm run lint && npm test && npm run validate
agentskills validate skills/startup-landing-design
npx playwright install chromium && npm run test:browser
```

Rules that have held since v0.1: never push a red `main`; one commit per block; no fabricated observations, scores or client runs; no third-party assets or screenshots; recipe numbers stay labelled *recommended* until a measurement pass makes them *observed*.
