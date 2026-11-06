---
name: shop-landing
description: Run the smallshoplp pipeline (discover, brief, plan and build, publish to Coolify, outreach, archive, status). Find small shops in an area with the Google Places API, write shop briefs from their listings, plan (PRD, TRD, design brief, implementation plan) and build their Next.js mockup sites with shop-planner and shop-builder subagents, write the personalized line for each owner's WhatsApp message, archive sites the owner declined or never answered, or report pipeline status. Use when asked to discover or find shops in an area, write or redo briefs, build shop sites, prepare outreach, archive rejected shops, or check where shops are in the pipeline.
---

# shop-landing

Seven modes. Work out which one the user wants from their request; if unclear, run `status`
and suggest the next step. Read `CLAUDE.md` first if you have not: its rules apply to every mode.

All `data/shops.json` changes go through `scripts/`. Never hand-edit that file.

**Headless runs.** The dashboard's worker on the NAS runs this skill as `claude -p "/shop-landing …"`.
Nobody can answer a question there: never stop to ask. Make the reasonable choice, finish the
mode, and say what you chose and anything left undone in the final message, since that message is
what the dashboard shows. The worker commits and pushes after the run; don't commit yourself.

**One shop or all of them.** If the request names one or more shop slugs
(`/shop-landing build komuka`, `/shop-landing brief kopi-teduh, sate-madura`), act only on those,
and say so if a named shop isn't in the status that mode expects. Without slugs, act on every
shop in the expected status. The dashboard copies commands in both forms.

---

## Mode 1: discover

Input: an area, optionally shop types and a count. Example: "10 bakeries and florists in Shoreditch, London".

1. Build one query per type, e.g. `"bakeries in Shoreditch, London"`. With no types given, use
   `"independent shops in <area>"`. Run each:
   ```
   ./scripts/discover.sh "<query>" [includedType] [maxPages]
   ```
   `includedType` is a Places type such as `bakery`, `florist`, `clothing_store`, `book_store`,
   `cafe`. `maxPages` defaults to 1 (20 results). Use 2 if the first page is mostly filtered out.
2. Read the result files it prints (in `data/searches/`). Filter:
   - Keep only `businessStatus == "OPERATIONAL"`.
   - Drop chains and franchises: well-known brand names, or a `websiteUri` on a national/corporate domain.
   - Drop places with fewer than 15 reviews (`userRatingCount`). Too little to infer a brief from.
   - Drop shops already in `data/shops.json` (any status). `add-candidates.sh` also guards this.
   - Prefer shops with no `websiteUri`: they need a landing page most. Put them first.
3. Take up to 2× the requested count, so the human has real choice.
4. Write them to a temp file as a JSON array, then merge:
   ```json
   [{
     "slug": "joes-bakery",
     "place_id": "ChIJ...",
     "name": "Joe's Bakery",
     "type": "Bakery",
     "address": "12 Example St, London",
     "reviews": 214,
     "rating": 4.7,
     "has_website": false,
     "why": "Loved for sourdough, 214 reviews, no website"
   }]
   ```
   ```
   ./scripts/add-candidates.sh /tmp/candidates.json
   ```
   `slug`: lowercase, hyphens, from the name; add the area if it would collide (`joes-bakery-hackney`).
   `why`: one plain sentence, under 80 characters, on why this shop is a good pick.
5. Stop. Tell the user how many candidates were added and to review them in the approval app.

---

## Mode 2: brief

Applies to shops with status `approved` (new brief) or `brief_rework` (revise).

For each shop:

1. If `shops/<slug>/raw.json` does not exist, fetch it:
   ```
   ./scripts/fetch-details.sh <place_id> <slug>
   ```
   This also saves every photo the business uploaded itself (`owner-*.jpg`, usable on the
   site), up to 3 customer photos for reference (`photo-*.jpg`), and `photos/photos.json`.
2. Read `raw.json` and look at the photos.
3. For `brief_rework`: read the existing `brief.md` and the shop's `brief_note` in `data/shops.json`,
   and revise to address the note. Keep everything the note does not mention.
