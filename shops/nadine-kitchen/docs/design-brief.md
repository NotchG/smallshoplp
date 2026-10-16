# Design brief: Nadine Kitchen

Record decisions, not essays. Every section below is required.

## 1. Concept
**Papan nama** (the name board): the page is set the way Nadine Kitchen finishes every cake. The
shop's name is spelled in chunky candy-coloured fondant capitals like the child's name on each
cake board. The page around it stays clean white fondant with pastel fields, and the cakes bring
the colour. This is a shop whose product is literally "your child's name, their age and their
favourite thing on a cake".
Signature moment: on load, the 13 letters of NADINE KITCHEN are placed one by one: each drops
a short way, slightly tilted, and settles flat, like fondant letters pressed onto a board (≈ 1.1 s, hero only).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Party pastels, rounded chunky type "like the fondant name letters on the cake boards", clean light page, owner-5/owner-8 as hero candidates, crops, no names or brands in captions, Bahasa Indonesia. |
| Owner photos (looked at all 9) | Name letters are chunky caps with soft slab feet, a different colour per letter (owner-2, -5, -6, -7); arch toppers (rainbow, pompom arch); scalloped name plaque (owner-5); every shot is inside a white wire-shelf chiller. |
| impeccable (new-work, mode-persuade, layout, typeset, colorize, animate, delight) | Persuade mode: the working action (a WhatsApp order) must be in the page, not just linked. Seven candidates from the parents' party world: fondant name letters, letter-flag bunting, foil number balloons, the fill-in birthday invitation, the snack box, the WhatsApp order chat, the display chiller. The rut is the pastel-bakery template (cream, script, cupcake icons, sprinkles) and its opposite, dark luxe patisserie. Chosen: the fondant letters as the world, with the invitation's blanks and the WhatsApp chat folded into one working "Kartu pesanan". Fonts picked against impeccable's font index; no default faces. |
| impeccable launcher | Not run: `context` and `concept-seed` need a binary download and write outside `docs/`. The brief pins the palette and type mood, which impeccable lets override the roll ("a brief-pinned direction beats the roll"). |
| motion-rules.md, design-brief guardrails | One signature moment, section reveals only, transform and opacity, reduced motion = none; type ratios and proximity rules below. |

## 3. Palette (4–6 named colours)
Strategy: full palette on a light ground. Fondant white owns the page; pastel fields own whole
bands and photo cards. Strawberry is spent only on actions and hero letters.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| Fondant | `#FFFBFC` | page ground, cards inside bands, text on Grape footer | Grape on it 15.1 |
| Grape | `#2E1A47` | all text and headings, footer field, letter colour 3 | 15.1 on Fondant, 11.6 Bubblegum, 12.3 Butter |
| Strawberry | `#C2255C` | primary buttons (Fondant text), gallery CTA card, letter colour 1 | Fondant on it 5.5; on Fondant 5.5; vs Bubblegum 4.2 (large/UI only) |
| Laut | `#0B7178` | letter colour 2, step numerals, focus ring, text links on Fondant only (on bands, links are Grape, underlined) | on Fondant 5.6, Butter 4.6; Bubblegum 4.3 and Lilac 4.3 (large/UI only) |
| Bubblegum | `#FFD3E1` | hero arch card, Hubungi band, order-card plaque, gallery cards | Grape 11.6 |
| Butter | `#FFE38A` | Cara pesan band, gallery cards | Grape 12.3; never text on Fondant |

Tints (not new colours): Toska `#C9EEEC` (light Laut) and Lilac `#E6DBF7` (light Grape) for
gallery cards, the chiller card and the Kata mereka band (Grape on them 12.5 / 11.7);
Grape-soft `#5A4A6E` for captions and secondary text (7.8 on Fondant, 5.9 on Bubblegum,
6.3 on Butter, 6.4 on Toska, 6.0 on Lilac). Letter extrusion shades: `#8A1640`, `#064A4F`, `#170C26`.

