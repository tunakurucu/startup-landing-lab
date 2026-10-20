# Hero artifacts observed

First-screen artifacts from the 94 records in `research/sites.json` (one browser, one date each), grouped by what the artifact is. Pair with [product storytelling](product-storytelling.md) and [motion and responsive](motion-and-responsive.md). Counts are records whose observations fit; "below" marks an artifact under the first screen. Across 8 records (Vercel, Modal, Supabase, Elyra, Sparkles, Runway, Traverse, Known) the first screen shows no product, and the record lists that as a risk.

## 1. The real thing, operable (7 records)

A working component, search or catalogue; the first pointer action yields a result. For SDKs, canvas tools, search and marketplaces with real supply.

- tldraw (canvas-first, 2026-10-20): drag with the preselected draw tool; a stroke appears and undo activates.
- mmm.page (canvas-first, 2026-10-20): click EDIT; the page enters edit mode with the real tool palette and no login prompt.
- snag (functional-entrance, 2026-10-19): click "add dates"; a calendar opens over real priced listings.
- 21st (functional-entrance, 2026-10-19): click a category pill; the live component previews swap.
- Also CodeWisp (next-showcase arrow), FLORA (a draggable node graph whose connector re-routes, below), Onlook (failed).

Proof: inventory or output exists before any claim ("the first click is already browsing", 21st). Mobile: tldraw puts the canvas first with five tools; snag stacks labelled fields over a full-width button; FLORA stacks the nodes; mmm.page keeps the desktop sidebar and shrinks the canvas (a recorded risk). Fails: a scene that never loads (Onlook, "Error loading scene"); a page that errors on scroll (21st); a loading layer that swallows clicks (CodeWisp); an empty canvas until someone draws (tldraw).

## 2. A request box with modes (6 records)

A prefilled prompt whose modes are the product's verbs, with the output shape beside it. For APIs and generation tools where one input starts the product.

- Firecrawl (functional-entrance, 2026-10-18): click Scrape; the preview shows structured output.
- Context.dev (functional-entrance, 2026-10-19): click Scrape; the tab expands with a tooltip and the placeholder restarts.
- Pitch (functional-entrance, 2026-10-20): a box prefilled "Generate a sales presentation…"; not submitted.
- Also Retool ("Starter prompts" did not open), Dia and Framer (an empty field, a paused video).

Proof: input and output shape both visible (Firecrawl); Retool's risk is a prompt that "produces nothing until sign-up". Mobile: Context.dev drops the box ("losing the page's strongest proof"); Pitch swaps it for signup buttons. Fails: placeholder typing under reduced motion (Context.dev); boxes that are pictures (Dia, Framer).

## 3. Install command, code or copyable prompt with a switch (10 records)

The exact command or snippet, a copy button and one switch (OS, language, agent/MCP/npm). For anything developers install or hand to a coding agent.

- Prized (expressive-world, 2026-10-19): click "on Windows?"; curl becomes PowerShell.
- Rive (typographic-technical, 2026-10-20): click Windows in the CLI panel; the command changes.
- Airweave (typographic-technical, 2026-10-19): click cURL in the hero code panel; the snippet changes.
- AgentPhone (workflow-theater, 2026-10-19): Copy Prompt with an AGENT/MCP/NPM switch; a Node tab swaps install line and sample together.
- Also tldraw, Canary, Clerk, Browserbase, FLORA ("Copy setup prompt"), Resend.

Proof: "the claim can be checked in seconds" (tldraw). Mobile: Prized wraps the command with a backslash; AgentPhone's code clips at the edge. Fails: a copy control nobody verified (Browserbase); no action besides the copy, which "can stall non-developer evaluators" (Clerk).

## 4. A scripted session that runs on its own (12 records)

The product mid-task with time passing: typing, a timer, states changing. For agents, APIs and workflow SaaS whose value is a sequence.

- AgentPhone (workflow-theater, 2026-10-19): a call card whose timer advanced, with waveform and cycling captions.
- Attio (workflow-theater, 2026-10-20): the workspace typed a question, then showed "AI is thinking…".
- Paper (workflow-theater, 2026-10-20): a terminal in an editor window typed "build my playlist screen with real data" and listed tool calls; under reduced motion it loaded finished, with the built page.
- Vanta (editorial-platform, 2026-10-20): a frame at the fold ran "Connecting AWS…", a remediation card and an advancing checklist.
- Also Ramp ("MATCHING TO P.O." to "MATCHED"), Granola, Railway, Warp, LightSprint (hero); Drafted, Hotbox, Andera (below).

