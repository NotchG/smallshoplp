# TRD: Waltie's Rooftop Café mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

`<html lang="id">`. All visible strings in Bahasa Indonesia. Shape (names are a guide):

```ts
shop      { name: "Waltie’s Rooftop Café", short: "Waltie’s", sub: "Rooftop Café",
            address: "Arion Mall, Jl. Paus No.1, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
            addressShort: "Arion Mall, Rawamangun",
            phone: "0813-1473-5996", tel: "+6281314735996",
            whatsapp: { href: "https://wa.me/6281314735996", mockup: true },
            maps: "https://maps.google.com/?cid=17211920335788201948",
            mapEmbed: "https://www.google.com/maps?q=Waltie%27s+Rooftop+Caf%C3%A9,+Arion+Mall,+Rawamangun&output=embed",
            instagram: { handle: "@walties_rooftop", href: "https://instagram.com/walties_rooftop" },
            rating: { value: "4,6", count: 432, source: "Google" } }
hero      { tagline (mockup), hoursToday: "Buka hari ini 09.00–22.30", image }
menu      { intro (mockup), featured: Dish[5], categories: { label, items: Item[] }[5], note (mockup) }
            Dish { name, desc, price?, visual: "photo" | "soto" | "platter" | "kopi" | "cookies", mockup }
            Item { name, price?, mockup: true }
rooms     [{ title, text, image, chips: { label, mockup }[] }] × 2, lead (mockup)
stay      { lead (mockup), points: { title, text }[3] }
themes    { source: "Rangkuman dari ulasan Google", items: { title, text }[4] }
visit     { access (mockup placeholder), hours: { day, time }[7] (Senin…Minggu, "09.00–22.30") }
contact   { lead (mockup) }
meta      { title: "Waltie’s Rooftop Café · Rooftop santai di Rawamangun", description }
```

Prices are strings ("Rp 35rb"), `mockup: true`. A name that's real but a price that's mocked
(Soto Betawi) still renders `data-mockup` on the price element.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top | starter | Indonesian text, e.g. "Draf mockup untuk pemilik, belum resmi" |
| Container, Reveal | all | starter | Reveal at section level only, never on hero |
| Hero | Hero | new | h1 = "WALTIE’S" (display) + "ROOFTOP CAFÉ" (lead, Antonio, lampu); owner-3 via `next/image` with `priority`, `sizes="(min-width:1024px) 1170px, 100vw"` |
| Strand | Hero, Hubungi kami | new | Inline SVG, `aria-hidden`. Two variants: desktop (viewBox 1440×96, 4 swags, 21 bulbs) and phone (390×64, 3 swags, 9 bulbs), swapped by CSS at 768px; `preserveAspectRatio="xMidYMin slice"`. Each bulb = wire cap + off-glass + lit-glass + halo (radial gradient lampu → transparent). Prop `lit` for the static closing strand |
| useLampu | Hero | new | `useGSAP` scoped to the hero; runs the signature timeline (below) |
| TegelBand | Menu andalan | new | Full-bleed 24px strip, SVG pattern tile as CSS background (data URI), 2px kayu rules top and bottom |
| TegelTile | Dish tabletops, Kata mereka marks | new | One SVG `<pattern>` medallion (four petals: lampu, bata, daun on krem), used at 4:3 tabletop size and as a 20px mark |
| DishCard | Menu andalan | new | Tabletop (TegelTile + 6px kayu frame) with the illustration centred, then name and price ≤ 8px below |
| Illustrations: SotoBetawi, PlatterWalties, CookiesCream, EsKopiSusu | Menu andalan | new | Flat top-down SVG, six palette colours only, ≤ 40 shapes, `role="img"` + Indonesian `aria-label` |
| BolvanoFeature | Menu andalan | new | owner-2 at `aspect-ratio: 9/10`, `object-position: top` |
| MenuList | Menu andalan | new | 5 columns ≥1024px, 2 columns below; category label Antonio `--step-lead`; items `--step-body`, price on the next line in bata |
| Rooms | Dua suasana | new | owner-1 `8/9`, owner-4 `8/7`, both `object-position: top`; chips `--step-small` |
| StayList | Betah berjam-jam | new | 3 points divided by 1px krem/30% rules |
| Themes | Kata mereka | new | 2×2 on desktop; `<ul>`, not `<blockquote>`, no quote marks |
| Visit | Kunjungi kami | new | Map `<iframe loading="lazy" title="Peta lokasi Waltie’s Rooftop Café">` at `aspect-ratio: 4/3`; address; hours `<table>` max 18rem |
| Contact + Footer | Hubungi kami | new | Strand `lit`; WhatsApp button (krem on bata), phone and Instagram links |
| ActionButton | Hero, Kunjungi, Hubungi | new | `primary` (lampu fill, malam text), `secondary` (krem 1.5px outline on dark), `onBrick` (krem fill, bata text); ≥ 48px tall, 4px radius; external links `target="_blank" rel="noopener"` |

