# Design brief: P8 Cafe

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
The page is P8's own order counter: white plaster wall above, the terracotta breeze-block counter
below, the coffee photo standing on it like their "P8 Butter Cookies" sign. The counter, the steel
tray with its P8 paper and the bear cookie are what every visitor photographs and remembers.
Signature moment: on load, a round bear-cookie stamp reading "SETIAP KOPI + 1 KUE GRATIS" presses
once onto the corner of the coffee photo, like the bear pressed into every cookie.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts and Indonesian copy; palette from the counter, plaster, brick, steel and cookie; rounded display + plain sans; lead with drinks, cookies and the space, not rice. owner-1 is the only site photo; photo-1/2/3 gave the block module, the "ORDER HERE" case with wooden tent labels, the jar sign standing on the counter and the black pendant lamps |
| impeccable | Persuade mode. Rut named: cream + serif + terracotta-accent cafe page, its dark "specialty coffee" opposite, and the literal "kawaii bear everywhere". Seven candidates from the shop's world: tray liner, breeze-block counter, bear stamp, plaster-over-brick wall, cookie-jar label, Moka receipt, display-case tent cards. Chosen: the counter scene (counter + tray + tent cards are one place). Its raises: colour fields own whole sections (no accent on cream), chunky rounded face (no serif), flat authored assets (no gradients or shadows). Launcher/concept-seed not run because it downloads a binary and writes outside docs/ (seed: none (unavailable)) |

## 3. Palette (6 named colours)
Strategy: **Full palette**. roster, sage and butter each own whole sections; nothing is sprinkled as
an accent. Scene: daytime, a bright white room, a phone or laptop on a light wood table → light ground.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` | #F5F4F0 | plaster-white wall: page ground, liner, tent cards, paper buttons | ink on paper 14.5:1 |
| `ink` | #24211F | charcoal (upholstery, pendants): all text on light fields, primary buttons, closing band, illustration outlines | paper on ink 14.5:1 |
| `roster` | #CB8D5E | breeze-block terracotta: hero counter band, Menu and Kunjungi fields | ink on roster 5.7:1 (text OK). Paper on roster 2.5:1: never text; paper buttons there get a 2px ink border |
| `roster-deep` | #874B2C | shadow inside a block, stamp ink, coffee in illustrations, ink-button hover | on paper 6.2:1 (small text OK); on roster 2.4:1: decoration only |
| `sage` | #B9BCAD | sage plaster and steel: Kerja & ngumpul field, the tray, the counter-top slab | ink on sage 8.3:1 |
| `butter` | #E2B66E | butter cookie: Bawa pulang field, today's hours row, cookie fill, paper-button hover | ink on butter 8.5:1 |

Illustration-only fills (never UI): `velvet` #9A3B36 (red velvet sponge). Tile mid-tones #A96B43 and
#B97B50 live only inside `roster-tile.svg`. Focus ring: 3px `ink`, offset 3px; `paper` on the ink band.

## 4. Type
Bagel Fat One (display and section heads; one weight, never synthesise bold) echoes the chunky
"P8" logo. Rethink Sans (400, 600) for everything else. Both via `next/font/google`, subset latin,
`display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(4rem, 2.5rem + 6.6vw, 8.5rem) → 66px @390, 91 @768, 135 @1440 | "P8 Cafe" in the hero only; `white-space: nowrap`, leading 0.95 |
| `--step-head` | clamp(2.25rem, 1.6rem + 2.4vw, 3.75rem) → 36 / 44 / 60 | section h2, Bagel Fat One, leading 1.08 |
| `--step-lead` | clamp(1.3125rem, 1.15rem + 0.7vw, 1.75rem) → 21 / 24 / 28 | hero line, statements, praise themes (Rethink 400); h3 menu groups and feature names (Bagel Fat One) |
| `--step-body` | clamp(1rem, 0.96rem + 0.2vw, 1.125rem) → 16 / 17 / 18 | running text, menu items, prices (600, tabular), hours, buttons (600) |
| `--step-small` | 0.8rem → 12.8px | banner, captions under illustrations, footnotes, stamp ring text (600, caps, +0.12em) |

Ratios at 390/1440: display:head 1.83/2.25, head:lead 1.70/2.14, lead:body 1.31/1.56, body:small 1.26/1.41.
All ≥1.25. Nothing but the hero name outranks a section heading: the rating "4,7" is lead size.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12-column grid, 24px column gap on desktop |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |
| Spacing scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Heading → content 16–24; between groups 48 |
| Radii | 6px blocks and buttons · 14px tent cards and map · 24px photo mat · tray is an ellipse |
| Block module (roster tile) | 120 × 96px desktop, 72 × 58px phone (the SVG tile scales) |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
  Here: a price follows its name on the same line ("Kopi susu gula aren · Rp 28rb"), never right-aligned
  and never with dot leaders. Captions sit ≤12px under their illustration. The hours table is at most 340px
  wide, so times stay next to their days. The stamp overlaps the photo it describes.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
  The counter band, the colour fields and the tray run full-bleed; content stays in the 1200 container.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- **Mockup marking:** `[data-mockup]` text gets a dotted underline (1.5px, currentColor at 50%,
  offset 0.2em). The banner explains it once.

