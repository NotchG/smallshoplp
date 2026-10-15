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
- `hero`: `title`, `lead`, `cta`, `menuLink`, `caption`, `planLabel`.
- `menu`: `heading`, `intro` (`mockup: true`), `items[]`: `{ id, label, name, nameMockup, note, source, price?, priceMockup?, illustration, mockup: true }` (every item is mockup because its picture is an illustration).
- `uses[]`: `{ id, time, title, body, extra?, extraMockup? }` in clock order: pagi, kerja, rombongan.
- `reviews`: `heading`, `ratingLine`, `caption`, `items[]: { topic, text, source }` (no author field at all).
- `visit`: `heading`, `todayLabel: "Hari ini"`, `mapTitle`.
- `contact`: `heading` (mockup), `body` (mockup), `whatsapp: { label, note: "Nomor menyusul", href: null, mockup: true }`.
- `footer`, `banner`, `meta`.
Exact strings: PRD "Copy deck". No copy is written in components.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Indonesian text from `content.banner` |
| Container | all | starter | `--container` 75rem |
| Reveal | Menu, Datang untuk, Kata mereka, Kunjungi, Hubungi | starter | section-level only, never on the hero |
| Header | top | new | wordmark (Montagu Slab 600, `--step-body`) + three anchor links (`#menu`, `#datang`, `#lokasi`); not sticky; phone shows Menu and Lokasi only |
| Button | hero, Kunjungi, Hubungi | new | `<a>` styled; variants `fern` (on tile: fern bg, tile text) and `timber` (on steel: timber bg, steel text); min-height 48px; hover overlay via `::after` opacity; `disabled` variant renders a `<span aria-disabled="true">` for the WhatsApp mockup |
| TodayHours | hero, Kunjungi | new, client | SSR renders the static two-group line; after mount computes the Asia/Jakarta weekday with `Intl.DateTimeFormat` and shows today's hours / marks today's row. Reserve the line height so the swap doesn't shift layout |
| HallPlan | hero | new | Relative container with (a) one inline SVG for the static scene: grout grid, tile columns, dashed overhead beams, ferns, banquette + work table, pendant discs; (b) six absolutely positioned table groups (`.plan-table`, HTML elements each holding a small inline SVG: table, two rattan chairs per side, optional dish); (c) three `.plan-glow` elements (radial copper pools). Positions in % of the container so it scales. From 1024px: cols 7–12 and bleeds to the right viewport edge, height ~560px. Below 1024px the hero stacks and the plan is a full-bleed band under the text (~300px on phone); below 768px only four table groups show (`.plan-table--desk-only` hidden). `role="img"` + `aria-label` from content on the container; inner SVGs `aria-hidden` |
| Dish illustrations | Menu, hero table | new | Six SVG components (`NasiGorengWagyu`, `TunaSambalMatah`, `KopiTeh`, `PisangGorengTeh`, `Tiramisu`, `BananaSplit`), each `size` prop, `viewBox` square (Banana Split 11:8), flat fills from the design brief §3 food colours, matte black plate. Accept `decorative` prop (hero use: `aria-hidden`) else `role="img"` + `aria-label` |
| MenuTable | Menu andalan | new | timber section; 12-col grid, 3 × 2 on desktop (each item 4 cols, plate then text, plates bottom-aligned per row); phone rows: plate (128 / 112) left, text right, gap 16px; faint plank seams via a repeating 1px line every ~180px in a darker timber (`color-mix(in oklch, var(--color-timber) 88%, var(--color-steel))`) |
| UsesStrip | Datang untuk | new | desktop: one SVG floor strip (viewBox 1200 × 260) with three arrangements at thirds and a 3-col text grid under it; phone: three separate SVG panels (350 × 180) each followed by its text |
| ReviewParaphrases | Kata mereka | new | fern section; `<figure>`-free (they are not quotes): a `<ul>` of `<li>` with topic (`--step-small`) + text (`--step-lead`, Hanken 500) |
| Visit | Kunjungi kami | new | address `<address>`, hours `<table>` (max-width 22rem, tabular-nums, today row gets "Hari ini" 12px after the time), Button, MapEmbed |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=…>` at 4:3 via `aspect-ratio`; 1px grout border |
| Contact | Hubungi kami | new | evening plan SVG (long table, all pools lit, static), heading, body, two Buttons |
| Footer | bottom | new | steel, `--step-small`, link to listing |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | | | |

Zero is right here: the signature is a custom GSAP sequence on this shop's own illustration, and the starter's `Reveal` covers the sections. Browsed reactbits.dev and declined:
- **Split Text / Blur Text** (hero H1): a second hero effect would compete with the tables, and the headline must be readable on first paint.
- **Count Up** (rating): animating "4,5 · 1.467" is hype; the brief says no hype.
- **Rotating Text** ("Datang untuk…"): would hide two of the three uses at any moment; the section shows all three side by side.
- Backgrounds and cursor effects: nothing in the brief's personality calls for them (motion-rules 7).

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero table groups `.plan-table` (signature moment) | load, 0.15s delay | `x`, `y`, `rotation` from the scattered pre-state to 0 (offsets in design brief §8, phone 0.6×); stagger 0.07s from centre | 0.9s each, ~1.25s total | `expo.out` | final state, no motion |
| Hero light pools `.plan-glow` | same timeline, at 0.9s | `opacity` 0 → 1 | 0.5s | `power1.out` | visible, no motion |
| Sections (Menu, Datang untuk, Kata mereka, Kunjungi, Hubungi) | ScrollTrigger `top 85%`, once | `y` 20 → 0, `opacity` 0 → 1 (starter Reveal) | 0.6s | `power2.out` | final state |
| Buttons | hover / press | `::after` opacity 0 → 0.12; press `scale(0.98)` | 180ms / 120ms | ease-out (CSS) | hover overlay kept, no scale |

Pre-state without flash: an inline script in `<head>` (in `layout.tsx`, before content) sets `document.documentElement.dataset.motion = "on"` only when `matchMedia('(prefers-reduced-motion: reduce)')` does not match. CSS: `html[data-motion="on"] .plan-table { transform: translate(var(--dx), var(--dy)) rotate(var(--r)); }` and `html[data-motion="on"] .plan-glow { opacity: 0; }`, with `--dx/--dy/--r` set inline per table (phone values via a media query). GSAP then tweens `x: 0, y: 0, rotation: 0` (and `opacity: 1` for glows) inside `useGSAP` scoped to the HallPlan ref; GSAP reads the computed transform of the HTML elements as the start. Tables are visible in both states; with JS off there is no `data-motion`, so the final state shows.

Lenis: starter defaults (lerp 0.1, native touch); off under reduced motion.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images at all: every picture is inline SVG. Keep each dish SVG under ~6 KB and the hero scene under ~25 KB.
- Map iframe is below the fold with `loading="lazy"`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: contrast pairs in design brief §3 (lowest text pair 6.8:1). Focus ring 2px in the section's text colour, 3px offset. `lang="id"`. Headings: one H1, H2 per section, H3 for dish names and the three uses. The hours are a real `<table>` with a caption for screen readers ("Jam buka"). The disabled WhatsApp button is announced as unavailable (`aria-disabled="true"`) and is not focusable as a link. All illustrations have Indonesian labels or are `aria-hidden` when decorative.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design brief §4 and §5. Fonts: `Montagu_Slab({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display", display: "swap" })` and `Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" })`; map them to the starter's `@theme` font tokens. Palette tokens in `@theme` as `--color-tile`, `--color-steel`, `--color-timber`, `--color-fern`, `--color-copper`, `--color-grout`. If `Montagu_Slab` is missing from the starter's `next/font/google` list, use `Zilla_Slab` (weights 500, 600, 700) for the same roles and note it in the build summary.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
