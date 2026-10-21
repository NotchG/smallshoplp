# Implementation plan: Ika Kopi

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/ika-kopi/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in the TRD "Content model". All copy in Bahasa Indonesia, `kamu` register
      (mockup), times as "07.00–23.00", rating as "4,8". Praise items are paraphrases, never
      quotes, never named.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP]
      row in it has `mockup: true` (location line, WhatsApp link, coffee and menu names and
      prices, menu extras, morning set, group table, beans to take home, written section copy).
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Gloock 400 + Hanken Grotesk 400/600; `lang="id"`; banner copy in Indonesian; title and
      description per the TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and ids: Hero (header row ≥1024, wall, WainscotBand with hours + Petunjuk Arah +
      WhatsApp), Kopi kami `#kopi`, Nyaman untuk kerja `#ruang-kerja`, Menu andalan `#menu`,
      Bawa pulang (wrapper `data-mockup`), Kata mereka, Kunjungi kami `#lokasi`,
      Hubungi kami + footer `#kontak`. Follow the wireframes in design brief §7.
      Done when: at 390 × 844 "Petunjuk Arah" is fully visible without scrolling; at 1440 the
      hero photo stands in cols 8–12 and drops into the green band; no text sits on the photo.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Resize owner-1.jpg with `sips` into `public/img/` (1200 × 1600 and 800 × 1067). Draw the
      five SVG illustrations (BrewSet, RiceBowl, IcedDrink, Croissant, BeanBag) and six line
      icons. Never copy any `photo-*.jpg` into the site.
      Done when: the bean card, the brew set and the three shelf items are visible at 390 and
      1440, each name and price within 16px of its illustration, all on the shared base line.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop. Done when: no React Bits code or dependency was added.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `BeanCardScene`: one `useGSAP` timeline, one ScrollTrigger, `gsap.from` only, card rests
      at CSS `rotate(-4deg)`. Then `<Reveal>` on the seven section content blocks. Hero stays static.
- [x] 8. Reduced motion and accessibility pass.
      Emulate `prefers-reduced-motion: reduce`: Lenis off, no GSAP, card at −4° with shadow.
      Check focus rings on paper and on green, the hero alt text, one `<h1>`, 48px buttons,
      the iframe title, and illustration `aria-label`s.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/ika-kopi/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 72px at 390 and 144px at 1440 on one line;
      h2 ≈ 30px at 390 and 52px at 1440); and the 390 and 1440 screenshots pass the
      builder's visual checklist. Also check: the bean card text is readable; no list, price or
      praise line is larger than its h2; Kerja panels fill cols 5–12 at 1440; the cove line
      sits exactly on top of every green band.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the card's separate shadow animation (keep the static shadow), or the
      desktop header anchors.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no "menu lengkap", no car-parking promise, no "parkir gratis", no certificates,
      no reviewer names, no quote marks around praise, no customer photo in `public/`.
- [x] 12. Write `shops/ika-kopi/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Keep them yes/no; leave the PRD's "before pitching" note out of it (that one is for us).
