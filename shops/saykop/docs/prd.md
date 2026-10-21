# PRD: SAYKOP mockup site

## Goal
A one-page mockup that makes SAYKOP's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the orange mural
wall, the arch, their drinks by name), and the checklist questions are few enough to answer in
one conversation.

Name on the page: "SAYKOP", with "Saya Kopi" as a small subline (brief). Site language:
Bahasa Indonesia throughout, `lang="id"`, register "kamu" ([MOCKUP], owner may prefer "Anda").

## The shop in one paragraph
SAYKOP (Saya Kopi) is a small coffee shop on Jl. Bangunan Timur in Kayu Putih, Pulo Gadung,
with a bright orange wall covered in a navy single-line mural of faces and a white arch onto the
bar (photos). It is known for inventive signature drinks with their own names, such as Axelle,
Black Lemonade, Mariani and Misty, which guests find more creative than at other coffee shops
nearby (reviews 1, 4, 5), and for food like the Karage Salted Egg (review 1). People come to work
for hours: many power outlets, music that doesn't get in the way, comfortable seats, indoor and
semi-outdoor areas (reviews 1, 2, 5). Staff are friendly, welcome feedback, and in the evening go
table to table to ask how the food and service were (reviews 1, 3). Parking for cars and
motorbikes (review 3). Rated 4.8 from 1,034 Google reviews (listing). Prices are moderate and
regarded as fair (listing; review 1).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Someone looking for a spot to work for a few hours (WFC) | know if they can plug in and stay, and until when | see today's hours in the first screen; find outlets, quiet music and seating in one short section |
| Friends who want to try the signature drinks | see what the named drinks actually are | meet each drink with a picture, one line and (where known) a price, without opening a PDF menu |
| Someone who finds black coffee too bitter | find something fruity or creamy | see Black Lemonade, Misty, Mariani, Mango Yakult described plainly |
| A local deciding where to eat | see whether there is real food, not only snacks | see the Karage Salted Egg and the rice dishes drawn, named and priced |
| Someone arriving by car or motorbike | know where it is and whether they can park | get directions in one tap and see "parkir mobil dan motor" next to the address |
| A first-timer checking reputation | a quick sense of what people say | read 5 paraphrased themes and the 4,8 / 1.034 ulasan figure, no names, no stars |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp chat ([MOCKUP]: assumes the mobile number
takes WhatsApp)  3. Telepon 0821-6485-3355  4. Lihat minuman (anchor to the drinks)
The first screen shows action 1 without scrolling, on a phone (390 x 844).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Honesty | "Ini contoh tampilan, belum situs resmi SAYKOP." (brief, CLAUDE.md rule 7); `noindex` |
| Hero ("dinding oranye") | Recognition in five seconds; today's hours; directions | "SAYKOP" + "Saya Kopi" (listing/brief); line "Kopi kreatif dan tempat nyaman buat betah lama di Kayu Putih." [MOCKUP]; "Buka hari ini 11.00–22.30", Friday "13.00–22.30" (hours), computed for today in Asia/Jakarta, static week summary without JS; buttons Petunjuk Arah, WhatsApp [MOCKUP number takes WA]; arch with illustrated Axelle glass, caption "Axelle · Rp 30rb [MOCKUP price]" and "Belum pernah coba Axelle? Ini saatnya." (brief tone line); navy single-line face motif [MOCKUP, in the spirit of the mural, not a copy]; encaustic tile strip below (photos) |
| Minuman andalan | Show the named drinks as the shop's personality | 8 drinks, each with illustration [MOCKUP colours], name (reviews), one line, price where the brief has one [MOCKUP prices]: Axelle (berry-tinged americano with a floral note, r1, Rp 30rb), Black Lemonade (coffee + lemonade, bitter and tangy, good if black coffee is too strong, r1, Rp 27rb), Mariani (purple drink with lemongrass, r4), Misty (sweet cream over arabica with mint syrup, r5), Dirty Latte (latte with cream on top, r1, Rp 28rb), Mango Yakult (non-coffee, r5, Rp 25rb), Iced Red Velvet (r4), Lembayung (r4; line is tone copy, no ingredients) [MOCKUP copy for the last two]. "Juga di menu": Elma (r3); Kopi Susu Saykop Rp 22rb, Americano, Cappuccino, Caffè Latte, V60 [MOCKUP]; biji kopi 200 g untuk dibawa pulang [MOCKUP] |
| Teman ngopi | Show there's real food | Illustrated: Karage Salted Egg (juicy, lots of salted-egg sauce, one-person portion, r1; Rp 35rb [MOCKUP]); "Ayam Sambal Ijo Hotplate" [MOCKUP name] (chicken, rice, fried shallots, crispy fried cabbage on a cast-iron hot plate, photos); "Nasi Goreng Saykop" [MOCKUP name] (fried rice with corn and chilli on banana leaf, krupuk, cucumber, salted-egg chicken, photos). Text list: Chicken steak saus jamur (r3, Rp 40rb [MOCKUP]); Churros (r5, Rp 22rb [MOCKUP]) |
| Nyaman buat kerja | Answer the WFC visitor | Statement "Colokan banyak, musiknya pelan, kopinya enak. Silakan betah." (brief tone line, all sourced); items: banyak colokan (r1, r5), musik yang nggak ganggu (r1), indoor dan semi-outdoor, nyaman panas atau dingin (r2), parkir mobil dan motor (r3); evening table check by staff (r1); "hangat", never "luas" (r2) |
| Kata mereka | Social proof without fake testimonials | "4,8 dari 1.034 ulasan Google" (listing); 5 paraphrased themes, no names, no stars: minuman kreatif dibanding kedai sekitar (r4); staf ramah dan senang dengar masukan (r1, r3); tenang buat kerja berjam-jam (r1, r5); harga masuk akal (r1); kopi dan makanannya enak (r2, r3); caption "Diringkas dari ulasan Google." |
| Kunjungi kami | Get there | Map embed; address Jl. Bangunan Timur No.13B, Kayu Putih, Pulo Gadung, Jakarta Timur 13220 (listing); week hours: Senin–Kamis 11.00–22.30, Jumat 13.00–22.30, Sabtu–Minggu 11.00–22.30 (hours), today highlighted; parkir mobil dan motor (r3); Petunjuk Arah button |
| Hubungi kami + footer | Close with action | WhatsApp [MOCKUP], Telepon 0821-6485-3355 (listing), Petunjuk Arah; Instagram placeholder [MOCKUP, handle unknown]; closing line "Sampai ketemu di bar." [MOCKUP copy]; footer name, address, draft note |

