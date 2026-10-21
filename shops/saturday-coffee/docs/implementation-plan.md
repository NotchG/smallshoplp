# Implementation plan: Saturday Coffee 2.0

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/saturday-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD's content model; copy every string from the PRD sections table verbatim
      (Bahasa Indonesia). Translate `MockupBanner` text; set `<html lang="id">`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours + `redup` (design brief §3), Fredoka + Figtree (§4), container 1200px, gutter
      20/40px, section-y 64/112px (§5), motion tokens `hero 1.3`, `bulb 0.45`, `bulbStagger 0.06`,
      `ease.signature` (§8).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (malam) → Menu andalan (plaster) → Suasana (daun) → Dekat Stasiun KCIC Halim
      (tegel) → Kata mereka (plaster) → Kunjungi kami (malam) → Hubungi kami + footer (malam).
      Include StringLights (lit, static), TileBand, CourtyardVignette, TodayHours with server
      fallback, HouseSection, RouteLine, MapEmbed, action tiles. Match the wireframes in design
      brief §7 at 390 and 1440.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      `public/terrazzo.svg` plate plus six flat SVG items (Kopi Susu Strong, Kopi Susu Mantan,
      Wake Up Call, Kentang Goreng Saus Bangkok, Risol Smoked Beef, Beef Bowl Onsen Egg), same
      front view and fill style, Indonesian alt text. No customer photos.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      TRD names none. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Bulb glow keyframes (CSS, once, ≈1.26s), then one `<Reveal>` per section content block,
      then button and tile responses.
- [x] 8. Reduced motion and accessibility pass.
      Bulbs lit with `animation:none` under reduced motion; focus rings per TRD; `aria-current`
      on today's hours row; decorative SVGs `aria-hidden`; tap targets ≥44px; contrast as in §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/saturday-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically: Petunjuk Arah visible in `390-fold.png`; hero name one line at 1440;
      house-drawing labels and route labels not overlapping at 390; the "Hari ini" marker beside
      its row; product prices directly under names.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the reveal on the station band or the vignette's extra plant shapes.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/saturday-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the photo/logo request (question 20) and list each drawing a photo would replace
      (hero vignette, six product plates, house cross-section).
