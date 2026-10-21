# Design brief: Halaman Pertama Kitchen & Coffee

## 1. Concept
The site is the shop's own white room with its tall, black-framed arched windows, seen across
one day: the food and the garden appear through arches, the name is set on the wall the way
the cups print it, and the grounds go from chalk-white to courtyard green to lamp-lit charcoal
by the time you reach the address. That fits a place people choose for its space and stay in
from lunch into the night.
Signature moment: on load, bold "halaman" and light "pertama" slide together into the one
cup-style word while the owner's food photo settles inside its arched window. It uses transform
only, takes about 1.4 s and is readable from the first paint.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Facts, hours, the three areas (review 5), lead with space and kitchen not coffee, Bahasa Indonesia, "kamu" `[MOCKUP]` |
| owner-1.jpg | The only on-site image: the hero window plus four dish crops for the menu |
| photo-2 (reference) | Arched windows: an arch-topped opening, a black rectangular frame below and a transom bar at the spring line |
| photo-1 (reference) | Branch pergola, thatch fringe, rattan bell lamps, orange woven chairs; these become the corner drawings and the `kursi` / `rotan` colours |
| photo-3 (reference) | Cup wordmark: geometric sans, single-storey "a", bold "halaman" with light "pertama" and tracked "KITCHEN & COFFEE"; this sets the type |
| impeccable | Persuade mode; new-work: name the rut, colour as page-scale fields (Full palette), one family with a point of view, the world carries the page; animate: one focal sequence. The concept-seed roll was not run because the launcher writes outside `docs/`. The brief pins the world, so mode-persuade.md was read directly |
| Candidates weighed | Arched-window wall (**chosen**); cup identity system (folded in as type); day-to-night light (folded in as section grounds); site plan of the three areas (rejected: the real layout is unknown); rattan weave texture (rejected: decoration only); book page-turn (the literal name reading, rejected); Instagram grid (rejected: tool costume) |
| Rut named | Dark-overlay full-bleed cafe photo, cream ground, serif display, terracotta accent, three equal icon cards, a quote carousel with stars. Its opposite: a moody black-and-neon night cafe. Neither appears |

## 3. Palette (6 named colours)
Strategy: Full palette. `kapur`, `daun` and `arang` each own whole sections; `kursi` is the one warm accent.
Scene: a local on a phone in daylight, deciding where to spend the afternoon or evening. Light ground.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `kapur` (chalk wall) | #F5F5F1 | Ground: hero, menu, Kata mereka; text on dark fields | `arang` on it 15.2:1 |
| `arang` (charcoal frame) | #1E1F1C | Text, window frames, primary button, the night ground of Kunjungi/Hubungi | `kapur` on it 15.2:1 |
| `daun` (leaf) | #2E5B39 | Full field of "Tiga sudut" (the courtyard); garden window | `kapur` on it 7.2:1; `daun-muda` on it 4.95:1 |
| `daun-muda` (young leaf) | #BCD5AA | Field of "Betah kerja"; courtyard arch fill; secondary text on `daun` and `arang` | `arang` on it 10.4:1; on `arang` 10.4:1 |
| `kursi` (woven chair) | #E0682E | Accent only: open-now dot, WhatsApp button in the night section, the terrace chair, the "Favorit" chip, focus ring | `arang` text on it 4.9:1; on `kapur` 3.1:1, so non-text only; **never on `daun`** (2.3:1) |
| `rotan` (rattan) | #C9A26B | Lamp drawings and hairlines on `arang` only; never text on light grounds | on `arang` 7.0:1 |

Derived: muted text `abu` #5B5D57, an explicit hex, not an alpha. Use it on `kapur` only (6.1:1); on `daun-muda` secondary text stays `arang` (`abu` would be 4.2:1).
Ground sequence: kapur → daun → kapur → daun-muda → kapur → arang. The pink bunting is not used.

