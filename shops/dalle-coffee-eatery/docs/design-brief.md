# Design brief: Dalle Coffee and Eatery

## 1. Concept
The page is Dalle's own back wall, seen from a table: fluted walnut, linear pendant lights and
arched openings in cream plaster. Each arch holds something real (the bar photo, the drinks,
the meeting-room door), because the arch is this shop's logo, its niches and its glass doors.
Signature moment, "Lampu menyala": on load the pendant bars over the hero switch on, the arched
photo of the bar brightens from dim and the lit "Dalle" lockup settles. The cafe opens for the
day, right above "Buka hari ini 10.00–21.00".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name, lockup, hours, address, phone and rating; the drinks (Iced Tea with nata de coco, chia, pandan and a spoon; flatbread on a sage ribbed plate; latte with crumble and cookies); the materials (fluted walnut, plaster arches, black steel, LED pendants, backlit line logo); owner-1 is the only photo allowed on the site. |
| impeccable | Persuade mode. A new visual world built from the shop's own materials, with a Committed colour strategy (walnut owns about 40% of the page). It rejects the cream + serif + terracotta cafe default and the split-hero-with-card template. One authored focal moment, faces off the default list. Its launcher and concept-seed were not run because they write outside docs/. The seven candidates were derived by hand: lit sign wall, fluted walnut, steel shelving, arched niches, linear pendants, printed cup, ruko unit plaque. Niches + walnut + pendants won on recognition; steel shelving is kept for one section. |
| motion-rules.md | One signature moment in the hero, section-level reveals only, transform and opacity only, zero React Bits. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `walnut` | #5E3423 | Hero, meeting room, slat field | `light` on it 10.1:1 |
| `walnut-deep` | #38201A | Slat grooves, closing band, footer | `light` on it 14.5:1 |
| `plaster` | #F3EEE6 | Menu, work, reviews grounds | `steel` on it 14.7:1 |
| `steel` | #1D1C1A | Text on plaster, illustration outlines, shelf rails, buttons on plaster, banner | `plaster` on it 14.7:1 |
| `light` | #FBFAF6 | Text and lines on walnut, primary button on walnut, pendant bars, glow | `walnut` on it 10.1:1 |
| `pandan` | #4F6B48 | Open-status dot and small labels on plaster, leaves and pandan in drawings | on `plaster` 5.15:1 |

These are variants, not extra colours: `niche` #E9E1D5 (niche interiors and the Kunjungi ground; `steel` on it 13.1:1),
`pandan-soft` #A9B9A2 (status dot on walnut, 5.1:1; the sage plate), muted text #E3D3C6 on walnut
(7.2:1) and #5C544C on plaster (6.4:1). Illustration-only fills: tea #D2A957, coffee #6F4A35,
milk #E8D9C4, cookie #C99A5B, chocolate #3E2419, cheese #F4E3A8, crust #E3B866, ice = `light` at 70%.
Slat texture: `walnut` with 2px `#55301F` grooves every 14px (repeating-linear-gradient, the
only gradient on the page).

