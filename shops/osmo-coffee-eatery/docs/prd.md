# PRD: OSMO Coffee & Eatery mockup site

## Goal
A one-page mockup that makes OSMO Coffee & Eatery's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
OSMO Coffee & Eatery is a large, polished two-level cafe-eatery on Jl. Mpok Nori in Bambu Apus,
Cipayung (Jakarta Timur). It is open every day from 08:00 to 23:00, near a toll gate, and rated 4.9
from 3,033 Google reviews. Downstairs is a grey-microcement coffee bar with a lit pastry case.
Upstairs is a tall A-frame room with timber rafters, a glass wall onto trees, plants, and a large
outdoor area that guests like in the late afternoon. People come for:
- takeaway coffee before the office;
- working from the cafe, thanks to the Wi-Fi and plenty of power outlets;
- hanging out with friends and groups sharing several dishes;
- nobar during big football matches.
Guests praise food that "tastes right" (creamy mushroom pasta, sweet and savoury French toast, toast),
fast and attentive staff who adjust dishes on request, a clean and comfortable space, practical extras
(parking front and back, a musholla, clean restrooms upstairs) and good coffee.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Commuter heading to the office via the toll | check it's open at 08:00 and how to get there | see "Buka hari ini 08.00–23.00" and Petunjuk Arah in the first screen |
| Remote worker (WFC) | know if they can work there | find Wi-Fi, colokan, space and parking in "Kerja, nongkrong, nobar" |
| Friends or groups | see the food and where to sit | see real dishes with prices, the upstairs outdoor area, and how to reach OSMO for a group |
| Football fan | know if OSMO shows matches | read "nobar" and message on WhatsApp |
| Families from nearby housing on weekends `[MOCKUP]` | check parking and food | see parkir depan & belakang and the menu |
| The owner (pitch) | recognise their shop | see their wordmark, their own photo, their tray liner print, their dishes |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp  3. Telepon
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
Page language: Bahasa Indonesia, `lang="id"`, register "kamu" `[MOCKUP]`. Order refined from brief.md
(praise moved up next to the food; see design brief §7).

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Honesty | "Ini contoh tampilan, belum situs resmi OSMO Coffee & Eatery. Beberapa detail masih perlu dikonfirmasi." (rule 7) |
| Hero | Recognition + first action | h1 "OSMO" / "Coffee & Eatery" (listing). Pitch "Kopi, makan, kerja, dan nongkrong di Bambu Apus." `[MOCKUP]`. "Jl. Mpok Nori No.10, Bambu Apus, Cipayung" (listing). Buttons "Petunjuk Arah" → https://maps.google.com/?cid=14689524655505368407 (listing); "WhatsApp" → https://wa.me/6281110113993 `[MOCKUP]` (that the number takes WhatsApp). Image: owner-1.jpg hero crop (owner). Day band: "Buka hari ini" "08.00–23.00" (hours); live line "Sekarang HH.MM · buka sampai 23.00" / "· buka jam 08.00" / "· sudah tutup, buka lagi besok 08.00", worked out from the listed hours. Bean marker glyph `[MOCKUP]` (stand-in for OSMO's logo). |
| Menu andalan | Show the food | h2 "Menu andalan". Lead "Rice bowl, pasta, French toast, dan camilan buat dibagi ramai-ramai." (reviews 1, 2; photos). Three bowls (owner-1.jpg): "Rice Bowl Chicken Salted Egg" `[MOCKUP name]`, "Ayam goreng dengan saus kuning creamy, sayur krispi, dan nasi." (photos); "Rice Bowl Cumi Sambal" `[MOCKUP name + desc]`, "Cumi bumbu sambal, telur dadar iris, sayur krispi."; "Rice Bowl Beef Sambal" `[MOCKUP name + desc]`, "Daging bumbu sambal, telur dadar iris, sayur krispi."; each "Rp 45rb" `[MOCKUP]`. h3 "Juga dari dapur": Creamy Mushroom Pasta · Rp 55rb `[MOCKUP price]`, "Pasta jamur yang creamy." (review 1); French Toast · Rp 42rb `[MOCKUP price]`, "Ada dua: manis, atau gurih dengan daging sapi." (review 2); "Toast es krim" `[MOCKUP name]`, "Roti tebal panggang dengan es krim, crumble, dan saus karamel." (photos), no price; Wings & fries · Rp 48rb `[MOCKUP price]`, "Dengan jamur enoki goreng krispi." (photos). |
| Kata mereka | Social proof | h2 "Kata mereka". "4,9 di Google, dari 3.033 ulasan" (listing). Lead "Kata tamu, kafe senyaman ini jarang ada di Jakarta Timur." (review 2, paraphrased). Four themes, paraphrased, no names: "Rasanya pas": bumbunya pas, tidak berlebihan, dan semua yang dicoba enak (reviews 1, 3). "Cepat dan perhatian": makanan cepat datang; staf mau menyesuaikan pesanan, menawarkan memotret, dan sigap merapikan meja (reviews 1, 2, 3). "Enak buat kerja": luas, bersih, nyaman, ada Wi-Fi dan banyak colokan (reviews 2, 4, 5). "Kopi pagi dari jam 8": kopinya disebut salah satu yang terbaik di sekitar sini, pas dibawa sebelum ke kantor (reviews 4, 5). Small note "Dirangkum dari ulasan Google." |
| Dari bar kopi | Drinks, morning offer | h2 "Dari bar kopi". Lead "Kopi pagi dari jam 8, bisa dibawa ke kantor." (hours; review 4). h3 "Kopi": Kopi Susu Aren · Rp 28rb, Americano · Rp 25rb, Cappuccino, Caffè Latte, Manual Brew (V60) — all `[MOCKUP]`. h3 "Non-kopi": Matcha Latte · Rp 32rb, Lychee Tea, Chocolate — all `[MOCKUP]` (iced matcha latte is seen in photos). "Sarapan dari jam 8: toast, French toast, dan kopi." `[MOCKUP]`. "Di etalase: croissant dan pastry ala Danish." (photos). Card: h3 "Canned series", "Aren Latte dalam kaleng, buat dibawa pulang." (photos), "Rp 30rb" `[MOCKUP]`, can illustration `[MOCKUP stand-in]`. |
| Kerja, nongkrong, nobar | The space and extras | h2 "Kerja, nongkrong, nobar". Lead "Dua lantai: bar kopi di bawah, ruang beratap tinggi dan area outdoor di atas." (photos; review 5). "Kerja": Wi-Fi, banyak colokan, ruang yang luas dan bersih (reviews 2, 4). "Nongkrong": area outdoor di lantai atas, paling enak sore hari (review 5). "Nobar": nonton bareng pertandingan besar, seperti saat Piala Dunia (review 3). Facilities: Parkir depan & belakang · Musholla · Toilet bersih di lantai atas · Wi-Fi · Banyak colokan (review 2). A-frame line drawing (based on photos; decorative). |
| Kunjungi kami | Find it | h2 "Kunjungi kami". "Jl. Mpok Nori No.10 Blok F, Bambu Apus, Cipayung, Jakarta Timur 13890" (listing). "Dekat gerbang tol, gampang mampir sebelum ke kantor." (review 4). "Rute dari gerbang tol: menunggu info dari OSMO." `[MOCKUP]` placeholder. "Buka setiap hari", Senin–Minggu 08.00–23.00, seven rows (hours). Button Petunjuk Arah. Google Maps embed. |
| Hubungi kami | Contact | h2 "Hubungi kami". WhatsApp 0811-1011-3993 `[MOCKUP]` (WhatsApp works). Telepon 0811-1011-3993 → tel:+6281110113993 (listing). "Instagram: menunggu akun dari OSMO" `[MOCKUP]` placeholder, not a link. "Datang rombongan atau mau nobar? Kabari kami lewat WhatsApp." `[MOCKUP]`. |
| Footer | Close | "OSMO" sign wordmark; "OSMO Coffee & Eatery · Bambu Apus, Cipayung, Jakarta Timur"; "Ini contoh tampilan, belum situs resmi OSMO Coffee & Eatery." |

