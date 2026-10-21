# TRD: Pintu Dua Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item` type; keep `shop` and `praise`):

```ts
shop:     { name: "Pintu Dua Coffee", subtitle: Item /* "Coffee", see note */, type: "Coffee shop",
            address, phoneDisplay: "0821-2398-0026", phoneTel: "+6282123980026",
            whatsapp: Item /* https://wa.me/6282123980026, mockup: true */,
            mapsUrl /* directions link */, mapEmbedUrl, hours: [{ days: "Senin–Minggu", time: "09.00–00.00" }],
            rating: { value: "4,7", count: 289 } }
hero:     { sub: Item /* mockup */, today: "Buka hari ini 09.00–00.00",
            photo: { src, alt, width: 344, height: 430 }, caption: { name: Item, price: Item, desc: Item } }
rooftop:  { label, heading: Item, lead: Item, rows: [{ key: "Atas" | "Bawah", text: Item, extra?: Item }] }
menu:     { heading, note, signature: Dish, groups: [{ title: "Kopi" | "Non-kopi", items: Dish[] }],
            counter: [{ sign: "Order & Pay Here", text: Item }, { sign: "Pick Up Here", text: Item }] }
kitchen:  { heading, lead: Item, dishes: [Dish & { photo }], extras: Item[] }
praise:   { heading, items: Item[] /* paraphrases */, note }
visit:    { heading, closingLine: "Buka setiap hari sampai tengah malam." }
contact:  { label, heading: Item }
type Dish = { name: Item; price?: Item; desc?: Item }
```

- `subtitle`: render "Coffee" under the name (the listing name is "Pintu Dua Coffee"). The
  "Coffee House" vs "Coffee & Kitchen" choice is an owner question, so don't render either.
- Links: directions `https://www.google.com/maps/dir/?api=1&destination=Pintu%20Dua%20Coffee&destination_place_id=ChIJl7Wz6uftaS4RGdRouMpRuu8`;
  embed `https://www.google.com/maps?q=Pintu+Dua+Coffee,+Jl.+Manunggal+XVII+No.2,+Lubang+Buaya,+Cipayung&output=embed`.
- Every drink and dish name, every price, the WhatsApp link and all marketing lines are `mockup: true`.
  Photo descriptions ("Minuman susu dingin dengan biskuit karamel…") are facts from owner photos: not mockup.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Pintu Dua Coffee. Beberapa detail masih contoh sampai Anda konfirmasi." |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | full-bleed grounds go on the `<section>`, not here |
| Reveal | Rooftop, Menu, Dapur, Kata mereka, Kunjungi, Hubungi | starter | one per section content block, never per item |
| SignPanel | Hero, Hubungi | new (server) | The quarter-circle sign: square box `width/height: var(--sign)`, `border-top-right-radius: 100%` (hinge bottom-left, like the wall sign; no clip-path polygon). `papan` fill, `tinta` lettering. Props `size`, `as="h1"`, `lit`. Contains the halo layer and dim layer as `aria-hidden` siblings |
| HeroSign | Hero | new (client) | Wraps SignPanel; runs the signature moment with `useGSAP` scoped to its ref |
| ActionButton | Hero, Kunjungi, Hubungi | new | `<a>`, min-height 48px, Archivo 600 sentence case at `--step-body`, radius 10px top / 4px bottom (counter-placard shape). Variants: `lampu` (fill, `malam` text), `line-dark` (papan 1.5px border on dark), `line-light` (malam border on light). Hover: `::after` tint layer opacity; press: `scale(.98)` |
| Festoon | Rooftop | new (static SVG) | `aria-hidden`. Desktop: two catenary swags across the container, 10 bulbs each; phone: one swag, 6 bulbs. Wire 1.5px `#5A5A55`, bulb r=5 `lampu`, static halo r=14 (radial gradient, 35%). No animation |
| FloorRows | Rooftop | new | `<dl>`: Atas / Bawah. `dt` small caps label, `dd` body text, 1px `abu-beton` rule between rows |
| MenuCard | Menu andalan | new | `kayu` card, radius 4px all round (the arc is not repeated here; motif budget is 3 uses). Signature row across the top, two `<ul>` groups below (2 columns ≥768). Price inline after the name, 12px gap, never right-aligned |
| CounterSteps | Menu andalan | new | Two placards ("Order & Pay Here" → "Pick Up Here"), caps Archivo 700 wdth 115, papan on kayu, arrow between, one caption line under each |
| DishFigure | Dari dapur | new | `<figure>` + `<figcaption>` 12px under the image; image `width/height` set, `max-width` = intrinsic width |
| PraiseGrid | Kata mereka | new | `<ul>` 2×2 at ≥1024, 1 column on phone |
| MapEmbed | Kunjungi | new | `<iframe title="Peta lokasi Pintu Dua Coffee" loading="lazy">`, 4:3, plus a text link fallback |
| ConcreteTexture | grounds | new (CSS) | static SVG `feTurbulence` data-URI as a background layer at 6–8% opacity on `beton` and `semen` grounds. No animation. First candidate to cut in plan step 10 |

