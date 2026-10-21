# Design brief: Madre Coffee Space

## 1. Concept
The page is staged like the owner's own menu shoot, with a mustard set for the kitchen, a cobalt set
for the bar, the white, teak and cognac-leather rooms in between, and a host's small paper tags naming
what's on each photo; it fits because Madre already built this look in its photography and families
choose it for the food first.
Signature moment: on load the overhead spread settles into place while tags land on the plates
one by one (Steak saus jamur, Daging & sambal segar, Ayam Afrika, Cordon Bleu), like a host
naming each dish as it reaches the table.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, Bahasa voice, section list; the owner's mustard and cobalt sets become the section grounds; owner-1 and customer photo-3 (reference only) give teak, cognac leather and the bold paintings; free mustard areas in owner-7 decide where the tags go. |
| impeccable | Persuade mode. "The brief wins": the pinned mustard/cobalt world is kept and drenched across whole sections, not used as accents. A seven-candidate scan (studio sets, menu book, playroom arches and portholes, channel-tufted banquette, collage paintings, gold trays, the family table) led to studio sets plus the host's tags. Faces picked outside its default list; one authored focal sequence; memory test: "the mustard table with its plates named". Its launcher and concept-seed were not run because they write outside `docs/`. |

## 3. Palette (6 named colours)
Strategy: full palette, one ground per section (mustard, paper, cobalt, cognac), never two strong grounds in one section.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `paper` | #F8F5EE | Dining-room white. Ground for Menu andalan, Ramah anak and Kunjungi; tag chips; text on cobalt and cognac | ink on paper 16.0:1 |
| `ink` | #1E1912 | Black track lights and seats. All text on paper and mustard; solid buttons on mustard | paper on ink 16.0:1 |
| `mustard` | #E0A53A | Owner's food backdrop. Ground for Hero and Camilan; solid buttons and prices on cobalt | ink on mustard 8.0:1; mustard on cobalt 5.0:1 |
| `cobalt` | #1A3784 | Owner's drinks backdrop. Ground for Minuman and Hubungi; links, tag dots and focus ring on paper and mustard | paper on cobalt 10.0:1; cobalt on paper 10.0:1 |
| `cognac` | #94492A | The long leather banquette. Ground for Ruang kami and Kata mereka | paper on cognac 5.9:1. Never mustard text on cognac (3.0:1) |
| `line` | #D8CFBE | Hairlines on paper (menu rows, hours table) | decorative, never text |

Ground order: mustard, paper, mustard, cobalt, paper, cognac (two sections), paper, cobalt.

