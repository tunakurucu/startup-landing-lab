# Framework adapters

Load this when the page lives in an existing codebase or site builder. The design method is unchanged; only token placement, font and first-screen delivery, and the checked URL differ. Keep the host's stack, router and components ([implementation workflow](implementation-workflow.md), step 1).

## Rules for every stack

- **Map, don't fork.** Put the record's tokens into the project's existing token layer (CSS variables, Tailwind `@theme`, a theme file): font-family and size per type role, section spacing, content and measure widths, ground/ink/signal colours, one duration scale and one ease-out curve. Where a brand token exists, change its value or add a role beside it; never ship a parallel system.
- **First screen in the HTML.** The h1, promise, primary action and LCP element arrive in the server response, not from JavaScript. Script-managed content delays LCP; the LCP image must be in the HTML and never lazy-loaded [38]. Prove it: `curl -s <url> | grep -o '<h1[^>]*>[^<]*'` prints the headline.
- **Self-host fonts** as WOFF2 with `font-display: swap` [39][40]. The checker reads `@font-face` rules, from disk if it has to; only a font stylesheet on another origin leaves PF-03 `not_run`.
- **Reduced motion has two layers:** a `prefers-reduced-motion: reduce` rule [41] and the animation library's own setting. MO-01 tests both.
- **Check the production build over HTTP, never the dev server.** Dev tooling and unbundled code (Next.js shows a dev indicator by default [9]) pollute AX-07, PF-04, PF-05 and screenshots. Start it in the background, poll until `curl -sf <url>` succeeds, run the scripts, stop it. A page delivered from disk is checked from disk.

| Stack | Build and serve, then check `http://localhost:<port>/` |
|---|---|
| Next.js (server) | `npm run build && npx next start -p 3000` [8] |
| Next.js (`output: 'export'`) | `npm run build && npx serve out -l 3000` [5][37] |
| Astro | `npm run build && npx astro preview --port 4321` [27] |
| Vite + React | `npm run build && npx vite preview --port 4173` [29] |
| React Router framework | `npm run build && npx serve build/client -l 4173` [33][37] |
| Plain HTML | nothing; check the `index.html` path |
| Framer / Webflow | publish to staging; check that URL |

Then, from the skill folder: `scripts/render.sh <url> <page-dir>/shots` and `node scripts/check-page.mjs <url> > <page-dir>/check.json`.

## Next.js App Router

- **Tokens and fonts:** CSS variables in `app/globals.css` or Tailwind `@theme`; `next/font`'s `variable` option exposes each face to CSS [1]. Use `next/font/local` for licensed files. `next/font/google` downloads at build time and serves from your domain, so browsers never contact Google [1]. Prefer variable fonts; `display` defaults to `swap` [1].
- **First screen:** pages are Server Components, and Client Components are prerendered too [6]. Keep hero copy server-side and push `'use client'` down to the artifact. `dynamic(..., { ssr: false })` removes a component from prerendered HTML [7]; never above the fold. Give the LCP image `preload` or `fetchPriority="high"` (`priority` is deprecated since Next.js 16), plus `sizes` when responsive, or the browser assumes `100vw` [2].
- **Metadata:** in the root layout export `metadata` (`title`, `description`, `openGraph`, `icons`, `metadataBase`; relative OG URLs without the base fail the build) [3]. `themeColor` goes in the `viewport` export [4] and feeds CO-07.
- **Static or server:** a marketing page needs no server; `output: 'export'` writes `out/` but loses cookies, rewrites, redirects, headers, Server Actions and default image optimisation [5]. An app already on a server stays there.
- **Reduced motion:** CSS or Tailwind variants; with Motion, `<MotionConfig reducedMotion="user">` disables transform and layout animation [19].
- **Traps:** the scaffold's Geist, Geist Mono and "Create Next App" title [10]; replace or justify. Motion renders `initial` into server output [20], so `initial={{ opacity: 0 }}` on hero copy ships invisible text; use `initial={false}` so the copy is in the server HTML and visible before any script runs.

