# Implementation plan: Elud Cake & Bakery Pondok Kelapa

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/elud-cake-bakery-pondok-kelapa/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items. Use the
      `Product` shape in the TRD; Indonesian copy exactly as in the PRD sections table; prices as
      "Rp 9.000", rating "4,7"; links from the PRD (directions with place ID, keyless map embed,
      `tel:+6281311308866`, WhatsApp `wa.me/6281311308866` as mockup). Translate `MockupBanner` and
      set `<html lang="id">`, title and description from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] line
      in the PRD has `mockup: true` (or `priceMockup: true` for the three example prices).
- [x] 3. Tokens. Palette (lemon, brick, ink, tag, white, tray) and fonts (`Holtwood_One_SC` 400,
      `Archivo` variable, both latin, `display: swap`, mapped via `@theme inline`) into `@theme`;
      the type scale, `--container: 1200px`, gutters (20 / 32 at 768 / 40 at 1024) and
      `--section-y` (64 / 112) into the `:root` variables in `globals.css`, plus
      `--ease-out-quint`; `duration.reveal = 0.6` in `lib/motion.ts`. Restyle `.mockup-banner`
      to white ground, ink text.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: FasciaHero, Roti hari ini, Kue ulang
      tahun & tart, Produk baru, Kata mereka, Kunjungi kami, Footer. Shared pieces first:
      SignPlaque, PriceTag (with visually hidden "Harga sebelumnya" / "Harga sekarang"), TrayCard,
      ButtonLink (per-ground variants in design brief §3), ShelfSigns.
      Done when: at 390 the Petunjuk Arah button is above the fold, and at 1440 each section
      matches its desktop wireframe in design brief §7.
- [x] 5. Product visuals. The 11 flat SVG illustrations in `components/illustrations/`, as in the
      design brief §6: one shared bag for the four buns; tart, Blackforest, Brownies box; Soft
      Sourdough, Salt Bread, Strudel, Pizza Cinta. Each `role="img"` with an "Ilustrasi …" label.
      Done when: every product in the PRD shows its illustration, the hero tray holds Roti Smoke
      Beef, and no customer photo (`photo-*.jpg`) is anywhere in `site/`.
- [x] 6. React Bits. None chosen (see TRD). Skip.
- [x] 7. Motion pass. Signature first: the hero tag markdown as CSS keyframes (strike bar, new price,
      tag nudge) per the TRD motion spec, base styles = final state. Then `<Reveal>` once around the
      content of sections 2–6, and the button overlay/press response.
      Done when: the hero sequence ends by 1.1 s and nothing else on the page animates.
- [x] 8. Reduced motion and accessibility pass. `animation: none` on the signature under reduced
      motion; Lenis and Reveal skip; focus outlines per ground; tap targets ≥ 48 px; sections
      labelled by their plaque h2; map iframe titled; contrast pairs only from design brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/elud-cake-bakery-pondok-kelapa/screenshots/` and `report.json`. Fix and repeat, up
      to 3 rounds. Check specifically: ELUD on one line at 390 (about 315 px wide), brick band
      side by side only from 1280, tags overlapping their trays, no magenta tag on a brick ground.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the plaque wires, the tray inset ring, the strip's right-hand phrase).
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/elud-cake-bakery-pondok-kelapa/owner-checklist.md` from the PRD's open
      questions plus every placeholder (illustrations standing in for photos, Instagram handle,
      WhatsApp, example prices).
