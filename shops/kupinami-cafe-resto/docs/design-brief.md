# Design brief: kupinami Cafe & Resto

## 1. Concept
The page is kupinami's own dining room on a quiet morning. Their mint mural wall is the
ground, the wall's white frames hold the words and the owner's cappuccino photo, and the
food sits on the warm wood table. The owner should recognise the room before reading a word.
Signature moment: under the "kupinami" wordmark, a row of sound-meter bars settles once into
a still dotted underline beside "Tanpa musik. Cukup suara obrolan." The music is switched
off, and that quiet is the thing reviewers keep praising.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The quiet (no music), playground, musala, upstairs events, the menu, hours with the Jum'atan break, WhatsApp RSVP. From the photos: the mint wall (sampled #A2D8B9), the hibiscus mural, the white wall frames, wood floors, the teal cups and the scalloped logo badge (owner-2). Customer photos were for reference only. |
| impeccable | Persuade mode. I ran the new-work derivation by hand (launcher and concept-seed not run: there's no PRODUCT.md, and `init` would write outside docs/). The rut I refused: dark espresso, cream with a serif, beige minimalism, a loud kids' zone. Seven candidates: mural wall, label badge, rantang, tegel tiles, the window-light hours graphic, an arisan invitation card, enamel plates. I chose **the room**. The badge contributed its edge-only ornament and the invitation card became the events card. Committed colour, faces from the logo, one focal motion. |
| motion-rules.md | One signature, section-level reveals only, and rule 6 tuned for the bars (§8). |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `tinta` | #12302C | All body text on light grounds; focus ring | 9.4:1 on dinding, 13.9:1 on putih, 5.5:1 on kayu, 5.7:1 on teal |
| `putih` | #FBFEFC | Wall frames, placemats, Kata para tamu ground, text on teal-tua | 7.0:1 on teal-tua |
| `dinding` | #A8DEC2 | The mint wall: Hero, Keluarga and Kunjungi grounds (about 45% of the page) | Hosts tinta 9.4:1 and teal-tua 4.7:1 |
| `teal` | #0BB8A5 | Brand teal from owner-2: the Hubungi band, badge fill, illustrated cups. **Never text on light grounds** | tinta on it 5.7:1 (it fails as text on putih at 2.5:1) |
| `teal-tua` | #08635A | H1, h2, links, primary buttons, Acara ground | 7.0:1 on putih, 4.7:1 on dinding |
| `kayu` | #CF955E | The wood table: Menu ground | tinta on it 5.5:1 (heading and intro only; lists sit on putih placemats) |

These colours are for illustrations only, never text: kembang #D9467A (hibiscus), bunga #E8962A
(orange flower), daun #2E6B4E (leaves), and the food colours in §6. The frame hairline is #7CC3A5.

## 4. Type
**Quicksand** (500, 700) for display, h2 and h3: its rounded lowercase echoes the logo's own
"kupinami" lettering. **Figtree** (400, 600) for body: open and very readable for Indonesian
text. Both load through `next/font/google`, latin subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 2.2rem + 7vw, 7.5rem)`: 62px @390, 120px @1440 | "kupinami" in the H1 only, Quicksand 700, leading 0.95 (one word, so always one line: about 270px wide @390) |
| `--step-head` | `clamp(2rem, 1.4rem + 2.2vw, 3.25rem)`: 32 / 52px | Section h2, Quicksand 700, teal-tua, leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)`: 22 / 28px | "Cafe & Resto", the Tanpa musik line, h3, facility names, paraphrased reviews, WhatsApp number; Quicksand 700, leading 1.3 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)`: 17 / 18px | Running text, dish names (Figtree 600), prices, buttons; leading 1.6 |
| `--step-small` | `0.8125rem` (13px) | Photo caption, "Harga contoh", review-source note; leading 1.45 |

Ratios are 1.94 / 1.45 / 1.29 / 1.31 @390 and 2.31 / 1.86 / 1.56 / 1.38 @1440, all at least 1.25.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, on a 12-column grid with a 32px gap from 1024px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (32px from 768 to 1023) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Wall frame:** a putih panel with a 10px putih ring, a 1px #7CC3A5 hairline inset 6px and a
  4px radius. It's used for the hero photo, the facilities list and the map.
- **Placemat:** a putih panel, 28px radius, 24px padding (32px on desktop). **Buttons:** pill-shaped,
  at least 48px tall, 24px inline padding. Primary is teal-tua with putih text; secondary is a 2px
  teal-tua outline. On teal-tua grounds, invert to a putih pill with teal-tua text. On the teal band, use a tinta pill with
  putih text. Spacing scale: 4/8/12/16/24/32/48/64.
- **Proximity:** a price sits directly under its dish name (8px or less), never in a right-aligned column.
  "mulai Rp…" sits right under its h3. The photo caption is at most 16px under the frame and
  left-aligned to it. The rating sits directly under "Kata para tamu". The Friday break sits
  directly under the daily hours.
- **Wide screens:** every section is two or three columns on the 12-column grid (see §7). Nothing is centred-and-stretched.
- **Lists:** facilities and reviews use lead; dishes use body. None goes larger than its h2.

## 6. Products on the page
Five product visuals of four dishes, all from the brief:
1. **Cappuccino** (owner-1, crop A: x0 y900, 1080×1020, sticker-free). Hero wall frame, with the caption
   "Cappuccino, disajikan dengan kue kacang dan dua pilihan gula." (review 4)
2. **Omelette with sautéed beef, peppers, tomato and carrot salad** (owner-1, crop B: x500 y300,
   580×580). A circle on the Sarapan placemat, the same size as the illustrations (the photo is soft, so never larger).
3. **Mie Aceh beef wagyu**, a flat top-down illustration on the Mie placemat: a pale blue plate
   (#CDE9EC), a curry-brown broth pool (#8A4B22), 10–12 thick yellow noodle strokes (#E3B23C),
   5 beef chunks (#6B3A22), 2 emping (#F4EBD8), cucumber (#CFE8C0) and tomato (#E0533D) slices,
   and a cluster of peanuts (#9C4F2E). Its look is informed by the customer photo; the photo is never shown.
4. **Chicken carbonara**, a flat top-down illustration on the Pasta placemat: a white plate,
   cream sauce (#F3E3C3), pasta strokes (#EBCB8B), chicken pieces (#E8C59A), pepper dots and parsley flecks (#4C8C4A).
5. **The cappuccino set**, a flat top-down illustration on the Kopi placemat: a teal cup and saucer,
   crema (#B07A45) with a simple rosetta, one peanut cookie, and two sugar sachets in two colours.
   The sachets carry no labels because the kinds of sugar aren't known.

Illustration rules: flat, no outlines, 4–7 kinds of shape per dish, one shadow ellipse (tinta at 8%,
offset 6px). Every placemat visual uses the same circle footprint: 200px on phone, 220px on desktop.
owner-2 and the customer photos never appear on the page.

## 7. Sections
The top bar sits on dinding and isn't sticky. It holds the badge (a redrawn SVG from owner-2:
a lobed frame, a cup above "kupinami", cutlery below), anchors to Menu / Keluarga / Acara / Lokasi
(desktop only) and a small WhatsApp pill.

**Hero** (dinding). Purpose: recognition plus action 1. Content: name lockup, signature meter,
quiet line, a one-line personality line, hours, two buttons, the cappuccino frame and caption, and
flora cluster 1 bleeding off the right edge. On phone the fold is at about 574px, with both buttons above it and the photo peeking.
```
Hero: phone (390)         Hero: desktop (1440)
+----------------------+  +-------------------------------------------------------------+
| [badge]   [WhatsApp] |  | [badge]              Menu  Keluarga  Acara  Lokasi [WhatsApp]|
| kupinami      (disp) |  |  kupinami          (display)      +-------------------+   * |
| Cafe & Resto  (lead) |  |  Cafe & Resto (lead)              |  owner-1 crop A   |  ** |
| |:||:|:||: -> ...... |  |  |:||:|:||:|:||:|:| -> .........  |  cappuccino, teal | *** |
| Tanpa musik. Cukup   |  |  Tanpa musik. Cukup suara obrolan.|  cup, wall frame  |  ** |
| suara obrolan.(lead) |  |  Tempat makan keluarga yang       +-------------------+     |
| Tempat makan ...     |  |  tenang di Cipayung.   (body)     Cappuccino, disajikan     |
| o Setiap hari 07-22  |  |  o Buka setiap hari 07.00-22.00   dengan kue kacang ...     |
| [Reservasi via WA  ] |  |  [Reservasi via WhatsApp] [Petunjuk Arah]                   |
| [Petunjuk Arah     ] |  |  <--------- cols 1-7 --------->   <---- cols 8-12 ---->     |
| [ cappuccino frame ]*|  +-------------------------------------------------------------+
```

**Nyaman untuk keluarga** (dinding). Purpose: reassure parents. Content: an h2, a two-line intro and five
facilities, each a lead-size name plus one body line, set in a wall frame. Type-led; no icon tiles.
```
Keluarga: phone           Keluarga: desktop
+----------------------+  +-------------------------------------------------------------+
| Nyaman untuk         |  |  Nyaman untuk        +--------------------------------------+|
| keluarga        (h2) |  |  keluarga     (h2)   | Area bermain anak  | Musala          ||
| Orang tua makan      |  |  Orang tua makan     | Si kecil betah ... | Bersih, rapi ...||
| dengan tenang ...    |  |  dengan tenang, anak |--------------------+-----------------||
| +------------------+ |  |  bermain di dekatnya,| Tanpa musik        | Parkir luas     ||
| | Area bermain anak| |  |  ada tempat salat.   | Tenang untuk ...   | Lahan lega ...  ||
| | Musala ... (x5)  | |  |  cols 1-4            | Lantai atas untuk acara -> Acara    ||
| +------------------+ |  |                      +--------- cols 5-12, frame -----------+|
+----------------------+  +-------------------------------------------------------------+
```

**Menu andalan** (kayu). Purpose: show the food is serious, both Indonesian and Western. Content: an h2 with
its intro directly beneath, four placemats (Mie / Pasta & Western / Kopi & minuman / Sarapan & camilan) with the dish lists
from the PRD, and "Harga contoh" (small) under the grid.
```
Menu: phone               Menu: desktop
+----------------------+  +-------------------------------------------------------------+
| Menu andalan   (h2)  |  |  Menu andalan (h2)                                           |
| Dari Mie Aceh ...    |  |  Dari Mie Aceh sampai chicken carbonara ... (body, cols 1-6)|
| +------------------+ |  |  +----------------------------+ +----------------------------+|
| |  ( Mie Aceh  )   | |  |  | (Mie Aceh) Mie (h3)        | | (carbonara) Pasta & Western||
| | Mie        (h3)  | |  |  | ( illus  ) Mie Aceh beef   | | (  illus  ) Chicken        ||
| | Mie Aceh beef    | |  |  |            wagyu / Rp 75rb | |             carbonara ...  ||
| | wagyu / Rp 75rb  | |  |  +----------------------------+ +----------------------------+|
| +------------------+ |  |  | (cup+cookie Kopi & minuman | | (omelette) Sarapan &       ||
| (3 more placemats)   |  |  | +2 sugars) Cappuccino ...  | | ( photo  ) camilan ...     ||
| Harga contoh (small) |  |  +----------------------------+ +----------------------------+|
+----------------------+  +-------------------------------------------------------------+
```

**Acara di kupinami** (teal-tua, putih text). Purpose: bring in group bookings. Content: an h2, a line
about the upstairs floor, a putih card with a scalloped top and bottom edge (the logo's shape
language) listing the example uses, flora cluster 2 small on the card corner, and "Pesan tempat via WhatsApp".
```
Acara: phone              Acara: desktop
+----------------------+  +-------------------------------------------------------------+
| Acara di kupinami    |  |  Acara di kupinami (h2)       .-^-^-^-^-^-^-^-^-^-.       *  |
| Lantai atas bisa ... |  |  Lantai atas kami bisa       (  Cocok untuk (lead)  )    **  |
|  .-^-^-^-^-^-^-^-.   |  |  dipakai untuk kumpul        (  Arisan              )        |
| ( Cocok untuk     )  |  |  bersama.                    (  Ulang tahun anak    )        |
| ( Arisan ... (x4) )  |  |  [Pesan tempat via WhatsApp] (  Kumpul keluarga ... )        |
|  '-v-v-v-v-v-v-v-'   |  |  cols 1-6                     '-v-v-v-v-v-v-v-v-v-'  7-11    |
| [Pesan tempat  WA ]  |  +-------------------------------------------------------------+
+----------------------+
```

**Kata para tamu** (putih). Purpose: social proof. Content: an h2, the rating line, four paraphrases at lead
size with no names or quotation marks, and "Diringkas dari ulasan Google." Static: no carousel.
```
Tamu: phone               Tamu: desktop
+----------------------+  +-------------------------------------------------------------+
| Kata para tamu (h2)  |  |  Kata para tamu (h2)   | Tenang, tanpa     | Anak-anak betah |
| 4,7 dari 2.883       |  |  4,7 dari 2.883 ulasan | musik ...  (lead) | berjam-jam ...  |
| ulasan Google        |  |  Google                |-------------------+-----------------|
| Tenang, tanpa ...    |  |  Diringkas dari ulasan | Mie Aceh beef     | Kopinya dibuat  |
| -- (x4, lead)        |  |  Google. (small)       | wagyu berkuah ... | dengan teliti...|
| Diringkas ... (small)|  |  cols 1-4              |  cols 5-12, 2x2                     |
+----------------------+  +-------------------------------------------------------------+
```

**Kunjungi kami** (dinding). Purpose: get them there. Content: an h2, address, hours, the Friday break
(flagged), "Parkir luas", Petunjuk Arah plus Buka di Google Maps, and the map in a wall frame.
```
Kunjungi: phone           Kunjungi: desktop
+----------------------+  +-------------------------------------------------------------+
| Kunjungi kami  (h2)  |  |  Kunjungi kami (h2)     +-----------------------------------+|
| Jl. Bina Marga No.44 |  |  Jl. Bina Marga No. 44, |                                   ||
| Setiap hari 07-22    |  |  Ceger, Cipayung ...    |   Google Maps embed, lazy         ||
| Jumat istirahat      |  |  Setiap hari 07.00-22.00|   (wall frame, 440px tall)        ||
| 11.00-13.00 [flag]   |  |  Jumat istirahat 11.00- |                                   ||
| Parkir luas          |  |  13.00 Jum'atan [flag]  |                                   ||
| [Petunjuk Arah     ] |  |  [Petunjuk Arah] Maps ->+-----------------------------------+|
| [ map frame 280px  ] |  |  cols 1-5                cols 6-12                           |
+----------------------+  +-------------------------------------------------------------+
```

**Hubungi kami** (a teal band with tinta text and one shallow arc on its top edge, echoing owner-2). Purpose: a real
close with every contact route. Content: badge, h2, WhatsApp number (lead) "Reservasi & pesan
antar", a Chat WhatsApp button, Instagram and Facebook @kupinami, Petunjuk Arah, and the address.
```
Hubungi: phone            Hubungi: desktop
+----------------------+  +-------------------------------------------------------------+
| [badge]              |  |  [badge]            | WhatsApp          | Instagram @kupinami|
| Hubungi kami   (h2)  |  |  Hubungi kami (h2)  | 0811-1314-314     | Facebook @kupinami |
| 0811-1314-314 (lead) |  |  Jl. Bina Marga     | Reservasi & pesan | Petunjuk Arah ->   |
| Reservasi & pesan    |  |  No. 44, Cipayung   | antar             |                    |
| [Chat WhatsApp     ] |  |                     | [Chat WhatsApp]   |                    |
| IG / FB @kupinami    |  |  cols 1-4           | cols 5-8          | cols 9-12          |
+----------------------+  +-------------------------------------------------------------+
```

## 8. Motion
**Signature: the quiet meter (hero, on load).** There are 24 teal-tua bars, each 6px wide, in a row as wide as
the wordmark, 12px under it. At rest each bar is a 6×6px dot, so the row reads as a dotted underline.
They start from a fixed pattern of 1.6–3× resting height (a deterministic array, never random) and
settle to 1× over 1.1s with `expo.out`, staggered 0.02s from the centre, transform-origin centre.
Nothing else in the hero moves: the name, the Tanpa musik line, the buttons and the photo are
static from first paint, so recognition never waits. The meter starts 0.15s after hydration and is
still by about 1.4s. The bars never loop, pulse or react to hover. **Reduced motion and no JS:** the dotted line at rest,
everything visible, nothing moves.
**Rule 6 tuning:** the bars are the only scale animation on the page. They start at no more than 3× resting
height, never from 0, and only shrink to rest.
**Supporting:** the starter `Reveal` runs once on Keluarga, Menu (the placemat grid as one block, no
stagger), Acara, Kata para tamu and Kunjungi: 0.6s, 20px, `power2.out`. Hubungi doesn't reveal.
Buttons darken through a tinta overlay pseudo-element (opacity 0 to 0.12, 150ms) and press with
`translateY(1px)`. Lenis keeps the starter defaults.
**Tokens (`lib/motion.ts`):** `duration { press: 0.15, ui: 0.2, reveal: 0.6, hero: 1.1 }`, `ease`
as in the starter, `distance { reveal: 20 }`, plus `meter { stagger: 0.02, start: [24 values, 1.6–3] }`.

## 9. What makes it this shop
1. **The quiet meter.** No music is what sets kupinami apart, and three of five reviews say so. The hero shows the music switching off.
2. **Two sugars.** The hero caption and the Kopi placemat illustration show the peanut cookie and the two
   sugar sachets, "manisnya Anda yang atur". It's a serving detail only this shop has (review 4).
3. **Their room as the page.** The mint mural wall, white wall frames, a painted hibiscus cropped by the edge, the wood
   table under the food, and a footer in the exact teal band of their own hours graphic. The musala and the
   Jum'atan break are treated as first-class facts, not small print.

## 10. Avoid
- The category rut: dark espresso moodiness, cream with a high-contrast serif and terracotta, beige minimalism. Also
  its opposite: primary-colour kids'-zone pages, balloons, bouncy type, exclamation marks.
- Mint everywhere. Grounds must alternate (dinding, kayu, teal-tua, putih, teal), and there are never mint cards on mint.
- Flowers as stickers. Two flora clusters at most, large and cropped by an edge like the mural. Never small
  scattered icons, and never over text or the photo.
- The meter misread: no notes, speakers or headphones. Bars that loop or linger would read as a loading indicator.
- A template menu: no uniform photo-on-top card grid, no right-aligned price column, no stars on dishes.
- Reviews with quotation marks, names or a carousel. Anything unconfirmed as decoration: Aceh motifs (the name's
  meaning is unknown), a halal badge, mosque silhouettes, live music or "nongkrong sampai malam".
- A logo redraw that drifts. Keep owner-2's lobed frame, the cup above and the cutlery below; add no tagline.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.29; lists are body or lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices, caption, rating and Friday break are all placed in §5)
- [x] Every section has a desktop wireframe that uses the width on purpose (two or three columns on the 12-column grid)
- [x] At least 3 products shown (food and product shops): five visuals of four dishes (§6)
- [x] Within motion-rules.md (one signature, section reveals, transform and opacity only, rule 6 tuning stated)
- [x] Brief is decisions, not essays (2–4 pages)
