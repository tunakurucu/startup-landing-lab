# Socratix AI

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://getsocratix.ai/

A blue-and-black enterprise page that stages the product as animated panels (agent run, before/after queue, signal map) revealed section by section on scroll.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

Black sticky nav with six links and a blue 'Request a demo' button, then a blue news bar ('NEWS … Money20/20 Money Awards 2026 finalist', 'Read the news →'). The white hero splits left/right: a mono-caps eyebrow 'BUILT FOR THE MAIN STREET', a three-line h1 with three phrases in blue, a grey subhead and a work-email field joined to a blue button; on the right a dark browser-chrome frame labelled 'app.getsocratix.ai' with a 'live' dot holding a demo video. A faint dot grid covers the ground; a cookie bar overlays the bottom.

### Typography

Measured h1 60.8px (38.4px mobile), weight 500, tracking -0.035em, line-height 1.1, family Geist; body 17px/1.7 (16px mobile) in the same family. Geist Mono carries all eyebrows, card tags ('CASE STUDY'), signal labels and link labels ('READ CASE STUDY →', 'VIEW TRUST CENTER →') in letter-spaced caps. Headline keywords are coloured blue; one h2 greys its first words ('Benefits that' grey, 'redefine your operations' black).

### Visual System

White and near-black bands alternate, both carrying a dot-grid texture; one saturated blue is the only accent apart from pale tinted card headers (peach, blue, pink, green) on the story cards. Surfaces are hairline-bordered cards and dark app frames; a hairline logo grid holds integration marks in grey. Motifs: a particle sphere with callout lines (signal map), a striped half-tone globe near the footer, a SOC 2 badge.

### Page Sequence

Nav → news bar → hero (h1 + email field + app video frame) → 'BUILT BY AI AND FRAUD EXPERTS FROM' logo grid → 'Selected stories' four cards with stat headers → dark 'One command center' particle sphere with signal labels → 'Fewer losses. Cleaner exams.' three use-case panels → dark 'AI that understands' agent panel (GATHER/ASSESS/RECOMMEND/LEARN) → 'Benefits' tab list beside a before/after queue panel → integrations logo grid → dark SOC 2 + 'Ready to see what Socratix can do?' email field → footer.

### Interaction

Operated the Benefits list item 'Improve customer experience': the highlight moved to it and the right panel swapped from 'BEFORE — MANUAL REVIEW / WITH SOCRATIX AGENTS' queues to a 'CUSTOMER UPDATES' feed ('Onboarding approved', 'Check deposit cleared', 'All clear'). On load ~50 CSS animations ran (named cta-shine-pass, ping, sigLine) and sections fade in on scroll, leaving full-page captures mostly blank. Under reducedMotion 'reduce' the shine pass stopped but ping and sigLine animations still ran (43 counted) while far fewer elements moved; the hero video stayed paused in headless.

### Accessibility

Cookie bar persists across the whole page at both widths. Mono eyebrows and card tags are small letter-spaced caps (not measured). Benefits list items are clickable without tab roles or aria-selected. Large regions of the page are empty until scroll-triggered reveals fire. The hero video frame rendered black in this session. No horizontal overflow measured.

### Mobile

Nav collapses to logo plus hamburger; the news bar shortens its text. Hero stacks eyebrow, h1 (38px), subhead, email field, then the app frame. The founders' logo grid becomes two columns with ten visible marks (including 'Y Combinator', 'DoorDash', 'MIT', 'UCLA'); story cards become a horizontal swipe showing one card; later sections rendered blank in the full-page capture because their content reveals on scroll.

### Copy

h1: "AI coworkers for fraud, financial crimes and compliance teams." Primary action: "Request a demo" (with a 'Work email' field). First-screen proof is the news bar award line and the 'live' app frame; the 'BUILT BY AI AND FRAUD EXPERTS FROM' logo grid starts at the bottom edge of the first screen.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 60.8 | 38.4 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.035 | -0.035 |
| Body px | 17 | 16 |
| Characters per line | 66 | 43 |
| Sections | 3 | 4 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Stage each capability as a small animated panel that changes when a sidebar item is chosen, so the page demonstrates rather than describes.
- Alternate light and dark bands with a shared dot-grid texture to keep a long enterprise page feeling like one surface.
- Lead with an award or news line in a bar above the hero when the company lacks customer logos it can show in the first screen.
- Colour only the keywords in headlines to point the eye without adding a second accent.

Suits enterprise workflow software sold by demo to risk, compliance or ops teams where a believable product scene matters more than a sign-up; wrong for a page that must be scannable in one pass or read well without JavaScript, since content appears only on scroll reveal.

Risk: Roughly 50 running animations on load at both widths, several surviving reduced motion; scroll-gated reveals leave the page blank in captures and for readers who jump; a persistent cookie bar; the hero's product frame depends on a video that may not play.

## Limitations

- The hero demo video did not play in headless Chromium, so its content was not seen.
- Mobile sections below the stories carousel were blank in the capture (scroll reveal) and were not re-rendered live at 390.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://getsocratix.ai/
- https://pear.vc/socratix-ai-seed-round/
