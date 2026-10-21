# Design brief: Agan Coffee

## 1. Concept
**"Di bawah awning merah."** The page is built from the pavilion on Jl. Angkasa. A cherry-red awning valance carries "Agan Coffee" in white script, repeated and cut off at the screen edges the way it wraps the real dome. Under it hang the shop's own BUKA sign and a steel-framed window of their food. Below that sit a terracotta roster wall and a black-glass menu lettered like their window. It is their storefront, not a coffee template.
Signature moment: the red-and-yellow **BUKA sign** hanging under the awning swings once on its string and settles (about 1.5 s), showing today's real status: "BUKA · Hari ini 08.00–23.00", or "TUTUP · Buka lagi Senin 08.00".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The awning, the BUKA sign, the window lettering, the roster blocks, the black steel and the burgundy-rim cups set the palette and motifs. Hours drive the sign. Seven owner photos cover the products, the facade and the wayfinding crop. photo-1 to photo-3 were used for reference only |
| impeccable | Persuade mode. new-work was run by hand: the brief pins the world, so it beats a roll. The launcher and concept-seed were not run (they write outside docs/). Its calibration ruled out "cream ground + serif + red accent", so concrete is the ground and red owns whole fields. One dominant move (the awning) per its depth rule, the eyebrow-label ban, real photos instead of chrome, and one authored motion moment |
| Conflict resolved | The brief asks for script + serif + sans, but the template allows 2 families. We keep the script (awning) and the sturdy serif (headings). The serif also sets body text, because Besley has true text weights. The "clean sans" role is dropped |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `awning` (Merah awning) | #A3182F | Hero awning and closing field; primary button and links on concrete | lettering on awning 6.90 ✓; awning on concrete 5.96 ✓ |
| `steel` (Baja hitam) | #161615 | Text on light grounds; ground of Menu and Kata mereka; photo frames, strings, seams | steel on concrete 14.03 ✓; lettering on steel 16.23 ✓ |
| `concrete` (Beton) | #E6E2DB | Page ground (warm-grey concrete, not cream) | n/a (it's the ground) |
| `lettering` (Huruf jendela) | #F7F2E8 | Text on awning and steel. Never a page ground | see above |
| `roster` (Roster terakota) | #C86F45 | Nongkrong field; roster band at the hero base | steel on roster 5.01 ✓. Never lettering on roster (3.64 ✗) |
| `kuning` (Papan BUKA) | #EDB52A | BUKA sign plate; prices and tags on steel only | steel on kuning 9.70 ✓; kuning on steel 9.70 ✓. Never on awning (4.12) |

Derived tints, not palette colours: `steel-soft` #55524E for secondary text and the greyed Sunday row on concrete (6.02 ✓), and `lettering-soft` #CFC8BB for secondary text on steel (10.89 ✓). On awning, secondary text stays `lettering`.
Strategy: **committed.** Red owns the top and bottom fields, steel and terracotta own whole sections, and concrete runs between them. Leaf green comes only from the photos.
Focus ring: 3px outline at 3px offset in `awning` on concrete, `lettering` on awning, `kuning` on steel and `steel` on roster. Text selection uses `awning` with `lettering` text.

