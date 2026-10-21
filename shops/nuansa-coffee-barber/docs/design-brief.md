# Design brief: nuansa Barber & Coffee

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
The page is nuansa's own shopfront after dark, then a step inside. A navy fascia carries the
lowercase wordmark at the real sign's proportion over the lit shopfront. Inside come the concrete
barbershop wall, with its gold-framed mirror and "Keep at HANDSOME" lettering, and then the coffee
counter. Regulars and the owner recognise the sign and that wall first.
Signature moment: on load the fascia switches on. The wordmark catches with one brief
hesitation, its halo blooms, and the shopfront photo brightens as if the lights inside came on
(about 1.1 s, opacity only, once).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name lockup and order from the sign; navy, white, concrete, brass palette; mirror shape and wall lettering; Indonesian "kamu" copy; all facts and [MOCKUP] lines; owner-1 and owner-3 usable after crops, owner-2 and owner-4 not used |
| impeccable | Persuade mode. Its new-work method was applied by hand (its launcher would download a binary outside `docs/`, so `context` and `concept-seed` did not run; there is no PRODUCT.md or DESIGN.md). There were seven world candidates. Kept: the fascia lightbox, the Keep-at-HANDSOME wall with its gold mirror, and the coffee counter. Dropped: the striped cape (cliché), the wavy arch (organic clip-path), the queue ritual (implies a queue system), and the price stand. Committed colour; faces outside its default list; one authored motion moment; craft-floor refusals in §10 |

## 3. Palette (4–6 named colours)
Strategy: Committed. Fascia navy owns the first and last screens (about 35% of the page). The
interior sections sit on concrete and limewash. Brass appears only as frames, hairlines and the
hours dot. The scene: someone in Cipinang Cempedak checks their phone at dusk, deciding whether
to stop for a cut and a kopi before 22.00. They are looking for the navy sign, and the interior
reads in daylight tones.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `fascia` | #16215A | Hero and Kunjungi grounds; headings and primary buttons on light grounds; focus ring on light | Lightbox on it 13.9:1; it on Limewash 12.5:1, on Concrete 10.1:1 |
| `lightbox` | #F5F6FA | All text and the primary button fill on navy; plates and ice in illustrations | 13.9:1 on Fascia |
| `limewash` | #ECEAE5 | Ground: Kopi, Juga di sini | Ink 14.4:1, Fascia 12.5:1 |
| `concrete` | #D6D3CD | Ground: Barbershop, Kata mereka | Ink 11.6:1, Fascia 10.1:1 |
| `ink` | #161A2B | Body text on light grounds; draft banner ground (Lightbox text 16.0:1); Americano cup | 14.4:1 on Limewash, 11.6:1 on Concrete |
| `brass` | #C8A15A | Mirror frame, counter line, hairlines, hours dot; small text and the focus ring on navy only | 6.2:1 on Fascia (text OK); 2.0:1 on Limewash, so **never** text or a focus ring on light grounds |

Text selection: Brass background, Ink text. Illustration-only fills are listed in §6.

## 4. Type
Two families via `next/font/google`, latin subset, `display: swap`. Neither is on impeccable's
default list.
- **Comfortaa** 600/700 is the sign's rounded lowercase (single-storey "a"). It sets the wordmark,
  section headings (typed lowercase), the descriptor, h3, nav and buttons.
- **Gelasio** 400/700 plus italics is the "Keep at HANDSOME" serif, Georgia-like as on the wall.
  It sets lead statements (italic), body, prices and the wall lettering.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 3.6rem + 3.6vw, 6rem)` (72 → 96px), lh 0.95, Comfortaa 700, -0.01em | "nuansa" wordmark only (always one line: ~3.5em wide) |
| `--step-head` | `clamp(2.125rem, 1.6rem + 2.2vw, 3.5rem)` (34 → 56px), lh 1.1, Comfortaa 700 | section headings: "barbershop", "kopi", "juga di sini", "kata mereka", "kunjungi kami" |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)` (22 → 28px), lh 1.3 | Gelasio italic: lead lines. Gelasio roman: review themes. Comfortaa 700: h3, plus "BARBER & COFFEE" (uppercase via CSS, +0.12em) inside the h1 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.15vw, 1.125rem)` (17 → 18px), lh 1.6 (1.65 and +0.01em on navy) | Gelasio body, service and product names, prices (`lining-nums tabular-nums`); Comfortaa 700 for buttons |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` (13 → 14px), lh 1.45 | captions ("Gambar ilustrasi"), banner, footer, nav (Comfortaa 600) |

