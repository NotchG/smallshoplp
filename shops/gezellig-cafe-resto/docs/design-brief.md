# Design brief: Gezellig Cafe & Resto

## 1. Concept
**"Lampu sudah menyala" (the lamps are on).** The page is Gezellig's own front wall: white plaster,
black steel-framed windows, and a lamp-lit Dutch room glowing behind the glass, because that facade
(photo-1) and the old-house interior are what every review and photo comes back to.
Signature moment: on load, the hero's steel window goes from dark night glass to a warm interior, its
chandelier's tulip-glass shades lighting up one after another, while the name, hours and
directions are already readable on the wall beside it.

Direction notes (impeccable, Persuade mode). THESIS: the house is the offer; the page refuses the
standard cafe page (photo hero, cream ground, a grid of menu cards). OWN-WORLD: plaster white,
steel black lines with square corners, deep house green, lamplight amber, one Delft-blue object.
STORY: visitors see a lamp-lit Dutch house on Jl. Pemuda, learn that Dutch and Nusantara dishes
share the menu, then tap directions or WhatsApp. FORM: steel-window facade, first of the 7
candidates; seed: none (unavailable).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facade (white plaster, black steel grid windows, amber interior), green walls, brass chandelier with tulip shades, ribbed white plates, "GEZELLIG" coasters, a reserved card on the table, Dutch + Nusantara dishes, the indoor/outdoor and parking facts, Bahasa Indonesia, no owner photos |
| impeccable | Persuade mode, new-work flow: named the rut (cream + serif + terracotta cafe page; Delft-tile/windmill costume), ranked 7 candidates from the guests' world (steel-window facade **chosen**; rijsttafel menu card **donated** its typographic discipline; Delft tiles, the literal reading, reduced to one blue card; photo album, brown cafe, Dutch still life, tegel floors declined). Full-palette colour with green owning whole sections; faces from Dutch type history, none from its over-used list; one authored focal motion. `concept-seed` needs PRODUCT.md, which is outside this planner's write boundary, so the roll was skipped |
| motion-rules.md | One signature moment, section-only reveals, opacity/transform only, reduced motion = none |
| site-starter | `--step-*`, `--container`, `--gutter`, `--section-y` variables; `.t-*`, `.section`, `<Container>`, `Reveal` |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kapur` (plaster) | `#F2F1EC` | Page ground, text on green/steel | Besi on Kapur 15.4:1 |
| `besi` (steel) | `#1A1A17` | Text, window frames, mullions, primary buttons, footer ground. Muted text = `besi-soft #55554E` | Besi-soft on Kapur 6.6:1 |
| `hijau` (house green) | `#23392E` | Owns whole sections: Suasana, Kunjungi kami; the wall colour inside the window | Kapur on Hijau 10.9:1 |
| `lampu` (lamplight) | `#E9A94B` | Glow inside the window; labels, primary buttons and focus ring **on dark only**, never text on Kapur | Lampu on Hijau 6.0:1; on Besi 8.5:1; Besi on Lampu 8.5:1 |
| `delft` (cobalt) | `#1F3F8F` | Dutch words in italic, text links on Kapur, the one "Gereserveerd" card, focus ring on light | Delft on Kapur 8.6:1; Kapur on Delft 8.6:1; never on Hijau (1.3:1) |
| `tulp` (tulip red) | `#B3262E` | Tulip mark and the tulips in illustrations only, never body text | Tulp on Kapur 5.7:1 |

Illustrations may use tints and mixes of these six only (e.g. teak wood = `color-mix(in oklch, lampu 55%, besi)`). No gradients except the authored halo around each lamp shade. No pure white or black.

## 4. Type
Castoro (400 + italic; John Hudson's synthesis of 16th–18th-century Dutch types) for display,
headings, dish names and Dutch words. Hanken Grotesk (variable, 400–600) for body, labels,
prices and buttons. Both via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 1.6rem + 7.4vw, 8.5rem)` (56px at 390, 132px at 1440) | hero name only, "GEZELLIG" in Castoro caps, tracking 0.04em, line-height 0.95 (one word, always one line: ~5.1em wide) |
| `--step-head` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (32.6px to 52px) | h2 section headings, Castoro, line-height 1.08 |
| `--step-lead` | `clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)` (20.3px to 24px) | statements, hero tagline, dish names (h4), zone and theme titles, "Gereserveerd" |
| `--step-body` | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` (16px to 18px) | running text, menu list lines, prices, buttons, line-height 1.6 |
| `--step-small` | `0.8rem` (12.8px) | caps labels (tracking 0.08em, weight 600), captions, "ilustrasi" notes |