Proof: a named artifact moving through real states (AgentPhone), each resting frame meaningful alone (Railway); Warp's squares "signal activity without showing what a task is". Mobile: Railway removes the window ("leaving only the slogan"); Granola and Ramp move the mock below the form; Vanta's frame shrinks to "unreadably small text". Fails: across 8 records (AgentPhone, Attio, Granola, Drafted, Hotbox, Andera, Ramp, Vanta) motion ran under reduced motion, or the panel was empty instead of still (Ramp); only Paper showed the finished state.

## 5. A working-state window (10 records)

One static screen at a meaningful moment, directly under the headline. For B2B tools whose interface is recognisable work.

- End Close (workflow-theater, 2026-10-19): a matching table (24 / 14 matched / 10 unmatched) with an "Agent resolved · EXC-004" toast.
- Interfere (workflow-theater, 2026-10-19): an incident workspace with inbox, timeline and code finding; not operated.
- Harvey (editorial-platform, 2026-10-20): a full-width "Command Center" dashboard, so "the first scroll lands on product".
- Whimsical (editorial-platform, 2026-10-20): a real "Implementation planning" board, cut by the fold, inside a painted landscape.
- Also Linear, Cursor, Copperlane, Excalidraw, Krea, Andera.

Proof: the exception being resolved, not the dashboard (End Close: a toast "carries the AI claim more credibly than a slogan"). Mobile: Copperlane shrinks it to a small card; Andera's is "scaled down rather than recomposed"; Cursor's and Whimsical's are cropped at the right edge. Fails: drawn controls that do nothing (Cursor's file tab; Linear: "a rich hero can imply more interactivity than exists"); "nothing on the page lets a visitor try the canvas" (Whimsical); dense UI unreadable at 390 (Harvey).

## 6. The artifact your users' customers see (5 records)

The booking page, docs site, sign-up form or finished document the product makes for someone else. For scheduling, documentation, auth, writing and design tools.

- Cal.com (workflow-theater, 2026-10-20): a recreated booking page with duration chips and a month grid.
- Mintlify (editorial-platform, 2026-10-20): a docs-site mockup bleeding off the right edge.
- Clerk (workflow-theater, 2026-10-20): the real "Create your account" card between faded sign-in and profile cards.
- Also Dia ("Sarah's Week Recap", below), Figma (a collage of finished design work).

Proof: "visitors judge the output instead of reading claims" (Cal.com); "finished artifacts rather than the interface mid-task" (Dia). Mobile: Cal.com and Clerk stay cropped at the right edge; Dia becomes artifact-then-caption pairs. Fails: an artifact that looks operable and is not (Cal.com's chips and dates changed nothing; its rule: respond locally or mark it as an illustration).

## 7. Sample output you can switch or play (7 records)

Real outputs (clips, voices, images, screens) behind a selector or scattered as a collage. For media generation, voice, avatar and app products.

- Palette (expressive-world, 2026-10-19): select the Ink bloom clip; footage and headline verb change.
- Keyframe Labs (typographic-technical, 2026-10-19): a framed avatar video; a capability click swaps the panel to a latency chart.
- ElevenLabs (editorial-platform, 2026-10-20): playable voice orbs; the ElevenAgents tab never switched in four attempts.
- FLORA (canvas-first, 2026-10-20): generated fashion and product images, one marked "made in FLORA", scattered on the product's dot grid.
- Also Oasiz (screens cycling in a phone frame), Rive (tiles, blank here), Nori (task media black).

Proof: "samples... instead of a feature list" (ElevenLabs); "quality is shown before any claim" (FLORA); evidence "only when its media actually plays" (Nori). Mobile: ElevenLabs shows one orb with neighbours peeking; Rive turns the column into a row; FLORA's images crowd the edges. Fails: across 6 records (Keyframe "VIDEO PLACEHOLDER", Rive, Nori, Palette, Figma, Phantom's hero that "rendered flat grey") media did not play; auto-advance ignoring reduced motion (Oasiz).

