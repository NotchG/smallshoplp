# Implementation plan: P8 Cafe

Work top to bottom. Tick each step only when its "done when" holds.
Read `docs/prd.md`, `docs/trd.md` and `docs/design-brief.md` first. Precedence when they disagree:
CLAUDE.md → brief.md → design brief guardrails → motion-rules.md → impeccable.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/p8-cafe/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model". All copy is Bahasa Indonesia with the "kamu" register.
      Hours: seven rows (Senin–Kamis 10.00–21.00, Jumat–Minggu 10.00–22.00). Rating "4,7" / 229.
      `whatsapp` and `phone` stay empty, and their buttons fall back to `#hubungi` with "Nomor menyusul".
      Done when: every fact in the PRD's sections table is in content.ts, and every item marked [MOCKUP] in that
      table has `mockup: true`, with nothing else flagged.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours and five steps exactly as in design brief §3–§4. Fonts: `Bagel_Fat_One` (400) as display,
      `Rethink_Sans` as body. Also set `lang="id"`, the Indonesian banner text, the TRD title and description,
      the `[data-mockup]` dotted underline, the focus ring, `--hero-wall`, and the reduced-motion stamp rule.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and backgrounds:
      1. Hero (paper wall + sage slab + roster tile band)
      2. Kopi + kue, gratis (paper, sage tray)
      3. Menu andalan (roster, slab on top)
      4. Kerja & ngumpul (sage)
      5. Ruang acara (paper)
      6. Bawa pulang (butter)
      7. Kata mereka (paper)
      8. Kunjungi kami (roster, slab on top)
      9. Hubungi kami (ink) + footer

      Section ids: `#kopi-kue`, `#menu`, `#ruang`, `#acara`, `#bawa-pulang`, `#ulasan`, `#lokasi`, `#hubungi`.
      Follow the §7 wireframes at 390 and 1440. Prices sit inline after names, the hours table is ≤340px wide,
      and captions sit ≤12px under illustrations. Author `public/roster-tile.svg` (TRD assets), then copy and resize
      `owner-1.jpg` (e.g. `sips -Z 1350`, 4:5 crop by object-position 50% 60%).
      Done when: at 1440 no section leaves half the width empty, and at 390 Petunjuk Arah is visible without scrolling.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-1 in the hero. Inline SVG components: `KueBeruang` (mentega, kacang), `EsKopiBolaEs`,
      `CupcakeRedVelvet` and `ToplesP8`, plus the `PendantLamp` icon and the Stamp's placeholder bear.
      Style: palette fills, one 3px ink outline, no gradients or shadows. Mark the placeholder bear `data-mockup`.
      Done when: six products are visible on the page (photo + five illustrations), each with an Indonesian `aria-label`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip, and don't add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Stamp press: CSS keyframes on `.stamp-inner` (0.3s delay, 0.45s), then the ink ring.
      One `Reveal` per section block for sections 2–9. Button and stamp hovers in CSS.
      Done when: the hero text and photo are visible at first paint, and nothing else moves.
- [x] 8. Reduced motion and accessibility pass.
      Under reduced motion the stamp is static at −8° with no ring, and Lenis and Reveal are off.
      Check contrast pairs against design brief §3 (no paper or roster-deep text on roster), focus rings on
      every link and button (paper ring on the ink band), tap targets ≥44px, the hours `<table>`, the map
      `title`, and photo and illustration alt text.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/p8-cafe/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks:
      - "P8 Cafe" stays on one line at 390 (about 66px) and 1440 (about 135px).
      - The stamp overlaps the photo corner, never the h1.
      - The counter band reads as the counter (tile + slab), not a stripe.
      - The liner pattern is faint, and menu prices sit next to their names.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the stamp's ink ring, the liner pattern, the lamp bulbs.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check:
      - No quotes or reviewer names.
      - No parking, "rumah tua" or "P8 = No.8" copy.
      - No invented phone number.
      - Hampers Lebaran shows no price.
- [x] 12. Write `shops/p8-cafe/owner-checklist.md` from the PRD's open questions plus every placeholder.
      One yes/no question per line. Include the placeholder bear, the five
      illustrations ("ganti dengan foto asli?"), and the empty WhatsApp and phone numbers.
