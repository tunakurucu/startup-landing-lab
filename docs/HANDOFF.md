# Maintainer handoff · v0.3 in progress

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

## v0.3 (on main, not yet tagged)

| Commit | What it added |
| --- | --- |
| `9de02d8` | Cross-check against Impeccable, gstack, Emil Kowalski, Vercel, Matt Pocock and Anthropic skills. `verify-record.mjs` decides "done"; step 6 is one continuous render → check → revise → verify sequence with a closed status line. |
| `48b6ca6` | The 100 checks (`scripts/checks_source.py` → `assets/checks.json`, `references/checklist.md`, the decision-record table): 64 automatic in `check-page.mjs`, 36 answered in the record and enforced by `verify-record`. Gallery and demos fixed where the checks found problems; README leads with "Built on" credits. |
| `f8e7077` | 94 verified 2026 candidates (YC W26/X26/S26, a16z speedrun SR006, Pear). |
| `0b6c0d6`, `634dc40` | `measure.mjs` and `research/measurements.jsonl` for 103 homepages; percentiles in `research/measurements.md`; recipes quote observed values. Dark/light classification corrected from screenshots. |
| `314ea41`, `0892685`, `62b4722` | 32 desktop+phone audits merged (52 total) with measurements; findings in `research/README.md`; casebook split by family; per-family observed medians in recipes; gallery shows a16z/Pear evidence and measurement tables. |

Browser suite: 98 tests. Unit tests: 10. The gallery passes all 64 automatic checks; the demos keep five documented warnings.

## Next

1. Tag `v0.3.0` from the GitHub UI (this sandbox cannot push tags or create releases).
2. Re-run the three eval briefs with v0.3 in a fresh agent, with and without the skill, and fill `evals/run.md`. The v0.2 runs stopped before rendering; v0.3's `verify-record` exists to stop that.
3. Audit the remaining 56 measured 2026 candidates, prioritising canvas-first and editorial-platform, which have one and two records.
4. Structural wireframe thumbnails from each record's page sequence; prerendered routes for crawlers.

## How to continue

```bash
git clone https://github.com/tunakurucu/startup-landing-lab && cd startup-landing-lab
npm ci && python3 -m pip install -r requirements.txt
npm run build && npm run lint && npm test && npm run validate
agentskills validate skills/startup-landing-design
npx playwright install chromium && npm run test:browser

# regenerate derived files after editing research/sites.json or scripts/checks_source.py
python3 scripts/generate.py && python3 scripts/checks_source.py
# measure homepages (numbers only): node scripts/measure.mjs list.json out.jsonl [--shots dir]
```

Rules that have held since v0.1: never push a red `main`; one commit per block; no fabricated observations, scores or client runs; no third-party assets or screenshots; recipe numbers stay labelled *recommended* until a measurement pass makes them *observed*.
