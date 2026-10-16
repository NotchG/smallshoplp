# Design brief: Rene Cafe

## 1. Concept
**Lewat jendela baja.** The page stands inside Rene's brick hall and looks out through its tall
black-steel window at the garden, then steps outside and stays until the bulbs come on, because what
people love here is a green view and an afternoon that goes by without them noticing.
Signature moment: on load, the glare on the hero window clears and the garden behind the panes settles
into place, like eyes adjusting from the dim hall to the bright lawn (1.2 s, once).

## 2. Inputs
| Input | What it contributed (one line) |
|---|---|
| brief.md, raw.json | Facts, the four reviewer-named dishes, every-day 10.00–22.00 hours, the seven sections, Indonesian copy, the warning not to overclaim the food (4.2, one "average" review). |
| photo-1 (hall) | The gabled black-steel glass wall, red brick, rattan armchairs: the hero window and the hall illustration. Reference only. |
| photo-2 (lawn table) | Round plank table on the lawn, red-tipped hedge, wire fry baskets, iced matcha and iced coffee: how dishes are shown (top-down on that table) and the snack illustration. Reference only. |
| photo-3 (deck) | Covered wooden deck, Edison bulb string, tall steel windows: the deck illustration and the night close. Reference only. |
| impeccable | Persuade mode; brief-pinned world (no roll); "first viewport is a thesis"; Full-palette strategy with colour owning whole regions; display face chosen off its reflex list; one authored focal sequence, everything else quiet; no eyebrows, no card rows. |

**impeccable direction contract.** THESIS: the view from Rene's hall into its garden; refuses the dim
full-bleed photo hero with a centred "Welcome". OWN-WORLD: brick-red and deep-leaf fields, black
steel 6 px frames around every picture, Edison amber for action, square corners; recognisable with the
words removed. STORY: "it is that green" → "this is what people eat there" → "open every day till
ten, here is the way". FIRST VIEWPORT: see §7 Hero. FORM: brief-pinned; seed: none (unavailable;
launcher not run inside the docs-only write boundary).

## 3. Palette (6 named colours)
Strategy: full palette, every colour owns whole sections. Light ground is a cool daylight, not cream.

| Token | Hex | Role | Contrast check |
|---|---|---|---|
| `bata` | `#7A3526` | Brick wall: ground of Hero and Kata mereka | `kaca` text on it 7.64:1 ✓ |
| `daun` | `#1F3B2C` | Deep leaf: ground of Ruang hijau; headings on light | `kaca` on it 10.5:1 ✓; on `kaca` 10.5:1 ✓ |
| `kaca` | `#ECEFE6` | Daylight through glass: ground of food sections and Kunjungi; text on dark grounds | `besi` on it 15.4:1 ✓ |
| `besi` | `#141815` | Black steel: body text on light, every frame and mullion, ground of the night close | `kaca` on it 15.4:1 ✓ |
| `lampu` | `#EBA94C` | Edison amber: primary button fill, hour bulbs, focus ring on dark grounds | `besi` text on it 8.8:1 ✓; vs `bata` 4.36:1 (large/UI only) ✓; vs `daun` 6.0:1 ✓ |
| `pucuk` | `#D9573D` | Red hedge tips and sambal, inside illustrations only. Never text, never UI | 3.36:1 on `kaca`: decoration only |

Illustration-only tints (not UI tokens, never text): lawn `#6F9A48`, mid canopy `#3E6B3F`, wood
`#9C6B3F`, rattan `#C99A57`, brick joint `#6E2F21`, ceramic `#F7F6F0`.
Secondary text uses the same colour as body at a smaller step, never a greyed-out colour.
Focus ring: 3 px, offset 3 px; `besi` on `kaca`, `lampu` on `bata`, `daun`, `besi`.

## 4. Type
Two families via `next/font/google`, `subsets: ["latin"]`, `display: "swap"`, variable weights:
**Besley** (display, headings, statements): a sturdy Clarendon with ball terminals, the type of
brick-and-iron glasshouse buildings; character without being a reflex pick. **Figtree** (body, UI,
labels): soft, open, easy at 17 px on a phone. No italics loaded.

