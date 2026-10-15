# Implementation plan: KOMUKA Cafe & Eatery

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/komuka/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia, exactly as in the PRD sections table; menu names exactly as
      written there (Spaghetti Bolognese Brûlée, Soul Sister, Signature Toast…). Add the hours in
      machine form plus display rows, and the WhatsApp/maps/embed URLs from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP]
      item (prices, V60 origins, Sunday breakfast, WhatsApp, VIP booking, Metland/JGC line) and
      every placeholder (4 plate illustrations, unknown nasi goreng name) has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`kapur`, `kanopi`, `jendela`, `jati`, `daun`, `lampu`), Gabarito + Figtree,
      steps and gutters from design-brief §4–5, `--awning: 560px`, `duration.swing` and `swing`
      keyframes. `<html lang="id">`; banner text and metadata in Indonesian (TRD).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: hero (awning SVG, valance h1, doorway, DoorSign with its no-JS text "BUKA /
      Rabu–Minggu", plants, string lights, side columns), Pertama kali ke sini?, Menu andalan,
      Ruang di KOMUKA, Kata mereka, Kunjungi kami (`id="lokasi"`), Hubungi kami + footer.
      Field colours per section: kapur, kapur + jati band, kanopi, jendela, kanopi, kapur, jendela.
      Add `lib/hours.ts` and wire the sign and the hours table's today row.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Copy and rename the three owner photos into `public/photos/` (never `photo-*.jpg`), render
      with `ArchPhoto`. Draw the four plate SVGs (Sop buntut, Lumpia, Pudding mangga, Dirty chai)
      to the style rules in §6 and place them on the jati band at varied sizes with numbered labels
      12px below.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none: skip, tick.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      DoorSign swing via `useGSAP` with scope, pivot at the hook; `<Reveal>` on section bodies 2–7.
- [x] 8. Reduced motion and accessibility pass.
      Sign text still updates with no rotation; skip link; Indonesian alt/aria; focus rings
      (jendela on light, lampu on dark); tap targets ≥ 44px; contrast per design-brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/komuka/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: at 390 the sign, "Petunjuk Arah" and "WhatsApp" are all inside the
      fold; "KOMUKA" sits on one line inside the valance at 390, 768 and 1440 (text width ≤ 85%
      of the valance); the awning reads against the wall (rib frame visible); at 1440 the hero's
      three columns, the 5/7 and 7/5 splits and the 4/4/4 visit row hold with nothing half-empty;
      "Senin–Selasa Tutup" is the most visible row of the hours table; no English anywhere on
      the page.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hero string lights, or the leaf clusters by the doorway.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/komuka/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Keep the questions in Bahasa Indonesia, as in the PRD.
