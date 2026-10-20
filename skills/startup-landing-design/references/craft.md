# Craft: how the best product sites are built

How the teams at Linear, Vercel, Stripe, GitHub, Figma and Granola, and practitioners such as Rauno Freiberg, Sara Soueidan and Ryan Mulligan, say they build their sites. Motion hygiene stays in [motion and responsive](motion-and-responsive.md), patterns in [motion patterns](motion-patterns.md), type in [composition and type](composition-and-type.md) and the render gate in [visual QA](visual-qa.md). Keys in brackets point to Sources; the wording is ours. Numbers marked recommended are this project's; a name beside a number is its source.

## 1. Build the still page first

Ship a page that beats the current one with no animation at all, then add motion in small separate changes. Freiberg put the static Next.js site live as soon as it beat production [RF]. Vercel's design engineers prototype motion in code and sometimes cut an animation for its cost [VERCEL-DE].

Layer the hero so the richest layer is optional. Layer 0 is HTML text with CSS or SVG and needs no client script. Video, canvas or shader layers are code-split, fade in after first paint, and are skipped on weak hardware without changing the composition [RF]. GitHub's globe paints a static gradient first and crossfades the canvas in once its first frame is ready [GH].

Budget novelty at about one part in ten (Freiberg); the novel moment is the exclamation mark. Keep high-novelty moments apart, with quiet micro-motion between them. A first-load effect does not replay on client-side navigation. Anything that performs badly, feels showy or breaks the page's rhythm is cut, and the cut goes in the motion contract (MO-08) [RF]. Stripe delayed a metrics animation a month rather than ship it rough [STRIPE-DILL].

Video loads only when seen. `loading="lazy"` does nothing on `<video>`; use `preload="none"` with an IntersectionObserver that plays while visible and pauses otherwise, which saved GitHub several megabytes per load [GH]. Animated GIFs never ship; use muted video (PF-02, MO-05) [VWG].

## 2. Colour

Build the palette in a perceptual space; HSL lightness lies, since a yellow and a blue at the same L do not look equally light. Stripe generates its scale in CIELAB so that any two steps a fixed distance apart pass contrast, five steps for small text and four for large text and icons (Stripe). A component can then shift fill and text one step each and stay compliant. Every text colour also passes on white and on the lightest tint of every hue [STRIPE-COLOR]. Linear derives its themes from a base colour, an accent and a contrast value in LCH, so high contrast is a setting, and keeps brand hue out of most neutrals so the accent means something when it appears [LINEAR].

Ration the accent. It sits on the primary action and a counted handful of other places; the Vercel homepage spends its accent sparingly so the call to action keeps its weight [RF]. Interactions raise contrast: hover and active fills are darker or more saturated than rest, never lighter [VWG]. Extends CO-01.

## 3. Depth

Depth comes from layering and light, not a shadow on everything. Push a layer back with blur or dimming. Put an offset or out-of-focus element in front of the subject. Fade container edges. Whatever stays interactive stays unblurred [RF]. Linear's elevation is black and white opacities over the theme [LINEAR].

Where shadows stay, they share one light: the same offset direction and horizontal-to-vertical ratio on every shadow. Layer several `box-shadow` values with growing offset and blur and falling opacity, tinted with the background hue rather than black; higher elevation means larger and softer at lower opacity [JWC]. Shadows never animate [JWC RF]. Nor do layout properties: a `transition: height` on three bars cost 60% CPU and 25% GPU on an M2; `translate` on the same shapes dropped CPU from 15% to 6% and GPU below 1% (Granola) [GRANOLA]. Extends MO-03 and MO-04.

## 4. Controls, focus and accessible units

Keyboard-initiated actions never animate; they feel delayed. Once one tooltip opens, siblings open instantly. A pressed button scales to about 0.97 (Kowalski). A popover scales from its trigger's side. When easing and duration cannot fix a transition, add about 2 px of blur for its length instead of making it longer [EK]. Extends MO-07.

Focus ring recipe: `:focus-visible` with `outline: 3px solid <dark>; box-shadow: 0 0 0 6px <light>`, inverted on a dark theme. The ring's contrasting area is at least a 2 px perimeter, at 3:1 against adjacent colours and 3:1 between focused and unfocused states (Soueidan). Outlines survive forced colours and cause no layout shift [SS]. Makes AX-04 numeric.

