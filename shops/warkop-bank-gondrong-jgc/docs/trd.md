# TRD: Warkop Bank Gondrong JGC mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.
`<html lang="id">`. All visible copy is in Bahasa Indonesia.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep the `mockup` flags exactly as in the PRD's sections table):
```ts
shop: { name, kicker, address, addressShort, phoneDisplay: "0812-1248-2907",
        phoneHref: "tel:+6281212482907",
        directionsHref: "https://www.google.com/maps/dir/?api=1&destination=Warkop%20Bank%20Gondrong%20JGC&destination_place_id=ChIJQXT1Ct2LaS4RBb7oxc0tZXU",
        mapsHref: "https://maps.google.com/?cid=8459217836897254917",
        mapEmbedSrc: "https://maps.google.com/maps?q=Warkop%20Bank%20Gondrong%20JGC%2C%20Jl.%20Srikaya%2C%20Jakarta%20Garden%20City&z=17&output=embed",
        whatsappHref: { href: "https://wa.me/6281212482907", mockup: true },
        hours: { label: "Setiap hari", open: "05.30", close: "24.00" },
        rating: { value: "4,6", count: 90 } }
hero:    { sub: { text, mockup: true }, sign: { open: [...], closed: [...] } }
menu:    { heading: { text, mockup: true }, lead, priceNote: { text, mockup: true },
           strips: [{ id, label, tone: "arang" | "kuning" | "merah" | "hijau",
                      items: [{ name, price?, note?, art?: "kopi-hitam" | "es-kopi-susu" | "indomie-telur" | "photo-sachet",
                                mockup, priceMockup? }] }] }
place:   { heading, lead, photo: { src, alt, caption }, spots: [{ title, text }] }
day:     { heading, sub, stops: [{ time, text, mockup }] }
reviews: { heading, note, items: [{ text, sources: [2, 4] }] }   // paraphrases only, no names
visit:   { heading, cta }
contact: { heading: { text, mockup: true }, body: { text, mockup: true } }
meta:    { title, description }
banner:  "Draf tampilan untuk Warkop Bank Gondrong JGC. Belum situs resmi, sebagian isi masih contoh."
```
An item whose name is real (from photos) but whose price is a mockup (kopi hitam, es kopi susu)
puts `data-mockup` on the price element only.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Banner | top | starter | Indonesian copy from `content.ts` |
| Container, `.section`, `.t-*` | all | starter | Every section uses these |
| Reveal | S2–S7 | starter | Section-level only, wrapping each section's content. Never in the hero |
| Rail | Hero, S2, S7 | new | 6px `arang` bar, `aria-hidden`; optional small hooks where strips or the sign attach |
| HeroName | Hero | new | `h1` with three `display:block` spans (Warkop / Bank / Gondrong) and an inline "JGC" plate. Spans 1–2 get `padding-inline-end` = sign width + 16px. Shrikhand, text-shadow shade |
| HangingSign | Hero | new | Strings (2px arang lines from two holes to one hook) plus a kuning plate: "BUKA" / "05.30–24.00" / "tiap hari". Width `clamp(8rem, 6.512rem + 6.095vw, 12rem)`. Positioned absolutely at the top-right of the name block, hook on the rail. Client-only open/closed swap from `Intl.DateTimeFormat` with `timeZone: "Asia/Jakarta"`, run in `useEffect` so SSR shows BUKA |
| HeroPhoto | Hero | new | owner-1 via `<img>` with explicit width and height and `fetchpriority="high"`, no lazy loading, no fade-in. Phone: full bleed below the buttons. Desktop: column 8 to the right viewport edge, `object-fit: cover`, `object-position: 50% 40%` |
| ActionButton | Hero, S6, S7 | new, or the starter's if it has one | Primary: kuning fill with arang text. Secondary: 2px krem border with krem text on dark grounds, or a 2px arang border with arang text on light grounds. Min height 48px, Archivo 700 `--step-body` |
| MenuStrip + SachetTile | S2 | new | `tone` sets the background and `currentColor`. 8px crimped seal top and bottom via CSS `mask` (repeating zigzag); 2px dashed perforation where tiles meet. Strip label on an arang tab under the rail. Item `name` and `price` stacked with a 4–8px gap |
| ArtKopiHitam, ArtEsKopiSusu, ArtIndomieTelur | S2 | new | Inline SVG, `viewBox="0 0 96 96"`, lines in `currentColor`, one accent fill, `role="img"` and an Indonesian `aria-label` |
| PhotoTile | S2 | new | Sachet crop of owner-1 at the top of the "Di gerobak" strip, 4:3, `loading="lazy"` |
| PlaceSection | S3 | new | owner-3 crop at 4:5 with caption; spots as a `<ul>` |
| DayLine | S4 | new | `<ol>` of three stops. Horizontal from `md` up, vertical below. The line is a pseudo-element |
| ReviewList | S5 | new | `<ul>`, 2×2 from `md`, a 2px arang top border per item, no quote marks |
| MapEmbed | S6 | new | `<iframe loading="lazy" title="Peta lokasi Warkop Bank Gondrong JGC">` at 4:3. If it doesn't render in the screenshots, swap it for a krem panel with the address and a "Buka di Google Maps" link |
| Footer | end | new, or the starter's | Arang; name · short address · hours · "Info dari Google Maps" |

