# Casebook: typographic-technical

## Neon · typographic-technical

https://neon.com · desktop-mobile-audit · **reference tier**

Numbered, mono-labelled chapters of two-tone sentence headlines on black carry a backend-platform argument, switching to a mint ground with marker highlights for the architecture story.

Observed: An announcement bar ('Neon now has realtime…') tops a black nav with Discord, a GitHub star count, Log in and Sign up. The upper two-thirds is a field of glowing vertical green, blue and white bar clusters. Lower left: a monospace line 'NEON IS PART OF THE DATABRICKS PLATFORM', a two-line h1 with a dotted underline under 'Lakebase', and white 'Get started' plus outline 'Read the docs' pills. A divider and a scrolling logo row close the screen. Clicked 'Save costs' in the autoscaling toggle: it took the pressed state and the chart changed from a split 'Without Neon' (red spike, 'Resource limit reached… Outage triggered') vs 'With Neon' ('Autoscaling active', '+4 vCPU') view to one chart with a '4 vCPU/16 GB RAM… Savings estimation 80%' callout. The logo row scrolled continuously; the chapter-02 agent panel shifted between frames; the hero bars held still across ~7 s. Reduced motion: the logo row stopped; sampled frames still.

Copy: h1: 'The backend for apps and agents, built to scale on Lakebase Postgres.' No separate subhead; the Databricks line above the h1 supplies the reassurance. Primary button 'Get started', secondary 'Read the docs'; the close adds a copyable '$ npx neon init'. The audience is named as apps and agents, then segmented into startups, agent platforms and the Fortune 500 in chapter 03.

Transfer: Number the chapters and label them in monospace so a long technical page reads as a sequence, not a feature dump. Write each section head as one sentence pair—bright claim, grey elaboration—so the point lands before any card. Use a two-state toggle on one chart to show both buyer motives (avoid outages, save costs) with the same data. Place the backing or ownership signal above the h1 when it answers the buyer's first risk question.

Avoid/limit: Much of the page depends on late-loading media: captures show black voids, broken-image icons and blank card illustrations, which undercuts a reliability pitch. Grey text on black lowers contrast. The h1 packs two audiences and a product name into 13 words.

Measured 2026-10-20: desktop h1 56px, weight 400, tracking -0.04em; body 18px; 7 sections; phone h1 32px.

On phones: Announcement text truncates with an ellipsis; nav becomes logo plus menu. The hero bar field shrinks to a band above the h1; buttons stay side by side. Chapters keep the numeral above the two-tone sentence; the five product cards become a sideways strip with the next card peeking; the agent panel moves below the text and shows a prompt and 'Thinking…'. Pricing cards and stats stack; the closing panel puts the wireframe mountain above full-width buttons.

## Warp · typographic-technical

https://www.warp.dev · desktop-mobile-audit · **reference tier**

An all-monospace page built like a technical paper: numbered figures, section tags, a live task grid in the hero and factory config shown as real files.

Observed: Left-aligned on a pale lavender ground with a faint dot grid and vertical rules: two-line monospaced h1, one-line grey subhead, a dark 'REQUEST EARLY ACCESS' button and an outlined 'DOWNLOAD WARP TERMINAL' button. Below, a framed '[ fig. 1 — the factory ]' panel: an 8×28 grid of task squares in grey and electric blue, a queued/working/waiting/shipped legend and counters. Tiny vertical 'WARP · HOME · 2026' labels run on both edges; a speaker-icon button sits bottom-left. Clicked the 'AGENTS' tab: it turned electric blue, the description switched to agents and 'the Foreman', and the file tree opened agents/implementation/agent.md in the viewer instead of factory.yaml. On load, fig. 1 squares changed state between frames 1.5 s apart. After scrolling, the nav became a blue section index ([C] Configuration … [F] FAQ). Reduced motion: frames identical at top and at 35% depth. Measurement: 5 animations on load, 23 after scroll; rule 'observed'.

Copy: H1: 'Open infrastructure for cloud software factories'. Subhead: build on Warp with factories as code, any model or harness, and evals, benchmarks and self-improvement built in. Primary button 'REQUEST EARLY ACCESS'; secondary 'DOWNLOAD WARP TERMINAL'; nav adds 'BOOK A DEMO' and 'GET STARTED'. The h1 coins the category ('cloud software factories'); audience is developers ('800k+ devs') and enterprise teams. FAQ items are lowercase terminal prompts ('> what is a cloud software factory?').

Transfer: On a long technical page, number the figures and tag the sections so the page reads like a spec and can be navigated by section. Prove an 'as code' claim with a browsable file tree whose files change with each tab. Put one live-state figure in the hero (items moving through named states) to make an abstract system feel operational. Replace the global nav with a section index once the reader is inside a long page.

