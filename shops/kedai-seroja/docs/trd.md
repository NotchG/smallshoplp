# TRD: Kedai Seroja mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names indicative):
- `shop`: `name: "Kedai Seroja"`, `tagline` (mockup), `address`, `addressShort`, `phoneDisplay: "(021) 4893552"`,
  `phoneHref: "tel:+62214893552"`, `directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Seroja%20Jakarta&destination_place_id=ChIJ78zOiLHtaS4RkyMKbowe3H8"`,
  `mapEmbedUrl: "https://maps.google.com/maps?q=Kedai%20Seroja%2C%20Jl.%20Sawo%20No.15%2C%20Rawamangun%2C%20Jakarta%20Timur&output=embed"`,
  `rating: { value: "4,5", count: 452 }`.
- `hours`: 7 entries `{ day: "Senin", jsDay: 1, open: "10.00", close: "21.00" }`. Selasa is `{ closed: true }`. Jumat–Minggu open at 09.00.
- `menuAndalan[]`: `{ name, note, price?, fromReviews, art, featured?, mockup }`. `price` is absent for Bakmi, which renders "harga menyusul".
- `ramesan`: `{ line, priceFrom, trays: [{ name, art, mockup }] }`. Nasi putih and Rendang are not mockup; the rest are.
- `kopi`: `{ intro, coffee[], nonCoffee[], snacks[], donuts[] }`. Each item is `{ name, price?, art?, mockup }`.
- `suasana`: `{ lead, text, facts[], photoSlots: [{ label, alt }], canvas: "Home at last." }`.
- `kata`: `{ themes: [{ title, text }], note }`.
- `kunjungi`: `{ landmarkFact, landmarkOwner (mockup) }`. `hubungi`: `{ line (mockup) }`. `meta`, `banner`.
The draft banner text and every visible string are in Bahasa Indonesia, exactly as in the PRD.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top | starter | Indonesian text from `content.banner` |
| Container, Reveal | all | starter | Reveal is section-level only |
| AwningHeader | header | new | besi bar, 56 px; mini sign (home link), nav anchors (hidden < 768 px), Telepon button. Not sticky |
| SignBadge | hero h1, header mini | new | Inline SVG rounded-trapezoid path (merah) with an inset putih outline path, `aria-hidden`. Live text on top: `<h1>` "Kedai Seroja", uppercase via CSS, two lines. `size` prop: `hero` / `mini` |
| TodayHours | hero | new, client | Build-time default: "Buka setiap hari kecuali Selasa". After mount it swaps to today's line using `Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', weekday: 'long' })`. One line, reserved height (no CLS) |
| ArchFrame | hero, suasana | new | jati border (12 px desktop, 8 px phone), top radius = half width, square bottom |
| PlateScene | hero (signature) | new | Leaf liner + plate + 5 `DishArt` pieces, each `.plate-piece`; `role="img"` + Indonesian `aria-label`; owns the signature `useGSAP` timeline |
| DishArt | hero, menu, lauk, kopi | new | One file per illustration, flat top-down SVG, `viewBox` 0 0 200 200: kecombrang, dendeng, nasiRendang, bakwan, bakmi, nasi, rendang, ayamBakar, telurBalado, tempeOrek, sayurLodeh, perkedel, sambalAti, latte, risol, lumpia, donatCokelat, donatWarna, donatGula, plus Plate and LeafLiner |
| MenuWindow | Menu andalan | new | CSS grid inside a jati frame; `gap` shows the jati background as muntins; panes putih. Desktop 3×2 with the featured pane spanning 2 cols; phone 1 col with the featured pane on top and rows below |
| RamesanCounter | Pilih lauk sendiri | new | 4×2 (desktop) / 2×4 (phone) trays: semen, radius 10 px, leaf liner; label ≤ 12 px under each; jati base strip |
| KopiShelf + MenuCard | Kopi & camilan | new | jati section ground; putih card list "Name · Rp xx" in one line |
| PhotoSlot | Suasananya | new | ArchFrame with a dashed inner outline + Courier Prime label; `role="img"` with alt "Tempat foto dari pemilik: …" |
| HomeCanvas | Suasananya | new | 140 px putih square, 1 px besi/15% border, "Home at last." in Courier Prime |
| ThemeGrid | Kata mereka | new | 2×2 with 1 px besi/22% lines (borders, not boxes) |
| HoursTable | Kunjungi kami | new, client highlight | `<table>`, ≤ 340 px wide; Selasa gets a putih-on-merah "Tutup" pill; today's row gets a bold weight + merah left bar + visually hidden "(hari ini)" after mount |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Kedai Seroja">` in a 10 px jati frame, 460 px tall desktop / 300 px phone |
| Closing + Footer | Hubungi kami | new | merah field; besi footer |

