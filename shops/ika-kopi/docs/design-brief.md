# Design brief: Ika Kopi

## 1. Concept
The page is built like Ika Kopi's own dining-room wall: a bright white wall above, the deep
leaf-green wainscot below with the yellow cove-light line where they meet, and the owner's photo
standing in it like the glass shopfront, so the owner recognises the room before reading a word.
The coffee is then introduced the way the shop serves it, with its mustard bean card.
Signature moment: as "Kopi kami" scrolls in, the Arabica Pangalengan bean card is set down in front
of the manual-brew tray. It slides up and settles from a −10° to a −4° tilt while its shadow
tightens underneath (0.9 s, once).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name and tagline as on the round sign; the room's materials (white wall, green wainscot, LED cove line, honey oak); the bean card's fields; workspace facts from review 1; 07.00–23.00 daily; 4,8 from 217. owner-1 is the only usable photo, so products are illustrated. |
| impeccable | Persuade mode, code-led (launcher not run: it would download a binary outside docs/). The brief pins the world, so no concept roll. Of seven ideas from the shop's world (bean card, round sign, wainscot + cove light, branded tray, bean bags, glass shopfront, seating plan), the wainscot carries the structure and the bean card is the one product artefact. Committed colour (green owns whole bands), faces off the default list, one authored motion moment instead of scattered reveals. |

