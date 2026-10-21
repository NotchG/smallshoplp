# TRD: Kedai Malabar mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. Fonts by `next/font/google`: Jost (variable, latin) and Yellowtail (400, latin).

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep it flat and typed):
- `shop`: name "Kedai Malabar", subline "Roti & Kopi", address (listing), phone "0816-833-844",
  `tel: "+62816833844"`, `whatsapp: "https://wa.me/62816833844"` (mockup), `instagram: null` (mockup),
  `mapsUrl: "https://maps.google.com/?cid=7653992045239536017"`,
  `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Malabar&destination_place_id=ChIJdRMZ9rfzaS4RkQkrajZxOGo"`,
  `mapEmbed: "https://maps.google.com/maps?q=Kedai%20Malabar%2C%20Jl.%20Cipinang%20Jaya%20Raya%20No.27B%2C%20Jakarta%20Timur&z=16&output=embed"`,
  rating `{ value: "4,6", count: 985 }` (listing).
- `hours`: 7 entries indexed 0 = Minggu … 6 = Sabtu, `{ day, open: "10:00", close: "22:00" }` exactly as
  raw.json periods (Rabu 12:00–22:00, Jumat 13:00–23:00, Sabtu 10:00–23:00). Display with a dot: "10.00–22.00".
- `hero.line` (mockup), `dishes[]` (5, see design brief §6), `menu` groups (Roti, Kopi, Non-kopi,
  Makan) with optional `price`, `night.facts[]` (4), `praise[]` (4), `contact` lines.
- Prices only where brief.md gives one (6 items). No other prices.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top of page | starter | text "Ini contoh tampilan, belum situs resmi Kedai Malabar"; must not cover hero buttons at 390 |
| Container | all | starter | `--container` 75rem |
| Reveal | Menu, Malam, Kata mereka, Kunjungi, Hubungi | starter | section-level only, never per tile or per line |
| Garland | night band (hero top); Malam section (static) | new | one inline SVG, viewBox 1440×80, 3 swags, 18 bulbs; `preserveAspectRatio="xMidYMid slice"`; each bulb = dim layer + lit layer + glow; `animated` prop for the hero only; `aria-hidden` |
| Awning | under the night band; top of Kunjungi kami | new | striped valance band, CSS `repeating-linear-gradient` (Arang/Kapur, 24px stripes desktop, 18px phone), straight hem with a 4px Arang shadow line; `aria-hidden` |
| SignName | hero | new | `<h1>` "Kedai Malabar": "KEDAI" span + "MALABAR" span (uppercase via CSS), `<p>` "Roti & Kopi" right-aligned under the end of MALABAR |
| OpenStatus | hero; Kunjungi (today row) | new, client | computes today and open/closed in `Asia/Jakarta` via `Intl.DateTimeFormat`; SSR/JS-off text "Buka setiap hari · lihat jam lengkap" linking to `#kunjungi`; reserves its height (no layout shift) |
| ArchWindow | hero | new | pre-cropped owner photo in an arch: `border-radius: 999px 999px 0 0` on the frame, 10px Kapur frame; no clip-path polygons |
| TileStrip + DishTile | Menu andalan | new | Arang tiles with Terakota/Kapur corner motifs; one SVG per dish; caption under each tile |
| Dish SVGs | Menu andalan | new | `RotiNougat`, `EsKopiTubruk`, `RotiBakarCoklatKacang`, `KopiSusuPanas`, `LontongSayur`, flat, plan view, palette only; `role="img"` + `aria-label` |
| MenuList | Menu andalan | new | 4 groups; price inline after the name (gap 12px), never right-pinned |
| NightFacts | Malam di Malabar | new | 4 rows, small lit-bulb bullet (Lampu) |
| PraiseGrid | Kata mereka | new | 4 statements; no quote marks, no stars, no names |
| HoursTable | Kunjungi kami | new | `<table>` max-width 22rem; today row bold + "hari ini" tag; Rabu/Jumat open times in Bata |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Kedai Malabar">` over a Kapur block showing the address, so a blocked map still looks finished |
| ActionButton | Hero, Kunjungi, Hubungi | new | `<a>` styled as button, min 48px tall; variants `lampu` (filled) and `outline` |

