# Design brief: Nari Coffee

Record decisions, not essays. All copy in Bahasa Indonesia (`lang="id"`).

## 1. Concept
**"Papan nama biru, meja marmer putih":** the page is Nari's own shopfront: a cobalt fascia with the white soft-serif name and the round N badge, a black awning bar under it holding today's hours, address and phone, then the bright white marble-table world where drinks in can-shaped glasses and the Mie Blenger trio sit with their prices in round badges, like the poster in Nari's window.
Signature moment: on load, the round N badge rolls in along the cobalt band and settles in place, so the page puts Nari's real signboard together in front of the visitor.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Cobalt fascia + white soft serif + N badge, black awning/steel, white marble tables, honey-teak chairs, ring light over the bar, can-shaped glasses, "New Menu" poster with circled prices (14/15), terrazzo forecourt; facts, hours conflict, Indonesian tone; owner-1 (shopfront) and owner-2 (berry drink) are the only shippable photos. |
| impeccable | Persuade mode; the brief pins the world, so "the brief wins" over a concept roll (launcher not run: it would write outside docs/). Seven candidates from the audience's world: fascia sign, window poster, can-shaped glasses, kasir receipt, ring light + "PICK UP" bar, terrazzo forecourt, Transjakarta-blue wayfinding. Kept the fascia, raised by three of the others: **price roundels** (from the poster), **rounded-rectangle corners** (from the ring light), **one can-glass drawing style** (from the glasses). Committed colour strategy (cobalt owns whole regions). Young Serif is not on its overused-faces list; it rules out the cream + serif + terracotta cafe default. |

## 3. Palette (6 named colours)
Strategy: **Committed.** Cobalt owns about 40% of the page (hero band, Mie Blenger card, closing band). Light page: people look at it on phones in daylight, on the way over or while picking a place in a group chat.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `cobalt` | #1D45A5 | Fascia blue: hero band, Mie Blenger card, Hubungi band; roundels, links, labels on paper | paper on cobalt 7.94, white 8.58; cobalt on paper 7.94, on sky 7.05 |
| `paper` | #F5F6F8 | Marble-white ground; text on cobalt / teak / ink | ink on paper 16.58 |
| `ink` | #15171C | Awning black: body text, awning bar, Kunjungi ground | paper on ink 16.58, sky on ink 14.72; **never cobalt on ink (2.09)** |
| `teak` | #9A5226 | Glossy teak chairs: Kata mereka band only | paper on teak 5.38 |
| `sky` | #E3E9F5 | Pale cobalt: Tempatnya ground, drink tiles, small labels on cobalt/ink | ink on sky 14.72; sky on cobalt 7.05 |
| `steel` | #545B68 | Brushed steel: secondary text, captions on paper/sky | steel on paper 6.32, on sky 5.61 |

For illustrations only, never UI: coffee #B98B62, espresso #6B4128, taro #B9A6D6, noodle #E2B65A, kari #D99A1E, rendang #7A3A1E, line = `ink`. The hero name gets the sign's channel-letter return as `text-shadow: 0.025em 0.035em 0` in `color-mix(in oklch, cobalt, ink 40%)`. Nothing else has a hard shadow.

