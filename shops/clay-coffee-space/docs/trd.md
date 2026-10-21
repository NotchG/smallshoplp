# TRD: Clay Coffee Space mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No extra dependencies (no React Bits, see below).

## Content model
All copy and facts in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.

```ts
shop      { name: "Clay Coffee Space", type: "Coffee shop", address, addressShort,
            phoneDisplay: "0877-9140-1139", tel: "tel:+6287791401139",
            whatsapp: { url: "https://wa.me/6287791401139", mockup: true },
            directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Clay+Coffee+Space&destination_place_id=ChIJrzcgeE71aS4Rkf1623n4WPE",
            reviewsUrl: <googleMapsUri from raw.json>,
            mapEmbedUrl: "https://www.google.com/maps?q=Clay+Coffee+Space,+Jl.+Jatinegara+Kaum+No.17,+Pulo+Gadung,+Jakarta+Timur&output=embed",
            hours: { today: "Buka hari ini · 24 jam", week: "Buka 24 jam, Senin–Minggu" },
            rating: { value: "4,3", count: "743" } }
hero      { wordmark: "Clay", lockup: "Coffee Space", lead: Item(mockup) }
suasana   { heading, lead: Item(mockup), features: Item[4], groups: Item, photoTag: Item(mockup) }
menu      { heading, lead: Item(mockup), note: Item(mockup),
            featured: { name, price, art: "kopiSusu"|"americano"|"pisangGoreng"|"mixPlatter", mockup }[4],
            categories: { label, range?, items: { name, price?, mockup }[] }[4] }
music     { heading, lead: Item, details: { label, value: Item }[], askLink: Item(mockup) }
podcast   { heading, lead: Item, rental: Item(mockup), price: Item(mockup), photoTag: Item(mockup) }
praise    { heading, themes: Item[3] }   // paraphrased only, never names or quotes
visit     { heading, parking: Item, lateLine: Item(mockup) }
contact   { heading, lead: Item(mockup), rows: { label, detail, href, mockup? }[3] }
```
Exact strings are in the PRD's sections table. Non-kopi, sharing snacks and late-night food
show their brief ranges on the category, not per item.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Clay Coffee Space. Beberapa detail masih contoh sampai dikonfirmasi pemilik." Banner colours: bingkai on malam with a 1px kanvas bottom rule |
| SmoothScroll | layout | starter | defaults |
| Container | all | starter | `--container` 1200px |
| Reveal | Suasana → Kunjungi | starter | section-level only, one per section |
| FestoonWire | Hero (animated), Kata mereka (static) | new | Inline SVG, full-bleed. Two variants rendered, toggled by breakpoint: phone viewBox 390×90 with 9 bulbs, desktop viewBox 1440×130 with 15 bulbs. Wire is a bingkai 1.25px path of swags (quadratic curves); each bulb = 6px drop line, lampu body (5×7 ellipse), and a `.bulb-glow` circle r=18 filled with a radial gradient (lampu 0.55 → 0). `aria-hidden`. Prop `animated` adds `data-festoon="hero"` for the GSAP scope |
| ArchWindow | Hero | new | SVG arch with mullions (bingkai 1.5px, `vector-effect: non-scaling-stroke`), plus a `.arch-panes` group of 3–4 panes filled lampu at 0.22 opacity (final state). `aria-hidden` |
| Hero | Hero | new | `<h1>`: `<span class="wordmark">Clay</span> <span class="lockup">Coffee Space</span>`, uppercase by CSS so screen readers read the words. Status line with a 10px lampu dot. Two ActionButtons |
| ActionButton | Hero, Podcast, Kunjungi | new | `<a>` 48px tall, primary (lampu fill, malam text) or secondary (bingkai outline). Hover/press per motion spec. `data-mockup` when the href is WhatsApp |
| ArchFrame | Menu, Suasana, Podcast, Kunjungi | new | Wrapper with the arch radius (`9999px 9999px 8px 8px`), `aspect-ratio: 3/4` unless overridden (map) |
| ProductArch | Menu | new | ArchFrame (bingkai fill) + illustration + name and price under it (12px). `data-mockup` on the figure |
| Illustrations | Menu, Suasana, Sabtu | new | Inline SVG React components, one stroke weight (malam 1.75px on light; bingkai 1.5px on dark), palette fills only: `CupKopiSusu`, `CupAmericano`, `BoxPisangGoreng`, `BoxMixPlatter`, `CourtyardScene` (pavilion gable, umbrellas, wire, on malam), `StageScene` (platform, mic stand, amp, short wire, on rimbun). Product art has `role="img"` + Indonesian `aria-label`; scenes are `aria-hidden` |
| PhotoSlot | Suasana, Podcast | new | ArchFrame holding a scene drawing or an empty bingkai-outlined arch, with a `--step-small` caps tag under it ("Foto halaman malam dari pemilik", "Foto Podcast Box dari pemilik"), `data-mockup` |
| MenuList | Menu | new | 4 category columns (desktop) / stacked (phone); `<ul>` per category; name and price inline with a 12px gap |
| PavilionFrame | Podcast | new | 1.5px bingkai border box with a gable roof SVG on top (non-scaling stroke) and a 1px bingkai/30% rule between its two columns |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Clay Coffee Space">` in an ArchFrame (arch top, 440px desktop / 300px phone), `referrerpolicy="no-referrer-when-downgrade"` |
| ContactRows | Hubungi | new | 3 full-width links, min 56px tall, label above detail, arrow 12px after the detail; 1px malam rules between |

