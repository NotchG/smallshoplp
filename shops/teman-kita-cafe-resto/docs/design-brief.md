# Design brief: Teman Kita Cafe & Resto

## 1. Concept
The page is Teman Kita's own wall: whitewashed brick with the name brushed on in black, the menu
drawn in the same ink doodles as the walls, the red of its metal chairs on every action, and the
upstairs terrace seen through one of its black-framed windows. It fits because this shop's identity
already lives on its walls, not in a logo file.
Signature moment: on load, "Teman Kita" paints itself onto the brick in two brush strokes with the
logo's two swooshes, in about 1.1 s, while everything else on the first screen is already there.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned world (chalk brick, ink doodles, red chairs, brush logo), every fact, Bahasa Indonesia; photo-1/2/3 read only for the doodle style, black window frames, window lettering and logo shape; owner-1 is the hero window, owner-2 the menu's lead product. |
| impeccable | Persuade mode; the pinned world built at its full material range (mint and gunmetal chairs, mural blue and orange, steel-grid roof), not the cream-and-red default. Seven candidates (doodle wall, window lettering, steel-grid roof, street mural, red chairs, painted logo, order slip): doodle wall chosen, the roof grid donates the menu structure. Faces off its default list; one rehearsed focal sequence. Launcher and concept-seed not run (they write outside docs/); the pinned direction stands in for the roll. |

Translation of the brief's "Background: owner-1": owner-1 fills the hero as the view through a
black-framed window set into the wall, so no text sits on the busy photo (contrast, watermark).

## 3. Palette (6 named colours)
Strategy: whitewash ground with three full-bleed fields (two ink, one red). Mint, orange and blue
appear only inside illustrations and two small markers. Never warmer than `kapur` (no cream).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kapur` (whitewash) | #F4F5F1 | page ground; text on ink and red fields | tinta on kapur 16.5:1 |
| `tinta` (ink) | #161616 | all text on kapur, line drawings, window frames, "Kata mereka" and closing fields | kapur on tinta 16.5:1 |
| `merah` (chair red) | #C7252D | WhatsApp buttons on kapur; the "Acara" field | kapur on merah 5.1:1 (AA body); merah edge on tinta 3.2:1 (AA non-text) |
| `mint` (mint chairs) | #A6DBC6 | "Hari ini" chip and today's hours row; fills in illustrations | tinta on mint 11.7:1 |
| `jeruk` (float, mural buildings) | #F39C1E | spot fills in illustrations; Friday marker dot | tinta on jeruk 8.3:1; never used as text colour |
| `biru` (mural shopfront) | #1F5FB0 | Lantai 2 illustration only | decorative (5.8:1 on kapur if ever text) |

Brick lines in the hero use one explicit derived grey, `#D8D9D4` (decorative, behind ink text).
Focus ring: 3px solid in the section's text colour, 3px offset (tinta on kapur, kapur on tinta and merah).

## 4. Type
Families: **Kaushan Script** 400 for the name "Teman Kita" only (hero, footer). **Bricolage
Grotesque** variable (axes opsz, wdth) for everything else: headings 800 at `font-stretch: 90%`,
lead 600, body 400, labels 600 uppercase with 0.16em tracking. Both via `next/font`, latin subset,
`display: swap`.

