# TRD: Indokopi mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (extend the starter's `Item`):
- `shop`: name, type, address, phone `0815-1124-3389`, `phoneIntl` `+6281511243389`,
  `whatsapp` `https://wa.me/6281511243389` (mockup: true), `mapsUrl` = raw.json `googleMapsUri`,
  `mapEmbed` = `https://www.google.com/maps?q=Indokopi%2C%20Jl.%20Jatinegara%20Timur%20II%20No.4b%2C%20Rawa%20Bunga%2C%20Jatinegara%2C%20Jakarta%20Timur&output=embed`,
  `rating` `4,9`, `ratingCount` `430` (listing).
- `hero`: zoneLabel "KAWASAN WAJIB NGOPI", tagline "Coffee · Work · Thrift", line (mockup).
- `todayHours`: per weekday text (Asia/Jakarta): Senin–Kamis "09.00–03.00";
  Jumat "Buka 09.00, lanjut 24 jam sampai Minggu"; Sabtu, Minggu "Buka 24 jam".
  Fallback (server render / JS off): label "JAM BUKA", value "Sen–Kam 09.00–03.00 · Jum–Min nonstop".
- `featured`: 4 products `{ name, price?, note?, art: "caramel" | "matcha" | "kopisusu" | "indomie", mockup }`.
- `menu`: 3 groups (Kopi, Non-kopi, Makanan) of `{ name, price?, mockup }`.
- `promos`: 6 `{ name, detail, price?, picto, variant: "yellow" | "night", mockup: true }`
  (names are facts; the item is flagged because detail and price are [MOCKUP]).
- `pillars`: 3 `{ word: "Coffee" | "Work" | "Thrift", text, picto, mockup? }`.
- `praise`: 3 paraphrased themes (never quoted, never named).
- `week`: 7 rows `{ day, text, open: [startHour, endHour][] }` from raw.json periods:
  Senin [[9,24]]; Selasa, Rabu, Kamis, Jumat [[0,3],[9,24]]; Sabtu [[0,24]]; Minggu [[0,24]].
  Texts: Senin–Kamis "09.00–03.00", Jumat "Buka 09.00, lalu nonstop", Sabtu "24 jam",
  Minggu "24 jam, tutup 24.00".
- `contact`: instagram placeholder (mockup), closing line (mockup).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Indokopi. Beberapa detail masih contoh sampai dikonfirmasi pemilik." |
| SmoothScroll | global | starter | defaults |
| Container | all | starter | |
| Reveal | Menu, Promo, CWT, Kata mereka, Kunjungi, Hubungi | starter | section-level only, once each |
| Plate | everywhere signs appear | new | Rounded sign plate with inset border. Variants: `yellow` (rambu ground, aspal border/text), `white` (hours plate), `blue` (petunjuk ground, dinding border/text), `night` (aspal ground, rambu border/text), `struck` (yellow + diagonal aspal bar). Border via two inset box-shadows (static). `as` prop so h2 can be a plate |
| HeroSign | Hero | new, client | Yellow plate + hours plate inside `.sign-group`; owns the signature timeline (dim overlay + beam) |
| TodayHours | Hero | new, client | Picks today's line by Asia/Jakarta weekday after mount; server renders the fallback; `min-height` = two lines of `--step-lead` so swapping text never shifts layout |
| Art (DrinkGlass, NoodlePlate) | Menu | new | Inline SVG illustrations per design brief §6, `role="img"` + Indonesian `aria-label` |
| Picto | Promo, CWT | new | Inline SVG sign pictograms, aspal (or rambu on night plates), `aria-hidden` |
| ProductShelf | Menu | new | Grid with `column-gap: 0` so each row's ledges join into one continuous counter ledge |
| MenuBoard | Menu | new | Corrugated konter band with 3 menu columns |
| PromoBoard | Promo | new | 6 promo plates |
| Pillars | Coffee · Work · Thrift | new | 3 diamond warning signs + text |
| Praise | Kata mereka | new | rating line + 3 themes |
| WeekHours | Kunjungi | new | White hours plate: per-day text + 24 h strip (`aria-hidden`, text carries the meaning) |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Indokopi">` |
| ContactBand + EndSign | Hubungi | new | buttons + struck "Kawasan Wajib Ngopi" plate |

## React Bits (max 2)
None. The signature is a 30-line GSAP timeline that the starter already supports; every
candidate either breaks a motion rule or dilutes the one moment.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none chosen) | | | | |

