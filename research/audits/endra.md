# Endra

Inspected: 2026-10-20 · desktop-mobile-audit · canvas-first

https://www.endra.ai/

A black page led by an isometric stack of wireframe floor plates under a condensed serif headline, then product UI mocks in cards and one electric-blue CTA block.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Near-black screen with four stacked isometric plates drawn in thin white outline, centred and occupying the upper two-thirds. The headline 'MEP engineering at full speed' sits below the stack in a condensed serif, with a one-line grey subhead. No hero button; the only CTA is the blue 'Book demo' pill in the nav. A logo marquee of engineering firms runs along the bottom; a cookie dialog covers the lower right. Nav: pill-shaped wordmark, a centred pill with Product, Company, Security.

### Typography

Measured h1 72px, weight 400, line-height 1, tracking -0.02em, family Serrif Compressed (a condensed high-contrast serif); body 16px at 1.4, family Endra Sans Text, measure 44ch. Families present: Endra Sans Text, Serrif Compressed, Lab Grotesque, Geist Mono (DM Mono on mobile). Monospace is used for tiny labels inside UI mocks ('REGION', 'ITEM'). Mobile h1 40px. Serif is reserved for section titles; everything else is a plain sans.

### Visual System

Single near-black ground with slightly lighter card panels and 1px borders. Accent is one saturated blue used for 'Book demo', the 'LIVE' badge and the closing CTA block. Imagery: white line-art of equipment (air handler, cable bundle, pipe fitting) in three discipline cards, a blurred studio photograph behind 'Endra Power Studio', dark product-UI mocks (playbook picker, room plan, agent chat, Revit sync table). Security badges are thin line icons.

### Page Sequence

Nav → isometric stack hero + logo marquee → three discipline cards (Mechanical ETA 2027, Electrical LIVE, Plumbing to be announced) → 'Endra Power Studio' video panel with Play button → 2×2 feature grid (Playbooks, Typical Rooms, Agents, Revit Integration) each with a UI mock → stats 'We let engineers do more' (12x, 91%, 97%) → 'What you need to know' two-column FAQ → 'Secure by default' badges → blue 'See what your engineers could do. Live.' block → footer with large wordmark.

### Interaction

Operated the first FAQ item ('What happens when the models change?'): the plus became a minus, aria-expanded flipped and a five-line answer expanded beneath; URL unchanged. On load about 50 animations ran: the h1, hero images and marquee slots; after scrolling 8 were still running (marquee and image animations). In the full-page capture the stats, FAQ and security sections rendered blank, consistent with scroll-triggered reveals. With reduced motion zero animations ran and the top screen was static.

### Accessibility

Grey body copy on near-black is low-contrast in card descriptions and the subhead. The cookie dialog overlaps the logo marquee on desktop and covers the headline's second line on mobile. FAQ triggers are 40px tall and carry aria-expanded. A 'Skip to content' link exists. No horizontal overflow measured at either width.

### Mobile

Nav keeps the blue 'Book demo' pill beside a hamburger; the centred link pill disappears. The isometric stack shrinks to fit and the headline wraps to two lines at 40px, partly hidden by the cookie dialog. Discipline cards, feature cards and FAQ become one column; stats stack vertically over a dark photo. Page height grows from 7498 to 9141px.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 72 | 40 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.02 | -0.02 |
| Body px | 16 | 16 |
| Characters per line | 44 | 29 |
| Sections | 8 | 8 |
| Reduced-motion rule | observed | observed |

## Interpretation

- A single abstract object (stacked floor plates) can stand for the product category without a screenshot, if the headline directly beneath names it.
- Mark product maturity on the page itself (LIVE, ETA 2027, to be announced) so the roadmap is honest and the scope is clear.
- Keep one accent colour for one action: when only 'Book demo' is blue, the eye finds the conversion path on every screen.
- Show feature UI as dark mocks inside bordered cards so the product reads as part of the page's surface rather than a pasted screenshot.

Suits enterprise tools sold by demo to technical professionals who value restraint and evidence of real UI; wrong for consumer products or any page that must convert without a sales call.

Risk: No hero CTA and no hero product shot; grey-on-black copy is hard to read; the cookie dialog collides with the headline on mobile; scroll-reveal sections render empty in static captures and for readers who scroll fast; the serif is used only for titles, so the type system leans on two families plus mono.

## Limitations

- Did not play the 'Endra Power Studio' video, so its content was not observed.
- Did not dismiss the cookie dialog.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.endra.ai/
- https://a16z.com/announcement/investing-in-endra/
