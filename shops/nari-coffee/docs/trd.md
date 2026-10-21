# TRD: Nari Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Nari-specific shape (extend the starter's `Item`; names and prices are flagged separately because
some names are real while their prices are not):

```ts
type Price = { short: string; label: string; mockup: true };   // short "25" (+ "rb" rendered small), label "Rp 25.000" for aria-label
type Dish = { name: string; nameMockup?: boolean; desc?: Item; price?: Price; visual?: "photo" | "glass" | "box" | "none" };
```

- `shop`: name "Nari Coffee", area "Duren Sawit · Jakarta Timur", address "Jl. Swadaya Raya No.1, Duren Sawit, Jakarta Timur 13440",
  phone "0895-1021-7613", tel "tel:+6289510217613", whatsapp "https://wa.me/6289510217613" (`mockup: true`),
  directions "https://www.google.com/maps/dir/?api=1&destination=Nari+Coffee+Duren+Sawit&destination_place_id=ChIJj8gPA7aNaS4RpItnrg2m_rc",
  mapsUrl "https://maps.google.com/?cid=13258216930716126116",
  mapEmbed "https://maps.google.com/maps?q=Nari%20Coffee%20Duren%20Sawit%2C%20Jl.%20Swadaya%20Raya%20No.1&z=17&output=embed",
  hours `[{ days: "Senin–Minggu", time: "10.00–21.30" }]`, todayLine "Buka hari ini 10.00–21.30", rating "4,9 di Google Maps dari 315 ulasan".
- `hero`, `menu` (`photoDrink`, `featuredDrinks`, `otherDrinks`, `food`), `mieBlenger`, `place` (lead + `floors[]`), `praise[]`, `visit`, `contact`, `banner`.
- Every string in the PRD's sections table is in `content.ts`, in Indonesian, with the PRD's [MOCKUP] flags.
- Metadata: title "Nari Coffee · Duren Sawit, Jakarta Timur"; description "Kafe dua lantai di Jl. Swadaya Raya, Duren Sawit. Buka setiap hari 10.00–21.30."
  Set `<html lang="id">`. Rewrite `MockupBanner` copy to `content.banner` (Indonesian).

## Assets (from owner photos only; `photo-*.jpg` never ship)
Crop from the originals (1600×2133 px) into `site/public/img/`, JPEG q≈80, plus an 800px-wide copy of each photo:

| File | Source | Crop box (x0, y0, x1, y1) | Use |
|---|---|---|---|
| `shopfront.jpg` | owner-1.jpg | 0, 260, 1600, 1240 | hero photo strip (sign, awning, upper glass front; no motorbikes, no plates) |
| `forecourt.jpg` | owner-1.jpg | 0, 1330, 1060, 2133 | Tempatnya (filigree tables on terrazzo; bikes and plates excluded) |
| `badge.jpg` | owner-1.jpg | 1176, 530, 1380, 734 | round N badge, shown with `border-radius: 50%` |
| `berry.jpg` | owner-2.jpg | 0, 67, 1600, 2067 (4:5) | Menu andalan feature photo |

Crops were checked: none shows a number plate. Alt text in Indonesian (e.g. "Papan nama biru Nari Coffee di atas kanopi hitam").
Product illustrations are inline SVG components (see design brief §6), no raster files.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian copy from `content.banner` |
| SmoothScroll | global | starter | Lenis defaults |
| Container | all | starter | `--container` 1200px |
| Reveal | Menu andalan, Mie Blenger, Tempatnya, Kata mereka, Kunjungi | starter | section-level only, once |
| HeroFascia | Hero | new | cobalt band (label, h1, tagline, buttons) + ink AwningBar + shopfront photo strip |
| RollingBadge | Hero | new (client) | `badge.jpg` in a circle; the signature moment (GSAP, see motion spec) |
| AwningBar | Hero | new | 3 items: hours / address / phone, each a small label + value |
| PriceRoundel | menus | new | circle 48px (phone 44px); `short` in body semibold + "rb" in small; `aria-label` = `price.label`; variants `onPaper` (cobalt disc, paper text) and `onCobalt` (paper disc, cobalt text); always `data-mockup` |
| CanGlass | Menu andalan | new (SVG) | props `{ liquid, top?, ice }`; Luna Coffee and Taro Latte |
| NoodleBox | Mie Blenger | new (SVG) | one drawing, prop `sauce`; Original / Kari / Rendang |
| MenuAndalan | 2 | new | photo + featured drinks + other drinks + food |
| MieBlengerCard | 3 | new | cobalt "poster" card, 3 dishes |
| FloorDirectory | Tempatnya | new | 3 rows: label + text |
| PraiseGrid | Kata mereka | new | 4 paraphrased themes, no quote marks, no names, no stars |
| VisitBlock + MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Nari Coffee">`, with a plain "Buka di Google Maps" link beside it |
| ContactBand | Hubungi kami | new | 3 buttons + small lockup |
| Button | all | new | variants `paper` (on cobalt/ink), `cobalt` (on paper/sky), `outline` (on cobalt); 52px tall, radius 14px |

