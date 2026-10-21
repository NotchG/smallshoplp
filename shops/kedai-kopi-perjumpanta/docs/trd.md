# TRD: Kedai Kopi Perjumpanta mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. All visible copy is in Bahasa Indonesia.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep the `mockup` flags exactly as in the PRD's sections table):
```ts
shop: { name: "Kedai Kopi Perjumpanta", nameTop: "Kedai Kopi", wordmark: "Perjumpanta",
        address: "No. 4, RT.4/RW.9, Cawang, Kramat Jati, Jakarta Timur 13630",
        addressShort: "Cawang, Kramat Jati, Jakarta Timur",
        landmark: { text: "Dekat Gedung ASABRI, Cawang.", mockup: true },
        directionsHref: "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Kopi%20Perjumpanta&destination_place_id=ChIJZSTqEP7yaS4RncIGbHkVay0",
        mapsHref: "https://maps.google.com/?cid=3272733165462405789",
        mapEmbedSrc: "https://maps.google.com/maps?q=Kedai%20Kopi%20Perjumpanta%2C%20Cawang%2C%20Kramat%20Jati%2C%20Jakarta%20Timur&z=17&output=embed",
        whatsapp: { number: "", display: "nomor menyusul", mockup: true },   // no number in the listing
        phone:    { number: "", display: "nomor menyusul", mockup: true },
        hours: { headline: "Buka 24 jam", days: "Senin–Minggu" },
        rating: { value: "4,5", count: 721 } }
hero:    { greeting: { text: "Mejuah-juah!", mockup: true },
           sub: { text: "Kedai kopi Karo di Cawang, tempat kita berjumpa.", mockup: true } }
rasa:    { heading, lead: { text, mockup: true }, body: [{ text, mockup? }],
           items: [{ title, text, mockup? }],                 // 4 items; the 4th is mockup
           slots: [{ label: "Foto depan kedai", caption: "Foto dari pemilik menyusul", mockup: true },
                   { label: "Foto malam yang ramai", caption: "Foto dari pemilik menyusul", mockup: true }] }
sedia:   { heading: "SEDIA", lead: { text, mockup: true }, priceNote: { text: "Harga masih contoh.", mockup: true },
           groups: [{ label: "Minum" | "Makan",
                      items: [{ name, price?: { text: "Rp 12rb", mockup: true }, mockup? }],
                      note?: { text, mockup: true } }],
           table: [{ name, art: "bandrek" | "lontong" | "indomie" | "bubur",
                     price: { text, mockup: true }, note?: { text } }] }
reviews: { heading: "Kata mereka", note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
           items: [{ text, sources: [1, 4] }] }               // paraphrases only, no names
visit:   { heading: "Kunjungi kami", nearby: { text, mockup: true }, mapsLinkLabel: "Buka di Google Maps" }
contact: { heading: "Hubungi kami", lead: { text, mockup: true } }
uisBand: { enabled: true, mockup: true }                      // one switch removes both bands
meta:    { title, description }
banner:  "Draf tampilan untuk Kedai Kopi Perjumpanta. Belum situs resmi, sebagian isi masih contoh."
```
A real item with an example price (everything from the banner, plus Lontong Medan) puts
`data-mockup` on the price only. Items not on the banner (Kopi Hitam, Kopi Susu, Teh Manis,
Teh Susu, Cimpa, "Masakan Karo lainnya") are mockup as a whole line.
The WhatsApp and phone links render only when `number` is filled. Until then the hero WhatsApp
button links to `#hubungi`, and the close shows the dashed placeholder plate.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter (MockupBanner) | Indonesian text from `content.ts`; kain ground, tinta text, 1px tinta bottom rule |
| Container, `.section`, `.t-*` | all | starter | Every section uses these |
| Reveal | S2–S6 | starter | One per section, around its content wrapper. Never in the hero |
| Canopy | Hero, S6 | new | Full-bleed tinta band, 36px phone / 48px desktop. Corrugated bottom edge via CSS `mask` (repeating small ridges, 14px pitch). 2 bulbs (phone) or 3 (desktop): kain circles 12px on 1px tinta cords 16px long. `aria-hidden` |
| UisBand | Hero bottom seam, footer top | new, mockup | 12px horizontal stripes: merah 4 · tinta 2 · kain 2 · merah 2 · kain 2 (px, top to bottom). `aria-hidden`, `data-mockup`, renders only when `uisBand.enabled` |
| HeroName | Hero | new | One `h1`: span "Kedai Kopi" (block, `.t-lead`, Besley 700) and span "Perjumpanta" (block, `.t-display`, Besley 700, `letter-spacing: -0.02em`, `white-space: nowrap`) |
| HoursPlate | Hero | new | Kain plate, 2px tinta border, no radius: "BUKA 24 JAM" (Besley 800, `.t-lead`) and "Senin–Minggu" (`.t-small`). 16px above the buttons |
| ActionButton | Hero, S5, S6 | new | Min height 48px, Atkinson 700 `.t-body`, radius 4px. On limau: tinta fill with kain text, or a 2px tinta outline. On tinta: limau fill with tinta text. A placeholder variant has a 2px dashed border, `data-mockup` and the visible "nomor menyusul" |
| HeroTable | Hero | new | Inline SVG (`viewBox="0 0 520 380"`): kain table top with tinta outline, kayu A-frame legs, a limau saucer `<g data-saucer>`, a glass `<g data-glass>` (gula drink, kain milk line, kayu sediment, spoon), three steam paths `<g data-steam>`. `role="img"`, `aria-label="Segelas Bandrek Susu di atas tatakan hijau"`. Desktop: columns 8–12 bleeding to the right viewport edge. Phone: under the buttons, max-height 220px |
| PhotoSlot | S2 | new, mockup | 4:5 box, 2px dashed kain at 60% on tinta, centred label (`.t-body`), caption 8px under (`.t-small`). `role="img"` with an aria-label of the label text |
| RasaList | S2 | new | `<ul>`, 4 columns from 1024px and stacked below. Each item has a 2px limau top rule, a title (`.t-lead`, Besley 700, limau) and one line (`.t-body`, kain) |
| SediaBanner | S3 | new | Kain panel, columns 1–8 on desktop. 4 tinta eyelets (10px rings, 3px stroke) inset 14px, hem lines (1px tinta at 15%, 10px from the top and bottom edges), `box-shadow: 0 6px 16px rgb(29 27 22 / 0.18)`. `h2` "SEDIA" centred, merah. Two `<ul>`s (Minum, Makan) with the group label as `.t-small` heading text; on phone one column |
| MenuLine | S3 | new | Name (Besley 700, `.t-lead`, tinta) then price (Atkinson 700, `.t-body`, merah, `tabular-nums`) inline with a 12px gap. No leaders, no right alignment |
| ProductBand | S3 | new | Full-bleed kayu band. Grid: 4 columns from 1024px, 2 below. Each: Art (180px desktop / 140px phone), name 12px under (`.t-lead`, Besley 700, kain), price 4px under (`.t-body`, limau), optional note (`.t-small`, kain) |
| ArtBandrek, ArtLontong, ArtIndomie, ArtBubur | Hero (bandrek), S3 | new | Inline SVG, `viewBox="0 0 120 120"`, 2px tinta strokes with `vector-effect: non-scaling-stroke`, flat fills from the palette, `role="img"`, Indonesian `aria-label`. ArtBandrek shares its drawing with HeroTable |
| ReviewList | S4 | new | `<ul>`, 3 columns from 1024px (columns 5–12), each item with a 2px tinta top rule; text in Besley 700 `.t-lead`. No quote marks, stars or names |
| MapEmbed | S5 | new | `<iframe loading="lazy" title="Peta lokasi Kedai Kopi Perjumpanta">`, 16:10 on desktop (columns 6–12), 4:3 on phone. If it doesn't render in the screenshots, swap it for a kain panel with the address and a "Buka di Google Maps" link |
| Footer | end | new | Tinta ground, kain text, `.t-small`: name · short address · "Buka 24 jam" · "Info dari Google Maps" |