## 6. Products on the page
Six products are shown, with no picture of the place standing in for food:
1. **Iced coffee with coffee ice balls + bear cookie**: owner-1.jpg in the hero, 4:5 crop (object-position 50% 60%), on a 10px paper mat.
2. **Es Kopi Bola Es** [MOCKUP name]: illustration in the Menu feature. Tall glass, four stacked coffee balls (`roster-deep`), white "P8" mark, a small milk jug with a wooden handle.
3. **Red velvet cupcake**: illustration in the Menu feature. Paper case with ink pleats, `velvet` sponge, cream-cheese swirl in `paper`.
4. **Kue mentega beruang**: `butter` fill. 5. **Kue kacang beruang**: `roster` fill with `roster-deep` flecks. Both shown together on the P8 liner in "Kopi + kue, gratis".
6. **P8 Butter Cookies jar**: illustration in Bawa pulang. Glass jar (`paper`), stacked `butter` cookies inside, `ink` lid, a round label reading "P8 Butter Cookies" in the display face (inline SVG text).

Style ("liner print", like the logo printed on P8's tray paper): flat fills from the palette only,
one `ink` outline (3px at a 240px artboard, round caps and joins), one `paper` highlight sliver, no
gradients, no shading, no drop shadows. The bear on the cookies and the stamp is a simple round-eared
placeholder, `data-mockup`, until the owner sends their own drawing (PRD question 15).

## 7. Sections
**1. Hero.** Thesis viewport: the wall, the counter, the coffee standing on it, the stamp. The text block
is vertically centred in the wall on desktop. The photo's bottom edge sits on a 14px `sage` slab (the
counter top). The buttons are solid blocks within the `roster` tile band.
```
Hero: phone (390)            Hero: desktop (1440)
+----------------------+     +------------------------------------------------------------------+
| banner (2 lines)     |     | banner                                                           |
| P8 Cafe    (display) |     |                                         +-------------------+    |
| Kopi, kue mentega,   |     |  P8 Cafe                   (display)    |  owner-1, 4:5     |    |
| dan sudut tenang di  |     |  Kopi, kue mentega, dan sudut           |  ~420 x 525       |    |
| Rawamangun.   (lead) |     |  tenang di Rawamangun.         (lead)   |  paper mat 10px   |    |
| o Buka hari ini ·    |     |  o Buka hari ini · 10.00–21.00          |                   |    |
|   10.00–21.00        |     |                                     (STAMP)               |    |
|        +-----------+ |     |                                         +-------------------+    |
| (STAMP)| owner-1   | |     |====================== sage slab 14px (full bleed) ===============|
|        | 4:5, 58%  | |     | [ Petunjuk Arah ] [ WhatsApp ]  [] [] [] [] [] [] [] [] [] [] [] |
|========+===========+=|     | [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] []   |
| [ Petunjuk Arah    ] |     +------------------------------------------------------------------+
| [ WhatsApp         ] |     text cols 1–6; photo cols 8–11; stamp 150px straddles the photo's
| [] [] [] [] [] [] [] |     lower-left corner. Wall ≈ 600px tall, counter band ≈ 200px.
+----------------------+     Phone: stamp 128px; Petunjuk Arah lands at about y 620.
```
The counter band is full-bleed `roster` + `roster-tile.svg`. Petunjuk Arah is `ink` with paper text and a pin
icon. WhatsApp is `paper` with ink text and a 2px ink border. Both are min 56px tall and 6px radius.

