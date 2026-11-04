# TRD: LIBRA & Partners Law Firm mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

Shop-specific starter edits:
- `app/layout.tsx`: `<html lang="id">`. Load Besley and Atkinson Hyperlegible Next via `next/font/google` and
  expose them as `--font-display` / `--font-body`.
- `components/MockupBanner.tsx`: the text in Bahasa Indonesia, "Draf mockup untuk {shopName}. Beberapa detail
  masih contoh sampai Anda konfirmasi."
- Metadata in Bahasa Indonesia; `robots` noindex stays.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shape (extend the starter's types, keep `Item`):
- `shop`: `name` ("LIBRA & Partners Law Firm"), `nameLine` ("LIBRA"), `nameTail` ("& Partners Law Firm"),
  `type` ("Advokat / Konsultan Hukum"), `addressLines` (["Jl. Duren No. 31", "Semper Barat, Cilincing",
  "Jakarta Utara 14130"]), `phoneDisplay` ("0811-8421-184"), `tel` ("tel:+628118421184"), `whatsapp`
  (`{ href: "https://wa.me/628118421184", mockup: true }`), `mapsUrl` (raw.json `googleMapsUri`),
  `directionsUrl` (`https://www.google.com/maps/dir/?api=1&destination=LIBRA%20%26%20PARTNERS%20LAW%20FIRM%2C%20Jl.%20Duren%20No.31%2C%20Semper%20Barat&destination_place_id=ChIJgwAdNQAhai4RIqewO6LZD6o`),
  `mapEmbedUrl` (`https://maps.google.com/maps?q=LIBRA%20%26%20PARTNERS%20LAW%20FIRM%2C%20Jl.%20Duren%20No.31%2C%20Semper%20Barat%2C%20Cilincing%2C%20Jakarta%20Utara&z=17&output=embed`),
  `hours` ("Buka setiap hari, 24 jam"), `rating` (`{ value: "5,0", count: 16 }`).
- `decode`: words as segments, so the markup and the screen-reader text come from one source:
  `[[{t:"L",i:true},{t:"embaga"}], [{t:"Hukum"}], [{t:"I",i:true},{t:"ndonesia"}], [{t:"B",i:true},{t:"ebas"}], [{t:"R",i:true},{t:"ib"},{t:"a",i:true}]]`.
- `hero.mission` (mockup), `meaning[]`, `practice` (`intro`, `groups[{title, items[{title, line, mockup}]}]`,
  `feeNote`), `collector` (`intro`, `steps[]`, `note`), `praise[]` (paraphrased themes, no names),
  `visit` (`wayfinding`, `callFirst` mockup), `closing` (`line` mockup, `signOff`), `footer.disclaimer` (mockup).
- Every string is the PRD's wording. Run the PRD R1–R8 word check over `content.ts` before final checks.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Reveal | 2–6 | starter | Section content block only, once; tokens per design brief §8 |
| Container | all | starter | `--container` 1200px |
| MockupBanner | top | starter | Text translated (above) |
| SmoothScroll | layout | starter | Lenis defaults, off for reduced motion |
| ScalesMark | 1, 7 | new | Inline SVG, `viewBox 0 0 48 48`, ≤ 8 paths, `tinta` strokes 2px, `emas` pivot dot. `aria-hidden`. Not the emblem: no ring, no laurel, no text |
| DoubleRule | 1, 7 | new | `<hr>`: `border-top 4px tinta`, `height 3px`, `border-bottom 1px tinta` (phone 3 / 2 / 1) |
| DecodeLine | 1 | new (server component) | Renders `decode` segments: initials `<b class="dl-i">`, rest `<span class="dl-r" style="--w:n">`. Visible markup `aria-hidden="true"`, plus a `.sr-only` span with the plain phrase. CSS-only animation (see motion spec) |
| ActionButton | 1, 4, 6, 7 | new | `<a>` styled as a button; variants `primary` / `secondary`, grounds `light` / `green`; 52px tall, 4px radius; `mockup` prop adds `data-mockup` (WhatsApp) |
| Kop | 1 | new | 12-col grid: name block cols 1–8, contact block cols 9–12; DoubleRule; DecodeLine; mission cols 1–7; actions + hours cols 9–12. Phone: single column, mark above "LIBRA" |
| NameMeaning | 2 | new | Heading cols 1–4, text cols 6–11 |
| PracticeAreas | 3 | new | `kabut` ground. Heading, intro, fee note cols 1–4; groups cols 6–12 in a 2-col inner grid; `<h3>` group titles |
| CollectorSteps | 4 | new | Full-bleed `rolling` ground. `<ol>` with Besley `emas` numerals at `--step-lead`; papan text; papan ActionButton |
| ReviewThemes | 5 | new | Heading + rating line + 4-up row (`<ul>`), short `emas` bar above each item; no `<blockquote>`, no `<q>`, no quote marks |
| VisitMap | 6 | new | `<iframe>` `loading="lazy"`, `title="Peta lokasi LIBRA & Partners Law Firm"`, `referrerpolicy="no-referrer-when-downgrade"`, 4:3 box on `kabut` so an empty frame never looks broken. A plain "Buka di Google Maps" link under it |
| Closing | 7 | new | DoubleRule; contact cols 1–6; sign-off cols 8–12; footer line (small) |

## React Bits (max 2)
**None.** Zero is right here:
| Considered | Where | Why it doesn't suit this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| Split Text / Blur Text | hero | Generic per-letter entrances. The decode line already does the one meaningful text move, and two would compete | GSAP SplitText or motion dep | n/a |
| Decrypted Text / Scrambled Text | hero | Scrambling reads as hacking or scam, wrong for visitors who fear fraud | — | n/a |
| Count Up | reviews | Animating a rating is attention-seeking (Pasal 8, PRD R6) | — | n/a |
| Any Background (Aurora, Particles, Noise…) | — | Contradicts the calm signboard world and R6 | WebGL/canvas | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero decode line (signature moment): `.dl-r` spans | load (CSS keyframes, no JS) | `opacity 0→1`, `translateX(-6px)→0`; `animation-delay: calc(0.25s + var(--w) * 0.1s)`; `animation-fill-mode: both` | 0.5s each, sequence ≈ 1.25s | `cubic-bezier(0.16, 1, 0.3, 1)` | final state, no motion. The whole rule sits inside `@media (prefers-reduced-motion: no-preference)` because the starter's global rule cuts durations but not delays |
| Section content (2–6) | ScrollTrigger `top 85%`, once (starter Reveal) | `opacity`, `y 20→0` | 0.6s | `power2.out` | final state, no motion |
| Buttons | hover / press (CSS) | `background-color`, `color`; `translateY(1px)` on `:active` | 150ms / 100ms | ease-out | colour change only |

- Initials (`.dl-i`) and the H1, mission and buttons are never animated and never hidden.
- `lib/motion.ts`: `duration.reveal 0.6`, `duration.press 0.15`, `duration.hero 1.25` (documentation only), `distance.reveal 20`.
- Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Shop-specific: no raster images at all. The map iframe is lazy and below the fold. Besley loads weights
  400/600/700 only; Atkinson 400/700 only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
Shop-specific:
- Contrast pairs are in design brief §3. `emas` is never text or a focus ring on light grounds.
- Focus: 3px `tinta` outline at 3px offset on light grounds, `emas` on `rolling`.
- One `<h1>` (the name: "LIBRA" + "& Partners Law Firm" in one heading). Sections are `<section aria-labelledby>`
  with `<h2>`; practice groups are `<h3>`; steps are an `<ol>`.
- DecodeLine is read once, as plain text (`.sr-only` copy; decorated copy `aria-hidden`).
- Phone links use `tel:`. Button labels say what happens: "Telepon 0811-8421-184", "WhatsApp", "Petunjuk Arah".
- The decorative scales mark is `aria-hidden`. The iframe has a `title`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- Title: "LIBRA & Partners Law Firm · Advokat / Konsultan Hukum di Cilincing, Jakarta Utara"
- Description: "Kantor advokat dan konsultan hukum di Jl. Duren No. 31, Semper Barat, Cilincing, Jakarta Utara. Telepon 0811-8421-184."
- No superlatives in meta either (R2).

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values to enter (design brief §4–5):
- `@theme`: `--color-papan #F4F6F8`, `--color-tinta #13223F`, `--color-lis #4A5A70`, `--color-kabut #E3E9EE`,
  `--color-rolling #0F3B32`, `--color-emas #C9A227`. `html` background papan, colour tinta.
- `:root`: `--container 1200px`; `--gutter 20px` (40px from 768); `--section-y 64px` (112px from 768); the five
  `--step-*` clamps from design brief §4; `--leading-display 0.9`; `--leading-head 1.12`; `--leading-body 1.55`.
- Caps helpers: `.caps-lead { text-transform: uppercase; letter-spacing: .06em }`, `.caps-small { … .12em }`.
- Prose blocks get `max-width: 62ch`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
