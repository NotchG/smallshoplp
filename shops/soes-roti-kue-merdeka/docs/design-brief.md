# Design brief: Soes Roti Kue Merdeka

## 1. Concept
**"Dari pintu kaca ke etalase":** the page is a short walk into the toko on Balai Pustaka, built
only from the shop's own surfaces: the door lettering, the peach Merdeka box, the wood counter, and
the glass shelves with white price cards. The owner's "that's us" lives in those exact objects, not in
a generic bakery look.
Signature moment: the hanging sign on the door (in the photo it reads TUTUP/CLOSED) shows the real
status and today's hours, and swings once on load before settling.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Lockup ("Merdeka" brown script over orange "SOES · ROTI · KUE"), peach dotted box, wood cabinets, jars with taped price cards, hanging door sign, motorbike parking, every fact and [MOCKUP]; photo-2 (bakso) excluded. |
| impeccable | Persuade mode; the brief pins the world, so "the brief wins"; Committed colour (peach and wood each own whole sections); check against the AI bakery default of cream, serif and terracotta (so no serif, no terracotta); faces picked off its overused list; one authored focal motion from the subject's world. The concept-seed roll was not run because it needs a PRODUCT.md outside docs/. I weighed the candidates by hand: door lettering, Merdeka box, etalase and price cards, door sign, abon jars and brass scale, nota toko, Lebaran tin. I kept the first five as one place and dropped the last two because they aren't this shop's own. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kaca` | #FBF3E6 | Base ground: hero (door glass over the cream wall), camilan, kotakan, kunjungi | `tinta` 15.8:1 · `merdeka` 7.7:1 · `pintu` 5.0:1 |
| `kotak` | #F5D5BF | Peach box field with white dots (soes, kata mereka); button fill on `kayu` | `tinta` 12.6:1 · `merdeka` 6.1:1 · never `pintu` text (3.9:1) |
| `kayu` | #4A2713 | Wood-counter field (abon & telur asin, hubungi + footer) | `kaca` 12.0:1 · `kotak` 9.5:1 |
| `merdeka` | #7B3B1A | "Merdeka" script, section headings on light grounds, primary button fill | on `kaca` 7.7:1; `kaca` text on it 7.7:1 |
| `pintu` | #B4470F | Door orange: "SOES · ROTI · KUE", "BUKA" on the sign, links, focus ring on light grounds | on `kaca` 5.0:1 · on white 4.8:1 |
| `tinta` | #24170E | Body text, price-card text | on white 17.4:1 · on `kotak` 12.6:1 |

Helpers, not roles: white #FFFFFF for price cards, the sign and the box dots; chrome hairlines are
`tinta` at 18%. On `kayu`, the focus ring is `kotak`. Dots: two offset `radial-gradient` layers,
white at 0.8 opacity, 2.5px radius on a 24px grid, static.

