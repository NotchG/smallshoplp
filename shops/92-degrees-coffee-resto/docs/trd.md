# TRD: De 92 Degrees mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No new npm dependencies. Fonts come from `next/font/google`. Images are pre-cropped files in `public/photos/`.

## Content model
All copy and facts live in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.

```ts
shop      { name: "De 92 Degrees", listingName: "92 Degrees Coffee & Resto", tagline: "Coffee, Food & Music",
            type: "Kafe & resto", address, addressShort, phone: "0852-8556-0957", phoneIntl: "+6285285560957",
            whatsapp: { url: "https://wa.me/6285285560957", mockup: true },
            mapsUrl: "https://maps.google.com/?cid=15899200581667606145", instagram: "de92degrees",
            hours: [{ days: "Senin–Kamis", time: "09.00–22.00", dow: [1,2,3,4] },
                    { days: "Jumat–Sabtu", time: "09.00–23.00", dow: [5,6] },
                    { days: "Minggu",      time: "09.00–22.00", dow: [0] }] }
hero      { sub, todayFallback: "Buka setiap hari mulai 09.00", photo, photoAlt }
floors    [{ n: 2|3|4, name, tags: string[], text, link?, illustration?: { caption, mockup: true } }], intro, facilities
dishes    { groups: [{ label: "Nasi & lauk" | "Pasta", items: Dish[] }] }
          Dish = { name, price: "55rb", desc, spicy?: boolean, img, alt }
klepon    { name: "Klepon Cake", price: "28rb", tagline: "modern yet traditional taste of klepon", desc, img, alt }
menuNotes Item[]   // breakfast fact; Nasi Liwet set (mockup); tax and service (mockup)
drinks    { intro, columns: [{ label, range?: Item, items: { name, price?, note?, tag?, mockup? }[] }] }
events    { kicker, heading, lead, blocks: [{ title, figure, text, extra?: Item }], cta (mockup) }
praise    { rating: "4,8", count: "920", note, themes: [{ title, text }] }   // paraphrased, no names
```
Price strings say "rb" (thousands of rupiah) as printed on the menu. Dish names stay exactly as the shop writes them.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text, walnut on plaster via the `ink`/`paper` aliases |
| SmoothScroll | layout | starter | unchanged |
| Container | all | starter | content width 1200 |
| Reveal | menu, drinks, events, praise, visit | starter | one per section, wrapping the section content |
| Hero | hero | new | `<img>` hero photo (`fetchPriority="high"`, width/height set), ArchPanel, Wordmark, TodayHours, two ActionButtons |
| ArchPanel | hero | new | walnut block with `border-radius: 9999px 9999px 0 0` top (semicircle), content centred |
| Wordmark | hero | new | `<h1>`: visually hidden "De 92 Degrees" plus an `aria-hidden` visual "de" / "92" / mustard ring |
| TodayHours | hero, visit | new, client | `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`. Renders the fallback at build, swaps after mount. In the visit list it highlights today's row |
| ActionButton | hero, events, visit | new | `<a>` 48px min height; variants `primary` (mustard/walnut) and `outline` (plaster or walnut border); `mockup` prop |
| FloorGuide | floors | new, client (signature) | sticky left column (desktop), FloorRow ×3, LiftDisplay, SunsetWindow, motion via `useGSAP` scoped to the section |
| LiftDisplay | floors | new | `aria-hidden`; digit strip "2 3 4" in an `overflow: hidden` mask one digit tall; static "2 · 3 · 4" variant for reduced motion |
| SunsetWindow | floor 4 | new | inline SVG, viewBox 300×375, arch clip, at most 12 shapes: oak and mustard sky bands, plaster sun, walnut skyline with roof water tanks, clay parapet. Caption `data-mockup` |
| DishRow, PriceChip, Tag | menu, drinks | new | chip: mustard background, walnut Figtree 700 `t-small`, radius 4, inline after the name |
| KleponBand | menu | new | walnut band, 7/5 grid, image radius 20 |
| DrinksBoard | drinks | new | 3 columns at ≥768 |
| EventBlocks | events | new | two bordered blocks |
| PraiseGrid | praise | new | 2×2 at ≥768, mustard CSS ring bullets |
| VisitSection | visit | new | address, hours, actions, IG, lazy map iframe, footer row |

