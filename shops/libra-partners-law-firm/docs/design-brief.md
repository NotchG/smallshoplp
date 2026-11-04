# Design brief: LIBRA & Partners Law Firm

Site language: Bahasa Indonesia throughout (`lang="id"`). No owner photos, so type, colour, one small
drawn mark and the map carry the page. Code-of-ethics limits (PRD §Requirements R1–R8) bind every line of copy.

## 1. Concept
A calm letter back: the page is set like the firm's own signboard and *kop surat* (white plate, navy
Clarendon capitals, a thick-and-thin double rule, a "Hormat kami," sign-off), because the people who need
LIBRA usually arrive holding a frightening letter or message from a lender.
Signature moment: on load, the line under the kop decodes the name. At first only L, I, B, R, A stand on the
line over gold bars; then the rest of "Lembaga Hukum Indonesia Bebas Riba" fills in around them, word by
word, in about 1.3 s.

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json, photos | Facts: name, "Advokat / Konsultan Hukum", address, phone, 24 h listing, 5,0 from 16 reviews, five reviews. From the two customer photos (reference only): white plate with navy serif caps, a round gold-and-black emblem whose ring spells LIBRA, blue-grey trim bands, dark green folding shutters. From the tone section: the ethics limits and the warm, patient voice. |
| impeccable | Persuade mode. Direction from new-work §3. Seven candidates from the visitor's world: signboard, kop surat, leasing instalment card, rubber stamp and materai, Friday mosque bulletin, ruko shutter, the Indonesian acronym habit. Kept kop surat + acronym as one world, with shutter green as the single colour field. Declined: instalment card (it is the visitor's worry, not relief), stamp (would redraw the emblem and look like a forged document), bulletin (overdoes the religious register). Also: colour strategy, faces chosen off the default list, motion thesis (one authored moment, CSS keyframes for a bounded sequence). The launcher, `concept-seed` and the decision page were not run, because they write outside `docs/`. |
| motion-rules.md | One signature moment; section reveals only; transform and opacity; React Bits: none. |

The category rut this design refuses: navy fields with gold foil, marble/columns/gavel stock photos,
Trajan or Cinzel capitals, "Konsultasi Gratis!" badges. Its predictable opposite, sleek legal-tech SaaS, is out too.

## 3. Palette (6 named colours)
Strategy: the signboard's white and navy across the page, **one** full-bleed field of shutter green, gold under 3%.
Light ground, chosen for the scene: a resident reading on a mid-range Android phone in a bright front room or on the street.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `papan` | `#F4F6F8` | Page ground (the signboard plate) and the text on green | tinta on papan 14.6:1 · papan on rolling 11.5:1 |
| `tinta` | `#13223F` | All text on light grounds, primary buttons, the double rule, the scales mark | 14.6:1 on papan, 12.9:1 on kabut |
| `lis` | `#4A5A70` | Secondary text, the non-initial letters of the decode line, primary-button hover | 6.5:1 on papan, 5.7:1 on kabut, papan on lis 6.5:1 |
| `kabut` | `#E3E9EE` | Quiet ground for "Kami bisa membantu" and the map frame | tinta 12.9:1, lis 5.7:1 |
| `rolling` | `#0F3B32` | The drenched field for "Kalau Anda ditagih debt collector" | papan text 11.5:1, emas 5.1:1 |
| `emas` | `#C9A227` | Marks only: the bars under L-I-B-R-A, the scales pivot, the step numerals on green, the focus ring on green | 5.1:1 on rolling, 6.5:1 on tinta. **2.2:1 on papan: never text or focus ring on light grounds** |

Focus ring: 3 px `tinta` outline, 3 px offset on light grounds; 3 px `emas` on rolling.

## 4. Type
**Besley** (Clarendon revival; 400, 600 and 700) for the name, headings and the decode line. Clarendon is the face
of public notices and old enamel signs: sturdy capitals like the plate, warm rather than marble-cold.
**Atkinson Hyperlegible Next** (400 and 700; fallback `Atkinson_Hyperlegible` if `next/font` lacks it) for
everything else. It was drawn for legibility, which suits stressed readers on cheap phones. Both via `next/font/google`, `latin`, `display: swap`.

