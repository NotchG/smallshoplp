# Design brief: Bonjur Cafe & Resto

## 1. Concept
The page hangs under Bonjur's own terrace awning (red roof strip, royal-blue and white stripes,
one scallop per stripe) and runs from a bright morning to a string-lit night, the way a family
day at this all-day garden resto does.
Signature moment: on load, the little red-white-blue Bonjur balloon floats along an
awning-striped bar of today's opening hours (one striped scallop per hour, 07.00 to closing)
and stops at the current Jakarta time, next to "Buka sekarang · tutup 22.00".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Brand red, white and royal blue (balloon, banner, awnings); script wordmark; hours 07.00–22.00, 23.00 at weekends; "Komp. Billy Moon" wayfinding; beef teriyaki, the rooftop, family and parking themes; owner-1 (hero) and owner-2 (spaces) usable; owner-3 is logo reference only; photo-1 (fries basket) and photo-3 (balloon at night) used as drawing reference only. |
| impeccable | Persuade mode. World built from the shop's own artefacts: awning chosen over the literal balloon (demoted to a marker), the vinyl spanduk banner, the laminated menu book, the order slip, string lights and floor tiles. Full-palette colour owns whole regions. Fonts kept off its default list. The cream-serif-terracotta look and the dark-overlay photo hero are refused. Motion is one authored focal moment that has a job. |

