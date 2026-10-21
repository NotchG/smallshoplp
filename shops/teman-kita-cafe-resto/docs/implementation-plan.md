# Implementation plan: Teman Kita Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look, wireframes, motion), `docs/trd.md` (build details).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/teman-kita-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia, "kamu" register. Mockup: WhatsApp number, every menu name and
      price, Es Jeruk Float name and price, Roti Bakar fillings, event packages. Paraphrased
      praise only, no names, dates or quote marks. No halal, parking, AC, Wi-Fi or wafer.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette `kapur #F4F5F1`, `tinta #161616`, `merah #C7252D`, `mint #A6DBC6`, `jeruk #F39C1E`,
      `biru #1F5FB0`; Kaushan Script (name only) and Bricolage Grotesque (opsz, wdth); the five
      `--step-*` clamps and leading values from design brief §4; `--container 1200px`, gutters
      20/40, section-y 64/112. `lang="id"`, Indonesian banner text, the inline `js`-class script.
      Add `paint: 0.55` and `ease.paint: "power2.inOut"` to `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (BrickWall, PaintedName static, WindowFrame, TodayHours, buttons) → Dua lantai
      (with placeholder boxes for the two illustrations) → InkRule → Menu andalan (grid + lists) →
      Kata mereka → Acara → Kunjungi kami (map) → closing. Follow the wireframes in design brief §7;
      two-column layouts from 1024px. Pre-crop owner-1 to `public/img/upstairs.jpg` (source
      x 0–1260, full height) and resize owner-2 to `public/img/es-jeruk-float.jpg` (1000×1000).
      Only `owner-*.jpg` may be copied; never `photo-*.jpg`.
      Check: at 390×844 the WhatsApp and Petunjuk Arah buttons are above the fold; if not, lower
      the hero window's max height (210px → 180px), never the name size.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-2 in the menu grid's 2×2 cell. Draw the four product SVGs (latte, pisang, roti, tahu)
      and the two floor SVGs (atas in colour, bawah ink only) in one consistent hand, following §6
      and §7. Each must read as that specific dish or floor, not a generic icon.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None named. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      PaintedName timeline (arc, Teman, Kita, underline; about 1.1 s total) with the `.js` start
      state and the 2.5 s CSS failsafe; one `Reveal` per section 2–7; button hover and press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: name static, no reveals, Lenis off. Keyboard through every link with a
      visible ring on kapur, tinta and merah fields. Alt texts and illustration labels in
      Indonesian. Tap targets at least 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/teman-kita-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: no Kaushan swash or swoosh tip clipped by the wipe mask; no trace of
      the owner-1 watermark or blown-out edge in the window; menu names and prices within 16px of
      their drawings; the 1440 hero uses both columns; the floor rows alternate sides.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the InkRule, or the brick pattern's density in the hero.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/teman-kita-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      In plain language the owner can answer in one conversation; include the drawings that
      stand in for missing photos (latte, pisang goreng, roti bakar, tahu goreng, both floors).
