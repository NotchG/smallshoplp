# PRD: Soes Roti Kue Merdeka mockup site

## Goal
A one-page mockup that makes the owner of Soes Roti Kue Merdeka say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (their door lettering,
their peach box, their jars with taped price cards), and the checklist questions are few enough to
answer in one conversation.

Site language: Bahasa Indonesia throughout (copy, buttons, hours, banner), `lang="id"`. Register "Anda" [MOCKUP].

## The shop in one paragraph
An old-school toko kue at Jl. Balai Pustaka No. 12, Rawamangun, open every day 07.00–20.00, with
wood-grain cabinets, glass display cases, big glass jars of abon and a stack of pale peach Merdeka
boxes above the shelves (photos). People come for the kue soes with rum custard filling, which
reviewers call legendary and tie to the well-known soes from Bandung: Jakarta fans no longer need to
make the trip (reviews 1, 2). They also praise the abon ayam and abon sapi and the telur asin
(review 3), and know it as a place for traditional cakes, bread and local snacks (reviews 4, 5).
Abon is sold by weight from the jars (Abon Ayam Pedas Rp 21.000 per 100 gram on the photo, date
unknown), next to shelves of kacang mete, kacang bawang, cokelat, Brem Solo, Roti Kecik Ganep and
Teng-teng Beras (photos). Rated 4,5 from 308 Google reviews; inexpensive (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Fan of the Bandung soes, living in Jakarta | confirm this is the soes they know, then go | see "soes isi vla rum" right below the first screen and get directions in one tap |
| Rawamangun neighbour on a motorbike | know if it's open now | see open/closed and today's hours on the first screen, plus the parking note |
| Pantry and snack shopper | know what's on the shelves | see abon, telur asin and the shelf snacks by their shop names, with any confirmed price |
| Gift buyer (arisan, family visit) [MOCKUP] | order a box of soes | see box sizes and a call button |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. Telepon (021) 4757603  3. WhatsApp, only once the owner gives a number [MOCKUP]
The first screen shows action 1 without scrolling, on a phone, together with today's hours.

## Sections and content
All copy below is the draft text for `content.ts`. Prices use "Rp 21.000", times "07.00–20.00", rating "4,5".

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Banner (top) | mark the draft | "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh." (CLAUDE.md rule 7) |
| Hero | recognition, status, act | Lockup "Merdeka" (script) over "Soes · Roti · Kue" (listing, door/box photos). Line: "Soes isi vla rum dan camilan tradisional di Rawamangun." [MOCKUP]. Hanging sign: static "Buka setiap hari 07.00–20.00"; after load, live "BUKA · Hari ini 07.00–20.00" or "TUTUP · Buka lagi pukul 07.00" in Asia/Jakarta time (hours). Buttons "Petunjuk Arah", "Telepon" (listing). Small address "Jl. Balai Pustaka No. 12, Rawamangun" (listing). |
| Soes kami | the star product | Lead: "Soes isi vla rum, langsung dari etalase kami." [MOCKUP]. Body: "Pelanggan datang ke sini untuk soes isi vla rum kami." (reviews 1, 2). Illustrated Soes Vla Rum with card "Rp 7.000 / biji" [MOCKUP]. "Dijual per biji, dan dalam kotak isi 10 atau 20." [MOCKUP]; "Kotak isi 10 · Rp 65.000" [MOCKUP]. "Isian lain": Vla Vanila, Vla Cokelat, Vla Durian, illustrated, no prices [MOCKUP]. Caption "Gambar produk berupa ilustrasi." |
| Abon & telur asin | the counter goods | Lead: "Abon ditimbang langsung dari toples kaca di etalase." (photos: jars, scale, per-100-gram labels). Body: "Ada abon ayam dan abon sapi, keduanya disukai pelanggan, juga telur asin." (review 3). Jars with cards: Abon Ayam Pedas "100 gram · Rp 21.000" (photo, owner to confirm current price); Abon Ayam Manis "per 100 gram" (photo); Abon Sapi, name only (review 3). Telur Asin card "Rp 5.000" [MOCKUP]. |
| Camilan & oleh-oleh | the shelves | Lead: "Kacang, cokelat dan camilan khas dari rak kami, untuk dibawa pulang." [MOCKUP]. Items by shop name (photos): Kacang Mete (card "Rp 45.000 / toples" [MOCKUP]), Kacang Bawang, Cokelat Warna Warni, Cokelat Bulat, Brem Solo, Roti Kecik Ganep, Teng-teng Beras. Sub-group "Kue & roti" (review 4): Bolu, Lapis Legit, kue kering dalam toples (Nastar, Kastengel, Putri Salju), Roti Manis, Roti Tawar, Roti Abon [MOCKUP]. "Menjelang Lebaran dan akhir tahun, kue kering dan kacang tersedia dalam toples." [MOCKUP] |
| Pesan kotakan [MOCKUP] | gift orders | Whole section [MOCKUP]. Lead: "Sekotak soes untuk arisan, hantaran atau kunjungan keluarga." Body: "Soes dalam kotak Merdeka isi 10 atau 20. Telepon kami untuk memesan." Card "Kotak isi 10 · Rp 65.000". Button "Telepon untuk pesan". Box illustration based on the peach dotted boxes (photos). |
| Kata mereka | proof | "4,5 dari 308 ulasan di Google" (listing). Three paraphrases, no quotation marks, no names: "Soes yang legendaris, dengan isian vla rum yang enak." (review 1); "Penggemar soes Merdeka di Jakarta tidak perlu lagi ke Bandung; cukup datang ke sini." (review 2); "Selain soes, abon ayam, abon sapi dan telur asinnya juga enak." (review 3). Link "Lihat ulasan di Google" (listing URL). |
| Kunjungi kami | get there | "Jl. Balai Pustaka No. 12, Rawamangun, Pulo Gadung, Jakarta Timur 13220" (listing). "Parkir motor tepat di depan toko." (photos). Hours table Senin–Minggu 07.00–20.00, today marked "Hari ini" (hours). Map embed. Button "Petunjuk Arah". |
| Hubungi kami + footer | close | Heading "Hubungi kami". Lead: "Mampir ke Balai Pustaka, bawa pulang sekotak untuk keluarga." [MOCKUP]. Buttons "Telepon (021) 4757603", "Petunjuk Arah" (listing). No WhatsApp button until a number is confirmed [MOCKUP]. Footer row: small "Merdeka" wordmark, address, "Senin–Minggu 07.00–20.00", "Ini adalah draf tampilan, belum resmi.", "Gambar produk berupa ilustrasi." |

Links (listing): phone `tel:+62214757603`; directions
`https://www.google.com/maps/dir/?api=1&destination=Soes%20Roti%20Kue%20Merdeka%2C%20Jl.%20Balai%20Pustaka%20No.12%2C%20Rawamangun&destination_place_id=ChIJN7A6K5T0aS4R3HmtKwEWI8c`;
reviews/maps `https://maps.google.com/?cid=14349337032016099804`; embed
`https://www.google.com/maps?q=Soes%20Roti%20Kue%20Merdeka%2C%20Jl.%20Balai%20Pustaka%20No.12%2C%20Rawamangun%2C%20Jakarta%20Timur&output=embed`.

Never on the site: customer photos (photo-1/2/3), bakso, quotation marks around reviews, reviewer names,
star graphics, any claim of being a branch or partner of a Bandung brand, praise of the choux shell.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them; none provided, so flat illustrations), multiple pages.

