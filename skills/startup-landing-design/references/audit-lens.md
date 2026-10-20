# Audit lens

How to judge a startup homepage the way a sharp founder, investor or first customer would, and how to tell the founder what to change. It combines Y Combinator's advice on explaining a startup, operators who write about positioning and conversion, and research on first impressions, credibility and attention. Every rule here is paraphrased; sources are listed at the end.

An audit is useful only if it is specific to this product. Read what the project says about itself first (README, docs, pricing, changelog, pitch or launch post); the most common serious finding is a homepage that says less, or something different, than the founders already know.

## 1. Set the context before judging

- **Stage.** Pre-launch (no users yet), early traction (some users, few numbers), scaling (proof and segments exist). Advice that does not fit the stage is noise: "add customer logos" means nothing before customers.
- **Market.** Consumer, small business, enterprise, developer. Developers compare on specs, docs and price; business buyers on outcomes and risk; consumers on the experience.
- **Trust asked.** Money, health, legal or company data raise the bar for craft, security and who-is-behind-it.
- **Traffic.** Below roughly 3,000 visitors a month, recommend talking to buyers or a message test, not A/B tests [PM].

Write these four lines at the top of the audit, then judge.

## 2. Fix order

Diagnose the earliest layer that fails and fix it first; a weak early layer distorts everything after it [WY]. Inside one layer, use the order a YC partner reads in: what is it, for whom, why this, can I try it, do I believe it [YC].

0. **Honest and working** (P0). No invented proof, false urgency, hidden cost or broken primary action.
1. **Clarity.** What is it?
2. **Relevance.** Is it for me?
3. **Value.** Do I want what changes?
4. **Difference.** Why this, and why now?
5. **Trust and friction.** Proof, people, price, risk, objections.
6. **Structure, craft, speed and measurement.**

## 3. The questions

Each question says why it matters, what strong and weak look like, and how to check it. Check IDs refer to [the checklist](checklist.md); cite them instead of re-deriving what `check.json` already measured.

### 0 · Honest and working
- **Q0.1 Is every piece of proof real?** Logos, testimonials, counts, ratings, badges and press must be supplied and verifiable, with name, role and company on quotes. Fake or AI-written testimonials and implied endorsements are illegal in the US under the FTC's 2024 rule on reviews and testimonials, not just weak [FTC]. Check: HP-01, HP-02; ask the founder or the repo for the source of each item. Always P0.
- **Q0.2 Is urgency true?** Countdown timers, "only N left" and "spots filling fast" must be real and sourced [MATH]. Check: HP-05. P0 when false.
- **Q0.3 Does every action reach what its label promises?** "Try free" that leads to a sales form, "Docs" that scrolls the page, a waitlist in front of a product the repo shows already works [YC]. Check: HP-04, AX-08; click everything. P0.
- **Q0.4 Does the page match the product that exists today?** Roadmap features labelled as roadmap, numbers traceable to the repo or analytics, mock interfaces labelled [OP]. Check: compare claims with the README, docs and changelog; HP-03.

### 1 · Clarity
- **Q1.1 Can a stranger say what it is from the first screen alone?** Visitors decide in roughly the first 10 to 20 seconds whether to stay, and leaving is most likely at the start [LWD][NNG]. Strong: a plain category noun plus what it does. Weak: a slogan, a vision statement, an invented category, mood with no noun. Check: write the one sentence a stranger would give from the 1440 and 390 first screens and compare it with the repo's own description; a mismatch is the most common P1 [YC]. PS-01, PS-02, CP-03.
- **Q1.2 Is the description matter-of-fact and narrow?** It names a concrete thing and would work unchanged as a neutral Launch HN tag line; it fails if a competitor could paste it onto their page [PG][YC]. CP-01, CP-05.
- **Q1.3 Is the product shown working, legibly?** A real output or the key moment at a readable size with a caption beats a full-app screenshot or a video the visitor must watch to understand [YC][JC]. PS-03.

### 2 · Relevance
- **Q2.1 Does the first screen name one buyer in their own words?** A named role or situation lets the right visitor think "this is for me" and others leave; "for teams of all sizes" helps nobody [JC][WY]. Check: audience words in the hero and the proof headings, against the customer described in docs or pricing tiers.
- **Q2.2 Is the copy in the customer's vocabulary?** Domain words the users themselves use are fine; coined terms and internal jargon are not [YC][OP]. Check: compare with issues, support threads, docs and user quotes in the repo. CP-06, CP-07, CP-11.
- **Q2.3 Does the homepage do one job?** One core visitor; secondary audiences routed to their own pages rather than crammed into the hero [YC][OP].

### 3 · Value
- **Q3.1 Is what it does tied to an outcome the buyer wants, without promising what it cannot control?** Lead with the layer the buyer shops at: specs for developers comparing tools, results for business buyers [JC]. A benefit with no capability fails; a capability with no outcome is weak. PS-01.
- **Q3.2 Are features ordered by the problem they solve?** Each section adds something new; no catalog of adjective cards, tabs or sliders [YC]. PS-05, TT-01, CP-10.

