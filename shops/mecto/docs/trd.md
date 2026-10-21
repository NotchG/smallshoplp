# TRD: Mecto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extends the starter's `shop`, `hero`, `products`, `praise`):
- `shop`: `name: "Mecto"` (mockup: spelling), `type: "Kafe"`, `address` (full listing address),
  `addressShort: "Jl. Raya Kalimalang, Duren Sawit"`, `phone: "0819-4411-3955"`,
  `phoneHref: "tel:+6281944113955"`, `whatsappHref: "https://wa.me/6281944113955"` (mockup),
  `directionsHref: "https://www.google.com/maps/dir/?api=1&destination=Mecto&destination_place_id=ChIJa9-Yc-rzaS4Rj6EivhLIGTs"`,
  `mapsHref: "https://maps.google.com/?cid=4258654905480421775"`,
  `mapEmbedSrc: "https://maps.google.com/maps?q=Mecto%2C%20Jl.%20Raya%20Kalimalang%2C%20Duren%20Sawit%2C%20Jakarta%20Timur&z=16&output=embed"`,
  `instagram: null` (mockup; render the button only when set),
  `hours`: seven rows `{ day: "Senin", jsDay: 1, open: "07.00", close: "23.00" }` … Jumat/Sabtu/Minggu close `"00.00"`.
- `hero`: `line`, `hoursFallback: "Buka setiap hari mulai 07.00"`.
- `menu`: `featured` (Nasi Goreng, image, price mockup), `items` (Nachos, Buttermilk Chicken,
  Kopi Gula Aren; each `name`, `price` mockup, `art: "nachos" | "chicken" | "kopi"`, `nameMockup`
  on Kopi Gula Aren), `more` (four "Juga ada" rows, all mockup), `priceNote`.
- `dayParts` (Pagi, Siang, Malam), `spaces` (three zones), `amenities` (four; the Wi-Fi line mockup),
  `rating: { value: "4,7", count: 507 }`, `praise` (four paraphrased themes, no names),
  `closing`, `banner`, `footer`.
All strings in Bahasa Indonesia exactly as in the PRD's sections table.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | menu list, hours, spaces, comfort, praise, visit | starter | section-level only |
| Container | all | starter | `--container` 1200 |
| SmoothScroll | layout | starter | defaults |
| MockupBanner | layout | starter | text replaced with the Indonesian banner from content.ts |
| TopBar | hero (≥1024 only) | new | address left; anchors `#menu #jam #tempat #lokasi`; WhatsApp button |
| GableFrame | hero, menu | new | wraps an `<img>`; `clip-path` gable polygon from the design brief; props `aspect`, `lit` (LED overlay), `edge` (static 2px `baja` roof line) |
| LedEdges | inside GableFrame (hero) | new, client | SVG overlay, two roof paths + blurred twin; owns the signature timeline via `useGSAP` |
| TodayHours | hero, visit table | new, client | today's weekday in `Asia/Jakarta` via `Intl.DateTimeFormat`; SSR/no-JS shows `hoursFallback`; same line height both states |
| DishArt | menu | new | three inline SVGs (`nachos`, `chicken`, `kopi`), `role="img"` + Indonesian `aria-label`, "ilustrasi" caption |
| MenuSection | menu | new | featured photo + item rows + "Juga ada" |
| DayBeam | hours | new | horizontal ≥1024, vertical below; ticks as real text |
| SpacesStrip | spaces | new | three geometric SVG elevations on one ground line, `aria-hidden`, text beside each |
| Amenities, Praise, Visit, Contact, Footer | as named | new | rules, not cards |

