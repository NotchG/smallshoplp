# Design brief: OSMO Coffee & Eatery

## 1. Concept
The page is OSMO's opening day, 08.00 to 23.00, set in OSMO's own materials: it starts on the bright
plaster table from the owner's photo and darkens section by section (microcement bar, green upstairs,
night navy) down to the lit sign. This fits because OSMO's real draw is the whole day: takeaway coffee
from 08.00 before the office, food and a work table by day, dinner and nobar until 23.00.
Signature moment: in the hero's navy day band, OSMO's round bean mark travels along a 08.00–23.00
line to the current Jakarta time, and "Sekarang 14.20 · buka sampai 23.00" appears above it.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Daily hours 08–23 became the page's structure; owner-1.jpg gives the hero and three bowl crops; customer photos gave the palette (microcement bar, navy coasters, A-frame upstairs, Canned series card) but stay off the site. |
| impeccable | New-work flow by hand, Persuade mode (no concept-seed roll: its scripts write outside docs/). Avoided the cafe default (dark photo + overlay, icon cards, star carousel) and its night-neon opposite. Of 7 candidates (liner, OSMO's day, sign wall, pastry case, Canned card, toll signage, A-frame), chose **OSMO's day**, built from liner, sign and A-frame materials. Full palette, one colour per section; fonts off its overused list; one main animation. |

## 3. Palette (6 named colours)
Hexes were sampled from owner-1.jpg and the reference photos, then adjusted for contrast.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plester` | #EBE6E2 | Page background for hero, menu and praise. Matches the plaster in owner-1, so the photo has no visible seam | `tinta` on it 12.0:1 |
| `alas` | #F8F7F4 | Tray liner inside the walnut tray (menu) | `tinta` 13.9:1; with the 8% pattern behind it, still ≥ 11:1 |
| `tinta` | #1D2836 | OSMO's navy print colour: all text on light backgrounds, buttons, the day band, background of the night section | `plester` on it 12.0:1 |
| `semen` | #B3ABA4 | Background of Dari bar kopi (the microcement counter) | `tinta` on it 6.6:1. **Only `tinta` text here** (`tinta-pudar` is 3.2:1, fails) |
| `daun` | #2E4D35 | Background of Kerja, nongkrong, nobar (upstairs plants and trees) | `plester` on it 7.6:1 |
| `walnut` | #6B4433 | Tray frame only | decorative (`plester` on it 6.8:1 if ever needed) |

Derived text tones (not new colours): `tinta-pudar` #4E5866 is muted text on `plester` (5.8:1) and `alas` (6.7:1).
`plester-pudar` #A9B0BA is muted text on `tinta` (6.8:1). The unfilled day-line track is #55606E (decorative only).
No red. The espresso-machine red was considered and dropped: one more accent with no job to do.

## 4. Type
Two families via `next/font/google`, Latin subset, `display: swap`:
- **Jost** (500, 600): the wordmark, h2 and h3, dish names, prices, buttons, small caps labels.
  It is a Futura-style geometric face, matching the spaced "O S M O" print.
- **Figtree** (400, 500): body text, lead statements, descriptions.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 2.2rem + 6.5vw, 7.5rem)` (64→120px) | Hero "OSMO" wordmark only (plus the footer sign) |
| `--step-head` | `clamp(1.625rem, 1.2rem + 1.9vw, 2.75rem)` (27→44px) | h2 section headings, spaced caps |
| `--step-lead` | `clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)` (20→24px) | lead lines, h3, dish names, "COFFEE & EATERY", band hours |
| `--step-body` | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` (16→18px) | running text, list items, buttons |
| `--step-small` | `clamp(0.8rem, 0.77rem + 0.13vw, 0.875rem)` (12.8→14px) | caps labels, hour ticks, captions, the source note |

Ratios checked at 390 / 768 / 1440: small→body 1.26 / 1.27 / 1.29; body→lead 1.26 / 1.32 / 1.33;
lead→head 1.31 / 1.52 / 1.83; head→display 2.4 / 2.5 / 2.7.
- Wordmark: Jost 600, tracking 0.32em (`margin-right: -0.32em`), source "OSMO" with no spaces so it
  can't wrap, line height 0.9. If too wide for its column at 1024–1440, use 0.28em tracking; keep the size.
- h2: Jost 500, CSS uppercase, 0.12em, line height 1.1. h3 and dish names: Jost 500, the shop's own casing, 1.3.
- Labels: Jost 500 caps, 0.16em, `--step-small`. Times and prices `tabular-nums`. Body: Figtree 400, 1.55, ≤ 62ch.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px from 768 / 40px from 1024 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (from 768) |

- Grid at ≥1024: 12 columns, 24px gap. Breakpoints: 768 (tray goes to columns), 1024 (two-column sections).
- **Proximity:** prices inline after the name ("Americano · Rp 25rb"), never right-aligned across a row.
  Hours: day column 96px, time 16px after. "Sekarang…" sits 8px above the bean marker and moves with it.
- **Wide screens:** at 1440 every section is two columns, the full-width tray or a 2×2 grid (see §7).
- **Lists:** dish and drink lists at `--step-body`; h3 and the dish names under the bowls at `--step-lead`. Nothing larger.

## 6. Products on the page
Four products are shown as pictures, not just named:
1–3. **The three rice bowls from owner-1.jpg**, cropped to circles at their plate rims and placed like
plates on the printed liner inside the walnut tray: "Rice Bowl Chicken Salted Egg", "Rice Bowl Cumi
Sambal", "Rice Bowl Beef Sambal" (names `[MOCKUP]`). Crop boxes are in the TRD. No hands or poster in the circles.
4. **Canned series Aren Latte**: a flat SVG can (aluminium body with a navy "AREN LATTE" band) on a navy
card in the bar section (`[MOCKUP]` stand-in until the owner sends a photo).
Pasta, French toast, toast with ice cream, wings and drinks are named in typeset lists with prices.
Decision: no hand-drawn food illustrations. Next to the real photography they would look amateur.

## 7. Sections
Order (refined from brief.md): Hero → Menu andalan → Kata mereka → Dari bar kopi → Kerja, nongkrong, nobar →
Kunjungi + Hubungi (one night region) → Footer. Praise follows the food because most reviews praise food
and service. The backgrounds then darken steadily (plester, semen, daun, tinta), which reads as morning to night.

**Hero**: recognition plus the first action. Wordmark, pitch, address, Petunjuk Arah / WhatsApp, owner photo, day band.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------------------+  +----------------------------------------------------------------+
| draft banner (tinta)         |  | draft banner                                                   |
| O S M O         display 64   |  |                              |##################################|
| COFFEE & EATERY lead caps    |  | O S M O        display 120   |# owner-1 hero crop, no frame,   #|
| Kopi, makan, kerja, dan      |  | COFFEE & EATERY              |# bleeds off top + right edge    #|
| nongkrong di Bambu Apus.     |  | Kopi, makan, kerja, dan      |# tumbler, tray, bowls, pothos   #|
| Jl. Mpok Nori No.10, Cipayung|  | nongkrong di Bambu Apus.     |# ~708 x 754, cover, 50% 45%     #|
| [Petunjuk Arah] [WhatsApp]   |  | Jl. Mpok Nori No.10 ...      |#                                #|
|##############################|  | [Petunjuk Arah] [WhatsApp]   |#   col 7 -> viewport edge       #|
|# owner-1, full-bleed 390x300#|  |  cols 1-6, vertically centred|##################################|
|##############################|  |================================================================|
|==============================|  | BUKA HARI INI | Sekarang 14.20 · buka sampai 23.00             |
| BUKA HARI INI  08.00–23.00   |  | 08.00–23.00   |==============●- - - - - - - - - - - - - - - - -|
|   Sekarang 14.20 · buka ...  |  |  cols 1-3     | 08.00     12.00     16.00     20.00      23.00 |
| |=========●- - - - - - - - | |  |========== full-bleed tinta band, 112px; track cols 4-12 =======|
| 08    12    16    20     23  |  +----------------------------------------------------------------+
+==============================+
```
Phone fold (844): the buttons end around 340px and the band ends around 760px.
Hour ticks are every hour, labelled at 08/12/16/20/23. With JS off, there is no marker and no "Sekarang" line.

**Menu andalan** (`plester`): the food, shown on OSMO's own tray.
```
Menu: phone                       Menu: desktop
+------------------------------+  +----------------------------------------------------------------+
| MENU ANDALAN                 |  | MENU ANDALAN                                                   |
| Rice bowl, pasta, French...  |  | Rice bowl, pasta, French toast, dan camilan... (cols 1-7)      |
| +=walnut tray===============+|  | +=walnut 14px frame, full 1200 width==========================+|
| |(bowl 132) Rice Bowl Chicken||  | | liner: bean + O S M O pattern, 8% tinta                      ||
| |           Salted Egg      ||  | |    ( bowl 300 )        ( bowl 300 )        ( bowl 300 )      ||
| |           Rp 45rb · desc  ||  | |  Rice Bowl Chicken    Rice Bowl Cumi      Rice Bowl Beef     ||
| |(bowl 132) Rice Bowl Cumi.. ||  | |  Salted Egg · Rp 45rb  Sambal · Rp 45rb   Sambal · Rp 45rb   ||
| |(bowl 132) Rice Bowl Beef.. ||  | |  desc, centred under  desc                desc               ||
| +===========================+|  | +==============================================================+|
| JUGA DARI DAPUR  (h3)        |  | JUGA DARI DAPUR (h3)                                           |
| Creamy Mushroom Pasta · 55rb |  | Creamy Mushroom Pasta · Rp 55rb   French Toast · Rp 42rb       |
| French Toast · 42rb ...      |  | Toast es krim                     Wings & fries · Rp 48rb      |
+------------------------------+  +---- 2x2 list, cols 1-6 / 7-12, desc under each name ----------+
```
The bowls have a soft shadow (0 10px 24px tinta at 18%) so they read as plates sitting on the liner.
Captions sit within 16px of the bowl.

**Kata mereka** (`plester`): social proof, paraphrased. No names, no quotation marks, no stars.
```
Praise: phone                     Praise: desktop
+------------------------------+  +----------------------------------------------------------------+
| KATA MEREKA                  |  | KATA MEREKA            | Rasanya pas          | Cepat dan       |
| 4,9 di Google, 3.033 ulasan  |  | 4,9 di Google,         | Bumbunya pas, tidak  | perhatian       |
| Kata tamu, kafe senyaman ini |  | dari 3.033 ulasan      | berlebihan...        | Makanan cepat...|
| jarang ada di Jakarta Timur. |  | Kata tamu, kafe se-    |----------------------+-----------------|
| -- Rasanya pas               |  | nyaman ini jarang ada  | Enak buat kerja      | Kopi pagi dari  |
| -- Cepat dan perhatian       |  | di Jakarta Timur.      | Luas, bersih...      | jam 8 ...       |
| -- Enak buat kerja           |  | Dirangkum dari ulasan  |                      |                 |
| -- Kopi pagi dari jam 8      |  | Google. (small)        |  cols 6-12, 2x2, hairline above each   |
| Dirangkum dari ulasan Google.|  |  cols 1-4              |                                        |
+------------------------------+  +----------------------------------------------------------------+
```

**Dari bar kopi** (`semen`): coffee from 08.00, drinks, breakfast, pastries, the Canned series.
```
Bar: phone                        Bar: desktop
+------------------------------+  +----------------------------------------------------------------+
| DARI BAR KOPI                |  | DARI BAR KOPI                                | +=tinta card===+ |
| Kopi pagi dari jam 8, bisa   |  | Kopi pagi dari jam 8, bisa dibawa ke kantor. | |  [SVG can    | |
| dibawa ke kantor.            |  | KOPI (h3)            NON-KOPI (h3)           | |   150x250]   | |
| KOPI: Kopi Susu Aren · 28rb  |  | Kopi Susu Aren · Rp 28rb  Matcha Latte · 32rb| | Canned series| |
|   Americano · 25rb ...       |  | Americano · Rp 25rb   Lychee Tea             | | Aren Latte   | |
| NON-KOPI: Matcha Latte ...   |  | Cappuccino / Caffè Latte / Manual Brew (V60) | | dalam kaleng | |
| Sarapan dari jam 8 ...       |  | Sarapan dari jam 8: toast, French toast, kopi| | · Rp 30rb    | |
| Di etalase: croissant, Danish|  | Di etalase: croissant dan pastry ala Danish  | +==============+ |
| +=tinta card: can + text====+|  |  cols 1-7                                    |  cols 9-12       |
+------------------------------+  +----------------------------------------------------------------+
```

**Kerja, nongkrong, nobar** (`daun`): the space and its facilities, with a line drawing of OSMO's upstairs A-frame.
```
Space: phone                      Space: desktop
+------------------------------+  +----------------------------------------------------------------+
| KERJA, NONGKRONG, NOBAR      |  |      /\                    | KERJA, NONGKRONG, NOBAR           |
| Dua lantai: bar kopi di      |  |     /||\  A-frame line     | Dua lantai: bar kopi di bawah,    |
| bawah, ruang ... di atas.    |  |    /||||\ drawing, plester | ruang beratap tinggi dan outdoor..|
|   [A-frame drawing 300w]     |  |   /||||||\ 2px strokes:    | Kerja      Wi-Fi, banyak colokan..|
| Kerja — Wi-Fi, colokan ...   |  |  /|#|||||||\ rafters, glass| Nongkrong  Area outdoor lt. atas..|
| Nongkrong — outdoor ...      |  | /_|#|_o_o_o_\ wall, plants | Nobar      Pertandingan besar ... |
| Nobar — pertandingan besar...|  |  cols 1-5, ~460x420        | Parkir depan & belakang · Musholla|
| Parkir · Musholla · Toilet...|  |                            | · Toilet bersih · Wi-Fi · Colokan |
+------------------------------+  +---------------------------- cols 7-12 -----------------------+
```
h3 labels (Kerja / Nongkrong / Nobar) are 140px wide with the text 16px after them on desktop, and stacked on phone.

**Kunjungi kami + Hubungi kami** (`tinta`, night): find it, see hours, make contact. Two h2s in one region.
```
Night: phone                      Night: desktop
+------------------------------+  +----------------------------------------------------------------+
| KUNJUNGI KAMI                |  | KUNJUNGI KAMI               | +------------------------------+ |
| Jl. Mpok Nori No.10 Blok F,  |  | Jl. Mpok Nori No.10 Blok F, | |                              | |
| Bambu Apus, Cipayung 13890   |  | Bambu Apus, Cipayung ...    | |  Google Maps embed, ~690x420 | |
| Dekat gerbang tol, gampang...|  | Dekat gerbang tol, gampang..| |  radius 16px, lazy           | |
| Rute dari tol: menunggu info |  | Rute dari tol: menunggu info| |                              | |
| Buka setiap hari / 7 rows    |  | Senin  08.00–23.00  (x7)    | +------------------------------+ |
| [Petunjuk Arah]              |  | [Petunjuk Arah]   cols 1-5  |   cols 6-12                      |
| [ map 350 x 260 ]            |  |----------------------------------------------------------------|
| HUBUNGI KAMI                 |  | HUBUNGI KAMI                | WhatsApp   0811-1011-3993  ->    |
| WhatsApp 0811-1011-3993 ->   |  | Datang rombongan atau mau   | Telepon    0811-1011-3993  ->    |
| Telepon / Instagram          |  | nobar? Kabari lewat WA.     | Instagram  menunggu akun OSMO    |
+------------------------------+  +----------------------------------------------------------------+
```
**Footer** (`tinta`): "OSMO" at `--step-display` in `plester` (the sign at night, no glow), with
"OSMO Coffee & Eatery · Bambu Apus, Cipayung, Jakarta Timur" and the draft line below it. Phone
stacks; desktop puts the wordmark at cols 1–7 and the text at cols 8–12, aligned to the bottom.
The sign is the footer's own title (`aria-hidden`, beside visible text), so it outranks no heading in its section.

## 8. Motion
**Signature: the bean finds "now".** Hero day band, on load, after fonts are ready + 0.25s. The `plester`
fill slides (`translateX`) from 08.00 to now while the bean marker moves along `x` to the same point
(1.1s, `expo.out`). Then "Sekarang…" fades in, rising 6px (0.3s, `power2.out`). Final positions live in CSS
(`--p` = share of 08.00→23.00 elapsed in Asia/Jakarta, clamped 0–1); GSAP only animates from the start.
Before 08.00 there is no travel; after 23.00 the marker sits at the end. Reduced motion: final state,
nothing moves. JS off: the hours text only.
**Supporting:** `Reveal` (20px, 0.7s) on the menu tray, bar and space sections only. Buttons: 180ms colour
change in CSS. No photo hover zoom. Lenis defaults. New token: `duration.label = 0.3`.

## 9. What makes it this shop
- The 08.00–23.00 line with OSMO's bean marking the current time. Their long day is why commuters,
  remote workers and nobar crowds all end up there.
- Their own three rice bowls sitting on a printed OSMO tray liner inside a walnut tray: the exact
  objects from the photo the owner uploaded.
- The page darkens from plaster table to microcement bar to upstairs green to night navy, and closes
  on the "OSMO" sign. The A-frame drawing is their upstairs room, not a stock cafe icon.

## 10. Avoid
- Dark photo with overlay text; three icon cards for facilities; testimonial carousel or stars; cream + serif; a glowing night sign.
- The liner pattern outside the tray (it becomes wallpaper).
- A day-theme gimmick: clock faces, sun/moon icons, sky gradients, or a time stamp on every section.
- Animating letter-spacing on the wordmark (it moves layout); staggering bowls or list items.
- Over-promising: no "Wi-Fi kencang", "tenang/sepi" or "porsi besar". Use "nyaman".
- Any `photo-*.jpg`, the Chaplin poster, finger slivers in a bowl circle, hand-drawn food, or a "real" logo (the bean glyph is a marked stand-in).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (ratios in §4; lists ≤ lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; inline prices, 96px hours column, label rides the marker)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns, full-width tray, 2×2 grid, map beside the address)
- [x] At least 3 products shown (three owner-photo bowls + the Canned series can)
- [x] Within motion-rules.md (one signature; transform/opacity only; three section reveals; reduced motion = none; no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
