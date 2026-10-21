# Implementation plan: Rumah Roti Ciracas

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/rumah-roti-ciracas/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in the TRD (`shop`, `hero`, `etalase`, `rotiBuaya`, `kue`, `praise`, `visit`,
      `contact`). Copy is Bahasa Indonesia, word for word from the PRD's sections table. Names,
      prices, the hero line, the "Rp 3rb–8rb" line, the pre-order lines and every WhatsApp prefill
      are separate `Item`s with `mockup: true`. Praise is paraphrased, no quotes, no names.
      Set `<html lang="id">`, Indonesian metadata, and the Indonesian `MockupBanner` text.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours `butter #F6DC82`, `paper #FFFBF0`, `cocoa #3A2015`, `crust #B84A12`,
      `frosting #F6C3D3`, `gold #B8913F`. Baloo 2 (variable) + Yellowtail (400) via
      `next/font/google`, variable classes on `<html>`, font tokens in `@theme inline`. Type steps,
      `--container 1200px`, `--gutter 20px/40px`, `--section-y 64px/112px` from design brief §4–5.
      Motion tokens and the `sticker` object from design brief §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (sign, window, door), Etalase kami, Roti buaya untuk hari bahagia, Kue ulang
      tahun, Kata mereka, Kunjungi kami, Hubungi kami, Footer, with grounds butter, butter, frosting,
      frosting, paper, paper, cocoa, cocoa. Build `Sticker`, `PriceCard`, `ProductPhoto`, `TodayHours`,
      `HoursTable`, `MapEmbed`, `Button` as in the TRD. Desktop spans follow the wireframes (hero 7 +
      4 bottom-aligned, Etalase 3-up on a paper shelf rule, Roti buaya 7/5, Kue 5/7, Kata mereka 4/8,
      Kunjungi 5/7, Hubungi 7 + sticker).
      Done when: 390 and 1440 match the design brief wireframes, the hero sticker overlaps only the
      photo (40px clear of the name), and WhatsApp + Petunjuk Arah are in the first phone screen.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Crop with sips into `site/public/img/` (`sips --cropToHeightWidth H W --cropOffset Y X in.jpg
      --out out.jpg`, then `sips -Z <maxpx>`), using the exact source coordinates in §6:
      `kura-kura.jpg` (owner-4), `garlic-cheese.jpg` (owner-2, watermark fully gone),
      `pizza.jpg` (owner-7), `muffin-tawar.jpg` (owner-8), `roti-buaya.jpg` (owner-5, no phone,
      mixer or checkered floor), `kue-stroberi.jpg` (owner-6), `kue-cokelat.jpg` (owner-3: no
      child's name, no heart emoji), `tampak-depan.jpg` (owner-1, no cartoon at top).
      Never copy `photo-1.jpg` or `photo-2.jpg`.
      Done when: 7 products appear with their own photos, and each crop has been opened and checked.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen; skip. Do not add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Sticker press first (inline `js` class script, lifted state in CSS, `useGSAP` tween with scope),
      then `Reveal` on the six section blocks, then the CSS hover and press responses.
      Done when: the sticker is never invisible, presses once on load, and nothing else in the hero moves.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: Lenis off, the sticker renders stuck at −4°, reveals skipped. Check the
      focus rings, the skip link, 44px+ targets (the stickers, buttons and map link), Indonesian alt
      text, one h1, and that crust text on butter appears only at display size.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/rumah-roti-ciracas/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: the hero name sits on one line at 1440 and breaks only as "Rumah Roti" /
      "Ciracas" on phone; the sticker's number fits; price cards touch their own photo; the roti
      buaya labels don't collide; the map iframe doesn't push horizontal scroll.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the shelf rule in Etalase, the sticker hover tilt, the button hover lift.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/rumah-roti-ciracas/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Plain yes/no questions. Include the 16 PRD questions, every `data-mockup` item,
      and the request for the original logo file.
