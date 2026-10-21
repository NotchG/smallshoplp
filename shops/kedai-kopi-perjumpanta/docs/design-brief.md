# Design brief: Kedai Kopi Perjumpanta

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"Dinding hijau."** The page is the kedai seen from the street: their lime-green wall as the
ground, the corrugated canopy across the top, the cloth "SEDIA" banner hung on the wall as the
menu, and a tall glass of bandrek on a lime saucer on a white-topped table.
**Signature moment:** on load, the glass of Bandrek Susu is set down on its lime saucer in the
hero, the saucer gives a tiny clink, and three wisps of steam rise once (about 2 s).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Karo community and hometown feeling as the story; 24 hours; the banner's exact items; the pinned palette (lime walls and saucers, white tops, brown wood, red-and-black banner) and type mood; "not cosy" warning; Bahasa Indonesia, "kamu/kita" |
| photo-1..3 (reference only) | Wall and saucer lime, canopy and bulbs, the SEDIA banner layout, the night street of tables. Not shown, not traced. No owner photos exist |
| impeccable | Persuade mode; the brief pins the world, so it wins and is played at full range, not its softest version. Committed colour (lime owns about 45% of the page); faces off its default list; no eyebrows, cards or gradient text; illustration as crisp geometry; one authored focal motion drawn from the product |
| Direction derivation | Seven candidates by resonance: 1 lime wall and saucer (ground), 2 cloth SEDIA banner (menu), 3 canopy with bare bulbs (hero frame and close), 4 white-topped trestle table and wooden benches (hero table, product band), 5 night street of tables under white lights (dark sections), 6 uis Karo textile (a [MOCKUP] selvedge band only), 7 the Karo roof with buffalo horns (the literal reading; declined as costume). Raise kept from the banner: one serif voice, red only on the cloth. Raise from the night street: the dark sections are flat night, no glow. Derived by hand: the launcher's `concept-seed` and decision page write outside `docs/` and need a live user, so they were not run (seed: none) |
| motion-rules.md | One signature in the hero, section-level reveals, transform and opacity only, zero React Bits |

## 3. Palette (6 named colours)
Strategy: Committed. Limau owns the hero, the Sedia wall and the close; tinta owns the two
night sections. Scene: regulars check this on a phone, often at night, and the kedai is the
lit lime room seen from the dark street, so the page is bright with night bands, not dark.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `limau` (wall and saucer) | #A8D33A | Hero, Sedia wall, close; saucers and plates; text and buttons on tinta | tinta on limau 9.87 ✓; limau on tinta 9.87 ✓; kain on limau 1.6 ✗, never |
| `tinta` (banner ink, night) | #1D1B16 | Body text on light grounds, canopy, Rasa and Kunjungi grounds, footer, primary buttons on limau | kain on tinta 15.75 ✓ |
| `kain` (banner cloth, table top) | #F6F5EF | SEDIA banner, Kata mereka ground, table top, text on tinta and kayu, draft banner | tinta on kain 15.75 ✓ |
| `merah` (SEDIA red) | #B8261C | "SEDIA" and prices on the banner, the uis band, the sambal dot in the Lontong drawing. Nowhere else | merah on kain 5.77 ✓; on limau 3.61 and on tinta 2.73, never |
| `kayu` (bench wood) | #6B4A30 | Product table band; trestle legs | kain on kayu 7.26 ✓; limau on kayu 4.55 ✓ (prices) |
| `gula` (bandrek, palm sugar) | #B4692F | Illustration fills only (drink, broth, yolk). Never text | graphic on kain 3.84 ✓ |

Focus ring: 3px tinta on limau and kain; 3px limau on tinta and kayu; offset 3px.
Text selection: limau on tinta. The draft banner is kain with tinta text, so it doesn't merge
into the tinta canopy below it.

