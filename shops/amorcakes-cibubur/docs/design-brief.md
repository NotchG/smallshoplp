# Design brief: Amorcakes & Bakery Cibubur

## 1. Concept
**Etalase kue.** The page is the shop as seen from Jl. Lapangan Tembak: the chocolate corrugated
facade with its cream lowercase sign, and through its window the bright chilled cake case, with
each cake on a steel-edged shelf and its own small white price tag. It fits because what Amorcakes
sells is whole decorated cakes from a glass case, open until 22.00, and that case is what people
come for, not a "bakery mood".
**Signature moment:** on load, "Selamat Ulang Tahun" is piped left to right onto the blank white
plaque of the hero Black Forest. Then a round orange sticker, "Tulis nama gratis", presses onto
the glass beside it.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facade brown, cream sign letters, orange stickers and banners, the white-shelf glass case, the Black Forest with its blank plaque, the price tags, the 06.00–22.00 hours, 4.9 from 557 reviews, Bahasa Indonesia and "kamu" |
| impeccable | Persuade mode. The brief pins the world, so there is no concept roll. From 7 candidates (cake case, promo banner, price tag, mika dome and sticker, cake plaque, facade sign, WhatsApp order chat), the case won. Two raises: the banner's full colour commitment (an orange section with dark text) and the plaque as the signature moment. The Persuade rule (the action in its working form) gives the order composer. Light page: the case is brightly lit and people read it on a phone, morning or evening |

## 3. Palette (6 named colours)
| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `cokelat` | #5B3427 | Facade ground: hero, Kata mereka, Hubungi, footer | krim on it 8.86:1 AA. oranye on it 3.82:1, so oranye is for large text only (≥ 24px, or ≥ 19px bold) |
| `kakao` | #33190F | Ink on every light ground, text on oranye, dark button fill | on putih 16.3, kaca 14.4, krim 13.5, oranye 5.84:1, all AA |
| `krim` | #F6E8D5 | Sign letters: all text on cokelat. Ground of the Roti section | on cokelat 8.86:1 AA. kakao on krim 13.5:1 |
| `oranye` | #EE7B30 | Stickers, primary button fill, ground of the Cara pesan section | kakao on oranye 5.84:1 AA. **Never a text colour on light grounds** (2.8:1) |
| `kaca` | #EDF1F2 | Inside of the cake case: hero window, Kue section, composer preview | kakao on it 14.35:1 |
| `putih` | #FFFFFF | Shelf tops, price tags, Kunjungi ground | kakao on it 16.3:1 |

Illustration only, never text: steel #9AA3A9 (shelf edges, LED strip), corrugation stripe #64392B
(krim on it 8.06:1, still AA), cherry #C8202F, whipped cream #FFF8EE, green tea #B9D59B,
red glaze #E5483B, chocolate #3B2219 and #6A3B2A, silver cake board #C9CED1.
Focus ring: 3px kakao on light grounds, krim on cokelat, kakao on oranye.

## 4. Type
Two families via `next/font/google`, latin subset, `display: swap`:
- **Fredoka** (variable: wght 300–700, wdth 75–125) is for the name lockup (700, wdth 100,
  lowercase like the sign), section headings (700, wdth 82, sentence case, tracking -0.01em,
  the banner voice), prices, sticker text and the plaque writing (500, kakao, like piped chocolate).
  If the wdth axis doesn't load, use wdth 100 with tracking -0.02em.
