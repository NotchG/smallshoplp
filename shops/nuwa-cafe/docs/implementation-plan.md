# Implementation plan: NUWA Cafe

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/nuwa-cafe/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All strings in Bahasa Indonesia. Use the TRD's content shape: `shop` (address, `mapsUrl` cid link, `mapEmbedUrl`,
      `whatsapp: ""`, hours "Senin–Minggu 11.00–22.00", rating "4,6" / 227), hero, menu (ramen description from the photos
      is a fact; names, prices, intro and lunch set are mockup), coffee, ambience cells, three paraphrased praise lines,
      close, banner. Set `lang="id"`, title and description in `layout.tsx`.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours `chalk #F8F9F5`, `ink #1C1F1B`, `tomato #C7372A`, `leaf #2E6A3A`, `blush #F4DCD8`, `rim #7DBEDD`.
      Jost (display) and Nunito (body), variable, latin. `--container: 1200px`, gutter 20/32/40px, section-y 64/112px,
      `--step-*` exactly as design brief §4; add `.t-wordmark` and `.t-tracked`. Motion tokens per TRD
      (`topping: 0.5`, `stagger.topping: 0.08`, `distance.topping: 16`). Banner styles: chalk on ink.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: banner, Hero (wordmark, festoon wire, tagline, hours line, actions, bowl slot, rim band), Menu andalan (blush),
      Ngopi di NUWA, Suasana NUWA (roster wall), Kata mereka (leaf), Kunjungi kami (map iframe), Hubungi kami (tomato), Footer.
      Desktop grids from the design brief §7 wireframes (12 columns, 32px gap from 1024px). Prices inline after names;
      group ranges on the h3 line; "nomor menyusul" directly under the WhatsApp placeholder.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      No owner photos exist, and `photo-*.jpg` never go on the site. Draw `RamenBowl` (top view, rim pattern, toppings
      in the reference positions, each topping its own `<g class="topping" data-order>`), `CappuccinoArt` and
      `IcedCoffeeArt` as flat inline SVG with the fixed fills in §6; `RimBand` pattern; `FestoonWire`; roster-cell line
      drawings (vines, red chair, bulbs, cube shelf, roster block) at 1.5px ink stroke; the labelled dining-room placeholder.
      Done when: ramen, cappuccino and es kopi susu are visible at 390 and 1440 with captions within 16px.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      The TRD names none. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Head script for `js-motion`, the CSS hide + 1.5 s failsafe, the late-hydration skip (> 1200 ms), then the topping timeline in `RamenBowl`'s `useGSAP`
      scope (8 groups, 0.5 s, stagger 0.08 s, expo.out). Then `Reveal` on Menu andalan, Ngopi, the Suasana wall and
      Kata mereka only. CSS hover and press on buttons.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: no `js-motion`, bowl complete on first paint, Lenis off. Check focus rings (ink, or chalk on
      leaf and tomato), 44px targets, skip link, `aria-label` on the three product SVGs and the placeholder,
      `aria-hidden` on wire, rim band and roster drawings, iframe `title`, no tomato text on blush.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/nuwa-cafe/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check: the wordmark stays on one line at 390 (about 312px wide) and the wire crosses it; "Petunjuk Arah" is
      above the fold at 390×844; the bowl is at least 75% visible and its base cut by the rim band; the roster wall reads
      as one wall (no radius, no shadow); no price sits far from its item at 1440.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Kata mereka reveal, or the cube-shelf cell.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/nuwa-cafe/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Placeholders to list: WhatsApp number, dining-room photo, facade/ramen/coffee photos to replace the drawings,
      real menu and prices, Instagram handle.
