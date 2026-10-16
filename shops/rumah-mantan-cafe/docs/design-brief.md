# Design brief: Rumah Mantan Cafe & Nostalgia

## 1. Concept
The page is the shop's own front wall: their sky-blue "Selamat Datang di Rumah Mantan" mural,
redrawn flat and sharp as the hero, on whitewashed planks hung with their real hand-painted
signs. The owner knows it's theirs at a glance; a student reads "cheap, funny, stay for hours".
Signature moment: on load, the unreadable stripe of their "Kamu / Aku / … / Sayang" sign flips
down once like a hinged plank and fills in "PERNAH", so the joke lands: "Kamu, aku, pernah sayang."

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Name, hours with the later Saturday, 4 named products, 4 praise themes, Bahasa Indonesia, pinned palette and type mood |
| owner-1.jpg | The hero: mural layout (sky blue, navy frame, "DATANG" ribbon, mustard gable house, round window, chimney, clouds), the Kamu/Aku stripe colours, KOPI sign, "10" plate. Also shown as itself in section 2 |
| owner-2.jpg | The hot dog: the only real food photo (small 4:3 tile) |
| photo-1/2/3 (reference only) | Rooster saucer under the latte, pine stools and steel-legged pallet tables, steel-frame glass room with an orange cushion, "SMOKING AREA" sign, Instagram sticker |
| impeccable | Persuade mode. The brief pins the world, so there's no concept roll: keep the shop's half-built brand (mural, signs, round logo) and extend it. Ruts refused: a cream-and-serif cafe page (latte-art hero, chalkboard menu) and the literal "ex" reading (pink, hearts). Also considered: rooster-ware tableware, mixtape J-card, school binder diary, warung banner. The wall won because the owner will recognise it. Colour strategy: full palette, each colour owns whole bands. Display face chosen as an object from this world, not from the default list. One authored moment; everything else quiet |

## 3. Palette (4–6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `langit` | #8EC6EA | mural panel (hero), Pojok favorit band | dongker on langit 7.2 ✓. Never awan text on it (1.8) |
| `awan` | #FDFDFB | clouds, notes, plates, text on jago and dongker | dongker on awan 12.9 ✓ |
| `kapur` | #EEECE6 | whitewashed plank wall: hero wall, section 2, Kata mereka, tiles | dongker on kapur 11.2 ✓ |
| `rumah` | #E9B44C | house facade, Menu band, "lebih sore" marker, button and focus ring on dongker | dongker on rumah 7.0 ✓, rumah on dongker 7.0 ✓ |
| `dongker` | #1E3050 | all text on light grounds, mural frame, ribbon, closing band, banner | awan on dongker 12.9 ✓, kapur on dongker 11.2 ✓ |
| `jago` | #BF3328 | primary button on light grounds, sign stripes, note pins, chimney | awan on jago 5.5 ✓, jago on kapur 4.8 ✓. Never as text on rumah (3.0) or dongker (2.3) |

Used only inside product drawings, never in the UI: kopi #8A5A3C, susu #E8D6BC, nasi #C98A4B.
Plank seams: 1px dongker at 6% every 64px. Bands top to bottom: kapur wall with a langit panel →
kapur → rumah → langit → kapur → dongker.

