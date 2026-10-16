# Design brief: Gula Jawa Bakery

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"Etalase di bawah neon."** The page is the shop's own back wall (the white "Gula Jawa" neon on deep
maroon above the slate-blue bench), then its copper-rack display case with the abon gulung on the biggest
rack and a plain "datang pagi" note, so any Klender regular recognises it and no other bakery could use it.
Signature moment: on load the outlined "Gula Jawa" script switches on like the shop's sign: the
unlit tube shows first, then one short flicker and a steady glow (about 1.1 s, opacity only). With
reduced motion it is lit from the start.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md | Palette mood, looping-script + plain-sans pairing, Bahasa Indonesia with "kamu", the 7 sections, lead with abon gulung, pastry and open kitchen, be honest about selling out |
| raw.json | Hours 07:00–21:00 daily, address, phone, place ID for directions, 4.3 / 1,071 rating, review wording for paraphrases |
| photos (reference only) | Sampled colours (wall #5B322F–#663A3A, bench #465D68, wood #965847); sign-over-bench composition; copper racks and a tent card in the case; the tray of twisted pastries; glaze colours |
| impeccable | Persuade mode. The brief pins the world, so no concept roll (the launcher would write outside `docs/`). Seven local worlds were weighed: the neon sign wall, the copper-rack display case with tent cards, the KRL departure board, the takeaway paper bag, the palm-sugar block, the cashier menu board and a WhatsApp chat. Chosen: the sign wall for the hero, the display case for the products. The departure board was rejected as a costume. Committed colour strategy; a face with a point of view instead of a default script; craft-floor bans (no eyebrows, gradient text, glass or card grids); illustrations as geometry; one authored motion moment |

## 3. Palette (6 named colours)
Committed strategy: maroon carries about 55% of the page. Neon is the only white, and copper is decoration only.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `dinding` (wall) | #6A2C26 | Main ground: hero, Yang paling dicari, Kata mereka, close. Text colour and button fill on `nampan` | neon on it 9.81 ✓ · on nampan 8.93 ✓ |
| `neon` | #FFF6EA | Text on dark grounds, the sign, primary button fill (maroon text) | dinding on neon 9.81 ✓ · on bangku 6.94 ✓ · secondary text = neon 80% (6.91 on dinding, 5.12 on bangku) ✓ |
| `bangku` (bench) | #435866 | Hero bench band, Dapur terbuka ground | neon on it 6.94 ✓ |
| `tembaga` (copper) | #C9845C | Rack lines, hairlines, tent-card border. Never text on `nampan` | on dinding 3.47 (non-text ✓) · on nampan 2.58, so decoration only |
| `gula` (palm-sugar amber) | #E8A94A | The "datang pagi" thread, on maroon only: the hero's "Datang pagi, sebelum habis.", the day-bar segment and its label, and the closing line. Also the text-selection background | on dinding 5.10 ✓ · dinding on gula 5.10 ✓ · on bangku 3.61 (large only) |
| `nampan` (tray) | #ECEDEA | Cool pale ground for Dari oven kami and Kunjungi kami (the display-case interior, not cream) | dinding on it 8.93 ✓ · bangku on it 6.32 ✓ |

Illustration-only colours (inside SVGs, never UI): crumb #F3D9A4, bun tan #C98A3E, floss #8A5328 / #E2B467,
laminate #D99442 / #F0C27A, filling #4A2416, pastry base #E9C98E, glaze pink #EBA7B5, crumble #C2566E,
glaze blue #8CC6EC, pearl #D9DCF5, cocoa #7A4A33 / #5A3424, cheesecake #F2DE9A, cheese #F6E08A,
sourdough #4E2A1C / #8A5A3E, tray #DADDE0, liner #E9EBED, perforation #C9CDD2.

## 4. Type
Two families with `next/font/google`, subset latin, `display: swap`:
- **Leckerli One** 400 (`--font-script`). The bouncy, looping retro script closest to the shop's neon sign (rendered side by side with Oleo Script, Yellowtail, Grand Hotel and Damion; it won on the big G loop and the flourished J). Used **only** for "Gula Jawa": in the hero h1 and in the footer mark. Set as an outline (`color: transparent; -webkit-text-stroke: max(2px, 0.026em)`), like the neon tube.
- **Archivo** variable, `wght` plus the `wdth` axis (`--font-sans`). A sturdy, plain grotesque for everything else. Headings 800 at wdth 87.5; "BAKERY" 700 at wdth 125, uppercase, +0.12em; body 400; buttons 700. `tabular-nums` on prices, hours and the phone number (the face has `tnum`).

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 4.2rem + 2.4vw, 6rem)` (80 → 96px), lh 1.05, 2 forced lines | the "Gula / Jawa" neon only |
| `--step-head` | `clamp(1.875rem, 1.2rem + 2.2vw, 2.75rem)` (30 → 44px), lh 1.1 | section h2 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.4vw, 1.625rem)` (23 → 26px), lh 1.3 | hero line, h3, featured names, paraphrases, phone number, "BAKERY" |
| `--step-body` | `clamp(1.125rem, 1.08rem + 0.15vw, 1.1875rem)` (18 → 19px), lh 1.55 | running text, menu items, buttons, tent cards |
| `--step-small` | `clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)` (14 → 15px), lh 1.45 | captions, day-bar labels, sources, footer |

