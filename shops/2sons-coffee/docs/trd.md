# TRD: 2Sons Coffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's `Item = { text; mockup? }`):
- `shop`: name "2Sons Coffee", address (full), addressShort, phone "0815-9133-886",
  phoneHref "tel:+628159133886", whatsappHref `{ text: "https://wa.me/628159133886", mockup: true }`,
  directionsUrl `https://www.google.com/maps/dir/?api=1&destination=2Sons%20Coffee&destination_place_id=ChIJ64BTIiuLaS4RyamBPUhs6QI`,
  mapsUrl (raw.json `googleMapsUri`, as a fallback link),
  mapEmbedSrc `https://www.google.com/maps?q=2Sons+Coffee,+Jl.+Jakarta+Garden+City+Boulevard+No.+60,+Cakung,+Jakarta&output=embed`,
  hours `{ days: "Setiap hari", time: "07.00–21.00", open: 7, close: 21, tz: "Asia/Jakarta" }`,
  rating `{ value: "5,0", count: 35 }`.
- `hero`, `coffee`, `food`, `room`, `praise`, `visit`, `contact`: heading plus the copy from the PRD table.
- `Product = { name: Item; note: Item; price?: Item; visual: { kind: "photo"; src; alt; position } | { kind: "art"; id: "espresso" | "v60" | "beefCheeseMelt" | "eggToast"; label }; mockup?: boolean }`.
  Manual brew and egg toast carry `mockup: true` on the whole product. Other products flag only their mockup fields (prices, the can's takeaway line).
- `Photo = { src; alt; caption: Item; position }` for owner-1, 3, 4 and 5.

Alt text (Indonesian):
- owner-1: "Bagian depan 2Sons Coffee di Ruko New East: papan nama abu-abu melengkung, pintu kaca, kursi tinggi terakota dan hijau sage di teras."
- owner-2: "Minuman biru keabu-abuan dalam kaleng bening berlogo 2sons coffee, di depan rak menyala dengan figur beruang kuning."
- owner-3: "Rak putih menyala berisi piringan hitam, buku, kantong biji kopi, turntable dan figur beruang."
- owner-4: "Ruang duduk dengan kursi navy dan hijau sage, meja bundar krem, cermin bulat dan papan bergambar dua orang di meja."
- owner-5: "Meja kayu panjang dengan kursi wishbone, rangkaian daun kering dan lukisan abstrak biru."

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text changed to the Indonesian line in the PRD. Uses `tinta` background and white text |
| SmoothScroll | global | starter | Defaults (lerp 0.1, native touch) |
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–7 | starter | One per section, wrapping the whole content block; never per item |
| Shelf | hero, coffee, food, room, visit | new | CSS grid on `rak`. Padding and gap are `--shelf-gap`. 12 columns at ≥1024, 2 at ≥768, 1 or 2 on phone per the wireframes. Square corners |
| Cell | inside Shelf; contact | new | `lampu` falloff background (#FFFFFF to #ECEEF2), `--cell-pad`, a `.cell-light` child (2px white LED line with soft glow, plus the top falloff) and an optional `.cell-veil`. Placement comes in through `className` |
| HeroShelf | hero | new, client | Three Cells (name, shopfront, hours). Runs the signature timeline with `useGSAP({ scope })` |
| TodayHours | hero hours cell | new, client | Works out open or closed in `Asia/Jakarta` with `Intl.DateTimeFormat`. Server and no-JS render "Buka setiap hari"; it updates in `useEffect` (no hydration mismatch). Yellow dot with a tinta ring next to the text. No animation |
| ProductCell | coffee, food | new | Visual (PhotoCell or ArtTile), then name (`.t-lead`), note (`.t-body`), price (`.t-small`, weight 500) 8px below. Layouts `stack` and `row` (tile left, text right, 24px gap). `{...mock()}` on the cell and on each mockup field |
| ArtTile + art/Espresso, art/ManualBrew, art/BeefCheeseMelt, art/EggToast | coffee, food | new | Inline SVG drawings per design brief §6. `papan` tile with backlit halo, sizes `sm` (168/112) and `lg` (280/200) |
| PhotoCell | hero, coffee (can), room | new | `<img>` with width, height and `object-fit: cover` plus a per-photo `object-position`. Caption 12px below, inside the cell |
| LedList | room, praise | new | `<ul>` whose bullets are 16×2px white LED ticks (decorative, `aria-hidden`) |
| MapEmbed | visit | new | `<iframe loading="lazy" title="Peta lokasi 2Sons Coffee" referrerpolicy="no-referrer-when-downgrade">`, 440px tall on desktop and 4:3 on phone, inside a Cell |
| ButtonLink | hero, visit, contact | new | Primary: tinta fill, white text. Secondary: 1.5px tinta border. Min height 48px, weight 500. Hover is an overlay pseudo-element on opacity |
| SiteFooter | end | new | Small text on the wall |
| Motion gate script | layout `<head>` | new | Inline script: `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='on'`. Add `suppressHydrationWarning` on `<html>` |

## React Bits (max 2)
**None.** Zero is the right number for this shop.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | Considered and rejected. **Shiny Text**: a light sweep across the headline would be a gimmick in a calm room and would compete with the LED signature. **Spotlight Card** and **Glare Hover**: cursor-driven decoration with no job (motion rule 7). **Fade Content** and **Animated Content**: duplicate the starter's Reveal. **Count Up**: there are no numbers worth counting, and animating the rating would cheapen it. The signature is built directly in GSAP because it is specific to this shelf | 0 KB | – |

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): `.cell-light` × 3 (name, shopfront, hours) | load (HeroShelf `useGSAP`), delay 0.15s, stagger 0.12s | opacity 0 → 1 | 0.5s each | `expo.out` | final state (lit), no motion |
| Hero: `.cell-veil` × 3 | load, same delay and stagger | opacity 0.35 → 0 | 0.7s each | `power2.out` | veil never shown |
| Hero safety | CSS, only under `[data-motion="on"]` | keyframes force lit and unveiled at 2.5s (opacity only) | 0.01s at a 2.5s delay | – | not applied |
| Section content, sections 2–7 (`Reveal`) | ScrollTrigger "top 85%", once | opacity 0 → 1, y 20 → 0 | 0.6s | `power2.out` | visible, no motion |
| ButtonLink hover / focus | pointer, focus | overlay pseudo-element opacity 0 → 1 | 0.15s | ease-out (CSS) | instant (starter CSS) |
| ButtonLink press | `:active` | `translateY(1px)` | 0.1s | ease-out (CSS) | instant |

Starting states live in CSS: `[data-motion="on"] .hero .cell-light { opacity: 0 }` and
`[data-motion="on"] .hero .cell-veil { opacity: .35 }`. Use `gsap.to()` towards the final
values, never `gsap.from()` on SSR content. Kill everything with the `useGSAP` scope.
Tokens in `lib/motion.ts`: `duration { press: 0.15, ui: 0.25, reveal: 0.6, hero: 1.1 }`,
`lights { delay: 0.15, strip: 0.5, veil: 0.7, stagger: 0.12, veilFrom: 0.35 }`.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`. Here that is **Jost only**
  (300/400/500, latin), exposed as `--font-jost` and mapped to `--font-display` and `--font-body`
  in `@theme`. The font's variable class goes on `<html>`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Photos: copy owner-1..5 into `site/public/photos/`, resized and recompressed with macOS `sips`
  (`sips -Z 1600 -s formatOptions 72 <in> --out <out>`), aiming for under 300 KB each. owner-1 is
  above the fold: `fetchpriority="high"`, no lazy loading. All other images and the map iframe use
  `loading="lazy"`. Always set width and height. Never copy `photo-*.jpg`.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop specifics: `lang="id"`. Skip link "Langsung ke isi" to `#konten`. One `h1` (the lockup), an `h2`
per section. Focus ring is 2px solid tinta with 3px offset (≥7.6:1 on wall and cells). Text is
only ever tinta on dinding, rak or lampu, or white on tinta; never text on papan. The open/closed
status is text, not just the yellow dot. Drawings use `role="img"` with an Indonesian label.
Buttons are 48px tall.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Add `--shelf-gap` and `--cell-pad` to `:root` with their media-query values, and add
`--leading-lead: 1.3`. Replace the starter colour tokens with `dinding`, `rak`, `lampu`, `tinta`,
`papan` and `beruang`, and update the two starter references: `html` background becomes `dinding`,
and the banner uses `tinta` with white text. Values come from design brief §3–§5.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
