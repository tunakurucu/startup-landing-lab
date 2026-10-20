# Casebook: canvas-first

## Excalidraw · canvas-first

https://plus.excalidraw.com · desktop-mobile-audit · **reference tier**

The editor's own hand-drawn idiom (handwritten words, doodles, cursor tags, an editor screenshot) becomes the brand, with a free, no-account start repeated throughout.

Observed: Pale mint-white ground scattered with pastel doodles and collaborator cursor tags ('brocketdeer', 'allosaurus'). Centred: the h1 with 'Whiteboard' in a hand-drawn face on a mint highlight, a one-line subhead, a yellow '134.2k on GitHub' star badge and a sketched pen. A framed screenshot of the editor (toolbar, style panel, comments) starts at the bottom of the first screen. The hero body has no primary button; the nav holds 'Free whiteboard'. Clicked the 'Next' arrow on 'Loved by individuals': the row shifted one card (François Fleuret / Theo / Gergely Orosz → Theo / Gergely Orosz / Andrej Karpathy). Nothing moved on the first screen in normal or reduced-motion captures. The five feature videos did not play in this Chromium (each reported a media-not-supported error), so their browser frames stayed blank; with reduced motion they were also reported paused.

Copy: H1: 'Online Whiteboard made simple'. Subhead: 'Ideate, Collaborate, Share. Simply with Excalidraw.' Primary button: 'Free whiteboard' in the nav; the first in-page buttons are 'Start drawing' and 'Try Plus', later 'Draw now'. The h1 itself names the category; the audience is individuals first ('Loved by individuals', 'No account is needed. Just start drawing.'), with Plus offered to those wanting more.

Transfer: Turn the product's own output style (hand-drawn type, doodles, cursor tags) into the page's brand system so the page previews what users will make. Repeat the zero-friction start ('No account is needed') beside the primary buttons of a free tool. Hang a long feature list on one vertical timeline with icon nodes so it reads as a sequence rather than a grid.

Avoid/limit: The hero has no in-body action and shows the editor as a static screenshot rather than a usable canvas; feature sections depend on MP4 videos and showed empty frames, with no visible fallback, when they failed to play here; small handwritten notes and 8px carousel dots are hard to read and hit; the 56px phone h1 takes three lines.

Measured 2026-10-20: desktop h1 56px, weight 600, tracking 0em; body 14px; 5 sections; phone h1 56px.

On phones: The h1 keeps its 56px size and breaks into three lines, 'Whiteboard' alone on the middle line. The nav collapses to a 'Menu' pill, and after scrolling only that pill stays visible. The logo row is cropped to three logos, buttons go full width, timeline cards stack singly, and the tweet carousel shows one card with neighbours peeking. The dark footer stacks.

## tldraw · canvas-first

https://tldraw.dev · desktop-mobile-audit · **reference tier**

The hero ships the product itself: an npm command, a ten-line App.tsx and a live, drawable tldraw canvas side by side.

Observed: Left-aligned on white: two-line h1, one-line subhead with 'high-performance web canvas' in bold, a black monospaced 'npm create tldraw' button with copy icon and an 'or Build with a starter kit →' blue link. Below, two framed panels: a dark 'App.tsx' code panel with a ten-line React example, and a blue-bordered live canvas with toolbar (draw tool preselected) and style panel. A customer-logo strip starts at the fold. Dragged across the hero canvas with the preselected draw tool: a black freehand stroke appeared and the undo button became active. On load the hero did not change over 1.5 s; the logo strip at the fold changed between frames in both normal and reduced-motion loads. Measurement counted 2 running animations on load and after scroll at both widths; reduced-motion rule 'observed'.

Copy: H1: 'Build infinite canvas apps in React with the tldraw SDK'. Subhead: make whiteboards, diagrams and canvas tools with tldraw's high-performance web canvas. Primary action is the copyable command 'npm create tldraw'; nav button 'Quick Start'. The category ('infinite canvas apps', 'SDK') and audience (React developers) are both in the h1; case cards add industries (productivity, education, design, issue tracking).

