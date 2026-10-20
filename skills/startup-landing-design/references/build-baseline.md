# Build baseline

What every page ships with before any styling decision. Each item below is a failure blind graders found on this skill's own pages in rounds 3 to 6, and most are now automatic checks, so skipping one costs a rerun. Copy the snippets and adapt names; they have no dependencies.

## 1. The signature artifact is one loop on one screen

Mark the product artifact with `data-signature` (one element per page). The checker finds it, measures it and operates it.

- **In the first screen.** At least 280px of it (or all of it) is visible without scrolling at 390 × 844 and at 1440 × 900 (HR-07). On a phone that usually means a short headline, a one- or two-line five-second line, one action, and the artifact starting by about y = 480. If the whole artifact cannot fit, its live part (the input and the result) goes first and the explanation follows.
- **Control and result share the screen.** On a phone, after any tap the result is visible without scrolling: put the result above or beside the controls, make the result strip sticky inside the artifact, or move it into view. A highlight that lands 700px below the tapped chip reads as a dead control (MB-07). A change to the control alone (it turns dark) does not count.
- **Every control does something visible from the default state.** If a toggle changes nothing in the sample (a filter for an ingredient the sample does not use), change the sample so it does, or remove the toggle (MB-07).
- **Thumb-sized.** Every control inside the artifact is at least 44 × 44px on phones, chips and steps included (MB-09). Grids of tiny cells are drawn on a canvas or SVG with one larger control beside them.
- **Keyboard works and focus is never lost.** Every control works with Enter or Space. A button that disables itself (Next on the last step) moves focus to the next sensible control first; a Replay that rebuilds the panel puts focus back on Replay (AX-12).
- **The default state is already a good result**, and a Reset returns everything, view toggles included.
- **The sample label sits at the top of the artifact**, beside its title ("Sample week, written for this page"), never only in a footer under it.
- **Audit the sample like a copy editor.** Counts add up ("3 problems" lists three), dates carry the right weekday for their year (CP-13), states agree with each other (no "Awaiting approval" beside "Approved 14:32"), the demo obeys every rule the copy states (if the copy says reefers only take reefer doors, the demo refuses a dry van), today's sample never duplicates another day's, and the visitor's real clock never leaks into a fixed sample story.
- **The result stays where the visitor is looking.** After a control runs, never scroll the page away from it; if the result is taller than the space left, put its verdict line first and keep the details below (MB-07 now needs the main changed element at least half on screen).
- **The result's words are on screen too.** The live region that states the result (`role="status"`, `aria-live`, `<output>`) is at least half visible after every tap on a phone, not just a chart label changing near the control (MB-07 checks it). On a phone, put the readout directly above the control that drives it.
- **Before and after stay side by side.** When the artifact compares the old way with the product, the phone layout keeps both visible together (a compact two-column strip or a toggle in place), never one stacked 1,000px below the other.
- **Show the context the brief stresses, inside the artifact.** If the brief says users wear gloves, stand at a freezer or read before dawn, the demo shows that moment (the large buttons at the freezer, the dark-screen reading) rather than mentioning it in an FAQ.
- **Steppers start at the start; tools start at a good result.** A story in steps opens on step 1 with Next and Reset; a calculator or search opens on a sensible filled state. Tabs follow the ARIA tabs pattern: arrow keys move between tabs, Tab leaves the tab list.
- **Demo logic behaves like the real thing.** Search matches whole tokens ("mouse 4" never returns "mouse 14"), sorting and counts agree with what is shown.
- **Two screens at most on a phone.** The artifact is at most 1,688px tall at 390 (MB-10). A long list is grouped (this week, later), shows the first few with a "Show all 11" control, or pages; the whole page stays within eight screens.
- **The action follows the input.** An action that uses what the visitor set (copy my list, check my lift) sits after the controls it depends on, never above them acting on the sample.
- **A sticky result never covers a control.** On a phone, a pinned result strip hides the field the visitor is tabbing to (LY-06 tabs both ways at 390). Put the result above the controls, or make it sticky only where the viewport is at least 700px tall, and give controls `scroll-margin` equal to the strip's height.
- **When the brief limits what the product decides, so does the demo.** A sample verdict reads as advice ("Check with the appointed person: above 75% of chart"), never as the product refusing or approving on its own ("Not issued").
- **Long input stays inside.** Any element that shows what the visitor typed gets `overflow-wrap: anywhere; min-width: 0`, and inputs get a `maxlength` (LY-08).

