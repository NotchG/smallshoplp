# Implementation plan: Kopi Goen

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look, wireframes, motion), `docs/trd.md` (components, spec).
Site language Bahasa Indonesia; no raster images ship (no owner photos; customer photos never).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kopi-goen/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model": hours keyed by weekday (Jumat 12.30), address without
      house number or Kramat Jati, five featured products, four mockup menu groups without prices,
      four review paraphrases with sources and no names, rating "4,7" / 275.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette: malam #13204A, beton #D9D3C7, lampu #F3B63F, pakis #A3C46C, arang #24272C, aren #7A4A24;
      derived malam-terang #1D2D5E, beton-bayang #A8A196, aren-tua #4A2A14. Fonts: Familjen Grotesk
      600/700, Onest 400/500. Scale and layout values from design-brief §4–5. `lang="id"`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: draft banner, Hero (name, eyebrow, tagline, two `Step`s with hours and buttons, scene
      lights in their final "on" state), Menu andalan, Suasana kebun (full-bleed day/night split),
      Kata mereka (beton), Kunjungi kami (map, address, hours table, `TodayHours`), Hubungi kami
      (three steps), footer. Match the wireframes at 390 and 1440. Check "Kopi Goen" stays on one
      line at 320, 390 and 1440.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw `EsKopiAren`, `Cappuccino`, `V60`, `KentangGoreng` as flat inline SVGs on the `Plinth`
      cube with its inset light; `PhotoFrame`s for Kopi Havana, the espresso bar, the garden by day
      and the garden at night, each labelled and `data-mockup`. Names and prices within 16px of the art.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      "Lampu menyala": lower strip, upper strip, trunk cones, name wash, status dot; done by 1.7s,
      light elements only, `useGSAP` scoped to the hero, `data-lights` pending attribute with its
      2.5s CSS fallback. Then the five section reveals (20px, 0.6s, once) and CSS button feedback.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: lights on from first paint, no reveals, Lenis off. Contrast pairs as in the
      design-brief palette table; no lampu or pakis text on beton; focus rings visible on both grounds;
      hours `<table>` with `aria-current="date"` on today; 48px buttons; scene SVGs `aria-hidden`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kopi-goen/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop checks: phone first screen shows hours, "Petunjuk Arah" and "WhatsApp"; the steps read as
      steps and the buttons as buttons; no text over a wash stronger than 22%; product names are not
      larger than "Menu andalan"; the day/night split fills the 1440 width; photo frames never look broken.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the second trunk on desktop, the status-dot step of the sequence, or the
      riser washes.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kopi-goen/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the four photo frames (garden day, garden night, espresso bar, Kopi Havana) and the
      Es Kopi Aren photo that would replace its drawing.
