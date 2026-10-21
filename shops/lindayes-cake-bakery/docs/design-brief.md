# Design brief: LINDAYES Cake & Bakery

## 1. Concept
**"Masuk lewat depan":** the page is the shop, walked through from Jl. Raya Penggilingan. First
the charcoal sign with the orange LINDAYES lettering and the scalloped orange awning, then the
lit cake case, the teal coffee corner, the gift shelf and the cake-box counter. The owner sees
their own shopfront in the first second, and visitors take the same route a customer does.
Signature moment: on load the LINDAYES sign switches on, warming from unlit brown to lit orange
with a soft glow, the way the fascia does when the shop opens at 06.00.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Name and tagline, the four case products, the gift and catering offer, daily 06.00–21.00, 4.1/490, review themes (bread, cake, brownies; service never the headline), Bahasa Indonesia with "Anda", every [MOCKUP] line |
| owner-1.jpg | The only photo on the site: hero crop of the sign and awning. Also the source for the fascia, frame, wordmark and scalloped-awning vocabulary and the "cari tenda oranye" wayfinding line |
| photo-1/2/3 (reference only) | Room colours (teal wall, ivy, bougainvillea pink, honey shelves), what the products look like for the illustrations (dome cakes, cupcakes, brownie bites, toples towers, rattan hampers, handled bags, cake boxes printed with the phone number) |
| impeccable | Persuade mode. The world carries the page with working parts (the sign is the H1 and the storefront holds the buttons), not a painted poster. Full-palette colour where each room owns a whole field. A face with a point of view from outside its default list. One authored focal motion, everything else quiet. Avoid the "artisan bakery" cluster (cream, serif, terracotta) and the black-and-gold luxe opposite. Seven worlds weighed: fascia and awning, lit cake case, teal mural corner, Lebaran toples tower, cake-box print, price tent cards, hamper tag. Chosen: the walk-through of the shop's own rooms, with tent cards as the label system. The launcher and concept-seed were not run because they write outside `docs/`, so the method was applied by hand |
| motion-rules.md, React Bits | Signature limited to opacity, reveals once per section, one React Bits component (Glare Hover on the glass case) |

## 3. Palette (6 named colours)
Strategy: full palette at page scale. Scene: phones in daylight on a busy road, or a desk while
planning a Lebaran order. The real shop is a dark sign over a bright, lit interior, so the hero
is dark on top and light beneath the awning.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `fascia` | #26211E | Sign field (hero top), order counter, closing section; body text on light grounds | glass on fascia 14.1:1 · blush on fascia 10.5:1 |
| `sign` | #F5873A | Lit wordmark; primary button fill on dark grounds (fascia text); crusts in illustrations | sign on fascia 6.4:1 · fascia on sign 6.4:1 · vs teal 3.95:1 (UI only) · **never text on glass (2.2:1)** |
| `awning` | #B93F1A | Awning band; primary button fill on light grounds (glass text); tent-card top rule | glass on awning 4.9:1 · vs glass 4.9:1 · vs blush 3.65:1 (UI) |
| `teal` | #0F4A55 | Coffee-corner field; links and focus ring on light grounds | glass on teal 8.7:1 · blush on teal 6.5:1 · teal on blush 6.5:1 |
| `blush` | #F4C6CE | Gift-shelf field; tagline on charcoal; frosting; focus ring on dark grounds | fascia on blush 10.5:1 |
| `glass` | #EEF2EF | Light ground (storefront row, case, reviews, visit); text on dark grounds | fascia on glass 14.1:1 |

Derived with `color-mix()` (these are not new colours): frame #682E1C (awning 45% / fascia),
unlit sign #6E4528 (sign 35% / fascia; decorative, `aria-hidden`, 1.9:1 by design), wood #A25E2F
(sign 60% / fascia; shelf lines and rattan only), muted text #5E5C59 on glass (5.9:1),
#B6B7B4 on fascia (7.9:1), #B6C8C8 on teal (5.7:1). No pure white, no black, no gradients.

## 4. Type
Young Serif 400 (display, headings, product names, tagline) + Figtree 400/500/600 (body,
statements, buttons, labels), both via `next/font/google`, `latin`, `display: swap`. Young Serif
is the closest Google face to the sign's sturdy bracketed orange capitals, and it is warm without
being "luxury". Figtree reads cleanly in Indonesian at 16px.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 1.6rem + 7vw, 7.5rem)` (52 → 120px) | hero "LINDAYES" only; one word, line-height 0.95, tracking 0.02em |
| `--step-head` | `clamp(2rem, 1.4rem + 2.4vw, 3.25rem)` (32 → 52px) | section headings (Young Serif), line-height 1.1 |
| `--step-lead` | `clamp(1.3125rem, 1.15rem + 0.65vw, 1.75rem)` (21 → 28px) | "Cake & Bakery", hero line, product names (Young Serif), paraphrased reviews; line-height 1.3 |
| `--step-body` | `clamp(1.03125rem, 0.98rem + 0.2vw, 1.125rem)` (16.5 → 18px) | running text, list items, drinks, tagline (Young Serif, tracking 0.08em, blush); line-height 1.6 |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` (13 → 14px) | captions, prices, "Diringkas dari ulasan Google"; line-height 1.45 |