| Variable | Value (390 → 1440) | Used for |
|---|---|---|
| `--step-display` | `clamp(4.5rem, 2.83rem + 6.86vw, 9rem)` (72 → 144px) | "LIBRA" in the kop only. Besley 700, line-height 0.9 (always one line) |
| `--step-head` | `clamp(1.875rem, 1.46rem + 1.71vw, 3rem)` (30 → 48px) | Section headings (Besley 600, sentence case, lh 1.12); the hero mission line |
| `--step-lead` | `clamp(1.375rem, 1.28rem + 0.38vw, 1.625rem)` (22 → 26px) | "& PARTNERS LAW FIRM" (caps, +0.06em), the decode line, h3 group titles, lead sentences, the phone number (lh 1.3) |
| `--step-body` | `clamp(1.094rem, 1.06rem + 0.14vw, 1.188rem)` (17.5 → 19px) | Running text, list items, buttons (lh 1.55) |
| `--step-small` | `clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)` (14 → 15px) | "ADVOKAT / KONSULTAN HUKUM" (caps, +0.12em), hours line, disclaimers, banner (lh 1.4) |

Ratios at both ends are at least 1.25 (body/small 1.25 → 1.27; lead/body 1.26 → 1.37; head/lead 1.36 → 1.85).
Capitals appear only in the kop and the sign-off. Prose measure is at most 62ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- Grid: 12 columns from 1024px, gap 24px (phone) / 48px (desktop). At 768px sections stack, but the practice
  items and review themes stay in 2 columns.
- **Proximity:** the rating sits directly under the "Dari ulasan Google" heading (≤16px). Hours sit under the
  buttons they qualify. Each practice line sits under its own title (≤8px). The kop contact block starts at
  column 9; it is not pushed to the far right edge.
- **Wide screens:** every section is an asymmetric two-column split (4/8, 5/7 or 7/5) or a 4-up row (reviews).
  The two double rules span the full container on purpose. No centred single column floats in 1440px.
- **Lists:** practice titles and steps use `--step-body` (bold first clause). Group titles use `--step-lead`.
  Nothing in a list reaches `--step-head`.
