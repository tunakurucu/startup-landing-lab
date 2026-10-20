# Brief: find feature flags that should have been deleted

Flagsweep is an open-source CLI that scans a codebase for feature flags, checks each one against the flag service's history, and lists the flags that have been fully on or off for weeks so they can be removed, with the files and lines to change.
Engineers and tech leads adopt it themselves; there is no paid plan.
It replaces a quarterly "flag cleanup day" that never happens and a spreadsheet of flags nobody owns.
Install is `pipx install flagsweep`; it works with LaunchDarkly, Unleash and plain config files. Docs are at https://flagsweep.example/docs and the code at https://github.com/flagsweep/flagsweep.
It is MIT licensed. We have no usage numbers and no company behind it yet.
Engineers should understand what it outputs before they scroll.
Use startup-landing-design to choose a direction, build the page and verify it.
