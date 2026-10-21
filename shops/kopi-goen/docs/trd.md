# TRD: Kopi Goen mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. Fonts: `Familjen_Grotesk` (600, 700) and `Onest` (400, 500) from `next/font/google`,
Latin subset, `display: "swap"`, exposed as CSS variables and mapped in `@theme`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions, the split of fact vs mockup is not):
- `shop`: `name: "Kopi Goen"`, `eyebrow: "Kedai kopi di kebun · Balekambang, Jakarta Timur"`,
  `tagline: { text: "Ngopi di kebun, dari siang sampai malam.", mockup: true }`.
- `address`: `street: "Jl. Munggang"`, `rtrw: "RT.6/RW.4"`, `area: "Balekambang"`, `city: "Jakarta Timur"`,
  `postcode: "13530"`, `houseNumberNote: { text: "Nomor rumah menyusul", mockup: true }`. No house number, no Kramat Jati.
- `phone`: `display: "0878-1105-0836"`, `tel: "tel:+6287811050836"`.
- `whatsapp`: `href: "https://wa.me/6287811050836"`, `mockup: true`.
- `maps`: `directions: "https://www.google.com/maps/dir/?api=1&destination=Kopi%20Goen&destination_place_id=ChIJnRo87ZHzaS4RKRVDIdGtPWg"`,
  `embed: "https://maps.google.com/maps?q=Kopi%20Goen%2C%20Jl.%20Munggang%2C%20Balekambang%2C%20Jakarta%20Timur&z=17&output=embed"` (keyless).
- `hours`: seven entries keyed by JS weekday (0 = Minggu): open `"12.00"` except Jumat `"12.30"`, close `"23.00"`;
  display rows grouped as Senin–Kamis / Jumat / Sabtu–Minggu, plus `everyDay: "Buka setiap hari"`.
- `rating`: `{ value: "4,7", count: 275, source: "Google" }` (listing).
- `featured` (5): `{ name, price, desc, visual: "es-kopi-aren" | "havana-frame" | "cappuccino" | "v60" | "kentang", mockup flags }`.
  Es Kopi Aren: name is fact (reviews 3), `price: "Rp 20rb"` and `desc: "Kopi, susu, dan gula aren di atas es."` are mockup.
  Kopi Havana: whole item `mockup: true` (spelling, price Rp 25rb, form unknown). Cappuccino Rp 25rb, V60 Rp 25rb, Kentang Goreng Rp 18rb: mockup.
- `menuGroups` (all mockup): Espresso (Americano, Caffe Latte, Piccolo), Manual brew (Kopi Tubruk, "biji lokal bergiliran"),
  Non-kopi (Matcha Latte, Coklat, Lychee Tea, Teh Tarik), Camilan (Pisang Goreng, Roti Bakar, Indomie Goreng). No prices.
  `priceNote: { text: "Harga contoh, menunggu konfirmasi pemilik.", mockup: true }`.
- `garden`: intro (fact, photos), `calm: { text: "Tenang dan santai, sudut hijau di tengah permukiman.", mockup: true }`,
  `day` and `night` panels each with a short line and a `frame` label ("Foto kebun siang dari pemilik", "Foto kebun malam dari pemilik").
- `reviews` (paraphrases, never quotes or names): four lines with `source` (reviews 3, 3, 4, 2) and `note: "Diringkas dari ulasan Google."`.
- `close`: heading and line, both `mockup: true`.
- `meta`: title "Kopi Goen · Kedai kopi di kebun, Balekambang, Jakarta Timur",
  description "Ngopi di kebun dari siang sampai malam di Jl. Munggang, Balekambang. Buka setiap hari 12.00–23.00."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | Menu, Suasana, Kata mereka, Kunjungi, Hubungi | starter | section-level only |
