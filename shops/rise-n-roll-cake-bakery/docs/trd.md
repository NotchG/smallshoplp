# TRD: Rise n Roll Cake & Bakery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`. All strings in Bahasa Indonesia.

```ts
shop      { name: "Rise n Roll Cake & Bakery", type: "Cheesecake & kafe", area: "Lubang Buaya, Jakarta Timur",
            address: "Jl. Monumen Pancasila Sakti No. 14, Lubang Buaya, Cipayung, Jakarta Timur 13810",
            phone: "", mapsUrl, directionsUrl, mapEmbedUrl,
            hours: [{ days: "Senin–Jumat", time: "08.00–21.00", isoDays: [1,2,3,4,5] },
                    { days: "Sabtu–Minggu", time: "08.00–22.00", isoDays: [6,0] }],
            hoursNote: "Buka setiap hari", rating: { value: "4,9", count: 290 } }
hero      { area, nameMain: "Rise n Roll", nameSub: "Cake & Bakery", lead: Item(mockup), ctaLabel, secondaryLabel }
cheesecakes: Product[]   // { name, note: Item, price?: Item, flavour: "blueberry"|"biscoff"|"original"|"matcha"|"klepon", mockup? }
wholeCake { title, body, cta, mockup: true }
menuGroups: { title, priceNote?: Item, drawing: "risol"|"bowl"|"sus"|"latte", items: Item[] }[]
room      { lead: Item(mockup), facts: Item[], caption }
praise    { note, items: Item[] }       // paraphrases only, no names, no quote marks
contact   { line: Item(mockup), whatsapp: Item(mockup), instagram: Item(mockup) }
```
Links (no API key needed):
- `directionsUrl`: `https://www.google.com/maps/dir/?api=1&destination=Rise%20n%20Roll%20cake%20and%20bakery&destination_place_id=ChIJW3mgWh_zaS4R6nTOcpRfyd0`
- `mapsUrl`: `https://maps.google.com/?cid=15981409843886847210` (from raw.json `googleMapsUri`, tracking param dropped)
- `mapEmbedUrl`: `https://www.google.com/maps?q=Rise%20n%20Roll%20cake%20and%20bakery%2C%20Jl.%20Monumen%20Pancasila%20Sakti%20No.14%2C%20Lubang%20Buaya&output=embed`
- WhatsApp / Instagram placeholders: render as buttons linking to `#hubungi`, label "WhatsApp (nomor menyusul)" /
  "Instagram (akun menyusul)", `data-mockup`. No invented number or handle.

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| MockupBanner | top | starter | Text in Indonesian (see PRD). |
| SmoothScroll, Container | all | starter | Lenis defaults. |
| Reveal | 2–6 | starter | One per section content block only. |
| Hero | hero | new | Server component; text static. |
| HeroCake | hero | new, client | Inline SVG (viewBox `0 0 480 400`): stand, cake-minus-slice, `<g data-slice>`, shadow. Owns the signature tween. |
| TodayHours | hero, visit | new, client | Weekday in `Asia/Jakarta` via `Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" })`; Sat/Sun → 22.00. SSR/no-JS fallback: "Buka setiap hari, 08.00–21.00 (Sabtu–Minggu sampai 22.00)". In Visit it marks today's row with the mustard pill. No open/closed claim. |
| Arch | hero, cheesecake, room | new | One SVG/CSS arch shape (`border-radius: 999px 999px 0 0` on a terracotta block), aria-hidden. |
| Slice | cheesecake | new | One SVG with a `flavour` prop changing topping/body fills; role="img", aria-label e.g. "Ilustrasi sepotong blueberry cheesecake". |
| ArchNiche | cheesecake | new | Arch + Slice on a shelf line; label stack (name lead, note small, price body 600) directly below. Not interactive, no hover motion. |
| WholeCake | cheesecake | new | SVG whole cheesecake with 16/20 cm rings; `data-mockup` band. |
| MenuGroup + 4 drawings | menu | new | Risol, MatahBowl, SusKrakelin, Latte SVGs, ~120px tall, same style as Slice. |
| RoomVignette | room | new | SVG: arched window, sage wall, walnut table, vase with rose, mustard chair. Caption below. |
| Praise | praise | new | 3 paraphrases, `<p>` not `<blockquote>`. |
| Visit | visit | new | Map `<iframe loading="lazy" title="Peta lokasi Rise n Roll Cake & Bakery">` + `wall` info card on `.bg-terrazzo`. |
| Contact | footer | new | Walnut band, centred 720px, `id="hubungi"`. |
| `.bg-terrazzo` | visit | new CSS | Repeating SVG data-URI tile (~240px) of 12–16 irregular chips on #EEEAE2. |

