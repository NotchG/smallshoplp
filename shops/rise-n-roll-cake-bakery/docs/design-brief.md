# Design brief: Rise n Roll Cake & Bakery

Record decisions, not essays. Site copy in Bahasa Indonesia; this brief in English.

## 1. Concept
**"Etalase berlengkung" (the arched counter):** the terracotta arch shelving behind Rise n Roll's
cake counter becomes the page's frame system. Every cheesecake stands in its own arch on one
shelf, and the page runs down the room from the sage ceiling to the walnut tables to the terrazzo floor.
It fits this shop because the arches, sage ceiling and terrazzo are what regulars actually see,
and the shop's story is "come for one slice, stay for lunch".
**Signature moment:** on load, one slice of blueberry cheesecake glides out of a whole cheesecake
standing in the hero arch. One slice, once, then everything is still.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Cheesecake-first story, the named flavours and dishes, honest notes (busy Sundays, small parking), hours, address, 4.9 / 290, Indonesian + "kamu" register [MOCKUP]. |
| photos (reference only) | Sage ceiling, white walls, orange arched shelving, arched windows, terrazzo, walnut tables, mustard chairs, pink roses. Palette sampled from these; none appear on the site. |
| impeccable | Persuade mode; new-work judgement (rut named, 7 candidates, one committed world); colour strategy; banned-face list; type and layout discipline; one focal motion. |

impeccable notes: launcher and `concept-seed` not run (they write outside `docs/`), so `seed: none (unavailable)`;
direction chosen by judgement. **Rut:** cream ground + italic serif + terracotta accent "artisan bakery", and the pastel-pink
Instagram cake shop with a script logo. **Candidates, by resonance:** (1) arched shelving behind the
glass counter (chosen), (2) cake box with sticker label, (3) the door's white filigree arch decal,
(4) terrazzo floor, (5) the handwritten order slip (nota pesanan), (6) Instagram menu highlights (the rut, spent once),
(7) birthday-cake piping. **Raise from (2), the cake-box label:** everything a buyer needs sits on the item's own
label (name, note, price), never in a separate list.

## 3. Palette (6 named colours)
Strategy: **Committed + roles.** Sage owns whole fields (hero, "Kata mereka"); terracotta is
architecture only (arches), never sprinkled; walnut is ink and the two dark bands.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `sage` | #A9BC8E | Ceiling: hero and "Kata mereka" grounds | walnut on sage 6.88 ✓ (only walnut text on sage) |
| `wall` | #FCFBF8 | Main ground; text on dark bands | walnut on wall 13.58 ✓ |
| `walnut` | #3B271D | Ink; primary button fill; menu and footer bands | wall on walnut 13.58 ✓; button vs sage 6.88 ✓ |
| `terracotta` | #C4622D | Arches and shelf (non-text graphics) | vs wall 3.95 ✓ (graphics ≥3) |
| `mustard` | #D9AE45 | Today's-hours pill, price notes on walnut | walnut on mustard 6.75 ✓; mustard on walnut 6.75 ✓ |
| `rose` | #EBB7B2 | Rose in illustrations, small accents only | walnut on rose 8.00 ✓ |

Derived (not new hues): `terracotta-deep` #A44A1C for prices on wall (5.68 ✓) and button hover;
`walnut-soft` #6B5447 for secondary text on wall/terrazzo only (6.80 / 5.86 ✓, **never on sage**: 3.44 ✗);
`terrazzo` ground #EEEAE2 with chips in walnut-soft, terracotta, sage, mustard at 35–60% (text on it sits on `wall` cards).
Food colours inside illustrations (blueberry, biscoff, matcha, pandan, chocolate) are product colours, not tokens.