4. Write `shops/<slug>/brief.md` using the template below.
5. `./scripts/set-status.sh <slug> brief_ready`

Then tell the user the briefs are ready to review in the approval app. Do not build anything.

### Brief template

Every factual line ends with its source in parentheses: `(description)`, `(reviews 1, 3)`,
`(type)`, `(hours)`, `(photos)`. Anything you inferred or filled in for the mockup starts with
`[MOCKUP]`. These are fine: the page is a pitch, and a fuller page sells better than a thin one.
Make them plausible for this exact shop (a bakery's likely bakes, not generic ones), and keep
them specific so the owner can easily say "yes" or "no, we do X instead".
Never use `[MOCKUP]` for testimonials, ratings, awards, years in business or names (see CLAUDE.md).

```markdown
# <Shop name>

## Basics
- Type: <primary type> (type)
- Address: <address> (listing)
- Phone: <phone or "not listed"> (listing)
- Hours: <short summary> (hours)
- Price level: <level or "not listed"> (listing)

## Personality
One or two sentences on what this shop is like, drawn from reviews and photos.
- [MOCKUP] <any personality claim not directly supported>

## Audience
- <who shops here> (reviews 2, 4)

## Signature products
- <product> (reviews 1, 3)
- [MOCKUP] <likely product, never named in the listing>
- [MOCKUP] <example price, if the section needs one>

## What customers praise
- <theme, paraphrased> (reviews 1, 2, 5)

## Tone of voice
<e.g. warm and plain-spoken, a little playful>

## Visual direction
- Palette mood: <from photos> (photos)
- Type mood: <e.g. sturdy, hand-made, crisp>
- Feel: <one line>

## Page sections
1. Hero: <what it shows>
2. <shop-specific section, e.g. "Today's bakes">
3. What people say (paraphrased)
4. Visit us: map embed, address, hours
5. Contact: <call / directions / message>

## Owner-provided assets
- <owner-1.jpg: what it shows> (from photos.json; uploaded by the business)
- or "None yet." if there are no owner photos
```

---

## Mode 3: plan and build

Every site is planned before it's built. Two subagents per shop, in this order:

**Plan** (shops with status `brief_approved`)
0. Check `.claude/skills/shop-landing/templates/` has all five files. If not, stop and tell the user.
1. Launch one `shop-planner` subagent per shop, at most 25 at a time:
   "Plan the mockup site for shop `<slug>`."
2. When it finishes, check `shops/<slug>/docs/` has `prd.md`, `trd.md`, `design-brief.md` and
   `implementation-plan.md`, then `./scripts/set-status.sh <slug> planned`.

**Build** (shops with status `planned`)
3. Launch one `shop-builder` subagent per shop, at most 25 at a time:
   "Build the mockup site for shop `<slug>`. Its preview URL is `<url>`."
   The URL is where Mode 5 will publish it: `preview_scheme` (default `https`) plus the host
   from `domain_pattern` (or `<slug>.<domain_suffix>`) in `data/coolify.json`. Link previews
   need it. If that file is missing, leave the URL out and tell the user previews won't show
   until it's set in the site's `app/layout.tsx`.
4. When it finishes, check that `shops/<slug>/site/out/index.html`,
   `shops/<slug>/screenshots/report.json` and `shops/<slug>/owner-checklist.md` exist, and that
   report.json shows no overlapping text and no horizontal scroll at any width, and that its
   `linkPreview` is the preview URL's `/og.jpg`, not `example.com`. If the report
   still flags problems, send the builder back once with the report. Then
   `./scripts/set-status.sh <slug> built`.
5. Prepare its outreach: `node scripts/outreach-media.mjs <slug> --force` (the scroll video
   and phone screenshot, about a minute; `--force` because the site just changed), then
   Mode 6 for that shop.
6. When all are done, list each built shop with the builder's summary and point the user to
   `shops/<slug>/screenshots/` to review.

If the user says "plan only" (to read the docs before building), stop after step 2.
A user asking to "build" runs both phases. If the user mentions usage limits, use batches of 1–2:
builders run `npm install` and full Next.js builds, so they're the heaviest step.

The stack is fixed by `templates/site-starter/`: Next.js (static export), Tailwind, GSAP,
Lenis, plus up to two React Bits components chosen in the TRD.

---

## Mode 5: publish

Puts built shops online in Coolify, each at `<slug>.<domain_suffix>`, auto-deploying from GitHub.

1. Only works where Coolify is reachable (the user's local network). In a cloud session,
   don't try: tell the user to run `./scripts/coolify-publish.sh --all` locally.
2. The site must be committed and pushed to the branch in `data/coolify.json` first,
   because Coolify builds from GitHub. If it isn't, say so and stop.
3. `./scripts/coolify-publish.sh <slug>` for one shop, or `--all` for every built shop
   without an app yet. Use `--dry-run` first if `data/coolify.json` was just created.
4. Report each preview URL. If the script lists settings to set by hand, pass that list on.
   Coolify takes a minute or two to build before the URL works.

Shops that already have an app redeploy automatically on push; don't publish them again.

---

## Mode 6: outreach

Writes the personalized line that opens the first WhatsApp message to each owner. That message
goes with the scroll video and carries no link; the approval app fills in the rest
(`approve-app/lib/outreach.ts`). Applies to `built` shops without `shops/<slug>/outreach.json`,
or to the named shops, rewriting theirs.

For each shop:
1. Read `brief.md` (above all "What customers praise") and the reviews in `raw.json`.
2. Write `shops/<slug>/outreach.json`:
   ```json
   { "hook": "Saya lihat di Google Maps banyak pelanggan memuji kopi gula arennya dan tempatnya yang nyaman untuk kerja." }
   ```
   One sentence in Bahasa Indonesia, under 160 characters, polite and plain: how someone who
   read their listing would say it. It follows "Halo, <name>. Saya <sender>, pembuat website
   untuk usaha lokal."
   - Only what the listing supports: what customers praise in the reviews or description.
   - Paraphrase. Never quote a review, never name a reviewer, no star ratings or review
     counts, nothing from `[MOCKUP]` lines.
   - Specific to this shop (the dish, the service, the atmosphere it's known for), not
     generic praise.
3. With more than 10 shops, give general-purpose subagents about 10 shops each, with these
   rules. Then check every file is valid JSON with a non-empty `hook`.

The media: `node scripts/outreach-media.mjs <slug>…` (or `--all`) makes
`screenshots/outreach-scroll.mp4` (first message) and `screenshots/outreach-phone.png`
(follow-up) from the built `site/out/`. About a minute per shop, so run it in the background
for many shops. Videos are gitignored; the script can always make them again.

---

## Mode 7: archive

For shops the owner turned down: `rejected` with `declined_at`, or with `owner_stage`
`no_answer` (closed in the app after the follow-up), whose folder is still at `shops/<slug>/`.
Deletes the site and its Coolify app; keeps `brief.md`, `raw.json` and `photos/` in
`shops/_rejected/<slug>/`.

1. Needs Coolify, like Mode 5. In a cloud session, don't try: tell the user to run
   `./scripts/archive-rejected.sh --all` locally.
2. `./scripts/archive-rejected.sh --dry-run <slug>…` (or `--all`) and show the user the list.
   The request to archive is the go-ahead for the shops it names (or all, without slugs); if
   the dry run lists shops they wouldn't expect, ask first.
3. Run it without `--dry-run`. Report each line. A shop whose Coolify app couldn't be deleted
   keeps its files; pass the error on.
4. Tell the user to commit the paths the script prints.

If the owner comes back, "Owner replied after all" in the app moves the folder back and sets
`brief_approved`; Mode 3 then rebuilds the site from the kept brief.

---

## Mode 4: status

Count shops per status from `data/shops.json` and say what the next step is:
candidates waiting → review in the app; `approved` → run brief; `brief_rework` → run brief;
`brief_approved` → run build (plans first); `planned` → run build; `built` → send previews to
owners (first make any missing outreach media and lines, Mode 6); `rejected` with `declined_at`
or `owner_stage` `no_answer` and no `archived_at` → run archive.