Ratios checked at 320/390/768/1440: display/head ≥ 1.6, head/lead ≥ 1.6, lead/body ≥ 1.25, body/small ≥ 1.25.
Menu group labels ("Dari Belanda") are h3 but set as `.t-small` caps labels on purpose: they label, the dish names lead.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- 12-column grid inside the container on desktop, gap 24px; single column on phone (menu dishes 2-up on phone).
- Hero top padding 24px phone / 48px desktop (not the full `--section-y`), so name, window, hours and both buttons fit the first screen at 390×844 and 1440×900.
- The tulip mark (✿ in wireframes) is a small SVG tulip in Tulp, 16px, used as the theme bullet and beside menu group labels.
- Corners are square everywhere (steel). Lines: window frame 3px Besi, mullions and dividers 2px.
- Steel lines appear in exactly four places: the hero window, the menu's centre mullion, the Suasana zone grid, and the map frame. Nowhere else.
- **Proximity:** prices sit inline after the dish name (12px gap) or on the line directly under it. No right-aligned price columns, no dotted leaders.
- **Wide screens are designed, not stretched:** every section below uses a two-column split or grid at 1440 (see wireframes).
- **Lists:** dish names `--step-lead`, list lines `--step-body`. Nothing in a list is larger than its h2.

## 6. Products on the page
No owner photos, so four **flat SVG illustrations, seen from above like guests' table photos**, each on
the shop's ribbed white porcelain (a Kapur disc with a ring of short radial strokes at the rim):
1. **Gezellig Kofta Joppie**: dark-brown beef patty under glossy sauce, a dome of rice with a parsley sprig, lettuce and red-cabbage salad, pickles, onion rings.
2. **Uitsmijter**: two slices of buttered bread, folded smoked beef, a fried egg on top (Lampu yolk), champignon slices, a few greens.
3. **Garang Asem**: a bowl lined with banana leaf, golden broth, chicken pieces, tomato slices, green and red chillies.
4. **Pisang Goreng**: four golden fried banana pieces on a small plate.

Each one is about 220px across on desktop and 150px on phone, with the name, price and one-line description directly under it.
One caption under the menu: "Ilustrasi. Foto hidangan asli menyusul dari Gezellig." Illustrations
carry `data-mockup` (they stand in for owner photos). Four more dishes and three drinks are named in text rows.

