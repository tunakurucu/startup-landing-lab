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
| Control without destination/result | Click every button/link; `href="#" ` | Block | Implement local result or remove the affordance. |

Optional mechanical review: if the project's installed `impeccable` CLI is already available, run `npx --no-install impeccable detect <files-or-dir> --json`. Record each accepted or rejected finding with its rule ID, reason and fix. Do not install or run its design-roll or any network-generating command. The detector may report false positives; human judgment still decides.