## 4. Type
**Young Serif** 400 (soft, ball-terminal serif; display, headings, product names) + **Figtree** 400/600
(clean, airy body, labels, buttons). Both via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`.
Avoided on purpose: Fraunces, DM Serif, Playfair (impeccable's default list), any script face.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.75rem, 1.5rem + 5.6vw, 5.5rem)` (≈46 → 88px) | "Rise n Roll" in the h1 only |
| `--step-head` | `clamp(1.875rem, 1.2rem + 2.6vw, 3.125rem)` (30 → 50px) | section h2 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.55vw, 1.75rem)` (23 → 28px) | "Cake & Bakery", hero lead, h3, product names, paraphrases |
| `--step-body` | `1.125rem` (18px) | running text, menu items, facts |
| `--step-small` | `0.875rem` (14px) | captions, source notes, flavour notes |
Ratios: phone 46/30/23/18/14, desktop 88/50/28/18/14, all ≥ 1.25 ✓. Leading: display 1.05 (one line
"Rise n Roll" by design, still ≥1.05), head 1.1, lead 1.2, body 1.55. Figtree 600 for labels and buttons;
no uppercase tracking, no mono.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (≥768) / 40px (≥1200) |
| Section padding phone / desktop (`--section-y`) | 64px / 96px (≥768) / 112px (≥1200) |

12-column grid, 24px gaps on desktop. Prices sit directly under the product name (≤8px), the group
price note directly after the group title (≤8px), hours next to their day label (fixed 9rem label column):
no dot leaders, no right-aligned price columns. Measure for body text ≤ 60ch.

## 6. Products on the page
No owner photos exist, so all products are **flat SVG illustrations**, one consistent style:
3/4 view from slightly above, flat fills, no outlines, one soft walnut shadow ellipse at 20% opacity,
2–4 food colours each. Eleven products are drawn:
- **Hero:** whole blueberry cheesecake on a white cake stand, one slice separating (the signature).
- **Cheesecake kami, 5 slices** in arch niches, one shared `Slice` SVG with a `flavour` prop: Blueberry
  (glossy violet top + berries), Biscoff (caramel layer + half cookie), Original [MOCKUP] (golden baked top),
  Matcha [MOCKUP] (sage-green body, dusted top), Klepon [MOCKUP] (pandan layer, coconut flecks, gula merah drizzle).
  Each slice shows the biscuit base, cream body and topping in cross-section and fills ~70% of the niche width.
- **Whole cake band:** a whole cheesecake with two size rings (16 / 20 cm) [MOCKUP].
- **Bukan cuma kue, 4 spot drawings:** risol ayam keju (cut, cheese visible), matah chicken bowl, sus krakelin
  chocolate (crackled choux, chocolate), latte (cup and saucer, leaf art).

## 7. Sections
Grounds top to bottom: sage → wall → walnut → wall → sage → terrazzo → walnut.

**Hero** (sage). Text cols 1–7, arch cols 8–12 standing on the hero's bottom edge (~480×560). Phone: text first, arch below.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +--------------------------------------------+
| draf banner      |     | draf banner                                |
| Lubang Buaya, JT |     |  Lubang Buaya, Jakarta Timur     .------.  |
| Rise n Roll      |     |  Rise n Roll    (display 88)    /        \ |
| Cake & Bakery    |     |  Cake & Bakery  (lead)         |  whole   | |
| lead, 3 lines    |     |  lead, 2 lines, max 34ch       |  cake    | |
| (o) Buka hari ini|     |  (o) Buka hari ini 08.00-21.00 | <slice   | |
| [Petunjuk Arah]  |     |  [Petunjuk Arah]  Lihat cheese |==shelf===| |
|   .--------.     |     |   cols 1-7, vertically centred | cols 8-12| |
|  / cake <slice   |     +--------------------------------+----------+-+
+------------------+       sage full-bleed; arch base on the hero's edge
```

