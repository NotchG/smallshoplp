# TRD: Have A Treat mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`, in Bahasa Indonesia except menu names and the English mottos.
Items from [MOCKUP] lines carry `mockup: true` and render with `{...mock(item.mockup)}` so they
get `data-mockup`.

```ts
type Treat = { id: string; name: string; note: string; source: string;
               art: 'tiramisu' | 'cheesecake' | 'frenchToast' | 'cakeOfDay' | 'cappuccino'
                  | 'matcha' | 'hpPotion' | 'wings'; mockup?: boolean };
type PriceLine = { text: string; mockup: true };            // "Kue mulai Rp 35rb" etc.
type PlateLabel = { text: string; x: number; y: number };     // % position on owner-2
type Paraphrase = { text: string; source: string };          // no names, no quotes
```
Exports: `shop` (name, address, phone, `tel`, instagram URL, `directionsUrl`, `mapEmbedUrl`,
hours "10.00–22.00", rating "4,8", reviewCount 183), `hero`, `sweets`, `breakfast`, `drinks`,
`room`, `reviews`, `contact`, `meta`. Copy drafts are in the PRD sections table.

Links (from raw.json):
- Directions: `https://www.google.com/maps/dir/?api=1&destination=Have+A+Treat&destination_place_id=ChIJj7x9wQGLaS4Rai6OpBSAXQ8`
- Map embed: `https://www.google.com/maps?q=Have+A+Treat,+Ruko+The+Boulevard+No.+30,+Jakarta+Garden+City&output=embed`
- Phone: `tel:+6281284346371`; WhatsApp [MOCKUP]: `https://wa.me/6281284346371`
- Instagram: `https://www.instagram.com/haveatreat_/`

