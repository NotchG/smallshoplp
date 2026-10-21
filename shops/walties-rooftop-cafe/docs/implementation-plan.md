# Implementation plan: Waltie's Rooftop Café

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `prd.md` (content, open questions), `design-brief.md` (look, layout, motion),
`trd.md` (components, motion spec). Site copy in Bahasa Indonesia, `lang="id"`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/walties-rooftop-cafe/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in the TRD. Mockup items: WhatsApp, tagline, all section leads, the
      three made-up dish names, every price, the category lists, the "setelah gelap" chip, the
      rooftop-access placeholder, the group-booking line. Copy `owner-1…4.jpg` only into
      `site/public/photos/`.
      Done when: every fact in the PRD's sections table is in content.ts, and no
      photo-*.jpg is anywhere under `site/`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (malam, krem, lampu, bata, daun, kayu); Antonio + Gantari; `--step-*`,
      `--container: 1200px`, `--gutter`, `--section-y` exactly as design-brief.md §4–5;
      `reveal` and `lampu` tokens from §8. Add the inline `js`-class head script.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero → Menu andalan → Dua suasana → Betah berjam-jam → Kata mereka → Kunjungi kami
      → Hubungi kami + footer, on the grounds listed in design-brief.md §3. Strand SVGs drawn
      lit (static). Check "WALTIE’S" stays on one line at 320px, and that the CSS crops hide
      the handle, address and logo bands in owner-1, owner-2 and owner-4.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Bolvano photo plus four top-down SVGs (Soto Betawi, Platter Waltie's, Cookies & Cream
      Blend, Es Kopi Susu Gula Aren) on 4:3 tegel tabletops with a kayu frame. Palette colours
      only. Done when: five products are visible at 390 and 1440 and each one reads as that dish
      without its label.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop: skip, and don't add one later.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `useLampu`: bulbs on left → right (stagger amount 0.9 s), then the scrim lifts; then
      section Reveals; then CSS button hovers. Confirm no lit → off → lit flash on reload.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: bulbs lit, no scrim, no reveals, Lenis off. With JS off: same
      final state, all text present. Focus rings visible on every ground; tap targets ≥ 48px;
      map iframe has a title; one h1.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/walties-rooftop-cafe/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: Petunjuk Arah and the hours are in the first 390 screen; the hero
      panorama isn't wider than 1170px; prices sit directly under their dishes; the hours
      table isn't stretched; no list or label outranks its section heading; the bulbs are lit
      in the final screenshots.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the button glow pseudo-element, or the tegel marks in Kata mereka.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no quote marks or reviewer names; no musholla, smoking or seat-count text;
      no customer photo in `out/`.
- [x] 12. Write `shops/walties-rooftop-cafe/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the logo and hi-res-photo requests.
