# Design brief: Kyō Coffee Roaster

Record decisions, not essays. Site language: Bahasa Indonesia (`lang="id"`), "kamu" register [MOCKUP].

## 1. Concept
The page is Kyō's bar seen head-on: a honey-plywood panel wall split by pale battens, a polished
concrete counter, white walls, and the coffee as the only dark thing in the room. It is built from
the shop's own surfaces, and it ends after dark in the lit garden.
Signature moment: on load, cold brew pours into a clear cup printed "kyō" that stands on the hero's
concrete counter, then settles into marbled streaks over the milk. This is the Marbled Cold Brew
that reviewers single out. It runs once and takes about 1.3 s.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Materials: plywood grid (photo 1), concrete bar and wood windows (photo 2), clear "kyō" cup, ridged speckled stoneware and the marbled drink (photo 3). Products to draw. The night garden (reviews 1, 2) as the ending. Hours, address and phone (listing). Text wordmark only. |
| impeccable | Persuade mode. Committed colour: honey owns whole fields. Light page from the physical scene, ending dark. Faces chosen as objects from the world. One focal motion, not scattered effects. Rut check: cream + serif + terracotta, beige "Japandi", brown and gold. Set aside: menu board, raked garden (too literal), recipe card, receipt. Launcher and concept roll not run (they write outside `docs/`); the brief pins the world. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `wall` | #F5F3EE | Page ground (white walls); text on `ink` | ink on wall 15.4:1 |
| `ink` | #221A14 | All text on light grounds, primary button, night ground, coffee in drawings | wall on ink 15.4:1 |
| `ply` | #CD9A5B | Honey plywood field: hero, bakes, featured menu panel; primary button on `ink` | ink on ply 6.8:1; ply on ink 6.8:1 |
| `oak` | #E6C48E | 2px battens on `ply`; outline buttons and lamp halos on `ink` | ink on oak 10.3:1; oak on ink 10.3:1 |
| `concrete` | #CBC7BF | Counter band, "Kata mereka" ground, stoneware and stones in drawings | ink on concrete 10.2:1 |
| `leaf` | #3E5A3B | Window greenery and garden shrubs in drawings only | Never text (3.1:1 on ply) |

Illustration-only tints, never UI or text: `brew` #5A3826 (marbling, pecans), `crust` #B9773A (pastry).
Never use `ply` as text on `wall` (2.3:1). Fields are flat colour; no gradients and no wood-grain or concrete photo textures.
Focus ring: 2px `ink`, offset 3px on light grounds; 2px `oak` on `ink`.

## 4. Type
Two families, both via `next/font/google`, subsets `["latin", "latin-ext"]`. `latin-ext` is
required because ō (U+014D) is not in Google's latin subset; both faces were checked and contain it.
(Zen Maru Gothic and Zen Kaku Gothic New don't contain ō. Don't swap to them.)
- **Display: M PLUS Rounded 1c**, weights 300 and 400. This is the one soft rounded detail. It is
  used only for the hero name, the header "kyō" mark and the "kyō" printed on the cup.
- **Text: M PLUS 1** (variable). Weights: 300 for headings, 400 for body, 500 for labels and buttons.
  It shares the same skeleton as the rounded face, square-ended.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1.75rem + 5.5vw, 6.25rem)`: 49px @390, 100px @1440 | Hero name only. Rounded 300, line height 1.05 (it wraps to 2 lines), tracking 0 |
| `--step-head` | `clamp(2rem, 1.5rem + 2vw, 3rem)`: 32 / 48px | Section headings. M PLUS 1 300, line height 1.15 |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)`: 22 / 26px | Hero line, product and menu-category names, phone number, rating line, header "kyō" (rounded 400). Line height 1.35 |
| `--step-body` | `clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)`: 17 / 18px | Running text, menu items, prices, hours, buttons (500). Line height 1.6, max 60ch |
| `--step-small` | `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)`: 13 / 14px | Captions, review-theme labels, counter-band address, banner. 500, line height 1.45 |

