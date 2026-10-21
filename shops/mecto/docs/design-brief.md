# Design brief: Mecto

Decisions only. Precedence: CLAUDE.md → brief.md → this brief → motion-rules.md → impeccable.

## 1. Concept
The page is one day inside Mecto's gabled concrete house: it opens in 07.00 daylight concrete,
puts the food in one sunshine-yellow room (the yellow of the courtyard wall and of the owner's
own food photo), and ends in steel-dark night lit by a warm LED line, because Mecto's whole
pitch is "the same calm house from breakfast to midnight".
Signature moment: on load, the warm LED strip along the two roof edges of the hero's
gable-shaped photo frame switches on, light running from both eaves up to the ridge, the way the
strip lights the real plywood ceiling in the photo inside the frame.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Hours (07.00–23.00, Fri–Sun to 00.00), the four praised dishes, amenities, review themes; the materials (concrete, plywood, black steel, teak, tan leather), the single sunshine-yellow accent, the gable/niche shape; owner-1 hero crop (x 600–1600, y 0–860, no guests) and owner-2 as the yellow menu anchor. |
| impeccable | Persuade mode; the brief pins the world, so new-work.md was applied by hand (no concept roll: its launcher writes outside `docs/`). Café rut refused (cream + serif + terracotta, kraft brown, dark neon); colour committed at page scale; one face with a point of view; one authored motion moment; craft-floor bans in §10. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `beton` | #E2E0DB | Page ground, daylight concrete: hero, hours | `baja` on it 12.9:1 |
| `semen` | #C9C6BF | Darker concrete: Dalam & luar, Nyaman untuk semua | `baja` on it 10.0:1; `abu` not allowed on it (4.4:1) |
| `baja` | #1D1C1A | Ink, steel rules and outlines, night ground (Kunjungi, Hubungi, footer), primary button on light grounds | `beton` on it 12.9:1 |
| `kuning` | #F0C300 | Menu andalan full-bleed field; LED lines; buttons and today's row on `baja` | `baja` on it 10.1:1, it on `baja` 10.1:1; never text on `beton`/`semen` (1.3:1) |
| `kayu` | #C4976A | Plywood: Kata mereka ground, roof fill in the Ruang dalam drawing, daytime part of the hours beam | `baja` on it 6.5:1 |
| `abu` | #57544F | Secondary text on `beton` only | 5.7:1 on `beton` |

Text tints taken from their ground (text only): on `kuning` #4A3B12 (6.5:1), on `baja` #A9A59C (6.9:1).
`kuning` is sampled from the lower backdrop of owner-2.jpg so that photo's bottom edge melts
into its section. Focus ring 3px `baja` (light grounds) / `kuning` (on `baja`), offset 3px.
Selection: `kuning` background, `baja` text. Strategy: committed; colour owns whole sections, no
scattered yellow accents on concrete.

