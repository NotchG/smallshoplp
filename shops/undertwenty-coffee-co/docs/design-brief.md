# Design brief: Undertwenty Coffee Co

Decisions only. Language on the page: Bahasa Indonesia, `lang="id"`. Every `[MOCKUP]` item renders with `data-mockup`.

## 1. Concept
**Masuk ke ruko.** The page walks you through the shop the way a visitor walks in: the brick front on Budaya, through the glass door into a raw-cement brew bar, then on into the night. That is Undertwenty's own story: small and ordinary from the street, serious about coffee inside, open until 01.00 (reviews 2, 4, hours, photos).
**Signature moment, "Mendekati pintu":** as the hero scrolls away, the owner's facade photo eases in toward the glass door with the UNDERTWENTY decal, and the cement-grey "inside" (the menu) takes over.

The scroll is a colour sequence, one field per section: **bata** (outside) → **semen** (inside) → **arang / kayu** (late) → **bata** (back out the door: contact) → **arang** footer.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name forms (UNDERTWENTY decal, U20 plate, "Coffee. Co" script); hours to 01.00 / 02.00; brick, black steel, cement, dark wood; the faceted glass (owner-2, photo-3); the brew kit on steel shelves (photo-1, reference only); owner-1 and owner-2 for the site. |
| impeccable | Persuade mode. The brief pins the world, so there's no concept roll; brief.md stands in for PRODUCT.md. It set: colour as page-scale fields; faces with a point of view rather than defaults; the first viewport as a thesis (facade + tonight's hours + action); one authored motion tied to the concept; and the two clusters to avoid (§10). |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `bata` | #A9532B | Hero and Hubungi ground. Brick, one shade deeper than the photo (#C57A4C) so white text passes | putih 4.83 ✓ AA body; arang plate edge 3.18 ✓ (UI ≥ 3). No arang or lampu **text** on bata |
| `semen` | #D3CFC6 | Menu and brew ground (raw cement wall) | arang 10.85 ✓; muted text #57534D 4.91 ✓; kayu 9.08 ✓ |
| `arang` | #1C1D1F | Ink on semen; night ground (larut, kunjungi, footer); plates and buttons | putih 15.37 ✓; muted #A8A39B 6.73 ✓; lampu 9.15 ✓ |
| `kayu` | #3A271D | Kata mereka ground; the counter band under the drinks | putih 12.86 ✓; lampu 7.65 ✓; muted #A8A39B 5.63 ✓ |
| `lampu` | #F0B45C | Lamplight: hours bars, the plate's closing time, rating figure, focus ring on dark grounds | on arang 9.15 ✓; arang text on lampu 9.15 ✓ |
| `putih` | #F7F4EE | Decal white: wordmark, text on brick and dark, primary button fill on dark | arang on putih 15.37 ✓ |

Strategy: full palette, fields own whole sections. No gradients, textures or brick patterns. Illustration-only fills (not tokens): daun #8C9A5B, kopi #4A2A18, krema #B87A3E, susu #EFE6D2. Focus ring: putih on bata, arang on semen, lampu on arang/kayu; 3px, offset 3px.