Copy limits (brief notes): never "Wi-Fi kencang" or video-call claims, never "tenang/sepi", never "porsi besar".
Dish names stay as the shop writes them.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
1. Apakah nama ketiga rice bowl di foto Anda benar: "Rice Bowl Chicken Salted Egg", "Rice Bowl Cumi Sambal", "Rice Bowl Beef Sambal"? (Jika tidak, mohon nama aslinya.)
2. Apakah harga contoh ini mendekati harga asli: Kopi Susu Aren Rp 28rb, Americano Rp 25rb, Matcha Latte Rp 32rb, rice bowl Rp 45rb, Creamy Mushroom Pasta Rp 55rb, French Toast Rp 42rb, Wings & fries Rp 48rb, Canned Aren Latte Rp 30rb?
3. Apakah daftar kopi ini ada di menu: Kopi Susu Aren, Americano, Cappuccino, Caffè Latte, Manual Brew (V60)?
4. Apakah minuman non-kopi ini ada di menu: Matcha Latte, Lychee Tea, Chocolate?
5. Apakah ada menu sarapan mulai jam 08.00 (toast, French toast, kopi)?
6. Roti tebal dengan es krim, crumble, dan karamel: boleh kami sebut "Toast es krim"? (Atau apa nama di menunya?)
7. Kalimat pembuka "Kopi, makan, kerja, dan nongkrong di Bambu Apus." sudah pas?
8. Apakah nomor 0811-1011-3993 bisa dihubungi lewat WhatsApp?
9. Apakah OSMO punya akun Instagram yang boleh kami tautkan? (Mohon nama akunnya.)
10. Apakah tamu bisa reservasi untuk rombongan dan malam nobar lewat WhatsApp?
11. Boleh kami tulis nama gerbang tol terdekat dan satu petunjuk arah singkat? (Gerbang tol yang mana?)
12. Sapaan "kamu" sudah cocok, atau lebih suka "Anda"?
13. Boleh kirim file logo biji kopi OSMO? Tanda biji kopi dan pola kertas alas nampan di situs ini masih buatan kami.
14. Ilustrasi kaleng Canned series Aren Latte boleh dipakai sementara, atau ada foto produknya?
15. Apakah banyak keluarga dari perumahan sekitar yang datang di akhir pekan? (Untuk arah konten; tidak tampil di halaman.)
16. Apakah OSMO punya cabang lain yang perlu disebut?
