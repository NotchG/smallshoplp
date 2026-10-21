# Design brief: Kopi Made

Record decisions, not essays. Every section below is required.

## 1. Concept
The site is Kopi Made's room after dark: slate-teal walls, honey-pine frames around white-on-charcoal
menu boards, and the red "kopimade" sign as the one bright, playful thing, because what people love
here is a quiet, dim, wooden coffee room hidden from the bustle of Buaran.
Signature moment: on load, the red wordmark switches on like the storefront lightbox (a short
two-beat flicker, then steady), and the room's lamp-light warms behind it; everything else is still.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Facts, exact menu names, hours, the Buaran Plaza landmark, calm "kamu" tone, Bahasa Indonesia, what not to claim (bold flavour, late nights) |
| owner-1.jpg | Hero background (darkened): wood tables, leather banquette, slate wall |
| photo-1/2/3 (reference only) | Red script sign with white outline, awning check, white-on-charcoal menu boards in pine frames, cubby shelf, origin jars, the carbonara's look for its illustration |
| impeccable | Persuade mode; one world (the room) carries the page; full-palette strategy with slate owning the page; a face outside the default list; one authored focal moment, content visible by default. Considered: menu wall, kraft bean label, awning check, shophouse facade at night, receipt, cold drip tower, terrazzo floor; kept the brief-pinned room, with the menu wall as the component language. Its scripts (concept-seed, serve-question) were not run: they write outside `docs/` and need a live user |
| motion-rules.md | Opacity-only sign sequence, section reveals only, no React Bits |

## 3. Palette (6 named colours)
Strategy: full palette. Wall owns the page; pine owns one full band and every frame; red is only
the sign and the primary button; lamp yellow only means "open / today".

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `wall` | #1F2B30 | Main ground (slate-teal wall), hero overlay tint | cream 12.3:1, mist 6.9:1, lamp 8.7:1 |
| `board` | #14191B | Menu/hours boards, "Tempat" section, footer; also the ink on pine and dark check squares | cream 15.0:1; as text on pine 6.8:1 |
| `pine` | #C9965A | Seduh section ground, board and map frames, group labels on boards | as label on board 6.8:1 (labels only, never body on wall) |
| `cream` | #F3EBDD | Text on dark, praise frame lines, light check squares. Derived secondary text `mist` #A7B5B8 (on wall 6.9:1, on board 8.3:1) | see wall/board |
| `sign` | #CF2229 | Wordmark fill, primary button fill. Never small text on dark (2.7:1 on wall) | white #FFFFFF on sign 5.4:1 |
| `lamp` | #F2C230 | Open-now dot, today row, prices on boards, focus ring on dark grounds | on wall 8.7:1, on board 10.6:1 |

Illustration-only fills (never UI): coffee #7A5233, milk #E9DCC6, rice #E8D3A0, avocado #9AAE5B, fried banana #D9A441.

## 4. Type
Two families via `next/font/google`, latin subset, `display: swap`:
**Bitter** (variable 100–900, slab) for everything; **Kaushan Script** (400) for the wordmark only,
preloaded. The slab echoes stamped bean labels and old shop lettering; the brush script stands in
for the red sign.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.25rem, 1.5rem + 15vw, 11rem)` (82px at 390, 176px at 1440), leading 1.0, `nowrap` | the "kopimade" wordmark only (Kaushan Script, sign red, white outline) |
| `--step-head` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (33 → 52px), leading 1.1 | h2 section headings, Bitter 800 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)` (23 → 28px), leading 1.3 | hero line, statements, h3 (Minum, Makan, Kata mereka, Biji kopi, Cara seduh), Bitter 600 |
| `--step-body` | `clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)` (18 → 20px), leading 1.55 | running text, menu lists, item names (600), hours table, praise |
| `--step-small` | `0.875rem` (14px), leading 1.45 | group labels (600, caps, +0.08em), prices, method one-liners, captions |

Ratios at 390 / 1440: small→body 1.29 / 1.43; body→lead 1.28 / 1.40; lead→head 1.41 / 1.86;
head→display 2.5 / 3.4. Wordmark must stay one line at 390 (about 322px of 350px); if it overflows,
lower the vw term, never the leading. White outline = stacked `text-shadow` (8 directions, 3px), not
`-webkit-text-stroke`.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12-column grid, 24px column gap on desktop |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at ≥768, 40px at ≥1200 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** prices sit 8–12px after or under their item name, never right-aligned across a
  board; no dotted leaders. Menu list blocks max 30rem wide. Hours table max 24rem wide, day and time
  in adjacent cells. Group labels sit 8px above their list.
