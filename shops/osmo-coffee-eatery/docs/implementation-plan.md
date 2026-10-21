# Implementation plan: OSMO Coffee & Eatery

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/osmo-coffee-eatery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      - Use the `Dish` / per-field `mockup` model from the TRD.
      - All copy is Bahasa Indonesia, exactly as in the PRD's sections table.
      - Change `lang="id"` in `layout.tsx` and set the MockupBanner text to the Indonesian line.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      - Colours: the 8 tokens in TRD "Type and layout implementation".
      - Fonts: Jost 500/600 → `--font-display`, Figtree 400/500 → `--font-body`.
      - Type: the steps from design brief §4. Layout: gutters 20/32/40 and section-y 64/112.
      - Motion: add `duration.label = 0.3`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      - Order: Hero (with DayBand text only) → Menu andalan → Kata mereka → Dari bar kopi → Kerja,
        nongkrong, nobar → Kunjungi + Hubungi (night) → Footer.
      - Section backgrounds go on full-bleed parents: plester, plester, plester, semen, daun, tinta, tinta.
      - Prices go inline after names; the hours table day column is 96px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      - Crop owner-1.jpg with the four PIL boxes in the TRD into `public/img/` (hero 1400w + 800w, three 640px bowls).
      - Open each crop and confirm there is no poster, and no finger slivers inside the bowl circles.
      - Build the walnut tray with the liner pattern, the CannedCard can SVG and the AFrame SVG. No food illustrations.
      Done when: the 390 and 1440 menu screenshots show three round bowls on the printed liner, each with its name and price within 16px.
- [x] 6. React Bits. The TRD names none. Skip this step and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      - DayBand: compute `--p` from Asia/Jakarta time in `useEffect`; one `useGSAP` timeline (fill + marker 1.1s `expo.out`, then the label 0.3s).
      - Then `Reveal` on the menu tray, the bar section and the space section only.
      Done when: test with the clock forced to 07:30, 14:20 and 23:30. The marker sits at the start, mid-track and the end; the label never overflows the band; the status text matches.
- [x] 8. Reduced motion and accessibility pass.
      - Reduced motion: DayBand at its final state, no reveals, Lenis off.
      - Check contrast against design brief §3 (no `tinta-pudar` on `semen`), focus rings on every background, the skip link, 44px tap targets, and alt text on the hero and bowls.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/osmo-coffee-eatery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      - At 390: the wordmark, pitch and both buttons are visible in the fold, and the day band ends by about 760px.
      - At 1440: the photo bleeds off the right edge with no frame, the wordmark fits cols 1–6, and the tray spans the full container.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the bowl drop shadow, or the space-section reveal.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      `data-mockup` must include: bowl names and prices, the cumi and beef descriptions, all drink items,
      Sarapan, Toast es krim, the Canned price and can, BeanMark, the pitch, the WhatsApp links, the
      Instagram row, the toll-route line and the reservation line.
- [x] 12. Write `shops/osmo-coffee-eatery/owner-checklist.md` from the PRD's open questions plus every placeholder.
