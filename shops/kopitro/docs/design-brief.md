# Design brief: Kopitro

## 1. Concept
The page is Kopitro's bar at night, seen from a roadside table: the black "KOPITRO / MANUAL BREW"
banner on top, the yellow-stained pine counter with its black steel edge below, and the drinks
standing on it. Every customer photo shows that banner, counter and steel, so the owner sees
their own bar before reading a word.
Signature moment: on load, the glass carafe under the V60 in the hero fills with amber brew
(about 1.4 s, once), showing one cup brewed by hand before the visitor scrolls.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The world (black banner, red shape, yellow pine, steel kettles, carafe and short faceted glass, clip-top jars), hours 19.00–02.00 with Monday closed, the products, the tone ("V60 buat berdua? Bisa."), and the bans: no photos on the site, no smoking, no other roasters' stickers. |
| impeccable | Persuade mode; the brief pins the world ("the brief wins"), so impeccable shaped the execution. Set aside: night-road light trails, pour-over recipe card, gerobak lettering, chalk bean board, warung receipt. "Committed" colour (pine owns whole fields); stay out of the "condensed type on black boxes with hard shadows" cluster; light-on-dark type compensation; one authored motion moment. Scripts not run (they write outside docs/). |
| motion-rules.md | One signature (the pour); section-level reveals only; transform and opacity only; reduced motion = final state. |

## 3. Palette (6 named colours)
Strategy: Committed. Roughly malam 55%, kayu 35% of a full desktop page; merah under 1%.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `malam` | #15120F | Night/banner ground; all text on kayu; illustration lines on kayu | spanduk on malam 16.1:1 |
| `spanduk` | #F3EEE4 | Text and illustration lines on malam; fills for milk, bread, fries | malam on spanduk 16.1:1 |
| `kayu` | #E2A42B | Counter fields (hero counter + menu, closing band); primary button on malam; today's hours row; focus ring on malam | malam on kayu 8.5:1; kayu on malam 8.5:1 |
| `merah` | #C7311F | Only the shape behind "KOPITRO" (stand-in for the banner's red) | spanduk display text on merah 4.7:1 |
| `baja` | #A9A49B | Steel: secondary text on malam, rail highlight, hairlines, kettle and phin fills | baja on malam 7.5:1. Never text on kayu (1.1:1) |
| `seduh` | #B4621C | Brew liquid in illustrations only. Never text | 4.2:1 on malam (graphic ≥ 3:1); 2.0:1 on kayu, so on kayu it always sits inside a malam outline |

No text colour made with alpha. The wood grain is malam at 6–14% over kayu (decoration only).

## 4. Type
**Sofia Sans Extra Condensed** (display, headings, product names; variable, used at 800–900, caps)
and **Sofia Sans** (body, labels, buttons; 400–700). Both via `next/font/google`, subsets `latin`
and `latin-ext`, `display: "swap"`. One superfamily in two widths reads as one print job, like the
banner. Extra Condensed Black matches the banner's tall heavy caps, and Sofia Sans is the plain body
the brief asks for. The banner's "Manual Brew" is a serif, but we do not add a third family.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(6rem, 2.4rem + 17vw, 14rem)` → 104px @390, 224px @1440 | "KOPITRO" only. Extra Condensed 900, caps, line height 0.9 (one word, always one line), tracking −0.005em |
| `--step-head` | `clamp(2.5rem, 1.6rem + 3.6vw, 4.75rem)` → 40 / 76px | Section h2: Extra Condensed 850, caps, line height 1.05, tracking 0.01em |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.875rem)` → 22 / 30px | Hero line, "MANUAL BREW", open status, statements, h3/product names (Extra Condensed 800 caps), board items. Line height 1.3 (1.1 for condensed caps) |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` → 17 / 19px | Running text, product notes, prices (tabular), hours rows, buttons. Sofia Sans 400 on kayu; 430 + 0.01em tracking and line height 1.6 on malam |
| `--step-small` | `0.8125rem` → 13px | Labels (caps, 600, tracking 0.16em), footnotes, "hari ini" tag, draft banner |