### 4 · Difference
- **Q4.1 Is there one concrete difference against what the visitor uses today?** Name the status quo or the approach (a spreadsheet, the incumbent, building it in-house, doing nothing) and one difference a competitor could not also claim, tied to how it works [AD][JC]. Leave head-to-head comparisons for comparison pages. CP-04, TT-05.
- **Q4.2 Is every evaluative word backed?** "Fast", "secure", "easy", "powerful" need evidence beside them, or should go [JC][YC]. CP-08.
- **Q4.3 Is there an honest reason to act now?** The cost of the status quo, a real beta window, a real limit. Never invented urgency [OP]. HP-05.

### 5 · Trust and friction
- **Q5.1 Is the proof real, relevant and placed at the doubt it answers?** Attributed quotes and recognisable customers next to the claim they support, within the first two screens; small counts and anonymous on-site testimonials are discounted or backfire [NNG][CXL]. Before customers: the founders' insight, a real problem story and the product's own behaviour are the proof [YC]. ST-04.
- **Q5.2 Can the visitor tell who is behind it?** Named founders or team, why they are credible, a real organisation and a way to reach a human [SWC][OP]. Required for products that ask for money, data or health information.
- **Q5.3 Can they find the price and the cost of trying?** A visible price or an honest statement of the pricing situation, and what trying requires (card, data, install, time) [NNG][OP]. Hidden fees revealed late are a legal risk as well as a trust one [FTC]. ST-01, CP-09.
- **Q5.4 Is the risk of switching answered?** Trial and cancellation terms, export, migration, compatibility; findable, not the hero [JC].
- **Q5.5 Are the top objections answered beside the claim?** Security, setup effort, integrations, data handling, AI accuracy, each with a specific artifact [OP]. PS-04.
- **Q5.6 Can they try it, or see a real result, before giving anything?** Gate actions, not the information needed to judge the product; if access is gated, say so beside the action and show a sample result [YC][NNG].

### 6 · Structure, craft, speed, measurement
- **Q6.1 Is the order right across the first two screens?** What it is, who it is for, what changes and why this one, with the main action on screen one and proof by screen two; vision, fundraising and manifesto belong lower or elsewhere [YC][OP]. About three quarters of viewing time falls in the first two screenfuls [NNG]. HR-01, HR-05.
- **Q6.2 Is there one dominant action, plus at most one lower-commitment path?** Named for what happens next ("Book a 20-minute demo", "Install the CLI"); the case for one action is visual hierarchy, not choice overload, which averages out to about zero in meta-analysis [SGT]. PS-06, HR-02.
- **Q6.3 Does the craft match the trust it asks for?** Consistent, legible, working, current: no broken images, placeholders, stale dates or typos. A first glance forms an impression of visual appeal in a fraction of a second and colours later judgements; simple, familiar-looking layouts are rated higher [LIN][TUCH]. Distinctiveness belongs in the artifact, the voice and the type, not in unfamiliar navigation. Check: the automatic checks, plus the screenshots.
- **Q6.4 Is the page written for customers rather than investors?** Function before mission; no market-size figures, "we'll be huge", or backer logos ahead of the product [YC].
- **Q6.5 If pre-launch, does it say so plainly and still pass 1.1 to 2.1?** Show real progress, and do not put a waitlist in front of a product that already works [YC].
- **Q6.6 Is it fast and stable on a phone?** Lab LCP and layout shift within Core Web Vitals targets; large online experiments show speed affects revenue, though effect sizes belong to each site [WEB][KOH]. PF-02, PF-04, PF-05.
- **Q6.7 Can the founder measure whether a change worked?** The main action tracked end to end and split by channel, so changes are judged by the right customers arriving, not more sign-ups [OP]. Check the repo for analytics; say what is missing.

## 4. Where good sources disagree

- **Long or short page.** Length follows the number of real doubts; never cut the explanation of what the product is to shorten the page.
- **Polish or "don't look too mature".** Craft is always expected; inflated maturity (enterprise veneer, unearned badges) is not.
- **Jargon.** Judge against the users' own words; explain any term a smart adjacent buyer would not know.
- **Waitlists.** A fine pre-launch page; flag it only if the product already works or the page fails clarity.
- **Card at sign-up, gating, guarantees.** Do not recommend removing friction without full-funnel data; gate actions, not information; keep guarantees findable, not in the hero.
- **Problem first or product first.** The first sentence names what the product is, possibly phrased through the problem it removes; the problem story comes second and stays short.

## 5. Never cite these

The 8-second "goldfish" attention span (no traceable data); "users decide in 50 ms" (that was visual appeal, not understanding); "nobody scrolls" and "the fold is dead"; "more choices kill conversion"; "video lifts conversion 80%"; "social proof always helps"; universal conversion benchmarks; any best button colour. Never promise a lift percentage: effects measured on other sites do not transfer [KOH].

## 6. Writing a finding

Use one sentence: **If you** [small, specific change to a named element], **visitors can** [something they cannot do now], **because** [the mechanism, with its source].

