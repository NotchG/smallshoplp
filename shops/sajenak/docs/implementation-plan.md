# Implementation plan: Sajenak

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/sajenak/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD's content shape. Copy is Bahasa Indonesia; menu names and the taglines exactly as printed.
      `mockup: true` on: hero line, WhatsApp link, logo mark, non-kopi group, makanan group (items + ranges),
      contact line, closing line. Set `<html lang="id">`, translate MockupBanner, set title/description from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (kapur, arang, kopi, rumput, rotan, malam) + four illustration tints; Fredoka 500/600 as
      `--font-display`, Figtree 400/600 as `--font-body`; `--container` 1200px, `--gutter` 20/40px,
      `--section-y` 64/112px; `--step-*` exactly as design brief §4; motion tokens as TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (photo + Rumput band, ClinkMark in final pose, TodayHours with static fallback) →
      Menu andalan → Pilih tempatmu → Kata mereka → Kunjungi kami (StringLights, hours table, map iframe) →
      Hubungi kami + footer. Follow the wireframes in design brief §7 at 390 and 1440.
      Check "Sajenak" stays on one line from 320px up (mark above the name below 380px).
      Done when: every section matches its two wireframes and prices/labels sit within 24px of their item.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      a) Pre-crop into `public/img/` (sips or a short script, quality ~80, max 1600w):
         `hero-garden-1600.jpg` + `-900.jpg` = owner-3 x 180–1600 (removes the person at left);
         `pojok-rotan.jpg` = owner-1; `ruang-baca.jpg` = owner-7;
         `rooftop-tribun.jpg` = owner-5 x 480–1600, y 420–1913 (no water tank or its logo);
         `rooftop-pohon.jpg` = owner-6 x 50–1550 (3:4);
         `butterscotch.jpg` = owner-2 x 0–794, y 430–1040 (drink only, no poster text).
         Never copy photo-*.jpg anywhere in `site/`.
      b) `DrinkArt` SVG, four variants with the recipes in §6, same line weight and cup outline,
         small clinking-cups glyph on each cup, Indonesian `aria-label`.
      c) `ClinkMark` SVG redrawn from owner-2's mark (two lidded cups, hill-shaped arms, 5 sparks).
      Done when: four drawn drinks plus the butterscotch photo render, and each crop has been checked by eye.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop. Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      ClinkMark timeline (swing in 0.45s power3.in, recoil 3°, sparks), then one `Reveal` per section block (7 max).
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: Lenis off, GSAP skipped, mark shows final pose with sparks. Check focus rings
      per field (TRD), 48px pill buttons, alt text, map iframe title, hours marker is text.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/sajenak/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check in particular: "Petunjuk Arah" visible in the first 390 screen; the hero photo's lawn meets
      the Rumput band without a hard seam; no menu list or praise line larger than its h2; 1440 spaces
      grid has no empty half; the rooftop pair matches the reading-room photo height.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hazelnut nut shapes beside Es Kopi Rumit, or the Reveal on the contact block.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/sajenak/owner-checklist.md` from the PRD's open questions plus every placeholder
      (including the redrawn logo and the space names), in plain language the owner can answer yes/no.
