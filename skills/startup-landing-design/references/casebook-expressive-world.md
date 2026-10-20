# Casebook: expressive-world

## Railway · expressive-world

https://railway.com · desktop-mobile-audit · **reference tier**

An illustrated night-sky railway world—track rail, departure board, 'All Aboard'—wraps scripted product-canvas demos, so infrastructure reads as calm rather than technical.

Observed: Under a dark nav, an inset rounded panel holds an illustrated night sky with stars and pink-lit clouds. Centered: serif h1, one-line subhead, a purple 'Deploy →' and a dark 'Agents' button. Beneath sits a large product window ('New Project' dialog, later a service canvas) with a stage bar—Deploy, Network, Scale, Monitor, Evolve—over painted mountains and a bullet train; a 6×2 logo grid closes the panel. Clicked 'Evolve' in the hero's stage bar: no visible change within 2 s (an earlier attempt timed out waiting for the bar to settle). The bar advanced on its own—'Network' and 'Scale' were highlighted at different times as the window switched scenes. Section canvases rebuilt with new project names; a pointer opened a dropdown in the dashboard mock; the stats heading read '0+' in a live frame ('220.4M+' in the measurement capture) and the split-flap board filled in from blank tiles. Reduced motion: sampled frames still.

Copy: h1: 'Ship software peacefully'. Subhead: 'With the all-in-one intelligent cloud provider', with 'intelligent' underlined. Primary button 'Deploy →', secondary 'Agents'; the nav adds 'Book a demo'. The category is named as 'cloud provider'. Competitors are named through each chapter's 'Alternative to' logos and the footer's Compare column (Heroku, Render, Fly.io, Vercel). Proof uses counts ('220.4M+ deploys per month', 'Join 2M+ developers').

Transfer: Build one metaphor into the structure—progress rail, departure board, boarding call—so brand elements also mark navigation and proof. Give every feature chapter the same frame (label, statement, live-looking demo, three features, 'alternative to' row) so a long page stays scannable. Name the incumbents you replace in line so evaluators can map the product to tools they already use. Animate product mocks to show state changes (build, alert, scale), but make each resting frame meaningful on its own.

Avoid/limit: Illustration and staged demos load late: early frames show a flat panel, an empty dialog and placeholder nav. The mobile hero removes the product entirely, leaving only the slogan. Chapter demos move on their own, so a reader can miss the state being explained, and the stage bar looks interactive but did not respond.

Measured 2026-10-20: desktop h1 54px, weight 500, tracking -0.036em; body 18px; 4 sections; phone h1 40px.

On phones: Nav collapses to logo and a menu icon. The hero drops the product window: serif h1 (40px), subhead, two buttons, then a 2×3 logo grid inside the sky panel. Each chapter becomes a stacked card—label, serif head, a reduced canvas thumbnail, features listed vertically. Customer quotes stack; developer posts become a sideways card row; the stats board crops at both edges. Page grows to 13,351px (measured).

## Browserbase · expressive-world

https://www.browserbase.com · desktop-mobile-audit · **reference tier**

Dithered pixel-art landscapes and orange highlight-block headings give an invisible browser-infrastructure API its own world, with an interactive ecosystem diagram explaining the product.

Observed: A sticky white nav (orange 'B' logo, five links, 'Log in', 'Sign up', black 'Get a demo') sits above a framed hero panel: pale blue dotted ground with a dithered pixel-art mountain range in orange, yellow, green and black. The heading is centred in two orange highlight blocks with white text, followed by a two-line subhead and two pills, black 'Get API key' and pale 'Setup for agents' with a copy icon. The logo-row heading shows below the panel within the first screen. Operated: the 'Extract structured web data' tab on the ecosystem diagram. The highlighted arc moved round the ring, the centre title changed from 'Research at web scale', a different set of capability chips lit up, the right-hand output switched from browser windows ('Running 128 browsers…') to a code panel with a JSON skeleton, and the left source tiles changed. Two first-screen captures 1.5 s apart were identical. Counters showed placeholder zeros ('000,000') in captures. Reduced motion: no visible change; the measurement records a reduced-motion rule.

Copy: Hero heading: 'Give your agents access to the whole web.' Subhead: 'Browserbase makes the web as reliable and programmable as APIs'. Primary button: 'Get API key' (secondary 'Setup for agents'; nav 'Get a demo'). The audience is builders of AI agents: headings address 'your agents' and claim 'Anything you can do in a browser, your agent can too.' Use-case cards end in monospaced 'GET STARTED ▶' links.

Transfer: An infrastructure product with no interface to show can own a recognisable look by applying one illustration technique consistently across hero, diagrams and step cards. Make the architecture diagram switchable by job (research, extraction, form filling, testing) so each scenario lights up the capabilities and output it uses. Give the hero one action per audience: an API key for developers and a setup action aimed at agents. Monospaced micro-labels and highlight blocks can give a developer page texture without adding more imagery.

Avoid/limit: With no h1 the main claim is weaker for assistive technology and search. The imagery is decorative and says little about how the API works until the diagram section. In automated captures counters showed zeros and media slots were blank, which reads as broken if animations or videos fail. White text on bright orange blocks is a contrast risk.