## React Bits (max 2)
None.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | n/a | The signature moment is the shop's own sign switching on: about 30 lines of GSAP on two opacity layers, so no library is needed. Considered and declined: **Shiny Text** and **Blur Text** (a second light effect on the headline would fight the sign's light-up; motion-rules allows one text effect and the sign already is one), **Fade Content / Animated Content** (duplicate the starter's Reveal), **Light Rays / Particles / Dot Grid** (WebGL or background noise; the brief asks for warm light points, which a static SVG festoon does better), **Count Up** (the 4,7 rating is a fact to read, not a counter) | 0 KB | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero sign (signature moment) | load (mount) | **dim layer** (`beton` 100%, over the panel fill, under the lettering) opacity 0.6 → 0.15 (0.07 s) → 0.45 (0.08 s) → 0 (0.40 s); **halo layer** (same quarter shape, static `box-shadow: 0 0 80px 16px rgb(243 245 246 / .35)`) opacity 0 → 1 (0.60 s, starts at 0.30 s) | 0.90 s total, ≤ `duration.hero` | steps: `none`; last dim step and halo: `ease.out` | lit state, no motion |
| Hero rest (subline, hours, buttons, photo) | none | none | n/a | n/a | n/a |
| Section blocks (6, via Reveal) | ScrollTrigger `top 85%`, once | opacity 0 → 1, y 20 → 0 | `duration.reveal` 0.7 s | `ease.out` | final state |
| ActionButton hover | `:hover` / `:focus-visible` | `::after` tint layer opacity 0 → 1 | 0.15 s | ease-out (CSS) | instant |
| ActionButton press | `:active` | transform `scale(.98)` | 0.15 s | ease-out (CSS) | none |
| Festoon, map, photos | none | static | n/a | n/a | n/a |

- Initial dim/halo values are set by GSAP inside `useGSAP` (layout effect), so server HTML and
  no-JS show the sign **lit**. The h1 text is never hidden: unlit lettering on the dimmed panel is
  still 3.8:1 at its darkest frame (AA large text needs 3:1), and the panel stays 3:1 against the wall.
- Flash safety: one dip only, under 3 flashes per second. Do not add more flicker steps.
- No loops, no idle twinkle on the festoon.

Lenis: starter defaults (lerp 0.1, native touch). Motion tokens in `lib/motion.ts`: starter values unchanged.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the h1 in the sign (text), not a photo.
- At most 2 font families via `next/font`, subset, `display: swap`: Fredoka (variable wght),
  Archivo (variable wght + `axes: ["wdth"]`). Latin subset only.
- No preloaders, no video backgrounds, no WebGL.
- Images: three JPEGs from plan step 5, about 40–90 KB each, `loading="lazy"` except the hero cup.
  Never displayed wider than their intrinsic width (cup 344, platter 720, dimsum 750).
- Map iframe `loading="lazy"`.
- Animate transform and opacity only. The halo's blur is a static `box-shadow`; only its opacity moves.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `lang="id"` on `<html>`. One `<h1>`: "Pintu Dua Coffee" (spans for the stacked sign layout
  must read in order: "Pintu Dua Coffee"). The closing SignPanel is a `<p aria-hidden>` mark, not a heading.
- Focus ring: 2px `lampu` outline, 3px offset on dark grounds; 2px `malam` on light grounds.
- Alt text (Indonesian, no [MOCKUP] names): cup "Minuman susu dingin dengan biskuit karamel di atasnya, dalam gelas bertuliskan Pintu Dua"; platter "Kentang goreng, sosis, dan nugget dengan saus tomat di nampan kertas"; dimsum "Empat dimsum bersaus oranye yang dibakar, dengan saus sambal". Festoon and texture are `aria-hidden`.
- Paraphrased reviews are a `<ul>`, not `<blockquote>`, and carry no quotation marks.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- title: "Pintu Dua Coffee · Kopi & rooftop di Lubang Buaya, Cipayung"
- description: "Coffee shop bergaya industrial dengan rooftop di Jl. Manunggal XVII No.2, Lubang Buaya, Cipayung. Buka setiap hari 09.00–00.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Shop-specific variables also live in `:root`: `--sign`, `--arc-divider`
  (values in design brief §4–5). `--step-display` is derived from `--sign` so the name always fits inside the arc.
- Add `.t-label` (Archivo 700, `font-stretch: 115%`, uppercase, `letter-spacing: .12em`, `--step-small`).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
