# PRD: Sedap Wangi mockup site

## Goal
A one-page mockup that makes Sedap Wangi's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner; `lang="id"`.
Menu and product names stay exactly as the shop writes them (Sotomie, Mie Bangka Jumbo,
Es Markisa Kebon Sendiri, Kos Nanas, Bolen Pisang Keju, Abon Cheese, Nasi Timbel Komplit).

## The shop in one paragraph
Roti & Kue Sedap Wangi, "Sejak 1979" on its own logo, is a long-running bakery and diner in
one on Jl. Cipinang Muara I, Jakarta Timur: homestyle cakes, breads and pastries in glass
cases at the front, and a kitchen serving sotomie, mie bangka, soto and Indonesian dishes.
Reviewers call it a legendary cake shop they have known since childhood, with old-school
("jadul") cakes that taste different from anywhere else: lemon cake, strawberry cake, cheese
brownie, pandan chiffon made with real pandan, and lapis kopi. Bread is homemade and fresh
from the oven, it takes custom birthday and wedding cakes, sells nasi box from Rp 30.000, runs
bread bundles and discounts, and has good parking for cars and motorbikes. Open every day;
4.5 on Google from 942 reviews.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local on the way past | know if it's open today | see today's hours and "Petunjuk Arah" in the first phone screen |
| Long-time fan / family | buy the cakes they grew up with | find the favourite cakes by name in the first scroll |
| Family planning a birthday or wedding | order a custom cake | reach a WhatsApp order button with what to expect (lead time, from-price) |
| Office or event organiser | order nasi box | see "mulai Rp 30.000" and a direct order button |
| Lunch or dinner crowd | check the kitchen menu and prices | read the full kitchen menu as text, prices as printed |
| Driver | know if parking is easy | read "parkir untuk mobil dan motor" next to the address |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp 0822 4999 6668 [MOCKUP]  3. Telepon (021) 861 6311
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | mark the mockup | "Draf mockup untuk Sedap Wangi. Beberapa detail masih contoh sampai Anda konfirmasi." (CLAUDE.md rule 7) |
| Hero | recognition + today's hours + directions | Logo lockup: "Roti & Kue" / **Sedap Wangi** (h1) / "Sejak 1979" (listing; logo on owner-1.jpg). Line: "Roti dan kue rumahan, plus sotomie dan masakan Indonesia." (description; reviews 1, 3, 5). "Buka hari ini 09.00–19.00", computed for today in Asia/Jakarta; no-JS fallback "Buka setiap hari" (hours). Buttons: Petunjuk Arah (listing), WhatsApp [MOCKUP]. Links: "Telepon (021) 861 6311" (listing), "Lihat menu dapur" (#dapur). Illustrated maroon cake box holding a whole lemon cake, tag "Lemon Cake · Favorit pelanggan" (reviews 3, 4; box from photos). Illustration style is a placeholder [MOCKUP] |
| Etalase kami (#kue) | the bakery side: what to buy | Intro: "Roti dan kue rumahan, segar dari oven. Rasanya jadul, dan memang beda." (reviews 3, 4). **Kue favorit pelanggan**, five illustrated cards: Lemon Cake, "Paling enak, kata pelanggan." (reviews 3, 4), Rp 125.000 utuh [MOCKUP]; Pandan Chiffon, "Pakai pandan asli." (review 4), Rp 85.000 [MOCKUP]; Lapis Kopi, "Kesukaan pelanggan." (review 1), Rp 18.000/potong [MOCKUP]; Cheese Brownie, "Rekomendasi untuk pencinta kue jadul." (review 4), no price; Strawberry Cake, "Sama favoritnya dengan lemon cake." (review 3), no price. Illustrations stand in for photos [MOCKUP]. **Juga di etalase**, tags with prices as on the case: Abon Cheese Rp 10.500, Bolen Pisang Keju Rp 10.000, Bolen Rp 9.000, Kos Nanas Rp 7.500, Kos Keju Rp 7.500, Kos Strawberry Rp 7.500 (photos, Nov 2025), caption "Harga di etalase, November 2025. Bisa berubah." Line: "Ada juga potongan harga dan paket bundling, kebanyakan roti." (review 1). Line [MOCKUP]: "Juga ada roti tawar, roti sobek, lapis legit, bolu gulung, dan kue kering Lebaran per toples: nastar, kastengel, putri salju." |
| Dapur Sedap Wangi (#dapur) | the kitchen side: menu and prices | Line [MOCKUP]: "Mampir makan sotomie, pulang bawa lemon cake." Sub: "Mie, soto, dan masakan Indonesia. Harga dalam rupiah, sesuai menu toko." (owner-1.jpg; reviews 1, 3, 5). Eight dish tiles cropped from owner-1.jpg with name + price: Sotomie 30.000, Mie Bangka Jumbo 20.000, Mie Chilli Oil 18.000, Soto Betawi + Nasi 55.000, Gado-Gado Mede 25.000, Nasi Kuning Manado 20.000, Ayam Kalasan Bakar 26.000, Nasi Timbel Komplit 45.000. Full menu as text: see "Kitchen menu" below |
| Pesan untuk acara (#pesan) | custom cakes + nasi box orders | Heading and intro [MOCKUP]: "Untuk ulang tahun, pernikahan, dan acara kantor." Card 1 **Kue ulang tahun & pernikahan**: "Dibuat sesuai pesanan Anda." (review 4); "Mulai Rp 250.000" [MOCKUP]; "Pesan paling lambat 3 hari sebelumnya" [MOCKUP]; "Pesan sekarang!" (owner-1.jpg); button "Pesan lewat WhatsApp" [MOCKUP]. Card 2 **Nasi box**: "Harga mulai Rp 30.000." and "Pesan sekarang!" (owner-1.jpg); "Untuk kantor dan acara." (brief audience); button "Pesan lewat WhatsApp" [MOCKUP]; "atau telepon (021) 861 6311" (owner-1.jpg) |
| Kata pelanggan (#ulasan) | proof, paraphrased | "4,5 dari 5 · 942 ulasan di Google" (listing). Six paraphrases, no quotes, no names: "Toko kue legendaris; rotinya buatan sendiri, segar dari oven." (review 3) · "Langganan sejak kecil. Kue jadulnya punya rasa sendiri." (review 4) · "Lemon cake dan cheese brownie wajib dicoba; pandan chiffon-nya pakai pandan asli." (review 4) · "Sotomie-nya enak sekali, mie dan masakan Indonesianya juga." (reviews 1, 3, 5) · "Parkirnya nyaman untuk mobil dan motor." (review 3) · "Ada diskon dan paket roti." (review 1). Caption: "Diringkas dari ulasan Google." |
| Kunjungi kami (#lokasi) | find it, when, how to reach | Address "Jl. Cipinang Muara I No. 20, Pondok Bambu, Duren Sawit, Jakarta Timur 13430" (listing; area to confirm). Hours: Senin–Jumat 09.00–19.00 · Sabtu 08.00–19.30 · Minggu 08.00–19.00 · "Buka setiap hari" (hours); today's row marked "hari ini". "Parkir untuk mobil dan motor." (review 3). Buttons: Petunjuk Arah, WhatsApp [MOCKUP], Telepon. Google Maps embed |
| Footer | close + contact | Small logo lockup, address, (021) 861 6311, 0822 4999 6668 (owner-1.jpg), "Draf mockup, belum dipublikasikan." |

Links: directions `https://www.google.com/maps/dir/?api=1&destination=Sedap+Wangi+Bakery&destination_place_id=ChIJdTOcWmjzaS4RzdlubaWs7S4`;
phone `tel:+62218616311`; WhatsApp `https://wa.me/6282249996668` with a prefilled message [MOCKUP]
("Halo Sedap Wangi, saya mau tanya pesanan kue." / "... pesanan nasi box.").
All headings and intro lines written for this page that are not facts above carry `mockup: true`.

### Kitchen menu (transcribed from owner-1.jpg, the owner's own menu; prices as printed, date unknown)
The brief directs the menu to be set as real text from this image. Rows are name + price in rupiah.
- **Mie Spesial**: Mie Spesial Polos 16.000 (tambah: Ayam +6.000, Jamur +5.000, Pangsit Ayam (2) +6.000, Baso Sapi (2) +6.000) · Mie Goreng Ayam 35.000 · Baso Super 25.000 · Mie Kangkung Ayam 25.000 · Pangsit Goreng 30.000 · Pangsit Rebus Kuah 27.000 · note "*Mie dapat diganti dengan bihun."
- **Soto**: Sotomie Plus 35.000 · Sotomie 30.000 · Sotomie Baso Plus 40.000 · Sotomie Baso 32.000 · Soto Ayam 20.000 · Mie Soto Ayam 25.000 · Soto Betawi + Nasi 55.000
- **Nasi**: Nasi Goreng 35.000 · Gado-Gado Mede Lontong 30.000 · Gado-Gado Mede 25.000 · Ketoprak Lontong Spesial 35.000 · Ketoprak Lontong 25.000 · Nasi Kuning Manado 20.000
- **Mie Bangka**: Mie Bangka Jumbo 20.000 · Mie Bangka Reguler 15.000 · Mie Chilli Oil 18.000 · Mie Chilli Oil Jumbo 22.000 · Pangsit Chilli Oil 15.000
- **Ayam** (the menu prints two Ayam blocks; merge into one): Ayam Kalasan Bakar 26.000 · Ayam Kalasan Frozen ½ ekor 50.000 · Ayam Kalasan Frozen 1 ekor 90.000 · Nasi Timbel Komplit 45.000 · Ayam Gulai Paket 35.000 · Ayam Gulai ½ ekor 55.000 · Ayam Gulai 1 ekor 100.000 · Sate Ayam Lontong 30.000
- **Tambahan**: Nasi Putih 7.000 · Lontong 5.000 · Risol Sotomie isi 3 10.000 · Gulai Kikil 30.000 · Gulai Ati Ampela 30.000 · Gulai Daun Singkong 22.500 · Extra Sambal Chilli Oil 5.000 · Extra Sambal Gulai 5.000 · Sayur Asem 10.000 · Telur 5.000
- **Minuman**: Es Jeruk Asli 15.000 · Es Markisa Kebon Sendiri 10.000 · Es Kacang Merah Manado 25.000 · Es Cendol 15.000 · Es Lemon Tea 15.000 · Es Teh 7.000 · Teh Panas 5.000 · Teh Botol 8.000 · Teh Kotak 7.000 · Air Mineral 7.000

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: any mention of other outlets (review 2);
the page is about this address only. No "same taste as always" or "spotless" claims.

## Open questions for the owner
Every [MOCKUP] item as a yes/no question. Becomes `owner-checklist.md`.
1. Do you take WhatsApp orders on 0822 4999 6668?
2. Is it okay that the WhatsApp buttons open with a ready-made message ("Halo Sedap Wangi, saya mau tanya pesanan kue.")?
3. Should the site speak to customers as "Anda" (rather than "kamu")?
4. Can we use the line "Mampir makan sotomie, pulang bawa lemon cake." for the kitchen section?
5. Is a whole lemon cake Rp 125.000?
6. Is pandan chiffon Rp 85.000?
7. Is lapis kopi Rp 18.000 per slice?
8. Do custom birthday cakes start at Rp 250.000?
9. Do custom cakes need ordering at least 3 days ahead?
10. Do you sell kue kering for Lebaran by the jar (nastar, kastengel, putri salju)?
11. Do you sell lapis legit and bolu gulung?
12. Do you sell roti tawar and roti sobek?
13. Are the cake drawings okay for now, and can you send photos of your cakes and display case to replace them?
14. Are the section headings and short intro lines okay in your voice ("Etalase kami", "Pesan untuk acara", "Untuk ulang tahun, pernikahan, dan acara kantor")?

Confirmations (facts from the listing or photos that may be out of date):
15. Should the address say Pondok Bambu, Duren Sawit (the listing also names Cipinang Muara, Jatinegara)?
16. Are the kitchen menu prices still current?
17. Are the display-case prices (Abon Cheese Rp 10.500, Bolen Pisang Keju Rp 10.000, Bolen Rp 9.000, Kos Rp 7.500) still current?
18. Is nasi box still from Rp 30.000?