## React Bits (max 2)
**None.** The one moment that could use a component, the lift digit roll, is a few lines of GSAP on a
digit strip. Considered and declined:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Counter (declined) | lift display | Odometer roll matches a lift digit | ~20 KB source, no deps, but it writes `width` every frame, adds an SVG motion-blur filter and spring overshoot. That breaks motion-rules 6 and duplicates GSAP | n/a |
| Split Flap Text (declined) | lift display | Mechanical board feel | Wrong object: lifts don't clack, and it cycles phrases | n/a |
| Rotating Text / Circular Text / Count Up (declined) | hero, praise | — | Loops on sub-copy, a spinning ring of decoration, or animating the 4.8 rating: all fail motion-rules 7 or the no-gimmick-on-reviews line | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Lift digit strip (signature) | ScrollTrigger per floor row, `start: "top 55%"`, `onEnter` + `onEnterBack` | `yPercent: -100 × (n − 2)`, `overwrite: true` | 0.45s (`duration.lift`) | `expo.out` (`ease.outStrong`) | not sticky; static "2 · 3 · 4"; no GSAP |
| Lift arrow ▲ (signature) | same callbacks | `y: -4 → 0` | 0.3s | `power2.out` | static |
| Sun in floor 4 window (signature) | ScrollTrigger on floor 4 row, `start: "top 80%"`, `end: "bottom 40%"`, `scrub: 0.6` | `y: 0 → 28` (`distance.sun`) | scrubbed | `none` | sun at y 28 |
| Hero panel content | load | `autoAlpha 0 → 1`, `y 20 → 0` | 0.6s (`duration.hero`), 0.1s delay | `power2.out` | final state, no motion |
| Section reveals ×5 | `<Reveal>`, top 85%, once | `autoAlpha`, `y 20` | 0.7s | `power2.out` | visible |
| Buttons | CSS hover / active | `::after` overlay opacity 0 → 0.12; `scale(0.98)` on press | 150ms | ease-out | transitions off (starter rule) |

Stickiness is CSS only, inside `@media (prefers-reduced-motion: no-preference)`. The static
"2 · 3 · 4" shows by default and is swapped for the strip in that same media query, so screenshots
(taken with reduced motion) and JS-off views show the static version.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5s on a mid-range phone: the hero image is the LCP. Export it at 1600×1100, JPEG quality about 78, under 350 KB. Nothing animates before the hero text is visible.
- Two font families via `next/font`: Unbounded (variable, or weights 600 and 800) and Figtree (400/600/700 plus italic 600), latin subset, `display: swap`.
- Map iframe `loading="lazy"`, below the fold. No preloaders, no video, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design-brief §3; never mustard text
on plaster, never clay on oak), visible keyboard focus (3px walnut on light grounds, mustard on walnut),
semantic landmarks (`header`, `main#konten`, one `section` per block with an h2, `footer`), alt text in
Indonesian on every image, tap targets at least 44px (buttons 48px), `prefers-reduced-motion` honoured
everywhere (Lenis off, GSAP skipped, lift display static). The lift display and sunset SVG are
`aria-hidden`; floor facts live in real headings and text. The map iframe has `title="Peta lokasi De 92 Degrees"`.
`<html lang="id">`.

## SEO / meta
Title "De 92 Degrees · Coffee, Food & Music di Duren Sawit". Description "Kafe empat lantai di Jl. Delima
Raya No.6, Malaka Sari, Duren Sawit. Buka setiap hari mulai 09.00." Both come from `content.ts`.
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add a `@media (min-width: 1024px)` step for `--gutter: 40px`. Exact values are in design-brief §4–5.

## Images
Pre-crop the owner photos into `site/public/photos/` with `sips` (macOS; `--cropOffset` takes y then x,
and `-c` takes height then width; crop and resize in separate calls). Boxes are in design-brief §6; the
hero is owner-1 at x 0, y 700, 1600×1100. Never use `photo-*.jpg`. The expired promo badge, terms and
script lettering on owner-2 stay outside the Klepon crop.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
