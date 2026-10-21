# Implementation plan: Laris Manis Bakery

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/laris-manis-bakery/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD, following the TRD content model
      (shop, orderNumbers, hours Senin–Minggu 07.00–18.00, hero, breads, treats, flavours,
      orders, praise, copy, banner), all in Bahasa Indonesia; flag [MOCKUP] items with
      `mockup: true`. Address and Maps link from raw.json / brief, nothing else.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette (6 colours, design brief §3) and fonts (Oleo Script 700, Baloo 2
      400/600/800 via `next/font/google`) into `@theme`; type scale, `--leading-*`, container
      1200px, gutter 20/32px, section-y 64/112px into `:root` in `globals.css`; `.grid-12`
      helper; motion tokens in `lib/motion.ts` (design brief §8); `<html lang="id">`, title and
      description from the TRD; banner text in Indonesian.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: Hero (with full-bleed CrateBand),
      Roti kami, Kue & camilan (kuning field), Pesan untuk acara & reseller (biru field with
      SlotStrip), Kata mereka (720px centred), Kunjungi kami (map + HoursTable), Hubungi kami
      (OrderSign), Footer. Match the wireframes in design brief §7 at 390 and 1440.
- [x] 5. Product visuals. Inline SVG illustrations per design brief §6: BreadBag wrapper and
      IlloMesesKeju, IlloCokelat, IlloSosis (bagged), IlloBoluPizza (on doily),
      IlloToplesSemprit (jar from above); CrateWall with two rows of slots. Inks from §3 only.
      Done when: 5 products are visible as drawings (3 also standing in the crate), each with
      an Indonesian `aria-label`.
- [x] 6. React Bits. None chosen in the TRD; skip. Done when: no React Bits installed.
- [x] 7. Motion pass. Signature moment first (crate breads drop in, TRD motion spec, with the
      `motion-ok` no-flash script and 2.5s failsafe), then `<Reveal>` on sections 2–7, then
      CSS hover/focus responses (crate bread lift, panel tilt, button press).
- [x] 8. Reduced motion and accessibility pass. Lenis off, GSAP skipped, breads at rest;
      focus rings (tinta on light, kuning on biru); 52px buttons; landmarks and
      `aria-labelledby`; today's row in HoursTable uses Asia/Jakarta time.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/laris-manis-bakery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check especially: h1 ~76px at 390 (two lines) and ~128px at 1440 (one line); h2 ~36/60px;
      prices on the name's line; crate band visible in the 390 fold with both hero buttons
      above it; no section half-empty at 1440.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the panel tilt on hover, or the bag bullets in "Kata mereka").
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; no customer photo in `public/`; no "tanpa bahan pengawet" or P-IRT text;
      final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/laris-manis-bakery/owner-checklist.md` from the PRD's open questions
      plus every placeholder (illustrations to replace with photos, logo/mascot placeholder
      "LM" roundel, WhatsApp prefill text).