Ratios: phone 52/32/21/16.5/13 = 1.63, 1.52, 1.27, 1.27. Desktop 120/52/28/18/14 = 2.3, 1.86,
1.56, 1.29. No all-caps tracked labels; prices sit in sentence case.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | `75rem` (1200px), 12-column grid, gap 24px phone / 32px desktop |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 4vw, 2.5rem)` (20px / 40px) |
| Section padding phone / desktop (`--section-y`) | `clamp(3.5rem, 2rem + 6vw, 7rem)` (56px / 112px) |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Here: tent card 12–16px under its illustration, price on the line under the product name,
  "Kopi mulai Rp 18rb" beside the "Minuman" label, photo caption 8px under the photo.
- **Wide screens are designed, not stretched:** every section at 1440 is a deliberate split
  (5/7, 4/8, 6/6) or a 4-across shelf. Fields (fascia, teal, blush) bleed full width while
  content stays in the container.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
No owner product photos, so 9 flat SVG illustrations of specific items (the facade photo doesn't count):
- **Etalase (4):** Kue (chocolate dome cake with a blush rosette, beside a cupcake with blush
  frosting in an awning-red case), Brownies (stack of three squares plus two brownie bites),
  Roti (roti sobek pull-apart loaf, six buns), Kue kering (round toples of nastar with a teal
  label carrying a simple ketupat diamond).
- **Hampers (3):** menara toples (three jars stacked and shrink-wrapped, a glass highlight
  across them), rattan hamper basket in wood tone with a blush bow, white handled gift bag.
- **Ngopi (1):** cup of coffee on a saucer beside a slice of layered cake.
- **Acara (1):** white cake box with a handle, "0818-0898-9381" printed along its side like
  the real boxes.

Style: viewBox 240×200, objects stand on a shared baseline (y=184) so they sit on the shelf
line. Flat fills from the six tokens plus derived tones only, one highlight shape per object
(glass at 60%), one flat shadow ellipse (fascia 12%), no outlines, no faces, no gradients. The
LINDAYES fan-croissant logo is **not** redrawn; it appears only in the owner photo.

## 7. Sections
**Hero**: purpose: recognition plus hours plus directions in one screen. Fascia (sign) on top,
awning band, storefront row on glass. Owner photo crop: x 372, y 112, w 700, h 358 of owner-1
(sign and awning; leaves out the rooftop "Yes" sign, the neighbour's billboard and the people).
```
Hero: phone (390)              Hero: desktop (1440)
+----------------------+       +------------------------------------------------------------+
| draft banner         |       | draft banner                                               |
|#frame################|       |#frame######################################################|
|#     LINDAYES       #|       |#                  LINDAYES  (display, lit)                #|
|#    Cake & Bakery   #|       |#        Cake & Bakery   ·   patisserie & coffee           #|
|# patisserie & coffee#|       |############################################################|
|vvvvvv awning vvvvvvvv|       |vvvvvvvvvvvvvvvvvvvvvvvvvv awning vvvvvvvvvvvvvvvvvvvvvvvvvv|
| hero line (lead)     |       |  +----------------------+      hero line (lead, 2-3 ln)    |
| ● Sedang buka ·      |       |  | owner photo 2:1      |      ● Sedang buka · Buka setiap |
|   Buka setiap hari.. |       |  | (cols 1-5)           |        hari 06.00–21.00 (body)   |
| [Petunjuk Arah][WA]  |       |  +----------------------+      [Petunjuk Arah] [WhatsApp]  |
| [owner photo 2:1]    |       |  caption (small, 8px below)    (cols 7-12)                 |
| caption              |       +------------------------------------------------------------+
+----------------------+
```
**Etalase kami**: purpose: the lit case. Glass ground, a 2px LED line (sign 50%, static glow)
at the top of the case, steel shelf line (fascia 25%) under each row of items. Each tent card
has an awning top rule, the name (lead, Young Serif), one line (body) and the price (small, `data-mockup`).
```
Etalase: phone                 Etalase: desktop
+----------------------+       +------------------------------------------------------------+
| Etalase kami (head)  |       | Etalase kami (head, cols 1-6)    intro line (lead, 7-12)   |
| intro (body)         |       | ~~~~~~~~~~~~~~~~~~~~~~~~ LED line ~~~~~~~~~~~~~~~~~~~~~~~~ |
| ~~~~~ LED line ~~~~~ |       |  [Kue]        [Brownies]      [Roti]        [Kue kering]   |
| [Kue]     [Brownies] |       | ======================= shelf line ======================= |
| ===== shelf ======== |       |  Kue          Brownies        Roti          Kue kering     |
| Kue       Brownies   |       |  line         line            line          line           |
| line/Rp   line/Rp    |       |  Rp 25rb      Rp 65rb/kotak   mulai Rp 8rb  Rp 85rb/toples |
| [Roti]    [K.kering] |       +------------------------------------------------------------+
| ===== shelf ======== |
| Roti      Kue kering |
+----------------------+
```
**Ngopi di LINDAYES**: purpose: you can sit down. Full-bleed teal field, ivy trail (teal/glass
mix leaves, two blush bougainvillea clusters) hanging from the top edge on the left, `aria-hidden`.
```
Ngopi: phone                   Ngopi: desktop
+----------------------+       +------------------------------------------------------------+
| ~ivy~                |       | ~ivy trail (cols 1-5)~                                     |
| Ngopi di LINDAYES    |       |  +----------------------+     Ngopi di LINDAYES (head)     |
| statement (lead)     |       |  | cup + cake slice     |     statement (lead, 3 lines)    |
| [cup + cake slice]   |       |  | (cols 1-5)           |     Minuman · Kopi mulai Rp 18rb |
| Minuman · mulai 18rb |       |  +----------------------+     kopi susu gula aren americano|
| 4 drinks (body)      |       |                               cafe latte          es teh   |
+----------------------+       +------------------------------------------------------------+
```
**Hampers & kue kering**: purpose: gifts. Full-bleed blush field, wood shelf line.
```
Hampers: phone                 Hampers: desktop
+----------------------+       +------------------------------------------------------------+
| Hampers & kue kering |       | Hampers & kue kering |  [tower]     [hamper]    [gift bag] |
| line (body)          |       | line (lead)          | ========= wood shelf line ========= |
| [tower] Menara toples|       | Pre-order: Lebaran,  |  Menara toples Hampers  Tas hadiah  |
| =shelf= line         |       |  Natal, Imlek (small)|  line         line      line        |
| [hamper] Hampers     |       | [Pesan hampers]     |  Juga camilan kemasan seperti bagelen|
| =shelf= line         |       |  (cols 1-4)          |  (cols 5-12)                        |
| [bag] Tas hadiah     |       +------------------------------------------------------------+
| =shelf= line         |
| pre-order · bagelen  |
| [Pesan hampers]      |
+----------------------+
```
**Pesan untuk acara**: purpose: catering and delivery orders. Fascia field, the cake box as the object.
```
Acara: phone                   Acara: desktop
+----------------------+       +------------------------------------------------------------+
| Pesan untuk acara    |       |  +----------------------+     Pesan untuk acara (head)     |
| line (body)          |       |  | white cake box, tel  |     Kami melayani katering dan   |
| [cake box, tel]      |       |  | printed (cols 1-5)   |     pesan antar. (lead)          |
| - Snack box ...      |       |  +----------------------+     - Snack box kantor & arisan  |
| - Kue ulang tahun    |       |                               - Kue ulang tahun (body)     |
| - Pesanan kantor     |       |                               - Pesanan kantor             |
| [Pesan lewat WA]     |       |                               [Pesan lewat WhatsApp] 7-12  |
+----------------------+       +------------------------------------------------------------+
```
**Kata mereka**: purpose: proof without overclaiming. Glass ground, paraphrases with no quote
marks and no names; an awning rule above each.
```
Kata mereka: phone             Kata mereka: desktop
+----------------------+       +------------------------------------------------------------+
| Kata mereka (head)   |       | Kata mereka (head)   |  Kue dan rotinya   | Ada yang paling|
| 4,1 dari 490 ulasan  |       | 4,1 dari 490 ulasan   |  enak. (lead)     | suka brownies..|
| 4 paraphrases (lead) |       | Google (lead)         |  ---------------  | -------------- |
| Diringkas.. (small)  |       | Diringkas.. (small)  |  Toko roti ... kafe| Pelayanannya.. |
+----------------------+       | (cols 1-4)            |  (cols 5-12, 2x2)                  |
                               +------------------------------------------------------------+
