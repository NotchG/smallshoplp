# Design brief: Mardin Baklava Patisserie

## 1. Concept
**Etalase menyala (the lit counter):** Mardin's own room after dark, a chocolate-brown room
where the counter glows, kunafe gets its own field of colour and everything to take home comes
in kraft. It's built only from this shop's materials (brick, lit glass, gold trays, kraft bags,
the tall MARDIN sign), with no "Ottoman luxury" costume.
**Signature moment:** on load, the counter light comes on. A brown veil lifts off the gold
platter photo as it settles, and three name cards drop onto their pieces like counter labels.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The room palette, the MARDIN lockup (tall caps, bar under the M, spaced sub-line), the kraft-bag rule frame, "Kunafe" spelling and price from the chalkboard, the sweetness and price cautions, parking, the six pieces seen in the trays, crop rules for owner-1/3 |
| impeccable | Persuade mode. Brief-pinned world, played at full range. Seven candidates (vitrine, kraft bag, gold tray, tea glass, filo layers, chalkboard, tray grid): vitrine leads, with the bag and the tray grid kept as raises. Full-palette colour in fields. Dark ground chosen from the scene: people browse in the evening and picture a dark room with a glowing counter. No reflex fonts. One focal sequence. concept-seed did not run (the launcher would download a binary outside `docs/`) |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `room` | #22150F | Main ground (hero, etalase, teh, manis, kata, footer); text on every light ground | filo on room 14.8:1 |
| `filo` | #F5E9D3 | Text on room; the lit counter panel; hero name cards | room on filo 14.8:1 |
| `kraft` | #CFAB7C | Ground for Oleh-oleh and Kunjungi; muted text on room | room on kraft 8.3:1 · kraft on room 8.3:1 |
| `syrup` | #E3A83E | Labels, hours, the counter's lit edge, rules, focus ring, draft banner; pastry gold in illustrations | syrup on room 8.4:1 · room on syrup 8.4:1 |
| `pistachio` | #A8C46A | Primary button fill, "open" dot, Hubungi band; pistachio in illustrations | room on pistachio 9.1:1 |
| `kunafe` | #D66A2C | Kunafe section field (the brick and the kunafe in one colour); kunafe in illustrations | room on kunafe 5.0:1 (body OK) |

Allowed text pairs only: filo, kraft, syrup or pistachio on room; room on filo, kraft, syrup,
pistachio or kunafe. Never: filo on kunafe (2.9), syrup on kraft (1.0), pistachio on kraft (1.1),
syrup on filo (1.8). Photos aside, no other colours, no gradients, no metallic effects.

## 4. Type
**Antonio** (display, headings, labels; 600/700) echoes the sign's tall rounded-square caps.
**Alegreya** (lead, body; 400–500 + italic) brings the host voice's hand-made warmth. Both via
`next/font`, subsets latin + latin-ext (ı ç ü İ). Headings and labels are uppercase Antonio;
Turkish names in `<span lang="tr">`. Body on dark: weight 450, leading 1.6, tracking 0.005em.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5.5rem, 3rem + 13vw, 15rem)` (88→240px), Antonio 700, leading 0.9 | "MARDIN" in the hero only (one word, measured 2.91em: 261px at 320w, 287px at 390w, 684px at 1440w, so always one line) |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.8vw, 4rem)` (36→64px), Antonio 700, leading 1.05 | section headings |
| `--step-lead` | `clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)` (24→30px), Alegreya 400, leading 1.3 | leads, paraphrases, hero line, phone number, the lockup sub-line from 768px |
| `--step-body` | `clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)` (18→20px), Alegreya, leading 1.6 | running text, list items, piece names (Antonio 600 caps) |
| `--step-small` | `0.875rem` (14px) | `.t-label` (Antonio 600 caps, tracking 0.12em), captions, prices, notes |

Ratios checked at 390 / 768 / 1024 / 1440: every step ≥1.29× the one below (body/small at
390 is the tightest, 1.29). Hero lockup: syrup bar under the M (≈0.62em wide, 0.06em tall),
"BAKLAVA PATISSERIE" beside it in Antonio 600, tracking 0.18em, at `--step-body` below 768px
and `--step-lead` from 768px.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px; 12-col grid, 24px gap from 1024px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (768+) / 40px (1024+) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (Hubungi band: 56px / 88px) |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices follow their name on the same line
  ("Çay · teh Turki  Rp 20rb"), hero name cards point at their piece.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Body measure ≤ 62ch. Breakpoints: stacked below 768, tablet 768–1023 (2-col grids), desktop 1024+.

