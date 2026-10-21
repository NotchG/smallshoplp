# TRD: KoffieQue mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No new dependencies: no icon library, no React Bits (see below).

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

```ts
shop = {
  name: "KoffieQue", descriptor: "Coffee & Eatery", fullName: "KoffieQue Coffee & Eatery",
  type: "Kafe", line: "Kopi dan makanan Barat & Indonesia di Duren Sawit.",
  addressShort: "Jl. Rawa Domba, Duren Sawit",
  address: "Jl. Rawa Domba, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13440",
  placeId: "ChIJD7EJitKNaS4RVT12jP_HjpY",           // from raw.json, for directions
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=KoffieQue+Coffee+%26+Eatery%2C+Jl.+Rawa+Domba%2C+Duren+Sawit&destination_place_id=ChIJD7EJitKNaS4RVT12jP_HjpY",
  mapEmbedUrl: "https://www.google.com/maps?q=KoffieQue+Coffee+%26+Eatery,+Jl.+Rawa+Domba,+Duren+Sawit,+Jakarta+Timur&output=embed",
  whatsapp: { number: "", mockup: true },            // placeholder until the owner sends it
  hours: [                                           // JS getDay(): 0 = Minggu
    { label: "Senin–Kamis", days: [1,2,3,4], time: "10.30–22.00" },
    { label: "Jumat–Sabtu", days: [5,6],     time: "08.30–23.30" },
    { label: "Minggu",      days: [0],       time: "10.30–22.00" },
  ],
  hoursNote: "Buka setiap hari",
}
heroPhoto   = { src: "/images/owner-1.jpg", w: 352, h: 422, alt: "Burger keju dengan roti wijen, kentang goreng dan saus tomat di piring putih",
                name: "Beef Cheese Burger", price: "Rp 45rb", mockup: true, credit: "Foto dari KoffieQue" }
featured    = [{ name, price?, art: "kopi-susu" | "rice-bowl" | "nasi-goreng" | "croissant", alt, mockup: true }] // 4
menu        = [{ title, price?, items: [{ name, price?, mockup: true }] }]   // Kopi, Non-kopi, Western, Indonesia, Pastry
menuNote    = { text, mockup: true }
rooms       = { indoor: { title, text }, outdoor: { title, text }, meeting: { title, text, cta: { text, mockup: true } } }
facilities  = Item[]   // Mushola kecil untuk 2–3 orang; Colokan listrik di setiap kursi; Toilet bersih
praise      = { source: "Diringkas dari ulasan Google.", items: Item[] }   // 4 paraphrases, no names
contact     = { heading: "Hubungi kami", line: "Mampir sebentar sebelum kerja, atau duduk lebih lama untuk makan siang." }
```
Copy is taken word for word from the PRD sections table. Use the exact strings, including the en dash in "10.30–22.00".

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text changed to Indonesian: "Draf situs KoffieQue untuk ditinjau pemilik. Beberapa detail masih contoh." |
| Container, Reveal | all | starter | Reveal is section-level only |
| SteelFrame + Pane | Hero, Ruang | new | `display:grid; grid-template-columns: repeat(12, 1fr); gap: var(--mullion); padding: var(--frame); background: var(--color-baja)`. Pane takes `span`, `tone: "dinding" \| "marmer"` and optional grid placement. No radius, no shadow |
| PendantLamps | Hero pane A | new | Three inline SVG globes (circle, 3 meridian ellipses, 2 latitude lines, cap rect, cord line, `baja` 1.5px strokes) plus `.lamp-bulb-lit` (`emas` circle) and `.lamp-glow` (`emas` circle, CSS `filter: blur(18px)`). Owns the signature timeline. `aria-hidden` |
| TodayHours | Hero pane C, Kunjungi table | new, client | See "Today's hours" below |
| Button | everywhere | new | `variant: solid \| outline`, `tone: light \| dark`, `href` or `placeholder` (renders `<span role="link" aria-disabled="true">` with sub-label "nomor menyusul"). Min height 48px, radius 2px. Hover underlay is an opacity fade over 150ms; press is `translateY(1px)` |
| FoodArt | Menu | new | One file per illustration (`KopiSusu`, `RiceBowl`, `NasiGoreng`, `Croissant`), 200×200 viewBox, flat fills, `role="img"` + `aria-label` |
| MenuShowcase, MenuList | Menu | new | Hairline table edge; prices inline after names |
| StringLights | Ruang outdoor pane | new | Static SVG catenary plus 9 bulbs, `aria-hidden` |
| Rooms, Praise, Visit, Contact, SiteFooter | sections | new | Map iframe: `loading="lazy"`, `title="Peta lokasi KoffieQue"`, `referrerpolicy="no-referrer-when-downgrade"` |

