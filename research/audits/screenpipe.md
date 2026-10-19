# screenpipe

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://screenpipe.com

A monospaced developer-tool hero hands off to a run of staged product mock-ups (chat, workflow map, settings cards) that act out what recorded history enables.

## Company evidence

YC: verified-yc; batch: S26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Centred stack on a faint isometric-cube pattern: a bordered 'Beta · Try the local Workflows app' pill, a two-line monospaced headline whose second line ('Open to any AI.') is grey, a three-line monospaced subhead, a full-width black 'Download for free' button, an outlined 'Star us on GitHub ★ 21,991' button and a 'Backed by Y Combinator' line. Below the fold line, 'Used by teams and people at' introduces a drifting logo row; a small portrait thumbnail sits in the bottom-right corner.

### Typography

Measured h1 60px, line-height 1.0, weight 700, tracking -0.025em, family 'fontMono' (a variable name; the actual face is not reported); 36px at 390. Body measured 16px/1.5 fontMono, 84ch measure (14px/1.6, 49ch at 390). Measured families also include fontSans and fontSerif: lower section headings switch to a bold sans and card/footer body copy to a serif, while mono stays for labels and buttons.

### Visual System

Warm light-grey ground with square-cornered black buttons and 1px bordered panels. The hero carries a subtle cube pattern; feature cards sit on a faint square grid with small line diagrams (database to Files/REST API/MCP, waveform, timeline thumbnails, device policy tree). Colour is almost absent except in the video panel's coloured shapes and small purple/red accents. Product UI is rendered as HTML mock-ups rather than screenshots.

### Page Sequence

Hero → two-row logo marquee → 'Let your AI use your work history.' video player → 'Ask AI about your work.' mock chat with Claude/ChatGPT and with/without toggles → 'Find your next automation in the work you already do.' workflow-studio mock → six capability cards (own, capture, recall, connect, control, deploy) → user testimonials grouped by use → 'Build your workflow memory.' CTA → FAQ (in the stored full capture) → footer with 'Ask AI about this page' buttons.

### Interaction

Operated the 'Without screenpipe' toggle in the 'Ask AI about your work' mock; on two attempts the chat content and visible state did not change. On load the two logo rows drifted in opposite directions and the first screen changed over 1.2s; the video panel changed from black to coloured shapes with a caption once in view. The header stayed fixed at the top. With reducedMotion 'reduce', no running animations were found and the first screen was static.

### Accessibility

The grey second headline line and grey monospaced subhead sit on a patterned ground, lowering contrast. Mobile body text measured 14px. Footer social icons are small square buttons. No horizontal overflow at either width. The with/without toggle gave no visible feedback when operated.

### Mobile

The hero is recomposed: the download button is replaced by a boxed 'Send the desktop download link' form with an email field and 'Email me the download link' button, followed by the GitHub button. Nav collapses to a boxed menu button. The headline wraps to three lines at 36px. Mock-ups and capability cards stack to one column; measured page height grows to 16,083px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60 | 36 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 16 | 14 |
| Characters per line | 84 | 49 |
| Sections | 15 | 15 |
| Reduced-motion rule | observed | observed |

## Interpretation

- When the product is a desktop app, swap the mobile hero's download button for an 'email me the link' capture instead of a dead-end download.
- Show the value of hidden infrastructure by staging a familiar interface (a chat client) and contrasting answers with and without your product.
- Put open-source traction (GitHub star count) directly beside the primary CTA when developers are the early audience.
- Let one typeface family signal the product's register (monospace for developer tooling) in the hero, then relax to sans and serif for longer reading below.

Suits developer tools and local-first infrastructure whose value appears only inside other software. Wrong for a non-technical buyer, for whom a monospaced hero and MCP/REST API vocabulary set the wrong expectations.

Risk: The page is very long (over 10,000px measured at 1440) and repeats proof in several forms. Mock-ups that look operable but do not respond, as with the with/without toggle in this session, can read as broken. Three type registers on one page weaken the hero's mono signal.

## Limitations

- The with/without toggle produced no visible change in this session; whether it works in other browsers or after other input was not tested.
- Live page height at 1440 was 7,599px versus 10,399px in the measurement record, and the live run reached the footer without the FAQ seen in the stored full capture; content may vary between loads.
- Stored full-page captures were truncated at 9,000px (1440) and 12,000px (390), so the lower page was reviewed from the live visit only.
- Video content was not played.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://screenpipe.com
- https://www.ycombinator.com/companies/screenpipe
