# Implementation plan: Cup Times & Warkop

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/cup-times-warkop/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia; menu names and "Low Price High Taste" as printed. Where a pronoun is
      needed, use "kamu" (flagged in the checklist). No Butterscotch Latte, no rating, no review names or dates.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Lilita One (400) and Rubik (variable) via `next/font/google`, latin subset, swap. `lang="id"`,
      the inline `js`-class head script, the sticker pre-hide CSS and failsafe (TRD, Motion spec).
      MockupBanner text in Indonesian.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (`cup`) → Menu andalan `#menu` (`frost`) → Nongkrong sampai malam `#tempat`
      (`night`) → Kata mereka (`frost`) → Kunjungi kami `#lokasi` (`label`) → Hubungi kami `#hubungi` (`cup`)
      → Footer (`night`). Match the wireframes in design brief §7, including the desktop 12-column splits.
      Hero photo: phone 4:5, desktop 3:4, `object-position: 50% 30%`. Check that two or more bulbs and the sachet wall show.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Photos (use `python3 -I` with Pillow from a script outside the photos folder, or `sips`; write to `site/public/img/`):
      - `kiosk-malam.jpg`: owner-1 crop box (left 602, top 1126, right 1118, bottom 1900) → 516×774. No resize.
        It excludes the staff member, the bin, the bags, the pole, the meter boxes and the fridge header. Check by eye.
      - `latte-cup-times.jpg`: owner-4 uncropped, resized to 1200px wide.
      - `es-kopi-susu.jpg`: owner-3 crop box (226, 1760, 1384, 3208) → 1158×1448, resized to 800×1000.
        It starts below the parked motorbikes; confirm no number plate is visible.
      - Never use owner-2 or any `photo-*.jpg`.
      Illustrations: `LatteCup` ×3 (tints from the brief §3, labels at −2°, 1°, −1°), `RotiBakar`, `Renceng`
      (12 plain sachets, no logos or words). Labels are HTML text over the SVG.
      Done when: three latte cups, roti bakar and the es kopi susu photo are all visible, and the owner-4 photo is beside the cups.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop. Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Sticker slap in `PriceSticker` with `useGSAP` scoped; five `Reveal` wrappers; CSS button feedback.
- [x] 8. Reduced motion and accessibility pass.
      Check with reduced motion that the sticker is at −4° and visible, and nothing moves. Focus ring `bulb` on dark, `cup` on light.
      The WhatsApp placeholder isn't a dead link. Every tap target is at least 44px. Amber is never used on frost or white.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/cup-times-warkop/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: at 390, "Petunjuk Arah" and at least part of the sticker sit above the fold. At 1440,
      "Cup Times / & Warkop" is exactly two lines and the hero fits in 900px. Cup labels don't overflow their cups.
      No price chip sits far from its item. The renceng strip doesn't cause horizontal scroll.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the sticker shadow fade, then the bean doodles on the cups.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/cup-times-warkop/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the photo asks: a sharper night photo of the kiosk, a daytime frontage photo, and their own roti bakar photo.