Code-built illustrations have one name. An artifact drawn in HTML, CSS, SVG or React carries `role="img"` and a short `aria-label` on its wrapper, with the inner tree `aria-hidden`, so a screen reader meets one element, not forty. Prefer CSS or SVG to raster; it stays sharp and adapts [RF]. Extends AX-06.

A code sample is accessible as a unit: an `aside` or region with a label; a named copy button that announces success in a live region; decorative icons hidden; line numbers as pseudo-elements that are not read aloud [RF]. Sits beside ST-06.

## 5. Layout

One breakout grid instead of per-section widths. Name lines `content` (about 50ch), `popout`, `feature` and `full`, symmetric about the centre and collapsing to the gutter on phones. Children default to `content`; artifacts and proof take `feature` or `full` [RM]. Prose keeps its measure (TY-07) while artifacts widen, which answers the detector's same-width warning.

A row of cards is a scroll-native rail. It scrolls and snaps with CSS. Buttons are an enhancement that advance by the number of fully visible items and mark the ends; overscroll is contained; smooth scrolling runs only under `prefers-reduced-motion: no-preference` [RM]. Do not ship CSS-only carousels built on `::scroll-marker` and `::scroll-button()`: they get no names, wrong counts and unreliable selection [SS].

A product range is a bento with disclosure. Stripe shows its products as tiles with little text; a tap opens a modal so the visitor stays in browse mode. A long scroll, a squished single screen and an accordion were tested and rejected [STRIPE-DILL]. Sits beside PS-02.

## 6. Story first

Outline in headings. GitHub wrote its homepage as a Markdown outline of headings and calls to action before any layout, then grew copy and layout together, as chapters of one person's day with one or two deliberate rhythm breaks [GH]. The headings alone should explain the product (CP-10).

Show accurate vignettes, coloured from the product: recreations of real UI that drop small details but keep each feature's purpose and layout, in the product palette flexed, with any extra colours named [GH]. Intercom showed one simplified feature at a time, found visitors could not tell what the product did, and returned to real layout, colours and structure [INTERCOM]. Extends PS-03 and HP-03.

Avoid the default by contrast with one anchor. To escape both the category default and its obvious opposite, pair two registers and hold one property constant. Freiberg's example is bitmap type over a Renaissance painting, anchored by size, casing or position; contrast suits first impressions, not productivity surfaces [RF]. Granola set a slab display against a neutral UI face and a hand-drawn mark, for a stated reason: calm, for people whose days are chaos [GRANOLA]. The record names both registers, the anchor and the reason.

## 7. Prototype in the medium

Judge coded prototypes in their real context. Figma tested its call-to-action button across more than fifty prototypes inside a pricing layout and fixed duration and easing before handoff [FIGMA]. PostHog prototyped in the production codebase because mock-ups would not have shown the problems [POSTHOG]. Stripe's bar is a minimum viable quality product: judge as a user, not a stakeholder, and never accept a result because it was fast to make [STRIPE-DILL].

Live numbers only when truly live. A real, sourced, changing figure can stand as proof of scale, as Stripe's GDP share and GitHub's merged pull requests do [STRIPE-DILL GH], when the source sits beside it, the value reads correctly in any capture, and a visible pause control stops it (MO-05). Otherwise the counter rule in [motion patterns](motion-patterns.md) and HP-05 stand. A live canvas earns its place the same way: hover shows the real record and links out, or it is decoration (PS-03) [GH].

## 8. Verification

Run on the rendered page; record each result in the record's checklist.

1. Scripts off, reduced motion on: all three widths show complete copy, proof and actions; the rich hero chunk loads after LCP; no video bytes before the element is in view.
2. Every palette pair N steps apart passes; every text colour passes on each hue's lightest tint; hover and active fills are darker than rest; the accent-token count is recorded.
3. Every computed `box-shadow` shares one angle and hue; no transition or keyframe touches `box-shadow`, `height`, `width`, `top` or `left`; paint flashing stays inside the moving element.
4. A keyboard-triggered control fires no transition; both ring contrasts pass on light and dark; each illustration is one named node; the copy button announces success; line numbers are absent from the accessibility tree.
5. Prose keeps its measure while artifacts widen; the rail scrolls and snaps with scripts off; CSS has no `scroll-marker` or `scroll-button`; a tile opens its panel by keyboard without leaving the page.
6. The extracted headings read as a document; each vignette sits beside a screenshot with the dropped details listed; the record names registers, anchor and reason.
7. The record lists each prototype, its context, and duration and easing per animation; two reloads give different live values; the source link resolves; pause stops the ticking within a second.

