# TRD: Cup Times & Warkop mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item` type; keep every string in Indonesian except menu names and the tagline):
- `shop`: `name: "Cup Times & Warkop"`, `shortName: "Cup Times"`, `type: "Kafe"`,
  `address: "Jl. Permata No.3 C, Kebon Pala, Kec. Makasar, Jakarta Timur 13650"`,
  `area: "Kebon Pala, Jakarta Timur"`, `mapsUrl: "https://maps.google.com/?cid=315027762923123507"` (from raw.json
  `googleMapsUri`, tracking parameter dropped), `mapEmbed` (`https://www.google.com/maps?q=` + URL-encoded
  "Cup Times & Warkop, Jl. Permata No.3 C, Kebon Pala, Makasar, Jakarta Timur" + `&output=embed`),
  `whatsapp: { number: null, mockup: true }`.
- `hours`: display rows `[{ days: "Senin–Jumat", time: "09.00–23.00" }, { days: "Sabtu", time: "09.00–00.00" }, { days: "Minggu", time: "09.00–23.00" }]`,
  plus `byWeekday` (0 = Minggu … 6 = Sabtu) for today's line, and `everyDay: "Buka setiap hari"`.
- `hero`: `line`, `sticker: { brand: "CUP TIMES", item: "Es Latte", price: "Rp 15.000", tagline: "Low Price High Taste" }`.
- `lattes`: three `{ name, price: "Rp 15.000", tint }` for Vanilla, Caramel, Hazelnut (sourced, no mockup flag).
- `warkop`: `{ name, price?, mockup: true }[]`; `alsoServed: Item[]` (all mockup); `warkopIntro: Item` (mockup).
- `night`: `heading`, `line`, `hoursLine`, `caption`, `facilities: Item[]` (all mockup).
- `praise`: three paraphrases (no names, no dates) + `note`.
- `contact`: `line: Item` (mockup).
- `meta`: `title: "Cup Times & Warkop · Kopi murah di Kebon Pala, Jakarta Timur"`, `description: "Es latte Rp 15.000, roti bakar, dan tempat nongkrong sampai malam di Jl. Permata No.3 C, Kebon Pala, Makasar. Buka setiap hari 09.00–23.00, Sabtu sampai 00.00."`

The WhatsApp button and the warkop prices are the most visible `data-mockup` items; check that each one carries it.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200px |
| Reveal | menu (×2), night, praise, visit | starter | section-level only, five uses |
| SmoothScroll | layout | starter | defaults |
| MockupBanner | layout | starter | text changed to Indonesian (see PRD) |
| SiteHeader | hero | new | area tag left; desktop anchors Menu, Tempat, Lokasi (hidden under 768px) |
| HoursToday | hero | new, client | renders `hours.everyDay` + "09.00–23.00, Sabtu sampai 00.00" on the server; after mount swaps to "Buka hari ini 09.00–23.00" (or "09.00–00.00" on Saturday) using `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`. Same box size both ways, with an amber dot. No "open now" claim |
| PriceSticker | hero | new, client | white label, ink text, separate shadow element; the signature motion lives here |
| LatteCup | menu | new | inline SVG cup (aria-hidden) + HTML label overlay; prop `tint`, `tilt` |
| Renceng | menu | new | inline SVG strip of 12 plain sachets (aria-hidden), wrapper `overflow: hidden` so it never causes horizontal scroll |
| RotiBakar | menu | new | inline SVG (aria-hidden) |
| PriceChip | menu | new | flat chip: Rubik 700 body, `frost` text on `cup`, radius 6px, no rotation |
| HoursList | visit | new | two-column grid, max 320px; today's row bold with amber dot (client-enhanced, same as HoursToday) |
| MapEmbed | visit | new | `<iframe loading="lazy" title="Peta lokasi Cup Times & Warkop">`, 16:10 desktop, 4:3 phone, 12px radius |
| ButtonLink | hero, visit, contact | new | primary: `bulb`/`ink` on dark grounds, `cup`/white on light; secondary: 2px outline; min-height 48px |

