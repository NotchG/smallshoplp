# Design brief: Warkop Bank Gondrong JGC

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"Gerobak merah."** The page is the warkop's red cart: a cart-red panel with the name
hand-lettered on it in cream, and a dark rail the menu hangs from in sachet strips (renceng),
the way the drinks hang on the real cart that every regular recognises.
**Signature moment:** on load, the yellow "BUKA · 05.30–24.00" sign hanging from the hero rail
gets a nudge and sways to rest, in about 1.5 s.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Hours as the story, santai Bahasa voice, praise points (shade, crew, cheap drinks, kopi pahit), the pinned palette and type mood |
| owner-1.jpg / owner-3.jpg | The real cart red and the sachet strips on a rail give the ground and menu form; mango leaves at night give the green and night sections |
| photo-1..3 (reference only) | Confirm the orange umbrella, green walls and geometric lesehan mats. Not shown, not traced |
| impeccable | Persuade mode; the world carries the page, not a picture of it; committed colour; faces off its default list; one focal motion from the object's physics; avoids the "black boxes and hard offset shadows" cluster |
| Direction derivation | Seven candidates: truck-back lettering, the renceng wall, lesehan mats, a cardboard price menu, the umbrella-and-plastic-chair kit, a dawn-to-midnight street lamp, a WhatsApp "ngopi kuy" chat. Chosen: gerobak sign-painting as the world, the renceng rail as the menu. Derived by hand: impeccable's concept-seed launcher would download a binary outside `docs/`, so it was not run |
| motion-rules.md | One signature, section-level reveals, transform and opacity only |

## 3. Palette (6 named colours)
Strategy: Committed. Merah owns the hero and the close (about 40% of the page); every other
ground owns a whole section. The multicolour sachet wall lives in the photo, not in the UI.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `merah` (cart red) | #BA2118 | Hero and close ground, "Di gerobak" strip, JGC plate text | krem on merah 5.67 ✓ |
| `krem` (enamel cream) | #FFF1D6 | Lettering on red, green and night; Ngopi and Kunjungi grounds | arang on krem 15.4 ✓ |
| `arang` (tyre black) | #1F1A17 | Text on light grounds, rails, night section, footer, banner | krem on arang 15.4 ✓; arang on merah 2.7 ✗, never |
| `kuning` (lamp yellow) | #FFC233 | BUKA sign, primary buttons, night time labels, focus ring on dark | arang on kuning 10.7 ✓; vs merah 3.9, button edge only |
| `hijau` (mango leaf) | #2D5A32 | Mangga ground, "Makan" strip | krem on hijau 7.2 ✓; kuning 5.0 ✓ |
| `semen` (worn concrete) | #DDD7CC | Kata mereka ground | arang on semen 12.0 ✓; merah 4.4, large only |

## 4. Type
**Shrikhand** (h1 and h2 only; 400; latin) is a bold, curvy face drawn from South Asian
hand-painted shop and truck lettering, cousin to Jakarta's painted warung signs.
**Archivo** (everything else; variable weight 400–800 plus width; latin) is a sturdy grotesque.
Its width axis (87–100) keeps names and prices on one line in narrow tiles, and it has tabular
figures.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | clamp(3.25rem, 1.857rem + 5.714vw, 7rem): 52→112px | Hero name only. Shrikhand, line-height 1.05, three forced lines |
| `--step-head` | clamp(2rem, 1.443rem + 2.286vw, 3.5rem): 32→56px | Section h2. Shrikhand, line-height 1.1 |
| `--step-lead` | clamp(1.4375rem, 1.368rem + 0.286vw, 1.625rem): 23→26px | Hero sub-line, BUKA word, JGC plate, spot titles, times, review paraphrases, rating. Archivo 700, line-height 1.25 |
| `--step-body` | clamp(1.125rem, 1.102rem + 0.095vw, 1.1875rem): 18→19px | Running text, item names and prices, buttons. Archivo 400/700, line-height 1.55 (1.3 in tiles) |
| `--step-small` | clamp(0.875rem, 0.852rem + 0.095vw, 0.9375rem): 14→15px | Strip labels, captions, kicker, notes, banner. Archivo 600, line-height 1.4 |