## 4. Type
**Besley** (h1, h2, banner list, product names; variable, 700–800; latin) is a Clarendon
revival: the sturdy, slightly old-fashioned printed-sign serif of a kedai's banner.
**Atkinson Hyperlegible Next** (everything else; variable, 400–700; latin) was drawn for
legibility, which suits older regulars reading at night. Fallback if `next/font` lacks it:
Atkinson Hyperlegible 400/700.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(2.9375rem, 1.9rem + 4.55vw, 6rem): 47→96px | "Perjumpanta" only. Besley 700, tracking −0.02em, line-height 0.95, `nowrap` (one word, one line) |
| `--step-head` | clamp(2rem, 1.6rem + 1.8vw, 3.25rem): 32→52px | h2, including "SEDIA" on the banner. Besley 800, line-height 1.1 |
| `--step-lead` | clamp(1.375rem, 1.3rem + 0.3vw, 1.625rem): 22→25px | "Kedai Kopi" line of the h1, sub-lines, community item titles, banner items, product names, paraphrases, "Buka 24 jam". Besley 700 or Atkinson 400, line-height 1.3 |
| `--step-body` | clamp(1.0625rem, 1.03rem + 0.1vw, 1.125rem): 17→18px | Running text, prices, buttons, address. Atkinson 400/700, line-height 1.55 |
| `--step-small` | clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem): 13→14px | Captions, notes, group labels (Minum, Makan), draft banner, footer. Atkinson 600, line-height 1.4 |

Ratios, step to step from the top: phone (390) 1.48 / 1.48 / 1.29 / 1.30; desktop (1440)
1.86 / 2.05 / 1.40 / 1.28.
- Measured: "Perjumpanta" in Besley 700 is 6.96em, about 6.74em at −0.02em. That is 317px at 360
  (320 available), 324px at 390, 519px at 1024 (544px column) and 647px at 1440 (690px column).
- The h1 is one element: "Kedai Kopi" (block, `--step-lead`) over "Perjumpanta" (block,
  `--step-display`). There's no kicker or eyebrow anywhere on the page.
- Prices, hours and the rating use `tabular-nums`.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12 columns, gap 24px desktop / 16px phone |
| Page margins phone / desktop (`--gutter`) | 20 / 48px: clamp(1.25rem, 0.6rem + 2.667vw, 3rem) |
| Section padding phone / desktop (`--section-y`) | 64 / 112px: clamp(4rem, 2.886rem + 4.571vw, 7rem) |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. A price follows its name on the same line with a
  12px gap, never pushed to a column edge or joined by dot leaders. A product's name sits 12px
  under its drawing and its price 4px under the name. A photo slot's caption sits 8px under it.
  The hours plate sits 16px above the buttons.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident. The hero table bleeds to the right
  viewport edge; the product band and the canopy are full bleed.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Two-column layouts start at 1024px. Between 768 and 1023 the sections stack.

## 6. Products on the page
There are no owner photos, so four products are drawn as flat illustrations of the specific items:
1. **Bandrek Susu:** a tall tapered clear glass. The drink is gula, with a kain milk line at the
   top and a kayu band of sediment at the bottom (as in the photos). A spoon leans out, and it
   sits on a limau saucer. It is the hero piece and is repeated small on the product band.
2. **Lontong Medan:** a limau plate seen at three-quarters, with three kain lontong cubes, a gula
   pool of sayur, half an egg (kain with a gula yolk) and a merah dot of sambal.
3. **Indomie Rebus:** a kain bowl on a limau plate, gula broth, three wavy tinta noodle lines and
   an egg. No brand marks.
4. **Bubur Kacang Hijo:** a smaller kain bowl on a limau saucer, gula broth with kayu bean dots
   and one kain coconut-milk swirl.

How they appear: on the kayu table band in "Sedia", in 4 columns on desktop (drawing 180px) and
2×2 on phone (140px). The name sits under each one at `--step-lead` (kain, Besley 700) and the
example price under that (limau, `data-mockup`). Lontong Medan adds "Enak, kata pelanggan"
(review 2) at `--step-small`.
Style: crisp geometry. A 2px tinta outline (`vector-effect: non-scaling-stroke`), flat palette
fills, one kain highlight stroke, no gradients, shading, hands, faces or brand logos. Inline
SVG with `role="img"` and an Indonesian `aria-label`.

