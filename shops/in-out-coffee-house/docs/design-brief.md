# Design brief: In Out Coffee House

## 1. Concept
The page is In Out's own building: white walls, the orange-rimmed oval opening into the yellow
room, a yellow rooftop sky, the menu hung as square framed prints like the album covers on the
2nd-floor walls, and the logo's arrows as the signage. It fits because the shop is literally
three moods stacked in one building, and its brand mark is already a set of arrows (in, up, out).
Signature moment: on load, the hero wordmark's arrows perform the name. The arrowhead rises out
of the I and the arrow slides forward off the T, as on the cups, in about one second.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, hours, Bahasa tone; palette and every drawn object (oval with Bata rim, yellow room, globe lamps, turf, posters with black caption labels, crook lamps, black slatted tables, brick and yellow arch, the cup logo); no owner photos, so drawings only |
| impeccable | Persuade mode: the world carries the page, and the action shows in the first screen. Committed colour strategy (Kuning owns about a third of the page). Faces with a point of view, off its default list. Display capped at 6rem. No eyebrows or kickers. Real geometry, not sketchy SVG scenes. Steer clear of the neobrutalist yellow/black cluster. Theme browser surfaces |

## 3. Palette (6 named colours)
Light ground. The scene: friends deciding on their phones in the afternoon, often outdoors.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` (Dinding) | #F8F8F5 | wall white: main ground, text on Hitam | Hitam on it 17.0 |
| `ink` (Hitam) | #161616 | logo black: text, frames, plaques, slabs, primary button, night bands | Dinding on it 17.0; Kuning on it 12.0 |
| `kuning` | #F1D21C | beanbag-room yellow: oval interior, rooftop sky, praise band, Paket bar, selection | Hitam on it 12.0 (body OK) |
| `bata` | #E0502A | the oval's orange-red rim, the sunset sun, latte frame field, beanbag | graphics only, plus Hitam text on it (4.6). Never Dinding text on it (3.7), never text on Dinding |
| `kayu` | #6E4428 | walnut floor, chairs, tables, coffee | 7.8 on Dinding, so OK for text, but used in drawings |
| `hijau` | #2F7A4A | enamel lamp shades, turf, trees, matcha | 4.9 on Dinding: OK for small text, used in drawings |

Drawing-only tints, built with `color-mix(in oklch, ...)` from the tokens and never used for
text: kopi (kayu 55% + paper), nasi (kayu 45% + kuning), beton (ink 35% + paper),
bata-tua (bata 70% + ink, for the brick).

## 4. Type
League Spartan (display and headings, 600/700/800) + Nunito (body, plus the "coffee house"
line, 400/700/800), both via `next/font/google`, latin subset, `display: swap`. Why these:
League Spartan's round O and geometric N echo the bold "IN OUT" on the cups; Nunito's rounded
terminals echo the lowercase "coffee house" under it. Headings use tracking -0.02em.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 3rem + 5vw, 6rem)` (72 to 96px) | the hero "IN OUT" only, line-height 0.9, `white-space: nowrap` |
| `--step-head` | `clamp(1.875rem, 1.4rem + 2vw, 2.75rem)` (30 to 44px) | h2 section headings, line-height 1.08 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.625rem)` (23 to 26px) | hero line, h3 (space signs, menu groups, Paket), paraphrases, phone number |
| `--step-body` | `1.125rem` (18px) | running text, list items, plaque names, buttons |
| `--step-small` | `0.875rem` (14px) | prices on plaques, notes, address line in hero, footer |

At 390px: 72 / 30.2 / 23.1 / 18 / 14; at 1440px: 96 / 44 / 26 / 18 / 14 (lowest ratio 1.28).
"coffee house" is inside the h1 at 0.3em of display (Nunito 800, lowercase, +0.06em), spanning
about 90% of the "IN OUT" width, as on the cup.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.5rem + 3vw, 3rem)` = 20px / 48px (replace the starter's 768px override) |
| Section padding phone / desktop (`--section-y`) | `clamp(3.5rem, 2rem + 6vw, 7rem)` = 56px / 112px; car wash strip uses 0.6 of it |

- **Proximity:** plaques 8px under their frame, left-aligned to it; prices inline after the name
  (12px gap), never right-aligned; hours grid `max-content max-content`, 16px gap; "hari ini"
  tag 12px after today's row.
- **Wide screens:** every desktop section is two columns, a grid, or a full-width drawing (§7).
- **Lists:** menu items at `--step-body`, group titles at `--step-lead`, never larger.
- **Grounds:** Dinding (hero, spaces, menu), Hitam strip (car wash), Kuning (praise), Dinding
  (visit), Hitam (close, footer). The afternoon ends in the evening.
- **Flat world:** no shadows, gradients or rounded cards. Frames: 6px Hitam border + Dinding mat
  at 8% of the frame width. Buttons 48px tall, radius 999px.

## 6. Products on the page
Five products as flat, frontal, geometric SVG art (viewBox 240, one 3-unit stroke, Hitam, or
Dinding on the Hitam field), each hung as a square framed print over a black caption plaque
(name + price), like the album covers and their labels on the 2nd-floor wall:
1. **Es Kopi Susu In Out** (large, Kuning field): the branded clear cup with dome lid, kopi tint
   under a milk layer, four ice cubes, the small cup-and-"IN OUT" mark. From the photos; the name
   and price are [MOCKUP].
2. **Café Latte** (Bata field): Dinding cup and saucer, with two steam lines in the logo's style.
3. **Matcha** (Hitam field): the same branded cup, Hijau under milk, outlined in Dinding.
4. **Nasi goreng** (Hijau field): plate from above, nasi rice, fried egg, cucumber, Bata sambal.
5. **Roti bakar** (Dinding field): two toast slabs, Kayu chocolate with drips, Kuning cheese.
The Paket bar adds two branded cups and a Bata cup of fries. All art and names carry `data-mockup`.

## 7. Sections
Copy is in the PRD. Wireframes use plain ASCII; `[ ]` is a button, `###` is a drawing.

**Banner + Hero.** Purpose: recognition in five seconds, and directions in the first screen.
```
Hero: phone (390)              Hero: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Draf situs ... (13px)|       |           Draf situs untuk ditinjau pemilik ...            |
+----------------------+       +------------------------------------------------------------+
|  _[cup]~~            |       |   _[cup]~~                          .--""""--.             |
|  ^IN OUT>   72px     |       |   ^IN OUT>  96px                  .'  (Bata  '.            |
|  coffee house        |       |   coffee house                   /    rim)     \           |
|                      |       |                                 |   o globe    |          |
|  Tempat nongkrong    |       |   Tempat nongkrong dari sore     |  Kuning room |          |
|  dari sore sampai    |       |   sampai malam di Cakung  (lead) |  |-+-+-+-|   |          |
|  malam di Cakung     |       |   Buka hari ini 14.00-22.00      |  beanbags   |          |
|  Buka hari ini ...   |       |   [^ Petunjuk Arah] [WhatsApp]    \  turf      /           |
| [^Petunjuk][WhatsApp]|       |   Jl. Dr. KRT Radjiman ... small   '.______.'             |
|   .--""""--.  <fold  |       |   cols 1-6, vertically centred     cols 7-12: oval 470x610 |
|  / Kuning   \        |       +------------------------------------------------------------+
|  | oval room |       |
|   '.______.'         |
+----------------------+
```
Oval: Bata rim at 3% of the width; inside, Kuning wall, a Dinding globe lamp on a cord, a Hitam
railing shelf with three tiny cacti, Hijau turf, beanbags in Bata, Hitam and outlined Dinding.
Phone oval 300x390, cut by the fold.

**Pilih tempatmu.** Purpose: the three moods as one building cross-section. Each h3 is a sign
(Hitam plate, Dinding text, `--step-lead`; the rooftop one led by the up-arrow). 10px Hitam slabs
between floors; no floor 1.
```
Spaces: phone (390)            Spaces: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Pilih tempatmu (h2)  |       | Pilih tempatmu (h2)                                        |
| Tiga suasana, ...    |       | Tiga suasana, satu gedung. Yang paling atas tanpa atap.    |
| +------------------+ |       | +--------------------------------------------------------+ |
| | ### rooftop  ### | |       | | [^ Rooftop lantai 3]  |  ### sun, trees, crook lamps ### | |
| | Kuning sky 200h  | |       | | Naik ke rooftop, ...  |  ### parapet, black railing  ### | |
| | [^ Rooftop lt 3] | |       | | Area terbuka ...      |  ### slatted tables, stools  ### | |
| | text             | |       | |  cols 1-5 text        |  cols 6-12 drawing, 380h         | |
| |==================| |       | |========================================================| |
| | [Lantai 2,indoor]| |       | | [Lantai 2, indoor]              | [Ruang beanbag]      | |
| | text             | |       | | text                            | text                 | |
| | ### posters,oval | |       | | ### posters 2x2, oval, pendant, | ### brick pier, arch | |
| | ### table, floor | |       | | ### round table, chairs, floor  | ### globes, turf, bags| |
| |------------------| |       | |  cols 1-7                        |  cols 8-12           | |
| | [Ruang beanbag]  | |       | |========================================================| |
| | text, ### room   | |       | +--------------------------------------------------------+ |
| |==================| |       +------------------------------------------------------------+
+----------------------+
```
Rooftop (Kuning sky): half Bata sun behind Hijau columnar trees, Dinding parapet, Hitam mesh
railing, two Dinding crook lamps with Hijau shades, Hitam slatted tables, Dinding stools outlined.
Indoor (Dinding): beton ribbed ceiling strip, Hijau pendant, 2x2 Hitam frames with plain colour
fields, the oval (Bata rim, Kuning inside), round Kayu table, two spindle chairs, Kayu floor.
Beanbag (Kuning): bata-tua brick pier framing a Kuning arch, two globes, Hijau turf, beanbags,
a small blank sign plate by the door (the shoes sign).

**Menu andalan.** Purpose: at least five products seen, then the full example list.
```
Menu: phone (390)              Menu: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Menu andalan (h2)    |       | Menu andalan (h2)                                          |
| Kopi dari mesin ...  |       | Kopi dari mesin espresso merah ...   (cols 1-7, 60ch max)  |
| Nama & harga contoh  |       | Nama menu dan harga di bawah ini masih contoh. (small)     |
| +------------------+ |       | +-------------------------+ +----------+ +----------+      |
| |  Es Kopi Susu    | |       | |                         | | Latte    | | Matcha   |      |
| |  ### large ###   | |       | |  Es Kopi Susu In Out    | +----------+ +----------+      |
| +------------------+ |       | |  ### large frame ###    | [Latte 25rb] [Matcha dari 20rb] |
| [Es Kopi Susu 20rb]  |       | | grid cols 1-2, rows 1-2 | +----------+ +----------+      |
| +-------+ +-------+  |       | |                         | | Nasi gor.| | Roti bkr |      |
| | Latte | | Matcha|  |       | +-------------------------+ +----------+ +----------+      |
| +-------+ +-------+  |       | [Es Kopi Susu In Out 20rb]  [Nasi dari 25rb] [Roti 15rb]  |
| [plaque]  [plaque]   |       |                                                            |
| | Nasi  | | Roti  |  |       | Kopi        | Non-kopi 20-27rb | Makanan 25-35rb | Camilan |
| [plaque]  [plaque]   |       | Es Kopi 20rb| Matcha           | Nasi goreng     | Kentang |
| Kopi / Non-kopi /    |       | Americano...| Chocolate ...    | Rice bowl ...   | Cireng..|
| Makanan / Camilan    |       |  4 cols x 3 of 12                                          |
| (stacked lists)      |       | +--------------------------------------------------------+ |
| +--Paket (Kuning)--+ |       | | ### | Paket Nongkrong  2 minuman + 1 camilan  Rp 50rb  | |
+----------------------+       | +--------------------------------------------------------+ |
                               +------------------------------------------------------------+
```
Gallery: 4-column grid, 32px gap; the large frame fills grid columns 1-2 across both rows, with
frame plus plaque as tall as the two small rows. Paket bar (Kuning): on the same 4 columns as the
list, drawing in column 1, then title, contents and price inline across columns 2-4 (24px from
the drawing). On phone the drawing sits 16px left of the text.
Plaque: Hitam, padding 8px 12px, name League Spartan 600 `--step-body`, price Nunito 700
`--step-small`, inline, wrapping under the name on narrow frames.

**Sambil menunggu cuci mobil** ([MOCKUP], `carWash.show`). Purpose: the car wash audience.
```
Car wash: phone (390)          Car wash: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Hitam band           |       | Hitam band                                                 |
| Sambil menunggu cuci |       | Sambil menunggu cuci mobil (h2) | Ngopi atau makan dulu    |
| mobil (h2, Dinding)  |       |  cols 1-6                       | selagi mobilmu dicuci... |
| Ngopi atau makan ... |       |                                 | Lihat menu (link)  7-12  |
| Lihat menu           |       +------------------------------------------------------------+
+----------------------+
```

**Kata mereka.** Purpose: proof, paraphrased, with the rating inside a sentence, not a big figure.
```
Praise: phone (390)            Praise: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Kuning band          |       | Kuning band                                                |
| Kata mereka (h2)     |       | Kata mereka (h2)          | ---------------  ------------- |
| 4,7 dari 215 ulasan  |       | 4,7 dari 215 ulasan       | Permata          Nyaman, pas   |
| Google (lead)        |       | Google (lead)             | tersembunyi ...  buat nongkrong|
| ---- Permata ...     |       | Ringkasan ... (small)     | ---------------  ------------- |
| ---- Nyaman, ...     |       | Baca ulasan di Google     | Menunya beragam, Rasanya enak, |
| ---- Menunya ...     |       |  cols 1-5                 | harganya wajar   suasananya .. |
| ---- Rasanya ...     |       |                           |  cols 6-12, 2x2, lead size     |
| Ringkasan... link    |       +------------------------------------------------------------+
+----------------------+
```
Each paraphrase sits under a 3px Hitam rule with 16px above the text. No quote marks, no names.

**Kunjungi kami.** Purpose: find it and check the week's hours.
```
Visit: phone (390)             Visit: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Kunjungi kami (h2)   |       | Kunjungi kami (h2)          | +--------------------------+ |
| Jl. Dr. KRT ...13930 |       | Jl. Dr. KRT Radjiman ...    | |                          | |
| Sekitar Pulo Jahe    |       | Sekitar Pulo Jahe (small)   | |  map iframe, 4:3,        | |
| [^ Petunjuk Arah]    |       | Jam buka (h3)               | |  6px Hitam frame         | |
| Jam buka (h3)        |       | Senin-Kamis   14.00-22.00   | |                          | |
| Senin-Kamis 14-22    |       | Jumat-Minggu  14.00-23.00 <-| |                          | |
| Jumat-Minggu 14-23   |       |   hari ini (Kuning mark)    | +--------------------------+ |
| Buka setiap hari ... |       | [^ Petunjuk Arah]  cols 1-5 |  cols 6-12                   |
| +--map 1:1---------+ |       +------------------------------------------------------------+
+----------------------+
```
The map frame has a Kuning fill with the address set behind the iframe, so a blocked embed
still reads.

**Close + Footer** (Hitam). Purpose: actions 2 and 3, and a real ending.
```
Close: phone (390)             Close: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| Masuk santai, keluar |       | Masuk santai, keluar senang. (h2)  | 0812-6060-9930 (lead,  |
| senang. (h2)         |       | Sampai ketemu di In Out. Tanya ... |   Kuning)              |
| Sampai ketemu ...    |       |  cols 1-7                          | [WhatsApp]  Kuning     |
| 0812-6060-9930       |       |                                    | [Telepon]   outline    |
| [WhatsApp]  full w   |       |                                    | [^ Petunjuk Arah]      |
| [Telepon]            |       |                                    |  cols 8-12             |
| [^ Petunjuk Arah]    |       |------------------------------------------------------------|
|----------------------|       | In Out Coffee House . Jl. Dr. KRT ... Cakung . Draf situs  |
| footer, stacked      |       +------------------------------------------------------------+
+----------------------+
```

## 8. Motion
**Signature: the arrows perform the name.** Where: the hero wordmark. On load, after the text
has painted: the I's arrowhead rises from 28px below (y 28 to 0, opacity 0 to 1, 0.7s,
`expo.out`, delay 0.15s); the T's arrowhead slides in from 28px back (x -28 to 0, opacity 0 to 1,
0.7s, `expo.out`, delay 0.3s). The sequence is done by 1.0s. The letters, line, hours and buttons
never wait. Reduced motion: arrowheads at their final state, no movement.
Supporting: one `<Reveal>` per section block (the building, the gallery wall, the price list
with the Paket bar, the praise grid, the visit block), 20px, 0.7s, `power2.out`, once. Buttons:
background change 150ms; the arrowhead inside "Petunjuk Arah" nudges 3px up-right on hover and
focus (CSS, 180ms, ease-out). Frames, drawings and praise don't move. Lenis: starter defaults.
Motion tokens: `duration.hero = 0.7`, `distance.arrow = 28`; everything else as in the starter.

