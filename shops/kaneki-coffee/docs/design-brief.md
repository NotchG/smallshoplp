# Design brief: Kaneki

## 1. Concept
**Gelas Kaneki.** The page is set like Kaneki's own bar: white wall, light-oak counter,
bottle-green awning, and every drink drawn in their tumbler with the white "Kaneki" script
printed on it. The script on the glass is the one brand mark guests photograph, so the site is built around it.
**Signature moment:** on load, iced kopi susu rises inside a tall clear glass in the hero. The white
"Kaneki" print can't be seen on the empty glass and appears as the coffee fills in behind it.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | White walls, oak bar, slate-blue grinder, green awning, concrete terrace, script on the glass, dark coaster with a gold ring; the menu; the smoking-terrace and hard-to-read-menu notes; Bahasa Indonesia |
| impeccable | Persuade mode. World derived by hand (`new-work` §3): the rut is a dark-brown latte-art hero on cream with a serif, and the literal "Japanese café" costume. Seven candidates, by resonance: **printed glass (chosen)** · awning and gate sign · kompleks street signage · terrazzo stool and coaster · pour-over recipe card · paper lantern (the literal reading, capped at one) · receipt menu (rut). Code-led; concept-seed and the launcher were not run (they write outside docs/), seed: none (unavailable) |
| Raises kept | *From the awning:* green owns whole regions, not accents. *From the recipe card:* beans set as precise rows (origin, method), no tasting-note prose. *From the gate sign:* hours always sit right beside the action, like the sign at the gate |
| motion-rules.md, site-starter | One signature moment, section reveals only, fixed stack and `globals.css` variables |

## 3. Palette (6 named colours)
Strategy: full palette on a light ground; Kanopi committed to two full-bleed fields (Seduh manual,
Hubungi kami). Scene: a neighbour checks their phone in Jakarta morning light before walking
over; the shop itself is a bright white room, so the ground is light.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `dinding` | #F7F7F4 | Page ground (the white walls); text on Kanopi | Tinta on it 14.6:1 |
| `tinta` | #1C2523 | Text, headings, outline button, glass rim | 14.6:1 on Dinding, 11.3:1 on Beton |
| `kanopi` | #2E4640 | Awning green: two full fields, primary button fill, focus ring on light grounds | Dinding on it 9.5:1 |
| `ek` | #C29466 | Oak counter band and surfaces only; never text | Tinta on Ek 5.8:1; Ek on Dinding 2.5:1, decoration only |
| `beton` | #DADBD7 | "Di luar" panel, map frame, placeholder grounds | Tinta on it 11.3:1; no Gerinda text on Beton (4.45:1) |
| `gerinda` | #4E6472 | Secondary text on Dinding: prices, notes, captions | 5.8:1 on Dinding; not used on Beton or Kanopi |

On Kanopi fields all text is Dinding (hierarchy by size and weight). Illustration-only fills: §6.

## 4. Type
Two families via `next/font/google`, `display: swap`, latin subset:
**Pinyon Script** 400: the wordmark only (hero h1, footer, the print on drawn glasses), a stand-in
for the glass script until the owner sends a logo. **Zen Kaku Gothic New** 400/500/700:
everything else (h2 700, buttons and labels 500, body 400). It's a quiet Japanese gothic with
calm Latin, so the "lightly Japanese" note stays under the surface. If next/font won't subset it, use M PLUS 2.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4.05rem, 2.7rem + 5.4vw, 7.5rem)` (65 → 120px) | Hero wordmark on the glass only; equals 0.3 × `--glass-w`; leading 1.1 (one word, swashes need room) |
| `--step-head` | `clamp(2rem, 1.5rem + 2vw, 3.25rem)` (32 → 52px) | h2 section headings; leading 1.1 |
| `--step-lead` | `clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)` (22 → 26px) | Hero line, h3 (menu groups, panel and theme titles), bean names; leading 1.35 |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17 → 19px) | Body, menu item names and prices, buttons; leading 1.55 |
| `--step-small` | `0.8125rem` (13px) | Captions, "Harga contoh", illustration labels, banner; leading 1.4 |

