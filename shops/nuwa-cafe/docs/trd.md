# TRD: NUWA Cafe mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item` type; keep every string in Indonesian):
- `shop`: `name: "NUWA Cafe"`, `type: "Kafe"`, `address: "Jl. Gongseng Raya No.16, Baru, Pasar Rebo, Jakarta Timur 13770"`,
  `addressShort: "Jl. Gongseng Raya No.16, Pasar Rebo"`, `mapsUrl: "https://maps.google.com/?cid=365483487607896667"`
  (raw.json `googleMapsUri`, tracking parameter dropped), `mapEmbedUrl:
  "https://www.google.com/maps?q=NUWA%20Cafe%2C%20Jl.%20Gongseng%20Raya%20No.16%2C%20Pasar%20Rebo%2C%20Jakarta%20Timur&output=embed"`,
  `whatsapp: ""` (placeholder; when filled, the button becomes a `https://wa.me/62…` link), `hours: [{ days: "Senin–Minggu", time: "11.00–22.00" }]`,
  `todayLine: "Buka hari ini 11.00–22.00"`, `rating: { value: "4,6", count: 227, source: "ulasan Google" }`.
- `hero`: `tagline` (mockup), `bowlCaption: "Ilustrasi: ramen kuah creamy"`.
- `menu`: `intro` (mockup), `ramen: { title, range, description, items[] }` (description from photos, not mockup;
  title range and items mockup), `groups[]` (Rice bowl, Favorit Indonesia, Camilan: `title`, `range`, `items[]`, all mockup),
  `lunchSet` (mockup).
- `coffee`: `intro` (mockup), `kopi[]` (`name`, `price`, mockup), `nonKopi: { range, items[] }` (mockup), illustration captions.
- `ambience`: `intro` (facts, wording mockup), `cells[]` (`kind: "drawing" | "text" | "block" | "photo"`, `label`, `phoneHidden?`).
- `praise[]`: three paraphrased lines, `note: "Ringkasan ulasan Google, bukan kutipan"`.
- `close`: `heading`, `sub` (mockup).
- `banner`: Indonesian banner text.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | Menu, Ngopi, Suasana wall, Kata mereka | starter | section-level only, one per section |
| Container | all | starter | `--container` 1200px |
| MockupBanner | top | starter, edited | Indonesian text from `content.ts`, chalk on ink |
| SmoothScroll | layout | starter | defaults |
| Hero | Hero | new | h1 "NUWA Cafe", tagline, hours line, two actions, bowl |
| FestoonWire | Hero | new | static inline SVG, full bleed, `aria-hidden`, catenary + 6–8 bulbs, sits above the wordmark in z-order |
| RamenBowl | Hero | new | inline SVG, `role="img"` + `aria-label`; each topping is `<g class="topping" data-order="n">`; owns the signature timeline (`useGSAP`, scoped) |
| RimBand | Hero bottom, footer top | new | SVG `<pattern>` tile (tomato zigzag over rim-blue triangles), `aria-hidden`, height 20px / 28px |
| ActionButton | Hero, Kunjungi, close | new | variants `primary` (tomato/chalk), `outline` (ink), `onTomato` (chalk fill / chalk outline); WhatsApp placeholder variant renders a non-interactive `<span aria-disabled="true">` with `data-mockup` and the caption "nomor menyusul" until `shop.whatsapp` is set |
| MenuSection, MenuGroup | Menu andalan | new | blush field; group h3 with range on the same line; items with inline price |
| CoffeeSection, CappuccinoArt, IcedCoffeeArt | Ngopi di NUWA | new | two inline SVGs with captions |
| RosterWall, RosterCell + line drawings (Vines, RedChair, Bulbs, CubeShelf, RosterBlock) | Suasana NUWA | new | CSS grid of square cells (`aspect-ratio: 1`), 2px grout via `gap` on an ink-8% ground; photo cell spans 2×2 |
| PraiseSection | Kata mereka | new | leaf field, no `<blockquote>`, no quote marks |
| VisitSection | Kunjungi kami | new | address `<address>`, hours, `<iframe loading="lazy" title="Peta lokasi NUWA Cafe">` |
| CloseSection | Hubungi kami | new | tomato field |
| Footer | footer | new | rim band, wordmark, address, draft note |

