# Design brief: Volks Kaffee

## 1. Concept
The page is the front of house B23 when the lights come on. The maroon awning with its yellow
rounded lettering runs across the top, a dark-wood bar counter sits under it with the signature
items on it, and each section below takes one of the house's own materials (mint gate, red
brick, night terrace, the sign's yellow) as its ground. People know this shop by its frontage,
not by a generic coffee look.
Signature moment: on load the awning's tube light flickers on and the wordmark brightens from
dim mustard to sign yellow (two dips, about 1 s). On Sundays, when the shop is closed, the sign
stays off.

Direction (impeccable, code-led, Persuade mode):
- **Thesis:** the shop's own frontage is the page. It refuses the coffee default of espresso
  brown, cream, a serif, a latte-art hero and three white cards.
- **Own world:** maroon awning with a scalloped edge, yellow rounded letters, a dark-wood bar
  with horizontal panel lines, fields of mint, brick and yellow, the white floral-rim plate, and
  flat rounded illustrations with soft outlines.
- **First viewport:** the awning holds the wordmark, the counter holds the products, and today's
  status and "Petunjuk Arah" sit between them (§7, Hero).
- **Form:** the house front, taken from the brief's literal picture because the brief pins
  palette and type. The order slip, the house plaque and the plate come in as details.
  Seed: none (concept-seed not run, because it writes state outside `docs/`).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned palette (maroon awning, yellow letters, brick, mint gate, dark wood, plants), rounded-retro type cue, hours 15.30–23.00 with Sunday closed, B23 plaque, floral plate, three named items. Photos are reference only. |
| impeccable | Seven candidates from the shop's world (awning sign, order slip, Blok-AA house plaque, tegel tiles, mint gate, floral plate, cassette J-card). Picked the frontage, with the slip, plaque and plate as details. Colour committed at page scale. Type is a face with a point of view, from the signage. One focal motion moment from the product; proximity before containers. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `awning` | #5A1E2C | Hero awning, footer, headings and primary button on light grounds | `sign` on it 8.34, `piring` on it 11.55 |
| `sign` | #F4CF2E | Lit wordmark, primary button on dark grounds, Kata mereka ground, headings on `kayu` | `kayu` on it 10.99, `awning` on it 8.34 |
| `kayu` | #2A1A14 | Hero terrace and counter, Suasana ground, text on light grounds, banner | `piring` on it 15.24, `sign` on it 10.99 |
| `bata` | #A94A2A | Kopi sesuai seleramu ground, tomato in illustrations | `piring` on it 5.17. Never `sign` (3.73) or `kayu` (2.95) text on it |
| `pagar` | #B6D4BE | Menu andalan and Kunjungi kami grounds, mint in the Ice Choco Mint | `kayu` on it 10.47, `awning` on it 7.94 |
| `piring` | #F7F4EF | Text on dark grounds, plates, order slip. Never a page ground | `kayu` on it 15.24 |

Derived steps (not new tokens): `sign-off` #A88B3C for the unlit wordmark (3.88 on `awning`, so
display size only); `kayu-2` #3A261D for the bar panel lines; `pagar-dark` #4F7A5A for leaves;
`mint-drink` #7CC79E for the Ice Choco Mint's mint layer; the awning light wash is `piring` at
8% opacity, top to bottom.
Strategy: full palette at page scale. Each section owns one ground from the house, and there are
no scattered accents on a neutral background.

