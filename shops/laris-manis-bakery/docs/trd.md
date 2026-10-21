# TRD: Laris Manis Bakery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No extra dependencies: no React Bits, no icon library (the few icons are inline SVG).

## Content model
All copy and facts in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.

- `shop`: `name` "Laris Manis Bakery", `nameScript` "Laris Manis", `nameSuffix` "Bakery",
  `type` "Toko roti", `address` "Jl. Pisangan Baru No. 02, Pisangan Baru, Matraman, Jakarta
  Timur 13110", `addressShort` "Jl. Pisangan Baru No. 02, Matraman", `phone` "0812-8116-231",
  `phoneHref` "tel:+628128116231", `whatsappHref` (mockup) `https://wa.me/628128116231?text=`
  + encoded "Halo Laris Manis, saya mau pesan roti." (mockup), `mapsUrl` = `googleMapsUri`
  from raw.json, `mapEmbedSrc` = `https://www.google.com/maps?q=` + encoded "Laris Manis
  Bakery, Jl. Pisangan Baru No.02, Matraman, Jakarta Timur" + `&output=embed`,
  `rating` "4,6", `ratingCount` 216.
- `orderNumbers`: `[{ label: "Admin 1", number: "0821-3513-5932" }, { label: "Admin 2",
  number: "0812-1985-8295" }]` (photos; not mockup, but listed in the checklist for consent).
- `hours`: 7 rows `Senin`…`Minggu`, each `07.00–18.00`, with `dayIndex` matching JS
  `getDay()` (Minggu = 0). Hero text "Buka hari ini 07.00–18.00" and "Setiap hari".
- `hero`: `line` (mockup) "Roti rumahan yang enak dan terjangkau di Pisangan Baru."
- `breads: Product[]` (Roti kami) and `treats: Product[]` (Kue & camilan), where
  `Product = { id, name: Item, price: Item, note: Item, illustration: "mesesKeju" | "cokelat"
  | "sosis" | "boluPizza" | "toplesSemprit" }`. Names, prices and notes are all `mockup: true`.
  `price` for Kue Semprit Keju is "Rp 85rb / toples".
- `flavours: Item[]` (mockup): keju, srikaya, pisang cokelat.
- `orders` (mockup): three `{ title, line }` rows: "Kue kering Lebaran" / "Semprit keju,
  nastar dan kastengel dalam toples."; "Ulang tahun & acara" / "Bolu dan kue pesanan untuk
  hari spesial."; "Warung & reseller" / "Roti per krat, harga grosir tanya lewat WhatsApp."
  Plus `ordersIntro` (mockup) and an order WhatsApp prefill (mockup).
- `praise: Item[]`: "Rasanya enak dan harganya bersahabat." and "Toko roti rumahan yang bikin
  jatuh hati." (paraphrased from reviews 2–4 and 1; no names; not mockup).
- `copy` (mockup): section intro lines, "Dibungkus satu per satu, siap dibawa pulang.",
  "Pesan lewat WhatsApp, ambil hangat di toko."
- `banner`: "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text from `content.banner`, Indonesian |
| SmoothScroll | global | starter | unchanged |
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–7 | starter | section-level only, never on hero |
| Hero | hero | new | h1 (two spans: script name + "Bakery"), line, hours, actions |
| CrateBand | hero | new, client | full-bleed crate: bread layer (z 1) behind front wall (z 2); runs the signature moment |
| CrateWall | hero | new | SVG or CSS front wall with 2 rows of rounded slots; `aria-hidden` |
| BreadBag | hero, Roti kami | new | shared clear-bag SVG wrapper with label (orange arc + "LM" roundel) |
| IlloMesesKeju, IlloCokelat, IlloSosis, IlloBoluPizza, IlloToplesSemprit | hero, Roti kami, Kue | new | inline SVG, `role="img"` + Indonesian `aria-label`, inks from design brief §3 |
| ProductCard | Roti kami, Kue | new | `variant: "featured" \| "row" \| "round"`; white-tile panel; name + price on one line |
| SlotStrip | Pesan | new | row of rounded slots in #143580 along the section's top edge and as row dividers; `aria-hidden` |
| OrderRows | Pesan | new | `<ul>` of three rows |
| Praise | Kata mereka | new | rating line + `<ul>` of two paraphrases |
| HoursTable | Kunjungi | new, client | `<table>`; highlights today using `Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" })`; no highlight before hydration |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Laris Manis Bakery">`, 4:3, 20px radius |
| OrderSign | Hubungi | new | the "Contact Order" card: ornament-brown border, SVG corner ornaments, ribbon, tel links |
| ActionButton | hero, Pesan, Kunjungi, Hubungi | new | `primary` (biru/putih), `secondary` (krim + 2px biru border), `onBlue` (putih/biru); ≥52px tall; inline WhatsApp / pin / phone icons |
| Footer | footer | new | tinta field |

