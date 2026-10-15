# Design brief: Publika Eat and Coffee

## 1. Concept
**"Dari atas" (from above):** the page looks down on Publika's hall like a warm, coloured seating plan (timber tables on a bright floor, rattan chairs, ferns, copper pendants), because what people love here is one big room that fits any group at any hour.
**Signature moment:** in the hero, six small tables slide in from around the floor and close up into one long table set with the signature dishes, then the copper pendants above it light up. It shows "they adjust the table for us" (review 1) instead of saying it.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Hours 09.00/07.00–21.30 as a real timeline, tables put together for groups (r1), wifi/work (r2), dishes (r2, r4, r5), 4,5 / 1.467 rating, Indonesian copy, "kamu" voice |
| photos (customer, reference only) | Materials: white tile columns, dark steel beams, timber tables, tan leather banquettes, rattan chairs, hanging ferns, copper + globe pendants, tall glazing; matte black plates and the banana split's layout (photo-2). None appear on the site |
| impeccable | Mode Persuade. Named the rut (latte-art hero on cream with serif and a row of three menu cards; or its opposite, dark industrial with Edison bulbs). Seven candidates from the audience's world: seating plan from above; the hall's material board; the day as a halte timetable; the laminated cafe menu book; the WhatsApp "ketemu di Publika?" thread; an illustrated section of the hall (the literal reading); the ruko address plate. Chose the seating plan, raised by the material board (each section's ground is one of the hall's materials, at full commitment) and by the timetable (real times set in tabular figures as the structure of "Datang untuk"). Colour strategy "full palette, committed by region"; light scene; faces off the default list; one authored focal motion. `concept-seed` not run: the launcher downloads a binary and writes `.impeccable/` outside `docs/` (seed: none, unavailable) |

## 3. Palette (6 named colours)
Scene: people check this on a phone on the way, or plan the weekend on the sofa; the hall itself is daylit through tall windows. So the page starts light and ends in the evening (steel).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `tile` | #F2F3EE | Page ground (hero, Datang untuk); text on fern and steel | steel on tile 14.1:1 |
| `steel` | #1E2427 | All text on light grounds; ground of Kunjungi, Hubungi, footer; plates in illustrations | tile on steel 14.1:1 |
| `timber` | #D3A26B | Ground of Menu andalan (the tabletop); button on steel; tables in illustrations | steel on timber 6.8:1; timber vs steel edge 6.8:1 |
| `fern` | #3C5A39 | Ground of Kata mereka; primary button on light grounds; ferns in illustrations | tile on fern 6.9:1; fern vs tile edge 6.9:1 |
| `copper` | #B8652F | Pendants and their light pools in illustrations only. Never text, never a button fill | decorative; 3.8:1 vs tile, 3.7:1 vs steel |
| `grout` | #D9DCD4 | Hairlines: tile grout, plank seams, dividers on tile | decorative (1.2:1 vs tile) |

Focus ring: 2px solid in the section's text colour (steel on tile/timber, tile on fern/steel), 3px offset.
Illustration-only food colours (not UI): rice #D9A54A, wagyu #7B3A2C, marbling #D99A86, chili #C7362B, shallot #E9B9C2, lime #9DBB4A, banana #F0D98A, batter #D49A3A, cocoa #5B3A29, mascarpone #F4E7CF, strawberry #E59AA8, coffee #3A2417, crema #9A6538, tea #B0662C, leaf #4F7A3A.

