---
name: startup-landing-design
description: Design, build and verify a distinctive startup landing page from dated startup evidence, a product-specific decision record, archetype recipes and 100 checks (64 automatic, 36 judged from screenshots, code or the record) run before and after building. Use for a new startup homepage, a landing-page redesign, or a request to avoid generic AI website patterns. Preserves existing brand and framework constraints.
license: MIT
metadata:
  version: "0.3"
---

# Startup landing design

Build a working page and a filled `DESIGN-RECORD.md` beside it. Copy [the decision record](assets/decision-record.md) there first and fill it as you go. References are dated evidence for decisions, not layouts to reproduce.

**Done means `node scripts/verify-record.mjs <page-dir>` exits 0.** It fails on any empty field, missing screenshot, missing checker output, missing before/after evidence or any of the [100 checks](references/checklist.md) left unanswered. Never tell the user the page is finished before it passes. Spend at most a third of your effort on steps 1–3; most of the value is in building, rendering and revising.

## 1. Interpret the product

Inspect existing code, brand and content. Write the promise as **who / what changes / how**; name the conversion action and the first three visitor doubts, and give each doubt a real artifact that answers it. Ask questions only when the answer would change the archetype, the conversion action or the artifact: at most five, in one message, each with your recommended default. If nobody answers, or you are running unattended, proceed on the defaults and log them. Never invent social proof, metrics or customers.

## 2. Select reference jobs

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md) and the relevant [casebook](references/casebook.md) entries. Record two references serving different jobs and one counterexample, each with the dated observed decision, its limit, the transferable principle and the treatment you will not borrow. Unaudited sites are leads, not evidence.

## 3. Choose before coding

Read [composition and type](references/composition-and-type.md) and [the detector](references/default-detector.md). Write the hypothesis: type roles and faces, composition, grid, ground and material, motif, artifact, sections, interaction, motion. Sketch two genuinely different hero structures; score each 0–10 for product fit, identity, originality, composition and product proof, and say what a 10 would need. Run the detector on the written plan and resolve every block before writing code. A centred hero or a serif display is allowed when the record gives a product reason.

## 4. Build from one recipe

Pick the closest family and start from its **recommended** numbers, then adjust to the product: [typographic technical](references/recipes/typographic-technical.md) · [expressive world](references/recipes/expressive-world.md) · [canvas first](references/recipes/canvas-first.md) · [functional entrance](references/recipes/functional-entrance.md) · [workflow theater](references/recipes/workflow-theater.md) · [immersive editorial](references/recipes/immersive-editorial.md) · [editorial platform](references/recipes/editorial-platform.md).

Read [implementation workflow](references/implementation-workflow.md) and [product storytelling](references/product-storytelling.md). Define type, spacing, width, surface and action tokens. Keep the existing stack. Build real product evidence, working navigation, a meaningful conversion action and an honest footer. Illustrative interfaces say so and do something locally. No backend to fake a product.

## 5. Contract motion and mobile

Read [motion and responsive](references/motion-and-responsive.md). For each animation record trigger, state change, purpose, static fallback, duration and easing. Copy is visible before any script runs. Reduced motion removes movement and hides nothing. Recompose dense artifacts for phones instead of shrinking them.

## 6. Render, check, revise, verify

This is one continuous sequence. Do not stop partway, and do not skip a step because an earlier one could not run.

1. **Render.** Run `scripts/render.sh <url-or-file> <page-dir>/shots`. It uses agent-browser if present, otherwise Playwright. If neither exists, install Playwright in a scratch folder outside the project (`npm i playwright && npx playwright install chromium`). If rendering still fails, write `unavailable: "<exact error>"` in Render evidence and continue.
2. **Look.** Open every PNG. Confirm it is not blank and shows the hero at its width; recapture if not. Write what you checked in each.
3. **Check.** Run `node scripts/check-page.mjs <url-or-html> > <page-dir>/check.json`: 64 automatic checks. Fix every block failure, rerun, and record what you fixed and the product reason for each warning you keep. Then answer the other 36 in the record's Checklist from the screenshots, code and record. Read [visual QA](references/visual-qa.md). If `npx --no-install impeccable detect <dir> --json` works, exit 2 means findings to record by rule ID and exit 1 means "not run". Record optional tools that need the network as "not run: offline" when offline.
4. **Gate again.** Run the [detector](references/default-detector.md) on the screenshots (or on the source if rendering failed) and fill in Gate after render.
5. **Revise once, structurally.** Name the weakest explanation or most template-like decision, change structure (section order, hero composition, artifact, density), not just styling, then rerender and record before/after paths and the new score.
6. **Verify.** Run `node scripts/verify-record.mjs <page-dir>` and fix whatever it reports. End your reply with the status line from the record: `DONE`, `DONE_WITH_CONCERNS: <what is unverified>` or `BLOCKED: "<quoted error>"`.
