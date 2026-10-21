# Implementation plan: De 92 Degrees

Work top to bottom. Tick each step only when its "done when" holds.
Slug `92-degrees-coffee-resto`. Everything is read from `docs/` (prd, trd, design-brief) and `brief.md`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/92-degrees-coffee-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD (shape in TRD "Content model"), all in
      Bahasa Indonesia, with dish names exactly as printed. Flag every [MOCKUP] item with `mockup: true`:
      the WhatsApp links, Es Kopi Susu 92°, all drink and snack prices, Nasi Liwet set, the tax and
      service note, event packages and the sunset-illustration caption. Set `lang="id"`, Indonesian
      metadata and the Indonesian banner text.
      Done when: every fact in the PRD's sections table is in content.ts, and nothing on the page
      comes from outside it.
- [x] 3. Tokens. The six colours plus `paper`/`ink` aliases go into `@theme`. Type steps, `--container`
      1200px, `--gutter` 20/32/40 and `--section-y` 64/112 go into `:root` (values in design-brief §3–5).
      Unbounded and Figtree via `next/font` in `layout.tsx`, exposed as `--font-display` and `--font-body`.
      In `lib/motion.ts`: `duration.hero 0.6`, `duration.lift 0.45`, `distance.sun 28`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build Hero, Floor guide, Menu andalan, Kopi & minuman, Acara & reservasi,
      Kata mereka and Kunjungi kami (with footer) with no motion, phone first, inside `<Container>`
      with `.section` padding and `.t-*` type. Follow the wireframes and section notes in design-brief §7.
      TodayHours renders its fallback at build and swaps to today's Jakarta hours after mount.
      Done when: at 390 the "Petunjuk Arah" button is fully visible above 844px, and at 1440 every
      section matches its desktop wireframe.
- [x] 5. Product visuals. Crop the owner photos into `public/photos/` with `sips` (boxes in design-brief §6;
      hero is owner-1 at 0, 700, 1600×1100), for example
      `sips -s format jpeg -s formatOptions 80 ../photos/owner-3.jpg --cropOffset 210 98 -c 225 300 --out public/photos/bebek-bangsawan.jpg`.
      Resize Klepon to 1200 wide in a second call. Build the six dish rows and the Klepon band, and
      draw the floor 4 SunsetWindow SVG.
      Done when: 7 products show with no baked-in menu text, price chips or promo badge visible;
      dish thumbs are no wider than 200 CSS px; no `photo-*.jpg` is used anywhere.
- [x] 6. React Bits. None, per the TRD. Skip.
      Done when: no React Bits files or extra dependencies are in the project.
- [x] 7. Motion pass. The signature first: lift digit strip, arrow nudge and the sun scrub in FloorGuide
      (`useGSAP`, scoped, `overwrite: true`), with stickiness only under `prefers-reduced-motion:
      no-preference`. Then the hero panel fade-up, five `<Reveal>`s and the CSS button responses, per the TRD motion spec.
      Done when: scrolling down and back up through the floors always shows the right floor number,
      and fast scrolling never leaves the strip between digits.
- [x] 8. Reduced motion and accessibility pass. With reduced motion: no Lenis, no GSAP, the lift display
      static ("2 · 3 · 4") and not sticky, the sun in its final place. Check contrast pairs, focus rings,
      44px+ targets, the h1 accessible name "De 92 Degrees", Indonesian alt text, the map iframe title,
      and that the lift display and SVG are `aria-hidden`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/92-degrees-coffee-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and heading
      sizes match the design brief (h1 visual ≈ 75px at 390 and 136px at 1440; h2 ≈ 31px and 52px);
      and the 390 and 1440 screenshots pass the builder's visual checklist. Look hardest at: the hero arch
      panel (wordmark inside the dome, not clipped), Unbounded headings wrapping to at most 2 lines at 1440,
      price chips sitting right after the dish names, and the Klepon crop showing no poster text.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place. First
      candidate: the arrow nudge, or the hero fade-up if the page already feels busy.
- [x] 11. Final checks. Build passes; banner present (Indonesian); `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/92-degrees-coffee-resto/owner-checklist.md` from the PRD's 22 open questions plus
      every placeholder (the sunset illustration, and the low-resolution menu crops waiting on originals).
