# Design brief: Kana Coffee & Space

## 1. Concept
Kana's own "New Menu" poster opened out into a page: an ochre ground, their handwriting in rust,
dishes numbered ①–④ to match the numbers already printed on the owner's photos, and pen notes in
the margins. The shop already speaks this language, and a hidden-gem cafe needs a page that points the way.
Signature moment: on load, a handwritten note and arrow ("sedikit tersembunyi, ini jalannya")
writes itself in and lands on "Petunjuk Arah", because reviewers say the cafe is hard to spot from the main road.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Pinned palette (ochre, rust, cream), script plus sans pairing, every fact, owner-1 as hero, owner-2/owner-3 as product crops; customer photos confirmed the steel/oak/rug materials only |
| impeccable | Persuade mode; brief-pinned world honoured ("the brief wins"); Drenched colour strategy; a script face that matches the logo, not a default; the hero as a thesis (directions plus recognition), not a stock split hero |
| motion-rules.md | One signature moment; transform and opacity only, so the "writing" is a nested translate wipe, not a stroke draw or clip-path; reduced motion means none |
| Process note | No PRODUCT.md (writes outside docs/ aren't allowed), so `concept-seed` refused and no decision page ran; brief.md served as product truth and as the pinned direction, which beats the roll per new-work.md |

## 3. Palette (6 named colours)
Strategy: Drenched. Ochre owns the hero, the menu and the visit section; steel and oak give the
rest of the page rhythm. Cream is never the main ground of more than one section.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `ochre` | #D59950 | Poster ground: hero, Menu andalan, Kunjungi kami | steel on ochre 7.19 ✓; rust on ochre 4.52 ✓ (all sizes) |
| `ochre-deep` | #CB8E4B | Tone-on-tone giant "k" watermark, hairlines on ochre | decorative only; never behind text smaller than `--step-head` (rust on it 3.99) |
| `rust` | #642A10 | Logo ink: wordmark, script headings, primary button fill, circled numbers | cream on rust 10.59 ✓; rust on oak 8.19 ✓; rust on cream 10.59 ✓ |
| `steel` | #1C1714 | Black steel and mesh ceiling: body text, Fasilitas and footer grounds | cream on steel 16.85 ✓; ochre on steel 7.19 ✓ |
| `oak` | #EADBC2 | Light oak veneer: Satu tempat ground | steel on oak 13.04 ✓ |
| `cream` | #FBF9F1 | Poster lettering: text on rust and steel, Kata mereka ground | steel on cream 16.85 ✓ |

Rules: small text on ochre is always steel. Cream on ochre (2.34) is for decorative strokes only.
On steel the primary button flips to ochre fill with steel text (7.19). Focus ring: 2px steel on
light grounds and 2px ochre on steel and rust, 3px offset.

## 4. Type
Two families via `next/font/google`, latin subset, `display: swap`:
- **Mynerve** 400 (script). It was picked by rendering 11 handwriting faces beside the owner-3 logo.
  Mynerve came closest to its rounded monoline pen and its "k" and "a". Use it for the wordmark,
  section headings and the one hero annotation only.
- **Jost** variable, 400/500/600 (geometric sans). It matches the clean sans of the posters and the
  tracked "COFFEE & SPACE" caps, and its Futura line suits the steel-and-oak industrial-modern room.
  Use it for everything else.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(7rem, 4rem + 11vw, 13rem)` (112→208px) | hero wordmark "kana" only (Mynerve, line-height 0.9, always one line) |
| `--step-head` | `clamp(2.25rem, 1.6rem + 2.4vw, 3.75rem)` (36→60px) | section headings (Mynerve, lh 1.1) |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)` (22→26px) | hero line, lead statements, item names that act as h3 (Jost 500, lh 1.3) |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` (17→18px) | running text, menu items, prices (Jost 400/600, lh 1.55) |
| `--step-small` | `clamp(0.84375rem, 0.82rem + 0.1vw, 0.875rem)` (13.5→14px) | captions, "COFFEE & SPACE" (tracked 0.3em, caps, 500), labels, banner |

Ratios: display/head ≥ 3.1, head/lead ≥ 1.6, lead/body ≥ 1.29, body/small ≥ 1.26. Menu item names
use `--step-body` 600 and prices `--step-body` 600 in rust, never larger. Circled numbers are 1.75em
rings at `--step-small`.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 75rem (1200px) |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.8rem + 2vw, 2.5rem)` (20px / 40px) |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.5rem + 5vw, 7.5rem)` (64px / 112px) |

- 12-column grid at ≥1024px, gap 2rem; single column below 768px; two columns 768–1023px.
- **Proximity:** a price follows its dish name on the same line with a 0.75rem gap. On phone it wraps
  to the line below. It's never right-aligned across a wide row. Captions sit 12px under their photo.
  The hero arrow tip ends within 16px of the button it points at.
- **Wide screens:** every section below is a deliberate 12-column composition (see §7); the closing
  band is the one visibly narrow, centred block (max 40rem).
- **Lists:** items at `--step-body`; item names that act as h3 at `--step-lead` at most. Nothing in a list
  uses Mynerve.
- Sharp corners on photos and the map (like the poster's photo panels); buttons get a 2px radius.
  No cards with shadows.

## 6. Products on the page
Four products appear in the owner's own photos. These are crops of their posters, so the baked-in
English headline text stays out of frame. Crop with `sips`/`sharp` and export WebP q80 into `site/public/img/`:

| File | Source and crop box (x1,y1,x2,y2 px) | Shows | Where |
|---|---|---|---|
| `menu-nasgor-teri.webp` | owner-3 (85,305,620,915) | ① Nasi Goreng Teri Cabai Hijau with egg, kerupuk and acar (baked ① marker) | Menu andalan, row 1 |
| `menu-soto-paradise.webp` | owner-3 (625,960,1165,1668) | ② Soto Betawi with rice, ④ Paradise Punch (baked ② ④ markers) | Menu andalan, row 1 |
| `menu-asian-range.webp` | owner-2 (0,640,1241,1480) | The Main Course Asian plates, incl. the "Our Signature" plate ([MOCKUP] Nasi Goreng Kana) | Menu andalan, row 2 |
| `hero-room.webp` | owner-1 full (1284×1712), q78 | The main room (not a product) | Hero |

The list numbers ①–④ in the menu are the same numbers printed on the photos. That's the link
between text and picture, so the list keeps the poster's order. Crops A and B are ~540px wide, so
they display at ≤ 380px CSS. The unnamed drink in crop A gets no caption.

## 7. Sections
**Hero** (ochre). Thesis: who it is plus how to get there. The `h1` holds the wordmark and the caps
line. Photo: 4:5, `object-position: 50% 30%` so the mesh ceiling and track lights stay in.
The giant "k" watermark (Mynerve, `ochre-deep`, aria-hidden) sits behind the photo's lower-left edge.
```
Hero: phone (390)        Hero: desktop (1440)
+------------------+     +------------------------------------------------+
|draf banner       |     |draf banner                                     |
|Jl. BBKK·Ps Rebo  |     |  Jl. BBKK · Pasar Rebo (small)  +--------------+
|kana  (display)   |     |  kana   (display, cols 1-6)     | owner-1 4:5  |
| COFFEE & SPACE   |     |   COFFEE & SPACE                | cols 7-12,   |
|Ngopi, bekerja,   |     |  Ngopi, bekerja, dan berkumpul  | bleeds to top|
|dan berkumpul...  |     |  di Pasar Rebo. (lead)          | and right    |
|Buka hari ini     |     |  Buka hari ini 08.00-22.00      | edge of the  |
|08.00-22.00       |     |      sedikit tersembunyi,       | viewport     |
|  sedikit ter-  ⤵ |     |      ini jalannya ⤵             |              |
|[Petunjuk Arah]   |     |  [Petunjuk Arah] [WhatsApp]     |   k (wmark)  |
|[WhatsApp]        |     |  Lihat menu ↓                   +--------------+
|+----------------+|     +------------------------------------------------+
||owner-1 4:5     ||
```
**Menu andalan** (ochre). Their poster, extended. Headings "Hidangan utama" and "Mocktail" are
Jost caps labels at `--step-small`.
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Menu andalan ~~~  |     | Menu andalan (head) + lead          (cols 1-12)|
|[crop A  ①]       |     | [crop A ①]  [crop B ④②]   | HIDANGAN UTAMA    |
|HIDANGAN UTAMA    |     |  cols 1-4    cols 5-7,    | ① Nasi Goreng Teri|
|① Nasi Goreng Teri|     |              offset 64px  |   Cabai Hijau     |
|  Cabai Hijau     |     |              down         |   Rp 35rb · telur |
|  Rp 35rb · telur |     |                           | ② Soto Betawi     |
|② Soto Betawi     |     |                           |   Rp 48rb · nasi  |
|[crop B ④②]      |     |                           | MOCKTAIL ③ ④      |
|MOCKTAIL ③ ④      |     |---------------------------+ cols 8-12 --------|
|[crop C range]    |     | [crop C, 3:2, cols 1-7]   | FAVORIT TAMU      |
|FAVORIT TAMU list |     | caption under it          | Nasgor Kana ...   |
|JUGA DI MENU      |     |---------------------------+-------------------|
| Kopi/Non-kopi/.. |     | JUGA DI MENU: Kopi | Non-kopi | Camilan (3 col)|
+------------------+     +------------------------------------------------+
```
**Satu tempat, banyak ruang** (oak). Six spaces and surprises: each has a name at `--step-lead` and one line of body text.
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Satu tempat,      |     | Satu tempat,   | Ruang ber-AC | Area luar lt.1 |
|banyak ruang      |     | banyak ruang   | line         | line           |
|lead              |     | lead           |--------------+----------------|
|Ruang ber-AC      |     | (cols 1-4)     | Lt.2, boleh  | Kolam ikan     |
|---- hairline     |     |                | merokok      |                |
|Area luar lt.1 ...|     |                |--------------+----------------|
|(6 rows)          |     |                | Motor dipajang| Toko abaya    |
+------------------+     +------------------------------------------------+
```
(Desktop grid: cols 5–12 as 2 columns × 3 rows, hairlines in steel at 15% opacity.)

**Fasilitas** (steel). Heading in ochre script, details in cream. "Untuk acara" sits right under the list with its button directly below its line.
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Fasilitas         |     | Fasilitas      | Mushola & mukena | Banyak     |
|lead              |     | lead (cols1-4) | wudhu di luar    | colokan    |
|Mushola & mukena  |     |                | Toilet bersih    | Parkir     |
|Banyak colokan    |     |                | kantong kecil    | dijaga     |
|Toilet bersih     |     |                | Tenang, tanpa    | motor/4-6  |
|Parkir dijaga     |     |                | musik            | mobil      |
|Tenang, tnp musik |     |                |----------------------------|
|UNTUK ACARA line  |     |                | UNTUK ACARA: arisan, bukber|
|[WhatsApp]        |     |                | [Pesan lewat WhatsApp]     |
+------------------+     +------------------------------------------------+
```
**Kata mereka** (cream). No quotation marks, because these are paraphrases.
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Kata mereka       |     | Kata mereka    | Tersembunyi, | Nasi gorengnya|
|Dirangkum dari    |     | Dirangkum dari | layak dicari | paling dipuji |
|ulasan Google     |     | ulasan Google  | body         | body          |
|point 1 (lead+body)|    | (cols 1-4)     |--------------+---------------|
|point 2 ...       |     |                | Tenang untuk | Bersih sampai |
|(4 stacked)       |     |                | kerja        | toilet        |
+------------------+     +------------------------------------------------+
```
**Kunjungi kami** (ochre). Steps reuse the circled-number device.
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Kunjungi kami     |     | Kunjungi kami     | +----------------------------+
|Jl. BBKK, Pekayon |     | Jl. BBKK, Pekayon | | Google Maps iframe 4:3     |
|① Masuk dari jalan|     | ① jalan utama     | | cols 6-12, sharp corners,  |
|② ikuti Jl. BBKK  |     | ② ikuti Jl. BBKK  | | lazy                       |
|Senin-Minggu      |     | Senin-Minggu      | |                            |
|08.00-22.00       |     | 08.00-22.00       | |                            |
|Buka setiap hari  |     | Buka setiap hari  | |                            |
|[Petunjuk Arah]   |     | [Petunjuk Arah]   | +----------------------------+
|[map 4:3]         |     | (cols 1-5)        |                            |
+------------------+     +------------------------------------------------+
```
**Hubungi kami** (rust) and **Footer** (steel).
```
phone                    desktop
+------------------+     +------------------------------------------------+
|Sampai ketemu     |     |        Sampai ketemu di Kana (head, cream)     |
|di Kana           |     |        tone line (lead)  max 40rem, centred    |
|tone line         |     |        [WhatsApp] [Petunjuk Arah]              |
|[WhatsApp]        |     |        Nomor WhatsApp menyusul (small)         |
|[Petunjuk Arah]   |     |------------------------------------------------|
|----- footer -----|     | kana COFFEE&SPACE | Jl. BBKK... | Draf situs,  |
|kana · alamat ·   |     | (cols 1-4)        | Senin-Minggu| untuk pemilik|
|jam · draf note   |     |                   | (cols 5-8)  | (cols 9-12)  |
+------------------+     +------------------------------------------------+
```

