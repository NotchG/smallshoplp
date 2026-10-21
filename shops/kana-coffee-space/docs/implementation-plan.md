# Implementation plan: Kana Coffee & Space

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kana-coffee-space/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia, dish names as the shop writes them, `whatsapp.number = null`.
      Done when: every fact in the PRD's sections table is in content.ts, every PRD open question maps
      to at least one `mockup: true` item, and nothing from the PRD's "Out of scope" list appears.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Values: design brief §3–5 and §8. Fonts: Mynerve 400 and Jost variable, latin subset.
      Set `lang="id"`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type. Order and grounds: Hero (ochre), Menu andalan
      (ochre), Satu tempat (oak), Fasilitas (steel), Kata mereka (cream), Kunjungi kami (ochre),
      Hubungi kami (rust), Footer (steel). Follow the design brief §7 wireframes at 390 and 1440.
      Done when: at 390 the first screen shows the wordmark, today's hours and "Petunjuk Arah" without
      scrolling, and at 1440 no section leaves half the width empty.
- [x] 5. Product visuals. Owner photos only, as in the design brief §6. Crop with the exact boxes,
      export WebP (hero q78 ≤ 260 KB, crops q80 ≤ 120 KB) into `site/public/img/`. Never use `photo-*.jpg`.
      Done when: the three menu crops show no baked headline text, the ①–④ list matches the numbers on
      the photos, and the hero shows the mesh ceiling.
- [x] 6. React Bits. None for this shop (see TRD). Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Done when: the annotation wipe finishes by ~1.35s and its arrow tip is within 16px of "Petunjuk Arah"
      at 390, 768, 1024 and 1440.
- [x] 8. Reduced motion and accessibility pass.
      Done when: under `prefers-reduced-motion` nothing tweens and Lenis is off. The contrast pairs match
      the design brief §3. Focus rings are visible on every button and link. Tap targets are ≥ 44px.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kana-coffee-space/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist. Kana-specific checks: no list or label in Mynerve; prices sit next
      to their dish names; the watermark "k" is never behind small text; there are never two light
      sections in a row.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the photo's inner scale, or the "k" watermark if it fights the photo.
- [x] 11. Final checks. Build passes; banner present ("Ini draf situs untuk ditinjau pemilik");
      `data-mockup` on every mockup item; `noindex` on; no WhatsApp link points to a made-up number;
      final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kana-coffee-space/owner-checklist.md` from the PRD's open questions plus every placeholder.
