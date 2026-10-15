# Design brief: Kawan Kopi, Cakung

All copy is Bahasa Indonesia (`lang="id"`). `*` in wireframes = `[MOCKUP]`, rendered with `data-mockup`.

## 1. Concept
The page is Kawan Kopi's own bar cut in section, read top to bottom (glowing ceiling panels, the
teak wall carrying the name, the black counter edge with drinks standing on it, the grey-green
stack-bond tile holding hours and buttons), and below it every drink is drawn cut open with notes
beside its layers, because this shop is a barista who explains what's in your cup (review 2), in a
room people photograph for its tiles, wood and light.
Signature moment, "Lampu menyala": on load the ceiling panels switch on one by one, left to right
(opacity, about 1.0 s), and a glint lands on the glasses on the counter.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Materials from photo-1 (slate grey-green stack-bond tile with white grout, teak wall panels, backlit diagonal ceiling panels, black counter edge) and photo-2/3 (orange wood tables, long low-sun shadows, Dirty Latte in a short rippled glass, citrus drink with a dried orange wheel). Products, praise and register come from brief.md; exact hours, phone and place ID from raw.json. There are no owner photos, so every visual is drawn. |
| impeccable | Persuade mode. I did the new-work "create the world" step by hand: I didn't run the launcher because it downloads a binary outside docs/, so there was no concept-seed roll. I weighed 7 candidates (tile bar, ceiling light panels, tray menu card, cashier receipt, ruko facade "No. 11", roastery bag label, WhatsApp chat with the barista) and kept the bar's own materials as the page's carrier, with the cut-through glass as the product form. Also from impeccable: colour as committed fields, a typeface drawn from the shop's world, one authored focal motion, and no cream + serif + terracotta default. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `ubin` (tile) | #3B4943 | Hero counter front, Kopi kami, Kunjungi kami grounds | lampu on ubin 8.65 |
| `nat` (grout) | #566660 | 1 px grout lines on ubin only. Decorative, never text | 1.56 on ubin, quiet on purpose |
| `lampu` (light) | #FBF4E8 | Ceiling panels, text on dark grounds, drink cards, Kerja + Kata grounds | tinta on lampu 14.5 · ubin on lampu 8.65 |
| `kayu` (wood) | #A65220 | Hero wall, Teman ngopi, Hubungi kami grounds; prices on lampu | lampu on kayu 4.99 · kayu on lampu 4.99 |
| `matahari` (sun) | #F2B45A | Primary buttons, focus ring on dark grounds, "hari ini" tag | tinta on matahari 8.66 · vs ubin 5.16 · vs kayu 3.36 (non-text only) |
| `tinta` (ink) | #1C2420 | Text on lampu, ceiling band, counter edge, footer | lampu on tinta 14.5 |

Strategy: Committed. Ubin and kayu own whole regions (about 70% of the page); lampu is the reading
field; matahari is the only accent, and it always means "do this".
Illustration-only fills (not UI tokens, never used for text): espresso #3A2416, crema #B97A45,
citrus #E58A3A, toast #D99A45, toast-dark #B5702C, strawberry #C8423A, leaf #6F9A4E,
leaf-dark #4E7A3A, glass #E3EAE5 at 70%, plate = lampu, plate rim = tinta, cast shadow = tinta at 25%.

## 4. Type
**Sofia Sans Condensed** 700 (display, headings, item names) + **Sofia Sans** 400/500/600 (statements,
body, labels), loaded with `next/font/google`, subset latin, `display: swap`. The upright condensed
letters stand like the stack-bond tiles, and Sofia's soft curves supply the brief's "little warmth".
Measured: "Kawan Kopi" is 4.19 em wide in Condensed 700.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.25rem, 2.9rem + 6.2vw, 9.5rem)`: 71px @390, 94 @768, 136 @1440 | Hero "Kawan Kopi" only. Leading 0.95, `white-space: nowrap`, tracking -0.01em. Width 296px of 350 @390, 288 of 320 @360, so it's always one line |
| `--step-head` | `clamp(2.375rem, 1.7rem + 2.8vw, 4.25rem)`: 38 / 49 / 68px | Section h2. Leading 1.05. The longest, "Kerja atau santai", is 230px @390, so one line |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)`: 22 / 25 / 28px | Statements (Sofia Sans 400, leading 1.3, max 34ch); item names h3 (Condensed 700, leading 1.1); phone number; paraphrased reviews |
| `--step-body` | `clamp(1.0625rem, 1.02rem + 0.18vw, 1.1875rem)`: 17 / 17.7 / 19px | Running text, list items, prices (600), buttons (600). Leading 1.55, max 60ch |
| `--step-small` | `0.84375rem`: 13.5px | Layer keys, hour labels, captions, the "hari ini" tag. Sofia Sans 600, leading 1.4, +0.02em |