Assets: copy only `owner-1.jpg`…`owner-4.jpg` from `shops/walties-rooftop-cafe/photos/` to
`site/public/photos/`. Never copy `photo-*.jpg`. Alt text (Indonesian):
owner-3 "Teras rooftop Waltie’s di malam hari, lampu gantung di pohon dan gedung kota di belakang";
owner-1 "Meja bermotif tegel dan kursi kayu di teras rooftop, dikelilingi tanaman dan lampu gantung";
owner-2 "Bolvano: pisang, yogurt, saus buah naga dan stroberi dalam mangkuk hitam";
owner-4 "Ruang dalam ber-AC dengan kursi abu-abu, meja kayu dan tanda Free Wifi Area".

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| None | — | The signature moment (bulbs switching on) is specific to Waltie's terrace and is built directly with GSAP. Every React Bits option would either compete with it or add motion with no job | 0 | — |

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

Considered on reactbits.dev (2026-10-21) and rejected:
- **Glare Hover** (light across a glazed tile): hover-only, so phone visitors never see it, and it adds a second light effect.
- **Masked Heading / Split Text / Blur Text** on "WALTIE’S": a second signature moment on top of the bulbs.
- **Circular Text** (a rotating "buka setiap hari" badge): permanent motion with no job.
- **Light Rays / Particles / Dot Grid** backgrounds: background noise, which motion-rules.md rule 7 excludes, and it would push toward the "neon glow" template.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): bulb lit-glass + halo, per bulb, left → right | load, delay 0.2 s | opacity 0 → 1 (off-glass stays at 0.35 underneath) | 0.18 s each; starts spread over 0.9 s total (`stagger: { amount: 0.9 }`) | power2.out | final state, no motion: all bulbs lit |
| Hero panorama scrim (malam layer over owner-3) | at 0.9 s on the same timeline | opacity 0.45 → 0 | 0.8 s | power2.out | scrim absent |
| Sections 2–7 | ScrollTrigger `top 85%`, once | y 20 → 0, opacity 0 → 1 | 0.6 s | power2.out | static, visible |
| Buttons | hover / focus-visible / active | translateY 0 → -2px; glow pseudo-element opacity 0 → 1; active translateY 0 | 180 ms (CSS) | cubic-bezier(0.16, 1, 0.3, 1) | colour/outline change only, no movement |

Initial "off" state: an inline `<script>` in `layout.tsx` `<head>` adds `js` to `<html>`. The
CSS `@media (prefers-reduced-motion: no-preference) { .js .bulb-lit, .js .bulb-halo { opacity: 0 } .js .hero-scrim { opacity: .45 } }`
sets it before first paint, so there is no lit → off → lit flash. Without JS or with reduced
motion, the page shows the final state. Only decoration starts hidden; text and buttons never.
If the timeline hasn't started 2 s after hydration (GSAP failed), a fallback removes the `js`
class.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here: Antonio (500–700) and Gantari (400–600), latin.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- owner-3 is the only `priority` image. The map iframe is `loading="lazy"`. Illustrations are inline SVG (no requests). Halos use one shared `<radialGradient>`, not CSS `filter: blur`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Here: focus ring 2px lampu on dark grounds and 2px bata on krem, offset 3px. One `<h1>` (name
+ sub), one `<h2>` per section. Strands and tegel decoration are `aria-hidden`. The hours table
uses `<th scope="row">` for days. Contrast pairs are listed in design-brief.md §3; `lampu` is
never used for text on `bata`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
Title "Waltie’s Rooftop Café · Rooftop santai di Rawamangun"; description in Indonesian built
from facts only (rooftop café at Arion Mall Rawamangun, open daily 09.00–22.30, Indonesian and
Western food, coffee). No LocalBusiness JSON-LD in the mockup.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design-brief.md §4–5. Palette tokens go in `@theme` as `--color-malam`,
`--color-krem`, `--color-lampu`, `--color-bata`, `--color-daun`, `--color-kayu`; fonts as
`--font-display` (Antonio) and `--font-body` (Gantari).

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