Transfer: For an SDK, put the install command, the minimal code and the running result in one view so the claim can be checked in seconds. Make the hero demo the real component with a sensible tool preselected, so the first pointer action already produces output. Use the product's own interface chrome as the page's recurring motif instead of decorative illustration. For open-source developer products, show adoption as concrete numbers (stars, weekly downloads) next to named customer cases.

Avoid/limit: The hero canvas starts empty, so a visitor who does not draw sees a framed blank box; the narrow column leaves wide unused margins at 1440. The main proof depends on a script-rendered component; in one live load at 390 the canvas toolbar had not rendered when captured.

Measured 2026-10-20: desktop h1 48px, weight 600, tracking -0.02em; body 14px; 8 sections; phone h1 32px.

On phones: The canvas moves above the code panel and fills the width; its toolbar shrinks to five tools plus an expand control and the style panel is hidden. Command button and starter-kit link stack; the nav becomes logo and menu icon. Features and case cards go to one column, images above text. Community stats regroup (stars full width, two small cards, then the npm chart). In 'Save months of work' the wide canvas is absent and its three cards stack. Footer becomes two columns.

## mmm.page · canvas-first

https://mmm.page/ · desktop-mobile-audit · **reference tier**

The homepage is itself an editable mmm page: visitors tap EDIT and get the real tool palette over a maximalist collage, with no sign-up first.

Observed: A persistent left sidebar (an info/LOGIN/SIGN UP pill, Home, Explore, a numbered 'An Internet for People' note, a botanical illustration) frames a white canvas. Centred on it: an oversized 'mmm' wordmark on a yellow-and-pink paint stroke with a pixel cursor, a two-line headline, grey instructions with an inline 'EDIT' chip, and two full-width buttons, purple 'EXPLORE →' and green 'SIGN UP →'. White 3D clay shapes float at the edges; a teal 'EDIT' button is fixed bottom right. Clicked the fixed 'EDIT' button: the page entered edit mode with no login prompt. A vertical tool palette appeared beside the canvas (text, brush, GIF, shapes, image, more, colour palette, collapse arrow), and the EDIT button was replaced by 'ADVANCED', a 'Preview ⌘.' label and an eye button. A follow-up click on the headline did not register in automation. On load the pixel cursors and sparkle changed between frames 1.5 s apart; under reduced motion they still changed, while the one spinner animation the probe counted stopped.

Copy: No h1. Headline 'Dead simple, drag & drop websites for anything'. Subhead: websites 'don't have to be so cookie cutter', then an instruction to tap EDIT and 'tap anything on this page'. Two equal buttons, 'EXPLORE →' and 'SIGN UP →'. Use cases are named plainly: 'Link-in-bio, portfolios, landing pages, moodboards. Anything you want.' Section labels state positions against the category: 'Messy Encouraged' ('We prefer campy, kitschy, messy, imperfect'), 'Free Forever' ('Otherwise $0/mo'). Title: 'Your Corner of the Internet'.

Transfer: Make the homepage a live instance of the product and invite visitors to edit it in place, so trying the product costs one click and no account. State a stance against the category default in short section labels ('Messy Encouraged', 'Free Forever') and back each with one plain sentence. For a self-expression product, use many real customer pages, tilted and overlapping, as social proof instead of a logo row.

Avoid/limit: No heading structure and many unnamed image links leave screen-reader users little to navigate. Scrolling inside an inner container breaks standard scroll measurement and can confuse keyboard and assistive scrolling. The phone layout keeps the desktop sidebar and shrinks the canvas into a narrow column, so copy becomes hard to read. Two equal-weight buttons leave the primary action unclear.

Measured 2026-10-20: desktop h1 Nonepx, weight None, tracking Noneem; body 32px; 0 sections; phone h1 Nonepx.

On phones: The desktop sidebar stays at about 200px wide on a 390 screen, leaving about 190px for the canvas. The canvas is not reflowed: the measurement reports the same 195.4px wordmark and 32px body as desktop, and the screen shows the desktop composition scaled down, with instructions and buttons at very small sizes. The fixed EDIT button covers part of the collage. Because the page scrolls in an inner container, the measured document height is only 844px.

## FLORA · canvas-first