- **Wide screens:** every section is a two-part composition at 1440 (8/4, 4/8, 6/6, 5/7, 7/5); see §7.
- **Lists:** menu items, facts and method titles use `--step-body`; board titles and h3 use
  `--step-lead`. Nothing in a list is larger than its section heading.
- Frames: pine frame 10px desktop / 8px phone, square corners. Boards have 32px / 20px inner padding.
- Check strip: 16px tall, 8px squares (`board` and `cream`), full-bleed, only at hero top and footer top.

## 6. Products on the page
Owner photos: only owner-1 (the room), so products are flat SVG illustrations, labelled in alt text
as illustrations. Style: 1:1 viewBox 160, `cream` 2.5px round-cap outline, flat fills from the palette
plus the illustration-only fills, no gradients, no shadows, drawn on `board`.
- **Minum board:** Es kopimade (tall glass, ice cubes, coffee under a milk layer, straw); Avocado
  Coffee ice blended (green base, coffee top, dome lid, straw); Thick Shake (heavy glass, thick swirl, wide straw).
- **Makan board:** Nasi Goreng Made (dome of fried rice on a round plate, spoon and fork); Fettuccine
  Carbonara (rimmed plate with a thin double rim line, ribbon nest, beef strips, cheese flecks); Pisang
  Goreng Made (four golden fried banana pieces on a plate).
- **Seduh section (on pine, `board` 2px line, no fills):** two glass jars labelled SUMATRA and BALI
  (labels as HTML text under the jars); kraft bean bag [MOCKUP]; six 56px brew icons: AeroPress, V60
  dripper on server, cold brew bottle, French press, Vietnam phin on a glass, cold drip tower.
That is six food and drink items plus the beans: the ≥3 rule holds with room to spare.

