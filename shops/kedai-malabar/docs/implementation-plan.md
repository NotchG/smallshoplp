# Implementation plan: Kedai Malabar

Work top to bottom. Tick each step only when its "done when" holds.
Sources: `docs/prd.md` (content), `docs/trd.md` (components, motion, links), `docs/design-brief.md`
(look, sizes, wireframes). All copy in Bahasa Indonesia, register "kamu".

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/kedai-malabar/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Hours exactly as raw.json periods (Rabu 12:00–22:00, Jumat 13:00–23:00, Sabtu 10:00–23:00,
      the rest 10:00–22:00). Prices only for the six items in brief.md. Links from TRD "Content model".
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Six colours (`bata`, `arang`, `kapur`, `lampu`, `tegel`, `terakota`); Jost + Yellowtail;
      `--step-*`, `--container`, `--gutter`, `--section-y` from design brief §4–5; `lang="id"`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: night band + Awning + Hero (SignName, OpenStatus, ArchWindow, buttons) → Menu andalan
      → Malam di Malabar → Kata mereka → Kunjungi kami (Awning, HoursTable, MapEmbed) → Hubungi kami → Footer.
      Make the hero photo first: crop `photos/owner-1.jpg` at x 380, y 60, 540 × 720 into
      `site/public/img/teras-malam.webp` (sips + cwebp). Never use any `photo-*.jpg`.
      Done when: at 390 the "Petunjuk Arah" button is fully visible in the first 750px, and at 1440
      every section matches its desktop wireframe.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Five plan-view SVG dishes on Arang tiles with Terakota/Kapur corner motifs: Roti Nougat,
      Es Kopi Tubruk, Roti bakar coklat kacang, Kopi susu panas, Lontong sayur. Palette colours only.
      Captions within 12px. The two mockup names carry `data-mockup`.
      Done when: all five read as their dish at 163px (phone tile) without the caption.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Garland "Lampu menyala" timeline (≈1.45s), then the status bulb only when open now; then the
      five section reveals. `useGSAP` with scope refs.
- [x] 8. Reduced motion and accessibility pass.
      Reduced motion: bulbs lit, no reveals, Lenis off. Focus rings per TRD. The H1 reads "Kedai Malabar".
      Hours in a real table. Alt text on the photo; labels on the dish SVGs. Check contrast on every ground.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/kedai-malabar/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Check as well: "MALABAR" on one line at 320/390/1024/1440; "ROTI & KOPI" ends under the end of
      MALABAR; no price is pinned far from its name; the map area looks finished even if the iframe is blank.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Malam garland, or the hover highlight.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/kedai-malabar/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include the stand-in script, the five drawings, the Instagram placeholder and the WhatsApp assumption.
