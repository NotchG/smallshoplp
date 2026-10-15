# TRD: ULUSALU coffee and roastery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. No extra dependencies.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Copy comes verbatim from the PRD's "Copy drafts". Shape (names are suggestions; keep the starter's conventions where they exist):
- `shop`: `name` "ULUSALU coffee and roastery", `wordmark` "ULUSALU", `sub` "coffee and roastery",
  `phone` "0812-8058-2016", `tel` "+6281280582016", `address` "Jl. Jakarta Garden City Boulevard
  Unit A1, Cakung Timur, Cakung, Jakarta Timur 13910", `area` "Di area food garden Jakarta Garden City".
  Also `directionsUrl`
  `https://www.google.com/maps/dir/?api=1&destination=ULUSALU+coffee+and+roastery&destination_place_id=ChIJS1vi9VqLaS4RaFDBGn2cK1k`,
  `mapsUrl` `https://maps.google.com/?cid=6425401354507866216` and `whatsapp`
  `https://wa.me/6281280582016` (mockup), with the place id and cid from raw.json.
- `hours`: seven entries `{ day: "Senin", short: "Sen", open: "07.00", close: "22.00", closeMin: 1320 }`,
  with Jumat and Sabtu closing "24.00" (1440). JS weekday 0 = Minggu.
- `hero`: `line` (mockup), `caption` (desktop), `captionShort` (phone, one line), `staticHours` "Buka setiap hari mulai 07.00".
- `roaster`: `heading`, `fact`, `claim` (mockup), `beans { name, size, price }` (mockup), `brew` (mockup).
- `favorites`: two shelves `{ label, items: [{ name, note, illustration, mockup? }] }`.
- `menu`: `{ categories: [{ name, items: [{ name, price?, desc?, spicy?, mockup? }] }], note }` (note is mockup).
- `panes`: four `{ label, title, detail, mockup? }`.
- `reviews`: `{ rating: "4,7", count: 91, label, items: [{ topic, text }] }`. Texts are
  paraphrases written in Indonesian, never the review wording, with no names.
- `contact`: `heading`, `line` (mockup), `whatsappLabel` (mockup).
- `meta`: `title`, `description`, `banner`.

