// Early access requests go by email until there is somewhere to send them.
// Swap this for a form action when a backend exists; every call to action
// on the site reads from here.

export const EARLY_ACCESS_EMAIL = "hello@grainline.example";

const subject = "Early access to Grainline";

const body = [
  "Hi Grainline,",
  "",
  "We'd like early access.",
  "",
  "Brewery:",
  "Brew length (hL or bbl):",
  "Brews per week:",
  "Who should we contact:",
  "",
].join("\n");

export const EARLY_ACCESS_MAILTO = `mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
  subject,
)}&body=${encodeURIComponent(body)}`;