## Sources

- **EK** Emil Kowalski, "You Don't Need Animations", <https://emilkowal.ski/ui/you-dont-need-animations>; "7 Practical Animation Tips", <https://emilkowal.ski/ui/7-practical-animation-tips>
- **FIGMA** Rebecca Ramos, Figma, "Updating our web system for a new era", <https://www.figma.com/blog/updating-our-web-system-for-a-new-era/>
- **GH** GitHub: Amanda Swan, "How we designed and wrote the narrative for our homepage", <https://github.blog/news-insights/company-news/how-we-designed-and-wrote-the-narrative-for-our-homepage/>; Tobias Ahlin, "Making GitHub's new homepage fast and performant", <https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/>, and "How we built the GitHub globe", <https://github.blog/2020-12-21-how-we-built-the-github-globe/>; Tony Jaramillo, "How we illustrate at GitHub", <https://github.blog/2021-02-11-how-we-illustrate-at-github>
- **GRANOLA** Jim Fisher, Granola, "Don't animate height!", <https://www.granola.ai/blog/dont-animate-height>; Sam Stephenson, "Meet the new look Granola", <https://www.granola.ai/blog/a-new-look-for-granola>, and on The Cognitive Revolution (transcript), <https://stationlm.com/analysis/caea4701-0804-42ff-8c59-e09d69ac6ed9>
- **INTERCOM** Scott Smith, Intercom, "Revealing our refreshed brand", <https://www.intercom.com/blog/how-and-why-we-refreshed-our-brand>
- **JWC** Josh W. Comeau, "Designing Beautiful Shadows in CSS", <https://www.joshwcomeau.com/css/designing-shadows/>
- **LINEAR** Karri Saarinen, Yann-Edern Gillet, Andreas Eldh and Romain Cascino, Linear, "How we redesigned the Linear UI", <https://linear.app/blog/how-we-redesigned-the-linear-ui>
- **POSTHOG** Cory Watilo, PostHog, "Why our website looks like an operating system", <https://posthog.com/blog/why-os>
- **RF** Rauno Freiberg, "Crafting the Next.js Website", <https://rauno.me/craft/nextjs>; "What will you ship?", <https://rauno.me/craft/vercel>; "Contrasting Aesthetics", <https://rauno.me/craft/contrasting-aesthetics>; "Designing Depth", <https://rauno.me/craft/depth>; "Novelty", <https://rauno.me/craft/novelty>
- **RM** Ryan Mulligan, "Layout Breakouts with CSS Grid", <https://ryanmulligan.dev/blog/layout-breakouts/>; "Scrolling Rails and Button Controls", <https://ryanmulligan.dev/blog/scrolly-rail/>
- **SS** Sara Soueidan, "A guide to designing accessible, WCAG-conformant focus indicators", <https://www.sarasoueidan.com/blog/focus-indicators/>; "Are 'CSS Carousels' accessible?", <https://www.sarasoueidan.com/blog/css-carousels-accessibility/>
- **STRIPE-COLOR** Daryl Koopersmith and Wilson Miner, Stripe, "Designing accessible color systems", <https://stripe.com/blog/accessible-color-systems>
- **STRIPE-DILL** Katie Dill, Stripe, on Y Combinator's Design Review, "Stripe Head of Design Katie Dill Breaks Down Their New Website" (2026), read through secondary transcripts at <https://stationlm.com/analysis/99a88bcb-1514-4f61-a540-e685300d53a3> and <https://summify.io/discover/how-stripe-built-their-new-website-ypzNhw/>
- **VERCEL-DE** Hitchcock, Heffernan, Pham, Freiberg and Pessoa, Vercel, "Design Engineering at Vercel", <https://vercel.com/blog/design-engineering-at-vercel>
- **VWG** Vercel, Web Interface Guidelines, <https://vercel.com/design/guidelines>
