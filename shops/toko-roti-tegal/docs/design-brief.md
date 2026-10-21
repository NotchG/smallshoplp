# Design brief: Toko Roti Tegal

## 1. Concept
**"Kantong Tegal":** the page is printed like the shop's own bread bag. "Toko Roti" sits over a big
dark-brown "Tegal" between orange scrolls, on the golden colour of a bun seen through clear film, and
every roti wears a handwritten flavour sticker. The owner sees their own bag before reading a word.
Signature moment: on load, today's opening hours are pressed onto the hero bag as one of those
handwritten stickers, the way staff label a "cok ju" bun.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The bag print (orange scrollwork, brown serif "Tegal"), the stickers "kacang"/"cok ju", the long wooden counter with glass cases and brown trays, the pink and red-orange gift boxes, the hours with the Sunday break, 4.4 from 305 reviews, and no dine-in and no founding year. |
| impeccable | Persuade mode. I weighed seven worlds: bag print, glass counter, handwritten stickers, kotak kue box, biscuit tins, toko signboard, nota book. The brief pins the bag and the counter, so the bag carries the page and the counter carries the kue. Taken from impeccable: page-scale colour (bun gold owns whole regions, not cream with a terracotta accent), a typeface outside the default list (Besley, a Clarendon revival, the old commercial-print serif), one authored motion moment taken from the product, a working first viewport. Not run: the concept-seed roll. Its launcher writes outside docs/, and a brief-pinned direction overrides the roll anyway. |