https://flora.ai/ · desktop-mobile-audit · **reference tier**

Generated imagery scattered on a dotted canvas grid is the hero, and the page proves the product with a draggable node graph and one workflow graph per creative discipline.

Observed: Black ground with a faint dot grid. A scattered collage of generated fashion and product images (a bag, lips with a 'made in FLORA' mark, red shoes, portraits) floats at the edges around a centred block: h1, one-line subhead, green 'Get started for free' and outlined 'Copy setup prompt' buttons, and 'Works with' four AI-app icons. A greyscale customer logo strip runs along the bottom; a cookie panel overlays the lower middle. Dragged the 'Star Shoe' node in the canvas demo (labelled 'Move Star Shoe node'): it moved 210px right and 180px up, stayed slightly enlarged, and its connector curve re-routed to the Sneaker Showcase node. On load the logo strip scrolled continuously. Scrolling the use-case list highlighted one discipline at a time and swapped the backdrop photo and graph. With reduced motion no animations ran and top and mid-page frames were identical.

Copy: H1: 'Your creative workspace'. Subhead: 'Purpose-built AI tools for every step of your process.' Primary button 'Get started for free'; secondary 'Copy setup prompt'. The audience is creative teams ('Teams from Pentagram to Lionsgate'; 'professionals across film, fashion, branding, and design'), and the category is framed as a canvas over many models: 'One plan. 50+ models.' Use cases are named by discipline: Visual Effects, Fashion, Advertising, Photography, Concepting, Branding, Motion, Architecture.

Transfer: Make the hero a sample of output, a collage of generated work on the product's own grid, so quality is shown before any claim. Embed a small, real piece of the product's interaction (draggable nodes with live connectors) in the marketing page. Map use cases to the buyer's disciplines and give each one concrete workflow graph, switched by scroll on desktop and stacked on mobile. Recompose sections for mobile, including reordering and retitling them, rather than only shrinking the desktop layout.

Avoid/limit: A long dark page (10,854px) of image-heavy grids; node labels inside the graphs are too small to read at either width; dimmed list items over photos lower legibility; the pixel-textured italic in the 390 h1 trades crispness for style; a wall of third-party model logos dates quickly as providers change.

Measured 2026-10-20: desktop h1 52px, weight 400, tracking -0.04em; body 20px; 6 sections; phone h1 52px.

On phones: The h1 stays 52px and breaks to three lines, with collage images crowding the edges; the nav reduces to logo and menu. Sections are reordered and retitled: the node demo follows the hero under 'Take your work further.' with nodes stacked vertically; the discipline list becomes stacked cards, each with title, graph and caption; the model grid becomes a sideways card row; the 01/02/03 cards move lower under 'Create at the speed of thought.' Page height 16,306px.

## Onlook · canvas-first

https://onlook.com/ · partial-desktop

A visual engineering tool explains itself through the language of a working canvas.

Observed: Centered lightweight sans-serif statement; paired design/demo actions lead into a large editor canvas. Clicked the free-version FAQ question. aria-expanded changed to true. The hero showed “Error loading scene” in this browser; the intended scene was not evaluated.

Transfer: Present the workspace as the product’s explanatory medium. Demonstrate continuity between visual editing and real code. Keep essential messaging and actions usable when a rich scene fails.

Avoid/limit: The observed hero scene failure makes this an instructive resilience case, not an unqualified quality endorsement.

## Endra · canvas-first

https://www.endra.ai/ · desktop-mobile-audit

A black page led by an isometric stack of wireframe floor plates under a condensed serif headline, then product UI mocks in cards and one electric-blue CTA block.

Observed: Near-black screen with four stacked isometric plates drawn in thin white outline, centred and occupying the upper two-thirds. The headline 'MEP engineering at full speed' sits below the stack in a condensed serif, with a one-line grey subhead. No hero button; the only CTA is the blue 'Book demo' pill in the nav. A logo marquee of engineering firms runs along the bottom; a cookie dialog covers the lower right. Nav: pill-shaped wordmark, a centred pill with Product, Company, Security. Operated the first FAQ item ('What happens when the models change?'): the plus became a minus, aria-expanded flipped and a five-line answer expanded beneath; URL unchanged. On load about 50 animations ran: the h1, hero images and marquee slots; after scrolling 8 were still running (marquee and image animations). In the full-page capture the stats, FAQ and security sections rendered blank, consistent with scroll-triggered reveals. With reduced motion zero animations ran and the top screen was static.

