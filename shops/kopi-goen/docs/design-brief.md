# Design brief: Kopi Goen

## 1. Concept
**"Lampu kebun menyala":** the page is Kopi Goen's garden after dark, built from its own furniture.
The hours and buttons sit on the stepped concrete tribune, the drinks stand on the concrete cube seats,
and everything is lit from below the way photo-3 shows. This fits a shop whose reviews say the place
wakes up at night, and which has no photos to lean on.
Signature moment: on load, the garden lights switch on from the ground up: the strip lights under the
two hero steps, then the uplights at the foot of the palm trunks, then a soft wash behind the name.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Night navy, amber uplights, concrete and fern palette; the stepped tribune, cube seats with inset round lights, slim palm trunks and staghorn fern (photo-1, photo-3); Bahasa Indonesia; type mood "sturdy, slightly raw" headings with soft body; typographic hero, no photos |
| impeccable | Persuade mode (offer plus working action in the first viewport); rut named and refused (brown/cream "kopi kekinian" page with bean icons and a latte photo, and its opposite, a white minimal café); seven candidates weighed (tribune steps, cube seats with inset lights, uplit trunks, a garden site plan, RT/RW gang signs, warkop chalkboard, lever-machine gauges), picked tribune plus uplights inside the brief's pinned night palette; Drenched colour strategy with one daylight band; faces off the default list; one authored focal sequence instead of scattered effects. The launcher, concept-seed and decision page were not run (they write outside `docs/` and need the user); its method was applied by hand |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `malam` | #13204A | Ground for hero, menu, garden, visit, close (night sky, photo-3) | beton on malam 10.6:1 |
| `beton` | #D9D3C7 | Main text on night; ground of the daylight band and "Kata mereka" | arang on beton 10.1:1 |
| `lampu` | #F3B63F | Light only: strips, cones, light disks, primary button fill, prices and today's hours on night | lampu on malam 8.7:1; arang on lampu 8.3:1; **never text on beton (1.2:1)** |
| `pakis` | #A3C46C | Staghorn fern, small labels and group names on night | pakis on malam 8.0:1; decoration only on beton (1.3:1) |
| `arang` | #24272C | Text and buttons on beton; footer ground | beton on arang 10.1:1 |
| `aren` | #7A4A24 | Palm sugar and coffee in drink drawings; small text on beton if needed | aren on beton 5.0:1; never on malam |

Derived shades, not new roles: `malam-terang` #1D2D5E (step faces, trunks, plinth fronts, hours "today" row; beton on it 8.9:1),
`beton-bayang` #A8A196 (lit tread edge, cube sides), `aren-tua` #4A2A14 (espresso layer, inside a beton-outlined glass only).
Light washes behind text never exceed 22% lampu over malam (beton on that 6.7:1). No pure black, no gradients except light washes.