## 2. Claims and states

- **Say what the action does before the click.** If sign-up is not live, the line beside the button says so before the visitor types ("Nothing is sent yet: this saves your request on this page"). Copy above the form never promises what the form will not do ("You hear back by email").
- **No claims the brief does not make.** Do not add product features, platforms, limits, prices or commercial terms the brief did not state ("the call is free", "priced per legal entity", "no sales call", "free sandbox", "costs nothing when the run passes"). Write the useful ones in the record under *To confirm* for the client instead.
- **Name the payer in the first screen.** One line in the first screen speaks to the person who pays (the lab manager, the BSA officer, the studio owner) and says what they get; their section follows soon after the artifact, not three scrolls down.
- **Answer the diligence questions a regulated buyer will be asked**, as questions with honest answers or "covered in the demo": where data is held, who can access it, what it connects to, who makes the decision. Never invent certifications or integrations.
- **Say the product's status in the first screen** when it is not live ("Settle is in development; this is the checklist it will give you"). A visitor should never learn in the fifth section that nothing exists yet.
- **No destination for sign-ups? Do not collect emails.** An email saved only in the visitor's own browser collects nothing for the founder and misleads the visitor; graders failed it every time. Offer a real local action instead: download a calendar reminder (`.ics`) for the launch month, copy or print the useful thing the page made, or follow the project where the brief gives a link. List the missing endpoint first under *To confirm*.
- **The person who pays sees the control they get.** When one audience pays and another uses (owner and members, manager and appointed person), the payer gets a second, smaller artifact showing what they set or decide (the firing schedule, shelf rules, the sign-off log), not one paragraph. Beside the main action, say what happens after the click (what the trial or pilot involves first), in the brief's terms.
- **Every audience the brief names gets its own answer.** The person who pays and the person who uses each get a section that answers their first doubt and says what the next step involves, in the brief's terms; unknowns (pilot length, effort) are stated as questions the first call answers, not invented.
- **No notes to the builder or client on the page** ("ours to confirm with the client", "per the brief", "TODO", "[Company]") (CP-12).
- Big numbers in the first screen are results the brief supplies or nothing. A large "100%" labelled "in this example" still reads as a claim.

## 3. Craft defaults

```css
*,*::before,*::after{box-sizing:border-box}
body,h1,h2,h3,h4,p,figure,blockquote,dl,dd,ol,ul{margin:0}
ol,ul{padding:0;list-style:none}               /* add list styles back where a list should look like one */
img,svg,video,canvas{display:block;max-width:100%}
input,button,textarea,select{font:inherit;color:inherit}
:where(p,li,dd,td,output,[role=status]){overflow-wrap:break-word;min-width:0}   /* break-word, not anywhere: anywhere splits identifiers mid-name in tables */
.echo{overflow-wrap:anywhere}                  /* only on elements that print what the visitor typed */
.skip{position:absolute;left:12px;top:-60px;padding:12px 16px;background:var(--ink);color:var(--paper);z-index:100}
.skip:focus{top:12px}                          /* visible when focused (AX-13); never only .sr-only */
```

