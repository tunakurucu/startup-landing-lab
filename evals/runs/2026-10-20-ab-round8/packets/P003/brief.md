# Brief: catch API changes that break the spec

Contractcheck runs your OpenAPI spec against your staging API on every pull request and fails the check when a response no longer matches the spec: a missing field, a changed type, a new error code nobody documented.
Backend engineers and API platform teams adopt it; the team lead approves the paid plan.
It replaces finding out from a client team's bug report, or a hand-maintained Postman collection nobody runs.
It installs as a GitHub App at https://github.com/apps/contractcheck; docs are at https://contractcheck.example/docs. It is free for public repositories and $19 a month per private repository.
It has no customers we can name and no usage numbers yet. It reads only the responses from your staging API, never production.
An engineer should know exactly what a failing check looks like before they scroll.