Ratios at 390 / 768 / 1440: display:head 2.0 / 2.2 / 2.3; head:lead 1.45 / 1.65 / 2.0;
lead:body 1.29 / 1.33 / 1.37; body:small 1.31 / 1.38 / 1.46. Hero glass: `--glass-w: clamp(13.5rem, 9rem + 18vw, 25rem)`,
height 1.45 × width. The wordmark must stay ≤ 80% of the glass width at print height; if
Pinyon measures wider, drop the factor to 0.27 in both variables.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥768) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px (≥768) |

- Breakpoints: stacked below 768; four drinks across from 768; flanked hero from 1024.
- **Proximity:** names and prices sit directly under their illustration (≤16px gap); price follows its
  name on the next line, never right-aligned across a row. Bean method sits under the bean name. Hours sit directly above the buttons.
- **Wide screens:** hero uses 12 columns (text 1–4, glass 5–8, actions 9–12); menu rows fill the
  container; Seduh manual 7/5; Suasana two panels; Kata mereka 5/7; Kunjungi map 7 / details 5.
- **Lists:** menu items, beans and themes at `--step-body`/`--step-lead`, never heading size.

## 6. Products on the page
No owner photos, so **flat illustrations of the specific items** (inline SVG, `data-mockup` on
the figure until photos arrive). Seven products:

| Product | How it appears |
|---|---|
| Es kopi susu | Shared `Glass`: tapered tumbler, liquid #9A7550, 3 ice cubes, white "Kaneki" print, dark coaster #302922 with a thin gold ring #B8995A. Hero (large, animated) + menu |
| Charcoal | `Glass`, liquid #3A3A39 with a milk band #6E6C68 at the top |
| Matcha | `Glass`, liquid #6F8F4E with a milk band #C9D3B0 |
| Peach tea | `Glass`, amber #C7893B over deep #8E3F1E, one peach slice #E9A066 |
| Butter croissant | Side-view crescent, 5 laminated segments in #D9A050 / #B87830, highlight #F0C878, on a white plate. Menu + hero (≥768) |
| Dimsum mentai | 3 dimsum with mentai caps #E8823A, darker spots #B5652A, small tobiko dots, on a dark plate |
| Truffle fries | Fries #E3B04B with dark flecks in a plain white cup |