## 4. Type
**Young Serif** 400 (display, head, lead statements, featured dish names): the closest free match to the fascia's soft, ball-terminal serif. **Figtree** 400/600/700 (body, lists, buttons, labels, prices). Both through `next/font/google`, latin subset.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.5rem, 1.2rem + 7.4vw, 7.5rem)` → 48px @390, 120px @1440 | h1 "Nari Coffee" only, one line, leading 1.05 |
| `--step-head` | `clamp(2rem, 1.45rem + 2.3vw, 3.25rem)` → 32 / 52px | section headings (h2), leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` → 22 / 28px | hero tagline, featured dish names (h3), praise statements, leading 1.3 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)` → 17 / 19px | running text, menu lists, awning values, buttons |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` → 13 / 14px | labels (Figtree 600, uppercase, +0.08em), captions, "rb" in roundels |

Ratios: @390 1.50 / 1.45 / 1.30 / 1.31; @768 1.86 / 1.64 / 1.43 / 1.32; @1440 2.31 / 1.86 / 1.47 / 1.37. All ≥ 1.25.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12-col grid, gap 20px phone / 32px ≥1024 |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (hero band: 28/32px phone, 64/56px desktop) |
| Corners | `--radius-card` 20px / 28px (the ring light's rounded rectangle); buttons 14px; roundels and badge are full circles. No pills, no sharp cards. |

- **Proximity:** a price roundel sits 12px after its dish name, on the same line or directly under it. Awning-bar and directory labels sit 4–16px from their values. Hours read "Senin–Minggu  10.00–21.30" as one compact pair, never split to opposite edges.
- **Wide screens:** every desktop section is a deliberate split (photo + text, text + grid) or a full-width band whose items fill a 3-column grid; see §7.
- **Lists:** dish names in lists at `--step-body` (600); only the featured dishes go up to `--step-lead`. No list is bigger than its h2.

## 6. Products on the page
Eight products, six of them pictured:
- **Iced berry drink with cream**: owner photo `berry.jpg` (owner-2), 4:5, the largest product image; caption "Strawberry Latte" [MOCKUP] · "Foto: Nari Coffee".
- **Luna Coffee**: flat `CanGlass` drawing: can-shaped glass (rounded rectangle, narrower lip ring), 2px ink line, milk coffee #B98B62 with an espresso band on top, three rounded ice cubes, white straw. Name, roundel 25rb [MOCKUP].
- **Taro Latte** [MOCKUP name]: same glass, taro #B9A6D6 with ice.
- **Mie Blenger Original / Kari / Rendang**: flat `NoodleBox` drawing after the poster image: open white takeaway box (ink line), a twirl of noodles lifted above it on a fork, sauce colour noodle / kari / rendang. Same drawing ×3, only the sauce changes. No toppings invented. Roundels 14 / 15 / 15 [MOCKUP].
- **French Fries, Rice Bowl Ayam Teriyaki, Mie bakso & pangsit goreng**: named in the food list with roundels where the brief has a price; not drawn.
One drawing style for all illustrations: flat fills, one 2px ink line weight, no gradients, no shading, drawn at viewBox 120×200 (glass) and 160×140 (box). Illustrations sit on `sky` tiles (paper section) or straight on cobalt (Mie Blenger card).

## 7. Sections
**Hero:** recognition + hours + directions in one screen. Badge `badge.jpg`, 64px on phone (top-right, same row as the label), 0.9em next to the name at ≥768.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------------------+  +--------------------------------------------------------------+
| draft banner (small)         |  | draft banner                                                 |
|########## cobalt ############|  |######## cobalt band, container 1200 ##########################|
| DUREN SAWIT · JAKARTA   (N)  |  |  DUREN SAWIT · JAKARTA TIMUR (small, sky)                     |
| Nari Coffee    display 48    |  |  Nari Coffee (N)      display 120 + badge 108, one line       |
| Kopi enak, makan kenyang,    |  |  Kopi enak, makan kenyang, dompet tetap aman. (lead)          |
| dompet tetap aman.  (lead)   |  |  [ Petunjuk Arah ] [ WhatsApp* ]                              |
| [Petunjuk Arah] [WhatsApp*]  |  |######## ink awning bar: 3 equal columns ######################|
|########## ink awning ########|  |  JAM               | ALAMAT                  | TELEPON          |
| JAM     Buka hari ini        |  |  Buka hari ini     | Jl. Swadaya Raya No.1,  | 0895-1021-7613   |
|         10.00–21.30          |  |  10.00–21.30       | Duren Sawit             |                  |
| ALAMAT  Jl. Swadaya Raya No.1|  +--------------------------------------------------------------+
| TELP    0895-1021-7613       |  | shopfront.jpg full-bleed, h clamp(280px,38vw,560px), pos 50% 45%|
+------------------------------+  +--------------------------------------------------------------+
| shopfront.jpg 390x300        |
+------------------------------+
```
**Menu andalan (paper):** what to order, and that it's affordable.
```
Menu andalan: phone               Menu andalan: desktop
+------------------------------+  +--------------------------------------------------------------+
| Menu andalan (h2)            |  | Menu andalan (h2)                                              |
| intro (body)                 |  | intro (body, cols 1-7, 16px under the h2)                      |
|                              |  | +--------------------+   MINUMAN (label)                       |
| [ berry.jpg 4:5, r20 ]       |  | | berry.jpg 4:5      |   +-sky tile-------+ +-sky tile-------+ |
| Strawberry Latte* · Foto Nari|  | | cols 1-5, r28      |   | [glass 96x160] | | [glass 96x160] | |
| MINUMAN                      |  | |                    |   | Luna Coffee (25)| | Taro Latte*    | |
| [sky: glass | Luna Coffee(25)|  | |                    |   | desc*          | | desc*          | |
|          | desc*            ]|  | |                    |   +----------------+ +----------------+ |
| [sky: glass | Taro Latte*   ]|  | +--------------------+   Juga ada*: 2 cols of 5 drink names   |
| Juga ada*: 2-col names       |  | Strawberry Latte* · Foto  MAKANAN: French Fries (18) /        |
| MAKANAN: Fries (18) /        |  |                          Rice Bowl Ayam Teriyaki (28) / Mie..*|
| Rice Bowl (28) / Mie bakso*  |  +--------------------------------------------------------------+
+------------------------------+
```
**Menu baru: Mie Blenger (paper section, cobalt card):** the window poster made into a card.
```
Mie Blenger: phone                Mie Blenger: desktop
+------------------------------+  +--------------------------------------------------------------+
| +-cobalt card r20----------+ |  | +-cobalt card r28, padding 56------------------------------+ |
| | MENU BARU (small, sky)   | |  | | MENU BARU      | [box 160]     [box 160]     [box 160]   | |
| | Mie Blenger (h2, paper)  | |  | | Mie Blenger h2 | Mie Blenger   Mie Blenger   Mie Blenger | |
| | Tiga rasa...* (body)     | |  | | Tiga rasa...*  | Original (14) Kari (15)     Rendang (15)| |
| | [box96] Original   (14)  | |  | | cols 1-4       | cols 5-12, 3 equal columns              | |
| | [box96] Kari       (15)  | |  | +----------------------------------------------------------+ |
| | [box96] Rendang    (15)  | |  +--------------------------------------------------------------+
| +--------------------------+ |
+------------------------------+
```
**Tempatnya (sky):** the space, as a floor directory for a two-storey shophouse.
```
Tempatnya: phone                  Tempatnya: desktop
+------------------------------+  +--------------------------------------------------------------+
| Tempatnya (h2)               |  | +-------------------------+  Tempatnya (h2)                   |
| Nyaman buat nongkrong bareng |  | | forecourt.jpg 4:3, r28  |  Nyaman buat nongkrong... (lead)  |
| teman, pas buat kencan (lead)|  | | cols 1-6                |  LANTAI ATAS   tangga besi,       |
| [ forecourt.jpg 4:3, r20 ]   |  | |                         |                beratap; rombongan*|
| LANTAI ATAS (label)          |  | |                         |  LANTAI BAWAH  jati, marmer,      |
| text + rombongan*            |  | |                         |                lampu cincin,      |
| LANTAI BAWAH / text          |  | |                         |                bebas asap rokok   |
| TERAS DEPAN / text           |  | +-------------------------+  TERAS DEPAN   meja besi, teraso  |
+------------------------------+  +--------------------------------------------------------------+
```
Label column 132px, text starts 16px after it.

