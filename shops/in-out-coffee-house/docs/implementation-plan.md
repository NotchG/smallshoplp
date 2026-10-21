# Implementation plan: In Out Coffee House

Work top to bottom. Tick each step only when its "done when" holds.
Site folder: `shops/in-out-coffee-house/site/`. All copy in Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/in-out-coffee-house/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD (TRD content model); flag [MOCKUP]
      items. Set `lang="id"`, the Bahasa banner text and `meta` in `layout.tsx`.
      Done when: every fact in the PRD's sections table is in content.ts, every [MOCKUP] item has
      `mockup: true`, and there's no English in user-facing strings.
- [x] 3. Tokens. Palette and the two fonts (League Spartan, Nunito via `next/font/google`) into
      `@theme`; type scale, `--container`, `--gutter`, `--section-y` and drawing tints into `:root`
      in `globals.css` (delete the starter's 768px override); motion tokens in `lib/motion.ts`
      (`duration.hero = 0.7`, `distance.arrow = 28`). Add `::selection`, focus ring and link
      underline styles.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: Hero (Wordmark, TodayHours,
      ActionButtons, OvalRoom), Pilih tempatmu (Building with three floors), Menu andalan,
      CarWashStrip (behind `carWash.show`), Kata mereka, Kunjungi kami (map + hours), Close, Footer.
      Ground order: Dinding, Dinding, Dinding, Hitam, Kuning, Dinding, Hitam.
      Done when: phone and desktop match the design brief §7 wireframes; "Petunjuk Arah" is
      visible without scrolling at 390×844; links go to the cid Maps URL, `tel:` and `wa.me`.
- [x] 5. Product visuals. The five framed ProductArt drawings plus the Paket drawing, as in the
      design brief §6, and the space drawings (OvalRoom, RooftopArt, IndoorArt, BeanbagArt).
      Flat, frontal, one stroke weight; no perspective, no sketch effects, no band art on posters.
      Done when: 5 products are visibly drawn (not just named), each over its plaque with name and
      price, and every drawing has a Bahasa `aria-label`.
- [x] 6. React Bits. None for this shop (see TRD). Skip.
- [x] 7. Motion pass. Signature: the two wordmark arrowheads (TRD motion spec), then the section
      Reveals and the button hover nudges.
      Done when: the hero sequence ends by 1.0 s and no text is hidden while it runs.
- [x] 8. Reduced motion and accessibility pass. Contrast pairs from design brief §3 only,
      focus rings visible on every ground, skip link, landmarks, 48px buttons, lazy map iframe
      with title and fallback.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/in-out-coffee-house/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check especially: the wordmark arrows and cup outline sit right on "IN OUT" at 390 and 1440;
      "IN OUT" stays on one line; plaques sit tight under their frames; the large frame's height
      matches the two small rows; floors sit on their slabs; the oval is cut by the fold at 390.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (72/30 px at 390, 96/44 px at 1440); and the 390 and
      1440 screenshots pass the builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the Paket bar drawing, the steam lines on the latte, the button nudge).
- [x] 11. Final checks. Build passes; Bahasa banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/in-out-coffee-house/owner-checklist.md` from the PRD's open questions
      plus every placeholder (logo redraw, all drawings standing in for photos, menu, prices,
      Paket, car wash, register).
