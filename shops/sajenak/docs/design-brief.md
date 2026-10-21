# Design brief: Sajenak

## 1. Concept
**Satu hari di Sajenak.** The page walks from the sunny turf garden through the amber rattan rooms, up to
the string-lit rooftop at night. Each section takes its colour from one of the house's own surfaces, because
Sajenak is one house with many moods, open from 07.30 to midnight.
Signature moment: **the clink.** On load, the two takeaway cups in Sajenak's own logo swing together and touch,
and five small spark strokes flash. It is the logo's own toast to "space for everyone".

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Turf green, white clapboard, amber rattan wall and rooftop navy as the palette; the clinking-cups logo; the four starred drinks and printed prices; hours running to midnight on weekends; praise themes. |
| impeccable | Persuade mode; new-work §3–4 applied by hand (launcher and concept-seed not run, because they write outside `docs/` and need an interactive picker). I weighed seven candidates: house floor plan, day-to-night, takeaway cup, menu board, photobox strip, string lights, neon pictograms. I chose day-to-night built from the house's own materials. Full-palette colour strategy, with fields that own whole sections; the default face list avoided; calibration check against the cream + serif + terracotta café look. |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kapur` (clapboard white) | #F6F4EF | ground for menu and praise; text on Rumput and Malam | Arang on it 13.4:1 |
| `arang` (charcoal brown) | #3A2219 | body text on Kapur and Rotan; text on Rotan buttons | on Rotan 8.5:1 |
| `kopi` (brand brown, sampled from owner-2) | #78412F | headings, prices, illustration line, links on Kapur | on Kapur 7.4:1 |
| `rumput` (turf, in shade) | #3F7311 | hero lawn band | Kapur on it 5.2:1; Rotan button edge vs it 3.3:1 |
| `rotan` (amber wall, owner-1) | #F2BC3E | spaces field; primary buttons; sparks; string-light bulbs; today marker | Arang on it 8.5:1; vs Malam 8.7:1 |
| `malam` (rooftop night navy) | #14263F | visit + contact + footer field | Kapur on it 13.9:1 |
Illustration-only tints (never text): susu #EADCC8, kopi susu #C49A78, gula aren #5A321F, cokelat #4A2A1E.
Mockup banner: Arang ground, Kapur text.

## 4. Type
Fredoka (500, 600) for display, headings and drink names: rounded and geometric like the logo's wordmark.
Figtree (400, 600) for body, lists and buttons. Both via `next/font/google`, `latin`, `display: swap`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 1.8rem + 9.2vw, 8.5rem)` (64→136px) | "Sajenak" in the hero only, Fredoka 600, leading 0.9 (one word, one line) |
| `--step-head` | `clamp(2rem, 1.3rem + 2.8vw, 3.5rem)` (32→56px) | section h2, Fredoka 600, leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)` (22→28px) | drink names, space labels, praise themes, hero line, h3; Fredoka 500, leading 1.2 |
| `--step-body` | `clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem)` (17→18px) | running text, list items, prices, buttons; Figtree, leading 1.55 |
| `--step-small` | `0.8125rem` (13px) | captions, "contoh" tags, banner, footer; Figtree 600 |
Smallest ratios across 320–1920px: display/head 2.0, head/lead 1.45, lead/body 1.29, body/small 1.31.
"space for everyone" sits under the name at `--step-lead` in Fredoka 500, lower case as on the logo.
Guard: "Sajenak" must never wrap or overflow. Below 380px wide, the mark moves above the name.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12 columns, 24px gap |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  Never pin it to the far edge of a wide row. Prices sit directly under or right after the drink name (8–12px), never right-aligned across a column; captions sit 12px under their photo.
- **Wide screens are designed, not stretched:** at 1440px every section uses its width on
  purpose (two columns, a grid, an image beside text) or is visibly narrow and centred.
  No section leaves half the screen empty by accident.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.
- Photos: 12px radius, no borders, no shadows. Buttons: 999px pill, min height 48px, Figtree 600.

