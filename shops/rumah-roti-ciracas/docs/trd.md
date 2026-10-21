# TRD: Rumah Roti Ciracas mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`):
```ts
export type Item = { text: string; mockup?: boolean };
export type Photo = { src: string; alt: string; width: number; height: number };
export type Product = { id: string; name: Item; price?: Item; desc: Item; photo: Photo };

export const shop = {
  name: "Rumah Roti Ciracas",
  type: "Toko roti",
  address: "Jl. Masjid Al-Ishlah No. 20, Susukan, Ciracas, Jakarta Timur 13750",
  addressShort: "Jl. Masjid Al-Ishlah No. 20, Susukan, Ciracas",
  phoneDisplay: "0838-9818-8891",
  tel: "tel:+6283898188891",
  wa: "https://wa.me/6283898188891",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rumah%20Roti%20Ciracas&destination_place_id=ChIJTagUebjtaS4RcqTIjCibZpM",
  mapsUrl: "https://maps.google.com/?cid=10621347369662850162",
  mapEmbedUrl: "https://www.google.com/maps?q=Rumah%20Roti%20Ciracas%2C%20Jl.%20Masjid%20Al-Ishlah%20No.%2020%2C%20Susukan%2C%20Ciracas%2C%20Jakarta%20Timur&output=embed",
  hours: [ { days: "Senin–Sabtu", time: "08.10–19.10" }, { days: "Minggu", time: "Tutup" } ],
  rating: { value: "4,9", count: 736 },
};
```
- `hero`, `etalase` (3 `Product`s + the "Juga ada" line), `rotiBuaya`, `kue`, `praise` (4 paraphrases,
  never quotes, no names), `visit`, `contact`: exact strings from the PRD's sections table, each with
  its [MOCKUP] flag.
- WhatsApp prefill messages are `Item`s with `mockup: true`; build links as
  `${shop.wa}?text=${encodeURIComponent(msg.text)}`. Buttons whose job rests on a [MOCKUP] claim
  ("Pesan roti buaya", "Pesan kue ulang tahun", the Hubungi lead) carry `data-mockup`.
- Product names, prices, the hero line and the "Rp 3rb–8rb" line are separate `Item`s, so only the
  mockup parts get `data-mockup`.
- `MockupBanner` text in Indonesian: "Draf mockup untuk Rumah Roti Ciracas. Beberapa detail masih
  contoh sampai dikonfirmasi pemilik." `<html lang="id">`; metadata description in Indonesian.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian copy (above) |
