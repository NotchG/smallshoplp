# Design brief: Saturday Coffee 2.0

Mode: Persuade (impeccable). The visitor decides to come and taps Petunjuk Arah.

## 1. Concept
**"Lampu halaman" (courtyard lights).** The page is the Saturday Coffee courtyard drawn from its own
materials: white plaster house, terracotta-and-slate tiled floor, plants, festoon lights over a
night sky. The reviews and the only photo of the space are about that roomy, string-lit courtyard
more than the coffee, so the owner should recognise the place before reading a word.
Signature moment: on load, the festoon lights strung across the hero switch on bulb by bulb,
left to right, in about a second. That's the courtyard at dusk, and the eye ends up on the name.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Courtyard house, string lights, terracotta-and-slate floor, terrazzo tables (photo 2), soft rounded type, terracotta + leaf accents, the six named items, hours, KCIC Halim, parking tip; photo 3 ignored (may be another shop) |
| impeccable | Persuade mode; a "Full palette" strategy where colours own whole sections; its banned-font list (no Plus Jakarta Sans, DM Sans, Fraunces etc.); a check against the cream + serif + terracotta default; one authored focal motion with `cubic-bezier(0.16,1,0.3,1)`. Directions weighed: courtyard lights (chosen), tegel-floor grid, house cross-section (kept for Suasana), KCIC departure board (too narrow, one review), weekend calendar (the name's literal reading, the rut), menu receipt (category rut), stamp card (rejected: photo may be another shop). Launcher not run (it would download a binary outside `docs/`); references read directly. |

## 3. Palette (6 named colours)
Each colour owns a part of the house and a whole region of the page: malam = night (hero, visit,
contact), plaster = the white house (menu, praise), daun = the plants (Suasana), tegel = the floor
(station band, tile bands, primary button on light grounds), lampu = the lights (night only).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plaster` (`--color-paper`) | #FAF8F3 | Day ground; text on malam, daun, tegel | malam on plaster 14.05 |
| `malam` (`--color-ink`) | #22282C | Text on plaster; night ground | plaster on malam 14.05 |
| `abu` (`--color-muted`) | #5A6066 | Secondary text on plaster; slate tiles in bands | on plaster 6.00 |
| `tegel` (`--color-accent`) | #A8452A | Primary button on plaster (plaster label), prices, station band, tile joints | on plaster 5.57; plaster on tegel 5.57; on malam 2.52, so decoration only there |
| `daun` | #3D6B4A | Suasana ground; plant shapes in the drawings; terrazzo chips | plaster on daun 5.82; daun on plaster 5.82 |
| `lampu` | #F2BD5E | Bulbs, "2.0" tag, primary button on malam (malam label), today marker | on malam 8.68; never on plaster |

Derived, not new colours: `redup` #C5C2B9 = secondary text on malam (8.38). Illustration-only
inks, never for UI text: kopi #4A2F22, susu #EADCC6, aren #8C5A2E, lemon #E8C547, goreng #E2A543,
daun-muda #86A86B.

## 4. Type
**Fredoka** (variable, wght 500–600, `wdth` 100) for the name and headings: a soft, rounded sans,
friendly like a weekend and not corporate. **Figtree** (400/600) for body. Both via `next/font/google`, latin subset,
`display: swap`, exposed as `--font-fredoka` / `--font-figtree` and mapped in `@theme`
(`--font-display: var(--font-fredoka), ui-rounded, sans-serif`). Fredoka never at 700 and never
tracked tight beyond -0.01em, so it stays relaxed and doesn't tip into childish. No uppercase tracked labels.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1.6rem + 6vw, 6.5rem)` (48→104px), leading 1.05 | hero name only (Fredoka 600) |
| `--step-head` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (32→52px), leading 1.1 | h2 (Fredoka 500) |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)` (23→28px), leading 1.3 | statements, h3, group labels "Minuman"/"Makanan", praise titles, "2.0" tag |
| `--step-body` | `1.125rem` (18px), leading 1.55 | running text, product names (600), list items, buttons |
| `--step-small` | `0.875rem` (14px), leading 1.45 | prices, captions, drawing labels, hours labels, footer |

Ratios: 1.5+ / 1.39+ / 1.28 / 1.29 at every width. Display wraps to two lines on phone, so
leading stays 1.05. Prices use `font-variant-numeric: tabular-nums`.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12-col grid, 24px gap (16px phone) |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

Corners: 16px on plates, map and action tiles; buttons are pills, 52px tall. Hero is content
height (no `100svh`). Group spacing: 8–12px inside a group, 24–32px between groups, more above a
heading than below.

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
No owner photos, so **six flat illustrations** of the actual items, each standing on a
**terrazzo plate**, the speckled table top from photo 2. The plate is plaster with chips in tegel,
abu, malam and daun, drawn once as `public/terrazzo.svg` and tiled at 160px, 16px radius. All
items are in front view, flat fills with no outlines, and each sits on a plate edge in the lower third.
1. **Kopi Susu Strong:** tall clear glass; aren layer at the bottom, milk, espresso top (no ice: the brief doesn't say iced).
2. **Kopi Susu Mantan:** same glass, paler milky-caramel body with 3 ice cubes (iced, per brief), susu foam top.
3. **Wake Up Call:** same glass, kopi-dark body, lemon wheel on the rim.
4. **Kentang Goreng Saus Bangkok:** tegel paper boat of goreng fries, small dish of sauce beside it.
5. **Risol Smoked Beef:** three crumbed rolls on a small plate, one cut showing filling.
6. **Beef Bowl Onsen Egg:** dark malam stoneware bowl; beef, soft egg, nori strips, crispy bits mounded over the rim.

Each tile: plate → name (body 600) → one-line note (small) → price (small, tegel), stacked within
12px. Plates carry `role="img"` + Indonesian alt; prices and unconfirmed names carry `data-mockup`.

## 7. Sections
Shown in page order. Grounds: malam, plaster, daun, tegel, plaster, malam, malam.

**Hero** (malam). Lights → name → line, hours, address, buttons → vignette on the tile band.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +----------------------------------------------------+
| draft banner     |     | draft banner                                       |
|\_o_o_o_/\_o_o_o_/|     |\__o__o__o__o__/\__o__o__o__o__/\__o__o__o__o__/ <- |
| Saturday         |     |   festoon lights, full bleed, 140px                |
| Coffee (2.0)     |     |  Saturday Coffee (2.0)      <- display, one line   |
| Kopi, camilan,   |     |                                                    |
| dan tempat lega..|     |  Kopi, camilan, dan tempat   |  courtyard vignette:|
| ● Buka hari ini  |     |  lega untuk kerja/nongkrong. |  white column, brick|
|   08.30–22.00    |     |  ● Buka hari ini 08.30–22.00 |  planter, snake     |
| Jl. Cipinang ... |     |  Jl. Cipinang Cempedak IV .. |  plants, folding    |
| [Petunjuk][WA]   |     |  [Petunjuk Arah] [WhatsApp]  |  table + kopi susu  |
|  (vignette peek) |     |  cols 1–7                    |  cols 8–12, ~360px  |
|##################|     |####################################################|
+------------------+     +----------------------------------------------------+
```
The tile band (48px phone / 64px desktop) is the courtyard floor, and the vignette stands on it.
Buttons: Petunjuk Arah = lampu fill, malam label; WhatsApp = plaster 1.5px outline. Both are above
the fold at 390×844.

