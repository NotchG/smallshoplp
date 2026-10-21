# TRD: Customs Coffee House mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No new npm dependencies (React Bits: none, see below).

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Exports (Indonesian copy exactly as in the PRD sections table):
- `shop`: name "Customs Coffee House", address, phone "0812-9154-8783", `tel` "+6281291548783",
  `whatsapp` { url "https://wa.me/6281291548783", mockup: true }, `mapsUrl`
  "https://maps.google.com/?cid=5990836913435509214", `mapEmbedUrl`
  "https://www.google.com/maps?q=CUSTOMS+coffee+house,+Jl.+Bujana+Tirta+2+No.4A,+Pisangan+Timur,+Jakarta+Timur&output=embed",
  `hours` [{ days "Senin–Sabtu", time "08.00–01.00" }, { days "Minggu", time "09.00–01.00" }],
  `hoursByWeekday` (0 = Minggu … 6 = Sabtu), `rating` { value "4,6", count 334 } (listing).
- `meta`: title "Customs Coffee House · Kopi single origin di Pulo Gadung"; description
  "Coffee shop di Pisangan Timur, Pulo Gadung, Jakarta Timur. Banyak pilihan kopi single origin, WiFi gratis, buka tiap hari sampai 01.00."
- `banner`, `hero` (line, mockup), `origins[]` { name, note: Item (mockup), fill 0.6–0.85 },
  `shelfCard` (mockup), `featured[]` { name: Item, price: Item, desc, image | "art", alt },
  `menuBoard[]` { label, items: { name: Item, price?: Item }[] }, `features[]` { title, line, mockup? },
  `praise[]` (paraphrased themes, never names), `visit` { houseRule }, `footer` { line }.
- Where a real thing has a mockup detail (a real drink with an example price, a photographed
  drink whose menu name is unconfirmed), the flag sits on the sub-item, not the whole entry.

`app/layout.tsx`: `lang="id"`, metadata from `meta`, `noindex` kept.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text from `banner` (Indonesian); `garasi` ground, `batu` text |
| SmoothScroll | global | starter | Defaults |
| Container | all | starter | Grounds go full-bleed on the parent `<section>` |
| Reveal | Rak biji, Menu, Tempat nongkrong, Kunjungi | starter | Section-level block only, never per item |
| Wordmark | Hero (`roll`), footer (static, lead size) | new | Hero renders the `<h1>`: visually hidden "Customs Coffee House" + `aria-hidden` visual ("CUSTOM", ring S, "coffee house"). Ring: inline-block square, `border: 0.09em solid` `cat`, `border-radius: 50%`, S centred, `transform-origin: 50% 50%`. "CUSTOM"+ring are `white-space: nowrap` and sit on a row of their own (desktop: row 2 holds "coffee house" + line in 7 cols, hours + buttons in 5 cols), so the rolling S crosses only empty mustard |
| HoursCard | Hero (`today`), Kunjungi (`week`) | new | `batu` card with CheckerEdge on top. Client-side "today" from `Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" })`; server and no-JS render shows "Senin–Sabtu 08.00–01.00 · Minggu 09.00–01.00". No "open now" status |
| CheckerEdge | HoursCard, Menu top | new | `aria-hidden` div; background `repeating-conic-gradient(var(--color-garasi) 0 25%, var(--color-batu) 0 50%) 0 0 / 16px 16px` (8 px squares on the card) |
| Awning | Hero bottom, footer top | new | `aria-hidden` band, 28 px phone / 40 px desktop, `repeating-linear-gradient(90deg, …)` ridges in `cat` and its derived light tone (design brief §3) |
| ActionButton | Hero, Kunjungi, footer | new | `<a>`, pill, min-height 48 px, label in body font 600. Variants: primary/secondary × light/dark ground (colours in design brief §3). Hover tint is an `::after` layer faded by opacity, never a colour transition. External links `target="_blank" rel="noopener"` |
| BeanJar | Rak biji | new | Inline SVG `aria-hidden` (clip-top jar, bean fill to `fill` level, tape strip). The origin name is HTML text in label style laid over the tape, so it stays real text |
| Shelf | Rak biji | new | `<ul>` grid, 2 cols phone / 4 cols from 768, `column-gap: 0` so each cell's 10 px `pinus` bottom border joins into one shelf bar; shelf tag (note) directly under the bar; 8th cell = mustard `shelfCard` |
| ManualBrewArt | Menu | new | Inline SVG flat illustration 4:5 (design brief §6), `role="img"` + Indonesian `aria-label`, `data-mockup` |
| ProductFigure | Menu | new | `<figure>`: image (4:5) + `<figcaption>`: name and price on one line (`·` separator), one-line desc. No card border or shadow |
| MenuBoard | Menu | new | Two groups (4 + 8 cols from 768, stacked on phone); each label (label style) directly above its inline list, 8 px; price 8 px after its name in condensed bold (label face, not uppercased: "Rp 28rb"); items separated by " · " |
| FeatureSticker | Tempat nongkrong | new | `<li>`: sticker title (label style, `garasi` on `batu`, rounded 10 px, static tilt taken in order from −1.5°, 1°, −0.5°, 1.5°, −1°, 0.5°) + one line in `batu` directly below |
| PraiseList | Kata mereka | new | `<ul>`, 2×2 from 768; themes at lead size; source line small |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Customs Coffee House">`, 4:3, `referrerpolicy="no-referrer-when-downgrade"`; a Petunjuk Arah link beside it, never only the map |
| HouseRule | Kunjungi | new | Small `batu` sign, body text in `garasi` |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | — | The signature (the S wheel) is a few lines of GSAP already in the stack; nothing in the catalog does a job on this page that the plan doesn't already cover | 0 | — |

