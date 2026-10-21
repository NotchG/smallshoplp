# PRD: Kopi Goen mockup site

## Goal
A one-page mockup that makes Kopi Goen's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia throughout (copy, buttons, hours, draft banner, `lang="id"`).
Register "kamu" ([MOCKUP], owner may prefer "Anda").

## The shop in one paragraph
Kopi Goen is a coffee shop on Jl. Munggang in Balekambang, Jakarta Timur, open every day from
12.00 to 23.00 (Friday from 12.30), moderately priced, rated 4.7 from 275 Google reviews (listing,
hours). It is an open-air garden: old trees hung with staghorn ferns, gravel beds, concrete cube
seats and a stepped concrete tribune, with a chrome Italian espresso machine on the bar (photos).
Guests praise the iced aren (palm sugar) coffee, which one called the best in town, the Havana
coffee, some of the friendliest baristas around, and an open space that turns beautiful once
night falls and the trees and paths are lit from below (reviews 2, 3, 4; photos). There are no
owner photos, the reviews are thin, and the house number in the listing is garbled (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Neighbour from Balekambang deciding where to ngopi this afternoon or tonight | know if it's open now and until when | see today's hours and an open/closed status in the first screen |
| Fan of iced aren coffee or the Havana coffee | check the drink is there and roughly what it costs | see Es Kopi Aren and Kopi Havana first in the menu, drawn, with example prices |
| First-timer coming from further away (after work, students) | find a garden café tucked behind a residential street | tap "Petunjuk Arah" from the first screen; see the address and a map further down |
| Someone with a question (is there cover if it rains, can a group come) | ask before going | reach WhatsApp or a phone call in one tap, top and bottom of the page |
| The owner, being pitched | recognise their garden | see their steps, cube seats, uplit trunks and staghorn fern in the page's own drawing, with clear frames for their photos |

## Primary actions
1. Get directions ("Petunjuk Arah")  2. Message on WhatsApp ([MOCKUP] number assumed to take WhatsApp)  3. Call ("Telepon")
The first screen shows action 1 without scrolling, on a phone (action 2 sits beside it).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Honesty: this is a draft | "Draf: contoh situs untuk Kopi Goen, belum resmi." (CLAUDE.md rule 7) |
| Hero | Recognise the shop, see today's hours, act | Name "Kopi Goen" (listing); eyebrow "Kedai kopi di kebun · Balekambang, Jakarta Timur" (listing, photos); line [MOCKUP] "Ngopi di kebun, dari siang sampai malam."; today's hours "Buka hari ini 12.00–23.00" (Jumat 12.30–23.00) with open/closed status computed from the hours (hours); buttons "Petunjuk Arah" (listing) and "WhatsApp" ([MOCKUP] WhatsApp) |
| Menu andalan | Show what to order, products as drawings | Featured: Es Kopi Aren (reviews 3) with [MOCKUP] Rp 20rb and description; Kopi Havana (reviews 2) as a labelled photo frame, [MOCKUP] spelling and Rp 25rb; Cappuccino with latte art (photos), [MOCKUP] Rp 25rb; V60 [MOCKUP] Rp 25rb; Kentang Goreng [MOCKUP] Rp 18rb. Then "Menu lainnya", all [MOCKUP]: Espresso (Americano, Caffe Latte, Piccolo), Manual brew (Kopi Tubruk, biji lokal bergiliran), Non-kopi (Matcha Latte, Coklat, Lychee Tea, Teh Tarik), Camilan (Pisang Goreng, Roti Bakar, Indomie Goreng). Note "Harga contoh, menunggu konfirmasi pemilik." Frame for an espresso bar photo; caption says the bar has a chrome Italian espresso machine (photos) |
| Suasana kebun | Sell the garden by day and by night | Old trees with staghorn ferns, gravel beds, concrete cube seats, stepped seating, a log bench (photos); open space that turns beautiful at night, trees and paths lit from below (reviews 4; photos). Day panel line "Pohon tua berhias pakis tanduk rusa, kerikil, dan kursi kubus beton." (photos); night panel line "Begitu gelap, pohon dan jalan setapak disinari dari bawah." (reviews 4; photos). Two labelled frames for owner photos: garden by day, garden at night. [MOCKUP] copy "Tenang dan santai, sudut hijau di tengah permukiman." No all-weather claims |
| Kata mereka | Social proof without quotes or names | 4,7 dari 275 ulasan Google (listing). Paraphrases, no names, no quote marks: "Es kopi arennya disebut yang terbaik di kota." (reviews 3); "Ada yang menyebut baristanya paling ramah." (reviews 3); "Tempatnya terbuka, dan makin cantik saat malam tiba." (reviews 4); "Kopi Havana-nya dipuji tamu belakangan ini." (reviews 2). Note "Diringkas dari ulasan Google." |
| Kunjungi kami | Find it and plan the visit | Address "Jl. Munggang, RT.6/RW.4, Balekambang, Jakarta Timur 13530" (listing) with [MOCKUP] note "nomor rumah menyusul"; map embed; hours table Senin–Kamis 12.00–23.00, Jumat 12.30–23.00, Sabtu–Minggu 12.00–23.00, "Buka setiap hari" (hours); "Petunjuk Arah" button |
| Hubungi kami | A real close with every action | [MOCKUP] heading "Sampai ketemu di kebun."; [MOCKUP] line "Mau tanya menu atau jam buka? Kirim pesan atau telepon saja."; WhatsApp ([MOCKUP]), Telepon 0878-1105-0836 (listing), Petunjuk Arah |
| Footer | Identify and disclaim | Name, address, phone (listing); "Situs ini draf contoh. Bagian bertanda masih menunggu konfirmasi pemilik." |

Not on the site even though the brief infers them: Kecamatan Kramat Jati (brief says confirm
before printing), the audience guesses (smokers, laptop workers), the price level wording.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Customer photos (`photo-*.jpg`) never appear.

## Open questions for the owner
1. Is the name spelled exactly "Kopi Goen", and do you have a logo or wordmark we should use?
2. The listing shows the house number as "No.rt05 5". Can you tell us the correct number for Jl. Munggang?
3. Is your area Kecamatan Kramat Jati, and may we print that in the address?
4. Does 0878-1105-0836 take WhatsApp messages?
5. Is "Ngopi di kebun, dari siang sampai malam." a good one-line description of Kopi Goen?
6. Is "tenang dan santai, sudut hijau di tengah permukiman" a fair way to describe the garden?
7. Is Es Kopi Aren your house signature, and is it called exactly "Es Kopi Aren" on your menu? Do you offer regular and large?
8. Is the description "Kopi, susu, dan gula aren di atas es" right for your Es Kopi Aren?
9. How is the Havana coffee spelled on your menu ("Kopi Havana"?), and is it served hot or iced? May we replace its photo frame with a photo you send?
10. Do you serve Americano, Cappuccino, Caffe Latte and Piccolo from the espresso bar?
11. Do you offer manual brew (V60 and Kopi Tubruk) with a rotating local bean?
12. Do you serve Matcha Latte, Coklat, Lychee Tea and Teh Tarik?
13. Do you serve Kentang Goreng, Pisang Goreng, Roti Bakar and Indomie Goreng?
14. Are these example prices close: Es Kopi Aren Rp 20rb, Kopi Havana Rp 25rb, Cappuccino Rp 25rb, V60 Rp 25rb, Kentang Goreng Rp 18rb?
15. Is there any covered or indoor seating for rainy evenings?
16. Should the site speak to guests as "kamu", or would you prefer "Anda"?
17. Is the closing line "Sampai ketemu di kebun." and "Mau tanya menu atau jam buka? Kirim pesan atau telepon saja." okay?
18. Can you send four photos for the frames: the garden by day, the garden at night, the espresso bar, and the Havana coffee (an Es Kopi Aren photo would replace its drawing too)?
19. Are the drawn drinks (Es Kopi Aren, Cappuccino, V60, Kentang Goreng) close enough to how you serve them until photos arrive?