## 4. Type
Display **Marcellus** 400. Its flared Roman capitals match the arch, a Roman form, and give the
refined, slightly elegant voice the brief asks for. In `light` it reads like the lit letters on
the walnut column. Body **Hanken Grotesk** 400/500/600, quiet and clean like the steel and LED
interior. Both load with `next/font/google`, subset latin, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.5rem + 9vw, 9rem)` (75 → 144px) | "Dalle" in the hero h1 only, Marcellus, lh 0.95 (one word, always one line) |
| `--step-head` | `clamp(1.875rem, 1.3rem + 2vw, 2.75rem)` (30 → 44px) | h2 section headings, Marcellus, lh 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)` (22 → 26px) | Product names, h3, review paraphrases, shelf labels, phone number (Marcellus, lh 1.25); "COFFEE AND EATERY" (Hanken 600 caps, tracking 0.14em) |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` (17 → 18px) | Running text, list items, prices (Hanken 600, tabular), buttons, lh 1.55 |
| `--step-small` | `clamp(0.85rem, 0.82rem + 0.1vw, 0.875rem)` (13.6 → 14px) | Product descriptions, notes, banner, footer, lh 1.45 |

Ratios at 390 / 1440: display:head 2.5 / 3.3, head:lead 1.36 / 1.69, lead:body 1.29 / 1.44,
body:small 1.25 / 1.29. Nothing outranks its section h2 except the hero "Dalle".

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | `75rem` (1200px), 12-column grid, 24px column gap from 768px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 4vw, 3rem)`: 20px / 48px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2rem + 6vw, 7rem)`: 64px / 112px |

- **Arch shape:** `border-radius: 999px 999px 0 0` on an element taller than half its width
  gives a true semicircle. Arches are recesses or openings. They get no shadow and no card chrome.
- **Proximity:** a price sits right after its name, on the next line, 4–8px below. No dotted
  leaders, never right-aligned across a row. "Setiap hari" and "10.00–21.00" stay on one line.
  The phone number, its WhatsApp note and its buttons form one group (≤ 16px between lines).
- **Wide screens:** every desktop section is two-part (text block + arcade, plate, shelf, door or
  map) across the 12 columns. Slat and plaster grounds bleed full width; content stays in the container.
- **Lists:** product names use `--step-lead`; the "Dari dapur" list uses `--step-body`. Nothing in a list
  is larger than its h2.

## 6. Products on the page
Four flat illustrations, monoline `steel` outlines (2px, non-scaling) with flat fills, the line
style of the arch logo. Each sits in its own niche. No straws anywhere: drinks come with a spoon or a sip lid.
1. **Dalle Iced Tea**: tall clear cup, amber tea, translucent nata de coco cubes, chia dots, ice,
   a long spoon standing in it, small arch mark on the cup (a plain arch, not the logo).
2. **Dalle Iced Coffee**: clear cup with coffee under a milk layer, ice, flat sip lid.
3. **Es latte cookie crumble** ([MOCKUP] label): domed foam top with crumble specks, and a small white
   saucer with three cookies beside the cup.
4. **Pizza Coklat Keju** ([MOCKUP] name): top-down round flatbread, chocolate sprinkles, grated cheese
   shreds, on a sage ribbed plate (grid lines) as in the customer photo.

Drinks: arched niches, 5:7, `niche` fill, about 80% of the niche height. Flatbread: wide low niche, plate
seen from above. Pizza and the [MOCKUP] mains are a text list. All four drawings are `mockup`
(stand-ins until the owner sends photos).

## 7. Sections
**Banner** (all widths): one line, `steel` ground, `light` small text, 36px tall, not sticky.

**Hero.** Recognition and directions. Walnut slat field, pendant bars, lockup, tagline, status,
address, two buttons, owner-1 in a tall arched window whose base sits on the section's bottom edge
(a doorway on the floor line). The photo is cropped to the sign (`object-position: 62% 40%`), with a 2px `light` arch
outline 10px outside it and a soft static glow.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| ━━━━━━━      ━━━━━━━━━━      |  |    ━━━━━━━━━━━━━         ━━━━━━━━━━━━━━━━         ━━━━━━━━━   |
| Dalle            (display)   |  | Dalle               (display)          .-''''''''''''-.        |
| COFFEE AND EATERY  (lead)    |  | COFFEE AND EATERY   (lead caps)       /                \       |
| Tempat tenang buat kerja,    |  | Tempat tenang buat kerja, rapat,     |  owner-1.jpg     |      |
| rapat, atau sekadar ngopi.   |  | atau sekadar ngopi.   (body)         |  lit sign, arch  |      |
| ● Buka hari ini 10.00–21.00  |  | ● Buka hari ini 10.00–21.00          |  logo, bar       |      |
| Ruko The Savoy, JGC (small)  |  | Ruko The Savoy, Jakarta Garden City  |  ~480 x 640      |      |
| [Petunjuk Arah] [Telepon]    |  | [Petunjuk Arah]  [Telepon]           |                  |      |
|    .-''''''''''-.            |  |  cols 1-5, centred on the arch       |  cols 7-11       |      |
|   /  owner-1.jpg \  ~350x420 |  |                                      |                  |      |
+--+----------------+----------+  +--------------------------------------+------------------+------+
```
Hero padding: top 40px on phone and `--section-y` on desktop, bottom 0 (the arch stands on the edge). Phone first screen
(844px): banner, lockup, tagline, status and buttons end near 410px, and most of the arch is visible below. Desktop hero is about
790px tall, so it fits a 1440 × 900 screen.