Endpoints 390 → 1440 px, linear between (ratios hold at every width):

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.689rem + 7.429vw, 9.375rem)` (72 → 150) | hero name only, two lines stacked like the logo |
| `--step-head` | `clamp(1.875rem, 1.504rem + 1.524vw, 2.875rem)` (30 → 46) | section headings (h2) |
| `--step-lead` | `clamp(1.375rem, 1.282rem + 0.381vw, 1.625rem)` (22 → 26) | hero line, h3 (floor titles, menu categories, praise themes), footer name |
| `--step-body` | `clamp(1.0625rem, 1.016rem + 0.19vw, 1.1875rem)` (17 → 19) | running text, menu items and prices, hours rows, buttons |
| `--step-small` | `clamp(0.8125rem, 0.766rem + 0.19vw, 0.9375rem)` (13 → 15) | "CAFE & RESTO", floor labels, captions, notes |

Ratios: display/head ≥ 2.4, head/lead ≥ 1.36, lead/body ≥ 1.29, body/small ≥ 1.27.
Measured from the font file: "Teman" is 2.77em, so 415px at 150px (486px column at 1440) and 199px at 72px (350px on phone).
Leading: `--leading-display: 1.05` (the name wraps on purpose, "Teman" / "Kita"), `--leading-head: 1.08`,
lead 1.3, body 1.55, small 1.4. Prices: same size as the item, weight 700, `tabular-nums`.
Body measure max 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 768px) |

12-column grid, gap 16px phone, 24px desktop. Two-column layouts start at 1024px; below that, stack.
- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices follow the item name on the same line, 12px gap; no dot leaders.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at display or heading size.

## 6. Products on the page
Five products shown, not just named, all inside "Menu andalan":
- **Es Jeruk Float**: owner-2, square, the grid's 2×2 lead cell. Real photo, real product.
- **Charcoal Latte**: cup on saucer seen at three-quarters, `tinta` surface with a `kapur` latte-art heart.
- **Pisang Goreng Susu Keju**: three battered banana pieces on a plate, `jeruk` fill, shredded-cheese squiggles and a drizzle line.
- **Roti Bakar Tebal**: two thick slices stacked and cut on the diagonal, grill marks, `jeruk` crust, one filling band.
- **Tahu Goreng**: five fried tofu cubes (`jeruk`) on a paper-lined plate with two `mint` chillies.

Illustration rules: inline SVG, viewBox 240×200, `tinta` stroke 3, round caps and joins, lines
drawn slightly by hand (gentle wobble, not geometric), one or two flat fills from the palette, no
gradients or shadows, ≤ 30 paths. Same hand as the wall doodles. Each has `role="img"` and an
Indonesian `aria-label` ("Ilustrasi pisang goreng susu keju"). Names and prices sit directly under
each drawing (≤ 16px).

## 7. Sections
Phone order in every section: heading → content in reading order. All headings sentence case.

**1. Hero.** The name painted on the wall, the upstairs through a window, the two actions.
Wall: `kapur` with hand-drawn brick outlines (`#D8D9D4`, 1.25px, running bond, tile ~256×96).
Window: owner-1 pre-cropped to source x 0–1260 (drops the blown-out edge and watermark), `tinta`
frame 10px (8px phone), sill bar 14px extending 12px past both sides, caption "Lantai 2 ·
semi-outdoor" 8px under the sill. Name: "Teman" over "Kita", Kita indented ~0.5em, arc swoosh over
Teman, underline swoosh under Kita, then "CAFE & RESTO" (small, tracked). Desktop hero height
`min(100svh − banner, 820px)`, min 640px, text column centred vertically.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------+              +------------------------------------------+
| draft banner     |              | draft banner                             |
|+================+|              |  . brick . lines .  +=================+  |
|| owner-1 window ||              |  ~~~~ arc           |                 |  |
|| 5:3, 210px tall||              |  Teman              |  owner-1        |  |
|+================+|              |       Kita          |  window         |  |
|=======sill=======|              |  ~~~~~~~ swoosh     |  cols 6-12      |  |
| Lantai 2 · semi..|              |  CAFE & RESTO       |  aspect 6:5     |  |
| ~~~ Teman        |              |  Tempat nongkrong   |                 |  |
|       Kita ~~~   |              |  santai di Utan..   +=================+  |
| CAFE & RESTO     |              |  (o) Hari ini 10-22 =======sill========  |
| Tempat nongkrong |              |  [WhatsApp] [Arah]  Lantai 2 · semi-o.   |
| (o) Hari ini ... |              |  cols 1-5                                |
|[WhatsApp] [Arah] |              +------------------------------------------+
+------------------+
                      buttons side by side, above the fold at 390x844
```

**2. Dua lantai, dua suasana.** Two floors as a building cross-section: upstairs on top, then a
2px `tinta` floor-slab line, then downstairs. Lantai 2 illustration: steel-grid roof lines, two
ceiling fans, pastel shophouse mural (`jeruk`, `biru`, `mint`), plank table with `merah`, `mint`
and `tinta` chairs. Lantai 1 illustration: ink only, no fills, brick outlines, drawn bookshelf,
lamp, coat hooks with a jacket, a sofa and small table with a cup. Ink-only vs colour is the point.
Labels ("LANTAI 2 · ATAS") sit 8px above each floor title.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Dua lantai, dua  |              | Dua lantai, dua      | Ngopi di bawah,   |
| suasana          |              | suasana (cols 1-6)   | santai di atas.   |
| Ngopi di bawah.. |              |+--------------------+ LANTAI 2 · ATAS    |
|+----------------+|              || Lantai 2 illus.    | Semi-outdoor,      |
|| Lantai 2 illus ||              || cols 1-7, 16:10    | berkipas angin     |
|+----------------+|              |+--------------------+ body, cols 8-12    |
| LANTAI 2 · ATAS  |              |========= floor slab line ================|
| title, body      |              | LANTAI 1 · BAWAH  +--------------------+ |
|====== slab ======|              | Indoor, dinding   | Lantai 1 illus.    | |
|+----------------+|              | penuh coretan     | cols 6-12, 16:10   | |
|| Lantai 1 illus ||              | body, cols 1-5    +--------------------+ |
|+----------------+|              +------------------------------------------+
| LANTAI 1 · BAWAH |
| title, body      |
+------------------+
```
A hand-drawn `tinta` rule (wobbly, 2px, container width) separates this section from the menu,
the only place two `kapur` sections meet.