## Open questions for the owner
Brand and channel
1. How is the shop related to the Soes Merdeka from Bandung, and may the site mention Bandung at all? (Reviewers make the link; we only paraphrase them.)
2. Are you the person who decides on a website? If not, who is?
3. Do you have a WhatsApp number for box orders that we can add as a button?
4. Can you send the Merdeka logo, a photo of the soes (whole and cut open) and a photo of the shop front from the street?
5. Is "Anda" the right way to address customers (rather than "kamu")?

Products and prices
6. Is "Soes isi vla rum dan camilan tradisional di Rawamangun." a good one-line description of the shop?
7. Besides vla rum, do you sell soes with vla vanila, vla cokelat and vla durian?
8. Is soes sold per piece and in boxes of 10 and 20?
9. Is Rp 7.000 per soes vla rum correct?
10. Is Rp 65.000 for a box of 10 correct?
11. Is Abon Ayam Pedas still Rp 21.000 per 100 gram?
12. Is telur asin Rp 5.000 each?
13. Is kacang mete Rp 45.000 per jar?
14. Do you sell bolu, lapis legit and kue kering in jars (nastar, kastengel, putri salju)?
15. Do you sell roti manis, roti tawar and roti abon?
16. Do you stock kue kering and kacang in jars before Lebaran and the year end?

Ordering and tone
17. Do you take box orders for arisan, hampers and family visits by phone (the "Pesan kotakan" section)?
18. Is "Mampir ke Balai Pustaka, bawa pulang sekotak untuk keluarga." the right closing line?
19. Is it fair to describe the shop as quiet, tidy and family-run in tone?
20. Is the peach box with white dots fine to use as the background for the soes section?
