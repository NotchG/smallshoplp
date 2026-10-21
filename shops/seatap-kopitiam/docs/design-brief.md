# Design brief: SEATAP Kopitiam

Record decisions, not essays. Site language: Bahasa Indonesia, `lang="id"`. Mode (impeccable): Persuade.

## 1. Concept
**"Dinding SEATAP":** the page is SEATAP's lounge corner laid flat. The bottle-green wall carries
the name and a round "mirror" photo, and the colour-block wall becomes the grid that holds the
menu and the week's hours. It fits because that corner is what the owner chose to photograph
and what guests praise (review 2).
**Signature moment:** on load, four colour tiles are laid one by one onto the green wall beside
the lounge photo (top to bottom on desktop, left to right on phone), and the photo settles in
place. About 1.0 s, hero only.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md | Facts, Indonesian copy, the [MOCKUP] list, what to avoid (zuppa, cleanliness, parking promises) |
| raw.json | Hours per day, phone, address, place ID and Maps URL, rating 4.5 / 971 |
| owner-1.jpg | Hero photo; sampled palette (green wall, brick, mustard, sage, cream) |
| owner-2.jpg | Round crop for "Ruang kumpul" (mirror, chandelier, palm, colour wall) |
| photo-1/2/3 (reference only) | Chevron-A wordmark and tagline on sign and cups; green layer cake, iced tea and milk in SEATAP cups (drawn as illustrations, never shown) |
| impeccable | Persuade mode; rut named (photo hero + centred headline + 3 menu cards + review carousel); 7 candidates from the shop's world (colour-block wall, kopitiam enamel menu board, blirik enamel cups, food-court counter lightboxes, 1970s *ruang tamu* with chandelier and round mirror, *jengki* modernism, *tegel* cement tiles). Chosen: wall + *ruang tamu* fused, because the brief pins palette and materials ("the brief wins") and owner recognition is the PRD's test. Committed colour strategy; faces chosen off its default list; one focal motion. Launcher and concept-seed not run (no bundled binary; it would write outside `docs/`), so the direction was chosen by hand |

## 3. Palette (6 named colours)
Committed strategy: `botol` owns hero, "Ruang kumpul" and "Hubungi kami" (about 45% of the scroll).
The other four are the wall's tile colours. Physical scene: a phone in daylight, on a motorbike
stop or at home planning a meetup. Daylight-legible light sections carry the food; the green wall
carries the room.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `botol` | #0F4636 | Bottle-green wall: hero, room, contact grounds; today tile | `krem` on it 8.80 ✓ |
| `krem` | #F6E7C6 | Light ground; text on `botol`/`bata`/`tinta`; tile | `tinta` on it 13.63 ✓ |
| `kunyit` | #E9A13F | Primary button; "Kata mereka" ground; tile; focus ring on `botol` | `tinta` on it 7.65 ✓; vs `botol` 4.94 ✓ (UI) |
| `bata` | #B04434 | Brick tile; bundle tile | `krem` on it 4.61 ✓ (body OK) |
| `sage` | #8E9A78 | Sage tile; Mon–Thu/Sun hour tiles | `tinta` on it 5.60 ✓ |
| `tinta` | #17201B | Text on light grounds; footer and banner ground | `krem` on it 13.63 ✓ |

Illustration-only inks (inside product SVGs only, never UI): `goreng` #C9822F (fried batter,
toast), `kopi` #5A3420 (coffee, kaya), `pandan` #6E8F3A (cake, mung beans), white #FFFFFF.
Focus ring: 2px `kunyit` on `botol`/`bata`/`tinta`; 2px `botol` on light grounds; offset 3px.

