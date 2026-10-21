# Design brief: Laris Manis Bakery

## 1. Concept
The page feels like the shop's counter at 07.00 (a cobalt-blue crate of bread in clear printed
bags, the name in the bag's bold orange script, the "Contact Order" sign for ordering), because
those are exactly what customers see at Laris Manis (photos), not a generic artisan bakery.
Signature moment: on load, the hero's bagged breads drop one after another into the full-width
blue crate and settle behind its front wall, so the crate fills up ("laris manis": selling briskly).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Cobalt crates, clear bags with orange script arc and "LM" crest, white tiles, cream sign with brown ornament border, 5 products, hours, 4.6/216, all copy in Bahasa Indonesia |
| impeccable | Persuade mode. The brief pins the world (palette, materials, type mood), so the brief wins: no concept-seed roll (its scripts write outside `docs/`), `mode-persuade.md` read instead. Colour committed in regions, faces chosen from the shop's world, one authored focal sequence, products in the first viewport. |

## 3. Palette (6 named colours)
Strategy: cream ground, with cobalt owning whole regions (hero crate, order section, primary
buttons) and cheese-yellow owning one section. Light theme: the scene is a phone in morning
daylight on the way to work.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `krim` | #FBF4E4 | page ground (the order sign's cream) | tinta on krim 14.0:1 |
| `tinta` | #17224A | body text, footer ground, focus ring on light grounds | 14.0:1 on krim, 15.4:1 on putih, 9.4:1 on kuning |
| `biru-krat` | #1E4DB7 | crate, order section field, primary buttons, headings on yellow | putih on biru 7.5:1, krim on biru 6.8:1, biru on krim 6.8:1, biru on kuning 4.55:1 |
| `oranye-label` | #C8401A | the name and section headings on krim, prices | 4.56:1 on krim, 5.0:1 on putih. Never on biru or kuning |
| `kuning-keju` | #F5C33B | "Kue & camilan" field, today's row, headings and focus ring on biru | kuning on biru 4.55:1, tinta on kuning 9.4:1 |
| `putih-ubin` | #FFFFFF | white-tile product panels, text on biru | as above |

Derived, not tokens: crate slot shade #143580, tile grout #E9E1CF (decoration only, never text).
Illustration inks (SVG only, never UI text): crust #D9963F, crumb #F6DFA6, chocolate #4A2A17,
cheese #FFF1B8, sausage #B5432A, sausage slice #D9576A, cookie #F7DE8C, cookie shade #E3B95A,
paper case #1B1B1F, ornament brown #7B4A24 (also the sign card's border and ribbon fill).

## 4. Type
Two families via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`:
**Oleo Script 700** (`--font-display`), a bold, round script like the name printed on the bags.
**Baloo 2** 400/600/800 (`--font-body`), a sturdy rounded sans like packaging print.
Script is used only for the h1 name and h2 section headings. Everything else is Baloo 2.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.75rem, 2.6rem + 8.5vw, 8rem)` (76px at 390, 128px at 1440) | "Laris Manis" in the h1 only |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.8vw, 3.75rem)` (36.5 → 60px) | h2 section headings (Oleo Script) |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)` (23 → 28px) | hero line, "Bakery" in the h1, h3 product names, prices, rating line |
| `--step-body` | `clamp(1.125rem, 1.1rem + 0.1vw, 1.1875rem)` (18 → 19px) | running text, flavour list, hours table, buttons |
| `--step-small` | `0.875rem` (14px) | captions, "Hari ini" tag, footer, map credit |

Ratios: display/head ≥ 2.0, head/lead ≥ 1.58, lead/body ≥ 1.28, body/small ≥ 1.29.
Line heights: display 1.05 (wraps to two lines on phone), head 1.15 (script descenders),
lead 1.3, body 1.55, small 1.4. Product names 800 weight; prices 800 in `oranye-label` (`biru-krat` on the kuning field).

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12-column grid, 24px column gap (16px on phone) |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** price sits on the name's line, 12px after it (never right-aligned to the card
  edge). "Hari ini" tag sits 8px after the day name. Flavour list directly under the cards.
- **Wide screens:** every section below has a 1440 wireframe that fills the 1200px container
  on purpose; "Kata mereka" is deliberately narrow (720px) and centred.
