# TRD: Teman Kita Cafe & Resto mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Shop-specific setup:
- `<html lang="id">`. Metadata title "Teman Kita Cafe & Resto · Utan Kayu Selatan, Matraman";
  description "Kafe dan resto santai dua lantai di Jl. Kramat Asem, Utan Kayu Selatan. Kopi,
  camilan dan makanan Indonesia. Buka setiap hari." `noindex` stays.
- `MockupBanner` text in Indonesian: "Draf mockup untuk Teman Kita Cafe & Resto. Beberapa detail
  masih contoh sampai dikonfirmasi pemilik."
- A tiny inline script in `<head>` adds `js` to `<html>` before paint (used only by the hero's
  painted name; see Motion spec).

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter types, keep `Item`):
- `shop`: name "Teman Kita Cafe & Resto", display name "Teman Kita", subline "Cafe & Resto",
  type, address (full and short), phone "0878-8070-4666", `tel` "+6287880704666",
  `whatsapp` "6287880704666" (mockup: true), `mapsDirections`
  `https://www.google.com/maps/dir/?api=1&destination=Teman+Kita+Cafe+%26+Resto&destination_place_id=ChIJExQ7NI_0aS4R5FlBnGjqEjU`,
  `mapEmbed` `https://www.google.com/maps?q=Teman+Kita+Cafe+%26+Resto,+Jl.+Kramat+Asem+No.06,+Utan+Kayu+Selatan,+Matraman,+Jakarta+Timur&output=embed`,
  rating 4.5, ratingCount 785.
- `hours`: one entry per JS weekday (0 = Minggu … 6 = Sabtu) with `open`/`close` strings
  ("10.00"/"22.00"; Jumat "12.30"/"22.00"), plus the grouped display rows
  (Senin–Kamis, Jumat, Sabtu–Minggu) and the no-JS line "Buka setiap hari 10.00–22.00, Jumat mulai 12.30".
- `waMessages`: hero "Halo Teman Kita, mau tanya…", events "Halo Teman Kita, mau tanya
  ketersediaan tempat untuk acara tanggal …". URL-encode into `https://wa.me/<number>?text=`.
- `floors`: two entries (label, title, body, illustration key).
- `featured`: Es Jeruk Float (photo) + 4 illustrated products, each `{ name, price, note?, mockup }`.
- `menu`: five categories, each `{ title, items: { name, price, mockup: true }[] }`.
- `praise`: four `{ theme, line }` paraphrases. Never quotes, never names, never dates.
- `events`: lead, occasions, tip, package line (mockup), button label.
All copy, names and prices exactly as in `prd.md` "Sections and content".

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text translated to Indonesian |
| SmoothScroll | layout | starter | unchanged |
| Container | all | starter | `--container` 1200px |
| Reveal | 2–7 | starter | one per section, wraps the section's content |
| BrickWall | hero | new | inline SVG `<pattern>` of hand-drawn brick outlines, stroke `#D8D9D4` 1.25, hero background only, `aria-hidden` |
| PaintedName | hero | new (client) | h1 "Teman Kita" + "Cafe & Resto"; two-span wipes for each line and the two swoosh SVGs; signature motion |
| WindowFrame | hero, visit | new | `tinta` frame 10px (8px phone), sill bar, optional caption ≤ 8px below; wraps an `<img>` or the map iframe |
| TodayHours | hero, visit | new (client) | computes today in `Asia/Jakarta` with `Intl.DateTimeFormat`; renders the no-JS line on the server, swaps to "Hari ini (Jumat) buka 12.30–22.00" after mount; highlights today's row in the visit list |
| ActionButton | hero, events, visit, close | new | `<a>` styled as button, variants `red` (merah/kapur), `ink` (outline tinta), `chalk` (kapur/tinta); min-height 48px; icon + label |
| Floors | 2 | new | two rows + floor-slab line |
| FloorIllustration | 2 | new | `atas` (colour) and `bawah` (ink only), inline SVG, viewBox 640×400 |
| InkRule | between 2 and 3 | new | wobbly 2px `tinta` path, full container width, `aria-hidden` |
| MenuGrid | 3 | new | 4-col grid with 2px `tinta` rules; owner-2 cell 2×2 |
| ProductIllustration | 3 | new | `latte`, `pisang`, `roti`, `tahu`, inline SVG, viewBox 240×200, rules in design brief §6 |
| MenuLists | 3 | new | three columns on desktop, one on phone; name + price inline |
| Praise | 4 | new | `tinta` field, 2×2 themes with 1px `kapur` rules |
| Events | 5 | new | `merah` field, inline occasions list |
| Visit | 6 | new | map iframe (`loading="lazy"`, `title="Peta lokasi Teman Kita Cafe & Resto"`) in WindowFrame + address + hours |
| Closing | 7 | new | `tinta` field, heading, three buttons, footer row |