- **Compose the 1440 first screen as one block.** The action sits with the headline, not alone in an empty column; nothing leaves a hole of a quarter of the screen above or beside the headline (HR-08). Set `text-wrap: balance` on headings so no headline ends on one word (HR-03).
- **Readable detail.** Text inside the artifact is at least 14px on phones; dense 12–13px grey mono detail reads as clutter. Every standalone link (nav, footer, "Read the docs") is at least 44px tall at every width, not only on phones.
- **Overrides that apply.** Media queries come after the base rules they change (or use mobile-first `min-width` queries); check the 390 screenshot shows each override took effect.
- **Share card.** Use `woff2`. When the brief gives a domain, make `og:image` absolute on it (`https://refresh.example/og.png`) and list the file for the client to host; with no domain, keep it relative and list it under *To confirm*.
- **Ship the faces you name.** A face that is installed on the build machine (Inter, Lora, TeX Gyre, Liberation) is not on visitors' machines. Either name a face every major platform has (Georgia, Palatino, Arial, Helvetica, Verdana, system-ui) or ship the file: copy the `.woff2`, `.woff`, `.otf` or `.ttf` from the system font folder (`fc-list` lists them; check the licence allows embedding, as OFL and GUST do) into `fonts/` next to the page and declare it with `@font-face` and `font-display: swap` (TY-11).
- **Faces render as named.** Ship the display and text faces as files (self-hosted `woff2` with `font-display: swap`, or a font service) or name a face every platform has. A stack that starts with Charter, Iowan or SF Pro falls back to Times or DejaVu on Linux, which is where graders and crawlers render (TY-11).
- **Button colours win over nav link colours.** A `.nav a { color }` rule outranks `.btn` and paints dark text on the header's filled button; scope link colours to `.nav a:not(.btn)` or raise the button's specificity. The checker runs contrast at 390 and at 1440 (CO-01).
- **No text under 12px**, footnote markers and uppercase tags included; a footnote marker is a 24px target or the whole phrase is the link (TY-06, MB-03).
- **Tables on phones.** Below 600px a table whose last column matters (a deadline, an amount) becomes stacked rows with labels, not a sideways scroll that hides that column. Between 900 and 1300px check that wide tables still fit their containers.
- **Valid markup.** Generate repeated rows from one data source and keep the static fallback in step with it; a missing quote (`class="line data-key="x"`) silently breaks the no-JS page (AX-07 reads the delivered HTML).
- **One page, said once.** The phone page is at most eight screens (MB-10). Each fact appears once: the flow is not explained as steps, then as a table, then as role columns. Cut repeats before adding sections.

## 4. The menu

```html
<button class="menu-btn" aria-expanded="false" aria-controls="site-menu">Menu</button>
<nav id="site-menu">…</nav>   <!-- no hidden attribute in the markup: script closes it, so no-JS visitors keep the links -->
<script>
const b = document.querySelector('.menu-btn'), m = document.getElementById('site-menu');
const set = open => { b.setAttribute('aria-expanded', open); m.hidden = !open; };
set(false);                                   // closed once script runs
// CSS: @media (min-width: 760px) { .menu-btn { display: none } #site-menu[hidden] { display: flex } }
b.addEventListener('click', () => set(b.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') { set(false); b.focus(); } });
document.addEventListener('click', e => { if (!m.contains(e.target) && e.target !== b) set(false); });
m.addEventListener('focusout', e => { if (!m.contains(e.relatedTarget) && e.relatedTarget !== b) set(false); });
</script>
```

Put the menu button before the nav in the DOM, so Tab moves from the button into the open menu. Hide the menu only once script runs, so a visitor without JavaScript still sees the links in place rather than an open panel over the headline (MB-05): put `<script>document.documentElement.classList.add('js')</script>` in the head and write the closed state as `.js #site-menu[hidden]`, or use `<details>` for the menu. The skip link's target takes focus: `<main id="main" tabindex="-1">`.

Escape closes the menu and returns focus to the button (MB-08); a click outside or tabbing out closes it too. The phone menu holds the primary action as well as the links. Put the menu button at the right edge of the bar.

## 5. Below the first screen

The template tells graders named most often after the hero: a 2 × 2 or 3-up card grid, a steps row beside a dark code block, a lone price card, a final CTA band, and three two-column text bands in a row. None is banned, but each section takes its form from the subject inventory before it takes a card: a ledger page, a ticket, a timetable, a shift sheet, a receipt, a log. Use at most one grid of equal cards on the page, and do not wrap a strong artifact in the default skeleton (two-column hero, a row of three cards, alternating split sections): graders call the frame templated even when the artifact is excellent. **Draw the world, well.** At least two original pictures of the subject's physical world (the crane on its outriggers, the kiln shelf, the paperwork on the kitchen table), drawn as inline SVG in the page's own graphic language, not stock-like icons. A page with only type, rules and boxes reads as a generic industrial or editorial template. If a drawing would come out as crude blocks, draw a precise technical diagram of the same thing instead (an elevation, a cutaway, a plan view); graders mark crude illustration down more than none. The statement's graphic language (line weight, tone steps, the character) continues into at least two later sections, so the page is recognisable with the logo removed.
