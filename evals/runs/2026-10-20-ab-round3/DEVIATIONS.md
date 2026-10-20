# Deviations

- 2026-10-20 04:10 UTC. Isolation breach in the no-skill arm. The build prompt named the repository's `node_modules` as the Playwright path; two no-skill builders browsed upward from it. W005 (envvars/without) read the skill and used it (its folder contains DESIGN-RECORD.md and check.json); W001 (kitchens/without) listed the skill folder in a `find` but did not read any skill file. Both builds are invalid under protocol step 3 (visible skills must match the arm) and are rebuilt. Fix: Playwright and axe were copied to `/home/claude/r3/deps/` outside the repository, and every later prompt uses that path; the skill arm's SLD_DEPS points there too. The invalid outputs are kept outside the run folder and are not graded. Builds W002, W003, W004 and W007 were checked: no skill path appears in their transcripts.
- 2026-10-20 05:20 UTC. Start markers. Two builders deleted the operator's `.start` file in their working folder while tidying: W008 (agenda/without) and W015 (questionnaire/with). Their start times in `meta.json` are taken from the first message timestamp of the build transcript instead (within a minute of the launch); wall-clock seconds for those two are approximate.
- 2026-10-20 05:20 UTC. Both arms ran in a client whose built-in skills were visible to the agent. Six of the seven no-skill builds finished so far invoked the client's built-in `frontend-design` skill; no skill-arm build did (they used the installed skill). This is recorded per build in `meta.json` (`harness_skills_invoked`) and reported in the summary: the control arm is "the client as shipped", not "no guidance at all".

## Blinding scrub notes (step 6)

- P016 side B: "DESIGN-RECORD" remains in README.md outside a comment (visible text or identifier); left in place