## React Bits (max 2)
None.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | The signature is the custom LED switch-on, drawn from Mecto's ceiling; any React Bits effect would compete with it. Checked and rejected: Split Text / Blur Text on "Mecto" (a second hero moment), Rotating Text for "ngopi / makan / kerja" (loops, breaks the run-once rule), Count Up on 4,7 (the big-number template), carousels and galleries (only two owner photos), every background (Mecto's look is its materials, not an effect). | 0 | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero LED edges (signature moment) | load, once | `x` transform of two SVG mask rects (each from its eave side to 0) revealing the lit `kuning` roof lines | 0.9s, start 0.15s | `expo.out` | final state: lines lit, no movement |
| Hero LED glow | load, once, after the sweep | opacity 0 → 0.7 of the blurred twin (static 8px blur, bounded to the SVG) | 0.5s, start 0.6s | `power2.out` | glow at 0.7 from the start |
| Section blocks (menu list, hours beam + blocks, spaces strip, comfort grid, praise grid, visit) | enter viewport (`top 85%`), once | opacity 0 → 1, y 20 → 0 | 0.7s | `power2.out` | final state, no motion |
| Buttons | hover / press | `translateY(-2px)` + pseudo-element shadow opacity; press `scale(0.98)` | 150ms | ease-out (CSS) | colour and focus only |
| Text links | hover / focus | underline bar `scaleX(0.6 → 1)` + opacity | 180ms | ease-out (CSS) | underline shown, no motion |

The default CSS state of the LED lines is lit, so no-JS and failed-JS pages show the finished hero.
Use `gsap.fromTo` inside `useGSAP` with a scope ref, so the start state is set before paint and the
timeline dies with the component. Nothing else in the hero animates: photo, name, line, hours and
buttons render at their final state from first paint.
Lenis: starter defaults (lerp 0.1, native touch).
Motion tokens: add `led = { start: 0.15, sweep: 0.9, glowStart: 0.6, glow: 0.5, glowOpacity: 0.7 }`
to `lib/motion.ts`; keep the starter's other values (`ui` may go to 0.2).

## Images
- `public/img/ruang-dalam.jpg`: owner-1.jpg cropped to x 600–1600, y 0–860 (1000×860, no guests,
  no flower stand), JPEG q80; plus a 700px-wide version for `srcset`. Hero `<img>` gets
  `fetchpriority="high"`, explicit width/height, no lazy loading. Alt: "Ruang dalam Mecto: plafon
  kayu beratap pelana dengan lampu LED, dinding beton, dan halaman berdinding kuning di balik kaca."
- `public/img/nasi-goreng.jpg`: owner-2.jpg resized to 800×1000 plus 480×600, `loading="lazy"`.
  Alt: "Nasi goreng dengan telur mata sapi, kerupuk, acar, dan cabai hijau dalam mangkuk keramik abu-abu."
- Never copy `photo-*.jpg` into the site. Make the crops with any local tool (PIL, sips).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here: one (Gantari).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Map iframe: `loading="lazy"`, `title="Peta lokasi Mecto"`, below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: `lang="id"`; `kuning` is never text on `beton`/`semen`; secondary text uses the
ground-derived tints from the design brief; the hours table is a real `<table>` with today's row
marked `aria-current="date"`; the beam's times are text, not pixels; drawings are `aria-hidden`
with the zone text beside them; dish illustrations carry `role="img"` and an `aria-label`;
skip link "Langsung ke konten" to `#konten`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "Mecto · Kafe di Jl. Raya Kalimalang, Duren Sawit"; description "Kafe Mecto di Duren Sawit,
Jakarta Timur. Buka setiap hari 07.00–23.00, Jumat–Minggu sampai 00.00." Banner text in Indonesian.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: the design brief §4 and §5. Colours into `@theme` as `--color-beton`, `--color-semen`,
`--color-baja`, `--color-kuning`, `--color-kayu`, `--color-abu`, plus `--color-on-kuning` (#4A3B12)
and `--color-on-baja` (#A9A59C). Font: `--font-display` and `--font-body` both map to Gantari.
Gable clip-path as a class (`.gable`) in `globals.css`, not inline arbitrary values.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
