# Implementation plan: Halaman Pertama Kitchen & Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/halaman-pertama-kitchen-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape in the TRD "Content model". Copy is in Bahasa Indonesia, register "kamu". Dish names
      stay as the shop writes them (Bonbon Noir, Bulgogi Rice, Sushi Maki, Pizza Pepperoni). Prices only
      where the PRD gives one. Review themes are paraphrases with no author field. No Wi-Fi, no Instagram.
      Done when: every fact in the PRD's sections table is in content.ts, and every `[MOCKUP]` row
      (WhatsApp, the three mockup dish names, all example prices, the mockup drinks/rice bowls/pasta/breakfast,
      the group-booking line) has `mockup: true`.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Seven colours (`kapur`, `arang`, `daun`, `daun-muda`, `kursi`, `rotan`, `abu`), Urbanist variable
      for both font variables, `--step-*` / `--container: 1200px` / `--gutter` / `--section-y` from design-brief
      §4–5, arch sizes as `--arch-w` / `--arch-h` per breakpoint. `lang="id"`, starter `noindex` kept.
      Motion: `duration.hero = 1.1`, add `duration.heroPhoto = 1.4`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (`kapur`) → Tiga sudut (`daun`) → Menu andalan (`kapur`) → Betah kerja
      (`daun-muda`) → Kata mereka (`kapur`) → Kunjungi + Hubungi + footer (`arang`). Follow the wireframes
      in design-brief §7. Build `ArchWindow` first (arch radius, frame from the spring line, transom, sill)
      and `TodayHours` with its SSR fallback. Headings use the bold-then-light split. Prices sit inline after names.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Resize `owner-1.jpg` for the hero (900×1350 and 600×900) and cut the four 4:3 dish crops at the
      exact pixel boxes in §6 into `public/menu/` (800×600, ≤90 KB each). Draw the three corner SVGs, the
      garden leaves and the rattan lamps within the limits in the TRD (≤14 elements, 2px strokes, palette fills only).
      Done when: four dish photos are visible in the menu grid at 390 and 1440, and no `photo-*.jpg` exists under `site/`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop. Skip, and do not install the package.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Add the inline `js-motion` head script, the CSS start states under `html.js-motion`, then the
      `HeroMotion` `useGSAP` (scale photo 1.06→1 over 1.4 s; wordmark halves to x:0 over 1.1 s, +0.1 s, `expo.out`).
      Then `Reveal` on exactly five blocks.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion emulated: no `js-motion` class, joined wordmark, still photo, Lenis off, reveals static.
      Check focus rings (`kapur` ring on `daun`), 44px buttons, hours `<th scope="row">`, iframe title, alt texts.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/halaman-pertama-kitchen-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: the wordmark sits on one line at 390 and is about 890px wide at 1440; the hero
      arch shows the pizza slice and dishes, with frame and transom visible; the garden window sits beside it at
      1440 on one sill; the three corner drawings read as an arched window plus chair, a pergola plus lamp, and an
      orange chair under a roof (if one doesn't read at 390, simplify it); the four dish photos are visible; no
      `kursi` on `daun`; the night section reads as one continuous `arang` block.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the rattan lamps in Kunjungi, then the Reveal on the review grid.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/halaman-pertama-kitchen-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the 14 PRD questions, the list of every `data-mockup` item on the page, and the request for photos
      of the arched room and courtyard plus the cup-and-leaf logo file.
