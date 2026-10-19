---
name: startup-landing-design
description: Design and implement distinctive startup landing pages using dated startup evidence, a product-specific decision record, archetype recipes, pre-build default-layout detection, functional product artifacts, and rendered QA. Use for new startup homepages, landing-page redesigns, or requests to escape generic AI website patterns. Preserve existing brand and framework constraints.
license: MIT
metadata:
  version: "0.2"
---

# Startup landing design

Build a working page and save a filled `DESIGN-RECORD.md` beside it. Copy [the decision record](assets/decision-record.md) first. The skill is self-contained; optional review tools are never prerequisites. References are dated evidence for decisions, not layouts to reproduce.

## 1. Interpret the product

Inspect existing code, brand and content. Write the promise as **who / what changes / how**; name the conversion action and first three visitor doubts. Assign a real artifact to each doubt. Interview only when the answer would change the archetype, conversion action or artifact. Ask at most five questions, in one pass when possible; otherwise make explicit assumptions in the record. Never invent social proof.

## 2. Select reference jobs

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md) and relevant entries in the [casebook](references/casebook.md). Record two references serving different jobs and one counterexample, with the dated observed decision, inspection limit, transferable principle and treatment not borrowed. Unaudited candidates are leads, not evidence. If browsing is unavailable, mark present appearance unverified.

## 3. Choose before coding

Read [composition/type](references/composition-and-type.md) and [the detector](references/default-detector.md). Write a hypothesis for type, composition, grid, material, motif, artifact, sections, interaction and motion. Draw two genuinely different hero structures and compare how each answers a visitor doubt. Score fit, identity, originality, composition and product proof from 0–10 with a sentence of evidence for each; revise the weak choice before code.

Run the detector against the written hypothesis and log every block/warn finding in the decision record. Resolve each block before implementation; a justified centered hero is allowed. Record the selected variant and why it beat the other.

## 4. Use one recipe, then adapt it

Choose the closest decision family, read its **recommended**, not observed, numbers, and adjust them for the actual product:

- [Typographic technical](references/recipes/typographic-technical.md)
- [Expressive world](references/recipes/expressive-world.md)
- [Canvas first](references/recipes/canvas-first.md)
- [Functional entrance](references/recipes/functional-entrance.md)
- [Workflow theater](references/recipes/workflow-theater.md)
- [Immersive editorial](references/recipes/immersive-editorial.md)
- [Editorial platform](references/recipes/editorial-platform.md)

Read [implementation workflow](references/implementation-workflow.md) and [product storytelling](references/product-storytelling.md). Define coherent type/spacing/width/surface/action tokens. Preserve the existing stack. Build original functional product evidence, real navigation, a meaningful conversion action and an honest footer. Illustrative interfaces must say so and do something locally. Do not add a backend to fake a product.

## 5. Contract motion and mobile

Read [motion/responsive](references/motion-and-responsive.md). For every animation record trigger, state change, purpose, static fallback, duration and easing. Essential copy is visible before scripts. Respect keyboard and reduced motion. Recompose dense artifacts on mobile; don't scale down desktop chrome.

## 6. Render, gate and revise

Run `scripts/render.sh <url-or-file> <out-dir>` for full-page 1440×900, 768×1024 and 390×844 evidence. It detects agent-browser, otherwise uses an existing local Playwright CLI, otherwise exits with “rendering unavailable”; mark visual QA not run. Run `node scripts/check-page.mjs <url-or-html>` when Playwright is already in the project. It emits JSON and exits nonzero on one-H1, type, reduced-motion, overflow, names, links or heading-order failures. Do not install dependencies just to silence an unavailable check.

Read [visual QA](references/visual-qa.md) and [anti-patterns](references/anti-patterns.md). Click every primary control; check focus, contrast, empty states, 320px and 200% zoom. Run the [detector](references/default-detector.md) again on the rendered page. If `npx --no-install impeccable --version` works, run `npx --no-install impeccable detect <files-or-dir> --json`; record accepted/rejected findings by rule ID. If `web-design-guidelines` is installed in the agent environment, run its engineering review. These tools add checks but cannot replace the record or screenshot critique.

Identify the weakest explanation and most template-like decision. Make and rerender one **structural** revision, then record what changed and what remains weak. If rendering or a client capability is unavailable, state that limitation; a successful build is not visual verification.
