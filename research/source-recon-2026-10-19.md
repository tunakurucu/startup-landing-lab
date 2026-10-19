# San Francisco reference recon · 2026-10-19

These four candidates extend the research queue. I read their public first-party homepage content and existing company evidence, but the rendered browser timed out while opening new sites. This is **source recon, not a visual or interaction audit**. No record has been added to `sites.json`, and all four remain unassessed in the gallery. Headings and ordering below reflect the accessible page text; repeated or conditional components may appear in a different visual order.

## Figma · creative software · YC status not verified

**Evidence:** [homepage](https://www.figma.com/); [San Francisco address in SEC filing](https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm). The current page opens with “The full-stack creative canvas” and a Get started action. Its source then introduces an AI-native canvas, a shared product-development workspace, design/build routes, and precise creative tools. Image descriptions include a texture-values example, type brush strokes, vector editing, type on a path, and a node-based image workflow.

**Working hypothesis:** Product breadth is organized around a shared canvas and concrete creative outputs, rather than around a single feature. The image descriptions are evidence of subject matter, not of rendered scale, layout, palette, or motion. Inspect whether the different products remain legible as one story on a narrow screen.

**To verify in a rendered audit:** hero composition and type hierarchy at desktop/mobile; actual sequence and pacing; visual relationship between product examples; open the Products menu and at least one demonstration; keyboard focus, motion preference, footer, and asset loading.

## Cursor · developer tools · YC status not verified

**Evidence:** [homepage](https://cursor.com/); [San Francisco careers page](https://cursor.com/careers). The page states “Cursor is your coding agent for building ambitious software” and includes Get started. Its accessible text describes an interactive Desktop/CLI demonstration, followed by trust, agent workflow, autonomous work, other tools, customer accounts, and product/research links. The page's own description calls the demonstration interactive; that description does not establish that it worked in our browser.

**Working hypothesis:** A product interface might carry more explanatory weight than hero prose. The coded demonstration appears unusually content-heavy in the page text. A rendered inspection must establish which parts are actually visible, animated, usable, or decorative and whether sample tasks are clearly illustrative.

**To verify in a rendered audit:** desktop and mobile hero scale; operate Desktop/CLI switching and a task state; observe focus and reduced motion; scan full-page rhythm, customer proof, CTA recurrence, and footer. Do not infer real agent execution from sample UI.

## Notion · productivity · YC status not verified

**Evidence:** [homepage](https://www.notion.com/); [official about page with San Francisco base](https://www.notion.com/about). The current lead is “Where teams and agents Think together,” with Get Notion free and Request a demo. The accessible page groups its pitch into Capture, Find, and Automate, then gives specific work examples such as feedback triage, support tickets, security alerts, reporting, and developer tools. Customer accounts and numerical claims follow; those claims are the company's own statements, not independent findings here.

**Working hypothesis:** Three verbs create a compact mental model before the examples expand into different jobs. Check whether the repeated image and action modules distinguish outcomes clearly when rendered. YC usage claims on the page do not establish Notion's own YC membership.

**To verify in a rendered audit:** visual order, hero imagery, typography, spacing and color; run any playable hero state and feature controls; inspect examples, proof and footer on desktop/mobile; keyboard, contrast and reduced motion.

## Webflow · creative software · verified YC S13

**Evidence:** [homepage](https://webflow.com/); [official YC company listing](https://www.ycombinator.com/companies/webflow). The current page opens “Build for what’s next,” with Get started and Talk to Sales. Its accessible text offers role routes for marketing, design, engineering and agencies. It cycles through design, CMS, optimization, collaboration, AI, code, interactions and publishing capabilities, interrupted by customer stories and quantified outcomes. Some capability blocks repeat in extracted text, so a visual sequence cannot be inferred precisely from that repetition.

**Working hypothesis:** A broad platform can anchor navigation in audience jobs, then substantiate each job with a linked capability and customer account. The amount of content risks feeling like an inventory; inspect whether visual grouping, state changes and spacing make it navigable. Do not treat customer outcome figures as independently verified performance.

**To verify in a rendered audit:** desktop/mobile role selector and section order; click each role or representative tabs and record exact state change; assess hero, visual hierarchy, imagery, proof placement, navigation and footer; keyboard, motion and responsive behavior.

## Promotion rule

Only move these candidates into `sites.json` after a dated rendered inspection records the viewport, hero, type, visual system, full-page section sequence, at least one operated interaction, accessibility observations and specific limits. A desktop audit still leaves mobile, tablet and reduced-motion behavior unverified unless those are separately tested. This recon contains no screenshots, fonts, conversion claims or inferred interaction results.