```tsx
// app/layout.tsx; add display.variable to <html>
const display = localFont({ src: './fonts/Display.woff2', variable: '--font-display' })
export const metadata = { metadataBase: new URL('https://example.com'), title: '…', description: '…', openGraph: { images: '/og.png' } }
export const viewport = { themeColor: '#0f1115' }
```

## Tailwind CSS v4 (any stack)

- **Tokens:** each `@theme` namespace generates utilities: `--font-*`, `--text-*`, `--spacing-*`, `--container-*`, `--radius-*`, `--ease-*` [11]. A `--text-*` size can carry its own line-height, tracking and weight [16]; values are plain CSS, so `clamp()` gives fluid display type. Use `@theme inline` when a token references another variable, such as a `next/font` one [11].
- **Layout:** `@container` with `@md:`-style variants sizes the artifact by its own width [13], useful at 768px.
- **Motion:** `motion-safe:` adds movement only when allowed; `motion-reduce:` undoes it [14]. `transition-all` sets `transition-property: all` and fails MO-03; `transition` and `transition-[transform,opacity]` name properties [15]. v4's `hover:` already sits behind `@media (hover: hover)` [14].
- **Traps:** default gray/slate ramps, `rounded-xl` and a shadow on every card. On a new project `--color-*: initial` removes the default palette [11][12]; with a brand system, override its tokens instead. Tailwind's own `--font-sans` is a system stack [11], so "Inter everywhere" comes from a scaffold or kit.

```css
@theme {
  --color-*: initial;
  --color-ground: oklch(0.97 0.01 95);
  --color-ink: oklch(0.22 0.02 260);
  --text-display: clamp(3.5rem, 6.5vw, 6.5rem);
  --text-display--line-height: 1;
  --ease-out: cubic-bezier(.2,.7,.2,1);
}
```

## shadcn/ui

Restyle through its semantic token pairs (`--background`, `--primary`, `--muted` …) and `--radius`, which derives the whole radius scale [17]; do not fork components. Watch the neutral, zinc or stone base colours [17], and the new-york-v4 Button sizes, `h-9` default and `h-10` large [18], both under the 44px floor (MB-02): add a size variant. Cards inside cards trip LY-06.

## Astro

- **Tokens:** a global CSS file imported by the layout; component `<style>` is scoped by default [28]. Tailwind v4 installs with `astro add tailwind` on Astro 5.2+ [28].
- **Fonts:** the Fonts API (`fonts` in `astro.config`, Astro 6+) serves files from your site; add `<Font cssVariable="…" preload />` to the head. `display` defaults to `swap` [23][24].
- **First screen:** pages prerender to static HTML by default [26], and components ship no JavaScript without a `client:*` directive [21]. Make the signature artifact the one island: `client:load` in the first screen, `client:visible` below. Never `client:only` for first-screen content; it skips server HTML [22]. `<Image priority>` sets eager loading, sync decoding and high fetch priority [25].
- **Reduced motion:** a media query in scoped styles plus the island library's setting.
- **Traps:** starter-theme hero and feature grids; one React island wrapping the whole page, which restores client rendering.

## Vite + React SPA

- **Problem:** the template's `index.html` holds an empty `<div id="root">` [31], so headline and LCP appear only after the bundle runs, hurting LCP [38] and previews from bots that read only HTML [3].
- **Fix:** prerender. React Router framework mode with `prerender` and `ssr: false` emits HTML for listed paths and a SPA fallback for the rest [32]; plain SPA mode prerenders only the root route [33]. Without a framework, see Vite's prerendering notes [30].
- **Routing:** history routing needs the host to send unknown URLs to `index.html` [33]; prerendered paths are real files. `HashRouter` keeps the route in the hash, which the server never sees [34], and competes with in-page `#section` anchors (AX-08, LY-06). Prefer history routing plus prerendering; use hash routing only on a host without rewrites and a page without anchor links.
- **Fonts:** Fontsource variable packages (`@fontsource-variable/<family>`), imported once; `swap` by default [35][36].
- **Traps:** the template's system-ui stack, purple accent and "Vite + React + TS" title [31].