## 4. Type
**Archivo** (variable, `wght` + `wdth` axes) for all set text. **Yellowtail** (400) only for the "Coffee. Co" script, in the hero and the footer mark. Both via `next/font/google`, latin subset, `display: swap`.
Display and head: Archivo `font-stretch: 62.5%`, weight 800, uppercase, tracking 0.01em (echoes the U20 plate and the door decal). Lead: 100% width, 600 for names, 400 for statements. Body: 400. Small: 600; uppercase and tracked 0.06em for labels, sentence case for captions. Prices and times use `tabular-nums`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 0.5rem + 15vw, 10rem)` (≈62–160px) | "UNDERTWENTY" only: one line, `nowrap`, leading 0.9 |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.8vw, 4rem)` (36–64px) | section headings; the hero closing time; the "Coffee. Co" script |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem)` (22–28px) | tagline, statements, drink and method names, paraphrases, plate labels |
| `--step-body` | `clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)` (17–19px) | running text, menu list, prices, buttons |
| `--step-small` | `0.8125rem` (13px) | labels, captions, chart ticks, banner |

Ratios at 390 / 1440: display:head 1.82 / 2.5 · head:lead 1.65 / 2.29 · lead:body 1.29 / 1.47 · body:small 1.31 / 1.46, all ≥ 1.25.
Leading: display 0.9 (one line only), head 1.05, lead 1.3, body 1.55, small 1.4. If "UNDERTWENTY" overflows at 360px, lower the `vw` coefficient. Never let it wrap.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 768px) |

- Grid: 12 columns with a 24px gap from 1024px; one column under 768px; 768–1023px stacks like phone, with two-up rows where noted. Spacing scale 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Heading to content 24–32px; more space above a heading than below it.
- **Proximity:** a price follows its name with a 12px gap (no dot leaders running to a far edge). Drink and method names sit ≤ 16px under their drawing. Chart labels sit 8px above their bar. "Sedang buka" sits directly under the closing time. Photo captions sit ≤ 12px under the photo.
- **Frames:** photos and the map sit in an 8px arang frame (the steel window). On arang grounds the frame also gets a 1px putih/25% outer line. Square corners everywhere; 2px radius on buttons only.
- **Wide screens:** every section is a two-part composition at 1440 (wireframes in §7). The facade is never full-bleed (1010px source).

## 6. Products on the page
Four products in "Menu andalan", each shown as a picture:
1. **Es Kopi Susu U20** ([MOCKUP] name, Rp 20rb): owner-2.jpg, the real drink. Portrait 3:4, the largest image in the section.
2. **Green Tea Latte** ([MOCKUP] Rp 25rb): flat drawing of a white cup in 3/4 view, olive-green surface with a white rosetta.
3. **Manual brew (V60)** ([MOCKUP] Rp 25rb–35rb): flat drawing of a white V60 cone on a glass server of dark coffee.
4. **Espresso + susu kental manis** ([MOCKUP] name, no price shown): flat drawing of the small faceted glass, a pale condensed-milk layer under espresso and crema, on a white saucer.

Drawing style: flat fills from the palette plus the illustration fills, a 2px arang outline, no gradients or shadows, one shared 200×240 viewBox, each standing on the kayu counter band. Inline SVG. The brew kit (§7) is line-only, so drinks (filled) and equipment (outline) read as different things. The full menu below the counter is text at body size, all `[MOCKUP]`.

## 7. Sections
**Banner.** Draft notice, arang strip, small putih text: "Draf situs untuk ditinjau pemilik Undertwenty Coffee Co. Beberapa detail masih contoh sampai dikonfirmasi."
```
Banner: phone (390)
                       Banner: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|Draf situs untuk  |   |      Draf situs untuk ditinjau pemilik Undertwenty Coffee Co. ...  |
|ditinjau pemilik..|   +--------------------------------------------------------------------+
+------------------+   
```

**Hero (bata).** Recognition plus tonight's hours plus the action, in one screen. `h1` "Undertwenty" with "Coffee. Co" in script; tagline [MOCKUP]; owner-1 cropped (see TRD, Assets); the arang plate carries the live status, closing time and the buttons Petunjuk Arah (solid putih) and WhatsApp (outline putih, [MOCKUP]). Phone: the buttons must sit fully inside the 390×844 first screen. If they don't, crop the photo to 16:10.
```
Hero: phone (390)
                       Hero: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|UNDERTWENTY       |   | UNDERTWENTY  Coffee. Co            (one line, ~1090 of 1200px)     |
|        Coffee. Co|   | Kecil dari luar, serius soal kopi di dalam.            (lead)      |
|Kecil dari luar,  |   |                                                                    |
|serius soal kopi  |   | +=================================+  +---------------------------+ |
|di dalam.         |   | |                                 |  | HARI INI · JUMAT          | |
|+================+|   | | owner-1 facade, 4:3             |  | 10.00–01.00  (head, lampu)| |
||  facade 4:3    ||   | | cols 1-7, 8px arang frame       |  | ● Sedang buka             | |
||  steel frame   ||   | | zooms toward the door           |  |                           | |
|+================+|   | | on scroll                       |  | Budaya 69, Condet         | |
|+----------------+|   | |                                 |  |[Petunjuk Arah] [WhatsApp] | |
||HARI INI · JUMAT||   | |                                 |  +---------------------------+ |
||10.00–01.00     ||   | +=================================+                                |
||● Sedang buka   ||   |                                      arang plate, cols 8-12        |
||[Petunjuk][ WA ]||   +--------------------------------------------------------------------+
|+----------------+|   
+------------------+   
```

**Menu andalan (semen).** Show the drinks. Lead [MOCKUP] "Di balik pintu kaca itu: kopi susu, manual brew, dan green tea latte." Owner-2 photo with its caption; three drawings on the kayu counter; then four text groups: Kopi susu & espresso · Manual brew · Non-kopi · Camilan malam (all [MOCKUP]).
```
Menu andalan: phone (390)
                       Menu andalan: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|MENU ANDALAN      |   | MENU ANDALAN  (head, cols 1-6)   Di balik pintu kaca itu: kopi     |
