# Implementation plan: Madre Coffee Space

Work top to bottom. Tick each step only when its "done when" holds.
Docs: `prd.md` (copy and facts), `trd.md` (components, motion spec), `design-brief.md` (look, layout, tags).

- [x] 1. Scaffold. Copy `templates/site-starter/` to `shops/madre-coffee-space/site/`, `npm install`,
      `npm run shots:setup` (once per machine, installs the screenshot browser).
      Done when: `npm run build` passes on the untouched starter.
- [x] 2. Content. Fill `content.ts` from brief.md and the PRD; flag [MOCKUP] items.
      All copy is in Bahasa Indonesia, exactly as in the PRD sections table. Use the `Dish`, `Tag`, `Photo`
      and `Hours` shapes from the TRD. Mark `mockup: true` on: the WhatsApp link and button, every price,
      the breakfast line, the kids' menu items, the "Madre = ibu" line, and the booking/gatherings line.
      Replace the `MockupBanner` text with the PRD's Bahasa line, and set `lang="id"` and the metadata from the TRD.
      Done when: every fact in the PRD's sections table is in content.ts.
- [x] 3. Tokens. Palette and fonts into `@theme`, the type scale and layout values into the
      `:root` variables in `globals.css`, `next/font` in layout, motion tokens in `lib/motion.ts`.
      Colours: `paper #F8F5EE`, `ink #1E1912`, `mustard #E0A53A`, `cobalt #1A3784`, `cognac #94492A`,
      `line #D8CFBE`. Fonts: Bricolage Grotesque (`axes: ["opsz", "wdth"]`) as `--font-display`, Nunito as
      `--font-body`. Add `.f-display` and `.grid-12` per the TRD. `--leading-display: 1.05`. Gutter 20/40px,
      section 56/80/104px, container 1240px.
      Done when: no type size or width is written as a Tailwind arbitrary value with spaces.
- [x] 4. Sections, static. Build each section with no motion, phone first, inside
      `<Container>` with `.section` padding and `.t-*` type.
      Order and grounds: Hero (mustard), Menu andalan (paper), Camilan & manis (mustard), Minuman (cobalt),
      Ramah anak (paper), Ruang kami + Kata mereka (cognac), Kunjungi kami (paper), Hubungi kami (cobalt).
      Follow the column spans in design brief §7. For the Ruang kami photo that bleeds off the right edge,
      put `overflow-x: clip` on the section so it can't cause horizontal scroll. TodayHours renders the
      static fallback first, then today's line after mount (Asia/Jakarta).
      Done when: every section in the PRD renders at 390, 768 and 1440 with real copy.
- [x] 5. Product visuals. Owner photos or illustrations, as in the design brief §6.
      Only `owner-*.jpg` files go on the site; never copy `photo-*.jpg`. From `site/`, prepare the images
      (these commands are tested; note that sips ignores a crop offset of 0 on the x axis, so use 1):
      ```
      mkdir -p public/photos
      sips -c 2400 1480 --cropOffset 0 120 ../photos/owner-7.jpg --out public/photos/hero-spread.jpg && sips -Z 1600 public/photos/hero-spread.jpg
      sips -c 620 620 --cropOffset 827 248 ../photos/owner-7.jpg --out public/photos/ayam-afrika.jpg
      sips -c 2000 1600 --cropOffset 250 1 ../photos/owner-3.jpg --out public/photos/minuman.jpg && sips -Z 1500 public/photos/minuman.jpg
      sips -c 887 1330 --cropOffset 180 1 ../photos/owner-6.jpg --out public/photos/ruang-main.jpg
      sips -Z 1500 ../photos/owner-2.jpg --out public/photos/camilan.jpg
      sips -Z 1500 ../photos/owner-4.jpg --out public/photos/churros.jpg
      sips -Z 1500 ../photos/owner-5.jpg --out public/photos/mocktail-pink.jpg
      cp ../photos/owner-1.jpg public/photos/ruang-kami.jpg
      ```
      Expected: hero-spread 986×1600, ayam-afrika 620×620, minuman 1200×1500, ruang-main 1330×887,
      camilan, churros and mocktail-pink 1000×1500, ruang-kami 1600×1067; about 2.1 MB in total.
      Build `TaggedPhoto` with fixed aspect-ratio boxes (`1480 / 2400`, `4 / 5`, `3 / 2`) and place the tags
      from the design brief §6 table, hiding the ones marked for phone below 640px.
      Done when: at 390 and 1440 every tag sits within ~24px of its plate, glass or object, covers no food,
      and touches no other tag; captions sit 12–16px under their photos; the Ayam Afrika crop is round.
- [x] 6. React Bits. Install and adapt the components named in the TRD (if any).
      None for this shop. Skip, and don't install any.
- [x] 7. Motion pass. Signature moment, then reveals, per the TRD motion spec.
      Hero: image `scale` 1.04 → 1, then tag sequence (≤1.3s in total) with the `js-motion` flash guard and
      the 2.5s CSS fallback. Then `Reveal` once per section block for sections 2–8. Everything inside `useGSAP` with a scope.
      Done when: on a normal load the tags land one by one on their plates, and the headline and buttons never wait.
- [x] 8. Reduced motion and accessibility pass.
      Under reduced motion there's no `js-motion` class, tags are visible, Lenis is off and GSAP is skipped.
      Check focus rings on each ground (cobalt on paper and mustard, mustard on cobalt, paper on cognac),
      alt text on all 8 images, hidden figcaptions listing tagged items, the hours `<table>` with
      `aria-current="date"`, the iframe `title`, and 44px tap targets.
- [x] 9. Visual review. `npm run build && npm run shots`, then open the screenshots in
      `shops/madre-coffee-space/screenshots/` and `report.json`. Fix and repeat, up to 3 rounds.
      Shop-specific checks: the h1 "Coffee Space" fits on one line within its column at 1024 and 1440
      (`pctOfContentWidth`); on phone, the first screen shows the h1, today's hours and "Petunjuk Arah";
      tags don't overlap each other (report `overlappingText`); mustard and cobalt are never both grounds in one section;
      at 1440 no section has an accidental empty half.
      Done when: report.json shows no overlapping text and no horizontal scroll; display and
      heading sizes match the design brief; and the 390 and 1440 screenshots pass the
      builder's visual checklist.
- [x] 10. Remove-one-thing pass. Cut one animation or decoration that isn't earning its place.
      Likely candidates: the hero image scale settle (keep the tags), or the 80px drop on the churros photo.
- [x] 11. Final checks. Build passes; banner present; `data-mockup` on every mockup item;
      `noindex` on; final `npm run shots` so the screenshots match the finished site.
      Also confirm that no `photo-*.jpg` file is in `public/`, no Instagram link or handle appears, no kecamatan
      is printed, and no review is quoted verbatim or attributed to a name.
- [x] 12. Write `shops/madre-coffee-space/owner-checklist.md` from the PRD's open questions plus every placeholder.
      Use the 14 Bahasa questions in the PRD; add any placeholder introduced while building.
