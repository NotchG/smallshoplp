# TRD: Elud Cake & Bakery Pondok Kelapa mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`):
```ts
type IllustrationId = "smokeBeef" | "bananaCrumble" | "rotiCokelat" | "rotiKeju" | "tart"
  | "blackforest" | "brownies" | "softSourdough" | "saltBread" | "strudel" | "pizzaCinta";
type Product = {
  id: string; name: string; illustration: IllustrationId;
  price?: string; was?: string;        // "Rp 9.000", "Rp 15.000"
  priceMockup?: boolean;               // price came from a [MOCKUP] line: data-mockup on the price only
  note?: Item;                         // e.g. "Dipuji pelanggan di ulasan Google"
  mockup?: boolean;                    // whole product is [MOCKUP] (Pizza Cinta ownership)
};
```
`shop` holds name, location line, address, phone (display + `tel:`), directions URL, map embed URL,
hours ("Setiap hari 06.15–22.00"), and `whatsapp` / `instagram` as `Item`s with `mockup: true`.
Exports: `strip`, `hero`, `roti` (lead, products, shelves, staples), `kue` (lead, sameDay, cta,
ctaNote, products), `baru` (lead, products), `praise` (rating, count, lines), `visit`, `banner`.
Price strings use Indonesian format: "Rp 9.000", rating "4,7". URLs are in the PRD.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text from PRD; restyle white ground, ink text (it sits above the ink strip) |
| SmoothScroll, Container, Reveal | all | starter | Reveal wraps each section's content once (sections 2–6), never single cards |
| FasciaHero | hero | new | ink strip, brick band with h1, lemon panel with lead, hours, buttons, HeroTray |
| HeroTray | hero | new | tray + Smoke Beef illustration + `PriceTag size="hero"` (signature moment) |
| PriceTag | hero, products | new | magenta tag: name, `<s>` old price with visually hidden "Harga sebelumnya", new price with hidden "Harga sekarang"; sizes `hero` / `item`; tilt -3° |
| SignPlaque | sections 2–6 | new | the section `h2` as a hanging sign: white plaque, brick border, two wire lines (`aria-hidden`) |
| TrayCard | Roti hari ini | new | travertine tray + illustration + PriceTag overlapping the tray's lower-left edge + optional note |
| ShelfSigns | Roti hari ini | new | small plaques (Croissant, Roll, Roti Manis, Blackforest) as a `ul` |
| FridgePanel | Kue ulang tahun | new | white panel with rack lines; 3 products, tags on each |
| Illustrations | products | new | 11 inline SVG components in `components/illustrations/`, spec in design brief §6 |
| ButtonLink | hero, kue, kunjungi | new | `primary` / `secondary` per ground (design brief §3), min height 48px |
| RatingBlock | Kata mereka | new | "4,7" in display face + "dari 234 ulasan Google" |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Elud Cake & Bakery">`, keyless embed URL |
| Footer | footer | new | brick band, name, phone, hours |

## React Bits (max 2)
None.

| Considered | Why not |
|---|---|
| Count Up (rating 4,7) | counting a rating up dramatises thin praise; the brief says not to build big claims on five one-line reviews |
| Rotating Text / Shiny Text / Split Text (hero) | the name is a painted fascia; effects on it fight the static sign and delay the LCP word |
| Sticker Peel / Tear Ticket (price tags) | gimmicks; the tag already carries the signature markdown |

The signature is bespoke CSS (below), so no dependency is needed.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero tag strike bar (signature, 1 of 3) | load, CSS keyframes | `transform: translateX(-101%) → 0` inside an `overflow: hidden` span over the old price | 0.30 s, delay 0.30 s | `cubic-bezier(0.16, 1, 0.3, 1)` | final state: bar drawn |
| Hero new price (signature, 2 of 3) | load, CSS keyframes | `translateY(-14px) → 0`, `opacity 0 → 1` | 0.35 s, delay 0.50 s | same | final state: visible |
| Hero tag nudge (signature, 3 of 3) | load, CSS keyframes | `rotate(-3deg) → -6 → -1.5 → -3deg` (tag pivots at its top-left) | 0.55 s, delay 0.55 s | `ease-in-out` keyframes | static at -3deg |
| Section content (sections 2–6) | ScrollTrigger `top 85%`, once (starter Reveal) | `y 20 → 0`, `autoAlpha 0 → 1` | 0.6 s | `power2.out` | visible, no motion |
| ButtonLink | hover / press, CSS | `::after` overlay `opacity 0 → 0.12`; press `translateY(1px)` | 150 ms | ease-out | instant |

The signature is CSS keyframes with `animation-fill-mode: both`, not GSAP: it runs from first paint
with no hydration flash and needs no JS. It ends by 1.1 s. Base styles are the final state. Under
`prefers-reduced-motion: reduce` set `animation: none` on the three parts: the starter's rule
(`animation-duration: 0.01ms !important`) shortens duration but not delay, so the new price would
otherwise stay hidden for 0.5 s (and the screenshots run with reduced motion).
Nothing else on the page animates. No animation on the plaques, trays, illustrations or the name.

Lenis: starter defaults (lerp 0.1, native touch).

Motion tokens in `lib/motion.ts`: `duration.reveal = 0.6`, others as starter. In `globals.css`:
`--ease-out-quint: cubic-bezier(0.16, 1, 0.3, 1)`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`:
  `Holtwood_One_SC` (weight 400, latin) and `Archivo` (variable weight, latin, no `wdth` axis).
  Expose as CSS variables on `<html>` and map them in `@theme inline` to `--font-display` / `--font-body`.
- No raster images at all: illustrations are inline SVG, each under ~4 KB.
- No preloaders, no video backgrounds, no WebGL.
- Map iframe `loading="lazy"`.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; never lemon
on white, never ink on magenta), visible keyboard focus (3px outline, 3px offset: ink on lemon and
white grounds, lemon on brick and ink grounds), semantic landmarks (`header`, `main`, `section`
with `aria-labelledby` its plaque `h2`, `footer`), `role="img"` + Indonesian `aria-label` starting
"Ilustrasi …" on every illustration, tap targets at least 48 px, `prefers-reduced-motion` honoured
everywhere (Lenis off, GSAP skipped, CSS signature at final state). h1 accessible name is
"Elud Cake & Bakery". Prices read as "Harga sebelumnya Rp 15.000, harga sekarang Rp 9.000".
`<html lang="id">`.

## SEO / meta
Title "Elud Cake & Bakery Pondok Kelapa: toko roti & kue ulang tahun"; description "Toko roti dan
pusat kue ulang tahun di Jl. Pondok Kelapa VI No. 10, Duren Sawit, Jakarta Timur. Buka setiap hari
06.15–22.00." Both from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §4–5. Section grounds are full-bleed on the `<section>`; content sits in
`<Container>`. Grids use a 12-column grid at `lg` (1024) and up.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
