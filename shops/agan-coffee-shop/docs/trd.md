# TRD: Agan Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Starter edits this shop needs:
- `app/layout.tsx`: `<html lang="id">`. Metadata title "Agan Coffee · Kopi di Jl. Angkasa, Halim". Description "Agan Coffee, kedai kopi di Jl. Angkasa No.13A, Halim Perdanakusuma, Jakarta Timur. Buka Senin–Sabtu 08.00–23.00." Keep `robots: { index: false, follow: false }`.
- `components/MockupBanner.tsx`: the text becomes "Draf mockup untuk Agan Coffee. Teks bergaris titik-titik masih contoh sampai dikonfirmasi." Style: `steel` ground, `lettering` text, 13px.
- `globals.css`: add `[data-mockup] { text-decoration: underline dotted; text-decoration-thickness: 1px; text-underline-offset: 0.2em; }` for text elements, so the banner's sentence is true. Image figures carry the attribute on their caption text only.

## Content model
All copy and facts live in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. Shape:

```ts
shop      { name: "Agan Coffee", listingName: "Agan Coffee Shop", type: "Kedai kopi",
            address: "Jl. Angkasa No.13A, RT.1/RW.9, Halim Perdanakusuma, Kec. Makasar, Jakarta Timur 13610",
            addressShort: "Jl. Angkasa No.13A, Halim Perdanakusuma",
            phoneDisplay: "0877-7105-1994", phoneTel: "+6287771051994",
            whatsapp: { url: "https://wa.me/6287771051994", mockup: true },
            instagram: { handle: "@agancoffee", url: "https://instagram.com/agancoffee" },
            directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Agan%20Coffee%20Shop&destination_place_id=ChIJGWNHZhbzaS4RBJb9lwZuDrA",
            mapEmbedUrl: "https://maps.google.com/maps?q=Agan%20Coffee%20Shop%2C%20Jl.%20Angkasa%20No.13A%2C%20Halim%20Perdanakusuma&z=17&output=embed",
            rating: { value: "4,6", count: 292 } }
hours     [{ day: "Senin", js: 1, open: "08.00", close: "23.00" }, … Sabtu (js 6), { day: "Minggu", js: 0, closed: true }]
hero      { tagline: Item(mockup), caption: Item }
drinks    { intro: Item(mockup), groups: [{ title: "Coffee", items: MenuItem[] }, { title: "Selain kopi", items: MenuItem[] }],
            footnote: "Harga dan nama bergaris titik-titik masih contoh." }
food      { intro: Item(mockup), items: MenuItem[] }
MenuItem  { name: string; nameMockup?: boolean; price?: string; priceMockup?: boolean;
            note?: Item; tag?: string; windowCase?: "upper" | "lower" | "latte" }
photos    { [key]: { src, alt, caption: Item[], aspect, position } }   // caption is an array so only the
                                                                      // mockup name inside it gets data-mockup
amenities Item-pairs { name, note }  (all sourced; intro is mockup)
praise    string[]  (4 paraphrases, Indonesian, no names, no quote marks) + note
visit     { notes: ["Parkir terbatas, lahannya sempit.", "Boleh merokok di dalam ruangan."], photoCaption }
contact   { closing: Item(mockup) }
```