Measured 2026-10-20: desktop h1 Nonepx, weight None, tracking Noneem; body 20px; 10 sections; phone h1 Nonepx.

On phones: The hero heading shrinks to 21px highlight blocks; the pills stack vertically and the landscape compresses into a short strip. Logos become a two-column grid with play triangles. The API list, use-case cards and three steps stack single-column with tall blank media slots between them. The pixel computer moves under its text. The 'Don't use the web' mountain does not appear in the capture. The footer reflows to two link columns with the large 'B' at the bottom.

## Phantom · expressive-world

https://phantom.com/ · desktop-mobile-audit · **reference tier**

A consumer-app page built from three chapters (trade, move money, stay secure), each a headline with the ghost mascot set inline and a one-sentence card carousel.

Observed: A lavender page with a floating white nav pill (Features, Learn, Explore, Company, Developers, Support), a round search button and a lavender 'Download' pill. Below, a large rounded panel holds centred white text: eyebrow 'Where the world trades', a three-line h1 and a pale 'Download Phantom' pill with a phone icon. The panel is a video element that never loaded here and rendered flat grey. A cookie banner covers the lower right. Clicked 'Next slide' on the Trading carousel: the row shifted one card, so 'Buy and sell all types of crypto in an instant.' left the view and 'Go long, go short, go anywhere with Perps.' entered at the right. Scrolling changed the page ground colour per chapter. No CSS animations ran on load or scroll and every video stayed unloaded, so media motion was not seen. Reduced motion: no running animations and identical frames, the same as the default load here.

Copy: H1: 'Your home for trading crypto, predictions, perps, and more'. Eyebrow 'Where the world trades'; no subhead paragraph. Primary button 'Download Phantom'. The category is named directly as trading crypto, predictions and perps; the audience is 'everyone'. Proof is one number: 'Trusted by a community of 20+ million users. It's more than a wallet.' Cards hold one sentence each, e.g. 'Self-custodial means you control your funds. We never have access.'

Transfer: Set the mascot inside the headline as a glyph so brand character recurs in every chapter without separate illustration. Organise a broad app into three verb-led chapters (trade, move money, stay secure), each a headline plus a swipeable row of one-sentence cards. Change the page ground colour per chapter to mark topic shifts without dividers. Give trust a single plain number ('20+ million users') right before the final download call.

Avoid/limit: Nearly every proof surface is video, so when media fails the hero becomes a grey block with low-contrast white text and the cards become empty colour slabs. Section h2s outsize the h1, flattening the outline. One-sentence cards trade depth for brevity, and fees and risk appear only in small italic legal text near the footer.

Measured 2026-10-20: desktop h1 80px, weight 400, tracking -0.025em; body 20px; 6 sections; phone h1 29.3px.

On phones: The nav reduces to the ghost logo, a 'Download' pill and a 47px round menu button. The hero keeps its rounded panel with the h1 on three lines at 29.3px. Each carousel shows one full-width card with the next one peeking at the right edge, arrows above the row. Footer link columns become a two-column grid. Page height 7,228px versus 8,075px on desktop.

## Clay · expressive-world

https://www.clay.com/ · desktop-mobile-audit · **reference tier**

A handmade claymation toy world brands the page, and each product chapter gets its own colour, 3D object and named customer result, with use-case tabs swapping product mocks.

Observed: The upper two-thirds is a full-bleed claymation-style scene of green hills, trees and toy machinery (funnel, magnifier, seesaw, coiled tube, block bar chart, mailbox) with coloured balls. A lower dark-green band holds a large white two-line h1 at left; at right a three-line subhead, a white 'Start free trial' button, a lime 'Get a demo' button and 'or install directly with' three AI-app icons. A floating white nav has ⌘K search, Log in, Get a demo and a black Start free trial. Clicked the 'Lead Scoring' tab: it turned purple and centred in the row, the subhead changed to 'Prioritize the highest-converting leads using real-time intent and engagement signals.', and the mock swapped from a demo-form table with an email preview on lime to a lead-scoring table, 'Lead Score Formula' panel and 'Sample Outputs' on purple. The customer grid drifted left on its own, and the prompt placeholder showed different text across captures. No CSS animations ran; the hero video did not load. With reduced motion the customer grid stayed still.

Copy: H1: 'Build systems to grow revenue'. Subhead: 'Infrastructure to get any data, run agentic workflows, and launch GTM plays.' Primary button 'Start free trial'; secondary 'Get a demo'. The audience is named as 'GTM engineers' and the field as 'GTM engineering'. Each chapter carries one named customer result; the named customers differed between loads (e.g. Rippling, Mistral AI, Intercom). The closing CTA adds 'Start for free today. No credit card required.'

Transfer: Give each product module its own colour, label pill and physical object, and reuse that colour in its heading, button and proof, so a long platform page reads as distinct chapters. Make the use-case selector a tab row that swaps both the one-line promise and the product mock, so each buyer sees their own workflow in one click. Attach one named customer and one number to every chapter instead of relying on a single logo wall. Carry one illustration language from hero to footer so the brand world doubles as an icon system for modules.

