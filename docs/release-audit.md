# Release audit

Local release review, 2026-10-18:

- Only original authored material, public company metadata, public source URLs and this project's own screenshots are included.
- No third-party screenshots, logos, copied website code, custom font binaries or private browsing records are included.
- Demo people and events are fictional and explicitly labelled. No invented customers, performance results, financial claims or endorsements.
- No API keys, environment files, credentials or user account information in source. Dependencies are lockfile-pinned. Development dependency vulnerabilities found in the initial toolchain were resolved by updating Vite and typescript-eslint/ESLint; final npm audit reports zero vulnerabilities.
- No runtime telemetry, database, backend or external font/image service. Downloads use local browser Blob files.
- GitHub Actions uses read-only repository access for builds and pull requests. Only the Pages deployment job receives pages:write and id-token:write. Checkout does not persist credentials. No pull_request_target trigger.
- MIT license covers original code and writing. Third-party dependencies retain their licenses. Attribution and non-affiliation disclaimer are included.

The complete 78-file source tree was uploaded to `main` without replacing earlier GitHub history. Hosted Validate run `39162154778` passed, including 31 browser checks. Publish gallery run `39162154905` built and deployed successfully after the build job gained `pages: read` access. The live gallery and all three demo routes were opened and their interactions checked at https://tunakurucu.github.io/startup-landing-lab/.

At this review, the repository remains private because GitHub requires the owner's Mobile confirmation for the visibility change. The Pages site itself is public. Do not describe the repository as public until GitHub reports that setting has changed.
