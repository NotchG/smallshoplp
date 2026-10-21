# Implementation plan: Toko Roti Tegal

Work top to bottom. Tick each step only when its "done when" holds.
Read first: `docs/prd.md` (copy and facts), `docs/design-brief.md` (look), `docs/trd.md` (components, motion).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/toko-roti-tegal/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the content shape in the TRD: structured `hours` with the Sunday break, `hoursSummary`, and the roti (7) and kue (6) lists with variants. The three paraphrased praise lines go in exactly as written in the PRD, with no names. `whatsapp: null`. The banner and footer text are in Indonesian.
      Done when: every fact in the PRD's sections table is in content.ts. The [MOCKUP] items (tagline, Roti lead, flavours other than cokelat/cok ju/kacang, kue names other than pastel, all four prices, the whole Pesan section, the Hubungi lead, the WhatsApp note) carry `mockup: true`. Nothing in content.ts is absent from the PRD.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Fonts: Besley (normal + italic) and Libre Franklin, via `next/font/google`. Set `lang="id"` and the metadata from the TRD. Point the starter's `html` and `.mockup-banner` rules at kotak/tinta.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (bag) → Roti kami → Kue tradisional → Pesan kotak kue → Kata mereka → Kunjungi kami → Hubungi kami → Footer.
      Grounds: kulit / kotak with kayu tray / kotak with kayu counter band / hati / kotak / kotak (scroll divider between) / kulit / tinta.
      Follow the wireframes in design-brief §7 at 390 and 1440. The hero buns sit beside the content column at ≥1024 and in a cropped row below the buttons under 1024.
      Done when: at 390 the hero shows the h1, today's-hours sticker and "Petunjuk Arah" without scrolling. At 1440 no section leaves half the width empty.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw the flat SVGs: BaggedBun (7 roti variants plus the 2 in the hero), KueIllustration (6 variants), KotakKueScene, ScrollOrnament (crest, base, divider, mark). Draw them fresh; never trace or embed the customer photos (`photo-*.jpg` are reference only). Stickers and tag cards are HTML text.
      Done when: 7 roti and 6 kue are visibly distinct at 390 (toppings, shapes, greens), each with `role="img"` and an Indonesian `aria-label`, and the SVG total is ≤ 60 KB.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None named for this shop. Skip; do not install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Signature: TodaySticker swaps to today's hours (Asia/Jakarta), then presses on once (0.5s, `expo.out`). Then one `Reveal` per section block, and the ButtonLink hover/press CSS. Nothing else moves.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion, the sticker shows today's text at −3° with no tween, Lenis is off, and reveals are skipped. With JS off, the sticker shows the weekly summary and the hours table is complete without a highlight. Also check: focus ring visible on kulit, kotak, hati and the kayu tray; skip link; hours `<table>` semantics; tap targets ≥ 44px; contrast pairs from design-brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/toko-roti-tegal/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop checks:
      - "Tegal" is about 80px at 390 and 168px at 1440, on one line. h2 is 30 / 46px.
      - No roti or kue name is larger than its h2.
      - Stickers sit on their bags and tag cards sit under their trays.
      - The today row is highlighted next to its time, not at a far edge.
      - Orange is never used as text colour.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hero heat-seal crimp strip, or the Kata mereka scroll marks.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check that no founding year, reviewer name, verbatim review, dine-in mention or "fresh daily" claim appears anywhere.
- [x] 12. Write `shops/toko-roti-tegal/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Write it in Bahasa Indonesia, using the PRD's 12 questions. Add the placeholders: product illustrations instead of photos, the scroll ornament drawn after the bag, and the map embed by name search.
