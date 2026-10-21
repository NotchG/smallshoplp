# Design brief: KoffieQue

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**Jendela baja (steel window).** The page is KoffieQue's indoor room seen through its own black
steel-framed glass partition. A bright white wall carries thick black mullions that split the hero
and the rooms section into panes, and each pane holds one reason to come: coffee, a meal, the
meeting room, the mushola. It fits because that grid, the black marble tables and the wire globe
pendants are what make this cafe look like itself, not like every cafe in Jakarta Timur.
**Signature moment:** three wire globe pendants hang from the hero's top rail and switch on, one
after another, on load. The last lamp's light passes to the gold dot beside "Buka hari ini". The
room's own lamps say "we're open".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Facts, hours (Fri–Sat 08.30–23.30), facilities, tone lines, Bahasa Indonesia, what not to claim (service, platter, taste superlatives, long laptop stays), place ID for directions |
| Photos (reference only) | photo-3: steel grid partition, wire globe pendants, black marble tables, gold-on-white painting. photo-1: white canopy, amber string lights. photo-2: forms of the iced latte and rice bowl, used for the illustrations |
| owner-1.jpg | The only site photo: cheeseburger on a white plate, 352×422. Hero inset card at native width, never stretched |
| impeccable | Persuade mode. Named the rut (dark moody latte hero, cream-and-serif cafe, black-and-gold luxury template) and worked through seven candidates from the shop's world. Scene-based light ground, font blacklist, craft-floor bans (no kickers, fake textures, gradient text or sketch SVG), display max 6rem, one authored motion moment |
| impeccable (not run) | Launcher, `concept-seed` and the decision page not run: they write outside `docs/` and need a live user. The direction was chosen by hand using new-work steps 1–4 |

