# Build baseline

What every page ships with before any styling decision. Each item below is a failure blind graders found on this skill's own pages in rounds 3 and 4, and most are now automatic checks, so skipping one costs a rerun. Copy the snippets and adapt names; they have no dependencies.

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
- **Long input stays inside.** Any element that shows what the visitor typed gets `overflow-wrap: anywhere; min-width: 0`, and inputs get a `maxlength` (LY-08).

## 2. Claims and states

- **Say what the action does before the click.** If sign-up is not live, the line beside the button says so before the visitor types ("Nothing is sent yet: this saves your request on this page"). Copy above the form never promises what the form will not do ("You hear back by email").
- **No claims the brief does not make.** Do not add product features, platforms, limits, prices or commercial terms the brief did not state ("the call is free", "priced per legal entity", "no sales call", "free sandbox", "costs nothing when the run passes"). Write the useful ones in the record under *To confirm* for the client instead.
- **No notes to the builder or client on the page** ("ours to confirm with the client", "per the brief", "TODO", "[Company]") (CP-12).
- Big numbers in the first screen are results the brief supplies or nothing. A large "100%" labelled "in this example" still reads as a claim.

## 3. Craft defaults

```css
*,*::before,*::after{box-sizing:border-box}
body,h1,h2,h3,h4,p,figure,blockquote,dl,dd,ol,ul{margin:0}
ol,ul{padding:0;list-style:none}               /* add list styles back where a list should look like one */
img,svg,video,canvas{display:block;max-width:100%}
input,button,textarea,select{font:inherit;color:inherit}
:where(p,li,dd,td,output,[role=status]){overflow-wrap:anywhere;min-width:0}
.skip{position:absolute;left:12px;top:-60px;padding:12px 16px;background:var(--ink);color:var(--paper);z-index:100}
.skip:focus{top:12px}                          /* visible when focused (AX-13); never only .sr-only */
```

- **Faces render as named.** Ship the display and text faces as files (self-hosted `woff2` with `font-display: swap`, or a font service) or name a face every platform has. A stack that starts with Charter, Iowan or SF Pro falls back to Times or DejaVu on Linux, which is where graders and crawlers render (TY-11).
- **Button colours win over nav link colours.** A `.nav a { color }` rule outranks `.btn` and paints dark text on the header's filled button; scope link colours to `.nav a:not(.btn)` or raise the button's specificity. The checker runs contrast at 390 and at 1440 (CO-01).
- **No text under 12px**, footnote markers and uppercase tags included; a footnote marker is a 24px target or the whole phrase is the link (TY-06, MB-03).
- **Tables on phones.** Below 600px a table whose last column matters (a deadline, an amount) becomes stacked rows with labels, not a sideways scroll that hides that column. Between 900 and 1300px check that wide tables still fit their containers.
- **One page, said once.** The phone page is at most eight screens (MB-10). Each fact appears once: the flow is not explained as steps, then as a table, then as role columns. Cut repeats before adding sections.

## 4. The menu

```html
<button class="menu-btn" aria-expanded="false" aria-controls="site-menu">Menu</button>
<nav id="site-menu" hidden>…</nav>
<script>
const b = document.querySelector('.menu-btn'), m = document.getElementById('site-menu');
const set = open => { b.setAttribute('aria-expanded', open); m.hidden = !open; };
b.addEventListener('click', () => set(b.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') { set(false); b.focus(); } });
document.addEventListener('click', e => { if (!m.contains(e.target) && e.target !== b) set(false); });
m.addEventListener('focusout', e => { if (!m.contains(e.relatedTarget) && e.relatedTarget !== b) set(false); });
</script>
```

Escape closes the menu and returns focus to the button (MB-08); a click outside or tabbing out closes it too. The phone menu holds the primary action as well as the links. Put the menu button at the right edge of the bar.

## 5. Below the first screen

The template tells graders named most often after the hero: a 2 × 2 or 3-up card grid, a steps row beside a dark code block, a lone price card, a final CTA band, and three two-column text bands in a row. None is banned, but each section takes its form from the subject inventory before it takes a card: a ledger page, a ticket, a timetable, a shift sheet, a receipt, a log. Use at most one grid of equal cards on the page. The statement's graphic language (line weight, tone steps, the character) continues into at least two later sections, so the page is recognisable with the logo removed.
