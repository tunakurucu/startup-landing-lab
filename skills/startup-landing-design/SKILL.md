---
name: startup-landing-design
description: Build, redesign, revise or audit a startup landing page using dated evidence from real startup sites, positioning and copy rules, archetype recipes and 100 checks (68 automatic, 32 judged from screenshots, code or the record). Use for a new startup homepage, a landing-page redesign, a change to one section, a review of an existing site ("audit my homepage"), or a request to avoid generic AI website patterns. Preserves existing brand and framework constraints.
license: MIT
metadata:
  version: "0.4"
---

# Startup landing design

References are dated evidence for decisions, not layouts to reproduce. Never invent customers, testimonials, metrics or endorsements.

## 0. Pick the mode

| Mode | Use when | Do | Finish with |
| --- | --- | --- | --- |
| **Build** | A new page, or a redesign of most of one | Steps 1–7 | `DESIGN-RECORD.md` and `node scripts/verify-record.mjs <page-dir>` exiting 0 |
| **Revise** | A change to one section, the hero or the copy of an existing page | Step 1 briefly, then step 2 or 4 for that part, step 6, and step 7.1–7.3 before and after | `node scripts/compare-checks.mjs before.json after.json` exiting 0, plus before/after screenshots |
| **Audit** | Review a page without changing it | Step 1, then [the audit](#audit) | `AUDIT.md` from [the audit template](assets/audit-report.md) |

If the request is ambiguous, ask once which mode; when nobody answers, audit first, because it changes nothing.

In Build mode, only `OK DONE` from `verify-record` means the page was rendered and checked. If rendering or the checker could not run, the honest result is `DONE_WITH_CONCERNS` naming what is unverified, and you say so. Keep steps 1–4 short; most of the value is in building, rendering and revising.

## 1. Interpret the product

Read what the project already says about itself before judging or writing anything: README, docs, pricing, changelog, pitch or launch posts, existing pages and brand files. On a bare URL, use the site and its linked docs, and mark inferences as inferences.

Write the promise as **who / what changes / how**. Record the positioning inputs: the visitor's current alternative (including doing nothing), the one advantage only this product has, the category frame, the best-fit customer and who it is not for, users' own words (or "none yet"), and the biggest reason not to click. Name the conversion action and the first three visitor doubts, and give each doubt a real artifact that answers it. Ask questions only when the answer would change the archetype, the conversion action or the artifact: at most five, in one message, each with your recommended default. If nobody answers, proceed on the defaults and log them.

## 2. Write the first screen

Read [copy and positioning](references/copy-and-positioning.md). Draft the headline, subhead, primary action label and the line beside it from the positioning inputs. Run the copy gate on every headline and section heading. The headline must be false or odd on the current alternative's page.

## 3. Select reference jobs

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md), then the [casebook index](references/casebook.md) and only the casebook file for the family you are considering (read another if the casebook changes your mind). Record two references serving different jobs and one counterexample, each with the dated observed decision, its limit, the transferable principle and the treatment you will not borrow. Unaudited sites are leads, not evidence.

## 4. Choose before coding

Read [page structure](references/page-structure.md), [composition and type](references/composition-and-type.md) and [the detector](references/default-detector.md). Keep the page structure easy to read; put the distinctiveness into the artifact, the voice and the type. Write the hypothesis: type roles and faces (check [observed type](references/type-observed.md) so a default face is a choice, not a reflex), composition, grid, ground and material, artifact, sections, interaction, motion. Name the category's obvious default and the obvious "anti-default", and avoid both. Sketch two hero variants that differ on one named axis; score each 0–10 for fit, identity, originality, composition and proof, and say what a 10 would need. Run the detector on the plan and resolve every block before writing code.

## 5. Build from one recipe

Start from the closest family's **recommended** numbers, then adjust to the product: [typographic technical](references/recipes/typographic-technical.md) · [expressive world](references/recipes/expressive-world.md) · [canvas first](references/recipes/canvas-first.md) · [functional entrance](references/recipes/functional-entrance.md) · [workflow theater](references/recipes/workflow-theater.md) · [immersive editorial](references/recipes/immersive-editorial.md) · [editorial platform](references/recipes/editorial-platform.md).

