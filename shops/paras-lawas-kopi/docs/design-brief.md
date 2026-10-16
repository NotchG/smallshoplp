# Design brief: Paras Lawas Kopi

Record decisions, not essays. All copy on the page is Bahasa Indonesia (`lang="id"`), casual "kamu".

## 1. Concept
The site is painted in Paras Lawas's own cobalt. It walks you through the shop in the order you'd
visit it: the arched brick front, the blue-and-white checkerboard counter, the chalkboard, the bottled
coffee, the record shelf, then the black-and-white patio and the way there. The name is set in
early-1900s Indies-style lettering, matching the old spelling the shop already plays with ("Toean Njonja").

Signature moment: the old wall clock from their counter sits in the hero beside the hours. On load its
hands sweep from opening time (10.30) to the current Jakarta time, then a line answers
"Lagi buka · tutup jam 22.30" (or when it opens again).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md | Sections, facts, board prices, tone, palette mood, the full [MOCKUP] list |
| raw.json | Hours every day 10.30–22.30, phone, address, Maps link, 5.0 from 103, review themes |
| owner-2.jpg | Hero photo (facade, arch, logo). Its narrow, flared logo lettering decided the display face |
| owner-1.jpg | Interior crop (board, lamps, clock; no faces) for Sudut Lawas; the clock object; the board's 3-column structure |
| photo-1/2/3 (reference only) | Patio checker, record shelf, bottle shape for the illustration. Never on the site |
| impeccable | Persuade mode. The brief pins the world, so no concept roll ("the brief wins"). Committed colour; faces chosen off the default list; calibration check; one authored focal motion from the shop's own world |
| impeccable derivation | Rut: espresso-brown + cream, latte-art hero, 3 coffee cards. Candidates: the shop's cobalt room (chosen), Indies enamel signs, 80s kaset J-card, 7-inch sleeve, kebaya-portrait print ads, poster cards, tegel tiles. Raises: from **enamel signs**, two-colour discipline (cream/navy plates); from **kaset J-card**, the Sisi A tracklist in Sudut Lawas |
| motion-rules.md, React Bits | Transform/opacity only, one signature moment. React Bits browsed, none chosen (TRD) |

## 3. Palette (6 named colours)
Strategy: Committed. Cobalt owns about half the page, as it owns the shop's walls.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `cobalt` | #1F4199 | The wall. Ground of Hero, Papan Menu, Sudut Lawas, Mampir Doeloe | cream on cobalt 7.40 ✓, amber on cobalt 5.08 ✓ |
| `navy` | #121C40 | Doorway and logo ink. Text on cream and amber; ground of Toean Njonja and Hubungi; board frame | navy on cream 13.30 ✓ |
| `cream` | #F3E5C6 | Logo plate, enamel. Text on dark grounds; ground of Bundling and Kata Mereka; light checker squares | cream on navy 13.30 ✓, cream on chalk 13.01 ✓ |
| `chalk` | #1E2120 | Chalkboard surface, dark patio tiles | amber on chalk 8.94 ✓ |
| `terracotta` | #9F4627 | Breeze-block brick. Illustration fills, bundle price tags, small labels on cream | cream on terracotta 4.98 ✓, terracotta on cream 4.98 ✓ |
| `amber` | #F2B648 | Caged-lamp light. Primary button, open status, chalk prices, focus ring on dark grounds | navy on amber 9.13 ✓, amber on navy 9.13 ✓ |

Rules: no text at reduced opacity. Terracotta never sits on cobalt or navy (1.86 / 3.33). The focus ring
is a 3px outline: amber on cobalt, navy and chalk; navy on cream.

