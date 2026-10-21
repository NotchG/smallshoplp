# Implementation plan: Pintu Dua Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/pintu-dua-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the content shape in the TRD. Indonesian copy exactly as in the PRD sections table.
      Every drink and dish name, every price, the WhatsApp link and the marketing lines get `mockup: true`.
      Hours are the single row "Senin–Minggu · 09.00–00.00". The rating is "4,7" with a comma.
      No staff name, no reviewer name, no quotation marks around paraphrases.
      Set `<html lang="id">` and the Indonesian MockupBanner text from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      `@theme`: `--color-beton #3A3A36`, `--color-malam #141413`, `--color-semen #D7D5CF`,
      `--color-papan #F3F5F6`, `--color-lampu #F0A63A`, `--color-kayu #3D2A1E`, plus text tints
      `--color-abu-beton #BDBAB2`, `--color-abu-semen #55524C`, `--color-tinta #2B2B28`;
      `--font-display` Fredoka, `--font-body` Archivo (with `axes: ["wdth"]`).
      `:root`: `--sign`, `--step-*`, `--container: 1200px`, `--gutter` 20px / 32px (≥768),
      `--section-y` 64px / 112px, `--arc-divider`, leading values, all exactly as in design brief §4–5.
      Add `.t-label`. `lib/motion.ts` stays at starter values.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (beton) → Rooftop (malam) → Menu andalan (semen, top-right radius
      `--arc-divider`, layered over the malam above it) → Dari dapur (semen) → Kata mereka (beton) →
      Kunjungi kami (semen) → Hubungi kami (malam). Follow the design brief §7 wireframes at 390 and 1440.
      SignPanel: square `var(--sign)`, `border-top-right-radius: 100%`, lettering in the lower-left,
      "Pintu" / "Dua" stacked at `--step-display`, "COFFEE" as `.t-label` under it, all inside one `<h1>`.
      Festoon as an inline static SVG. MenuCard prices inline after the name (12px gap).
      Map iframe with a title and a text-link fallback. ConcreteTexture as a static background layer.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Run from `site/` (needs ffmpeg). The geometry was verified in planning: each crop is free of the
      newspaper masthead and headlines, the magazine pages showing another venue, and book text.
      ```sh
      mkdir -p public/img
      ffmpeg -y -i ../photos/owner-1.jpg -vf "crop=344:430:98:100" -q:v 3 public/img/minuman-signature.jpg
      R="rotate=46*PI/180:ow=rotw(46*PI/180):oh=roth(46*PI/180):c=black"   # levels both kraft trays
      ffmpeg -y -i ../photos/owner-2.jpg -vf "$R,crop=720:480:1187:662" -q:v 3 public/img/dapur-platter.jpg
      ffmpeg -y -i ../photos/owner-2.jpg -vf "$R,crop=750:500:568:1304" -q:v 3 public/img/dapur-dimsum.jpg
      ```
      Use plain `<img>` (or `next/image` with the starter's `unoptimized`), with `width`/`height` set and
      `max-width` at the intrinsic width. The hero cup is eager; the two food photos use `loading="lazy"`.
      Alt text from the TRD. No customer photo (photo-1/2/3) is copied into `site/`.
      Done when: the three files exist, open each one, no third-party text or other venue is legible,
      and each renders at or below its intrinsic width at 390 and 1440.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      HeroSign: `useGSAP` scoped to the sign. `gsap.set` dim 0.6 / halo 0, then a timeline with the
      exact steps from the TRD, ≤ 0.9 s total, starting on mount. Then `<Reveal>` once per section block
      (six blocks, none in the hero). Buttons: CSS-only hover tint and press scale.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion the sign is lit and still, there are no reveals and Lenis is off. With JS off
      the sign renders lit. Keyboard: visible focus rings (`lampu` on dark, `malam` on light), and the tab
      order follows the visual order. All tap targets ≥ 44px. The h1 reads "Pintu Dua Coffee".
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/pintu-dua-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks. At 390, "Petunjuk Arah" is above the fold. "Pintu" and "Dua" sit inside
      the arc at 390, 768 and 1440 without touching it. Hero and Rooftop read as two different darks.
      The Menu arc divider doesn't clip the menu card. Prices sit next to their names. The festoon spans the container.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      The first candidate is the ConcreteTexture layer; if it stays, cut something else and note what.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/pintu-dua-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 15 PRD questions, the rooftop-photo request, and a line saying that the only photos
      used are owner-1 and owner-2, cropped.
