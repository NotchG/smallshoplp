# Implementation plan: Kopi Made

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kopi-made/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD, using the shape in the TRD content
      model; flag [MOCKUP] items (wordmark stand-in, WhatsApp/phone/Instagram, all prices, Cireng,
      take-home beans, method one-liners, "pilih biji" intro, check motif). All copy in Bahasa
      Indonesia with "kamu"; menu names exactly as in brief.md. Praise is paraphrased, unattributed.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette (wall, board, pine, cream, sign, lamp, plus mist and white) and fonts
      (Bitter variable, Kaushan Script preloaded) into `@theme`; the type scale, `--leading-display: 1.0`,
      `--container: 1200px`, gutters 20/32/40px and section-y 64/112px into `:root` in `globals.css`;
      `next/font` in layout; `lang="id"`; motion tokens (`hero 1.35`, `sign` group) in `lib/motion.ts`;
      MockupBanner text in Indonesian.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: hero (CheckStrip, HeroRoom, SignWordmark
      lit layer only, tagline, ActionButtons, TodayBoard), Seduh (pine ground, jars, BrewGrid),
      Menu (two PineFrame boards), Tempat (statement, facts, PraiseFrames), Kunjungi (address,
      HoursTable, MapEmbed, buttons), footer. Follow the design brief §7 wireframes at 390 and 1440.
      TodayBoard computes Asia/Jakarta state client-side; SSR shows the week summary.
- [x] 5. Product visuals. Six flat SVG food and drink illustrations, two jars, the bean bag and six
      brew icons, as in design brief §6. Re-encode owner-1.jpg to `public/img/ruang.jpg` ≤150 KB.
      Done when: each board shows three illustrated items and the seduh section shows jars and six icons.
- [x] 6. React Bits. None named in the TRD; skip.
- [x] 7. Motion pass. Add the unlit and glow layers and the room-warm layer, the `sign-pending`
      pre-paint script with its CSS failsafe, then the GSAP hero timeline per the TRD motion spec;
      then one Reveal per section block.
- [x] 8. Reduced motion and accessibility pass. Reduced motion: no `sign-pending` class, layers at
      final state, Lenis off. Focus rings (lamp on dark, board on pine), 44px targets, alt text,
      h1 accessible name "Kopi Made", `aria-current="date"` on today's hours row, iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kopi-made/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist. Shop-specific checks: the wordmark is one line at 390; Petunjuk
      Arah is visible in the 390 fold; hero text over the photo is readable; prices sit next to their
      names; at 1440 every section fills its two-part grid.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the plank seams on the pine section, or the footer check strip).
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kopi-made/owner-checklist.md` from the PRD's open questions plus every placeholder
      (stand-in wordmark, illustrations in place of photos, empty WhatsApp/phone/Instagram).
