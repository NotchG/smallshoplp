# Implementation plan: Publika Eat and Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/publika-eat-and-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the PRD "Copy deck" strings exactly; shape per TRD "Content model". `mockup: true` on: menu intro,
      the names Nasi Goreng Wagyu / Tuna Bakar Sambal Matah / Banana Split, all four prices, every dish item
      (illustrations), the breakfast-dishes sentence, the Hubungi heading and body, the WhatsApp button,
      and the hero / Datang untuk / Hubungi illustrations. Set `lang="id"` and the Indonesian banner.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette: design brief §3 (six tokens). Type: Montagu Slab + Hanken Grotesk, `--step-*` clamps from §4.
      Layout: `--container: 75rem`, `--gutter` and `--section-y` clamps from §5. Motion tokens: §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Header, Hero (text + HallPlan in its final, joined state), Menu andalan (timber), Datang untuk (tile),
      Kata mereka (fern), Kunjungi kami (steel, TodayHours, MapEmbed), Hubungi kami (steel), Footer. Anchors
      `#menu`, `#datang`, `#lokasi`. Match the wireframes in design brief §7 at 390 and 1440, including the
      proximity values in §5 (plate → name 16px, name → note → price 8px, hours table max 22rem).
      Done when: at 390 × 844 the "Petunjuk Arah" button is visible without scrolling.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist: draw the six flat, top-down SVG dishes (Nasi Goreng Wagyu, Tuna Bakar Sambal Matah,
      Kopi & teh, Pisang Goreng & Teh, Tiramisu, Banana Split) on matte black plates, then the hero scene
      (tables, chairs, tile columns, dashed beams, ferns, banquette, pendants, glows), the three Datang untuk
      arrangements, and the evening long table for Hubungi. Never place `photos/photo-*.jpg` on the site.
      Done when: all six dishes render in the menu, four of them on the hero table, each with an Indonesian label.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip, and don't install the package.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Head script sets `data-motion="on"`; CSS pre-state for `.plan-table` / `.plan-glow`; one `useGSAP` timeline
      scoped to HallPlan (tables to 0, then glows); starter `Reveal` on the five sections below the hero; button
      hover/press in CSS.
      Done when: the hero text is readable on first paint and the table sequence finishes in about 1.3 s.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce`: no `data-motion`, tables joined, glows lit, no reveals, Lenis off.
      With JS disabled: same final state, static hours line. Check focus rings on every ground, 48px buttons,
      one H1, the hours `<table>`, `aria-disabled` WhatsApp button.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/publika-eat-and-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically: hero H1 at 72px on 1440 and 40px on 390, 3 lines (4 at most); the plan never overlaps
      the hero text between 1024 and 1440 (and the stacked hero holds at 768); dish names smaller than "Menu andalan"; plates bottom-aligned per row;
      the hero caption sits next to the long table; no half-empty row at 1440.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the grout grid in the hero plan, the plank seams on the timber, the dashed beams.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/publika-eat-and-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Placeholders to list: the WhatsApp number, all dish illustrations, the hall illustration, and the
      breakfast dishes.
