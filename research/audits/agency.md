# Agency

Inspected: 2026-10-20 · desktop-mobile-audit · functional-entrance

https://agency.inc

The homepage has been replaced by a four-paragraph wind-down letter under an acquisition banner; there is no headline, product, proof or call to action.

## Company evidence

YC: not-verified; batch: not verified.

- desktop: 1440 × 900: rendered, scrolled, one control operated
- tablet: not inspected
- mobile: 390 × 844: rendered and measured

## Observations

### Hero

A 40px purple-to-black banner across the top reads 'Agency has been acquired by Klaviyo on August 5th, 2026. Read about it here.' Below it, on an off-white ground, sits the Agency wordmark with four text links (Security, Blog, Press, Privacy) and then a centred ~760px column of body text: four paragraphs explaining the acquisition and the August 31, 2026 wind-down, signed 'Elias, Luke & the Agency team'. A cookie-consent dialog covers the top of this column on load. There is no h1, no image and no button.

### Typography

No h1 was measured. Display and body are the same measured family, 'ABC Normal', at 22px with line-height 1.6 and a ~73ch measure on desktop (18px/1.5, ~36ch on mobile). The letter is set in regular weight, dark grey on off-white, with one underlined inline link ('Agency is being acquired by Klaviyo'). The banner and nav links are small and semibold. Other listed families (Lato, Eina 01, helvetica) appear only in the cookie dialog and footer.

### Visual System

Off-white page ground, a near-black footer-less layout with a white footer band. The only colour is the banner's purple gradient and the teal 'Accept' button of the third-party cookie dialog. Footer shows AICPA SOC and ISO 27001 badges, a 'Subscribe to Our Newsletter' input with a black 'Submit' pill, and LinkedIn/X icons. No illustration, screenshot or photograph anywhere.

### Page Sequence

Acquisition banner → nav (logo + four links) → wind-down letter (four paragraphs + signature) → footer: logo, compliance badges, 'Company' links (Security, Press), newsletter form, legal links and social icons. Page height 1,221px on desktop, 1,520px on mobile.

### Interaction

Operated: clicked the cookie dialog's '×' ('Dismiss cookie banner'); the dialog disappeared and the full letter became readable, with no other change. Nothing animated on load (zero running animations) and nothing moved on scroll; the nav sits in a fixed-position wrapper but the page is only ~1.3 screens tall. With reducedMotion: 'reduce' nothing ran and two frames 1.5s apart were identical.

### Accessibility

The page has no heading elements at all, so the letter is unstructured for screen readers. The cookie dialog's dismiss control measured 14 × 25px on mobile; footer legal links are 17-20px tall. On mobile the dialog covers most of the first screen and the nav collapses to a hamburger. Banner text is small white type on dark purple. No horizontal overflow at either width.

### Mobile

Banner text truncates at the right edge ('…on August 5th,'). The letter becomes a single full-width column at 18px; the cookie dialog stacks its Accept/Decline buttons full-width and hides the first two paragraphs until dismissed. Footer stacks logo, Company links, badges, newsletter form and centred legal links.

### Copy

There is no h1; the first line of content is the banner 'Agency has been acquired by Klaviyo on August 5th, 2026. Read about it here.' and the letter opens 'As announced on August 5, 2026, Agency is being acquired by Klaviyo…'. There is no primary action; the only interactive elements are the banner link to a TechCrunch article, the nav links and the footer newsletter 'Submit'. First-screen proof: none.

## Measured

| Measure | 1440 px | 390 px |
| --- | --- | --- |
| Headline px | None | None |
| Headline weight | None | None |
| Headline tracking em | None | None |
| Body px | 22 | 18 |
| Characters per line | 73 | 36 |
| Sections | 1 | 1 |
| Reduced-motion rule | unverified | unverified |

## Interpretation

- When a company winds down, a short signed letter at reading size with one dated banner is a complete homepage; dropping the marketing shell avoids promising a product that will not exist.
- Keep the compliance badges and the Security link in the footer through a shutdown; existing customers still need them while data is migrated.
- A single-column, 22px, ~73ch letter is readable, but even one page of prose needs a heading element so assistive tech can find the start.

Suits a sunset or acquisition notice, a maintenance page or a one-announcement microsite; wrong as a reference for any live product homepage, since it demonstrates nothing about hero, proof or conversion design.

Risk: No heading structure, no primary action and a third-party cookie dialog that hides the message on first paint, especially on mobile. The banner truncates at 390px, cutting off the date. The newsletter form in the footer invites sign-ups for a company that is closing. For dataset purposes the page carries no transferable landing-page pattern beyond the wind-down letter itself.

## Limitations

- The page is a post-acquisition notice, not the product homepage that existed before August 2026; the earlier design was not inspected.
- No candidate location in the record, so no geography evidence.
- Tablet widths not inspected; no interaction tested at 390 beyond rendering and measurement.
- Single browser, single inspection date; homepage content can change.

## Sources

- https://agency.inc
- https://sequoiacap.com/companies/agency
