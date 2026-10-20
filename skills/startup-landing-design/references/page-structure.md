# Page structure

What goes where, and how sure we are. **Strong**: several independent studies, or a large eye-tracking or controlled dataset, agree. **Moderate**: one sound study, consistent qualitative research, or a large correlational dataset. **Weak**: vendor or observational data without outcomes, an anecdote, or opinion. Most evidence comes from general websites, e-commerce or vendors; no public analysis ties startup homepage structure to outcomes. Keys point to Sources. Thresholds given with a check ID are this project's recommended values.

## Keep the structure familiar

Distinctiveness belongs in the product artifact, the voice and the type; the page structure stays easy to read. In two experiments (59 and 82 participants), simple pages that looked typical of their category got the best first-impression ratings, even at 17–50 ms [TUCH]. Across 100 developer-tool pages, nearly all used a centred, max-width layout, most with the headline above the visual [EM-100]; NN/g recommends predictable layouts [NNG-HOME]. These measure appeal and practice, not conversion. **Moderate.** A centred hero is a warning to justify; a decorative hero visual is still a block (PS-03, [the detector](default-detector.md)).

## Rules

1. **First screen.** Who it is for, what it does (in HTML text) and the primary action, inside the first viewport at 1440×900 and 390×844 (PS-01, HR-01). Leaving is most likely in the first 10 seconds [NNG-DWELL], and the first screenful got 57% of viewing time [NNG-SCROLL]. **Strong.**
2. **No false floor.** Part of the next section, or a hero element cut by the fold, shows at the bottom of the first viewport (HR-05). A full-bleed scene with little else looks like the end of the page. **Moderate.** [NNG-FOLD NNG-HOME]
3. **Order by the decision.** What answers the main doubts sits in the first two or three screenfuls, which held 74% and 81% of viewing time [NNG-SCROLL], and headings carry the argument alone (CP-10), because people scan [NNG-F]. **Strong.** Following the argument (alternative, what it is, how it works, proof, objections, action) is practitioner advice ([copy and positioning](copy-and-positioning.md)). **Weak.**
4. **Proof slot, only when proof exists.** Real, recognisable, attributed proof (name, role, company, photo when available) goes in the first two screenfuls or beside its claim (ST-04). Recognisable logos and quotes with photos were remembered far better than obscure ones [CXL]; visitors discount on-site testimonials [NNG-TRUST]. **Moderate** for attribution, **weak** for placement [EM-100]. Never invent proof (HP-01).
5. **Cost is findable** (ST-01): a pricing link in the header or footer, visible prices, or a sample price; otherwise the record says how cost is disclosed. Hidden costs erode trust [NNG-TRUST]; pricing is developers' second reason to reject a tool [SO]; public pricing went with better form-to-pipeline conversion, 17.5% against 10.3% [HS]. **Moderate.**
6. **One dominant action,** plus at most one lighter path for visitors at another stage (docs, GitHub, a demo). Hierarchy justifies this, not choice overload, whose average effect across 50 experiments is about zero [SGT]. Its label names the outcome (HR-02) [NNG-LEARN] and it looks clickable (ST-03): weak signifiers cost 22% more time [NNG-FLAT]. **Moderate.** End with a final action block using the same label. **Weak** [EM-100].
7. **Forms and waitlists.** Ask for the minimum, usually an email: at most three fields, no textarea, at most one select (ST-05). Several textareas or selects tracked lower conversion across 40,000+ pages [HUB]; 18% of shoppers who abandon cite forced account creation [BAY-CART]. Show what visitors get before any account. Say what joining gives and when, if true, and what arrives next. **Moderate** (transferred from e-commerce and lead forms).
8. **Demos and video** support the written promise near the hero and never replace it. Never autoplay with sound; muted motion past 5 seconds needs a pause control (MO-05). Give video a poster and captions. Lift figures come from vendors without controls [NAV EYEVIEW]; NN/g advises against autoplay [NNG-HOME]. **Weak.**
9. **Carousels.** Never rotate the h1 or primary action; that is a block (MO-05). Prefer static sections. A carousel that stays changes only on request, stops after any interaction, never auto-rotates on phones, and repeats its content elsewhere [BAY-CAR]. On one homepage with 3.76M visits, about 1% clicked a carousel item, 89% of them on slide one [RUNYON]; rotating panels read as ads [NNG-AUTO]. **Moderate.**
10. **Overlays.** For the first 5 seconds, nothing covers more than 30% of a phone viewport except a legally required consent prompt (ST-02). **Moderate.** [GOOG NNG-HOME]
11. **Developer tools.** The first two screenfuls show an install command or code sample, and the header links to docs or a quickstart (ST-06). An easy API attracts developers most [SO]. Offer a self-serve or free path; for commercial open source, do not point the main action only at GitHub [EM-KILL]. **Moderate.**
12. **Phones.** Promise and primary action on the first screen; no interstitials; navigation visible, or visible plus a labelled menu (use fell from 89% to 44% with a small hidden icon [NNG-NAV]). On phones, 70% of testers scrolled a new homepage to work out what it was (25% on desktop) [BAY-MHOME], so headings must show the real scope. **Moderate.**
13. **Load.** The first screen's largest element is never lazy-loaded (PF-02). CLS at or under 0.1 and LCP at or under 2.5 seconds (PF-04, PF-05) are published thresholds, not a measured cliff [WEB]. **Strong** as targets, **moderate** for effect size.
14. **Nothing ad-shaped.** Key messages stay out of animated strips, boxed promos, banners above the nav and text in images; people skip what looks like an ad [NNG-BANNER]. **Moderate.**

