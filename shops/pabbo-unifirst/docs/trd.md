# TRD: Pabbo Unifirst mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names indicative; keep the starter's conventions):
- `site`: `lang: "id"`, title "Pabbo Unifirst · Coffee & Social Space", description (Indonesian, one line), banner text "Draf mockup untuk Pabbo Unifirst, belum situs resmi."
- `shop`: `name` "Pabbo Unifirst", `descriptor` "Coffee & Social Space", `tagline` { text: "Unite your vibes.", mockup: true }, `area` "Food Garden, Cakung · Jakarta Timur", `address` (full, from brief), `locationLabel` { text: "di Food Garden JGC", mockup: true }, `hours` "Buka 24 jam · setiap hari", `hoursRow` "Senin–Minggu · 24 jam", `priceLevel` "Harga: menengah", `rating` "4,6", `reviewCount` 328.
- `links`: `directions` `https://maps.google.com/?cid=17569859189948075139` (listing), `tel` `tel:+6282299217829`, `phoneDisplay` "0822-9921-7829", `whatsapp` { url: `https://wa.me/6282299217829`, mockup: true }, `mapEmbed` (keyless Google Maps embed for the address, e.g. `https://maps.google.com/maps?q=<encoded name + address>&output=embed`).
- `dayNight`: `siang` { lead "Siang ngopi,", body, facts ["Kursi rotan", "Meja kayu bundar", "Bantal krem"] }, `malam` { lead "malam nongkrong.", body, facts ["Panggung", "Layar proyektor", "Lampu panggung", "Disco ball"] }; bodies `mockup: true`.
- `menu.categories[]`: { id, title, priceFrom { text, mockup: true }, items[] { name, desc, illustration, mockup } }: drinks ("kopi mulai Rp 25rb": Es Kopi Susu Pabbo, Matcha Latte), food ("nasi mulai Rp 35rb": Nasi Goreng Pabbo, Rice Bowl Daging Cincang), snacks ("mulai Rp 20rb": Indomie Goreng Telur, Roti Bakar, Kentang Goreng). Snack category and items all `mockup: true`. Caption "Nama menu dan harga masih contoh."
- `music`: body, `facts` ["Panggung & speaker", "Layar proyektor", "Lampu panggung & disco ball"], `mockupItems` ["Malam musik akustik & bossa nova, jadwal menyusul", "Hall bisa dipesan untuk acara & kumpul rombongan"], `screen` { kicker "Malam musik · akustik & bossa nova" (mockup), title "BOSSA NOVA" }.
- `reviews[]`: { theme, text, sources } × 4, paraphrased in reported speech, no names (see PRD).
- Every item's Indonesian copy is drafted by the builder from the PRD within the brief's tone ("kamu", short lines); invented copy is `mockup: true`.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Indonesian text from `site.banner` |
| Container, `.section`, `.t-*` | all | starter | all sizes via `--step-*` |
| Reveal | sections 2–7 | starter | section-level only, never inside the hero |
| CeilingFrames | Hero, Malam panel, Hubungi | new | SVG, `viewBox="0 0 100 100"`, `preserveAspectRatio="none"`, `vector-effect="non-scaling-stroke"`, 2px `garis`; props: `count`, `stepX`, `stepY`, `animated`, `fragment` (corner only). Geometry per design brief §7 (3 frames below 768px, 4 from 768px); two SVGs toggled by CSS if % insets can't serve both. `aria-hidden` |
| Hero | Hero | new | top row (P badge; anchor nav: "Menu" on phone, Menu · Musik & acara · Lokasi from 768px), frames, name `h1`, descriptor, tagline, area line, HoursBadge, two ActionButtons; stacked below 1200px, two columns (name cols 1–8) from 1200px; owns the signature timeline |
| PBadge | Hero, Hubungi footer | new | red circle with "P" in Saira 800; stand-in for the real logo, `data-mockup` |
| HoursBadge | Hero | new | pill, 1px garis border, red dot (`data-frame-dot`) + "BUKA 24 JAM · SETIAP HARI" |
| ActionButton | Hero, Musik, Kunjungi, Hubungi | new | `<a>` styled; variants `primary` (pabbo bg, garis text), `outline` (2px current colour); ≥48px tall; hover overlay via `::after` opacity |
| DayNight | 2 | new | full-bleed grid, split visible h2 halves `aria-hidden` + sr-only full h2; rattan weave via `repeating-linear-gradient` background (static) |
| MenuSection, MenuItem, SnackBand | 3 | new | 4-up grid ≥1024px, row list on phone; category label + price on one line |
| FoodIllustration set | 3 | new | 7 inline SVG components: `EsKopiSusu`, `MatchaLatte`, `NasiGoreng`, `RiceBowl`, `IndomieTelur`, `RotiBakar`, `KentangGoreng`; `role="img"`, Indonesian `aria-label`; flat fills from design brief §3 |
| MusicSection, StageScreen | 4 | new | 16:9 screen card; booth ribs band (static background) |
| Reviews | 5 | new | 2×2 grid ≥1024px, hairline dividers |
| Visit, MapEmbed | 6 | new | `<iframe loading="lazy" title="Peta lokasi Pabbo Unifirst">`, fixed aspect box so it can't shift layout |
| Contact (+ footer) | 7 | new | static CeilingFrames ×2 around content |