## 3. Palette (6 named colours)
Starter token names are kept for the first four so the banner CSS keeps working.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` (dinding) | #F5F3EE | Page ground: the white wall | ink on it 14.6:1 |
| `ink` (besi) | #17231B | Body text, banner background (black metal chairs, tinted green) | 14.6:1 on paper |
| `accent` (hijau) | #23613A | Logo/wainscot green: hero name, headings, primary button, green bands | 6.7:1 on paper; paper on it 6.7:1 |
| `kartu` | #D89B3C | Bean-card mustard: the bean card and bean-bag sticker, nothing else | ink on it 6.7:1; never white text (2.4:1) |
| `kayu` | #B9824F | Honey oak: shelf line, rules, tray, illustrations | 3.0:1 on paper: decorative only, never text |
| `lampu` | #F0DD6A | Cove-light line, icons, open dot, focus ring on green | 5.4:1 on hijau; never used on paper |

Derived text tints: `muted` #4C5A50 (secondary text on paper, 6.6:1), `daun` #CFE0D3 (secondary
text on hijau, 5.4:1). Illustration-only fills are in §6.

## 4. Type
**Gloock** 400 (display, head, lead) and **Hanken Grotesk** 400 / 600 (body, small, buttons, labels),
via `next/font/google`, `latin`, `display: swap`, as `--font-display` / `--font-body`. Gloock's
high-contrast serif echoes the green capitals on the sign; Hanken stays quiet and tidy.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.6rem + 7.6vw, 9rem)` (72 → 144px) | hero "Ika Kopi" only, `nowrap`, line-height 0.95 |
| `--step-head` | `clamp(1.875rem, 1.3rem + 2.4vw, 3.25rem)` (30 → 52px) | section headings (h2), line-height 1.1 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.55vw, 1.75rem)` (23 → 28px) | hero lines, bean-card title, praise, h3; line-height 1.3 |
| `--step-body` | `1.125rem` (18px) | running text, list items, menu names and prices; line-height 1.55 |
| `--step-small` | `0.875rem` (14px) | captions, card labels, header links, banner; line-height 1.45 |

Ratios: small→body 1.29; body→lead 1.28 / 1.56; lead→head 1.31 / 1.86; head→display 2.4 / 2.8.
Tagline "KEHARUMAN & CITA RASA": body size, Hanken 600, uppercase, tracking 0.16em, hijau, as on the
sign. Card labels: small, uppercase, tracking 0.08em, 600. Gloock never below `--step-lead`, never
faux italic or bold. Body measure max 62ch.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥768) |

- 12-column grid, 24px gap, from 1024 up; one column below 768. 768–1023 stacks like the phone
  except the Kerja panels (2 columns) and the Menu shelf (3 columns).
- **Proximity:** a price follows its name on the same line after a middot; the hours sit directly
  above the buttons; captions sit within 16px of what they describe. Nothing pinned to a far edge.
- **Wide screens are designed:** every desktop section pairs two column groups or runs a 3-up row;
  Bawa pulang is deliberately narrow (cols 1–10).
- **Lists:** body to lead only. Menu items at body; praise statements at lead.
- Green bands (hero foot, Kerja, Hubungi + footer) always open with the 3px `lampu` cove line and a
  static glow (`0 0 14px`, lampu at 55%). Corners: photo and map 0, buttons 2px, bean card 3px.

## 6. Products on the page
Five products, shown as flat illustrations (the only owner photo is the room):
1. **Manual-brew set** (Kopi kami): glass carafe and small glass on a honey-oak tray with "IKA KOPI"
   set in Gloock as a burned mark (type, not the logo), beside the bean card. (photos)
2. **Rice Bowl Chicken Katsu**: leaf-pattern bowl, rice, breaded chicken, lettuce, tomato slice. (photo-1; name [MOCKUP])
3. **Es Teh Persik**: stemless glass, orange drink, ice, a pale foam line. (photo-1; name [MOCKUP])
4. **Croissant** from the pastry case. (case from photos; item [MOCKUP])
5. **Bean bag 200 g**: kraft bag, green label band, round mustard "200 g" sticker. ([MOCKUP])

Style: flat vector, no outlines, no gradients, no faces, 3–6 fills each, side view with the
contents shown above the rim, `0 0 240 200` viewBox with the base on y = 192 so items line up on the
shelf. Illustration-only fills: rice #FBFAF6, katsu #C9772B / #A85B1F, lettuce #7DAE4B, tomato
#D5452B, drink #EE9F3A, glass #DCE6DF at 70%, coffee #3A2414, kraft #C8A274, bowl leaves #7F9BB3 +
hijau. Each has an Indonesian `aria-label`. Customer photos were references only and never ship.

## 7. Sections
**Hero.** Recognition plus the first action: lockup, location line, workspace line, then the
wainscot band with hours and buttons. Phone: owner-1 full-bleed 4:3 (`object-position: 50% 86%`
drops the AC and keeps the people behind the glass small). Desktop: the whole photo at 3:4 in
cols 8–12 (~480 × 640), its lower quarter dropping into the band, bottom 48px above the band's foot.
No text or scrim on the photo. Desktop-only header row: address left, anchors right, small.
```
Hero: phone (390)        Hero: desktop (1440)
+-----------------+      +--------------------------------------------------------------+
|[banner: Draf..] |      |[banner]                                                      |
| Ika Kopi   72px |      | Jl. Raya Ciracas No.3        Kopi  Ruang kerja  Menu  Lokasi |
| KEHARUMAN & ... |      |  Ika Kopi           (display 144)        +-----------------+ |
| Kopi pilihan di |      |  KEHARUMAN & CITA RASA                   |                 | |
| Jl. Raya Ciracas|      |  Kopi pilihan di Jl. Raya Ciracas. (lead)|  owner-1.jpg    | |
| Ruang sejuk...  |      |  Ruang sejuk dan lega, colokan di        |  3:4, cols 8-12 | |
|[owner-1 4:3 ...]|      |  setiap meja.                            |                 | |
|==lampu line=====|      |==lampu line==============================|=================|=|
|## ● Buka hari   |      |## ● Buka hari ini 07.00–23.00            |                 |#|
|## ini 07-23     |      |## [Petunjuk Arah] [WhatsApp]             +-----------------+#|
|## [Arah] [WA]   |      |##############################################################|
+-----------------+      +--------------------------------------------------------------+
```
**Kopi kami** (`#kopi`). Proof of seriousness. The tray illustration with the bean card overlapping
its lower edge. The card is a real `<dl>`: title "Arabica Pangalengan" (lead), then Asal: Jawa Barat ·
Cocok untuk: Pour over, French press · Catatan rasa: Berry, floral, manis di akhir · Proses: Natural ·
Ketinggian: 1.500 mdpl · Profil sangrai: Light to medium. Caption under it. Text side: heading,
lead, two brew notes, the coffee list, the espresso-bar line.
```
phone                    desktop
+-----------------+      +--------------------------------------------------------------+
| Kopi kami (head)|      |  [tray illo: carafe + glass]       Kopi kami (head)          |
| lead            |      |     +--------------+               Setiap manual brew datang |
| [tray illo]     |      |     | ARABICA      | -4°           di atas nampan kayu...    |
|  +-----------+  |      |     | PANGALENGAN  |               Pour over: ... (body)     |
|  | bean card |  |      |     | Asal  Jawa B.|               French press: ...         |
|  | -4°       |  |      |     | ...          |               --------------------------|
|  +-----------+  |      |     +--------------+               Manual brew · Rp 28rb–35rb|
| caption (small) |      |  caption (small)                   Es Kopi Susu Ika · Rp 22rb|
| brew notes      |      |  cols 1–6                          Americano · Rp 22rb       |
| coffee list     |      |                                    Cappuccino/Latte · Rp 28rb|
+-----------------+      +--------------------------------------------------------------+
```
**Nyaman untuk kerja** (`#ruang-kerja`). Full-bleed green: the wainscot itself. Six facts, each a
24px `lampu` line icon + title (body 600) + one line (body, `daun`). Desktop: a 3 × 2 grid of moulded
panels (1px inset line, paper at 18%, square corners), like the wainscot's raised panels. Phone: one
panel, six rows split by 1px lines. The long-table line [MOCKUP] sits under the lead.
```
phone                    desktop
+==lampu line=====+      +==lampu line==================================================+
|## Nyaman untuk  |      |## Nyaman untuk  +-------------+-------------+-------------+ #|
|## kerja (head)  |      |## kerja (head)  | * AC dingin | + Colokan   | = Meja lega | #|
|## lead          |      |## lead          |   one line  |   one line  |   one line  | #|
|## +------------+|      |## Datang        +-------------+-------------+-------------+ #|
|## | icon title ||      |## berkelompok?  | h Kursi     | ~ Toilet    | o 07.00–    | #|
|## | x6 rows    ||      |## meja panjang  |   empuk     |   bersih    |   23.00     | #|
|## +------------+|      |##  cols 1–4     +-------------+-------------+-------------+ #|
+=================+      +==============================================================+
```
**Menu andalan** (`#menu`). Food and non-coffee as real items on a honey-oak shelf (6px `kayu`
line). Desktop: three illustrations on one shelf across the container; name + price and one line
within 16px under it. Phone: rows of illustration (112px) + text, a shelf line under each. Then
"Juga ada" (matcha latte, cokelat) and "Paket pagi".
```
phone                    desktop
+-----------------+      +--------------------------------------------------------------+
| Menu andalan    |      | Menu andalan (head)            lead (cols 7–12)              |
| lead            |      |   [rice bowl illo]    [iced drink illo]    [croissant illo]  |
| [bowl] Rice Bowl|      |==kayu shelf line=============================================|
|  Katsu · 35rb   |      |   Rice Bowl Chicken   Es Teh Persik ·      Pastry etalase ·  |
|=====shelf=======|      |   Katsu · Rp 35rb     Rp 22rb–28rb         Rp 18rb–25rb      |
| [drink] Es Teh..|      |   one line            one line             one line          |
|=====shelf=======|      |                                                              |
| [pastry] ...    |      |  Juga ada: matcha latte,       o Paket pagi sebelum 10.00:   |
|=====shelf=======|      |  cokelat · Rp 22rb–28rb        kopi + pastry · Rp 35rb       |
| Juga ada / Pagi |      |  cols 1–6                      cols 7–12                     |
+-----------------+      +--------------------------------------------------------------+
```
**Bawa pulang biji kopi** ([MOCKUP] section, `data-mockup` on the wrapper). A quiet pause after
the dense menu, between `kayu` hairlines.
```
phone                    desktop
+-----------------+      +--------------------------------------------------------------+
| [bean bag illo] |      |  [bean bag illo]  Bawa pulang biji kopi (head)               |
| Bawa pulang ... |      |   cols 1–4        Biji kopi 200 g untuk diseduh di rumah.    |
| text · price    |      |                   Rp 85rb–120rb · [Tanya via WhatsApp]       |
| [Tanya via WA]  |      |                   cols 5–10                                  |
+-----------------+      +--------------------------------------------------------------+
```
**Kata mereka.** Four paraphrased themes at lead, each under a 2px `kayu` rule. No quote marks,
names or stars. Rating: "4,8" in Gloock lead + "dari 217 ulasan Google" at body.
```
phone                    desktop
+-----------------+      +--------------------------------------------------------------+
| Kata mereka     |      | Kata mereka (head)   ---------------------  ---------------- |
| 4,8 dari 217    |      | 4,8 dari 217 ulasan  Ruangannya sejuk dan   Kopinya enak.    |
| ulasan Google   |      | Google               lega, enak untuk kerja  (lead)          |
| statement x4    |      | Rangkuman ulasan,    ---------------------  ---------------- |
| note (small)    |      | bukan kutipan        Harganya masuk akal.   Bersih, sampai   |
+-----------------+      +--------------------------------------------------------------+
```
**Kunjungi kami** (`#lokasi`). The map plus everything needed to arrive.
```
phone                    desktop
+-----------------+      +--------------------------------------------------------------+
| Kunjungi kami   |      | +-----------------------------------+  Kunjungi kami (head)  |
| address, hours  |      | |  Google Maps embed, 4:3           |  Jl. Raya Ciracas No.3,|
| parking note    |      | |  cols 1–7                         |  ... 13740             |
| [Petunjuk Arah] |      | |                                   |  Senin–Minggu 07–23    |
| [map 16:10]     |      | |                                   |  Parkir motor mudah... |
|                 |      | +-----------------------------------+  [Petunjuk Arah]       |
+-----------------+      +--------------------------------------------------------------+
```
**Hubungi kami + footer** (`#kontak`). The page closes on the wainscot again. On green: primary
button paper fill with hijau text; secondary 1.5px paper outline with paper text.
```
phone                    desktop
+==lampu line=====+      +==lampu line==================================================+
|## Hubungi kami  |      |## Hubungi kami (head)                  Jam buka             #|
|## lead          |      |## lead                                 Senin–Minggu 07–23   #|
|## [WhatsApp]    |      |## [WhatsApp] [Telepon 0852-8584-4007]  Alamat               #|
|## [Telepon ...] |      |## [Petunjuk Arah]      cols 1–7        Jl. Raya Ciracas No.3#|
|##-- footer -----|      |##-----------------------------------------------------------#|
|## name, address,|      |## Ika Kopi · Keharuman & Cita Rasa        Draf situs, belum #|
|## draft note    |      |## (lead + small)                          dipublikasikan.   #|
+=================+      +==============================================================+
```