## 6. Products on the page
Five products are shown, not just named:
- **Four starred drinks as flat illustrations** (`DrinkArt`): a tapered takeaway cup drawn in the logo's line
  language (round-cap Kopi stroke about 3px at 200px tall, flat fills, a small clinking-cups glyph printed on the cup
  as on the real cups in owner-4). Each one shows its actual recipe:
  **Es Kopi Sajenak**: kopi-susu body, Rotan caramel drizzle down the inside wall, a Kapur vanilla scoop on top.
  **Es Kopi Sepintas**: gula aren band at the bottom, creamy kopi-susu above, three ice cubes outlined.
  **Es Kopi Rumit**: kopi-susu body, a cokelat chocolate scoop on top, hazelnut shown as three small nut shapes beside the cup.
  **Creamy Butterscotch Latte**: susu body over a Rotan butterscotch band, foam dome with Kopi dusting dots.
  All four stand on one shelf line, with the name, a ★ (they are starred on the board) and the price directly below each cup.
- **Creamy Butterscotch Latte photo** from the owner's poster (owner-2, cropped to the drink: x 0–794, y 430–1040, no poster text).
- Menu-board photos (owner-4) are not used as images: the crops are 335×215 and mixed with board graphics.

## 7. Sections
**Hero**: recognition in five seconds; first action. The garden photo's lawn runs into a Rumput band where the name sits.
```
Hero: phone (390)                    Hero: desktop (1440)
+------------------------------+     +--------------------------------------------------------------+
| Draf mockup untuk Sajenak... |     | Draf mockup untuk Sajenak. Beberapa detail masih contoh ...  |
+------------------------------+     +--------------------------------------------------------------+
| garden photo, 4:3, ~292px    |     | garden photo, full bleed, 64vh (max 620px), object-position  |
| (house + tables; lawn at the |     | 50% 75%: house, chairs, timber tables; bottom 96px melts     |
| bottom melts into green)     |     | into Rumput                                                  |
+------------------------------+     +--------------------------------------------------------------+
| [mark] Sajenak     Rumput    |     | [cups ] Sajenak                  | ● Buka hari ini            |
|        space for everyone    |     | [mark ] space for everyone       |   07.30–23.00              |
| Kopi, taman, dan rooftop di  |     | Kopi, taman, dan rooftop di Rawa | ★ 4,9 di Google · 455 ulasan|
| Rawa Domba — buka dari pagi. |     | Domba — buka dari pagi.          |                            |
| ● Buka hari ini 07.30–23.00  |     |                                  | [Petunjuk Arah] [WhatsApp] |
| ★ 4,9 di Google · 455 ulasan |     |<--------- cols 1–8 ------------->|<------- cols 9–12 -------->|
| [Petunjuk Arah] [WhatsApp]   |     +--------------------------------------------------------------+
+------------------------------+       ("Petunjuk Arah" at about 670px on phone, above the fold)
```
**Menu andalan** (Kapur): what to order and what it costs.
```
+------------------------------+     +--------------------------------------------------------------+
| Menu andalan                 |     | Menu andalan                                                 |
| Empat yang kami beri bintang |     | Empat yang kami beri bintang di menu. (lead, 8px under h2)   |
| di menu.                     |     |   [cup]          [cup]          [cup]          [cup]          |
| [cup] Es Kopi Sajenak ★      |     | ==========================================================   |
|  96px Rp 26rb                |     | Es Kopi Sajenak★ Es Kopi       Es Kopi Rumit★ Creamy Butter- |
|       Kopi susu caramel, es  |     | Rp 26rb          Sepintas★     Rp 28rb       scotch Latte★   |
|       krim vanila            |     | desc             Rp 26rb desc  desc          Rp 30rb desc    |
| ---------------------------- |     |                                                              |
| [cup] Es Kopi Sepintas ★ ... |     | [butterscotch  ] | Kopi lainnya        | Non-kopi   contoh     |
| [cup] Es Kopi Rumit ★ ...    |     | [photo, 4 cols ] | Affogato  Rp 27,5rb | Chocolate, Matcha ... |
| [cup] Creamy Butterscotch... |     | [              ] | Americano | Long    | Rp 22rb–28rb          |
| [butterscotch photo 4:3]     |     | caption 12px     | Black  Rp 20rb ...  | Makanan    contoh     |
| Kopi lainnya / Non-kopi /    |     |                  | (8 items)           | items + ranges        |
| Makanan (contoh)             |     |<-- cols 1–4 ---->|<---- cols 5–8 ----->|<---- cols 9–12 ----->|
+------------------------------+     +--------------------------------------------------------------+
```
The lead sits directly under the h2, never pinned to the far right. "contoh" tags (step-small, outlined Kopi pill) sit right beside the group title; mockup groups carry `data-mockup`. Group titles ("Kopi lainnya", "Non-kopi", "Makanan") are step-lead.