Plate labels on owner-2 (starting positions, tune on screenshots): bacon (38%, 26%), tomat
panggang isi bayam & keju (52%, 30%), kentang tumis bawang (76%, 30%), sosis (20%, 50%),
omelet jamur (58%, 82%).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | text in Indonesian (PRD) |
| Container | all | starter | `--container` 1200px |
| Reveal | sections 2–8 | starter | section-level only, never inside the hero |
| SmoothScroll (Lenis) | layout | starter | defaults |
| Letterboard | hero, contact | new | felt panel, 10px teak frame, radius 6px, faint horizontal grooves every 1.5em (the object's real texture). Props `lines: string[]`, `animate?: boolean`. Letters as `aria-hidden` spans in Fredoka `wdth` 75 caps at `--step-lead`; sr-only text alongside. Only the hero instance animates. |
| ArchPhoto | hero | new | `next/image` (unoptimized for export) in a 4:5 box, `border-radius: 999px 999px 16px 16px`, `object-position: 50% 45%`, `priority` |
| Niche | sweets | new | teak 10px arch frame, `sand` (or `lilac`) interior, 8px teak shelf at the bottom, illustration centred on the shelf; `size: 'large' | 'small' | 'row'` (row = phone list variant, 120px niche left of text) |
| treats.tsx | sweets, breakfast, drinks | new | eight flat geometric SVGs, viewBox 240×200, shared baseline at y=176, tints from design brief §3, `role="img"` + Indonesian `aria-label` |
| PlatePhoto | breakfast | new | owner-2 1:1 with absolutely positioned label chips (plaster, felt text, `--step-small`, pill, 1px felt leader ≤24px); chips hidden below 768px, where the components render as a sentence under the photo |
| WaveRule | under hero, top of close | new | inline SVG, three sine stripes, `currentColor`, `aria-hidden` |
| ShelfRow | drinks | new | three drinks on a 3px plaster shelf line on teak; phone: stacked rows |
| ReviewGrid | reviews | new | 2×2 on desktop, list on phone, wave-bullet glyph, no quotation marks |
| VisitBlock | visit | new | address, hours in amber, button, map `<iframe loading="lazy" title="Peta lokasi Have A Treat">`, 16px radius |
| ContactList | contact | new | 56px-tall link rows, arrow 8px after text |

## React Bits (max 2)
None. The signature letterboard is a small custom component on the GSAP already in the stack,
and it has to look like a felt letterboard, not a generic text effect.
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | | Considered and rejected: Split Text (generic char rise; the letterboard needs fixed felt cells and a hand-placed settle), Split Flap Text (an airport board, wrong world), Circular Text (decorative, no job), Pattern Waves / Line Waves (animated background noise; the wave belongs as a static 28px rule) | 0 | n/a |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero letterboard letters (signature moment) | mount, 0.15s delay | `y: -0.4em → 0`, `rotate: -4deg → 0`, `opacity: 0 → 1` (`gsap.fromTo`) | 0.38s each, stagger 0.03s, total ~1.05s | `power3.out` | final state, no motion |
| Sections 2–8 | ScrollTrigger `top 85%`, once | `y: 20 → 0`, `opacity: 0 → 1` | 0.6s | `power2.out` | final state |
| Buttons, contact rows | hover / focus-visible / active | background colour; `translateY(-1px)`; active `scale(0.98)` | 180ms | ease-out (CSS) | colour change only |
| Niche illustration | hover, `(hover: hover) and (pointer: fine)` | `translateY(-4px)` | 200ms | ease-out (CSS) | none |

Letterboard no-flash recipe: an inline script in `<head>` adds `js` to `<html>`. CSS:
`.js [data-lb-char] { opacity: 0; animation: lb-show 0s 1.2s forwards; }` (failsafe keyframe to
`opacity: 1`). On mount the component sets `data-lb="run"` on the board, and
`[data-lb="run"] [data-lb-char] { animation: none; }` hands control to GSAP. Under
`prefers-reduced-motion: reduce`, letters get `opacity: 1` and GSAP is skipped. No-JS: no `js`
class, letters visible.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible. The
  hero photo and name never animate.
- Photos: copy owner-1 and owner-2 to `site/public/photos/`, resized to 1200px on the long edge
  for owner-2 and 1200×1800 for owner-1, JPEG quality ~72 (`sips`), each under ~300 KB.
- At most 2 font families via `next/font`: Fredoka (`axes: ['wdth']`, latin) and Sacramento
  (weight 400, latin), `display: swap`.
- Map iframe `loading="lazy"`. No preloaders, no video, no WebGL.
- Animate transform and opacity only.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3), visible
keyboard focus (3px `teak` outline on light grounds, 3px `amber` on teak and felt, 3px offset),
semantic landmarks (`header` hero, `main`, one `section` with `h2` per section, `footer`), alt
text on every image in Indonesian, tap targets at least 44px (contact rows 56px), `lang="id"`,
`::selection` in lilac with felt text, `prefers-reduced-motion` honoured everywhere (Lenis off,
GSAP static). Hero `h1` content is "Have A Treat"; lowercase is CSS only. Letterboard letters
`aria-hidden` with sr-only text. Paraphrased reviews are plain paragraphs, not `blockquote`.

Alt text:
- owner-1: "Rak kayu melengkung berisi buku, radio, dan papan huruf bertuliskan Better days are coming, dengan ruang makan berlampu hangat di belakangnya."
- owner-2: "Omelette breakfast dilihat dari atas: omelet jamur, sosis, bacon, kentang tumis bawang, dan tomat panggang isi bayam dan keju."

## SEO / meta
Title and description from `content.ts`:
- Title: "Have A Treat · Kafe dessert & brunch di Jakarta Garden City"
- Description: "Tiramisu, cheesecake lemon, french toast, cappuccino, dan sarapan di Ruko The Boulevard No. 30, JGC. Buka setiap hari 10.00–22.00."
`noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values are in design brief §4 and §5. Add `.t-script` (Sacramento, `--step-head`, teak) and
`.t-board` (Fredoka `font-stretch: 75%`, 500, uppercase, tracking 0.08em, `--step-lead`).
Palette goes into `@theme` as `--color-plaster`, `--color-sand`, `--color-teak`, `--color-felt`,
`--color-amber`, `--color-lilac`.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