## 4. Type
Jost (display: Futura-revival geometric, mid-century like the teak chairs; its pointed apex nods to
the chevron A) and Familjen Grotesk (body: a 1950s-style friendly grotesk). Both `next/font/google`,
`latin`, `display: swap`. Avoided impeccable's default list (Plus Jakarta Sans was the pun to refuse).

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 1.5rem + 7.2vw, 8rem)` (72 → 128px) | Hero wordmark "SEATAP" only, Jost 700, leading 0.9 (one word, cannot wrap), tracking −0.01em |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)` (36 → 60px) | Section h2s and hero "Kopitiam", Jost 600 (hero 500), leading 1.08 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)` (22 → 28px) | Hero line, product names (Jost 600), praise themes, intro statements; leading 1.25 |
| `--step-body` | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` (16 → 18px) | Running text, prices (600), list items, buttons (600); leading 1.55 |
| `--step-small` | `clamp(0.8rem, 0.75rem + 0.15vw, 0.875rem)` (12.8 → 14px) | Tagline, descriptors, day names, captions; weight 500; leading 1.4 |

Ratios: phone 72/36/22/16/12.8, desktop 128/60/28/18/14; every step ≥ 1.25×. Tagline "Coffee · Eat ·
Friends" is `t-small`, tracking 0.12em, uppercase, kept in English as the shop writes it.
**Wordmark:** "SEATAP" in Jost 700 with both A's drawn as open chevrons (no crossbar), like the
sign and cups: inline SVG `Λ` sized to cap height, stroke equal to Jost 700's stem. `<h1>` carries
an sr-only "SEATAP Kopitiam"; the visual spans are `aria-hidden`. If the chevrons don't match stem
weight and baseline in the 390 and 1440 screenshots, fall back to plain Jost "SEATAP".

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12-column grid, 24px column gap on ≥1024 |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768), 40px (≥1280) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px; hero 40px top, 64px bottom on phone, 56/80 on desktop |

- Tiles are flat, square-cornered, flush (no gap, no grout lines, no shadow, no radius).
- **Proximity:** prices sit directly under the product name (4–8px); breakfast prices follow the
  item name on the same line, 12px after it; "Hari ini" sits on the
  today tile; "Buka di Google Maps" sits 12px under the map; the hours line sits right above the
  hero buttons. No dotted leaders, no prices pushed to a row's far edge.
- **Wide screens:** every desktop section is two columns or the 4×3 tile wall (see §7).
- **Lists:** breakfast items `t-body`, product names and praise themes `t-lead`; never `t-head`.
- Two-column layouts start at 1024px; below that, sections stack in reading order.

## 6. Products on the page
No owner food photos exist, so products are **flat SVG illustrations**, one shared kit (200×200
viewBox, flat fills from §3 plus the illustration inks, no outlines, no gradients, one darker shade
per object for depth), each on its own colour tile with name, price and descriptor beneath it.
1. **Es Kopi Susu**: clear tapered plastic cup, coffee and milk layers, ice cubes, black straw, a small chevron mark on the cup (as on SEATAP cups).
2. **Singkong Goreng**: five crinkle-edged golden cassava batons stacked on a teak-brown plate.
3. **Pisang Goreng**: three battered banana pieces, crisp `goreng` edges, on paper.
4. **Bubur Kacang Hijau**: cream bowl, `pandan` mung beans as dots, a white coconut-milk swirl.
5. **Es Teh**: the same cup shape as no. 1, amber tea and ice, black straw.
6. **Kue Pandan** [MOCKUP name]: a green layer-cake slice, two cream layers, white rosette, green chocolate shard on top (from photo-3).
7. **Sarapan set** (breakfast section): round plate with two roti bakar triangles and a `kopi`-coloured kaya layer, a saucer with two soft-boiled eggs, a thick white cup of kopi.
Each SVG has `role="img"` and an Indonesian `aria-label` ("Ilustrasi es kopi susu"). Builder draws
them; quality bar: readable at 90px, same light direction (top-left), same corner rounding.

## 7. Sections
Grounds in order: botol → krem → krem (tile wall) → botol → kunyit → krem → botol → tinta.