| Container | all | starter | `--container` 1200px |
| Reveal | Etalase, Roti buaya, Kue, Kata mereka, Kunjungi, Hubungi | starter | one per section block, never per card |
| SmoothScroll | layout | starter | defaults |
| Sticker | Hero (pressed), Hubungi (static) | new | `<a href={wa}>`, square paper (#FFFBF0, radius 6px), inset gold ring (1.5px circle), "Rumah Roti" in Yellowtail at `--step-lead`, "CIRACAS" Baloo 600 `--step-small` tracked 0.2em, WhatsApp glyph (inline SVG ≤ 16px) + number Baloo 700 `--step-small`. Props `size` (148/176/224/168 px), `press?: boolean`. Two shadow layers as sibling elements (soft lifted, tight stuck) so motion stays on opacity. Accessible name "Chat WhatsApp Rumah Roti Ciracas, 0838-9818-8891". If the number doesn't fit inside the ring at 148 px, set it on the paper just below the ring; never below `--step-small` |
| PriceCard | Hero, Etalase, Roti buaya | new | paper label overlapping its photo's edge by 20px; name Baloo 700 + price Baloo 500 in crust, 8px apart, `--step-body`; 1px cocoa/15% hairline + 1–2px shadow; straight, never rotated |
| ProductPhoto | Hero, Etalase, Roti buaya, Kue, Kunjungi | new | `<figure>` + plain `<img>` with width/height (images are unoptimized in the starter), `object-fit: cover`, radius 6px; `loading="lazy"` except the hero (`fetchPriority="high"`, no lazy) |
| TodayHours | Hero | new, client | SSR text "Senin–Sabtu 08.10–19.10 · Minggu tutup"; in `useEffect` read the weekday with `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`: Sunday → "Hari ini tutup · Buka lagi Senin 08.10", otherwise "Buka hari ini 08.10–19.10". Paper pill |
| HoursTable | Kunjungi | new, client | 2 rows; today's row gets a "hari ini" tag set in `useEffect` (Asia/Jakarta), none on the server |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Rumah Roti Ciracas" referrerPolicy="no-referrer-when-downgrade">`, 300px phone / 480px desktop, radius 8px; a "Buka di Google Maps" link under it as fallback |
| Button | all | new | variants `wa` (crust fill, paper text), `outline` (2px cocoa border, cocoa text, transparent; on cocoa band: butter border/text), min-height 48px, Baloo 700 `--step-body`; overlay span for hover opacity |
| Sections | page | new | `Hero`, `Etalase`, `RotiBuaya`, `KueUlangTahun`, `KataMereka`, `Kunjungi`, `Hubungi`, `Footer` in `components/sections/` |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | The signature is a 0.45s GSAP tween on a real link (the sticker); nothing else needs a component | 0 | n/a |

Considered and rejected:
- **Sticker Peel** (on-concept, a peelable sticker): WebGL2 canvas, ~40 KB source, image-only, drag and
  throw physics. It would turn the WhatsApp number into a picture (unreadable to screen readers, not
  copyable). Drag fights tap-to-chat and touch scrolling, and WebGL breaks the budget on mid-range phones.
- **Count Up** (rating): animating a rating is decoration around a claim.
- **Bounce Cards** (Etalase): fanned photo cards are a generic gallery and would cover the price cards.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero sticker (signature moment) | load, 0.15s after hydration, once | scale 1.12→1, rotate −11°→−4°, y −10→0 | 0.45s | `expo.out` | final state (stuck, −4°), no motion |
| Hero sticker shadows | same timeline, starts at 0.15s | soft shadow opacity 1→0, tight shadow opacity 0→1 | 0.3s | `power2.out` | tight shadow only |
| Section blocks (6) | ScrollTrigger `top 85%`, once | autoAlpha 0→1, y 20→0 (starter `Reveal`) | 0.6s | `power2.out` | visible, no motion |
| Sticker hover / focus-visible | pointer / keyboard | rotate −4°→−1°, y 0→−3px, soft shadow opacity 0→0.6 (CSS) | 0.2s | ease-out | no transform; focus ring stays |
| Buttons hover / active | pointer | overlay opacity 0→0.12, y 0→−1px; active scale 0.98 (CSS) | 0.15s | ease-out | opacity change only |

No-flash rule for the sticker: a 1-line inline script in `<head>` adds `js` to `<html>`. CSS sets
the lifted transform and soft shadow under `html.js [data-sticker-press]`, except inside
`@media (prefers-reduced-motion: reduce)`. The GSAP `to()` runs inside `useGSAP` with a scope and is
skipped when `prefersReducedMotion()` is true (then add a class that sets the stuck state). The sticker is never
`opacity: 0`.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  LCP is the hero name or owner-4; ship owner-4 at 1400px wide, JPEG quality ~78 (≤ 180 KB).
- At most 2 font families via `next/font`: Baloo 2 (variable, latin) and Yellowtail (400, latin),
  `display: swap`. Variable classes on `<html>`; tokens in `@theme inline` (`--font-display`,
  `--font-body` → Baloo 2, `--font-script` → Yellowtail) so `var()` resolves.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Map iframe lazy; every image except the hero lazy, with width/height set (no layout shift).
- Images pre-cropped per design brief §6 and resized: Etalase 800px, Roti buaya 910px (source
  max), Kue stroberi 1200px, Kue cokelat 1000px, shopfront 640px (source max).

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Contrast pairs are in design brief §3; crust text on butter only at display size.
- Focus ring: 3px cocoa outline, 3px offset (butter outline on the cocoa band).
- One `<h1>` (shop name); `<h2>` per section; the price cards and captions are inside the `<figure>`
  (`<figcaption>`). The sticker's visible text is decorative inside a link with an `aria-label`.
- Alt text in Indonesian, describing the item, e.g. "Roti kura-kura dengan cangkang hijau dan
  wajah cokelat di atas loyang"; the shopfront alt notes the sign "Rumah Roti Ciracas".
- Paraphrased praise is a `<ul>`, not `<blockquote>`, and has no quotation marks.
- Skip link "Langsung ke konten" to `#konten`.

## SEO / meta
Title "Rumah Roti Ciracas, toko roti di Susukan, Ciracas"; description "Roti lembut, roti bentuk
lucu, roti buaya dan kue ulang tahun pesanan. Senin–Sabtu 08.10–19.10." from `content.ts`.
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values: design brief §4 and §5. `--leading-display: 1.05`, `--leading-head: 1.1`, `--leading-body: 1.55`;
  `.t-lead` line-height 1.3.
- Colours into `@theme` as `--color-butter`, `--color-paper`, `--color-cocoa`, `--color-crust`,
  `--color-frosting`, `--color-gold`; `html` background butter, text cocoa.
- Desktop grids use 12 columns from 1024px (`lg:`), 24px gap; spans as in the design brief wireframes.
- Hero name: `<h1>` with two `white-space: nowrap` spans ("Rumah Roti" cocoa, "Ciracas" crust) so
  it wraps only between them.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
