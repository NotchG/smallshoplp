# Implementation plan: KoffieQue

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/koffieque-coffee-eatery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the content model in the TRD. Every dish name, every example price, the burger caption,
      the menu note, the meeting-room booking line and every WhatsApp button get `mockup: true`.
      Add no prices beyond the ones the PRD lists. Copy `photos/owner-1.jpg` to `site/public/images/`.
      Copy nothing else from `photos/`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`dinding`, `baja`, `marmer`, `emas`, `abu`, `abu-terang`), plus the illustration tints
      (`kopi`, `susu`, `jati`, `daun`) as plain CSS variables only. Josefin Sans 600 is `--font-display`
      and Albert Sans 400/500/600 is `--font-body`. Add `--frame`, `--mullion` and `--ceiling`, and set
      `--container` to 1200px. In layout: `lang="id"`, the inline `html.js` head script, the skip link,
      and the Indonesian banner text. Add `::selection` and focus styles.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (SteelFrame panes A, C, E, D, B; DOM order equals visual order), Menu andalan
      (`marmer`, full bleed), Ruang & fasilitas (SteelFrame), Kata mereka, Kunjungi kami (map iframe),
      Hubungi kami and the footer (`baja`). Build TodayHours with the static fallback first, then
      the Jakarta-time swap. Check the 768 layouts named in the design brief §7.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-1.jpg goes in hero pane B only, at 352px or less. Draw the four flat SVGs (KopiSusu, RiceBowl,
      NasiGoreng, Croissant) standing on the `emas` table-edge hairline. Then draw PendantLamps (unlit
      and lit layers) and StringLights.
      Done when: each illustration reads as its dish at 120px on a phone, with no gradients or shading.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named. Skip this step and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      First the lamps-on timeline in PendantLamps (`useGSAP`, scoped), then five section-level `<Reveal>`
      wrappers. Nothing in the hero except the lamps and the open dot moves.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: lamps lit, dot visible, no reveals, Lenis off. JS off: page complete, lamps lit.
      Check contrast pairs against design brief §3 (no `emas` text on light), check that tap targets
      are at least 48px, that the WhatsApp placeholder is `aria-disabled`, that there is one `h1`, and
      that alt text is Indonesian.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/koffieque-coffee-eatery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check: at 1440 the whole hero frame shows in the 900px fold; at 390 Petunjuk Arah is above
      844px; no lamp overlaps the wordmark at 360 or 390; the hero photo is not upscaled; the frame reads as
      one continuous steel grid (no gaps, radii or shadows); the menu row's four bottoms share the hairline.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      The first candidates are the open-dot scale (keep opacity only) or the string-light bulbs' caps.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no `photo-*.jpg` anywhere in `site/`, no rating, review count or reviewer name in the
      output, and every visible string in Bahasa Indonesia.
- [x] 12. Write `shops/koffieque-coffee-eatery/owner-checklist.md` from the PRD's open questions plus every placeholder.
      In Bahasa Indonesia for the owner, grouped as: kontak (WhatsApp, house number), menu
      (names, prices, the three dishes in guest photos, illustrations), ruang meeting and laptop time
      limit, sapaan (kamu or Anda), description, and photos to send.
