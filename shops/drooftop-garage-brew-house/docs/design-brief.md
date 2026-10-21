# Design brief: D'rooftop & Garage Brew House

## 1. Concept
The page is the shop's own facade: a terracotta garage wall carrying its painted sign plates
(white "GARAGE", green "ROOFTOP ↑"), white line-drawn leaves, its mural slogan and its chalkboard
easel. The owner sees their walls and signs, not a coffee-shop template, and the hard-to-find
alley becomes the reason to tap "Petunjuk Arah".
Signature moment: on load, a rolling shutter in the hero's garage opening dips, then rolls up
to reveal the owner's rooftop photo. It says "buka" once, in about 1.5 s, and never repeats.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Two floors with two moods, wall and mural colours, sign plates, rattan and polka dots, slogan, chalkboard, hidden-alley problem, menu list, owner-1/owner-2 crops |
| impeccable | Persuade mode. The brief pins the world, so it isn't re-rolled. The facade is the page's carrier (mode-persuade allows "a shutter"). Full-palette colour committed at page scale. Faces chosen off the default list. One authored focal motion. The ruts named in §10 |
| motion-rules.md | One signature moment (shutter), section-level reveals only, transform and opacity only, reduced motion means none |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `terakota` | #B5522E | Garage wall: hero, contact close, Garage card | `tembok` text on it 4.70:1, AA body |
| `malam` | #18213D | Ink on light grounds; Rooftop card, Kata mereka, footer, shutter, chalkboard, window frame | on `tembok` 14.9:1; `tembok` on it 14.9:1 |
| `tembok` | #FAF8F3 | White rooftop wall: Dua lantai and Kunjungi grounds, white "GARAGE" plates, text on dark | see above |
| `rumput` | #1E7A43 | Sign green: primary buttons, "ROOFTOP ↑" plate, Datang rame-rame ground | `tembok` on it 5.05:1; it on `tembok` 4.87:1 |
| `kuning` | #F2B630 | Mural sunflower: Menu ground, rating line and links on `malam`, bulbs | `malam` on it 8.7:1. Never text on `terakota` (2.7) or `rumput` (2.9) |
| `aren` | #4A2A18 | Coffee and wood in illustrations only | not used for text |

Illustration-only tints (never text or UI): `susu` #EAD7B5 (milk, saucers), `rotan` #C9955A
(rattan, tables). Strategy: Full palette. Each section is one painted wall in one colour, with
hard edges between walls. No gradients, no shadows.
Focus ring: 3px outline, 3px offset; `malam` on `tembok` and `kuning`, `kuning` on `malam`,
`tembok` on `terakota` and `rumput`.