**Hero.** Name, today's hours, directions in the first phone screen; the wall moment.
Owner-1 crop: full frame, `object-position: 60% 50%`. Tile order: bata, kunyit, sage, krem.
```
Hero: phone (390)                  Hero: desktop (1440)
+----------------------------+     +----------------------------------------------------------+
| draft banner (tinta)       |     | draft banner                                             |
| SEΛTΛP          display 72 |     |  SEΛTΛP  display 128          +-----+------------------+ |
| Kopitiam           head 36 |     |  Kopitiam  head 60            |bata |                  | |
| COFFEE · EAT · FRIENDS sml |     |  COFFEE · EAT · FRIENDS       +-----+                  | |
| Kopitiam penuh warna di    |     |  Kopitiam penuh warna di      |kunyt|   owner-1.jpg    | |
| Cibubur, buka dari jam 7.  |     |  Cibubur, buka dari jam 7.    +-----+   3:4, 441x588   | |
| ■ Buka hari ini 07.00–21.00|     |  ■ Buka hari ini 07.00–21.00  |sage |                  | |
| [Petunjuk Arah] [WhatsApp] |     |  [Petunjuk Arah] [WhatsApp]   +-----+                  | |
| [bata][kunyt][sage][krem]  |     |                               |krem |                  | |
| +------------------------+ |     |  text cols 1-6, bottom-aligned+-----+------------------+ |
| | owner-1.jpg 3:4        | |     |                               tiles + photo cols 7-12    |
+----------------------------+     +----------------------------------------------------------+
```

**Sarapan dari jam 7.** A reason to come at 07.00; four [MOCKUP] items with prices.
```
Sarapan: phone                     Sarapan: desktop
+----------------------------+     +----------------------------------------------------------+
| Sarapan dari jam 7  head   |     |  +----------------------+      Sarapan dari jam 7  head  |
| Pintu buka 07.00 setiap    |     |  | kunyit tile 1:1      |      Pintu buka 07.00 setiap   |
| hari.               lead   |     |  |  sarapan set art     |      hari.              lead   |
| +------------------------+ |     |  |  (plate, eggs, kopi) |      intro line         body   |
| | kunyit tile 4:3, art   | |     |  |                      |      Roti Bakar Srikaya Rp 20rb|
| +------------------------+ |     |  +----------------------+      Telur Setengah Matang 10rb|
| Roti Bakar Srikaya Rp 20rb |     |   cols 1-5                     Kopi Tiam  Rp 18rb        |
| Telur Setengah Matang ...  |     |                                Nasi Lemak Rp 35rb  7-12  |
+----------------------------+     +----------------------------------------------------------+
```

**Menu andalan.** The wall itself. Desktop grid (4 cols × 3 rows, 300px squares in the container):
r1 `heading 2×1 botol` | Es Kopi Susu `kunyit` | Singkong Goreng `sage`;
r2 Pisang Goreng `bata` | plain `sage` | Bubur Kacang Hijau `krem` | Es Teh `botol`;
r3 plain `sage` | Kue Pandan `kunyit` | Bundling paket `2×1 bata`. No two same colours share an edge;
`krem` only in the interior. Plain tiles are `aria-hidden`, desktop only. Phone: heading above the
wall on krem; wall is full-bleed, 2 columns (3 columns from 640px), tiles ≥ 4:5, same per-product
colours, bundle full width. Neither order puts two same colours on a shared edge.
Tile content: art (40% tile width desktop, 48% phone), name `t-lead`, price `t-body` 600 directly
under, descriptor `t-small`. Unpriced items (Es Teh, Kue Pandan) simply have no price line.
```
Menu: phone (full-bleed wall)      Menu: desktop
+----------------------------+     +----------------------------------------------------------+
| Menu andalan        head   |     |  +-----------------------+-------------+-------------+   |
| intro               body   |     |  | Menu andalan    head  | [art]       | [art]       |   |
+-------------+--------------+     |  | intro body (botol)    | Es Kopi Susu| Singkong G. |   |
| [art]       | [art]        |     |  |                       | Rp 22rb     | Rp 20rb     |   |
| Es Kopi Susu| Singkong G.  |     |  +-----------+-----------+-------------+-------------+   |
| Rp 22rb  K  | Rp 20rb   S  |     |  | Pisang G. |  (sage)   | Bubur K. H. | Es Teh      |   |
+-------------+--------------+     |  | Rp 20rb R |           | Rp 15rb  C  | (botol)     |   |
| Pisang G. R | Bubur K.H. C |     |  +-----------+-----------+-------------+-------------+   |
+-------------+--------------+     |  |  (sage)   | Kue Pandan| Bundling paket            |   |
| Es Teh    B | Kue Pandan K |     |  |           | (kunyit)  | sekitar Rp 42–48rb (bata) |   |
+-------------+--------------+     |  +-----------+-----------+---------------------------+   |
| Bundling paket (bata) full |     |   container 1200, tiles flush                            |
+----------------------------+     +----------------------------------------------------------+
```

