# Implementation plan: Indokopi

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/indokopi/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD's content model: `shop` (phone, WhatsApp, maps link = raw.json `googleMapsUri`,
      map embed, 4,9 / 430), `hero`, `todayHours`, `featured` (4), `menu` (3 groups), `promos` (6),
      `pillars` (3), `praise` (3 paraphrased themes), `week` (7 rows with open segments), `contact`.
      All copy in Bahasa Indonesia; menu and promo names exactly as the shop writes them.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      - `@theme`: `aspal`, `rambu`, `batu`, `dinding`, `konter`, `petunjuk` (+ `--color-konter-rib`),
        `--font-display`/`--font-body` = Archivo variable (with `axes: ["wdth"]`), `--font-slab` = Roboto Slab.
      - `:root`: `--container`, `--gutter`, `--section-y` and the five `--step-*` values from design brief §4–5,
        plus the ≥768 and ≥1280 overrides. Add `.w-wide` (112%) and `.w-cond` (75%) for `font-stretch`.
      - `layout.tsx`: `lang="id"`; inline `<head>` script adding `js` to `<html>`; Indonesian title and description.
      - `MockupBanner`: Indonesian text from the TRD.
      - `lib/motion.ts`: add `duration.beam`, `duration.undim`, `delay.beam`, `delay.undim`, `ease.beam`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: `Plate` component first (variants yellow / white / blue / night / struck), then Hero,
      Menu andalan, Promo, Coffee · Work · Thrift, Kata mereka, Kunjungi kami, Hubungi kami, as in
      the design brief §7 wireframes. Hero 7/5 and all other two-column/grid layouts from `lg`.
      `TodayHours` renders the fallback on the server and swaps to today's line after mount
      (Asia/Jakarta weekday) without changing height. WhatsApp links carry `data-mockup`.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      - Photo: `sips -c 450 600 --cropOffset 272 135 ../photos/owner-1.jpg --out public/indokopi-depan.jpg`
        (run in `site/`). Check the crop shows the fascia with "Thrift" complete and no cables,
        motorbikes or promo banner. Never copy `photo-*.jpg`.
      - Inline SVG illustrations: Caramel Latte, Matcha, Es Kopi Susu (can glasses on wooden coasters)
        and Indomie Goreng + Tahu, in the style and colours of §6, standing on the counter ledge.
      - Pictograms: the 8 sign symbols in §6 for promo plates and the three diamonds.
- [x] 6. React Bits. None chosen in the TRD; skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `HeroSign`: CSS pre-dim (`.js .sign-dim`, no-preference only, 2.5 s CSS fallback), then the
      GSAP timeline in `useGSAP` with scope: beam sweep and un-dim. Then `<Reveal>` on the six
      sections below the hero. Button hover/press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: no dim, no beam, Lenis off, reveals at final state. Focus rings (rambu on dark,
      petunjuk on light), 44px+ targets, alt text from the TRD, hours bars `aria-hidden`, hidden
      text on the end-of-zone sign, `(tab baru)` on external links, contrast per design brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/indokopi/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: "INDOKOPI" is one line inside its plate at 390, 768 and 1440; the hours plate and both buttons are in the 390 first screen; four illustrated
      products are visible and look like the items named; no yellow text on light grounds; the
      promo board isn't louder than its heading.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the hero's dashed lane marking.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/indokopi/owner-checklist.md` from the PRD's open questions plus every placeholder.