## 4. Type
Display: **Montagu Slab** (variable, `opsz` + `wght`): its slab feet echo the hall's steel I-beams, and it is warm at large optical sizes. Body: **Hanken Grotesk** (variable): clean, modern, open shapes for Indonesian copy. Both via `next/font/google`, `latin`, `display: swap`. Numbers for times and prices use `font-variant-numeric: tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.5rem, 1.7571rem + 3.0476vw, 4.5rem)` (40→72px) | Hero H1 only. Montagu Slab 600, lh 1.05, tracking -0.01em, `text-wrap: balance`; 3 lines target, 4 max |
| `--step-head` | `clamp(1.875rem, 1.55rem + 1.3333vw, 2.75rem)` (30→44px) | H2 section headings. Montagu Slab 600, lh 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2821rem + 0.381vw, 1.625rem)` (22→26px) | H3 (dish names, use titles) in Montagu Slab 600, lh 1.25; statements (hero lead, paraphrases, rating line) in Hanken 500, lh 1.35 |
| `--step-body` | `clamp(1.0625rem, 1.0393rem + 0.0952vw, 1.125rem)` (17→18px) | Running text, notes, prices, nav links, buttons, wordmark. Hanken 400 (buttons 600), lh 1.55, measure ≤ 62ch |
| `--step-small` | `clamp(0.8125rem, 0.7893rem + 0.0952vw, 0.875rem)` (13→14px) | Category labels, times, captions, "Nomor menyusul". Hanken 600, lh 1.4, sentence case, no letter-spacing |

Ratios at 390 / 1440: 1.33/1.64, 1.36/1.69, 1.29/1.44, 1.31/1.29. All ≥ 1.25. The header wordmark is Montagu Slab 600 at `--step-body`, so it never outranks a heading.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 75rem (1200px); 12 columns, 24px gap from 768px up; one column below |
| Page margins phone / desktop (`--gutter`) | 20px / 40px: `clamp(1.25rem, 0.786rem + 1.905vw, 2.5rem)` |
| Section padding phone / desktop (`--section-y`) | 56px / 112px: `clamp(3.5rem, 2.2rem + 5.333vw, 7rem)` |

Spacing scale on a 4px base: 4, 8, 12, 16, 24, 32, 48, 64. More space above a heading (section-y) than below it (32 desktop / 24 phone).
Section grounds are full-bleed; content sits inside `<Container>`. Only the hero plan bleeds past the container (to the right viewport edge).

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here: plate to dish name 16px, name to note to price 8px; hero caption ≤ 24px from the long table; the "Hari ini" marker 12px after its own hours row; the hours table is capped at 22rem so times sit next to their days.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident. Here: hero 6 + 6 columns with the plan bleeding right; menu 3 × 2 grid; Datang untuk one strip with three columns; Kata mereka 4 + 4 + 4; Kunjungi 5 + 7; Hubungi 6 + 6.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size. Dish names are `--step-lead`, notes and prices `--step-body`.

## 6. Products on the page
No owner photos, so every product is a flat, top-down illustration (inline SVG), the same "from above" view as the plan, on a matte black plate (steel #1E2427 with a 4% lighter rim, as in photo-2). Flat fills, no outlines, no shadows, no perspective, 3–6 colours each. Plates keep real relative sizes. Six products, each beside its name, in "Menu andalan"; four reappear small on the hero's long table:
1. **Nasi Goreng Wagyu**: dome of golden rice, five wagyu slices fanned across it, a few green spring-onion dots. Ø 220 desktop / 128 phone. Also on the hero table.
2. **Tuna Bakar Sambal Matah**: a seared tuna block (dark edges, rosy middle) under chili rings and shallot slices, a lime wedge. Ø 220 / 128.
3. **Kopi & teh**: a white cup of black kopi with a crema ring beside a glass of amber tea with two ice cubes. 2 × 120 / 2 × 64. Also on the hero table.
4. **Pisang Goreng & Teh**: four battered banana pieces on a small plate with a glass of tea. Ø 180 / 128. Also on the hero table.
5. **Tiramisu**: a square slice, cocoa-dusted top with a few darker specks, a small spoon. Ø 160 / 112. Also on the hero table.
6. **Banana Split**: oval black bowl, banana halves both sides, three scoops (chocolate, strawberry, chocolate), chocolate drizzle lines, crumble dots, a mint leaf (from photo-2's layout). 220 × 160 / 128 wide.
Every dish is `data-mockup` (illustration and, where flagged, name and price) and has `role="img"` with an Indonesian `aria-label`.

## 7. Sections
Grounds in order, morning to evening: tile → timber → tile → fern → steel → steel.

**Hero**: recognise the hall, see it's open, get directions. H1, lead, button, today's hours, link to the menu; the plan illustration with the signature moment. No frame, card or rounded box around the plan: the floor continues under the text.
```
Hero: phone (390)            Hero: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|Draf mockup (banner)    |   |Draf mockup (banner, full width)                                          |
|Publika   Menu  Lokasi  |   |Publika Eat and Coffee                       Menu   Datang untuk   Lokasi |
|                        |   |                                  ~fern~  : beam (dashed)  :   ~fern~ >>  |
|Makan dan ngopi di      |   |Makan dan ngopi di         [col]     o pendant   o pendant   o        >>  |
|Jakarta Garden City     |   |Jakarta Garden City                 h  h  h  h  h  h  h  h  h  h  h   >>  |
|(display, 3 lines max)  |   |(display, cols 1-6)                [==== 6 meja jadi 1 + hidangan ===] >> |
|Buka setiap hari, dari  |   |                                    h  h  h  h  h  h  h  h  h  h  h   >>  |
|07.00 di akhir pekan.   |   |Buka setiap hari, dari 07.00        Datang rombongan? Mejanya kami     >> |
|[ Petunjuk Arah ]       |   |di akhir pekan. (lead)              satukan. (small, <=24px from table)   |
|Hari ini 09.00-21.30    |   |[ Petunjuk Arah ]  Lihat menu       [sofa kulit + meja kerja]   [col] >>  |
|Lihat menu (link)       |   |Hari ini 09.00-21.30 (body)         plan: cols 7-12, bleeds to edge >>    |
|~fern~   o     o    ~fe |   +--------------------------------------------------------------------------+
| h h h h h h h h        |
|[== 4 meja jadi 1 ==]   |
| h h h h h h h h        |
|Datang rombongan? Meja- |
|nya kami satukan.       |
+------------------------+
```
Plan contents: tile floor with faint grout grid (inside the plan area only), two white tile columns, overhead steel beams as dashed lines (the plan convention for "above"), ferns cropped by the edges, a tan leather banquette with a 2-top and a laptop, the long table (6 tables desktop / 4 phone) with rattan chairs and four dishes, three copper pendant discs with light pools. Below 1024px the hero stacks: the plan becomes a full-bleed band (~300px tall on phone) under the text, and the button sits above the fold at 390 × 844. From 1024px, text in cols 1–6 and plan in cols 7–12. The today line is `--step-body`.

**Menu andalan**: show the food. The section ground is the long table itself (timber, faint plank seams in a darker timber, 1px). Intro with the [MOCKUP] "mulai" prices to the right of the heading.
```
Menu andalan: phone (390)    Menu andalan: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|timber field            |   |timber field, full bleed; container 1200                                  |
|Menu andalan (head)     |   |Menu andalan (head, cols 1-6)          Hidangan utama mulai Rp 55rb,      |
|Hidangan utama mulai    |   |                                       kopi mulai Rp 30rb. (body, 7-12)   |
|Rp 55rb, kopi mulai     |   |                                                                          |
|Rp 30rb. (body)         |   |  (  O 220  )            (  O 220  )             ( o )( o ) 2 x 120       |
|                        |   |  Makanan Indonesia      Makanan Indonesia       Minuman       (small)    |
|(O)  Makanan Indonesia  |   |  Nasi Goreng Wagyu      Tuna Bakar Sambal Matah Kopi & teh    (lead)     |
|128  Nasi Goreng Wagyu  |   |  note (body)            note (body)             note (body)              |
|     note               |   |  Rp 85rb                                        mulai Rp 30rb            |
|     Rp 85rb            |   |                                                                          |
|(O)  Tuna Bakar Sambal..|   |  (  O 180  )            ( O 160 )               (  oval 220  )           |
|(O)  Pisang Goreng & Teh|   |  Camilan                Pencuci mulut           Pencuci mulut            |
|(O)  Tiramisu           |   |  Pisang Goreng & Teh    Tiramisu                Banana Split             |
|(O)  Banana Split       |   |  note / Rp 28rb         note                    note                     |
|(oo) Kopi & teh         |   |  3 x 4 cols; text left-aligned under its own plate, 16px below           |
|(plate left, text right)|   +--------------------------------------------------------------------------+
+------------------------+
```
Plates in a row share one baseline (bottom-aligned), so different plate sizes read as a table setting, not a jagged grid.

**Datang untuk…**: three uses, ordered by the clock. Desktop: one continuous floor strip with three arrangements, each text block under its own arrangement. Phone: three panels, each followed by its text.
```
Datang untuk: phone (390)    Datang untuk: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|tile ground             |   |tile ground                                                               |
|Datang untuk... (head)  |   |Datang untuk... (head, cols 1-6)                                          |
|+--------------------+  |   |                                                                          |
|| meja sarapan,      |  |   |+------------------------------------------------------------------------+|
|| cahaya jendela     |  |   || one floor strip, 260px: meja sarapan | sofa + meja kerja | meja panjang||
|+--------------------+  |   ||   + cahaya jendela (pagi)            |  laptop, kopi     |  12 kursi   ||
|Sab-Min / dari 07.00    |   |+------------------------------------------------------------------------+|
|Pagi akhir pekan (h3)   |   |Sab-Min / dari 07.00     Sen-Jum / dari 09.00     Setiap hari / s.d. 21.30|
|body 2-3 lines          |   |Pagi akhir pekan (h3)    Kerja (h3)               Rombongan & meeting (h3)|
|+--------------------+  |   |body (3 lines)           body                     body                    |
|| sofa + meja kerja  |  |   |each text block sits under its own arrangement (cols 1-4 / 5-8 / 9-12)    |
|+--------------------+  |   +--------------------------------------------------------------------------+
|Sen-Jum / dari 09.00    |
|Kerja (h3) + body       |
|[ meja panjang ]        |
|Rombongan & meeting     |
+------------------------+
```
The strip has no border on the site; the boxes above only mark its extent. Morning light from the tall windows is two long parallelograms of copper at 12% opacity falling across the breakfast table.

**Kata mereka**: proof without quoting. Fern ground, tile text. Paraphrases have no quote marks, no names, no stars.
```
Kata mereka: phone (390)     Kata mereka: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|fern field              |   |fern field, full bleed                                                    |
|Kata mereka (head)      |   |Kata mereka (head)        | Rombongan (small)    | Kerja & tiramisu       |
|4,5 dari 5, 1.467       |   |4,5 dari 5 - 1.467 ulasan | paraphrase (lead,    | paraphrase (lead)      |
|ulasan Google (lead)    |   |di Google (lead)          | no quote marks)      |                        |
|Diringkas dari ulasan   |   |Diringkas dari ulasan     |                      |                        |
|Google (small)          |   |Google, bukan kutipan     | Tuna (small)         | Nasi goreng wagyu      |
|                        |   |(small)                   | paraphrase (lead)    | paraphrase (lead)      |
|Rombongan (small)       |   |cols 1-4                  | cols 5-8             | cols 9-12              |
|paraphrase (lead)       |   +--------------------------------------------------------------------------+
|Kerja & tiramisu        |
|paraphrase (lead)       |
|Tuna / Nasi goreng ...  |
+------------------------+
```

**Kunjungi kami**: address, hours, map, directions. Steel ground, tile text, timber button.
```
Kunjungi kami: phone (390)   Kunjungi kami: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|steel field             |   |steel field, full bleed                                                   |
|Kunjungi kami (head)    |   |Kunjungi kami (head)               +----------------------------------+   |
|Jalan Jakarta Garden    |   |Jalan Jakarta Garden City Blok     |                                  |   |
|City Blok B2 No. 11,    |   |B2 No. 11, Cakung Timur, Cakung,   |  Google Maps embed, 4:3,         |   |
|Cakung ... 13910        |   |Jakarta Timur 13910 (body)         |  lazy, cols 6-12                 |   |
|Senin-Jumat 09.00-21.30 |   |Senin-Jumat    09.00-21.30         |                                  |   |
|Sabtu-Minggu 07.00-     |   |Sabtu-Minggu   07.00-21.30 Hari ini|                                  |   |
|21.30  < Hari ini       |   |(hours table max 22rem, tabular)   |                                  |   |
|[ Petunjuk Arah ]       |   |[ Petunjuk Arah ]   cols 1-5       +----------------------------------+   |
|+--------------------+  |   +--------------------------------------------------------------------------+
|| map 4:3, lazy      |  |
|+--------------------+  |
+------------------------+
```

**Hubungi kami**: a real close: come back with your group. The evening plan reuses the long table with all pendants lit (static). Then the footer.
```
Hubungi kami: phone (390)    Hubungi kami: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|steel field             |   |steel field (continues)                                                   |
|Ketemu di Publika, ya?  |   |+--------------------------------+  Ketemu di Publika, ya? (head)         |
|(head)                  |   || meja panjang, malam: lampu     |  body: rombongan / meeting, kabari     |
|body 2-3 lines          |   || tembaga menyala, cols 1-6      |  lewat WhatsApp (cols 7-12)            |
|[ WhatsApp rombongan ]  |   || (no frame on site; drawn on    |  [ WhatsApp rombongan ] [ Petunjuk ]   |
|Nomor menyusul (small)  |   ||  the steel ground)             |  Nomor menyusul (small, under button)  |
|[ Petunjuk Arah ]       |   |+--------------------------------+                                        |
|+--------------------+  |   |footer: Publika Eat and Coffee / alamat / Draf mockup / Data: Google Maps |
|| meja panjang malam |  |   +--------------------------------------------------------------------------+
|| + cahaya tembaga   |  |
|+--------------------+  |
|footer (small)          |
+------------------------+
```

## 8. Motion
**Signature: "meja disatukan".** On load, 150ms after first paint, the hero's table groups (each table with its chairs and dishes) move from scattered positions into one long table: `x`, `y`, `rotation` to 0, 0.9s each, `expo.out`, stagger 0.07s from the centre (total about 1.25s). Desktop offsets per table, left to right: (-120, -40, -10°), (-70, 50, 8°), (-25, -60, -6°), (25, 55, 7°), (75, -45, -9°), (125, 35, 11°); phone uses the middle four at 0.6×. At 0.9s the three copper light pools fade in (opacity 0→1, 0.5s, `power1.out`). Runs once; no replay on scroll. The scattered state is set by CSS under `html[data-motion="on"]` (set by an inline head script only when motion is allowed), so there is no flash and the tables are never hidden. Reduced motion or JS off: tables joined and pools lit, no movement. Hero text never animates.
**Supporting:** each section below the hero (not the hero) fades up once with the starter's `Reveal`: 20px, 0.6s, `power2.out`, start at `top 85%`. Buttons: hover overlay opacity 0→0.12 in 180ms ease-out; press `scale(0.98)` in 120ms. Nothing else moves. Lenis on starter defaults.
Motion tokens for `lib/motion.ts`: `ease.signature = "expo.out"`, `ease.reveal = "power2.out"`, `ease.fade = "power1.out"`, `dur.signature = 0.9`, `dur.glow = 0.5`, `dur.reveal = 0.6`, `stagger.tables = 0.07`, `reveal.y = 20`.

## 9. What makes it this shop
1. Tables that join into one long table in the hero, because the staff do exactly that for groups (review 1), drawn with this hall's things: white tile columns, steel beams overhead, ferns, tan leather banquette, copper pendants.
2. The page's grounds are the hall's materials, in order of a Publika day: bright tile at 07.00, the timber table at lunch, fern, then dark steel under copper light at 21.30. The real opening times structure "Datang untuk".
3. Matte black plates on a timber table, and the banana split drawn the way it is served (photo-2); the closing line is what a WhatsApp group sends: "Ketemu di Publika, ya?"

## 10. Avoid
- The category default: latte art, coffee beans, steam curls, a cream ground with a serif and a terracotta button, a centred headline over three equal cards with icons. Copper must never become a button or text colour on tile.
- The predictable opposite: dark moody industrial, Edison bulbs, neon.
- The plan turning into a technical drawing: no blueprint blue, no dimension lines, no labels on furniture, no outlines; filled, warm shapes only. Every illustration stays strictly top-down.
- Cute food: no faces, no sparkles, no bouncing plates.
- The signature turning into a toy: no drag, no hover-shuffle, no scroll scrubbing, no second hero effect (no split-text headline).
- Gradients on grounds, buttons or text (the copper light pools in the illustrations are the one radial gradient), glass, drop shadows, rounded image cards, small tracked uppercase labels, emojis.
- Customer photos anywhere on the site; review quotes in quote marks or with names; hours or prices pushed to the far edge of a wide row.
- Colour noise: one ground per section; no extra accent colours beyond the palette and the illustration food colours.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (dish names and paraphrases at lead, labels at small, wordmark at body)
- [x] Max content width set; no detail pinned far from what it describes (prices 8px under names, hours table capped at 22rem, caption ≤ 24px from the table)
- [x] Every section has a desktop wireframe that uses the width on purpose (6+6 with bleed, 3×2, strip of 3, 4+4+4, 5+7, 6+6)
- [x] At least 3 products shown (food and product shops): six illustrated dishes in the menu, four of them on the hero table
- [x] Within motion-rules.md (one signature, section-level reveals, transform/opacity only, nothing hidden, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
