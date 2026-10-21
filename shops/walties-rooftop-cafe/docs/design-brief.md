# Design brief: Waltie's Rooftop Café

Decisions, not essays. Copy on the site is Bahasa Indonesia; `*` in wireframes = [MOCKUP] (`data-mockup`).

## 1. Concept
**Lampu menyala.** The page is Waltie's terrace after dark: the name hangs under a festoon of
bulbs on a night-blue ground, and the dishes are laid out on one of the café's own tegel-tile
tables. It fits because the string lights and the tiled tables are what this rooftop is, and
what the owner photographs.
Signature moment: on load, the festoon slung across the top of the hero switches on bulb by
bulb, left to right, and the terrace panorama below warms up from dusk as the last bulb lights
(about 1.7 s, once).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Night-blue, amber, plant-green and tile palette; tall condensed name with spaced "ROOFTOP CAFÉ" like the sign; tegel tables in wood frames and dark plates/bowls (owner-1, owner-2, photo-3 as reference); bulb divider motif; section list; every fact |
| impeccable | Persuade mode: action and hours in the first viewport. Seven worlds weighed (below); Full-palette colour strategy at page scale; scene decides dark hero; default "AI" faces avoided; one authored focal motion instead of scattered effects |
| motion-rules.md | One signature moment, section-level reveals only, transform/opacity, reduced motion = none |
| reactbits.dev (browsed 2026-10-21) | Nothing picked; reasons in the TRD |

impeccable's launcher and `concept-seed` were not run (planning only; they write outside
`docs/`). Its new-work steps were applied by hand. Worlds considered, by resonance:
1. festoon-lit terrace at night (the brief's own picture): **chosen**
2. tegel cement-tile tabletop: **chosen**, fused in as the system (palette, product tiles)
3. the owner's Instagram post frame: rejected, it's the feed the audience already scrolls
4. thermal-receipt "bon" (the cheap-bill review): rejected, mono-label rut and turns price into the headline
5. mall lift display reading "R": rejected, claims access facts we don't have
6. Betawi *gigi balang* roof trim: rejected, heritage the café doesn't claim
7. *kopi dan senja* sunset: rejected, a cliché, and the peak hour is after dark

Scene: an office worker or a group of friends on a phone around 17.00–19.00 deciding where to sit
tonight. So the page opens at night, and the menu sits in the warm light of a tabletop.

## 3. Palette (4–6 named colours)
Full palette, committed at page scale: every section ground is one colour from the tiles or
the sky. No gradients except the bulb halos. Grounds in order: malam → krem → malam → daun →
krem → malam → bata → malam (footer).

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `malam` | #121C35 | Night sky: hero, Dua suasana, Kunjungi kami, footer; text on light grounds | krem on malam 14.3:1 |
| `krem` | #F5EBD7 | Tile cream: Menu andalan, Kata mereka; text on dark grounds; button on bata | malam on krem 14.3:1 |
| `lampu` | #F4B740 | Bulb amber: bulbs, "ROOFTOP CAFÉ", primary button fill and focus ring on dark | lampu on malam 9.4:1; malam on lampu 9.4:1; on bata 3.65:1, so decorative/large only |
| `bata` | #9E3F2C | Tile brick: Hubungi kami ground; prices on krem; focus ring on light | krem on bata 5.5:1; bata on krem 5.5:1 |
| `daun` | #24402E | Plant green: Betah berjam-jam ground; leaves in illustrations | krem on daun 9.6:1; lampu on daun 6.3:1 |
| `kayu` | #6E4A2E | Wood frame: tegel-band edge, dish-tile frames, coffee/cookie tones | kayu on krem 6.6:1 (not used as text on dark) |

## 4. Type
**Antonio** (tall condensed caps, echoing the WALTIE'S sign) for the name, headings and
category labels, uppercase, 500–700. **Gantari** (Lafontype, an Indonesian foundry) for
everything else, 400–600. Both via `next/font/google`, latin subset, `display: swap`. No
script face: the one script on the page is the "Bolvano" lettering already in owner-2.jpg.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 3rem + 11vw, 11rem)`: ≈91px @390, 176px @1440. Antonio 700, lh 0.9 (one line: "WALTIE’S") | hero name only |
| `--step-head` | `clamp(2rem, 1.45rem + 2.3vw, 3.5rem)`: 32 → 56px. Antonio 600, lh 1.05 | section headings |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)`: 22 → 26px. Gantari 500, lh 1.3; Antonio 500 +0.32em tracking for "ROOFTOP CAFÉ" and menu category labels | statements, h3, dish names, theme lines |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.15vw, 1.125rem)`: 17 → 18px. Gantari 400, lh 1.55; buttons Gantari 600 | running text, list items, prices |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)`: 13 → 14px. Gantari 500, lh 1.45, sentence case, no tracking | captions, labels, chips, source line |

