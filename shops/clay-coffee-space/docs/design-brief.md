# Design brief: Clay Coffee Space

## 1. Concept
**"Taman yang menyala" (the garden switches on).** The page is Clay's courtyard after dark,
drawn the way the cup is printed: thin line art on a night sky, a festoon wire strung edge to
edge, the pavilion's arched windows holding the products. It fits because Clay is known for how
its garden looks lit at night, more than for any single product.
Signature moment: on load, the hero's festoon wire lights bulb by bulb, left to right, and as
the last bulb lights, the panes of the big arch beside the wordmark warm to amber ("Lampu menyala").

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Night-garden palette (black sky, amber bulbs, tan umbrellas, foliage), the cup's "CLAY / COFFEE SPACE" lockup and black line-art style, arched pavilion windows, kraft boxes; facts, hours, review themes; [MOCKUP] menu |
| impeccable | Persuade mode; dark ground forced by the scene (phones at night, choosing where to nongkrong); colour committed as whole fields (night, canvas, foliage, lamp), not scattered accents; steer clear of both the cream-serif-terracotta café default and neon-on-black glow; one rehearsed focal motion; authored illustrations instead of chrome |

Other directions weighed: cup-print page (kept as the illustration style), Saturday gig flyer
(kept as the stage section's split), café letter board (kept: the menu is a plain, dense list),
kraft box and order receipt (dropped).

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `malam` | #0E1120 | Page ground (night sky); ink on light fields | bingkai on malam 16.4 |
| `bingkai` | #F4EFE6 | Window-frame white: primary text and line art on dark; arch windows on the canvas field | 16.4 on malam, 14.0 on rimbun |
| `lampu` | #F5B54F | Bulb amber: bulbs, primary button fill, "Buka 24 jam", closing field | 10.4 on malam; malam on lampu 10.4 |
| `kanvas` | #C8A47C | Umbrella canvas: Menu section field; secondary text on dark | malam on kanvas 8.1; kanvas on malam 8.1 |
| `rimbun` | #17241C | Deep foliage: Sabtu malam section field | bingkai 14.0, lampu 8.9, kanvas 6.9 on it |
| `gula` | #7B4F2E | Palm-sugar brown, illustrations only (coffee layer, box folds) | non-text; ≥3:1 against bingkai windows |

Illustration tints are `color-mix()` of these tokens only (e.g. pale cheese = 25% lampu in
bingkai). No other hues. No gradients except the bulb glow (radial lampu to transparent).

## 4. Type
Italiana (400 only; a high-contrast sans with a calligraphic A, the closest free match to the
cup's CLAY wordmark) for the wordmark and section headings. Jost (variable) for everything
else; its geometric caps echo the cup's "COFFEE SPACE". Both via `next/font/google`, latin
subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5.5rem, 2rem + 17vw, 13rem)` → 98px @390, 208px @1440 | hero "CLAY" only: Italiana, uppercase, tracking 0.02em, leading 0.9 (one word, one line) |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.6vw, 4rem)` → 36px @390, 63px @1440 | section h2: Italiana, leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem)` → 22px @390, 28px @1440 | hero line, section intros, review themes, rating: Jost 400, leading 1.3 |
| `--step-body` | `clamp(1.0625rem, 1.01rem + 0.2vw, 1.1875rem)` → 17px @390, 19px @1440 | running text, menu items, prices, buttons: Jost 400/500, leading 1.6 |
| `--step-small` | `0.8125rem` (13px) | Jost 500 caps, tracking 0.14em: menu category labels, detail labels, photo-slot tags; "COFFEE SPACE" lockup at 0.22em |

Ratios small→body→lead→head→display: 1.31 / 1.30 / 1.63 / 2.7 at 390; 1.46 / 1.47 / 2.25 /
3.3 at 1440. Italiana never goes below `--step-head` (its hairlines thin out). No eyebrow label
above section headings: each h2 stands alone.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** prices sit inline after the item name (12px gap), never right-aligned across a
  column. Product name and price sit directly under their arch (12px). Row arrows sit 12px
  after their text.
- **Wide screens:** every section at 1440 is a 12-column split or a 4-up grid (see §7). The
  festoon wire and the section fields are the only full-bleed elements.
- **Lists:** menu items at `--step-body`, category labels at `--step-small`, review themes at
  `--step-lead`. Nothing in a list reaches `--step-head`.
- **Arch shape:** `border-radius: 9999px 9999px 8px 8px` on a 3:4 box. Only for product
  windows, photo slots, the hero arch and the map frame.
- Buttons: 48px tall, radius 9999px, Jost 500 `--step-body`. Primary: lampu fill, malam text.
  Secondary: 1.5px bingkai outline.

## 6. Products on the page
No owner photos, so four flat illustrations of the actual items, drawn in the cup's own style
(malam line art, 1.75px stroke at 1x, round caps) inside bingkai arch windows on the canvas
field. Coffee leads.
1. **Es Kopi Susu Clay**, Rp 22rb: clear tall cup, kanvas milk coffee over a gula palm-sugar
   layer, line-drawn ice cubes, black straw, "CLAY" printed on the cup in Italiana (not a
   redrawn logo).
2. **Americano**, Rp 20rb: same cup, gula-dark fill, ice, straw.
3. **Pisang Goreng Coklat Keju**, Rp 20rb: open kraft box (kanvas, gula fold lines), lampu
   fried pieces, pale-cheese strands, malam chocolate zigzag.
4. **Mix Platter**, Rp 35rb: kraft box with lampu fries, gula sausage slices, kanvas chicken pops.
Each arch carries `data-mockup` (names, prices). Owner photos later drop into the same arches.

## 7. Sections
**Hero.** Recognition, open now, directions. Full-bleed wire; lockup; lead; status; buttons; arch.
```
Hero: phone (390)              Hero: desktop (1440)
+----------------+             +--------------------------------------------------+
|[draft banner]  |             |[draft banner]                                    |
| o  o  o  o  o  | wire 9      | o   o   o   o   o   o   o   o   o   o   o   o   o| wire 15
|  \__/ \__/ \_/ |             |  \____/  \_____/  \_____/  \_____/  \_____/  \__/|
|CLAY            | display     |  CLAY                             .--------.     |
|COFFEE SPACE    | small caps  |  COFFEE SPACE                    /  |    |  \    |
|Taman kopi di   | lead        |  Taman kopi di Pulo Gadung,      |---+----+---|   |
|Pulo Gadung...  |             |  buka 24 jam.                    |   | ░░ |   |   |
|(•) Buka hari   | lampu dot   |  (•) Buka hari ini · 24 jam      |---+----+---|   |
|ini · 24 jam    |             |  [Petunjuk Arah] (WhatsApp)      |   |    |   |   |
|[Petunjuk Arah] | above fold  |  7 cols                          '------------'   |
|(WhatsApp)      |             |                                   arch, 5 cols    |
|  .--arch--.    | peeks       |                                                  |
+----------------+             +--------------------------------------------------+
```
**Suasana Clay.** The place in words and one drawn scene (pavilion, umbrellas, wire) in an arch
slot tagged "Foto halaman malam dari pemilik" (`data-mockup`).
```
Suasana: phone                 Suasana: desktop
+----------------+             +--------------------------------------------------+
|Suasana Clay    | head        |  .----------.      Suasana Clay                  |
|Begitu gelap... | lead        | /  scene     \     Begitu gelap, lampu gantung   |
| .--arch---.    |             ||   drawing    |    menyala di atas halaman...    |
||  scene    |   |             ||   5 cols     |    +--------------+------------+ |
|'-----------'   |             ||              |    | Halaman &    | Lampu      | |
|FOTO HALAMAN... | tag         ||              |    | payung       | gantung,LED| |
|- Halaman...    | 4 features  |'--------------'    +--------------+------------+ |
|- Lampu...      | stacked     | FOTO HALAMAN...    | Paviliun     | Mural &    | |
|- Paviliun...   |             |                    | kaca         | papan kayu | |
|- Mural...      |             |                    +--------------+------------+ |
|Paling seru...  |             |                    Paling seru datang rame-rame. |
+----------------+             +--------------------------------------------------+
```
**Menu andalan** (kanvas field, malam text). Four products, then the whole list.
```
Menu: phone                    Menu: desktop
+----------------+             +--------------------------------------------------+
|Menu andalan    |             |  Menu andalan              Kopi dulu, sisanya    |
|Kopi dulu...    |             |  6 cols                    menyusul. Nama menu   |
|Nama menu dan...|             |                            dan harga masih contoh|
|.-----. .-----. | 2x2 arches  |  .-------.  .-------.  .-------.  .-------.      |
|| cup | | cup | |             |  |  cup  |  |  cup  |  |  box  |  |  box  |      |
|Es Kopi  Ameri- |             |  '-------'  '-------'  '-------'  '-------'      |
|Susu 22  cano 20|             |  Es Kopi    Americano  Pisang     Mix Platter    |
|.-----. .-----. |             |  Susu Clay  Rp 20rb    Goreng...  Rp 35rb        |
|| box | | box | |             |  KOPI       NON-KOPI   CAMILAN    MAKAN MALAM    |
|KOPI            | list by     |  Americano  Matcha     Cireng     Rice Bowl...   |
|Americano 20rb  | category    |  Cafe Latte Taro Latte Tahu Cabe  Nasi Goreng... |
|...             |             |  ...        22–28rb    18–25rb    20–38rb        |
+----------------+             +--------------------------------------------------+
```
**Sabtu malam, live music** (rimbun field). The weekly reason to come.
```
Sabtu: phone                   Sabtu: desktop
+----------------+             +--------------------------------------------------+
|Sabtu malam,    | head        |  Sabtu malam,                 o   o   o   o   o  |
|live music      |             |  live music                    \_/ \_/ \_/ \_/   |
|Tiap Sabtu...   | lead        |  Tiap Sabtu malam ada live     stage drawing:    |
|HARI  Sabtu     | details     |  music di panggung taman.      mic stand, amp,   |
|MULAI ~20.00    |             |  HARI   Sabtu malam            platform, 6 cols  |
|Tanya jadwal -> |             |  MULAI  sekitar 20.00                            |
|[stage drawing] |             |  Tanya jadwal lewat WhatsApp ->                  |
+----------------+             +--------------------------------------------------+
```
**Podcast Box** (malam, inside a drawn pavilion: 1.5px bingkai box under a gable roof line).
```
Podcast: phone                 Podcast: desktop
+----------------+             +--------------------------------------------------+
|      /\        | gable       |                    /‾‾‾‾‾‾‾‾‾‾\                  |
|+--------------+|             |  +--------------------------------------------+  |
||Podcast Box   ||             |  | Podcast Box            | mulai Rp 75rb/jam |  |
||Ada Podcast...||             |  | Ada Podcast Box di     | Booking lewat WA  |  |
||mulai Rp 75rb ||             |  | dalam paviliun kaca.   | [WhatsApp]        |  |
||[WhatsApp]    ||             |  | Sewa per jam untuk...  | .-slot-. FOTO     |  |
||.-photo slot-.||             |  |  7 cols                | '------' PODCAST  |  |
|+--------------+|             |  +--------------------------------------------+  |
+----------------+             +--------------------------------------------------+
```
**Kata mereka.** Paraphrased themes and the rating. One static festoon wire above as divider.
```
Kata mereka: phone             Kata mereka: desktop
+----------------+             +--------------------------------------------------+
| o  o  o  o  o  | static wire | o    o    o    o    o    o    o    o    o    o   |
|Kata mereka     |             |  Kata mereka       (•) Suasana    (•) Kopinya    |
|(•) Suasana...  | lead size   |  4,3 dari 743      enak, apalagi  enak.          |
|(•) Kopinya...  |             |  ulasan Google     kalau rame-    (•) Ada live   |
|(•) Ada live... |             |  Baca ulasan ->    rame.          music Sabtu.   |
|4,3 dari 743... |             |  4 cols            8 cols, 3 themes              |
+----------------+             +--------------------------------------------------+
```
**Kunjungi kami.** Find it, know it's open.
```
Kunjungi: phone                Kunjungi: desktop
+----------------+             +--------------------------------------------------+
|Kunjungi kami   |             |  .-------------------------.   Kunjungi kami     |
|Jl. Jatinegara  |             | /  map, arch-topped frame   \  Jl. Jatinegara    |
|Kaum No.17 ...  |             ||   440px tall, 7 cols        | Kaum No.17, ...   |
|Buka 24 jam,    |             ||                             | Buka 24 jam,      |
|Senin–Minggu    |             ||                             | Senin–Minggu      |
|Ada area parkir |             ||                             | Ada area parkir   |
|Habis kerja...  |             ||                             | Habis kerja...    |
|[Petunjuk Arah] |             |'-----------------------------' [Petunjuk Arah]   |
|[map, 300px]    |             |                                5 cols            |
+----------------+             +--------------------------------------------------+
```
**Hubungi kami** (lampu field, malam text). The page ends on the light.
```
Hubungi: phone                 Hubungi: desktop
+----------------+             +--------------------------------------------------+
|Hubungi kami    |             |  Hubungi kami              WhatsApp              |
|Mau datang...   |             |  Mau datang rame-rame      0877-9140-1139 ->     |
|WhatsApp        | 3 rows,     |  atau tanya jadwal live    ---------------------- |
|0877-9140-1139  | 56px+ each, |  music? Kabari kami.       Telepon               |
|Telepon         | label over  |  6 cols                    0877-9140-1139 ->     |
|0877-9140-1139  | detail      |                            ---------------------- |
|Petunjuk Arah   |             |                            Petunjuk Arah         |
|Jl. Jatinegara..|             |                            Jl. Jatinegara... ->  |
|footer          |             |  footer: Clay Coffee Space · Pulo Gadung, Jaktim |
+----------------+             +--------------------------------------------------+
```

## 8. Motion
**Signature: "Lampu menyala"** (hero, on load). Each bulb is a small filament plus a glow disc
(radial lampu, 36px). Glows go opacity 0→1 and scale 0.85→1, 0.35s each, `power2.out`,
staggered 0.06s left to right (15 bulbs ≈ 1.2s; 9 on phone ≈ 0.85s). From 0.8s the arch's amber
pane layer fades 0→1 over 0.6s. Wordmark, lead, status and buttons are static and visible from
first paint. No loop, no flicker. An inline head script sets `data-motion="on"` on `<html>`
(only without reduced motion), which hides the glows in CSS before first paint; a CSS fail-safe
lights them at 2.5s if GSAP never runs. Reduced motion or no JS: all bulbs lit, panes warm,
nothing moves.
**Supporting:** starter `Reveal` once per section (Suasana through Kunjungi), 20px, 0.7s,
`power2.out`. Buttons: hover lifts 1px and an overlay brightens (opacity), 150ms ease-out; press
scale 0.98, 150ms. The divider wire never animates. Lenis: starter defaults.
Tokens for `lib/motion.ts`: `duration.hero: 1.2`; add `duration.bulb: 0.35`,
`duration.panes: 0.6`, `stagger.bulb: 0.06`; the rest as in the starter.

## 9. What makes it this shop
- The festoon wire is the page's own lighting: it opens the page by switching on, and appears
  once more, still, as a divider. Clay's photos are all about this light.
- The "CLAY / COFFEE SPACE" lockup and the products are drawn in the cup's language: big
  high-contrast caps, tiny tracked sans, thin black line art. The products sit in the
  pavilion's arched windows.
- The fields follow a walk through the courtyard: night sky, under the tan umbrellas (menu),
  under the trees by the stage (foliage), into the white-framed pavilion (Podcast Box), and the
  page ends on lamp amber.

## 10. Avoid
- The café default: cream ground, serif headline, terracotta, a row of equal menu cards under a stock photo.
- Neon-on-black: glowing outlines, text glow, glassmorphism or backdrop blur (the pavilion is drawn as white frame lines, not frosted cards).
- Bulbs everywhere: one animated wire (hero), one static divider wire. No twinkle loop, no star field, no light-ray background.
- The arch as wallpaper: only products, photo slots, hero arch and map frame.
- Eyebrow labels over every heading; Italiana below `--step-head` or on buttons, labels, prices.
- Redrawing the logo (bean window, little house): set "CLAY" in type and ask for the logo file.
- Leading with food, promising speed, "terbaik", quoted reviews, reviewer names, customer photos, English copy.
- Illustrations drifting in style: one stroke weight, palette fills only, no shading or gradients.
- A bare white map slab on the night page: it sits in the arch-topped frame.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.30; menu items at body, themes at lead, labels at small)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline, arrows 12px after text)
- [x] Every section has a desktop wireframe that uses the width on purpose (7/5, 5/7, 6/6, 4/8 splits or 4-up)
- [x] At least 3 products shown (four illustrated: two coffees, two snacks)
- [x] Within motion-rules.md (one signature, section-level reveals only, transform/opacity, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