| Variable | Value | Used for |
|---|---|---|
| `--step-display` | `clamp(3rem, 1.5rem + 8vw, 6.25rem)` (48–100 px), Besley 800, leading 1.0, `white-space: nowrap` | hero "Rene Cafe" only |
| `--step-head` | `clamp(2rem, 1.3rem + 2.8vw, 3.5rem)` (32–56 px), Besley 700, leading 1.1 | section headings (h2) |
| `--step-lead` | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` (22–28 px), Besley 500, leading 1.3 | hero place line, dish and place names (h3), menu group titles, review paraphrases, "Buka setiap hari" |
| `--step-body` | `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)` (17–19 px), Figtree 400, leading 1.55 | running text, menu items, hour rows, buttons (Figtree 600) |
| `--step-small` | `0.8125rem` (13 px), Figtree 500, leading 1.4 | "mulai Rp …", review source line, footer, placeholder labels |

Ratios checked at 390 / 768 / 1440: display/head ≥ 1.73, head/lead ≥ 1.43, lead/body ≥ 1.31,
body/small ≥ 1.31. "Rene Cafe" measured in Besley 800 at 5.62 em: 310 px at 390 (content 350),
279 px at 320 (content 280), 562 px at 1440 (text column 588). Builder confirms `textWidth` in
report.json. Body measure max 60ch.

## 5. Layout guardrails (fill in the values)
| Rule | Value |
|---|---|
| Max content width (`--container`) | 1200px |
| Page margins phone / desktop (`--gutter`) | 20px / 40px (from 768px) |
| Section padding phone / desktop (`--section-y`) | 64px / 112px |

- Grid: 12 columns, gap 16px phone / 24px desktop. Two-column layouts switch on at 1024px, except
  the hero, which stays stacked until 1280px (below that the one-line h1 does not fit a half column).
- Corners square everywhere; buttons 2px. Every picture (illustration, map) sits in a 6px `besi`
  frame. The hero window alone uses a 12px outer frame with 6px mullions (8 / 4 on phone).
- Heading → content gap 24–32px; space above a heading is always larger than below it.
- **Proximity:** a label, price or tag sits within about 24px of the thing it describes.
  "mulai Rp …" sits directly under its group title (8px). Dish names sit under their own
  illustration inside the same pane. Hour rows: a `max-content` day column (widest "Minggu", 57 px)
  with a 12px gap, so no time sits more than ~30px from its day.
- **Wide screens are designed, not stretched:** every section's desktop wireframe in §7 is a
  two-column or three-column composition across the 1200px container.
- **Lists:** items use `--step-body` to `--step-lead`. A list of products is never set at
  display or heading size.

## 6. Products on the page
No owner photos exist, so products are flat SVG illustrations drawn from the customer photos and
reviews (5 products shown):
- **Wajib dicoba window (4 panes):** Pangsit Kuah (pale bowl, clear broth, folded wontons, scallion),
  Ayam Penyet (flattened fried chicken, tahu, tempe, a dab of `pucuk` sambal), Bebek Keranjang (duck
  pieces in a rattan basket, the "keranjang" made obvious), Matcha Latte (iced, glass from above, ice
  cubes). Each is seen from above on the round plank table on the lawn from photo-2: lawn-green pane
  ground, wood disc, dish on it.
- **Camilan column:** two wire fry baskets with paper liners, one with the chocolate-and-cheese snack,
  one with crackers and a dip cup (photo-2), seen from above.
Style: flat fills from §3, 5–9 shapes per object, no outlines, no gradients, no faces or mascots.
When owner photos arrive they replace the illustrations in the same frames (same aspect, `object-fit: cover`).

## 7. Sections
**Hero** (ground `bata` with a faint running-bond brick pattern: 1 px joints in `#6E2F21`, bricks
≈ 64 × 22 px; `kaca` text stays ≥ 7.6:1 on brick and joint). Purpose: recognition, hours, directions.
The window's sill sits on the hero's bottom edge, so the green section below reads as stepping outside.
```
Hero: phone (390)                 Hero: desktop (1440)
+----------------+                +--------------------------------------------+
|draft banner    |                |draft banner                                |
|Rene Cafe (disp)|                |                               /\           |
|Pondok Ranggon, |                | Rene Cafe  (display 100)     /  \  gabled  |
| Jakarta Timur  |                | Pondok Ranggon, Jakarta     /____\ steel   |
|Kafe bata dan.. |                |  Timur (lead)               |  |  | window |
|● Buka setiap   |                | Kafe bata dan kaca... (body)|__|__| garden |
| hari 10.00–22  |                | ● Buka setiap hari 10.00–22 |  |  | inside |
|[Petunjuk Arah→]|                | [Petunjuk Arah →]           |__|__|        |
|    /\  window  |                |  cols 1–6, centred          cols 7–12,     |
|   /__\ ~520 tall|               |  vertically                 ~800 tall      |
|   |_|_| sill   |                |                             sill on edge   |
+================+                +============================================+
```
Phone and up to 1279px: text block first (button ends ≈ 410px from top at 390), window below, centred,
max 560px wide, gable visible in the first screen. Two columns from 1280px.