## React Bits (max 2)
**None.** The signature (a glass set down, a clink, rising steam) is a short GSAP timeline on
an inline SVG. Nothing else on this page needs an effect, and the brief's personality (plain,
no-frills, not polished) argues against one.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

Considered and rejected on reactbits.dev:
- **Circular Text**: the name spinning round the saucer rim. A loop, and decoration.
- **Rotating Text** / **Text Loop**: cycling "kopi / bandrek / cerita" in the hero. It delays
  recognition, and the motion rules keep text effects off running copy.
- **Split Flap Text**: "24 JAM" as a departure board. A costume from another world.
- **Count Up**: counting up to 721. Decoration on a fact.
- **Slosh Gauge**, **Sticker Peel**, **Tear Ticket**: toys. The banner and the glass are enough.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): HeroTable glass `[data-glass]` | load, 0.25 s after mount; h1, sub, plate, buttons, table and saucer visible from the first paint | `y` −32 → 0; `opacity` 0 → 1 over the first 0.2 s | 0.5 s | `power3.out` | Final state, no tween |
| HeroTable saucer `[data-saucer]` | when the glass lands, 0.67 s after mount | `y` 0 → 1.5 → 0 (yoyo, repeat 1) | 0.16 s | `power1.out` | Static |
| HeroTable steam `[data-steam] path` ×3 | 0.85 s after mount | `y` 10 → 0; `opacity` 0 → 0.8, then stays | 0.9 s, stagger 0.12 s | `power2.out` | Static at opacity 0.8 |
| Section content, S2–S6 (one per section) | ScrollTrigger `start: "top 85%"`, `once: true` | `y` 20 → 0, `opacity` 0 → 1 | 0.6 s | `power2.out` | Final state, no tween |
| ActionButton | `:active` | `translateY(1px)` | 120 ms | ease-out (CSS) | None |