## 4. Type
One family: **M PLUS Rounded 1c** (`next/font/google` `M_PLUS_Rounded_1c`, subsets `latin`,
weights 500/700/800, `display: swap`, variable `--font-rounded`). It is the closest free match
to the awning's rounded bold lettering. Hierarchy comes from size and weight. If next/font
rejects it, use Zen Maru Gothic (500/700/900).

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.75rem, 3.35rem + 5.7vw, 8.5rem)` (76→136px), 800, leading 1.05, -0.01em | "Volks Kaffee" only. Two lines (Volks / Kaffee) below 1024px, one line from 1024px |
| `--step-head` | `clamp(2.25rem, 1.7rem + 2.3vw, 3.5rem)` (36→56px), 800, leading 1.1 | Section h2 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` (22→28px), 700 for h3 / 500 for statements, leading 1.3 | Hero line and status, product names, menu column heads, praise lines |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)` (17→19px), 500, leading 1.55 | Running text, menu items, slip items, prices (700), hours |
| `--step-small` | `0.8125rem` (13px), 500, +0.02em | Banner, slip label "PESANAN", source note, footer line |

Ratios: phone 2.1 / 1.64 / 1.29 / 1.31; desktop 2.4 / 2.0 / 1.47 / 1.46. All are at least 1.25.
Body text runs no wider than 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12-column grid, 24px gap from 1024px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (32px from 768px, 40px from 1200px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** product name, price and description stack under their illustration, 8–12px
  apart and left-aligned to it. Menu lists use no dot leaders: the price range sits right under
  "Kopi". The hours table is at most 360px wide. The maps link sits 12px under the map. The
  status dot sits 8px from its text.
- **Wide screens are designed, not stretched:** every 1440 wireframe in §7 uses the 12 columns
  on purpose. The awning, counter, frieze and footer awning are full-bleed; their content stays
  in `<Container>`.
- **Lists:** menu, slip and hours items use `--step-body`. Product names, menu column heads and
  praise use `--step-lead`. Nothing in a list reaches head size.
- The scalloped edge appears exactly twice: under the hero awning and under the footer awning.

## 6. Products on the page
No owner photos exist, so there are four flat SVG illustrations (inline React components) of the
actual items. Each is drawn large in Menu andalan (`role="img"`, Indonesian `aria-label`) and
small on the hero counter (`aria-hidden`).
1. **Ice Choco Mint** (review 4): a tall straight tumbler with a `piring` glass tint behind
   the drink; from the bottom, chocolate (`kayu-2`), then mint (`mint-drink`, so it stands out
   from the `pagar` ground), then ice cubes (`piring` at 70%), a chocolate drizzle down the
   inside wall, and a `sign` straw.
2. **Marshmallow Brownie** (review 4): a dense brownie square (`kayu`, `kayu-2` crumb edge)
   with three marshmallow cubes on top (`piring`, toasted tops in `sign`/`bata`), on a small
   floral-rim plate.
3. **Smoked Beef Sandwich** (photos): two toasted triangle halves, one leaning on the other.
   Smoked beef in `awning`, tomato in `bata`, lettuce in `pagar`/`pagar-dark`, cheese in `sign`.
   It sits on the white vintage plate with a pale floral rim (small `pagar` daisies and leaves),
   drawn fresh, not traced from photo-2.
4. **Kopi racikan** (description, review 1): a white cup and saucer, dark coffee with a crema
   ring, and one static steam curl.

Style: flat fills with one shade per form, a 2.5px round-joined outline in `currentColor`
(`kayu` on light grounds, `piring` on dark), three-quarter front view, light from above, and a
shared baseline so the items stand on the counter or shelf. 240×240 viewBox, no gradients,
under 6 KB each.

## 7. Sections
**Hero** (banner, awning, counter): name, today's status, directions. The status line comes from
the client (today in Asia/Jakarta); the static build shows "Senin–Sabtu 15.30–23.00".
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Draf mockup ... (small)| | Draf mockup untuk Volks Kaffee ... (banner, small)       |
|########################| |##########################################################|
|  ==== tube light       | |  ======== tube light                 (awning, full-bleed)|
|  Volks                 | |  Volks Kaffee    (display, one line, left, lit yellow)   |
|  Kaffee      (display) | |                                                          |
|\/\/\/\/\/\/\/\/\/\/\/\/| |\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/|
| Kopi racikan sendiri,  | | Kopi racikan sendiri,        |   (warm glow pool)        |
| dari sore sampai       | | dari sore sampai malam, di   |  [glass] [cup] [brownie]  |
| malam, di Cipinang     | | Cipinang Jaya. (lead)        |     [sandwich on plate]   |
| Jaya. (lead)           | | o Buka hari ini 15.30-23.00  |  items ~200px tall,       |
| o Buka hari ini        | |   (lead 700)                 |  cols 7-12, standing on   |
|   15.30-23.00 (lead)   | | [Petunjuk Arah] [WhatsApp]   |  the counter top          |
| [Petunjuk Arah] [WA]   | | cols 1-6                     |                           |
| glass cup brw sandwich | |                                                          |
|========================| |==========================================================|
| bar panels (kayu-2)    | | bar front, horizontal panel lines (kayu-2), full-bleed   |
+------------------------+ +----------------------------------------------------------+
```
On a phone the awning is about 230px tall, the counter items about 80px, and everything fits in
the first 844px. On desktop the awning is about 300px tall, with 28px scallops.

