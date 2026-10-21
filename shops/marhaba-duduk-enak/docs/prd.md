# PRD: Marhaba! Coffee & Eatery mockup site

## Goal
A one-page mockup that makes Marhaba!'s owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
Marhaba! Coffee & Eatery ("duduk enak, makan enak" on its window) is a garden café-restaurant
at Jl. Pahlawan Revolusi No.55, Pondok Bambu, Duren Sawit, listed as a cafe, family restaurant
and coffee shop, rated 4.6 from 569 Google reviews, moderate prices, open every day 08:00–21:00
Mon–Thu and 08:00–23:00 Fri–Sun (listing; hours). Guests sit on a lawn with a fountain under
string lights, or in an olive-green glass pavilion with AC; there is a mushala with a separate
wudhu area for women, a kids' area, parking, and deliberately no background music (reviews 1, 2,
5; photos). Families, friends, nearby regulars and people working from the café come for the
cozy ambience, friendly staff, the Kopi Susu Kurma, Cappuccino, Caesar Salad and Umm Ali,
and a curry noodle bowl in a black bowl (reviews 1–5; photos). Regulars say it keeps
improving: better menu, no more disposable cutlery (reviews 3).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Parent planning a family meal (often a weekend dinner) | check today's hours and that it suits children | see today's hours and "Petunjuk Arah" in the first phone screen; reach Fasilitas (kids area, AC room, mushala) in one scroll |
| Muslim guest | know there is a mushala and wudhu space | read "Mushala" first on the Fasilitas board, with "tempat wudhu perempuan terpisah" right beside it |
| Someone working from the café | know it's comfortable, quiet, opens early | see "buka mulai 08.00", the coffee on the menu table, and the no-music note in Suasana |
| Nearby regular | glance at the menu, message the shop | see five dishes drawn and named with example prices; WhatsApp in hero and closing |
| Driver or rider | find the place and parking | tap Petunjuk Arah (Google Maps), see the landmark and "Tersedia parkir untuk mobil dan motor" |
| Group or event organiser ([MOCKUP] audience) | ask about booking | find the WhatsApp line about rombongan and acara keluarga in the closing |

