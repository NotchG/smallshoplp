# Design brief: SAYKOP

Precedence: CLAUDE.md → brief.md → these guardrails → motion-rules.md → impeccable.
All copy in Bahasa Indonesia. Mode (impeccable): Persuade.

## 1. Concept
The page is SAYKOP's orange mural wall: tangerine ground, a navy single-line drawing of faces,
and the white arch onto the bar, with the shop's named drinks lined up like the characters they
sound like. No other coffee shop nearby has that wall or those names, so the site is built from both.
Signature moment: on load, the navy line draws itself around the arch and one of its faces blinks
once at the visitor.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned world (tangerine wall, navy line faces, white arch, pine counter, encaustic tiles), named drinks, WFC comforts, hours, no usable photos, so everything is drawn |
| impeccable | Persuade mode; "the brief wins", so the pinned mural world at full strength; Committed colour (tangerine ~40% of the page); faces with a point of view; drawn assets instead of chrome; one orchestrated motion moment; no centred-headline-over-equal-cards. Raises from its candidate list: drinks as named characters in a line-up, and the floor tiles as a threshold. Launcher and concept-seed not run (they write outside `docs/`) |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `wall` | #F07F35 | Hero, "Nyaman buat kerja", closing band; focus ring on navy | navy on wall 4.60:1 (AA body). Plaster/white on wall fails (2.5–2.8): never put light text on wall |
| `navy` | #152E78 | The only text colour on wall, plaster and pine; mural line; primary buttons; "Kata mereka" ground | on plaster 11.2:1, on pine 5.65:1; plaster on navy 11.2:1; wall on navy 4.60:1 |
| `plaster` | #F7F3EC | Ground for drinks and visit sections; arch interior; text on navy | (see navy) |
| `pine` | #DCA46B | "Teman ngopi" ground (the plank table); hero counter band | navy on pine 5.65:1 |
| `rust` | #A9461F | Tile orange: prices and today's-hours marker on plaster only; tile pattern | rust on plaster 5.30:1. Never on pine (2.6) or wall |
| `char` | #23211F | Tile black in the tile strip; coffee fills in drawings. Not a text colour | decorative |

Light page. Scene: people on laptops from late morning to 22.30 under warm pendant lights; the
page is lit the same way, orange and white with navy ink. Illustration-only fills (never UI):
berry #7A2638, lemon #F2D46B, lavender #7B54A6, mango #F6A93B, red velvet #B32639,
cream #F4E7D2, mint #6FAE8A, leaf #4F8A3C, coffee #5A3622.

## 4. Type
Families via `next/font/google`, subset latin, `display: swap`:
- Display: **Shantell Sans** (variable, axes `INFM`, `BNCE`). A hand-drawn face from the
  single-line drawing tradition the mural belongs to. Display/head: weight 750, `INFM` 55,
  `BNCE` 0 (builder may tune INFM 40–70; never animate axes). Drink names: weight 650, `INFM` 40.