Read [implementation workflow](references/implementation-workflow.md), [product storytelling](references/product-storytelling.md) and [craft](references/craft.md) for how the best product sites layer motion, colour, depth and layout; in a framework or site builder, also [framework adapters](references/frameworks.md). Keep the existing stack. Define type, spacing, width, surface and action tokens. Choose the hero artifact from [artifact patterns](references/artifact-patterns.md) (what real pages put in the first screen, and which controls failed). Build real product evidence, working navigation, a complete conversion path and an honest footer:
- If visitors should install, show the install command and a short code example; if they should read docs, link the docs. When the real API is unknown, write the example in its plausible shape, mark it once beside the code as an example, and list the names to confirm in the record.
- A button never claims a destination it does not reach. When a real link is missing, point to the closest real thing and list the link the client must supply.
- Honesty sits next to the claim it qualifies (a label on the sample, a caption under the number, a line beside the button), never in a section about what the company lacks.
- Illustrative interfaces say so and do something locally. Do not build a backend to imitate a product that does not exist.
- Add a title, meta description and share card (og and twitter tags, favicon).

## 6. Contract motion and mobile

Read [motion and responsive](references/motion-and-responsive.md); when the page uses scroll-driven, pinned, 3D, video or hover motion, also read [motion patterns](references/motion-patterns.md). For each animation record trigger, state change, purpose, static fallback, duration and easing. Copy is visible before any script runs. Reduced motion removes movement, scaling and zoom and hides nothing; short fades are fine. Anything that moves or updates by itself for more than five seconds gets a visible pause control. Recompose dense artifacts for phones instead of shrinking them.

## 7. Render, check, revise, verify

One continuous sequence. Do not stop partway, and do not skip a step because an earlier one could not run.

1. **Render.** `scripts/render.sh <url-or-file> <page-dir>/shots` writes `<width>-top.png` and `<width>.png` at 1440, 768 and 390. If Playwright is missing, install it outside the project: `npm i --prefix /tmp/sld-deps playwright @axe-core/playwright && npx --prefix /tmp/sld-deps playwright install chromium`, then run the scripts with `SLD_DEPS=/tmp/sld-deps`. If the browser download fails, set `CHROME_PATH` to any installed Chrome or Chromium. If rendering still fails (exit 3), write `unavailable: "<decisive error line>"` in Render evidence, link the log, and continue.
2. **Look.** Open every PNG; confirm it is not blank and is the width it claims. Operate the signature artifact through each of its states at 1440 and 390 and screenshot each: look for clipped labels, overflow and dead space in the first screen.
3. **Check.** `node scripts/check-page.mjs <url-or-html> > <page-dir>/check.json` runs 68 automatic checks. Check the page the way it will be delivered: from disk if it opens from disk, the production build over HTTP if it is served; never a dev server. Exit 3 means no browser ran (`"status": "unavailable"`); that is a gap, never a pass. Fix every block failure, rerun, and record the product reason for each warning you keep. Answer the other 32 in the record's Checklist; use `unverified` where the evidence could not be produced. Read [visual QA](references/visual-qa.md), including the removal, originality and house-style passes. Optional: if `npx --no-install impeccable --version` succeeds, run `npx --no-install impeccable detect <dir> --json`; record a tool you could not run as `not run: <exact error>`.
4. **Gate again.** Run the [detector](references/default-detector.md) on the screenshots and fill in Gate after render (`source only` if rendering failed).
5. **Revise structurally, at least once.** Name the weakest explanation or most template-like decision, change structure (section order, hero composition, artifact, density), not just styling, then rerender and record before/after paths and the new scores. Scores are capped by measured failures; `verify-record` enforces the caps. If the weakest point is still weak, revise again.
6. **Verify.** `node scripts/verify-record.mjs <page-dir>`; fix whatever it reports. End your reply with the record's status line: `DONE`, `DONE_WITH_CONCERNS: <what is unverified>` or `BLOCKED: "<quoted error>"`. Never call the page finished when the status is not `DONE`.

## Audit

Read [the audit lens](references/audit-lens.md). Copy [the audit template](assets/audit-report.md) to `AUDIT.md` next to a `shots/` folder.

1. Do step 1 from what the project and the page say; note the stage (pre-launch, early traction, scaling) and the market (consumer, small business, enterprise, developer), because advice that does not fit them is noise.
2. Render (7.1), look (7.2) and run the checker (7.3) on the page as visitors get it. Do not change the page.
3. Answer the audit lens questions from the screenshots, the checker output and what the project says about itself. Judge only what you can see; mark the rest unverified.
4. Write findings ordered by harm. Each finding cites evidence and says what changes for the visitor: "If you change X, visitors can Y, because Z." Group repeats. Flag anything deceptive (invented proof, false urgency, hidden cost) as P0, and never recommend it.
5. End with the three changes that matter most and what to keep. Offer to make the top change in Revise mode.
