# Contribute

Useful observations matter more than collection size. A good contribution explains a decision, the job it does for the visitor, and the limits of the evidence.

## Add a reference

1. Start with [the audit template](research/audit-template.md).
2. Add company metadata to research/candidates.json. Verify YC status using an official company listing, checking company identity after redirects. For a Bay Area comparison, provide geography evidence and retain not-verified YC status unless independently established.
3. Inspect the actual rendered website. Record the date, viewport, regions inspected, tested controls and exact limits. Separate what you saw from your interpretation. Do not infer motion from a screenshot or make up fonts, metrics or conversion results.
4. Add the structured audit to research/sites.json, with limitations and public source links. Leave it partial if coverage is incomplete.
5. Run `python3 scripts/generate.py`, `npm run validate`, `npm run build`, `npm run lint`, `npm test` and relevant browser checks. Include a short summary of actual evidence with your PR.

Default to original writing and source links. Do not upload third-party screenshots, logos, fonts or code without documented permission. Never submit private browsing records, account data, credentials or unrelated personal files.

## Improve the skill or demos

Describe the product brief, the design decision changed, and how the result was verified. Keep the standalone skill references self-contained. Preserve different design systems across the demos. Do not add dependencies for decorative effects without a clear purpose and fallback.

We welcome corrections to company identity, metadata, inspection limits and unsupported claims. A factual correction is useful even if it reduces the apparent size of the collection.

Original contributions are submitted under the repository's MIT license. Separately licensed material requires explicit attribution and permission compatible with redistribution.
