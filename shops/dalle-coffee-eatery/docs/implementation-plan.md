# Implementation plan: Dalle Coffee and Eatery

Work top to bottom. Tick each step only when its "done when" holds.
Read `prd.md`, `trd.md` and `design-brief.md` in this folder first. All site copy is Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/dalle-coffee-eatery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Copy `photos/owner-1.jpg` to `site/public/images/dalle-bar.jpg` (1200px wide, ≤ 250 KB). Never copy `photo-*.jpg`.
      Set `lang="id"`, the Indonesian draft banner, title and description (TRD, SEO).
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] item
      (flatbread name, latte label, Iced Coffee description, mains, all prices, meeting capacity,
      package, WhatsApp booking, WhatsApp on the number, lunch line, "Disajikan dengan sendok",
      and the four drawings) carries a mockup flag.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Marcellus 400 + Hanken Grotesk 400/500/600. Values: design brief §3–5 and §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: banner, hero, menu, kerja, meeting, ulasan, lokasi, kontak + footer, with anchors `#menu`,
      `#kerja`, `#meeting`, `#ulasan`, `#lokasi`, `#kontak`. Hero arch base flush with the hero's bottom edge;
      at 390 × 844 the "Petunjuk Arah" button is fully visible without scrolling. Add `OpenStatus` with the
      Asia/Jakarta logic (static text first).
- [x] 5. Product visuals. Four inline-SVG illustrations, as in the design brief §6: Dalle Iced Tea
      (spoon, nata de coco, chia, no straw), Dalle Iced Coffee (milk layer, flat sip lid), Es latte cookie
      crumble (foam, crumble, cookie saucer), Pizza Coklat Keju (top-down on a sage ribbed plate). Monoline
      2px `steel` strokes, flat fills, each in its `Niche`, each wrapped with `data-mockup`.
      Done when: all four render at 390 and 1440 with names and prices within 8px of each other.
- [x] 6. React Bits. The TRD names none. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      "Lampu menyala": one `useGSAP` timeline scoped to the hero (bars, photo scale, dim layer, glow,
      lockup), done by about 1.2s. Then one Reveal per section 2–7. Button hover via `::before` opacity.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: Lenis off, the hero at its final state (dim layer at 0, glow visible), no reveals.
      Check the pre-hydration pattern (TRD): with JS disabled everything is visible; with a slow bundle
      nothing stays hidden past 1.2s. Focus rings (`light` on walnut,
      `steel` on plaster), 44px targets, Indonesian alt/labels, decorative layers `aria-hidden`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/dalle-coffee-eatery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check: "Dalle" stays on one line at every width; the photo crop shows the lit sign and logo;
      the slat texture reads as wood, not stripes; no section at 1440 leaves half the width empty;
      the map loads (or the fallback panel is in place).
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the third pendant bar on desktop, or the photo's scale-in. Keep the dim-to-bright lift
      and the lockup arrival.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/dalle-coffee-eatery/owner-checklist.md` from the PRD's open questions plus every placeholder.
      All 17 PRD questions, each with what the mockup currently shows, plus any placeholder added during the build.