## 4. Type
Two families via `next/font/google`, latin subset, `display: swap`: **Leckerli One** 400 (`--font-display`),
used for the word "Merdeka" only; **Archivo** variable with the `wdth` axis (`--font-body`) for everything else.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 2.5rem + 8vw, 9.5rem)` (71px at 390, 152px at 1440) | Hero "Merdeka" only, Leckerli One, line-height 1 (one word, never wraps) |
| `--step-head` | `clamp(2rem, 1.5rem + 2vw, 3rem)` (32 / 48px) | h2: Archivo wdth 112, wght 800, sentence case, lh 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)` (22 / 26px) | Hero caps line (wdth 112, wght 800, uppercase, tracking 0.16em, `pintu`), hero line, section leads, h3, sign status word, footer wordmark |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)` (17 / 19px) | Running text (wght 400, lh 1.55, ≤ 62ch), list items, price-card product names (wght 700), hours rows, buttons (wght 700) |
| `--step-small` | `0.8125rem` (13px) | Price and unit on cards (tabular-nums), captions, "Hari ini" tag, banner |

Ratios: 2.2 / 1.45 / 1.29 / 1.31 at 390; 3.2 / 1.85 / 1.37 / 1.46 at 1440 (all ≥ 1.25).

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥ 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Grid:** single column below 1024; 12 columns with a 32px gap from 1024 up.
- **Proximity:** every price card overlaps the bottom of its own illustration by 12px and is centred
  under it. "Hari ini" sits 8px after the day name. The rating sits directly under "Kata mereka".
  The sign hangs inside the door panel, never at the far edge of the page.
- **Wide screens:** every section below has a 1440 wireframe that fills the 1200 container on purpose.
  Peach and wood fields are full-bleed and the content stays in the container.
- **Lists:** product names are `--step-body`; group titles ("Isian lain", "Kue & roti") are `--step-lead`. Nothing in a list goes above lead.

## 6. Products on the page
There are no owner photos, so the products are flat illustrations: inline SVG components with flat fills, one darker
shade and one white highlight per object, no outlines, no gradients, no text inside the SVG except
on the box roundel. Each has Indonesian alt text and is marked as an illustration once per section group.
1. **Soes Vla Rum** (star, review 1): a lumpy golden puff (#C98A3E, crust #9A5F26, sugar dots white),
   cut open with the top lifted and pale-gold custard (#F2C75C) showing, in a white fluted paper cup.
   420px wide on desktop, 260px on phone. Card: "Soes Vla Rum · Rp 7.000 / biji" [MOCKUP price].
2. **Soes Vla Vanila / Vla Cokelat / Vla Durian** [MOCKUP]: the same drawing at 180px with the filling
   colour swapped (#F3E3B0, #6B3A1E, #E2D27C). Cards show the name only.
3. **Abon Ayam Pedas, Abon Ayam Manis, Abon Sapi** (photos, review 3): a tall glass jar (tint #EEF1F2,
   steel lid #BFC3C6) filled with abon (#8A4B22, strands #5E2F14; pedas adds `pintu` flecks). The card is
   taped on the jar's lower front as in the shop: "Abon Ayam Pedas · 100 gram Rp 21.000", "Abon Ayam
   Manis · per 100 gram", "Abon Sapi".
4. **Telur Asin** (review 3): one whole pale blue-green duck egg (#CFE0D8) and one half with a white
   and an orange yolk (#E07A26). Card: "Telur Asin · Rp 5.000" [MOCKUP price].
5. **Kacang Mete** and **Cokelat Warna Warni** (photos): round clear tubs, one with cashews (#E7C48F),
   one with buttons in `pintu`, #E3B23C, #5E8A6A, #3F6E9E and white. Kacang Mete card "Rp 45.000 / toples" [MOCKUP].
6. **Merdeka box stack** (kotakan): three peach dotted boxes, the front one with a cream roundel set in
   "Merdeka" script and "SOES · ROTI · KUE". Not the roof logo, which we don't have.
Text-only shelf cards (same white card, no illustration): Kacang Bawang, Cokelat Bulat, Brem Solo,
Roti Kecik Ganep, Teng-teng Beras.

## 7. Sections
**Hero.** Recognition, status, act. Ground `kaca`; storefront frame lines are 2px `kayu`. A 6px `kayu` rail
at the top is the door header. The sign is a white card (220×140 desktop, 150×96 phone) hanging on two
strings from a hook. The text sits inside it: status word (lead), hours (body). The hero line is lead, wght 500.
```
Hero: phone (390)              Hero: desktop (1440)
+----------------------+       +------------------------------------------------------+
| draf banner          |       | draf banner                                          |
|=== kayu rail ========|       |=============== kayu rail (door header) ==============|
|           \ /        |       | +---------------------------------++----------------+ |
|        +--------+    |       | | Merdeka             (display)   ||      \ /       | |
|        | BUKA   |    |       | | SOES · ROTI · KUE   (lead caps) ||  +----------+  | |
|        | 07–20  |    |       | |                                 ||  | BUKA     |  | |
|        +--------+    |       | | Soes isi vla rum dan camilan    ||  | Hari ini |  | |
| Merdeka   (display)  |       | | tradisional di Rawamangun.      ||  | 07.00–20 |  | |
| SOES · ROTI · KUE    |       | | [Petunjuk Arah] [Telepon]       ||  +----------+  | |
| hero line (lead)     |       | | Jl. Balai Pustaka No. 12 (small)||                | |
| [Petunjuk Arah]      |       | +---------------------------------++----------------+ |
| [Telepon]            |       |   window: cols 1–8                  door: cols 9–12  |
| address (small)      |       |   height min(72vh, 640px); peach soes band peeks below |
+----------------------+       +------------------------------------------------------+
```
**Soes kami.** The star. Full-bleed `kotak` with dots.
```
Soes kami: phone               Soes kami: desktop
+----------------------+       +------------------------------------------------------+
| Soes kami (head)     |       | +----------------------+   Soes kami (head)          |
| lead                 |       | |  [Soes Vla Rum, cut] |   lead                      |
|   [Soes Vla Rum]     |       | |        420px         |   body (reviews 1, 2)       |
|   +--------------+   |       | |  +----------------+  |   sizes line [M]            |
|   | Soes Vla Rum |   |       | |  | Soes Vla Rum   |  |   card: Kotak isi 10 ·      |
|   | Rp 7.000/biji|   |       | |  | Rp 7.000 / biji|  |   Rp 65.000 [M]             |
|   +--------------+   |       | +--+----------------+--+                             |
| body, sizes [M]      |       |   cols 1–5                  cols 7–12               |
| Isian lain (lead)[M] |       | Isian lain (lead) [M]                                |
| [vanila]  [cokelat]  |       |  [vanila]+card    [cokelat]+card    [durian]+card    |
| [durian]   (2 cols)  |       |   cols 1–4          cols 5–8          cols 9–12      |
+----------------------+       +------------------------------------------------------+
```
**Abon & telur asin.** The counter. Full-bleed `kayu`; heading `kotak`, text `kaca`; shelf hairline `kaca` at 25%.
```
+----------------------+       +------------------------------------------------------+
| Abon & telur asin    |       | Abon & telur asin (head)  |  [jar]    [jar]    [jar]  |
| lead, body           |       | lead                      |  +card+   +card+   +card+ |
| [jar] [jar] [jar]    |       | body (review 3)           | ------- shelf hairline -- |
| card  card  card     |       | [egg pair] +Telur Asin+   |                           |
| --- shelf ---        |       |   cols 1–5                |   cols 6–12               |
| [egg pair] + card    |       |                           |                           |
+----------------------+       +------------------------------------------------------+
```
**Camilan & oleh-oleh.** The long glass case. `kaca` ground, chrome hairlines as shelves.
```
+----------------------+       +------------------------------------------------------+
| Camilan & oleh-oleh  |       | Camilan & oleh-oleh (head)    lead                   |
| lead                 |       |   cols 1–5                    cols 7–12              |
| [mete]   [cokelat]   |       | [mete]+card [cokelat]+card |Kacang Bawang| |Cokelat Bulat| |
| card     card        |       | -------------------- shelf ----------------------------|
| --- shelf ---        |       | |Brem Solo| |Roti Kecik Ganep| |Teng-teng Beras|       |
| shelf cards, 2 cols  |       | -------------------- shelf ----------------------------|
| --- shelf ---        |       | Kue & roti (lead)   Kue: ... [M]   Roti: ... [M]      |
| Kue & roti (lead)[M] |       |   cols 1–4          cols 5–8       cols 9–12          |
| lists, Lebaran line  |       |   Lebaran line [M] under the Kue list                |
+----------------------+       +------------------------------------------------------+
```
**Pesan kotakan [MOCKUP].** Gift orders. `kaca`; `data-mockup` on the section wrapper.
```
+----------------------+       +------------------------------------------------------+
| Pesan kotakan (head) |       | [box stack, 3 peach boxes]      | Pesan kotakan       |
| lead                 |       |  on a shelf hairline            | lead, body          |
| [box stack]          |       |  +Kotak isi 10 · Rp 65.000+     | [Telepon untuk pesan]|
| card                 |       |   cols 1–6                      |   cols 8–12         |
| body, button         |       |                                 |                     |
+----------------------+       +------------------------------------------------------+
```
**Kata mereka.** Proof. Full-bleed `kotak` with dots. Paraphrases at body size with a short `merdeka` dash, no quote marks.
```
+----------------------+       +------------------------------------------------------+
| Kata mereka (head)   |       | Kata mereka (head)                                   |
| 4,5 dari 308 ulasan  |       | 4,5 dari 308 ulasan di Google (lead) · Lihat ulasan →|
| — paraphrase 1       |       | — paraphrase 1   | — paraphrase 2  | — paraphrase 3   |
| — paraphrase 2       |       |   cols 1–4       |   cols 5–8      |   cols 9–12      |
| — paraphrase 3       |       |                                                      |
| Lihat ulasan →       |       |                                                      |
+----------------------+       +------------------------------------------------------+
```
**Kunjungi kami.** Get there. `kaca`. Today's row gets a `kotak` fill and the "Hari ini" tag.
```
+----------------------+       +------------------------------------------------------+
| Kunjungi kami (head) |       | Kunjungi kami (head)       | +----------------------+ |
| address, parking     |       | address                    | |                      | |
| [map 4:3]            |       | Parkir motor tepat di depan| |   map embed, 4:3     | |
| hours table          |       | hours table, 7 rows        | |                      | |
| [Petunjuk Arah]      |       | [Petunjuk Arah]            | +----------------------+ |
+----------------------+       |   cols 1–5                 |   cols 6–12              |
                               +------------------------------------------------------+
