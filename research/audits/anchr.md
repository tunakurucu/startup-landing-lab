# Anchr

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://anchr.tech

A typewriter headline cycles target industries, then a 14,000px enterprise brochure stacks a mock console, a pinned four-layer system diagram, outcomes, industries, roles, press and a form.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

White-to-blush ground. Left: a light line 'The AI Supply Chain Employee for…' above a larger dark-red line with a blinking caret whose text differed across captures ('Ind', 'Healthcare & pharma', 'Food distribution'). Below, a round logo badge beside a tagline pill, then an outlined 'Schedule a demo' button. Right: a large chevron drawn in thin red outline, facets filled with food-market photos, framed by dotted diagonal guides. Nav: seven uppercase links, a theme toggle, a dark-red 'Get a demo' button. In the measurement capture the nav logo image was broken (alt text showed) and the right side was empty.

### Typography

The page has no h1 (measurement h1 fields null); the largest display text is 67.7px in the measured family 'Outfit', set light with the industry line in dark red. Body 16px / 1.5, also 'Outfit', the only family measured. Section eyebrows ('THE PRODUCT', 'OUTCOMES') are small tracked dark-red caps; section headings are thin, large and centred or left-aligned by section. Outcome figures ('+15k', '~99%', '~30%') are set very large in the same light weight.

### Visual System

Near-white ground with a faint warm gradient and a dotted-grid texture in alternating bands. One dark-red brand colour for buttons, eyebrows, chevron and the typed line; black for headings. Imagery: a light-UI mock console ('Hey, John', notifications, upcoming sessions), isometric translucent plates that stack into a four-layer diagram ending with the chevron logo, a pink brain glyph with connector lines, greyscale logo strips (universities, IBM, Cisco, press mastheads), photo tiles per industry, role cards with mini chat mocks, and a SOC badge in the footer.

### Page Sequence

Nav → typewriter hero with chevron graphic → 'Built & backed by the best' logo marquee → 'The agent builder' mock console → 'The product' pinned four-layer plate diagram with accordion tabs → 'Systems: Connect every system. Replace none.' brain diagram → 'Outcomes' heading with three large figures labelled 'illustrative value capture' → 'Industries' photo carousel → role cards (Sales, Purchasing, Finance, Executive) → 'What our customers say' testimonials → 'Press: Media mentions' three article cards → 'Contact us' with a name/email/message form → footer with SOC badge.

### Interaction

Operated the 'Company brain + ontology' accordion tab in the product section: it expanded with 'Give every agent one shared understanding of your business', the previous tab collapsed, and the isometric plate relabelled from 'Data + integration fabric' to 'Company brain + ontology'. On scroll the plates stacked one by one while the section stayed pinned; headline text and logo-strip positions differed between captures; live counts of running animations ranged from 12 to 107 while scrolling. With reducedMotion set, 11 animations ran briefly on load then 0 at every later sample.

### Accessibility

Light-weight display type at 67.7px is thin against the pale ground; the dotted grid sits behind body text in several bands. After the slow scroll-through and return to top, the console mock's text re-rendered unstyled and overflowed onto the product section in the live session (observed twice), overlapping headings. The typed headline has a permanently blinking caret. Logo marquee has no visible pause control. Outcome figures carry an 'illustrative value capture' disclaimer in small caps. No horizontal overflow measured. Contact form present, not submitted.

### Mobile

Nav collapses to logo and a round hamburger. The chevron graphic moves above the headline; display drops to 23.4px while the typed industry line continues. Tagline pill and demo button stack full-width. Logo strip shows two logos at a time. The product section keeps accordion tabs but the pinned plate diagram yields a long near-empty gradient run (over 2000px) before the 'Systems' heading in the full-page capture. Page height 13394px, near desktop's 13909px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 16 | 16 |
| Characters per line | None | None |
| Sections | 9 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- If you sell to several verticals, type the industry into the headline rather than listing them, so each visitor sees their own sector named within seconds.
- Explain a layered platform with one pinned diagram whose layers accumulate as the reader scrolls, with a matching accordion so the reader can also jump.
- Label projected outcome figures as illustrative on the page itself rather than letting large numbers imply measured results.
- Keep one brand colour and one typeface across a very long page; the restraint is what holds fourteen sections together.

Suits enterprise B2B sellers to operations buyers who expect proof of credibility (logos, press, SOC) and a contact form rather than self-serve. Wrong for a developer tool or a consumer product, where fourteen sections and a demo-only ask would lose the visitor before the product appears.

Risk: The page is very long and front-loads credibility logos before showing what the product does. Pinned sections leave large blank runs in non-JS captures and on mobile. The console mock broke layout in the live session after scrolling. Thin light type on a pale textured ground reduces legibility. Outcomes are explicitly illustrative, which undercuts the 'Outcomes' heading.

## Limitations

- The 1440 full-page capture stopped at 9000px and was blank below the product section; lower sections were observed only via viewport screenshots in the live browser.
- Could not verify whether the console and chat mocks reflect the real product, or whether the unstyled-overflow glitch occurs in a non-headless browser.
- Did not observe the full set of typed industries; three variants were seen.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://anchr.tech
- https://speedrun.a16z.com/companies/anchr
