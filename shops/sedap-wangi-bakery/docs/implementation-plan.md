# Implementation plan: Sedap Wangi

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/sedap-wangi-bakery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD (copy deck, links, hours, the
      full kitchen menu transcription, favourites, case tags, orders, six paraphrases); flag
      [MOCKUP] items and authored headings/intros with `mockup: true`. Set `<html lang="id">`
      and translate the banner.
      Done when: every fact in the PRD's sections table and kitchen menu is in content.ts, and
      no review is quoted or attributed.
- [x] 3. Tokens. Six colours and two fonts (Antonio 700; Atkinson Hyperlegible Next 400/700/400i)
      into `@theme` and `next/font`; type scale, `--container: 1200px`, gutters 16/32px,
      section-y 64/112px, leadings into `:root`; motion tokens into `lib/motion.ts` (TRD).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: LogoLockup + hero, SectionTab,
      Etalase (feature card + four row cards + six mini tags), Dapur (DishStrip + MenuBoard with
      `<details>`), Pesan (KeyBand + two OrderCards), Kata pelanggan, Kunjungi (hours table,
      map iframe), Footer. Desktop grids per design brief §7.
      Done when: at 390px "Petunjuk Arah" is visible without scrolling, and at 1440px every
      section matches its desktop wireframe.
- [x] 5. Product visuals. Crop the eight dish tiles from owner-1.jpg (boxes in design brief §6)
      into `public/dishes/`; draw the five cake-slice SVGs and the whole lemon cake + box + lid
      SVGs in one flat style (design brief §6 fills); mark illustration figures `data-mockup`.
      Done when: 5 cakes, the boxed lemon cake and 8 dishes render with Indonesian alt text and
      no tile is shown wider than ~180 CSS px.
- [x] 6. React Bits. None for this shop (TRD). Skip.
- [x] 7. Motion pass. CSS `lid-open` keyframe on the hero lid (end pose as base style, 300ms
      delay, 1100ms, `cubic-bezier(0.16,1,0.3,1)`); starter Reveal on the five section blocks;
      CSS hover/press on buttons and tent cards; chevron on `<details>`.
      Done when: the lid never overlaps the h1, hours or buttons at 390, 768 or 1440, and there
      is no horizontal scroll during or after the animation.
- [x] 8. Reduced motion and accessibility pass. `animation: none` on the lid under
      `prefers-reduced-motion` (no closed-lid flash), Lenis off, Reveal static; focus outlines
      visible on paper and maroon; tap targets ≥ 44px; landmarks and `aria-labelledby`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/sedap-wangi-bakery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (≈92px / 36px at 390, ≈168px / 64px at 1440);
      "WANGI" fits inside the logo frame; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the tent-card hover tilt, or the footer key band).
- [x] 11. Final checks. Build passes; banner present (Indonesian); `data-mockup` on every mockup
      item (WhatsApp buttons, example prices, also-sold list, illustrations, authored headings);
      `noindex` on; no `photo-*.jpg` in `site/`; final `npm run shots` so the screenshots match
      the finished site.
- [x] 12. Write `shops/sedap-wangi-bakery/owner-checklist.md` from the PRD's open questions
      (1–14) and confirmations (15–18), plus every placeholder.