Ratios at 390 / 768 / 1440: display/head 2.67 / 2.37 / 2.18; head/lead 1.30 / 1.51 / 1.69; lead/body 1.28 / 1.30 / 1.37; body/small 1.29 / 1.28 / 1.27, so every step is at least 1.25×. Body measure max 62ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px (75rem), 12 columns, 24px column gap from 1024px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.5rem + 3vw, 3rem)` → 20px / 48px |
| Section padding phone / desktop (`--section-y`) | `clamp(3.5rem, 2rem + 5vw, 7rem)` → 56px / 104px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices follow the item name inline (12px gap). Tent cards sit 12px under their rack. Day-bar labels touch their segment.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Grounds run full-bleed and content sits in `<Container>`. Breakpoints: one column below 768px; 768–1023px uses two-column splits; 12 columns from 1024px. Corners: 12px on map and tray, 4px on tent cards, 12px on buttons. Elevation: none (flat world, no shadows); the neon glow is the only light effect.

## 6. Products on the page
No owner photos exist (all three listing photos are customer uploads, never on the site). Products
are **flat, top-down vector illustrations**: crisp geometry only, with no shading, perspective, sketch lines or
faces. They sit on **copper cooling racks seen from above** (rounded-rect frame, parallel wires every
16 units, two cross bars), as in the shop's display case. Each is an inline SVG with an Indonesian `<title>`.
Eight products are drawn:

| Product | Where | Geometry |
|---|---|---|
| Abon gulung | Yang paling dicari (largest rack) | A stadium log (bun tan) covered in about 40 short floss strokes (two tones), plus one round slice lying flat beside it: a crumb circle with a 2.5-turn spiral and a floss ring |
| Pastry (laminated) | Yang paling dicari; ×8 on the Dapur terbuka tray | Four overlapping rounded rhombi skewed −35° (laminate), with three lamination lines each and dark filling peeking at the lower edge (photo 3) |
| Pastry donat, pink | Dari oven kami, pastry rack | Base circle; glaze circle at 80% radius; 14 crumble dots on a ring |
| Pastry donat, blue | same | Base; blue glaze; white zigzag drizzle polyline; 6 pearl dots |
| Tiramisu donut | same | Base; cocoa disc; about 20 dust dots in fixed positions |
| Cheese bread | Dari oven kami, roti rack | Tan bun circle with 18 short grated-cheese strokes in the centre |
| Chocolate sourdough | same | Dark boule circle with three curved score arcs |
| Cheesecake per potong | Dari oven kami, kue rack | A wedge with a crust band along the arc |

Featured products get a **tent card** (from the photo-2 case card): neon fill, 1px copper border, 4px radius,
name in Archivo 700 plus price in Archivo 400 tabular, both `dinding` at `--step-body`, 12px under the rack. Menu racks get a plain `--step-small` caption 8px under each item.
Every illustration is `data-mockup` (a placeholder for owner photos) and listed in the checklist.

## 7. Sections
**Hero.** Purpose: recognition plus action. The first viewport is the wall, the sign and the bench. The bench band
is the action bar, as the real bench sits under the real sign. No photos, no nav bar.
```
Hero: phone (390)        Hero: desktop (1440)
+--------------------+   +-----------------------------------------------------------------------+
|Draf: contoh situs..|   |Draf: contoh situs untuk Gula Jawa Bakery. Belum resmi.                |
|  (maroon wall)     |   |   (maroon wall, full bleed; container 1200)                           |
|  Gula   neon 80px  |   |   Gula        neon 96px          |  Abon gulungnya viral.             |
|  Jawa   outline    |   |   Jawa        cols 1-6           |  Datang pagi, sebelum habis.       |
|  BAKERY  (lead,    |   |   BAKERY  (lead, expanded caps)  |  (lead, cols 8-12, centred on sign)|
|   expanded caps)   |   |   Klender, Jakarta Timur (body)  |  Roti dan bun dipanggang di dapur  |
|  Klender, Jakarta  |   |                                  |  terbuka, dekat rel... (body 80%)  |
|  Timur (body)      |   |=======================================================================|
|  Abon gulungnya    |   |  (bangku band, full bleed, 32px padding)                              |
|  viral. Datang pagi|   |  Buka hari ini     Jl. I Gusti Ngurah Rai   [Petunjuk Arah] [WhatsApp]|
|  sebelum habis.    |   |  07.00–21.00       No. 21, Klender          cols 9-12, 12px gap       |
|==(bangku band)=====|   |  cols 1-4           cols 5-8                                          |
| Buka hari ini      |   +-----------------------------------------------------------------------+
| 07.00–21.00        |
| [  Petunjuk Arah  ]|   Phone: everything above the fold at 844px tall (about 600px used).
| [  WhatsApp       ]|   Buttons: full width, 52px tall, neon fill (primary) / neon outline.
+--------------------+
```
**Yang paling dicari.** Purpose: the two stars and the honest timing. Maroon ground.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Yang paling dicari  |   | Yang paling dicari (h2)                                               |
|intro (body)        |   | Dua alasan orang rela datang pagi-pagi ke Klender. (body, cols 1-6)   |
|[rack: abon log +   |   | [ copper rack: abon gulung log + slice ] [ copper rack: pastry ]      |
| spiral slice]      |   | cols 1-7, art about 560px wide           cols 8-12                    |
|(Abon gulung Rp22rb)|   | (Abon gulung · Rp 22rb) tent 12px below  (Pastry · mulai Rp 25rb)     |
|blurb (body)        |   | blurb (body, max 44ch)                   blurb (body)                 |
|[rack: pastry]      |   |                                                                       |
|(Pastry mulai 25rb) |   | Paling lengkap (gula)                                                 |
|blurb               |   | 07.00 [█████|---------------------------------------------] 21.00     |
|Paling lengkap      |   |                          Makin sore, makin sedikit pilihan. (small)   |
|07.00[██|-----]21.00|   | Datang pagi, sebelum abon gulungnya habis. (lead, cols 1-8)           |
|Makin sore, ...     |   +-----------------------------------------------------------------------+
|Datang pagi, ...    |
+--------------------+   Day bar: 2px neon track, 6px gula segment 07.00–10.00 (21.4%), static.
```
**Dari oven kami.** Purpose: the wider range by group. Nampan ground, so the glazes read.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Dari oven kami (h2) |   | Dari oven kami (h2)  + intro (body), cols 1-6                         |
|intro               |   | cols 1-6                    | cols 7-9            | cols 10-12        |
|[rack: cheese bread,|   | [rack: cheese bread,        | [rack: 3 donuts]    | [rack: cheesecake]|
| sourdough]+captions|   |  chocolate sourdough]       |  captions under each|  caption          |
|Roti manis & asin   |   | Roti manis & asin  mulai    | Pastry & donat      | Kue & cheesecake  |
| mulai Rp 12rb      |   |   Rp 12rb  (h3 + inline)    |  mulai Rp 25rb      | Cheesecake per    |
|Abon gulung Rp 22rb |   | Abon gulung Rp 22rb | Roti  | Pastry              |  potong Rp 50rb   |
|Cheese bread ...    |   | Cheese bread        | gula..| Tiramisu donut      | Cheesecake brownie|
|[rack: 3 donuts]    |   | ... list in 2 CSS columns   | Pastry donat aneka  | Bolu gula jawa    |
|Pastry & donat ...  |   |                             |  glaze              |                   |
|[rack: cheesecake]  |   | ------------------------- copper hairline ----------------------------|
|Kue & cheesecake ...|   | Sesuai namanya: roti gula jawa, ... (body) · Harga dan gambar masih   |
|footnotes (small)   |   |   contoh. (small, same line group, cols 1-12)                         |
+--------------------+   +-----------------------------------------------------------------------+
```
**Dapur terbuka.** Purpose: the open kitchen as proof. Bangku ground; the tray illustration stands in for a kitchen photo.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Dapur terbuka (h2)  |   | Dapur terbuka (h2)           | [ tray, top-down: perforated liner,    |
|Roti dan bun        |   | Roti dan bun dipanggang di   |   2 rows × 4 laminated pastries,       |
|dipanggang di depan |   | depan mata. (lead)           |   rotated −20°; 16:10, 12px radius ]   |
|mata. (lead)        |   | Dapurnya terbuka, jadi ...   |                                        |
|body                |   | (body, max 40ch) cols 1-5    | cols 6-12, vertically centred          |
|[tray 16:10, full]  |   |                              |                                        |
+--------------------+   +-----------------------------------------------------------------------+
```
**Kata mereka.** Purpose: paraphrased proof, including the honest one. Maroon ground; a list, not cards.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Kata mereka (h2)    |   | Kata mereka (h2)          | Abon gulungnya memang sesuai reputasi,    |
|4,3 di Google dari  |   | 4,3 di Google dari 1.071  | tapi cepat sekali habis. (lead)           |
|1.071 ulasan (body) |   | ulasan (body)             | Ulasan Google (small, 8px below)          |
|Ringkasan, bukan .. |   | Ringkasan ulasan Google,  | ---------- copper hairline -------------- |
|--------------------|   | bukan kutipan. (small)    | Pastry-nya jangan dilewatkan: ... (lead)  |
|paraphrase 1 (lead) |   | cols 1-4, top-aligned     | ... 5 items, cols 5-12                    |
|Ulasan Google(small)|   |                           |                                           |
|... ×5              |   |                           |                                           |
+--------------------+   +-----------------------------------------------------------------------+
```
**Kunjungi kami.** Purpose: find it and know the seating. Nampan ground. DOM order is info first, then map.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Kunjungi kami (h2)  |   | [ Google Maps iframe, 4:3, 12px radius,  ] | Kunjungi kami (h2)       |
|address (body)      |   | [ lazy, cols 1-7                         ] | address (body)           |
|Dekat rel kereta... |   | [                                        ] | Dekat rel kereta di      |
|Setiap hari 07.00–  |   | [                                        ] |  Klender.                |
| 21.00 (lead)       |   | [                                        ] | Setiap hari 07.00–21.00  |
|Tempat duduknya ... |   | [                                        ] |  (lead, tabular)         |
|[ Petunjuk Arah   ] |   | [                                        ] | Tempat duduknya sedikit..|
|[ map 4:3        ]  |   |                                            | [Petunjuk Arah] cols 8-12|
+--------------------+   +-----------------------------------------------------------------------+
```
**Hubungi kami + footer.** Purpose: a real close; the way around "habis". Maroon ground.
```
phone                    desktop
+--------------------+   +-----------------------------------------------------------------------+
|Hubungi kami (h2)   |   | Hubungi kami (h2)                     | [ Chat WhatsApp ] [ Telepon ] |
|Takut kehabisan? ...|   | Takut kehabisan? Chat dulu lewat      | [ Petunjuk Arah ]             |
| (lead)             |   | WhatsApp, minta ... (lead) cols 1-6   | cols 7-12, top-aligned        |
|0822-6184-2007      |   | 0822-6184-2007 (lead, tabular)        |                               |
|Telepon atau WA     |   | Telepon atau WhatsApp (small)         |                               |
|[ Chat WhatsApp ]   |   |-----------------------------------------------------------------------|
|[ Telepon ][ Arah ] |   | Gula Jawa (neon mark, lead size, static) Bakery · Jl. I Gusti Ngurah  |
|---- footer ----    |   | Rai No. 21, Klender · Setiap hari 07.00–21.00 · Alamat dan jam dari   |
|neon mark, address, |   | Google Maps · Draf situs contoh (small, neon 80%)                     |
|hours, notes (small)|   +-----------------------------------------------------------------------+
+--------------------+
```

