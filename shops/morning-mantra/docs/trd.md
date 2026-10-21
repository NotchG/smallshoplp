# TRD: Morning Mantra mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (Bahasa Indonesia strings):
- `shop`: name "Morning Mantra", type "Kafe & restoran", full address as listed, short address
  ("Jl. Raya Condet, Balekambang, Kramat Jati"), phone "0817-5414-141", `tel` "+628175414141",
  `waUrl` "https://wa.me/628175414141" (mockup: true), `mapsUrl` = raw.json `googleMapsUri`,
  `mapEmbed` = `https://www.google.com/maps?q=Morning%20Mantra%2C%20Jl.%20Raya%20Condet%2C%20Balekambang&output=embed`,
  `hours`: seven rows Senin…Minggu, all "08.00–22.00" (day index 1…0 to match `Date#getDay`).
- `hero`: `todayLabel` "Buka hari ini 08.00–22.00", `line` "Awali pagimu dengan mantra." (mockup),
  `sub` "Kopi dari banyak pilihan biji dan masakan Indonesia di Jalan Raya Condet.", owner image alt.
- `coffeeBoard`: 9 `{ name, price, mockup: true on price }` in board order; `boardNote` (Baileys coffee, iced; bean choice / V60).
- `featuredDrinks`: `["kapulaga", "pandan", "v60"]` → illustration key + caption name.
- `food`: groups `sarapan`, `makan`, `camilan`, `minuman`; each item `{ name, price?, mockup }`.
  Sourced (no flag): "Cumi bakar sambal matah" name, "Teh panas" name. Flagged: every other dish,
  every price, the lead "Dari sarapan jam 08.00 sampai makan malam."
- `rooms`: 3 items `{ key: "atas" | "dalam" | "luar", label, title, body, details[] }`; the
  WhatsApp booking line is mockup: true. No minimum-spend text anywhere.
- `praise`: 4 paraphrased themes + `rating` { value 4.7, count 228 } (listing).
- `contact`: rows WhatsApp (mockup), Telepon, Petunjuk arah; `privateRoomLine` (mockup).
- `meta`: title "Morning Mantra · Kopi & makan di Jl. Raya Condet", description
  "Kafe dan restoran di Jl. Raya Condet, Kramat Jati. Kopi pilihan, masakan Indonesia, buka setiap hari 08.00–22.00."
- `register`: copy uses "kamu" (mockup, listed in the checklist, no per-string flag).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container, Reveal, SmoothScroll, MockupBanner | all | starter | Banner text translated (design brief §5); `lang="id"` in layout |
| NeonSign | Hero (h1), footer (static) | new | `MORNING` (Jost 300 caps) + `mantra` (Ms Madi) as two block spans; CSS keyframes only in hero; `static` prop for footer, no glow |
| HeroSection | Hero | new | 7/5 grid from 1024px; owner-1 in ArchFrame; buttons |
| ArchFrame | Hero | new | `border-radius: 50% 50% 0 0 / 24% 24% 0 0`, 1.5px gold border, `<img>` with width/height, `fetchpriority="high"` |
| BarFront | Hero bottom | new | `aria-hidden` band: 10px ink, 64–72px flutes (`repeating-linear-gradient` navy 2px / cobalt 12px), 6px gold |
| Button | Hero, Visit | new | primary (gold fill, navy text) / secondary (1.5px wall border, wall text); min-height 48px; `::after` hover overlay |
| CoffeeBoard | Menu kopi | new | navy panel; `<ul>` 1 col phone, 2 cols ≥1024; price `<span>` 12px after the name |
| Illo (Kapulaga, Pandan, V60, CumiPlate, Teh) | Menu kopi, Makan | new | inline SVG, `currentColor` stroke 1.75, `vector-effect="non-scaling-stroke"`, `role="img"` + `aria-label` |
| FoodMenu | Makan di sini | new | 4 groups, gold small-caps labels, prices inline |
| RoomCell + MaterialBand (`stair` / `flute` / `tile`) | Tiga ruang | new | cross-section grid; band placeholder label "Foto ruangan menyusul" |
| TilePattern | Tiga ruang, footer floor | new | one SVG `<pattern>` (40px quatrefoil tile, ≤ 6 paths, `tile` stroke) reused via `<use>` or a data-URI background |
| HoursList | Kunjungi kami | new | `<dl>`; after mount marks today (Asia/Jakarta) with `aria-current="date"` + gold dot in a reserved slot (no layout shift) |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Morning Mantra">`, 4:3 desktop, 1:1 phone, wall-coloured placeholder behind |
| ActionRow | Hubungi kami | new | `<a>` full row, small label above lead detail, arrow at end, min-height 72px |

