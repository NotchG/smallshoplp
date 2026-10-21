# Design brief: Kanal Feds

All copy is Bahasa Indonesia. Draft strings below are the builder's starting copy; [MOCKUP] items follow the PRD.

## 1. Concept
**"Dari jam 7."** A calm, light page built from the shop's own materials (limewash concrete, walnut box-frame
wood, square corners, a jade accent, the terrace's crazy-paving floor), organised around a day that starts at
07.00. It fits because Kanal Feds is a carefully designed, compact room that people use from the first
takeaway coffee before work to a slow afternoon on the leafy terrace.
Signature moment: the hero's "Hari ini" line runs from 07.00 to today's closing time. On load a jade square
slides along it to the current Jakarta time and the line above says "Buka sekarang · sampai 21.00".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts and hours (Mon–Thu 07–21, Fri–Sun 07–22), Sabor A Mi and the fruity cappuccino, the gym next door; the materials palette and the three products to illustrate, read from customer photos (reference only, never on the site) |
| impeccable | World built from the shop's own materials, off the coffee rut (cream, serif, espresso brown); light ground from the physical scene; colour owns whole regions; first viewport as thesis; one focal motion with a job. Its scripts were not run (they download a binary outside `docs/`). Also considered: glass-block grid, cup sleeve, Jakarta street sign, the name as a canal |
| CLAUDE.md, motion-rules.md | [MOCKUP] tagging, no customer photos, no quotes or names, draft banner and noindex; one signature moment, transform/opacity only, reduced motion means none |

## 3. Palette (4–6 named colours)
Scene: a commuter at 06:55 in bright East Jakarta morning sun, phone in hand, checking if it's open. So: a light ground.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `limewash` | #E4E3DE | Main ground: hero, Menu andalan, Kunjungi kami | kopi 13.2:1 · walnut 6.6:1 · palm 9.2:1 |
| `chalk` | #F7F6F2 | Second ground (Mulai jam 7, Kata mereka), frame interiors, text on palm | kopi 15.7:1 · chalk on palm 11.0:1 |
| `kopi` | #221B17 | All text on light grounds | see above |
| `walnut` | #6B4427 | Product frame slabs, "ANDALAN" label | 6.6:1 limewash · 7.8:1 chalk |
| `palm` | #1F3D31 | Ground of Ruang kami and Hubungi kami; primary button; elapsed part of the day line; marker edge | chalk text 11.0:1 · as a graphic on limewash 9.2:1 |
| `jade` | #5CBF98 | The accent, from the logo: day-line marker, square bullets, price chips, labels on palm | kopi on jade 7.6:1 · jade on palm 5.3:1 · jade on limewash 1.75:1, so never text or a lone graphic on light grounds (the marker gets a 2px palm edge) |

Derived tints (no new hues): `muted` #55504B on limewash 6.2:1 · `muted-palm` #B9CBBF on palm 7.0:1 ·
`palm-2` #2A4E3F placeholder panels (chalk 8.6:1) · `concrete` #9A9993, hairlines and the unelapsed day line only (decorative).
Illustration only, never UI: ube #9A7FC0, cream #EFE6D6, espresso #3A2216, cocoa #5B3A29, steel #C8CACA.
Section grounds, top to bottom: limewash, chalk, limewash, **palm**, chalk, limewash, **palm**.

## 4. Type
One family: **Jost** (variable, `next/font/google`, latin subset, `display: swap`). It is crisp and geometric with
generous spacing, as the brief asks, and its Futura-style caps suit the mid-century box-frame furniture and the
all-caps wordmark. Weights: 400 text, 500 display, headings and labels, 600 for today's hours row.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.921rem + 6.476vw, 8.75rem)` (72→140px) | H1 "Kanal Feds" only: 500, uppercase, tracking 0.1em, line-height 1.05. Two lines ("KANAL" / "FEDS") below 1024px, one line from 1024px |
| `--step-head` | `clamp(1.875rem, 1.550rem + 1.333vw, 2.75rem)` (30→44px) | Section headings: 500, line-height 1.1, tracking −0.01em, sentence case |
| `--step-lead` | `clamp(1.375rem, 1.282rem + 0.381vw, 1.625rem)` (22→26px) | Tagline, today status, section leads, product names, theme titles, contact rows, "Menu lainnya" |
| `--step-body` | `clamp(1.062rem, 1.039rem + 0.095vw, 1.125rem)` (17→18px) | Running text, menu items, hours table, buttons; line-height 1.55 |
| `--step-small` | `clamp(0.8125rem, 0.789rem + 0.095vw, 0.875rem)` (13→14px) | Labels (500, uppercase, tracking 0.12em), "Ilustrasi" captions, day-line times, notes |

