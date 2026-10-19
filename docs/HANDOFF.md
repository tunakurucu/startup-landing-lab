# Startup Landing Lab v0.2 handoff · 2026-10-19

## Published state

Public repo: `tunakurucu/startup-landing-lab`. P0 was published to `main` as `6aa337ccab8d19fd613c67abe5bcf61064f9903c` (same tree as local checkpoint `ad4048d`). It adds seven recommended-value recipes, a 14-signature pre/post default detector, the decision record, render/check scripts, v0.2 skill procedure, motion contract and optional companion positioning. `agentskills validate` passed. `npm run build`, `npm run lint`, `npm test`, `npm run validate` and 67 Playwright checks passed before publication. The render and checker scripts were exercised against a local HTML fixture at 1440/768/390.

The clone at `/workspace/scratch/02805d2c1737/v02` was fetched/reset to the published P0 commit while preserving generated screenshots. Direct `git push` failed because HTTPS credentials are unavailable in the shell; publish future tested commits via the connected GitHub Git data API (create blobs/tree/commit/update_ref with an expected head). Do not force push. The old `startup-landing-lab` checkout is dirty and diverged; work in the clean `v02` clone or reclone from GitHub.

## Session 3–4 progress

- [x] Session 3 P0: skill v0.2 published at `6aa337ccab8d19fd613c67abe5bcf61064f9903c`.
- [x] Session 4 recovery: publish this handoff as the first commit.
- [x] Block 1: gate baseline captured (all four routes fail only type_system), SPA wait repaired, agent-browser pixel scroll syntax verified, recipe rows specified, regression tests added as fixme until font block.
- [x] Block 2: three isolated first runs graded honestly; none achieved a full pass (queue 2/7, gift 2/7, renewal 1/7).
- [ ] Block 3: fonts, motion, distinct demo structure, screenshots.
- [ ] Block 4: numeric research, conditional on remaining time.
- [ ] Block 5: release README, topics, tag, final handoff.

## Current checkpoint

P1 has three raw briefs, `evals/assertions.json` and `evals/run.md`. Three isolated Work agents were started with only the standalone skill and a raw brief. Their outputs belong outside the repo under `/workspace/scratch/02805d2c1737/eval-{queue,gift,renewal}/`. **Their runs have not yet been graded or reported as passing.** Update the table only after checking outputs, checker JSON and screenshots. Do not claim Claude Code, Cursor or standalone Codex CLI execution.

The P1 files exist in a local draft commit `a2f9d8f` only. This handoff is published separately before those files. P2 (fonts, motion, skeleton revision and screenshot refresh), P3 (numeric research measurements) and release have not started. No v0.2 release tag exists.

Block 1 is ready for publication after the full test gate. Its browser regression cases are intentionally marked `fixme` for the recorded `type_system` failure; unmark them in block 3. Agent-browser's documented `scroll down [px]` uses window scrolling (vercel-labs/agent-browser issue 501); our `scroll up 99999` returns to the top of normal documents.

Block 1 was published as `af3992e682acca557ebbb7e9646e1867282cb91e`. Its GitHub API tree accidentally reset the executable mode on `render.sh` to 100644; restore 100755 in the next publication. Block 2 eval artifacts are being published; their incomplete first-run results are in `evals/run.md`. Repeating the runs after the skill's gate and font fixes is a next-session task.

## Next actions

1. Collect the three isolated run outputs; grade every assertion as pass/fail/unverified with paths. Repair the skill if a real failure warrants it, then update `evals/run.md`.
2. P2: source verified OFL font files/licenses, implement motion contracts and a real section-grammar change; test 320px/200% zoom, regenerate screenshots, run all checks.
3. P3 measurement pass, then P4 structural thumbnails/crawlability/README/topics/tag. Never label recommended recipe numbers as observed until measured.

Continue from `/workspace/scratch/02805d2c1737/v02`: `git fetch origin main`; `git reset --mixed origin/main` (preserves draft evals); `npm ci`; `npm run build && npm run lint && npm test && npm run test:browser`. Publish each block through GitHub Git Data API as one tree and one commit based on the latest `main` with `expected_sha`. Confirm the branch head after each update. The CLI may be in `/root/.local/bin/agentskills`. Verify final Actions Validate and Publish gallery against the exact new head. User's acceptance check for a no-JS fetch remains outstanding.