## React Bits (max 2)
None.

| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

Considered and rejected on reactbits.dev:
- Masked Heading: shows a drifting colour mesh or image through the letters. That's the wrong
  material: the shop's name is solid black paint on brick. The wipe is a few lines of GSAP on the
  starter stack.
- Rotating Text / Text Loop for "nongkrong / kumpul keluarga / me-time": loops on hero copy, which
  breaks motion rule 7 (text effects run once, on the headline only).
- Circular Text, Sticker Peel, Scroll Velocity marquee: decoration with no job here.
- Call Chip: a tool-status chip, not a call link.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero arc swoosh (signature) | load | outer `xPercent -100→0`, inner `100→0` | 0.40 s, starts 0 | power2.inOut | final state, no motion |
| Hero "Teman" (signature) | load | same two-span wipe | 0.55 s, starts 0.10 | power2.inOut | final state |
| Hero "Kita" (signature) | load | same two-span wipe | 0.50 s, starts 0.45 | power2.inOut | final state |
| Hero underline swoosh (signature) | load | same two-span wipe | 0.35 s, starts 0.75 | power2.inOut | final state |
| Section content, sections 2–7 | ScrollTrigger `top 85%`, once | `autoAlpha 0→1`, `y 20→0` | 0.7 s | power2.out | static |
| ActionButton hover | `:hover` | `translateY(-2px)` | 180 ms | ease-out | none |
| ActionButton press | `:active` | `scale(0.98)` | 120 ms | ease-out | none |

Implementation notes for the signature:
- Build it as one `gsap.timeline()` inside `useGSAP({ scope })` in `PaintedName`.
- Hidden start state: CSS `.js .paint-outer { transform: translateX(-100%) }` and
  `.js .paint-inner { transform: translateX(100%) }`, so the name never flashes before hydration.
  The timeline animates both to 0.
- Failsafe: `.js .paint-outer, .js .paint-inner { animation: paint-failsafe 0s 2.5s forwards }`
  with the keyframe setting `transform: none`. If GSAP never runs, the name still appears.
- `@media (prefers-reduced-motion: reduce)`: both classes `transform: none`, and the timeline is
  skipped (`prefersReducedMotion()`).
- The outer span carries padding of about 0.15em on every side (cancelled with a negative
  margin) so Kaushan's overhangs and the swoosh tips aren't clipped: its ascent is 1.08em, taller
  than the 1.05 line box. Check this in the 1440 and
  390 screenshots.
- Nothing else in the hero animates. The window photo is the LCP element and is never hidden.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: `Kaushan_Script` (400) and
  `Bricolage_Grotesque` (variable, `axes: ["opsz", "wdth"]`).
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Images: `public/img/upstairs.jpg` = owner-1 cropped to source x 0–1260 (full height), about
  1260×1131, JPEG ≈ q80, under ~220 KB, loaded eagerly with `fetchPriority="high"`.
  `public/img/es-jeruk-float.jpg` = owner-2 resized to 1000×1000, q80, lazy. Both with explicit
  width/height. Check `next.config.ts` keeps images unoptimized for static export.
- SVG illustrations inline, each under ~8 KB. Map iframe lazy.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).

Shop specifics:
- One `h1`: "Teman Kita" + "Cafe & Resto" (the wipe spans stay inside it as plain text). Swoosh
  SVGs `aria-hidden`.
- Alt text in Indonesian: owner-1 "Lantai 2 Teman Kita: area semi-outdoor dengan kursi besi merah
  dan mint, meja kayu, kipas angin dan mural jalanan"; owner-2 "Es jeruk float: jus jeruk dengan
  satu skop es krim vanila di gelas bertangkai, dikelilingi jeruk".
- Floor illustrations `role="img"` with labels starting "Ilustrasi …".
- Focus ring: 3px solid in the section's text colour, 3px offset.
- Buttons are links (`wa.me`, `tel:`, Maps) with visible text, not icon-only. External links open
  in a new tab with `rel="noopener"`.
- The `merah` field uses `kapur` text only (5.1:1). Never `tinta` text on `merah` (3.2:1).

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).

Values to set, from the design brief §4–5: the five `--step-*` clamps, `--leading-display: 1.05`,
`--leading-head: 1.08`, `--container: 1200px`, `--gutter: 20px` / `40px` from 768px,
`--section-y: 64px` / `112px` from 768px. Colours as `@theme` tokens `kapur`, `tinta`, `merah`,
`mint`, `jeruk`, `biru`. Fonts as `--font-display` (Kaushan) and `--font-body` (Bricolage). Add
`.t-label` (small, 600, uppercase, 0.16em tracking) and set heading weight and `font-stretch: 90%`
on `.t-head`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