Exact strings are in the PRD sections table and design brief §6–7. The drinks, in order: Espresso (upper), Americano Rp 22rb*, Cappuccino (lower) Rp 28rb*, Kaffee Latte (latte), Macchiato, Kopi Jawa* with note "tubruk atau V60"* and tag "favorit di ulasan", and Es Kopi Susu Agan* Rp 25rb* with note "kopi susu dingin dengan gula aren"*. Then under "Selain kopi": Iced Matcha Latte* Rp 30rb*, Red Velvet Frappe*, Chocolate*. The food: Croissant Butter* Rp 20rb*, Dimsum Ayam (4 pcs)* Rp 22rb*, Singkong Goreng Keju*, Kentang Goreng*, Nasi Goreng*. (* = mockup.)

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container, Reveal, SmoothScroll, MockupBanner | all | starter | Reveal on Menu, Teman ngopi, Nongkrong and Kata mereka only |
| `Awning` | Hero | new (server) | Dome strip with seams (a `repeating-linear-gradient` of 1px steel/15% lines: real panel seams), a 2px steel seam, then the valance with the `h1` and two `aria-hidden` repeat spans (hidden below 768px), then the scallop row (an inline SVG `<pattern>` of half-circles, fill `awning`). `overflow-x: clip` on the band so the repeats never cause horizontal scroll |
| `OpenSign` | Hero | new (client) | Hook, string triangle (inline SVG, 1.5px steel) and plate (kuning, 3px steel border, 6px awning stripes at the top and bottom edges). The SSR/no-JS text is "JAM BUKA" / "Senin–Sabtu 08.00–23.00 · Minggu tutup". After mount it computes the status (below) and runs the signature swing |
| `ProductPhoto` | Hero, Menu, Teman ngopi, Nongkrong, Kunjungi | new | `<figure>` holding an `<img>` with `aspect-ratio` + `object-fit: cover` + `object-position`, an optional 6px steel frame, and a `<figcaption>` 8px below at `--step-small` |
| `MenuList` | Menu, Teman ngopi | new | `<ul>`; each `<li>` has the name at lead, then the price inline 12px after it (`kuning` on steel, `awning` on concrete), with the note and tag on a second line at body/small. `windowCase` maps to CSS classes |
| `Amenities` | Nongkrong | new | A 2×2 grid at ≥768px; name at lead/700, note at body |
| `Praise` | Kata mereka | new | A 2-column list at ≥768px, a 1px roster rule above each item, the text at lead |
| `HoursTable` | Kunjungi | new (client for "today") | A `<table>` with a caption for screen readers. The Minggu row is in `steel-soft` on a flat row tint of steel at 6% (no stripes). Today's row gets 700 weight and a "hari ini" tag; the full table renders on the server |
| `MapEmbed` | Kunjungi | new | `<iframe loading="lazy" title="Peta lokasi Agan Coffee" referrerpolicy="no-referrer-when-downgrade">`, 280px tall on phone and 320px on desktop, with a 6px steel frame |
| `ActionButton` | Hero, Kunjungi, Hubungi | new | `<a>` with variants primary/secondary × ground (concrete/awning). The hover overlay is an opacity layer (pseudo-element) and press is `scale(0.98)` |
| `RosterBand` | Hero base | new (CSS only) | A 40/56px strip of square tiles, each drawn with a `conic-gradient` in four facets (roster and roster shaded with steel at 10/18/26%) to read as the pyramid relief. Geometry only, `aria-hidden`, never behind text |

### Opening status logic (`lib/status.ts`)
Work out the time with `Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })`, using only the listing hours.
| When (Jakarta time) | Plate title | Sub-line |
|---|---|---|
| Mon–Sat 08:00–22:59 | BUKA | Hari ini 08.00–23.00 |
| Mon–Sat before 08:00 | TUTUP | Buka hari ini pukul 08.00 |
| Mon–Fri from 23:00 | TUTUP | Buka lagi besok 08.00 |
| Sat from 23:00, or any time Sunday | TUTUP | Buka lagi Senin 08.00 |
The same function feeds `HoursTable`'s "hari ini" row. Unit-check it by passing dates for Sunday 10:00, Tuesday 07:30, Tuesday 12:00 and Saturday 23:30.

### Images
Copy `shops/agan-coffee-shop/photos/owner-1.jpg` to `owner-7.jpg` into `site/public/photos/`, downsized with
`sips -Z 1600 -s formatOptions 72 <file> --out site/public/photos/<file>` (owner-3 and owner-5 are already smaller, so just copy them).
Never copy `photo-*.jpg`. Crops are done in CSS:
| File | Where | aspect | object-position | Must not show |
|---|---|---|---|---|
| owner-2 | Hero | 5/4 (phone 4/5) | 50% 70% | n/a |
| owner-4 | Menu | 4/5 | 50% 85% | the "MBS" T-shirt logo at the top |
| owner-5 | Menu | 1/1 (phone 4/5) | 50% 50% | n/a |
| owner-7 | Teman ngopi | 4/5 | 50% 100% | n/a |
| owner-6 | Teman ngopi | 4/5 | 50% 100% | n/a |
| owner-3 | Nongkrong | 16/9 | 80% 30% | the bin, kettle and blue bucket at the foot of the left steps |
| owner-1 | Kunjungi | 2/1 | 50% 0% | the woman's face (it starts about 47% down the image) |
Alt text in Indonesian describes the food or place (for example "Dua croissant di atas serbet bermotif dan secangkir latte dengan latte art angsa"). The hero image gets `fetchPriority="high"`; every other image gets `loading="lazy"`.

