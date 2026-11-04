# Implementation plan: <Shop name>

Work top to bottom. Tick each step only when its "done when" holds.

- [ ] 1. Scaffold. Copy `templates/site-starter/` to `shops/<slug>/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [ ] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Done when: every fact in the PRD's sections table is in content.ts.
- [ ] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [ ] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
- [ ] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
- [ ] 6. React Bits. Install and adapt the components named in the TRD (if any).
- [ ] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
- [ ] 8. Reduced motion and accessibility pass.
- [ ] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/<slug>/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [ ] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
- [ ] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; `metadataBase` is the preview URL; final `npm run shots` so the screenshots
      and the link-preview image (`public/og.jpg`) match the finished site.
- [ ] 12. Write `shops/<slug>/owner-checklist.md` from the PRD's open questions plus every placeholder.
