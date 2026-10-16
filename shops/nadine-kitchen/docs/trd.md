# TRD: Nadine Kitchen mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No new dependencies: no React Bits (see below), no form or date libraries.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions, the split is not):
- `shop`: name, descriptor ("Kue ulang tahun custom dari Duren Sawit"), phone display
  `0857-1112-5253`, `tel:+6285711125253`, `wa.me/6285711125253` (`mockup: true`), Instagram
  handle + URL, address lines, landmark, hours text, rating `5,0`, review count `257`,
  `mapsUrl` = raw.json `googleMapsUri`, map embed URL (`https://www.google.com/maps?q=Nadine+Kitchen+Duren+Sawit&output=embed`).
- `hero`: lead, buttons, photo `{ src, alt, caption, width, height }`.
- `gallery.items[]`: `{ src, alt, theme, detail, field: 'toska'|'butter'|'bubblegum'|'lilac', span: 'feature'|'single' }`, plus `gallery.cta` (`mockup: true`).
- `steps[]`: `{ title, text, note?, mockup }` (steps 1, 3's note and 4 are mockup).
- `orderCard`: labels, placeholders, message template (`mockup: true`).
- `sizes[]`: `{ name, size, price, silhouette: 'd16'|'d20'|'tier2'|'cupcake', mockup: true }`; `flavours[]` (`mockup: true`).
- `reviews`: rating line, 3 paraphrases (PRD text), source label, link.
- `visit`, `contact`, `footer`, `meta`, `banner`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top | starter | Indonesian text from PRD |
| Container, `.section`, `.t-*` | all | starter | all widths and sizes |
| Reveal | Galeri, Cara pesan, Ukuran & harga, Kata mereka, Kunjungi, Hubungi | starter | section-level only |
| `mock()` | all mockup items | starter | |
| FondantName | Hero | new | `<h1 aria-label="Nadine Kitchen">`; two `nowrap` word spans; one `aria-hidden` inline-block span per letter; colour cycles Strawberry, Laut, Grape; extrusion `text-shadow: 0 0.055em 0` in the letter's dark shade. Hosts the signature animation. |
| FondantWord | Kartu pesanan preview | new | same letter styling at `--step-head`, no load animation; `aria-hidden` |
| ArchPhoto | Hero | new | arch-topped image (`border-radius: 999px 999px 24px 24px` on the image box) on a Bubblegum card; caption under it |
| CakeCard | Galeri | new | pastel field card, 12px padding, 16px-radius photo, caption inside the card under the photo |
| ThemeCtaCard | Galeri | new | Strawberry card, white text, WhatsApp link |
| OrderSteps | Cara pesan | new | `<ol>`, number in a Corben numeral |
| OrderCard | Cara pesan | new, `'use client'` | 4 labelled inputs; scalloped Bubblegum plaque with FondantWord of name + "ke-N"; builds `https://wa.me/6285711125253?text=` + `encodeURIComponent(message)` on each change. Name max 10 chars, age max 2 digits; on phone the age goes on a second line in the plaque. |
| CakeSilhouette | Ukuran & harga | new | inline SVG, flat side view, one per size, drawn to a shared scale (see design brief §6) |
| SizeCard, FlavourChips | Ukuran & harga | new | price directly under the item name |
| ReviewSummary | Kata mereka | new | no quotation marks, no star icons |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Nadine Kitchen">`, 16:9, fixed aspect box so it can't shift layout |
| ContactBand, Footer | Hubungi, footer | new | |

## React Bits (max 2)
None.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | Considered: Split Text for the hero name. Rejected: the letter placement is a short GSAP timeline on hand-split spans we need anyway for per-letter colour, and Split Text would add a plugin path for 13 letters. Masonry, Circular Gallery, Stack and Bounce Cards were also rejected: they would replace a composed gallery with a generic effect and animate every card (motion-rules 3). Count Up on "257" would decorate a fact. | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero name letters (signature moment) | load, after `document.fonts.ready` (wait at most 600 ms) | each letter: `y` −28px → 0, `rotation` from a fixed per-letter list (−6, 4, −3, 5, −4, 3, −5, 4, −3, 6, −4, 3, −5) → 0, `opacity` 0 → 1; stagger 0.045 s in reading order | 0.5 s per letter, ≈ 1.1 s total | `back.out(1.3)` (a settle, not a bounce) | letters rendered at rest; nothing runs |
| Section reveal ×6 (Reveal) | ScrollTrigger `top 85%`, once | `y` 20 → 0, `opacity` 0 → 1 | 0.6 s | `power2.out` | final state, no motion |
| Kartu pesanan preview letter | input (new character appears) | `opacity` 0 → 1, `translateY` −6px → 0, CSS `@starting-style` | 180 ms | ease-out | instant |
| Buttons | hover / press | hover `translateY(-2px)`, press `translateY(1px)`, CSS | 150 ms | ease-out | no transform; focus ring still shows |

Nothing else animates: no hero photo entrance, no gallery card hover lift, no parallax.
CTAs, lead and photo are visible from first paint.

Pre-hydration hiding for the letters: the letters must be visible with JS off. If the starter
already has a pre-hydration motion flag, use it. Otherwise: an inline `<head>` script sets
`data-motion="ok"` on `<html>` only when `prefers-reduced-motion: no-preference`; CSS hides
`.fondant-letter` only under that flag, plus a CSS failsafe animation that sets them to
`opacity: 1` at 2 s in case GSAP never runs.

Lenis: starter defaults (lerp 0.1, native touch).

Motion tokens for `lib/motion.ts` (add to the starter's, keep its names where they overlap):
`dur.letter 0.5`, `stagger.letter 0.045`, `ease.settle 'back.out(1.3)'`, `dist.letter 28`,
`dur.reveal 0.6`, `ease.reveal 'power2.out'`, `dist.reveal 20`, `dur.press 0.15`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The hero photo is the likely LCP element: eager, `fetchpriority="high"`, explicit width and
  height, pre-cropped JPEG no wider than 1000 px.
- At most 2 font families via `next/font`, subset, `display: swap`: Corben (400, 700) and
  M PLUS Rounded 1c (500, 800), `subsets: ['latin']`.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Gallery and pickup photos lazy-loaded, pre-cropped and resized (≤ 900 px wide) with `sips`
  into `site/public/photos/`. The map iframe is lazy and sits below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3),
visible keyboard focus (3px Laut outline, 3px offset), semantic landmarks, alt text on every
image (theme and design only: no child names, no character or toy brand names), tap targets
at least 44 px, `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static).
FondantName: the `h1` carries `aria-label`, the letter spans are `aria-hidden`, so screen
readers hear "Nadine Kitchen", not 13 letters. OrderCard inputs have visible `<label>`s; the
preview is `aria-hidden`; the WhatsApp link's accessible name is "Kirim kartu pesanan lewat WhatsApp".
External links (`wa.me`, Maps, Instagram) open in a new tab with `rel="noopener"`.

## SEO / meta
Title and description from `content.ts` (PRD). `lang="id"`. `noindex` stays on (starter
default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
`--step-display` uses `cqi`: the hero name's wrapper gets `container-type: inline-size` so the
name always fits its column (design brief §4). Breakpoints: one column below 1024 px; the
two-column hero and four-column gallery from 1024 px; the gallery uses 3 columns from 768 px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
