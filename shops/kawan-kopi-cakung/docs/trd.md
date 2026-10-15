# TRD: Kawan Kopi, Cakung mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`):
- `shop`: name "Kawan Kopi, Cakung", short name "Kawan Kopi", area "Cakung · Jakarta Timur", full address, `phone` "0851-1131-4830", `tel` "+6285111314830", `placeId` "ChIJp7wM6dmLaS4RUixdISvxVLk", `mapsUrl` (raw.json `googleMapsUri`), `directionsUrl` `https://www.google.com/maps/dir/?api=1&destination=Kawan%20Kopi%2C%20Cakung&destination_place_id=ChIJp7wM6dmLaS4RUixdISvxVLk`, `mapEmbedUrl` `https://maps.google.com/maps?q=Kawan%20Kopi%2C%20Ruko%20Maison%20De%20Wisteria%202%20No.11%2C%20Cakung&z=16&output=embed`, `whatsapp` `{ url: "https://wa.me/6285111314830", mockup: true }`, rating `{ value: "4,9", count: 233 }`.
- `hours`: `[{ label: "Senin–Jumat", short: "Sen–Jum", days: [1,2,3,4,5], open: "07.30", close: "22.00" }, { label: "Sabtu–Minggu", short: "Sab–Min", days: [6,0], open: "07.30", close: "23.00" }]`. Hours bars and the hero line derive from this; nothing is typed twice.
- `hero`, `drinks[]` (`name`, `note`, `price?`, `keys: string[]`, `art`, per-field mockup flags), `plates[]` (same minus keys), `work` (statement, facts), `praise[]` (`theme`, `text`), `visit`, `contact`, `banner`, `meta`. All copy is verbatim from the PRD's sections table.
- Per-field flags where only part of an item is mockup (Dirty Latte name is fact; its note, keys and price are not): `{ text, mockup }` objects for `note`, `price`, `keys`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container, Reveal, SmoothScroll | all | starter | Reveal at section-block level only |
| MockupBanner | top | starter, edited | Indonesian text from `content.banner` |
| Hero | Hero | new | Four bands: `CeilingLights`, wall (h1, line, drinks), 10px tinta counter edge, `.tile-ground` front (`TodayHours`, buttons). No nav |
| CeilingLights | Hero | new, client | Panel row: desktop 6 panels, phone 3 (CSS hides 4–6). Row is absolutely placed, left/right -40px, rotated -2°, inside a band with `overflow: hidden`. Panels lampu, radius 2px, static `box-shadow: 0 0 48px` lampu-ish glow. Owns the signature timeline |
| TodayHours | Hero | new, client | Static render: "Buka setiap hari dari 07.30". After mount, "Buka hari ini 07.30–22.00/23.00" from `lib/hours.ts` (`Intl` weekday in `Asia/Jakarta`). Full schedule line always rendered |
| DrinkArt, PlateArt | Hero, Kopi, Teman | new | Inline SVG per item (`americano`, `kawanLama`, `dirtyLatte`, `v60`, `citrus`, `frenchToast`, `salad`, `sandwich`, `pastri`). `role="img"` + Indonesian `aria-label`. Hero glasses have a `.glint` path. Fills from design brief §3 |
| DrinkCard | Kopi kami | new | Lampu card on tile; glass + layer key (HTML text, not SVG text, with 16px CSS tick); h3 name + inline price; note |
| PlateItem | Teman ngopi | new | Plate art (top view, long shadow inside the SVG), h3 + inline price, note |
| HoursBars | Kerja atau santai | new, client for tag only | Ubin track on a 06–24 scale; lit span positioned with `left`/`width` % computed from `hours` (static, never animated); labels inside the span ends; "hari ini" tag after mount |
| PraiseGrid | Kata mereka | new | 2×2 on desktop; `theme` small, `text` lead; no `<q>`/`<blockquote>` quotes |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Kawan Kopi, Cakung" referrerPolicy="no-referrer-when-downgrade">`, 4:3 desktop, 1:1 phone, radius 3px, `nat` background |
| ActionButton | Hero, Kunjungi, Hubungi | new | `primary` (matahari / tinta text) and `ghost` (1.5px border, currentColor). Real `<a>`: `tel:`, directions URL, WhatsApp (mockup). 52px tall |
| Footer | end | new | Tinta, small |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | | The one moment that belongs to this shop is its own ceiling panels switching on, which is a short GSAP timeline on owned shapes. No React Bits piece expresses it, and any addition would compete with it. | 0 | n/a |

