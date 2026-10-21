# Staplepress: design record

## Subject, audience, job
- Subject: a small press that prints and staples (saddle-stitches) zines and art books, 25 to 500 copies.
- Audience: artists and small-press publishers on a laptop, their PDF open in another window.
- Primary job of the page: get a print-ready PDF uploaded at https://staplepress.example/start, with the
  proof promise, the starting price and the limits (no full-bleed covers, 25 to 500 copies) understood first.

## Plan (first pass)
Color
- Paper   #F2F3EF  uncoated, slightly cool white (deliberately not cream)
- Ink     #000000  black ink, used as real black, not a tinted near-black
- Grey    #5E605C  half-tone grey for secondary text
- Blue    #A9DCEE  non-photo blue: the pencil printers and artists mark up with, for guides and marks
- Blue pencil (text) #1D6684  same hue, dark enough to read as text
- Steel   #474B4F  press bed, only behind the proof sheet

Type (system only, nothing loaded from the web)
- Gill Sans (Gill Sans MT, Seravek, Calibri fallback): Eric Gill was a printer; headlines and UI.
- Charter / Iowan Old Style / Cambria / Georgia: body copy, generous leading.

Layout
```
[Staplepress]                       How a job goes  Prices  Limits  [Upload your PDF]
-------------------------------------------------------------------------------
See your zine on press              |  steel press bed
before we staple it.                |   +--------------------------------+
para                                |   | 24 | 1  ||  22 | 3   | crop marks|
[Upload your PDF]  prices           |   +--------------------------------+
                                    |  blue pencil note: proof photo
-------------------------------------------------------------------------------
How a job goes (a real sequence, so numbered 1-4, laid along a horizontal "feed")
Prices: one worked example ($2.10 x 50 = $105) + what costs more
Check your page count (interactive: multiples of 4 for stapled books)
What we can't do yet / what we replace
120 artists, none named (honest note)
Footer CTA
```
Left-aligned text throughout; ragged right; measure ~62ch.

Principles
- The proof is the hero: the thing nobody else shows you, drawn as an imposed sheet with crop marks.
- Speak like the people at the press: plain, specific, a little dry. No marketplace language.
- Non-photo blue is the only accent, used for marks and annotations the way it is in a print shop.

## Review against the brief / defaults
- Cream + serif + terracotta (default 1): avoided; paper is cool, accent is non-photo blue.
- Broadsheet hairlines (default 3): only crop marks on the proof; sections separated by space, not rules.
- SaaS cards (4): steps are a feed of sheets, not rounded cards; no shadows except the photographed sheet.
- Template chrome (5): no caps eyebrows, no middle-dot meta strings, no arrows on buttons, no mono labels.
- Changed from first idea: I first had a red "approved" stamp as second accent; cut it (one accent only).
- Changed: first wanted a price calculator, but the brief only gives one price; a calculator would invent
  prices. Replaced by a page-count checker, which uses real press arithmetic (4 pages per folded sheet).

## Critique log
- Pass 1 (shots/): section spacing collapsed because `.wrap{padding:0 ...}` overrode `section{padding-top}`.
  Fixed by making .wrap set only side padding. Footer selector typo (`footer.small`) fixed.
- Job ticket: dashed rows broke at the column gap; moved the gap into dd padding. Cut the torn-edge
  ::after on the ticket: it read as decoration, one accessory too many.
- Mobile: page-count checker stayed two columns at 390px; now stacks below 52rem.
- Fold diagram: staple mark moved onto the spine of the nested sheets.
- Checked: no network requests, no console errors, no horizontal scroll at 390px and 1440px,
  checker copy for 24, 22, 7, 1, 0 and empty input.
- Kept the blue "2" in the sequence on purpose: the proof step is the reason to choose this press.
