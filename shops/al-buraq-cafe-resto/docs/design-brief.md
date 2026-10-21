# Design brief: Al Buraq Cafe & Resto

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
The site is an evening inside Al Buraq, in the order a visit goes: rose plaster and red velvet
under stained-glass lanterns, a look down at the white table, then into the slate-blue second
room where the groups sit. The room is what regulars praise and come back for, so the room is
the page.
Signature moment: on load, the hero lantern lights up tier by tier in its own amber, cobalt,
emerald and ruby glass and throws its patterned light across the plaster, the way the room
comes on at 15.00.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, tone, Indonesian copy; palette and arches from photo-3, slate-blue second room and long tables from photo-1, the three dishes and how they sit on the table from photo-2 (all reference only, never on the site). |
| impeccable | Persuade mode; new-world flow done by hand (the launcher and concept-seed were not run: they download a binary and write outside `docs/`). The rut is named as black-and-gold "Arabian nights" and the plain white café template. Seven candidates: lantern light, arched niches, patchwork floor tiles, velvet sofa, Condet bilingual shop signs, the bukber long table, the WhatsApp booking chat. Picked: one world, the room itself, with lantern light as the signature and the long table carrying the products. Full palette with committed regions; light ground chosen from the use scene; faces from outside the overused list; craft-floor bans; one authored focal sequence. |