- Body: **M PLUS Rounded 1c** 400 / 500 / 700. The clean rounded sans the brief asks for.
- Display face sets only: "SAYKOP", "Saya Kopi", section headings, drink and dish names, the
  comfort statement. Everything else (hero line, descriptions, themes, buttons, hours, labels) is body face.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 1rem + 14vw, 9.5rem)` (64 → 152px) | "SAYKOP" only, one line, `white-space: nowrap`, line-height 0.9 |
| `--step-head` | `clamp(1.875rem, 1.2rem + 2.6vw, 3.5rem)` (30 → 56px) | section headings, line-height 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.625rem)` (22 → 26px) | "Saya Kopi", hero line, drink and dish names, statements, praise themes; 1.3 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17 → 19px) | descriptions, prices, hours, buttons, lists; 1.55 |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.12vw, 0.875rem)` (13 → 14px) | captions, "Diringkas dari ulasan Google", banner; 1.4 |

Ratios checked at 320, 390, 768, 1024, 1440: smallest gap is 1.29 (lead/body at 320–390).
"SAYKOP" must fit one line at 320px; if Shantell measures wider than ~4.1em for the word, lower
the `14vw` term, not the max. Hand-drawn face never sets paragraphs.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 1024px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 768px) |

- Desktop is a 12-column grid inside `<Container>`, 32px gaps. Splits named per section below.
- Prices sit right after the item name (12px gap), never right-aligned across a column.
  Hours: time column starts 16px after the longest day label. Arch caption within 16px under the arch.
- Tile strip and section grounds are full-bleed on the parent; content stays in `<Container>`.
- The mural line never crosses text. It lives around the arch and in the closing band only.
- No boxed cards with shadows. Drinks stand on a drawn line; dishes sit straight on the pine ground.
- Corners: arch top fully round; buttons 999px pills; map 16px radius. Nothing else rounded.

## 6. Products on the page
No owner photos exist, so every product is a flat SVG illustration, marked `data-mockup`
(colours and plating are drawn from the brief and the customer photos as reference, never traced).
Style: flat fills, 3px navy outline with slightly uneven line, no gradients or shadows, side view
for glasses, top-down for plates (as in photo-3).
- **Drinks (8), one parametric `DrinkGlass`**: tall straight tumbler, steel straw, outlined ice.
  Axelle: berry body, small navy-outline flower on the rim. Black Lemonade: lemon bottom, coffee
  top, lemon wheel. Mariani: lavender, lemongrass stalk. Misty: coffee bottom, thick cream top, mint
  leaf. Dirty Latte: cream cap over coffee over milk. Mango Yakult: mango. Iced Red Velvet: red
  velvet with a cream swirl. Lembayung: lavender over mango bands (colour guessed from the word,
  owner to confirm). Hero Axelle is the same component at 2x.
- **Dishes (3)**: Karage Salted Egg in a white bowl (rice, karaage under thick yellow sauce, sesame
  dots, chilli flecks). Hot-plate chicken: black cast-iron plate on a rounded pine board, rice dome
  with fried shallots, chicken, green sambal, crispy cabbage. Nasi goreng: black plate with white
  dots, banana leaf, fried rice with corn and chilli, krupuk, cucumber, lettuce, salted-egg chicken.
- Chicken steak and churros are text items (no visual facts beyond the name).

## 7. Sections
**Hero.** Recognition, today's hours, directions. Wall ground. Arch: plaster, three line-drawn
pendant lamps, hero Axelle glass, pine counter band with diagonal planks and two bean jars.
Desktop split 7/5. Top-right anchor links (Minuman, Makanan, Lokasi) + small WhatsApp pill.
Today's-hours dot is navy here (rust is for plaster only). Arch caption sits 16px under the arch.
```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +----------------------------------------------------------------+
| draft banner (id)    |   | draft banner (id)                                              |
+----------------------+   +----------------------------------------------------------------+
| SAYKOP               |   |                                Minuman  Makanan  Lokasi  (WA)  |
| Saya Kopi            |   |                               ~~(o o)~~~~~~~~~~~~~~(o o)~~     |
|                      |   | SAYKOP                       ~~   .--------------.    ~~       |
| Kopi kreatif dan     |   | Saya Kopi                   ~~   /  lamp lamp    \   ~~       |
| tempat nyaman buat   |   |                                  |                |            |
| betah lama di Kayu   |   | Kopi kreatif dan tempat nyaman   |  [AXELLE glass]|            |
| Putih.               |   | buat betah lama di Kayu Putih.   | jar       jar  |            |
| ● Buka hari ini      |   |                                  |///pine counter/|            |
|   11.00–22.30        |   | ● Buka hari ini 11.00–22.30      +----------------+            |
| [ Petunjuk Arah    ] |   | [ Petunjuk Arah ] [ WhatsApp ]   Axelle · Rp 30rb              |
| [ WhatsApp         ] |   |                                  Belum pernah coba Axelle?     |
| ~(o o)~ .-------. ~  |   |                                  Ini saatnya.                  |
|  ~~    / Axelle \    |   +----------------------------------------------------------------+
| tile strip           |   | ◇◆◇◆◇◆◇◆ encaustic tile strip, full bleed, 64px ◇◆◇◆◇◆◇◆◇◆◇◆  |
+----------------------+   +----------------------------------------------------------------+
```
**Minuman andalan** (`#minuman`). The drinks as a line-up. Plaster. Desktop: heading cols 1–5,
intro cols 7–12; then two rows of four glasses standing on one continuous wavy navy shelf line.
Phone: rows, glass 72px left, name + price + line right; no shelf line.
```
+----------------------+   +----------------------------------------------------------------+
| Minuman andalan      |   | Minuman andalan               Delapan racikan, masing-masing   |
| Delapan racikan,     |   |                               punya nama. Kenalan dulu.        |
| kenalan dulu.        |   |    [glass]       [glass]        [glass]        [glass]         |
| [gl] Axelle Rp 30rb  |   | ~~~~~~~~~~~~~~~~~~~~ navy shelf line ~~~~~~~~~~~~~~~~~~~~~~~~~ |
|      berry, bunga    |   |  Axelle Rp 30rb  Black Lemonade  Mariani        Misty          |
| [gl] Black Lemonade  |   |  berry + bunga   Rp 27rb ...     ungu, serai    krim + mint    |
|      Rp 27rb ...     |   |    [glass]       [glass]        [glass]        [glass]         |
| ... 8 rows           |   | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ |
| Juga di menu: Elma,  |   |  Dirty Latte     Mango Yakult    Iced Red Velvet Lembayung     |
| Kopi Susu Saykop ... |   | Juga di menu: Elma · Kopi Susu Saykop Rp 22rb · Americano · V60|
+----------------------+   +----------------------------------------------------------------+
```
**Teman ngopi** (`#makanan`). Real food. Pine ground with faint vertical plank lines. Desktop:
Karage Salted Egg drawing ~440px cols 1–6 with name, price, line under it; cols 7–12 hold the
two other dishes side by side, then the text list. Phone: stacked, other dishes in 2 columns.
```
+----------------------+   +----------------------------------------------------------------+
| Teman ngopi          |   | Teman ngopi                                                    |
|   [Karage bowl]      |   |   [Karage Salted Egg bowl,        [hotplate]     [nasi goreng] |
| Karage Salted Egg    |   |    top-down, large]               Ayam Sambal    Nasi Goreng   |
| Rp 35rb              |   |                                   Ijo Hotplate   Saykop        |
| juicy, saus melimpah |   | Karage Salted Egg  Rp 35rb        nasi, kol..    daun pisang.. |
| [hotplate][nasgor]   |   | Karaage juicy, saus telur asin    Juga: Chicken steak saus     |
| Juga: Chicken steak, |   | melimpah, pas buat sendiri.       jamur Rp 40rb · Churros 22rb |
| Churros              |   |                                                                |
+----------------------+   +----------------------------------------------------------------+
```
**Nyaman buat kerja.** WFC answer. Wall ground. Desktop 5/7: statement (`--step-lead`, display
face) + evening table-check line left; four items right, 40px navy line icon within 16px of each label.
```
+----------------------+   +----------------------------------------------------------------+
| Nyaman buat kerja    |   | Nyaman buat kerja                                              |
| Colokan banyak,      |   | Colokan banyak, musiknya     (plug)  Banyak colokan            |
| musiknya pelan...    |   | pelan, kopinya enak.         (note)  Musik yang nggak ganggu   |
| (plug)  colokan      |   | Silakan betah.               (arch)  Indoor & semi-outdoor     |
| (note)  musik        |   | Malam hari stafnya keliling  (bike)  Parkir mobil dan motor    |
| (arch)  indoor/semi  |   | meja, nanya makanannya gimana.                                 |
| (bike)  parkir       |   |                                                                |
+----------------------+   +----------------------------------------------------------------+
```
**Kata mereka.** Proof without testimonials. Navy ground, plaster text, rating in wall orange.
Desktop 5/7: heading + "4,8 dari 1.034 ulasan Google" + caption left; five themes right
(`--step-lead`), separated by short wall-orange rules. No faces next to themes.
```
+----------------------+   +----------------------------------------------------------------+
| Kata mereka          |   | Kata mereka                   Minumannya kreatif, beda dari    |
| 4,8 · 1.034 ulasan   |   | 4,8 dari 1.034 ulasan Google  kedai lain di sekitar.           |
| Minumannya kreatif.. |   | Diringkas dari ulasan Google. ──                               |
| ──                   |   |                               Stafnya ramah, senang masukan.   |
| Stafnya ramah ...    |   |                               ── (3 more themes)               |
+----------------------+   +----------------------------------------------------------------+
```
**Kunjungi kami** (`#lokasi`). Get there. Plaster. Desktop 7/5: map iframe (4:3, 16px radius)
left; address, Petunjuk Arah, week hours (today bold, rust dot before the day, "hari ini"), parking.
```
+----------------------+   +----------------------------------------------------------------+
| Kunjungi kami        |   | Kunjungi kami                                                  |
| [ map 4:3         ]  |   | +--------------------------------+  Jl. Bangunan Timur No.13B  |
| Jl. Bangunan Timur   |   | |                                |  Kayu Putih, Pulo Gadung    |
| No.13B ...           |   | |          map embed             |  [ Petunjuk Arah ]          |
| [ Petunjuk Arah    ] |   | |                                | ● Senin–Kamis  11.00–22.30  |
| ● Sen–Kam 11.00–22.30|   | |                                |   Jumat        13.00–22.30  |
| Jumat  13.00–22.30   |   | +--------------------------------+   Sabtu–Minggu 11.00–22.30  |
| Sab–Min 11.00–22.30  |   |                                      Parkir mobil dan motor    |
+----------------------+   +----------------------------------------------------------------+
```
**Hubungi kami + footer** (`#kontak`). Close with action. Wall ground; static single-line face
(eyes closed, smiling) at cols 9–12. Desktop 7/5. Footer row on navy, plaster text.
```
+----------------------+   +----------------------------------------------------------------+
| Hubungi kami         |   | Hubungi kami                                   ~~(^ ^)~~       |
| Sampai ketemu di bar.|   | Sampai ketemu di bar.                         ~~  face  ~~     |
| [ WhatsApp         ] |   | [ WhatsApp ] [ Telepon ] [ Petunjuk Arah ]      ~~~~~~         |
| [ Telepon          ] |   | 0821-6485-3355 · Instagram (menyusul)                          |
| ~(^ ^)~              |   +----------------------------------------------------------------+
| footer (navy)        |   | SAYKOP · Saya Kopi · alamat · Ini contoh tampilan ...  (navy)  |
+----------------------+   +----------------------------------------------------------------+
```