Ratios: 13→17→22→32→49 at 390px (1.31, 1.29, 1.45, 1.55); 14→18→26→48→100 at 1440px (1.29, 1.44, 1.85, 2.08).
Sentence case everywhere. No all-caps or tracked labels, no mono. Use `tabular-nums` on prices and hours.
Check at 1024 and 1280 that "Kyō Coffee" holds one line of the hero name. If it doesn't, lower the vw term, not the minimum.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px. 12 columns, 24px gap on desktop (16px on phone) |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768) / 40px (≥1200) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥768) |

- Spacing scale is 4, 8, 12, 16, 24, 32, 48, 64. Heading to content is 24px (16px on phone). Space above a heading is at least twice the space below it.
- **Battens:** 2px lines. Use `oak` on `ply`, `ply` on `wall`, and `wall` on `concrete`. They are static borders between panels, never decoration on their own.
- **Corners:** 0 everywhere, buttons included. Roundness lives only in the display letterforms.
- **Buttons:** 48px tall, 20px side padding, M PLUS 1 500 at `--step-body`.
- **Proximity:** a price sits inline, 12px after its item name (no dot leaders, no right-aligned price column). Captions sit 12–16px under their drawing. The hours table's day column is a fixed 9em with the time right beside it. The cup caption sits on the counter directly under the cup.
- **Wide screens:** every section has a two-, three- or twelve-column composition at 1440 (see §7). No section is a lone centred column.
- **Lists:** menu items and themes use `--step-body`; product and category names use `--step-lead`. Never use head or display size for a list.

## 6. Products on the page
There are no owner photos (photo-1 to photo-3 are customer uploads and are reference only), so the
products are five flat SVG illustrations of specific items:
1. **Marbled Cold Brew** (review 3, photo 3). Hero, large: about 260×360 on desktop, 170×235 on phone. A clear tapered cup with a lid line, ice, milk below, and cold brew marbling down into it. The cup is printed "kyō" in the rounded face, in `wall`. No kettle mascot.
2. **Manual brew** (review 2, photo 1 bar). In the Manual brew menu panel, about 120px tall: a metal cone dripper on a clear glass server with brew inside.
3. **Pecan tart** (review 5). Bakes, large, about 320px: a whole round tart with a ring of pecan halves on the ridged, speckled stoneware plate.
4. **Apple tart** (photo 3). Bakes, about 200px: a wedge of fanned, caramelised slices with charred edges, on the same plate.
5. **Bun tray** (photo 1 case). Bakes, about 200px: a wooden tray on checkered paper with glazed soft buns and two golden loaves.

Style: flat palette shapes plus the two tints, and one contact shadow per object (`ink` 12%). No
outlines except the clear cup and server (`ink` 1.5px at 45%). Speckles are `ink` dots at 25%; plate
ridges are short radial strokes. Each is an inline SVG with `role="img"` and an Indonesian `aria-label`.
The "Ruang di Kyō" scenes show the place and don't count.

## 7. Sections
Copy for every section is in the PRD's sections table; only layout decisions are here.

