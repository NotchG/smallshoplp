# Implementation plan: Red Soldadu Riverside

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/red-soldadu-riverside/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia; menu names exactly as in the PRD; `lang="id"` in `layout.tsx`;
      banner text from `content.banner`. Mockup: the sub line, WhatsApp, the example prices and ranges,
      the extra coffees, mocktails and snacks, the beans, the whole Kerja atau santai day line, Wi-Fi,
      and the contact line.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (merbau, baja, batu, kali, daun, karat); Young Serif + Archivo; steps and layout
      values from design-brief §4–5 including `--river-h`; `--leading-display: 1.05`; motion tokens
      `duration.glint` and `distance.open` / `distance.glint` / `distance.canopy` (design-brief §8).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (beam plane, RiverBand, deck plane), Di tepi Ciliwung, Menu andalan, Kerja atau
      santai, Kata mereka, Kunjungi kami, Hubungi kami + footer. Grounds: merbau, batu, baja, batu,
      merbau, batu, baja. Match the desktop wireframes at ≥1024 px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      There are no owner photos, so draw the five SVGs (Black and Berries, Banana Fritter, Cheese Baked
      Peuyeum, Mocktail, Honey Wings) plus the bean bag. Also draw RiverBand and PavilionDrawing.
      Six tokens only, flat, ≤12 shapes each, shared baseline on the RailLedge. Never use
      `photos/photo-*.jpg`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip, and don't add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Add the `motion-ok` head script, the CSS pre-offsets with the 2.5 s failsafe, and the Hero
      `useGSAP` timeline (planes ±36 px, glints −48 px, canopy −10 px). Then one `<Reveal>` per
      section 2–7 and the CSS button hover/press.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: no `motion-ok` class, final state, Lenis off. Check that focus rings
      show on every link, tap targets are ≥44 px, headings go h1 → h2 → h3, drawings have
      aria-labels, and there is no text on kali, daun or karat.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/red-soldadu-riverside/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Specific checks: "Red Soldadu" fits on one line at 390; the phone hero shows Petunjuk Arah
      without scrolling; the river band is khaki (not blue) with leaves on top; the five drawings
      sit on one ledge at 1440; every price is directly under its name; the day-line labels are
      under their dots; the map loads or its link is visible.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the canopy settle, or the bean-bag drawing.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/red-soldadu-riverside/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 17 grouped questions, every `data-mockup` item, and a request for owner photos to
      replace the drawings.