Ratios at 390 / 1024 / 1440px: small→body 1.31 / 1.29 / 1.29 · body→lead 1.29 / 1.39 / 1.44 ·
lead→head 1.36 / 1.57 / 1.69 · head→display 2.4 / 2.9 / 3.2. All ≥ 1.25. Paragraphs max 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px (75rem); 12-column grid, 24px gap desktop, 16px phone |
| Page margins phone / desktop (`--gutter`) | 20px / 40px: `clamp(1.25rem, 0.786rem + 1.905vw, 2.5rem)` |
| Section padding phone / desktop (`--section-y`) | 64px / 112px: `clamp(4rem, 2.886rem + 4.571vw, 7rem)` |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here: price chips 8px after the product name; "Ilustrasi" ≤12px
  under its frame; menu prices inline after the item; hours times in a column 24px after the day; contact-row
  arrows 8px after the text.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Corners square (radius 2px on buttons only). Breakpoints: 640px (menu list 2 columns), 1024px (desktop grids, one-line H1).

## 6. Products on the page
No owner photos, so four products are drawn as **flat SVG illustrations** (geometric shapes, no outlines, one
flat shadow shape, palette and illustration colours only, no logo on any cup). Each sits in a **walnut slab
frame**: 12px walnut on left and right, 3px top and bottom, chalk inside, like the box-frame tables. "Ilustrasi ·
foto menyusul" sits under each frame; every illustration carries `data-mockup`.

1. **Sabor A Mi** (featured, large): a tall straight glass, dark espresso in the lower half, a thick ube-lavender
   cream layer above, three square ice cubes. The look is a guess, owner to confirm. Price chip Rp 42rb [MOCKUP].
2. **Cappuccino**: white cup on a saucer from a three-quarter top view, a simple tulip of cream on coffee, a small
   rectangular almond biscuit on the saucer, a small plain side cup of milk beside it. Rp 32rb [MOCKUP].
3. **Es kopi krim** [MOCKUP name]: a tall glass with dark coffee below and a thick cream layer on top. No price.
4. **Cake mousse cokelat** [MOCKUP name]: a square slice on a round steel plate: dark base, mousse layer, a row
   of cocoa-dusted peaks (triangles), three chocolate discs, a thin clear acetate band. Rp 38rb [MOCKUP].

Then "Menu lainnya", a plain text list (all [MOCKUP], prices only where the brief gives one). No product is shown only by name.

