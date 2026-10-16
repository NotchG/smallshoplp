# Implementation plan: Paras Lawas Kopi

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look), `docs/trd.md` (how). All copy in Bahasa Indonesia.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/paras-lawas-kopi/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model: shop, hours, hero, menu (3 columns), bundles, toeanNjonja, sudut, praise,
      visit, contact, notes. Board prices are strings exactly as on the board ("18rb"). Menu names use the
      shop's spelling (Mi Korean Edition, Mentaiki Dori, Bundling, Kopi Toean Njonja). Mark `mockup: true` on
      the coffee names, non-kopi line, 9rb drink names, Ayam/Dori bundle labels, Toean Njonja takeaway/1-litre/price
      lines, every WhatsApp link, member details, and every planner-written sentence (tagline, intros,
      "Mampir Doeloe", contact intro, "Sisi A"). Set `lang="id"`, metadata from the TRD, and translate the MockupBanner text.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours `cobalt navy cream chalk terracotta amber` (design brief §3); Federant 400 as `--font-display`
      and Gantari 400/600/700 as `--font-body`; `--step-*`, `--container: 1200px`, `--gutter` 20/40px,
      `--section-y` 64/112px, `--checker` 28/40px; `duration.hero = 1.4`. The page ground (`html`) is cobalt.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero, counter band, Papan Menu, Paket Bundling, Kopi Toean Njonja, Sudut Lawas, patio band,
      Kata Mereka, Mampir Doeloe, Hubungi Kami + footer. Follow the §7 wireframes for 390 and 1440 (12-col grid
      from 1024, single column below). Keep proximity: menu price 12px after the name, bundle tag 12px under
      its name, no dot leaders. The hero h1 is one line (`nowrap`, `data-check`). The arch photo touches the counter band.
      Prepare images: `public/photos/facade-800.jpg` and `facade-1200.jpg` (owner-2), and `interior-1200.jpg`
      (owner-1, crop x 0–1200, y 180–950). Open the crop and confirm no faces. Never copy `photo-*.jpg` into the site.
      Done when: at 390 the first screen shows the Petunjuk Arah button in full, and every section matches its wireframe.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Draw `SosisSolo`, `Mi`, `Mentaiki`, `EsTeh` (reused 3×) and `ToeanNjonjaBottle` as inline SVG: palette
      fills only, a 3px navy outline at 240px, no gradients or shadows, at most 40 shapes each, `role="img"` with
      Indonesian `aria-label`. The bottle label reads "Paras Lawas" with no portrait.
      Done when: the three bundle plates and the Toean Njonja sign each show their illustration at 390 and 1440,
      and each item reads as that food at a glance.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      WallClock: server-rendered at 10.30, then hands tween clockwise to the Jakarta time in 1.4s `expo.out`
      (`svgOrigin` at the face centre). The OpenStatus line fades in at 0.5s. Then one `<Reveal>` per section, sections 2–8.
      Add the CSS hover/press on buttons and contact rows. Use `useGSAP` with a scope everywhere.
      Done when: the clock lands on the correct Jakarta time (check against `TZ=Asia/Jakarta date`) and the
      status text matches the open/closed rule in the TRD.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: the clock is set to now, the status is visible, no reveals, Lenis off.
      Check focus rings (amber on dark, navy on cream), the skip link, 44px+ targets, Indonesian alt text and
      labels, the iframe title, and that with JS off every section is readable and the clock shows 10.30.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/paras-lawas-kopi/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (h1 ≈ 48px @390 and 86px @1440 on one line; h2 ≈ 34px and 56px);
      the 390 fold shows Petunjuk Arah; and the 390 and 1440 screenshots pass the builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Candidates: the Toean Njonja rivets, the chalk underline on the menu category heads, the button lift.
- [x] 11. Final checks. Build passes; banner present (Indonesian); `data-mockup` on every mockup item;
      `noindex` on; `lang="id"`; no `photo-*.jpg` in `out/`; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/paras-lawas-kopi/owner-checklist.md` from the PRD's open questions plus every placeholder
      (the four illustrations, the cropped counter photo).