Considered and declined on reactbits.dev:
- Scroll Velocity: an LED running-text band ("BUKA SAMPAI JAM 3 PAGI ●") is very Jakarta-kedai,
  but it's continuous text motion off the headline (motion-rules 7).
- Glare Hover: a glint on the promo plates would repeat the headlight sweep and weaken it (rule 2).
- Circular Text: a spinning coaster badge is decoration with no job (rule 1).
- Split Flap Text: departure-board hours belong to a station, not this street corner.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature): `.sign-dim` overlay over both plates | load, after hydration | opacity 0.4 → 0, starts at 0.45 s | 0.5 s | `power2.out` | not rendered; plates at full colour |
| Hero (signature): `.sign-beam` light | load, after hydration | beam is 60% of the group wide, left-aligned; transform `xPercent` -100 → 170 (fully across), opacity 0 → 0.6 → 0; starts at 0.15 s | 1.1 s | `power1.inOut` | not rendered |
| Section reveals (6) | scroll, `top 85%`, once | opacity 0 → 1, y 20 → 0 | 0.7 s | `power2.out` | final state, no motion |
| Buttons, links | hover / press | `::after` overlay opacity 0 → 0.12 (hover), translateY 1px (press) | 150 ms / 120 ms | ease-out (CSS) | colour cue stays, no translate |

Pre-dim without a flash: an inline script in `<head>` adds `js` to `<html>` before paint. CSS
`@media (prefers-reduced-motion: no-preference) { .js .sign-dim { opacity: .4; animation: sign-undim 0s linear 2.5s forwards } }`
so the plate paints dim (aspal on dim yellow is still 4.5:1) and can never stay dim if the
timeline fails. The timeline uses `gsap.to` from that state. With JS off, no `js` class: the
plate paints lit. The beam is `aria-hidden`, `pointer-events: none`, clipped by the group's
`overflow: hidden`.

Lenis: starter defaults (lerp 0.1, native touch).
Motion tokens (`lib/motion.ts`): keep the starter's; add `duration.undim = 0.5`,
`duration.beam = 1.1` (use instead of `hero`), `delay.beam = 0.15`, `delay.undim = 0.45`,
`ease.beam = "power1.inOut"`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The h1 is visible (dim, readable) from first paint.
- At most 2 font families via `next/font`, subset, `display: swap`: Archivo (variable, with
  `axes: ["wdth"]`) and Roboto Slab (variable).
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- One photo: `public/indokopi-depan.jpg`, pre-cropped (600×450), `width`/`height` set, eager
  only because it is in the first screen on desktop; `fetchpriority` default.
- Illustrations and pictograms are inline SVG (no image requests). Map iframe lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics:
- Focus ring 3px solid, offset 3px: `rambu` on aspal/konter/petunjuk grounds, `petunjuk` on
  dinding/batu grounds and on yellow plates.
- Hero: `<p>` "KAWASAN WAJIB NGOPI" then `<h1>` "INDOKOPI" (`aria-label="Indokopi"`).
- Photo alt: "Depan kedai Indokopi: papan batu bertuliskan INDOKOPI, Coffee . Work . Thrift, dinding bata dengan rambu Kawasan Wajib Ngopi."
- WeekHours: the visible text per day is the content; the 24 h bars are `aria-hidden`.
- End-of-zone sign: decorative SVG/plate `aria-hidden` plus visually hidden "Akhir Kawasan Wajib Ngopi".
- External links (Maps, WhatsApp) open in a new tab with `rel="noopener"` and a visually hidden "(tab baru)".
- `html lang="id"`.

## SEO / meta
Title and description from `content.ts`: title "Indokopi · Coffee · Work · Thrift · Jatinegara",
description "Kedai kopi di Rawa Bunga, Jatinegara. Buka 09.00–03.00 Senin–Kamis, nonstop di akhir pekan."
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Width axis: add `.w-wide { font-stretch: 112% }` and `.w-cond { font-stretch: 75% }` in
`globals.css`; the wordmark also gets `white-space: nowrap` and
`font-size: min(var(--step-display), 15.5cqi)`, with `container-type: inline-size` on the hero
plate's inner wrapper (write it in CSS, not as a Tailwind arbitrary value). Breakpoints: every
two-column section and the hero's 7/5 split start at `lg` (1024).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
