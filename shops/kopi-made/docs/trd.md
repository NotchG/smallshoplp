# TRD: Kopi Made mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item`):
- `shop`: name "Kopi Made", wordmark "kopimade", type, address, landmark ("seberang Buaran Plaza dan
  Electronic City"), `mapsUrl` `https://maps.google.com/?cid=8082327129688560767`, `mapEmbedUrl`
  (`https://www.google.com/maps?q=Kopi+Made,+Jl.+Radin+Inten+II+No.213,+Klender,+Jakarta+Timur&output=embed`),
  `whatsapp: { number: "", mockup: true }`, `phone: { number: "", mockup: true }`,
  `instagram: { url: "", mockup: true }`, rating `{ value: "4,4", count: 577 }`.
- `hours`: seven entries `{ day: "Senin", open: "10.00", close: "22.00" }` … `{ day: "Minggu", closed: true }`,
  index matching JS `getDay()` order via a lookup, used by both the today board and the week table.
- `brew`: six `{ name, line, price?, icon, mockup }` (line copy is mockup: true; V60 price mockup: true).
- `beans`: origins `["Sumatra", "Bali"]`, roasting line (sourced, review 5), take-home line (mockup: true).
- `menu.minum` / `menu.makan`: `featured: { name, note?, price?, illo, priceMockup }[]` and
  `groups: { label, items: Item[] }[]`. Cireng is `mockup: true`. Prices are `mockup: true`.
- `place`: statement, four facts, four paraphrased `praise` themes (never quotes, never names).
- `ui`: every button label and the banner text, in Bahasa Indonesia.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Kopi Made. Beberapa detail masih contoh sampai dikonfirmasi." |
| SmoothScroll | global | starter | Defaults |
| Container | all | starter | 12-col grid inside on ≥1024 |
| Reveal | seduh, menu, tempat, kunjungi | starter | One per section block, not per card |
| CheckStrip | hero top, footer top | new | 16px, `repeating-conic-gradient(board 0 25%, cream 0 50%) 0 0 / 16px 16px`, `aria-hidden` |
| SignWordmark | hero, footer (static) | new | h1 with accessible name "Kopi Made"; three `aria-hidden` layers (unlit, lit, glow) stacked with grid-area; white outline via stacked text-shadow; a `static` prop for the footer |
| HeroRoom | hero | new | `owner-1.jpg` as `<img>` (priority, `fetchPriority="high"`), one wall overlay gradient, one warm radial layer (opacity animated) |
| PineFrame | hero board, menu boards, map | new | 10px/8px pine border wrapper, board fill |
| TodayBoard | hero | new, client | Asia/Jakarta open state; SSR/no-JS shows the week summary line; client swaps in today's state in `useEffect` (no hydration mismatch) |
| BrewGrid + BrewIcon | seduh | new | 3×2 / 2×3 cubby grid, six inline SVG line icons, 56px |
| BeanJars, BeanBag | seduh | new | Inline SVG, labels as HTML text |
| MenuBoard + FoodIllo | menu | new | Featured row + grouped lists; six inline SVG illustrations (design brief §6) |
| PraiseFrames | tempat | new | Double-line frames, 2×2 on desktop |
| HoursTable | kunjungi | new | `<table>` with caption "Jam buka"; today row marked with a lamp bar and `aria-current="date"` (client) |
| MapEmbed | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Kopi Made">` in PineFrame, 4:3 |
| ActionButtons | hero, kunjungi | new | Primary (sign) / secondary (cream outline); mockup buttons href `#kunjungi` with `data-mockup` until numbers exist |
| SiteFooter | footer | new | Static wordmark, address, hours line, mockup note |

## React Bits (max 2)
None. The site's one moment is the shop's own sign lighting up, a five-tween GSAP opacity timeline
that no React Bits component does better. The text effects (Split, Blur, Shiny, Decrypted) would put
noise on a shop whose appeal is quiet; the backgrounds (Noise, Dark Veil, Particles) would fight the
room photo; carousels would hide menu items that should be read at a glance.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero lit wordmark (signature) | load, after `document.fonts.load("1em 'Kaushan Script'")` or 500ms, +0.15s | opacity 0 → 0.9 → 0.3 → 1 | 0.08 / 0.08 / 0.25s | none / none / power2.out | final state, no motion |
| Hero glow layer | same timeline, +0.35s | opacity 0 → 0.55 | 0.8s | power2.out | final state |
| Hero room-warm layer | same timeline, +0.35s | opacity 0 → 1 | 1.0s | power1.out | final state |
| Seduh block, menu boards pair, Tempat block, Kunjungi block | ScrollTrigger `top 85%`, once (starter Reveal) | autoAlpha 0 → 1, y 20 → 0 | 0.7s | power2.out | static, visible |
| Buttons | hover / press (CSS) | `::after` overlay opacity 0 → 0.12; scale 0.98 on `:active` | 0.15s | ease-out | instant |

Pre-paint: an inline script in `<head>` adds `sign-pending` to `<html>` only when reduced motion is
off. CSS: `.sign-pending .sign-lit, .sign-pending .sign-glow, .sign-pending .room-warm { opacity: 0;
animation: sign-failsafe 0s linear 2.5s forwards }` (keyframe to opacity 1). The GSAP timeline sets
the three layers to 0 inline, removes the class, then plays. The unlit layer and all hero text are
visible from first paint. `useGSAP` with a scope on the hero.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Bitter (variable) and Kaushan Script (preload).
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only. The glow's blur is static.
- Re-encode `owner-1.jpg` into `public/img/ruang.jpg` at ≤150 KB (it's shown darkened); width/height set.
- Illustrations inline SVG, under 4 KB each. Map iframe lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3), visible
keyboard focus (2px `lamp` outline, 3px offset on dark grounds; `board` outline on pine), semantic
landmarks (`header`, `main#konten`, `section` with `aria-labelledby`, `footer`), alt text on every
image (illustrations: "Ilustrasi …"; owner-1: "Sudut dalam Kopi Made: meja dan kursi kayu di depan
sofa kulit panjang"), tap targets at least 44px, `prefers-reduced-motion` honoured everywhere
(Lenis off, GSAP skipped). The hero overlay must keep cream text ≥ 4.5:1 over the brightest part of
the photo behind it; verify in the 390 and 1440 screenshots.

## SEO / meta
`<html lang="id">`. Title "Kopi Made · Kopi seduh di seberang Buaran Plaza, Klender". Description
"Kedai kopi kecil dan tenang di Jl. Radin Inten II No. 213, Klender, Jakarta Timur. Manual brew,
Es kopimade, Nasi Goreng Made. Senin–Sabtu 10.00–22.00." Both from `content.ts`. `noindex` stays on
(starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add `--leading-display: 1.0` (the script has deep descenders), gutter 20 / 32 (≥768) / 40px (≥1200),
section-y 64 / 112px, and the six palette colours plus `mist` and `white` to `@theme`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