## React Bits (max 2)
None. Considered and rejected:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Sticker Peel (rejected) | hero sticker | The obvious fit, but it renders the sticker as an image in WebGL (no live price text), and it's a draggable, throwable toy that competes with the one signature moment | WebGL2 shaders + rAF loop; budget says no WebGL without cause | n/a |
| Rotating Text / Count Up / Circular Text (rejected) | hero | Cycling flavours, a counting price or a spinning round badge are loops or gimmicks; text effects may run once on the headline only | small | n/a |
The sticker slap is about 20 lines of GSAP and needs no library.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero price sticker (signature moment) | load, 0.2s after mount | from `autoAlpha 0, scale 1.08, rotation -11, y -12` to `autoAlpha 1, scale 1, rotation -4, y 0` | 0.5s | `expo.out` | final state, no motion |
| Sticker shadow | same timeline, at 0.25s | opacity 0 → 1 | 0.3s | `power2.out` | final state, no motion |
| Menu "Cup Times" block | scroll, top 85%, once | `Reveal`: autoAlpha + y 20 | 0.6s | `power2.out` | static |
| Menu "& Warkop" block | scroll, once | `Reveal` | 0.6s | `power2.out` | static |
| Night content (photo + text together) | scroll, once | `Reveal` | 0.6s | `power2.out` | static |
| Praise row | scroll, once | `Reveal` (whole row, no stagger) | 0.6s | `power2.out` | static |
| Visit block | scroll, once | `Reveal` | 0.6s | `power2.out` | static |
| Buttons, links | hover / press | CSS: background-color, color 150ms; press `translateY(1px)` 150ms | 0.15s | ease-out | colour change kept; no movement |

Sticker pre-hide, so there's no visible → hidden → slap flicker: in `layout.tsx`, an inline `<script>` in
`<head>` sets `document.documentElement.classList.add("js")`. In CSS,
`@media (prefers-reduced-motion: no-preference) { .js [data-sticker] { opacity: 0; animation: sticker-failsafe 0s 1.2s forwards; } }`
with `@keyframes sticker-failsafe { to { opacity: 1; } }`. The failsafe's delay outlasts the GSAP tween and
its end state matches GSAP's, so the two never fight. Hero text and photo are never hidden. Use `useGSAP` with a scope.

Motion tokens in `lib/motion.ts`: `duration = { press: 0.15, ui: 0.2, reveal: 0.6, hero: 0.5 }`;
`ease` as starter; `distance.reveal = 20`; add
`sticker = { scaleFrom: 1.08, rotateFrom: -11, rotateTo: -4, yFrom: -12, delay: 0.2, shadowDelay: 0.25, shadowDuration: 0.3 }`.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap` (Lilita One 400, Rubik variable).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images pre-cropped and resized into `site/public/img/` (see implementation plan): hero ≤ 120 KB,
  cups photo ≤ 180 KB, night photo ≤ 150 KB, JPEG quality ~80. The hero `<img>` gets `fetchpriority="high"` and no lazy loading;
  the others `loading="lazy"`. The map iframe is lazy. SVG illustrations are inline, each under 4 KB.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `<html lang="id">`. Skip link "Langsung ke konten" → `#konten`.
- Amber (`bulb`) is never text or an icon on `frost` or white (1.53:1).
- Alt text: hero "Kios Cup Times & Warkop pada malam hari, dengan lampu gantung dan dinding sachet minuman di belakang meja."
  Cups photo: "Deretan es latte Cup Times dengan label harga Rp 15.000." Night: "Segelas es kopi susu di
  halaman Cup Times pada malam hari." The SVGs are `aria-hidden`; their labels are real text.
- The WhatsApp placeholder: in the hero it's a link to `#hubungi`. In the contact section it's a
  `<span role="link" aria-disabled="true">` styled as a secondary button with the text "WhatsApp · nomor menyusul",
  carrying `data-mockup`. Never a `wa.me` link without a number.
- Today's-hours text is not a live region; the swap after mount is silent.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-cup #1E5631`, `--color-night #0E1F15`, `--color-frost #EDF1EA`, `--color-ink #15241A`,
  `--color-label #FFFFFF`, `--color-bulb #FFB648`; `--font-display` → Lilita One variable, `--font-body` → Rubik variable.
  Change the starter's `html` background to `frost` and colour to `ink`. Restyle `.mockup-banner` to `night` ground / `frost` text.
- `:root`: values from design brief §4 and §5 (`--gutter: 20px`, 40px from 768px; `--section-y: 64px`, 112px from 768px;
  `--leading-display: 1.05`). Add `.t-lead-display` (Lilita at `--step-lead`) for the h3 sub-heads if needed.
- Grid: `grid-cols-12 gap-8` from `lg` (1024px); below that, a single column.
- Section grounds go on full-bleed `<section>` parents; content inside `<Container>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
