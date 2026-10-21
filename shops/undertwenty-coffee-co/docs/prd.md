# PRD: Undertwenty Coffee Co mockup site

## Goal
A one-page mockup that makes Undertwenty Coffee Co's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner; `lang="id"`.
Names stay as the shop's signs write them: "Undertwenty", "U20", "Coffee. Co".

## The shop in one paragraph
Undertwenty Coffee Co (signed "U20 Coffee. Co") is a small shophouse coffee bar at Budaya 69, Condet,
Kramat Jati, Jakarta Timur. From the street it looks plain and tiny, but inside it takes coffee seriously:
plenty of coffee options including manual brew, and a bar kitted out with pour-over drippers, a syphon, a
cold-drip tower, French presses, a grinder and an espresso machine (reviews 2, photos). It's open every day
from 10.00 until 01.00, and until 02.00 on Saturday and Sunday (hours). People praise the coffee, the comfortable
room, the warm hospitality and the evenings there; one reviewer called its green tea latte the best they'd
had, and another used it for TikTok live sessions (reviews 1–5). Rated 4.7 from 216 Google reviews (listing).
The five reviews are 3 to 9 years old, so the menu and feel need the owner's confirmation.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Night owl nearby (Condet, Batu Ampar) | know if it's open now, and until when | see tonight's closing time and "Sedang buka / Tutup" in the first screen |
| Coffee lover looking for manual brew in Jakarta Timur | know it's serious about coffee | see manual brew, the brew methods and the drinks within two scrolls |
| Passer-by who noticed the small shopfront | recognise it and find the door | see the facade photo first, and the "Patokan" (what to look for) in Kunjungi kami |
| Laptop worker or content creator | know they can sit a while, with WiFi | find Free WiFi and "nyaman duduk lama" in Ngopi sampai larut; message on WhatsApp |
| The owner (the pitch) | recognise their shop | see their brick front, the U20 plate and their own iced coffee photo |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp 0856-9991-113 ([MOCKUP] that it takes WhatsApp)  3. Telepon 0856-9991-113
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner + `noindex` | Project rule | "Draf situs untuk ditinjau pemilik Undertwenty Coffee Co. Beberapa detail masih contoh sampai dikonfirmasi." (project rule) |
| Hero | Recognition, tonight's hours, directions | `h1` "Undertwenty" + script "Coffee. Co" (listing, signage photos). Tagline: [MOCKUP] "Kecil dari luar, serius soal kopi di dalam." Plate: live status, e.g. "Hari ini · Jumat / 10.00–01.00 / ● Sedang buka"; no-JS fallback "Buka setiap hari / 10.00–01.00 / Sabtu–Minggu sampai 02.00" (hours). "Budaya 69, Condet, Kramat Jati" (listing). Buttons "Petunjuk Arah", "WhatsApp" ([MOCKUP]). Image: owner-1.jpg facade (photos.json) |
| Menu andalan | Show the drinks | Lead: [MOCKUP] "Di balik pintu kaca itu: kopi susu, manual brew, dan green tea latte." Featured: owner-2.jpg as [MOCKUP] "Es Kopi Susu U20", Rp 20rb, "Kopi, susu, dan es, berlapis di gelas bersegi" (photo + [MOCKUP] name/price); [MOCKUP] "Green Tea Latte", panas atau dingin, Rp 25rb (reviews 5, photos; drawing); [MOCKUP] "Manual brew", V60 · Japanese iced · Syphon, Rp 25rb–35rb, "Biji Nusantara bergantian: Gayo, Toraja, Jawa" (reviews 2; drawing); [MOCKUP] "Espresso + susu kental manis", "Gelas kecil, dua lapis", no price (photos; drawing). Full list, all [MOCKUP]: **Kopi susu & espresso** Es Kopi Susu U20 Rp 20rb · Espresso Rp 15rb · Americano Rp 18rb · Cappuccino / Latte Rp 23rb–25rb. **Manual brew** V60 · Japanese iced · Syphon Rp 25rb–35rb · Cold drip (botol) Rp 30rb. **Non-kopi** Green Tea Latte Rp 25rb · Cokelat · Red velvet · Teh Rp 20rb–25rb. **Camilan malam** Roti bakar · Kentang goreng · Pisang goreng · Mie instan Rp 15rb–25rb |
| Cara kami menyeduh | Prove "serious inside" | Lead: [MOCKUP] "Satu meja bar, banyak cara menyeduh." Methods (photos), one-liners [MOCKUP]: Pour over "Diseduh manual lewat dripper, rasa bijinya lebih jernih." · Syphon "Seduhan vakum di dua tabung kaca, seru ditonton dari bar." · Cold drip "Tetes demi tetes, pelan dan lama." · French press "Direndam lalu ditekan, hasilnya tebal dan penuh." Body (photos): "Di meja bar juga ada mesin espresso dan grinder." |
| Ngopi sampai larut | Late hours, room to stay | Lead (hours): "Buka sampai 01.00 tiap malam, dan sampai 02.00 di Sabtu dan Minggu." Chart: Senin–Jumat 10.00–01.00, Sabtu–Minggu 10.00–02.00, live "Sekarang HH.MM" marker (hours). Points: "Free WiFi" (photos: door decal) · "Nyaman buat duduk lama." (review 2) · [MOCKUP] "Kedai kopi dekat rumah untuk ngobrol sampai larut." |
| Kata mereka | Social proof, paraphrased | "4,7 dari 216 ulasan Google" (listing). Paraphrases, no names: **Pilihan kopi** "Dari luar kelihatan kecil dan biasa, ternyata pilihan kopinya banyak, manual brew juga ada." (review 2) · **Suasana** "Tempatnya nyaman dan enak buat duduk lama, bahkan sambil menunggu hujan reda." (review 2) · **Pelayanan** "Kopinya enak, suasananya pas, pelayanannya ramah; ada yang datang untuk live TikTok dan bikin konten." (review 3) · **Malam hari** "Tempat yang pas untuk menghabiskan malam dengan kopi yang baru diseduh, di Jakarta Timur." (reviews 1, 4). Caption: "Dirangkum dari ulasan Google, bukan kutipan langsung." |
| Kunjungi kami | Find the place | Address: "Budaya 69, Condet, Batu Ampar, Kramat Jati, Jakarta Timur 13520" (listing). Hours: "Senin–Jumat 10.00–01.00 · Sabtu–Minggu 10.00–02.00 · Buka setiap hari" (hours). Map embed (listing). Patokan: crop of owner-1 + "Cari dinding bata oranye, papan hitam U20, dan pintu kaca bertuliskan UNDERTWENTY." (photos). Button "Petunjuk Arah" |
| Hubungi kami | Act | Lead: [MOCKUP] "Mau tanya menu, biji yang lagi ada, atau memastikan kami masih buka? Kabari saja." Plates: "WhatsApp 0856-9991-113" ([MOCKUP]), "Telepon 0856-9991-113" (listing), "Petunjuk Arah · Budaya 69" (listing) |
| Footer | Close | U20 plate mark, "Undertwenty Coffee Co", "Budaya 69, Condet, Kramat Jati", "Setiap hari 10.00–01.00, Sabtu–Minggu sampai 02.00", draft note "Draf situs untuk ditinjau pemilik. Beberapa detail masih contoh." |

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: customer photos (photo-1/2/3), invented reviews,
names, awards or years in business, and any "roastery" or "best in Jakarta" claim.

