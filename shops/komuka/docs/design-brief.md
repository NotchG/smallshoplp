# Design brief: KOMUKA Cafe & Eatery

## 1. Concept
**Pintu depan.** The page is KOMUKA's own front: you arrive under the cream canvas arched awning
with the name on its valance, the door sign says whether it's open today, and the scroll walks you
from white-plaster daylight onto the teak tables and into a shutter-green evening, the way one
drink here turns into dinner.
Signature moment: on load, the wooden door sign in the hero settles into today's status
("BUKA · hari ini 11.00–22.00" or "TUTUP · buka lagi Rabu 11.00") with one damped swing, as if
someone just turned it.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts and copy; owner photos show the white facade, arched awning, dark shutters, teak terrace, banana-leaf plate; customer photos (reference only) show the awning's fanlight ribs, the door's hanging OPEN sign, arched doorway and green niche inside. |
| impeccable | Persuade mode. Worlds weighed: facade + awning (chosen), teak picnic table, ubin tegel tiles, waiter's order slip, banana-leaf plate, string-light terrace at night (the brief's literal picture, i.e. the rut), rantang family tiffin. Raises kept from the declined: the products sit on a teak table-top (from "teak table"); the page ends in evening green with lamp amber (from "night terrace"). Steered away from the cream + serif + terracotta default and from its banned fonts; colour committed at page scale; focal motion taken from the shop (the door sign), not a generic fade. Its launcher and concept-seed roll were not run (they write outside docs/ and need a live user); judgement applied from new-work, mode-persuade, animate, typeset, layout, colorize. |

## 3. Palette (6 named colours)
Strategy: full palette, each colour owns whole regions (not accents on white).
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kapur` (plaster) | #F4F3EF | Main ground; text on dark fields | jendela on kapur 13.4 ✓ |
| `kanopi` (awning canvas) | #E5D8B8 | Awning; Menu and Kata mereka fields | jendela on kanopi 10.5 ✓ |
| `jendela` (shutter green-black) | #1F2A24 | All text on light; Ruang and Hubungi fields; doorway; primary buttons on light | kapur on jendela 13.4 ✓ |
| `jati` (teak) | #8E4518 | Table band, door sign, prices, list numbers | jati on kapur 6.3 ✓, on kanopi 4.9 ✓, kapur on jati 6.3 ✓ |
| `daun` (leaf) | #3F6A3B | Plants, awning ribs, garnish in illustrations; never body text on kanopi | daun on kapur 5.7 ✓ (on kanopi 4.45: graphics only) |
| `lampu` (string-light amber) | #F2B441 | Bulbs; headings of spaces and buttons on dark fields only | lampu on jendela 8.0 ✓; never on kapur (1.7) |

Focus ring: 3px `jendela` on light grounds, 3px `lampu` on dark, 3px offset.
Illustration-only food colours (not tokens): broth #D9A55A, oxtail #6B3A22, carrot #E07B39,
potato #E9CF8E, lumpia #C98A3A, mango #E8962E, chai #C49A6C, espresso #5A3420.

## 4. Type
Gabarito (display, headings, numbers; 700–800) + Figtree (body, buttons; 400/500/600), both
`next/font/google`, subsets `latin`, `latin-ext` (Brûlée), `display: swap`. Sturdy geometric caps
echo the awning lettering; no serif.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 2.4rem + 4.2vw, 6rem)` (56 → 96px) | "KOMUKA" on the valance only; uppercase, tracking 0.06em, line height 0.9 (one word, always one line) |
| `--step-head` | `clamp(2rem, 1.45rem + 2.25vw, 3rem)` (32 → 48px) | h2 section headings, Gabarito 800, line height 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.3rem + 0.35vw, 1.625rem)` (22 → 26px) | leads, list items, menu categories, space names, paraphrases, sign word, phone number |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17 → 19px) | running text, menu items, plate labels, buttons |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` (13 → 14px) | banner, captions, "JAM BUKA" label, sign sub-line, review note |