Ratios @390 / @1440: small→body 1.31 / 1.46; body→lead 1.29 / 1.58; lead→head 1.82 / 2.53;
head→display 2.6 / 2.9. All ≥ 1.25 at 768 too.
"MANUAL BREW" sits under the name: `--step-lead`, Sofia Sans 600 caps, tracked (about 0.35–0.45em)
until it is roughly as wide as "KOPITRO", never wider. Check in screenshots that "KOPITRO" spans
~80–88% of the phone content width and ~55–62% of the 1200px container. If it doesn't, change only
the vw term and the max.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 768px) |

- Grid: 12 columns, 24px gap from 1024px; menu uses 2 columns on phone; everything else stacks.
  The hero splits into name (cols 1–7) and bar scene (cols 8–12) only from 1280px. Below that it
  stacks as on the phone, with the scene right-aligned on the rail, so the ~212px name at 1024
  never runs into the drawing.
- **Rail:** every kayu field starts with a 12px malam band with a 1px baja line on its top edge
  (the black steel edge on the counter in the photos). Hero objects stand on this rail.
- **Wood:** kayu fields carry one static SVG plank texture: horizontal seams (1px, malam 14%) at
  uneven spacing, 3–4 long grain strokes per plank (malam 6%). No knots, no photo texture, nothing
  that drops malam-on-kayu text below 7:1.
- **Grounds in order:** malam (hero top) → kayu (hero counter, continuing through Menu) → malam
  (Cara, Malam, Kata, Kunjungi, separated by 1px baja hairlines at 30%) → kayu (Hubungi) → malam
  footer. Kayu appears as two fields, never as alternating stripes.
- **Proximity:** a price sits directly under its product name (≤ 8px); the "hari ini" tag sits 8px
  after today's row; labels sit ≤ 12px above their list. The hours table is at most 20rem wide,
  with the time column starting at 7rem, so day and time stay together. Nothing is pinned to the far
  edge of a row.
- **Wide screens:** every section uses the 12-column split shown in §7. Running text max 60ch;
  statements max 26ch.
- **Lists:** menu names, methods, beans and themes are `--step-lead` at most; notes `--step-body`.

## 6. Products on the page
Five products, each a flat line illustration of the specific item, standing on a shared 2px malam
shelf line in "Menu andalan" (on kayu). The hero bar scene adds the V60 on carafe a second time,
as the signature.
Style: one line weight (2.5px, `vector-effect: non-scaling-stroke`), round caps and joins, drawn
straight-on like a barista's sketch. Fills come only from the palette. Glass stays unfilled so the
ground shows through, as the glass does on the yellow counter in photo-3. Malam lines on kayu,
spanduk lines on malam. No shadows, no gradients, no steam loops.

1. **V60 untuk berdua** (double width): ribbed ceramic V60 cone with handle on the bulbous glass
   carafe from photo-3, seduh brew at ~35%, two short faceted glasses beside it with seduh.
2. **Vietnam Drip**: steel phin (baja fill, lid knob, flange) on a short glass; malam coffee layer
   over a spanduk condensed-milk layer, as in photo-2.
3. **Es Kopi Susu Kopitro**: tapered clear cup, spanduk milk coffee with a seduh swirl at the base,
   three ice-cube outlines, "KOPITRO / MANUAL BREW" printed in malam (the only lettering in any drawing).
4. **Roti Bakar**: two thick slices cut on the diagonal, stacked on a plate; spanduk crumb, malam crust
   line, seduh filling between.
5. **Kentang Goreng**: paper-lined basket overflowing with spanduk fries, a few spilled on the shelf,
   so it reads as generous.

Heights: V60 240px, others 180px at desktop; 200px and 120px on phone. Each has an `aria-label`.

## 7. Sections
Grounds: `#` = merah shape, `=` = rail, `~` = kayu field continues.

