# Design brief: Sedap Wangi

Record decisions, not essays. Every section below is required.

## 1. Concept
The page is Sedap Wangi's own print kit set at screen scale: the red-framed "Roti & Kue /
Sedap Wangi / Sejak 1979" logo as the hero, the white tent-card price tags from the glass cases,
the maroon cake box, and the red-tabbed kitchen menu on grey marble. The owner sees their own
shop's printed things, not a template.
Signature moment: on load, the lid of a maroon Sedap Wangi cake box slides up and off to reveal
a whole lemon cake (singled out in reviews 3 and 4), once, in the hero.

Direction (impeccable, brief-pinned world, Persuade mode)
- THESIS: an old-school Jakarta bakery-diner told through its own collateral. Refuses the
  default bakery page (cream ground, serif, pastel, wheat icons, stock-photo hero with a headline
  over two buttons): the hero is their logo and their box, not a picture of a bakery.
- OWN-WORLD: white paper, brick-red frame and tabs, maroon box with a white square-spiral key
  band, condensed red caps, tent cards with a maroon "KUE · SEDAP WANGI" strip, marble-grey kitchen.
- STORY: "That's our logo" → today's hours and directions → the cakes people love → the kitchen
  menu with real prices → order a cake or nasi box on WhatsApp → where to park.
- FIRST VIEWPORT: page-scale logo lockup at left, today's hours and Petunjuk Arah under it; the
  cake box at right opens. On phone the box sits under the buttons.
- FORM: incomplete brand, expanded (new-work §1). seed: none (unavailable).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md | Facts, tone, Bahasa Indonesia, "Anda", pinned look: brick red + white, condensed caps, red italic CTA |
| raw.json | Hours, phone, address, 4.5 / 942, place id for directions; five reviews for paraphrase |
| owner-1.jpg | Logo construction, menu tab device (red block + rule ending in a small circle), full kitchen menu, 8 dish tiles for the site |
| photo-1/2/3 (reference only) | Tent-card tag design, maroon box with white key pattern, white trays, rooster bowl. Never on the site |
| impeccable | Persuade mode; brief-pinned world honoured; Committed colour strategy; faces chosen as objects from the shop's world; calibration: no black boxes or hard offset shadows with the condensed type; one authored focal motion. Launcher not run (it would download a binary outside docs/), so concept-seed and DESIGN.md steps are skipped; the project's screenshot review replaces its finish review |
| React Bits | None (see TRD) |

## 3. Palette (6 named colours)
Strategy: Committed. Brick owns the hero frame, h1, section tabs and buttons; maroon owns the order
section and footer. White is the shop's own menu paper, not cream.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` | #FFFFFF | page ground, cards, panel | ink 17.2:1 |
| `brick` | #A3121B | logo red: h1, tabs, frame, buttons, prices on cards | on paper 7.9:1; paper on brick 7.9:1; on marble 6.7:1; on blush 6.7:1 |
| `maroon` | #5C1620 | cake box, order section, footer, tag strips | paper on maroon 13.2:1 |
| `marble` | #ECEDEF | kitchen section ground (marble behind dish photos) | ink 14.7:1 |
| `ink` | #24181A | all body text | on paper 17.2:1 |
| `blush` | #F7E9E9 | Kata pelanggan ground, today's hours row | ink 14.6:1; brick 6.7:1 |

Never brick text on maroon (1.7:1). Illustration-only fills (inside SVGs, not tokens): lemon #F2C94C,
sponge #F6E3A1, cream #FFF4D6, pandan #8CC37A / #4E8A3E, coffee #7A4A2E, latte #D8B48A,
brownie #4A2A1F, cheese #F5D76E, strawberry #D9475B, pink cream #F2A7B5.

## 4. Type
**Antonio** 700 (display, headings, tag names, edge labels; closest free match to the logo's
heavy condensed caps) and **Atkinson Hyperlegible Next** 400 / 700 / 400 italic (body, prices,
buttons; built for legibility, which suits the many older regulars and makes 0/O and 1/l clear
in phone numbers and prices; its italic carries "Pesan sekarang!"). Both via `next/font/google`,
latin subset, `display: swap`. If Atkinson Hyperlegible Next is missing from `next/font`, use
Atkinson Hyperlegible.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(5.75rem, 3.4rem + 9.6vw, 10.5rem) → 92px @390, 168px @1440 | h1 "Sedap / Wangi" only |
| `--step-head` | clamp(2.25rem, 1.6rem + 2.8vw, 4rem) → 36 / 64px | h2 in section tabs |
| `--step-lead` | clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem) → 23 / 28px | hero line, h3, cake names, order card titles, menu category tabs, edge labels, rating line |
| `--step-body` | clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem) → 18 / 20px | text, menu rows, dish names, etalase tag names, hours, buttons |
| `--step-small` | 0.875rem (14px) | captions, tag strips, footnotes |

