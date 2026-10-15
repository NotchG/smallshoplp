# Implementation plan: Publika Eat and Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/publika-eat-and-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [ ] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the PRD "Copy deck" strings exactly; shape per TRD "Content model". `mockup: true` on: menu intro,
      the names Nasi Goreng Wagyu / Tuna Bakar Sambal Matah / Banana Split, all four prices, the five dish
      drawings, the Datang untuk drawings, the breakfast-dishes sentence, the Hubungi heading and body, the
      WhatsApp button and the long-table drawing. Not mockup: both owner photos, the hours, address, rating and
      paraphrases. Set `lang="id"` and the Indonesian banner.
      Done when: every fact in the PRD's sections table is in content.ts.
- [ ] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette: design brief §3 (six tokens). Type: Montagu Slab + Hanken Grotesk, `--step-*` clamps from §4.
      Layout: `--container: 75rem`, `--gutter` and `--section-y` clamps from §5. Motion tokens: §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [ ] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Header, Hero (text + HeroPhoto), Menu andalan (timber), Datang untuk (tile), Kata mereka (fern),
      Kunjungi kami (steel, TodayHours, MapEmbed), Hubungi kami (steel, LongTable in its joined state), Footer.
      Anchors `#menu`, `#datang`, `#lokasi`, `#rombongan`. Match the wireframes in design brief §7 at 390 and
      1440, including the proximity values in §5 (caption 12px under the frame, intro 16px under "Menu andalan",
      name → note → price 8px, hours table max 22rem, long-table caption 16px under the table).
      Done when: at 390 × 844 the "Petunjuk Arah" button is visible without scrolling.
- [ ] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Photos first, from `shops/publika-eat-and-coffee/photos/` into `site/public/foto/` (never `photo-*.jpg`):
      `sips -c 673 897 --cropOffset 0 192 -s formatOptions 78 owner-1.jpg --out publika-bar.jpg` and
      `sips -c 1080 1080 --cropOffset 3 0 owner-2.jpg --out banana-sq.jpg` (a temp file outside `public/`), then
      `sips -Z 440 -s formatOptions 80 banana-sq.jpg --out publika-banana-split.jpg` (two calls: in one call sips
      resizes before cropping and gives 437 × 437). Expect about 160 KB and 65 KB.
      Open both crops and check the lattice frame, three copper pendants and counter survive in the first, and
      the whole bowl in the second. Then draw the five flat top-down SVG dishes (Nasi Goreng Wagyu, Tuna Bakar
      Sambal Matah, Kopi & teh, Pisang Goreng & Teh, Tiramisu) on matte black plates, the three Datang untuk
      arrangements, and the closing band (six table groups, each with a dish, kopi on two; ferns; pools).
      No banana split drawing.
      Done when: the menu shows five drawings and the Banana Split photo, each beside its name, visuals
      bottom-aligned per row; the hero photo sits in its steel frame at 4:3.
- [ ] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip, and don't install the package.
- [ ] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Head script sets `data-motion="on"`; CSS pre-state for `.lt-table` (cqi/px/deg offsets) and `.lt-glow`;
      one `useGSAP` timeline scoped to LongTable, triggered once at `top 75%` (tables to 0, then glows); starter
      `Reveal` on Menu, Datang untuk, Kata mereka, Kunjungi; button hover/press in CSS. The hero gets nothing.
      Done when: scrolling to "Ketemu di Publika, ya?" joins the tables in about 1.3 s, once, and no outer table
      leaves the band at 1024 or 390.
- [ ] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce`: no `data-motion`, tables joined, glows lit, no reveals, Lenis off.
      With JS disabled: same final state, static hours line. Check focus rings on every ground, 48px buttons,
      one H1, the hours `<table>`, the `aria-disabled` WhatsApp button, alt text on both photos.
- [ ] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/publika-eat-and-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically: H1 at 72px on 1440 and 40px on 390, 4 lines at most (also at 1024: "Garden City" must
      not break); the hero photo top-aligned with the H1 and roughly as tall as the text column at 1440; the
      photo's light top edge reads clearly against the tile because of the frame; dish names smaller than
      "Menu andalan"; the Banana Split photo the same footprint as a plate, not a card; the map block not an empty
      box; the closing band full width with the caption under the table's left end; no half-empty row at 1440.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [ ] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the plank seams on the timber, the window-light parallelograms in Datang untuk, the ferns
      on the closing band.
- [ ] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [ ] 12. Write `shops/publika-eat-and-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Placeholders to list: the WhatsApp number, the five dish drawings, the Datang untuk and long-table drawings,
      the breakfast dishes, and the two owner photos in use (counter, banana dessert).