**Hero** (`ply`, `oak` battens). Purpose: "that's us", today's hours, directions. Solid "Petunjuk
Arah", outline "WhatsApp". The concrete counter band carries the address and the cup caption. Desktop
height is min(100svh, 820px).
```
Hero: phone (390)                   Hero: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Draf mockup… (banner, ink)      |  | Draf mockup untuk Kyō Coffee Roaster… (banner)                    |
|kyō                 Menu  Lokasi|  |  kyō                                         Menu   Ruang   Lokasi |
|--------------------------------|  |  --------------------------------------+-------------------------- |
|Kyō Coffee                      |  |  Kyō Coffee                            |                           |
|Roaster        (display, ink)   |  |  Roaster                 (display)     |         .-------.         |
|Kopinya serius. Ruangnya tenang.|  |                                        |         |  kyō  |  cup    |
|Kamu tinggal duduk.      (lead) |  |  Kopinya serius. Ruangnya tenang.      |         |~~~~~~~|  260x360|
|Buka hari ini 07.00–21.00       |  |  Kamu tinggal duduk.        (lead)     |         |≈≈≈≈≈≈≈|         |
|[Petunjuk Arah] [WhatsApp]      |  |  --------------------------------------|         |_______|         |
|--------------------------------|  |  Buka hari ini 07.00–21.00             |                           |
|           .-----.              |  |  [Petunjuk Arah]  [WhatsApp]           |                           |
|           | kyō |  cup 170x235 |  |===================================================================|
|           |≈≈≈≈≈|              |  |  Jl. Wirajasa / Jl. Raya Jatiwaringin No. 1   Marbled Cold Brew   |
|===========|_____|==============|  |  (concrete counter, small)                    (centred under cup) |
|   Marbled Cold Brew   (small)  |  +-------------------------------------------------------------------+
|Jl. Wirajasa / Jl. Raya Jati…   |   text panel 7 cols (8 below 1200px), cup panel 5 cols,
+--------------------------------+   horizontal oak batten between the line and the hours
```
On phone, the name, the line, the hours, both buttons and the top of the cup all fit in 390×844.

**Dari bar kami** (`#menu`, `wall`). Purpose: show the coffee is serious. Four panels split by `ply`
battens; Marbled Cold Brew is featured on a `ply` field.
```
Dari bar kami: phone (390)          Dari bar kami: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Dari bar kami            (head) |  |  Dari bar kami  (head) | Marbled Cold Brew  Rp 38rb | [dripper]    |
|Manual brew, minuman susu, dan  |  |                        | (ply field)                | Manual brew  |
|racikan rumah…           (body) |  |  Manual brew, minuman  | Kuat dan khas, tidak encer.|  dari Rp 35rb|
|+------------------------------+|  |  susu, dan racikan     | Di antara kopi hitam dan   | Gayo ·       |
||Marbled Cold Brew  Rp 38rb    ||  |  rumah… (body)         | latte.                     | Kerinci ·    |
||Kuat dan khas, tidak encer.   ||  |                        |----------------------------+--------------|
|+------------------------------+|  |                        | Berbasis susu  dari Rp 30rb| Ala Jepang   |
|[drip] Manual brew  dari Rp 35rb|  |                        | Kopi susu, pilihan susu,   | Matcha latte |
|       Gayo · Kerinci · Flores  |  |                        | racikan rumah…             | Hojicha latte|
|--------------------------------|  +-------------------------------------------------------------------+
|Berbasis susu  dari Rp 30rb     |   intro 4 cols; panels 8 cols as a 2x2 grid (4 + 4)
|--------------------------------|
|Ala Jepang  Matcha · Hojicha    |
+--------------------------------+
```

**Teman ngopi** (`ply`, `oak` battens). Purpose: the bakes. Like the plywood wall: one tall panel
(pecan tart) beside two short ones (apple tart, bun tray).
```
Teman ngopi: phone (390)            Teman ngopi: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Teman ngopi              (head) |  |  Teman ngopi  (head)                      |                       |
|Dari etalase kaca di samping    |  |  Dari etalase kaca di samping bar…        |  [pecan tart on       |
|bar… mulai Rp 25rb.      (body) |  |  Tart dan pastry mulai Rp 25rb.  (body)   |   stoneware, ~320px]  |
|--------------------------------|  |-------------------------------------------|                       |
|     [pecan tart ~240px]        |  |  [apple tart]        | [bun tray]         |  Pecan tart  (lead)   |
|Pecan tart               (lead) |  |  Tart apel   (lead)  | Bun & roti etalase |  Disebut enak dan     |
|Disebut enak dan direkomen…     |  |  Irisan apel karamel…| Bun berglasir…     |  direkomendasikan…    |
|--------------------------------|  +-------------------------------------------------------------------+
|[apple 120] Tart apel  / line   |   left 7 cols (heading row + 2 panels), right 5 cols spanning both rows
|[buns 120]  Bun & roti / line   |
+--------------------------------+
```