Ratios: 2.5 / 1.58 / 1.28 / 1.29 at 390; 2.6 / 2.29 / 1.4 / 1.43 at 1440. All ≥ 1.25.
The h1 is two block spans ("Sedap", "Wangi"), uppercase via CSS, each one word so each is
guaranteed one line: `--leading-display: 0.9`. `--leading-head: 1.05`, `--leading-body: 1.55`.
Edge labels and strips: Antonio, uppercase, tracking 0.16em. h3 sub-headings ("Kue favorit
pelanggan", "Juga di etalase") in Atkinson 700 ink at lead, so they never read as one more
cake name (cake names: Antonio brick at lead). Prices `tabular-nums` when supported.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 16px / 32px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- 12-column grid on desktop, 24px gaps. Every desktop section is a deliberate split or grid (§7).
- **Proximity:** card price within 8px under the name; dish price directly under its tile name;
  "Roti & Kue" and "Sejak 1979" sit on the logo frame edges right above and below the name;
  today's "hari ini" label inside its own row; hours table max 22rem with the time column right
  after the day column, never pushed to the far edge. Menu rows: category blocks max 24rem wide, name left,
  price right, joined by a 1px dotted brick leader, so no price floats far from its dish.
- **Lists:** cake names `--step-lead`, etalase tags and menu rows `--step-body`. Never larger.
- Section heading device (from the owner's menu): h2 in a brick block with paper text, a 2px
  brick rule running from it to the container's right edge, ending in a 10px open circle.
  On maroon: paper block, maroon text, paper rule.

## 6. Products on the page
Bakery (no owner bakery photos yet, so flat SVG illustrations, flagged `mockup: true`):
- Hero: one whole **lemon cake**, top-down, on a paper doily inside the open maroon box:
  yellow glaze, piped cream rim, six lemon half-slices; small tent tag "Lemon Cake".
- Etalase, five side-view slices in one style (white plate ellipse, 4–5 flat fills, no outlines,
  no gradients, viewBox 240×160): **Lemon Cake** (sponge + glaze + lemon half-slices),
  **Pandan Chiffon** (tall green airy wedge, darker crust edge), **Lapis Kopi** (10–12 thin coffee
  and latte stripes), **Cheese Brownie** (dark square with a cheese layer), **Strawberry Cake**
  (sponge with pink cream layers, strawberry on top).
Kitchen (owner photos, cropped from owner-1.jpg, 1600×1131; boxes x0,y0,x1,y1, caption band removed):
Sotomie 0,0,226,192 · Mie Bangka Jumbo 0,453,226,645 · Mie Chilli Oil 0,679,226,871 ·
Soto Betawi 1374,453,1600,645 · Gado-Gado Mede 456,905,685,1097 · Nasi Kuning Manado 685,905,914,1097 ·
Ayam Kalasan Bakar 1143,905,1372,1097 · Nasi Timbel Komplit 1374,905,1600,1097.
Shown at most ~180 CSS px wide (source is 226px). The whole menu graphic is never shown.

## 7. Sections
**Hero**: recognition, hours, directions. Logo frame: 6px brick border (4px phone), labels break the
top and bottom edges on a paper knock-out, lockup centred inside. Line, hours, actions left-aligned under it.
```
Hero: phone (390)              Hero: desktop (1440)
+--------------------------+   +------------------------------------------------------------+
| draft banner (maroon)    |   | draft banner (maroon)                                      |
| +--- . ROTI & KUE . ---+ |   |  +----- . ROTI & KUE . -----+      [lid, resting up-left]  |
| |        SEDAP         | |   |  |          SEDAP           |   +------------------------+ |
| |        WANGI         | |   |  |          WANGI           |   |  open maroon box,      | |
| +----- SEJAK 1979 -----+ |   |  +------- SEJAK 1979 -------+   |  whole lemon cake,     | |
| Roti dan kue rumahan,    |   |  Roti dan kue rumahan, plus     |  tag "Lemon Cake"      | |
| plus sotomie ...         |   |  sotomie dan masakan Indonesia. +------------------------+ |
| * Buka hari ini 09-19    |   |  * Buka hari ini 09.00-19.00                               |
| [Petunjuk Arah][WhatsApp]|   |  [Petunjuk Arah] [WhatsApp]  Telepon . Lihat menu dapur    |
| Telepon . Menu dapur     |   |  cols 1-6                      cols 7-12, centred          |
|  [lid]  [box + cake]     |   +------------------------------------------------------------+
+--------------------------+
```
**Etalase kami**: bakery offer. Lemon card leads (2 rows); tags echo the case's tent cards.
```
+--------------------------+   +------------------------------------------------------------+
|[ETALASE KAMI]----------o |   | [ETALASE KAMI]-------------------------------------------o |
| intro line               |   | intro line (max 40ch)                                      |
| Kue favorit pelanggan    |   | Kue favorit pelanggan                                      |
| +----------------------+ |   | +----------------+ +----------------+ +----------------+   |
| | lemon slice (big)    | |   | | lemon slice    | | pandan | name  | | lapis  | name  |   |
| | Lemon Cake / note /Rp| |   | | (big)          | +----------------+ +----------------+   |
| | KUE ...  SEDAP WANGI | |   | | Lemon Cake     | | brownie| name  | | strawb.| name  |   |
| +----------------------+ |   | | note / Rp      | +----------------+ +----------------+   |
| [ill] Pandan Chiffon     |   | +----------------+   cols 1-4 | 5-8 | 9-12                 |
| [ill] Lapis Kopi  (rows) |   | Juga di etalase                                            |
| [ill] Cheese Brownie     |   | [Abon][Bolen P.K.][Bolen][Kos Nanas][Kos Keju][Kos Straw.] |
| [ill] Strawberry Cake    |   | deals line (cols 1-6)    | also-sold line (cols 7-12)      |
| Juga di etalase [2 x 3]  |   +------------------------------------------------------------+
+--------------------------+
```
**Dapur Sedap Wangi**: kitchen menu like the owner's printed menu: tiles beside a framed white panel.
```
+--------------------------+   +------------------------------------------------------------+
|[DAPUR SEDAP WANGI]-----o |   | [DAPUR SEDAP WANGI]--------------------------------------o |
| line + sub               |   | line + sub                                                 |
| [tile][tile][tile][ti -> |   | +------+------+ +====== paper panel, 6px brick frame ====+ |
|  name/price under each   |   | |Soto- |Bangka| | [MIE SPESIAL]-o      [MIE BANGKA]-o    | |
| +======================+ |   | |mie   |      | |  name ...... price    name ...... price| |
| | v SOTO          open | |   | |Chilli|Betawi| | [SOTO]-o             [NASI]-o          | |
| | v MIE SPESIAL   open | |   | |Gado  |Kuning| |  ...                 [AYAM]-o          | |
| | > NASI  > MIE BANGKA | |   | |Kalas.|Timbel| | [TAMBAHAN]-o         [MINUMAN]-o       | |
| | > AYAM  > TAMBAHAN...| |   | +------+------+ +========================================+ |
| +======================+ |   |  cols 1-4, 2x4 tiles   cols 5-12, two menu columns         |
+--------------------------+   +------------------------------------------------------------+
```
Phone tiles: horizontal scroll strip, 150px tiles, the 4th tile cut at the edge to show it scrolls.
**Pesan untuk acara**: maroon ground, key band on top; two white order cards.
```
+--------------------------+   +------------------------------------------------------------+
|/\/\/ key band /\/\/\/\/\ |   |/\/\/\/\/\/\/\/\/\/\/\ key band (paper on maroon) /\/\/\/\/\|
|[PESAN UNTUK ACARA]-----o |   | [PESAN UNTUK ACARA]-o +------------------+ +-------------+ |
| intro                    |   | intro (cols 1-4)      | Kue ulang tahun  | | Nasi box    | |
| +----------------------+ |   |                       | & pernikahan     | | mulai Rp    | |
| | Kue ulang tahun ...  | |   |                       | from / lead time | | 30.000      | |
| | Pesan sekarang!      | |   |                       | Pesan sekarang!  | | Pesan sek.! | |
| | [Pesan lewat WA]     | |   |                       | [Pesan lewat WA] | | [WA] / tel  | |
| +----------------------+ |   |                       +------------------+ +-------------+ |
| | Nasi box ... [WA]    | |   |                          cols 5-8             cols 9-12    |
+--------------------------+   +------------------------------------------------------------+
```
**Kata pelanggan**: blush ground, paraphrases with the tab's small circle as the bullet.
```
+--------------------------+   +------------------------------------------------------------+
|[KATA PELANGGAN]--------o |   | [KATA PELANGGAN]-o     o legendaris...    o sejak kecil... |
| 4,5 dari 5 . 942 ulasan  |   | 4,5 dari 5             o lemon cake...    o sotomie...     |
| o six notes, stacked     |   | 942 ulasan di Google   o parkir...        o diskon...      |
| Diringkas dari ulasan    |   | cols 1-4               cols 5-12, 2 cols x 3 rows          |
+--------------------------+   +------------------------------------------------------------+
```
**Kunjungi kami**: address, hours (today marked), parking, actions; map beside.
```
+--------------------------+   +------------------------------------------------------------+
|[KUNJUNGI KAMI]---------o |   | [KUNJUNGI KAMI]------------------------------------------o |
| address                  |   | address               | +--------------------------------+ |
| Senin-Jumat 09.00-19.00  |   | Senin-Jumat  09-19    | |                                | |
| Sabtu 08.00-19.30 (hari  |   | Sabtu 08-19.30 (today)| |  Google map, 16:10             | |
|   ini, blush row)        |   | Minggu       08-19    | |                                | |
| Minggu 08.00-19.00       |   | Parkir ...            | +--------------------------------+ |
| Parkir mobil dan motor   |   | [Arah][WhatsApp][Telp]|  cols 6-12                         |
| [Petunjuk Arah]          |   | cols 1-5                                                   |
| [WhatsApp] [Telepon]     |   |                                                            |
| [map, 280px tall]        |   +------------------------------------------------------------+
+--------------------------+
```
**Footer**: maroon, key band, small paper logo lockup, address, phones, draft note.
```
+--------------------------+   +------------------------------------------------------------+
|/\/\/ key band /\/\/\/\/\ |   |/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\|
| [logo, paper]            |   | [logo, paper]  | address + hours line | phones             |
| address . phones . draft |   |   cols 1-3            cols 4-8               cols 9-12     |
+--------------------------+   +------------------------------------------------------------+
```

## 8. Motion
**Signature (hero, load):** the lid is its own SVG over the box (`aria-hidden`). Base style is the
final (open) pose: `translate(-8%, -62%) rotate(-6deg)`. A CSS keyframe runs from the closed pose
`translate(0,0) rotate(0)` to that pose, 1100ms, `cubic-bezier(0.16, 1, 0.3, 1)`, 300ms delay,
fill `both`. Pure CSS, so it plays with JS off and never touches the h1, hours or buttons, which
are static from first paint. Box wrapper reserves the lid's resting space (`padding-top` ≈ 48% of
box width). Reduced motion: `animation: none` on the lid (the starter's global rule shortens
duration but keeps the delay, so set it explicitly); lid sits open.
**Supporting:** starter `Reveal` once per section block (Etalase grid, Dapur panel, order cards,
Kata pelanggan list, Kunjungi block), 20px, 0.6s, power2.out. Not on the hero.
**Responses:** buttons lift `translateY(-1px)` and darken through a `::after` overlay
(opacity 0 → 0.12), 150ms; press `scale(0.98)`. Tent cards on fine pointers lift
`translateY(-3px) rotate(-0.6deg)`, 200ms. Menu `<details>` chevron rotates 200ms.
Tokens: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 1.1 }`, `distance.reveal = 20`.
Lenis: starter defaults.

## 9. What makes it this shop
1. The hero is their logo at page scale: brick frame, "Roti & Kue" breaking the top edge,
   "Sejak 1979" breaking the bottom, condensed red caps.
2. Their maroon cake box with its white key pattern opens on the lemon cake; the key band
   comes back on the order section and footer.
3. Cakes sit on tent cards copied from their display case (white card, condensed name, price,
   maroon "KUE · SEDAP WANGI" strip), and the kitchen menu uses their printed menu's red tabs
   with the thin rule and small circle, their own dish photos, on marble grey.

## 10. Avoid
- Default bakery look: cream ground, serif display, pastel, script "Homemade", wheat or rolling-pin icons.
- The condensed-type cliché: black boxes, hard offset shadows, thick black outlines. Shadows only
  as a soft static one under the lid.
- Red everywhere: body text stays ink; brick is for the frame, h1, tabs, prices, buttons.
- The "KUE · SEDAP WANGI" strip on anything other than tent cards; it turns into wallpaper.
- The lid covering the h1, hours or buttons, flashing closed on reduced motion, or causing
  horizontal scroll on phone.
- Dish tiles scaled past ~180px (soft), the full menu image as a picture, any customer photo.
- Star-icon rows, "47 tahun" maths, "rasa sama seperti dulu", "bersih", quoted reviews, names.
- A phone menu that's 1,500px of rows: categories collapse, Soto and Mie Spesial open.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (cake names and
      menu tabs at lead, rows at body, h2 at head)
- [x] Max content width set (1200px); no detail pinned far from what it describes (edge labels on
      the lockup, prices under names, dotted leaders in 24rem menu blocks)
- [x] Every section has a desktop wireframe that uses the width on purpose (splits and grids in §7)
- [x] At least 3 products shown (5 illustrated cakes + whole lemon cake + 8 owner dish photos)
- [x] Within motion-rules.md (one signature, transform only, section reveals, no React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
