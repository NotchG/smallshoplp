# TRD: Ika Kopi mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. All copy in Bahasa Indonesia.

Shape (extend the starter's `Item`; keep every value a plain string so the owner's corrections are
one-file edits):
- `shop`: name "Ika Kopi", tagline "Keharuman & Cita Rasa", locationLine (mockup), address (full,
  from listing), addressShort "Jl. Raya Ciracas No.3, Ciracas, Jakarta Timur", phone "0852-8584-4007",
  telUrl `tel:+6285285844007`, waUrl `https://wa.me/6285285844007` (mockup),
  mapsUrl `https://maps.google.com/?cid=10608466388104175179` (raw.json `googleMapsUri`, tracking
  param dropped), mapEmbedUrl `https://maps.google.com/maps?q=Ika+Kopi+Ciracas,+Jl.+Raya+Ciracas+No.3&z=16&output=embed`,
  hours `{ days: "Senin–Minggu", time: "07.00–23.00", note: "buka setiap hari" }`, todayLine "Buka hari ini 07.00–23.00".
- `hero`: lines (location line mockup; workspace line copy, mockup).
- `bean`: title "Arabica Pangalengan" plus `fields: { label, value }[]` (Asal, Cocok untuk, Catatan rasa,
  Proses, Ketinggian, Profil sangrai), caption. Facts, not mockup; the caption's wording is mockup.
- `brewNotes[]` (2, mockup copy), `coffee[]` (`name`, `price`, `note?`, all mockup), `espressoLine` (fact).
- `work[]` (6: `icon`, `title`, `line`; facts from reviews 1 and hours), `groupTable` (mockup).
- `menu[]` (3: `name`, `price`, `line`, `illustration`; names and prices mockup), `menuExtras[]` (mockup).
- `beansToGo` (whole object mockup).
- `rating` "4,8" + "dari 217 ulasan Google" (fact); `praise[]` (4 paraphrases, never mockup, never
  named); `praiseNote` "Rangkuman ulasan Google, bukan kutipan langsung."
- `visit`: parkingLine "Parkir motor mudah, parkir mobil terbatas." (reviews 1).
- `contact`: lead (mockup copy), buttons.
- `nav`: Kopi `#kopi`, Ruang kerja `#ruang-kerja`, Menu `#menu`, Lokasi `#lokasi`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Copy in Indonesian: "Draf situs untuk ditinjau pemilik Ika Kopi. Beberapa detail masih contoh sampai Anda konfirmasi." |
| Container | all | starter | `--container` 1200px |
| Reveal | 7 sections | starter | section-level only, once |
| SmoothScroll | layout | starter | defaults |
| Header | hero (≥1024 only) | new | address + 4 anchor links, `--step-small`, not sticky |
| Hero | hero | new | static; owner photo as `<img>` with width/height, `fetchPriority="high"`, `<picture>`/`srcset` 800w + 1200w; 4:3 phone crop via `object-position: 50% 86%` |
| WainscotBand | hero foot, Kerja, Hubungi | new | full-bleed `bg-accent` wrapper that renders CoveLine first |
| CoveLine | inside WainscotBand | new | 3px `lampu` line + static `box-shadow` glow, `aria-hidden` |
| ActionButtons | hero, Kunjungi, Hubungi, Bawa pulang | new | `<a>` buttons, min-height 48px, two colour variants (on paper / on green) |
| BeanCard | Kopi kami | new | `<figure>` with a `<dl>` on `bg-kartu`, `text-ink`, 3px radius, CSS `rotate(-4deg)`; separate shadow `<span>` (blurred ink ellipse) behind it |
| BrewSet | Kopi kami | new SVG | carafe + small glass on tray, "IKA KOPI" burn mark in Gloock |
| PriceList | Kopi kami, Menu extras | new | `<ul>`; name, then " · " + price inline in `muted` |
| WorkPanels | Kerja | new | `<ul>` 3 × 2 grid ≥1024, 2 cols 768–1023, single panel with row dividers on phone |
| Icon | Kerja, Menu (clock) | new | inline SVG, 24px viewBox, stroke 1.75, `currentColor`, `aria-hidden`; AC (snowflake), plug, table, chair, sparkle, clock |
| Shelf + MenuItem | Menu | new | 6px `kayu` shelf line; item = illustration + name/price/line |
| RiceBowl, IcedDrink, Croissant, BeanBag | Menu, Bawa pulang | new SVG | spec in design brief §6; each `role="img"` + Indonesian `aria-label` |
| Praise | Kata mereka | new | `<ul>` of paraphrases, no `<blockquote>`, no quote marks |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Ika Kopi">`, 4:3 desktop / 16:10 phone, 0 radius |
| Footer | bottom | new | inside the last green band |