```ts
// react-router.config.ts
export default { ssr: false, prerender: ['/'] }
```

## Plain HTML/CSS (default)

Tokens as custom properties on `:root`; `@font-face` with WOFF2 and `font-display: swap` [39][40]; preload the display font with `crossorigin`, which font preloads require [42]; `fetchpriority="high"` on the LCP image [38]; a `prefers-reduced-motion: reduce` block [41]. From disk, every automatic check runs.

## Framer and Webflow

The page lives in the builder's canvas, so deliver a **spec, not code**: the filled record, a token sheet (type roles in px with `clamp()` equivalents, spacing, widths, hex colours, durations, easing), copy deck, licensed fonts, SVG/PNG assets, and the artifact as a component.

- **Framer:** code components are React and render on canvas and published site [44]; build the artifact there. The Plugin API can create nodes, code files and custom code [45]; the Server API connects with an API key and publishes [43][46]. A person should still lay out the page from the spec.
- **Webflow:** its MCP server builds elements, styles, variables and components and edits custom code; some features need the Designer open with the Bridge App, it cannot create sites, and it manages only uploaded fonts [47]. Code components render in Shadow DOM, server-rendered by default, with site styles imported explicitly [48].
- **Check:** if built-in interactions fail MO-01, add a reduced-motion rule through site custom code. Anything you cannot inspect is `unverified`; status `DONE_WITH_CONCERNS`.
- **Traps:** marketplace templates; designing at the builder's default breakpoints instead of 390, 768 and 1440.

## Sources

All accessed 2026-10-20; "updated" is the page's own date where shown.