Candidates, ranked: steel window grid (**chosen, structure**); wire globe pendants (**chosen, signature**);
string-light canopy (kept as one pane); black marble tabletop (kept as the Menu ground, flat, no faked
veins); acrylic table-stand menu card (declined: too small to carry a page); cashier receipt
(declined: review 4's payment friction); KRL departure board for the hours (declined: costume, cliché split-flap).

## 3. Palette (6 named colours)
Scene: a commuter in daylight on Jl. Rawa Domba checks the phone before work, which calls for a
light ground. Black owns whole regions (frame, Menu, close); gold is light and hairline, never a fill.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `dinding` (wall) | #F4F4F1 | Page ground, glass panes, text on dark | Baja on it 16.6:1 |
| `baja` (steel) | #151515 | Text, mullions and frame, primary button, closing band | Dinding on it 16.6:1 |
| `marmer` (marble) | #1E1E20 | Menu section ground, indoor pane | Dinding on it 15.1:1 |
| `emas` (gold) | #D2A84E | Lamp glow, string-light bulbs, hairlines, prices and focus ring on dark | On marmer 7.5:1, on baja 8.2:1. On dinding 2.0:1, so **never text on light** |
| `abu` (banquette grey) | #5C5D60 | Secondary text on light | On dinding 6.0:1 |
| `abu-terang` | #B4B4B0 | Secondary text on dark | On marmer 8.0:1, on baja 8.8:1 |

Focus ring: 2px `baja` with a 2px offset on light grounds, 2px `emas` on dark grounds.
Selection: `emas` background with `baja` text.

## 4. Type
Display: **Josefin Sans** (600). A geometric 1920s-modern face, elegant without being a serif, with a
long-tailed Q that keeps the capital Q in "KoffieQue" proud. Body: **Albert Sans** (400, 500, 600).
A clean grotesque with an open x-height, good for Indonesian copy. Both load through `next/font/google`
with the latin subset and `display: swap`. Plus Jakarta Sans, DM Sans and Inter are deliberately avoided
(impeccable defaults, and "Jakarta for a Jakarta cafe" is the association trap).

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 2rem + 6vw, 6rem)` (56→96px) | Wordmark "KoffieQue" only (Josefin 600, one line, leading 0.95). About 4.6em wide, so 258px at 360, which fits the 276px pane |
| `--step-head` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (32→52px) | h2 section headings (Josefin 600, leading 1.1) |
| `--step-lead` | `clamp(1.4rem, 1.25rem + 0.55vw, 1.625rem)` (22.4→26px) | h3, pane titles, hero line, hours value, featured dish names, Kata mereka statements (Albert 600 or 500) |
| `--step-body` | `clamp(1.1rem, 1.08rem + 0.1vw, 1.15rem)` (17.6→18.4px) | Running text, menu list items, prices, buttons |
| `--step-small` | `0.875rem` (14px) | "Coffee & Eatery" descriptor (Josefin caps, tracking 0.16em), captions, "Buka hari ini" label, footer |

Ratios checked at 390, 768 and 1440: every step is at least 1.25× the one below it. The tightest points are at 390, where small→body is 1.26 and body→lead 1.27. Head→lead is ≥1.43 and display→head ≥1.72.
Prices use `tabular-nums` where the face supports it. Body measure is capped at 62ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 16px / 40px (24px at 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |
| Steel frame (new vars) | `--frame` outer rail 6px phone / 10px desktop; `--mullion` 4px / 6px; radius 0; pane padding 20px phone / 40px desktop |

- **The frame is one object.** Build it as a CSS grid with a `baja` background and the mullion as
  the `gap`, so the lines run continuously. Panes are flat glass (`dinding` or `marmer`): no radius,
  shadow or border of their own, and no white gaps between panes. Only the hero and Ruang & fasilitas
  are framed.
- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices sit inline after the dish name with a 12px gap,
  and never use dotted leaders. Hours times sit 16px after the day label.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- 12-column grid inside `<Container>`, 24px column gap outside frames. 768–1023 behaviour is noted per section.

## 6. Products on the page
Five products are shown, which clears the minimum of three:
1. **Beef Cheese Burger** (hero, pane B): `owner-1.jpg` at no more than 352px wide (its native width),
   with no upscaling. Caption "Beef Cheese Burger · Rp 45rb" plus "Foto dari KoffieQue". It is used once
   only, not repeated in the menu.
2–5. **Menu andalan row:** four flat illustrations standing on one thin `emas` "table edge" hairline,
   each with its name (lead) and price (body, `emas`) 12px below:
   - **Es Kopi Susu KoffieQue**: a tall straight glass outlined in `abu-terang` 2px, a `kopi` layer
     below and a `susu` layer above, three square ice cubes, and an `emas` straw.
   - **Rice Bowl Ayam Teriyaki · Rp 35rb**: an `emas` bowl with a side handle, a dome of rice in
     `dinding`, three glazed chicken pieces in `jati`, and a `daun` slaw wedge.
   - **Nasi Goreng Kampung · Rp 32rb**: a flat plate line, a low dome of rice in `jati`, and a fried
     egg on top (`dinding` white with an `emas` yolk).
   - **Butter Croissant · Rp 18rb**: a crescent of five overlapping rounded segments in `jati`, with
     seams in `kopi`.

Illustration rules: inline SVG in a 200×200 viewBox, at most about 20 shapes, flat fills, no gradients,
shading, perspective or sketchy strokes. They sit directly on the `marmer` ground with no card behind.
Illustration-only tints, which are not UI colours: `kopi` #6E4428, `susu` #E9DDC8, `jati` (teak) #B0703A,
`daun` (leaf) #6F9A4E. Each has `role="img"` and Indonesian alt text, e.g. "Ilustrasi es kopi susu".

## 7. Sections
Legend: `=` and `||` are steel mullions; `o` is a globe pendant; `*` is the gold dot.

```
Hero: phone (390)             Hero: desktop (1440, container 1200)
+==================+          +==========================================================+
|  |    |     |    | ceiling  |      |           |         |      ||                     |
|  o    O     o    | 104px    |      o           O         o      ||  [owner-1.jpg        |
| KoffieQue (56px) |          |                  ceiling 200px    ||   352x422, native]  |
| COFFEE & EATERY  |          |  KoffieQue              (96px)    ||                     |
| Kopi dan makanan |          |  COFFEE & EATERY                  ||  Beef Cheese Burger |
| Barat & Indonesia|          |  Kopi dan makanan Barat &         ||  Rp 45rb            |
| di Duren Sawit.  |          |  Indonesia di Duren Sawit.        ||  Foto dari KoffieQue|
+==================+          +===================+===============+=====================+
| Buka hari ini    |          | Buka hari ini     | Jl. Rawa Domba,  | [ Petunjuk Arah ] |
| * 10.30-22.00    |          | * 10.30-22.00     | Duren Sawit      | [ WhatsApp      ] |
+==================+          | Buka setiap hari  | Lihat menu ->    |                   |
| Jl. Rawa Domba   |          +==========================================================+
| Lihat menu ->    |          Panes: A span 8 | B span 4 (row 1); C | E | D span 4 each (row 2).
+==================+          Frame about 710px tall, so all of it shows in a 900px viewport.
| [Petunjuk Arah ] |          768: A full width; then B beside a stacked C/E/D column (6/6).
| [WhatsApp      ] |          DOM order A, C, E, D, B, so focus order matches what is seen;
+==================+          B holds nothing focusable, and grid lifts it into row 1.
| [owner-1.jpg]    |          Phone: Petunjuk Arah lands at about 650px, inside the 844px fold.
| Beef Cheese Burg.|
+==================+
```
Purpose: recognition, today's hours, directions. The wordmark is the LCP and is never animated.
Cords drop from pane A's top rail into a ceiling zone (200px desktop, 104px phone). The wordmark
starts below that zone, so no lamp ever covers text. Diameters are 56/84/64px on desktop with cords
72/110/56px; on phone they are 36/52/40px with cords 28/44/20px. Buttons are square (radius 2px) and at
least 48px tall: Petunjuk Arah is `baja` filled, WhatsApp is a 2px `baja` outline. "Lihat menu" is an
underlined text link to `#menu`.

