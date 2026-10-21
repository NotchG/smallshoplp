# Implementation plan: Mabsooth Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/mabsooth-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Indonesian copy throughout; `shop`, `hours` (with `jsDay`, `openMin`, `closeMin`), `menu`, `tea`, `praise`,
      contact links exactly as in the TRD content model. Banner text in Indonesian; `lang="id"` in layout.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Aref Ruqaa 700 (`latin`, `arabic`) and Readex Pro (`latin`); six palette colours plus `rattan-dim`;
      `--dur-lights`, `--dur-lockup`, `--ease-lights`, `--ease-out-expo`; the `[data-mockup]` dotted-underline rule
      and `.mock-quiet`; `::selection`, focus outlines; banner on `bark`/`rattan`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: CanopyHero (walnut) → Suasana (vine) → Menu andalan (walnut) → Teh, kopi & shisha (lantern)
      → Kata mereka (bark) → Kunjungi kami + Hubungi kami (rattan) → footer + TileFloor. Follow the wireframes in
      design brief §7, including the 5+7 / 6+6 desktop splits; prices inline 12px after names; hours text 12px after
      each bar. TodayHours with the Asia/Jakarta logic and SSR fallback from the TRD. Map iframe lazy.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Make the four crops in the TRD "Assets" table with PIL and look at each (no faces, no cigarettes, no hoses).
      Draw RiceBowl, LycheeTea and TeaPot as flat top-down SVGs (viewBox 240, ≤ ~40 shapes, no outlines or shading).
      Done when: lamb shank photo, rice bowl, Lychee Tea and teapot are all visible at 390 and 1440.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named: skip, and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      CSS keyframes `lights-on` (lit canopy layer) and `lockup-in`, inside `prefers-reduced-motion: no-preference`;
      then one `<Reveal>` per section block below the hero. No other animation.
- [x] 8. Reduced motion and accessibility pass.
      Check: reduced motion shows the lit canopy and lockup immediately; focus visible on every link and button on
      every ground; tap targets ≥ 44px; skip link; Arabic span `lang="ar" dir="rtl" aria-hidden`; contrast of text
      where the lockup overlaps the canopy fade.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/mabsooth-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check: at 390 the Petunjuk Arah button is above the fold; MABSOOTH stays on one line at 390 and 768;
      no section at 1440 has an empty half; the canopy is never upscaled past 1440px wide.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (display ≈ 54px at 390 and ≈ 132px at 1440; h2 ≈ 34px and 56px); and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates, in order: the illustrations' drop-shadow, the lockup's translateY, the chart ticks.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no `photo-*.jpg` in `site/public/`; no quoted review text and no reviewer names; no "rooftop" anywhere;
      no Instagram link.
- [x] 12. Write `shops/mabsooth-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the lounge-photo request and both "not on the page" groups from the PRD.
