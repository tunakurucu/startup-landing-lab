# Halfstep landing page: notes

Open `index.html` straight from disk. It needs no network: system fonts only, inline SVG, and the audio is synthesized in the browser with Web Audio.

Files: `index.html`, `styles.css`, `app.js`, `favicon.svg`.

## Direction I chose
- **Audience: adults coming back to the piano**, not teachers. The brief's core loop (record yourself on your phone, get told what to practise) is a self-directed player's job, and a waitlist converts best when it speaks to one person. Teachers aren't shut out: the form has an "I'm a piano teacher" option and one FAQ answers them. That gives you real data on the open question without splitting the page.
- **Tone: a practice partner, not an examiner.** Warm paper colours, sage for "steady" and amber for "worth a slower pass". There's no red, no scores and no percentages. Steady bars are the default and get mentioned first ("13 of 16 bars came out steady").
- **Promise:** "Play it through once. Practise the bars that need it." The product is sold on its two outputs from the brief: *which bars* and *how slowly*.

## The try-it example
- It uses a sample take of the Minuet in G (BWV Anh. 114, public domain), right hand, bars 1–16. The take is synthesized in the browser and has three deliberate wobbles: a stop in bar 3, a rushed run in bar 7, and a pause plus uneven notes in bar 15.
- Visitors can play the take (about 28 s, with a playhead moving across the bar map) or skip straight to the map. Each bar draws its notes as they were played, so the wobbles show up visually too.
- Clicking a marked bar shows what happened, a loop to practise (for example bars 6–7), and a tempo ladder (for example 80 → 88 → 96 → 104). Each step plays the loop cleanly at that tempo with a metronome click.
- **The analysis is fixed and pre-written, not live.** The page says so in three places: under the demo, in the FAQ and in the footer. That way the page makes no accuracy claims.

## Waitlist (no backend yet)
- The form is ready to connect. Set `data-endpoint="https://…"` on `<form id="join-form">` in `index.html`. It sends a POST of JSON `{ email, role: "player" | "teacher", source: "landing" }` and treats any 2xx response as success.
- **Until an endpoint is set, the form tells the visitor plainly that sign-ups aren't switched on yet and their email wasn't saved.** I didn't fake a "You're on the list" message. Connect the form before you send any traffic to the page.

## Assumptions (please check)
- The product name is Halfstep. The logo mark (two white keys with an amber black key between them, i.e. a half step) and the favicon are placeholders I made.
- These are product claims I inferred from the brief's "encouraging, not like a music exam": "No marks, no grades", "no score out of 100", tempo ladders that climb back to your own speed, and stops and restarts being fine while recording. Cut any of them that don't match the product.
- The FAQ promises that the email is used only to contact people about the beta. Confirm that matches your privacy practice.
- I used British spelling ("practise" as the verb), following the brief.
- There are no testimonials, user counts, accuracy figures, pricing or launch dates, because none exist yet.
- There's no dark mode and no analytics.

## How I verified it
I ran Playwright (Chromium) against `file://` at 1366, 820 and 375 px wide:
- no console errors and no requests to anything outside the local files
- no horizontal overflow at any width
- the take plays, the playhead follows the bars, and the map appears automatically when the take finishes (about 28.5 s)
- "Skip to the practice map" works
- clicking bars and tempo steps plays the right bars, and choosing another bar stops whatever is playing
- the email check rejects a bad address, and the form shows the preview message when no endpoint is set

I only checked the sound by inspecting the code and the timing, not by listening. It's worth a quick listen on a real phone, and iOS has its silent switch to watch for.