impeccable's launcher, concept-seed roll and surface-brief scripts were not run: they write to
`.impeccable/` and need an interactive browser round. Its method was applied by hand.
Physical scene: a parent checks a phone in daylight before a weekend outing, so the page is
light; it turns dark only for the night section.

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` Putih Tenda | #FBFAF6 | page ground (day), awning white, text on dark | ink on paper 16.3:1 |
| `blue` Biru Bonjur | #1F3A8F | wordmark, h2 on light, awning stripes, menu section ground | on paper 9.8:1; paper on blue 9.8:1 |
| `red` Merah Balon | #C8322A | primary buttons, "CAFE & RESTO", awning roof strip, balloon band | white on red 5.3:1; red on paper 5.1:1 |
| `ink` Malam | #131A3A | body text, night section ground, banner | paper on ink 16.3:1 |
| `amber` Lampu | #F2B544 | string-light bulbs, midday panel ground, prices on blue, weekend row at night | ink on amber 9.3:1; amber on blue 5.6:1; amber on ink 9.3:1 |
| `green` Dinding Hijau | #2C5A35 | family section ground, "Ruang kaca" tile | paper on green 7.7:1 (no amber text on green: 4.4:1) |

Derived tints, not new colours: `muted` #4A5170 (secondary text on paper, 7.4:1), `blue-soft`
#C9D3F0 (secondary text on blue 6.8:1 and on ink 11.4:1), `tile` #F1ECE1 (morning panel; ink 14.4:1).
Strategy: full palette, with colour taking whole regions. Blue, green and ink each take one
full-bleed section, with paper in between. Red is kept for actions and the brand marks.

## 4. Type
Yellowtail 400 (only for the "Bonjur" wordmark: a retro connected script close to the shop's
banner logo) + Rubik variable 400–700 (everything else: sturdy, rounded corners, friendly).
Both through `next/font/google`, `subsets: ["latin"]`, `display: "swap"`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 3rem + 9vw, 10.5rem)` (83px @390, 168px @1440) | hero wordmark "Bonjur" only (Yellowtail, one word, one line) |
| `--step-head` | `clamp(2.125rem, 1.6rem + 2.4vw, 3.5rem)` (35px / 56px) | section h2, Rubik 700, sentence case |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)` (22px / 27.8px) | greeting, "CAFE & RESTO" (700, caps, +0.06em), h3s, review paraphrases, "Komp. Billy Moon" |
| `--step-body` | `clamp(1.0625rem, 1.02rem + 0.15vw, 1.125rem)` (17px / 18px) | running text, menu items, hours rows, buttons (600) |
| `--step-small` | `0.8125rem` (13px) | captions, bar time labels, "Harga contoh", footer |

Ratios @390: 2.37 / 1.59 / 1.29 / 1.31; @1440: 3.0 / 2.0 / 1.55 / 1.38. Display leading 0.9
(one word); give "Cafe & Resto" `margin-top: 0.12em` so the j descender clears. Head 1.1, lead
1.3, body 1.55. No tracked mono labels, no italics. Body measure max 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥1024px; 28px from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

Spacing scale 4/8/12/16/24/32/48/64. 12-column grid at ≥1024px, gap 32px. Corners are square
(the awning world); buttons are pills, 48px tall. No drop shadows anywhere.
- **Proximity:** "mulai Rp 35rb" sits inline after its category h3, 12px away. Hours times sit
  in a fixed 9rem day column, never at the far edge. Captions sit 8px under their photo, and
  bar labels 6px under the bar.
- **Wide screens:** every section below is a 2-part or 3-part composition at 1440 (see §7).
- **Lists:** menu items at `--step-body`, category names at `--step-lead`.

## 6. Products on the page
Owner photos show no food, so the products are flat illustrations: 3–5 fills, no outlines, a
3/4 top-down view, drawn on their section ground. All are shown, not just named:
1. **Beef Teriyaki** (review 3): rice bowl, glazed beef slices, sesame, spring onion. Large, menu feature.
2. **French Fries & Onion Rings** (photos): wire-mesh basket of fries, white dish of battered rings, cup with ketchup and mayo. Heads "Camilan".
3. **Kopi** (review 4): white cup and saucer with a blue rim. Heads "Kopi & minuman".
4. **Bubur ayam** [MOCKUP, `data-mockup`]: bowl with shredded chicken, cakwe and crackers, in the "Pagi" panel.
Alt text names the dish and says "ilustrasi". Owner food photos replace these later (checklist).

## 7. Sections
**Hero.** Recognition, today's hours, directions. The awning valance runs full-bleed under the
banner (red 10/14px, stripes 22/30px, stripe width 24/32px, scallop per stripe). The photo bleeds
to the right viewport edge on desktop, its top tucked under the scallops. h1 = "Bonjur" +
"Cafe & Resto".
```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +-----------------------------------------------------------+
| Draf mockup ...      |   | Draf mockup untuk Bonjur Cafe & Resto ...                 |
|//////// red ////////|   |/////////////////////////// red ////////////////////////////|
||B|W|B|W|B|W|B|W|B|W||   ||B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B|W|B||
| U U U U U U U U U U  |   | U U U U U U U U U U U U U U U U U U U U U U U U U U U U U |
| Bonjur   (script 83) |   |   Bonjur  (script 168, blue)     |[ owner-1.jpg          |
| CAFE & RESTO (red)   |   |   CAFE & RESTO (lead, red caps)  |[ glass dining room,   |
| Bonjur! Sarapan sudah|   |   Bonjur! Sarapan sudah siap     |[ cols 6-12 + bleed    |
| siap dari jam 7.     |   |   dari jam 7. (lead)             |[ to right edge, 4:3,  |
| Komp. Billy Moon,    |   |   Komp. Billy Moon, Pondok       |[ ~620px tall          |
| Pondok Kelapa        |   |   Kelapa · Jakarta Timur (body)  |[                      |
| Hari ini Kamis       |   |   Hari ini Kamis · 07.00-22.00   |[                      |
| 07.00-22.00          |   |          (o) balloon             |[                      |
|      (o)             |   |   [|B|W|B|W|B|W|B|W|B|W|B|W|B|]  |[                      |
| [|B|W|B|W|B|W|B|W|]  |   |   07.00                 22.00    |[                      |
| 07.00         22.00  |   |   Buka sekarang · tutup 22.00    |[                      |
| Buka sekarang ...    |   |   [Petunjuk Arah] [Telepon]      |  Ruang makan berdinding|
| [Petunjuk Arah][Telp]|   |   Lihat menu ↓                   |  kaca (small caption)  |
| [owner-1 full bleed] |   +-----------------------------------------------------------+
+----------------------+    text column cols 1-5; day bar is the column's full width
```

**Dari pagi sampai malam.** It's open all day, every day. Three panels sit edge to edge as one
strip (no gaps, no shadows), coloured by time of day: tile, amber, ink.
```
Dari pagi: phone           Dari pagi: desktop
+----------------------+   +-----------------------------------------------------------+
| Dari pagi sampai     |   | Dari pagi sampai malam (h2)   Buka setiap hari mulai jam 7 |
| malam (h2)           |   |                               pagi. (lead, cols 7-12)      |
| Buka setiap hari ... |   | +-----------------+-------------------+------------------+ |
| +------------------+ |   | | Pagi mulai 07.00| Siang             | Malam s/d 22.00  | |
| | Pagi mulai 07.00 | |   | | Sarapan dulu    | Makan siang bareng| Sabtu-Minggu     | |
| | bubur, uduk ...  | |   | | bubur ayam, nasi| keluarga: Beef    | s/d 23.00        | |
| |    [bubur ill.]  | |   | | uduk, roti bakar| Teriyaki & makan- | o  o  o  o bulbs | |
| +------------------+ |   | | kopi susu       | an berat lainnya  | lampu taman,     | |
| | Siang ... menu ↓ | |   | |   [bubur ill.]  | Lihat menu ↓      | rooftop terbuka  | |
| +------------------+ |   | +-----------------+-------------------+------------------+ |
| | Malam s/d 22.00  | |   |    tile               amber               ink             |
| | o o o rooftop    | |   +-----------------------------------------------------------+
+----------------------+
```

**Menu andalan.** Real food, Beef Teriyaki first. Full-bleed blue ground; the bottom edge is
blue scallops hanging into the next section (the valance's second and last appearance).
```
Menu: phone                Menu: desktop
+----------------------+   +-----------------------------------------------------------+
| Menu andalan (h2)    |   | [ Beef Teriyaki        ]  Menu andalan (h2, paper)        |
| Pilihan pertama: Beef|   | [ illustration          ]  Pilihan pertama: Beef Teriyaki, |
| Teriyaki ... (lead)  |   | [ cols 1-5, ~440px      ]  kata tamu enak banget. (lead)   |
| [Beef Teriyaki ill.] |   | [                       ]  Makanan berat  mulai Rp 35rb    |
| Makanan berat        |   | [                       ]  Beef Teriyaki · Chicken Katsu · |
|  mulai Rp 35rb       |   |                            Ayam Geprek · Nasi Goreng Bonjur|
| Beef Teriyaki ...    |   | [fries ill.] Camilan  mulai Rp 20rb | [kopi ill.] Kopi &   |
| [fries basket ill.]  |   |  ~180px      French Fries, Onion    |  ~180px     minuman  |
| Camilan mulai 20rb   |   |              Rings, Pisang Goreng...|  mulai Rp 22rb, Kopi.|
| [kopi ill.]          |   |   (cols 1-6: art left, list right)  |   (cols 7-12)        |
| Kopi & minuman ...   |   | Harga contoh. (small)                                     |
| U U U U U U U U U U  |   | U U U U U U U U U U U U U U U U U U U U U U U U U U U U U |
+----------------------+   +-----------------------------------------------------------+
```

**Ruang di Bonjur.** Let visitors picture where they'll sit. Photo plus three tiles coloured by mood.
```
Ruang: phone               Ruang: desktop
+----------------------+   +-----------------------------------------------------------+
| Ruang di Bonjur (h2) |   | Ruang di Bonjur (h2)            Pilih sudut favoritmu.(lead)|
| Pilih sudut ...      |   | [ owner-2.jpg, terrace       ] | Ruang kaca (h3)  green  |
| [owner-2.jpg 4:3]    |   | [ cols 1-7, 4:3, ~690x520    ] | dinding hijau, kristal  |
| Teras depan: tenda...|   | [                            ] |-------------------------|
| [Ruang kaca  green ] |   | [                            ] | Taman (h3)       tile   |
| [Taman       tile  ] |   | [                            ] | rumput, lampu gantung   |
| [Rooftop     ink   ] |   | Teras depan: tenda garis-garis,|-------------------------|
+----------------------+   | pot palem (caption, 8px below) | Rooftop (h3)  ink, o o o|
                           +-----------------------------------------------------------+
```

**Seru untuk keluarga** [MOCKUP: still there]. Reassure parents. Green full-bleed. Rendered only
when `family.show` is true. Spot icons (rabbit, fish, car) are 64px, paper and amber, simple shapes.
```
Keluarga: phone            Keluarga: desktop
+----------------------+   +-----------------------------------------------------------+
| Seru untuk keluarga  |   | Seru untuk keluarga (h2)  | (rabbit)   | (fish)   | (car)  |
| Ajak keluarga ...    |   | Ajak keluarga: anak-anak  | Area kelinci| Kolam   | Parkir |
| (rabbit) Area kelinci|   | lihat kelinci & ikan,     | (h3) + line | ikan    | luas   |
| (fish)   Kolam ikan  |   | parkir tenang. (lead)     |             |         |        |
| (car)    Parkir luas |   |  cols 1-5                 |   cols 6-12, three equal items  |
+----------------------+   +-----------------------------------------------------------+
```

**Kata mereka.** Social proof, paraphrased. Paper ground. Each statement has a 24px red rule
above it. No quotation marks, names or stars.
```
Kata: phone                Kata: desktop
+----------------------+   +-----------------------------------------------------------+
| Kata mereka (h2)     |   | Kata mereka (h2)    | —                   | —               |
| 4,4 di Google ·      |   | 4,4 di Google ·     | Rooftop-nya terbuka,| Bersih, pelayan-|
| 546 ulasan (lead)    |   | 546 ulasan (lead)   | tenang, cantik malam| an & parkir baik|
| — Rooftop-nya ...    |   |   cols 1-4          | —                   | —               |
| — Bersih, ...        |   |                     | Beef teriyaki-nya   | Suasana enak,   |
| — Beef teriyaki ...  |   |                     | enak banget.        | staf ramah.     |
| — Suasananya ...     |   | Diringkas dari ulasan Google, bukan kutipan langsung.     |
+----------------------+   +-----------------------------------------------------------+
```

**Kunjungi kami.** Get drivers to the right street. Ink ground; a static string-light garland
runs full-bleed across the top.
```
Kunjungi: phone            Kunjungi: desktop
+----------------------+   +-----------------------------------------------------------+
| o  o  o  o  o  o  o  |   | o   o   o   o   o   o   o   o   o   o   o   o   o   o    |
| Kunjungi kami (h2)   |   | Kunjungi kami (h2)          | [ Google Maps embed       ] |
| Komp. Billy Moon     |   | Komp. Billy Moon (lead amb.)| [ cols 6-12, 4:3, lazy     ] |
| Janur 1 No. 8, Blok  |   | Janur 1 No. 8, Blok CF 1    | [                          ] |
| CF 1 (lead)          |   | Pondok Kelapa, Duren Sawit, | [                          ] |
| Pondok Kelapa ...    |   | Jakarta Timur 13450 (body)  | [                          ] |
| Parkir luas.         |   | Parkir luas.                | [                          ] |
| Senin-Jumat 07-22    |   | Senin-Jumat   07.00-22.00   | [                          ] |
| Sabtu-Minggu 07-23 * |   | Sabtu-Minggu  07.00-23.00 (amber row, "lebih malam")      |
| [map 4:3]            |   | [Petunjuk Arah]   cols 1-5  |                             |
| [Petunjuk Arah]      |   +-----------------------------------------------------------+
+----------------------+
```

**Hubungi kami + footer.** One-tap contact, then the close. Ink ground continues.
```
Hubungi: phone             Hubungi: desktop
+----------------------+   +-----------------------------------------------------------+
| Hubungi kami (h2)    |   | Hubungi kami (h2)              | 0858-9139-6021 (lead 700)|
| Mau pesan tempat ... |   | Mau pesan tempat untuk acara   | [Telepon] [WhatsApp]     |
| 0858-9139-6021       |   | keluarga? (lead)  cols 1-6     |   cols 7-12              |
| [Telepon][WhatsApp]  |   |-----------------------------------------------------------|
| Bonjur · alamat ...  |   | Bonjur (script, lead) · Komp. Billy Moon, Pondok Kelapa   |
| Draf mockup ...      |   | Draf mockup · teks bergaris putus-putus masih contoh      |
+----------------------+   +-----------------------------------------------------------+
```
`[data-mockup]` text gets a 1px dashed underline (offset 4px) in the section's secondary colour.
Mockup illustrations carry a small "contoh" tag 8px below them.

## 8. Motion
**Signature: the balloon flies to now** (hero day bar). The bar has one scalloped stripe per
open hour: 15 on weekdays, 16 on weekends. That's what makes the weekend's extra hour visible.
After mount, the client computes Asia/Jakarta time. The balloon marker (24×32px; paper envelope,
red band, blue basket) starts at the 07.00 end, then translates along the bar to the current
hour with a slight tilt that settles: `x 0 → target`, `rotate -8° → 0`, 1.2s, `expo.out`,
0.15s delay. It moves once and stays put. Before 07.00 it parks at the left ("Belum buka · buka
jam 07.00"); after closing it parks at the right ("Sudah tutup · besok buka jam 07.00"). The
status text renders immediately; it is not animated. Reduced motion: the balloon is placed at
its target with no movement. No JS: no balloon, and the static line "Setiap hari 07.00–22.00 ·
Sabtu–Minggu sampai 23.00" stands alone.
**Supporting:** each section below the hero fades up once (20px, 0.7s, `power2.out`, top 85%).
Buttons: hover `translateY(-1px)`, press `scale(0.98)`, 150ms ease-out CSS on transform only
(the background swaps colour instantly, not tweened). Nothing else moves: no awning or garland
animation, and no per-item stagger.
Tokens (`lib/motion.ts`): `duration.hero 1.2`, `delay.hero 0.15`; the rest are starter defaults.

## 9. What makes it this shop
1. The awning valance across the top of the page, drawn from Bonjur's own terrace: red roof strip,
   blue and white stripes, one scallop per stripe.
2. The balloon sign marks "now" on an awning-striped bar of today's hours, so weekends visibly get
   an extra stripe.
3. "Komp. Billy Moon" set larger than the rest of the address, for drivers in the complex. The fries
   are drawn in Bonjur's own wire basket with the ketchup-and-mayo cup.

## 10. Avoid
- French-bistro costume: no Eiffel Tower, berets, croissants, "Bon appétit" or italic-serif menus.
  Red, white and blue appear as the awning and the balloon, never as three equal flag bands.
- The category template: a dark-overlay full-bleed photo with a centred white name, a row of three
  equal menu cards, a photo carousel. Also the AI default of cream ground, serif display and terracotta.
- Script creep: Yellowtail only for "Bonjur" (hero, footer). Awning creep: the valance appears twice,
  plus the day bar; no striped buttons, cards or backgrounds.
- Balloon gimmick: it never bobs on a loop, follows scroll, flies between sections or appears as a
  big hero illustration.
- Overclaiming: no "menu lengkap", live music, star graphics, or "evenings in the garden" comfort
  claims (mosquitoes, review 5). The old hours on owner-3 (10.00–21.30) never appear.
- Concept risks: the coloured regions turning into a rainbow (keep paper between the blue, green
  and ink sections), and the time-of-day strip reading as three generic cards (no icons, no gaps,
  colour carries the time). Rabbits and fish stay simple shapes, never big-eyed cartoons.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