**2. Kopi + kue, gratis.** The offer, shown big: a `sage` elliptical tray holding a `paper` liner
(rotated −4°, faint "P8 Cafe" pattern), with the two bear cookies, each captioned directly below.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Kopi + kue, gratis   |       |   .---------------------------.                                  |
| (head)               |       |  (  tray /liner -4°, pattern/  )    Kopi + kue, gratis (head)     |
| Setiap kopi datang   |       |  (   [bear 200]   [bear 200]   )    Setiap kopi datang bersama    |
| bersama satu kue     |       |  (   Kue mentega  Kue kacang   )    satu kue mentega, gratis.     |
| mentega, gratis.     |       |   '---------------------------'     (lead) + body 2–3 lines       |
| .------------------. |       |   cols 1–6                          cols 8–12, centred vertically |
| ( [bear]   [bear]  ) |       +------------------------------------------------------------------+
| ( mentega  kacang  ) |
| '------------------' |
| body 2–3 lines       |
+----------------------+
```

**3. Menu andalan.** The display case: two features on `paper` tent cards (illustration, then the name
and price on one line, then a 1–2 line description), then four lists. Drinks and cookies come first, rice last.
`roster` field; a `sage` slab across the top edge, as in the hero.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Menu andalan (head)  |       | Menu andalan (head)        | +-------------+  +-------------+     |
| lead                 |       | lead, 2 lines              | | [es kopi]   |  | [cupcake]   |     |
| +------------------+ |       | legend: bergaris titik =   | | Es Kopi Bola|  | Red velvet  |     |
| | [es kopi illus]  | |       | contoh                     | | Es · 35rb   |  | cupcake·25rb|     |
| | Es Kopi Bola Es  | |       | cols 1–5                   | | desc        |  | desc        |     |
| | · Rp 35rb  desc  | |       |                            | +-------------+  +-------------+     |
| +------------------+ |       |------------------------------------------------------------------|
| +------------------+ |       | Minuman (h3)   | Dari etalase   | Brunch         | Nasi · 45rb   |
| | [cupcake illus]  | |       | items, body    | items          | items          | items         |
| +------------------+ |       | note: kebanyakan dingin · bisa minta kurang manis (under Minuman)|
| Minuman / Etalase /  |       +------------------------------------------------------------------+
| Brunch / Nasi lists  |       4 lists × 3 cols; hairline (ink 20%) above each list
+----------------------+
```

**4. Kerja & ngumpul.** The quiet passage. `sage` field. Three points, each under its own black pendant
lamp (flat SVG, cord + dome + `butter` bulb, ≤64px), like tables under P8's lamps.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Kerja & ngumpul      |       | Kerja & ngumpul (head) cols 1–6   lead cols 7–12, 2 lines        |
| lead                 |       |        |                  |                   |                  |
| (lamp) Jauh dari     |       |      (lamp)             (lamp)              (lamp)               |
|        bising jalan  |       |   Jauh dari bising    Musik pelan,        Banyak ruang,          |
| (lamp) Musik pelan   |       |   jalan  (lead)       ngobrol nyaman      sampai lantai atas     |
| (lamp) Banyak ruang  |       |   1 line body         1 line body         1 line body            |
+----------------------+       +------------------------------------------------------------------+
```

**5. Ruang acara.** `paper`. Text on the left; on the right a `butter` tent card with the question and a WhatsApp button.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Ruang acara (head)   |       | Ruang acara (head)                 | +-------------------------+ |
| body: workshop, yoga |       | body: workshop & yoga (reviews 5)  | | Mau pakai ruang untuk   | |
| Musiman: bukber note |       | Musiman: menu plating bukber,      | | workshop, yoga, arisan? | |
| +------------------+ |       | Es Rujak Gembira (small)           | | [ Tanya lewat WhatsApp ]| |
| | butter card+btn  | |       | cols 1–6                           | +-------------------------+ |
| +------------------+ |       |                                    | cols 8–12                   |
+----------------------+       +------------------------------------------------------------------+
```

**6. Bawa pulang.** `butter` field. The jar is large on the left; the list and the action are on the right.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Bawa pulang (head)   |       |   +-----------+         Bawa pulang (head)                       |
| lead                 |       |   |  [jar     |         Datang buat kerja, pulang bawa satu      |
|    [jar illus 220]   |       |   |   illus   |         toples cookies. (lead)                   |
| P8 Butter Cookies    |       |   |   ~380h]  |         P8 Butter Cookies · Rp 40rb per toples   |
| · Rp 40rb            |       |   +-----------+         Rasa: original butter, kacang, choc chip |
| rasa list            |       |   cols 1–5              Hampers Lebaran · musiman                |
| Hampers · musiman    |       |                         [ Pesan lewat WhatsApp ]   cols 7–12     |
| [ Pesan lewat WA ]   |       +------------------------------------------------------------------+
+----------------------+
```

**7. Kata mereka.** `paper`. The rating block is on the left; four paraphrased themes in a 2×2 grid on the right,
each with a 20px bear-cookie bullet.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Kata mereka (head)   |       | Kata mereka (head)   | (o) Seperti di rumah   (o) Tenang, enak    |
| 4,7 dari 229 ulasan  |       | 4,7 dari 229 ulasan  |     sendiri. (lead)        buat kerja.     |
| Google (lead)        |       | Google (lead)        | (o) Kue gratisnya      (o) Pelayanannya    |
| (o) theme x4, stack  |       | Diringkas dari ulasan|     enak.                  sopan & hangat. |
| footnote + link      |       | Google · Baca ulasan | cols 5–12                                 |
+----------------------+       | cols 1–4             |                                           |
                               +------------------------------------------------------------------+
```