## 7. Sections
**Hero.** Recognition and actions. Limau wall under a tinta canopy band (36px phone / 48px
desktop) whose bottom edge is corrugated (a CSS mask of small ridges). Two (phone) or three
(desktop) kain bulbs hang 16px below it on 1px cords. On phone, the table drawing goes under the
buttons. On desktop, it runs from column 8 to the right viewport edge. At the bottom seam:
the [MOCKUP] uis band.
```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +-----------------------------------------------------+
| draft banner (kain)  |   | draft banner (kain)                                 |
|^^^^ canopy, tinta ^^^|   |^^^^^^^^^^^^^^^^^^^^ canopy, tinta ^^^^^^^^^^^^^^^^^^|
|   o            o     |   |      o                  o                    o      |
| Kedai Kopi           |   | Kedai Kopi                            ~ ~ ~         |
| Perjumpanta          |   | Perjumpanta  (display, c1-7)         |   |  glass   |
| Mejuah-juah! Kedai   |   | Mejuah-juah! Kedai kopi Karo di       |###|         |
| kopi Karo di Cawang, |   | Cawang, tempat kita berjumpa. (c1-6)  |###| bandrek |
| tempat kita berjumpa.|   | [BUKA 24 JAM | Senin-Minggu]       ===(saucer)======|
| [BUKA 24 JAM]        |   | [Petunjuk Arah] [WhatsApp]          table top, c8 ->|
| [Petunjuk][WhatsApp] |   |                  nomor menyusul      /\          /\ |
|   ~~~ |###| table    |   |=================== uis band (mockup) ===============|
|== uis band (mock) ===|   +-----------------------------------------------------+
+----------------------+
```
**Rasa kampung halaman.** Why people come. Tinta ground (night), kain text, limau item titles.
Four items with a 2px limau rule on top of each. Two dashed kain photo slots at 4:5 (the second
one 48px lower on desktop).
```
Rasa: phone                Rasa: desktop
+----------------------+   +-----------------------------------------------------+
| RASA KAMPUNG         |   | RASA KAMPUNG HALAMAN (h2, c1-6)  +-------+          |
| HALAMAN (h2)         |   | Rindu kampung? Duduk dulu...     | slot  | +-------+|
| lead + body          |   | body: orang Karo, Batak, rasa    | depan | | slot  ||
| [slot depan][slot    |   | pulang kampung. Siapa pun boleh  | kedai | | malam ||
|  4:5      ][malam]   |   | mampir. (c1-6)                   +-------+ | ramai ||
| captions             |   |                       (c7-12)    caption   +-------+|
| -- Ngumpul & ngobrol |   | ----------  ----------  ----------  ------------    |
| -- Masakan Karo      |   | Ngumpul &   Masakan     Malam yang  Kabar kampung   |
| -- Malam yang ramai  |   | ngobrol     Karo        ramai       & nobar (mock)  |
| -- Kabar kampung ... |   | one line    one line    one line    one line        |
+----------------------+   +-----------------------------------------------------+
```
**Sedia.** What's on. Limau wall. The kain banner (4 tinta eyelets at the corners, faint hem
lines, a soft shadow 0 6px 16px tinta 18%) carries the h2 "SEDIA" in merah, centred, and two
lists. Besley names, merah Atkinson prices right after them. Under it, the full-bleed kayu
table band with the four drawings.
```
Sedia: phone               Sedia: desktop
+----------------------+   +-----------------------------------------------------+
| o------------------o |   |  o-------------------------------o                  |
| |      SEDIA       | |   |  |           SEDIA (h2)          |  Belum pernah    |
| | Minum            | |   |  | Minum            Makan        |  coba bandrek?   |
| | Bandrek Susu 12rb| |   |  | Bandrek Susu 12rb Lontong     |  Mulai dari      |
| | ...              | |   |  | ...  (c1-8)       Medan 18rb  |  Bandrek Susu.   |
| | Makan            | |   |  | Kopinya dari     ...          |  (lead, c9-12)   |
| | Lontong Medan 18rb |   |  | Sumatera Utara.  Masakan Karo |  Harga masih     |
| o------------------o |   |  o-------------------------------o  contoh. (small) |
| lead + note          |   |=========== kayu table band, full bleed =============|
|=== kayu band ========|   |  (glass)     (lontong)    (indomie)    (bubur)      |
| (glass)   (lontong)  |   |  Bandrek     Lontong      Indomie      Bubur        |
| Bandrek   Lontong .. |   |  Susu        Medan        Rebus        Kacang Hijo  |
| (indomie) (bubur)    |   |  Rp 12rb     Rp 18rb      Rp 12rb      Rp 8rb       |
+----------------------+   +-----------------------------------------------------+
```
**Kata mereka.** Social proof. Kain ground. The rating line is `--step-lead`: "4,5" in Besley 800
and "dari 721 ulasan di Google" in Atkinson 400, both tinta. Paraphrases are Besley 700 at `--step-lead`,
each with a 2px tinta rule on top. No cards, stars or quote marks.
```
Kata: phone                Kata: desktop
+----------------------+   +-----------------------------------------------------+
| KATA MEREKA (h2)     |   | KATA MEREKA (h2)| --------- | --------- | --------- |
| 4,5 dari 721 ulasan  |   | 4,5 dari 721    | Seperti   | Tempat    | Lontong   |
| note (small)         |   | ulasan Google   | di rumah  | nongkrong | Medan-nya |
| ---- paraphrase x3   |   | note (c1-4)     | sendiri   | orang ... | enak ...  |
+----------------------+   +-----------------------------------------------------+
```
**Kunjungi kami.** Find it. Tinta ground; "Buka 24 jam, Senin–Minggu" in limau at
`--step-lead`; the address and landmark in kain; a limau Petunjuk Arah button; the map beside them.
```
Kunjungi: phone            Kunjungi: desktop
+----------------------+   +-----------------------------------------------------+
| KUNJUNGI KAMI (h2)   |   | KUNJUNGI KAMI (h2) | +----------------------------+ |
| Buka 24 jam, Sen-Min |   | Buka 24 jam, ...   | | Google Maps embed, 16:10   | |
| No. 4, RT.4/RW.9 ... |   | No. 4, RT.4/RW.9,  | | c6-12                      | |
| Dekat Gedung ASABRI  |   | Cawang ... (c1-5)  | |                            | |
| [Petunjuk Arah]      |   | Dekat Gedung ASABRI| |                            | |
| | map 4:3          | |   | [Petunjuk Arah]    | +----------------------------+ |
+----------------------+   +-----------------------------------------------------+
```
**Hubungi kami.** The close, a bookend to the hero: the canopy band again on a limau ground. On
desktop the buttons stack in their column. A tinta footer follows, with the [MOCKUP] uis band on top.
```
Hubungi: phone             Hubungi: desktop
+----------------------+   +-----------------------------------------------------+
|^^^^ canopy ^^^^^^^^^ |   |^^^^^^^^^^^^^^^^^^^^^^^^ canopy ^^^^^^^^^^^^^^^^^^^^^|
| HUBUNGI KAMI (h2)    |   | HUBUNGI KAMI (h2, c1-7)         [Petunjuk Arah    ] |
| Rumah kedua orang    |   | Rumah kedua orang Karo di       [WhatsApp & telepon |
| Karo di Jakarta ...  |   | Jakarta. Buka 24 jam ...         nomor menyusul  ]  |
| [Petunjuk Arah]      |   |                                 (dashed, c8-12)     |
| [nomor menyusul]     |   |== uis band (mockup) ================================|
| footer (tinta)       |   | footer: name | Cawang | Buka 24 jam | sumber        |
+----------------------+   +-----------------------------------------------------+
```