- Name the element and the evidence (screenshot, check ID, code line). A finding without a locator is an opinion.
- Write what the visitor can now do, not the psychology. Put the mechanism and source after "because".
- Prefer the smallest change a founder can make in a day; structural rewrites go in the top three changes.
- Match confidence to evidence. Where sources disagree, phrase it as a test.
- Anything deceptive or illegal is P0, whatever else is true. Never recommend it.

Example: **If you** replace "The future of financial operations" with "Reconcile Stripe and bank payouts automatically for finance teams of 2 to 20" and move the reconciliation preview into the first screen, **visitors can** tell in one glance whether this is for them and see it working, **because** most leaving happens in the first seconds of a visit [LWD] and the first screen gets the largest share of attention [NNG].

## Sources

- [PG] Paul Graham: How to Present to Investors (paulgraham.com/investors.html), Write Simply (paulgraham.com/simply.html), Writing, Briefly (paulgraham.com/writing44.html), Taste for Makers (paulgraham.com/taste.html), The Other Road Ahead (paulgraham.com/road.html).
- [YC] Y Combinator: How to pitch your company (ycombinator.com/blog/how-to-pitch-your-company), design reviews with Aaron Epstein and Garry Tan (ycombinator.com/blog/design-review-tips-for-increasing-conversions; ycombinator.com/blog/design-review-watch-aaron-and-garry), Show HN guidelines (news.ycombinator.com/showhn.html), Launch HN guidance (news.ycombinator.com/yli.html), Kevin Hale, How to Build Products Users Love (Startup School).
- [JC] Jason Cohen, A Smart Bear: the Needs Stack (longform.asmartbear.com/needs-stack), Specificity (longform.asmartbear.com/specificity), Show, don't tell (longform.asmartbear.com/show-dont-tell), One benefit (longform.asmartbear.com/one-benefit).
- [WY] Peep Laja, Wynter: B2B message layers (wynter.com/post/b2b-message-layers-framework-wynter), Website credibility (wynter.com/post/website-credibility).
- [PM] Patrick McKenzie: Doubling SaaS revenue (kalzumeus.com/2012/08/13/doubling-saas-revenue), interview on A/B testing (nokotime.com, "increase conversion rates and avoid common A/B testing mistakes").
- [OP] Operators and investors: Des Traynor on jobs to be done (intercom.com/blog/videos/marketing-the-job-to-be-done), First Round Review on adapting a pitch into a website (review.firstround.com/how-to-adapt-your-pitch-deck-into-your-website), MKT1 on homepage copy (newsletter.mkt1.co/p/homepage-copy), 37signals Getting Real on promo sites (basecamp.com/gettingreal/13.2-a-powerful-promo-site), Highrise A/B tests (signalvnoise.com/posts/2991-behind-the-scenes-ab-testing-part-3-final).
- [AD] April Dunford, Obviously Awesome and her published talks on positioning.
- [NNG] Nielsen Norman Group: How long do users stay on web pages (nngroup.com/articles/how-long-do-users-stay-on-web-pages), Scrolling and attention (nngroup.com/articles/scrolling-and-attention), Trustworthy design (nngroup.com/articles/trustworthy-design), Social proof in UX (nngroup.com/articles/social-proof-ux), Tagline blues (nngroup.com/articles/tagline-blues-whats-the-site-about).
- [LWD] Liu, White and Dumais (2010), Understanding web browsing behaviors through Weibull analysis of dwell time, SIGIR (microsoft.com/en-us/research/publication/understanding-web-browsing-behaviors-through-weibull-analysis-of-dwell-time).
- [LIN] Lindgaard et al. (2006), Attention web designers: you have 50 milliseconds to make a good first impression!, Behaviour and Information Technology (doi.org/10.1080/01449290500330448).
- [TUCH] Tuch et al. (2012), The role of visual complexity and prototypicality regarding first impression of websites, International Journal of Human-Computer Studies (doi.org/10.1016/j.ijhcs.2012.06.003).
- [SWC] Stanford Web Credibility Research, guidelines (credibility.stanford.edu/guidelines); Fogg, Prominence-Interpretation Theory (credibility.stanford.edu/pdf/PITheory.pdf).
- [CXL] CXL Institute, social proof research study (cxl.com/research-study/social-proof).
- [SGT] Scheibehenne, Greifeneder and Todd (2010), Can there ever be too many options? A meta-analytic review of choice overload, Journal of Consumer Research (doi.org/10.1086/651235).
- [MATH] Mathur et al. (2019), Dark patterns at scale, Proceedings of the ACM on Human-Computer Interaction (doi.org/10.1145/3359183).
- [FTC] US Federal Trade Commission, Trade Regulation Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465 (2024), and the Guides Concerning the Use of Endorsements and Testimonials in Advertising, 16 CFR Part 255 (2023).
- [KOH] Kohavi, Deng, Longbotham and Xu (2014), Seven rules of thumb for web site experimenters, KDD (doi.org/10.1145/2623330.2623341).
- [WEB] web.dev, Core Web Vitals and their thresholds (web.dev/articles/vitals).
