# Design brief: Mabsooth Cafe & Resto

## 1. Concept
**"Di bawah lentera":** the page is a vertical slice through the terrace at night, from the lantern-and-vine
canopy (hero), past the table seen from above (menu, tea), down to the patterned cement-tile floor
(visit, contact). It fits Mabsooth because the shop is a night terrace, open past midnight, and its own
photos are the canopy and a top-down plate on dark wood.
Signature moment: **the lanterns switch on.** On first paint the owner's canopy photo is dim and grey, then
fades up to full lantern pink over 1.4 s while the gold MABSOOTH lockup rises into place beneath it,
the way the sign sits under the vines at the bar.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, hours, the bilingual bar sign (MABSOOTH / مبسوط / CAFE & RESTO), palette from lanterns, walnut, vines, rattan and tiles; owner-1 (canopy, tiles) and owner-2 (top-down lamb shank on dark wood) as the only site photos. |
| impeccable | Persuade mode. The brief pins the world (lantern-lit terrace, high-contrast serif, palette), so per new-work "a brief-pinned direction beats the roll": concept-seed was not run (it also needs a project PRODUCT.md, which is out of bounds); mode-persuade rules applied instead; no question tool, so direction inferred from the brief alone. Calibration used to steer away from near-black-with-glow and cream-serif-terracotta ruts; face chosen off the default list; Full-palette colour strategy; one authored motion moment; craft-floor bans listed in §10. |

## 3. Palette (4–6 named colours)
Scene: guests check this on a phone in the evening, deciding where to sit tonight, often already under the
lanterns; every owner photo is at night. So the ground is dark, but it is the brown of the walnut tables,
never black. Strategy: **Full palette.** Walnut, vine, lantern and rattan each own whole sections; gold is
reserved for the wordmark, prices and the primary action.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `walnut` | #2A1914 | Page ground (hero, menu); matches the wood in owner-2 (#2E1C18) so the plate photo melts into the table | rattan on walnut 13.4:1 |
| `bark` | #3D261D | Second wood: "Kata mereka" ground, draft banner, image frames | rattan on bark 11.2:1, gold on bark 7.5:1 |
| `gold` | #E4B65F | Wordmark, prices, primary button fill, focus ring on dark | gold on walnut 8.9:1; walnut text on gold 8.9:1; **never on rattan (1.5:1)** |
| `lantern` | #7C2139 | Deep lantern-glass red: owns "Teh, kopi & shisha"; accents and focus ring on rattan | rattan on lantern 7.8:1, gold on lantern 5.2:1, lantern on rattan 7.8:1 |
| `vine` | #1D3A2B | Deep vine green: owns "Suasana" | rattan on vine 9.9:1, gold on vine 6.6:1 |
| `rattan` | #F1E4CA | Text on all dark grounds; ground of the floor zone (Kunjungi, Hubungi, footer) | walnut on rattan 13.4:1 |

Derived (not palette roles): `rattan-dim` #CDBB9C for secondary text on dark grounds (≥5.2:1 on walnut,
vine and lantern); tile line colour #A8977F on tile ground #E6D8BD (decoration only, no text on it).
Text selection: gold background, walnut text. Illustration fills use the real objects' colours (§6).

## 4. Type
Two families via `next/font/google`:
- **Aref Ruqaa 700** (`subsets: ["latin", "arabic"]`): wordmark, h2, h3, product names. A Latin + Ruqaa
  family: its wide, flared capitals echo the bar sign, and its Ruqaa Arabic sets مبسوط the way the sign's
  calligraphic line reads. No other face covers both halves of the lockup. One weight only.
- **Readex Pro** (variable, `subsets: ["latin"]`, use 400 and 500): body, lists, prices, hours, buttons, captions.
  Clean, wide, large x-height; reads well light-on-dark. Prices and times use `tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 1.6rem + 7.4vw, 8.5rem)` (54 px at 390, 132 px at 1440) | hero MABSOOTH only (one word, always one line: 6.2 em wide = 337 px at 390) |