## 8. Motion
**Signature moment (hero, on first paint, CSS keyframes, no JS needed):**
1. 0.15 s → 1.25 s: the mural line is revealed left to right by a transform-only wipe (outer
   wrapper `translateX(-100%)` → 0 with `overflow: hidden`, inner SVG `translateX(100%)` → 0),
   `cubic-bezier(0.65, 0, 0.35, 1)`. Reads as the line being drawn.
2. 1.45 s → 1.68 s: the eyes of the face left of the arch blink once: `scaleY` 1 → 0.12 (90 ms,
   ease-in) → 1 (140 ms, ease-out), `transform-box: fill-box`, origin centre.
Text, buttons and the arch are visible from the first frame; only the line moves.
Reduced motion: `animation: none` on both, line fully drawn, eyes open.

**Supporting:** starter `<Reveal>` once per section block below the hero (20px, 0.7 s,
`power2.out`), never on the hero, never per card. Drink glass on hover/focus-within: `rotate(-3deg)
translateY(-4px)`, 200 ms ease-out CSS. Buttons: press `scale(0.97)` 150 ms, colour shift on hover
200 ms. Nothing else. Motion tokens: starter `lib/motion.ts` unchanged; hero timings as CSS
variables `--hero-draw: 1.1s`, `--hero-ease: cubic-bezier(0.65, 0, 0.35, 1)` in `globals.css`.

