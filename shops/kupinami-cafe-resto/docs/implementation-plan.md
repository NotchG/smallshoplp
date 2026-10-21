# Implementation plan: kupinami Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kupinami-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy is in Bahasa Indonesia with "Anda"; dish names stay as the shop writes them; "Jum'atan" stays as written.
      Flag every price, the Mie Aceh variants, the kids' menu, Kopi Gayo, the event uses, the hero personality line,
      the prefilled WhatsApp texts, the descriptive omelette and fish-and-chips names, and the Friday break.
      Reviews are paraphrased (the TRD's four themes), with no names and no quotation marks.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Use the six palette tokens and the type and layout values in design-brief §3–5. Quicksand 500/700 + Figtree 400/600
      via `@theme inline`. Set `<html lang="id">`, the Indonesian banner text, and the title and description from the TRD.
      Add `meter { stagger: 0.02, start: [24 fixed values between 1.6 and 3] }` to `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      In order: TopBar, Hero (with QuietMeter at rest as dots), Nyaman untuk keluarga, Menu andalan, Acara di kupinami,
      Kata para tamu, Kunjungi kami, Hubungi kami. Grounds: dinding, dinding, kayu, teal-tua, putih, dinding, teal.
      At 1024px and up, every section uses the two- or three-column layout in its design-brief wireframe.
      On phone, check that both hero buttons sit above the 844px fold.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Crop owner-1 into `public/img/kupinami-cappuccino.jpg` (x0 y900, 1080×1020) and `public/img/kupinami-omelet.jpg`
      (x500 y300, 580×580) with any local tool, then open both and confirm the @KUPINAMI sticker is gone.
      Draw the three DishArt SVGs (Mie Aceh beef wagyu, chicken carbonara, cappuccino set with peanut cookie and two
      unlabelled sugar sachets), the BadgeMark redraw, and the two Flora clusters. owner-2 and the photo-*.jpg files never go in `public/`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named, so skip this step and add no packages.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      QuietMeter is the only hero motion (one `useGSAP` with scope; name, lines, buttons and photo stay static). Then `Reveal`
      on the five sections listed in the TRD, then the button overlay hover. The bars settle once and never repeat.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: no Lenis, no GSAP, the meter shows as dots. Check focus rings on dinding, kayu, teal-tua and teal,
      alt text on both photos, `aria-label` on the dish SVGs, `aria-hidden` on Flora and the meter, the map iframe title,
      and tap targets of at least 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kupinami-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check: "kupinami" is one line at 390; prices sit under their dish names; the caption sits right under the
      photo frame; no flora touches text or the photo; mint never sits on mint (frames and placemats are putih).
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      The likely candidates are the Acara flora cluster or the Kunjungi reveal. Never cut the meter.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kupinami-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the redrawn logo, the derived Instagram and Facebook URLs, and the prefilled WhatsApp wording.
