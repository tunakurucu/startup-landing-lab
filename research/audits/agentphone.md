# AgentPhone

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://agentphone.ai/

A scripted live phone call with timer, waveform and captions sits directly under the headline, so the product is shown working before it is explained.

## Company evidence

YC: verified-yc; batch: X26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A centred 'Backed by Y Combinator' pill, a two-line h1 'Phone numbers for AI Agents' and a two-line subline sit over a black-to-green gradient tiled with outline robot-mascot drawings. Two actions follow: green 'Start building now' and a 'Copy Prompt' pill with an AGENT/MCP/NPM switch. Below, a glass card shows a call bar (+1 (415) 555-0142, timer, mic, mute, hang-up), a waveform with caption bubbles, and a Call/Message toggle. A circular 'talk to the team' badge sits bottom-right.

### Typography

Measured h1 Alte Haas Grotesk 80px, weight 700, tracking -0.06em, line-height 1; 36px at 390. Body measured Inter Variable Local 14px/1.5 desktop and 16px at 390. JetBrains Mono is measured for code blocks and the AGENT/MCP/NPM switch. Section heads are bold, centred and tightly tracked.

### Visual System

Near-black ground with radial green glows; green is the only accent, used for primary buttons, waveforms and active tabs. Surfaces are dark rounded cards with green gradient fills. A robot mascot appears as background tiles, card stickers and footer stickers. Product evidence is drawn UI: country picker, transcription stream, number grid, MCP JSON, chat bubbles, call screens. Partner logos are white monochrome.

### Page Sequence

Hero with call demo → 'Across the agent ecosystem' logo row → 'How it works' four-step tabs over a UI carousel with arrows → 'Everything in one API' bento (phone identity, transcription, numbers, MCP support) → 'Ways to integrate' language tabs and code block → 'Use cases' cards → FAQ accordion → closing CTA panel repeating hero actions → footer with address, status, SOC 2 badge and mascot stickers.

### Interaction

Clicked the 'Node' tab in 'Ways to integrate': the green pill moved from Python to Node, the install line changed from 'pip install agentphone' to 'npm install agentphone', and the sample switched to JavaScript with import and await. On load, the call timer advanced (00:40 to 00:43), waveform bars changed and caption text cycled through a scripted conversation. Under reduced motion the same demo kept running: timer 00:24 to 00:32, captions changed.

### Accessibility

Some captions inside demo cards are small grey text on dark green. The AGENT/MCP/NPM switch buttons are 25px tall and the unmute button 20px at 390. The fixed 'talk to the team' badge overlaps cards and code at 390. Reduced motion does not stop the hero demo. No unlabelled links or buttons found by a DOM check at 390; no horizontal overflow. A reduced-motion screenshot timed out once before succeeding.

### Mobile

Nav reduces to the wordmark and 'Get Started'. The h1 drops to 36px; both actions become full-width stacked bars. The call card narrows with captions still visible. Logos wrap into rows; How it works becomes a vertical list; bento cards stack one per row. Code blocks keep their size and clip long lines at the right edge. Footer columns stack.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 80 | 36 |
| Headline weight | 700 | 700 |
| Headline tracking em | -0.06 | -0.06 |
| Body px | 14 | 16 |
| Characters per line | 55 | 44 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Put a running, believable product moment directly under the headline so an infrastructure API reads as a working thing, not a diagram.
- Offer a copy-to-agent or install path beside the primary button when the buyer will hand setup to a coding agent.
- Use language tabs that swap install command and sample together so each developer sees one complete path.
- Repeat the hero's exact action pair at the end of the page so a convinced reader does not have to scroll back.

Suits developer APIs and infrastructure whose output is an event (a call, a message, a webhook) that can be dramatised in a loop. It would be wrong for a product whose value is slow or invisible, such as data residency or audit logging, where a looping fake demo would mislead.

Risk: The hero demo is scripted and keeps moving under reduced motion. Dense dark-on-green cards and small grey captions cost legibility. The mascot, gradients and bento make the page long (8,663px desktop) before pricing, and code samples clip on phones.

## Limitations

- The hero call demo was not verified as connected to a live service; it appeared scripted.
- Partner logos and SOC 2 badge were not independently verified.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://agentphone.ai/
- https://www.ycombinator.com/companies/agentphone
