# TRD: Sajenak mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Sajenak-specific shape (extend the starter's `Item` type, don't replace it):
- `shop`: name "Sajenak", tagline "space for everyone", menuTagline "Feel like home", type "Kafe",
  address, phone "0856-9317-2926", `tel` "+6285693172926",
  `mapsUrl` `https://www.google.com/maps/search/?api=1&query=SAJENAK&query_place_id=ChIJIRSyIl-NaS4RB4COoTsZbRk`,
  `mapEmbed` `https://www.google.com/maps?q=SAJENAK%2C%20Jl.%20Rawa%20Domba%20No.47A%2C%20Duren%20Sawit%2C%20Jakarta%20Timur&output=embed`,
  `whatsapp` `{ url: "https://wa.me/6285693172926?text=Halo%20Sajenak%2C%20saya%20mau%20tanya%20meja", mockup: true }`,
  `rating` "4,9", `reviewCount` 455.
- `hours`: `[{ days: "Minggu–Kamis", time: "07.30–23.00", dayIdx: [0,1,2,3,4] }, { days: "Jumat–Sabtu", time: "07.30–24.00", dayIdx: [5,6] }]`, plus `hoursFallback` "Buka setiap hari · 07.30–23.00, Jumat–Sabtu sampai 24.00".
- `hero.sub` (mockup), `logoMark` `{ mockup: true }` (redrawn placeholder).
- `starred: Drink[]`, 4 items: `{ name, price, desc, art: "sajenak" | "sepintas" | "rumit" | "butterscotch" }`.
- `coffee: Drink[]`, 8 items from the board; `nonCoffee` and `food` groups each `{ title, range, items, mockup: true }`.
- `spaces`: 3 entries (pojok rotan, ruang baca, rooftop) with `img[]`, `alt`, `label`, `desc`.
- `praise: Item[]`, 4 paraphrased themes (never quotes, never names).
- `contact.line` (mockup), `contact.closing` (mockup).
All copy strings are in the PRD's sections table; use them as written.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200px |
| Reveal | menu, spaces, praise, visit, contact | starter | section-level blocks only, 7 uses max |
| MockupBanner | top | starter | text translated: "Draf mockup untuk Sajenak. Beberapa detail masih contoh sampai kamu konfirmasi." |
| SmoothScroll | root | starter | defaults |
| ClinkMark | hero | new | inline SVG of the clinking-cups-over-hills mark, redrawn from owner-2. Groups: `#cup-l`, `#cup-r`, `#hills`, `#sparks` (5 strokes). Stroke `currentColor` 1 unit = ~3px at 136px. Sparks in Rotan. Owns the signature motion. `aria-hidden`, wrapper carries `data-mockup` |
| TodayHours | hero, visit | new, client | renders `hoursFallback` on the server; after mount computes weekday in `Asia/Jakarta` via `Intl.DateTimeFormat("id-ID",{weekday:"long",timeZone:"Asia/Jakarta"})` and swaps to "Buka hari ini 07.30–23.00/24.00". In the visit table it adds a "hari ini" marker to the matching row. No layout shift: reserve the line height |
| DrinkArt | menu | new | one SVG component, 4 variants (see design brief §6). viewBox 0 0 160 220, `role="img"` + Indonesian `aria-label` |
| MenuShelf | menu | new | 4 starred drinks standing on one Kopi shelf line (desktop), rows (phone) |
| MenuLists | menu | new | butterscotch photo + "Kopi lainnya" + mockup groups; prices inline next to names |
| Spaces | spaces | new | 12-col grid composition from the design brief §7 |
| Praise | praise | new | rating line + 2×2 themes |
| StringLights | visit | new, static | inline SVG catenary with 9 bulbs, Rotan fill, full-bleed top edge of the night field, `aria-hidden` |
| VisitNight | visit | new | text column + lazy map `<iframe title="Peta lokasi Sajenak" loading="lazy">` |
| Contact | contact | new | WhatsApp (primary), Telepon; closing line; footer |

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | The signature is the shop's own logo doing a toast, which no library component does. Considered and rejected: Circular Text (a rotating "space for everyone" badge would loop forever and turn the tagline into a gimmick), Rotating Text ("pagi / sore / malam" would be a looping text effect, against rule 7), Count Up on 4,9 (puffs up a fact that is stronger plain), Stack / Card Swap for the spaces (hides photos the owner wants seen). | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero ClinkMark `#cup-l` (signature) | load, delay 0.15 s | from rotate −16°, x −8px to 0; transformOrigin bottom-centre of the cup (`50% 100%`) | 0.45 s | `power3.in` (accelerates into the clink) | final state, no motion |
| Hero ClinkMark `#cup-r` (signature) | same time | from rotate +16°, x +8px to 0 | 0.45 s | `power3.in` | final state |
| Clink recoil, both cups | at contact (0.6 s) | rotate ∓3° and back to 0 (one yoyo) | 0.15 s + 0.15 s | `power2.out` | none |
| Sparks, 5 strokes | at contact (0.6 s) | opacity 0→1, scale 0.85→1, stagger 0.03 s | 0.25 s | `power2.out` | visible |
| Section blocks (Reveal) | scroll, `top 85%`, once | autoAlpha 0→1, y 20→0 | 0.6 s | `power2.out` | final state, no motion |
| Buttons / links | hover, press | background and colour; press scale 0.98 | 0.15 s | ease-out (CSS) | colour only |
Whole hero sequence ends by about 0.9 s. The photo, the name and all text are visible from first paint and never animate.
`lib/motion.ts`: `duration = { press: 0.15, ui: 0.25, reveal: 0.6, hero: 0.9, clink: 0.45, recoil: 0.15, spark: 0.25 }`,
`ease = { out: "power2.out", outStrong: "expo.out", inOut: "power2.inOut", clinkIn: "power3.in" }`, `distance.reveal = 20`.
Use one `gsap.timeline()` inside `useGSAP({ scope })` in ClinkMark. The SVG markup is the final pose, so with JS off it shows the finished logo.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Fredoka (500, 600) and Figtree (400, 600), `latin` subset.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Images: pre-cropped JPEGs in `public/img/`, quality ~80. Hero ships 1600w and 900w via `srcset`, `sizes="100vw"`, eager, `fetchpriority="high"`, explicit width/height. Every other image `loading="lazy"` with width/height set.
- Map iframe lazy; nothing else third-party.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `h1` is "Sajenak". Section `h2`s are Menu andalan, Pilih tempatmu, Kata mereka, Kunjungi kami, Hubungi kami.
- Focus ring 3px solid, offset 3px: Kopi on Kapur, Rotan on Rumput and Malam, Arang on Rotan.
- Hours table is a real `<table>` or `<dl>`; the "hari ini" marker is text, not only colour.
- Alt text in Indonesian, describing the space or drink (e.g. "Pojok rotan dengan dinding kuning, kursi rotan dan meja akar jati").
- Text over the hero photo: none. All hero text sits on the solid Rumput field.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- `<html lang="id">`.
- title: "Sajenak · space for everyone · Kafe di Duren Sawit"
- description: "Kafe dengan taman, ruang baca, dan rooftop di Jl. Rawa Domba No.47A, Duren Sawit, Jakarta Timur. Buka setiap hari 07.30–23.00, Jumat–Sabtu sampai 24.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4–5. Section fields (Rumput, Kapur, Rotan, Malam) are full-bleed
backgrounds on the `<section>`; content stays inside `<Container>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