## 4. Type
**Bungee** (display: name, h2, sign plates, chalkboard). The shop's own lettering is all caps
("DROOFTOP AND GARAGE", "KOPI ADALAH INSPIRASI HATI", "ROOFTOP ↑", "WELCOME"), and Bungee was
drawn for urban signage. Weight 400 only; add `uppercase` on `.font-display`. **Rubik**
(body, h3, buttons, lists, prices); its softened corners match Bungee. Both via `next/font/google`, `latin`, `swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 1rem + 5.2vw, 5.5rem)` (52 → 88px), lh 1.05 | hero name only, set on two lines "D’rooftop" / "& Garage" |
| `--step-head` | `clamp(2rem, 1.25rem + 3vw, 3.5rem)` (32 → 56px), lh 1.1 | section h2 (Bungee) |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.625rem)` (22 → 26px), lh 1.3 | h3, menu item names, praise themes, chalkboard lines, phone number |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17 → 19px), lh 1.55 | running text, list items, prices, buttons |
| `--step-small` | `0.8125rem` (13px), lh 1.4 | sign-plate labels, kicker, notes, captions |

Ratios: phone 13→17→22→32→52 (1.31, 1.29, 1.45, 1.63); desktop 13→19→26→56→88 (1.46, 1.37,
2.15, 1.57). Checked ≥1.25 at 600, 768, 1024 and 1300 too. Running text max 60ch. Wrap
"rame-rame" in `white-space: nowrap` so the h2 breaks as "DATANG / RAME-RAME". If "D’ROOFTOP"
exceeds the content width at 390, drop the display minimum to 3rem.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at ≥768 / 40px at ≥1024 |
| Section padding phone / desktop (`--section-y`) | 64px / 96px at ≥768 / 112px at ≥1024 |

Two-column layouts start at ≥1024 (12-col grid, 32px gap). Corners: 6px on plates, buttons,
tiles and cards; 0 on section walls and the hero window. Plates: Bungee `--step-small`, padding
6×10, 2px inset line in the text colour (painted-sign border). Buttons share the plate look but
use Rubik 600 `--step-body`, min-height 48px, with ↗/→ icon. Labels never have arrows except the
"ROOFTOP ↑" sign, which is a caption pinned to the photo.

- **Proximity:** a label, price or tag sits within about 24px of what it describes. Prices sit
  directly under the item name, never right-aligned with dotted leaders.
- **Wide screens are designed, not stretched:** at 1440px every section is two columns, a grid,
  or visibly narrow and centred (§7). No half-empty rows.
- **Lists:** items use `--step-body` to `--step-lead`, never display or heading size.

## 6. Products on the page
Five products are shown as pictures, not just named:
1. **Kopi Susu Garage** [MOCKUP name, Rp 15rb]: owner-2.jpg, 5:6 crop anchored bottom (cuts the notepad and tray), in a 8px `tembok` frame. Caption directly beneath: name, price, "Kopi hitam di atas susu manis."
2. **Es Kopi Susu Gula Aren** [MOCKUP]: flat SVG on a `rumput` tile. Tall glass outlined in 2px `tembok`, with `aren`, `susu` and coffee layers and three outlined ice cubes.
3. **Kopi Tubruk Lampung** [MOCKUP]: flat SVG on a `terakota` tile. Clear glass mug with a square handle (echoing owner-2) and a grounds layer at the bottom, beside a small bean jar with a blank label.
4. **V60** [MOCKUP]: flat SVG on a `malam` tile. Cone dripper (`rotan`) over a glass server with coffee.
5. **Pisang Goreng** [MOCKUP]: flat SVG on a `kuning` tile (the snack card is `tembok`), three `rotan` slices on a `tembok` plate, leading the snack strip.

Illustration style: flat fills from the palette, white 2px single-line details (the garage
wall's line drawings), no black outlines, no gradients, no SVG text. Tiles are 1:1 at 96px (phone)
and 120px (desktop). All illustration items carry `data-mockup`. The Garage and Rooftop cards get
two scene illustrations in the same style (see §7).

## 7. Sections
**Hero:** recognition plus action. Terakota wall: kicker, name, line, a "today" chip styled as
the chalkboard (`malam` board, 2px `tembok` inset line, Bungee small in `tembok`), and buttons
(green plate with a 2px `tembok` border for Petunjuk Arah; `tembok` plate for WhatsApp). Garage
window: owner-1 crop (left ~55%, below the power lines; chalkboard and pillar excluded) in a 10px
`malam` frame under a 14px shutter-housing bar. The "ROOFTOP ↑" plate overlaps the bottom-left
corner by 12px. A 28px mural band (`malam` triangles on `kuning`), full bleed, closes the wall.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------------+        +--------------------------------------------------------+
|[draft banner]          |        |[draft banner]                                          |
|[wordmark]      Lokasi ↓|        | D'ROOFTOP & GARAGE    Dua lantai Menu Rombongan Lokasi |
|kedai kopi · cipinang   |        | kedai kopi · cipinang muara  +==[housing]============+ |
|D'ROOFTOP      (52px)   |        | D'ROOFTOP        (88px)      | owner-1 crop 3:2      | |
|& GARAGE                |        | & GARAGE                     | ~584 x 390            | |
|Kedai kopi tersembunyi  |        | Kedai kopi tersembunyi di    | shutter rolls up      | |
|di Cipinang Muara.      |        | Cipinang Muara.              |                       | |
|[BUKA HARI INI 15–23.30]|        | [BUKA HARI INI 15.00–23.30]  |                       | |
|[Petunjuk Arah][WA]     |        | [Petunjuk Arah ↗] [WhatsApp][ROOFTOP ↑]--------------+ |
|+==[housing]==========+ |        |/\/\/\/\/\/\/\/\/\/\ mural band, full bleed /\/\/\/\/\/\/|
||owner-1 crop 4:3     | |        +--------------------------------------------------------+
|[ROOFTOP ↑]-----------+ |          6 | 6 columns; text column centred on the window
|/\/\/\ mural band /\/\/\|
+------------------------+
```

