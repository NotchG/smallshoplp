# Design brief: Woven Coffee

Record decisions, not essays. Aim for 2–4 pages. Every section below is required.

## 1. Concept
**"The label and the glass."** The page uses Woven Coffee's own small print language: the frosted
WOVEN COFFEE band from their glass doors, and the boxed caps and thin brown double rules from the KOPI ENA
bottle label, set on honey pine and white wall. The shop already made this low-key system, so the owner
recognises it before reading a word.
**Signature moment:** on load, two thin threads slide in from opposite sides of the hero, and the frosted
WOVEN COFFEE band settles between them, as if woven onto the glass (about 1 s, once).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Facts; Bahasa Indonesia; names as written (Kopi Enak / KOPI ENA, Ice Vietnamese); the don'ts (no speed promise, no outdoor seating, no milk-drink headline, cozy not stylish) |
| owner-1.jpg / owner-2.jpg | The door band becomes the hero H1, with owner-1 blurred as the ground. owner-2 goes in the tea section, and its blue tea becomes `telang` |
| photo-1/2/3 (reference only) | Pine counter and amber lamp give `pinus`. The label's layout (box, "-White-", double rules, italic corner notes) gives LabelBox, the footer and the bottle drawing. None is shown |
| impeccable | Persuade mode. "Incomplete brand", so keep and extend the band and label rather than invent. Refused the rut (cream + serif + terracotta, latte-art hero, bean icons). Colour as whole fields, faces outside its overused list, one authored motion moment, craft-floor refusals (§10). Weighed: door band, label, pine counter, tea sachets, tenun weave (literal reading, one slot), halte signage, bookshelf. Launcher not run (would download a binary outside docs/); references read directly |
| motion-rules.md | One signature, section-only reveals, transform/opacity, reduced motion = none |

## 3. Palette (4–6 named colours)
Full palette: each colour owns whole sections, never scattered accents.
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kaca` smoked glass | #1C1A17 | Hero overlay, Kata mereka, footer; text on light | `dinding` on it 15.4:1 |
| `dinding` white wall | #F3F1EC | Main ground; text on dark and blue | `kaca` on it 15.4:1 |
| `pinus` pine counter | #D69C55 | Kopi Enak + Hubungi fields; primary button | `kaca` on it 7.2:1. Never text on `dinding` (2.1) |
| `cokelat` label rule | #6E4628 | Hairlines, double rules, shelf, notes on `dinding` | 7.2:1 on `dinding`. On `pinus` 3.4, so rules only |
| `telang` butterfly pea | #21428A | Tea field; focus ring on light | `dinding` on it 8.4:1. `pinus` on it 3.96, so rules and focus only |

Secondary text per ground (explicit, no alpha): on `kaca` #C9C1B4 (9.7), on `telang` #C9D4EE (6.4), on `pinus`
#3B2A1A (5.7), on `dinding` #5C4D40 (7.2). Rules on `kaca`: #47423A. Drawing-only fills: kopi #3A2416, susu #EADBC2,
logam #9A958C. Focus ring 2px, offset 3px: `telang` on `dinding`, `pinus` on `kaca`/`telang`, `kaca` on `pinus`.
Hero: owner-1 blurred 18px under a flat `kaca` 62% layer. The builder samples the brightest point behind the text, which must keep `dinding` ≥ 4.5:1.

## 4. Type
**Jost** (variable; 500 band, 600 headings and labels; always uppercase via CSS). It's the nearest open face to the door's
geometric caps (round O, pointed W/V/N). **Alegreya Sans** (400, 700, italic 400) is a soft humanist body, and its italic
stands in for the label's "Freshly weaved" notes. Load with `next/font/google`, `subsets: ['latin']`, `display: 'swap'`.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2.375rem, 1.3rem + 4.2vw, 5.25rem)` · 38 → 81px | Hero band wordmark only |
| `--step-head` | `clamp(1.8125rem, 1.35rem + 1.8vw, 3rem)` · 29 → 47.5px | Section headings (h2) |
| `--step-lead` | `clamp(1.4375rem, 1.25rem + 0.7vw, 1.875rem)` · 23 → 30px | Hero line, LabelBox names, menu group names (h3), paraphrases |
| `--step-body` | `clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem)` · 18 → 20px | Running text, menu items, amenity terms, prices |
| `--step-small` | `clamp(0.875rem, 0.84rem + 0.1vw, 0.9375rem)` · 14 → 15px | Notes, mockup notes, banner, captions |