**Ruang hijau** (ground `daun`). Purpose: prove "green" and show where to sit. The three illustrations
share one ground line, so on desktop they join into one panorama: lawn → deck → hall.
```
Ruang hijau: phone                Ruang hijau: desktop
+----------------+                +--------------------------------------------+
|Ruang hijau (h2)|                | Ruang hijau (h2) cols 1–5  intro lead 7–12 |
|intro (lead)    |                | +------------+-------------+-------------+ |
|[frame: Taman]  |                | | Taman      | Teras kayu  | Ruang bata  | |
|Taman (lead)    |                | | lawn,trees | deck, bulbs | & kaca      | |
|2 lines (body)  |                | +------------+-------------+-------------+ |
|[frame: Teras]  |                | Taman (lead) Teras kayu    Ruang bata &   |
|Teras kayu ...  |                | 2 lines      2 lines       kaca, 2 lines  |
|[frame: Ruang]  |                |                            + toilet note  |
|Ruang bata.. +  |                +--------------------------------------------+
| toilet note    |
+----------------+
```

**Wajib dicoba** (ground `kaca`). Purpose: show the dishes. One steel window, not four cards. Desktop:
the heading column is `position: sticky` (top 48px) so it travels beside the window; panes 16:10.
```
Wajib dicoba: phone               Wajib dicoba: desktop
+----------------+                +--------------------------------------------+
|Wajib dicoba    |                | Wajib dicoba | +=============+============+ |
|intro (body)    |                | (h2)         | |[ill. 16:10] |[ill. 16:10]| |
|+==============+|                | intro (body) | |Pangsit Kuah |Ayam Penyet | |
||[ill]|Pangsit ||                | cols 1–4     | |note (body)  |note        | |
||128px| Kuah   ||                |              | +=============+============+ |
||     | note   ||                |              | |[ill]        |[ill]       | |
|+=====+========+|                |              | |Bebek Kera.. |Matcha Latte| |
| … 4 rows, 6px  |                |              | +=============+============+ |
| mullions       |                |              |  cols 5–12, one 2×2 window | |
+----------------+                +--------------------------------------------+
```

**Menu andalan** (ground `kaca`, continues the food passage). Purpose: menu shape and price range.
```
Menu andalan: phone               Menu andalan: desktop
+----------------+                +--------------------------------------------+
|Menu andalan    |                | Menu andalan (h2)                          |
|Kopi & non-kopi |                | Kopi & non-kopi | Makanan berat | Camilan   |
|mulai Rp 25rb   |                | mulai Rp 25rb   | mulai Rp 40rb | mulai 25rb|
|Matcha Latte    |                | Matcha Latte    | Ayam Penyet   | Pisang Go.|
|Es Kopi Susu .. |                | Es Kopi Susu .. | Pangsit Kuah  | Kerupuk ..|
|Makanan berat ..|                | Americano       | Bebek Kera..  | [frame:   |
|Camilan ..      |                | Cappuccino      | Nasi Goreng   |  2 wire   |
|[frame: baskets]|                | Es Teh Leci     | Mie / Ayam B. |  baskets] |
+----------------+                +--------------------------------------------+
```

**Kata mereka** (ground `bata`, flat, no pattern). Purpose: social proof, paraphrased, no names, no stars.
```
Kata mereka: phone                Kata mereka: desktop
+----------------+                +--------------------------------------------+
|Kata mereka (h2)|                | Kata mereka (h2)                           |
|Dirangkum dari  |                | Dirangkum dari ulasan Google · 4,2 dari 618|
| ulasan Google..|                | paraphrase 1 (lead)  | paraphrase 2 (lead) |
|paraphrase 1    |                | paraphrase 3 (lead)  | paraphrase 4 (lead) |
|… 4 stacked     |                |  2 columns, 48px gap, max 38ch each        |
+----------------+                +--------------------------------------------+
```

**Kunjungi kami** (ground `kaca`). Purpose: where and when. Each hour row's bullet is a small lit bulb.
```
Kunjungi kami: phone              Kunjungi kami: desktop
+----------------+                +--------------------------------------------+
|Kunjungi kami   |                | Kunjungi kami (h2)                          |
|address (body)  |                | +========================+ address (body)  |
|Buka setiap hari|                | | Google map iframe      | Buka setiap hari |
|● Senin 10.00–22|                | | 6px steel frame        | ● Senin  10–22   |
|… 7 rows        |                | | cols 1–7, 440px tall   | … 7 rows         |
|[Petunjuk Arah] |                | +========================+ [Petunjuk Arah]  |
|[map, 320 tall] |                |                            cols 8–12       |
+----------------+                +--------------------------------------------+
```