```
**Kunjungi kami**: purpose: get there. Glass ground.
```
Kunjungi: phone                Kunjungi: desktop
+----------------------+       +------------------------------------------------------------+
| Kunjungi kami (head) |       | Kunjungi kami (head)     |  +-----------------------------+|
| address (body)       |       | address (body)           |  | map iframe 4:3              ||
| ● status · hours     |       | ● status · hours         |  |                             ||
| Cari papan LINDAYES..|       | Cari papan LINDAYES dan  |  +-----------------------------+|
| [Petunjuk Arah]      |       |  tenda oranye. [Petunjuk]|  Buka di Google Maps (small)    |
| [map 4:3]            |       | (cols 1-5)               |  (cols 6-12)                    |
+----------------------+       +------------------------------------------------------------+
```
**Hubungi kami + footer**: purpose: last chance to act. Fascia field with the awning band on top.
```
Close: phone                   Close: desktop
+----------------------+       +------------------------------------------------------------+
|vvvvvv awning vvvvvvvv|       |vvvvvvvvvvvvvvvvvvvvvvvvvv awning vvvvvvvvvvvvvvvvvvvvvvvvvv|
| Hubungi kami (head)  |       | Hubungi kami (head)    [Telepon 0818-0898-9381] [WhatsApp] |
| line (body)          |       | line (body, cols 1-5)  [Petunjuk Arah]  Tokopedia (link)   |
| [Telepon 0818-...]   |       | ---------------------------------------------------------- |
| [WhatsApp]           |       | LINDAYES (lead, sign) · address · hours · Rating dari      |
| [Petunjuk Arah]      |       | Google · draf mockup (small, muted)                        |
| Tokopedia (link)     |       +------------------------------------------------------------+
| footer facts (small) |
+----------------------+
```

## 8. Motion
**Signature: the sign switches on.** The H1 has two stacked layers: an `aria-hidden` unlit copy
of "LINDAYES" in unlit-sign brown that paints immediately, and the real text in `sign` with a
static `text-shadow: 0 0 0.22em` sign at 45%. A CSS `@keyframes sign-on` fades the lit layer from
opacity 0 to 1 over 700ms after 150ms, `cubic-bezier(0.16, 1, 0.3, 1)`. It is CSS rather than GSAP
so it needs no JS and causes no hydration flash. No flicker, no neon. Reduced motion: no
animation, lit from the first paint. Nothing else in the hero moves, and the buttons and hours
are never delayed.
**Supporting:** sections 2–8 each fade up once (y 20 → 0, 600ms, `power2.out`, top 85%) via the
starter Reveal. Glare Hover glint on the four case illustrations (250ms, desktop pointer and
keyboard focus). Buttons: 150ms colour change, 1px press. Starter Lenis defaults.
Motion tokens: reveal `y 20`, `0.6s`, `power2.out`, start `top 85%`; hover `0.15s`.

## 9. What makes it this shop
1. The hero is their facade with working parts: the charcoal fascia with its brown frame and
   orange Young Serif LINDAYES, the scalloped orange awning (the scallops are visible in
   owner-1), the storefront row holding the photo and the doors (buttons) underneath.
2. The page grounds follow the real rooms: the lit case, the teal café wall with ivy and
   bougainvillea pink, the pink logo colour for gifts, and the dark cake box with the phone
   number printed on it, as on the boxes they hand over.
3. Lebaran toples towers, rattan hampers and bagelen, the things actually stacked on their
   counter and shelves, and a sign that "opens" like the shop does at 06.00.

## 10. Avoid
- Category defaults: cream ground with a serif and terracotta; black-and-gold "luxury
  patisserie"; centred headline over three equal cards; stock cake photos; star rows; a
  testimonial carousel.
- Paris clichés: Eiffel Tower clip-art, red-white striped awnings (theirs is solid orange),
  French flags, "Bonjour", script fonts, berets. "A little Paris" lives in one copy line only.
- Facade as a poster: the sign must be live text, the buttons real buttons, the storefront row
  a normal section. Don't paint a building illustration.
- Patchwork: the type, tent cards, shelf lines and buttons stay identical across the coloured
  rooms. Only the ground changes.
- Neon creep: the glow stays warm and soft (≤0.25em), with no flicker loop and no glow anywhere else.
- Cutesy illustrations: no faces, sparkles or emoji. Flat and specific.
- Overclaiming: service is never the headline (review 4, 4.1 rating); one reviewer's brownies
  is not "best-seller"; no "sejak" year, no awards.
- Showing "Yes Cake & Bakery", the rooftop sign, yescakeandbakery.com or any customer photo.
  Redrawing their logo.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists at body/lead; rating at lead under a head-size heading; closing wordmark at lead)
- [x] Max content width set; no detail pinned far from what it describes (tent cards under items, prices under names, caption 8px under photo, drink price beside its label)
- [x] Every section has a desktop wireframe that uses the width on purpose (5/7, 4/8, 6/6 splits, 4-across shelf; fields full-bleed)
- [x] At least 3 products shown (food and product shops): 9 illustrated products, 4 in the case alone
- [x] Within motion-rules.md (one opacity-only signature, section reveals once, 1 React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
