# Design brief: NUWA Cafe

All copy in Bahasa Indonesia, `lang="id"`. Mode: Persuade (one-page pitch to the owner and their regulars).

## 1. Concept
**"Rumah putih, makan siang siap."** The page is NUWA's white house on Jl. Gongseng Raya, drawn in its own
materials: the thin, widely spaced facade letters under a festoon wire, the breeze-block screen by the door,
and the red-and-blue patterned ramen bowl. It reads in the order regulars use the place: lunch first, then a
second coffee.
**Signature moment:** on load, the hero ramen's toppings settle into the bowl one at a time (minced meat, chilli oil,
nori, corn, narutomaki, two egg halves, grilled meat, spring onion), about 1.1 s, ending on a finished bowl next to
"Buka hari ini 11.00–22.00".

Memory test (what a visitor describes an hour later): "the white NUWA sign with the light bulbs, and the red bowl
of ramen filling up."

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts (hours daily 11.00–22.00, 4,6 from 227, address, Maps link, no phone), the bowl's exact rim pattern and toppings (photo-2), red cup and tall iced glass (photo-1), pink ceiling panels, hanging vines and red metal chairs (photo-1), NUWA letters, festoon wire and roster screen (photo-3). No owner photos, so illustrations and labelled placeholders only. |
| impeccable | Persuade mode; new-work derivation of seven worlds from the audience's Pasar Rebo cafe life (roster screen, bowl-rim pattern, facade letters, festoon wire, hanging vines, chalkboard menu, kasir receipt). Chalkboard declined as the category rut, receipt as generic; the brief's pinned palette and materials decide the rest, so no seed roll (the launcher would download a binary outside `docs/`). Full-palette colour strategy, light theme from the scene, font ban list checked, cream-serif-terracotta calibration avoided, one product-born focal motion instead of generic reveals. |

## 3. Palette (4–6 named colours)
Strategy: **Full palette.** Each colour owns a whole region once: blush the menu, leaf the praise, tomato the close
and the primary button. Scene: midday in Pasar Rebo, a phone in hand on the way to lunch, bright daylight, so a
light ground. The palette is the room and the bowl at once: pink ceiling = narutomaki, vines = spring onion,
red chairs and cups = chilli oil.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `chalk` | #F8F9F5 | Page ground, roster cells, text on leaf and tomato | ink on chalk 15.75:1 |
| `ink` | #1C1F1B | All text on chalk and blush, wordmark, line drawings, outline button | 15.75:1 chalk, 12.75:1 blush |
| `tomato` | #C7372A | Primary button, closing field, crockery in illustrations | chalk on tomato 4.95:1 (AA body). Tomato on blush 4.01:1, so never text on blush |
| `leaf` | #2E6A3A | "Kata mereka" field, open-today dot, vines | chalk on leaf 6.13:1; leaf on chalk 6.13:1 |
| `blush` | #F4DCD8 | "Menu andalan" field (the ceiling panels), narutomaki | ink on blush 12.75:1 |
| `rim` | #7DBEDD | Illustration only: bowl-rim triangles, rim band, glass glint. Never text | n/a (no text) |

Focus ring: 3px solid ink, offset 3px, on chalk and blush; 3px solid chalk on leaf and tomato.

## 4. Type
Two families via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`, both variable:
**Jost** (`--font-display`): wordmark 200, "CAFE" label 300, h2 400. The facade's thin black capitals.
**Nunito** (`--font-body`): body 400, prices and item names 700, h3 and buttons 800. The friendly owner's voice.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.6rem + 8vw, 11rem)` (72.8px @390, 103px @768, 157px @1440) | hero wordmark "NUWA" only |
| `--step-head` | `clamp(2rem, 1.5rem + 2vw, 3.25rem)` (32px @390, 52px @1440) | section headings (h2), Jost 400 |
| `--step-lead` | `clamp(1.375rem, 1.3rem + 0.35vw, 1.5rem)` (22.2px @390, 24px @1440) | hero line, h3, praise lines, roster cell text, footer wordmark |
| `--step-body` | `clamp(1.0625rem, 1.03rem + 0.1vw, 1.125rem)` (17px @390, 17.9px @1440) | running text, menu items, prices, buttons |
| `--step-small` | `0.8125rem` (13px) | captions, "contoh" notes, placeholder labels, banner |