## 4. Type
One family: **Gantari** (variable 100–900, by Anugrah Pasau of Lafontype, Makassar): a sans
with a geometric touch that turns bold and friendly at 800 and stays plain at 400, as brief.md
asks. `next/font/google`, `subsets: ["latin"]`, `display: "swap"`, CSS variable `--font-gantari`.
Weights: 800 display and headings, 700 lead, 600 labels/buttons/prices, 400 body.
`font-variant-numeric: tabular-nums` on hours and prices.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 3.4rem + 4.6vw, 6rem)` (72 → 96px) | "Mecto" in the hero only; 800, tracking -0.03em, line-height 0.9 (one word, always one line) |
| `--step-head` | `clamp(2.25rem, 1.8rem + 2vw, 3.5rem)` (36 → 56px) | Section h2; 800, -0.02em, line-height 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` (22 → 28px) | Hero line, dish names, Pagi/Siang/Malam, zone names, praise themes, closing line; 700, line-height 1.3 |
| `--step-body` | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` (16 → 18px) | Running text, prices, lists, nav, buttons, hours table; line-height 1.55, max 60ch |
| `--step-small` | `clamp(0.8rem, 0.76rem + 0.12vw, 0.875rem)` (12.8 → 14px) | Beam tick times, "ilustrasi", "Harga contoh…", footer; 600, line-height 1.4 |

Ratios: 390px 72 / 36.6 / 22.3 / 16 / 12.8 (1.97, 1.64, 1.39, 1.25); 1440px 96 / 56 / 28 / 18 / 13.9
(1.71, 2.0, 1.56, 1.29). Checked at 768 and 1100 too; every step ≥ 1.25×.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12 columns, 24px gap from 1024px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px from 768px, 40px from 1280px |
| Section padding phone / desktop (`--section-y`) | 64px / 112px from 768px |

- **Proximity:** a price sits 8px under its dish name, never right-aligned, no dotted leaders.
  "ilustrasi" sits 8px under its drawing. Beam times sit 8px under their tick. Hours table: day
  and time in two tight columns, table max 360px wide. Heading → content 24px phone, 32px desktop.
- **Wide screens:** hero 5 + 7 cols; menu 5 + 7; hours beam all 12 with three 4-col blocks under
  their part of the beam; spaces strip 5 + 3 + 4; Nyaman 4 + 8 (2×2); Kata mereka 4 + 8 (2×2);
  Kunjungi 7 + 5; Hubungi 5 + 7. No section is a centred column on a blank 1440 screen.
- **Breakpoints:** hero goes two-column (6 + 6) from 768px; every other section from 1024px.
  768–1023: phone order, with the comfort and praise items in 2×2. The hours beam is horizontal
  only from 1024px (23.00 and 00.00 labels need ≥ 55px per hour); vertical below.
- **Lists:** dish names `--step-lead`, everything else in lists `--step-body`.
- **Gable motif:** only three places: hero frame, Nasi Goreng frame, Ruang dalam drawing.
  `clip-path: polygon(0 26%, 50% 0, 100% 26%, 100% 100%, 0 100%)`. Never on buttons or text blocks.
- **Rules, not cards:** groups are separated by 2px `baja` "steel beam" rules, not boxes or shadows.
- **Buttons:** 48px tall, 20px side padding, radius 4px, label `--step-body` 600. On light grounds:
  primary `baja` fill + `beton` text, secondary 2px `baja` outline. On `baja`: primary `kuning`
  fill + `baja` text, secondary 2px `beton` outline. The hours dot: 10px `kuning`, 2px `baja` ring.
- Spacing scale on a 4px base: 8, 12, 16, 24, 32, 48, 64. More space above a heading than below.

## 6. Products on the page
Four products in Menu andalan, each with name and [MOCKUP] price:
1. **Nasi Goreng**: owner-2.jpg (real photo), 4:5, gable frame with a static 2px `baja` roof edge.
2. **Nachos**: top-down grey stoneware plate (#A5A39D, rim #BDBBB5) like the owner's bowl, nine
   overlapping triangle chips in two corn tones (#E3A33B, #D18E2A), a small round dip bowl.
3. **Buttermilk Chicken**: same plate, white rice dome (#FAF7EF), three golden rounded pieces
   (#C9792E) with pale sauce pools (#F4E7C5), two small leaf ovals (#5E7F3A).
4. **Kopi Gula Aren**: side view, straight glass (2px `baja` outline), palm-sugar layer at the
   bottom (#5B3A1F), milky coffee (#C8A07A), three rounded ice cubes (`beton` 70%), black straw.

Items 2–4 are flat illustrations: inline SVG, 1:1 artboard, only circles, triangles and rounded
rectangles, flat fills; no gradients, shadows, steam, faces or sketch lines. 160px desktop / 96px
phone on `kuning`, each with "ilustrasi" (#4A3B12) 8px under. Plus the "Juga ada" text list.

## 7. Sections
**Hero.** Recognition, today's hours, directions. Ground `beton`. `ruang-dalam.jpg` (owner-1 crop)
in the lit gable frame, 7:6. Top bar only from 1024px. Phone first screen ≈ 650px: photo, name,
line, hours and both buttons above the 844px fold.
```
Hero: phone (390)        Hero: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| draft banner       |   | Jl. Raya Kalimalang, Duren Sawit   Menu Jam Tempat Lokasi [WA]   |
|     /\  LED edges  |   |                                          /\     <- LED edges     |
|   /    \           |   |                                      /      \                    |
|  | owner-1 |       |   | Mecto  (display 96)              /              \                |
|  +---------+       |   | Ngopi, makan, dan kerja dari      |  owner-1 crop: |             |
| Mecto (72)         |   | pagi sampai malam ... (lead)      |  gable, glass, |             |
| Ngopi, makan, ...  |   | o Buka hari ini 07.00–23.00       |  yellow court  |             |
| o Buka hari ini .. |   | [Petunjuk Arah]  [WhatsApp]       +----------------+             |
| [Petunjuk][WA]     |   |  cols 1–5, centred on the photo      cols 6–12, 7:6              |
+--------------------+   +------------------------------------------------------------------+
```
**Menu andalan (`#menu`).** The food, on a full-bleed `kuning` field. "Name / price" = price 8px under the name.
```
Menu: phone (390)        Menu: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Menu andalan + sub |   | Menu andalan (head)            sub (body), cols 6–12             |
|     /\             |   |         /\                    [ill] Nachos (lead)                |
|   /    \           |   |       /    \                          Rp 35rb (8px under)        |
|  | owner-2 |       |   |     /        \                ------------------------------     |
|  +---------+       |   |    |  owner-2 |                [ill] Buttermilk Chicken / Rp 45rb|
| Nasi Goreng/Rp38rb |   |    |  4:5,    |                ------------------------------    |
| [ill] Nachos/price |   |    |  melts   |                [ill] Kopi Gula Aren / Rp 25rb    |
| [ill] Chicken/...  |   |    |  into    |                ------------------------------    |
| [ill] Kopi G.A/... |   |    |  yellow  |                Juga ada: two body columns        |
| Juga ada + note    |   |    +----------+                Harga contoh, menunggu konf.      |
+--------------------+   |    Nasi Goreng / Rp 38rb (lead / body)                           |
                         +------------------------------------------------------------------+
```
**Dari pagi sampai malam (`#jam`).** Any hour; mornings quietest. Ground `beton`. Beam: 2px `baja`
outline, `kayu` 07–18, `baja` 18–23, outline-only 23–00 "Jum–Min"; ticks are clock marks, not meal times.
```
Hours: phone (390)       Hours: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Dari pagi sampai   |   | Dari pagi sampai malam (head)          sub (body), cols 7–12     |
| malam + sub        |   |  paling tenang                                                   |
| 07.00 || Pagi      |   | [====kayu==============|====baja=====|  Jum–Min ]   all 12       |
| 12.00 || Siang     |   | 07.00        12.00        18.00     23.00   00.00                |
| 18.00 || Malam     |   | Pagi (lead)          Siang (lead)          Malam (lead)          |
| 23/00 || (texts)   |   | body, cols 1–4       body, cols 5–8        body, cols 9–12       |
+--------------------+   +------------------------------------------------------------------+
```
**Dalam & luar (`#tempat`).** Drawn, since no owner photos show these spaces. Ground `semen`. One
2px `baja` ground line, gap before Taman. Ruang dalam: gable outline, `kayu` roof, `kuning` LED
edge. Halaman dalam: glass panel, three mullions, `kuning` wall block, white gravel band. Taman: on
a `baja` panel, the concrete doorway frame in `beton`, gabion grid behind, two `kuning` uplight dots.
```
Spaces: phone (390)      Spaces: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Dalam & luar + sub |   | Dalam & luar (head)                sub (body)                    |
| [gable drawing]    |   |       /\              | | | |##     ##################           |
| Ruang dalam + text |   |     /kayu\            | |kuning|     ##  +--------+  ##          |
| [glass + kuning]   |   |   / ~LED~ \           |glass |##     ##  | frame  |  ##  baja    |
| Halaman dalam ...  |   | ================================    ==================           |
| [frame, night]     |   | Ruang dalam (lead)    Halaman dalam    Taman (lead)              |
| Taman + text       |   | text, cols 1–5        text, 6–8        text, cols 9–12           |
+--------------------+   +------------------------------------------------------------------+
```
**Nyaman untuk semua.** Practical reassurance. Ground `semen`, 2px `baja` rule above.
```
Comfort: phone (390)     Comfort: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Nyaman untuk semua |   | Nyaman untuk     | --------------------   -------------------    |
| ----------------   |   | semua (head)     | Kerja seharian         Keluarga               |
| Kerja seharian     |   | cols 1–4         | text + Wi-Fi [MOCKUP]   text                  |
| ----------------   |   |                  | --------------------   -------------------    |
| Keluarga / Musholla|   |                  | Musholla / text        Parkir / text          |
| / Parkir (ruled)   |   +------------------------------------------------------------------+
+--------------------+
```
**Kata mereka.** Paraphrased themes, no quote marks, no names. Ground `kayu`.
```
Praise: phone (390)      Praise: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Kata mereka        |   | Kata mereka (head)   | theme 1 (lead)       | theme 2 (lead)     |
| 4,7 dari 507 ...   |   | Rata-rata 4,7 dari   | -------------------  | -----------------  |
| theme 1 (lead)     |   | 507 ulasan di Google | theme 3 (lead)       | theme 4 (lead)     |
| ---- themes 2–4    |   +------------------------------------------------------------------+
+--------------------+
```
**Kunjungi kami (`#lokasi`).** Get there. Ground `baja`; text `beton`, secondary #A9A59C.
```
Visit: phone (390)       Visit: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Kunjungi kami      |   | Kunjungi kami (head)                                             |
| address            |   | +--------------------------------+  address (body)               |
| [Petunjuk Arah]    |   | |  map iframe 4:3, cols 1–7      |  [Petunjuk Arah]  (kuning)    |
| 7-row hours table  |   | |                                |  Senin    07.00–23.00 ...     |
| [ map 16:10 ]      |   | +--------------------------------+  7 rows, today kuning, 8–12   |
+--------------------+   +------------------------------------------------------------------+
```
**Hubungi kami + footer.** Close with the actions. Ground `baja`; 1px #3A3835 rule above the footer row.
```
Contact: phone (390)     Contact: desktop (1440)
+--------------------+   +------------------------------------------------------------------+
| Hubungi kami       |   | Hubungi kami (head)              [WhatsApp]  [Telepon 0819-...]  |
| Sarapan jam tujuh..|   | Sarapan jam tujuh, kerja sampai  [Instagram, if confirmed]       |
| [WhatsApp]         |   | sore, ngobrol ... (lead) 1–5       cols 6–12, left-aligned       |
| [Telepon]          |   | ---------------------------------------------------------------  |
| footer (small)     |   | Mecto · address (small)            Draf tampilan ... (small)     |
+--------------------+   +------------------------------------------------------------------+
```