## React Bits (max 2)
None. The signature moment is a few lines of GSAP on our own SVGs, and every candidate
either loops forever or adds an effect without a job:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | – | Rejected: Circular Text (the "LM" roundel is static on the bag; a spinning ring is decoration), Rotating Text and Curved Loop (loop on copy, against motion rule 7), Count Up (a counting 4,6 rating is a gimmick), Bounce Cards (elastic easing, card-row template) | – | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero crate breads (signature moment) | load, 0.2s delay | `fromTo` y −64px → rest (0–16px), rotation rest±8° → rest, opacity 0 → 1; stagger 0.09s; 6 breads ≥768px, 3 below | 0.7s each (≈1.35s total) | `expo.out` | final state, no motion |
| Sections 2–7 | ScrollTrigger "top 85%", once | `<Reveal>`: y 20 → 0, opacity | 0.6s | `power2.out` | final state |
| Crate bread links | hover / focus-visible | translateY −10px (CSS) | 200ms in, 150ms out | ease-out | no transform, outline only |
| Product panel illustration | card hover | translateY −4px, rotate −2° (CSS) | 200ms | ease-out | none |
| Buttons | hover / active | background colour; translateY 1px on press | 150ms | ease-out | colour only |

No-flash rule for the signature: breads are in their final position in the HTML. An inline
`<script>` in `<head>` adds `motion-ok` to `<html>` only when
`matchMedia("(prefers-reduced-motion: no-preference)")` matches; CSS
`.motion-ok [data-crate-bread] { opacity: 0 }` hides them until GSAP runs, and the same
script removes the class after 2.5s as a failsafe. Text is never hidden. Use `useGSAP` with
the CrateBand ref as scope; animate transform and opacity only.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; the LCP element is the h1 text, which never animates.
- 2 font families via `next/font/google` (Oleo Script 700; Baloo 2 400/600/800), `latin`
  subset, `display: "swap"`.
- No raster images at all: illustrations and crate are inline SVG (keep each under ~6 KB).
  Map iframe `loading="lazy"`.
- No preloaders, no video, no WebGL. Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; never
oranye on biru or kuning), visible keyboard focus (3px `tinta` outline on light grounds,
3px `kuning-keju` on biru, offset 3px), semantic landmarks (`header`, `main`, `section`
with `aria-labelledby`, `footer`), `alt`/`aria-label` on every illustration ("Ilustrasi Roti
Meses Keju dalam kemasan"), decorative crate and slot strips `aria-hidden`, crate bread links
labelled "Lihat Roti Meses Keju", tap targets ≥44px (buttons 52px), `lang="id"`,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP skipped, CSS transitions off).

## SEO / meta
Title "Laris Manis Bakery · Toko roti di Pisangan Baru, Matraman"; description "Roti rumahan
enak dan terjangkau di Jl. Pisangan Baru No. 02, Matraman, Jakarta Timur. Buka setiap hari
07.00–18.00." Both from `content.ts`. `noindex` stays on (starter default) until the owner
approves. `<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Set `--leading-display: 1.05` and `--leading-head: 1.15`. Colours go into `@theme` as
`--color-krim`, `--color-tinta`, `--color-biru-krat`, `--color-oranye-label`,
`--color-kuning-keju`, `--color-putih-ubin`. The 12-column grid uses a `.grid-12` helper in
CSS (`grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px` from 768px). The crate band
is full-bleed (outside `<Container>`), with its breads inside a `<Container>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