Avoid/limit: The hero spends two-thirds of the first screen on illustration, so the h1 and buttons sit low and the cookie banner covers them. Ten thousand pixels of dense proof grids and chapters ask for a lot of scrolling; images widely lack alt attributes; proof rotating between loads makes the page's claims inconsistent from visit to visit.

Measured 2026-10-20: desktop h1 88px, weight 575, tracking -0.04em; body 12px; 9 sections; phone h1 41.6px.

On phones: The hero scene crops to a band behind the nav and the 41.6px two-line h1 overlaps its lower edge; subhead and the two buttons stack below. The nav reduces to logo, 'Get a demo' and a menu icon. The tab row scrolls sideways above the mock, and the prompt chips stack vertically. Each chapter becomes label, heading, copy, proof and buttons with its 3D image below. The footer becomes two columns over the ball-pit art. Page height 11,352px.

## PostHog · expressive-world

https://www.posthog.com · partial-desktop

A product suite presented as a place to explore, rather than a stack of interchangeable cards.

Observed: A desktop-like shell surrounds a central window. Navigation icons sit on both sides; the introduction and signup panel share a row. Clicked Ship with PostHog. The selected tab and product story changed, with sample inbox reports replacing the earlier assistant story. A pause control was present but not tested.

Transfer: Give a broad suite a navigable mental model. Let expressive brand elements organize information instead of merely decorating it. Identify illustrative data as illustrative.

Avoid/limit: Desktop chrome competes for attention; nested scrolling needs separate mobile and keyboard testing.

## Palette · expressive-world

https://palettelabs.com/ · desktop-audit

A changing media stage leads into a long, modular explanation of generation, editing and model choice.

Observed: White navigation surrounds a nearly full-viewport dark media canvas. Large white sans type overlays glossy abstract footage near the lower left; purple Book a call and outlined Explore actions sit on the lower right. The short verb in the headline changes with the selected clip. Selected the Ink bloom hero clip. The selected checkbox moved from Oil sheen to Ink bloom, the abstract footage changed from an oil surface to purple-blue ink and the headline changed from educates to sells. The action remained on the homepage; no generation was submitted.

Transfer: Let changing examples demonstrate the range of output without changing the core promise. Use alternating visual and text chapters to pace a broad creative tool. Offer a concrete API example after visual storytelling for technical buyers.

Avoid/limit: A rich media-first pitch loses explanatory evidence when clips fail; some text is placed over moving imagery. The long capability inventory can dilute the primary job for a narrow product.

Measured 2026-10-19: desktop h1 100.8px, weight 600, tracking -0.06em; body 18px; 10 sections; phone h1 48px.

## Pingo · expressive-world

https://pingo.ai/ · desktop-audit

A conversation-first learning story turns a broad language promise into specific short exchanges and a direct app-download action.

Observed: An airy white hero centers Finally. Someone to speak with., a brief learning promise and two store buttons. A small colored mark and blue Get the app action frame the top navigation. Clicked Next languages in the horizontal chooser, then expanded the first FAQ. The FAQ disclosed an explanation and reported expanded state; the chooser was operated but the amount of horizontal displacement was not measured.

Transfer: Show a few realistic exchange fragments to demonstrate an abstract conversational promise. Keep the immediate action aligned with a mobile app. Answer beginner, advanced and voice-data questions near the final download prompt.

Avoid/limit: Conversation snippets are curated examples, not a live product test. The roundup praised the older colorful page; the current site is notably more restrained. User counts and ratings are company-presented claims.

Measured 2026-10-19: desktop h1 46px, weight 400, tracking -0.025em; body 16px; 8 sections; phone h1 24px.

## Cactus · expressive-world

https://www.oncactus.com/ · desktop-audit

A trade-specific revenue story mixes job-site footage, a cactus character and a loss calculator around a demo call.

Observed: A white translucent left panel promises an AI revenue engine built for trades over a rotating job-site video backdrop. The narrow webinar strip and top-bar demo action remain visible. Selected a hero carousel indicator and observed its selected slide change; automatic rotation also advanced the slide during inspection. No call, form submission or calculator assumption validation was made.

Transfer: Use imagery and language from the buyer’s actual work environment. Turn a broad automation promise into missed-call, follow-up and CRM work. Show calculator assumptions beside any output and avoid presenting estimates as measured outcomes.

Avoid/limit: The calculator output and several ROI statistics are company-provided claims; they were not validated. Automatic video and carousel motion can distract and needs separate accessibility review. The older praise was for a prior page snapshot.

Measured 2026-10-19: desktop h1 48px, weight 700, tracking -0.02em; body 19px; 8 sections; phone h1 42px.

## Arbital · expressive-world

https://www.arbital.xyz · desktop-mobile-audit

Market motion is the brand: a dot-matrix headline over a dotted price chart, with a scrolling ticker and flip counters, ahead of a single 'Start Trading' action.

