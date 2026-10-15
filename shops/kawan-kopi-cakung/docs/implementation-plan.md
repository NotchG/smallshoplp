# Implementation plan: Kawan Kopi, Cakung

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kawan-kopi-cakung/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model": `shop`, `hours` (structured, single source), `hero`,
      `drinks` (4), `plates` (4), `work`, `praise` (4), `visit`, `contact`, `banner`, `meta`.
      Copy is verbatim Indonesian from the PRD sections table. Per-field mockup flags (Dirty Latte
      note, keys and price; every price; V60 whole item; hero line; commuter fact; parking tip;
      WhatsApp; Hubungi line).
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours and two fonts (Sofia Sans Condensed 700, Sofia Sans 400/500/600) as in TRD.
      Add `.tile-ground`, `.grid-12`, the `.js` panel/glint rules and the 2.5s fail-safe. Set
      `<html lang="id" suppressHydrationWarning>` with the inline `js` class script. Translate
      `MockupBanner` to the PRD text.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (four bands, panels lit), Kopi kami, Teman ngopi, Kerja atau santai,
      Kata mereka, Kunjungi kami, Hubungi kami, Footer. Grounds: tinta/kayu/tinta/ubin,
      ubin, kayu, lampu, lampu, ubin, kayu, tinta. Follow the wireframes in design brief §7. At
      1440 each section is two columns or a 4-up grid. `TodayHours` and the "hari ini" tag
      read `lib/hours.ts` (Asia/Jakarta) after mount.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist: draw the 9 inline SVGs (5 drinks side view with glint, 4 plates top
      view with a long lower-right shadow) in one flat hand with the illustration-only fills.
      Layer keys are HTML text with 16px ticks, ≤24px from the glass. Never use `photo-*.jpg`.
      Done when: hero shows 3 drinks on the counter edge, Kopi kami 4 drawn drinks, Teman
      ngopi 4 drawn plates, each with an Indonesian `aria-label`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip, and don't install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `CeilingLights` timeline (`gsap.to` panels 0.12 → 1, 0.5s, stagger 0.1; glints at
      0.6s, 0.4s), then `<Reveal>` on the six section blocks, then button hover/press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: panels and glints lit at first paint, Lenis off, no reveals. Check focus
      rings per ground (`--focus`), 52px buttons, contrast pairs from design brief §3, one h1,
      `aria-hidden` on panels and tile grid, iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kawan-kopi-cakung/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically: h1 "Kawan Kopi" on one line at 390 (about 71px) and 1440 (about 136px);
      h2 about 38px / 68px; no drink name, price or paraphrase larger than its h2; "Petunjuk Arah"
      inside the 390 fold; panels tilted and clipped by the band with no horizontal scroll;
      prices next to names; keys next to layers; the hours bars' labels inside the lit spans;
      no half-empty 1440 section.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the glass glints, then the panel glow shadow.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: `lang="id"`, no English UI strings, no `photo-*.jpg` in `public/` or `out/`.
- [x] 12. Write `shops/kawan-kopi-cakung/owner-checklist.md` from the PRD's open questions plus every placeholder.
      13 PRD questions, plus each "harga menyusul" and the parking-tip placeholder.