## 7. Sections
Hero: the name is lettered on the wall above the window. Text never sits on the glass.
```
Hero: phone (390)            Hero: desktop (1440)
+--------------------+       +----------------------------------------------------+
| draft banner       |       | draft banner                                       |
| JL. PEMUDA 74 ·    |       | JL. PEMUDA 74 · PULO GADUNG, JAKARTA TIMUR (small)  |
| PULO GADUNG        |       | GEZELLIG                    (display, cols 1-8)    |
| GEZELLIG  (56px)   |       | Cafe & Resto  (lead, italic)                       |
| Cafe & Resto       |       | +---------+---------+---------+                    |
| +-----+-----+----+ |       | |  green  | chande- |  green  |  Hidangan Belanda  |
| |     | *** |    | |       | |  wall   | lier ***|  frame  |  & Nusantara dalam |
| +-----+-----+----+ |       | +---------+---------+---------+  suasana rumah tua |
| | art |tulp |tabl| |       | | painting| tulips  | table   |  yang hangat (lead)|
| +-----+-----+----+ |       | +---------+---------+---------+  o Buka hari ini   |
| (window 4:3)       |       | ,,,,,,, planting strip ,,,,,,,   09.00–23.00       |
| Hidangan Belanda & |       |  window cols 1-7, 16:10         [Petunjuk Arah]    |
| Nusantara ... lead |       |                                 [WhatsApp]         |
| o Buka hari ini    |       |                                  info cols 9-12,   |
| [Arah] [WhatsApp]  |       |                                  top = window top  |
+--------------------+       +----------------------------------------------------+
```
Apa itu gezellig?: purpose, the name and the old-house feel. Quiet and type-only.
```
+--------------------+       +----------------------------------------------------+
| Apa itu gezellig?  |       | Apa itu        ┃  Gezellig (Delft italic) adalah    |
| (h2)               |       | gezellig? (h2) ┃  kata Belanda ... (lead, max 34em) |
| lead: meaning      |       | cols 1-4       ┃  body: lampu gantung, ornamen      |
| body: interior     |       |                ┃  Belanda, lukisan, tulip, kincir   |
| closing line       |       |                ┃  angin mini ... closing line       |
+--------------------+       +----------------------------------------------------+
```
Menu andalan: purpose, four pictured dishes plus text rows. The centre mullion splits Belanda and Nusantara.
```
+--------------------+       +----------------------------------------------------+
| Menu andalan (h2)  |       | Menu andalan (h2)  intro line (body, beside h2)    |
| intro              |       | DARI BELANDA (label)    ┃ DARI NUSANTARA (label)   |
| DARI BELANDA       |       | (plate)    (plate)      ┃ (bowl)     (plate)       |
| (plate) (plate)    |       | Gezellig   Uitsmijter   ┃ Garang     Pisang       |
| Kofta   Uitsmijter |       | Kofta Joppie Rp 55rb    ┃ Asem       Goreng       |
| Joppie  Rp 55rb    |       | Rp 58rb    desc         ┃ Rp 52rb    Rp 25rb      |
| Rp 58rb desc       |       | desc                    ┃ desc       desc         |
| Bitterballen Rp35rb|       | Bitterballen  Rp 35rb   ┃ Bistik Jawa              |
| Poffertjes  Rp 32rb|       | Poffertjes  Rp 32rb     ┃ Nasi Goreng Gezellig     |
| ── 2px rule ──     |       |----------------------------------------------------|
| DARI NUSANTARA     |       | JUGA DI MENU Spaghetti   | MINUMAN Koffie Gezellig  |
| (bowl) (plate) ... |       | Arrabbiata Rp 48rb       | Rp 32rb · Strawberry ... |
| JUGA DI MENU       |       | caption: Ilustrasi ... (small, under the grid)     |
| MINUMAN, caption   |       |                                                    |
+--------------------+       +----------------------------------------------------+
```
Suasana (Hijau ground): purpose, rooms and practical facts. The frame is a painting frame waiting for the owner's photo.
```
+--------------------+       +----------------------------------------------------+
| Suasana (h2)       |       | Suasana (h2) cols 1-5 | lead: rumah tua ... 6-12   |
| lead               |       | +-----------------+   | RUANG DALAM  | TERAS LUAR  |
| +----------------+ |       | | frame 4:5       |   | bebas asap   | merokok,    |
| | frame 4:3      | |       | | "Foto dari      |   | rokok ...    | terbuka &   |
| | Foto dari      | |       | |  pemilik: ruang |   |--------------+ beratap     |
| | pemilik ...    | |       | |  lampu gantung" |   | LIVE MUSIC   | PARKIR      |
| +----------------+ |       | +-----------------+   | Jumat&Sabtu  | luas        |
| RUANG DALAM ...    |       |  zone grid rows stretch to the frame's height      |
| TERAS LUAR ...     |       +----------------------------------------------------+
| LIVE MUSIC / PARKIR|
+--------------------+
```
Rayakan di sini: purpose, celebrations and booking. The Delft card is the photo's reserved table card.
```
+--------------------+       +----------------------------------------------------+
| Rayakan di sini    |       | Rayakan di sini (h2)       +--------------------+  |
| lead (mockup)      |       | lead: Rayakan momen ...    | Gereserveerd (lead)|  |
| · Ulang tahun ...  |       | · Ulang tahun & makan      | artinya: sudah     |  |
| · Reuni ...        |       |   malam romantis           | dipesan (small)    |  |
| · Keluarga ...     |       | · Reuni teman lama         | Pesan meja atau    |  |
| +----------------+ |       | · Kumpul keluarga & teman  | acara kecil ...    |  |
| | Gereserveerd   | |       |   cols 1-7                 | [Pesan via WA]     |  |
| | [Pesan via WA] | |       |                            +--------------------+  |
| +----------------+ |       |                              card cols 9-12        |
+--------------------+       +----------------------------------------------------+
```
Kata mereka: purpose, review themes, paraphrased, no names, no quote marks.
```
+--------------------+       +----------------------------------------------------+
| Kata mereka (h2)   |       | Kata mereka (h2)   | ─────────────────────────────  |
| 4,7 dari 361 ulasan|       | 4,7 dari 361       | ✿ Rumah bergaya Belanda yang  |
| Google (lead)      |       | ulasan Google      |   hangat (lead) + detail body |
| ── ✿ theme 1 ──    |       | (lead)             | ─────────────────────────────  |
| ── ✿ theme 2 ──    |       | Ringkasan ulasan,  | ✿ Masakan enak ...            |
| ── ✿ theme 3 ──    |       | bukan kutipan      | ✿ Pelayanan ramah ...         |
| ── ✿ theme 4 ──    |       | cols 1-4           | ✿ Berkesan ... cols 6-12      |
+--------------------+       +----------------------------------------------------+
```
Kunjungi kami (Hijau ground): purpose, address, hours, parking and the map in a steel frame.
```
+--------------------+       +----------------------------------------------------+
| Kunjungi kami (h2) |       | Kunjungi kami (h2) | +---------------------------+ |
| ALAMAT             |       | ALAMAT (Lampu)     | |                           | |
| Jl. Pemuda No.74...|       | Jl. Pemuda No.74,  | |  map iframe, 3px Besi      | |
| JAM BUKA           |       | Jati, Pulo Gadung..| |  frame, 16:10              | |
| Senin–Minggu       |       | JAM BUKA           | |                           | |
| 09.00–23.00        |       | Senin–Minggu ...   | |                           | |
| PARKIR  luas       |       | PARKIR  luas       | +---------------------------+ |
| [Petunjuk Arah]    |       | [Petunjuk Arah]    |  map cols 5-12                |
| map 4:3            |       |  cols 1-4          |                               |
+--------------------+       +----------------------------------------------------+
```
Hubungi kami (Besi ground) and footer: purpose, contact and close. The coaster sign-off sits beside the heading.
```
+--------------------+       +----------------------------------------------------+
| (coaster GEZELLIG) |       | (coaster  | Hubungi kami (h2)                       |
| Hubungi kami (h2)  |       |  disc,    | 0851-5515-9411 (lead, Lampu)            |
| 0851-5515-9411     |       |  160px)   | [Chat WhatsApp] [Telepon] [Petunjuk Arah]|
| [WhatsApp]         |       | cols 1-3  | cols 4-12                               |
| [Telepon] [Arah]   |       |----------------------------------------------------|
| footer: name, addr |       | Gezellig Cafe & Resto · Jl. Pemuda No.74 · draf    |
+--------------------+       +----------------------------------------------------+
```