## 4. Type
Two families via `next/font/google`, subset `latin`, `display: swap`:
**Yellowtail** 400 (retro sign-painter script, closest to the awning lettering) for the h1, the valance repeats, the h3 "Coffee"/"Selain kopi" and the footer wordmark only. **Besley** (Clarendon revival, variable 400–900, normal style only; sturdy like the old coffee-tin signs) for everything else.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.75rem, 2.25rem + 7vw, 8.5rem)` (63px at 390, 136px at 1440) | h1 "Agan Coffee" (Yellowtail) and its aria-hidden repeats |
| `--step-head` | `clamp(2rem, 1.45rem + 2.3vw, 3.25rem)` (32 to 52px) | h2 (Besley 800, -0.01em); "BUKA" on the sign (Besley 800, +0.08em); footer wordmark (Yellowtail) |
| `--step-lead` | `clamp(1.4375rem, 1.25rem + 0.45vw, 1.75rem)` (23 to 26.5px) | Tagline, intro lines, menu and food item names (Besley 600), amenity names, paraphrased reviews (Besley 400) |
| `--step-body` | `1.125rem` (18px) | Running text, prices, item notes, hours table, buttons (Besley 600) |
| `--step-small` | `0.875rem` (14px) | Captions, tags ("favorit di ulasan", "hari ini"), the sign's sub-line on phone, footnotes |

Ratios: display/head ≥1.87, head/lead ≥1.39, lead/body ≥1.28, body/small 1.29 at 390, 768 and 1440 ✓.
Script h3 ("Coffee", "Selain kopi") is set at `calc(var(--step-lead) * 1.25)` to make up for Yellowtail's small x-height. That's 29 to 33px, always below `--step-head`.
Line height: display 1.1 (script loops need room, and it's one line at every width: "Agan Coffee" is about 4.6em wide, 291px at 390); head 1.1; lead 1.35; body 1.55; small 1.4.
Window case (CSS `text-transform` only; content stays "Espresso" and so on): Espresso is uppercase +0.06em, Cappuccino is lowercase, Kaffee Latte is "Kaffee latte", Macchiato is as written. Same size and weight as the other items.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

Spacing scale (4px base): 4, 8, 12, 16, 24, 32, 48, 64, 96. Leave more space above a heading than below it (48 above, 16 below). The 12-column grid has a 24px gap on desktop and a single column below 768px.
Photo frames: 6px `steel` border with square corners on concrete and roster grounds; no border on steel. Buttons: 4px radius, min-height 52px, 2px borders on secondary buttons.
- **Proximity:** a price sits inline after its item name with a 12px gap, never at the row's end. Tags sit beside their item, captions sit 8px under their photo, and the "hari ini" tag sits next to its day.
- **Wide screens:** every section is a 12-column split: image beside text (Hero, Menu, Teman ngopi, Nongkrong, Kunjungi), a heading column beside a 2-column list (Kata mereka), or actions beside the wordmark block (Hubungi). The awning repeats fill the full 1440 width.
- **Lists:** item names at `--step-lead` and notes and prices at `--step-body`, never at heading size.

## 6. Products on the page
Five products are shown in the owner's own photos, each with a caption naming what it is:
1. **Croissants with a swan-art latte** in a burgundy-rim cup (owner-2, hero, 5:4, object-position 50% 70%)
2. **Rosetta latte** (owner-4, Menu, 4:5, object-position 50% 85% so the "MBS" T-shirt logo is cut off)
3. **Pink blended drink + espresso shot in the branded AGAN cup** (owner-5, Menu, 1:1; 4:5 on phone)
4. **Dimsum with dipping sauce and the branded takeaway cup** (owner-7, Teman ngopi, 4:5, position 50% 100%)
5. **Fried cheese snack with red sauce** (owner-6, Teman ngopi, 4:5, position 50% 100%)
The menu lists add the named and [MOCKUP] items with inline example prices. owner-3 (pavilion) and owner-1 (awning crop, 2:1, position 50% 0, so no face) show the place and the wayfinding view. They are not product shots.

## 7. Sections
**Hero.** Recognition, today's status and directions. Awning: a dome strip (40/64px tall, `awning`, 1px vertical seams in steel at 15% every 64/96px), a 2px steel seam, then the valance (h1 centred, aria-hidden repeats at 1:1 size with 0.6em gaps, clipped by `overflow-x: clip`, desktop and tablet only), then a scallop edge (half-circles 32/48px wide, 16/24px deep). The BUKA sign hangs from a 6px steel hook by a string triangle.
```
Hero: phone (390)                Hero: desktop (1440)
+------------------+             +--------------------------------------------------+
|▓▓ dome ▓▓▓▓▓▓▓▓▓▓|             |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ dome, seams ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|▓  Agan Coffee   ▓| h1          |an Coffee▓▓▓▓▓▓▓  Agan Coffee (h1)  ▓▓▓▓▓▓▓Agan Co|
|◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡|             |◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡|
|       /\         |             |      /\          | +----------------------------+ |
|   [ BUKA      ]  | sign        |  [ BUKA       ]  | | owner-2 photo, 5:4,        | |
|   [hari ini 08-23]|            |  [Hari ini     ] | | steel frame, cols 6-12     | |
| Rehat kopi di    | lead        |  [08.00–23.00  ] | |                            | |
| Jalan Angkasa... |             |  Rehat kopi di   | |                            | |
| Jl. Angkasa 13A  | small       |  Jalan Angkasa.. | +----------------------------+ |
|[Petunjuk][WA]    | buttons     |  [Petunjuk][WA]  |  Croissant dan latte art ...   |
| [owner-2 4:5]    | below fold  |  cols 1-5        |  caption, 8px under            |
|##roster band#####|             |#################### roster band 56px ##############|
+------------------+             +--------------------------------------------------+
```
**Menu andalan** (steel ground). Coffee with prices, plus two drink photos.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Menu andalan  h2 |             | Menu andalan (h2)      | +-----------+             |
| intro (lead)     |             | intro (lead)           | | owner-4   | +---------+ |
| Coffee (script)  |             | Coffee (script h3)     | | 4:5       | | owner-5 | |
| ESPRESSO         |             | ESPRESSO               | | cols 6-9  | | 1:1     | |
| Americano Rp22rb*|             | Americano  Rp 22rb*    | +-----------+ | cols    | |
| cappuccino Rp28rb|             | cappuccino  Rp 28rb*   | Latte art     | 10-12,  | |
| Kaffee latte ... |             | Kaffee latte · Macch.  | rosetta ...   | +96px   | |
| Kopi Jawa* [fav] |             | Kopi Jawa* [favorit..] |               +---------+ |
| Selain kopi (scr)|             | Selain kopi (script h3)|               Red Velvet* |
| Iced Matcha ...  |             | Iced Matcha  Rp 30rb*  |               & espresso  |
| [ow-4][ow-5] 2-up|             | footnote (small)       |                           |
+------------------+             +--------------------------------------------------+
```
The list is in cols 1–5 and the photos in cols 6–12: owner-4 in cols 6–9 at 4:5 (about 384px wide), owner-5 in cols 10–12 at 1:1 (about 282px), offset down 96px. Footnote: "Harga dan nama bergaris titik-titik masih contoh."