## React Bits (max 2)
None. Reviewed on reactbits.dev and declined:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The one authored moment is the topping sequence, built from the shop's own bowl. Split Text / Blur Text on the headline would compete with it; Count Up on "4,6" dramatises a fact best stated plainly; Circular Text around the bowl is decoration; Magic Bento / Masonry contradict the roster wall's honest square grid; Status Mark is built for agent tasks; Strands is a WebGL orb from another world. | 0 | n/a |

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero toppings (signature moment) | load, 0.15 s after hydration | opacity 0→1, y -16→0, scale 0.94→1 (`transformOrigin: center`), nori also rotate -6°→0 | 0.5 s each, stagger 0.08 s, 8 groups, ≈ 1.1 s total | `ease.outStrong` (expo.out) | final state, no motion |
| Bowl, broth, noodles, all hero text | none | none | | | already final |
| Menu andalan block | scroll, `top 85%`, once | opacity, y 20→0 | 0.7 s | `ease.out` | final state |
| Ngopi di NUWA block | same | same | 0.7 s | `ease.out` | final state |
| Suasana wall (whole grid as one block) | same | same | 0.7 s | `ease.out` | final state |
| Kata mereka block | same | same | 0.7 s | `ease.out` | final state |
| Buttons | hover / press (CSS) | background-color, translateY(-1px); press scale(0.98) | 180 ms / 120 ms | ease-out | colour change only |
| Text links | hover (CSS) | text-decoration-color | 150 ms | ease-out | same |

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

No-flash rule for the toppings: an inline script in `<head>` (layout.tsx) adds `js-motion` to `<html>` only when
`prefers-reduced-motion` is not `reduce`. CSS: `html.js-motion .topping { opacity: 0; animation: topping-failsafe 0.01s 1.5s forwards; }`
with `@keyframes topping-failsafe { to { opacity: 1; } }`, so toppings show after 1.5 s even if GSAP never runs.
If `performance.now()` is above 1200 ms when `RamenBowl` hydrates, skip the timeline and `gsap.set` the final state:
a late intro is worse than none. With JS off or reduced motion the class is never set and the bowl
is complete on first paint. Order the groups by `data-order`; one `gsap.timeline` in `RamenBowl`'s `useGSAP` scope.
Motion tokens in `lib/motion.ts`: `duration = { press: 0.15, ui: 0.22, reveal: 0.7, hero: 1.1, topping: 0.5 }`,
`stagger = { topping: 0.08 }`, `distance = { reveal: 20, topping: 16 }`; eases unchanged.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- This shop ships no raster images: all visuals are inline SVG (keep the bowl under ~12 KB). Jost and Nunito are
  variable, latin subset only. The Maps iframe is `loading="lazy"` and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Pairs to use (from the design brief): ink on chalk 15.75, ink on blush 12.75, chalk on tomato 4.95, chalk on leaf 6.13.
  Never tomato text on blush (4.01) and never rim-blue as text.
- Focus: 3px ink outline, 3px offset; chalk outline inside the leaf and tomato fields.
- `RamenBowl` `aria-label`: "Ilustrasi ramen kuah creamy dengan telur rebus, jagung, nori, narutomaki, daging dan minyak cabai".
  Cup and glass labelled likewise. Wire, rim band and roster drawings `aria-hidden`.
- Photo placeholder: `role="img"` with `aria-label` "Tempat foto ruang makan, menunggu foto dari pemilik".
- The WhatsApp placeholder is not focusable and says why ("nomor menyusul"); it is not a dead link.
- Skip link "Lewati ke konten" to `#konten`. `<html lang="id">`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title: "NUWA Cafe · Makan siang & ngopi di Pasar Rebo". Description: "NUWA Cafe di Jl. Gongseng Raya No.16, Pasar Rebo,
Jakarta Timur. Buka setiap hari 11.00–22.00." Set `lang="id"` in layout.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values from the design brief §4–5. Add `.t-wordmark` (display size, Jost 200, uppercase, `letter-spacing: 0.42em`,
  `margin-right: -0.42em`, leading 0.9) and `.t-tracked` (Jost 300, 0.42em) in `globals.css`.
- `@theme` colours: `chalk`, `ink`, `tomato`, `leaf`, `blush`, `rim`; fonts `--font-display` (Jost), `--font-body` (Nunito).
- Gutter 20px → 32px at 768 → 40px at 1024; section-y 64px → 112px at 768.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