**Menu andalan** (plaster). Six products on terrazzo plates, grouped by type.
```
Menu: phone              Menu: desktop
+------------------+     +----------------------------------------------------+
| Menu andalan     |     | Menu andalan                                       |
| Favorit tamu...  |     | Favorit tamu dari ulasan... Harga masih contoh.    |
| Harga contoh.    |     |                                                    |
| Minuman          |     | Minuman   [plate 4:3] [plate 4:3] [plate 4:3]      |
| [plt] Kopi Susu  |     | (lead,    Kopi Susu   Kopi Susu   Wake Up Call     |
| 112px Strong     |     |  cols1-2) Strong      Mantan      Kopi hitam..     |
|       note/price |     |           note·Rp27rb note·Rp25rb note·Rp25rb      |
| [plt] Mantan ... |     | Makanan   [plate] [plate] [plate]  (cols 3–12)     |
| [plt] Wake Up..  |     |           Kentang..   Risol..     Beef Bowl..      |
| Makanan (3 rows) |     |                                                    |
| Juga ada: ...    |     | Juga ada di menu: Americano · Cappuccino · ...     |
+------------------+     +----------------------------------------------------+
```
Phone rows: 112px square plate left, text right within 16px. The "Juga ada" list is one wrapping
body-size line, `data-mockup`.