**Teman ngopi** (concrete). Food.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Teman ngopi  h2  |             | Teman ngopi (h2)   | +--------------+ +----------+ |
| intro            |             | intro (lead)       | | owner-7 4:5  | | owner-6  | |
| Croissant Butter*|             | Croissant Butter*  | | cols 5-8     | | 4:5      | |
|   Rp 20rb*       |             |   Rp 20rb*         | |              | | cols 9-12| |
| Dimsum Ayam* ... |             | Dimsum Ayam*  ...  | +--------------+ +----------+ |
| Singkong Goreng..|             | Singkong Goreng K.*| Dimsum dengan    Camilan    |
| [owner-7][ow-6]  |             | Kentang · Nasi Gor.| saus cocol...    goreng ... |
+------------------+             +--------------------------------------------------+
```
**Nongkrong atau kerja** (`roster` field, steel text). Why stay.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Nongkrong atau   |             | +---------------------------+ Nongkrong atau     |
| kerja        h2  |             | | owner-3 16:9, steel frame | kerja (h2)         |
| intro            |             | | cols 1-6, pos 80% 30%     | intro (lead)       |
| [owner-3 16:9]   |             | +---------------------------+ Colokan tersedia   |
| caption          |             | Paviliun kaca di bawah ...    Banyak cara bayar  |
| Colokan tersedia |             |                               Dekat Bandara Halim|
|  note (body)     |             |                               Gampang dilihat... |
| Banyak cara bayar|             |                               cols 7-12, 2x2 grid|
+------------------+             +--------------------------------------------------+
```
Amenities: name in lead (Besley 700) with a one-line note in body. No icons.

**Kata mereka** (steel ground). Proof, paraphrased.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Kata mereka  h2  |             | Kata mereka (h2)  | ─────────────  ─────────────  |
| 4,6 dari 5 · 292 |             | 4,6 dari 5 · 292  | Tempatnya       Kopinya enak, |
| ──────────       |             | ulasan Google     | nyaman ... (lead) terutama ...|
| paraphrase 1     |             | cols 1-4          | ─────────────  ─────────────  |
| ──────────       |             |                   | Gampang         Rasa kopinya  |
| paraphrase 2..4  |             |                   | terlihat ...    pas ...       |
| note (small)     |             |                   | note (small), cols 5-12       |
+------------------+             +--------------------------------------------------+
```
The rating line is at body size (Besley 600, `kuning`). Each paraphrase has a 1px `roster` rule above it. No quote marks, no names, no stars.

**Kunjungi kami** (concrete). Find it.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Kunjungi kami h2 |             | Kunjungi kami (h2) | +----------------------------+|
| [owner-1 2:1]    |             | Jl. Angkasa No.13A,| | owner-1 awning crop 2:1    ||
| Cari awning merah|             | ... 13610          | | cols 6-12                  ||
| address          |             | [Petunjuk Arah]    | +----------------------------+|
| [Petunjuk Arah]  |             | Senin  08.00–23.00 | Cari awning merah ini ...    |
| hours table      |             | ...    (hari ini)  | +----------------------------+|
| Minggu  Tutup ░░ |             | Minggu Tutup ░░░░░ | | Google Maps embed 320px    ||
| Parkir terbatas  |             | Parkir terbatas    | |                            ||
| [map 280px]      |             | Boleh merokok ...  | +----------------------------+|
+------------------+             +--------------------------------------------------+
```
In the hours table, the day and time sit together in a 2-column table about 320px wide (not stretched). Today gets weight 700 and a "hari ini" tag 8px after the day name.