## 7. Sections
**1. Hero.** Purpose: who, open now?, go. Content: address line, desktop anchors, H1, tagline, TodayLine, Petunjuk Arah + WhatsApp, rating.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +----------------------------------------------------------------+
| Draf tampilan ·  |     | Draf tampilan · bukan situs resmi Kanal Feds          (banner) |
| Jl. Kol. Sugiono |     | Jl. Kolonel Sugiono No.45 · Pondok Bambu   Menu  Ruang  Lokasi |
| KANAL   (display)|     |                                                                |
| FEDS             |     | KANAL FEDS                    (display, one line, ~930px wide) |
| Kopi, brunch, dan|     |                                                                |
| teras hijau di   |     | Kopi, brunch, dan teras   | HARI INI · KAMIS        (cols 6-12) |
| Pondok Bambu.    |     | hijau di Pondok Bambu.    | Buka sekarang · sampai 21.00       |
| HARI INI · KAMIS |     | (lead, cols 1-5)          | 07.00 ====■------------------ 21.00 |
| Buka · s/d 21.00 |     | [Petunjuk Arah][WhatsApp] |       10    13    16    19         |
| 07.00 ==■--21.00 |     | 4,7 dari 228 ulasan Google| Sen–Kam 07.00–21.00 · Jum–Min ...  |
| Sen–Kam 07–21 ...|     +----------------------------------------------------------------+
| [Petunjuk][WA]   |     | top of "Mulai jam 7 pagi" shows above the fold                 |
| 4,7 · 228 ulasan |
+------------------+
```
**2. Mulai jam 7 pagi** (chalk). Purpose: the reasons to stop early. Content: lead "Kopi pagi mulai jam 7. Mampir sebelum kerja, atau setelah olahraga."; moments "07.00 · Sebelum kerja" and "Setelah olahraga" (PRD).
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Mulai jam 7 pagi |     | Mulai jam 7 pagi     | ■ 07.00 · SEBELUM   | ■ SETELAH         |
| (head)           |     | (head, cols 1-4)     |   KERJA (cols 5-8)  |   OLAHRAGA (9-12) |
| Kopi pagi mulai  |     | Kopi pagi mulai jam  | Ambil kopi untuk    | Tepat di sebelah  |
| jam 7... (lead)  |     | 7. Mampir sebelum    | dibawa. Pesan dulu  | gym. Ada minuman  |
| ■ 07.00 · SEBELUM|     | kerja... (lead)      | lewat WhatsApp.     | dan makanan sehat.|
|   KERJA  text    |     |                      | [MOCKUP line]       | [MOCKUP examples] |
| ■ SETELAH OLAHR. |     +----------------------------------------------------------------+
+------------------+
```
**3. Menu andalan** (limewash). Purpose: the actual products. Content: §6, then "Menu lainnya".
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Menu andalan     |     | Menu andalan (head)                                            |
| note (small)     |     | Gambar adalah ilustrasi. Menu dan harga contoh ditandai.(small)|
| |[Sabor A Mi   ]||     | |[                            ]|  ANDALAN         (cols 8-12) |
| |[ illustration]||     | |[  Sabor A Mi illustration   ]|  Sabor A Mi [Rp 42rb] (lead) |
| Ilustrasi        |     | |[  walnut frame, cols 1-7    ]|  Mocktail kopi andalan,      |
| ANDALAN          |     | Ilustrasi · foto menyusul         creamy, rasa ube kaya.(body)|
| Sabor A Mi Rp42rb|     | |[cappuccino]|  |[es kopi krim]|  |[mousse cake]| (4 cols each)|
| |[ill]| Cappucc. |     | Cappuccino [Rp 32rb] Es kopi krim  Cake mousse cokelat [Rp 38rb]|
| |[ill]| Es kopi  |     | Fruity dan segar.    Krim tebal...  Puncak cokelat...         |
| |[ill]| Cake     |     | Menu lainnya (lead) · contoh, menunggu menu asli (small)       |
| Menu lainnya     |     | KOPI         NON-KOPI SEHAT   BRUNCH · Rp 55–75rb   PASTRY    |
| KOPI / NON-KOPI  |     | Es kopi susu Rp 28rb  Jus hijau Rp 35rb  Avocado toast  ...   |
| (1 col lists)    |     | (4 columns at body size)                                       |
+------------------+     +----------------------------------------------------------------+
```
Phone: the three smaller products are rows (112px frame left, name, chip and line right).

**4. Ruang kami** (palm). Purpose: comfortable to stay. Content: lead "Naik ke teras atas, duduk di bawah pohon, pesan Sabor A Mi.", "Tempatnya mungil, tapi ada lantai dua dan teras.", four spaces, three placeholders.
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Ruang kami (head)|     | Ruang kami (head)        | +---------------------------------+ |
| Naik ke teras    |     | Naik ke teras atas,      | | Foto dari pemilik · Teras atas  | |
| atas... (lead)   |     | duduk di bawah pohon,    | | (crazy-paving pattern, 16:10)   | |
| +--------------+ |     | pesan Sabor A Mi. (lead) | +---------------------------------+ |
| |Foto dari     | |     | Tempatnya mungil, tapi.. | +---------------+ +---------------+ |
| |pemilik·Teras | |     | ■ Ruang dalam · sejuk    | | Foto · Ruang  | | Foto · Sudut  | |
| +--------------+ |     | ■ Sudut sofa             | | dalam (4:3)   | | sofa (4:3)    | |
| ■ Ruang dalam    |     | ■ Teras atas · hijau     | +---------------+ +---------------+ |
| ■ Sudut sofa ... |     | ■ Lantai dua & musala    |             (cols 6-12)           |
| +-----+ +-----+  |     | (body, cols 1-5)         |                                   |
| |dalam| |sofa |  |     +----------------------------------------------------------------+
+------------------+
```
**5. Kata mereka** (chalk). Purpose: proof, paraphrased. Content: rating, four themes, "Rangkuman dari ulasan Google, bukan kutipan."
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Kata mereka      |     | Kata mereka (head)    | ■ Konsepnya rapi     | ■ Stafnya hangat |
| 4,7 dari 228     |     | 4,7 dari 228 ulasan   |   Ruang dalam sejuk, |   Ramah sejak    |
| ulasan Google    |     | Google (lead)         |   lantai dua cantik. |   kamu masuk.    |
| Rangkuman, bukan |     | Rangkuman dari ulasan | ■ Kopinya beda       | ■ Nyaman         |
| kutipan. (small) |     | Google, bukan kutipan.|   Cappuccino fruity  |   berlama-lama   |
| ■ Konsepnya rapi |     | (cols 1-4)            |   dan segar.         |   Lantai dua...  |
| ■ Stafnya hangat |     |                       | (titles lead, text body, cols 5-12) |
| ■ Kopinya beda...|     +----------------------------------------------------------------+
+------------------+
```
**6. Kunjungi kami** (limewash). Purpose: find it, plan the visit. Content: address, landmark, Petunjuk Arah, hours table, map.
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Kunjungi kami    |     | +-----------------------------------+  Kunjungi kami (head)    |
| Jl. Kolonel      |     | |                                   |  Jl. Kolonel Sugiono     |
| Sugiono No.45... |     | |  Google map embed                 |  No.45, Duren Sawit ...  |
| Di sebelah gym   |     | |  (cols 1-7, 4:3)                  |  Di sebelah gym, Pondok  |
| [Petunjuk Arah]  |     | |                                   |  Bambu  [Petunjuk Arah]  |
| JAM BUKA · Buka  |     | |                                   |  JAM BUKA · Buka setiap  |
| setiap hari      |     | |                                   |  hari                    |
| Senin 07.00–21.00|     | |                                   |  Senin   07.00–21.00     |
| ■ Kamis (today)  |     | +-----------------------------------+  ■ Kamis 07.00–21.00     |
| +--------------+ |     |                                        Minggu  07.00–22.00     |
| | map (4:3)    | |     |                                        (cols 8-12, table 22rem)|
| +--------------+ |     +----------------------------------------------------------------+
+------------------+
```
**7. Hubungi kami** (palm, the close). Purpose: end on the actions. Content: [MOCKUP] "Mau pesan dulu? Kirim WhatsApp, ambil sambil berangkat kerja.", three rows, footer.
```
phone                    desktop
+------------------+     +----------------------------------------------------------------+
| Hubungi kami     |     | Hubungi kami (head)       | WhatsApp · 0814-1053-8375 ->       |
| Mau pesan dulu?  |     | Mau pesan dulu? Kirim     | ---------------------------------- |
| Kirim WhatsApp...|     | WhatsApp, ambil sambil    | Telepon · 0814-1053-8375 ->        |
| WhatsApp ·0814.->|     | berangkat kerja. (lead)   | ---------------------------------- |
| Telepon · 0814 ->|     | (cols 1-5)                | Petunjuk Arah · Google Maps ->     |
| Petunjuk Arah -> |     |                           | (lead rows ≥64px, cols 6-12)       |
| KANAL FEDS · Jl. |     | KANAL FEDS · Jl. Kolonel Sugiono No.45 · Draf tampilan (small) |
+------------------+     +----------------------------------------------------------------+
```

