# Design brief: ULUSALU coffee and roastery

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"Dinding bilah" (the slat wall).** The page is built from ULUSALU's own bar wall: black slats
hanging at stepped lengths over white brick, a warm lamp at the foot of each. Around it are the
rooms of the shop: the deep red of the drum roaster, the lit pastry case with black tags, and the
tall windows full of garden green. It fits because no other cafe has this wall, and it shows a
bright roastery that cooks, not a brown coffee cliché.
**Signature moment:** on load, the hero's lamps switch on one after another along the slat wall,
like the bar lights at 07:00, and the sweep ends on today's hours ("Buka sekarang").

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Slat wall with stepped lamps, red drum roaster, pastry case with black price tags, tall windows onto greenery, black ULUSALU cup (photos); hours, rating, products, Indonesian copy (brief) |
| owner-1.jpg | The only on-site photo: hero, uncropped 3:4 on desktop, 5:4 crop on phone (cup logo always visible) |
| impeccable | Persuade mode; named the rut (cream + serif + beans + latte art, or moody black + gold); seven candidates from the shop's world, slat wall chosen; Full-palette colour committed by region; banned default faces; one authored focal motion; "prove, don't claim" led to the hours drawn as slats. concept-seed not run (launcher downloads a binary outside docs/): seed: none (unavailable) |
| motion-rules.md | One signature moment, section-level reveals only, transform and opacity only, reduced motion means none |
| React Bits | None (see TRD) |

Candidates weighed, by resonance: slat wall (chosen); black ULUSALU cup; pastry case with black
tags (kept for Favorit); window wall onto garden (kept for keluarga & WFC); roast-log curve; kraft
bean-bag label (the specialty-coffee rut); layered aren latte.

## 3. Palette (4–6 named colours)
Scene: a JGC resident checks a phone in daylight, and the shop is white and glassy by day, so
the ground is light. Strategy: Full palette, with colour owning whole sections, never sprinkled.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `bata` | #F4F4F1 | Page ground (white brick), text on dark fields | bilah on bata 16.5:1 |
| `beton` | #DCDBD7 | Concrete sections (Menu, Kata mereka), plate shadows | bilah on beton 13.2:1; `bilah-muted` #5A5854 on beton 5.1:1, on bata 6.4:1 |
| `bilah` | #161514 | Slats, all text on light, primary buttons, Hubungi field | bata on bilah 16.5:1 |
| `lampu` | #E9A23B | Lamp light only: glows, status dot, today's slat. Text only on bilah | lampu on bilah 8.4:1; on bata 2.0:1, never text on light |
| `roaster` | #6B1A1C | Roaster section field; "Pedas" chip text on light | bata on roaster 10.6:1; roaster on bata 10.6:1, on beton 8.5:1 |
| `taman` | #3D5E3A | Keluarga & WFC field (the window) | bata on taman 7.1:1 |

The red and green fields are never adjacent: Favorit and Menu sit between them.

