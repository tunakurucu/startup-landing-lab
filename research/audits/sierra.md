# Sierra

Inspected: 2026-10-20 · desktop-mobile-audit · immersive-editorial

https://sierra.ai

Full-bleed moving imagery of human moments carries a two-line outcome promise and an agent-conversation bubble, deferring product UI until after a 30-logo wall.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A blue announcement bar ('Sierra Summit 2026 Recap…'), then a white nav with green logo, 'Sign in' and a green 'Learn more' pill. Below, full-bleed moving imagery of a sleeping baby on a parent's shoulder; the two-line white h1 and a white 'Learn more' pill sit at lower left, and a frosted chat bubble at right shows one line of an agent–customer exchange. In the measurement first-screen captures the h1 and bubble had not yet appeared.

### Typography

Measured h1 65px, weight 400, line-height 1.1, tracking −0.02em, family gtAmerica; body 16px gtAmerica at 1.5. gtAmerica is the only measured family: hierarchy comes from size alone, with display kept at weight 400. Section heads are centred; card titles sit white on gradients. Phone h1 32px, body 14px.

### Visual System

White ground, deep green for logo and buttons, a blue announcement bar. Hero imagery is warm, documentary-style moving pictures of people (the measurement record finds a canvas, not a video element). Desktop logos form a grey wall of 30, five per row. Feature cards use saturated diagonal gradients (olive, blue, mauve, rust) with faint white icons. Product sections switch to pale blue-grey UI cards, entered through a dotted-ground transition; compliance badges and a light grey footer close.

### Page Sequence

Announcement bar → moving-image hero → 'Leading brands succeed with Sierra' + 'Customer stories' button + 30-logo wall → 'Standout customer experiences. Stronger growth.' one wide and three gradient cards → 'The results speak for themselves' four quotes → 'The agent-building agent' (Ghostwriter Build/Optimize UI) → 'Use AI to improve your AI' (Insights, four cards) → 'Turn conversations into outcomes' (Horizon, four cards) → 'Trust and reliability' nine badges → 'Discover what Sierra can do for you' CTA → footer.

### Copy

H1: 'Better outcomes. Built on Sierra.' No hero subhead. Every primary button reads 'Learn more' (nav, hero, closing CTA). The hero names neither category nor product; it emerges in card copy ('Build powerful AI agents quickly', 'The agent-building agent') and the Product menu ('The leading conversational AI platform for businesses'). The audience is enterprise brands ('Leading brands succeed with Sierra', 'the great companies of the world').

### Interaction

Opened the 'Product' nav menu: aria-expanded became true, the item gained a pale green pill, and a white panel appeared with Build / Orchestrate / Optimize / Scale columns (Ghostwriter, Agent Studio, Horizon, Context Engine, Explorer, Insights, Channels, Trust and reliability). Meanwhile the hero imagery changed scene (baby → man on a phone) and the bubble text changed. On load the bubble alternated agent and customer lines. With reduced motion the hero was static: three captures were identical.

### Accessibility

White h1 and bubble text sit directly on moving imagery; on phone the h1 overlays a light blue sweater area. Phone: header 'Learn more' 32px tall, hero 'Learn more' 40px tall, announcement link 15px tall; no unlabelled controls counted; no overflow at either width. The cookie card overlaps the hero's lower-left corner.

### Mobile

H1 drops to 32px at left over a tighter crop of the imagery; no chat bubble was visible in the phone first screen. The logo wall becomes three columns in brand colours instead of grey. Feature cards stack and gain '+' expand buttons; testimonials stack; product cards become sideways rows with the next card peeking at the right edge. Footer columns stack to two.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 65 | 32 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 16 | 14 |
| Characters per line | None | 42 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the buyer's outcome is emotional, open on imagery of the end customer and overlay a short product exchange to tie the scene to the software.
- Place a large, quiet logo wall directly after the hero when trust, not comprehension, is the first hurdle.
- Tag each product chapter with a small named pill (Ghostwriter, Insights, Horizon) so a broad platform reads as distinct tools.

Suits enterprise platforms selling outcomes to executives, with recognisable logos to show. Wrong for self-serve or developer products, where visitors must see what the product does before they will talk to sales.

Risk: The hero names neither product nor category and offers only 'Learn more', so meaning depends on the imagery and later sections; text-over-imagery contrast varies frame to frame; first-screen text arrived late in one capture; product UI does not appear until about 4,900px down.

## Limitations

- The measurement record reports sticky_nav false and a 700px nav height, but the announcement bar and nav stayed pinned in every scroll capture; the measurement may have read a different element.
- Only a few scenes of the hero imagery were seen; its full sequence was not verified.
- Did not accept the cookie banner. No control was operated at 390 wide.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://sierra.ai
- https://saaslandingpage.com/sierra/
