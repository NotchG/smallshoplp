# TRD: Kanal Feds mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep every string in Bahasa Indonesia):
- `shop`: `name` ("Kanal Feds"; rendered uppercase by CSS, never typed in caps, so screen readers say the
  name), `tagline` (mockup), `address`, `landmark` ("Di sebelah gym, Pondok Bambu"), `phoneDisplay`
  ("0814-1053-8375"), `phoneTel` ("+6281410538375"), `mapsUrl` (raw.json `googleMapsUri`),
  `mapEmbedUrl` (`https://www.google.com/maps?q=<url-encoded name + address>&output=embed`),
  `whatsapp` { `url`: "https://wa.me/6281410538375", `mockup: true` }, `rating` { `value`: "4,7",
  `count`: 228 }.
- `hours`: seven entries keyed by JS day index (0 = Minggu … 6 = Sabtu): `{ day: "Senin", open: "07:00",
  close: "21:00" }`. Fri, Sat, Sun close "22:00"; Mon–Thu "21:00" (raw.json `regularOpeningHours`).
  `hoursSummary`: "Senin–Kamis 07.00–21.00 · Jumat–Minggu 07.00–22.00", `hoursNote`: "Buka setiap hari".
- `moments[2]`: `{ time, title, text, extra?: { text, mockup: true } }`.
- `featured` (Sabor A Mi) and `products[3]`: `{ id, name, nameMockup?, desc, price?, priceMockup,
  illustration: "saborAMi" | "cappuccino" | "esKopiKrim" | "mousseCake", illustrationMockup: true, alt }`.
- `menuColumns[4]`: `{ title, priceRange?, items: { name, price? }[], mockup: true }`.
- `spaces[4]`, `placeholders[3]` (`{ label, alt, mockup: true }`), `themes[4]` (`{ title, text }`),
  `contactRows[3]`, `meta` { `title`, `description` }, `banner`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Copy "Draf tampilan · bukan situs resmi Kanal Feds" |
| Container, `.section`, `.t-*` | all | starter | Every section inside `<Container>` |
| Reveal | 2, 3, 4, 5, 6 | starter | Section-level only; not on the hero, not on the close |
| Hero | 1 | new | Top row (address left, anchors right on ≥1024), H1, tagline, actions, rating, `TodayLine` |
| TodayLine | 1 | new, client | Signature moment. Server/no-JS render: label "JAM BUKA", status "Buka setiap hari", line with "07.00" at the left end and "21.00 / 22.00" at the right, weekly summary under it, marker hidden. After mount: label "HARI INI · KAMIS", status per `lib/hours.ts`, ends 07.00 to today's close, marker at now. Same DOM shape in both, so no layout shift. Hour ticks every 3 hours (10, 13, 16, 19) at ≥1024px only; phone shows the two ends |
| `lib/hours.ts` | 1, 6 | new | Pure `todayStatus(date)` using `Intl.DateTimeFormat` with `timeZone: "Asia/Jakarta"` (never the device zone). Returns `{ dayIndex, dayName, state: "before" \| "open" \| "after", closeLabel, progress 0–1 }` |
| ActionButton | 1, 6 | new | `primary` (palm fill, chalk text) and `secondary` (2px palm outline, palm text); min-height 48px; radius 2px |
| MomentCard | 2 | new | Jade square bullet + time label + text |
| ProductFrame | 3 | new | Walnut "slab" frame: 12px walnut on left and right, 3px top and bottom, chalk inside; caption "Ilustrasi · foto menyusul" directly under (≤12px gap) |
| Illustrations | 3 | new, inline SVG | `SaborAMi`, `Cappuccino`, `EsKopiKrim`, `MousseCake`. Flat fills from the palette plus the illustration-only colours in the design brief; `role="img"` + Indonesian `aria-label`; no logo mark on any cup |
| MenuColumns | 3 | new | Four columns of plain list items; price inline right after the name |
| PhotoPlaceholder | 4 | new | `palm-2` panel, crazy-paving line pattern (one authored SVG `<pattern>`, jade at low opacity), label "Foto dari pemilik · <ruang>" top-left inside; `data-mockup` |
| ThemesGrid | 5 | new | 2×2 on desktop, stacked on phone |
| HoursTable | 6 | new, client | Seven rows, static in HTML; after mount the Jakarta-today row gets the jade square and weight 600 |
| MapEmbed | 6 | new | `<iframe loading="lazy" title="Peta lokasi Kanal Feds">`, 4:3, 1px concrete border |
| ContactRows | 7 | new | Three full-width row links, ≥64px tall, arrow at the end of the text (not at the far edge) |
| Footer | 7 | new | Wordmark, address, draft note |