Ratios: 2.28 / 1.44 / 1.31 / 1.31 at 390; 3.0 / 2.17 / 1.34 / 1.38 at 1440. All ≥ 1.25.
Rules: wordmark is uppercase Jost 200 with `letter-spacing: 0.42em` and `margin-right: -0.42em` (no trailing gap),
leading 0.9 (always one line: 4 letters, ~312px wide at 390). "CAFE" sits under it in Jost 300 at `--step-lead`,
same tracking. h2 sentence case, leading 1.1, max 18ch. Jost below 400 only at display or lead size.
Body leading 1.55, max 60ch. Prices use `font-variant-numeric: tabular-nums`.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (32px from 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

Grid: 12 columns, 32px gap from 1024px. 768–1023: phone order with lists in two columns; "Ngopi" and "Kunjungi"
switch to two columns there. Full-bleed colour fields sit on the section, content inside `<Container>`.

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here: item prices inline 12px after the name; a group's price range
  on its h3 line; "nomor menyusul" 6px under the WhatsApp button; illustration captions ≤ 16px under the object;
  "contoh" notes directly under the section intro.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
Three real products from the photos, drawn as flat SVG illustrations (the customer photos are reference only,
never traced into the page or embedded):

1. **Ramen** (hero, ~560px desktop / ~300px phone, rotated -8°). Top view. Outer rim tomato, then a tomato zigzag
   band and a rim-blue triangle band on white, as on the real bowl. Creamy broth, noodles at centre. Toppings in
   the reference positions, each its own `<g class="topping">`: seasoned mince 10–11 o'clock, chilli oil with flakes
   12, nori 1 (leaning on the rim), corn 2, narutomaki 3–4 (blush with a chalk swirl), two egg halves 8–9,
   grilled meat slices 5–6, spring onion rings on the noodles. Caption: "Ilustrasi: ramen kuah creamy".
2. **Cappuccino** ("Ngopi di NUWA", ~260px). Red cup on a red saucer, from above, latte-art heart. Caption "Cappuccino".
3. **Es kopi susu** ("Ngopi di NUWA", ~300px tall). Tall glass, side view, milk coffee, ice, foam. Caption "Es kopi susu".

Illustration fills (fixed): broth #F1E6D6, noodles #EAD7A0, yolk #F0A23A, corn #F5C842, nori #26302B,
mince #B98C6B, grilled meat #8A5A3C, spring onion #5DAE4E, chilli oil #D9472B with flakes #9B2B1E, crema #C49467,
foam #F3E9DA, iced coffee #B6875E, ice #E6EEF0, glass edge ink at 15%. Bowl white is #FFFFFF. No outlines on
product drawings, no gradients, one flat ink-6% shadow ellipse under each object.
[MOCKUP] dishes (rice bowls, nasi goreng, snacks, non-coffee, lunch set) appear as text only: drawing unconfirmed
dishes would read as a claim. Roster-cell drawings are line art: ink 1.5px strokes plus one fill colour.

## 7. Sections
**Banner.** Starter `MockupBanner`, Indonesian: "Draf situs untuk ditinjau pemilik NUWA Cafe. Nama menu, harga dan
beberapa teks masih contoh." Chalk text on an ink strip, `--step-small`.
```
Banner: phone (390)              Banner: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|Draf situs untuk ditinjau   |   |  Draf situs untuk ditinjau pemilik NUWA Cafe. Menu & harga contoh.   |
|pemilik NUWA Cafe. Menu &   |   +----------------------------------------------------------------------+
|harga masih contoh.         |   
+----------------------------+   
```

**Hero.** Name, offer, today's hours and directions in the first phone screen. Festoon wire (static SVG, full bleed,
chalk bulbs with ink outline, daytime) crosses in front of the wordmark like the photo. h1 = "NUWA Cafe".
[MOCKUP] line: "Makan siang enak, ngopi santai, harga bersahabat di Pasar Rebo." Leaf dot + "Buka hari ini
11.00–22.00" (body 700). "Petunjuk Arah" tomato, "WhatsApp" outline placeholder with "nomor menyusul". The bowl's
top rises to the "CAFE" line on desktop; the rim band (tomato zigzag + rim triangles, 20px / 28px) crops its base.
```
Hero: phone (390)                Hero: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|~o~~~~o~~~~~o~~~~~o~~~~o~~~ |   |~~~o~~~~~~~~o~~~~~~~~o~~~~~~~~~o~~~~~~~~o~~~~~~~~~o~~~~~~ wire, bleed |
|  N   U   W   A    (h1)     |   |   N     U     W     A          (h1, cols 1-7, wire crosses)          |
|  C A F E                   |   |   C  A  F  E                               .-~~~~~~~~~~-.            |
|                            |   |                                         .'  nori  chilli '.          |
|  Makan siang enak, ngopi   |   |   Makan siang enak, ngopi santai,      /  meat      corn   \         |
|  santai, harga bersahabat  |   |   harga bersahabat di Pasar Rebo.     |   egg   noodle      |        |
|  di Pasar Rebo.   [lead]   |   |   [lead, cols 1-5, max 24ch]          |   egg      naruto   |        |
|  * Buka hari ini           |   |   * Buka hari ini 11.00-22.00          \   grilled meat    /         |
|    11.00-22.00     [body]  |   |   [Petunjuk Arah]  [WhatsApp]           '. bowl ~560px   .'          |
|  [Petunjuk Arah][WhatsApp] |   |                    nomor menyusul         cols 7-12, -8deg           |
|              nomor menyusul|   |                                     Ilustrasi: ramen kuah creamy     |
|         .-~~~~~~~~-.       |   |/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ rim band   |
|       /  ramen bowl  \     |   +----------------------------------------------------------------------+
|      |  ~300px, -8deg |    |   
|/\/\/\/\/\/\/\/\/\/\/\/\/\/\|   
+----------------------------+   
```