**3. Menu andalan.** The steel-grid roof as the menu: cells divided by 2px `tinta` rules. Desktop
grid 4 columns; owner-2 spans 2×2 with its name and price under the photo inside the cell; four
illustrated cells. Below, the [MOCKUP] lists in three columns: Kopi + Non-kopi | Makanan + Pilihan
sehat | Camilan + the note "Contoh menu dan harga, menunggu konfirmasi" and a WhatsApp text link.
Category names at lead; items and prices at body.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Menu andalan     |              | Menu andalan        | Kopi, minuman      |
| intro 2 lines    |              |                     | segar, camilan..   |
|+----------------+|              |+------------------+----------+----------+|
|| owner-2 square ||              ||                  | latte    | pisang   ||
||                ||              ||  owner-2 photo   | name Rp  | name Rp  ||
|+----------------+|              ||                  +----------+----------+|
| Es Jeruk Float Rp|              ||  Es Jeruk Float  | roti     | tahu     ||
|+-------+--------+|              ||  Rp, 1 line      | name Rp  | name Rp  ||
|| latte | pisang ||              |+------------------+----------+----------+|
|| nm Rp | nm Rp  ||              | Kopi         | Makanan       | Camilan   |
|+-------+--------+|              |  item Rp     |  item Rp      |  item Rp  |
|| roti  | tahu   ||              | Non-kopi     | Pilihan sehat | note, WA  |
|+-------+--------+|              +------------------------------------------+
| Kopi / items     |
| ... one column   |
+------------------+
```

**4. Kata mereka.** Full-bleed `tinta` field, like the shop's dark window glass with white
lettering. Left: heading, "4,5 dari 785 ulasan Google" at lead, note "Dirangkum dari ulasan di
Google" at small. Right: 2×2 themes, each a lead phrase plus one body line, separated by 1px `kapur`
rules like window mullions. No quote marks, no stars, no names, no cards.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Kata mereka      |              | Kata mereka    | Nyaman buat | Pilihan-  |
| 4,5 dari 785     |              | 4,5 dari 785   | nongkrong   | nya banyak|
| ulasan Google    |              | ulasan Google  | body line   | body line |
| note             |              | (cols 1-4)     |-------------+-----------|
|------------------|              | note           | Camilan &   | Harga     |
| theme 1 + line   |              |                | kopinya enak| bersahabat|
| theme 2 + line   |              |                | (cols 5-12) | body line |
| theme 3 + line   |              +------------------------------------------+
| theme 4 + line   |
+------------------+
```

**5. Acara di Teman Kita.** Full-bleed `merah` field, `kapur` text. Right column is the tip and
the action: "Mau datang ramean? Kabari dulu, kadang tempatnya dipakai acara." and a `kapur` button
with `tinta` text, "Tanya ketersediaan via WhatsApp". Occasions as an inline list (no boxes) with
1px `kapur` dividers; [MOCKUP] package line under it.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Acara di Teman   |              | Acara di Teman Kita    | Mau datang      |
| Kita             |              | lead: sering dipesan   | ramean? tip     |
| lead 3 lines     |              | buat pernikahan..      | [Tanya via WA]  |
| Pernikahan       |              | (cols 1-7)             | (cols 8-12)     |
| Reuni            |              |------------------------------------------|
| Kumpul keluarga  |              | Pernikahan | Reuni | Kumpul keluarga |   |
| Meetup kecil     |              | Meetup kecil · package line [MOCKUP]     |
| package line     |              +------------------------------------------+
| tip              |
| [Tanya via WA]   |
+------------------+
```

**6. Kunjungi kami.** `kapur`. Map iframe in a 10px `tinta` frame (the same window), address,
hours list with Indonesian day names, today's row on `mint`, Friday row marked with a `jeruk`
dot and "buka mulai 12.30", Petunjuk Arah button.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Kunjungi kami    |              | Kunjungi kami                            |
|+================+|              |+=======================+ Jl. Kramat Asem |
|| map 4:3        ||              ||  map, cols 1-7, 4:3   | No.06, Utan K.  |
|+================+|              ||                       | Senin–Kamis ..  |
| address          |              ||                       | (•) Jumat 12.30 |
| hours rows       |              ||                       | Sabtu–Minggu .. |
| [Petunjuk Arah]  |              |+=======================+ [Petunjuk Arah] |
+------------------+              +------------------------------------------+
```

