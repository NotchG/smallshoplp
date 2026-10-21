# TRD: Undertwenty Coffee Co mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (values from the PRD sections table):
- `shop`: `name: "Undertwenty Coffee Co"`, `mark: "U20"`, `script: "Coffee. Co"`, `type: "Kedai kopi"`,
  `address: "Budaya 69, Condet, Batu Ampar, Kramat Jati, Jakarta Timur 13520"`, `addressShort: "Budaya 69, Condet, Kramat Jati"`,
  `phoneDisplay: "0856-9991-113"`, `tel: "tel:+628569991113"`,
  `whatsapp: { url: "https://wa.me/628569991113", mockup: true }`,
  `mapsUrl: "https://maps.google.com/?cid=9699381566018863506"`,
  `mapEmbed: "https://maps.google.com/maps?q=Undertwenty%20Coffee%20Co%2C%20Budaya%2069%2C%20Condet%2C%20Jakarta%20Timur&output=embed"`,
  `rating: { value: "4,7", count: 216 }`.
- `hours`: one entry per weekday, `{ day: 0–6 (0 = Minggu), open: 600, close: 60 | 120 }` in minutes, where close is
  after midnight: Mon–Fri close 60 (01.00), Sat and Sun close 120 (02.00). From raw.json `regularOpeningHours.periods`.
- `featured` (4 drinks), `menuGroups` (4 groups of `{ name, price?, mockup }`), `methods` (4), `latePoints` (3),
  `praise` (4 paraphrases with `topic`), `patokan`, copy strings per section. Prices are strings ("Rp 25rb–35rb").

`lib/hours.ts` (new, pure functions, used by OpenPlate and HoursChart):
- Jakarta time = `new Date(Date.now() + 7 * 3600_000)` read with `getUTCDay/Hours/Minutes` (UTC+7, no DST).
- If minutes < the previous day's `close` → open on the previous day's period: label "Malam ini · {hari kemarin}", note "● Masih buka".
- Else if minutes ≥ 600 → open today: label "Hari ini · {hari}", note "● Sedang buka".
- Else → closed: label "Hari ini · {hari}", note "Tutup sekarang · buka lagi 10.00".
- Time line is always "10.00–{close}" for the relevant period. Day names: Minggu, Senin, Selasa, Rabu, Kamis, Jumat, Sabtu.
- Chart marker: `t = (minutes − 600 + 1440) % 1440`; show if `t ≤ 960`, placed at `left: (t / 960 × 100)%` of the axis (set once, never animated); label "Sekarang HH.MM".
- The static HTML always carries the weekly fallback ("Buka setiap hari / 10.00–01.00 / Sabtu–Minggu sampai 02.00"), never a build-time "today".
  The client swaps the text after hydration inside a block of reserved height (no layout shift).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Bahasa copy from the PRD; `<html lang="id">` in layout |
| Container, `.section`, `.t-*` | all | starter | `--container` 1200px |
| Reveal | Menu → Footer | starter | one per section, on the inner grid only |
| SmoothScroll | layout | starter | defaults |
| Hero | hero | new | `h1` wordmark ("Undertwenty" + Yellowtail span "Coffee. Co"), tagline, FacadePhoto, OpenPlate |
| FacadePhoto | hero | new, client | framed `<img>`, signature ScrollTrigger (motion spec) |
| OpenPlate | hero | new, client | arang plate; status from `lib/hours.ts`; two ActionButtons |
| ActionButton | hero, visit, contact | new | `<a>`, min-height 48px; variants `solid` / `outline` / `plate`; `::after` hover overlay |
| MenuSection, DrinkCard, MenuList | menu | new | owner-2 card + 3 drawn cards on the kayu counter band; 4 text groups |
| DrinkArt (`GreenTeaLatte`, `PourOver`, `EspressoSusu`) | menu | new | inline SVG, 200×240 viewBox, flat fills + 2px arang stroke, `role="img"` + Bahasa `aria-label` |
| BrewShelf, BrewIcon (`V60`, `Syphon`, `ColdDrip`, `FrenchPress`) | brew | new | line-only SVG, 2px `vector-effect: non-scaling-stroke`, `aria-hidden`; names are real text |
| LateHours, HoursChart | larut | new, client marker | bars are divs (lampu), static: weekday bar `width: 93.75%` of the axis (10.00→01.00), weekend `100%` (10.00→02.00); ticks at 10.00, 14.00, 18.00, 22.00, 00.00, 02.00 |
| Praise | kata mereka | new | 2 × 2 at desktop |
| Visit, MapEmbed, Patokan | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Undertwenty Coffee Co">` in the frame |
| Contact | hubungi | new | three `plate` ActionButtons |
| U20Plate, Footer | footer | new | the mark; reused as the favicon (SVG) if simple |

