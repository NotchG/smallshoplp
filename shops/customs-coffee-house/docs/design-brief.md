# Design brief: Customs Coffee House

Record decisions, not essays. Every section below is required.

## 1. Concept
One scroll is a walk through the shop: each section stands on one of Customs' own surfaces
(the mustard fascia, the bean shelf on a white faux-stone wall, the checkerboard table, the red
feature wall, the black back room), so the owner recognises his place before reading a word.
Signature moment: on load, the circled S of the "CUSTOMS" wordmark rolls in from the right like
a wheel and parks in its slot, once, in 1.0 s.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name treatment (circled S, lowercase "coffee"), palette and materials, the 7 jar origins, hours, every fact; photos fixed the tape-and-marker jar labels, faceted glasses on pressed-glass saucers, checker tables with racing borders |
| impeccable | Persuade mode; the brief pins the world, so it is honoured instead of a concept roll. World scan (fascia signboard, tape-labelled jars, checker table border, club sticker sheets, kopdar banners, hand-painted bengkel signs, customs-service patches): kept the first three, plus stickers only as feature chips. Committed colour strategy; ruts avoided (cream + serif coffee default, neo-brutalist sticker-bomb, neon night); banned default fonts avoided; one focal motion from the shop's own mark |
| motion-rules.md | One signature moment; section-level reveals only; transform and opacity; reduced motion = none |
| React Bits | None (TRD explains) |

impeccable's launcher, concept-seed, surface brief and DESIGN.md steps were not run: they write
outside `docs/`. This brief is the direction contract.

## 3. Palette (6 named colours)
Strategy: Committed. Mustard owns the hero and footer, black and red each own a whole mid
section, white carries the two reading sections. Scene: a student or club rider checks a phone
on the street, by day or at midnight, so the page starts in daylight yellow and ends in the black
back room.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `fascia` | #E3B23C | Hero and footer ground; primary button on dark grounds | garasi on fascia 9.2:1; cat on fascia 4.6:1 |
| `cat` | #0A5348 | Wordmark, headings and links on light grounds; awning ridges | on batu 8.0:1; never as text on garasi (2.0:1) |
| `garasi` | #171614 | Body text on light; Menu and Kunjungi grounds; primary button on light | batu on garasi 16.1:1; fascia on garasi 9.2:1 |
| `batu` | #F3F2ED | Rak biji and Kata mereka grounds; tape labels, hours card, text on dark and red | garasi on batu 16.1:1 |
| `tembok` | #C3312C | Tempat nongkrong ground only | batu on tembok 4.9:1 (all text white); fascia never as text on it (2.8:1) |
| `pinus` | #C28A4E | Shelf bars and wood in illustrations only | decorative; garasi on pinus 6.1:1 if ever needed |

Derived tones (not extra colours): the awning's light ridge is `color-mix(in oklch, var(--color-cat) 45%, var(--color-batu))`; the
bean fill is `color-mix(in oklch, var(--color-garasi) 70%, var(--color-pinus))`. Focus ring: 3 px, offset 3 px, `garasi` on
fascia and batu, `fascia` on garasi, `batu` on tembok.

