# Brief: a CLI for environment variables

envcensus is a CLI that finds every environment variable a codebase reads and checks them against .env.example and CI.
It runs locally, sends nothing anywhere, and can fail a CI job when a variable is missing or unused.
It's on npm as envcensus, but there's no Homebrew formula yet and the repository stays private until 1.0.
There's no GUI, so the page must show what it does without fake app screenshots.
Developers should install it and run it on their own repo; the help output is the only documentation so far.
I'm not sure whether to pitch individual developers or the platform team that owns CI.
We have no stars, no users to name and no benchmark for scan speed.