No hydration flash: an inline `<script>` in `<head>` adds `js` to `<html>` before paint. CSS
inside `@media (prefers-reduced-motion: no-preference)` sets `.js [data-glass], .js [data-steam]
{ opacity: 0 }`; the timeline brings them in. With JS off, nothing is hidden. Build the
sequence as one `gsap.timeline` in `useGSAP` with the hero as scope. Use `gsap.from` for reveals,
so content is visible with JS off. Hover colour changes are instant; nothing loops.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the h1, which never animates.
- At most 2 font families via `next/font`, subset, `display: swap`: Besley (variable, latin,
  weights 700–800 used) and Atkinson Hyperlegible Next (variable, latin, 400–700). If
  `Atkinson_Hyperlegible_Next` isn't in `next/font/google`, use `Atkinson_Hyperlegible` 400/700.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images: there are no owner photos, and `photo-*.jpg` are never copied into `site/`.
  All visuals are inline SVG or CSS. The map iframe is lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Pairs are checked in design brief §3. Never kain text on limau, merah off the kain banner, or
  gula as text.
- Focus ring: 3px tinta on limau and kain; 3px limau on tinta and kayu; offset 3px.
- Canopy, bulbs and uis bands are `aria-hidden`. HeroTable, Art* and PhotoSlot have Indonesian
  labels.
- Menu groups are `<ul>`s labelled by their group label (`aria-labelledby`).
- The placeholder WhatsApp button's accessible name is "WhatsApp, nomor menyusul".
- Body text never below 17px.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Kedai Kopi Perjumpanta · Kedai kopi Karo di Cawang, Jakarta Timur"
- Description: "Kedai kopi Karo di Cawang, Kramat Jati. Buka 24 jam setiap hari. Bandrek Susu, Lontong Medan, dan tempat berkumpul orang Karo di Jakarta."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Use the exact clamp values from design brief §4 and §5. Set `--leading-display: 0.95`,
  `--leading-head: 1.1`, `--leading-body: 1.55`.
- `@theme` colours: `--color-limau #A8D33A`, `--color-tinta #1D1B16`, `--color-kain #F6F5EF`,
  `--color-merah #B8261C`, `--color-kayu #6B4A30`, `--color-gula #B4692F`.
- `@theme` fonts: `--font-display` (Besley), `--font-body` (Atkinson Hyperlegible Next).
- Section grounds in order: banner kain, Hero limau (canopy tinta), Rasa tinta, Sedia limau with
  the kayu band, Kata mereka kain, Kunjungi tinta, Hubungi limau (canopy tinta), footer tinta.
- `html { background: limau }` so overscroll at the top matches the hero. Theme `::selection`
  (limau on tinta) and the scrollbar thumb (tinta).
- Hero grid from 1024px: text in columns 1–7, HeroTable from column 8 to the viewport edge
  (negative right margin equal to the gutter plus the outside space).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
