# Implementation plan: Woven Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/woven-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shop notes: all copy in Bahasa Indonesia; names stay as the shop writes them (Kopi Enak, KOPI ENA on the label,
      Ice Vietnamese, Cappuccino); menu items are names only; prices only on the three featured products; four
      paraphrased reviews written in third person (reviews 1, 2, 5, 4), never review 3; no "1951", no speed promise,
      no outdoor seating. Copy only `owner-1.jpg` and `owner-2.jpg` into `public/photos/`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Shop notes: five colours + per-ground secondary tints (design brief §3); Jost (variable) + Alegreya Sans
      (400, 700, italic 400); `--step-*`, `--container: 1200px`, `--gutter`, `--section-y` exactly as design brief §4–§5;
      `.t-band` and uppercase heading/LabelBox classes; themed `::selection` (kaca on pinus) and focus rings per ground.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (FrostBand, TodayHours, BoxButtons) → Kopi Enak → Menu → Teh → Kenapa mampir → Kata mereka →
      Kunjungi → Hubungi → Footer, with WovenSeam at the three boundaries only. Match the field colour order and the
      desktop wireframes in design brief §7 (12-col at ≥1024).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      `BottleKopiEnak` and `GlassIceVietnamese` as flat front-elevation SVGs (exact shapes, ≤ 4 fills, ≤ 2px strokes,
      no shading/perspective), both on the `Shelf`, `data-mockup` on each figure; owner-2 square in the tea section.
      Done when: three products are visible as pictures at 390 and 1440.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop: skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Threads + wordmark settle + hero copy fade (≈ 1.05s total), H1 opacity never animated; one Reveal per section.
- [x] 8. Reduced motion and accessibility pass.
      Check: reduced motion shows final state with Lenis off; single `<h1>`; band repeats `aria-hidden`; hours `<table>`;
      sampled hero contrast ≥ 4.5:1 at the brightest point behind text; all tap targets ≥ 44px; JS-off render shows all text.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/woven-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop checks: at 390 the band causes no horizontal scroll and Petunjuk Arah + today's hours are above 844px;
      no face in owner-1 is recognisable; LabelBoxes and group names are smaller than section headings; prices
      sit under their names; at 1440 no section leaves half the width empty; drawings read as clean geometry, not sketches.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hero copy fade (keep threads + wordmark only), or the third woven seam.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/woven-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the two drawings (ask for real photos of the bottle and the Ice Vietnamese), the map embed, and the
      unpriced 1 liter bottle.
