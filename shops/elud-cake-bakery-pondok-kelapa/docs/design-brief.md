# Design brief: Elud Cake & Bakery Pondok Kelapa

## 1. Concept
The page is built from Elud's own signs (the lemon-and-brick fascia, the red-bordered shelf plaques,
the magenta markdown tags), so the owner sees the shop they stand in and visitors see bread, cake and price.
Signature: on load the hero tag for Roti Smoke Beef marks itself down: a strike crosses Rp 15.000,
Rp 9.000 drops in, and the tag nudges.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Storefront sets palette and display face (lemon board, black band, brick band, wood-type "ELUD BAKERY"); interior gives plaques, travertine trays, bagged buns, magenta tags; cake photo gives tart details; brief and listing give every name, price, hour, link and the rating. |
| impeccable | Persuade mode. New-work derivation by hand (launcher not run: it writes outside `docs/`). Of seven candidates (sign system, promo flyer, struk kasir, cake order nota, bread bag, Brownies box, name plaque), the shop's own sign system won. Committed full-palette bands; faces outside the default list; calibration checks in §10; one focal motion from the product. |

## 3. Palette (6 named colours)
Light grounds, bright tropical daylight: people read this on a phone outside or in the car.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `lemon` | #F2E94E | hero panel, Produk baru ground, primary buttons on brick/ink, name on brick | ink on lemon 14.1; brick on lemon 5.95; tag on lemon 5.2 |
| `brick` | #A3201C | fascia band, Kue ground, footer; plaque border and h2 text | lemon on brick 5.95; white on brick 7.55; brick on white 7.55 |
| `ink` | #1A1712 | top strip, Kunjungi ground, text on light grounds, primary button on lemon | ink on white 17.9; white on ink 17.9; lemon on ink 14.1 |
| `tag` | #B3145A | price tags only. Never decoration, never a button | white on tag 6.64 |
| `white` | #FFFFFF | Roti and Kata mereka grounds, plaques, fridge panel, draft banner | n/a (ground) |
| `tray` | #ECE7DF | travertine trays, fridge rack lines, cake boards | ink on tray 14.5; tag on tray 5.4 |

Never: lemon text on white (1.27), ink text on tag (2.69). Buttons per ground: on lemon, ink fill +
lemon text (primary), 2px ink border + ink text (secondary); on brick or ink, lemon fill + ink text
(primary), 2px white border + white text (secondary). Focus: 3px outline, ink on light grounds,
lemon on brick or ink.

## 4. Type
Two families via `next/font`: **Holtwood One SC** (19th-century wood-type poster face, wide and
wedge-serifed like the fascia letters) for the name, the rating numeral and the footer name, and
nothing else. **Archivo** (late-19th-century grotesque, variable weight 400–800) for everything
else; plaques use 800 caps like the shop's interior signs.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(6rem, 2.657rem + 13.71vw, 15rem)` (96→240px) | "ELUD" only. Line height 0.9: one word, 3.28em wide = 315px at 96px in a 350px column |
| `--step-head` | `clamp(1.875rem, 1.364rem + 2.095vw, 3.25rem)` (30→52px) | plaque h2 (Archivo 800 caps, tracking 0.02em, lh 1.1), rating "4,7", footer name, hero tag new price |
| `--step-lead` | `clamp(1.375rem, 1.236rem + 0.5714vw, 1.75rem)` (22→28px) | "Cake & Bakery" (Holtwood), section leads (Archivo 500, lh 1.3), item-tag prices, paraphrased reviews, hero tag old price |
| `--step-body` | `clamp(1.0625rem, 1.039rem + 0.09524vw, 1.125rem)` (17→18px) | running text, product names on tags (700), buttons (700), shelf-sign names (700 caps) |
| `--step-small` | `0.8125rem` (13px) | top strip, banner, "Harga dapat berubah", field labels, old prices on item tags |