Directory: SVG illustrations as React components in `components/illustrations/`, so they can use
the theme colours via `fill="var(--color-…)"`.

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | The shop's voice is calm and orderly, and the one moment that matters (the bean card set-down) is bespoke GSAP. | 0 | n/a |

Considered on reactbits.dev and rejected:
- Blur Text / Split Text on "Ika Kopi": the hero must paint at once (LCP), and an effect on a two-word name is decoration.
- Tilted Card on the bean card: 3D hover on a non-interactive object, and it would fight the set-down.
- Count Up on "4,8": animating a rating reads as a gimmick.
- Circular Text (echo of the round sign): a continuous spin is decoration and edges toward copying the logo lockup.
- Fade Content / Animated Content: duplicate the starter's `Reveal`.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero | none (static) | none | none | none | same |
| Bean card set-down (signature) | ScrollTrigger on the Kopi composition, `top 70%`, once | from `y: 40, rotation: -10, autoAlpha: 0` to CSS rest (`rotate(-4deg)`) | 0.9 s, starts at +0.2 s | `expo.out` | final state, no motion |
| Bean card shadow | same timeline | from `autoAlpha: 0, scale: 1.04` to rest | 0.9 s at +0.2 s | `expo.out` | visible, static |
| Tray illustration + caption | same timeline, at 0 | from `y: 20, autoAlpha: 0` | 0.6 s | `power2.out` | final state |
| Section reveal (Kopi text column, Kerja, Menu, Bawa pulang, Kata mereka, Kunjungi, Hubungi) | `<Reveal>`, `top 85%`, once | `y: 20, autoAlpha: 0` | 0.7 s | `power2.out` | final state |
| Buttons, links | hover / focus / press | colour (CSS); press `transform: scale(0.98)` | 180 ms / 120 ms | ease-out | colour change only |

Lenis: starter defaults (lerp 0.1, native touch). Anchor links jump natively.
Build the signature as one component (`BeanCardScene`) with `useGSAP({ scope })`, one timeline,
one ScrollTrigger; check `prefersReducedMotion()` first and return. `lib/motion.ts` gains
`duration.card = 0.9`, `distance.card = 40`, `rotate = { from: -10, rest: -4 }`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Gloock 400; Hanken Grotesk 400, 600.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Hero photo: resize owner-1.jpg (3072 × 4096) to 1200 × 1600 and 800 × 1067 JPEG (quality ~80)
  with `sips` into `public/img/`; target under 250 KB each. Map iframe lazy. SVGs inline, no raster products.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Focus ring: 2px `accent` with 3px offset on paper; 2px `lampu` on green.
- Hero photo alt: "Ruang Ika Kopi yang terang: lantai putih mengilap, pilar batu, kotak tanaman, dan kursi kayu berbantal hijau di depan dinding kaca."
- Bean card is real text (`<dl>`), not an image; the rotation keeps it readable. Card text is `ink` on `kartu` (6.7:1).
- CoveLine, shadow and icons `aria-hidden`; one `<h1>` ("Ika Kopi"); each section an `<section>` with an `<h2>`.
- Buttons are links with clear text ("Petunjuk Arah", "WhatsApp", "Telepon 0852-8584-4007"); external links open in a new tab with `rel="noopener"`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- `<html lang="id">`.
- Title: "Ika Kopi · Coffee shop di Jl. Raya Ciracas, Jakarta Timur".
- Description: "Coffee shop di Jl. Raya Ciracas No.3, Ciracas, Jakarta Timur. Buka setiap hari 07.00–23.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `:root`: `--container: 1200px; --gutter: 20px; --section-y: 64px;` and at ≥768 `--gutter: 40px; --section-y: 112px;`.
  Step values exactly as design brief §4; `--leading-display: 0.95; --leading-head: 1.1; --leading-body: 1.55;`
  `.t-lead` line-height 1.3, `.t-small` 1.45.
- `@theme`: `--color-paper #F5F3EE`, `--color-ink #17231B`, `--color-muted #4C5A50`, `--color-accent #23613A`,
  `--color-kartu #D89B3C`, `--color-kayu #B9824F`, `--color-lampu #F0DD6A`, `--color-daun #CFE0D3`;
  `--font-display` / `--font-body` from the `next/font` variables.
- `.mockup-banner` font-size → `var(--step-small)`.
- Hero name: `.t-display` + `white-space: nowrap`; check it stays one line from 360px up.
- The hero band is a full-bleed sibling under the wall content; the desktop photo overlaps it with a
  negative bottom margin or grid row overlap, not absolute positioning that can collide with text.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
