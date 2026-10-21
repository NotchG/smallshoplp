# Design brief: Rumah Roti Ciracas

## 1. Concept
The page is the shop as you meet it on Jl. Masjid Al-Ishlah: butter-yellow walls (the real paint
on the shophouse), the name hung like the sign above a window full of turtle buns, and every
product labelled the way Rumah Roti labels everything it sells, with a white paper sticker.
Signature moment: on load, the shop's own sticker (gold ring, "Rumah Roti" in script, CIRACAS,
WhatsApp 0838-9818-8891) is pressed onto the turtle-bun photo, lifted and tilted, then flat and
stuck in 0.45 s. The sticker is the WhatsApp button.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Butter walls, orange "Ciracas" fascia, the logo sticker (white paper, gold ring, script, WA number), turtle and crocodile breads, ribbon-pink seserahan wrap, 7 usable owner photos, :10 hours, 4.9/736, Bahasa Indonesia |
| impeccable | Persuade mode. World chosen from the audience's own artifacts (sticker, baking tray, etalase price cards, wall and shutter, seserahan cellophane, door x-banner, WhatsApp chat); sticker plus wall won, cellophane pink kept for one chapter. Committed colour. Category rut refused (cream + serif "artisan"; pastel candy). Split-hero template replaced by sign / window / door. One authored motion moment. The launcher and concept-seed were not run (they write outside `docs/`); direction derived by hand from `new-work.md` |

## 3. Palette (6 named colours)
Strategy: Committed. Butter owns the everyday chapter (hero + Etalase, about 40% of the page); frosting owns the special-orders chapter; paper the visit chapter; cocoa the close.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `butter` | #F6DC82 | Ground of Hero and Etalase (the wall paint) | cocoa on butter 11.1:1 |
| `paper` | #FFFBF0 | Sticker, price cards, hours pill; ground of Kata mereka and Kunjungi | cocoa on paper 14.5:1 |
| `cocoa` | #3A2015 | All text; secondary button outline; Hubungi band and footer ground | paper on cocoa 14.5:1, butter on cocoa 11.1:1 |
| `crust` | #B84A12 | "Ciracas" in the hero sign; WhatsApp button fill; prices on paper cards; links on paper | paper on crust 5.0:1; crust on paper 5.0:1; crust on butter 3.8:1, so only for text ≥ 24px (the sign); button edge on frosting 3.4:1 |
| `frosting` | #F6C3D3 | Ground of Roti buaya and Kue ulang tahun | cocoa on frosting 9.8:1 (no crust text on frosting) |
| `gold` | #B8913F | The sticker's ring hairline only | decorative, never text |

## 4. Type
Baloo 2 (variable 400–800) for everything readable: soft, round-cornered, large x-height, carries
Indonesian body text at 17 px+. Yellowtail (400) as the script accent, used only for "Rumah Roti"
inside the sticker and in the footer, never for headings, names or body. Both via `next/font/google`,
latin subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 1.9rem + 5.6vw, 6.5rem)` (52 px at 390, 104 px at 1440), Baloo 800, line-height 1.05 | hero name only |
| `--step-head` | `clamp(2.125rem, 1.6rem + 2.2vw, 3.375rem)` (34 / 54 px), Baloo 800, line-height 1.1 | section headings |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` (22 / 28 px), Baloo 600, line-height 1.3 | hero line, section leads, Kata mereka items, sticker script |
| `--step-body` | `clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)` (17 / 19 px), Baloo 400, names 700, line-height 1.55 | running text, product names and prices, hours |
| `--step-small` | `clamp(0.8125rem, 0.79rem + 0.1vw, 0.9375rem)` (13 / 14 px), Baloo 500–700, line-height 1.4 | captions, sticker CIRACAS and number, footer note |

Ratios at 390 / 768 / 1440 stay ≥ 1.25 (lowest is lead/body at 390, 1.29). The hero name may wrap
on phone ("Rumah Roti" / "Ciracas"; each part in its own `white-space: nowrap` span), so 1.05, not 0.9.
Baloo 2's vertical metrics are tall: set line-heights explicitly and check button text centring.
Put the `next/font` variable classes on `<html>` and use `@theme inline` for the font tokens.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥ 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥ 768) |

Grid at ≥ 1024: 12 columns, 24 px gap. Below 1024 sections stack; Etalase is 3-up from 768.

