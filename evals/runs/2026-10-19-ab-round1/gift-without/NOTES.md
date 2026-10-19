# Poolday landing page: notes

## Files
- `index.html`: the page
- `styles.css`: all styles (no framework)
- `app.js`: the local example pool (no network calls, no storage)
- `favicon.svg`: gift-box mark, same as the header logo
- `fonts/`: self-hosted Lora subsets (SIL OFL 1.1, see `fonts/LICENSE.txt`); body text uses the system font stack

Opens straight from disk with no network. Tested in headless Chromium at 1366, 820, 375 and 320px wide: no horizontal overflow, no console errors, no remote requests.

## Direction
"A real occasion, not a finance dashboard." The page uses warm paper tones, a ribbon red and sunny yellow, and a serif (Lora) for headings. The main visual is a **gift tag** instead of a dashboard card. Progress shows as a **ribbon made of each friend's colored piece**, not a percentage bar, so the group is visible inside the total. Notes people leave ("From me and Biscuit.") sit next to the amounts so it reads like a card being signed.

## Main action: decision
The brief left it open between "Start a pool" and "See how it works". I made **Start a pool** the primary button everywhere, with **See how it works** as the secondary. Since there's no live app to link to yet, "Start a pool" scrolls to the on-page builder and focuses its first field. Starting a pool *is* the example, so the primary action does something real today. **When the app ships, point the `[data-start]` links at the real sign-up/create flow.**

## The local example ("Start a pool, try it here")
- Edit who it's for, the occasion, the gift, its cost and the group size.
- Chip in as a friend (name, amount, optional note), or use "Add a sample friend". You can remove any contribution.
- The organizer view shows the amount still needed, who's in ("2 of 6"), and roughly what each remaining person would pay if they split what's left. A status line covers every case: not started, people still to join, everyone in but short, exactly covered, or over by $X.
- It writes a ready-to-paste **group chat message** with a Copy button, so the example is useful on its own.
- It starts with two sample friends already in so the organizer view isn't empty, and a confirmation line under the form ("Tuna is in with $25. $85 still to go." plus a "See the pool" link) because on phones the pool card is below the form.
- There are no payment fields anywhere. The copy says clearly that nothing is charged, sent or stored, and a reload clears it.

## Assumptions
- **Currency is USD** and wording is American English.
- **Pre-launch.** The FAQ says Poolday is "still early" and the full app is "on its way". Change this if the product is live.
- **I didn't describe any payment mechanics or policies** (who holds the money, fees, refunds, what happens to extra funds), because the brief doesn't specify them. The FAQ only covers what the brief supports. Add answers once these are decided.
- **Notes with contributions** ("a note for the card") are my addition to the brief's three steps. They support the "human occasion" feel. Remove the note field and the "notes come along too" point if the product won't have them.
- **The organizer sees individual names and amounts** in the example. If the product hides amounts from the organizer, change the example list and the FAQ answer "What does the organizer see?".
- **No social proof.** There are no reviews, logos, user counts or volume figures. The names in the hero and the example (Ama, Jo, Priya, Sam, Dee, etc.) are labeled as sample/illustrative.
- **No email capture or sign-up form**, since there's no backend to send it to.
- The footer has no legal links or contact details because none were provided. Add them before launch.

## Not done / follow-ups
- No real link target for "Start a pool" yet (see above).
- No social share image (og:image) or analytics. Both need real URLs.
- Without JavaScript the page still reads fully, but the example pool card shows as empty.
