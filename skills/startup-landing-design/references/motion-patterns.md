# Motion patterns and scroll

[Motion and responsive](motion-and-responsive.md) holds the hygiene rules: durations, easing, hover gating, reduced motion, pause controls and phones. This file says what each pattern is for, when it hurts, and how scroll motion behaves; [artifact patterns](artifact-patterns.md) records which moving artifacts worked on real pages. Numbers marked recommended are this project's defaults; a name beside a number is its source.

Motion can do six jobs on a landing page (Laubheimer; Kowalski). **State**: this tab or step is now current. **Causality**: this appeared because you acted, so it starts within about 0.1 s (Harley). **Hierarchy**: look here first; peripheral movement grabs attention whether it deserves it or not. **Continuity**: the same object before and after a change. **Spatial change**: where a thing came from or went. **Explanation**: the product's real behaviour unfolding, the strongest use, because animation aids understanding only when the content is about change (Tversky, Morrison and Betrancourt).

The default is a page that reads fully as stills: copy, controls and proof in place at first paint and after every scroll. Motion is added where it does one of the six jobs, and the contract names the job (MO-08). Decoration gets one slot per page, in the signature artifact or a first-time moment, never on something seen repeatedly, never as the only cue.

## Patterns

| Pattern | Communicates | Helps when | Hurts when | Reduced motion | Phones |
| --- | --- | --- | --- | --- | --- |
| Scroll reveal, once | Mild hierarchy | Supporting graphics; under 400 ms | On copy; replays; slow | Skipped, or fade only | Off |
| Pinned stage, scrubbed steps | Sequence, continuity | Real multi-step process; captions outside the moving layer | One idea over thousands of pixels | Sticky stays; nothing scrubs | Stacked steps |
| Scrubbed video or frames | One object transforming | Physical products; real frames; one per page | Software interfaces; data budgets | Poster and stills | Stills |
| Parallax | Depth (decoration) | Background imagery; small offsets; desktop | Text or controls on a moving layer | Removed | Removed |
| Number counter | Attention; "current" | Real sourced number; once, under 1 s | Fake precision; repeats; the h1 | Final number | Final number |
| Typewriter or rotating word | Decoration | Inside a demo input; under 3 s | The h1 or value claim | Full text | Full text |
| Marquee or logo ticker | "Many customers" | Real logos also listed statically; pauses on hover and focus | Copy that must be read; beside the h1 | Stopped | Static row |
| Hover lift or magnetic pull | Affordance | Fine pointers; inner child moves; under 150 ms | Touch; target slides away | Colour or opacity only | None |
| 3D or canvas scene | Decoration, unless the product is spatial | The scene is the product; poster; idles within 5 s | Abstract stand-in; delays the headline | Static frame | Still image |
| Morphing artifact | Continuity, state | Real before and after; under 600 ms | Never settles | Crossfade | Two stills |
| Tab or step swap | State, causality | Under 200 ms; selected text immediate | Fade out, then in; auto-rotation | Instant or short fade | Stacked sections |
| Autoplay product demo | Proof, when real | Real interface; under 15 s; poster; visible pause | Sound; several at once | Paused on the poster | Poster and pause |
| Motion as proof | Explanation, causality, state | Visitor or step control drives it; every state a still | Fake cursor miming a task; invented states | Steps still switch | Stacked states |

## Scroll

**Scroll-triggered** motion is a timed animation that starts when an element enters a range, then runs by itself (IntersectionObserver, GSAP `toggleActions`). **Scroll-linked** motion, also called scrubbed or scroll-driven, binds progress to scroll position, so it pauses and reverses with the thumb (CSS `animation-timeline`, GSAP `scrub`). A triggered animation can be missed and arrives late; a scrubbed one cannot be missed, but rewinds on scroll-up. So: scrub sequences, trigger reveals. Staged transitions of 1–2 s were tracked more accurately than cuts (Heer and Robertson). Body text is never scrubbed.

**Reveals.** Scroll-triggered text animation delayed reading and was mistaken for loading (Harley); scanners scroll past slow fades, and over 500 ms is too slow (Paul). Copy never waits for motion anywhere on the page, which extends MO-02 below the fold. A reveal is for supporting graphics, starts before the element is a tenth of the way into view (recommended), runs 150–400 ms, plays once, never re-hides on the way up, and is off at 390 px.