## 4. Type
**Bricolage Grotesque** (display: h1, h2, h3, dish names, praise titles; variable, `wdth` 85,
`opsz` 96, weight 800 for h1/h2 and 700 for h3 and names). Its tall, slightly narrowed stems echo the
channel-tufted banquette, and its cut-paper detailing suits the collage paintings.
**Nunito** (body, prices, captions, tags, buttons; 400/700). It's the "friendly rounded sans" the brief asks for, and its round
terminals echo the white plates and porthole windows. Both loaded with `next/font`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 1.85rem + 4.35vw, 5.75rem)`: 52px @390, 74 @1024, 92 @1440 | hero name only: "Madre" / "Coffee Space" on two lines, line-height 1.05 |
| `--step-head` | `clamp(2rem, 1.3rem + 2.8vw, 3.25rem)`: 32 @390, 42 @768, 52 @1440 | section headings (h2), line-height 1.1 |
| `--step-lead` | `clamp(1.4375rem, 1.2rem + 0.55vw, 1.75rem)`: 23 @390, 27 @1440 | section leads, h3, dish names, praise titles, line-height 1.3 |
| `--step-body` | `1.125rem` (18px) | running text, descriptions, prices, list items, buttons, line-height 1.55 |
| `--step-small` | `0.875rem` (14px) | tags, captions, footer, line-height 1.4 |

Ratios @390 / 768 / 1440: display/head 1.63 / 1.49 / 1.77; head/lead 1.39 / 1.81 / 1.92;
lead/body 1.28 / 1.30 / 1.50; body/small 1.29. Set `--leading-display: 1.05` (the h1 wraps by design).
No uppercase tracked eyebrows anywhere.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1240px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 56px / 80px (768–1023) / 104px (≥1024) |

Breakpoints: phone <640 stacked; tablet 640–1023 stacked, with portrait photos capped at 520px
wide and centred; desktop ≥1024 on a 12-column grid (gap 24px, 32px from 1280).
Photo corners: 16px radius on desktop and tablet. On phone, the hero, drinks, playroom and room
photos run full-bleed with square corners; the camilan photos, owner-5 and the plate stay inside the gutters.

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Here that means: prices inline straight after the dish name
  (12px gap, no dot leaders); captions 12–16px under their photo; tags at most 24px from their plate,
  glass or object; hours table at most 320px wide; contact rows show label and value side by side.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
All from the owner's own photos; nothing illustrated, no place-photo counted.
- **Mains (hero, owner-7 cropped):** Ayam Afrika, Cordon Bleu, steak saus jamur, daging & sambal
  segar shown as tags on their plates (rice bowl and baked dish visible, untagged).
- **Ayam Afrika close-up (Menu andalan):** round crop of its plate from owner-7 (nasi kebuli,
  pisang goreng, three sauces), 260px phone / 320px desktop, caption below.
- **Small bites (owner-2):** mac & cheese balls, spring roll, ayam krispi, onion rings, dumpling goreng, named in the caption.
- **Churros (owner-4):** with chocolate dip, named in the caption.
- **Mocktails (owner-3):** five drinks, each tagged on its glass; **pink mocktail (owner-5)** captioned.
- Coffee has no photo: the coffee list stays typographic, and the owner is asked for a photo (PRD Q14).

Tag chip: paper pill, Nunito 700 at `--step-small`, ink text, padding 6px 12px 6px 10px, 8px dot
(cobalt on mustard photos and the playroom, mustard on cobalt photos). No shadow, no border.
Positions are % of the cropped image: x is the anchor and y the tag's top edge. L means the anchor is the tag's left edge, R its right edge, C its centre. Fine-tune on screenshots.

| Photo | Tags (x, y, anchor) | Phone |
|---|---|---|
| hero-spread (crop 1480×2400, served 986×1600) | Steak saus jamur 51, 8, L · Daging & sambal segar 98, 23, R · Ayam Afrika 23, 58, L · Cordon Bleu 98, 77.5, R | hide "Daging" |
| minuman (4:5) | Soda kiwi-lemon 30, 27, C · Teh peach-jeruk 72, 24, C · Selasih pandan 19, 74, C · Lemonade telang 50, 74, C · Teh leci 83, 74, C | hide "Selasih", "Teh leci" |
| ruang-main (3:2) | Loteng 80, 6, C · Kursi makan bayi 22, 45, L · Perosotan 72, 48, L · Kolam bola 52, 83, C | all |

## 7. Sections
Copy is in the PRD. Wireframes: phone 390 on the left, desktop 1440 on the right.

**1 Hero (mustard).** Recognition and directions. Photo flush to the top under the banner, text block vertically centred against it.
```
+------------------+   +------------------------------------------------------+
| Madre            |   |                                    +--------------+  |
| Coffee Space  h1 |   |  Madre                             | spread 0.617 |  |
| lead (2 lines)   |   |  Coffee Space            h1        |  (Steak..)   |  |
| o Buka hari ini  |   |  lead, max 30ch                    | (Daging & ..)|  |
| [Arah] [WhatsApp]|   |  o Buka hari ini 08.00–22.00       | (Ayam Afrika)|  |
|##################|   |  [Petunjuk Arah]  [WhatsApp]       | (Cordon Bleu)|  |
|# spread, bleed  #|   |  cols 1-6 (col 7 left empty)       | cols 8-12    |  |
|# 3 tags         #|   |                                    +--------------+  |
+------------------+   +------------------------------------------------------+
```
**2 Menu andalan (paper).** The kitchen is the point. List rows separated by `line` hairlines.
```
+------------------+   +------------------------------------------------------+
| Menu andalan  h2 |   | Menu andalan  h2          | Ayam Afrika  Rp 58rb     |
| intro (lead)     |   | intro (lead)              | description              |
|   ( plate 260 )  |   |                           | Beef Dabu-Dabu  Rp 68rb  |
|   caption        |   |     (  round plate 320 )  | Gyudon Andaliman Rp 52rb |
| 4 dishes: name + |   |     caption               | Cordon Bleu  Rp 55rb     |
| price, desc      |   |                           | Juga dari dapur kami h3  |
| Juga dari.. h3   |   | cols 1-5                  | 4 lines + sarapan [MOCK] |
+------------------+   +------------------------------------------------------+
```
**3 Camilan & manis (mustard).** Two portrait photos, second one dropped 80px for rhythm.
```
+------------------+   +------------------------------------------------------+
| Camilan & manis  |   | Camilan &    | +-----------+ |                       |
| lead             |   | manis   h2   | | owner-2   | | +-----------+         |
| [owner-2  2:3]   |   | lead         | | 2:3       | | | owner-4   |         |
| caption + price  |   | Ada juga     | +-----------+ | | 2:3       |         |
| [owner-4  4:5]   |   | pastry..     | caption+price | +-----------+         |
| caption + price  |   | cols 1-4     | cols 5-8      | caption+price  9-12   |
+------------------+   +------------------------------------------------------+
```
**4 Minuman (cobalt).** Coffee credibility, then colour. Prices in mustard.
```
+------------------+   +------------------------------------------------------+
| Minuman  h2      |   | +----------------------+ | Minuman  h2               |
| lead (barista)   |   | | owner-3  4:5         | | lead (barista line)       |
|##################|   | | (Kiwi)   (Peach)     | | Kopi h3: 4 rows + prices  |
|# owner-3, 3 tags#|   | | (Selasih)(Telang)    | | Black Basil note          |
|##################|   | |           (Leci)     | | Mocktail & teh h3 |owner-5|
| Kopi h3, 4 rows  |   | +----------------------+ | text cols 7-9     | 10-12 |
| Mocktail h3      |   | cols 1-5                 |                   | 4:5   |
| [owner-5  4:5]   |   +------------------------------------------------------+
+------------------+
```
**5 Ramah anak (paper).** The family reason; same type and palette, nothing cartoonish.
```
+------------------+   +------------------------------------------------------+
| Ramah anak  h2   |   | +--------------------------------+ | Ramah anak h2   |
| lead             |   | | owner-6 3:2          (Loteng)  | | lead            |
|##################|   | | (Kursi makan bayi) (Perosotan) | | body            |
|# owner-6, 4 tags#|   | |          (Kolam bola)          | | Menu anak h3    |
|##################|   | +--------------------------------+ | items + price   |
| body, Menu anak  |   | cols 1-7                           | cols 8-12       |
+------------------+   +------------------------------------------------------+
```
**6–7 Ruang kami + Kata mereka (one cognac field, two sections).** The room, then paraphrased proof.
```
+------------------+   +------------------------------------------------------+
| Ruang kami  h2   |   | Ruang kami h2 | +--------------------------------------
| lead             |   | lead, body    | | owner-1 3:2, bleeds off the right
|# owner-1 3:2    #|   | Madre = ibu   | | viewport edge
| body, Madre line |   | cols 1-4      | +--------------------------------------
|------------------|   |------------------------------------------------------|
| Kata mereka h2   |   | Kata mereka   | Makanan yang    | Pelayanan yang     |
| 4,7 dari 519 ... |   | 4,7 dari 519  | konsisten + 1   | hangat + 1 line    |
| 4 themes stacked |   | ulasan, link  | Anak-anak betah | Kopi sesuai selera |
+------------------+   | cols 1-4      | cols 5-8        | cols 9-12          |
                       +------------------------------------------------------+
