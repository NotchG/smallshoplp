# Implementation plan: Rasaharsa

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `prd.md` (every string), `design-brief.md` (look, layout, motion), `trd.md` (structure).
Copy is in Bahasa Indonesia; menu names stay exactly as the shop writes them.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/rasaharsa-coffee-shop/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model. Prices are flagged on their own span; drink names are not.
      `[MOCKUP]` items: hero line, WhatsApp link, bean-mark redraw, Kopi kami lead and aside,
      the 4 prices, the food groups and plate, the event-room action, the contact line.
      Set `lang="id"` and the title/description from the PRD.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      - Six colours: `dinding`, `baja`, `kapur`, `jati`, `pakis`, `pinus`.
      - Fonts: M PLUS Rounded 1c (700, 800) and Figtree.
      - Steps and layout values from design brief §4–5, plus `--slat`, `--shelf`, `--frame`.
      - `lampu` motion tokens from TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      - Order: banner, hero (wall), Kopi kami, Menu andalan, Bukan cuma kopi, Tempatnya, Kata mereka, Kunjungi kami, Hubungi kami + footer.
      - Match the wireframes in design brief §7 at 390 and 1440.
      - Write `lib/hours.ts` and `OpenStatus` now. Check open, closed-before-08.00 and closed-after-close by stubbing the time.
      - The hero ships in its final lit state.
      Done when "RASAHARSA" stays on one line at 360px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      - Crop owner-2.jpg into `site/public/img/latte.jpg`. Do not copy the uncropped file into `public/`:
        `mkdir -p public/img && sips -c 880 1100 --cropOffset 1253 300 ../photos/owner-2.jpg --out public/img/latte.jpg`
        (box left 300, top 1253, 1100×880). Then make a 720px-wide `latte-720.jpg` for `srcset`.
        Open the crop and confirm it shows no chalkboard and no "Discount 50%" sign.
      - Inline SVGs, all in one style: pendants ×3, bean mark, fern band, the four drinks (Kopi Rasaharsa, Kopi Susu Gula Aren, Vietnam Drip, Affogato) on the `jati` shelf, and the [MOCKUP] Nasi Goreng Rasaharsa plate.
      - Never use owner-1.jpg or any `photo-*.jpg`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named for this shop. Tick this step without installing anything.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      - "Lampu menyala": pendants settle, then bulbs switch on, then the wash, all inside `useGSAP` scoped to the hero.
      - When `data-open="false"` the bulbs stay dim.
      - Then the six section reveals, and the CSS hover overlay and press on buttons.
- [x] 8. Reduced motion and accessibility pass.
      - Reduced motion: no Lenis, no GSAP, bulbs per status.
      - JS off: page readable, bulbs lit.
      - Contrast pairs and focus-ring colours per TRD; 48px tap targets; one h1.
      - `aria-hidden` on decoration; Indonesian labels on the product SVGs and the photo.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/rasaharsa-coffee-shop/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks:
      - The hero reads as their wall: slats, wordmark with bean mark, pendants left of it, ferns below.
      - On phone the first screen shows "Petunjuk Arah".
      - Board items and shelf names never outrank "Menu andalan" / "Kopi kami".
      - Prices sit next to their names.
      - Each 1440 section fills its width as wireframed.
      - The map's fallback block shows if the iframe is blank in the screenshot.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      The first candidate is the warm wash behind the wordmark, especially if it reads as a gradient blob.
      Otherwise cut the pendant rotate and keep only the settle.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check:
      - The banner text is "Ini draf tampilan untuk Rasaharsa".
      - No review is quoted and no reviewer is named.
      - No prices beyond the four example prices.
- [x] 12. Write `shops/rasaharsa-coffee-shop/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Write the 12 PRD questions as yes/no lines. Add a
      list of what to replace: the bean-mark redraw, the 5 illustrations (4 drinks + plate), and the
      latte crop if they send better photos.
