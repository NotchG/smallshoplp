# TRD: Red Soldadu Riverside mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
Fonts: `Young_Serif` (weight "400") and `Archivo` (variable) from `next/font/google`, subset
`latin`, `display: "swap"`, exposed as CSS variables and mapped to `--font-display` / `--font-body`
in `@theme`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. All copy is in Bahasa Indonesia.

Exports (extend the starter's `Item` type where needed):
- `shop`:
  - `name: "Red Soldadu Riverside"`
  - `type: "Kedai kopi"`
  - `addressShort: "Jl. Sederhana I No.4A, Gedong, Pasar Rebo"`
  - `addressFull: "Jl. Sederhana I No.4A, RT.1/RW.6, Gedong, Kec. Pasar Rebo, Jakarta Timur 13760"`
  - `phone: "0812-1506-6612"`, `tel: "tel:+6281215066612"`
  - `whatsappUrl: "https://wa.me/6281215066612"` (`mockup: true`)
  - `mapsUrl: "https://maps.google.com/?cid=18049291249921847522"`
  - `mapEmbedUrl: "https://maps.google.com/maps?q=Red%20Soldadu%20Riverside%2C%20Jl.%20Sederhana%20I%20No.4A%2C%20Pasar%20Rebo&output=embed"` (no API key)
  - `hours: [{ days: "Senin–Minggu", time: "08.00–23.00" }]`, `hoursNote: "buka setiap hari"`, `todayLine: "Buka hari ini · 08.00–23.00"` (true every day)
- `hero`: headline lines `["Red Soldadu", "Riverside"]`; sub (`mockup: true`).
- `setting`: heading, lead, body, facts[] (with sources noted in comments).
- `featured`: 5 items `{ name, note, price, art, mockup }`. `art` is the key of the drawing component. Names are real; prices are `mockup: true`.
- `menuGroups`: `[{ title, range (mockup), items: Item[] }]` for Kopi, Mocktail & minuman dingin, Camilan, Makanan berat; `beans` (mockup).
- `dayLine`: stops `{ time, label, at (0–1), mockup }`; `workNote` (Wi-Fi, mockup).
- `praise`: 6 paraphrased `Item`s; `praiseSource: "Dirangkum dari ulasan Google · 4,5 dari 506 ulasan"`.
- `visit`: notes[]: kompleks, lane, parking, mushola.
- `contact`: line (mockup).
- `banner: "Draf mockup untuk Red Soldadu Riverside. Beberapa detail masih contoh sampai dikonfirmasi pemilik."`

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | sections 2–7 | starter | one per section content block, section-level only |
| Container | all | starter | content at `--container`; full-bleed grounds on the parent `<section>` |
| MockupBanner | top | starter | text from `content.banner`; baja ground, batu text, `--step-small` |
| SmoothScroll | global | starter | defaults |
| Hero | Hero | new, client | beam plane, `RiverBand`, deck plane; owns the signature timeline (`useGSAP` with scope) |
| RiverBand | Hero | new, server SVG | kali field, two-tone leaf canopy, 4–6 batu glint strokes in a `<g>` the hero moves; `aria-hidden`; `preserveAspectRatio="xMidYMid slice"`; height `var(--river-h)` |
| HoursDisc | Hero | new | inline 28×40 SVG table-number stand + `todayLine` text |
| ActionLink | Hero, Kunjungi, Hubungi | new | `<a>` styled as button, variants `primary` (batu fill, merbau text) and `secondary` (2 px batu outline on dark, 2 px baja outline on batu); 48 px min height; external links `rel="noopener"` |
| PavilionDrawing | Di tepi Ciliwung | new, SVG | 4:3, `role="img"`, aria-label "Ilustrasi paviliun kayu dan baja di atas Kali Ciliwung"; no text labels inside |
| ProductArt (`art/BlackAndBerries`, `BananaFritter`, `CheeseBakedPeuyeum`, `Mocktail`, `HoneyWings`, `BeanBag`) | Menu andalan | new, SVG | 200×200 viewBox, shared baseline, six tokens only, ≤12 shapes; `role="img"` + Indonesian aria-label |
| RailLedge | Menu andalan | new | 10 px merbau bar with 3 px karat top edge, under each row |
| MenuList | Menu andalan | new | 4 groups; h3 group title (lead) with range (small) directly under it |
| DayLine | Kerja atau santai | new | `<ol>`; horizontal ≥768 px (stops positioned with `left: calc(var(--at) * 100%)` via inline CSS variable), vertical below |
| PraiseList | Kata mereka | new | `<ul>`, 2 columns ≥1024 px |
| VisitMap | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Red Soldadu Riverside">`, 4:3, no border; the "Buka di Google Maps" link is always present next to it |
| SiteFooter | Hubungi kami | new | name, address, hours, "Draf mockup, belum dipublikasikan" |

## React Bits (max 2)
None. Considered and rejected:

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | | | | |
| Micro Slats (rejected) | hero background | The slats echo the timber screens, but it renders a rolling sea that loops: background motion rule 7 forbids, and the wrong water for a slow river | WebGL/canvas loop | n/a |
| Masked Heading (rejected) | hero name | A drifting mesh shows through the headline; it would compete with the signature opening and needs imagery we don't have | continuous drift | n/a |
| Curved Loop (rejected) | river band | A river-bend marquee is tempting, but it loops text, breaking rule 7 (text effects run once) and the calm | continuous loop | n/a |

The signature is a few GSAP tweens on the starter stack; no extra dependency earns its place.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): beam plane `.hero-beam` | load | y 36 → 0 (`distance.open`) | 1.1 s | expo.out | final state, no motion |
| Hero: deck plane `.hero-deck` | load, same time | y −36 → 0 | 1.1 s | expo.out | final state |
| Hero: glints group | load, same time | x −48 → 0 (`distance.glint`) | 1.4 s | power2.out | final state |
| Hero: leaf canopy group | load, same time | y −10 → 0 (`distance.canopy`) | 1.1 s | expo.out | final state |
| Sections 2–7 content (`<Reveal>`) | scroll, `top 85%`, once | autoAlpha 0 → 1, y 20 → 0 | 0.7 s | power2.out | visible, no motion |
| ActionLink | hover / press | translateY(−2px) / scale(0.98) | 150 ms | ease-out (CSS) | no transform |

