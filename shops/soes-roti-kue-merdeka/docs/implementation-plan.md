# Implementation plan: Soes Roti Kue Merdeka

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/soes-roti-kue-merdeka/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the PRD's sections table strings verbatim (Bahasa Indonesia), the links listed under it, and the
      TRD content shape (`priceMockup` for Telur Asin and Kacang Mete prices, `kotakan.mockup`, `whatsapp: null`).
      Done when: every fact in the PRD's sections table is in content.ts, and nothing in it is missing from the PRD.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours from design brief §3; `--font-display` Leckerli One, `--font-body` Archivo (`axes: ["wdth"]`);
      `.bg-kotak-dots`; `lang="id"`; banner text in Indonesian; `duration.hero = 1.2`, `ease.swing`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (window + door panels, static sign at -1.5°) → Soes kami → Abon & telur asin →
      Camilan & oleh-oleh → Pesan kotakan (`data-mockup` on wrapper) → Kata mereka → Kunjungi kami
      (HoursTable, MapEmbed) → Hubungi kami + footer. Desktop grid spans as in design brief §7.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos: build `SoesIllus` (4 fillings), `AbonJar` (3), `TelurAsin`, `Tub` (2), `BoxStack`
      as flat inline SVG, each placed through `ProductFigure` with its `PriceCard` overlapping by 12px.
      Never use `photos/photo-*.jpg`. Done when: at 390 and 1440 every card sits within 24px of its drawing.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen; skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      HangingSign swing (rotation only, ≈1.2s, once), then one `Reveal` per section 2–7, then CSS button states.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: no swing (sign at -1.5°), no reveals, Lenis off. Check focus rings on `kaca`, `kotak`
      and `kayu`, illustration labels, `<table>` caption, sr-only h1 text, tap targets ≥ 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/soes-roti-kue-merdeka/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist. Shop-specific checks: "Merdeka" on one line at 390; sign and hours
      on the first phone screen with "Petunjuk Arah"; peach soes band peeking under the 1440 hero;
      no dots behind running text on `kaca`.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Kata mereka dot field (plain `kotak` may be enough), or the reveal on Kunjungi kami.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no customer photo, no bakso, no reviewer names or quote marks, no Bandung affiliation claim,
      no WhatsApp button (number not confirmed).
- [x] 12. Write `shops/soes-roti-kue-merdeka/owner-checklist.md` from the PRD's open questions plus every placeholder.
      In Bahasa Indonesia, yes/no questions, grouped as in the PRD (Merek & kontak, Produk & harga, Pesanan & nada).
