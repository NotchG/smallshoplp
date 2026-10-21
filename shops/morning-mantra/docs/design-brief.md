# Design brief: Morning Mantra

## 1. Concept
The page is built from the cafe's own bar wall: the fluted cobalt bar front with its black
counter and gold kick strip, the navy coffee board, black marble, the patterned floor tiles and
the neon "MORNING / mantra" sign, so it reads as Morning Mantra and not any blue cafe.
Signature moment: on load the hero name switches on like the neon tube it copies. "MORNING"
flickers twice to full, then "mantra" glows in after it. About 1.1 s, opacity only, once.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Cobalt + brushed gold + black marble + white walls (photo-2), tiles and glass roof (photo-3, owner-1), board names and layout (photo-2), squid plate and black-and-gold tea cup (photo-1), caps + script pairing (owner-1, neon) |
| impeccable | Persuade mode. Worlds weighed: coffee board, neon sign, fluted bar front, floor tiles, gold wire furniture, arched doorway, and "mantra" read as meditation, which is the rut (no lotus, no zen). Committed colour (cobalt holds ~40% of the page), page-scale fields, one authored focal moment, faces off the defaults list. Brief-pinned palette and type mood kept ("the brief wins") |

impeccable's `context`/`concept-seed` scripts not run (they write outside `docs/` and need a live
user); its new-work method applied by hand. Scene: a neighbour checking the phone at 07:55, a worker
at a laptop at 14:00, both in daylight: light body (white walls), cobalt fields carry the brand.

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `cobalt` | #1F3C9E | Bar front: hero, indoor room, contact close; headings on white | wall on cobalt 8.9 ✓; cobalt on wall 8.9 ✓ |
| `navy` | #15215A | Coffee board, praise section, upstairs room; flute lines | wall on navy 14.0 ✓; gold on navy 8.9 ✓ |
| `gold` | #E3C47E | Neon sign, prices on dark, primary button fill, hairlines | gold on cobalt 5.7 ✓; on ink 10.7 ✓; navy text on gold 8.9 ✓. **Never text on wall (1.6)** |
| `wall` | #F5F7FA | Page ground (cool white walls), text on dark | ink on wall 16.9 ✓ |
| `ink` | #13161D | Black marble: food section ground, body text on wall, counter line | wall on ink 16.9 ✓ |
| `tile` | #A7B3CB | Floor-tile pattern lines, borders on wall. Decoration only | 2.0 on wall: never text |

Focus ring: 2px gold, 3px offset on dark grounds; 2px cobalt on wall.

## 4. Type
Jost (variable, 300–500, latin) for capitals, headings and body; Ms Madi (400, latin) only for
the word "mantra" in the hero sign and the footer lockup. Both via `next/font/google`, `display: swap`.
If `Ms_Madi` isn't in this Next version's font list, use `Mrs_Saint_Delafield`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(3rem, 2.1rem + 4.6vw, 6.25rem) (≈52 → 100px) | "MORNING" (Jost 300, caps, tracking 0.16em, one line, nowrap); "mantra" at 1.05× in Ms Madi |
| `--step-head` | clamp(2rem, 1.6rem + 1.7vw, 3rem) (32 → 48px) | h2: Jost 300, caps, tracking 0.12em, line-height 1.1 |
| `--step-lead` | clamp(1.3rem, 1.18rem + 0.45vw, 1.5rem) (20.8 → 24px) | h3 (Jost 400, sentence case), hero line, praise themes, rating line |
| `--step-body` | clamp(1rem, 0.97rem + 0.15vw, 1.125rem) (16 → 18px) | body, board items (Jost 400 caps, 0.1em), menu items, prices (500, tabular) |
| `--step-small` | clamp(0.8rem, 0.77rem + 0.12vw, 0.875rem) (12.8 → 14px) | labels (Jost 500 caps, 0.16em), captions, legend |

Ratios at 390 / 1440: display:head 1.6 / 2.1, head:lead 1.55 / 2.0, lead:body 1.3 / 1.33, body:small
1.25 / 1.29. Body line-height 1.55, max 62ch; +0.01em tracking for light text on dark. "MORNING" leading
0.95 (one line, verify at 360/390/1024/1440; adjust tracking, not size). "mantra" on its own line,
line-height 1.1, no negative margin; if `report.json` flags overlap, add top margin to "mantra".
Footer lockup: caps at `--step-body` (tracking 0.3em), script at `calc(var(--step-lead) * 1.4)`
(≈29 / 34px), so it stays below the "Hubungi kami" h2 at both widths.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (from 768) |
| Section padding phone / desktop (`--section-y`) | 56px / 104px (from 768) |