## 3. Palette (6 named colours)
Strategy: Committed. Bun gold owns the hero and the closing band, wood brown owns the tray and the counter, and pink owns the order section.
Scene: a regular on Matraman Raya checks a phone in daylight, so the page is light.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kulit` (bun crust) | #EDBE74 | Hero and Hubungi grounds, today-row highlight, rating pill | tinta on kulit 8.74 ✓ |
| `tinta` (bag ink) | #3A2015 | All text, "Tegal", primary button fill, focus ring, banner and footer ground | on kotak 14.68 ✓, kotak on tinta 14.68 ✓ |
| `kantong` (bag orange) | #D9531A | Scroll ornament and dividers only. Never text. | ornament only (3.94 on kotak, 2.35 on kulit) |
| `kayu` (counter/tray) | #6B3F27 | Roti tray panel, kue trays, counter band, hero tray lip | kotak on kayu 8.67 ✓, kulit on kayu 5.17 ✓ |
| `kotak` (box white) | #FFFCF6 | Reading ground, stickers, price tags, text on kayu/tinta | see above |
| `hati` (gift-box pink) | #F4BFCB | "Pesan kotak kue" ground | tinta on hati 9.42 ✓ |

Illustration-only tints (SVG constants, never UI): crust #C98B4A, crumb #F6DFA9, kuning #F2C94C,
pandan #8DB360, daun #5C8740. The focus ring is 2px tinta at 2px offset, or kotak on kayu.

## 4. Type
Besley (display/head, sticker hand) + Libre Franklin (body, buttons, tags), both via `next/font/google`, subset latin, `display: swap`.
Besley: variable 500–800, normal + italic. Libre Franklin: variable 400–600.
| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 2.25rem + 11vw, 10.5rem)` (80→168px) | "Tegal" in the hero only, Besley 800, leading 0.9 (always one word, one line) |
| `--step-head` | `clamp(1.875rem, 1.35rem + 2.1vw, 2.875rem)` (30→46px) | Section h2, Besley 700, leading 1.1 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.55vw, 1.75rem)` (23→28px) | Statements, "Toko Roti" (Besley italic 500), featured roti name, sticker time, h3 |
| `--step-body` | `1.125rem` (18px) | Running text, buttons, product names, sticker labels (Besley italic 500), hours rows |
| `--step-small` | `0.875rem` (14px) | Captions, bag small print, "Hari ini" tag, review note |

Ratios checked at 390/768/1024/1440: small→body 1.29, body→lead ≥1.28, lead→head ≥1.30,
head→display ≥2.67. Body leading 1.55, lead 1.3, measure ≤ 62ch. The rating "4,4" is set at
lead size, never larger.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at ≥768 / 40px at ≥1024 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** stickers sit on their own bag. Tag cards sit 8–12px under their tray. The price sits on the same line as the name. "Hari ini" sits 8px after the time. Hours times follow a fixed 7.5rem day column, never right-aligned to a far edge.
- **Wide screens:** every section at 1440 is two-zone (5/7, 4/8 or 6/6 columns) or a full-width tray/case. Only the hero centres, as the bag face does, and the flanking buns fill its sides.
- **Lists:** roti and kue names at `--step-body`. Featured roti name at `--step-lead`. Never larger.
- **Spacing and corners:** 4px base (4–64). Heading to content 24–32px. Corners: trays 24px, map 16px, buttons 10px, glass case and stickers 6px, tag cards 4px.
- **Buttons:** min height 52px. Primary is tinta fill with kotak text. Secondary is a 2px tinta border.

## 6. Products on the page
No owner photos yet, so every product is a flat SVG illustration: max 3 tones per object, no outlines, no faces, no gloss gradients.
- **Roti (7):** bagged buns on the Roti tray, each a bun under clear film (kotak at 30% opacity with white crinkle lines), with a mini orange scroll and "Tegal" print and an HTML sticker naming it. Roti cokelat (featured, large, chocolate shavings) · cok ju (shavings and cheese) · kacang (peanut halves) · keju (grated cheese) · pisang cokelat (folded, banana edge) · srikaya (pandan swirl) · abon (brown floss).
- **Kue (6):** three pieces per brown tray in the glass case, each with a tag card. Pastel (crimped half-moons) · risoles (crumbed rolls) · lemper (banana-leaf parcels) · kue lumpur (yellow cakes in paper cups) · dadar gulung (green crepe rolls) · bolu pandan gulung (green-white spiral slices).
- **Pesan:** an open white kotak kue holding pastel, lemper, kue lumpur and risoles, with a jar of nastar and two orange octagonal gift boxes with a kotak lattice pattern behind.
- **Hero:** two bagged buns, "kacang" (left) and "cok ju" (right).
Every illustration has `role="img"` and an Indonesian `aria-label`. [MOCKUP] items get `data-mockup`.

## 7. Sections
```
Hero (the bag): phone (390)     Hero: desktop (1440)
+----------------------+        +------------------------------------------------------+
| draft banner (tinta) |        | draft banner (tinta)                                 |
|||||| seal crimp ||||||        ||||||||||||||||||||| heat-seal crimp, 12px ||||||||||||
| kulit ground         |        | kulit ground, full bleed                             |
|  ~~ scroll crest ~~  |        |          ~~~~ orange scroll crest, 720px ~~~~        |
|  Toko Roti (lead it.)|        |           Toko Roti (lead, italic)                   |
|  TEGAL (80px)        |        |           T E G A L  (display 168px)                 |
|  ~~ scroll base ~~   |        |          ~~~~ orange scroll base ~~~~                |
|  Jl. Matraman Raya   |        |     Jl. Matraman Raya No. 68 · (021) 8580766 (small) |
|  No. 68 · (021)...   |        | +--------+  Roti dan kue rumahan di      +--------+  |
|  Roti dan kue rumah- |        | | bun    |  Jalan Matraman Raya. (lead)  | bun    |  |
|  an di ... (lead)    |        | | /kacang|  /Buka hari ini 07.00-19.00/  | /cok ju|  |
|  /Buka hari ini     /|        | | 280px  |  [Petunjuk Arah] [Telepon]    | 240px  |  |
|  /07.00-19.00       /|        | +--------+                               +--------+  |
|  [Petunjuk][Telepon] |        |=================== tray lip (kayu, 20px) ===========|
|  (bun)       (bun)   |        +------------------------------------------------------+
|== tray lip (kayu) ===|        Below 1024 the buns move into a cropped row under the
+----------------------+        buttons, as on the phone.
```
Purpose: recognition and the first actions. Content column max 36rem, centred. The bag's small
print line is real links (maps, tel:).

```
Roti kami: phone                Roti kami: desktop
+----------------------+        +------------------------------------------------------+
| Roti kami (head)     |        | Roti kami (head)          Rasa yang sama, dari dulu  |
| Rasa yang sama...    |        | cols 1-5                  sampai sekarang. (lead)    |
| body, 2-3 lines      |        |                           body, cols 7-12            |
| +------------------+ |        | +--------------------------------------------------+ |
| | TRAY (kayu)      | |        | | TRAY (kayu, 5-col grid, gap 24)                   | |
| | [big bun        ]| |        | | +-------------+ +-------+ +-------+ +-------+    | |
| | [ /cokelat/     ]| |        | | | big bun     | |/cok ju| |/kacang| |/keju/ |    | |
| | Roti cokelat ·   | |        | | | /cokelat/   | +-------+ +-------+ +-------+    | |
| |   Rp 8rb (lead)  | |        | | | Roti coke-  | +-------+ +-------+ +-------+    | |
| | Pelanggan lama...| |        | | | lat · Rp 8rb| |/pisang| |/srika-| |/abon/ |    | |
| | [cok ju][kacang] | |        | | | Pelanggan...| | cok./ | |  ya/  | |       |    | |
| | [keju  ][pisang] | |        | | +-------------+ +-------+ +-------+ +-------+    | |
| | [srikaya][abon ] | |        | +--------------------------------------------------+ |
| +------------------+ |        +------------------------------------------------------+
+----------------------+
```
Purpose: the buns, chocolate first. Ground kotak. Featured spans 2 cols × 2 rows. Caption text on the tray is kotak.

```
Kue tradisional: phone          Kue tradisional: desktop
+----------------------+        +------------------------------------------------------+
| Kue tradisional      |        | Kue tradisional  | GLASS CASE (tinta/20 frame, 6px)  |
| lead                 |        | (head) cols 1-4  | [tray]      [tray]      [tray]    |
| [Kue basah mulai     |        | lead             | pastel ·    risoles     lemper    |
|  Rp 4rb] tag         |        | [Kue basah mulai | Rp 6rb (one tag, one line)        |
| +------------------+ |        |  Rp 4rb] tag     | ------- glass shelf line -------- |
| |[tray]   [tray]   | |        |                  | [tray]      [tray]      [tray]    |
| |pastel ·  risoles | |        |                  | kue lumpur  dadar gulung  bolu    |
| |Rp 6rb (same tag) | |        |                  |                       pandan g.   |
| |[tray]   [tray]   | |        |                  +-----------------------------------|
| |lemper   kue lumpr| |        |========= counter front: kayu band 56px + rail =======|
| |[tray]   [tray]   | |        +------------------------------------------------------+
| |dadar g. bolu p.g.| |
| +------------------+ |
|=== counter (kayu) ===|
+----------------------+
```
Purpose: the glass counter. Ground kotak. The counter band is full bleed, with a kotak/50 1px rail line 12px below its top.

```
Pesan kotak kue: phone          Pesan kotak kue: desktop
+----------------------+        +------------------------------------------------------+
| hati ground          |        | hati ground                                          |
| [illustration: open  |        | +------------------------+  Pesan kotak kue (head)   |
|  kotak kue, nastar   |        | | open kotak kue with 4  |  lead (2 lines)           |
|  jar, 2 gift boxes;  |        | | kue; nastar jar; two   |  Kotak kue (lead)         |
|  240px tall]         |        | | octagonal gift boxes   |  pesan sehari sebelumnya, |
| Pesan kotak kue      |        | | cols 1-6               |  mulai Rp 20rb (body)     |
| lead                 |        | |                        |  Kue kering hari raya     |
| Kotak kue (lead)     |        | |                        |  nastar, kastengel, ...   |
| body + Rp 20rb       |        | +------------------------+  [Telepon untuk pesan]    |
| Kue kering hari raya |        +------------------------------------------------------+
| [Telepon untuk pesan]|
+----------------------+
```
Purpose: event and holiday orders ([MOCKUP], whole section `data-mockup`).

```
Kata mereka: phone              Kata mereka: desktop
+----------------------+        +------------------------------------------------------+
| Kata mereka (head)   |        | Kata mereka (head)    | ~ Roti cokelatnya dibeli...  |
| (4,4 · 305 ulasan    |        | (4,4 · 305 ulasan     | ~ Banyak pilihan kue dan...  |
|  Google) kulit pill  |        |  Google) pill         | ~ Tempat legendaris di...    |
| ~ line 1 (lead)      |        | cols 1-4              |   (lead, cols 6-12, 1px      |
| ~ line 2             |        |                       |    tinta/15 rules between)   |
| ~ line 3             |        |                       | Diringkas dari ulasan Google |
| Diringkas... (small) |        |                       | (small)                      |
+----------------------+        +------------------------------------------------------+
```
Purpose: short proof. A small orange scroll mark (`~`) leads each line. No quote marks, names, stars or cards.

```
Kunjungi kami: phone            Kunjungi kami: desktop
+----------------------+        +------------------------------------------------------+
| Kunjungi kami (head) |        | Kunjungi kami (head)                                 |
| Jl. Matraman Raya    |        | +------------------------------+  Jl. Matraman Raya  |
| No. 68, ... (body)   |        | | Google Maps iframe           |  No. 68, Kebon      |
| [Petunjuk Arah]      |        | | cols 1-7, 4:3, radius 16,    |  Manggis... (body)  |
| Jam buka (lead)      |        | | lazy                         |  [Petunjuk Arah]    |
| Senin  07.00-19.00   |        | |                              |  Jam buka (lead)    |
| ...  (today: pill)   |        | |                              |  Senin 07.00-19.00  |
| Minggu 08.00-13.00   |        | |                              |  ... today: kulit   |
|        16.00-19.00   |        | |                              |  pill + Hari ini    |
|   tutup 13.00-16.00  |        | |                              |  Minggu 08-13/16-19 |
| [map 1:1]            |        | +------------------------------+  cols 9-12          |
+----------------------+        +------------------------------------------------------+
```
Purpose: getting there and when. An orange scroll divider separates it from Kata mereka.

```
Hubungi kami + footer: phone    Hubungi kami + footer: desktop
+----------------------+        +------------------------------------------------------+
| kulit ~ scroll ~     |        | kulit           ~~~~ orange scroll ~~~~              |
| Hubungi kami (head)  |        | Hubungi kami (head)       |  Telepon (small)         |
| lead                 |        | Mau tanya roti hari ini   |  (021) 8580766 (lead)    |
| Telepon (small)      |        | atau pesan kotak kue?     |  [Telepon][Petunjuk Arah]|
| (021) 8580766 (lead) |        | Telepon saja. cols 1-6    |  WhatsApp menyusul (sm.) |
| [Telepon][Petunjuk]  |        +------------------------------------------------------+
| WA menyusul (small)  |        | tinta footer: Toko Roti Tegal · address · phone ·    |
+----------------------+        | Ini adalah draf tampilan, belum resmi.  (small)      |
| tinta footer         |        +------------------------------------------------------+
+----------------------+
```
Purpose: close with the call. The gold band bookends the hero.

## 8. Motion
**Signature, "Stiker hari ini" (hero sticker):**
- What happens: after hydration, the sticker's text switches from the weekly summary to today's hours (Asia/Jakarta). The sticker then presses on: y −14→0px, scale 1.1→1, rotate −9°→−3°, opacity 0→1.
- Timing: 0.5s, 0.15s delay, `expo.out`, once.
- Its job: it focuses the eye on the most useful fact and hides the text swap.
- Reduced motion: the text swaps instantly and the sticker sits at −3°. With JS off, the weekly summary shows at final state.
- Hero text and buttons never animate.

**Supporting:**
- One `Reveal` per section content block: Roti tray, Kue case, Pesan, Kata mereka lines, Kunjungi, Hubungi. 20px, 0.7s, `power2.out`, once. No per-item stagger.
- Button hover: translateY −1px plus an overlay opacity 0→0.12, 150ms. Press: scale 0.98.
- Lenis: starter defaults.

Motion tokens: `duration.hero = 0.5`, `delay.hero = 0.15`. The rest are starter values.

## 9. What makes it this shop
1. The hero *is* the Tegal bread bag: "Toko Roti" over a huge brown "Tegal" between orange scrolls, a heat-seal crimp at the top, and the address and phone as the bag's small print, on bun gold.
2. Handwritten flavour stickers, the shop's own labelling habit, carry today's hours and every roti name in the shop's shorthand ("cok ju", "kacang").
3. The kue sit on brown trays in a glass case on a long wooden counter with a chrome rail, labelled on printed tag cards like photo-1. The pink of the shelf gift boxes owns the order section.

## 10. Avoid
- The default bakery look: cream paper, an italic high-contrast serif, a terracotta accent. Gold is the bun, not paper. Orange is ornament ink, never text.
- Western "artisan" tropes: wheat icons, flour dust, kraft paper, chalkboards, script display fonts, croissant or sourdough imagery.
- Dine-in or seating, "fresh daily" as a claim, "sejak 1968", star icons, reviewer names, quote marks.
- Over-ornament: scrolls only at the hero crest and base, the Kunjungi divider and the Hubungi top. Never behind body text.
- Poster syndrome: the bag hero must work. Small print is links, buttons look like buttons, and the next section starts as a section.
- Cute mascots, faces on buns, 3D or glossy gradients, generic icon tiles.
- A sticker rotated past −4°, or sticker text below `--step-body`.
- Equal card rows with icons, or a narrow centred column for every section at 1440.
- If the gold drench reads muddy next to the orange scrollwork, raise the scroll stroke to 2px. Do not darken the gold.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): 7 roti + 6 kue + kotak kue scene
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced = none)
- [x] Brief is decisions, not essays (2–4 pages)
