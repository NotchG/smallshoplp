# Design brief: Red Soldadu Riverside

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
The page is built from the pavilion itself: merbau-red timber, green-painted steel, one rust
column. It opens like the gap between the roof beam and the deck rail onto a band of khaki
Ciliwung water, because that view from a deck hidden in a housing complex is the one thing no
other cafe in Jakarta Timur can show.
Signature moment: on load, the timber plane carrying the name and the deck plane carrying the
actions ease apart (36 px each, 1.1 s) and open the river band between them, while its glints
drift a short way downstream and settle.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Every fact and item; the palette is sampled from the building (deck, ceiling, steel, rust column, marble bar top, river, leaves); the rail-side table (photo-2) gives the "items on the rail ledge" menu; the round table-number stand gives the hours disc; no owner photos, so everything visual is drawn. |
| impeccable | Persuade mode. Rut named and refused: dark-espresso-and-cream coffee pages, sage-and-leaf "nature cafe", photo hero with overlay, blue wavy water. Candidates weighed: river-rail table (taken, merged with the pavilion's opening), pavilion section drawing (kept for §2 of the page), table-number disc (kept as a detail), coffee-bag label, route map (rejected, it would invent geography), Ciliwung flood gauge (rejected, flood association), nursery tags. Committed colour strategy, banned-default fonts avoided, one dominant move (depth rule), one authored motion focal. `concept-seed` and the other scripts were not run because they write outside `docs/`; their steps were applied by hand. |

## 3. Palette (6 named colours)
Strategy: **Committed.** Merbau owns the hero and Kata mereka (about a third of the page), baja
owns Menu and the close, and batu is the reading ground. Kali appears only as water. Scene: a phone
in a bright afternoon or in the evening, choosing where to sit for hours. Dark timber and green
steel read in both, like the shaded deck itself.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `merbau` | #6B2E1D | Ground for Hero and Kata mereka; headings on batu; the ledge in Menu | batu on merbau 8.37:1 ✓ AA body |
| `baja` | #1F3B2C | Ground for Menu and Hubungi; body text and line work on batu; the hero beam | batu on baja 9.90:1 ✓; baja on batu 9.90:1 ✓ |
| `batu` | #E7E8E1 | Reading ground (marble bar top, not cream); all text on dark grounds; primary button fill | merbau on batu 8.37:1 ✓ (button label) |
| `kali` | #A88F5E | Ciliwung water: hero band, river in drawings, cork coasters. **No text on kali.** | vs merbau 3.32:1 (graphic ✓) |
| `daun` | #86AC55 | Leaves, mint, turf in drawings only | vs baja 4.68:1 (graphic ✓) |
| `karat` | #D0662E | Rust column: the hero rail, day-line dots, honey and fritter gold in drawings. Decorative only, never text | vs baja 3.27:1, vs batu 3.03:1 (graphic ✓) |

Focus ring: 3 px solid batu on dark grounds, 3 px solid baja on batu, 3 px offset. The starter's
`--color-paper` and `--color-ink` are replaced: html background `batu`, text `baja`.

## 4. Type
**Young Serif** (400, the only weight; display, section heads, lead statements, item names) and
**Archivo** (variable 400–700; body, lists, buttons, labels). Both via `next/font/google`, subset
`latin`, `display: swap`. Young Serif is heavy and warm like the timber. Archivo is a sturdy
grotesque for the steel.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1.2rem + 7vw, 7rem)` → 48 / 73 / 112 px (390/768/1440) | hero name only, Young Serif, leading 1.05 (two lines by design) |
| `--step-head` | `clamp(2.125rem, 1.5rem + 2.6vw, 3.25rem)` → 34 / 44 / 52 px | section h2, Young Serif, leading 1.1 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)` → 23 / 25 / 28 px | hero sub line, h3, item names, praise statements; Young Serif, leading 1.25 |
| `--step-body` | `clamp(1.125rem, 1.1rem + 0.1vw, 1.1875rem)` → 18 / 18.4 / 19 px | running text, list items, buttons; Archivo 400 (600 for hours and buttons), leading 1.55 |
| `--step-small` | `0.875rem` → 14 px | captions, prices, item notes, source lines, banner; Archivo 500, leading 1.4 |

