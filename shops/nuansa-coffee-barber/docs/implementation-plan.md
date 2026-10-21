# Implementation plan: nuansa Barber & Coffee

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/<slug>/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
      (`<slug>` = `nuansa-coffee-barber`.)
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the shape and links in the TRD "Content model". Copy is Bahasa Indonesia with the
      "kamu" register. Section headings are typed lowercase. Reviews are the four paraphrased
      themes only: no quotes, no names, no "sejak 2021".
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      - Six colours from design brief §3. `::selection` is Brass on Ink.
      - Comfortaa (600, 700) and Gelasio (400, 700, italic) via `next/font/google`.
      - `--step-*`, `--container: 75rem`, `--gutter`, `--section-y` as in design brief §4–5.
      - Add the `sign` tokens.
      - Set `<html lang="id">`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      - Order: DraftBanner, Hero (SiteNav ≥1024px, Wordmark h1, shopfront, line, hours,
        buttons), Barbershop, Kopi, Juga di sini, Kata mereka, Kunjungi kami, SiteFooter.
      - Grounds: Fascia, Concrete, Limewash, Limewash (brass hairline on top), Concrete, Fascia.
      - Match the 390 and 1440 wireframes in design brief §7.
      - Prices sit inline 12px after the names.
      - Phone: Petunjuk Arah and WhatsApp must sit in the first 844px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      - Crop with `sips` from `site/`. The source photos stay untouched:
        `mkdir -p public/images`
        `sips -c 336 600 --cropOffset 222 10 ../photos/owner-1.jpg --out public/images/shopfront.jpg`
        `sips -c 1027 880 --cropOffset 40 440 ../photos/owner-3.jpg --out public/images/barbershop.jpg`
        `sips -s format jpeg -s formatOptions normal public/images/barbershop.jpg` (about 140 KB; do the same for shopfront)
        Open both. The shopfront must show no sign lettering and no "OPEN TO SERVE YOU" banner.
        The barbershop must show no face in a mirror and no person at the left edge.
      - Draw `KopiSusuArt`, `AmericanoArt` and `CroissantArt` as flat geometric inline SVGs
        (fills and shapes per §6; no outlines, gradients or shading), standing on the brass
        counter line.
      - Do not use owner-2, owner-4 or any `photo-*.jpg`.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named for this shop; skip this step.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      - SignOn: lit layer 0.18 → 0.85 → 0.35 → 1, glow 0 → 1, photo 0.55 → 1, ending at about 1.1s.
      - Wrap the five lower sections in `Reveal`. Add button hover and press in CSS.
      - Nothing else moves.
- [x] 8. Reduced motion and accessibility pass.
      - With `prefers-reduced-motion`, the sign is lit at once and Lenis is off. With JS
        disabled, the page is fully readable and lit.
      - Focus rings are Brass on navy and Fascia on light.
      - All tap targets are ≥ 44px. The map iframe has a title. Alt texts come from the TRD.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/<slug>/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check specifically:
      - At 390 the wordmark sits on one line.
      - At 1440 the wordmark is about 96px and visibly larger than every heading.
      - Prices sit next to their names.
      - The counter's three drawings share one baseline.
      - The mirror frame is a true stadium shape with no face visible.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the glow layer's second shadow, or the brass hairline above "juga di sini".
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Mockup items to check: hero line, WhatsApp buttons and link, booking button and note,
      barbershop lead, every service and price, kopi lead, all three counter prices, croissant,
      extras, Paket Potong + Kopi, and the circled-n placeholder.
- [x] 12. Write `shops/<slug>/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the logo-file request (circled "n"), and the requests for a people-free coffee bar
      photo and drink photos to replace the drawings.
