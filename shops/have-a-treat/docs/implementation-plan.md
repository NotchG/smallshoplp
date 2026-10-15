# Implementation plan: Have A Treat

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/have-a-treat/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Indonesian copy from the PRD sections table; links and plate-label positions from the TRD.
      [MOCKUP] items: hero line, sweets intro, cake of the day, the three price lines, breakfast
      all day, drinks intro, room copy wording, WhatsApp row, "kamu" tone.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours and the illustration tints from design brief §3; Fredoka (`axes: ['wdth']`)
      and Sacramento; `--step-*`, `--container: 75rem`, `--gutter`, `--section-y` from §4–5;
      `.t-script`, `.t-board`; `lang="id"`; `::selection`; focus rings; `letterDrop` token.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: hero (name as two lines "have a / treat", Letterboard, buttons, address, ArchPhoto),
      WaveRule, Yang manis-manis (Niche grid), Sarapan & makan (sand band), Kopi & minuman (teak
      band), Sudut favorit, Kata mereka (sand band), felt close with Kunjungi kami and Hubungi
      kami, footer. Desktop grids per design brief §7. Copy owner-1 and owner-2 into
      `public/photos/`, resized per the TRD. No customer `photo-*.jpg` anywhere in `site/`.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      owner-2 PlatePhoto with label chips (desktop) and component sentence (phone). Eight flat
      SVGs in `components/art/treats.tsx`: tiramisu, cheesecake, frenchToast, cakeOfDay
      ([MOCKUP], lilac niche), cappuccino, matcha, hpPotion, wings. Shared viewBox and
      baseline, no strokes except the dome, no gradients.
      Done when: the 390 and 1440 screenshots show all nine products, each name within 12px of
      its picture.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Letterboard letter drop with the no-flash recipe (`js` class, 1.2s CSS failsafe,
      `data-lb="run"`), `useGSAP` scoped to the board. Then `Reveal` on sections 2–8. Then CSS
      hovers.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce`: letters at rest, no reveals, Lenis off. Keyboard
      through every link with visible focus; tap targets ≥ 44px; contrast pairs from §3; alt
      text; one `h1`, one `h2` per section; sr-only letterboard text.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/have-a-treat/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check especially: hero fits the 390 fold with "Petunjuk Arah" visible; "have a / treat"
      breaks as two lines; no product name or letterboard letter larger than its section
      heading; plate chips sit on their items; the three-niche row and the drinks shelf don't
      look like equal icon cards; illustrations read as one flat set.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the niche hover lift, the second WaveRule, or the chicken wings
      illustration if it reads poorly (the text item stays).
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/have-a-treat/owner-checklist.md` from the PRD's open questions plus every
      placeholder (the eight illustrations, the price lines, the WhatsApp row).
