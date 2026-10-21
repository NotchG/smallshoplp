# Design brief: Kedai Malabar

## 1. Concept
The page is Kedai Malabar's shop front at dusk, read top to bottom: string lights, the striped
awning, white capitals on red brick, an arched window. Then you sit down at a black tiled table.
This fits because locals know the kedai by its façade, and the terrace is at its best at night.
Signature moment: on load, the string lights across the top switch on one by one, left to right.
The last one lights the small bulb beside "Buka sekarang" in the hero.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | The whole world: brick, awnings, string lights, arched windows, façade capitals plus the "Malabar" script (photo-3), black/terracotta/white table tiles and the patterned cup (photo-1), lontong sayur (photo-2), the owner's night terrace (owner-1). Hours, 4.6/985, 5 reviews; Bahasa Indonesia |
| impeccable | Persuade mode. The brief pins the world, so the concept-seed roll was not run ("a brief-pinned direction beats the roll"). From mode-persuade: the world carries the page with working parts. From new-work §4: Full palette with committed fields; avoid the default-font list. From animate.md: one focal moment drawn from the product. From layout.md: a dense passage, then a quiet one |

Scene: a local checking a phone at dusk under street lights, deciding where to sit after work. So
the page opens dark at the very top (the night band), then turns to brick and light grounds that
read well in daylight too.

## 3. Palette (Full palette: each colour owns whole sections, not accents)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `bata` (brick) | #8A3A2A | Hero and Hubungi ground; prices and day highlights on Kapur | Kapur on Bata 7.14 ✓ |
| `arang` (black wall, awning stripe) | #1C1A18 | Night band, Malam section, footer, menu tiles; body text on light grounds | Kapur on Arang 16.0 ✓; Arang on Kapur 16.0 ✓ |
| `kapur` (white window frames) | #F7F6F2 | Menu and Kunjungi grounds; text on dark grounds; awning stripe; plates | see above |
| `lampu` (string-light glow) | #F4B740 | Bulbs, primary button fill, bullets on Arang. Never text on Kapur | Arang on Lampu 9.66 ✓; Lampu on Arang 9.66 ✓; Lampu vs Bata 4.30 (button edge ✓, ≥3) |
| `tegel` (blue-grey floor tiles) | #4E5E70 | Kata mereka ground; glass tint in illustrations | Kapur on Tegel 6.15 ✓ |
| `terakota` (table-tile terracotta) | #B4703F | Tile motifs, toast crust, coffee tints. Illustration only, never text | Kapur vs Terakota 3.64 (graphics only) |

Illustrations use these six and their mixes with Kapur or Arang, nothing else.
Section grounds in order: Arang band → Bata → Kapur → Arang → Tegel → Kapur → Bata → Arang.

## 4. Type
Jost (variable; headings, body, labels) echoes the façade's clean geometric capitals. Yellowtail
(one word only, "Malabar" in the Malam heading) echoes the script on the black feature wall. Both
come from `next/font/google`, latin subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1rem + 10vw, 7.5rem)`: 55px @390, 120px @1440 | "MALABAR" in the hero only. Jost 400, tracking 0.04em, lh 0.9, nowrap (one line guaranteed) |
| `--step-head` | `clamp(1.875rem, 1.3rem + 2.4vw, 3rem)`: 30 → 48px | h2, Jost 500 uppercase, tracking 0.06em, lh 1.1. Yellowtail "Malabar" at 1.3× inside the Malam h2 only |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)`: 22 → 26px | hero line, "KEDAI" and "ROTI & KOPI" (tracking 0.22em / 0.32em), menu group titles, praise and night-fact titles, rating line, address. lh 1.3 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.125rem)`: 17 → 18px | running text, menu items, tile captions, hours rows, buttons (Jost 500). lh 1.6 |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.1vw, 0.875rem)`: 13 → 14px | caption details, "Harga contoh", "hari ini" tag, footer. lh 1.5 |

Ratios: 1.31/1.29 · 1.29/1.44 · 1.36/1.85 · 1.83/2.5 (phone/desktop). All ≥ 1.25 ✓.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 75rem (1200px) |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.6rem + 2.6vw, 2.5rem)`: 20px / 40px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.6rem + 5vw, 7rem)`: 64px / 112px |

- Grid: 12 columns, 24px gap on desktop; two columns start at `lg` (1024px).
- **Proximity:** captions start within 12px of their tile. Prices sit inline 12px after the item
  name, never right-pinned. The "hari ini" tag sits 12px after the day name. The hours table is
  capped at 22rem.
- **Wide screens:** every section is two columns or a five-tile row at 1440. No centred narrow column.
- **Lists:** menu items, hours and facts use `--step-body`. Their titles use `--step-lead`, below `--step-head`.

