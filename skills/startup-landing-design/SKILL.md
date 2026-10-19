---
name: startup-landing-design
description: Design, build and verify a distinctive startup landing page from dated startup evidence, a product-specific decision record, archetype recipes and 100 checks (64 automatic, 36 judged from screenshots, code or the record) run before and after building. Use for a new startup homepage, a landing-page redesign, or a request to avoid generic AI website patterns. Preserves existing brand and framework constraints.
license: MIT
metadata:
  version: "0.3"
---

# Startup landing design

Build a working page and a filled `DESIGN-RECORD.md` beside it. Copy [the decision record](assets/decision-record.md) there first and fill it as you go. References are dated evidence for decisions, not layouts to reproduce.

**Finish with `node scripts/verify-record.mjs <page-dir>` exiting 0.** It fails on empty fields, empty decision-table cells, wrong-width or blank screenshots, missing checker output, missing before/after evidence, any of the [100 checks](references/checklist.md) left unanswered, or a status the evidence does not support. Exit 0 means the record is complete and honest. Only `OK DONE` means the page was also rendered and checked; if rendering or the checker could not run, the honest result is `DONE_WITH_CONCERNS` naming what is unverified, and you say so to the user. Keep steps 1–3 to the files named below and the record's first six sections; most of the value is in building, rendering and revising.

## 1. Interpret the product

Inspect existing code, brand and content. Write the promise as **who / what changes / how**; name the conversion action and the first three visitor doubts, and give each doubt a real artifact that answers it. Ask questions only when the answer would change the archetype, the conversion action or the artifact: at most five, in one message, each with your recommended default. If nobody answers, or you are running unattended, proceed on the defaults and log them. Never invent social proof, metrics or customers.

## 2. Select reference jobs

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md) then the [casebook index](references/casebook.md) and only the casebook file for the family you are considering. Record two references serving different jobs and one counterexample, each with the dated observed decision, its limit, the transferable principle and the treatment you will not borrow. Unaudited sites are leads, not evidence. If the casebook changes your choice of family, read that family's file too.

## 3. Choose before coding

Read [composition and type](references/composition-and-type.md) and [the detector](references/default-detector.md). Write the hypothesis: type roles and faces, composition, grid, ground and material, motif, artifact, sections, interaction, motion. Sketch two genuinely different hero structures; score each 0–10 for product fit, identity, originality, composition and product proof, and say what a 10 would need. Run the detector on the written plan and resolve every block before writing code. A centred hero or a serif display is allowed when the record gives a product reason.

## 4. Build from one recipe

Pick the closest family and start from its **recommended** numbers, then adjust to the product: [typographic technical](references/recipes/typographic-technical.md) · [expressive world](references/recipes/expressive-world.md) · [canvas first](references/recipes/canvas-first.md) · [functional entrance](references/recipes/functional-entrance.md) · [workflow theater](references/recipes/workflow-theater.md) · [immersive editorial](references/recipes/immersive-editorial.md) · [editorial platform](references/recipes/editorial-platform.md).

Read [implementation workflow](references/implementation-workflow.md) and [product storytelling](references/product-storytelling.md). Define type, spacing, width, surface and action tokens. Keep the existing stack. Build real product evidence, working navigation, a meaningful conversion action and an honest footer. Illustrative interfaces say so and do something locally. Make the conversion path complete: if visitors should install, show the install command and a short code example; if they should read docs, give them a docs link. When the brief does not supply the real API, write the example in the product's plausible shape and mark it `illustrative API` beside the code, rather than leaving code out. A button never claims a destination it does not reach (no "docs" that only scrolls the page); when a real link is missing, point to the closest real thing and list the link the client must supply in the record. Honesty sits next to the claim it qualifies (a label on the sample, a caption under the number, a line beside the button); do not add a section listing what the company lacks or has not decided. Do not build a backend to imitate a product that does not exist; a backend the real product needs is fine.

## 5. Contract motion and mobile

Read [motion and responsive](references/motion-and-responsive.md). For each animation record trigger, state change, purpose, static fallback, duration and easing. Copy is visible before any script runs. Reduced motion removes movement and hides nothing. Recompose dense artifacts for phones instead of shrinking them.

## 6. Render, check, revise, verify

This is one continuous sequence. Do not stop partway, and do not skip a step because an earlier one could not run.

1. **Render.** Run `scripts/render.sh <url-or-file> <page-dir>/shots`; it writes `<width>-top.png` and `<width>.png` at 1440, 768 and 390. If Playwright is missing, install it outside the project: `npm i --prefix /tmp/sld-deps playwright @axe-core/playwright && npx --prefix /tmp/sld-deps playwright install chromium`, then run the scripts with `SLD_DEPS=/tmp/sld-deps`. If the browser download fails, set `CHROME_PATH` to any installed Chrome or Chromium. If rendering still fails (exit 3), write `unavailable: "<decisive error line>"` in Render evidence, link the log, and continue.
2. **Look.** Open every PNG. Confirm it is not blank and shows the hero at its width; recapture if not. Then operate the signature artifact through each of its states at 1440 and 390 and screenshot each one: look for clipped labels, overflow, and dead space in the first screen. Write what you checked in each.
3. **Check.** Run `node scripts/check-page.mjs <url-or-html> > <page-dir>/check.json`: 64 automatic checks. Exit 3 means no browser ran and the JSON says `"status": "unavailable"`; that is a gap, never a pass. Fix every block failure, rerun, and record what you fixed and the product reason for each warning you keep. Then answer the other 36 in the record's Checklist from the screenshots, code and record; use `unverified` where the evidence could not be produced. Read [visual QA](references/visual-qa.md), including its removal and originality passes. Optional: if `npx --no-install impeccable --version` succeeds, run `npx --no-install impeccable detect <dir> --json` (exit 2 means findings to record by rule ID). Record any optional tool you could not run as `not run: <exact error>`.
4. **Gate again.** Run the [detector](references/default-detector.md) on the screenshots and fill in Gate after render. If rendering failed, run it on the source and mark the gate `source only`.
5. **Revise structurally, at least once.** Name the weakest explanation or most template-like decision, change structure (section order, hero composition, artifact, density), not just styling, then rerender and record before/after paths and the new scores. One revision is the minimum, not the bar: if the weakest point is still weak, revise again.
6. **Verify.** Run `node scripts/verify-record.mjs <page-dir>` and fix whatever it reports. End your reply with the status line from the record: `DONE`, `DONE_WITH_CONCERNS: <what is unverified>` or `BLOCKED: "<quoted error>"`. Never call the page finished or verified when the status is not `DONE`.