**1. Hero**: recognition, tonight's status and directions in one screen. On a phone, both buttons
sit above 844px. The open status is computed for Jakarta time (see TRD). With no JS it shows
"Selasa–Minggu 19.00–02.00 · Senin tutup".
```
Hero: phone (390)                   Hero: desktop (1440)
+----------------------+            +------------------------------------------------------+
| draft banner         |            | draft banner (13px)                                  |
| #KOPITRO (display)   |            |  ####                                                |
|M A N U A L   B R E W |            |  #KOPITRO                         V       ___        |
| Kopi seduh manual,   |            |  ####  display 224px      (k)   [c]  [g] |j|         |
| buka sampai jam 2    |            |        cols 1-7           kettle carafe glass jar    |
| pagi. (lead, baja)   |            |  M A N U A L   B R E W   objects cols 8-12, standing |
|  (k)  [c]  [g]       |            |  Kopi seduh manual,      on the rail; carafe fills   |
|==== rail =========== |            |  buka sampai jam 2 pagi. (the signature moment)      |
| Buka malam ini       |            |==================== rail ============================|
| 19.00-02.00 (lead)   |            |  Buka malam ini 19.00-02.00     Jl. Slamet Riyadi    |
| Senin tutup (small)  |            |  Senin tutup (small)            No.9-21, Matraman    |
| [Petunjuk Arah][WA]  |            |  [Petunjuk Arah] [WhatsApp]     (body, cols 8-12)    |
+~~~~~~~~~~~~~~~~~~~~~~+            |  cols 1-6                                            |
                                    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
```

**2. Menu andalan**: the counter continues; five products stand on one shelf line, V60 widest.
```
Menu andalan: phone (390)           Menu andalan: desktop (1440)
+~~~~~~~~~~~~~~~~~~~~~~+            +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| MENU ANDALAN (head)  |            | MENU ANDALAN (head, cols 1-7)                        |
| intro (body)         |            | intro line (body)                                    |
|  [V60 + carafe +     |            |                                                      |
|   2 glasses] span 2  |            |  [V60 on carafe   ]  [drip] [cup]  [toast] [fries]   |
|--------------------- |            |  [ + 2 glasses    ]                                  |
| V60 / Rp 25rb,       |            |------------------------------------------------------|
| berdua Rp 40rb       |            | V60 (lead)       | VIETNAM | ES KOPI | ROTI  |KENTANG|
| [drip]     [cup]     |            | Rp 25rb ·        | DRIP    | SUSU    | BAKAR |GORENG |
|---------- ---------- |            | berdua Rp 40rb   | Rp 20rb | KOPITRO | Rp18rb|Rp18rb |
| name+price name+pr.  |            | note (body)      | note    | Rp 20rb | note  |note   |
| [toast]    [fries]   |            | cols 1-4         | 5-6     | 7-8     | 9-10  |11-12  |
|---------- ---------- |            | footnote: harga masih contoh (small)                 |
| name+price name+pr.  |            +------------------------------------------------------+
| footnote (small)     |
+----------------------+
```

**3. Cara kami menyeduh**: the manual-brew point as a bar board. Lists have hairlines between
items; bean list and the extra methods carry `data-mockup`.
```
Cara kami menyeduh: phone (390)     Cara kami menyeduh: desktop (1440)
+----------------------+            +------------------------------------------------------+
| CARA KAMI            |            | CARA KAMI         | METODE        | CONTOH BIJI      |
| MENYEDUH (head)      |            | MENYEDUH (head)   | V60           | MALAM INI        |
| Satu cangkir, satu   |            |                   | ------------- | Gayo             |
| seduhan... (lead)    |            | Satu cangkir, satu| Vietnam Drip  | ------------     |
| V60 buat berdua?     |            | seduhan. Pilih    | ------------- | Kintamani        |
| Bisa. (lead, kayu)   |            | biji dan caranya, | Japanese iced | ------------     |
| METODE (label)       |            | barista yang seduh| French press  | Toraja           |
| V60 / Vietnam Drip   |            | (lead)            | Kopi Tubruk   | ------------     |
| / Japanese iced ...  |            | Banyak pilihan... |  (lead items) | Flores Bajawa    |
| CONTOH BIJI (label)  |            | V60 buat berdua?  |               |                  |
| Gayo    Kintamani    |            | Bisa. (lead, kayu)|               |                  |
| Toraja  Flores B.    |            | cols 1-5          | cols 7-9      | cols 10-12       |
+----------------------+            +------------------------------------------------------+
```

