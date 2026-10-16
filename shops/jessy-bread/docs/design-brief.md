# Design brief: Jessy Bread

Record decisions, not essays. All copy in Bahasa Indonesia (`lang="id"`); cake names as the shop writes them.

## 1. Concept
The page is Jessy Bread's own shop counter: their bread-bag lettering as the sign, their gold-railed
glass cake case with its white price cards, and honey-wood bread racks, so every cake and loaf is
shown with its name and price the way a Rawamangun family sees it in the shop.
Signature moment: on load, the hero birthday cake settles onto its gold board and its white price
card swings up on its hinge to read "Birthday Cake Large · 16 cm · Rp 165.000".

## 2. Inputs

| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Orange + charcoal from the bag, cups and sign; grey facade with orange trim; gold-trimmed cake case; price-card names, sizes and prices; two floors; the review themes; "My Bread is Yours" |
| impeccable | Persuade mode. Rut named (cream + serif + bread-photo hero + three cards; dark gold patisserie). Seven candidates from the audience's world: cake case and price cards, printed bread bag, cake order slip, cake box with piped greeting, oval lightbox sign and facade, shop wall calendar, birthday table. Chosen: the case, with the bag lettering as the sign. Colour committed by region; faces with a point of view, off the default list; one authored focal motion. concept-seed and the decision page were not run (they write outside `docs/` and need the user); the brief pins the direction, so mode-persuade rules apply directly |
| motion-rules.md | Transform and opacity only; one signature moment; section-level reveals; reduced motion = none |

## 3. Palette (4–6 named colours)
Colour by region: each section's ground owns it (abu, arang, abu, madu, kartu, abu, oranye, arang).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `abu` (facade grey) | #F1F0EC | Main light ground: hero, bread, visit | arang on abu 14.7 |
| `kartu` (price-card white) | #FFFFFF | Tent cards, Kata mereka ground, hours pill | arang on kartu 16.8 |
| `arang` (charcoal) | #1F1D1B | Text, "Jessy", primary buttons, cake case, footer | abu on arang 14.7 |
| `oranye` (bag orange) | #E46219 | "Bread", hero trim band, contact band, order button on arang | on abu 3.04 (display text only); arang on oranye 4.85; oranye on arang 4.85 |
| `emas` (case gold) | #C9A042 | Shelf rails and cake boards only, never text on light | on arang 6.87 (non-text) |
| `madu` (honey wood) | #D29458 | Upstairs ground, bread-rack line | arang on madu 6.49 |

Muted text: #5E5A54 on abu/kartu (6.0); #B9B3AA on arang (8.1). Orange is never body text on a light ground.

## 4. Type
Paytone One (display: heavy, rounded, the bag's "Jessy Bread" voice) + Rubik (body: plain, readable,
softly rounded corners). Both via `next/font/google`, latin, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(5rem, 3.2rem + 7.4vw, 10rem) → 80px @390, 158px @1440 | hero logotype only (Paytone) |
| `--step-head` | clamp(2.25rem, 1.7rem + 2.3vw, 3.75rem) → 36 / 60px | section headings (Paytone) |
| `--step-lead` | clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem) → 22 / 28px | hero sub-line, section leads (Rubik 500), praise titles, hero tent card (Paytone) |
| `--step-body` | clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem) → 17 / 19px | running text, lists, case tent-card names (Paytone), prices (Rubik 700, tabular) |
| `--step-small` | 0.8125rem → 13px | price notes, sizes, captions, "Diringkas dari ulasan Google" |

Ratios ≥ 1.29 at 390, 768 and 1440. Leading: display 1.05 (two forced lines "Jessy" / "Bread"),
head 1.1, lead 1.35, body 1.55. Body measure ≤ 60ch.

## 5. Layout guardrails (fill in the values)

| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (32px from 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

Desktop grid: 12 columns, 32px gap. Corners: buttons are pills (the oval sign), tent cards 6px,
map 12px. No shadows except a 1px arang/12% line under tent cards.

- **Proximity:** tent cards overlap the front of their cake's board (0px gap); bread names sit 12px under each loaf; cup labels 8px under each cup; buttons directly under the copy they act on.
- **Wide screens:** every desktop section is two columns or a grid (wireframes below); the contact band is deliberately narrow (720px) and centred on a full-bleed orange ground.
- **Lists:** cake names, bread names, menu items and praise text at `--step-body`; praise titles at `--step-lead`. Never larger.

## 6. Products on the page
No owner photos, so flat SVG illustrations of the specific items, front view, drawn from the case
photo. One parametric `CakeArt` (shape round/square, height, sponge layers, frosting, topping, plaque)
plus five one-off drawings. Every cake carries the small dark round plaque the real cakes have.
Illustration-only colours (inside SVG): chocolate #4A2A1E, milk choc #7A4A2E, cream #FBF4E6, glaze red
#D9343A, cherry #B3122A, pandan #A9C79A, bun gold #D9A35F, crust #9A6438.
- Hero: **Birthday Cake Large 16 cm** (tall round, pale pandan-green, bead border, plaque), Rp 165.000.
- Case shelf 1: **Blackforest 20×30** (square, dense chocolate shavings, cherries; "Tanya harga") · **Double Choco Cake** (square, chocolate layers) Rp 250.000 · **Chocolate Mouse** (round, glossy dark coat, curls, cherries) Rp 165.000 · **Tiramissu 16 cm** (round, cream sides, cocoa top, rosettes) Rp 190.000.
- Case shelf 2: **Strawberry Cheese** (round, white piped sides, red glaze with drips) Rp 250.000 · **Jessy Delight 20 cm** (oblong, chocolate top, striped side wrap) Rp 220.000 · **Rainbow Cake** (square, six colour layers, red-white striped top; "Tanya harga") · **Red Velvet** (round, red layers, white cream cheese; "Tanya harga").
- Bread rack: **Roti manis dalam kantong** (golden bun in a clear bag printed with an orange "Bread", from the bag photo) · **Roti gandum & multigrain** (seeded scored loaf) · **Roti tawar** [MOCKUP] · **Lapis surabaya** slice [MOCKUP].
- Upstairs: **Es teh** and **Es kopi** in dome-lid cups with the round orange print.
Names, sizes and prices are HTML text on the tent cards, not inside the SVG. Note under the case: "Gambar adalah ilustrasi."

## 7. Sections
**Hero.** Recognition, hours, the two actions. Logotype `<h1>`, sub-line (Rubik 500, `--step-lead`), tagline [confirm] (Paytone, `--step-lead`, arang), hours pill (kartu, Rubik 500), Telepon (primary) + Petunjuk Arah, hero cake with tent card standing on the orange trim band.
```
Hero: phone (390)              Hero: desktop (1440)
+----------------------+       +--------------------------------------------------------------+
|[Draf mockup ...]     |       |[Draf mockup untuk Jessy Bread ...]                           |
| Jessy                |       |  Jessy                              (cols 1-7)               |
|     Bread            |       |        Bread                                                 |
| Roti & kue ·         |       |  Roti & kue · Rawamangun, Jakarta Timur      .-----------.   |
|   Rawamangun         |       |  My Bread is Yours.                          | Birthday  |   |
| My Bread is Yours.   |       |  Roti segar dan kue ulang tahun ...          | Cake Large|   |
| Roti segar dan kue.. |       |  ( Buka setiap hari 06.00–22.00 )            |  (art)    |   |
| (Buka setiap hari    |       |  [ Telepon ] [ Petunjuk Arah ]          ====board====.---.   |
|  06.00–22.00)        |       |                                         (cols 8-12) |16cm|  |
| [Telepon][Petunjuk..]|       |                                                     |Rp..|  |
|  .card.  (cake art)  |       |                                                     '----'  |
|  '----'===board===   |       |==============================================================|
|======================| band  |  orange trim band, full bleed, 24px; the board rests on it   |
+----------------------+       +--------------------------------------------------------------+
```
**Kue untuk setiap perayaan** (arang ground). The case: 8 cakes, prices, order line [MOCKUP].
```
Kue: phone                     Kue: desktop
+----------------------+       +--------------------------------------------------------------+
| Kue untuk setiap     |       | Kue untuk setiap perayaan    | Kue ulang tahun langganan     |
| perayaan             |       |  (head, cols 1-7)            | keluarga di Rawamangun.       |
| Kue ulang tahun ...  |       |                              | (lead + small note, cols 8-12)|
| (art)     (art)      |       | (art)      (art)      (art)      (art)                       |
| .card.    .card.     |       | .Blackfor. .Double.   .Choc.     .Tiramissu.                 |
|=====gold rail========|       |========================= gold rail ==========================|
|  ... 4 shelves of 2  |       | (art)      (art)      (art)      (art)                       |
| Harga sesuai kartu.. |       | .Strawb.   .Jessy D.  .Rainbow.  .Red Velvet.                |
| Pesan kue ulang      |       |========================= gold rail ==========================|
| tahun lewat telepon..|       | Harga sesuai kartu di etalase ... Gambar adalah ilustrasi.   |
| [Telepon untuk pesan]|       | Pesan kue ... lewat telepon. [Telepon untuk pesan]  (row ≤ 760px) |
+----------------------+       +--------------------------------------------------------------+
```
**Roti setiap hari** (abu). Everyday bread, traditional cakes, example prices [MOCKUP].
```
Roti: phone                    Roti: desktop
+----------------------+       +--------------------------------------------------------------+
| Roti setiap hari     |       | Roti setiap hari          |  (bun in bag)    (seeded loaf)   |
| lead (gandum, multi- |       | lead: pilihan banyak,     |  Roti manis ...  Roti gandum &   |
|  grain, tradisional) |       | gandum & multigrain ...   |  mulai Rp 8.000  multigrain      |
| Buka mulai 06.00 ... |       | Buka mulai 06.00 ...      |========== wood rack =============|
| (bun)      (loaf)    |       |                           |  (roti tawar)    (lapis slice)   |
| name/price name      |       | Juga ada: roti sobek ·    |  Roti tawar      Lapis surabaya  |
|=====wood rack========|       | roti abon · roti cokelat  |  mulai Rp 18.000 potongan mulai  |
| (tawar)    (lapis)   |       | keju · bolu pandan · bolu |                  Rp 20.000       |
|=====wood rack========|       | gulung · kue lapis        |========== wood rack =============|
| Juga ada: ...        |       |  (cols 1-5)               |  (cols 6-12, 2×2)                |
+----------------------+       +--------------------------------------------------------------+
```
**Makan di lantai dua** (madu). Restaurant upstairs, eat in or take away, parking, wifi, dishes [MOCKUP].
```
Lantai dua: phone              Lantai dua: desktop
+----------------------+       +--------------------------------------------------------------+
| Makan di lantai dua  |       | Makan di lantai dua                 |                        |
| lead                 |       | lead (lantai 1 toko roti, lantai 2  |   (cup)      (cup)     |
| Parkir · Wifi        |       |  restoran; makan di tempat/bawa..)  |   Es teh     Es kopi   |
| Nasi goreng          |       | Parkir · Wifi                       |                        |
| Mie goreng           |       | Nasi goreng       Mie goreng        |                        |
| Ayam penyet          |       | Ayam penyet       Spaghetti bologn. |                        |
| Spaghetti bolognese  |       | Makanan mulai Rp 30.000             |                        |
| Makanan mulai Rp30rb |       |  (cols 1-7)                         |  (cols 8-12, centred)  |
| (cup) (cup)          |       +--------------------------------------------------------------+
+----------------------+
```
**Kata mereka** (kartu). Rating plus six paraphrased themes, no names, no quote marks.
```
Kata mereka: phone             Kata mereka: desktop
+----------------------+       +--------------------------------------------------------------+
| Kata mereka          |       | Kata mereka         | Harga bersahabat   | Langganan kue      |
| 4,6 dari 5 · 1.009   |       | 4,6 dari 5 · 1.009  | text               | ulang tahun  text  |
|  ulasan di Google    |       |  ulasan di Google   |--------------------|--------------------|
| Diringkas dari ulasan|       | Diringkas dari      | Kue cokelat & keju | Pilihannya banyak  |
| Harga bersahabat     |       |  ulasan Google.     |--------------------|--------------------|
| text  (×6, 1px rules)|       |  (cols 1-4)         | Bersih dan ramah   | Lantai dua hemat   |
+----------------------+       +--------------------------------------------------------------+
```
**Kunjungi kami** (abu). Address, hours, parking, what the building looks like, map, directions.
```
Kunjungi: phone                Kunjungi: desktop
+----------------------+       +--------------------------------------------------------------+
| Kunjungi kami        |       | Kunjungi kami                | +--------------------------+  |
| Jl. Balai Pustaka .. |       | Jl. Balai Pustaka Timur C2.. | |                          |  |
| Setiap hari 06-22    |       | Setiap hari 06.00–22.00      | |     map iframe, 4:3      |  |
| Parkir tersedia ...  |       | Parkir tersedia di halaman.. | |                          |  |
| (facade) Gedung abu- |       | (facade)  Gedung abu-abu dua | |                          |  |
|  abu dua lantai ...  |       |  drawing  lantai, list oranye| +--------------------------+  |
| [Petunjuk Arah]      |       | [Petunjuk Arah] (cols 1-5)   |  (cols 6-12)                  |
| [ map 4:3 ]          |       +--------------------------------------------------------------+
+----------------------+
```
**Hubungi kami** (oranye, full bleed) and **Footer** (arang).
```
Hubungi: phone                 Hubungi + footer: desktop
+----------------------+       +--------------------------------------------------------------+
| Hubungi kami         |       |                       Hubungi kami                           |
| Ada pertanyaan soal  |       |      Ada pertanyaan soal roti atau kue? Telepon kami.        |
|  roti atau kue? ...  |       |      [ Telepon (021) 4896888 ]  [ Petunjuk Arah ]            |
| [Telepon (021)...]   |       |               (centred, max 720px)                           |
| [Petunjuk Arah]      |       |--------------------------------------------------------------|
|----------------------|       | Jessy/Bread (lead) | Jl. Balai Pustaka ... | My Bread is Yours.|
| Jessy/Bread · addr · |       |                    | Setiap hari 06–22     | Draf mockup · info|
| hours · draf note    |       |  (3 columns, arang ground)                 | dari Google Maps  |
+----------------------+       +--------------------------------------------------------------+
```

## 8. Motion
**Signature (hero, load):** the Birthday Cake drops 14px onto its board and fades in (0.45 s,
power2.out); from 0.30 s its tent card swings up from −80° on a bottom hinge (`rotationX`,
perspective 700, 0.7 s, expo.out). Done by 1.0 s. Logotype, copy, hours and buttons never move.
Reduced motion: cake and card at final state, nothing animates.
**Supporting:** one `Reveal` per section block (Kue header + case as one, Roti, Lantai dua, Kata
mereka, Kunjungi): 20px fade-up, 0.7 s, once. Case cards never flip or stagger. Buttons: hover
`translateY(-2px)` 0.2 s, press `scale(.98)` 0.15 s, CSS only. Lenis at starter defaults.
Tokens: starter `lib/motion.ts` plus `ease.card = "expo.out"`, `distance.settle = 14`.

## 9. What makes it this shop
- The logotype is set like their bread bag: "Jessy" charcoal above, "Bread" orange below and indented.
- The case is theirs: gold rails, white tent cards with their own names, spellings and prices ("Tiramissu", "Chocolate Mouse", "Rp 165.000").
- The two floors and the building: honey-wood (their tables) for the upstairs section, and a small drawing of the grey front with orange trim and the oval sign so first-timers recognise it from the street.

## 10. Avoid
- The artisan-bakery default: cream ground, serif display, terracotta, flour-dusted photo hero, script "freshly baked with love".
- Any age claim ("sejak", "turun-temurun", "legendaris"): no years in business, ever.
- Dark-luxury patisserie: gold stays a thin rail and board, type stays rounded and friendly.
- Generic white cards with shadows: the tent card is the only card shape, and only under a product.
- Cartoon cuteness: no faces on bread, confetti, sprinkles or bounce.
- Illustrations drifting generic: each cake matches its real look in the case photo.
- Prices pushed to a row's far edge; orange body text on light grounds; English strings left from the starter.
- Any customer photo on the site, even blurred or as a texture.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio 1.29, lead/body at 390; lists ≤ `--step-lead`)
- [x] Max content width set; no detail pinned far from what it describes (1200px; cards overlap boards, labels ≤ 12px from items, buttons under their copy)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns or grids; contact band narrow and centred on purpose)
- [x] At least 3 products shown (food and product shops): 9 cakes, 4 breads, 2 drinks, all illustrated
- [x] Within motion-rules.md (one signature, transform/opacity, section reveals, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
