# TRD: Kyō Coffee Roaster mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts live in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's types; keep `Item = { text: string; mockup?: boolean }`):
- `shop`:
  - `name: "Kyō Coffee Roaster"`, `type: "Kafe"`
  - `address` (full, from the PRD) and `addressShort: "Jl. Wirajasa / Jl. Raya Jatiwaringin No. 1, Jakarta Timur"`
  - `phone: "0812-1284-4322"`, `tel: "tel:+6281212844322"`
  - `whatsapp: { href: "https://wa.me/6281212844322", mockup: true }`
  - `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ky%C5%8D+Coffee+Roaster&destination_place_id=ChIJr8K9asvzaS4R19qBYn2g1i4"`
  - `mapsUrl: "https://maps.google.com/?cid=3375061431144798935"`
  - `mapEmbedUrl: "https://www.google.com/maps?q=Ky%C5%8D+Coffee+Roaster,+Jl.+Raya+Jatiwaringin+No.1,+Jakarta+Timur&output=embed"`
  - `hours: [{ days: "Senin–Kamis", time: "07.00–21.00" }, { days: "Jumat–Minggu", time: "07.00–22.00" }]`
  - `closeByWeekday: ["22.00","21.00","21.00","21.00","21.00","22.00","22.00"]`, indexed 0 = Minggu, from raw.json periods. Opening is 07.00 every day.
  - `rating: { value: "4,6", count: "1.328" }` (listing)
- `hero`, `menu` (4 panels: `name`, `price?`, `desc`, `items?`, each an Item), `bakes` (intro Items
  plus 3 products), `space` (paragraph, captions, placeholder note), `praise` (4 `{label, text}`,
  paraphrased only, no names), `visit`, `contact`, `footer`, `banner`.
- Every string in the PRD's sections table is in `content.ts`, verbatim, with its [MOCKUP] flag.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–7 | starter | Section-level only: one wrapper per section's inner content |
| SmoothScroll | global | starter | Lenis defaults; off under reduced motion |
| MockupBanner | top | starter, edited | Text from `content.banner` (Bahasa Indonesia); `.mockup-banner` uses `--color-ink` / `--color-wall` |
| SiteHeader | hero | new | "kyō" mark (rounded 400, `--step-lead`) plus anchor links `#menu`, `#ruang`, `#lokasi`. Phone shows Menu and Lokasi. Not sticky |
| Hero | hero | new | `ply` ground, panel grid with 2px `oak` battens, concrete counter band |
| TodayHours | hero | new, client | `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })` → index → "Buka hari ini 07.00–{close}". Static HTML fallback: "Buka setiap hari mulai 07.00". Must not shift layout (same line box) |
| MarbledCup | hero | new, client | Inline SVG plus the pour (see motion spec). SSR markup is the finished cup. `role="img"`, `aria-label="Ilustrasi Marbled Cold Brew dalam gelas bening bertuliskan kyō"` |
| ButtonLink | hero, visit, contact | new | `<a>`, 48px tall, square corners. Variants: `solid` / `outline` × `light` / `dark` ground. Hover `::after` opacity tint, press `scale(0.98)` |
| MenuBoard | Dari bar kami | new | 2×2 panels split by 2px `ply` battens; featured panel on a `ply` field; price inline 12px after the name |
| Dripper, PecanTart, AppleTart, BunTray | menu, bakes | new (server SVG) | Flat illustrations per design brief §6; each `role="img"` with an Indonesian `aria-label` |
| Bakes | Teman ngopi | new | 7 / 5 grid with a tall pecan panel; phone stacks the apple tart and bun tray as rows (illustration left, 120px) |
| DayRoom, NightGarden | Ruang di Kyō | new (server SVG) | Placeholder scenes; the caption note carries `data-mockup` |
| Praise | Kata mereka | new | Rating line plus 4 themes; `wall` battens on `concrete` |
| Visit | Kunjungi kami | new | Hours as `<dl>` or a table with a fixed 9em day column; `<iframe loading="lazy" title="Peta lokasi Kyō Coffee Roaster">` at 4:3 |
| Contact | Hubungi kami | new | `ink` ground; GardenStrip SVG full-bleed; footer inside the same `<footer>` landmark |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | n/a | Zero is the right number here. The one moment is the pour, which is custom GSAP on our own SVG. Every React Bits text effect (Split, Blur, Shiny…) would compete with a calm, "the coffee does the talking" voice. The backgrounds (Particles, Noise, Silk…) are the motion noise the brief rules out. Fade or Animated Content duplicate the starter's `Reveal`. The micro components (Call Chip, Status Mark) are app-UI idioms. | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero cup: `brew` group (signature moment) | ScrollTrigger once, cup "top 80%" (fires on load when visible), delay 0.15 s | `y`: −interior height → 0, inside a static `clipPath` | 1.2 s | `expo.out` | Final state, no motion |
| Hero cup: `marble` group | Same timeline, at 0.7 s | `opacity` 0 → 1, `y` −8 → 0 | 0.6 s | `power2.out` | Final state |
| Sections 2–7 | ScrollTrigger once, "top 85%" | `autoAlpha` 0 → 1, `y` 20 → 0 (starter `Reveal`) | 0.6 s | `power2.out` | Visible, no motion |
| Buttons, nav links | hover / focus-visible | `::after` tint `opacity` 0 → 1 (links: underline `opacity` 0.4 → 1) | 180 ms | ease-out (CSS) | Instant |
| Buttons | `:active` | `transform: scale(0.98)` | 120 ms | ease-out (CSS) | None |

