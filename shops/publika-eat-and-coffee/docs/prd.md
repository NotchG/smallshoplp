# PRD: Publika Eat and Coffee mockup site

## Goal
A one-page mockup that makes Publika Eat and Coffee's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
Publika Eat and Coffee is a big, airy all-day cafe-restaurant at Jalan Jakarta Garden City
Blok B2 No. 11, Cakung Timur, Cakung, Jakarta Timur (listing). It serves a wide menu of
Indonesian food, coffee and tea (reviews 1, 3, 5) at a moderate price level (listing), open
Mon–Fri 09:00–21:30 and Sat–Sun 07:00–21:30 (hours), rated 4.5 from 1,467 Google reviews (listing).
Friends and families come in groups of any size and the staff rearrange tables to fit them
(review 1); people work there on the stable wifi with quick service (review 2); others come for
casual lunches, dinners and group meetings (review 3), or stop by when they have an appointment
in Cakung (review 1). People praise the tiramisu (strong coffee, good mascarpone, not too sweet;
review 2), the wagyu fried rice and pisang goreng with tea (review 5), a succulent, generous tuna
dish (review 4) and neat plating (review 1). The hall has high ceilings with dark steel and timber
beams, hanging ferns, copper and globe pendants, tan leather banquettes and rattan chairs (photos).
The business has uploaded two photos of its own: the counter under copper pendants, and a banana
dessert (owner-1, owner-2).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| JGC / Cakung local or office worker on the way | check it's open and how to get there | see today's hours and the "Petunjuk Arah" button in the first screen on a phone |
| Organiser of a family or friends group | know there's room for a group and what to eat | see that tables are put together for groups, the signature dishes, and a way to get in touch for a group |
| Remote worker | know if it's a good place to work | find "Kerja": stable wifi, quick service, opens 09.00 on weekdays |
| Visitor with an appointment in Cakung | find the exact place and recognise it on arrival | see the real counter (owner photo), read the full address, see the map, open directions |
| Weekend early riser | know if it opens early | see "dari 07.00 di akhir pekan" in the hero and in "Datang untuk" |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. Lihat menu (jump to "Menu andalan")
3. WhatsApp rombongan, [MOCKUP]: no number is listed, so the button shows "Nomor menyusul" until the owner gives one.
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`. Shop name stays "Publika Eat and Coffee". The reader is
addressed as "kamu" / "kalian" ([MOCKUP] register).

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Banner (starter) | Mark the draft | Draft notice in Indonesian (CLAUDE.md rule 7; brief) |
| Header | Name and jump links | Wordmark "Publika Eat and Coffee" (listing); links Menu · Datang untuk · Lokasi |
| Hero | Recognise the place, see it's open, get directions | H1 and lead (brief, hours); "Petunjuk Arah" (listing place ID); "Lihat menu"; today's hours (hours); owner-1 photo of the counter, framed, with caption (owner photo, photos.json) |
| Menu andalan | Show what to eat, with names and prices | Six items: Nasi Goreng Wagyu (review 5; name and Rp 85rb [MOCKUP]), Tuna Bakar Sambal Matah (review 4; name [MOCKUP]), Kopi & teh (reviews 1, 5; mulai Rp 30rb [MOCKUP]), Pisang Goreng & Teh (review 5; Rp 28rb [MOCKUP]), Tiramisu (review 2), Banana Split (photos; name [MOCKUP]). Five dish illustrations [MOCKUP]; Banana Split shown with owner-2 photo. Intro "mulai" prices [MOCKUP] |
| Datang untuk… | The three ways people use the hall, by time of day | Pagi akhir pekan (hours; breakfast dishes [MOCKUP]), Kerja (hours, review 2), Rombongan & meeting (hours, reviews 1, 3, photos). Illustrations [MOCKUP] |
| Kata mereka | Social proof without quoting | Rating and count (listing); four paraphrases of reviews 1, 2, 4, 5: no names, no quote marks, no stars |
| Kunjungi kami | Find it and check hours | Address (listing); hours with today's row marked (hours); Google Maps embed; "Petunjuk Arah" |
| Hubungi kami | Close: come back with your group | Heading and body [MOCKUP]; "WhatsApp rombongan" [MOCKUP, no number]; "Petunjuk Arah"; long-table illustration with the signature moment [MOCKUP visual]; caption about tables put together (review 1) |
| Footer | Credits and draft note | Name, short address (listing), draft note, data and photo source |

### Copy deck (use as written; items marked [M] carry `mockup: true`)
- **Banner:** "Draf mockup untuk Publika Eat and Coffee. Beberapa detail masih contoh."
- **Meta title:** "Publika Eat and Coffee · Makan dan ngopi di Jakarta Garden City". **Description:** "Kafe dan restoran di Jakarta Garden City, Cakung. Masakan Indonesia, kopi dan teh. Buka setiap hari, dari 07.00 di akhir pekan."
- **Header:** wordmark "Publika Eat and Coffee"; links "Menu" (`#menu`), "Datang untuk" (`#datang`), "Lokasi" (`#lokasi`).
- **Hero:** H1 "Makan dan ngopi di Jakarta Garden City". Lead "Buka setiap hari, dari 07.00 di akhir pekan." Button "Petunjuk Arah". Link "Lihat menu". Today line "Hari ini, Kamis: 09.00–21.30" (computed in Asia/Jakarta); static fallback "Sen–Jum 09.00–21.30 · Sab–Min 07.00–21.30".
  Photo alt: "Bar dan kasir Publika Eat and Coffee di siang hari, di bawah rangka kayu berpola sarang lebah dan tiga lampu gantung tembaga." Caption: "Bar dan kasir kami, di bawah lampu tembaga. Foto: Publika."
