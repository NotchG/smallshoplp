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
4. **Dashboard.** `cd approve-app && npm install && npm run dev`, then open http://localhost:3030.
5. **Example data.** `data/shops.json` and `shops/example-bakery/` hold made-up shops so the app
   has something to show. Reset with `echo '{"shops":[]}' > data/shops.json && rm -rf shops/example-*`.

## The dashboard

A lead management dashboard (`approve-app/`). It runs on the NAS next to a job worker (setup in
`deploy/README.md`), and you open it at `https://leads.achmedfidel.com` from the Mac or your
phone, through the NAS's Cloudflare Tunnel behind a Cloudflare Access email login. The app itself
has no login, so it is never reachable any other way. Locally it still runs with
`cd approve-app && npm run dev` on http://localhost:3030.

- **Today:** everything due, one lead at a time. The lead's own preview video fills the middle,
  its actions sit on the right (WhatsApp, Sent, Replied, Close, Skip), and the side column holds
  the filled-in Indonesian message. J/K move, E does the main action, and every action can be
  undone from the toast. On a phone, Video shares straight into WhatsApp.
  Previews and follow-ups wait for a quiet hour at the shop (`approve-app/lib/sendtime.ts`):
  weekdays 09:30–11:00 and 14:00–16:30 while it's open (Friday morning only), worked out from its
  Google hours in Jakarta time. Shops in a window now come first with "Good time to message"; the
  rest go last and say when, such as "Closed now · best Mon 09:30". Sending outside still works.
- **Pipeline:** a board of every stage, Sales or Production. Drag a lead to move it; only moves
  that mean something are allowed.
- **Leads:** every shop in a sortable table, with a drawer for the video, timeline and next step.
- **Metrics:** the outreach funnel, sends per week, where the leads are, mockups by category.
- **Production:** candidates to approve, briefs to review, the Build queue (find shops on Maps,
  then Run each of Claude's steps, with each job's live log) and every published mockup.
- **Lead page** (`/shops/<slug>`): the full history and next step for one shop; Claude's steps
  have a Run button, with the commands to run yourself folded underneath.
- Written in TypeScript (strict). `npm run typecheck` checks it without building.

The worker (`worker/run.mjs`) runs one job at a time: git pull, the job, then commit and push.

Outreach is video-first. A link from an unknown number looks like the WhatsApp scams owners
are used to, so the first messages carry none:
- **First message:** a ~10 s video of their mockup on a laptop and a phone together, scrolling
  with the site's own motion, on a tint of the shop's colour with its name above
  (`screenshots/outreach-scroll.mp4`), plus a message that opens with one personalized line
  (`outreach.json`) and asks whether you may send the link. wa.me can't attach files, so you
  download the video, drag it into the chat and send it, then send the message.
- **Follow-up:** after 3 days with no reply, a sharp phone screenshot
  (`screenshots/outreach-phone.png`, which you can copy straight into the chat) and a nudge.
- **Link:** when they reply, press Owner replied. The link message appears with Mark link as
  sent; then comes the deal stepper (Prospect → Hot prospect → DO, ordered) or Owner declined.
- **No reply:** 3 days after the follow-up, Mark as not answered closes it.

Declined and unanswered shops become `rejected`. `/shop-landing archive` (or
`./scripts/archive-rejected.sh --all`) then deletes their sites and Coolify apps, keeping
`brief.md`, `raw.json` and `photos/` in `shops/_rejected/<slug>/`. If an owner comes back,
Owner replied after all moves the shop back (to `brief_approved` once archived, so Claude
rebuilds it).

To prepare outreach for built shops:
```bash
node scripts/outreach-media.mjs --all   # video + phone screenshot, about a minute per shop
```
then `/shop-landing outreach` for the personalized lines. New builds get both automatically.

Today lists previews to send (5 a day, to keep the WhatsApp number in good standing), links to
send, follow-ups due, briefs to review and leads to close.

The messages and the 3-day timings live in `approve-app/lib/outreach.ts`.
Your name for the message is entered once on a shop page and remembered in that browser.

## The loop

| Step | Where | What happens |
|------|-------|--------------|
| 1 | Claude Code | `/shop-landing find 10 bakeries and florists in <area>` → candidates |
| 2 | App, Candidates | Approve or reject each shop |
| 3 | Claude Code | `/shop-landing brief` → fetches details + photos, writes `brief.md` |
| 4 | App, Briefs | Check the highlighted `[MOCKUP]` lines, edit if needed, approve or send back |
| 5 | Claude Code | `/shop-landing build` → per shop, `shop-planner` writes the PRD, TRD, design brief and implementation plan in `docs/`, then `shop-builder` builds the Next.js site from them (3 shops at a time) |
| 6 | Claude Code | `/shop-landing publish` → a Coolify app per shop (run locally) |
| 7 | App, shop page | Send the owner the preview video; send the link once they reply; go through `owner-checklist.md` with them |

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

`npm run shots` also writes `public/og.jpg`, the top of the page at 1200×630. It's the image
WhatsApp, iMessage and Slack show when you send someone the link, so rerun it after changing
a site's first screen.

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

## Hosting the mockups (Coolify)

One Coolify project (`smallshoplp`) with one environment (`mockups`); each shop is an app in it,
served at `<slug>-mockup.achmedfidel.com` and redeployed whenever its `shops/<slug>/site/`
changes on GitHub.

Setup, once:
1. In Coolify: enable the API (Settings), create an API token (Keys & Tokens), create the
   `smallshoplp` project with a `mockups` environment, and connect the repo with a GitHub App.
2. Add `COOLIFY_URL` and `COOLIFY_TOKEN` to `.env`.
3. `cp data/coolify.example.json data/coolify.json` and fill it in. The UUIDs are in Coolify's
   URLs when you open the project, the server and the GitHub App.
4. `domain_pattern`: each shop's address, with `{slug}` replaced: `{slug}-mockup.achmedfidel.com`
   gives `komuka-mockup.achmedfidel.com`. Keep it one level below your domain, since Cloudflare's
   free certificate covers `*.achmedfidel.com` but not deeper levels. The tunnel needs a wildcard
   hostname `*.achmedfidel.com` → `http://localhost:80` (partial wildcards like `*-mockup` aren't
   possible in DNS). (`domain_suffix` still works instead, giving `slug.suffix`.)
5. `domain_scheme`: the scheme Coolify serves on. `http` behind a Cloudflare Tunnel (the tunnel
   does HTTPS; `https` here causes redirect loops). `https` only if Coolify is reachable directly
   and should get its own certificates.
6. `preview_scheme`: the scheme in the link you send owners. `https` behind the tunnel.

Then, after a shop is built and pushed:
```bash
./scripts/coolify-publish.sh --dry-run <slug>   # check what will be created
./scripts/coolify-publish.sh <slug>             # or --all for every built shop
```
The preview URL is saved to `shops.json` as `preview_url`. Or tell Claude
`/shop-landing publish`. This runs locally only, since cloud sessions can't reach your Coolify.

## Statuses

`candidate → approved → brief_ready → brief_approved → planned → built → owner_approved`,
plus `rejected` (also for shops the owner declined or never answered) and `brief_rework`.
Details in `CLAUDE.md`.
