# PRD: Dalle Coffee and Eatery mockup site

## Goal
A one-page mockup that makes Dalle Coffee and Eatery's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the lit "DALLE CAFE"
sign and arch logo on the walnut wall, their own drinks), and the checklist questions are few
enough to answer in one conversation.

All site copy, buttons, hours and the draft banner are in Bahasa Indonesia, `lang="id"`.
Menu names stay exactly as the shop uses them (Dalle Iced Tea, Dalle Iced Coffee).

## The shop in one paragraph
Dalle Coffee and Eatery is a cafe in a Jakarta Garden City shophouse (Ruko The Savoy No. 12 Blok C1,
Cakung Timur), open every day 10:00–21:00, moderately priced, rated 4.8 from 59 Google reviews
(listing, hours). It sells coffee people call delicious, pizza, and house drinks such as the Dalle
Iced Tea with nata de coco, chia seeds and a hint of pandan, served with a spoon rather than a
straw, and the Dalle Iced Coffee (reviews 3, 4). Customer photos show a sweet flatbread with
chocolate sprinkles and grated cheese, and an iced latte topped with cookie crumble with cookies
on the side (photos). People come to work in a calm, clean room, to meet in its private room, or
to linger with friends over cards and snacks (reviews 1, 4, 5; photos). The room is warm walnut
slats, cream plaster with arched niches, arched glass doors, linear pendant lights, black-steel
shelves of syrup bottles and a backlit line-art logo of an arch with leaves (photos).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local in JGC looking for a place to work for the afternoon | know it's calm and open now | see "Buka hari ini 10.00–21.00" and the calm-workspace story in the first two screens |
| Team lead or freelancer who needs to meet a client | check there is a private room and how to ask for it | find "Ruang meeting" from the first scroll, with a call (and [MOCKUP] WhatsApp) button beside it |
| Friends choosing where to hang out | see what they'd eat and drink | see at least four real menu items drawn, with names and example prices |
| First-timer curious about the coffee (review 1) | find the place | tap "Petunjuk Arah" in the first screen on a phone |
| The owner (pitch audience) | recognise their own shop | see their own photo of the lit sign and bar, their drink names, their hours |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. Telepon (0851-8337-5752)  3. Ask about the meeting room
([MOCKUP] WhatsApp to the same number; falls back to the phone call).
The first screen shows action 1 without scrolling, on a phone (390 × 844).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Make clear this is a draft | "Draf: ini contoh situs untuk Dalle Coffee and Eatery dan belum resmi." (rule 7) |
| Hero | Recognition + directions in one screen | owner-1.jpg in an arched window (photos.json, owner upload); h1 lockup "Dalle" / "Coffee and Eatery" (listing name); tagline "Tempat tenang buat kerja, rapat, atau sekadar ngopi." (brief, tone of voice); "Buka hari ini 10.00–21.00" (hours) with a live "sedang buka / sudah tutup" note computed in Asia/Jakarta time; "Ruko The Savoy, Jakarta Garden City" (listing); buttons "Petunjuk Arah", "Telepon" |
| Menu Dalle (`#menu`) | Show the actual products | Intro: "Es teh dan es kopi racikan Dalle, plus makanan untuk menemani kerja." ([MOCKUP] copy). Drawn: Dalle Iced Tea, "Nata de coco, biji chia, dan sedikit pandan." (review 3), small line "Disajikan dengan sendok." ([MOCKUP] pending the owner's answer on straws, reviews 3, 4); Dalle Iced Coffee (review 3), description "Es kopi racikan Dalle." ([MOCKUP] copy; drawn as a milk coffee, [MOCKUP]); iced latte with cookie crumble and cookies on the side (photos), shown as "Es latte cookie crumble" ([MOCKUP] label, real name unknown); sweet flatbread with chocolate sprinkles and grated cheese (photos) named "Pizza Coklat Keju" ([MOCKUP] name). Text list "Dari dapur": Pizza (review 4); [MOCKUP] Nasi goreng, Chicken katsu rice, Aglio olio. [MOCKUP] prices: Dalle Iced Tea Rp 25rb, Dalle Iced Coffee Rp 28rb, Pizza mulai Rp 45rb, mains mulai Rp 40rb. No price on the latte or the flatbread (none in the brief). Note: "Harga di halaman ini contoh dan menunggu konfirmasi." |
| Kerja dengan tenang (`#kerja`) | Sell the calm workspace | Lead: "Suasananya tenang dan ruangannya bersih, dari jam 10 pagi sampai 9 malam." (reviews 1, 5, hours). Four cells: "Tenang: pas untuk kerja sambil nongkrong." (review 5); "Nyaman & bersih: ruangannya rapi dan terawat." (review 1); "10.00–21.00: setiap hari, termasuk akhir pekan." (hours); [MOCKUP] "Makan siang: nasi dan pasta untuk makan siang yang proper." (brief personality + mains) |
| Ruang meeting (`#meeting`) | Make the private room bookable | "Ada ruang privat untuk rapat tim atau ketemu klien." (review 4); [MOCKUP] "Hingga 8 orang"; [MOCKUP] "Paket: ruang + 1 minuman per orang"; [MOCKUP] button "Pesan lewat WhatsApp" (wa.me to the listing number); "atau telepon 0851-8337-5752" (listing) |
| Kata mereka (`#ulasan`) | Social proof without quoting | "4,8 di Google dari 59 ulasan" (listing). Four paraphrases, no names, no quote marks: "Ruangannya nyaman dan terjaga kebersihannya." (review 1); "Tempatnya tenang dan enak dipakai kerja." (review 5); "Kopi dan makanannya enak, pilihan menunya menarik." (reviews 4, 5); "Pelayanannya baik, dan ada ruang privat untuk meeting." (review 4). Note: "Diringkas dari ulasan Google, bukan kutipan langsung." |
| Kunjungi kami (`#lokasi`) | Get them there | Map embed (keyless); full address "Ruko The Savoy No. 12 Blok C1, Jakarta Garden City, Cakung Timur, Cakung, Jakarta Timur 13910" (listing); "Setiap hari 10.00–21.00" (hours); "Petunjuk Arah" button |
| Hubungi kami (`#kontak`) + footer | Close with every way to reach them | "0851-8337-5752" (listing); [MOCKUP] "Nomor ini juga bisa dihubungi lewat WhatsApp."; buttons "Telepon", [MOCKUP] "WhatsApp", "Petunjuk Arah". Footer: name, short address, "Foto: Dalle Coffee and Eatery (Google Maps)", "Situs contoh, belum resmi." |

Copy voice: casual Jakarta-cafe Indonesian; where the reader is addressed it's "kamu" ([MOCKUP], brief).
Not on the site: slow service (review 5) and missing straws (reviews 3, 4); no wifi, power outlet,
parking, halal or other claims the listing doesn't make.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: drawing or tracing the Dalle logo (we use
the owner's photo of it until they send the file), and photos of food or the meeting room (none
from the owner; products are drawn).

