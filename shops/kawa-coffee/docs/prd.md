# PRD: Kawa Coffee mockup site

## Goal
A one-page mockup that makes Kawa Coffee's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

The five-second test here has three parts: the KAWA / COFFEE sign with the round backlit disc,
the latte in the black cup (their own photo), and the record wall shown as the menu.

## The shop in one paragraph
Kawa Coffee is a coffee shop in a two-storey concrete building on Jl. Raya Mabes Hankam,
Bambu Apus, Cipayung (Jakarta Timur), open every day from 08:00, until 22:00 on weekdays and
23:00 at weekends (listing, hours). It serves good coffee and comforting food at fair prices
(reviews 1, 3, 5). Reviewers single out the Mont Blanc (review 2), Espresso on the rock and the
fried rice (review 4), and the signature iced coffee, chicken katsu with fries, mie goreng,
donat kampung and dimsum (review 5). People come to work on laptops because the seats are cosy
and the wifi is fast (reviews 1, 3, 5), to hang out and talk (review 4), or to recover from a
long drive (review 2). Parking is roomy (review 3), there is an air-conditioned indoor smoking
room upstairs (review 5), and downstairs a wall of record sleeves hangs above a turntable (photos).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Laptop worker (WFC) choosing where to spend the afternoon | know it's comfortable to work there and when it closes | read "wifi kencang", see today's hours in the first screen, find the floor-by-floor "Tempat" section |
| Driver or rider passing through Cipayung, tired after a long trip | find it fast and know they can park | tap "Petunjuk Arah" in the first screen; see "parkir luas" |
| Friends planning to meet | see what to order and whether it's a nice place to sit | see six signature items as pictures with example prices; see the two floors |
| Smoker | know there's somewhere indoors to smoke | find "ruang merokok ber-AC, lantai 2" |
| [MOCKUP] Local from Bambu Apus on the way to or from work | check today's hours, message ahead | today's hours in the hero; WhatsApp button |
| The owner, being pitched | recognise their shop and spot what's guessed | see their sign, disc, cup and record wall; every guessed item marked `data-mockup` |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp ([MOCKUP] that the number takes WhatsApp)  3. Telepon
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`. Menu and dish names stay as the shop uses them.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Top row | Orientation | "Cipayung, Jakarta Timur" (listing); anchor links Menu / Tempat / Lokasi |
| Hero | Recognition and the first action | h1 "Kawa Coffee" as the sign lockup KAWA / COFFEE (photos); the round disc (photos; as brand mark [MOCKUP]); "Kopi dan makanan rumahan di Cipayung." (brief); "Kopi enak, wifi kencang, parkir lega. Duduk saja selama yang kamu mau." (brief tone line; reviews 1, 3, 5); "Buka hari ini 08.00–22.00/23.00" (hours); buttons Petunjuk Arah + WhatsApp [MOCKUP WA]; owner-1.jpg with caption "Kopi susu panas dengan latte art" (owner photo) |
| Menu andalan (Sisi A) | Show what to order | Intro "Datang untuk satu kopi, tinggal sampai makan siang." [MOCKUP]; six illustrated sleeves: 01 Mont Blanc (review 2), 02 Espresso on the rock (review 4), 03 Es Kopi Signature Kawa (item: review 5; name [MOCKUP]), 04 Nasi Goreng Kawa (item: review 4; name [MOCKUP]), 05 Chicken katsu & kentang goreng (review 5), 06 Donat kampung (review 5); a price under each: Rp 30rb, 25rb, 25rb, 30rb, 35rb, 12rb [MOCKUP] |
| Menu, Sisi B (sideboard band) | The rest of the menu, short | Kopi lainnya: Cappuccino (photos), Americano, Caffe Latte, Kopi Susu Gula Aren, Manual Brew (V60) [MOCKUP]; Non-kopi: Matcha Latte, Chocolate, Lychee Tea [MOCKUP]; Dari dapur: Mie goreng, Dimsum (review 5); note "Harga di draf ini masih contoh. Sudah termasuk pajak dan servis." [MOCKUP] |
| Tempat buat kerja & ngobrol | Show it's a place to stay | Illustrated elevation of the two-storey building and carport (photos); Lantai 2: ruang merokok dalam ruangan ber-AC (review 5); Lantai 1: kursi empuk, meja untuk kerja dan ngobrol, wifi kencang, sudut piringan hitam (reviews 1, 3, 4, 5; photos); Depan: parkir luas untuk mobil dan motor (review 3; photos) |
| Kata mereka | Social proof without quotes | Note "Diringkas dari ulasan Google."; four paraphrased points: coffee good and worth the price (reviews 1, 5); comfortable for working, fast wifi (reviews 1, 3, 5); refreshing Mont Blanc after a long trip (review 2); roomy parking (review 3). No names, no stars, no rating |
| Kunjungi kami | Find it, know when | Address Jl. Raya Mabes Hankam No.3, Bambu Apus, Kec. Cipayung, Jakarta Timur 13890 (listing; house number [MOCKUP] check); "Buka setiap hari"; Senin–Jumat 08.00–22.00; Sabtu–Minggu 08.00–23.00 (hours); "Bayar dengan QRIS atau tunai" [MOCKUP]; Google Maps embed |
| Hubungi kami | Act | "Sampai ketemu di Kawa." (section copy); 0878-8824-2274 (listing); buttons Petunjuk Arah, WhatsApp [MOCKUP WA], Telepon |
| Footer | Honesty | "Ini draf situs untuk ditinjau pemilik."; Kawa Coffee · Bambu Apus, Cipayung; draft banner on top (Indonesian); `noindex` |

Not on the page: the 4.8 rating and review count (brief: no star counts), the dropped pandan
iced coffee, and the old complaint about opening late (brief notes).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.
Only one owner photo exists (owner-1.jpg); the six menu items are flat illustrations until
the owner sends photos. Customer photos (photo-1 to photo-3) are reference only and never ship.

## Open questions for the owner
These become `owner-checklist.md`. Grouped so they fit one conversation.

**Name, place, contact**
1. Should the site say "Kawa Coffee" (without "Jakarta")? Is this your only branch?
2. Is the house number No. 3, as on Google? (A photo shows 24 on the gate pillar.)
3. Does 0878-8824-2274 take WhatsApp messages?
4. Do you accept QRIS and cash? (We'd add cards if you take them now.)
5. May we use the round backlit light beside your sign as the site's little logo?

**Menu**
6. Is it spelled "Mont Blanc" and "Espresso on the rock" on your menu board?
7. Is the signature iced coffee called "Es Kopi Signature Kawa"?
8. Is the fried rice called "Nasi Goreng Kawa"?
9. Are Americano, Caffe Latte, Kopi Susu Gula Aren and Manual Brew (V60) on the menu?
10. Are Matcha Latte, Chocolate and Lychee Tea on the menu?
11. Are these example prices close: Mont Blanc Rp 30rb, Espresso on the rock Rp 25rb, Es Kopi Signature Rp 25rb, Nasi Goreng Rp 30rb, Chicken katsu & kentang goreng Rp 35rb, Donat kampung Rp 12rb?
12. Do your prices still include tax and service?
13. Are the drawings of the six items close enough for now? Could you send photos of the Mont Blanc, the nasi goreng, the storefront and the record wall to replace them?

**Voice and story**
14. Is "kamu" right for your customers, rather than "Anda"?
15. Is "Datang untuk satu kopi, tinggal sampai makan siang" true to how people use Kawa?
16. Are the headings and short lines on the page in a voice you'd use?
17. Do records actually get played on the turntable? (The page only mentions the record corner.)
18. Not on the page yet: was the building a house before it became the cafe, and do many regulars come from Bambu Apus and nearby? Either could become a line on the site.
