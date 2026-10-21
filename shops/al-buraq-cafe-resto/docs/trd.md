# TRD: Al Buraq Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item = { text; mockup? }`):
- `shop`: `name` "Al Buraq Cafe & Resto", `type` "Kafe & resto", `address` (full, listing),
  `addressShort` "Jl. Raya Condet No.37, Kramat Jati", `phoneDisplay` "0856-7855-946",
  `phoneHref` "tel:+628567855946", `mapsUrl` "https://maps.google.com/?cid=9067756861493324694",
  `mapEmbed` "https://www.google.com/maps?q=Al%20Buraq%20Cafe%20%26%20Resto%2C%20Jl.%20Raya%20Condet%20No.37%2C%20Jakarta%20Timur&output=embed",
  `hours` `[{ days: "Senin–Minggu", time: "15.00–24.00" }]`, `hoursToday` "Buka hari ini 15.00–24.00",
  `rating` "4,3 dari 465 ulasan di Google".
- `whatsapp`: `{ number: "628567855946", mockup: true }` plus `waLink(text)` that builds
  `https://wa.me/628567855946?text=<encoded>`. Two prefilled texts, both `mockup: true`:
  hero/closing "Halo Al Buraq, saya mau tanya meja untuk malam ini." and group
  "Halo Al Buraq, saya mau pesan meja untuk rombongan."
- `hero`, `suasana` (lead + `facts: Item[]`), `menu` (`intro`, `dishes: Dish[]`, `groups: MenuGroup[]`,
  `priceNote`, `shisha: { text, show: false }`), `group`, `praise: Item[]`, `visit`, `close`.
- `Dish = { id: "platter" | "flatbread" | "tea"; label: Item; alt: string }`; labels are `mockup: true`
  (the dish is real, from photos; the name is ours).
- `MenuGroup = { name: string; price: Item; items: Item[] }`; every price `mockup: true`;
  "Salted Egg Chicken" is the only item without `mockup`.
- `banner`: Indonesian text from the PRD. Update `MockupBanner` to take the text from content.
- `metadata`: title "Al Buraq Cafe & Resto · Kafe & resto di Jalan Raya Condet", description
  "Kafe dan resto bernuansa Timur Tengah di Jl. Raya Condet No.37, Kramat Jati, Jakarta Timur. Buka setiap hari 15.00–24.00."

`layout.tsx`: `<html lang="id">`; skip link "Langsung ke konten" to `#konten`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text from `content.ts` |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | `--container` 1200px |
| Reveal | Suasana, Menu andalan, Datang ramai-ramai | starter | section-level only; no reveal on the last three sections |
| ButtonLink | hero, group, visit | new | `primary` (velvet fill, linen text) / `secondary` (velvet 2px outline) / `onDark` (plaster fill, velvet text); min-height 48px; Readex 500 `--step-body` |
| Hero | hero | new | 12-col grid on ≥1024px; text cols 1–7, lantern cols 9–11 |
| Lantern | hero | new, client | inline SVG lantern + light layer; owns the signature timeline (`useGSAP` with scope) |
| LanternLight | hero | new | inline SVG of ~48 dapples (8-point stars, diamonds, small pointed arches) in the four glass tints at 0.22–0.38 alpha; static `filter: blur(1px)`; `aria-hidden` |
| ArchFrame | Suasana, Kunjungi kami | new | CSS arch: `border-radius: 9999px 9999px 0 0` on a fixed-aspect box, `overflow: hidden`; no clip-path polygons |
| NicheScene | Suasana | new | SVG inside ArchFrame: niche fill, black iron wall sconce with amber glow pane, back of a red velvet sofa across the bottom |
| MenuTable | Menu andalan | new | linen rounded table (radius 16px) holding DishPlatter, DishFlatbread, DishTea; labels are HTML text placed under each dish (not SVG text) |
| DishPlatter / DishFlatbread / DishTea | Menu andalan | new | flat top-down SVGs, `role="img"` + Indonesian `aria-label` |
| MenuList | Menu andalan | new | three groups; group name + price on one line; items as a plain `<ul>` |
| LongTable | Datang ramai-ramai | new | wide SVG (viewBox 1200×220): grey cloth strip with linen border, 3 foil rice trays, 2 iced-tea jugs, glasses; `preserveAspectRatio="xMidYMid slice"` crops on phone; two HTML labels |
| PraiseList | Kata mereka | new | `<ul>` of paraphrases, hairline separators, no quote marks |
| VisitMap | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Al Buraq Cafe & Resto">` inside ArchFrame, niche background behind it |
| CloseActions | Hubungi kami | new | three full-width action rows, 56px tall, hairlines between; the detail (number, street) follows its label with a 16px gap, only the arrow sits at the row's end; then footer line |