| Container, `.section`, `.t-*` | all | starter | sizes from `globals.css` variables |
| Draft banner | top | starter if present, else new | Indonesian copy: "Draf: contoh situs untuk Kopi Goen, belum resmi." |
| `Hero` | Hero | new | `100svh`, content anchored bottom; owns the signature timeline (`useGSAP` scoped to the hero) |
| `NightScene` | Hero | new | inline SVG + positioned divs, all `aria-hidden`: two palm trunks (one on phone), staghorn fern, two uplight cones, name wash |
| `Step` | Hero, Hubungi | new | concrete step: `malam-terang` face, 6px `beton-bayang` tread, 3px `lampu` strip under the nosing, riser wash (lampu → transparent, 40px). Carries children (hours, buttons) |
| `TodayHours` | Hero, Kunjungi | new, client | SSR text "Buka setiap hari · 12.00–23.00"; after mount computes Asia/Jakarta weekday and time with `Intl.DateTimeFormat` and shows "Buka hari ini 12.00–23.00" (Jumat 12.30) + "Sedang buka" or "Tutup · buka lagi pukul 12.00/12.30"; highlights today's row in the hours table |
| `Button` | everywhere | new | `a` elements, min-height 48px. Primary: `lampu` fill, `arang` text. Secondary on night: 1.5px `beton` outline, `beton` text. On beton grounds: `arang` fill, `beton` text. Hover overlay via `::after` opacity |
| `Plinth` | Menu | new | SVG concrete cube (beton top, `beton-bayang` side, `malam-terang` front) with round inset light disk in `lampu` and a soft lampu pool behind |
| `DrinkArt` | Menu | new | four inline SVGs: `EsKopiAren`, `Cappuccino`, `V60`, `KentangGoreng`, each `role="img"` with Indonesian `aria-label` (e.g. "Gambar Es Kopi Aren"); flat fills from the palette only |
| `PhotoFrame` | Menu (Havana, bar), Suasana (day, night) | new | dashed 1.5px border, label inside, `data-mockup`; a tiny line drawing (stool + tray table for day, uplit trunk for night, lever handle for bar, cup outline for Havana) so it never reads as a broken image |
| `MenuFeatured`, `MenuList` | Menu | new | 5 + 7 grid at ≥1024px; name + price on one line, price 12px after the name |
| `GardenSplit` | Suasana | new | full-bleed 50/50 at ≥1024px, beton day panel and malam night panel; stacked on phone |
| `Reviews` | Kata mereka | new | 4 + 8 grid, statements separated by 1px `arang` rules at 20% |
| `Visit` | Kunjungi | new | map `iframe` (`loading="lazy"`, `title="Peta lokasi Kopi Goen"`), address, hours table (max 320px wide) |
| `Close` | Hubungi | new | three `Step`s, one button each, lights static (already on) |
| `Footer` | footer | new | `arang` ground |

## React Bits (max 2)
None. Considered and left out:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (Light Rays) | hero background | rejected: rays fall from above and read as generic glow; Kopi Goen's light is pooled uplight from the ground | WebGL (ogl), breaks the no-WebGL budget | n/a |
| (Blur Text / Split Text) | "Kopi Goen" | rejected: the signature is the lights, not the letters; animating the name would compete with it and delay the hero text | GSAP plugin / motion | n/a |
| (Fade Content) | sections | rejected: duplicates the starter `Reveal` | | n/a |
Particles, fireflies and glow cursors stay out (motion-rules 7; nothing like them exists in the shop).

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): lower step strip | load, +0.10s | opacity 0.15 → 1 | 0.2s | power2.out | final state, no motion |
| Lower step riser wash | load, +0.10s | opacity 0 → 1 (wash colour is already 35% lampu) | 0.5s | power2.out | final state |
| Upper step strip + wash | load, +0.25s | as above | 0.2s / 0.5s | power2.out | final state |
| Trunk uplight cones (2 desktop, 1 phone) | load, +0.45s and +0.60s | opacity 0 → 1, scaleY 0.9 → 1, `transform-origin: bottom` | 0.7s | expo.out | final state |
| Name wash (behind "Kopi Goen", max 22% lampu) | load, +0.85s | opacity 0 → 1 | 0.8s | power2.out | final state |
| Status dot (only when open now) | load, +1.20s | opacity 0.3 → 1 | 0.2s | power2.out | final state |
| Section reveal (Menu, Suasana, Kata mereka, Kunjungi, Hubungi) | ScrollTrigger `top 85%`, once | y 20 → 0, opacity 0 → 1 | 0.6s | power2.out | visible, no motion |
| Button hover | pointer | `::after` opacity 0 → 1 | 180ms | ease-out (CSS) | instant |
| Button press | pointer down | scale 1 → 0.98 | 120ms | ease-out (CSS) | none |

The whole hero sequence ends by 1.7s. Text never animates. Light elements get their "off" state
from `gsap.from()` inside `useGSAP` (so with JS off they render on); to avoid an on-off flash, the
hero's light layer may carry a `data-lights="pending"` attribute set by a tiny inline head script
when motion is allowed, styled `opacity: 0.15`, and cleared by the timeline. Add a CSS fallback so a failed script never
leaves the lights dim: `[data-lights="pending"]` runs a zero-length keyframe to full opacity after a
2.5s delay (`animation: lights-on 0s 2.5s forwards`). No loops, no flicker.
Lenis: starter defaults (lerp 0.1, native touch). Desktop nav anchors use `scroll-margin-top`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images ship (no owner photos exist). All art is inline SVG, each piece small (aim under 4 KB).
  Map iframe lazy-loaded below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: focus ring 2px `lampu` with 2px offset on night grounds, 2px `arang` on beton grounds.
Never `lampu` or `pakis` text on `beton`. Text over the name wash stays above 6:1 (wash capped at 22%).
Hours table is a real `<table>` with a caption; today's row also gets `aria-current="date"`.
Scene SVGs `aria-hidden`; drink SVGs and photo frames get Indonesian labels.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design-brief §4–5. The display step uses `white-space: nowrap`; if "Kopi Goen"
overflows at 320 or 390, lower the `vw` coefficient rather than letting it scroll.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
