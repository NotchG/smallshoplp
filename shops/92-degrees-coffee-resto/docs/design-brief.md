# Design brief: De 92 Degrees

## 1. Concept
The site is De 92 seen from its own lobby. The sage banquettes, honey oak, walnut chairs and mustard
"92°" become whole section fields, an arched niche holds the name, and the floor guide rides the lift to the
rooftop. Four floors, each with its own job, is the thing a regular cafe doesn't have.
**Signature moment:** in the floor guide, a walnut lift display rolls 2 → 3 → 4 as each floor scrolls past,
and at floor 4 the sun in an arched window sinks toward the skyline.

Direction contract (impeccable, code-led):
- **THESIS:** the building is the offer. Refuses the cafe default of a latte-art hero over dark wood, or cream, serif and terracotta.
- **OWN-WORLD:** plaster ground; sage, oak and walnut own whole sections; mustard only for the wordmark, price chips, primary buttons and degree rings; wide rounded Unbounded headings; shapes are the niche arch and the round mirror.
- **STORY:** "that's the place" (photo, name, hours) → pick your floor → see real plates and prices → book floor 3 or come by.
- **FIRST VIEWPORT:** owner-1 interior full-bleed. A walnut arch-topped panel rises from the hero's bottom edge (desktop: right-aligned, cols 8–12; phone: full container width, overlapping the photo). "de 92°" sits in mustard in the dome, where the mirrors sit in the real niches. Below it: tagline, today's hours, then Petunjuk Arah and WhatsApp.
- **FORM:** a building lobby directory plus lift display, carried in the shop's own materials (#1 of 7 candidates, §2).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Name "de 92°"; floors by use; six dishes plus Klepon with printed prices; "kamu" Indonesian voice; materials from owner-1; mustard chips and rings from the menu pages; 4.8 / 920. |
| impeccable | Persuade mode. World picked from 7 candidates (1 lift/lobby directory, 2 their menu pages, 3 the arched niches, 4 terrazzo, 5 the day-to-sunset sky, 6 a gig poster/setlist, 7 the literal "92°" brew temperature). Chose 1, raised by 2 (chip grammar), 3 (arch and circle) and 5 (sunset at floor 4). Full-palette colour by fields; faces off its default list; one authored motion idea. |
| motion-rules.md | One signature, section-only reveals, transform and opacity only, reduced motion means none. Overrides impeccable's "fewer, gentler" reduced-motion advice. |
| What wasn't run | impeccable's concept-seed, comps and finish-review scripts write outside `docs/` and need a live choice, so the direction is recorded here and the build is code-led. |

## 3. Palette (6 named colours)
Strategy: full palette, each colour owns whole sections (plaster → sage → plaster → oak → walnut → plaster → walnut, morning to night).
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `plaster` | #EEE7DA | page ground, light sections, text on walnut | walnut on it 11.6:1 |
| `walnut` | #3A2618 | text on light grounds; hero panel, events and visit grounds | plaster on it 11.6:1 |
| `sage` | #A8C3A6 | floor guide field | walnut on it 7.5:1 |
| `oak` | #E3BE78 | drinks board field | walnut on it 8.1:1. Never clay on oak (3.5) |
| `mustard` | #E2A82C | wordmark, price chips, primary buttons, degree rings, accents on walnut | on walnut 6.7:1; walnut on mustard 6.7:1. **Never mustard text on plaster (1.7)** |
| `clay` | #7A5A3E | secondary text on plaster (descriptions, labels), hairlines | on plaster 5.1:1 |
Focus ring: 3px walnut on light grounds, 3px mustard on walnut. Keep the starter's `paper`/`ink` names as aliases of plaster/walnut.

## 4. Type
**Unbounded** (wordmark, h2, floor names; weights 600 and 800) + **Figtree** (everything else; 400/600/700, italic 600 for the "de"). Both via `next/font/google`, latin subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 3rem + 7vw, 8.5rem)` (75 → 136px) | hero "92" only, Unbounded 800, `nowrap`, line height 0.9 |
| `--step-head` | `clamp(1.9rem, 1.4rem + 2.2vw, 3.25rem)` (31 → 52px) | h2, Unbounded 600, line height 1.1; the lift digit (equal, never larger) |
| `--step-lead` | `clamp(1.35rem, 1.25rem + 0.4vw, 1.5rem)` (21.6 → 24px) | h3: floor names (Unbounded 600), dish names, praise titles, event figures (Figtree 700); hero tagline; line height 1.35 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` (17 → 18px) | running text, dish descriptions, drinks items, hours; line height 1.55 |
| `--step-small` | `0.85rem` (13.6px) | price chips, tags, kickers, group labels, captions; line height 1.4 |