Ratios at 390 / 1440: display/head 1.75 / 2.0; head/lead 1.44 / 1.85; lead/body 1.30 / 1.37;
body/small 1.31 / 1.36. All ≥ 1.25 ✓. Leading: head 1.1, lead 1.3, body 1.55, small 1.4.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at ≥768 / 40px at ≥1200 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** prices sit inline right after their category title ("Kopi & teh · mulai Rp 28rb"),
  plate labels 12px under their plate, captions 12px under their photo, today's hours on the sign.
  Nothing pinned to the far edge of a row.
- **Wide screens:** every section at 1440 is a deliberate split (hero 1fr 560px 1fr; 5/7; 7/5;
  4/8; 4/4/4; 6/6) or a full-bleed field. Wireframes below.
- **Lists:** the must-try list and spaces at `--step-lead`; menu items at `--step-body`.
- **Arches:** only real architecture. Portrait photo frames get a full semicircle top
  (`border-radius: 999px 999px 0 0` on a 3:4 box); landscape frames a segmental top
  (`border-top-left-radius: 50% 22%; border-top-right-radius: 50% 22%`). Buttons: 6px radius,
  48px tall. No arch dividers, no arch buttons.

## 6. Products on the page
Five products, four illustrated and one photographed:
1. **Nasi goreng plate** (fried rice, sesame-glazed braised meat, fried egg, crackers, pickles on banana leaf): owner photo `owner-2.jpg`, Menu andalan, segmental-arch frame, caption under it. Name label is a placeholder until the owner supplies it.
2. **Sop buntut**: flat top-down illustration, bowl with broth, oxtail pieces, carrot and potato.
3. **Lumpia**: flat top-down illustration, three golden rolls on an oval plate.
4. **Pudding mangga**: flat top-down illustration, round pudding topped with mango cubes, small plate.
5. **Dirty chai**: flat top-down illustration, cup on saucer, chai surface with a darker espresso swirl.

Items 2–5 sit on the teak table band in "Pertama kali ke sini?", at varied sizes like a shared
table (bowl largest, cup smallest), each labelled with its list number and name.
Illustration style: flat shapes, no outlines, no shadows, no faces or steam squiggles,
≤15 shapes each, plates in `kapur` with a `kanopi` rim, SVG components. Each is `role="img"` with
an Indonesian label ("Ilustrasi contoh: sop buntut") and `data-mockup` (placeholder for a real photo).
`photo-*.jpg` never appear.

