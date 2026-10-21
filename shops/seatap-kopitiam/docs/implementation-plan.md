# Implementation plan: SEATAP Kopitiam

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md`, `docs/trd.md`, `docs/design-brief.md`. Copy is Bahasa Indonesia throughout.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/seatap-kopitiam/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content-model tables exactly: `shop`, `hours` (7 `Day` entries, `dow` 0 = Minggu),
      `hero`, `breakfast`, `menu`, `products` (6, with `tile` colours), `bundle`, `room`, `praise`,
      `visit`, `contact`, `banner`. Mark mockup per field (`name`, `price`, `note` are separate `Item`s).
      Nothing about zuppa soup, cleanliness, parking promises, reviewer names or quotes.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`botol`, `krem`, `kunyit`, `bata`, `sage`, `tinta`); Jost + Familjen Grotesk via
      `next/font/google` as CSS variables; steps, leading, `--container 1200px`, gutters and
      section padding from design brief §4–5; `duration {press 0.15, ui 0.2, reveal 0.6, hero 1.0}` and
      `heroTile {stagger 0.08, y -12, scale 0.94}`. In `layout.tsx`: `lang="id"`, title and description
      from the TRD, the `html.js` inline script, skip link, banner text from `content.banner`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (botol) → Sarapan dari jam 7 (krem) → Menu andalan (krem + tile wall)
      → Ruang kumpul (botol) → Kata mereka (kunyit) → Kunjungi kami (krem) → Hubungi kami (botol)
      → Footer (tinta). Match the design brief §7 wireframes at 390 and 1440 (two columns from 1024).
      Build `Wordmark` (chevron A's, sr-only h1 text), `TodayHours` (Asia/Jakarta, static fallback),
      `WeekTiles` (Jum/Sab `kunyit`, today `botol` + "Hari ini"), `MirrorPhoto`, `ActionLink`,
      `MapEmbed`. Menu wall: 4×3 named-area grid at ≥1024 with the colour map in design brief §7;
      3 columns 640–1023 and 2 columns below, full-bleed. Resize photos into `public/` with `sips`
      (TRD performance budget).
      Done when: every section renders at 390, 768 and 1440 with no motion code, and the primary
      action "Petunjuk Arah" plus today's hours are inside the 390×844 first screen.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw 7 flat SVGs in one kit (200×200 viewBox, palette + illustration inks, no outlines or
      gradients, light from top-left): Es Kopi Susu, Singkong Goreng, Pisang Goreng, Bubur Kacang Hijau,
      Es Teh, Kue Pandan, Sarapan set. Place each on its tile with name, price and note directly below.
      Done when: all 7 read clearly at 90px wide, look like one family, and each has an Indonesian
      `aria-label`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Done when: no React Bits package or file is in the site.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `HeroWall` timeline in `useGSAP` with scope: tiles then photo, done by 1.0 s; hidden state only
      under `html.js` + no-preference, plus the 2 s CSS failsafe. Then `<Reveal>` on the 5 listed
      section blocks (menu wall as one block). CSS hover/press on `ActionLink`.
      Done when: hero text is visible on first paint and the hero sequence ends by 1.0 s.
- [x] 8. Reduced motion and accessibility pass.
      Check: Lenis off and hero at final state under reduced motion; focus ring visible on every
      ground (kunyit on dark, botol on light); tap targets ≥ 44px; contrast pairs per design brief §3;
      today marked by text, not colour alone; alt text on both photos; page readable with JS off
      (hours fallback text shows).
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/seatap-kopitiam/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: "SEATAP" stays on one line at 390 and fits its column at 1024 and 1440;
      chevron A's match the stem weight (else fall back to plain Jost); no two same-colour tiles share
      an edge; no `krem` tile on the wall's outer edge at ≥1024; product names are smaller than "Menu
      andalan"; prices sit under names; the round photo is a true circle with the ring.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hero photo's scale settle (keep its fade), or the bullet squares in
      "Kata mereka".
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: `lang="id"`; no customer photo (`photo-*.jpg`) anywhere in `site/`; WhatsApp links carry
      `data-mockup`.
- [x] 12. Write `shops/seatap-kopitiam/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 12 PRD questions, every `mockup: true` item from content.ts (names, prices, notes,
      hero and section lines, parking tip, Instagram), and the drawn wordmark and illustrations as
      "replace with your logo and food photos if you have them".