Ratios at 390 / 1440: display/head 1.31 / 1.71, head/lead 1.26 / 1.58, lead/body 1.28 / 1.50, body/small 1.29 / 1.33.
Tracking: band 0.08em phone, 0.12em ≥768; headings 0.04em; LabelBox 0.06em; never negative. Line height: band 1.0
(`nowrap`, one line); head 1.1; LabelBox 1.05 (two stacked words, like "KOPI / ENA"); lead 1.3; body 1.55; small 1.45.
Body measure ≤ 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | `clamp(1.25rem, 4vw, 3rem)`: 20px / 48px |
| Section padding phone / desktop (`--section-y`) | `clamp(4rem, 2.5rem + 6vw, 7.5rem)`: 64px / 120px |

- Grid: 12 columns with a 24px gap at ≥1024; 2 columns at ≥768; one column on phone.
- **Proximity:** prices sit ≤ 12px under their LabelBox. Hours: each time sits in a 12ch column right after its day, never
  right-aligned across a wide row. Amenity explanations sit 8px under their term.
- **Wide screens:** every desktop section is a heading column beside content, or media beside text. Colour fields run
  full-bleed with content in `<Container>`. Only the hero band and the woven seams bleed, and each is clipped (`overflow: hidden`).
- **Lists:** menu items, amenities and teas use `--step-body`. Group names and LabelBoxes are at most `--step-lead`.

## 6. Products on the page
1. **Kopi Enak, bottled.** A flat SVG front elevation of their bottle: white ribbed cap, latte fill, white label reproduced
   as photographed (boxed "KOPI / ENA", italic "-White-", "WOVEN COFFEE" between `cokelat` rules, tiny "Freshly weaved" /
   "Shake well before use"). About 150 × 270px on phone, 220 × 400px on desktop. `[MOCKUP]` until the owner sends a photo.
2. **Ice Vietnamese.** A flat SVG: a phin filter (`logam`) on a straight tumbler, with a `kopi` layer over `susu` and three ice
   cubes (`dinding` with a 1.5px `kaca` outline). Same height as the bottle. `[MOCKUP]`.
3. **Teh satu poci.** owner-2.jpg (white teapot, blue tea, sachets), square, `object-position: 70% 75%` to trim the dark
   object top-left. Indonesian alt text, with no "1951".

Drawings are exact geometry: front elevation, no perspective, shading or sketch lines; ≤ 2px strokes, ≤ 4 fills.
Both stand on a "shelf", a 6px `cokelat` line like their pine shelves. Each is `role="img"` with an Indonesian `aria-label`.

## 7. Sections
Fields in order: kaca (hero) · pinus · dinding · telang · dinding · kaca · dinding · pinus · kaca (footer). A **woven
seam** (two-row checker of the two neighbouring colours, cells 24 × 6px phone / 32 × 8px desktop, static SVG,
`aria-hidden`) appears only at hero→Kopi Enak, Menu→Teh and Kunjungi→Hubungi.