Mockup flags: the hero line; roaster claim, beans, price and manual brew; the name "Kopi hitam
dingin"; the menu prices and price note; the breakfast framing in the "Pagi" pane; WhatsApp; the
contact line; the illustration sets (one flag per section).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top | starter | Text: "Draf: situs contoh untuk ULUSALU, belum resmi." |
| Container | all | starter | `--container` 1240px |
| Reveal | sections 2–8 | starter | section-level only |
| Nav | top | new | Wordmark (Extra Condensed 700, `--step-lead`); links Favorit, Menu, Kunjungi (≥768px); "Telepon" button always. Not sticky |
| SlatWall | Hero | new | Slats generated from a `lengths[]` array (desktop 24 slats on a 60px pitch, phone 11 on a 36px pitch), each with a lamp element (radial-gradient `lampu` → transparent, plus a 2px lit edge). Brick SVG pattern behind. `aria-hidden` |
| useLampSweep | Hero | new | The signature timeline (`useGSAP`, scoped to the hero) |
| TodayHours | Hero, Kunjungi | new (client) | Reads day and minutes in `Asia/Jakarta` via `Intl.DateTimeFormat`; returns today's entry, open/closed and the today index. Renders `staticHours` on the server; swaps after mount inside a reserved min-height |
| ButtonLink | Hero, Kunjungi, Hubungi | new | Variants: solid (`bilah` fill), outline, inverted (on `bilah`). Min height 48px, text `--step-body` 600 |
| RoasterDrawing, BeanBag | Dari roaster kami | new | Inline SVG, white line on `roaster`; the bag uses kraft #B88E5E with a `bata` label |
| PastryCase, Shelf, ShelfItem | Favorit pelanggan | new | Two shelves of four; shelf line 2px `bilah` plus a 6px `lampu` strip at 35% opacity beneath; tag is a `bilah` chip with `bata` text |
| illustrations/*.tsx | Favorit | new | 8 SVG components, spec in design brief §6 |
| MenuColumn, MenuItem, SpicyChip | Menu | new | Price inline 12px after the name. SpicyChip: small chilli icon (SVG) + "Pedas" in `roaster`, 1px `roaster` border |
| WindowPanes | Untuk keluarga & WFC | new | CSS grid on `taman`; 6px `bata` mullions via grid gap over a `bata` backing, plus a transom row holding the labels |
| Reviews | Kata mereka | new | Rating block + 2×2 grid; label "Diringkas dari ulasan Google." |
| HoursSlats | Kunjungi kami | new | Reuses the SlatWall slat/lamp parts; length ∝ (close − 07.00); today's lamp lit with label "Hari ini"; visible `<dl>` text list beside it. Chart `aria-hidden` |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi ULUSALU coffee and roastery">` with src `https://www.google.com/maps?q=ULUSALU+coffee+and+roastery,+Jakarta+Garden+City&output=embed`, 4:3, 1px `bilah` border. A plain "Buka di Google Maps" link sits under it |
| Contact, Footer | Hubungi kami | new | On `bilah`; inverted buttons; footer in `--step-small` |

## React Bits (max 2)
None. The signature (lamps switching on) is a dozen GSAP tweens on the shop's own slat elements,
and the shop is calm and quiet, so nothing else should move.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | – | – | – |
Considered and declined: **Micro Slats** (a slat wall that rolls like a sea in perspective; this
shop's slats are still and stepped, and a looping background breaks the calm room). **Count Up**
(animating the 4,7 rating is decoration on a listing figure). **Split Flap Text** (a departure
board belongs to transit, not this cafe). **Fade Content / Animated Content** (duplicate the
starter's Reveal).
Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero lamps (signature moment) | load, after hydration, delay 0.15s | per lamp: opacity 0→1, scaleY 0.92→1 (origin top); stagger 0.03s left→right | 0.45s each, ~1.1s across | power2.out | lamps on, no motion |
| Hero status (dot + "Buka sekarang / Sedang tutup") | same timeline at 0.9s | opacity 0→1, y 8→0 | 0.4s | power2.out | shown, no motion |
| Sections 2–8 | ScrollTrigger `top 85%`, once | opacity 0→1, y 20→0 | 0.6s | power2.out | final state, no motion |
| Buttons, nav links | hover / press (CSS) | translateY(-1px) on hover, scale(0.98) on press; colour swaps instantly (not transitioned) | 180ms | ease-out | colour swap only, no transform |
| Kunjungi today slat | none | static highlight | – | – | – |

The lamps start dark only under `html.js` (class set by an inline script in `<head>`), so with JS
off they render lit. Hero text and photo are never hidden or animated. No loops.
Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Specific to this shop: owner-1.jpg (577 KB, 1600×2133) ships as resized 800w and 1200w WebP
  (≤ 180 KB each) with a JPG fallback. It loads eagerly with `fetchPriority="high"` and explicit
  width and height. All illustrations are inline SVG, ≤ 40 KB together. The map iframe is lazy.
  There are no other images.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Specific to this shop:
- Focus ring: 2px `bilah` with 3px offset on light grounds, 2px `bata` on `roaster`, `taman` and `bilah`.
- Lamp colour `lampu` is never text on a light ground; open/closed and "Hari ini" are always words, not only light.
- Slats and the hours chart are `aria-hidden`; the `<dl>` list carries the hours.
- "Pedas" is text, not only an icon.
- Alt text in Indonesian. Hero: "Nasi goreng dengan telur ceplok, kerupuk, tomat dan selada, dan kopi panas di cangkir hitam ULUSALU, di atas meja marmer". Illustrations: "Ilustrasi Aren Latte" and so on.
- The phone link is `tel:+6281280582016`. External links open in the same tab, except the map link.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title: "ULUSALU coffee and roastery · Kopi & makan di Jakarta Garden City". Description: "Coffee
shop dan roastery di Jakarta Garden City, Cakung. Aren Latte, Mushroom Cream Soup, nasi goreng
dan pastry. Buka setiap hari mulai 07.00."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §4–5. Fonts: `Sofia_Sans` (400, 600) and `Sofia_Sans_Extra_Condensed`
(700, 800) from `next/font/google`, exposed as CSS variables and mapped in `@theme`. If an import
name differs in the installed Next version, use the name it exports for the same family; never
swap in another family. The hero wordmark has `white-space: nowrap` and must fit at 320px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