Ratios @390: 13 → 17 → 22 → 32 → 91 (1.31, 1.29, 1.45, 2.8). @768: 13.3 → 17.2 → 23.8 →
40.9 → 132. @1440: 14 → 18 → 26 → 56 → 176 (1.29, 1.44, 2.15, 3.1). "WALTIE’S" in Antonio
700 is ≈2.95em wide (≈270px at 91px), so it stays on one line from 320px up; the builder
confirms at 320. If light-on-dark body looks thin in screenshots, use Gantari 450 there.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; hero panorama capped at 1170px (its native width) |
| Page margins phone / desktop (`--gutter`) | 20px / 48px: `clamp(1.25rem, 4vw, 3rem)` |
| Section padding phone / desktop (`--section-y`) | 64px / 112px: `clamp(4rem, 2.5rem + 6vw, 7rem)` |

- **Grid:** 12 columns, 32px gap on desktop (≥1024); one column with 2-column sub-grids on phone.
- **Proximity:** price directly under its dish name (≤ 8px); captions ≤ 24px under their photo;
  review source line ≤ 16px under its heading; hours table max 18rem so each time sits beside
  its day. No dotted leaders to a far edge.
- **Wide screens:** every desktop section is a deliberate split (7/5 hero, 5/7 menu, 6/6 rooms,
  5/7 Betah, 4/8 Kata mereka, 7/5 Kunjungi, 6/6 Hubungi) or the 5-column menu list. Only the
  two bulb strands and the tegel band run full-bleed, on purpose, like the wires on the terrace.
- **Lists:** menu items, Betah points and themes use `--step-body`/`--step-lead`. Never Antonio at heading size in a list.
- **Shapes:** 4px corners on buttons and chips; square photos and tiles. Buttons ≥ 48px tall.

## 6. Products on the page
Five products shown, not just named:
1. **Bolvano**: owner-2.jpg, CSS-cropped to 9:10 from the top, so the script title and tagline stay and the handle/logo band goes. The largest product image.
2. **Soto Betawi**: flat illustration from above: dark bowl (malam), broth (lampu tint), beef (kayu), tomato slices (bata), scallion (daun), lime wedge beside.
3. **Platter Waltie's\***: dark round plate with fries, fried wontons, sliced fish cake and a small sweet-chilli dip, redrawn from what photo-3 shows (never the photo itself).
4. **Cookies & Cream Blend\***: glass from above with a scoop of ice cream, cookie crumbs and a striped wafer stick (as in photo-2, redrawn).
5. **Es Kopi Susu Gula Aren\***: glass from above with a milk-coffee swirl and a palm-sugar ring.

Items 2–5 sit centred on a 4:3 tabletop of small square tegel tiles (a simple four-petal
medallion repeat in lampu, bata and daun on krem, kept low-contrast) inside a 6px kayu frame:
a Waltie's table seen from above. Palette colours only, ≤ 40 shapes each, inline SVG with `role="img"` and an Indonesian
`aria-label`. Name (`--step-lead`) and price (`--step-body`, bata) sit directly under each tile.