```
**Hubungi kami + footer.** Close. Full-bleed `kayu`; primary button `kotak` with `tinta` text.
```
+----------------------+       +------------------------------------------------------+
| Hubungi kami (head)  |       | Hubungi kami (head)          | [Telepon (021) 4757603] |
| lead [M]             |       | lead [M]                     | [Petunjuk Arah]         |
| [Telepon]            |       |   cols 1–7                   |   cols 9–12             |
| [Petunjuk Arah]      |       | ------------------------ hairline ------------------- |
| Merdeka (lead script)|       | Merdeka (lead) · address · Senin–Minggu 07.00–20.00 · |
| address · hours      |       | draf note · "Gambar produk berupa ilustrasi."         |
| draf note            |       |                                                      |
+----------------------+       +------------------------------------------------------+
```

## 8. Motion
**Signature: the hanging sign.** On hydration, after a 0.15s delay, one GSAP timeline rotates the sign
around its hook (`transformOrigin` at the string apex): -10° → +6° → -3.5° → +1.8° → -1.5° (rest),
segments 0.34 / 0.30 / 0.26 / 0.24s, `sine.inOut`, about 1.2s in total. That is a damped pendulum, the object's
own motion, and it only runs once. Rotation only. The hero text never animates, so the LCP is untouched. With JS
off or reduced motion, the sign sits at rest at -1.5° with the static text "Buka setiap hari 07.00–20.00".
**Supporting:** the starter `Reveal` runs once per section, on one wrapper each for sections 2–7 (20px, 0.7s,
`power2.out`); none on the hero or footer. Buttons get a CSS colour change in 150ms and `translateY(1px)` on press.
**Tokens (`lib/motion.ts`):** `duration.hero = 1.2`, add `ease.swing = "sine.inOut"`; the rest stays at the starter defaults.

## 9. What makes it this shop
1. The door sign: their real door has a hanging TUTUP/CLOSED card. Ours tells the visitor the true
   status in Jakarta time and swings once.
2. Price cards taped on the abon jars, worded the way the shop does it ("Abon Ayam Pedas · 100 gram Rp 21.000").
3. Their own lockup and box: brown script "Merdeka" over orange spaced "SOES · ROTI · KUE", and the soes
   sitting on the peach box print with white dots. Plus the note that motorbikes park right in front.

## 10. Avoid
- The artisan-bakery default: cream, serif display, terracotta, wheat icons, croissant stock, flour dust.
- Patriotic "Merdeka" motifs (red and white, 17 Agustus, flags). The word is the shop's name, not a theme.
- Redrawing their roof logo, any customer photo, bakso, or a Bandung "branch/partner" claim.
- Review quotation marks, names, stars; praising the choux shell (one reviewer found it dry).
- Skeuomorphic wood grain or chrome gradients: wood is a flat field, chrome is a 1px hairline.
- Splitting or animating the script; using Leckerli One for anything but "Merdeka".
- Dots behind running text on `kaca`, or anywhere outside the peach fields.
- The sign as a gimmick: no swing on scroll, hover or loop.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (cards at body/small, group titles at lead)
- [x] Max content width set; no detail pinned far from what it describes (cards overlap their illustration, the sign sits in the door panel)
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (4 soes, 3 abon jars, telur asin, 2 tubs, the box)
- [x] Within motion-rules.md (one signature, section reveals, transform/opacity only, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
