# TRD: nuansa Barber & Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (Bahasa Indonesia strings exactly as in the PRD):
- `meta`: title "nuansa Barber & Coffee · Jatinegara, Jakarta Timur". Description: "Barbershop
  dan kedai kopi di Cipinang Cempedak, Jatinegara. Potong rambut rapi dan kopi enak, di satu
  tempat. Buka setiap hari 10.00–22.00." The middle sentence is [MOCKUP]. `lang: "id"`.
- `shop`: name "nuansa", descriptor "Barber & Coffee", the full and short address, and the phone
  display "0882-9630-2726", `tel: "+6288296302726"`.
- `links`:
  - `directions`: `https://www.google.com/maps/dir/?api=1&destination=Nuansa%20coffee%20and%20barber&destination_place_id=ChIJZRhjMmvzaS4RrWuq19k_7Ik`
  - `mapsListing`: `https://maps.google.com/?cid=9938388682558565293`
  - `whatsapp`: `https://wa.me/6288296302726?text=Halo%20nuansa%2C%20saya%20mau%20tanya%20jadwal%20potong%20rambut.` (mockup)
  - `mapEmbed`: `https://www.google.com/maps?q=Nuansa+coffee+and+barber,+Jl.+Biru+Laut+VIII+No.48C,+Cipinang+Cempedak,+Jatinegara,+Jakarta+Timur&output=embed`
- `hours`: `{ days: "Senin–Minggu", open: "10.00", close: "22.00", today: "Buka hari ini 10.00–22.00", note: "Buka setiap hari" }`. A static string, with no client-side open/closed logic.
- `hero`: line (mockup), actions.
- `barbershop`:
  - `wall: { small: "Keep at", big: "HANDSOME" }`
  - `lead` (mockup)
  - `points[]` (sourced)
  - `services[] { name, price?, mockup: true }`
  - `cta` (mockup)
  - image `{ src: "/images/barbershop.jpg", alt }`
- `kopi`:
  - `lead` (mockup), `notes[]` (sourced)
  - `items[] { name, price, art: "kopiSusu" | "americano" | "croissant", mockup }`: price is
    mockup on all three, and the croissant item is mockup
  - `extras[]` (mockup), `counterNote: "Pesan dan bayar di kasir."`
  - `caption: "Gambar ilustrasi, bukan foto menu."`
- `alsoHere[] { title, text, mockup? }`
- `reviews: { rating: "4,6", count: 326, linkLabel, note, themes[] }`
- `visit`: heading, address lines, hours, actions, booking note (mockup).
- `banner`: phone and desktop strings. `footer` strings.

Alt text (Indonesian):
- shopfront: "Bagian depan nuansa di malam hari: jendela barbershop bertuliskan Keep at HANDSOME
  dan pintu kedai kopi."
- barbershop: "Suasana barbershop nuansa: pelanggan bercape garis di kursi barber, cermin oval
  berbingkai emas."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | Barbershop, Kopi, Juga di sini, Kata mereka, Kunjungi | starter | section-level only; not on the hero |
| Container, `.section`, `.t-*` | all | starter | 12-col grid inside Container on ≥1024px |
| DraftBanner | top | starter if it ships one, else new | Ink ground, Lightbox `--step-small` text; phone and desktop strings |
| SiteNav | hero, ≥1024px only | new | 3 anchor links (Barbershop, Kopi, Kunjungi), Comfortaa 600 small, right-aligned; no logo |
| Wordmark | hero h1; footer (small, static) | new | Visible text "nuansa" plus a `<span>` "Barber & Coffee" (CSS uppercase). The circled "n" is a CSS circle with an "n", `aria-hidden`. Two stacked layers: lit letters, and a glow duplicate (`aria-hidden`, static `text-shadow`) |
| SignOn | hero | new (client) | `useGSAP` timeline for the signature (Motion spec); returns early on reduced motion |
| ShopfrontPhoto | hero | new | `next/image`, `priority`, `/images/shopfront.jpg` 600×336, square corners, `sizes="(min-width:1024px) 680px, 100vw"` |
| ActionButton | hero, barbershop, kunjungi | new | Pill, min-height 48px, Comfortaa 700 body size. Variants: `navyPrimary` (Lightbox fill, Fascia text), `navySecondary` (2px Lightbox border, Lightbox text), `lightPrimary` (Fascia fill, Lightbox text). Hover is a `::after` overlay with an opacity fade; press is scale 0.98 |
| WallLettering | barbershop | new | "Keep at" Gelasio italic 700 body size; "HANDSOME" Gelasio 700 caps lead size; Ink; 16px above the frame |
| MirrorFrame | barbershop | new | `border-radius: 9999px` stadium, 6px Brass border, `next/image` cover, `object-position: 50% 40%`, aspect 3/4; 75% width on phone, cols 1–5 on desktop |
| ServiceList | barbershop | new | `<ul>`; each `<li>` is name + price inline with a 12px gap (`lining-nums tabular-nums`); no leaders |
| CoffeeCounter | kopi | new | 3 equal slots on a 2px Brass baseline rule; name and price ≤16px below; caption under the row |
| KopiSusuArt, AmericanoArt, CroissantArt | kopi | new (inline SVG components) | viewBox `0 0 120 180`, fills per design brief §6, `role="img"` with Indonesian `aria-label` ("Ilustrasi Kopi Susu Gula Aren", ...) |
| AlsoHere | juga di sini | new | 3 items: h3 (Comfortaa 700 lead) and one body line; Brass hairlines between on phone |
| ReviewThemes | kata mereka | new | rating line at body size, link, small note, 4 themes in Gelasio roman lead size with Brass hairlines |
| VisitBlock | kunjungi | new | address, h3 "Jam buka", hours, 3 ActionButtons, booking note |
| MapEmbed | kunjungi | new | `<iframe loading="lazy" title="Peta lokasi nuansa Barber & Coffee">`, 4:3, square corners, `referrerpolicy="no-referrer-when-downgrade"` |
| SiteFooter | bottom | new | small wordmark plus two small lines, Lightbox on Fascia |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | — | The signature is a short custom GSAP timeline on opacity, and nothing else on the page needs a library effect | 0 | — |