**Kata mereka (teak):** honest proof: four paraphrased themes, no names, no quote marks, no stars.
```
Kata mereka: phone                Kata mereka: desktop
+------------------------------+  +--------------------------------------------------------------+
| Kata mereka (h2, paper)      |  | Kata mereka (h2)        | ---------------- | ---------------- |
| 4,9 di Google Maps dari 315  |  | 4,9 di Google Maps dari | Luna Coffee-nya  | Asyik buat       |
| ulasan (body)                |  | 315 ulasan (body)       | enak... (lead)   | nongkrong...     |
| ---- statement 1 (lead)      |  | Diringkas dari ulasan   | ---------------- | ---------------- |
| ---- statement 2             |  | Google. (small)         | Makanan dan      | Harganya         |
| ---- statement 3             |  | cols 1-4                | minumannya...    | bersahabat...    |
| ---- statement 4             |  |                         | cols 5-12, 2x2, rule = paper 40%     |
| Diringkas dari ulasan Google.|  +--------------------------------------------------------------+
+------------------------------+
```
**Kunjungi kami (ink):** get them there.
```
Kunjungi: phone                   Kunjungi: desktop
+------------------------------+  +--------------------------------------------------------------+
| Kunjungi kami (h2, paper)    |  | Kunjungi kami (h2)          | +-map iframe 4:3, r28--------+ |
| ALAMAT / Jl. Swadaya Raya... |  | ALAMAT / address (body)     | |                            | |
| JAM BUKA / Senin–Minggu      |  | JAM BUKA / Senin–Minggu     | |                            | |
|            10.00–21.30       |  |            10.00–21.30      | +----------------------------+ |
| Mohon tidak membawa... (sky) |  | Mohon tidak membawa...(sky) | Buka di Google Maps (small)    |
| [Petunjuk Arah] [Telepon]    |  | [Petunjuk Arah] [Telepon]   | cols 6-12                      |
| [ map 4:3, r20 ]             |  | cols 1-5                    |                                |
+------------------------------+  +--------------------------------------------------------------+
```
**Hubungi kami (cobalt):** close on action.
```
Hubungi: phone                    Hubungi: desktop
+------------------------------+  +--------------------------------------------------------------+
| Hubungi kami (h2, paper)     |  | Hubungi kami (h2)                 | [ WhatsApp*        ]     |
| Ada pertanyaan?...* (lead)   |  | Ada pertanyaan? Kabari kami...*   | [ Telepon 0895-... ]     |
| [ WhatsApp* ]                |  | (lead) cols 1-7                   | [ Petunjuk Arah    ]     |
| [ Telepon 0895-1021-7613 ]   |  |                                   | cols 8-12, full width    |
| [ Petunjuk Arah ]            |  | ---- rule sky 30% ---------------------------------------- |
| (N)40 Nari Coffee · D. Sawit |  | (N)40 Nari Coffee (lead) · Duren Sawit · draf (small)        |
+------------------------------+  +--------------------------------------------------------------+
```
`*` = [MOCKUP], rendered with `data-mockup`.

