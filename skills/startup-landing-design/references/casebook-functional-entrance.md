# Casebook: functional-entrance

## Firecrawl · functional-entrance

https://www.firecrawl.dev · desktop-audit

A technical API turns its main operation into the homepage entrance.

Observed: Centered headline, orange emphasis and an operation field with Search/Scrape/Map/Crawl controls; output preview follows immediately. Clicked Scrape. The action destination changed to a scrape-mode playground URL and the preview displayed structured output. No remote scrape was submitted.

Transfer: Show the shape of input and output before listing features. Let technical affordances become a visual motif. Interrupt long neutral sections with one purposeful color field.

Avoid/limit: Benchmark claims belong to the company and were not independently validated. Pale microtext and extensive scrolling deserve accessibility checks.

Measured 2026-10-19: desktop h1 60px, weight 500, tracking -0.005em; body 13px; 18 sections; phone h1 44px.

## Cyclon · functional-entrance

https://cyclon.ai/ · desktop-audit

A short waitlist page uses a single phone image and three plain-language capabilities to introduce a new device.

Observed: Centered, bold two-line statement on white with brief explanatory copy, an email waitlist form and YC backing directly beneath. A tall front-view phone image extends below the fold; navigation is only the logo and About us. Opened About us from the header; navigation reached /about and displayed founders and background. The waitlist form was visible but no email was entered or submitted. No product demonstration was available on the homepage.

Transfer: Use a single clear action when the product is still collecting interest. Give a new hardware concept a recognizable physical anchor. Keep early claims proportionate to what a page can show.

Avoid/limit: The page leaves product reality, availability and proof largely unanswered. A phone render and capability statements are not evidence of a functioning device.

Measured 2026-10-19: desktop h1 89.3px, weight 600, tracking -0.045em; body 21px; 1 sections; phone h1 44px.

## 21st · functional-entrance

https://21st.dev · desktop-mobile-audit

The first screen is the catalogue itself: category pills switch rows of live component previews directly under the headline.

Observed: On a near-black ground with a deep blue glow, a left-aligned two-line headline reads 'The living library of interfaces'; 'living' is a blue italic serif. A one-line count of '12,000+ crafted React components…' follows. Next comes a '2,000+ Marketing blocks:' label with seven category pills, then a full-bleed row of preview cards (glass blob, AI-tools text hero, line-art figure) that bleeds off both edges. I clicked the 'Hero sections' pill. The active state moved to it, and the preview row swapped to different cards: an AI-cloud deploy hero, a 'Take a screenshot' hero and the glass blob. On load the cards first showed as empty placeholders, then filled in. On two desktop visits the page turned into a 'Something went wrong' panel once scrolling began. A reduced-motion load rendered normally; first-screen frames 2s apart were identical, though 18 animations were still reported running.

Transfer: If the inventory is the product, put a filter control and real items in the first screen so the first click is already browsing. Show where the product lands (terminal, agent, builder) with one card per destination tool, so 'works with your stack' becomes concrete. Give an aggregator a human face by listing contributors with counts; it signals curation and supply depth at once. Use one contrasting italic serif for a single word per heading as a recurring brand signature, and keep everything else in one sans.

Avoid/limit: The page depends on heavy client rendering with video and canvas. In this inspection it failed into a full-page error on scroll and on mobile load, which removes everything including navigation. Rows of moving previews compete with each other. The grey half-headlines and faded author grid trade legibility for atmosphere.

Measured 2026-10-19: desktop h1 64px, weight 500, tracking -0.022em; body 17px; 7 sections; phone h1 40px.

On phones: Nav links disappear, leaving the logo, Log in and Sign up. The h1 drops to 40px over three lines. Both pill rows become clipped horizontal strips, and each preview row shows about one and a half cards. Logos wrap into rows, the three prompt cards and the two panels stack, and the author grid becomes two columns ending with '…and 700+ design engineers'. The FAQ heading sits above the list. The live mobile load showed the error panel; the layout here is from the stored capture.

