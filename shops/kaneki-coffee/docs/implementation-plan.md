# Implementation plan: Kaneki

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kaneki-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD, using the shape in the TRD's content
      model; flag [MOCKUP] items per field (WhatsApp, hero line, menu names "Es kopi susu",
      "Charcoal latte", "Matcha latte", "Es teh jeruk", all prices, pain au chocolat, almond
      croissant, beans and method, landmark, section copy). All copy in Bahasa Indonesia. Translate the
      MockupBanner copy, set `<html lang="id">` and the TRD's title and description.
      Done when: every fact in the PRD's sections table is in content.ts, and nothing in it is
      absent from brief.md (no shake, no "murah", no names, no quotes).
- [x] 3. Tokens. Palette (`dinding`, `tinta`, `kanopi`, `ek`, `beton`, `gerinda`) and fonts
      (Pinyon Script, Zen Kaku Gothic New 400/500/700, latin) into `@theme` and `next/font`; type
      scale, `--glass-w`, `--dur-hero`, `--ease-pour`, gutter 20/40px and section-y 64/112px into
      `:root`; `.t-display` on the script face with leading 1.1. `lib/motion.ts` stays at starter values.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build Hero, Menu andalan, Seduh manual (Kanopi field), Suasana,
      Kata mereka, Kunjungi kami, Hubungi kami (Kanopi field, scalloped top edge, footer) with no
      motion, phone first, inside `<Container>` with `.section` padding and `.t-*` type, following
      the design brief §7 wireframes. Hero flanks the glass from 1024; four drinks across from 768.
      Add OpenStatus (Asia/Jakarta) with its SSR fallback text.
      Done when: at 390 the "Petunjuk Arah" button is fully inside the first 844px screen.
- [x] 5. Product visuals. Build `Glass` once and render the four drinks from it (es kopi susu,
      charcoal, matcha, peach tea), then the Croissant, Dimsum and Fries SVGs, Dripper,
      TrackRail and the two PlaceVignettes, all to design brief §6 fills and rules.
      Done when: seven products are drawn in one consistent flat style, every glass carries the
      white "Kaneki" print, and the hero wordmark is ≤ 80% of the glass width at 390, 768 and 1440.
- [x] 6. React Bits. None, per the TRD. Skip.
- [x] 7. Motion pass. The CSS `pour` and `settle` keyframes on the hero liquid group (signature
      moment), then one `<Reveal>` per section content block and the button hover/press CSS,
      per the TRD motion spec.
- [x] 8. Reduced motion and accessibility pass. `animation: none` on the liquid under reduced
      motion; Lenis and Reveal off; focus rings; labels on product SVGs; h1 contrast on the liquid
      (≥ 3:1); tap targets ≥ 44px; map iframe titled.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kaneki-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 65px at 390 and 120px at 1440, h2 ≈ 32px and 52px);
      and the 390 and 1440 screenshots pass the builder's visual checklist. Also check: the
      script wordmark isn't clipped, prices sit under their names, and the 1440 hero uses all three column groups.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hero TrackRail, the surface `settle` rotation, the Dripper.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kaneki-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