**Pinned stages.** Scrolljacking disoriented most participants; the tolerated form is short, below the fold, with normal sections between and important text kept out (Paul). A pinned stage holds a real multi-state artifact, keeps captions outside the scrubbed layer, spends at most about three viewport heights (recommended), never changes scroll speed or direction, and becomes stacked steps on phones. Two measured leaders pin a stage for about 1,350 px and 3,150 px and drop it under reduced motion.

**Parallax** is off by default: the vestibular trigger every source names (Head; W3C; web.dev), with little visitor enthusiasm, blank phone screens from late layers, and movement read as advertising (Sherwin). If used: background imagery only, offsets at most a tenth of the layer's height (recommended), fine-pointer desktop, gone under reduced motion, nothing readable or clickable on it.

**Scrubbed video and frames.** The Apple-style sequence draws a hundred or more preloaded frames to a fixed canvas by scroll fraction. One multi-instance demo reached 55.8 MB; Apple's page on slow 3G had 347 KB of 2.6 MB after its first requests, behind one fallback still (van Wissen). Rule: one per page, the real product, lazy after first paint, within 2.5 MB beyond the first load (recommended), reserved dimensions (PF-04), a poster, stills under reduced motion and on phones.

**CSS scroll-driven animations.** `animation-timeline: scroll()` follows a scroller, `view()` follows the element's position in the viewport, and `animation-range` limits where keyframes play. The browser drives the timeline off the main thread, which scroll listeners cannot (Chrome Developers). Support as of 2026-10-20: Chrome and Edge from 115, Safari from 26, Firefox release behind a flag, and an Interop 2026 focus area, so cross-browser support is a goal, not a fact (Chrome Developers; WebKit; MDN; web.dev). Scroll-triggered CSS (`animation-trigger`) is slated for Chrome 145 and needs an IntersectionObserver fallback. Fallback rule: write keyframes so the 100% state is the finished layout, or guard with `@supports (animation-timeline: scroll())`; put `animation-timeline` after the `animation` shorthand; wrap in `@media (prefers-reduced-motion: no-preference)`; animate only transform and opacity (MO-04). Measured leaders use it for sensing and edges (a nav "stuck" state, tab-strip fades, scroll shadows), not for moving copy.

## Hover, cursor, 3D, counters, tickers, typewriters

- **Hover** moves an inner child by a few pixels (recommended at most 8 px) in under 150 ms, keeps the hit area still so the target never slides from under the pointer, animates no shadows, sits behind `(hover: hover) and (pointer: fine)` (MO-07), and has a focus state at least as visible.
- **Cursor followers** are an agency idiom. A product page keeps the native cursor so link and text affordances survive; any follower is `pointer-events: none`, fine-pointer only, gone under reduced motion.
- **3D and canvas scenes** appear only when the product is spatial or physical: a poster for first paint, idle within 5 s (MO-05), no drawing off-screen, a still on phones and under reduced motion. Continuous repaint costs battery, memory and the first tap (web.dev).
- **Counters** run at most 1 s (recommended), once, to a real figure with its source beside it, and read as the final number in any capture. The h1 and primary action never count (MO-05). A ticking number reads as urgency (HP-05).
- **Tickers** run linear, pause on hover and keyboard focus, show a pause control (MO-05), mark duplicated copy `aria-hidden`, and repeat the logos as a static row on phones.
- **Typewriters and rotating words** live inside a demo input, run under 3 s (recommended), reserve their width, keep the full sentence in `aria-label` with the animated span `aria-hidden` (a screen reader otherwise announces fragments; Stephanides), and never touch the headline, where a screenshot can catch a different claim each time.

## Motion as proof

The product's real behaviour unfolding is the strongest motion on the page and the easiest to fake. Across studies, animation did not reliably beat static graphics; the wins came from extra information or interactivity and from pacing slow enough to perceive (Tversky, Morrison and Betrancourt). Vercel's product tour follows that: real interface, one tooltip at a time, click-driven, tappable cards on phones instead of a shrunken tour (Vercel).