Considered and declined (reactbits.dev, browsed for this plan):
- Sticker Peel: fits the sticker-covered counter, but a drag-to-peel toy is decoration, fights touch scrolling, and pulls the eye from the wheel.
- Counter (odometer): rolling "01.00" would be a second signature moment.
- Circular Text: a spinning ring round the S would loop and duplicate the signature.
- Scroll Velocity: an origins marquee is looping decoration; the shelf shows the seven origins better, and still.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero ring S (signature moment) | load, once, in `useGSAP` scoped to the Wordmark | `gsap.from`: `x: Math.PI * ringWidth` (measured), `rotation: 360`, `autoAlpha: 0` (opacity over the first 0.3 s via a separate tween) | 1.0 s | `power3.out` (`ease.roll`) | final state, no motion |
| Rak biji shelves block | ScrollTrigger `top 85%`, once (Reveal) | `y: 20 → 0`, `autoAlpha 0 → 1` | 0.6 s | `power2.out` | final state |
| Menu block (featured + board) | same | same | 0.6 s | `power2.out` | final state |
| Tempat nongkrong block | same | same | 0.6 s | `power2.out` | final state |
| Kunjungi block | same | same | 0.6 s | `power2.out` | final state |
| ActionButton | hover / focus-visible / active | `::after` tint `opacity 0 → 1` (CSS); `translateY(1px)` on active | 0.18 s / 0.15 s | ease-out | tint shown instantly, no press movement |

Hero `<section>` has `overflow-x: clip` so the S's start position never adds horizontal scroll.
No other element in the hero animates; nothing is hidden longer than the 1.0 s roll.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`:
  `M_PLUS_Rounded_1c({ weight: ["800", "900"], subsets: ["latin"], variable: "--ff-rounded" })` and
  `Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--ff-archivo" })`. In `@theme`:
  `--font-display: var(--ff-rounded), ui-rounded, system-ui, sans-serif` and
  `--font-body: var(--ff-archivo), system-ui, sans-serif` (use `@theme inline` if the reference
  doesn't resolve). If M PLUS Rounded 1c fails to build, fall back to Nunito 800/900 and note it.
- Images pre-cropped and resized before they go into `site/public/photos/` (`sips` or any local
  tool, no new npm deps), JPEG quality ~75:
  owner-1 → `hero-wide.jpg` 1600×600 (≤ 220 KB) and `hero-phone.jpg` 800×600 (≤ 90 KB) in a `<picture>`,
  `fetchpriority="high"`, explicit width/height; owner-3 → 1000×1250; owner-2 → 800×1000;
  owner-5 → 900×900; all ≤ 150 KB, `loading="lazy"`. Crops as in design brief §6–7.
  Never copy owner-4.jpg or any `photo-*.jpg`.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs checked in design brief §3;
never `cat` text on `garasi`, never `fascia` text on `tembok`), visible keyboard focus (3 px ring,
colour per ground), semantic landmarks (`main#konten` holding the sections, `footer` for Hubungi kami), Indonesian alt
text on every photo and the illustration, tap targets at least 44 px (buttons 48 px),
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP skipped).
The h1's accessible name is "Customs Coffee House"; jar names are real list text; the map has a
title and a text address beside it; WhatsApp link label "Chat WhatsApp".

## SEO / meta
Title and description from `content.ts` (`meta`). `lang="id"`. `noindex` stays on (starter
default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add one helper, `.t-label` (body font, `font-stretch: 75%`, 700, uppercase, `letter-spacing: 0.04em`),
and `font-variant-numeric: tabular-nums` on hours and prices. Values are in design brief §4–5.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