- **Menu andalan:** H2 "Menu andalan". Intro "Hidangan utama mulai Rp 55rb, kopi mulai Rp 30rb." [M]

  | Label | Name | Note | Price | Visual |
  |---|---|---|---|---|
  | Makanan Indonesia | Nasi Goreng Wagyu [M] | "Nasi goreng dengan wagyu. Nasi dan dagingnya sama-sama dipuji." | Rp 85rb [M] | illustration [M] |
  | Makanan Indonesia | Tuna Bakar Sambal Matah [M] | "Tuna yang juicy, porsinya murah hati untuk harganya." | none | illustration [M] |
  | Minuman | Kopi & teh | "Banyak pilihan kopi dan teh." | mulai Rp 30rb [M] | illustration [M] |
  | Camilan | Pisang Goreng & Teh | "Pisang goreng, ditemani teh." | Rp 28rb [M] | illustration [M] |
  | Pencuci mulut | Tiramisu | "Kopi yang kuat dan mascarpone yang enak, dengan manis yang pas." | none | illustration [M] |
  | Pencuci mulut | Banana Split [M] | "Pisang, tiga scoop es krim, saus cokelat dan crumble." | none | owner-2 photo |

  Banana Split photo alt: "Pisang dibelah dua dengan tiga scoop es krim cokelat dan stroberi, saus cokelat, crumble dan daun mint, di piring hitam."
- **Datang untuk…:** H2 "Datang untuk…"
  - "Sab–Min · dari 07.00" / H3 "Pagi akhir pekan" / "Sabtu dan Minggu kami sudah buka jam 07.00." + [M] "Mampir sarapan dulu: nasi uduk, bubur ayam, atau telur dan roti panggang."
  - "Sen–Jum · dari 09.00" / H3 "Kerja" / "Wifi stabil dan pelayanan cepat, jadi kamu bisa kerja sambil ngopi."
  - "Setiap hari · sampai 21.30" / H3 "Rombongan & meeting" / "Ruangnya luas dan plafonnya tinggi. Datang berdua atau ramai-ramai, mejanya kami atur sesuai jumlah kalian. Cocok untuk makan siang, makan malam atau meeting."