Ratios at 390 / 1440: head/lead 1.36 / 1.86, lead/body 1.29 / 1.56, body/small 1.31 / 1.38.
All clamps run over the same 390→1440 range, so the ratios hold between. Body line height 1.55,
measure ≤ 60ch. "Cake & Bakery" is set in lowercase so Holtwood's small caps draw it like the logo.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at 768 / 40px at 1024+ |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (768+) |

- Spacing scale 4, 8, 12, 16, 24, 32, 48, 64. Plaque to content: 32px phone, 48px desktop.
- Grounds are full-bleed on `<section>`; content in `<Container>`; 12-column grid from `lg` (1024).
- **Plaque (h2):** white fill, 3px brick border, radius 10px, padding 10px 20px, left-aligned with
  the container. Two 1px "wires" rise 28px from 20% and 80% of its width (ink 35% on light grounds,
  white 50% on brick or ink), `aria-hidden`.
- **Tray card:** `tray` fill, radius 16px, inset ring `0 0 0 6px` ink at 4%. The tag overlaps the
  tray's lower-left edge (left 12px, bottom -14px, rotate -3deg), so the tag touches the bun it prices.
- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
No owner photos, so every product is a flat SVG illustration (`role="img"`, `aria-label`
"Ilustrasi …" so nobody mistakes it for a photo). **11 products shown.**

