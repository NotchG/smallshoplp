# TRD: KOMUKA Cafe & Eatery mockup site

## Stack (fixed)
Next.js (App Router, TypeScript, static export to `out/`), Tailwind v4, GSAP + @gsap/react
(ScrollTrigger), Lenis. Copied from `templates/site-starter/`; do not change versions.

## Content model
All copy and facts in `content.ts`. Items from [MOCKUP] lines carry `mockup: true` and render
with `{...mock(item.mockup)}` so they get `data-mockup`.

Shop-specific shape (extend the starter's `Item` type, don't replace it):
- `shop`: name "KOMUKA Cafe & Eatery", type "Cafe & Eatery", address (full, from listing),
  `phoneDisplay: "0811-9117-845"`, `phoneTel: "+628119117845"`,
  `whatsapp: { url: "https://wa.me/628119117845", mockup: true }`,
  `mapsUrl`: `https://www.google.com/maps/dir/?api=1&destination=KOMUKA%20Cafe%20%26%20Eatery&destination_place_id=ChIJ8eYMJtiLaS4RpOiKeaXUJGc`,
  `mapEmbed`: `https://www.google.com/maps?q=KOMUKA%20Cafe%20%26%20Eatery%2C%20Jl.%20Menteng%20Timur%20No.9-10%20Blok%20F4%2C%20Cakung%2C%20Jakarta%20Timur&output=embed`,
  `rating: { value: "4,9", count: "2.441" }`.
- `hours`: machine form `{ day: 0–6, open: "09:00" | "11:00" | null, close: "22:00" | null }[]`
  (0 = Minggu) plus display rows `Senin–Selasa: Tutup`, `Rabu–Sabtu: 11.00–22.00`,
  `Minggu: 09.00–22.00`.
- `hero`, `mustTry` (7 items, numbered), `plates` (4 illustrated items, each `mockup: true`
  as placeholders, with `listNo`), `menu` (3 categories, each with `from: Item` price marked
  mockup, `items: Item[]`), `pairing`, `menuPhoto` (owner-2, caption, `nameUnknown: true` →
  rendered with `data-mockup`), `spaces` (3), `praise` (5 paraphrases + note), `visit`, `contact`.
- WhatsApp prefill text (mockup): general "Halo KOMUKA, saya mau tanya…"; VIP "Halo KOMUKA,
  saya mau pesan ruang VIP untuk … orang pada tanggal …".
- Every WhatsApp button and the VIP button carry `data-mockup`. The global "kamu" register is a
  checklist item only (not tagged per string).

## Components
| Component | Section | New / starter / React Bits | Notes |
|---|---|---|---|
| Container | all | starter | content width |
| Reveal | sections 2–7 | starter | one per section body, never per item |
| SmoothScroll | layout | starter | defaults |
| MockupBanner | layout | starter, edited | Indonesian text: "Draf mockup untuk KOMUKA Cafe & Eatery. Beberapa detail masih contoh sampai Anda konfirmasi." |
| SiteNav | top | new | desktop (≥1024) only: small "KOMUKA" + anchors Menu / Ruang / Lokasi / Kontak; not sticky |
| Button | all | new | `primary` (jendela on light, lampu on dark) / `secondary` (1.5px outline); 48px tall, 6px radius; overlay-opacity hover |
| Awning | hero | new | inline SVG dome (kanopi, daun frame + 3 ribs), `aria-hidden` |
| Valance | hero | new | HTML band holding the h1 "KOMUKA" + sr-only " Cafe & Eatery" |
| Doorway | hero | new | jendela box, teak jambs, leaf-cluster SVGs in plaster pots at its base |
| DoorSign | hero | new, client | today's status from `lib/hours.ts`; the signature swing |
| StringLights | hero, contact | new | static SVG catenary, 11 bulbs (7 on phone), `aria-hidden` |
| lib/hours.ts | hero, visit | new | `statusNow()` in Asia/Jakarta: open day → "BUKA" / "hari ini 11.00–22.00" (Minggu 09.00); after 22.00 or Mon/Tue → "TUTUP" / "buka lagi <besok\|Rabu> <jam>"; also returns today's index for the hours table |
| MustTryList | 2 | new | `<ol>` in two CSS columns on desktop, numbers in Gabarito jati |
| TableBand + plate SVGs (SopBuntut, Lumpia, PuddingMangga, DirtyChai) | 2 | new | full-bleed jati field, faint plank lines via `repeating-linear-gradient`; varied plate sizes |
| ArchPhoto | 3, 4, 6 | new | `<img>` with `variant="full" \| "segment"`, width/height set, `loading="lazy"`, caption slot |
| MenuBoard | 3 | new | category title + inline "mulai Rp …" + items |
| Spaces | 4 | new | three `<li>` with lampu names; VIP button |
| Praise | 5 | new | `<ul>` of paraphrases; note with rating |
| HoursTable | 6 | new | `<table>`; "Tutup" row bold jati; today's row tinted after mount (`aria-current="date"`) |
| MapEmbed | 6 | new | `<iframe loading="lazy" title="Peta lokasi KOMUKA">`, 480px tall desktop, 4:3 phone |
| Contact + Footer | 7 | new | tel, WhatsApp, directions; footer block |