## React Bits (max 2)
None. The signature moment copies the shop's own neon sign and is plain CSS opacity keyframes,
lighter and more specific than any library effect. Considered and declined:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (declined) Shiny Text | hero name | A gold sheen would compete with the neon switch-on: two hero effects | motion dep | n/a |
| (declined) Circular Text | menu, "Life begin after coffee" decal | Spinning ring is decoration with no job; the decal's grammar is awkward to feature | small | n/a |
| (declined) Count Up | rating 4.7 | Animating a rating reads as a gimmick and delays the number | small | n/a |
Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant) only if a later revision adds one. Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero "MORNING" (signature moment) | first paint, CSS `@keyframes`, inside `@media (prefers-reduced-motion: no-preference)` | opacity 0.35 → 1 → 0.45 → 1 → 0.75 → 1 (stops at 0, 10, 22, 32, 50, 100%) | 0.6 s | linear between stops | final state, no motion (lit) |
| Hero "mantra" | first paint, `animation-delay: 0.55s`, `fill-mode: both`, same media query | opacity 0.35 → 0.9 → 0.5 → 1 (0, 30, 50, 100%) | 0.55 s | linear, last segment ease-out | final state, no motion |
| Section blocks: Menu kopi (board + illustrations), Makan, Tiga ruang grid, Kata mereka, Kunjungi | ScrollTrigger `top 85%`, once (starter `<Reveal>`) | autoAlpha 0 → 1, y 20 → 0 | 0.7 s | `power2.out` | static, visible |
| Button / ActionRow hover, focus-visible | pointer / keyboard | `::after` opacity 0 → 0.12 | 0.15 s | ease-out | instant |
| Button / ActionRow press | `:active` | scale 1 → 0.98 | 0.15 s | ease-out | none |

Nothing in the hero is a `<Reveal>`. No per-item stagger. The glow is a static `text-shadow`.
Lenis: starter defaults (lerp 0.1, native touch). Motion tokens in `lib/motion.ts`: starter values.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The sign never drops below opacity 0.35, so it paints at once.
- At most 2 font families via `next/font`: Jost (variable, latin, 300–500) and Ms Madi (400, latin;
  fallback Mrs Saint Delafield), `display: swap`.
- owner-1.jpg is 1.08 MB: resize to 960px wide, quality ~78 (`sips -Z 960 -s formatOptions 78`), target < 200 KB.
- No preloaders, no video backgrounds, no WebGL. Map iframe lazy.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3: gold is
never text on wall, tile is never text), visible keyboard focus (2px gold / cobalt ring, 3px
offset), semantic landmarks (`header` hero, `main`, `section` with `aria-labelledby`, `footer`),
alt text on owner-1 and every illustration, tap targets at least 44 px (buttons 48, rows 72),
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and keyframes static).
h1 reads "Morning mantra" (text-transform for the caps). Skip link to `#konten`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
`<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Sign sizes, tracking, flute and tile backgrounds, and the arch radius live in named classes in
`globals.css` (`.sign-caps`, `.sign-script`, `.bar-front`, `.arch-frame`, `.tile-band`).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
