# TRD: P8 Cafe mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

All copy is Bahasa Indonesia. Shape (extend the starter's `Item`):
- `shop`: `name: "P8 Cafe"`, `type: "Kafe & tempat brunch"`, `address: "Jl. Pinang Raya No.8, Rawamangun, Pulo Gadung, Jakarta Timur 13220"`,
  `mapsUrl` = the listing's `googleMapsUri` (raw.json), `mapEmbed: "https://www.google.com/maps?q=P8+Cafe,+Jl.+Pinang+Raya+No.8,+Rawamangun,+Jakarta+Timur&output=embed"`,
  `whatsapp: ""` and `phone: ""` (owner to send; `mockup: true` placeholders), `rating: { value: "4,7", count: 229 }`.
- `hours`: seven rows `{ day: "Senin", time: "10.00–21.00", dow: 1 }` … `{ day: "Minggu", time: "10.00–22.00", dow: 0 }`
  (Mon–Thu 21.00, Fri–Sun 22.00), plus `hoursSummary: "Buka setiap hari"`.
- `hero`: `line` [MOCKUP], `stampText: "SETIAP KOPI + 1 KUE GRATIS ·"`, photo `{ src: "/owner-1.jpg", alt }`.
- `cookies`, `features`, `menuGroups` (`{ title, note?, priceNote?, items: Item & { price?: string }[] }`),
  `space`, `events`, `takeHome`, `praise` (paraphrased themes only), `contact`. Every name, price and line from the PRD
  sections table, with `mockup: true` exactly where the PRD says [MOCKUP].
- Buttons with an empty number: `href = shop.whatsapp ? "https://wa.me/" + digits : "#hubungi"`, plus a visible
  `data-mockup` sub-label "Nomor menyusul". Never invent a number.
- Rule: plain copy that rephrases a sourced fact is not flagged; anything from a [MOCKUP] line is.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk P8 Cafe. Teks bergaris titik masih contoh sampai dikonfirmasi." |
| SmoothScroll | global | starter | unchanged |
| Container | all | starter | 1200px container |
| Reveal | sections 2–9 | starter | one per section content block |
| Button | all CTAs | new | variants `ink`, `paper` (2px ink border), `outline-light` (on ink band); min-height 56px, radius 6px, Rethink 600, optional 20px icon; CSS hover/press only |
| CounterBand | hero, menu top, visit top | new | full-bleed; `slab` prop draws the 14px `sage` counter top; `tiles` prop draws `roster-tile.svg` as background (hero only) |
| Hero | 1 | new | wall + counter band; text block, photo mat, Stamp, TodayHours, two Buttons |
| Stamp | hero | new | `<a href="#kopi-kue">`, inline SVG: circle in `roster-deep`, ring text on a `textPath` (Rethink 600 caps, small step, +0.12em), placeholder bear centre (`data-mockup`). Signature keyframes on the inner `<svg>`, hover on the `<a>`. `aria-label="Setiap kopi dapat satu kue gratis. Lihat detailnya"`; the SVG is `aria-hidden` |
| TodayHours | hero, visit | new, client | Jakarta weekday via `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`. SSR/no-JS text: "Buka setiap hari · 10.00–21.00, Jumat–Minggu sampai 22.00". After mount: "Buka hari ini · 10.00–22.00". In the visit table, adds `data-today` to the row (butter background, "hari ini" small tag inside the row) |
| Tray + Liner | 2 | new | `sage` ellipse; `paper` sheet rotated −4° with an inline SVG `<pattern>`: "P8 Cafe" `<text>` in the display font (style `fontFamily: var(--font-display)`), `ink` at 7% opacity, patternTransform rotate(−20), tile ~180×90 |
| Illustrations | 2, 3, 4, 6, 7 | new | inline SVG React components: `KueBeruang` (variant `mentega` or `kacang`), `EsKopiBolaEs`, `CupcakeRedVelvet`, `ToplesP8` (label uses the display font via `<text>`), `PendantLamp`. Style per design brief §6. Each has `role="img"` + Indonesian `aria-label` |
| MenuSection, SpaceSection, EventsSection, TakeHomeSection, PraiseSection, VisitSection, ContactSection | 3–9 | new | per design brief §7 wireframes |
| MapEmbed | 8 | new | `<iframe loading="lazy" title="Peta lokasi P8 Cafe" referrerpolicy="no-referrer-when-downgrade">`, 16:10 desktop, 4:3 phone, radius 14px, 2px ink border |

Assets the builder authors in `public/`:
- `roster-tile.svg`: one breeze block, 120×96. A `roster` rim (12px) and a recessed opening: top face #A96B43, left face #B97B50, right and bottom faces `roster-deep`, 3px `roster-deep` joint. No gradients.
- `owner-1.jpg`: copied from `shops/p8-cafe/photos/`, resized to 900px wide, ≤150KB.

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | | The one signature (the stamp) is a 0.45s CSS keyframe and a static SVG `textPath`; nothing else needs a library | 0 | n/a |

Considered and declined:
- Circular Text: it rotates forever, a decorative loop on a non-headline. The static textPath stamp does the job.
- Split Text / Blur Text on "P8 Cafe": it would compete with the stamp as a second signature, and letter bounces are the sugary-loud look the brief rules out.
- Count Up on the rating: a gimmick on a fact.
- Sticker Peel / Stack: interaction with no job.

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): stamp `.stamp-inner` | page load, CSS `@keyframes stamp-press`, delay 0.3s, `animation-fill-mode: both` | opacity 0→1, scale 1.15→1, rotate −16°→−8° | 0.45s | cubic-bezier(0.16, 1, 0.3, 1) | final state, no motion (`animation: none`, static rotate −8°) |
| Stamp ink ring (`.stamp-inner::after`) | load, delay 0.7s | opacity 0.35→0, scale 1→1.1 | 0.6s | ease-out | not rendered |
| Hero text, photo, buttons | none | visible at first paint | | | same |
| Section content, sections 2–9 (starter `Reveal`) | ScrollTrigger "top 85%", once | autoAlpha 0→1, y 20→0 | 0.6s | power2.out | final state (starter skips) |
| Button | hover / active (CSS) | translateY −2px / +1px; background colour swap (ink→roster-deep, paper→butter) | 150ms | ease-out | colour swap only |
| Stamp link `<a>` | hover / focus-visible (CSS) | rotate −8°→−3°, scale 1→1.04 | 200ms | ease-out | none |

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.
Note: the starter's global reduced-motion rule shortens durations but keeps delays, so the stamp also needs an
explicit `@media (prefers-reduced-motion: reduce) { .stamp-inner { animation: none; transform: rotate(-8deg); } .stamp-inner::after { display: none; } }`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Shop specifics:
  - The hero photo is a plain `<img>` with width/height set and `fetchpriority="high"`; it is the LCP element.
  - Illustrations are inline SVG (each under 6KB), and `roster-tile.svg` is under 2KB.
  - The map iframe is lazy and below the fold.
  - Fonts: `Bagel_Fat_One` (weight "400") and `Rethink_Sans` (variable), both `subsets: ["latin"]`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).