## Primary actions
1. Petunjuk Arah (Google Maps link from raw.json `googleMapsUri`)  2. WhatsApp ([MOCKUP] wa.me/6281399385352)  3. Telepon (tel:+6281399385352)
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`, register "Anda" ([MOCKUP]). Copy strings below are the
ones to put in `content.ts`. Section copy written for the mockup is [MOCKUP].

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | mockup rule | "Draf mockup untuk Marhaba! Coffee & Eatery. Beberapa detail masih contoh sampai Anda konfirmasi." (project rule) |
| Header | orient | "Marhaba! Coffee & Eatery" (listing; photos); anchors "Menu", "Fasilitas", "Lokasi" |
| Hero (the window) | recognise the shop, act | Lettering "MARHABA!" (with "!") + underline rule + "duduk enak, makan enak" (photos). Descriptor "Coffee & Eatery · Pondok Bambu, Duren Sawit" (listing). One-liner "Kopi, makanan rumahan, dan taman yang teduh untuk keluarga." [MOCKUP]. Today's line "Buka hari ini 08.00–21.00" (Mon–Thu) / "08.00–23.00" (Fri–Sun), fallback "Buka setiap hari, mulai 08.00" (hours). Door decal (desktop): "BUKA SETIAP HARI · Senin–Kamis 08.00–21.00 · Jumat–Minggu 08.00–23.00" (hours). Buttons "Petunjuk Arah" (listing), "WhatsApp" [MOCKUP]. Interior illustration (lanterns, wooden tables, plants) labelled as illustration (photos, reference only) |
| Menu andalan (the family table) | show at least 3 real products | Heading "Menu andalan". Intro "Pilihan yang sering disebut tamu dalam ulasan." [MOCKUP copy]. Note "Harga contoh, menunggu konfirmasi." [MOCKUP]. Five illustrated dishes: **Mie Kari Ayam** [MOCKUP name], "Mi kuah kari dengan ayam, tahu goreng, telur rebus, bawang goreng, dan kerupuk." (photos), Rp 38rb [MOCKUP] · **Caesar Salad**, "Salad yang sering dipuji tamu, cocok ditemani kopi." (reviews 1, 4), Rp 40rb [MOCKUP] · **Umm Ali**, "Pencuci mulut favorit tamu." (reviews 4), Rp 35rb [MOCKUP] · **Kopi Susu Kurma**, "Espresso dan susu, dimaniskan kurma. Cenderung manis." (reviews 1), Rp 30rb [MOCKUP] · **Cappuccino**, "Espresso dengan busa susu yang lembut." [MOCKUP desc] (name: reviews 2), Rp 28rb [MOCKUP]. Caption "Ilustrasi, bukan foto menu." "Juga ada (contoh)": Makanan: Nasi Kebuli Kambing, Nasi Goreng Kambing, Roti Maryam dengan kuah kari, Chicken Wings, French Fries · Minuman: Es Kopi Susu Gula Aren, Americano, Teh Tarik, Lemon Tea, Jus Alpukat [MOCKUP] |
| Fasilitas (the signboard) | reassure families and Muslim guests | Heading "Fasilitas". Intro "Datang sekeluarga? Ini yang ada di sini." [MOCKUP copy]. Rows: **Mushala**, "Tempat wudhu untuk perempuan terpisah." (reviews 1) · **Ruang ber-AC**, "Ruang kaca di dalam, cukup luas." (reviews 2; photos) · **Taman semi-outdoor**, "Duduk di rumput, di bawah pohon dan lampu taman." (reviews 2; photos) · **Area bermain anak**, "Sudut bermain untuk si kecil." (reviews 2; confirm still there) · **Parkir**, "Tersedia parkir untuk mobil dan motor." (reviews 2, 5) |
| Suasana | feel the place | Heading "Suasana". Statement "Sengaja tanpa musik latar. Pilih duduk di taman, di bawah pohon besar dan lampu-lampu dekat air mancur, atau di ruang kaca ber-AC." [MOCKUP copy, facts from reviews 1, 2; photos]. Garden illustration, caption "Ilustrasi, bukan foto. Foto asli menyusul." [MOCKUP placeholder] |
| Kata mereka | proof without quotes | Heading "Kata mereka". "4,6 dari 569 ulasan di Google" (listing). Note "Dirangkum dari ulasan di Google, bukan kutipan langsung." Themes, paraphrased, no names: "Suasananya nyaman" / "Tamu menyebut tempatnya nyaman dan teduh." (reviews 1, 2, 3) · "Pelayanannya ramah" / "Staf ramah, pesanan tidak lama datang." (reviews 1, 5) · "Salad, kopi, dan Umm Ali" / "Yang disebut tamu sebagai favorit." (reviews 1, 4) · "Nyaman untuk keluarga" / "Ada mushala, ruang AC, dan area bermain anak." (reviews 1, 2) · "Terus berbenah" / "Tamu langganan melihat menunya makin baik, dan alat makan sekali pakai sudah tidak dipakai." (reviews 3) |
| Kunjungi kami | get there | Heading "Kunjungi kami". Address "Jl. Pahlawan Revolusi No.55, Pondok Bambu, Duren Sawit, Jakarta Timur 13430" (listing). "Di sebelah restoran mi." (reviews 2). Hours "Senin–Kamis 08.00–21.00", "Jumat–Minggu 08.00–23.00", "Buka setiap hari", with a "hari ini" tag on today's row (hours). "Tersedia parkir untuk mobil dan motor." (reviews 2, 5). Map embed + "Petunjuk Arah" button (listing) |
| Hubungi kami (closing, night garden) | contact | Heading "Hubungi kami". "Mau datang rombongan atau untuk acara keluarga? Tanyakan lewat WhatsApp." [MOCKUP: reservations unconfirmed]. "Jumat–Minggu buka sampai 23.00." (hours). Buttons "WhatsApp" [MOCKUP], "Telepon 0813-9938-5352" (listing), "Petunjuk Arah" (listing) |
| Footer | close | "Marhaba! Coffee & Eatery · Jl. Pahlawan Revolusi No.55, Pondok Bambu, Jakarta Timur" (listing); "Situs ini masih draf untuk ditinjau pemilik." |

Never on the page: quoted reviews or reviewer names, "murah", "parkir luas", "sunyi/tenang total"
(one guest heard motorbikes), any "sejak" or years-in-business claim, wifi or power-outlet claims,
customer photos (`photo-*.jpg`).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
1. Is "Marhaba!" the page name, with "Coffee & Eatery" as the descriptor and "Duduk enak, makan enak" as the tagline?
2. Does 0813-9938-5352 take WhatsApp messages?
3. Were photo-1 (the window) and photo-2 (the noodle bowl), posted by the "Marhaba! Duduk Enak Makan Enak" account, yours, and may we use them on the site?
4. Will you send your logo and photos (garden and pavilion, mushala, kids area, signature dishes, menu) to replace the illustrations?
5. Is the curry noodle bowl called "Mie Kari Ayam"? If not, what is its name?
6. Are these example prices close: Kopi Susu Kurma Rp 30rb, Cappuccino Rp 28rb, Caesar Salad Rp 40rb, Umm Ali Rp 35rb, Mie Kari Ayam Rp 38rb?
7. Are these on your menu: Nasi Kebuli Kambing, Nasi Goreng Kambing, Roti Maryam with curry, Chicken Wings, French Fries, Es Kopi Susu Gula Aren, Americano, Teh Tarik, Lemon Tea, Jus Alpukat?
8. Is "Espresso dengan busa susu yang lembut" right for your Cappuccino?
9. Is the kids' play area still there?
10. Do you take reservations for groups and family events through WhatsApp?
11. Should the site say "Anda" (not "kamu")?
12. Is the light Middle Eastern touch right as it is (names only, no Arabic lettering or ornament), or should we lean in more?
13. Is the hero line "Kopi, makanan rumahan, dan taman yang teduh untuk keluarga." right?
14. Are the section intros OK: "Pilihan yang sering disebut tamu dalam ulasan.", "Datang sekeluarga? Ini yang ada di sini.", and the Suasana line about no background music?
15. Is it right to invite weekend groups and family events (closing section)?