## Oasiz · functional-entrance

https://www.oasiz.ai/ · desktop-mobile-audit

The whole homepage is one screen: wordmark, App Store badge and an auto-advancing phone carousel set over a pixel-art arcade world.

Observed: The root URL redirects to /landing. One screen: a widely tracked "OASIZ" wordmark headline, two lines of tagline ("The ultimate social arcade. Play, remix, and create games with friends!") and an App Store badge on the left; a large phone mockup on the right; a pixel-art island party scene, palms, water and city skyline across the bottom. "Join Discord" and "Sign In" ghost pills top right. A cookie banner overlaps the lower centre. Clicked the fourth carousel dot: the phone switched to the EXPLORE slide. Without input the carousel advanced every few seconds through six slides including Play with friends, Play, Remix, Create and Explore. Nothing else was seen moving. With reduced motion the carousel still advanced on its own.

Transfer: When the product lives in an app, a homepage can be just a door: one download action and real screens cycling in a device frame. Let a carousel of named verbs (play, remix, create) explain a multi-mode product in one slot. Build the backdrop from the product's own visual language, here pixel-art game assets, so the brand and the content read as one world.

Avoid/limit: With no sections there is no explanation of how AI-built games work, no social proof and no Android path. The auto-advancing carousel ignores reduced motion and has tiny dots, and the cookie banner sits on top of the key visual.

Measured 2026-10-19: desktop h1 96px, weight 600, tracking 0.2em; body 14px; 0 sections; phone h1 48px.

On phones: Logo and "Join Discord" disappear, leaving only "Sign In". Wordmark (48px), tagline and App Store badge centre-stack at the top, and the phone mockup fills most of the width below, hiding most of the pixel world. The footer becomes a two-column grid.

## CodeWisp · functional-entrance

https://codewisp.ai/ · desktop-mobile-audit

The homepage is the game catalog itself: a showcase slot with leaderboard and rails of user-made games, with no headline or marketing copy.

Observed: A sticky 62 px dark nav holds logo, mono uppercase links (PLAY, EXPLORE, DISCUSS, CREATE, MARKETPLACE), a 'Search Game' field, a Discord icon and an outlined lime 'Sign in'. Below a 'Recommended' label, a large game key-art panel sits left and a side panel right with thumbnail strip, game title, creator, description, an all-time leaderboard and a lime-outlined PLAY button; pagination dots underneath. The 'Featured' grid starts within the first screen. Operated the 'Next showcase game' arrow (it is transparent until the showcase is hovered). The side panel switched from Aether Rush to Cube Jump: selected thumbnail highlight moved, title and creator changed, the second pagination dot became active, and the main art area was dark 1.5 s after the click. A full-screen loading layer intercepted clicks for several seconds after load. Under reduced motion no animations were running and the first screen did not change across a 1.5 s comparison.

Transfer: When user-made content is the product, let the homepage be the catalog so the first click is play, not sign-up. Attach live social proof (a leaderboard, play and like counts) to the showcased item rather than to a separate testimonial section. Use a monospace face for metadata to give a catalog a tool-like texture without changing the display type.

Avoid/limit: No headline or value proposition, so a first-time visitor sees a game portal rather than a creation tool. Rails repeat the same games, which makes the catalog look smaller than its length suggests. 11 px mono body, hover-only arrows and a loading layer that blocks input weaken usability, and mobile becomes very long.

Measured 2026-10-19: desktop h1 Nonepx, weight None, tracking Noneem; body 11px; 7 sections; phone h1 Nonepx.

On phones: Nav reduces to hamburger, logo and Sign in; the search field is not shown. The showcase stacks key art above the panel, the description shows in full, and the leaderboard lengthens to about fifteen rows. Every rail becomes a single column of full-width cards, so the page grows from 3,432 px to 12,920 px.

## snag · functional-entrance

https://snagsublets.com · desktop-mobile-audit

The homepage is the product: a search bar for where and when, then shelves of real priced sublet listings directly beneath it.