| `--step-head` | `clamp(2.125rem, 1.6rem + 2.2vw, 3.5rem)` (34 / 56 px) | h2 section headings; مبسوط in the hero lockup |
| `--step-lead` | `clamp(1.3125rem, 1.15rem + 0.6vw, 1.625rem)` (21 / 26 px) | h3, product names, statements, hero line |
| `--step-body` | `clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)` (16 / 17 px) | running text, list items, prices, buttons, "CAFE & RESTO" |
| `--step-small` | `clamp(0.8rem, 0.77rem + 0.1vw, 0.85rem)` (12.8 / 13.6 px) | captions, "Hari ini" tag, chart ticks, banner |

Ratios at 390: 1.59, 1.63, 1.30, 1.26. At 1440: 2.36, 2.15, 1.53, 1.25. Line heights: display 1.0 (Aref Ruqaa has
a tall ascent; mind the Arabic line right below), head 1.12, lead 1.3, body 1.6, small 1.45. Display tracking
-0.01em; "CAFE & RESTO" uppercase Readex 500 at +0.32em, as on the sign. Body measure max 62ch.
The h1 is the lockup: `Mabsooth` (CSS uppercase), `<span lang="ar" dir="rtl" aria-hidden="true">مبسوط</span>`,
`Cafe & Resto`, so the accessible name reads "Mabsooth Cafe & Resto".

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12-column grid, 24px column gap |
| Page margins phone / desktop (`--gutter`) | 16px / 32px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices follow the dish name on the same baseline, 12px gap,
  no dotted leaders. Hours text sits 12px after the end of its own bar. Captions 8px under their photo.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Corners: 8px buttons, 12px photos and map. Full-bleed: hero canopy and tile floor only; section grounds are
  full-bleed colour, content stays in `<Container>`. More space above a heading than below it.

