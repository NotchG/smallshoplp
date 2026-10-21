# Implementation plan: Kedai Seroja

Work top to bottom. Tick each step only when its "done when" holds.
Read first: `prd.md` (content), `design-brief.md` (look, wireframes, motion), `trd.md` (components, values).
Site copy is Bahasa Indonesia; `lang="id"`. No `photo-*.jpg` may appear on the site (customer uploads).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kedai-seroja/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model. Dish names exactly as in the brief (Nasi Goreng Kecombrang, Dendeng Batokok,
      Bakwan Jagung, Risol Ragout, Lumpia, Rendang). Hours in Indonesian day names with "10.00–21.00" format.
      Prices only where the brief gives one; Bakmi and the non-coffee drinks get none.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Fonts: M PLUS Rounded 1c 400/700/800 + Courier Prime 400 (latin, swap). Values from TRD "Type and layout implementation".
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: AwningHeader → Hero (semen, red dado band at its base) → Menu andalan (semen) →
      Pilih lauk sendiri (putih) → Kopi & camilan (jati) → Suasananya (semen, dado band behind the arches) →
      Kata mereka (putih) → Kunjungi kami (semen) → Hubungi kami (merah) → footer (besi).
      Match the design brief §7 wireframes at 390 and 1440. Hero first: SignBadge with live h1 text, TodayHours
      (build-time default plus client swap, no layout shift), buttons, ArchFrame holding a static PlateScene.
      Done when: every section renders with real content at 390 and 1440, and Petunjuk Arah is visible in the first phone screen.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos: draw the 19 flat top-down SVG dishes plus Plate and LeafLiner in `components/art/`
      (no outlines, no gradients, ≤ 4 fills each, illustration colours from brief §3). Reuse the lauk pieces in
      PlateScene and RamesanCounter. Suasananya gets two PhotoSlots with Indonesian labels and alt text, plus HomeCanvas.
      Done when: Menu andalan shows 5 illustrated dishes, the counter 8 trays, Kopi & camilan 3 donuts + latte + risol +
      lumpia, and every illustration reads as its dish at 96 px.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named for this shop. Skip; do not install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      PlateScene timeline (5 pieces, 0.14 s stagger, caption last) with the `motion-ok` no-flash class and 2.5 s CSS
      fail-safe; Reveal on each section from Menu andalan to Hubungi kami; button overlay/press feedback in CSS.
      Done when: the plate sequence finishes in ≤ 1.5 s, runs once, and nothing else on the page moves except section reveals.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce`: Lenis off, no GSAP, plate fully assembled on first paint. Check focus outlines
      on every ground (besi on light, putih on merah/jati/besi), 44 px targets, `role="img"` labels on art, the hours table
      `<th scope="row">`, and that "Tutup" is text.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kedai-seroja/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: "SEROJA" sits inside the sign's inner outline with ≥ 16 px clearance at 390 and 1440 (widen
      the badge, never shrink the type below `--step-display`); the menu reads as one teak window (no gaps or shadows
      between panes); prices sit right under or after their names; the Selasa pill is visible; the arch stands on the
      dado band; merah appears only where brief §10 allows.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the ficus leaf on the window corner, the counter's glass line, the dado band behind the Suasananya arches.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no `photo-*.jpg` in `site/` or `out/`; no review quoted verbatim or attributed to a name; the tel link is
      `tel:+62214893552`; directions use the place ID.
- [x] 12. Write `shops/kedai-seroja/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the two PhotoSlots, the owner landmark slot, and the "harga menyusul" items.
