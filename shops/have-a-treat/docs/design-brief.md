# Design brief: Have A Treat

## 1. Concept
The page is the shop's own wall: cream plaster with teak arched niches holding the treats and
a felt letterboard as its notice board, so it feels like their small arched nook rather than a
generic cafe template.
Signature moment: on load, the hero letterboard spells "BUKA HARI INI / 10.00–22.00" letter by
letter, each white letter dropping into its felt groove.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts, menu, hours, mottos; arch + wave + letterboard motifs from owner-1 and the customer photos (reference only); owner-1 hero, owner-2 breakfast. |
| impeccable | Persuade mode. Seven candidates from the shop's world (letterboard, arched teak niche, cake display, wire-script wall, wave cushion, cake box, Instagram grid); rut named: cream + serif display + terracotta cafe page. Chose the shop's own objects as the system. Full-palette colour strategy, faces from their logo and wall, no eyebrows, flat geometric illustration only. Scripts not run (they would write outside `docs/`), so no concept-seed roll. |

## 3. Palette (6 named colours)
Scene: a couple in East Jakarta checks the page on a phone, often in the evening, before heading
out; the shop glows warm at night. So: light plaster by day, a dark felt close for the visit.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plaster` | `#F5EDE0` | page ground, text on teak and felt | felt on plaster 14.5:1 |
| `sand` | `#EADCC6` | niche interiors, breakfast and reviews bands | felt on sand 12.5:1; teak on sand 4.8:1 |
| `teak` | `#8A4F26` | niche frames, drinks band, primary button, script motto, focus ring on light | plaster on teak 5.6:1; teak on plaster 5.6:1 |
| `felt` | `#211C18` | body text, letterboard felt, closing band | plaster on felt 14.5:1 (letterboard letters are plaster) |
| `amber` | `#F2AE4B` | bulb glow: hours and button on felt, focus ring on teak and felt | amber on felt 8.8:1; amber on teak 3.4:1 (focus ring only); never text on light grounds (1.65:1) |
| `lilac` | `#BBA5DA` | flower touch: cake-of-the-day niche, `::selection` | felt on lilac 7.6:1; decorative only on plaster (1.9:1) |

Illustration-only tints (derived, never for text): cocoa `#5A3A26`, sponge `#B98252`,
cream `#F7E6C4`, toast `#D9963F`, matcha `#8DA65A`, peach `#F2A07B`, cup white `#FBF7F0`.