**Hero**: recognition, today's hours, action 1. The band is a `dinding` 12% strip with 1px `dinding` 60% threads, its top
edge at about 28% of the viewport on phone and about 40% on desktop. On phone, content down to the address is about 670px, inside 844.
```
Hero: phone (390)      Hero: desktop (1440)
+--------------------+ +----------------------------------------------------+
|draft banner        | |draft banner                                        |
|blurred owner-1     | |blurred owner-1 + kaca 62%, full bleed              |
|+ kaca 62%          | |                                                    |
|                    | |                                                    |
|--------------------| |----------------------------------------------------|
|WOVEN COFFEE    WOVE| |WOVEN COFFEE       WOVEN COFFEE       WOVEN COFFE   |
|--------------------| |----------------------------------------------------|
|Kopi dan teh,       | |Kopi dan teh, dirajut      Jl. Jatinegara Timur 107 |
|dirajut sederhana   | |sederhana di Jatinegara.   Dekat Halte Kp. Melayu   |
|di Jatinegara.      | |Buka hari ini 09.00–21.00  Sen–Jum 09.00–21.00      |
|Buka hari ini       | |[Petunjuk Arah][WhatsApp]  Sab–Min 10.00–21.00      |
|09.00–21.00         | |(cols 1–6)                 (cols 8–12)              |
|[Petunjuk Arah    ] | |                                                    |
|[WhatsApp         ] | |band = H1 + aria-hidden repeats, clipped            |
|Jl. Jatinegara Timur| |                                                    |
|No.107 · dkt halte  | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Kopi Enak** (`pinus`): signature product + Ice Vietnamese, each drawing standing on the shelf with its name and price right below it.
```
Kopi Enak: phone (390) Kopi Enak: desktop (1440)
+--------------------+ +----------------------------------------------------+
|KOPI ENAK           | |KOPI ENAK                 +------+     _[]_         |
|Racikan khas Woven; | |Racikan khas Woven.       | cap  |    |phin|        |
|kata tamu: unik,    | |Kata seorang tamu:        |[KOPI]|    |kopi|        |
|tapi enak.          | |unik, tapi enak.          |[ENA ]|    |susu|        |
|+----+ [KOPI    ]   | |Ada juga dalam botol.     +------+    |ice |        |
||botl| [ENAK    ]   | |                          ======shelf=========      |
||    | 250 ml       | |Di botol: KOPI ENA;       [KOPI    ]  [ICE       ]  |
|+----+ Rp 25rb      | |ejaan menunggu            [ENAK    ]  [VIETNAMESE]  |
|====== 1 liter      | |konfirmasi. (small)       250 ml      Rp 25rb       |
|+----+ [ICE     ]   | |(cols 1–5)                Rp 25rb     favorit       |
||phin| [VIETNAM.]   | |                          1 liter     pelanggan     |
|+----+ Rp 25rb      | |                          Pesan via   (cols 6–12)   |
|======              | |                          WhatsApp                  |
|Di botol: KOPI ENA; | |                                                    |
|ejaan? (small)      | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Menu andalan** (`dinding`): the range. Each group name sits under a `cokelat` double hairline (1px, 3px apart).
```
Menu: phone (390)      Menu: desktop (1440)
+--------------------+ +----------------------------------------------------+
|MENU ANDALAN        | |MENU ANDALAN    = KOPI HITAM      = KOPI SUSU       |
|Banyak pilihan kopi | |Banyak pilihan  Americano         Kopi Enak (botol) |
|untuk hampir semua  | |kopi untuk      V60 manual brew   Cappuccino        |
|selera.             | |hampir semua    Vietnamese drip   Café Latte        |
|= KOPI HITAM        | |selera.         Biji house blend  Es Kopi Susu G.A. |
|Americano           | |                = TEH & NON-KOPI  = CAMILAN & MAKAN |
|V60 manual brew     | |Daftar ini      Teh Blackcurrant  Kentang Goreng    |
|...                 | |contoh. (small) Teh Mangga        Roti Bakar        |
|= KOPI SUSU ...     | |(cols 1–4)      Butterfly Pea Tea Pisang Goreng Keju|
|= TEH & NON-KOPI ...| |                Chocolate         (cols 5–12, 2×2)  |
|= CAMILAN & MAKAN   | |                                                    |
|Daftar ini contoh.  | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Bukan cuma kopi** (`telang`): tea with the owner photo; text in `dinding`, secondary text in #C9D4EE.
```
Teh: phone (390)       Teh: desktop (1440)
+--------------------+ +----------------------------------------------------+
|BUKAN CUMA KOPI     | |+----------------------+  BUKAN CUMA KOPI           |
|Pilihan tehnya      | ||                      |  Pilihan tehnya cukup      |
|cukup banyak;       | ||  owner-2.jpg, 1:1    |  banyak; sederhana, segar. |
|sederhana, segar.   | ||  teapot + blue tea   |  Disajikan satu poci.      |
|+------------------+| ||  (cols 1–6)          |  [TEH      ]               |
|| owner-2.jpg, 1:1 || ||                      |  [SATU POCI]               |
|+------------------+| ||                      |  Rp 22rb                   |
|[TEH      ]         | |+----------------------+  Blackcurrant · Mangga ·   |
|[SATU POCI]         | |                          Butterfly Pea · Chocolate |
|Rp 22rb             | |                          (cols 7–12)               |
|Blackcurrant, Mangga| |                                                    |
|Butterfly Pea ...   | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Kenapa mampir** (`dinding`): six practical reasons as a typographic list, with no icons and no cards.
```
Kenapa mampir: phone (390) Kenapa mampir: desktop (1440)
+--------------------+ +----------------------------------------------------+
|KENAPA MAMPIR       | |KENAPA MAMPIR   | WI-FI            | PARKIR MOTOR   |
|Tempat sederhana    | |Tempat          | Bawa laptop...   | Mampir naik... |
|yang nyaman.        | |sederhana yang  |------------------|--------------- |
|--------------------| |nyaman, untuk   | RUANG MEROKOK    | DEKAT HALTE    |
|WI-FI               | |sebentar atau   | BER-AC           | KAMPUNG MELAYU |
|Bawa laptop, kerja. | |lama.           |------------------|--------------- |
|--------------------| |(cols 1–4)      | BAYAR PAKAI      | BUKA SETIAP    |
|RUANG MEROKOK BER-AC| |                | APA SAJA         | HARI           |
|Tetap sejuk.        | |                                                    |
|--------------------| |                                                    |
|BAYAR PAKAI APA SAJA| |                                                    |
|... 6 rows in all   | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Kata mereka** (`kaca`): paraphrases at `--step-lead`, third person, no quote marks, no names, no stars.
```
Kata mereka: phone (390) Kata mereka: desktop (1440)
+--------------------+ +----------------------------------------------------+
|KATA MEREKA         | |KATA MEREKA     | Seorang tamu     | Tempat nyaman  |
|Rata-rata 4,6 dari  | |Rata-rata 4,6   | mampir mendadak, | untuk ngobrol; |
|302 ulasan Google.  | |dari 302 ulasan | malah jatuh hati | favoritnya Ice |
|--------------------| |di Google.      | pada tehnya.     | Vietnamese.    |
|Seorang tamu mampir | |Lihat di Google |------------------|----------------|
|mendadak, malah ... | |Maps (link)     | Timnya ramah dan | Tempat santai  |
|--------------------| |Diringkas dari  | paham kopi; ...  | sepulang kerja.|
|paraphrase 2, 3, 4  | |ulasan (small)  |                  |                |
|Diringkas dari      | |                                                    |
|ulasan. (small)     | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Kunjungi kami** (`dinding`): info first in the DOM and on the left, so visual and focus order agree.
```
Kunjungi kami: phone (390) Kunjungi kami: desktop (1440)
+--------------------+ +----------------------------------------------------+
|KUNJUNGI KAMI       | |KUNJUNGI KAMI            +-------------------------+|
|Jl. Jatinegara Timur| |Jl. Jatinegara Timur     |                         ||
|No.107, Bali Mester | |No.107, Bali Mester,     |  Google Maps embed      ||
|Dekat Halte Kampung | |Jatinegara 13310         |  4:3, lazy (cols 6–12)  ||
|Melayu; parkir motor| |Dekat Halte K. Melayu;   |                         ||
|Senin–Jumat 09–21   | |parkir motor; satu       |                         ||
|Sabtu–Minggu 10–21  | |lokasi dgn gurame bakar  |                         ||
|+------------------+| |Senin–Jumat 09.00–21.00  |                         ||
|| map 4:3, lazy    || |Sabtu–Minggu 10.00–21.00 +-------------------------+|
|+------------------+| |Buka setiap hari                                    |
|[Petunjuk Arah    ] | |[Petunjuk Arah]  (cols 1–5)                         |
+--------------------+ +----------------------------------------------------+
```