## 8. One selector, one evidence panel (15 working, 10 failing)

Tabs, steps, cards or a role dropdown where each choice replaces the artifact. For suites, multi-step workflows and pages serving several buyers.

- Toothy AI (workflow-theater, 2026-10-19): click Billing; the verification timeline becomes billing tasks and aging tiles.
- Tailscale (editorial-platform, 2026-10-20): click a product card in the first screen; the panel changes heading and accent.
- Webflow (editorial-platform, 2026-10-20): choose "design teams" in "What [marketing teams] love about Webflow"; the proof cards swap.
- PostHog (expressive-world, 2026-10-18): click a story tab; story and sample reports change; a pause control present.
- Also Sherpa (hero); Clay, Marble, Hotbox, End Close, Andera, Browserbase, Harvey, Supabase, LightSprint, Keyframe Labs (below).

Proof: "switching tabs visibly changes the evidence, not only the caption" (Marble); Copperlane's role tabs changed one sentence, and Deel's task tiles changed only themselves ("the visitor sees no result from the selection"). Mobile: Marble unrolls tabs into stacked sections; Tailscale reduces cards to chips; Harvey expands every item; Clay's tab row scrolls sideways. Fails: scroll moving the selection away from the click (Marble, Keyframe Labs, LightSprint, Canary, Harvey, Railway, Runway); clicks before load (Sparkles, Button Computer, Supabase); dead tabs, listed at the end.

## 9. Before/after, reveal or recomputing chart (5 records)

A handle, toggle or peel the visitor moves to see the change. For substitutions and cost or capacity claims.

- Atomarine (immersive-editorial, 2026-10-19, below): drag the handle; the reactor vessel fills the frame over the LNG carrier.
- Sherpa (workflow-theater, 2026-10-19): click the peel corner; an agent basecamp appears and the label becomes "Return to the website preview".
- Neon (typographic-technical, 2026-10-20, below): click "Save costs"; the outage chart becomes one chart with an 80% savings callout.
- Also Imperfect (scenario cards drawn in on scroll), screenpipe (a with/without toggle that changed nothing).

Proof: "the visitor performs the change themselves" (Atomarine); one dataset for two motives (Neon). Mobile: Imperfect's grid becomes a swipe carousel; handles not described at 390. Fails: reveal sections blank for fast scrollers (Atomarine, Imperfect); dead toggles (screenpipe); estimates shown as measured (Cactus: assumptions beside the output).

## 10. Live-looking numbers (6 records)

Tickers, counters and feeds standing in for an interface. For trading, infrastructure and agent products whose value is activity.

- Arbital (expressive-world, 2026-10-19): a ticker, trade toasts and split-flap counters over a dotted chart.
- Mintlify (editorial-platform, 2026-10-20): an "Agent traffic" chip whose figure differed between loads.
- Ramp (workflow-theater, 2026-10-20): a changing percentage and an "Agents at work today" ticker.
- Also Hedge (coverage-class ticker), Browserbase, Warp (counters).

Proof: only with a visible source and time basis; the records could not tell live from simulated (Arbital), and counters "invite scrutiny without a visible source" (Mintlify). Mobile: Arbital stacks the counters. Fails: placeholders ("000,000", Browserbase; "0+", Railway); motion under reduced motion (Arbital); ticker absent under reduced motion (Ramp).

## 11. A rotating word in a fixed frame (4 records)

One headline slot cycles; the sentence stays. Notion (editorial-platform, 2026-10-20): a verb chip cycled Scale, Ship, Think, Jam, Create, and held one word under reduced motion. Canary (typographic-technical, 2026-10-19): the agent name rolled between Claude, Codex, Cursor and Copilot. Normal (typographic-technical, 2026-10-19): the industry word changed. Palette (expressive-world, 2026-10-19): the verb changed with the selected clip. A claim, not evidence; it earns its place when tied to an artifact that changes with it (Palette). Fails: "a glance or a screenshot can catch a different claim each time" (Notion).

## 12. The product in a scene (15 records)

A render, photograph or footage of hardware doing the job, or software staged in a real place. For hardware, robotics, energy, devices and consumer software.

