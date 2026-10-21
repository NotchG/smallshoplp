# TRD: Mardin Baklava Patisserie mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`; keep every string in Indonesian):
- `shop`: name, shortName "Mardin", type "Patisserie & kafe dessert Turki", address, phone
  "0821-1203-3331", `tel` "+6282112033331", `whatsapp` "https://wa.me/6282112033331" (mockup),
  `mapsUrl` "https://maps.google.com/?cid=17580670136252498889",
  `directionsUrl` "https://www.google.com/maps/dir/?api=1&destination=Mardin+Baklava+Patisserie&destination_place_id=ChIJK3xb0mDzaS4RyQOmsFcW-_M",
  `mapEmbed` "https://www.google.com/maps?q=Mardin+Baklava+Patisserie,+Jl.+Cipinang+Jaya+Raya+No.74,+Jakarta+Timur&output=embed",
  rating "4,7", ratingCount "935".
- `hours`: `{ day: 0..6, open: "11.00", close: "21.00" }[]` from raw.json (Fri 13.00) plus the
  display line "Senin–Kamis & Sabtu–Minggu 11.00–21.00 · Jumat 13.00–21.00 · buka setiap hari".
- `hero`, `etalase`, `kunafe`, `drinks`, `sweetness`, `boxes`, `praise`, `visit`, `contact`:
  each heading, lead and list as `Item`s, per the PRD table.
- `pieces`: six `{ id, nameTr, descId, note?, favourite?, mockup: true }` where `id` is one of
  `fistikli | havuc | fistikSarma | cevizSarma | bulbul | cikolata`, shared by the Etalase grid,
  the sweetness scale, the box illustrations and the hero tags.
- `praise`: four `{ topic, text }`, paraphrased, never quoted, no names.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | Etalase panel, Kunafe block, Oleh-oleh frame, Kata mereka list | starter | section-level only, four uses |
| Container | all | starter | `--container` 1200px |
| SmoothScroll | layout | starter | Lenis defaults |
| MockupBanner | layout | starter, restyled | Indonesian copy; `syrup` ground, `room` text |
| WordmarkLockup | Hero, Footer | new | "MARDIN" in Antonio 700 + syrup bar under the M + tracked "BAKLAVA PATISSERIE". Typeset, not a copy of the logo file |
| TodayHours | Hero, Kunjungi | new, client | Today's hours in Asia/Jakarta via `Intl`; static fallback = the full hours line; highlights today's row in the hours list |
| Button | everywhere | new | `primary`: pistachio fill, room text, 2px room border; `secondary`: transparent, 2px current-colour border. Min height 48px. On the pistachio band, primary inverts to room fill + filo text |
| HeroCounter | Hero | new | `<figure>` with owner-2 photo, room-colour veil, three name tags (≥1024px, `aria-hidden`), `<figcaption>` visible below 1024px and `sr-only` above. Runs the signature moment in CSS |
| Piece | Etalase, Sweetness, Boxes | new | One SVG component, `kind` prop for the six pieces. Flat, top-down, palette colours only, `role="img"` + Indonesian `aria-label` |
| KunafePan | Kunafe | new | SVG, top-down: round kunafe in a pale metal dish (filo fill, 1.5px room outline, as described in brief.md), syrup-gold strands, pistachio mound, small syrup jug beside it |
| TeaGlass | Teman minum teh | new | SVG line drawing (syrup strokes, 1.5px) of the tulip glass in its lidded holder on a saucer |
| BoxArt | Oleh-oleh | new | Box outline (room 1.5px) holding `Piece`s: 2×3, 3×4, and a round 1 kg tray |
| SweetScale | Seberapa manis? | new | Horizontal scale ≥1024px, vertical below; three stops with a `Piece` and label each |
| PlatterRule | Teh→Manis divider, above footer | new | Ornament row from the embossed platter (short round-ended bars + dots), 12px tall, syrup, used twice max. [MOCKUP] |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Mardin Baklava Patisserie">`, 4:5 desktop / 4:3 phone |