|Di balik pintu... |   |                                  susu, manual brew... (lead 7-12)  |
|+================+|   | +==================+   [ill]          [ill]          [ill]         |
|| owner-2  3:4   ||   | | owner-2, 3:4     |   =========== kayu counter band ==========    |
||                ||   | | cols 1-5         |   Green Tea      Manual brew    Espresso +    |
|+================+|   | | (486 x 648)      |   Latte          V60            susu k.manis  |
|Es Kopi Susu U20  |   | |                  |   Rp 25rb        Rp 25rb–35rb   gelas bersegi |
|Berlapis Rp 20rb  |   | |                  |                                               |
|[ill] Green Tea   |   | |                  |   KOPI SUSU & ESPRESSO   MANUAL BREW          |
|      Latte Rp25rb|   | +==================+   Espresso  Rp 15rb      V60 · Japanese iced  |
|[ill] Manual brew |   | Es Kopi Susu U20  Rp 20rb ...           NON-KOPI · CAMILAN MALAM   |
|      Rp 25–35rb  |   | Kopi, susu, es; berlapis.    (list: cols 6-12, 2 x 2 groups)       |
|[ill] Espresso +  |   +--------------------------------------------------------------------+
|      susu k.manis|   
|KOPI SUSU & ESP.  |   
|Espresso Rp 15rb  |   
|... 4 groups      |   
+------------------+   
```

**Cara kami menyeduh (semen).** Prove "serious inside". Four line drawings (pour over, syphon, cold drip, French press) standing on a black steel shelf rail with two uprights, like the shelves behind the bar. One [MOCKUP] line under each. A body line (photos): "Di meja bar juga ada mesin espresso dan grinder."
```
Cara kami menyeduh: phone (390)
                       Cara kami menyeduh: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|CARA KAMI         |   | CARA KAMI          +--------------------------------------------+  |
|MENYEDUH          |   | MENYEDUH           |   [V60]     [Syphon]    [Drip]     [Press] |  |
|Satu meja bar,    |   | (head, cols 1-4)   | |========================================| |  |
|banyak cara.      |   |                    |   Pour      Syphon      Cold       French  |  |
|  [V60]  [Syph]   |   | Satu meja bar,     |   over                  drip       press   |  |
||================||   | banyak cara...     |   1 line each, under its object            |  |
|Pour over Syphon  |   | + espresso &       |   steel-frame shelf, cols 5-12             |  |
|1 line   1 line   |   |   grinder line     +--------------------------------------------+  |
|  [Drip] [Press]  |   +--------------------------------------------------------------------+
||================||   
|Cold drip French  |   
|1 line   press    |   
+------------------+   
```

**Ngopi sampai larut (arang).** The late hours as an object. Two lampu bars on a 10.00→02.00 axis: Senin–Jumat to 01.00, Sabtu–Minggu to 02.00, with a live "Sekarang" marker. Points: Free WiFi (photos) · nyaman duduk lama (review 2) · [MOCKUP] ngobrol sampai larut.
```
Ngopi sampai larut: phone (390)
                       Ngopi sampai larut: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|NGOPI SAMPAI      |   | NGOPI SAMPAI      SENIN–JUMAT · 10.00–01.00                        |