Style: flat shapes, no outlines (cocoa lines only where the real cake has chocolate lines), 3/4
front view, light from top-left: one highlight shape and one ground shadow (ink 10%) per item. No
gradients, faces or sparkles. viewBox 240×180 (cakes 240×200). Food tones (illustration only):
crust #C9772F, crumb #F7DCA8, cocoa #4A2416, fan orange #EE9B32, plus palette colours.
**Bagged buns** share one bag: a pouch in white at 45% opacity with a printed band (brick stripe
over lemon stripe, like Elud's printed bags) and a folded end. Only the bun inside changes.

| Product | Where | Drawing | Source |
|---|---|---|---|
| Roti Smoke Beef | hero tray, Roti | bagged split roll, beef slices (brick 70%), white mayo zigzag | photos |
| Roti Banana Crumble | Roti | bagged round bun, crumb dots, two lemon banana slices | photos |
| Roti Cokelat | Roti | bagged round bun, cocoa drizzle | photos |
| Roti keju | Roti | bagged round bun, lemon cheese shreds | review 2; [MOCKUP] name |
| Tart ulang tahun | Kue (largest) | white cylinder on tray board, cocoa drip scallops, orange fan, cherries on two rosettes, choco stick | photos |
| Blackforest | Kue | cocoa cake, white cream top and piped edge, shavings, brick cherries | photos (sign) |
| Brownies Bakar Spesial | Kue | lemon box in 3/4, cocoa band, blank white label | photos |
| Soft Sourdough | Produk baru | round crumb boule, one curved score, white flour dots | photos |
| Salt Bread Original | Produk baru | glossy rolled roll, white salt flakes | photos |
| Strudel | Produk baru | rectangular pastry, crumb lattice over brick filling | photos |
| Pizza Cinta | Produk baru | heart-shaped pizza: crust rim, brick sauce, lemon cheese, cocoa dots | photos; [MOCKUP] Elud's own |

## 7. Sections
Grounds in order: hero (ink, brick, lemon) → Roti (white) → Kue (brick) → Produk baru (lemon) →
Kata mereka (white) → Kunjungi (ink) → footer (brick). `[M]` = rendered with `data-mockup`.

**Hero (fascia).** Purpose: recognition and directions in the first screen. Content: PRD hero row.
Phone: Petunjuk Arah sits around 520px from the top, above the 844 fold. The strip is one line on phone.
```
Hero: phone (390)         Hero: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
| draft banner (white) |  | draft banner (white, one line)                                   |
|INK TOKO ANEKA KUE &… |  |INK TOKO ANEKA KUE & ROTI DISKON          PUSAT KUE ULANG TAHUN & TART|
+----------------------+  +------------------------------------------------------------------+
|BRICK ELUD (96)       |  |BRICK  ELUD  (display 240, lemon,         Cake & Bakery (lead)    |
| Cake & Bakery (lead) |  |        ~790px wide)                       Pondok Kelapa,          |
| Pondok Kelapa, JT    |  |                                           Jakarta Timur (body)    |
+----------------------+  +------------------------------------------------------------------+
|LEMON                 |  |LEMON cols 1-5                 cols 6-12                          |
| Roti segar dan kue   |  | Roti segar dan kue ulang     +--tray----------------------------+|
| ulang tahun, setiap  |  | tahun, setiap hari. (lead)   |    [Roti Smoke Beef in its bag]  ||
| hari. (lead)         |  | Buka setiap hari 06.15–22.00 |[TAG Roti Smoke Beef              ||
| Buka setiap hari     |  | Sudah buka sebelum jam ... M | ~Rp 15.000~  Rp 9.000]           ||
| 06.15–22.00 (700)    |  | [Petunjuk Arah] [Telepon]    +----------------------------------+|
| Sudah buka ... [M]   |  |                              Harga dapat berubah. (small)        |
|[Petunjuk A.][Telepon]|  +------------------------------------------------------------------+
| +-tray-------------+ |
| | [Smoke Beef bag] | |
| |[TAG ~15.000~     | |
| |   Rp 9.000]      | |
| +------------------+ |
| Harga dapat berubah. |
+----------------------+
```
Brick band: stacked below `xl`; from `xl` (1280), ELUD left with "Cake & Bakery" and the location
stacked to its right, bottom-aligned to ELUD's baseline (measured: fits with 40px gap at 1280).
h1 accessible name "Elud Cake & Bakery". Strip right phrase hidden below `lg`.

**Roti hari ini.** Purpose: the bread and the value. Content: PRD row.
```
Roti: phone (390)         Roti: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|WHITE  |    |         |  |WHITE  |       |                                                  |
| [ROTI HARI INI]      |  | [ ROTI HARI INI ]  (cols 1-5)   lead [M] (cols 6-12, bottom-aligned)|
| lead [M]             |  | +--tray----+  +--tray----+  +--tray----+  +--tray----+           |
| +-tray--+ +-tray--+  |  | | SmokeBeef|  | Banana   |  | Cokelat  |  | Keju     |           |
| |SmkBeef| |Banana |  |  | [TAG ~15~ 9.000][TAG ~15~ 9.000][TAG Roti Cokelat][TAG Roti keju] |
| [TAG]   [TAG]     |  |  |                                            Dipuji pelanggan di     |
| +-tray--+ +-tray--+  |  |                                            ulasan Google (small)   |
| |Cokelat| | Keju  |  |  | Harga dapat berubah. (small, 16px under the grid)               |
| [TAG]   [TAG]     |  |  | Rak lain di toko: [CROISSANT] [ROLL] [ROTI MANIS mulai Rp 8.000 M]|
|         Dipuji ...   |  |   [BLACKFOREST]   Juga ada roti sobek, roti abon, ... [M]       |
| Harga dapat berubah. |  +------------------------------------------------------------------+
| Rak lain di toko:    |
| [CROISSANT] [ROLL]   |
| [ROTI MANIS ...M]    |
| [BLACKFOREST]        |
| Juga ada ... [M]     |
+----------------------+
```

**Kue ulang tahun & tart.** Purpose: birthday cakes and the order call. Tags need a white panel
(magenta on brick blurs), so the products sit in a white "fridge" with tray-colour rack lines.
```
Kue: phone (390)          Kue: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|BRICK [KUE ULANG      |  |BRICK [ KUE ULANG TAHUN & TART ]   Pusat kue ulang tahun & tart:  |
|  TAHUN & TART]       |  |        (cols 1-5)                  satu dinding kulkas penuh kue.|
| lead (white)         |  |                                    Siap dibawa pulang ... [M]    |
| Siap dibawa ... [M]  |  |                                    [Pesan kue ulang tahun] [M]   |
|[Pesan kue ulang      |  |                                    Mau tulisan nama di kue? ..[M]|
| tahun] (lemon) [M]   |  | +-WHITE fridge panel, rack lines--------------------------------+ |
| Mau tulisan ... [M]  |  | | [Tart, largest]       [Blackforest]       [Brownies box]      | |
| +-WHITE fridge-----+ |  | | [TAG Tart ulang tahun [TAG Blackforest]   [TAG Brownies Bakar | |
| | [Tart, full w]   | |  | |  mulai Rp 150.000 M]                       Spesial Rp 55.000 M]| |
| | [TAG ...]        | |  | | krim, lelehan cokelat,                    dalam kotak kuning  | |
| | krim, ... (small)| |  | | kipas cokelat, ceri                                          | |
| |[Blackf.][Browns] | |  | +---------------------------------------------------------------+ |
| |[TAG]    [TAG]    | |  +------------------------------------------------------------------+
| +------------------+ |
+----------------------+
```
Desktop fridge columns `1.4fr 1fr 1fr` so the tart reads as the lead cake.

**Produk baru.** Purpose: the new lines from the window banner. Content: PRD row.
```
Baru: phone (390)         Baru: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|LEMON [PRODUK BARU]   |  |LEMON [ PRODUK BARU ]      | [Soft Sourdough]     [Salt Bread]     |
| Kini hadir di        |  |  (cols 1-4)               | [TAG ~20.000~ 15.000][TAG ~15.000~    |
| etalase. (lead)      |  |  Kini hadir di etalase.   |                        12.000]        |
| [Sourdgh] [SaltBr.]  |  |  (lead)                   | [Strudel]            [Pizza Cinta]    |
| [TAG]     [TAG]      |  |                           | [TAG Strudel]        [TAG Pizza Cinta]M|
| [Strudel] [PizzaC.]  |  |                           |                      berbentuk hati   |
| [TAG]     [TAG] M    |  |                           | Harga dapat berubah. (small)          |
| Harga dapat berubah. |  +------------------------------------------------------------------+
+----------------------+
```
No trays here: items stand on the lemon ground with their shadow, so this grid reads differently
from Roti.

**Kata mereka.** Purpose: modest proof. Content: PRD row.
```
Kata: phone (390)         Kata: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|WHITE [KATA MEREKA]   |  |WHITE [ KATA MEREKA ]     | Suka roti kejunya, dan harganya         |
| 4,7 (Holtwood, head) |  |  4,7 (Holtwood, head,    | terjangkau. (lead)                      |
| dari 234 ulasan      |  |  brick)                  | ----                                    |
|  Google              |  |  dari 234 ulasan Google  | Ulasan singkat lainnya: bagus, oke.     |
| Suka roti kejunya .. |  |  (cols 1-4)              | Ulasan diringkas dari Google. (small)   |
| Ulasan singkat ...   |  |                          | (cols 5-11, max 40ch)                   |
| Ulasan diringkas ... |  +------------------------------------------------------------------+
+----------------------+
```

**Kunjungi kami.** Purpose: find, call, message. Content: PRD row. Phone puts details before the map.
```
Kunjungi: phone (390)     Kunjungi: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|INK [KUNJUNGI KAMI]   |  |INK [ KUNJUNGI KAMI ]                                             |
| Alamat (small, lemon)|  | +--map iframe 4:3, radius 12 (cols 1-7)--+  Alamat (small, lemon)|
| Jl. Pondok Kelapa VI |  | |                                        |  Jl. Pondok Kelapa VI  |
|  No. 10 ... (white)  |  | |                                        |  No. 10, ... (white)   |
| Jam buka             |  | |                                        |  Jam buka              |
| Setiap hari 06.15–22 |  | |                                        |  Setiap hari 06.15–22.00|
| Telepon 0813-1130-.. |  | |                                        |  Telepon 0813-1130-8866|
| [Petunjuk Arah]      |  | |                                        |  [Petunjuk Arah][Telepon]|
| [Telepon][WhatsApp M]|  | |                                        |  [WhatsApp] [M]        |
| Instagram @elud… [M] |  | +----------------------------------------+  Instagram @elud… [M]  |
| +-map 4:3----------+ |  +------------------------------------------------------------------+
| +------------------+ |
+----------------------+
```

**Footer.** Purpose: a real close. Desktop groups run left to right with 48px gaps, not spread to the edges.
```
Footer: phone (390)       Footer: desktop (1440)
+----------------------+  +------------------------------------------------------------------+
|BRICK ELUD (head,     |  |BRICK ELUD (head, lemon)  Cake & Bakery ·   0813-1130-8866 ·      |
|  lemon)              |  |                          Pondok Kelapa     Setiap hari 06.15–22.00|
| Cake & Bakery ·      |  +------------------------------------------------------------------+
| Pondok Kelapa        |
| 0813-... · 06.15–22  |
+----------------------+
```

## 8. Motion
**Signature (hero tag markdown).** CSS keyframes from first paint, no JS, `fill-mode: both`:
(1) a 3px white strike bar slides across "Rp 15.000" (`translateX(-101%)→0` inside an
overflow-hidden span), 0.30s at 0.30s; (2) "Rp 9.000" drops in (`translateY(-14px)→0`, opacity
0→1), 0.35s at 0.50s; (3) the tag nudges on its top-left pivot (-3°→-6°→-1.5°→-3°), 0.55s at
0.55s. Ends by 1.1s. Ease `cubic-bezier(0.16, 1, 0.3, 1)` for 1–2. Base styles are the final state;
under reduced motion the three parts get `animation: none` (the starter rule shortens duration,
not delay), so the strike, new price and -3° tilt show at once. The name, the bun and everything else stay still.
**Supporting:** the starter `Reveal` once per section for sections 2–6 (20px, 0.6s, power2.out);
buttons respond with an opacity overlay and 1px press, 150ms. Nothing else moves; no plaque swings.
Tokens: `duration.reveal = 0.6`; others as starter; `--ease-out-quint` in `globals.css`.

## 9. What makes it this shop
- Section headings are Elud's hanging shelf plaques (white, red border, wires), and the shelf
  names (Croissant, Roll, Roti Manis, Blackforest) appear as the same small signs.
- Prices live on Elud's magenta tags with the struck old price, and the hero tag performs the
  shop's own markdown: Roti Smoke Beef, Rp 15.000 → Rp 9.000.
- Buns are drawn in Elud's printed plastic bags on travertine trays, and the cakes stand in a
  white fridge, because that's how the shop actually sells them.

## 10. Avoid
- Artisan-bakery clichés: cream ground, italic serif, flour on wood, "handcrafted with love",
  hero croissant. Elud is a bright value bakery; the page must look like its signboard, not a café.
- The neo-brutalist trap that yellow, black, red and heavy type invite: no hard offset shadows,
  no thick black box outlines, no condensed display, no rotated sticker clusters.
- Promo-flyer noise: starbursts, "DISKON!!" badges, exclamation marks, more than one tag style.
- Inflated proof: no stars row, no counting animation, no review set larger than `--step-lead`.
  Prices always carry "Harga dapat berubah".
- Holtwood anywhere beyond ELUD, "Cake & Bakery", "4,7" and the footer name.
- Magenta as decoration or on buttons: it means "price" only.
- Identical card rows in every section: Roti = 4 trays on white, Kue = fridge with one lead cake,
  Produk baru = 2×2 beside text with no trays.
- Childish illustration: no faces, no outlines everywhere, no clip-art steam curls.
- Copying Elud's logo mark: set the name in type only.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest gap
      lead/body 1.29 at 390; tags, shelf signs and reviews ≤ `--step-lead`; rating = `--step-head`)
- [x] Max content width set; no detail pinned far from what it describes (tags overlap their tray,
      notes sit ≤16px under their item or grid, CTA note directly under the CTA)
- [x] Every section has a desktop wireframe that uses the width on purpose (bands, 5/7, 4-up,
      4/8, 4/7, 7/5 splits)
- [x] At least 3 products shown (11 illustrated products)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced = final state, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