- 12-column grid, 32px gap on desktop; two-column layouts start at 1024px.
- **Proximity:** prices sit 12px after their item name, inline, never in a right-aligned column.
  Labels sit 8px above their h3. Captions sit 8–12px under their illustration.
- **Wide screens:** every section below is a two-column or grid composition at 1440. The contact
  close is a split, not a centred stack.
- **Lists:** board items and menu items at `--step-body`; praise themes at `--step-lead`. Nothing in a list is set at head size.
- `[data-mockup]` text: dotted underline, 1px, offset 4px (cobalt on wall, gold on dark).
  Banner (Indonesian): "Draf mockup untuk Morning Mantra. Teks bergaris titik-titik adalah contoh dan menunggu konfirmasi Anda."

## 6. Products on the page
Five products, drawn as flat **monoline illustrations in the gold-wire language** (the gold chairs
and the neon tube are single lines): one stroke weight (1.75px at a 160px viewBox,
`vector-effect: non-scaling-stroke`), round caps and joins, one line colour per ground (cobalt on
wall, gold on ink), at most one flat accent fill under 15% of the drawing. No gradients, shading or emoji style.
1. **Kapulaga Coffee**: short glass, coffee line, two cardamom pods at its foot (Menu kopi).
2. **Pandan Coffee**: tall glass with a knotted pandan leaf (Menu kopi).
3. **V60**: ribbed cone dripper on a glass server (Menu kopi).
4. **Cumi bakar sambal matah**: square plate, banana-leaf rice cone with shallot dots, two ramekins,
   cucumber, tomato and lettuce, the squid over kangkung strokes (Makan di sini, large).
5. **Teh panas**: cup and saucer with a gold rim and handle, as in the shop (Makan di sini, small).
Each has its name as caption and `role="img"` + `aria-label="Ilustrasi …"`. One caption per
section: "Gambar: ilustrasi, bukan foto." owner-1 shows furniture, not products, so it doesn't count.

## 7. Sections
Wall ground unless stated. Bands: cobalt → wall → ink → wall → navy → wall → cobalt.

**Hero** (cobalt, full bleed). Purpose: recognition in five seconds, today's hours, directions.
Sign, hours, line, buttons, owner-1 in an arch-topped frame (`border-radius: 50% 50% 0 0 / 24% 24% 0 0`
keeps the baked-in tagline whole; check no letter is clipped, else plain 4px radius), 1.5px gold edge.
Ends in the **bar front**: 10px ink counter, 64–72px of navy flute lines (2px every 14px) on cobalt,
6px gold kick strip. Text never sits on the flutes. Below 1024px the image follows the buttons.
```
Hero: phone (390)              Hero: desktop (1440)
+--------------------------+   +--------------------------------------------------------------+
| draft banner             |   | draft banner                                                 |
| BUKA HARI INI 08.00–22.00|   |  BUKA HARI INI 08.00–22.00              .------------------. |
| M O R N I N G   (glow)   |   |  M O R N I N G             (glow)      (   owner-1 arch     )|
|           mantra         |   |                 mantra                  |  5 cols ~460px    | |
| Awali pagimu dengan      |   |  Awali pagimu dengan mantra.            |  gold 1.5 edge    | |
| mantra. Kopi dari banyak |   |  Kopi dari banyak pilihan biji dan      |                   | |
| pilihan biji & masakan.. |   |  masakan Indonesia di Jl. Raya Condet.  |                   | |
| [Petunjuk Arah][WhatsApp]|   |  [Petunjuk Arah]  [WhatsApp]            '-------------------' |
| Jl. Raya Condet, K. Jati |   |  Jl. Raya Condet, Balekambang, Kramat Jati    (7 | 5 cols)     |
| .----------------------. |   |______________________________________________________________| ink
| (   owner-1, full w    ) |   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| flutes
| '----------------------' |   |==============================================================| gold
|__________________________|   +--------------------------------------------------------------+
||||||||||||||||||||||||||||   Menu section starts visible under the bar band at 1440x900.
|==========================|
+--------------------------+
```