- **Lists:** flavours, order types, hours at `--step-body`; order-type titles at `--step-lead`.
- Corners: panels 20px radius (moulded plastic), buttons fully rounded, min height 52px.

## 6. Products on the page
No owner photos, so every product is a flat SVG illustration (inline components, 2 tones per
surface, no gradients, no outlines on the food). Five products, all from the photos:
1. **Roti Meses Keju** (featured): rectangular sweet-bread slab, top split diagonally into
   chocolate sprinkles and grated cheese, inside a clear bag.
2. **Roti Cokelat**: twisted bun, three lobes with chocolate streaks, in a clear bag.
3. **Roti Sosis**: golden oval bun with a sausage on top and a few cheese strands, in a clear bag.
4. **Bolu Pizza**: round sponge cake from slightly above, tomato-sauce lattice, sausage slices,
   cheese flecks, on a white scalloped lace doily.
5. **Kue Semprit Keju**: round clear jar seen from above, packed with black fluted paper cases,
   each holding a pale-yellow piped rosette.

The bag (shared component): clear shape (white at 55% opacity, 1.5px edge in #C9D3E8, one
white highlight stripe, crimped seal on one end) with the printed label: an orange arc band and a small cobalt
roundel with "LM" in kuning (the crest, photos). No mascot, no other bag text. Breads 1–3 appear twice: standing
in the hero crate and large on white-tile panels in "Roti kami". Cake and jar appear in "Kue &
camilan" at about 420px on desktop and 300px on phone.