## 9. What makes it this shop
- The hero is their wall: tangerine, a navy single-line face drawing and the white arch onto the
  bar with pine counter and bean jars, and the face blinks at you.
- The drinks are met by name, standing in a line-up on the mural's line, each glass drawn in its
  own colours (Mariani lavender with lemongrass, Black Lemonade in two layers, Misty's cream cap).
- The encaustic tile strip from their floor is the threshold under the hero, and the food sits on
  a pine plank ground like their tables. The evening table-check by staff is said out loud.

## 10. Avoid
- Coffee-shop defaults: brown and cream, bean icons, steam swirls, latte-art stock, serif "artisan" type.
- The AI default of cream ground, serif display and terracotta accent; and eight equal rounded cards with shadows.
- Copying the real mural; the drawing is original, fewer and simpler faces.
- Line motif as wallpaper: it appears in the hero, the shelf line and the closing band only, and never under text.
- Light text on tangerine; rust text anywhere but plaster.
- Cuteness creep: no bouncing letters, no animated `BNCE`, no faces next to review themes (they would read as fake reviewers).
- Inventing: no ingredients for Lembayung, Elma or Iced Red Velvet; no prices beyond the brief;
  no "buka setiap hari", "luas" or "tidak terlalu manis"; no reason given for Friday hours.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (min 1.29; drink names, themes and statements are `--step-lead`, under `--step-head`)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices 12px after names; hours time 16px after day; arch caption within 16px)
- [x] Every section has a desktop wireframe that uses the width on purpose (7/5, 5/7, 4-up line-up, 6/6, full-bleed tile strip)
- [x] At least 3 products shown (food and product shops) (8 drink drawings + 3 dish drawings)
- [x] Within motion-rules.md (one signature moment, transform/opacity only, section-level reveals, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
