# Implementation plan: Kawa Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kawa-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model; flag names and prices separately. Translate the MockupBanner
      text to Indonesian and set `<html lang="id">`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (beton, kapur, batu, arang, botol, lampu), plus illustration inks as plain CSS
      variables. Archivo with the `wdth` axis; `.w-sign` / `.w-head` / `.w-body` classes.
      `duration.hero = 1.15`, `heroStep1 = 0.35`, `heroStep2 = 0.8`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: TopRow + Hero (sign lockup, static lit disc, TodayHours, buttons, HeroWindow), Menu
      (sleeve grid with empty coloured squares, Sideboard), Tempat (FloorRows, drawing slot),
      Kata mereka, Kunjungi (HoursList, MapEmbed), Hubungi, Footer. Check that KAWA fits its
      column on one line at 1024 and 1440 and the disc halo clears the letters.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Resize owner-1 into `public/img/` (TRD performance). Draw the six sleeve SVGs in one shared
      flat style, then HouseElevation. Fill each sleeve with its listed ground colour.
      Done when: the six sleeves read as Mont Blanc, Espresso on the rock, Es Kopi Signature,
      Nasi Goreng, Chicken katsu & kentang goreng and Donat kampung at 390px.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named: skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      SignDisc two-step halo with the `html.js` pre-state and the 2.5s CSS failsafe, then
      `Reveal` on the five section blocks, then button hover/press CSS.
- [x] 8. Reduced motion and accessibility pass.
      Halo lit with no tween, Lenis off, focus rings per TRD, alt texts and aria-labels, skip link,
      44px+ targets, contrast pairs as in design brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kawa-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: at 390 "Petunjuk Arah" is above the fold. At 1440 the hero window
      bleeds off the right edge and no section leaves half the width empty. Prices sit directly
      under their names. No batu text on kapur.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the sleeve notes, the Sisi B record circle, the lampu dots in Kata mereka.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      No customer photo (photo-1 to photo-3) is anywhere under `site/`.
- [x] 12. Write `shops/kawa-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
