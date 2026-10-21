# Design brief: Pintu Dua Coffee

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"Lampu papan menyala":** the page is the shop's own quarter-circle lightbox sign on its concrete
wall, then a walk from the night rooftop through the light-concrete bar and back into the night.
The sign, the concrete and the after-dark rooftop are what this place is, and no other café has that sign.
Signature moment: on load the hero sign catches like a lightbox tube (one short flicker, then a
steady halo); nothing else in the first screen moves.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, hours, praise, language, every [MOCKUP]. Reference only: photo-3 sign shape, photo-1 bar and counter placards, photo-2 roof and bulbs. owner-1/2 are the only site photos |
| impeccable | Persuade mode. The brief pins the direction, so there was no concept roll (`concept-seed` needs a root PRODUCT.md, outside this write boundary). It contributed the rut check, a colour strategy from a physical scene, a face off the default list and one authored motion moment |
| Candidates weighed | Sign (hero), counter placards (order steps), festoon (rooftop) and menu stand (menu card) were chosen. Door-swing floor plan (explains the name) and QR receipt (off-tone) were declined |
| Rut refused | Espresso and cream with a serif, a latte hero and three cards; also near-black with amber and glowing edges. Here concrete carries the page, only the sign glows, and amber appears only where a bulb would be |

## 3. Palette (4–6 named colours)
Scene: a 20-something in Cipayung at 8 pm, on a phone, picking tonight's spot, arriving after dark.
So the page opens on a night wall, and the reading sections go light. Strategy: **Committed**, with
the two concretes at about 70%, night at 20% and amber under 5%.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `beton` | #3A3A36 | Concrete wall: Hero and Kata mereka grounds | `papan` text 10.45:1; muted `abu-beton` #BDBAB2 5.89:1 |
| `malam` | #141413 | Night: Rooftop and Hubungi grounds; body text on light grounds | `papan` 16.86:1; `malam` on `semen` 12.56:1 |
| `semen` | #D7D5CF | Light concrete: Menu, Dapur and Kunjungi grounds | muted `abu-semen` #55524C 5.30:1; `kayu` 9.24:1 |
| `papan` | #F3F5F6 | The lit sign panel; text on dark grounds | sign lettering `tinta` #2B2B28 on `papan` 12.98:1 (3.83:1 at the darkest flicker frame, large text) |
| `lampu` | #F0A63A | Festoon bulbs, primary button fill, focus ring on dark, prices on the menu card | `malam` on `lampu` 8.97:1; vs `beton` 5.56:1 (UI); on `kayu` 6.60:1 |
| `kayu` | #3D2A1E | Menu card and counter placards (dark wood, like the counter signs) | `papan` on `kayu` 12.40:1 |

`abu-beton`, `abu-semen` and `tinta` are text tints, not hues. No opacity modifiers on text. Palm green is left out on purpose.

## 4. Type
**Fredoka** (variable, used at 500–600, never 700) is the rounded geometric of the sign, for the name and headings.
**Archivo** (variable wght + `axes: ["wdth"]`) handles body and the spaced-caps labels (`.t-label`: 700,
`font-stretch: 115%`, uppercase, `.12em`), like "COFFEE HOUSE" on the sign. Both via `next/font`, latin, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--sign` | `clamp(288px, 36vw, 520px)` | Hero sign panel edge (square, quarter-circle) |
| `--step-display` | `calc(var(--sign) * 0.22)` → 63px at 390, 114px at 1440 | Hero name inside the sign only. Fredoka 600, leading 1.05 (two stacked lines), tracking -0.01em |
| `--step-head` | `clamp(2rem, 1.3rem + 2.8vw, 3.5rem)` → 32 / 56px | Section headings (h2). Fredoka 600, leading 1.1 |
| `--step-lead` | `clamp(1.3rem, 1.2rem + 0.5vw, 1.5rem)` → 21 / 24px | Leads, paraphrased praise, h3. Fredoka 500, leading 1.35 |
| `--step-body` | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` → 16 / 18px | Running text, menu rows, buttons. Archivo 400/500 (buttons 600), leading 1.55 |
| `--step-small` | `calc(var(--step-body) * 0.8)` → 12.9 / 14.4px | Labels (`.t-label`), captions' second line, notes, footer |