**Dua lantai, dua suasana:** the two floors as two painted cards on a `tembok` ground.
Garage card (`terakota`): "GARAGE" plate, h3, facts, "Cocok buat" line, illustration of a
round rattan chair with a `malam` polka-dot cushion and a potted plant. Rooftop card (`malam`):
"ROOFTOP ↑" plate, h3, facts, "Cocok buat" line, illustration of a string-light wire with
`kuning` bulbs (static) over a `rumput` turf strip with a low table on a `terakota`/`tembok` gingham mat.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|DUA LANTAI, DUA SUASANA |        | DUA LANTAI, DUA SUASANA                                |
|lead (body)             |        | lead (max 60ch)                                        |
|+--------------------+  |        | +-------------------------+ +-------------------------+ |
||[GARAGE] h3 facts   |  |        | |[GARAGE]  h3             | |[ROOFTOP ↑]  h3          | |
||Cocok buat ...      |  |        | |facts, Cocok buat ...    | |facts, Cocok buat ...    | |
||[rattan chair illo] |  |        | |[rattan chair illo 220h] | |[string lights + lesehan]| |
|+--------------------+  |        | +-------------------------+ +-------------------------+ |
|+ Rooftop card (same) +|         |   6 | 6, equal height (2-up from 768)                   |
+------------------------+        +--------------------------------------------------------+
```

**Menu andalan:** products and price level on a drenched `kuning` wall. A speech bubble
(`malam`, Bungee `--step-lead`, tail toward the cup) carries "Kopi adalah inspirasi hati" and
overlaps the photo's top-left corner on desktop. Item cards are `tembok`, 6px corners: tile,
then name (Rubik 600 lead), price (700 body) and one line directly beneath.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|MENU ANDALAN            |        | MENU ANDALAN                                           |
|note: contoh menu (small)|       | Pengunjung bilang kopinya enak. note: contoh menu      |
|("KOPI ADALAH INSPIRASI |        | ("KOPI ADALAH..")           +-----------+ +-----------+ |
|  HATI" bubble)         |        | +------------------+        |[tile] Es  | |[tile]Tubruk| |
|[owner-2 photo 5:6]     |        | | owner-2 photo    |        |Kopi Aren  | |Lampung    | |
|Kopi Susu Garage        |        | | 5:6, ~480 wide   |        |Rp 18rb    | |Rp 10rb    | |
|Rp 15rb                 |        | |                  |        +-----------+ +-----------+ |
|[tile] Es Kopi Susu     |        | +------------------+        |[tile] V60 | |Non-kopi   | |
|       Gula Aren/Rp18rb |        | Kopi Susu Garage · Rp 15rb  |Rp 22rb    | |list+price | |
|[tile] Tubruk, [tile]V60|        | Kopi hitam di atas susu..   +-----------+ +-----------+ |
|Non-kopi list           |        |                                                        |
|[pisang illo] snacks    |        | [pisang illo] Teman ngopi: 4 snacks inline · Rp 12–20rb |
+------------------------+        +--------------------------------------------------------+
                                    5 | 7 columns; snack strip spans 12
```

**Datang rame-rame:** rooftop group bookings on a `rumput` wall. A chalkboard easel built in
HTML/CSS (`malam` board, 12px `terakota` frame, two short legs) shows Bungee lines in
`tembok`/`kuning`: "RESERVASI HARI INI", "ROMBONGANMU?", "ROOFTOP · LESEHAN", "CHAT
0813-1431-7421" (all at most `--step-lead`).
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|DATANG                  |        | DATANG RAME-RAME              +----------------------+ |
|RAME-RAME               |        | Rooftop bisa dipesan buat     | RESERVASI HARI INI   | |
|lead, 3 occasions list  |        | rombongan. 3 occasions list   | ROMBONGANMU?         | |
|lesehan line            |        | lesehan line                  | ROOFTOP · LESEHAN    | |
|[Chat WhatsApp →]       |        | [Chat WhatsApp →]             | CHAT 0813-1431-7421  | |
|[chalkboard, full width]|        |                               +----------------------+ |
+------------------------+        +--------------------------------------------------------+
                                    6 | 6; board ~440 wide, centred in its column
```

**Kata mereka:** proof without quotes on a `malam` wall. Themes in `tembok` `--step-lead`,
each led by a 12px `kuning` dot (the cushion polka dot). The rating line is in `kuning`.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|KATA MEREKA             |        | KATA MEREKA          | • Nyaman, kayak di  | • Staf &   | |
|4,8 dari 226 ulasan     |        | 4,8 dari 226 ulasan  |   rumah sendiri     |   timnya   | |
|Lihat di Google Maps ↗  |        | Google               |                     |   ramah    | |
|• 4 themes stacked      |        | Lihat di Maps ↗      | • Harga ramah di    | • Hidden   | |
|note: ringkasan ulasan  |        | note (small)         |   kantong           |   gem-nya  | |
+------------------------+        +--------------------------------------------------------+
                                    4 | 8 (themes 2 x 2)
```