Ratios, smallest step to largest: phone 1.29 / 1.28 / 1.39 / 1.63, desktop 1.27 / 1.37 / 2.15 / 2.0.
- h1 is three block lines, Warkop / Bank / Gondrong, plus "JGC" as a small krem plate inline
  after Gondrong (merah Archivo 800, `--step-lead`; may wrap under at 360px). The h1 text is
  the full name. A sign-painter shade sits on the h1 only: `text-shadow: 0.05em 0.05em 0 arang`.
- Body text never goes below 18px, because people read this outdoors in glare.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px (75rem); 12 columns, gap 24px desktop / 16px phone |
| Page margins phone / desktop (`--gutter`) | 20 / 48px: clamp(1.25rem, 0.6rem + 2.667vw, 3rem) |
| Section padding phone / desktop (`--section-y`) | 64 / 112px: clamp(4rem, 2.886rem + 4.571vw, 7rem) |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices sit 4–8px under the item name in the
  same tile. Strip labels sit on the rail above their strip. Captions sit 8px under their
  photo. The "harga contoh" note sits 16px above the rail.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident. Only the hero photo leaves the
  container; it bleeds to the right edge.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- The rail is a 6px `arang` bar, used three times: hero top, above the menu, top of the close.

## 6. Products on the page
At least 3 products shown, as pictures:
1. **Kopi hitam (kopi pahit):** a flat illustration of a small clear glass of black coffee, the
   kind in the photos. It heads the "Kopi" strip.
2. **Es kopi susu:** a flat illustration of a plastic cup with a straw, ice and tan coffee. It
   heads the "Es" strip.
3. **Indomie telur [MOCKUP]:** a flat illustration of a bowl of noodles with an egg. It heads
   the "Makan" strip.
4. **The real sachet wall:** an owner-1 crop (the hanging strips only) heads the "Di gerobak"
   strip, and the whole cart is in the hero.

Style: flat sign-painter. A 2.5px outline in `currentColor`, one accent fill, one krem
highlight stroke, no gradients. Inline SVG at 96px desktop / 64px phone.