## 8. Motion
**Signature: "lampu menyala".** Hero only, on load. The photo, text and buttons are visible from
first paint; only the light moves. Both roof edges of the gable frame carry a 4px `kuning` LED
line (SVG overlay, `vector-effect: non-scaling-stroke`). A masked bright bar runs along each edge
from eave to ridge: `x` transform of each mask rect from the eave side to 0, 0.9s, `expo.out`,
start 0.15s, both edges together. Then a blurred twin of the line (8px blur, bounded to the SVG)
fades to opacity 0.7 over 0.5s, starting at 0.6s. Total ≤ 1.1s, runs once. Default CSS state is
lit (no JS = lit). Reduced motion: lit and glowing from the start, nothing moves.
**Supporting:** starter `<Reveal>` once per section block (menu list, hours beam + blocks, spaces
strip, comfort grid, praise grid, visit): 20px, 0.7s, `power2.out`, `start: top 85%`. Hero, banner
and footer don't reveal. No staggers, no text effects, no parallax.
**Responses:** buttons lift `translateY(-2px)` with a pseudo-element shadow fading in, 150ms
ease-out; press `scale(0.98)`. Text links: a 2px `kuning`/`baja` underline bar from `scaleX(0.6)`
and opacity 0 to full, 180ms.
**Tokens** (`lib/motion.ts`): starter values plus `led = { start: 0.15, sweep: 0.9, glowStart: 0.6, glow: 0.5, glowOpacity: 0.7 }`.

