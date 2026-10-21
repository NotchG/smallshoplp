# TRD: Woven Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (all copy in Bahasa Indonesia, `lang="id"`):
- `shop`: name "Woven Coffee", address, `phone: '0858-9232-0323'`, `tel: '+6285892320323'`,
  `whatsapp: { href: 'https://wa.me/6285892320323', mockup: true }`, `directionsUrl`
  (`https://www.google.com/maps/dir/?api=1&destination=WOVEN+COFFEE&destination_place_id=ChIJV_HlqXnzaS4R9iWXOROVGNY`),
  `mapsUrl` (raw.json `googleMapsUri`), `mapEmbedSrc` (`https://maps.google.com/maps?q=WOVEN%20COFFEE%20Jl.%20Jatinegara%20Timur%20No.107&output=embed`).
- `hours`: `[{ days: 'Senin–Jumat', idx: [1,2,3,4,5], open: '09.00', close: '21.00' }, { days: 'Sabtu–Minggu', idx: [6,0], open: '10.00', close: '21.00' }]`, `note: 'Buka setiap hari'`.
- `rating`: `{ value: '4,6', count: 302 }` (listing, displayed as text only).
- `products`: Kopi Enak (bottle; `sizes: [{ label: '250 ml', price: 'Rp 25rb', mockup: true }, { label: '1 liter', price: null, mockup: true }]`,
  `labelText: 'KOPI ENA'`, `spellingNote`, `mockup: true` on the drawing), Ice Vietnamese (`price: 'Rp 25rb'`, mockup),
  Teh satu poci (`price: 'Rp 22rb'`, mockup; photo owner-2).
- `menu`: four groups (Kopi hitam, Kopi susu, Teh & non-kopi, Camilan & makan), names only, every item `mockup: true`.
- `amenities`: six `{ term, text, source }` (Wi-Fi, ruang merokok ber-AC, bayar pakai apa saja, parkir motor, dekat Halte Kampung Melayu, buka setiap hari).
- `reviews`: four `{ text, source: 'reviews 1' | ..., year }` paraphrases (reviews 1, 2, 5, 4). `year` is kept for the owner checklist, not rendered.
- `meta`: title "Woven Coffee · Kopi dan teh di Jatinegara, Jakarta Timur", Indonesian description.

Photos: copy only `owner-1.jpg` and `owner-2.jpg` into `site/public/photos/`. Never copy `photo-*.jpg`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Draft banner | top | starter | Indonesian copy: "Draf: contoh situs untuk Woven Coffee, belum resmi." |
| Container, Reveal, `mock()` | all | starter | Reveal at section level only |
| `Hero` | Hero | new | `<img>` owner-1 (`filter: blur(18px)`, `scale(1.08)` static, `object-position` 38% 50% phone / center desktop), flat `kaca` 62% overlay, FrostBand, copy group, actions. Owns the signature timeline |
| `FrostBand` | Hero | new | Clipped full-bleed strip; `<h1>` = first "Woven Coffee" instance (uppercase via CSS); 3 more instances `aria-hidden`; two thread `<span>`s 120% wide |
| `TodayHours` | Hero, Kunjungi | new, client | Weekday via `Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short' })` in `useEffect`. SSR/JS-off fallback: "Buka setiap hari · 09.00–21.00 (Sabtu–Minggu mulai 10.00)". In Kunjungi it marks today's row (weight 700 + `aria-current="date"`) |
| `BoxButton` | Hero, Kopi Enak, Kunjungi, Hubungi | new | `<a>`, min-height 48px, radius 2px, 1px inner hairline inset 4px (label box). Variants: `solid` (pinus/kaca), `outline-light` (on kaca), `outline-dark` (on pinus/dinding) |
| `LabelBox` | Kopi Enak, Teh | new | Boxed two-line product name (Jost 600, `--step-lead`, 1.5px border, `line-height: 1.05`); price directly below, ≤ 12px |
| `WovenSeam` | 3 boundaries | new | Inline SVG `<pattern>` checker of two colours, props `top`/`bottom`; `aria-hidden`; height 12px / 16px |
| `BottleKopiEnak` | Kopi Enak | new SVG | Flat front elevation per design brief §6; `role="img"`, `aria-label="Ilustrasi botol Kopi Enak dengan label KOPI ENA"` |
| `GlassIceVietnamese` | Kopi Enak | new SVG | Phin on tumbler, kopi over susu, 3 ice cubes; `role="img"`, `aria-label="Ilustrasi Ice Vietnamese: kopi Vietnam dengan es"` |
| `Shelf` | Kopi Enak | new | 6px `cokelat` line both drawings stand on |
| `Signature` | Kopi Enak | new | Section: copy column + shelf with the two products |
| `Menu` | Menu andalan | new | Heading column + 2×2 groups; double hairline above each `<h3>` |
| `Tea` | Bukan cuma kopi | new | owner-2 `<img>` 1:1 (`object-position: 70% 75%`), LabelBox, tea list |
| `Amenities` | Kenapa mampir | new | `<dl>`, `<dt>` Jost 600 caps at `--step-body`, `<dd>` 8px below |
| `Reviews` | Kata mereka | new | `<ul>` of paraphrases, no `<blockquote>`, no quote marks, no names |
| `Visit` | Kunjungi kami | new | Address, `<table>` of hours (day + fixed 12ch time column), iframe `loading="lazy"` with `title="Peta lokasi Woven Coffee"` |
| `Contact` | Hubungi kami | new | Three full-width BoxButtons |
| `Footer` | footer | new | Wordmark between two double rules in `pinus` (brown `cokelat` disappears on `kaca`), "Freshly weaved" italic, slogan (mockup), address, draft note |

