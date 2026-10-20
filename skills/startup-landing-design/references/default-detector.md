# Default-layout gate

Run this table on the written hypothesis **before code** and on desktop/mobile screenshots **after render**. A block finding must be revised or justified with the product reason in DESIGN-RECORD.md before implementation. A warning needs a documented decision. A centred hero with the product below it is the most common, easiest-to-read form ([page structure](page-structure.md)); the gate asks whether the visual is the product, not where it sits. Grep and DOM checks are leads, not proofs.

| Signature | Detection | Severity | Correction |
| --- | --- | --- | --- |
| Plan matches the category default or the obvious anti-default | Record, before code: write what a generic build for this category looks like, then what a build trying to avoid that looks like (for example B2B software → cream ground and editorial serif; fintech → dark terminal style) | Block (PS-08) | Change composition, type, ground or artifact until the plan matches neither; record both defaults. |
| Hero visual is decoration | Screenshot: the hero's only visual carries no product information (stock image, abstract shape, placeholder UI) | Block (PS-03) | Make the actual operation, output or decision visible. |
| Centred headline over a framed screenshot | Screenshot: centred h1 with a framed product image below | Warn | Keep it when the frame shows the real product or its output, and record the reason. If the frame is decoration, the row above applies. |
| Three equal adjective cards | DOM/screenshot: repeated Fast / Secure / Simple claims | Block | Replace with one inspectable workflow and failure case. |
| Gradient blob as main hero evidence | Screenshot: glow carries no product information | Warn | Give it a semantic role or replace with original product artifact. |
| One sans, one weight everywhere | CSS/computed type roles | Warn | Choose display/body contrast and deliberate hierarchy; do not add a face solely to satisfy count. |
| Every section has same width and padding | Screenshot/layout inspect | Warn | Change measure or density where the reading task changes. |
| rounded-xl on every surface | Grep `rounded-xl` / computed radius | Warn | Define corner treatment by function and material. |
| Shadow is the only depth system | Screenshot/CSS inspect | Warn | Use rules, overlap, contrast and spacing where they clarify. |
| Unsupported trust logos or testimonials | DOM: "trusted by" or a quotation without a supplied source (HP-01) | Block | Remove, or use real proof the client supplied, attributed with name, role and company. |
| Metrics without sources | DOM: percentages/counts without provenance (HP-02) | Block | Cite, label illustrative, or remove. |
| Hover-only behaviour | Keyboard pass: no focus/activation equivalent | Block | Use native controls and focus-visible states. |
| Auto-advancing carousel or rotating text | DOM/timer: content changes without user action (MO-05) | Warn; **Block** when it holds the h1 or primary action, or moves past 5 s without a pause control | Use static sections. A carousel that stays changes only on request, stops after any interaction and never auto-rotates on phones. |
| No reduced-motion rule | Stylesheet search for prefers-reduced-motion (MO-01) | Block | Remove movement, scaling and zoom; keep every state and all content; short fades may stay. |
| Scaled-down desktop on mobile | 390px screenshot: tiny UI/overflow (MB-06) | Block | Recompose artifact and hierarchy at narrow widths. |
| Control without destination/result | Click every button/link; `href="#"` (AX-08, HP-04) | Block | Implement local result or remove the affordance. |
| Text still invisible after load and a scroll | `check-page.mjs` → MO-02 | Block | A reveal that never fires hides the page. Animate position, not visibility, or render visible by default. |
| Headline tracking tighter than −0.04em | `check-page.mjs` → TY-04 | Block | Loosen to −0.04em or wider; tight tracking reads as a template trick, and it hurts legibility. |
| Flat hierarchy | `check-page.mjs` → TY-03 (h1 or first h2 under 1.25× body) | Block | Make size and weight do the work; adding a second family is not a fix on its own. |
| Small tracked-caps label above every heading | Screenshot: the same tiny uppercase line over each section (TT-03) | Warn | Keep a label only where it carries information (a step number in a real sequence, a status). |
| Section numbers on content that is not a sequence | Screenshot: 01 / 02 / 03 on unrelated sections | Warn | Number only real steps; otherwise use the heading itself. |
| Gradient-filled headline text | CSS: `background-clip: text` with a gradient (CO-02) | Warn | Use a solid colour; let type and layout carry emphasis. |
| Coloured glow or halo as decoration | CSS: zero-offset coloured `box-shadow`, radial colour halo behind the hero (CO-02) | Warn | Remove, or tie it to a real state (focus, live, error). |
| Fake liveness | Pulsing dot, blinking cursor or marquee on content that is not live | Warn; **Block** when it moves past 5 s without a pause control (MO-05) | Show liveness only for live data; otherwise keep it still. |
| Thick coloured stripe repeated on cards | CSS: the same wide coloured border on cards or callouts (TT-04) | Warn | Use spacing, rules or a heading to group. A stripe that marks state (current nav item, active step, alert type) is fine. |
| Only destination-free actions | DOM: the primary label is "Get started", "Learn more", "Start now" or "Try it now" alone (HR-02) | Warn | Name the outcome with a verb in 2–5 words ("Inspect a trace", "Install the CLI"). Labels that name their destination, such as "Book a demo" or "Join the waitlist", pass. |
| Cream ground with a serif display, chosen by default | Screenshot + CSS: off-white warm ground and serif H1 with no recorded reason (CO-03) | Warn | Choose the ground from where the product is used; keep cream-and-serif only with a product reason in the record. |
| Overused display face without a reason | CSS: Inter, Space Grotesk, Fraunces, Roboto, Poppins or Montserrat on the H1 (TY-10) | Warn | Pick a face that fits the product, or record why the common one does. |

Check IDs in brackets point to [the checklist](checklist.md); rows marked `check-page.mjs` are tested mechanically, and the rest need you to look at the screenshots or the record. The anti-default row adapts the two-step reflex test from the auteur skill (MIT). Optional mechanical review: if `npx --no-install impeccable detect <files-or-dir> --json` works, exit 0 means clean, 2 means findings (record each accepted or rejected one by its rule ID, with reason and fix) and 1 means the scan did not run. Do not install or run its design-roll or any network-generating command. The detector may report false positives; human judgment still decides.