**Menu andalan** (blush field). Ramen first, then the [MOCKUP] groups with example price ranges. Intro [MOCKUP]:
"Ramen dulu, lalu yang lain. Semua nama dan harga masih contoh sampai NUWA kirim menu aslinya." Ramen description is
from the photo (facts). Lunch set as a chalk strip spanning the full width, price inline.
```
Menu andalan: phone (390)        Menu andalan: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  (blush field)             |   |  (blush field, full bleed)                                           |
|  Menu andalan      [h2]    |   |  Menu andalan [h2]          Ramen dulu, lalu yang lain. Nama &       |
|  Ramen dulu, ... contoh.   |   |  cols 1-6                   harga di bawah contoh. (cols 7-12)       |
|  Ramen  Rp 35rb-45rb [h3]  |   |                                                                      |
|  Kuah putih creamy, telur, |   |  Ramen  Rp 35rb-45rb [h3]  Rice bowl     Favorit Indo.  Camilan      |
|  jagung, nori, narutomaki..|   |  Kuah putih creamy, irisan  Rp 30rb-38rb  Rp 25rb-32rb  Rp 18rb-28rb |
|  - Ramen Kuah Creamy       |   |  daging panggang, cincang,  - Chicken     - Nasi goreng  - Kentang   |
|  - Ramen Pedas             |   |  2 belah telur, jagung,       katsu       - Mie goreng     goreng    |
|  Rice bowl  Rp 30rb-38rb   |   |  nori, narutomaki, daun     - Chicken                    - Cireng    |
|  - Chicken katsu ...       |   |  bawang, minyak cabai.        teriyaki                   - Dimsum    |
|  Favorit Indonesia ...     |   |  - Ramen Kuah Creamy        (cols 6-12: three equal list columns)    |
|  Camilan ...               |   |  - Ramen Pedas  (cols 1-5)                                           |
|  [Paket makan siang Rp40rb]|   |  [ Paket makan siang: ramen / rice bowl + es teh  Rp 40rb ] chalk    |
+----------------------------+   +----------------------------------------------------------------------+
```

