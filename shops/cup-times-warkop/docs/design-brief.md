# Design brief: Cup Times & Warkop

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
The page is a Cup Times cup: one forest-green ink on pale frosted plastic, with white thermal price
stickers stuck straight onto the drinks, and the night yard under string lights as the window into the
place. It's cheap, cheerful and price-first, because "Low Price High Taste" is the whole idea.
Signature moment: on load, the white "Es Latte Rp 15.000" sticker slaps onto the corner of the kiosk
photo and lands at a slight tilt.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Name, address, hours (Sat to 00.00), price level, the Rp 15rb latte series, three review themes, Bahasa Indonesia, cheeky warkop tone |
| owner-4.jpg | The whole system: green one-colour print on clear cups, white labels "CUP TIMES / Vanilla Latte / Rp 15.000", the tagline |
| owner-1.jpg | Hero crop: black steel kiosk, sachet wall, wood panel, three bulbs; the deep night tones for the ground |
| owner-3.jpg | The night section's drink photo (es kopi susu in a tall glass, white chairs, steel table) |
| photo-1/2/3 (reference only) | Showed older menu items to ask about; latte-art cup avoided as a cliché; nothing used on the site |
| impeccable | Persuade mode. new-work steps 1–4 by hand (the launcher wasn't run: it would download a binary outside `docs/`). Rut named: moody espresso photo with cream and serif, or neon night glow. Seven candidates from the audience's world: cup print, thermal price label, sachet renceng wall, MMT vinyl price banner, the string-light yard (the literal reading), the ojol merchant menu (the tool rut), the nota kontan receipt book. Picked cup print fused with the price label; the renceng stays as one detail. Committed colour strategy; faces off the reflex list; one authored focal moment |

Physical scene: someone at 9 pm, phone in hand by the road, checking whether it's still open and what an
es latte costs. So the first screen is a deep green field with high-contrast type and today's hours right under the name.

## 3. Palette (4–6 named colours)
Strategy: Committed. Green (`cup` + `night`) owns the hero, the night section, contact and footer,
about half the scroll. Amber appears only where light would be: the primary button on dark grounds,
the "today" dot, and the Saturday line.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `--color-cup` "Hijau Cup" | #1E5631 | Hero and contact ground; headings, links and the primary button on light grounds; cup line art | white on it 8.64; frost on it 7.56; on frost 7.56 |
| `--color-night` "Malam" | #0E1F15 | Night section and footer ground | frost on it 14.99; amber on it 9.82 |
| `--color-frost` "Plastik" | #EDF1EA | Menu and praise ground; body text on green | ink on it 14.14 |
| `--color-ink` "Tinta" | #15241A | Body text on light grounds; sticker print; text on amber buttons | on white 16.16; on amber 9.27 |
| `--color-label` "Stiker" | #FFFFFF | Sticker and label faces; "Kunjungi kami" ground; headline on green | ink on it 16.16; cup on it 8.64 |
| `--color-bulb` "Lampu" | #FFB648 | Primary button on cup/night, today dot, Saturday line on night, focus ring on dark grounds | on cup 4.95; on night 9.82; **on frost or white 1.53: never used there** |

Focus ring: 3px `bulb` on cup and night, 3px `cup` on frost and white, 2px offset.
Illustration-only fills (no text on them, not tokens): latte tints Vanilla #E3CFA8, Caramel #C99560,
Hazelnut #A57650, ice #F7F3EA; roti bakar crust #C98A45, crumb #F2D6A0, grill #8A5326, filling
#5B2E1F / #F2C230; sachet colours #E5483B, #F2C230, #3B6FD8, #8E4FC4, #F07F2E, #FFFFFF.

## 4. Type
Display: **Lilita One** 400 (chunky, friendly, rounded corners like the Cup Times logo lettering).
Body, labels, buttons, prices: **Rubik** (variable; 400/500/700; rounded terminals, tabular figures for prices).
Both via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 2.4rem + 6.6vw, 8rem)` (64 → 128px) | hero name only, two lines "Cup Times / & Warkop", line height 1.05 |
| `--step-head` | `clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)` (36 → 56px) | h2 section headings (Lilita); hero sticker price |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` (22 → 28px) | hero line, section leads, h3 "Cup Times" / "& Warkop" (Lilita), praise lines (Rubik 500) |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)` (17 → 19px) | running text, menu items, cup label names and prices, hours, buttons (Rubik 700) |
| `--step-small` | `0.8125rem` (13px) | "CUP TIMES" on labels (700, tracking 0.08em), captions, the tagline, the review note |

Ratios: phone 64/36 = 1.78, 36/22 = 1.64, 22/17 = 1.29, 17/13 = 1.31; desktop 128/56, 56/28,
28/19 and 19/13 are all at least 1.45. `--leading-display: 1.05` (the name wraps), `--leading-head: 1.1`,
`--leading-body: 1.55`; lead 1.3. Light-on-green body text: Rubik 400 and tracking 0.005em, never 300.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12 columns, 32px gap from 1024px up |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Here: cup labels sit *on* the cup; warkop prices are chips 8–12px after the item name, never in a
  right-aligned column; photo captions are 8px under their photo.
- **Wide screens are designed, not stretched:** every section below uses a 5/7 or 7/5 split, three
  columns, or (contact only) a visibly narrow centred column.
- **Lists:** menu items are `--step-body`; h3 sub-heads are `--step-lead`; nothing in the menu reaches `--step-head`.

## 6. Products on the page
Five products are shown as pictures, plus the owner's own cup photo:
1. **Vanilla Latte, Caramel Latte, Hazelnut Latte.** Flat SVG cups (`LatteCup`). A tapered clear cup
   with a 2.5px `cup` outline, the flavour tint filling the lower 70%, three ice cubes, and four or five
   green bean doodles printed on the empty part (the way the real cups are printed; don't redraw the logo).
   A white label sits on each cup in live HTML text: "CUP TIMES" (small), the name (body 700), "Rp 15.000"
   (body 500, tabular). Labels are hand-applied at −2°, 1° and −1°. (owner-4)
2. **owner-4.jpg** shown uncropped beside the cups, captioned "Es latte Cup Times dengan label harganya."
   (describes the owner's photo; no new claim).
3. **Roti bakar.** Flat SVG (`RotiBakar`): three grilled toast pieces stacked on a board, with grill stripes and a
   dark-and-yellow filling line, next to its name and a "Rp 15rb" chip ([MOCKUP] price). owner-2 is
   not used (watermark).
4. **Es kopi susu.** owner-3 crop in the night section, captioned.
The warkop list (Indomie telur, pisang goreng, kopi sachet, es teh manis…) is text with price chips:
named, not pictured. Butterscotch Latte stays off the page until confirmed.

## 7. Sections
**Hero** (`cup` ground). Name, line, today's hours, two buttons, kiosk photo with the sticker. Header row
inside: "Kebon Pala, Jakarta Timur" (small, frost) left; desktop anchors right.
```
Hero: phone (390)                Hero: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
|[draft banner]            |     | Kebon Pala, Jakarta Timur             Menu  Tempat  Lokasi  |
| Kebon Pala, Jakarta Timur|     |                                         +----------------+  |
| Cup Times        display |     | Cup Times              display 128      |  owner-1 crop  |  |
| & Warkop           64px  |     | & Warkop               cols 1–7         |  3:4, ~480x640 |  |
| Kopi enak, harga    lead |     |                                       +-+-------+        |  |
| bersahabat, di Kebon Pala|     | Kopi enak, harga bersahabat,  lead    |CUP TIMES|        |  |
| (o) Buka hari ini        |     | di Kebon Pala.                        |Es Latte |        |  |
|     09.00–23.00          |     | (o) Buka hari ini 09.00–23.00         |Rp15.000 |        |  |
| [Petunjuk Arah][WhatsApp]|     | [Petunjuk Arah]  [WhatsApp]           +-+-------+        |  |
| +-------+--------------+ |     |                                         |  cols 8–12     |  |
| |STIKER |  owner-1 crop| |     |                                         +----------------+  |
| |15.000 |  4:5, full   | |     +-------------------------------------------------------------+
| +-------+  width       | |     Sticker straddles the photo's left edge, lower third, −4°, ~290px wide (~200px on phone).
+--------------------------+     Phone: sticker over the photo's top-left corner, visible at 844px.
```
**Menu andalan** (`#menu`, `frost`). Two sub-blocks that split along the name, with the renceng strip as the "&".
```
Menu: phone (390)                Menu: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
| Menu andalan        h2   |     | Menu andalan                h2, cols 1–7                    |
| Kopi enak nggak harus    |     | Kopi enak nggak harus mahal. Low Price High Taste.   lead   |
| mahal. Low Price ... lead|     | Cup Times  h3                                               |
| Cup Times           h3   |     | +-------------------------+   [cup]      [cup]      [cup]   |
| [cup]+-Vanilla Latte--+  |     | | owner-4 photo, 2.17:1   |   +label+    +label+    +label+ |
|      | Rp 15.000      |  |     | | cols 1–5                |   Vanilla    Caramel    Hazelnut|
| [cup]+-Caramel Latte--+  |     | +-------------------------+   cols 6–12, cups ~190px wide   |
| [cup]+-Hazelnut Latte-+  |     | caption                                                     |
| [owner-4 photo]          |     | |▒|▒|▒|▒|▒|▒|▒|▒|▒|▒|▒|▒|  renceng strip, cols 1–12, 56px  |
| caption                  |     | & Warkop  h3 + intro line                                   |
| |▒|▒|▒|▒| renceng       |     | [roti bakar SVG]        | Indomie telur [Rp 12rb]  Kopi sachet [Rp 5rb]
| & Warkop            h3   |     | Roti bakar [Rp 15rb]    | Pisang goreng [Rp 10rb]  Es teh manis [Rp 5rb]
| [roti bakar SVG]         |     | cols 1–5                | cols 6–12: two list columns, ~300px each
| Roti bakar [Rp 15rb]     |     |                         | Juga ada: Kopi Susu Gula Aren, ... body
| Indomie telur [Rp 12rb]  |     +-------------------------------------------------------------+
| ... list, Juga ada line  |
+--------------------------+
```
**Nongkrong sampai malam** (`#tempat`, `night`). The dark passage of the page: photo, the late hours in amber, facilities.
```
Night: phone (390)               Night: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
| Nongkrong sampai    h2   |     | +---------------------+     Nongkrong sampai malam   h2     |
| malam                    |     | | owner-3 crop, 4:5   |     Lampu gantung di bawah pohon,   |
| Lampu gantung di   lead  |     | | cols 1–5, ~480x600  |     kursi bar di depan kios ... lead|
| bawah pohon, ...         |     | |                     |     Buka sampai 23.00 setiap hari.  |
| [owner-3 crop 4:5]       |     | +---------------------+     Sabtu sampai tengah malam.      |
| caption                  |     | caption                     (body 700, bulb)  cols 7–12     |
| Buka sampai 23.00 ...    |     |                             Fasilitas: outdoor · parkir     |
| Fasilitas: 3 lines body  |     |                             motor · meeting santai   body   |
+--------------------------+     +-------------------------------------------------------------+
```
**Kata mereka** (`frost`). Three paraphrases, separated by 2px `cup` rules, no quote marks.
```
Praise: phone (390)              Praise: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
| Kata mereka         h2   |     | Kata mereka  h2                                             |
| Diringkas dari... small  |     | Diringkas dari ulasan di Google Maps.  small, 8px under h2  |
| ───                      |     | ─────────────────   ─────────────────   ─────────────────   |
| Kopinya enak, harga-     |     | Kopinya enak,       Pemilik dan         Pilihan minumannya  |
| nya bersahabat.    lead  |     | harganya            stafnya ramah.      banyak, pasti ada   |
| ─── (x3 stacked)         |     | bersahabat.  lead   cols 5–8            yang cocok. 9–12    |
|                          |     | cols 1–4                                                    |
+--------------------------+     +-------------------------------------------------------------+
```

