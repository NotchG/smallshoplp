# TRD: Volks Kaffee mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts are in `content.ts`, in Bahasa Indonesia. Items from [MOCKUP] lines carry
`mockup: true` and render with `{...mock(item.mockup)}` so they get `data-mockup`.
- `shop`: name "Volks Kaffee", type "Kedai kopi", address "Jl. Cipinang Jaya Blok AA No. B23,
  Cipinang Besar Selatan, Jatinegara, Jakarta Timur 13410", phone "0878-8864-2785",
  `telHref` "tel:+6287888642785", `waHref` "https://wa.me/6287888642785" (mockup),
  `mapsUrl` = listing `googleMapsUri` from raw.json (cid 7994190304827646407), `mapEmbedSrc`
  (keyless `https://maps.google.com/maps?q=…&output=embed` with name and address), rating
  `{ value: "4,6", count: 501 }`, and `hours` as data, `[{ day: 1..6, open: "15.30",
  close: "23.00" }]` with Sunday (0) closed.
- `hero`: line (mockup), status strings (`open: "Buka hari ini 15.30–23.00"`,
  `closed: "Hari ini tutup — buka lagi Senin 15.30"`, `generic: "Senin–Sabtu 15.30–23.00"`).
- `featured`: 4 items `{ id, name, desc, price, art, mockup flags per field }`. Names are not
  mockup for Ice Choco Mint, Marshmallow Brownie and Smoked Beef Sandwich. Prices are mockup,
  and so are the descriptions of Ice Choco Mint and Marshmallow Brownie. The Kopi racikan
  description and the Smoked Beef Sandwich contents are sourced; its price range is mockup.
  Model each field as an `Item`, so `{ name: Item; desc: Item; price: Item }`.
- `menu`: three groups (Kopi with note "Rp 20rb–32rb" (mockup), Non-kopi, Makanan) of `Item`.
  Every item is mockup except the three named signature items.
- `barista`: heading, lead, body, slip label "Pesanan", slip items (3, sourced to review 1).
- `suasana`: intro (mockup) and items (plants (photos), music (review 5), cats (mockup)).
- `praise`: 4 paraphrases (never quotes, never names), the rating line, and the source note.
- `visit`: wayfinding line (photos), parking line (mockup).
- `contact`: closing line, button labels.
- `banner`: "Draf mockup untuk Volks Kaffee. Beberapa detail masih contoh sampai dikonfirmasi pemilik."
- `meta`: title "Volks Kaffee — Kopi sore sampai malam di Cipinang Jaya", description in Indonesian.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text from `content.banner` (Indonesian), colours `kayu`/`piring` |
| SmoothScroll, Container, Reveal | all | starter | Reveal is section-level only, sections 2–7 |
| `useToday` | hero, visit | new (hook) | Returns the Asia/Jakarta weekday (0–6) after mount, `null` at build. Use `Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })`. No hydration mismatch: the build renders the generic state |
| Hero | 1 | new | Awning band + `AwningEdge` + lit layer + status + buttons + Counter. `h1` is the base wordmark; the lit duplicate is `aria-hidden` |
| AwningEdge | hero, footer | new (SVG) | Scalloped valance drawn with an SVG `<pattern>`, so scallops keep their shape at any width (never stretched); about 28px scallops |
| Counter | hero | new | Full-bleed bar front in `kayu` with `kayu-2` panel lines (CSS borders or SVG), plus the items row and the glow pool (radial gradient div, opacity-animated only) |
| ProductArt: `IceChocoMint`, `MarshmallowBrownie`, `SmokedBeefSandwich`, `KopiCup`, shared `FloralPlate` | hero, menu | new (inline SVG) | Per design brief §6. Prop `decorative` sets `aria-hidden`, otherwise `role="img"` + `aria-label` |
| MenuSection | 2 | new | Header row, shelf with 4 featured items, 3-column menu list |
| BaristaSection + OrderSlip | 3 | new | Slip is an HTML list on a `piring` panel with an SVG torn edge; the ticks are a small inline SVG |
| SuasanaSection + TerraceFrieze | 4 | new (SVG) | Frieze full-bleed with `overflow-x: clip`; the cat group is wrapped in `<g data-mockup>` |
| PraiseSection | 5 | new | 2×2 list, scallop markers as small inline SVG |
| VisitSection + HousePlaque + HoursTable + MapEmbed | 6 | new | `<table>` for hours with today's row marked client-side (`aria-current="date"`); iframe `loading="lazy"`, `title="Peta lokasi Volks Kaffee"` |
| ContactFooter | 7 | new | Awning-coloured closing band, buttons, `AwningEdge`, `kayu` footer strip |
| Button | several | new | `<a>` styled per design brief §7; variants `primary-dark`, `secondary-dark`, `primary-light` |