- No hero text animation, no loops, no replays.
- Use `useGSAP` with a scope ref in `MarbledCup` and `Reveal`.
- `lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.2 }`, keep `ease`,
  `distance.reveal = 20`, add `pour = { delay: 0.15, marbleAt: 0.7, marble: 0.6 }`.

Lenis: starter defaults (lerp 0.1, native touch). Anchor links get `scroll-margin-top: 16px`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the hero name (text). There are no raster images on the page.
- Two font families via `next/font`: `M_PLUS_Rounded_1c` (weight `["300","400"]`) and `M_PLUS_1`
  (variable). Both use `subsets: ["latin", "latin-ext"]` (needed for ō), `display: "swap"`, and CSS
  variables `--font-display` and `--font-body` mapped in `@theme`.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- The map iframe is `loading="lazy"` and sits below the fold.
- SVG drawings stay hand-simple: under about 60 paths each, no filters, no embedded rasters.

## Accessibility
- WCAG 2.2 AA contrast for all text on its actual background. Pairs in design brief §3:
  - ink on ply 6.8:1, ink on concrete 10.2:1, wall on ink 15.4:1, ink on oak 10.3:1.
  - No text in `ply` on `wall`, and no text in `leaf`.
- Visible keyboard focus: 2px `ink` ring offset 3px on light grounds, 2px `oak` on `ink`.
- Semantic landmarks: `header`, `main`, one `section` per block with an `h2` (the hero name is the
  `h1`), and `footer`.
- Alt text: `aria-label` in Indonesian on every SVG drawing; battens are CSS borders.
- Tap targets: 48px buttons; header links padded to 44px.
- `prefers-reduced-motion` is honoured everywhere: Lenis off, GSAP skipped (content at final
  state), no React Bits.
- `<html lang="id">`. Phone and WhatsApp links state their purpose in their visible text.

## SEO / meta
- Title from `content.ts`: "Kyō Coffee Roaster · Kafe di Jatiwaringin, Jakarta Timur".
- Description from `content.ts`: "Kafe bergaya Jepang di Jl. Raya Jatiwaringin, Jakarta Timur. Manual
  brew, Marbled Cold Brew, pecan tart. Buka setiap hari mulai 07.00."
- `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).

Exact values, from design brief §4 and §5:
```css
@theme {
  --color-wall: #F5F3EE; --color-ink: #221A14; --color-ply: #CD9A5B;
  --color-oak: #E6C48E; --color-concrete: #CBC7BF; --color-leaf: #3E5A3B;
  --color-brew: #5A3826; --color-crust: #B9773A; /* illustration only */
}
:root {
  --container: 1200px; --gutter: 20px; --section-y: 64px;
  --step-display: clamp(3rem, 1.75rem + 5.5vw, 6.25rem);
  --step-head: clamp(2rem, 1.5rem + 2vw, 3rem);
  --step-lead: clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem);
  --step-body: clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem);
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --leading-display: 1.05; --leading-head: 1.15; --leading-body: 1.6;
  --batten: 2px;
}
@media (min-width: 768px)  { :root { --gutter: 32px; --section-y: 112px; } }
@media (min-width: 1200px) { :root { --gutter: 40px; } }
```
- Replace the starter's `paper` / `muted` / `accent` tokens. `html` background becomes `--color-wall`.
- `.t-display` uses `font-family: var(--font-display); font-weight: 300`. Headings use M PLUS 1 300.
- Add `.t-small { font-weight: 500 }` and `font-variant-numeric: tabular-nums` on prices and hours.
- The desktop grid is `grid-cols-12 gap-6` inside `<Container>`; spans per design brief §7.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