## 4. Type
Corben (700 display and headings, 400 lead) is a chubby soft-serif display face, the closest
Google face to the fondant cutter letters on the boards (soft slab feet, round counters).
M PLUS Rounded 1c (500 body, 800 emphasis and buttons) has rounded terminals like piped cream
and stays quiet. Both via `next/font`, latin subset.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.5rem, 15cqi, 7rem)`: 56px phone, ≈103px in the 1440 hero column | hero name only (and nothing else); line-height 1.05, two lines |
| `--step-head` | `clamp(2rem, 1.4rem + 2.4vw, 3rem)`: 32 / 48px | section headings (h2), Corben 700, lh 1.1; also the order-card preview letters (equal, never larger) |
| `--step-lead` | `clamp(1.375rem, 1.3rem + 0.3vw, 1.5rem)`: 22 / 24px | hero line, intros, step titles, size names, "5,0", Corben 400, lh 1.3 |
| `--step-body` | `clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem)`: 17 / 18px | running text, captions' theme names (800), prices (800), buttons, inputs; lh 1.55 |
| `--step-small` | `clamp(0.85rem, 0.82rem + 0.12vw, 0.9rem)`: 13.6 / 14.4px | caption details, labels, source notes; lh 1.45 |

Ratios hold at every width (checked at 390, 600, 768, 1024, 1440): small→body 1.25, body→lead
≥ 1.29, lead→head ≥ 1.45, head→display ≥ 1.74. Only the hero name and the order-card preview
use the multi-colour letters. Headings are Grape. Sentence case everywhere except the two
fondant-letter elements (caps, like the boards). The hero wrapper is
`container-type: inline-size`. The builder confirms "KITCHEN" fits at 390 and 1024–1440 and
lowers the `cqi` value if it doesn't.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.5rem + 3vw, 2.5rem)`: 20 / 40px |
| Section padding phone / desktop (`--section-y`) | `clamp(3.5rem, 2rem + 6vw, 7rem)`: 56 / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Captions sit inside their photo card, 12px under
  the photo. Prices sit directly under their size name, never right-aligned.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (see the wireframes) or is visibly narrow and centred.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Grid: 12 columns, 24px gap. Corners: cards 24px, photos 16px, buttons 16px with a static
  3px darker bottom edge (the fondant extrusion); the arch shape only on the hero photo.
  More space above a heading (section-y) than below it (24–32px).

