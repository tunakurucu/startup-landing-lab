# Cross-family grading check (rounds 3 and 4)

The same 16 primary packets from rounds 3 and 4 (12 from round 3, 4 from round 4) were re-graded by a different model family, OpenAI's GPT, with the same rubric, personas, instructions and blind A/B sides. `key.json` maps each X packet to its original round and packet; the pages and sides are byte-identical to the originals. The graders saw no Claude grades.

- X01–X05 (15 grader runs): the GPT model was not recorded.
- X06–X16 (33 grader runs): `gpt-6-luna`, recorded by the grader in each file (`grader_model`); its effort setting was not exposed.
- All 48 files pass `tally.py --validate`. Hard-fail flags raised by GPT graders were **not** adjudicated (no blind reproduction), so they are reported as raw flags only and do not enter the verdicts below.

## Result

| | GPT graders | Claude graders (original) |
| --- | --- | --- |
| Grader runs preferring the skill page | 40 of 48 | 45 of 48 |
| Mean total, skill page | 82.9 | 77.7 |
| Mean total, no-skill page | 74.2 | 67.0 |
| Mean margin (skill − no skill) | +8.8 | +10.7 |
| Packet verdicts by score and votes (no hard fails) | 13 wins, 2 ties, 1 loss | 14 wins, 2 ties |

- **Preference agreement:** GPT and Claude graders picked the same page in 41 of 48 runs; 32 of 33 for `gpt-6-luna`, 9 of 15 for the unrecorded model.
- **Direction holds, size is softer.** GPT scores both pages higher (about +5 to +7 points) and the gap between them a little smaller. The correlation of per-run margins is 0.46 overall (0.75 for X01–X05, 0.09 for X06–X16): the graders agree on *which* page is better far more than on *by how much*.
- **The one disagreement on a verdict:** X04 (handover, a redesign brief). GPT graders preferred the no-skill page 3 to 0 (margin −8) and flagged an unadjudicated HF3 on the skill page; Claude graders preferred the skill page 3 to 0 (+20).
- **Hard-fail flags by side (raw, GPT):** the no-skill pages drew more (HF2 fabricated proof on replay, pantry, agenda and envvars; HF3 on dockside, heater, stitch), and several flags match hard fails Claude adjudicators had confirmed. GPT also flagged the skill pages of cancellations and nightly (HF1) and of handover and escheat (HF3).

**What this does and does not show.** The skill's advantage is not an artefact of Claude grading Claude's work: a different model family, blind, prefers the skill page in 5 of 6 runs. It is still model graders on both sides; no human has graded these pages.

Reproduce: `python3 compare.py` (writes `rows.json`, prints the tables above).