## 4. Type
Display and headings: **M PLUS Rounded 1c** 800 and 900 (rounded, like the sign's lettering).
Body and labels: **Archivo**, variable with `wdth`: body at width 100; labels (hours, origins,
prices, sticker titles) at width 75, weight 700, uppercase, +0.04em. Section headings are
lowercase, like "coffee" on the sign.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 1.9rem + 7vw, 8.5rem)` (58 px at 390, 131 px at 1440) | "CUSTOMS" wordmark in the hero only |
| `--step-head` | `clamp(2rem, 1.45rem + 2.2vw, 3.5rem)` (32 / 55 px) | section headings; "coffee house" under the wordmark |
| `--step-lead` | `clamp(1.3rem, 1.15rem + 0.6vw, 1.6rem)` (21 / 26 px) | hero line, intros, h3 product names, praise themes, hours times |
| `--step-body` | `clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)` (16 / 17 px) | running text, menu board, jar names, sticker titles, prices |
| `--step-small` | `0.8rem` (12.8 px) | shelf tags (taste notes), captions, source line, label kickers |

Ratios: 1.8 / 1.54 / 1.29 / 1.26 at 390; 2.4 / 2.1 / 1.5 / 1.33 at 1440. "CUSTOMS" is
`nowrap` and sized to fit 320 px of content (about 5.3 em wide), so leading 0.9 is allowed
there only; headings 1.05, lead 1.3, body 1.55. Times and prices use tabular figures.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (from 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Prices follow the item name on the same line, 8 px after it, in condensed bold, not uppercased ("Nasi Goreng Rp 28rb"),
  never right-aligned; items are separated by " · ". Group labels sit directly above their list.
  Taste notes hang as shelf tags directly under their own jar.
- **Wide screens are designed, not stretched:** every section at 1440 is a 12-column split or
  a full shelf (see §7). Section grounds go full-bleed; content stays in `<Container>`.
- **Lists:** jar names, menu items, praise themes and sticker titles use `--step-body` to
  `--step-lead`. Nothing in a list is set at heading size.

## 6. Products on the page
Ten products appear as pictures, not just names:
- **Vietnam Drip**: owner-3.jpg (drip over condensed milk beside the Guatemala jar), 4:5, the lead product in Menu andalan.
- **Es Green Tea Latte**: owner-2.jpg pre-cropped 4:5 to glass and saucer (pop-art print and "pit stop" banner out of frame; the club logo printed on the table at most a sliver).
- **Manual brew single origin** [MOCKUP]: flat illustration, 4:5: a white V60 cone over the shop's faceted glass on a pressed-glass saucer, pine-panel wall behind, checker table edge in front.
- **The seven origins** (Lombok, Brasil, Guatemala, Gayo, Wamena, Bali, Wine): one flat SVG jar, repeated: clip-top glass jar outlined in `garasi` at 35%, bean-dark fill to 60–85% (varies per jar), white tape label across the body carrying the origin name as live text in label style. They stand on `pinus` shelf bars. No per-origin colours: the beans look alike, and the tape is the identity.

Not used: owner-4.jpg (guests' faces; owner question 14) and every `photo-*.jpg`.

## 7. Sections
**Hero (the fascia).** Recognition and the first action. FIRST VIEWPORT: mustard field; the
wordmark "CUSTOM" + ringed S at display size in `cat` on a row of its own (on desktop the empty
mustard to its right is the lane the S rolls in through), with "coffee house" in lowercase at head
size right-aligned under the ring; the hero line under it; hours card (batu, checker top edge) and the
two buttons beside them on desktop, below them on phone; a teal corrugated awning band (40 px, 28 px
on phone); then owner-1.jpg under the awning.
Crops: no motorbike or number plate (desktop 8:3 from the top of the frame; phone 4:3 around the sign); the pop-art print at the right edge and the framed portrait through the door stay background-small, so nudge the crop left if the edge print reads clearly.
```
Hero: phone (390)           Hero: desktop (1440)
+---------------------+     +------------------------------------------------------------------+
| draft banner        |     | draft banner                                                     |
|=MUSTARD=============|     |============================ MUSTARD ==============================|
| CUSTOM(S)           |     |  CUSTOM(S)  (row 1, ~690px)        <- S rolls in from the right   |
|        coffee house |     |                     coffee house  | [▚▚ BUKA HARI INI             |
| Kopi single origin, |     |  Kopi single origin, buka sampai   |     08.00–01.00 ]             |
| buka s/d jam 1 malam|     |  jam 1 malam. (lead, 7 cols)       | [Petunjuk Arah] [WhatsApp]    |
| [▚▚ BUKA HARI INI   |     |                                    |  (5 cols)                     |
|     08.00–01.00 ]   |     |=/\/\/\/\/\/\/\/\/\/\/\/ teal awning band /\/\/\/\/\/\/\/\/\/\/\/\=|
| [Petunjuk][WhatsApp]|     | [ owner-1.jpg, container width, 8:3 (~1200x450) ]               |
|=/\/\/ awning /\/\/\=|     |                                                                  |
| [owner-1.jpg 4:3]   |     +------------------------------------------------------------------+
+---------------------+
```
Desktop: row 1 is the wordmark line alone; row 2 is 7 cols ("coffee house" + hero line) and 5 cols
(hours card + buttons), so nothing sits in the S's path. Phone: Petunjuk Arah is in view at 844 px
(about 400 px down).

**Rak biji kami (the bar shelf).** Show the beans. White faux-stone ground; two shelves of four
cells on desktop (7 jars + one mustard shelf card "Pilih bijinya, kami seduh manual" [MOCKUP]),
four shelves of two on phone. Jar 180 px tall desktop, 120 px phone.
```
Rak biji: phone             Rak biji: desktop
+---------------------+     +------------------------------------------------------------------+
| rak biji kami       |     | rak biji kami (h2)               | Dari Gayo sampai Guatemala,  |
| Dari Gayo sampai... |     |                                   | semua ada di rak kami. (lead)|
|  [jar]     [jar]    |     |    [jar]          [jar]          [jar]          [jar]            |
|  LOMBOK    BRASIL   |     |    LOMBOK         BRASIL         GUATEMALA      GAYO             |
|=====pine shelf======|     |============================ pine shelf ==========================|
|  note      note     |     |    note           note           note           note             |
|  ... x4 shelves,    |     |    [jar]          [jar]          [jar]          [mustard card]   |
|  8th cell = card    |     |    WAMENA         BALI           WINE                            |
|                     |     |============================ pine shelf ==========================|
+---------------------+     |    note           note           note                            |
                            +------------------------------------------------------------------+
