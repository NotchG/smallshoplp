# Implementation plan: LINDAYES Cake & Bakery

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content and sources), `docs/trd.md` (components, motion spec, React
Bits), `docs/design-brief.md` (tokens, wireframes, illustrations). Site language: Bahasa
Indonesia, `lang="id"`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/lindayes-cake-bakery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Mockup items: hero line, WhatsApp link, Tokopedia link, roti varieties, kue kering
      varieties, the 5 example prices, the 4 drinks and "Kopi mulai Rp 18rb", the gifts line,
      seasonal pre-orders, the 3 order types, the "Anda" register (note in a comment, no flag).
      Paraphrased reviews only, no names, no verbatim quotes. Banner text in Indonesian.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours: `fascia #26211E`, `sign #F5873A`, `awning #B93F1A`, `teal #0F4A55`,
      `blush #F4C6CE`, `glass #EEF2EF`; derived `--frame`, `--sign-unlit`, `--wood`, muted text
      via `color-mix()` (design brief §3). Fonts: Young Serif 400, Figtree 400/500/600.
      `--step-*`, `--container`, `--gutter`, `--section-y` exactly as design brief §4–5.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type. Order: Hero (SignHero, Awning,
      StorefrontRow, OpenStatus) → Etalase kami → Ngopi di LINDAYES → Hampers & kue kering →
      Pesan untuk acara → Kata mereka → Kunjungi kami → Hubungi kami + footer. Follow the
      wireframes in design brief §7. Buttons: awning fill on glass and blush grounds, sign fill
      with fascia text on fascia and teal grounds. Awning band: inline SVG scallops, full
      bleed, `aria-hidden`. Map: keyless embed from content.ts, lazy, 4:3 box.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Crop owner-1.jpg to x 372, y 112, w 700, h 358 into `public/img/fasad-lindayes.jpg`
      (sign and awning only; no rooftop "Yes" sign, no people). Do not use photo-1/2/3.
      Draw the 9 SVG illustrations (Kue, Brownies, Roti, Kue kering toples, menara toples,
      hamper rotan, tas hadiah, kopi + kue potong, kotak kue with the phone number) plus the
      ivy trail, in the six tokens only, on the shared baseline. Do not redraw the logo.
      Done when: 4 products sit on the case shelf, 3 on the gift shelf, and every illustration
      has an Indonesian `aria-label`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      Glare Hover only: `npx shadcn@latest add @react-bits/GlareHover-TS-TW`, strip to
      `mode="hover"`, props as in the TRD, wrap the 4 case illustrations only.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Signature: CSS `@keyframes sign-on` on the lit wordmark layer (opacity only, 700ms,
      150ms delay); the unlit `aria-hidden` layer paints first. Then the starter Reveal on
      sections 2–8, once each. Nothing else animates.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: wordmark lit at first paint, no reveals, Lenis off, no glare.
      Check contrast pairs from design brief §3 on the real grounds, focus rings (teal on
      light, blush on dark), 48px tap targets, landmarks, `sr-only` "(buka di tab baru)" on
      external links.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/lindayes-cake-bakery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (52/32px at 390, 120/52px at 1440); and the 390 and
      1440 screenshots pass the builder's visual checklist. Shop-specific checks: at 390 the
      Petunjuk Arah button is above the fold; "LINDAYES" is on one line at every width; the
      wordmark is lit in the screenshot (not the unlit layer); no tent card or price sits more
      than ~24px from its product; the 1440 hero reads as a facade (sign above, awning band,
      storefront row) with no empty half.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Glare Hover glint, then the bougainvillea clusters on the ivy trail.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no "Yes Cake & Bakery", no yescakeandbakery.com, no reviewer names, no customer photos.
- [x] 12. Write `shops/lindayes-cake-bakery/owner-checklist.md` from the PRD's open questions plus every placeholder.
