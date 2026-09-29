# Implementation checklist

## Phase 1: Profile repository

- Create the special public repository `Ukashatu40/Ukashatu40`.
- Add `README.md` from this package.
- Add the `assets/` directory.
- Add `.github/workflows/update-profile-assets.yml`.
- Add `scripts/update-profile-assets.mjs`.

## Phase 2: Profile settings

- Replace the current bio with: `Software Engineer | Full-Stack | Backend & Systems | TypeScript, NestJS, React, Next.js, PostgreSQL`.
- Keep the profile links that are current and useful.
- Set the four verified flagship repositories as the first pin candidates: `double-entry-accounting-ledger-system`, `payment-orchestration-engine`, `event-driven-notification-engine`, `ratel-financial-platform`.
- Recover the remaining public repository list and select the remaining pins from verified evidence only.

## Phase 3: Repository metadata

For every flagship repository:

- Add a clear one-sentence description.
- Add topics.
- Add a demo URL only if it works.
- Add an architecture image.
- Add a consistent README structure.
- Add explicit testing and deployment instructions.

## Phase 4: Visual QA

- Test the README on GitHub desktop and mobile widths.
- Check GIF size and load time.
- Check alt text.
- Remove any image that depends on an unreliable external endpoint.
- Confirm all relative asset paths are correct.
- Confirm dark and light GitHub themes remain readable.

## Phase 5: Ongoing maintenance

The included workflow refreshes the small profile-stat card daily. Keep system/project descriptions hand-written and stable. Do not let automated metrics become the main content of the profile.
