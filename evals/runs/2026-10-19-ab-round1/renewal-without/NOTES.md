# Ledgerlight landing page: notes

## Files
- `index.html` is the page; `styles.css`, `app.js` and `mark.svg` are local. No network requests, no web fonts (system serif and sans stacks), works from `file://`.

## Direction
A calm, paper-and-ink page that sells one idea: every contract has an **owner**, a **notice deadline**, a **next decision** and a **review trail**. The working example takes the place of enterprise proof.

- Hero: headline "Decide before the contract renews itself." with a sample contract card showing all four fields.
- "Four things" band names the fields.
- Working example: five sample contracts sorted by notice deadline, a detail panel, "Add to the trail" (outcome plus note), and "Add a contract" (it works out the notice deadline from the renewal date and notice period). State stays in the visitor's browser (localStorage, with a fallback when storage is blocked). There is a reset button.
- How it works (3 steps), four FAQs, then the consultation request.

## Assumptions (client unavailable)
1. **Primary buyer: in-house legal / legal ops at small companies.** The brief says "small legal teams track contracts", which reads as in-house. Outside counsel are not left out: the FAQ asks them to describe how they work today, the form has an "Outside counsel" option, and that choice tells you what share of requests come from them. To switch the buyer, change the eyebrow line, the hero lede and the first FAQ.
2. **Sample data is fictional and labelled as such.** Contracts are generic descriptions ("Office lease, 3rd floor"), not vendor names. People are initials plus team. Dates are set relative to the visitor's today so the example never goes stale. The footer and the example intro both say the data is sample data.
3. **No proof claims.** There are no customers, quotes, logos, metrics, savings figures or certifications. The security FAQ says this outright and sends those questions to the consultation.
4. **Product scope is not claimed beyond the brief.** The page does not name integrations, reminders/notifications, pricing or a data-hosting location, because none were given.
5. **Consultation form with no endpoint.** The form checks its fields, and with no endpoint configured it says plainly that **the request has not been sent**, then shows the details with a "Copy details" button. It never shows a fake success message.

## Before launch (blocking)
- **Wire the consultation form.** Set `data-endpoint="https://..."` on `<form id="consult-form">`. The script then POSTs JSON `{name, email, team, contracts, message}` and shows "Request sent" on a 2xx response, or a "could not send" message with the details kept. Until that is done, the page's conversion action does not deliver anything.
- Add a privacy notice link near the form once one exists.

## Verified (Playwright, Chromium)
- Viewports 1366, 820, 375 and 320 px in light mode, plus dark mode: no horizontal overflow, no console errors, no external requests.
- Example: select a row, record an outcome and note (pill switches to "Decided", trail entry added, hero card updates for the lease), empty-entry validation, add-contract validation, add a contract (deadline computed correctly), persistence across reload, reset.
- Consultation: required-field errors; the no-endpoint path shows the "not sent" panel.
- With JavaScript off, the hero card still reads sensibly and the example says JavaScript is needed.

## Not done
- The endpoint path was tested only against a local mock server (POST reached it, "Request sent" shown). It has not been tested against the client's real backend, and that backend has to allow CORS.
- No analytics, no OG/social image.
