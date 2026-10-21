# PRD: Sajenak mockup site

## Goal
A one-page mockup that makes Sajenak's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours, the draft banner and `lang="id"`.
Menu names and the taglines "space for everyone" / "Feel like home" stay exactly as the shop writes them.
Name on the page: "Sajenak" (capital S, rest lower case), never "SAJENAK".

## The shop in one paragraph
Sajenak is a roomy neighbourhood coffee house in Duren Sawit, Jakarta Timur, set in an old white
clapboard house with a turf garden. It has a warm amber rattan corner, a concrete reading room with
bookshelves and neon signs, and a rooftop with tiered concrete seating under string lights. It opens every day
from 07.30 to 23.00 (Fri–Sat until 24.00). Friends come to hang out. Some regulars have come since school,
and first-timers come for the vibe. Reviewers praise the comfort, the food and drinks, the music, the
five-star baristas and the affordable prices. Google rating 4.9 from 455 reviews. The coffee menu's starred favourites are the
Es Kopi Sajenak, Es Kopi Sepintas, Es Kopi Rumit and Creamy Butterscotch Latte. Inside there are high chairs for babies,
a photobox booth, and tables that can be reserved. A cat wanders the garden. (brief.md)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Friends planning where to nongkrong tonight | see if the place feels right and is open late | see the garden, today's hours and the spaces without hunting |
| Regular checking before heading over | confirm today's closing time | read "Buka hari ini 07.30–23.00/24.00" in the first screen |
| Group or birthday crowd | reserve a table | reach WhatsApp from the first screen and again at the end |
| Coffee person deciding what to order | see the signature drinks and prices | see the four starred drinks, drawn, with printed prices |
| Parents with a small child | know it works for a family | read that there are high chairs inside |
| First-timer from elsewhere in Jakarta | find the place | open directions in Google Maps, see the address and map |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp (ask or reserve a table) [MOCKUP number assumption]  3. Telepon
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Hero | Recognition in five seconds; first action | Garden photo (owner-3, cropped to remove the person at left). Clinking-cups mark (redrawn from the logo, placeholder) + "Sajenak" + "space for everyone" (photos: owner-2). Line: "Kopi, taman, dan rooftop di Rawa Domba — buka dari pagi." [MOCKUP]. "Buka hari ini 07.30–23.00" (Jumat/Sabtu "07.30–24.00") computed for Asia/Jakarta, static fallback "Buka setiap hari · 07.30–23.00, Jumat–Sabtu sampai 24.00" (hours). "4,9 di Google · 455 ulasan" (listing). Buttons "Petunjuk Arah", "WhatsApp" [MOCKUP]. |
| Menu andalan | Show what to order and what it costs | Four starred drinks as illustrations with printed prices (photos: owner-4): Es Kopi Sajenak Rp 26rb, kopi susu caramel with creamy vanilla ice cream; Es Kopi Sepintas Rp 26rb, creamy iced kopi susu with gula aren; Es Kopi Rumit Rp 28rb, kopi susu hazelnut with creamy chocolate ice cream; Creamy Butterscotch Latte Rp 30rb, which has its own promo poster. Butterscotch promo photo (owner-2, cropped to the drink). "Kopi lainnya": Affogato Rp 27,5rb; Americano \| Long Black Rp 20rb; Cafe Latte Rp 20rb; Cappuccino Rp 25rb; Coffee Beer Rp 28rb; Caramel Latte Rp 27rb; Hazelnut Latte Rp 30rb; Vanilla Latte Rp 30rb (photos: owner-4). Non-kopi: Chocolate, Matcha Latte, Red Velvet, Lychee Tea, Lemon Tea, Rp 22rb–28rb [MOCKUP]. Makanan: Nasi Goreng Sajenak, Rice Bowl Ayam Sambal Matah, Mie Goreng (Rp 30rb–45rb); Kentang Goreng, Cireng, Roti Bakar, Pisang Goreng (Rp 18rb–28rb) [MOCKUP]. Note that reviewers like the food (review 1). |
| Pilih tempatmu | Show the many spaces; this is what makes Sajenak different | Kicker "Feel like home" (photos: owner-4). Intro: garden at the front, rooms inside, rooftop above. Inside there are high chairs and a photobox; a cat wanders the garden (photos). Pojok rotan (owner-1): warm amber walls, rattan chairs, teak-root tables on pebbles. Ruang baca (owner-7): concrete walls, bookshelves, neon globe, window onto greenery; tables can be reserved. Rooftop (owner-5 cropped to remove the water tank, owner-6): tiered concrete seats, trees in red-brick planters, string lights. |
| Kata mereka | Social proof without quotes | "4,9 di Google · 455 ulasan" (listing). Four paraphrased themes, no names, no quote marks (reviews 1–5): comfortable for hanging out with friends, and the food and drinks are good; the baristas get top marks and the service is good; the vibe, the music and the prices feel right, like an authentic coffee shop; some have made it their favourite place since school, full of memories, and keep coming back. Note: "Dirangkum dari ulasan Google." |
| Kunjungi kami | Get there; check hours | Address "Jl. Rawa Domba No.47A, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13440" (listing). Hours table "Minggu–Kamis 07.30–23.00 · Jumat–Sabtu 07.30–24.00 · buka setiap hari", today's row marked (hours). Google Maps embed + "Petunjuk Arah" link. |
| Hubungi kami | Reserve or call | "Mau datang rame-rame? Pesan meja lewat WhatsApp dulu." [MOCKUP]. WhatsApp button [MOCKUP]. "Telepon 0856-9317-2926" (listing). Closing line "Pagi ngopi, malam ke rooftop. Semua kebagian tempat." [MOCKUP]. |
| Footer | Identity and draft status | "Sajenak · space for everyone", address, "Draf mockup, belum dipublikasikan." Draft banner at the top in Indonesian. |