## 8. Motion
**Signature: neon switch-on (hero h1).** The h1 is two stacked layers in one grid cell. Under it, an
`aria-hidden` "tube" copy (stroke neon at 32% opacity) that is always visible. On top, the real h1 text (neon
stroke plus a static glow: `drop-shadow(0 0 2px neon/.9) drop-shadow(0 0 14px #FFD6BE/.45)`). Pure CSS
keyframes on the lit layer's **opacity**, so it runs before hydration and works with JS off:
`0% 0 → 14% 0.8 → 24% 0.15 (linear) → 100% 1 (cubic-bezier(0.16,1,0.3,1))`, 900ms, delay 200ms,
`fill-mode: both`. That is one dip, well under three flashes per second. Reduced motion: no animation, lit from
the start. Nothing else in the hero moves. The footer neon mark is static.
**Supporting:** the starter `Reveal` on sections 2–7: one fade-up of 20px, 0.6s, ease-out, once, at "top 85%".
No stagger inside sections, and the racks, products and paraphrases arrive with their section.
**Responses:** buttons get an overlay-opacity hover of 160ms ease-out and a press `scale(0.98)` of 120ms. Links: underline offset only.
**Motion tokens:** keep the starter's `lib/motion.ts` unless its reveal differs from y 20 / 0.6s / ease-out; Lenis defaults.

