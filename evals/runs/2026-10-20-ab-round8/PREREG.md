# Round 8 pre-registration (holdout round)

Written and committed before any build. After this commit nothing in the skill copy used here, `evals/round8/` or this file changes for this round.

**Question.** Rounds 5 to 7 sat at 83–84 while checks and guidance grew, and round 7 measured grader noise at about ±3 points per grader on an unchanged page. v0.9 changes how the builder works rather than adding rules of the same kind: before revising, the builder reads its own screenshots as a senior designer, the brief's buyer and founder, and the maintaining engineer, scores the ten criteria and redesigns the lowest one; it also adds fifteen measurable craft rules. This round tests v0.9 on four briefs nobody has seen, so it is both a test of the new method and a holdout for everything tuned so far.

**Targets, set now.** Primary: a mean skill-page total of at least 91 of 100 (the person's target). Pre-stated decision rule: if the mean is less than about 2 points above round 6's 84.25 (the size of grader noise in a 12-run mean), the self-review step is not shown to help and tuning stops; the skill is launched with the numbers it has.

- Skill commit: `925ee3e88efb0fd217d8e9811d466e363d19bcc6`; skill tree: `55b050c1403e32bde23ff49a3ea7024ddeb5caec`; copied read-only to `/home/claude/r8/skill`.
- Briefs: small-run zine printing (staplepress, with a price), nurse shift swaps (swaptide, two audiences), an API contract-testing GitHub App (contractcheck, with a price), church and charity bookkeeping (tallyhall, careful volunteer buyers). Rubric: rounds 3–7 criteria, anchors and hard fails; only the buyer cards are new. Hashes in `HASHES.txt`.
- Builders, graders and adjudicators: fresh `claude-opus-5-5` agents (same family; not a cross-family test).
- k = 1: 8 builds, 4 primary packets plus 1 retest packet (swaptide graded again with A and B swapped, to measure position bias), 15 grader runs. Seed `808082020`. Tie band 6.
- Reported: mean skill-page total against 91 and against round 6, per-criterion means, verdicts, hard fails, the retest's agreement, and the builders' own self-review scores against the blind graders' scores (are builders now calibrated?).
