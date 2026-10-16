# TRD: Rumah Mantan Cafe & Nostalgia mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

| Export | Holds | Mockup items |
|---|---|---|
| `shop` | name, shortName, type "Kafe", address (full), phone `0812-9884-0096`, `tel:+6281298840096`, `whatsapp` (`https://wa.me/6281298840096`), `instagram`, `directionsUrl`, `mapEmbedUrl`, `hours` rows, `hoursByDay` (0 = Minggu … 6 = Sabtu), `rating { value: "4,3", count: 708 }` | `whatsapp`; `instagram` (unconfirmed, flag it too) |
| `hero` | greeting parts ("Selamat", "datang", "di"), sign words `["Kamu","Aku",{text:"Pernah",mockup:true},"Sayang"]`, sr sentence "Kamu, aku, pernah sayang.", Saturday note | "Pernah" |
| `wall` | heading, description line, body copy, signs (KOPI + "Ketika Otak Perlu Inspirasi", "Stress free zone", "10"), photo (src, alt, caption) | body copy |
| `menu` | heading, intro, priceLine, featured (latte), dishes[3], camilan[], minuman[] | priceLine, nasi goreng illustration, hot-dog name, every camilan/minuman item |
| `spaces` | intro, 3 items (title, body, illustration key) | intro wording |
| `praise` | label, 4 paraphrases with their review numbers in a code comment | none (never invented) |
| `visit` | heading, lead, address, hours rows, "Buka setiap hari" | lead |
| `contact` | heading, sub, 3 plaques (label, value, href) | WhatsApp plaque, Instagram plaque |

URLs (from raw.json, place id `ChIJ9S3rlpX0aS4RxL8wl8-ILCA`):
- `directionsUrl`: `https://www.google.com/maps/dir/?api=1&destination=Rumah+Mantan+Cafe+%26+Nostalgia&destination_place_id=ChIJ9S3rlpX0aS4RxL8wl8-ILCA`
- `mapsUrl` (fallback link): raw.json `googleMapsUri`
- `mapEmbedUrl`: `https://maps.google.com/maps?q=Rumah+Mantan+Cafe+%26+Nostalgia,+Jl.+Pinang+Raya+No.10,+Rawamangun,+Jakarta+Timur&output=embed` (no API key)
- Instagram: `https://www.instagram.com/rumahmantancafe_jkt/`

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text from PRD; `lang="id"` on `<html>` |
| SmoothScroll, Container, Reveal | all | starter | Reveal: one per section content block, never per element |
| MuralPanel | 1 | new | langit panel, 10px dongker frame; greeting line with `Ribbon`; `HouseRoof` SVG; facade `div` holding the h1; 3 `Cloud` SVGs (aria-hidden, static) |
| Ribbon | 1 | new | inline `span`, dongker, swallowtail ends via a 6-point `clip-path` polygon in globals.css |
| HouseRoof | 1 | new | inline SVG: gable (rumah fill, dongker 6px eave line), round window (dongker disc, awan cross), chimney (jago) with an awan puff; `width:100%`, fixed aspect |
| KamuAkuSign | 1 | new | the signature moment; see Motion spec. Nail + string drawn as a tiny SVG; four stripes; sr-only sentence; dots element |
| TodayHours | 1 | new, client | weekly summary in the static HTML; after hydration "Buka hari ini 11.30–21.30" from `hoursByDay`, day taken with `Intl.DateTimeFormat("en-US",{timeZone:"Asia/Jakarta",weekday:"short"})`; on Saturday the note flips to "Minggu–Jumat 11.30–21.30" |
| ActionButtons | 1, 6 | new | `<a>` buttons, min-height 52px; primary jago, secondary dongker outline |
| SignWall | 2 | new | `PlankSign` (KOPI, Stress free zone), `NumberPlate` ("10"), owner-1 `<img>` with CSS filter, caption |
| ProductTile, DishRow | 3 | new | tile = kapur ground, 1:1 (featured) or 4:3 (rows); "Ilustrasi" label under illustrated tiles |
| LatteRooster, NasiGoreng, Carbonara | 3 | new SVG | flat, palette + illustration tones only (design brief §3, §6); `role="img"` + Indonesian `aria-label` |
| SpaceTile + Stool, GlassRoom, SmokingSign | 4 | new SVG | flat, on kapur 4:3 tiles; SmokingSign is real text in Londrina on a plank |
| PraiseNote | 5 | new | awan note, jago pin dot, static rotation ±1deg |
| MapFrame | 6 | new | `<iframe loading="lazy" title="Peta lokasi Rumah Mantan Cafe & Nostalgia">`, 4:3, rumah 6px frame |
| ContactPlaque | 7 | new | whole plaque is the link; label (small caps) + value (lead) |

## React Bits (max 2)
None. Considered and declined:
| Component | Why not |
|---|---|
| Split Flap Text | closest to the signature flap, but it's an airport departure board and cycles phrases; the sign is a hand-painted plank that flips once |
| Rotating Text | loops; the joke should land once and stay |
| Circular Text | a spinning badge around the round logo would be decoration with no job |
| Stack / Flip Card | hide menu or review content behind a drag or click |
| Sticker Peel | fun for the Instagram window sticker, but the handle is unconfirmed and it's heavy for one link |