## React Bits (max 2)
None. Considered and declined:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | n/a | The signature is a custom GSAP plate sequence tied to the ramesan mechanism. A library effect would compete with it or the sign. | 0 | n/a |
| Text Type (declined) | the "Home at last." canvas | It would apply a text effect to non-headline copy, which motion-rules 7 forbids | | |
| Circular Text (declined) | badge | Decoration without a job; reads as a template sticker | | |
| Fade Content / Animated Content (declined) | sections | Duplicates the starter Reveal | | |
| Logo Loop (declined) | dish-name marquee | Motion with no job; the window already lists the dishes | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): PlateScene pieces nasi → rendang → telur balado → tempe orek → perkedel | load, delay 0.25 s after mount (hero text already painted, not animated) | opacity 0→1, y −28→0, scale 0.96→1 | 0.5 s each, stagger 0.14 s (ends ≈ 1.31 s) | power3.out | final state, no motion |
| Plate caption | timeline, at ≈ 1.15 s | opacity 0→1 | 0.3 s | power1.out | visible |
| Section reveal (Menu andalan → Hubungi kami; not hero, not footer) | ScrollTrigger `top 85%`, once | opacity 0→1, y 20→0 | 0.6 s | power2.out | visible, no motion |
| Buttons and links | hover / active | hover: `::before` overlay opacity 0→1 (besi/12% on light, putih/16% on dark); press: translateY(1px) | 180 ms / 150 ms | ease-out (CSS) | overlay switches without transition; no translate |

No-flash rule for the signature: a tiny inline `<head>` script adds `motion-ok` to `<html>` only when
`prefers-reduced-motion` is not `reduce`. CSS `.motion-ok .plate-piece, .motion-ok .plate-caption { opacity: 0 }`,
plus a fail-safe `animation: show 0s 2.5s forwards` that sets opacity 1 if GSAP never runs. The GSAP
timeline animates *to* the final state. If the starter already ships an equivalent mechanism for Reveal, reuse it.
All `useGSAP` calls are scoped to their component.

Lenis: starter defaults (lerp 0.1, native touch). Anchor links use Lenis `scrollTo` with an offset of 0.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: M PLUS Rounded 1c (400, 700, 800) and Courier Prime (400), latin subset.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- No raster images. All illustrations are inline SVG, ≤ 6 KB each, under ~80 KB total. The map iframe is lazy and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Specifics:
- Pairs and ratios are in the design brief §3. merah is never small text on semen or putih.
- Focus: 3 px outline, offset 3 px, besi on light grounds and putih on merah/jati/besi grounds.
- The h1 is real text. The sign SVG is `aria-hidden`. PlateScene and each DishArt carry `role="img"` with Indonesian labels ("Ilustrasi Nasi Goreng Kecombrang").
- The hours table uses `<th scope="row">` day names. "Tutup" is text, not colour only.
- Buttons ≥ 48 px tall; the header Telepon is ≥ 44 × 44 px.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- title: "Kedai Seroja · Masakan rumahan & kopi di Rawamangun (draf)"
- description: "Kedai Seroja di Jl. Sawo No.15, Rawamangun: masakan rumahan, lauk pilihan sendiri, dan kopi. Buka setiap hari kecuali Selasa."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values to enter (from the design brief §4–5):
- `--step-display: clamp(2.75rem, 1.6rem + 4.8vw, 6rem)`; `--step-head: clamp(1.875rem, 1.5rem + 1.6vw, 3rem)`;
  `--step-lead: clamp(1.4375rem, 1.3rem + 0.6vw, 1.75rem)`; `--step-body: clamp(1.125rem, 1.1rem + 0.15vw, 1.1875rem)`;
  `--step-small: clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)`.
- `--container: 75rem`; `--gutter: clamp(1.25rem, 0.6rem + 2.8vw, 3rem)`; `--section-y: clamp(4rem, 2.8rem + 5vw, 7rem)`.
- `@theme` colours: semen #E4DFD7, putih #FAF8F4, merah #CF3820, jati #7E4226, besi #1E1C1A, daun #2E6B3B, besi-lembut #5E5952.
- Sign text: M PLUS Rounded 1c 800, `letter-spacing: 0.02em`, line-height 1.05. Two lines via two block spans ("Kedai" / "Seroja"). The sign SVG scales with the text box (badge ≈ 260 px wide on phone, ≈ 520 px at 1440).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
