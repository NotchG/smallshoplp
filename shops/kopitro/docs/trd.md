# TRD: Kopitro mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Extend the starter's types; keep every string in Bahasa Indonesia.
- `shop`: `name: "Kopitro"`, `tagline: "Manual Brew"`, `type: "Kafe"`, `address` (full, listing),
  `addressShort: "Jl. Slamet Riyadi No.9-21, Matraman"`, `phone: "0815-1084-3658"`,
  `phoneHref: "tel:+6281510843658"`, `whatsapp: { href: "https://wa.me/6281510843658", mockup: true }`,
  `mapsUrl` (the `googleMapsUri` from raw.json),
  `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kopitro&destination_place_id=ChIJOVJoKkz1aS4RYqZaX6ZNEkA"`,
  `mapEmbedUrl: "https://www.google.com/maps?q=Kopitro%2C%20Jl.%20Slamet%20Riyadi%20No.9-21%2C%20Matraman%2C%20Jakarta%20Timur&output=embed"`,
  `rating: { value: "4,7", count: 316 }` (listing).
- `hours`: seven entries in Indonesian order, Senin first. `{ day: "Senin", jsDay: 1, open: null }`
  then Selasa…Minggu with `open: "19.00", close: "02.00"`. `jsDay` follows JavaScript (0 = Minggu).
- `hero`: `line` (mockup), `statusFallback: "Selasa–Minggu 19.00–02.00 · Senin tutup"`.
- `menu: MenuItem[]` with `{ id, name, nameMockup?, note, price, priceMockup: true, art, wide? }`.
  `art` is one of `v60` | `vietnam` | `eskopi` | `roti` | `kentang`; only `v60` is `wide`.
- `methods: Item[]` (V60, Vietnam Drip sourced; Japanese iced, French press, Kopi Tubruk mockup),
  `beans: Item[]` (all mockup), `nightFacts: Item[]` (live music mockup), `praise: Item[]` (paraphrased, never named).
- `copy`: banner text, section headings, intros, footnote, close line (each with its `mockup` flag per the PRD).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | 2–7 | starter | Section-level only; one per content block |
| Container | all | starter | `--container` 1200px |
| MockupBanner | top | starter | Text replaced with the PRD's Indonesian banner line |
| SmoothScroll | global | starter | Defaults |
| Button | hero, 6, 7 | new | Variants: `solid-kayu` (on malam), `solid-malam` (on kayu), `outline` (spanduk or malam line). Min height 48px. Hover overlay via `::after` opacity |
| Rail | top of each kayu field | new | 12px malam band, 1px baja line on top; `aria-hidden` |
| WoodField | hero counter + menu, close | new | Section wrapper with kayu ground and the static plank SVG as `background-image` (inline data URI, < 4 KB) |
| Hero | 1 | new | Name, red shape, tagline, line, BarScene, OpenStatus, buttons, short address. Two columns (name cols 1–7, scene cols 8–12) only from 1280px; stacked below |
| BarScene | 1 | new | Inline SVG: kettle, V60 on carafe, faceted glass, clip-top jar (jar hidden < 768px). Carafe liquid `#pour-liquid` inside `clipPath`; stream `#pour-stream` (opacity 0); drop `#pour-drop`. Owns the pour timeline |
| OpenStatus | 1, 6 | new, client | Jakarta-time status line and today's row (logic below). Renders `statusFallback` on the server and with JS off |
| MenuArt | 2 | new | Five inline SVGs (`V60Berdua`, `VietnamDrip`, `EsKopiSusu`, `RotiBakar`, `KentangGoreng`), `role="img"` + `aria-label`, `vector-effect: non-scaling-stroke` |
| MenuGrid | 2 | new | 6-column grid at ≥ 1024 (V60 span 2), 2 columns below; shared 2px malam shelf line under the art row |
| BrewBoard | 3 | new | Statement column + two hairline lists (Metode, Contoh biji malam ini) |
| NightFacts | 4 | new | Statement + facts list; `RoadDashes` (static SVG, full-bleed, `aria-hidden`) at the foot |
| Praise | 5 | new | Rating text + themes list; no quote marks, no stars, no names |
| Visit | 6 | new | Address, HoursTable (today highlighted via OpenStatus hook), directions button, map `iframe` |
| ContactClose + Footer | 7 | new | Number, three buttons; footer on malam |