## 6. Products on the page
Five dishes, drawn as flat plan-view SVGs (seen from above) on Arang encaustic tiles, each with
Terakota and Kapur quarter-motifs in its corners, like the table tops. Plates are Kapur. The dishes
are redrawn from brief.md's descriptions; the customer photos inform colour and arrangement only,
and are never traced.
1. **Roti Nougat** (review 1): three thick whole-wheat slices, a pale nougat layer, nut bits. Caption "roti gandum · Rp 22rb" [price MOCKUP].
2. **Es Kopi Tubruk** (review 1): glass from above, Tegel rim, dark coffee, 4 ice cubes, Bata straw. Caption "panas atau es · Rp 12rb" [price MOCKUP].
3. **Roti bakar coklat kacang** [name MOCKUP] (photos): a sliced thick loaf, Arang sprinkle strokes, chocolate drizzle, crushed peanuts.
4. **Kopi susu panas** [name MOCKUP] (photos): cup and saucer from above, Kapur cup with an Arang dotted lattice band (the patterned cup).
5. **Lontong sayur** (photos): bowl of Lampu-tinted broth, lontong rounds, half egg, Bata sambal dab, two krupuk. Caption "ayam, telur, sambal, kerupuk · Rp 25rb" [price MOCKUP].

Grouping: the pairs [1+2] and [3+4] touch with 2px grout; then lontong. The intro line names the
Roti Nougat + Es Kopi Tubruk pairing a guest praised. Desktop: one row of five ~228px tiles, with
24px between groups. Phone: two columns (~163px tiles), with lontong as one wide tile spanning both.
Below the tiles: the full menu list, every [MOCKUP] item flagged with `data-mockup`.

## 7. Sections
**Night band + Hero**: recognition, today's hours, directions. Owner photo cropped x380 y60 540×720.
```
Hero: phone (390)          Hero: desktop (1440)
+------------------+       +----------------------------------------------+
|·o··o··o··o··o··o·| Arang |··o····o····o····o····o····o····o····o····o···| 56/80px
|▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐| awning|▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐| 44/60px
|KEDAI       (Bata)|       |  KEDAI                       (Bata)  .-~~-.  |
|MALABAR           |       |  MALABAR                            /      \ |
|      ROTI & KOPI |       |                 ROTI & KOPI         | arch | |
|Roti hangat dan   |       |  Roti hangat dan kopi tubruk di     | ow-1 | |
|kopi tubruk di ...|       |  Cipinang Jaya, buka sampai malam.  | 3:4  | |
|(o) Buka sekarang |       |  (o) Buka sekarang · 10.00–22.00    |      | |
|  · 10.00–22.00   |       |  [Petunjuk Arah]  [WhatsApp]        +------+ |
|[Petunjuk][WA   ] |       |  cols 1–8                          cols 9–12 |
| .-~~~~~~~~~~~-.  |       +----------------------------------------------+
| |  arch photo  | |  <- the fold falls here: buttons above it, photo peeks in
+------------------+
```
**Menu andalan**: show the products and the price level. Kapur ground.
```
phone                       desktop
+------------------+        +----------------------------------------------+
|MENU ANDALAN      |        | MENU ANDALAN           intro line (cols 7–12)|
|intro line        |        | [tile][tile]  [tile][tile]  [tile]           |
|[tile ][tile ]    |        |  Roti   Es     Roti    Kopi   Lontong        |
| Roti   Es Kopi   |        |  Nougat Kopi   bakar   susu   sayur          |
| Nougat Tubruk    |        |  22rb   Tubruk coklat  panas  25rb           |
|[tile ][tile ]    |        | ROTI       KOPI        NON-KOPI    MAKAN     |
|[ lontong, wide ] |        | items·price items·price items     items·price|
|ROTI / KOPI / ... |        | Harga contoh, menunggu konfirmasi            |
+------------------+        +----------------------------------------------+
```
**Malam di Malabar**: sell the evening. Arang ground, static lit garland, the quiet passage.
```
phone                       desktop
+------------------+        +----------------------------------------------+
|·o··o··o··o··(lit)|        |··o····o····o····o····o····o····o····o···(lit)|
|MALAM DI          |        | MALAM DI            * Teras di bawah lampu   |
|  Malabar (script)|        |   Malabar (script)  * Area merokok & bebas   |
|one copy line     |        | one copy line         rokok, terpisah        |
|* Teras ...       |        | cols 1–5            * Parkir gampang         |
|* Merokok/bebas   |        |                     * Buka sampai malam      |
|* Parkir ...      |        |                     cols 7–12, lead + body   |
|* Buka ...        |        +----------------------------------------------+
+------------------+
```
**Kata mereka**: proof without quotes. Tegel ground, Kapur text.
```
phone                       desktop
+------------------+        +----------------------------------------------+
|KATA MEREKA       |        | KATA MEREKA          | Harga       | Tempat  |
|4,6 dari 985      |        | 4,6 dari 985 ulasan  | bersahabat  | lega,   |
|ulasan di Google  |        | di Google            | ...         | cantik  |
|— Harga bersahab. |        | Dirangkum dari       |-------------|---------|
|— Tempat lega ... |        | ulasan, bukan        | Teras enak  | Staf    |
|— Teras malam ... |        | kutipan              | malam hari  | ramah   |
|— Staf ramah ...  |        | cols 1–4             | cols 5–12, 2 × 2      |
+------------------+        +----------------------------------------------+
```
**Kunjungi kami**: find it, plan the visit. The awning returns here, the only other awning on the page.
```
phone                       desktop
+------------------+        +----------------------------------------------+
|▌▐▌▐▌▐ awning ▌▐▌▐|        |▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐ awning ▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐|
|KUNJUNGI KAMI     |        | KUNJUNGI KAMI       | +--------------------+ |
|Jl. Cipinang Jaya |        | Jl. Cipinang Jaya   | |                    | |
|Raya No.27B ...   |        | Raya No.27B, ...    | |  map embed         | |
|[Petunjuk Arah]   |        | [Petunjuk Arah]     | |  (Kapur block with | |
|Senin  10.00–22.00|        | Senin   10.00–22.00 | |   address behind)  | |
|Rabu   12.00–22.00|        | Rabu    12.00–22.00 | |                    | |
|Jumat  13.00–23.00|        | (7 rows, 22rem max) | +--------------------+ |
|[ map, 4:3 ]      |        | cols 1–5            | cols 6–12             |
+------------------+        +----------------------------------------------+
```
**Hubungi kami**: every way to reach them. Bata ground.
```
phone                       desktop
+------------------+        +----------------------------------------------+
|HUBUNGI KAMI      |        | HUBUNGI KAMI               [ WhatsApp       ]|
|Mampir sebentar,  |        | Mampir sebentar,           [ Telepon 0816-… ]|
|pulangnya nanti.  |        | pulangnya nanti saja.      [ Petunjuk Arah  ]|
|[WhatsApp       ] |        | Bisa bayar non-tunai       Instagram [placeh.]|
|[Telepon 0816-… ] |        | cols 1–7                   cols 8–12         |
|[Petunjuk Arah  ] |        +----------------------------------------------+
|non-tunai · IG    |
+------------------+
```
**Footer**: Arang ground, draft note.
```
+------------------+        +----------------------------------------------+
|KEDAI MALABAR     |        | KEDAI MALABAR · ROTI & KOPI   Jl. Cipinang … |
|ROTI & KOPI · addr|        | Ini contoh tampilan, belum situs resmi …     |
+------------------+        +----------------------------------------------+
```