## React Bits (max 2)
None.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | n/a | The signature moment is the custom `TodayLine`, which does a real job (is it open now?). Considered and rejected: Split Text / Blur Text on the H1 (a second hero effect would compete with the day line, and the brief's tone is "no hype"); Count Up on the rating (a counting 4,7 is gimmicky); Circular Text or Rotating Text (decoration with no job); any background (Silk, Aurora, Dot Grid: noise the calm, minimal brief rules out) | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| TodayLine marker (signature moment) | load, after mount, 200ms delay | marker rail `xPercent` 0 → `progress × 100`; marker `opacity` 0 → 1 over the first 150ms | 900ms | `expo.out` (= cubic-bezier(0.16, 1, 0.3, 1)) | final state, no motion |
| TodayLine elapsed fill | same timeline as marker | full-width bar `xPercent` −100 → `−(1 − progress) × 100` inside a track with `overflow-x: clip` | 900ms | `expo.out` | final state, no motion |
| TodayLine before open / after close | load | no travel; marker `opacity` 0 → 1 at the start (before) or end (after) | 300ms | `power2.out` | final state, no motion |
| Status text swap (fallback → today) | after mount | text replaced, `opacity` 0.4 → 1 | 200ms | `power2.out` | swap, no fade |
| Section reveals (2–6) | ScrollTrigger, `top 85%`, once | `y` 20 → 0, `opacity` 0 → 1, whole section | 600ms | `power2.out` | final state, no motion |
| Buttons, contact rows, links | hover / press (CSS) | background-color, color; contact-row arrow `translateX` 0 → 4px | 180ms | ease-out | colour change only, arrow static |

The hero H1, tagline and buttons do not animate: they are visible on first paint (LCP).
No continuous motion: the marker does not tick or follow the clock after it lands.
Lenis: starter defaults (lerp 0.1, native touch).

Implementation notes: percentages, not measured pixels, so the line stays right on resize. Use
`overflow-x: clip` (not `hidden`) on the track so the taller marker is not cut off and no scroll
container is created. Wrap the timeline in `useGSAP` with a scope.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. This site uses one: Jost.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Illustrations are inline SVG (no raster images on the page). The map iframe is lazy and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics:
- `lang="id"`. H1 text is "Kanal Feds" with `text-transform: uppercase`.
- `TodayLine`: the track and marker are `aria-hidden`; the status sentence is real text. The info is never
  carried by colour or position alone.
- Focus ring: 2px palm outline, 3px offset on light grounds; 2px jade on palm grounds.
- Illustrations: `role="img"` and an `aria-label` such as "Ilustrasi Sabor A Mi: gelas tinggi, krim ube di
  atas kopi". Placeholders: `role="img"` + label "Tempat foto dari pemilik: teras atas".
- Hours table is a real `<table>` with a `<caption>` "Jam buka".

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Kanal Feds · Kopi, brunch, dan teras hijau di Pondok Bambu"
- Description: "Coffee shop di Jl. Kolonel Sugiono No.45, Duren Sawit, Jakarta Timur. Buka setiap hari mulai 07.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design-brief §4–5. Spacing uses a 4px base (4, 8, 12, 16, 24, 32, 48, 64).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
