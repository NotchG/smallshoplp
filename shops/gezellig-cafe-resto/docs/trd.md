# TRD: Gezellig Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

```ts
type Item = { text: string; mockup?: boolean };
type Dish = {
  name: Item;                 // exact shop spelling: "Gezellig Kofta Joppie", "Uitsmijter", "Garang Asem"
  price?: Item;               // all prices mockup: true ("Rp 58rb")
  desc?: Item;                // from reviews where possible; mockup: true otherwise
  art?: "koftaJoppie" | "uitsmijter" | "garangAsem" | "pisangGoreng"; // illustrated dishes only
};
```
- `shop`: name "Gezellig Cafe & Resto", short name "Gezellig", address "Jl. Pemuda No.74, Jati, Pulo Gadung, Jakarta Timur 13220",
  phone "0851-5515-9411", `tel: "tel:+6285155159411"`, `whatsapp` = `{ url: "https://wa.me/6285155159411", mockup: true }`,
  `mapsUrl: "https://maps.google.com/?cid=12244289444784729651"`,
  `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gezellig+Cafe+%26+Resto&destination_place_id=ChIJ15yoLQD1aS4RM251g2B07Kk"`,
  `mapEmbed: "https://www.google.com/maps?q=Gezellig+Cafe+%26+Resto,+Jl.+Pemuda+No.74,+Pulo+Gadung,+Jakarta+Timur&output=embed"`,
  `hours: [{ days: "Senin–Minggu", time: "09.00–23.00" }]`, `todayLine: "Buka hari ini · 09.00–23.00"`,
  `rating: { value: "4,7", count: 361 }` (listing; render as "4,7 dari 361 ulasan di Google"), `priceLevel: "Harga sedang"`.
- `hero`, `intro`, `menu` (`belanda`, `nusantara`, `more`, `drinks`, `caption`), `zones` (4), `celebrate`, `praise` (4 themes,
  paraphrased only), `visit`, `contact`: all text from the PRD's sections table, flags as listed there.
- Never in content.ts: reviewer names, quoted review text, the word "rum" (pending owner answer), an Instagram handle.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Gezellig Cafe & Resto. Beberapa detail masih contoh sampai Anda konfirmasi." |
| SmoothScroll | global | starter | Lenis defaults |
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–8 | starter | section content block only, never the hero |
| Hero | hero | new | name on the "wall", info column, buttons; renders `LitWindow` |
| LitWindow | hero | new | Inline SVG: Hijau wall, chandelier with 5 tulip-glass shades + halos (`data-halo`), painting frame, vase of tulips, teak table edge; steel grid 3×2 (3px frame, 2px bars) drawn on top; night-glass rect (`data-glass`) between interior and grid. Planting strip below. Owns the signature timeline |
| Mullion | menu, intro | new | 2px Besi vertical rule (horizontal on phone), CSS only |
| DishArt ×4 | menu | new | `KoftaJoppieArt`, `UitsmijterArt`, `GarangAsemArt`, `PisangGorengArt`: flat top-down SVGs on a shared `RibbedPlate` (Kapur disc + radial rim strokes). Palette tints only, `role="img"` + Indonesian `aria-label`, `data-mockup` on the figure |
| DishCard | menu | new | art, name (`h4`, `.t-lead`, Castoro), price inline after name or on the next line, desc (`.t-body`, besi-soft) |
| MenuLine | menu | new | text row: name + price with a 12px gap, never right-aligned |
| PhotoFrame | suasana | new | "Painting frame" placeholder for owner photos: Lampu 2px frame, Hijau-tinted mat, centred small label "Foto dari pemilik: ruang lampu gantung", `role="img"`, `data-mockup` |
| ZoneGrid | suasana | new | 2×2 cells with Kapur 25% grid lines; label (small caps, Lampu), title (`.t-lead`), one line body |
| ReservedCard | rayakan | new | Delft card, "Gereserveerd" (Castoro italic, Kapur), gloss, copy, WhatsApp button (Kapur fill, Besi text) |
| ThemeList | kata mereka | new | 4 rows split by 2px Besi rules, tulip mark bullet, title + detail |
| VisitBlock + MapFrame | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Gezellig Cafe & Resto">` inside a 3px Besi frame, 16:10 desktop, 4:3 phone; link fallback text under it |
| ContactFooter + Coaster | hubungi | new | Coaster = 160px round disc (120px on phone; teak mix fill, Lampu ring, "GEZELLIG" Castoro caps at `--step-lead` or smaller, never larger than the h2), `aria-hidden` |
| TulipMark | several | new | 16px SVG, Tulp |
| Button | several | new | `<a>` styled: primary (Besi fill/Kapur text on light; Lampu fill/Besi text on dark), secondary (2px border). Min height 48px, square corners |

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | The one signature moment is the bespoke lights-on window. Considered and declined: Split Text / Blur Text (would animate the name that must be readable at once, and compete with the window), Circular Text (a forever-spinning coaster is decoration; the real coaster prints the name straight), Fade Content (duplicates starter `Reveal`) | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): night glass `[data-glass]` | load (after hydrate) | opacity 0.86 → 0 | 1.1s, delay 0.2s | power2.out | final state (0), no motion |
| Hero: 5 shade halos `[data-halo]` | same timeline, at 0.35s | opacity 0 → 1, scale 0.92 → 1 (transform-origin centre of shade) | 0.6s each, stagger 0.08s from centre outward | expo.out | final state (1, scale 1) |
| Section content blocks (`Reveal`) | scroll, `top 85%`, once | opacity, y 20 → 0 | 0.7s | power2.out | static, visible |
| Buttons, links | hover / focus / press | background-color, color (CSS) | 180ms | ease-out | instant |