**Suasana** (daun ground, plaster text). The space, with the two levels made visible.
```
Suasana: phone           Suasana: desktop
+------------------+     +----------------------------------------------------+
| Suasana          |     | Suasana                  | +---------------------+ |
| Rumah dengan     |     | Rumah dengan halaman     | | house cross-section | |
| halaman semi-..  |     | semi-outdoor yang luas.. | | Lantai atas -> [ ]  | |
| Kerja, nongkrong |     | Kerja, nongkrong, atau.. | | lights over open    | |
| +--------------+ |     | (o) Indoor & outdoor     | | court, column,stair | |
| | house 4:3    | |     | (o) Ada lantai atas      | | Halaman semi-       | |
| +--------------+ |     | (o) Cocok untuk kerja    | |  outdoor -> [ ]     | |
| 3 facts, icons   |     |  cols 1–5                | +---------------------+ |
+------------------+     +----------------------------------------------------+
```
The house cross-section is a plaster panel, 16px radius, ≤40 flat shapes: malam sky with a light
string over the open court, white columns, a stair with the white square-key balustrade from
photo 1, a brick planter with snake plants, the tile floor, a lit upstairs room. Labels are HTML
text placed within 24px of what they name, `t-small`.

**Dekat Stasiun KCIC Halim** (tegel band, plaster text). Short and specific.
```
Stasiun: phone           Stasiun: desktop
+------------------+     +----------------------------------------------------+
| Dekat Stasiun    |     | Dekat Stasiun KCIC  |                              |
| KCIC Halim       |     | Halim               | ●───────── ± 10 menit ──────●|
| Punya waktu ...  |     | Punya waktu sebelum | Saturday         Stasiun     |
| ● Saturday Coffee|     | naik kereta? ...    | Coffee 2.0       KCIC Halim  |
| │  ± 10 menit    |     | Buka di Google Maps |                              |
| ● Stasiun KCIC   |     |  cols 1–5           |  cols 7–12, labels under dots|
+------------------+     +----------------------------------------------------+
```

**Kata mereka** (plaster). Rating next to the heading; themes in a grid, no quote marks.
```
Kata: phone              Kata: desktop
+------------------+     +----------------------------------------------------+
| Kata mereka      |     | Kata mereka         | Luas dan lega  | Enak buat   |
| ★ 4,7 dari 760   |     | ★ 4,7 dari 760      | Tempatnya luas.| kerja, ...  |
|   ulasan Google  |     |   ulasan Google     | Banyak kursi   | Stafnya     |
| Luas dan lega    |     |  cols 1–4           | di luar ...    | ramah ...   |
|  body line       |     |                     | Sepadan dengan | Yang disebut|
| (6 items stacked)|     |                     | harganya ...   | tamu: ...   |
+------------------+     +----------------------------------------------------+
```
Item title `t-lead` Fredoka 500, explanation `t-body` abu, a small tegel square bullet.

**Kunjungi kami** (malam). Where, when, parking, map.
```
Kunjungi: phone          Kunjungi: desktop
+------------------+     +----------------------------------------------------+
| Kunjungi kami    |     | Kunjungi kami          | +-----------------------+ |
| Jl. Cipinang ... |     | Jl. Cipinang Cempedak..| |                       | |
| Senin–Jumat      |     | Senin–Jumat 08.30–22.00| |   Google map 4:3      | |
|   08.30–22.00    |     | Sabtu–Minggu ..–23.00 ●| |   lazy iframe         | |
| Sabtu–Minggu ●   |     |   Hari ini (lampu)     | |                       | |
| Parkir mobil..   |     | Parkir mobil terbatas..| +-----------------------+ |
| [Petunjuk Arah]  |     | [Petunjuk Arah]        |  cols 6–12                |
| [map 4:3]        |     |  cols 1–5              |                           |
+------------------+     +----------------------------------------------------+
```
The "Hari ini" marker sits directly after its row's time (≤12px), not at the row's far edge.