## 6. Products on the page
Four real products are shown, all items seen in the photos; only names flagged in the brief and all prices are [MOCKUP].
The menu section is the shop's table seen from above, so the illustrations share owner-2's top-down view.
1. **Lamb shank**: owner-2 photo, square crop (0, 700, 1600, 1600) exported 1200×1200. Lead visual of "Menu andalan".
2. **Rice bowl**: flat top-down illustration: dark stoneware bowl (#33393F rim, #2A2F34 inner), white rice,
   fried egg (one simple path, #FBF6EC, yolk #F0A830), beef pieces #5A2E1E, red pepper strips #C8321F, sesame dots.
3. **Lychee Tea**: top-down: wooden coaster ring #8A5A35, cut-glass rim drawn as a ring of crisp diamond
   facets, amber tea #C98A3A, white lychee #F3EADF on a bamboo skewer line #D9B98A, black straw dot.
4. **Teh Arab satu teko**: top-down: brass tray circle #B88A3E, silver teapot (#C9CDD2 body, #9EA4AB lid ring,
   spout and handle as simple shapes), four small tea glasses with amber tea. In "Teh, kopi & shisha".

Illustration rules: inline SVG, viewBox 240×240, flat fills, no outlines, no shading, no perspective, at most
~40 shapes each; one static `drop-shadow(0 8px 16px rgb(0 0 0 / .35))` so they sit on the wood like the plate.
Rendered 240px (desktop) / 120–280px (phone). Alt text names the dish ("Ilustrasi rice bowl dengan telur mata sapi").

## 7. Sections
Grounds in order: walnut → vine → walnut → lantern → bark → rattan → tile floor.

**Hero.** Purpose: recognition, today's hours, directions, all in the first screen. Content: canopy crop of
owner-1 (no faces), lockup, hero line [MOCKUP], today's hours (computed, Asia/Jakarta), two buttons.
```
Hero: phone (390)                    
+------------------------------+     
| draft banner (bark, 2 lines) |     
|[canopy-phone.jpg 390x277    ]|  crop (0,0,620,440): lantern cluster,
|[lanterns, vines, skyline;   ]|  vines, city lights; bottom 40% fades
|[ fades into walnut          ]|  into walnut (mask)
|          MABSOOTH            |  display 54px gold, overlaps fade by 64px
|           مبسوط               |  head 34px gold
|      C A F E & R E S T O     |  body caps, rattan
|   Teh, kopi, dan hidangan    |  lead 21px rattan [MOCKUP]
|   Timur Tengah di Condet     |
|  Buka hari ini 08.00–24.00   |  body; "08.00–24.00" in gold
| [Petunjuk Arah] [ WhatsApp ] |  2 x 171px, 48px tall; ends ~640px
+------------------------------+
```
```
Hero: desktop (1440)
+--------------------------------------------------------------------------+
| draft banner                                                             |
|[canopy-wide.jpg full bleed 1440x491, crop (0,0,1290,440): lanterns left ]|
|[and right, curtains, LED strip, skyline through the open sides;         ]|
|[bottom 40% fades into walnut                                            ]|
|                            M A B S O O T H                               |  132px gold, centred,
|                                 مبسوط                                     |  overlaps fade ~150px
|                          C A F E  &  R E S T O                           |
|               Teh, kopi, dan hidangan Timur Tengah di Condet             |  lead 26px
|                      Buka hari ini 08.00–24.00                           |
|                    [ Petunjuk Arah ]  [ WhatsApp ]                       |  ends ~840px
+--------------------------------------------------------------------------+
```
Centred column max 760px under a full-bleed photo: deliberately narrow, like the sign on the back wall.

**Suasana.** Purpose: the two moods. Content: terrace crop of owner-1 (760, 860, 530, 534): rattan chair and
patterned tiles in lantern light; terrace text; lounge text with no photo and no placeholder box (the checklist asks the owner for one); shisha line.
```
Suasana: phone (390)              Suasana: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Suasana              (h2)    |  | Suasana (h2, cols 1-5)          Duduk di teras di bawah lentera,  |
| Duduk di teras di bawah      |  |                                 atau di lounge yang sejuk. (lead) |
| lentera, atau di lounge yang |  | +-----------------------------+  Teras di bawah lentera (h3)      |
| sejuk.               (lead)  |  | | terrace-tiles.jpg           |  Kursi rotan, lantai tegel, lentera|
|[terrace-tiles.jpg 358x358   ]|  | | cols 1-5, square, 470px     |  Maroko di bawah tanaman rambat.  |
| Lantai tegel dan kursi rotan |  | |                             |  Paling ramai saat malam. (body)  |
| di teras.          (caption) |  | +-----------------------------+  ------------------------------    |
| Teras di bawah lentera (h3)  |  | Lantai tegel dan kursi rotan     Lounge ber-AC (h3)               |
| 3 lines body                 |  | di teras. (caption, 8px below)   Dinding kaca, sofa kulit. (body)  |
| ---------------------------- |  |                                  Shisha ada di teras dan lounge.  |
| Lounge ber-AC        (h3)    |  |                                  (text column cols 7-12)          |
| 2 lines + shisha line        |  +--------------------------------------------------------------------+
+------------------------------+
```

**Menu andalan.** Purpose: show the food. Content: lamb shank (photo), rice bowl and Lychee Tea (illustrations),
"Juga ada di menu" list [MOCKUP], one legend line.
```
Menu andalan: phone (390)         Menu andalan: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Menu andalan         (h2)    |  | Menu andalan (h2)                  Hidangan yang sering muncul di  |
| Hidangan yang sering muncul  |  |                                    meja kami. legend (small)      |
| di meja kami. legend (small) |  | +--------------------------+  +------------+    +------------+    |
|[lamb-shank.jpg 358x358      ]|  | |                          |  | rice bowl  |    | lychee tea |    |
| Lamb Shank  Rp 110rb         |  | | lamb-shank.jpg           |  | 240px      |    | 240px      |    |
| (h3 lead + gold body price)  |  | | cols 1-6, 580px square;  |  +------------+    +------------+    |
| kuah gelap, kentang tumbuk...|  | | wood melts into walnut   |  Rice bowl Rp 35rb  Lychee Tea Rp 25rb|
| [illus 120] Rice bowl        |  | +--------------------------+  2-3 lines body     2-3 lines body    |
|             Rp 35rb          |  | Lamb Shank  Rp 110rb          -------------------------------------|
|             3 lines body     |  | kuah gelap, kentang tumbuk,   Juga ada di menu (h3)               |
| [illus 120] Lychee Tea       |  | wortel, buncis... (46ch)      Nasi kebuli kambing Rp 55rb  Hummus  |
|             Rp 25rb          |  |                               Nasi mandhi ayam      dengan pita    |
|             3 lines body     |  |                               Nasi briyani          Mutabbal       |
| Juga ada di menu     (h3)    |  |                               Roti maryam kari      Falafel        |
| 7 items, body, one per line  |  |                               kambing   (two body columns, 6-12)  |
+------------------------------+  +--------------------------------------------------------------------+
```

**Teh, kopi & shisha.** Purpose: the tea ritual, calm; shisha one quiet column. Content: greeting [MOCKUP],
teapot illustration with "Teh Arab satu teko Rp 40rb", tea and coffee list, shisha note.
```
Teh, kopi & shisha: phone (390)   Teh, kopi & shisha: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Teh, kopi & shisha   (h2)    |  | +------------------------+   Teh, kopi & shisha (h2)               |
| Ahlan wa sahlan. Silakan     |  | | teapot + 4 glasses on  |   Ahlan wa sahlan. Silakan duduk,       |
| duduk, tehnya kami siapkan.  |  | | brass tray, 400px      |   tehnya kami siapkan. (lead)           |
|      [teapot illus 280]      |  | | cols 1-5               |                                         |
| Teh Arab satu teko  Rp 40rb  |  | +------------------------+   Teh & kopi (h3)     Shisha (h3)       |
| teko perak, gelas kecil      |  | Teh Arab satu teko Rp 40rb   Shai adeni          Ada di teras dan  |
| untuk satu meja. (body)      |  | Teko perak bergaya Arab,     Teh mint            lounge. Apel ganda,|
| Teh & kopi           (h3)    |  | gelas kecil untuk semua      Kopi Arab + kurma   mint, anggur,     |
| 5 items, body                |  | yang duduk. (body)           Lemon mint          blueberry.        |
| Shisha               (h3)    |  |                              Kopi dari bar       Mulai Rp 75rb     |
| 2 lines + flavours + price   |  |                              espresso            (cols 7-12)       |
+------------------------------+  +--------------------------------------------------------------------+
```

**Kata mereka.** Purpose: proof without quotes. Content: four paraphrased themes (highlighted in gold inside
one sentence), one paraphrase of the "best in Condet" review, "4,7 dari 240 ulasan Google", link to Maps.
```
Kata mereka: phone (390)          Kata mereka: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Kata mereka          (h2)    |  | Kata mereka (h2)            Tamu kami paling sering menyebut:      |
| Tamu kami paling sering      |  | 4,7 dari 240 ulasan Google  tempatnya nyaman, makanannya enak,     |
| menyebut: tempatnya nyaman,  |  | (body, 4,7 in gold)         harganya terjangkau, dan pelayanannya  |
| makanannya enak, harganya    |  | Lihat ulasan di Google Maps ramah. (lead, themes in gold, 34ch)    |
| terjangkau, pelayanan ramah. |  | (underlined link)           Seorang pelanggan tetap menyebutnya    |
| Seorang pelanggan tetap ...  |  | cols 1-4                    kafe bernuansa Arab terbaik di Condet. |
| 4,7 dari 240 ulasan Google   |  |                             (body, cols 6-12)                      |
| Lihat ulasan di Google Maps  |  +--------------------------------------------------------------------+
+------------------------------+
```

**Kunjungi kami.** Purpose: find it, know when. Content: address, "Buka setiap hari", hours chart (scale
06.00 to 02.00; Jumat and Sabtu bars run past the midnight tick), today's row marked, directions, map.
```
Kunjungi kami: phone (390)        Kunjungi kami: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Kunjungi kami        (h2)    |  | Kunjungi kami (h2)          Buka setiap hari (h3)                  |
| Jl. Raya Condet No.6,        |  | Jl. Raya Condet No.6,       Senin   [=========] 08.00–24.00        |
| Cililitan, Kramat Jati,      |  | Cililitan, Kramat Jati,     Selasa  [=========] 08.00–24.00        |
| Jakarta Timur 13640          |  | Jakarta Timur 13640         ...                                    |
| Buka setiap hari     (h3)    |  | [Petunjuk Arah] [WhatsApp]  Jumat   [==========] 08.00–01.00       |
| Senin  [======] 08.00–24.00  |  | cols 1-5                    Sabtu   [==========] 08.00–01.00 · Hari ini |
| ...                          |  |                             Minggu  [=========] 08.00–24.00        |
| Jumat  [=======] 08.00–01.00 |  |                                     08.00   24.00 01.00 (ticks)    |
| [Petunjuk Arah]              |  |                             (chart cols 7-12)                      |
|[map 358x280, radius 12      ]|  | [map embed, full container 1200x360, radius 12                   ] |
+------------------------------+  +--------------------------------------------------------------------+
```
Chart: full day names in a 76px (phone) / 110px (desktop) column; bars `lantern` on rattan, 12px tall; the time text
follows each bar's end at 12px, so the Jumat and Sabtu times sit further right. Today's row: bar `walnut`, day name 500
weight, "Hari ini" tag 8px after its time. The times are real text in a `<table>`; the bars are `aria-hidden`.

**Hubungi kami + footer.** Purpose: reach them, close the page. Content: group line [MOCKUP], three action rows,
closing line [MOCKUP], small lockup, address, draft note, tile floor band.
```
Hubungi kami: phone (390)         Hubungi kami: desktop (1440)
+------------------------------+  +--------------------------------------------------------------------+
| Hubungi kami         (h2)    |  | Hubungi kami (h2)               [ WhatsApp       0819-4744-4493 ]  |
| Datang rombongan, arisan,    |  | Datang rombongan, arisan, atau  [ Telepon        0819-4744-4493 ]  |
| atau makan malam keluarga?   |  | makan malam keluarga? Kabari    [ Petunjuk arah  Jl. Raya Condet]  |
| Kabari kami lewat WhatsApp.  |  | kami lewat WhatsApp. (cols 1-5) (rows 64px, cols 7-12)             |
| [WhatsApp  0819-4744-4493 ]  |  | ------------------------------------------------------------------ |
| [Telepon   0819-4744-4493 ]  |  | MABSOOTH مبسوط (small lockup)   Mabsooth artinya senang. Semoga    |
| [Petunjuk arah            ]  |  | Jl. Raya Condet No.6 ·          Anda pulang begitu. (lead, Aref)   |
| Mabsooth artinya senang.     |  | Draf mockup (small)                                                |
| Semoga Anda pulang begitu.   |  |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ tile floor band, full bleed, 120px ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒|
| small lockup, address, draft |  +--------------------------------------------------------------------+
|▒▒▒▒ tile floor band 72px ▒▒▒▒|
+------------------------------+
```
Tile: crisp SVG pattern of the grey-cream cement tile seen in the photos (square tile, central eight-point star
from two rotated squares, quarter circles in the corners that join into rings across tiles), 60px tiles desktop,
36px phone, #A8977F on #E6D8BD. Used once, here.

## 8. Motion
**Signature: "Lentera menyala"** (hero, on load, CSS keyframes so it runs from first paint and never waits on hydration).
- The canopy is two stacked copies of the same image: the base layer static with `filter: brightness(.38) saturate(.35)`;
  the top layer animates `opacity 0 → 1`, 1.4 s, delay 0.15 s, `cubic-bezier(0.45, 0, 0.2, 1)`. The lanterns appear to switch on.
- The lockup block (MABSOOTH + مبسوط + CAFE & RESTO as one unit) `opacity 0 → 1`, `translateY(14px → 0)`, 0.9 s,
  delay 0.35 s, `cubic-bezier(0.16, 1, 0.3, 1)`. No per-letter split.
- Hero line, hours and buttons are never animated: visible and usable from the first paint.
- Reduced motion: both animations removed; lit image and lockup at final state. JS off: the CSS still runs and all text is readable.

Supporting: one `<Reveal>` per section (Suasana, Menu andalan, Teh, Kata mereka, Kunjungi, Hubungi), 20px, 0.7 s,
ease-out, once. Buttons and action rows: colour change 180 ms ease-out, CSS. Nothing else moves: no parallax, no
lantern sway, no hover lifts on dishes. Lenis at starter defaults.
Tokens: `lib/motion.ts` adds `duration.lights = 1.4`, `duration.lockup = 0.9`; mirror them as CSS variables
`--dur-lights`, `--dur-lockup`, `--ease-lights`, `--ease-out-expo` in `globals.css`. Others stay at starter values.

## 9. What makes it this shop
1. The hero lockup is the bar sign itself: MABSOOTH over مبسوط over CAFE & RESTO, in a Latin + Ruqaa family, hung
   under the owner's own lantern canopy photo, which lights up on arrival.
2. The menu is Mabsooth's table seen from above: the owner's top-down lamb shank on its dark wood, joined by
   top-down drawings of the egg-topped rice bowl, the lychee tea on its wooden coaster and the silver teapot with small glasses.
3. The hours are drawn as bars, and on Jumat and Sabtu they run past the midnight tick. The page ends on the
   grey-cream cement tiles of the terrace floor.

## 10. Avoid
- "Arabian nights" kit: crescents, stars, domes, camels, genie lamps, arch-masked photos, mashrabiya on every edge.
  None of it is at Mabsooth. The tile appears once, at the floor. (The brief's lattice motif idea is replaced by the tile: both are
  in the photos, but the tile belongs to the floor this concept ends on.)
- The near-black-with-glow rut: no text-shadow glow on gold, no neon outlines, no radial "light" gradients. The glow is in the photo.
- Gradient or foil text on the wordmark; flat gold only.
- Eyebrow labels above headings, section numbers, a big "4,7" hero-metric block, rows of same-size icon cards.
- Smoking or shisha in the hero; shisha as a headline. Faces of guests: the hero crops stop above the heads.
- Calling the terrace a rooftop; quoting or attributing reviews; any customer photo (photo-1 to 3) on the site.
- Arabic anywhere but the lockup; splitting Arabic text into letters (breaks joining).
- Prices pinned to the far right with dotted leaders; menu items at heading size.
- Sketchy or shaded illustrations: the dishes are flat, top-down geometry or nothing.
- Concept-specific risks: the canopy source is only 1290px wide and already slightly upscaled at 1440, so cap the
  canopy box at 1440px and centre it on wider screens with walnut either side (above 1440px add a 64px left and right mask fade so there is no hard edge); the dim
  base layer must not linger (no delay over 0.2 s); too many dark sections in a row will feel heavy, so keep the vine
  and lantern sections as full colour fields, not tinted walnut.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.25 at 1440, body/small; lists at body, product names at lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline 12px after names, hours 12px after bars, captions 8px under photos)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero full-bleed photo plus narrow centred lockup; all others 5+7 or 6+6 splits; map full container)
- [x] At least 3 products shown (food and product shops): lamb shank photo, rice bowl, Lychee Tea, teapot with glasses
- [x] Within motion-rules.md (one signature moment, section-level reveals only, transform and opacity only, reduced motion means none, nothing waits)
- [x] Brief is decisions, not essays (2–4 pages)
