# Round 6 pre-registration

Written and committed before any build. After this commit nothing in the skill copy used here, `evals/round6/` or this file changes for this round.

Purpose: test skill v0.7 against no skill on four new briefs. v0.7 comes from round 5's grader notes: the paying audience gets its own small artifact and the next step is described beside the main action; the artifact is capped at two phone screens and focus may not hide under sticky elements tabbing either way (both blocks); faces must be shipped with the page; the page is checked without JavaScript and as delivered; a product that is not live says so in the first screen and does not collect emails it cannot send; demo verdicts stay advisory where the brief limits what the product decides; and the subject's world is drawn. Target, carried over: a mean skill-page total above 87 of 100 (round 5: 83.0).

- Skill commit: `2492853464b7da9c04da0dd7b4596854c2fde96e`; skill tree: `a13c2ef9723582addf1eec237b0dac436b118021`; copied read-only to `/home/claude/r6/skill`.
- Briefs: a consumer sea-swimming app (tidewise), lab freezer inventory (rackwise), an open-source CLI (flagsweep) and KYC reviews for credit unions (kycrefresh).
- Builders: fresh agents on `claude-opus-5-5` for every build (the person asked for no further Fable runs; round 5's Opus pairs are the comparison). Graders and adjudicators: fresh agents on `claude-opus-5-5`. Builders and graders are the same model family in this round, so it is not a cross-family test.
- k = 1: 8 builds, 4 primary packets, 12 grader runs. Seed `606062020`. Tie band 6. Kit hashes in `HASHES.txt`.
- Reported descriptively: brief verdicts, mean totals per arm, per-criterion means, hard fails, and whether the 87 target was met.