## React Bits (max 2)
None. Zero is right here.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | — | The signature moment is the counter lights coming on over the real platter photo; a second effect would compete with it. Considered and rejected: Split Text on "MARDIN" (the wordmark should stand still like the sign on the brick wall, and it would fight the hero moment), Count Up on 4,7 (counting up a rating is a gimmick), Shiny Text / Glare Hover (gold shimmer is the "luxury Turkish" cliché the brief avoids, and they animate background-position, outside motion-rules rule 6), Circular Text (decorative loop with no job). | 0 KB | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero photo (signature) | load, CSS keyframes, `animation-fill-mode: both`, delay 0.1s | `transform: scale(1.04)` → `scale(1)` | 1.2s | `cubic-bezier(0.16, 1, 0.3, 1)` | final state, no motion |
| Hero veil (signature) | load, CSS keyframes, delay 0.1s | `opacity: 0.7` → `0` (room-colour layer over the photo: the counter light comes on) | 1.0s | `cubic-bezier(0.22, 1, 0.36, 1)` | veil at opacity 0, no motion |
| Hero name tags ×3 (signature, ≥1024px only) | load, CSS keyframes, delays 0.70 / 0.82 / 0.94s (left to right) | `opacity 0→1`, `translateY(-8px)→0` | 0.4s | `cubic-bezier(0.22, 1, 0.36, 1)` | visible, no motion |
| Etalase counter panel | ScrollTrigger `top 85%`, once (Reveal) | opacity, y 20px | 0.7s | `power2.out` | final state |
| Kunafe block | same | opacity, y 20px | 0.7s | `power2.out` | final state |
| Oleh-oleh frame | same | opacity, y 20px | 0.7s | `power2.out` | final state |
| Kata mereka list | same | opacity, y 20px | 0.7s | `power2.out` | final state |
| Buttons | hover / press, CSS | hover `translateY(-1px)` + `::after` overlay opacity 0→0.12; press `scale(0.98)` | 150ms | ease-out | no transform; overlay change instant |

The hero runs in CSS, not GSAP, so it starts at first paint and never waits for hydration;
text in the hero is never animated. Under `prefers-reduced-motion` the hero classes get
`animation: none` and the veil sits at `opacity: 0`. Nothing else animates. No loops.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`:
  Antonio (variable, `subsets: ["latin", "latin-ext"]`) and Alegreya (variable + italic,
  `subsets: ["latin", "latin-ext"]`). latin-ext is required for ı, ç, ü, İ in the Turkish names.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images: copy owner-1/2/3 into `public/photos/`; make 800px-wide copies with `sips -Z 800`
  and serve `srcset` 800w/1600w with `sizes`. Hero image: no lazy, `fetchPriority="high"`.
  Everything else `loading="lazy"`, including the map iframe. Never ship photo-*.jpg.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop-specific:
- Allowed text pairs only (design brief §3). Never filo text on `kunafe`; never syrup or
  pistachio text on kraft.
- Focus ring: 2px `syrup` outline, 3px offset, on dark grounds; 2px `room` on kraft, kunafe and pistachio.
- Alt text in Indonesian. owner-2: "Baklava pistachio, baklava cokelat dan sepotong kunafe di
  atas nampan emas berukir". owner-3: "Nampan tembaga berisi baklava gulung kenari".
  owner-1: "Rak tali dengan tas kraft Mardin dan papan kapur Kunafe di dalam toko".
- Hero tags are `aria-hidden`; the figcaption carries the names for screen readers.
- Turkish names in `<span lang="tr">` so `text-transform: uppercase` gives İ / I correctly.

## SEO / meta
Title "Mardin Baklava Patisserie · Baklava & Kunafe Turki di Jatinegara". Description from
`content.ts`. `<html lang="id">`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4–5. Add `.t-label` (Antonio 600, uppercase, `--step-small`,
tracking 0.12em) for labels and tags. Desktop grid: 12 columns, 24px gap, from 1024px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