Avoid/limit: Monospaced body text at 16px/1.7 with wide tracking is slow to read across long paragraphs, and many labels are pale. The hero figure is abstract squares, so it signals activity without showing what a task is. In the full-page measurement capture several sections below the case study rendered blank, so content depends on scroll-triggered rendering.

Measured 2026-10-20: desktop h1 54px, weight 400, tracking -0.037em; body 16px; 10 sections; phone h1 32px.

On phones: The nav keeps logo, yellow 'BOOK A DEMO' and a menu icon. The h1 wraps to three lines; buttons sit side by side with two-line labels. Fig. 1 recomposes into a denser grid with a wrapped legend. Configuration tabs become a vertical list above the description and viewer; quality-loop charts stack inside one figure; stories, layers and product cards stack. Page height grows from 9363 to 14029px.

## Rive · typographic-technical

https://rive.app · desktop-mobile-audit · **reference tier**

An all-caps Orbitron headline and a CLI install panel with OS tabs lead the first screen, while a column of use-case video tiles scrolls beside them.

Observed: Black ground, split layout in a 1000px column. Left: a column of bordered tiles labelled by use case (Product UI, Game UI, Mobile Apps, Film + TV, Websites, Games, Fantasy Interfaces) drifts upward. Right: a spaced 'RIVE' wordmark, a two-line uppercase h1 and a grey subhead. Below them, a dark panel holds 'RIVE CLI' (macOS/Linux and Windows tabs, a curl command, a copy button) and 'RIVE EDITOR' ('Sign up', 'Download desktop app'). A one-line trust claim closes the column. Operated the CLI tab: clicking 'Windows' replaced 'curl -fsSL …/install.sh | sh' with 'irm …/install.ps1 | iex' and moved the underline. The hero tile column moved upward between captures taken 3 s apart, although getAnimations() listed no animations. With reduced motion the column still moved about the same distance. During the scroll getAnimations() stayed empty and no video played. The measurement record found no reduced-motion rule.

Copy: h1: 'The Interactive experience engine', rendered uppercase. Subhead: build interactive UI, motion and game experiences in the Editor, or have an agent generate them with the CLI; the output runs natively on mobile, desktop, web, consoles, TVs and vehicles. Primary actions are the copyable CLI command, 'Sign up' and 'Download desktop app'; the nav says 'Get started'. Audience: designers, animators and developers. Proof names Spotify Wrapped and Duolingo, and a paragraph compares Rive with After Effects, Figma, Lottie and CSS animations.

Transfer: For a product developers install, put the exact install command in the hero, with an OS selector and a copy button, next to the GUI sign-up path. Let a moving column of real output tiles carry the use cases, so the headline can stay short. Keep a distinctive display face for the headline and section titles only, and set body text in a neutral sans. On phones, shrink the display size less than the body, or the headline stops reading as a headline.

Avoid/limit: The hero depends on video. In this browser every tile and the Editor video stayed blank, leaving grey boxes and an empty half-section. The drifting tile column ignores reduced motion. The futuristic display face sets a gaming tone that may undersell product-UI use. The 21px mobile h1 and the three-line command weaken the first phone screen. The menu trigger cannot be reached by keyboard.

Measured 2026-10-20: desktop h1 40px, weight 900, tracking 0.01em; body 16px; 0 sections; phone h1 21px.

On phones: The tile column becomes a horizontal row of tiles across the top, above the wordmark and h1. The h1 drops to 21px. The CLI command wraps onto three lines, and 'Download desktop app' shortens to 'Downloads'. The runtimes icon grid moves below its copy. The logo wall reflows into four rows, testimonials go single-column, and the footer becomes two columns. The nav keeps the logo, a menu icon and 'Get started'.

## Supabase · typographic-technical

https://supabase.com · desktop-mobile-audit · **reference tier**

Pairs a two-line outcome promise with a plain list of bundled services, then shows breadth through a seven-module bento and real dashboard and code views.

Observed: Nav: logo, Product/Developers/Solutions menus, Pricing, Docs, Blog, a GitHub star count (111.7K), Sign in and a green "Start your project" button. Below it, an offset two-column block: the two-line h1 and two buttons on the left, a three-line subhead top-aligned on the right. From about y=450 the first row of a seven-card product bento (wide Postgres Database card with an elephant line drawing, Authentication, Edge Functions) fills the rest of the first screen. Operated the dashboard tab "SQL Editor": its pill took the dark outline, Table Editor's cleared (aria-selected moved), and the framed panel switched from a countries table grid to an SQL editor with a query, a results grid and an Assistant side panel. It took effect on a second load, after the panel had mounted. Frames 1.5–3 s apart on the hero and testimonial wall showed no pixel change. The nav stayed pinned while scrolling (measurement record lists sticky_nav false). Under reduced motion nothing moved either; only late images appeared.