Observed: Centred on a dark navy-to-black ground: the headline 'Trade what's moving.' in dot-matrix letterforms over a faint dotted price chart. Below it sit 'Memes, stocks, and perps in one app.', a blue 'Start Trading' button and 'Backed by Y Combinator'. Trade toasts ('@hannah_ok bought SOL +8.4%') appear at the right. A full-width ticker strip of assets with % changes sits above a three-up row of split-flap counters for volume traded, traded monthly and traders. I clicked FAQ item 02 'Are the stocks real stocks?'. Its answer expanded and item 01 collapsed, with the +/× icons swapping. On load the ticker scrolled, trade toasts appeared, the chart backdrop shifted and counter digits flipped; the trader count read 2,620–2,623 across loads. The perps ticket switched from BTC to ETH to SOL between frames. Sections below the counters rendered only after scrolling. Under reduced motion the ticker held still, but the chart backdrop and counters still changed, with 2,118 running animations reported at load.

Transfer: For a product about live data, let a few real-looking feeds (ticker, counters, activity toasts) carry the visual identity instead of illustration. Give each product line one sentence and one artifact (token list, world map, order ticket) so a multi-market app reads as distinct, concrete choices. Use a split-flap or monospaced counter for traction numbers so they read as instruments, not marketing claims. Close with an FAQ that answers custody and 'is it real' questions before the final CTA.

Avoid/limit: Motion runs even under reduced motion, and the headline is set in a less legible dot-matrix form. Content that renders only on scroll leaves full-page captures, previews and some readers with a large blank page. Counters and toasts give no source or time basis for the numbers.

Measured 2026-10-19: desktop h1 16px, weight 400, tracking 0em; body 14px; 0 sections; phone h1 16px.

On phones: The nav, X and Discord buttons collapse to a hamburger. The dotted chart moves above the headline instead of behind it, and the largest text drops to 32px. The ticker shows about three chips. The three counters stack vertically. The footer stacks links, socials and legal lines, with a smaller outlined wordmark. Mid-page sections were blank in the stored 390 capture and were not seen live on mobile.

## HeyClicky · expressive-world

https://heyclicky.com/ · desktop-mobile-audit

The whole homepage is staged as a macOS desktop: a menu-bar nav, scattered .mov windows, folders and stickers around a lowercase wordmark.

Observed: A macOS-style menu bar serves as nav: text links left, a logo glyph centred, Wi-Fi, battery and clock icons plus a blue 'get heyclicky' link right. The centred lowercase wordmark h1 and 'an ai buddy that lives on your mac' sit above two pill CTAs, 'download for mac' and 'windows waitlist'. Around them float window-framed video thumbnails labelled as .mov files, folder and trash icons, name-tag stickers and kaomoji, over a dotted grid. A large hello.mov video with 'play video' starts at the fold. Operated the pricing monthly/yearly tab: selecting 'yearly' changed pro from $20 to $16 and max from $100 to $80, added 'save $4/mo' and 'save $20/mo' badges and switched captions to 'billed yearly'. In my normal load, two top-of-page frames 1.5s apart were identical and the page reported 9 running animations. Under reduced motion every video element reported paused at 0s and one animation was still running.

Transfer: If the product lives inside a familiar operating environment, borrowing that environment's chrome can explain where it runs before any copy does. Keep one conversion action legible against a busy, collectable field by giving it the strongest colour and the centre of the composition. Reuse a single framing device (here, window chrome) across video, testimonials and pricing so a dense page still reads as one system. Put plan toggles next to the price numbers they change, with the saving stated in the card.

Avoid/limit: The scattered objects compete with the value proposition, and the h1 carries only the name, so the product claim rests on a small subline. Pale grey body text and tiny window controls trade legibility for atmosphere. '100% free' under the download button sits awkwardly beside $20 and $100 paid tiers lower down.

Measured 2026-10-19: desktop h1 88px, weight 500, tracking -0.03em; body 16px; 6 sections; phone h1 56px.

On phones: The menu bar drops its text links and status icons, keeping the logo glyph, 'get heyclicky' and an icon button. Most floating windows disappear; a few stickers and folders remain, clipped at the edges. CTAs stack full width, h1 drops to 56px, each feature's text stacks above its video, pricing cards stack, and the footer becomes two columns. Page height grows from 7,767px to 9,004px.

## Imperfect · expressive-world

https://imperfect.co · desktop-mobile-audit

A torn-paper, cut-out-athlete collage world carries the brand, while the product shows up only as small schedule miniatures inside dark cards.

Observed: Split first screen on white: a large three-line headline "For the imperfect ones." bottom left, a short subhead, paragraph and orange "Talk to your coach" pill in the middle column, and a cut-out runner over overlapping torn-paper and translucent colour shapes on the right. A smaller collage and a thin orange line motif bleed off the top-left corner. Nav is a script-style wordmark plus four text links, no nav button. Operated the FAQ item "Do I need a watch?": the plus became an ×, aria-expanded went true and a short answer opened below. Nothing moved in the first screen on load. On scroll, the navy scenario cards appeared one after another with their diagrams drawing in; at about 1.5s the fourth card was still faint. With reduced motion, all four cards were fully rendered on arrival and I saw nothing move.