Ratios: 1.41 / 1.48 / 1.29 / 1.29 at 390 px and 2.15 / 1.86 / 1.47 / 1.36 at 1440 px, so every
step is at least 1.25×. Nothing outranks its section heading except the hero name. The name is set
as two forced lines, "Red Soldadu" / "Riverside", with `text-wrap: balance`. If "Red Soldadu" can't
fit at 360 px it may wrap, and leading 1.05 keeps that safe. Prices and times use
`font-variant-numeric: tabular-nums`. No uppercase tracked labels.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥768px) |
| Hero river band (`--river-h`, new variable) | `clamp(150px, 17vw, 250px)` |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here: a price sits directly under its item name; a
  group's price range sits under the group name; "Harga masih contoh" sits in the Menu intro; day-line
  labels sit under their own dot; the "Ilustrasi" caption sits under the drawing's left edge.
- **Wide screens are designed, not stretched:** at 1440 the hero planes and river band run full
  bleed while the text keeps to the 12-column container. Every other section is two columns
  (7/5 or 5/7), the five-item rail row, or the full-width day line.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Grounds in order: merbau, batu, baja, batu, merbau, batu, baja. No section dividers drawn between
  them; the change of ground is the divider. Buttons are 48 px tall with 4 px radius and no shadows.
  No cards with borders: groups are made by spacing.

## 6. Products on the page
Five products, drawn as flat illustrations. Each is a side view in a 200×200 viewBox, standing on a
shared baseline so the whole row sits on one merbau **ledge** (10 px bar with a 3 px karat top edge,
the river rail). They use the six tokens only, with no gradients, no outlines except 2 px baja on
glass edges, and at most ~12 shapes each. Each has `role="img"` and an Indonesian `aria-label`. The
caption "Ilustrasi" appears once, under the row.
1. **Black and Berries**: tall hammered glass (vertical ripple lines), dark coffee (baja) over a berry layer (merbau), three berries (merbau, karat highlight), batu ice outlines.
2. **Banana Fritter**: white plate (batu ellipse), three golden fritter pieces (karat + kali), a merbau coulis swoosh.
3. **Cheese Baked Peuyeum**: small oval baking dish (merbau), peuyeum mound (kali), a batu cheese crust with karat browned edges.
4. **Mocktail**: hammered glass on a cork coaster (kali disc), pale fizz (batu with daun tint lines), mint sprig (daun), batu bubbles.
5. **Honey Wings**: plate (batu), three glazed wings (karat) with a honey drip, batu sesame dots.
A small sixth drawing, the coffee-bean bag (batu bag, merbau label band), sits beside the "Biji
kopi untuk dibawa pulang" line in the menu list. Customer photos are never used. The drawings are
replaced by owner photos when they arrive (same 1:1 slot).

## 7. Sections
Hero: no nav bar. One page and seven sections, with the actions in the hero and again at the close.
```
Hero: phone (390)                        Hero: desktop (1440)
+--------------------------------+       +------------------------------------------------------------------+
| Draf mockup ... (banner, baja) |       | Draf mockup ... (banner)                                         |
+--------------------------------+merbau +------------------------------------------------------------------+ merbau
| Red Soldadu         display 48 |       |  Red Soldadu                           Kopi, mocktail, dan suara  |
| Riverside                      |       |  Riverside        display 112          sungai di tepi Ciliwung.   |
|================================|beam   |  (cols 1-7)                            (lead 28, cols 9-12, bottom)|
| ~ leaf canopy (baja/daun) ~ ~ ~|kali   |==================================================================| baja beam
|    ____       _____            |150px  | ~ ~ ~ leaf canopy along the far bank, full bleed ~ ~ ~ ~ ~ ~ ~ ~ |  kali
|  ___      ____                 |glints |      _____          ____          ______         ____         |  250px
|################################|karat  |  ____         _____        ____            _____                |
+--------------------------------+merbau |##################################################################| karat rail
| Kopi, mocktail, dan suara      |lead 23+------------------------------------------------------------------+ merbau
| sungai di tepi Ciliwung.       |       |  [ Petunjuk Arah ] [ WhatsApp ]        (o) Buka hari ini          |
| (o) Buka hari ini · 08.00–23.00|       |  Jl. Sederhana I No.4A, Gedong,            08.00–23.00            |
| [ Petunjuk Arah ] [ WhatsApp ] |       |  Pasar Rebo (small)                        (cols 9-12)            |
| Jl. Sederhana I No.4A, ... sm  |       +------------------------------------------------------------------+
+--------------------------------+
```
The river band is one SVG (`preserveAspectRatio="xMidYMid slice"`, at least two glints in the
middle 40%, no sky, sun or hills). `(o)` is the hours disc: a 28×40 round table-number stand drawn
in batu, sitting inline before the text.

