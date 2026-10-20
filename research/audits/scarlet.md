# Scarlet

Inspected: 2026-10-20 · desktop-mobile-audit · editorial-platform

https://www.scarlet.cc/

A clinical-footage video hero carrying one promise, then a long white page that stacks every trust device a regulator-adjacent buyer expects: logos, quotes, films, accreditations, FAQ.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A white 68 px nav (logo, eight text links, outlined "Get in touch") sits above a full-width looping video of patients and clinicians using health apps; the frame changes between captures (phone glucose app, nurse with tablet, smartwatch). A single centred white line, "Certify your AI medical device without unnecessary delays", sits over the footage with no button beneath it. A cookie consent panel with Reject/Accept covers the bottom-right corner.

### Typography

Measured families Aeonik Pro Medium for headings, Aeonik Pro Regular for body, with Inter also loaded. The semantic h1 is below the video: 48 px, weight 500, line-height 1.1, tracking -0.01 em, dark grey on white (32 px on mobile). Body 16 px at 1.4; section eyebrows are small letter-spaced caps. The hero line over video is a lighter-weight white sans of similar size; the footer ends with a large wordmark in a purple-to-blue gradient.

### Visual System

White and pale grey alternating bands; the only strong colour is a small pink-red "Get in touch" button and red accents inside the device photography. Imagery is documentary: people holding devices, a clinician laughing, a customer-story film with a play button. Proof blocks are set as cards with thin borders: six customer logos, a 2×3 grid of testimonial cards, and a row of six regulator badges (EU flag, UK, US flag, MHRA, others).

### Page Sequence

Nav → video hero with one line → h1 + "Get in touch" → customer logo row → single large pull-quote → "Why Scarlet" three photo cards with linked stories → "Our customers" film with play button → six testimonial cards → full-bleed photo band "Transfer to Scarlet in 4 weeks" with button → accreditation badges → news list (four posts) → FAQ accordion → dark CTA band "Need to certify an AI medical device?" → footer links and gradient wordmark.

### Interaction

Operated the first FAQ item "Which jurisdictions does Scarlet cover?": the question expanded to a list of seven jurisdictions and a CE-marking note, the plus icon became a cross, page height grew from 8505 to 8803 px, and nothing else changed. On load the hero video was playing; five other videos were present but paused. Measurement recorded one running animation on load and after scroll on desktop, none on mobile. With reduced motion on, the hero video still played on load and was paused after scrolling away; no prefers-reduced-motion rule was found in accessible stylesheets.

### Accessibility

White hero text sits over bright moving footage with no visible scrim, so legibility depends on the frame. The cookie panel stays fixed over content while scrolling and overlaps the FAQ on desktop. The nav bar stayed visible at the top when scrolled to the FAQ in the live visit. Accordion triggers were not exposed as buttons to the control scan. No horizontal overflow at either width.

### Mobile

Nav collapses to logo plus hamburger; the hero keeps video with the line wrapping to three lines; the cookie panel covers the lower third of the first screen. Grids collapse: logos and regulator badges into two columns, the three story cards and six testimonials into one column. Blog entries and FAQ run full width; the footer stacks link columns above the wordmark. Page grows to 9296 px.

### Copy

H1: "Get your life-changing technology to the people who need it with the global AI certification body"; the hero overlay reads "Certify your AI medical device without unnecessary delays". Primary action: "Get in touch" (nav and below h1). The first screen offers footage only; logos and a founder quote arrive after the fold.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | 48 | 32 |
| Headline weight | 500 | 500 |
| Headline tracking em | -0.01 | -0.01 |
| Body px | 16 | 16 |
| Characters per line | 31 | 31 |
| Sections | 2 | 2 |
| Reduced-motion rule | not_observed | not_observed |

## Interpretation

- For a regulated-market buyer, sequence trust devices in rising formality: logos, then quotes, then film, then official accreditations.
- Keep the hero to one promise and move the long descriptive h1 to the first white band, where it can be read without competing with imagery.
- Use one small saturated button colour on an otherwise monochrome page so the single action is always findable.
- An FAQ accordion is a cheap way to answer jurisdiction and pricing questions without lengthening the page for everyone.

Suits B2B services sold on credibility (compliance, certification, legal, clinical) with long consideration cycles; wrong for a self-serve product that needs a demo or sign-up in the first screen.

Risk: Text over unscrimmed video and a persistent cookie panel hurt the first screen; six embedded videos add weight; the page relies on scrolling through many proof blocks before the first explanation of what the product actually does.

## Limitations

- Hero video legibility varies by frame; only a few frames were seen.
- Testimonial, logo and accreditation claims were not verified beyond their presence on the page.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://www.scarlet.cc/
- https://www.joinef.com/portfolio/