**Hubungi kami** (`pinus`): the close. Three full-width BoxButtons, each with its number or address inside.
```
Hubungi kami: phone (390) Hubungi kami: desktop (1440)
+--------------------+ +----------------------------------------------------+
|HUBUNGI KAMI        | |HUBUNGI KAMI          [WhatsApp   0858-9232-0323 ]  |
|Tanya menu, pesan   | |Tanya menu, pesan     [Telepon    0858-9232-0323 ]  |
|Kopi Enak botol...  | |Kopi Enak botol, atau [Petunjuk Arah  Jl. Jat... ]  |
|[WhatsApp         ] | |memastikan kami buka.                               |
|[Telepon          ] | |(cols 1–6)            (cols 7–12)                   |
|[Petunjuk Arah    ] | |                                                    |
+--------------------+ +----------------------------------------------------+
```

**Footer** (`kaca`): sign-off set like the bottle label.
```
Footer: phone (390)    Footer: desktop (1440)
+--------------------+ +----------------------------------------------------+
|==============      | |==================   The Art of Putting Good Things |
|  WOVEN COFFEE      | |  WOVEN COFFEE       Together (italic, [MOCKUP])    |
|==============      | |==================   Jl. Jatinegara Timur No.107    |
|Freshly weaved      | |Freshly weaved       Buka setiap hari               |
|The Art of Putting..| |Draf contoh, belum situs resmi. (small)             |
|Jl. Jatinegara ...  | |                                                    |
|Draf contoh (small) | |                                                    |
+--------------------+ +----------------------------------------------------+
```