## 7. Sections
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +--------------------------------------------------------+
| draft banner     |     | draft banner                                           |
|#_#_#_ check #_#_#|     |#_#_#_#_#_#_#_#_#_ awning check strip _#_#_#_#_#_#_#_#_#|
| room photo,      |     | owner-1 full-bleed, wall overlay (heavier left/bottom) |
| wall overlay     |     |  cols 1-8                          cols 9-12           |
|                  |     |  kopimade   (script, 176px)        +==pine frame====+  |
| kopimade (82px)  |     |  Kopi seduh tenang di seberang     | HARI INI       |  |
| Kopi seduh tenang|     |  Buaran Plaza            (lead)    | ● Buka · s/d   |  |
| di seberang      |     |                                    |   22.00 (body) |  |
| Buaran Plaza     |     |  [Petunjuk Arah] [WhatsApp]        | Sen–Sab 10–22  |  |
| [Petunjuk][WA]   |     |                                    | Jl. Radin Inten|  |
| +=pine========+  |     |                                    | seberang Buaran|  |
| |HARI INI ●Buka| |     |                                    +================+  |
| |Jl. Radin Inten |     +--------------------------------------------------------+
| +==============+ |     Board bottom-aligned with the buttons row. Height min(100svh, 820px).
+------------------+
```
Purpose: recognition, open now, directions. Content per PRD. Primary button `sign` fill, white
text; WhatsApp is a cream 1.5px outline button. Tagline, board and buttons render static.

```
Seduh: phone             Seduh: desktop (pine ground, faint plank seams every 120px)
+------------------+     +--------------------------------------------------------+
| Pilih biji, pilih|     | Pilih biji, pilih cara seduh (head, cols 1-8)          |
| cara seduh (head)|     | intro line (body, max 60ch)                            |
| intro (body)     |     | cols 1-4               | cols 5-12                     |
| Biji kopi (h3)   |     | Biji kopi (h3)         | Cara seduh (h3)               |
| [jar][jar]       |     | [jar SUMATRA][jar BALI]| +--------+--------+--------+  |
| SUMATRA  BALI    |     | Toples berlabel asal.. | |icon    |icon    |icon    |  |
| sangrai di sini..|     | Disangrai di sini..    | |AeroPress|V60 (PO)|Cold Brw|  |
| [bag] bawa pulang|     | [bag] Bawa pulang      | |1 line  |Rp 35rb |1 line  |  |
| Cara seduh (h3)  |     |   200 g ~Rp 85rb       | +--------+--------+--------+  |
| +------+------+  |     |                        | |French  |Vietnam |Menara  |  |
| |Aero  |V60   |  |     |                        | |Press   |Drip    |cold drp|  |
| +------+------+  |     |                        | +--------+--------+--------+  |
| |Cold  |French|  |     +--------------------------------------------------------+
| +------+------+  |     Cubby grid: 1px `board` lines at 30% like the shelf
| |Viet. |Tower |  |     compartments; no card boxes, no shadows.
| +------+------+  |
+------------------+
```
```
Menu: phone              Menu: desktop (wall ground)
+------------------+     +--------------------------------------------------------+
| Menu andalan     |     | Menu andalan (head)                                    |
| note (small)     |     | note directly below (small): Menu dibaca dari papan…   |
| +=pine frame===+ |     | +==== cols 1-6 =========+  +==== cols 7-12 ==========+ |
| | Minum (h3)   | |     | | Minum (h3)            |  | | Makan (h3)            | |
| | [ill] Es kopi| |     | | [ill]   [ill]   [ill] |  | | [ill]   [ill]   [ill] | |
| |  made Rp28rb | |     | | Es      Avocado Thick |  | | Nasi    Fettucc Pisang| |
| | [ill] Avocado| |     | | kopimade Coffee Shake |  | | Goreng  Carbona Goreng| |
| | [ill] Thick  | |     | | Rp 28rb Rp40-45       |  | | Made    Rp 50rb Made  | |
| | MANUAL BREW  | |     | | MANUAL BREW           |  | | NASI & MIE            | |
| | AeroPress ·..| |     | | AeroPress · V60 ...   |  | | Nasi Goreng Made · .. | |
| | ESPRESSO BAR | |     | | ESPRESSO BAR ...      |  | | PASTA ...             | |
| | ...          | |     | | ES KOPIMADE / ICE     |  | | CAMILAN & MANIS ...   | |
| +==============+ |     | | BLENDED / NON-KOPI    |  | |                       | |
| +=Makan========+ |     | +=======================+  +=======================+ |
| | same pattern | |     +--------------------------------------------------------+
| +==============+ |     Phone: featured items as rows (80px illo beside name + price).
+------------------+     ≥768: three columns, 120px illo above name, price under name.
```
```
Tempat: phone            Tempat: desktop (board ground)
+------------------+     +--------------------------------------------------------+
| Tempat yang      |     | cols 1-5                 | cols 6-12                   |
| tenang (head)    |     | Tempat yang tenang (head)| Kata mereka (h3)            |
| statement (lead) |     | statement (lead, 2-3 ln) | 4,4 di Google · 577 ulasan  |
| - tanpa live mus.|     | - tanpa live music       | +=frame=====+ +=frame=====+ |
| - tidak ramai    |     | - kecil, tidak ramai     | | tenang,   | | kopi untuk| |
| - Wi-Fi cepat    |     | - Wi-Fi cepat            | | tersembun.| | pencinta..| |
| - sofa kulit     |     | - sofa kulit, meja kayu  | +===========+ +===========+ |
| Kata mereka (h3) |     |                          | +=frame=====+ +=frame=====+ |
| 4,4 · 577 ulasan |     |                          | | carbonara | | enak buat | |
| [frame] x4,      |     |                          | | creamy    | | kerja     | |
| stacked          |     |                          | +===========+ +===========+ |
+------------------+     +--------------------------------------------------------+
```
Praise frames: like the framed photos on the wall: cream 1px outer line, 4px gap, 1px inner line,
24px padding, body text, no quote marks, no names, no stars.

```
Kunjungi: phone          Kunjungi: desktop (wall ground)
+------------------+     +--------------------------------------------------------+
| Kunjungi kami    |     | Kunjungi kami (head)                                   |
| Jl. Radin Inten  |     | cols 1-7                         | cols 8-12           |
| II No. 213 ...   |     | +=pine frame==================+  | Jl. Radin Inten II  |
| seberang Buaran  |     | |  map embed, 4:3, lazy       |  | No. 213, Klender ...|
| [Petunjuk Arah]  |     | |                             |  | seberang Buaran     |
| [WhatsApp][Telp] |     | |                             |  | Plaza & Electronic C|
| JAM BUKA         |     | |                             |  | JAM BUKA (label)    |
| Senin  10.00–22. |     | |                             |  | Senin  10.00–22.00  |
| ...  ▌Rabu (lamp)|     | |                             |  | ▌Rabu  10.00–22.00  |
| Minggu Tutup     |     | +=============================+  | Minggu Tutup        |
| +=map 4:3======+ |     |                                  | [Petunjuk][WA][Telp]|
+------------------+     +--------------------------------------------------------+
```
```
Footer: phone            Footer: desktop (board ground)
+------------------+     +--------------------------------------------------------+
|#_#_ check #_#_#_#|     |#_#_#_#_#_#_#_#_#_#_#_ check strip #_#_#_#_#_#_#_#_#_#_#|
| kopimade (head-  |     | kopimade (48px)  | Jl. Radin Inten II  | Senin–Sabtu    |
|  size script)    |     |                  | No. 213, Klender    | 10.00–22.00    |
| address, hours   |     |                  | seberang Buaran     | Minggu tutup   |
| Draf mockup note |     | Draf mockup · detail bertanda contoh menunggu konfirmasi |
+------------------+     +--------------------------------------------------------+
```
Footer wordmark at `--step-head` size, decorative (`aria-hidden`), the name repeated as text.

## 8. Motion
**Signature (hero, load, about 1.35s total).** Three stacked layers over the room photo:
the unlit wordmark (dull `#5E2A2C` fill, `mist` outline, visible from first paint), the lit wordmark
(sign red, white outline), a soft glow (blurred red copy, static blur). The timeline animates opacity
only: lit 0 → 0.9 (0.08s) → 0.3 (0.08s) → 1 (0.25s, power2.out), starting 0.15s after the script
font loads (max wait 500ms); glow 0 → 0.55 and the room-warm layer (static honey radial over the
photo, top right, away from the text) 0 → 1 over 0.8–1.0s from 0.35s. Runs once. Tagline, today
board and buttons never animate. A pre-paint class hides only the lit/glow/warm layers when motion
is allowed, with a 2.5s CSS failsafe to final state. Reduced motion or no JS: lit, glow and warm at
final state, no class, no flicker.
**Supporting:** one Reveal per section block (seduh columns, the pair of menu boards as one block,
the Tempat block, the Kunjungi block): 20px, 0.7s, power2.out, once. Buttons: 150ms overlay
opacity on hover, scale 0.98 on press.
**Tokens (`lib/motion.ts`):** keep starter `press 0.15`, `ui 0.25`, `reveal 0.7`, `distance.reveal 20`;
set `hero 1.35`; add `sign = { flick: 0.08, settle: 0.25, glow: 0.8, warm: 1.0, fontWait: 0.5 }`.