## Open questions for the owner
1. Is the sweet flatbread with chocolate sprinkles and grated cheese called "Pizza Coklat Keju"? (If not, what is its menu name?)
2. Should the iced latte with cookie crumble appear as "Es latte cookie crumble"? (If not, what is its menu name and price?)
3. Is the Dalle Iced Coffee a milk coffee, as we drew it?
4. Is "Es kopi racikan Dalle" a fair one-line description of the Dalle Iced Coffee?
5. Do you serve rice and pasta mains for lunch, such as nasi goreng, chicken katsu rice and aglio olio?
6. Are these example prices close: Dalle Iced Tea Rp 25rb, Dalle Iced Coffee Rp 28rb, pizza from Rp 45rb, mains from Rp 40rb?
7. Does the meeting room fit up to 8 people?
8. Do you offer a meeting package of the room plus one drink per person?
9. Can guests book the meeting room by WhatsApp?
10. Does 0851-8337-5752 take WhatsApp messages?
11. Is serving drinks with a spoon instead of a straw deliberate, and should the site say "Disajikan dengan sendok"?
12. Is "a quiet daytime workspace that also does a proper lunch" a fair way to describe Dalle?
13. Is casual "kamu" right for the site, or do you prefer the more formal "Anda"?
14. Should the site use the Google name "Dalle Coffee and Eatery" rather than "Dalle Cafe" from the sign?
15. Are you happy for your Google photo of the bar and lit sign to be the main picture?
16. Can you send the arch-and-leaves logo file, and photos of your drinks, food and meeting room to replace the drawings?
17. Are the four review summaries and the 4.8 rating fine to show?