## React Bits (max 2)
**None.** The signature moment is the hall's own ceiling lines, built with GSAP; any React Bits
effect would be a second focal point or a gimmick.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| — (none chosen) | — | Considered and rejected: Split Flap Text for "Buka 24 jam" (departure-board cliché, competes with the hero), Circular Text around the P badge (endless loop, decoration only), Rotating Text for siang/malam (the split heading does this statically), Count Up for 4,6 (gimmick on a real rating) | 0 | — |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): ceiling frames 0→3 (diagonals with frame 0) | load, 0.15s after mount | opacity 0 → 1 | 0.18s each, 0.11s stagger (ends ≈ 0.7s) | expo.out | final state, no motion |
| Hero: red dot in HoursBadge | end of frames | opacity 0 → 1 | 0.2s | expo.out | on, no motion |
| Sections 2–7 | ScrollTrigger, top 85%, once | opacity 0 → 1, y 20 → 0 | 0.6s | expo.out | final state, no motion |
| ActionButton hover | hover / focus-visible | `::after` overlay opacity 0 → 0.12 | 0.16s CSS | ease-out | instant |
| ActionButton press | active | scale 1 → 0.98 | 0.12s CSS | ease-out | none |

Hero lines: initial `opacity: 0` only under `html.js` (class set by a tiny inline head script)
and `@media (prefers-reduced-motion: no-preference)`; a CSS failsafe animation sets them to 1 at
1.5s if GSAP never runs. Hero text is never animated or hidden. No flicker, glow, blur or stroke
animation. `useGSAP` with a scope ref in each animated component.

Lenis: starter defaults (lerp 0.1, native touch). Off under reduced motion.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible (the
  hero name is the LCP element and is static).
- One font family (Saira, variable `wght` + `wdth`) via `next/font`, subset latin, `display: swap`.
- No raster images at all: illustrations and frames are inline SVG. Map iframe lazy-loaded.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs listed in design brief §3;
`pabbo` red is never used for text on `plafon`), visible keyboard focus (2px `garis` outline on
dark, 2px `plafon` on light, 3px offset), semantic landmarks (`header`, `main`, `section`
with `aria-labelledby`, `footer`), one `h1` (the name), alt text / `aria-label` on every
illustration and the badge, tap targets at least 44 px (buttons 48), `prefers-reduced-motion`
honoured everywhere (Lenis off, GSAP static). The split h2 in section 2 is read once.
`<html lang="id">`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values: design brief §4 and §5. Width axis per role via `font-variation-settings: "wdth" N` in
the `.t-*` classes (display 125, head 112, others 100).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