**Menu kopi**. Purpose: the coffee regulars order, with prices. The board is an object on the white wall, like in the shop: navy panel, 4px radius,
40px padding, small header "Papan kopi · harga dalam ribu rupiah", items in Jost caps, price 12px after.
Below the board: "Juga ada Baileys coffee (es) · pilihan biji untuk V60."
```
Menu kopi: phone               Menu kopi: desktop
+--------------------------+   +--------------------------------------------------------------+
| MENU KOPI (h2)           |   |  MENU KOPI (h2)                 +-------- navy board -------+ |
| lead (2–3 lines)         |   |  lead: banyak pilihan biji,     | PAPAN KOPI · ribu rupiah  | |
| [ill.] [ill.] [ill.]     |   |  manual brew V60                | MORNING COFFEE 35         | |
| Kapulaga Pandan V60      |   |                                 | MANTRA COFFEE 30  ...     | |
| +---- navy board ------+ |   |  [Kapulaga] [Pandan] [V60]      | (2 columns, 5 + 4 items)  | |
| | MORNING COFFEE 35    | |   |   ~140px each, name under       | V60 40                    | |
| | ... 9 rows, 1 column | |   |  caption: ilustrasi             +---------------------------+ |
| +----------------------+ |   |  (5 cols)                        Baileys / V60 note (7 cols)  |
| Baileys / V60 note       |   +--------------------------------------------------------------+
+--------------------------+
```

**Makan di sini** (ink, the black marble). Purpose: show it is a kitchen, not only coffee. Gold-line squid plate large, tea cup tucked at its
lower right. Menu in groups Sarapan / Makan / Camilan / Minuman, each group a small gold label,
items in two columns on desktop with prices inline.
```
Makan di sini: phone           Makan di sini: desktop
+--------------------------+   +--------------------------------------------------------------+
| MAKAN DI SINI (h2)       |   |  .---------------------------.  MAKAN DI SINI (h2)           |
| lead                     |   |  |  squid plate illustration |  lead: cumi bakar sambal matah |
| [ squid plate, full w ]  |   |  |  ~520px, gold line        |  di atas kangkung, nasi daun.. |
|              [tea cup]   |   |  |               [tea cup]   |  SARAPAN        MAKAN          |
| SARAPAN                  |   |  '---------------------------'  Nasi uduk      Cumi bakar 55rb|
| Nasi uduk · Bubur ayam.. |   |  caption: ilustrasi             Bubur ayam     Ayam bakar 40rb|
| MAKAN                    |   |  (6 cols)                       CAMILAN        MINUMAN        |
| Cumi bakar 55rb ...      |   |                                 Pisang g. 22rb Teh panas 15rb |
| CAMILAN / MINUMAN ...    |   |                                 (6 cols, 2 sub-columns)       |
+--------------------------+   +--------------------------------------------------------------+
```

**Tiga ruang**. Purpose: pick the room for today (work, friends, privacy). Drawn like a cross-section of the building: upstairs on top, ground floor split
into indoor and outdoor. Each cell starts with a band of its own material, then text on a calm
ground: upstairs = cobalt stepped stair on navy (5-step polygon); indoor = flutes + gold strip on
cobalt; outdoor = floor-tile pattern (`tile` lines on wall, an authored SVG `<pattern>`) above wall
with a 1px tile border. Small label inside each band: "Foto ruangan menyusul". DOM order = visual order.
```
Tiga ruang: phone              Tiga ruang: desktop
+--------------------------+   +--------------------------------------------------------------+
| TIGA RUANG (h2) + lead   |   |  TIGA RUANG (h2)   lead: kerja di depan bar, santai di luar,  |
| +--- navy -------------+ |   |                    kumpul privat di atas  (h2 4 | lead 8)     |
| | stair band  88px     | |   |  +-- navy: stair motif --+-- LANTAI ATAS -----------------+  |
| | LANTAI ATAS          | |   |  |   5 cols, full height |  Ruang privat di lantai atas   |  |
| | Ruang privat (h3)..  | |   |  |                       |  karaoke · musala · [WhatsApp] |  |
| +----------------------+ |   |  +-----------------------+--------------------------------+  |
| +--- cobalt -----------+ |   |  +-- cobalt: flutes ------------++-- wall: tile band ------+  |
| | flutes band          | |   |  | DI DALAM · DEPAN BAR         || DI LUAR · ATAP KACA     |  |
| | Kerja dari sini (h3) | |   |  | Kerja dari sini (h3)         || Santai bareng teman (h3)|  |
| | Wi-Fi 60–80 Mbps...  | |   |  | Wi-Fi ~60–80 Mbps, kursi...  || tanaman, kursi bayi     |  |
| +----------------------+ |   |  +------------------------------++-------------------------+  |
| [ tile band / outdoor ]  |   |   (6 | 6 cols)                                                |
+--------------------------+   +--------------------------------------------------------------+
```