Shop specifics:
- `<html lang="id">`.
- One `h1` ("P8 Cafe"), an `h2` per section, `h3` for menu groups and features.
- Never put text in `paper` on `roster` or in `roster-deep` on `roster` (see design brief §3).
- Focus ring: 3px `ink`, offset 3px; `paper` on the ink band.
- Photo alt: "Es kopi bola es dalam gelas tinggi berlogo P8, dengan kendi kecil susu dan satu kue beruang di atas nampan."
- Hours as a real `<table>` with `<th scope="row">` day names.
- The `data-mockup` dotted underline is not the only cue; the banner explains it in words.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "P8 Cafe · Kopi, kue mentega, dan sudut tenang di Rawamangun".
- Description: "P8 Cafe di Jl. Pinang Raya No.8, Rawamangun, Jakarta Timur. Setiap kopi datang bersama satu kue gratis. Buka setiap hari 10.00–21.00, Jumat–Minggu sampai 22.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).

Values for this shop:
- `--container: 1200px`. `--gutter`: 20px, and 40px at ≥768. `--section-y`: 64px, and 112px at ≥768.
- Steps per design brief §4. Add `--leading-head: 1.08` and `.t-display { white-space: nowrap }`.
- Hero wall height on desktop: `--hero-wall: clamp(520px, 64svh, 620px)`. The photo height = wall height − 72px, width = height × 0.8, so the Petunjuk Arah button stays above the fold at 1280×720.
- Extra tokens in `@theme`: `--color-paper`, `--color-ink`, `--color-roster`, `--color-roster-deep`, `--color-sage`, `--color-butter`, `--font-display`, `--font-body`.
- Radii and the 12-column grid go in plain CSS classes or variables, never arbitrary values with spaces.
- `[data-mockup]` rule (dotted underline) goes in `globals.css`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