**Pilih tempatmu** (Rotan field): the many spaces, ordered front to inside to top.
```
+------------------------------+     +--------------------------------------------------------------+
| Feel like home               |     | Feel like home       | [ pojok rotan photo, 3:2 ]            |
| Pilih tempatmu               |     | Pilih tempatmu       | [ owner-1, cols 5–12      ]           |
| Taman di depan, ruang-ruang  |     | Taman di depan, ...  | Pojok rotan — dinding kuning hangat,  |
| di dalam, rooftop di atas... |     | kursi bayi, photobox,| kursi rotan, meja akar jati, kerikil. |
| [pojok rotan photo 3:2]      |     | kucing di taman      |                                       |
| Pojok rotan — ...            |     |<---- cols 1–4 ------>|<------------- cols 5–12 ------------->|
| [ruang baca photo 3:2]       |     | [ ruang baca photo, 3:2 ]   | [rooftop  ] [rooftop ]        |
| Ruang baca — ... bisa dipesan|     | [ owner-7, cols 1–6     ]   | [tribun   ] [pohon   ]        |
| [tribun 3:4] [pohon 3:4]     |     | Ruang baca — beton, rak     | [3:4      ] [3:4     ]        |
| Rooftop — tribun beton, ...  |     | buku, neon bola dunia ...   | Rooftop — tribun, bata, lampu |
+------------------------------+     +--------------------------------------------------------------+
```
Kicker "Feel like home" is step-body, Fredoka 500, Arang. Space names are h3 at step-lead, descriptions step-body, all text Arang on Rotan.
Rooftop images: owner-5 cropped x 480–1600, y 420–1913 (no water tank or its logo); owner-6 cropped to 3:4 (x 50–1550).

**Kata mereka** (Kapur): proof without quotes.
```
+------------------------------+     +--------------------------------------------------------------+
| Kata mereka                  |     | Kata mereka          | ── Nyaman buat      | ── Baristanya   |
| ★ 4,9 di Google · 455 ulasan |     | ★ 4,9 di Google ·    | nongkrong bareng    | dapat nilai     |
| Dirangkum dari ulasan Google.|     | 455 ulasan           | teman; makanan ...  | sempurna ...    |
| ── theme 1 (step-lead)       |     | Dirangkum dari       | ── Suasana, musik,  | ── Jadi tempat  |
| ── theme 2                   |     | ulasan Google.       | dan harganya pas ...| favorit sejak...|
| ── theme 3 / theme 4         |     |<--- cols 1–4 ------->|<----------- cols 5–12, 2×2 --------->|
+------------------------------+     +--------------------------------------------------------------+
```
**Kunjungi kami** (Malam, string lights along the top edge): get there.
```
+------------------------------+     +--------------------------------------------------------------+
| ~o~~o~~o~~o~~o~~o~ (lights)  |     | ~o~~~o~~~o~~~o~~~o~~~o~~~o~~~o~~~o~~~o~ lights, full bleed   |
| Kunjungi kami                |     | Kunjungi kami             | [ Google Maps embed, 16:10,     ]|
| Jl. Rawa Domba No.47A,       |     | Jl. Rawa Domba No.47A,    | [ 12px radius, lazy,            ]|
| Duren Sawit ... 13440        |     | Duren Sawit ... 13440     | [ cols 6–12                     ]|
| Petunjuk Arah ->             |     | Petunjuk Arah ->          | [                               ]|
| Minggu–Kamis 07.30–23.00     |     | Minggu–Kamis  07.30–23.00 | [                               ]|
| Jumat–Sabtu  07.30–24.00     |     | Jumat–Sabtu   07.30–24.00 | [                               ]|
|   ● hari ini (under its row) |     |   ● hari ini              | [                               ]|
| Buka setiap hari.            |     | Buka setiap hari.         | [                               ]|
| [ map 4:3                  ] |     |<------- cols 1–5 -------->|<----------- cols 6–12 ----------->|
+------------------------------+     +--------------------------------------------------------------+
```
**Hubungi kami** (Malam continues) + footer: reserve or call, then a real close.
```
+------------------------------+     +--------------------------------------------------------------+
| Hubungi kami                 |     | Hubungi kami                          | [ WhatsApp        ]  |
| Mau datang rame-rame? Pesan  |     | Mau datang rame-rame? Pesan meja      | [ Telepon 0856-   ]  |
| meja lewat WhatsApp dulu.    |     | lewat WhatsApp dulu.                  |   9317-2926          |
| [ WhatsApp       full width ]|     | Pagi ngopi, malam ke rooftop.         |                      |
| [ Telepon 0856-9317-2926    ]|     | Semua kebagian tempat. (step-lead)    |                      |
| Pagi ngopi, malam ke rooftop.|     |<------------ cols 1–7 --------------->|<---- cols 8–12 ----->|
| ---------------------------- |     | ------------------------------------------------------------ |
| Sajenak · space for everyone |     | Sajenak · space for everyone   Jl. Rawa Domba No.47A ...     |
| alamat · Draf mockup         |     | Draf mockup, belum dipublikasikan.                           |
+------------------------------+     +--------------------------------------------------------------+
```