Considered and rejected: Split Text and Blur Text (would duplicate the hero moment and animate the
name), Count Up (theatrics on the 4,9 rating), Circular Text (coffee-sticker cliché), Call Chip
(it's an AI "tool call" indicator, not a phone control), Light Rays and Light Pillar (WebGL
background noise the brief doesn't call for).

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero ceiling panels (signature) | load, after hydration | opacity 0.12 → 1, left to right, stagger `stagger.panel` 0.1 | `duration.panel` 0.5 each, all done by `duration.hero` 1.0 | `power2.out` | final state, no motion: lit at first paint |
| Hero glass glints (part of signature) | load, at 0.6s on the same timeline | opacity 0 → 1 | `duration.glint` 0.4 | `power2.out` | shown at first paint |
| Section blocks: Kopi grid, Teman grid, Kerja, Kata, Kunjungi, Hubungi | ScrollTrigger `top 85%`, once (starter Reveal) | opacity 0 → 1, y 20 → 0 | 0.7 | `power2.out` | final state |
| ActionButton | hover / press (CSS) | `translateY(-1px)` / `scale(0.98)` | 150ms / 100ms | ease-out | no transform |

First-paint rule for the signature (no flash, nothing waits):
- `layout.tsx`: `<html lang="id" suppressHydrationWarning>`, and in `<head>` an inline script `document.documentElement.classList.add('js')`.
- CSS: `.js .ceiling-panel { opacity: .12 }`, `.js .glint { opacity: 0 }`; `@media (prefers-reduced-motion: reduce) { .js .ceiling-panel, .js .glint { opacity: 1 } }`.
- Fail-safe: `.js .ceiling-panel, .js .glint { animation: lights-on 0s 2.5s forwards }` with `@keyframes lights-on { to { opacity: 1 } }`. It lands after the timeline has already finished.
- Timeline in `CeilingLights` via `useGSAP` with a scope ref; returns early when `prefersReducedMotion()`. It is `gsap.to`, not `from`, so the CSS dim state is the start.
- Text in the hero is never animated.

`lib/motion.ts`: add `duration.panel = 0.5`, `duration.glint = 0.4`, `stagger = { panel: 0.1 }`, set
`duration.hero = 1.0`. Keep the other starter values.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Sofia Sans Condensed: weight 700 only. Sofia Sans: 400, 500, 600.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images: all art is inline SVG, about 60 KB of markup at most. The map iframe is lazy and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Pairs come from the design brief §3. Never put body text in matahari on kayu (3.36), and never put text on `nat`.
- Focus: `outline: 3px solid` matahari, offset 3px, on ubin, kayu and tinta grounds; tinta on lampu grounds. Set it per section via a `--focus` variable.
- One h1 ("Kawan Kopi" + "Cakung · Jakarta Timur" as a block span inside it). One h2 per section, h3 per drink and plate.
- Every SVG has `role="img"` and an Indonesian `aria-label` (e.g. "Ilustrasi Dirty Latte: lapisan espresso di atas susu dalam gelas pendek bergelombang"). The decorative panels and tile grid are `aria-hidden`.
- Link names: "Telepon 0851-1131-4830", "Petunjuk arah ke Kawan Kopi (Google Maps)", "WhatsApp Kawan Kopi". External links get `rel="noopener"`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Kawan Kopi, Cakung · Kedai kopi di Ujung Menteng, Jakarta Timur"
- Description: "Kedai kopi di Ruko Maison De Wisteria 2, Cakung. Buka setiap hari dari 07.30. Americano, Kopi Kawan Lama, Dirty Latte, dan camilan ringan."
- `lang="id"`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-ubin #3B4943`, `--color-nat #566660`, `--color-lampu #FBF4E8`, `--color-kayu #A65220`, `--color-matahari #F2B45A`, `--color-tinta #1C2420`; `--font-display` = the `next/font` CSS variable for `Sofia_Sans_Condensed` (weight 700), `--font-body` = the one for `Sofia_Sans` (400/500/600).
- `:root`: the five `--step-*` values from design brief §4; `--container: 1200px`; `--gutter` 20 / 32 (≥768) / 40px (≥1200); `--section-y` 64 / 96 (≥768) / 120px (≥1200); `--leading-display: 0.95`, `--leading-head: 1.05`, `--leading-body: 1.55`.
- `.t-display` also gets `white-space: nowrap; letter-spacing: -0.01em; font-family: var(--font-display); font-weight: 700`. `.t-head` uses the display font, 700.
- `.tile-ground` in `globals.css`: ubin background with two 1px `nat` linear-gradients, `background-size: 30px 66px`, and `44px 96px` at ≥768.
- 12-column grid with gap 16px on phone and 24px at ≥768, written as utilities or a `.grid-12` class.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
