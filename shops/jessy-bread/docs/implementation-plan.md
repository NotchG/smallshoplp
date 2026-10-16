# Implementation plan: Jessy Bread

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content, open questions), `docs/trd.md` (components, motion spec),
`docs/design-brief.md` (tokens, wireframes, product visuals). All copy in Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/jessy-bread/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD, using the TRD's content model
      (`shop`, `heroCake`, `cakes` ×8 in shelf order, `cakeOrder`, `breads` ×4, `breadMore`,
      `upstairs`, `praise` ×6, `visit`). Flag [MOCKUP] items, plus the tagline and every cake
      price, with `mockup: true`. Blackforest, Rainbow Cake and Red Velvet have no price
      ("Tanya harga"). Phone `(021) 4896888` / `tel:+62214896888`; maps link and embed URL from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts, and nothing in it is
      absent from brief.md (no extra phone numbers, no Cibubur, no halal, no restaurant hours).
- [x] 3. Tokens. Palette (`abu`, `kartu`, `arang`, `oranye`, `emas`, `madu`) and fonts
      (`Paytone_One` 400 → `--font-display`, `Rubik` 400/500/700 → `--font-body`) into `@theme`;
      the type scale, `--leading-display: 1.05`, `--container: 1200px`, `--gutter` 20/32/40px and
      `--section-y` 64/112px into `:root` in `globals.css`; `next/font` in layout; `lang="id"`,
      Indonesian metadata and banner; motion tokens (`ease.card`, `distance.settle`) in `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: Hero (logotype `<h1>`, hours pill,
      ActionButtons, orange trim band), Kue (arang case, 4-up / 2-up shelves, gold rails, order row
      ≤ 760px with its button right after the text), Roti (text cols 1–5, 2×2 rack cols 6–12),
      Lantai dua (madu), Kata mereka (kartu, rating + 2×3 themes), Kunjungi (abu, info + map),
      Hubungi (oranye, centred 720px), Footer (arang). Follow the wireframes in design brief §7.
- [x] 5. Product visuals. Per design brief §6: parametric `CakeArt` (9 cakes), `TentCard` with
      HTML name/size/price overlapping each board, 4 `BreadArt`, `CupsArt`, `FacadeArt`
      (≤ 30 shapes). Each SVG `role="img"` with an Indonesian `aria-label`; "Gambar adalah
      ilustrasi." under the case. No listing photos anywhere.
      Done when: each cake is recognisable against the case photo description (green Birthday
      Cake, red-glazed Strawberry Cheese, striped Rainbow, shaved Blackforest).
- [x] 6. React Bits. None for this shop (TRD lists the ones considered). Skip.
- [x] 7. Motion pass. Signature moment first (hero cake settle + tent card hinge, one `useGSAP`
      timeline scoped to `HeroCake`, done by 1.0 s), then one `Reveal` per section block, then
      CSS button feedback, per the TRD motion spec.
- [x] 8. Reduced motion and accessibility pass. Reduced motion: Lenis off, hero static, no
      reveals. Check contrast pairs from design brief §3 on real grounds, focus rings (arang on
      light/orange, abu on arang), 44px+ targets, landmarks, skip link, iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/jessy-bread/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: logotype "Jessy"/"Bread" lines don't collide (raise leading to 1.1
      if the "y" touches "d"); both hero buttons above the fold at 390; tent-card names wrap
      cleanly at 390 (2 columns); no price card detached from its cake; 1440 hero and case use
      the full container width.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the facade drawing, the cake's settle drop, the 1px line under tent cards).
- [x] 11. Final checks. Build passes; Indonesian banner present; `data-mockup` on every mockup
      item (including tagline and cake prices); `noindex` on; final `npm run shots` so the
      screenshots match the finished site.
- [x] 12. Write `shops/jessy-bread/owner-checklist.md` from the PRD's open questions (20) plus
      every placeholder (all illustrations stand in for owner photos).