## 7. Sections
**Hero.** Recognition plus actions. Merah panel with the rail on top. The sign hangs on strings
from the rail beside name lines 1–2; those lines get right padding equal to the sign's width +
16px, so they never overlap it. Phone: owner-1 full-bleed under the buttons,
`clamp(260px, 40svh, 380px)` tall, object-position 50% 42%. Desktop: owner-1 runs from column 8
to the right viewport edge at full hero height, `min(100svh − banner, 860px)`.
```
Hero: phone (390)         Hero: desktop (1440)
+----------------------+  +------------------------------------------------------+
| draft banner         |  | draft banner                                         |
|######## rail ########|  |################## rail (full width) #################|
| Warung kopi·JGC  /\  |  | Warung kopi · JGC, Cakung     /  \  |+---------------+
| WARKOP       +----+  |  | WARKOP                      +------+|| owner-1.jpg   |
| BANK         |BUKA|  |  | BANK                        | BUKA ||| sachet cart,  |
| GONDRONG [JGC]----+  |  | GONDRONG [JGC]              +------+|| cols 8-12 to  |
| Terasnya warga JGC,  |  | Terasnya warga JGC, dari kopi subuh || the right edge|
| dari kopi subuh ...  |  | sampai kopi tengah malam.           ||               |
| [Petunjuk Arah][Tel] |  | [Petunjuk Arah]  [Telepon]          ||               |
| | owner-1 full bleed |  |       (merah panel, cols 1-7)       |+---------------+
+----------------------+  +------------------------------------------------------+
```
**Ngopi dulu.** What's on and how cheap. Krem ground. The h2 and lead sit above the rail;
four strips hang below it, one colour each (Kopi arang, Es kuning, Di gerobak merah, Makan
hijau). The strips are different lengths, so their bottoms are ragged. Each tile has an 8px
crimped seal top and bottom, with a dashed perforation line where tiles meet. Phone: 2
columns, a rail over each pair.
```
Ngopi: phone              Ngopi: desktop
+----------------------+  +------------------------------------------------------+
| NGOPI DULU, URUSAN   |  | NGOPI DULU, URUSAN          Kopi pahit andalan;      |
| BELAKANGAN. (h2)     |  | BELAKANGAN. (h2, c1-7)      sachet di gerobak (c8-12)|
| lead / harga contoh  |  | Harga di bawah masih contoh.                         |
|######## rail ########|  |######################## rail ########################|
| [KOPI]     [ES]      |  | [KOPI]      [ES]        [DI GEROBAK]  [MAKAN]        |
| | illus  | | illus | |  | | illus   | | illus   | | photo   | | illus   |      |
| | Kopi   | | Es    | |  | | Kopi    | | Es kopi | | Kopi    | | Indomie |      |
| | hitam  | | kopi  | |  | | hitam   | | susu    | | sachet, | | telur   |      |
| | Rp 5rb | | susu  | |  | | Rp 5rb  | | Rp 7rb  | | susu,   | | Rp 12rb |      |
| | - - - -| | Rp 7rb| |  | | - - - - | | - - - - | | cokelat,| | - - - - |      |
| | Kopi   | | - - - | |  | | Kopi    | | Es teh  | | malt,   | | Roti    |      |
| | tubruk | | Es teh| |  | | tubruk  | | manis   | | teh     | | bakar   |      |
| +--------+ +-------+ |  | +---------+ +---------+ | tarik,  | | - - - - |      |
| [DI GEROBAK] [MAKAN] |  |                         | susu    | | Gorengan|      |
|  (second pair)       |  |                         | jahe    | +---------+      |
+----------------------+  +------------------------------------------------------+
```
**Di bawah pohon mangga.** The place. Hijau ground, krem text. owner-3 is cropped to the top
1204×1500 (no date stamp) and shown at 4:5, with a caption under it. Three spots as a list:
title at lead size, one line of body.
```
Mangga: phone             Mangga: desktop
+----------------------+  +------------------------------------------------------+
| DI BAWAH POHON       |  | +------------------+    DI BAWAH POHON MANGGA (h2)   |
| MANGGA (h2) + lead   |  | | owner-3, 4:5     |    lead (cols 7-12)             |
| +------------------+ |  | | cols 1-5         |    Di luar      + one line      |
| | owner-3, 4:5     | |  | |                  |    Ruang dalam  + one line      |
| +------------------+ |  | +------------------+    Lesehan      + one line      |
| caption; 3 spots     |  | caption                                              |
+----------------------+  +------------------------------------------------------+
```
**Dari subuh sampai tengah malam.** The hours as a day. Arang ground, krem text, kuning times.
Desktop: a 2px krem day line across the container with three stops, 4 columns each. Phone: the
line runs down the left, stops stacked.
```
Subuh: phone              Subuh: desktop
+----------------------+  +------------------------------------------------------+
| DARI SUBUH SAMPAI    |  | DARI SUBUH SAMPAI TENGAH MALAM (h2, cols 1-8)        |
| TENGAH MALAM (h2)    |  | Buka setiap hari, 05.30–24.00.                       |
| o 05.30 Kopi pertama |  | o-----------------------o------------------------o   |
| o SIANG Ngaso ...    |  | 05.30 Kopi pertama      SIANG Ngaso di     24.00     |
| o 24.00 Ngobrol ...  |  | sebelum kerja. (c1-4)   bawah pohon (c5-8) Ngobrol...|
+----------------------+  +------------------------------------------------------+
```
**Kata mereka.** Social proof. Semen ground. Rating and note on the left; four paraphrases in a
2×2 grid on the right, each with a 2px arang rule on top. No cards, quote marks or stars.
```
Kata: phone               Kata: desktop
+----------------------+  +------------------------------------------------------+
| KATA MEREKA (h2)     |  | KATA MEREKA (h2)    | ------------- | -------------  |
| 4,6 dari 90 ulasan   |  | 4,6 dari 90 ulasan  | Teduh, sejuk  | Betah duduk    |
| Diringkas... (small) |  | Diringkas dari      | ------------- | -------------  |
| ---- paraphrase x4   |  | ulasan (cols 1-4)   | Abangnya kocak| Minuman banyak |
+----------------------+  +------------------------------------------------------+
```
**Kunjungi kami.** Find it. Krem ground; the map sits beside the address, hours and button.
```
Kunjungi: phone           Kunjungi: desktop
+----------------------+  +------------------------------------------------------+
| KUNJUNGI KAMI (h2)   |  | +-------------------------------+  KUNJUNGI KAMI     |
| Jl. Srikaya, JGC ... |  | | Google Maps embed, 4:3        |  Jl. Srikaya, ...  |
| Setiap hari 05.30-24 |  | | cols 1-7                      |  Setiap hari 05.30 |
| [Petunjuk Arah]      |  | |                               |  [Petunjuk Arah]   |
| | map 4:3          | |  | +-------------------------------+  (cols 8-12)       |
+----------------------+  +------------------------------------------------------+
```
**Hubungi kami.** The close. Merah ground with the rail, a bookend to the hero. Desktop buttons
stack in their column. Arang footer below.
```
Hubungi: phone            Hubungi: desktop
+----------------------+  +------------------------------------------------------+
|######## rail ########|  |######################## rail ########################|
| MAMPIR, YA. (h2)     |  | MAMPIR, YA. (h2)             [Telepon 0812-1248-2907]|
| Telepon dulu atau... |  | Telepon dulu atau langsung    [Petunjuk Arah        ]|
| [Telepon] [Arah]     |  | datang aja. (cols 1-6)        [Chat WhatsApp] (mock) |
| [Chat WhatsApp]      |  |------------------------------------------------------|
| footer               |  | footer (arang): name · alamat · jam · sumber         |
+----------------------+  +------------------------------------------------------+
```

