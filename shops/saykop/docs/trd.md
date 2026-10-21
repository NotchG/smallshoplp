# TRD: SAYKOP mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No new dependencies: no React Bits this time (see below), no icon library, no map library.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

```ts
type Item = { text: string; mockup?: boolean };
type Price = { text: string; mockup: true };                 // every price in the brief is [MOCKUP]
type Drink = {
  id: "axelle" | "black-lemonade" | "mariani" | "misty" | "dirty-latte" | "mango-yakult" | "iced-red-velvet" | "lembayung";
  name: string;                                              // exactly as the shop writes it
  line: Item;                                                // Indonesian one-liner; mockup for Iced Red Velvet and Lembayung
  price?: Price;                                             // only where the brief has one
  glass: GlassSpec;                                          // layers bottom→top, garnish; rendered with data-mockup
};
type Dish = { id: string; name: Item; line: Item; price?: Price; drawn: boolean };
```
- `shop`: name "SAYKOP", subline "Saya Kopi", type, address lines, phone "0821-6485-3355",
  `telUrl` "tel:+6282164853355", `waUrl` "https://wa.me/6282164853355" (mockup),
  `directionsUrl` "https://www.google.com/maps/dir/?api=1&destination=SAYKOP%20Saya%20Kopi&destination_place_id=ChIJtQmhjRf1aS4RRi1NEU73WBY",
  `mapsUrl` "https://maps.google.com/?cid=1610308781454732614",
  `mapEmbedUrl` "https://www.google.com/maps?q=SAYKOP+Saya+Kopi,+Jl.+Bangunan+Timur+No.13B,+Kayu+Putih,+Jakarta+Timur&output=embed",
  `instagram` { text: "Instagram (menyusul)", mockup: true }.
- `hours`: `[{ label: "Senin–Kamis", days: [1,2,3,4], open: "11.00", close: "22.30" }, { label: "Jumat", days: [5], open: "13.00", close: "22.30" }, { label: "Sabtu–Minggu", days: [6,0], open: "11.00", close: "22.30" }]` (JS day numbers).
- `hero`, `drinks` (8, order: Axelle, Black Lemonade, Mariani, Misty, Dirty Latte, Mango Yakult,
  Iced Red Velvet, Lembayung), `alsoOnMenu` (Elma fact; Kopi Susu Saykop Rp 22rb, Americano,
  Cappuccino, Caffè Latte, V60, biji kopi 200 g all mockup), `dishes` (3 drawn + 2 text),
  `comfort` (4 items + statement + evening line), `praise` (5 paraphrased themes, no names),
  `rating` { value: "4,8", count: "1.034" } from the listing, `contact`.
- Copy and sources exactly as in the PRD sections table. Numbers in Indonesian format (4,8; 1.034; 11.00).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200px |
| Reveal | all below hero | starter | one per section content block, not per card |
| SmoothScroll | layout | starter | defaults |
| MockupBanner | layout | starter, edited | text "Ini contoh tampilan, belum situs resmi SAYKOP."; navy ground, plaster text |
| TopLinks | hero | new | anchors Minuman, Makanan, Lokasi + WhatsApp pill; links hidden under 768px |
| MuralLine | hero, contact | new | original inline SVG, `aria-hidden`; one continuous navy path forming 2 faces (hero) or 1 face (contact, eyes closed); stroke 6px at desktop scale, `vector-effect: non-scaling-stroke`; separate `<g class="mural-eye">` per eye in the hero face that blinks |
| Arch | hero | new | plaster arch (CSS: `border-radius: 999px 999px 0 0` box), 3 line pendant lamps, `DrinkGlass` Axelle at 2x, pine counter band with diagonal planks (`repeating-linear-gradient`, flat bands, no blur) and 2 bean-jar SVGs |
| TodayHours | hero, visit | new, client | computes weekday in `Asia/Jakarta` via `Intl.DateTimeFormat("id-ID", { weekday: "long", timeZone: "Asia/Jakarta" })`; server/no-JS output is the week summary "Sen–Kam & Sab–Min 11.00–22.30 · Jum 13.00–22.30"; never prints "setiap hari" |
| ActionButton | hero, visit, contact | new | `<a>` pills, min-height 48px; variants `solid` (navy/plaster), `line` (navy border on wall), `light` (plaster on navy) |
| TileStrip | under hero | new | full-bleed, 48px phone / 64px desktop; one 64x64 SVG tile (eight-petal flower in char, rust quarter-petals at corners, grey hairlines on white) used as a CSS `background-image` data URI, `aria-hidden` |
| DrinkGlass | hero, drinks | new | parametric SVG: `layers: { color, height }[]`, `cap?`, `garnish: "flower" | "lemon" | "lemongrass" | "mint" | "swirl" | null`, `size`; tumbler + steel straw + 3 outlined ice cubes; `role="img"` + Indonesian `aria-label`; wrapper carries `data-mockup` |
| DrinkLineup | drinks | new | phone: list rows; ≥768px: 4-up grid with one wavy navy shelf SVG per row behind the glass bases |
| Dish illustrations (3) | food | new | `KarageBowl`, `HotplateChicken`, `NasiGorengPlate`; top-down flat SVGs per design brief §6; each <10 KB; `role="img"` + `aria-label`; `data-mockup` |
| FoodTable | food | new | pine ground with faint vertical plank lines (1px, `#C9914F`, every 180px, decorative) |
| ComfortList | comfort | new | 4 navy single-line icons (plug, music note, arch, motorbike), 40px, drawn in the MuralLine style |
| Praise | praise | new | navy ground; `<ul>` of themes; caption "Diringkas dari ulasan Google." |
| Visit | visit | new | map `<iframe loading="lazy" title="Peta lokasi SAYKOP">`, 4:3, 16px radius; `HoursTable` with today's row bold + rust dot (non-colour cue: bold and "hari ini" text) |
| Contact + Footer | contact | new | buttons, phone, Instagram placeholder (`data-mockup`, no dead link: plain text until the owner gives a handle) |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | n/a | The signature moment is the shop's own mural line, built in CSS; any React Bits effect would compete with it or add motion with no job | 0 | n/a |

