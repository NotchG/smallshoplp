# TRD: Marhaba! Coffee & Eatery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape for this shop (all strings in Bahasa Indonesia, exactly as in the PRD's sections table):
- `shop`: `name` "Marhaba!", `fullName` "Marhaba! Coffee & Eatery", `descriptor` "Coffee & Eatery",
  `area` "Pondok Bambu, Duren Sawit", `address`, `landmark` "Di sebelah restoran mi.", `phone`
  "0813-9938-5352", `phoneHref` "tel:+6281399385352", `whatsapp` { href "https://wa.me/6281399385352", mockup: true },
  `mapsUrl` = raw.json `googleMapsUri`, `mapEmbedUrl`
  "https://www.google.com/maps?q=Marhaba!%20Coffee%20and%20Eatery%2C%20Jl.%20Pahlawan%20Revolusi%20No.55%2C%20Pondok%20Bambu&output=embed",
  `rating` { value "4,6", count 569 }, `parking` "Tersedia parkir untuk mobil dan motor."
- `hours`: `[{ days: "Senin–Kamis", open: "08.00", close: "21.00", weekdays: [1,2,3,4] },
  { days: "Jumat–Minggu", open: "08.00", close: "23.00", weekdays: [5,6,0] }]`, `everyDay: "Buka setiap hari"`,
  `fallbackToday: "Buka setiap hari, mulai 08.00"`.
- `hero`: `lettering` "MARHABA!", `tagline` "duduk enak, makan enak", `line` (mockup), `doorDecal` lines.
- `dishes: Dish[]` where `Dish = { id: "mie" | "salad" | "ummali" | "kurma" | "cappuccino"; name: Item; desc: Item; price: Item; size: "bowl" | "dish" | "cup" }`.
  Mie Kari Ayam's `name` is mockup; every `price` is mockup; Cappuccino's `desc` is mockup.
- `extras`: `{ food: Item[]; drinks: Item[] }`, all mockup. `facilities: { icon; name: Item; detail: Item }[]` (kids area
  not mockup but listed in the checklist). `ambience`, `praise` (5 themes: `{ title, text }`, never mockup, never quotes),
  `contact` (reservation line mockup). Section intros flagged mockup.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | content width from `--container` |
| Reveal | Menu table, Fasilitas board, Suasana scene, Kunjungi block | starter | section-level only, nowhere else |
| MockupBanner | top | starter | text translated to Indonesian (PRD) |
| SmoothScroll | layout | starter | unchanged |
| SiteHeader | top | new | descriptor left; anchors `#menu`, `#fasilitas`, `#lokasi` right (≥768); phone shows "Lokasi" only |
| HeroWindow | hero | new | `besi` frame grid (main pane, door pane ≥1100px), lettering + rule + tagline, door decal, sill with `TodayHours` and CTAs |
| InteriorScene | hero | new (inline SVG) | lanterns in `.lantern` groups with `.lantern-lit` and `.lantern-pool` layers for the signature; three bands per design brief §7; `role="img"` + aria-label |
| TodayHours | hero sill, Kunjungi rows | new (client) | weekday in `Asia/Jakarta` via `Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" })`; server-rendered fallback text; marks today's row with "hari ini" |
| FamilyTable + DishUnit | Menu | new | terrazzo surface (SVG chip tile as CSS background), 8px `besi` edge; desktop rows 6+6 / 4+4+4; phone stacked with a 128px dish column |
| MieKari, CaesarSalad, UmmAli, KopiSusuKurma, Cappuccino | Menu | new (inline SVG) | top-down, flat, sizes per design brief §6, each with `role="img"` and an Indonesian aria-label |
| FacilityBoard + Pictogram | Fasilitas | new | `besi` plate on `paviliun`; 5 rows; 28px line pictograms in `bohlam` (2px stroke) |
| GardenScene | Suasana | new (inline SVG) | viewBox 1200×500, fountain at x=600; phone 4:5 box with `preserveAspectRatio="xMidYMid slice"` |
| PraiseThemes | Kata mereka | new | rating line + 2-col theme grid; no quote glyphs, no stars |
| VisitBlock + MapFrame | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Marhaba!">` in an 8px `besi` frame; fallback link under it |
| NightContact + Festoon | Hubungi + footer | new | static festoon SVG (9 lit bulbs) full-bleed; centred 640px column |
| Button | hero, Kunjungi, Hubungi | new | variants: `solid` (besi/lis), `amber` (bohlam/besi, on dark), `outline` (on light: besi; on dark: lis); min height 48px |