## 8. Motion
**Signature: the bean card is set down** (Kopi kami). ScrollTrigger on the composition,
`start: "top 70%"`, `once: true`. Tray illustration and caption fade up 20px, 0.6 s, `power2.out`.
At +0.2 s the card goes from `y: 40, rotation: −10, autoAlpha: 0` to its CSS resting state
(`rotate(−4deg)`), 0.9 s, `expo.out`; a separate blurred shadow element behind it goes from
`autoAlpha: 0, scale: 1.04` to rest, same timing. `gsap.from`, so the default state is final.
Reduced motion or no JS: the card rests at −4° with its shadow.
**Supporting:** the hero is static (it holds the LCP). `<Reveal>` once per section content block:
Kopi kami text column, Kerja, Menu, Bawa pulang, Kata mereka, Kunjungi, Hubungi. No stagger and no
per-item motion. Buttons and links: CSS 180 ms ease-out colour change; press `scale(0.98)` 120 ms.
The cove line never animates.
**Tokens** (`lib/motion.ts`, added to the starter values): `duration.card = 0.9`,
`distance.card = 40`, `rotate = { from: -10, rest: -4 }`.

## 9. What makes it this shop
- The wainscot: green bands opening with the yellow cove-light line, and the workspace facts set in
  its moulded panels. It is the room the owner built, not a theme.
- The bean card, field for field (Arabica Pangalengan, Jawa Barat, natural, 1.500 mdpl, berry,
  floral, manis di akhir, pour over or French press), set down in front of the tray the way the
  shop hands it over.
- The lockup from the round sign: green serif "Ika Kopi" over tracked "KEHARUMAN & CITA RASA", with
  Ciracas kept to the location line.

## 10. Avoid
- The generic coffee page: espresso brown, latte-art stock, scattered beans, steam swirls, "Our Story".
- The AI default of cream + serif + terracotta: the wall stays white, green owns bands, mustard stays on the card.
- Redrawing the logo, the coffee-cherry sprig or any emblem; the brand appears as type only.
- Text or scrims on the hero photo; rounded photo corners; drop-shadow card grids; icon tiles.
- The cove line turning neon: 3px, static, soft glow, no pulse.
- A tilt over 6°, or a pile of cards: there is one real bean card; don't invent others.
- Quote marks, stars, names; "menu lengkap"; car-parking promises; "parkir gratis"; certificates; other outlets.
- Cute illustrations (faces, outlines, gradients, sticker borders) or mixed viewpoints.
- A split-hero template: the photo stands in the wall and drops into the band; it never floats in a card.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
