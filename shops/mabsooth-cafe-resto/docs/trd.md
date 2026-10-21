# TRD: Mabsooth Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (extend the starter types, keep `Item`):
- `shop`: name "Mabsooth Cafe & Resto", wordmark "Mabsooth", arabic "مبسوط", sub "Cafe & Resto", address
  (short form for display, full `formattedAddress` for the map query), phone "0819-4744-4493", `tel:+6281947444493`,
  `whatsapp: { url: "https://wa.me/6281947444493", mockup: true }`, `mapsUrl` = raw.json `googleMapsUri`,
  `directionsUrl` = `https://www.google.com/maps/dir/?api=1&destination=Mabsooth%20Cafe%20%26%20Resto&destination_place_id=ChIJTeUERADzaS4RlZXUGSVdils`,
  `rating: { value: "4,7", count: 240 }` (listing).
- `hours`: seven rows, `{ day: "Senin", jsDay: 1, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 }`;
  Jumat (5) and Sabtu (6) close "01.00", `closeMin: 1500` (hours).
- `menu.featured`: Lamb Shank, Rice bowl, Lychee Tea, each `{ name, price, desc, visual }`; `name` and `price`
  are separate `Item`s because the name is fact (photos) where the price is [MOCKUP]. `menu.more`: seven
  [MOCKUP] dishes, only "Nasi kebuli kambing" has a price.
- `tea`: teapot item, list of tea/coffee items (espresso-bar line is fact; the rest [MOCKUP]), shisha
  `{ where (fact), flavours (mockup), from (mockup) }`.
- `praise`: themes (facts with review refs), one paraphrase (reviews 3). Paraphrased only.
- Visible marker: global CSS rule gives `[data-mockup]` a dotted underline (1px, offset 0.25em, `rattan-dim` on dark
  grounds, `#8C7A62` on rattan). Sentence-level copy that is [MOCKUP] (hero line, greeting, lead lines, closing line)
  also gets class `mock-quiet`, which keeps `data-mockup` but drops the underline.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian copy from PRD; `bark` ground, `rattan` text, `--step-small` |