## React Bits (max 2)
**None.** The one signature moment is a damped swing on the shop's own BUKA sign, done in GSAP in about 15 lines, and no library component improves on it. Considered and rejected:
| Component | Where it might have gone | Why not |
|---|---|---|
| Curved Loop | The awning valance text | A continuous marquee breaks rule 7 (text effects run once) and makes the real awning look like a ticker |
| Split Flap Text | The status line, as a Halim airport departure board | Airport costume for a neighbourhood café, it loops, and it isn't the headline |
| Flip Card | The BUKA/TUTUP sign | The status must be worked out from real hours, not flipped by the visitor |
| Split Text / Blur Text | The h1 | Splitting a connected script breaks its joins and would hide the LCP text |
| Tilted Card | The product photos | Hover decoration with no job |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| BUKA sign (signature moment) | Mount, after the status swap, delay 0.25s, only if `scrollY < 200` | `rotation` 0 → 7 → -4.5 → 2.5 → -1 → 0 deg, `transformOrigin` at the hook (`50% 0` of the sign wrapper, which includes the strings) | 0.30 + 0.34 + 0.30 + 0.28 + 0.26 ≈ 1.5s (a GSAP timeline) | `sine.inOut` per segment | No swing, static at 0° with the status text still swapped in |
| Menu andalan / Teman ngopi / Nongkrong / Kata mereka content | ScrollTrigger at top 85%, once | `autoAlpha` 0→1, `y` 20→0 | 0.6s | `power2.out` | Final state, no motion |
| ActionButton hover | `:hover` / `:focus-visible` | Overlay `opacity` 0→1 | 0.18s | ease-out | Instant |
| ActionButton press | `:active` | `transform: scale(0.98)` | 0.15s | ease-out | None |
The h1, awning, photos, Kunjungi and Hubungi never animate. No looping motion anywhere. Build the sign timeline inside `useGSAP({ scope })` so it dies with the component. `lib/motion.ts` tokens are as in design brief §8.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5s on a mid-range phone. The LCP element is the h1 text or the hero photo, and neither animates.
- Two families via `next/font/google`: `Yellowtail({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-script" })` and `Besley({ subsets: ["latin"], display: "swap", variable: "--font-serif" })` (variable weights, normal style only). Map them in `@theme` as `--font-display` (script) and `--font-body` (Besley).
- No preloaders, no video, no WebGL. The map iframe is lazy and below the fold.
- Photos at most 1600px on the long edge. Total image weight on first load under 400KB (only owner-2 is eager).
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (the pairs are verified in design brief §3), visible keyboard focus (the ring colour changes per ground, §3), landmarks (`header` = awning + hero, `main`, `footer` = Hubungi), and alt text on every image. Tap targets are at least 44px (buttons 52px). `prefers-reduced-motion` is honoured everywhere: Lenis off, GSAP skipped. The valance repeats and the RosterBand are `aria-hidden`. The sign is a `<p>` whose visible text reads correctly ("BUKA. Hari ini 08.00–23.00"). Windowed menu names keep normal text and change case only through CSS. Theme `::selection` from the palette.

## SEO / meta
Title and description from `content.ts`, in Indonesian. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Set `--leading-display: 1.1` (not the starter's 0.95, because the script needs room for its loops). Add a `.t-script-h3 { font-size: calc(var(--step-lead) * 1.25); line-height: 1.2; font-family: var(--font-display); }` helper. Put `data-check` on the sign title, one menu item name, one price and one paraphrase, so `report.json` lists their sizes next to the h1/h2/h3.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