**Kunjungi kami:** get people down the alley, on a `tembok` wall.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|KUNJUNGI KAMI           |        | KUNJUNGI KAMI                                          |
|Jl. K No. 18, ...       |        | +-------------------------------+  Jl. K No. 18, ...   |
|[Petunjuk Arah ↗]       |        | |                               |  [Petunjuk Arah ↗]   |
|Senin–Minggu 15.00–23.30|        | |  Google Maps embed 4:3        |  Senin–Minggu        |
|Ramadan note (small)    |        | |  ~680 x 510                   |  15.00–23.30         |
|Cara ke sini 1. 2. 3.   |        | |                               |  Cara ke sini 1.2.3. |
|Parkir motor di gang    |        | +-------------------------------+  Parkir motor di gang|
|[map 4:3]               |        |   map 7 | info 5                                       |
+------------------------+        +--------------------------------------------------------+
```

**Hubungi kami:** the close: back on the `terakota` wall, a centred sign flanked by white
line-drawn leaves (monstera, fern, daisy) rising from the bottom edge, like the real garage wall.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|     HUBUNGI KAMI       |        |  \|/ leaves   HUBUNGI KAMI (centred, max 640)  leaves \|/|
|  lead (centred)        |        |  )|(  ~260w   lead                              ~260w )|(|
|  0813-1431-7421 (lead) |        |  /|\          0813-1431-7421                        /|\|
|[Chat WhatsApp →]  full |        |   |   [WhatsApp →] [Telepon] [Petunjuk Arah ↗]      |  |
|[Telepon]          full |        |  _|_______________________________________________|__|
|[Petunjuk Arah ↗]  full |        +--------------------------------------------------------+
|   one small sprig      |
+------------------------+
```

**Footer:** full identity and draft status, on `malam`, `--step-small` to body.
```
phone (390)                       desktop (1440)
+------------------------+        +--------------------------------------------------------+
|D'rooftop & Garage Brew |        | D'rooftop & Garage    | Senin–Minggu   | 0813-1431-7421 |
|House, address          |        | Brew House, address   | 15.00–23.30    | WhatsApp · Arah|
|hours · phone           |        | Draf mockup, belum dipublikasikan                      |
|Draf mockup ...         |        +--------------------------------------------------------+
+------------------------+          3 columns, left-aligned
```

## 8. Motion
**Signature (hero shutter):** a `malam` panel with 1px `tembok`-at-12% slat lines every 14px
and a thicker bottom bar with a small handle. It covers the window from first paint only when an
inline `<head>` script has added `motion-ok` to `<html>` (JS on and no reduced motion). At 0.25s
it dips 4px (0.12s, power1.out), then rolls up `yPercent -101` (1.1s, power2.inOut), then gets
`visibility: hidden`. The text never waits: it is visible from the first paint. Failsafe: a CSS
animation hides the shutter at 3s if GSAP never runs. **Reduced motion and no JS:** the shutter
is never shown and the photo is visible.
**Supporting:** one starter `<Reveal>` per section (§2 to §7) wrapping its main block: 20px,
0.6s, power2.out, once. No reveal in the hero or footer. Buttons: hover `translateY(-2px)` with
the arrow shifting 3px right, press back to 0, 180ms ease-out in CSS. Lenis: starter defaults.
**Tokens (`lib/motion.ts`):** `duration = { press: 0.18, ui: 0.25, reveal: 0.6, hero: 1.1 }`,
`ease.shutter = "power2.inOut"`, `delay.shutter = 0.25`, `distance = { reveal: 20, shutterDip: 4 }`.

## 9. What makes it this shop
1. The rolling shutter in a terracotta garage wall opens onto their own rooftop photo: "Garage" and "buka" in one gesture.
2. Their sign plates become the interface: the white "GARAGE" plate, the green "ROOFTOP ↑" sign, and buttons painted in the same vocabulary. Their chalkboard easel is the booking prompt.
3. Their mural slogan "Kopi adalah inspirasi hati" sits as a speech bubble beside their layered kopi susu, and the white line-drawn leaves from the garage wall frame the close.

## 10. Avoid
- The category rut: cream ground, serif display, latte-art stock, "Our Story", three equal cards. Also its opposite, dark third-wave with neon.
- Neo-brutalist stickers (black borders, hard offset shadows, rotated tags) and graffiti clichés (spray drips, tag fonts, brick, neon). Plates are flat and level.
- Line leaves behind text. The mural band used more than once (it goes under the hero only).
- The shutter acting as a preloader, replaying on scroll, or looping.
- Customer photos (photo-1/2/3) anywhere. owner-1's chalkboard group name or Ramadan hours on screen (crop them out).
- Testimonial cards with names, avatars or per-card stars. Quoted reviews. "Hidden gem" said more than twice.
- Unconfirmed facts stated as fact: car parking, musholla, Instagram, Lampung origin. Copy so slangy it's hard to read.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (plates 13px, items and board at most `--step-lead` vs `--step-head`)
- [x] Max content width set (1200px); no detail pinned far from what it describes (price under name, plate on the window corner, caption under the photo)
- [x] Every section has a desktop wireframe that uses the width on purpose (6|6, 5|7, 4|8, 7|5, or narrow-centred with flanking leaves)
- [x] At least 3 products shown (five: one owner photo plus four illustrations)
- [x] Within motion-rules.md (one signature moment, section reveals only, transform and opacity, reduced motion means none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
