# Design brief: Kedai Seroja

Decisions, not essays. Site copy is Bahasa Indonesia (`lang="id"`); this brief is in English.

## 1. Concept
**"Rumah di Jl. Sawo"**: the page is built from the house's own materials. The red KEDAI SEROJA sign is the headline, the teak multi-pane window holds the menu, the glass counter holds the lauk, and the corridor's red dado band and the floor's thin grid strips tie it together. The result is a calm tropical-modern house, not a trendy cafe or a retro warung.
**Signature moment:** in the hero, inside a teak-framed arch, a ramesan plate fills itself on a banana-leaf liner. Rice lands first, then rendang, telur balado, tempe orek and perkedel, one by one (about 1.3 s, once, on load). This acts out "pilih lauk sendiri", the thing only this kedai does.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md | Every fact, dish name, hour and `[MOCKUP]` line. The pinned visual direction: cement, teak, vermilion sign, black metal, plants, arches, rounded-sign type, a typewriter note face. |
| raw.json | Hours, address, phone, place ID for directions, rating 4.5 / 452 and the five reviews behind the paraphrased themes. |
| photos (customer, reference only) | Sign shape (rounded trapezoid, inner white outline), arch doorway, louvred teak door, many-paned teak window, red dado band, floor grid strips, donuts on a green leaf, the "Home at last." canvas. None of them go on the site. |
| impeccable | Mode **Persuade**. The new-work method was applied by hand; the launcher, concept-seed and serve-question were not run because they write outside `docs/`. Rut named: cream + serif + terracotta, photo hero + equal cards, retro-warung kitsch. Seven candidates were weighed (etalase counter, teak window, floor grid + dado band, nota pesanan, Jakarta house-number plate, rantang, chalkboard easel). Because the brief pins the direction, the brief wins. One raise came from the *nota pesanan*: one item per line, price written right after the name, nothing between. From impeccable: Full-palette colour strategy with regions owned by colour, a light ground forced by the scene (phone at midday, daylit house under a skylight), faces chosen off the default list, a focal motion taken from the product mechanism. |
| motion-rules.md | Overrides impeccable where they differ: transform/opacity only (no clip-path reveals), reduced motion means none. |
| React Bits | None chosen (see TRD). |

## 3. Palette (6 named colours)
Strategy: **Full palette**. Each colour owns a role and at least one whole region: cement for the wall grounds, white for counter and floor sections, red for the sign and the closing field, teak for the coffee section and every frame.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `semen` | #E4DFD7 | Cement wall: page ground, hero, menu, suasana, kunjungi | besi on semen 12.8:1 |
| `putih` | #FAF8F4 | Gable white: ramesan and kata-mereka grounds, window panes, plates, canvas, text on dark grounds | besi on putih 16.0:1 |
| `merah` | #CF3820 | Sign vermilion: h1 sign, dado band, primary button, Selasa "Tutup" pill, closing field | putih on merah 4.67:1 (body text OK). Merah text on semen is 3.7:1, so merah is never used for small text on light grounds. |
| `jati` | #7E4226 | Teak: window frame and muntins, arch frames, map frame, counter base, kopi section ground | putih on jati 7.35:1; as a UI border on semen 5.9:1 |
| `besi` | #1E1C1A | Black metal: all text on light grounds, awning header, footer, floor-grid lines (at 22% alpha) | putih on besi 16.0:1 |
| `daun` | #2E6B3B | Leaf: banana-leaf liners, the "buka" status dot, one ficus leaf | daun on semen 4.8:1 (if ever text) |

Derived tone: `besi-lembut` #5E5952 for secondary text (5.2:1 on semen, 6.5:1 on putih).
Illustration-only fills (never UI): nasi #FFFDF7, rendang #4E2817, sambal #C2321C, kuning telur #F2B33D, tempe/gorengan #C08A4A, kecombrang pink #D9577A, mi #E9C25A, latte #C99A6B, crema #EAD5B6. Flat, at most 4 per dish.