## 4. Type
Display: **Federant** 400 (Art Nouveau Indies lettering, closest to the sign). Body: **Gantari** 400/600/700
(plain and round, it stays quiet under Federant). Both via `next/font/google`, subset `latin`, `display: swap`.
Federant appears only at `--step-lead` and above. It is set in caps only for "PARAS LAWAS", because its
caps N/M/W turn quirky; every other use is title case. Kickers are Gantari 600 caps, tracking 0.08em.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 2rem + 3.9vw, 5.375rem)`: 48px @390, 72 @1024, 86 @1440 | hero name only, caps, `nowrap`, leading 0.95 |
| `--step-head` | `clamp(2.125rem, 1.6rem + 2.2vw, 3.5rem)`: 34 / 48 / 56px | section h2 (Federant), leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)`: 22 / 26 / 28px | tagline, menu category heads, bundle prices, tracklist titles, paraphrases; leading 1.3 |
| `--step-body` | `clamp(1.0625rem, 1.01rem + 0.2vw, 1.1875rem)`: 17 / 18 / 19px | body, menu items, buttons; leading 1.55 |
| `--step-small` | `0.8125rem` (13px) | kickers, isian variants, notes, captions; leading 1.4 |

Ratios @390: 1.41, 1.55, 1.29, 1.31. Ratios @1440: 1.54, 2.0, 1.47, 1.46. All are at least 1.25.
"PARAS LAWAS" in Federant measures 6.62em (measured), so it is 318px at 390 inside 350px, and 569px at
1440 inside the 666px text column. One line is guaranteed, so 0.95 leading is allowed.
Prices on the board are Gantari 700 with `tabular-nums`.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥768) |

- Grid: single column below 1024. From 1024 up: 12 columns, 24px gap. The spacing scale is 4, 8, 12, 16, 24, 32, 48, 64; paragraphs are at most 60ch.
- Tablet (768–1023): the hero stacks, with the arch at a 520px max and 340px tall, left-aligned with the text. The menu board uses 2 columns (Kopi | Cemilan, Makanan under Kopi). Bundle plates stack at a 560px max, centred. Kata Mereka and the contact rows are already 2×2.
- **Proximity:** a menu price sits 12px after its item name on the same line. Never right-align it to the column edge, never use dot leaders. A bundle price tag sits 12px under its name. The "harga bisa berubah" note sits 16px under the board. The hours list uses two `max-content` columns with a 24px gap.
- **Wide screens:** every section has a 1440 plan in §7. Toean Njonja is the one section that is deliberately narrow and centred, at a 1000px max.
- **Lists:** menu items use `--step-body`, category heads use `--step-lead`, and the section h2 uses `--step-head`.
- **Checkerboard:** exactly two full-bleed bands, never behind text: cobalt/cream after the hero (the counter), chalk/cream after Sudut Lawas (the patio). Squares are 28px on phone and 40px on desktop, 2 rows, with `aria-hidden`.
- Corners: plates and buttons 10–16px radius. The arch is the only curve with a large radius. No drop shadows anywhere.

## 6. Products on the page
The owner has no product photos, so products are flat illustrations of four specific items:
1. **Sosis Solo**: three golden rolls in a paper bowl with a saus sachet. Bundling plate 1, next to an es teh glass.
2. **Mi**: a bowl of noodles with chopsticks. Bundling plate 2, next to es teh.
3. **Mentaiki**: a rice bowl with orange mentai drizzle and torched spots. Bundling plate 3, next to es teh manis.
4. **Kopi Toean Njonja**: a glass bottle with a cobalt cap, kopi-susu fill and a cream oval label reading "Paras Lawas". No portrait. Large, in section 4.

Style: "enamel print". Flat fills from the palette only, a uniform navy outline (3px at 240px wide), round
joins, no gradients, shadows or texture, at most 40 shapes each. Inline SVG with `role="img"` and an
Indonesian `aria-label` ("Ilustrasi Sosis Solo, saus dan es teh"). One es teh glass is drawn once and reused.
The owner checklist asks for real product photos.
Photos: owner-2 goes in the hero arch, and the owner-1 crop (x 0–1200, y 180–950 px) goes in Sudut Lawas.