## React Bits (max 2)
None. The one moment this site needs, the lantern lighting up and throwing its light on the
plaster, is a bespoke SVG drawn from the shop's own lanterns, done with the GSAP already in the
starter. I looked through the catalogue: the text effects (Split Text, Blur Text, Shiny Text) would
perform the name rather than show the shop; Light Rays and similar backgrounds need WebGL and
throw beams, while the photos show patterned dapples from pierced glass; the galleries and
carousels need photos, and this site has none it may use. Adding any of them would be
decoration on top of the signature moment.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): lantern panes, 4 tiers bottom→top (base diamonds, main pointed-arch panes, upper band, crown triangles) | load, delay 0.2 s | each tier's lit overlay `opacity` 0→1 over the always-visible unlit pane (pane colour at 30% over the ink frame) | 0.35 s per tier, tier stagger 0.15 s (done ≈ 1.0 s) | `power2.out` | final state, no motion |
| Hero: LanternLight layer | load, starts 0.45 s | `opacity` 0→1, `scale` 0.94→1 from the lantern's centre (`transformOrigin` set in px from the SVG) | 0.9 s (done ≈ 1.35 s) | `expo.out` | final state, no motion |
| Suasana block (NicheScene + facts) | scroll, `top 85%`, once | `autoAlpha`, `y` 20→0 | 0.7 s | `power2.out` | visible, no motion |
| Menu andalan: MenuTable figure | scroll, once | `autoAlpha`, `y` 20→0 | 0.7 s | `power2.out` | visible, no motion |
| Datang ramai-ramai: LongTable strip | scroll, once | `autoAlpha`, `y` 20→0 | 0.7 s | `power2.out` | visible, no motion |
| Buttons and action rows | hover / focus / press | CSS `background-color`, `color`, `text-decoration-color`; press `transform: translateY(1px)` | 180 ms (press 150 ms) | ease-out | instant colour change (starter CSS), no translate |

Rules for this shop: use GSAP `from` tweens only, so the markup is already the final state
(lantern lit, light visible) with JS off. Hero text, hours and buttons are never animated or
hidden. No loop, flicker, twinkle or sway after the moment. `lib/motion.ts` tokens are in the
design brief §8.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Shop specifics: Rakkas (one weight) + Readex Pro (variable, `latin` subset only); all
  illustrations inline SVG, under about 40 KB together; the map iframe is `loading="lazy"`,
  below the fold; no raster images at all.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Shop specifics: focus ring 3px solid velvet with 3px offset on light grounds, 3px linen on
  velvet and slate; `::selection` velvet background, linen text; link underline offset 0.2em.
- Illustrations: decorative ones (`LanternLight`, `NicheScene`) are `aria-hidden`; the dishes and
  `LongTable` are `role="img"` with Indonesian labels (e.g. "Ilustrasi piring gorengan: risoles,
  sambosa, saus mayones dan sambal").
- Dapples stay on the lantern side: none behind the hero line, hours or buttons above 0.2 alpha,
  none anywhere above 0.38; body text on the hero keeps at least 7:1.
- External links (maps, WhatsApp) open in a new tab with `rel="noopener"` and say so in the
  accessible name ("Petunjuk Arah, buka Google Maps").

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Fonts: `Rakkas({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-rakkas" })`
  and `Readex_Pro({ subsets: ["latin"], display: "swap", variable: "--font-readex" })`; put both
  variable classes on `<html>`; in `@theme` set `--font-display: var(--font-rakkas), Georgia, serif`
  and `--font-body: var(--font-readex), system-ui, sans-serif`.
- Two-column layouts switch on at 1024px (`lg:`); between 768 and 1023 sections stack with the
  desktop gutter.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