## 8. Motion
**Signature: the clink** (hero, on load). The mark's SVG is drawn in its final pose. GSAP starts each cup 16° and 8px apart.
At 0.15s both swing in, accelerating (`power3.in`, 0.45s) and pivoting at the cup base. They touch, recoil 3° and settle (0.15s + 0.15s),
and five Rotan spark strokes fade and grow from 0.85 to 1 (0.25s, 0.03s stagger). Done by about 0.9s. Nothing else in the hero moves.
Reduced motion or JS off: the finished logo with sparks showing, no movement.
Supporting: one starter `Reveal` per section block (7 total, 20px, 0.6s, `power2.out`, once). Buttons: CSS colour change in 150ms and press scale 0.98.
String lights are static and lit. Motion tokens are listed in the TRD (`clink`, `recoil`, `spark`, `clinkIn`).

## 9. What makes it this shop
- The name sits on the lawn: the garden photo's turf runs straight into the green band that holds "Sajenak".
- The logo's two cups clink. It's their own mark, and a toast between friends is what reviewers describe.
- The page follows the shop's hours: garden by day, amber rooms, then a navy rooftop under string lights where the late closing time lives.
  The four drinks the owner starred are drawn with their real layers and stand in a row like the cups on the bottom of their menu board.

## 10. Avoid
- The stock café page: full-bleed photo with a centred name and "Lihat Menu" button, a row of equal cards, a quote carousel.
- The AI café default: cream ground, serif display, terracotta accent. Kapur is painted-clapboard near-white, not cream, and only one of four fields; no serif anywhere.
- Fredoka going childish: only 500/600, never outlined, never all caps, and never used for body text.
- The night section turning into neon on black: no glows, no glowing edges. Bulbs are flat Rotan dots.
- Turf green going garish: Rumput is the shaded turf tone, used only in the hero band.
- A redrawn logo that drifts from the original: match owner-2's mark (cup shapes, lids, hill arms, spark count). It is a placeholder until the file arrives.
- Customer photos (photo-1..3) on the page; quoting reviews; reviewer names; the cat as a mascot (one line of text only).

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists at step-body/lead; rating at step-lead under a step-head h2)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices under or after names; captions 12px under photos; "hari ini" beside its row)
- [x] Every section has a desktop wireframe that uses the width on purpose (8/4, 4/8, 4/4/4, 6/6, 5/7, 7/5 splits)
- [x] At least 3 products shown (four illustrated starred drinks + the butterscotch photo)
- [x] Within motion-rules.md (one signature, transform/opacity only, section-level reveals, nothing hidden without JS, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