Copy: h1: "Build in a weekend" / "Scale to millions". Subhead lists the bundle: start with a Postgres database, add Authentication, Data APIs, Edge Functions, Realtime Data, Storage and Vector embeddings. Primary button "Start your project"; secondary "Request a demo". The page names its category by components, Postgres first, rather than a label; the document title reads "The Postgres Development Platform". Audience cues are developer-specific: framework code, starter templates, testimonials about solo founders and vibe coding, footer Solutions listing "AI Builders", "Vibe Coders" and "Enterprise".

Transfer: Let the h1 carry the outcome and the subhead name the components buyers already search for, so the promise and the inventory arrive together. Split each section heading into a dark claim line and a grey qualifier line so the headings alone read as the page's argument. Place a tabbed real-UI view and a framework-switching code sample mid-page so evaluators see both the dashboard and the integration before templates and customer stories. On phones, drop decorative card art and keep each module's name and one-sentence claim.

Avoid/limit: The first screen shows no product UI, only grey line drawings; the real dashboard sits about 1,700px down and its frame loaded late (blank until mounted). Every section uses the same white card and hairline treatment, so after the hero little signals which part matters most. The testimonial wall and the long footer add length without new product information.

Measured 2026-10-20: desktop h1 46px, weight 500, tracking 0em; body 16px; 10 sections; phone h1 34px.

On phones: Header collapses to logo plus hamburger; the GitHub count, Sign in and header button go. Hero stacks h1 (34px), subhead, then both buttons side by side. The bento becomes a single column of text-only cards: the line drawings, email grid and globe are dropped. Logos move to a 3-column grid; the dashboard demo keeps its tabs over a cropped frame; templates and story logo tiles stack full width; footer goes to two columns. Page grows from 7,691px to 9,820px; 10 sections at both widths.

## Resend · typographic-technical

https://resend.com · desktop-audit

Editorial type and generous silence open a long, increasingly concrete product tour for developer email infrastructure.

Observed: At 1363 × 936, a left-aligned two-line serif headline moves from bright white to gray on black; Get started and Documentation sit beneath the brief explanation. A faint light ray gives the largely open right side a focal point. A slim navigation bar stays at the top while scrolling. Clicked Python in the integration code chooser. The main language and nested example tabs both selected Python, and the visible snippet changed to Python. The dashboard tabs and testimonial carousel were seen in the full-page capture but were not operated. No email was sent.

Transfer: Make technical adoption concrete with a short, relevant integration example. A quiet hero can precede dense functional explanation. Use typographic contrast to create identity without obscuring product meaning.

Avoid/limit: Some body text appears subdued against black. The long sequence and dense product windows demand careful small-screen pacing. A full-page capture does not establish the behavior of unclicked tabs or carousels.

Measured 2026-10-19: desktop h1 96px, weight 400, tracking -0.01em; body 18px; 11 sections; phone h1 64px.

## Airweave · typographic-technical

https://airweave.ai/ · desktop-audit

A dark developer page moves from a restrained promise into an editable-feeling API example and a three-step retrieval model.

Observed: A centered Build smarter agents statement, YC badge and two actions sit on a dark blue-to-warm gradient. A wide code panel takes over the lower half of the first screen, with Python selected beside cURL and Node. Clicked cURL in the hero example. The selected language changed from Python and the visible snippet changed to cURL requests. No API request, account signup or pricing purchase was made.

Transfer: Let a representative integration example answer the first technical adoption question. Use one small system diagram to explain where infrastructure sits. Keep the free-start and assisted-demo paths distinct.

Avoid/limit: The quiet supporting copy appeared faint in an early render and needs contrast review. The roundup praised a previous snapshot; its judgment is not automatically transferable to the current site.

Measured 2026-10-19: desktop h1 80px, weight 400, tracking -0.03em; body 18.1px; 10 sections; phone h1 41px.

## Normal · typographic-technical

https://normal.ai/ · desktop-audit

A spare research-lab page uses a moving single-sentence subject and faint construction lines instead of a long sales funnel.

Observed: Small N mark and three links sit above a two-column introduction: an applied research lab for hardware design on the left, and a changing list of what it helps build on the right. A huge outline wordmark and very fine drafting guides occupy the empty center. Clicked the All systems normal control. Its accessible state expanded and revealed a copyable founders@normal.ai address. The rotating industry word changed between observed frames; its interval was not measured.

