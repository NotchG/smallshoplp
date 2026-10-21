# TRD: Kawa Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. Flag fields separately where only part
of an item is guessed (e.g. a sleeve's name is real but its price is [MOCKUP]).

```ts
// sketch of the shape, not literal code
shop: { name: "Kawa Coffee", listingName: "Kawa Coffee Jakarta", type: "Coffee shop",
  address: "Jl. Raya Mabes Hankam No.3, Bambu Apus, Kec. Cipayung, Jakarta Timur 13890" /* house no. flagged */,
  area: "Cipayung, Jakarta Timur", phone: "0878-8824-2274", tel: "+6287888242274",
  whatsapp: { url: "https://wa.me/6287888242274", mockup: true },
  placeId: "ChIJxTQfVbPtaS4R-S36fWUTRs0",
  mapsUrl: /* googleMapsUri from raw.json */, directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kawa%20Coffee%20Jakarta&destination_place_id=ChIJxTQfVbPtaS4R-S36fWUTRs0",
  hours: [{ days: "Senin–Jumat", time: "08.00–22.00" }, { days: "Sabtu–Minggu", time: "08.00–23.00" }],
  hoursByDay: { 0: "08.00–23.00", 1..5: "08.00–22.00", 6: "08.00–23.00" }, payment: { text, mockup: true } }
hero: { line, tone, photo: { src, alt, caption } }
menu: { intro: Item /* mockup */, sleeves: Sleeve[6], sideboard: { groups: Group[3], note: Item /* mockup */ } }
// Sleeve = { no: "01", name: Item, price: Item /* mockup */, note?: Item, ground: Token, art: ArtKey, alt: string }
floors: { label: string; text: Item }[3]   // Lantai 2, Lantai 1, Depan
praise: Item[4]                            // paraphrased, never quoted, never attributed
contact: { closing: Item }
```
Exact copy, sources and flags are in `prd.md` "Sections and content". Names flagged [MOCKUP]:
"Es Kopi Signature Kawa", "Nasi Goreng Kawa", every price, every Sisi B item except
Cappuccino, Mie goreng and Dimsum, the menu intro, the tax/service note, payment, WhatsApp.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf situs untuk Kawa Coffee. Beberapa detail masih contoh sampai pemilik mengonfirmasi." |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | full-bleed grounds (kapur, arang band, botol, arang dusk) go on the parent `<section>` |
| Reveal | Menu (×2 blocks), Tempat, Kata mereka, Kunjungi | starter | section-level only |
| TopRow | hero | new | area name left; anchor links `#menu`, `#tempat`, `#lokasi` (desktop), "Lokasi" only on phone |
| SignLockup | hero | new | the `<h1>`: "Kawa" and "Coffee" spans (uppercase via CSS so it reads "Kawa Coffee"), disc below |
| SignDisc | hero (animated); Sisi B and Hubungi (static) | new | `size`, `animate` props; face + halo spans, `aria-hidden`; owns the signature timeline |
| TodayHours | hero | new, client | SSR/no-JS text "Buka setiap hari mulai 08.00"; after mount it shows "Buka hari ini 08.00–22.00/23.00" using the weekday in `Asia/Jakarta` |
| HeroWindow | hero | new | `<img>` of owner-1, 16:9 stacked, 4:3 `object-fit: cover` from 1024px, 8px arang frame on 3 sides, bleeds right |
| Sleeve | menu | new | `<li><figure>`: square art, kayu ledge, `<figcaption>` with no + name, price, note |
| art/MontBlanc, EspressoRock, EsKopiSignature, NasiGoreng, ChickenKatsu, DonatKampung | menu | new (inline SVG) | per design brief §6; `role="img"`, aria-label "… (ilustrasi)" |
| Sideboard | menu | new | full-bleed arang band, three `<ul>` groups, footnote |
| HouseElevation | tempat | new (inline SVG) | two floors, balcony rail, lit windows, door, static disc, carport + car |
| FloorRows | tempat | new | `<dl>`: Lantai 2 / Lantai 1 / Depan, same order as the drawing |
| Praise | kata mereka | new | `<ul>` of 4, lampu dot markers, kapur rules |
| HoursList | kunjungi | new | `<dl>`, 9rem day column |
| MapEmbed | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Kawa Coffee">`; src `https://maps.google.com/maps?q=Kawa%20Coffee%20Jakarta%2C%20Jl.%20Raya%20Mabes%20Hankam%2C%20Bambu%20Apus%2C%20Cipayung&z=16&output=embed` |
| ActionButton | hero, hubungi | new | variants: `primary-light` (botol/beton), `primary-dark` (lampu/arang), `outline-light`, `outline-dark`; 48px tall; hover overlay + press scale |
| Footer | footer | new | draft line + shop line |

## React Bits (max 2)
None. The signature moment is a two-step opacity/scale tween on a CSS halo, which the starter's
GSAP already does well. Every React Bits piece that fits the motif would push the calm room
toward a template or a show:

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | | | | |
| Considered: Circular Text | disc | rejected: the rotating circular badge is the coffee-site cliché, and a loop breaks the calm | | |
| Considered: Shiny Text | KAWA | rejected: a sheen fights the flat, small sign lettering the brief asks for | | |
| Considered: Light Rays / Lightfall | hero background | rejected: WebGL rays overstate one small lamp; fails the perf budget and "no background noise" | | |
| Considered: Fade Content / Animated Content | sections | rejected: duplicates the starter `Reveal` | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero disc halo (signature moment) | load, after hydration, delay 0.2s, once | step 1: opacity 0→0.55, scale 0.94→0.97; step 2: opacity →1, scale →1 | 0.35s + 0.8s (`duration.hero` 1.15) | `power2.out` both steps | final state, no motion: halo lit from first paint |
| Halo pre-state (CSS) | inline head script adds `html.js` | `.js .disc-halo { opacity: 0 }` only inside `@media (prefers-reduced-motion: no-preference)`; CSS failsafe animation sets opacity 1 at 2.5s | n/a | n/a | rule not applied, so it's lit |
| Menu heading block; menu sleeve grid (one block); Tempat; Kata mereka; Kunjungi | ScrollTrigger `top 85%`, once (starter `Reveal`) | opacity 0→1, y 20→0 | 0.7s | `power2.out` | static |
| ActionButton, links | hover / focus-visible / press | `::after` overlay opacity 0→0.12; press `scale(0.98)` | 180ms / 150ms | ease-out (CSS) | instant (starter global rule) |

Nothing else animates: no text effects, no sleeve hovers, no parallax, no animated map.
Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here: Archivo only (variable, `wdth` axis).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- `owner-1.jpg` is 1.3 MB. Ship it resized into `site/public/img/`: `kopi-susu-1600.jpg` (≤ 250 KB) and
  `kopi-susu-800.jpg` (≤ 90 KB), e.g. `sips -Z 1600 -s formatOptions 75`. Use `srcset`/`sizes`, explicit
  width/height, `fetchpriority="high"`, no lazy loading on the hero. Customer photos never get copied.
- The map iframe is lazy-loaded and below the fold. All illustrations are inline SVG with no raster assets.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Contrast pairs are in design brief §3. Never use batu text on kapur, or lampu text on a light ground.
- Focus ring: 2px outline, 3px offset. Arang on beton/kapur, beton on botol, lampu on arang.
- `<html lang="id">`; skip link "Langsung ke isi" to `#konten`.
- owner-1 alt: "Kopi susu panas dengan latte art daun dan hati, di cangkir hitam bertepi putih di atas meja beton."
- Sleeve SVGs: `role="img"` + aria-label, e.g. "Mont Blanc (ilustrasi)". The elevation:
  "Ilustrasi bangunan Kawa Coffee: dua lantai dengan balkon, dan carport untuk parkir." Discs are `aria-hidden`.
- Action buttons are links (`<a>`) whose visible text says what they do; WhatsApp and Telepon open in place, Petunjuk Arah and the map link open in a new tab with `rel="noopener"`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Kawa Coffee · Kopi di Cipayung, Jakarta Timur"
- Description: "Kawa Coffee di Jl. Raya Mabes Hankam, Bambu Apus, Cipayung. Kopi dan makanan rumahan,
  wifi kencang, parkir luas. Buka setiap hari mulai 08.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `next/font/google`: `Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" })`
  (no fixed `weight`, so the variable font loads). Set `--font-display` and `--font-body` to it in `@theme`.
- Width via `font-variation-settings` in small classes (`.w-sign` "wdth" 125, `.w-head` 112, `.w-body` 100).
  Each class sets the whole `font-variation-settings` value. If the axis doesn't render, keep
  normal width and raise sign tracking to 0.06em.
- Values for `:root`: `--container: 1200px; --gutter: 20px; --section-y: 64px;` and from
  1024px `--gutter: 40px; --section-y: 112px;`. Step values from design brief §4, `--leading-display: 0.9`.
- Hero window bleed: the window column extends with negative right margin equal to
  `calc((100vw - min(100vw, var(--container) + 2 * var(--gutter))) / 2 + var(--gutter))`, computed in a
  CSS class rather than an arbitrary value. Hide horizontal overflow on the hero section only, never on body.
- Grounds: hero and Tempat `bg-beton`; menu `bg-kapur` with the sideboard `bg-arang` full-bleed;
  Kata mereka `bg-botol`; Kunjungi, Hubungi, footer `bg-arang`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
