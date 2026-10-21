# TRD: D'rooftop & Garage Brew House mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Exports (extend the starter's `Item` type as needed; every string is Bahasa Indonesia):
- `shop`: `name` "D'rooftop & Garage Brew House", `shortName` "D'rooftop & Garage", `type`
  "Kedai kopi", `address` "Jl. K No. 18, Cipinang Muara, Jatinegara, Jakarta Timur 13420",
  `phone` "0813-1431-7421", `tel` "tel:+6281314317421", `whatsapp`
  `{ url: "https://wa.me/6281314317421?text=Halo%20D%27rooftop%20%26%20Garage%2C%20saya%20mau%20tanya", mockup: true }`,
  `mapsUrl` "https://maps.google.com/?cid=3281679446780875282",
  `directionsUrl` "https://www.google.com/maps/dir/?api=1&destination=D%27rooftop%20%26%20Garage%20Brew%20House&destination_place_id=ChIJDxlKE4XzaS4REhIT3BHeii0",
  `embedUrl` (keyless embed: `https://www.google.com/maps?q=D%27rooftop+%26+Garage+Brew+House,+Jl.+K+No.18,+Cipinang+Muara,+Jakarta+Timur&output=embed`; check it renders the right pin),
  `hours` `[{ days: "Senin–Minggu", time: "15.00–23.30" }]`, `hoursNote` "buka setiap hari",
  `rating` `{ value: "4,8", count: 226 }`.
- `hero`: kicker, line, `today` "Buka hari ini 15.00–23.30", photo alt.
- `floors`: `garage` and `rooftop`, each `{ plate, title, body, suits (mockup) }`.
- `menu`: `slogan` "Kopi adalah inspirasi hati", `praiseLine`, `note` (mockup), `feature`
  (Kopi Susu Garage, mockup name and price), `drinks[]` (3, mockup), `nonCoffee` (mockup),
  `snacks` (mockup).
- `groups`: lead, `occasions[]` (mockup), `lesehan` (mockup), `board[]` (mockup).
- `praise`: `themes[]` (4 paraphrases, each with its review numbers in a code comment), `note`.
- `visit`: `ramadan` (mockup), `parking`, `steps[]` (steps 2–3 mockup).
- `contact`: `lead` (mockup).
Do not add an Instagram field or a musholla line (open questions).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200 |
| Reveal | §2–§7 | starter | one per section, wrapping its main block; section-level only |
| MockupBanner | top | starter | text in Indonesian: "Draf mockup untuk D'rooftop & Garage Brew House. Beberapa detail masih contoh sampai pemilik mengonfirmasi." |
| SmoothScroll | layout | starter | defaults |
| SiteNav | top of hero | new | wordmark (Bungee 16px) plus anchors; phone shows "Lokasi ↓" only; not sticky |
| Plate | many | new | non-interactive sign label: variants `garage` (tembok/malam), `rooftop` (rumput/tembok, "↑"), Bungee `--step-small`, 2px inset line |
| PlateButton | hero, §4, §6, §7 | new | `<a>` styled as a plate: variants `green` (+2px tembok border on terakota), `white`; Rubik 600, min-height 48px, icon ↗/→ |
| TodayChip | hero | new | chalkboard-style `malam` board with "Buka hari ini 15.00–23.30" |
| GarageWindow | hero | new (client) | owner-1 `<img>` (eager, `fetchpriority="high"`, width/height set), frame, housing bar, `Shutter`, pinned "ROOFTOP ↑" Plate; owns the signature timeline |
| MuralBand | under hero | new | 28px repeating SVG triangles, `aria-hidden` |
| FloorCard + GarageScene, RooftopScene | §2 | new | flat SVG scenes, `aria-hidden` (facts are in the text) |
| SpeechBubble | §3 | new | slogan, Bungee `--step-lead`, CSS tail |
| MenuItem + illustrations EsKopiAren, KopiTubruk, V60, PisangGoreng | §3 | new | 1:1 tiles, `role="img"` with Indonesian `aria-label`, `data-mockup` |
| Chalkboard | §4 | new | HTML text on a CSS board, `terakota` frame and legs |
| PraiseList | §5 | new | `<ul>` of themes with kuning dot markers |
| MapEmbed | §6 | new | `<iframe loading="lazy" title="Peta lokasi D'rooftop & Garage">`, 4:3, with a text link fallback |
| LineLeaves | §7 | new | white single-line SVG botanicals, `aria-hidden`, hidden below 768 except one sprig |
| SiteFooter | end | new | 3 columns at ≥1024 |

