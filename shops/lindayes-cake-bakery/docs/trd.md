# TRD: LINDAYES Cake & Bakery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions, keep them flat and typed):
- `shop`: `name` ("LINDAYES"), `nameSuffix` ("Cake & Bakery"), `tagline` ("patisserie & coffee"),
  `heroLine` (mockup), `address`, `addressShort` ("Jl. Raya Penggilingan No. 14, Cakung"),
  `phoneDisplay` ("0818-0898-9381"), `phoneTel` ("+6281808989381"),
  `whatsapp` ({ href: "https://wa.me/6281808989381", mockup: true }),
  `tokopedia` ({ href: "https://www.tokopedia.com/yescakeandbakery", mockup: true }),
  `directionsHref` ("https://www.google.com/maps/dir/?api=1&destination=LINDAYES%20Cake%20%26%20Bakery&destination_place_id=ChIJm2PPcUKLaS4RKYaCqZquOp4"),
  `mapsEmbed` ("https://maps.google.com/maps?q=LINDAYES%20Cake%20%26%20Bakery%2C%20Jl.%20Raya%20Penggilingan%20No.14%2C%20Cakung&z=16&output=embed").
- `hours`: `{ open: "06.00", close: "21.00", label: "Setiap hari 06.00–21.00", openMin: 360, closeMin: 1260, tz: "Asia/Jakarta" }`.
- `case`: 4 items `{ id, name, line, price?, priceMockup, lineMockup, illo }` in order Kue, Brownies, Roti, Kue kering.
- `drinks`: 4 names (mockup) + `drinksFrom` ("Kopi mulai Rp 18rb", mockup).
- `gifts`: 3 items `{ id, name, line, illo }` (facts), `giftsLine` (mockup), `seasons` (mockup), `snacksLine` (fact).
- `orders`: `line` (fact), `types` (3, mockup).
- `reviews`: `rating` ("4,1"), `count` (490), 4 `{ text, sources }` paraphrases, no names.
- `meta`: title "LINDAYES Cake & Bakery · patisserie & coffee di Cakung", description in Indonesian from the hero line and hours.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner (draft notice) | top | starter | text in Indonesian, e.g. "Draf mockup, belum resmi" |
| Container, `.section`, `.t-*` | all | starter | all sizes and widths from `globals.css` variables |
| Reveal | sections 2–8 | starter | section-level only, once |
| `SignHero` | Hero | new | charcoal fascia with frame, two-layer wordmark (unlit `aria-hidden` + lit real text), tagline |
| `Awning` | Hero bottom, Close top | new | full-bleed band in `awning`, scalloped lower edge as an inline SVG pattern (semicircles 28px wide phone / 36px desktop); `aria-hidden` |
| `OpenStatus` | Hero, Kunjungi | new, client | renders the static hours label; after mount prepends "Sedang buka ·" / "Sedang tutup ·" using `Intl.DateTimeFormat` in `Asia/Jakarta`; no layout shift (reserve width with `min-width` or render inline after the label) |
| `StorefrontRow` | Hero | new | owner photo (`next/image`, `unoptimized` for export) + one line + hours + two buttons |
| `ProductCase` / `CaseItem` / `TentCard` | Etalase | new | 4-column shelf on desktop, 2×2 on phone; tent card directly under each illustration |
| Illustrations (`IlloKue`, `IlloBrownies`, `IlloRoti`, `IlloToples`, `IlloToplesTower`, `IlloHamper`, `IlloGiftBag`, `IlloCoffeeSlice`, `IlloCakeBox`, `IvyTrail`) | 2–5 | new | inline SVG React components, flat, palette tokens only (see design brief §6) |
| `CoffeeCorner` | Ngopi | new | teal field, `IvyTrail` from top edge, illustration + drinks list |
| `GiftShelf` | Hampers | new | blush field, shelf line in derived wood tone, 3 items + tent cards |
| `OrderBox` | Pesan untuk acara | new | charcoal field, `IlloCakeBox` with the phone number printed on its side as real text |
| `ReviewNotes` | Kata mereka | new | rating line + 2×2 paraphrases |
| `VisitMap` | Kunjungi kami | new | `iframe` with `loading="lazy"`, `title`, fixed aspect box (4:3), link fallback below |
| `ContactClose` | Hubungi kami + footer | new | Awning band on top, buttons, footer facts |
| `Button` | all | new | `primary-light` (awning fill, glass text) on light grounds; `primary-dark` (sign fill, fascia text) on charcoal and teal; `secondary` (outline in current text colour). Min height 48px |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Glare Hover (`/animations/glare-hover`) | Etalase: wraps the illustration pane of each of the 4 case items only (not the tent card) | The section is the shop's glass cake chiller; a quick glint across the glass when you point at a cake is the case responding, and it is the one place on the page where "glass" is the material | No dependencies; one client component (~340 lines), ResizeObserver + IntersectionObserver per instance; animates `transform` and `opacity` only | Built in: skips sweeps under `prefers-reduced-motion`; render statically (no glare span at all) when reduced |