### Copy, as it goes on the page (Bahasa Indonesia)
Facts restated from brief.md. [MOCKUP] marks invented copy; render it with `data-mockup`.
- Banner: "Draf mockup untuk Sajenak. Beberapa detail masih contoh sampai kamu konfirmasi."
- Hero: h1 "Sajenak" · "space for everyone" · "Kopi, taman, dan rooftop di Rawa Domba — buka dari pagi." [MOCKUP] ·
  "Buka hari ini 07.30–23.00" / "Buka hari ini 07.30–24.00" (fallback "Buka setiap hari · 07.30–23.00, Jumat–Sabtu sampai 24.00") ·
  "4,9 di Google · 455 ulasan" · buttons "Petunjuk Arah", "WhatsApp" [MOCKUP].
- Menu andalan: lead "Empat yang kami beri bintang di menu."
  - Es Kopi Sajenak · Rp 26rb · "Kopi susu caramel dengan creamy ice cream vanila."
  - Es Kopi Sepintas · Rp 26rb · "Es kopi susu gula aren yang creamy."
  - Es Kopi Rumit · Rp 28rb · "Kopi susu hazelnut dengan creamy ice cream cokelat."
  - Creamy Butterscotch Latte · Rp 30rb · "Favorit yang sampai punya poster sendiri."
  - Photo caption: "Creamy Butterscotch Latte, dari poster promo Sajenak."
  - "Kopi lainnya": Affogato Rp 27,5rb ("Satu shot espresso di atas ice cream.") · Americano | Long Black Rp 20rb ·
    Cafe Latte Rp 20rb · Cappuccino Rp 25rb · Coffee Beer Rp 28rb ("Kopi, karamel, dan soda.") · Caramel Latte Rp 27rb ·
    Hazelnut Latte Rp 30rb · Vanilla Latte Rp 30rb
  - "Non-kopi" [contoh] [MOCKUP]: Chocolate, Matcha Latte, Red Velvet, Lychee Tea, Lemon Tea · Rp 22rb–28rb
  - "Makanan" [contoh] [MOCKUP]: Nasi Goreng Sajenak, Rice Bowl Ayam Sambal Matah, Mie Goreng · Rp 30rb–45rb;
    Kentang Goreng, Cireng, Roti Bakar, Pisang Goreng · Rp 18rb–28rb
