# PRD: Rasaharsa mockup site

## Goal
A one-page mockup that makes Rasaharsa's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

All copy is in Bahasa Indonesia (`lang="id"`). Menu and drink names stay exactly as the shop
writes them on its board (Cappucino, Over Classic Ice, Frozty, Hot Tea/Teh Panas).

## The shop in one paragraph
Rasaharsa ("RASAHARSA coffee & eatery" on its sign) is a coffee shop and eatery on
Jl. Sunan Sedayu, on the Rawamangun side of Pulo Gadung, Jakarta Timur, open every day from
08.00 to 22.30 (23.30 on Friday and Saturday). It is a house turned into a cafe, with a
charcoal slatted feature wall, a fern wall, warm wood tables and black steel window frames. The
baristas explain the character of each coffee to guests, and the bar shelf holds a siphon, moka
pots, a French press and Turkish copper pots. House coffees include Kopi Rasaharsa (iced), Kopi
Susu Gula Aren, Vietnam Drip, Single Origin and Affogato, alongside mocktails, teas and an
"Over Classic Ice" line. Guests praise the coffee, the warm and quick service, the homey room
that suits working from the cafe, and the food; regulars come back with friends and family.
Google rating 4.7 from 356 reviews. (brief.md: listing, hours, reviews 1–5, photos)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local on the way somewhere | know if it's open now | see today's hours and open/closed status in the first screen |
| Laptop worker (WFC) | know it's comfortable and open late | read "nyaman untuk kerja" and the closing time without hunting |
| Family or friends group | know there's real food | see the food section with named dishes |
| Coffee-curious guest | see what coffees they make | see the house coffees, the brewing gear, and that baristas explain the beans |
| Someone planning an event | know if there's a private room | find the event room and a WhatsApp action next to it |
| First-time visitor | get there | tap "Petunjuk Arah" from the hero or the visit section |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp  3. Telepon 0811-8651-002
The first screen shows action 1 without scrolling, on a phone.

Links: Maps `https://maps.google.com/?cid=7247874278361093807` (listing, tracking param
dropped) · WhatsApp `https://wa.me/628118651002` [MOCKUP: number takes WhatsApp] · Telepon
`tel:+628118651002` (listing).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft | "Ini draf tampilan untuk Rasaharsa" (CLAUDE.md rule 7) |
| Hero | Recognition, open status, directions | h1 "Rasaharsa" set as the sign's caps wordmark with the two-bean mark ([MOCKUP] redrawn mark) and "coffee & eatery" under it (photos). Line: [MOCKUP] "Kopi yang diceritakan, makanan yang bikin betah." Status, default text: "Buka setiap hari 08.00–22.30 · Jumat & Sabtu sampai 23.30"; client-side, open: "Sedang buka · Buka hari ini 08.00–22.30" (or 23.30), closed: "Sedang tutup · Buka lagi pukul 08.00" (hours). Small line: "Jl. Sunan Sedayu No.15, Pulo Gadung" (listing). Buttons: "Petunjuk Arah", "WhatsApp" |
| Kopi kami | House coffees, the barista explains | Heading "Kopi kami". Lead [MOCKUP copy] "Duduk dulu, kopinya biar kami yang jelaskan." Body: "Barista kami senang bercerita tentang karakter setiap kopi yang kamu pesan." (reviews 1) and "Di rak bar ada sifon, moka pot, French press, dan teko tembaga ala Turki." (photos). Aside [MOCKUP] "Seduh manual hari ini: Single Origin dengan V60 atau sifon. Barista akan menceritakan bijinya." (Single Origin served hot: photos). Photo: owner-2.jpg, cropped to the cup; caption "Latte art di cangkir hitam kami." (photos). Shelf of 4 drinks: Kopi Rasaharsa: "Kopi khas rumah, disajikan dingin." Es · [MOCKUP] Rp 28rb. Kopi Susu Gula Aren: "Kopi susu dengan manis gula aren." Panas · Es · [MOCKUP] Rp 25rb. Vietnam Drip: "Diseduh tetes demi tetes." Panas. Affogato: "Es krim disiram espresso." (names and hot/iced: photos) |
| Menu andalan | The drinks list, as on the bar boards | Heading "Menu andalan", line "Dari papan menu di atas bar kami." (photos). Board "Kopi": Kopi Rasaharsa (Es, [MOCKUP] Rp 28rb), Kopi Susu Gula Aren (Panas/Es, [MOCKUP] Rp 25rb), Vietnam Drip (Panas), Single Origin (Panas), Affogato, Americano, Caffe Latte, Cappucino, Caffe Mocha, White Choco Mocha, Hot Nut Latte, Caramel Latte, Vanilla Latte. Board "Mocktail": Apple Virgin Mojito ([MOCKUP] Rp 34rb), Strawberry Mojito, Mango Mojito, Kiwi Mojito, Virgin Mojito, Raspberry Lemonade; "Tea/Teh": Iced Tea, Iced Lychee Tea, Iced Lemon Tea, Iced Apple Tea, Ice Strawberry Tea, Hot Tea/Teh Panas. Board "Over Classic Ice": Iced Virgin Taro, Iced Chocolate, Iced Green Tea Latte, Iced Red Velvet; "Frozty": "Minuman blended, ada pilihan kopi dan non-kopi." (all: photos). No other prices |
| Bukan cuma kopi | The eatery side | Heading "Bukan cuma kopi". Lead "Namanya juga coffee & eatery. Makanannya juga yang bikin tamu kami datang lagi." (sign: photos; food praised and return visits: reviews 2, 5). [MOCKUP] "Makan": Nasi Goreng Rasaharsa (Rp 35rb), Mie Goreng, Chicken Rice Bowl. [MOCKUP] "Camilan": Kentang Goreng, Pisang Goreng, Roti Bakar. [MOCKUP] illustration of Nasi Goreng Rasaharsa, caption "Nasi Goreng Rasaharsa (ilustrasi)" |
| Tempatnya | The room, WFC, outdoor, events | Heading "Tempatnya". Lead "Sebuah rumah yang dijadikan kedai. Nyaman, seperti di rumah sendiri." (reviews 2, 4). Panes: "Untuk kerja": "Suasananya hangat dan nyaman untuk kerja dari kafe, dari pagi sampai malam." (reviews 2; hours). "Di luar": "Ada tempat duduk di luar, dan udara di dalam mengalir dengan baik." (reviews 3). "Bareng keluarga": "Pas untuk datang bersama teman dan keluarga." (reviews 5). "Untuk acara": "Ada ruangan untuk acara pribadi." (reviews 3) + [MOCKUP] button "Pesan ruangan lewat WhatsApp" |
| Kata mereka | Paraphrased praise, no names, no quotes, no stars | Heading "Kata mereka", line "Dirangkum dari ulasan Google · rating 4,7 dari 356 ulasan." (listing). Themes: "Baristanya menjelaskan karakter kopi yang kamu pesan." (reviews 1) · "Pelayanannya cepat, pelayannya ramah." (reviews 1, 2, 5) · "Suasananya seperti di rumah, cocok untuk kerja dari kafe." (reviews 2) · "Makanannya enak, sampai ada yang sering kembali bersama teman dan keluarga." (reviews 2, 5) |
| Kunjungi kami | Address, hours, map | Heading "Kunjungi kami". "Jl. Sunan Sedayu No.15, Jati, Pulo Gadung, Jakarta Timur 13220", "Di sisi Rawamangun" (listing; reviews 4). Hours: Senin–Kamis 08.00–22.30 · Jumat–Sabtu 08.00–23.30 · Minggu 08.00–22.30, today's row marked "Hari ini" (hours). Google Maps embed. Button "Petunjuk Arah" |
| Hubungi kami | Close with the three actions | Heading "Hubungi kami". Line [MOCKUP copy] "Mau tanya menu, pesan ruangan, atau memastikan kami buka? Kabari saja." Buttons "WhatsApp" [MOCKUP], "Telepon 0811-8651-002" (listing), "Petunjuk Arah". Footer: "Rasaharsa · coffee & eatery", address, "Draf tampilan, belum resmi." |

