# Round 6 deviations

- `.start` markers were written empty when the work folders were made; `.end` markers were written by the operator when each completion notice arrived. Start times come from the first transcript timestamp.
- Packets were assembled and graded as soon as both pages of a brief were built, while other builds ran, so the grade queue was not run strictly in order.
- kycrefresh/with-r1 (W005) and rackwise/with-r1 (W001) copied open-licence font files (Lora, Inter, Liberation Mono) from the machine's system font folder into its `fonts/` folder, following the skill's build baseline ("ship the faces you name"). The builder prompt says not to read outside the working directory except the dependency path and the skill folder, so this reached outside the stated limit. tidewise/with-r1 (W002) read the same rule the other way and shipped no fonts. The no-skill arm had the same prompt and no such advice. Recorded here; the builds are graded as delivered.