- Button Computer (immersive-editorial, 2026-10-19): video of the device clipped to a collar; under reduced motion the frame held still.
- Daylight (immersive-editorial, 2026-10-20): the tablet lying on grass; scrolling the pinned hero turns the scene to night with an amber screen.
- Gravis Robotics (immersive-editorial, 2026-10-19): field footage of an excavator with a pause button.
- Superhuman (immersive-editorial, 2026-10-20): product cards (a chat booking a meeting, an inbox) over a sky video.
- Also Applied Electrodynamics (render, then a scroll-scrubbed canvas), Atomarine, Nori, Voltair, Clair Health, Cyclon (renders); Opal Electronics (the prototype table under a dated letter); Sierra, Krea, Deel, HeyClicky (software staged on footage, a monitor, a photo, macOS chrome).

Proof: scale and use in the first frame ("show it worn and in use", Button Computer); the signature mode "demonstrated rather than listed" (Daylight); price and shipping beside the action (Nori). A render with capability statements "is not evidence of a functioning device" (Cyclon). Mobile: portrait recrops (Atomarine loses its full-width edge); Superhuman removes the cards; Krea's monitor is cropped out; Opal moves text blocks around the objects. Fails: media that never plays (Nori, Daylight); a canvas blank in static capture with no reduced-motion fallback (Applied Electrodynamics); hero video still playing under reduced motion (Atomarine); four overlays stacked around the product (Daylight).

## Decision guide

| Product type | Patterns supported | The deciding question |
| --- | --- | --- |
| Developer tool, SDK, API | 3 (Prized, Rive, Airweave), 1 (tldraw), 2 (Firecrawl, Context.dev) | Can the visitor get a result without an account? Yes: 1 or 2. No: 3, result beside the command. |
| Workflow SaaS | 5 (End Close, Harvey), 4 (Attio, Vanta), 8 (Toothy AI, Marble) | One state or a sequence? One state: 5, exception resolved. Sequence: 8, one artifact per step. |
| Consumer app | 1 (snag, CodeWisp, mmm.page), 7 (Oasiz), 12 (HeyClicky) | Content or experience? Content: the catalogue or the page itself is the hero. Experience: real screens in a device frame, one store action. |
| Hardware | 12 (Button Computer, Gravis Robotics, Daylight), 9 (Atomarine) | Doing the job, or only its form? Footage or a state change first; a render alone needs proportionate claims (Cyclon) and price beside the action (Nori). |
| Marketplace | 1 (snag, 21st), one metric per shelf (snag) | Is supply real today? Yes: render real items. No: never stage or invent listings. |
| Platform, multi-product | 8 (Tailscale, Webflow, PostHog), 7 (ElevenLabs), 4 (Ramp) | Do buyers know which product they want? Yes: a selector in the first screen. No: one worked example (Harvey), selector later. |

## Controls that did nothing

Across 15 records a control was operated and nothing useful changed in the 1 to 10 s waited: Cal.com ("1h" chip, a date), Cursor (file tab), Clerk (Multi-tenancy tab), Railway (Evolve), ElevenLabs (ElevenAgents), Runway (Robotics), Framer (terminal tab, hero tile, Platform menu), Context.dev (Python tab), screenpipe (with/without toggle), Prized (tabs under an overlay), Retool ("Starter prompts"), Krea (carousel arrow), Canary (tabs that did not hold), Raycast (a button missing after hydration), Deel (a task tile that ticked itself and nothing else). Four causes recur: a mock drawn to look interactive (Cal.com, Cursor); state also driven by a timer or scroll, so the click is overridden (Canary, Railway, Runway, Marble); a control that mounts late or sits under an overlay (Supabase, Sparkles, Button Computer, CodeWisp, Prized); a selector wired to nothing (Deel).

Rule: every hero control changes something visible within 300 ms of the click, or it is removed. The change is in the artifact, not a hover or a caption. If scroll or a timer also drives the state, a click wins and stops the timer, with a pause control shown (Harvey, PostHog). A control that cannot respond before scripts load is not drawn until it can. A static mock carries no chips, dates, tabs or inputs; if it must, it is captioned as an illustration (Cal.com). See [anti-patterns](anti-patterns.md): "Beautiful control does nothing".