```
Menu andalan: phone            Menu andalan: desktop (ground: marmer, full bleed)
+------------------+           +----------------------------------------------------------+
| Menu andalan     |           | Menu andalan  (h2)                                       |
| Dari kopi susu   |           | Dari kopi susu sampai nasi goreng, semua ada di KoffieQue.|
| sampai nasi ...  |           |                                                          |
| [glass ][bowl  ] |           |   [glass]        [bowl]         [plate]      [croissant] |
| ======emas====== |           | ================== emas table-edge hairline ============= |
| Es Kopi  RiceBowl|           | Es Kopi Susu     Rice Bowl      Nasi Goreng  Butter      |
| Susu     35rb    |           | KoffieQue        Ayam Teriyaki  Kampung      Croissant   |
| [plate ][crois. ]|           |                  35rb           32rb         18rb        |
| ======emas====== |           |                                                          |
| Nasi Gor Butter  |           | Kopi  Rp 22rb-32rb | Western            | Indonesia       |
| 32rb     Cr. 18rb|           |  Es Kopi Susu ..   |  Beef Cheese Burger|  Nasi Goreng .. |
| Kopi 22rb-32rb   |           |  ... 6 items       |  45rb  ... 5 items |  ... 4 items    |
|  6 items         |           | Non-kopi           | Pastry  Rp 18rb    | note: nama menu |
| Western, Indo-   |           |  4 items           |  2 items           | dan harga masih |
| nesia, Non-kopi, |           |                    |                    | contoh; gambar  |
| Pastry, note     |           |                    |                    | = ilustrasi     |
+------------------+           +----------------------------------------------------------+
```
Desktop: four illustrations at span 3 each, 180px tall, all bottoms on the hairline. Lists are three
stacked columns: [Kopi, Non-kopi], [Western, Pastry], [Indonesia, note]. Category names are h3 at lead,
items at body, prices `emas` and inline. The note is `abu-terang` small with `data-mockup`: "Nama menu dan
harga masih contoh. Gambar menu adalah ilustrasi sampai foto dari KoffieQue tersedia." Phone: the
illustrations sit 2×2 at 120px, the lists stack, and the note comes last. 768: illustrations 4-up, lists 2 columns.