## 6. Products on the page
- **Owner photos:** owner-2 (hero): Havuç Dilimi, Çikolatalı Baklava and a kunafe slice on the
  gold platter. owner-3 (Etalase), lower ~55% only (tray, no face): walnut rolls on copper.
  (owner-1 shows the room, so it doesn't count as a product.)
- **Flat illustrations** (`Piece`: top-down, one scale, palette colours, 1.5px room layer lines):
  Fıstıklı Baklava (square, pistachio mound), Havuç Dilimi (wedge, green edge), Fıstıklı Sarma
  (green-ended roll), Cevizli Sarma (pale roll, walnut ends), Bülbül Yuvası (nest, green centre),
  Çikolatalı Baklava (dark square, pistachio stripe); **KunafePan** (round kunafe in its pale metal
  dish, strands, pistachio mound, syrup jug beside); **TeaGlass** (tulip glass in lidded holder, syrup line).
  The pieces recur in the sweetness scale and inside the boxes.

## 7. Sections
**Hero.** Recognition, today's hours, directions. Tags only from 1024px; caption below that.
```
Hero: phone (390)              Hero: desktop (1440)
+----------------------+       +--------------------------------------------------------+
|[draft banner, syrup] |       |[draft banner, syrup]                                   |
| MARDIN      display  |       | MARDIN  display, cols 1-7      | Baklava dan kunafe    |
| ▬ BAKLAVA PATISSERIE |       |                                | khas Turki ...  lead  |
| Baklava dan kunafe   |       | ▬ BAKLAVA PATISSERIE           | ● Buka hari ini 11-21 |
| khas Turki... (lead) |       |                                | [Petunjuk Arah][WA]   |
| ● Buka hari ini 11-21|       |                                | 4,7 · 935 ulasan small|
| [Petunjuk ][WhatsApp]|       | +----------------------------------------------------+ |
| 4,7 · 935 ulasan     |       | | owner-2 platter, cols 1-12, 2.4:1, pos 50% 85%     | |
| +------------------+ |       | |  [HAVUÇ DİLİMİ]      [KUNAFE]      [ÇİKOLATALI]    | |
| | owner-2 4:3,     | |       | |       •                 •               •          | |
| | pos 25% 50%      | |       | +----------------------------------------------------+ |
| +------------------+ |       +--------------------------------------------------------+
| Di piring: Havuç ... |         right column = cols 9-12, bottom-aligned to the lockup
+----------------------+
```
Tag anchors on the 2.4:1 box: Havuç Dilimi ≈ (20%, 24%), Kunafe ≈ (49%, 60%), Çikolatalı ≈
(77%, 26%). Card sits just above its anchor: filo chip, room `.t-label`, a 12px syrup stem to
an 8px syrup dot. Hero top padding 24px / 48px (not `--section-y`), so every action sits
above the fold at 390×844 and the photo's top half shows at 1440×900.

**Etalase kami.** The baklava range as the lit counter: a filo panel with a 3px syrup top edge, set into the room.
```
Etalase: phone                 Etalase: desktop
+----------------------+       +--------------------------------------------------------+
| ETALASE KAMI   head  |       | ETALASE KAMI  head, cols 1-6    lead, cols 7-11        |
| lead                 |       | +==syrup edge========================================+ |
| +------------------+ |       | | owner-3 tray  |  (pc)       (pc)       (pc)          | |
| | owner-3 4:3      | |       | | 4:5, cols 1-5 |  FISTIKLI   HAVUÇ      FISTIK        | |
| +------------------+ |       | | bleeds to the |  desc       desc       SARMA         | |
| +==filo panel======+ |       | | panel edge    |  (pc)       (pc)       (pc)          | |
| | (pc)      (pc)   | |       | |               |  CEVİZLİ    BÜLBÜL     ÇİKOLATALI    | |
| | name      name   | |       | |               |  Per potong Rp 22rb–28rb (small)   | |
| | desc      desc   | |       | +----------------------------------------------------+ |
| | ...3 rows, 2 col | |       +--------------------------------------------------------+
| | Per potong ...   | |
| +------------------+ |
+----------------------+
```
Piece cell: illustration 96px (phone) / 120px (desktop), name in Antonio 600 caps at
`--step-body`, Indonesian descriptor in Alegreya italic `--step-small` under it.
"Favorit pelanggan" label with a pistachio dot sits under the Fıstıklı Baklava name.

**Kunafe.** The star dish, drenched in `kunafe`; all text `room`.
```
Kunafe: phone                  Kunafe: desktop
+----------------------+       +--------------------------------------------------------+
| KUNAFE         head  |       |  +------------------------+   KUNAFE   head, cols 7-12 |
| lead                 |       |  | KunafePan illustration |   lead                      |
|  (KunafePan, 280px)  |       |  | cols 1-6, ~480px       |   - Renyah di luar          |
| - Renyah di luar     |       |  | syrup jug at right     |   - Keju meleleh di dalam   |
| - Keju meleleh       |       |  +------------------------+   - Sirup terpisah          |
| - Sirup terpisah     |       |                               Rp 62,5rb (small, mock)   |
| Rp 62,5rb            |       +--------------------------------------------------------+
+----------------------+
```
**Teman minum teh.** Tea beside the sweets; the illustration on the right to alternate with Kunafe.
```
Teh: phone                     Teh: desktop
+----------------------+       +--------------------------------------------------------+
| TEMAN MINUM TEH      |       | TEMAN MINUM TEH  head, cols 1-6  +-------------------+ |
| lead                 |       | lead (≤62ch), cols 1-6           | TeaGlass, syrup   | |
|   (TeaGlass, 200px)  |       | ÇAY · teh Turki  Rp 20rb         | line drawing,     | |
| ÇAY · teh  Rp 20rb   |       | TÜRK KAHVESİ · kopi  Rp 35rb     | cols 8-11, ~360px | |
| TÜRK KAHVESİ  Rp 35rb|       | "Duduk dulu..." (lead, italic)   +-------------------+ |
+----------------------+       +--------------------------------------------------------+
```
**Seberapa manis?** An honest guide. PlatterRule above the heading.
```
Manis: phone                   Manis: desktop
+----------------------+       +--------------------------------------------------------+
| ---- platter rule ---|       | ------------------- platter rule, cols 1-12 ---------- |
| SEBERAPA MANIS? head |       | SEBERAPA MANIS? head, cols 1-5   lead, cols 7-12       |
| lead                 |       | ringan ●──────────────────●──────────────────● manis   |
| ┃● (pc) ÇİKOLATALI   |       |   (pc) ÇİKOLATALI     (pc) KUNAFE      (pc) FISTIKLI   |
| ┃  lebih ringan      |       |   lebih ringan        sirup Anda atur  manis klasik    |
| ┃● (pc) KUNAFE       |       |   Teh Turki menyeimbangkan manisnya (small), cols 1-6  |
| ┃● (pc) FISTIKLI     |       +--------------------------------------------------------+
+----------------------+
```
Scale line 2px syrup; stops at 1/6, 1/2, 5/6; piece 64px with its label 12px beneath.

**Untuk oleh-oleh & hampers.** Gifting, on `kraft` with the bag's thin printed frame (1.5px room, inset 16px).
```
Oleh: phone                    Oleh: desktop
+----------------------+       +--------------------------------------------------------+
|+--room rule frame---+|       | +--room rule frame----------------------------------+ |
|| UNTUK OLEH-OLEH    ||       | | UNTUK OLEH-OLEH     | [box 6]  [box 12]  [1 kg]   | |
|| & HAMPERS     head ||       | | & HAMPERS  cols 1-5 | KOTAK    KOTAK     LOYANG   | |
|| lead               ||       | | lead                | ISI 6    ISI 12    1 KG     | |
|| [box6] Kotak isi 6 ||       | | Ramadan · Lebaran · | Rp 150rb Rp 285rb  pre-order| |
||        Rp 150rb    ||       | | hampers · kantor    |   (cols 6-12, 3 columns)    | |
|| [box12] ... [1 kg] ||       | | [Pesan lewat WA]    |                             | |
|| [Pesan lewat WA]   ||       | +---------------------------------------------------+ |
|+--------------------+|       +--------------------------------------------------------+
+----------------------+
```
**Kata mereka.** Paraphrased praise; rating as text, never bigger than the heading.
```
Kata: phone                    Kata: desktop
+----------------------+       +--------------------------------------------------------+
| KATA MEREKA    head  |       | KATA MEREKA  head, cols 1-4  | RASA (label)            |
| 4,7 di Google ·      |       | 4,7 di Google · 935 ulasan   | paraphrase (lead)       |
| 935 ulasan (lead)    |       | (lead)                       | ── syrup hairline ──    |
| RASA                 |       | Diringkas dari ulasan Google | KUNAFE  paraphrase      |
| paraphrase (lead)    |       | (small)                      | PELAYANAN  paraphrase   |
| ── ... ×4            |       |                              | TEMPAT  paraphrase      |
+----------------------+       |                              | (cols 6-12, ~45ch/line) |
                               +--------------------------------------------------------+
```
**Kunjungi kami.** Getting there, on `kraft`.
```
Kunjungi: phone                Kunjungi: desktop
+----------------------+       +--------------------------------------------------------+
| KUNJUNGI KAMI  head  |       | KUNJUNGI KAMI  head, cols 1-12                         |
| address              |       | address         | owner-1 crop   | map embed          |
| hours list (today    |       | hours list      | (shelves, bags,| 4:5                |
|  highlighted)        |       | parking note    |  chalkboard)   | cols 9-12          |
| Parkir mobil terbatas|       | [Petunjuk Arah] | 4:5, cols 5-8  |                    |
| [Petunjuk Arah]      |       | cols 1-4        |                |                    |
| owner-1 crop 4:3     |       +--------------------------------------------------------+
| map 4:3              |
+----------------------+
```
owner-1 crop: x from ~62% to ~98% of the image (no people, no counter, no payment terminals).

**Hubungi kami.** The close, on a `pistachio` band; buttons invert to room fill + filo text.
```
Hubungi: phone                 Hubungi: desktop
+----------------------+       +--------------------------------------------------------+
| HUBUNGI KAMI   head  |       | HUBUNGI KAMI  head, cols 1-5 | 0821-1203-3331  (lead)  |
| line (body)          |       | line (body)                  | [WhatsApp][Telepon]     |
| 0821-1203-3331 (lead)|       |                              | [Petunjuk Arah] cols 7-12|
| [WhatsApp] [Telepon] |       +--------------------------------------------------------+
| [Petunjuk Arah]      |
+----------------------+
```
**Footer.** Identity and draft status, on `room`, PlatterRule above.
```
Footer: phone                  Footer: desktop
+----------------------+       +--------------------------------------------------------+
| MARDIN (head size)   |       | MARDIN lockup     | address · hours  | Draf mockup ·  |
| address · hours      |       | (head size)       | cols 5-9 (small) | belum situs    |
| Draf mockup (small)  |       | cols 1-4          |                  | resmi cols 10-12|
+----------------------+       +--------------------------------------------------------+
```

## 8. Motion
**Signature: the counter light comes on** (hero, on load, CSS keyframes so it never waits on
hydration). The veil (room colour, over the photo only) runs 0.7→0 opacity over 1.0s; the photo
scales 1.04→1 over 1.2s, `cubic-bezier(0.16,1,0.3,1)`; both start at 0.1s. Then the three name
cards fade in and drop 8px, 0.4s each, at 0.70 / 0.82 / 0.94s, left to right. Finished by
1.34s. The hero text never moves. Reduced motion: no animation, veil at 0, cards visible.
**Supporting:** starter `Reveal` (fade up 20px, 0.7s, `power2.out`, once) on four blocks only:
the Etalase panel, the Kunafe block, the Oleh-oleh frame, the Kata mereka list. Buttons: 150ms
lift on hover and 0.98 on press. Nothing loops. Lenis defaults.
Motion tokens: starter values, except `duration.hero = 1.2`; add CSS
`--ease-counter: cubic-bezier(0.16, 1, 0.3, 1)` for the keyframes.

## 9. What makes it this shop
1. The MARDIN lockup set tall in Antonio with the syrup bar under the M and the spaced
   sub-line, which echoes their brick-wall sign and kraft bag without copying the logo file.
2. The hero is their own gold platter, labelled like a pastry counter, with the light coming
   on; the Etalase is a lit filo panel set into the dark room, as their glass counter glows
   against the brick.
3. Kunafe, spelled as on their chalkboard, gets a field in kunafe-brick orange, and a
   "Seberapa manis?" guide owns the sweetness debate from their reviews instead of hiding it.

## 10. Avoid
- Category costume: arabesque borders, mosque or lantern silhouettes, crescents, "1001 Nights"
  script, Turkish-flag red, gold gradients, shine, glitter.
- Calibration traps: cream + serif display + terracotta; near-black with glowing edges; black
  boxes with hard offset shadows under condensed caps. `room` is chocolate, and nothing glows.
- Brick as a photo texture or CSS pattern (brick lives in the `kunafe` field and the photos);
  equal icon-card grids; a badge row under the hero; price-led headlines; "best in Jakarta" as
  our claim (only as a customer paraphrase).
- Redrawing the logo in SVG; faces (owner-3 tray only, owner-1 right side only); photo-*.jpg;
  saffron ice cream; the city-of-Mardin story before the owner confirms it.
- How this could fail: a gloomy room (keep the lit panel, kunafe and kraft fields generous);
  name cards drifting off their pieces (≥1024 only, fixed 2.4:1 box, check 1024 and 1440 shots);
  clip-art illustrations (flat, one angle and scale, lines ≤1.5px, no sparkles or faces);
  cramped caps (leading ≥1.05 wherever text can wrap).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops)
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