**4. Malam di Kopitro**: the atmosphere. A row of spanduk lane dashes (48×4px, 40px gaps, 50%)
runs full-bleed at the section foot, like the road's centre line. It's static. The live music line
carries `data-mockup` and the "*" note "menunggu konfirmasi".
```
Malam di Kopitro: phone (390)       Malam di Kopitro: desktop (1440)
+----------------------+            +------------------------------------------------------+
| MALAM DI             |            | MALAM DI KOPITRO (head)    | Suasana pinggir jalan,  |
| KOPITRO (head)       |            |                            | ramai kendaraan lewat   |
| Meja di pinggir      |            | Meja di pinggir jalan,     | ------------------------|
| jalan, lampu hangat  |            | lampu hangat di atas bar,  | Nyaman buat ngobrol     |
| ... (lead, 22ch)     |            | kendaraan lewat. Malam     | ------------------------|
|--------------------- |            | masih panjang, kopinya     | Ngopi bareng + musik    |
| 5 facts (body),      |            | diseduh satu-satu.         | ------------------------|
| hairlines between,   |            | (lead, max 26ch)           | Musik live akhir pekan *|
| live music *         |            | cols 1-7                   | Bar kopi tanpa alkohol  |
|==  ==  ==  ==  ==  ==|            |                            | (body, cols 8-12)       |
+----------------------+            |==   ==   ==   ==   ==   ==   ==   ==   ==   ==   ==  |
                                    +------------------------------------------------------+
```

**5. Kata mereka**: paraphrased themes, no names, no quote marks, no stars.
```
Kata mereka: phone (390)            Kata mereka: desktop (1440)
+----------------------+            +------------------------------------------------------+
| KATA MEREKA (head)   |            | KATA MEREKA (head)  | V60 dan roti bakarnya dipuji   |
| 4,7 di Google dari   |            |                     | ------------------------------ |
| 316 ulasan (lead)    |            | 4,7 di Google       | Banyak asal biji dan metode,   |
|--------------------- |            | dari 316 ulasan     | kualitasnya terjaga            |
| V60 dan roti         |            | (lead, no stars)    | ------------------------------ |
| bakarnya dipuji      |            |                     | Kentang gorengnya porsi besar  |
|--------------------- |            |                     | ------------------------------ |
| ... 5 themes (lead), |            |                     | Seru di pinggir jalan          |
| hairlines between    |            |                     | ------------------------------ |
+----------------------+            |                     | Nyaman buat ngobrol bareng     |
                                    | cols 1-4            | cols 6-12 (lead)               |
                                    +------------------------------------------------------+
```

**6. Kunjungi kami**: address, hours with today highlighted, map. No "masuk" or indoor wording.
```
Kunjungi kami: phone (390)          Kunjungi kami: desktop (1440)
+----------------------+            +------------------------------------------------------+
| KUNJUNGI KAMI        |            | KUNJUNGI KAMI      | +-----------------------------+ |
| (head)               |            | (head)             | |                             | |
| Jl. Slamet Riyadi    |            | Jl. Slamet Riyadi  | |                             | |
| No.9-21, ... 13150   |            | No.9-21, Kebon     | |   Google Maps embed         | |
| Senin      Tutup     |            | Manggis, Matraman  | |   4:3, 1px baja frame       | |
| Selasa  19.00-02.00  |            | Senin       Tutup  | |                             | |
| ... today in kayu    |            | Selasa 19.00-02.00 | |                             | |
| + "hari ini" tag     |            |   hari ini <- kayu | |                             | |
| [Petunjuk Arah]      |            | ...  Minggu        | |                             | |
| +-----------------+  |            | [Petunjuk Arah]    | +-----------------------------+ |
| |  map embed 4:3  |  |            | cols 1-5           | cols 6-12                       |
| +-----------------+  |            +------------------------------------------------------+
+----------------------+
```

**7. Hubungi kami + footer**: the closing counter: number, WhatsApp, call, directions.
```
Hubungi kami: phone (390)           Hubungi kami: desktop (1440)
+----------------------+            +------------------------------------------------------+
|==== rail =========== |            |==================== rail ============================|
| HUBUNGI KAMI (head)  |            | HUBUNGI KAMI (head)        | 0815-1084-3658 (lead)   |
| Mau tanya biji ...   |            |                            | [WhatsApp] [Telepon]    |
| (body)               |            | Mau tanya biji yang ada    | [Petunjuk Arah]         |
| 0815-1084-3658       |            | malam ini? Chat aja dulu.  | (buttons by the number) |
| (lead, tabular)      |            | (body) cols 1-6            | cols 7-12               |
| [WhatsApp][Telepon]  |            |------------------------------------------------------|
| [Petunjuk Arah]      |            | footer (malam, small): Kopitro · Manual Brew ·       |
|--------------------- |            | full address · Draf tampilan, belum untuk umum       |
| footer (malam)       |            +------------------------------------------------------+
+----------------------+
```