Rules: one style for all of them, flat fills, no outlines except the glass rim (#C9CCCA,
1.5px), no gradients, one flat shadow ellipse (#E6E6E1) per object. All glasses the same size;
food is drawn at the visual weight of a glass's lower 60%. Drinks stand on the Ek counter strip,
food on a thin Tinta table line.

## 7. Sections
Hero: the glass on the oak counter is the page's thesis. Phone shows "Petunjuk Arah" above the fold.
```
Hero: phone (390)       Hero: desktop (1440)
+------------------+    +----------------------------------------------+
| draft banner     |    | draft banner                                 |
|-o----o----o----o-|    |-o-------o-------o-------o-------o-------o----| track-light rail
| coffee shop ·    |    |                  .--------.                  |
| Pondok Kelapa    |    |                  |        |                  |
|    .-------.     |    | coffee shop ·    | Kaneki |  Buka hari ini   |
|    |Kaneki |     |    | Pondok Kelapa,   |  ice   |  07.30–22.00     |
|    |  ice  |     |    | Duren Sawit      |        |  ● Sedang buka   |
|    '-------'     |    | Kopi seduh manual|        |  [Petunjuk Arah] |
|    (coaster)     |    | dan croissant    '--------'  [WhatsApp]      |
|==oak counter=====|    | hangat, ...      (coaster) (croissant)       |
| Kopi seduh manual|    |=========== oak counter, full bleed ==========|
| Buka hari ini ...|    +----------------------------------------------+
| [Arah] [WhatsApp]|     cols 1–4 bottom-aligned | 5–8 glass | 9–12
+------------------+
```
Menu andalan: what to order, plus a full menu readable from any seat (the in-store menu is hard to see).
```
Menu: phone             Menu: desktop (1440)
+------------------+    +----------------------------------------------+
| Menu andalan     |    | Menu andalan                                 |
| Semua menu ada.. |    | Semua menu ada di sini, bisa dibaca dari meja|
| [glass]  [glass] |    |  [glass]    [glass]    [glass]    [glass]    |
|====oak====oak====|    |=============== oak counter strip ============|
| Es kopi  Charcoal|    |  Es kopi    Charcoal   Matcha     Peach tea  |
| Rp 25rb  Rp 30rb |    |  Rp 25rb    Rp 30rb    Rp 30rb    Rp 22rb    |
| [glass]  [glass] |    |  note       note       note       note       |
| Matcha  Peach tea|    |   [croissant]     [dimsum]      [fries]      |
|[crois] Butter cr.|    |  ------------- table line -----------------  |
|[dimsum] Dimsum m.|    |   Butter cr.      Dimsum m.     Truffle f.   |
|[fries] Truffle f.|    | Daftar menu · Harga contoh                   |
| Daftar menu      |    | Kopi          | Non-kopi       | Makanan     |
| Kopi/Non-kopi/   |    | Es kopi susu  | Matcha latte   | Butter cr.  |
| Makanan, stacked |    |  Rp 25rb      |  Rp 30rb       |  Rp 25rb    |
+------------------+    +----------------------------------------------+
```
Seduh manual: the manual-brew bar. Kanopi full-bleed field.
```
Seduh manual: phone     Seduh manual: desktop (1440)
+==================+    +==============================================+
| Seduh manual     |    | Seduh manual               | Contoh biji     |
| Pilihan seduh    |    | Pilihan seduh manualnya    | Gayo, Aceh      |
| manualnya banyak.|    | banyak. Tanyakan biji yang | V60             |
| House blend ...  |    | sedang ada di bar. House   |-----------------|
| [dripper]        |    | blend juga enak sebagai    | Kintamani, Bali |
| Contoh biji      |    | americano. Coba tanpa gula.| V60             |
| Gayo, Aceh / V60 |    |   [dripper + server]       |-----------------|
| Kintamani / V60  |    |                            | Flores Bajawa   |
| Flores Bajawa    |    |      cols 1–7              | Susu nabati     |
| Susu nabati ...  |    |                            | tersedia  8–12  |
+==================+    +==============================================+
```
Suasana: where to sit, with smoking stated plainly. Placeholders are flat vignettes (inside:
wall, oak counter, round paper lantern, track lights; outside: concrete grid, scalloped awning,
two small trees, tray table, terrazzo stool) captioned "Ilustrasi · foto asli menyusul".
```
Suasana: phone          Suasana: desktop (1440)
+------------------+    +----------------------------------------------+
| Suasana          |    | Suasana                                      |
| Kafe kecil yang..|    | Kafe kecil yang tenang di tengah kompleks.   |
| [inside 4:3]     |    | +---------------------+ +--------------------+|
| Di dalam  text   |    | | [inside vignette]   | | [outside vignette] ||
| [outside 4:3]    |    | | Di dalam (Dinding)  | | Di luar (Beton)    ||
| Di luar   text   |    | | bar, bangku jendela | | teras, area merokok||
| · Susu nabati    |    | +---------------------+ +--------------------+|
| · Area merokok   |    | Susu nabati tersedia · Area merokok di luar ·|
| · Cocok kerja    |    | Cocok untuk kerja                            |
+------------------+    +----------------------------------------------+
```
Kata mereka: themes paraphrased from reviews, no names or quote marks, no stars.
```
Kata mereka: phone      Kata mereka: desktop (1440)
+------------------+    +----------------------------------------------+
| Kata mereka      |    | Kata mereka          | Kopinya kuat ...      |
| 4,5 dari 646     |    | 4,5 dari 646 ulasan  |-----------------------|
| ulasan Google    |    | Google               | Butter croissant ...  |
| 4 themes, ruled  |    | [Baca di Google]     | Enak untuk kerja ...  |
| [Baca di Google] |    |    cols 1–5          | Dekat rumah ...  6–12 |
+------------------+    +----------------------------------------------+
```
Kunjungi kami: find it.
```
Kunjungi: phone         Kunjungi: desktop (1440)
+------------------+    +----------------------------------------------+
| Kunjungi kami    |    | +------------------------+ Kunjungi kami     |
| Jl. Perumkar DKI.|    | |  map embed, 4:3        | Jl. Perumkar DKI..|
| Patokan: menyusul|    | |  cols 1–7, Beton frame | Patokan: menyusul |
| Senin–Minggu     |    | |                        | Senin–Minggu      |
| 07.30–22.00      |    | |                        | 07.30–22.00       |
| [Petunjuk Arah]  |    | +------------------------+ [Petunjuk Arah]   |
| [map 1:1]        |    +----------------------------------------------+
+------------------+
```
Hubungi kami: the close. Kanopi field with the awning's scalloped edge on top (its only use).
```
Hubungi: phone          Hubungi: desktop (1440)
+vvvvvvvvvvvvvvvvvv+    +vvvvvvvvvvvvvvvvvvv scallop vvvvvvvvvvvvvvvvvvvv+
| Hubungi kami     |    | Hubungi kami                 | Kaneki (script)|
| Tanya menu ...   |    | Tanya menu atau biji yang    | Jl. Perumkar   |
| 0852-1691-8752   |    | sedang ada, lewat WhatsApp   | DKI, Pondok    |
| [WhatsApp]       |    | atau telepon. 0852-1691-8752 | Kelapa         |
| [Telepon]        |    | [WhatsApp] [Telepon] [Arah]  | Setiap hari    |
| [Petunjuk Arah]  |    |   cols 1–7                   | 07.30–22.00    |
| Kaneki · address |    |                              |   cols 9–12    |
+==================+    +================================================+
```

## 8. Motion
**Signature: the glass fills.** Hero only, once on load. The liquid group (fill, ice,
surface ellipse) sits inside the glass clipPath and moves `translateY(102%) → 0`
(`transform-box: fill-box`) over 1.1s, delay 0.15s, `cubic-bezier(0.16, 1, 0.3, 1)`. The
surface ellipse rotates −4° → 0° in the same keyframes. The h1 "Kaneki" is real white HTML text over the glass
from the first paint; it becomes legible as coffee passes behind it, so no text effect is needed.
It is a CSS keyframe, not GSAP: it plays with JS off and ends at its final state. **Reduced motion:**
`animation: none`, glass full on load.
Supporting: one `<Reveal>` per section content block (Menu, Seduh manual, Suasana, Kata mereka,
Kunjungi, Hubungi), 20px, 0.7s, `power2.out`, once. Buttons: overlay opacity 0 → 0.12 in 200ms
on hover, `scale(0.98)` in 150ms on press. Nothing else moves: menu glasses, the status dot and
the illustrations are static. Lenis: starter defaults. Tokens: starter `lib/motion.ts` as is; add
`--dur-hero: 1.1s` and `--ease-pour: cubic-bezier(0.16, 1, 0.3, 1)` in `globals.css` to mirror it.

## 9. What makes it this shop
- The white "Kaneki" script on every drawn glass, with the dark coaster and thin gold ring
  from their tables.
- Their awning green owns the Seduh manual and closing fields. Their oak bar counter is the shelf
  the drinks stand on, lit by the black track-light rail from their ceiling.
- It fixes what guests mentioned: a full menu readable from any seat, and "Di dalam" vs "Di luar" panels
  that say plainly the terrace is the smoking area.

## 10. Avoid
- Cream ground, serif display, terracotta; dark-brown latte-art hero; bean scatters; receipt
  menus; three equal icon cards; testimonial carousels, quote marks, star rows.
- Japanese costume: no kana or kanji, hanko seals, washi texture, blossoms or sun rays. The
  Japanese feel is a [MOCKUP] guess; the lantern appears once, in the inside vignette.
- Script anywhere except the wordmark; no script headings or menu names.
- "Murah", "terbaik" or any price or superlative headline; comparisons with other coffee shops; the shake.
- Concept risks: the white print unreadable (keep liquid #9A7550 behind it, 4.2:1); the
  wordmark overflowing the glass at 768–1024; Pinyon swashes clipped by `overflow: hidden`;
  illustrations drifting into mixed clip-art styles; the fill turning into a loader or repeating on
  the menu glasses (that would be a second signature); green fields spreading beyond two.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (smallest gap is lead:body 1.29 at 390; menu, beans and themes at body/lead)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices, methods and hours stacked under their subject)
- [x] Every section has a desktop wireframe that uses the width on purpose (12-col hero, 4-up and 3-up rows, 7/5, 5/7, two panels)
- [x] At least 3 products shown (seven illustrated: four drinks, three foods)
- [x] Within motion-rules.md (one signature, section reveals only, transform/opacity, reduced motion = none, no React Bits)
- [x] Brief is decisions, not essays (2–4 pages)