- **Proximity:** price cards overlap their photo's bottom-left edge (−20 px), name and price side by side 8 px apart; captions 12 px under their photo; the roti buaya labels sit on the photo edge nearest the bread they name. Nothing is right-aligned to the end of a row.
- **Wide screens are designed, not stretched:** at 1440 every section is 7/5 or 5/7 (photo beside text), 4/8 (Kata mereka), or 3-up (Etalase). The hero name spans the width as a sign.
- **Lists:** product names and prices at `--step-body`; Kata mereka items at `--step-lead`; hours at `--step-body`. Nothing in a list reaches `--step-head`.

## 6. Products on the page
All from owner photos, pre-cropped (sips: `--cropToHeightWidth H W --cropOffset Y X`, coordinates in source pixels).

| Product (bread names [MOCKUP]; cakes are captioned, not named) | Photo, crop | How it appears |
|---|---|---|
| Roti Kura-Kura | owner-4, 4:3, x 0–1599, y 100–1300 | Hero window, 7 cols; sticker on top-left corner, name card on bottom-left edge |
| Roti Garlic Cheese | owner-2, 4:3, x 240–1600, y 0–1020 (watermark gone) | Etalase card, price card "Rp 10rb" |
| Roti Pizza | owner-7, 4:3, x 200–1560, y 330–1350 | Etalase card, "Rp 45rb / loyang" |
| Muffin & Roti Tawar | owner-8, 4:3, x 0–1080, y 30–840 | Etalase card, no price |
| Roti Buaya (sepasang) + roti buaya kecil | owner-5, 16:10, x 120–1030, y 325–894 (clutter gone) | Roti buaya section, 7 cols; label on top edge for the pairs, bottom edge for the small ones |
| Kue stroberi | owner-6, 1:1, x 0–1600, y 0–1600 | Kue section, 7 cols, caption under |
| Kue cokelat ulang tahun | owner-3, 2:1, x 290–1490, y 30–630 (child's name and heart emoji gone) | Kue section, 5 cols under the text, caption under |

Not a product: owner-1 (shopfront), crop x 80–720, y 46–456, used small in Kunjungi. Customer photos are never used.
owner-5 (910 px) and owner-1 (640 px) are low-res: never display them wider than their source.

## 7. Sections
The brief's draft "Roti bentuk lucu" section is folded in: turtle buns lead the hero, the small crocodile breads share the Roti buaya photo, so no owner photo appears twice.

**Hero** (butter). Like the shopfront: sign over the window, the door beside it. Sticker 148 px phone, 176 px desktop, rotated −4°, overhanging the photo's top-left by 16 px. Leave a 40 px gap above the photo so the sticker never touches the name.
```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +------------------------------------------------------------------+
| banner (draf mockup) |   | banner (draf mockup)                                             |
| Rumah Roti           |   | Rumah Roti Ciracas   <- display, one line, "Ciracas" in crust    |
| Ciracas (crust)      |   |                                                                  |
| Roti lembut dan kue  |   | [STICKER]----------------------------+                           |
| pesanan, dipanggang  |   | | owner-4 turtle tray, 4:3, cols 1-7 |   Roti lembut dan kue     |
| setiap hari. (lead)  |   | |                                    |   pesanan... (lead)       |
| [Buka hari ini       |   | |                                    |   [Buka hari ini 08.10–   |
|  08.10–19.10] (pill) |   | |                                    |    19.10] (paper pill)    |
| [WhatsApp][Petunjuk] |   | |                                    |   [WhatsApp] [Petunjuk    |
| [STICKER]-------+    |   | |                                    |    Arah]   cols 9-12,     |
| | owner-4 4:3   |    |   | |                                    |   bottom-aligned;         |
| |               |    |   | +-[Roti Kura-Kura]-------------------+   short address           |
| +-[Roti Kura-Kura]   |   |                                                                  |
+----------------------+   +------------------------------------------------------------------+
```
**Etalase kami** (butter, continues the wall). Three products on a shelf: a 4 px paper rule under the row.
```
Etalase: phone             Etalase: desktop
+----------------------+   +------------------------------------------------------------------+
| Etalase kami (head)  |   | Etalase kami (head, cols 1-6)    Roti sehari-hari dengan harga   |
| Roti sehari-hari ... |   |                                  bersahabat. (lead, cols 8-12)   |
| +------------------+ |   | +------------------+ +------------------+ +------------------+   |
| | owner-2 4:3      | |   | | owner-2 4:3      | | owner-7 4:3      | | owner-8 4:3      |   |
| +-[Roti Garlic       |   | +-[Roti Garlic     | +-[Roti Pizza      | +-[Muffin & Roti   |   |
|    Cheese Rp 10rb]   |   |    Cheese Rp 10rb]      Rp 45rb/loyang]      Tawar]              |
| desc (body)          |   | desc (body, 36ch)    desc                 desc                   |
| (x3, stacked)        |   | ===================== shelf rule, paper 4px ==================== |
| Juga ada Roti Krim.. |   | Juga ada Roti Krim ... roti manis harian Rp 3rb–8rb (body)       |
+----------------------+   +------------------------------------------------------------------+
```
**Roti buaya untuk hari bahagia** (frosting). The big order, photo first on desktop.
```
Roti buaya: phone          Roti buaya: desktop
+----------------------+   +------------------------------------------------------------------+
| Roti buaya untuk     |   | +-[Roti Buaya (sepasang)]-------------+  Roti buaya untuk        |
| hari bahagia (head)  |   | | owner-5 16:10, cols 1-7             |  hari bahagia (head)     |
| body                 |   | | wrapped pairs (top half)            |  body, cols 9-12         |
| +-[sepasang]-------+ |   | | small crocodiles on trays (bottom)  |  Mulai Rp 150rb · pesan  |
| | owner-5 16:10    | |   | +-[Roti buaya kecil]------------------+  2–3 hari (body 700)     |
| +-[kecil]----------+ |   |                                          [Pesan roti buaya]      |
| Mulai Rp 150rb ...   |   |                                                                  |
| [Pesan roti buaya]   |   |                                                                  |
+----------------------+   +------------------------------------------------------------------+
```
**Kue ulang tahun** (frosting, mirrored).
```
Kue: phone                 Kue: desktop
+----------------------+   +------------------------------------------------------------------+
| Kue ulang tahun      |   | Kue ulang tahun (head)        +--------------------------------+ |
| body                 |   | body (cols 1-5)               | owner-6 1:1, cols 6-12         | |
| +------------------+ |   | Mulai Rp 150rb · 2–3 hari     |                                | |
| | owner-6 1:1      | |   | [Pesan kue ulang tahun]       |                                | |
| +------------------+ |   | +---------------------------+ |                                | |
| caption (small)      |   | | owner-3 2:1, cols 1-5     | +--------------------------------+ |
| +-owner-3 2:1------+ |   | +---------------------------+ Kue stroberi... (caption)          |
| caption (small)      |   | Kue cokelat... (caption)                                         |
| Mulai Rp 150rb ...   |   |                                                                  |
| [Pesan kue ...]      |   |                                                                  |
+----------------------+   +------------------------------------------------------------------+
```
**Kata mereka** (paper). The quiet passage after two photo-heavy chapters: text only.
```
Kata mereka: phone         Kata mereka: desktop
+----------------------+   +------------------------------------------------------------------+
| Kata mereka (head)   |   | Kata mereka (head)        Rotinya berkualitas, pelayanannya      |
| ★ 4,9 dari 736       |   | ★ 4,9 dari 736 ulasan     ramah, sangat sepadan... (lead)        |
| ulasan di Google     |   | di Google (lead, link)    -------------------------------- rule  |
| (lead 600)           |   | Diringkas dari ulasan     Tampilannya cantik seperti foto...     |
| Diringkas dari ...   |   | Google. (small)           ... 4 items, cols 6-12, max 60ch       |
| item (lead) + rule   |   | cols 1-4                                                         |
| (x4)                 |   |                                                                  |
+----------------------+   +------------------------------------------------------------------+
```
**Kunjungi kami** (paper).
```
Kunjungi: phone            Kunjungi: desktop
+----------------------+   +------------------------------------------------------------------+
| Kunjungi kami (head) |   | Kunjungi kami (head)        +----------------------------------+ |
| address (body)       |   | address (body), cols 1-5    | Google map iframe, lazy,         | |
| Senin–Sabtu 08.10–.. |   | Senin–Sabtu 08.10–19.10 <   | cols 6-12, 480px tall,           | |
| Minggu       Tutup   |   | Minggu  Tutup     hari ini  | radius 8px                       | |
| [Petunjuk Arah]      |   | [Petunjuk Arah]             |                                  | |
| owner-1 (full, 3:2)  |   | +-------------+             |                                  | |
| Tampak depan toko    |   | | owner-1 3:2 | (320px)     +----------------------------------+ |
| map, 300px tall      |   | +-------------+ Tampak depan toko (caption)                      |
+----------------------+   +------------------------------------------------------------------+
```
**Hubungi kami + footer** (cocoa). The close: the sticker again, still, at 224 px.
```
Hubungi: phone             Hubungi + footer: desktop
+----------------------+   +------------------------------------------------------------------+
| Hubungi kami (head,  |   | Hubungi kami (head, butter)                       +------------+ |
| butter)              |   | Mau pesan roti buaya atau kue ulang tahun?        |  STICKER   | |
| Mau pesan ... (lead) |   | Chat kami aja. (lead, paper)                      |  224px,    | |
| [STICKER 168]        |   | [WhatsApp 0838-9818-8891] [Telepon] [Petunjuk     |  static,   | |
| [WhatsApp][Telepon]  |   |  Arah]   cols 1-7                                 |  cols 9-11 | |
| [Petunjuk Arah]      |   |                                                   +------------+ |
| ------------------   |   | ---------------------------------------------------------------- |
| footer, stacked:     |   | Rumah Roti (script) | address + hours (small) | draft note       |
| Rumah Roti (script), |   |  cols 1-4           |  cols 5-9               |  cols 10-12      |
| address, hours, note |   |                                                                  |
+----------------------+   +------------------------------------------------------------------+
```

## 8. Motion
**Signature: the sticker press.** Hero sticker only, on load, 150 ms after hydration. Transform
from lifted (scale 1.12, rotate −11°, y −10 px) to stuck (scale 1, rotate −4°, y 0) over 0.45 s,
`expo.out`. Two shadow layers cross-fade by opacity over the last 0.3 s (soft, wide shadow out; tight
2 px shadow in), so it reads as pressed flat. The lifted state is set in CSS under `html.js`, so the
sticker is never hidden and never jumps; with JS off or reduced motion it renders stuck, no motion.
Runs once. The closing sticker is static.

**Supporting:** the starter `Reveal` once per section block (Etalase, Roti buaya, Kue, Kata mereka,
Kunjungi, Hubungi): 20 px, 0.6 s, `power2.out`. No stagger on cards, labels or list items; nothing else in the hero moves.
**Responses (CSS):** buttons hover = overlay opacity 0 → 0.12 and translateY(−1 px), 150 ms; press scale 0.98.
Sticker hover/focus = rotate −4° → −1°, translateY(−3 px), soft-shadow opacity up, 200 ms ease-out.

Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 0.45 }`,
`ease = { out: "power2.out", outStrong: "expo.out", inOut: "power2.inOut" }`, `distance = { reveal: 20 }`,
plus `sticker = { fromScale: 1.12, fromRotate: -11, toRotate: -4, fromY: -10, delay: 0.15 }`. Lenis: starter defaults.

## 9. What makes it this shop
1. The WhatsApp button is their own sticker, the label that goes on every cake and bread bag, pressed onto their turtle buns.
2. Butter-yellow is their wall paint and "Ciracas" in orange is their fascia; the hero is laid out like their shopfront: sign, window, door.
3. Names and prices are paper cards stuck on each photo's edge; the roti buaya and cake chapter is the pink of their own seserahan ribbon and strawberry cake. Hours read 08.10–19.10, exactly as listed.

## 10. Avoid
- The artisan-bakery default: cream ground, brown serif, wheat icons, dark moody photos, "since 19xx". Also the pastel-candy opposite: sprinkles, confetti, pink everywhere. Pink lives only in the special-orders chapter.
- Redrawing their logo icon (shop, chef's hat, wheat) as SVG. The sticker is a typographic echo; the real file is an owner question.
- The sticker as a spinning circular-text badge, or on the page more than twice. Only the sticker tilts; price cards sit straight.
- Script for headings, product names or body. Text over the busy tray photos.
- The split-hero template: the name never moves into the right column; it stays the sign across the top.
- The striped awning motif (its current colours are an open question).
- Customer photos, quoted reviews, reviewer names, car parking, claims like "favourite for weddings".
- Equal icon cards, "Why choose us" blocks, price labels pushed to the far end of a row.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio 1.29; lists at body or lead)
- [x] Max content width set; no detail pinned far from what it describes (1200 px; cards overlap their photo, captions 12 px under)
- [x] Every section has a desktop wireframe that uses the width on purpose (7/5, 5/7, 4/8, 3-up, full-width sign)
- [x] At least 3 products shown (7 products from 6 owner photos)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, static when reduced, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