Transfer: Let one tactile illustration system (here torn paper and cut-out athletes) carry the brand so product screenshots can stay small and diagrammatic. Explain an adaptive product with before/after scenario cards that show the plan changing, rather than feature lists. Put the emotional promise in the headline and the literal category in the subhead directly beside it. When content animates in on scroll, make sure the reduced-motion and static states render every card fully.

Avoid/limit: The coach itself (the AI conversation) is never shown at full size, so the product's core interaction is left to imagination. Scroll-entrance cards are empty until triggered, which shows in static captures and possibly for fast scrollers. 12px mobile body text is small for the main explanatory copy.

Measured 2026-10-19: desktop h1 96px, weight 500, tracking 0em; body 18px; 6 sections; phone h1 40px.

On phones: The hero recomposes: collage and runner move above the headline, which drops to 40px on two lines with copy and CTA beneath; nav collapses to a hamburger. Benefit cards stack with alternating offsets. The scenario grid becomes a swipe carousel with four dots, sport cards scroll sideways with the third card cropped at the edge, FAQ becomes one column, and the app band shows store badges without the QR code.

## Sparkles · expressive-world

https://sparkles.dev · desktop-mobile-audit

A cast of hand-drawn shape characters carries the brand, while plain UI mocks below explain how agents turn requests into pull requests.

Observed: A 56 px nav (logo, four links, Sign in, Book a demo) sits over a thin 'Backed by Y Combinator' strip. The hero is split: centred serif headline, three-line subcopy, Sign in and Book a demo buttons, 'Free to start' note and greyed trusted-by logos on the left; a grid of thick-outlined coloured shapes with cartoon eyes fills the right half. A consent dialog overlays the lower centre of the first screen. Operated the pricing Monthly/Annual toggle. After full load, choosing Annual flipped aria-checked and the Credits card changed from '$50.00 / month, 500 credits every month' to '$500.00 / year, 2 months free, 6,000 credits granted up front'; an earlier click before the page finished loading changed nothing. The first screen did not change across a 1.5 s frame comparison; my probe counted 10 running animations. Under reduced motion: 1 running animation, all video elements paused, but a frame comparison after scrolling still differed.

Transfer: Give an abstract product a recurring illustrated cast so the brand is recognisable before the visitor understands the mechanics. Keep product mocks plain and low-chrome when the brand layer is loud, so the two do not compete. Explain multiple entry points with one convergence diagram (each surface drawn as a mock, joined to a single agent node) rather than separate feature blocks. Put the billing toggle's consequence in the card itself (price, period and credits all change) so the choice is legible without footnotes.

Avoid/limit: Half the hero is illustration that says nothing about agents, sandboxes or pull requests, so the copy carries all the explanation. Sign in and Book a demo appear as equal pairs repeatedly, leaving no single primary action. The persistent consent dialog sits on content, and the mobile page is long.

Measured 2026-10-19: desktop h1 60px, weight 600, tracking 0em; body 18px; 7 sections; phone h1 48px.

On phones: Nav collapses to logo plus hamburger; the YC strip stays. h1 drops to 48 px and the character grid moves below the stacked full-width Sign in / Book a demo buttons, pushing hero height to 1,043 px. Web UI and Slack mocks stack, the integration chips rewrap, pricing cards and toggle stack, the FAQ character illustration is not visible in the 390 capture, and the investor grid becomes two columns. Page grows from 7,385 to 10,490 px.

## Voltair · expressive-world

https://voltairlabs.com/ · desktop-mobile-audit

A full-bleed studio render of the orange VTOL drone carries the first screen; the headline is a short stacked label beside it.

Observed: Full-bleed render of an orange-and-white fixed-wing VTOL drone, nose and camera gimbal toward the viewer, on a soft grey studio ground. Bottom-left: US-flag badge 'Engineered, manufactured, and deployed in America', three-line headline 'Drone / Infrastructure / Layer' with 'Layer' in orange, and 'Built for the grid'. Logo mark top-left, dark pill 'Book a Demo' top-right, orange pill 'Plan Your Mission' bottom-right. No navigation links. The page has no tabs, toggles or inputs; only links. Hovered 'Book a Demo': no visible change in the capture. Zero running CSS animations at load and after scroll. On scroll, the Faraday-1 block was caught mid-fade, and the globe section advanced 01 → 02 → 03: region marker, drone with orange beams, then an orange data card that filled with a line-drawn structure. Hero captures 2.5s apart were identical with and without reduced motion.

Transfer: For physical products, let a full-bleed render of the hardware be the hero and keep the headline to a short category label. Index each product as a numbered system component so a hardware stack reads as one service rather than separate SKUs. Show the operating model as numbered steps on one pinned visual so buyers see how the service runs, not just what it contains. Put named customer logos directly under the hero when the buyer is a regulated utility that buys on precedent.

Avoid/limit: The first screen names a category ('infrastructure layer') but not the job (inspection data for utilities) until the sensor cards. There is no h1 and no text navigation, which weakens structure for assistive tech and scanning. Repeated 'Plan Your Mission' CTAs with no pricing or spec sheet leave little for a technical evaluator to take away.

Measured 2026-10-19: desktop h1 Nonepx, weight None, tracking Noneem; body 16px; 0 sections; phone h1 Nonepx.