## 4. Type
Fredoka (variable, `wght` 300–700, `wdth` 75–125) for everything: its soft round lowercase
matches the "have a treat" logo. Sacramento (400) once, for "It's all good": a thin monoline
script like the wire lettering on their wall. Both via `next/font/google`, `subsets: ['latin']`,
`display: 'swap'`, Fredoka with `axes: ['wdth']`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 2.571rem + 3.81vw, 6rem)` (56→96px) | hero name only, Fredoka 600, lowercase via CSS, always two lines "have a / treat", lh 1.05, tracking -0.02em |
| `--step-head` | `clamp(1.875rem, 1.55rem + 1.333vw, 2.75rem)` (30→44px) | section headings, Fredoka 600, lh 1.1; also "It's all good" in Sacramento, teak |
| `--step-lead` | `clamp(1.4375rem, 1.368rem + 0.286vw, 1.625rem)` (23→26px) | hero line, product names, review paraphrases, letterboard letters (Fredoka 500, `wdth` 75, caps, tracking 0.08em), lh 1.3 |
| `--step-body` | `1.125rem` (18px) | running text, product notes, list items, Fredoka 400, lh 1.55, max 60ch |
| `--step-small` | `0.875rem` (14px) | price lines, photo labels, footer, review source note, Fredoka 500, lh 1.45 |

Ratios: small→body 1.29, body→lead 1.28 / 1.44, lead→head 1.30 / 1.69, head→display 1.87 / 2.18
(phone / desktop; all clamps run 390→1440 so ratios hold in between).

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | `75rem` (1200px), 12-column grid, column gap 24px desktop / 16px phone |
| Page margins phone / desktop (`--gutter`) | 20px / 40px: `clamp(1.25rem, 0.786rem + 1.905vw, 2.5rem)` |
| Section padding phone / desktop (`--section-y`) | 64px / 112px: `clamp(4rem, 2.886rem + 4.571vw, 7rem)`; hero top padding 24px / 48px |

- **Proximity:** every product name sits 12px under its niche or illustration, its note 6px
  under the name. Price lines sit directly under the section intro they qualify. Photo labels on
  owner-2 sit within 24px of the item, short 1px felt leader.
- **Wide screens:** every section is a two-column or asymmetric grid at 1440 (see §7). No centred
  narrow sections.
- **Lists:** product names `--step-lead`, notes and list items `--step-body`.
- **Arches:** only on photo frames and product niches (radius = half the width on top corners).
  Buttons are pills, map and tiles use 16px radius. Card radii stay 12–16px.
- **Wave rule:** three parallel felt sine stripes (stroke 5px, wavelength 32px, amplitude 5px,
  6px apart, 28px tall), container width, `aria-hidden`. Used twice: under the hero, and at the
  top of the felt close (in plaster).

## 6. Products on the page
Nine products shown, eight from reviews plus one [MOCKUP]:
- Photo (owner-2): omelette breakfast, overhead, 1:1, five components labelled on desktop.
- Flat geometric SVG illustrations, one set (`components/art/treats.tsx`, viewBox 240×200, shared
  baseline, no strokes except the dome, no gradients, one flat shadow ellipse, 6-unit corner radius,
  tints from §3): tiramisu (side elevation: cocoa top with dust dots, whipped-cream dollop of three
  circles, cream and sponge layers, on a saucer), lemon cheesecake (cream body, biscuit crust band,
  small amber zest curl), french toast (two offset golden slabs, sugar dots), cake of the day
  [MOCKUP] (cake under a glass dome outline on a teak stand, in a lilac niche), cappuccino (cup and
  saucer), matcha latte (glass: milk over matcha band), HP Potion (tall glass, two peach bands,
  bubble circles), chicken wings (top-down: three rounded drumettes in a bowl, matching owner-2's
  overhead view).
- Each illustration has `role="img"` and an Indonesian `aria-label`, and is listed in the owner
  checklist as a stand-in for a real photo.

## 7. Sections
Hero: name, mood line, letterboard hours, directions. Photo owner-1 in a tall arch (4:5, cover, `object-position: 50% 45%` so the niche and letterboard stay in).
```
Hero: phone (390)                 Hero: desktop (1440), container 1200
+--------------------+            +-------------------------------------------------+
| draft banner       |            | draft banner                                    |
| have a      (disp) |            | have a              (display)   .-----------.   |
| treat              |            | treat                          /  owner-1    \  |
| Mampir sebentar... |            | Mampir sebentar buat ... (lead)|  arch 4:5    | |
|  (lead, 3 lines)   |            | It's all good (script, teak)   |  5 cols      | |
| It's all good      |            | +=letterboard=+                |  ~470x588    | |
| +=letterboard====+ |            | | BUKA HARI INI|               |              | |
| | BUKA HARI INI  | |            | | 10.00-22.00  |               |              | |
| | 10.00-22.00    | |            | +==============+               |              | |
| +================+ |            | [Petunjuk Arah] [Lihat Instagram]              | |
| [Petunjuk][Insta]  |            | Ruko The Boulevard No. 30, JGC (small)         | |
| Ruko The Boulevard |            |  <-------- 7 cols -------->    +--------------+ |
|   .----------.     |            +-------------------------------------------------+
|  /  owner-1   \    |            ~~~~~~~~~~~~~~~ wave rule ~~~~~~~~~~~~~~~~~~~~~~~~~
+--------------------+
```
Yang manis-manis: desserts in teak niches; tiramisu gets the big niche (two reviewers singled it out).
```
Sweets: phone                     Sweets: desktop
+--------------------+            +-------------------------------------------------+
| Yang manis-manis   |            | Yang manis-manis (head)                         |
| intro (body)       |            | intro (body) / Kue mulai Rp 35rb [M] (small)    |
| Kue mulai 35rb [M] |            |  .---------.     .------.  .------.  .------.   |
|  .--------------.  |            | / tiramisu  \   /cheese- \/ french \/ kue    \  |
| /   tiramisu     \ |            | |  niche     |  | cake   || toast  || hari ini| |
| |   niche 342w   | |            | |  5 cols    |  +--------++--------++--lilac--+ |
| +----------------+ |            | |  ~470x520  |  Cheesecake French   Kue hari   |
| Tiramisu (lead)    |            | +------------+  lemon      toast    ini [M]    |
| note (body)        |            | Tiramisu (lead) note       note     note       |
| [niche] Cheesecake |            | note (body)     <------ 7 cols, 3 niches ---->  |
|  120w   lemon/note |            +-------------------------------------------------+
| [niche] French t.  |
| [lilac] Kue hari   |
|   ini [M] / note   |
+--------------------+
```
Sarapan & makan (sand band): the owner's breakfast photo, annotated.
```
Breakfast: phone                  Breakfast: desktop
+--------------------+            +-------------------------------------------------+
| Sarapan & makan    |            | +----------------------+  Sarapan & makan       |
| Sarapan & makan    |            | | owner-2, 1:1, 6 cols |  Sarapan & makan mulai |
|  mulai Rp 60rb [M] |            | |  (bacon) (tomat ...) |   Rp 60rb [M] (small)  |
| +----------------+ |            | | (sosis)   (kentang)  |  Omelette breakfast    |
| | owner-2 1:1    | |            | |    (omelet jamur)    |  components (body)     |
| | (no labels)    | |            | |  chips <=24px away   |  all day from 10.00 [M]|
| +----------------+ |            | +----------------------+  ---- hairline ----    |
| Omelette breakfast |            |                           [wings 120] Chicken   |
| components (body)  |            |                           svg        wings/note |
| all day [M]        |            +-------------------------------------------------+
| [wings] Chicken w. |
+--------------------+
```
Kopi & minuman (teak band, plaster text): three drinks standing on one shelf line.
```
Drinks: phone                     Drinks: desktop
+--------------------+            +-------------------------------------------------+
| Kopi & minuman     |            | Kopi &         |  [cup]     [glass]   [tall]   |
| intro              |            | minuman (head) | ==========plaster shelf======= |
| Kopi mulai 30rb[M] |            | intro (body)   |  Cappuccino Matcha    HP       |
| [cup 88] Cappucc.  |            | Kopi mulai     |  note       latte     Potion   |
| -------- shelf     |            | Rp 30rb [M]    |             note      note     |
| [glass] Matcha l.  |            |  4 cols        |  8 cols, 3 equal columns       |
| [tall] HP Potion   |            +-------------------------------------------------+
+--------------------+
```
Sudut favorit: the room, in words (only owner-1 exists and it's already in the hero). Quiet passage after the teak band.
```
Room: phone                       Room: desktop
+--------------------+            +-------------------------------------------------+
| Sudut favorit      |            | Sudut favorit (head)    | Cocok buat (lead)     |
| paragraph (body)   |            | paragraph about the     | ~ kencan berdua       |
| Cocok buat (lead)  |            | room (body, 60ch)       | ~ nongkrong bareng    |
| ~ kencan berdua    |            |  6 cols                 | ~ keluarga kecil      |
| ~ nongkrong ...    |            |                         | ~ sedikit kerjaan     |
+--------------------+            +-------------------------------------------------+
```
Kata mereka (sand band): rating fact as a plain line, four paraphrases, no quotation marks, no names. "~" = small wave bullet.
```
Reviews: phone                    Reviews: desktop
+--------------------+            +-------------------------------------------------+
| Kata mereka        |            | Kata mereka (head) | ~ tiramisu... | ~ cappucc.  |
| 4,8 dari 183 ulasan|            | 4,8 dari 183       |   (lead)      |   (lead)    |
|  di Google (body)  |            | ulasan di Google   | ~ estetik,    | ~ kencan,   |
| ~ paraphrase (lead)|            | Ulasan Google,     |   cheesecake  |   keluarga  |
| ~ paraphrase       |            | diparafrasekan(sm) |  2x2, 8 cols                |
| ~ ... (4)          |            |  4 cols            |                             |
+--------------------+            +-------------------------------------------------+
```
Kunjungi kami (felt band begins, plaster wave rule on top).
```
Visit: phone                      Visit: desktop
+--------------------+            +-------------------------------------------------+
| ~~ wave (plaster)  |            | ~~~~~~~~~~~~~~ wave rule (plaster) ~~~~~~~~~~~~~ |
| Kunjungi kami      |            | Kunjungi kami (head) | +----------------------+ |
| address (body)     |            | address (body)       | | map iframe 16:10     | |
| Setiap hari        |            | Setiap hari          | | radius 16, lazy      | |
|  10.00-22.00 amber |            |  10.00-22.00 (lead,  | |                      | |
| [Petunjuk Arah]    |            |  amber)              | +----------------------+ |
| [map 4:3]          |            | [Petunjuk Arah]      |  7 cols                  |
+--------------------+            +-------------------------------------------------+
```
Hubungi kami (same felt band) and footer.
```
Contact: phone                    Contact: desktop
+--------------------+            +-------------------------------------------------+
| Hubungi kami       |            | Hubungi kami (head)     |  +==================+  |
| [Telepon 0812...]  |            | Telepon 0812-8434-6371 >|  | BETTER DAYS      |  |
| [Instagram @...]   |            | Instagram @haveatreat_ >|  | ARE COMING       |  |
| [WhatsApp ... [M]] |            | WhatsApp: pesan, meja [M]  +==================+  |
| +=letterboard====+ |            |  5 cols, 56px rows      |  letterboard, 7 cols   |
| | BETTER DAYS... | |            | footer line (small)                             |
| +================+ |            +-------------------------------------------------+
| footer (small)     |
+--------------------+
```
Contact rows: full-width 56px links on phone; on desktop the arrow sits 8px after the text, not
at the row's edge.

## 8. Motion
Signature moment: hero letterboard. 150ms after mount, each letter goes from `y: -0.4em,
rotate: -4deg, opacity: 0` to rest, 0.38s, `power3.out`, stagger 0.03s line by line, whole
sequence about 1.05s. Only the letters move; name, line, photo and buttons are static from first
paint (LCP stays the photo or name). Letters are `aria-hidden`; an sr-only line carries the text.
Reduced motion or JS off: letters at rest, no movement. A CSS failsafe shows them after 1.2s if
GSAP never runs.
Supporting: each section below the hero fades up 20px once (starter `Reveal`, 0.6s,
`power2.out`). Buttons: colour shift + 1px lift on hover, 180ms; niche illustrations lift 4px on
hover (pointer: fine only), 200ms. Starter motion tokens otherwise; add `letterDrop`
(0.38s, stagger 0.03, `power3.out`) to `lib/motion.ts`.

## 9. What makes it this shop
1. The letterboard is their own: it sits on their shelf in owner-1. Here it gives today's hours in
   the hero and signs off with their "Better days are coming".
2. Desserts sit in teak arched niches cut like their bookshelves; tiramisu gets the biggest niche
   because two reviewers singled it out.
3. Their own overhead breakfast photo, labelled with its actual components; the wave cushion as
   the divider; "It's all good" in thin wire-like script, once.

## 10. Avoid
- The category page: cream + serif display + terracotta, full-bleed photo with dark overlay and
  centred text, three equal icon cards for the menu.
- Arch overload: no arch buttons, arch map, or arch section edges. One dominant move.
- Tipping into a children's party: lilac stays under ~5% of the surface, no emoji, no sparkles,
  no bounce or elastic easing.
- Illustration drift: no sketchy, shaded, 3/4-perspective or textured food art. If an
  illustration reads poorly in screenshots, simplify it rather than add detail.
- Letterboard gimmick: no scramble, flicker or repeat. It plays once and stays legible.
- Script overuse: Sacramento only for "It's all good", never below `--step-head`.
- Wave pattern as a full background (moiré on screens). It's a 28px rule, twice.
- Eyebrows above headings, section numbers, big-number rating badges, star icons, quotation
  marks around paraphrases, reviewer names.
- Overselling it as a work cafe, or headlining the critical notes in review 1.
- Dark close as "neon on black": amber marks only the hours and the button.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (min ratio 1.28; product names and letterboard at lead, below head)
- [x] Max content width set; no detail pinned far from what it describes (1200px; names 12px under niches; photo labels ≤24px; contact arrows 8px after text)
- [x] Every section has a desktop wireframe that uses the width on purpose (all 8 are two-column or asymmetric)
- [x] At least 3 products shown (food and product shops): 9 (1 photo, 8 illustrations)
- [x] Within motion-rules.md (one signature moment; transform/opacity only; section-level reveals; no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