**Kunjungi kami** (`#lokasi`, `label` white). Address, hours with today highlighted, map.
```
Visit: phone (390)               Visit: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
| Kunjungi kami       h2   |     | Kunjungi kami  h2           +-----------------------------+ |
| Jl. Permata No.3 C, body |     | Jl. Permata No.3 C,         |                             | |
| Kebon Pala, Makasar ...  |     | Kebon Pala ...    body      |  Google map iframe, 16:10   | |
| Buka setiap hari    700  |     | Buka setiap hari            |  cols 6–12, ~690x430        | |
| Senin–Jumat 09.00–23.00  |     | Senin–Jumat  09.00–23.00    |  lazy                       | |
| (o)Sabtu    09.00–00.00  |     | (o) Sabtu    09.00–00.00    |                             | |
| Minggu      09.00–23.00  |     | Minggu       09.00–23.00    |                             | |
| [Petunjuk Arah]          |     | [Petunjuk Arah]  cols 1–5   +-----------------------------+ |
| [map 4:3]                |     +-------------------------------------------------------------+
+--------------------------+     Hours: day and time in a two-column grid, max 320px wide, so times sit next to days.
```
**Hubungi kami** (`#hubungi`, `cup`) and **Footer** (`night`).
```
Contact + footer: phone (390)    Contact + footer: desktop (1440)
+--------------------------+     +-------------------------------------------------------------+
| Hubungi kami        h2   |     |              Hubungi kami   h2 (centred, max 720px)          |
| Nomor WhatsApp segera    |     |      Nomor WhatsApp segera menyusul. Sementara itu ... body  |
| menyusul ...       body  |     |      [WhatsApp · nomor menyusul]   [Petunjuk Arah]           |
| [WhatsApp · menyusul]    |     +-------------------------------------------------------------+
| [Petunjuk Arah]          |     | Cup Times & Warkop  lead | Buka setiap hari      | Ini draf   |
+--------------------------+     | Jl. Permata No.3 C small | 09.00–23.00, Sabtu    | situs ...  |
| footer: 3 groups stacked |     | cols 1–5                 | 00.00  cols 6–9       | cols 10–12 |
+--------------------------+     +-------------------------------------------------------------+
```

