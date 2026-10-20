# Sponge

Inspected: 2026-10-20 · desktop-mobile-audit · typographic-technical

https://paysponge.com/

A one-column, light, text-led page that explains agent payments through small inline product demos (a card and chat transcripts) instead of screenshots or motion.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Left-aligned two-line headline on a near-white ground with a pale blue wash at the top; the phrase 'agent economy' is set in bright blue. One short subhead sits below, with no hero button. The first 'Give your agent an account' block starts within the first screen: a dark card mock showing a balance and 'ERIC'S AGENT', beside a chat-bubble demo. Nav has a 'BACKED BY Y' badge, six text links, social icons and a black 'Contact' pill.

### Typography

Measured h1 72px, weight 500, line-height 1, tracking -0.02em, family Inter; body 18px at 1.6 line-height, measure 64ch, also Inter. A ui-monospace family appears on card details and inline code tags such as 'sponge.transfer'. Mobile h1 drops to 48px, body to 16px. Section headings use the same medium-weight sans at smaller sizes.

### Visual System

Off-white ground with a faint blue gradient at the top, black text, one blue accent and a single orange YC badge. Surfaces are white or light-grey rounded cards with thin borders; the product card is the only dark object. No photography, no illustration; imagery is small partner and chain logos. Chat bubbles in grey act as the recurring motif.

### Page Sequence

Nav → headline + subhead → 'Give your agent an account' (card + chat demo, Launch Wallet) → 'Sell directly to agents' (URL-input demo, Launch Gateway) → three-column integrations row (SDKs, agent tools, chains) → 'Use cases' three cards with code tags and chat demos → FAQ accordion (7 items) → footer.

### Interaction

Operated the 'What is x402?' FAQ item: the plus became an x, aria-expanded flipped to true and a two-paragraph answer expanded in place; URL unchanged. On load one animation ran in the hero card area; the card balance read $49.00 in the capture and $50.00 on the live visit. After scrolling, three more animations ran on card blocks. With reduced motion the page still showed moving SVG circle transitions and the top screenshot changed over 1.2s.

### Accessibility

Grey body and caption text on off-white is low-contrast in places (card fine print, footer links, the placeholder URL in the gateway demo). FAQ buttons carry aria-expanded. No horizontal overflow measured at either width. The 'Submit URL' demo button is 32×32 on desktop.

### Mobile

Nav collapses to logo plus hamburger. Headline wraps to four lines at 48px. Each demo block stacks: copy, button, then the card or chat demo below it. The integrations row becomes three stacked groups; the three use-case cards and FAQ stack full-width. Page height grows from 2592 to 3897px with one measured section.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 48 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 18 | 16 |
| Characters per line | 64 | 43 |
| Sections | 1 | 1 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Show the product as a miniature of itself (a card, a chat exchange, an input) rather than a screenshot, so the demo reads at any width.
- Pair every claim with a button that names the artefact it opens (Launch Wallet, Launch Gateway) instead of a generic sign-up.
- A single accent colour used once in the headline and nowhere else keeps a text-heavy page from feeling flat without adding imagery.
- Put the FAQ on the homepage when the category needs vocabulary explained (x402, MPP) and let it carry the depth the hero omits.

Suits developer-facing infrastructure and API products whose value is a protocol or integration surface; wrong for consumer fintech that needs trust cues like faces, security badges or app imagery.

Risk: No hero CTA and no social proof beyond logos; the reduced-motion rule leaves some elements moving; low-contrast grey captions; the page relies on the reader already knowing what agents and x402 are.

## Limitations

- Could not verify whether the ticking card balance is a looped demo or live data.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://paysponge.com/
- https://www.ycombinator.com/companies/sponge