```
Ruang & fasilitas: phone       Ruang & fasilitas: desktop (framed)
+==================+           Ruang & fasilitas  (h2 above the frame)
| Di dalam (marmer)|           +==========================================================+
| Ruang terang ... |           | Di dalam            (marmer)  || o--o--o--o--o--o--o (lights)|
+==================+           | Ruang terang dan rapi, meja   || Di luar, di bawah kanopi |
| o--o--o--o--o    |           | marmer hitam, lampu gantung   || Kanopi putih ... Jumat   |
| Di luar, kanopi  |           | bulat, sofa panjang.          || dan Sabtu sampai 23.30.  |
| Jumat-Sabtu 23.30|           +===================+==========++==========================+
+==================+           | Ruang meeting      ||  Mushola kecil untuk 2-3 orang    |
| Ruang meeting    |           | Siap untuk kegiatan||  ------------------------------    |
| [WhatsApp]       |           | tim/komunitas.     ||  Colokan listrik di setiap kursi  |
+==================+           | [Pesan lewat WA]   ||  ------------------------------    |
| Mushola ...      |           |                    ||  Toilet bersih                    |
| Colokan ...      |           +==========================================================+
| Toilet bersih    |           Row 1: 6 | 6. Row 2: meeting span 5 | facilities span 7.
+==================+           768: row 1 stays 6 | 6, row 2 stacks.
```
String lights: a static SVG catenary in `baja` 1.5px across the outdoor pane's top, with 9 `emas` bulbs
that have `baja` caps. Facilities rows are names at lead with `abu` hairlines between them. No icons.
The meeting button is the WhatsApp placeholder (`data-mockup`).

```
Kata mereka: phone             Kata mereka: desktop (dinding)
+------------------+           +----------------------------------------------------------+
| Kata mereka      |           | Kata mereka          | ---                 | ---          |
| Diringkas dari   |           | Diringkas dari       | Gampang untuk       | Menunya      |
| ulasan Google.   |           | ulasan Google.       | mampir, nyaman dan  | beragam, ... |
| --- statement 1  |           |  (span 4)            | bersih.             |              |
| --- statement 2  |           |                      | ---                 | ---          |
| --- statement 3  |           |                      | Kopinya enak, ...   | Fasilitas... |
| --- statement 4  |           |                      |      (span 8, 2x2)  |              |
+------------------+           +----------------------------------------------------------+
```
Each statement is at lead with a 32px `emas` hairline (2px) above it. No quote marks, names or stars. 768: 2×2 under the heading.

```
Kunjungi kami: phone           Kunjungi kami: desktop (dinding)
+------------------+           +----------------------------------------------------------+
| Kunjungi kami    |           | Kunjungi kami          | +==============================+ |
| Jl. Rawa Domba.. |           | Jl. Rawa Domba, Duren  | |                              | |
| Buka setiap hari |           | Sawit, Jakarta Timur   | |   Google Maps iframe         | |
| Senin-Kamis ...  |           | Buka setiap hari       | |   (16:10, 6px baja frame)    | |
| *Jumat-Sabtu ... |           | Senin-Kamis 10.30-22.00| |                              | |
| Minggu ...       |           | *Jumat-Sabtu 08.30-23.30 |                              | |
| [Petunjuk Arah ] |           | Minggu      10.30-22.00| |                              | |
| [ map 4:3      ] |           | [ Petunjuk Arah ]      | +==============================+ |
+------------------+           +----------------------------------------------------------+
```
Info spans 5, map spans 7. Today's row is weight 600 with the `emas` dot inside a 1.5px `baja` ring
(the ring makes it visible on light). The map iframe is lazy, with `title="Peta lokasi KoffieQue"`.

