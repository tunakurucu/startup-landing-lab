# Round 5 deviations

- `.start` markers were written empty when the work folders were made, and `.end` markers were written by the operator when each builder's completion notice arrived, not by the builder. Start times come from the first transcript timestamp; wall-clock times can be a few minutes long on the end side.
- Grading began for P002 (liftplan) while three builds were still running, as in round 4, so the grade queue was not run strictly in order: jobs were started as their packets became ready. Graders saw only their own packet.
- After pre-registration, `check-page.mjs` in the repository changed (it skips an already-checked radio and download buttons when looking for dead controls). The builders used the frozen copy in `/home/claude/r5/skill`, unchanged.
