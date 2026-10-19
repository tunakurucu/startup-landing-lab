# Keyframe Labs

Inspected: 2026-10-19 · desktop-mobile-audit · typographic-technical

https://keyframelabs.com

A condensed-serif headline set against a framed live avatar preview, inside a hairline-ruled, mono-labelled grid that reads as an engineering spec.

## Company evidence

YC: verified-yc; batch: X26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left: 'Bring AI to life' headline, a subhead with inline coloured tag chips '[controllable]' and '[excited]' and the price 'As low as $0.06/min' in mono, then outlined 'Talk to sales' and black 'Start building' buttons. Right: a magenta-framed card with a '[neutral] Hey there, welcome to Keyframe Labs.' caption bar over a video of a man in a headset, a 'Cosmo' persona bar, mic and mute controls and a 'Tap to join call' tag. A mono spec strip closes the screen.

### Typography

h1 72px, weight 400, tracking -0.025em, line-height 1, measured family Instrument Serif (a condensed serif); the same serif sets the section headings and capability list items. Body 18px / 1.6, measured family Inter, about 50ch. Measured family IBM Plex Mono carries the nav, buttons, bracketed eyebrows ('[ OUR RESEARCH ]'), code and spec strip, mostly uppercase and letter-spaced.

### Visual System

Light grey ground ruled by vertical and horizontal hairlines with crosshair ticks at intersections; a grey dot-dither texture fills the hero. Product panels get thin magenta-to-orange gradient borders; tag chips are pale pink or orange. Imagery is avatar video and portraits. A near-black dithered band holds the closing CTA. The measurement recorded dark_background true and a theme-cycle button exists; the captures rendered light.

### Page Sequence

Hero with live avatar card → spec strip → 'We build human foundation models' (persona-2.0-live, persona-1.5-live cards) → 'Frontier capabilities' 4-item list with evidence panel → 'Deploy in minutes' three steps (select avatar, use any LLM/voice model, go live) → 'World-class SDKs & APIs' code panel with JavaScript/LiveKit tabs → 'Built for enterprise scale' three cards → dark 'Ready to build AI that feels human?' CTA → footer.

### Interaction

Clicked '02 Ultra-low latency': it expanded with a description and the right panel switched to a 'time to first byte' bar chart (Keyframe 180ms vs other providers 450ms+). While scrolling, the capability list also advanced through Emotion control and Image-to-avatar on its own. On load the hero video played. With reduced motion the hero preview video was paused; only the 'Tap to join call' tag area still changed between captures.

### Accessibility

Letter-spaced mono eyebrows and panel labels are small and light grey. Inactive capability items are pale grey serif. The Human realism and Emotion control panels showed a 'VIDEO PLACEHOLDER' label in my captures. Six autoplay videos are on the page. No horizontal overflow. Mobile tag chips and outlined buttons are comfortably large.

### Mobile

Nav collapses to wordmark, theme icon and hamburger. h1 drops to 48px; the subhead wraps with its tag chips; the avatar card moves below the copy at full width, and the two CTAs stack full width beneath it. Capabilities become a vertical run with each item followed by its own panel. Deploy steps and enterprise cards stack; the code panel narrows. Content width measured 300px with body at about 33ch, and the page grows to 9,286px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 48 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 18 | 18 |
| Characters per line | 50 | 33 |
| Sections | 6 | 6 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put the product's real output in the hero as a framed, labelled preview so the claim and the evidence share the first screen.
- Annotate marketing copy with the product's own control tokens so the subhead doubles as a feature demo.
- Pair a selectable capability list with one evidence panel that changes form per claim (video, chart, before/after).
- Use hairline rules, mono labels and a code sample to signal developer-grade infrastructure to a technical buyer without a dark theme.

Suits developer-facing AI and media infrastructure where output can be shown live and buyers compare latency, price and SDKs. Wrong for consumer apps, where mono labels, code blocks and spec strips would read as noise.

Risk: Evidence panels that show 'VIDEO PLACEHOLDER' undercut a page whose whole argument is visual realism. Low-contrast mono labelling makes structure hard to scan. Scroll-driven auto-advancing of the capability list can move content away from a reader who clicked an item. Price is stated as a 'from' figure with no plan detail on the page.

## Limitations

- Did not join the hero avatar call (would request microphone access).
- 'VIDEO PLACEHOLDER' panels may reflect headless video loading rather than what real browsers show.
- Theme toggle not operated; dark mode not inspected.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://keyframelabs.com
- https://www.ycombinator.com/companies/keyframe-labs
