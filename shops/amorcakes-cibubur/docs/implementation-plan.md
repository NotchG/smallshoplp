# Implementation plan: Amorcakes & Bakery Cibubur

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/amorcakes-cibubur/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD (in Bahasa Indonesia), using the shape
      in TRD "Content model": shop, cakes (4), breads (4 plus boxed bolu), order (sizes, flavours,
      WA template), praise (2 paraphrases), hours (7 days). Flag [MOCKUP] items with `mockup: true`.
      Set `lang="id"`, the Indonesian title and description in `layout.tsx`, and the banner text
      "Ini adalah draf tampilan, belum resmi."
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Put the 6 colours (`cokelat`, `kakao`, `krim`, `oranye`, `kaca`, `putih`) and the
      two fonts into `@theme`. Put the type scale, `--container: 1200px`, `--gutter` 20/40px and
      `--section-y` 64/112px into `:root`, and add `.section-tight`, `.t-headfont` and `.facade`.
      Load Fredoka (variable, `axes: ["wdth"]`) and Nunito (400, 700) with `next/font`. Motion
      tokens from TRD go into `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: Hero, Kue ulang tahun, Roti & bolu
      harian, Cara pesan kue (composer working with no animation: radios, input, live plaque, WA
      href), Kata mereka, Kunjungi kami (hours strip, today highlight, lazy map), Hubungi kami and
      footer. Follow the design brief §7 wireframes and column splits. Price tags go under their
      cakes and bread prices inline after the names.
- [x] 5. Product visuals. Draw the 9 flat SVG illustrations in the style of design brief §6:
      the 4 cakes (Black Forest, Chocolate Drip, Green Tea, Strawberry Cream in its mika dome), the
      4 bread icons (Roti Manis, Roti Tawar Mini, Doughnut, Bolu gulung with orange sticker) and the
      Boluamor / Snow Bolu boxes. Use the same viewpoint, light and tone count throughout. Each
      one gets `role="img"`, an Indonesian `aria-label` and `data-mockup`. Never use photo-1/2/3.
- [x] 6. React Bits. None for this shop (see TRD). Skip.
- [x] 7. Motion pass. First the signature moment: plaque piping cover and tip, then the sticker
      landing, in a `useGSAP` scope in Hero, with the below-the-fold fallback trigger. Then the
      `Reveal` per section content block, then the composer's CSS responses, per the TRD motion spec.
- [x] 8. Reduced motion and accessibility pass. With reduced motion, the plaque text and sticker
      are in their final state and Lenis is off. Check focus rings on every ground,
      fieldset/legend, the visible checked state on chips, 44px targets, and the aria-live summary.
      Test the WhatsApp href with no JS (defaults filled).
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/amorcakes-cibubur/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check in particular that the hero window starts within the 390×844 first screen with both
      buttons above it, that the 4-across shelf at 1440 keeps every tag under its own cake, that
      the Roti list doesn't leave the left column empty, and that the corrugation shows no moiré.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      The likely candidates are the piping tip or a fourth heart.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/amorcakes-cibubur/owner-checklist.md` from the PRD's open questions (22)
      plus every placeholder (logo heart mark, illustrations in place of photos, example plaque
      text, WA message template).
