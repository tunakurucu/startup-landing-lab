# Motion and responsive design

Write a behavior contract before animating:

| Trigger | State change | Purpose | Static alternative |
| --- | --- | --- | --- |
| Choose a scenario | Trace and explanation update | Compare outcomes | Same final trace without tween |
| Advance a workflow | Current step changes | Explain order | Numbered list |
| Submit local input | Result/status appears | Confirm action | Immediate text update |

Do not infer animation libraries, durations or easing from reference screenshots. Casebook interactions are limited to those explicitly marked observed. Use CSS transitions for small state changes; add dependencies only for a behavior CSS/native controls cannot support well.

Prefer user-triggered motion. Avoid auto-advancing essential content. If a carousel advances automatically, provide pause and retain focus. Respect prefers-reduced-motion: reduce; remove parallax, animated scrolling and continuous decoration. Preserve state changes and all content.

At approximately 390px: convert wide spatial artifacts into readable vertical sequences, retain important labels, and avoid tiny nested desktop chrome. Keep hit areas near 44px where practical. Keep short tables scrollable in a labelled region if reflow would destroy comparison. Never hide product meaning merely to eliminate overflow.

At tablet widths: test the awkward middle. Do not let a three-column desktop grid survive with unreadably narrow columns. Check sticky navigation against wrapping and text zoom. Reserve media dimensions and avoid relying on late fonts for stable wrapping.