Install with `npx shadcn@latest add @react-bits/GlareHover-TS-TW` (TypeScript + Tailwind variant).
Read its source after installing and strip what isn't used: keep `mode="hover"` only (delete
`follow`, `loop`, `click`, `intro`, `interval`, the rim mask and `rimGlint`). Props: `variant="sheen"`,
`glareColor` = glass `#EEF2EF`, `glareOpacity={0.35}`, `glareAngle={-30}`, `glareSize={40}`,
`softness={0.8}`, `transitionDuration={250}`, `playOnce={false}`, `borderRadius="0"`,
`background="transparent"`, `borderColor="transparent"`. Override its `inline-grid` root with
`className="grid w-full"` so it fills the column.

No second component. Text effects, cursor effects and backgrounds were considered and rejected:
the sign switching on is the only headline effect, and it is plain CSS.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): lit wordmark layer "LINDAYES" | load, CSS `@keyframes sign-on` (no JS, so no hydration flash) | `opacity` 0 → 1 over the always-visible unlit layer; glow is a static `text-shadow` on the lit layer | 700 ms, delay 150 ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none`, lit layer at opacity 1 |
| Section reveals (sections 2–8, the whole section once) | ScrollTrigger, top 85% | `opacity` 0 → 1, `y` 20 → 0 | 600 ms | `power2.out` | final state, no motion |
| Etalase illustration glint (React Bits Glare Hover) | pointer enter / leave, focus-visible | band `transform`, `opacity` | 250 ms | its built-in cosine ease | none |
| Buttons and links | hover, press | background colour / `transform: translateY(1px)` on press | 150 ms | `ease-out` | colour change only |

Nothing else moves: no awning animation, no stagger inside sections, no parallax on the photo.
Lenis: starter defaults (lerp 0.1, native touch). Off under reduced motion.

Motion tokens for `lib/motion.ts` (use the starter's names; change values only if they differ):
reveal `y: 20`, `duration: 0.6`, `ease: "power2.out"`, `start: "top 85%"`; hover `0.15s`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the H1 text (unlit layer paints immediately); the hero photo is below it
  on phone and gets `priority` only on desktop widths via `sizes`.
- At most 2 font families via `next/font`: Young Serif (400) and Figtree (400, 500, 600), subset
  `latin`, `display: swap`.
- Owner photo: one pre-cropped JPEG `public/img/fasad-lindayes.jpg`, 700×358 from owner-1.jpg
  (crop x 372, y 112, w 700, h 358), quality ~80, under 120 KB. No other raster images.
- Illustrations are inline SVG, each under 6 KB.
- Map iframe `loading="lazy"`; nothing else third-party.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3), visible
keyboard focus (2px outline, offset 3px: teal on light grounds, blush on charcoal and teal
grounds), semantic landmarks (`header` for the hero, `main`, `section` with `aria-labelledby`,
`footer`), alt text on the photo ("Papan LINDAYES patisserie & coffee dan tenda oranye di depan
toko, Jl. Raya Penggilingan"), every illustration `role="img"` with an Indonesian `aria-label`
naming the product, decorative SVG (awning, ivy, shelf lines) `aria-hidden`. The unlit wordmark
layer is `aria-hidden`; the H1 text exists once. Tap targets at least 48px. External links
(maps, WhatsApp, Tokopedia) open in a new tab with `rel="noopener"` and say so in an
`sr-only` suffix. `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
No JSON-LD on the mockup.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4 and §5. Colours go in `@theme` as `--color-fascia`,
`--color-sign`, `--color-awning`, `--color-teal`, `--color-blush`, `--color-glass`; derived
tones (frame, unlit sign, wood, muted text) as `color-mix()` variables in `:root`, listed in §3.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
