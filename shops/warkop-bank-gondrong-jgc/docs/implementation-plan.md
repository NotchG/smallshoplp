# Implementation plan: Warkop Bank Gondrong JGC

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look and motion), `docs/trd.md`
(components and values). Only work inside `shops/warkop-bank-gondrong-jgc/`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/warkop-bank-gondrong-jgc/site/`,
      `npm install`, `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in TRD "Content model". Write all copy in Bahasa Indonesia, including the
      banner. Mark mockup prices on the price only (kopi hitam and es kopi susu are real items
      with example prices). Use review paraphrases, never the original wording, with no names.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Use the six colours from design brief §3; Shrikhand (400, latin) and Archivo (variable,
      latin, `wdth` axis); the clamps from design brief §4 and §5; and the motion tokens from
      design brief §8. Set `<html lang="id">`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (Rail, HeroName, HangingSign at rest, buttons, photo slot), Ngopi dulu
      (rail + 4 strips), Di bawah pohon mangga, Dari subuh sampai tengah malam, Kata mereka,
      Kunjungi kami (map iframe), Hubungi kami, footer. Check the hero at 390×844: the name, the
      sign with its hours, and both buttons show above the fold. Check that the sign never
      overlaps the name at 360, 390, 768, 1280 and 1440.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Make the three web images listed in TRD "Performance budget" (`owner-1-hero.jpg`,
      `owner-1-sachet.jpg`, and `owner-3-malam.jpg` cropped above the date stamp) in
      `site/public/photos/`. Never use owner-2, owner-4 or any `photo-*.jpg`. Draw the three
      SVGs (kopi hitam glass, es kopi susu cup, Indomie telur bowl) in the flat sign-painter
      style, with lines in `currentColor` so they work on every strip colour.
      Done when: at least 3 products appear as pictures in "Ngopi dulu", and the date stamp
      isn't visible anywhere.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Skip this step and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Build the HangingSign sway first (it starts from rest, no jump on hydration), then add
      one Reveal per section for S2–S7, then the CSS strip tilt and button press. Add the
      client-side BUKA/TUTUP swap (Asia/Jakarta time) last.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion`: no sway, no reveals, no strip tilt, Lenis off. Check the
      focus ring colours per ground, alt text in Indonesian, ≥ 48px buttons, the menu as lists,
      and the map iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/warkop-bank-gondrong-jgc/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks:
      - At 390, the first screen shows the name, the sign and Petunjuk Arah.
      - At 1440, the hero photo reaches the right edge and the strip bottoms are ragged.
      - Every price sits directly under its name.
      - No section has an unused half at 1440.
      - The map renders; if not, use the fallback panel.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the strip hover tilt, then the h1 text-shadow shade.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/warkop-bank-gondrong-jgc/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Write it in plain language, with all 16 PRD questions. Mention that the three food and
      drink pictures are drawings that can be swapped for their photos.
