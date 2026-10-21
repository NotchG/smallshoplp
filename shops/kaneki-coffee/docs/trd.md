# TRD: Kaneki mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. All copy in Bahasa Indonesia, "kamu" register ([MOCKUP]).

Shape (extend the starter's `Item`):
- `shop`: name "Kaneki", descriptor "coffee shop", area "Pondok Kelapa, Duren Sawit", address
  "Jl. Perumkar DKI, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450", phone display
  "0852-1691-8752", `tel:+6285216918752`, WhatsApp `https://wa.me/6285216918752` (`mockup: true`),
  maps listing `https://maps.google.com/?cid=3273226249840288763`, directions
  `https://www.google.com/maps/dir/?api=1&destination=Kaneki&destination_place_id=ChIJX9CUizqNaS4R--M2k-7VbC0`,
  hours `{ open: "07:30", close: "22:00", days: "Senin–Minggu", note: "Buka setiap hari" }`,
  rating `{ value: "4,5", count: 646 }`, landmark `{ text: "Patokan: menyusul dari pemilik", mockup: true }`.
- `hero`: `line` (mockup), `todayLabel` "Buka hari ini".
- `menu.featured`: 7 entries `{ name: Item, price: Item, note: Item, art: "kopiSusu" | "charcoal" | "matcha" | "peachTea" | "croissant" | "dimsum" | "fries" }`.
- `menu.groups`: Kopi / Non-kopi / Makanan, each item `{ name: Item, price?: Item }`; the label "Harga contoh" sits on the list.
- `manualBrew`: lead, body, `beans: { origin, method }[]` (all mockup), plant milk line.
- `suasana`: lead, `inside` and `outside` panels `{ title, text: Item, caption }`, `facts: Item[]`.
- `praise`: intro + 4 `{ title, line }` themes, paraphrased, no names.
- `contact`: line, button labels.

Names and prices are flagged per field: e.g. "Peach tea" is listed fact but its price is mockup;
"Charcoal latte" name and price are both mockup.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Copy into Indonesian: "Draf mockup untuk Kaneki. Beberapa detail masih contoh sampai pemilik mengonfirmasi." |
| Container | all | starter | `--container` 1200px |
| Reveal | 6 sections | starter | one per section content block, never per card |
| SmoothScroll | layout | starter | defaults |
| Glass | Hero, Menu | new | Inline SVG tumbler (viewBox 100×145, tapered), `clipPath` interior, liquid `<g>` (fill, optional top band, 3 ice cubes, surface ellipse, optional fruit slice), rim stroke #C9CCCA, coaster ellipse #302922 + gold ring #B8995A. Props: `fill`, `band?`, `slice?`, `print` (renders "Kaneki" in Pinyon, white, inside the SVG for menu glasses), `animate` (hero only). Hero renders the print as the HTML `<h1>` positioned over the SVG instead |
| Croissant, Dimsum, Fries | Menu, Hero (croissant ≥768) | new | Flat SVGs, fills from design brief §6, `role="img"` + Indonesian `aria-label` |
| Dripper | Seduh manual | new | Flat pour-over cone + glass server in Dinding/Ek on Kanopi, `aria-hidden` |
| PlaceVignette | Suasana | new | `variant="inside" | "outside"`, ≤12 shapes each, 4:3, caption "Ilustrasi · foto asli menyusul", `data-mockup` |
| TrackRail | Hero | new | 2px Tinta line with 5–7 small spot shapes, full container width, `aria-hidden` |
| OpenStatus | Hero | new (client) | SSR text "Buka setiap hari 07.30–22.00". After mount, compute with `Intl.DateTimeFormat(..., { timeZone: "Asia/Jakarta" })`: "Sedang buka" (Kanopi dot) or "Sudah tutup · buka lagi 07.30" (Gerinda dot). No animation |
| Button | Hero, Kunjungi, Hubungi | new | `<a>`; primary Kanopi/Dinding, secondary 1.5px Tinta outline (Dinding outline on Kanopi fields); min height 48px; hover overlay, press scale |
| MapEmbed | Kunjungi | new | `<iframe src="https://www.google.com/maps?q=Kaneki,+Jl.+Perumkar+DKI,+Pondok+Kelapa,+Jakarta+Timur&output=embed" loading="lazy" title="Peta lokasi Kaneki">` in a Beton frame, 4:3 desktop / 1:1 phone, with a text link to the listing under it |
| Hero, MenuAndalan, SeduhManual, Suasana, KataMereka, Kunjungi, Hubungi | page | new | One file each in `components/sections/` |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | | The signature moment is the custom glass fill. A React Bits text effect would fight the script wordmark, and the starter's Reveal covers the sections. A calm, coffee-first café is better served by zero | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): Glass liquid group | load (CSS `@keyframes pour`, `animation-fill-mode: both`) | `transform: translateY(102%) → translateY(0)`, `transform-box: fill-box` | 1.1s, delay 0.15s | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none`, final state, no motion |
| Hero: surface ellipse inside the liquid group | load (`@keyframes settle`) | `rotate(-4deg) → rotate(0)`, `transform-origin: center`, `transform-box: fill-box` | 1.1s, delay 0.15s | same | `animation: none` |
| Section content blocks (6) | ScrollTrigger `top 85%`, once | opacity 0 → 1, y 20 → 0 (starter Reveal) | 0.7s | `power2.out` | skipped, final state |
| Buttons | hover / press (CSS) | `::after` overlay opacity 0 → 0.12; `scale(0.98)` | 200ms / 150ms | ease-out | instant |

No other animation: menu glasses, illustrations, the status dot and the map are static. The h1
is visible text from the first paint; nothing is hidden waiting for JS.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Pinyon Script 400; Zen Kaku
  Gothic New 400/500/700 (`subsets: ["latin"]`; fall back to M PLUS 2 if the subset build fails).
- No preloaders, no video backgrounds, no WebGL. All illustrations inline SVG, no raster images.
- Map iframe `loading="lazy"`, below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Hero h1 "Kaneki" is white on liquid #9A7550 (4.2:1, large text). Check it at 390, 768 and 1440.
- Focus ring: 2px Kanopi outline, 3px offset on light grounds; Dinding on Kanopi fields.
- Illustrations: product SVGs `role="img"` with labels such as "Ilustrasi es kopi susu dalam gelas Kaneki"; decorative rail, dripper and coaster are `aria-hidden`.
- `lang="id"`; landmarks `header` (hero), `main`, `footer` (inside Hubungi); one h1, h2 per section, h3 for groups and panels.

## SEO / meta
Title and description from `content.ts`: title "Kaneki · coffee shop di Pondok Kelapa, Jakarta Timur",
description "Kopi seduh manual, butter croissant, dan tempat tenang untuk kerja di Jl. Perumkar DKI, Pondok Kelapa. Buka setiap hari 07.30–22.00."
`noindex` stays on (starter default) until the owner approves. `<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Add `--glass-w: clamp(13.5rem, 9rem + 18vw, 25rem)`, `--dur-hero: 1.1s`,
  `--ease-pour: cubic-bezier(0.16, 1, 0.3, 1)` to `:root`.
- `@theme` colours: `dinding`, `tinta`, `kanopi`, `ek`, `beton`, `gerinda` (design brief §3);
  fonts `--font-script` (Pinyon) and `--font-body` (Zen Kaku Gothic New).
- `.t-display` uses `--font-script`, leading 1.1; override the starter's `--leading-display`.
- Gutter 20px, 40px from 768; section-y 64px, 112px from 768.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