## 7. Sections
**1 Hero** (cobalt). Purpose: recognise the shop, see if it's open, go. Content: owner-2 in an arch with a 10px cream surround; kicker "Kopi · Pondok Kelapa, Jakarta Timur"; h1 "PARAS LAWAS"; tagline [MOCKUP]; clock, "Buka setiap hari 10.30–22.30" and the live status; [Petunjuk Arah] (amber) and [WhatsApp] [MOCKUP] (cream outline), side by side on phone at 16px side padding; a "Lihat papan menu ↓" link. Desktop: the arch spans cols 1–5 (`aspect-ratio: 486 / 600`, so 486×600 at 1440; fully rounded top) and the text cols 6–12 with an extra 24px left padding (666px). The arch stands on the counter band. Padding: phone 20px top / 40px bottom, with the arch 260px tall (fold budget: banner 52 + 20 + arch 260 + name block 88 + tagline 73 + clock row 108 + buttons 72 ≈ 673px, under 844); desktop 48px top / 0 bottom.
```
Hero: phone (390)        Hero: desktop (1440)
+----------------+       +--------------------------------------------------+
| .------------. |       |   .--------.          KOPI · PONDOK KELAPA        |
|/ owner-2 arch \|       |  / owner-2  \         PARAS LAWAS   (86px, 1 line)|
||  350 x 260   ||       | |  arch      |        Ngopi santai, lagu lawas,   |
|+--------------+|       | |  486 x 600 |        ngobrol sampai malam.       |
| KOPI · PONDOK K|       | |  cols 1-5  |        [clock 96] Buka setiap hari |
| PARAS LAWAS 48 |       | |            |                   10.30–22.30      |
| Ngopi santai.. |       | |            |                   ● Lagi buka      |
| [clk] Buka...  |       | |            |        [Petunjuk Arah] [WhatsApp]  |
|  ● Lagi buka   |       | |            |   text cols 6-12, v-centred        |
| [Arah][WhatsApp|       |##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  | band
+----------------+       +--------------------------------------------------+
```
**2 Papan Menu** (cobalt wall, chalk board with a 10px navy frame). Purpose: what's on and what it costs. Content: h2, intro [MOCKUP], board: Kopi (24–27rb; 4 names [MOCKUP]; Non-kopi line [MOCKUP]; Es Teh Manis and Air Mineral 9rb [MOCKUP names]) · Cemilan (all from the board) · Makanan (all from the board, plus a "Paket bundling ↓" link). Then the note.
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| Papan Menu     |       | Papan Menu  (h2)                                  |
| intro line     |       | Langsung dari papan kapur di kasir.               |
|+==============+|       | +==============================================+ |
|| Kopi 24–27rb ||       | | Kopi  24–27rb  | Cemilan         | Makanan     | |
|| Es Kopi Susu ||       | | Es Kopi Susu.. | Sosis Solo 18rb | Mi Korean   | |
|| ...          ||       | | Non-kopi: ...  |  isian: Ayam ·  |  Edition 19rb| |
|| Cemilan      ||       | | Es Teh Manis 9rb| Dimsum 22rb    | Mentaiki ..  | |
|| Makanan      ||       | | Air Mineral 9rb| Kentang G 17rb  | → bundling   | |
|+==============+|       | +==============================================+ |
| harga note     |       | Harga dalam ribuan rupiah. Bisa berubah, cek papan|
+----------------+       +--------------------------------------------------+
```
**3 Paket Bundling** (cream). Purpose: the cheap combos, big and clear. Content: h2, "Makan + minum, mulai Rp 22rb.", three enamel plates (cream, 2px navy frame plus an inner rule via `outline-offset: -8px`) with illustration, name and terracotta price tag. Plate 3 carries two tags: Ayam 24rb and Dori 26rb [MOCKUP mapping].
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| Paket Bundling |       | Paket Bundling (h2)                               |
| mulai Rp 22rb  |       | Makan + minum, mulai Rp 22rb. (under the h2)      |
| +------------+ |       | +--------------+ +--------------+ +--------------+|
| | [illus]    | |       | | [sosis+teh]  | | [mi + teh]   | | [mentaiki]   ||
| | Sosis Solo | |       | | Sosis Solo + | | Mi + es teh  | | Mentaiki +   ||
| | [Rp 22rb]  | |       | | saus + es teh| | [Rp 23rb]    | | es teh manis ||
| +------------+ |       | | [Rp 22rb]    | |              | | [24rb][26rb] ||
| (x3 stacked)   |       | +--------------+ +--------------+ +--------------+|
+----------------+       +--------------------------------------------------+
```
**4 Kopi Toean Njonja** (navy ground, one cream enamel sign, max 1000px, centred, with 4 navy rivets). Purpose: the bottled coffee. Content: kicker "Kopi botolan" (terracotta), h2 "Kopi Toean Njonja", "Kopi botolan berlabel Paras Lawas sendiri.", takeaway, 1-litre and price lines [MOCKUP], [Tanya via WhatsApp] [MOCKUP].
```
phone                    desktop
+----------------+       +--------------------------------------------------+
|+--------------+|       |   o+--------------------------------------+o      |
||  [bottle]    ||       |    |  [bottle illus   | KOPI BOTOLAN      |       |
||  160px       ||       |    |   260px tall]    | Kopi Toean Njonja |       |
|| Kopi Toean   ||       |    |                  | body + [MOCKUP]   |       |
|| Njonja (h2)  ||       |    |                  | [Tanya via WA]    |       |
|| body, [WA]   ||       |   o+--------------------------------------+o      |
|+--------------+|       |          (navy ground both sides, on purpose)     |
+----------------+       +--------------------------------------------------+
```
**5 Sudut Lawas** (cobalt). Purpose: the vibe reviewers praise. Content: h2, "Pas buat me-time atau nongkrong bareng teman.", the interior photo (cream 10px frame), a "SISI A" tracklist: A1 Rak piringan hitam · A2 Lagu lawas · A3 Teras papan catur · A4 Dek atas, each with one line from the photos or reviews. The patio band follows.
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| Sudut Lawas    |       | +-----------------------+  Sudut Lawas (h2)       |
| intro          |       | | owner-1 crop          |  Pas buat me-time ...   |
| +------------+ |       | | board, lamps, clock   |  SISI A                 |
| | interior   | |       | | 588 x 377, cols 1-6   |  A1 Rak piringan hitam  |
| +------------+ |       | |                       |  A2 Lagu lawas          |
| SISI A         |       | +-----------------------+  A3 Teras papan catur   |
| A1 ... A4      |       |                            A4 Dek atas  (cols 7-12)|
+----------------+       +##..##..##..## patio band (chalk/cream) ##..##..##+
```
**6 Kata Mereka** (cream). Purpose: social proof, paraphrased. Content: h2, "5,0 dari 103 ulasan di Google", "Diringkas dari ulasan Google.", four paraphrases (comfy for me-time and friends; good music; good non-coffee drinks; must-try, want to come back). No quote marks, no names.
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| Kata Mereka    |       | Kata Mereka (h2)  | Tempatnya nyaman, | Pilihan    |
| 5,0 · 103      |       | 5,0 dari 103      | pas buat me-time..| musiknya.. |
| paraphrase 1   |       | ulasan di Google  |-------------------|------------|
| paraphrase 2   |       | Diringkas dari... | Yang nggak ngopi..| Wajib      |
| paraphrase 3-4 |       |   cols 1-4        |     cols 5-12, 2x2 grid        |
+----------------+       +--------------------------------------------------+
```
**7 Mampir Doeloe** (cobalt). Purpose: find it and check the hours. Content: kicker "Lokasi & jam buka", h2 "Mampir Doeloe" [MOCKUP copy], address, "Buka setiap hari" (amber), a 7-day list Senin–Minggu 10.30–22.30 with today marked "Hari ini", [Petunjuk Arah], and a Maps embed with a cream 10px frame.
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| LOKASI & JAM   |       | LOKASI & JAM BUKA     | +------------------------+ |
| Mampir Doeloe  |       | Mampir Doeloe (h2)    | |  Google Maps embed     | |
| address        |       | Jl. Swakarsa IV No. 2 | |  cols 6-12, 440 tall   | |
| Buka setiap..  |       | Buka setiap hari      | |                        | |
| Senin 10.30–.. |       | Senin  10.30–22.30 ●  | |                        | |
| [Petunjuk Arah]|       | ... Minggu            | |                        | |
| [map 320 tall] |       | [Petunjuk Arah]       | +------------------------+ |
+----------------+       +--------------------------------------------------+
```
**8 Hubungi Kami + footer** (navy). Purpose: the real close. Content: h2, intro [MOCKUP], 4 contact rows (2px cream border, radius 12; label as a `--step-small` kicker, value in `--step-body` 600): WhatsApp [MOCKUP], Telepon 0851-3428-6223, Instagram @paraslawaskopi, Petunjuk Arah. Then "Bayar bisa pakai QRIS. Ada program member, tanya di kasir." [MOCKUP details]. Footer: "PARAS LAWAS" (Federant caps, lead), address, hours.
```
phone                    desktop
+----------------+       +--------------------------------------------------+
| Hubungi Kami   |       | Hubungi Kami (h2)  | [WhatsApp     ] [Telepon     ] |
| intro          |       | Mau tanya menu..?  | [0851-3428-..] [0851-3428-..] |
| [WhatsApp    ] |       |   cols 1-5         | [Instagram   ] [Petunjuk Arah] |
| [Telepon     ] |       |                    | QRIS · member, tanya di kasir |
| [Instagram   ] |       |----------------------------------------------------|
| [Petunjuk Arah]|       | PARAS LAWAS   Jl. Swakarsa IV No. 2 ...  10.30–22.30|
+----------------+       +--------------------------------------------------+
```

## 8. Motion
**Signature: WallClock** (hero only). An SVG pendulum clock from owner-1: navy case, cream face with 12
navy ticks, navy hands, an amber centre pin and a static amber pendulum disc. 64×92px on phone, 96×138px
on desktop. The server renders the hands at 10.30. After mount, the hands rotate clockwise to the current
Asia/Jakarta time: hour hand to its angle, minute hand to its angle plus one full turn. Duration 1.4s,
`expo.out`, 0.2s delay, origin at the face centre. At 0.5s the status line fades in (opacity, 0.3s).
Its job is to answer "buka nggak sekarang?". Reduced motion: hands set to now, status shown, no tween.
The pendulum does not swing (no loops).
**Supporting:** one `<Reveal>` per section, sections 2–8 (the bundle row reveals as one block). Buttons
and contact rows lift by `translateY(-2px)` in 150ms on hover/focus, and scale to 0.98 on press. Nothing else moves.
Tokens: `duration.hero = 1.4`; everything else is the starter's. Lenis uses starter defaults.

## 9. What makes it this shop
- The page is the visit: arch door, then checker counter, chalkboard, bottle, record shelf, black-and-white patio, map. The cobalt is their wall.
- Their own wall clock answers the visitor's first question, using the hours from their listing.
- The menu reads like their board: the same three columns, their spelling (Mi Korean Edition, Mentaiki Dori, Bundling), prices beside the names. The old spelling is used exactly twice: Toean Njonja (theirs) and Mampir Doeloe.

## 10. Avoid
- The coffee default: espresso-brown and cream, a latte-art hero, "Our Story", three coffee cards.
- Fake age: sepia, grain, paper or distressed textures. The shop is crisp cobalt and checker ("nostalgic, not dusty").
- Neo-brutalist enamel: hard offset shadows, black boxes. Plates are flat with thin rules.
- Retro tropes in motion: a rotating circular badge, marquees, a spinning vinyl, a swinging pendulum, a clock that spins many turns.
- Checker creep: a third band, or checker behind text.
- Federant caps on anything except "PARAS LAWAS"; Federant below `--step-lead`.
- Prices pushed to column edges or joined with dot leaders.
- Customer photos anywhere; faces from owner-1; English in the banner, alt text, aria labels or buttons.
- Quoting reviews verbatim, naming reviewers, or claiming the best coffee around.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest ratio 1.29; prices and category heads are `--step-lead`, under `--step-head`)
- [x] Max content width set (1200px); no detail pinned far from what it describes (prices 12px after names, tags 12px under, no leaders)
- [x] Every section has a desktop wireframe that uses the width on purpose (Toean Njonja is deliberately narrow and centred)
- [x] At least 3 products shown (Sosis Solo, Mi, Mentaiki, Kopi Toean Njonja as illustrations)
- [x] Within motion-rules.md (one signature, transform/opacity, section reveals only, no loops, reduced motion static)
- [x] Brief is decisions, not essays (2–4 pages)
