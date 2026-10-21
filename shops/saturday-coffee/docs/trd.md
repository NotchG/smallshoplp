# TRD: Saturday Coffee 2.0 mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Shop-specific setup:
- `app/layout.tsx`: `<html lang="id">`; fonts Fredoka + Figtree via `next/font/google` (see design brief §4);
  metadata title "Saturday Coffee 2.0 · Coffee shop di Jatinegara, Jakarta Timur", description
  "Coffee shop dengan halaman semi-outdoor di Cipinang Cempedak, dekat Stasiun KCIC Halim. Buka setiap
  hari 08.30–22.00, Sabtu–Minggu sampai 23.00."; `robots` noindex kept.
- `MockupBanner`: Indonesian text "Draf mockup untuk Saturday Coffee 2.0. Beberapa detail masih contoh
  sampai dikonfirmasi pemilik." Banner background malam, text plaster.
- No raster images. Every visual is inline SVG or `public/terrazzo.svg`. Customer photos in
  `shops/saturday-coffee/photos/` are never copied into the site.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`):
```ts
export type Item = { text: string; mockup?: boolean };
export type Product = {
  id: "kopi-susu-strong" | "kopi-susu-mantan" | "wake-up-call" | "kentang-bangkok" | "risol-smoked-beef" | "beef-bowl";
  name: Item;            // name.mockup = true for spelling/name not confirmed
  note: Item;            // one line, source in PRD
  price: Item;           // always mockup: true
  alt: string;           // Indonesian alt for the illustration
};
export const shop = {
  name: "Saturday Coffee 2.0", display: "Saturday Coffee", tag: { text: "2.0" } as Item,
  type: "Coffee shop", address: "Jl. Cipinang Cempedak IV No.20, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340",
  addressShort: "Jl. Cipinang Cempedak IV No.20, Jatinegara",
  phone: "0878-8379-8730", tel: "tel:+6287883798730",
  whatsapp: { text: "https://wa.me/6287883798730", mockup: true } as Item,
  mapsUrl: "https://maps.google.com/?cid=6104321714020755894",
  mapEmbed: "https://www.google.com/maps?q=Saturday+Coffee+2.0,+Jl.+Cipinang+Cempedak+IV+No.20,+Jatinegara,+Jakarta+Timur&output=embed",
  hours: [
    { days: "Senin–Jumat", dayIdx: [1, 2, 3, 4, 5], time: "08.30–22.00" },
    { days: "Sabtu–Minggu", dayIdx: [6, 0], time: "08.30–23.00" },
  ],
  hoursNote: "Buka setiap hari",
  rating: { value: "4,7", count: 760 },
};
// then: hero, menu { intro, priceNote, drinks: Product[], food: Product[], more: Item[] },
// atmosphere { lead, line, facts: Item[], labels }, station { line, time: Item, link },
// praise: { title: string; body: string }[] (paraphrased, never quoted, never named),
// visit { parking }, contact { signoff: Item }, footer.
```
All strings exactly as in the PRD's sections table.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text, malam/plaster |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | content width 1200px |
| Reveal | menu, Suasana, station, praise, visit, contact | starter | one per section content block |
| StringLights | hero | new | inline SVG, 12 bulbs, CSS keyframes (design brief §8); `aria-hidden` |
| TileBand | hero bottom, footer bottom | new | SVG `<pattern>`: abu parallelogram slates, tegel 6px joints, zigzag; full bleed; `aria-hidden` |
| TodayHours | hero, visit | new, client | renders the fallback on server and first paint; after mount sets today's hours/row from `Intl.DateTimeFormat("en-US",{timeZone:"Asia/Jakarta",weekday:"short"})`; no hydration mismatch |
| CourtyardVignette | hero | new | inline SVG ≤25 shapes: column, brick planter, snake plants, folding table, glass; `role="img"`, alt "Ilustrasi sudut halaman Saturday Coffee" |
| ProductTile + ProductArt | menu | new | 6 inline SVG illustrations on a terrazzo plate (design brief §6) |
| HouseSection | Suasana | new | cross-section SVG ≤40 shapes + absolutely positioned HTML labels (% coordinates) |
| RouteLine | station | new | horizontal on ≥768px, vertical on phone; two dots, line, time label at midpoint |
| ActionButton / ActionTile | hero, visit, contact | new | pill button (52px) and tile link (≥96px desktop, ≥64px phone) |
| MapEmbed | visit | new | `<iframe loading="lazy" title="Peta lokasi Saturday Coffee 2.0" referrerpolicy="no-referrer-when-downgrade">`, 4:3, 16px radius, plus text link under it |

## React Bits (max 2)
None. Considered and rejected:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (Split Text / Blur Text) | hero name | Rejected: would compete with the lights, and the site gets one signature | n/a | n/a |
| (Rotating Text) | "kerja / nongkrong / nunggu kereta" | Rejected: loops, and text effects run once on the headline only | n/a | n/a |
| (Count Up) | 4,7 rating | Rejected: a counting rating reads as hype | n/a | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): bulb glow groups ×12 | load (CSS keyframes, no JS) | opacity 0→1; halo `scale(.9)`→1 | 450ms each, delay 150ms + i×60ms, ≈1.26s total, runs once | `cubic-bezier(0.16,1,0.3,1)` | `animation:none; opacity:1` (lights on) |
| Hero text, buttons, vignette | none | none (visible at first paint) | n/a | n/a | n/a |
| Section content blocks (6) | ScrollTrigger `top 85%`, once | opacity, y 20→0 | 0.7s | `power2.out` | final state, no motion |
| Buttons | hover / press | `scale(.98)` on press; underline opacity | 150ms | ease-out | instant |
| Action tiles (contact) | hover / focus | arrow `translateX(4px)` | 200ms | ease-out | instant |

Lenis: starter defaults (lerp 0.1, native touch). Keyframe CSS lives in `globals.css` next to the
reduced-motion block. Note: the starter's reduced-motion rule shortens duration but not
`animation-delay`, so the bulbs need the explicit `animation:none; opacity:1` override.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap` (Fredoka, Figtree).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Map iframe `loading="lazy"`, below the fold. SVGs inline and small (each illustration ≤ 4 KB).

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: focus ring 3px, lampu on malam, tegel on plaster, plaster on daun/tegel. The h1's
accessible name is "Saturday Coffee 2.0" (tag inside the h1). Hours as `<dl>`; today's row gets
`aria-current="date"`. Decorative SVGs (lights, tile band, terrazzo) `aria-hidden`. lampu never on
plaster.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design brief §4 and §5 (container 1200px, gutter 20/40px, section-y 64/112px,
leading display 1.05, head 1.1, body 1.55). Colours in `@theme`: `--color-paper` plaster,
`--color-ink` malam, `--color-muted` abu, `--color-accent` tegel, plus `--color-daun`,
`--color-lampu`, `--color-redup`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
