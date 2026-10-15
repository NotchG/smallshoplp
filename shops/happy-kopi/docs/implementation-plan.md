# Implementation plan: Happy Kopi

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/happy-kopi/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Copy `owner-2,3,4,5,6,7.jpg` into `site/public/photos/` (never `photo-*.jpg`).
      All copy in Bahasa Indonesia; menu names and the slogan exactly as written.
      Set `lang="id"` and translate the draft banner.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP]
      row (intro lines, kopi susu gula aren, drink prices, Toast name, Wi-Fi/colokan,
      WhatsApp, GrabFood, contact line, illustrations) has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Values: design brief §3–5 and §8 (M PLUS Rounded 1c 300/400/700 + Mali 400 italic;
      `--band-h`, `--window-r`).
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (StampMark, TodayHours chip, buttons, ArchFrame, Sun, Band), Minuman favorit
      (sage), Makan sekalian (krem), Nyaman (sage), Kata mereka (zaitun), Kunjungi kami (krem),
      Hubungi kami + footer (zaitun). Desktop splits from `lg`: 7/5, 7/5 (photo left), 4/8 (2×2
      board), 5/7, 4/8 (2×2), 5/3/4, 6/6, as in the design brief §7.
      Done when: at 390 the Petunjuk Arah button is above the fold, and at 1024 and 1440 the
      HAPPY KOPI wordmark is on one line inside its box.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Photos: owner-3 (hero arch), owner-4 (Minuman window), owner-7 (latte circle),
      owner-2 (Makan window), owner-5 (Nyaman window), owner-6 (Kunjungi arch).
      Illustrations: three coasters (kopi susu, butterscotch, matcha) and four plates
      (Happy Chicken Rice, Happy Mini Platter, Bana-Nagih, gorengan): flat inline SVG, art-only
      colours from §3, no outlines or gradients.
      Done when: at least 3 real products are visible as photos, and every menu group has its plate.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop; skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Pre-paint `data-motion` flag + 1.4s CSS fallback; hero timeline after TodayHours knows
      the day (sun rises Mon–Sat, peeks on Sunday, Asia/Jakarta); five section reveals; button
      hover/press in CSS.
      Done when: the hero text is visible on first paint, and the sequence ends by 1.35s.
- [x] 8. Reduced motion and accessibility pass.
      Check: Lenis off, no tweens, sun at today's final position; focus rings (kopi or krem);
      one h1; Indonesian alt text; `aria-current="date"` on today's hours row; decorative shapes
      `aria-hidden`; tap targets ≥ 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/happy-kopi/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks: the sun lobes show on both sides of the arch; no price chip sits far
      from its name; drink names and menu items are smaller than section headings; no mustard text;
      no customer photo anywhere.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the static footer sun. Second: the smile marks in Nyaman.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/happy-kopi/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the menu-board note (prices came from a customer's photo of the board) and list
      each illustration as "placeholder until you send a photo".