## React Bits (max 2)
None. The signature moment is Clay's own festoon lighting, built in GSAP; any library effect
would be a second voice.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | Considered and rejected: Light Rays (WebGL wallpaper, breaks the budget, reads as generic night glow); Shiny Text / Blur Text (would compete with the bulbs, and smear Italiana's hairlines); Curved Loop (continuous loop with no job); Circular Text (spinning "BUKA 24 JAM" badge headlines an unconfirmed claim); Count Up on 743 reviews (gimmick on a listing fact); Spotlight Card (desktop-only hover decoration) | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero bulbs `.bulb-glow` (signature moment) | load (useGSAP, scoped to the hero) | `fromTo` opacity 0→1, scale 0.85→1 (transformOrigin center) | 0.35s each, stagger 0.06s from start (≈1.2s total desktop) | `power2.out` | final state, no motion (all lit) |
| Hero `.arch-panes` | load, at 0.8s on the same timeline | opacity 0→1 | 0.6s | `power2.out` | final state |
| Sections Suasana, Menu, Sabtu, Podcast, Kata mereka, Kunjungi | scroll into view, once (starter Reveal) | opacity, y 20→0 | 0.7s | `power2.out` | final state |
| ActionButton / ContactRows | hover, focus-visible | translateY(-1px); overlay `::after` opacity 0→0.12 | 150ms | ease-out (CSS) | colour/opacity state only, no lift |
| ActionButton | press | scale 0.98 | 150ms | ease-out (CSS) | none |

Pre-paint: an inline `<script>` in `<head>` (layout.tsx) sets `document.documentElement.dataset.motion = "on"` only when `matchMedia("(prefers-reduced-motion: reduce)")` is false.
CSS: `[data-motion="on"] .bulb-glow, [data-motion="on"] .arch-panes { opacity: 0; animation: lamp-failsafe 0s linear 2.5s forwards; }` with `@keyframes lamp-failsafe { to { opacity: 1 } }`, so the lights come on even if GSAP never runs. Hero text is never hidden.
The divider wire in Kata mereka has no `data-festoon="hero"` and never animates.
Lenis: starter defaults (lerp 0.1, native touch).

`lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.7, hero: 1.2, bulb: 0.35, panes: 0.6 }`, add `stagger = { bulb: 0.06 }`; `ease` and `distance` as starter.

## Performance budget
- LCP under 2.5 s on a mid-range phone; LCP is the hero h1 text, which never animates.
- 2 font families via `next/font/google`: Italiana (400) and Jost (variable, 400–500 used), latin subset, `display: swap`.
- No photos, no preloaders, no video backgrounds, no WebGL. All art is inline SVG (keep each under ~6 KB).
- Map iframe is `loading="lazy"` and below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (checked pairs in design brief §3;
lowest text pair is kanvas on rimbun at 6.9), visible keyboard focus (2px lampu outline, 3px
offset; malam outline on the lampu field), semantic landmarks (`header` hero, `main`, `section`
with `aria-labelledby` per h2, `footer`), alt/aria-label on every illustration and placeholder,
tap targets at least 44 px (buttons 48, contact rows 56), `prefers-reduced-motion` honoured
everywhere (Lenis off, GSAP skipped, glows lit by CSS). `<html lang="id">`.

## SEO / meta
Title "Clay Coffee Space · Taman kopi di Pulo Gadung", description "Coffee shop dengan taman
terbuka di Jl. Jatinegara Kaum No.17, Pulo Gadung, Jakarta Timur. Buka 24 jam." from
`content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §3–§5. Add `.t-label` (step-small, Jost 500, uppercase, 0.14em) and
`.t-lockup` (step-small, 0.22em) to `globals.css`. Set `--leading-body: 1.6`.
Fonts: `--font-display: var(--font-italiana), serif; --font-body: var(--font-jost), sans-serif;`
in `@theme`, with the `next/font` variable classes on `<html>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
