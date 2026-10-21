# Implementation plan: SAYKOP

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look, sections, motion), `docs/trd.md`
(components, motion spec). All copy in Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/saykop/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Model per TRD "Content model": `shop`, `hours`, `hero`, 8 `drinks` with `GlassSpec`,
      `alsoOnMenu`, `dishes`, `comfort`, `praise`, `rating`, `contact`. Every price `mockup: true`;
      hero line, Iced Red Velvet and Lembayung lines, dish names "Ayam Sambal Ijo Hotplate" and
      "Nasi Goreng Saykop", classic list, beans, WhatsApp link, Instagram all `mockup: true`.
      Set `<html lang="id">`, metadata title/description from the TRD, banner text in Indonesian.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      `@theme`: `--color-wall #F07F35`, `--color-navy #152E78`, `--color-plaster #F7F3EC`,
      `--color-pine #DCA46B`, `--color-rust #A9461F`, `--color-char #23211F`; remove the starter's
      paper/ink/muted/accent and point `html` and `.mockup-banner` at plaster/navy.
      Fonts: `Shantell_Sans` → `--font-display`, `M_PLUS_Rounded_1c` → `--font-body`.
      `:root`: steps, gutters, section padding, container from design brief §4–5; hero CSS
      variables `--hero-draw`, `--hero-ease`. `lib/motion.ts` stays at starter values.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: TopLinks + Hero (7/5, arch, TodayHours, buttons) → TileStrip → Minuman andalan
      (phone rows, 4-up line-up from 768px) → Teman ngopi (6/6 on pine) → Nyaman buat kerja (5/7 on
      wall) → Kata mereka (5/7 on navy) → Kunjungi kami (7/5, map + HoursTable) → Hubungi kami +
      footer. Check at 390 that "Petunjuk Arah" is above the fold and "SAYKOP" is one line at 320.
      Prices 12px after names; nothing pinned to a far edge.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos: build `DrinkGlass` (parametric, 8 specs + hero 2x Axelle), `KarageBowl`,
      `HotplateChicken`, `NasiGorengPlate`, the 4 comfort line icons, `MuralLine` (hero 2 faces,
      contact 1 face with closed eyes), bean jars, pendant lamps, tile. Flat fills, 3px navy line,
      no gradients or shadows, `role="img"` + Indonesian `aria-label`, `data-mockup` on each
      product drawing. Never trace or embed `photo-*.jpg`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None named: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      CSS keyframes for the hero wipe (transform-only, 1.1 s from 0.15 s) and the single eye blink
      (from 1.45 s). `<Reveal>` once per section block below the hero. Glass hover tilt and button
      press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      `animation: none` on `.mural-wipe`, `.mural-wipe-inner`, `.mural-eye` under reduced motion;
      Lenis off; focus rings visible on wall, plaster, pine and navy; today's hours marked with
      "hari ini" text; tap targets ≥ 44px; landmarks and `aria-labelledby` on sections.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/saykop/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: the mural line never touches text; no light text on wall; the 1440
      line-up fills four columns on both rows; the arch caption sits right under the arch; screenshots
      are taken after the 1.7 s hero sequence (line fully drawn).
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the pendant lamps in the arch, or the plank lines on the pine ground.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no "setiap hari", "luas" or "tidak terlalu manis" anywhere; no reviewer names; no stars;
      no `photo-*.jpg` in `site/`.
- [x] 12. Write `shops/saykop/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Grouped as in the PRD (name and voice, hours and contact, drinks, food, photos), one
      yes/no line each.