**Menu Dalle.** Show the real products. Plaster ground.
```
Menu: phone (390)                 Menu: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Menu Dalle          (h2)     |  | Menu Dalle   (h2)  | .-'''-.          .-'''-.          .-'''-.  |
| Es teh dan es kopi racikan   |  | intro (body)       | | tea |          | cof |          | lat |  |
| Dalle, plus makanan...       |  | Harga ... contoh   | | cup |          | cup |          | cup |+ |
| Harga ... contoh (small)     |  | (small)            | +-----+          +-----+          +-----+  |
| .-''-. Dalle Iced Tea (lead) |  | cols 1-4           | Dalle Iced Tea   Dalle Iced Coff  Es latte |
| |cup | Rp 25rb (body 600)    |  |                    | Rp 25rb          Rp 28rb          cookie.. |
| |    | Nata de coco... (sm)  |  |                    | desc (small)     desc             desc     |
| +----+ Disajikan dg sendok.  |  |                    | cols 5-12, 5:7 niches, + = cookie saucer|
| (same row x2: Coffee, Latte) |  |--------------------+-----------------------------------------|
| [ wide niche: sage plate   ] |  | [ wide low niche: plate from above ]  | Dari dapur (h3 lead)    |
| Pizza Coklat Keju (lead)     |  | Pizza Coklat Keju (lead) + desc below | Pizza                   |
| Dari dapur (h3)              |  | cols 1-6                              |  mulai Rp 45rb          |
| Pizza / mulai Rp 45rb        |  |                                       | Nasi goreng, Chicken    |
| Nasi goreng, ... / mulai 40rb|  |                                       | katsu rice, Aglio olio  |
+------------------------------+  |                                       |  mulai Rp 40rb  cols 7-11|
                                  +----------------------------------------------------------------+
```
Phone drink rows: niche 136 × 190 on the left, text column 16px to its right.

**Kerja dengan tenang.** Sells the calm workspace. Plaster ground. The four facts sit in a
black-steel shelf unit (2px `steel` rails and uprights, like the bottle shelves).
```
Kerja: phone (390)                Kerja: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Kerja dengan tenang  (h2)    |  | Kerja dengan tenang (h2)  ┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓ |
| Suasananya tenang dan        |  | Suasananya tenang dan     ┃ Tenang (lead)   ┃ Nyaman & bersih ┃ |
| ruangannya bersih... (lead)  |  | ruangannya bersih, dari   ┃ body            ┃ body            ┃ |
| ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ |  | jam 10 pagi... (lead)     ┣━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━┫ |
| Tenang / body                |  | cols 1-5                  ┃ 10.00–21.00     ┃ Makan siang *   ┃ |
| ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ |  |                           ┃ setiap hari     ┃ body            ┃ |
| Nyaman & bersih / body       |  |                           ┗━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━┛ |
| ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ |  |                            cols 6-12, cells padded 24px      |
| 10.00–21.00 / Makan siang *  |  +----------------------------------------------------------------+
+------------------------------+
```

**Ruang meeting.** Makes the private room bookable. Walnut slat ground. Room facts sit inside an
arched-door outline (2px `light`, the arched glass door), in its rectangular lower part only.
```
Meeting: phone (390)              Meeting: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Ruang meeting (h2, light)    |  |    .-''''''''''-.              Ruang meeting (h2)              |
| Ada ruang privat untuk rapat |  |   /              \             Ada ruang privat untuk rapat    |
| tim atau ketemu klien.       |  |  |                |            tim atau ketemu klien. (body)   |
|   .-''''''''-.               |  |  | Ruang privat   |                                            |
|  /            \              |  |  | Hingga 8 org * |            [Pesan lewat WhatsApp *]        |
| | Ruang privat |  (lead)     |  |  | Paket: ruang + |            atau telepon 0851-8337-5752     |
| | Hingga 8 org*|  (body)     |  |  | 1 minuman *    |                                            |
| | Paket ... *  |             |  |  +----------------+  cols 1-5   cols 7-11, vertically centred   |
| +--------------+             |  +----------------------------------------------------------------+
| [Pesan lewat WhatsApp *]     |
| atau telepon 0851-... (small)|
+------------------------------+
```

**Kata mereka.** Proof without quoting. Plaster ground. Paraphrases in Marcellus lead, no quote
marks, separated by 1px `steel` rules at 20% opacity.
```
Ulasan: phone (390)               Ulasan: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Kata mereka (h2)             |  | Kata mereka (h2)   | Ruangannya nyaman dan  | Tempatnya tenang |
| 4,8 di Google dari 59 ulasan |  | 4,8 di Google dari | terjaga kebersihannya. | dan enak dipakai |
| Diringkas dari ulasan Google,|  | 59 ulasan (body600)|------------------------+------------------|
| bukan kutipan. (small)       |  | Diringkas... (sm)  | Kopi dan makanannya    | Pelayanannya     |
| ──────────────────────────── |  | cols 1-4           | enak, pilihan menunya  | baik, dan ada    |
| paraphrase 1..4 (lead)       |  |                    | menarik.               | ruang privat...  |
+------------------------------+  |                    | cols 5-12, 2 x 2       |                  |
                                  +----------------------------------------------------------------+
```

**Kunjungi kami.** Get them there. `niche` ground. Keyless map iframe, 1px `steel` border, 4px radius.
```
Lokasi: phone (390)               Lokasi: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Kunjungi kami (h2)           |  | [                                    ]  Kunjungi kami (h2)     |
| Ruko The Savoy No. 12 Blok   |  | [   map iframe, 440px tall           ]  Ruko The Savoy No. 12  |
| C1, Jakarta Garden City, ... |  | [                                    ]  Blok C1, JGC, ... body |
| Setiap hari 10.00–21.00      |  | [                                    ]  Setiap hari 10.00–21.00|
| [Petunjuk Arah]              |  | [   cols 1-7                         ]  [Petunjuk Arah]        |
| [ map 4:3                  ] |  |                                          cols 8-12              |
+------------------------------+  +----------------------------------------------------------------+
```

