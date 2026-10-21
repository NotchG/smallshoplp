# TRD: Halaman Pertama Kitchen & Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (all strings in Bahasa Indonesia):
- `shop`: name, `wordmark: { bold: "halaman", light: "pertama", sub: "KITCHEN & COFFEE" }`,
  address, `phoneDisplay: "0821-1244-6115"`, `phoneTel: "+6282112446115"`,
  `whatsapp: { url: "https://wa.me/6282112446115", mockup: true }`,
  `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Halaman+Pertama+Kitchen+%26+Coffee&destination_place_id=ChIJ179-INbtaS4RsfbPgsMbfjI"`,
  `mapEmbedUrl: "https://www.google.com/maps?q=Halaman+Pertama+Kitchen+%26+Coffee,+Jl.+Raya+PKP+No.2,+Kelapa+Dua+Wetan,+Ciracas,+Jakarta+Timur&output=embed"`,
  `rating: { value: "4,1", count: 596 }`.
- `hours`: seven rows `{ day: "Senin", open: "08.30", close: "22.30" }` … Jumat/Sabtu/Minggu close "23.00",
  plus `jsDay` index (0 = Minggu) for today-matching. Note "Buka setiap hari".
- `corners[3]`: `{ name, line, drawing: "ruang" | "halaman" | "teras", fill }`.
- `dishes[4]` (photo cards): `{ name, line, price?, img, alt, mockup?, nameMockup? }`.
  The price is only set where the brief gives one; Pizza 65rb and both fries 25rb–30rb carry `mockup: true`.
- `menu.bar[]`, `menu.dapur[]`: `{ name, line?, price?, mockup?, tag? }`. Bonbon Noir gets `tag: "Favorit"` and no price.
- `work[4]`, `themes[4]` (paraphrased, `{ label, text }`, no author field at all), `parking`, `contact`.
- `meta`: title "Halaman Pertama Kitchen & Coffee · Ciracas, Jakarta Timur"; description
  "Kafe dan dapur di Ciracas dengan ruang ber-AC, area terbuka, dan teras beratap. Buka setiap hari 08.30–22.30, Jumat–Minggu sampai 23.00."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text: "Draf mockup · belum situs resmi Halaman Pertama" |
| Container | all | starter | |
| SmoothScroll | layout | starter | defaults |
| Reveal | sudut, menu grid, kerja, ulasan, kunjungi | starter | section-level only, 5 uses max |
| Wordmark | hero (h1), footer (p) | new | two spans `.wm-a` (800) / `.wm-b` (300), no space between, `aria-label="Halaman Pertama Kitchen & Coffee"` on the h1; sub line in a separate element |
| HeroMotion | hero | new, client | `useGSAP` with hero scope; runs only if `html.js-motion` |
| ArchWindow | hero, sudut | new | props: `width/height` via CSS vars, `fill`, `frame` (bool), children (img or svg). Wrapper `border-radius: 9999px 9999px 0 0; overflow: hidden`; frame = absolutely positioned box from `top: calc(var(--w) / 2)` to bottom, `border: var(--frame) solid arang` |
| TodayHours | hero, kunjungi | new, client | see logic below; SSR fallback text |
| CornerDrawing ×3 | sudut | new, inline SVG | `viewBox="0 0 240 320"`, `aria-hidden`, ≤14 elements, stroke 2 with `vector-effect: non-scaling-stroke` |
| GardenLeaves | hero ≥768 | new, inline SVG | 3 large leaves in `daun-muda` on `daun`, midribs in `daun`, cropped by the arch |
| RattanLamps | kunjungi | new, inline SVG | `rotan` stroke bell lamps on cords, static, `aria-hidden`; first candidate for the step-10 cut |
| DishCard | menu | new | `<figure>`: img 4:3 `loading="lazy"`, name + inline price, one line |
| MenuList | menu | new | `<ul>`; name (600) then price inline (gap 12px), line below in `abu` |
| VisitBlock | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Halaman Pertama">` on an `arang` placeholder with the address behind it; `<table>` week hours |
| ContactBlock, Footer | hubungi | new | buttons ≥44px tall |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | n/a | Zero is right here. The one signature is the shop's own two-weight wordmark join, built with the starter's GSAP, and the rest of the page is a calm white room | 0 KB | n/a |

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use. Nothing to install for this shop.

