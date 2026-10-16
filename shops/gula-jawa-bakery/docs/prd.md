# PRD: Gula Jawa Bakery mockup site

## Goal
A one-page mockup that makes Gula Jawa Bakery's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (their own white
"Gula Jawa" neon script on the maroon wall above the slate-blue bench, with the abon gulung
first), and the checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia throughout (`lang="id"`), including buttons, hours and the draft
banner. Menu names stay exactly as the shop and reviewers use them, English ones included.

## The shop in one paragraph
Gula Jawa Bakery is a busy bakery at Jl. I Gusti Ngurah Rai No. 21 in Klender, Duren Sawit,
East Jakarta, near the railway (listing, review 3). The listing says it is open every day
07:00–21:00, with moderate prices and a 4.3 Google rating from 1,071 reviews. It went viral for its
abon gulung (abon roll, floss roll), which sells out fast (reviews 2, 3), and reviewers say the
laminated pastry is buttery, crisp outside, soft inside and big for the price (review 2). Bread and
buns are baked in an open kitchen you can watch (review 3). Reviewers also name tiramisu donut,
chocolate sourdough, cheese bread, srikaya bread (review 4), roti chicken karage, a cheesecake
brownie and cheesecake by the slice (review 1), and the display case holds round pastry-donuts with
colourful glazes and twisted laminated pastries (photos). Most people take away; the dine-in corner
is small (reviews 1, 2). The honest catch: on busy days trays empty by mid-morning and again by late
afternoon (reviews 2, 4, 5), so the page says plainly: come early.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Abon gulung chaser who saw it online (reviews 2, 3) | know it's worth the trip and when to come | see the abon gulung and "datang pagi" in the first two screens; get directions in one tap |
| [MOCKUP] Klender commuter on the railway side, early | check it's open from 07.00 and go | see "Buka hari ini 07.00–21.00" and "Petunjuk Arah" in the first screen on a phone |
| Local looking for an everyday bakery (review 4) | see what's baked besides the famous items | scan "Dari oven kami" by group, with the names they know |
| Someone who can't come early | avoid an empty tray | find WhatsApp and [MOCKUP] ask for abon gulung to be set aside |
| Someone planning to eat in (reviews 1, 2) | know if there is room to sit | read that seating is limited and most people take away |