**Menu andalan** (`pagar`): show what to order.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Menu andalan (head)    | | Menu andalan (head) cols 1-6 | intro (body) cols 7-12    |
| intro (body)           | |                                                          |
| [glass]     [cup]      | |  [glass]     [cup]       [brownie]     [sandwich]        |
| ______ shelf _______   | | ____________________________ shelf line, 2px kayu ____   |
| Ice Choco   Kopi       | | Ice Choco    Kopi        Marshmallow   Smoked Beef       |
| Mint        racikan    | | Mint         racikan     Brownie       Sandwich  (lead)  |
| Rp 28rb     Rp 20-32rb | | Rp 28rb      Rp 20-32rb  Rp 25rb       Rp 35rb (b.700)   |
| desc        desc       | | desc         desc        desc          desc    (body)    |
| [brownie]   [sandwich] | |                                                          |
| ... same pattern ...   | | Kopi (lead)        Non-kopi (lead)    Makanan (lead)     |
| Kopi (lead)            | | Rp 20rb-32rb       Chocolate          Kentang Goreng     |
| Rp 20rb-32rb           | | Espresso ...       Matcha Latte ...   Roti Bakar ...     |
| items (body)           | | columns at cols 1-4 / 5-8 / 9-12, each max 320px         |
| Non-kopi, Makanan      | |                                                          |
+------------------------+ +----------------------------------------------------------+
```
Desktop items take 3 columns each, with the illustration about 240px. They differ in height
(tall glass, low brownie) but share one shelf line, so they read as objects, not cards.

**Kopi sesuai seleramu** (`bata`): the barista relationship.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Kopi sesuai seleramu   | | Kopi sesuai seleramu (head)  |    +-----------------+    |
| (head, piring)         | | Setelah beberapa kali        |    | PESANAN (small) |    |
| Setelah beberapa kali  | | mampir, baristanya sudah     |    | v Hafal pesanan |    |
| mampir ... (lead)      | | hafal pesananmu. (lead)      |    | v Paham kopi .. |    |
| body                   | | body, max 52ch               |    | v Racikan ...   |    |
| +--------------------+ | | cols 1-6                     |    +/\/\/\/\/\/\/\/\/+    |
| | PESANAN (small)    | | |                              |  slip cols 8-12, -2deg    |
| | v v v (body)       | | |                                                          |
| +/\/\/\/\/\/\/\/\/\/\+ | |                                                          |
+------------------------+ +----------------------------------------------------------+
```
The slip is `piring` paper with a torn SVG bottom edge and ticks drawn in `awning`. It is
rotated -2deg on desktop and not rotated on a phone.