## 4. Type
One family, **Urbanist** (variable 100–900, `next/font/google`, subsets latin + latin-ext,
`display: swap`), as both `--font-display` and `--font-body`. Why: the cups print the
wordmark in a geometric sans with a single-storey "a". Urbanist has that "a" by default and a
full weight axis. Tested and rejected: Gantari, Jost, League Spartan and Montserrat Alternates
(double-storey "a"), and Outfit (it matches but is on impeccable's overused list).
Weights: wordmark 800 / 300; headings 700 with the trailing phrase in 300 (the cup pairing,
e.g. "Tiga sudut, <300>satu halaman</300>"); lead 500; body 500 (400 reads too thin);
labels 600, uppercase, letter-spacing 0.16em.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(2rem, 9.6vw, 7rem)`: 37px @390, 112px @1440 | hero wordmark only (one line, about 7.9em wide = 76vw, so it never wraps) |
| `--step-head` | `clamp(1.8rem, 1.2rem + 2.2vw, 3rem)`: 28.8 / 48px | section headings |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.7vw, 1.625rem)`: 22 / 26px | hero line, corner names, work-row titles, review themes |
| `--step-body` | `clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem)`: 17.1 / 18px | running text, menu items, hours table |
| `--step-small` | `0.8125rem`: 13px | "KITCHEN & COFFEE", labels, chip, rating line, footer |

Ratios @390: 1.30 / 1.31 / 1.29 / 1.31. @1440: 2.33 / 1.85 / 1.44 / 1.38. All ≥ 1.25.
Line heights: display 0.95 (one line guaranteed), head 1.1, lead 1.35, body 1.55.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px, 12 columns, 32px gap from 1024px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (32px at 768–1023) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- **Proximity:** a price sits inline right after its dish name (12px gap, same line), never in a
  right-aligned column. Corner labels sit 16px under their arch. The rating line sits ≤12px
  under its heading. The hours table is `max-width: 340px`, so hours stay beside day names. The
  open-now dot sits inline before its text.
- **Wide screens:** each section's 1440 plan is in §7. Every one is two columns, a grid, or a
  visibly narrow centred close.
- **Lists:** menu items use body 600; corner names, work rows and review themes use lead. None
  are at head size.
- **An arch means a window.** Only the hero photo window, the hero garden window and the three
  corner windows are arched. Buttons, cards and section edges are never arched. (The brief's
  `[MOCKUP]` idea of arched section edges is declined: arches everywhere stop reading as windows.)
- **Arch geometry:** `border-radius: 9999px 9999px 0 0`, height/width ≥ 1.35. A black frame runs
  from the spring line (top = width/2) to the bottom, 3px on desktop and 2px on phone; its top
  edge is the transom. A 1.5px `arang` hairline outlines the whole arch on light grounds; on `daun`
  the hairline is `kapur`, so the `arang` terrace arch keeps its edge (`arang` against `daun` is only 2.1:1).
  Arches in a row share one sill: a 2px `arang` line under the hero windows.

## 6. Products on the page
Four real dishes are shown as photos, all cropped from the owner's own `owner-1.jpg`
(1600×2400). Boxes are x, y, w, h in source pixels, every crop 4:3, exported 800px wide, JPEG q≈78, ≤90 KB:
1. **Pizza Pepperoni**: 380, 600, 1000, 750 (slice lifted by the hand, paddle board)
2. **Sushi Maki**: 0, 1280, 800, 600 (fried rolls on crispy greens)
3. **Sweet Potato Fries**: 880, 1140, 720, 540 (with cheese dip and chili sauce)
4. **Cheese Fries** `[MOCKUP name]`: 400, 1580, 880, 660 (cheese sauce, chili, basil)

They appear as a 2×2 grid of photo cards in "Menu andalan". The full uncropped photo is the
hero window. Drinks get no picture: the only drink photos are customer uploads, and nobody
knows what Bonbon Noir looks like, so drinks stay a typeset list.

## 7. Sections
Every section sits inside `<Container>` with `.section` padding. The phone wireframes are 390 and the desktop ones 1440.

**Hero** (`kapur`): recognition plus action. Wordmark h1, KITCHEN & COFFEE, line, today's hours, two buttons, rating, windows.
```
Hero: phone                        Hero: desktop
+----------------------------+     +--------------------------------------------------------------+
|Draf mockup · belum resmi   |     |Draf mockup · belum situs resmi Halaman Pertama               |
|halamanpertama (37px, 1 ln) |     |                            Tiga sudut  Menu  Lokasi  WhatsApp|
|KITCHEN & COFFEE            |     |halamanpertama  (112px, one line, ~890px wide)                |
|Tempat kerja, makan, dan    |     |KITCHEN & COFFEE · CIRACAS, JAKARTA TIMUR                     |
|nongkrong di Ciracas. (lead)|     |Tempat kerja, makan, dan          .-------.                   |
|● Sedang buka · s/d 22.30   |     |nongkrong di Ciracas. (lead)     / owner-1 \      .---.       |
|[Petunjuk Arah] [WhatsApp]  |     |● Sedang buka · tutup 22.30     |  photo    |    / daun\      |
|4,1 di Google · 596 ulasan  |     |[Petunjuk Arah] [WhatsApp]      |===========|   |=leaves=|     |
|   .------------------.     |     |4,1 di Google · 596 ulasan      |           |   |        |     |
|  /  owner-1.jpg       \    |     |  cols 1-5, bottom-aligned       |___________|   |________|     |
| |======================|   |     |__________________________________________________________ sill |
| |  pizza, maki, fries  |   |     |  arches right-aligned: 360x500 photo, 200x400 garden, gap 32 |
| |______________________|   |     +--------------------------------------------------------------+
|____________________ sill __|
+----------------------------+     Phone arch: full width x 480px (h/w 1.37), object-position 50% 60%. No garden window <768.
```

**Tiga sudut, satu halaman** (`daun` field): sells the space through the three areas, each drawn in its own arch.
```
Tiga sudut: phone                  Tiga sudut: desktop
+----------------------------+     +--------------------------------------------------------------+
|Tiga sudut, satu halaman    |     |Tiga sudut, satu halaman (head)   Kerja, makan malam, atau     |
|Pilih sudut favoritmu. body |     |                                  nongkrong sampai larut. lead |
| .--.  Ruang ber-AC (lead)  |     |  .------.           .------.           .------.               |
|/kap.\ Sejuk dan tenang,    |     | / kapur  \         / daun-  \         / arang  \              |
||draw| nyaman bawa anak.    |     || window + |       | muda     |       | roof +   |             |
||____|                      |     || director |       | pergola, |       | orange   |             |
| .--.  Area terbuka         |     || chair    |       | lamp     |       | chair    |             |
|/d-m.\ Hijau, segar; kadang |     ||__________|       |__________|       |__________|             |
||____| ada live music.      |     |Ruang ber-AC        Area terbuka       Teras beratap  (lead)    |
| .--.  Teras beratap        |     |Sejuk dan tenang... Hijau dan segar... Udara segar... (body)   |
|/arg.\ Area merokok...      |     |  3 arches 340x470, gap 90, labels 16px under each arch       |
+----------------------------+     +--------------------------------------------------------------+
Phone: arch 104x144 left, text right, gap 16; rows 24px apart.
```

**Menu andalan** (`kapur`): the kitchen, shown. Four photo cards, then two typeset lists.
```
Menu: phone                        Menu: desktop
+----------------------------+     +--------------------------------------------------------------+
|Menu andalan                |     |Menu andalan (head)   | +--------------+  +--------------+    |
|Menunya makin beragam. body |     |Menunya makin beragam;| | pizza 4:3    |  | sushi 4:3    |    |
|+-----------+ +-----------+ |     |dapurnya yang bikin   | +--------------+  +--------------+    |
||pizza 4:3  | |sushi 4:3  | |     |orang balik untuk     | Pizza Pepperoni Rp 65rb  Sushi Maki  |
|+-----------+ +-----------+ |     |makan malam. (cols1-4)| Tipis, papan kayu    Ala tempura...  |
|Pizza Pepp.  Sushi Maki     |     |                      | +--------------+  +--------------+    |
|Rp 65rb      Ala tempura    |     |                      | | ubi 4:3      |  | cheese 4:3   |    |
|(same for fries x2)         |     |                      |  (cols 5-12, 2x2, gap 32)           |
|Dari bar                    |     |--------------------------------------------------------------|
|Bonbon Noir [Favorit]       |     |Dari bar                          Dari dapur                  |
|Kopi Susu Gula Aren Rp 25rb |     |Bonbon Noir [Favorit]             Bulgogi Rice                |
|Dari dapur                  |     |Kopi Susu Gula Aren  Rp 25rb      Chicken Teriyaki Rice ...   |
|Bulgogi Rice ...            |     |  (two columns, cols 1-6 / 7-12, price inline after name)    |
+----------------------------+     +--------------------------------------------------------------+
```

**Betah kerja di sini** (`daun-muda` field): wins the laptop crowd. Four short rows.
```
Kerja: phone                       Kerja: desktop
+----------------------------+     +--------------------------------------------------------------+
|Betah kerja di sini         |     |Betah kerja di sini   | Banyak colokan     AC yang dingin     |
|Datang pagi, pulang setelah |     |Datang pagi, pulang   | Di banyak meja...  Ruang dalam sejuk..|
|makan malam. (body)         |     |setelah makan malam.  |                                       |
|Banyak colokan (lead)       |     |(cols 1-5)            | Boleh berjam-jam   Buka sampai malam  |
|Di banyak meja... (body)    |     |                      | Kerja atau ngobrol Sen-Kam 22.30,     |
|---- AC yang dingin ...     |     |                      | ...                Jum-Min 23.00      |
|---- Boleh berjam-jam ...   |     |                      | (cols 6-12, 2x2, hairline arang top)  |
|---- Buka sampai malam ...  |     +--------------------------------------------------------------+
+----------------------------+
```

**Kata mereka** (`kapur`): four paraphrased themes, no names, no quote marks, no stars.
```
Ulasan: phone                      Ulasan: desktop
+----------------------------+     +--------------------------------------------------------------+
|Kata mereka                 |     |Kata mereka (head)  4,1 dari 596 ulasan Google (small, 16px)  |
|4,1 dari 596 ulasan Google  |     |Dirangkum dari ulasan Google, bukan kutipan langsung. (small) |
|Dirangkum dari ulasan...    |     |SUASANA (label)                   JENDELA (label)             |
|SUASANA                     |     |Luas, sejuk, hijau, kayak kafe    Jendelanya besar, nuansanya |
|Luas, sejuk, hijau... (lead)|     |di Bandung. (lead)                tropis. (lead)               |
|JENDELA / MAKAN MALAM /     |     |MAKAN MALAM                       PELAYANAN                   |
|PELAYANAN (same, stacked)   |     |...                               ...      (2x2, cols 1-6/7-12)|
+----------------------------+     +--------------------------------------------------------------+
```

**Kunjungi kami** (`arang`, night): get them there. Map, address, week hours, parking.
```
Kunjungi: phone                    Kunjungi: desktop
+----------------------------+     +--------------------------------------------------------------+
|        (one rotan lamp)    |     |                                         (3 rotan lamps hang) |
|Kunjungi kami               |     |+---------------------------+  Kunjungi kami (head)           |
|Jl. Raya PKP No. 2, ... lead|     ||                           |  Jl. Raya PKP No. 2, Kelapa Dua |
|[Petunjuk Arah]             |     ||   Google Maps embed       |  Wetan, Ciracas 13730 (lead)    |
|Senin    08.30–22.30        |     ||   (cols 1-6, 4:3)         |  [Petunjuk Arah]                |
|... ● Jumat 08.30–23.00     |     ||                           |  Senin   08.30–22.30 ... (7 rows|
|Buka setiap hari.           |     ||                           |  ● today, max-width 340)        |
|Parkir mobil terbatas...    |     |+---------------------------+  Parkir mobil terbatas... (body)|
|+------------------------+  |     +--------------------------------------------------------------+
||  map 4:3               |  |
|+------------------------+  |
+----------------------------+
```

**Hubungi kami** (`arang`, continues) plus footer: a narrow, centred close.
```
Hubungi: phone                     Hubungi: desktop
+----------------------------+     +--------------------------------------------------------------+
|Hubungi kami                |     |                    Hubungi kami (head)                       |
|Tanya menu atau pesan tempat|     |     Tanya menu atau pesan tempat untuk rombongan (lead)      |
|untuk rombongan. (body)     |     |   [Chat WhatsApp]  [Telepon 0821-1244-6115]  [Petunjuk Arah] |
|[Chat WhatsApp]  (kursi)    |     |               (centred, max-width 720)                       |
|[Telepon 0821-1244-6115]    |     |--------------------------------------------------------------|
|[Petunjuk Arah]             |     |halamanpertama (small)  Jl. Raya PKP No. 2, Ciracas   Draf    |
|halamanpertama · draf note  |     +--------------------------------------------------------------+
+----------------------------+
```

## 8. Motion
**Signature (hero, on load, once).** An inline head script adds `js-motion` to `<html>` only when
`prefers-reduced-motion: no-preference`. With it, the CSS start state is: `.wm-a` (halaman)
`translateX(-0.10em)`, `.wm-b` (pertama) `translateX(0.22em)`, hero photo `<img>` `scale(1.06)`.
GSAP then tweens the photo to `scale(1)` over 1.4 s, and after 0.1 s tweens both halves to
`x: 0` over 1.1 s, all `expo.out`. Nothing starts hidden: the wordmark reads correctly in its start
state and the photo is the LCP image at full opacity. Reduced motion means no class, so the
final state shows with no motion. Job: focus. The name comes together the way the shop prints it.
**Supporting:** the starter `Reveal` (20px, 0.7 s, `power2.out`, once) on five blocks only: the
corner arches row, the menu photo grid, the work rows, the review grid and the Kunjungi block. No
per-card stagger. Buttons and links: CSS colour/underline change, 150 ms ease-out. No parallax,
no hover zoom on photos, no motion in the night lamps.
**Tokens (`lib/motion.ts`):** `duration.hero = 1.1`; add `duration.heroPhoto = 1.4`; the rest stay at starter values.

## 9. What makes it this shop
- The wordmark is typeset exactly as the cups print it (bold "halaman", light "pertama",
  single-storey "a", tracked KITCHEN & COFFEE), and every section heading carries the same
  bold-then-light pairing.
- The arched window from the shop's own room (arch opening, black frame, transom) is used only
  where you look through at something: the food, the garden, the three corners.
- The three corners are drawn from the place: an arched window with a director's chair and
  marble table, a branch pergola with thatch fringe and rattan bell lamp, and an orange woven
  chair under a roof. They match the three areas a reviewer named.
- The day-to-night grounds (white room, green courtyard, charcoal with rattan lamps at the
  address) echo opening hours that run from 08.30 to 23.00.

## 10. Avoid
- The rut: dark-overlay hero photo, cream ground, serif display, terracotta everywhere, three
  identical icon cards, a testimonial carousel with stars and names, a floating WhatsApp bubble.
- Arches on buttons, cards or section edges. Tombstone proportions: keep h/w ≥ 1.35 and always draw the frame and transom.
- Clip-art tropics: drawings stay at ≤14 elements each, 2px strokes, palette fills only, no
  gradients, no leaf confetti, no pink bunting.
- Leading with coffee or cake, or making "sit outside all evening" the headline (mosquitoes, review 2).
- Inventing an Instagram handle, Wi-Fi or Bonbon Noir ingredients. Quoting reviews or naming reviewers.
- `kursi` text or lines on `daun` (2.3:1); `rotan` text on light grounds.
- Recreating the cup-and-leaf logo mark: we ask the owner for the file.
- A menu carousel or a horizontal scroller that hides dishes.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (checked at 390, 768 and 1440; lists use body/lead, labels use small)
- [x] Max content width set; no detail pinned far from what it describes (1200px; prices inline after names; hours table 340px; labels 16px under arches)
- [x] Every section has a desktop wireframe that uses the width on purpose (two columns, 3-up arches, 2×2 grids, narrow centred close)
- [x] At least 3 products shown (four dishes cropped from the owner's photo: pizza, sushi maki, sweet potato fries, cheese fries)
- [x] Within motion-rules.md (one signature, transform only, section-level reveals, no React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
