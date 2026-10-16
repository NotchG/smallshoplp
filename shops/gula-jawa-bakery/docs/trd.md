# TRD: Gula Jawa Bakery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (names are suggestions; keep every string from the PRD's sections table):
```ts
shop      { name: "Gula Jawa Bakery", scriptLines: ["Gula", "Jawa"], area: "Klender, Jakarta Timur",
            address, addressShort, nearby: "Dekat rel kereta di Klender.",
            phoneDisplay: "0822-6184-2007", phoneTel: "+6282261842007",
            hours: { label: "Setiap hari", open: "07.00", close: "21.00" },
            rating: { value: "4,3", count: "1.071", source: "Google" },
            placeId: "ChIJbQOYNQD1aS4Rr02JTGw23B0", directionsUrl, mapEmbedUrl,
            whatsapp: { url, prefill, mockup: true } }
hero      { line: "Abon gulungnya viral.", lineEarly: "Datang pagi, sebelum habis.", support }
featured  [{ id, name, alias?, blurb, price: { label, mockup: true }, art: "abon-gulung" | "pastry" }]
dayBar    { open: "07.00", close: "21.00", best: { until: "10.00", label: "Paling lengkap", mockup: true },
            late: "Makin sore, makin sedikit pilihan.", closing: "Datang pagi, sebelum abon gulungnya habis." }
menu      [{ group, from?: { label, mockup }, art: ArtId[], items: [{ name, price?: { label, mockup }, mockup?, source }] }]
menuNotes [{ text, mockup }]
kitchen   { heading, lead, body }
reviews   { summary, note, items: [{ text, sources: number[] }] }      // paraphrases only, no names
visit     { heading, seating: "Tempat duduknya sedikit. Kebanyakan pembeli bawa pulang." }
contact   { heading, lead: { text, mockup: true }, buttons }
meta      { title, description }
```
Mockup flags: every price; Roti gula jawa, Roti sobek, Roti cokelat keju, Roti pisang cokelat,
Bolu gula jawa, the kopi susu gula aren note; the name "Pastry donat aneka glaze"; the day-bar
"until 10.00" segment; WhatsApp (button, prefill, "Telepon atau WhatsApp"); the set-aside line; and
every product illustration (each is a placeholder for an owner photo).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Draft banner | top | starter | Indonesian copy: "Draf: contoh situs untuk Gula Jawa Bakery. Belum resmi." |
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–7 | starter | section-level only |
| NeonSign | hero h1, footer mark | new | Grid-stacked layers: an `aria-hidden` tube copy plus the real text. CSS keyframes, no JS. `static` prop for the footer |
| HeroBench | hero | new | Full-bleed `bangku` band: hours, short address, two buttons |
| ActionButton | hero, visit, contact | new | Variants `neon` (neon fill, dinding text), `outline-neon`, `maroon` (on nampan), `outline-maroon`. 52px tall, 12px radius, optional 20px Lucide-style icon (inline SVG; WhatsApp glyph from Simple Icons). No emoji |
| Rack | featured, menu | new | Top-down copper cooling-rack SVG frame; products are children laid on top |
| art/* (8) | featured, menu, kitchen | new | `AbonGulung`, `Pastry`, `DonutPink`, `DonutBlue`, `TiramisuDonut`, `CheeseBread`, `ChocolateSourdough`, `CheesecakeSlice`. Inline SVG, flat fills, `role="img"` + Indonesian `<title>` ("Ilustrasi abon gulung") |
| TentCard | featured | new | Neon card, 1px tembaga border, name 700 plus tabular price, `data-mockup` on the price |
| DayBar | featured | new | Static HTML/CSS: times inline at the ends, 2px neon track, 6px gula segment at `width: 21.4%` (static, never animated), label above it, late note below. A `<figure>` with the closing line as `<figcaption>` |
| MenuGroup | menu | new | Rack plus captions, h3 with the inline "mulai" price, list (2 CSS columns for Roti at ≥1024px) |
| KitchenTray | kitchen | new | Tray SVG, perforated liner (dot pattern of the real mat), 2×4 `Pastry` rotated −20° |
| ReviewList | Kata mereka | new | `<ul>` of paraphrases with tembaga hairlines and a source line. No quote marks, no names |
| MapEmbed | Kunjungi kami | new | `<iframe loading="lazy" title="Peta lokasi Gula Jawa Bakery" referrerPolicy="no-referrer-when-downgrade">` plus a visible "Buka di Google Maps" link below for no-iframe contexts |
| ContactClose + Footer | Hubungi kami | new | Static NeonSign mark at lead size |

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | — | The signature is the shop's own neon switching on, which is a few lines of CSS. Nothing on reactbits.dev beats that for this shop | 0 KB | n/a |

Declined after browsing reactbits.dev:
- **Stroke Text:** outlines draw on and then flood with fill, but a neon tube never fills, and the draw animates stroke rather than opacity.
- **Split Flap Text:** a railway departure board would be a costume, and it is a text effect beyond the headline.
- **Circular Text / Curved Loop / Scroll Velocity:** decorative loops with no job.
- **Count Up:** for the rating, but that is the banned hero-metric pattern.
- **Status Mark / Call Chip:** agent-UI glyphs, not a bakery's language.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero (signature moment): NeonSign lit layer | load (CSS, before hydration) | opacity 0 → 0.8 (14%) → 0.15 (24%) → 1 | 900 ms, 200 ms delay, `fill-mode: both` | linear to 24%, then `cubic-bezier(0.16,1,0.3,1)` | final state, no motion (`animation: none`, opacity 1) |
| NeonSign tube layer | none | static, neon stroke at 32% | — | — | same |
| Sections 2–7 | ScrollTrigger `top 85%`, once (starter Reveal) | opacity 0 → 1, y 20 → 0 | 0.6 s | ease-out (`power3.out`) | final state, no motion |
| ActionButton hover / focus | pointer, focus-visible | overlay `::after` opacity 0 → 1 | 160 ms | ease-out | instant |
| ActionButton press | `:active` | `scale(0.98)` | 120 ms | ease-out | none |

CSS for the signature (in `globals.css`, the reduced-motion default is no animation):
```css
@keyframes neon-on { 0% {opacity:0; animation-timing-function:linear} 14% {opacity:.8; animation-timing-function:linear}
  24% {opacity:.15; animation-timing-function:cubic-bezier(.16,1,.3,1)} 100% {opacity:1} }
@media (prefers-reduced-motion: no-preference) { .neon-lit { animation: neon-on 900ms 200ms both; } }
```
The glow is a static `filter: drop-shadow(0 0 2px rgb(255 246 234 / .9)) drop-shadow(0 0 14px rgb(255 214 190 / .45))`
on the lit layer only and is never animated. The stroke is `-webkit-text-stroke: max(2px, 0.026em)` with `color: transparent`.

Lenis: starter defaults (lerp 0.1, native touch) unless the design brief says otherwise.

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Fonts: Leckerli One 400 (preload) and Archivo variable (`axes: ['wdth']`), latin subset only. The LCP element is the hero h1 (text), not an image.
- No raster images at all; the 8 product SVGs plus the rack and tray together stay under 30 KB.
- The map iframe is `loading="lazy"` and sits below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- h1 accessible name "Gula Jawa Bakery". The tube copy and the footer mark are `aria-hidden`.
- Contrast pairs are listed in design brief §3. Never put `tembaga` text on `nampan`. Secondary text is neon at 80% opacity, not grey.
- Focus: 3px outline, 3px offset, `neon` on dinding and bangku, `dinding` on nampan. Selection: `gula` background with `dinding` text. Scrollbar thumb `tembaga`, track `dinding`.
- Every illustration: `role="img"` plus a `<title>` in Bahasa Indonesia. The DayBar's information is all in visible text.
- Buttons 52px tall. Menu lists are real `<ul>`. Reviews are a `<ul>`, not `<blockquote>` (they are paraphrases).

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
`<html lang="id">`. Title: "Gula Jawa Bakery, Klender · Abon gulung & pastry". Description: "Bakery di
Klender, Jakarta Timur, dengan dapur terbuka. Abon gulung yang viral dan pastry berlapis mentega. Buka setiap
hari 07.00–21.00." No JSON-LD (draft).

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).

Values (copy exactly, from design brief §4–5):
```css
--step-display: clamp(5rem, 4.2rem + 2.4vw, 6rem);
--step-head:    clamp(1.875rem, 1.2rem + 2.2vw, 2.75rem);
--step-lead:    clamp(1.4375rem, 1.3rem + 0.4vw, 1.625rem);
--step-body:    clamp(1.125rem, 1.08rem + 0.15vw, 1.1875rem);
--step-small:   clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem);
--container: 75rem;  --gutter: clamp(1.25rem, 0.5rem + 3vw, 3rem);  --section-y: clamp(3.5rem, 2rem + 5vw, 7rem);
```
`@theme` colours: `dinding #6A2C26`, `neon #FFF6EA`, `bangku #435866`, `tembaga #C9845C`, `gula #E8A94A`,
`nampan #ECEDEA`. Fonts: `--font-script` (Leckerli One), `--font-sans` (Archivo). Heading class:
Archivo 800, `font-stretch: 87.5%`, tracking −0.01em. "BAKERY": 700, `font-stretch: 125%`, uppercase, +0.12em.
Use the `.t-*` helpers for every size. Use Tailwind grid utilities (`grid-cols-12`, `col-span-*`) for the splits in §7.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