## React Bits (max 2)
None. Browsed reactbits.dev (text animations, animations, components, micro, backgrounds).
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | – | The signature moment is the sign switching on, built with GSAP on the starter. Rejected: Split Text / Shiny Text (they compete with the light-switch and Shiny reads as neon or metal), Circular Text (a spinning badge is decoration that loops), Tear Ticket and Flip Card (gimmicks that hide content behind a gesture), Curved Loop / Scroll Velocity (marquee noise), all Backgrounds (the house's flat material grounds are the point). | 0 | – |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero lit layer (lit wordmark + tube light + awning wash) (signature moment) | load, 0.2s after mount; skipped on Sunday | opacity keyframes 0 → 0.8 → 0.25 → 0.9 → 0.4 → 1 | 0.08 / 0.07 / 0.08 / 0.06 / 0.25s (ends ≈0.75s after mount) | `none` for the dips, `power2.out` for the last step | Final state, no motion (lit; unlit on Sunday) |
| Counter glow pool | starts with the lit layer's last step (≈0.5s after mount) | opacity 0 → 1 | 0.5s | power2.out | Final state (off on Sunday) |
| Sections 2–7 (one block each) | scroll, `top 85%`, once | opacity 0 → 1, y 20 → 0 | 0.7s | power2.out | Visible, no motion |
| Buttons | hover / press (CSS) | background-color, transform translateY(-1px) / scale(0.98) | 160ms | ease-out | Colour change only |

Implementation: one `useGSAP` timeline in Hero with `{ scope }`, run only when
`!prefersReducedMotion()` and today is not Sunday. The lit layer's CSS default is opacity 1,
and GSAP uses `fromTo` so no-JS shows the lit state. On Sunday, set a `data-closed` attribute
that sets the lit layer and glow to opacity 0 in CSS (a state, not an animation).
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible (the
  base wordmark paints with the page).
- One font family via `next/font` (M PLUS Rounded 1c, 3 weights, latin subset, `display: swap`).
- No preloaders, no video backgrounds, no WebGL. Illustrations are inline SVG, each under 6 KB;
  the frieze is under 15 KB.
- Map iframe `loading="lazy"` below the fold.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; never
`sign` or `kayu` text on `bata`; `sign-off` only at display size), visible keyboard focus
(3px ring, `sign` on dark and `awning` on light), semantic landmarks (`header` hero, `main
#konten`, `section` with `aria-labelledby`, `footer`), skip link to `#konten`, `alt` or
`aria-label` on every illustration that isn't decorative, tap targets at least 44px (buttons
are 52px), `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP skipped), `lang="id"`.
The flicker has two dips and never goes to 0, staying under 3 flashes per second (WCAG 2.3.1).
Status is text, never colour alone.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner
approves. `<html lang="id">`.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Set `--leading-display: 1.05` (the phone wordmark is two lines). Colours go into `@theme` as
`--color-awning`, `--color-sign`, `--color-kayu`, `--color-bata`, `--color-pagar` and
`--color-piring`. Derived steps (`sign-off`, `kayu-2`, `pagar-dark`, `mint-drink`) are plain `:root` variables
used only inside components and SVGs. Gutter breakpoints: 20px base, 32px from 768px, 40px from
1200px.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