Use scene (sets light vs dark): a Condet regular checks a phone in late-afternoon light before
heading out, so the page uses a light rose-plaster ground, with velvet and slate bands for the
indoor evening.

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plaster` | #EBD6CB | page ground (the rose walls) | ink on it 12.3:1, velvet on it 8.5:1 |
| `niche` | #D2AC9C | arch recesses, map frame, hairlines on plaster | ink 8.3:1, velvet 5.8:1; 1.48:1 vs plaster (surface only, never text) |
| `velvet` | #6B1526 | headings on plaster, primary button, Menu and closing bands | linen on it 11.0:1, plaster on it 8.5:1 |
| `slate` | #3D4C60 | the second room: Datang ramai-ramai band | linen on it 8.1:1, plaster on it 6.3:1 |
| `ink` | #2B1518 | body text, iron frame of the lantern and sconce | 12.3:1 on plaster, 15.9:1 on linen |
| `linen` | #FBF5F0 | table tops, plates, text on velvet and slate | velvet on linen 11.0:1 |

Illustration-only tints (SVG fills, never text, buttons or backgrounds): glass amber #E2A23A,
cobalt #2E5AA8, emerald #2F8A68, ruby #B8303F; tablecloth #A9B3BF (4.1:1 on slate); food: fried
#C98A3A, pastry #E7C27F, lettuce #6E9F45, chilli #C2392F, mayo #F2E6B5, lemon #F2D04B, mint
#3F8F55, rice #E5B55C, meat #73351F, foil #CFC9C4.

## 4. Type
Rakkas 400 (display and section headings): the Latin side of an Arabic display face, with
calligraphic wedge terminals. It gives the brief's warm, ornamental voice, like a Condet shop
sign, without the "Arabian nights" costume. Readex Pro (variable 400/500/600) for everything
else: drawn alongside Arabic, open and clear for Indonesian at small sizes.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 2.2rem + 5.2vw, 6rem)` (56px @390, 96px @1440) | hero name only, Rakkas, two lines |
| `--step-head` | `clamp(2.125rem, 1.6rem + 1.9vw, 3.25rem)` (34 / 52) | section headings, Rakkas |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.45vw, 1.625rem)` (22 / 26) | hero line, Suasana lead, menu group names, praise, close rows; Readex 500 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.15vw, 1.125rem)` (17 / 18) | running text, list items, buttons; Readex 400 (buttons 500) |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)` (13 / 14) | dish labels, sources, price note, footer, banner |

Ratios @390: 1.65 / 1.55 / 1.29 / 1.31. @1440: 1.85 / 2.0 / 1.44 / 1.29. All ≥ 1.25.
`--leading-display: 1.05` (the name always breaks into "Al Buraq" / "Cafe & Resto"),
`--leading-head: 1.1`, `--leading-body: 1.55`. Measured in Rakkas: "Cafe & Resto" is 291px at
56px (phone line 350px) and 499px at 96px (hero column ≈ 680px). Rakkas never sets lists,
labels or buttons; tracking 0; no all-caps labels.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (desktop from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Shop specifics: 12-column grid with a 24px gap from 1024px. Dish labels sit 8–16px under
  their dish. A menu group's price follows its name on the same line ("Nasi · Rp 45rb–75rb").
  The praise source sits directly under its line. Light dapples stay on the lantern side of
  the hero; none sit behind the hero line or buttons above 0.2 alpha.

## 6. Products on the page
Four products, drawn as flat top-down SVG illustrations (circles, triangles, rounded rects,
no shading, no perspective, no hands or people), copied from the photos:
1. **Fried snack platter** (photo-2): white plate, scalloped lettuce, 3 risoles (rounded rects,
   fried tint), 3 sambosa triangles (pastry tint), two dip bowls (mayo, chilli). Label "Piring gorengan".
2. **Grilled flatbread with meat and fries in tomato sauce** (photo-2): plate with 4 wedges, each
   with 2–3 char marks; white bowl of chilli-red sauce with meat chunks and fry sticks. Label
   "Roti panggang & daging saus tomat".
3. **Iced lemon-mint tea** (photo-2): ribbed glass seen from above (rim ring with 24 rib ticks),
   amber tea, lemon wheel, two mint leaves. Label "Es teh lemon mint".
4. **Group rice tray with iced-tea jug** (photo-1): foil tray of spiced rice with meat pieces;
   jug from above with handle. Repeated along the long table. Labels "Nampan nasi rombongan",
   "Teko es teh".

Products 1–3 sit together on one linen table in Menu andalan, arranged as in photo-2 (platter in
front, flatbread back-left, glass back-right). Product 4 appears on the long table in Datang
ramai-ramai. Every label is HTML text marked `data-mockup`, because the names are ours. Salted
Egg Chicken is listed in the text menu, not drawn. No owner photos exist, so there are no photos.

## 7. Sections
Grounds in order: plaster, plaster, velvet, slate, plaster, plaster, velvet.

**Hero**: recognition and directions in one screen. The lantern hangs from the top edge on a chain;
on phone "Al Buraq" may sit beside the lantern body, and "Cafe & Resto" starts below its finial. The lantern never overlaps text.
```
Hero: phone (390)                 Hero: desktop (1440), min-height min(88svh, 820px)
+--------------------+            +----------------------------------------------------+
| draft banner       |            | draft banner                                       |
|               |    |            |                              *    |    .    *      |
|            [<>] *  |            |                           .      [<>]      .       |
| Al Buraq   [##]    |            |  Al Buraq                    *  [####]  *          |
|            [\/]  . |            |  Cafe & Resto                   [####]     .  *    |
| Cafe & Resto       |            |                              .  [\##/]  *          |
| Lentera, sofa      |            |  Lentera, sofa merah, dan teh     \/       .       |
| merah, dan teh ... |            |  hangat di Jalan Raya Condet    *     .     *      |
| Buka hari ini      |            |  Buka hari ini 15.00-24.00 · Jl. Raya Condet No.37 |
| 15.00-24.00        |            |  [Petunjuk Arah]  [WhatsApp]                       |
| [Petunjuk Arah   ] |            |  text cols 1-7    lantern cols 9-11, dapples 8-12  |
| [WhatsApp        ] |            +----------------------------------------------------+
+--------------------+
```

**Suasana**: the room. NicheScene: an arch in `niche`, an iron sconce with an amber pane, the red sofa back across the bottom.
```
Suasana: phone                    Suasana: desktop
+--------------------+            +----------------------------------------------------+
| Suasana            |            |   .--------.        Suasana                        |
| Ahlan wa sahlan!   |            |  /  niche   \       Ahlan wa sahlan! Duduk santai, |
| Duduk santai, ...  |            |  |  [sconce] |      pesan teh, ngobrol sampai      |
|    .------.        |            |  |    ()     |      malam. (lead, max 32ch)        |
|   / sconce \       |            |  |           |      - Lentera kaca warna-warni ... |
|   |   ()   |       |            |  [===velvet sofa==]  - Sofa beludru merah ...      |
|  [==sofa====]      |            |   cols 1-5, arch     - Nyaman untuk duduk lama     |
| - Lentera kaca ... |            |   ~420 x 540         - Bisa isi daya ponsel, ...   |
| - Sofa beludru ... |            |                      cols 7-12                     |
| - Nyaman ...       |            +----------------------------------------------------+
| - Isi daya ...     |
+--------------------+
```

**Menu andalan** (velvet): real dishes first, then the wider menu. A linen table on the velvet, like the white tables among the red sofas.
```
Menu: phone                       Menu: desktop
+--------------------+            +----------------------------------------------------+
| Menu andalan       |            | Menu andalan         +---------------------------+ |
| Camilan, roti, ... |            | Camilan, roti, ...   |  (flatbread)    (glass)   | |
| +----------------+ |            |                      |  Roti panggang  Es teh    | |
| |(bread)  (tea)  | |            | Nasi · Rp 45rb-75rb  |  & daging ...   lemon mint| |
| | Roti..  Es teh | |            |  Nasi Kebuli Kambing |       (platter)           | |
| |   (platter)    | |            |  Nasi Mandi Ayam ... |       Piring gorengan     | |
| | Piring gorengan| |            | Roti & camilan · ... +---------------------------+ |
| +----------------+ |            |  Roti Maryam ...      linen table, cols 6-12,      |
| Nasi · Rp 45-75rb  |            | Minuman · Rp 10rb-25rb   spans both rows           |
|  Nasi Kebuli ...   |            |  Teh Susu Arab ...                                 |
| Roti & camilan ... |            | Harga masih contoh.  (cols 1-5)                    |
| Minuman ...        |            +----------------------------------------------------+
| Harga masih contoh.|
+--------------------+
```

**Datang ramai-ramai** (slate, the second room): group bookings. The long table runs the full container width.
```
Group: phone                      Group: desktop
+--------------------+            +----------------------------------------------------+
| Datang             |            | Datang ramai-ramai?      | Paket rombongan 5-10    |
| ramai-ramai?       |            | Meja panjang kami siap.  | orang, mulai Rp 350rb   |
| Meja panjang ...   |            | Buka bersama, arisan ... | Pesan sehari sebelumnya |
| Buka bersama, ...  |            | (cols 1-6)               | lewat WhatsApp          |
| Paket rombongan... |            |                          | [Pesan via WhatsApp]    |
| [Pesan via WA    ] |            |                          | (cols 8-12)             |
|====================|            |==[tray]===(jug)===[tray]===(jug)===[tray]==========|
| [tray] (jug) [tr.. |            |   Nampan nasi     Teko es teh     (1200 x 220)     |
| Nampan.. Teko..    |            +----------------------------------------------------+
+--------------------+
```

**Kata mereka**: paraphrased praise, no names, no quote marks. A quiet passage after two dark bands.
```
Praise: phone                     Praise: desktop
+--------------------+            +----------------------------------------------------+
| Kata mereka        |            | Kata mereka           | Pelayannya ramah, mau      |
| 4,3 dari 465       |            | 4,3 dari 465 ulasan   | membantu, dan cepat ...    |
| ulasan di Google   |            | di Google             | ulasan Google              |
| Dirangkum dari ... |            | Dirangkum dari ulasan |----------------------------|
|--------------------|            | Google.               | Tempatnya nyaman, betah    |
| Pelayannya ramah...|            | (cols 1-4)            | duduk lama.                |
| ulasan Google      |            |                       |----------------------------|
|--------------------|            |                       | Harganya bersahabat, ...   |
| Tempatnya nyaman...|            |                       | (cols 6-12, lead size)     |
| Harganya ...       |            +----------------------------------------------------+
+--------------------+
```

**Kunjungi kami**: finding the place. The map sits in an arch like their wall niches.
```
Visit: phone                      Visit: desktop
+--------------------+            +----------------------------------------------------+
| Kunjungi kami      |            |    .-----------------.      Kunjungi kami          |
| Jl. Raya Condet    |            |   /                   \     Jl. Raya Condet No.37, |
| No.37, Batu Ampar, |            |   |   map (iframe)    |     Batu Ampar, Kramat     |
| Kramat Jati ...    |            |   |   in ArchFrame    |     Jati, Jakarta Timur    |
|   .----------.     |            |   |   ~640 x 480      |     Senin-Minggu           |
|  /    map     \    |            |   |___________________|     15.00-24.00            |
|  |  4:5 arch  |    |            |   (cols 1-7)                Buka setiap hari       |
|  |____________|    |            |                             0856-7855-946          |
| Senin-Minggu       |            |                             [Petunjuk Arah]        |
| 15.00-24.00        |            |                             (cols 9-12)            |
| [Petunjuk Arah   ] |            +----------------------------------------------------+
+--------------------+
```

**Hubungi kami** (velvet close): one last easy action. Action rows instead of a button row; in
each row the detail follows its label 16px later, and only the arrow sits at the row's end.
```
Close: phone                      Close: desktop
+--------------------+            +----------------------------------------------------+
| Sampai ketemu      |            | Sampai ketemu          | WhatsApp  0856-7855-946  ->|
| malam ini          |            | malam ini              |---------------------------|
|--------------------|            | (head, cols 1-6)       | Telepon  0856-7855-946   ->|
| WhatsApp  0856.. ->|            |                        |---------------------------|
| Telepon   0856.. ->|            |                        | Petunjuk Arah  Jl. Raya   |
| Petunjuk Arah   -> |            |                        | Condet No.37  -> (7-12)   |
|--------------------|            |----------------------------------------------------|
| footer (small)     |            | Al Buraq Cafe & Resto · alamat · Situs draf        |
+--------------------+            +----------------------------------------------------+
```

## 8. Motion
**Signature: "lampu menyala"** (hero, on load, once). The lantern SVG has 4 tiers of panes:
base diamonds, main pointed-arch panes, upper band and crown triangles. Each pane has an unlit
base that is always visible (glass tint at 30% over the ink frame) and a lit overlay. From 0.2s
the overlays fade in tier by tier, bottom to top: opacity 0→1, 0.35s each, 0.15s stagger,
`power2.out`, done at about 1.0s. From 0.45s the LanternLight layer goes from opacity 0 to 1 and
scale 0.94 to 1 around the lantern's centre, over 0.9s with `expo.out`, done at about 1.35s. Then
nothing moves: no loop, flicker, sway or twinkle. Text, hours and buttons show from the first
paint. Reduced motion or no JS: lantern lit and light in place, because all tweens are GSAP
`from`.

**Supporting:** the starter's `Reveal` on three blocks only: the Suasana block, the Menu table
figure and the long-table strip (20px, 0.7s, `power2.out`, once). Kata mereka, Kunjungi kami and
Hubungi kami stay still. Buttons and action rows get a 180ms ease-out colour change and a 1px
press nudge (150ms). Lenis stays at starter defaults.

`lib/motion.ts` tokens:
`duration = { press: 0.15, ui: 0.18, reveal: 0.7, hero: 0.9, pane: 0.35 }`,
`stagger = { paneTier: 0.15 }`, `delay = { hero: 0.2, light: 0.45 }`,
`ease` unchanged, `distance = { reveal: 20 }`, `scale = { lightFrom: 0.94 }`.

## 9. What makes it this shop
1. The lantern is their lantern: a hexagonal body with pointed-arch panes in the four glass
   colours from photo-3, and dapples copied from the light lace on their ceiling (photo-1). It
   lights up the way the room does at 15.00.
2. Two rooms, two grounds. Rose plaster and red velvet for the main room; slate blue for the
   second room, where groups gather at long tables (photo-1). The group section changes room.
3. The menu table is the table in photo-2, laid out as photographed. The map sits in an arch
   like the niches on their walls.

## 10. Avoid
- Black-and-gold "Arabian nights": gold or gradient text, arabesque borders, mosque domes,
  crescent-and-star clip art (their ceiling ornaments stay out of the UI), magic lamps, desert
  imagery; also the green-and-gold Ramadan-card look.
- Shisha pipes, tobacco tins or smoke anywhere, even as decoration.
- Generic scaffolds: three equal icon cards, eyebrow labels above headings, section numbers,
  a big rating number as a hero metric, a full-bleed photo hero with a dark overlay.
- Concept risks:
  - The lantern turning into clip art: keep it flat, geometric and drawn from the photos, with
    one lantern in the hero and only the small sconce elsewhere.
  - The dapples turning into confetti: keep them at or below 0.38 alpha, on the lantern side,
    still after the moment.
  - Jewel tints leaking into buttons or headings.
  - Plaster drifting to cream and velvet to terracotta, which is the generic AI
    cream-serif-terracotta look. Plaster stays visibly rose; velvet stays deep wine.
  - Rakkas used for lists or labels.
  - Shaded or perspective food, or people at the long table.
  - Invented Arabic script, including any Arabic rendering of the name.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
