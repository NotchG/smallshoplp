# Implementation plan: Undertwenty Coffee Co

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/undertwenty-coffee-co/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shop specifics: the `shop`, `hours`, `featured`, `menuGroups`, `methods`, `latePoints`, `praise` and `patokan`
      shapes from the TRD content model; all copy in Bahasa Indonesia; `lib/hours.ts` written and checked by hand
      for Fri 23.00 (open, closes 01.00), Sat 00.30 (still open from Friday), Sat 01.30 (closed), Sun 01.30 (still open
      from Saturday) and Mon 09.00 (closed, opens 10.00).
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Shop specifics: 6 colours (bata, semen, arang, kayu, lampu, putih); Archivo with `axes: ["wdth"]` plus Yellowtail;
      `--step-*`, `--container: 1200px`, `--gutter` 20/40px, `--section-y` 64/112px from design brief §4–5; `.t-cond`
      and `.grid-12` helpers; `<html lang="id">`; banner copy in Bahasa; motion tokens incl. `door` from design brief §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (bata) → Menu andalan (semen) → Cara kami menyeduh (semen) → Ngopi sampai larut (arang) →
      Kata mereka (kayu) → Kunjungi kami (arang) → Hubungi kami (bata) → Footer (arang), per the wireframes.
      Crop the photos first (TRD Assets): `facade.jpg`, `patokan.jpg`, `es-kopi-susu.jpg` into `public/photos/`.
      Check "UNDERTWENTY" stays on one line at 360, 390, 768 and 1440.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-2 as the Es Kopi Susu card; draw `GreenTeaLatte`, `PourOver`, `EspressoSusu` (flat, filled, 2px arang
      stroke, 200×240 viewBox) standing on the kayu counter band; draw the 4 line-only brew icons on the steel shelf.
      No photo-*.jpg anywhere in `public/`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop. Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      FacadePhoto door-approach ScrollTrigger (scale 1 → 1.10, origin 81% 55%, scrub 0.6, no pin); one Reveal per
      section from Menu down; 0.2s fade for the live hours text and chart marker; CSS hover/press on ActionButton.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: no ScrollTrigger, Lenis off, everything at its final state. Focus ring colour per ground (TRD).
      Tab order matches visual order in Kunjungi kami (text before map in the DOM).
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/undertwenty-coffee-co/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist. Shop checks: at 390 the "Petunjuk Arah" button is fully inside the first screen;
      at 1440 the full name "UNDERTWENTY Coffee. Co" sits on one line and the facade is not full-bleed; every section
      at 1440 matches its two-part wireframe; the colour sequence reads bata → semen → arang/kayu → bata → arang.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the 0.2s fade on the live hours text (the swap can simply happen).
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/undertwenty-coffee-co/owner-checklist.md` from the PRD's open questions plus every placeholder.