Photos: copy `shops/komuka/photos/owner-1.jpg` → `public/photos/teras-depan.jpg`,
`owner-2.jpg` → `public/photos/nasi-goreng.jpg`, `owner-3.jpg` → `public/photos/tampak-depan.jpg`.
Never copy `photo-*.jpg`. If a file is over 400 KB after copying, re-encode at ~1400px long edge.

## React Bits (max 2)
| Component | Where | Why it suits this shop | Weight / deps | Reduced-motion fallback |
|---|---|---|---|---|
| none | — | The one moment (door sign) is a few lines of GSAP; anything added would be a second moment or decoration. Considered and rejected: Lanyard (hanging card, but three.js/rapier physics and WebGL), Flip Card (the sign isn't something visitors flip), Count Up (the 4,9 rating is a fact to read, not a show), Circular Text and Split/Blur Text (text effects on the name compete with the sign). | 0 | — |

Install with the command shown on the component's reactbits.dev page (TypeScript + Tailwind
variant). Read its source after installing; strip props and effects you don't use.

## Motion spec
Follow `motion-rules.md`. One row per animated element:
| Element | Trigger | Properties | Duration | Ease | Reduced motion |
|---|---|---|---|---|---|
| Hero door sign (signature moment) | mount, after status text is set, 0.15 s delay | `rotation` keyframes 0 → −6 → 4 → −2 → 1 → 0, `transformOrigin` at the hook (top centre of the cord group) | 0.22 / 0.36 / 0.32 / 0.28 / 0.22 s (1.4 s) | first `sine.out`, rest `sine.inOut` | final state, no motion (text still updates) |
| Section bodies 2–7 | ScrollTrigger `top 85%`, once | `autoAlpha` 0→1, `y` 20→0 | 0.7 s | `power2.out` | visible, no motion |
| Buttons, nav links | hover / press | overlay `opacity` 0→0.12; `scale(0.98)` on `:active` | 0.15 s | ease-out (CSS) | instant |

Nothing else moves: no hero reveal, no string-light twinkle, no plate hover, no parallax.
Lenis: starter defaults (lerp 0.1, native touch).

## Performance budget
- LCP under 2.5 s on a mid-range phone; nothing animates before the hero text is visible.
  The hero has no photo, so LCP is the h1 text.
- At most 2 font families via `next/font`, subset, `display: swap`. Gabarito 700–800,
  Figtree 400–600 only.
- No preloaders, no video backgrounds, no WebGL unless the design brief justifies it.
- Animate transform and opacity only.
- Owner photos and the map iframe lazy-load; every `<img>` has width and height.

## Accessibility
WCAG 2.2 AA contrast for all text on its actual background, visible keyboard focus,
semantic landmarks, alt text on every placeholder, tap targets at least 44 px,
`prefers-reduced-motion` honoured everywhere (Lenis off, GSAP and React Bits static).
- All alt text and aria labels in Indonesian. Owner photos: "Teras depan KOMUKA: meja piknik
  kayu jati di antara tanaman", "Nasi goreng dengan daging berlapis wijen, telur mata sapi,
  kerupuk, dan acar di atas daun pisang", "Tampak depan gedung KOMUKA".
- Plate SVGs: `role="img"`, `aria-label="Ilustrasi contoh: <nama>"`. Awning, doorway, plants,
  string lights: `aria-hidden="true"`.
- The door sign is plain text in a `<p>`; no `aria-live` (it must not announce on load).
- Skip link "Langsung ke isi" to `#konten`.

## SEO / meta
Title and description from `content.ts`. `noindex` stays on (starter default) until the owner approves.
- `<html lang="id">`.
- Title: "KOMUKA Cafe & Eatery · Cakung, Jakarta Timur".
- Description: "Kafe dan tempat makan di Jl. Menteng Timur, Ujung Menteng, Cakung. Kopi, teh,
  makanan berat dan camilan. Buka Rabu–Minggu."

## Type and layout implementation
Sizes and widths come from the CSS variables in `globals.css` (`--step-*`, `--container`,
`--gutter`, `--section-y`) and the `.t-*`, `.section` and `<Container>` helpers. Never write a
Tailwind arbitrary value with spaces (`text-[clamp(1rem, 2vw, 3rem)]` silently does nothing).
- Values for every variable are in design-brief §4–5. Add `--leading-lead: 1.3` and update `.t-lead`.
- Hero grid at ≥1200px: `grid-template-columns: 1fr var(--awning) 1fr` with `--awning: 560px`
  defined in `:root`; 768–1199: awning centred at `min(100%, var(--awning))`, two columns below;
  <768: single column.
- Add `data-check` to the door sign word, plate labels, must-try items, menu category titles,
  space names and the contact number so `npm run shots` reports their sizes.

## Done when
`npm run build` passes with no type errors, `out/index.html` exists, the visual review step
passes (`npm run shots`), and the implementation plan's final checks pass.