## 9. What makes it this shop
- The hero frame is the hall's own gable, with the plywood ceiling's warm LED strip switching on
  along its edges, around the owner's own photo of that ceiling.
- The menu sits in one room of the exact yellow from the owner's nasi goreng backdrop and the
  courtyard wall; the photo's lower edge melts into the section.
- The page runs 07.00 to midnight: concrete daylight → yellow → plywood → steel night, with the
  hours beam (and its Fri–Sun stub to 00.00) as the hinge; the spaces are drawn from the
  building's own forms (gable, glass mullions, concrete doorway, gabion).

## 10. Avoid
- Café defaults: cream + serif + terracotta, kraft brown, a dark-overlay hero with a centred
  headline, equal menu cards with dotted price leaders, emoji icons, eyebrow labels, section numbers.
- Yellow as sprinkles on grey or as text on concrete (1.3:1); it owns the menu, the LED lines and
  the night buttons only. A gloomy night: `baja` sections keep their `kuning` buttons and today's row.
- Gables everywhere (three uses only); the light sweep acting as a loader or replaying.
- Illustrations going cartoonish or sketchy; copy naming toppings brief.md doesn't name; a beam
  implying meal times (only 07.00, 23.00 and 00.00 are facts).
- Guests from owner-1, customer photos, the bunting, cleanliness claims, quoted or named reviews.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists at lead/body, labels small; checked at 390, 768, 1100, 1440)
- [x] Max content width set; no detail pinned far from what it describes (prices, ticks, "ilustrasi" within 8px; hours table ≤ 360px)
- [x] Every section has a desktop wireframe that uses the width on purpose (5/7, 12 + 3×4, 5/3/4, 4/8, 7/5, 5/7)
- [x] At least 3 products shown (food and product shops): 4, one owner photo + three flat illustrations
- [x] Within motion-rules.md (one signature, transform/opacity only, section reveals, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