Considered and rejected on reactbits.dev:
- **Glare Hover** on the mirror photo. A glint across the "mirror" is on-world, but it's decoration
  on a non-interactive image. Its 650ms sweep is outside the 150–250ms response rule, and phones
  never see it.
- **Shiny Text / Glitch Text / Decrypted Text** on the wordmark. These would compete with the
  sign switching on and push the page toward the neon-glow cliché.
- **Count Up** for the rating. That is the hero-metric pattern the design brief refuses.

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): wordmark lit layer | load, once, delay 0.15s | opacity 0.18 → 0.85 → 0.35 → 1 | 0.06s / 0.07s / 0.12s | power2.out | final state, no motion |
| Hero (signature moment): glow layer | load, at 0.40s | opacity 0 → 1 | 0.5s | power2.out | final state (visible) |
| Hero (signature moment): shopfront photo | load, at 0.50s | opacity 0.55 → 1 | 0.6s | power2.out | final state (opacity 1) |
| Hero copy, hours, buttons | — | not animated, never hidden | — | — | — |
| Barbershop, Kopi, Juga di sini, Kata mereka, Kunjungi sections | ScrollTrigger "top 85%", once | opacity 0 → 1, y 20 → 0 | 0.6s | power2.out (starter Reveal) | static |
| ActionButton hover / focus-visible | pointer / keyboard | `::after` overlay in the button's own text colour, opacity 0 → 0.12 | 180ms | ease-out (CSS) | instant |
| ActionButton press | `:active` | scale 1 → 0.98 | 120ms | ease-out (CSS) | none |

GSAP sets from-states inside `useGSAP` (layout effect) so there's no flash. With JS off, CSS shows
the final state. The whole hero sequence ends by about 1.1s, and the h1 text is in the DOM and
readable from the first paint (opacity 0.18 is the shortest-lived state, under 0.25s).
Add the `sign` tokens from design brief §8 to `lib/motion.ts`.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
  - Comfortaa `weight: ["600","700"]`.
  - Gelasio `weight: ["400","700"]`, `style: ["normal","italic"]`.
  - Both `subsets: ["latin"]`, exposed as CSS variables.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images: `shopfront.jpg` (600×336) and `barbershop.jpg` (880×1027), each re-encoded with
  `sips -s format jpeg -s formatOptions normal` (about 55 KB and 140 KB; keep each under 150 KB). The map iframe is lazy and below the fold. The SVG
  drawings are inline, under 3 KB each.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- `<html lang="id">`. There is one h1 (the wordmark lockup); h2 per section and h3 inside.
- Focus ring: 3px outline with a 3px offset. It is Brass on navy (6.2:1) and Fascia on light
  grounds (≥10:1). It is never Brass on light, which is only 2.0:1.
- Text on photos: none. All text sits on flat Fascia, Concrete or Limewash.
- The sign hesitation is a single dip (2 transitions in under 0.3s). That is under the
  three-flashes threshold, and the area is small.
- The circled "n" and the glow duplicate are `aria-hidden`. Prices are text, not images.
- The draft banner is real text at 13–14px, Lightbox on Ink (16:1).

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §4 and §5. Colours go into `@theme` as `--color-fascia`,
`--color-lightbox`, `--color-limewash`, `--color-concrete`, `--color-ink`, `--color-brass`.
Section headings are typed lowercase in `content.ts`; don't lowercase them with CSS. The h1
descriptor is uppercased with CSS so screen readers read words, not letters.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
