# Implementation plan: Clay Coffee Space

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/clay-coffee-space/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the model in the TRD. All copy in Bahasa Indonesia. Phone, address, hours, rating
      (4,3 / 743), place ID and Maps URL come from the brief and raw.json. Menu names, prices,
      the WhatsApp link, live-music start time, Podcast Box rental, the "late-night" line, the
      register and every intro line are `mockup: true`. Ranges stay ranges.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette: malam, bingkai, lampu, kanvas, rimbun, gula (design brief §3). Fonts: Italiana 400
      and Jost via `next/font/google`. Steps, `--container` 1200px, `--gutter` 20/40px,
      `--section-y` 64/112px, `--leading-body` 1.6, `.t-label` and `.t-lockup` (brief §4–§5).
      Page ground malam, text bingkai. In layout.tsx: `lang="id"`, the pre-paint motion script,
      Indonesian MockupBanner text, title and description from content.ts.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (FestoonWire, lockup, lead, status, buttons, ArchWindow), Suasana, Menu
      (kanvas field), Sabtu malam (rimbun field), Podcast Box (PavilionFrame), Kata mereka
      (static wire above), Kunjungi (MapEmbed), Hubungi (lampu field) + footer. Desktop
      compositions as in the design brief §7 wireframes. No eyebrow labels over headings.
      Done when: at 390 the "Petunjuk Arah" button is fully visible in the first 844px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist: draw `CupKopiSusu`, `CupAmericano`, `BoxPisangGoreng`,
      `BoxMixPlatter` as inline SVG, one stroke weight, palette fills only, inside bingkai
      arches; plus `CourtyardScene` and `StageScene`. Photo slots in Suasana and Podcast carry
      their Indonesian tag and `data-mockup`. Never use `photo-*.jpg`.
      Done when: four product arches render with name and price directly under each.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      "Lampu menyala": `useGSAP` scoped to the hero, `fromTo` on `.bulb-glow` (stagger 0.06),
      `.arch-panes` at 0.8s. CSS fail-safe at 2.5s. Then `Reveal` on the six sections. Button
      hover/press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion: bulbs lit and panes warm on first paint, nothing moves, Lenis off.
      Check focus rings on every field (lampu outline; malam on the lampu field), aria-labels on
      product art, `aria-labelledby` on sections, map iframe title.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/clay-coffee-space/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief (CLAY ≈98px @390 / 208px @1440, h2 ≈36 / 63px); and
      the 390 and 1440 screenshots pass the builder's visual checklist. Also check: the wire
      spans the full width at 1440, Italiana appears only in the wordmark and h2s, no price
      sits far from its item, and the map sits inside its arch frame.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the static divider wire in Kata mereka (replace with spacing if the page
      already reads clearly without it).
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/clay-coffee-space/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the two photo slots, the drawn products (to be replaced by real photos) and the
      logo-file request.
