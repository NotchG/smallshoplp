# TRD: OSMO Coffee & Eatery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts live in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Extend the starter types. One item can mix fact and mockup fields, so flag each field separately:
```ts
type Item = { text: string; mockup?: boolean };
type Dish = { name: Item; desc?: Item; price?: Item; img?: { src: string; alt: string } };
```
Exports:
- `shop`: name, shortName "OSMO", address, phone "0811-1011-3993", tel "+6281110113993",
  `waUrl` (mockup), `mapsUrl` = `https://maps.google.com/?cid=14689524655505368407`, `mapEmbedUrl` =
  `https://www.google.com/maps?q=OSMO+Coffee+%26+Eatery,+Jl.+Mpok+Nori+No.10,+Bambu+Apus,+Cipayung&output=embed`,
  `hours` (7 rows: Senin…Minggu, open "08.00", close "23.00"), `openMin: 480`, `closeMin: 1380`,
  `rating: "4,9"`, `reviewCount: "3.033"`
- `hero`, `menu` (`bowls: Dish[3]`, `more: Dish[4]`), `praise` (lead + 4 `{title, text}`), `bar` (coffee,
  nonCoffee, breakfast, pastry, canned), `space` (lead, 3 blocks, facilities), `visit`, `contact`, `footer`.
All text is in the PRD's sections table. Every `[MOCKUP]` field there gets `mockup: true`.

## Assets
Crop with Python/PIL (`python3 -I`, PIL is installed). Boxes are `(left, top, right, bottom)` in
owner-1.jpg's 1600×2400 pixels. They were checked by eye: no Charlie Chaplin poster, and no finger slivers inside the circles.
| File (`site/public/img/`) | Box | Output |
|---|---|---|
| `osmo-meja-1400.jpg`, `osmo-meja-800.jpg` | (0, 0, 1600, 1700) | 1400w and 800w, q 80, `srcset` |
| `bowl-chicken.jpg` | (144, 618, 788, 1262) | 640×640, q 82 |
| `bowl-cumi.jpg` | (908, 990, 1520, 1602) | 640×640, q 82 |
| `bowl-beef.jpg` | (328, 1470, 948, 2090) | 640×640, q 82 |
Bowls render as `<img>` with `border-radius: 50%` (the box edge is the plate rim). The hero uses
`object-fit: cover` with `object-position: 50% 45%`. Alt text is in Indonesian and describes the food
(for example "Rice bowl ayam goreng dengan saus kuning creamy dan sayur krispi, dilihat dari atas").
`photo-*.jpg` are never copied.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text changed to the Indonesian line in the PRD |
| Container, SmoothScroll | all | starter | |
| Reveal | menu tray, bar, space | starter | section-level only, nowhere else |
| Hero | hero | new | 12-col grid ≥1024: text cols 1–6, photo col 7 → viewport edge (bleed via negative margin or a full-bleed grid) |
| DayBand | hero | new, client | the signature moment; see the motion spec |
| BeanMark | DayBand, liner pattern | new | inline SVG: a circle with an S-shaped crease; `aria-hidden`; `data-mockup` (logo stand-in) |
| MenuTray | menu | new | walnut 14px frame, radius 20px; `alas` liner with an inline-SVG `<pattern>` (BeanMark + "OSMO" text in Jost, 8% `tinta`, staggered 120px tile), `aria-hidden`; 3 × BowlPlate |
| BowlPlate | menu | new | round photo + name · price + desc; phone: row (132px bowl, text 16px right); ≥768: column (bowl up to 300px, text centred 16px below) |
| DishList | menu, bar | new | `<ul>`; name (Jost 500) then " · Rp 45rb" inline in `tinta-pudar` (on `plester`) or `tinta` (on `semen`) |
| Praise | praise | new | left block + 2×2 themes with a 1px hairline above each (`tinta` at 20%) |
| CannedCard | bar | new | `tinta` card, radius 16px; CanIllustration (inline SVG ~150×250: `#DCD7D2` body, `semen` rims, a `tinta` band reading "AREN LATTE" in spaced caps), `data-mockup` |
| AFrame | space | new | inline SVG, viewBox 460×420, `plester` 2px strokes (steel diagonals 4px): gable, ~9 rafters, tie beam, a 3×3 glass-wall grid, 3 hanging pots. Under 40 elements, `aria-hidden` |
| Visit | night | new | address, toll line, hours table (`<table>`, day column 96px), button, map `<iframe loading="lazy" title="Peta lokasi OSMO Coffee & Eatery">` |
| Contact | night | new | `<ul>` of rows: label, value, arrow; Instagram row is plain text (`data-mockup`) |
| Footer | footer | new | the sign wordmark (`aria-hidden`, next to visible text) + the draft line |