## 8. Motion
**Signature (hero, load, once, total ≈ 1.05s).**
- Top thread `x: -6% → 0`, bottom thread `x: 6% → 0`, both `opacity 0 → 1`, 0.9s, `expo.out` (≈ `cubic-bezier(0.16,1,0.3,1)`),
  start 0s. Threads are 120% wide inside the clipped band, so their ends never show.
- Wordmark row `x: -24px → 0` (phone −12px), 0.9s `expo.out`, start 0.1s. **Opacity stays 1**: the H1 is visible from
  first paint and with JS off.
- Hero copy group `opacity 0 → 1`, `y: 16 → 0`, 0.6s `power2.out`, start 0.45s.
- Reduced motion: no timeline, final state.

**Supporting.** One reveal per section (not the hero): `y: 20 → 0`, `opacity 0 → 1`, 0.6s `power2.out`, ScrollTrigger `top 85%`, once.
No per-item stagger. BoxButton hover: `::after` overlay opacity 0 → 0.12, 180ms ease-out; press `translateY(1px)`, 120ms.
Seams and map are static. Lenis at starter defaults. Tokens for `lib/motion.ts` (add if missing): `signature {dur 0.9, ease 'expo.out'}`,
`reveal {dur 0.6, y 20, ease 'power2.out'}`, `heroCopy {dur 0.6, y 16, delay 0.45}`, `response 180ms`.

## 9. What makes it this shop
1. The H1 is their door: the frosted, spaced-caps band repeating off both edges over a blurred view through their own
   glass, woven on by two threads.
2. Their bottle label is the component language. Product names sit in the KOPI ENA box, the footer wordmark sits between
   its double rules (in `pinus` on the dark footer), "Freshly weaved" signs off, and the bottle drawing reproduces the real label, spelling question included.
3. The butterfly-pea blue from their teapot photo owns the tea section, and their counter's pine owns the signature and closing sections.

## 10. Avoid
- The category default: cream ground, serif display, terracotta accent, latte-art stock hero, bean icons, "premium/specialty" hype.
- The band as a marquee or infinite scroll; `backdrop-filter` glass panels; gradient overlays (one flat `kaca` layer only).
- LabelBox on headings (three product names only); kicker/eyebrow labels; section numbers; the weave as wallpaper or beyond three seams.
- Sketchy, shaded or perspective drawings. Equal icon cards for amenities. Star widgets. A big-number rating block. Quote marks or names on paraphrases.
- Recognisable faces from owner-1 (blur ≥ 16px; phone `object-position: 38% 50%` keeps the centre person out). Any `photo-*.jpg` on the site.
- "1951" anywhere. Quick-service promises, outdoor seating, milk drinks as a headline, calling the room stylish.
- Band overflow causing horizontal scroll at 390. A hero so tall that Petunjuk Arah drops below 844px.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading. Lowest ratio is 1.26. Group names, LabelBoxes and paraphrases are lead; lists are body.
- [x] Max content width set; no detail pinned far from what it describes. 1200px. Prices ≤ 12px under names, hours in a 12ch column, explanations 8px under terms.
- [x] Every section has a desktop wireframe that uses the width on purpose. All nine are split heading/content or media/text. The hero is a full-bleed photo with a two-column copy row.
- [x] At least 3 products shown (food and product shops). Kopi Enak bottle and Ice Vietnamese (drawings), Teh satu poci (owner-2 photo).
- [x] Within motion-rules.md. One hero signature, section-only reveals, transform/opacity, H1 never hidden, reduced motion = final state, no React Bits.
- [x] Brief is decisions, not essays (2–4 pages). It runs about 4 pages, plus the 18 required wireframes; every paragraph is a value, a rule or a refusal.