## 8. Motion
**Signature: the sticker slap.** What: the hero price sticker. When: on load, 0.2s after hydration;
the hero text and photo are visible from first paint and never animate. How: from scale 1.08,
rotate −11°, y −12px, opacity 0 to scale 1, rotate −4°, y 0, opacity 1; 0.5s, `expo.out`. Its shadow
(a separate element under the sticker) fades from 0 to 1 over 0.3s, starting at 0.25s, so the sticker
reads as pressed down. Total under 0.6s, runs once. Pre-hide: an inline head script adds `js` to
`<html>`; CSS hides the sticker only under `.js` with `prefers-reduced-motion: no-preference`, and a
1.2s CSS failsafe makes it visible if GSAP never runs. Reduced motion or JS off: the sticker sits at
−4° with its shadow, no motion.
**Supporting:** the starter `Reveal` (20px, 0.6s, `power2.out`, once, start "top 85%") on five blocks
only: the Cup Times block, the & Warkop block, night content, the praise row and the visit block. Cups and
list items aren't staggered. Buttons: background and colour 150ms ease-out; press `translateY(1px)` 150ms.
Links: underline colour 150ms. Lenis: starter defaults.
Tokens for `lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 0.5 }`, ease
as starter, `distance.reveal = 20`, plus
`sticker = { scaleFrom: 1.08, rotateFrom: -11, rotateTo: -4, yFrom: -12, delay: 0.2, shadowDelay: 0.25, shadowDuration: 0.3 }`.

