# Implementation plan: Rene Cafe

Work top to bottom. Tick each step only when its "done when" holds.
Docs: `prd.md` (copy and facts), `design-brief.md` (look, wireframes, motion), `trd.md` (components, specs).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/rene-cafe/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model: shop facts, 7 hour rows (Senin…Minggu, 10.00–22.00), places,
      dishes, menu groups with `from` prices, 4 paraphrases, contact placeholders, banner text.
      All copy in Bahasa Indonesia, "kamu" register. No phone or WhatsApp number anywhere.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] row
      in the PRD has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`bata`, `daun`, `kaca`, `besi`, `lampu`, `pucuk`) plus illustration tints as plain
      CSS variables; Besley + Figtree; `lang="id"`; `.bg-brick` pattern; focus ring per ground.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: SkipLink, Hero (text + empty window box), Ruang hijau, Wajib dicoba, Menu andalan,
      Kata mereka, Kunjungi kami (map iframe), Hubungi kami + footer. Use SteelFrame and
      DirectionsButton everywhere they appear. Match the 390 and 1440 wireframes in design-brief §7.
      Done when: on a 390 viewport the "Petunjuk Arah" button is fully visible above 844 px, the hero
      is stacked below 1280 px and two-column from 1280 px, and at 1440 every section is a two- or
      three-column composition as wireframed.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist: draw inline SVGs. Hero window (frame, gable, 3 garden layers, glare
      layer), 3 place panels sharing one ground line, 4 dishes top-down on the wood disc over lawn
      (Pangsit Kuah, Ayam Penyet with tahu, tempe and `pucuk` sambal, Bebek Keranjang in a rattan
      basket, iced Matcha Latte), the 2 wire-basket snacks, bulb bullet, bulb string. Flat fills only,
      no outlines or gradients except one radial glow per night bulb. Each with an "Ilustrasi: …" label.
      Customer photos (`photo-*.jpg`) are reference only and never copied into `site/`.
      Done when: 5 products are visible as illustrations and no `photo-*.jpg` is in `site/`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      TRD names none: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Hero: CSS keyframes (glare 0.85 → 0, layers 6/10/16 px → 0, 1.2 s, 0/80/160 ms), base styles
      = final state. Then `<Reveal>` on the four blocks named in the TRD, and button hover/press CSS.
      Done when: the hero settles by 1.4 s with no flash on hydration, and nothing else moves on load.
- [x] 8. Reduced motion and accessibility pass.
      Done when: with reduced motion the hero renders in its final state and no Reveal runs; every
      text pair meets the contrast in design-brief §3; tab order runs skip link → buttons → map →
      footer links with a visible ring on every ground; one h1, h2 per section.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/rene-cafe/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 55 px at 390 and 100 px at 1440 on one line;
      h2 32 px / 56 px); and the 390 and 1440 screenshots pass the builder's visual checklist.
      Shop checks: hero window sill meets the green section; dish names sit inside their panes;
      "mulai Rp …" sits under its group title; no section at 1440 leaves half the width empty.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Kata mereka Reveal, or the brick pattern if it competes with the hero text.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: banner and all UI strings in Indonesian; no phone number, rating or review text that isn't in
      the PRD; reviews paraphrased with no names and no quotation marks.
- [x] 12. Write `shops/rene-cafe/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include: the 14 PRD questions, the WhatsApp and Instagram slots, and the request for owner photos
      to replace the 5 product illustrations and the hero and place illustrations.
