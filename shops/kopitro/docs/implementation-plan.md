# Implementation plan: Kopitro

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kopitro/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD's content model: `shop` (with `directionsUrl`, `mapEmbedUrl`, `whatsapp` as
      mockup), the seven-day `hours`, `hero`, five `menu` items, `methods`, `beans`, `nightFacts`,
      `praise`, `copy`. All copy in Bahasa Indonesia, "kamu" register.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] row
      of the PRD has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (malam, spanduk, kayu, merah, baja, seduh); Sofia Sans Extra Condensed +
      Sofia Sans via `next/font/google`; `--container` 1200px, `--gutter` 20/40px,
      `--section-y` 64/112px, the five `--step-*` clamps from design brief §4; `.t-label` and
      `.on-dark` helpers; `lang="id"`; Indonesian MockupBanner text; title and description from the TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero → Menu andalan → Cara kami menyeduh → Malam di Kopitro → Kata mereka →
      Kunjungi kami → Hubungi kami + footer. Grounds as in design brief §5: one kayu field from the
      hero rail through the menu, malam for 3–6, kayu for the close. Build `Rail`, `WoodField`
      (plank SVG), `Button`, `OpenStatus` (Jakarta-time rules in the TRD, fallback text in the HTML),
      `HoursTable`, the map `iframe` and `RoadDashes` here.
      Done when: all seven sections render at 390 and 1440 like the wireframes, the hero buttons sit
      above 844px on a phone, and OpenStatus shows the right line for a Monday 10:00, Tuesday 01:00,
      Saturday 20:00 and Sunday 01:30 (Jakarta) when you fake the clock.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist, so draw the five inline SVGs (V60 untuk berdua, Vietnam Drip,
      Es Kopi Susu Kopitro, Roti Bakar, Kentang Goreng) and the hero BarScene (kettle, V60 on carafe,
      faceted glass, clip-top jar). One line weight, palette fills only, glass unfilled, no smoking
      items, no other brands. `photo-*.jpg` never go into `site/`.
      Done when: all five products read as their item at 120px tall on a phone, each has an
      `aria-label`, and the carafe's liquid sits inside a `clipPath` with the ids the TRD names.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Skip this step and install nothing.
      Done when: `package.json` dependencies match the starter.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      The pour in BarScene (`useGSAP` scope, `gsap.from` on the liquid so the DOM default is
      filled), then `<Reveal>` on the content blocks of sections 2–7, then the button overlay and
      press CSS.
      Done when: the pour finishes within 1.7 s and never replays, and no hero text moves.
- [x] 8. Reduced motion and accessibility pass.
      Done when: with reduced motion, Lenis is off and the carafe shows filled with no stream;
      keyboard focus is visible on every button and link (kayu ring on malam, malam ring on kayu);
      tap targets ≥ 44px; one h1; contrast pairs match the design brief §3 table.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kopitro/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (KOPITRO ~104px at 390 and ~224px at 1440, h2 40/76px);
      and the 390 and 1440 screenshots pass the builder's visual checklist. Kopitro-specific checks:
      "KOPITRO" spans ~80–88% of phone content width; "MANUAL BREW" is no wider than the name;
      prices sit under their names; the 1440 hero's right side holds the bar scene, and at 1024
      (768 shot) the stacked hero has no overlap; kayu appears as exactly two fields, never stripes.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the pour's last drop, the road dashes, the hero jar.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check that no customer photo is in `site/`, no quote marks or reviewer names appear,
      and live music, beans and prices all carry `data-mockup`.
- [x] 12. Write `shops/kopitro/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 18 PRD questions, plus requests for the logo file and owner photos to replace the
      red shape and the illustrations.
