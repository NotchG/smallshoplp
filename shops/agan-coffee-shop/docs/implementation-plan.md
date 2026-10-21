# Implementation plan: Agan Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/agan-coffee-shop/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shop-specific: the name is "Agan Coffee" (not the listing's "Agan Coffee Shop"), all copy is in Bahasa Indonesia,
      use the URLs, phone and place ID exactly as in TRD "Content model", keep menu names as the shop writes them,
      put paraphrases only in `praise`, and never use the Rp 20rb Americano.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] item there
      (tagline, WhatsApp, intros, Kopi Jawa and its note, Es Kopi Susu Agan, the three non-coffee drinks,
      the five food names, the six prices, the frappe name in a caption, the closing line) has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Shop-specific: the 6 colours plus 2 derived tints (design brief §3), Yellowtail + Besley (TRD performance budget),
      the `--step-*` clamps and `--leading-display: 1.1` (§4), `--container` 1200 / `--gutter` 20→40 / `--section-y` 64→112 (§5),
      `.t-script-h3`, the `[data-mockup]` dotted underline, `::selection`, the focus ring colour per ground, `lang="id"`, and the Indonesian banner text.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Awning + hero (OpenSign showing its SSR fallback text) → Menu andalan (steel) → Teman ngopi (concrete) →
      Nongkrong atau kerja (roster) → Kata mereka (steel) → Kunjungi kami (concrete, HoursTable, MapEmbed) →
      Hubungi kami + footer (awning). Then add `lib/status.ts` and wire it into OpenSign and HoursTable.
      Done when: at 390 the "Petunjuk Arah" button is above the fold. The valance repeats show at ≥768 and cause no
      horizontal scroll. Each wireframe in design brief §7 is matched at 390 and 1440. With JS off, the page reads fully
      (the sign says "JAM BUKA · Senin–Sabtu 08.00–23.00 · Minggu tutup"). Status checks pass for Sunday 10:00,
      Tuesday 07:30, Tuesday 12:00 and Saturday 23:30.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Copy and downsize owner-1 to owner-7 into `public/photos/` (TRD "Images"; never `photo-*.jpg`). Apply the aspect and
      object-position per the TRD table, and give each one a caption 8px under it with the mockup name parts flagged.
      Done when: five product photos are visible (owner-2, 4, 5, 6, 7), plus owner-3 and owner-1 for the place. In the
      screenshots there's no face in owner-1, no "MBS" logo in owner-4, and no bin, kettle or bucket in owner-3.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop (TRD explains why). Skip it; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      The BUKA sign swing (GSAP timeline in `useGSAP` with scope, rotating about the hook, about 1.5s, once), then `<Reveal>`
      on the content of Menu andalan, Teman ngopi, Nongkrong and Kata mereka, then the CSS button hover/press.
      Done when: the sign swings once and rests at exactly 0°, nothing loops, and the hero text is visible before any motion.
- [x] 8. Reduced motion and accessibility pass.
      Done when: with reduced motion there's no Lenis, no swing and no reveals, but the status text is still swapped in. Focus
      rings are visible on every ground (concrete, awning, steel, roster). Tap targets are ≥44px. Repeats and RosterBand are
      `aria-hidden`. Every img has Indonesian alt text, and the map iframe has a title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/agan-coffee-shop/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 about 63px at 390 and 136px at 1440; h2 32→52px; no `data-check` item
      larger than its h2); and the 390 and 1440 screenshots pass the
      builder's visual checklist. Also check by eye: the h1 is on one line with no clipped loops; prices sit right after
      their names; at 1440 no section leaves half the width empty; there is one awning and one scallop edge on the page.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates, in order: the dome seams, the awning stripes on the sign plate, the Reveal on Kata mereka.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/agan-coffee-shop/owner-checklist.md` from the PRD's open questions plus every placeholder.
      In Indonesian or English to match how the owner will be pitched. Include the brief's flag to check Instagram
      @agancoffee before pitching.