```
**8 Kunjungi kami (paper).**
```
+------------------+   +------------------------------------------------------+
| Kunjungi kami h2 |   | +--------------------------------+ | Kunjungi h2     |
| address          |   | | map iframe, 460px tall         | | address         |
| Buka setiap hari |   | |                                | | Senin  08.00–22 |
| 7-row table      |   | |                                | | ... 7 rows      |
| [Petunjuk Arah]  |   | +--------------------------------+ | [Petunjuk Arah] |
| map, 300px       |   | cols 1-7                           | cols 8-12       |
+------------------+   +------------------------------------------------------+
```
**9 Hubungi kami (cobalt close).** Three rows, each one link at least 64px tall, with mustard hairlines between them. The label is set at `--step-lead` (Bricolage 700) and the value at `--step-body`, right beside it.
```
+------------------+   +------------------------------------------------------+
| Hubungi kami h2  |   | Hubungi kami  h2             | WhatsApp  0851-2110-2047 |
| lead [MOCKUP]    |   | lead [MOCKUP] booking line   | Telepon   0851-2110-2047 |
| WhatsApp row     |   | cols 1-6                     | Petunjuk Arah  Jl. Gong..|
| Telepon row      |   |------------------------------------------------------|
| Arah row, footer |   | Madre Coffee Space · Jl. Gongseng Raya No. 1, ...    |
+------------------+   +------------------------------------------------------+
```

## 8. Motion
**Signature (hero, load).** The spread image is visible from the first paint and settles from
`scale(1.04)` to 1 over 1.1s (`expo.out`). From 0.35s, the hero tags fade up 10px in table order,
0.45s each, 0.14s apart, finishing by 1.3s. Headline, hours and buttons never wait. Tags are
hidden before animating only under `html.js-motion` (set inline in `<head>`, not under reduced
motion), and a CSS fallback shows them after 2.5s. Reduced motion: everything in its final state.
**Supporting:** the starter `Reveal` once per section block (sections 2–8: 20px, 0.7s,
`power2.out`); tags outside the hero arrive with their section. Buttons and rows: colour change
150ms, press `scale(0.98)`. Lenis on the starter defaults. Nothing else moves.
Tokens: add `duration.tag 0.45`, `stagger.tag 0.14`, `delay.tags 0.35`, `distance.tag 10`,
`scale.heroFrom 1.04` to `lib/motion.ts`; the rest stay on starter values.

## 9. What makes it this shop
1. The page grounds are the owner's own photo sets: mustard where the food is, cobalt where the
   drinks are, and the banquette's cognac for the room. They come from Madre's photos, not a mood board.
2. The host's tags: dishes, mocktails and playroom features named right on the owner's photos
   ("Ayam Afrika" on its plate, "Kolam bola" on the ball pit), in the family-host voice the brief sets.
3. The one close-up on the page is the Ayam Afrika plate, cropped round like the plate itself:
   the regular's long-time favourite, with nasi kebuli and three sauces.

## 10. Avoid
- The coffee-shop default: cream ground, serif display, terracotta accent; beans, latte art, chalkboards; "Selamat datang di…" hero copy.
- Templates: a centred headline over a row of three icon cards; a split hero with a badge or star row; quoted review cards with names, avatars or stars.
- Kid clichés in Ramah anak: rainbows, crayon or bubble fonts, confetti, bouncy easing.
- Chrome instead of content: gradients, glass, drop or offset shadows, gradient masks blending photos into the ground.
- Prices pushed to the far edge with dot leaders; any text placed directly on a photo (tags are chips).
- Overclaiming: "terbaik", "paling enak", a quiet-workspace promise, parking, years or awards.
- Concept failures to watch:
  - Tags drifting off their plates at other widths. Keep fixed aspect-ratio boxes and check 390, 768 and 1440.
  - Tag clutter. At most 4 tags per photo on phone, none covering food, no two touching.
  - Colour fatigue. Mustard and cobalt are never both grounds in one section (small accents like cobalt tag dots or mustard prices are fine), and paper sections sit between the drenched ones.
  - The display h1 overflowing its 6 columns at 1024. Measure it; widen the text column to col 7 before shrinking the type.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (min ratio 1.28; dish names and praise titles at lead, below h2)
- [x] Max content width set; no detail pinned far from what it describes (1240px; prices inline, captions ≤16px, tags ≤24px, 320px hours table)
- [x] Every section has a desktop wireframe that uses the width on purpose (all 9: two-column, three-column or bleed layouts)
- [x] At least 3 products shown (food and product shops) (18 dishes and drinks across five owner food and drink photos, plus the Ayam Afrika close-up)
- [x] Within motion-rules.md (one signature in the hero, section-level reveals, transform and opacity only, reduced motion means none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