Rules. The visitor's action or a visible step control drives the sequence; if a timer or scroll also drives it, a click wins and stops the timer. Every state stands alone as a readable still, because captures, crawlers and reduced motion all see stills. Timing is real or labelled illustrative beside the artifact (HP-03). The same artifact persists across sections. Every control changes something visible within 300 ms or is removed ([artifact patterns](artifact-patterns.md)). Self-running scripted sessions are the artifact most often caught still moving under reduced motion, or empty instead of still. The record says which behaviour and timing are real.

## Reduced motion keeps the story

Under `prefers-reduced-motion: reduce` the page tells the same story with less movement (MO-01). Sequences still change state, instantly or with a crossfade of 200 ms or less (recommended). Counters show the final number. Video holds its poster. Parallax, zoom, spin, animated blur, depth movement and scroll-linked translation are gone; a sticky stage may stay, but nothing scrubs inside it. Nothing is hidden and no content waits. The substitution is the same timing with opacity in place of transform (Head); fades are allowed because opacity and colour changes are not motion (W3C; Apple). Reduced means fewer and gentler, not zero (Kowalski). Measured leaders skip reveals entirely under reduce, so content is present on arrival. The media query is a courtesy; the pause control is the requirement (MO-05).

## Sources

- Apple, Human Interface Guidelines, "Accessibility", <https://developer.apple.com/design/human-interface-guidelines/accessibility>
- Chrome Developers, "Scroll-driven animations", <https://developer.chrome.com/docs/css-ui/scroll-driven-animations>; "Scroll-triggered animations", <https://developer.chrome.com/blog/scroll-triggered-animations>
- GSAP, "ScrollTrigger", <https://gsap.com/docs/v3/Plugins/ScrollTrigger/>
- Val Head, "Designing With Reduced Motion for Motion Sensitivities", Smashing Magazine, <https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/>
- Jeffrey Heer and George Robertson, "Animated Transitions in Statistical Data Graphics" (2007), <https://homes.cs.washington.edu/~jheer/files/2007-AnimatedTrans-InfoVis.pdf>
- Emil Kowalski, skills repository (design engineering, animation performance), <https://github.com/emilkowalski/skills>
- MDN, "CSS scroll-driven animations", <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations>; "Firefox experimental features", <https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features>
- Nielsen Norman Group: Aurora Harley, "Animation for Attention and Comprehension", <https://www.nngroup.com/articles/animation-usability/>, and "Scroll-Triggered Text Animations Delay Users", <https://www.nngroup.com/articles/scroll-animations/>; Page Laubheimer, "The Role of Animation and Motion in UX", <https://www.nngroup.com/articles/animation-purpose-ux/>; Sara Paul, "Scroll Fading 101", <https://www.nngroup.com/articles/scroll-fading-101/>, and "Scrolljacking 101", <https://www.nngroup.com/articles/scrolljacking-101/>; Katie Sherwin, "Parallax Scrolling: Usability Study", <https://www.nngroup.com/articles/parallax-usability/>
- Savvas Stephanides, "The problem with the typewriter effect", <https://dev.to/savvasstephnds/the-problem-with-the-typewriter-effect-and-how-to-fix-it-2731>
- Barbara Tversky, Julie Morrison and Mireille Betrancourt, "Animation: can it facilitate?" (2002), <https://faculty.washington.edu/aragon/classes/hcde411/w13/readings/Tversky_AnimationFacilitate_IJHCS02.pdf>
- Jurn van Wissen, "Let's Make One of Those Fancy Scrolling Animations Used on Apple Product Pages", CSS-Tricks, <https://css-tricks.com/?p=308477>
- Vercel, "Designing the Vercel virtual product tour", <https://vercel.com/blog/designing-the-vercel-virtual-product-tour>
- W3C, WCAG 2.2 Understanding 2.3.3 "Animation from Interactions", <https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html>; 2.2.2 "Pause, Stop, Hide", <https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html>
- web.dev, "Interop 2026", <https://web.dev/blog/interop-2026>; "Animations overview", <https://web.dev/articles/animations-overview>; "prefers-reduced-motion", <https://web.dev/articles/prefers-reduced-motion>
- WebKit, "A guide to scroll-driven animations with just CSS", <https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/>