## 7. Sections
Purpose per section is in the PRD. `o` = bulb; `[t]` = 20px tegel mark; crops are CSS
(`aspect-ratio`, `object-fit: cover`, `object-position: top`), and no handle, address or logo
band from owner-1/2/4 may show in screenshots.

```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| draft banner         |   | draft banner                                             |
+----------------------+   +----------------------------------------------------------+
| o  o  o  o  o  o  o  |   | o   o   o   o   o   o   o   o   o   o   o   o   o   o    |
|  \__/ \___/ \___/    |   |  \________/ \________/ \________/ \_______/  strand,     |
|                      |   |                                     edge to edge, SVG    |
| WALTIE'S             |   | WALTIE'S                      | Rooftop santai di*       |
|   display ~91px      |   |   display 176px, one line     | Rawamangun (lead)        |
| ROOFTOP CAFE (lead)  |   | ROOFTOP CAFE                  | o Buka hari ini          |
| Rooftop santai di*   |   |   (lead, caps, +.32em, lampu) |   09.00-22.30 (body)     |
| Rawamangun (lead)    |   |                               | Arion Mall... (small)    |
| o Buka hari ini      |   |   cols 1-7                    | [Petunjuk Arah][WA*]     |
|   09.00-22.30 (body) |   |                               | cols 8-12, bottom-aligned|
| Arion Mall, Rawa-    |   | +------------------------------------------------------+ |
| mangun (small)       |   | | owner-3 panorama, max 1170 x 460, cover, pos 50% 30% | |
| [Petunjuk Arah]      |   | | malam scrim .45 -> 0 as the last bulb lights         | |
| [WhatsApp]*          |   | +------------------------------------------------------+ |
+----------------------+   +----------------------------------------------------------+
| owner-3, full-bleed  |   
| 390 x 240, cover     |   
| pos 60% 40%          |   
+----------------------+   

Menu andalan: phone (390)   Menu andalan: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| tegel band 24px      |   | tegel band, full-bleed, 24px, kayu edge                  |
+----------------------+   +----------------------------------------------------------+
| MENU ANDALAN (head)  |   | MENU ANDALAN (head)      Dari Soto Betawi sampai         |
| Dari Soto Betawi     |   | cols 1-5                 menu barat... (lead) cols 6-12  |
| sampai menu barat.   |   | +-----------------+  +-------------+  +-------------+    |
| (lead)               |   | | owner-2 Bolvano |  | Soto Betawi |  | Platter     |    |
| +------------------+ |   | | 9:10, top crop  |  | illus. on   |  | illus. on   |    |
| | owner-2 Bolvano  | |   | | (script title   |  | tegel tile  |  | tegel tile  |    |
| | 9:10, top crop   | |   | |  stays visible) |  +-------------+  +-------------+    |
| +------------------+ |   | |                 |  Soto Betawi      Platter Waltie's*  |
| Bolvano  Rp 30rb*    |   | |  cols 1-5       |  Rp 35rb* (body)  Rp 35rb*           |
| Pisang, yogurt...    |   | |                 |  +-------------+  +-------------+    |
| [soto]   [platter]   |   | +-----------------+  | Es Kopi Susu|  | Cookies &   |    |
| Soto     Platter     |   | Bolvano  Rp 30rb*    | Gula Aren   |  | Cream       |    |
| Betawi   Waltie's*   |   | Pisang, yogurt, saus +-------------+  +-------------+    |
| Rp 35rb* Rp 35rb*    |   | buah naga, stroberi  Es Kopi Susu...  Cookies & Cream*   |
| [kopi]   [cookies]   |   |                      cols 6-12, 2 x 2 dish tiles         |
| Es Kopi  Cookies &   |   +----------------------------------------------------------+
| Susu*    Cream*      |   | INDONESIA | BARAT  | CAMILAN | KOPI    | NON-KOPI        |
+----------------------+   | Nasi Gor. | Spag.  | Kentang | Caramel | Matcha          |
| INDONESIA BARAT      |   | Rp 32rb*  | Rp 38* | ...     | ...     | ...             |
| 4 items   4 items    |   | 5 equal columns, price on the line under its item        |
| CAMILAN   KOPI       |   | Nama menu dan harga masih contoh. (small)                |
| NON-KOPI  (2 cols)   |   +----------------------------------------------------------+
| note: harga contoh   |   
+----------------------+   

Dua suasana: phone (390)   Dua suasana: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| DUA SUASANA (head)   |   | DUA SUASANA (head)       Naik ke atas, duduk santai,     |
| Naik ke atas, duduk  |   | cols 1-6                 biar lampu kota... * (lead)     |
| santai...* (lead)    |   | +------------------------+                               |
| +------------------+ |   | | owner-1 terrace        |  +------------------------+   |
| | owner-1 terrace  | |   | | 8:9, top crop (band    |  | owner-4 indoor         |   |
| | 8:9, top crop    | |   | | with handle/logo cut)  |  | 8:7, top crop          |   |
| +------------------+ |   | |                        |  | cols 7-12, starts      |   |
| Rooftop (lead)       |   | | cols 1-6               |  | 120px lower            |   |
| Teras terbuka, meja  |   | |                        |  +------------------------+   |
| tegel, lampu gantung |   | |                        |  Ruang dalam ber-AC (lead)    |
| [setelah gelap*]     |   | +------------------------+  Kursi empuk, meja kayu...    |
| +------------------+ |   | Rooftop (lead)              [Ber-AC] [Wi-Fi gratis]      |
| | owner-4 indoor   | |   | Teras terbuka, meja tegel,                               |
| | 8:7, top crop    | |   | tanaman, lampu gantung                                   |
| +------------------+ |   | [Paling cantik setelah gelap*]   chips: small            |
| Ruang dalam (lead)   |   +----------------------------------------------------------+
| [Ber-AC][Wi-Fi]      |   
+----------------------+   

Betah berjam-jam: phone (390)   Betah berjam-jam: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| ground: daun         |   | ground: daun (deep plant green), text krem               |
+----------------------+   +----------------------------------------------------------+
| BETAH BERJAM-JAM     |   | BETAH BERJAM-JAM (head)   | Wi-Fi gratis (lead)          |
| (head)               |   |                           | Di ruang dalam, pas buat     |
| Mau nongkrong sejam  |   | Mau nongkrong sejam atau  | buka laptop. (body)          |
| atau sampai tutup..* |   | sampai tutup, tempatnya   |----------------------------- |
| (lead)               |   | selalu ada.* (lead)       | Teras atau ber-AC (lead)     |
+----------------------+   |                           | Pilih suasanamu... (body)    |
| Wi-Fi gratis (lead)  |   | cols 1-5                  |----------------------------- |
| di ruang dalam       |   |                           | Buka sampai 22.30 (lead)     |
+----------------------+   |                           | Setiap hari, Senin-Minggu.   |
| Teras atau ber-AC    |   |                             cols 7-12, krem hairlines    |
| pilih suasanamu      |   +----------------------------------------------------------+
+----------------------+   
| Buka sampai 22.30    |   
| setiap hari          |   
+----------------------+   

Kata mereka: phone (390)   Kata mereka: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| KATA MEREKA (head)   |   | KATA MEREKA (head) | [t] Nyaman buat  | [t] Stafnya      |
| Rangkuman ulasan     |   | Rangkuman dari     |     nongkrong    |     ramah (lead) |
| Google - 4,6 dari    |   | ulasan Google      |     lama (lead)  |     + one line   |
| 432 ulasan (small)   |   | 4,6 dari 432       |     + one line   |     (body)       |
+----------------------+   | ulasan (small,     |------------------+------------------|
| [t] Nyaman buat      |   | <=16px under head) | [t] Makanannya   | [t] Harganya     |
|     nongkrong lama   |   |                    |     enak (lead)  |     ramah (lead) |
| [t] Stafnya ramah    |   | cols 1-4           |     + one line   |     + one line   |
| [t] Makanannya enak  |   |                     cols 5-12, 2 x 2; no quotes, no names|
| [t] Harganya ramah   |   +----------------------------------------------------------+
|                      |   
| [t] = 20px tegel     |   
| mark                 |   
+----------------------+   

Kunjungi kami: phone (390)   Kunjungi kami: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| KUNJUNGI KAMI (head) |   | KUNJUNGI KAMI (head)                                     |
| Alamat (small)       |   | +--------------------------+  Alamat (small)             |
| Arion Mall, Jl. Paus |   | | Google Maps iframe, 4:3, |  Arion Mall, Jl. Paus No.1, |
| No.1, Rawamangun,    |   | | lazy, cols 1-7           |  Rawamangun, Pulo Gadung,   |
| Pulo Gadung, Jakarta |   | |                          |  Jakarta Timur 13220 (body) |
| Timur 13220 (body)   |   | |                          |  Info lantai & cara naik    |
| Info lantai menyusul*|   | |                          |  ke rooftop menyusul.*      |
| [Petunjuk Arah]      |   | |                          |  [Petunjuk Arah]            |
| Jam buka (small)     |   | |                          |  Jam buka - setiap hari     |
| Senin   09.00-22.30  |   | |                          |  Senin   09.00-22.30        |
| ...     (7 rows)     |   | |                          |  ...  (table max 18rem)     |
| Minggu  09.00-22.30  |   | +--------------------------+  Minggu  09.00-22.30        |
| +------------------+ |   |                               cols 8-12                  |
| | map iframe 4:3   | |   +----------------------------------------------------------+
| +------------------+ |   
+----------------------+   

Hubungi kami: phone (390)   Hubungi kami: desktop (1440)
+----------------------+   +----------------------------------------------------------+
| ground: bata         |   | ground: bata; static lit strand along the top edge       |
+----------------------+   +----------------------------------------------------------+
| o  o  o  o  o  o  o  |   | o   o   o   o   o   o   o   o   o   o   o   o   o   o    |
|  \__/ \___/ \___/    |   |  \________/ \________/ \________/ \_______/              |
| HUBUNGI KAMI (head)  |   | HUBUNGI KAMI (head)         | [ Chat di WhatsApp ]*      |
| Mau pesan tempat     |   |                             | Telepon (small)            |
| buat rombongan?      |   | Mau pesan tempat buat       | 0813-1473-5996 (lead)      |
| Chat kami.* (lead)   |   | rombongan atau ulang tahun? | Instagram (small)          |
| [WhatsApp]* full w.  |   | Chat kami di WhatsApp.*     | @walties_rooftop (lead)    |
| Telepon (small)      |   | (lead)  cols 1-6            | cols 7-12                  |
| 0813-1473-5996       |   +----------------------------------------------------------+
| Instagram (small)    |   | footer (malam): Waltie's Rooftop Cafe - address -        |
| @walties_rooftop     |   | mockup note (small), one row, container width            |
+----------------------+   +----------------------------------------------------------+
| footer (malam)       |   
| name, address, note  |   
+----------------------+   
```