Ratios @390: 1.86 · 1.73 · 1.29 · 1.26. @1440: 2.0 · 2.43 · 1.47 · 1.41. Sentence case throughout:
no uppercase tracked labels.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px ≥768 / 40px ≥1200 |
| Section padding phone / desktop (`--section-y`) | 64px / 96px ≥768 / 120px ≥1200 |

12-column grid, gap 24px (16px on phone). Spacing scale 4/8/12/16/24/32/48/64/96/120. Corner radius
3px everywhere, like the tiles; no pills. Buttons are 52px tall. Tile ground: 1px `nat` lines,
cell 44×96px desktop and 30×66px phone, stack bond (aligned, not offset).
- **Proximity:** prices sit inline after the item name (12px gap), wrapping directly under the name in narrow cards. Layer keys sit ≤24px from the glass, joined by a 16px tick at the layer's height. Hour labels sit inside the ends of the lit span. The "hari ini" tag sits 8px after its row label.
- **Wide screens:** every desktop wireframe below uses the full 1200px on purpose.
- **Lists:** drink and plate names at `--step-lead`, notes at `--step-body`. Never head or display.

## 6. Products on the page
Eleven drawn products. All are inline SVG in one hand: flat fills, no outlines except the glass edge,
and one light direction per section.
- **Drinks, Kopi kami (4).** Side view, cut through: the glass is a light outline, the liquid layers are flat fills, and each has one lampu glint stripe. A layer key sits beside each.
  1. Americano: straight tumbler, espresso body, thin crema line. Key: "espresso + air".
  2. Kopi Kawan Lama: taller glass, deep coffee band over a creamy caramel body. Key: "lebih tegas" / "tetap creamy". These are the reviewer's words, not a recipe.
  3. Dirty Latte: short rippled glass as in photo-2/3, espresso marbling into white milk. Key: "espresso" / "susu dingin" *.
  4. V60 *: cone dripper on a glass server, amber coffee. Key: "seduh manual" / "biji Indonesia, bergantian" *.
- **Food, Teman ngopi (4).** Seen from above on the wood ground, each with a long low-sun shadow to the lower right (photos 2–3). Plates are lampu with a tinta rim.
  5. French toast: golden slab, two ice-cream scoops, two strawberry halves. 6. Salad: greens, cream dressing zigzag, red dip ramekin. 7. Sandwich panggang: two toasted triangles. 8. Pastri: two croissants.
- **Hero (3).** The same drawings standing on the counter edge: Americano, Dirty Latte, and the citrus iced drink (tall faceted glass, orange body, foam, dried orange wheel). The citrus drink is unnamed and gets alt text only.

The vessel shapes for Americano, Kopi Kawan Lama and V60 are guesses, so they go on the owner checklist. `photo-*.jpg` never ships.

