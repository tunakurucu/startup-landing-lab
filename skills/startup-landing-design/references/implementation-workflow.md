# Implementation workflow

1. Read the host project's instructions and app entry points (the repository the page will live in, not this skill's source). Reuse its framework, route strategy and established components where useful. Do not replace its architecture to fit this skill. For Next.js, Tailwind, Astro, Vite, Framer or Webflow, read [framework adapters](frameworks.md) for where tokens and fonts go and how to serve the build.
2. Copy `assets/decision-record.md` to `DESIGN-RECORD.md` and fill it as you go. Keep each answer to a line or two and link log files rather than pasting them.
3. Write the first-screen copy from [copy and positioning](copy-and-positioning.md), then implement the real narrative in the order [page structure](page-structure.md) gives, before decorative effects. Use semantic headings and navigation; give every action a destination or observable result.
4. Build the signature artifact from original HTML/CSS/SVG or permitted assets. Prefer real text to screenshot text. Label sample interfaces. Use a static fallback if rich rendering fails.
5. Check assumptions: CTA makes the promised action possible; navigation works on narrow screens; controls aren't decorative; no fake quotes, financial claims, customers or signup success.
6. Make a production build and check that, never a dev server: dev overlays, unbundled code and dev-only errors change the screenshots and the checks. Serve it as [framework adapters](frameworks.md) describes; a page delivered from disk is checked from disk. Render at 1440×900, 768×1024 and 390×844 when available, and report any speed numbers from a local run as lab results, not field data. Store screenshots with the project's normal artifact practice.
7. Critique the result before delivery, then make and verify at least one structural revision. Report the strongest remaining weakness.

For an existing brand, the signature idea may be a better workflow presentation within its current system. Originality does not authorize discarding its accessibility conventions or identity.