## React Bits (max 2)
**None.** Checked reactbits.dev (Text Animations, Animations, Components, Micro Interactions,
Backgrounds). The signature is a custom GSAP tween on the shop's own illustration, which no library
component gives. Rejected: Rotating Text (would loop flavours in the headline forever; rule 7 says text effects run once),
Count Up (turns a factual 4,9 into a gimmick), Circular Text (generic badge), Sticker Peel (not tied to anything the shop has),
all Backgrounds (motion-rules rule 7: no background noise).
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| (none) | | | | |

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero slice (signature moment) | load, 0.25s delay, once | `gsap.from` on `[data-slice]`: x +46, y −12, rotation +6 (SVG units, `svgOrigin` at slice tip) | 0.9s (`duration.hero`) | `expo.out` (`ease.outStrong`) | final state (slice out), no motion |
| Hero slice shadow | with slice | opacity 0 → 1 | 0.9s | `power2.out` | final state |
| Section content blocks (Cheesecake, Menu, Room, Praise, Visit) | ScrollTrigger `top 85%`, once | opacity 0 → 1, y 20 → 0 | 0.6s (`duration.reveal`) | `power2.out` | visible, no motion |
| Buttons / links | hover, press | background/text colour (150ms CSS); press `translateY(1px)` | 0.15s | ease-out | colour only |
Hero text, menu columns, niches and paraphrases are never animated individually.
`useGSAP` with a scope in HeroCake; `gsap.from` runs in the layout effect so there is no flash of the final state.

Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
- At most 2 font families via `next/font`, subset, `display: swap`: Young Serif 400, Figtree 400/600.
- No preloaders, no video backgrounds, no WebGL.
- Animate transform and opacity only.
- Inline SVG illustrations, each under ~5 KB, all under ~45 KB total; map iframe lazy and below the fold.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background (pairs in design brief §3; no
walnut-soft or terracotta text on sage), visible keyboard focus (2px walnut outline, 3px offset;
wall outline on walnut bands), semantic landmarks (`header` hero, `main`, `section` with `aria-labelledby`,
`footer` contact), alt text / `aria-label` in Indonesian on every illustration, decorative arches `aria-hidden`,
tap targets at least 44px, `prefers-reduced-motion` honoured everywhere (Lenis off, GSAP skipped).
`lang="id"` on `<html>`.

## SEO / meta
Title "Rise n Roll Cake & Bakery · Cheesecake dan kafe di Lubang Buaya", description
"Cheesecake dan kafe di Jl. Monumen Pancasila Sakti No. 14, Lubang Buaya, Jakarta Timur. Buka setiap hari."
from `content.ts`. `noindex` stays on (starter default) until the owner approves.

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
Values from design brief §4–5; `--leading-display: 1.05`, `.t-lead` line-height 1.2.
Gutter/section-y breakpoints: base 20px/64px, `min-width: 768px` 32px/96px, `min-width: 1200px` 40px/112px.
If "Rise n Roll" wraps in the hero between 1024 and 1200px, widen the text column to cols 1–8 in that range rather than shrinking the type.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
