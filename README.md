# smallshoplp

Find small shops in an area, write a brief for each from its Google Maps listing, approve them
in a local web app, then have Claude Code plan (PRD, TRD, design brief, implementation plan)
and build a Next.js mockup site for each.

## Setup

1. **Places key.** In Google Cloud Console, enable "Places API (New)", create an API key,
   and restrict it to that API. Then: `cp .env.example .env` and paste the key in.
2. **Tools.** The scripts need `curl` and `jq` (`brew install jq` / `apt install jq`).
3. **Design skill.** Copy impeccable into `.claude/skills/impeccable/`. It's the only design
   skill the pipeline uses. See `.claude/skills/README.md`.
4. **Approval app.** `cd approve-app && npm install && npm run dev`, then open http://localhost:3030.
5. **Example data.** `data/shops.json` and `shops/example-bakery/` hold made-up shops so the app
   has something to show. Reset with `echo '{"shops":[]}' > data/shops.json && rm -rf shops/example-*`.

## The loop

| Step | Where | What happens |
|------|-------|--------------|
| 1 | Claude Code | `/shop-landing find 10 bakeries and florists in <area>` → candidates |
| 2 | App, Candidates | Approve or reject each shop |
| 3 | Claude Code | `/shop-landing brief` → fetches details + photos, writes `brief.md` |
| 4 | App, Briefs | Check the highlighted `[MOCKUP]` lines, edit if needed, approve or send back |
| 5 | Claude Code | `/shop-landing build` → per shop, `shop-planner` writes the PRD, TRD, design brief and implementation plan in `docs/`, then `shop-builder` builds the Next.js site from them (3 shops at a time) |
| 6 | You | Look at `shops/<slug>/screenshots/` first, then `cd shops/<slug>/site && npm run dev` to try it; send the owner the site plus `owner-checklist.md` |

Say `/shop-landing build, plan only` at step 5 to read the docs before anything is built.
`/shop-landing status` tells you where everything is and what to run next.

## Site stack

Every site starts as a copy of `templates/site-starter/`: Next.js 16 (App Router, TypeScript,
static export to `out/`), Tailwind v4, GSAP 3.15 with `@gsap/react`, Lenis 1.3, plus up to two
React Bits components chosen per shop in its TRD. The starter already has Lenis synced to
ScrollTrigger, a `Reveal` component, motion tokens, reduced-motion handling, the mockup banner,
`noindex`, and `content.ts` holding all copy. Motion follows
`.claude/skills/shop-landing/templates/motion-rules.md`.

`npm run build` in a site folder writes a static site to `out/`, which any host can serve
(Netlify, Vercel, Cloudflare Pages, or a zip to the owner).

Each site has its own `node_modules` (a few hundred MB). For many shops, consider pnpm, which
shares packages across projects.

## Screenshot review

Every builder reviews its own site before finishing: `npm run build && npm run shots` writes
full-page and first-screen screenshots at 390, 768 and 1440px plus `report.json` (rendered
font sizes, overlapping text, horizontal scroll, banner and `noindex` checks) to
`shops/<slug>/screenshots/`. The builder looks at them, fixes problems and repeats, up to 3
rounds. You can run it yourself in any site folder too.

The first time on a machine, `npm run shots:setup` downloads the headless browser it uses.

## Cloud sessions

Push this repo to GitHub (`.env` is gitignored). In the cloud environment's settings, add
`GOOGLE_PLACES_KEY` as an environment variable and allow network access to:
`places.googleapis.com` and `lh3.googleusercontent.com` (Places + photos),
`registry.npmjs.org` (installs), `reactbits.dev` (components), and `fonts.googleapis.com` +
`fonts.gstatic.com` (`next/font` downloads fonts at build time), and `playwright.azureedge.net`,
`playwright.download.prss.microsoft.com` and `cdn.playwright.dev` (the screenshot browser,
whichever one Playwright uses at the time). The environment needs Node 20+ and `jq`.

Run the approval app locally against a pulled copy, commit and push your approvals, then
start the next cloud session.

Don't approve in the app while a local Claude session is writing to the same `data/shops.json`.
Both write atomically, but the last write wins.

## Statuses

`candidate → approved → brief_ready → brief_approved → planned → built → owner_approved`,
plus `rejected` and `brief_rework`. Details in `CLAUDE.md`.
