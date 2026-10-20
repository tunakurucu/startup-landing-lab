# Supabase

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://supabase.com

Pairs a two-line outcome promise with a plain list of bundled services, then shows breadth through a seven-module bento and real dashboard and code views.

## Company evidence

YC: verified-yc; batch: S20. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Nav: logo, Product/Developers/Solutions menus, Pricing, Docs, Blog, a GitHub star count (111.7K), Sign in and a green "Start your project" button. Below it, an offset two-column block: the two-line h1 and two buttons on the left, a three-line subhead top-aligned on the right. From about y=450 the first row of a seven-card product bento (wide Postgres Database card with an elephant line drawing, Authentication, Edge Functions) fills the rest of the first screen.

### Typography

h1 measured 46px, weight 500, line-height 1, tracking 0, measured family Manrope; its second line is set in brand green. Section h2s are 34px in the same face, each split into a dark line and a grey line ("Stay productive and manage your app" / "without leaving the dashboard"). Body 16px/1.5, measured family Inter, hero subhead measure 46ch. Source Code Pro is in the measured families; a monospace sets the code sample and the auth card's email grid. Card titles are 16px h2s. Phone h1 34px, line-height 1.1.

### Visual System

Near-white ground (computed body oklch 0.995) with hairline section borders; white cards with 1px borders and rounded corners. One green accent on primary buttons, the h1's second line and some code tokens. Card art is grey line drawing (elephant, wire globe with route lines, isometric cube, table-to-endpoint rows). Customer logos are grey monochrome. Product proof is light-theme dashboard frames and a syntax-highlighted code block. The only saturated surface is a pink-to-orange Lovable story card. The measurement record flags dark_background true, but every render I saw was light (data-theme="light").

### Page Sequence

Hero → seven-module bento closed by "Use one or all. Best of breed products. Integrated as a platform." → 12-logo grid → tabbed dashboard demo (Table Editor / SQL Editor / RLS Policies) → "Use Supabase with React" with six framework tabs and code → templates (2 large, 4 small) → customer stories (Lovable card plus four collapsed logo tiles) → wall of X posts → "Open source from day one" → closing CTA repeating the h1 → SOC2 / HIPAA / ISO 27001 strip → footer with newsletter and theme toggle.

### Copy

h1: "Build in a weekend" / "Scale to millions". Subhead lists the bundle: start with a Postgres database, add Authentication, Data APIs, Edge Functions, Realtime Data, Storage and Vector embeddings. Primary button "Start your project"; secondary "Request a demo". The page names its category by components, Postgres first, rather than a label; the document title reads "The Postgres Development Platform". Audience cues are developer-specific: framework code, starter templates, testimonials about solo founders and vibe coding, footer Solutions listing "AI Builders", "Vibe Coders" and "Enterprise".

### Interaction

Operated the dashboard tab "SQL Editor": its pill took the dark outline, Table Editor's cleared (aria-selected moved), and the framed panel switched from a countries table grid to an SQL editor with a query, a results grid and an Assistant side panel. It took effect on a second load, after the panel had mounted. Frames 1.5–3 s apart on the hero and testimonial wall showed no pixel change. The nav stayed pinned while scrolling (measurement record lists sticky_nav false). Under reduced motion nothing moved either; only late images appeared.

### Accessibility

Skip-to-content link present. Probe found the header and footer logo links to "/" with no accessible name. The testimonial wall fades its edge columns to very light grey text. Grey body text on the near-white ground reads clearly by eye. At 390 the menu is a 40×40 button labelled "Open main menu" with aria-expanded; hero buttons are 38px tall; footer links are 20px tall and social icons 22×22 (69 of 124 visible targets under 24px in one dimension). No horizontal overflow at 1440 or 390.

### Mobile

Header collapses to logo plus hamburger; the GitHub count, Sign in and header button go. Hero stacks h1 (34px), subhead, then both buttons side by side. The bento becomes a single column of text-only cards: the line drawings, email grid and globe are dropped. Logos move to a 3-column grid; the dashboard demo keeps its tabs over a cropped frame; templates and story logo tiles stack full width; footer goes to two columns. Page grows from 7,691px to 9,820px; 10 sections at both widths.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 46 | 34 |
| Headline weight | 500 | 500 |
| Headline tracking em | 0 | 0 |
| Body px | 16 | 16 |
| Characters per line | 46 | 35 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let the h1 carry the outcome and the subhead name the components buyers already search for, so the promise and the inventory arrive together.
- Split each section heading into a dark claim line and a grey qualifier line so the headings alone read as the page's argument.
- Place a tabbed real-UI view and a framework-switching code sample mid-page so evaluators see both the dashboard and the integration before templates and customer stories.
- On phones, drop decorative card art and keep each module's name and one-sentence claim.

Suits developer platforms that bundle several recognisable primitives (database, auth, storage, functions) and sell to builders who judge by docs and code. Wrong for a single-feature product, where a seven-card bento would be padding, or for non-technical buyers who cannot read the code sample.

Risk: The first screen shows no product UI, only grey line drawings; the real dashboard sits about 1,700px down and its frame loaded late (blank until mounted). Every section uses the same white card and hairline treatment, so after the hero little signals which part matters most. The testimonial wall and the long footer add length without new product information.

## Limitations

- The dashboard panel and code sample loaded late in headless Chromium; the first control attempt saw a blank panel and the tab click only took effect on a second load.
- The measurement record reports 45 running animations on load, 15 after scroll and an observed reduced-motion rule; I saw no visible motion in frames 1.5–3 s apart and document.getAnimations returned 0, so what those animations drive is unverified.
- Contrast was judged by eye; the automated contrast probe could not parse the page's oklch colours.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://supabase.com
- https://saaslandingpage.com/supabase/
- https://www.ycombinator.com/companies/supabase