Transfer: A single abstract object (stacked floor plates) can stand for the product category without a screenshot, if the headline directly beneath names it. Mark product maturity on the page itself (LIVE, ETA 2027, to be announced) so the roadmap is honest and the scope is clear. Keep one accent colour for one action: when only 'Book demo' is blue, the eye finds the conversion path on every screen. Show feature UI as dark mocks inside bordered cards so the product reads as part of the page's surface rather than a pasted screenshot.

Avoid/limit: No hero CTA and no hero product shot; grey-on-black copy is hard to read; the cookie dialog collides with the headline on mobile; scroll-reveal sections render empty in static captures and for readers who scroll fast; the serif is used only for titles, so the type system leans on two families plus mono.

Measured 2026-10-19: desktop h1 72px, weight 400, tracking -0.02em; body 16px; 8 sections; phone h1 40px.

On phones: Nav keeps the blue 'Book demo' pill beside a hamburger; the centred link pill disappears. The isometric stack shrinks to fit and the headline wraps to two lines at 40px, partly hidden by the cookie dialog. Discipline cards, feature cards and FAQ become one column; stats stack vertically over a dark photo. Page height grows from 7498 to 9141px.

## Reflection AI · canvas-first

https://reflection.ai · desktop-mobile-audit

A warm-neutral research-lab page whose hero is a slowly drifting dot-matrix canvas with a light serif announcement headline centred inside it.

Observed: A floating rounded nav bar (logo, five text items, an outlined 'Get in touch' pill with a dot) sits over an off-white field. The whole first screen is a canvas of olive-grey dots forming nested rings and arcs; centred in it are a three-line serif h1, a one-line sans subhead, and two pill buttons, dark 'Try it now' and outlined 'Learn more', each ending in a small dot. No image, product or logos appear in the first screen. Operated the 'Beam' nav item: a click only toggled a small dot before the label (aria-expanded stayed false); hovering set aria-expanded true and dropped a full-width panel with five links (Model card, API, Documentation hub, Weights, Learn more) and a 'Try Beam today' card. The hero dot canvas drifts continuously (about 46k pixels changed in 1.5s). With reducedMotion 'reduce' the canvas was static between captures but still re-drew when the pointer moved; the measurement record notes a reduced-motion rule.

Copy: h1: "Introducing Beam: Reflection's 501B open-weight model". Primary action: "Try it now" with "Learn more" beside it. The first screen offers no proof beyond the parameter count in the headline; partner logos (AWS, NVIDIA, Modal, Nebius and others) appear several screens down.

Transfer: Use a generative canvas as the hero's only image when the product is abstract, but keep text contrast independent of it. Lead the homepage with the current release as the headline so the page doubles as the announcement. Build the palette from one warm neutral, one dark and one bright accent, and let repeated motifs (dots, circles) do the branding. Put secondary actions (weights, API, docs) in the nav menu panel rather than crowding the hero.

Avoid/limit: No product or proof in the first screen; menus require hover; the dot canvas keeps moving unless reduced motion is set; partner logos are muted to near-invisibility; the page's section labels ('Solutions' used for both a section and a card) repeat.

Measured 2026-10-20: desktop h1 57px, weight 350, tracking -0.045em; body 16px; 6 sections; phone h1 36.5px.

On phones: The floating nav keeps its rounded bar with logo and a dot-grid icon; the canvas persists behind a three-line 36.5px h1 and stacked full-width pill buttons. Solution cards stack one per row; 'Build with Beam' places the dotted figure above the text; partner logos drop to two columns; the stippled image becomes a tall card with the quote overlaid; conviction cards become icon-left rows; the olive panel keeps its three photo circles below the 'Join us' button; footer columns collapse into accordion rows ('Company' open, 'Connect with us' and 'Legal' closed).