Di tepi Ciliwung: prove the place.
```
phone (390)                              desktop (1440)
+--------------------------------+batu   +------------------------------------------------------------------+ batu
| Di tepi Ciliwung       head 34 |       |  Di tepi Ciliwung (head 52)   +--------------------------------+ |
| Tersembunyi di kompleks perum- |lead   |  Lead (cols 1-5)              | pavilion section drawing, 4:3  | |
| ahan, di tikungan Ciliwung.    |       |  Body 2-3 lines               | roof, slat screen, rust column,| |
| Body 2-3 lines                 |       |  - Dek kayu dan baja di atas  | deck + rail, bank, river, far  | |
| - Dek kayu dan baja ...  body  |       |    sungai                     | trees (cols 6-12)              | |
| - Hijau, teduh, suara sungai   |       |  - Hijau, teduh, suara sungai +--------------------------------+ |
| - Tertata sampai ke gelasnya   |       |  - Tertata sampai ke gelasnya  Ilustrasi (small)                 |
| [ pavilion drawing 4:3 ]       |       +------------------------------------------------------------------+
| Ilustrasi (small)              |
+--------------------------------+
```

Menu andalan: what to order. Five drawn items on one rail ledge, then the full list.
```
phone (390)                              desktop (1440)
+--------------------------------+baja   +------------------------------------------------------------------+ baja
| Menu andalan           head 34 |       |  Menu andalan (head 52)             Yang paling sering dipuji      |
| Yang paling sering dipuji. Har-|body   |                                     pengunjung. Harga masih contoh.|
| ga masih contoh.        +small |       |  [art]     [art]     [art]     [art]     [art]      (~180px tall)  |
|  [art]        [art]            |2 cols |  ==============================================================  | ledge
| ============================== |ledge  |  Black and Banana    Cheese    Mocktail  Honey Wings  lead 28      |
| Black and     Banana   lead 23 |       |  Berries   Fritter   Baked P.                                     |
| Berries       Fritter          |       |  note      note      note      note      note         small        |
| note / Rp 38rb  note / Rp 35rb |small  |  Rp 38rb   Rp 35rb   Rp 35rb   Rp 40rb   Rp 42rb      small 600    |
|  (row 2: Peuyeum, Mocktail)    |       |                                                                  |
|  (row 3: Honey Wings)          |       |  Kopi        Mocktail & min.  Camilan       Makanan berat  lead   |
| Kopi · Rp 30–40rb       lead   |       |  Rp 30–40rb  Rp 35–45rb       Rp 30–45rb    Rp 50–70rb     small  |
| Black and Berries ...   body   |       |  items...    items...         items...      items...       body   |
| (Mocktail, Camilan, Makanan)   |       |  [bag] Biji kopi untuk dibawa pulang · House blend 200 g   body   |
| [bag] Biji kopi ... 200 g      |       +------------------------------------------------------------------+
+--------------------------------+
```
Featured items are an `<ul>`; each name is an h3. On phone the ledge repeats under each row.