| SmoothScroll | global | starter | unchanged |
| Container | all | starter | 1200px, 12-col grid inside where the brief says cols |
| Reveal | 6 sections | starter | section-level only, never on hero |
| Lockup | hero, footer | new | h1 in hero (`as` prop: `div` in footer); MABSOOTH / مبسوط / CAFE & RESTO; `size="hero" | "small"` |
| CanopyHero | hero | new | `<picture>` twice (lit + unlit layers), mask fade, CSS keyframes; contains Lockup, hero line, TodayHours, ActionButtons |
| TodayHours | hero | new, client | Asia/Jakarta day logic below; SSR fallback text |
| ActionButtons | hero, Kunjungi | new | Petunjuk Arah (primary), WhatsApp (secondary); 48px phone / 52px desktop; radius 8. `tone="dark"`: gold fill + walnut text, rattan 1.5px outline. `tone="light"` (on rattan): walnut fill + gold text, walnut outline |
| Suasana | Suasana | new | terrace photo + two text panels |
| MenuTable | Menu andalan | new | lamb photo, two DishCard, "Juga ada di menu" list, legend |
| DishCard | menu, tea | new | visual + name + price inline + desc |
| RiceBowl, LycheeTea, TeaPot | menu, tea | new | inline SVG illustrations per design brief §6, `role="img"` + `aria-label` |
| TeaSection | Teh, kopi & shisha | new | TeaPot DishCard + two lists |
| Praise | Kata mereka | new | statement with `<strong>` themes in gold, rating line, Maps link |
| HoursChart | Kunjungi | new | semantic `<table>` (day, hours text); bars as static `aria-hidden` spans sized by percentage of a 06.00–02.00 track (never animated) |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Mabsooth Cafe & Resto" src="https://www.google.com/maps?q=Mabsooth%20Cafe%20%26%20Resto%2C%20Jl.%20Raya%20Condet%20No.6%2C%20Jakarta%20Timur&output=embed">`, radius 12, plus a text link to `mapsUrl` |
| ContactRows | Hubungi | new | three 64px rows (WhatsApp, Telepon, Petunjuk arah), whole row is the link |
| TileFloor | footer | new | inline SVG `<pattern>`, full bleed, 120px / 72px tall, `aria-hidden` |

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The one authored moment is photographic (the lanterns switching on) and is cheaper and safer in CSS. The headline is a bilingual lockup: Split Text, Blur Text and similar split into letters, which breaks Arabic joining in مبسوط and the Latin kerning, and would add a second entrance on top of the lights. Fade Content duplicates the starter's Reveal. Background effects (Light Rays, Aurora, Particles) would compete with the real lantern light. | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): canopy lit layer | first paint (CSS `@keyframes lights-on`, `animation-fill-mode: both`) | opacity 0 → 1 over a static dimmed copy (`filter: brightness(.38) saturate(.35)`, never animated) | 1.4 s, delay 0.15 s | `cubic-bezier(0.45, 0, 0.2, 1)` | `animation: none`, lit layer opacity 1 |
| Hero lockup (one block) | first paint (CSS `@keyframes lockup-in`) | opacity 0 → 1, translateY 14px → 0 | 0.9 s, delay 0.35 s | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none`, final state |
| Hero line, hours, buttons | none | none | – | – | – |
| Section blocks (Suasana, Menu andalan, Teh, Kata mereka, Kunjungi, Hubungi) | ScrollTrigger `top 85%`, once (starter Reveal) | autoAlpha 0 → 1, y 20 → 0 | 0.7 s | `power2.out` | skipped, final state |
| Buttons, contact rows, links | hover / focus-visible / active | background-color, color, text-decoration-color | 180 ms | ease-out (CSS) | instant (global rule) |

Why CSS for the hero: it runs from the first paint with no hydration wait or flash, and works with JS off
(rule 8). It has no ScrollTrigger, so there is nothing for `useGSAP` to clean up there. Wrap both keyframes in
`@media (prefers-reduced-motion: no-preference)` so reduced motion never sees a from-state.
Tokens: `lib/motion.ts` add `duration.lights = 1.4`, `duration.lockup = 0.9`; `globals.css` `--dur-lights: 1.4s`,
`--dur-lockup: 0.9s`, `--ease-lights: cubic-bezier(0.45,0,0.2,1)`, `--ease-out-expo: cubic-bezier(0.16,1,0.3,1)`.
Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## TodayHours logic
Read weekday and hour in `Asia/Jakarta` via `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })`.
- 00.00–00.59 on Sabtu or Minggu (the Jumat/Sabtu late session): "Masih buka sampai 01.00".
- Before 08.00 otherwise: "Buka lagi pukul 08.00".
- Otherwise: "Buka hari ini 08.00–24.00", or "08.00–01.00" on Jumat and Sabtu.
- SSR / no-JS text: "Buka setiap hari 08.00–24.00 · Jumat & Sabtu sampai 01.00". Reserve one line (min-height) so swapping causes no shift.
- HoursChart marks the same Jakarta day as "Hari ini" after mount (no mark in the static HTML).

## Assets
Copy only `owner-1.jpg` and `owner-2.jpg` from `photos/`; never `photo-*.jpg`. Crops (x, y, w, h in source px).
Use Python PIL (installed); `sips --cropOffset` gave wrong regions when this plan was written. Check every crop by eye.
| File in `public/` | Source | Crop | Export |
|---|---|---|---|
| `canopy-wide.jpg` | owner-1 | (0, 0, 1290, 440) | 1290×440, JPEG q80, ≤ 160 KB; `media="(min-width: 640px)"` |
| `canopy-phone.jpg` | owner-1 | (0, 0, 620, 440) | 620×440, q80, ≤ 80 KB |
| `terrace-tiles.jpg` | owner-1 | (760, 860, 530, 534) | as cropped, q82; display ≤ 470px |
| `lamb-shank.jpg` | owner-2 | (0, 700, 1600, 1600) | 1200×1200, q80, ≤ 200 KB |
No crop may include a face, a cigarette or a shisha hose: the canopy crops stop at y 440, above the guests' heads.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  (The lockup starts at 0.35 s and is fully opaque by about 1.25 s; the hero line and buttons are visible at first paint.)
- At most 2 font families via `next/font`, subset, `display: swap`: Aref Ruqaa 700 (latin, arabic), Readex Pro variable (latin).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Canopy `<img>` `fetchPriority="high"`, `decoding="async"`; both layers use the same URL (one download). Everything below the hero `loading="lazy"`, map iframe lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Contrast pairs from design brief §3; never gold text on rattan. Text over the canopy only where the mask has
  faded to solid walnut (the lockup's overlap zone must measure ≥ 4.5:1 for rattan text and ≥ 3:1 for the gold display).
- Focus: 2px solid outline, 3px offset: `gold` on dark grounds, `lantern` on rattan.
- `<html lang="id">`; the Arabic span has `lang="ar" dir="rtl" aria-hidden="true"`.
- Landmarks: `<header>` (banner + hero), `<main id="konten">`, `<footer>`. Skip link "Langsung ke isi".
- Alt text in Indonesian: canopy "Teras Mabsooth di malam hari, lentera Maroko merah muda di bawah tanaman rambat";
  terrace "Kursi rotan dan lantai tegel bermotif di teras"; lamb "Lamb shank dengan kuah, kentang tumbuk dan sayuran". The dimmed canopy copy is `alt=""`.
- External links (Maps, WhatsApp) open in the same tab; `tel:` and `wa.me` links have visible number text.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "Mabsooth Cafe & Resto · Condet, Jakarta Timur"; description per PRD.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-walnut`, `--color-bark`, `--color-gold`, `--color-lantern`, `--color-vine`, `--color-rattan`,
  `--color-rattan-dim`; `--font-display: var(--font-aref)`, `--font-body: var(--font-readex)` from the `next/font` variables.
- `:root`: values from design brief §4 and §5; `--gutter: 16px` → `32px` and `--section-y: 64px` → `112px` at 768px.
- Add `--leading-display: 1.0`, `--leading-head: 1.12`, `--leading-body: 1.6`; `.t-lead` line-height 1.3.
- The starter's `.mockup-banner` uses `--color-ink`/`--color-paper`: point it at `bark`/`rattan`.
- Themed browser surfaces: `::selection` gold/walnut, `accent-color: gold`, `text-underline-offset: 0.2em` on links.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
