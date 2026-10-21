# TRD: SEATAP Kopitiam mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. All visible copy is Bahasa Indonesia.

Keep the starter's `Item = { text: string; mockup?: boolean }` and add:
```ts
type Tile = "botol" | "krem" | "kunyit" | "bata" | "sage";
type Product = {
  id: "esKopiSusu" | "singkongGoreng" | "pisangGoreng" | "buburKacangHijau" | "esTeh" | "kuePandan";
  name: Item; price?: Item; note: Item; tile: Tile; art: string; // art = aria-label
};
type Day = { day: string; short: string; dow: number; open: string; close: string }; // dow: 0 = Minggu
```
| Export | Content (source) | mockup |
|---|---|---|
| `shop.name` | "SEATAP Kopitiam" | no |
| `shop.tagline` | "Coffee · Eat · Friends" | no (photos) |
| `shop.address` | "Arundina, Jl. Lap. Tembak No.A10, Cibubur, Ciracas, Jakarta Timur 13720" | no |
| `shop.phone` / `phoneHref` | "0811-953-156" / `tel:+62811953156` | no |
| `shop.whatsappHref` | `https://wa.me/62811953156` | **yes** |
| `shop.mapsUrl` | `https://maps.google.com/?cid=13652005133390330378` | no |
| `shop.directionsUrl` | `https://www.google.com/maps/dir/?api=1&destination=SEATAP%20KOPITIAM&destination_place_id=ChIJM6n_r-PtaS4RCjqKX1aqdb0` | no |
| `shop.mapEmbedUrl` | `https://www.google.com/maps?q=SEATAP%20KOPITIAM%2C%20Jl.%20Lap.%20Tembak%20No.A10%2C%20Cibubur&output=embed` | no |
| `shop.rating` | "4,5", 971 ulasan | no (listing) |
| `hours: Day[]` | Senin–Kamis 07.00–21.00, Jumat–Sabtu 07.00–22.00, Minggu 07.00–21.00 | no |
| `hero.line` | "Kopitiam penuh warna di Cibubur, buka dari jam 7 pagi." | yes |
| `hero.hoursFallback` | "Buka setiap hari 07.00–21.00, Jumat–Sabtu sampai 22.00" | no |
| `breakfast.lead` | "Pintu buka jam 07.00, setiap hari." | no |
| `breakfast.intro` | "Roti bakar, telur setengah matang, dan kopi tiam yang kental. Sarapan kopitiam, sebelum mulai hari." | yes |
| `breakfast.items` | Roti Bakar Srikaya Rp 20rb · Telur Setengah Matang Rp 10rb · Kopi Tiam Rp 18rb · Nasi Lemak Rp 35rb | yes (all) |
| `menu.intro` | "Teman ngopi dari pagi sampai malam." (no popularity claim) | yes |
| `products[]` | see table below | per field |
| `bundle` | name "Bundling paket" (photos); price "sekitar Rp 42rb–48rb" (photos, partly legible: **mockup: true**); note "Tanya pilihan paket hari ini di kasir." (mockup) | mixed |
| `room.lead` | "Sofa kulit hijau, kursi jati berbantal oranye, lampu kristal, dan banyak tanaman." | no (photos, review 2) |
| `room.body` | "Datang berdua atau ramean, ada sudut sofa untuk semua." | yes |
| `room.music` | "Jumat malam: live music" | yes |
| `praise[]` | "Interiornya hangat dan alami, penuh furnitur kayu dan tanaman." (r2) · "Stafnya ramah, sigap, dan cepat mengantar pesanan." (r2, r3) · "Singkong gorengnya renyah, bubur kacang hijaunya juara." (r3) · "Harganya wajar, dan bisa bayar dengan banyak cara." (r2, r4) | no (paraphrased) |
| `praise.note` | "Rating Google 4,5 dari 971 ulasan. Dirangkum dari ulasan, bukan kutipan." | no |
| `visit.open` | "Buka setiap hari" | no |
| `visit.parking` | "Parkir mobil terbatas. Lebih mudah datang naik motor atau ojek online." | yes |
| `contact.line` | "Kopi, makan, teman. Itu saja yang kami urus." | yes |
| `contact.payment` | "Bisa bayar tunai dan non-tunai." | no (review 4) |
| `contact.instagram` | "Instagram: segera hadir" (plain text, no link) | yes |
| `banner` | "Ini contoh tampilan, belum situs resmi SEATAP Kopitiam." | no |