## 7. Sections
**Hero.** Purpose: recognition, today's status, directions. Awning dome (SVG, kanopi with daun
rib frame and 3 ribs), valance band (HTML, kanopi) carrying h1, doorway (jendela, teak jambs)
with the hanging sign, two leaf clusters in plaster pots at the doorway base, one static string
of 11 bulbs across the top (7 on phone). On phone the sign shows today's hours and both buttons
end above 700px.
```
Hero: phone (390)       Hero: desktop (1440)
+------------------+   +--------------------------------------------------------------+
| draf banner      |   | draf banner                                                  |
| o-o-o-o-o-o-o    |   | KOMUKA                         Menu  Ruang  Lokasi  Kontak  |
|    .-'''''-.     |   | o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o  |
|   /  \ | /  \    |   |                     .-''''''''''''-.                         |
|  /____\|/____\   |   |                    /   \    |    /   \                        |
| [ K O M U K A  ] |   | Cafe & Eatery ·  [     K O M U K A     ]  Jl. Menteng Timur  |
|  | .-[BUKA]-. |  |   | Cakung           |     .--[ BUKA ]--.    |  No. 9–10 Blok F4  |
|  | hari ini   |  |   | warm line,       |     | hari ini     |    |  JAM BUKA          |
| Cafe & Eatery ·  |   | 2–3 lines        |     | 11.00–22.00  |    |  Rab–Sab 11–22     |
| Cakung           |   | [Petunjuk Arah]  |     '--------------'    |  Min 09–22         |
| warm line        |   | [WhatsApp]       |   (doorway, jendela)   |  Sen–Sel TUTUP     |
| [Petunjuk][WA]   |   | ~~plant~~~~~~~~~~|________________________|~~~~~~~~~plant~~~~ |
| alamat + jam ↓   |   +--------------------------------------------------------------+
+------------------+   (768–1199: awning centred, then two columns below)
```
**Pertama kali ke sini?** Purpose: first-timer guide; products. Kapur, then a full-bleed jati band.
```
+------------------+   +--------------------------------------------------------------+
| Pertama kali     |   | Pertama kali ke sini?      | 1 Komuka chips    5 Dirty chai   |
| ke sini?         |   | Biar kami bantu pilih.     | 2 Lumpia          6 V60, biji    |
| Biar kami bantu  |   | Tujuh yang wajib dicoba…   | 3 Kwetiau goreng    bergantian   |
| pilih.           |   |          (5/12)            | 4 Sop buntut      7 Pudding m.   |
| 1 … 7 (one col)  |   |                            | Habis itu, balik lagi… (7/12)    |
| Habis itu…       |   |==============================================================|
|==================|   | jati band  (  sop  )   ( lumpia )   (pudding)    (chai)      |
| (sop)   (lumpia) |   |          4 Sop buntut   2 Lumpia  7 Pudding mangga 5 Dirty chai |
| 4 Sop…  2 Lumpia |   |==============================================================|
| (pud)   (chai)   |   +--------------------------------------------------------------+
| 7 Pud…  5 Dirty… |
+------------------+
```
**Menu andalan.** Purpose: breadth beyond coffee. Kanopi field.
```
+------------------+   +--------------------------------------------------------------+
| Menu andalan     |   | Menu andalan                                                 |
| lead             |   | Bukan cuma kopi: …                                           |
|  .-owner-2-.     |   |  .-''''''''''''''''-.  | Kopi & teh · mulai Rp 28rb          |
| (nasi goreng)    |   | |  owner-2 photo     | |  Dirty chai · V60 … · Caramel …     |
| caption          |   | |  segmental arch    | | Makanan berat · mulai Rp 45rb       |
| Kopi & teh · Rp  |   | '--------------------' |  Spaghetti Bolognese Brûlée …       |
| Makanan berat …  |   |  caption      (5/12)   | Camilan & manis · mulai Rp 25rb     |
| Camilan & manis  |   |                        |  … (7/12, items in 2 columns)       |
| Cocok dipadukan… |   |                        | Cocok dipadukan, kata tamu kami: …  |
+------------------+   +--------------------------------------------------------------+
```
**Ruang di KOMUKA.** Purpose: spaces; VIP bookings. Jendela field; space names in lampu.
```
+------------------+   +--------------------------------------------------------------+
| .-owner-1 ----.  |   |  .-''''''''''''''''''''''''''''''-.   Ruang di KOMUKA        |
| (teras, 4:3)     |   | |  owner-1 terrace, 4:3            |   Paling seru datang     |
| Ruang di KOMUKA  |   | |  segmental arch      (7/12)      |   ramai-ramai.           |
| Paling seru …    |   | |                                  |   Teras depan  …         |
| Teras depan …    |   | |                                  |   Di dalam  …            |
| Di dalam …       |   | '----------------------------------'   Ruang VIP  …   (5/12) |
| Ruang VIP …      |   |                                        [Pesan ruang VIP]     |
| [Pesan ruang VIP]|   +--------------------------------------------------------------+
+------------------+
```
**Kata mereka.** Purpose: proof, paraphrased. Kanopi field; no quote marks, stars or names.
```
+------------------+   +--------------------------------------------------------------+
| Kata mereka      |   | Kata mereka            | Suasananya hangat… | Stafnya ramah… |
| Diringkas dari   |   | Diringkas dari ulasan  |--------------------+----------------|
| ulasan · 4,9 …   |   | Google · 4,9 dari      | Bukan cuma kopi…   | Makanan dan…   |
| — paraphrase ×5  |   | 2.441 ulasan  (4/12)   | Kalau butuh ruang sendiri… (8/12)   |
+------------------+   +--------------------------------------------------------------+
```
**Kunjungi kami** (`id="lokasi"`). Purpose: get there; closed days obvious. Kapur field.
```
+------------------+   +--------------------------------------------------------------+
| Kunjungi kami    |   | Kunjungi kami      |    .-'''''-.       | +----------------+ |
| Gampang dicari…  |   | Gampang dicari…    |   / owner-3 \      | |                | |
| alamat           |   | alamat             |  |  facade   |     | |   MAP EMBED    | |
| Senin–Selasa     |   | Senin–Selasa TUTUP |  |  3:4, full|     | |   480px tall   | |
|   TUTUP          |   | Rabu–Sabtu 11–22   |  |  arch     |     | |                | |
| Rabu–Sabtu …     |   | Minggu 09–22       |  '-----------'     | +----------------+ |
| Minggu …         |   | [Petunjuk Arah]    |  Tampak depan      |                    |
| [Petunjuk Arah]  |   |      (4/12)        |      (4/12)        |      (4/12)        |
| [ map 4:3 ]      |   +--------------------------------------------------------------+
| (owner-3 photo)  |
+------------------+
```
**Hubungi kami + footer.** Purpose: close with contact. Jendela field, string of bulbs on top.
```
+------------------+   +--------------------------------------------------------------+
| o-o-o-o-o-o-o    |   | o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o--o  |
| Hubungi kami     |   | Hubungi kami                  | 0811-9117-845                |
| lead [MOCKUP]    |   | Ruang tamunya warga… [MOCKUP] | [Telepon] [WhatsApp]         |
| Buka s/d 22.00   |   | Buka sampai 22.00.   (6/12)   | [Petunjuk Arah]   (6/12)     |
| 0811-9117-845    |   |--------------------------------------------------------------|
| [Telepon][WA]    |   | KOMUKA Cafe & Eatery · alamat · jam (one block, left)        |
| [Petunjuk Arah]  |   +--------------------------------------------------------------+
| footer           |
+------------------+
```

