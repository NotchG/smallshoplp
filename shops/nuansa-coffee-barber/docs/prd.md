# PRD: nuansa Barber & Coffee mockup site

## Goal
A one-page mockup that makes nuansa Barber & Coffee's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Page name "nuansa" (lowercase, as on the sign) with "Barber & Coffee" as the descriptor, in
that order, matching the sign; the listing says "Nuansa coffee and barber" (brief). All copy is
in Bahasa Indonesia, `lang="id"`, casual "kamu" register ([MOCKUP], brief).

## The shop in one paragraph
A neat, modern neighbourhood barbershop with a coffee bar next to it on Jl. Biru Laut VIII in
Cipinang Cempedak, Jatinegara: get a cut, have a kopi while you wait, or just hang out. Men come
for a reliable, affordable haircut, and the barbers deliver the cut you show them a picture of,
quickly, with hair-care advice when you want it. Coffee drinkers come for the Kopi Susu Gula Aren
(bright, slightly acidic) and the Americano. People praise it as clean, friendly, comfortable and
well decorated: concrete walls, gold oval mirrors, "Keep at HANDSOME" wall lettering, a navy sign
lit white at night. Shoe cleaning is offered by a partner service, and you can pay cash, e-wallet
or debit. Open every day 10:00–22:00 (listing); 4.6 from 326 Google reviews (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local man who needs a haircut today (reviews 3, 4, 5) | check it's open and roughly what a cut costs | see today's hours in the first screen; see services with prices one scroll down; tap WhatsApp |
| Coffee drinker or someone looking to hang out (reviews 1, 2, 4) | see what's on the menu and how the place feels | see the coffee items drawn with prices, and the interior photo |
| Traveller passing through Jakarta (reviews 1) | find the place fast | tap "Petunjuk Arah" in the first screen; see address and map |
| Customer waiting their turn, or a friend tagging along (reviews 4) | know they can sit with a kopi | read the waiting-with-coffee line and the extras |
| Someone with dirty sneakers (reviews 3; photos) | check whether shoe cleaning is here | find "Cuci sepatu" under "juga di sini" |
| The owner (the pitch) | recognise their shop | see their sign, shopfront, wall lettering and mirrors within five seconds |

## Primary actions
1. Get directions ("Petunjuk Arah")  2. WhatsApp to ask or book a cut ([MOCKUP]: number takes WhatsApp)  3. Call ("Telepon")
The first screen shows actions 1 and 2 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft | "Draf tampilan untuk nuansa · belum resmi. Isi bertanda contoh masih menunggu konfirmasi." (project rule) |
| Hero | Recognition, hours, the two main actions | Wordmark "nuansa" with "Barber & Coffee" (sign, photos); [MOCKUP] line "Potong rambut rapi dan kopi enak, di satu tempat."; "Buka hari ini 10.00–22.00" (hours: same every day); buttons "Petunjuk Arah" (listing) and "WhatsApp" ([MOCKUP] WhatsApp on 0882-9630-2726); short address "Jl. Biru Laut VIII No.48C, Jatinegara" (listing); owner-1.jpg cropped below the sign, banner removed (photos.json: owner) |
| Barbershop | Show the cut is done right; services and prices | "Keep at HANDSOME" wall lettering (photos); points paraphrased from reviews: bring a photo of the style and get that cut (reviews 3, 5), quick cuts (reviews 1), barbers who know hair care and give advice (reviews 4); [MOCKUP] lead "Tunjukkan gaya yang kamu mau, kami yang kerjakan."; [MOCKUP] services Potong Rambut, Potong + Keramas, Cukur Jenggot, Potong Anak, Hair Coloring; [MOCKUP] example prices Potong Rambut Rp 60rb, Potong + Keramas Rp 75rb, Cukur Jenggot Rp 30rb, Hair Coloring mulai Rp 150rb (Potong Anak: no price); [MOCKUP] button "Booking via WhatsApp"; owner-3.jpg cropped (photos.json: owner) |
| Kopi | Show the coffee; prices | Kopi Susu Gula Aren with a bright, slightly acidic note (reviews 2); Americano (reviews 3); [MOCKUP] lead "Potong rapi, kopi siap. Duduk dulu, giliranmu sebentar lagi."; [MOCKUP] prices Kopi Susu Gula Aren Rp 22rb, Americano Rp 20rb; [MOCKUP] Croissant Rp 22rb; [MOCKUP] extras Cappuccino, Caffè Latte, Es Kopi Susu, Matcha Latte, Chocolate (no prices); "Pesan dan bayar di kasir." (photos: "order & pay here" counter); three drawn products, captioned as illustrations (design brief §6) |
| Juga di sini | Extras that make the visit easy | [MOCKUP] "Paket Potong + Kopi" (no price); shoe cleaning by a partner service (reviews 3; photos; confirm it still runs); cash, e-wallet or debit card (reviews 4) |
| Kata mereka | Social proof without quotes | "4,6 dari 326 ulasan di Google" (listing) with a link to the Google Maps listing; four paraphrased themes: cut as requested (reviews 3, 4, 5), good coffee and a quick cut in one stop (reviews 1), clean, friendly, comfortable, well decorated (reviews 1, 4), affordable and coffee while you wait (reviews 4, 5); note "Rangkuman dari ulasan Google, bukan kutipan." No names, no quotes |
| Kunjungi kami | Get there, contact | Address "Jl. Biru Laut VIII No.48C, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340" (listing); "Senin–Minggu 10.00–22.00 · Buka setiap hari" (hours); map embed (listing); buttons "Petunjuk Arah", "WhatsApp" ([MOCKUP]), "Telepon 0882-9630-2726" (listing); [MOCKUP] "Booking jadwal potong via WhatsApp." |
| Footer | Close, provenance | "nuansa Barber & Coffee · Cipinang Cempedak, Jatinegara"; "Info jam dan alamat dari Google Maps. Draf, bukan situs resmi." |

Never on the page: quoted review text, reviewer names, the barber named in review 4, any staff
names, "sejak 2021" or any years in business (review 1's "since 2021" is the reviewer's own
history), invented ratings or awards, customer photos (`photo-*.jpg`), owner-2.jpg, owner-4.jpg.
[MOCKUP] separate café and barber hours are not shown unless the owner confirms they differ.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: a live "open now" indicator (hours are
unconfirmed), separate café and barber hours, a drawn copy of the logo beyond the typeset
wordmark.

## Open questions for the owner
1. Is "nuansa" (lowercase) with "Barber & Coffee" underneath the name you want on the site?
2. Do you have a logo file (the circled "n" mark) you can send us to replace the typeset version?
3. Are both the barbershop and the coffee bar open every day 10.00–22.00? (A door sticker shows 08.00–21.00 for general hours.)
4. Does 0882-9630-2726 take WhatsApp messages?
5. Do you take haircut bookings through WhatsApp?
6. Are these your services: Potong Rambut, Potong + Keramas, Cukur Jenggot, Potong Anak, Hair Coloring?
7. Are these example prices close: Potong Rambut Rp 60rb, Potong + Keramas Rp 75rb, Cukur Jenggot Rp 30rb, Hair Coloring mulai Rp 150rb? (And what does Potong Anak cost?)
8. Are these coffee prices close: Kopi Susu Gula Aren Rp 22rb, Americano Rp 20rb?
9. Is Kopi Susu Gula Aren served iced, as drawn on the page?
10. Do you also serve Cappuccino, Caffè Latte, Es Kopi Susu, Matcha Latte and Chocolate?
11. Do you sell croissants, at about Rp 22rb?
12. Is the croissant photo you uploaded to Google (on a wooden board) your own photo? (It is not used on the mockup.)
13. Do you offer a "Potong + Kopi" package?
14. Is the partner shoe-cleaning service still running at the shop?
15. Is "kamu" the right tone for your customers, rather than "Anda"?
16. Are you happy with these lines: "Potong rambut rapi dan kopi enak, di satu tempat.", "Tunjukkan gaya yang kamu mau, kami yang kerjakan.", "Potong rapi, kopi siap. Duduk dulu, giliranmu sebentar lagi."?
17. Do you like "Rapi sambil ngopi" as a short way to describe nuansa?
18. Are young workers and students from Cipinang Cempedak and Jatinegara a big part of your customers?
19. Is the night photo of your shopfront still current, and is it fine to show it without the opening banner?
20. Can you send a photo of the coffee bar without customers' faces, and photos of your drinks, to replace the drawings?