**Cheesecake kami** (wall). Purpose: the reason to come. Heading block, then one shelf of five arches across
the full container (the counter), then the whole-cake band. Name (lead), note (small), price (body 600,
terracotta-deep) stacked under each arch.
```
Cheesecake: phone        Cheesecake: desktop
+------------------+     +--------------------------------------------+
| Cheesecake kami  |     | Cheesecake kami        (cols 1-6)          |
| intro, 2 lines   |     | intro, 2 lines                             |
| /‾‾\    /‾‾\     |     | /‾‾‾\    /‾‾‾\    /‾‾‾\    /‾‾‾\    /‾‾‾\  |
| |sl|    |sl|     |     | | sl|    | sl|    | sl|    | sl|    | sl|  |
| ====    ====     |     | ========= one shelf, full 12 cols ======== |
| name    name     |     | name     name     name     name     name   |
| note    note     |     | note     note     note     note     note   |
| Rp35rb  Rp35rb   |     | Rp35rb   Rp35rb   Rp35rb   Rp35rb   Rp35rb |
| (2+2, then 1     |     |                                            |
|  centred)        |     |  /‾‾‾‾‾‾\       Cheesecake utuh (h3 lead)  |
| /‾‾‾‾\ whole     |     | | whole  |      16 cm / 20 cm, mulai 250rb |
| h3, sizes, price |     | | cake   |      [Pesan lewat WhatsApp]     |
| [Pesan lewat WA] |     |  cols 1-5        cols 6-11                 |
+------------------+     +--------------------------------------------+
```

**Bukan cuma kue** (walnut, the table top). Purpose: one slice turns into lunch. Four menu groups, each
headed by its spot drawing; group title lead (Young Serif, wall), price note small (mustard), items body (wall).
```
Menu: phone              Menu: desktop
+------------------+     +--------------------------------------------+
| Bukan cuma kue   |     | Bukan cuma kue       sub line (cols 1-7)   |
| sub, 2 lines     |     |                                            |
| [risol] Camilan  |     |  [risol]    [bowl]     [sus]      [latte]  |
|         Rp15rb   |     |  Camilan    Makanan    Kue &      Minuman  |
|         items    |     |  items      mulai 40rb pastry     mulai 25 |
| [bowl]  Makanan  |     |             items      items      items    |
| [sus]   Kue...   |     |  4 equal columns across 12                 |
| [latte] Minuman  |     |                                            |
+------------------+     +--------------------------------------------+
```

**Ruang kami** (wall). Purpose: what the visit is like, honestly. Illustration of one table vignette
(walnut table, glass vase with a pink rose, mustard chair, arched window onto a sage wall) inside an arch.
Facts as a list with 10px terracotta arch bullets.
```
Room: phone              Room: desktop
+------------------+     +--------------------------------------------+
| Ruang kami       |     |  /‾‾‾‾‾‾‾‾\          Ruang kami            |
| lead line        |     | |  table,  |         lead line             |
|  /‾‾‾‾‾‾‾\       |     | |  rose,   |         ∩ fact    ∩ fact      |
| | vignette|      |     | |  chair   |         ∩ fact    ∩ fact      |
| caption          |     | |__________|         ∩ fact    ∩ fact      |
| ∩ fact (x6)      |     |  caption (cols 1-5)   (cols 7-12, 2 cols)  |
+------------------+     +--------------------------------------------+
```

**Kata mereka** (sage). Purpose: proof, paraphrased. Rating line (body 600) sits directly under the heading (≤16px), source note small; paraphrases lead, Young Serif, no quote marks.
```
Praise: phone            Praise: desktop
+------------------+     +--------------------------------------------+
| Kata mereka      |     | Kata mereka                                |
| 4,9 dari 290     |     | 4,9 dari 290 ulasan Google · source note   |
| source note      |     |                                            |
| paraphrase 1     |     | paraphrase 1  | paraphrase 2 | paraphrase 3|
| paraphrase 2     |     | (lead, serif) | (lead)       | (lead)      |
| paraphrase 3     |     |  3 equal columns, max 32ch each            |
+------------------+     +--------------------------------------------+
```