**Suasana** (`kayu`, night): the evening there.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Suasana (head, sign)   | | Suasana (head) | Teras penuh | Musiknya    | Ada kucing  |
| intro (lead) [MOCKUP]  | | intro (lead)   | tanaman     | pas (lead)  | (lead)      |
| Teras penuh tanaman    | | [MOCKUP]       | (lead)      | body        | [MOCKUP]    |
|   (lead) + body        | | cols 1-4       | body        |             | body        |
| Musiknya pas + body    | |                | cols 5-12: three equal sub-columns      |
| Ada kucing + body      | |                                                          |
| ~ frieze, centre-      | | ~ frieze, full-bleed, ~220px: pots, bamboo armchair,     |
|   cropped, ~140px ~    | |   white folding chairs, wire bistro chair, one sitting   |
|                        | |   cat ([MOCKUP] group), more plants, pendant glow ~      |
+------------------------+ +----------------------------------------------------------+
```
The frieze wrapper uses `overflow-x: clip`. On a phone it is centre-cropped, never scrolled.

**Kata mereka** (`sign`): proof, paraphrased.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Kata mereka (head)     | | Kata mereka (head) | ~~~ Baristanya     | ~~~ Harganya   |
| 4,6 dari 501 ulasan    | | 4,6 dari 501       | ramah, hafal ...   | bersahabat ... |
| Google (body 700)      | | ulasan Google      | (lead, awning)     | (lead)         |
| ~~~ Baristanya ...     | | (body 700)         | ~~~ Tempatnya      | ~~~ Pas buat   |
| ~~~ Harganya ...       | | Dirangkum dari ... | nyaman ...         | nongkrong ...  |
| ~~~ Tempatnya ...      | | (small) cols 1-4   | 2x2 grid in cols 5-12               |
| ~~~ Pas buat ...       | |                                                          |
+------------------------+ +----------------------------------------------------------+
```
`~~~` is a 3-scallop marker in `awning`, 8px above each line. No quote marks, no stars per item,
no names.