Transfer: Use extreme brevity when the intended next action is a conversation or hiring inquiry. Make a few changing words do the job of a broad industry list. Let a quiet visual system support a technical research identity.

Avoid/limit: This page provides almost no method, product proof or direct buyer path on the homepage. The roundup called an older Normal Factory site blocky; the current redirect to normal.ai is a different, much quieter design.

Measured 2026-10-19: desktop h1 24px, weight 400, tracking -0.015em; body 15px; 1 sections; phone h1 24px.

## Canary · typographic-technical

https://www.runcanary.ai · desktop-mobile-audit

A two-line poster headline, 'CANARY TESTS IT.' on a yellow highlight bar, then a long proof sequence of agent transcripts, diffs and replayed failures.

Observed: Left-aligned on near-black: a 'Backed by Y Combinator' chip, a grey line '[agent] WRITES YOUR CODE.' whose agent name rolls between Claude, Codex, Cursor and Copilot, then 'CANARY' in yellow and 'TESTS IT.' in black on a yellow bar. Below are one paragraph, a single yellow 'COPY THE PROMPT' button and the mono caption 'One line for your agent.' The bottom edge shows the top of a mock agent window with a floating 'Start Demo' pill. I clicked '02 ONE CLICK, TWO RECORDS' in Examples, then on a second load '02 Run' in How it works. Neither tab stayed selected: the How-it-works row advanced on its own from 01 to 03 while I waited. On load the hero agent name rolled between names, stats counted up from 0 when scrolled into view, and the 'Start Demo' pill stayed fixed over the demo. With reducedMotion set to reduce, the running-animation count was 0–1 versus 5 by default. Hero frames taken 2s apart were identical in both modes.

Transfer: Make the claim evidence itself: replay a real failure as terminal output plus a case file (test, break, root cause, fix) instead of listing features. When the buyer's tool is the entry point, make the primary CTA something that runs inside that tool (a copyable prompt) rather than a signup form. Keep one accent colour, use it for action and emphasis only, and reserve red/green for pass/fail meaning. Number sections like a document (01 / INSTALL … 08 / YOUR MOVE) so a long proof sequence stays navigable.

Avoid/limit: At ten sections and over 9,000px, the page asks for a lot of scrolling before the closing CTA. Self-advancing tabs ignored my clicks, so visitors can lose control of what they read. The heavy all-caps display face is loud on every section head, which flattens the hierarchy. The stats are unsourced on the page.

Measured 2026-10-19: desktop h1 32px, weight 400, tracking -0.01em; body 17px; 10 sections; phone h1 16px.

On phones: The nav collapses to the logo and a hamburger. The display drops to 44px, and the headline wraps to four short lines with the bar still behind 'TESTS IT.' The demo window becomes one tall column, thread above diff. The stats stack vertically, install steps stack, 4-tab rows become 2×2 grids and Examples tabs stack vertically. The integrations fan-in becomes a 2-column chip grid with arrows down to Canary, then Codex. The page grows to 11,532px.

## Traverse · typographic-technical

https://www.traverse.so · desktop-mobile-audit

The homepage is one unstyled text document: thesis, team size, open roles and an email address, with no navigation, imagery or product surface.

Observed: There is no hero in the usual sense. A centred 650px column on white opens with a bold 'Traverse (ʌΛ)' heading, then a one-sentence value statement and two short paragraphs on the company thesis and team. The whole page fits in one 1440×900 screen with empty space below. There was no control to operate: the only interactive elements are a mailto link and an X profile link, and following either would leave the page. Measured animations were 0 on load and after scroll. Reduced-motion loads looked identical, with nothing moving in either mode. The page height equals the viewport, so there is nothing to scroll.

Transfer: If the sale happens through a handful of direct relationships, the homepage can be a plain statement of thesis, team size and contact, with nothing in between. State the operating model in one line ('a small team… a handful of companies at a time') so visitors self-qualify before reaching out. When there is no product to show, credible backers and a direct email can stand in for product evidence on a recruiting-first page.

Avoid/limit: There is no product evidence, pricing, customer proof or conversion path besides email. The page cannot be told apart from an unstyled placeholder. A visitor arriving from search gets no visual identity or memorable artifact.

Measured 2026-10-19: desktop h1 24px, weight 700, tracking 0em; body 16px; 0 sections; phone h1 24px.

On phones: The same document reflows to a 370px column with about 10px side margins, and the line measure falls to about 46ch. Type sizes are unchanged: h1 24px, body 16px. Nothing is hidden or recomposed. The page still fits within one 844px screen.