Considered and rejected after browsing reactbits.dev:
- Stroke Text (draws "SAYKOP"): a second drawing effect next to the mural line, and it animates strokes, outside transform/opacity.
- Rotating Text (cycle drink names in the hero): loops, which breaks "text effects run once", and pulls in an extra animation library.
- Circular Text (round badge): a cliché, and a rotating badge is decoration without a job.
- Tilted Card (drink cards): pointer 3D tilt is decoration; a 200 ms CSS tilt on the glass does the "picked up" response.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero mural line (signature) | first paint, CSS keyframes, delay 0.15 s | wrapper `translateX(-100%→0)`, inner SVG `translateX(100%→0)` (transform-only wipe) | 1.1 s | `cubic-bezier(0.65, 0, 0.35, 1)` | `animation: none`, final state, no motion |
| Hero face eyes (signature, part 2) | CSS keyframes, delay 1.45 s | `scaleY` 1 → 0.12 → 1, `transform-box: fill-box`, origin centre | 0.23 s (90 ms close, 140 ms open) | ease-in / ease-out | `animation: none`, eyes open |
| Section content blocks (drinks, food, comfort, praise, visit, contact) | scroll, `top 85%`, once | opacity 0→1, y 20→0 (starter `Reveal`) | 0.7 s | `power2.out` | static (starter skips GSAP) |
| Drink glass | hover / focus-within of its item | `rotate(-3deg) translateY(-4px)` | 200 ms | ease-out | none |
| Buttons | hover / active | colour shift; active `scale(0.97)` | 200 ms / 150 ms | ease-out | colour only |

- The starter's global reduced-motion rule shortens durations but not delays; add an explicit
  `@media (prefers-reduced-motion: reduce) { .mural-wipe, .mural-wipe-inner, .mural-eye { animation: none !important; } }`.
  The hidden start state lives only in the keyframes, so `animation: none` leaves the final state.
- Draw the eyes in absolute path coordinates: no SVG `transform` attribute on `.mural-eye`
  (a CSS transform would override it). Put `overflow: clip` on the hero section so the wiping
  wrapper can never cause horizontal scroll.
- `animation-fill-mode: both` on the wipe so the line is hidden only for its 0.15 s delay. Text
  never waits on it. With JS off the CSS still runs; with CSS off the line simply shows.
- The contact-band face is static. No Lenis changes.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  LCP element is "SAYKOP" text, not an image.
- At most 2 font families via `next/font`, subset, `display: swap`: `Shantell_Sans` (variable,
  `axes: ["INFM", "BNCE"]`; if next/font rejects the axes, load the default instance and drop the
  axis settings) and `M_PLUS_Rounded_1c` (weights 400, 500, 700, subset latin).
- No preloaders, no video backgrounds, no WebGL. No raster images at all: every visual is inline
  SVG (total illustration SVG under 80 KB) or CSS.
- Map iframe `loading="lazy"`, below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; light
text never on wall, rust only on plaster), visible keyboard focus (3px navy outline + 2px plaster
offset on light grounds, wall-orange outline on navy), semantic landmarks (`header`, `main`,
`section` with `aria-labelledby`, `footer`), alt text on every illustration via `aria-label`
in Indonesian (e.g. "Ilustrasi Axelle: kopi berwarna merah berry dengan hiasan bunga"), the
mural line `aria-hidden`, tap targets at least 44 px (buttons 48px), `prefers-reduced-motion`
honoured everywhere (Lenis off, GSAP and CSS keyframes static). Today's hours row marked with text
"hari ini", not only colour. `lang="id"`.

## SEO / meta
Title and description from `content.ts`: title "SAYKOP (Saya Kopi) · Kedai kopi di Kayu Putih,
Jakarta Timur"; description "Minuman kreatif seperti Axelle dan Black Lemonade, makanan, dan
tempat nyaman buat kerja di Jl. Bangunan Timur No.13B, Pulo Gadung." `noindex` stays on (starter
default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `:root`: values from design brief §4–5; `--gutter: 20px`, at `min-width: 1024px` `40px`;
  `--section-y: 64px`, at `min-width: 768px` `112px`; `--container: 1200px`.
- Add `.t-display { white-space: nowrap }` and the display font variation settings in CSS
  classes, not inline styles. 12-column grid via Tailwind `grid-cols-12 gap-8` at `lg`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