**Hubungi kami + footer** (`awning` field). Every way to reach them.
```
phone (390)                      desktop (1440)
+------------------+             +--------------------------------------------------+
| Hubungi kami  h2 |             | Hubungi kami (h2)              | Agan Coffee      |
| Mampir dulu ...  |             | Mampir dulu sebelum ... (lead) | (script, head)   |
| [WhatsApp 0877..]|             | [WhatsApp 0877-7105-1994]      | Jl. Angkasa 13A  |
| [Telepon]        |             | [Telepon] [Instagram]          | Sen–Sab 08–23    |
| [Instagram]      |             | [Petunjuk Arah]  cols 1-7      | Minggu tutup     |
| Agan Coffee (scr)|             |                                | cols 9-12        |
| address · hours  |             |                                |                  |
+------------------+             +--------------------------------------------------+
```

## 8. Motion
**Signature: the BUKA sign swing (hero).** On mount, after the status has been worked out and swapped in, and only if `scrollY < 200`, wait 0.25s, then rotate the sign about its hook (`transform-origin` at the hook point): 0 → 7° → -4.5° → 2.5° → -1° → 0. The segments take 0.30 / 0.34 / 0.30 / 0.28 / 0.26s (about 1.5s in total), each `sine.inOut`. It's a damped pendulum, the sign's real physics, and its job is to draw the eye to today's hours. It starts from the rendered 0° state, so there's no jump and nothing is hidden. Reduced motion: no swing, sign static at 0°.
**Supporting:** the starter `<Reveal>` once per section on Menu andalan, Teman ngopi, Nongkrong and Kata mereka (20px, 0.6s, `power2.out`, top 85%). Kunjungi and Hubungi never fade: people jump straight to them. Buttons: a steel (or lettering) overlay changes opacity 0→1 over 180ms ease-out on hover, and press is `scale(0.98)` over 150ms. Plain CSS, transform and opacity only. Lenis on the starter defaults.
Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.18, reveal: 0.6, hero: 1.5 }`, `ease.swing = "sine.inOut"`, `swing = { angles: [7, -4.5, 2.5, -1, 0], durations: [0.30, 0.34, 0.30, 0.28, 0.26], delay: 0.25 }`, `distance.reveal = 20`.

## 9. What makes it this shop
- The valance has "Agan Coffee" in white script repeated and cut off at the screen edges, exactly as the awning wraps the dome in owner-1 and photo-1.
- Their red-and-yellow BUKA sign gives today's real status and swings once. It's the one moving thing.
- The coffee list is set in the window's own lettering logic: a script "Coffee" header, then ESPRESSO in caps and cappuccino in lowercase. The burgundy-rim cups in the photos pick up the awning red. The visit section shows the real awning as what to look for from the road.

## 10. Avoid
- The AI café default: cream ground, serif display, a terracotta or red accent dotted around. Here red is a whole field, the ground is concrete and terracotta is a full section.
- Espresso-brown palettes, coffee-bean or steam icons, unicode stars, a hero photo under a dark overlay, three equal feature cards, an eyebrow label above a heading, section numbers.
- Awning overload: one awning and one scallop edge on the whole page. No scallop dividers, no repeated awnings, no roster pattern behind text.
- Animating the script (split letters break its joins), a looping marquee on the valance, letting the sign sway forever.
- Making it a workspace, promising parking, putting smoking in a headline, quoting reviews verbatim, using the old Rp 20rb price.
- Showing the face in owner-1, the MBS logo in owner-4, the bin, kettle and bucket in owner-3 (use object-position 80%), or any `photo-*.jpg`.
- Prices pushed to the far end of a row; any list item larger than its h2.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (checked at 390, 768 and 1440; "BUKA" and the script h3 stay ≤ `--step-head`)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices inline, captions 8px under, "hari ini" beside its day)
- [x] Every section has a desktop wireframe that uses the width on purpose (12-column splits; the awning repeats span 1440)
- [x] At least 3 products shown (five, all owner photos, each captioned)
- [x] Within motion-rules.md (one signature swing, section-level reveals only, transform and opacity only, no React Bits, reduced motion = static)
- [x] Brief is decisions, not essays (2–4 pages)
