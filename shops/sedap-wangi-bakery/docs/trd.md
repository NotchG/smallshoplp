# TRD: Sedap Wangi mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`):
- `shop`: name "Sedap Wangi", label "Roti & Kue", since "Sejak 1979", address, phone
  `(021) 861 6311` / `tel:+62218616311`, whatsapp `0822 4999 6668` / `https://wa.me/6282249996668`
  (`mockup: true`), `directionsUrl` (PRD link with place id), `mapEmbedUrl`
  (`https://www.google.com/maps?q=Sedap+Wangi+Bakery,+Jl.+Cipinang+Muara+I+No.+20,+Jakarta+Timur&output=embed`),
  rating `{ value: "4,5", count: 942 }`.
- `hours`: per weekday `{ day: 0–6, label: "Senin"…, open: "09.00", close: "19.00" }` from raw.json
  (Sun 08.00–19.00, Mon–Fri 09.00–19.00, Sat 08.00–19.30) plus grouped display rows.
- `favourites`: `{ name, note, price?, illustration, mockup? }` × 5. Price items with no source are absent, not blank.
- `caseItems`: six `{ name, price }` from the PRD, caption with "November 2025".
- `alsoSold` (`mockup: true`), `deals` (review 1).
- `dishes`: eight `{ name, price, src, alt }`; `menu`: seven categories `{ title, open, rows: { name, price, sub? }[] , note? }` transcribed in the PRD.
- `orders`: two cards; `praise`: six paraphrases with source review numbers in a code comment only.
- `copy`: headings, intros, banner text, meta title and description. Authored lines `mockup: true`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `.container-page` |
| Reveal | Etalase, Dapur, Pesan, Kata, Kunjungi | starter | one per section block, never per card |
| MockupBanner | top | starter | text translated to Indonesian (PRD); maroon ground |
| SmoothScroll | root | starter | defaults |
| LogoLockup | hero, footer | new | frame + edge labels breaking the border on a knock-out; `size="hero" \| "footer"`; footer variant paper on maroon |
| HoursToday | hero | new, client | today's hours in `Asia/Jakarta` via `Intl.DateTimeFormat("id-ID", { weekday, timeZone })`; SSR/no-JS text "Buka setiap hari" |
| CakeBox | hero | new | inline SVG: box base, doily, whole lemon cake, tent tag; lid as a separate absolutely positioned SVG; CSS keyframe (motion spec) |
| SectionTab | every h2 | new | brick block + rule + 10px open circle; `tone="light" \| "maroon"` |
| TentCard | Etalase | new | `variant="feature" \| "row" \| "mini"`; maroon strip "KUE · SEDAP WANGI" at `--step-small` |
| CakeIllustration | Etalase, hero | new | `components/illustrations/*.tsx`, one per cake, shared viewBox 240×160, flat fills from the design brief |
| DishStrip / DishTile | Dapur | new | `<img>` with width/height, `loading="lazy"`; phone: horizontal scroll strip (`overflow-x: auto`, `scroll-snap-type: x proximity`, `data-lenis-prevent`); desktop: 2×4 grid |
| MenuBoard / MenuCategory | Dapur | new | paper panel, 6px brick frame; each category a `<details>` (all rendered `open`; on mount below 768px close all but Soto and Mie Spesial); rows with dotted leader |
| KeyBand | Pesan, footer | new | `aria-hidden` SVG `<pattern>` of a white square-spiral motif, 24px tall |
| OrderCard | Pesan | new | paper card on maroon; italic brick "Pesan sekarang!"; WhatsApp button |
| PraiseList | Kata pelanggan | new | `<ul>`, bullets are the tab's open circle |
| VisitBlock | Kunjungi | new | address, hours `<table>` (today's row blush + "hari ini"), parking, buttons, lazy `<iframe title="Peta lokasi Sedap Wangi">` with a link fallback |
| Button | everywhere | new | primary brick, secondary outline brick; min 48px tall; overlay-based hover |
| Footer | footer | new | |

Assets: crop the eight dish tiles from `shops/sedap-wangi-bakery/photos/owner-1.jpg` with the boxes in
design brief §6 into `site/public/dishes/<slug>.jpg` (quality ~82). Copy nothing else from `photos/`;
never copy `photo-*.jpg`.

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The signature is a bespoke CSS lid; the shop's voice is print and signage. Considered and rejected: Split Text on the h1 (competes with the lid, reads as tech), Count Up (would tempt "years since 1979" maths and animating a rating), Circular Text "Sejak 1979" stamp (decoration without a job), Circular Gallery / Carousel for cakes (hides names and prices behind interaction) | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero cake-box lid (signature moment) | load, CSS `@keyframes lid-open`, delay 300ms, fill `both` | transform: `translate(0,0) rotate(0)` → `translate(-8%,-62%) rotate(-6deg)` (base style = end pose) | 1100ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none`; lid at end pose, no motion |
| Section blocks (Etalase grid, Dapur board, order cards, praise list, visit block) | ScrollTrigger `top 85%`, once (starter Reveal) | opacity 0→1, y 20→0 | 0.6s | power2.out | final state, no motion |
| Buttons | hover / press (CSS) | `translateY(-1px)`; `::after` overlay opacity 0→0.12; press `scale(0.98)` | 150ms | ease-out | overlay opacity only |
| Tent cards | hover, `(hover: hover) and (pointer: fine)` only | `translateY(-3px) rotate(-0.6deg)` | 200ms | ease-out | none |
| Menu `<details>` chevron | toggle | `rotate(0 → 180deg)` | 200ms | ease-out | instant |

Nothing else moves: no hero text animation, no tile or row stagger, no parallax.
`lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 1.1 }`, `distance.reveal = 20`,
add `ease.lid = "cubic-bezier(0.16, 1, 0.3, 1)"` for reference (the lid itself is CSS).
Lid layout: the box wrapper reserves the lid's resting room (`padding-top` ≈ 48% of box width) so
the end pose never overlaps the buttons above it on phone; the hero section uses `overflow-x: clip`.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The h1 is live text and is the LCP element; the hero has no raster images.
- At most 2 font families via `next/font`, subset, `display: swap`: Antonio 700; Atkinson
  Hyperlegible Next 400, 700, 400 italic (fallback: Atkinson Hyperlegible).
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Dish tiles ≤ 30 KB each, lazy below the fold; map iframe `loading="lazy"`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; never
brick on maroon), visible keyboard focus (3px paper-offset brick outline; paper outline on maroon),
semantic landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`), alt text on every
illustration and dish tile in Indonesian, tap targets at least 44 px (buttons 48 px),
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and the CSS lid static).
`<html lang="id">`. Hours as a real `<table>`. The lid SVG and key bands are `aria-hidden`; the box
figure has `role="img"` and `aria-label="Ilustrasi kotak kue Sedap Wangi berisi lemon cake utuh"`.
The h1 reads "Sedap Wangi" (uppercase by CSS only).

## SEO / meta
Title and description from `content.ts`:
title "Sedap Wangi · Roti & Kue sejak 1979 · Duren Sawit, Jakarta Timur";
description "Roti dan kue rumahan, sotomie dan masakan Indonesia di Jl. Cipinang Muara I No. 20, Jakarta Timur. Buka setiap hari."
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design brief §4 and §5. Add `--gutter: 32px` at `min-width: 768px`. Palette into `@theme`
as `--color-paper/brick/maroon/marble/ink/blush`; fonts as `--font-display` (Antonio) and
`--font-body` (Atkinson). The h1 uses `.t-display` with two `display:block` word spans; check at
390 and 1440 that "WANGI" fits inside the logo frame and lower the `--step-display` max if not.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
