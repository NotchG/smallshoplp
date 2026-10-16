# TRD: Paras Lawas Kopi mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts are in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}`, so they get `data-mockup`.

Shape (extend the starter's `Item`):
- `shop`: name "Paras Lawas Kopi", sign "Paras Lawas", type, address
  "Jl. Swakarsa IV No. 2, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450", phone display "0851-3428-6223",
  `tel` "+6285134286223", `whatsapp` "https://wa.me/6285134286223" (mockup), `instagram`
  "https://www.instagram.com/paraslawaskopi/", `mapsUrl` "https://maps.google.com/?cid=9969786020556534008",
  `mapEmbed` "https://maps.google.com/maps?q=Paras+Lawas+Kopi,+Jl.+Swakarsa+IV+No.2,+Pondok+Kelapa,+Jakarta+Timur&output=embed".
- `hours`: `{ open: "10:30", close: "22:30", timeZone: "Asia/Jakarta", days: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"] }`. Every day is the same.
- `hero`: kicker, tagline (mockup), buttons.
- `menu`: three columns `{ title, priceRange?, items: { name, price?, variants?, mockup? }[], groups? }`.
  Prices are strings as on the board ("18rb"). The coffee names, the non-kopi line and the 9rb drink names are mockup.
- `bundles`: `{ name, prices: { label?, price, mockup? }[], illustration }[]`.
- `toeanNjonja`, `sudut` (tracklist), `praise` (4 paraphrases plus rating line), `visit`, `contact`, `notes`.
Every sentence of section copy written by the planner (tagline, intros, "Mampir Doeloe", contact intro) is `mockup: true`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text translated to Indonesian (PRD); keep `role="note"` |
| SmoothScroll, Container, Reveal | all | starter | Reveal wraps one block per section, sections 2–8 |
| Hero | 1 | new (server) | Arch photo, h1, tagline, hours row, buttons |
| ArchPhoto | 1 | new | `<img>` with `object-fit: cover`. Arch = `border-radius: 999px 999px 0 0` on a fixed-size box with a 10px cream border. `fetchpriority="high"`, no lazy |
| WallClock | 1 | new (client) | Signature moment. SVG `viewBox="0 0 96 138"`; hands as `<g>` rotated with GSAP `svgOrigin` at the face centre. Server renders 10.30 |
| OpenStatus | 1, 7 | new (client) | Computes Jakarta time with `Intl.DateTimeFormat(..., { timeZone: "Asia/Jakarta" })`. Reserves its line height on the server (no layout shift). Also marks today in the hours list |
| CheckerBand | after 1, after 5 | new | `repeating-conic-gradient` background, two rows, `aria-hidden` |
| MenuBoard | 2 | new | Chalk panel, 10px navy border; 3 columns ≥1024, 2 columns 768–1023, stacked below |
| BundlePlate | 3 | new | Cream plate, 2px navy border, inner rule via `outline: 2px solid navy; outline-offset: -8px` |
| Illustrations: `SosisSolo`, `Mi`, `Mentaiki`, `EsTeh`, `ToeanNjonjaBottle` | 3, 4 | new (inline SVG) | Design brief §6 style; `role="img"`, Indonesian `aria-label` |
| EnamelSign | 4 | new | Cream plate with 4 rivets (`aria-hidden` circles), max-width 1000px |
| Tracklist | 5 | new | `<ol>` with "A1–A4" labels |
| Praise | 6 | new | 2×2 grid ≥1024 |
| Visit | 7 | new | Address, hours `<dl>` (two `max-content` columns), Maps `<iframe loading="lazy" title="Peta lokasi Paras Lawas Kopi">` |
| Contact + Footer | 8 | new | 4 link rows (`<a>` styled as rows, min height 72px) |
| Button | all | new | Primary: amber fill, navy text, 2px navy border. Secondary: transparent, 2px cream border, cream text (on cream grounds: navy border/text). Height 52px, radius 10px |

## React Bits (max 2)
None. Browsed reactbits.dev/get-started/index (text animations, animations, components, micro, backgrounds).
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The signature moment is the shop's own wall clock, which no React Bits component does. The near fits were rejected: Circular Text (rotating-badge cliché, endless loop), Split Flap Text (a train-station object, not this shop's), Curved Loop and Scroll Velocity (marquee loops), Masked Heading (per-heading reveals break rule 3), Tear Ticket (implies a claimable coupon that doesn't exist), Stack and Card Swap (only two owner photos) | none | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero WallClock hands (signature moment) | load, after mount, delay 0.2s | `rotation` of the hour group from 315° (10.30) clockwise to the current hour angle; minute group from 180° to the current minute angle + 360°; `svgOrigin: "48 48"` | 1.4s | `expo.out` | final state, no motion (`gsap.set` to now) |
| Hero OpenStatus line | load, 0.5s after the clock starts | `opacity` 0 → 1 | 0.3s | `power2.out` | visible immediately |
| Section content (sections 2–8, one block each) | ScrollTrigger `top 85%`, once | `opacity` 0 → 1, `y` 20 → 0 (starter Reveal) | 0.7s | `power2.out` | static |
| Buttons, contact rows | hover, focus-visible | `transform: translateY(-2px)` (CSS) | 150ms | ease-out | no transform |
| Buttons, contact rows | active | `transform: scale(0.98)` (CSS) | 100ms | ease-out | none |

Hand angles: hour = (h % 12 + m / 60) × 30°, minute = m × 6°. Hour target: that angle, plus 360° if it is
below 315° (always clockwise). Minute target: m × 6° + 360° (always one turn on from 180°). Never more than that. Status copy:
- Open (10.30 ≤ now < 22.30): "Lagi buka · tutup jam 22.30"
- Before 10.30: "Lagi tutup · buka jam 10.30"
- After 22.30: "Lagi tutup · buka lagi besok 10.30"

Clock `aria-label`: "Jam dinding, sekarang pukul HH.MM WIB".
Lenis: starter defaults (lerp 0.1, native touch). No other GSAP.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Federant 400, Gantari 400/600/700.
  If `next/font/google` lacks Gantari, use Figtree with the same weights and note it in the build report.
  Federant has no substitute: stop and report if it is missing.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Images are pre-sized into `public/photos/` (`images.unoptimized` is on, so nothing resizes at runtime):
  `facade-800.jpg` and `facade-1200.jpg` from owner-2 (q≈78, `srcset`/`sizes`);
  `interior-1200.jpg` from owner-1 cropped to x 0–1200, y 180–950 px of the 1600×2133 original (q≈78). Open the
  crop and confirm no person is visible. Each file should be under about 250 KB.
- The Maps iframe is `loading="lazy"`; illustrations are inline SVG (no requests).

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs and ratios in design brief §3), visible
keyboard focus (3px outline, amber on dark grounds and navy on cream, 2px offset), semantic landmarks
(`header` hero, `main#konten`, one `section` + `h2` per section, `footer`), a skip link "Langsung ke konten",
alt text on every image in Indonesian, tap targets at least 44px (buttons 52px, contact rows 72px),
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static). The hero h1 reads
"Paras Lawas Kopi"; the visible "PARAS LAWAS" plus the kicker form it. Prices read with their item
(same element, not separate grid cells). The menu board is a set of lists (`ul`), not a table.
Alt text:
- Hero: "Tampak depan Paras Lawas: dinding bata berongga, pintu lengkung biru, dan papan nama bergambar wajah perempuan."
- Interior: "Di dalam Paras Lawas: papan kapur menu, lampu gantung, dan jam dinding tua di dinding biru."

## SEO / meta
From `content.ts`. Title: "Paras Lawas Kopi · Pondok Kelapa, Jakarta Timur". Description: "Kopi, cemilan,
makanan dan paket bundling mulai Rp 22rb di Pondok Kelapa. Buka setiap hari 10.30–22.30." `<html lang="id">`.
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Exact values are in design brief §3–5. Add `--leading-lead: 1.3`. Add helper classes without spaces where
needed (`.font-display`, `.kicker`, `.tabular`). The hero name gets `white-space: nowrap` plus
`data-check` so report.json measures it. Checker band sizes are variables (`--checker: 28px`, 40px ≥768).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