## React Bits (max 2)
None. The signature is a GSAP transform on the owner's own photo, and the world is material (brick, cement, steel), not effects.
Checked and rejected: Circular Text (a rotating "freshly roasted" badge is decoration and repeats a claim), Count Up (animating
a 4,7 rating is a gimmick), Split Flap Text (a departure board isn't this shop's world), Sticker Peel (decal costume).

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | — | — | 0 | — |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero facade photo (signature, "Mendekati pintu") | ScrollTrigger on the hero section, `start: "top top"`, `end: "bottom top"`, `scrub: 0.6`, no pin | `scale` 1 → 1.10 (< 768px: 1.06) on the `<img>` only, `transformOrigin: "81% 55%"`; frame has `overflow: hidden` | tied to scroll | none (scrub) | no trigger, scale 1 |
| Hero on load | — | nothing animates; all hero text and the photo paint at first render | — | — | same |
| Section blocks (Menu → Footer) | `Reveal`, `top 85%`, once | `autoAlpha` 0 → 1, `y` 20 → 0 | 0.6s | `power2.out` | final state |
| Hero plate live text, chart "Sekarang" marker | after hydration | `opacity` 0 → 1 | 0.2s | `power2.out` | appear instantly |
| Buttons and plates, hover | CSS `:hover` / `:focus-visible` | `::after` opacity 0 → 0.12 | 180ms | ease-out | starter CSS shortens it |
| Buttons and plates, press | CSS `:active` | `translateY(1px)` | 150ms | ease-out | same |

Lenis: starter defaults (lerp 0.1, native touch). Use `useGSAP` with a scope ref in FacadePhoto; kill nothing by hand.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Archivo (`axes: ["wdth"]`, variable weight) and Yellowtail 400.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images: `facade.jpg` eager with `fetchpriority="high"`, explicit `width`/`height`; everything else `loading="lazy"`. The map iframe is lazy and below the fold.

Assets (copy into `site/public/photos/`, never the `photo-*.jpg` files):
- `facade.jpg`: owner-1.jpg cropped to the left 1010 × 868 px (drops the pink basket on the right). Shown 4:3 with `object-fit: cover`, `object-position: 40% 60%`.
- `patokan.jpg`: owner-1.jpg crop x 600–940, y 230–720 (340 × 490, the U20 plate and the decal door).
- `es-kopi-susu.jpg`: owner-2.jpg, resized to 900 × 1200, quality ~82.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics:
- On bata, text is putih only (4.83). Focus ring: putih on bata, arang on semen, lampu on arang and kayu.
- Alt text (Bahasa): facade "Tampak depan Undertwenty Coffee Co: dinding bata oranye, jendela besi hitam, papan U20, pintu kaca bertuliskan UNDERTWENTY, dan tiga bangku besi di depan jendela." · es kopi susu "Es kopi susu berlapis di gelas bersegi, di samping tanaman lidah mertua dalam pot tanah liat." · patokan "Papan hitam U20 Coffee. Co di dinding bata dan pintu kaca dengan stiker UNDERTWENTY dan Free WiFi."
- HoursChart is `aria-hidden`; the hours appear as real text beside it. The live status uses `aria-live="polite"` only on first swap.
- Phone and WhatsApp links have visible text, not just icons.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Undertwenty Coffee Co · Kedai kopi di Condet, buka sampai larut"
- Description: "Kedai kopi kecil di Budaya 69, Condet, Jakarta Timur. Manual brew dan es kopi susu, buka setiap hari 10.00–01.00, Sabtu–Minggu sampai 02.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-bata`, `--color-semen`, `--color-arang`, `--color-kayu`, `--color-lampu`, `--color-putih`;
  `--font-display` and `--font-body` both map to the Archivo variable, `--font-script` to Yellowtail.
- Condensed setting: a `.t-cond` class with `font-stretch: 62.5%; font-weight: 800; text-transform: uppercase; letter-spacing: 0.01em`.
  If the build renders normal width, add `font-variation-settings: "wdth" 62.5`.
- `.t-display` gets `white-space: nowrap`; `--leading-display: 0.9`, `--leading-head: 1.05`.
- The 12-column grid lives in a `.grid-12` class (columns and 24px gap) from 1024px; spans via Tailwind `col-span-*`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