**Ngopi di NUWA** (chalk). Drinks after lunch. Cup and glass drawn side by side, captions under each. Intro [MOCKUP]:
"Habis makan, jangan buru-buru pulang. Satu kopi lagi, ya." then "Harga contoh". Two lists: Kopi (prices per item),
Non-kopi (range on the h3 line).
```
Ngopi di NUWA: phone (390)       Ngopi di NUWA: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  Ngopi di NUWA     [h2]    |   |                                                                      |
|  Habis makan, ... contoh.  |   |     .------.       ___         Ngopi di NUWA   [h2, cols 7-12]       |
|   ( (cup) )     |glass|    |   |    ( (  v  ) )    |   |        Habis makan, jangan buru-buru.        |
|   red cup       |iced |    |   |     '------'      |ice|        Harga di bawah: contoh                |
|  Cappuccino    Es kopi susu|   |   red cup + saucer|   |                                              |
|  Kopi [h3]                 |   |   from above      |___|        Kopi [h3]          Non-kopi [h3]      |
| Es Kopi Susu Gula Aren 22rb|   |   Cappuccino   Es kopi susu    Es Kopi Susu       Rp 20rb-28rb       |
| Cappuccino/Latte 25rb-28rb |   |   [caption]    [caption]       Gula Aren Rp 22rb  - Matcha latte     |
| Americano 20rb             |   |   (illustrations cols 1-6)     Cappuccino /       - Cokelat          |
|  Non-kopi  Rp 20rb-28rb    |   |                                Latte Rp 25rb-28rb - Lychee tea       |
|  Matcha latte, cokelat, .. |   |                                Americano Rp 20rb  - Lemon tea        |
+----------------------------+   +----------------------------------------------------------------------+
```

**Suasana NUWA** (chalk). The room without customer photos, built as the breeze-block screen: square cells touching
with a 2px ink-8% grout line, no radius, no shadow; each empty block shows the angled leaf face as a line drawing.
Intro (facts): "Rumah putih yang terang, penuh tanaman gantung dan pot. Mejanya pas buat ramai-ramai: teman,
keluarga, anak-anak." Cell text: "Terang & hijau", "Meja buat ramai-ramai" (lead). Photo cell: dashed ink-30% frame,
"Tempat foto ruang makan · menunggu foto dari pemilik". Phone keeps one plain block and drops the shelf.
```
Suasana NUWA: phone (390)        Suasana NUWA: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  Suasana NUWA      [h2]    |   |  Suasana NUWA [h2, cols 1-5]   Rumah putih yang terang, penuh        |
|  Rumah putih, terang, ...  |   |                                tanaman gantung. Meja buat            |
|+-----------+-----------+   |   |                                ramai-ramai. (cols 7-12)              |
|| FOTO RUANG MAKAN 2x2  |   |   |+----------+----------+---------------------+----------+----------+   |
|+-----------+-----------+   |   || vines    | roster   | FOTO RUANG MAKAN    | Terang & | red      |   |
|| vines     | Terang &  |   |   || (leaf)   | block    | placeholder 2x2     | hijau    | chair    |   |
|+-----------+-----------+   |   |+----------+----------+                     +----------+----------+   |
|| red chair | Meja buat |   |   || Meja buat| festoon  | menunggu foto       | cube     | roster   |   |
|+-----------+-----------+   |   || ramai2   | bulbs    | dari pemilik        | shelf    | block    |   |
|| bulbs     | roster    |   |   |+----------+----------+---------------------+----------+----------+   |
|+-----------+-----------+   |   |  6 cols x 2 rows of square cells, 2px grout, full container          |
+----------------------------+   +----------------------------------------------------------------------+
```