## Open questions for the owner
Facts to re-check (the listing's reviews are 3–9 years old):
1. Is the street address "Jl. Budaya No. 69"?
2. Are the hours still Senin–Jumat 10.00–01.00 and Sabtu–Minggu 10.00–02.00?
3. Is manual brew still on the menu?
4. Is the Free WiFi still on offer?

[MOCKUP] items:
5. Can customers message 0856-9991-113 on WhatsApp?
6. Is "Kecil dari luar, serius soal kopi di dalam" a good line for the top of the page?
7. Is "Ngopi sampai larut" (late-night coffee and talk, close to home) a fair way to describe you?
8. Is the layered iced milk coffee in your photo called "Es Kopi Susu U20", at Rp 20rb?
9. Is the Green Tea Latte still on the menu under that name, hot and iced, at Rp 25rb?
10. Is manual brew (V60, Japanese iced, syphon) with rotating Gayo, Toraja and Java beans at Rp 25rb–35rb right?
11. Should the espresso-over-condensed-milk drink appear as "Espresso + susu kental manis", with no price shown?
12. Are espresso Rp 15rb, americano Rp 18rb and cappuccino / latte Rp 23rb–25rb right?
13. Do you sell cold drip by the bottle at Rp 30rb?
14. Are roti bakar, kentang goreng, pisang goreng and mie instan on the menu at Rp 15rb–25rb?
15. Are chocolate, red velvet and tea on the menu at Rp 20rb–25rb?
16. Are the four brew-method descriptions (pour over, syphon, cold drip, French press) fine as written?
17. Are the menu and contact intro lines fine as written?
18. Is a casual tone right for you ("kamu" rather than "Anda" wherever the page speaks to customers)?
19. Do you have a larger photo of the shopfront we could use instead of the Google one?
