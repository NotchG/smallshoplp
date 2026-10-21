# TRD: Toko Roti Tegal mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item`; all strings in Bahasa Indonesia):
- `shop`: `name: "Toko Roti Tegal"`, `type: "Toko roti"`,
  `address: "Jl. Matraman Raya No. 68, Kebon Manggis, Matraman, Jakarta Timur 13150"`,
  `addressShort: "Jl. Matraman Raya No. 68"`, `phone: "(021) 8580766"`, `phoneHref: "tel:+62218580766"`,
  `mapsUrl: "https://maps.google.com/?cid=458563842701889531"`,
  `mapEmbedSrc: "https://www.google.com/maps?q=Toko%20Roti%20Tegal%2C%20Jl.%20Matraman%20Raya%20No.68%2C%20Jakarta%20Timur&output=embed"`,
  `rating: { value: "4,4", count: 305 }`, `whatsapp: null` (mockup, see owner checklist).
- `hours`: seven rows `{ day: "Senin", dow: 1, periods: ["07.00–19.00"] }` … and
  `{ day: "Minggu", dow: 0, periods: ["08.00–13.00", "16.00–19.00"], note: "tutup 13.00–16.00" }`.
  The order is Senin to Minggu. `hoursSummary` (no-JS sticker text) has two lines:
  "Senin–Sabtu 07.00–19.00" / "Minggu 08.00–13.00 dan 16.00–19.00".
- `hero` (tagline mockup), `roti: RotiItem[]` (`name`, `sticker`, `variant`, `price?`, `note?`, `mockup?`),
  `kue: KueItem[]` (`name`, `variant`, `price?`, `mockup?`), `kueNote` (mockup), `pesan` (all mockup),
  `praise: Item[]` (3 paraphrases from the PRD, never verbatim, no names), `contact` (lead mockup,
  WhatsApp note mockup), `footer`, `banner`.
- Copy is exactly as in the PRD's sections table. Facts not in the PRD do not exist.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian from `content.banner`; keep one element |
| SmoothScroll | global | starter | unchanged |
| Container | all | starter | content width; full-bleed grounds go on the parent `<section>` |
| Reveal | Roti, Kue, Pesan, Kata mereka, Kunjungi, Hubungi | starter | one per section content block, never per item |
| Hero | hero | new | server component; kulit ground, crimp strip, BagPrint lockup, tagline, TodaySticker, buttons, two BaggedBun, tray lip |
| BagPrint | hero | new | `<h1>` with "Toko Roti" (block, `t-lead` italic) + "Tegal" (block, `t-display`, Besley 800); ScrollOrnament above and below; small-print line of two links |
| ScrollOrnament | hero, Kunjungi divider, Hubungi top, Kata mereka bullet | new | original symmetric orange C-scroll line art (inline SVG, `aria-hidden`), drawn fresh, not traced from customer photos; `crest`, `base`, `divider`, `mark` variants |
| TodaySticker | hero | new, client | SSR renders `hoursSummary`; on mount computes today in `Asia/Jakarta` (`Intl.DateTimeFormat("en-US",{timeZone:"Asia/Jakarta",weekday:"short"})` → dow) and swaps to "Buka hari ini" + periods joined with " dan "; runs the signature tween once, after the swap (`useGSAP` with `dependencies:[today]`, guarded by a ref) |
| Sticker | hero, Roti | new | white label (kotak, radius 6, 1px tinta/15 border, soft 0 1px 0 tinta/10 shadow), Besley italic 500 tinta, rotated −3° (alternate −2°/−4° per item); real text, not SVG |
| BaggedBun | hero, Roti | new | SVG bun (variant toppings) + film overlay + mini scroll/"Tegal" print (`aria-hidden`), with a Sticker overlapping its upper-left; `role="img"` + `aria-label` on the figure |
| RotiTray | Roti | new | kayu panel radius 24, CSS grid: phone 2 cols (featured spans 2), ≥1024 5 cols × 2 rows (featured `col-span-2 row-span-2`) |
| KueIllustration | Kue, Pesan | new | SVG variants: pastel, risoles, lemper, kueLumpur, dadarGulung, bolPandanGulung |
| GlassCase | Kue | new | frame tinta/20 radius 6; phone 2 cols × 3, ≥1024 3 cols × 2 with a shelf rule between rows; each cell = kayu tray (radius 24) + tag card 8–12px below (name, price on the same line) |
| CounterBand | Kue | new | full-bleed kayu band 56px with a 1px kotak/50 rail line 12px below its top, `aria-hidden` |
| KotakKueScene | Pesan | new | SVG composite: open white box with 4 KueIllustration, nastar jar, 2 kantong octagonal boxes with kotak lattice |
| PraiseList | Kata mereka | new | `<ul>` of 3 `t-lead` lines with ScrollOrnament `mark`; rating pill (kulit, `t-lead` "4,4" + `t-small` "dari 305 ulasan di Google") |
| HoursTable | Kunjungi | new, client | `<table>` rendered fully on the server; on mount adds `aria-current="date"`, kulit pill and a "Hari ini" `t-small` tag 8px after the time on today's row; day column fixed 7.5rem |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Toko Roti Tegal" referrerPolicy="no-referrer-when-downgrade">`, aspect 4/3 (≥1024) / 1/1 (phone), radius 16; text link to `mapsUrl` underneath for no-iframe cases |
| ButtonLink | hero, Pesan, Kunjungi, Hubungi | new | `<a>` primary (tinta fill, kotak text) / secondary (2px tinta border); min-height 52px, radius 10, Libre Franklin 600 `t-body` |
| ContactBand | Hubungi | new | kulit ground, ScrollOrnament on top, 6/6 columns at ≥1024 |
| Footer | footer | new | tinta ground, kotak text, `t-small`; includes "Ini adalah draf tampilan, belum resmi." |