**Kunjungi kami** (`pagar`): get there.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Kunjungi kami (head)   | | Kunjungi kami (head)      | +-------------------------+  |
| [B23] plaque           | | [B23] Jl. Cipinang Jaya   | |                         |  |
| Jl. Cipinang Jaya Blok | | Blok AA No. B23, ... body | |  map embed, 420px tall  |  |
| AA No. B23, ... (body) | | Cari kanopi marun ...     | |  2px kayu frame, r16    |  |
| Cari kanopi marun ...  | | Senin-Sabtu  15.30-23.00  | |                         |  |
| Senin-Sabtu 15.30-23.00| | Minggu       Tutup        | +-------------------------+  |
| Minggu      Tutup      | | Parkir motor ... [MOCKUP] | Buka di Google Maps ->       |
| Parkir motor [MOCKUP]  | | [Petunjuk Arah]  cols 1-5 | cols 6-12                    |
| [ map, 300px tall ]    | |                                                          |
| Buka di Google Maps -> | |                                                          |
+------------------------+ +----------------------------------------------------------+
```
The plaque is a `kayu` rounded plate with "B23" in `piring` at lead size, like the one on the
gate pillar. "Tutup" is in `awning` 700, and today's row gets a 4px `awning` left rule (client).

**Hubungi kami** (`awning`) + footer: close with actions.
```
phone (390)                desktop (1440)
+------------------------+ +----------------------------------------------------------+
| Hubungi kami (head)    | | Hubungi kami (head, sign)    | [WhatsApp] [Telepon]      |
| Mampir aja, nanti ...  | | Mampir aja, nanti baristanya | [Petunjuk Arah]           |
| (lead, piring)         | | hafal pesananmu. (lead)      | cols 8-12, centred        |
| [WhatsApp]             | | cols 1-6                     |                           |
| [Telepon 0878-...]     | |                                                          |
| [Petunjuk Arah]        | |                                                          |
|\/\/\/\/\/\/\/\/\/\/\/\/| |\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/|
| footer line (small)    | | Volks Kaffee . Jl. Cipinang Jaya Blok AA No. B23 .       |
|                        | | Senin-Sabtu 15.30-23.00   (small, piring on kayu strip)  |
+------------------------+ +----------------------------------------------------------+
```
Buttons are 52px tall with a 14px radius and weight 700. On dark grounds the primary is `sign`
fill with `kayu` text and the secondary has a 2px `piring` border. On light grounds the primary
is `awning` fill with `sign` text. Focus ring: 3px at 3px offset, `sign` on dark grounds and
`awning` on light ones.

## 8. Motion
**Signature: "Lampu menyala" (hero, on load).** An `aria-hidden` lit layer holds the wordmark in
`sign`, the tube light and the awning light wash. It sits over the base wordmark in `sign-off`,
which stays readable on its own. Starting 0.2s after mount, the lit layer's opacity steps
0 → 0.8 (0.08s) → 0.25 (0.07s) → 0.9 (0.08s) → 0.4 (0.06s) → 1 (0.25s, power2.out). The counter
glow pool fades 0 → 1 (0.5s, power2.out), starting with that last step. Total is about 1.0s
from mount. There are only two dips and
they never reach 0, so it stays under 3 flashes per second. No neon text-shadow: the sign is
printed fabric lit from above. Its job is to orient: this is an evening place, and it shows
whether the shop is open today.
- No JS: the lit layer has opacity 1 in CSS. Reduced motion: final state, no flicker.
- Sunday (Asia/Jakarta): no animation, lit layer and glow at 0, status "Hari ini tutup — buka
  lagi Senin 15.30". To check this state, the builder overrides the day locally; nothing ships
  for it.

**Supporting:** the starter `Reveal` runs once on each section block for sections 2–7 (20px,
0.7s, power2.out). It never runs per item and never on the hero. Buttons: CSS, 160ms ease-out,
colour plus translateY(-1px) on hover and scale(0.98) on press. No parallax, no product hover,
no marquee, no animated cat.
Tokens (`lib/motion.ts`): `duration { press: 0.16, ui: 0.2, reveal: 0.7, hero: 1.0 }`, starter
eases, `distance.reveal: 20`, plus `flicker` opacity steps `[0.8, 0.25, 0.9, 0.4, 1]` with step
durations `[0.08, 0.07, 0.08, 0.06, 0.25]`.

## 9. What makes it this shop
- The wordmark is the awning: yellow rounded letters on maroon with a scalloped edge, switched
  on by a tube-light flicker, and left off on Sundays because the shop is closed on Sundays.
- The address is set as the black B23 house plaque from the gate pillar, on the gate's mint,
  with "look for the maroon awning and B23" wayfinding. Finding a house inside Blok AA is the
  real problem visitors have.
- The Smoked Beef Sandwich sits on the vintage floral-rim plate and the Ice Choco Mint is the
  gate's mint. The barista section is an order slip, because the baristas learn your order.

## 10. Avoid
- The coffee category default: espresso brown with cream, a serif display, latte-art or bean
  imagery, an "Our story" block, and three equal white product cards with shadows.
- Neon cliché: glowing text-shadows, pink or blue neon tubes, a pulsing green "open" dot.
- German or Bavarian pastiche: no blackletter, no German flags or eagles, no VW logo or Beetle.
  "Volks" is just the name.
- Scallops everywhere. Exactly two awning edges, plus the small markers in Kata mereka.
- Kawaii overload from rounded type plus cats: one drawn cat, no paw prints, no cat cursor, no
  bouncing.
- A painted facade. The hero's text and buttons are real, readable and clickable, and the
  section below starts as a section.
- Testimonial cards with big quote marks, star rows or names. Any "quiet workspace" framing
  (review 1 says it can be noisy).
- "Volks Coffee". Customer photos anywhere, even blurred or as a texture.
- Dot leaders or prices pinned to the far edge of a row.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Ratios are in
  §4, lists are at body/lead size, and the B23 plaque and slip label are at lead/small size.
- [x] Max content width set; no detail pinned far from what it describes. 1200px; names, prices
  and descriptions stack 8–12px under their item; no leaders; hours table ≤360px.
- [x] Every section has a desktop wireframe that uses the width on purpose (12-column splits in §7).
- [x] At least 3 products shown: four illustrated items, in the hero and in Menu andalan.
- [x] Within motion-rules.md: one signature moment, section-only reveals, opacity and transform
  only, no React Bits, reduced motion means none.
- [x] Brief is decisions, not essays (2–4 pages).