## 4. Type
Sofia Sans Extra Condensed (display, heads, nav wordmark; tall and narrow like the slats) and
Sofia Sans (everything else), both via `next/font/google`, latin subset, `display: swap`.
Extra Condensed at 700 (display 800); Sofia Sans at 400/600.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.25rem, 0.75rem + 18vw, 11rem)`, lh 0.9, uppercase, nowrap | Hero "ULUSALU" only (~70px at 320, ~82px at 390, 176px at 1440) |
| `--step-head` | `clamp(2.25rem, 1.5rem + 2.5vw, 3.5rem)`, lh 1.05 | Section headings, sentence case, Extra Condensed 700 |
| `--step-lead` | `clamp(1.4375rem, 1.25rem + 0.75vw, 1.75rem)`, lh 1.25 | "coffee and roastery", menu category names, window-pane titles, paraphrased reviews, rating, phone number |
| `--step-body` | `1.125rem` (18px), lh 1.55 | Running text, menu items, favourite tags (600), buttons (600) |
| `--step-small` | `0.875rem` (14px), lh 1.4 | Captions, favourite notes, menu descriptions, slat labels, shelf labels, footer |

Ratios: 18/14 = 1.29; 23/18 = 1.28 (phone) and 28/18 = 1.56 (desktop); 36/23 = 1.57 and 56/28 = 2.0;
display/head ≥ 2.2. "ULUSALU" measures about 3.8em at weight 800, so it fits one line from 320px
(266px of 280) to 1440px (669px in cols 1–7).
The builder verifies this at 320, 390 and 1440. No small tracked mono labels.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1240px, 12-column grid, 24px column gap |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.5rem + 3vw, 3rem)` → 20px / 48px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.5rem + 5vw, 7rem)` → 64px / 112px |

Spacing scale is 4-based (4, 8, 12, 16, 24, 32, 48, 64), with more space above a heading than below it.
Proximity, in numbers: photo caption 12px under the photo; shelf tag 8–12px under the shelf line,
note 8px under the tag; menu price 12px after the item name on the same line (never a right
column); "Pedas" chip 8px after the name; slat labels 8px under each slat foot; review topic 8px
above its paraphrase; status dot 8px before its text.

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
Ten product visuals. The real one is **owner-1.jpg** (Nasi Goreng with a hot coffee in the black
ULUSALU cup) in the hero. Favorit pelanggan adds **8 flat illustrations** standing on two
pastry-case shelves:
- *Dari bar & dapur:* Aren Latte (tall glass in three bands: aren amber at the bottom, milk, then espresso, with a straw); Kopi hitam dingin (tall glass of dark coffee, square ice, on a round wooden coaster); Mushroom Cream Soup (brown bowl on a white plate with a brown rim, two slices of garlic bread with green flecks); Nasi Goreng (black plate, golden rice dome, fried egg, kerupuk, tomato slice and lettuce).
- *Dari etalase:* Choco Banana (pastry with chocolate drizzle and banana slices); Tiramisu (square slice: cocoa top, cream, coffee sponge); Risoles (two golden crumbed rolls); Sosis Solo (two pale-yellow rolled crepes, seam visible).

Dari roaster kami adds the **bean bag** ([MOCKUP]: a kraft bag with a white label reading
"ULUSALU House Blend · 200 g") beside its price, plus a white line drawing of the **drum roaster**.
Style: front elevation, as seen through the glass of the case. viewBox 0 0 200 200, baseline
y=184, 2.5px `bilah` stroke, flat fills only. Illustration-only tints: espresso #4A2C1D, aren
#A86A2C, milk #F1EBDF, crust #D9A55B, cocoa #3B2418, kraft #B88E5E (bean bag only). One flat `beton` shadow ellipse per item; no
gradients, faces or emoji. Shown at 160px on desktop and 120px on phone. Each section marks its
drawings once with "Ilustrasi" (small) and `data-mockup`.

## 7. Sections
Phone at left, desktop at right. `*` = lit lamp, `[M]` = mockup item.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +---------------------------------------------------------------+
| Draf banner      |     | Draf banner                                                   |
| ULUSALU [Telepon]|     | ULUSALU                     Favorit  Menu  Kunjungi  [Telepon]|
||| | | | | | | | ||     | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |  slats, full bleed,
|| * | | * | | * | |     | | * | | | * | | | | | | * | +-----------+ | * | | | | | * | | |  brick behind,
||   *   |   * |  *|     | *     *   |   *   | *   *   | owner-1   |   *   | * | *   * | *  height 300
| +--------------+ |     |                           | 3:4,      | *       *              |
| | owner-1 5:4  | |     | ULUSALU (display, cols 1-7)| cols 9-12 |                       |
| +--------------+ |     | coffee and roastery (lead)| top inside|                       |
| caption (small)  |     | Kopi dari roaster kami,...| slat band |                       |
| ULUSALU          |     | * Hari ini, Kamis 07.00-22.00 · Buka   +-----------+          |
| coffee and roast.|     | [Petunjuk Arah] [Telepon]  caption 12px under photo           |
| * Buka · 07-22   |     +---------------------------------------------------------------+
| [Arah] [Telepon] |     Phone order puts both buttons above 660px; the [M] line sits under them.
| Kopi dari...[M]  |
+------------------+
```
```
Dari roaster kami (roaster field)
+------------------+     +---------------------------------------------------------------+
| Dari roaster kami|     |  +---------------------------+   Dari roaster kami (head)     |
| body: roaster by |     |  | drum roaster, white line  |   Roaster by the window; [M]   |
| window; [M] own  |     |  | drawing, cols 1-6         |   we roast what we pour        |
| +--------------+ |     |  | hopper, drum, chimney,    |   +-----+ ULUSALU House Blend  |
| | roaster line | |     |  | cooling tray              |   | bag | 200 g · mulai Rp 85rb  |
| +--------------+ |     |  +---------------------------+   +-----+ [M], 12px from bag   |
| [bag] House Blend|     |                                  Manual brew: Gayo, Toraja [M] |
| 200 g · Rp 85rb  |     +---------------------------------------------------------------+
+------------------+
```
```
Favorit pelanggan (bata, pastry case)
+------------------+     +---------------------------------------------------------------+
| Favorit pelangg. |     | Favorit pelanggan (head, 1-6)   Yang disebut pelanggan di     |
| intro (body)     |     |                                 ulasan Google. (body, 7-12)   |
| Dari bar & dapur |     | Dari bar & dapur (small)                                      |
| [ill]    [ill]   |     |   [ill]          [ill]          [ill]          [ill]           |
| ====shelf+light==|     | =========== shelf line + lampu strip, full container ======== |
| [Aren L] [Kopi h]|     |   [Aren Latte]   [Kopi hitam]   [Mushroom..]   [Nasi Goreng]   |
| note     note    |     |   note (small)   note           note           note            |
| (2 more, 2 cols) |     | Dari etalase: Choco Banana · Tiramisu · Risoles · Sosis Solo  |
| Dari etalase 2x2 |     |   same 4-column shelf                       Ilustrasi (small) |
+------------------+     +---------------------------------------------------------------+
```
```
Menu (beton)
+------------------+     +---------------------------------------------------------------+
| Menu             |     | Menu (head)    Kopi & teh      Makanan berat    Pastry &       |
| Harga contoh [M] |     | cols 1-3       (lead) 4-6      (lead) 7-9       camilan 10-12  |
| Kopi & teh       |     | Harga contoh   Aren Latte     Nasi Goreng      Choco Banana   |
| Aren Latte Rp 28 |     | [M] (small)      Rp 28rb [M]    Rp 40rb [M]    Tiramisu       |
|  desc (small)    |     |                Kopi hitam      Mushroom Cream   Risoles        |
| Makanan berat    |     |                Manual brew[M]  Spaghetti Aglio  Sosis Solo     |
| Spaghetti A.O.   |     |                Teh Twinings    Olio [Pedas]                   |
|   [Pedas]        |     +---------------------------------------------------------------+
+------------------+
```
```
Untuk keluarga & WFC (taman field, drawn as the window wall; mullions 6px bata)
+------------------+     +---------------------------------------------------------------+
| Untuk keluarga   |     | Untuk keluarga & WFC (head, 1-6)  intro: bright room, tall    |
| & WFC            |     |                                   windows onto greenery (7-12)|
| intro            |     | +-------------+-------------+-------------+-------------+    |
| +--------------+ |     | | Pagi        | Kerja       | Keluarga    | Malam       |    |  transom row
| | Pagi         | |     | +-------------+-------------+-------------+-------------+    |
| | Buka mulai   | |     | | Buka mulai  | Colokan di  | Favorit     | Sampai      |    |
| | 07.00 (lead) | |     | | 07.00 (lead)| beberapa    | anak-anak   | tengah malam|    |
| | detail       | |     | | detail body | meja        | detail      | Jum & Sab   |    |
| +--------------+ |     | +-------------+-------------+-------------+-------------+    |
| (3 more panes)   |     +---------------------------------------------------------------+
+------------------+
```
```
Kata mereka (beton)
+------------------+     +---------------------------------------------------------------+
| Kata mereka      |     | Kata mereka (head)  | Kopi (small)          | Keluarga        |
| 4,7 di Google ·  |     | 4,7 di Google ·     | Aren latte terbaik di | Nyaman, enak,   |
| 91 ulasan (lead) |     | 91 ulasan (lead)    | JGC... (lead)         | terjangkau...   |
| Diringkas... (sm)|     | Diringkas dari      +-----------------------+-----------------+
| Kopi             |     | ulasan Google (sm)  | WFC                   | Suasana         |
| paraphrase (lead)|     | cols 1-4            | Enak untuk WFC...     | Tenang, colokan |
| (3 more)         |     |                     | 2x2 grid, cols 5-12                     |
+------------------+     +---------------------------------------------------------------+
```
```
Kunjungi kami (bata; hours drawn as slats)
+------------------+     +---------------------------------------------------------------+
| Kunjungi kami    |     | Kunjungi kami (head, 1-6)       +---------------------------+ |
| address (body)   |     | Jl. JGC Boulevard Unit A1 ...   |                           | |
| food garden JGC  |     | Di area food garden JGC         |   Google Maps embed,      | |
| [Petunjuk Arah]  |     | 07.00 ------------------------  |   4:3, cols 7-12,         | |
| 07.00 ---------- |     |  |  |  |  |  |  |  |             |   1px bilah border        | |
| | | | | | | |    |     |  |  |  |  |  |  |  |             |                           | |
| * * * * | | *    |     |  *  *  *  *  |  |  *             |                           | |
|         * *      |     |              *  *                 +---------------------------+ |
| Sen ... Min      |     | 22.00 x4, 24.00 x2, 22.00 / Sen..Min (small, 8px under foot)  |
| hours list (dl)  |     | Senin–Kamis 07.00–22.00 · Jumat–Sabtu 07.00–24.00 · Minggu ... |
| [map 4:3]        |     | [Petunjuk Arah]                                               |
+------------------+     +---------------------------------------------------------------+
```
Slat length is proportional to hours open from 07.00, so Friday and Saturday hang longer.
Today's slat has its lamp lit and the label "Hari ini". Without JS no slat is highlighted.
```
Hubungi kami (bilah field, like the cup) + footer
+------------------+     +---------------------------------------------------------------+
| Hubungi kami     |     | Hubungi kami (head, 1-6)          0812-8058-2016 (lead, link) |
| line [M]         |     | Telepon dulu kalau mau tanya      [Telepon] [WhatsApp][M]      |
| 0812-8058-2016   |     | menu hari ini. [M]                [Petunjuk Arah]  (7-12)     |
| [Telepon]        |     | ------------------------------------------------------------- |
| [WhatsApp][Arah] |     | ULUSALU coffee and roastery · address · hours · Draf (small)  |
| footer (small)   |     +---------------------------------------------------------------+
+------------------+
```
Hero specifics: on desktop the slats run full-bleed, 24px wide on a 60px pitch, 300px band; on
phone they are 14px on a 36px pitch, 72px band. Lengths step in pairs like the real wall and get
shorter toward the photo. The brick texture (1px #E6E5E1 mortar, running bond 64×22) appears
only in slat bands. The photo overlaps the band by 180px (desktop) or 40px (phone); slats pass
behind it. The phone crop is 5:4 with `object-position: 50% 88%`, so the whole cup and plate stay in frame.
The static hours line reads "Buka setiap hari mulai 07.00". When JS runs it swaps to today's line
(Asia/Jakarta time) inside a reserved one-line min-height: "Buka sekarang · 07.00–22.00" on phone,
or "Hari ini, Kamis · 07.00–22.00 · Buka sekarang" on desktop. Phone height budget: banner,
nav 56, slat band 72, photo 280 (−40 overlap), one-line `captionShort`, display, sub, hours, then the
buttons end by 660px. If they don't, shrink the slat band first (min 64px), then the photo to 4:3.

## 8. Motion
**Signature: "lampu menyala".** Hero only, on load after hydration (hero text and photo are never
hidden). Each lamp glow under a slat goes from opacity 0 → 1 and scaleY 0.92 → 1 (origin top),
0.45s, power2.out, staggered 0.03s left to right (about 0.8s across the wall). At about 0.9s the
status dot and "Buka sekarang / Sedang tutup" fade up 8px in 0.4s. Total about 1.3s. Slats don't
move. Lamps start dark only under a `js` class set by an inline head script, so with JS off they
are simply on. Reduced motion: lamps on, status shown, no tween.
**Supporting:** sections 2–8 each fade up 20px once, 0.6s, power2.out, ScrollTrigger at top 85%.
There is no per-item stagger (shelves, panes and menu columns arrive with their section). The
today slat in Kunjungi is a static highlight. Buttons swap colour instantly on hover; only
transforms transition (translateY -1px on hover, scale 0.98 on press, 180ms ease-out). Lenis stays at starter defaults.
**Tokens for `lib/motion.ts`:** `reveal { y: 20, duration: 0.6, ease: "power2.out", start: "top 85%" }`,
`lamps { delay: 0.15, duration: 0.45, stagger: 0.03, ease: "power2.out", fromScaleY: 0.92 }`,
`status { at: 0.9, y: 8, duration: 0.4 }`, `press { duration: 0.18 }`.

## 9. What makes it this shop
1. The hero is their bar wall (black slats at stepped lengths, warm lamps on white brick), and the opening sweep turns those lamps on.
2. Opening hours drawn as seven of those slats, with Friday and Saturday hanging longer to midnight and today's lamp lit.
3. The red of their drum roaster as a whole section, their pastry case with black tags for the favourites, and their windows in garden green for families and WFC. The "Pedas" chip on the Aglio Olio answers the one complaint in the reviews.

## 10. Avoid
- The coffee rut: cream or brown ground, serif display, bean icons, latte-art hero, "crafted with passion" copy. Also its opposite: moody near-black with gold.
- Kraft-paper textures, stamp badges and tracked mono kickers. Kraft appears only on the bean bag.
- The condensed-type brutalist look: no hard offset shadows, black boxes or thick borders on cards.
- Slats becoming wallpaper: they appear only in the hero and the hours chart, never as dividers elsewhere.
- Lamps that look like neon (no saturated glow, no blur filter), loop, pulse, or follow the cursor.
- Mixed illustration styles, cartoon faces, emoji, or a stretched or cropped cup logo.
- Prices or tags pinned to the far edge of a row; a menu set at heading size.
- Verbatim review quotes, reviewer names, star graphics; any photo-*.jpg on the page.
- English copy leaking into UI text (only menu names and the listing name stay English).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
