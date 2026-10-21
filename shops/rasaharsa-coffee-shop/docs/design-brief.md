# Design brief: Rasaharsa

Record decisions, not essays. All copy in Bahasa Indonesia, exact strings in `prd.md`.

## 1. Concept
The page is built from Rasaharsa's own surfaces: the charcoal slat feature wall with the white
RASAHARSA lettering and fern strip, the pine-framed black menu boards, warm teak and the black
steel window. The owner sees their room, not a café template painted in coffee colours.
Signature moment, "Lampu menyala": on load the three black cage pendants settle beside the
wordmark and their filament bulbs switch on one after another. If Rasaharsa is closed at that
moment, the bulbs stay dim and the status says when it opens.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Name and sign wording, hours (drive the open/closed status), drink names as written, praise themes, 4.7 / 356, the `[MOCKUP]` list |
| photos | Palette and objects: slat wall, fern wall, cage pendants, pine-framed boards, black cups, orange-stained wood, steel frames, brewing shelf. owner-2 = the one photo used (cropped). owner-1 skipped: barbershop-era shopfront may not be current |
| impeccable | Persuade mode (offer and a working action in the first viewport). Committed colour (charcoal owns whole regions). "The world carries the page, never a picture of it". Refuses the split hero and the cream/serif/terracotta café default. Faces outside its default list. One authored focal motion. Its seven-candidate step was done by hand: feature wall, menu boards, brewing shelf, steel window, floor plan, thermal receipt, exhibition placard. Kept wall + boards + window. Floor plan would invent the house layout, the receipt is a category cliché, and the exhibition is incidental. concept-seed and the decision page were not run, because they write outside `docs/` |
| motion-rules.md | Transform/opacity only, which overrides impeccable's mask and clip reveals. One signature, in the hero |

## 3. Palette (6 named colours)
Strategy: Committed. `dinding` covers about 40% of the page and `kapur` about 40%. `jati` owns one full band. `pakis` and `pinus` stay small and always sit on the house's own objects. There is no extra grey: on dark grounds, hierarchy comes from size and weight, not dimmed text. Illustrations use these six colours and `color-mix` tints of them only.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `dinding` | #383C42 | Slat wall: hero, Kata mereka, closing band | `kapur` on it 9.6:1 ✓ |
| `baja` | #1B1C1E | Steel and black cups: text on light, board faces, window frame, banner | on `kapur` 14.8:1 ✓ |
| `kapur` | #EEEFEA | Off-white walls: light sections, all text on dark | n/a |
| `jati` | #8E4320 | Teak / orange-stained wood: food band, drinks shelf | `kapur` on it 6.1:1 ✓ |
| `pakis` | #A9CF84 | Fern: fern band, open-status dot and text, event pane, focus ring on dark | on `dinding` 6.3:1 ✓; `baja` on it 9.7:1 ✓; never as text on `kapur` |
| `pinus` | #C9A36A | Pine: board frames, bulb glow, milk and yolk in illustrations | Decorative only (`baja` on it 7.3:1 if ever needed) |

## 4. Type
**M PLUS Rounded 1c** (800 display and headings; 700 for h3, board titles, product names). Its upright rounded caps match the sign without the bubbly look of rounder faces. **Figtree** (variable; 300 for the tagline only, 400 body, 500/600 labels) is the "clean light sans". There is no chalk script, because it would be a third family.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 2rem + 4.8vw, 6.5rem)` (≈51px / 6.3rem) | "RASAHARSA" in the hero only; caps, line-height 1, one line guaranteed |
| `--step-head` | `clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)` (28 / 44px) | Section headings, line-height 1.1 |
| `--step-lead` | `clamp(1.25rem, 1.05rem + 0.8vw, 1.5rem)` (20 / 24px) | Leads, review themes, board titles, product names, pane labels, "coffee & eatery" (Figtree 300, lowercase, tracking 0.32em). Line-height 1.3 |
| `--step-body` | `clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)` (16 / 17px) | Running text, board items, hours rows (tabular numbers); line-height 1.55 |
| `--step-small` | `clamp(0.8rem, 0.7rem + 0.15vw, 0.85rem)` (12.8 / 13.4px) | Captions, "Panas · Es", prices on the shelf, banner, footer |

Ratios hold at 360–1440 (tightest: lead/body 1.25 at 390). "RASAHARSA" must fit one line at
360px. If it doesn't, lower the display minimum; never wrap it and never shrink it with `vw` alone.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; desktop grid 12 columns, 24px gap |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.6rem + 2.6vw, 2.5rem)`: 20px / 40px |
| Section padding phone / desktop (`--section-y`) | `clamp(3.5rem, 2.2rem + 5vw, 7rem)`: 56px / ≈107px |