- **Nunito** (400 and 700) is for body copy, buttons, labels and form controls.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(4rem, 2.2rem + 7.4vw, 7rem)` (64→112px) | hero "amor / cakes" only |
| `--step-head` | `clamp(2rem, 1.5rem + 2.4vw, 3.25rem)` (32→52px) | section h2, "& bakery" in the hero |
| `--step-lead` | `clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)` (20→24px) | hero line, product names, step titles, paraphrased praise, contact values |
| `--step-body` | `clamp(1rem, 0.97rem + 0.15vw, 1.125rem)` (16→18px) | running text, flavour lists, prices, buttons, chips |
| `--step-small` | `clamp(0.75rem, 0.71rem + 0.15vw, 0.875rem)` (12→13.5px) | tag labels ("Deluxe 16"), captions, the draft note |

Ratios checked at 390, 768 and 1440px: every step is ≥ 1.27× the one below it.
Line heights: display 1.05 (two forced lines, each one word), head 1.1, lead 1.35, body 1.55,
small 1.4. Measure is max 60ch for body and 32ch for the hero line.

## 5. Layout guardrails
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (≥ 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px. `.section-tight` (Kata mereka) is 48px / 80px |

- **Proximity:** each cake's price tag hangs on the shelf edge directly under that cake (≤ 16px).
  A bread price sits inline right after the item name (8px gap), never in a right-hand column.
  The "Tulis nama gratis" sticker overlaps the plaque's top-right corner. In the composer, the
  size and price label sits under the preview cake. In the hours strip, the "Hari ini" label is
  inside today's pill.
- **Wide screens:** hero 5/7 columns, Kue a 4-across shelf, Roti 5/7, Cara pesan 6/6, Kata mereka
  5/7, Kunjungi 5/7 (text and map), Hubungi 4/8. Nothing is a single centred column at 1440.
- **Lists:** product names at `--step-lead` and flavours or prices at `--step-body`. Nothing in a
  list exceeds the section h2.
- Corner language: windows and tags 20px / 8px radius, buttons and chips fully rounded (pills like
  the stickers). Shelf edges are a 6px steel bar with a 1px white highlight line on top.

## 6. Products on the page
There are no owner photos, so products are **flat SVG illustrations** of these specific items (9 in total):
- **Cakes (4, Kue section, at about 240px):** Black Forest (chocolate shavings, 5 cream rosettes,
  cherries with stems, blank white plaque); Chocolate Drip (white side, dark drip, cherries and a
  chocolate disc); Green Tea (pale green combed sides, cherries, chocolate fan); Strawberry Cream
  (red glaze dripping over white cream, inside a clear mika dome drawn as a translucent outline).
  Each one stands on a silver board on the shelf, with a tag below it.
- **Bread (4, Roti list, at 72px desktop / 56px phone):** Roti Manis (glazed round bun),
  Roti Tawar Mini (small loaf), Doughnut (glazed ring), Bolu gulung (roll slice in a clear tray
  with the round orange sticker).
- **Boxed bolu (1, Roti section, left column, about 280px):** two stacked boxes labelled
  "Boluamor" and "Snow Bolu".
- The hero and the composer reuse the cake illustrations at a larger size.

Style: front view from slightly above (top ellipse about 22% of the height), light from the top
left, 2–3 flat tones per item, no outlines (cherry stems are the only strokes), no gradients, the
same viewBox per family (cakes 240×200, bread 96×96). Every illustration is `role="img"` with an
Indonesian `aria-label` and `data-mockup`, because it is a drawing and not their product photo.

## 7. Sections
**Hero.** Name, what they sell, today's hours, and the two actions on the facade, with the case
window beside it. Content: heart mark (logo placeholder), "amor / cakes", "& bakery", "Cibubur",
the hero line, "Buka hari ini 06.00–22.00", [Pesan via WhatsApp] (oranye) and [Petunjuk arah]
(krim outline). Window: LED strip, Black Forest with plaque, sticker, tag.
```
Hero: phone (390)        Hero: desktop (1440), cols 5/7, ground cokelat + corrugation
+--------------------+   +----------------------------------------------------------------+
|draft banner        |   | draft banner                                                   |
|♡                   |   |  ♡                         +----------------------------------+ |
|amor                |   |  amor                      | ==== LED strip ================= | |
|cakes               |   |  cakes                     |        [Selamat    ](O Tulis     | |
|& bakery            |   |  & bakery                  |        [Ulang Tahun] nama gratis)| |
|Cibubur             |   |  Cibubur                   |     .-~~~~~~~~~~~~~~~~~~~~-.     | |
|Kue ulang tahun,    |   |                            |     |  Black Forest        |     | |
|bolu dan roti manis…|   |  Kue ulang tahun, bolu dan |     '-.__________________.-'     | |
|● Buka hari ini     |   |  roti manis, buka dari pagi| ===== steel shelf edge ========= | |
|  06.00–22.00       |   |  sampai malam.             |     [tag: Black Forest           | |
|[Pesan via WhatsApp]|   |  ● Buka hari ini 06–22     |      12·16·20 cm · mulai Rp 49rb]| |
|[Petunjuk arah     ]|   |  [Pesan via WhatsApp]      |                                  | |
|+------------------+|   |  [Petunjuk arah]           +----------------------------------+ |
||(O)  [plaque]     ||   +----------------------------------------------------------------+
||    /cake\  [tag] ||
|+------------------+|   Phone: buttons full width, stacked; the window (about 280px tall)
+--------------------+   starts within the first screen at 390×844. Desktop: the two
                         buttons sit side by side (about 420px) under the hours.