## React Bits (max 2)
None. Considered and rejected:
- **Split Text / Blur Text** on "MARHABA!": the lettering is vinyl on glass and should stay still. The signature is the light, not the letters.
- **Count Up** on 4,6 / 569: it turns a listing fact into a show.
- **Circular Text** badge of the tagline: a sticker cliché that isn't on their window.
- **Fade Content / Animated Content**: the starter's `<Reveal>` already does this.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): `.lantern-lit` ×5 (3 in the phone crop) | load, CSS `@keyframes lantern-on`, `animation-fill-mode: both` | opacity 0 → 1 | 550ms each; delays 200 / 350 / 500 / 650 / 800ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `animation: none` → lit, final state, no motion |
| Hero: `.lantern-pool` ×5 (light on the tables) | load, same keyframes | opacity 0 → 1 (layer drawn at 18% bohlam) | 550ms; its lantern's delay + 100ms | same | `animation: none` → lit |
| Menu table, Fasilitas board, Suasana scene, Kunjungi block | scroll, `<Reveal>` (top 85%, once) | opacity 0 → 1, y 20 → 0 | 0.7s | power2.out | content at final state (starter) |
| Buttons, links | hover / focus-visible / active | `::after` overlay opacity 0 → 1; translateY(-1px), active translateY(1px) | 150ms | ease-out | starter rule cuts transitions to 0.01ms |

Why CSS for the signature: it runs from first paint without waiting for hydration (rule 8), there is no
lit → off → lit flicker from a GSAP `from()` after hydration, and it still works with JS off. Durations live as CSS custom
properties (`--lantern-dur: 550ms; --lantern-step: 150ms; --lantern-start: 200ms`) beside the keyframes in `globals.css`.
`lib/motion.ts` keeps the starter values; set `hero: 1.4` (sequence length, for reference). Nothing else in
the hero animates. The festoon in the closing is static.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here: Signika only, `latin`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Inline SVG budgets: each dish ≤ 12 KB, InteriorScene and GardenScene ≤ 25 KB each, Festoon ≤ 4 KB.
  Radial glows as SVG `radialGradient`, no CSS `filter: blur`.
- Map iframe `loading="lazy"`, below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).

For this shop:
- Contrast pairs come from the design brief §3. Never put `lis-soft` or `bohlam` text on `paviliun`.
- Focus ring: 3px outline, offset 3px; `bohlam` on kaca/paviliun/besi grounds, `besi` on lis/teraso.
- h1 = "MARHABA!" (visually the lettering) with an `sr-only` suffix " Coffee & Eatery". h2 per section. Hours as a `<dl>` or table.
- Every illustration: `role="img"` + Indonesian `aria-label` (e.g. "Ilustrasi: semangkuk mi kari dengan ayam, tahu, telur rebus, dan kerupuk"). The festoon and terrazzo chips are `aria-hidden`.
- Skip link "Langsung ke konten" → `#konten`. `<html lang="id">`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "Marhaba! Coffee & Eatery · Pondok Bambu, Jakarta Timur"; description "Kafe dan restoran keluarga
dengan taman, mushala, dan ruang ber-AC di Jl. Pahlawan Revolusi No.55, Pondok Bambu. Buka setiap hari mulai 08.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).

Values: design brief §4–5. Dish sizes, frame widths and lantern timings are CSS variables too
(`--dish-bowl`, `--dish-salad`, `--dish-dish`, `--dish-cup`, `--frame`, `--mullion`), switched at 768px.
The door pane appears at a `min-width: 1100px` media query written in CSS, not as an arbitrary Tailwind value.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
