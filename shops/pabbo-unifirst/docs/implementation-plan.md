# Implementation plan: Pabbo Unifirst

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/pabbo-unifirst/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia, `lang="id"`; banner text in Indonesian; reviews paraphrased in
      reported speech with no names; prices only as the three category "mulai" lines.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] item
      (tagline, "di Food Garden JGC", menu names, snacks, prices, music nights, hall bookings,
      WhatsApp, invented section copy, P badge) has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours from design brief §3 (`plafon`, `garis`, `bantal`, `rotan`, `bilik`, `pabbo`);
      Saira with `axes: ['wdth']`; `--step-*`, `--container`, `--gutter`, `--section-y` from §4–5;
      `wdth` per `.t-*` class.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (CeilingFrames, PBadge, HoursBadge, ActionButtons) → DayNight (split h2, full-bleed
      halves) → Menu (category label + price on one line) → Musik & acara (StageScreen, booth ribs)
      → Kata mereka → Kunjungi kami (MapEmbed) → Hubungi kami + footer.
      Done when: at 390 the hero shows name, "Buka 24 jam" and the Petunjuk Arah button without
      scrolling, and "UNIFIRST" fits the inner frame (else apply the wdth 110 fallback, §4).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Seven flat SVG illustrations (Es Kopi Susu, Matcha Latte, Nasi Goreng, Rice Bowl on rotan
      table disks; Indomie Goreng Telur, Roti Bakar, Kentang Goreng in the snack band), each with an
      Indonesian `aria-label`. No customer photos, no stock photos.
      Done when: all seven render at 390 and 1440 and read as the named dish at a glance.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop: skip, and do not add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Hero frames switch on outer → inner (opacity only), then the red dot; section reveals once,
      20px, 0.6s. Hero text never hidden.
- [x] 8. Reduced motion and accessibility pass.
      Done when: with reduced motion all frames are on at load and nothing moves; with JS off the
      page is complete; focus is visible on every link; split h2 is announced once.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/pabbo-unifirst/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the stage-light wedges in StageScreen, the rattan weave, the booth ribs.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/pabbo-unifirst/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include: P badge stands in for the logo; dish illustrations stand in for food photos; the map
      embed address; the Google Maps directions link.
