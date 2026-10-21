# Implementation plan: Morning Mantra

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/morning-mantra/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All strings in Bahasa Indonesia, register "kamu"; board names exactly as on the board;
      hours from raw.json (Senin–Minggu 08.00–22.00); `mapsUrl` from raw.json `googleMapsUri`.
      Translate the MockupBanner text (design brief §5) and set `<html lang="id">`.
      Done when: every fact in the PRD's sections table is in content.ts, and every board price,
      invented dish, food price, the hero line, the WhatsApp assumption and the private-room
      booking line carry `mockup: true`. No minimum-spend text, no pastries, no review quotes.
- [x] 3. Tokens. Palette (`cobalt`, `navy`, `gold`, `wall`, `ink`, `tile`) and fonts (Jost, Ms Madi;
      fallback Mrs Saint Delafield) into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css` (design brief §4–5: container 1200, gutter 20/32,
      section 56/104), `next/font` in layout, motion tokens in `lib/motion.ts` (starter values).
      Add `[data-mockup]` dotted-underline styles and focus rings.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type, in this order: Hero (NeonSign,
      ArchFrame with resized owner-1, buttons, BarFront), Menu kopi (CoffeeBoard), Makan di sini
      (FoodMenu), Tiga ruang (cross-section grid, MaterialBand stair / flute / tile), Kata mereka,
      Kunjungi kami (MapEmbed, HoursList), Hubungi kami (ActionRows) and footer with the tile floor.
      Resize owner-1 first: `sips -Z 960 -s format jpeg -s formatOptions 78 ../photos/owner-1.jpg --out public/owner-1.jpg`.
      Never copy photo-1..3 into `public/`.
      Done when: at 390 the hours label and Petunjuk Arah are in the first screen; at 1440 every
      section matches its desktop wireframe; prices sit 12px after their names.
- [x] 5. Product visuals. The five monoline illustrations in design brief §6 (Kapulaga Coffee,
      Pandan Coffee, V60, cumi bakar sambal matah plate, teh panas cup), one stroke weight,
      `currentColor`, captions adjacent, "Gambar: ilustrasi, bukan foto." once per section.
      Done when: all five render at 390 and 1440 and read as the named item without the caption.
- [x] 6. React Bits. None named in the TRD. Skip.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec: hero sign CSS
      keyframes inside `@media (prefers-reduced-motion: no-preference)`, then `<Reveal>` on the five
      section blocks, then button / row hover and press.
      Done when: on a normal load the sign flickers once and settles lit within ~1.1 s, and nothing else in the hero moves.
- [x] 8. Reduced motion and accessibility pass. Contrast pairs from design brief §3, focus
      rings, 44px+ targets, alt and `aria-label`s, landmarks, skip link, today's hours marked
      with `aria-current="date"` without layout shift.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/morning-mantra/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text (check the two sign lines and the
      illustration captions) and no horizontal scroll; h1 "MORNING" stays one line; display
      and heading sizes match the design brief (h1 ≈ 52px at 390 / 100px at 1440, h2 ≈ 32 / 48px);
      owner-1's baked-in tagline isn't clipped by the arch; and the 390 and 1440 screenshots pass
      the builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the Kunjungi reveal, the footer tile floor).
- [x] 11. Final checks. Build passes; banner present (Indonesian); `data-mockup` on every mockup item;
      `noindex` on; `lang="id"`; no customer photo in `out/`; final `npm run shots` so the
      screenshots match the finished site.
- [x] 12. Write `shops/morning-mantra/owner-checklist.md` from the PRD's open questions plus every placeholder
      (illustrations, room bands, map), in Indonesian.