## 8. Motion
**Signature: "disajikan" (served).** The hero text, table and saucer are static and visible
from the first paint. An inline script adds `html.js` before paint, and only under
`(prefers-reduced-motion: no-preference)` does `.js` hide the glass and steam groups, so there's
no hydration flash and nothing is hidden with JS off. At 0.25 s the glass drops from y −32px to
0 with opacity 0→1 in the first 0.2 s (0.5 s, `power3.out`, no bounce). At contact (0.67 s) the saucer dips
1.5px and returns (0.16 s, yoyo). From 0.85 s three kain steam wisps rise from y 10px to 0 with
opacity 0→0.8 (0.9 s, `power2.out`, stagger 0.12 s) and stay at 0.8. That's about 2.0 s, once.
Reduced motion: the final state (glass on saucer, steam at 0.8), with no tweens.

**Supporting:** each section S2–S6 fades up 20px once (content wrapper only, 0.6 s,
`power2.out`, `top 85%`). Buttons nudge 1px on press in 120 ms; colour changes on hover are instant.
Nothing loops. Lenis uses starter defaults.
`lib/motion.ts`: `duration { press: 0.12, ui: 0.2, reveal: 0.6 }`, `distance.reveal 20`,
`served { delay: 0.25, glassY: -32, glassDur: 0.5, glassEase: "power3.out", clinkAt: 0.67, clink: 1.5, clinkDur: 0.16, steamAt: 0.85, steamY: 10, steamDur: 0.9, steamStagger: 0.12, steamOpacity: 0.8 }`.