## 7. Sections
**Hero.** Purpose: the owner recognises the bar; visitors get hours and directions. Bands from top to bottom: tinta ceiling band (152px desktop / 76 phone) with lampu panels, rotated -2° and bleeding past both edges, band `overflow: hidden`; kayu wall with the h1 and the warm line*; 10px tinta counter edge with the drinks standing on it; ubin tile front with today's hours and the buttons. No nav.
```
Hero: phone (390)          Hero: desktop (1440)
+--------------------+     +------------------------------------------------+
| draft banner (id)  |     | draft banner (id)                              |
|/[==] [==] [==]/    |     |/[====] [====] [====] [====] [====] [====]/     |
+--------------------+     +------------------------------------------------+
| Kawan Kopi  (disp) |     | Kawan Kopi (display, cols 1-7)           kayu  |
| Cakung · Jaktim    |     | Cakung · Jakarta Timur (lead)          _   |   |
| warm line* (lead)  |     | warm line* (lead, 34ch)       [c]  [d]  [ | ]  |
|     [c]  [d]  [|]  |     |                     drinks cols 8-12 on edge   |
+====================+     +================================================+
| Buka hari ini      |     | Buka hari ini          [ Petunjuk Arah ]       |
| 07.30–22.00 (lead) |     | 07.30–22.00 (lead)     [ Telepon ]       ubin  |
| Sen–Jum · Sab–Min  |     | Sen–Jum 07.30–22.00 · Sab–Min 07.30–23.00      |
| [ Petunjuk Arah  ] |     |  hours cols 1-5, buttons from col 6            |
| [ Telepon        ] |     +------------------------------------------------+
+--------------------+
```
**Kopi kami** (ubin, continuing the counter front). Four lampu cards. Phone cards are rows (glass 104px left, text right, layer key as a small line under the note); from 768 they're 2 columns, from 1200 4 columns, about 262px each (vertical card, glass left, key right beside the layers; keys may wrap to 2 lines).
```
Kopi kami: phone           Kopi kami: desktop
+--------------------+     +------------------------------------------------+
| Kopi kami (head)   |     | Kopi kami (head)     Pesan apa hari ini? Biar  |
| Pesan apa hari ini?|     |  cols 1-5            barista kami ceritain ... |
| +----------------+ |     | +---------+ +---------+ +---------+ +---------+|
| |[gl] Americano  | |     | | [gl] -- | | [gl] -- | | [gl] -- | |[v60] -- ||
| |     Rp 25rb*   | |     | |      -- | |      -- | |      -- | |      -- ||
| |     note       | |     | |Americano| |Kopi K.  | |Dirty    | |V60 hari ||
| |     key (small)| |     | |Rp 25rb* | |Lama 28* | |Latte 32*| |ini*     ||
| +----------------+ |     | | note    | | note    | | note    | | note*   ||
|  x4 stacked        |     | +---------+ +---------+ +---------+ +---------+|
+--------------------+     +------------------------------------------------+
```
**Teman ngopi** (kayu). Plates from above, name + price + note under each. The no-full-meals line is in the intro.
```
Teman ngopi: phone         Teman ngopi: desktop
+--------------------+     +------------------------------------------------+
| Teman ngopi (head) |     | Teman ngopi (head)   Piring ringan dan yang    |
| intro, no meals    |     |  cols 1-5            manis... tidak ada makanan|
| (FT)\\    (Sal)\\  |     |  (FT)\\      (Sal)\\      (Snd)\\     (Pas)\\  |
| French    Salad    |     |  French toast Salad      Sandwich    Pastri    |
| toast     harga*   |     |  Rp 38rb*     harga*     harga*      harga*    |
| (Snd)\\   (Pas)\\  |     |  note         note       note        note      |
| 2x2 grid      kayu |     |  4 columns                              kayu   |
+--------------------+     +------------------------------------------------+
```
**Kerja atau santai** (lampu). Opening hours drawn as lit panels: an ubin track on a 06.00–24.00 scale, with the lampu lit span 07.30–22.00 (weekdays) and 07.30–23.00 (weekend). Facts list uses 6×12px ubin tile bullets.
```
Kerja: phone               Kerja: desktop
+--------------------+     +------------------------------------------------+
| Kerja atau santai  |     | Kerja atau santai    Senin–Jumat               |
| statement (lead)   |     | statement (lead)     [|07.30=========22.00|  ] |
| Senin–Jumat        |     |  cols 1-5            Sabtu–Minggu [hari ini]   |
| [|07.30====22.00| ]|     |                      [|07.30==========23.00| ] |
| Sabtu–Minggu       |     |                      ▮ Wifi        ▮ Kerja     |
| [|07.30=====23.00|]|     |                      ▮ Nongkrong   ▮ Pagi*     |
| ▮ 4 facts    lampu |     |  bars + facts cols 7-12                 lampu  |
+--------------------+     +------------------------------------------------+
```
**Kata mereka** (lampu). Four paraphrased themes with no quotation marks and no names. Rating from the listing.
```
Kata mereka: phone         Kata mereka: desktop
+--------------------+     +------------------------------------------------+
| Kata mereka (head) |     | Kata mereka (head) | Kopi          Pelayanan    |
| 4,9 · 233 ulasan   |     | 4,9 dari 233       | paraphrase    paraphrase   |
| Kopi (small)       |     | ulasan Google      |---------------------------|
| paraphrase (lead)  |     | Diringkas dari     | Kalau ada     Suasana &    |
| ---- x4            |     | ulasan (small)     | salah ...     harga ...    |
+--------------------+     +------------------------------------------------+
```
**Kunjungi kami** (ubin tile). Map, address, hours, and the limited-parking note with the parking tip placeholder*.
```
Kunjungi: phone            Kunjungi: desktop
+--------------------+     +------------------------------------------------+
| Kunjungi kami      |     | +-------------------------+  Kunjungi kami     |
| address (lead)     |     | |                         |  address (lead)    |
| [ Petunjuk Arah  ] |     | |  map 4:3, cols 1-7      |  [ Petunjuk Arah ] |
| +----------------+ |     | |  3px radius, lazy       |  Senin–Jumat ...   |
| | map 1:1        | |     | |                         |  Sabtu–Minggu ...  |
| +----------------+ |     | +-------------------------+  Parkir terbatas.  |
| hours, parking*    |     |                              Tips parkir*  ubin|
+--------------------+     +------------------------------------------------+
```
**Hubungi kami** (kayu), then the footer (tinta, small: name · address · "Draf mockup").
```
Hubungi: phone             Hubungi: desktop
+--------------------+     +------------------------------------------------+
| Hubungi kami       |     | Hubungi kami (head)    0851-1131-4830 (lead)   |
| line* (lead)       |     | line* (lead) cols 1-6  [Telepon] [WhatsApp*]   |
| 0851-1131-4830     |     |                        [Petunjuk Arah]   kayu  |
| [ Telepon        ] |     +------------------------------------------------+
| [ WhatsApp*      ] |     | Kawan Kopi, Cakung · Ruko Maison ... · Draf    |
| footer       tinta |     +------------------------------------------------+
+--------------------+
```