On phones: The hero crops to the drone nose and gimbal; the headline drops to 48px and 'Plan Your Mission' becomes a full-width pill under it, with 'Book a Demo' kept top-right. Logos regroup 2×2, sensor cards stack, stat tiles go 2×2, mission lists stack around the line drawing, and the globe steps persist with a narrower globe and the step text below. The footer stacks, moving the wordmark between navigation and the description.

## Prized · expressive-world

https://prized.dev · desktop-mobile-audit

A saturated cobalt brand world, with ASCII art, a split-flap board and a giant clock, shows always-on dev boxes as scenes rather than feature lists.

Observed: A white YC announcement strip sits above a full-bleed cobalt hero. Left: a three-line light-weight headline, one-line subhead, white 'Create my box' and outlined 'Read the docs' pills, a '$30 of credit. No card.' note, and a black terminal chip with a curl install command and copy button. Right: a large cloud drawn in ASCII characters over a dotted field. I clicked 'on Windows?' under the install chip: the command changed to 'irm https://prized.dev/install.ps1 | iex' and the caption to 'Windows PowerShell · on macOS or Linux?'. The dashboard mock's filter tabs could not be clicked; an overlay intercepted pointer events. With motion on, the hero ASCII cloud and the split-flap characters changed between captures, and the clock scene stayed pinned across about 1,800px of scroll. Under reduced motion, paired captures at top and mid-page were identical.

Transfer: Turn each product claim into one memorable scene (a clock, a port board, a sync diagram) instead of a feature grid. Put the real install command in the hero with a copy button and an OS toggle, so a developer can act without leaving the first screen. Build imagery from the product's own medium, here text characters, so the brand and the subject reinforce each other. Gate ambient motion on prefers-reduced-motion so the scenes still read when frozen.

Avoid/limit: Scene-per-section pacing makes a long page (8,845px) with little dense information; the pinned clock scene costs a lot of scroll for one idea. Mock UI that looks clickable but is not may frustrate. Small mono captions on blue risk contrast failures.

Measured 2026-10-19: desktop h1 77.4px, weight 300, tracking -0.035em; body 17px; 8 sections; phone h1 34px.

On phones: h1 drops to 34px over four lines; the YC strip shortens to 'Backed by Combinator'; 'Sandboxes' leaves the nav. The ASCII cloud moves below the install chip, which wraps the curl command with a backslash continuation. Sections stack single-column; the comparison table stays tabular. Measured content width 249px; page 9473px with 9 sections.

## Gutgutgoose · expressive-world

https://gutgutgoose.com/ · desktop-mobile-audit

A DTC product page built on a sky-and-moss photographic world, with a symptom explorer and a comparison table doing the persuasion instead of science copy.

Observed: A dark-green announcement bar ('Take the quiz') sits above a floating nav: a frosted logo pill at left, a frosted five-link pill in the centre, a solid green 'Get Started' pill at right. The hero is a full-bleed blue-sky photograph with a centred white two-line headline, three lines of body, one green pill CTA, and below it a rendered product jar standing on a mossy mound. A 'Backed by Y Combinator' tag and a row of white institution logos (Calico, Johns Hopkins, Oxford, Alphabet, Griffith) sit on the lower edge of the photo. Operated the 'Abdomen' tab in the symptom explorer: the four symptom rows swapped (Bloated, Stomach pain, Food reactions, Feeling sick), the italic quote and explanation changed, and the figure's dark highlight band moved from the head to the torso. Live, 0–1 animations ran at the top but 93–355 were running mid-scroll, matching the measurement's 0 on load / 93 after scroll. The sky band showed a phrase list with one line highlighted. With reducedMotion set, 2–4 animations still ran during scroll; the measurement records no reduced-motion rule.

Transfer: Let the visitor pick their own symptom and watch the page re-explain itself around it; a self-selected path reads as personal in a way a generic benefits list does not. Put the price and guarantee in the second screen so a consumer product page answers 'how much' before the science. Frame against the generic alternative in a plain two-column check/cross table when the category is crowded with look-alikes. Use one deep brand colour for both trust sections (comparison, booking, footer) so the dark panels read as authority rather than mood.

Avoid/limit: Headings are not real headings and controls are not real controls, so screen readers and keyboards get little structure. Hundreds of animations run mid-scroll with no reduced-motion rule. The page is long for a two-SKU store, and mid-word wrapping on mobile shows the copy was not checked at 390.

Measured 2026-10-19: desktop h1 Nonepx, weight None, tracking Noneem; body 20px; 0 sections; phone h1 Nonepx.

On phones: Floating nav keeps the logo pill and a hamburger pill. Hero headline shrinks to fit two lines; the jar sits below the CTA and the logo row scrolls. Product cards stack; the symptom explorer stacks list above figure; the comparison table keeps three columns in a narrow dark panel; science and input cards go to one column; advisor cards stack. Body drops to 18px / 1.5. Page grows from 11315px to 12124px.

## Doomersion · expressive-world

https://doomersion.com/ · desktop-mobile-audit

A giant mascot wordmark and three looping phone screens stand in for any argument; the page has no buttons, only two app-store links.

