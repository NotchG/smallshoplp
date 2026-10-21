# TRD: kupinami Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extends the starter's `Item = { text; mockup? }`):
- `shop`: name "kupinami", descriptor "Cafe & Resto", address "Jl. Bina Marga No. 44, Ceger,
  Cipayung, Jakarta Timur 13820", phone "0811-1314-314", `waUrl` `https://wa.me/628111314314`,
  `tel` `tel:+628111314314`, `mapsUrl` `https://maps.google.com/?cid=8993584992493652087`,
  `directionsUrl` `https://www.google.com/maps/dir/?api=1&destination=Kupinami%20Cafe%20%26%20Resto&destination_place_id=ChIJX9Q8fkDtaS4Rd0jejuahz3w`,
  `mapEmbed` `https://www.google.com/maps?q=Kupinami%20Cafe%20%26%20Resto%2C%20Jl.%20Bina%20Marga%20No.44%2C%20Cipayung&output=embed`,
  `instagram` `https://www.instagram.com/kupinami`, `facebook` `https://www.facebook.com/kupinami`,
  `rating` "4,7", `reviewCount` "2.883".
- `hours`: `{ days: "Setiap hari", time: "07.00–22.00" }` plus `fridayBreak: { text: "Jumat istirahat 11.00–13.00 untuk Jum'atan", mockup: true }`
  (sourced from owner-2 but unconfirmed against Google, so it's flagged until the owner confirms).
- `wa`: prefilled texts, `reserve` "Halo kupinami, saya ingin reservasi meja." and `event`
  "Halo kupinami, saya ingin bertanya tentang tempat acara di lantai atas." (both `mockup: true`
  wording). Build links with `encodeURIComponent`.
- `hero`, `facilities[]` (name, line), `menu[]` (category, from?: Item, visual, items: `{ name, note?, price?: Item, mockup? }[]`),
  `events` (intro, uses: Item[] all mockup), `praise[]` (paraphrases only), `contact`.
- Every price is `mockup: true`. So are Mie Aceh variants, the kids' menu, Kopi Gayo, the event uses,
  the hero personality line, the prefilled WhatsApp texts, and the omelette and fish-and-chips names, which are descriptive and unknown on the menu.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian: "Draf mockup untuk kupinami Cafe & Resto. Beberapa detail masih contoh sampai Anda konfirmasi." Colours tinta/putih |
| SmoothScroll | layout | starter | Lenis defaults; off under reduced motion |
| Container | all | starter | `--container` 1200px |
| Reveal | Keluarga, Menu, Acara, Tamu, Kunjungi | starter | section-level only, one per section |
| TopBar | top | new | Badge, anchor links (desktop), small WhatsApp pill. Not sticky |
| BadgeMark | top bar, Hubungi | new | Inline SVG redraw of the owner-2 badge: lobed frame, cup above "kupinami", cutlery below. Props `tone: "teal" \| "tinta"`. `aria-label="kupinami"` |
| Hero | hero | new | Name lockup in an inline-block wrapper so the meter matches the wordmark width |
| QuietMeter | hero | new | 24 `<span>` bars, `aria-hidden`, CSS rest state = 6×6px dots; the signature tween |
| WallFrame | hero, Keluarga, Kunjungi | new | putih ring 10px, inset hairline #7CC3A5, radius 4px |
| Flora | hero, Acara | new | Inline SVG hibiscus + orange flower + 2 leaves, `aria-hidden`, positioned to bleed off an edge; max 2 instances |
| Facilities | Keluarga | new | `<ul>` of 5, a 2-col grid inside a WallFrame from 1024px |
| Placemat + MenuTable | Menu | new | 2×2 grid from 1024px; circle visual left, text right; stacked on phone |
| DishArt (MieAceh, Carbonara, CappuccinoSet) | Menu | new | Inline SVG, `role="img"` + Indonesian `aria-label`, each under ~6 KB |
| ScallopCard | Acara | new | putih card with a scalloped top and bottom edge (SVG mask or inline SVG edges) |
| Praise | Kata para tamu | new | Static 2×2 list, no quotation marks, no names |
| Visit | Kunjungi | new | Address, hours, flagged Friday break, buttons, lazy map iframe in a WallFrame |
| ContactBand | Hubungi | new | teal band with one shallow SVG arc on the top edge; footer landmark |

## React Bits (max 2)
None.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | – | The signature is a 20-line GSAP tween (QuietMeter) built on the shop's one real differentiator. Any React Bits text effect on "kupinami" would compete with it. Backgrounds and particles contradict a place loved for being quiet. Count Up on 2,883 reviews would make a listing fact flicker. I browsed the full catalogue (text animations, animations, components, micro interactions, backgrounds) and nothing earns a slot | 0 | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| QuietMeter bars (signature moment) | load, delay 0.15s | `scaleY` from `meter.start[i]` (1.6–3) to 1, transform-origin centre, stagger 0.02 from centre | 1.1s | `expo.out` | final state (dots), no motion |
| Rest of the hero (name, lines, buttons, photo) | none | static from first paint | – | – | – |
| Section blocks (5) | ScrollTrigger `top 85%`, once | autoAlpha 0→1, y 20→0 | 0.6s | `power2.out` | final state |
| Buttons | hover / active (CSS) | overlay `::after` opacity 0→0.12; active `translateY(1px)` | 150ms | ease-out | instant |

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.
The meter tween is one `useGSAP` in QuietMeter with `scope`. CSS renders the bars at rest (dots), and
`gsap.from` animates from the tall pattern, so no-JS and reduced motion show the final state. Bars never repeat.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Fonts: Quicksand 500/700, Figtree 400/600, latin subset only. With Tailwind v4, map them in
  `@theme inline` (`--font-display: var(--font-quicksand), ...`) so the next/font variables resolve.
- Images: `public/img/kupinami-cappuccino.jpg` (crop x0 y900 w1080 h1020 from owner-1, JPEG q≈80, under 180 KB,
  `fetchpriority="high"`, explicit width/height, not lazy) and `public/img/kupinami-omelet.jpg`
  (crop x500 y300 w580 h580, under 60 KB, lazy). Never ship the uncropped owner-1 (Instagram sticker) or owner-2.
- Map iframe `loading="lazy"`, with a putih placeholder ground behind it.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `<html lang="id">`. One `<h1>` (kupinami + Cafe & Resto); h2 per section; h3 per menu group.
- Never put body text in teal-tua on dinding below 17px (4.7:1 passes, but keep body text in tinta).
  Never put teal text on putih or dinding.
- Focus ring: 3px tinta outline, 3px offset; putih on teal-tua.
- Alt text, cappuccino: "Cappuccino dengan latte art di cangkir hijau toska, di atas meja kayu kupinami."
  Omelette: "Omelet dengan potongan daging sapi tumis, paprika, tomat, dan salad wortel."
- External links (WhatsApp, Maps, Instagram, Facebook) use `target="_blank" rel="noopener"`, with visible text, not icons alone.
- Map iframe `title="Peta lokasi kupinami Cafe & Resto"`, with a Petunjuk Arah text link beside it.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "kupinami Cafe & Resto · Cipayung, Jakarta Timur". Description: "Kafe dan resto keluarga
yang tenang di Cipayung: tanpa musik, ada area bermain anak dan musala. Buka setiap hari 07.00–22.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Set the design brief's values: `--step-display` `clamp(3.5rem, 2.2rem + 7vw, 7.5rem)`,
`--step-head` `clamp(2rem, 1.4rem + 2.2vw, 3.25rem)`, `--step-lead` `clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)`,
`--step-body` `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)`, `--step-small` `0.8125rem`; `--leading-body` 1.6;
`--gutter` 20px (32px from 768, 40px from 1024); `--section-y` 64px (112px from 768); `--container` 1200px.
Palette tokens in `@theme`: `tinta`, `putih`, `dinding`, `teal`, `teal-tua`, `kayu`. Replace the starter's
paper/ink/muted/accent and update `.mockup-banner` and `html` to use tinta/putih.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