| Product | name (mockup?) | price | note (all mockup) | tile |
|---|---|---|---|---|
| esKopiSusu | Es Kopi Susu (yes) | Rp 22rb (yes) | "Favorit teman ngopi, dingin dan pas." | kunyit |
| singkongGoreng | Singkong Goreng (no) | Rp 20rb (yes) | "Renyah dan gurih." | sage |
| pisangGoreng | Pisang Goreng (no) | Rp 20rb (yes) | "Camilan wajib di samping kopi." | bata |
| buburKacangHijau | Bubur Kacang Hijau (no) | Rp 15rb (yes) | "Kesukaan pelanggan setia." | krem |
| esTeh | Es Teh (yes) | none | "Disajikan di gelas SEATAP." | botol |
| kuePandan | Kue Pandan (yes) | none | "Lapis hijau dengan krim keju." | kunyit |

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | `--container` 1200 |
| Reveal | Sarapan, Menu (whole wall), Ruang kumpul, Kata mereka, Kunjungi | starter | section-level only |
| SmoothScroll | layout | starter | defaults |
| MockupBanner | layout | starter | text replaced by `banner` (Indonesian), `tinta` ground |
| Wordmark | Hero (display), Footer (lead) | new | "SE", ChevronA, "T", ChevronA, "P"; inline SVG chevrons sized in `em`, stroke ≈ Jost 700 stem; `aria-hidden`; parent supplies sr-only name |
| HeroWall | Hero | new, client | 4 tiles + owner-1 photo; owns the signature timeline (`useGSAP` with scope) |
| TodayHours | Hero, Kunjungi | new, client | Today via `Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", weekday })`; SSR renders `hero.hoursFallback`, then swaps to "Buka hari ini 07.00–21.00"; in Kunjungi it marks today's tile |
| Tile | Hero, Menu, Kunjungi, bullets | new | flat colour square, `bg-<token>`, text colour per §3 of the design brief |
| ProductTile | Menu | new | art + name (`t-lead`) + price (`t-body` 600) + note (`t-small`); 4–8px gaps |
| ProductArt | Menu, Sarapan | new | 7 inline SVGs (6 products + sarapan set), one kit, `role="img"` + `aria-label` |
| MirrorPhoto | Ruang kumpul | new | round crop of owner-2 with 2px `krem` ring offset 8px |
| WeekTiles | Kunjungi | new | 7 day tiles; `kunyit` for Jumat/Sabtu, `sage` others, `botol` + "Hari ini" for today |
| ActionLink | Hero, Kunjungi, Hubungi | new | `<a>` styled as button, ≥48px tall, primary `kunyit`/`tinta`, secondary `krem` 2px border |
| MapEmbed | Kunjungi | new | lazy iframe, `title="Peta lokasi SEATAP Kopitiam"`, `krem` tile with address behind it as fallback |