**8. Kunjungi kami.** `roster` field with the `sage` slab on top. The map is on the left, and the facts and button on the right.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Kunjungi kami (head) |       | +----------------------------------+  Kunjungi kami (head)        |
| address              |       | |                                  |  Jl. Pinang Raya No.8,        |
| Buka setiap hari     |       | |  map iframe, 16:10, radius 14,   |  Rawamangun, Pulo Gadung,     |
| Senin   10.00–21.00  |       | |  2px ink border, lazy            |  Jakarta Timur 13220          |
| ...     (7 rows,     |       | |                                  |  Buka setiap hari             |
| today = butter row)  |       | |                                  |  Senin 10.00–21.00 ... (7)    |
| [ Petunjuk Arah ]    |       | +----------------------------------+  [ Petunjuk Arah ]           |
| [ map 4:3 ]          |       | cols 1–7                              cols 8–12, table ≤340px      |
+----------------------+       +------------------------------------------------------------------+
```

**9. Hubungi kami.** `ink` band, the close. Paper text. WhatsApp is a `paper` button; Telepon and Petunjuk Arah are outlined in paper.
```
phone                          desktop
+----------------------+       +------------------------------------------------------------------+
| Hubungi kami (head)  |       | Hubungi kami (head)                 [ WhatsApp ] [ Telepon ]     |
| lead                 |       | Tanya menu, pesan toples, atau      [ Petunjuk Arah ]            |
| [ WhatsApp        ]  |       | pakai ruang. (lead)  cols 1–6       Nomor menyusul (small)       |
| [ Telepon         ]  |       |---------------------------------------------------------------- |
| [ Petunjuk Arah   ]  |       | P8 Cafe · Jl. Pinang Raya No.8, Rawamangun · draf mockup (small) |
| footer (small)       |       +------------------------------------------------------------------+
+----------------------+
```

## 8. Motion
**Signature: the stamp press.** CSS keyframes on `.stamp-inner`, so it runs without JS or hydration.
- Delay 0.3s, 0.45s long, `cubic-bezier(0.16, 1, 0.3, 1)`: opacity 0→1, scale 1.15→1, rotate −16°→−8°.
- An ink ring (pseudo-element) follows: delay 0.7s, 0.6s, ease-out, opacity 0.35→0, scale 1→1.1.
- Job: focus. It points at the offer.
- The hero text and photo never animate (LCP).
- Reduced motion: `animation: none`, so the stamp sits at −8° from first paint and the ring is not rendered.

Supporting:
- Sections 2–9 fade up once with the starter `Reveal` (20px, 0.6s, power2.out, start "top 85%"). One Reveal per section block, never per card or list item.
- Responses are plain CSS, 150ms ease-out. Buttons lift −2px on hover and move +1px on press. The ink button turns `roster-deep` and the paper button turns `butter` (the colour change stays under reduced motion).
- The stamp link tilts on hover/focus (on the outer `<a>`): rotate −8°→−3°, scale 1.04, 200ms.

Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 0.45 }`, `ease.out = "power2.out"`, `distance.reveal = 20`.
Lenis: starter defaults.

## 9. What makes it this shop
- The first screen is P8's counter: breeze-block tile, sage counter-top slab, and buttons set in as solid blocks.
- The free cookie is the stamp and gets its own section on the steel tray with the P8 liner pattern, the way every coffee is served.
- The menu reads as the "ORDER HERE" case with tent cards. It is honest about the drinks (mostly iced; hot means americano and tea; ask for "kurang manis") and puts rice last.

## 10. Avoid
- The cream + serif + terracotta-accent cafe template. Here, terracotta is a field and a structure, the ground is plaster white, and the face is chunky and rounded.
- Kawaii overload. One placeholder bear, at three small sizes (stamp, cookie, bullet), with no name, no face expressions, no pastel pinks and no bouncy easing.
- A split hero with a badge row. The counter line and the stamp must carry the composition; if the tile band reads as a stripe under a template, enlarge the band and seat the photo on it.
- A busy block pattern behind text. The tile appears only in the hero band; Menu and Kunjungi use flat `roster`.
- Gradients, glass, drop shadows, hard offset shadows, generic icon tiles, emoji.
- Claims: no "kopi terbaik", no strong-coffee promise, no parking line, no "rumah tua" story, no counts of reviews beyond 229, no quotes.
- Prices right-aligned across a wide column; a rating number bigger than its heading.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists body, h3 lead, rating lead)
- [x] Max content width set; no detail pinned far from what it describes (inline prices, captions ≤12px, hours table ≤340px, stamp on the photo)
- [x] Every section has a desktop wireframe that uses the width on purpose (two-column splits, 4-list grid, 3 lamp columns, 2×2 themes, map + facts)
- [x] At least 3 products shown (six: photo + five illustrations)
- [x] Within motion-rules.md (one signature, section reveals only, CSS responses ≤250ms, transform/opacity, no React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