## 8. Motion
**Signature: "Lampu menyala"** (night band, on load). One SVG garland in 3 swags with 18 bulbs.
Each bulb has a dim layer and a lit layer plus a glow. Lit layers fade in from opacity 0 (the
core also scales 0.85→1), left to right: 0.15s delay, 0.4s each, stagger amount 0.9s,
`power2.out`, about 1.45s in all. The hero's status bulb lights last, and only if the kedai is
open now. When closed, the status bulb stays dim and the text reads "Sudah tutup · besok buka 10.00".
Reduced motion: everything lit, nothing moves. Hero text, buttons and photo never animate.
Supporting: one fade-up per section (20px, 0.6s, `power2.out`, once) on Menu, Malam, Kata mereka,
Kunjungi and Hubungi. Buttons get CSS hover/press feedback at 180/150ms. Nothing else moves. The
Malam garland is static. Tokens: `garland { delay 0.15, bulb 0.4, staggerAmount 0.9 }`.

## 9. What makes it this shop
- The façade order as the page's opening: lights, then awning, then "KEDAI / MALABAR / ROTI & KOPI"
  set like the sign on the brick, then the owner's night terrace inside an arched window.
- The status bulb: the lights come on, and one of them tells you whether the kedai is open now.
  Rabu 12.00 and Jumat 13.00 openings are called out because they catch people out.
- Dishes on the black, terracotta and white table tiles, the patterned kopi susu cup, the Roti Nougat
  + Es Kopi Tubruk pairing, and "Malabar" in script on a black ground like the feature wall.

## 10. Avoid
- Category defaults: full-bleed photo with a dark overlay and a centred serif; a cream ground with a
  serif and a terracotta accent; equal cards with stock icons; star widgets; a quote carousel with
  names; an invented "Cerita kami".
- Bistro costume: no French words, Eiffel motifs or "Bonjour". This is a Jakarta kedai.
- Overuse: the awning appears twice (hero, Kunjungi); the script appears once; the garland is
  animated only in the hero. No brick texture or photo-noise: Bata is a flat colour.
- Busy tiles: corner motifs stay small (at most 22% of the tile), so dishes stay readable.
- Claims: no "sejuk" or "tenang", no Java Malabar beans, no latte or cheese bread as headliners,
  no customer photos in any form, no prices beyond the six in brief.md.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): five drawn dishes
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
