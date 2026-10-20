# Round 5 results (tie band ±6 of 300)

| Brief | Pair | Verdict (skill page) | Why | Votes for skill page | S with | S without | Δ | Hard fails with / without |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| driftcheck | driftcheck-r1 | win | majority preference and summed score agree | 3/3 | 255 | 214 | +41 | - / - |
| executor | executor-r1 | win | other page hard-failed | 3/3 | 247 | 187 | +60 | - / HF1 |
| kiln | kiln-r1 | win | majority preference and summed score agree | 3/3 | 249 | 214 | +35 | - / - |
| liftplan | liftplan-r1 | win | majority preference and summed score agree | 3/3 | 245 | 221 | +24 | - / - |

**Primary (brief level):** 4 wins, 0 ties, 0 losses; exact two-sided sign test on 4 untied briefs, p = 0.1250. Ties counted as losses: p = 0.1250.
**Secondary (pair level, not independent):** 4 W / 0 T / 0 L, p = 0.1250.

Sensitivity (brief level): band_0: 4W/0T/0L p=0.1250; band_12: 4W/0T/0L p=0.1250

Retest agreement: 0 of 0 pairs got the same verdict when re-graded with A/B swapped.
Same-arm pairs: 0 of 0 produced a non-tie verdict between two builds of the same arm.

| Persona | Prefers skill page | Prefers other | Mean /100 with | Mean /100 without | Mean /80 (round 1-2 criteria) with | without |
| --- | --- | --- | --- | --- | --- | --- |
| designer | 4 | 0 | 84.5 | 69.75 | 67.5 | 55.5 |
| buyer | 4 | 0 | 82 | 72 | 65.5 | 56.75 |
| engineer | 4 | 0 | 82.5 | 67.25 | 66.25 | 52.75 |

Mean per-criterion difference (with − without, all personas, primary pairs): clarity +1, fit +0.67, distinctiveness +0.5, proof +2, craft +0.92, mobile +1.42, honesty +2.42, interaction +2.5, copy +0, first_screen +1.92

Runs with a confirmed hard fail: with none, without {'HF1': 1}.

## Against the pre-registered target

Target: a mean skill-page total above 87 of 100. **Not met: 83.0** (12 grader totals, range 78–87; one reached 87). No-skill pages: 69.7 (58–75). Round 4 skill pages: 79.2.

| Builder model | Briefs | Mean with | Mean without |
| --- | --- | --- | --- |
| claude-fable-5-1 (as pre-registered) | liftplan, executor | 82.0 | 68.0 |
| claude-opus-5-5 (rebuilt, both arms) | kiln, driftcheck | 84.0 | 71.3 |

Per-criterion means, skill pages (1–10): clarity 8.75, proof 8.83, honesty 8.75, interaction 8.75, first_screen 8.42, copy 8.17, craft 8.0, mobile 7.92, fit 7.83, distinctiveness 7.58. The lowest four are where v0.7 aims: the paying buyer's path (fit), the artifact's length and result placement on phones (mobile), and the page frame and drawn pictures of the subject (distinctiveness, craft).
