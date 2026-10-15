# Design brief: Pabbo Unifirst

## 1. Concept
**"Plafon garis"**: the page is the hall itself, its black ceiling ruled with white line frames
over rattan, cream cushions and burgundy booths, so a visitor sees Pabbo's own room, not a
generic café or nightclub.
Signature moment: on load, the hero's nested ceiling frames switch on one by one, outermost to
innermost, closing in on the name, like the hall's line lights coming up before a set.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Black ceiling with white line frames joined by corner diagonals (photo-1) → hero geometry; facade sign "PABBO UNIFIRST" in wide heavy caps (photo-3) → display type; red round P on cups and sign (photo-2, 3) → the only accent; burgundy booths, rattan, cream cushions → section grounds; the real dishes (photo-2) → the 4 lead illustrations; bossa nova slide on the screen (photo-1) → the "layar" card. Customer photos are reference only, never on the site. |
| impeccable | Persuade mode. Seven worlds weighed (ceiling lines, window constellations, cup and bowl print, cafe gig poster, now-playing screen, kasir receipt, 24-hour dial); chose the ceiling because it is the venue's own graphic and the brief pins it. Rut refused both ways: cream + latte photo + serif, and purple neon club with glow. "Lights go down" literal reading spent once, on the split siang/malam heading. Full-palette colour committed at page scale; one face with a point of view. The `impeccable context` / `concept-seed` launcher was not run: it downloads a binary outside `docs/`. |

