# PRD: Mecto mockup site

## Goal
A one-page mockup that makes Mecto's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
Mecto is a modern all-day cafe on Jl. Raya Kalimalang in Duren Sawit, East Jakarta, open every
day from 07.00 until 23.00, and until midnight Friday to Sunday (hours). It is a gabled hall of
concrete, plywood and black steel with a long leather bench along the glass, a gravel courtyard
with a sunshine-yellow wall, and a tree-shaded garden (photos). People come to work from the
cafe, catch up with friends, or eat with family; there is breakfast, lunch and dinner on the menu
(reviews 1, 2, 3, 5). Guests praise the nachos, the nasi goreng, the buttermilk chicken and the
palm sugar coffee, portions that feel right, and a cosy, stylish room with music pitched just
right (reviews 1, 3, 4, 5). Mornings are quieter (review 3). There is a musholla, a high chair for
little ones and plenty of parking (reviews 4, 5; photos). Google rating 4.7 from 507 reviews (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Someone planning to work from a cafe | know when it opens and whether it suits a laptop day | see today's hours in the first screen; find the working notes (bench by the glass, quiet mornings) in "Nyaman untuk semua" |
| Friends planning a late hangout | know how late it's open tonight and what it feels like | see today's closing time in the hero; see Fri–Sun until 00.00 on the hours beam; see the spaces |
| A family deciding where to eat | check food, a high chair, a prayer room and parking | see the four dishes with pictures and example prices; find high chair, musholla and parking in one short list |
| A coffee lover in East Jakarta | see if the coffee is worth the trip | find the palm sugar coffee in "Menu andalan" and the coffee theme in "Kata mereka" |
| Anyone on the way | get there | tap "Petunjuk Arah" from the first screen; find the address, map and week hours in "Kunjungi kami" |

## Primary actions
1. Petunjuk Arah (directions in Google Maps)  2. WhatsApp  3. Telepon (call)
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`. Dish names exactly as the shop uses them.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft (CLAUDE.md rule 7) | "Draf tampilan untuk Mecto. Detail bertanda contoh masih menunggu konfirmasi pemilik." |
| Hero (`#top`) | Recognition in 5 s, today's hours, directions | Type-only wordmark "Mecto" (listing; [MOCKUP] spelling to confirm). Line: "Ngopi, makan, dan kerja dari pagi sampai malam di Kalimalang." (brief hero line; hours; reviews 1–3). Today's hours, computed for Asia/Jakarta: "Buka hari ini 07.00–23.00" Mon–Thu, "Buka hari ini 07.00–00.00" Fri–Sun; static fallback "Buka setiap hari mulai 07.00" (hours). Buttons "Petunjuk Arah", "WhatsApp" ([MOCKUP] the number takes WhatsApp). Photo: owner-1.jpg cropped to the right side (no guests). Desktop top bar: address "Jl. Raya Kalimalang, Duren Sawit" (listing) and anchors Menu · Jam buka · Tempat · Lokasi. |
| Menu andalan (`#menu`) | Show the food people praise, with pictures | Sub: "Yang paling sering dipuji: nasi goreng, nachos, buttermilk chicken, dan kopi gula arennya." (review 1). Four dishes: Nasi Goreng, owner-2.jpg (review 1; photos); Nachos, illustration (review 1); Buttermilk Chicken, illustration (review 1); Kopi Gula Aren, illustration (review 1; [MOCKUP] menu name). [MOCKUP] prices: Nasi Goreng Rp 38rb, Nachos Rp 35rb, Buttermilk Chicken Rp 45rb, Kopi Gula Aren Rp 25rb. "Juga ada" list, all [MOCKUP]: Americano Rp 22rb, Caffe Latte Rp 30rb; Non-kopi (matcha latte, cokelat, berry soda) Rp 25–32rb; Sarapan mulai 07.00 (roti bakar, croissant, breakfast plate) Rp 25–45rb; Pastry (croissant, pain au chocolat) Rp 20–30rb. Note under the list: "Harga contoh, menunggu konfirmasi." Each illustration labelled "ilustrasi". |
| Dari pagi sampai malam (`#jam`) | Show it fits any hour; the morning tip | Sub: "Buka setiap hari dari jam 07.00. Sarapan, makan siang, dan makan malam ada semua." (hours; review 2). Hours beam 07.00 → 00.00 with 23.00 close and a Fri–Sun extension to 00.00 (hours). Pagi: "Buka jam 07.00. Sarapan dulu, lalu kerja. Datang pagi untuk suasana paling tenang." (hours; reviews 2, 3). Siang: "Makan siang, kopi, dan kerja sampai sore." (reviews 1, 2, 5). Malam: "Makan malam dan ngobrol. Senin–Kamis sampai 23.00, Jumat–Minggu sampai tengah malam." (hours; reviews 1, 2) |
| Dalam & luar (`#tempat`) | Show the place: indoor and outdoor | Sub: "Mau duduk di dalam atau di luar, dua-duanya ada." (reviews 3, 5). Ruang dalam: "Plafon kayu beratap pelana dengan skylight, meja jati, dan bangku kulit panjang di sepanjang kaca." Halaman dalam: "Di balik kaca, halaman berkerikil putih dengan dinding kuning." Taman: "Taman teduh di bawah pohon, kerikil hitam, dan lampu hangat saat malam." (all photos). Drawn as a geometric strip, not photos (no owner photos of these). |
| Nyaman untuk semua | Practical reassurance | Kerja seharian: "Bangku panjang dekat kaca dan meja tinggi; pagi hari paling tenang." (reviews 1–3; photos) plus "Wi-Fi dan colokan di bangku" ([MOCKUP]). Keluarga: "Ada kursi bayi untuk si kecil." (review 2; photos). Musholla: "Tersedia musholla." (review 4). Parkir: "Parkir luas." (review 5; keep short). |
| Kata mereka | Paraphrased praise, unattributed | "Rata-rata 4,7 dari 507 ulasan di Google." (listing). Four themes, no quote marks, no names: "Makanannya enak, dari nachos dan nasi goreng sampai buttermilk chicken, porsinya pas." (reviews 1, 4). "Kopi gula arennya enak, dan pilihan kopinya banyak." (reviews 1, 5). "Tempatnya nyaman dan santai, dekorasinya modern, musiknya pas." (reviews 1, 3, 5). "Cocok kapan saja, buat sarapan sampai makan malam, sendiri atau bareng teman dan keluarga, dengan harga bersahabat." (reviews 2, 5) |
| Kunjungi kami (`#lokasi`) | Get there | Address "Jl. Raya Kalimalang, RT.3/RW.16, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13340" (listing; no house number). Week table: Senin–Kamis 07.00–23.00, Jumat–Minggu 07.00–00.00, seven rows, today highlighted; "Buka setiap hari" (hours). Map embed by name and address; "Petunjuk Arah" button. |
| Hubungi kami | Close with the actions | Closing line "Sarapan jam tujuh, kerja sampai sore, ngobrol sampai malam." (brief tone example). Buttons: WhatsApp ([MOCKUP] number takes WhatsApp), "Telepon 0819-4411-3955" (listing), Instagram ([MOCKUP], only if the owner confirms a handle; otherwise omit, never a dead link). |
| Footer | Identity and draft note | "Mecto · Jl. Raya Kalimalang, Duren Sawit, Jakarta Timur 13340" (listing); "Draf tampilan, belum dipublikasikan." |

Links: directions `https://www.google.com/maps/dir/?api=1&destination=Mecto&destination_place_id=ChIJa9-Yc-rzaS4Rj6EivhLIGTs`;
listing `https://maps.google.com/?cid=4258654905480421775`; WhatsApp `https://wa.me/6281944113955` ([MOCKUP]);
call `tel:+6281944113955` (raw.json).

Not on the page: cleanliness claims (review 4 docked stars for it), the bunting, any customer photo,
any reviewer name, verbatim review text.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
1. Is the name written exactly "Mecto", with no tagline or longer name (for example with "Space")?
2. Does 0819-4411-3955 take WhatsApp messages?
3. Is the palm sugar coffee called "Kopi Gula Aren" on your menu?
4. Are these prices close: Nasi Goreng Rp 38rb, Nachos Rp 35rb, Buttermilk Chicken Rp 45rb, Kopi Gula Aren Rp 25rb?
5. Do you serve Americano (about Rp 22rb) and Caffe Latte (about Rp 30rb)?
6. Do you serve matcha latte, chocolate and berry soda at about Rp 25–32rb?
7. Is there a breakfast menu from 07.00 with items like roti bakar, croissant or a breakfast plate (about Rp 25–45rb)?
8. Do you sell pastries such as croissant and pain au chocolat (about Rp 20–30rb)?
9. Is there Wi-Fi, and are there power sockets at the bench seats?
10. Does Mecto have an Instagram account we can link? (If yes, which handle?)
11. Should the site speak casually with "kamu" (rather than "Anda")?
12. Does "ngopi, makan, dan kerja dari pagi sampai malam" describe Mecto the way you'd like?
13. Is it OK to use the gable (house) shape of your ceiling as the frame for photos?
14. Are you happy with drawn illustrations for the nachos, buttermilk chicken and kopi gula aren until you send photos? (We'd love photos of the coffee, the garden, and the storefront or logo.)
15. Is the hero photo of the hall fine, cropped so no guests show?

Note for the pitch, not for the site: one reviewer docked stars for cleanliness (sofa, table,
musholla, bin) and asked for tissues on the tables (review 4). The page makes no cleanliness claim.