## React Bits (max 2)
None. Considered and declined:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Masked Heading / Split Text | hero name | Declined: a text effect on "KEDAI MALABAR" competes with the string-light signature moment, and the façade letters read best still | n/a | n/a |
| Count Up | rating | Declined: animating "4,6" is decoration with no job | n/a | n/a |
| Carousel / Circular Gallery | photos | Declined: only one owner photo exists | n/a | n/a |
| Light Rays / Particles (backgrounds) | night band | Declined: WebGL for a glow that six SVG circles do better and lighter | n/a | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): Garland bulbs "Lampu menyala" | load, 0.15s delay | each bulb's lit layer + glow: opacity 0→1; lit core scale 0.85→1 (transform-origin centre); left to right | 0.4s per bulb, stagger `{ amount: 0.9 }` across all bulbs; whole sequence ≈ 1.45s | `power2.out` | all bulbs lit, static |
| Hero status bulb (next to "Buka sekarang") | end of the garland timeline (position "-=0.1") | opacity 0→1, scale 0.85→1; only when open now (closed = dim, no animation) | 0.4s | `power2.out` | final state |
| Hero text, buttons, arch photo | none | none: visible at first paint | n/a | n/a | n/a |
| Section reveals (5 sections) | ScrollTrigger `start: "top 85%"`, `once: true` | opacity 0→1, y 20→0 on the section's inner Container | 0.6s | `power2.out` | visible, no motion |
| ActionButton hover / press | `:hover` / `:active` (CSS) | translateY(-2px) / scale(0.98); a highlight pseudo-element opacity 0→0.12 | 180ms / 150ms | `cubic-bezier(0.16, 1, 0.3, 1)` | instant state change, no transform |
| Malam garland | none | static, all lit | n/a | n/a | n/a |

Implementation: `useGSAP` with a scope ref per component. Bulbs are lit in markup; the timeline
uses `gsap.from` inside `useGSAP` (layout effect), so JS-off and reduced motion show lit bulbs.
Skip the timeline entirely under `prefers-reduced-motion: reduce`.

Lenis: starter defaults (lerp 0.1, native touch).

Motion tokens to add in `lib/motion.ts`: `garland: { delay: 0.15, bulb: 0.4, staggerAmount: 0.9, ease: "power2.out" }`.
Keep the starter's reveal tokens if they match (0.6s, 20px, ease-out); otherwise set them to these.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Jost (all text) and Yellowtail (one word).
- Hero photo: `public/img/teras-malam.webp`, cropped from `photos/owner-1.jpg` at x 380, y 60, 540 × 720
  (3:4), quality ~80, target under 90 KB; `fetchPriority="high"`, explicit width/height.
- Map iframe lazy, below the fold. No preloaders, no video, no WebGL.
- Dish illustrations are inline SVG, each under ~6 KB; no raster food images.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Focus ring 3px, offset 3px: Kapur on Bata and Tegel, Lampu on Arang, Arang on Kapur.
- Lampu (amber) is never text on Kapur. On Bata it's only a button fill (with Arang text) or graphics.
- Arch photo alt: "Teras Kedai Malabar di malam hari: lampu gantung, kanopi garis hitam-putih dan dinding bata."
- Dish SVG labels: "Ilustrasi Roti Nougat", and so on. Garland and Awning are `aria-hidden`.
- H1 reads "Kedai Malabar" (not letter-spaced into separate spans). One h2 per section.
- Hours as a real `<table>` with `<th scope="row">` day names.

## SEO / meta
Title "Kedai Malabar · Roti & Kopi di Cipinang Jaya, Jatinegara". Description: "Roti bakar, kopi
tubruk dan teras malam di Jl. Cipinang Jaya Raya No.27B, Jakarta Timur. Buka setiap hari."
Both from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4–5. "MALABAR" gets `white-space: nowrap` and line-height 0.9;
verify it fits at 320, 390, 1024 and 1440.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