## React Bits (max 2)
None. Zero is right for this shop. The signature moment is the shop's own sticker ritual, built in
about 15 lines of GSAP, and every product visual is a hand-drawn SVG. A library effect would add
someone else's motion on top of the bag.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

I looked at these on reactbits.dev and declined them:
- Sticker Peel: drag, peel and throw a sticker. It's a toy with no job here, it would make the hours label movable, and it's heavy.
- Masked Heading and Split Text on "Tegal": they compete with the signature and delay the five-second recognition of the name.
- Count Up on "305": decorative, and a number should read instantly.
- Fade Content and Animated Content: they duplicate the starter's `Reveal`.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero TodaySticker (signature moment) | mount, once, after today's text is set | y −14→0, scale 1.1→1, rotation −9→−3, autoAlpha 0→1 | 0.5s, delay 0.15s | `expo.out` | final state (−3°), text swapped, no motion |
| Roti tray block | ScrollTrigger `top 85%`, once (starter Reveal) | y 20→0, autoAlpha 0→1 | 0.7s | `power2.out` | visible, no motion |
| Kue heading + glass case block | same | same | 0.7s | `power2.out` | visible |
| Pesan block | same | same | 0.7s | `power2.out` | visible |
| Kata mereka block | same | same | 0.7s | `power2.out` | visible |
| Kunjungi block | same | same | 0.7s | `power2.out` | visible |
| Hubungi block | same | same | 0.7s | `power2.out` | visible |
| ButtonLink | hover / focus-visible / active (CSS) | translateY −1px; `::after` overlay opacity 0→0.12; active scale 0.98 | 150ms | ease-out | starter CSS cuts transitions; state still shows |

Nothing else moves: not the hero h1, buns, ornaments, map or hours. Lenis: starter defaults
(lerp 0.1, native touch). `lib/motion.ts`: set `duration.hero = 0.5`, add `delay = { hero: 0.15 }`;
keep the other tokens.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Shop specifics: no raster images at all (no owner photos yet). The inline SVG illustrations total ≤ 60 KB. Reuse one bun base path across variants. Only the map iframe is heavy: it is below the fold and `loading="lazy"`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics:
- Contrast pairs are in design-brief §3. No text in `kantong`.
- Focus ring: 2px tinta, 2px offset; kotak inside the kayu tray.
- `lang="id"`, a skip link "Langsung ke isi" to `#konten`.
- Hours as a real `<table>` with `<th scope="row">`.
- The rotated stickers stay readable: −4° at most, text at least `--step-body`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title: "Toko Roti Tegal · Roti dan kue di Jalan Matraman Raya, Jakarta Timur".
Description: "Toko roti di Jl. Matraman Raya No. 68, Jakarta Timur. Roti dalam kantong Tegal, kue tradisional, buka setiap hari." (every clause is a listing or photo fact).

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-kulit #EDBE74`, `--color-tinta #3A2015`, `--color-kantong #D9531A`,
  `--color-kayu #6B3F27`, `--color-kotak #FFFCF6`, `--color-hati #F4BFCB`; `--font-display` = Besley
  variable, `--font-body` = Libre Franklin variable.
- Delete the starter's paper/ink/muted/accent tokens. Point the `html` and `.mockup-banner` rules at kotak/tinta.
- `:root`: values from design-brief §4–5. `--leading-display: 0.9` is used only on the "Tegal" span. `--gutter` is 20 / 32 (≥768) / 40px (≥1024), `--section-y` is 64 / 112px (≥768).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