- Hero, phone: the two buttons sit side by side (each ≥ 160px wide) at 390; Petunjuk Arah is the filled lampu button and is above the fold. Desktop: the info column is bottom-aligned with "ROOFTOP CAFÉ", starting 48–64px right of the name, not at the far edge.
- Menu andalan, desktop: Bolvano 9:10 at cols 1–5 (≈470 × 520); dish tabletops 4:3 (≈330 × 248) in a 2 × 2 grid at cols 6–12. List columns: Indonesia (Nasi Goreng Waltie's, Mie Goreng Jawa, Ayam Penyet, Nasi Ayam Sambal Matah), Barat (Spaghetti Carbonara, Spaghetti Aglio Olio, Chicken Steak, Fish & Chips), Camilan (Kentang Goreng, Pangsit Goreng, Pisang Goreng Keju), Kopi (Caramel Latte, Cappuccino, Americano), Non-kopi (Matcha Latte, Red Velvet, Lychee Tea). Featured items aren't repeated in the lists.
- Dua suasana: owner-1 8:9, owner-4 8:7; the indoor column starts 120px lower so the captions don't line up like twin cards.
- Hubungi kami: the strand is the same SVG as the hero, already lit, not animated; WhatsApp is a krem button with bata text.

## 8. Motion
**Signature: Lampu menyala** (hero, on load, once).
- First paint: all text and buttons visible. When `<html>` has the `js` class (inline head
  script) and `prefers-reduced-motion: no-preference`, the bulbs start "off" (glass krem at
  35% opacity, halo opacity 0) and a malam scrim covers the panorama at 0.45. Otherwise the
  final state shows.
- At 0.2 s the bulbs switch on left → right: lit glass and halo opacity 0 → 1, 0.18 s each,
  `power2.out`, starts spread across 0.9 s whatever the count (21 desktop, 9 phone).
- At 0.9 s the scrim fades 0.45 → 0 over 0.8 s, `power2.out`. Done by ≈1.7 s.
- Reduced motion or no JS: bulbs lit, no scrim, nothing moves.

The per-bulb sequence *is* the signature moment (rule 2); rule 3's no-stagger applies to reveals.
**Supporting:** each section after the hero fades up once (y 20px → 0, opacity 0 → 1, 0.6 s,
`power2.out`, start `top 85%`). Buttons: translateY(-2px) plus a glow pseudo-element opacity
0 → 1, 180 ms, `cubic-bezier(0.16, 1, 0.3, 1)`. Nothing else moves; the closing strand is static.
Tokens for `lib/motion.ts`: `reveal { y: 20, duration: 0.6, ease: 'power2.out', start: 'top 85%' }`,
`lampu { delay: 0.2, bulb: 0.18, spread: 0.9, warmAt: 0.9, warm: 0.8, scrimFrom: 0.45 }`,
`hoverMs: 180`. Lenis: starter defaults.

## 9. What makes it this shop
1. The terrace's own festoon lights switch on over the name, above a photo of the same bulbs strung through the tree.
2. Dishes drawn from above on a tegel tile in a wooden frame, on the dark plates and bowls Waltie's serves on, beside the owner's real Bolvano post.
3. The name set tall and condensed with "ROOFTOP CAFÉ" spaced underneath like their sign, on section grounds taken from the tabletop tiles (cream, brick, plant green) and the night sky.

## 10. Avoid
- The "dark café, neon glow" template: glow lives only on bulbs, never on cards, borders or headings. No stars, moon, skyline drawing or sky gradient.
- Faking the logo: no inline-stripe face (e.g. Big Shoulders Inline), no traced WALTIE'S artwork. Typeset name until the owner sends the logo.
- Motif creep: bulbs only in the two strands and the hours icon; tegel only in the menu band, the dish tiles and the four theme marks. No tile wallpaper behind text.
- The condensed-caps poster rut: no hard offset shadows, black boxes or all-caps body text.
- Upscaling owner-3 full-bleed at 1440 (1170px native); showing the baked-in bands of owner-1/2/4.
- A six-equal-card menu grid; prices pinned to a far edge; menu lists in Antonio at heading size.
- Quotes, quote marks, names or "semua orang suka" in Kata mereka; any mention of a musholla, smoking or seat numbers.
- A text effect on the name on top of the bulbs: that would be a second signature moment.
- Customer photos (photo-*.jpg) anywhere on the site.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
