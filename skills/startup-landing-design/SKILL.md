---
name: startup-landing-design
description: Build, redesign, revise or audit a startup landing page that makes one ownable statement (a character with a job, an inhabited world, the product as a toy, an object, the trade's own notation, monumental type) while staying clear in five seconds, using dated evidence from real startup sites, positioning and copy rules, archetype recipes and 116 checks (85 automatic, 31 judged from screenshots, code or the record). Use for a new startup homepage, a landing-page redesign, a change to one section, a review of an existing site ("audit my homepage"), a request to make a page bold, memorable or less generic, or to avoid generic AI website patterns. Preserves existing brand and framework constraints.
license: MIT
metadata:
  version: "1.1"
---

# Startup landing design

References are dated evidence for decisions, not layouts to reproduce. Never invent customers, testimonials, metrics or endorsements.

**The first screen is a poster; the demo comes next.** One headline, one sentence, one or two buttons and one beautiful picture of the result, with room around them. The working demo starts in the second screen. Read [the first screen](references/first-screen.md) before writing any copy, and [the visual system](references/visual-system.md) before writing any CSS: in this project's tests, people preferred calm, spacious first screens even where AI graders rewarded dense ones.

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

Read [the first screen](references/first-screen.md) and [copy and positioning](references/copy-and-positioning.md). Draft the headline (eight words at most), the one sentence under it and one or two action labels from the positioning inputs. That's all the first screen holds besides the header and the picture: 60 words at most (HR-09), and less is better. Run the copy gate on every headline and section heading. The headline must be false or odd on the current alternative's page.

The headline may be the statement; then the **five-second line**, the one sentence, carries the facts. It names who the product is for and what kind of thing it is in plain words ("A payroll app for restaurants with tipped staff"), sits in the first screen at every width, and is quoted exactly in the record, where `verify-record` checks it against the text the checker read. A clever headline with the audience buried in body copy is the commonest way this skill's pages lost on clarity in blind tests. The test for the first screen: someone who saw it for five seconds can say the category, the outcome and the customer in their own words; repeating the headline back does not count.

## 3. Select reference jobs

Read [reference selection](references/reference-selection.md), [archetypes](references/design-archetypes.md), then the [casebook index](references/casebook.md) and only the casebook file for the family you are considering (read another if the casebook changes your mind). Record two references serving different jobs and one counterexample, each with the dated observed decision, its limit, the transferable principle and the treatment you will not borrow. Unaudited sites are leads, not evidence.

## 4. Make a statement, then choose before coding

Read [make a statement](references/statement.md). Every page makes one ownable statement; the only question is how loud. List 8–12 things only this product and its users own, run `node scripts/deal.mjs "<product>"` (add `--level quiet|bold|loud`; bold is the default, and "make it loud" or "make a statement" from the person means loud), choose one dealt move or take canon with the buyer-risk reason, write the idea sentence ("[a thing from the inventory] becomes [the move]") and prove it fails with the nearest competitor's name in it, then write the first-viewport contract at 1440 and 390. The contract names the hero picture (the finished result, marked `data-hero-visual`, at least 40% of the 1440 screen) and places the working signature artifact directly after the hero, within the first two screens (HR-07), with its control and its result on the same phone screen. Fill the record's Statement section before the hypothesis.

Read [page structure](references/page-structure.md), [composition and type](references/composition-and-type.md) and [the detector](references/default-detector.md). Keep the page structure easy to read; put the distinctiveness into the hero picture, the artifact, the voice and the type. Spend boldness in one place. Write the hypothesis: type roles and faces (check [observed type](references/type-observed.md) so a default face is a choice, not a reflex), composition, grid, ground and material, artifact, sections, interaction, motion. Name the category's obvious default and the obvious "anti-default", and avoid both. Sketch two hero variants that differ on one named axis, one of them the chosen statement at the chosen level; score each 0–10 for fit, identity, originality, composition and proof, and say what a 10 would need. Run the detector on the plan and resolve every block before writing code.

## 5. Build from one recipe

Start from the closest family's **recommended** numbers, then adjust to the product: [typographic technical](references/recipes/typographic-technical.md) · [expressive world](references/recipes/expressive-world.md) · [canvas first](references/recipes/canvas-first.md) · [functional entrance](references/recipes/functional-entrance.md) · [workflow theater](references/recipes/workflow-theater.md) · [immersive editorial](references/recipes/immersive-editorial.md) · [editorial platform](references/recipes/editorial-platform.md).

Read [implementation workflow](references/implementation-workflow.md), [product storytelling](references/product-storytelling.md) and [craft](references/craft.md) for how the best product sites layer motion, colour, depth and layout; in a framework or site builder, also [framework adapters](references/frameworks.md). Keep the existing stack. **Read [the visual system](references/visual-system.md) and [the build baseline](references/build-baseline.md) before writing any CSS.** The visual system holds the nav, buttons, cards, layout, spacing and motion that a person preferred in this project's bake-off; the baseline it holds the reset, the skip link, the menu, the signature-artifact rules and the sample audit, each one a failure graders found on this skill's own pages. Define type, spacing, width, surface and action tokens. Choose the signature artifact from [artifact patterns](references/artifact-patterns.md) (which controls worked and which failed); it lives in section two, and the hero picture shows its finished result. Build real product evidence, working navigation, a complete conversion path and an honest footer:
- If visitors should install, show the install command and a short code example; if they should read docs, link the docs. When the real API is unknown, write the example in its plausible shape, mark it once beside the code as an example, and list the names to confirm in the record.
- **Only use destinations the brief or the project supplies.** Never invent an email address, URL, phone number, calendar link or endpoint, not even on an `.example` domain. If the main action has no real destination yet, it does something real on the page and says what before the visitor commits: a form whose button reads "Save my request on this page" with "Nothing is sent until sign-up opens" beside it, a "Copy this note" button, or a link to the real next step whose label names that step. Never report success ("You're on the list") for something that did not happen. List each missing destination in the record for the client. In blind tests this was the most common hard fail for both arms: four of the skill's five confirmed hard fails in round 3 were invented addresses or a button that scrolled to a dead panel.
- A button never claims a destination it does not reach: "Book a call" opens a booking, "Read the docs" opens docs.
- **Each section is understood at a glance:** a heading of eight words or fewer that makes the point, short paragraphs, and one picture or well-made card that shows it. Count the pieces, not the words: a section with a diagram, a grid and a form reads as clutter at any word count. The whole page has five to seven sections.
- **The demo asks for one decision and shows one result** (MB-11: three controls at most). Line up every row of buttons (LY-09).
- **The signature artifact is one loop on one screen.** Mark it `data-signature`. On a phone the control and its result are visible together, every control changes something visible from the default state, controls are 44px, keyboard use never drops focus, and the sample label sits at its top. The checker operates every control and fails the page when feedback lands off-screen (MB-07).
- **When the product is not live, the sentence or the button says so in a few words** ("Join the pilot"), never as a separate status paragraph. **With no sign-up destination, do not collect emails**: offer a calendar reminder, a copy or a print of what the page made. Ship every face you name.
- **Say what an action does before the click, and add no claims the brief does not make** (features, platforms, prices, "the call is free"). Put useful guesses under *To confirm* in the record.
- Honesty sits next to the claim it qualifies (one label at the top of the demo, a caption under a number), never in a section about what the company lacks and never as captions crowding the first screen.
- Illustrative interfaces say so and do something locally. Do not build a backend to imitate a product that does not exist.
- Add a title, meta description and share card (og and twitter tags, favicon).

## 6. Contract motion and mobile

Read [motion and responsive](references/motion-and-responsive.md); when the page uses scroll-driven, pinned, 3D, video or hover motion, also read [motion patterns](references/motion-patterns.md). Plan one signature scroll moment (usually the hero picture handing over to the working demo) and one quiet entrance for the first screen, as [the first screen](references/first-screen.md) describes. For each animation record trigger, state change, purpose, static fallback, duration and easing. Copy is visible before any script runs. Reduced motion removes movement, scaling and zoom and hides nothing; short fades are fine. Anything that moves or updates by itself for more than five seconds gets a visible pause control. Recompose dense artifacts for phones instead of shrinking them.

## 7. Render, check, revise, verify

One continuous sequence. Do not stop partway, and do not skip a step because an earlier one could not run. Steps 5 and 6 are where the page goes from correct to good: budget real time for them.

1. **Render.** `scripts/render.sh <url-or-file> <page-dir>/shots` writes `<width>-top.png` and `<width>.png` at 1440, 768 and 390. If Playwright is missing, install it outside the project: `npm i --prefix /tmp/sld-deps playwright @axe-core/playwright && npx --prefix /tmp/sld-deps playwright install chromium`, then run the scripts with `SLD_DEPS=/tmp/sld-deps`. If the browser download fails, set `CHROME_PATH` to any installed Chrome or Chromium. If rendering still fails (exit 3), write `unavailable: "<decisive error line>"` in Render evidence, link the log, and continue.
2. **Look and break it.** Open every PNG; confirm it is not blank and is the width it claims. Operate the signature artifact through each of its states at 1440 and 390 and screenshot each: look for clipped labels, overflow and dead space in the first screen. Then fill the record's **artifact stress test**: empty input, a value out of range (5000 months, a negative price), nonsense, double clicks, reset, keyboard only, the phone, reduced motion, and the visitor's own input. Placeholders must not look like filled values; anything that plays shows where it is; anything that computes has bounds and says why it refused. A rich artifact that breaks on the third click scores below a plain one that works: graders operate everything.
3. **Check.** `node scripts/check-page.mjs <url-or-html> > <page-dir>/check.json` runs 85 automatic checks, including operating the signature artifact at 390, Escape on the menu, a long-input stress on every field and contrast at two widths. Check the page the way it will be delivered: from disk if it opens from disk, the production build over HTTP if it is served; never a dev server. Exit 3 means no browser ran (`"status": "unavailable"`); that is a gap, never a pass. Fix every block failure, rerun, and record the product reason for each warning you keep. Answer the other 31 in the record's Checklist; use `unverified` where the evidence could not be produced. Read [visual QA](references/visual-qa.md), including the removal, originality and house-style passes. Optional: if `npx --no-install impeccable --version` succeeds, run `npx --no-install impeccable detect <dir> --json`; record a tool you could not run as `not run: <exact error>`.
4. **Gate again.** Run the [detector](references/default-detector.md) on the screenshots and fill in Gate after render (`source only` if rendering failed).
5. **Review as the readers will.** Read [self-review](references/self-review.md) and [craft measures](references/craft-measures.md). From the screenshots and the operated artifact, read the page as a senior designer, as the brief's buyer and founder, and as the engineer who inherits it. Score the ten criteria 1–10 as the strictest of the three, and write what a 9 needs for every criterion under 8. Fill the record's Self-review table. Pages that pass every check still stall at about 84 of 100 in blind tests until this step makes the builder look at the result the way the reader will.
6. **Revise structurally, at least once.** Start from the lowest self-review score; name the weakest explanation or most template-like decision, change structure (section order, hero composition, artifact, density), not just styling, then rerender and record before/after paths and the new scores. Scores are capped by measured failures; `verify-record` enforces the caps. Re-score every criterion after the change. If any is still under 8 and you can name the fix, revise once more.
7. **Verify.** `node scripts/verify-record.mjs <page-dir>`; fix whatever it reports. End your reply with the record's status line: `DONE`, `DONE_WITH_CONCERNS: <what is unverified>` or `BLOCKED: "<quoted error>"`. Never call the page finished when the status is not `DONE`.

## Audit

Read [the audit lens](references/audit-lens.md). Copy [the audit template](assets/audit-report.md) to `AUDIT.md` next to a `shots/` folder.

1. Do step 1 from what the project and the page say; note the stage (pre-launch, early traction, scaling) and the market (consumer, small business, enterprise, developer), because advice that does not fit them is noise.
2. Render (7.1), look (7.2) and run the checker (7.3) on the page as visitors get it. Do not change the page.
3. Answer the audit lens questions from the screenshots, the checker output and what the project says about itself. Judge only what you can see; mark the rest unverified.
4. Write findings ordered by harm. Each finding cites evidence and says what changes for the visitor: "If you change X, visitors can Y, because Z." Group repeats. Flag anything deceptive (invented proof, false urgency, hidden cost) as P0, and never recommend it.
5. End with the three changes that matter most and what to keep. Offer to make the top change in Revise mode.