## React Bits (max 2)
None. Considered and rejected:
| Component | Where | Why it doesn't suit this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Circular Text | around the round room photo | Its continuous rotation is motion on non-headline text (motion rule 7) and turns the mirror into a badge | small | n/a |
| Split Text / Blur Text | hero wordmark | A second hero moment would compete with the tile signature (rule 2); also fights the SVG chevrons | small | n/a |
| Shape Grid / Ripple Grid | backgrounds | Animated squares look like the wall but are background noise (rule 7) and pull focus from the food | canvas | n/a |
| Count Up | "971 ulasan" | A moving number makes a sourced fact feel like marketing | small | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero tiles ×4 (signature) | load, after hydration | `autoAlpha 0→1`, `y −12→0`, `scale 0.94→1`; stagger 0.08 s (top→bottom desktop, left→right phone) | 0.5 s each, sequence ≤ 0.74 s | `expo.out` | final state, no motion |
| Hero photo (signature) | load, at 0.1 s | `autoAlpha 0→1`, `scale 1.04→1` | 0.9 s (ends 1.0 s) | `expo.out` | final state, no motion |
| Hero text | none | static from first paint | – | – | – |
| Section blocks ×5 | ScrollTrigger `top 85%`, once | `autoAlpha 0→1`, `y 20→0` | 0.6 s | `power2.out` | final state |
| ActionLink hover / press | pointer | `translateY(−2px)` / `scale(0.98)`, CSS | 0.15 s | ease-out | no transform (global CSS rule) |

No-flash rule for the hero: an inline script in `<head>` adds `js` to `<html>`; CSS hides
`[data-hero-anim]` only under `html.js` inside `@media (prefers-reduced-motion: no-preference)`;
GSAP animates *to* the rest state. A 2 s CSS failsafe animation sets opacity 1 if the bundle never runs.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Jost (500, 600, 700), Familjen Grotesk (400, 500, 600).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Photos: copy owner-1.jpg and owner-2.jpg into `site/public/` as resized copies (macOS `sips`):
  owner-1 to 900×1200 (`hero-lounge.jpg`, quality ~80, ≤ 200 KB, `fetchPriority="high"`, explicit
  width/height); owner-2 to 1200 wide (`ruang-kumpul.jpg`, `loading="lazy"`). Never touch the originals.
- Map iframe `loading="lazy"`; nothing from Google loads above the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- Pairs are fixed in the design brief §3; never put `tinta` text on `botol` or `bata`, or `krem` text on `kunyit`/`sage`/`krem`.
- `<h1>` = sr-only "SEATAP Kopitiam" + `aria-hidden` wordmark. One `h2` per section.
- Alt (Indonesian): owner-1 "Sudut lounge SEATAP Kopitiam: dinding hijau botol dengan cermin bulat, lampu kristal, dinding kotak warna-warni, sofa kulit hijau dan kursi jati berbantal oranye."; owner-2 "Cermin bulat, lampu kristal dan pohon palem di depan dinding kotak warna-warni."
- Decorative tiles (hero, plain menu tiles, bullet squares) `aria-hidden`.
- Hours as a `<dl>` or table-like list so screen readers get day + time; today marked with visible "Hari ini" text, not colour alone.
- Skip link "Lewati ke konten" to `#konten`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- `<html lang="id">`.
- Title: "SEATAP Kopitiam · Kopitiam di Cibubur, Jakarta Timur".
- Description: "Kopitiam penuh warna di Arundina, Cibubur. Buka setiap hari dari 07.00. Coffee · Eat · Friends."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- `@theme`: `--color-botol #0F4636`, `--color-krem #F6E7C6`, `--color-kunyit #E9A13F`, `--color-bata #B04434`, `--color-sage #8E9A78`, `--color-tinta #17201B`; `--font-display` = Jost variable, `--font-body` = Familjen Grotesk variable.
- `:root`: values from design brief §4 and §5; `--leading-display 0.9`, `--leading-head 1.08`; `.t-lead` line-height 1.25.
- `--gutter`: 20px, 32px at ≥768, 40px at ≥1280. `--section-y`: 64px, 112px at ≥768.
- Menu wall: CSS grid with named areas at ≥1024 (4×3, `aspect-ratio: 1` tiles); 3 columns at 640–1023 and 2 columns below, both full-bleed, tiles `aspect-ratio: 4 / 5` and allowed to grow.
- The starter's `--color-paper` / `--color-ink` / `--color-muted` / `--color-accent` are replaced by the six tokens;
  update their uses: `html` background `tinta` (overscroll matches banner and footer), body text `tinta`,
  `.mockup-banner` `tinta` ground with `krem` text. Every section sets its own ground.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