```

**Kue ulang tahun.** Show the cakes the way the case does. h2, intro line, 4 cakes on a shelf
with tags, then "Juga ada Tiramisu dan roll cake." and a link "Pesan kue" to #pesan. Ground kaca.
```
Kue: phone               Kue: desktop
+--------------------+   +----------------------------------------------------------------+
|Kue ulang tahun     |   | Kue ulang tahun              Siap bawa hari ini juga. Ukuran   |
|Siap bawa hari ini..|   |                              12, 16, 20 cm, nama ditulis gratis.|
| [cake]   [cake]    |   |  [Black Forest] [Choc Drip]  [Green Tea]  [Strawberry Cream]   |
|====shelf edge======|   | ======================= steel shelf edge ===================== |
| [tag]    [tag]     |   |  [tag]          [tag]        [tag]        [tag]                |
| [cake]   [cake]    |   | Juga ada Tiramisu dan roll cake.   Pesan kue ->                |
|====shelf edge======|   +----------------------------------------------------------------+
| [tag]    [tag]     |   Tag: putih, 8px radius, small brown heart tile at left;
|Juga ada Tiramisu…  |   name (lead), size line (small), price (body bold).
+--------------------+
```

**Roti & bolu harian.** Everyday bread for the 06.00 crowd. h2, "Roti hangat dari jam 6 pagi.",
the list of 4, the boxed-bolu illustration with caption, and the line about office, school and
arisan orders. Ground krim.
```
Roti: phone              Roti: desktop, cols 5/7
+--------------------+   +----------------------------------------------------------------+
|Roti & bolu harian  |   | Roti & bolu harian          | [o] Roti Manis  mulai Rp 8rb     |
|Roti hangat dari    |   | Roti hangat dari jam 6 pagi.|     cokelat, keju, srikaya, ...  |
|jam 6 pagi.         |   |                             | [o] Roti Tawar Mini  Rp 12rb     |
|[o] Roti Manis 8rb  |   |   [Boluamor / Snow Bolu     | [o] Doughnut  Rp 7rb             |
|    cokelat, keju…  |   |    boxes illustration]      |     banyak varian                |
|[o] Roti Tawar Mini |   |   Bolu dalam kotak…         | [o] Bolu  Rp 45rb                |
|[o] Doughnut        |   | Pesan untuk kantor, sekolah |     gulung cokelat, pandan, keju |
|[o] Bolu            |   | atau arisan lewat WhatsApp. |                                  |
|[boxes] caption     |   +----------------------------------------------------------------+
|Pesan untuk kantor… |
+--------------------+
```

**Cara pesan kue (#pesan).** The working action: compose a cake order and send it on WhatsApp.
The steps are radio chips: 1 Pilih ukuran (12 / 16 / 20 cm), 2 Pilih rasa (4 flavours),
3 Tulis nama (text input, 20 characters max). Below them is [Kirim pesanan via WhatsApp]
(kakao fill, krim text) and a summary line. The preview is the cake on its shelf with the live
plaque, and the size and price label under it. Ground oranye.
```
Pesan: phone             Pesan: desktop, cols 6/6
+--------------------+   +----------------------------------------------------------------+
|Cara pesan kue      |   | Cara pesan kue               | +------------------------------+|
|Pilih, tulis nama,  |   | Pilih, tulis nama, kirim.    | | ==== LED strip ============= ||
|kirim lewat WA.     |   | (♡1) Pilih ukuran            | |      [Selamat Ulang Tahun ]  ||
|(♡1) Pilih ukuran   |   |  (12 cm) (16 cm) (20 cm)     | |      [<nama>             ]  ||
| (12)(16)(20)       |   | (♡2) Pilih rasa              | |    .-~~~~~~~~~~~~~~~~-.     ||
|(♡2) Pilih rasa     |   |  (Black Forest)(Choc Drip)   | |    '-.______________.-'     ||
| (BF)(Drip)         |   |  (Green Tea)(Strawberry Cr.) | | ===== shelf edge =========== ||
| (GT)(Straw)        |   | (♡3) Tulis nama [________]   | |   16 cm · mulai Rp 130rb    ||
|+------------------+|   | [Kirim pesanan via WhatsApp] | +------------------------------+|
||preview + plaque  ||   | Pesanan: 16 cm, Black Forest…|                                 |
|+------------------+|   +----------------------------------------------------------------+
|(♡3) Tulis nama [__]|   Phone order puts the preview between steps 2 and 3, so the
|[Kirim via WhatsApp]|   plaque sits right above the name input.
|Pesanan: …          |
+--------------------+
```

**Kata mereka.** Short proof. h2, a rating tag "4,9 dari 5 · 557 ulasan di Google", and two
paraphrased lines (promos and discounts; friendly service). No names, no quotation marks.
Ground cokelat, `.section-tight`.
```
Kata: phone              Kata: desktop, cols 5/7
+--------------------+   +----------------------------------------------------------------+
|Kata mereka         |   | Kata mereka                 | ♡ Promonya banyak, diskonnya     |
|[4,9 dari 5 ·       |   | [4,9 dari 5 · 557 ulasan    |   sering.                        |
| 557 ulasan Google] |   |  di Google]                 | ♡ Pelayanannya ramah.            |
|♡ promo & diskon…   |   |                             |                                  |
|♡ pelayanan ramah…  |   +----------------------------------------------------------------+
+--------------------+
```

**Kunjungi kami.** Where and when. h2, address, a 7-day strip (Sen … Min, today's pill in oranye
with "Hari ini" inside), "Setiap hari 06.00–22.00", [Petunjuk arah] and [Buka di Google Maps],
plus the map embed. Ground putih.
```
Kunjungi: phone          Kunjungi: desktop, cols 5/7
+--------------------+   +----------------------------------------------------------------+
|Kunjungi kami       |   | Kunjungi kami                | +------------------------------+|
|Jl. Lapangan Tembak…|   | Jl. Lapangan Tembak / Jl.    | |                              ||
|(Sen)(Sel)(Rab)(Kam)|   | Belimbing No. 6, Cibubur …   | |        map embed             ||
|(Jum)(Sab)(Min)     |   | (Sen)(Sel)(Rab)(Kam)(Jum)…   | |        420px tall            ||
|Setiap hari 06–22   |   | Setiap hari 06.00–22.00      | |                              ||
|[Petunjuk arah]     |   | [Petunjuk arah] [Google Maps]| +------------------------------+|
|[map 300px]         |   +----------------------------------------------------------------+
+--------------------+
```

**Hubungi kami and footer.** Every way to reach them. h2, the line "Promo terbaru biasanya
diumumkan di Instagram.", then 5 link rows (small label above a lead value): WhatsApp, Telepon,
Instagram @boluamor, Facebook boluamor, TikTok @amorcakes. The footer has the heart mark,
"Amorcakes & Bakery Cibubur · Member of Amor Group", the draft note and the `noindex` reminder.
Ground cokelat.
```
Hubungi: phone           Hubungi: desktop, cols 4/8
+--------------------+   +----------------------------------------------------------------+
|Hubungi kami        |   | Hubungi kami      | WhatsApp          | Telepon                |
|Promo terbaru…      |   | Promo terbaru     | 0896-5499-3538    | 0896-5499-3538         |
|WhatsApp            |   | biasanya di       | Instagram         | Facebook               |
| 0896-5499-3538     |   | Instagram.        | @boluamor         | boluamor               |
|Telepon / Instagram |   |                   | TikTok @amorcakes |                        |
|Facebook / TikTok   |   |----------------------------------------------------------------|
|---- footer ----    |   | ♡ Amorcakes & Bakery Cibubur · Member of Amor Group · draf     |
+--------------------+   +----------------------------------------------------------------+
```

## 8. Motion
**Signature: plaque piping (hero).** The plaque text is real HTML laid over the SVG plaque, with
`overflow: hidden` on the plaque. A plaque-coloured cover (#FFF8EE) with a small cream piping tip
on its left edge slides off to the right (`x: 0 → 101%`). Start 0.3s after load, 1.2s, `power1.inOut`
(a steady piping hand), then the tip fades out (opacity, 0.2s). At 1.5s the sticker lands:
opacity 0→1, scale 1.12→1, rotate -14°→-6°, 0.35s, `expo.out`. The whole moment is ≤ 1.9s and
runs once. If the plaque is below the fold at load (short phones), it plays when it enters
(ScrollTrigger `top 85%`, once). Headline and buttons never animate. **Reduced motion or no JS:**
writing and sticker are shown in their final state.
**Supporting:** the starter `Reveal` runs once per section content block for Kue, Roti, Pesan,
Kata and Kunjungi (20px, 0.6s, `power2.out`), not per card. Composer responses: size changes scale
the preview cake (0.88 / 1 / 1.1, 250ms ease-out CSS transform), flavour changes crossfade
(opacity, 200ms), and the name updates the plaque instantly. Buttons and chips get press
`scale(0.97)` at 150ms, and hover is a colour change with no transition.
Motion tokens: `duration = { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.2 }`,
`ease.piping = "power1.inOut"`, `ease.sticker = "expo.out"`, `distance.reveal = 20`.

## 9. What makes it this shop
1. The hero Black Forest is the cake from their own case, with the blank white plaque photographed
   on it. The plaque getting "Selamat Ulang Tahun" is the birthday-cake promise, and the order
   composer writes the visitor's own name on the same plaque.
2. White price tags with a small brown heart tile hang on the shelf edges, like the case's tags
   ("Deluxe 16", "Deluxe 12 Cream (Mika)"). Round orange stickers mark offers and services, like
   the ones on their roll-cake trays.
3. "amor / cakes / & bakery" is set lowercase, rounded and stacked, cream on corrugated chocolate
   brown, as on the facade sign. The headings use the bold condensed voice of their banners.

## 10. Avoid
- The category ruts: a pastel-pink cupcake site with script fonts and sprinkles; the artisanal
  cream, serif and terracotta "crafted with love" look; and a centred headline over a row of
  equal drop-shadow cards. Cakes stand on shelves with tags instead.
- Painting the facade as a picture. The brown is the ground, and the parts on it are real text and
  buttons. The corrugation stays subtle (2 tones, 10px/4px stripes) and must never cause moiré
  or hurt contrast.
- Orange text on light grounds, or orange everywhere. Orange is a fill (stickers, primary button,
  one section).
- The heart motif in more than 3 places (logo placeholder, composer step markers, praise bullets).
- Reusing the expired Jan 2022 promos ("Buy 1 Get 1", "Discount 20%"), drawing the costumed
  characters or mascot, using photo-1/2/3 on the site, inventing stars or awards, quoting reviews
  verbatim, or naming reviewers.
- Recreating their logo artwork. The heart mark is a plain outline placeholder until the owner
  sends the file.
- Illustration drift: mixed viewpoints, outlines, gradients, or cakes that look generic rather
  than like the photographed ones.
- Reading as an Amor Group corporate site. This page is the Cibubur outlet.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart (checked at 390/768/1440); no list or label larger than its section heading
- [x] Max content width set (1200px); tags hang under their cakes, prices sit inline after names, the sticker sits on the plaque
- [x] Every section has a desktop wireframe that uses the width on purpose (5/7, 4-across, 6/6, 4/8)
- [x] At least 3 products shown: 9 illustrated items (4 cakes, 4 bread, boxed bolu)
- [x] Within motion-rules.md: one signature moment, section-level reveals, transform and opacity only, reduced motion means none
- [x] Brief is decisions, not essays (about 4 pages with wireframes)
