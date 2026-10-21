# TRD: Amorcakes & Bakery Cibubur mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts are in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.
Shape, extending the starter:
- `shop`: name "Amorcakes & Bakery", outlet "Cibubur", address, phone `0896-5499-3538`,
  `phoneIntl: "+6289654993538"`, `waNumber: "6289654993538"` (mockup), `mapsUrl:
  "https://maps.google.com/?cid=2024976129182907176"`, `directionsUrl:
  "https://www.google.com/maps/dir/?api=1&destination=Amorcakes%20and%20Bakery%20Cibubur&destination_place_id=ChIJ6w3S2O_saS4RKLuXig8pGhw"`,
  `mapEmbed: "https://www.google.com/maps?q=Amorcakes+and+Bakery+Cibubur,+Jl.+Lapangan+Tembak+No.6,+Cibubur,+Ciracas,+Jakarta+Timur&output=embed"`,
  `hours`: 7 entries Senin…Minggu, all "06.00–22.00", `group: "Member of Amor Group"`,
  socials (instagram/facebook `boluamor`, tiktok `amorcakes`), `rating: 4.9`, `reviews: 557`.
- `cakes[]`: `{ id, name, illustration, sizes?, tagLabel?, price, mockup, priceMockup }` for the 4 cards.
- `breads[]`: `{ id, name, flavours?, price, illustration, mockup }`.
- `order`: sizes `[{cm:12, price:"mulai Rp 49rb"}, {cm:16, price:"mulai Rp 130rb"}, {cm:20, price:"tanya harga"}]`,
  flavours (the 4 cake ids), `defaultPlaque: "Selamat Ulang Tahun"`, `maxName: 20`, message template.
- `praise[]`: two paraphrases (no names).
WhatsApp message template (mockup):
```
Halo Amorcakes Cibubur, saya mau pesan kue ulang tahun.
Ukuran: {size} cm
Rasa: {flavour}
Tulisan di kue: Selamat Ulang Tahun {nama}
Mau diambil: (tanggal & jam)
```
Build it with `encodeURIComponent` into `https://wa.me/6289654993538?text=…`. With no JS, the
button's `href` is the same template filled with the defaults (16 cm, Black Forest, no name).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | Kue, Roti, Pesan, Kata, Kunjungi | starter | Section-level only, one per section content block |
| Container, SmoothScroll | all | starter | |
| MockupBanner | top | starter | Text changed to "Ini adalah draf tampilan, belum resmi." |
| Hero | Hero | new | Facade ground (`.facade` class), lockup, actions, `CaseWindow` with the cake. Owns the signature timeline |
| CaseWindow | Hero, Pesan | new | `kaca` panel, 20px radius, LED strip (1px steel line plus a 2px white line), shelf edge bar at the bottom. Children sit on the shelf |
| Cake | Hero, Kue, Pesan | new (SVG) | `flavour: "blackForest" \| "chocolateDrip" \| "greenTea" \| "strawberryCream"`, `plaque?: string \| null`. viewBox 240×200. Plaque slot at a fixed % box (about 34% wide) where `Plaque` overlays |
| Plaque | Hero, Pesan | new | HTML text over the SVG plaque, Fredoka 500 kakao, `overflow:hidden`, holds the piping cover and tip for the hero |
| Sticker | Hero, Roti (bolu tray art) | new | Round oranye disc, kakao Fredoka text, rotated -6° |
| PriceTag | Hero, Kue | new | putih, 8px radius, brown heart tile, name / size line / price. Hangs from the shelf edge |
| BreadIcon | Roti | new (SVG) | `rotiManis`, `rotiTawarMini`, `doughnut`, `bolu` (roll in a tray with an orange sticker), viewBox 96×96 |
| BoluBoxes | Roti | new (SVG) | Two stacked boxes, "Boluamor" and "Snow Bolu" |
| OrderComposer | Pesan | new, client | Radio fieldsets (size, flavour), text input (maxLength 20), preview (`CaseWindow` + `Cake` + `Plaque`), size and price label, WA link, `aria-live="polite"` summary |
| HoursStrip | Kunjungi | new, client | 7 day pills. Today (Asia/Jakarta, via `Intl.DateTimeFormat`) gets oranye fill and "Hari ini" after hydration. Visually hidden sentence "Senin sampai Minggu, 06.00 sampai 22.00" |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Amorcakes & Bakery Cibubur">`, 20px radius |
| ContactList | Hubungi | new | Link rows: small label plus lead value, 44px minimum targets |
| HeartMark | Hero, footer, step markers, praise bullets | new (SVG) | Plain heart outline, `data-mockup` where it stands in for the logo |