Checked ratios at 390, 768, 1024 and 1440: every step is at least 1.29× the one below it.
Body measure is at most 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px (75rem) |
| Page margins phone / desktop (`--gutter`) | 20px / 48px: `clamp(1.25rem, 4vw, 3rem)` |
| Section padding phone / desktop (`--section-y`) | 64px / 112px: `clamp(4rem, 8vw, 7rem)` |

- **Proximity:** each price sits 12px after its service name on the same line, with no dotted
  leaders and no right-aligned price column. Product name and price sit at most 16px under each
  drawing. The hours dot is 8px from its text. The "Gambar ilustrasi" caption is 12px under the
  counter row.
- **Wide screens:** a 12-column grid inside the container. Every section is a deliberate split
  or row (wireframes below). The phone stacks in DOM order.
- **Lists:** services, products, extras and themes use `--step-body` to `--step-lead`, never heading size.
- **Shapes:** the only rounded shapes are the stadium mirror frame and the pill buttons (min-height
  48px). Photos and the map have square corners, like the shop windows.

## 6. Products on the page
Coffee shop plus barber: three products are shown as **flat, front-view geometric SVG
drawings** (no outlines, gradients, shading, perspective or steam) standing on one 2px brass
counter line. Name and price sit under each. The row is about 180px tall on desktop and 110px on
the phone, with a shared baseline, and is captioned "Gambar ilustrasi, bukan foto menu."
1. **Kopi Susu Gula Aren** (reviews 2). A clear cup (trapezoid, wall #DDE1EA) with three bands,
   bottom up: gula aren #5A2E14, kopi susu #B98A62, susu #EFE6D8. Three rounded-square ice
   cubes in Lightbox, and a Fascia straw. Drawn iced: [MOCKUP] serving style.
2. **Americano** (reviews 3). An Ink ceramic cup with a ring handle (the black cup seen on their
   outdoor tables, from a customer photo used as reference only) and a crema rim ellipse #7A4A2A.
3. **Croissant** [MOCKUP]. Five overlapping rounded segments alternating #C98A3E and #A9672A,
   on a flat Lightbox plate ellipse.

All prices and the croissant carry `data-mockup`. Barbershop services are shown by owner-3 at work
in the mirror frame, beside the [MOCKUP] price list. **Not used:** owner-2 (looks like stock,
unconfirmed, and a warm studio photo would clash with the drawings), owner-4 (customers'
faces), and every `photo-*.jpg`.
Crops are made once with `sips`. `shopfront.jpg` comes from owner-1: x 10–610, y 222–558
(600×336). That sits just below the real sign and excludes the "OPEN TO SERVE YOU" banner.
`barbershop.jpg` comes from owner-3: x 440–1320, y 40–1067 (880×1027). That removes the person
at the left edge, the face in the right-hand mirror and the wall-letter fragments.

## 7. Sections
**Hero.** Recognition, hours and actions 1 and 2. The h1 is the wordmark lockup, centred like the
sign. The circled "n" is drawn as a CSS circle plus the letter, `aria-hidden`, and is a placeholder
for the logo file. The hero copy and buttons are never hidden by motion. Phone: the photo is full
bleed and sits right under the lockup, so the page's sign and the real shopfront read as one
facade.
```
Hero: phone (390)                   Hero: desktop (1440)
+--------------------------------+  +----------------------------------------------------------------+
| Draf untuk nuansa · belum resmi|  | Draf tampilan untuk nuansa · belum resmi ...   (Ink banner)    |
|################################|  |################################################################|
|           nuansa(n)    display |  |                                  Barbershop  Kopi  Kunjungi    |
|        BARBER & COFFEE   lead  |  |                       nuansa(n)            display 96, centred |
|+------------------------------+|  |                    BARBER & COFFEE         lead, tracked caps  |
||                              ||  |  +------------------------------------+                        |
|| shopfront.jpg, 16:9,         ||  |  |                                    |  Potong rambut rapi    |
|| full bleed                   ||  |  |  shopfront.jpg (cols 1-7, 16:9)    |  dan kopi enak, di     |
|+------------------------------+|  |  |  barber window + cafe door         |  satu tempat. (lead i) |
| Potong rambut rapi dan kopi    |  |  |                                    |  • Buka hari ini       |
| enak, di satu tempat. (lead i) |  |  |                                    |    10.00–22.00 (body)  |
| • Buka hari ini 10.00–22.00    |  |  |                                    |  [Petunjuk Arah]       |
| [Petunjuk Arah]  [ WhatsApp ]  |  |  |                                    |  [WhatsApp]            |
|################################|  |  +------------------------------------+  Jl. Biru Laut VIII... |
+--------------------------------+  |################################################################|
                                    +----------------------------------------------------------------+
```
On the phone everything is centred and sits within about 650px. On desktop the text column
(cols 9–12) is left-aligned and vertically centred on the photo, with the two buttons side by side
when they fit.

**Barbershop.** Show that the cut comes out right, and list the services. The "Keep at" (italic,
body size) and "HANDSOME" (700 caps, lead size) lettering sits 16px above the frame, as on the wall.
```
Barbershop: phone                   Barbershop: desktop
+--------------------------------+  +----------------------------------------------------------------+
| barbershop               head  |  |     Keep at                         barbershop           head  |
| Tunjukkan gaya yang kamu mau,  |  |     HANDSOME                        Tunjukkan gaya yang kamu   |
| kami yang kerjakan.   lead i   |  |   .-------------.                   mau, kami yang kerjakan.   |
|         Keep at                |  |  /               \                  - Bawa foto gaya ... sesuai |
|         HANDSOME               |  | |  barbershop.jpg |                 - Potong cepat, hasil rapi. |
|      .-----------.             |  | |  brass stadium  |                 - Capster paham perawatan.. |
|     /             \            |  | |  frame, 6px     |                 Layanan & harga        h3  |
|    | barbershop    |           |  | |  (cols 1-5)     |                 Potong Rambut  Rp 60rb      |
|    | .jpg, 75% w   |           |  |  \               /                  Potong + Keramas  Rp 75rb   |
|     \             /            |  |   '-------------'                   Cukur Jenggot  Rp 30rb      |
|      '-----------'             |  |                                     Potong Anak                 |
| - Bawa foto gaya ...    body   |  |                                     Hair Coloring  mulai Rp150rb|
| Layanan & harga  /  list       |  |                                     [ Booking via WhatsApp ]    |
| [ Booking via WhatsApp ]       |  +----------------------------------------------------------------+
+--------------------------------+   frame cols 1-5, text cols 7-12, Concrete ground
```

**Kopi.** Show the coffee, with prices. The counter row is on the right on desktop, mirroring the
barbershop's photo on the left.
```
Kopi: phone                         Kopi: desktop
+--------------------------------+  +----------------------------------------------------------------+
| kopi                     head  |  | kopi                    head  |  [iced cup] [black cup] [crois]|
| Potong rapi, kopi siap. Duduk  |  | Potong rapi, kopi siap. Duduk |  ======== brass counter =======|
| dulu, giliranmu sebentar lagi. |  | dulu, giliranmu sebentar lagi.|  Kopi Susu  Americano Croissant|
|  [iced]  [black]  [croissant]  |  | Kopi Susu Gula Aren: manis    |  Gula Aren  Rp 20rb   Rp 22rb  |
| ====== brass counter ======    |  | gula aren, kopinya cerah ...  |  Rp 22rb                       |
| Kopi Susu  Americano Croissant |  | Americano: andalan buat ...   |  Gambar ilustrasi, bukan foto..|
| Gula Aren  Rp 20rb   Rp 22rb   |  | Juga ada Cappuccino, Caffè    |                                |
| Gambar ilustrasi ...    small  |  | Latte, Es Kopi Susu, ...      |                                |
| Kopi Susu Gula Aren: ...  body |  | Pesan dan bayar di kasir.     |                                |
| Juga ada ... / Pesan dan bayar |  +----------------------------------------------------------------+
+--------------------------------+   text cols 1-5, counter cols 6-12 (3 equal slots), Limewash
```

**Juga di sini.** Extras, as a compact row. Items are h3 plus one body line, with no icons and no cards.
```
Juga di sini: phone                 Juga di sini: desktop
+--------------------------------+  +----------------------------------------------------------------+
| juga di sini             head  |  | juga di sini    head | Paket Potong  | Cuci sepatu | Bayar non-|
| Paket Potong + Kopi        h3  |  | (cols 1-4)           | + Kopi    h3  |         h3  | tunai  h3 |
| Potong dulu, lalu ngopi...     |  |                      | Potong dulu,  | Layanan     | Tunai,    |
| ------------------------------ |  |                      | lalu ngopi... | mitra, di   | e-wallet, |
| Cuci sepatu / Bayar non-tunai  |  |                      |               | tempat.     | debit.    |
+--------------------------------+  +----------------------------------------------------------------+
  brass hairlines between items       items cols 5-12, Limewash ground with a brass hairline on top
```

**Kata mereka.** Social proof without quotes. The rating sits at body size: no big number.
```
Kata mereka: phone                  Kata mereka: desktop
+--------------------------------+  +----------------------------------------------------------------+
| kata mereka              head  |  | kata mereka            head  | Hasil potongannya sesuai yang  |
| 4,6 dari 326 ulasan di Google  |  | 4,6 dari 326 ulasan di Google| diminta... (lead, roman)       |
| Baca ulasan di Google Maps     |  | Baca ulasan di Google Maps   | ------------------------------ |
| Rangkuman ..., bukan kutipan.  |  | Rangkuman dari ulasan Google,| Kopinya enak dan potongnya ... |
| ------------------------------ |  | bukan kutipan.       small   | ------------------------------ |
| 4 themes, lead roman, brass    |  |                              | Tempatnya bersih, ramah, ...   |
| hairlines between              |  |                              | ------------------------------ |
+--------------------------------+  | (cols 1-5)                   | Harganya terjangkau... (6-12)  |
                                    +----------------------------------------------------------------+
```

**Kunjungi kami + footer.** Get there and get in touch. Back on the navy street at night, to close.
```
Kunjungi: phone                     Kunjungi: desktop
+################################+  +################################################################+
| kunjungi kami            head  |  | kunjungi kami         head  | +--------------------------------+|
| Jl. Biru Laut VIII No.48C,     |  | Jl. Biru Laut VIII No.48C,  | |                                ||
| Cipinang Cempedak, ... 13340   |  | Cipinang Cempedak, ...      | |  Google Maps embed, lazy,      ||
| Jam buka                   h3  |  | Jam buka              h3    | |  4:3 (cols 6-12)               ||
| Senin–Minggu 10.00–22.00       |  | Senin–Minggu 10.00–22.00    | |                                ||
| Buka setiap hari               |  | Buka setiap hari            | |                                ||
| [ Petunjuk Arah ]  full width  |  | [Petunjuk Arah] [WhatsApp]  | |                                ||
| [ WhatsApp ]                   |  | [Telepon 0882-9630-2726]    | +--------------------------------+|
| [ Telepon 0882-9630-2726 ]     |  | Booking jadwal potong via WA|                                   |
| +----------------------------+ |  |----------------------------------------------------------------|
| | map 4:3                    | |  | nuansa Barber & Coffee · Jatinegara   Info dari Google Maps.   |
| +----------------------------+ |  | Draf, bukan situs resmi.                        small          |
| footer, small                  |  +################################################################+
+################################+
```

## 8. Motion
**Signature: "papan menyala" (the sign switches on).** It runs on the hero, on load, once, inside
`useGSAP` scoped to the hero.
- The lit letters layer (wordmark, mark and descriptor) starts at opacity 0.18. At 0.15s it goes
  to 0.85 (0.06s), down to 0.35 (0.07s), then to 1 (0.12s), all `power2.out`. That is one
  hesitation, never more.
- The glow layer is an `aria-hidden` duplicate of the lockup carrying a static `text-shadow` halo
  in Lightbox and pale blue. It goes from opacity 0 to 1 over 0.5s from 0.40s, `power2.out`.
- The shopfront photo goes from opacity 0.55 to 1 over 0.6s from 0.50s, `power2.out`. The whole
  sequence ends at about 1.1s.
- Reduced motion or JS off: everything starts and stays at the final state (lit, glowing, photo
  at full opacity). GSAP sets the from-state before paint, and CSS holds the final state.

**Supporting:**
- Starter `Reveal` runs once per section on Barbershop, Kopi, Juga di sini, Kata mereka and
  Kunjungi: opacity 0 to 1, y 20 to 0, 0.6s, ease-out, starting at "top 85%".
- Buttons: on hover, an overlay pseudo-element fades in (opacity, 180ms ease-out). On press,
  scale 0.98 (120ms).
- Nothing else moves: not the mirror, the drawings, the rating, the map or the nav.

**Tokens for `lib/motion.ts`** (add these; keep the starter's reveal tokens if they're within
0.5–0.8s and about 20px): `sign = { unlit: 0.18, delay: 0.15, steps: [0.06, 0.07, 0.12],
dip: 0.35, glowAt: 0.4, glow: 0.5, photoFrom: 0.55, photoAt: 0.5, photo: 0.6, ease: "power2.out" }`.
Lenis uses the starter defaults.

## 9. What makes it this shop
1. The wordmark is set at the real sign's proportion (about 24% of a 1440 screen) on fascia navy,
   directly above their own lit shopfront, which is cropped just below the real sign. The page
   completes their facade, and it reads "BARBER & COFFEE" in the sign's order.
2. The barbershop photo sits in a brass stadium frame copied from their gold mirrors. Above it,
   "Keep at HANDSOME" is set as on their wall: italic "Keep at" over bold serif caps.
3. Kopi Susu Gula Aren is drawn in its three layers next to an Americano in the black cup from
   their outdoor tables, on one brass counter line, with their counter sign underneath: "Pesan dan
   bayar di kasir".

## 10. Avoid
- **The barbershop template:** black and gold, barber-pole stripes, scissors or razor icons,
  script fonts, distressed textures, "EST." badges (no years in business, ever).
- **The coffee template:** a cream ground, brown and serif display, bean icons, latte-art stock photos.
- **The "near-black plus neon glow" cluster.** The glow lives only on the hero wordmark. Navy
  stays a saturated blue and never black. No glowing borders or buttons, and no repeat of the
  sign effect on scroll.
- **Craft-floor refusals:**
  - No eyebrow or kicker above any heading (no small "BARBERSHOP" over "barbershop").
  - No hero-metric rating.
  - No equal icon cards for services or extras.
  - No section numbers.
  - No gradient text.
  - No wavy arch done as a clip-path.
- **Proximity failures:** prices pinned to the right edge, or dotted leaders across a wide row.
- **"Keep at HANDSOME" used more than once**, or larger than the section heading.
- **A second wordmark in the nav.** The hero lockup is the logo.
- **Forbidden content:** quotes, reviewer or barber names, "sejak 2021", owner-2, owner-4, and any
  `photo-*.jpg`.
- **The drawings sliding into sketchy or shaded illustration.** If a shape can't be specified
  exactly, cut it.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. The minimum
      ratio is 1.29 (body to small). Lists, prices, themes and wall lettering are all at most
      `--step-lead`. Only the hero h1 lockup goes above head.
- [x] Max content width set; no detail pinned far from what it describes. The container is 1200px.
      Prices are 12px after names, product labels 16px under the drawings, and the hours dot 8px.
- [x] Every section has a desktop wireframe that uses the width on purpose: splits of 7/4, 5/6,
      5/7, 4/8, 5/7 and 5/7.
- [x] At least 3 products shown (food and product shops): Kopi Susu Gula Aren, Americano and
      Croissant are drawn, and the services are shown in owner-3 beside the price list.
- [x] Within motion-rules.md: one signature moment, section-level reveals only, opacity and
      transform only, nothing hidden that you need, reduced motion means none, no React Bits.
- [x] Brief is decisions, not essays (2–4 pages).
