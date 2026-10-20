# Round 4 pre-registration

Written and committed before any build. After this commit nothing in the skill copy used here, `evals/round4/` or this file changes for this round.

Purpose: test skill v0.5, which adds the statement layer (subject inventory, dealt moves, idea sentence with a competitor test, statement levels, first-viewport contract), the five-second line checked against the rendered first screen, and the artifact stress test. The four briefs are new and were written to pull different statement levels: a consumer app (pantry), a vertical B2B tool with a physical setting (dockside), an open-source developer tool (replay) and a regulated finance product (escheat).

- Skill commit: `80d59dc92c00a56b517e3d50b38795fa4dd3ecc2`; skill tree: `fb983be0eca54278a1a62ce8480720732cb0b3fc`; copied read-only to `/home/claude/r4/skill`.
- Kit hashes: `HASHES.txt` beside this file. Rubric: round 3's grading.md with the same criteria, anchors and hard fails; only the buyer cards are new.
- Builders: fresh agents, model id `claude-fable-5-1`, same prompts as round 3 except the paths. Graders and adjudicators: fresh agents, model id `claude-opus-5-5`.
- k = 1: 8 builds, 4 primary packets, 12 grader runs (designer, buyer, engineer per packet). Seed `919235640`.
- Tie band 6, as in round 3.
- What this round can show: with four briefs, no result is statistically significant (four wins of four gives p = 0.125 under the sign test). It is reported descriptively: brief verdicts, totals per persona, per-criterion differences, hard fails per arm, and specifically clarity, interaction, distinctiveness and first_screen, the criteria v0.5 targets. Round 3 (skill v0.4) is a separate, larger round and is reported separately.
- Builds run at most three at a time alongside round 3 grading; packets are assembled and graded the same way as round 3.
