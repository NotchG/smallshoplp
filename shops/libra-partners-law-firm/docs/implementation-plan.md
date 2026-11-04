# Implementation plan: LIBRA & Partners Law Firm

Work top to bottom. Tick each step only when its "done when" holds.
All copy is Bahasa Indonesia. The PRD's ethics requirements R1–R8 apply to every string.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/libra-partners-law-firm/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the TRD content model (`shop`, `decode`, `hero`, `meaning`, `practice`, `collector`, `praise`,
      `visit`, `closing`, `footer`). WhatsApp, the mission, the meaning wording, all six practice items, the fee
      note, the collector intro, steps and note, "Sebaiknya telepon dulu", the closing line and the footer
      disclaimer carry `mockup: true`. Translate MockupBanner; set `lang="id"`; Indonesian metadata.
      Done when: every fact in the PRD's sections table is in content.ts, and a search of content.ts for
      `terbaik|pasti|dijamin|100%|lunas|hapus|bebas utang|paling|terpercaya` returns nothing.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Besley (400/600/700) + Atkinson Hyperlegible Next (400/700; fall back to `Atkinson_Hyperlegible` if the
      import doesn't exist). Values from design brief §3–5 and the TRD.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Kop → NameMeaning → PracticeAreas (kabut) → CollectorSteps (rolling, full bleed) → ReviewThemes →
      VisitMap → Closing. Then ScalesMark, DoubleRule (used only in Kop and Closing) and ActionButton.
      DecodeLine renders initials and rest spans from `content.decode`, with the `.sr-only` plain phrase.
      Check the phone hero: the Telepon button sits inside the first 844px.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Here: no photos and no illustrations. The practice areas are the "products": six named items in two
      groups. The only drawn asset is the inline-SVG ScalesMark (≤ 64px, not the emblem). Confirm no
      `photo-*.jpg` is referenced anywhere.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen. Skip, and don't install anything.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Decode line: CSS keyframes on `.dl-r` inside `@media (prefers-reduced-motion: no-preference)`, delay
      `calc(0.25s + var(--w) * 0.1s)`, 0.5s, `cubic-bezier(0.16,1,0.3,1)`, fill `both`. Then `<Reveal>` on the
      content blocks of sections 2–6, plus button hover and press in CSS.
- [x] 8. Reduced motion and accessibility pass.
      With reduced motion the decode phrase is complete at first paint and nothing moves. Focus rings show
      tinta on light and emas on green. Tab order follows the visual order. Every link and button is ≥ 44px.
      The iframe has its title; the scales mark is `aria-hidden`.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/libra-partners-law-firm/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop-specific checks:
      - "LIBRA" is on one line at 390, at about 72px.
      - At 1440 the kop contact block starts at column 9, and both double rules span the container.
      - The green section is full bleed.
      - The rating sits under its heading.
      - No list text is larger than its h2.
      - The map frame isn't an empty white box: the kabut frame shows.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Reveal on the map section, or the small emas bars above the review themes.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also check:
      - `lang="id"`.
      - No staff names and no registration number on the page.
      - No quotation marks around review themes.
      - No customer photo in `public/`.
      - Re-run the R1–R8 word search from step 2.
- [x] 12. Write `shops/libra-partners-law-firm/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Keep the PRD's order (hours first), in Bahasa Indonesia.