Photos: copy `../photos/owner-1.jpg` and `../photos/owner-2.jpg` into `site/public/photos/`.
Never copy `photo-*.jpg`. owner-1 crop: `object-fit: cover`, start at `object-position: 18% 100%`
and adjust until the chalkboard (right ~25%) and the power lines (top ~20%) are out of frame at
both 390 and 1440. owner-2: aspect 5/6, `object-position: 50% 100%`.

## React Bits (max 2)
None. The shop's character is painted walls and signs, and the custom shutter carries the one
moment. Considered and rejected:
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | — | — | 0 | — |
| Rejected: Circular Text | hours badge | continuous rotation = background motion with no job | — | — |
| Rejected: Rotating Text | hero line | loops on the headline; rules allow text effects once only | — | — |
| Rejected: Count Up | rating 4,8 | animating a rating is decoration and reads as salesy | — | — |
| Rejected: Sticker Peel | plates | novelty interaction; turns flat painted signs into stickers (neo-brutalist rut) | — | — |
| Rejected: Fade Content | sections | duplicates the starter `Reveal` | — | — |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero shutter (signature moment) | load, only if `<html>` has `motion-ok` | `y` 0→4px (dip), then `yPercent` 0→-101, then `visibility: hidden` | delay 0.25s; 0.12s + 1.1s | power1.out, then power2.inOut | final state, no motion: the shutter is never shown, the photo is visible |
| Section reveal (§2–§7, one each) | ScrollTrigger `top 85%`, once | `autoAlpha` 0→1, `y` 20→0 | 0.6s | power2.out | content at final state |
| PlateButton hover / press | `:hover`, `:active` (CSS) | `translateY(-2px)`, icon `translateX(3px)`; press `translateY(0)` | 180ms | ease-out | no transition (starter global rule) |

Signature details:
- `layout.tsx` `<head>`: inline script
  `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')`.
- CSS: `.shutter{display:none}` `.motion-ok .shutter{display:block; animation: shutter-failsafe 0s linear 3s forwards}`
  `@keyframes shutter-failsafe{to{visibility:hidden}}`. Shutter is `aria-hidden`, has no text, and sits inside the
  window's `overflow: hidden` box.
- Timeline in `GarageWindow` via `useGSAP` with `scope`; return early if `prefersReducedMotion()`.
- Tokens in `lib/motion.ts`: `duration = { press: 0.18, ui: 0.25, reveal: 0.6, hero: 1.1 }`,
  `ease = { out: "power2.out", shutter: "power2.inOut", dip: "power1.out", outStrong: "expo.out", inOut: "power2.inOut" }`,
  `delay = { shutter: 0.25 }`, `distance = { reveal: 20, shutterDip: 4 }`.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: `Bungee` (weight 400) and
  `Rubik` (variable), exposed as CSS variables and mapped in `@theme` to `--font-display` / `--font-body`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- owner-1 eager; owner-2 and the map iframe lazy. SVG illustrations inline, no raster illustrations.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop-specific: `<html lang="id">`. Alt text in Indonesian: owner-1 "Rooftop D'rooftop & Garage:
rumput sintetis dan deretan meja lesehan kayu di atas tikar"; owner-2 "Kopi berlapis di gelas
bening: kopi hitam di atas susu manis, dengan toples biji kopi di belakang". Focus ring colours
per design brief §3. Never put `kuning` text on `terakota` or `rumput`. Display text is real
text (`uppercase` via CSS), not images. One `h1` (the name), `h2` per section.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "D'rooftop & Garage Brew House · Kedai kopi di Cipinang Muara"; description "Kedai kopi
dengan Garage dan Rooftop di Jl. K No. 18, Cipinang Muara, Jakarta Timur. Buka setiap hari 15.00–23.30."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §4–§5. Set `--leading-display: 1.05` (the name wraps to two lines).
Add breakpoint overrides in `globals.css` for `--gutter` and `--section-y` at 768 and 1024.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
