# TRD: Dalle Coffee and Eatery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names indicative, keep the starter's conventions where they exist):
- `shop`: `name: "Dalle Coffee and Eatery"`, `address` (full, from brief), `addressShort: "Ruko The Savoy, Jakarta Garden City"`,
  `phoneDisplay: "0851-8337-5752"`, `tel: "tel:+6285183375752"`,
  `whatsapp: { href: "https://wa.me/6285183375752?text=Halo%20Dalle%2C%20saya%20mau%20tanya%20ruang%20meeting.", mockup: true }`,
  `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Dalle%20Coffee%20and%20Eatery&destination_place_id=ChIJtefUZ_gDai4RVNiPQzcT87k"`,
  `placeUrl: "https://maps.google.com/?cid=13399074444434987092"`,
  `mapEmbed: "https://www.google.com/maps?q=Dalle%20Coffee%20and%20Eatery%2C%20Ruko%20The%20Savoy%20No.12%20Blok%20C1%2C%20Jakarta%20Garden%20City&output=embed"` (keyless; never use or read the API key),
  `hours: { open: "10:00", close: "21:00", days: "Setiap hari", label: "10.00–21.00" }`, `rating: { value: "4,8", count: 59 }`.
- `hero`: lockup parts, tagline, status label, button labels, image `{ src: "/images/dalle-bar.jpg", alt }`.
- `menu.drinks[]`: `{ id, name, price?, desc, note?, mockup flags per field, illustration }` for Dalle Iced Tea, Dalle Iced Coffee,
  Es latte cookie crumble. `menu.plate`: Pizza Coklat Keju. `menu.kitchen[]`: Pizza (price mockup), mains (whole item mockup).
- `work`, `meeting`, `reviews` (rating + 4 paraphrases + note), `visit`, `contact`, `footer`, `meta`, `banner`.
Every string from the PRD sections table is in `content.ts`. A field-level flag is fine where only part of an
item is mockup (e.g. `priceMockup: true` on Pizza, which is real; `nameMockup: true` on the flatbread).

Image: copy `shops/dalle-coffee-eatery/photos/owner-1.jpg` to `site/public/images/dalle-bar.jpg`, resized to
1200px wide and ≤ 250 KB (e.g. `sips --resampleWidth 1200 -s formatOptions 75`). Never copy `photo-*.jpg`. Alt:
"Bar Dalle dengan papan nama DALLE CAFE yang menyala dan logo lengkung berdaun di dinding kayu."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Draft banner | top | starter | Copy in Indonesian (PRD); `lang="id"` on `<html>` |
| Container, `.section`, `.t-*` | all | starter | All widths and sizes through these |
| Reveal | sections 2–7 | starter | Section-level only, never per item |
| `SlatField` | hero, meeting | new | Full-bleed walnut ground with the groove texture from the design brief §3 |
| `PendantBars` | hero | new | 3 (desktop) / 2 (phone) absolutely placed bars, `light`, 4px tall, static box-shadow glow, `aria-hidden` |
| `ArchWindow` | hero | new | `next/image` (priority, `unoptimized` if the starter's export needs it), semicircle top, dim layer + glow layer siblings for the motion, base flush with the section bottom |
| `Lockup` | hero | new | `<h1>` with two block spans: "Dalle" (`.t-display`, Marcellus) and "Coffee and Eatery" (`.t-lead`, Hanken 600, `text-transform: uppercase`, tracking 0.14em). Keep a space between the spans so the accessible name is "Dalle Coffee and Eatery" |
| `OpenStatus` | hero | new, client | Renders static "Buka hari ini 10.00–21.00" at build. After mount it appends "· sedang buka" / "· buka pukul 10.00" / "· sudah tutup" from `Intl.DateTimeFormat` in `Asia/Jakarta`. Dot uses `pandan-soft`, and the meaning is always also in text |
| `ActionButton` | hero, meeting, visit, contact | new | `<a>` styled as a button, 48px tall, variants `light` (on walnut) / `steel` (on plaster) / `outline`. Hover fill is a `::before` opacity layer |
| `Niche` | menu | new | Arched recess (`niche` fill, `border-radius: 999px 999px 0 0`, 5:7) or wide low variant for the plate |
| `IcedTea`, `IcedCoffee`, `IcedLatteCrumble`, `FlatbreadPlate` | menu | new | Inline SVG in `components/illustrations/`, `role="img"` + Indonesian `aria-label`, 2px `steel` strokes with `vector-effect: non-scaling-stroke`, fills from the design brief §3. Wrapped with `data-mockup` (stand-ins for photos) |
| `KitchenList` | menu | new | `<ul>`, name then price on the next line, max-width 28rem |
| `ShelfGrid` | kerja | new | 2 × 2 (desktop) / stacked (phone) cells framed by 2px `steel` rails and uprights |
| `MeetingDoor` | meeting | new | Arched-door outline (2px `light` border, semicircle top), facts in its lower rectangle, `<dl>` |
| `ReviewNotes` | ulasan | new | Rating line + 4 paraphrases as `<ul>`, no `<blockquote>`, no quote marks |
| `MapEmbed` | lokasi | new | `<iframe loading="lazy" title="Peta lokasi Dalle Coffee and Eatery" referrerpolicy="no-referrer-when-downgrade">`; if it fails to render in screenshots, replace it with a `niche` panel linking to `placeUrl` |
| `ContactClose` + footer | kontak | new | `walnut-deep` band, number directly above its buttons |

## React Bits (max 2)
None. I checked reactbits.dev (text animations, animations, components). The candidates
(Shiny Text, Blur Text, Split Text, Fade Content, Animated Content, Glare Hover) would either
duplicate the starter's Reveal or add a generic sheen or blur that this shop doesn't have. The one
moment the site needs, the lights switching on, is authored in GSAP from the shop's own pendants and
backlit sign. Zero components keeps the bundle small and the motion specific.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): pendant bars | load, t = 0 | opacity 0→1, scaleX 0.9→1 (origin centre), 0.12s apart | 0.5s each | expo.out | final state, no motion |
| Hero: photo | load, t = 0 | scale 1.04→1 | 1.2s | expo.out | final state |
| Hero: dim layer over photo (`walnut-deep`) | load, t = 0.15s | opacity 0.6→0 (CSS default is 0) | 0.9s | power1.out | stays at 0 |
| Hero: arch outline glow layer | load, t = 0.45s | opacity 0→1 | 0.6s | power2.out | final state (visible) |
| Hero: "Dalle" | load, t = 0.3s | y 20→0, opacity 0→1 | 0.7s | expo.out | final state |
| Hero: rest of lockup, tagline, status, buttons (one group) | load, t = 0.5s | y 12→0, opacity 0→1 | 0.6s | expo.out | final state |
| Section (Reveal), sections 2–7 | top at 85% viewport, once | y 20→0, opacity 0→1 | 0.6s | power2.out | final state |
| Buttons | hover / focus-visible / press | `::before` opacity 0→1; press translateY(1px) | 180ms / 120ms | ease-out (CSS) | opacity change only |

