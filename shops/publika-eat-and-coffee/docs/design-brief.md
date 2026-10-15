# Design brief: Publika Eat and Coffee

## 1. Concept
**"Masuk, lalu lihat dari atas":** the page opens on the owner's own photo of the counter under its copper pendants, framed in dark steel like the hall's windows, then shows the hall from above as a warm seating plan in its own materials (white tile, timber, fern, steel), because what people love here is one big room that fits any group at any hour.
**Signature moment:** in the closing "Ketemu di Publika, ya?" section, six small tables slide together into one long table set with the signature dishes, then three copper pendants light above it: "they adjust the table for us" (review 1), shown right beside the group-booking button.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Hours 09.00/07.00–21.30, tables joined for groups (r1), wifi/work (r2), dishes (r2, r4, r5), 4,5 / 1.467, Indonesian copy, "kamu" voice, and the agreed placement: owner-1 replaces the hero plan, owner-2 replaces the Banana Split drawing, every other drawing stays |
| photos | owner-1 (hero) and owner-2 (Banana Split) go on the site. Customer photos 1–3, reference only: white tile columns, black steel window frames, timber tables, tan leather, rattan, ferns, copper and globe pendants, matte black plates |
| previous build of this shop (git) | The established world the brief's placement refers to: palette, type, flat top-down drawings. Kept. Fixed its weak spots: half-empty hero plan at 1440, menu intro pinned far from its heading, signature cramped in a 6-col box |
| impeccable | Mode Persuade. Established world plus brief-pinned placement, so inherit rather than run a new direction round ("the brief wins"). Launcher and `concept-seed` not run: they download a binary and write `.impeccable/` outside docs/ (seed: none, unavailable); references read directly. Kept: colour "full palette, committed by region" on a light scene; the rut named and avoided (latte art on cream with a serif and three cards; dark industrial with Edison bulbs). From animate: one focal sequence from this product, moved to the close because the hero now holds a real photo that should not perform. From layout/typeset: 6+6 hero, one 4px rhythm, more space above headings than below, tabular figures |

## 3. Palette (6 named colours)
Scene: people check this on a phone on the way, or plan the weekend on the sofa; the hall is daylit through tall windows. The page starts light and ends in the evening (steel).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `tile` | #F2F3EE | Ground of hero and Datang untuk; text on fern and steel | steel on tile 14.1:1 |
| `steel` | #1E2427 | Text on light grounds; ground of Kunjungi, Hubungi, footer; hero photo frame; plates in drawings | tile on steel 14.1:1 |
| `timber` | #D3A26B | Ground of Menu andalan (the tabletop); button on steel; tables in drawings | steel on timber 6.8:1 |
| `fern` | #3C5A39 | Ground of Kata mereka; primary button on tile; ferns in drawings | tile on fern 6.9:1; fern vs tile edge 6.9:1 |
| `copper` | #B8652F | Pendants and light pools in drawings only. Never text, never a button fill | decorative (3.8:1 tile, 3.7:1 steel) |
| `grout` | #D9DCD4 | Hairlines on tile, plank seams base | decorative (1.2:1 vs tile) |

Focus ring: 2px solid in the section's text colour (steel on tile/timber, tile on fern/steel), 3px offset. Divider on steel: tile at 16% (`color-mix`).
Drawing-only food colours (not UI): rice #D9A54A, wagyu #7B3A2C, marbling #D99A86, chili #C7362B, shallot #E9B9C2, lime #9DBB4A, banana #F0D98A, batter #D49A3A, cocoa #5B3A29, mascarpone #F4E7CF, coffee #3A2417, crema #9A6538, tea #B0662C, leaf #4F7A3A.

