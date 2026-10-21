# Design brief: Indokopi

Decisions, not essays. Copy is Bahasa Indonesia; names stay as the shop writes them.

## 1. Concept
The page is Indokopi's own street corner, built from the road-sign language the shop already
jokes in (the "Kawasan Wajib Ngopi" plate, the warning diamond, a supplemental hours plate, a blue
direction sign, an end-of-zone sign) set on its real materials: night asphalt, sand-stone fascia,
white wall, brown corrugated counter. It fits because the shop talks in road signs and runs till 03.00.
Signature moment: on load a passing motorbike's headlight sweeps across the hero's yellow
"KAWASAN WAJIB NGOPI · INDOKOPI" plate and its hours plate, and the retroreflective sign
brightens from dusk-dim to full yellow (once, about 1.25 s).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Fascia wording, the sign jokes, six promos, the 03.00 and nonstop-weekend hours, the palette, can glasses on wooden coasters, Indomie + tahu, and owner-1.jpg (the only photo allowed on the site). |
| impeccable | Persuade mode. Named the rut (cream-and-serif "artisan coffee" page; its opposite, a dark neon night café) and avoided both. Used the brief's road-sign world at full range, with five sign types that each carry content, not yellow stickers on a neutral template. Committed colour, typefaces taken from the fascia, motion from the material's own behaviour. Launcher/concept-seed not run (they write outside docs/); the brief pins the direction. |

## 3. Palette (6 named colours)
Strategy: Committed. Yellow owns the hero sign, every section-heading plate and the promo board;
asphalt owns three full-bleed sections (hero, Coffee · Work · Thrift, Hubungi).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `aspal` | #1E1D1B | night ground; all text on light grounds and on yellow | 15.2:1 on dinding, 11.2 on batu, 10.3 on rambu |
| `rambu` | #F5C400 | sign yellow: plates, primary button, focus ring on dark | aspal on rambu 10.3:1; rambu on aspal 10.3:1 |
| `batu` | #DCD2BF | fascia stone: Promo and Kunjungi grounds; secondary text on aspal | aspal on batu 11.2:1; batu on aspal 11.2:1 |
| `dinding` | #F4F3EF | white wall: Menu and Kata mereka grounds; text on dark, brown, blue | on aspal 15.2, on konter 9.1, on petunjuk 7.1 |
| `konter` | #5B3A24 (ribs #523320) | corrugated counter: menu band, shelf ledges; secondary text on light | dinding on konter 9.1:1 (10.2 on ribs); konter on batu 6.8:1 |
| `petunjuk` | #1C4F9C | blue direction sign (Kunjungi); focus ring on light | dinding on petunjuk 7.1:1; as ring on dinding 7.1:1 |

Signature dim state: rambu under 40% aspal = #9F810B; aspal text on it 4.5:1. No other colours
in UI; illustration colours are listed in §6.

## 4. Type
Archivo (variable: wdth 62–125, wght 100–900, `axes: ["wdth"]`) for everything; Roboto Slab
(variable) only for "Coffee · Work · Thrift", the fascia's slab line. Both via `next/font/google`.
Wordmark: Archivo 900 caps at `font-stretch: 112%` (wide, like the fascia letters). Sign labels:
Archivo 800 caps at 75% (condensed road-sign lettering). Prices and hours: 700, `tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.75rem, 1.5rem + 5.6vw, 6rem)` (44→96px) | "INDOKOPI" on the hero plate only |
| `--step-head` | `clamp(2rem, 1.3rem + 2.6vw, 3.25rem)` (32→52px) | h2 heading plates; CWT slab heading |
| `--step-lead` | `clamp(1.4375rem, 1.25rem + 0.8vw, 1.75rem)` (23→28px) | hero label/tagline/hours value, h3, product and promo names, praise themes |
| `--step-body` | `clamp(1.125rem, 1.08rem + 0.2vw, 1.1875rem)` (18→19px) | running text, menu list, hours rows, buttons |
| `--step-small` | `0.875rem` (14px) | "BUKA HARI INI", "syarat berlaku", hour ticks, footer |

