---
name: startup-landing-design
description: Design and implement distinctive startup landing pages using an evidence-labelled reference casebook, product-specific art direction, functional product demonstrations, and rendered QA. Use for a new startup homepage, a landing-page redesign, or a request to avoid generic AI website patterns. Preserve existing brand and framework constraints.
---

# Startup landing design

Produce a working page and a small decision record. Use references as evidence for decisions, never as layouts to reproduce. This is a research-backed instruction skill, not a trained model.

## 1. Establish the evaluation task

Inspect the existing code, content and brand constraints. Identify audience, category, business model, buying risk, conversion action and what visitors need to understand before acting. State consequential assumptions briefly; ask only for missing facts that change the product or action. Do not invent social proof.

Write a one-sentence promise containing **who, what changes, and how**. List the first three visitor doubts. Assign each doubt a concrete artifact that could answer it: code input/output, workflow trace, editable example, real policy, or sourced case study. Do not start with a component checklist.

## 2. Select references by explanatory job

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md) and the relevant entries in the [casebook](references/casebook.md). Choose two useful references with different jobs and one counterexample. For each, record:

- The observed decision, its inspection limit, and the principle to transfer.
- Why it helps this product's audience.
- The branded treatment and assumptions that must not be borrowed.

Treat unaudited candidates as research leads, not design evidence. If browsing is unavailable, use the dated casebook and disclose that current appearance is unverified. Never infer motion from a screenshot.

## 3. Commit to an art-direction hypothesis

Read [composition and typography](references/composition-and-type.md). Write a compact hypothesis covering type personality, composition, grid, color/material, visual motif, product artifact, section sequence, primary interaction and motion purpose. Tie each decision to the visitor's evaluation task.

Choose a signature idea that would survive a palette change. Compare two possible hero structures, then implement the better fit. Ask: if the brand name disappeared, would this still read as this product? If the only differences are colors, gradients and corner radii, revise the composition or explanatory artifact.

## 4. Build the narrative and functional artifact

Read [implementation workflow](references/implementation-workflow.md) and [product storytelling](references/product-storytelling.md). Define tokens for type, spacing, width, surface, border, action and state. Preserve the project's stack. Avoid a mandatory universal section order.

Implement the hero, at least three meaningful supporting sections when appropriate, working navigation, primary action and footer. Prefer native HTML controls. An illustrative demo must say it is illustrative and have meaningful local behavior. Do not render fake tabs, search, playback, pricing calculators or signup success. Do not add a backend merely to make a fictional brand look real.

## 5. Add purposeful motion and responsive behavior

Read [motion and responsive design](references/motion-and-responsive.md). Name the trigger, state change, user purpose and static fallback for each animation. Keep essential copy visible before scripts or animations complete. Support reduced motion and keyboard use. Replace dense product diagrams with legible mobile narratives instead of shrinking them until unreadable.

## 6. Critique, revise and verify

Read [visual QA](references/visual-qa.md) and [anti-patterns](references/anti-patterns.md). Render desktop, tablet and mobile. Click all primary controls. Check focus, overflow, heading order, contrast and reduced motion. Inspect actual screenshots; compilation alone is insufficient.

Perform one substantive critique and revision. Change a weak hierarchy, interaction, narrative gap or mobile layout, not merely a shadow. Record the original issue, actual change, and verification result. If rendering is unavailable, state that the visual result is unverified.

Deliver the implementation, design rationale, tested behavior and remaining limitations. For multiple demos, compare hero, type, sections, color, product presentation and interaction; revise pairs that share the same underlying template.
