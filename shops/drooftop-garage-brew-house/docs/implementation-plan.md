# Implementation plan: D'rooftop & Garage Brew House

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/drooftop-garage-brew-house/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shape and URLs per TRD "Content model". All copy in Bahasa Indonesia, register "kamu" (itself [MOCKUP]).
      Copy `owner-1.jpg` and `owner-2.jpg` (never `photo-*.jpg`) into `site/public/photos/`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`terakota`, `malam`, `tembok`, `rumput`, `kuning`, `aren`) plus the illustration
      tints `susu` and `rotan`; Bungee and Rubik; `--step-*`, `--container` 1200, `--gutter`
      20/32/40, `--section-y` 64/96/112 (design brief §3–§5). `<html lang="id">`, the Indonesian
      banner text, and the `motion-ok` inline head script.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: SiteNav + Hero (GarageWindow without the shutter yet, TodayChip, PlateButtons),
      MuralBand, Dua lantai, Menu andalan, Datang rame-rame, Kata mereka, Kunjungi kami,
      Hubungi kami, Footer. Follow the design brief §7 wireframes and column splits; prices under names.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-2 feature photo with caption; SVG tiles for Es Kopi Susu Gula Aren, Kopi Tubruk
      Lampung, V60 and Pisang Goreng; GarageScene, RooftopScene and LineLeaves in the same flat,
      white-line style. Check the owner-1 crop hides the chalkboard and power lines at 390 and 1440.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Shutter timeline in GarageWindow (dip, roll up, hide) with the CSS failsafe, then one
      `<Reveal>` per section §2–§7, then CSS hover/press on PlateButton.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: no shutter, photo visible, no reveals, Lenis off. Check focus ring
      colours per ground, 48px buttons, alt text, one h1, no `kuning` text on `terakota`/`rumput`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/drooftop-garage-brew-house/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 52px at 390 and 88px at 1440; h2 ≈ 32px and 56px);
      "D’ROOFTOP" fits on one line at 390; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates: the shutter's 4px dip, the button arrow nudge, or the phone sprig in Hubungi kami.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/drooftop-garage-brew-house/owner-checklist.md` from the PRD's open questions plus every placeholder.
