# TRD: Madre Coffee Space mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Shop-specific setup:
- `<html lang="id" suppressHydrationWarning>`; all UI text in Bahasa Indonesia.
- `MockupBanner` text replaced with the Bahasa line in the PRD.
- Metadata title "Madre Coffee Space · Kafe keluarga di Cijantung"; description "Makan enak, kopi
  racikan, dan ruang main si kecil di Cijantung, Jakarta Timur. Buka setiap hari 08.00–22.00,
  Jumat–Sabtu sampai 23.00." `robots` noindex stays.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shapes beyond the starter's `Item`:
```ts
type Dish  = { name: string; price?: Item; desc: string; note?: string };
type Tag   = { label: string; x: number; y: number; align?: "left" | "center" | "right"; phone?: boolean };
type Photo = { src: string; alt: string; w: number; h: number; tags?: Tag[]; caption?: string };
type Hours = { day: string; dow: number; open: string; close: string }[]; // dow: 0 = Minggu
```
`x`/`y` are percentages of the cropped image (tag anchor point); `phone: false` hides the tag
below 640px. Prices are `Item`s so each can carry `mockup: true`. The WhatsApp link, the
booking line, the "Madre = ibu" line, the kids' menu items, breakfast and every price are mockup.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Bahasa text |
| SmoothScroll | layout | starter | defaults |
| Container | all | starter | `--container` 1240px |
| Reveal | sections 2–8 | starter | one block per section, never per item |
| TaggedPhoto | hero, minuman, ramah anak | new | `<figure>`: `<img>` in a fixed `aspect-ratio` box (so tag % positions hold at every width), tags as an absolutely positioned `<ul>` of chips, visually hidden `<figcaption>` listing the items. Accepts `heroTags` flag for the signature animation |
| HeroTags motion | hero | new (inside Hero) | GSAP timeline, see motion spec |
| TodayHours | hero, kunjungi | new, client | Renders the static fallback on the server; after mount computes the weekday in `Asia/Jakarta` (`Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", weekday: "long" })`) and swaps to "Buka hari ini …"; in the table it marks today's row (`aria-current="date"`) |
| MenuList | menu andalan, minuman | new | `<ul>`; name and price on one line, price inline right after the name (12px gap), description below |
| PlateCrop | menu andalan | new | round crop (`border-radius: 50%`) of `ayam-afrika.jpg`, caption within 16px |
| PhotoWithCaption | camilan, minuman (owner-5), ruang kami | new | caption sits 12–16px under the image |
| PraiseThemes | kata mereka | new | 2×2 typographic blocks, no cards, no quote marks, no names |
| HoursTable | kunjungi | new | `<table>` with `<th scope="row">` day names; narrow (max 320px) so times sit next to days |
| MapEmbed | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Madre Coffee Space" src="https://www.google.com/maps?q=Madre%20Coffee%20Space%2C%20Jl.%20Gongseng%20Raya%20No.1%2C%20Cijantung&output=embed">` |
| ActionButton | hero, kunjungi, hubungi | new | `<a>` styled as pill; variants `solid` (ink on mustard / mustard on cobalt) and `outline` |

## React Bits (max 2)
None. Zero is right for Madre.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | – | The signature (dish tags being named on the owner's own spread) is a short custom GSAP timeline that React Bits doesn't offer. Considered and rejected: **Ballpit** (WebGL; the real ball-pit photo says it better and it would hijack attention from the food), **Count Up** on the 4.7 rating (animating a rating reads as hype), **Rotating Text** in the hero lead (a text effect on non-headline copy breaks rule 7 and fights the photo). | – | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero photo (signature, part 1) | load | `scale` 1.04 → 1 (image visible from first paint, no opacity change, so LCP isn't delayed) | 1.1 s | `expo.out` | final state, no motion |
| Hero tags (signature, part 2) | load, starts at 0.35 s | `autoAlpha` 0 → 1, `y` 10 → 0, top-to-bottom order (Steak, Daging, Ayam Afrika, Cordon Bleu), stagger 0.14 s | 0.45 s each, whole sequence ≤ 1.3 s | `power2.out` | tags visible, static |
| Section blocks (`Reveal`) | scroll, `top 85%`, once | `autoAlpha` 0 → 1, `y` 20 → 0 | 0.7 s | `power2.out` | static |
| Buttons, links | hover / press | background and text colour; press `scale(0.98)` | 150 ms | CSS `ease-out` | colour change only |

Tag flash guard: an inline `<script>` in `<head>` adds `js-motion` to `<html>` only when
`prefers-reduced-motion` is not `reduce`. CSS hides hero tags only under `.js-motion`, with a
CSS fallback that shows them after 2.5 s if GSAP never runs. All other content is visible
without JS. Tags in Minuman and Ramah anak are static (they arrive with their section's Reveal).

Lenis: starter defaults (lerp 0.1, native touch).

Motion tokens for `lib/motion.ts` (additions to the starter): `duration.tag = 0.45`,
`stagger.tag = 0.14`, `delay.tags = 0.35`, `distance.tag = 10`, `scale.heroFrom = 1.04`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`:
  `Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz", "wdth"], variable: "--font-display" })`
  and `Nunito({ subsets: ["latin"], variable: "--font-body" })`. Both variable; no static weight lists.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Images are prepared once (see implementation plan step 5), served from `public/photos/`, with
  explicit `width`/`height`. Hero image `fetchPriority="high"`, everything else `loading="lazy"`.
  Total image weight under 2.5 MB; no single image over 400 KB.
- Map iframe lazy-loaded, below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every image, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics:
- Tag chips are paper on photo with ink text (16:1 against the chip). Never text directly on a photo.
- Focus ring: 3px outline, 2px offset: `--color-cobalt` on paper and mustard, `--color-mustard` on cobalt, `--color-paper` on cognac (mustard on cognac is under 3:1).
- Each tagged photo's alt describes the scene; the hidden figcaption lists the tagged items, so
  tags hidden on phones are still announced.
- Hours table uses real table markup; today's row has `aria-current="date"`.
- External links (Maps, WhatsApp) open in the same tab; the map iframe has a `title`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Shop specifics:
- Display face settings live in a `.f-display` class: `font-family: var(--font-display);
  font-variation-settings: "wdth" 85, "opsz" 96; font-weight: 800;` (h3 and dish names use weight 700).
- Desktop grid (≥1024px): 12 columns, `gap` 24px (1024–1279) / 32px (≥1280), defined once as a
  `.grid-12` class. Section layouts use column spans from the design brief §7.
- Fixed `aspect-ratio` on every tagged photo box: hero `1480 / 2400`, drinks `4 / 5`, playroom `3 / 2`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
