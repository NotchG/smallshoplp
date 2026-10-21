# TRD: Soes Roti Kue Merdeka mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`lang="id"` on `<html>`; all UI strings in Bahasa Indonesia.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (extend the starter's `Item`):
```ts
type Item = { text: string; mockup?: boolean };
type Product = { name: string; price?: string; unit?: string; mockup?: boolean; priceMockup?: boolean; alt?: string };
shop     = { name, type, address, addressShort, phoneDisplay: "(021) 4757603", phoneHref: "tel:+62214757603",
             directionsUrl, mapsUrl, embedUrl, whatsapp: null /* [MOCKUP] until confirmed */, rating: "4,5", reviewCount: 308,
             hours: { open: "07:00", close: "20:00", days: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"] } }
hero     = { line: Item /* mockup */ }
soes     = { lead: Item, body: Item, star: Product, others: Product[] /* mockup */, sizes: Item, box10: Product }
abon     = { lead: Item, body: Item, jars: Product[], telur: Product }
camilan  = { lead: Item, tubs: Product[], shelf: Product[], kue: Product[], roti: Product[], lebaran: Item }
kotakan  = { mockup: true, lead: Item, body: Item, box10: Product }
praise   = { items: Item[] /* paraphrased, no names */ }
contact  = { lead: Item }
```
Exact strings and URLs are in the PRD's sections table. Prices are strings ("Rp 21.000"). A product
whose price is mockup but whose name is a fact (Telur Asin, Kacang Mete) uses `priceMockup: true`, so
only the price line gets `data-mockup`. Abon Ayam Pedas's price is a fact from the photo and gets no flag;
the owner checklist asks them to confirm it. `shop.whatsapp` stays `null`, and the WhatsApp button renders only when it's set.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text → "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh." |
| SmoothScroll | global | starter | Lenis defaults |
| Container | all | starter | 1200px container |
| Reveal | sections 2–7 | starter | one wrapper per section only |
| Hero | hero | new (server) | window + door panels, `kayu` frame lines, lockup as `<h1>` (sr-only "Soes Roti Kue Merdeka", visual lockup `aria-hidden`) |
| HangingSign | hero | new (client) | strings + white card; computes open/closed in `Asia/Jakarta` with `Intl.DateTimeFormat`; static fallback text in the server HTML; owns the swing |
| ActionButtons | hero, kunjungi, hubungi | new | `Petunjuk Arah` (primary, `merdeka` fill) and `Telepon` (outline); `tone="dark"` variant for `kayu`; ≥ 44px tall |
| PriceCard | soes, abon, camilan, kotakan | new | white card, name at body (700), price/unit at small with tabular-nums; `-mt-3` overlap onto its illustration, centred |
| ProductFigure | soes, abon, camilan, kotakan | new | `<figure>` = illustration + PriceCard; the only way products are placed, so proximity holds |
| Illustrations | soes, abon, camilan, kotakan | new | `SoesIllus({filling})`, `AbonJar({variant})`, `TelurAsin`, `Tub({variant})`, `BoxStack`; inline SVG, `role="img"` + Indonesian `aria-label` |
| Shelf | abon, camilan, kotakan | new | 1px hairline (`tinta`/18% on light, `kaca`/25% on `kayu`) under a row of figures |
| HoursTable | kunjungi | new (client) | 7 rows; today row marked after hydration (`kotak` fill + "Hari ini" tag); no highlight in server HTML |
| MapEmbed | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Soes Roti Kue Merdeka">`, 4:3, `kaca` placeholder background |
| Dots | soes, kata mereka | new (CSS) | `.bg-kotak-dots` utility in `globals.css`, static two-layer `radial-gradient` |

## React Bits (max 2)
None. I browsed reactbits.dev (text animations, animations, components, micro, backgrounds) and found nothing that suits an
old-school toko kue:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | – | Split/Blur/Fold Text break the connected script "Merdeka" and would compete with the signature sign; Count Up on the 4,5 rating is decoration; Dot Grid/Dot Field would make the printed box dots interactive, which a cardboard box isn't; Sticker Peel/Tear Ticket on price cards are gimmicks; Call Chip is an AI tool-call chip, not a phone button. | 0 | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero sign (signature moment) | load (after hydration, delay 0.15s) | `rotation` keyframes -10° → 6° → -3.5° → 1.8° → -1.5°, `transformOrigin` at the hook | 0.34 / 0.30 / 0.26 / 0.24s (≈1.2s) | `sine.inOut` per segment | none; CSS default `rotate(-1.5deg)` |
| Section wrappers, sections 2–7 | ScrollTrigger `top 85%`, once | `autoAlpha` 0→1, `y` 20→0 | 0.7s | `power2.out` | none; final state |
| Buttons, links | hover / press | `background-color`, `color`; `translateY(1px)` on `:active` | 150ms | ease-out (CSS) | colour only |
| Hero lockup, text, footer | – | not animated | – | – | – |

Lenis: starter defaults (lerp 0.1, native touch). Off with reduced motion.
`lib/motion.ts`: `duration.hero = 1.2`, `ease.swing = "sine.inOut"`; the rest stays as in the starter.
The sign tween lives in `useGSAP` scoped to the sign, returns early with `prefersReducedMotion()`, and
never changes opacity, so the sign is readable before, during and without the swing.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible (the hero text never animates).
- At most 2 font families via `next/font` (Leckerli One 400; Archivo variable with `axes: ["wdth"]`), latin subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL. No raster images at all: products are inline SVG, each under ~6 KB.
- Map iframe `loading="lazy"`, below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3), visible keyboard
focus (3px `pintu` ring on light grounds, `kotak` on `kayu`, 3px offset), semantic landmarks
(`header` hero, `main` sections each with an `h2`, `footer`), `aria-label` on every illustration, tap targets
at least 44 px, `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static). The sign's status
is plain text (`<p>`), not an image; the hours table is a real `<table>` with a caption.
Reviews are paraphrases in a `<ul>`, never `<blockquote>`/`<q>`.

## SEO / meta
Title "Soes Roti Kue Merdeka · Rawamangun"; description "Soes isi vla rum, abon, telur asin dan camilan
tradisional di Jl. Balai Pustaka No. 12, Rawamangun. Buka setiap hari 07.00–20.00." Both come from `content.ts`.
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Archivo width is set with `font-variation-settings` / `font-stretch` in utility classes (`.wd-112`), not inline.
Values: `--container: 1200px`; `--gutter: 20px` (40px ≥ 768); `--section-y: 64px` (112px ≥ 768); type steps as in design brief §4.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
