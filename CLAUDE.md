# smallshoplp

Landing pages for small local shops, built from their Google Maps listings.
The `/shop-landing` skill runs the pipeline. Per shop, the `shop-planner` subagent writes the
PRD, TRD, design brief and implementation plan, then the `shop-builder` subagent builds a
Next.js mockup site from them.

## Pipeline and statuses

Every shop lives in `data/shops.json` with a `status`. Only act on shops in the
status your step expects, and move them forward when you finish.

```
candidate ──► approved ──► brief_ready ──► brief_approved ──► planned ──► built ──► owner_approved
    │                          │   ▲
    ▼                          ▼   │
 rejected                  brief_rework
```

- `candidate`, `approved`, `rejected`: set by discovery (candidate) and by the human in the approval app.
- `brief_ready`: set by Claude after writing `shops/<slug>/brief.md`.
- `brief_rework`: set by the human, with a note in `brief_note`. Claude revises the brief and sets `brief_ready` again.
- `brief_approved`: set by the human. `[MOCKUP]` lines may remain; they go on the mockup site.
- `planned`: set by Claude after the four docs exist in `shops/<slug>/docs/`.
- `built`: set by Claude after the site builds and passes its screenshot review
  (`site/out/index.html` and `screenshots/report.json` exist).
- `owner_approved`: set by the human after the shop owner signs off.

Never set `approved`, `rejected`, `brief_approved` or `owner_approved` yourself. Those are human decisions.

Between `built` and `owner_approved`, the approval app tracks the owner in fields, not statuses
(`outreach_sent_at`, `followup_sent_at`, `link_sent_at`, `owner_stage`). The first message
carries a preview video and no link; the link goes out once the owner replies. When the owner
declines, or doesn't answer the follow-up, the human closes it in the app and the shop becomes
`rejected`. `scripts/archive-rejected.sh` then deletes its site and Coolify app and keeps
`brief.md`, `raw.json` and `photos/` in `shops/_rejected/<slug>/` (sets `archived_at`).

## Where the pipeline runs

On the NAS (see `deploy/README.md`): one checkout there is the only place data changes. The
approval app (`approve-app/`, a lead dashboard) queues jobs; `worker/run.mjs` runs them one at a
time, headless (`claude -p "/shop-landing …"` or a script), then commits and pushes so Coolify
sees the sites. The Mac is for code changes only: push them, and the worker pulls before every
job. Don't run `/shop-landing` against data on the Mac once the NAS is live.

`data/shops.json` has three writers (the app, the scripts, the worker's git steps), so every
write holds the same lock, `data/.lock`: the app via `withShopsLock` in `approve-app/lib/store.ts`,
the scripts via `update_shops` in `scripts/_common.sh`.

## Hard rules

1. **Sites are mockups for pitching the owner, so filling gaps is fine, but tag it.**
   Facts from `raw.json` (description, reviews, type, hours) carry their source. Anything you
   inferred or made up to make the page feel complete (products, menu items, example prices,
   personality, section copy) is a `[MOCKUP]` line in the brief, and gets listed in the shop's
   `owner-checklist.md` so the owner can confirm or correct it.
   **Never invent, even as `[MOCKUP]`:** testimonials or reviews, ratings, awards, certifications,
   years in business, staff or owner names. Those only come from the listing.
2. **Stay in your folder.** When working on a shop, only read and write inside `shops/<slug>/`
   (or `shops/_rejected/<slug>/` once it's archived), plus status updates through
   `scripts/set-status.sh`.
3. **Edit `data/shops.json` only through the scripts** in `scripts/` (`add-candidates.sh`, `set-status.sh`, and the others).
   A new script that writes it uses `update_shops` from `_common.sh`, never a bare `jq … | write_shops_json`.
   Never hand-edit it. The approval app reads it too, and a broken file breaks the app.
4. **Never read or print the API key.** Scripts load `GOOGLE_PLACES_KEY` from `.env` themselves.
5. **Photos:** `photos/photos.json` says who uploaded each one.
   - `owner-*.jpg` were uploaded to Google by the business itself. They may appear on the mockup.
   - `photo-*.jpg` are customer uploads: reference only, for reading the shop's look and feel.
     Never on the site.
6. **Reviews are paraphrased, never quoted verbatim on a site or in a message to the owner,**
   and never attributed to a named reviewer.
7. Sites are mockups until `owner_approved`. Every mockup shows a small banner saying it's a draft
   and has `noindex`. Do not deploy anything.
8. **Plan before building.** No site is built without its four docs. The stack is fixed by
   `templates/site-starter/`; motion follows `.claude/skills/shop-landing/templates/motion-rules.md`.
9. **Templates are required.** If `.claude/skills/shop-landing/templates/` or any file in it is
   missing, stop and say so. Never improvise around it.
10. **Every site is reviewed in screenshots before it counts as built** (`npm run shots`).
11. **impeccable is the only design skill.** It decides visual direction and guides motion,
    within this project's templates and motion rules. Ignore any other design skill.

## Layout

```
.claude/skills/shop-landing/   pipeline skill + templates/ (doc templates, motion rules)
.claude/skills/impeccable/      the design skill
.claude/agents/shop-planner.md one-shop planner subagent (writes docs/)
.claude/agents/shop-builder.md one-shop builder subagent (writes site/)
templates/site-starter/        Next.js + Tailwind + GSAP + Lenis starter every site copies
scripts/                       Places API + shops.json helpers (need curl and jq)
data/shops.json                source of truth for every shop
data/searches/                 raw discovery results
approve-app/                   Next.js app where the human approves candidates and briefs
shops/<slug>/                  raw.json, photos/, brief.md, docs/, site/, screenshots/, owner-checklist.md,
                               outreach.json (the owner message's personalized line)
shops/<slug>/screenshots/      review shots + outreach-phone.png, outreach-scroll.mp4 and outreach-poster.jpg (gitignored)
shops/_rejected/<slug>/        archived shops: brief.md, raw.json, photos/ only
```