Buttons: height 48px, radius 12px, Jost 600 uppercase, 0.06em tracking, `--step-body`.
Primary: `tinta` fill with `plester` text (inverted on night). Secondary: 2px `tinta` outline.
Focus: 3px outline with a 3px offset, `tinta` on light backgrounds and `plester` on dark ones.

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | — | The signature is custom and specific to OSMO (bean on the day line). Considered and rejected: Count Up (cliché for "3.033 ulasan"), Circular Text (a spinning coaster ring is decoration with no job), Rotating Text ("kerja / nongkrong / nobar" cycling hides two of the three), Logo Loop (marquee noise). | 0 | — |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): DayBand fill | load, after `document.fonts.ready` + 0.25s | `xPercent` -100 → `(p-1)*100` (inner bar inside an `overflow:hidden` track) | 1.1s (`duration.hero`) | `expo.out` | final state, no motion |
| Hero (signature moment): bean marker | same timeline, same start | `x` from `-p * trackWidth` → 0 (final `left: calc(var(--p) * 100%)` in CSS) | 1.1s | `expo.out` | final state, no motion |
| "Sekarang…" label | end of the marker tween | `autoAlpha` 0 → 1, `y` 6 → 0 | 0.3s (`duration.label`, new) | `power2.out` | visible, no motion |
| Menu tray, bar section, space section | ScrollTrigger `top 85%`, once | `autoAlpha`, `y` 20 → 0 (starter `Reveal`) | 0.7s | `power2.out` | static |
| Buttons, contact rows | hover / press | background-color, color (CSS) | 180ms | ease-out | instant |

DayBand logic, in `useEffect` (never during render, so there is no hydration mismatch):
- Read Asia/Jakarta time via `Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })`.
- `p = clamp((min - 480) / 900, 0, 1)`. Set `--p` on the track, then build the status string (formats in the PRD; time as "14.20").
- When `p = 0`, skip the travel animation.
- The label stays left-aligned to the marker while `p < 0.8`. From 0.8 it is right-aligned (`translateX(-100%)` set in CSS, not animated).
- With JS off, or before the effect runs, the fill, marker and label are not rendered. "Buka hari ini 08.00–23.00" is always plain text.
- The track, ticks and marker are `aria-hidden`. The status line is real text.
- One `useGSAP` with a scope on the DayBand.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5s on a mid-range phone; nothing animates before the hero text is visible.
  The hero `<img>` gets `fetchPriority="high"`, width and height, and `srcset` (800w/1400w). The bowls get `loading="lazy"`.
- At most 2 font families via `next/font`, subset, `display: swap`: Jost (500, 600), Figtree (400, 500).
- No preloaders, no video backgrounds, no WebGL. The map iframe is lazy and sits below the fold.
- Animate transform and opacity only.

## Accessibility
- WCAG 2.2 AA contrast for all text on its actual background. Pairs are in design brief §3, and `tinta-pudar` is never used on `semen`.
- Visible keyboard focus, tap targets of at least 44px, and `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static).
- `lang="id"`, a skip link "Langsung ke konten" → `#konten`, and landmarks `main` and `footer` (the draft banner stays the starter's `role="note"`).
- One `h1` ("OSMO Coffee & Eatery", uppercase and tracking via CSS only), then an h2 per section and h3 inside them.
- Praise is paraphrased, with no `<blockquote>`, no quotation marks and no names.
- The hours table has a caption ("Jam buka").

## SEO / meta
- Title: "OSMO Coffee & Eatery · Kafe di Bambu Apus, Cipayung".
- Description: "Kopi dari jam 8 pagi, rice bowl, pasta, dan tempat kerja yang nyaman. Buka setiap hari 08.00–23.00 di Jl. Mpok Nori, Bambu Apus, Jakarta Timur."
- Both come from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values are in design brief §4–5.
- `--gutter` is 20px, then 32px from 768 and 40px from 1024.
- `--section-y` is 64px, then 112px from 768.
- Add `--leading-display: 0.9` and the tracking classes `.track-mark` (0.32em), `.track-head` (0.12em) and `.track-label` (0.16em).
- `@theme` colours: `plester`, `alas`, `tinta`, `tinta-pudar`, `plester-pudar`, `semen`, `daun`, `walnut`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
