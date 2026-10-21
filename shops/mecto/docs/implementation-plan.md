# Implementation plan: Mecto

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/mecto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shop specifics: every string in Bahasa Indonesia as written in the PRD's sections table;
      `mockup: true` on the name spelling, WhatsApp link, all prices, the Kopi Gula Aren name, the
      "Juga ada" rows, the Wi-Fi/sockets line and Instagram (`null` until confirmed). Set
      `<html lang="id">`, the Indonesian banner, title and description (TRD "SEO / meta").
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Shop specifics: six colours + two text tints (design brief §3); Gantari via `next/font/google`;
      `--step-*` clamps, `--container: 1200px`, `--gutter` 20/32/40, `--section-y` 64/112 (§4, §5);
      `.gable` clip-path class; `led` tokens (§8); selection and focus colours.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: TopBar + Hero (with TodayHours and static lit LedEdges), Menu andalan, Dari pagi sampai
      malam (DayBeam, vertical then horizontal at 1024), Dalam & luar (SpacesStrip), Nyaman untuk
      semua, Kata mereka, Kunjungi kami (map + hours table), Hubungi kami + footer. Grounds in
      order: beton, kuning, beton, semen, semen, kayu, baja, baja. Prices 8px under names; no
      cards, 2px `baja` rules between items.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Make `public/img/ruang-dalam.jpg` (owner-1 crop x 600–1600, y 0–860, plus 700w) and
      `public/img/nasi-goreng.jpg` (owner-2 at 800×1000, plus 480w); check the crop shows no
      guests. Draw the three DishArt SVGs (Nachos, Buttermilk Chicken, Kopi Gula Aren) to §6's
      shapes and colours, each with "ilustrasi" under it. Done when 4 products show at 390 and 1440.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for Mecto: skip, and don't add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      LED sweep (mask rects, `x` transform, 0.9s `expo.out` from 0.15s) then glow opacity (0.5s
      from 0.6s), once, `useGSAP` with scope; then `<Reveal>` on the six section blocks; then CSS
      hover/press on buttons and links.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: LED lit and glowing at load, no reveals, Lenis off. Check contrast pairs from
      §3 on their real grounds (no `kuning` text on concrete), focus rings on all three grounds,
      44px tap targets, `aria-current="date"` on today's row, alt texts from the TRD, skip link.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/mecto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Mecto checks: at 390 the hero photo, "Mecto", the line, today's hours and both buttons are
      above the fold; at 1440 the hero is 5 + 7 and the gable LED lines sit exactly on the clip
      edges; the nasi goreng photo's bottom edge melts into the yellow; the hours beam labels
      23.00 and 00.00 don't touch at 1024+; no list or label outranks its h2; nothing on the
      `baja` sections reads gloomy (kuning buttons, today's row).
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the gabion grid in the Taman drawing, the "paling tenang" bracket, or the
      button lift shadow.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also: no `photo-*.jpg` anywhere in `site/`; no reviewer names or quote marks on paraphrases.
- [x] 12. Write `shops/mecto/owner-checklist.md` from the PRD's open questions plus every placeholder.