Kerja atau santai ([MOCKUP] section): a day from opening to closing.
```
phone (390)                              desktop (1440)
+--------------------------------+batu   +------------------------------------------------------------------+ batu
| Kerja atau santai      head 34 |       |  Kerja atau santai (head 52)    Datang pagi bawa laptop, pulang  |
| Datang pagi bawa laptop, ...   |lead   |  (cols 1-6)                     setelah mocktail terakhir. (lead)|
| 08.00 o Buka                   |       |                                                                  |
|       |                        |baja 2px|  08.00 o----------o--------------------o---------o-------o 23.00 |
|  Pagi o Kopi dan laptop        |body   |  Buka       Pagi: kopi     Sore: camilan,   Senja:     Tutup     |
|  Sore o Camilan, angin sungai  |       |             dan laptop     angin sungai     mocktail ...         |
| Senja o Mocktail, cahaya turun |       |  Wi-Fi dan colokan (small, under the line, left)                 |
| 23.00 o Tutup                  |       +------------------------------------------------------------------+
| Wi-Fi dan colokan (small)      |
+--------------------------------+
```
Dots are karat. Positions are proportional to time (08 = 0%, 23 = 100%; pagi 10.00, sore 15.00,
senja 18.00). It's an `<ol>`.

Kata mereka: proof, paraphrased.
```
phone (390)                              desktop (1440)
+--------------------------------+merbau +------------------------------------------------------------------+ merbau
| Kata mereka            head 34 |       |  Kata mereka (head 52)   | ------------------  ------------------ |
| Dirangkum dari ulasan Google · |small  |  Dirangkum dari ulasan   | Pemandangan sungai  Tenang dan damai,  |
| 4,5 dari 506 ulasan            |       |  Google · 4,5 dari 506   | dan hijau, jarang   jeda dari riuhnya  |
| -------------------            |       |  ulasan (small, cols 1-4)| di Jakarta Timur.   Jakarta. (lead 28) |
| Pemandangan sungai dan  lead 23|       |                          | ------------------  ------------------ |
| hijau, jarang di Jaktim.       |       |                          | x2 more rows (6 statements, cols 5-12) |
| (x6, each under a 1px rule)    |       +------------------------------------------------------------------+
+--------------------------------+
```
Rules are 1 px batu at 40% mixed into merbau (`color-mix`). No quotation marks, names, stars or
avatars.

Kunjungi kami: getting there.
```
phone (390)                              desktop (1440)
+--------------------------------+batu   +------------------------------------------------------------------+ batu
| Kunjungi kami          head 34 |       |  +------------------------------------+  Kunjungi kami (head 52)  |
| Jl. Sederhana I No.4A, RT.1/   |body   |  | Google Maps embed, 4:3             |  Full address (body)      |
| RW.6, Gedong, Pasar Rebo 13760 |       |  | (cols 1-7)                         |  Senin–Minggu 08.00–23.00 |
| Senin–Minggu 08.00–23.00 (600) |       |  |                                    |  buka setiap hari (small) |
| buka setiap hari        small  |       |  |                                    |  - Di kompleks perumahan, |
| - Di kompleks, mudah ditemukan |       |  |                                    |    mudah ditemukan        |
| - Jalan depan agak sempit      |       |  |                                    |  - Jalan depan sempit ... |
| - Parkir ±3 mobil dan motor    |       |  |                                    |  - Parkir ±3 mobil, motor |
| - Mushola di dekat kafe        |       |  +------------------------------------+  - Mushola di dekat kafe  |
| [ Buka di Google Maps ]        |       |                                          [ Buka di Google Maps ]  |
| [ map 4:3 ]                    |       +------------------------------------------------------------------+
+--------------------------------+
```

