# Copperlane

Inspected: 2026-10-19 · desktop-mobile-audit · workflow-theater

https://www.copperlane.ai

A modest left-aligned headline gives way to a large product screenshot and a sequence of coded mini-demos of the AI assistant 'Penny' working a mortgage file.

## Company evidence

YC: verified-yc; batch: W26.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A dark announcement bar ('Copperlane closes $4.1M Seed led by TQ Ventures. Read blog') sits above a nav with a large wordmark, three links and a 'Book a Demo' pill. Left-aligned: a 'Backed by Combinator' pill, a two-line headline, and two pills ('Who we are', dark 'Request a demo'). Three overlapping coral circles sit at far right on a faint dot grid. The lower half of the first screen is a product screenshot of a loan application with a 'Penny' chat panel, framed on a rust-brown textured panel.

### Typography

Measured h1 48px, line-height 1.1, weight 400, tracking -0.025em, family Geist; 30px at 390. Body measured 24px/1.5 Geist (20px at 390), larger relative to the headline than on most pages. Geist is the only measured family. Section eyebrows are small uppercase coral labels ('WHAT WE DO', 'BORROWER EXPERIENCE'); section headings are regular-weight, similar in size to the h1.

### Visual System

Off-white ground, near-black text, one coral/orange accent used for eyebrows, bullets, warning states and the logo. Surfaces are white rounded cards and light-grey panels holding HTML mock-ups: a question-chip flow diagram between Borrower, Copperlane and Loan Officer, an adaptive application form, a document-verification checklist with 'Verified' and 'Flagged' rows. The rust-brown panel behind the hero screenshot is the only textured surface.

### Page Sequence

Announcement bar → hero + product screenshot → 'How Copperlane helps' tabs (Loan Officers / Operations / Borrowers) with demo CTA → 'An AI assistant that collects docs...' flow diagram → 'Borrowers finish applications. Finally.' tabbed features + Penny chat → 'Catch problems before underwriting does.' verification card → (from live DOM text, rendered blank) loan officer dashboard → internal workflows → multilingual voice (English / 中文 / Español) → 'Ready to stop chasing paperwork?' CTA → footer.

### Interaction

Operated the 'Operations' tab under the hero: the active pill moved and the statement changed from 'Stop chasing documents. Start closing loans...' to 'Clean files arrive faster with fewer rechecks. Discrepancies surface early...'. A blinking caret pulsed in the Penny input. In one scrolled state the header became a floating rounded white bar. From the dashboard section down, sections stayed at opacity 0 after scrolling in this browser. With reducedMotion 'reduce', the caret pulse was still running.

### Accessibility

Sections below 'Catch problems before underwriting does' remained invisible (computed opacity 0) after slow scrolling and a 2.5s wait, leaving roughly the lower third of the page blank in live and stored captures. Inactive tab labels are mid-grey. At 390 the hero product screenshot shrinks until its text is unreadable. No horizontal overflow.

### Mobile

The announcement bar wraps to two lines; the wordmark stays large beside a menu icon. Headline and buttons stack, and the coral circles move below the buttons. The product screenshot becomes a small card above the tab control. The flow diagram is redrawn vertically (Borrower top, Copperlane middle, Loan Officer bottom). Mobile measured 19 running animations on load versus 1 at 1440.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 30 |
| Headline weight | 400 | 400 |
| Headline tracking em | -0.025 | -0.025 |
| Body px | 24 | 20 |
| Characters per line | 78 | 29 |
| Sections | 10 | 10 |
| Reduced-motion rule | observed | observed |

## Interpretation

- Name the assistant and show it answering real domain questions in the hero screenshot, so 'AI-native' is demonstrated rather than claimed.
- Use role tabs ('Loan Officers / Operations / Borrowers') directly under the hero to let each buyer find their outcome in one click.
- Draw the workflow as a diagram of who talks to whom with the actual questions on the connectors; it explains the product faster than a feature list.
- Never gate content visibility on a scroll-reveal script without a fallback; if the observer fails, the section should still render.

Suits workflow software for regulated, document-heavy processes (lending, insurance claims, onboarding) where buyers need to see the forms and checks. Wrong for a product without a concrete UI to show, where this many mock-ups would be filler.

Risk: Relying on reveal-on-scroll left the lower sections blank in this inspection, so the page's later proof (dashboard, workflows, languages, closing CTA) may not reach some visitors. The hero headline is small and generic next to the large screenshot, so the category claim carries little weight; detailed screenshots become illegible on phones.

## Limitations

- Lower sections rendered blank in headless Chromium; whether they appear in other browsers was not verified, and their content is described from DOM text only.
- Did not verify the floating-header state beyond one scrolled screenshot.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.copperlane.ai
- https://www.ycombinator.com/companies/copperlane