## React Bits (max 2)
None. Reasons, after browsing reactbits.dev:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The one moment worth authoring is the pour. It's a carafe-shaped `clipPath` and a GSAP timeline of about 30 lines, specific to the photo-3 carafe. The closest candidates miss: Slosh Gauge is a dashboard tank, and bending it into a carafe would be a costume, likely animating shape rather than transform. Text effects (Split Text, Shiny Text, Rotating Text) would add a second moment or a loop on the name. Scroll Velocity, a marquee and Hyperspeed are the decorative traffic loops this page should avoid. | 0 KB | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): `#pour-stream` | mount + 0.2 s | opacity 0 → 1, hold, → 0 at 1.4 s | 0.15 s in, 0.2 s out | `power1.out` | stays at opacity 0 |
| Hero (signature moment): `#pour-liquid` | mount + 0.2 s | `gsap.from` yPercent 100 → 0 (inside the carafe `clipPath`; `transform-box: fill-box`) | 1.2 s | `sine.inOut` (`ease.pour`) | final state: filled to ~35% |
| Hero (signature moment): `#pour-drop` | 1.4 s | y 0 → 36, opacity 1 → 0 | 0.3 s | `power2.in` | not shown |
| Section content (2–7) | ScrollTrigger "top 85%", once | autoAlpha 0 → 1, y 20 → 0 | 0.6 s | `power2.out` | static, visible |
| Buttons, links | hover / focus-visible | `::after` overlay opacity 0 → 1 (spanduk 12% on dark buttons, malam 10% on light) | 0.18 s | ease-out (CSS) | instant |
| Buttons | active | translateY(1px) | 0.12 s | ease-out (CSS) | none |

Hero text, OpenStatus and buttons are never animated. The pour runs once per page load in a
`useGSAP` scope on BarScene, and its timeline is killed on unmount. No ScrollTrigger in the hero.
Lenis: starter defaults (lerp 0.1, native touch). `lib/motion.ts` gets `duration.hero = 1.4`,
`duration.reveal = 0.6`, `duration.press = 0.18`, and `ease.pour = "sine.inOut"`.

## Open-status logic (OpenStatus)
Read the current time in `Asia/Jakarta` with `Intl.DateTimeFormat(..., { timeZone: "Asia/Jakarta" })`.
Every open day runs 19:00 to 02:00 the next day. Monday has no opening.
1. If hour < 2 and **yesterday** was an open day → "Buka sekarang · sampai 02.00".
2. Else if hour ≥ 19 and today is an open day → "Buka sekarang · sampai 02.00".
3. Else if today is an open day → "Buka malam ini 19.00–02.00".
4. Else (Monday from 02:00) → "Senin tutup · buka lagi Selasa 19.00".
(Tuesday 00:00–02:00 falls to rule 3, because Monday night is closed.) Compute in `useEffect`, so
the static HTML always carries `statusFallback`. Today's row in HoursTable is the Jakarta
calendar day, with a "hari ini" tag 8px after the time.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap` (Sofia Sans Extra Condensed, Sofia Sans).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images at all: every illustration is inline SVG (all together < 40 KB). The map
  `iframe` is `loading="lazy"`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Focus ring: 3px solid kayu on malam, 3px solid malam on kayu, offset 3px.
- `html lang="id"`; one `h1` ("Kopitro"), h2 per section, h3 per product.
- BarScene: `role="img"`, `aria-label="Ilustrasi bar Kopitro: ketel leher angsa, V60 di atas teko kaca, gelas kopi dan toples biji kopi"`.
- Map: `title="Peta lokasi Kopitro"`; the address and directions link sit beside it as text.
- Prices are text, not images; `font-variant-numeric: tabular-nums` for prices, hours and phone.
- WhatsApp and Telepon buttons have visible text labels, not icons alone.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Kopitro · Manual Brew di Matraman"
- Description: "Kopi seduh manual di pinggir Jl. Slamet Riyadi, Matraman, Jakarta Timur. Buka Selasa–Minggu 19.00–02.00, Senin tutup."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-malam`, `--color-spanduk`, `--color-kayu`, `--color-merah`, `--color-baja`,
  `--color-seduh`; `--font-display` (Sofia Sans Extra Condensed var), `--font-body` (Sofia Sans var).
- `:root`: values from design brief §4–5 (`--container: 1200px`, `--gutter: 20px` → 40px at 768,
  `--section-y: 64px` → 112px at 768, the five `--step-*` clamps, `--leading-display: 0.9`,
  `--leading-head: 1.05`).
- Add `.t-label` (step-small, caps, 600, tracking 0.16em) and `.on-dark` (body weight 430, tracking
  0.01em, line height 1.6) helpers in `globals.css`, not as arbitrary values.
- `.mockup-banner` restyled: 13px spanduk text on malam with a 1px baja bottom hairline, so it
  reads as a note above the hero, not as part of the KOPITRO banner. It never uses kayu or merah.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