## 8. Motion
**Signature moment (hero, load).** 200ms after mount, the jade marker and the palm elapsed fill travel together
from 07.00 to the current Jakarta time: `xPercent` on a full-width rail and fill, 900ms, `expo.out`. The marker
fades in over the first 150ms. Before 07.00 the marker sits at the start ("Belum buka · hari ini mulai 07.00");
after closing it sits at the end ("Sudah tutup · besok buka 07.00"), with a 300ms fade and no travel. It runs once
and never ticks. Reduced motion: marker and fill at their final positions, nothing moves. JS off: the weekly
hours are readable and the marker stays hidden.
**Supporting:** sections 2–6 fade up once (20px, 600ms, `power2.out`, `top 85%`). Hero text and the close do
not animate. Buttons and contact rows: 180ms colour change; contact-row arrow nudges 4px.
Reduced motion: reveals off (content at final state), hover keeps the colour change only, Lenis off.
Tokens for `lib/motion.ts`: `ease.signature = "expo.out"`, `ease.reveal = "power2.out"`,
`dur.signature = 0.9`, `dur.reveal = 0.6`, `dur.hover = 0.18`, `delay.signature = 0.2`, `reveal.y = 20`.

## 9. What makes it this shop
1. The page opens on today's line from 07.00, in Jakarta time: the early opening people praise is the hero's mechanism, not a footnote.
2. Materials lifted from the room: walnut slab frames from the box-frame tables, the terrace's crazy-paving floor as the placeholder pattern, square corners and square bullets after the travertine block and the rectilinear logo, limewash concrete as the ground.
3. Morning light, then shade: light limewash sections, then the terrace section drenched in palm green ("di bawah pohon"), and Sabor A Mi's ube as the only purple on the page.

