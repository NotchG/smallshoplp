# Design brief: Kawa Coffee

## 1. Concept
The site is Kawa's concrete house at dusk: a soft concrete page with the small KAWA / COFFEE
sign and its round backlit disc, the menu hung like the record wall downstairs, the two floors
drawn as a building, and the page going dark at the end like the street when the lamp is on.
Signature moment: on load, the disc under the KAWA / COFFEE lockup switches on, with its amber
halo warming up behind it in two soft steps, the way the real sign lights the wall at dusk.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned palette (concrete, putty limewash, black steel, bottle-green cup, amber downlights), the sign lockup and disc (photo-1), the 3×2 record-sleeve wall over a black sideboard (photo-2), the green cup (photo-3), two floors and parking, products from reviews 2, 4, 5, `owner-1.jpg` as the only shippable photo |
| impeccable | Persuade mode; new-work derivation done by hand (the launcher and concept-seed weren't run because they write outside `docs/`). Seven candidates: backlit disc sign, record-sleeve wall, glass-block window, two-storey house elevation, green Jakarta street-name plate, QRIS stand and receipt, letterboard menu. Rut: cream ground, serif and bean icons; espresso-brown "artisan" page. Brief-pinned world wins: facade at dusk, with the sleeve wall as menu structure and the elevation as the Tempat section. Full-palette strategy with colour owning whole regions, one family with a width axis, one authored focal motion |

## 3. Palette (6 named colours)
Scene: someone checks this on a phone before driving over, often late afternoon or evening,
heading for a grey room under warm downlights. So the page is light concrete and goes dark
(dusk) at the visit section.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `beton` | #D9D6D0 | Page ground (hero, Tempat); light text on dark and green fields | arang on beton 11.8:1 |
| `kapur` | #A9A397 | Limewash: the record-wall section ground; muted text on arang; rules on botol | arang on kapur 6.8:1 · kapur on arang 6.8:1. Never batu text on kapur (3.05) |
| `batu` | #57534C | Muted text on beton only; disc edge; one sleeve ground | batu on beton 5.3:1 |
| `arang` | #1C1C1A | Text; sideboard band; dusk ground for Kunjungi, Hubungi, footer; focus ring on light | 11.8:1 on beton |
| `botol` | #21402F | Bottle green: the "Kata mereka" field; primary button on light grounds | beton on botol 7.9:1 · botol button on beton 7.9:1 |
| `lampu` | #E2A048 | Amber: disc halo, hours line and primary button on arang, focus ring on dark. Never text on light grounds (1.55) | lampu on arang 7.6:1 · arang on lampu 7.6:1 |

Illustration inks, used only inside sleeves and the elevation, never for text: kopi #4A2F20,
krema #B7773F, susu #E8DCC6, krim #F7F3EA, kuning #F0B43C, nasi #C8874A, timun #A9C48E,
katsu #C68A3C, kentang #E4B65A, kayu #6B4A32, es #DCE6E8.

## 4. Type
One family: **Archivo** (variable, `next/font/google`, `axes: ["wdth"]`, subset latin,
`display: swap`). Its width axis gives the sign voice, so no second family is needed.
- Sign (KAWA, COFFEE): `font-variation-settings: "wdth" 125`, uppercase. KAWA weight 600,
  tracking 0.02em. COFFEE weight 500, tracking 0.42em, `--step-lead`, centred under KAWA.
- Headings: `"wdth" 112`, weight 600, sentence case, tracking -0.005em.
- Labels (SISI A, LANTAI 2): `--step-small`, `"wdth" 112`, weight 600, uppercase, tracking 0.14em.
- Body: `"wdth" 100`, weight 400. Prices use `font-variant-numeric: tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(4.5rem, 1rem + 11vw, 8.5rem) → 72–136px | "KAWA" in the hero lockup only (one line, leading 0.9) |
| `--step-head` | clamp(1.875rem, 1.3rem + 2.4vw, 3rem) → 30–48px | section headings, leading 1.1 |
| `--step-lead` | clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem) → 22–26px | hero line, "COFFEE", praise statements, closing line; leading 1.3 |
| `--step-body` | clamp(1.0625rem, 1rem + 0.25vw, 1.125rem) → 17–18px | running text, sleeve names, menu lists, hours, buttons; leading 1.55 |
| `--step-small` | 0.8125rem → 13px | labels, prices, captions, sleeve notes; leading 1.4 |

Ratios at 390 / 1440: display/head 2.4 / 2.8, head/lead 1.36 / 1.85, lead/body 1.29 / 1.44,
body/small 1.31 / 1.38. All ≥ 1.25.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 1024px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 1024px) |

- 12-column grid from 1024px, 48px column gap. Two-column layouts switch on at 1024px;
  768–1023 stays stacked.
- **Proximity:** prices sit on the line directly under the item name, left-aligned (never
  pushed to the right edge of the sleeve column). The hours list uses a fixed 9rem day column
  with the time right beside it. Captions sit 12px under their photo.
- **Wide screens:** every section is split or gridded at 1440 (see §7). No centred column
  floats alone on a wide field.
- **Lists:** sleeve names and menu lists use `--step-body`; praise statements use `--step-lead`. Nothing in a list goes above `--step-lead`.
- Square corners everywhere (concrete, steel, record sleeves). The hero photo has an 8px
  `arang` steel frame on three sides.

## 6. Products on the page
Seven products are shown as pictures, not just named:
- **Kopi susu panas with latte art** in the black cup: `owner-1.jpg`, hero window, captioned.
- **Six illustrated record sleeves** (flat SVG, square, one per item; same style throughout).
  Drinks are drawn side-on in their glass, plates top-down. 4 to 8 flat shapes each: no
  outlines, no gradients, no text inside. A 4px `kayu` ledge (40% of sleeve width) sits under
  each sleeve, as on the real wall.
  | # | Item | Sleeve ground | Drawing |
  |---|---|---|---|
  | 01 | Mont Blanc | botol | tall glass: kopi base, susu layer, thick krim cap |
  | 02 | Espresso on the rock | beton | short rocks glass, three es cubes, kopi with a krema band |
  | 03 | Es Kopi Signature Kawa | arang | tall glass of susu-tan iced coffee, es cubes |
  | 04 | Nasi Goreng Kawa | lampu | white plate, nasi mound, fried egg (krim + kuning), timun slices |
  | 05 | Chicken katsu & kentang goreng | batu | white plate, katsu cutlet with slice lines, kentang sticks, small sauce dish |
  | 06 | Donat kampung | botol | three kayu-gold rings with holes, dusted with krim dots |
- Every SVG has `role="img"` and an aria-label naming the dish plus "(ilustrasi)". The checklist asks for real photos.

## 7. Sections
**Hero** (beton). Sign unit: KAWA, COFFEE centred under it, disc centred under both, as on the
wall. Disc 56px phone / 96px desktop: a `kapur` face with a 1px `batu` edge, halo 1.9× the disc
behind it. The gap above the disc is at least the halo overhang, so the halo never touches the
letters. Then the hero line, the tone line, today's hours (body 600), and two buttons. The photo
is 16:9 when stacked. On desktop it sits in a 4:3 steel-framed window that bleeds off the right edge.
```
Hero: phone (390)                   Hero: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|Draf situs untuk Kawa Coffee... |  |Draf situs untuk Kawa Coffee ...                                         |
|Cipayung, Jakarta Timur  Lokasi |  |Cipayung, Jakarta Timur                       Menu   Tempat   Lokasi    |
|   KAWA                         |  |  KAWA                               +====================================
|  C O F F E E                   |  |  C O F F E E                        ||                                  
|     (o) glow                   |  |      (o)  <- disc + halo            ||  owner-1.jpg, 4:3, steel frame   
|Kopi dan makanan rumahan di     |  |  Kopi dan makanan rumahan           ||  top/left/bottom, bleeds off the 
|Cipayung.            (lead)     |  |  di Cipayung.            (lead)     ||  right edge of the viewport      
|Kopi enak, wifi kencang, ...    |  |  Kopi enak, wifi kencang, ...       ||                                  
|Buka hari ini 08.00-22.00       |  |  Buka hari ini 08.00-22.00          +====================================
|[Petunjuk Arah] [ WhatsApp ]    |  |  [Petunjuk Arah]  [WhatsApp]         Kopi susu panas dengan latte art   
|+------------------------------+|  +------------------------------------------------------------------------+
||owner-1.jpg 16:9             ||     cols 1-6: the wall                  cols 7-12 + bleed: the window
|+------------------------------+|
|Kopi susu panas dengan latte art|
+--------------------------------+
```
**Menu andalan** (kapur, then an arang sideboard band). Label SISI A, heading, intro line,
then the 3×2 sleeve wall: number + name (body 600), price on the next line (small, `data-mockup`)
and an optional note of up to 8 words (small). The band underneath is full-bleed arang. It holds
SISI B, a static 32px record circle (batu ring, kapur centre), the three groups and the footnote
saying prices are examples.
```
Menu: phone (390)                   Menu: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|SISI A                          |  | SISI A                                                                 |
|Menu andalan           (head)   |  | Menu andalan (head)                Datang untuk satu kopi, tinggal    |
|Datang untuk satu kopi, ...     |  |                                    sampai makan siang. (cols 7-12)    |
|+-----------+  +-----------+    |  | +--------------+      +--------------+      +--------------+          |
||   01      |  |   02      |    |  | |  01 botol    |      |  02 beton    |      |  03 arang    |  ~368px  |
|+-----------+  +-----------+    |  | +--------------+      +--------------+      +--------------+          |
|   ====           ====  ledge   |  |      =====                 =====                 =====                |
|01 Mont Blanc  02 Espresso on   |  | 01 Mont Blanc         02 Espresso on the rock  03 Es Kopi Signature   |
|Rp 30rb           the rock      |  | Rp 30rb               Rp 25rb                     Kawa                |
|                  Rp 25rb       |  |                                                Rp 25rb                |
|(03 04 / 05 06 the same)        |  | (row 2: 04 lampu, 05 batu, 06 botol, the same)                         |
|================================|  |========================================================================|
|SISI B (o)            (arang)   |  | SISI B  (o)   Kopi lainnya         Non-kopi            Dari dapur      |
|Kopi lainnya: Cappuccino, ...   |  |               Cappuccino           Matcha Latte        Mie goreng      |
|Non-kopi: Matcha Latte, ...     |  |               Americano ...        Chocolate ...       Dimsum          |
|Dari dapur: Mie goreng, Dimsum  |  |               Harga di draf ini masih contoh. Sudah termasuk pajak... |
|Harga di draf ini masih contoh. |  |                                                                        |
+--------------------------------+  +------------------------------------------------------------------------+
```
**Tempat buat kerja & ngobrol** (beton). A flat elevation drawing (beton ground): a kapur
two-storey box with an arang balcony rail, lampu-lit windows, a kayu door, a small static disc
and a carport with a batu car. Floor rows sit beside it in the same top-to-bottom order. Each
row has a label (small caps) followed by body text.
```
Tempat: phone (390)                 Tempat: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|Tempat buat kerja & ngobrol     |  | Tempat buat kerja & ngobrol (head)    Dua lantai, kursi empuk, wifi    |
|Dua lantai, kursi empuk, ...    |  |                                       kencang. (lead, cols 7-12)       |
|+------------------------------+|  | +--------------------------------+   LANTAI 2  Ruang merokok dalam     |
||  elevation (L2, L1, carport) ||  | |  L2 + balcony   | carport      |             ruangan, ber-AC.        |
|+------------------------------+|  | |  L1 windows/door|  car         |   --------------------------------- |
|LANTAI 2  Ruang merokok ber-AC  |  | |  disc           |              |   LANTAI 1  Kursi empuk, wifi ...   |
|LANTAI 1  Kursi empuk, wifi ... |  | +--------------------------------+   --------------------------------- |
|DEPAN     Parkir luas ...       |  |   cols 1-6                            DEPAN     Parkir luas, mobil+motor|
+--------------------------------+  +------------------------------------------------------------------------+
```
**Kata mereka** (botol field, beton text). Heading plus the note "Diringkas dari ulasan Google."
Four statements at lead size, each led by an 8px lampu dot, with 1px kapur rules between them.
```
Kata mereka: phone (390)            Kata mereka: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|Kata mereka            (head)   |  | Kata mereka (head)       | . Kopinya enak dan    | . Nyaman buat kerja   |
|Diringkas dari ulasan Google.   |  | Diringkas dari ulasan    |   sepadan harganya.   |   lama, wifi kencang. |
|. Kopinya enak dan sepadan ...  |  | Google.                  |-----------------------+-----------------------|
|. Nyaman buat kerja lama ...    |  |                          | . Mont Blanc segar    | . Parkirnya luas,     |
|. Mont Blanc segar setelah ...  |  |                          |   habis jalan jauh.   |   gampang mampir.     |
|. Parkirnya luas ...            |  |   cols 1-4                  cols 5-12, 2x2 grid                         |
+--------------------------------+  +------------------------------------------------------------------------+
```
**Kunjungi kami** (arang, the dusk). Address, then "Buka setiap hari" in lampu, the hours
list, the payment line (`data-mockup`) and the map (lazy iframe, square corners, 1px kapur
border).
```
Kunjungi: phone (390)               Kunjungi: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|Kunjungi kami          (head)   |  | Kunjungi kami (head)          +-----------------------------------------+|
|Jl. Raya Mabes Hankam No.3, ... |  | Jl. Raya Mabes Hankam No.3,   |                                         ||
|Buka setiap hari      (lampu)   |  | Bambu Apus, Cipayung ...      |   Google Maps embed, 16:10              ||
|Senin-Jumat   08.00-22.00       |  | Buka setiap hari              |                                         ||
|Sabtu-Minggu  08.00-23.00       |  | Senin-Jumat   08.00-22.00     |                                         ||
|Bayar dengan QRIS atau tunai    |  | Sabtu-Minggu  08.00-23.00     +-----------------------------------------+|
|[ map 4:3 ]                     |  | Bayar dengan QRIS atau tunai    cols 6-12                              |
+--------------------------------+  +------------------------------------------------------------------------+
```
**Hubungi kami + footer** (arang, separated from Kunjungi by a 1px kapur rule). A static lit
disc (48px, no animation) sits beside the closing line. Primary button: lampu with arang text.
Others: beton outline. Buttons are 48px tall. The phone number sits 12px under the button row, beside the
Telepon button it belongs to, not under the closing line.
```
Hubungi: phone (390)                Hubungi: desktop (1440)
+--------------------------------+  +------------------------------------------------------------------------+
|Hubungi kami           (head)   |  | Hubungi kami (head)                [Petunjuk Arah] [WhatsApp] [Telepon]|
|(o) Sampai ketemu di Kawa.      |  | (o) Sampai ketemu di Kawa. (lead)  0878-8824-2274 (small, 12px under)  |
|0878-8824-2274                  |  |                                    cols 6-12, one row                  |
|[      Petunjuk Arah       ]    |  |------------------------------------------------------------------------|
|[        WhatsApp          ]    |  | Ini draf situs untuk ditinjau pemilik.     Kawa Coffee · Bambu Apus,   |
|[        Telepon           ]    |  |                                            Cipayung                    |
|Ini draf situs untuk ditinjau...|  +------------------------------------------------------------------------+
+--------------------------------+
```

## 8. Motion
**Signature: the disc switches on.** On first load, after hydration plus a 0.2s delay, the halo
behind the hero disc warms up in two steps. Step one: opacity 0 → 0.55 and scale 0.94 → 0.97,
0.35s. Step two: opacity → 1 and scale → 1, 0.8s. Ease `power2.out`, about 1.15s in total, once.
The disc face and all text are visible from the first paint; nothing else in the hero moves.
No flicker or flashing.
- The halo is lit by default in CSS. An inline head script adds `html.js`. Under
  `prefers-reduced-motion: no-preference`, `.js .disc-halo` starts at opacity 0, with a
  2.5s CSS failsafe that forces it lit if GSAP never runs.
- **Reduced motion:** the halo is lit from the start, no tween, Lenis off.

Supporting motion:
- Section reveal (starter `<Reveal>`), once per section on its content block. Applies to
  Menu (heading block, then the sleeve grid as one block), Tempat, Kata mereka and Kunjungi:
  20px, 0.7s, `power2.out`. Never on single sleeves, words or list items.
- Buttons and links: a hover overlay goes from opacity 0 to 0.12 in 180ms; press scales to
  0.98 in 150ms. Plain CSS, transform and opacity only.
- Lenis: starter defaults.

Motion tokens for `lib/motion.ts`: `duration.hero = 1.15`, plus `heroStep1 = 0.35` and
`heroStep2 = 0.8`. Everything else stays as in the starter.

## 9. What makes it this shop
1. The hero lockup copies the real facade: wide KAWA over a widely spaced COFFEE, with the round
   backlit disc below, which lights up as the page opens.
2. The menu hangs as the downstairs record wall: six square sleeves in the same 3×2 grid, each
   on its little wooden ledge, over a black sideboard band that holds the rest of the menu as
   "Sisi B".
3. The facilities are told by the building itself: a drawing of the two floors and the carport,
   with the AC smoking room, the work seats and the parking listed floor by floor. The page ends
   in dusk colours, because Kawa stays open until 22.00–23.00.

## 10. Avoid
- Coffee-site clichés: bean or steam icons, cream paper with a serif display, brown-everything,
  a rotating circular-text badge, "crafted with passion" copy.
- Vinyl as a costume: no spinning records, groove textures, "now playing" or claims about music
  (whether records get played is [MOCKUP]). The record wall shapes the menu layout, nothing more.
- Glow everywhere: the amber halo appears once, animated, in the hero, plus one static disc at
  the close. No glowing edges, neon shadows or glow on cards. Elsewhere amber is a flat colour.
- Fake concrete: no texture photos, noise or grain overlays. Concrete is a flat colour.
- The split-hero template: the window must read as a steel-framed window bleeding off the edge.
  No rounded image card, no badge row, no floating stat chips.
- Generic icon tiles for wifi or parking. The facilities live in the floor rows beside the drawing.
- Clip-art drift: all six sleeves share one flat style and viewpoint rules. If one drawing can't
  be made clean, simplify it rather than adding detail.
- English creeping into copy (only menu names stay as the shop writes them). The rating, stars
  and reviewer names stay off the page.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Lowest ratio
      is 1.29; lists are at body/lead size, labels at small size, headings at head size.
- [x] Max content width set (1200px); no detail pinned far from what it describes. Prices sit
      under their names, hours sit beside their days, captions sit 12px under the photo, floor
      labels sit beside their rows, the phone number sits under the button row (moved there
      during this check).
- [x] Every section has a desktop wireframe that uses the width on purpose: hero wall + window,
      3×2 wall + 3-group band, drawing + rows, 4/8 split, 5/7 info + map, line + button row.
- [x] At least 3 products shown: 7 (owner photo + 6 illustrated sleeves).
- [x] Within motion-rules.md: one signature, section-level reveals, transform and opacity only,
      fast CSS responses, no React Bits, reduced motion means none, nothing hidden without JS.
- [x] Brief is decisions, not essays (about 4 pages including wireframes).
