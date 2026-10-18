# Release audit

Local release review, 2026-10-18:

- Only original authored material, public company metadata, public source URLs and this project's own screenshots are included.
- No third-party screenshots, logos, copied website code, custom font binaries or private browsing records are included.
- Demo people and events are fictional and explicitly labelled. No invented customers, performance results, financial claims or endorsements.
- No API keys, environment files, credentials or user account information in source. Dependencies are lockfile-pinned. Development dependency vulnerabilities found in the initial toolchain were resolved by updating Vite and typescript-eslint/ESLint; final npm audit reports zero vulnerabilities.
- No runtime telemetry, database, backend or external font/image service. Downloads use local browser Blob files.
- GitHub Actions uses read-only repository access for builds and pull requests. Only the Pages deployment job receives pages:write and id-token:write. Checkout does not persist credentials. No pull_request_target trigger.
- MIT license covers original code and writing. Third-party dependencies retain their licenses. Attribution and non-affiliation disclaimer are included.

Remaining release gates are operational: complete source upload, public visibility, successful hosted CI and verified Pages deployment. The current partial GitHub repository should not be presented as the complete product.
