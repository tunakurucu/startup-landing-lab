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

## v0.4 (on main after 2026-10-20)

| What | Where |
| --- | --- |
| Three modes: Build, Revise (with `compare-checks.mjs`) and Audit (`assets/audit-report.md`, `references/audit-lens.md`) | `SKILL.md` |
| The 100 checks revised: 68 automatic. New groups for copy and positioning (CP) and structure and conversion (ST); Core Web Vitals, focus contrast, WCAG text spacing, share-card metadata, false urgency; corrected reduced-motion, target-size and line-length rules | `scripts/checks_source.py`, `scripts/check-page.mjs`, `references/checklist.md` |
| New references: copy and positioning, page structure (evidence-graded), audit lens (YC, operators, psychology), framework adapters, observed type | `references/` |
| Reference tier: 42 sites chosen for their design, audited at desktop and phone, measured separately (`research/measurements-reference.jsonl`), listed first in each casebook family | `research/sites.json` (`tier: reference`) |
| Five more skills credited (marketingskills, taste-skill, auteur, ui-skills, wondelai) and the research sources behind the copy, structure and audit rules | `README.md`, `docs/attribution.md` |
| Round-3 eval kit: 12 new briefs, a redesign fixture, a Next.js fixture, three grader personas, pre-registered sign test | `evals/round3/` |

Regenerate after editing data: `python3 scripts/generate.py && python3 scripts/checks_source.py && python3 scripts/summarize_measurements.py && python3 scripts/summarize_type.py`.

## v0.3 (tagged v0.3.0)

| Commit | What it added |
| --- | --- |
| `9de02d8` | Cross-check against Impeccable, gstack, Emil Kowalski, Vercel, Matt Pocock and Anthropic skills. `verify-record.mjs` decides "done"; step 6 is one continuous render → check → revise → verify sequence with a closed status line. |
| `48b6ca6` | The 100 checks (`scripts/checks_source.py` → `assets/checks.json`, `references/checklist.md`, the decision-record table): 64 automatic in `check-page.mjs`, 36 answered in the record and enforced by `verify-record`. Gallery and demos fixed where the checks found problems; README leads with "Built on" credits. |
| `f8e7077` | 94 verified 2026 candidates (YC W26/P26/S26, a16z speedrun SR006, Pear). Spring 2026 was first labelled X26; YC's pages say P26, corrected later. |
| `0b6c0d6`, `634dc40` | `measure.mjs` and `research/measurements.jsonl` for 103 homepages; percentiles in `research/measurements.md`; recipes quote observed values. Dark/light classification corrected from screenshots. |
| `314ea41`, `0892685`, `62b4722` | 32 desktop+phone audits merged (52 total) with measurements; findings in `research/README.md`; casebook split by family; per-family observed medians in recipes; gallery shows a16z/Pear evidence and measurement tables. |
| `f1d0a13` | IBM Plex served as IBM's unmodified files (Reserved Font Name); React licence notices shipped and linked; Jakub Krehel's and Meng To's skills credited and folded into four checks. |
| `c79ad9a` | First with/without eval (queue brief, `evals/runs/2026-10-19-queue`). Fixes: `browser.mjs` dependency lookup and system-Chrome fallback; checker and renderer report `unavailable` instead of crashing; `verify-record` checks PNG width, accepts `unverified`, requires five numeric scores; honest completion contract. |
| (this block) | 111 more verified candidates (248 total; 205 from YC, a16z and Pear); 211 homepages measured; `summarize_measurements.py` generates the summary and the recipes' observed lines, and validation fails on drift. |
| `b94f92d` and after | Blind A/B evals (`evals/run.md`): round 1, skill preferred 2 of 3 (182/180); rules fixed; round 2, 4 of 4 including a holdout brief (254/235). Checker runs all 64 checks on pages opened from disk. |

Browser suite: 98 tests. Unit tests: 14. The gallery passes all 64 automatic checks; the demos keep five documented warnings.

## Next

1. Tag `v0.3.0` from the GitHub UI (this sandbox cannot push tags or create releases).
2. Run more holdout briefs (new products, both ways, blind) to grow the eight pairs; re-test the two post-round-2 fixes.
3. Audit more of the 211 measured candidates by hand, prioritising canvas-first and editorial-platform, which have one and two records.
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
# after appending to research/measurements.jsonl: python3 scripts/summarize_measurements.py && python3 scripts/summarize_type.py
```

Rules that have held since v0.1: never push a red `main`; one commit per block; no fabricated observations, scores or client runs; no third-party assets or screenshots; recipe numbers stay labelled *recommended* until a measurement pass makes them *observed*.