```

**Menu andalan (the checkerboard table).** Drinks and food. Black ground under a full-bleed
16 px checker edge. Vietnam Drip leads large; the other two sit smaller. Menu board below: two
groups side by side, each label directly above its inline list (8 px).
```
Menu: phone                 Menu: desktop
+---------------------+     +------------------------------------------------------------------+
|▚▚▚▚ checker edge ▚▚▚|     |▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚ checker edge ▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚|
| menu andalan        |     | [owner-3 4:5, 6 cols]          | menu andalan (h2)               |
| intro               |     |                                 | intro (lead)                    |
| [owner-3 4:5]       |     |                                 | [owner-2 4:5]   [brew illus 4:5]|
| Vietnam Drip  22rb  |     | Vietnam Drip  Rp 22rb (h3)      | Es Green Tea     Manual brew    |
| desc                |     | desc                            | Latte  Rp 25rb   Rp 25rb + desc |
| [owner-2][illus]    |     |------------------------------------------------------------------|
| name price name ... |     | KOPI LAINNYA (label)         | MAKANAN (label)                   |
|---------------------|     | Kopi Susu · Kopi Susu Gula   | Nasi Goreng Rp 28rb · Mie Goreng · |
| KOPI LAINNYA / list |     | Aren          (4 cols)       | Indomie Telur · Roti Bakar · ...  |
| MAKANAN / list      |     | Harga contoh. Menu lengkap ada di bar. (small)   (8 cols)       |
+---------------------+     +------------------------------------------------------------------+
```

**Tempat nongkrong (the red wall).** The hangout. Red ground, owner-5.jpg cropped to the wooden
table and the bean-mosaic Mona Lisa (the seated guest and the club banners out of frame; about
x 550–1260, y 650–1390 of the original). Six feature chips styled as die-cut stickers (batu,
garasi text, at most ±1.5° tilt), each with one line under it; the Komunitas chip is mustard [MOCKUP].
```
Nongkrong: phone            Nongkrong: desktop
+---------------------+     +------------------------------------------------------------------+
|=RED=================|     |=============================== RED ===============================|
| [owner-5 crop 4:3]  |     | [owner-5 crop 1:1, 5 cols]   | tempat nongkrong (h2)             |
| tempat nongkrong    |     |                               | lead                              |
| lead                |     |                               | (WIFI GRATIS)     (MUSIKNYA ASIK) |
| (WIFI GRATIS) line  |     |                               |  line              line           |
| (MUSIKNYA ASIK) ... |     |                               | (MEETING & KERJA) (GOWESER WELCOME)|
| ... 5 stickers      |     |                               | (BUKA S/D 01.00)  (KOMUNITAS) +WA |
| (KOMUNITAS) + WA    |     |                               |  line              line           |
+---------------------+     +------------------------------------------------------------------+
```

**Kata mereka.** Paraphrased proof. White ground, compact (section-y halved). Four themes
at lead size with a short `cat` rule above each; no quote marks, names or stars.
```
Kata mereka: phone          Kata mereka: desktop
+---------------------+     +------------------------------------------------------------------+
| kata mereka         |     | kata mereka (h2)       | — Pelayanannya     | — Kopinya kuat dan|
| — theme 1 (lead)    |     | Dirangkum dari ulasan  |   tulus dan ramah. |   enak, harganya..|
| — theme 2 / 3 / 4   |     | Google · 4,6 dari 334  | — Pilihan single   | — Enak buat       |
| source line (small) |     | ulasan (small), 4 cols |   origin banyak.   |   nongkrong...    |
+---------------------+     +------------------------------------------------------------------+
```

**Kunjungi kami (the back room).** Get there. Black ground; hours card with today highlighted,
address, Petunjuk Arah, the house rule as a small batu sign; map at 4:3.
```
Kunjungi: phone             Kunjungi: desktop
+---------------------+     +------------------------------------------------------------------+
|=BLACK===============|     |============================== BLACK ==============================|
| kunjungi kami       |     | kunjungi kami (h2)                 | [ map iframe 4:3, 7 cols ]  |
| [▚▚ hours card]     |     | [▚▚ hours: Senin–Sabtu / Minggu]   |                             |
| address             |     | address (body)                     |                             |
| [Petunjuk Arah]     |     | [Petunjuk Arah]                    |                             |
| [map 4:3]           |     | [house rule sign]   5 cols         |                             |
| [house rule sign]   |     +------------------------------------------------------------------+
+---------------------+
```

**Hubungi kami (footer, the fascia again).** Close with actions. Awning band, then mustard.
```
Hubungi: phone              Hubungi: desktop
+---------------------+     +------------------------------------------------------------------+
|=/\/\/ awning /\/\/\=|     |=/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ awning band /\/\/\/\/\/\/\/\/\/\/\/=|
|=MUSTARD=============|     | hubungi kami (h2)          | [WhatsApp] [Telepon] [Petunjuk Arah]|
| hubungi kami        |     | Mampir dulu, pilih bijinya, ngobrol sampai larut. (body)        |
| line                |     |------------------------------------------------------------------|
| [WhatsApp][Telepon] |     | CUSTOM(S) coffee house (lead)   address · hours one-liner (small)|
| [Petunjuk Arah]     |     +------------------------------------------------------------------+
| wordmark, address   |
+---------------------+
```

## 8. Motion
**Signature: the S wheel.** In the hero, the ringed S (ring and letter, one element) starts
`π × ring diameter` to the right of its slot, rotated +360°, opacity 0, and rolls left into place:
x and rotation together, so it reads as a wheel rolling, not spinning. 1.0 s, `power3.out`,
opacity in over the first 0.3 s, starting at hydration. Nothing else in the hero moves, and the
other letters, line, hours and buttons are visible from the first paint. The hero clips horizontal
overflow so the start position never causes sideways scroll. Reduced motion: S in place, no motion.

**Supporting:** one section-level fade-up (20 px, 0.6 s, `power2.out`, once at top 85%) for the
Rak biji shelves, the Menu block, the Tempat nongkrong block and the Kunjungi block. Kata mereka
and the footer are static. Buttons: a tint layer (`::after`) fades in on hover and focus via
opacity, 180 ms ease-out; 1 px press-down (`translateY`) on active; plain CSS.

Motion tokens for `lib/motion.ts`: `press 0.15`, `ui 0.18`, `reveal 0.6`, `hero 1.0`;
add `ease.roll = "power3.out"`; `distance.reveal = 20`. Lenis: starter defaults.

## 9. What makes it this shop
- The shop's own mark does the one moving thing: the circled S from the fascia rolls in as a wheel, a nod to the garage-and-club crowd without a single racing cliché.
- The bean shelf: seven clip-top jars with white tape labels, exactly the origins on the bar, on pine shelves, with taste notes as shelf tags.
- The grounds are its real surfaces in walking order: mustard fascia with teal corrugated awning, white faux-stone bar, checker table edge, red feature wall, black back room, out through the fascia again.

## 10. Avoid
- The coffee-shop default: cream ground, brown accents, serif display, latte-art hero.
- Sticker-bomb and neo-brutalism: no offset shadows, no black boxes, no rotated chaos; stickers only for the six feature chips.
- Full checkerboard backgrounds; checker only on the hours card edge and the menu edge.
- Racing clichés: speed lines, tyre marks, flames, italic "turbo" type, chequered-flag icons.
- Neon night mode or glowing edges on the black sections.
- Third-party club or bank logos and the pop-art portraits, drawn or in crops (keep them out or at sliver size).
- Origin names as generic pill tags; they are tape on jars.
- A live "open now" badge that can be wrong after midnight; show today's hours only.
- Three equal product cards with chrome; Vietnam Drip leads, and there are no card borders or shadows.
- Teal text on black (2.0:1) and mustard text on red (2.8:1).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest gap 1.26× at 390; lists at body or lead size)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices inline, tags under jars, hours card next to the buttons)
- [x] Every section has a desktop wireframe that uses the width on purpose (12-col splits or a full shelf; no half-empty rows)
- [x] At least 3 products shown (3 drinks + 7 bean jars)
- [x] Within motion-rules.md (one signature, four section reveals, transform and opacity only, button tint by opacity, reduced = none)
- [x] Brief is decisions, not essays (2–4 pages)