## 9. What makes it this shop
- The red "kopimade" sign lighting up over the dim slate room, as you see it from Jl. Radin Inten at night.
- The menu as two pine-framed charcoal boards with white type, like the boards behind the bar, with
  the shop's own names (Es kopimade, Nasi Goreng Made, Pisang Goreng Made).
- Brew methods in a cubby grid on honey pine, like the counter and shelf, next to jars marked Sumatra
  and Bali; the awning's check strip at top and bottom; "seberang Buaran Plaza" wherever the address appears.

## 10. Avoid
- The coffee template: brown and cream, bean icons, steam squiggles, latte-art stock hero, "crafted
  with passion". Also any light or cream-ground section: this room is dim.
- Bold flavour claims ("paling nendang"): a recent review found the coffee safe. Lead with method and room.
- Late-night promises or "buka sampai malam"; show 22.00 and Sunday closed plainly.
- Neon-cyberpunk: one soft red glow, flicker once, never loops; no glow on anything else.
- Recreating the yellow cup mark or tracing the sign from the customer photo; any customer photo on the page.
- Turning the check into a Balinese theme (the story is unconfirmed): no ornament, no carved figure.
- Script type anywhere but the wordmark; prices pinned to the right edge of a board.
- Showing owner-1 large and sharp (it's 1138px and soft): always darkened, background only.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio 1.28; lists at body, board titles at lead)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices 8–12px from names, hours table 24rem)
- [x] Every section has a desktop wireframe that uses the width on purpose (8/4, 4/8, 6/6, 5/7, 7/5, three-part footer)
- [x] At least 3 products shown (six illustrated menu items plus jars and bean bag)
- [x] Within motion-rules.md (one signature, opacity only, section reveals, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