**7. Hubungi kami (closing).** Full-bleed `tinta`. Heading "Mampir aja, kita kan teman." with
the three actions stacked beside it, then a footer row: "Teman Kita" in Kaushan at lead, address,
hours line.
```
phone (390)                       desktop (1440)
+------------------+              +------------------------------------------+
| Mampir aja, kita |              | Mampir aja,            | [WhatsApp]      |
| kan teman.       |              | kita kan teman.        | [Telepon]       |
| [WhatsApp]       |              | (cols 1-7)             | [Petunjuk Arah] |
| [Telepon]        |              |------------------------------------------|
| [Petunjuk Arah]  |              | Teman Kita · Jl. Kramat Asem.. · 10–22   |
| footer lines     |              +------------------------------------------+
+------------------+
```

## 8. Motion
**Signature: the name is painted on.** Hero only, on load. Each line ("Teman", "Kita") and each
swoosh is a two-span wipe: the outer span (overflow hidden, with padding so Kaushan's swashes
aren't clipped) moves `xPercent -100 → 0` while the inner moves `100 → 0`, so the letters stay
still and the mask edge travels left to right like a brush. Sequence: arc swoosh 0–0.4 s, "Teman"
0.1–0.65 s, "Kita" 0.45–0.95 s, underline swoosh 0.75–1.1 s; ease `power2.inOut`. "CAFE & RESTO",
the line, hours, buttons and the window photo are visible from first paint and never animate.
Hidden start state comes from a `.js` class set before paint, with a CSS failsafe that shows the
name at 2.5 s if GSAP never runs. Reduced motion: the name is static at its final state.

**Supporting:** one starter `Reveal` per section (2–7), 20px, 0.7 s, `power2.out`, once. Buttons:
hover lifts `translateY(-2px)` in 180 ms; press `scale(0.98)` in 120 ms; colour changes are
instant. Lenis at starter defaults. Motion tokens: starter values, plus `paint: 0.55` (one line)
and `ease.paint: "power2.inOut"` in `lib/motion.ts`.

## 9. What makes it this shop
- The name brushed onto whitewashed brick, the way it's painted on their own wall, with its two swooshes.
- The floors as a cross-section: upstairs in the mural's colours under the steel-grid roof, downstairs in pure ink doodles, the way the two floors actually differ.
- The menu laid out on the roof's steel grid, and the "kabari dulu, kadang tempatnya dipakai acara" tip, which comes straight from how people use the place.

## 10. Avoid
- Cream ground, serif display and a red accent (the category default). `kapur` stays whitewash.
- Brutalist black boxes, hard offset shadows, heavy condensed caps: the red and ink here are fields, not stickers.
- Text over the owner-1 photo, dark gradient scrims, or the photo as a blurred backdrop.
- Testimonial cards with quote marks, stars or avatars; any review date or name.
- Brush script anywhere but the name. Doodles as clip-art scattered in margins; brick lines outside the hero.
- Generic icons in place of the specific dishes; a drawing that could be any cafe's cup.
- WhatsApp green, emoji, a sticky bar, a carousel, a rotating-words hero.
- Claims the brief rules out: halal, parking, AC, "sejuk" or "tenang" upstairs, Wi-Fi, the wafer.
- Risk specific to this concept: the lettering reads as a fake of their logo. Keep the swooshes loose, and the checklist asks for the real file.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.27 body/small; menu items, prices, themes, occasions at body–lead; rating at lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline 12px after names; window caption 8px under sill; floor labels 8px above titles)
- [x] Every section has a desktop wireframe that uses the width on purpose (5/7 hero, alternating 7/5 floors, 4-col menu grid + 3-col lists, 4/8 praise, 7/5 events, 7/5 visit, 7/5 close)
- [x] At least 3 products shown (food and product shops): 5 (owner-2 photo + 4 illustrations)
- [x] Within motion-rules.md (one signature in the hero, transform/opacity only, section reveals only, no React Bits, reduced motion = none, nothing hidden past the hero sequence)
- [x] Brief is decisions, not essays (2–4 pages)
