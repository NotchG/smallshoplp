# TRD: Rasaharsa mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (exact strings are in `prd.md`'s sections table):
- `meta` (title, description) and `banner` ("Ini draf tampilan untuk Rasaharsa").
- `shop`:
  - `name` "Rasaharsa", `tagline` "coffee & eatery".
  - `line` {text, mockup: true}.
  - `address`, `area` "Di sisi Rawamangun", `addressShort` "Jl. Sunan Sedayu No.15, Pulo Gadung".
  - `phone` "0811-8651-002", `telHref` "tel:+628118651002".
  - `waHref` {href "https://wa.me/628118651002", mockup: true}.
  - `mapsHref` "https://maps.google.com/?cid=7247874278361093807".
  - `mapEmbedSrc` "https://www.google.com/maps?q=Rasaharsa%20Coffee%20Shop%2C%20Jl.%20Sunan%20Sedayu%20No.15%2C%20Pulo%20Gadung%2C%20Jakarta%20Timur&output=embed".
  - `rating` {value "4,7", count 356}.
- `hours`: `periods` keyed by JS day (0 = Minggu … 6 = Sabtu) with `open: "08:00"` and `close: "22:30"`, or `"23:30"` for days 5 and 6. Also `rows` for display: Senin–Kamis / Jumat–Sabtu / Minggu, each with its `days` array.
- `kopiKami`:
  - Strings: heading, `lead` {mockup: true}, `body`[2], `aside` {mockup: true}.
  - `photo` {src "/img/latte.jpg", width 1100, height 880, alt "Secangkir latte dengan latte art di cangkir hitam, di atas meja kayu", caption}.
  - `drinks`[4]: {id, name, note, serve: ("Panas" | "Es")[], price?: {text, mockup: true}}.
- `boards`[3]: {title, groups: [{title?, items: [{name, serve?, price?: {text, mockup: true}}], note?}]}.
- `food`: heading, lead, `groups`[2] {title, items[], mockup: true}, `plate` {alt, caption, mockup: true}. Nasi Goreng carries `price` {text "Rp 35rb", mockup: true}.
- `place`: heading, lead, `panes`[4] {label, text, action?: {label, href, mockup: true}}.
- `reviews`: heading, sub, `themes`[4] (strings, paraphrased).
- `visit`, `contact`, `footer`: strings and actions.

A price is flagged on its own `<span>`; the drink name is a fact and stays unflagged.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Text from `content.banner`; `baja` bar, `kapur` text, `--step-small` |
| Container, Reveal | all | starter | Reveal wraps the six content sections, never the hero |
| Hero | Hero | new | `dinding` ground plus the static CSS slat pattern. Holds the real h1 (bean mark plus "Rasaharsa", shown as caps through `text-transform`), tagline, line, status, buttons and address. Root carries `data-open="unknown" \| "true" \| "false"` |
| Pendants | Hero | new | One SVG per pendant (cord, cage, filament, glow circle), `aria-hidden`. The cage is `baja` with a 1px `kapur` 25% highlight so it reads on `dinding`. Runs the signature timeline |
| BeanMark | Hero, Kata mereka, Hubungi | new | Two-bean SVG, a [MOCKUP] redraw of the sign (`data-mockup` on the hero instance). Small size doubles as the review-theme marker |
| FernBand | Hero | new | SVG strip of flat fronds in `pakis` plus a `color-mix` tint with `dinding`; `aria-hidden`; spans c2–c10 on desktop and full width on phone |
| OpenStatus | Hero, Kunjungi | new (client) | Uses `lib/hours.ts` (below). Server render shows the default text from the PRD. After mount it sets the text, the hero's `data-open`, and the "Hari ini" marker on today's row |
| ActionButton | Hero, Tempatnya, Kunjungi, Hubungi | new | Variants: `onDark` (primary `kapur` fill with `baja` text; secondary 2px `kapur` outline), `onLight` (primary `dinding` fill with `kapur` text; secondary 2px `baja` outline), `onFern` (`baja` fill, `kapur` text). Min-height 48px, radius 8px |
| CoffeeShelf, Drink illustrations ×4 | Kopi kami | new | `components/illustrations/{KopiRasaharsa,KopiSusuGulaAren,VietnamDrip,Affogato}.tsx`, inline SVG, `role="img"` with Indonesian `aria-label`. The shelf is an 8px `jati` rule under all four |
| LattePhoto | Kopi kami | new | Plain `<img>` with width/height, `loading="lazy"`, `decoding="async"`, `object-fit: cover`, `object-position: 48% 50%`; 5:4 on desktop, 1:1 on phone |
| MenuBoard | Menu andalan | new | 10px `pinus` frame, `baja` face, `kapur` text. Price inline after the name |
| FoodBand, NasiGorengPlate | Bukan cuma kopi | new | `jati` band. The plate SVG gets `data-mockup` and its caption says "(ilustrasi)" |
| PlaceWindow | Tempatnya | new | CSS grid on a `baja` background; the 10px `gap` draws the mullions. `kapur` panes, the event pane in `pakis` |
| ReviewThemes | Kata mereka | new | 2×2 on desktop, stacked on phone. No quote marks, names or stars |
| VisitHours, MapEmbed | Kunjungi kami | new | Hours as a `<dl>` with tabular numbers. The iframe is `loading="lazy"`, titled "Peta lokasi Rasaharsa di Google Maps", over a `dinding` fallback block showing the address |
| ContactBand, Footer | Hubungi kami | new | `dinding` band |