Checked at 360/390/768/1024/1440: every step is ≥1.28× the one below. Display leading 0.9, one
line, `nowrap`, sized `min(var(--step-display), 15.5cqi)` with the plate's inner box as the
size container, so it can't overflow its plate (still ≥1.45× head at every width). 15.5 assumes
the wordmark is ~5.9em wide: measure it once and set the factor so it fills ≤92% of the plate.
Heads 1.1, lead 1.2, body 1.55. Body measure ≤ 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768) / 40px (≥1280) |
| Section padding phone / desktop (`--section-y`) | 64px / 96px (≥768) / 112px (≥1280) |

- **Plates:** radius 14px (heading plates 0.22em); border = `inset 0 0 0 6px <ground>, inset 0 0 0 9px <ink>`;
  padding 20px phone / 40px desktop for the hero plate, 0.2em 0.45em for heading plates.
- **Proximity:** product price sits 8px under its name; promo price on the line under the name;
  each hours bar sits directly under its day row; address line directly under the directions button.
- **Wide screens:** every section is two-column or a grid from `lg` (1024); hero 7/5 columns.
- **Inside plates below the hero:** text is `--step-lead` or smaller (address, hours,
  promo names, the struck end sign); the phone number and rating line are lead too. Only h2 heading plates use `--step-head`.
- **Lists:** menu list at `--step-body`; product, promo and praise items at `--step-lead`, never larger.

