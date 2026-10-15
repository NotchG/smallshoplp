# PRD: Warkop Bank Gondrong JGC mockup site

## Goal
A one-page mockup that makes Warkop Bank Gondrong JGC's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (their own red
sachet cart, their name, their hours), and the checklist questions are few enough to answer
in one conversation.

All site copy, buttons, hours, the draft banner and `lang="id"` are in Bahasa Indonesia
(brief, tone of voice).

## The shop in one paragraph
A proper Jakarta warung kopi in Perumahan Jakarta Garden City, Cakung, open every day
05:30–24:00 (hours) at inexpensive prices (listing), rated 4.6 from 90 Google reviews
(listing). A red cart hung with rows of sachet coffees, milk coffees, chocolate and malt
drinks stands under an umbrella, with tables and plastic chairs in the shade of mango trees
(photos; reviews 2, 4). There is an indoor room with patterned wallpaper, red tables and a
speaker, and people sit lesehan on colourful mats (photos). Locals come to sit and relax,
traders hang out (review 3), black-coffee regulars come for kopi pahit (review 5), and circles
of friends chat late into the night (photos). People praise the cool shade, the lots of cheap
drinks (review 4) and the funny, friendly long-haired crew (reviews 2, 3).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local from JGC, on a phone | check it's open and get there | see today's hours on the hanging BUKA sign and the "Petunjuk Arah" button in the first screen |
| [MOCKUP] Early-shift worker or driver | know if it's open at dawn | read "05.30" in the first screen and again on the day line |
| Friends planning a late hangout | know it runs till midnight and has room to sit | see 24.00, the shaded outdoor seats, the indoor room and lesehan |
| Black-coffee regular or newcomer | see what's on and roughly what it costs | scan the menu strips, with kopi pahit first and example prices beside the names |
| The owner (pitch) | recognise their warkop | see their own cart photo, their name painted on cart red, their hours |

## Primary actions
1. Petunjuk Arah (directions in Google Maps)  2. Telepon (call 0812-1248-2907)  3. Lihat menu (scroll to "Ngopi dulu")
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Honesty | "Draf tampilan untuk Warkop Bank Gondrong JGC. Belum situs resmi, sebagian isi masih contoh." (CLAUDE.md rule 7) |
| Hero | Recognition plus first actions | Name "Warkop Bank Gondrong JGC" (listing); kicker "Warung kopi · JGC, Cakung" (listing type and address); owner-1.jpg, the sachet cart (owner photo); hanging sign "BUKA · 05.30–24.00 · tiap hari" (hours); sub-line [MOCKUP] "Terasnya warga JGC, dari kopi subuh sampai kopi tengah malam." (brief personality); buttons Petunjuk Arah and Telepon (listing) |
| Ngopi dulu | What's on, how cheap | Heading [MOCKUP] "Ngopi dulu, urusan belakangan." (brief tone line). Lead: kopi pahit is the go-to (review 5); the cart is hung with sachet coffee, milk coffee, chocolate and malt drinks (photos); lots of drinks at friendly prices (review 4). Note [MOCKUP] "Harga di bawah masih contoh." Four strips. **Kopi**: Kopi hitam, "kopi pahit, teman nongkrong" (review 5), Rp 5rb [MOCKUP price]; Kopi tubruk [MOCKUP]. **Es**: Es kopi susu (photos), Rp 7rb [MOCKUP price]; Es teh manis [MOCKUP]. **Di gerobak**: photo tile cropped from owner-1; Kopi sachet, Kopi susu, Cokelat, Minuman malt (photos); Teh tarik, Susu jahe [MOCKUP]. **Makan**: Indomie telur, "rebus atau goreng", Rp 12rb [MOCKUP]; Roti bakar [MOCKUP]; Gorengan [MOCKUP] |
| Di bawah pohon mangga | The place | owner-3.jpg cropped (night at the stall under the mango tree; owner photo). Lead: shady, plastic chairs, a place to sit for a while (reviews 2, 3, 4; photos). Three spots: **Di luar**, tables and plastic chairs under the mango trees (reviews 2, 4; photos); **Ruang dalam**, patterned wallpaper, red tables, a speaker (photos); **Lesehan**, colourful mats (photos) |
| Dari subuh sampai tengah malam | The hours as a day | "Buka setiap hari, 05.30–24.00" (hours). Three stops: 05.30, [MOCKUP] "Kopi pertama sebelum berangkat kerja."; Siang, shade under the mango tree with an es kopi susu (reviews 2, 4; photos); 24.00, [MOCKUP] "Ngobrol sama teman sampai tengah malam, baru pulang." |
| Kata mereka | Social proof | "4,6 dari 90 ulasan di Google" (listing). Note: "Diringkas dari ulasan pelanggan di Google, bukan kutipan langsung." Four paraphrases, no names and no quote marks: shady and cool under the mango tree (reviews 2, 4); good for sitting a long while, traders hang out too (review 3); the long-haired crew is friendly and full of jokes (reviews 2, 3); lots of drinks, friendly prices (review 4) |
| Kunjungi kami | Find it | Google Maps embed (place); address "Jl. Srikaya, Perumahan Jakarta Garden City, RT.007/RW.04, Cakung Timur, Cakung, Jakarta Timur 13910" (listing, cleaned in brief); "Setiap hari · 05.30–24.00" (hours); Petunjuk Arah button; "Buka di Google Maps" link (listing) |
| Hubungi kami | Close | Heading [MOCKUP] "Mampir, ya."; body [MOCKUP] "Telepon dulu atau langsung datang aja. Kopi pahitnya sudah siap."; Telepon 0812-1248-2907 (listing); Petunjuk Arah; Chat WhatsApp [MOCKUP] |
| Footer | Wrap-up | Name, short address, hours, "Info dari Google Maps" (listing) |

Not used on the site: owner-2.jpg (close-up identifiable faces), owner-4.jpg (a young child),
and all `photo-*.jpg` (customer photos, reference only).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
Each becomes a line in `owner-checklist.md`.

1. Is "Terasnya warga JGC, dari kopi subuh sampai kopi tengah malam" a fair line for your warkop?
2. Is "Ngopi dulu, urusan belakangan" OK as the line on the menu?
3. Do early-shift workers and drivers come in for the first coffee around 05.30?
4. Is "ngobrol sama teman sampai tengah malam" how your evenings usually go?
5. Do you serve kopi tubruk?
6. Do you serve es teh manis, teh tarik and susu jahe?
7. Do you serve Indomie (rebus or goreng) with egg, roti bakar and gorengan?
8. Are these example prices close: kopi hitam Rp 5rb, es kopi susu Rp 7rb, Indomie telur Rp 12rb? (If not, what are they?)
9. Is the relaxed tone right (talking to the reader as "kamu", a little Jakarta slang), or should it be rougher or more polite?
10. Is "Mampir, ya. Telepon dulu atau langsung datang aja." OK as the closing line?
11. Does 0812-1248-2907 take WhatsApp?
12. Is the address correct: Jl. Srikaya, Perumahan Jakarta Garden City, RT.007/RW.04, Cakung Timur, Cakung, Jakarta Timur 13910?
13. Are you open every day 05.30–24.00, holidays included? (The sign on the site switches to "TUTUP" between 00.00 and 05.30.)
14. Can we use the photo of your sachet cart as the main picture?
15. Are the people in the night photo under the mango tree happy to be on the site?
16. The drinks and Indomie are drawings for now. Would you like to send photos of your own to replace them?