## 7. Sections
**Hero.** Recognise, check it's open, act. h1 = "Laris Manis" (display, oranye) + "Bakery"
(lead, 800, biru). Line, hours, two buttons, phone link. Full-bleed crate band at the bottom:
breads stand in it, their lower halves hidden behind the front wall (2 rows of slots).
Desktop: name cols 1–8, hours and actions cols 9–12 bottom-aligned with the hero line.
Each crate bread is a link to its card in "Roti kami".
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +--------------------------------------------------------+
| draft banner     |     | draft banner                                           |
| Laris            |     |  Laris Manis           (display, cols 1-8)  Buka hari  |
| Manis   (display)|     |  Bakery                                     ini 07-18  |
| Bakery           |     |  Roti rumahan yang enak dan terjangkau      [Pesan WA] |
| Roti rumahan ... |     |  di Pisangan Baru.            (lead)        [Petunjuk] |
| Buka hari ini    |     |                                             telepon .. |
| 07.00-18.00      |     |   /bag\  /bag\  /bag\  /bag\  /bag\  /bag\  6 breads   |
| [Pesan via WA  ] |     |=========================================================| rim, full bleed
| [Petunjuk arah ] |     || [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] []  || crate front
| atau telepon ... |     || [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] []  ||
| /bag\/bag\/bag\  |     +--------------------------------------------------------+
|==================|     crate band: 180px breads above rim + 150px wall (phone 120 + 96)
+------------------+
```
**Roti kami** (krim). Show the breads. Heading + intro line stacked in cols 1–6. Featured card
cols 1–6 (tile panel 4:3), two horizontal cards stacked in cols 7–12 (panel left, text right).
Name, price and one-line description under or beside each panel. "Rasa lain" list underneath.
```
Roti kami: phone         Roti kami: desktop
+------------------+     +--------------------------------------------------------+
| Roti kami (head) |     | Roti kami (head)                                       |
| intro line       |     | Dibungkus satu per satu, siap dibawa pulang.           |
| +--------------+ |     | +-------------------------+ +------------+-----------+ |
| | tile: meses  | |     | | tile panel: Roti Meses  | | tile: Roti | Roti      | |
| | keju (bag)   | |     | | Keju in bag, large      | | Cokelat    | Cokelat   | |
| +--------------+ |     | |                         | |            | Rp 5rb    | |
| Meses Keju Rp 7rb|     | +-------------------------+ +------------+-----------+ |
| desc             |     | Roti Meses Keju  Rp 7rb     +------------+-----------+ |
| +-----+--------+ |     | desc                        | tile: Roti | Roti Sosis| |
| |tile | Roti   | |     |                             | Sosis      | Rp 5rb    | |
| |     | Cokelat| |     |                             +------------+-----------+ |
| +-----+--------+ |     | Rasa lain: keju · srikaya · pisang cokelat             |
| (Roti Sosis same)|     +--------------------------------------------------------+
| Rasa lain: ...   |
+------------------+
```
**Kue & camilan** (kuning field, heading in biru, no intro line). Two round objects side by
side; the jar column sits 64px lower than the cake for rhythm. Under each: name and price on
one line (price 12px after the name, in biru here because oranye fails on kuning), then one
line of description.
```
Kue: phone               Kue: desktop
+------------------+     +--------------------------------------------------------+
| Kue & camilan    |     | Kue & camilan (head)                                   |
| ( bolu on doily )|     |   (   bolu pizza on doily   )                          |
| Bolu Pizza Rp45rb|     |   (   ~420px, cols 1-6      )   (  jar of semprit    ) |
| line             |     |   Bolu Pizza  Rp 45rb           (  ~420px, cols 7-12 ) |
| (  jar, top )    |     |   line                          Kue Semprit Keju  Rp   |
| Kue Semprit Keju |     |                                 85rb / toples (1 line) |
| Rp 85rb / toples |     |                                 line                   |
+------------------+     +--------------------------------------------------------+
```
**Pesan untuk acara & reseller** (biru field, krim/putih text, heading kuning). A crate-slot
strip (row of rounded slots in #143580) runs along the top edge. Left cols 1–5: heading, line,
WhatsApp button (putih fill, biru text). Right cols 6–12: three order rows separated by slot
dividers: Kue kering Lebaran / Ulang tahun & acara / Warung & reseller, each title (lead) + one
line (body).
```
Pesan: phone             Pesan: desktop
+==================+     +========================================================+
| Pesan untuk      |     | Pesan untuk acara    | Kue kering Lebaran (lead)       |
| acara & reseller |     | & reseller (head)    | semprit keju, nastar, kastengel |
| line             |     | line                 |---- [] [] [] [] slot divider ---|
| Kue kering Leb.  |     | [Tanya via WhatsApp] | Ulang tahun & acara             |
| Ulang tahun ...  |     |                      | bolu dan kue pesanan            |
| Warung & reseller|     |                      |---- [] [] [] [] ---------------|
| [Tanya via WA  ] |     |                      | Warung & reseller: roti per krat|
+------------------+     +--------------------------------------------------------+
```
**Kata mereka** (krim, quiet). 720px centred column: heading, rating line "4,6 dari 216
ulasan di Google" (lead, 4,6 in 800 biru), two paraphrased lines as a list with a small bag
bullet. No quote marks, no names, no star rows.
```
Kata mereka: phone       Kata mereka: desktop
+------------------+     +--------------------------------------------------------+
| Kata mereka      |     |                 Kata mereka (head)                      |
| 4,6 dari 216 ... |     |            4,6 dari 216 ulasan di Google                |
| - Rasanya enak.. |     |      - Rasanya enak dan harganya bersahabat.            |
| - Toko roti ...  |     |      - Toko roti rumahan yang bikin jatuh hati.         |
+------------------+     +--------------------------------------------------------+
```
**Kunjungi kami** (krim). Map cols 1–7 (4:3, 20px radius, lazy iframe); cols 8–12: address,
Petunjuk arah button, hours table (max 360px wide; today's row kuning with "Hari ini" tag).
Phone: address, button, hours, then map.
```
Kunjungi: phone          Kunjungi: desktop
+------------------+     +--------------------------------------------------------+
| Kunjungi kami    |     | Kunjungi kami (head)                                   |
| address          |     | +--------------------------------+  Jl. Pisangan Baru  |
| [Petunjuk arah]  |     | |                                |  No. 02, Matraman.. |
| Senin  07.00-18. |     | |   map embed (cols 1-7)         |  [Petunjuk arah]    |
| Selasa ... Hari  |     | |                                |  Senin   07.00–18.00|
| ini (kuning row) |     | |                                |  Selasa  07.00–18.00|
| +--------------+ |     | +--------------------------------+  ... Minggu (today) |
| |   map        | |     +--------------------------------------------------------+
| +--------------+ |
+------------------+
```
**Hubungi kami** (krim). Left cols 1–5: heading, "Pesan lewat WhatsApp, ambil hangat di toko.",
WhatsApp and Telepon buttons. Right cols 7–12: the "Contact Order" sign card (putih, 6px
ornament-brown border with corner ornaments), laid out like the real sign: "LARIS MANIS"
(Baloo 2 800 caps, tinta, lead), "Contact Order" ribbon (ornament-brown fill, krim text 6.7:1),
"Admin 1 0821-3513-5932" and "Admin 2 0812-1985-8295" (body) as tel links.
```
Hubungi: phone           Hubungi: desktop
+------------------+     +--------------------------------------------------------+
| Hubungi kami     |     | Hubungi kami (head)          +~~~~~~~~~~~~~~~~~~~~~~+   |
| line             |     | Pesan lewat WhatsApp,        { LARIS MANIS          }   |
| [WhatsApp     ]  |     | ambil hangat di toko.        { [Contact Order]      }   |
| [Telepon      ]  |     | [WhatsApp] [Telepon]         { Admin 1 0821-3513-.. }   |
| +~~~~~~~~~~~~~~+ |     |                              { Admin 2 0812-1985-.. }   |
| { sign card    } |     |                              +~~~~~~~~~~~~~~~~~~~~~~+   |
+------------------+     +--------------------------------------------------------+
```
**Footer** (tinta field, krim text). Name, short address, "Buka setiap hari 07.00–18.00",
draft line. Desktop: three short groups in one row; phone: stacked.
```
Footer: phone            Footer: desktop
+------------------+     +--------------------------------------------------------+
| Laris Manis      |     | Laris Manis Bakery | Jl. Pisangan Baru No. 02 | Buka   |
| address, hours   |     |                    | Matraman, Jakarta Timur  | 07–18  |
| draft line       |     | Ini adalah draf tampilan, belum resmi.                 |
+------------------+     +--------------------------------------------------------+
```

## 8. Motion
**Signature: loading the crate (hero, on load).** Each crate bread goes from y −64px, its
resting rotation ±8°, opacity 0 to its resting position (y 0–16px, rotation between −7° and
+6°), 0.7s each, `expo.out`, stagger 0.09s, start 0.2s after load. 6 breads desktop (≈1.35s
total), 3 on phone. Breads sit behind the crate's front wall in z-order, so they visibly drop
into it. Text and buttons never animate. Reduced motion: breads at rest, no movement.
**Supporting:** sections 2–7 use starter `<Reveal>` once (20px, 0.6s, `power2.out`, start
"top 85%"). Crate breads lift 10px on hover or focus (200ms ease-out, back in 150ms). Product
panel illustrations tilt −2° and rise 4px on card hover (200ms CSS). Buttons: colour change
and 1px press, 150ms. Lenis: starter defaults.
`lib/motion.ts`: `duration.reveal = 0.6`, `duration.hero = 0.7`, add `stagger.hero = 0.09`,
`delay.hero = 0.2`, `distance.drop = 64`, `ease.settle = "expo.out"`.

## 9. What makes it this shop
1. The full-width cobalt crate the hero's breads drop into, and its slot pattern reused as the
   order section's edge: the crates are what every photo of the shop shows.
2. Every bread drawn in its own clear bag with the orange arc and "LM" roundel, the way it is
   actually sold, and the name set in the bag's bold orange script.
3. The "Contact Order" sign rebuilt as the contact card, with its brown ornament border and the
   Admin 1 / Admin 2 numbers.

## 10. Avoid
- The artisan-bakery template: kraft brown, flour dust, serif display, croissant stock photo,
  "baked with love" copy. Also the cream-plus-terracotta AI default: orange is only for the
  name, headings on krim and prices; cobalt owns the regions.
- A split hero with copy left and one product right, or three equal cards in a row. The crate
  band and the asymmetric "Roti kami" grid replace both.
- Turning cute into a toy shop: no drawn mascot (we don't have it), no emoji, no stickers,
  no wobbling, bouncing or elastic easing, no confetti. Script only for h1 and h2.
- Slot lattice behind text. It lives on the crate wall and the strip only.
- Showing "tanpa bahan pengawet" or the P-IRT number before the owner confirms; any customer
  photo; quote marks or names on the paraphrased reviews; a giant "4,6".
- Prices right-aligned at the card edge; product names at heading size.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): 5 illustrated
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
