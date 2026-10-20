# Brief: catch database migration drift before deploy

Driftcheck is an open-source CLI that compares the database schema your migrations will produce with what is actually running in production, and fails the CI job before a deploy that would break.
Backend and platform engineers adopt it themselves; nobody buys it.
It replaces finding out from a failed deploy at 6 pm, or a hand-written "schema check" script nobody maintains.
Install is `npx driftcheck` (Postgres and MySQL); docs are at https://driftcheck.example/docs and the code is at https://github.com/driftcheck/driftcheck.
It is free and MIT licensed. There is no company or paid plan yet, and we have no usage numbers.
Developers should trust it within ten seconds of landing.
Use startup-landing-design to choose a direction, build the page and verify it.