## 3. Palette (6 named colours)
Strategy: full palette, each colour owns whole regions. Never glow, blur or gradient the lines.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plafon` | #121014 | Ceiling black: hero, malam panel, camilan band, Kata mereka, Hubungi | garis on plafon 16.8:1 |
| `garis` | #F4F1EA | Line white: ceiling frames (2px), text on dark | — |
| `bantal` | #EFE6D3 | Cushion cream: Menu, Kunjungi grounds | plafon on bantal 15.3:1 |
| `rotan` | #D4A66A | Rattan: siang panel ground, table disks under dishes, labels on dark | plafon on rotan 8.5:1; rotan on plafon 8.5:1; rotan on bilik 5.0:1 |
| `bilik` | #6E1F2B | Booth burgundy: Musik & acara ground | garis on bilik 9.8:1 |
| `pabbo` | #C42834 | P-logo red: primary button, P badge, "on" dot, prices on cream | garis on pabbo 5.0:1; pabbo on bantal 4.6:1; on plafon 3.3:1 (graphics only, **never text on plafon**) |

Illustration-only tints (inside food SVGs, never UI): egg #F2B43C, fried rice #D98F2B, kopi susu
#9A6A45, matcha #9DBA6A, lettuce #6E9B45, minced meat #6A4630.

## 4. Type
One family: **Saira** (variable, `wght` + `wdth` axes) via `next/font/google`, `axes: ['wdth']`,
subset latin, `display: swap`. Its squared-round wide caps match the facade sign; the width axis
does the hierarchy. Set width with `font-variation-settings: "wdth" N`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.75rem, 1.5rem + 5.5vw, 7.5rem)` · 800, wdth 125, uppercase, lh 1.05, tracking -0.01em | hero name only (2 lines: PABBO / UNIFIRST) |
| `--step-head` | `clamp(1.875rem, 1.45rem + 1.7vw, 3rem)` · 700, wdth 112, lh 1.1 | h2 section headings |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.55vw, 1.75rem)` · 600, wdth 100, lh 1.25 | descriptor, h3, dish names, review paraphrases, phone number |
| `--step-body` | `1.125rem` · 400, wdth 100, lh 1.55 (1.6 on dark, +0.01em) | running text, lists, buttons |
| `--step-small` | `0.875rem` · 500, wdth 100, lh 1.45; labels uppercase +0.08em | badge, category labels and prices, captions, nav |

Ratios hold at every width: at 390 → 45.5 / 30 / 23 / 18 / 14; at 1440 → 103 / 48 / 28 / 18 / 14.
"UNIFIRST" must sit on one line in its column at every width (verify 390, 768, 1024, 1440). If it
overflows at 390, drop display to wdth 110 below 480px; never shrink below 2.75rem.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.5rem + 3vw, 2.5rem)` → 20px / 40px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.5rem + 5vw, 7.5rem)` → 64px / 112px |

- **Proximity:** category price sits on the same line as its category label, 8px after it; dish
  description directly under its name; rating line directly under "Kata mereka".
- **Wide screens:** every section is two-column, a 4-up grid, or full-bleed halves at 1440 (see wireframes).
- **Lists:** dish names at `--step-lead`, everything else in lists at `--step-body`.
- **Line language:** frames are 2px `garis`, square corners, joined by corner diagonals. Used in
  exactly three places: hero (animated), malam panel (static corner fragment), Hubungi (static close).

## 6. Products on the page
No owner photos exist, so 7 flat SVG illustrations, drawn for this shop from photo-2:
- **Es Kopi Susu Pabbo**: clear cup side-on, kopi susu body, cream cap, red round P printed on it.
- **Matcha Latte**: same cup, green body, red P.
- **Nasi Goreng Pabbo**: top-down white plate, rice mound, sunny fried egg, four round kerupuk, tomato slice, cucumber slices, lettuce.
- **Rice Bowl Daging Cincang**: top-down paper bowl with a thin line-doodle rim (as on the real bowl), minced meat, egg, lettuce edge.
- **Camilan malam** (smaller, 96–120px): Indomie goreng telur, roti bakar (stacked toast, no filling claim), kentang goreng in a paper boat.

The four lead items sit on a `rotan` round table disk (top-down plates on the disk; cups standing
on its lower edge). Flat fills, no outlines, no gradients, ≤30 shapes each, `role="img"` with an
Indonesian `aria-label` ("Ilustrasi nasi goreng dengan telur ceplok dan kerupuk").

## 7. Sections
Grounds in order: plafon → rotan | plafon → bantal (+ plafon band) → bilik → plafon → bantal → plafon.

**Hero** (plafon): recognition and directions in the first screen. Frames: phone 3 frames, 10px x /
16px y steps; ≥768px 4 frames, 28px x / 24px y steps; diagonals from the frame box corners to the
inner frame corners. Content in the innermost frame, capped at `--container`. Name and actions
stack below 1200px; two columns (name cols 1–8, rest cols 9–12) from 1200px. Height
`min(100svh, 860px)`, min 600px.
```
Hero: phone (390)                Hero: desktop (1440)
+------------------------+       +------------------------------------------------------+
| DRAF MOCKUP banner     |       | DRAF MOCKUP banner                                   |
| (P)               Menu |       | (P) Pabbo Unifirst        Menu  Musik & acara  Lokasi |
|+----------------------+|       |+----------------------------------------------------+|
||\+------------------+/||       ||\ +----------------------------------------------+ /||
|| |+----------------+| ||       ||  |\ +--------------------------------------+ /|  ||
|| ||• BUKA 24 JAM   || ||       ||  |  | • BUKA 24 JAM · SETIAP HARI (small)  |  |  ||
|| ||PABBO           || ||       ||  |  | PABBO          | Coffee & Social     |  |  ||
|| ||UNIFIRST        || ||       ||  |  | UNIFIRST       | Space (lead)        |  |  ||
|| ||Coffee & Social || ||       ||  |  | (display,      | Unite your vibes.   |  |  ||
|| ||Space (lead)    || ||       ||  |  |  cols 1-8)     | Food Garden, Cakung |  |  ||
|| ||Unite your vibes|| ||       ||  |  |                | [Petunjuk] [Telepon]|  |  ||
|| |+----------------+| ||       ||  |/ +--------------------------------------+ \|  ||
||/+------------------+\||       ||/ +----------------------------------------------+ \||
|[Petunjuk Arah][Telepon]|       |+----------------------------------------------------+|
+------------------------+       +------------------------------------------------------+
```
Phone: "Food Garden, Cakung" (small) follows the tagline; buttons side by side (each ≥48px tall) inside the outer frame, above the fold on 390×844.

**Siang ngopi, malam nongkrong**: one place, two moods. The h2 is split: "Siang ngopi," on the
rotan half, "malam nongkrong." on the plafon half (visible halves `aria-hidden`, full h2 sr-only).
Rotan half carries a faint rattan weave (repeating diagonal lines, `plafon` at 6%); plafon half a
static corner fragment of the ceiling frames.
```
Day/Night: phone (390)           Day/Night: desktop (1440), full-bleed halves
+------------------------+       +---------------------------+--------------------------+
| ROTAN                  |       | ROTAN (weave)             | PLAFON      /------------|
| Siang ngopi,  (head)   |       | Siang ngopi,   (head)     | malam nongkrong. (head)  |
| Es kopi susu, nasi     |       | Es kopi susu, nasi goreng,| Lampu panggung menyala,  |
| goreng... (body)       |       | rice bowl... (body, 44ch) | musik... (body, 44ch)    |
| KURSI ROTAN · MEJA KAYU|       | KURSI ROTAN · MEJA KAYU   | PANGGUNG · LAYAR · DISCO |
+------------------------+       | (small)                   | BALL (small)             |
| PLAFON        /------- |       |                           |            \-------------|
| malam nongkrong.       |       +---------------------------+--------------------------+
| Lampu panggung...      |       text starts at container edges; each half min-height 420px
| PANGGUNG · LAYAR ·     |
+------------------------+
```

**Menu andalan** (bantal): show real dishes. Four illustrated lead items, then a plafon band of
night snacks (its label and price in `rotan`; red is never text on plafon).
```
Menu: phone (390)                Menu: desktop (1440)
+------------------------+       +------------------------------------------------------+
| Menu andalan (head)    |       | Menu andalan (head)          Yang paling sering ada  |
| intro (body)           |       |                              di meja. (body)         |
| Nama & harga contoh    |       |                              Nama & harga contoh (sm)|
| KOPI & MINUMAN kopi    |       | KOPI & MINUMAN  kopi mulai   | MAKANAN  nasi mulai   |
| mulai Rp 25rb (small)  |       | Rp 25rb (small)              | Rp 35rb (small)       |
| (ill) Es Kopi Susu     |       | ( ill )  ( ill )             | ( ill )  ( ill )      |
| 112px Pabbo (lead)     |       | Es Kopi  Matcha              | Nasi     Rice Bowl    |
|       desc (body)      |       | Susu     Latte    (lead)     | Goreng   Daging       |
| (ill) Matcha Latte     |       | desc     desc     (body)     | desc     desc         |
| MAKANAN nasi mulai ... |       | 4 equal columns, 240px disks |                       |
| (ill) Nasi Goreng ...  |       | +--------------------------------------------------+ |
| (ill) Rice Bowl ...    |       | |PLAFON CAMILAN MALAM | (ill) Indomie (ill) Roti  | |
| +--------------------+ |       | |mulai Rp 20rb        | goreng telur  bakar  (ill)| |
| |CAMILAN MALAM  20rb | |       | | (cols 1-3)          | Kentang goreng (cols 4-12)| |
| |(ill) Indomie...    | |       | +--------------------------------------------------+ |
| |(ill) Roti bakar    | |       +------------------------------------------------------+
| |(ill) Kentang goreng| |
| +--------------------+ |
+------------------------+
```

**Musik & acara** (bilik): sell the night and the hall. Right column is the "layar": a 16:9
plafon screen with a 2px garis frame, two flat stage-light wedges (garis at 10%) from the top
corners, and "BOSSA NOVA" at `--step-lead`, wdth 125, bottom-left, like the slide in the photo.
Bottom edge: booth channel ribs (horizontal 1px lines, plafon at 20%, 12px apart, 48px tall band).
```
Musik: phone (390)               Musik: desktop (1440)
+------------------------+       +------------------------------------------------------+
| Musik & acara (head)   |       | Musik & acara (head)      | +----------------------+ |
| Di ujung hall ada      |       | Di ujung hall ada         | |\  stage-light wedge /| |
| panggung... (body)     |       | panggung... (body)        | | MALAM MUSIK · AKUSTIK| |
| +--------------------+ |       | - Panggung & speaker      | | & BOSSA NOVA (small) | |
| | layar 16:9         | |       | - Layar proyektor         | |                      | |
| | BOSSA NOVA (lead)  | |       | - Lampu panggung & disco  | | BOSSA NOVA (lead)    | |
| +--------------------+ |       | - Hall untuk acara [MOCK] | +----------------------+ |
| - Panggung & speaker   |       | [Tanya jadwal & booking]  |   (cols 6-12)          |
| - Layar proyektor ...  |       |  (cols 1-5)  [Telepon]    |                        |
| [Tanya jadwal&booking] |       |=========== booth ribs ================================|
|===== booth ribs =======|       +------------------------------------------------------+
+------------------------+
```

**Kata mereka** (plafon): honest proof. Theme label (small, rotan, uppercase) over each
paraphrase (lead, garis). 1px garis hairlines between cells. No names, no stars, no quote marks.
```
Kata mereka: phone (390)         Kata mereka: desktop (1440)
+------------------------+       +------------------------------------------------------+
| Kata mereka (head)     |       | Kata mereka (head)  | MUSIK & SUASANA | KOPI & MAKAN |
| 4,6 di Google · 328    |       | 4,6 di Google ·     | Musik dan       | Kopinya enak |
| ulasan (small)         |       | 328 ulasan (small)  | suasananya...   | dan... (lead)|
| MUSIK & SUASANA        |       |                     |-----------------+--------------|
| paraphrase (lead)      |       | (cols 1-4)          | PELAYANAN       | LAYAK MAMPIR |
| ---------------------- |       |                     | Pelayanannya... | Dua pengunj..|
| KOPI & MAKANAN ...     |       |                     | (cols 5-12, 2x2 grid)          |
| ---------------------- |       +------------------------------------------------------+
| PELAYANAN ...  / ...   |
+------------------------+
```

**Kunjungi kami** (bantal): get them there. Map iframe in a 2px plafon frame, lazy-loaded.
```
Kunjungi: phone (390)            Kunjungi: desktop (1440)
+------------------------+       +------------------------------------------------------+
| Kunjungi kami (head)   |       | Kunjungi kami (head)    | +------------------------+ |
| di Food Garden JGC     |       | di Food Garden JGC      | |                        | |
| (lead) [MOCKUP]        |       | (lead) [MOCKUP]         | |   Google Maps embed    | |
| Food Garden, RT.11/RW.8|       | Alamat (body)           | |   16:10, 2px frame     | |
| Cakung Timur... (body) |       | SENIN–MINGGU · 24 JAM   | |                        | |
| SENIN–MINGGU · 24 JAM  |       | HARGA: MENENGAH (small) | +------------------------+ |
| [Petunjuk Arah]        |       | [Petunjuk Arah]         |   (cols 6-12)              |
| +--------------------+ |       |  (cols 1-5)             |                            |
| | map 4:3            | |       +------------------------------------------------------+
| +--------------------+ |
+------------------------+
```

**Hubungi kami** (plafon): close with the actions, framed by two static ceiling frames (the page ends as it began).
```
Hubungi: phone (390)             Hubungi: desktop (1440)
+------------------------+       +------------------------------------------------------+
|+----------------------+|       |+----------------------------------------------------+|
||+--------------------+||       ||+--------------------------------------------------+||
||| Hubungi kami (head)|||       ||| Hubungi kami (head)       [Telepon] [WhatsApp]   |||
||| 0822-9921-7829     |||       ||| 0822-9921-7829 (lead)     [Petunjuk Arah]        |||
||| [Telepon]          |||       ||| (cols 1-6)                (cols 7-12, left-aligned)|||
||| [WhatsApp]         |||       ||+--------------------------------------------------+||
||| [Petunjuk Arah]    |||       |+----------------------------------------------------+|
||+--------------------+||       | (P) Pabbo Unifirst · Coffee & Social Space   Data dari|
|+----------------------+|       | Google Maps · Draf mockup (small)                    |
| footer (small)         |       +------------------------------------------------------+
+------------------------+
```

## 8. Motion
**Signature (hero, load):** each ceiling frame's opacity 0 → 1 over 180ms, outermost first,
110ms apart, diagonals with frame 0; then the red dot by "BUKA 24 JAM" switches on (opacity, 200ms).
Starts 150ms after mount, ends by ~0.9s. Ease `cubic-bezier(0.16, 1, 0.3, 1)`. No flicker, no
glow, no stroke drawing. Hero text is never hidden: visible at first paint. Lines are hidden only
under `html.js` without reduced motion, with a CSS failsafe that turns them on at 1.5s.
Reduced motion / JS off: all frames and the dot on, no motion.
**Supporting:** each section below the hero fades up once, 20px, 0.6s, ease-out (whole section,
no per-card stagger). Buttons: overlay opacity 160ms on hover, scale 0.98 for 120ms on press.
Motion tokens for `lib/motion.ts`: `ease: "expo.out"` (≈ the bezier above), `reveal: { y: 20,
duration: 0.6 }`, `frameOn: { duration: 0.18, stagger: 0.11, delay: 0.15 }`.

## 9. What makes it this shop
1. The hero is Pabbo's ceiling: black with white line frames joined at the corners, lighting up toward the name.
2. The name is set wide, heavy and uppercase like the "PABBO UNIFIRST" facade sign, next to the red round P.
3. "Siang ngopi, / malam nongkrong." split across a rattan half and a ceiling half, and a "layar" card
   that nods to the bossa nova slide on their projection screen, on booth burgundy.

## 10. Avoid
- Neon glow, bloom, purple or blue gradients, flicker, disco sparkles, particles: the lines are flat white tape, not neon signs.
- The coffee-shop default: latte-art hero, bean icons, brown-cream serif. No stock photos, never the customer photos.
- Using the line motif everywhere: only hero, malam panel and Hubungi.
- Red text on black (fails contrast); red on more than buttons, badge, dot and prices.
- Per-dish prices or new dishes: only the brief's category "mulai" prices and named items.
- English copy beyond the shop's own names; star rows, quote marks or reviewer names in Kata mereka.
- Saira wide for body text: wdth 125 is for the name only.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.28 body/lead; "BOSSA NOVA" and dish names at lead, under head)
- [x] Max content width set; no detail pinned far from what it describes (prices beside category labels, descriptions under names)
- [x] Every section has a desktop wireframe that uses the width on purpose (halves, 4-up, 5/7, 4/8, framed close)
- [x] At least 3 products shown (4 illustrated lead items + 3 illustrated snacks)
- [x] Within motion-rules.md (one signature, opacity/transform only, section-level reveals, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages plus required wireframes)
