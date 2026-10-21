# Implementation plan: Customs Coffee House

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look, layout, motion), `docs/trd.md` (build).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/customs-coffee-house/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the exports listed in the TRD "Content model". All copy in Bahasa Indonesia; drink and
      origin names exactly as in the PRD. Mockup flags on: hero line, WhatsApp, every taste note,
      shelf card, drink names Vietnam Drip and Es Green Tea Latte, manual brew, every price, Kopi Susu,
      Kopi Susu Gula Aren, all six food items, the "Harga contoh" note, the Komunitas item. Set
      `lang="id"`, the Indonesian banner text and `meta` in `app/layout.tsx`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours `fascia #E3B23C`, `cat #0A5348`, `garasi #171614`, `batu #F3F2ED`, `tembok #C3312C`,
      `pinus #C28A4E`; `--container 1200px`; `--gutter 20px` / `32px` from 768; `--section-y 64px` /
      `112px`; `--step-*` exactly as design brief §4; `--leading-head: 1.05`; add `.t-label`.
      Fonts: M PLUS Rounded 1c 800/900 and Archivo (`wdth` axis) per TRD. Motion: `hero 1.0`,
      `reveal 0.6`, `ui 0.18`, `ease.roll "power3.out"`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (Wordmark, HoursCard, ActionButtons, Awning, hero photo) → Rak biji kami
      (Shelf, BeanJar ×7, shelf card) → Menu andalan (CheckerEdge, ProductFigure ×3, MenuBoard) →
      Tempat nongkrong (photo, FeatureSticker ×6) → Kata mereka (PraiseList, source line) →
      Kunjungi kami (HoursCard week, address, ActionButton, MapEmbed, HouseRule) → footer
      Hubungi kami (Awning, ActionButtons ×3, small Wordmark). Grounds per design brief §7.
      Check as you go: "CUSTOM"+ring S stays on one line at 360 px; prices sit right after names;
      every desktop row matches its wireframe (12-col splits, no half-empty rows).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Crop and resize owner-1 (two hero files), owner-2, owner-3, owner-5 into `site/public/photos/`
      per the TRD performance budget: no motorbikes or number plates in owner-1; owner-2 without the
      banner and pop-art print; owner-5 without the seated guest and club banners. Never copy
      owner-4.jpg or any `photo-*.jpg`. Draw the BeanJar SVG (one component, `fill` varies per jar)
      and ManualBrewArt SVG (4:5, flat, `data-mockup`).
      Done when: 3 drinks and 7 jars render as pictures; every image has Indonesian alt text.
- [x] 6. React Bits. None for this shop (TRD lists what was declined and why). Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      First the S wheel (Wordmark `roll`, `useGSAP` scoped, x = π × measured ring width,
      rotation 360 → 0, 1.0 s, `power3.out`; hero `overflow-x: clip`). Then `<Reveal>` around the
      four section blocks named in the TRD. Button hover and press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: S in place, no reveals, Lenis off. Keyboard: every link reachable, focus
      ring visible on all four grounds. Contrast pairs as design brief §3 (no `cat` text on black,
      no mustard text on red). h1 accessible name "Customs Coffee House". Map has a title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/customs-coffee-house/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: at 390 the wordmark is one line, Petunjuk Arah is above the fold and the
      hero photo starts in the first screen; at 1440 the hero photo is in the first viewport, the
      shelf shows two full rows of four, Vietnam Drip leads the menu, and no section is half-empty;
      jar names, prices and stickers are never larger than their section heading.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Kunjungi reveal, or the footer awning band.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/customs-coffee-house/owner-checklist.md` from the PRD's open questions
      (14 questions) plus every placeholder (the manual brew illustration, example prices, taste notes).
