# Drafted

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://www.drafted.ai/

An architectural-sketch hero hands off to feature cards that act out each step of house design with a scripted cursor.

## Company evidence

YC: verified-yc; batch: P26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Minimal nav: serif 'Drafted' wordmark left, Learn and a black Sign In right. Centred serif headline, one-line subcopy and a black 'Start Creating' button sit over a pale watercolour/pencil illustration of a floor plan (left) and a farmhouse with trees (right). Grey press logos (Business Insider, TechCrunch, Reviewed) follow, and a row of illustrated house-plan cards with creator names starts at the fold.

### Typography

Measured DM Serif Display for display: h1 60 px, weight 400, line-height 1.2, tracking 0; section heads in the same high-contrast serif, card titles at small sizes. Body in measured Inter at 14 px / 2.0 with an 86ch measure at 1440. Large serif numerals for the stats band.

### Visual System

Warm off-white and parchment ground, near-black text and buttons, beige rounded cards. Hero and closing band use soft, desaturated architectural illustration; plan cards pair painterly house renders with coloured floor plans. Product UI appears as small light mocks (room list, toolbar, materials panel, invite form). A sage-tinted band holds the persona cards.

### Page Sequence

Sketch hero with plan cards → stats band (users, plans generated, rendered plans) → 'Everything you need…' (furnished plans, exterior renders) → 'The fastest workflow for home design' (five step cards) → Design together → Manage multiple projects → 'Join over 100,000 professionals' persona cards → Explore inspiration (Explore/Remix demo) → illustrated 'Create your first AI house plan for free' CTA → FAQ → guides → large link-directory footer.

### Interaction

Operated the 'Make a plan your own' chapter control in Explore inspiration: the left rail marker moved from Explore to it and the demo's pill switched from Explore to Remix. On load, hero plan cards changed between captures; step cards showed a cursor adding rooms, a Create button and swapping toolbar selections. After the hero scrolls away a 'Start Creating' button appears centred in the nav. Under reduced motion frames still differed at the top and after scrolling.

### Accessibility

Hero subcopy and press logos are mid-grey over a pale illustration; stats labels are light grey. Before full load several demo panels rendered empty. The document height equals the viewport and content scrolls inside an inner container. Persona cards are buttons exposing aria-expanded. No horizontal overflow measured. Motion continued under reduced-motion emulation.

### Mobile

h1 drops to 36 px; the CTA label changes to 'Get Started'; nav keeps Sign In and drops Learn, adding Start Creating after scroll. The illustration shrinks to a faint house behind the CTA, press logos become a horizontally clipped strip, and one plan card shows at a time. Stats reflow to one large figure over two. Step, persona and FAQ blocks become one column; inner scroll height grows from about 8,000 to 11,359 px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 36 |
| Headline weight | 400 | 400 |
| Headline tracking em | 0 | 0 |
| Body px | 14 | 14 |
| Characters per line | 86 | 42 |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Let each feature card act out its own step with a scripted cursor so the workflow reads without a video or sign-up.
- Borrow the domain's own artefact style (pencil plans, watercolour elevations) for the hero to signal craft before any claim.
- Promote the primary CTA into the nav once the hero button scrolls out of view.

Suits generative tools whose output is visual and step-based (plans, designs, layouts), where watching the steps is the argument. It would be wrong for a product with an invisible output such as an API or back-office automation, where staged UI theatre has nothing concrete to show.

Risk: Motion continues under reduced-motion emulation. Scrolling inside an inner container rather than the document can break full-page capture, scroll restoration and some assistive and browser scrolling behaviour. Demo panels are blank until scripts load. A 14 px body at an 86ch measure is long for reading, and the footer link directory dominates the page's end.

## Limitations

- The page scrolls inside an inner container, so the measurement record's page_height (900 / 844) and the full-page screenshots cover only the first screen; I scrolled the container separately.
- Which elements still moved under reduced motion was judged from frame comparisons, not identified individually.
- In two visits the window load event did not fire within 120 s although content rendered; load performance was not measured.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.drafted.ai/
- https://www.ycombinator.com/companies/drafted