**Ruang kumpul.** The room as the reason to meet. owner-2 cut to a circle (the round mirror on
the green wall), centred on chandelier and palm (`object-position: 55% 38%`, left edge excluded),
with a 2px `krem` ring offset 8px as the bevel. Diameter 320px phone / 520px desktop.
```
Ruang kumpul: phone                Ruang kumpul: desktop
+----------------------------+     +----------------------------------------------------------+
| Ruang kumpul        head   |     |       .------------.           Ruang kumpul       head   |
|      .------------.        |     |     /                \         Sofa kulit hijau, kursi   |
|    /  owner-2 round \ 320  |     |    |   owner-2.jpg    |        jati oranye, lampu kristal|
|    \  krem ring     /      |     |    |   round, 520px   |        dan banyak tanaman. lead  |
|      '------------'        |     |     \                /         body line [MOCKUP]        |
| Sofa kulit hijau... lead   |     |       '------------'           ■ Jumat: live music [MOCK]|
| ■ Jumat: live music        |     |   cols 1-6                     cols 8-12                 |
+----------------------------+     +----------------------------------------------------------+
```

**Kata mereka.** Four paraphrased themes as plain text in a 2×2 grid (no boxes, no rules, no
quote marks), each led by a 16px tile-square bullet (botol, bata, sage, krem).
```
Kata mereka: phone                 Kata mereka: desktop (kunyit ground)
+----------------------------+     +----------------------------------------------------------+
| Kata mereka         head   |     |  Kata mereka  head   | ■ Interiornya hangat | ■ Stafnya |
| Rating Google 4,5 dari 971 |     |  Rating Google 4,5   |   dan alami... lead  |   ramah...|
| ulasan, dirangkum   small  |     |  dari 971 ulasan     +----------------------+-----------+
| ■ Interiornya hangat...    |     |  small               | ■ Singkong gorengnya | ■ Harga-  |
| ■ Stafnya ramah... (lead)  |     |  cols 1-4            |   renyah...          |   nya ... |
+----------------------------+     +----------------------------------------------------------+
```

**Kunjungi kami.** Address, the week as 7 tiles (Mon–Thu, Sun `sage`; Fri–Sat `kunyit` because they
stay open to 22.00; today `botol` with "Hari ini"), parking tip, map.
```
Kunjungi: phone                    Kunjungi: desktop
+----------------------------+     +----------------------------------------------------------+
| Kunjungi kami       head   |     |  +-------------------------+   Kunjungi kami       head  |
| Arundina, Jl. Lap. Tembak  |     |  |                         |   Arundina, Jl. Lap. Tembak |
| No.A10, Cibubur...  body   |     |  |   map embed 4:3         |   No.A10, Cibubur... body   |
| Buka setiap hari    small  |     |  |                         |   Buka setiap hari  small   |
| [Sen][Sel][Rab][Kam] 4+3   |     |  +-------------------------+   [Sn|Sl|Rb|Km|Jm|Sb|Mg]    |
| [Jum][Sab][Min]   tiles    |     |  Buka di Google Maps ->        one row, 84px tiles       |
| ■ Parkir mobil terbatas... |     |   cols 1-6                     ■ Parkir mobil terbatas...|
| [ map 4:3 ]                |     |                                [Petunjuk Arah]  cols 7-12|
| Buka di Google Maps ->     |     |                                                          |
+----------------------------+     +----------------------------------------------------------+
```