## 8. Motion
**Signature: the badge roll.** On load (150ms after mount) `RollingBadge` moves from `x = +π × its width` to 0 while rotating 360° → 0 (a true leftward roll), fading in over the first 0.2s; 1.0s, `power3.out`, so it decelerates and stops in place. Phone: rolls into the top-right of the band; desktop: rolls in to settle beside the name. The cobalt band clips it (`overflow: hidden`). Name, tagline, buttons, awning bar and photo never animate. Reduced motion / JS off: badge already in place.
**Supporting:** one `<Reveal>` per section block for Menu andalan, the Mie Blenger card, Tempatnya, Kata mereka and Kunjungi (20px, 0.6s, `power2.out`, once, no child stagger). Hubungi kami doesn't animate. Buttons: colour + `translateY(-1px)` 180ms, press `scale(.98)` 120ms.
Tokens for `lib/motion.ts`: `duration { press 0.12, ui 0.18, reveal 0.6, hero 1.0 }`, `ease { out "power2.out", outStrong "power3.out", inOut "power2.inOut" }`, `distance.reveal 20`.

## 9. What makes it this shop
1. The hero is Nari's own fascia rebuilt as working UI: cobalt band, white soft-serif name with the sign's letter return, the real N badge rolling into place, and a black awning bar that holds hours / address / phone right where the real awning hangs. Then the real shopfront photo.
2. Prices sit in round badges right after each dish name, the way the "New Menu" poster circles 14 and 15; the Mie Blenger trio gets its own cobalt "poster" card with the poster's noodle-box image redrawn.
3. Drinks are drawn in Nari's can-shaped glasses; "Tempatnya" reads like a floor directory for the two-storey shophouse (Lantai atas / Lantai bawah / Teras depan); reviews sit on the honey-teak of the chairs.

## 10. Avoid
- Coffee-shop clichés: brown/cream palettes, latte-art photos, bean or steam icons, mug icon tiles; the cream + serif + terracotta default.
- Fake marble: no marble textures, veins or gradients; "marble" is simply clean `paper`.
- A hero that's a *picture* of a sign: buttons and hours must read as plain UI, and the awning bar's text must be real, selectable text.
- Badge motion beyond the one roll: no looping, bouncing, hover spin or scroll-linked rotation.
- Cobalt everywhere: keep it to the three regions, roundels and links; never cobalt text on ink.
- Roundels that shrink into unreadable stickers, or that get pinned to the far edge of a row away from the dish.
- Stars, quote marks, reviewer names or invented praise; customer photos (`photo-*.jpg`) anywhere on the site.
- Number plates or motorbikes in any crop; the closed sign as a focal point.
- Clip-art drift: mixed line weights, shaded or gradient illustrations, invented toppings, prices for items the brief doesn't price.
- Any English UI copy, apart from the shop's own dish names.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists at body, featured dishes at lead < head)
- [x] Max content width set (1200px); no detail pinned far from what it describes (roundels 12px after names, labels 4–16px from values)
- [x] Every section has a desktop wireframe that uses the width on purpose (splits, 3-col bar, 3-dish grid, 2×2 praise)
- [x] At least 3 products shown (6 pictured: 1 owner photo, 2 glasses, 3 noodle boxes)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
