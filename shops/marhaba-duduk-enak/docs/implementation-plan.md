# Implementation plan: Marhaba! Coffee & Eatery

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/marhaba-duduk-enak/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in the TRD "Content model" and the exact Indonesian strings in the PRD sections table.
      Hours from raw.json (Mon–Thu 08.00–21.00, Fri–Sun 08.00–23.00); `mapsUrl` = raw.json `googleMapsUri`.
      Translate `MockupBanner` text, set `<html lang="id">` and the title/description from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours: `kaca`, `paviliun`, `lis`, `besi`, `teraso`, `bohlam`, plus the `besi-soft` / `lis-soft` text tints
      (design brief §3). Font: Signika via `next/font/google` as `--font-display` and `--font-body`.
      `--container: 1200px`, `--gutter: 20px` / `40px` (≥768), `--section-y: 64px` / `112px`, `--step-*` from design brief §4,
      plus `--frame`, `--mullion`, `--dish-*` and the `--lantern-*` timing variables (TRD).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: SiteHeader → HeroWindow (frame, lettering, rule, tagline, door decal ≥1100px, sill, TodayHours,
      buttons) → Menu andalan (FamilyTable, extras, caption) → Fasilitas (FacilityBoard on paviliun) →
      Suasana → Kata mereka (on teraso) → Kunjungi kami (MapFrame + details) → Hubungi kami + footer (on kaca).
      Follow the wireframes in design brief §7 at 390 and 1440. Check "MARHABA!" stays on one line at 390, 768, 1024 and 1440.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos: draw the five top-down dish SVGs (Mie Kari Ayam, Caesar Salad, Umm Ali, Kopi Susu Kurma,
      Cappuccino) at their relative sizes, the terrazzo chip tile, InteriorScene (lantern bands, lettering zone kept
      dark) and GardenScene (fountain centred). Never copy `photo-*.jpg` into `public/`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None named: install nothing. Done when `package.json` dependencies still match the starter.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      CSS `@keyframes lantern-on` on `.lantern-lit` and `.lantern-pool` (staggered delays), then `<Reveal>` on the
      four blocks named in the TRD only, then button hover/press.
- [x] 8. Reduced motion and accessibility pass.
      Under reduced motion the lanterns are lit with `animation: none`. Focus rings per TRD, skip link, aria-labels on every
      illustration, 48px buttons, contrast pairs from design brief §3 only.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/marhaba-duduk-enak/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 48px @390 / 120px @1440, h2 ≈ 32 / 56px); and the 390 and 1440 screenshots pass the
      builder's visual checklist. For this shop also check: "Petunjuk Arah" sits in the 390 fold; all five dishes
      read as food at 390; the lanterns read as lit in the (reduced-motion) shots; white lettering is legible over the scene;
      no price or "hari ini" tag drifts away from its item at 1440.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates: the light pools under the lanterns, the door handle bar, the Suasana reveal.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/marhaba-duduk-enak/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include: the 15 PRD questions, the hero interior and garden illustrations, the five dish illustrations (to be swapped
      for photos), the logo (lettering is set in Signika until the owner sends theirs), and the map embed check.