1. Next.js, Font Module. https://nextjs.org/docs/app/api-reference/components/font (accessed 2026-10-20; updated 2026-09-24)
2. Next.js, Image Component. https://nextjs.org/docs/app/api-reference/components/image (accessed 2026-10-20; updated 2026-09-28)
3. Next.js, generateMetadata. https://nextjs.org/docs/app/api-reference/functions/generate-metadata (accessed 2026-10-20; updated 2026-08-19)
4. Next.js, generateViewport. https://nextjs.org/docs/app/api-reference/functions/generate-viewport (accessed 2026-10-20; updated 2026-06-09)
5. Next.js, Static Exports. https://nextjs.org/docs/app/guides/static-exports (accessed 2026-10-20; updated 2026-08-09)
6. Next.js, Server and Client Components. https://nextjs.org/docs/app/getting-started/server-and-client-components (accessed 2026-10-20; updated 2026-10-05)
7. Next.js, Lazy Loading. https://nextjs.org/docs/app/guides/lazy-loading (accessed 2026-10-20; updated 2026-03-10)
8. Next.js, CLI. https://nextjs.org/docs/app/api-reference/cli/next (accessed 2026-10-20; updated 2026-10-15)
9. Next.js, devIndicators. https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators (accessed 2026-10-20; updated 2026-05-12)
10. create-next-app template layout. https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/app-tw/ts/app/layout.tsx (accessed 2026-10-20)
11. Tailwind CSS v4.3, Theme variables. https://tailwindcss.com/docs/theme (accessed 2026-10-20)
12. Tailwind CSS, Colors. https://tailwindcss.com/docs/colors (accessed 2026-10-20)
13. Tailwind CSS, Responsive design (container queries). https://tailwindcss.com/docs/responsive-design (accessed 2026-10-20)
14. Tailwind CSS, Hover, focus and other states. https://tailwindcss.com/docs/hover-focus-and-other-states (accessed 2026-10-20)
15. Tailwind CSS, transition-property. https://tailwindcss.com/docs/transition-property (accessed 2026-10-20)
16. Tailwind CSS, font-size. https://tailwindcss.com/docs/font-size (accessed 2026-10-20)
17. shadcn/ui, Theming. https://ui.shadcn.com/docs/theming (accessed 2026-10-20)
18. shadcn/ui, new-york-v4 Button source. https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/button.tsx (accessed 2026-10-20)
19. Motion, React accessibility. https://motion.dev/docs/react-accessibility (accessed 2026-10-20)
20. Motion, motion component. https://motion.dev/docs/react-motion-component (accessed 2026-10-20)
21. Astro, Islands architecture. https://docs.astro.build/en/concepts/islands/ (accessed 2026-10-20)
22. Astro, Template directives reference. https://docs.astro.build/en/reference/directives-reference/ (accessed 2026-10-20)
23. Astro, Using custom fonts. https://docs.astro.build/en/guides/fonts/ (accessed 2026-10-20)
24. Astro, Configuration reference (`fonts`, `font.display`). https://docs.astro.build/en/reference/configuration-reference/ (accessed 2026-10-20)
25. Astro, astro:assets reference (`priority`). https://docs.astro.build/en/reference/modules/astro-assets/ (accessed 2026-10-20)
26. Astro, Rendering modes. https://docs.astro.build/en/basics/rendering-modes/ (accessed 2026-10-20)
27. Astro, CLI reference. https://docs.astro.build/en/reference/cli-reference/ (accessed 2026-10-20)
28. Astro, Styles and CSS. https://docs.astro.build/en/guides/styling/ (accessed 2026-10-20)
29. Vite, Deploying a static site. https://vite.dev/guide/static-deploy (accessed 2026-10-20)
30. Vite, Server-Side Rendering. https://vite.dev/guide/ssr (accessed 2026-10-20)
31. create-vite react-ts template. https://raw.githubusercontent.com/vitejs/vite/main/packages/create-vite/template-react-ts/index.html and https://raw.githubusercontent.com/vitejs/vite/main/packages/create-vite/template-react-ts/src/index.css (accessed 2026-10-20)
32. React Router, Pre-Rendering. https://reactrouter.com/how-to/pre-rendering (accessed 2026-10-20)
33. React Router, Single Page App (SPA). https://reactrouter.com/how-to/spa (accessed 2026-10-20)
34. React Router, HashRouter. https://reactrouter.com/api/declarative-routers/HashRouter (accessed 2026-10-20)
35. Fontsource, Install. https://fontsource.org/docs/getting-started/install (accessed 2026-10-20)
36. Fontsource, Font display. https://fontsource.org/docs/getting-started/display (accessed 2026-10-20)
37. vercel/serve CLI source. https://raw.githubusercontent.com/vercel/serve/main/source/utilities/cli.ts (accessed 2026-10-20)
38. web.dev, Optimize Largest Contentful Paint. https://web.dev/articles/optimize-lcp (accessed 2026-10-20; updated 2025-03-31)
39. web.dev, Best practices for fonts. https://web.dev/articles/font-best-practices (accessed 2026-10-20; updated 2022-10-04)
40. MDN, font-display. https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display (accessed 2026-10-20; updated 2026-09-10)
41. MDN, prefers-reduced-motion. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (accessed 2026-10-20; updated 2026-06-10)
42. MDN, rel=preload. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload (accessed 2026-10-20; updated 2026-05-20)
43. Framer, Developers. https://framer.com/developers/ (accessed 2026-10-20)
44. Framer, Code components. https://www.framer.com/developers/components-introduction (accessed 2026-10-20)
45. Framer, Plugin API reference. https://www.framer.com/developers/reference (accessed 2026-10-20)
46. Framer, Server API reference. https://www.framer.com/developers/server-api-reference (accessed 2026-10-20)
47. Webflow, MCP server overview. https://developers.webflow.com/mcp/reference/overview.md (accessed 2026-10-20)
48. Webflow, Code components architecture. https://developers.webflow.com/code-components/component-architecture (accessed 2026-10-20)
