# PRD: In Out Coffee House mockup site

## Goal
A one-page mockup that makes In Out Coffee House's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the cup logo's
arrows, the oval opening into the yellow room, the rooftop), and the checklist questions are
few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours, the draft banner, and `lang="id"`.
Casual register ("kamu") is itself a [MOCKUP] choice.

## The shop in one paragraph
In Out Coffee House is a cafe on Jl. Dr. KRT Radjiman Widyodiningrat in Jatinegara, Cakung,
Jakarta Timur. A reviewer calls it a hidden gem in the Cakung / Pulo Jahe area. It opens daily
from 14.00 into the night (to 22.00 Monday to Thursday, 23.00 Friday to Sunday) and has three
moods: an indoor room on the 2nd floor with music posters on white walls, a yellow beanbag
room seen through a big oval opening, and an open rooftop on the 3rd floor above the treetops.
Friends come to hang out, and one reviewer describes it as a one-stop spot with a car wash and
an eatery. Reviewers praise how cozy and comfortable it is, the varied menu at standard prices,
the taste and the atmosphere. The iced milk coffee comes in takeaway cups branded "IN OUT
coffee house", made at an espresso bar with a red machine. Rated 4.7 from 215 Google reviews.
Most review text is 3 to 6 years old, so details are confirmed with the owner before they
become claims.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Friends looking for a place to hang out (reviews 1, 3) | see if the vibe suits them, and whether it's open today | see the three spaces and today's hours, and get directions from the first screen |
| Drivers waiting at the car wash (reviews 2) | grab a coffee or a meal while they wait | find the menu and prices fast; see the car wash strip [MOCKUP] |
| [MOCKUP] Students and young people from Cakung, Pulo Jahe, Pulo Gadung | check prices and how late it's open | see example prices and the late closing time (23.00 on weekends) |
| [MOCKUP] Takeaway iced-coffee customers | order ahead or ask what's on | WhatsApp in one tap |
| Someone who has never been ("hidden gem") | find the place | address with "Jatinegara, Cakung" and a map; directions in one tap |

## Primary actions
1. Petunjuk Arah (get directions)  2. WhatsApp ([MOCKUP] that the number takes WhatsApp)  3. Telepon
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | project rule | "Draf situs untuk ditinjau pemilik In Out Coffee House. Beberapa detail masih contoh sampai dikonfirmasi." `noindex` on |
| Hero | recognition + action 1 | Name in the cup-logo style: "IN OUT" with an up-arrow on the I and a forward arrow on the T, a steaming cup outline, "coffee house" in lowercase below (listing, photos; redrawn [MOCKUP] until the owner sends the logo file). Line [MOCKUP] "Tempat nongkrong dari sore sampai malam di Cakung". Today's hours "Buka hari ini 14.00–22.00" (Mon–Thu) or "14.00–23.00" (Fri–Sun) (hours). Buttons "Petunjuk Arah" (listing) and "WhatsApp" [MOCKUP]. Short address "Jl. Dr. KRT Radjiman Widyodiningrat No.7–9, Jatinegara, Cakung" (listing). Drawing of the oval opening into the yellow room (photos; drawing is a [MOCKUP] stand-in) |
| Pilih tempatmu | show the three moods | Heading "Pilih tempatmu". Intro [MOCKUP] "Tiga suasana, satu gedung. Yang paling atas tanpa atap." **Rooftop lantai 3**: "Area terbuka di lantai 3, di atas pucuk-pucuk pohon." (reviews 1, photos) + [MOCKUP] "Naik ke rooftop, lihat langit sore, kopi di tangan." **Lantai 2, indoor**: "Dinding putih penuh poster musik, lampu gantung hijau, meja dan kursi kayu." (reviews 1, photos) + [MOCKUP] "Pas buat ngobrol lama." **Ruang beanbag**: "Ruang kuning di balik jendela oval: lampu bulat, rumput sintetis, beanbag." (photos) + [MOCKUP] "Lepas alas kaki dulu, lalu santai." Drawings of each space are [MOCKUP] stand-ins; the beanbag room's place in the building drawing is [MOCKUP] |
| Menu andalan | show the food and drink | Intro: "Kopi dari mesin espresso merah di bar, plus makanan dan camilan buat teman nongkrong." (red espresso machine: photos; varied menu: reviews 1; wording [MOCKUP]). Note: "Nama menu dan harga di bawah ini masih contoh." Five framed product drawings: Es Kopi Susu In Out Rp 20rb (iced milk coffee in the branded cup is from photos; name and price [MOCKUP]), Café Latte Rp 25rb, Matcha (from Rp 20rb), Nasi goreng (from Rp 25rb), Roti bakar (from Rp 15rb), all [MOCKUP]. Full list [MOCKUP]: Kopi (Es Kopi Susu In Out Rp 20rb, Americano Rp 20rb, Café Latte Rp 25rb, Cappuccino Rp 25rb); Non-kopi Rp 20rb–27rb (Matcha, Chocolate, Taro, Lychee Tea); Makanan Rp 25rb–35rb (Nasi goreng, Rice bowl ayam sambal matah, Mie goreng); Camilan Rp 15rb–25rb (Kentang goreng, Cireng, Roti bakar, Pisang goreng). Paket Nongkrong: 2 minuman + 1 camilan, Rp 50rb [MOCKUP] |
| Sambil menunggu cuci mobil | the car wash audience | [MOCKUP] whole section, behind a `show` flag in content.ts. Heading "Sambil menunggu cuci mobil". Body "Ngopi atau makan dulu selagi mobilmu dicuci. Kopi, makanan, dan cuci mobil di satu tempat." (one-stop: reviews 2). Link "Lihat menu" to the menu section |
| Kata mereka | social proof | "4,7 dari 215 ulasan Google" (listing). Paraphrases, no names, no quote marks: "Permata tersembunyi di Cakung." (reviews 1) "Nyaman, pas buat nongkrong bareng teman." (reviews 1, 3) "Menunya beragam, harganya wajar." (reviews 1) "Rasanya enak, suasananya asyik." (reviews 5). Note: "Ringkasan dari ulasan Google, bukan kutipan langsung." Link to the Google listing |
| Kunjungi kami | find it, check hours | Heading "Kunjungi kami". Full address "Jl. Dr. KRT Radjiman Widyodiningrat No.7–9, RT.5/RW.6, Jatinegara, Cakung, Jakarta Timur 13930" (listing), "Sekitar Pulo Jahe" (reviews 1). Hours: "Senin–Kamis 14.00–22.00", "Jumat–Minggu 14.00–23.00", "Buka setiap hari mulai 14.00" (hours), today's row marked. Map embed. "Petunjuk Arah" button |
| Close (contact) | actions 2 and 3 | Heading [MOCKUP] "Masuk santai, keluar senang." Line [MOCKUP] "Sampai ketemu di In Out. Tanya apa saja lewat WhatsApp, atau telepon langsung." Phone 0812-6060-9930 (listing). Buttons "WhatsApp" [MOCKUP], "Telepon" (listing), "Petunjuk Arah" (listing). Section labelled "Hubungi kami" for assistive tech |
| Footer | close | "In Out Coffee House", short address, draft note again |