**Kata mereka** (navy). Purpose: proof without quotes. Rating as a lead-size line with "4.7" in gold 500. Four themes, each a
lead-size sentence under a 32px gold rule. Caption: "Diringkas dari ulasan Google."
```
Kata mereka: phone             Kata mereka: desktop
+--------------------------+   +--------------------------------------------------------------+
| KATA MEREKA (h2)         |   |  KATA MEREKA (h2)          ---                ---            |
| 4.7 dari 228 ulasan      |   |  4.7 dari 228 ulasan       Tempatnya cantik   Nyaman di dalam |
| ---  theme 1             |   |  Google                    dan chic.          maupun di luar. |
| ---  theme 2             |   |  caption                   ---                ---            |
| ---  theme 3, theme 4    |   |  (4 cols)                  Kopinya enak...    Pelayanannya    |
| caption                  |   |                            (8 cols, 2 × 2)    ramah.          |
+--------------------------+   +--------------------------------------------------------------+
```

**Kunjungi kami** (wall; purpose: get there) and **Hubungi kami** (cobalt; purpose: act). The page
ends on a 32px tile-pattern floor strip.
Action rows: small caps label 8px above the detail (lead size), arrow at the row end, 72px tall,
gold hairline between. The detail is never pushed to the far edge.
```
Kunjungi: phone                Kunjungi + Hubungi: desktop
+--------------------------+   +--------------------------------------------------------------+
| KUNJUNGI KAMI (h2)       |   |  .-------- map embed, 4:3 --------.  KUNJUNGI KAMI (h2)      |
| full address             |   |  |  (7 cols)                      |  Jl. Raya Condet No.03 6.. |
| Buka setiap hari         |   |  |                                |  Buka setiap hari          |
| Senin ... Minggu 08–22   |   |  '--------------------------------'  Senin–Minggu list, today • |
| (today marked •)         |   |                                      [Petunjuk Arah] (5 cols) |
| [ map 1:1 ]              |   +======================== cobalt =============================+
| [Petunjuk Arah]          |   |  HUBUNGI KAMI (h2)           | WHATSAPP                      |
+=== cobalt ===============+   |  Tanya apa saja, termasuk    | 0817-5414-141               > |
| HUBUNGI KAMI (h2) + lead |   |  ruang privat di atas.       | TELEPON / PETUNJUK ARAH rows  |
| WhatsApp row / Telepon / |   |  (5 cols)                    | (7 cols)                      |
| Petunjuk arah rows       |   |  MORNING mantra lockup · Let's start your morning... · addr |
| lockup + brand line      |   |::::::::::::::::::::: tile floor strip ::::::::::::::::::::::|
|:::::: tile floor ::::::::|   +--------------------------------------------------------------+
+--------------------------+
```

## 8. Motion
**Signature (hero sign).** CSS keyframes, inside `@media (prefers-reduced-motion: no-preference)`
so the starter's reduced-motion rule never leaves a delayed half state. Starts on first paint, needs no JS.
- "MORNING": opacity 0.35 → 1 → 0.45 → 1 → 0.75 → 1 over 0.6 s, linear between stops.
- "mantra": delay 0.55 s, opacity 0.35 → 0.9 → 0.5 → 1 over 0.55 s, last stop ease-out.
- Glow is a static `text-shadow` (gold at 55% / 0.12em and 25% / 0.5em) that rides on the opacity.
  Only the hero sign glows.
- Never below 0.35, so the LCP text is always painted. Reduced motion / no JS: lit, still.

**Supporting.** Starter `<Reveal>` once per section block (Menu kopi board + illustrations as one
block, Makan, the Tiga ruang grid, Kata mereka, Kunjungi). Nothing else enters. Buttons and action rows:
`::after` overlay opacity 0 → 0.12 on hover/focus, `scale(0.98)` on press, 150 ms ease-out.
Lenis at starter defaults. Motion tokens: starter values (hero 1.1, reveal 0.7, press 0.15, distance 20).

## 9. What makes it this shop
- The hero is their bar: black counter, cobalt flutes, gold kick strip under the neon sign.
- The coffee board is set as the navy board behind their bar, with their exact names.
- Rooms shown as the building's cross-section: upstairs over indoor and outdoor, each in its own material.

## 10. Avoid
- The category rut: cream ground, serif display, latte-art hero photo, "Our story", a row of identical cards.
- The name read literally: lotus, yoga, zen stones, "mindfulness" stock copy.
- A dark neon site: glow on buttons, borders or sections, or a looping flicker. One sign, one switch-on.
- Script creep (Ms Madi only on "mantra"); gold text on white; gold gradients, foil, glass cards.
- Amenity icon grids and big stat numbers ("60–80 Mbps" huge); right-pinned prices, leader dots.
- Flutes or tiles behind text; tiles as wallpaper (only the outdoor band and the footer floor).
- Clip-art illustrations (mixed strokes, shading); customer photos; English headings; quoted reviews.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
