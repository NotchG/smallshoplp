# TRD: Happy Kopi mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. Fonts via `next/font/google`: `M_PLUS_Rounded_1c` (weights 300, 400, 700,
subset `latin`) and `Mali` (weight 400, style italic, subset `latin`), both `display: "swap"`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep it flat and typed):
- `shop`: name, slogan, address (full + short), phone display `0813-9972-8000`, `tel:+6281399728000`,
  maps URL `https://maps.google.com/?cid=9174931522804306470`, map embed query, rating `4,9`, ratingCount `28`.
- `hours`: `{ days: [1..6], open: "08.00", close: "21.00" }`, closed day 0. Labels in Indonesian
  (Senin … Minggu). Today is computed in the browser with
  `Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", weekday: "long" })` (or `getUTCDay` + 7h).
- `hero`: intro (mockup), photo `owner-3.jpg` + alt.
- `drinks[]`: `{ name, desc, price?, visual: "photo" | "coaster", coaster?: "kopi-susu" | "butterscotch" | "matcha", mockup }`.
  Kopi susu gula aren (item + price mockup), Butterscotch (price mockup), Matcha latte (price mockup),
  Latte panas (photo owner-7, no price).
- `menu.groups[]`: `{ title: "Nasi" | "Platter" | "Cemilan" | "Gorengan", art, items: [{ name, desc?, price, mockup? }] }`,
  copied from the PRD table exactly (names as on the board, prices as "Rp 35rb" or ranges "Rp 38rb–50rb").
  Toast name is `mockup: true`. Group `art` is `mockup: true` (illustration placeholders).
- `room`: intro, points[] (Wi-Fi/colokan `mockup: true`), photo `owner-5.jpg`.
- `reviews[]`: four Indonesian paraphrases from the PRD, no author, no date. Plus the note "Diringkas dari ulasan Google."
- `visit`: sign note, photo `owner-6.jpg`.
- `contact`: line (mockup), actions[]: Telepon, WhatsApp (`https://wa.me/6281399728000`, mockup),
  Petunjuk Arah, Pesan di GrabFood (`https://food.grab.com/id/id/`, mockup).
- `meta`: title "Happy Kopi · Kopi dan makan di Ruko Cleon Park, JGC", description in Indonesian.

Photos: copy `shops/happy-kopi/photos/owner-{2,3,4,5,6,7}.jpg` into `site/public/photos/`.
Never copy `photo-*.jpg`. owner-1 is not used. Optional: a 320px copy of owner-7 for its 72px
circle (`sips -Z 320`).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text in Indonesian: "Draf: contoh situs untuk Happy Kopi, belum resmi." |
| SmoothScroll | layout | starter | Lenis defaults; off for reduced motion |
| Container | all | starter | `--container` 1200px |
| Reveal | Minuman, Makan, Nyaman, Kata mereka, Kunjungi | starter | section-level only |
| Hero | hero | new | 7/5 grid from `lg`; stacked below. Holds StampMark, TodayHours chip, buttons, ArchFrame + Sun + Band |
| StampMark | hero | new | `<h1>` HAPPY KOPI in a 1.5px `kopi` box, krem fill, `nowrap`; slogan in Mali inside (not a heading) |
| TodayHours | hero, Kunjungi | new, client | hero chip text + Kunjungi today highlight; SSR fallback "Senin–Sabtu 08.00–21.00 · Minggu tutup"; exposes `isOpenDay` to Sun |
| ArchFrame | hero, Kunjungi | new | semicircle top (`border-radius: 999px 999px 16px 16px`), `overflow:hidden`, `<img>` `object-fit: cover` |
| WindowFrame | Minuman, Makan, Nyaman, map | new | radius `clamp(1.5rem, 4vw, 3rem)` |
| Sun | hero, footer | new | mustard half-disc (`width:d; height:d/2; border-radius:d d 0 0`) inside an overflow-hidden horizon box; hero one animated, footer one static |
| Band | hero | new | full-bleed `zaitun` strip, `clamp(3rem, 1.5rem + 5vw, 6rem)` tall, in front of the sun |
| DrinkRow + Coaster | Minuman | new | Coaster = inline SVG, 72px (64 phone): bamboo ring, drink disc, ice squares or foam swirl; latte panas uses an owner-7 circle crop instead |
| PriceChip | Minuman, Makan | new | terakota fill, krem `t-small` 700, radius full, inline 8–12px after the name |
| MenuGroup + PlateArt | Makan | new | PlateArt = inline SVG top-down dish on pale-green plate with terakota rim, 88px; four variants (chicken rice, mini platter, Bana-Nagih, gorengan) |
| SmileList | Nyaman, Kata mereka | new | half-disc mark (flat side up) 20×10px before each item; `zaitun` on sage, `mustard` on zaitun |
| MapEmbed | Kunjungi | new | `<iframe src="https://maps.google.com/maps?q=Happy%20Kopi%20Ruko%20Cleon%20Park%20No.37%20Jakarta%20Garden%20City&output=embed" loading="lazy" title="Peta lokasi Happy Kopi">` inside WindowFrame; no API key |
| ActionButton | hero, Hubungi | new | primary (zaitun/krem), secondary (outline), on-dark variants; min height 48px |
| Footer | end | new | static Sun on the top rule, small text |

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The signature is a GSAP transform on one shape, and the starter's Reveal covers the section fades. The wordmark is a printed cup stamp and should sit still. | 0 | n/a |