- Heading to content: 32px phone, 48px desktop. More space above a heading than below it.
- Corners: buttons 8px, photo 6px, boards and window square (they're frames).
- Slats: 46px phone / 72px desktop, 2px seam in `baja` at 45%, static CSS.
- **Proximity:** prices sit inline right after the name on boards (0.5em gap), never right-aligned. On the shelf they sit 4px under the name. Section sublines go 12px under their heading. Captions go 12px under the photo. "Hari ini" sits inline in today's row. The status sits 12px above the buttons.
- **Wide screens:** every section below uses a split or a grid at 1440. No centred column floats in empty width.
- **Lists:** board items `--step-body`, product names `--step-lead`. Nothing in a list reaches `--step-head`.

## 6. Products on the page
Six products shown. All illustrations share one style: flat fills, a 2px `baja` edge only on
glass, no gradients, one flat `baja` 15% ellipse shadow, the same ¾-front view on a shared
baseline, 168px tall on desktop and 120px on phone. Each is an inline SVG with `role="img"` and an
Indonesian `aria-label`.
1. **Latte (owner-2.jpg).** Crop box left 300, top 1253, right 1400, bottom 2133 (1100×880). It shows the cup, saucer, orange table and slats only: no board, no "Discount 50%". Shown 5:4 on desktop and 1:1 on phone, `object-position: 48% 50%` (cup and saucer centred).
2. **Kopi Rasaharsa.** Clear cup, iced: milk coffee in `pinus`/`jati`, `kapur` ice, a round `dinding` sticker with the two-bean mark.
3. **Kopi Susu Gula Aren.** Tall glass with `jati` aren at the bottom, `kapur` milk, `baja` espresso on top, and ice.
4. **Vietnam Drip.** A `dinding` steel phin on a short glass, with a `kapur` condensed-milk layer under `baja` coffee.
5. **Affogato.** Small glass with a `kapur` scoop and a `jati` espresso run.
6. **Nasi Goreng Rasaharsa** [MOCKUP, `data-mockup`]. Top-down `kapur` plate on the `jati` band: `pinus`-tint rice, an egg with a `pinus` yolk, `pakis` cucumber, `kapur` krupuk.

Drinks 2–5 stand on one `jati` shelf line (8px), like the bar shelf. The name sits 12px under the shelf, with availability and price 4px under the name and the note under that.

## 7. Sections
**Hero.** Recognition, status and directions. The wall holds a real h1, status and buttons (focusable, selectable). Pendants and ferns are `aria-hidden`. Height is set by content, with min-height `min(100svh, 820px)` on desktop.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +------------------------------------------------+
|Ini draf tampilan |     | Ini draf tampilan untuk Rasaharsa  (baja bar)  |
+------------------+     +------------------------------------------------+
|  |  |  | ¦ | ¦ | |     | | ¦  | ¦  | ¦  |    |    |    |    |    |    | |
|  |  |  | o | ¦ | |     | | ¦  | o  | ¦  |   slat wall, full bleed  |   ||
|  |  |  |   | o | |     | | o  |    | o  |    |    |    |    |    |    | |
|(oo) = bean mark  |     |            (oo) RASAHARSA     <- c3-c10        |
|RASAHARSA         |     |                 coffee & eatery                |
|coffee & eatery   |     |     ~~~~~~~~~~ fern band c2-c10 ~~~~~~~~~~     |
|~~~~~ fern ~~~~~  |     |                                                |
|Kopi yang dicer-  |     | Kopi yang diceritakan,   ● Sedang buka         |
|itakan, makanan   |     | makanan yang bikin       Hari ini 08.00–22.30  |
|yang bikin betah. |     | betah.   (lead, c1-c6)   [Petunjuk Arah] [WA]  |
|● Sedang buka     |     |                          Jl. Sunan Sedayu 15   |
|Hari ini 08–22.30 |     |                          (c8-c12)              |
|[Petunjuk Arah  ] |     +------------------------------------------------+
|[WhatsApp       ] |
|Jl. Sunan Sedayu  |
+------------------+
```
On phone the pendants hang in the top-right 40%, clear of the bean mark. On desktop they hang over c1–c2 at three cord lengths, left of the wordmark, as in the room.

**Kopi kami** (`kapur`). The house coffees, and that the barista explains them.
```
Kopi kami: phone         Kopi kami: desktop
+------------------+     +------------------------------------------------+
|Kopi kami         |     |Kopi kami  (c1-c5)    +------------------------+|
|Duduk dulu, kopi- |     |Duduk dulu, kopinya   |                        ||
|nya biar kami ... |     |biar kami yang jelas- |  latte photo 5:4       ||
|Barista kami ...  |     |kan.  (lead)          |  owner-2 crop, c6-c12  ||
|+----------------+|     |Barista ... Rak bar.. |                        ||
||  latte 1:1     ||     |[Seduh manual hari ini]------------------------+|
|+----------------+|     |                      Latte art di cangkir ...  |
|caption           |     |  [ill]       [ill]       [ill]       [ill]     |
| [ill]    [ill]   |     |============= jati shelf, c1-c12 ===============|
|=====shelf======= |     |Kopi        Kopi Susu   Vietnam     Affogato    |
|Kopi R.  KSGA     |     |Rasaharsa   Gula Aren   Drip                    |
|Es·28rb  Panas·Es |     |Es · 28rb   Panas·Es    Panas                   |
|note     note     |     |            25rb                                |
| [ill]    [ill]   |     |note        note        note        note        |
|=====shelf======= |     +------------------------------------------------+
|V.Drip  Affogato  |
|Panas    note     |
|[Seduh manual]    |
+------------------+
```

**Menu andalan** (`kapur`). The drinks list as the bar's boards, with `baja` faces, 10px `pinus` frames and `kapur` text.
```
Menu andalan: phone      Menu andalan: desktop
+------------------+     +------------------------------------------------+
|Menu andalan      |     |Menu andalan                                    |
|Dari papan menu.. |     |Dari papan menu di atas bar kami.               |
|+================+|     |+==============+ +==============+ +============+|
||Kopi            ||     ||Kopi          | |Mocktail      | |Over Classic||
||Kopi Rasaharsa  ||     ||Kopi Rasaharsa| |Apple Virgin  | |Ice         ||
|| Es · 28rb      ||     || Es · 28rb    | | Mojito 34rb  | |Iced Virgin ||
||... 13 lines    ||     ||... 13 lines  | |... 6 lines   | | Taro ...   ||
|+================+|     ||              | |Tea/Teh       | |Frozty      ||
|+= Mocktail,Teh =+|     ||              | |... 6 lines   | |blended ... ||
|+= OCI, Frozty  =+|     |+==============+ +==============+ +============+|
+------------------+     |   (c1-c4)          (c5-c8)         (c9-c12)    |
                         +------------------------------------------------+
```

**Bukan cuma kopi** (`jati` band, `kapur` text). The eatery side.
```
Food: phone              Food: desktop  (jati band)
+------------------+     +------------------------------------------------+
|Bukan cuma kopi   |     | +----------------+  Bukan cuma kopi            |
|Namanya juga ...  |     | |  plate, top-   |  Namanya juga coffee & ...  |
|    ( plate )     |     | |  down, c1-c5   |  Makan          Camilan     |
|caption (ilus.)   |     | +----------------+  Nasi Goreng R. Kentang G.  |
|Makan             |     | caption (ilustrasi) 35rb           Pisang G.   |
| Nasi Goreng 35rb |     |                     Mie Goreng     Roti Bakar  |
| Mie G. · Chicken |     |                     Chicken Rice Bowl          |
|Camilan  ...      |     |                     (c6-c12, two lists)        |
+------------------+     +------------------------------------------------+
```

**Tempatnya** (`kapur`). The room, seen as a black steel window: `baja` frame, 10px mullions, `kapur` panes, and one `pakis` pane.
```
Tempatnya: phone         Tempatnya: desktop
+------------------+     +------------------------------------------------+
|Tempatnya         |     |Tempatnya    ################################## |
|Sebuah rumah ...  |     |Sebuah rumah # Untuk kerja    # Di luar        #|
|################  |     |yang dijadi- # Suasananya ...# Ada tempat ... # |
|# Untuk kerja  #  |     |kan kedai... ################################## |
|################  |     |(c1-c4)      # Bareng kelrg. # Untuk acara    # |
|# Di luar      #  |     |             # Pas untuk ... # (pakis pane)   # |
|################  |     |             #               # [Pesan ruangan]# |
|# Bareng kelrg.#  |     |             ################################## |
|# Acara (pakis)#  |     |                  window c5-c12                 |
|# [Pesan, WA]  #  |     +------------------------------------------------+
|################  |
+------------------+
```

**Kata mereka** (`dinding`). Paraphrased themes: no quote marks, names or stars.
```
Kata mereka: phone       Kata mereka: desktop
+------------------+     +------------------------------------------------+
|Kata mereka       |     |Kata mereka     ● Baristanya     ● Pelayanannya |
|Dirangkum dari    |     |Dirangkum dari    menjelaskan      cepat, pela- |
|ulasan · 4,7/356  |     |ulasan Google ·   karakter kopi    yannya ramah.|
|● Baristanya ...  |     |4,7 dari 356    ● Suasananya     ● Makanannya   |
|● Pelayanannya..  |     |(c1-c4)           seperti rumah    enak, sampai |
|● Suasananya ...  |     |                  (lead, 2x2 grid c5-c12)       |
|● Makanannya ...  |     +------------------------------------------------+
+------------------+
```
The ● markers are small `pakis` two-bean glyphs.

**Kunjungi kami** (`kapur`). Address, hours and the map. The map has a `dinding` fallback block with the address under the iframe.
```
Kunjungi: phone          Kunjungi: desktop
+------------------+     +------------------------------------------------+
|Kunjungi kami     |     |+--------------------------+ Kunjungi kami      |
|Jl. Sunan Sedayu  |     ||                          | Jl. Sunan Sedayu.. |
|No.15, Jati, ...  |     ||   map 4:3   (c1-c7)      | Di sisi Rawamangun |
|Senin–Kamis  ...  |     ||                          | Senin–Kamis   ...  |
|Jumat–Sabtu  ...  |     ||                          | Jumat–Sabtu   ...  |
|Minggu .. Hari ini|     ||                          | Minggu ... Hari ini|
|[Petunjuk Arah  ] |     |+--------------------------+ [Petunjuk Arah]    |
|+--map 4:3------+ |     |                             (c8-c12)           |
+------------------+     +------------------------------------------------+
```

**Hubungi kami + footer** (`dinding`). Closes the page on the wall again.
```
Hubungi: phone           Hubungi: desktop
+------------------+     +------------------------------------------------+
|(oo) Rasaharsa    |     |(oo) Hubungi kami               [WhatsApp      ]|
|Hubungi kami      |     |Mau tanya menu, pesan ruang-    [Telepon 0811..]|
|Mau tanya menu... |     |an, atau ...   (c1-c7)          [Petunjuk Arah ]|
|[WhatsApp       ] |     |                                (c9-c12, stack) |
|[Telepon 0811.. ] |     |------------------------------------------------|
|[Petunjuk Arah  ] |     |Rasaharsa · coffee & eatery · alamat · Draf ... |
|footer · draf     |     +------------------------------------------------+
+------------------+
```

## 8. Motion
**Signature, "Lampu menyala"** (hero, on load, about 1.5s in total; nothing waits for it):
- From t=0, the wordmark, line, status and buttons are already painted and never animate.
- 0–0.7s: the three pendants (cord and cage) settle: y −14px→0, rotate 2.5°→0 around the cord top, opacity 0→1. Stagger 0.09s, ease `cubic-bezier(0.16,1,0.3,1)`.
- 0.45–1.2s: the bulbs switch on one by one, glow and filament opacity 0→1, 0.45s each, stagger 0.14s.
- 0.7–1.5s: a warm `pinus` wash behind the wordmark (max opacity 0.16) fades in over 0.8s. This is the first cut candidate at step 10.
- If the shop is closed now (Asia/Jakarta time), the pendants still settle but the bulbs stay dim (filament at 0.35, no glow) and the wash stays off.
- Reduced motion: final state, with the bulbs per status. JS off: final state, with the bulbs lit.

**Supporting motion.** The six content sections each fade up once (20px, 0.6s, ease-out). Buttons get a CSS hover overlay (`::after`, opacity 0→1) and a 1px press in 180ms: transform and opacity only, no colour transitions. There are no loops, sway, slat parallax or drink hovers.
**Tokens for `lib/motion.ts`:** `ease.out` = `cubic-bezier(0.16,1,0.3,1)` (GSAP `power3.out`), `reveal` 0.6s / 20px, `lampu` { settle 0.7, settleStagger 0.09, bulb 0.45, bulbStagger 0.14, wash 0.8 }.

## 9. What makes it this shop
1. The hero is their feature wall, not a photo of it: charcoal slats, white rounded RASAHARSA with the two-bean mark and "coffee & eatery", cage pendants on the left and ferns below, as in the room.
2. The drinks list is their bar's pine-framed black boards, spelled as the shop spells them (Cappucino, Over Classic Ice, Frozty, Hot Tea/Teh Panas).
3. The lights say whether they're open: lit during opening hours, dim when closed. Next to them sit the black cups and the siphon/moka/French press/copper-pot shelf line.

## 10. Avoid
- The category default: cream ground, serif display, terracotta accent, latte-brown gradients, scattered beans, steam squiggles, stock photos, coffee icon tiles.
- A split hero (copy left, latte right), or a centred headline over equal cards.
- Painting the wall as a picture. Its text and buttons are real page parts, and the next section starts as a section.
- The old shop: owner-1 (barbershop sign, awning), owner-2's chalkboard and "Discount 50%" sign, and scalloped-awning dividers.
- A third family or chalk script, over-rounded bubbly type, and tracked mono labels.
- `jati` sprinkled as an accent. It owns the food band and the shelf, nothing else.
- Swaying or looping pendants, neon glow, and a wash that reads as a gradient blob.
- Prices on every board line, value as a headline, and review quotes, names or stars.
- Illustrations that don't match each other, and illustrated people.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Board titles and product names are at lead, under head.
- [x] Max content width set; no detail pinned far from what it describes. Prices are inline, the caption is 12px away, the status is above the buttons.
- [x] Every section has a desktop wireframe that uses the width on purpose (splits c1–c5/c6–c12, three boards, the 2×2 window, the 2×2 themes, map + info).
- [x] At least 3 products shown (food and product shops). Six: the latte photo, four illustrated drinks and the [MOCKUP] nasi goreng.
- [x] Within motion-rules.md: one signature, transform/opacity only, section-level reveals, reduced motion = none, no React Bits.
- [x] Brief is decisions, not essays (2–4 pages)
