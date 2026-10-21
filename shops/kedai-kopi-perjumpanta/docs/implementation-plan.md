# Implementation plan: Kedai Kopi Perjumpanta

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look and motion), `docs/trd.md`
(components and values). Only work inside `shops/kedai-kopi-perjumpanta/`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kedai-kopi-perjumpanta/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model". Write all copy in Bahasa Indonesia, including the
      banner. Spell menu names exactly as the shop does (Bubur Kacang Hijo, Bandrek Susu Telor,
      Badak). Put `mockup` on the price only for real items with example prices, and on the whole
      line for items not on the banner. Leave `whatsapp.number` and `phone.number` empty. Review
      paraphrases only, with no names and never the word "bar".
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Use the six colours from design brief §3; Besley (variable, latin) and Atkinson Hyperlegible
      Next (variable, latin; fallback Atkinson Hyperlegible 400/700); the clamps from design
      brief §4 and §5; the `served` tokens from design brief §8. Set `<html lang="id">`, add the
      inline `js`-class script in `<head>`, and theme `::selection`, the focus ring and the scrollbar.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (Canopy, HeroName, sub with the greeting span, HoursPlate, buttons, HeroTable
      at its final state, UisBand), Rasa kampung halaman (two PhotoSlots, RasaList), Sedia
      (SediaBanner with MenuLines, lead and note, then the full-bleed ProductBand), Kata mereka,
      Kunjungi kami (map iframe), Hubungi kami (Canopy, buttons, placeholder plate), footer
      (UisBand on top). Check that "Perjumpanta" stays on one line at 360, 390, 1024 and 1440.
      Check that at 390×844 the h1, the hours plate and Petunjuk Arah are above the fold.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      There are no owner photos, and no `photo-*.jpg` may be copied into `site/`. Draw the four
      SVGs (ArtBandrek, ArtLontong, ArtIndomie, ArtBubur) as crisp geometry: 2px tinta
      outlines, flat palette fills, no gradients, people or brand marks. Reuse ArtBandrek's
      glass and saucer inside HeroTable, split into `[data-glass]`, `[data-saucer]` and
      `[data-steam]` groups.
      Done when: four products appear as pictures on the kayu band in "Sedia", each with its
      name and price directly under it, and the bandrek glass sits on its saucer in the hero.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Skip this step and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Build the "served" timeline first (glass down, saucer clink, steam rises and stays), then
      check there's no flash of the glass on hydration. Then add one Reveal per section for
      S2–S6, then the CSS button press.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion`: the glass on its saucer, steam at 0.8, no reveals, Lenis
      off. With JS disabled, the glass and steam are visible. Check the focus ring colour on
      every ground, Indonesian labels on HeroTable, Art* and PhotoSlots, ≥ 48px buttons, menu
      groups as labelled lists, and the map iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kedai-kopi-perjumpanta/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks:
      - At 390, the first screen shows the name, "Buka 24 jam" and Petunjuk Arah.
      - At 1440, the hero table reaches the right viewport edge and the banner sits beside its lead.
      - Every price follows its name with a 12px gap. No price is pushed to a column edge.
      - No kain text on limau anywhere; merah appears only on the banner, the uis bands and the sambal dot.
      - No section has an unused half at 1440.
      - The map renders; if not, use the fallback panel.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the canopy bulbs, then the saucer clink.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kedai-kopi-perjumpanta/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Write it in plain language, with all 17 PRD questions. Say that the four food and drink
      pictures are drawings to swap for their photos, that the two photo frames are waiting for
      their pictures, and that the uis stripe can be switched off in one place.