## 8. Motion
**Signature, "Lampu menyala" (hero, on load).** The panels start dim (opacity 0.12) via a `.js` class
that an inline head script sets before paint, then go to 1 left to right: 0.5s each, 0.1s stagger,
`power2.out`, 6 panels on desktop and 3 on phone, finishing by 1.0s. At 0.6s the glint stripe on each
hero glass fades 0 to 1 in 0.4s. No flicker, no loop, no text animation; the h1 and buttons are
static and visible from first paint. A CSS fail-safe sets panels and glints to 1 at 2.5s if the JS
never runs. Reduced motion: panels and glints are lit at first paint, with no movement.
**Supporting.** Starter `<Reveal>`, once per section block (Kopi grid, Teman grid, Kerja, Kata,
Kunjungi, Hubungi): 20px, 0.7s, `power2.out`. Buttons: hover `translateY(-1px)` 150ms, press
`scale(0.98)` 100ms. Cards and plates are not interactive and get no hover. Lenis on starter defaults.
Tokens for `lib/motion.ts`: `duration.hero 1.0`, `duration.panel 0.5`, `duration.glint 0.4`,
`stagger.panel 0.1`; the rest stay at the starter values.

## 9. What makes it this shop
- The first screen is their bar in section: diagonal backlit panels, teak wall, black counter edge, grey-green stack-bond tile, in that order, and the lights come on.
- Drinks are drawn cut open, with the barista's notes beside the layers. Kopi Kawan Lama's notes are the reviewer's own words ("lebih tegas", "tetap creamy").
- Opening hours are drawn as lit panels on a tile track, and the food sits on their orange wood in long afternoon shadows.

## 10. Avoid
- Coffee clichés: beans, latte art, steam icons, kraft paper, chalkboard menus, script fonts.
- The AI default of cream ground + serif + terracotta. Lampu is never the dominant ground; kayu is a field, never a small accent; no serif anywhere.
- Painting the hero as a picture of a room (perspective, furniture). The bands are flat and carry real text and buttons.
- Bright white grout behind text. The grid stays `nat`, quiet.
- A blueprint costume: no blue, no graph paper, no dimension arrows, no mono "spec" labels.
- Panels that flicker, pulse or loop; sun streaks laid under text; quotation marks or star rows on paraphrases.
- Carousels hiding products, English UI strings (banner, buttons, alt text), any `photo-*.jpg`.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (min ratio 1.26; names, prices, paraphrases, phone number all ≤ lead)
- [x] Max content width set; no detail pinned far from what it describes (prices inline, keys ≤24px with ticks, hour labels inside spans)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns or a 4-up grid in every section)
- [x] At least 3 products shown (food and product shops): 4 drinks + 4 plates drawn, 3 more in the hero
- [x] Within motion-rules.md (one signature, opacity only, section reveals, nothing hidden, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
