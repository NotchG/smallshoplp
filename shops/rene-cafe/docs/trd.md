# TRD: Rene Cafe mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No dependencies added (React Bits: none, see below).

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item`):
- `shop`: `name` "Rene Cafe", `type` "Kafe", `place` "Pondok Ranggon, Jakarta Timur",
  `address` "Jl. Pondok Ranggon No. 11, Pondok Ranggon, Cipayung, Jakarta Timur 13860",
  `directionsUrl` `https://www.google.com/maps/dir/?api=1&destination=Rene%20Cafe&destination_place_id=ChIJkaZqJO6TaS4RGa943dc7-zE`,
  `mapsUrl` = `googleMapsUri` from raw.json, `mapEmbedUrl`
  `https://www.google.com/maps?q=Rene%20Cafe%2C%20Jl.%20Pd.%20Rangon%20No.11%2C%20Cipayung%2C%20Jakarta%20Timur&output=embed`,
  `hoursSummary` "Buka setiap hari, 10.00–22.00", `hours`: seven `{ day, time }` rows Senin…Minggu,
  all "10.00–22.00", `rating` `{ value: "4,2", count: 618 }`.
- `hero`: `line` (Item).
- `places`: 3 × `{ key: "taman" | "teras" | "ruang", name, text: Item, extra?: Item, note?: Item }`.
- `dishes`: 4 × `{ key, name, note: Item }` (Pangsit Kuah, Ayam Penyet, Bebek Keranjang, Matcha Latte).
- `menu`: 3 × `{ title, from: Item (mockup), items: Item[] }`.
- `praise`: 4 × Item (paraphrased, no names), plus `praiseSource`.
- `contact`: `{ whatsapp: { label, mockup: true }, instagram: { label, mockup: true } }`, no numbers.
- `banner`: "Draf mockup untuk Rene Cafe. Beberapa detail masih contoh dan menunggu konfirmasi pemilik."
Exact copy is in the PRD sections table.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text from `content.banner` (Indonesian) |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | `--container` 1200 |
| Reveal | 4 blocks | starter | section-level only: Ruang hijau panorama, Wajib dicoba window, Kata mereka grid, Hubungi block |
| SteelFrame | all pictures | new | wrapper: 6 px `besi` border, square, `overflow: hidden`, keeps aspect |
| DirectionsButton | Hero, Kunjungi, Hubungi | new | `<a>` to `directionsUrl`, `target="_blank" rel="noopener"`, `lampu` fill, 2 px `besi` border, `besi` Figtree 600 text, min-height 52 px, arrow glyph `→` in a span |
| HeroWindow | Hero | new | stacked layers (see Motion spec), gable silhouette via static CSS `clip-path` on the glass box, steel frame SVG on top; `role="img"` + `aria-label` |
| BrickGround | Hero | new | CSS background: inline SVG running-bond pattern (data URI in `globals.css` as `.bg-brick`), decorative |
| PlaceIllustration ×3 | Ruang hijau | new | inline SVGs `taman`, `teras`, `ruang`; same viewBox height and ground line so they join on desktop |
| DishIllustration ×4 | Wajib dicoba | new | inline SVGs, top-down, viewBox 320 × 200, wood disc ⌀180 centred over lawn ground; `preserveAspectRatio="xMidYMid slice"` so the 128 px square phone crop still shows the whole disc |
| SnackBaskets | Menu andalan | new | inline SVG, two wire baskets from above, 4:3 |
| HoursList | Kunjungi | new | `<dl>` or `<ul>`; each row a 14 px amber bulb SVG (aria-hidden), day, time |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Rene Cafe">` inside SteelFrame, 440 px desktop / 320 px phone |
| BulbString | Hubungi | new | static SVG catenary wire with 9 bulbs (7 on phone), amber fill + one radial glow each, aria-hidden |
| ContactPlaceholder | Hubungi | new | dashed 2 px `lampu` box, `kaca` text, `data-mockup`, not a link |
| SkipLink | top | new | "Langsung ke konten" → `#konten` |

`app/layout.tsx`: `lang="id"`, Besley + Figtree via `next/font/google` (CSS variables wired into
`--font-display` / `--font-body` in `@theme`), metadata title "Rene Cafe · Kafe di Pondok Ranggon,
Jakarta Timur", description in Indonesian from `content.ts`, `robots` noindex kept.

## React Bits (max 2)
None. Reasons, from the catalogue checked on reactbits.dev:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | Split Text / Blur Text on the h1 would compete with the window moment; Fade Content / Animated Content duplicate the starter Reveal; Light Rays, Soft Aurora and other backgrounds are WebGL ambience the brief does not call for; Tilted Card / Spotlight Card on dishes are hover gimmicks that make the window grid read as generic cards; Count Up would perform the rating. | 0 | – |
Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): glare layer over glass | load (CSS keyframes, first paint) | opacity 0.85 → 0 | 1.2 s | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none`; base style opacity 0 |
| Hero: garden layers back / mid / front | load (CSS keyframes) | translateY 6 / 10 / 16 px → 0 | 1.2 s, delays 0 / 80 / 160 ms | same | `animation: none`; base style is final |
| Section blocks (4, listed above) | ScrollTrigger `top 85%`, once | autoAlpha + y 20 → 0 | 0.6 s | `power2.out` | starter Reveal skips; static |
| DirectionsButton | hover / press (CSS) | translateY(-2px); arrow translateX(3px); press scale(0.98) | 180 ms / 120 ms | ease-out | starter global rule shortens to instant |
| Text links | hover (CSS) | underline appears (no transition) | – | – | same |

Why CSS for the hero: keyframes start on first paint, so there is no flash when JS hydrates, and the
page is correct with JS off. Keyframes use `animation-fill-mode: both`; base (non-animated) styles are
the final state. Hero values live as CSS variables mirroring `lib/motion.ts` (`--dur-hero: 1200ms`,
`--ease-hero`). Layers are separate absolutely positioned `div > svg` stacked in an `overflow: hidden`
glass box, each drawn 24 px taller than the box at the bottom. Nothing else in the hero moves.

`lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 1.2 }`, `distance.reveal = 20`,
eases unchanged. Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible (the h1 is
  the LCP element and never animates).
- At most 2 font families via `next/font`, subset, `display: swap` (Besley, Figtree; no italics).
- No preloaders, no video backgrounds, no WebGL. No raster images: all illustrations are inline SVG
  (keep each under ~12 KB). Map iframe `loading="lazy"`.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: every illustration `role="img"` with an Indonesian `aria-label` starting "Ilustrasi:"
(e.g. "Ilustrasi: pangsit kuah dalam mangkuk, dilihat dari atas"); decorative SVGs (brick, bulbs,
bulb bullets) `aria-hidden`. Focus ring 3 px, `besi` on `kaca`, `lampu` on dark grounds. Headings:
one h1 (hero), h2 per section, h3 for place, dish and menu group names. External links say they open
Google Maps ("Petunjuk Arah (Google Maps)" as accessible name). Placeholder slots are plain text,
not fake links.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values for this shop are in design-brief §4–§5. Add `--leading-lead: 1.3` and use it in `.t-lead`.
Set `--gutter: 40px` and `--section-y: 112px` in the starter's 768 px media query; two-column layouts
switch on at `lg` (1024 px), the hero only at 1280 px (a custom `@custom-variant` or plain media query in
`globals.css`). Below 1280 the hero is stacked with the window centred, max 560 px wide. The h1 gets
`white-space: nowrap`; its measured width is 5.62 em (Besley 800), so `--step-display` caps at 100 px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