## React Bits (max 2)
None. The one signature moment (the badge roll) is a single GSAP tween that no component does better,
and the shop's look is crisp and clean: extra effects would blur it. Considered and rejected:

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | – | – | – | – |
| Circular Text (rejected) | around the badge | would compete with the badge roll and loops forever (decoration) | – | – |
| Rotating Text (rejected) | tagline | text effects are for the headline only; the tagline must stay readable | – | – |
| Bounce Cards / Stack (rejected) | drinks | hides prices behind a gimmick; menus must be scannable | – | – |
| Count Up (rejected) | rating | turns the rating into the hero of the reviews section | – | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): RollingBadge | load, 150ms after mount | `x` from `+π × badge width` (px, measured at runtime) to 0; `rotation` from 360 to 0 (counter-clockwise roll leftwards); `autoAlpha` 0→1 over the first 0.2s | 1.0s | `power3.out` | final state, no motion |
| Hero name, tagline, buttons, awning bar, photo | – | none: visible and static from first paint | – | – | – |
| Section blocks (Menu andalan, Mie Blenger card, Tempatnya, Kata mereka, Kunjungi kami) | ScrollTrigger `top 85%`, once | `autoAlpha` 0→1, `y` 20→0, whole section block, no child stagger | 0.6s | `power2.out` | final state, no motion |
| Buttons | hover / press (CSS) | background colour; `translateY(-1px)` on hover; `scale(.98)` on press | 180ms / 120ms | ease-out | colour change only |
| Text links | hover (CSS) | underline colour | 150ms | ease-out | colour change only |

Implementation notes: RollingBadge uses `useGSAP` with a scope; `gsap.from` so the badge's resting
state is the server-rendered final position (JS off = badge in place). The cobalt band has
`overflow: hidden` so the badge never causes horizontal scroll. The badge never spins on hover.

Lenis: starter defaults (lerp 0.1, native touch).

Motion tokens for `lib/motion.ts`: `duration = { press: 0.12, ui: 0.18, reveal: 0.6, hero: 1.0 }`,
`ease = { out: "power2.out", outStrong: "power3.out", inOut: "power2.inOut" }`, `distance = { reveal: 20 }`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element should be the h1 text; `shopfront.jpg` loads eagerly (it sits in or just under
  the first viewport at 390 and 1440) with `srcset` 800w/1600w, explicit width/height, no `fetchpriority`.
- At most 2 font families via `next/font`, subset, `display: swap`: Young Serif 400 (latin) and Figtree variable (latin, 400/600/700).
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Map iframe `loading="lazy"`; it sits below the fold.
- Images: static export, so pre-sized files (`next.config` keeps `images.unoptimized`); every `<img>` has width/height to avoid layout shift.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Nari specifics: never cobalt text on ink (2.09:1); focus ring 3px `cobalt` on paper/sky and 3px
`paper` on cobalt/teak/ink, offset 3px; price roundels expose "Rp 25.000" via `aria-label`;
illustrations get `role="img"` + Indonesian `aria-label` ("Ilustrasi es kopi susu dalam gelas kaleng");
the badge image is decorative next to the h1 (`alt=""`), and labelled "Logo Nari Coffee" in the footer lockup.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add `--radius-card` (20px phone / 28px ≥768) and `--radius-btn` (14px) next to them.
Set `--leading-display: 1.05` (the h1 is sized to stay on one line, but the brief keeps 1.05 for safety).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
