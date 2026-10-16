# Implementation plan: Rumah Mantan Cafe & Nostalgia

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `prd.md` (content), `trd.md` (components, motion spec, URLs), `design-brief.md`
(palette, type, layout, wireframes). All copy in Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/rumah-mantan-cafe/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the exports in TRD "Content model": hours as "Minggu–Jumat 11.30–21.30" and
      "Sabtu 14.30–21.30" plus `hoursByDay`; `rating { value: "4,3", count: 708 }`; the URLs
      from the TRD. `mockup: true` on "Pernah", the WhatsApp link and plaque, the Instagram
      plaque, the section 2 paragraph, the price line, the hot-dog name, the nasi goreng drawing,
      every Camilan and Minuman item, the Pojok intro and the "Kali ini dijamin nggak canggung." lead.
      Paraphrases only in `praise`, with their review numbers in a comment.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours: langit, awan, kapur, rumah, dongker, jago (design brief §3). Fonts: Londrina Solid
      400/900 and Archivo via `next/font/google`, `display: "swap"`. `<html lang="id">`, the Indonesian
      banner text, the title and description from the TRD. Add `.wall`, `.ribbon`, `.hero-pad`,
      `.flap-*` and `.h1-sub` to `globals.css`, plus the inline `motion` class script in `<head>`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (MuralPanel, Ribbon, HouseRoof, h1, KamuAkuSign with "PERNAH" printed,
      TodayHours, ActionButtons) → Dindingnya penuh kode → Menu andalan → Pojok favorit →
      Kata mereka → Mampir ke rumah mantan → Kabarin dulu → footer. Match the wireframes in
      design brief §7: 7/5, 5/7, 6/6, 4/8 + 3-up, 4/8, 5/7, 3-up from 1024px.
      Copy owner-1.jpg and owner-2.jpg to `public/` (never any `photo-*.jpg`).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw LatteRooster, NasiGoreng and Carbonara as flat inline SVGs (palette plus the three
      drawing-only tones), each with "Ilustrasi" under it; owner-2 in a 4:3 tile no wider than 240px.
      Draw the Pojok tiles too (stool + table, glass room grid, SMOKING AREA plank) and the hero clouds.
      Done when: four products are visible as pictures, not just named.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none: skip, and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      KamuAkuSign: `useGSAP` scoped to the sign; set `animation: "none"` on the word, then the
      flap (0.6s), the dots fade, the swing (0.5s), starting 0.3s after mount. Then one starter
      `<Reveal>` per section's content in sections 2–7. CSS hovers on buttons and plaques (150ms).
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: no `motion` class, no dots, word printed, no reveals, Lenis off. Check the
      contrast pairs in design brief §3 (rumah button on dongker, never jago); focus rings; 44px+
      targets; the sr-only sign sentence; alt texts from the TRD; map iframe title; no
      blockquotes or quote marks on paraphrases.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/rumah-mantan-cafe/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Specific to this site: in `390-fold.png` the "Petunjuk Arah" button is fully visible (if not,
      drop the greeting to `--step-body`); h1 computes to ~80px at 390 and ~160px at 1440, h2 to
      ~36 / ~64px; RUMAH/MANTAN and "CAFE & NOSTALGIA" don't overlap; the KOPI sign covers only
      the photo's corner; the menu price line sits right under the intro.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates: the third cloud, the chimney puff, the note tilts, the dish-row rules.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/rumah-mantan-cafe/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 15 PRD questions, plus a line for each drawing standing in for a photo (latte,
      nasi goreng, carbonara, the three Pojok tiles) and for the redrawn mural.