Ratios checked from 320 to 1440px. Smallest: display/head 1.47 (around 800px), head/lead 1.51,
lead/body 1.31, body/small 1.25. Display scales with `--sign`, so "Pintu" (about 0.70 × sign) always
clears the arc (about 0.78 × sign at that height).

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; desktop grid 12 columns, 32px gap |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (Hero: 32px top on phone, 48px on desktop) |
| Arc divider (`--arc-divider`) | `clamp(96px, 18vw, 260px)`: the top-right corner radius of the Menu section's `semen` ground |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Menu prices follow their name after a 12px gap.
  Captions sit 12px under their photo. The hours table is at most 22rem wide.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- **Motif budget:** the quarter-circle appears three times: the hero sign, the Menu arc divider and
  the Hubungi sign mark. It is never an image mask, because it would cut the lid and the food.
- At 768px the two-column sections are already two columns; Kata mereka goes to a grid at 1024px.

## 6. Products on the page
Three products, all from owner photos (crops verified in planning, commands in plan step 5; no
newspaper masthead or headlines, no other venue's magazine pages, no book text):
1. **The biscuit-topped iced milky drink** in the branded "Pintu Dua coffee & kitchen" cup
   (owner-1, crop 344×430, 4:5). Hero, beside the sign, captioned "Biscoff Latte · Rp 32rb"
   [MOCKUP] + "Minuman susu dingin dengan biskuit karamel di atasnya."
2. **Snack tray of fries, scored sausages, nuggets and ketchup** (owner-2 crop A, 720×480, 3:2).
   Dari dapur, captioned "Mix Platter · Rp 30rb" [MOCKUP].
3. **Dimsum with torched orange sauce and chilli dip** (owner-2 crop B, 750×500, 3:2). Dari
   dapur, captioned "Dimsum Mentai · Rp 25rb" [MOCKUP].

Never wider than intrinsic. The brief also puts owner-1 in Menu andalan. It appears once (hero),
because a second crop of the same small photo read as filler. The menu card opens with that drink, so
the link holds.

## 7. Sections
Grounds in order: beton → malam → semen (arc) → semen → beton → semen → malam.
```
Hero: phone (390) · beton            Hero: desktop (1440) · beton full-bleed, container 1200
+--------------------------+         +---------------------------------------------------------------+
|Draf mockup… (banner)     |         | Draf mockup untuk Pintu Dua Coffee… (banner)                  |
| +--------.               |         |  +---------------.                       +----------------+   |
| |          `.  SIGN 288² |         |  |                `.    SIGN 520²       |                |   |
| |            \ papan,    |         |  |                  \   cols 1–6        |  cup photo     |   |
| |Pintu        | halo     |         |  | Pintu             |                   |  344×430       |   |
| |Dua          |          |         |  | Dua               |                   |  cols 9–12     |   |
| |COFFEE       |          |         |  | COFFEE            |                   +----------------+   |
| +-------------+          |         |  +-------------------+                   Biscoff Latte · Rp 32rb|
| Kopi, dapur, dan rooftop |         |  Kopi, dapur, dan rooftop di Lubang Buaya. (lead)  Minuman susu…|
| di Lubang Buaya. (lead)  |         |  ● BUKA HARI INI · 09.00–00.00 (label, lampu dot)              |
| ● BUKA HARI INI 09.00–00.00|       |  [ Petunjuk Arah ] (lampu)  [ WhatsApp ] (line-dark)           |
| [Petunjuk Arah][WhatsApp]|         |              fold at ~770px of 900: all of the above visible   |
|- - - fold ~540 of 844 - -|         +---------------------------------------------------------------+
| [cup photo 4:5, 344w]    |
| Biscoff Latte · Rp 32rb  |
| Minuman susu dingin…     |
+--------------------------+
```
Purpose: recognition, hours, first action. The sign is the h1; the photo is top-aligned with it.
```
Rooftop: phone · malam               Rooftop: desktop · malam full-bleed
+--------------------------+         +---------------------------------------------------------------+
| o   o   o   o   o   o    |         |  o     o     o     o     o     o     o     o     o     o       |
|  (one festoon swag)      |         |     o     o     o     o     o     o     o     o     o     o    |
| ROOFTOP (label)          |         |  ROOFTOP                                  ATAS (label)        |
| Ngopi di bawah,          |         |  Ngopi di bawah,                          Atap seng, lampu    |
| ngobrol di atas. (h2)    |         |  ngobrol di atas.  (h2, cols 1–6)         bohlam berjajar,    |
| Rooftop beratap di tengah|         |                                           meja kayu. Paling   |
| perumahan Cipayung… (lead)|        |  Rooftop beratap di tengah perumahan      hidup setelah gelap.|
| ATAS                     |         |  Cipayung: jarang ada di pinggiran kota.  ------------------- |
| Atap seng, lampu bohlam… |         |  (lead, cols 1–6)                         BAWAH               |
| ------------------------ |         |                                           Bar kopi, dinding   |
| BAWAH                    |         |                                           beton, lampu kawat… |
| Bar kopi, dinding beton… |         |                                           (dl, cols 8–12)     |
+--------------------------+         +---------------------------------------------------------------+
```
Purpose: sell the main draw with no photo. The festoon spans the container, and the bulbs are the only colour.
```
Menu andalan: phone · semen          Menu andalan: desktop · semen, top-right corner = --arc-divider
+-----------------------.            +-----------------------------------------------------------.
| Menu andalan (h2)      \           | Menu andalan (h2)        +----------------------------------+ \
| Dari bar di lantai     |           | Dari bar di lantai bawah.| SIGNATURE (label)                |  |
| bawah. (lead)          |           | (lead, cols 1–4)         | Biscoff Latte  Rp 32rb           |  |
| +--------------------+ |           |                          | Minuman susu dingin dengan…      |  |
| |SIGNATURE           | |           | [ORDER & PAY HERE] →     |----------------------------------|  |
| |Biscoff Latte Rp32rb| |           | Pesan & bayar di kasir,  | KOPI              NON-KOPI       |  |
| |Minuman susu dingin…| |           | bisa QR.                 | Es Kopi Susu      Matcha Latte   |  |
| |KOPI                | |           | [PICK UP HERE]           |  Pintu Dua Rp 22rb Red Velvet    |  |
| |Es Kopi Susu… Rp22rb| |           | Ambil pesananmu di sini. | Americano Rp 20rb Chocolate      |  |
| |Americano  Rp 20rb …| |           |                          | Cappuccino        Lychee Tea     |  |
| |NON-KOPI            | |           | Nama & harga masih       | Caffe Latte                      |  |
| |Matcha Latte …      | |           | contoh. (small)          | V60 manual brew  (kayu, cols 5–12)| |
| +--------------------+ |           |                          +----------------------------------+  |
| [ORDER & PAY HERE] →   |           +---------------------------------------------------------------+
| [PICK UP HERE]         |
+------------------------+
```
Purpose: drinks, on a card like their counter menu stand (`papan` names, `lampu` prices, `.t-label` h3s).
```
Dari dapur: phone · semen            Dari dapur: desktop · semen
+--------------------------+         +---------------------------------------------------------------+
| Dari dapur (h2)          |         | Dari dapur (h2, cols 1–6)        Camilan buat teman ngobrol.  |
| Camilan buat teman       |         |                                  (lead, cols 7–12, baseline)  |
| ngobrol. (lead)          |         | +---------------------------+   +---------------------------+ |
| +----------------------+ |         | | platter 3:2 (cols 1–6)    |   | dimsum 3:2 (cols 7–12)    | |
| | platter 3:2          | |         | +---------------------------+   +---------------------------+ |
| +----------------------+ |         | Mix Platter · Rp 30rb           Dimsum Mentai · Rp 25rb       |
| Mix Platter · Rp 30rb    |         | Kentang goreng, sosis, nugget…  Dimsum dengan saus oranye…    |
| Kentang goreng, sosis…   |         |                                                               |
| +----------------------+ |         | Juga ada: Kentang Goreng · Nasi Goreng · Indomie Goreng (body)|
| | dimsum 3:2           | |         +---------------------------------------------------------------+
| +----------------------+ |
| Dimsum Mentai · Rp 25rb  |
| Juga ada: …              |
+--------------------------+
```
Purpose: the food, as two real trays. Captions are figcaptions 12px under each photo.
```
Kata mereka: phone · beton           Kata mereka: desktop · beton
+--------------------------+         +---------------------------------------------------------------+
| Kata mereka (h2)         |         | Kata mereka (h2)       | Barista dan stafnya | Suasananya     |
| 4,7 dari 289 ulasan      |         | 4,7 dari 289 ulasan    | ramah dan sigap     | nyaman, musik- |
| Google (lead)            |         | Google (lead)          | membantu. (lead)    | nya pelan: enak|
| ------------------------ |         |                        |                     | buat ngobrol.  |
| Barista dan stafnya…     |         | Diringkas dari ulasan  |---------------------+----------------|
| ------------------------ |         | Google, bukan kutipan  | Rooftop di tengah   | Makanan dan    |
| Suasananya nyaman…       |         | langsung. (small)      | perumahan: jarang   | minumannya     |
| …(4 items, lead)         |         | (cols 1–4)             | ada, tetap layak    | enak.          |
| Diringkas dari… (small)  |         |                        | walau ramai.   (2×2, cols 5–12)      |
+--------------------------+         +---------------------------------------------------------------+
```
Purpose: honest social proof. No names, no quotation marks, no stars.
```
Kunjungi kami: phone · semen         Kunjungi kami: desktop · semen
+--------------------------+         +---------------------------------------------------------------+
| Kunjungi kami (h2)       |         | Kunjungi kami (h2)                                            |
| ALAMAT (label)           |         | +----------------------------------+   ALAMAT                 |
| Jl. Manunggal XVII No.2, |         | |                                  |   Jl. Manunggal XVII No.2,|
| Lubang Buaya, Cipayung,  |         | |  map embed 4:3 (cols 1–7)        |   Lubang Buaya, Cipayung, |
| Jakarta Timur 13810      |         | |                                  |   Jakarta Timur 13810     |
| [ Petunjuk Arah ]        |         | |                                  |   [ Petunjuk Arah ]       |
| JAM BUKA (label)         |         | |                                  |   JAM BUKA                |
| Senin–Minggu 09.00–00.00 |         | |                                  |   Senin–Minggu 09.00–00.00|
| Buka setiap hari sampai  |         | +----------------------------------+   Buka setiap hari sampai |
| tengah malam.            |         |                                         tengah malam. (cols 9–12)|
| [ map 4:3 ]              |         +---------------------------------------------------------------+
+--------------------------+
```
Purpose: get there. On a phone the address and button come before the map.
```
Hubungi kami: phone · malam          Hubungi kami: desktop · malam
+--------------------------+         +---------------------------------------------------------------+
| (sign mark 96², lit)     |         | (sign mark 120², lit, aria-hidden)                            |
| HUBUNGI KAMI (label)     |         | HUBUNGI KAMI                             [ WhatsApp        ]  |
| Rooftop-nya menunggu.(h2)|         | Rooftop-nya menunggu. (h2, cols 1–7)     [ Telepon 0821-2398-0026 ]|
| [ WhatsApp            ]  |         |                                          [ Petunjuk Arah   ]  |
| [ Telepon 0821-2398-… ]  |         |                                          (stack, cols 9–12)   |
| [ Petunjuk Arah       ]  |         | ------------------------------------------------------------- |
| ------------------------ |         | Pintu Dua Coffee · Jl. Manunggal XVII No.2, Lubang Buaya… (small)|
| Pintu Dua Coffee · alamat|         +---------------------------------------------------------------+
+--------------------------+
```
Purpose: close with every action. The small lit sign bookends the hero.

## 8. Motion
**Signature: the sign switches on** (hero SignPanel, on mount). A `beton` dim layer over the panel
fill, under the lettering, steps opacity 0.6 → 0.15 (0.07 s) → 0.45 (0.08 s) → 0 (0.40 s, `ease.out`).
A static-blur halo fades 0 → 1 (0.60 s, from 0.30 s). Total 0.90 s ≤ `duration.hero`, one dip only
(flash-safe), lettering readable at every frame. **Reduced motion / no-JS:** lit, still.
Supporting: one Reveal per section block (six). Buttons: hover tint opacity at 0.15 s, press `scale(.98)`.
The festoon is static. Lenis and `lib/motion.ts` use the starter defaults.

## 9. What makes it this shop
1. Their own quarter-circle lightbox sign, rebuilt in CSS on concrete, switches on; their logo cup stands beside it.
2. Ordering shown as at their counter: "ORDER & PAY HERE" → "PICK UP HERE" placards, menu on a card like their stand.
3. The rooftop lit by a drawn festoon string on night black, with the bar section swinging into it on the sign's arc.

## 10. Avoid
- Glow anywhere but the sign; amber washes; neon edges on cards or buttons.
- Café clichés: bean icons, latte-art stock, steam squiggles, "brewed with love", cream and serif, three equal cards.
- Explaining or drawing the name (no two doors, no guess at "Pintu Dua").
- Tracing customer photos (no rooftop stand-in, no staff figure from photo-1).
- The quarter-circle beyond its three uses, or masking food.
- "Always quiet", quoted reviews, any reviewer or staff name, stars.
- Fredoka at 700 or on body text; tracked labels above `--step-small`.
- Dark sections merging: Hero (`beton`) and Rooftop (`malam`) must read as two darks, with the festoon as the break.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio
      body/small 1.25; menu rows and praise at body/lead; labels at small)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline,
      12px gap; captions 12px under photos; hours table ≤22rem)
- [x] Every section has a desktop wireframe that uses the width on purpose (all seven are two-column
      or grid at 1440; none leaves half the width empty)
- [x] At least 3 products shown (food and product shops) (cup, platter, dimsum, all owner photos)
- [x] Within motion-rules.md (one signature moment; section-level reveals only; opacity and
      transform only; reduced motion = none; no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