Whole hero sequence done by about 1.2s. Use one `gsap.timeline` inside `useGSAP` scoped to the hero.
No flash, no stuck content:
1. CSS default is the final state everywhere. With JS off, nothing is ever hidden.
2. An inline `<head>` script adds `motion-ok` to `<html>` only when reduced motion is not requested, and
   sets a 1.2s timer that removes `motion-ok` unless the hero has started (`window.__dalleHero`).
3. CSS sets the hero from-states only under `.motion-ok`.
4. On mount the hero sets `window.__dalleHero = true`. If `motion-ok` is still present, it `gsap.set`s
   the from-states inline, removes `motion-ok` and plays the timeline to the final state. If the
   timer already removed it, it skips the animation.
Nothing stays hidden longer than the hero sequence (1.2s). Don't use a CSS-animation failsafe:
it would override GSAP's inline styles.

Motion tokens in `lib/motion.ts` (map onto the starter's names): `dur.fast 0.18`, `dur.reveal 0.6`,
`dur.hero 0.7`, `dist.reveal 20`, `ease.arrive "expo.out"`, `ease.out "power2.out"`.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the hero photo: `priority`, ≤ 250 KB, explicit width/height. The dim layer
  never hides it.
- At most 2 font families via `next/font`, subset, `display: swap`: Marcellus (400) and Hanken Grotesk (400, 500, 600).
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Illustrations are inline SVG (no raster). Map iframe `loading="lazy"`, below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: focus ring 2px `light` on walnut grounds, 2px `steel` on plaster grounds, offset 3px.
Decorative layers (`PendantBars`, slat texture, glow, dim layer) are `aria-hidden`. The open
status is plain text, not only a coloured dot. The phone link text is the number itself. All
`aria-label`s, `title`s and alt text are in Indonesian.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Dalle Coffee and Eatery · Kafe di Jakarta Garden City"
- Description: "Kafe tenang di Ruko The Savoy, Jakarta Garden City. Buka setiap hari 10.00–21.00, dengan ruang meeting privat."
- `<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values for the variables are in the design brief §4–5. Palette tokens go into `@theme` as
`--color-walnut`, `--color-walnut-deep`, `--color-plaster`, `--color-steel`, `--color-light`,
`--color-pandan`, plus the variants `--color-niche` and `--color-pandan-soft`. Illustration fills stay local to the SVG components.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
