---
name: shop-landing
description: Run the smallshoplp pipeline (discover, brief, plan and build, publish to Coolify, status). Find small shops in an area with the Google Places API, write shop briefs from their listings, plan (PRD, TRD, design brief, implementation plan) and build their Next.js mockup sites with shop-planner and shop-builder subagents, or report pipeline status. Use when asked to discover or find shops in an area, write or redo briefs, build shop sites, or check where shops are in the pipeline.
---

# shop-landing

Four modes. Work out which one the user wants from their request; if unclear, run `status`
and suggest the next step. Read `CLAUDE.md` first if you have not: its rules apply to every mode.

All `data/shops.json` changes go through `scripts/`. Never hand-edit that file.

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
   "Build the mockup site for shop `<slug>`."
4. When it finishes, check that `shops/<slug>/site/out/index.html`,
   `shops/<slug>/screenshots/report.json` and `shops/<slug>/owner-checklist.md` exist, and that
   report.json shows no overlapping text and no horizontal scroll at any width. If the report
   still flags problems, send the builder back once with the report. Then
   `./scripts/set-status.sh <slug> built`.
5. When all are done, list each built shop with the builder's summary and point the user to
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

## Mode 4: status

Count shops per status from `data/shops.json` and say what the next step is:
candidates waiting → review in the app; `approved` → run brief; `brief_rework` → run brief;
`brief_approved` → run build (plans first); `planned` → run build; `built` → send previews to owners.
