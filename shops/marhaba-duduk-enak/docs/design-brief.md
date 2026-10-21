# Design brief: Marhaba! Coffee & Eatery

## 1. Concept
The page is Marhaba!'s own front window: a black steel-framed glass pane on the olive pavilion,
with "MARHABA!" lettered in white over a long underline and "duduk enak, makan enak" beneath. The
owner sees their shop before reading a word. Below it you sit at one of their terrazzo tables, the
dishes guests talk about set out on it, with a signboard of the family facilities on the olive wall.
Signature moment: on load, the paper lanterns behind the glass come on one by one, left to right,
like the café switching on its lights for you. The lettering itself never moves.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Window lettering (white hand-cut caps, underline, lowercase tagline), olive pavilion with white trim and black-framed glass, paper-lantern pendants, terrazzo table with black edge, black bowl, lawn and fountain; the five dishes; facilities; hours; Bahasa Indonesia, "Anda". |
| impeccable | Persuade mode. The predictable look ruled out: the cream-and-serif café with a latte hero, and its leafy-green, string-lit garden-café twin. Seven candidates from the shop's world: window lettering, steel-glass façade, festoon lights, terrazzo tabletop, wayfinding signage, laminated menu sheet, stepping-stone path. Chosen: the façade carries the page (working parts on it), the tabletop carries the products, signage carries the facilities. Colour strategy: Committed (olive owns 30–50% of the page). The type is a face with a point of view, not one of the training-data defaults. The motion thesis is one focal sequence specific to this place. Scripts (`context`, `concept-seed`, `serve-question`) were not run: they are interactive and write outside `docs/`. Its guidance was applied by hand. |

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kaca` | #1B2219 | the glass at dusk: hero pane, closing band, footer | lis on kaca 14.9:1 ✓, bohlam on kaca 8.8:1 ✓ |
| `paviliun` | #565C3E | the olive pavilion wall: header, hero surround, Fasilitas band | lis on paviliun 6.4:1 ✓ (only lis text here; lis-soft 4.2 ✗, never) |
| `lis` | #F5F5EF | white trim: sill, light sections, text on dark | besi on lis 16.6:1 ✓, paviliun on lis 6.4:1 ✓ |
| `besi` | #141612 | black steel: window frame, table edge, signboard, body text, primary button | lis on besi 16.6:1 ✓ |
| `teraso` | #E6E4DC | terrazzo table top (with chips) and the Kata mereka ground | besi on teraso 14.3:1 ✓, besi-soft 6.6:1 ✓ |
| `bohlam` | #F2B441 | bulb amber: lantern glow, "hari ini" marker, WhatsApp button on dark, focus ring on dark | besi on bohlam 9.9:1 ✓; never as text on light grounds |

Derived text tints (not new colours): `besi-soft` #4B4F41 for secondary text on lis/teraso (7.7 / 6.6 ✓);
`lis-soft` #C6CBB8 for secondary text on kaca/besi only (≥ 9.8 ✓).
Terrazzo chips: #B9B6AB, #8E9273, #2B2D27, #D8C7AE. Illustration-only colours are listed in §6.

## 4. Type
One family: **Signika** (Google, variable 300–700, `latin` subset), loaded with `next/font/google`, `display: "swap"`,
as both `--font-display` and `--font-body`. It is a typeface drawn for signage and wayfinding:
slightly rounded, low contrast, a little narrow. It echoes the white window lettering, it is right
for the facilities signboard, and it keeps long Indonesian words compact. Weights: 700 for the
lettering and headings, 600 for dish names, facility names and buttons, 400 for body text.
"MARHABA!" is uppercase with tracking 0.02em. The tagline stays lowercase, as on the glass.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1.2rem + 7vw, 7.5rem)`: 48px @390, 120px @1440 | "MARHABA!" only (one line, `white-space: nowrap`, leading 0.9) |
| `--step-head` | `clamp(2rem, 1.35rem + 2.6vw, 3.5rem)`: 32 → 56px | section h2; the hero tagline on the glass |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)`: 22 → 28px | statements, dish/facility/theme names, today's hours, rating line |
| `--step-body` | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)`: 16 → 18px | running text, descriptions, prices, hours rows, door decal, buttons |
| `--step-small` | `0.8rem`: 12.8px | captions ("Ilustrasi…", "Harga contoh…"), footer note only |

