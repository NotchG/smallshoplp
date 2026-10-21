# PRD: Cup Times & Warkop mockup site

## Goal
A one-page mockup that makes Cup Times & Warkop's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia throughout (`lang="id"`, buttons, hours, draft banner). Menu names
stay as the shop prints them (Vanilla Latte, Caramel Latte, Hazelnut Latte, roti bakar), and the
English tagline "Low Price High Taste" stays as printed on the cups.

## The shop in one paragraph
Cup Times & Warkop is an inexpensive neighbourhood cafe at Jl. Permata No.3 C, Kebon Pala, Makasar,
Jakarta Timur. It's half iced-latte bar, half warung kopi. The iced flavoured lattes (Vanilla, Caramel,
Hazelnut, plus a fourth labelled "Butterscooth") come in printed Cup Times cups with sticker labels
at Rp 15.000 and the tagline "Low Price High Taste". The black steel kiosk has a wall of hanging
instant-drink sachets, and the shop also posts roti bakar. The seating is an open yard under a tree,
with string lights, bar stools, white tables and blue benches. It opens every day 09:00–23:00 and stays
open until midnight on Saturday. Customers mention good coffee at an affordable price, a kind owner and
staff, lots of drinks to choose from, and a place good for hanging out and for small business
meet-ups. (brief.md: listing, hours, photos owner-1/3/4, reviews 1, 2, 4)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local night owl or group of friends deciding where to go tonight | know if it's still open and how late | see today's hours in the first screen, and Saturday's later closing |
| Budget coffee drinker | know what a coffee costs | see "Es Latte Rp 15.000" in the first screen |
| First-timer arriving from Maps or a friend's tip | find the exact spot | tap "Petunjuk Arah" in the first screen; see the address and map further down |
| Someone planning a casual meet-up | know whether there's room to sit and stay | see the yard, the seating and the late hours in "Nongkrong sampai malam" |
| Regular who wants to ask or order ahead | reach the shop | find the WhatsApp button (placeholder until the owner gives a number) |