## Primary actions
1. Petunjuk Arah (Google Maps directions to the listing's place ID)  2. WhatsApp / Telepon
0822-6184-2007 (WhatsApp on this number is [MOCKUP])  3. See the menu ("Dari oven kami").
The first screen shows actions 1 and 2 and today's hours without scrolling, on a phone (390×844).

## Sections and content
Copy below is the draft the builder puts in `content.ts`. Address the reader as "kamu" ([MOCKUP] register).

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Required mockup notice | "Draf: contoh situs untuk Gula Jawa Bakery. Belum resmi." (CLAUDE.md rule 7) |
| Hero | Recognition in 5 s; hours and actions | h1 "Gula Jawa" (neon script, as on the shop's sign, photos) + "Bakery"; "Klender, Jakarta Timur" (listing). Line: "Abon gulungnya viral. Datang pagi, sebelum habis." (reviews 2, 3). Support: "Roti dan bun dipanggang di dapur terbuka, dekat rel kereta di Klender." (review 3). Bench band: "Buka hari ini 07.00–21.00" (hours), address short "Jl. I Gusti Ngurah Rai No. 21, Klender" (listing), buttons "Petunjuk Arah", "WhatsApp" ([MOCKUP] WhatsApp). No listing photos. |
| Yang paling dicari | Lead with the two stars, honestly | Intro: "Dua alasan orang rela datang pagi-pagi ke Klender." Abon gulung (abon roll): "Bintangnya. Roti gulung berbalut abon yang bikin tempat ini viral, dan biasanya paling cepat habis." (reviews 2, 3) · [MOCKUP] Rp 22rb. Pastry: "Jangan sampai terlewat. Berlapis mentega, renyah di luar, lembut di dalam, dan besar untuk harganya." (review 2) · [MOCKUP] mulai Rp 25rb. Day bar: "07.00" … "21.00" (hours); "Paling lengkap" over 07.00–10.00 ([MOCKUP] end time, from review 2's "almost out by 10"); "Makin sore, makin sedikit pilihan." (reviews 2, 4). Closing line: "Datang pagi, sebelum abon gulungnya habis." (brief tone) |
| Dari oven kami | What else is baked | Intro: "Yang laris cepat habis, jadi tidak semuanya ada setiap saat." (reviews 2, 4, 5). **Roti manis & asin** ([MOCKUP] mulai Rp 12rb): Abon gulung ([MOCKUP] Rp 22rb), Cheese bread, Srikaya bread, Chocolate sourdough (review 4), Roti chicken karage (review 1), [MOCKUP] Roti gula jawa, [MOCKUP] Roti sobek, [MOCKUP] Roti cokelat keju, [MOCKUP] Roti pisang cokelat. **Pastry & donat** ([MOCKUP] mulai Rp 25rb): Pastry (review 2), Tiramisu donut (review 4), Pastry donat aneka glaze (photos; [MOCKUP] name). **Kue & cheesecake**: Cheesecake per potong ([MOCKUP] Rp 50rb; review 1 paid about that), Cheesecake brownie (review 1), [MOCKUP] Bolu gula jawa. Footnote: "[MOCKUP] Sesuai namanya: roti gula jawa, bolu gula jawa, dan kopi susu gula aren." and "Harga dan gambar masih contoh." |
| Dapur terbuka | The open kitchen as proof of freshness | "Roti dan bun dipanggang di depan mata." / "Dapurnya terbuka, jadi kamu bisa lihat roti dan bun dibuat dan keluar dari oven." (review 3). Tray illustration, no photo. |
| Kata mereka | Paraphrased social proof, honest | "4,3 di Google dari 1.071 ulasan" (listing). "Ringkasan ulasan Google, bukan kutipan langsung." Paraphrases, no names, no quote marks: (1) "Abon gulungnya memang sesuai reputasi, tapi cepat sekali habis." (reviews 2, 3) (2) "Pastry-nya jangan dilewatkan: renyah di luar, lembut di dalam, besar untuk harganya." (review 2) (3) "Dapurnya terbuka, roti dan bun kelihatan dipanggang langsung." (review 3) (4) "Staf menawarkan untuk menghangatkan roti dan kue sebelum disajikan." (review 1) (5) "Datang lebih awal kalau mau pilihan lengkap; sore hari banyak tray sudah kosong." (reviews 2, 4) |
| Kunjungi kami | Find it, know what to expect | "Jl. I Gusti Ngurah Rai No. 21, Klender, Duren Sawit, Jakarta Timur 13470" (listing); "Dekat rel kereta di Klender." (review 3); "Setiap hari 07.00–21.00" (hours); "Tempat duduknya sedikit. Kebanyakan pembeli bawa pulang." (reviews 1, 2); button "Petunjuk Arah"; Google Maps embed. |
| Hubungi kami (close + footer) | Contact, and a way round "habis" | [MOCKUP] "Takut kehabisan? Chat dulu lewat WhatsApp, minta abon gulungnya disisihkan." Number "0822-6184-2007" (listing), "Telepon atau WhatsApp" ([MOCKUP] WhatsApp). Buttons "Chat WhatsApp" ([MOCKUP], prefill "Halo Gula Jawa Bakery, abon gulungnya masih ada hari ini?" [MOCKUP]), "Telepon", "Petunjuk Arah". Footer: small static neon "Gula Jawa", name, address, hours, "Alamat dan jam buka dari Google Maps.", "Draf situs contoh, belum resmi." |

Links: directions `https://www.google.com/maps/dir/?api=1&destination=Gula%20Jawa%20Bakery&destination_place_id=ChIJbQOYNQD1aS4Rr02JTGw23B0`;
call `tel:+6282261842007`; WhatsApp `https://wa.me/6282261842007?text=…` ([MOCKUP]);
map embed `https://www.google.com/maps?q=Gula+Jawa+Bakery,+Jl.+I+Gusti+Ngurah+Rai+No.21,+Klender&output=embed`.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: live stock or "still available" status,
a pre-order system (WhatsApp link only), delivery-app links, review widgets, customer photos.

## Open questions for the owner
Every [MOCKUP] item, as a yes/no question (Bahasa Indonesia, for `owner-checklist.md`):

1. Jam buka: apakah sekarang buka setiap hari pukul 07.00–21.00? (Satu ulasan lama menyebut buka 08.00.)
2. Boleh nama ditulis "Gula Jawa Bakery" (bukan huruf kapital semua), dengan "Gula Jawa" bergaya neon seperti di toko?
3. Boleh gula jawa dijadikan benang merah halaman (nama, menu gula jawa, warna karamel)?
4. Gaya bahasa yang agak jahil soal cepat habis ("Datang pagi, sebelum abon gulungnya habis") cocok?
5. Menyapa pembaca dengan "kamu" (bukan "Anda") cocok?
6. Apakah banyak pembeli pagi adalah komuter dari arah rel/stasiun Klender?
7. Apakah ada roti gula jawa? Bolu gula jawa? Kopi susu gula aren? (jawab per item)
8. Apakah ada roti sobek? Roti cokelat keju? Roti pisang cokelat? (jawab per item)
9. Harga contoh sudah mendekati: roti manis mulai Rp 12rb, abon gulung Rp 22rb, pastry dan pastry donat mulai Rp 25rb, cheesecake per potong Rp 50rb?
10. Apakah nomor 0822-6184-2007 bisa dihubungi lewat WhatsApp?
11. Bisakah abon gulung dipesan atau disisihkan lewat WhatsApp?
12. Benarkah pilihan paling lengkap sampai sekitar pukul 10.00?
13. Pastry berlapis yang dipilin dengan isian gelap: namanya cukup "Pastry"? Donat pastry bulat dengan glaze warna-warni: namanya "Pastry donat"? (Kalau bukan, mohon nama aslinya.)
14. Tiramisu donut digambar dengan taburan cokelat bubuk di atasnya. Benar seperti itu?
15. Gambar produk masih ilustrasi. Bisa kirim foto sendiri (abon gulung, pastry, donat, cheesecake, dapur)?
16. Semua judul dan kalimat di situs masih draf. Sudah cocok dengan cara toko bicara?