Considered and rejected: Circular Text (the slogan spinning around a disc is a continuous
loop, which breaks rule 7), Rotating Text (loops), Count Up on "4,9" (the rating is read,
not watched), Fade Content / Animated Content (duplicate the starter's Reveal), Circular
Gallery / Stack (carousels hide menu prices).

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero arch photo (signature, part 1) | load, after hydration, delay 0.1s | opacity 0→1, y 24→0 | 0.7s | power3.out | final state, no motion |
| Hero sun (signature, part 2) | load, delay 0.25s | open day: yPercent 45→0; Sunday (Asia/Jakarta): yPercent 100→70 | 1.1s | power3.out | today's final position, no motion |
| Section content (Minuman, Makan, Nyaman, Kata mereka, Kunjungi) | ScrollTrigger "top 85%", once | opacity 0→1, y 20→0 | 0.6s | power2.out | visible |
| Buttons | hover / press (CSS) | `::after` overlay opacity 0→0.12 + translateY(-1px); press scale 0.98 | 180ms | ease-out | overlay opacity only |

Pre-paint flag: an inline `<head>` script sets `document.documentElement.dataset.motion = "on"`
only if `matchMedia("(prefers-reduced-motion: no-preference)")` matches. Initial hidden states
for the arch photo and hero sun live in CSS under `[data-motion="on"]`. A CSS animation
reveals them at their final state after 1.4s in case JS never hydrates. If hydration lands
after 1.4s, skip the tween. Hero text and buttons are never hidden. If the starter's Reveal
already uses a flag like this, reuse it rather than adding a second one.
Use `useGSAP` with a scope ref in Hero; the sun's target depends on TodayHours' `isOpenDay`,
so compute the day first and then run the timeline.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  LCP candidate is owner-3 (128 KB, 960×1280): `fetchPriority="high"`, no lazy, explicit
  width/height. Every other image is `loading="lazy"` with width/height set.
- At most 2 font families via `next/font`, subset, `display: swap` (M PLUS Rounded 1c 300/400/700, Mali 400 italic).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Illustrations are inline SVG, under 3 KB each, no filters or gradients.
- Map iframe lazy-loaded, below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Specifics:
- Contrast pairs to use (design brief §3): kopi on krem 12.0, kopi on sage 5.4, krem on zaitun 6.4,
  krem on terakota 5.1. Mustard is never text. Focus: 2px kopi outline on light grounds, 2px krem on zaitun.
- One `<h1>` (the stamp, accessible name "Happy Kopi"); `<h2>` per section; group titles `<h3>`.
- Sun, band, coasters, plates and smile marks are `aria-hidden="true"`. Plate and coaster SVGs that
  stand for a product get `role="img"` + Indonesian `aria-label` (e.g. "Ilustrasi Happy Chicken Rice").
- Alt text in Indonesian, describing the owner photos (e.g. owner-4: "Empat es kopi susu di gelas
  Happy Kopi di atas nampan kayu").
- Paraphrased reviews in a `<ul>`, not `<blockquote>`, with no names.
- Hours as a `<dl>` or table; today's row marked with `aria-current="date"`.
- Price chips are part of the item's text (e.g. "Happy Chicken Rice, Rp 35rb"), not separate focusable elements.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4–5. Add two custom properties of our own in `:root`:
`--band-h: clamp(3rem, 1.5rem + 5vw, 6rem)` and `--window-r: clamp(1.5rem, 4vw, 3rem)`.
Palette goes into `@theme` as `--color-krem`, `--color-kopi`, `--color-sage`, `--color-zaitun`,
`--color-terakota` and `--color-mustard`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