## 6. Products on the page
No owner product photos exist, so four flat inline-SVG illustrations stand on a counter ledge in
"Menu andalan": **Caramel Latte**, **Matcha (Latte)**, **Es Kopi Susu** (the iced milk coffee) and
**Indomie Goreng + Tahu**. One consistent style: side view, flat fills, no gradients, 2.5px aspal
outline on glass, plate and coaster only.
- Drinks: can-shaped glass (rounded body, slight shoulder at the rim), 3 ice cubes as lighter
  rounded squares, black straw at 12°, wooden coaster ellipse (#B9824B top, #8E5C30 edge).
  Caramel Latte: milk-coffee #C8986A, caramel band #B5651D at the bottom, foam #EAD9C0.
  Matcha: green #7FA65A over milk #EEE9DA. Es Kopi Susu: espresso #6B4126 on top of milk #D8BC98.
- Indomie Goreng + Tahu: white plate ellipse with an orange #E07B2A / green #2F7D4F rim pattern,
  wavy noodles #F2C766, fried tofu cubes #D9952F (edge #B8741E), scallion #4E9A4A, chilli dots #C7372F.
- Size: about 220px tall at desktop, 140px at phone. Never an ashtray, cigarette, cup logo or the banner siren.
Pictograms (promo plates and diamonds) are separate: solid aspal silhouettes like real sign
symbols: two people at a table, laptop at a table, hanger with shirt, "3+1" cups, two cups, cup
under a moon, cake slice, cup with noodle bowl.

## 7. Sections
**Hero.** Recognition, today's hours, actions. Aspal ground; a dashed dinding lane marking runs along the bottom edge.
Owner photo `indokopi-depan.jpg` = owner-1.jpg cropped 600×450 at x135 y272 (fascia, brick pillar,
mirror, both signs; no cables, motorbikes or banner). Buttons: "Petunjuk Arah" (rambu, primary), "WhatsApp" (dinding outline).
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +--------------------------------------------+
| draft banner     |     | draft banner                               |
|+================+|     | +=========================+ +-------------+|
||KAWASAN WAJIB   ||     | | KAWASAN WAJIB NGOPI     | | owner photo ||
||NGOPI    (lead) ||     | | INDOKOPI    (display)   | | 4:3, cols   ||
||INDOKOPI (disp) ||     | | Coffee · Work · Thrift  | | 8-12, bottom||
||Coffee·Work·Thr.||     | +=========================+ | aligned with||
|+================+|     | +-------------------------+ | the buttons ||
|+----------------+|     | | BUKA HARI INI 09.00-03.00| |             ||
||BUKA HARI INI   ||     | +-------------------------+ +-------------+|
||09.00-03.00     ||     | Kopi, teman cerita, di Jatinegara (lead)   |
|+----------------+|     | [Petunjuk Arah] [WhatsApp]                 |
|Kopi, teman cerita|     | Jl. Jatinegara Timur II No.4b, Rawa Bunga  |
|[Petunjuk][WhatsA]|     | - - - - - - - lane marking - - - - - - - - |
|Jl. Jatinegara... |     +--------------------------------------------+
|[ photo 4:3 peek ]|      sign stack = cols 1-7 (from lg)
```
**Menu andalan.** Show the food. Dinding ground; corrugated konter band below.
```
Menu: phone              Menu: desktop
+------------------+     +--------------------------------------------+
|[Menu andalan]    |     | [Menu andalan]         Ngopi dulu, cerita  |
|Ngopi dulu, ...   |     |                        belakangan. Pesan di |
| glass  | glass   |     |                        jendela / scan QR.   |
|=====ledge========|     |  glass     glass      glass      plate      |
|Caramel | Matcha  |     |=================== ledge ==================|
|Latte   | Rp 22rb |     | Caramel    Matcha     Es Kopi    Indomie    |
|Rp 22rb |         |     | Latte      Rp 22rb    Susu       Goreng+Tahu|
| glass  | plate   |     | Rp 22rb    note       Rp 18rb    note       |
|=====ledge========|     |||||||||| corrugated konter band ||||||||||||
|Es Kopi | Indomie |     | KOPI          NON-KOPI         MAKANAN      |
|Susu ...| + Tahu  |     | name   Rp 18rb name    Rp 22rb name  Rp 15rb|
||||| konter band ||     | ...            ...             ...          |
| KOPI / NON-KOPI  |     +--------------------------------------------+
| / MAKANAN lists  |
```
**Promo.** Six promos as signs. Batu ground. Yellow plates; "Promo Night Healing" is the night plate.
Each plate: pictogram, name (lead), detail (body), price chip under the name, "syarat berlaku" (small).
One note sits directly under the heading plate: "Syarat berlaku. Detail dan harga bisa berubah." (small).
```
Promo: phone             Promo: desktop
+------------------+     +--------------------------------------------+
|[Promo]           |     | [Promo]                                    |
|syarat berlaku    |     | Syarat berlaku. Detail dan harga bisa ...  |
|+=====+=========+ |     | +============+ +============+ +============+|
||picto|Beli 3   | |     | |picto       | |picto       | |picto       ||
||     |Gratis 1 | |     | |Beli 3      | |Promo Bestie| |Promo Favo- ||
||     |detail   | |     | |Gratis 1    | |Berdua      | |rite Bestie ||
|+=====+=========+ |     | +============+ +============+ +============+|
| ...6 plates,     |     | +============+ +############+ +============+|
| one column       |     | |Workspace   | |Night       | |Birthday    ||
|                  |     | |Rp 30rb     | |Healing     | |Treat       ||
+------------------+     +--------------------------------------------+
```
**Coffee · Work · Thrift.** The fascia's promise. Aspal ground; slab h2 in dinding (no plate);
three yellow warning diamonds (pictograms: chatting at a table / laptop / hanger), slab h3 word, body text.
```
CWT: phone               CWT: desktop
+------------------+     +--------------------------------------------+
|Coffee · Work ·   |     | Coffee · Work · Thrift (slab, head)        |
|Thrift (slab)     |     | Kerja siang, nongkrong malam, ... (lead)   |
|intro (lead)      |     |    <>             <>              <>       |
|<> Coffee  text   |     |  Coffee          Work           Thrift     |
|<> Work    text   |     |  text            text           text       |
|<> Thrift  text   |     |  (diamonds 140px, 3 equal columns)         |
+------------------+     +--------------------------------------------+
```
**Kata mereka.** Proof without quotes. Dinding ground. Three themes at lead size, 2px aspal rules between.
```
Kata: phone              Kata: desktop
+------------------+     +--------------------------------------------+
|[Kata mereka]     |     | [Kata mereka]     | Minumannya juara: ...  |
|4,9 di Google     |     | 4,9 di Google     |------------------------|
|dari 430 ulasan   |     | dari 430 ulasan   | Enak, harganya ramah.  |
|theme 1 / 2 / 3   |     |   (cols 1-5)      |------------------------|
|                  |     |                   | Staf santai, ... (6-12)|
+------------------+     +--------------------------------------------+
```
**Kunjungi kami.** Find it, know when. Batu ground. Blue direction sign holds the address; the
white hours plate lists 7 days, each with a 24-hour bar (aspal = open) and ticks 00/06/12/18/24 once.
```
Kunjungi: phone          Kunjungi: desktop
+------------------+     +--------------------------------------------+
|[Kunjungi kami]   |     | [Kunjungi kami]                            |
|Buka sampai jam 3 |     | Buka sampai jam 3 pagi. Weekend? ... (lead)|
|+##blue sign####+ |     | +##blue sign#########+ +------------------+|
||Jl. Jatinegara | |     | |Jl. Jatinegara Timur| |                  ||
||Timur II No.4b | |     | |II No.4b, Rawa Bunga| |   map iframe     ||
|+###############+ |     | +####################+ |   cols 6-12,     ||
|+-hours plate---+ |     | +-hours plate--------+ |   height = left  ||
||Senin  09-03   | |     | |Senin   09.00-03.00 | |   column         ||
||[    ========] | |     | |[      ===========] | |                  ||
||... Minggu 24j | |     | |... Minggu 24 jam   | |                  ||
|+---------------+ |     | +--------------------+ |                  ||
|[Petunjuk Arah]   |     | [Petunjuk Arah]        +------------------+|
|[ map 4:3 ]       |     +--------------------------------------------+
+------------------+
```
**Hubungi kami.** Close. Aspal ground. Struck end-of-zone plate: "AKHIR" label, yellow plate
"KAWASAN WAJIB NGOPI" with a 10px aspal diagonal bar; under it "Balik lagi besok, ya."
```
Hubungi: phone           Hubungi: desktop
+------------------+     +--------------------------------------------+
|[Hubungi kami]    |     | [Hubungi kami]              AKHIR          |
|0815-1124-3389    |     | 0815-1124-3389 (lead)  +=/=============+   |
|[WhatsApp]        |     | [WhatsApp] [Telepon]   | KAWASAN WAJIB |   |
|[Telepon][Arah]   |     | [Petunjuk Arah]        | NGOPI (struck)|   |
|Instagram menyusul|     | Instagram menyusul     +===============+   |
|  AKHIR           |     |   (cols 1-7)           Balik lagi besok, ya|
|+=/=struck sign=+ |     |------------------------------------------- |
|Balik lagi besok  |     | Indokopi · address (small)                 |
|footer address    |     +--------------------------------------------+
+------------------+
```

## 8. Motion
**Signature (hero, load, once).** `.sign-group` wraps both plates, `overflow: hidden`. Pre-dimmed
by CSS (`html.js` + no-preference: `.sign-dim` opacity 0.4, CSS fallback un-dims at 2.5 s). At
0.15 s a soft light ellipse (`.sign-beam`, 60% of the group wide, radial #FFFBE6 → transparent)
crosses left to right, `xPercent` -100 → 170, opacity 0 → 0.6 → 0, 1.1 s `power1.inOut`. At
0.45 s the dim overlay fades 0.4 → 0, 0.5 s `power2.out`. Total ≈ 1.25 s. Job: focus the eye on
the name and today's hours. Reduced motion or JS off: no dim, no beam, plate lit.
**Supporting.** Starter `<Reveal>` once per section (Menu, Promo, CWT, Kata mereka, Kunjungi,
Hubungi): 20px, 0.7 s, `power2.out`. Buttons: `::after` overlay opacity 150 ms; press translateY 1px.
Nothing else moves: not the products, pictograms, hours bars, map or lane marking.
Tokens: add `duration.beam 1.1`, `duration.undim 0.5`, `delay.beam 0.15`, `delay.undim 0.45`,
`ease.beam "power1.inOut"`; the rest are starter values.

## 9. What makes it this shop
- The hero is their own "Kawasan Wajib Ngopi" plate, made into the page's entrance sign with a
  supplemental plate stating today's hours, the way real Indonesian signs add "berlaku" times.
- Can glasses on wooden coasters standing on the brown corrugated counter ledge, as at the window.
- A 24-hour strip per day that shows the nonstop weekend, and an end-of-zone sign as the goodbye.

## 10. Avoid
- The coffee-site rut: cream ground + serif + latte-art photo + "Our Story". The night-café rut:
  black + neon glow. No glow edges, hard offset shadows or brutalist black boxes: plates are real
  sign geometry (rounded, inset border).
- Signs everywhere: only headings, the six promos, three diamonds, the address, the hours and the
  end sign are plates. Body copy, menu lists and praise are plain type.
- Yellow text on light grounds; a label or price larger than its heading; prices pinned to the far edge of a row.
- The banner's siren-style logo, customer photos, ashtrays/smoking, cables and motorbikes in the crop.
- Quoting reviews or naming reviewers; any rating other than 4,9 / 430.
- Letting the beam read as a generic button shimmer: it is wide, soft, crosses once, and never repeats on hover.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