**Hubungi kami + footer** (ground `besi`, night). Purpose: a real close; the page has reached 22.00.
```
Hubungi kami: phone               Hubungi kami: desktop
+----------------+                +--------------------------------------------+
| o  o  o  o  o  |                | ~o~~~o~~~o~~~o~~~o~~~o~~~o~~ bulb string   |
|Hubungi kami    |                | Hubungi kami (h2)      | [WhatsApp: nomor   |
|Sampai jumpa .. |                | Sampai jumpa di bawah  |  menyusul]  dashed |
|[Petunjuk Arah] |                |  pohon. (lead)         | [Instagram: akun   |
|[WhatsApp: ..]  |                | [Petunjuk Arah →]      |  menyusul]  amber  |
|[Instagram: ..] |                | ------------------------------------------ |
|footer (small)  |                | Rene Cafe · address | Buka setiap hari | Maps|
+----------------+                +--------------------------------------------+
```

## 8. Motion
**Signature moment, hero window.** What: a `kaca` glare layer over the glass fades 0.85 → 0 while
three garden layers (back canopy, mid canopy and trunks, hedge and lawn) rise into place by 6 / 10 /
16 px. Where: inside the window only; frame, text and button never move. Timing: starts on first paint
as CSS keyframes (no JS, no hydration flash), glare 1.2 s `cubic-bezier(0.16, 1, 0.3, 1)`, layers 1.2 s
same ease with 0 / 80 / 160 ms offsets; done by 1.4 s. Layers are drawn with 24 px overscan so no gap
shows. Reduced motion: `animation: none`, the default styles are the final state.
**Supporting:** starter `<Reveal>` (20 px, 0.6 s, `power2.out`, once) on four blocks only: the Ruang
hijau panorama, the Wajib dicoba window, the Kata mereka grid, the Hubungi block. Menu and Kunjungi do
not animate. Buttons: hover `translateY(-2px)` 180 ms ease-out, arrow glyph `translateX(3px)`; press
`scale(0.98)` 120 ms. No loops, no parallax, no scroll-scrubbing; the bulb string is static.
Tokens for `lib/motion.ts`: `press 0.15, ui 0.2, reveal 0.6, hero 1.2`; `distance.reveal 20`; eases unchanged.

## 9. What makes it this shop
1. The hero is Rene's own gabled black-steel glass wall from the hall, looking out at its garden; the
   window's sill meets the green section, so scrolling is stepping outside.
2. Dishes are served the way photo-2 shows them: on the round plank table on the lawn, seen from above,
   and the bebek really arrives in its keranjang.
3. The hour bullets are Edison bulbs, all seven lit, and the page ends at night under the deck's bulb
   string: 10.00 to 22.00 told as one long afternoon.

## 10. Avoid
- Category defaults: a dim full-bleed photo hero with centred "Welcome to", cream paper + serif +
  terracotta accent, a row of three rounded icon cards, coffee beans or latte art, leaf-sprig and
  botanical line-drawing ornaments, tracked-caps eyebrow labels, star rows, quotation marks around reviews.
- Window everywhere: only the hero acts out the window. Elsewhere the world shows only as 6 px frames
  and colour fields.
- Brick that fights text: joints only, darker than the brick, no highlights or noise; Kata mereka is flat.
- Illustration drift: no outlines, gradients, shading, kawaii faces or extra props the photos don't show
  (no rice, no cucumber, no latte art).
- A second signature: the night bulbs never flicker, glow-pulse or animate.
- Overclaiming food: no "terenak" or "terbaik"; dish notes say what reviewers said and stop there.
- Mixed register or language: "kamu" throughout, no English UI strings, no invented phone numbers.

## Self-check (planner ticks before finishing)
- [x] Type steps ≥ 1.25× apart; no list or label larger than its section heading (min ratio 1.31; lists at body, names at lead)
- [x] Max content width set; no detail pinned far from what it describes (1200 px; prices under group titles, names inside their panes)
- [x] Every section has a desktop wireframe that uses the width on purpose (two- or three-column at 1440 in all seven)
- [x] At least 3 products shown (food and product shops) (5: four dishes plus the wire-basket snacks)
- [x] Within motion-rules.md (one hero moment, opacity and transform only, four section reveals, reduced = none)
- [x] Brief is decisions, not essays (2–4 pages)