Observed: No nav. A black ground carries a pink-faced mascot with a blue tuft beside a very large white 'Doomersion' wordmark, a small globe glyph dotting the i. Below, two phone screens flank a centred pink three-line headline 'Learn Languages By Doomscrolling.' and a grey subhead: left a search/explore screen with Spanish cooking videos, right a 'For You' feed with an Arabic transcript panel and a tapped-word definition. A third phone (a Japanese video) begins at the bottom edge. At 1440 the DOM held no buttons, tabs or inputs, only store and footer links, so the one control operated was the 'see how it works' anchor, which is visible only at 390: it scrolled the page one screen (to y=844) to the yellow 'Learn from Subtitles' tile. Measurement reported 0 running animations at 1440 and 11 at 390; live at 390 the eleven language pills alternated between English and native-script labels ('Japanese'/'日本語'). With reducedMotion set only the English labels rendered and the first screen stayed still. Videos did not play in headless Chromium; posters showed.

Transfer: If the product is a feed, show the feed moving in a phone frame and let the screens carry the explanation instead of feature prose. Design the phone layout as its own composition when the product is mobile-only; the first screen should already be the install decision. Pick three or four pastel accents and reuse them identically in the app screens and the page so product and marketing read as one object. A page with no secondary navigation forces one outcome; accept that only when install is the sole conversion.

Avoid/limit: Desktop is served by the same five phone videos with no interaction, no social proof and no way to try anything; large grey bold body copy in a system font and a 29ch measure make the desktop layout feel unfinished next to the mobile one. Autoplaying video posters depend on codec support, and the only CTA is an outbound store link.

Measured 2026-10-19: desktop h1 55.4px, weight 700, tracking -0.03em; body 25.8px; 9 sections; phone h1 32px.

On phones: A different composition rather than a stacked desktop: a small mascot-plus-wordmark header, a cloud of eleven tilted pastel language pills, a white two-line headline, two full-width store buttons and a 'see how it works' chevron fill the first screen. Below, content becomes bento tiles: a yellow 'Learn from Subtitles' tile with a phone video, a cyan '11' tile beside a pink explore-phone tile, a green 'Language Learning Center' tile with two phones, then repeated store buttons and footer. Page height 2710px, measured section count 0.

## Idilio · expressive-world

https://idilio.tv/en · desktop-mobile-audit

A black, app-store-style page that stacks every persuasion device (badge, stars, download counts, posters, five-step walkthrough, team bios, FAQ) and gates entry behind a QR download modal.

Observed: Black ground with a faint purple glow. Left column: a pill badge ('#1 Microdrama app in Latin America · 1.3M+ downloads'), a two-line h1 whose second line is a pink-orange-yellow-green gradient, a paragraph, a purple-ruled second paragraph repeating the pitch, a 4.8-star row, white App Store and Google Play buttons and a dim 'Be the first to know →' link. Right: a large phone frame holding an autoplay video (black here) with a mute icon. On load a 'Download our app' QR modal covers the page and a Spanish cookie bar sits along the bottom. Operated: after dismissing the download modal with 'Not now', clicked the first FAQ summary ('What are microdramas?'); the question turned purple, the plus icon became an ×, and a four-line answer expanded beneath. On load the only running animation was a 'pulse' on the badge's purple dot; the hero video element was autoplay+muted but never left readyState 0 in this browser. With reducedMotion: 'reduce' the pulse animation still ran and the video stayed paused. Header is sticky at 100px; the cookie bar is fixed at the bottom.

Copy: h1: "Latin Microdramas You'll Fall in Love With"; primary actions are the store badges "App Store" / "Google Play" plus the nav's "Be the first to know". First-screen proof is numeric and ratings-based: the '#1 … 1.3M+ downloads' badge, '4.8 · 1.3M+ downloads on iOS and Android' with five stars, and 'Over 1 million people are already watching'.

Transfer: For a consumer app, put the store badges and a rating line in the first screen and repeat the download count in the badge, the stars and the body copy; redundancy is the point. Show the product's actual content (posters, in-app screenshots) rather than abstractions; a numbered walkthrough with real screens explains a monetisation model without a diagram. Pick one accent and one gradient and reuse them on every eyebrow, underline and display line so a long dark page stays one brand. Do not stack a modal and a cookie bar on the first screen; one interrupt is already a cost.

Avoid/limit: Two overlays on load hide the hero. The page is 15 sections and ~13,500px, with investor, creator and viewer audiences all served on one homepage, so the hero copy repeats itself and the CTA shifts between 'download', 'be the first to know', 'submit your story' and 'let's talk'. Grey-on-black secondary text and tiny language/social controls hurt legibility and tap accuracy. The empty phone frame on mobile is a large blank gap if the video fails.

Measured 2026-10-19: desktop h1 72px, weight 700, tracking -0.025em; body 18px; 15 sections; phone h1 48px.

On phones: The hero stacks: badge, three-line h1, paragraph, store buttons, then the phone frame (which is empty) below, pushing the first real content past 1,500px. The stat strip becomes a two-column grid with the fifth stat alone; format cards, how-it-works steps and team bios stack one column; posters become a 2 × 2 grid. The cookie bar covers about a fifth of the viewport and the QR modal still appears. Page height 18,486px.

