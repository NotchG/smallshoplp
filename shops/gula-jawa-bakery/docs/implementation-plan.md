# Implementation plan: Gula Jawa Bakery

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (copy, links, open questions), `docs/design-brief.md` (look, wireframes, motion),
`docs/trd.md` (components, tokens, CSS values). Never put `photos/photo-*.jpg` on the site.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/gula-jawa-bakery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model". All copy is Bahasa Indonesia with "kamu", and menu names stay as written.
      Done when: every fact in the PRD's sections table is in content.ts, and every item in the
      TRD's mockup-flag list has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Leckerli One 400 and Archivo variable (`axes: ['wdth']`). `<html lang="id">`. Theme the focus ring,
      selection and scrollbar per TRD Accessibility.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: draft banner, Hero (NeonSign lit and static + HeroBench), Yang paling dicari (racks with
      empty slots, TentCards, DayBar), Dari oven kami, Dapur terbuka, Kata mereka, Kunjungi kami (MapEmbed),
      Hubungi kami + footer. Grounds: dinding / dinding / nampan / bangku / dinding / nampan / dinding.
      Done when: the 390 and 1440 layouts match the design brief §7 wireframes (column splits included), and
      Petunjuk Arah plus WhatsApp sit above the fold at 390×844.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist, so build the `Rack`, `KitchenTray` and the 8 `art/*` SVGs to the §6
      geometry with the §3 illustration colours: flat fills, no gradients, shadows, perspective or sketch
      strokes. Place them: abon gulung (log + spiral slice) and pastry on the featured racks; cheese bread and
      chocolate sourdough, the 3 donuts and the cheesecake on the menu racks with captions; 8 pastries on the tray.
      Done when: 8 distinct products are visible, each named within 12px by a tent card or caption, each with
      `data-mockup` and an Indonesian `<title>`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip, and do not install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Neon switch-on in pure CSS (`neon-on` keyframes on `.neon-lit`, opacity only), then the starter Reveal on
      sections 2–7, then button responses. Nothing else moves.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce` the sign is lit at first paint, sections are static and Lenis is off.
      Check every pair in design brief §3. The h1 reads "Gula Jawa Bakery" once. Keyboard through all buttons and links.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/gula-jawa-bakery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: the neon reads as an outlined, glowing script (not filled, not blurred mush) at 80 and
      96px; on desktop, sign and hero line sit side by side with the bench band full-bleed below; prices sit beside
      names; the day-bar labels touch their segment; the 3 menu columns don't leave a tall empty gap; the floss
      roll reads as a roll and not a blob.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates: the press scale on buttons, the second drop-shadow on the neon, or the tray's perforation dots.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no `photo-*.jpg` in `site/`; no reviewer names or verbatim quotes; no eyebrow labels; links resolve
      (directions with the place ID, `tel:+6282261842007`, `wa.me/6282261842007`).
- [x] 12. Write `shops/gula-jawa-bakery/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 16 PRD questions and a "replace with your photos" line per illustration.
