# Round 5 pre-registration

Written and committed before any build. After this commit nothing in the skill copy used here, `evals/round5/` or this file changes for this round.

Purpose: test skill v0.6 against no skill on four new briefs. v0.6 adds a build baseline (reset, skip link, menu, sample audit, claims the brief does not make) and eleven automatic checks that operate the signature artifact at 390 px (feedback in view, no dead controls, focus kept), place it in the first screen, press Escape on the menu, paste a 200-character string into every field, and check weekdays, builder notes, font fallback and contrast at 1440. Most of these come from the problems graders listed on the skill's own pages in rounds 3 and 4. The target set before this round: a mean skill-page total above 87 of 100 (round 4: 79.2).

- Skill commit: `51cd3387e0f92ab4d740691a75da4b01a42dd1c8`; skill tree: `0d5297f0a8449cfdde88f7fcd6b44d5c6ecce34f`; copied read-only to `/home/claude/r5/skill`.
- Briefs: a prosumer craft app (kiln), a construction safety tool (liftplan), an open-source CLI (driftcheck) and a consumer product for a grieving executor with no sign-up destination (executor).
- Kit hashes: `HASHES.txt` beside this file. Rubric: the round 3 criteria, anchors and hard fails; only the buyer cards are new.
- Builders: fresh agents, model id `claude-fable-5-1`, the round 4 prompts with paths changed. Graders and adjudicators: fresh agents, model id `claude-opus-5-5`.
- k = 1: 8 builds, 4 primary packets, 12 grader runs (designer, buyer, engineer). Seed `505061020`. Tie band 6.
- Reported descriptively, as in round 4: four briefs cannot reach significance (four of four gives p = 0.125). Report brief verdicts, mean totals per arm, per-criterion means, hard fails per arm, and whether the 87 target was met. A miss is reported as a miss.
