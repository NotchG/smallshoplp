# TRD: Publika Eat and Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep the starter's conventions where they exist):
- `shop`: `name`, `address`, `addressShort`, `placeId` (`ChIJbVbSLwCLaS4RUJwfviY1mKQ`), `listingUrl` (raw.json `googleMapsUri`), `directionsUrl`, `embedUrl`, `rating: "4,5"`, `ratingCount: "1.467"` (preformatted Indonesian numbers).
- `hours`: `[{ label: "Senin–Jumat", short: "Sen–Jum", days: [1,2,3,4,5], open: "09.00", close: "21.30" }, { label: "Sabtu–Minggu", short: "Sab–Min", days: [6,0], open: "07.00", close: "21.30" }]` (JS weekday numbers, Asia/Jakarta).
- `hero`: `title`, `lead`, `cta`, `menuLink`, `photo: { src: "/foto/publika-bar.jpg", width: 897, height: 673, alt, caption }`.
- `menu`: `heading`, `intro` (`mockup: true`), `items[]`: `{ id, label, name, nameMockup?, note, price?, priceMockup?, visual: { kind: "drawing", mockup: true } | { kind: "photo", src: "/foto/publika-banana-split.jpg", width: 440, height: 440, alt } }`.
- `uses[]`: `{ id, time, title, body, extra?, extraMockup? }` in clock order: pagi, kerja, rombongan.
- `reviews`: `heading`, `ratingLine`, `caption`, `items[]: { topic, text, source }` (no author field at all).
- `visit`: `heading`, `hoursCaption: "Jam buka"`, `todayLabel: "Hari ini"`, `mapTitle`, `mapLink`.
- `contact`: `heading` (mockup), `body` (mockup), `whatsapp: { label, note: "Nomor menyusul", href: null, mockup: true }`, `tableCaption`, `tableLabel` (mockup).
- `footer`, `banner`, `meta`.
Exact strings: PRD "Copy deck". No copy is written in components.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Indonesian text from `content.banner` |
| Container | all | starter | `--container` 75rem |
| Reveal | Menu, Datang untuk, Kata mereka, Kunjungi | starter | section-level only; never on the hero or Hubungi |
| Header | top | new | wordmark (Montagu Slab 600, `--step-body`) + anchor links `#menu`, `#datang`, `#lokasi`; not sticky; phone shows Menu and Lokasi |
| Button | hero, Kunjungi, Hubungi | new | `<a>`; variants `fern` (on tile) and `timber` (on steel); min-height 48px; hover overlay via `::after` opacity; disabled variant is a `<span aria-disabled="true">` for the WhatsApp mockup |
| TodayHours | hero, Kunjungi | new, client | SSR renders the static two-group line; after mount computes the Asia/Jakarta weekday with `Intl.DateTimeFormat` and shows today's hours / marks today's row. Reserve the line height so the swap doesn't shift layout |
| HeroPhoto | hero | new | `<figure>` with `next/image` (eager, high fetch priority: `preload` or `priority`, whichever the installed `next/image` types accept; explicit width/height, `sizes="(min-width: 1024px) 588px, 100vw"`), `aspect-ratio: 4 / 3`, `object-fit: cover`; frame = `border: 6px` phone / `8px` from 1024, solid steel, no radius, no shadow; `<figcaption>` `--step-small`, 12px below |
| Dish drawings | Menu, closing table | new | Five SVG components (`NasiGorengWagyu`, `TunaSambalMatah`, `KopiTeh`, `PisangGorengTeh`, `Tiramisu`), `size` prop, square `viewBox`, flat fills from design brief §3, matte black plate. `decorative` prop (closing table: `aria-hidden`) else `role="img"` + `aria-label` |
| DishPhoto | Menu (Banana Split) | new | `next/image`, 220 × 220 desktop / 128 phone, `loading="lazy"`, square corners, no border; sits in the same visual slot as a plate so rows stay bottom-aligned |
| MenuTable | Menu andalan | new | timber section; desktop 3 × 2 (each item 4 cols, visual then text, visuals bottom-aligned per row); 768–1023 2 cols; phone rows: visual (128 / 112) left, text right, gap 16px; plank seams as a repeating 1px line every ~180px in `color-mix(in oklch, var(--color-timber) 88%, var(--color-steel))` |
| UsesStrip | Datang untuk | new | desktop: one SVG floor strip (viewBox 1200 × 260) with three arrangements at thirds and a 3-col text grid under it; below 1024: three SVG panels (350 × 180) each followed by its text |
| ReviewParaphrases | Kata mereka | new | fern section; a `<ul>` of `<li>` with topic (`--step-small`) + text (`--step-lead`, Hanken 500); no `<blockquote>`, no `<q>` |
| Visit | Kunjungi kami | new | `<address>`, hours `<table>` (caption "Jam buka", max-width 22rem, tabular-nums, today row gets "Hari ini" 12px after the time), Button, MapEmbed |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=…>` with `aspect-ratio: 3 / 2`; 1px border in the steel divider colour; "Buka di Google Maps" link 8px under it (listing URL), so the block isn't empty when the frame doesn't load |
| LongTable | Hubungi kami | new, client | The signature. Band `container-type: inline-size`, ~300px tall desktop / 220px phone. Static SVG layer: two ferns cropped by the band edges. Six `.lt-table` HTML elements absolutely positioned in % across the middle 84% (each holds a small inline SVG: timber table, two rattan chairs per side, one drawn dish); `.lt-table--wide` on t1 and t6 hidden below 768. Three `.lt-glow` elements (radial copper pools) above the table. `role="img"` + `aria-label` (content `tableLabel`) on the band; inner SVGs `aria-hidden`. Caption `<p>` 16px under the band |
| Contact | Hubungi kami | new | 6 + 6 text row (heading | body + Buttons + "Nomor menyusul"), then LongTable |
| Footer | bottom | new | steel, `--step-small`, two stacked lines, link to the listing |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | | | |

Zero is right here. The signature is a custom GSAP sequence on this shop's own drawing, the hero is a real photo that should stay still, and the starter's `Reveal` covers the sections. Browsed reactbits.dev (text animations, animations, components, micro interactions, backgrounds) and declined:
- **Split Text / Blur Text / Masked Heading** (hero H1): the headline must be readable on first paint, and a hero effect would compete with the owner's photo.
- **Count Up** (rating) and **Peek Rating**: animating "4,5 · 1.467" is hype; the brief says no hype.
- **Rotating Text** ("Datang untuk…"): would hide two of the three uses at any moment.
- **Tilted Card / Glare Hover** (the photos): tilting the owner's photos is a gimmick and fights the "untouched photo" rule.
- **Fade Content / Animated Content**: duplicate the starter `Reveal`.
- **Lattice Loader** (echoes the honeycomb lattice): it's a loader, and preloaders are banned.
- Backgrounds and cursor effects: nothing in the brief's personality calls for them (motion-rules 7).

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Closing `.lt-table` groups (signature moment) | ScrollTrigger on the band, `top 75%`, `once` | `x`, `y`, `rotation` from the scattered CSS pre-state to 0 (offsets in design brief §8); stagger 0.07s from the centre | 0.9s each, ~1.25s total | `expo.out` | final state, no motion |
| Closing `.lt-glow` pools | same timeline, at 0.9s | `opacity` 0 → 1 | 0.5s | `power1.out` | visible, no motion |
| Hero | none | none | none | none | none |
| Sections (Menu, Datang untuk, Kata mereka, Kunjungi) | ScrollTrigger `top 85%`, once | `y` 20 → 0, `opacity` 0 → 1 (starter Reveal) | 0.6s | `power2.out` | final state |
| Buttons | hover / press | `::after` opacity 0 → 0.12; press `scale(0.98)` | 180ms / 120ms | ease-out (CSS) | hover overlay kept, no scale |

Pre-state without flash: an inline script in `<head>` (in `layout.tsx`) sets `document.documentElement.dataset.motion = "on"` only when `matchMedia('(prefers-reduced-motion: reduce)')` does not match. CSS:
`html[data-motion="on"] .lt-table { transform: translate(calc(var(--dx) * 1cqi), calc(var(--dy) * 1px)) rotate(var(--r)); }` and `html[data-motion="on"] .lt-glow { opacity: 0; }`, with `--dx/--dy/--r` set inline per table and a phone media query that scales `--dy` by 0.6. One `useGSAP` timeline scoped to the LongTable ref tweens `x: 0, y: 0, rotation: 0` (GSAP reads the computed transform as the start), then the glows. Tables are visible in both states; with JS off there is no `data-motion`, so the joined state shows.

Lenis: starter defaults (lerp 0.1, native touch); off under reduced motion.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Two raster images only, both owner photos, prepared once into `site/public/foto/` with `sips`:
  `publika-bar.jpg` = owner-1 cropped to 897 × 673 at offset x 192 (≤ 180 KB, JPEG quality ~78), loaded eagerly with high fetch priority;
  `publika-banana-split.jpg` = owner-2 cropped to 1080 × 1080, resized to 440 × 440 (≤ 70 KB), lazy.
- Everything else is inline SVG: each dish under ~6 KB, the closing band under ~25 KB.
- Map iframe below the fold with `loading="lazy"`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: contrast pairs in design brief §3 (lowest text pair 6.8:1). Focus ring 2px in the section's text colour, 3px offset. `lang="id"`. One H1; H2 per section; H3 for dish names and the three uses. Hours are a real `<table>` with a caption. The disabled WhatsApp button is `aria-disabled="true"` and not a focusable link. Both photos have the PRD alt text; drawings have Indonesian labels or are `aria-hidden` when decorative.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design brief §4 and §5. Fonts: `Montagu_Slab({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display", display: "swap" })` and `Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" })`, mapped to the starter's `@theme` font tokens. Palette tokens in `@theme`: `--color-tile`, `--color-steel`, `--color-timber`, `--color-fern`, `--color-copper`, `--color-grout`. If `Montagu_Slab` is missing from `next/font/google`, use `Zilla_Slab` (500, 600, 700) for the same roles and note it in the build summary.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