Ratios: 48/32 = 1.5, 32/22 = 1.45, 22/16.1 = 1.37, 16.1/12.8 = 1.26 at 390; 120/56 = 2.1, 56/28 = 2, 28/18 = 1.56,
18/12.8 = 1.41 at 1440. Leading: head 1.1, lead 1.3, body 1.55, small 1.4. "MARHABA!" must measure ≤ the pane's
inner width at 390, 768, 1024 and 1440. If it doesn't, lower the `7vw` term. Never let it wrap.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, on a 12-column grid with a 24px gap |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here that means prices sit on the line under the
  dish name, the "hari ini" tag sits right after its day row, and captions sit directly under
  their illustration.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- The window frame is 10px (desktop) / 8px (phone) of `besi`, with 8px mullions, square corners. The table
  edge is 8px `besi`, radius 6px. No drop shadows anywhere except the soft contact ellipse under each dish.

## 6. Products on the page
No owner photos exist (photos.json), so all five products are **flat top-down illustrations** (inline SVG,
one component each, 2–4 flat tones, no outlines except rims). They sit on one terrazzo table at
**relative real scale**: bowls big, cups small. Each has its name, description and price within 16–24px.
`photo-2.jpg` is the reference for the noodle bowl only, never shipped.

| Dish | Drawn as (top-down) | Size desktop / phone |
|---|---|---|
| Mie Kari Ayam [MOCKUP name] | black bowl (besi, #2A2D27 rim), kari broth #B5652B, noodle squiggles #E8C46A, two egg halves (#F6F3EA, yolk #E9A93A), chicken #C98A55, fried tofu #C58B3E, two kerupuk #EEDDB8 overlapping the rim, scallion #7FA650 | 240 / 128px |
| Caesar Salad | white bowl (lis, rim shade #DAD8CF), romaine #7FA44A + #A9C46B, croutons #C99A55, parmesan shavings #F1E7C9 | 220 / 120px |
| Umm Ali | round white baking dish, golden crust #D9A15A with browned patches #B97A3A, pistachio #9DB86A, almond slivers #EADBB8, raisins #5A2E1E | 190 / 112px |
| Kopi Susu Kurma | glass seen from above (thin lis rim, 60% opacity), milk-coffee surface #B98B5E, two dates #5A2E1E beside it | 120 / 88px |
| Cappuccino | white cup and saucer, crema ring #8A5A35, foam #EFE4D2, simple tulip pattern #C8A27A, handle at 4 o'clock | 120 / 88px |

Every dish SVG has `role="img"` and an Indonesian `aria-label`. One caption under the table: "Ilustrasi, bukan foto menu."
Other illustrations: the hero interior (lanterns, wooden tables #4A3826, rattan chair backs, plants #2B3A26,
far garden greens) and the Suasana garden (lawn #6E8A45/#5E7A3A, trees #3F5A2E/#4E6B38, pavilion, fountain
water #3E5A5E, stepping stones #D8D4C6, taupe umbrella #8A8072). Both are labelled as illustrations
until the owner sends photos.

## 7. Sections
**Hero / the window.** Recognise the shop, see today's hours, act. The scene behind the glass has three bands:
top 30% lanterns hanging from a black track rail; middle 40% kept deep `kaca` (the lettering zone, no shapes
brighter than kaca +8% lightness); bottom 30% table tops with pools of lantern light (bohlam at 18% opacity) and plants at the edges.
```
Hero: phone (390)                    Hero: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| draft banner (besi)          |     | draft banner                                                 |
| Marhaba! C&E        Lokasi   |     | Marhaba! Coffee & Eatery             Menu  Fasilitas  Lokasi |  paviliun
|==============================|     |==============================================================|  lis trim 6px
|#+--------------------------+#|     |   #+-----------------------------------------+-----------+#  |  besi frame
|#|   o      O       o       |#|     |   #|  o      O       o       O               |    O      |#  |  lanterns
|#|                          |#|     |   #|                                         | BUKA      |#  |
|#| MARHABA!                 |#|     |   #|  MARHABA!                  (120px)      | SETIAP    |#  |  door decal,
|#| ______________________   |#|     |   #|  ______________________________         | HARI      |#  |  body size
|#| duduk enak,              |#|     |   #|  duduk enak, makan enak     (56px)      | Sen–Kam…  |#  |
|#| makan enak               |#|     |   #|  ~table~  ~table~        plant          | Jum–Min…| |#  |  handle bar
|#+--------------------------+#|     |   #+-----------------------------------------+-----------+#  |
| sill (lis)                   |     |   | sill (lis): Coffee & Eatery ·   | ● Buka hari ini            |  |
| Coffee & Eatery · Pd. Bambu  |     |   | Pondok Bambu, Duren Sawit       |   08.00–21.00              |  |
| Kopi, makanan rumahan, ...   |     |   | Kopi, makanan rumahan, dan ...  | [Petunjuk Arah] [WhatsApp] |  |
| ● Buka hari ini 08.00–21.00  |     |   +-----------------------------------------------------------+  |
| [Petunjuk Arah] [WhatsApp]   |     +--------------------------------------------------------------+
+------------------------------+     main pane cols 1–9, door cols 10–12 (≥1100px; below that, one pane)
```
Phone fold budget (390×844): banner ≈70, header 52, trim 6, window 376 (pane 360: lanterns 100, lettering, tables 72),
sill ≈220. The bottom of "Petunjuk Arah" must sit above 800px. The window sits inside the gutter, so olive wall shows at both sides.
Desktop: window height 560px; the sill is the lis band directly under it, the same width as the window.

**Menu andalan / the family table.** Show five real dishes. The table is one object, seen once from above.
```
Menu: phone (390)                    Menu: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Menu andalan                 |     |  Menu andalan (cols 1–6)       Pilihan yang sering disebut   |
| Pilihan yang sering disebut  |     |                                tamu… Harga contoh… (7–11)    |
| tamu dalam ulasan.           |     |  +--------------------------------------------------------+  |
| Harga contoh, menunggu…      |     |  | (MIE 240) Mie Kari Ayam    | (SALAD 220) Caesar Salad  |  |
| +--------------------------+ |     |  |           Rp 38rb          |             Rp 40rb       |  |
| |(128) Mie Kari Ayam       | |     |  |           Mi kuah kari…    |             Salad yang…   |  |
| |      Rp 38rb · Mi kuah…  | |     |  | (glass) Kopi Susu | (UMM ALI 190) Umm Ali | (cup)      |  |
| |(120) Caesar Salad …      | |     |  |  120    Kurma     |  Rp 35rb · Pencuci…   | Cappuccino |  |
| |(112) Umm Ali …           | |     |  |         Rp 30rb…  |                       | Rp 28rb…   |  |
| |(88)  Kopi Susu Kurma …   | |     |  +--------------------------------------------------------+  |
| |(88)  Cappuccino …        | |     |  Ilustrasi, bukan foto menu.                                 |
| +--------------------------+ |     |  Juga ada (contoh) Makanan: Nasi Kebuli… | Minuman: Es Kopi… |
| Ilustrasi, bukan foto menu.  |     +--------------------------------------------------------------+
| Juga ada (contoh) …          |     table: 12 cols; row 1 two food units (6+6), row 2 three units (4+4+4);
+------------------------------+     each unit = dish + label to its right, label ≤ 20px from the dish
```
Phone: one 128px dish column so all labels align; the dishes keep their relative sizes inside it.

**Fasilitas / the signboard.** Reassure families and Muslim guests. Ground `paviliun`; the board is a `besi`
plate (radius 4px, 32px padding), rows split by 1px lis at 20%, each row a 28px bohlam line pictogram (mushala dome, snowflake, tree,
child, "P") + name (lead, lis) + detail (body, lis-soft) stacked, never across the row.
```
Fasilitas: phone (390)               Fasilitas: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Fasilitas            (lis)   |     |  Fasilitas (cols 1–5)        +---------------------------+   |
| Datang sekeluarga? Ini yang  |     |  Datang sekeluarga? Ini      | ⌂ Mushala                 |   |
| ada di sini.                 |     |  yang ada di sini. (lead)    |   Tempat wudhu perempuan… |   |
| +--------------------------+ |     |                              | ❄ Ruang ber-AC            |   |
| | ⌂ Mushala                | |     |                              |   Ruang kaca di dalam…    |   |
| |   Tempat wudhu perempuan…| |     |                              | ♣ Taman semi-outdoor  …   |   |
| | ❄ Ruang ber-AC …         | |     |                              | ☺ Area bermain anak   …   |   |
| | ♣ Taman semi-outdoor …   | |     |                              | P Parkir              …   |   |
| | ☺ Area bermain anak …    | |     |                              +---------------------------+   |
| | P Parkir …               | |     |                               board cols 6–12 (≈690px)       |
| +--------------------------+ |     +--------------------------------------------------------------+
+------------------------------+
```

**Suasana.** The garden by day, plus the quiet concept. A wide garden illustration with the fountain at its centre
(x = 50%). Festoon bulbs are drawn unlit here.
```
Suasana: phone (390)                 Suasana: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Suasana                      |     |  +--------------------------------------------------------+  |
| +--------------------------+ |     |  | garden illustration 1200×500: trees, pavilion, festoon,|  |
| | garden, 4:5 crop         | |     |  | lawn, fountain (centre), stones, tables, umbrella      |  |
| | centred on fountain      | |     |  +--------------------------------------------------------+  |
| +--------------------------+ |     |  Ilustrasi, bukan foto. Foto asli menyusul.                  |
| Ilustrasi, bukan foto. …     |     |  Suasana (cols 1–5)        Sengaja tanpa musik latar. Pilih  |
| Sengaja tanpa musik latar.   |     |                            duduk di taman… (lead, cols 6–11) |
| Pilih duduk di taman… (lead) |     +--------------------------------------------------------------+
+------------------------------+
```

**Kata mereka.** Proof without quotes, on `teraso` (plain, no chips). Five paraphrased themes. No quote marks, no stars, no cards.
```
Kata mereka: phone (390)             Kata mereka: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Kata mereka                  |     |  Kata mereka (cols 1–4)    | Suasananya nyaman  | Pelayanan- |
| 4,6 dari 569 ulasan Google   |     |  4,6 dari 569 ulasan di    | Tamu menyebut…     | nya ramah  |
| Dirangkum dari ulasan…       |     |  Google (lead)             | Salad, kopi, dan   | Nyaman     |
| Suasananya nyaman            |     |  Dirangkum dari ulasan…    | Umm Ali …          | untuk kel… |
|   Tamu menyebut…             |     |  (small)                   | Terus berbenah …   |            |
| … (5 themes stacked)         |     |                            themes: 2-col grid in cols 5–12   |
+------------------------------+     +--------------------------------------------------------------+
```

**Kunjungi kami.** Get there. Map inside an 8px `besi` frame (the window grammar), with a lis-on-kaca fallback link under the iframe.
```
Kunjungi: phone (390)                Kunjungi: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Kunjungi kami                |     |  #+-----------------------------+#   Kunjungi kami           |
| Jl. Pahlawan Revolusi No.55, |     |  #|                             |#   Jl. Pahlawan Revolusi…  |
| Pondok Bambu, …              |     |  #|   map 4:3 (cols 1–7)        |#   Di sebelah restoran mi. |
| Di sebelah restoran mi.      |     |  #|                             |#   Senin–Kamis 08.00–21.00 ●hari ini|
| Sen–Kam 08.00–21.00 ●hari ini|     |  #|                             |#   Jumat–Minggu 08.00–23.00|
| Jumat–Minggu 08.00–23.00     |     |  #+-----------------------------+#   Buka setiap hari        |
| Tersedia parkir …            |     |                                      Tersedia parkir …       |
| [Petunjuk Arah]              |     |                                      [Petunjuk Arah] (8–12)  |
| map 4:3                      |     +--------------------------------------------------------------+
+------------------------------+
```

**Hubungi kami + footer.** Close in the lit garden at night. Ground `kaca`. A festoon wire runs the full width
along the top: 9 lit bulbs, static. Content is a narrow centred column (max 640px).
```
Hubungi: phone (390)                 Hubungi: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| ~~o~~~o~~~o~~~o~~ (festoon)  |     | ~~o~~~~o~~~~o~~~~o~~~~o~~~~o~~~~o~~~~o~~~~o~~ (full bleed)   |
| Hubungi kami                 |     |               Hubungi kami                                   |
| Mau datang rombongan…        |     |               Mau datang rombongan atau untuk acara…        |
| Jumat–Minggu buka s.d. 23.00 |     |               Jumat–Minggu buka sampai 23.00.                |
| [WhatsApp] (bohlam)          |     |       [WhatsApp]  [Telepon 0813-9938-5352]  Petunjuk Arah    |
| [Telepon 0813-…]             |     |  ----------------------------------------------------------- |
| Petunjuk Arah                |     |  Marhaba! Coffee & Eatery · Jl. Pahlawan…  Situs ini masih draf…  |
| footer: name, address, draft |     +--------------------------------------------------------------+
+------------------------------+
```

## 8. Motion
**Signature: "lampu menyala".** Hero only, on load. 5 lanterns (3 visible on phone). Each lantern has an
"off" paper layer (#8C8A7A) under a "lit" layer (lis core + bohlam radial glow) plus a light pool on the table below.
The lit layer and pool go opacity 0 → 1, 550ms, `cubic-bezier(0.16, 1, 0.3, 1)`, delays 200 / 350 / 500 / 650 / 800ms (pool +100ms).
Sequence ends by 1.4s. Pure CSS `@keyframes` with `animation-fill-mode: both`: it runs from first paint and
doesn't wait on hydration, there is no lit→off flicker, and it still runs with JS off. The lettering, tagline, hours and buttons are static
and visible from first paint (the LCP element is the h1). Reduced motion: `animation: none` on these layers,
so the lanterns are simply lit.
Supporting, all quiet: section reveals with the starter `<Reveal>` (20px, 0.7s, power2.out, once) on four
blocks only: the menu table, the Fasilitas board, the Suasana illustration, the Kunjungi block.
Buttons and links: 150ms ease-out, ::after overlay opacity plus translateY(-1px), press translateY(1px). The festoon in the closing is static.
Lenis: starter defaults. `lib/motion.ts`: starter values; add `hero: 1.4` as the documented sequence length.

## 9. What makes it this shop
- The hero is their actual window: "MARHABA!" in white over the underline, the lowercase tagline, black steel
  mullions, paper lanterns inside, and the weekly hours on the glass door, as cafés do.
- Their food on their table: a terrazzo top with a black edge, the curry noodles in a black bowl with
  kerupuk over the rim, Kopi Susu Kurma with two dates beside it, Umm Ali. Drawn at real relative size.
- Facilities as a wayfinding board in a signage face, led by Mushala with the separate women's wudhu space.
  The quiet, no-music concept shows in the copy and in the motion: one lighting moment, nothing else plays.

## 10. Avoid
- The cream ground and serif display of the coffee-shop template, latte-art heroes, coffee beans, brown gradients, script fonts.
- Botanical wallpaper, monstera clip-art and string lights everywhere. Festoon appears only in Suasana (unlit) and the closing.
- Arabesque, mashrabiya patterns, Arabic calligraphy or "Middle Eastern" ornament: not confirmed (open question 12).
- Testimonial cards with quote marks, stars or names. An icon-tile grid for facilities. Equal product cards or grey photo boxes.
- A frame so heavy it cages the text. A hero so dark it turns to mud: the glass is deep green, not black, and the lanterns must read.
- Animating the lettering, staggering dishes, or parallax on the garden.
- Copy claims the sources don't support: "murah", "parkir luas", "sunyi", "sejak…", wifi.
- Risk: the illustrations look like clip art. Keep them flat, few tones, and drawn from the photos' real objects.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (dish, facility and theme names at lead ≤ 28px under 56px h2; the hero tagline is inside the hero)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices under names, "hari ini" after its row, captions under images, door decal on its door)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero spans frame + door + sill; the table spans 12 cols; board cols 6–12 beside the heading; full-width garden; themes 2-col; map + details; closing narrow and centred under a full-bleed festoon)
- [x] At least 3 products shown (food and product shops): five illustrated dishes
- [x] Within motion-rules.md (one signature, opacity only, section reveals on 4 blocks, no React Bits, reduced motion = lit and static)
- [x] Brief is decisions, not essays (2–4 pages)