## 8. Motion
**Signature: the BUKA sign sways.** The sign and its strings are one element pivoting on its
hook (`transform-origin: 50% 0`). Hero text and photo are visible at once and never animate.
250ms after mount, the sign is nudged from rest: rotation 0 → −6° (it swings right, away from
the name) → +2.5° → −1° → 0, over 0.35 / 0.45 / 0.4 / 0.35s, `sine.out` then `sine.inOut`,
about 1.55s total, played once. Starting from rest avoids a jump on hydration, and 2.5° toward
the name never reaches the text. Reduced motion: it hangs at rest. Between 00.00 and 05.30
Asia/Jakarta time the text swaps client-side to "TUTUP · buka lagi 05.30", with no animation.

**Supporting:** each section S2–S7 fades up 20px once (content wrapper only, 0.6s,
`power2.out`, at `top 85%`). On hover devices a strip tilts 1.5° on its hook in 200ms (CSS).
Buttons nudge 1px on press in 120ms. Lenis uses starter defaults.
`lib/motion.ts`: `reveal { y: 20, duration: 0.6, ease: "power2.out", start: "top 85%" }`,
`response 0.2`, `sign { delay: 0.25, angles: [-6, 2.5, -1, 0], durations: [0.35, 0.45, 0.4, 0.35] }`.

## 9. What makes it this shop
1. The page is their cart: its own red, the name painted on in sign-painter lettering, and
   the menu hanging from a rail as sachet strips, one headed by the real sachet wall.
2. A hanging BUKA sign carries their real hours and flips to TUTUP when they're closed.
3. The day line from subuh to midnight, under mango-leaf green and night, tells the warkop's
   day the way its reviews and photos do.

## 10. Avoid
- The coffee-shop default (cream and brown, beans, latte art, an "artisan" serif) and the
  night-food default (black with neon glow). The night section is flat arang and kuning.
- The neo-brutalist cluster: black-outlined boxes, hard offset box shadows, condensed caps.
  The shade belongs to the h1 lettering only.
- Redrawn brand sachets or logos (ABC, Kapal Api, Good Day, Milo, Pop Ice). Brands appear only
  inside the owner's photo.
- Strips collapsing into a uniform card grid (equal heights, rounded corners, drop shadows).
- A cartoonish or idling sign: one small flat plate that sways once.
- Rainbow-stripe bands, tikar-pattern wallpaper, emoji, a mascot of the crew, staff names.
- Reviews quoted verbatim (for example the "Hello Kitty" line), reviewer names, star rows.
- "bro" in the copy for now (PRD question 9). owner-2, owner-4, or owner-3 with its date stamp.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart (lowest is 1.27); no list or label larger than its section heading
- [x] Max content width set (1200px); no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): three illustrations plus the real sachet photo tile
- [x] Within motion-rules.md: one signature, section reveals, transform and opacity, no React Bits
- [x] Brief is decisions, not essays (2–4 pages)