## 9. What makes it this shop
- Prices are white thermal stickers stuck on the drink itself, copied from the labels on the owner's
  own cups ("CUP TIMES / Vanilla Latte / Rp 15.000 / Low Price High Taste").
- The menu splits along the name, "Cup Times" (the latte cups) then "& Warkop" (roti bakar, Indomie,
  sachet drinks), and a strip of hanging sachets, like the kiosk's back wall, is the "&" between them.
- The first screen is a deep cup-green night field that gives today's closing time (23.00, Saturday
  00.00) right under the name, because this crowd comes late.

## 10. Avoid
- The café default: a moody espresso photo, cream ground, serif "crafted" headline, latte-art imagery.
- A Starbucks lookalike: green plus gold plus serif reads premium. Counter it with Lilita, white stickers, amber
  only as bulb light, prices up front and plain cheeky copy.
- Sticker overload: only the hero sticker and the three cup labels are stickers. Praise lines,
  buttons, headings, warkop chips and cards are flat and unrotated.
- Neon night: no glows, blurred bulbs, radial-gradient "lights" or noise backgrounds.
- Redrawing the Cup Times logo, or any third-party brand on the sachet strip (plain coloured packets only).
- A fake WhatsApp number or a dead `wa.me` link; English UI strings; quote marks around paraphrases;
  stars, ratings or review dates.
- owner-2 (watermark), customer photos, a readable number plate, or the staff member's face in any crop.
- Butterscotch on the page before confirmation; menu items at heading size.
- Honest risk: the hero crop is only 516px wide. It's fine on phones and a bit soft at 480px CSS on retina
  desktop. Don't upscale it with filters; ask the owner for a better photo (checklist).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. The lowest ratio is
  1.29 (lead/body on phone). Menu items, labels and chips are body or small, under the lead h3 and head h2.
- [x] Max content width set; no detail pinned far from what it describes. 1200px. Labels sit on the cups,
  price chips 8–12px after the names, captions 8px under the photos, hours in a 320px grid.
- [x] Every section has a desktop wireframe that uses the width on purpose: 7/5 hero, 5/7 menu,
  5/7 night, three-column praise, 5/7 visit, narrow centred contact, three-group footer.
- [x] At least 3 products shown (food and product shops). Three latte cups, roti bakar, es kopi susu, plus owner-4.
- [x] Within motion-rules.md. One signature under 0.6s; five section reveals; transform and opacity only;
  no React Bits; reduced motion means none; nothing hidden past 1.2s.
- [x] Brief is decisions, not essays (2–4 pages).