## 8. Motion
**Signature: the door sign.** After hydration the sign's text is set to today's status
(Asia/Jakarta time), then the sign group (hook, cords, board) rotates around the hook:
0° → −6° → 4° → −2° → 1° → 0°, segment durations 0.22 / 0.36 / 0.32 / 0.28 / 0.22 s
(1.4 s total), first segment `sine.out`, the rest `sine.inOut`, 0.15 s delay. Transform only;
the sign is visible from the first paint at 0°. Before JS (and with JS off) the sign reads
"BUKA / Rabu–Minggu". Reduced motion: text set, no rotation.
Supporting: one `<Reveal>` per section body for sections 2–7 (20px, 0.7 s, `power2.out`, once).
Hero has no reveal. Buttons: 150 ms overlay-opacity hover, `scale(0.98)` press, CSS only.
String lights never animate. Motion tokens: add `duration.swing = 1.4` and
`swing = { angles: [-6, 4, -2, 1, 0], durations: [0.22, 0.36, 0.32, 0.28, 0.22] }` to `lib/motion.ts`;
the rest stay starter defaults.

## 9. What makes it this shop
1. The hero is KOMUKA's own entrance, awning, valance lettering and the door sign, and that sign
   tells the truth about Monday and Tuesday.
2. The first section after the hero is the staff's line ("Pertama kali ke sini? Biar kami bantu
   pilih.") with the seven dishes a guest swears by, laid out on a teak picnic table.
3. The page darkens from plaster white to shutter green and lamp amber, ending at "Buka sampai
   22.00": one drink turning into dinner.

## 10. Avoid
- Category defaults: latte-art hero, coffee-bean icons, kraft paper, script lettering,
  cream + serif + terracotta.
- Boho arch trend: arches only where KOMUKA has them (awning, photo frames ≤3). No rainbow
  arches, suns or arch-shaped buttons.
- A rising-sun reading of the awning: max 3 ribs, no disc at the hub, ribs in `daun`, never red or teak.
- Picture-book illustration: no outlines, faces, hearts or shadows; flat and geometric.
- Teak sprinkled everywhere: `jati` owns the table band, sign, prices and numbers; actions are
  `jendela` (light grounds) or `lampu` (dark grounds).
- Faking the Δ logo; English leaking into banner, buttons, alt text or dates; review quote marks,
  stars or names; twinkling lights, particles, or a second "moment" (no headline text effects).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists at lead, labels at body/small, sign word at lead)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices inline, labels 12px under)
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (5: one owner photo, four illustrations)
- [x] Within motion-rules.md (one moment, transform-only, section reveals, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