## 4. Type
Display **Montagu Slab** (variable `opsz`, `wght`): slab feet like the hall's steel I-beams, warm at large sizes. Body **Hanken Grotesk** (variable): clean, open shapes for Indonesian copy. Both `next/font/google`, `latin`, `display: swap`. Times and prices `tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.5rem, 1.7571rem + 3.0476vw, 4.5rem)` (40→72px) | Hero H1 only. Montagu Slab 600, lh 1.05, tracking -0.01em, `text-wrap: balance`; 4 lines max at every width |
| `--step-head` | `clamp(1.875rem, 1.55rem + 1.3333vw, 2.75rem)` (30→44px) | H2. Montagu Slab 600, lh 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2821rem + 0.381vw, 1.625rem)` (22→26px) | H3 (dish names, uses) Montagu Slab 600 lh 1.25; statements (hero lead, paraphrases, rating) Hanken 500 lh 1.35 |
| `--step-body` | `clamp(1.0625rem, 1.0393rem + 0.0952vw, 1.125rem)` (17→18px) | Running text, notes, prices, nav, buttons, wordmark, today line. Hanken 400 (buttons 600), lh 1.55, measure ≤ 62ch |
| `--step-small` | `clamp(0.8125rem, 0.7893rem + 0.0952vw, 0.875rem)` (13→14px) | Category labels, times, captions, "Nomor menyusul". Hanken 600, lh 1.4, sentence case, no tracking |

Ratios at 390 / 1440: 1.33/1.64, 1.36/1.69, 1.29/1.44, 1.31/1.29, all ≥ 1.25. The wordmark is Montagu Slab 600 at `--step-body`.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 75rem (1200px); 12 columns, 24px gap from 1024px; 2 columns at 768–1023 where noted; one column below |
| Page margins phone / desktop (`--gutter`) | 20px / 40px: `clamp(1.25rem, 0.786rem + 1.905vw, 2.5rem)` |
| Section padding phone / desktop (`--section-y`) | 56px / 112px: `clamp(3.5rem, 2.2rem + 5.333vw, 7rem)` |

Spacing on a 4px base: 4, 8, 12, 16, 24, 32, 48, 64. Heading to content 32 desktop / 24 phone. Grounds full-bleed, content in `<Container>`.

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes. Here: photo caption 12px under the frame; menu intro 16px under its heading; visual to category label 16px, label → name → note → price 8px; "Hari ini" 12px after its hours row, hours table capped at 22rem; "Nomor menyusul" 8px under its button; long-table caption 16px under the table, starting at the table's left end; map link 8px under the map.
- **Wide screens are designed, not stretched:** hero 6 + 6 (text, framed photo); menu 3 × 2; Datang untuk one strip of three; Kata mereka 4 + 4 + 4; Kunjungi 5 + 7; Hubungi 6 + 6 over a full-width table band.
- **Lists:** dish names and paraphrases at `--step-lead`, notes and prices at `--step-body`, labels at `--step-small`. Nothing in a list reaches heading size.

## 6. Products on the page
Six products in "Menu andalan", each shown beside its name. Five are flat top-down SVG drawings on matte black plates (steel with a 4% lighter rim, as in owner-2), no outlines, shadows or perspective, 3–6 colours each, real relative sizes. One is the owner's photo.
1. **Nasi Goreng Wagyu**: dome of golden rice, five wagyu slices fanned across it, spring-onion dots. Ø 220 desktop / 128 phone.
2. **Tuna Bakar Sambal Matah**: seared tuna block (dark edges, rosy middle) under chili rings and shallot slices, lime wedge. Ø 220 / 128.
3. **Kopi & teh**: white cup of kopi with a crema ring beside a glass of amber tea with two ice cubes. 2 × 120 / 2 × 64.
4. **Pisang Goreng & Teh**: four battered banana pieces on a small plate with a glass of tea. Ø 180 / 128.
5. **Tiramisu**: square slice, cocoa-dusted top with darker specks, small spoon. Ø 160 / 112.
6. **Banana Split**: **owner-2 photo**, cropped square to 1080 × 1080, shown 220 × 220 desktop / 128 phone, square corners, no border or shadow, unfiltered, directly on the timber ground like a plate.
The five drawn dishes ride again, small, on the closing long table (one per table, kopi on two). No banana split drawing exists anywhere. Drawings carry `data-mockup`, `role="img"` and an Indonesian `aria-label`; the photo carries the PRD alt text and no `data-mockup` (its name does).

## 7. Sections
Grounds in order, morning to evening: tile → timber → tile → fern → steel → steel.

**Hero**: recognise the real place, see it's open, get directions. Text cols 1–6, framed photo cols 7–12, photo top aligned with the H1's top. Frame: 8px steel desktop / 6px phone, square corners (the hall's black window frames). Photo 4:3 at every width, crop window x 192–1089 of 1200 (keeps lattice frame, three copper pendants, counter, till, chalkboard). Below 1024 the hero stacks and the photo follows the today line at full content width. No motion.
```
Hero: phone (390)            Hero: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|Draf mockup (banner)    |   |Draf mockup (banner, full width)                                          |
|Publika...  Menu Lokasi |   |Publika Eat and Coffee                       Menu   Datang untuk   Lokasi |
|                        |   |                                                                          |
|Makan dan               |   |Makan dan                           ######################################|
|ngopi di                |   |ngopi di                            #                                    #|
|Jakarta                 |   |Jakarta                             #  owner-1 4:3: lattice frame, three #|
|Garden City (display)   |   |Garden City (display, cols 1-6)     #  copper pendants, counter, till,   #|
|Buka setiap hari, dari  |   |Buka setiap hari, dari 07.00 di     #  chalkboard. cols 7-12, 588 x 441  #|
|07.00 di akhir pekan.   |   |akhir pekan. (lead)                 #  8px steel frame                   #|
|[Petunjuk Arah]  Lihat  |   |[ Petunjuk Arah ]   Lihat menu      #                                    #|
|menu                    |   |Hari ini, Kamis: 09.00-21.30 (body) ######################################|
|Hari ini, Kamis: 09.00- |   |                                    Bar dan kasir kami, di bawah lampu    |
|21.30                   |   |                                    tembaga. Foto: Publika. (small, 12px) |
|########################|   +--------------------------------------------------------------------------+
|# owner-1 4:3 350x262  #|
|########################|
|caption (small, 12px)   |
+------------------------+
```
At 390 × 844 the button sits above the fold and the photo starts within it.

**Menu andalan**: show the food. The ground is the long table (timber, 1px plank seams in a darker timber every ~180px). Intro directly under the heading.
```
Menu andalan: phone (390)    Menu andalan: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|timber field            |   |timber field, full bleed                                                  |
|Menu andalan (head)     |   |Menu andalan (head)                                                       |
|Hidangan utama mulai    |   |Hidangan utama mulai Rp 55rb, kopi mulai Rp 30rb. (body, 16px under)      |
|Rp 55rb, kopi mulai     |   |                                                                          |
|Rp 30rb. (body)         |   |  (  O 220  )            (  O 220  )             ( o )( o ) 2 x 120       |
|                        |   |  Makanan Indonesia      Makanan Indonesia       Minuman       (small)    |
|(O)  Makanan Indonesia  |   |  Nasi Goreng Wagyu      Tuna Bakar Sambal Matah Kopi & teh    (lead)     |
|128  Nasi Goreng Wagyu  |   |  note (body)            note (body)             note (body)              |
|     note / Rp 85rb     |   |  Rp 85rb                                        mulai Rp 30rb            |
|(O)  Tuna Bakar Sambal..|   |                                                 +----------+             |
|(oo) Kopi & teh         |   |  (  O 180  )            ( O 160 )               | owner-2  | 220 x 220   |
|(O)  Pisang Goreng & Teh|   |                                                 +----------+             |
|(O)  Tiramisu           |   |  Camilan                Pencuci mulut           Pencuci mulut            |
|[ph] Banana Split       |   |  Pisang Goreng & Teh    Tiramisu                Banana Split             |
|visual left, text right,|   |  note / Rp 28rb         note                    note                     |
|gap 16; [ph]=owner-2    |   |  3 x 4 cols; visuals bottom-aligned per row; text 16px under its visual  |
+------------------------+   +--------------------------------------------------------------------------+
```
768–1023: 2 columns × 3 rows, same item anatomy as desktop.

**Datang untuk…**: three uses, ordered by the clock. Desktop: one continuous floor strip (SVG 1200 × 260) with three arrangements, each text block under its own. Phone: three panels, each followed by its text. Morning light from the windows: two long copper parallelograms at 12% opacity across the breakfast table.
```
Datang untuk: phone (390)    Datang untuk: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|tile ground             |   |tile ground                                                               |
|Datang untuk... (head)  |   |Datang untuk... (head)                                                    |
|+--------------------+  |   |+------------------------------------------------------------------------+|
|| meja sarapan,      |  |   || one floor strip, 260px: meja sarapan | sofa + meja kerja | 3 meja      ||
|| cahaya jendela     |  |   ||   + cahaya jendela (pagi)            |  laptop, kopi     |  disatukan  ||
|+--------------------+  |   |+------------------------------------------------------------------------+|
|Sab-Min / dari 07.00    |   |Sab-Min / dari 07.00     Sen-Jum / dari 09.00     Setiap hari / s.d. 21.30|
|Pagi akhir pekan (h3)   |   |Pagi akhir pekan (h3)    Kerja (h3)               Rombongan & meeting (h3)|
|body 2-3 lines          |   |body (3 lines)           body                     body                    |
|[ sofa + meja kerja ]   |   |text blocks in cols 1-4 / 5-8 / 9-12, each under its own arrangement     |
|Kerja (h3) + body       |   +--------------------------------------------------------------------------+
|[ 3 meja disatukan ]    |
|Rombongan & meeting     |
+------------------------+
```

**Kata mereka**: proof without quoting. Fern ground, tile text. No quote marks, names or stars.
```
Kata mereka: phone (390)     Kata mereka: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|fern field              |   |fern field, full bleed                                                    |
|Kata mereka (head)      |   |Kata mereka (head)        | Rombongan (small)    | Kerja & tiramisu       |
|4,5 dari 5 - 1.467      |   |4,5 dari 5 - 1.467 ulasan | paraphrase (lead)    | paraphrase (lead)      |
|ulasan di Google (lead) |   |di Google (lead)          |                      |                        |
|Diringkas dari ulasan   |   |Diringkas dari ulasan     | Tuna (small)         | Nasi goreng wagyu      |
|Google... (small)       |   |Google... (small)         | paraphrase (lead)    | paraphrase (lead)      |
|Rombongan / paraphrase  |   |cols 1-4                  | cols 5-8             | cols 9-12              |
|Kerja & tiramisu / ...  |   +--------------------------------------------------------------------------+
|Tuna / Nasi goreng ...  |
+------------------------+
```

**Kunjungi kami**: address, hours, map, directions. Steel ground, tile text, timber button.
```
Kunjungi kami: phone (390)   Kunjungi kami: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|steel field             |   |steel field, full bleed                                                   |
|Kunjungi kami (head)    |   |Kunjungi kami (head)          +----------------------------------------+  |
|Jalan Jakarta Garden    |   |Jalan Jakarta Garden City     |                                        |  |
|City Blok B2 No. 11,    |   |Blok B2 No. 11, Cakung Timur, |  Google Maps embed, 3:2, lazy,         |  |
|Cakung ... 13910        |   |Cakung, Jakarta Timur 13910   |  cols 6-12, 1px divider-colour edge    |  |
|Jam buka (small)        |   |Jam buka (small)              |                                        |  |
|Senin-Jumat 09.00-21.30 |   |Senin-Jumat  09.00-21.30      |                                        |  |
|  Hari ini              |   |  Hari ini (12px after time)  |                                        |  |
|Sabtu-Minggu 07.00-21.30|   |Sabtu-Minggu 07.00-21.30      +----------------------------------------+  |
|[ Petunjuk Arah ]       |   |[ Petunjuk Arah ] (cols 1-5)  Buka di Google Maps (small, 8px under)      |
|[ map 3:2, lazy ]       |   +--------------------------------------------------------------------------+
|Buka di Google Maps     |
+------------------------+
```

**Hubungi kami**: a real close: bring your group. Text row first, then the signature band: the long table spans the middle 84% of the container, ferns cropped at both ends, three copper pools above. Then the footer.
```
Hubungi kami: phone (390)    Hubungi kami: desktop (1440)
+------------------------+   +--------------------------------------------------------------------------+
|steel field             |   |steel field (1px divider from Kunjungi, container width)                  |
|Ketemu di Publika, ya?  |   |Ketemu di Publika, ya?            Mau datang rombongan atau pakai tempat  |
|(head)                  |   |(head, cols 1-6)                  untuk meeting? ... (body, cols 7-12)    |
|body 3-4 lines          |   |                                  [ WhatsApp rombongan ] [ Petunjuk Arah ]|
|[ WhatsApp rombongan ]  |   |                                  Nomor menyusul (small, 8px under)       |
|Nomor menyusul (small)  |   |                                                                          |
|[ Petunjuk Arah ]       |   |~fern~     (pool)              (pool)              (pool)          ~fern~ |
|  (pool) (pool) (pool)  |   |    [ t1 ][ t2 ][ t3 ][ t4 ][ t5 ][ t6 ]  one long table, chairs both     |
| [t2][t3][t4][t5]       |   |    sides, a dish on each; band cols 1-12, ~300px tall                    |
| band 350 x 220         |   |    Datang rombongan? Mejanya kami satukan. (small, 16px under the table) |
|Datang rombongan? Meja- |   |--------------------------------------------------------------------------|
|nya kami satukan.       |   |Publika Eat and Coffee - Jakarta Garden City Blok B2 No. 11 (small)       |
|footer (small, 2 lines) |   |Draf mockup untuk pemilik. ... Google Maps, foto dari Publika. (small)    |
+------------------------+   +--------------------------------------------------------------------------+
```

## 8. Motion
**Signature: "meja disatukan" (Hubungi kami).** ScrollTrigger on the table band, `start: "top 75%"`, `once: true`. Six table groups (table, rattan chairs, dish) move from scattered to joined: `x`, `y`, `rotation` → 0, 0.9s each, `expo.out`, stagger 0.07s from the centre (~1.25s). At 0.9s the three copper pools fade 0 → 1 (0.5s, `power1.out`). Scattered offsets, left to right (x in `cqi` of the band, y px, rotation): (−7.5, −40, −10°), (−4.5, 50, 8°), (−1.5, −60, −6°), (1.5, 55, 7°), (4.5, −45, −9°), (7.5, 35, 11°); phone uses the middle four with y at 0.6×. The 8% margins either side keep the outer tables inside the band. Pre-state set by CSS under `html[data-motion="on"]` (inline head script, only when motion is allowed), so tables are never hidden and there is no flash. Runs once, no replay, no scrub. Reduced motion or JS off: joined, pools lit, no movement.
**Supporting:** hero still (the photo is the LCP). Menu, Datang untuk, Kata mereka and Kunjungi each fade up once with the starter `Reveal`: 20px, 0.6s, `power2.out`, `top 85%`. Hubungi has no reveal. Buttons: overlay opacity 0 → 0.12 in 180ms ease-out; press `scale(0.98)` in 120ms. Lenis on starter defaults.
Tokens for `lib/motion.ts`: `duration.reveal = 0.6`, `duration.hero = 0.9` (per table), add `duration.glow = 0.5`, `stagger = { tables: 0.07 }`, `ease.fade = "power1.out"`; keep `ease.out = "power2.out"`, `ease.outStrong = "expo.out"`, `distance.reveal = 20`.

## 9. What makes it this shop
1. The owner's own photo of the counter, lattice frame and three copper pendants, framed in the steel of the hall's windows, beside a headline that says where (JGC) and when (07.00 on weekends).
2. Tables that pull together into one long table right beside the group button, because the staff do exactly that (review 1), drawn with this hall's things: timber tables, rattan chairs, ferns, copper pendants.
3. Grounds in the order of a Publika day (bright tile at 07.00, the timber table at lunch, fern, steel under copper light at 21.30); matte black plates on timber, with the banana dessert exactly as the owner photographed it.

## 10. Avoid
- The category default: latte art, beans, steam curls, cream ground with a serif and a terracotta button, a centred headline over three equal icon cards. The opposite too: dark moody industrial, Edison bulbs, neon.
- Mishandling the owner photos: no filter, duotone, tint or overlay; no text on them; no rounded corners, shadows, parallax or zoom; no full-bleed or display beyond ~1.5× their pixels.
- Photo and drawings reading as two sites: the steel frame and the shared grounds tie them. Drawings stay flat and warm; the photo stays untouched. Never redraw the banana split.
- The plan turning technical: no blueprint blue, dimension lines, furniture labels or outlines; strictly top-down filled shapes.
- Cute food (faces, sparkles, bouncing plates) and a toy signature (drag, hover-shuffle, scrub, replay, a split-text headline).
- Gradients except the copper pools; glass; drop shadows; small tracked uppercase labels; emojis; extra accent colours.
- Customer photos anywhere; reviews in quote marks or with names; hours or prices pushed to the far edge of a row.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (dish names and paraphrases at lead, labels small, wordmark body)
- [x] Max content width set; no detail pinned far from what it describes (menu intro moved under its heading; caption 12px, prices 8px, "Hari ini" 12px, hours table 22rem)
- [x] Every section has a desktop wireframe that uses the width on purpose (6+6, 3×2, strip of 3, 4+4+4, 5+7, 6+6 over a full-width band)
- [x] At least 3 products shown (food and product shops): five drawn dishes plus the owner's banana split photo in the menu; five drawn again on the closing table
- [x] Within motion-rules.md (one signature, section-level reveals, transform/opacity only, nothing hidden, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
