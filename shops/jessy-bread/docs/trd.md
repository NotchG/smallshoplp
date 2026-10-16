# TRD: Jessy Bread mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Shop-specific setup:
- `app/layout.tsx`: `<html lang="id">`. Metadata title "Jessy Bread · Toko Roti & Kue di Rawamangun",
  description "Roti dan kue di Jl. Balai Pustaka Timur No. C2, Rawamangun, Jakarta Timur. Buka setiap hari 06.00–22.00."
  `robots` stays `noindex, nofollow`.
- `MockupBanner`: translate to "Draf mockup untuk Jessy Bread. Beberapa detail masih contoh sampai Anda konfirmasi."
  Banner colours: arang ground, abu text.
- Skip link "Langsung ke konten" to `#konten`.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Sourced-but-unconfirmed items also carry `mockup: true` so the owner sees them flagged: the hero
tagline "My Bread is Yours." and every cake price (customer photo of unknown date).

```ts
shop      { name, tagline: Item, address, phone: "(021) 4896888", tel: "+62214896888",
            mapsUrl: "https://maps.google.com/?cid=575248056374486860",
            mapEmbed: "https://www.google.com/maps?q=Jessy+Bread,+Jl.+Balai+Pustaka+Timur+No.+C2,+Rawamangun,+Jakarta+Timur&output=embed",
            hours: "Setiap hari 06.00–22.00", rating: "4,6", reviewCount: "1.009" }
heroCake  Cake                      // Birthday Cake Large, 16 cm, Rp 165.000
cakes     Cake[]                    // 8, in shelf order (design brief §6)
cakeOrder Item                      // [MOCKUP] phone orders with a message on top
breads    { name: Item; price?: Item; art: BreadArt }[]   // 4
breadMore Item[]                    // [MOCKUP] roti sobek, roti abon, ...
upstairs  { lead, facts, dishes: Item[], fromPrice: Item, drinks: ["Es teh", "Es kopi"] }
praise    { title: string; text: string }[]   // 6 paraphrased themes, no names
visit     { wayfinding: Item, parking }
type Cake = { name: string; size?: string; price?: Item; art: CakeArt }   // price absent → "Tanya harga"
```

Prices are written "Rp 165.000" (dot thousands, no trailing ",-"). Times use a dot: "06.00–22.00".

## Components

| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Indonesian text, arang/abu |
| Container | all | starter | `--container` 1200px |
| Reveal | Kue, Roti, Lantai dua, Kata mereka, Kunjungi | starter | section-level only, one per section block |
| SmoothScroll | layout | starter | defaults |
| Logotype | Hero, Footer | new | "Jessy" arang + "Bread" oranye, two lines, "Bread" indented 0.55em, Paytone One. Hero copy is the `<h1>` |
| ActionButton | Hero, Kue, Kunjungi, Hubungi | new | `tel:` / maps link variants; primary (arang fill) and secondary (2px arang outline); min 48px tall |
| CakeArt | Hero, Kue | new | one parametric inline SVG (design brief §6); `role="img"` + Indonesian `aria-label` |
| TentCard | Hero, Kue | new | white price card: name, size, price or "Tanya harga"; overlaps its cake's board |
| HeroCake | Hero | new | CakeArt + TentCard; owns the signature motion |
| CakeCase | Kue | new | charcoal case, shelves of 4 (desktop) / 2 (phone), gold rail under each shelf |
| BreadArt | Roti | new | 4 flat SVGs on a honey-wood rack line |
| CupsArt | Lantai dua | new | two cups (iced tea, iced coffee) with dome lids and an orange round print |
| FacadeArt | Kunjungi | new | small flat drawing of the grey two-storey front, orange trim, oval sign; ≤ 30 shapes |
| MapEmbed | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Jessy Bread">`, 4:3, radius 12px; a plain "Buka di Google Maps" text link under it so the address works without the iframe |
| Footer | end | new | arang ground |

## React Bits (max 2)
None. Checked on reactbits.dev and rejected:

| Component | Where it could go | Why not |
|---|---|---|
| Circular Text | the bag's round "Jessy Bread · Freshly Baked" seal | a rotating badge is decoration with no job, and loops forever |
| Split Text | the logotype | the logotype is the recognition moment and the LCP; it must be there, still, on first paint |
| Count Up | "1.009 ulasan" | counting numbers is a gimmick here; the number is read once |

The signature moment is a few lines of GSAP; no extra dependency earns its weight.

## Motion spec
Follow `motion-rules.md`. One row per animated element:

| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero cake (`HeroCake` art) | load | `y` −14px → 0, `autoAlpha` 0 → 1 (settles onto its board) | 0.45 s | `power2.out` | final state, no motion |
| Hero tent card (signature moment) | load, starts at 0.30 s | `rotationX` −80° → 0, `transformOrigin: "50% 100%"`, `transformPerspective: 700`, `autoAlpha` 0 → 1 over the first 0.2 s | 0.7 s | `expo.out` | upright, static |
| Section blocks (via Reveal) | scroll, `top 85%`, once | `y` 20px → 0, `autoAlpha` | 0.7 s | `power2.out` | final state |
| ActionButton | hover / press | hover `translateY(-2px)`; press `scale(0.98)`; colour does not animate | 0.2 s / 0.15 s | ease-out (CSS) | no transform |

Hero sequence ends at 1.0 s (inside `duration.hero` 1.1). The logotype, copy, hours and buttons
are never animated or hidden. Run the hero timeline in `useGSAP` with a scope ref so it sets
the start state before paint; with JS off everything is in its final state. No other element
animates: the 8 case cards stand upright from the start (no per-card flips, no stagger).

`lib/motion.ts`: keep starter values; add `ease.card = "expo.out"` and `distance.settle = 14`.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; the LCP is the `<h1>` logotype text, visible on first paint.
- 2 font families via `next/font/google`: `Paytone_One` (400) and `Rubik` (400, 500, 700), `subsets: ["latin"]`, `display: "swap"`.
- All product visuals are inline SVG (no raster images at all). Keep each SVG under ~6 KB.
- Map iframe below the fold, `loading="lazy"`.
- No preloaders, no video, no WebGL. Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs checked in design brief §3;
orange text only at display size), visible keyboard focus (2px outline, 3px offset: arang on
light and orange grounds, abu on arang), semantic landmarks (`header`, `main#konten`, `section`
with `aria-labelledby`, `footer`), `role="img"` + Indonesian `aria-label` on every illustration
(e.g. "Ilustrasi kue Blackforest dengan serutan cokelat dan ceri"), tap targets at least 44px,
price cards readable as text (not inside the SVG), `prefers-reduced-motion` honoured everywhere
(Lenis off, GSAP skipped).

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §3–§5. Add `--leading-display: 1.05` (the logotype is two lines) and
`font-variant-numeric: tabular-nums` on prices. Section grounds are full-bleed on the `<section>`;
content sits in `<Container>`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
