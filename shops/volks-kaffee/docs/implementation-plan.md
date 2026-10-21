# Implementation plan: Volks Kaffee

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/design-brief.md` (look, layout, motion), `docs/trd.md`
(components, motion spec). Site language is Bahasa Indonesia; `lang="id"`.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/volks-kaffee/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD, using the content model in the
      TRD. Flag [MOCKUP] items with `mockup: true`: tagline, WhatsApp link, prices, the two
      item descriptions, the full menu lists, the Suasana intro, cats, parking, and the "kamu"
      register (noted in a comment). Translate the MockupBanner text to the Indonesian banner
      line and set `<html lang="id">`. Use the name "Volks Kaffee" exactly.
      Done when: every fact in the PRD's sections table is in content.ts, and no review is
      quoted or attributed.
- [x] 3. Tokens. Put the six colours (`awning`, `sign`, `kayu`, `bata`, `pagar`, `piring`) and
      `--font-display`/`--font-body` (both M PLUS Rounded 1c via `next/font`, weights
      500/700/800) into `@theme`. Put the type scale, `--leading-display: 1.05`,
      `--container: 1200px`, gutters 20/32/40px and `--section-y` 64/112px into `:root`, and the
      derived steps (`sign-off`, `kayu-2`, `pagar-dark`, `mint-drink`) as plain variables. Set motion tokens
      and `flicker` steps in `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build Hero, Menu andalan, Kopi sesuai seleramu, Suasana, Kata
      mereka, Kunjungi kami and Hubungi kami/footer with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type, following the §7 wireframes.
      Include `AwningEdge` (hero and footer only), the B23 plaque, the hours table, the map
      iframe, and `useToday` for the status line and today's row (generic text at build).
- [x] 5. Product visuals. Draw the four inline SVGs from design brief §6 (Ice Choco Mint,
      Marshmallow Brownie, Smoked Beef Sandwich on the floral plate, Kopi racikan), then the
      OrderSlip and TerraceFrieze (cat group `data-mockup`). Use the same set in the hero
      counter (`aria-hidden`) and on the Menu andalan shelf (`role="img"` + label). Never use
      the photo-*.jpg files.
      Done when: four products are visibly drawn at 390 and 1440, standing on a shared baseline.
- [x] 6. React Bits. None for this shop (see TRD). Skip.
- [x] 7. Motion pass. Build the "Lampu menyala" hero timeline per the TRD motion spec (lit layer
      opacity flicker, then the glow pool; skipped on Sunday), then `Reveal` on sections 2–7,
      then CSS button feedback.
- [x] 8. Reduced motion and accessibility pass. Reduced motion shows the final state (lit, or
      unlit on Sunday) with Lenis off. Check focus rings on every ground, tap targets, the skip
      link, the iframe title, the illustration labels, and the contrast pairs in brief §3.
      Temporarily force Sunday to check the closed state (sign off, closed status, "Minggu"
      row marked), then remove the override.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/volks-kaffee/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll (watch the
      frieze and awning edge); display and heading sizes match the design brief (h1 ≈76px at
      390, ≈136px at 1440; h2 ≈36/56px); "Petunjuk Arah" sits in the first 390×844 screen; the
      wordmark is two lines on a phone and one line at 1440; and the 390 and 1440 screenshots
      pass the builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place
      (first candidates: the Kata mereka scallop markers, or the tilt on the order slip).
- [x] 11. Final checks. Build passes; banner present (Indonesian); `data-mockup` on every
      mockup item; `noindex` on; no "Volks Coffee" anywhere; final `npm run shots` so the
      screenshots match the finished site.
- [x] 12. Write `shops/volks-kaffee/owner-checklist.md` from the PRD's open questions plus
      every placeholder (including the request for the owner's own photos).
