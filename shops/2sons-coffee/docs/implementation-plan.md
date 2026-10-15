# Implementation plan: 2Sons Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/2sons-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy in Bahasa Indonesia. Use the TRD content model: products, photos, alt text,
      directions, `tel:` and `wa.me` links, hours in Asia/Jakarta, rating. Mockup flags go on the
      can's takeaway line, all three prices, manual brew (whole product), egg toast (whole product),
      both lines of the room lead, Wi-Fi and outlets, the contact line and the WhatsApp button.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Palette and type are in design brief §3–§5. Jost 300/400/500 goes in via `next/font/google`.
      `layout.tsx` gets `lang="id"`, `suppressHydrationWarning`, the Jost variable class on
      `<html>`, the inline motion-gate script in `<head>`, and the Indonesian banner text.
      Add `--shelf-gap`, `--cell-pad` and the `lights` motion tokens.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: hero (HeroShelf, TodayHours), kopinya bener., bukan cuma kopi., betah lama di sini.,
      kata mereka., kunjungi kami. (MapEmbed), hubungi kami., then the footer. Follow the design
      brief §7 wireframes: 12-column shelves at ≥1024, two across at 768, stacked on phone.
      Done when: at 390 the first screen shows the lockup, Petunjuk Arah, Telepon and 07.00–21.00.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Resize owner-1..5 into `public/photos/` with `sips` (TRD). Draw the four SVGs (espresso
      glass, V60, beef cheese melt, egg toast) to the §6 spec in `components/art/`, wrapped in
      ArtTile. Put the can photo on the coffee shelf.
      Done when: five products are visible at both 390 and 1440, and none of the drawings has text or a face.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Install nothing.
      Done when: `package.json` dependencies match the starter.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      First "rak menyala": CSS start states under `[data-motion="on"]`, `gsap.to()` in HeroShelf,
      and the CSS safety keyframes. Then one Reveal per section for sections 2–7, and button hover
      and press in CSS.
      Done when: the lights come on in order (name, shopfront, hours) and finish by about 1.1s,
      and text stays readable throughout.
- [x] 8. Reduced motion and accessibility pass.
      Check with reduced motion: no `data-motion` attribute, page lit from the first frame, Lenis off.
      Check with JS off: the page is lit and every text is visible. Then check the skip link, focus
      ring, 48px buttons, alt text, the map iframe title, and that TodayHours says its status in text.
- [ ] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/2sons-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks:
      - h1 "2sons" is about 89px at 390 and 160px at 1440; h2 is 36px and 60px.
      - "coffee" sits under the end of "2sons" without overlapping it.
      - The wall is visibly darker than the cells, and no grey text appears on the wall.
      - The coffee and food shelves are uneven, not an equal card row.
      - Prices sit right under their product names.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [ ] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the LED-tick bullets in "kata mereka.", the light falloff in non-hero cells,
      and the halo on small art tiles.
- [ ] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check that no `photo-*.jpg` is in `public/`, no review is quoted or named, and kopi gula
      aren is not featured.
- [ ] 12. Write `shops/2sons-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      That is all 16 PRD questions plus anything added while building.