**Today's hours.** The static HTML shows a neutral line that is never wrong: "Buka setiap hari" plus
"10.30–22.00 · Jumat–Sabtu 08.30–23.30". After mount, a `useEffect` reads today's weekday in
`Asia/Jakarta` (`Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`) and
swaps in "Buka hari ini" / "10.30–22.00" (or "08.30–23.30"), and marks today's row in the Kunjungi
table. Reserve the pane's min-height so the swap causes no layout shift. Do not show "open now" or
"closed" states.

**Image.** Copy `shops/koffieque-coffee-eatery/photos/owner-1.jpg` to `site/public/images/owner-1.jpg`.
Render it with a plain `<img>` (`width=352 height=422`, `fetchpriority="high"`, no lazy loading in the hero,
`max-width: 352px; width: 100%`). No customer photo (`photo-*.jpg`) is copied into `site/`.

## React Bits (max 2)
None. The signature lamps are custom SVG and GSAP built from the shop's own pendants. Every candidate
was generic, or hover-only and so invisible to phone visitors.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | Considered and declined: Glare Hover (a glass-pane sheen, but hover-only); Shiny Text and Blur Text on the wordmark (generic, and they would compete with the lamps); Fade Content and Animated Content (duplicate the starter's Reveal); Count Up (no numbers worth counting, and ratings are off the page) | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero lamps 1–3 (signature moment) | load, after hydration | `.lamp-glow` and `.lamp-bulb-lit` opacity keyframes 0 → 0.6 → 0.3 → 1 (glow peaks at 0.55 on light) | 0.45s each, delay 0.2s, stagger 0.15s | `power2.out` | final state (lit), no motion |
| Hero `.open-dot` | end of lamp timeline (about 0.75s) | opacity 0 → 1, scale 0.85 → 1 | 0.3s | `expo.out` | visible, no motion |
| Menu illustration row | scroll, `top 85%`, once | Reveal: autoAlpha + y 20 → 0 | 0.6s | `power2.out` | static |
| Menu lists block | scroll, once | Reveal | 0.6s | `power2.out` | static |
| Ruang frame | scroll, once | Reveal (whole frame, not panes) | 0.6s | `power2.out` | static |
| Kata mereka statements | scroll, once | Reveal (one block, no stagger) | 0.6s | `power2.out` | static |
| Kunjungi block | scroll, once | Reveal | 0.6s | `power2.out` | static |
| Buttons | hover / press | underlay opacity; press `translateY(1px)` | 0.15s | ease-out (CSS) | instant state change |

Pre-hydration state: an inline `<script>` in `<head>` runs
`document.documentElement.classList.add('js')`. In CSS, `.js .lamp-glow, .js .lamp-bulb-lit, .js .open-dot
{ opacity: 0 }`, overridden by `@media (prefers-reduced-motion: reduce)` to `opacity: 1`. The GSAP timeline
in `PendantLamps` uses `useGSAP` with a scope and animates to opacity 1. With JS off, lamps are lit.
The wordmark, the line, the hours text and the buttons never animate.
Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Josefin Sans 600; Albert Sans 400/500/600.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only. The glow blur is static, never animated.
- Map iframe lazy-loaded below the fold. The only raster is owner-1.jpg (about 22 KB).

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `emas` is never used for text on `dinding` (2.0:1). Prices in `emas` appear only on `marmer`.
- Focus: 2px `baja` outline with 2px offset on light, 2px `emas` on dark. `::selection` uses `emas` with `baja`.
- One `h1` (the wordmark, with an `sr-only` " Coffee & Eatery" suffix or `aria-label="KoffieQue Coffee & Eatery"`),
  `h2` per section, `h3` for panes and menu categories.
- The WhatsApp placeholder is `aria-disabled`, not focusable as a link, and its sub-label is readable text.
- `lang="id"` on `<html>`. The skip link "Langsung ke konten" targets `#konten`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title: "KoffieQue Coffee & Eatery · Duren Sawit". Description: "Kopi dan makanan Barat & Indonesia di
Jl. Rawa Domba, Duren Sawit, Jakarta Timur. Buka setiap hari."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
New variables: `--frame` (6px / 10px at ≥1024), `--mullion` (4px / 6px at ≥1024), `--ceiling` (104px / 200px
at ≥1024), `--gutter` 16 / 24 (≥768) / 40px (≥1024), `--section-y` 64 / 112px (≥768). Fonts are exposed
as `--font-display` (Josefin) and `--font-body` (Albert) from `next/font` variables.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