## Scope · expressive-world

https://www.getscope.ai/ · desktop-mobile-audit

An industrial-mood page that alternates near-black and cream bands, uses a grainy amber gradient as its only colour, and sets every label in mono caps.

Observed: A cream nav (logo, a grey pill holding three mono-caps links, 'LOG IN' and a black 'BOOK A DEMO') sits over a full-bleed near-black hero. Centre-aligned: a two-line h1, a two-line subhead and one cream 'BOOK A DEMO' button. Diagonal grainy amber-to-yellow stripes rise from the lower-left and upper-right corners; there is no product image in the first screen. Operated the horizontal industries strip by dragging it: it scrolled 800px, revealing 'Energy' and 'Infrastructure' after 'Chemical'; no arrows or dots are provided. Nothing continued moving after load (four animations counted then zero); the measurement record counted seven animations after scroll at 1440, which I did not see as sustained motion. With reducedMotion 'reduce' nothing moved; no reduced-motion rule was observed in the measurement record.

Copy: h1: "Supercharge your inspection team". Primary action: "BOOK A DEMO". The first screen offers no logos, numbers or demo; the subhead claims '10x faster inspections' and the first proof ('Trusted by 7 of the top 10 largest inspection providers') appears one scroll down.

Transfer: Build an industrial identity from one textured gradient and mono-caps labels instead of a multi-colour palette. Alternate dark and light full-width bands so each section reads as a distinct room rather than a list. Let three giant numerals carry the outcome claims, with the explanation in small type beside them. Duotone all photography to one hue so stock imagery looks owned.

Avoid/limit: No product or proof in the first screen; an unlabelled horizontal scroller hides two of five industries; the closing CTA button has weak contrast; mono caps at small sizes reduce readability; section_count measured as 0, suggesting no semantic sectioning.

Measured 2026-10-20: desktop h1 68px, weight 400, tracking -0.02em; body 20px; 0 sections; phone h1 36px.

On phones: Hero keeps the centred stack; the nav shows logo, 'BOOK A DEMO' and a hamburger. The industries strip shows one photo at a time; the four workflow steps stack vertically with their mocks; the 10X/55%/0 tiles become full-width black bands; 'JOIN US' and 'FOR BUSINESSES' panels stack; testimonials stack; security cards stack in one column. Page height grows to 10,614px.

## Tutor Intelligence · expressive-world

https://tutorintelligence.com/ · desktop-mobile-audit

A graph-paper hardware page that lets an oversized robot-head render break out of the hero under a light serif headline, with mono-caps navigation and one yellow accent.

Observed: An amber announcement bar in mono caps, then a sticky nav (logo, '+ ROBOTS', '+ SOLUTIONS', 'PRICING', '+ COMPANY', 'CAREERS', 'GET IN TOUCH', 'SIGN IN', black 'SIGN UP'). The hero sits on a graph-paper grid: a centred two-line serif h1 in a pale panel, below it a large white robot sensor-head render on a column that extends past the fold. Bottom-left a grey panel holds the one-sentence description with '$14 an hour'; bottom-right a video thumbnail with play control, a yellow 'GET IN TOUCH' and a white 'DISCOVER OUR RESEARCH' button. Operated the '+ ROBOTS' nav button: a full-width white panel dropped over the hero with a photo of the Cassie robot, the links 'Cassie' and 'Sonny', and a small grid tile graphic; the '+' became '−' and the label turned blue. Nothing ran on load; sections fade in as they scroll into view (8 transitions and ~285 elements moved after a scroll). With reducedMotion 'reduce' all heading text was present on load and nothing moved after scrolling. The two videos stayed paused in headless.

Copy: h1: "Intelligent robot workers for industry". Primary action: "GET IN TOUCH" (yellow), with "DISCOVER OUR RESEARCH" beside it. First-screen proof is the video thumbnail of a robot palletizing and the price claim 'from $14 an hour'; no logos or counts appear.

Transfer: Let a single product render break the hero's frame so the hardware, not the copy, is the first thing read. Use mono caps for all wayfinding and a serif only for statements, so hierarchy survives without colour. State price in the first screen when the business model ('from $14 an hour') is itself the differentiator. Keep one accent for action (yellow) and a second (blue) for reading, so buttons never compete with headings.

Avoid/limit: Scroll-gated reveals leave text absent for assistive tech and captures until motion fires; the hero spends its right column on a paused video thumbnail; mobile body at 14px and small mono caps reduce readability; the announcement bar plus sticky nav consume a large share of the mobile screen.

Measured 2026-10-20: desktop h1 72px, weight 300, tracking -0.05em; body 16px; 4 sections; phone h1 32px.

On phones: Announcement bar wraps to two lines; nav collapses to logo and hamburger. Hero stacks h1 (32px), the robot render cropped at the right edge, the blurb, the video thumbnail, then the yellow and white buttons full-width. Company, Cassie and Sonny sections become text-then-photo stacks; the blue-ruled rows stack heading over paragraph; the form sits in a full-width yellow panel; footer links become one long column.