**Hubungi kami + footer** (malam). Three big actions, then the floor again.
```
Hubungi: phone           Hubungi: desktop
+------------------+     +----------------------------------------------------+
| Hubungi kami     |     | Hubungi kami       | WhatsApp     Telepon     Arah |
| Setiap hari rasa-|     | Setiap hari rasa-  | 0878-8379-   0878-8379-  Buka |
| nya hari Sabtu.  |     | nya hari Sabtu.    | 8730 ->      8730 ->     Maps |
| [WhatsApp     ->]|     |  cols 1–4          | cols 5–12: 3 tiles, ≥96px tall|
| [Telepon      ->]|     |----------------------------------------------------|
| [Petunjuk Arah->]|     | Saturday Coffee 2.0 · Jatinegara · Draf mockup     |
| footer, small    |     |####################################################|
|##################|     +----------------------------------------------------+
+------------------+
```
Tiles: 1.5px redup border, label `t-small` redup above value `t-lead` plaster, arrow beside the value.

## 8. Motion
**Signature: "lampu menyala".** One SVG (viewBox 1440×140, `preserveAspectRatio="xMidYMin slice"`,
96px tall on phone, 140px on desktop), three catenary swags, 12 bulbs. Each bulb has an unlit
glass (abu) and a glow group (lampu bulb + radial halo) set to `opacity:0` at the start.
CSS keyframes, no JS: the glow goes opacity 0→1 and the halo scale 0.9→1, 450ms,
`cubic-bezier(0.16,1,0.3,1)`, delay `150ms + i × 60ms` (last bulb done ≈1.26s), `fill-mode: both`,
runs once. Text is visible from first paint and never animates. Reduced motion:
`animation:none; opacity:1`, so the lights are simply on (the screenshots show this state).
**Supporting:** the starter `<Reveal>` once per section content block (menu, Suasana, station,
praise, visit, contact): 20px, 0.7s, `power2.out`. Never per card or per word. **Responses:**
buttons press `scale(.98)` 150ms; action-tile arrow `translateX(4px)` 200ms ease-out; link
underline via opacity. No loops, no flicker, no parallax. Motion tokens: `duration.hero: 1.3`,
add `bulb: 0.45`, `bulbStagger: 0.06`, `ease.signature: "cubic-bezier(0.16,1,0.3,1)"`.

## 9. What makes it this shop
- The festoon lights over a night-slate sky switching on: photo 1, and the 22.00/23.00 closing.
- The terracotta-and-slate floor pattern from photo 1 as the band under the hero and the footer,
  so the page opens and closes standing on their floor.
- Their own named drinks (Kopi Susu Strong, Kopi Susu Mantan, Wake Up Call) drawn on the terrazzo
  table from photo 2, and a cross-section showing the upstairs plus the station route line.

## 10. Avoid
- Coffee clichés: beans, steam swirls, latte-art hero, brown-and-cream palette, a serif display,
  "Our story", any "kopi terbaik" or "wifi kencang" claim.
- Testimonial cards with quote marks, avatars or names; star rows beyond the one real 4,7.
- Stock or customer photos; the doughnut, the "Coffee Understands" cup, the loyalty card.
- Concept failure modes: lights that twinkle or loop (once only); the dark hero making it read
  as a bar (the bright plaster and daun middle carry the daytime work café); a tile band anywhere other than hero
  and footer; lampu on light grounds; illustrations creeping into every section (only hero
  vignette, six products, house drawing, route line); drawing labels colliding at 390; Fredoka at
  700 or bouncy easing turning it childish; glass, gradient blobs, generic icon tiles.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (labels, tag, praise titles, product names ≤ `--step-lead`)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices, "Hari ini", drawing and route labels within 24px)
- [x] Every section has a desktop wireframe that uses the width on purpose (two-column, grids, route line)
- [x] At least 3 products shown (six illustrations on terrazzo plates)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
