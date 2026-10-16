# TRD: Bonjur Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `shop` and `Item`; all copy in Bahasa Indonesia):
- `shop`: name "Bonjur Cafe & Resto", short "Bonjur", type "Kafe & restoran", address parts
  (`complex: "Komp. Billy Moon"`, `street: "Janur 1 No. 8, Blok CF 1"`,
  `area: "Pondok Kelapa, Duren Sawit, Jakarta Timur 13450"`), `phone: "0858-9139-6021"`,
  `tel: "+6285891396021"`, `mapsUrl: "https://maps.google.com/?cid=2395911994470289058"`
  (the listing's own Maps link, from raw.json), `whatsapp: { url: "https://wa.me/6285891396021", mockup: true }`.
- `hours`: `{ open: 7, closeWeekday: 22, closeWeekend: 23, tz: "Asia/Jakarta" }` plus display rows
  `[{ days: "Senin–Jumat", time: "07.00–22.00" }, { days: "Sabtu–Minggu", time: "07.00–23.00", late: true }]`.
  Weekend = Saturday and Sunday (raw.json periods: day 0 and 6 close 23:00).
- `hero`, `dayParts` (pagi/siang/malam), `menu` (`featured`, `categories[{ name, from: Item, items: Item[], art }]`,
  `note: Item`), `spaces`, `family` (`show: true`, `mockup: true`, items), `praise` (`rating: "4,4"`,
  `count: 546`, paraphrases), `contact`. Every string from the PRD table, with its [MOCKUP] flag.
- `family.show`: one boolean that hides the whole section if the owner says the rabbit area and pond are gone.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk Bonjur Cafe & Resto. Teks bergaris putus-putus masih contoh sampai Anda konfirmasi." Colours: ink ground, paper text |
| Container, SmoothScroll | all | starter | unchanged |
| Reveal | sections 2–8 | starter | one per section block, never per item |
| AwningValance | hero top, menu bottom edge | new | static SVG tile (2 stripes + 2 scallops) repeated on x, `aria-hidden`; prop `variant="full"` (red strip + stripes + scallops, hero) or `"edge"` (blue scallops only, menu bottom) |
| DayBar | hero | new, client | signature moment; see Motion spec and DayBar logic below |
| BalloonMark | hero (DayBar) | new | icon-size inline SVG (24×32, ≤6 paths): paper envelope, red band, blue basket |
| Button | hero, visit, contact | new | `<a>` styled as a pill, 48px tall, `primary` (red, paper text) / `secondary` (2px blue or paper outline). `tel:`, Maps and `wa.me` links |
| Hero | 1 | new | h1 = `<span class="font-display">Bonjur</span>` + "Cafe & Resto"; owner-1 photo via `next/image` with `priority`, bleeds right at ≥1024px |
| DayParts | 2 | new | three panels in one strip (tile / amber / ink), bubur illustration in Pagi |
| MenuSection | 3 | new | blue full-bleed; featured + three categories; ends with `AwningValance variant="edge"` |
| FoodArt (BeefTeriyaki, FriesBasket, Kopi, BuburAyam) | 2, 3 | new | flat SVG illustrations in `components/art/`, `role="img"` + Indonesian `aria-label` ending "(ilustrasi)" |
| Spaces | 4 | new | owner-2 photo (lazy) + three tiles (green / tile / ink) |
| FamilySection | 5 | new | renders only if `family.show`; three spot icons (rabbit, fish, car), simple SVGs ≤64px |
| Praise | 6 | new | rating line + 2×2 paraphrases, red 24px rule above each |
| StringLights | 7 top | new | static SVG garland (curved line + ~14 amber circles), `aria-hidden` |
| Visit | 7 | new | address, hours `<table>`, Maps iframe (lazy), directions button |
| Contact + Footer | 8 | new | phone, Telepon + WhatsApp [MOCKUP], footer wordmark |

Assets: copy only `owner-1.jpg` and `owner-2.jpg` from `shops/bonjur-cafe-resto/photos/` to
`site/public/photos/`. Never copy `owner-3.jpg` (old hours; logo reference only) or any `photo-*.jpg`.

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | n/a | The one moment that matters (the balloon on the day bar) is specific to Bonjur and is built in GSAP. The catalogue was checked: Split Text would break the connected script wordmark, Rotating Text loops, Count Up on a 4,4 rating is a gimmick, Circular Text is a decorative badge, and Status Mark / Call Chip are AI-agent status UI. | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero balloon marker (signature moment) | load, after mount, 0.15s delay | `x` 0 → target px along the bar, `rotation` -8 → 0 | 1.2s | `expo.out` | placed at target, no tween |
| Section blocks 2–8 (`Reveal`) | scroll, `top 85%`, once | `autoAlpha` 0 → 1, `y` 20 → 0 | 0.7s | `power2.out` | final state |
| Buttons | hover / active (CSS) | `translateY(-1px)` / `scale(0.98)`; colour swaps without tween | 150ms | ease-out | no transform |

Nothing else animates: hero text, photos, awning, garland, menu items and icons stay still.
Lenis: starter defaults (lerp 0.1, native touch).
`lib/motion.ts`: set `duration.hero = 1.2`, add `delay = { hero: 0.15 }`; keep the rest.

### DayBar logic
- Read now in shop time: `Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })`. Weekend = Sat/Sun.
- `close = weekend ? 23 : 22`; stripes = `close - 7` (15 or 16), drawn as one SVG
  (`viewBox` width = stripes × 20) so the scallops scale evenly; stripes alternate blue/paper with a 1px blue outline.
- `p = clamp((minutes - 420) / (close*60 - 420), 0, 1)`; target x = `p × barWidth` (measure in the
  `useGSAP` callback; recompute on resize with no tween).
- Status line (body, ink): open → "Buka sekarang · tutup {close}.00"; before 07.00 → "Belum buka ·
  buka jam 07.00"; after close → "Sudah tutup · besok buka jam 07.00". The label above the bar reads
  "Hari ini {Senin…Minggu} · 07.00–{close}.00" (Indonesian day names from a fixed array, not locale-dependent).
- Server/static HTML: the bar has 15 stripes, the labels "07.00" and "22.00", and the line "Setiap hari 07.00–22.00 ·
  Sabtu–Minggu sampai 23.00". The balloon element has `hidden` until mounted. Update the text after
  mount; no layout shift (the bar's width is fixed by its container).
- The bar and balloon are `aria-hidden`; the status line is plain text.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here: Yellowtail 400, Rubik variable (400–700), latin.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Hero image owner-1.jpg (1280×720, ~160 KB) with `priority`; owner-2.jpg lazy; Maps iframe
  `loading="lazy"`. Illustrations are inline SVG or `public/art/*.svg`, each under 8 KB.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: never amber text on green (4.4:1). Focus ring 3px amber on ink/blue/green and
3px blue on paper. Hours as a real `<table>` with `<th scope="row">` day names. The Maps iframe gets `title="Peta lokasi Bonjur Cafe & Resto"`.
Photo alt text: owner-1 "Ruang makan Bonjur berdinding kaca, dengan dinding tanaman hijau, lampu kristal dan kursi kayu";
owner-2 "Teras depan Bonjur di bawah tenda bergaris merah dan biru, dengan pot-pot palem".

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
`<html lang="id">`. Title "Bonjur Cafe & Resto · Pondok Kelapa, Jakarta Timur". Description:
"Kafe & resto keluarga di Komp. Billy Moon, Pondok Kelapa. Buka setiap hari mulai 07.00."
Map embed URL (no API key): `https://www.google.com/maps?q=Bonjur+Cafe+%26+Resto,+Komp.+Billy+Moon,+Pondok+Kelapa,+Jakarta+Timur&output=embed`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design-brief §4–5. `@theme` colours: `paper #FBFAF6`, `ink #131A3A`, `muted #4A5170`,
`accent`/`red #C8322A`, `blue #1F3A8F`, `blue-soft #C9D3F0`, `amber #F2B544`, `green #2C5A35`,
`tile #F1ECE1`; fonts `--font-display` (Yellowtail) and `--font-body` (Rubik). Display leading
0.9 only on the one-word wordmark. Add a global rule: `[data-mockup]` text gets
`text-decoration: underline dashed 1px; text-underline-offset: 4px` in the section's secondary colour.
The hero photo's right bleed and the full-bleed section grounds go on the parent, not on `<Container>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