Ratios at 390 / 1440: display:head 2.4 / 2.6, head:lead 1.44 / 2.17, lead:body 1.27 / 1.33, body:small 1.25 / 1.32.
Wordmark: "de" in Figtree italic 600 at 0.28em, then "92", then a mustard CSS ring for "°" (no text glyph), all inline, no overlapping boxes.
Kickers: Figtree 700, uppercase, tracking 0.08em, `t-small`.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 32px at ≥768 / 40px at ≥1024 |
| Section padding phone / desktop (`--section-y`) | 64px / 112px at ≥768 |

- Breakpoints: below 768 one column; 768–1023 the phone layouts, wider (drinks in 3 columns, praise 2×2); 1024 and up the desktop layouts below.
- **Proximity:** a price chip sits inline right after the dish name (8px gap) and wraps with the last word. Drinks prices are inline after the name, never right-aligned. Hours sit in a list at most 22rem wide. "Pedas" and "Dipuji di ulasan" tags follow the name.
- **Wide screens:** every desktop section is a deliberate split, grid or full-bleed image (see §7). No centred narrow column on a full-width field.
- **Lists:** dish names `t-lead`, drink items `t-body`. Nothing in a list goes above `--step-lead`.

## 6. Products on the page
Seven products, all from the owner's own photos. Each is pre-cropped (source pixels x, y, w, h, crops checked by eye) so the plate shows without the menu's baked-in text, prices or promo badge.
| Product | Source and crop | Shown as |
|---|---|---|
| Bebek Bangsawan | owner-3: 98, 210, 300×225 | 4:3 thumb, 200×150 desktop / 112×84 phone, radius 12 |
| Dori Matah with Nasi Daun Jeruk | owner-3: 455, 470, 300×225 | same |
| Ayam Goreng Bawang | owner-3: 125, 800, 320×240 | same (third in its group, never the lead) |
| Smoked Beef Ham & Mushroom | owner-4: 392, 298, 260×195 | same |
| Beef Stroganoff | owner-4: 95, 505, 320×240 | same |
| Aglio e Olio with Prawns | owner-4: 320, 800, 320×240 | same |
| Klepon Cake | owner-2: 0, 940, 1600×900, then resize to 1200w | wide feature image, 7 of 12 columns, inside a walnut band |
The menu crops are low resolution (about 300px). Never show them wider than 200 CSS px; ask the owner for originals (checklist 19).
No drinks photo exists, so the drinks board is typographic, which is fine with seven food photos above it.