Hubungi kami: the close and footer.
```
phone (390)                              desktop (1440)
+--------------------------------+baja   +------------------------------------------------------------------+ baja
| Hubungi kami           head 34 |       |  Hubungi kami (head 52)          [WhatsApp] [Telepon 0812-1506-  |
| Tanya menu atau arah jalan     |body   |  Tanya menu atau arah jalan      6612] [Petunjuk Arah] (cols 7-12)|
| lewat WhatsApp.                |       |  lewat WhatsApp. (cols 1-6)                                       |
| [ WhatsApp               ]     |stacked|  ----------------------------------------------------------------  |
| [ Telepon 0812-1506-6612 ]     |48px   |  Red Soldadu Riverside (lead)  Jl. Sederhana I No.4A, ...  Setiap |
| [ Petunjuk Arah          ]     |       |                                Pasar Rebo (small)    hari 08–23 |
| ------------------------------ |       |  Draf mockup, belum dipublikasikan (small)                        |
| Red Soldadu Riverside   lead   |       +------------------------------------------------------------------+
| alamat · jam (small)           |
| Draf mockup ... (small)        |
+--------------------------------+
```

## 8. Motion
**Signature: "Pemandangan terbuka" (the view opens), hero, on load, once.**
- The beam plane (name, lead, baja beam) starts 36 px lower and the deck plane (karat rail,
  actions) starts 36 px higher, both overlapping the river band. Together they ease to 0 in
  1.1 s, `expo.out`. The band sits beneath them (lower z-index), so the river is revealed by the
  planes moving, with transform only.
- At the same start, the glints go x −48 → 0 in 1.4 s (`power2.out`) and the leaf canopy y −10 → 0
  in 1.1 s. Text is never hidden or faded. It's readable from first paint and only moves with its
  plane.
- The pre-offset is applied by CSS only under `html.motion-ok` (set by an inline head script when
  JS runs and reduced motion is off), so the static HTML paints in the final state with JS off.
- **Reduced motion:** no class, no GSAP. Planes and band render in their final state. Lenis is off.

Supporting:
- Sections 2–7: one `<Reveal>` per section content block, fade up 20 px, 0.7 s, `power2.out`, once.
  No stagger on the menu items, praise rows or day-line stops.
- Buttons: hover translateY(−2px), press scale(0.98), 150 ms ease-out (CSS). Colour swaps are
  instant, not transitioned.
- Lenis: starter defaults.

Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.7, hero: 1.1, glint: 1.4 }`,
`ease` unchanged, `distance = { reveal: 20, open: 36, glint: 48, canopy: 10 }`.

## 9. What makes it this shop
1. The view opens between a green steel beam and a rust rail onto **khaki** water, the Ciliwung's
   real colour, not stock blue. It's the shaded deck at Jl. Sederhana I and nobody else's.
2. The palette is sampled from the building: merbau decking, green-painted steel, marble-grey bar
   top, the single rust column, river khaki, leaf green.
3. The menu is drawn standing on the river rail, the way the dessert and the hammered glass stand on
   the rail in the photos. Hours sit beside the round table-number stand.

## 10. Avoid
- Generic: coffee-bean or latte-art clip art, espresso-brown plus cream, sage-and-leaf "nature cafe"
  blobs, a stock cafe photo hero, three equal icon cards, star widgets, quotes with names, tracked
  mono labels, wavy dividers between sections.
- Concept failures:
  - The river band turning into a cartoon landscape (sky, sun, hills, birds).
  - Blue water.
  - The opening animation hiding text or waiting on JS.
  - Looping glints.
  - Drawings getting detailed or cute (keep them flat, ≤12 shapes).
  - The pavilion drawing gaining labels it can't support (no labels).
  - Merbau grounds getting a slat texture behind text.
- Content: price as a headline, mains as a lead, "kid-friendly", the playlist, customer photos.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Ratios are in §4. Item names, praise and group names are lead, below head; prices, notes and captions are small.
- [x] Max content width set; no detail pinned far from what it describes. 1200 px; prices under names, ranges under group names, the price note in the Menu intro, day labels under their dots.
- [x] Every section has a desktop wireframe that uses the width on purpose: full-bleed hero bands, 7/5 and 5/7 splits, the five-item ledge row, the full-width day line, the 4/8 praise grid.
- [x] At least 3 products shown (food and product shops): five drawn items plus the bean bag.
- [x] Within motion-rules.md: one signature, transform only, section reveals only, no React Bits, reduced motion is none, readable with JS off.
- [x] Brief is decisions, not essays (2–4 pages).
