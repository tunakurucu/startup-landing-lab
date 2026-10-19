# Default-layout gate

Run this table on the written hypothesis **before code** and on desktop/mobile screenshots **after render**. A block finding must be revised or justified with the product reason in DESIGN-RECORD.md before implementation. A warning needs a documented decision. A centered hero can be right; the gate asks for a reason, not a ban. Grep and DOM checks are leads, not proofs.

| Signature | Detection | Severity | Correction |
| --- | --- | --- | --- |
| Centered claim over browser frame with no product reason | Screenshot: only artifact is decorative screenshot | Block | Make the actual operation or decision visible; record why centering fits if retained. |
| Three equal adjective cards | DOM/screenshot: repeated Fast / Secure / Simple claims | Block | Replace with one inspectable workflow and failure case. |
| Gradient blob as main hero evidence | Screenshot: glow carries no product information | Warn | Give it a semantic role or replace with original product artifact. |
| One sans, one weight everywhere | CSS/computed type roles | Warn | Choose display/body contrast and deliberate hierarchy; do not add a face solely to satisfy count. |
| Every section has same width and padding | Screenshot/layout inspect | Warn | Change measure or density where the reading task changes. |
| rounded-xl on every surface | Grep `rounded-xl` / computed radius | Warn | Define corner treatment by function and material. |
| Shadow is the only depth system | Screenshot/CSS inspect | Warn | Use rules, overlap, contrast and spacing where they clarify. |
| Unsupported trust logos or testimonials | DOM: trusted by / quotation without supplied source | Block | Remove or replace with honest product behavior. |
| Metrics without sources | DOM: percentages/counts without provenance | Block | Cite, label illustrative, or remove. |
| Hover-only behavior | Keyboard pass: no focus/activation equivalent | Block | Use native controls and focus-visible states. |
| Auto-advancing carousel | DOM/timer: content changes without user action | Warn | Prefer user control; add pause and stable focus if essential. |
| No reduced-motion rule | Stylesheet search for prefers-reduced-motion | Block | Remove movement but preserve state and content. |
| Scaled-down desktop on mobile | 390px screenshot: tiny UI/overflow | Block | Recompose artifact and hierarchy at narrow widths. |
| Control without destination/result | Click every button/link; `href="#"` | Block | Implement local result or remove the affordance. |
| Text still invisible after load and a scroll | `check-page.mjs` → `content_visible_after_scroll` | Block | A reveal that never fires hides the page. Animate position, not visibility, or render visible by default. |
| Headline tracking tighter than −0.04em | `check-page.mjs` → `display_tracking_floor` | Block | Loosen to −0.04em or wider; tight tracking reads as a template trick, and it hurts legibility. |
| Flat hierarchy | `check-page.mjs` → `type_hierarchy` (H1 and H2 under 1.25× body, or one weight) | Block | Make size and weight do the work; adding a second family is not a fix on its own. |
| Small tracked-caps label above every heading | Screenshot: the same tiny uppercase line over each section | Warn | Keep a label only where it carries information (a step number in a real sequence, a status). |
| Section numbers on content that is not a sequence | Screenshot: 01 / 02 / 03 on unrelated sections | Warn | Number only real steps; otherwise use the heading itself. |
| Gradient-filled headline text | CSS: `background-clip: text` with a gradient | Warn | Use a solid colour; let type and layout carry emphasis. |
| Coloured glow or halo as decoration | CSS: zero-offset coloured `box-shadow`, radial colour halo behind the hero | Warn | Remove, or tie it to a real state (focus, live, error). |
| Fake liveness | Pulsing dot, blinking cursor or marquee on content that is not live | Warn | Show liveness only for live data; otherwise keep it still. |
| Thick coloured stripe on one side of cards | CSS: one wide coloured border on cards or callouts | Warn | Use spacing, rules or a heading to group instead. |
| Only generic actions | DOM: the only CTAs read "Get started" / "Learn more" | Warn | Name the action the visitor takes ("Inspect a trace", "Deal me an idea"). |
| Cream ground with a serif display, chosen by default | Screenshot + CSS: off-white warm ground and serif H1 with no recorded reason | Warn | Choose the ground from where the product is used; keep cream-and-serif only with a product reason in the record. |
| Overused display face without a reason | CSS: Inter, Space Grotesk or Fraunces on the H1 | Warn | Pick a face that fits the product, or record why the common one does. |

Rows marked `check-page.mjs` are tested mechanically; the rest need you to look at the screenshots. Optional mechanical review: if `npx --no-install impeccable detect <files-or-dir> --json` works, exit 0 means clean, 2 means findings (record each accepted or rejected one by its rule ID, with reason and fix) and 1 means the scan did not run. Do not install or run its design-roll or any network-generating command. The detector may report false positives; human judgment still decides.