## 4. Type
Londrina Solid 400/900 (hand-painted solid caps, like the mural's "DATANG" and "RUMAH MANTAN")
and Archivo (variable; a sturdy grotesque for everything that's read). Both via `next/font`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(5rem, 3rem + 8vw, 10rem)`: 80px @390, 160px @1440 | "RUMAH / MANTAN" only. Londrina 900 caps, leading 0.95 |
| `--step-head` | `clamp(2.25rem, 1.5rem + 3vw, 4rem)`: 36 / 64px | h2 (Londrina 900, sentence case, leading 1.1). Hero sign words from 1024px |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.55vw, 1.5rem)`: 22 / 24px | h3 product and space names (Londrina 400), notes, today's hours, contact values, ribbon, hero sign words below 1024px |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)`: 17 / 18.9px | paragraphs, descriptions, list items, buttons (Archivo 700) |
| `--step-small` | `0.84375rem`: 13.5px | labels (Archivo 600 caps, 0.08em), captions, "Ilustrasi", banner |

Ratios checked every 10px from 320 to 2560: display/head ≥ 2.22, head/lead ≥ 1.63,
lead/body ≥ 1.26 (lowest from 1500px up), body/small ≥ 1.26.
- The display lines are single words, measured: MANTAN is 2.81em, so 225px at 80px (the facade
  is at least 248px wide inside at a 360 viewport) and 449px at 160px (504px inside). They can't
  wrap, so leading 0.95 is safe.
- Londrina's glyph box is 1.18em. Keep `RUMAH<br>MANTAN` in one element, and give
  "CAFE & NOSTALGIA" a top margin of at least `0.18 × --step-display` (shots flags overlap otherwise).
- Never set paragraphs in Londrina. Caps only on the h1, the signs and the ribbon.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px (from 768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px. Hero only (`.hero-pad`): 16/32px phone, 48/64px desktop |

- **Grid:** 12 columns with a 32px gap from 1024px; one column below that. Paragraphs max 52ch.
- **Proximity:** price line ≤16px under the menu intro; "Ilustrasi" ≤8px under its tile; captions
  ≤12px under their photo; Saturday note directly under today's hours; each description ≤8px
  under its h3; the "lebih sore" marker ≤12px after the Saturday time. No per-item prices.
- **Wide screens:** every section is a split (7/5, 5/7, 6/6, 4/8) or a 3-up row; see §7.
- **Lists:** menu lists at `--step-body`, product names at `--step-lead`, never heading size.
- **Material:** signs and notes tilt at most ±3°, hang on a drawn nail and string, no shadows.
  Planks and frames have square corners; tiles at most 4px radius. `.wall` = kapur + seams.

## 6. Products on the page
Four products in "Menu andalan", three drawn and one photographed:
| Product | Source | How it appears |
|---|---|---|
| Kopi latte (featured) | reviews 3, 4; photo-3 | Flat illustration from above: glass with a heart in the foam, on a white saucer with a jago rim and rooster brush marks (dongker tail arcs, jago comb), as it's served. 1:1 kapur tile, ~520px desktop, full width on phone |
| Nasi goreng spesial mantan | review 1 | Illustration from above: a mound of rice (nasi tone, darker flecks) with a fried egg [MOCKUP look] on an awan plate with a 3px dongker rim. 4:3 tile, 192×144 desktop / 112×84 phone |
| Carbonara | review 5 | Illustration: swirl of pasta in susu tone, dongker pepper flecks, same plate and tile |
| Hot dog roti hitam [MOCKUP name] | owner-2.jpg | The owner's photo in the same 4:3 tile, `object-fit: cover`. 192px wide = 384px at 2×, under the 480px source; never wider than 240px |

Illustration style: flat fills, no outlines except plate rims, no gradients; slightly
hand-painted edges are welcome. Under them, text lists "Camilan" and "Minuman" [MOCKUP] at
`--step-body`.

## 7. Sections
Heading changes from the brief's drafts: the greeting moves into the hero and section 2 becomes
"Dindingnya penuh kode"; "Kunjungi kami" → "Mampir ke rumah mantan" (it takes the brief's
example hero line as its lead); "Hubungi kami" → "Kabarin dulu". The redrawn mural replaces
owner-1 in the hero because the photo is dim and soft; owner-1 appears in section 2.

**1. Hero.** Purpose: recognise the shop, get the joke, act. Content: PRD §1.
```
Hero: phone (390)          Hero: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|banner (dongker)      |   |banner (dongker, 1 line)                                                  |
|+--------------------+|   | +--------------------------------------+                                 |
||Selamat[DATANG]di   ||   | | ~     Selamat [DATANG] di      ~     |          | nail                 |
|| ~    __/\__[]~     ||   | |            _____/\_____[]~           |     [   KAMU   ]  jago          |
||     /  (o)  \      ||   | |           /     (o)      \           |     [   AKU    ]  rumah         |
||    |  RUMAH  |     ||   | |          |      RUMAH     |          |     [  PERNAH  ]  <- flap       |
||    | MANTAN  |     ||   | |          |      MANTAN    |          |     [  SAYANG  ]  jago          |
||    | CAFE &  |     ||   | |          |CAFE & NOSTALGIA|          |                                 |
||    |NOSTALGIA|     ||   | |          +----------------+          |     Buka hari ini 11.30-21.30   |
||    +---------+     ||   | |   mural panel: langit, dongker frame |     Sabtu buka lebih sore       |
|+--------------------+|   | +--------------------------------------+     [Petunjuk Arah] [WhatsApp]  |
|    | nail            |   |  7 cols                                       5 cols                     |
|[  KAMU  ]  jago      |   |  wall: kapur + plank seams, full bleed                                   |
|[  AKU   ]  rumah     |   +--------------------------------------------------------------------------+
|[ PERNAH ]  <- flap   |
|[ SAYANG ]  jago      |
|Buka hari ini         |
|11.30-21.30 (lead)    |
|Sabtu buka 14.30      |
|[Petunjuk ][WhatsApp] |
|wall: kapur seams     |
+----------------------+
```
- Panel padding 16/40px inside a 10px dongker frame; house up to 600px wide, centred. Greeting on
  one line at `--step-lead`, dongker text, ribbon dongker with awan "DATANG".
- h1 = `RUMAH<br>MANTAN` (dongker on rumah) + "CAFE & NOSTALGIA" (Archivo 700 caps, 0.14em,
  `.t-body` on phone, `.t-lead` from 1024px, one line).
- Sign 280px wide on desktop. Stripes jago / rumah / dongker / jago, words awan / dongker / awan / awan.
- Buttons: "Petunjuk Arah" jago fill, awan text; "WhatsApp" 2px dongker outline. Same DOM order at every width.
- Phone fold budget: banner ~60, panel ~404, sign ~168, hours ~60, buttons 52, plus gaps ≈ 805px,
  under 844. If the 390 fold shot cuts the buttons, drop the greeting to `--step-body` first.

**2. Dindingnya penuh kode.** Purpose: the joke behind the name, shown with the real signs.
```
Wall: phone (390)          Wall: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|H2 Dindingnya         |   | H2 Dindingnya penuh kode     +-[KOPI sign, -2deg]---------------+        |
|   penuh kode         |   |                              |                                  |        |
|paragraph (body)      |   | paragraph, body, max 46ch    |  owner-1.jpg 16:9, brightened    |        |
|+-[KOPI]------------+ |   | (description + MOCKUP copy)  |  ~690 x 388                      |        |
|| owner-1.jpg 16:9  | |   |                              |                                  |        |
|| (brightened)      | |   |                              +----------------------------------+        |
|+-------------------+ |   |                              caption (small, 12px below photo)           |
|caption (small)       |   |                              [STRESS FREE ZONE +1.5deg]   [ 10 ]         |
|[STRESS FREE] [10]    |   |  5 cols                       7 cols                                     |
|wall: kapur seams     |   +--------------------------------------------------------------------------+
+----------------------+
```
- KOPI sign: dongker board, awan "KOPI" (Londrina 900, `--step-lead`), "Ketika Otak Perlu
  Inspirasi" in small caps, 6px rumah frame. It overlaps the photo's top-left corner by 24px at -2°.
  "Stress free zone": kapur plank, dongker text, +1.5°. "10": awan plate, dongker numerals.
- owner-1: `filter: brightness(1.3) contrast(1.05) saturate(1.1)`, 4px awan border, never full bleed.

**3. Menu andalan.** Purpose: what to order and how cheap it is. Products as in §6.
```
Menu: phone (390)          Menu: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|band: rumah           |   | band: rumah (mustard), full bleed                                        |
|H2 Menu andalan       |   | H2 Menu andalan                                                          |
|intro (body)          |   | intro (body, max 52ch)                                                   |
|Kopi 15rb . Camilan   |   | Kopi mulai Rp 15rb . Camilan mulai Rp 15rb . Makanan mulai Rp 25rb       |
|15rb . Makanan 25rb   |   | +---------------------------+  [illus 4:3] H3 Nasi goreng                |
|+-------------------+ |   | |                           |              spesial mantan + desc         |
|| latte on rooster  | |   | |  kopi latte on rooster    |  ------------------------------------      |
|| saucer (illus 1:1)| |   | |  saucer, illustration 1:1 |  [illus 4:3] H3 Carbonara + desc           |
|+-------------------+ |   | |                           |  ------------------------------------      |
|Ilustrasi             |   | +---------------------------+  [owner-2  ] H3 Hot dog roti hitam         |
|H3 Kopi latte + desc  |   | Ilustrasi                      [photo 4:3]  + desc                       |
|[4:3] H3 Nasi goreng  |   | H3 Kopi latte + desc            6 cols                                   |
|      spesial mantan  |   |  6 cols                                                                  |
|[4:3] H3 Carbonara    |   | -----------------------------------------------------------------        |
|[pho] H3 Hot dog      |   | H3 Camilan: kentang goreng,     H3 Minuman: es teh manis,                |
|      roti hitam      |   |    pisang goreng, roti bakar      kopi tubruk, es kopi susu              |
|H3 Camilan  (list)    |   |    balikan, indomie (body)        gagal move on (body)                   |
|H3 Minuman  (list)    |   +--------------------------------------------------------------------------+
+----------------------+
```
- The price line is plain dongker Archivo 600 at `--step-body`, one line on desktop. Dish rows are
  separated by 1px dongker rules at 25%; the photo and illustrations share one tile size.

**4. Pojok favorit.** Purpose: where to sit, for groups and smokers.
```
Pojok: phone (390)         Pojok: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|band: langit          |   | band: langit, full bleed                                                 |
|H2 Pojok favorit      |   | H2 Pojok favorit         intro (lead): datang rame-rame? ada             |
|intro (lead)          |   |  4 cols                  tempatnya.  8 cols                              |
|+-------------------+ |   | +------------------+  +------------------+  +------------------+         |
|| stool+table 4:3   | |   | | stool + pallet   |  | steel-frame      |  | SMOKING AREA     |         |
|+-------------------+ |   | | table (kapur 4:3)|  | glass (kapur 4:3)|  | sign (kapur 4:3) |         |
|H3 Teras depan        |   | +------------------+  +------------------+  +------------------+         |
|body                  |   | H3 Teras depan        H3 Ruang kaca         H3 Area merokok              |
|+-------------------+ |   | body, 1-2 lines       body                  body                         |
|| steel glass 4:3   | |   |  4 cols                4 cols                4 cols                      |
|+-------------------+ |   +--------------------------------------------------------------------------+
|H3 Ruang kaca, body   |
|+-------------------+ |
|| SMOKING AREA 4:3  | |
|+-------------------+ |
|H3 Area merokok       |
+----------------------+
```
- Drawings: a pine stool and pallet table (rumah wood, dongker steel X legs); a 3×2 window grid
  (awan panes, 6px dongker mullions, one jago cushion block behind); a "SMOKING AREA" plank
  (real text, Londrina 900 dongker on awan) on a string.

**5. Kata mereka.** Purpose: social proof, paraphrased only.
```
Ulasan: phone (390)        Ulasan: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|wall: kapur seams     |   | wall: kapur + plank seams                                                |
|H2 Kata mereka        |   | H2 Kata mereka        +-o------------------+  +-o------------------+     |
|4,3 dari 708 ulasan   |   |                       | Harga ramah di     |  | Latte dipuji       |     |
|Google (lead)         |   | 4,3 dari 708 ulasan   | kantong (lead)     |  | rasanya ...        |     |
|Rangkuman (small)     |   | Google (lead)         +--------- -1deg ----+  +--------- +1deg ----+     |
|+-o-----------------+ |   | Rangkuman ulasan,     +-o------------------+  +-o------------------+     |
|| note 1 (lead)     | |   | bukan kutipan (small) | Lebih nyaman sejak |  | Pas buat nongkrong |     |
|+-------------------+ |   |                       | renovasi           |  | bareng teman       |     |
|+-o-----------------+ |   |  4 cols               +--------------------+  +--------------------+     |
|| note 2            | |   |                        8 cols (2 x 2 notes, awan paper, jago pin)        |
|+-------------------+ |   +--------------------------------------------------------------------------+
|  notes 3, 4 ...      |
+----------------------+
```
- Notes: awan, 24px padding, Archivo 500 at `--step-lead`, 12px jago pin dot, 24px gaps, tilted
  -1 / +1 / +1 / -1°. No quote marks, no stars per note, no names.

**6. Mampir ke rumah mantan.** Purpose: visit. **7. Kabarin dulu.** Purpose: contact. One dongker band.
```
Mampir: phone (390)        Mampir: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|band: dongker         |   | band: dongker, full bleed (text kapur)                                   |
|H2 Mampir ke rumah    |   | H2 Mampir ke rumah mantan    +----------------------------------+        |
|   mantan             |   | Kali ini dijamin nggak       | Google map iframe 4:3            |        |
|lead (MOCKUP)         |   | canggung. (lead)             | rumah frame 6px, lazy            |        |
|address (body)        |   | Jl. Pinang Raya No. 10, ...  |                                  |        |
|Minggu-Jumat          |   | Minggu-Jumat  11.30-21.30    |                                  |        |
|  11.30-21.30         |   | Sabtu         14.30-21.30    |                                  |        |
|Sabtu 14.30-21.30     |   |               [lebih sore]   |                                  |        |
|  [lebih sore]        |   | Buka setiap hari             |                                  |        |
|Buka setiap hari      |   | [Petunjuk Arah]              +----------------------------------+        |
|[Petunjuk Arah]       |   |  5 cols                       7 cols                                     |
|+-------------------+ |   +--------------------------------------------------------------------------+
|| map 4:3           | |
|+-------------------+ |
+----------------------+

Kabarin: phone (390)       Kabarin: desktop (1440)
+----------------------+   +--------------------------------------------------------------------------+
|band: dongker         |   | band: dongker continues, 1px rule above                                  |
|H2 Kabarin dulu       |   | H2 Kabarin dulu   sub (body): telepon, WhatsApp, atau DM Instagram       |
|sub (body)            |   | +---------------------+ +---------------------+ +----------------------+ |
|--------------------  |   | | TELEPON (small)     | | WHATSAPP (small)    | | INSTAGRAM (small)    | |
|TELEPON (small)       |   | | 0812-9884-0096      | | Chat 0812-9884-0096 | | @rumahmantancafe_jkt | |
|0812-9884-0096 (lead) |   | | (lead, tel: link)   | | (lead, MOCKUP)      | | (lead, confirm)      | |
|--------------------  |   | +---------------------+ +---------------------+ +----------------------+ |
|WHATSAPP (MOCKUP)     |   |  4 cols                  4 cols                  4 cols                  |
|Chat kami (lead)      |   | footer: name . address (small)                                           |
|--------------------  |   +--------------------------------------------------------------------------+
|INSTAGRAM (confirm)   |
|@rumahmantancafe_jkt  |
|--------------------  |
|footer (small)        |
+----------------------+
```
- Hours: a two-column list at `--step-lead` (day | time). The Saturday row gets a rumah "lebih
  sore" label (dongker small caps) right after the time.
- On dongker the primary button is rumah fill with dongker text (jago on dongker is only 2.3).
- Plaques: 2px kapur border, label in rumah small caps, value kapur `--step-lead`; the whole
  plaque is the link. Hover: border goes rumah.

## 8. Motion
**Signature: "the missing word".** In the hero sign, the dongker stripe first shows "• • •". 0.3s
after hydration the word "PERNAH" swings down on its top hinge (rotateX -95° → 0, opacity 0 → 1,
0.6s, expo.out) as the dots fade. At +0.75s the whole sign settles on its nail (rotate 1.5° → 0,
0.5s, power2.out). It's done by about 1.4s after load, runs once, and does one job: it lands the
joke. With reduced motion or no JS, "PERNAH" is just printed: no dots, no swing. The
pre-hydration guard and the 2s failsafe are in the TRD.
**Supporting:** one starter Reveal per section's content (20px, 0.6s, power2.out, once).
Buttons and plaques respond in CSS in 150ms. Nothing else moves: the clouds, smoke, house and
notes stay static.
**Tokens** (`lib/motion.ts`): reveal 0.6, hero 1.1, flap 0.6, swing 0.5, heroStart delay 0.3,
angles flap -95 / swing 1.5. Everything else as the starter. Lenis on its defaults.

## 9. What makes it this shop
1. Their own entrance mural is the hero, with the name painted on the little yellow house.
2. Their "Kamu / Aku / … / Sayang" sign finishes its own sentence, and that's the only animation.
3. The latte is drawn on the rooster saucer it's served on, and the real "KOPI: Ketika Otak Perlu
   Inspirasi" sign hangs next to a "10" plate for Jl. Pinang Raya No. 10.

## 10. Avoid
- The category template: cream and serif, a latte-art hero photo, a chalkboard menu, an "Our story"
  block, a centred heading over a row of equal cards.
- Literal "ex" kitsch: a pink or red valentine palette, hearts, broken hearts, sad or bitter copy.
  Never mean about anyone's ex.
- Turning the page into a poster: only the hero is the mural. Other sections are plain wall or
  colour bands with at most two signs each.
- Inventing sign text: only the real wordings, plus the one flagged word "PERNAH".
- Neo-brutalist tells (hard offset shadows, thick black boxes), glass, gradients, glow.
- Awan text on langit, jago text on rumah or dongker, Londrina in paragraphs.
- Upscaling owner-2 or putting owner-1 full bleed.
- Live music, the chicken bowl, mosquitoes, loud speakers. Quote marks or names on reviews.
- Looping clouds or smoke, signs swaying on scroll, staggered card reveals.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio is lead/body at 1.26, from 1500px up; lists at body, names at lead; the hero sign words reach `--step-head` only in the hero, under the 160px h1)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices, captions, "Ilustrasi", the Saturday marker and plaque labels all sit within 8–16px of what they describe)
- [x] Every section has a desktop wireframe that uses the width on purpose (7/5, 5/7, 6/6 + lists, 4/8 + 3-up, 4/8, 5/7, 3-up plaques)
- [x] At least 3 products shown (four: latte, nasi goreng and carbonara as drawings, the hot dog as the owner's photo)
- [x] Within motion-rules.md (one signature moment in the hero, section-level reveals only, transform/opacity, reduced motion = static, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages of text plus the required wireframes)
