# Implementation plan: Rise n Roll Cake & Bakery

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `prd.md` (copy and facts), `design-brief.md` (look, layout, motion), `trd.md` (components, links, motion spec).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/rise-n-roll-cake-bakery/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items. Use the content model and
      the three Google Maps URLs in the TRD. All copy in Bahasa Indonesia; dish names exactly as in the PRD.
      Translate the MockupBanner text and set `lang="id"`, title and description in `layout.tsx`.
      Done when: every fact in the PRD's sections table is in content.ts, and every [MOCKUP] item
      (hero lead, section copy, flavour notes, Original/Matcha/Klepon, flavour prices, whole cake band, menu prices,
      extra drinks, WhatsApp, Instagram) carries `mockup: true`.
- [x] 3. Tokens. Palette (sage, wall, walnut, terracotta, mustard, rose + derived terracotta-deep,
      walnut-soft, terrazzo) and fonts (Young Serif 400, Figtree 400/600 via `next/font/google`) into `@theme`,
      the type scale and layout values from design brief §4–5 into the `:root` variables in `globals.css`,
      `.bg-terrazzo` tile, focus styles, motion tokens (`reveal: 0.6`, `hero: 0.9`) in `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type: Hero (sage), Cheesecake kami (wall),
      Bukan cuma kue (walnut), Ruang kami (wall), Kata mereka (sage), Kunjungi kami (terrazzo), Hubungi kami (walnut).
      Follow the wireframes in design brief §7. TodayHours with its no-JS fallback.
      Done when: the 390 and 1440 layouts match the wireframes, the hero's "Petunjuk Arah" is visible
      without scrolling at 390×844, and prices/hours sit next to what they describe.
- [x] 5. Product visuals. Illustrations as in the design brief §6: HeroCake, `Slice` × 5 flavours, WholeCake,
      Risol, MatahBowl, SusKrakelin, Latte, RoomVignette. One style (3/4 view, flat fills, no outlines,
      one walnut shadow). No `photo-*.jpg` anywhere in `site/`.
      Done when: 11 products are drawn, each with an Indonesian `aria-label`, and each slice fills ~70% of its arch.
- [x] 6. React Bits. None named in the TRD; skip.
      Done when: no React Bits package or file is in the project.
- [x] 7. Motion pass. Signature moment (hero slice tween), then section reveals, per the TRD motion spec.
      Done when: the slice glides out once on load, hero text never animates, and only section blocks reveal.
- [x] 8. Reduced motion and accessibility pass.
      Done when: with reduced motion the slice renders already out and nothing moves; contrast pairs
      match design brief §3; focus is visible on every link and button; tap targets ≥ 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/rise-n-roll-cake-bakery/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 "Rise n Roll" ≈46px at 390 and 88px at 1440, h2 30/50px,
      product names and group titles below h2); and the 390 and 1440 screenshots pass the
      builder's visual checklist (five arches on one shelf at 1440; no half-empty section).
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Visit section reveal, or the size rings on the whole-cake drawing if they read as clutter.
- [x] 11. Final checks. Build passes; banner present (in Indonesian); `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/rise-n-roll-cake-bakery/owner-checklist.md` from the PRD's open questions plus every placeholder
      (illustrations standing in for photos, WhatsApp and Instagram buttons, example prices).