## Myths

- "Nobody scrolls" and "the fold is dead" are both wrong: attention drops at the fold, yet 26% of viewing fell below the second screenful [NNG-SCROLL].
- "Attention spans are 8 seconds, shorter than a goldfish's" has no traceable data [GOLDFISH]; the window to earn a stay is about 10–30 seconds [NNG-DWELL].
- "Visitors decide in 50 ms" describes visual appeal, not understanding [TUCH].
- "53% of mobile visits leave after 3 seconds" is a 2017 model output with an undisclosed sample [SOASTA].
- "People read in an F, so put everything on the left": the F is a failure caused by unformatted text [NNG-F].
- "Video lifts conversion by 80%" traces to a vendor with no published method [EYEVIEW].
- "Social proof lifts conversion by X%": no controlled public test was found [CXL].

## Sources

- **BAY-** Baymard Institute: CAR (Edward Scott) <https://baymard.com/blog/homepage-carousel>; CART <https://baymard.com/lists/cart-abandonment-rate>; MHOME (Christian Holst) <https://baymard.com/blog/mobile-homepage-usability>
- **CXL** Ben Labay, "Which Types of Social Proof Work Best?", <https://cxl.com/research-study/social-proof/>
- **EM-100** Anton Lovchikov and Travis Turner, Evil Martians, 100 dev tool landing pages (2025), <https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025>
- **EM-KILL** Victoria Melnikova and Travis Turner, Evil Martians, killing dev-tool conversions, <https://evilmartians.com/chronicles/how-to-kill-conversions-on-your-developer-tool-landing-page>
- **EYEVIEW** Zaid Ammari, Tech.co (2015), <https://tech.co/much-impact-videos-landing-page-conversion-rates-2015-10>
- **GOLDFISH** Maria Panagiotidi, "The attention span myth", <https://uxpsychology.substack.com/p/the-attention-span-myth>
- **GOOG** Google Search Central, "Avoid intrusive interstitials and dialogs", <https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials>
- **HS** Emir Atli, HockeyStack, pricing, demo and case study pages (2025), <https://hockeystack.com/lab-blog-posts/state-of-pricing-demo-case-study-pages>
- **HUB** Dan Zarrella, HubSpot, form fields and conversion, <https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx>
- **NAV** Navattic, "State of the Interactive Product Demo 2026", <https://navattic.com/report/state-of-the-interactive-product-demo-2026>
- **NNG-** Nielsen Norman Group: AUTO <https://www.nngroup.com/articles/auto-forwarding/>; BANNER <https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/>; DWELL <https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/>; F <https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/>; FLAT (via secondary reports) <https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/>; FOLD <https://www.nngroup.com/articles/page-fold-manifesto/>; HOME <https://www.nngroup.com/articles/homepage-design-principles/>; LEARN <https://www.nngroup.com/articles/learn-more-links/>; NAV <https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/>; SCROLL <https://www.nngroup.com/articles/scrolling-and-attention/>; TRUST <https://www.nngroup.com/articles/trustworthy-design/>
- **RUNYON** Erik Runyon, "Carousel Interaction Stats" (2013), <https://erikrunyon.com/2013/07/carousel-interaction-stats/>
- **SGT** Scheibehenne, Greifeneder and Todd, choice overload meta-analysis (2010), <https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf>
- **SO** Stack Overflow Developer Survey 2025, <https://survey.stackoverflow.co/2025/work>
- **SOASTA** Daniel An, Google, mobile page speed benchmarks (2017), <https://blog.amp.dev/2017/02/28/new-industry-benchmarks-for-mobile-page-speed/>
- **TUCH** Tuch et al., "The role of visual complexity and prototypicality regarding first impression of websites" (2012), <https://research.google.com/pubs/archive/38315.pdf>
- **WEB** Philip Walton, web.dev, "Web Vitals", <https://web.dev/articles/vitals>