Never on the page: "buka setiap hari" as a headline, "luas", "tidak terlalu manis", any reason
for the Friday opening time, reviewer names, star widgets, verbatim review quotes.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them; none yet), multiple pages, deploying.

## Open questions for the owner
Name and voice
1. Is "SAYKOP" in capitals with "Saya Kopi" underneath how you want the name written?
2. Is "kamu" the right way to address guests (instead of "Anda")?
3. Is the hero line "Kopi kreatif dan tempat nyaman buat betah lama di Kayu Putih." OK?
4. Is it OK to use a navy line drawing of faces inspired by your mural (not a copy of it)? Would you like the mural artist credited?

Hours and contact
5. Are you open every Sunday, 11.00–22.30? (A guest once found you closed on two Sundays.)
6. Does Friday open at 13.00?
7. Does 0821-6485-3355 take WhatsApp messages?
8. Do you have an Instagram account to link? If yes, which handle?

Drinks
9. Are these example prices right: Axelle Rp 30rb, Black Lemonade Rp 27rb, Dirty Latte Rp 28rb, Mango Yakult Rp 25rb, Kopi Susu Saykop Rp 22rb? Can you send prices for Mariani, Misty, Lembayung, Iced Red Velvet and Elma?
10. Are Misty and Mango Yakult still on the menu?
11. Is Mariani the purple drink with lemongrass?
12. Can you give one line each for Lembayung, Iced Red Velvet and Elma?
13. Do the drink drawings look roughly right (colours, and all drawn as iced drinks in tall glasses)? Lembayung's colour is a guess from its name.
14. Is the classic list right: Kopi Susu Saykop, Americano, Cappuccino, Caffè Latte, V60?
15. Do you sell roasted beans to take home in 200 g bags?

Food
16. Is the hot-plate chicken called "Ayam Sambal Ijo Hotplate"? If not, what is its name?
17. Is the fried rice on banana leaf called "Nasi Goreng Saykop"? If not, what is its name?
18. Are these example prices right: Karage Salted Egg Rp 35rb, Chicken Steak Rp 40rb, Churros Rp 22rb? Are churros still on the menu?

Photos
19. The mural photo and the hot-plate photo on Google were uploaded by your account. May we use them on the site (with staff faces blurred in the mural photo)? Do you have other photos of the drinks you'd like to use?