## 4. Type
Two families via `next/font/google`, `subsets: ['latin']`, `display: 'swap'`:
- **M PLUS Rounded 1c**, weights 400/700/800: display, headings, dish names, body. Its rounded geometric caps are the nearest Google face to the sign's lettering, and it is off impeccable's default list. Fallback if next/font can't load it: Nunito 400/700/800.
- **Courier Prime**, 400: prices, hours, the "Home at last." canvas, captions and source notes. Always sentence case, normal tracking (never tracked-uppercase labels).

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.75rem, 1.6rem + 4.8vw, 6rem)` (44 → 95 px) | h1 "KEDAI / SEROJA" inside the sign only, 800, uppercase via CSS, two fixed lines, lh 1.05 |
| `--step-head` | `clamp(1.875rem, 1.5rem + 1.6vw, 3rem)` (30 → 47 px) | section h2, 800, lh 1.1 |
| `--step-lead` | `clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)` (23 → 28 px) | hero tagline (500), dish names and review-theme titles (700), lh 1.25 |
| `--step-body` | `clamp(1.125rem, 1.1rem + 0.15vw, 1.1875rem)` (18 → 19 px) | running text, list items, prices, buttons, hours, lh 1.55 |
| `--step-small` | `clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)` (14 → 15 px) | captions, source notes, mockup notes, lh 1.45 |

Ratios checked at 390 / 768 / 1440 px: small→body 1.30 / 1.30 / 1.27; body→lead 1.27 / 1.35 / 1.47; lead→head 1.31 / 1.43 / 1.68; head→display 1.46 / 1.76 / 2.0. All are ≥ 1.25.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | `75rem` (1200 px), 12-column grid, column gap 24 px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 0.6rem + 2.8vw, 3rem)` → 20 px / 48 px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.8rem + 5vw, 7rem)` → 64 px / 112 px |

- **Proximity:** a price sits directly under or after its dish name (≤ 8 px, Courier Prime). Each hours row keeps day and time in a table no wider than 340 px. Labels sit ≤ 12 px under trays and snacks. No dotted leaders, no prices pinned to a far edge.
- **Wide screens:** every section is split or gridded at 1440 (see §7). Full-bleed elements are only grounds and the red dado band.
- **Lists:** dish and drink names use `--step-lead` at most and prices use `--step-body`. Nothing in a list outranks its h2.
- Rhythm: more space above an h2 (the full `--section-y`) than below it (24–32 px). Frames are square-cornered teak; only arches and trays are rounded.

## 6. Products on the page
No owner photos exist, so the dishes are **flat top-down SVG illustrations** in one consistent style: no outlines, no gradients, plates as off-white circles with a 2 px grey rim, liners in `daun`. 19 dish illustrations plus one plate and one leaf liner, built as reusable components:
- **Hero plate (signature):** nasi, rendang, telur balado, tempe orek, perkedel on a leaf-lined plate.
- **Menu andalan (5):** Nasi Goreng Kecombrang (featured, largest), Dendeng Batokok, Nasi Rendang, Bakwan Jagung, Bakmi Ayam Jamur `[MOCKUP]`.
- **Pilih lauk sendiri (8 trays):** Nasi putih, Rendang, Ayam Bakar, Telur Balado, Tempe Orek, Sayur Lodeh, Perkedel, Sambal Goreng Ati (all except nasi and rendang are `[MOCKUP]`). These reuse the hero pieces.
- **Kopi & camilan (6):** the three donuts on a leaf from the display case (meses cokelat, meses warna-warni, gula halus isi), Latte, Risol Ragout, Lumpia.

That is 19 distinct products shown, well over 3. Photos of the place appear only as labelled owner-photo slots in "Suasananya".

## 7. Sections
Grounds in order: semen → semen → putih → jati → semen → putih → semen → merah → besi footer. The red dado band (8 px, full-bleed) sits under the hero and runs behind the Suasananya arches.

**Header + Hero.** Purpose: recognise the shop in five seconds, see today's hours and act. Content: draft banner, black awning bar (mini sign + nav + Telepon), h1 sign, tagline `[MOCKUP]`, today's hours, buttons Petunjuk Arah (merah, primary) and Telepon (besi outline), address in type, then the arch with the plate (signature). On phone, the first screen shows both buttons; the arch top peeks in at about 500 px.
```
Hero: phone (390)                 Hero: desktop (1440)
+------------------------------+  +----------------------------------------------------------+
| DRAF banner                  |  | DRAF banner                                              |
|[KEDAI SEROJA]     (Telepon)  |  |[KEDAI SEROJA]  Menu  Lauk  Kopi  Lokasi       (Telepon)  |
| /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\         |  |  /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\        .--------------------.    |
| |      KEDAI       |  h1     |  |  |        KEDAI       |       /  jati arch frame   \   |
|  \     SEROJA     /          |  |   \       SEROJA    /       |   banana-leaf liner   |  |
|   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾            |  |    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾        |   plate fills:        |  |
| Masakan rumahan & kopi di    |  |  Masakan rumahan & kopi     |   nasi, rendang, telur|  |
| sudut Rawamangun      (lead) |  |  di sudut Rawamangun        |   tempe, perkedel     |  |
| ● Buka hari ini 10.00–21.00  |  |  ● Buka hari ini 10.00–21.00|  Contoh piring ramesan|  |
| [Petunjuk Arah] [Telepon]    |  |  [Petunjuk Arah] [Telepon]  |  · mulai Rp 22rb      |  |
| Jl. Sawo No.15, Rawamangun   |  |  Jl. Sawo No.15, Rawamangun |                       |  |
|  .------------------------.  |  |                             |                       |  |
| / arch + plate (signature) \ |  |   cols 1–6                    cols 7–12, arch ~640 tall |
|=|==== red dado band =======|=|  |============================ red dado band ===============|
+------------------------------+  +----------------------------------------------------------+
```

**Menu andalan.** Purpose: what to order. Content: h2, intro line, a "Harga contoh" note, then one teak window (frame 14 px, muntins 10 px, panes putih). Each pane has an illustration, the name (lead), one line, the price, and a "disarankan di ulasan" note on the four dishes from reviews.
```
Menu andalan: phone               Menu andalan: desktop
+------------------------------+  +----------------------------------------------------------+
| Menu andalan            (h2) |  | Menu andalan (h2)              cols 1–6                  |
| intro · Harga contoh (small) |  | intro line · Harga contoh, menunggu konfirmasi pemilik   |
| #==========================# |  | #======================================================# |
| #   [Kecombrang art 220]   # |  | # [Kecombrang art 260]  Nasi Goreng #  [Dendeng art]   # |
| #   Nasi Goreng Kecombrang # |  | #                      Kecombrang   #  Dendeng Batokok # |
| #   line · Rp 35rb         # |  | #                      line·Rp 35rb #  line · Rp 42rb  # |
| #==========================# |  | #================#=================#==================# |
| # [art 96] Dendeng Batokok # |  | # [Rendang art]  #  [Bakwan art]   #  [Bakmi art]     # |
| #          line · Rp 42rb  # |  | # Nasi Rendang   #  Bakwan Jagung  #  Bakmi Ayam Jamur# |
| # [art] Nasi Rendang  ...  # |  | # line · Rp 38rb #  line · Rp 15rb #  harga menyusul  # |
| # [art] Bakwan / Bakmi ... # |  | #======================================================# |
+------------------------------+  +----------------------------------------------------------+
```

**Pilih lauk sendiri.** Purpose: explain the ramesan counter. Content: h2, the brief's example line `[MOCKUP]`, "Satu piring mulai Rp 22rb" `[MOCKUP]` (Courier Prime, lead size), and the etalase: 8 stainless trays (semen, radius 10 px) on leaf liners, a thin glass line above, a 16 px jati counter base below, and a name under each tray.
```
Lauk: phone                       Lauk: desktop
+------------------------------+  +----------------------------------------------------------+
| Pilih lauk sendiri      (h2) |  | Pilih lauk sendiri  | ---------- glass line ----------- |
| line `[MOCKUP]`              |  | (h2)                | [nasi] [rendang] [ayam] [telur]   |
| Satu piring mulai Rp 22rb    |  | line `[MOCKUP]`     |  Nasi   Rendang  Ayam   Telur     |
| [tray][tray]                 |  | Satu piring mulai   | [tempe] [lodeh] [perkedel][ati]   |
|  Nasi  Rendang               |  | Rp 22rb (typed)     |  Tempe  Sayur   Perkedel Sambal   |
| [tray][tray] ... 4 rows      |  |                     |  Orek   Lodeh            G. Ati   |
| ==== jati counter base ====  |  |  cols 1–4           |========= jati counter base =======|
+------------------------------+  +---------------------+  cols 5–12 -----------------------+
```

**Kopi & camilan.** Purpose: coffee and snacks, with colour owning the region. Content on a jati ground: h2 and intro in putih; a putih menu card with Kopi (Latte, Kopi Susu Gula Aren, Americano, Kopi Tubruk) and Bukan kopi (Es Teh Manis, Es Jeruk, Teh Tarik), name then price; the display shelf with three donuts on one leaf, and latte, risol and lumpia with labels underneath.
```
Kopi: phone                       Kopi: desktop
+------------------------------+  +----------------------------------------------------------+
| (jati ground)                |  | (jati ground)                                            |
| Kopi & camilan (h2, putih)   |  | Kopi & camilan (h2)      |  ~~~~~ banana leaf ~~~~~~~~~ |
| intro                        |  | intro                    |  (donut) (donut) (donut)     |
| ~~ leaf: 3 donuts ~~         |  | +--------------------+   |  cokelat warna  gula halus   |
| cokelat · warna · gula halus |  | | Kopi               |   |  Donat · Rp 10rb             |
| (latte) (risol) (lumpia)     |  | | Latte · Rp 28rb    |   |  (latte)  (risol)  (lumpia)  |
| Latte   Risol    Lumpia      |  | | Kopi Susu GA ·25rb |   |  Latte    Risol    Lumpia   |
| Rp 28rb Rp 8rb   Rp 8rb      |  | | Bukan kopi ...     |   |  Rp 28rb  Ragout   Rp 8rb    |
| +--------------------------+ |  | +--------------------+   |           Rp 8rb             |
| | putih menu card          | |  |  cols 1–5                |  cols 6–12                   |
+------------------------------+  +----------------------------------------------------------+
```

**Suasananya.** Purpose: what the house is like, honestly, before owner photos exist. Content: h2, lead "Masakan rumahan, di rumah yang hangat." `[MOCKUP]`, a short text (a house on a quiet residential street, cosy, seating inside and out), three fact lines, two jati-framed arch photo slots with dashed inner outlines and typed labels ("Foto dari pemilik: tampak depan dengan papan merah" / "…: jendela jati & lorong lengkung"), the white "Home at last." canvas (140 px square) hung beside them, and the red dado band running behind the arches at one-third height.
```
Suasana: phone                    Suasana: desktop
+------------------------------+  +----------------------------------------------------------+
| Suasananya (h2)              |  | Suasananya (h2)          |    .-----.                    |
| lead + text                  |  | lead                     |   /       \      [Home at    |
| · jalan perumahan, Jl. Sawo  |  | text (45–65ch)           |  | foto     |  .--. last.]   |
| · duduk di dalam & di luar   |  | · jalan perumahan        |  | tampak  | /    \         |
| · jendela jati & lengkungan  |  | · dalam & luar           |==|=depan===|=|jati|=== band =|
|  .------.   [Home at last.]  |  | · jendela jati           |  |         | |    |          |
| / slot 1 \                   |  |                          |  +---------+ +----+          |
| |========|== dado band ===   |  |  cols 1–5                |  cols 6–12, two arches       |
+------------------------------+  +----------------------------------------------------------+
```

**Kata mereka.** Purpose: proof without quotes. Content: h2, "4,5 dari 452 ulasan di Google" (lead, Courier Prime), the note "Diringkas dari ulasan Google, bukan kutipan." and four themes in a 2×2 floor grid (1 px besi lines at 22%): Masakannya enak / Harga bersahabat / Kopinya dipuji / Tempatnya nyaman. Each has a title (lead) and one paraphrased line.
```
Kata: phone                       Kata: desktop
+------------------------------+  +----------------------------------------------------------+
| Kata mereka (h2)             |  | Kata mereka (h2)    |  Masakannya enak  | Harga         |
| 4,5 dari 452 ulasan Google   |  | 4,5 dari 452 ulasan |  line             | bersahabat    |
| note (small)                 |  | di Google           |                   | line          |
| ---------------------------- |  | note (small)        |-------------------+---------------|
| Masakannya enak / line       |  |                     |  Kopinya dipuji   | Tempatnya     |
| ---------------------------- |  |                     |  line             | nyaman / line |
| Harga bersahabat ... (x4)    |  |  cols 1–4           |  cols 5–12 floor grid             |
+------------------------------+  +----------------------------------------------------------+
```

**Kunjungi kami.** Purpose: find it and know when. Content: h2, address, the landmark "Cari papan merah KEDAI SEROJA di atap putih." (fact from photos) plus an owner landmark slot `[MOCKUP]`, Petunjuk Arah button, a 7-row hours table (Senin…Minggu). Today's row is bold with a merah left bar (set on the client); the Selasa row shows a putih-on-merah "Tutup" pill. The map is a lazy iframe in a jati frame.
```
Kunjungi: phone                   Kunjungi: desktop
+------------------------------+  +----------------------------------------------------------+
| Kunjungi kami (h2)           |  | Kunjungi kami (h2)       | #==========================# |
| Jl. Sawo No.15, Rawamangun…  |  | address                  | #                          # |
| Cari papan merah …           |  | landmark lines           | #   map iframe, 460 tall   # |
| [Petunjuk Arah]              |  | [Petunjuk Arah]          | #   (jati frame 10 px)     # |
| Senin   10.00–21.00          |  | Senin   10.00–21.00      | #                          # |
| Selasa  (Tutup)              |  | Selasa  (Tutup)          | #==========================# |
| ... Minggu 09.00–21.00       |  | ... (table ≤ 340 px)     |                              |
| [map 300 tall, jati frame]   |  |  cols 1–5                |  cols 6–12                   |
+------------------------------+  +----------------------------------------------------------+
```

**Hubungi kami + footer.** Purpose: a real close. The page ends on the sign: a full-bleed merah field with putih text. Content: h2, line "Mampir, ya. Atau telepon dulu." `[MOCKUP]`, a putih button "Telepon (021) 4893552" (merah text) and an outline "Petunjuk Arah". The footer is a besi strip with the name, address, phone and the draft note in Courier Prime.
```
Hubungi: phone                    Hubungi: desktop
+------------------------------+  +----------------------------------------------------------+
| (merah field)                |  | (merah field)                                            |
| Hubungi kami (h2, putih)     |  | Hubungi kami (h2)                 | [Telepon (021) 4893552]|
| Mampir, ya. Atau telepon     |  | Mampir, ya. Atau telepon dulu.    | [Petunjuk Arah      ] |
| dulu. (lead)                 |  |  cols 1–7                         |  cols 9–12            |
| [Telepon (021) 4893552]      |  |----------------------------------------------------------|
| [Petunjuk Arah]              |  | besi footer: Kedai Seroja · Jl. Sawo No.15, Rawamangun   |
| besi footer (typed, small)   |  | (021) 4893552 · Situs ini draf untuk pemilik.            |
+------------------------------+  +----------------------------------------------------------+
```

## 8. Motion
**Signature: "piring diisi"** (hero, on load, once).
- What: the plate and its leaf liner are static. Five pieces land in order: nasi, rendang, telur balado, tempe orek, perkedel. Each goes opacity 0→1, y −28→0 px, scale 0.96→1, 0.5 s, `power3.out`, stagger 0.14 s, starting 0.25 s after the hero text paints. Then the caption fades in (0.3 s). Total about 1.4 s.
- Hiding: pieces are hidden only when JS has added the `motion-ok` class (set before paint, only when reduced motion is off). A 2.5 s CSS fail-safe shows them if GSAP never runs. With JS off, the plate renders full.
- Reduced motion: the plate renders full, nothing moves, the caption is visible.

**Supporting:** each section below the hero fades up once (starter Reveal, 20 px, 0.6 s, `power2.out`, start at 85% of the viewport). Buttons respond with a press `translateY(1px)` (150 ms) and hover via the opacity of an overlay pseudo-element (180 ms). No other motion: no parallax, no motion on menu panes, trays or donuts.
Motion tokens (`lib/motion.ts`): `ease.out = "power2.out"`, `ease.place = "power3.out"`, `dur.reveal 0.6`, `dur.piece 0.5`, `dur.caption 0.3`, `dur.press 0.15`, `dist.reveal 20`, `dist.piece 28`, `stagger.piece 0.14`, `delay.signature 0.25`. Lenis at starter defaults.

## 9. What makes it this shop
1. The h1 **is the sign**: a vermilion rounded trapezoid with the inset white outline and "KEDAI / SEROJA" in white rounded caps, exactly as it hangs on the gable.
2. **The house's lines as the page's lines:** the corridor's red dado band under the hero and behind the arches; the kitchen's many-paned teak window as the menu; the polished floor's thin grid strips dividing the review themes.
3. **Shop-specific small things:** the "Home at last." canvas from the entrance, the donuts on a green leaf from the display case, "Cari papan merah di atap putih" as the way to find the house, and Selasa shown clearly as closed.

## 10. Avoid
- The category default: cream ground + serif display + terracotta; a photo hero with a dark overlay; a row of equal shadowed cards; generic icon tiles (Wi-Fi, AC, parking: no such facts anyway).
- Retro-warung kitsch: batik borders, enamel blirik mugs, wayang, "jadul" labels, bamboo textures. This house is tropical-modern.
- The rounded face turning childish: no Fredoka/Baloo-style bubbles, no bounce or elastic easing, no wobbling sign.
- Courier Prime as tracked uppercase micro-labels (an editorial tell). Keep it sentence case, for prices, hours and notes.
- The window becoming a bento: it must read as **one** teak window, with shared muntins, square corners, no gaps or shadows between panes.
- Arches everywhere: only the hero arch and the two Suasananya slots. The map frame is rectangular.
- Red creep: merah stays on the sign, the dado band, the primary button, the Tutup pill and the closing field. Never on h2s, body links or decoration.
- Illustration drift: mixed viewpoints, outlines, gradients, faces or steam swirls. Everything is top-down and flat.
- Overselling the reviews: no quote marks, stars, names or "best in Jakarta" headline. No "family recipe" or "since…" claims.
- The signature spreading: no staggered reveals on trays, panes or donuts.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lowest ratio 1.27; dish names at lead < h2 head; prices at body)
- [x] Max content width set; no detail pinned far from what it describes (1200 px; prices under names, hours table ≤ 340 px, labels ≤ 12 px under trays)
- [x] Every section has a desktop wireframe that uses the width on purpose (all split 6/6, 4/8, 5/7 or full-width window/grid; only grounds and the dado band are full-bleed)
- [x] At least 3 products shown (19 illustrated products across hero, menu, counter and coffee)
- [x] Within motion-rules.md (one signature, section-only reveals, transform/opacity only, reduced = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