**Kata mereka** (leaf field, chalk text). Paraphrased praise, no names, no quote marks: "Makanannya enak, harganya
terjangkau." / "Pemiliknya ramah, tempatnya selalu ramai." / "Pas buat makan siang dan nongkrong bareng teman."
(reviews 5, 5, 1). Rating "4,6 dari 227 ulasan Google" at lead, note "Ringkasan ulasan Google, bukan kutipan".
Hairlines chalk at 25%.
```
Kata mereka: phone (390)         Kata mereka: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  (leaf field, chalk text)  |   |  (leaf field, full bleed, chalk text)                                |
|  Kata mereka       [h2]    |   |  Kata mereka [h2]        | Makanannya enak, harganya terjangkau.     |
|  4,6 dari 227 ulasan Google|   |  4,6 dari 227 ulasan     | ------------------------------------      |
|  Ringkasan, bukan kutipan  |   |  Google [lead]           | Pemiliknya ramah, tempatnya selalu        |
|  Makanannya enak, harganya |   |  Ringkasan ulasan, bukan |   ramai.                                  |
|  terjangkau.     [lead]    |   |  kutipan [small]         | ------------------------------------      |
|  ----------------------    |   |  (cols 1-4)              | Pas buat makan siang dan nongkrong        |
|  Pemiliknya ramah, ...     |   |                          |   bareng teman.  (cols 6-12, lead)        |
|  ----------------------    |   +----------------------------------------------------------------------+
|  Pas buat makan siang ...  |   
+----------------------------+   
```

**Kunjungi kami** (chalk). Address, hours as one week line "Senin–Minggu 11.00–22.00 · buka setiap hari", Maps embed
(lazy, 1px ink-15% border), "Buka di Google Maps" outline button.
```
Kunjungi kami: phone (390)       Kunjungi kami: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  Kunjungi kami     [h2]    |   |  Kunjungi kami [h2]       +-------------------------------------+    |
|  Jl. Gongseng Raya No.16,  |   |  Jl. Gongseng Raya No.16, |                                     |    |
|  Baru, Pasar Rebo,         |   |  Baru, Pasar Rebo,        |   Google Maps embed, 16:10          |    |
|  Jakarta Timur 13770       |   |  Jakarta Timur 13770      |   cols 6-12, lazy                   |    |
|  Senin-Minggu 11.00-22.00  |   |  Jam buka [h3]            |                                     |    |
|  Buka setiap hari          |   |  Senin-Minggu 11.00-22.00 |                                     |    |
|  +----------------------+  |   |  Buka setiap hari         |                                     |    |
|  |  map embed (4:3)     |  |   |  [ Buka di Google Maps ]  +-------------------------------------+    |
|  +----------------------+  |   |  (cols 1-5)                                                          |
|  [ Buka di Google Maps ]   |   +----------------------------------------------------------------------+
+----------------------------+   
```

**Hubungi kami** (tomato field, the close). [MOCKUP] h2 "Mampir ke NUWA hari ini, ya." and "Ajak teman, kami siapkan
mejanya." Buttons chalk-filled (ink text) and chalk outline (WhatsApp placeholder, "nomor menyusul" under it).
```
Hubungi kami: phone (390)        Hubungi kami: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|  (tomato field, chalk)     |   |  (tomato field, full bleed, chalk text)                              |
|  Mampir ke NUWA hari       |   |  Mampir ke NUWA hari ini, ya. [h2]      [   Petunjuk Arah    ]       |
|  ini, ya.          [h2]    |   |  Ajak teman, kami siapkan mejanya.      [   WhatsApp         ]       |
|  Ajak teman, kami siapkan  |   |  (cols 1-7)                               nomor menyusul             |
|  mejanya.                  |   |                                         (cols 8-12, stacked)         |
|  [   Petunjuk Arah     ]   |   +----------------------------------------------------------------------+
|  [   WhatsApp          ]   |   
|    nomor menyusul          |   
+----------------------------+   
```