## 8. Motion
**Signature: "ditandai untukmu" (marked for you).** Hero only, on load:
1. Wordmark: opacity 0→1, y 16→0, 0.7s, `expo.out`, at 0s.
2. Caps line, lead, hours and buttons as one group: opacity 0→1, y 12→0, 0.6s, `expo.out`, at 0.15s.
3. Photo: wrapper opacity 0→1 and y 24→0; inner img scale 1.04→1. 0.9s, `expo.out`, at 0.2s.
4. Annotation (note plus arrow in one wrapper): outer `xPercent` -101→0 and inner `xPercent` 101→0 with
   overflow hidden. It reads as a pen writing left to right. 0.6s, `power2.out`, at 0.75s. The sequence
   ends by 1.35s.
Reduced motion: everything at its final state, no tweens. Content stays visible with JS off.

**Supporting:** each section after the hero gets the starter `Reveal` once: opacity, y 20→0, 0.6s,
`power2.out`, start "top 85%". No per-item stagger. Buttons: on hover an overlay `::after` fades
0→0.12 opacity and the button lifts 1px, 180ms ease-out; on press it lifts 0, 120ms. Photos have no
hover effects.
Tokens for `lib/motion.ts` (map onto the starter's names if they differ):
`ease.out = "expo.out"`, `ease.soft = "power2.out"`, `dur.reveal = 0.6`, `dur.hero = 0.7`,
`dur.photo = 0.9`, `dur.write = 0.6`, `dist.reveal = 20`.

## 9. What makes it this shop
- The circled ①–④ from their New Menu poster number the list and match the numbers already printed on
  their dish photos. Text and picture are tied the way Kana ties them.
- The only animation is a pen note pointing at "Petunjuk Arah". This cafe is "yang tau, tau aja": hard to
  spot from the main road and worth finding.
- Fasilitas, set on mesh-ceiling steel, presents the mushola with mukena, the pad bags in the toilets
  and the room with no music as plain features. Few cafe sites would say these things, and Kana's guests
  noticed every one.

## 10. Avoid
- Category defaults: a dark photo hero with a centred white title, coffee-bean icons, an "Our Story"
  block, icon cards in a three-up grid, cream ground with a serif display and a terracotta accent.
- Too much script. Mynerve appears only in the wordmark, the section headings and the one annotation.
  It never appears in body text, buttons, prices or list items. No extra doodles: the photo crops
  already carry Kana's own.
- Pasting whole posters: use crops only. Their baked "New Menu" and "Main Course Asian" headlines would
  compete with ours.
- Muddy ochre: at most three ochre sections, never two light sections back to back, and never small rust
  text over the `ochre-deep` watermark.
- Invention: no stars, no rating number, no reviewer names or quotes, no "best cafe in Kalisari", no
  floor plan or drawn map, no "parkir luas", no complimentary-dates offer, no fake WhatsApp number.
- A broken pointer: the arrow must be anchored to the button group, not the viewport. Check it at 390,
  768, 1024 and 1440 so it never points at empty ochre.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Smallest ratio is body/small 1.26. Lists sit at body, item names at lead at most, and headings are at head.
- [x] Max content width set (75rem); no detail pinned far from what it describes. Prices sit inline after names, captions 12px under photos, the arrow within 16px of its button, and the Untuk acara button directly under its line.
- [x] Every section has a desktop wireframe that uses the width on purpose. All are 12-column splits; the hero photo bleeds right; the closing band is deliberately narrow and centred.
- [x] At least 3 products shown (food and product shops): Nasi Goreng Teri Cabai Hijau, Soto Betawi, Paradise Punch and the Main Course Asian range, all from owner photos.
- [x] Within motion-rules.md: one signature moment, transform and opacity only, section-level reveals, no React Bits, reduced motion means none.
- [x] Brief is decisions, not essays (2–4 pages).
