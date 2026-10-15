# Design brief: Happy Kopi

## 1. Concept
The page is Happy Kopi's own room: cream wall, sage and olive banquettes, arched doorways and
round cutouts, with the cup's "HAPPY KOPI · keep smile and be happy" stamp as the name. It fits
because those exact shapes, colours and words are what regulars see every weekday.
Signature moment: on load a mustard half-sun rises behind the hero's arched doorway, but only
on days the shop is open. On Sunday it stays low and the hours chip says "Hari ini tutup".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned world (cream, sage, olive, pale wood, terracotta and mustard circles, arches), cup stamp and slogan, board menu and prices, Indonesian copy; owner-2/3/4/5/6/7 go on the page; photo-1/2/3 are reference only (counter discs, matcha glass on a bamboo coaster, menu board layout). |
| impeccable | Persuade mode. The brief pins the world, so it is followed, not rerolled. Seven candidates weighed: room, cup stamp, menu board, tray of four, ruko sign, GrabFood screen, the 08–21 day. The room carries the page, raised by the cup stamp (the wordmark) and the board's price discs (chips set beside names). Committed colour (sage and olive own about half the page). Rounded gothic instead of the cream + serif default. One authored focal motion. The CLI was not run because it writes outside `docs/`. |

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `krem` | #F7F0E3 | page ground (the wall); text on dark grounds | kopi on krem 12.0:1 ✓ |
| `kopi` | #3B2A1F | all text on light grounds, stamp box line, focus ring on light | (see pairs) |
| `sage` | #9CA68F | ground of Minuman + Nyaman (the wall in owner-3) | kopi on sage 5.4:1 ✓ |
| `zaitun` | #4E5B3A | banquette band, Kata mereka + Hubungi grounds, primary button fill | krem on zaitun 6.4:1 ✓ |
| `terakota` | #9A5238 | price chips (krem text), plate rims in art, link underlines | krem on terakota 5.1:1 ✓; terakota on krem 5.1:1 ✓ |
| `mustard` | #E3B24F | the sun, review "smile" marks, open dot: shapes only | never text on krem (1.7:1); marks on zaitun 3.7:1 ✓; kopi on mustard 7.0:1 |

Art-only colours (illustrations, not UI tokens): plate `#CFDDB0` with terakota rim, bamboo
`#D6B47E`, kopi susu `#B98A5E`, butterscotch `#D9A04A`, matcha `#9DB563`, milk foam `#F3EBDD`.
Focus ring: 2px `kopi` outline, 2px offset on light grounds; 2px `krem` on zaitun.

## 4. Type
Families: **M PLUS Rounded 1c** (300, 400, 700; `latin`) for everything. It's a maru gothic,
the rounded type of Japanese-style cafe signs, it suits a board that sells karage and katsu
kare, and its 300 uppercase is the closest match to the cup's thin stamp. **Mali** (400 italic;
`latin`) is used only for the slogan, as the cup's casual hand. Both load with `next/font`,
`display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.5rem, 1.2rem + 4.2vw, 5rem)` (40px @390, ~52 @768, 80 @1440). 300, uppercase, tracking 0.04em, lh 1, `nowrap` | hero name only |
| `--step-head` | `clamp(1.875rem, 1.2rem + 2.2vw, 2.75rem)` (30 / 36 / 44). 700, lh 1.1 | section headings |
| `--step-lead` | `clamp(1.375rem, 1.1rem + 1vw, 1.625rem)` (22 / 25 / 26). 700 for names, 400 for paraphrases, lh 1.3 | drink names, menu group titles, review paraphrases, slogan (Mali), phone number |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17 / 18 / 19). 400, lh 1.6; menu item names 700 | running text, list items, hours chip, buttons |
| `--step-small` | `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)` (13 / 13.4 / 14). 400 or 700, lh 1.4 | price chips, dish descriptions, captions, notes |

Ratios: @390 1.33 / 1.36 / 1.29 / 1.30; @768 1.43 / 1.43 / 1.41 / 1.34; @1440 1.82 / 1.69 /
1.37 / 1.36. All ≥ 1.25 ✓. The wordmark is one line by construction: about 7.2em wide plus 48px
box padding fits 350px @390, 523px @1024 and 663px @1440. The builder confirms in screenshots and
lowers the vw slope if it ever touches the edge; it never wraps.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.6rem + 2.6vw, 2.5rem)` → 20px / 40px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.9rem + 4.5vw, 7rem)` → 64px / ~112px |

