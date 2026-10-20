# Round 3 pre-registration

Written and committed before any build. After this commit nothing in the skill, `evals/round3/` or this file changes for this round.

- Skill commit: `1bd83874cd18806811888c0cffbfccd256803fa7`; skill tree: `e525635cd5f36ed650302d525d65a35ec1978e2e`.
- Kit hashes (grading.md, protocol.md, 12 briefs, both fixtures, 3 scripts): `HASHES.txt` beside this file.
- Builders: fresh agents, model id `claude-fable-5-1`, run from this session's agent harness (Claude Code agent tool, same tool set for both arms). No turn cap or wall-clock cap can be enforced by the harness; each build runs until the agent stops, and any build over 120 minutes is logged in DEVIATIONS.md. Builders are told to use no network; the harness cannot block egress, so transcripts are checked afterwards for web fetches (a deviation from protocol step 3, recorded here).
- Graders and adjudicators: fresh agents, model id `claude-opus-5-5` (a different model from the builders, same model family).
- k = 1 (minimum tier): 24 builds, 12 primary packets, 4 retest packets, 48 grader runs.
- Seed: `593854993`.
- Tie band 6; alpha 0.05; primary endpoint: brief-level verdicts over the 12 briefs, exact two-sided sign test, ties excluded.
- Image: Node v22.22.0, Python 3.13.16, Playwright 1.56.1, Chromium build 1194 (Playwright bundle).
- Skill arm: the skill folder is copied read-only to a path outside every working folder; builders are told it is installed there. No-skill arm: no skill folder exists on the machine path they are given.
- Builds run at most three at a time (2 CPUs, 8 GB), interleaved by arm in the seeded build order.
- brewday lockfile sha256: 6f1064586c5772f3… (package-lock.json kept in the run folder as lockfile.json)