- **Kata mereka:** H2 "Kata mereka". "4,5 dari 5 · 1.467 ulasan di Google". Caption "Diringkas dari ulasan Google, bukan kutipan langsung."
  - Rombongan (review 1): "Cocok untuk kumpul keluarga atau teman, berapa pun jumlahnya, karena stafnya mau mengatur ulang meja. Masakan Indonesianya enak dan tampilannya rapi."
  - Kerja & tiramisu (review 2): "Jadi tempat kerja rutin berkat wifi yang stabil dan pelayanan yang cepat. Tiramisu-nya dipuji: kopinya terasa kuat dan manisnya pas."
  - Tuna (review 4): "Hidangan tunanya dipuji juicy, dengan harga yang wajar untuk porsi dan lokasinya."
  - Nasi goreng wagyu (review 5): "Pilihan makanan, kopi dan tehnya banyak. Nasi goreng wagyu, pisang goreng dan tehnya sama-sama dipuji."
- **Kunjungi kami:** H2 "Kunjungi kami". "Jalan Jakarta Garden City Blok B2 No. 11, Cakung Timur, Cakung, Jakarta Timur 13910". Hours caption "Jam buka". Rows "Senin–Jumat 09.00–21.30", "Sabtu–Minggu 07.00–21.30", marker "Hari ini". Button "Petunjuk Arah". Map title "Peta lokasi Publika Eat and Coffee". Map fallback link under the frame: "Buka di Google Maps".
- **Hubungi kami:** H2 "Ketemu di Publika, ya?" [M]. Body [M]: "Mau datang rombongan atau pakai tempat untuk meeting? Kabari kami dulu lewat WhatsApp, nanti mejanya kami siapkan. Paket menu untuk meeting juga bisa diatur." Buttons "WhatsApp rombongan" [M] with small "Nomor menyusul" under it, and "Petunjuk Arah". Long-table caption "Datang rombongan? Mejanya kami satukan." (review 1). Illustration label [M]: "Ilustrasi: enam meja kecil disatukan menjadi satu meja panjang, dengan nasi goreng, tuna, pisang goreng, tiramisu, kopi dan teh di atasnya, di bawah tiga lampu tembaga."
- **Footer:** "Publika Eat and Coffee · Jakarta Garden City Blok B2 No. 11, Cakung, Jakarta Timur". "Draf mockup untuk pemilik. Jam buka dan ulasan dari Google Maps, foto dari Publika." with "Google Maps" linking to the listing.
- **Links:** directions `https://www.google.com/maps/dir/?api=1&destination=Publika%20Eat%20and%20Coffee&destination_place_id=ChIJbVbSLwCLaS4RUJwfviY1mKQ`; map embed `https://www.google.com/maps?q=Publika%20Eat%20and%20Coffee%2C%20Jakarta%20Garden%20City%20Blok%20B2%20No.%2011&output=embed`; listing = `googleMapsUri` from raw.json.

Not used on purpose: customer photos (photo-1..3 are reference only, CLAUDE.md rule 5); a phone number
(not listed); the notes about the air conditioning and noise (review notes, not pitch copy).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
1. Is the wagyu fried rice called "Nasi Goreng Wagyu" on your menu?
2. Is the tuna dish called "Tuna Bakar Sambal Matah"? (If not, what is its name?)
3. Is the banana dessert with three scoops called "Banana Split"?
4. Are these example prices close: kopi from Rp 30rb, pisang goreng Rp 28rb, mains from Rp 55rb, Nasi Goreng Wagyu Rp 85rb?
5. Are the tiramisu, wagyu fried rice, pisang goreng, the tuna dish and the banana dessert all still on the menu? (Some reviews are 3–4 years old.)
6. Do you serve breakfast from 07.00 on weekends, with dishes like nasi uduk, bubur ayam, eggs on toast?
7. Can groups let you know ahead, and do you offer set menus for meetings?
8. Do you have a WhatsApp number for group bookings we can show? (Please send it.)
9. Is the casual "kamu" voice right for you, rather than the more formal "Anda"?
10. Does "Ketemu di Publika, ya?" (the easy "let's meet at Publika" spot) sound like you?
11. May we keep using your two Google photos (the counter, the banana dessert) on the site?
12. Are the drawings of the other five dishes and of the hall fine for now, and would you send your own photos to replace them?
