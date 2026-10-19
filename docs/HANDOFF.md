# Maintainer handoff · v0.2 in progress

Public repo: `tunakurucu/startup-landing-lab`. Live gallery: https://tunakurucu.github.io/startup-landing-lab/. Both GitHub Actions workflows (Validate, Publish gallery) must be green on every push to `main`.

## Published state

| Commit | What it added |
| --- | --- |
| `8a8e03d` | v0.1: 43 candidates, 20 desktop audits, 7 archetypes, skill v0.1, three demos, gallery, Pages. |
| `6aa337c` | Skill v0.2: seven archetype recipes (recommended numbers), 14-signature default-layout gate, decision-record template, `render.sh` / `check-page.mjs` scripts, companion-tool positioning. |
| `af3992e` | Gate wired into CI (`tests/browser/skill-gate.spec.ts`, fixme until fonts land); `check-page.mjs` waits for the SPA route; recipes de-templated. Gate baseline recorded in `docs/evaluation.md`: all four routes fail only `type_system`. |
| `2caa98d` | `evals/`: three raw briefs, `assertions.json`, `run.md` with honest first-run results (2/7, 2/7, 1/7). |

## v0.2 remaining work

- [ ] Fonts: self-host OFL `.woff2` + `OFL.txt` under `gallery/public/fonts/`; remove Arial/Georgia/Courier stacks; all routes pass `type_system`; enable the gate tests.
- [ ] Motion: contracted interactions on all three demos (transform/opacity only, reduced-motion keeps state); contracts recorded in `docs/demo-decisions.md`.
- [ ] Structure: change the section grammar of one demo; update the diversity table so it is true of architecture, not only mood.
- [ ] Stress: 320 px, 200 % zoom, longest headline, empty widget states.
- [ ] Screenshots: 12 total (home, references, skill, three demos × 1440 and 390). The 60-file set is retired.
- [ ] Release: README counts and evals table, repo topics, `v0.2.0` tag, this file updated.

Deferred to v0.3: numeric research measurements (`scripts/measure.mjs`, `measurements` schema object); structural wireframe thumbnails; prerendered routes for crawlers; re-running the three evals after the gate and font fixes.

## How to continue

```bash
git clone https://github.com/tunakurucu/startup-landing-lab && cd startup-landing-lab
npm ci && python3 -m pip install -r requirements.txt
npm run build && npm run lint && npm test && npm run validate
agentskills validate skills/startup-landing-design
npx playwright install chromium && npm run test:browser
```

Rules that have held since v0.1: never push a red `main`; one commit per block; no fabricated observations, scores or client runs; no third-party assets or screenshots; recipe numbers stay labelled *recommended* until a measurement pass makes them *observed*.