Observed: A peach band holds only the lowercase headline 'find sublet in minutes' and a white pill search bar with 'where' (pre-filled New York, clear button), 'when' ('add dates') and a round orange search button. Logo top-left, hamburger top-right; no other navigation. Below the band, the 'popular sublets' row of five listing cards is already visible in the first screen. Clicked 'add dates': a two-month calendar popover (October and November 2026) opened under the search bar, past dates greyed, overlapping the listing row. 21 animations were running at load and after scroll. In reduced-motion mode the count stayed at 21 and listing photos changed between captures 2.5s apart.

Transfer: If the product is search, make the search control the hero and render real inventory immediately below it, so the first screen is already a result. Give each shelf one social-proof metric (interest, savings, saves) so rows read as ranked answers rather than generic browse. Rebuild an inline desktop search bar as stacked labelled fields with a full-width action on mobile instead of shrinking it. Show the supply side's payoff as concrete earnings next to real faces to recruit listers on the same page as renters.

Avoid/limit: There is almost no explanation of trust or how sublets are verified beyond small check badges, so it leans on the 30,000-students claim. Pre-filled New York may misdirect visitors from other cities. Lowercase-only headings and the missing article in 'find sublet in minutes' read casual. Image motion ignores reduced motion.

Measured 2026-10-19: desktop h1 48px, weight 700, tracking -0.04em; body 16px; 6 sections; phone h1 40px.

On phones: An app-install banner ('snag sublets', 'get') takes the top. The h1 changes wording to 'find a sublet' at 40px. The pill search becomes stacked labelled fields with a full-width orange 'search' button. Each listing row becomes a horizontal scroller showing about 1.7 cards; host portraits show two at a time. The footer centres and stacks. The page grows from 2,572px to 3,152px tall.

## Context.dev · functional-entrance

https://context.dev · desktop-mobile-audit

The hero is a working, prefilled request box with five API modes as tabs, framed in saturated blue and wrapped in a dot-matrix motif carried through the page.

Observed: An announcement bar sits above a nav with 'Book demo' and a black 'Start for free'. Centred: a 'Backed by Y Combinator' badge, the headline with 'agents' in blue, one-line description, 'Start for free' and a 'Connect Context.dev' dropdown. Below, a thick blue frame holds a search box with mode tabs (Search Web, Scrape, Answer, Map, Brand), a self-typing placeholder query, and a blue submit arrow. Blue dot fields fill both margins. Clicked the hero 'Scrape' mode: the tab expanded to 'Scrape Any Page', a tooltip appeared ('Scrape any URL as Markdown, HTML, images, or a screenshot'), 'Search Web' shortened to 'Search', and the placeholder cleared and restarted typing. A click on the 'Python' code tab produced no visible change. The nav stays fixed on scroll. Under reduced motion no animations were running and the dot fields were still, but the placeholder still changed ('latest AI research papers' → 'open source vector databases').

Transfer: Put a prefilled, safe request in the first screen and expose the product's verbs as modes of that one input. Carry one visual motif from hero to footer so a long developer page reads as one system. Offer the integration paths a developer will ask about (prompt, MCP, CLI, six SDK languages) as tabs near the top rather than on a docs page.

Avoid/limit: Body copy at 12.6px is small for a ten-section page. The phone hero removes the demo, losing the page's strongest proof where most visitors arrive. Placeholder typing continues under reduced motion. Density is high: many tabs, chips and carousels compete.

Measured 2026-10-19: desktop h1 56px, weight 400, tracking -0.035em; body 12.6px; 10 sections; phone h1 40px.

On phones: Nav collapses to logo and menu icon; the announcement bar stays. The hero drops the demo box and the 'Connect' dropdown, keeping one 'Start for free' with '1,000 free credits. No card required.' Headline breaks to two lines at 40px. Logos sit in a boxed three-up strip; the terminal and product cards stack singly. The 390 capture is blank below about 4,800px.