## React Bits (max 2)
**None.** The one signature (a hanging sign swaying once) is a few lines of GSAP, and nothing
else on this page needs an effect.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

Considered and rejected on reactbits.dev:
- **Lanyard** (swinging badge): the closest match to the sign, but it needs three.js and
  physics, which is WebGL the brief doesn't justify.
- **Sticker Peel**, **Tear Ticket**: drag toys. The perforation is nice, but a menu isn't a toy.
- **Scroll Velocity**, **Logo Loop**: generic marquees.
- **Count Up**: counting the rating up is decoration.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): HangingSign | load, 0.25s after mount; hero text and photo already visible | `rotation` 0 → −6 → 2.5 → −1 → 0, `transformOrigin: "50% 0%"` | 0.35 + 0.45 + 0.4 + 0.35s, once | `sine.out` for the first segment, then `sine.inOut` | Hangs at rest, no tween created |
| Section content, S2–S7 (one per section) | ScrollTrigger `start: "top 85%"`, `once: true` | `y` 20 → 0, `opacity` 0 → 1 | 0.6s | `power2.out` | Final state, no tween |
| MenuStrip | `:hover` on `(hover: hover)` devices | `rotate(1.5deg)` around the hook | 200ms | ease-out (CSS) | None |
| ActionButton | `:active` | `translateY(1px)` | 120ms | ease-out (CSS) | None |

Hover colour changes on buttons are instant, not transitioned. The BUKA/TUTUP swap is a text
change, not an animation. Use `gsap.timeline` inside `useGSAP` with the hero as scope; use
`gsap.from` for reveals so content is visible with JS off.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5s on a mid-range phone; nothing animates before the hero text is visible.
  The LCP element is the hero name or owner-1, and neither animates.
- At most 2 font families via `next/font`, subset, `display: swap`: Shrikhand 400 (latin) and
  Archivo variable (latin, `axes: ["wdth"]`).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images go in `site/public/photos/`, made from the originals (which stay untouched):
  - `owner-1-hero.jpg`: 1080 wide, quality ~75, ≤ 250 KB.
  - `owner-1-sachet.jpg`: a crop of the hanging strips, roughly x 170–1080 and y 520–1200 of
    the original, at 800 wide.
  - `owner-3-malam.jpg`: the top 1204×1500 (drops the date stamp), 1000 wide, ≤ 200 KB.
  - Use `sips` (macOS) or sharp.
- The map iframe and every image below the hero are lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Pairs are checked in the design brief §3. Never arang text on merah, and never kuning body
  text on merah.
- Focus ring: 3px kuning on merah, hijau and arang grounds; 3px arang on krem and semen.
- The sign is real text inside the hero's `<header>`. The strings are `aria-hidden`.
- Alt text in Indonesian. owner-1: "Gerobak merah Warkop Bank Gondrong digantungi renceng kopi
  dan minuman sachet". owner-3: "Suasana malam di warkop, di bawah pohon mangga".
- Menu strips are `<ul>`s, with each strip label as a heading-less list label (`aria-labelledby`).
- Phone link text includes the number.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "Warkop Bank Gondrong JGC · Warung kopi di Jakarta Garden City"
- Description: "Warung kopi di Jl. Srikaya, Jakarta Garden City, Cakung. Buka setiap hari 05.30–24.00. Kopi pahit, es kopi susu, teduh di bawah pohon mangga."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Use the exact clamp values from design brief §4 and §5.
- `@theme` colours: `--color-merah #BA2118`, `--color-krem #FFF1D6`, `--color-arang #1F1A17`,
  `--color-kuning #FFC233`, `--color-hijau #2D5A32`, `--color-semen #DDD7CC`.
- `@theme` fonts: `--font-display` (Shrikhand), `--font-sans` (Archivo).
- Section grounds in order: Hero merah, Ngopi krem, Mangga hijau, Subuh arang, Kata semen,
  Kunjungi krem, Hubungi merah, footer arang.
- Prices and times use `font-variant-numeric: tabular-nums`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
