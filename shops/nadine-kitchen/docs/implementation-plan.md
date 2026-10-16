# Implementation plan: Nadine Kitchen

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/nadine-kitchen/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the PRD copy (Bahasa Indonesia, prices as "Rp 250rb", hours as "08.00–17.00"),
      the review paraphrases exactly as written in the PRD, alt text from the TRD rules (theme and
      age only; no child names; no character or toy brand names). `mockup: true` on: every
      WhatsApp link and the order card, steps 1 and 4 and step 3's note, all sizes, prices and
      flavours, "Ambil pesanan di sini", the delivery line, and the "Kak" lead in Hubungi.
      Set `lang="id"`, the Indonesian draft banner text, title and description.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours, tints and letter shades from design brief §3; Corben 400/700 and
      M PLUS Rounded 1c 500/800 (latin); `--step-*`, `--container: 1200px`, `--gutter`,
      `--section-y` from design brief §4–5; motion tokens from TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (FondantName, ArchPhoto), Galeri (CakeCard ×7 + ThemeCtaCard), Cara pesan
      (OrderSteps + OrderCard), Ukuran & harga (SizeCard ×4 + FlavourChips), Kata mereka,
      Kunjungi (MapEmbed), Hubungi, Footer. Match the design brief §7 wireframes at 390 and 1440,
      and the 768 notes. OrderCard builds the `wa.me` URL from its four fields on every change
      and stores nothing. Check that "KITCHEN" fits its column at 390, 1024 and 1440 (adjust the
      `cqi` value in `--step-display` if not).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Pre-crop and resize into `site/public/photos/` with `sips` (never edit `shops/nadine-kitchen/photos/`):
      owner-5 crop y 0–1900 (date stamp out), ≤ 1000px wide; owner-8 crop y 180–1243
      (Instagram header out); owner-4 crop x 0–860, y 0–1035 (second panel and progress bar
      out); owner-1, -2, -3, -6, -7, -9 resized only, ≤ 900px wide. Never copy photo-1.
      Draw the four CakeSilhouette SVGs to one scale (8px/cm desktop, 5px/cm phone) on a shared baseline.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Skip, and install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Hero letter placement first (fonts-ready wait, fixed tilt list, `back.out(1.3)`,
      pre-hydration flag + 2 s CSS failsafe). Then Reveal on the six lower sections, the
      order-preview letter fade (CSS `@starting-style`), and button hover/press (CSS).
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: letters at rest, no GSAP, Lenis off, no button transforms. Keyboard
      through every link and input with a visible Laut focus ring; 44px targets; the h1 reads
      "Nadine Kitchen"; contrast pairs as in design brief §3.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/nadine-kitchen/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check the hero fold at 390: name, line, hours, the WhatsApp button and the top of
      the teddy cake are visible. At 1440: no section with half its width empty, captions
      inside their cards, prices under their names.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Reveal on Kata mereka, or the button hover lift.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no child names or brand names in any alt or caption; no quotation marks around
      review paraphrases; no "halal", star row or years-in-business claim anywhere.
- [x] 12. Write `shops/nadine-kitchen/owner-checklist.md` from the PRD's open questions plus every placeholder.
      The 11 questions are in Indonesian in the PRD. There are no placeholders: every image is
      an owner photo or a drawn size silhouette.