## 9. What makes it this shop
1. The hero recreates the dine-in corner: an outlined Leckerli One "Gula Jawa" lit like the shop's sign, on its
   maroon wall, above a slate-blue band where the bench is, which holds the hours and buttons.
2. Products sit top-down on copper cooling racks with tent-card labels, as in the display case. The
   abon gulung gets the biggest rack and is the only item drawn twice (log and spiral slice).
3. Honesty as a feature: a day bar marking "Paling lengkap" in the morning, "Makin sore, makin sedikit
   pilihan.", and "Datang pagi, sebelum abon gulungnya habis." The reviews' complaint becomes the shop's advice.

## 10. Avoid
- The category default: a cream ground, serif display, a croissant stock photo, three equal cards and "Tentang kami".
- The neon cliché: a black ground, several neon colours, glow on buttons, cards or body text, looping flicker.
  One sign, one colour, switched on once, on maroon.
- Fake materials: wood grain or brick by gradient, noise or grain overlays. Wood appears only as colour, if at all.
- Illustrations that turn into pictures (shading, perspective, sketch lines, faces) or into brown blobs.
  Keep the floss strokes and lamination lines crisp, and let tent cards and captions name every item.
- Kicker or eyebrow labels above headings, section numbers, the rating as a giant metric, and quotes or names on reviews.
- Promising a full display all day or overpraising the cheesecake. Customer photos anywhere.
- Prices pushed to the right edge of a wide column. Mixing "Anda" and "kamu". English UI words ("Order now").
- Concept risk: the sign reads small on a 1440 wall. Keep the sign block and the hero line side by side,
  vertically centred, with the bench band full-bleed so the first viewport reads as one wall.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Checked at 390, 768, 1024, 1200 and 1440. Lists and paraphrases are at lead or body, below the head; the footer neon mark is lead size.
- [x] Max content width set; no detail pinned far from what it describes. 1200px. Prices are inline after names, tent cards 12px under racks, captions 8px under items, day-bar labels on their segment.
- [x] Every section has a desktop wireframe that uses the width on purpose: 6/6, 7/5, 6/3/3, 5/7, 4/8, 7/5 and 6/6 splits; bench and grounds are full-bleed.
- [x] At least 3 products shown (food and product shops). Eight are drawn: abon gulung, pastry, two pastry donat, tiramisu donut, cheese bread, chocolate sourdough and cheesecake.
- [x] Within motion-rules.md. One signature (opacity only), section-level reveals, fast responses, no React Bits, and reduced motion means none.
- [x] Brief is decisions, not essays (2–4 pages, wireframes aside).