**Kunjungi kami** (terrazzo floor). Purpose: get there. Map and a `wall` info card on the terrazzo.
```
Visit: phone             Visit: desktop
+------------------+     +--------------------------------------------+
| .:Kunjungi kami:.|     | .:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.: |
| [card: address,  |     | +----------------------+ +---------------+ |
|  Senin-Jumat ..  |     | |                      | | Kunjungi kami | |
|  Sabtu-Minggu .. |     | |   map embed          | | address       | |
|  parkir terbatas |     | |   (cols 1-7, 440h)   | | hours (today  | |
|  [Petunjuk Arah]]|     | |                      | |  in mustard)  | |
| [map 300h]       |     | +----------------------+ | [Petunjuk]    | |
| .:.:.:.:.:.:.:.: |     | .:.:.:.:.:.:.:.:.:.:.:.: +---------------+ |
+------------------+     +--------------------------------------------+
```

**Hubungi kami** (walnut). Purpose: a real close. Visibly narrow, centred block (max 720px) on purpose.
```
Contact: phone           Contact: desktop
+------------------+     +--------------------------------------------+
| Hubungi kami     |     |            Hubungi kami                    |
| line             |     |            line (centred, 720 max)         |
| [WhatsApp]       |     |   [WhatsApp]  [Instagram]  [Petunjuk Arah] |
| [Instagram]      |     |   ---------------------------------------  |
| [Petunjuk Arah]  |     |   name · address · draf note (small)       |
| footer small     |     |                                            |
+------------------+     +--------------------------------------------+
```

## 8. Motion
**Signature (hero, on load, once):** the slice `<g>` in the hero SVG animates *from* tucked into the
cake (x +46, y −12, rotation +6°, in SVG user units, origin at the slice tip) to its authored
pulled-out position; its shadow ellipse fades 0 → 1 alongside. 0.9s, `expo.out`, 0.25s delay.
The hero text never animates; it is readable at first paint. Reduced motion / no JS: slice already out, no motion.
**Supporting:** one `<Reveal>` per section content block (sections 2–6): 20px, 0.6s, `power2.out`, once.
Not per card, not per menu column. Buttons and links: colour change 150ms, press `translateY(1px)`.
No hover motion on non-interactive things (arches, illustrations).
Motion tokens for `lib/motion.ts`: `reveal: 0.6`, `hero: 0.9`; rest as starter.

## 9. What makes it this shop
1. The cheesecakes stand in **terracotta arches on one shelf**, the orange arched shelving behind the real counter.
2. The page **walks the room**: sage ceiling (hero), white walls, walnut tables (menu band), terrazzo floor (visit), a pink rose on the table.
3. The signature is **one slice leaving a whole cheesecake**, the shop's own story, next to *today's* hours in Jakarta time and the honest "busy on Sunday, small parking" notes.

## 10. Avoid
- The AI bakery default: cream ground, italic high-contrast serif, terracotta as a scattered accent. Ground is white wall and sage; terracotta is only arches.
- Pastel-pink cake shop: no script fonts, no pink fields; rose stays a small accent.
- Painting the room: no full-room illustration, no lanterns strung across sections, no gradients or glass.
- Template tells: split hero with a badge row; equal shadowed cards; icon tiles for facilities; small tracked uppercase labels; dot-leader menus with right-aligned prices.
- Arch overuse: arches only on the hero, the 5 niches + whole cake, and the room vignette. Never on buttons, the map, the menu or cards.
- Sage everywhere: two sage fields only. No walnut-soft or terracotta text on sage.
- Illustrations drifting in angle or style, emoji, clip-art icons. Slices too small in their arches (they read as orange cards).
- Reviews in quotation marks or attributed; star widgets; English leftovers in the banner, buttons or alt text.
- Young Serif creeping into body text or buttons (it's heavy; headings and names only).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (product names, group titles and paraphrases are lead, under head)
- [x] Max content width set (1200); no detail pinned far from what it describes (prices, price notes and hours within 8px / a 9rem column)
- [x] Every section has a desktop wireframe that uses the width on purpose (contact is deliberately narrow and centred)
- [x] At least 3 products shown (11 illustrated: hero cake, 5 slices, whole cake, 4 cafe items)
- [x] Within motion-rules.md (one signature, section-level reveals, transform/opacity, reduced motion = none, React Bits: none)
- [x] Brief is decisions, not essays (2–4 pages)