## 4. Type
Familjen Grotesk (700/600) for display, heads and lead: sturdy, slightly compressed, with ink traps that
read like letters cast in concrete; its tall verticals echo the uplit trunks. Onest (400/500) for body and
small: open, soft, airy, holds up light-on-dark. Both via `next/font/google`, Latin subset, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3.25rem, 14vw + 0.5rem, 11rem)`, lh 0.95, -0.02em, 700, `nowrap` | "Kopi Goen" in the hero only (one line, checked at 320/390/1440) |
| `--step-head` | `clamp(1.875rem, 1.3rem + 2.2vw, 2.75rem)`, lh 1.08, 700 | section headings |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)`, lh 1.2, 600 | product names, h3, review statements, tagline |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`, lh 1.6 | running text, list items, prices, hours |
| `--step-small` | `clamp(0.8125rem, 0.78rem + 0.2vw, 0.9375rem)`, lh 1.45, 500 | eyebrow, group labels, photo-frame labels, notes, banner |

Ratios (phone / desktop): small→body 1.31/1.27, body→lead 1.29/1.37, lead→head 1.36/1.69, head→display ≥1.8.
Labels are sentence case in pakis, weight 500–600; no tracked uppercase micro-labels, no mono.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 48px: `clamp(1.25rem, 4vw, 3rem)` |
| Section padding phone / desktop (`--section-y`) | 64px / 112px: `clamp(4rem, 8vw, 7rem)` |

- **Proximity:** prices sit on the same line as the product name, 12px after it, never right-aligned
  across a column. Group labels sit 8px above their items. Photo-frame labels sit inside the frame.
  Hours tables live in a column no wider than 320px.
- **Wide screens:** hero puts name and steps left, trunks right; menu is a 5+7 split; the garden is a
  full-bleed day/night split; reviews are 4+8; visit is map 7 + info 5; close is 6+6.
- **Lists:** menu items at `--step-body`, product names at `--step-lead`, never larger.
- **Illustrations as product display, not cards:** no boxes or shadows around products; the cube plinth is the container.

## 6. Products on the page
Five products, four drawn flat in the palette, each standing on a concrete cube seat (beton top,
`beton-bayang` side, `malam-terang` front) with the round steel inset light from photo-3 lit in lampu,
and a soft lampu pool behind the item:
1. **Es Kopi Aren** (largest): tall glass, beton outline with a 12% beton body fill, layers bottom to top:
   aren palm sugar, beton milk, `aren-tua` coffee; four ice cubes as rounded squares.
2. **Cappuccino**: beton cup and saucer from the side, with the top shown as an ellipse carrying a
   rosetta in beton on aren (latte art is in photo-2).
3. **V60**: cone dripper over a glass server holding `aren-tua` coffee.
4. **Kentang Goreng**: lampu-gold fries in an arang basket lined with beton paper.
5. **Kopi Havana**: a labelled photo frame, not a drawing, because nobody has confirmed what it looks like:
   dashed beton border on `malam-terang`, label "Foto Kopi Havana dari pemilik".
Each product: name (`--step-lead`) + price in lampu (`--step-body`) on one line, description (`--step-body`) below, all within 16px of the drawing.

## 7. Sections
**Hero.** Name, today's hours and status, directions and WhatsApp on the lit steps. Full viewport (`100svh`), steps anchored to the bottom.
```
Hero: phone (390)                   Hero: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Draf: contoh situs, belum.. |      |Draf: contoh situs untuk Kopi Goen, belum resmi.              |
|                   fern\ || |      |                                      Menu   Suasana   Lokasi |
|                         || |      |                                         fern\ ||        ||   |
|                         || |      |                                               ||        ||   |
|Kedai kopi di kebun ·     || |      | Kedai kopi di kebun · Balekambang, Jakarta Timur||        ||   |
|Balekambang, Jakarta Timur|| |      | Kopi Goen  (display, 176px)  ~~wash~~          ||        ||   |
|Kopi Goen  (display)      || |      | Ngopi di kebun, dari siang sampai malam.       ||        ||   |
|Ngopi di kebun, dari     /||\|      |                                              /||\      /||\  |
|siang sampai malam.  +------+|      |          +-----------------------------------------------+   |
|     +------------------+   |      |          | ● Buka hari ini 12.00–23.00 · Sedang buka     |   |
|     |● Buka hari ini   |   |      |          |================ strip light ===================|   |
|     |  12.00–23.00     |   |      | +------------------------------------------------------------+|
|     |== strip light ===|   |      | | [Petunjuk Arah]  [WhatsApp]   0878-1105-0836               ||
|+--------------------------+|      | |======================= strip light =========================||
||[Petunjuk Arah][WhatsApp] ||      +--------------------------------------------------------------+
||====== strip light =======||
+----------------------------+
```

**Menu andalan.** The drinks people praise first, then the rest. Ground `malam`.
```
Menu: phone (390)                   Menu: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Menu andalan (head)         |      | Menu andalan (head)                 Intro, 2 lines (body)      |
|Intro (body)                |      | +------------------------+  +-------------+  +-------------+  |
|   [Es Kopi Aren glass]     |      | |  [Es Kopi Aren, tall]   |  | [Havana     |  | [Cappuccino]|  |
|   [cube + inset light]     |      | |  [cube + inset light]   |  |  frame]     |  | [cube]      |  |
|Es Kopi Aren  Rp 20rb       |      | | Es Kopi Aren  Rp 20rb   |  | Kopi Havana |  | Cappuccino  |  |
|Kopi, susu, gula aren, es.  |      | | Kopi, susu, gula aren…  |  | Rp 25rb     |  | Rp 25rb     |  |
|+-----------+ +-----------+ |      | |  (cols 1–5)             |  +-------------+  +-------------+  |
||[Havana fr]| |[Cappucc.] | |      | |                         |  | [V60][cube] |  | [Kentang]   |  |
||Kopi Havana| |Cappuccino | |      | |                         |  | V60 Rp 25rb |  | Kentang Gor.|  |
||Rp 25rb    | |Rp 25rb    | |      | +------------------------+  +-------------+  +-------------+  |
|+-----------+ +-----------+ |      | Harga contoh, menunggu konfirmasi pemilik. (small)            |
||[V60]      | |[Kentang]  | |      | +-----------+  Menu lainnya (lead)                            |
||V60 Rp 25rb| |Kentang 18rb||      | | Foto bar  |  Espresso    Manual brew   Non-kopi    Camilan  |
|+-----------+ +-----------+ |      | | espresso  |  Americano   Kopi Tubruk   Matcha L.   Pisang G.|
|Harga contoh… (small)       |      | | (frame)   |  Caffe Latte (biji lokal)  Coklat      Roti B.  |
|Menu lainnya (lead)         |      | | cols 1–3  |  Piccolo                   Lychee Tea  Indomie  |
|Espresso / Manual brew /    |      | +-----------+                            Teh Tarik            |
|Non-kopi / Camilan (stacked)|      +--------------------------------------------------------------+
|[Foto bar espresso 16:9]    |
+----------------------------+
```

**Suasana kebun.** The garden by day and by night, with frames for owner photos. Heading on `malam`, then a full-bleed split: day panel on `beton` (arang text), night panel on `malam` (lampu "Malam" label).
```
Suasana: phone (390)                Suasana: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Suasana kebun (head)        |      | Suasana kebun (head)      Pohon tua, pakis tanduk rusa… (body)|
|Pohon tua, pakis… (body)    |      +-------------------------------+------------------------------+
|############################|      |##### beton ###################|::::: malam ::::::::::::::::::|
|# Siang (lead)              #|      |# +----------+  Siang (lead)   |: +----------+  Malam (lead)  :|
|# [frame 4:5 Foto kebun     #|      |# | frame 4:5|  Pohon tua,     |: | frame 4:5|  Begitu gelap, :|
|#  siang dari pemilik]      #|      |# | siang    |  pohon… (body)  |: | malam    |  pohon… (body) :|
|# Pohon tua, pakis, kerikil…#|      |# +----------+                 |: +----------+                :|
|############################|      +-------------------------------+------------------------------+
|: Malam (lead, lampu)       :|
|: [frame 4:5 malam]         :|
|: Begitu gelap, pohon…      :|
+----------------------------+
```

**Kata mereka.** Rating plus four paraphrases, no names, no quote marks. Ground `beton`.
```
Kata mereka: phone (390)            Kata mereka: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Kata mereka (head)          |      | Kata mereka (head)     | Es kopi arennya disebut yang terbaik |
|4,7 dari 275 ulasan Google  |      | 4,7 dari 275 ulasan    | di kota. (lead)                      |
|Es kopi arennya… (lead)     |      | Google (lead)          |--------------------------------------|
|----------------------------|      | Diringkas dari ulasan  | Ada yang menyebut baristanya paling  |
|Ada yang menyebut… (lead)   |      | Google. (small)        |--------------------------------------|
|----------------------------|      |  (cols 1–4)            | Tempatnya terbuka, makin cantik saat |
|Tempatnya terbuka… (lead)   |      |                        | malam tiba.                          |
|----------------------------|      |                        |--------------------------------------|
|Kopi Havana-nya dipuji…     |      |                        | Kopi Havana-nya dipuji… (8 cols)     |
|Diringkas dari ulasan…      |      +--------------------------------------------------------------+
+----------------------------+
```

**Kunjungi kami.** Address, hours, map. Ground `malam`.
```
Kunjungi: phone (390)               Kunjungi: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Kunjungi kami (head)        |      | Kunjungi kami (head)                                         |
|Jl. Munggang, RT.6/RW.4,    |      | +--------------------------------+ Alamat (lead)             |
|Balekambang, Jakarta Timur  |      | |                                | Jl. Munggang, RT.6/RW.4, …|
|Nomor rumah menyusul (small)|      | |   map iframe (cols 1–7)        | Nomor rumah menyusul      |
|[Petunjuk Arah]             |      | |   height 440                   | [Petunjuk Arah]           |
|Jam buka (lead)             |      | |                                | Jam buka (lead)           |
|Senin–Kamis  12.00–23.00    |      | |                                | Senin–Kamis   12.00–23.00 |
|Jumat        12.30–23.00 ●  |      | |                                | Jumat         12.30–23.00 |
|Sabtu–Minggu 12.00–23.00    |      | |                                | Sabtu–Minggu  12.00–23.00 |
|Buka setiap hari (small)    |      | +--------------------------------+ Buka setiap hari (small)  |
|[map 4:3]                   |      |                                                              |
+----------------------------+      +--------------------------------------------------------------+
```

**Hubungi kami + footer.** The close: three actions on three lit steps, echoing the hero. Ground `malam`, footer `arang`.
```
Hubungi: phone (390)                Hubungi: desktop (1440)
+----------------------------+      +--------------------------------------------------------------+
|Sampai ketemu di kebun.     |      | Sampai ketemu di kebun.     |            +-------------------+ |
|(head) Mau tanya menu… body |      | (head, cols 1–6)            |            | [WhatsApp]        | |
|        +------------------+|      | Mau tanya menu atau jam     |            |==== strip ========| |
|        |[WhatsApp]        ||      | buka? Kirim pesan atau      |   +----------------------------+ |
|   +-----------------------+|      | telepon saja. (body)        |   | [Telepon 0878-1105-0836]   | |
|   |[Telepon]              ||      |                             |   |==== strip =================| |
|+--------------------------+|      |                             |+-------------------------------+ |
||[Petunjuk Arah]          ||      |                             || [Petunjuk Arah]               | |
|+--------------------------+|      +--------------------------------------------------------------+
|Footer (arang): name, addr, |      | Footer (arang): Kopi Goen · Jl. Munggang… · 0878… | Draf note |
|phone, draft note (small)   |      +--------------------------------------------------------------+
+----------------------------+
```

## 8. Motion
**Signature: "lampu menyala"** (hero, on load, once). Text is never animated and is readable from the
first paint; only the decorative light elements (all `aria-hidden`) start off.
1. 0.10s: strip light under the lower step, opacity 0.15 to 1, 0.2s, `power2.out`; its riser wash (35% lampu at full) fades in, 0.5s.
2. 0.25s: strip under the upper step, same.
3. 0.45s and 0.60s: trunk uplight cones, opacity 0 to 1 and scaleY 0.9 to 1 from the bottom, 0.7s, `expo.out`.
4. 0.85s: wash behind "Kopi Goen", opacity 0 to 1 (colour already capped at 22% lampu), 0.8s, `power2.out`.
5. 1.20s: the status dot lights (only if the shop is open now), 0.2s. Sequence ends by 1.7s.
Reduced motion or JS off: everything at final state, lights on. No loops, no flicker.

Supporting: Menu, Suasana, Kata mereka, Kunjungi, Hubungi each fade up 20px once, 0.6s, `power2.out`,
at `top 85%`. Buttons: `::after` overlay opacity 0 to 1 on hover, 180ms; press `scale(0.98)`, 120ms; CSS only.
Lenis at starter defaults. Motion tokens: `ease = "power2.out"`, `easeLight = "expo.out"`, `reveal = { y: 20, duration: 0.6 }`.

## 9. What makes it this shop
- The hero's hours and buttons sit on the stepped concrete tribune from photo-3, each step with its strip light under the nosing.
- Drinks stand on the concrete cube seats with the round steel inset light, the garden's own furniture, instead of on cards.
- The page's one animation is the garden lights coming on, the moment a guest said the place "awakens" at night; the garden section then splits into the same day and night that "12.00–23.00" spans.
- One staghorn fern hangs on the hero trunk, the plant photo-1 is full of.

## 10. Avoid
- The "kopi kekinian" template: brown and cream, coffee-bean icons, steam swirls, latte-art hero photo, script logos.
- Jungle clichés: monstera clipart, leaf borders, tropical patterns. One fern, flat, that's it.
- Night clichés: starfields, fireflies, particles, neon, blurred glowing edges, glass panels, pure black.
- A hero that becomes a poster: the scene must not shrink the name or hide the buttons. Buttons must look like buttons (amber fill or beton outline, 48px tall), not like step decoration.
- Washes behind text above 22%; lampu text on beton; pakis text on beton.
- Product cards in a row of identical boxes; reviews as three identical quote cards.
- New claims: no "terbaik" in our own voice, no wifi, outlets, music, smoking area, indoor or all-weather seating.
- Customer photos anywhere; empty grey boxes. Every photo frame is drawn, labelled, and flagged `data-mockup`.
- Long night monotony: the beton day panel and "Kata mereka" band break the navy.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading
- [x] Max content width set; no detail pinned far from what it describes
- [x] Every section has a desktop wireframe that uses the width on purpose
- [x] At least 3 products shown (food and product shops): four drawn, plus the Havana frame
- [x] Within motion-rules.md
- [x] Brief is decisions, not essays (2–4 pages)
