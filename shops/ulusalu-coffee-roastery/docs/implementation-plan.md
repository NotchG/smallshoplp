# Implementation plan: ULUSALU coffee and roastery

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/trd.md` (components, motion), `docs/design-brief.md` (look).
Only `photos/owner-1.jpg` may be used on the site. Never use `photo-*.jpg`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/ulusalu-coffee-roastery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model. Write all UI text in Bahasa Indonesia; menu names exactly as in
      brief.md; times as "07.00–22.00" and "24.00"; rating as "4,7". Reviews are Indonesian
      paraphrases with no names. Set `lang="id"` and translate the draft banner.
      Done when: every fact in the PRD's sections table is in content.ts, and every mockup flag
      listed in the TRD is set.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Use the six colours (`bata`, `beton`, `bilah`, `lampu`, `roaster`, `taman`) plus
      `bilah-muted`, and Sofia Sans with Sofia Sans Extra Condensed (design brief §3–5, §8).
      Add the inline `<head>` script that sets `html.js`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Nav, Hero (SlatWall, photo, TodayHours, buttons), Dari roaster kami, Favorit
      pelanggan, Menu, Untuk keluarga & WFC, Kata mereka, Kunjungi kami (HoursSlats, MapEmbed),
      Hubungi kami + footer. Grounds: bata, roaster, bata, beton, taman, beton, bata, bilah.
      Match the wireframes in design brief §7, including the proximity numbers in §5.
      Done when: at 390 both hero buttons end by 660px from the top. At 320 "ULUSALU" stays on
      one line with no overflow. At 1440 every section matches its desktop wireframe column split.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-1.jpg as 800w/1200w WebP plus JPG: 3:4 uncropped on desktop, 5:4 at
      `object-position: 50% 88%` on phone, with the cup logo fully visible. Draw the 8 shelf
      illustrations, the bean bag and the roaster drawing in one style (viewBox 0 0 200 200,
      baseline y=184, 2.5px stroke, flat fills).
      Done when: 8 illustrated products plus the owner photo are visible, each with its name tag
      within 12px; the illustrations look like one set; each illustrated section has "Ilustrasi"
      and `data-mockup`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop. Skip; do not add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      The lamp sweep in the hero (`useGSAP`, scoped, lamps only, slats still), the status fade at
      0.9s, then section reveals for sections 2–8. Button hover and press are in CSS.
      Done when: the sweep finishes in about 1.3s; hero text and photo are visible before and
      during it; nothing loops.
- [x] 8. Reduced motion and accessibility pass.
      Done when, with reduced motion on: Lenis is off, lamps are lit, status is shown and no
      tween runs. With JS off: lamps are lit and "Buka setiap hari mulai 07.00" shows. Focus
      rings are visible on every ground, tap targets are ≥ 44px, the hours `<dl>` is present,
      "Pedas" is text, and alt text is in Indonesian.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/ulusalu-coffee-roastery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Look especially for: lamps reading as warm light, not neon; the red and green fields not
      adjacent; prices beside their names; shelf tags under their items; Friday and Saturday
      slats visibly longer; the map loaded or its link visible.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the brick texture in the Kunjungi chart, or the shelf lamp strip.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check: no `photo-*.jpg` in `public/` or `out/`; no verbatim review text; no reviewer names.
- [x] 12. Write `shops/ulusalu-coffee-roastery/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 15 PRD questions, plus a list of placeholders: the 8 dish illustrations, the
      bean bag, the roaster drawing and the text wordmark standing in for the logo.