**Ruang di Kyō** (`#ruang`, `wall`). Purpose: the calm room and the night garden. Two placeholder
scenes: "Siang" (plywood grid, counter, window onto green) and "Malam" (`ink`, stones, shrubs, three
lit lamps), with the [MOCKUP] placeholder note.
```
Ruang di Kyō: phone (390)           Ruang di Kyō: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Ruang di Kyō             (head) |  |  Ruang di Kyō (head)  | [day room 4:5]        | [night garden 4:5]  |
|Terinspirasi taman batu dan     |  |  Terinspirasi taman   |  plywood grid,        |  ink, stones,       |
|ornamen kuil Jepang…     (body) |  |  batu… (body)         |  counter, window      |  shrubs, 3 lamps    |
|[day room 4:3]                  |  |                       | Siang · ruang dalam   | Malam · taman       |
|Siang · ruang dalam     (small) |  |  Ilustrasi sementara… |  (small, 12px below)  |  (small)            |
|[night garden 4:3]              |  +-------------------------------------------------------------------+
|Malam · taman           (small) |   4 / 4 / 4 cols
+--------------------------------+
```

**Kata mereka** (`concrete`, `wall` battens). Purpose: proof without quotes. The rating sits at lead
size, then four paraphrased themes with no names and no quotation marks.
```
Kata mereka: phone (390)            Kata mereka: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Kata mereka              (head) |  |  Kata mereka  (head)   | Marbled Cold Brew (small)| Kopinya        |
|4,6 dari 1.328 ulasan Google    |  |  4,6 dari 1.328 ulasan | Pas untuk pencinta kopi  | Istimewa, banyak|
|                         (lead) |  |  Google  (lead)        | hitam… (body)            | pilihan…       |
|Diringkas dari ulasan… (small)  |  |  Diringkas dari ulasan |--------------------------+----------------|
|--------------------------------|  |  Google. (small)       | Suasananya               | Pelayanannya   |
|Marbled Cold Brew       (small) |  |                        | Indoor-outdoor tenang…   | Staf ramah…    |
|Pas untuk pencinta kopi hitam…  |  +-------------------------------------------------------------------+
|---- x4 ------------------------|   4 cols + 8 cols (2x2)
+--------------------------------+
```

**Kunjungi kami** (`#lokasi`, `wall`). Purpose: get there. Info first, then a lazy map embed.
```
Kunjungi kami: phone (390)          Kunjungi kami: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Kunjungi kami            (head) |  |  Kunjungi kami  (head)       | +---------------------------------+|
|Jl. Wirajasa / Jl. Raya         |  |  Jl. Wirajasa / Jl. Raya     | |                                 ||
|Jatiwaringin No. 1, Cipinang    |  |  Jatiwaringin No. 1, …       | |  Google Maps embed, 4:3         ||
|Melayu, Makasar, Jakarta Timur  |  |  Senin–Kamis   07.00–21.00   | |  (7 cols)                       ||
|13620                    (body) |  |  Jumat–Minggu  07.00–22.00   | |                                 ||
|Senin–Kamis    07.00–21.00      |  |  Parkir di pinggir jalan     | +---------------------------------+|
|Jumat–Minggu   07.00–22.00      |  |  terbatas.                   |                                    |
|Parkir di pinggir jalan terbatas|  |  [Petunjuk Arah]             |                                    |
|[Petunjuk Arah]   (full width)  |  +-------------------------------------------------------------------+
|[map 4:3]                       |   info 5 cols, map 7 cols
+--------------------------------+
```

