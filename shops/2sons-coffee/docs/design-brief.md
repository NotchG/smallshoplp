# Design brief: 2Sons Coffee

## 1. Concept
The page is built like the shop's own lit cubby shelf. A cool grey wall holds a silver shelf unit, and each white cell glows from an LED strip along its top edge. The coffee, the food and the room sit in those cells the way the records, bean bags and bear figures sit on the real shelf. This fits 2Sons specifically: that glowing shelf is the most photographed thing in the room, and the brief asks for "a quiet, well-lit gallery where the coffee is the main exhibit".
Signature moment, "rak menyala": on load the hero shelf's lights come on one cell at a time (name, shopfront, hours), as if the shop is opening at 07.00.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | All facts and copy (Bahasa Indonesia). The palette comes from the room: wall grey, navy chairs, the taupe of the wall sign, the yellow bear. The structure comes from the lit shelving (owner-2, owner-3). The name lockup copies the fascia and can: big "2sons" with small "coffee" under it. The drawing style copies the backlit line-art wall sign (owner-4). photo-1..3 were used for reference only. |
| impeccable | Persuade mode. A new-world derivation that names the rut. Colour strategy picked from the physical scene. A typeface with a point of view, not a training-data default. One authored focal motion in place of scattered effects. The launcher and `concept-seed` were not run because both write outside `docs/`, so the roll is `seed: none (unavailable)` and the direction was chosen by ranking. |
| Direction considered | Seven candidates from the shop's world, ranked: **1. lit cubby shelf (chosen)**, 2. backlit line-art wall sign, 3. bean-bag origin labels, 4. record sleeve and liner notes, 5. gallery wall label (the brief's literal metaphor, given one slot), 6. ruko fascia and canopy grid, 7. mahjong tiles. |
| Raises kept from runners-up | From the **wall sign**, every product drawing is a white line on taupe with a backlit halo. From the **bean-bag labels**, every product cell uses one fixed caption order: name, one line, price. |

## 3. Palette (6 named colours)
Strategy: **Committed.** The wall grey owns the page ground and the lit white cells are the second field. Navy is the only ink. Taupe appears only in the product drawings, and yellow is one dot.
Scene: a JGC local checks a phone under the ruko canopy at 07.00, or a WFC regular sits at a round table at 15.00. It's bright daylight outside and cool, even LED light inside, so the theme is light. The wall must stay visibly darker than the cells, or the cells won't read as lit.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `dinding` (wall) | #C4C8CE | Page ground; section headings and wall text sit on it | tinta on dinding 7.66:1 AA |
| `rak` (shelf frame) | #E3E5E9 | Shelf unit frame, the bars between cells, the outer frame padding | tinta on rak 10.2:1; rak vs dinding 1.33 (edge read from the cells) |
| `lampu` (lit cell) | #F7F8FA | Cell interior. Light falloff runs #FFFFFF at the top to #ECEEF2 at the bottom. The LED line is #FFFFFF | tinta on lampu 12.1:1, on #ECEEF2 11.1:1 |
| `tinta` (navy chair) | #263248 | Every piece of text, primary button fill, secondary border, focus ring | white on tinta 12.9:1; focus ring vs dinding 7.66, vs lampu 12.1 (≥3:1) |
| `papan` (wall-sign taupe) | #A08868 | Product drawing tiles only | white line art on papan 3.38:1 (graphics ≥3:1). **No text on papan** (tinta 3.81:1 fails for body text) |
| `beruang` (bear yellow) | #F2D43D | The "buka sekarang" dot and nothing else | Decorative. Always next to its text label, with a 1.5px tinta ring (beruang on lampu is only 1.39) |