## React Bits (max 2)
None. The site's only flourish is the hero band settling between its threads, and that is a few lines of GSAP on
the starter's stack, specific to their door. Every reviewed candidate either duplicates the starter's Reveal (Fade Content,
Animated Content), turns the band into a marquee the motion rules forbid (Scroll Velocity, Curved Loop), staggers
letters of the H1 (Split Text, Blur Text), or adds WebGL/background noise that doesn't fit a modest, cozy room (Threads,
Web Threads, Silk, Grainient, Noise). Zero dependencies added.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | – | – | – |
Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): top thread | load, t = 0 | `xPercent: -6 → 0`, `opacity: 0 → 1` | 0.9s | `expo.out` | final state, no motion |
| Hero: bottom thread | load, t = 0 | `xPercent: 6 → 0`, `opacity: 0 → 1` | 0.9s | `expo.out` | final state |
| Hero: wordmark row | load, t = 0.1s | `x: -24 → 0` (−12 below 768px); opacity untouched (always 1) | 0.9s | `expo.out` | final state |
| Hero: copy group (line, hours, buttons, address) | load, t = 0.45s | `opacity: 0 → 1`, `y: 16 → 0` | 0.6s | `power2.out` | final state |
| Each section after hero (one Reveal per section) | ScrollTrigger `top 85%`, once | `opacity: 0 → 1`, `y: 20 → 0` | 0.6s | `power2.out` | final state |
| BoxButton hover / focus-visible | pointer / focus | `::after` opacity 0 → 0.12 (CSS) | 180ms | ease-out | instant (no transition) |
| BoxButton press | `:active` | `translateY(1px)` (CSS) | 120ms | ease-out | none |

The hero timeline lives in `Hero` via `useGSAP({ scope })`, built with `gsap.from` so SSR HTML is the final state; it is
skipped entirely when `prefers-reduced-motion: reduce`. Nothing else animates: seams, drawings, map, photo and links are static.
Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Shop specifics: LCP element is the H1 text (never opacity-hidden). owner-1 (≈ 310 KB) is the only above-the-fold image:
  `fetchpriority="high"`, explicit width/height. The blur is a static CSS filter on that one element, never animated. owner-2
  and the map iframe are `loading="lazy"`. Fonts: Jost variable (normal only) + Alegreya Sans 400, 700, 400 italic.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Contrast pairs and focus colours are in design brief §3. Hero text over the photo must be sampled at its brightest point.
- One `<h1>` (the first band instance); repeats `aria-hidden="true"`. Uppercase via CSS so screen readers read "Woven Coffee".
- Alt text (Indonesian): owner-1 is decorative behind the H1 (`alt=""`); owner-2 "Teh dalam poci putih dan secangkir teh biru di meja kayu Woven Coffee".
- Paraphrased reviews are a list, not quotes. Hours are a real `<table>` with `<th scope="row">` days.
- External links (`maps`, `wa.me`) open in a new tab with `rel="noopener"` and visible text saying where they go.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
`<html lang="id">`. No JSON-LD (a mockup must not publish structured business data).

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values for every variable are in design brief §4–§5; put the five colours and the per-ground secondary tints in `@theme`.
- Add classes for the band (`.t-band`: Jost 500, `--step-display`, tracking 0.08em → 0.12em at ≥768, `white-space: nowrap`)
  and for LabelBox/headings (Jost 600 uppercase) in `globals.css` rather than as arbitrary values.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