- 12-column grid from `lg` (1024); column gap 20px phone / 40px desktop. Below `lg` everything stacks.
- Banquette band: full-bleed `zaitun`, height `clamp(3rem, 1.5rem + 5vw, 6rem)` (48 / 96px).
- **Frames from the room:** *arch* (semicircle top, 16px bottom corners) only for ways in:
  owner-3 (hero) and owner-6 (shopfront). *Window* (radius `clamp(1.5rem, 4vw, 3rem)`) for
  looking in: owner-4, owner-2, owner-5 and the map. *Circle* for cups and plates. *Half-disc*:
  flat side down for the sun, flat side up (a "smile") for review marks and room bullets.
- **Proximity:** price chips sit inline 8–12px after the item name; captions 8–12px under
  their photo; the hours chip directly under the intro line; the "harga dapat berubah" note
  directly under the Makan intro.
- **Wide screens:** every section is a deliberate split (7/5, 4/8, 5/7, 5/3/4, 6/6) as in §7.
- **Lists:** drink names at `--step-lead`, menu items at `--step-body`, never larger.

## 6. Products on the page
Seven products shown, not just named:
1. **Iced kopi susu in Happy Kopi cups**: owner-4 (tray of four) in a window frame, plus owner-3 in the hero arch.
2. **Latte panas with latte art**: owner-7, circle crop (it's already shot from above).
3. **Toast with crumbly spread + iced latte**: owner-2 in a window frame, leading the food section.
4. **Kopi susu gula aren** [MOCKUP], 5. **Butterscotch**, 6. **Matcha latte**: flat top-down
   "coaster" illustrations, 72px circles: bamboo ring, drink disc in its colour, two or three
   ice squares or a foam swirl. The style matches owner-7 so the photo and the drawings sit together.
7. **Food groups**: four flat top-down dishes on the shop's pale-green plate with terakota rim
   (from owner-2), 88px. Nasi = Happy Chicken Rice (rice dome, sliced chicken, cucumber and
   tomato); Platter = Happy Mini Platter (fries + four sausages); Cemilan = Bana-Nagih
   (pisang goreng, chocolate drizzle, grated cheese); Gorengan = bakwan + tempe on a paper liner.
   Flat shapes, 3–5 colours each, no outlines, no gradients. Items with an illustration carry
   `data-mockup` on the art (placeholder until the owner sends photos).

## 7. Sections
**Hero.** Recognition, today's status, directions. Wordmark box (1.5px kopi line, krem fill)
holding HAPPY KOPI + slogan; intro line; hours chip (mustard dot + text); Petunjuk Arah
(zaitun fill) + Telepon (kopi outline). Arch photo owner-3 stands on the band. The sun
(about 1.5× the arch width: 630px behind a 420×580 arch on desktop, 360px behind a 280×320 arch
on phone) sits centred behind the arch inside an overflow-hidden horizon box whose bottom is
the band's top, so it shows as warm lobes on both sides of the doorway. Arch width is
`min(100%, 420px)` at aspect 420/580 and the sun follows it at 1.5×. The hero clips
horizontally (`overflow-x: clip`). Text always stays in front of the sun, and the sun never
sits behind the buttons.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------+              +------------------------------------------------------+
|DRAF banner       |              |DRAF banner                                           |
|+----------------+|              |                                       .--------.     |
|| HAPPY KOPI     ||              |  +------------------------------+    /          \    |
|| keep smile...  ||              |  | HAPPY KOPI                   |   |  owner-3   |   |
|+----------------+|              |  | keep smile and be happy      |   |  arch      |   |
|Tempat ngopi dan  |              |  +------------------------------+   |  420x580   |   |
|makan yang nyaman |              |  Tempat ngopi dan makan yang ...  .-|            |-. |
|(•) Buka hari ini |              |  (•) Buka hari ini 08.00–21.00   (sun            sun)|
|[Petunjuk][Telpon]|              |  [Petunjuk Arah] [Telepon]       ( |            | ) |
|    .------.      |              |  text: 7 cols, centred on wall      arch: 5 cols     |
| .-/owner-3\-.    |              |=================== zaitun banquette band ============|
|(  | arch    |  ) |              +------------------------------------------------------+
|=====band=========|              Phone fold (844): buttons end ~y380, arch 280x320 below,
+------------------+              band ~y700; the sun rise is visible without scrolling.
```

**Minuman favorit** (sage ground). The drinks people praise, with photo proof.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Minuman favorit   |              | +--------------------------------+  Minuman favorit  |
|intro line        |              | |                                |  intro line       |
|+----------------+|              | |  owner-4 tray, window 4:3      |  (o) Kopi susu    |
||owner-4 window  ||              | |  7 cols, photo left            |  gula aren [20rb] |
|+----------------+|              | |                                |  one-line desc    |
|caption           |              | +--------------------------------+  (o) Butterscotch |
|(o) Kopi susu gula|              | caption                             [25rb] desc      |
|    aren [Rp20rb] |              |                                     (o) Matcha [25rb]|
|(o) Butterscotch  |              |                                     (◎) Latte panas  |
|(o) Matcha latte  |              |                                     list: 5 cols     |
|(◎) Latte panas   |              +------------------------------------------------------+
```
Row: 72px coaster (64 phone) | name `lead` + chip inline | description `body`. Phone order:
heading, intro, photo, list. Desktop: photo visually left (CSS order), heading first in the DOM.

**Makan sekalian** (krem). The board's food, grouped, with prices.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Makan sekalian    |              | Makan sekalian    | (plate) Nasi      | (plate)      |
|intro             |              | intro             | Happy Chicken     |  Platter     |
|Harga dari papan  |              | Harga dari papan  |  Rice [Rp 35rb]   | Happy Mini   |
|menu, dapat ...   |              | menu, dapat ...   | nasi Hainan, ...  |  Platter[30] |
|+----------------+|              | +---------------+ | Karage ... [48rb] | Happy Platter|
||owner-2 window  ||              | | owner-2       | | Katsu ...  [55rb] |  A,B,C[38–50]|
|+----------------+|              | | window 1:1    | |-------------------+--------------|
|(plate) Nasi      |              | +---------------+ | (plate) Cemilan   | (plate)      |
| items + chips    |              | caption           | Bana-Nagih [20rb] |  Gorengan    |
|(plate) Platter   |              | 4 cols            | ... Toast [25rb]  | ketan, ...   |
|(plate) Cemilan   |              |                   | wings ... [15–25] |  [Rp 4–8rb]  |
|(plate) Gorengan  |              |                   |   board: 8 cols as 2x2       |
+------------------+              +------------------------------------------------------+
```
Group head: 88px plate + title `lead`, gap 16. Items: name `body` 700 + chip; description
`small` underneath. Groups are separated by a 1px `kopi`/15% rule, not cards.

**Nyaman buat kerja dan ngobrol** (sage). The room as the reason to stay.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Nyaman buat kerja |              | Nyaman buat kerja    | +----------------------------+ |
|dan ngobrol       |              | dan ngobrol          | |                            | |
|line about room   |              | line about the room  | |  owner-5 room, window 4:3  | |
|◡ Ruangan adem    |              | ◡ Ruangan adem       | |  7 cols                    | |
|◡ Pelayanan ramah |              | ◡ Pelayanan ramah    | |                            | |
|◡ Cocok buat kerja|              | ◡ Cocok buat kerja   | +----------------------------+ |
|◡ Wi-Fi & colokan*|              | ◡ Wi-Fi & colokan*   | caption                        |
|+----------------+|              |  5 cols              |                                |
||owner-5 window  ||              +------------------------------------------------------+
```

**Kata mereka** (zaitun, krem text). Paraphrased proof. No quote marks and no names.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Kata mereka       |              | Kata mereka        | ◡ Tempatnya nyaman | ◡ Salah  |
|4,9 dari 28 ulasan|              | 4,9 dari 28 ulasan |   dan adem, ...    |   satu...|
|◡ Tempatnya ...   |              | Google             |--------------------+----------|
|◡ Salah satu ...  |              | Diringkas dari     | ◡ Enak buat kerja  | ◡ Enak   |
|◡ Enak buat kerja |              | ulasan Google.     |   dari kafe.       |   buat...|
|◡ Enak buat makan |              |  4 cols            |   2x2 grid, 8 cols            |
+------------------+              +------------------------------------------------------+
```
Smile mark: 20×10px mustard half-disc, flat side up, 12px left of the paraphrase's first line.
The rating line "4,9 dari 28 ulasan Google" is `lead` 700, below the heading and never larger than it.

**Kunjungi kami** (krem). Find the door.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Kunjungi kami     |              | Kunjungi kami          |  .-------.  | +-----------+ |
|address           |              | address (body)         | / owner-6 \ | |   map     | |
|Cari papan 'KANTIN|              | Cari papan 'KANTIN     | | arch    | | |  window   | |
|SARI RASA | HAPPY |              | SARI RASA | HAPPY KOPI'| | 3:4     | | |  iframe   | |
|KOPI' di No. 37   |              | Senin–Sabtu 08.00–21.00| |         | | |           | |
|Senin–Sabtu ... ◀ |              | Minggu tutup  (today ◀)| +---------+ | +-----------+ |
|Minggu tutup      |              | [Buka di Google Maps]  |   3 cols    |   4 cols      |
|  .------.        |              |  5 cols                |             |               |
| / owner-6\ arch  |              +------------------------------------------------------+
| map window 4:3   |
+------------------+
```
Today's row is bold with the mustard dot beside it (client-side, Asia/Jakarta).

**Hubungi kami + footer** (zaitun). Contact, order, close.
```
phone                             desktop
+------------------+              +------------------------------------------------------+
|Hubungi kami      |              | Hubungi kami                 | [Telepon] [WhatsApp*] |
|Mau tanya menu ...|              | Mau tanya menu atau pesan... | [Petunjuk Arah]       |
|0813-9972-8000    |              | 0813-9972-8000 (lead)        | [Pesan di GrabFood*]  |
|[Telepon]         |              | keep smile and be happy      |  2x2 buttons, 6 cols  |
|[WhatsApp*]       |              |  6 cols                      |          .-----.      |
|[Petunjuk Arah]   |              |-----------------------------------------/ sun  \-----|
|[GrabFood*]       |              | Happy Kopi · Ruko Cleon Park No. 37 · Senin–Sabtu ...|
|keep smile ...    |              | Situs draf untuk ditinjau pemilik.                   |
|footer, small     |              +------------------------------------------------------+
```
The sun here is static, sitting on the footer rule (280px desktop / 160px phone), the day
closing. It's the first thing to cut in the remove-one-thing pass if the page feels busy.
`*` = [MOCKUP], rendered with `data-mockup`.

## 8. Motion
**Signature: "matahari pagi" (hero, on load).** After hydration, the arch photo fades up
(opacity 0→1, y 24→0, 0.7s, starting at 0.1s), then the sun rises behind it (yPercent 45→0,
1.1s, starting at 0.25s). Both use `power3.out`. The whole sequence ends by 1.35s. On Sunday
(Asia/Jakarta) the sun goes from yPercent 100 to 70 instead, so it only peeks. Its job is to
show today's state: the hero text never animates and the hours chip says the same thing in
words. Initial hidden state applies only under a pre-paint `data-motion="on"` flag, with a CSS
fallback that shows the final state at 1.4s if JS never runs (if hydration lands later than
that, skip the tween). Reduced motion: no movement, sun and
photo at today's final state.
**Supporting:** Minuman, Makan, Nyaman, Kata mereka and Kunjungi each fade up once (y 20→0,
0.6s, `power2.out`, start "top 85%"). Hubungi and the footer don't move. Buttons: overlay
opacity 0→0.12 and translateY(-1px), 180ms ease-out; press scale 0.98. No loops, no staggers,
no text effects. Tokens for `lib/motion.ts`: `ease.signature = "power3.out"`,
`ease.reveal = "power2.out"`, `dur.photo = 0.7`, `dur.sun = 1.1`, `dur.reveal = 0.6`,
`dist.reveal = 20`, `dur.hover = 0.18`.

## 9. What makes it this shop
- The name is the cup's stamp: a thin box, light uppercase HAPPY KOPI, "keep smile and be
  happy" in a casual hand inside, beside a photo of the same stamp on a real cup.
- The sun rises behind the arched doorway only on days Happy Kopi opens; on Sunday it stays down.
- Dishes are drawn on the shop's own pale-green, brown-rimmed plate, drinks seen from above on
  the bamboo coasters, and prices sit beside each name the way the menu board puts its numbers
  in circles.
- The page tells you to look for the shared "KANTIN SARI RASA | HAPPY KOPI" sign at No. 37.

## 10. Avoid
- The AI cafe default of cream + serif display + terracotta accent: no serif anywhere; sage
  and zaitun own whole sections; terracotta only on chips and plate rims.
- Japandi or specialty-coffee minimalism (hairlines, beige emptiness, small mono labels). This
  is a cheerful everyday cafe.
- Kawaii overload: no smiley faces with eyes, no bounce or elastic easing, no confetti. The
  "smile" is a plain half-disc.
- Arches everywhere: exactly two (hero, shopfront). Everything else is a window or a circle.
- A split hero with a badge row, a row of equal product cards with icons, or a menu carousel
  that hides prices.
- Menu items at heading size; prices pushed to the far edge of a wide row.
- Mustard text, or thin sage lines on krem (they fail contrast).
- Quote marks, names or dates on reviews; star widgets beyond the "4,9 dari 28" text.
- Unflagged claims: upstairs, bakso campur, "best seller", Wi-Fi without `data-mockup`.
- Customer photos (photo-1..3) anywhere on the site; computing "today" outside Asia/Jakarta.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