## 9. What makes it this shop
1. Their lime-green wall is the page, and their lime saucer sits under a tall glass of bandrek:
   the two things every regular has looked at a thousand times.
2. The menu is their own cloth "SEDIA" banner, with the real items in their spelling
   (Bubur Kacang Hijo, Bandrek Susu Telor, Fanta Susu, Badak) and red only on the cloth.
3. The copy talks about the Karo community, home and long conversations at night under the
   canopy, with "Mejuah-juah!" and the uis selvedge if the owner agrees.

## 10. Avoid
- The coffee-shop default: cream and brown, beans, latte art, an artisan serif. Also the
  "24-hour" default of black with neon glow. Night sections are flat tinta with lime type.
- Selling it as "cosy" or "aesthetic" (reviews 2 and 4 say it isn't); no "nyaman" claims. Steam
  is three thin wisps over the glass only: nothing that reads as cigarette smoke.
- An ethnic costume: no roof-with-horns logo, gorga ornaments, ulos or uis wallpaper or tiled
  pattern fills. The uis appears only as a 12px band in two places, flagged, and can be switched off.
- Redrawn brand marks (Indomie, Fanta, Sprite, Badak): names in text only.
- Customer photos, faces, the blurry banner phone number, reviewer names, verbatim quotes, and
  the word "bar" from review 3 (paraphrase it as "tempat nongkrong").
- Kain text on limau (1.6:1), merah text anywhere off the cloth, the banner turning into a grid of
  cards, prices pushed to a column edge, a kicker above any heading.
- A cartoon scene: no people, stools full of figures, or sketchy lines. Crisp geometry only.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart (lowest 1.28); no list or label larger than its section heading
  (banner items and product names at `--step-lead`, under the 32–52px h2)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices 12px
  after names, captions 8px under slots, hours plate 16px above buttons)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero table bleeds
  right; banner beside lead; 4-column band; rating beside paraphrases; map beside address)
- [x] At least 3 products shown (food and product shops): four illustrations (Bandrek Susu,
  Lontong Medan, Indomie Rebus, Bubur Kacang Hijo)
- [x] Within motion-rules.md: one signature, section reveals only, transform and opacity, no
  React Bits, reduced motion = final state
- [x] Brief is decisions, not essays (2–4 pages)