## 8. Motion
**Signature, "lampu menyala" (hero window, on load, once).** Before first paint an inline script adds
`js` to `<html>`; CSS (only for `.js` without reduced motion) starts the window's night-glass overlay
at opacity 0.86 and the five shade halos at opacity 0. GSAP then: glass overlay → 0 over 1.1s
(`power2.out`, delay 0.2s); halos → 1 and scale 0.92 → 1 over 0.6s each (`expo.out`), stagger
0.08s from the centre shade outward, starting at 0.35s. Everything has settled by about 1.3s. The text never
animates and is readable from first paint. A CSS fallback animation clears the glass after 2.5s
if scripts fail. Reduced motion or no JS: lit from the start, no movement.

Supporting: starter `Reveal` on each section's content block (20px, 0.7s, `power2.out`, once,
`top 85%`). Never on the hero, never per card or per line. Buttons and links: colour/background
change 180ms ease-out (CSS). Lenis: starter defaults.

`lib/motion.ts` additions: `duration.hero = 1.1`, `lights = { delay: 0.2, haloStart: 0.35, halo: 0.6, stagger: 0.08, glassFrom: 0.86, haloScaleFrom: 0.92 }`, `duration.press = 0.18`.

## 9. What makes it this shop
- The hero is their actual facade at night: white plaster, black steel grid, chandelier with tulip-glass shades glowing amber. Regulars will recognise it.
- The menu's centre mullion splits "Dari Belanda" from "Dari Nusantara", and every dish sits on their ribbed white porcelain. The footer ends on the round "GEZELLIG" coaster.
- The booking call to action is a Delft-blue "Gereserveerd" table card, like the reserved card in the guest photo, with the Dutch explained in Indonesian. Empty photo spots are picture frames on the green wall, because reviewers mention the paintings.

## 10. Avoid
- The category default: cream ground + big serif + terracotta accent, photo-less hero with a centred headline, a row of identical menu cards.
- Dutch costume: Delft-tile patterns everywhere, windmill clip-art, orange, flag colours, script fonts, ornamental flourishes. Delft is one card and some italic words, tulips are a small mark.
- Brown-cafe moodiness: an all-dark page with gold text. The page is a plaster wall with one lit window; dark grounds are only Hijau and the Besi footer.
- Text on the glass or over the illustration. The window is a picture, and the words sit on the wall.
- Clip-art food: no outlines on everything, no faces, no glossy gradients. Flat shapes, palette tints, consistent top-down view and scale.
- Steel grid on every box. It appears only in the four places listed in §5.
- A slow or theatrical hero: no flicker, no preloader, no text effects; lights done by ~1.3s.
- Placeholders that look broken: every empty frame has a clear label for the owner.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): 4 illustrated dishes
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
