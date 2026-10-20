# grainline-web

Marketing site for Grainline. Next.js App Router, TypeScript, Tailwind CSS 3.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

Conventions:

- `next.config.ts` sets `output: "export"`. The build is plain files in `out/`; preview them with any static file server. No API routes, server actions or request-time data.
- Brand colours and fonts live in `tailwind.config.ts` (`ink`, `wort`, `foam`, `barley`, `hop`, `steel`). Use the token names, not hex values.
- Buttons and button-styled links use `components/Button.tsx`.
- We are on Tailwind 3 and are not migrating yet.

Homepage notes:

- `components/EarlyAccessForm.tsx` has `EARLY_ACCESS_ENDPOINT` (empty until the request inbox exists; the form then says nothing was sent). `app/layout.tsx` has the site origin used for share-card URLs.
- `components/sample-batch.ts` holds the one illustrative batch used by the hero pad and the record sheet.