**Hubungi kami + footer** (`ink`: night). Purpose: a real close. WhatsApp is solid `ply`; Telepon and
Petunjuk Arah are `oak` outlines. A full-bleed garden strip (stones, shrubs, six lit lamps) sits above the footer.
```
Hubungi kami: phone (390)           Hubungi kami: desktop (1440)
+--------------------------------+  +-------------------------------------------------------------------+
|Hubungi kami      (head, wall)  |  |  Hubungi kami  (head)    0812-1284-4322  (lead)                   |
|0812-1284-4322           (lead) |  |                          [WhatsApp] [Telepon] [Petunjuk Arah]     |
|[WhatsApp]      (full width)    |  |                                                                   |
|[Telepon]                       |  |  ~~~ garden strip, full bleed: stones, shrubs, 6 lamps lit ~~~~~~ |
|[Petunjuk Arah]                 |  |  Kyō Coffee Roaster · Jl. Wirajasa / Jl. Raya Jatiwaringin No. 1 ·|
|~~ garden strip, lamps lit ~~~~~|  |  Buka setiap hari mulai 07.00                     (small, wall)   |
|Kyō Coffee Roaster · … (small)  |  +-------------------------------------------------------------------+
+--------------------------------+   heading 5 cols, number + buttons 7 cols
```

## 8. Motion
**Signature: the pour (hero cup).** The SVG has a static `clipPath` for the cup's interior. Inside it:
a static milk layer, a `brew` group (an `ink` body with `brew` streaks reaching into the milk) and a
`marble` group (swirls at the boundary). Ice and the cup outline sit on top.
- The `brew` group moves `y` from minus the interior height to 0: 1.2 s, `expo.out`, after a 0.15 s delay.
- The `marble` group goes from opacity 0 and y −8 to its final state: 0.6 s, `power2.out`, starting at 0.7 s.
- Total about 1.3 s. It triggers once, with ScrollTrigger at "top 80%" of the cup, which fires
  immediately on load when the cup is in view. It never loops or replays.
- The server-rendered markup is the finished cup. Reduced motion or no JS shows exactly that.
- Hero text never animates.

**Supporting.** The starter `Reveal` runs once per section on sections 2 to 7 (20px, 0.6 s,
`power2.out`); nothing inside a section animates on its own. Button hover fades a `::after` tint
from opacity 0 to 1 in 180 ms; press is `scale(0.98)` in 120 ms. Both are CSS only. Lenis uses
starter defaults.

Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.2 }`, keep
`ease`, `distance.reveal = 20`, and add `pour = { delay: 0.15, marbleAt: 0.7, marble: 0.6 }`.

## 9. What makes it this shop
- The hero is Kyō's own bar: plywood panels with pale battens (photo 1), a polished concrete counter
  (photo 2), and on it the Marbled Cold Brew in a clear cup printed with a lowercase "kyō" (photo 3, review 3).
- The section grids follow the irregular plywood panel module: one tall panel beside two short ones,
  with battens as dividers.
- The page scrolls from daylight plywood to the garden after dark, with its lamps lit (reviews 1, 2).

## 10. Avoid
- Category ruts: cream + serif + terracotta; beige "Japandi" with a dark-overlay hero photo; brown and
  gold with bean icons, steam squiggles or "Our Story" copy.
- Japanese costume: torii, sakura, enso circles, sun-ray motifs, raked-sand backgrounds, or any Japanese
  script the shop hasn't used.
- Redrawing the kettle mascot. It is only seen on a customer photo, so the brand is a text wordmark.
- Wood-grain or concrete photo textures, glows, gradients, and lamp bokeh or particles.
- A menu with dot leaders and prices pinned to the far edge; a row of equal icon cards.
- Any work-from-cafe pitch (outlets are few, review 1).
- Ways this concept goes wrong:
  - Honey everywhere until it reads as brown. `ply` owns the hero, bakes and one menu panel only.
  - The rounded face creeping into headings.
  - Battens multiplying into a cage.
  - The pour stretching into a loader.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (the 4,6 rating and product names sit at lead, under head)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices inline, cup caption under the cup, hours table fixed 9em)
- [x] Every section has a desktop wireframe that uses the width on purpose (7/5, 4/8, 7/5, 4/4/4, 4/8, 5/7, 5/7)
- [x] At least 3 products shown (5 illustrated: Marbled Cold Brew, manual brew, pecan tart, apple tart, bun tray)
- [x] Within motion-rules.md (one signature moment, section reveals only, transform and opacity, reduced motion = final state, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