Links: directions `https://maps.google.com/?cid=7190884297404004731` (listing); phone
`tel:+6281260609930`; WhatsApp `https://wa.me/6281260609930` [MOCKUP].

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (none of the listing
photos were uploaded by the owner, so drawings only), multiple pages, rooftop reservations,
anything about the car wash beyond the one [MOCKUP] strip.

## Open questions for the owner
1. Does 0812-6060-9930 take WhatsApp messages?
2. Is "Tempat nongkrong dari sore sampai malam di Cakung" a fair one-line description of In Out?
3. Are the rooftop (lantai 3), the indoor room (lantai 2) and the beanbag room all still open as described?
4. Is the beanbag room on the 2nd floor, next to the indoor room, as the drawing shows?
5. Is the rooftop best described as a sunset and evening spot ("Naik ke rooftop, lihat langit sore, kopi di tangan")?
6. Are the short lines for each space ("Pas buat ngobrol lama", "Lepas alas kaki dulu, lalu santai") OK?
7. Can you send the logo file? The site redraws it from the cups for now. Is the redraw close enough until then?
8. Is "Es Kopi Susu In Out" the right name for the iced milk coffee in the branded cup, at Rp 20rb?
9. Can you send the real menu and prices? Until then, are these example items OK to show: Americano, Café Latte, Cappuccino, Matcha, Chocolate, Taro, Lychee Tea, Nasi goreng, Rice bowl ayam sambal matah, Mie goreng, Kentang goreng, Cireng, Roti bakar, Pisang goreng, with the example price ranges?
10. Do you offer a "Paket Nongkrong" (2 drinks + 1 snack, Rp 50rb) or a similar bundle?
11. Is the car wash still part of the same site? Should the "Sambil menunggu cuci mobil" section stay?
12. Is "Sekitar Pulo Jahe" a helpful way to describe where you are?
13. Is the sign-off "Masuk santai, keluar senang. Sampai ketemu di In Out." OK?
14. Is the casual "kamu" right for the site, or do you prefer "Anda"?
15. Can you send photos of the rooftop at sunset, the beanbag room, the indoor floor, the bar and the drinks, to replace the drawings?