**Hubungi kami + footer.** Close. `walnut-deep` ground, `light` text.
```
Kontak: phone (390)               Kontak: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| Hubungi kami (h2)            |  | Hubungi kami (h2)    | 0851-8337-5752 (lead)                    |
| 0851-8337-5752 (lead)        |  | cols 1-4             | Bisa WhatsApp juga * (small)             |
| Bisa WhatsApp juga * (small) |  |                      | [Telepon] [WhatsApp *] [Petunjuk Arah]   |
| [Telepon] [WhatsApp *]       |  |                      | cols 5-12                                |
| [Petunjuk Arah]              |  |----------------------------------------------------------------|
| ---------------------------- |  | Dalle Coffee and Eatery · Ruko The Savoy, JGC · Foto: Dalle    |
| footer (small, 3 lines)      |  | (Google Maps) · Situs contoh, belum resmi.     (small)         |
+------------------------------+  +----------------------------------------------------------------+
```
`*` = [MOCKUP], rendered with `data-mockup`.

## 8. Motion
**Signature, "Lampu menyala" (hero, on load, finished by about 1.2s):**
- Pendant bars (3 on desktop, 2 on phone): opacity 0→1, scaleX 0.9→1, 0.5s each, 0.12s apart, from 0s.
- Photo: scale 1.04→1, 1.2s, from 0s. Dim layer (`walnut-deep` at 0.6) over it: opacity → 0, 0.9s, from 0.15s.
- Arch outline glow layer: opacity 0→1, 0.6s, from 0.45s.
- "Dalle": y 20→0, opacity 0→1, 0.7s, from 0.3s. The rest of the lockup, tagline, status and buttons as one
  group: y 12→0, opacity 0→1, 0.6s, from 0.5s.
- Ease `expo.out` (≈ cubic-bezier(0.16, 1, 0.3, 1)) for arrivals, `power1.out` for the dim layer.
- Reduced motion: everything at its final state, no movement. With JS off: final state.

**Supporting:** one Reveal per section below the hero (y 20→0, opacity, 0.6s, `power2.out`, once,
at 85% viewport). Button hover and press: a `::before` fill fades 0→1 in 180ms, press `translateY(1px)` in 120ms.
Nothing else moves: no niche hovers, no parallax, no marquee. Lenis on starter defaults.
Motion tokens: `dur.fast 0.18`, `dur.reveal 0.6`, `dur.hero 0.7`, `dist.reveal 20`, `ease.arrive "expo.out"`,
`ease.out "power2.out"`.

## 9. What makes it this shop
- The arch appears three times, and each time it is a real part of the room: the hero doorway
  holding the owner's photo of the lit sign, the plaster niches holding the drinks, and the
  arched glass door around the meeting-room facts.
- "Lampu menyala": the linear LED pendants and backlit lockup from owner-1 switch on, and the
  "Dalle / COFFEE AND EATERY" lockup mirrors the logo's own stacking.
- The Dalle Iced Tea is drawn with its spoon, nata de coco and chia, and the flatbread sits on the
  sage ribbed plate from the customer photo. The work facts sit on a black-steel shelf like the
  syrup shelves.

## 10. Avoid
- The cosy-cafe default: cream + italic serif + terracotta, coffee-bean icons, steam swirls, latte-art clip art.
- A split hero with a rounded image card and shadow. The arch is an opening, tall (≥ 600px on desktop)
  and flush with the floor line. It is not a card.
- Four equal shadowed product cards. Niches are flat recesses with no border and no shadow.
- Glow anywhere but the hero lockup and arch outline. Slat texture loud enough to read as stripes.
- Tracing or redrawing the Dalle logo. Use the photo and ask for the file.
- Fake photos (food, meeting room, stock). Quoted reviews, reviewer names, star graphics.
- Mentioning slow service or straws as complaints. Claims about wifi, outlets, parking or halal.
- English UI words beyond the menu names. Prices with dotted leaders or pinned far right.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (body:small is exactly 1.25 at 390)
- [x] Max content width set; no detail pinned far from what it describes (prices under names, number grouped with its buttons)
- [x] Every section has a desktop wireframe that uses the width on purpose (all two-part across 12 columns)
- [x] At least 3 products shown (four drawn: Iced Tea, Iced Coffee, latte with crumble, flatbread)
- [x] Within motion-rules.md (one hero moment, section reveals, transform/opacity, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