Pre-paint state, so the window never flashes lit → dark → lit:
- `app/layout.tsx`: `<html lang="id" suppressHydrationWarning>` and, first in `<head>`, an inline script
  `document.documentElement.classList.add('js')`.
- `globals.css`, inside `@media (prefers-reduced-motion: no-preference)`:
  `.js [data-glass]{opacity:.86; animation: glass-off 0s 2.5s forwards}` and
  `.js [data-halo]{opacity:0; animation: halo-on 0s 2.5s forwards}`, with
  `@keyframes glass-off { to { opacity: 0 } }` and `@keyframes halo-on { to { opacity: 1 } }`.
  These fallbacks only matter if scripts fail; they match GSAP's end state, so they never fight it.
- Default markup (no JS, reduced motion): glass opacity 0, halos opacity 1. Text never animates.
- `LitWindow` uses `useGSAP` with a scope ref and returns early on `prefersReducedMotion()`:
  `gsap.to(glass, { opacity: 0 })` and `gsap.fromTo(halos, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1 })`
  (`transformOrigin: "50% 50%"`). End state equals the default markup.

`lib/motion.ts`: `duration.press = 0.18`, `duration.hero = 1.1`, add
`lights = { delay: 0.2, haloStart: 0.35, halo: 0.6, stagger: 0.08 }`. Starter eases.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`: `Castoro` (`weight: "400"`, `style: ["normal","italic"]`) and
  `Hanken_Grotesk` (variable), both `subsets: ["latin"]`, `display: "swap"`, exposed as `--font-display` / `--font-body`.
- No raster images at all: illustrations are inline SVG (keep each under ~8 KB), so LCP is the hero text.
- Map iframe `loading="lazy"`, below the fold.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3: never Lampu or
Tulp text on Kapur, never Delft on Hijau), visible keyboard focus (2px outline, offset 3px: Delft on
light grounds, Lampu on dark), semantic landmarks (`header`, `main`, `section` with `aria-labelledby`,
`footer`), heading order h1 → h2 → h3 (menu group labels) → h4 (dish names), alt text / `aria-label`
in Indonesian on every illustration and placeholder, tap targets at least 44px (buttons 48px),
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static). The hero window SVG is
`role="img"` with label "Ilustrasi jendela Gezellig di malam hari, lampu gantung menyala".
Phone number is a real `tel:` link; external links open in the same tab.

## SEO / meta
Title "Gezellig Cafe & Resto · Hidangan Belanda & Nusantara di Jl. Pemuda, Jakarta Timur".
Description "Kafe dan restoran bergaya rumah Belanda di Jl. Pemuda No.74, Pulo Gadung. Buka setiap hari 09.00–23.00."
Both from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values from design brief §4–5: `--container: 1200px`, `--gutter: 20px` / `40px` (≥768),
`--section-y: 64px` / `112px`, `--leading-display: 0.95`, `--leading-head: 1.08`, `--leading-body: 1.6`.
Add `.t-label` (small, uppercase, 0.08em tracking, weight 600). Colours in `@theme`:
`--color-kapur`, `--color-besi`, `--color-besi-soft`, `--color-hijau`, `--color-lampu`, `--color-delft`, `--color-tulp`
(map `paper`/`ink`/`muted`/`accent` to Kapur/Besi/Besi-soft/Delft so starter classes still work).
Hero top padding 24px / 48px via its own class, not `.section`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