## 9. What makes it this shop
- The hero is the 2nd-floor wall: the oval opening with its orange-red rim, framing the yellow
  room. You can't put that on any other cafe's site.
- The cup logo's own arrows (up on the I, forward on the T) are the signature motion and the
  wayfinding signs. In, up to the rooftop, and out.
- The menu is hung like the album covers on In Out's walls, square frames over little black
  caption plates. The building cross-section uses the real objects: crook lamps, slatted tables,
  brick and yellow arch, turf and beanbags.

## 10. Avoid
- The cafe default: cream ground, serif display, coffee browns, a latte-art photo hero, a row of
  equal "space" cards.
- Neobrutalism: yellow plus black tips easily into black boxes, hard offset shadows and condensed
  type. None of them, and nothing hazard-like (no diagonal stripes, no tape).
- Sketchy, doodled or perspective drawing. Frontal, flat, exact shapes only.
- Eyebrows, kickers, section numbers. Floor numbers live in the h3 signs.
- Arrows everywhere. Only the wordmark, the rooftop sign and the "Petunjuk Arah" buttons get them.
- Facts invented through drawings: band names or album art on the posters, a floor number on the
  beanbag sign, a roof on the rooftop, a ground floor.
- Old reviews passed off as current: no "terbaru", no dates, paraphrase only.
- English in copy, alt text, aria labels or the banner. Customer photos or stock photos.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio
      1.28; plaques, signs, lists, paraphrases and the phone number sit at lead or below)
- [x] Max content width set; no detail pinned far from what it describes (1200px; plaques 8px
      under their frame; prices inline; hours grid max-content)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero split, full
      building, 4-col gallery + 4-col list, split strip, 5/7 praise, 5/7 visit, 7/5 close)
- [x] At least 3 products shown (five framed drawings, plus the Paket drawing)
- [x] Within motion-rules.md (one signature in the hero, section reveals only, transform and
      opacity only, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