- Buttons are 52px tall with a 4px radius (a plate's corner). Primary: `tinta` fill, `papan` text. Secondary:
  2px `tinta` border. On green: `papan` fill with `tinta` text.
- The double rule (`<hr>`): 4px `tinta` over a 3px gap over 1px `tinta` (phone 3 / 2 / 1). Used only twice: under the kop and above the sign-off.

## 6. Products on the page
Not a food or product shop. It is a law office, so the 3-products rule doesn't apply, and photos of
"legal services" don't exist. What stands in for products: **six practice areas** `[MOCKUP]`, each a named
item with one plain line, in two groups. *Utang dan pembiayaan* comes first (kredit bermasalah & utang-piutang,
sengketa leasing kendaraan, pinjol ilegal, kontrak bebas riba). *Perkara lain* follows (keluarga; pidana dan perdata).
There are no icons and no illustrations: gavel or handshake tiles would be generic and edge toward attention-seeking advertising (Pasal 8).
The only drawn object is the small scales mark: an inline SVG under 64px with a post, beam and two pans in `tinta` and an `emas` pivot dot.
It has no ring, no laurel and no ring text, so it does not recreate the emblem.

## 7. Sections
Grounds: 1–2 papan · 3 kabut · 4 rolling (full bleed) · 5–7 papan. Section copy is in the PRD.

```
1 Kop (hero): phone (390)    1 Kop (hero): desktop (1440)
+------------------------+   +---------------------------------------------------------------------+
| Draf mockup … (banner) |   | Draf mockup untuk LIBRA & Partners Law Firm … (banner, full width)  |
| [⚖ 40px]               |   | [⚖56] LIBRA            (display 144)          Jl. Duren No. 31      |
| LIBRA       (display)  |   |       & PARTNERS LAW FIRM          (lead)     Semper Barat, Cilincing|
| & PARTNERS LAW FIRM    |   |       ADVOKAT / KONSULTAN HUKUM   (small)     Jakarta Utara 14130   |
| ADVOKAT / KONSULTAN    |   |                                   cols 1-8    0811-8421-184  c 9-12 |
| HUKUM          (small) |   | =================================================================== |
| ====================== |   | ------------------------------------------------------------------- |
| ---------------------- |   | L̲embaga Hukum I̲ndonesia B̲ebas R̲iba̲      (lead, the signature line)  |
| L̲embaga Hukum I̲ndonesia|   | Mendampingi Anda menghadapi            [ Telepon 0811-8421-184    ] |
| B̲ebas R̲iba̲      (lead) |   | masalah utang dan riba,                [ WhatsApp ][ Petunjuk Arah ]|
| Mendampingi Anda       |   | lewat jalur hukum.  (head, cols 1-7)   Buka setiap hari, 24 jam     |
| menghadapi masalah     |   |                                        (small, cols 9-12)           |
| utang dan riba, lewat  |   +---------------------------------------------------------------------+
| jalur hukum.   (head)  |
| [Telepon ] [WhatsApp ] |   Phone: Telepon button ends near y≈600, inside the first screen.
| [   Petunjuk Arah    ] |
| Buka setiap hari, 24 jam|
+------------------------+

2 Arti nama: phone           2 Arti nama: desktop
+------------------------+   +---------------------------------------------------------------------+
| Arti nama LIBRA (head) |   | Arti nama LIBRA        LIBRA adalah singkatan dari Lembaga Hukum    |
| LIBRA adalah singkatan |   | (head, cols 1-4)       Indonesia Bebas Riba, … (lead, cols 6-11)    |
| dari … (lead)          |   |                        Nama itu juga arah kerja kami: … (body)      |
| Nama itu juga … (body) |   |                        Bagi Anda yang ingin … syariah. (body)       |
| Bagi Anda … (body)     |   +---------------------------------------------------------------------+
+------------------------+

3 Kami bisa membantu: phone  3 Kami bisa membantu: desktop (kabut ground)
+------------------------+   +---------------------------------------------------------------------+
| Kami bisa membantu     |   | Kami bisa membantu     Utang dan pembiayaan (lead, h3)              |
| intro (body)           |   | (head, cols 1-4)       Kredit bermasalah &      Sengketa leasing    |
| Utang dan pembiayaan   |   | intro, 3 lines (body)  utang-piutang (b bold)   kendaraan           |
| Kredit bermasalah …    |   |                        one line (body, lis)     one line            |
|  one line (lis)        |   | +-------------------+  Pinjol ilegal            Kontrak bebas riba  |
| Sengketa leasing …     |   | | Biaya dijelaskan  |  one line                 one line            |
| Pinjol ilegal …        |   | | dan disepakati …  |  Perkara lain (lead, h3)                      |
| Kontrak bebas riba …   |   | +-------------------+  Keluarga                 Pidana dan perdata  |
| Perkara lain (lead)    |   |   (small, 1px tinta)   one line                 one line  cols 6-12 |
| Keluarga · Pidana …    |   +---------------------------------------------------------------------+
| [Biaya … tertulis]     |
+------------------------+

4 Ditagih: phone (rolling)   4 Ditagih: desktop (rolling green, full bleed)
+========================+   +=====================================================================+
| Kalau Anda ditagih     |   | Kalau Anda ditagih          1  Tetap tenang dan bicara dengan sopan.|
| debt collector  (head) |   | debt collector (head, 1-5)  2  Simpan semua dokumen: perjanjian     |
| Langkah pertama: (body)|   | Langkah pertama yang bisa      kredit, bukti bayar, pesan tagihan.  |
| 1 Tetap tenang …       |   | Anda lakukan. (body)        3  Jangan serahkan kendaraan tanpa      |
| 2 Simpan semua …       |   | [ Telepon 0811-8421-184 ]      putusan pengadilan atau surat sah.   |
| 3 Jangan serahkan …    |   | Informasi umum, bukan       4  Hubungi kami untuk berkonsultasi.   |
| 4 Hubungi kami …       |   | jaminan hasil. (small)      (numerals lead emas, text body; 7-12) |
| [ Telepon ] (papan)    |   +=====================================================================+
| Informasi umum… (small)|
+========================+

5 Dari ulasan: phone         5 Dari ulasan: desktop
+------------------------+   +---------------------------------------------------------------------+
| Dari ulasan Google     |   | Dari ulasan Google (head)                                           |
| 5,0 dari 16 ulasan     |   | 5,0 dari 16 ulasan Google · Baca di Google Maps (lead + link)       |
| Google (lead) + link   |   | ▬               ▬                ▬                 ▬  (emas bars)   |
| ▬ Pelayanan yang baik  |   | Pelayanan yang  Ruang kantornya  Disarankan untuk  Seorang pengulas |
|   dan memuaskan …      |   | baik dan …      sejuk dan …      warga sekitar …   menulis …        |
| ▬ Ruang kantornya …    |   | (body, 3 cols each)                                                 |
| ▬ Disarankan …         |   | Diringkas dari ulasan Google, bukan kutipan langsung. (small)       |
| ▬ Seorang pengulas …   |   +---------------------------------------------------------------------+
+------------------------+

6 Kunjungi kami: phone       6 Kunjungi kami: desktop
+------------------------+   +---------------------------------------------------------------------+
| Kunjungi kami (head)   |   | +-------------------------------------+  Kunjungi kami (head)       |
| Jl. Duren No. 31, …    |   | |                                     |  Jl. Duren No. 31           |
| Cari papan nama putih  |   | |  Google Maps embed, 4:3, cols 1-7   |  Semper Barat, Cilincing    |
| LIBRA di atas pintu    |   | |  (kabut frame while loading)        |  Jakarta Utara 14130 (body) |
| hijau. (body)          |   | |                                     |  Cari papan nama putih …    |
| Buka setiap hari, 24 j.|   | |                                     |  Buka setiap hari, 24 jam   |
| Sebaiknya telepon dulu |   | |                                     |  Sebaiknya telepon dulu …   |
| [ map 4:3, full width ]|   | +-------------------------------------+  [ Petunjuk Arah ] cols 9-12|
| [  Petunjuk Arah     ] |   +---------------------------------------------------------------------+
+------------------------+

7 Hubungi kami: phone        7 Hubungi kami + sign-off: desktop
+------------------------+   +---------------------------------------------------------------------+
| ====================== |   | =================================================================== |
| ---------------------- |   | ------------------------------------------------------------------- |
| Hubungi kami (head)    |   | Hubungi kami (head, 1-6)                Hormat kami,  (body, 8-12)  |
| Telepon atau datang …  |   | Telepon atau datang langsung. …         [⚖ 40]                      |
| 0811-8421-184 (lead)   |   | 0811-8421-184 (lead, tel link)          LIBRA & PARTNERS LAW FIRM   |
| [Telepon ] [WhatsApp ] |   | [Telepon] [WhatsApp] [Petunjuk Arah]    ADVOKAT / KONSULTAN HUKUM   |
| [   Petunjuk Arah    ] |   |                                         Jl. Duren No. 31, Semper B. |
| Hormat kami,           |   | Informasi di situs ini bersifat umum … · Draf mockup  (small)       |
| [⚖] LIBRA & PARTNERS … |   +---------------------------------------------------------------------+
| ADVOKAT / … (small)    |
| disclaimer (small)     |
+------------------------+
```

## 8. Motion
**Signature: the decode line (hero, on load).** Each word of "Lembaga Hukum Indonesia Bebas Riba" is split
into *initials* (L, I, B, R and the final a of Riba: Besley 700, `tinta`, with a 3px `emas` underline at 5px
offset) and *rest* letters (Besley 400, `lis`). The initials never move. The rest spans run a CSS keyframe from
opacity 0 / translateX(-6px) to 1 / 0, 0.5s each, `cubic-bezier(0.16, 1, 0.3, 1)`. Delays are
`0.25s + 0.1s × word index` (Hukum fades in whole as word 2). The sequence ends at about 1.25s.
The H1, mission and buttons never wait: they are static from first paint.
- Pure CSS. No JS, so no hydration flash, and it works with JS off.
- The animation rules live **inside** `@media (prefers-reduced-motion: no-preference)`, because the starter's
  global reduced-motion rule shortens durations but not delays.
- Reduced motion: the full phrase is static and complete.
- Screen readers get the phrase once, as plain text (TRD).

**Supporting:** the starter `<Reveal>` once per section, sections 2–6, on the content block (not the heading
alone): opacity plus 20px rise, 0.6s, `power2.out`, at `top 85%`. Section 7 and the footer don't animate.
Buttons: background colour 150ms ease-out on hover; `translateY(1px)` on press, 100ms. No other motion.
Lenis on starter defaults.
Motion tokens (`lib/motion.ts`): `duration.reveal = 0.6`, `duration.press = 0.15`. Keep `hero = 1.25` for
reference only (the hero sequence is CSS). `distance.reveal = 20`.

## 9. What makes it this shop
1. **The decoded name.** Only LIBRA's own ring text can do this: L-I-B-R-A unfolding into "Lembaga Hukum
   Indonesia Bebas Riba", the mission hidden in the name.
2. **Shutter green where it matters.** The one colour field is the dark green of their own folding shutters,
   spent on the debt-collector steps, the moment a worried visitor most needs calm instructions.
   The wayfinding line ("Cari papan nama putih LIBRA di atas pintu hijau") makes the same link on the ground.
3. **Kop to sign-off.** The page opens with their signboard set as a letterhead and closes with "Hormat kami,":
   a letter from the firm, answering the letters its visitors receive.

## 10. Avoid
- The law-firm template: gavels, columns, marble, handshake stock, Trajan or Cinzel capitals, navy fields with gold
  everywhere, a big "5.0 ★★★★★", counters, "Konsultasi Gratis!" badges, a sticky chat bubble.
- Ethics breaches (PRD R1–R8): any guarantee, superlative, case result, client or staff name, or promise that debts disappear.
- Reviews dressed as quotes: no quotation marks, italics, names, avatars or carousel. They are paraphrased themes.
- Redrawing the round emblem (ring text, laurel, shield). Use the plain scales mark until the owner sends the logo.
- Religious décor: no Mecca images, arabesque patterns or green-and-gold ornament. The "bebas riba" register stays in words.
- Kop gimmick creep. The double rule appears twice, nowhere else. No "Perihal:" labels, letter numbers, fake
  signatures, stamps or materai. A fake stamp on a law firm's page reads as forgery.
- Alarm in the green section: no red, no warning triangles, no "DARURAT". It must read as calm steps.
- The AI defaults: cream ground, italic display serif, tracked mono labels, hairlines on every block.
- Animating the signature per letter (scramble, typewriter, blur-in) or re-running it on scroll.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (lists ≤ lead; caps labels at small)
- [x] Max content width set (1200px); no detail pinned far from what it describes (rating under heading, hours under buttons, contact block from col 9)
- [x] Every section has a desktop wireframe that uses the width on purpose (two-column splits, 4-up reviews, full-width rules)
- [x] At least 3 products shown: n/a for a law office. Six practice areas are shown as named items (§6)
- [x] Within motion-rules.md (one signature, section reveals, transform/opacity, no React Bits, reduced motion = none)
- [x] Brief is decisions, not essays (2–4 pages)