```
Hubungi kami + footer: phone   Hubungi kami + footer: desktop (ground: baja)
+------------------+           +----------------------------------------------------------+
| Hubungi kami     |           | Hubungi kami                          | [ WhatsApp     ] |
| Mampir sebentar  |           | Mampir sebentar sebelum kerja, atau   | [ Petunjuk Arah ] |
| sebelum kerja... |           | duduk lebih lama untuk makan siang.   |   (span 5)       |
| [WhatsApp      ] |           |   (span 7)                            |                  |
| [Petunjuk Arah ] |           |----------------------------------------------------------|
| -------------    |           | KoffieQue Coffee & Eatery . Jl. Rawa Domba ... | Ini draf |
| footer lines     |           +----------------------------------------------------------+
+------------------+
```
On dark: WhatsApp is a `dinding` fill with `baja` text, Petunjuk Arah is a 2px `dinding` outline. Every
WhatsApp button is a placeholder: `aria-disabled="true"`, not a link, with the sub-label "nomor
menyusul" (`data-mockup`). The footer is `abu-terang` small.

## 8. Motion
**Signature: lights on** (hero, on load, about 1.0s total).
- The lamps (inline SVG) render lit in CSS by default. A tiny inline head script adds `html.js`, and
  `.js .lamp-glow, .js .lamp-bulb-lit, .js .open-dot { opacity: 0 }`, so lamps start dark only when
  JS will light them. A reduced-motion media query forces them back to opacity 1.
- 0.20s: lamp 1 warms up. Glow and bulb opacity run on keyframes 0 → 0.6 → 0.3 → 1 over 0.45s (`power2.out`).
  Lamps 2 and 3 follow at +0.15s each.
- 0.75s: the `.open-dot` beside "Buka hari ini" goes opacity 0 → 1 and scale 0.85 → 1 in 0.3s.
- Glow is an `emas` circle (1.6× the globe, peak opacity 0.55 on the light pane) with a static CSS blur.
  Only its opacity animates. No sway, no loop, no cursor reaction.
- Reduced motion: no animation, lamps lit and dot visible.

Supporting: one `<Reveal>` per block (Menu illustration row, Menu lists, Ruang frame, Kata mereka
statements, Kunjungi), 20px up, 0.6s, `power2.out`, once. Nothing in the hero reveals. Buttons get a 150ms
opacity fade on a hover underlay and a 1px press nudge (`translateY`), in plain CSS.
Tokens for `lib/motion.ts`: `reveal: 0.6`, `hero: 1.1`, plus `lampWarm: 0.45`, `lampStagger: 0.15`, `lampDelay: 0.2`.

## 9. What makes it this shop
1. The page is built on the black steel-framed glass partition from the indoor room: continuous
   mullions, square panes, one pane per reason to visit.
2. The room's own wire globe pendants switch on to announce today's hours, which are 08.30–23.30 on
   Friday and Saturday and 10.30–22.00 on other days.
3. The two moods side by side: a black-marble indoor pane against the white-canopy pane strung with
   lights. The facilities this crowd asks about (mushola for 2–3, a socket at every seat,
   the meeting room) get their own panes rather than a footnote.

## 10. Avoid
- **The black-and-gold luxury template:** black everywhere, gold serif, gold-filled buttons, ornamental
  frames, "premium" copy. Gold is light and hairline only; the ground is the white wall.
- **Bento drift:** if panes get radii, shadows, white gaps or separate borders, the window becomes
  a card grid. Keep one continuous `baja` frame. Don't frame more than two sections.
- Full-bleed latte or stock coffee hero; any customer photo; stretching owner-1.jpg past 352px; using it twice.
- Faked marble veins, gradients, glass blur, sketch-style or shaded illustrations, emoji or unicode icons.
- Kickers above headings, section numbers, testimonial cards with quote marks, names or stars.
- Menu prices on dotted leaders pinned to the column edge, and any price not in the brief.
- Copy that headlines service, claims "kopi terbaik", features the platter, or promises long laptop stays.
- Lamps that keep flickering, sway, or crowd the wordmark on narrow phones (check 360px).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists body/lead, h2 32–52px)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices inline, hours 16px from day)
- [x] Every section has a desktop wireframe that uses the width on purpose (8/4 + 4/4/4, four span-3 items + 3 list columns, 6/6 + 5/7, 4/8, 5/7, 7/5)
- [x] At least 3 products shown (food and product shops): burger photo plus 4 illustrations
- [x] Within motion-rules.md (one signature, section reveals only, opacity and transform, reduced motion = static, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
