# Ramp

Inspected: 2026-10-20 · desktop-mobile-audit · workflow-theater

https://ramp.com

A value-equation headline with inline email capture sits beside a celebrity photo and a self-cycling product UI, backed by live 'agents at work' counters.

## Company evidence

YC: not-verified; batch: not verified. Reference tier: recognised for design quality and audited as a benchmark, not as part of the cohort sample.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A black announcement bar ('Ramp raises $1.85B…') tops a sticky nav with 'Sign in', lime 'See a demo' and black 'Get started'. Left: a small uppercase label with a changing percentage, the one-line h1, a grey subhead, and an email field joined to a lime 'Get started for free' button. Right: a cut-out photo of two men holding skateboards, handwritten name scribbles and a caption popup. Below, a wide panel shows animated product UI, and an 'Agents at work today' ticker runs along the bottom of the first screen.

### Typography

Measured h1 64px, weight 400, line-height 1.0, tracking 0, family Lausanne; 40px at 390, where it breaks into two lines. Body 13px Lausanne, line-height 1.5 (12px on mobile). Lausanne is the only measured family, so hierarchy comes from size and colour: section heads pair a black sentence with a grey continuation ('One platform for all of finance. Agents for every workflow, working 24/7.'), and small uppercase labels mark counters.

### Visual System

White ground with a faint dot grid behind the hero; black and grey text; a single acid lime accent on primary buttons, the skateboards and highlights. Surfaces are light grey rounded panels holding dense, realistic product UI (invoices, forecasts, policy documents, integration icons). Photography mixes the celebrity cut-out with office scenes and testimonial portraits; a dotted globe illustrates global spend. The footer is near-black with long regulatory disclosures.

### Page Sequence

Announcement → sticky nav → hero (label, h1, email capture, photo and caption, animated UI, ticker) → logo grid with customer stat → 'One platform for all of finance' module cards (cards and expenses, procure to pay, accounting, banking, integrations) → 'See recommendations for your business' AI input → 'Systems that never spoke' scroll story → 'Built on the intelligence of 85k+ finance teams' → Stack, customer-video and policy-agent sections with quotes → 'Scale the team. Shrink the paperwork.' → 'We've got the receipts' testimonials → repeated h1 with email capture → dark footer.

### Copy

H1: 'Time is money. Save both.' Subhead: 'Cards, expenses, bill payments, and banking* – in the blink of AI', listing the modules with a footnoted asterisk. Primary button: 'Get started for free' beside a work-email field (nav adds 'See a demo'). The category is 'One platform for all of finance'; the audience is 'finance teams' and '85,000 of the world's most ambitious companies'. The closing block repeats the h1 and form.

### Interaction

Operated: the close button on the hero caption popup; the popup disappeared, exposing a 'Forecast' screen and a 'Bills' phone panel. On load the UI panel cycled through screens (invoice matching went from 'MATCHING TO P.O.' to 'MATCHED'; reporting and forecast views appeared), and ticker and percentage values changed. Sections revealed late on scroll; reaching the footer opened a 'Stay up to date' newsletter modal. With reduced motion the first screen was static, but the product panel was still empty and the ticker absent about 4 s after load.

### Accessibility

Grey continuation text in headings and 13px body copy are on the light side. The caption popup covers part of the product panel; at 390 the popup and the bottom ticker overlap the photo. At 390 a 16×16 control with no text or aria-label sits at the top of the page; the email field and button are 42–43px tall and full-width. No images without alt and no horizontal overflow were found. An unrequested modal appears at the end of the page.

### Mobile

The announcement wraps to two lines and the nav becomes logo plus a 40×40 menu. The h1 breaks into two lines; email field and lime button stack full-width. The photo and popup move below the form, with the ticker over the bottom of the first screen, followed by a cropped product composite with a Ramp card. The logo grid becomes three columns; module cards stack; testimonials scroll sideways.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 64 | 40 |
| Headline weight | 400 | 400 |
| Headline tracking em | 0 | 0 |
| Body px | 13 | 12 |
| Characters per line | 43 | 43 |
| Sections | 10 | 9 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Compress the value proposition into a short equation-style headline, put the email field in the hero, and repeat the identical headline and form at the end.
- Let one panel cycle through real product screens so a multi-module product shows breadth without asking the visitor to click tabs.
- Label running counters ('agents at work today', share of payments processed) so an AI claim reads as concrete activity.
- If a pop-culture image is used for attention, keep its caption dismissible and out of the way of the product proof.

Suits broad B2B platforms with self-serve signup and a mature product UI to show (fintech, finance operations, HR). Wrong for an early product without real screens or customers: the page depends on dense UI, logos and named customer quotes.

Risk: The first screen stacks many elements (announcement, counter label, form, celebrity photo, caption, animated UI, ticker) that compete for attention. Under reduced motion the product panel was empty rather than showing a static frame. Long scroll-driven sections rendered blank in captures, and the end-of-page modal interrupts. 13px body text is small for a page about 14,500px long.

## Limitations

- No 1440 full-page capture was supplied; the desktop sequence comes from live scroll captures.
- Three autoplay videos did not play in headless Chromium; their content and motion are unverified.
- The 'Systems that never spoke' scroll story and several logo tiles and cards rendered blank in captures, so their content is not described.
- The email and recommendation inputs were not typed into or submitted.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://ramp.com
- https://saaslandingpage.com/ramp/
