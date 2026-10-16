# Implementation plan: Kyō Coffee Roaster

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kyo-coffee-roaster/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the PRD's Bahasa Indonesia copy verbatim and the content shape in TRD "Content model".
      This includes the links, `closeByWeekday` and the banner text.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      - Fonts: `M_PLUS_Rounded_1c` (300, 400) and `M_PLUS_1` (variable), both with
        `subsets: ["latin", "latin-ext"]`.
      - Layout: `<html lang="id">`; title and description per TRD.
      - Banner: text and colours switched to wall / ink.
      - Then render "Kyō" in both faces and confirm the ō shows its macron.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: SiteHeader, Hero (`ply` ground, battens, counter band, TodayHours with its static
      fallback), MenuBoard, Bakes, Ruang di Kyō, Praise, Visit (map iframe), Contact and footer.
      Use the grid spans and wireframes in design brief §7. Square corners, 2px battens, and prices
      inline 12px after the name.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      There are no owner photos, so draw five inline SVGs:
      - MarbledCup in its finished state, with separate `brew` and `marble` groups inside a
        `clipPath`, and "kyō" in the rounded face. No kettle mascot.
      - Dripper, PecanTart, AppleTart, BunTray.
      - Also the DayRoom, NightGarden and GardenStrip scenes.
      Each drawing gets an Indonesian `aria-label`. Never use `photo-*.jpg` on the site.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None are named. Skip; install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      - The pour in MarbledCup: `brew` y 1.2 s `expo.out`, `marble` at 0.7 s for 0.6 s, once.
      - `Reveal` on sections 2–7.
      - CSS hover and press on buttons and links.
- [x] 8. Reduced motion and accessibility pass.
      - With reduced motion, the cup is static and finished, Lenis is off and sections are visible.
      - Focus rings: `ink` on light grounds, `oak` on `ink`.
      - Tap targets are 48px or more.
      - Contrast pairs match design brief §3.
      - Landmarks and the h1/h2 order are correct.
      - Everything is readable with JS off.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kyo-coffee-roaster/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Also check:
      - at 1024 and 1280, "Kyō Coffee" stays on one line of the hero name;
      - at 390, the "Petunjuk Arah" button is in the first screen;
      - no price or caption drifts from its item;
      - honey (`ply`) appears only in the hero, the bakes and the featured menu panel.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the hover tint on nav links, extra battens, or the garden strip's lamp count.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kyo-coffee-roaster/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Write it in Bahasa Indonesia, in the PRD's order. Add the illustration placeholders
      (5 products, 3 scenes) as "send us a photo" items.
