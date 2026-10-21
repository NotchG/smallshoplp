# Implementation plan: Al Buraq Cafe & Resto

Work top to bottom. Tick each step only when its "done when" holds.

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/al-buraq-cafe-resto/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      Use the content model in the TRD: `shop`, `whatsapp` + `waLink()`, `banner`, `hero`,
      `suasana`, `menu` (dishes, groups, `priceNote`, `shisha.show = false`), `group`, `praise`,
      `visit`, `close`, `metadata`. All copy in Bahasa Indonesia, exactly as in the PRD table.
      Set `<html lang="id">`, the Indonesian banner text and the skip link "Langsung ke konten".
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours: `plaster` #EBD6CB, `niche` #D2AC9C, `velvet` #6B1526, `slate` #3D4C60,
      `ink` #2B1518, `linen` #FBF5F0 (illustration tints stay inside the SVG components).
      Fonts: Rakkas 400 + Readex Pro (variable), `latin` subset, `display: swap`.
      Type steps, `--leading-display: 1.05`, `--container: 1200px`, `--gutter` 20/40px,
      `--section-y` 64/112px, all from design brief §4–5. Add `::selection`, focus-ring and
      link-underline styles (TRD Accessibility). Motion tokens from design brief §8.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order: Hero → Suasana → Menu andalan → Datang ramai-ramai → Kata mereka → Kunjungi kami →
      Hubungi kami. Grounds: plaster, plaster, velvet, slate, plaster, plaster, velvet.
      Two-column layouts from 1024px on the 12-col grid in the wireframes. Build `ButtonLink`
      (48px min height), `ArchFrame` (border-radius arch, no clip-path), `CloseActions` rows.
      Hero on phone: "Petunjuk Arah" fully visible in the first 390×844 screen.
      The shisha line renders nothing while `show` is false.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Inline flat top-down SVGs: `DishPlatter`, `DishFlatbread`, `DishTea` on `MenuTable`;
      `LongTable` with rice trays and jugs; plus `NicheScene` (sconce + sofa) and the hero
      `Lantern` + `LanternLight` drawn in final, lit state. No shading, no perspective, no people.
      Labels are HTML text within 16px of their dish, with `data-mockup`. Do not use
      `photos/photo-*.jpg` anywhere.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None chosen for this shop: skip, install nothing.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Lantern: pane tiers' lit overlays fade in bottom→top, then the light layer opacity + scale
      0.94→1, all GSAP `from` inside `useGSAP` with a scope. Then `Reveal` on the Suasana
      block, the Menu table figure and the long-table strip only.
- [x] 8. Reduced motion and accessibility pass.
      With `prefers-reduced-motion: reduce`: lantern lit, light visible, no Lenis, no reveals.
      Check contrast pairs in design brief §3, focus rings on velvet and slate, `aria-label`s on
      dish SVGs, `aria-hidden` on decorative SVGs, iframe `title`, 44px+ tap targets.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/al-buraq-cafe-resto/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
      Shop checks: the hero name breaks as "Al Buraq" / "Cafe & Resto" and never touches the
      lantern; dapples stay on the lantern side; the three dishes read as a platter, a flatbread
      plate and a glass at 390; the long table crops cleanly on phone; plaster reads rose (not
      cream) next to velvet; no section at 1440 leaves half the width empty.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      First candidates: the Suasana reveal, or the dapple count (down to ~32) if the hero feels busy.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
- [x] 12. Write `shops/al-buraq-cafe-resto/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Include all 21 PRD questions (in Indonesian for the owner), and say that question 19
      (shisha) and question 2 (photos) need the human reviewer first.
