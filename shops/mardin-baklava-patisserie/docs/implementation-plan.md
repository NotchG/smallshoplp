# Implementation plan: Mardin Baklava Patisserie

Work top to bottom. Tick each step only when its "done when" holds.
Docs: `prd.md` (content), `trd.md` (components, motion, a11y), `design-brief.md` (look, layout).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/mardin-baklava-patisserie/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia ("Anda" register, mockup). Hours from raw.json (Fri 13.00).
      Rating as "4,7" and "935". Praise paraphrased, four topics, no names, no quote marks.
      Turkish names exactly as in the PRD. Set `<html lang="id">`, the PRD title, and the
      Indonesian draft banner: "Draf mockup untuk Mardin Baklava Patisserie. Beberapa detail
      masih contoh sampai Anda konfirmasi."
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`room`, `filo`, `kraft`, `syrup`, `pistachio`, `kunafe`), Antonio + Alegreya
      with latin-ext, `--step-*` / `--container` 1200px / `--gutter` 20/32/40 / `--section-y`
      64/112 exactly as design brief §3–5. Add `.t-label`, `--ease-counter`, `duration.hero = 1.2`.
      Banner: syrup ground, room text.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero, Etalase kami, Kunafe, Teman minum teh, Seberapa manis?, Untuk oleh-oleh &
      hampers, Kata mereka, Kunjungi kami, Hubungi kami, Footer. Grounds per design brief §7
      (room, room + filo panel, kunafe, room, room, kraft, room, kraft, pistachio, room).
      `TodayHours` client component with a static fallback line. Buttons with real links:
      directions, `wa.me/6282112033331` (data-mockup), `tel:+6282112033331`. Map iframe lazy.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Copy owner-1/2/3.jpg to `public/photos/` plus 800px copies (`sips -Z 800`). Crops:
      owner-2 hero 2.4:1 at `object-position: 50% 85%` (desktop) and 4:3 at `25% 50%` (phone);
      owner-3 tray only (`object-position: 50% 100%`, no face visible); owner-1 right side only
      (shelves, kraft bags, chalkboard; no people, no terminals). Draw the `Piece` set (six),
      `KunafePan`, `TeaGlass`, `BoxArt`, `PlatterRule` as flat SVG in palette colours only.
      Never copy photo-*.jpg into the site.
      Done when: the 390 and 1440 screenshots show no face and at least 3 distinct products.
- [x] 6. React Bits. None, per the TRD. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Hero in CSS keyframes (veil, photo settle, three name cards ≥1024px), then `Reveal` on the
      four blocks named in the TRD, then button hover/press. Nothing else moves.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: hero `animation: none`, veil opacity 0, cards visible; Lenis off; Reveal
      static. Check the allowed text pairs (design brief §3), focus rings, 44px+ targets,
      Indonesian alt text, `aria-hidden` hero cards with the figcaption as their text, and
      `lang="tr"` on Turkish names (uppercase shows İ).
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/mardin-baklava-patisserie/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop checks: "MARDIN" on one line at 390; hero actions above the fold at 390; hero name
      cards sit on their pieces at 1440 (and at 1024 if you check it); no section half-empty at
      1440; kunafe field text is room-coloured; no list or label larger than its heading.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the second PlatterRule (above the footer), or the Kata mereka reveal.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/mardin-baklava-patisserie/owner-checklist.md` from the PRD's open
      questions plus every placeholder.