## Primary actions
1. Petunjuk Arah (opens the Google Maps listing)  2. WhatsApp (placeholder, see open questions)
3. Lihat menu (anchor to "Menu andalan")
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft | "Draf situs untuk Cup Times & Warkop. Beberapa detail masih contoh sampai dikonfirmasi pemilik." (CLAUDE.md rule 7) |
| Header | Where it is; jump links | "Kebon Pala, Jakarta Timur" (listing); desktop anchors Menu, Tempat, Lokasi |
| Hero | Name, value and today's hours in one screen | Name "Cup Times & Warkop" (listing, normal capitals per brief); line "Kopi enak, harga bersahabat, di Kebon Pala." (review 4 + listing, wording from brief); today's hours, e.g. "Buka hari ini 09.00–23.00", Saturday "09.00–00.00" (hours); buttons Petunjuk Arah (listing `googleMapsUri`) and WhatsApp ([MOCKUP] placeholder); photo: crop of owner-1 (kiosk, sachet wall, string lights); price sticker "CUP TIMES / Es Latte / Rp 15.000 / Low Price High Taste" (photos, owner-4; confirm price is current) |
| Menu andalan: Cup Times | The lattes, shown as the actual cups | Heading "Menu andalan"; lead "Kopi enak nggak harus mahal. Low Price High Taste." (tone line from brief + cups); Vanilla Latte, Caramel Latte, Hazelnut Latte at Rp 15.000 each as illustrated cups with labels (photos, owner-4); owner-4 photo of the real cups, captioned "Es latte Cup Times dengan label harganya." (photos, owner-4). Butterscotch Latte left off until the owner confirms the spelling (brief) |
| Menu andalan: & Warkop | The warkop half of the name | Sachet-strip divider; intro "Pesan kopi susu, lalu betah: Indomie, roti bakar, satu ronde lagi bareng teman." [MOCKUP]; roti bakar illustration (product from owner-2, which isn't shown); "Kopi sachet pilihan dari dinding renceng, diseduh di tempat" (photos, owner-1); price list [MOCKUP]: Roti Bakar Cokelat Keju / Srikaya Rp 15rb, Indomie Goreng/Rebus Telur Rp 12rb, Indomie Kornet, Pisang Goreng Rp 10rb, Nasi Telur Ceplok, Kopi sachet Rp 5rb, Es Teh Manis Rp 5rb; "Juga ada" line [MOCKUP]: Kopi Susu Gula Aren, Kopi Hitam, Americano, Cappuccino, Teh Tarik, Milo, Matcha Latte, Red Velvet |
| Nongkrong sampai malam (`#tempat`) | Show the yard at night and the late hours | Heading (brief); line "Lampu gantung di bawah pohon, kursi bar di depan kios, meja di halaman." (photos owner-1, owner-3); "Buka sampai 23.00 setiap hari. Sabtu sampai tengah malam." (hours); owner-3 crop captioned "Es kopi susu di halaman, malam hari" (photos, owner-3); "Fasilitas" row [MOCKUP]: Tempat duduk outdoor, Parkir motor, Cocok buat meeting santai |
| Kata mereka | Social proof, paraphrased | Three paraphrases, no names, dates or stars: "Kopinya enak, harganya bersahabat." (review 4); "Pemilik dan stafnya ramah." (review 1); "Pilihan minumannya banyak, pasti ada yang cocok." (review 2); note "Diringkas dari ulasan di Google Maps." |
| Kunjungi kami (`#lokasi`) | Find it, know when | Address "Jl. Permata No.3 C, Kebon Pala, Kec. Makasar, Jakarta Timur 13650" (listing); "Buka setiap hari"; Senin–Jumat 09.00–23.00, Sabtu 09.00–00.00, Minggu 09.00–23.00, today's row highlighted (hours); map embed; Petunjuk Arah button |
| Hubungi kami (`#hubungi`) | Contact | WhatsApp button [MOCKUP] placeholder, visibly marked "nomor menyusul"; line "Nomor WhatsApp segera menyusul. Sementara itu, langsung mampir aja." [MOCKUP]; Petunjuk Arah |
| Footer | Close | Name, short address, hours summary, "Ini draf situs untuk ditinjau pemilik." |

Not on the page: the Google rating (the brief says no star counts), review dates, reviewer names, the
milk-tea posters and single-origin bean jars (older customer photos; asked below), owner-2 (third-party
watermark), customer photos, and the audience line about students and ojol drivers (planning only).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
Sourced facts to confirm:
1. Is the iced latte still Rp 15.000?
2. Are Vanilla Latte, Caramel Latte and Hazelnut Latte all still on the menu?
3. Is the fourth latte "Butterscotch Latte" (the cups say "Butterscooth")? May we add it to the page with that spelling?
4. Is Cup Times & Warkop your own independent shop, rather than an outlet of a Cup Times brand or franchise?
5. Is the roti bakar photo you posted (with the @MISS_KULINER watermark) yours to use? If not, can you send your own roti bakar photo?
6. Do you still serve the milk-tea drinks (Milky Taro, Grass Jelly Milk Tea, Green Tea & Coffee) and the single-origin beans (Aceh Gayo, Mandheling Toba, and others) seen in older photos?
7. Is Saturday's closing time still midnight (00.00)?

[MOCKUP] items:
8. Can you give us a WhatsApp number for the buttons? (Until then the button is a placeholder.)
9. Do you sell roti bakar at about Rp 15rb, with Cokelat Keju and Srikaya fillings?
10. Do you serve Indomie Goreng/Rebus Telur at about Rp 12rb, and Indomie Kornet?
11. Do you serve Pisang Goreng at about Rp 10rb, and Nasi Telur Ceplok?
12. Are sachet coffee and Es Teh Manis about Rp 5rb each?
13. Do you serve Kopi Susu Gula Aren, Kopi Hitam, Americano, Cappuccino and Es Kopi Susu?
14. Do you serve Teh Tarik, Milo, Matcha Latte and Red Velvet?
15. Is there motorbike parking, and is it fine to list "outdoor seating" and "good for casual meetings" as facilities?
16. Is the line "Pesan kopi susu, lalu betah: Indomie, roti bakar, satu ronde lagi bareng teman." a fair description?
17. Is the casual "kamu" register right for your customers (rather than "Anda")?
18. Can you send a daytime photo of the front of the shop, and a sharper night photo of the kiosk?
