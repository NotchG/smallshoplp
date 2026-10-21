# TRD: Kana Coffee & Space mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names indicative):
- `shop`: `name` "Kana Coffee & Space", `wordmark` "kana", `caps` "COFFEE & SPACE",
  `address` "Jl. BBKK, Pekayon, Kec. Pasar Rebo, Jakarta Timur 13790",
  `hours` { `label` "Senin–Minggu 08.00–22.00", `today` "Buka hari ini 08.00–22.00", `everyDay` "Buka setiap hari" },
  `mapsUrl` "https://maps.google.com/?cid=967944324381019269" (listing `googleMapsUri`, tracking
  param dropped), `mapEmbed` `https://www.google.com/maps?q=KANA+Coffee+%26+Space,+Jl.+BBKK,+Pekayon,+Pasar+Rebo&output=embed`.
- `whatsapp`: `{ number: null, mockup: true, note: "Nomor WhatsApp menyusul" }`. While `number` is null,
  every WhatsApp button links to `#hubungi`. It must never link to a made-up number.
- `hero`: `line`, `kicker` "Jl. BBKK · Pasar Rebo", `annotation` { text "sedikit tersembunyi, ini jalannya", mockup: true }.
- `menu.poster`: four items `{ n, name, price, detail, group: "Hidangan utama" | "Mocktail" }`, in
  the poster's order ① Nasi Goreng Teri Cabai Hijau ② Soto Betawi ③ Tropical Breeze ④ Paradise Punch.
  Prices come from the poster (not mockup; the owner checklist asks whether they're current).
- `menu.photos`: three `{ src, alt, caption, mockup? }` (see design brief §6).
- `menu.favourites`: Nasgor Kana, Truffle fries, Truffle carbonara rice, Cuanki, Salad Kelapa Muda,
  Cappuccino, Cheesecake. Prices only on the five with [MOCKUP] example prices; those carry `mockup: true`.
- `menu.alsoOnMenu`: three groups (Kopi, Non-kopi, Camilan), all `mockup: true`.
- `spaces` (6), `facilities` (5), `forEvents` (mockup), `reviewPoints` (4, paraphrased, with `sources`
  for the owner checklist only, not rendered), `visit.steps` (2, mockup), `closing`.
- `sectionCopy`: every heading and lead line written for the mockup, `mockup: true`.
- `meta`: title "Kana Coffee & Space · Kafe di Pasar Rebo, Jakarta Timur", description
  "Kafe tenang di Jl. BBKK, Pasar Rebo. Ngopi, bekerja, dan berkumpul. Buka setiap hari 08.00–22.00."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| DraftBanner | top | starter | text "Ini draf situs untuk ditinjau pemilik" |
| Container, `.section`, `.t-*` | all | starter | every section inside `<Container>` |
| Reveal | sections 2–8 | starter | section-level only, once |
| Wordmark | hero, footer | new | `<h1>` with `<span>` "kana" (Mynerve, `--step-display`) and `<span>` caps line. Footer variant is a `<p>` at `--step-head` |
| HeroAnnotation | hero | new | Mynerve note plus a small inline SVG arrow (≤ 3 paths, `aria-hidden`), inside an overflow-hidden wrapper for the wipe. The note text is real text, but decorative, so `aria-hidden`; the button carries the meaning |
| KWatermark | hero | new | `aria-hidden` span with a Mynerve "k" in `ochre-deep`, absolutely placed behind the photo's lower left. `pointer-events: none` |
| ActionButton | hero, Fasilitas, Kunjungi, Hubungi | new | variants `primary` (rust/cream, or ochre/steel on steel) and `secondary` (2px outline). Min height 48px. External links get `target="_blank" rel="noopener"` |
| CircledNumber | menu, visit | new | 1.75em ring in rust, number in Jost 600 at `--step-small`, `aria-hidden`; the number is also given in text for screen readers ("1.") |
| MenuPoster | Menu andalan | new | photo pair plus numbered list, then the crop C row, favourites and "Juga di menu" |
| SpacesGrid | Satu tempat | new | 2×3 at ≥1024px, hairline dividers |
| FacilitiesList | Fasilitas | new | `<dl>`-style pairs; "Untuk acara" block under it |
| ReviewPoints | Kata mereka | new | 2×2 `<ul>`, no `<blockquote>`, no quote marks |
| VisitBlock | Kunjungi kami | new | address in `<address>`, steps `<ol>`, hours, map `<iframe loading="lazy" title="Peta lokasi Kana Coffee & Space">` |
| ClosingBand | Hubungi kami | new | `id="hubungi"`, narrow and centred |
| Footer | footer | starter or new | three columns, draft note |

Images: plain `<img>` with explicit `width`/`height` (static export). The hero image uses `loading="eager"`
and `fetchpriority="high"`; the rest use `loading="lazy"` and `decoding="async"`. Alt text, in Indonesian:
- hero: "Ruang utama Kana: jendela kaca besar menghadap taman, meja panjang kayu di atas karpet merah, kursi rotan"
- crop A: "Nasi Goreng Teri Cabai Hijau dengan telur mata sapi, kerupuk, dan acar"
- crop B: "Soto Betawi dengan nasi dan kerupuk, dan segelas Paradise Punch"
- crop C: "Empat piring nasi dan mi dari menu Main Course Asian, dengan kerupuk dan acar"

## React Bits (max 2)
None. Reasons:
- The signature is a pen-note wipe pointing at a button. It's six lines of GSAP and transform-only, so a
  library effect would be heavier and less specific.
- Text effects (Split Text, Blur Text, Text Type) would animate the wordmark. That's Kana's logo, and it
  should arrive whole, not letter by letter.
- Circular Text badges, Scroll Velocity marquees and Tilted Card hovers are the generic cafe-site look this
  brief must avoid. The poster world is print, and it stays still.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero wordmark (signature) | load, 0s | opacity 0→1, y 16→0 | 0.7s | expo.out | final state, no motion |
| Hero text group (caps, line, hours, buttons) | load, 0.15s | opacity 0→1, y 12→0 (one group, no stagger) | 0.6s | expo.out | final state |
| Hero photo wrapper / img | load, 0.2s | wrapper opacity 0→1, y 24→0; img scale 1.04→1 | 0.9s | expo.out | final state |
| Hero annotation (signature) | load, 0.75s | outer xPercent -101→0, inner xPercent 101→0 (overflow hidden) | 0.6s | power2.out | final state |
| Section reveal (×7) | ScrollTrigger "top 85%", once | opacity 0→1, y 20→0 | 0.6s | power2.out | final state |
| ActionButton hover / press | CSS | `::after` opacity 0→0.12, translateY(-1px) / 0 | 180ms / 120ms | ease-out | no transform; overlay stays as the static hover state |

Use `useGSAP` with a scope ref per component, and `gsap.from` so the server HTML is the final state.
Check `prefers-reduced-motion` with `gsap.matchMedia()` and skip every tween in the reduced branch. Nothing
animates width, height, top, left, clip-path or stroke.
Lenis: starter defaults (lerp 0.1, native touch); off under reduced motion.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Mynerve 400 and Jost variable (latin).
- Hero WebP ≤ 260 KB (owner-1 is 2.6 MB as JPEG: re-encode, don't ship the original). Each menu crop ≤ 120 KB.
- Map iframe `loading="lazy"`, below the fold, never in the first screen.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in the design brief §3), visible keyboard
focus, semantic landmarks, alt text on every image, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP static).
- `lang="id"` on `<html>`.
- One `<h1>` (the wordmark lockup reads "kana COFFEE & SPACE"; add `aria-label="Kana Coffee & Space"`). Section headings are `<h2>`.
- Small text on ochre is steel, never rust on `ochre-deep` and never cream on ochre.
- External links (Maps, WhatsApp) say where they go: "Petunjuk Arah (Google Maps)" via `aria-label`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in the design brief §4–5. Add palette tokens to `@theme` as `--color-ochre`, `--color-ochre-deep`,
`--color-rust`, `--color-steel`, `--color-oak`, `--color-cream`, and fonts as `--font-script` (Mynerve) and
`--font-sans` (Jost). The hero photo's right bleed is a grid column that breaks out of `<Container>` on the
right only, at ≥1024px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