SEO: title "Rasaharsa · coffee & eatery di Pulo Gadung, Jakarta Timur"; description "Kedai kopi
dan makan di Jl. Sunan Sedayu, Rawamangun. Buka setiap hari 08.00–22.30, Jumat dan Sabtu
sampai 23.30." `noindex` stays on.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.
Also out: owner-1.jpg (the shopfront shared with the barbershop may not be current, per
brief.md), any customer photo, the chalkboard and "Discount 50%" sign in owner-2.jpg, prices
other than the four example prices, star widgets, reviewer names, quoted reviews.

## Open questions for the owner
These become `owner-checklist.md`.
1. Is the shop still at Jl. Sunan Sedayu No.15? (The Google listing writes "No.15 3".)
2. Is our redrawn two-bean logo close enough to show for now? Can you send the logo file?
3. Do you like the line "Kopi yang diceritakan, makanan yang bikin betah"?
4. Are you happy with the casual "kamu" (instead of "Anda")?
5. Does 0811-8651-002 take WhatsApp messages?
6. Are these example prices right: Kopi Susu Gula Aren Rp 25rb, Kopi Rasaharsa Rp 28rb, Apple Virgin Mojito Rp 34rb, Nasi Goreng Rasaharsa Rp 35rb?
7. Is the food list right: Nasi Goreng Rasaharsa, Mie Goreng, Chicken Rice Bowl, Kentang Goreng, Pisang Goreng, Roti Bakar?
8. Do you offer a manual brew of the day (Single Origin with V60 or siphon)?
9. Do you still have outdoor seating and a private room for events? (Mentioned in 2022 reviews.) Can people book the room through WhatsApp?
10. May we use your Google photo of the latte in the black cup, cropped to the cup?
11. Do the other section lines sound like you ("Duduk dulu, kopinya biar kami yang jelaskan", the food and contact lines)?
12. Could you send current photos of the room, the drinks and the food to replace the drawings? We left out the shopfront photo with the barbershop sign: is that shopfront still current?