The `.facade` class is a corrugated ground:
`background: repeating-linear-gradient(90deg, var(--color-cokelat) 0 10px, #64392B 10px 14px)`.
It is static, so text contrast holds on both stripes.

## React Bits (max 2)
None. Reasons for zero:
- The signature moment (plaque piping) is shop-specific and a few lines of GSAP. A React Bits text
  effect (Split Text, Blur Text) on the name would be a second signature moment and compete with it.
- Sticker Peel was the closest fit (the orange stickers). It is rejected because it is hover-only
  (no job on phones, where most visitors are), needs a raster image, and adds weight for decoration.
- Circular Text and Count Up (for 557) were also rejected: one is a decorative loop, and the other
  animates a fact that should simply be read.
- Backgrounds, cursors and galleries don't fit a bright cake-case page.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | — | — | — | — |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero plaque cover and piping tip (signature moment) | load, delay 0.3s. If the plaque is below the fold, ScrollTrigger `top 85%`, once | cover `x: 0 → 101%` (xPercent). The tip rides with it, then opacity 1→0 over 0.2s | 1.2s | `power1.inOut` | cover removed, text in its final state |
| Hero sticker "Tulis nama gratis" | after the cover (about 1.5s) | opacity 0→1, scale 1.12→1, rotate -14°→-6° | 0.35s | `expo.out` | final state |
| Section content blocks (Kue, Roti, Pesan, Kata, Kunjungi) | scroll, `top 85%`, once | opacity, y 20→0 | 0.6s | `power2.out` | final state |
| Composer preview cake, size change | radio change | CSS transform scale 0.88 / 1 / 1.1 | 250ms | ease-out | instant |
| Composer preview cake, flavour change | radio change | opacity crossfade between stacked `Cake`s | 200ms | ease-out | instant |
| Buttons and chips | press | CSS transform scale(0.97). Hover colour change has no transition | 150ms | ease-out | none |

Use `gsap.from` / `gsap.set` only inside `useGSAP` with a scope, so the plaque text and sticker
are visible in the HTML with no JS. The hero headline, line and buttons never animate.
Lenis: starter defaults (lerp 0.1, native touch).
`lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.2 }`,
`ease = { out: "power2.out", outStrong: "expo.out", inOut: "power2.inOut", piping: "power1.inOut", sticker: "expo.out" }`,
`distance = { reveal: 20 }`.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here that is Fredoka (variable,
  `axes: ["wdth"]`) and Nunito (400 and 700).
- No preloaders, no video backgrounds, no WebGL. No raster images: all product art is inline SVG.
- The map iframe is `loading="lazy"` and below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background. The pairs are in design brief §3,
and oranye is never used as text on light grounds. Visible keyboard focus (3px ring, colours in
the design brief). Semantic landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`).
Every illustration is `role="img"` with an Indonesian `aria-label`. Tap targets are at least 44px
(chips and buttons min-height 48px). Composer: `fieldset`/`legend` per step, real radio inputs
with a visible checked state (not colour alone: a check mark or weight change), a labelled text
input, and an `aria-live="polite"` summary. `prefers-reduced-motion` is honoured everywhere
(Lenis off, GSAP skipped). `lang="id"` on `<html>`.

## SEO / meta
Title "Amorcakes & Bakery Cibubur | Kue ulang tahun, bolu & roti". Description "Kue ulang tahun,
bolu dan roti manis di Cibubur, Jakarta Timur. Buka setiap hari 06.00–22.00." Both come from
`content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add `.section-tight` (48px / 80px) and a `.t-headfont` helper (Fredoka 700,
`font-variation-settings: "wdth" 82`). Values are in design brief §4–5.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