`lib/hours.ts`: `getJakartaNow()` uses `Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })` and returns a day index and minutes. `getStatus()` returns `{ open, todayClose, label }`:
- Open: "Sedang buka · Buka hari ini 08.00–22.30" (or 23.30).
- Closed, before 08.00 or after closing: "Sedang tutup · Buka lagi pukul 08.00".
- Times print with a dot ("08.00").

## React Bits (max 2)
None. The shop is a calm, lived-in room, and its one motion idea (the lights) is drawn from the room itself.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | n/a | Micro Slats looks like the slat wall by name, but it's a perspective "rolling sea" (a wall doesn't move, and it's a continuous background). Split/Blur Text on the wordmark would hide the LCP text and compete with the lights. Fade/Animated Content duplicate the starter Reveal | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. Tokens are in `lib/motion.ts`: `ease.out` = `power3.out` (CSS `cubic-bezier(0.16,1,0.3,1)`), `reveal` 0.6s / 20px, `lampu` { settle 0.7, settleStagger 0.09, bulb 0.45, bulbStagger 0.14, wash 0.8 }.
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): 3 pendants settle | load | y −14px→0, rotate 2.5°→0 (`transform-origin` at the cord top), opacity 0→1 | 0.7s, stagger 0.09s | power3.out | final state, no motion |
| Hero: bulbs switch on | load, starts 0.45s; only if status is not `false` | filament and glow opacity 0→1 | 0.45s each, stagger 0.14s | power2.out | final state per status |
| Hero: warm wash behind wordmark | load, starts 0.7s; only if not `false` | opacity 0→1 (layer max 0.16, `pinus` radial) | 0.8s | power2.out | final state per status; first cut candidate at plan step 10 |
| Hero: wordmark, line, status, buttons | none | none; painted at first load | n/a | n/a | n/a |
| Kopi kami, Menu andalan, Bukan cuma kopi, Tempatnya, Kata mereka, Kunjungi kami | scroll, once, section top at 85% | y 20px→0, opacity 0→1, whole section | 0.6s | power2.out | none (static) |
| Buttons and links | hover / press | `::after` overlay opacity 0→1 (`kapur` 12% on dark grounds, `baja` 8% on light); press `translateY(1px)`. No colour transitions | 180ms | ease-out (CSS) | overlay switches instantly, no press shift |

How it runs:
- Status is computed synchronously at the start of the hero's `useGSAP`, before the timeline is built, so the bulbs never flash on and then off.
- The closed state is CSS on `[data-open="false"]`: filament opacity 0.35, glow 0, wash 0.
- Use `gsap.from` only on the pendants and bulbs. Server-rendered HTML is the final lit state, so with JS off the page shows lit bulbs.
- No loops, no sway, no scroll-linked hero motion.
- All GSAP runs in `useGSAP` scoped to the hero ref (sections use the starter Reveal), so timelines and ScrollTriggers die with their component.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`:
  - `M_PLUS_Rounded_1c({ weight: ['700','800'], subsets: ['latin'], display: 'swap', variable: '--font-rounded' })`
  - `Figtree({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })`
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- `latte.jpg` 1100×880, ≤ 180 KB; add a 720px `srcset` variant. Inline SVGs ≤ 8 KB each. The map iframe is lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Text pairs, from design brief §3: `kapur`/`dinding` 9.6, `baja`/`kapur` 14.8, `kapur`/`jati` 6.1, `pakis`/`dinding` 6.3, `baja`/`pakis` 9.7, `kapur`/`baja` 14.8.
- Focus ring is 3px with a 2px offset: `pakis` on `dinding`, `baja` on `kapur`, `kapur` on `jati`, `baja` on `pakis`.
- Landmarks: banner region, `<header>` (hero), `<main>` with one `<section aria-labelledby>` per section, `<footer>`. Exactly one `h1`.
- Decorative SVGs (pendants, ferns, slats, shelf) are `aria-hidden`. Product SVGs are `role="img"` with an Indonesian label.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values are in design brief §4–5.
- Add `--slat: 46px` (72px from 1024px) for the hero pattern.
- Add `--shelf: 8px` and `--frame: 10px` (board frame and window mullion).
- Colours go into `@theme` as `--color-dinding`, `--color-baja`, `--color-kapur`, `--color-jati`, `--color-pakis`, `--color-pinus`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