## 7. Sections
**Hero.** Recognition and action. owner-1 cropped (0, 700, 1600×1100) so the arches, mirrors, sage banquettes and socket counter show and the AC units don't. The walnut arch panel has a semicircular top (radius = half its width). Content is centred: wordmark in the dome, then tagline (`t-lead`, plaster), "Buka hari ini 09.00–22.00" (`t-body`), then buttons (mustard filled, plaster outline; stacked on phone). Hero height `min(100svh − banner, 880px)`, at least 640px.
```
Hero: phone (390)                    Hero: desktop (1440)
+------------------------------+     +----------------------------------------------------------+
| banner (2 lines)             |     | banner                                                   |
| owner-1: arches, round       |     | owner-1 full-bleed                       .-''''''''-.    |
| mirrors, sage sofas,         |     |  arch   arch   (arch)                  .'            '.  |
| socket counter     (300px)   |     |  round mirrors, sage banquettes       /    de 92°      \ |
|        .-''''''''''-.        |     |                                      |  (mustard, dome)  ||
|     .'     de 92°     '.     |     |  long oak counter, sockets           | Coffee, food &    ||
+---/   (mustard, dome)    \---+     |                                      | music di Duren S. ||
|  |  Coffee, food & music   | |     |  walnut chairs, terrazzo             | Buka hari ini     ||
|  |  di Duren Sawit         | |     |                                      | 09.00–22.00       ||
|  |  Buka hari ini 09.00–22 | |     |                                      | [Petunjuk][Chat WA]||
|  |  [   Petunjuk Arah    ] | |     +--------------------------------------+-------------------++
|  |  [   Chat WhatsApp    ] | |       walnut arch panel 480w, cols 8–12, flush with hero bottom
|  +-------------------------+ |
+------------------------------+  ← panel spans the container (358w); directions ends above 700px
```
**Empat lantai, satu tempat** (`#lantai`, sage). The signature. Left column is sticky on desktop (top 96px): h2, intro "Mau kerja tanpa asap rokok? Naik ke lantai 2. Mau lihat sunset? Lantai 4." (`t-lead`), then the lift display (walnut, radius 20, 200×220, "▲" plus a "LANTAI" kicker plus a mustard digit at `--step-head`, `aria-hidden`). Right column: three directory rows split by walnut hairlines at 25% opacity. Each row has the floor name as h3, tags (`t-small` chips), and one sentence. Floor 3 links to `#acara`. Floor 4 holds the arched sunset window (flat SVG, 4:5, 300px wide), captioned "Ilustrasi, foto menyusul" `[MOCKUP]`. Footer line: "Ada lift ke lantai 3 & 4 · Meja panjang dengan colokan di tiap kursi."
```
Floors: phone                        Floors: desktop
+------------------------------+     +----------------------------------------------------------+
| Empat lantai, satu tempat    |     | cols 1–6 (sticky)              | cols 7–12               |
| Mau kerja tanpa asap…        |     | Empat lantai,                  | Lantai 2 [Bebas asap]   |
| (▲ LANTAI 2) ← sticky pill   |     | satu tempat                    | Satu lantai khusus…     |
|------------------------------|     | Mau kerja tanpa asap rokok?    |-------------------------|
| Lantai 2 [Bebas asap rokok]  |     | Naik ke lantai 2. Mau lihat…   | Lantai 3 [Smoking][Acara]|
| Satu lantai khusus tanpa…    |     | +----------+                   | Area merokok… Info acara→|
| Lantai 3 [Smoking][Acara]    |     | | ▲ LANTAI |  lift display     |-------------------------|
| Area merokok… Info acara →   |     | |    2     |  walnut/mustard   | Lantai 4 [Smoking]  .-.  |
| Lantai 4 [Smoking][Sunset]   |     | +----------+                   | Spot terbaik…      /sun\ |
|  .-''-.  arch window 300w    |     | Lift ke lantai 3 & 4 · colokan…|                    |sky| |
| /  sun \                     |     +----------------------------------------------------------+
| Lift ke lantai 3 & 4 · …     |
+------------------------------+
```
**Menu andalan** (`#menu`, plaster). Header split: h2 left, intro right ("…nasi dengan lauk dan sambal, sampai fresh pasta. Harga dalam ribuan rupiah."). Two group columns echo their two menu pages: "Nasi & lauk" (Bebek, Dori, Ayam) and "Pasta" (Smoked Beef, Stroganoff, Aglio). Each row: thumb, then name, mustard chip ("55rb") and an optional "Pedas" tag, then the description in clay. Below: the walnut Klepon band (image cols 1–7, text cols 8–12: "Dessert" kicker, "Klepon Cake" plus "28rb" chip, *modern yet traditional taste of klepon* in mustard italic, description). Footer `t-small`: "Bisa sarapan juga, buka mulai 09.00 · Nasi Liwet set 55rb `[MOCKUP]` · Harga belum termasuk pajak & service `[MOCKUP]`".
```
Menu: phone                          Menu: desktop
+------------------------------+     +----------------------------------------------------------+
| Menu andalan                 |     | Menu andalan (h2)              | intro, ribuan rupiah    |
| intro                        |     | NASI & LAUK                    | PASTA                   |
| NASI & LAUK                  |     | [img] Bebek Bangsawan [55rb]   | [img] Smoked Beef… [72rb]|
| [img] Bebek Bangsawan [55rb] |     |       Bebek goreng…            |       Fresh pasta…      |
|       Bebek goreng…          |     | [img] Dori Matah… [65rb] Pedas | [img] Beef Stroganoff…  |
| [img] Dori Matah… [65rb]     |     | [img] Ayam Goreng Bawang [45rb]| [img] Aglio e Olio… Pedas|
| [img] Ayam Goreng Bawang     |     | +------------------------------------------------------+ |
| PASTA  (3 rows)              |     | | [Klepon image, cols 1–7]     | DESSERT                | |
| +--------------------------+ |     | |                              | Klepon Cake [28rb]     | |
| | [Klepon image 16:9]      | |     | |                              | modern yet traditional…| |
| | Klepon Cake [28rb] …     | |     | +------------------------------------------------------+ |
| +--------------------------+ |     | Bisa sarapan, buka 09.00 · Nasi Liwet… · Harga belum term…|
+------------------------------+     +----------------------------------------------------------+
```
**Kopi & minuman** (`#minuman`, oak). Header split as in the menu; intro "Tamu memuji kopi signature kami, juga Vietnam Drip dan Pisang Caramel." Three columns, like a counter board: KOPI (Es Kopi Susu 92° 28rb with a one-line description, Vietnam Drip 28rb with a "Dipuji di ulasan" tag, Americano · Cafe Latte · Cappuccino 28–38rb), NON-KOPI (three names, with 28–35rb next to the group label), TEMAN NGOPI (Pisang Caramel 32rb with tag, then Singkong Goreng · Tahu Cabe Garam · French Fries 25–35rb). Mockup items carry `data-mockup`.
```
Drinks: phone                        Drinks: desktop
+------------------------------+     +----------------------------------------------------------+
| Kopi & minuman               |     | Kopi & minuman (h2)          | intro                     |
| intro                        |     |----------------------------------------------------------|
| KOPI                         |     | KOPI               | NON-KOPI  28–35rb  | TEMAN NGOPI     |
| Es Kopi Susu 92° 28rb        |     | Es Kopi Susu 92°   | Matcha Latte       | Pisang Caramel  |
| Vietnam Drip 28rb [Dipuji]   |     |   28rb  es kopi…   | Red Velvet         |   32rb [Dipuji] |
| Americano · Latte · … 28–38rb|     | Vietnam Drip 28rb  | Lychee Tea         | Singkong Goreng ·|
| NON-KOPI 28–35rb …           |     |   [Dipuji]         |                    | Tahu Cabe Garam ·|
| TEMAN NGOPI …                |     | Americano · Cafe   |                    | French Fries    |
+------------------------------+     | Latte · Cappuccino |                    |   25–35rb       |
                                     |   28–38rb          |                    |                 |
                                     +----------------------------------------------------------+
```
**Acara & reservasi** (`#acara`, walnut). Left: "Lantai 3 & ruang VIP" kicker, h2 (plaster), lead line, mustard "Tanya ketersediaan via WhatsApp" `[MOCKUP]`, then "atau telepon 0852-8556-0957". Right: two blocks with plaster hairline borders at 20% opacity. Block 1, "Ruang acara lantai 3": "Sampai 100 orang" (`t-lead`, mustard), its uses, "Paket mulai Rp 85rb/pax" `[MOCKUP]`. Block 2, "Ruang VIP": "Minimum order Rp 1 juta" (`t-lead`, mustard), "sudah termasuk live music".
```
Events: phone                        Events: desktop
+------------------------------+     +----------------------------------------------------------+
| LANTAI 3 & RUANG VIP         |     | LANTAI 3 & RUANG VIP           | Ruang acara lantai 3    |
| Acara & reservasi            |     | Acara &                        | Sampai 100 orang        |
| Meeting, seminar, bukber…    |     | reservasi                      | meeting · seminar · …   |
| [Ruang acara: 100 orang…]    |     | Meeting, seminar, bukber…      | Paket mulai 85rb/pax    |
| [Ruang VIP: min. Rp 1 juta…] |     | [Tanya via WhatsApp]           |-------------------------|
| [Tanya via WhatsApp]         |     | atau telepon 0852-…            | Ruang VIP · min Rp 1 juta|
| atau telepon …               |     |                                | sudah termasuk live music|
+------------------------------+     +----------------------------------------------------------+
```
**Kata mereka** (`#ulasan`, plaster). Kicker "Kata mereka di Google", h2 "4,8 dari 920 ulasan", note "Ringkasan dari ulasan tamu, bukan kutipan." Four themes in a 2×2 grid (desktop cols 6–12), each with a small mustard ring, a `t-lead` title and one `t-body` sentence: Luas dan nyaman / Bersih, sampai toiletnya / Stafnya ramah dan sigap / Kopinya juara, porsinya besar.
```
Praise: phone                        Praise: desktop
+------------------------------+     +----------------------------------------------------------+
| KATA MEREKA DI GOOGLE        |     | KATA MEREKA DI GOOGLE    | o Luas dan    | o Bersih,    |
| 4,8 dari 920 ulasan          |     | 4,8 dari 920             |   nyaman      |   sampai…    |
| Ringkasan…                   |     | ulasan                   |   Empat lantai…|  …          |
| o Luas dan nyaman …          |     | Ringkasan dari ulasan…   | o Stafnya     | o Kopinya    |
| o Bersih …  o Staf … o Kopi… |     |  (cols 1–5)              |   ramah…      |   juara…     |
+------------------------------+     +----------------------------------------------------------+
```
**Kunjungi kami** (`#kunjungi`, walnut; also covers the brief's "Hubungi kami"). Left (cols 1–5): h2; address (`t-lead`); "Di Google Maps: 92 Degrees Coffee & Resto" (`t-small`, sage); hours list with today's row in mustard plus a "Hari ini" tag; "Buka setiap hari"; buttons Petunjuk Arah / Chat WhatsApp `[MOCKUP]` / Telepon; Instagram @de92degrees. Right (cols 6–12): map iframe, radius 24, 480px tall. Footer row: "De 92 Degrees · Coffee, Food & Music" and the address in `t-small`.
```
Visit: phone                         Visit: desktop
+------------------------------+     +----------------------------------------------------------+
| Kunjungi kami                |     | Kunjungi kami (h2)        | +--------------------------+ |
| Jl. Delima Raya No.6, …      |     | Jl. Delima Raya No.6, …   | |                          | |
| Di Google Maps: 92 Degrees…  |     | Di Google Maps: 92 Deg…   | |   map iframe             | |
| Senin–Kamis   09.00–22.00    |     | Senin–Kamis 09.00–22.00   | |   (cols 6–12, 480h)      | |
| Jumat–Sabtu   09.00–23.00 ●  |     | Jumat–Sabtu 09.00–23.00 ● | |                          | |
| Minggu        09.00–22.00    |     | Minggu      09.00–22.00   | |                          | |
| [Petunjuk Arah][WhatsApp]    |     | [Petunjuk Arah][WhatsApp][Telepon] +--------------------+ |
| [Telepon]  @de92degrees      |     | @de92degrees                                             |
| [map 358×280]                |     |----------------------------------------------------------|
| footer                       |     | De 92 Degrees · Coffee, Food & Music · Jl. Delima Raya…  |
+------------------------------+     +----------------------------------------------------------+
```

## 8. Motion
**Signature (floor guide).** As each floor row's top crosses 55% of the viewport (enter and enterBack), the digit strip inside the lift display moves to that floor: `yPercent` −100 per floor, 0.45s, `expo.out`, `overwrite: true` so fast scrolling interrupts cleanly. The ▲ nudges y −4 → 0 over 0.3s with each change. Over the floor 4 row (top 80% → bottom 40%, `scrub: 0.6`), the sun moves y 0 → 28px behind the horizon, which is clipped by the arch. The display is sticky (desktop column, phone pill) only under `prefers-reduced-motion: no-preference`.
Reduced motion and JS off: the display is not sticky and shows a static "2 · 3 · 4", the sun sits at its final position, and every row is readable.
**Supporting:** the hero panel content fades up 20px once on load (0.6s, `power2.out`, 0.1s delay; the photo doesn't move). Menu, drinks, events, praise and visit each get one `<Reveal>` on the section content. Buttons: on hover an overlay goes to 0.12 opacity, on press scale 0.98, both CSS at 150ms.
Tokens for `lib/motion.ts`: `duration.hero 0.6`, add `duration.lift 0.45`, `distance.sun 28`. The rest are starter defaults. Lenis: starter defaults.

## 9. What makes it this shop
1. The lift display that climbs 2 → 3 → 4 beside their real floor guide and ends at a rooftop sunset.
2. The hero's walnut arch is cut like their niches, and the wordmark sits where the round mirrors hang.
3. Price chips copied from their own menu pages (mustard tag, bold number). Dishes are split into the same two groups as their two printed pages: rice plates and pasta.
4. Section grounds taken from the room: sage banquette, honey-oak counter, walnut chairs.

## 10. Avoid
- The cafe template: dark moody latte hero, cream, serif and terracotta, a row of equal cards.
- Costume creep: only the floor guide plays the lift. Don't add a floor number to every section, and use arches only in the hero panel and the sunset window.
- Childish rounded type: Unbounded only for the wordmark, h2 and floor names, never body text or lists.
- Showing the menu pages whole (baked-in English, prices, @handle), the expired "20% OFF" badge or the poster's script lettering.
- Ayam Goreng Bawang as the lead dish. Headlining parking or "murah". Implying a nightly live-music schedule. Explaining what "92°" means. Star widgets. Any `photo-*.jpg`.
- Mustard text on plaster, or clay text on oak. A big decorative "92" as text behind headings (it would outrank the h2 and trip the overlap check).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest gap is body:small at 1.25 on a phone; lists top out at `t-lead`; the lift digit equals the h2 and never exceeds it)
- [x] Max content width set; no detail pinned far from what it describes (1200px; chips, tags and drink prices are inline; hours list 22rem max)
- [x] Every section has a desktop wireframe that uses the width on purpose (hero full-bleed; 6/6, split, 2-col, 3-col, 5/7 and 5/7 + map)
- [x] At least 3 products shown (7, all from owner photos: 6 mains + Klepon Cake)
- [x] Within motion-rules.md (one signature, section reveals only, transform and opacity, no React Bits, reduced motion = static)
- [x] Brief is decisions, not essays (2–4 pages)
