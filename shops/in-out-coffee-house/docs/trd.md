# TRD: In Out Coffee House mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
No extra dependencies: every drawing and icon is hand-authored inline SVG.

## Content model
All copy and facts in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.

| Export | Shape | Notes |
|---|---|---|
| `shop` | `name`, `type` ("Kafe"), `address` (full listing address), `addressShort` ("Jl. Dr. KRT Radjiman Widyodiningrat No.7–9, Jatinegara, Cakung"), `areaNote` ("Sekitar Pulo Jahe", reviews 1), `phone` ("0812-6060-9930"), `telUrl`, `waUrl` (mockup), `mapsUrl` (`https://maps.google.com/?cid=7190884297404004731`), `mapEmbedUrl`, `rating` (4.7), `ratingCount` (215) | `mapEmbedUrl` = `https://maps.google.com/maps?q=` + encoded "In Out Coffee House, Jl. Dr. KRT Radjiman Widyodiningrat No.7-9, Cakung, Jakarta Timur" + `&output=embed` |
| `hours` | `{ days: number[]; label: string; open: "14.00"; close: string }[]`: Senin–Kamis `[1,2,3,4]` 22.00; Jumat–Minggu `[5,6,0]` 23.00; plus `hoursNote` "Buka setiap hari mulai 14.00" | JS day numbers, Asia/Jakarta |
| `banner`, `footerNote` | Item | Bahasa draft text (PRD) |
| `hero` | `line` (mockup), `cta` labels | |
| `spaces` | `intro` (mockup) + 3 × `{ id, title, body: Item[] }` for `rooftop`, `indoor`, `beanbag` | body mixes fact and mockup Items |
| `menu` | `intro`, `note`, `featured: { id, name, price, art, mockup }[]` (5), `groups: { title, range?, items: { name, price? }[] }[]` (4), `paket` | all mockup except the intro's fact parts |
| `carWash` | `{ show: true, title, body, mockup: true }` | `show` lets the owner's "no" remove it in one edit |
| `praise` | 4 Items + `source` note | paraphrased, never named, no quote marks |
| `close` | `title`, `line` (both mockup) | |
| `meta` | `title`, `description` | |

Update `layout.tsx`: `lang="id"`, metadata from `meta`, banner text from `banner` (pass the text
into `MockupBanner`, in Bahasa).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text from `content.banner` |
| Container, Reveal, SmoothScroll | all | starter | Reveal on section blocks only |
| ArrowHead | wordmark, rooftop sign, Petunjuk Arah buttons | new | one SVG triangle path; `dir="up" \| "up-right"`; `aria-hidden` |
| Wordmark | hero h1 | new | real text "In Out" (`text-transform: uppercase`) + "coffee house"; cup outline + dotted steam SVG over the top of "N OU", ArrowHead on the I and the T, positioned in em; client part runs the signature tween |
| TodayHours | hero, visit | new, client | SSR text "Buka setiap hari mulai 14.00"; after mount, today in Asia/Jakarta ("Buka hari ini 14.00–22.00"); in Visit it marks today's row |
| ActionButton | hero, visit, close | new | `variant: solid \| outline`, `tone: light \| dark`; `<a>` with 48px min height |
| OvalRoom | hero | new SVG | ellipse clipPath; see design brief §7 |
| Building, FloorSign, RooftopArt, IndoorArt, BeanbagArt | Pilih tempatmu | new | CSS grid rows; drawings are SVG with `preserveAspectRatio="xMidYMax meet"` so floors sit on the slab |
| Frame, Plaque, ProductArt (`kopiSusu`, `latte`, `matcha`, `nasiGoreng`, `rotiBakar`), PriceList, PaketBar | Menu andalan | new | Frame = CSS border + mat; art SVG viewBox 0 0 240 240 |
| CarWashStrip | car wash | new | renders only if `carWash.show` |
| Praise | Kata mereka | new | 2×2 grid at desktop |
| Visit (HoursList, MapFrame) | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi In Out Coffee House">` over a Kuning fill with the address |
| Close, Footer | end | new | Hitam ground |

