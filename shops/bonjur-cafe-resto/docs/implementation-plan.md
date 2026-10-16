# Implementation plan: Bonjur Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/bonjur-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia with the "kamu" voice; the structure follows TRD "Content model"
      (address parts, `hours` numbers + display rows, `family.show`, menu categories with `from` prices).
      Set `<html lang="id">`, the Indonesian title and description, and the Indonesian MockupBanner text.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Yellowtail 400 + Rubik (latin, swap). Values from design-brief §3–5, plus the `[data-mockup]` dashed-underline rule.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (AwningValance, wordmark h1, greeting, DayBar static state, buttons, owner-1 bleeding right
      at ≥1024px) → Dari pagi sampai malam (three-panel strip) → Menu andalan (blue, scalloped bottom edge) →
      Ruang di Bonjur → Seru untuk keluarga (behind `family.show`) → Kata mereka → Kunjungi kami
      (StringLights, table, Maps iframe) → Hubungi kami + footer. Copy only owner-1.jpg and owner-2.jpg into `public/photos/`.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw four flat SVGs in `components/art/`: BeefTeriyaki (large, menu feature), FriesBasket (wire basket,
      onion rings, ketchup and mayo cup), Kopi (white cup with a blue rim), BuburAyam (Pagi panel, `data-mockup`
      + "contoh" tag). 3–5 fills each, no outlines, Indonesian aria-labels ending "(ilustrasi)".
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip. Do not install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      DayBar: Asia/Jakarta time, 15/16 stripes, balloon tween (`x`, `rotation`, 1.2s `expo.out`, 0.15s delay),
      status line states. Then one `Reveal` per section 2–8. Button transforms in CSS.
- [x] 8. Reduced motion and accessibility pass.
      Balloon placed at target with no tween; Lenis off; focus rings (amber on dark, blue on paper); hours `<table>`;
      iframe title; tap targets ≥ 44px; no amber text on green; check DayBar text with JS off.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/bonjur-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically: the 390 first screen shows the wordmark, today's hours and both buttons; "Bonjur"
      stays one line and its j descender clears "Cafe & Resto"; the 1440 hero photo reaches the right edge;
      prices sit next to their category names; every 1440 section matches its design-brief wireframe.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Likely candidates: the "contoh" tags if the dashed underline already says it, or the rotation on the balloon tween.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no owner-3.jpg or photo-*.jpg in `public/`; no 10.00–21.30 hours anywhere; no reviewer names, quotation marks or star graphics.
- [x] 12. Write `shops/bonjur-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      In Indonesian, using the PRD's 19 questions; add any placeholder introduced while building.