Considered on reactbits.dev and declined:
- Split Text / Blur Text (wordmark): generic per-letter effects. The signature must be the cup's own join and readable from the first paint.
- Fade Content / Animated Content (sections): duplicate the starter `Reveal`.
- Circular Text, Count Up (hours, rating): a rotating "buka setiap hari" badge is a cliché, and animating "596" adds nothing.
- Masonry, Tilted Card, Stack (menu): gallery effects need more than one owner photo.
- Silk, Aurora, Threads (backgrounds): WebGL noise contradicts the calm white room and the performance budget.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero photo `<img>` inside the arch (signature) | load, after hydration, if `html.js-motion` | `scale` 1.06 → 1 (start state set by CSS) | 1.4 s | `expo.out` | final state, no motion (class never added) |
| Wordmark `.wm-a` / `.wm-b` (signature) | load, +0.1 s | `x` −0.10em → 0 / +0.22em → 0 (start state set by CSS) | 1.1 s | `expo.out` | final state, no motion |
| Corner arches row | ScrollTrigger `top 85%`, once | `autoAlpha` 0→1, `y` 20→0 | 0.7 s | `power2.out` | static |
| Menu photo grid | same | same | 0.7 s | `power2.out` | static |
| Work rows | same | same | 0.7 s | `power2.out` | static |
| Review themes grid | same | same | 0.7 s | `power2.out` | static |
| Kunjungi block | same | same | 0.7 s | `power2.out` | static |
| Buttons, links | hover / focus / press | background-color, color, text-decoration-thickness (CSS) | 150 ms | ease-out | unchanged (not spatial) |

Inline head script in `app/layout.tsx` (before paint; add `suppressHydrationWarning` on `<html>`):
`if (matchMedia('(prefers-reduced-motion: no-preference)').matches) document.documentElement.classList.add('js-motion')`.
CSS start states live under `html.js-motion` only. GSAP uses `gsap.to(..., { x: 0 })` / `{ scale: 1 }`
so it reads the CSS start. If the JS bundle fails, the wordmark shows with a small gap and stays readable.
Lenis: starter defaults (lerp 0.1, native touch).

## TodayHours logic
- Read `Asia/Jakarta` weekday, hour and minute with `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })`.
- Open 08.30. Close 22.30 on Mon–Thu and 23.00 on Fri–Sun.
- Hero output: open → "● Sedang buka · tutup {close}" (`kursi` dot); before opening or after closing →
  "Tutup sekarang · buka lagi 08.30". The line under it: "Hari ini 08.30–{close}".
- SSR / no-JS fallback (rendered in HTML): "Buka setiap hari mulai 08.30". Swap after mount; no layout shift (reserve one line).
- Kunjungi table: mark today's row with the `kursi` dot and weight 600 after mount. The SSR table is unmarked.

## Images
- Hero: `owner-1.jpg` resized to 900×1350 (and 600×900 for phone via `srcset`), JPEG q≈78
  (≤170 KB / ≤90 KB), `fetchpriority="high"`, not lazy, explicit width/height. Alt:
  "Pizza pepperoni, sushi maki goreng, sweet potato fries, dan kentang saus keju di meja marmer Halaman Pertama".
- Dish crops: boxes in design-brief §6, 800×600 each, ≤90 KB, lazy. Make them with
  `sips -c <h> <w> --cropOffset <y> <x>` then `sips -Z 800`, or with sharp if it is present. Put them in `public/menu/`.
- `images.unoptimized` stays as the starter sets it. No customer photo (`photo-*.jpg`) is copied into `site/`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. This site uses one: Urbanist variable.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Page weight target ≤ 700 KB before the map iframe; the iframe is lazy and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: focus ring 2px `kursi` with 3px offset on `kapur` and `arang`, and 2px `kapur` on `daun`
(`kursi` fails on green). Drawings are `aria-hidden`. The h1 is the wordmark. The hours table has
`<th scope="row">` day names. The Google Maps iframe has a `title`. `lang="id"`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design-brief §4 and §5. `@theme` colours: `kapur`, `arang`, `daun`, `daun-muda`, `kursi`,
`rotan`, `abu`; `--font-display` and `--font-body` both point at the Urbanist `next/font` variable.
Set `--leading-display: 0.95`, `--leading-head: 1.1`, `--leading-body: 1.55`. Arch sizes go in CSS
variables per breakpoint (`--arch-w`, `--arch-h`), not arbitrary Tailwind values.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