## 4. Type
Family: **Jost** (Google, variable). Load weights 300, 400 and 500 with `next/font/google`, `subsets: ["latin"]`, `display: "swap"`, as a CSS variable. It is the only family. Its geometric lowercase with a single-storey "a" and round "o" echoes the 2sons wordmark on the fascia, can and glass, and it is not on impeccable's list of default faces.
Weights: display and headings 300, lowercase. Body 400, sentence case. Buttons, prices, the hours status and the "coffee" in the lockup use 500.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 3.6rem + 8vw, 10rem)` (≈89px at 390, 119 at 768, 160 at 1440) | "2sons" in the hero lockup only |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)` (36 / 46 / 60) | Section h2s |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)` (22 / 25 / 28) | Hero line, "coffee" in the lockup, product names, hours, phone number, praise themes |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.15vw, 1.125rem)` (17 / 17 / 18) | Running text, notes, reasons list, address |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` (13 / 13 / 14) | Prices, captions, status, rating, footer, banner |

Ratios at 390 / 1440: display/head 2.5 / 2.7, head/lead 1.64 / 2.14, lead/body 1.29 / 1.56, body/small 1.31 / 1.29. All are at least 1.25.
Leading: display 0.9 (safe because "2sons" is always one line), head 1.1, lead 1.3, body 1.55, small 1.4. Tracking: display -0.02em, head -0.01em.
Lockup: `<h1>` holds `2sons` (`.t-display`) and, on its own line, `coffee` (`.t-lead`, weight 500), right-aligned to the end of "2sons" and 4–8px below it. Use an inline-grid sized to max-content and **no negative margin**, because the shots overlap check reads the line boxes. Headings are lowercase, matching the wordmark. Everything else is sentence case. Running text writes the name as "2Sons Coffee". Running text measure is at most 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 24px at ≥768 / 40px at ≥1024 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px. The hero alone uses 16px / 32px top padding |
| Shop variables | `--shelf-gap` 8px / 12px (frame bars and frame padding), `--cell-pad` 20px / 40px. Cells have square corners and no shadows |

- **Grid:** 12 columns at ≥1024. Shelves use those columns with `--shelf-gap`. Wall text uses the same columns with a 24px gap. At 768, shelves go two cells across and wall text stacks above its shelf.
- **Proximity:** a price sits 8px under its product name, inside the same cell. A caption sits 12px under its photo, inside the same cell. The address sits directly above "Petunjuk Arah". The rating sits under the "kata mereka." heading. Nothing is pinned to a far edge.
- **Wide screens:** at 1440 every section fills its width on purpose. Hero 7+5 columns, coffee 4 (wall) + 8 (shelf), food 8 (shelf) + 4 (wall), room text 5+6 above a 12-column photo shelf, praise 4 + 8 (two columns), visit 5+7, contact one full-width cell split 6+6.
- **Lists:** reasons use `--step-body`; praise themes and product names use `--step-lead`; prices use `--step-small`. Nothing in a list is set at head or display size.

## 6. Products on the page
Five products are shown, and all five are visible at 390 and at 1440:
1. **The blue drink in the 2Sons can**: owner-2 photo, cropped to the can and the yellow bear (`object-position` about 50% 60%). Tall cell on the coffee shelf. Caption "Si biru, dalam kaleng 2sons." plus `[MOCKUP]` takeaway.
2. **Espresso drink**: drawing of an iced coffee in a plain straight tumbler with ice cubes and no logo. Coffee shelf. `[MOCKUP]` price.
3. **`[MOCKUP]` Manual brew (V60)**: drawing of a V60 cone on a glass server with two drips. Coffee shelf.
4. **Beef cheese melt sandwich**: the largest tile on the page. Two toasted halves stacked, a wavy beef layer, cheese dripping over the crust. Food shelf.
5. **`[MOCKUP]` Egg-and-cheese toast**: a thick slice with a fried egg and a cheese drip at one corner. Food shelf.

Drawing spec: a `papan` tile with a corner radius of 16% of its size (the sign's shape). White monoline drawing, 3px stroke at a 240 viewBox, round caps and joins, no fills, no faces, no text. Each object rests on one horizontal table line, as on the sign. The tile has a soft white halo (`0 0 28px rgba(255,255,255,.5)`) to look backlit. Tile sizes: beef cheese melt 280px desktop / 200px phone; the others 168px / 112px. The drawings are inline SVG in `components/art/` with `role="img"` and an Indonesian `aria-label`. Photos of the place (owner-1, 3, 4, 5) do not count as products.

## 7. Sections
Legend: `~~~` is the LED strip on a lit cell. `*` marks a `[MOCKUP]` item (gets `data-mockup`). `[art]` is a papan tile drawing.

**1. Hero.** Purpose: the owner recognises the shop in five seconds, and a local sees open/closed, hours and directions in the first phone screen. Content: the lockup, one line, short address, Petunjuk Arah and Telepon, the hours cell, the shopfront photo (owner-1).
```
Hero: phone (390)       Hero: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| draf mockup bar  |    | draf mockup bar (navy, full width)                           |
| +--------------+ |    |                                                              |
| |~~~~~~~~~~~~~~| |    | +---------------------------------+------------------------+ |
| |2sons  (h1)   | |    | |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~| |
| |       coffee | |    | | 2sons        (h1, display)      | [owner-1 shopfront:    | |
| |Specialty     | |    | |             coffee (lead)       |  fascia sign, glass    | |
| |coffee di JGC | |    | |                                 |  doors, terrace        | |
| |Boulevard...  | |    | |                                 |  stools; 4:3 crop]     | |
| |Ruko New East | |    | |                                 |                        | |
| |No. 60 (small)| |    | | Specialty coffee di JGC         +------------------------+ |
| |[Arah] [Telp] | |    | | Boulevard. Santai, kopinya      |~~~~~~~~~~~~~~~~~~~~~~~~| |
| +--------------+ |    | | dibuat dengan bener. (lead)     | o buka sekarang        | |
| |~~~~~~~~~~~~~~| |    | | Ruko New East No. 60 (small)    | 07.00-21.00  (lead)    | |
| |o buka skrg   | |    | | [Petunjuk Arah]  [Telepon]      | setiap hari (small)    | |
| |07.00-21.00   | |    | +---------------------------------+------------------------+ |
| |setiap hari   | |    |   cols 1-7, rows 1-2              cols 8-12, rows 1 / 2      |
| +--------------+ |    | next heading peeks in at ~720px                              |
| |~~~~~~~~~~~~~~| |    +--------------------------------------------------------------+
| |[owner-1      | |
| | shopfront,   | |
| | 4:3 crop]    | |
|  ...fold 844...  |
+------------------+
```

**2. kopinya bener.** Purpose: show the coffee is serious, with the shop's own can as proof. Content: the h2 and the "specialty coffee" lead on the wall; the shelf holds the can photo, the espresso drink, and manual brew*.
```
Coffee: phone (390)     Coffee: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| kopinya bener.   |    |                                                              |
| (h2, on wall)    |    |                       +-----------------+------------------+ |
| Specialty coffee |    |  kopinya bener.       |~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~| |
| ... (lead)       |    |  (h2)                 | [owner-2: can   | [art] minuman    | |
| +--------------+ |    |                       |  on lit shelf,  |  espresso        | |
| |~~~~~~~~~~~~~~| |    |  Specialty coffee,    |  4:5 crop]      |  dipuji di ulasan| |
| |[owner-2 can, | |    |  diseduh serius       |                 |  mulai Rp 25rb*  | |
| | 4:5 crop]    | |    |  tanpa bikin          |                 +------------------+ |
| |Si biru, dalam| |    |  suasana kaku. (lead) |                 |~~~~~~~~~~~~~~~~~~| |
| |kaleng 2sons. | |    |                       | Si biru, dalam  | [art] manual     | |
| |bawa pulang*  | |    |                       | kaleng 2sons.   |  brew (V60)*     | |
| +--------------+ |    |                       | bawa pulang*    |  mulai Rp 35rb*  | |
| |~~~~~~~~~~~~~~| |    |                       +-----------------+------------------+ |
| |[art] minuman | |    |   cols 1-4 (wall)         cols 5-8          cols 9-12        |
| |      espresso| |    |   [art] = taupe tile left, text right, 24px gap              |
| |      Rp 25rb*| |    +--------------------------------------------------------------+
| +--------------+ |
| |~~~~~~~~~~~~~~| |
| |[art] manual  | |
| |   brew* V60  | |
| |      Rp 35rb*| |
| +--------------+ |
+------------------+
```

**3. bukan cuma kopi.** Purpose: show there is real food, led by the sandwich reviewers praised. The shelf is on the left and the text on the right, mirroring section 2 for rhythm.
```
Food: phone (390)       Food: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| bukan cuma kopi. |    |                                                              |
| Pilihan makannya |    | +------------------------+---------------+                   |
| banyak... (body) |    | |~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~|  bukan cuma kopi. |
| +--------------+ |    | |   [art: beef cheese    | [art: roti    |  (h2)             |
| |~~~~~~~~~~~~~~| |    | |    melt sandwich,      | telur & keju]*|                   |
| |  [art: beef  | |    | |    large tile 280px]   |               |  Pilihan makannya |
| |  cheese melt,| |    | |                        | Sarapan dari  |  banyak, bukan    |
| |  large tile] | |    | | Beef cheese melt       | jam 07.00.*   |  cuma camilan.    |
| |Beef cheese   | |    | | sandwich (lead)        |               |  (body)           |
| |melt sandwich | |    | | Dipuji di ulasan.      |               |                   |
| |mulai 45rb*   | |    | | Sandwich & makan berat |               |                   |
| +--------------+ |    | | mulai Rp 45rb* (small) |               |                   |
| |~~~~~~~~~~~~~~| |    | +------------------------+---------------+                   |
| |[art] roti    | |    |   cols 1-5                 cols 6-8        cols 9-12 (wall)  |
| |  telur keju* | |    +--------------------------------------------------------------+
| |  sarapan 07* | |
| +--------------+ |
+------------------+
```

**4. betah lama di sini.** Purpose: the room, and why people stay (WFC, friends, mahjong). This is the quiet passage: the text is open on the wall and the photos run larger.
```
Room: phone (390)       Room: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| betah lama di    |    |                                                              |
| sini. (h2)       |    | betah lama di sini. (h2)  - staf ramah     - main mahjong    |
| Pagi jam tujuh   |    | Pagi jam tujuh buat       - toilet bersih  - nongkrong santai|
| ... (lead)*      |    | takeaway, sore panjang    - meja buat WFC  - wi-fi, colokan* |
| - staf ramah     |    | buat laptop... (lead)*                                       |
| - toilet bersih  |    |   cols 1-5                cols 7-12, two columns             |
| - meja buat WFC  |    | +----------------------------+--------------+--------------+ |
| - main mahjong   |    | |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~|~~~~~~~~~~~~~~| |
| - santai         |    | | [owner-4: navy chairs,     | [owner-3:    | [owner-5:    | |
| - wi-fi, colokan*|    | |  round tables, wall sign;  |  lit shelf,  |  oak table,  | |
| +--------------+ |    | |  3:2 crop]                 |  records]    |  wishbone]   | |
| |~~~~~~~~~~~~~~| |    | | Kursi navy, meja bundar... | Rak menyala* | Meja kayu    | |
| |[owner-4 4:5] | |    | +----------------------------+--------------+--------------+ |
| |Kursi navy... | |    |   cols 1-6                     cols 7-9       cols 10-12     |
| +------+-------+ |    +--------------------------------------------------------------+
| |~~~~~~|~~~~~~~| |
| |[own3 |[own5  | |
| | 3:4] | 3:4]  | |
| |cap   |cap    | |
| +------+-------+ |
+------------------+
```

**5. kata mereka.** Purpose: proof from reviews. Six paraphrased themes with no names, no quote marks and no stars. "5,0 di Google, dari 35 ulasan" appears once, as text. No cells: it sits straight on the wall.
```
Praise: phone (390)     Praise: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| kata mereka.     |    |                                                              |
| (h2)             |    | kata mereka. (h2)    - Kopinya dibuat    - Stafnya ramah     |
| 5,0 di Google,   |    |                        dengan benar...     dan sigap.        |
| 35 ulasan        |    | 5,0 di Google, dari                                          |
|                  |    | 35 ulasan (small)    - Santai, enak buat - Pilihan makan     |
| - kopinya bener  |    |                        WFC, nongkrong.     banyak; beef      |
| - staf ramah     |    |                                            cheese melt.      |
| - santai, WFC    |    |                      - Toiletnya bersih. - Ada yang main     |
| - makan banyak,  |    |                                            mahjong.          |
|   beef cheese    |    |                                                              |
| - toilet bersih  |    |   cols 1-4             cols 5-8            cols 9-12         |
| - mahjong        |    |   paraphrased themes, lead size, no names, no quote marks    |
| (lead, on wall)  |    +--------------------------------------------------------------+
+------------------+
```

**6. kunjungi kami.** Purpose: get there. Full address, hours in Indonesian, directions, and a map embed.
```
Visit: phone (390)      Visit: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| kunjungi kami.   |    |                                                              |
| (h2)             |    | kunjungi kami. (h2)                                          |
| +--------------+ |    |                                                              |
| |~~~~~~~~~~~~~~| |    | +----------------------+-----------------------------------+ |
| |Ruko New East,| |    | |~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| |
| |Jl. JGC Blvd  | |    | | Ruko New East,       | [Google Maps embed, 440px tall,   | |
| |No. 60, Cakung| |    | | Jl. Jakarta Garden   |  lazy iframe]                     | |
| |Timur, 13910  | |    | | City Boulevard No. 60|                                   | |
| |Setiap hari   | |    | | Cakung Timur, Jakarta|                                   | |
| |07.00-21.00   | |    | | 13910 (body)         |                                   | |
| |[    Arah    ]| |    | | Setiap hari          |                                   | |
| +--------------+ |    | | 07.00-21.00 (lead)   |                                   | |
| |~~~~~~~~~~~~~~| |    | | [Petunjuk Arah]      |                                   | |
| |[map embed    | |    | +----------------------+-----------------------------------+ |
| | 4:3]         | |    |   cols 1-5               cols 6-12                           |
| +--------------+ |    +--------------------------------------------------------------+
+------------------+
```

**7. hubungi kami.** Purpose: the close. Call, WhatsApp* and directions in one full-width lit cell, then the footer on the wall.
```
Contact: phone (390)    Contact: desktop (1440)
+------------------+    +--------------------------------------------------------------+
| +--------------+ |    |                                                              |
| |~~~~~~~~~~~~~~| |    | +----------------------------------------------------------+ |
| |hubungi kami. | |    | |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| |
| |(h2)          | |    | | hubungi kami. (h2)          0815-9133-886 (lead, tel:)   | |
| |Telepon atau  | |    | | Telepon atau WhatsApp buat  [Telepon] [WhatsApp*]        | |
| |WA buat tanya | |    | | tanya meja & pesanan.*                                   | |
| |meja...*      | |    | |                             [Petunjuk Arah]              | |
| |0815-9133-886 | |    | +----------------------------------------------------------+ |
| |[  Telepon   ]| |    |   cols 1-6 (text)              cols 7-12 (actions)           |
| |[ WhatsApp*  ]| |    |                                                              |
| |[    Arah    ]| |    | footer on wall (small): 2Sons Coffee . Ruko New East No. 60  |
| +--------------+ |    | . Setiap hari 07.00-21.00 . Draf mockup                      |
| footer (small):  |    +--------------------------------------------------------------+
| name, address,   |
| hours, draf      |
+------------------+
```

## 8. Motion
**Signature: "rak menyala"** (hero only, once, on load).
- What: each of the three hero cells has a `.cell-light` layer (a 2px white LED line plus the top light falloff) that goes from opacity 0 to 1, and a `.cell-veil` (`dinding` at 0.35 opacity) that goes from 0.35 to 0. Order: name cell, shopfront, hours cell. That is the visual order at desktop and also reads top-down on phone.
- Timing: starts 0.15s after mount. In each cell the light runs 0.5s `expo.out` and the veil 0.7s `power2.out`, with 0.12s between cells. Everything is done by about 1.1s (last veil: 0.15 + 0.24 + 0.7s). Opacity only.
- Nothing is hidden. The veil only dims, and tinta stays above 9:1 through it. An inline `<head>` script sets `data-motion="on"` on `<html>` before paint, and only when reduced motion is off. The dim starting state is CSS gated on that attribute. A CSS safety animation sets the lit state at 2.5s if GSAP never runs. With no JS the page is lit.
- Reduced motion: the attribute is never set, so the page is lit from the first frame. No veil and no GSAP.

**Supporting motion, kept quiet:** one `Reveal` per section for sections 2–7, wrapping the whole section block (20px, 0.6s, `power2.out`, once at "top 85%"). Nothing is staggered inside shelves or lists. Buttons respond on hover with an overlay pseudo-element going from opacity 0 to 1 in 150ms, and on press with `translateY(1px)` in 100ms. LED strips outside the hero are static. No hover lift on cells, no parallax.

Tokens for `lib/motion.ts`: `duration { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.1 }`, `lights { delay: 0.15, strip: 0.5, veil: 0.7, stagger: 0.12, veilFrom: 0.35 }`, `ease` as in the starter, `distance.reveal: 20`.

## 9. What makes it this shop
1. The page is their lit cubby shelf: a silver frame, white cells and an LED strip along every top edge. The lights switch on at load, like opening up at 07.00.
2. The name is set the way it appears on their fascia, can and glass: a big lowercase "2sons" with a smaller "coffee" tucked under its end.
3. The products are drawn in the white-line-on-taupe style of their own backlit wall sign. Their real 2Sons can sits in a cubby beside the drawings, like the bear on the shelf. The page colours are taken from the room: wall grey, navy-chair ink, and one dot of bear yellow for "buka sekarang".

## 10. Avoid
- **The category default:** cream ground, serif display, latte-art hero, terracotta accent, coffee-bean icons, brown espresso palette. Also its opposite: a dark moody room with neon glow.
- **The shelf turning into a card grid.** No rounded cards, drop shadows, wall-coloured gaps between cells, equal rows or hover lifts. Cells share silver walls and come in different sizes.
- **Grey mush.** Tinta is the only text colour, and no muted grey text goes on the wall. The wall must stay darker than the cells.
- **Overdone glow.** The LED is a 2px white line with a soft falloff. Never coloured, never neon, never behind text.
- **Cute drift in the drawings.** No faces on food, no steam swirls, hearts or stickers. One line weight.
- **Invented content.** No "our story" or founders (the name's story is a question for the owner). No quoted reviews, reviewer names or star rows. Kopi gula aren is not featured.
- **Layout failures.** Hours or Petunjuk Arah below the phone fold. Text on papan. "coffee" overlapping "2sons". The lights-on effect repeated on other shelves.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. The lowest ratio is body/small at 1.29. Lists top out at `--step-lead`, which is below `--step-head` at every width.
- [x] Max content width set (1200px); no detail pinned far from what it describes. Prices sit 8px under names, captions 12px under photos, and the address is directly above Petunjuk Arah, all inside the same cell.
- [x] Every section has a desktop wireframe that uses the width on purpose (7+5, 4+8, 8+4, 5+6 over 12, 4+8, 5+7, 6+6).
- [x] At least 3 products shown (food and product shops): five (can photo plus four drawings), visible at both 390 and 1440.
- [x] Within motion-rules.md: one signature moment, opacity only, about 1.1s, nothing hidden, reduced motion is static, section-level reveals only, no React Bits.
- [x] Brief is decisions, not essays (2–4 pages of prose; the wireframes are the required appendix).