Pre-offset without a flash:
1. `layout.tsx` adds an inline `<script>` in `<head>`:
   `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')`.
2. `globals.css` sets the start transforms only under `html.motion-ok` (`.hero-beam { transform: translateY(36px) }`, etc.).
3. The Hero's `useGSAP` tweens them `to` 0 (planes and band layers carry `will-change: transform` only while running).
4. Failsafe: `html.motion-ok .hero-beam, ... { animation: hero-settle 0s 2.5s forwards }`, where `@keyframes hero-settle { to { transform: none } }`, so a failed script still settles.

With JS off there is no class, so the final state paints. The river band must sit at a lower
`z-index` than both planes. Text is never animated by opacity.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible. The LCP
  element is the h1 text; there are no raster images on the page.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- All drawings are inline SVG, server-rendered, with no runtime JS. The map iframe is `loading="lazy"`
  and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Text pairs only: batu on merbau (8.37), batu on baja (9.90), baja on batu (9.90), merbau on batu
  (8.37). No text on kali, daun or karat.
- Focus: 3 px solid batu on dark grounds, 3 px solid baja on batu, `outline-offset: 3px`.
- One h1 (the name), one h2 per section, h3 for item names and menu groups. The decorative river
  band and rail are `aria-hidden`. Drawings have `role="img"` + Indonesian `aria-label`.
- Links to WhatsApp and Maps open in a new tab with a visually hidden "(tab baru)".
- `<html lang="id">`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: `Red Soldadu Riverside · Kedai kopi di tepi Ciliwung, Pasar Rebo`
- Description: `Kedai kopi di tepi Kali Ciliwung, Pasar Rebo, Jakarta Timur. Kopi, mocktail dan camilan. Buka setiap hari 08.00–23.00.`

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `:root` values exactly as design-brief §4–5, plus `--river-h: clamp(150px, 17vw, 250px)`,
  `--gutter: 20px` (40px ≥768), `--section-y: 64px` (112px ≥768).
- Set `--leading-display: 1.05` (the name wraps to two lines by design). Use `.t-lead` with line-height 1.25.
- `.t-display`, `.t-head` and `.t-lead` use `font-display`. Body, small and buttons use `font-body`.
- Replace `--color-paper` / `--color-ink` with the six tokens `merbau`, `baja`, `batu`, `kali`,
  `daun`, `karat`. Update the `html` and `.mockup-banner` rules to use them.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
