# Implementation plan: Nari Coffee

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content + flags), `docs/trd.md` (components, assets, motion), `docs/design-brief.md` (look, wireframes).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/nari-coffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD's `shop` values (directions URL with place_id, tel, wa.me, map embed) and its `Dish` / `Price` shape.
      All copy in Indonesian; dish names exactly as in the PRD. `<html lang="id">`; banner copy in Indonesian.
      Done when: every fact in the PRD's sections table is in content.ts, and every PRD [MOCKUP] item
      (incl. every price, WhatsApp, the tagline and section lines, the "rombongan" note) carries a mockup flag.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Nari values: colours `cobalt paper ink teak sky steel` (design brief §3); Young Serif 400 → `--font-display`,
      Figtree → `--font-body`; `--step-*` exactly as design brief §4; `--container 1200px`, `--gutter 20px / 40px`,
      `--section-y 64px / 112px`, `--radius-card 20px / 28px`, `--radius-btn 14px`, `--leading-display 1.05`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero (cobalt band + ink AwningBar + shopfront strip) → Menu andalan → Mie Blenger card →
      Tempatnya (sky) → Kata mereka (teak) → Kunjungi kami (ink, map iframe) → Hubungi kami (cobalt).
      Match the wireframes in design brief §7 at 390 and 1440. Price roundels 12px after dish names.
      Done when: the page reads correctly top to bottom at 390 and 1440 with JS disabled.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Crop the four files listed in the TRD "Assets" table into `public/img/` (plus 800w copies); check each crop shows no
      number plate. Build `CanGlass` (Luna Coffee, Taro Latte) and `NoodleBox` (Original / Kari / Rendang) as inline SVG in
      one style: flat fills, 2px `ink` line, no gradients. Never use `photo-*.jpg`.
      Done when: 6 products are pictured (berry photo, 2 glasses, 3 boxes), each with Indonesian alt / aria-label.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for Nari Coffee: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      `RollingBadge`: `gsap.from` x = π × width, rotation 360 → 0, 1.0s `power3.out`, band `overflow: hidden`.
      Then `<Reveal>` on the five section blocks named in the TRD. Button hover/press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion`: Lenis off, badge in place, no reveals. Check focus rings (cobalt on light grounds,
      paper on cobalt/teak/ink), 44px tap targets, roundel `aria-label`s, no cobalt text on ink.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/nari-coffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Nari checks: h1 "Nari Coffee" on one line at 390 (48px) and 1440 (120px); badge not overlapping the name at 390;
      hours + "Petunjuk Arah" visible in the 390 first screen; no motorbikes/plates in crops; Mie Blenger card shows
      three dishes in one row at 1440; no section leaves half the 1440 width empty.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the h1 letter-return text-shadow, or the button hover lift.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/nari-coffee/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include: hours conflict, address number, branch question, WhatsApp, every dish name and price, logo file,
      illustration-vs-photo, rating display, "kamu" vs "Anda", photo permission.