**Hubungi kami** (botol) and **Footer** (tinta).
```
Hubungi: phone                     Hubungi + footer: desktop
+----------------------------+     +----------------------------------------------------------+
| Hubungi kami        head   |     |  Hubungi kami      head        [ WhatsApp 0811-953-156 ] |
| Kopi, makan, teman...lead  |     |  Kopi, makan, teman. Itu saja  [ Telepon  0811-953-156 ] |
| [WhatsApp 0811-953-156] K  |     |  yang kami urus.   lead        [ Petunjuk Arah         ] |
| [Telepon 0811-953-156]     |     |  cols 1-6                      Bisa bayar tunai dan      |
| [Petunjuk Arah]            |     |                                non-tunai. Instagram: ... |
| Bisa bayar tunai... small  |     |----------------------------------------------------------|
|----------------------------|     |  SEΛTΛP Kopitiam (lead) | address (small) | hours (small)|
| footer: wordmark, address, |     |  Ini contoh tampilan, belum situs resmi ...  (small)     |
| hours, draft line (tinta)  |     +----------------------------------------------------------+
+----------------------------+
```

## 8. Motion
**Signature (hero, load):** text is static and visible from first paint. Then the four tiles go from
`autoAlpha 0, y −12, scale 0.94` to rest, 0.5 s each, stagger 0.08 s, `expo.out` (laid onto the
wall). The photo goes from `autoAlpha 0, scale 1.04` to rest over 0.9 s, `expo.out`, starting at
0.1 s. Done by 1.0 s. Initial hidden state only under `html.js` + `prefers-reduced-motion:
no-preference` (no flash, nothing hidden without JS). Reduced motion: final state, no motion.
**Supporting:** one `<Reveal>` per section (Sarapan, the whole menu wall, Ruang kumpul, Kata
mereka, Kunjungi), 20px, 0.6 s, `power2.out`, once. No per-tile or per-word stagger outside the hero.
**Responses:** buttons and links `translateY(−2px)` on hover, `scale(0.98)` on press, 150 ms ease-out, CSS.
Tokens for `lib/motion.ts`: `duration {press 0.15, ui 0.2, reveal 0.6, hero 1.0}`, ease unchanged,
`distance.reveal 20`, add `heroTile {stagger 0.08, y -12, scale 0.94}`. Lenis: starter defaults.

## 9. What makes it this shop
1. The page's grid is their colour-block wall: products and the week's hours sit on tiles in the
   wall's own colours, and Friday/Saturday tiles are mustard because those nights run to 22.00.
2. The room photo is cut round and hung on the bottle-green field, like the bevelled mirror above
   their green sofas.
3. The wordmark's A's are open chevrons as on the sign and cups; the iced coffee and iced tea are
   drawn in the SEATAP cup.

## 10. Avoid
- Generic cafe template: full-bleed photo with dark overlay and centred headline, three equal menu
  cards, testimonial quotes, star widgets, review carousel.
- Category clichés: coffee-bean icons, steam squiggles, latte art, kraft paper, chalkboard menus,
  cream + serif + terracotta.
- Mondrian or bento drift: no black grout, no primary red/blue/yellow, no rounded cards, no shadows.
- Checkerboard overload: tiles appear only in the hero corner, the menu wall, the hours and bullets;
  never as a pattern behind text, never as a striped band between sections.
- 70s kitsch: no rainbow stripes, wavy type, film grain or fake vintage textures.
- Illustrations that drift: no gradients, outlines, 3D, emoji or mixed styles; all from one kit.
- Content traps: zuppa soup, cleanliness headlines, parking promises, customer photos on the site,
  quoted or attributed reviews, the second outlet.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (16→12.8 is 1.25×; product names and themes are `t-lead` under `t-head` headings)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices under names, "Hari ini" on its tile, map link under map)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns or the 4×3 wall; footer in three columns)
- [x] At least 3 products shown (six drawn product tiles plus the breakfast set)
- [x] Within motion-rules.md (one signature ≤1.0 s, section-level reveals, transform/opacity only, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages of text; the rest is required wireframes)
