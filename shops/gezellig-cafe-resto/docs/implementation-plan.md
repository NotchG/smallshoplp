# Implementation plan: Gezellig Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.
Docs: `prd.md` (content and flags), `design-brief.md` (look, wireframes, motion), `trd.md` (components, motion spec).
All site copy in Bahasa Indonesia. There are no owner photos, and `photo-*.jpg` never go into `site/`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/gezellig-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model (`shop`, `hero`, `intro`, `menu`, `zones`, `celebrate`, `praise`, `visit`, `contact`).
      Dish names exactly: "Gezellig Kofta Joppie", "Uitsmijter", "Garang Asem", "Spaghetti Arrabbiata", "Pisang Goreng".
      Every price, the WhatsApp link, the tagline, the name meaning, live-music days, reservations,
      Bitterballen / Poffertjes / Bistik Jawa / Nasi Goreng Gezellig and all drinks are `mockup: true`.
      No "rum", no reviewer names, no quotes, no Instagram.
      Banner text and `<html lang="id">` set.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Values: design brief §3–5 and TRD "Type and layout implementation" (Castoro 400 + italic, Hanken Grotesk;
      `--container` 1200px, `--gutter` 20/40px, `--section-y` 64/112px; the five `--step-*` clamps).
      Add the pre-paint `js` class script and the `[data-glass]` / `[data-halo]` CSS from the TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero → Apa itu gezellig? → Menu andalan → Suasana (Hijau) → Rayakan di sini →
      Kata mereka → Kunjungi kami (Hijau) → Hubungi kami + footer (Besi). Follow each wireframe's
      desktop column split (12-col grid, gap 24px). Text never sits on the window glass. Prices inline
      next to dish names. Steel lines only in the hero window, menu mullion, zone grid and map frame.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Build `RibbedPlate` first, then `KoftaJoppieArt`, `UitsmijterArt`, `GarangAsemArt`, `PisangGorengArt`
      (flat, top-down, palette tints only, same scale and light). Then `LitWindow` (Hijau wall,
      chandelier with 5 tulip-glass shades + halos, painting, tulips, table edge, 3×2 steel grid) and
      the `PhotoFrame` placeholder and `Coaster`. Illustrations and placeholders carry `data-mockup`
      and Indonesian labels.
      Done when: 4 dishes are visible as pictures at 390 and 1440, each with its name and price directly under it.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none: skip, and don't add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `LitWindow` lights-on timeline (glass 0.86 → 0 over 1.1s; halos staggered, done by ~1.3s), then
      `Reveal` on sections 2–8 content blocks only. Button/link hover 180ms in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: window lit at once, no reveals, Lenis off. With JS disabled: the window is lit and all text is visible.
      Check focus rings (Delft on light, Lampu on dark), 48px buttons, heading order h1 → h2 → h3 → h4,
      labels on every SVG and the map iframe title, and contrast pairs from design brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/gezellig-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: at 390 the fold shows the name, window, "Buka hari ini" and both buttons;
      "GEZELLIG" is one line at every width (h1 about 56px at 390, about 132px at 1440); h2 about 33px / 52px;
      the 1440 hero window and the info column sit side by side with no empty half; the menu mullion is centred
      and both columns are filled; the Suasana zone grid matches the frame's height.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the planting strip under the window, or the tulip mark beside the menu group labels.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/gezellig-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include: replacing the four dish illustrations, the hero window illustration and the Suasana frame with owner photos.