## React Bits (max 2)
None. The signature has to be the shop's own cup-logo arrows, which is a two-tween GSAP job,
and the rest of the page is still on purpose. I browsed the catalogue: the text effects (Split
Text, Rotating Text, Shiny Text) would put a borrowed idiom on the wordmark. Split Flap Text
suggests a departure board, which isn't this building. The micro candidates for hours and calls
(Status Mark, Call Chip) are agent-UI glyphs. Backgrounds and cursor effects break motion rule 7.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero I-arrowhead (signature) | load, after hydration | `y: 28 → 0`, `autoAlpha: 0 → 1` | 0.7 s, delay 0.15 s | `expo.out` | final state, no motion |
| Hero T-arrowhead (signature) | load | `x: -28 → 0`, `autoAlpha: 0 → 1` (in the arrow's own rotated frame, so it travels along its direction) | 0.7 s, delay 0.3 s | `expo.out` | final state |
| Section blocks (building, gallery, price list + Paket, praise grid, visit) | ScrollTrigger `top 85%`, once | `y: 20 → 0`, `autoAlpha` | 0.7 s | `power2.out` | visible, static |
| Buttons | hover / focus-visible / active | background-color; the ArrowHead inside translates 3px up-right | 150 ms / 180 ms | ease-out (CSS) | colour change only |
| Links | hover / focus-visible | underline thickness 2px → 3px, switched instantly (paint only, no transition) | instant | n/a | same |

The whole hero sequence ends by 1.0 s. The text of the h1, line, hours and buttons is never
hidden. Only the two arrowheads are tweened, using `gsap.from` inside `useGSAP` scoped to the
Wordmark. With JS off they render in place. `lib/motion.ts`: set `duration.hero = 0.7` and add
`distance.arrow = 28`; keep the other tokens.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible. LCP is
  the h1 text; there are no raster images on the page.
- 2 font families via `next/font/google`: `League_Spartan` (weights 600, 700, 800) and `Nunito`
  (400, 700, 800), `subsets: ["latin"]`, `display: "swap"`, exposed as `--font-display` and
  `--font-body`.
- Inline SVG only; each drawing under ~120 elements. Use `<pattern>` for brick and railing mesh,
  not hundreds of nodes. The map iframe is `loading="lazy"`.
- No preloaders, no video, no WebGL, no canvas.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3: never
Dinding text on Bata, never Bata or Kuning text on Dinding), visible keyboard focus (3px solid
outline, offset 3px: Hitam on light grounds, Kuning on Hitam), semantic landmarks (`header`
for the hero, `main#konten`, one `section` per block with `aria-labelledby`, the close section
`aria-label="Hubungi kami"`, `footer`), a skip link "Langsung ke konten", tap targets at least
44px (buttons 48px). Every drawing is `role="img"` with a Bahasa `aria-label` that describes it as
a drawing ("Gambar ruang beanbag: dinding kuning, lampu bulat, rumput sintetis, beanbag"). Frames
inside a list use `<ul>`/`<li>`, and the plaque is the visible caption (`<figure>` +
`<figcaption>`). `prefers-reduced-motion` is honoured everywhere (Lenis off, GSAP static).
Browser surfaces: `::selection` Kuning background with Hitam text; links underlined with
`text-underline-offset: 0.2em`.

## SEO / meta
Title "In Out Coffee House · Kafe di Cakung, Jakarta Timur". Description "Kafe tiga suasana di
Cakung: indoor lantai 2, ruang beanbag, dan rooftop lantai 3. Buka setiap hari mulai 14.00."
Both come from `content.meta`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-paper #F8F8F5`, `--color-ink #161616`, `--color-kuning #F1D21C`,
  `--color-bata #E0502A`, `--color-kayu #6E4428`, `--color-hijau #2F7A4A`; remove `muted` and
  `accent`. Drawing tints are CSS variables in `:root` using `color-mix(in oklch, ...)`
  (design brief §3).
- `:root`: values from design brief §4 and §5. Delete the starter's 768px media override and use
  the `--gutter` and `--section-y` clamps. Add `--leading-display: 0.9` (one-line wordmark only,
  `white-space: nowrap`) and `--leading-head: 1.08`.
- Headings: `font-display`, weight 700, `letter-spacing: -0.02em`, `text-wrap: balance`.
  Body: `font-body` 400, `max-width: 60ch` for paragraphs.
- Grids at `min-width: 1024px`: hero 6/6, rooftop row 5/7, floor-2 row 7/5, gallery 4-col, price
  list 4 × 3/12, car wash 6/6, praise 5/7, visit 5/7, close 7/5. Phone: one column, in source
  order (DOM order = visual order).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