|LARUT             |   | LARUT             [##########################################   ]  |
|Buka sampai 01.00 |   | (head, cols 1-5)  SABTU–MINGGU · 10.00–02.00                       |
|tiap malam...     |   |                   [##############################################] |
|SENIN–JUMAT       |   | Buka sampai 01.00 10.00   14.00   18.00   22.00   00.00   02.00    |
|[############  ]  |   | tiap malam, 02.00                         | Sekarang 21.40         |
|SABTU–MINGGU      |   | Sabtu–Minggu.       (chart cols 6-12, lampu bars, live marker)     |
|[##############]  |   | · Free WiFi  · Nyaman duduk lama  · Ngobrol sampai larut           |
|10 14 18 22 00 02 |   +--------------------------------------------------------------------+
|· Free WiFi       |   
|· Nyaman duduk    |   
|  lama            |   
|· Ngobrol sampai  |   
|  larut           |   
+------------------+   
```

**Kata mereka (kayu).** Four paraphrased themes, no names: pilihan kopi, suasana, pelayanan, malam hari (reviews 1–4). "4,7 dari 216 ulasan Google" at lead size with "4,7" in lampu; caption "Dirangkum dari ulasan Google, bukan kutipan langsung."
```
Kata mereka: phone (390)
                       Kata mereka: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|KATA MEREKA       |   | KATA MEREKA        PILIHAN KOPI               SUASANA              |
|4,7 dari 216      |   | (head, cols 1-4)   Dari luar kelihatan kecil, Tempatnya nyaman,    |
|ulasan Google     |   |                    ternyata pilihan kopinya   enak duduk lama...   |
|dirangkum, bukan  |   | 4,7 dari 216       banyak... (lead)           (lead)               |
|kutipan           |   | ulasan Google                                                      |
|PILIHAN KOPI      |   |                    PELAYANAN                  MALAM HARI           |
|Dari luar kecil,  |   | Dirangkum dari     Kopinya enak, pelayanan-   Pas menghabiskan     |
|ternyata...       |   | ulasan Google.     nya ramah...               malam dengan kopi... |
|----------------  |   |                    (2 x 2, cols 5-12)                              |
|SUASANA           |   +--------------------------------------------------------------------+
|...               |   
|----------------  |   
|PELAYANAN ...     |   
|MALAM HARI ...    |   
+------------------+   
```

**Kunjungi kami (arang).** Find the door. Map, listing address, the full week, a Petunjuk Arah button, and **Patokan**: a crop of owner-1 showing the U20 plate and the decal door, with "Cari dinding bata oranye, papan hitam U20, dan pintu kaca bertuliskan UNDERTWENTY."
```
Kunjungi kami: phone (390)
                       Kunjungi kami: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|KUNJUNGI KAMI     |   | +===================================+  KUNJUNGI KAMI  (cols 8-12)  |
|Budaya 69, Condet |   | |                                   |  Budaya 69, Condet,          |
|Senin–Jumat       |   | |  Google map, 4:3, cols 1-7        |  Batu Ampar, Kramat Jati     |
| 10.00–01.00      |   | |  8px arang-on-arang frame:        |  Senin–Jumat   10.00–01.00   |
|Sabtu–Minggu      |   | |  1px putih/25% rule               |  Sabtu–Minggu  10.00–02.00   |
| 10.00–02.00      |   | |                                   |  Buka setiap hari            |
|Buka setiap hari  |   | |                                   |  [crop] Patokan: bata,       |
|[Petunjuk Arah]   |   | |                                   |  [U20+] papan U20, pintu     |
|+================+|   | |                                   |  [door] kaca UNDERTWENTY     |
||   map 1:1      ||   | +===================================+  [Petunjuk Arah]             |
|+================+|   +--------------------------------------------------------------------+
|[crop] Patokan:   |   
|[U20] bata, papan |   
|[door] U20, pintu |   
+------------------+   
```

**Hubungi kami (bata).** Act. Three arang plates, each with its label and detail on one line: WhatsApp 0856-9991-113 ([MOCKUP]), Telepon 0856-9991-113, Petunjuk Arah · Budaya 69. Lead copy [MOCKUP].
```
Hubungi kami: phone (390)
                       Hubungi kami: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|HUBUNGI KAMI      |   | HUBUNGI KAMI        (cols 1-6)  +-------------------------------+  |
|Mau tanya menu    |   |                                 | WhatsApp   0856-9991-113      |  |
|atau memastikan   |   | Mau tanya menu, biji yang lagi  +-------------------------------+  |
|masih buka?       |   | ada, atau memastikan kami masih | Telepon    0856-9991-113      |  |
|+----------------+|   | buka? Kabari saja.  (lead)      +-------------------------------+  |
||WhatsApp        ||   |                                 | Petunjuk Arah  Budaya 69      |  |
||0856-9991-113   ||   |                                 +-------------------------------+  |
|+----------------+|   |                                   arang plates, cols 7-12          |
||Telepon         ||   +--------------------------------------------------------------------+
|+----------------+|   
||Petunjuk Arah   ||   
|+----------------+|   
+------------------+   
```

**Footer (arang).** U20 plate mark (arang square, 1px putih/30% edge, "U20" in display style, "Coffee. Co" in Yellowtail), name, short address and hours, and the draft note again.
```
Footer: phone (390)
                       Footer: desktop (1440)
+------------------+   +--------------------------------------------------------------------+
|[U20 plate]       |   | [U20]  Undertwenty    Budaya 69, Condet,       Draf situs untuk    |
|Undertwenty       |   | plate  Coffee Co      Kramat Jati · setiap     ditinjau pemilik.   |
|Coffee Co         |   |                       hari 10.00–01/02.00    Detail masih contoh.  |
|Budaya 69, Condet |   |        (cols 1-4)     (cols 5-8)               (cols 9-12)         |
|Setiap hari 10.00 |   +--------------------------------------------------------------------+
|Draf situs ...    |   
+------------------+   
```

## 8. Motion
**Signature, "Mendekati pintu"** (job: orient, outside → inside). The facade `<img>` scales 1 → 1.10 inside its fixed frame (1 → 1.06 under 768px), `transform-origin: 81% 55%` (the door). It's a ScrollTrigger on the hero section, `start: "top top"`, `end: "bottom top"`, `scrub: 0.6`. No pin, no snap, nothing on load. The frame, the wordmark and the plate don't move. Reduced motion: no trigger, scale 1.
**Supporting:**
- One `Reveal` per section from Menu down, on the section's inner grid: 20px, 0.6s, `power2.out`, once. None in the hero; no per-card or per-icon staggers.
- The live hours text (hero plate) and the chart's "Sekarang" marker fade in over 0.2s after hydration. Reduced motion: they appear instantly.
- Buttons and plates: hover is an `::after` overlay fading in over 180ms (opacity 0 → 0.12; putih on dark grounds, arang on light), and press is `translateY(1px)` over 150ms. Link underlines are always visible, never animated.

Tokens (`lib/motion.ts`): `press 0.15`, `ui 0.18`, `reveal 0.6`. Replace `hero` with `door = { scale: 1.1, scalePhone: 1.06, origin: "81% 55%", scrub: 0.6 }`. `distance.reveal 20`. Lenis stays on starter defaults.

## 9. What makes it this shop
1. The hero is their own street front, rebuilt: UNDERTWENTY set like the door decal, "Coffee. Co" in the plate's script, the facade photo in a black steel frame, and a black U20-style plate that holds tonight's closing time and the directions button.
2. **Patokan:** because the place looks tiny and ordinary from the street (review 2), the visit section shows exactly what to look for, cropped from their own photo.
3. Late hours drawn as two lamplight bars ending at 01.00 and 02.00. The brew kit stands on a steel shelf like the one behind their bar, and the faceted glass from their own photos appears in the drawings.

## 10. Avoid
- **Category default:** the brown-and-cream coffee template; serif display; latte-art or bean stock imagery; beans scattered as decoration; a centred headline over three equal cards; icon tiles; rows of stars.
- **AI clusters:** heavy condensed caps plus black boxes plus hard offset shadows (neo-brutal). Our condensed type sits on flat fields: no shadows, no thick card borders, no tilted stickers. Also no near-black-plus-neon: lampu is flat lamp amber, never a glow.
- **Faux material:** no CSS brick pattern, cement texture, rivets, stencil fonts, Edison bulbs or grunge. The materials are colour fields and the one steel frame.
- **Soft door zoom:** cap the scale at 1.1 and serve the full 1010px crop.
- **Overclaiming:** no "roastery", "sangrai sendiri", "terbaik", "specialty", "paling laris", and no promise of a big space. Don't repeat the decal's "freshly roasted" as a claim.
- **Script creep:** Yellowtail appears only in the "Coffee. Co" mark.
- **Night too soon:** both semen sections must read as daytime inside before the arang fields begin.
- photo-1/2/3 never appear on the site. They informed the drawings only.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart (smallest gap 1.29 at 390); no list or label larger than its section heading (names and paraphrases at lead, lists at body; only the hero plate's time reaches head size, inside the hero)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices 12px after names, labels on their bars, plate details inline)
- [x] Every section has a desktop wireframe that uses the width on purpose (two-part compositions; facade never full-bleed)
- [x] At least 3 products shown: 4 (owner-2 photo plus 3 flat drawings)
- [x] Within motion-rules.md (one scrubbed transform-only signature, section reveals, 150–180ms responses, no React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages plus wireframes)