## Keyframe Labs · typographic-technical

https://keyframelabs.com · desktop-mobile-audit

A condensed-serif headline set against a framed live avatar preview, inside a hairline-ruled, mono-labelled grid that reads as an engineering spec.

Observed: Left: 'Bring AI to life' headline, a subhead with inline coloured tag chips '[controllable]' and '[excited]' and the price 'As low as $0.06/min' in mono, then outlined 'Talk to sales' and black 'Start building' buttons. Right: a magenta-framed card with a '[neutral] Hey there, welcome to Keyframe Labs.' caption bar over a video of a man in a headset, a 'Cosmo' persona bar, mic and mute controls and a 'Tap to join call' tag. A mono spec strip closes the screen. Clicked '02 Ultra-low latency': it expanded with a description and the right panel switched to a 'time to first byte' bar chart (Keyframe 180ms vs other providers 450ms+). While scrolling, the capability list also advanced through Emotion control and Image-to-avatar on its own. On load the hero video played. With reduced motion the hero preview video was paused; only the 'Tap to join call' tag area still changed between captures.

Transfer: Put the product's real output in the hero as a framed, labelled preview so the claim and the evidence share the first screen. Annotate marketing copy with the product's own control tokens so the subhead doubles as a feature demo. Pair a selectable capability list with one evidence panel that changes form per claim (video, chart, before/after). Use hairline rules, mono labels and a code sample to signal developer-grade infrastructure to a technical buyer without a dark theme.

Avoid/limit: Evidence panels that show 'VIDEO PLACEHOLDER' undercut a page whose whole argument is visual realism. Low-contrast mono labelling makes structure hard to scan. Scroll-driven auto-advancing of the capability list can move content away from a reader who clicked an item. Price is stated as a 'from' figure with no plan detail on the page.

Measured 2026-10-19: desktop h1 72px, weight 400, tracking -0.025em; body 18px; 6 sections; phone h1 48px.

On phones: Nav collapses to wordmark, theme icon and hamburger. h1 drops to 48px; the subhead wraps with its tag chips; the avatar card moves below the copy at full width, and the two CTAs stack full width beneath it. Capabilities become a vertical run with each item followed by its own panel. Deploy steps and enterprise cards stack; the code panel narrows. Content width measured 300px with body at about 33ch, and the page grows to 9,286px.

## Hedge · typographic-technical

https://www.hedgespecialty.com/ · desktop-mobile-audit

A full-width two-line headline with a green second clause carries the pitch, backed by a numbered, ledger-like page of broker tools.

Observed: Monospaced eyebrow 'HEDGE INSURANCE · SPECIALTY RISK SPECIALISTS' above a two-line headline that spans the full content width; the second line, 'for hard-to-place risks.', is set in dark green. A hairline rule separates a three-line paragraph and two pill buttons (black 'Submit a risk', outlined 'Get appointed'). A monospaced ticker of coverage classes (Property · Cat-exposed, Energy, Marine...) runs along the bottom edge; faint vertical grid lines sit behind everything. No imagery. Operated the /06 'In their words' tab list: selecting '02 Senior Producer' swapped the large quote and attribution and moved a short underline from 01 to 02. The coverage ticker scrolled continuously on load. While scrolling, a 'Hedge Connector' promo card appeared bottom-left alongside the cookie panel bottom-right. With reducedMotion 'reduce', no running animations were found and the first screen did not change over 1.2s.

Transfer: Split the headline into a plain category clause and a coloured qualifier so the niche reads as the emphasis, then reuse that two-tone device on every section heading. Number sections like a document ('/01', '/02') when the audience is professional and expects to scan for a specific part. Turn domain inventory (coverage classes, forms, checklists) into a browsable grid so the homepage doubles as a reference tool for repeat visitors. A scrolling ticker of covered categories can state breadth without a logo wall when the buyer cares about scope more than social proof.

Avoid/limit: With no imagery, every section looks the same in weight, so the long middle (coverage grid, resources) can blur together. Two simultaneous overlays (cookie panel and promo card) cover content on scroll, and the mobile page grows to over 11,000px because dense grids stack one item per row.

Measured 2026-10-19: desktop h1 93.6px, weight 500, tracking -0.045em; body 17.8px; 8 sections; phone h1 39px.

On phones: Nav collapses to the wordmark and a circular menu button. The headline rewraps to four lines at 39px with the green clause kept. All card rows and the 12-class coverage grid stack to one column, taking the page from 7,160px to 11,382px. The cookie panel occupies most of the first screen below the buttons.
