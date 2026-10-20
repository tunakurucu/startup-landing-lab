# Framer

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://www.framer.com

A 12-word category claim ("design agent") on black, then staged agent sessions and a platform bento argue the agent sits on a full site builder.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, three controls attempted; none changed state
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Nav: logo, Platform/Solutions/Resources menus, Enterprise, Pricing; Log in and a white Sign up button on the right. The h1 sits left on two lines with "Get started for free" (white) and "Download app" (dark grey) beneath; a "New: Skills →" link aligns right on the same row. A full-width rounded tile below holds a video of a glowing blue prompt box ("New Chat", "Ask Framer…", model picker) with a 0:36 duration badge, filling the rest of the first screen.

### Typography

h1 measured 54px, weight 500, line-height 1, tracking −0.04em, measured family GT Walsheim Medium (a geometric sans). Section h2s are 44px in the same face, left-aligned, mostly on two lines; the closing h2 returns to 54px and is centred. Body 18px/1.4, measured family Inter Variable, 58ch measure. Input Mono Regular is in the measured families; a monospace sets the terminal panel. Phone h1 36px over three lines.

### Visual System

Pure black ground (computed body rgb(0,0,0)) throughout, white type, white primary buttons and dark grey secondary ones. Surfaces are near-black rounded cards with faint borders. Most imagery is dark-mode Framer UI: chat panel, CMS table, Core Web Vitals meters, branch list, analytics chart, A/B table, a community feed window. Accent is electric blue (hero glow, metric values, progress bars) with some purple in charts. Customer logos are white monochrome. Photography appears inside mockups (Haus layouts, image-wheel cards) and in showcase thumbnails seen in the phone capture.

### Page Sequence

Hero + video tile → 8-logo grid → "Agents that work alongside you, not instead of you": four feature cards (Design / Run your CMS / Code with an agent / Connect to any AI) beside a pinned agent chat panel, then a framer-agent terminal panel with claude/cursor/codex tabs → "Not just vibes, a full platform" bento (Performance, CMS, SEO, Hosting, Analytics, A/B Testing and more) → "Shipped with Framer" showcase → customer story cards → community feed window → "Your next idea starts here" prompt box with starter chips → large footer.

### Copy

h1: "Framer is the design agent for every step from idea to launch". No subhead; the buttons follow directly. Primary "Get started for free", secondary "Download app". The h1 names the category ("design agent"), matching the document title "Framer: AI design agent". Section heads position against replacement and against vibe-coding ("not instead of you", "Not just vibes, a full platform"). Audience is professional teams ("teams shipping big sites"); the footer's Compare column names Webflow, Figma, Wix, Lovable, Claude Code and others.

### Interaction

Tried the terminal tab "cursor" twice (second time after 7 s in view): "claude" stayed active and the session body stayed empty below its header. Clicking the hero tile only drew a white outline; the video stayed paused at frame 0. Hovering and clicking "Platform" opened no menu. The page never left readyState "interactive" and its mp4s never loaded. While scrolling, the nav and the agent chat panel stayed pinned. 16 running "ghostFlow" animations were reported in normal and reduced-motion loads; hero frames 1.5 s apart showed no pixel change in either.

### Accessibility

At 390 the menu icon is a focusable div (tabindex 0) with no role, label or aria-expanded. Desktop probe: 2 buttons, 5 community-feed links and the footer logo link without accessible names, and one textarea with no label or placeholder. Feed metadata is #666 on #111 at 13px (about 3.3:1). Phone targets are small: "Log in" 40×17, hero buttons 29px tall, "Start with Agents" links 20px tall. No horizontal overflow. In the measurement capture a cookie banner covers the lower first screen on phone.

### Mobile

Desktop menus collapse to a hamburger. The h1 wraps to three lines; buttons stay side by side and "New: Skills" drops below them. The video tile shrinks to a 219px strip. Logos become one row cropped at both edges. Agent cards stack with no pinned chat panel or terminal; the fourth reads "Connect to any agent". Story cards sit in a row cropped at the right. The closing prompt box becomes a "Get started for free" button over a canvas UI image.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 54 | 36 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.04 | -0.04 |
| Body px | 18 | 18 |
| Characters per line | 58 | 35 |
| Sections | 7 | 6 |
| Reduced-motion rule | unverified | not_observed |

## Interpretation

- When the product is entering a new category, put the category noun in the h1 and skip the subhead so the claim and the two actions read as one unit.
- Show an agent's work as a pinned session panel beside the outputs it produced, so stacked feature cards read as steps of one session.
- Follow AI claims with a dense bento of operational proof (performance numbers, uptime, localization, A/B results) to answer the 'is it a toy' objection.
- Replace a desktop-only interactive closer, such as a prompt box with starter chips, with a single button on phones rather than shrinking it.

Suits AI-forward creative or site-building tools that must also prove production depth to buyers who already know the base product. Wrong for regulated or infrastructure products whose buyers need parameters, pricing or code first; a near-text-free first screen of glowing UI would read as mood rather than evidence.

Risk: Almost all proof is media: in this headless session the hero video, showcase and story cards stayed unloaded and the controls did not respond, leaving large black voids in the desktop capture. Without a subhead, the first screen never says in words that the output is a website. The all-black ground, grey-on-black card copy and small phone tap targets trade legibility for atmosphere.

## Limitations

- In headless Chromium the page stayed at readyState 'interactive', mp4 media never loaded, and the three controls tried (terminal tab, hero video, Platform menu) produced no state change; interactive behaviour is unverified.
- Desktop captures of 'Shipped with Framer', 'Trusted by teams' and parts of the community feed were empty; their content is described from the 390 measurement capture.
- The dimmed agent feature cards in desktop captures (full brightness on phone) may be an unfinished reveal effect rather than the intended state.
- The 1440 full-page measurement capture stops at 9,000px of a 10,742px page; the closing CTA and footer were seen in the live scroll.
- At 390 the measurement capture showed Log in and Sign up beside the hamburger and a cookie banner; my live capture showed only logo and hamburger and no banner.
- The measurement record lists the reduced-motion rule as 'unverified' (desktop) and 'not_observed' (mobile).
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.framer.com
- https://saaslandingpage.com/framer/