**Footer** (chalk). Rim band on top, small wordmark "NUWA CAFE" (Jost 300, tracked, lead), short address, hours,
draft note in small.
```
Footer: phone (390)              Footer: desktop (1440)
+----------------------------+   +----------------------------------------------------------------------+
|/\/\/\/\/\/\/\/\/\/\/\/\/\/\|   |/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ rim band   |
|  N U W A  C A F E [lead]   |   |  N U W A  C A F E     Jl. Gongseng Raya No.16,  Draf situs untuk     |
|  Jl. Gongseng Raya No.16,  |   |  (cols 1-4, lead)     Pasar Rebo, Jakarta Tim.  ditinjau pemilik.    |
|  Pasar Rebo · 11.00-22.00  |   |                       Setiap hari 11.00-22.00   (cols 9-12, small)   |
|  Draf situs, belum resmi   |   +----------------------------------------------------------------------+
+----------------------------+   
```

## 8. Motion
**Signature: "topping masuk mangkuk"** (hero, on load). Bowl, broth and noodles are present from first paint (LCP
stays text and bowl). The eight topping groups start hidden only when `html.js-motion` is set, then drop in from
16px above: opacity 0→1, y -16→0, scale 0.94→1 (nori also rotates -6°→0), 0.5 s each, stagger 0.08 s, `expo.out`,
0.15 s after hydration; total ≈ 1.1 s. Order: mince, chilli oil, nori, corn, narutomaki, eggs (both halves together),
grilled meat, spring onion. No loop, no replay on scroll. If hydration lands later than 1.2 s after navigation
start, skip the timeline and show the finished bowl (a CSS failsafe also reveals toppings at 1.5 s), so nothing waits
on a late intro. Reduced motion or no JS: finished bowl, no motion.
**Supporting reveals** (one per section, `Reveal`, 20px, 0.7 s, `power2.out`, once): Menu andalan, Ngopi di NUWA,
the Suasana wall, Kata mereka. Hero, Kunjungi, the close and the footer do not animate.
**Responses:** buttons 180 ms ease-out colour change and translateY(-1px) on hover, scale 0.98 for 120 ms on press;
links 150 ms underline colour. CSS only.
Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.22, reveal: 0.7, hero: 1.1, topping: 0.5 }`,
`stagger = { topping: 0.08 }`, `distance = { reveal: 20, topping: 16 }`, eases as starter (`outStrong` for toppings).

## 9. What makes it this shop
- The ramen bowl drawn in NUWA's own crockery (red zigzag, blue triangles) with the photo's exact toppings, and
  that rim pattern reused as the band that closes the hero and opens the footer.
- The wordmark set like the facade: thin black capitals spaced wide, with the festoon wire crossing in front of them.
- "Suasana" built as the breeze-block screen beside the door, its cells holding the hanging vines, the red metal
  chair and the string-light bulbs.

## 10. Avoid
- The category defaults: cream ground + serif + terracotta, a latte-art hero, a dark moody espresso bar, a chalkboard menu.
- Bento cards: the roster wall must read as a wall (square, touching, no radius, no shadow, no hover lift).
- Japanese costume while the menu direction is unconfirmed: no rays behind the bowl, no half-bowl "rising" over
  text, no kanji, lanterns, torii or wave patterns. Keep the bowl at least 75% visible.
- Stock or customer photos; quote marks or names on praise; star rows; claims of "quiet" or "fast".
- Tiny tracked uppercase eyebrows over every heading. Jost 200 below display size.
- More illustration than the three products, the wire, the rim band and the roster drawings. Any headline text effect.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (items body, h3 lead, h2 head; rating and praise at lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline, captions ≤ 16px, "nomor menyusul" 6px)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns, three list columns, 6-cell wall, map beside text)
- [x] At least 3 products shown (ramen, cappuccino, es kopi susu as illustrations)
- [x] Within motion-rules.md (one signature, four section reveals, transform and opacity only, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