- Pilih tempatmu: kicker "Feel like home" · intro "Taman rumput di depan, ruang-ruang di dalam, rooftop di atas. Di dalam ada kursi bayi dan photobox, dan di taman ada kucing yang suka ikut nongkrong."
  - Pojok rotan: "Dinding kuning hangat, kursi rotan berbantal, meja akar jati di atas lantai kerikil."
  - Ruang baca: "Dinding beton, rak buku, neon bola dunia, dan jendela ke arah kebun. Meja di sini bisa dipesan."
  - Rooftop: "Tribun beton bertingkat, pohon di bak bata merah, dan untaian lampu di atas kepala."
- Kata mereka: "4,9 di Google · 455 ulasan" · note "Dirangkum dari ulasan Google, bukan kutipan langsung."
  - "Nyaman buat nongkrong bareng teman, dan makanan serta minumannya enak." (reviews 1, 4)
  - "Baristanya dapat nilai sempurna, pelayanannya juga bagus." (reviews 4, 5)
  - "Suasana, musik, dan harganya pas, terasa seperti kedai kopi yang otentik." (reviews 3, 5)
  - "Ada yang menjadikannya tempat favorit sejak masa sekolah, penuh kenangan, dan selalu ingin balik lagi." (reviews 1, 2)
- Kunjungi kami: address · link "Petunjuk Arah" · "Minggu–Kamis 07.30–23.00" · "Jumat–Sabtu 07.30–24.00" · marker "hari ini" · "Buka setiap hari."
- Hubungi kami: "Mau datang rame-rame? Pesan meja lewat WhatsApp dulu." [MOCKUP] · buttons "WhatsApp" [MOCKUP], "Telepon 0856-9317-2926" ·
  closing "Pagi ngopi, malam ke rooftop. Semua kebagian tempat." [MOCKUP]
- Footer: "Sajenak · space for everyone" · "Jl. Rawa Domba No.47A, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13440" · "Draf mockup, belum dipublikasikan."

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos beyond the owner's own
uploads (customer photos photo-1..3 are reference only), multiple pages, the original logo file
(the mark is redrawn until the owner sends it).

## Open questions for the owner
1. Is 0856-9317-2926 on WhatsApp, and can guests use it to ask or reserve a table?
2. Is the hero line "Kopi, taman, dan rooftop di Rawa Domba — buka dari pagi" right for you?
3. Are the coffee prices on the menu board (Rp 20rb–30rb) still current?
4. Do you serve these non-coffee drinks: Chocolate, Matcha Latte, Red Velvet, Lychee Tea, Lemon Tea?
5. Do you serve these dishes: Nasi Goreng Sajenak, Rice Bowl Ayam Sambal Matah, Mie Goreng, Kentang Goreng, Cireng, Roti Bakar, Pisang Goreng?
6. Are the example price ranges close: snacks Rp 18rb–28rb, rice bowls and mains Rp 30rb–45rb, non-coffee Rp 22rb–28rb?
7. Is the casual "kamu" tone OK, or would you prefer "Anda"?
8. Is the closing line "Pagi ngopi, malam ke rooftop. Semua kebagian tempat." OK?
9. Can you send your logo file? The mockup uses a redrawn version of the clinking-cups mark.
10. Are "Pojok rotan", "Ruang baca" and "Rooftop" OK as names for the spaces, or do you have your own names?
11. Do mornings bring students and remote workers, and do community or birthday groups use the rooftop at night? (Not shown on the page. It shaped the copy only.)