## 10. Avoid
- The coffee-shop defaults: cream ground with a serif and terracotta; espresso-brown hero with bean motifs; latte-art stock photos; neon on black.
- The split-hero template (copy left, product image right, badge row). The hero is type plus the day line.
- Four equal product cards. Sabor A Mi is the larger feature; the other three follow it.
- Customer photos anywhere. Photo-real illustrations. Illustrating the place instead of using labelled placeholders.
- Redrawing the green logo mark: no mark on illustrated cups, and the wordmark is set in Jost.
- Pitching it as a work-from-cafe spot; featuring the shrimp dish; the words specialty, single origin or roaster; quotes, reviewer names, star rows.
- Leaf shadows, parallax palms, grain, particles; glass, gradients, pill buttons, card shadows.
- Day line failures: device time zone instead of Asia/Jakarta; 21.00 shown on Fri–Sun; "Buka sekarang" at 06:30; marker running past the end; a ticking clock; hydration mismatch (compute only after mount). Test 06:30, 10:00 Kamis, 21:30 Jumat and 22:30 Minggu.
- "KANAL FEDS" typed in caps in the source, breaking mid-word, or wrapping to three lines.
- Prices or "Ilustrasi" captions drifting away from their item; grey empty placeholder boxes with no pattern or label; the two palm sections touching.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.29; product names, themes, contact rows and menu lists sit at lead or body, below head)
- [x] Max content width set; no detail pinned far from what it describes (1200px; chips, captions, prices, arrows and hours within 24px, §5)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero 5+7 columns with a full-width H1; 4/4/4; 7+5 feature and 3-up; 5+7; 4+8 grid; 7+5 map; 5+7 rows)
- [x] At least 3 products shown (food and product shops): Sabor A Mi, cappuccino, es kopi krim and cake mousse cokelat as illustrations
- [x] Within motion-rules.md (one signature moment, section-level reveals, transform/opacity only, no React Bits, reduced motion static)
- [x] Brief is decisions, not essays (2–4 pages)