The signature moment is a small GSAP timeline in `KamuAkuSign`; no extra dependency.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero sign, word "PERNAH" (signature moment) | load, 0.3 s after hydration | `rotationX` -95 → 0 with `transformOrigin: "50% 0%"`, `autoAlpha` 0 → 1; parent stripe has `perspective: 600px` | 0.6 s | `expo.out` (`ease.outStrong`) | word printed, no dots, no movement |
| Hero sign, "• • •" placeholder (aria-hidden) | same timeline, at +0.25 s | `autoAlpha` 1 → 0 | 0.15 s | `power2.out` | never shown (`display:none` by default) |
| Hero sign, whole board | same timeline, at +0.75 s | `rotation` 1.5 → 0, `transformOrigin` at the nail (top centre) | 0.5 s | `power2.out` | static, 0deg |
| Section content blocks (2–7) | ScrollTrigger `top 85%`, once | `y` 20 → 0, `autoAlpha` 0 → 1 (starter Reveal) | 0.6 s | `power2.out` | final state |
| Buttons, contact plaques, links | hover / press (CSS) | background colour; `translateY(-1px)` on hover, 0 on press | 0.15 s | ease-out | colour change only |

Total hero sequence 0.3 + 1.05 s ≈ `duration.hero` (1.1 s after start). Nothing else moves on load:
the house, clouds, ribbon and h1 are static and visible in the first paint.

Pre-hydration (so the word doesn't flash, then vanish, then flip):
- A tiny inline script in `<head>` adds `motion` to `<html>` unless
  `matchMedia("(prefers-reduced-motion: reduce)")` matches.
- CSS: `.motion .flap-word { opacity: 0; animation: flap-failsafe 0s 2s forwards; }`,
  `@keyframes flap-failsafe { to { opacity: 1; } }`, `.flap-dots { display: none; }`,
  `.motion .flap-dots { display: block; }`.
- The GSAP timeline first sets `animation: "none"` on the word, then runs. If JS fails, the
  failsafe shows the word at 2 s. With JS off, no class, so the word is plain text.
- Screenshots run with reduced motion, so they show the final sign and no dots (no overlap flag).

Motion tokens in `lib/motion.ts`: `duration { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.1,
flap: 0.6, swing: 0.5 }`, `delay { heroStart: 0.3 }`, `ease` as starter,
`distance { reveal: 20 }`, `angle { flap: -95, swing: 1.5 }`.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the h1 text (no hero photo).
- At most 2 font families via `next/font`, subset, `display: swap`: Londrina Solid
  (weights 400, 900, latin) and Archivo (variable, latin).
- No preloaders, no video backgrounds, no WebGL.
- Images: owner-1.jpg (1600×900, ~150 KB) and owner-2.jpg (480×346, ~40 KB) copied to
  `public/`, `loading="lazy"`, explicit width/height. Never upscale owner-2 past 240 CSS px wide.
- Map iframe `loading="lazy"`.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3: never
awan on langit, never jago text on rumah or dongker), visible keyboard focus (3px outline,
dongker on light grounds, rumah on dongker, 3px offset), semantic landmarks (`header`, `main`,
`section` with `aria-labelledby`, `footer`), alt text on every image and illustration, tap
targets at least 44 px (buttons 52 px), `prefers-reduced-motion` honoured everywhere (Lenis off,
GSAP static). The striped sign reads as one sentence: a `sr-only` span "Kamu, aku, pernah
sayang." and the visual stripes `aria-hidden`. Clouds, roof, nail and plank seams are
`aria-hidden`. Reviews are paraphrases: no `<blockquote>`, no quote marks, no names.

Alt text (Indonesian):
- owner-1: "Pintu masuk Rumah Mantan di malam hari: mural Selamat Datang di Rumah Mantan bergambar rumah kuning, meja kasir dari papan kayu, dan dua kursi kawat putih."
- owner-2: "Hot dog roti hitam dengan sosis panjang, saus keju dan mayones, di atas papan kayu."

## SEO / meta
Title "Rumah Mantan Cafe & Nostalgia · Rawamangun, Jakarta Timur". Description "Kafe nongkrong
di Jl. Pinang Raya No. 10, Rawamangun. Buka setiap hari 11.30–21.30, Sabtu 14.30–21.30."
`noindex` stays on (starter default) until the owner approves. `<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Put these in `globals.css` as classes: `.wall` (plank seams), `.ribbon` (clip-path),
`.hero-pad` (hero's own padding), `.flap-*` (pre-hydration rules), `.h1-sub` margin.
Londrina Solid's glyph box is 1.18em tall, so lines set tighter than that overflow their box:
keep "RUMAH<br>MANTAN" in one element and give the next text element a top margin of at least
`calc(var(--step-display) * 0.18)`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