## 8. Motion
**Signature: the pour (hero).** The liquid is a seduh rect inside an SVG `clipPath` shaped like
the carafe's inside. At mount + 0.2 s a thin seduh stream between the V60 tip and the carafe neck
fades in (opacity, 0.15 s). The liquid rises from empty to its resting level of ~35% with
`yPercent` 100 → 0 over 1.2 s, `sine.inOut`. At 1.4 s the stream fades out (0.2 s), and one last
drop falls 36px and fades (0.3 s). Total ≤ 1.7 s, runs once, never tied to scroll. The DOM's default
is the final state (carafe filled, stream hidden), so no-JS, reduced motion and screenshots all
show the filled carafe. Text and buttons never wait for it. Its job: focus. It says "diseduh
satu-satu" without words.
**Supporting:** `<Reveal>` once per section content block (sections 2–7; the menu grid is one block,
no stagger): 20px, 0.6 s, `power2.out`, start "top 85%".
**Responses:** buttons and links show a hover overlay (pseudo-element opacity 0 → 1, 180 ms ease-out)
and a press nudge (`translateY(1px)`, 120 ms). No hover lifts or scaling.
Lenis: starter defaults.
Tokens for `lib/motion.ts`: `duration = { press: 0.18, ui: 0.25, reveal: 0.6, hero: 1.4 }`,
`ease = { out: "power2.out", outStrong: "expo.out", inOut: "power2.inOut", pour: "sine.inOut" }`,
`distance = { reveal: 20 }`.

## 9. What makes it this shop
- One counter, one banner: the hero's yellow pine counter, with its black steel edge, runs straight
  under the menu, so the products stand on Kopitro's own counter beneath the KOPITRO banner and its red shape.
- The photo-3 pairing (glass carafe + short faceted glass) is the hero object and fills on load, and
  "V60 untuk berdua" is drawn as one carafe with two glasses.
- Hours logic for a bar that closes at 02:00: 00:00–02:00 counts as the previous night,
  and Monday shows "Senin tutup · buka lagi Selasa 19.00". Plus the road's centre-line dashes under
  "Malam di Kopitro".

## 10. Avoid
- The generic coffee site: espresso brown, cream, serif headlines, latte-art hero, "Our Story".
- Hazard tape: black/yellow alternating stripes, diagonal stripes, yellow sprinkled as small accents
  on malam beyond the primary button, today's row and the focus ring.
- The dark-AI cluster: neon glow, glowing edges, hard offset shadows, bordered black boxes around
  every block, grain or noise overlays.
- Condensed type everywhere (body, buttons, prices, hours stay Sofia Sans); red creeping beyond
  the name; wood that looks like a photo or cuts text contrast.
- Clip art: mixed illustration styles, icon tiles, looping steam, cigarettes or ashtrays, other
  roasters' or communities' stickers.
- Review cards with stars, quote marks or names; the 4.7 rating as a star widget.
- Stating live music, the bean list or prices as fact; "come inside" wording; hero text or
  buttons that fade in or wait for the pour.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Checked every
      10px from 320 to 1920: lowest ratios 1.31, 1.29, 1.80, 2.40. Lists max `--step-lead`; phone
      number `--step-lead` under a `--step-head` heading
- [x] Max content width set (1200px); no detail pinned far from what it describes. Prices ≤ 8px
      under names; "hari ini" 8px after its row; hours table capped at 20rem (fixed during this
      check); hero address under the scene it sits with
- [x] Every section has a desktop wireframe that uses the width on purpose: 12-column splits, the
      menu fills all 12 columns, the hero's right side holds the bar scene. The hero splits only from
      1280px, so the name and scene never collide at 1024 (fixed during this check)
- [x] At least 3 products shown (five illustrated: V60 for two, Vietnam Drip, Es Kopi Susu
      Kopitro, Roti Bakar, Kentang Goreng)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced
      motion = final state, no React Bits)
- [x] Brief is decisions, not essays: about 4 pages of decisions plus the 14 required wireframes
