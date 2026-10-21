# PRD: Laris Manis Bakery mockup site

## Goal
A one-page mockup that makes Laris Manis Bakery's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the blue crates,
the bread in its printed bag, the "Contact Order" sign), and the checklist questions are few
enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner; `lang="id"`.

## The shop in one paragraph
A small, busy home bakery on Jl. Pisangan Baru in Matraman, Jakarta Timur, open every day
07.00–18.00 (hours). It bakes a lot of everyday bread: sweet bread slabs topped with chocolate
sprinkles and grated cheese, twisted chocolate buns and golden topped buns, each packed in a
clear "Super Laris Manis" bag with an "LM" crest and stacked in blue plastic crates; it also
makes piped butter cookies in round jars and a round sponge cake topped with sausage, tomato
sauce and cheese (photos). Customers call it an adorable home bakery and say the bread tastes
good for a low price, "worth it" (reviews 1–4). Google rating 4.6 from 216 reviews (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Neighbour in Pisangan Baru buying breakfast bread [MOCKUP audience] | know it's open now and what's in the crate | see "Buka hari ini 07.00–18.00" and bread in the first screen on a phone |
| Someone who wants tasty, cheap bread (reviews 2–4) | see what they bake and roughly what it costs | see at least 3 breads with names and prices, price next to the name |
| Family ordering cookie jars for Lebaran or a birthday cake [MOCKUP] | ask about an order | reach WhatsApp from the order section in one tap |
| Warung owner or reseller buying by the crate [MOCKUP] | ask about crate prices | find "Warung & reseller" and a WhatsApp button |
| First-time visitor | find the shop | get directions from the first screen, address and map further down |

## Primary actions
1. Pesan via WhatsApp (wa.me link to 0812-8116-231, [MOCKUP] that this number takes WhatsApp)
2. Petunjuk arah (the listing's Google Maps link)
3. Telepon 0812-8116-231 (listing)

The first screen shows actions 1 and 2 without scrolling, on a phone (390 × 844).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner (top) | honesty | "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh." (brief) |
| Hero | recognise the shop, check it's open, act | Name "Laris Manis Bakery" (listing); line [MOCKUP] "Roti rumahan yang enak dan terjangkau di Pisangan Baru."; "Buka hari ini 07.00–18.00 · setiap hari" (hours); buttons Pesan via WhatsApp [MOCKUP WA], Petunjuk arah (listing); "atau telepon 0812-8116-231" (listing); a blue crate filled with bagged bread (illustration of the products in photos) |
| Roti kami | show the breads | Roti Meses Keju (product from photos, name [MOCKUP]) Rp 7rb [MOCKUP]; Roti Cokelat, twisted chocolate bun (photos, name [MOCKUP]) Rp 5rb [MOCKUP, roti manis price]; Roti Sosis, golden topped bun (photos: golden topped buns; name [MOCKUP]) Rp 5rb [MOCKUP, roti manis price]; "Rasa lain": keju, srikaya, pisang cokelat [MOCKUP]; intro line [MOCKUP] "Dibungkus satu per satu, siap dibawa pulang." |
| Kue & camilan | show cake and cookies | Bolu Pizza, round sponge cake with sausage, tomato sauce and cheese (photos, name [MOCKUP]) Rp 45rb [MOCKUP]; Kue Semprit Keju, piped butter cookies in a round jar (photos, name [MOCKUP]) Rp 85rb per toples [MOCKUP] |
| Pesan untuk acara & reseller [MOCKUP] | turn interest into orders | Kue kering Lebaran per toples: semprit keju, nastar, kastengel [MOCKUP]; kue untuk ulang tahun & acara [MOCKUP]; warung & reseller, roti per krat, harga grosir tanya lewat WhatsApp [MOCKUP]; WhatsApp button |
| Kata mereka | proof | 4,6 dari 216 ulasan di Google (listing); two paraphrased lines, no names, no quote marks: "Rasanya enak dan harganya bersahabat." (reviews 2, 3, 4), "Toko roti rumahan yang bikin jatuh hati." (review 1). The 2-star review is not featured (brief). |
| Kunjungi kami | find and visit | Address Jl. Pisangan Baru No. 02, Pisangan Baru, Matraman, Jakarta Timur 13110 (listing); map embed; hours table Senin–Minggu 07.00–18.00 with today highlighted (hours); Petunjuk arah button (listing `googleMapsUri`) |
| Hubungi kami | reach them | WhatsApp [MOCKUP] and telepon 0812-8116-231 (listing); the "Contact Order" sign as a card: "Laris Manis", Admin 1 0821-3513-5932, Admin 2 0812-1985-8295 (photos); line "Pesan lewat WhatsApp, ambil hangat di toko." (brief tone example) |
| Footer | close | Name, short address, hours, "Ini adalah draf tampilan, belum resmi." `noindex` on |

Not on the page until the owner confirms: "tanpa bahan pengawet" and the P-IRT number (brief),
customer photos (CLAUDE.md rule 5), the chef mascot and logo artwork (none provided).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them; product visuals are flat illustrations), multiple pages,
English version.

## Open questions for the owner
1. Nama yang ditampilkan "Laris Manis Bakery" (seperti di Google), bukan "Super Laris Manis Bakery"?
2. Nomor 0812-8116-231 bisa dipakai untuk pesan lewat WhatsApp?
3. Nomor Admin 1 (0821-3513-5932) dan Admin 2 (0812-1985-8295) dari papan "Contact Order" boleh ditampilkan di halaman?
4. Salah satu nomor admin sebaiknya jadi tombol WhatsApp utama, bukan 0812-8116-231?
5. Nama-nama produk ini sudah benar: Roti Meses Keju, Roti Cokelat, Roti Sosis, Bolu Pizza, Kue Semprit Keju?
6. Rasa roti ini memang ada: cokelat, keju, meses keju, srikaya, pisang cokelat, sosis?
7. Harga contoh ini mendekati: roti manis Rp 5rb, roti meses keju Rp 7rb, bolu pizza Rp 45rb, kue kering Rp 85rb per toples?
8. Harga Rp 5rb berlaku juga untuk Roti Cokelat dan Roti Sosis?
9. Menerima pesanan kue kering Lebaran dalam toples (semprit keju, nastar, kastengel)?
10. Menerima pesanan kue untuk ulang tahun dan acara?
11. Menyuplai warung dan reseller per krat, dengan harga grosir lewat WhatsApp?
12. Kalimat pembuka "Roti rumahan yang enak dan terjangkau di Pisangan Baru." cocok?
13. Kalimat "Dibungkus satu per satu, siap dibawa pulang." dan "Pesan lewat WhatsApp, ambil hangat di toko." cocok?
14. Sapaan "kamu" cocok, atau lebih suka "Anda"?
15. Boleh menulis "tanpa bahan pengawet" dan nomor P-IRT di halaman? (Belum ditampilkan.)
16. Bisa kirim logo "LM" dan maskot koki, foto produk (foto bolu pizza di Google sepertinya milik toko), dan foto depan toko untuk menggantikan ilustrasi?
17. Pesan pembuka WhatsApp "Halo Laris Manis, saya mau pesan roti." cocok?
