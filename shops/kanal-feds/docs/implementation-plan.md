# Implementation plan: Kanal Feds

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/trd.md` (components, motion), `docs/design-brief.md` (tokens, layout, wireframes).
All copy in Bahasa Indonesia; `lang="id"`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kanal-feds/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Shop specifics: name stored as "Kanal Feds" (caps by CSS); `hours` keyed 0 = Minggu … 6 = Sabtu from
      raw.json (Fri–Sun close 22:00); `mapsUrl` = raw.json `googleMapsUri`; WhatsApp `wa.me/6281410538375` with
      `mockup: true`; rating "4,7" / 228; banner "Draf tampilan · bukan situs resmi Kanal Feds"; meta title and
      description from the TRD. Prices only where the PRD gives one.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Shop specifics: six colours plus the derived tints (design brief §3); Jost only, latin, swap; `--step-*`,
      `--container: 75rem`, `--gutter`, `--section-y` exactly as design brief §4–5; motion tokens from §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (limewash), Mulai jam 7 pagi (chalk), Menu andalan (limewash), Ruang kami (palm),
      Kata mereka (chalk), Kunjungi kami (limewash), Hubungi kami + footer (palm). Match the wireframes at 390 and
      1440. Write `lib/hours.ts` (`todayStatus`, Asia/Jakarta) and wire `TodayLine` and `HoursTable` with their
      no-JS fallback first, then the after-mount state. Check `todayStatus` for 06:30, Kamis 10:00, Jumat 21:30
      and Minggu 22:30 (temporary fixed dates, removed afterwards).
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Four inline SVG illustrations (Sabor A Mi, Cappuccino, Es kopi krim, Cake mousse cokelat) in walnut slab
      frames, "Ilustrasi · foto menyusul" under each, `data-mockup` and an Indonesian `aria-label` on each.
      No logo on any cup. Three `PhotoPlaceholder`s in Ruang kami with the crazy-paving pattern and
      "Foto dari pemilik · …" labels.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop. Skip; do not add any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      TodayLine marker and fill (900ms, `expo.out`, 200ms delay, `xPercent`, track `overflow-x: clip`), then
      section reveals on sections 2–6 via the starter's Reveal, then CSS hover states.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion`, the marker is at its final position on load and nothing moves; with JS off,
      the weekly hours and every section are readable. Focus rings visible on limewash, chalk and palm. Tap targets ≥ 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kanal-feds/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop checks: H1 is two lines ("KANAL" / "FEDS") at 390 and one line at 1440; Petunjuk Arah and today's
      status are above the fold at 390; no price, chip or caption sits more than about 24px from its item; the two
      palm sections are not adjacent; placeholders show pattern and label.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidate: the contact-row arrow nudge.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Mockup items to check: tagline, WhatsApp buttons and row, order-ahead lines, healthy-drink examples, every
      price, "Es kopi krim" and "Cake mousse cokelat" names, all four illustrations, all of "Menu lainnya", the
      three placeholders, the "kamu" section copy.
- [x] 12. Write `shops/kanal-feds/owner-checklist.md` from the PRD's open questions plus every placeholder.