## 6. Products on the page
Twelve cakes in nine owner photos, plus four drawn sizes:
- **Hero:** owner-5, the pink teddy-bear cake with rainbow, clouds and stars. Crop to y 0–1900 to remove the date stamp. Shown in an arch frame on a Bubblegum card.
- **Galeri (7):** owner-8 mermaid (crop off the Instagram header, y 180–1243) as the feature; owner-4 cats (left panel only, x 0–860, y 0–1035); owner-7 pompom-arch cake; owner-2 rainbow drip; owner-9 split two-theme cake; owner-6 race track; owner-3 superhero. Original designs lead (mermaid, cats); the licensed-character cakes come after them, without names.
- **Kunjungi:** owner-1, the chiller holding four finished cakes (unicorn, bus garage, pink garden, jungle animals), shown as "this is where your cake waits".
- **Ukuran & harga:** flat side-view silhouettes drawn to one scale (desktop 8px per cm, phone 5px per cm): Ø 16 cm and Ø 20 cm single tiers (height ≈ 0.85 × width, because the shop's cakes are tall), a 2-tier, and a cupcake. They are Bubblegum with a white drip edge and a Grape 2px outline on a Fondant board ellipse; the cupcake has a Butter cup. They sit on a shared baseline so the sizes compare at a glance.
Photos are tight-cropped (`object-fit: cover`) so the chiller walls read as backdrop. Captions and alt text name the theme and age only.

## 7. Sections
Phone first. Desktop columns refer to the 12-column grid inside the 1200px container.

**Hero** (Fondant ground). Name, line, hours, actions, proof, then the cake. On a phone, the CTA and the top of the teddy cake both show in the first 844px.
```
Hero: phone (390)        Hero: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| draft banner       |   | draft banner                                           |
| NADINE   (fondant  |   |  NADINE                        .-----------------.     |
| KITCHEN   letters) |   |  KITCHEN  (display, cols 1-7) /   arch photo      \    |
| Kue ulang tahun    |   |                               | owner-5 teddy cake |   |
| custom dari Duren  |   |  Kue ulang tahun custom dari  | on Bubblegum card  |   |
| Sawit       (lead) |   |  Duren Sawit          (lead)  | cols 8-12, 4:5     |   |
| Buka setiap hari   |   |  Buka setiap hari 08.00-17.00 |                    |   |
| 08.00-17.00        |   |  [Pesan via WhatsApp]         |                    |   |
| [Pesan via WA    ] |   |  [Lihat galeri]               +--------------------+   |
| [Lihat galeri    ] |   |  5,0 dari 257 ulasan Google   Beruang & pelangi, ke-1  |
| 5,0 dari 257 ulasan|   +--------------------------------------------------------+
| .--------------.   |    text column vertically centred against the photo
| / arch photo   \   |
+--------------------+
```

**Galeri kue** (Fondant ground). Real cakes by theme; the empty grid slot becomes the action.
```
Galeri: phone (390)      Galeri: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Galeri kue  (head) |   | Galeri kue (head, cols 1-5)  intro, lead (cols 7-12)   |
| intro (lead)       |   | +------------------------+ +----------+ +----------+   |
| +----------------+ |   | | mermaid (Toska card,   | | cats     | | pompom   |   |
| | mermaid (2 col)| |   | |  2 cols x 2 rows)      | | Butter   | | Bubblegum|   |
| | caption        | |   | |                        | | caption  | | caption  |   |
| +----------------+ |   | |                        | +----------+ +----------+   |
| +------+ +------+  |   | |                        | | rainbow  | | split    |   |
| | cats | |pompom|  |   | | caption                | | caption  | | caption  |   |
| +------+ +------+  |   | +------------------------+ +----------+ +----------+   |
| rainbow, split     |   | +----------+ +----------+ +------------------------+   |
| race, superhero    |   | | race     | | superhero| | Strawberry CTA card:   |   |
| +----------------+ |   | | caption  | | caption  | | Tema si kecil belum ada|   |
| | CTA card (2col)| |   | +----------+ +----------+ | [Kirim lewat WhatsApp] |   |
| +----------------+ |   |                           +------------------------+   |
+--------------------+   +--------------------------------------------------------+
```
768–1023: three columns, mermaid 2×2, the rest flow, CTA card spans the last row's remainder.

**Cara pesan** (Butter band). Five steps beside the working order card.
```
Cara pesan: phone        Cara pesan: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Cara pesan  (head) |   | Cara pesan (head)            +-----------------------+ |
| 1 Kirim tema &     |   | 1 Kirim tema & foto referensi| Kartu pesanan  (lead) | |
|   foto referensi   |   | 2 Pilih ukuran & rasa        | [Nama si kecil      ] | |
| 2 Pilih ukuran &   |   | 3 Tentukan tanggal           | [Ulang tahun ke-][Tgl]| |
|   rasa             |   |   Idealnya H-3; H-1 tanya    | [Tema favorit       ] | |
| 3 Tentukan tanggal |   | 4 Konfirmasi & DP            |  .~~~~~~~~~~~~~~~~~.  | |
|   H-3 / H-1 note   |   | 5 Ambil di Duren Sawit       | ( RAKA  ke-5 plaque ) | |
| 4 Konfirmasi & DP  |   |   (titles lead, text body;   |  '~~~~~~~~~~~~~~~~~'  | |
| 5 Ambil di Duren   |   |    cols 1-6)                 | [Kirim lewat WhatsApp]| |
|   Sawit            |   |                              +-----------------------+ |
| +----------------+ |   |                                white card, cols 7-12   |
| | Kartu pesanan  | |   +--------------------------------------------------------+
| | fields, plaque | |
| | [Kirim via WA] | |
| +----------------+ |
+--------------------+
```
Plaque = Bubblegum, scalloped edge (radial-gradient mask), preview letters at `--step-head`, default text "NAMA" / "ke-1" at 45% opacity until typed; on phone the age sits on its own line under the name so a 10-letter name fits.

**Ukuran & harga** (Fondant ground). Sizes you can see, prices next to them.
```
Ukuran & harga: phone    Ukuran & harga: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Ukuran & harga     |   | Ukuran & harga (head, cols 1-6)   intro (body, 7-12)   |
| intro (body)       |   |                                                        |
| +------+ +------+  |   |   [svg 16]    [ svg 20 ]   [svg 2 tier]   [cup]        |
| |svg 16| |svg 20|  |   |   ________ shared baseline, drawn to scale ________    |
| +------+ +------+  |   |   Kue karakter Kue karakter Kue 2 tingkat Cupcake      |
| name     name      |   |   D 16 cm      D 20 cm      mulai 650rb   karakter     |
| mulai .. mulai ..  |   |   mulai 250rb  mulai 350rb                15rb/pcs     |
| |2 tier| | cup  |  |   |   (4 cards, 3 cols each, name + price stacked)         |
| Pilihan rasa       |   |   Pilihan rasa: (vanila)(cokelat)(pandan)              |
| (chips wrap)       |   |   (red velvet)(rainbow cake)  Butter chips, one row    |
+--------------------+   +--------------------------------------------------------+
```
("D" in the wireframe = Ø on the page.)

**Kata mereka** (Lilac band). Rating once, paraphrases, no stars.
```
Kata mereka: phone       Kata mereka: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Kata mereka (head) |   | Kata mereka (head) +---------------+ +---------------+ |
| 5,0 dari 257       |   | 5,0 (lead) dari    | paraphrase of | | paraphrase of | |
| ulasan Google      |   | 257 ulasan Google  | review 5      | | review 4      | |
| +----------------+ |   | Diringkas dari     | (body)        | | (body)        | |
| | review 5 para. | |   | ulasan Google      +---------------+ +---------------+ |
| +----------------+ |   | Lihat di Maps ->   short-review line (body)            |
| | review 4 para. | |   | (cols 1-4)         Fondant cards, cols 5-8 and 9-12    |
| +----------------+ |   +--------------------------------------------------------+
| short-review line  |
+--------------------+
```

**Kunjungi kami** (Fondant ground). Where your cake waits.
```
Kunjungi: phone          Kunjungi: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Kunjungi kami      |   | +----------------+  Kunjungi kami (head)               |
| Ambil pesanan di   |   | | owner-1        |  Ambil pesanan di sini (lead)       |
| sini (lead)        |   | | chiller photo  |  Address + patokan  | Setiap hari   |
| address, patokan   |   | | Toska card     |  (cols 6-9)         | 08.00-17.00   |
| Setiap hari 08-17  |   | | 4:5, cols 1-5  |  [Petunjuk arah]  Butuh diantar?    |
| [Petunjuk arah   ] |   | |                |  +-------------------------------+  |
| Butuh diantar? ..  |   | |                |  | map 16:9, cols 6-12           |  |
| [map 16:9        ] |   | +----------------+  +-------------------------------+  |
| [chiller photo   ] |   | Kue-kue yang siap diambil (caption)                    |
+--------------------+   +--------------------------------------------------------+
```

**Hubungi kami** (Bubblegum band) and footer (Grape).
```
Hubungi: phone           Hubungi: desktop (1440)
+--------------------+   +--------------------------------------------------------+
| Hubungi kami (head)|   | Hubungi kami (head)         [ WhatsApp               ] |
| Mau tema apa, Kak? |   | Mau tema apa, Kak? (lead)   [ Telepon 0857-1112-5253 ] |
| Chat atau telepon  |   | Chat atau telepon           [ Instagram              ] |
| 0857-1112-5253     |   | 0857-1112-5253 (cols 1-6)   [ @nadine.kitchen.3701   ] |
| [WhatsApp        ] |   |                             (cols 8-12, stacked)       |
| [Telepon         ] |   +--------------------------------------------------------+
| [Instagram       ] |   | footer, Grape: name, Cake ulang tahun custom, draft    |
+--------------------+   +--------------------------------------------------------+
```

## 8. Motion
- **Signature (hero name):** after `document.fonts.ready` (cap 600 ms), each letter goes
  from y −28px, a fixed tilt of 3–6° (alternating sign) and opacity 0 to rest: 0.5 s each,
  stagger 0.045 s in reading order, `back.out(1.3)`, ≈ 1.1 s total, once. Letters are at rest
  (no tilt) when it ends, so nothing overlaps in screenshots. Nothing else in the hero moves:
  line, buttons and photo are there from first paint. Reduced motion: letters at rest from the
  start, no tween. JS off: letters visible (TRD pre-hydration note).
- **Supporting:** Reveal on the six sections below the hero (y 20px, 0.6 s, `power2.out`,
  once). Order-card preview letters fade in 180 ms as typed (a response, CSS). Buttons
  hover −2px / press +1px, 150 ms. No hover lift on photos, no parallax, no scroll-linked effects.
- Tokens: `dur.letter 0.5`, `stagger.letter 0.045`, `ease.settle back.out(1.3)`,
  `dist.letter 28`, `dur.reveal 0.6`, `ease.reveal power2.out`, `dist.reveal 20`, `dur.press 0.15`.

## 9. What makes it this shop
1. The name in the shop's own lettering: chunky soft-slab capitals in strawberry, sea-teal and
   grape with a fondant edge, placed one by one like letters pressed onto a cake board.
2. "Kartu pesanan": type your child's name and age, see them in those letters on a scalloped
   plaque like the one on the teddy cake, and send the order on WhatsApp, the way this shop
   already takes orders.
3. Sizes drawn side by side to scale, because reviewers single out how tall and big the cakes
   are for the price. And the chiller photo as the pickup section: this is where your cake waits.

## 10. Avoid
- The pastel-bakery template: cream ground, script headings, whisk or cupcake icons, sprinkle
  or confetti backgrounds, gold-foil textures, hand-drawn doodles.
- Kids'-party clip-art: balloons, stars and emoji scattered as decoration, mascots, comic fonts.
- Rainbow everything: the multi-colour letters appear in exactly two places (hero name and
  order preview); headings, buttons and lists stay Grape or Strawberry.
- A badge or star row under the hero; "halal" or any claim the listing doesn't make.
- A filterable or carousel gallery, or a masonry that animates every card.
- WhatsApp-green buttons: the action colour is Strawberry, with WhatsApp named in the label.
- Child names or character and toy brand names in captions, alt text or headings; review
  quotes in quotation marks or with names.
- Concept-specific failures: light letter colours that can't be read (only the three deep
  colours are allowed); the hero name overflowing at 390 or 1024; the order preview growing
  larger than "Cara pesan"; the order card pretending to submit (it only opens WhatsApp);
  chiller walls dominating the photos (crop tight).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (ratios checked at 390–1440; preview letters equal to `--step-head`, prices and size names at body/lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; captions inside cards, prices under names, CTA text next to its button)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero 7+5, gallery 4-col bento with CTA slot, steps + card, 4 size cards, rating + 2 cards, photo + info/map, heading + stacked actions)
- [x] At least 3 products shown (food and product shops): 12 cakes in 9 owner photos + 4 drawn sizes
- [x] Within motion-rules.md (one signature moment, section reveals only, transform/opacity, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
