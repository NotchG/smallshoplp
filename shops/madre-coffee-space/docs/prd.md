# PRD: Madre Coffee Space mockup site

## Goal
A one-page mockup that makes Madre Coffee Space's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (their own
mustard-and-cobalt menu photography, their plates named on the table, their playroom), and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
Madre Coffee Space, on Jl. Gongseng Raya in Cijantung (Jakarta Timur), is a bright, homey
family cafe that is just as much a kitchen: a long menu of Indonesian and Western plates
(Ayam Afrika on nasi kebuli, Beef Dabu-Dabu, Gyudon Andaliman, Cordon Bleu), small bites,
churros, coffee and colourful mocktails, plus a proper playroom with a ball pit, slide and
loft. Families come for the food and the kids' room, others to meet friends or work from the
cafe. Reviewers praise the consistently good food, the service, and a barista who will tune a
drink to your taste. It's open every day from 08:00, until 22:00 (Friday and Saturday 23:00),
and holds 4.7 on Google from 519 reviews. (brief.md)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Parent planning a family meal | know the kids will be happy too | see the playroom photo, high chair and kids' menu, then get directions |
| Local in Cijantung or Kalisari deciding where to eat tonight | check it's open and what's good | see today's hours and the dishes in the first screen; tap directions |
| Someone looking for a cafe to work or hang out in | judge the room and the hours | see the dining room, the hours table, the address on a map |
| Coffee drinker | know whether the coffee is any good | read the coffee list and that the barista adjusts drinks to taste |
| Friends or a family planning a gathering | ask about a table or a birthday | reach WhatsApp or the phone in one tap |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp ([MOCKUP] number takes WhatsApp)  3. Telepon (call)
The first screen shows action 1 without scrolling, on a phone.

Links:
- Directions: `https://maps.google.com/?cid=6959099905698540056` (raw.json googleMapsUri)
- WhatsApp: `https://wa.me/6285121102047` ([MOCKUP])
- Call: `tel:+6285121102047` (listing)

## Sections and content
All copy in Bahasa Indonesia, register "kamu" ([MOCKUP]). Dish and drink names exactly as written.
Source tags: (listing), (hours), (reviews n), (photos), or [MOCKUP].

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Rule 7 | "Draf mockup untuk Madre Coffee Space. Beberapa detail masih contoh sampai Anda konfirmasi." |
| Hero (mustard) | Recognition in 5 s; directions in first screen | h1 "Madre Coffee Space" (listing). Lead "Makan enak, kopi racikan, dan ruang main si kecil di Cijantung." (brief). Today's hours "Buka hari ini 08.00–22.00" (Jumat–Sabtu 08.00–23.00), no-JS fallback "Buka setiap hari 08.00–22.00, Jumat–Sabtu sampai 23.00" (hours). Buttons "Petunjuk Arah" (listing) and "WhatsApp" [MOCKUP]. Photo: owner-7 spread, cropped, with tags "Steak saus jamur", "Daging & sambal segar", "Ayam Afrika", "Cordon Bleu" (photos) |
| Menu andalan (paper) | Show the kitchen is the point | h2 "Menu andalan". Intro "Menu Indonesia dan Barat dari dapur kami. Ini empat piring yang disebut tamu dalam ulasan mereka." (reviews 1, 5) Items: **Ayam Afrika**: "Paha ayam panggang di atas nasi kebuli yang rempahnya terasa, dengan pisang goreng dan tiga saus: hijau, putih, dan sambal merah." + "Favorit lama tamu setia." (reviews 1, 5; photos). **Beef Dabu-Dabu**: "Daging sapi beraroma asap, disajikan dengan mashed potato." (review 5). **Gyudon Andaliman**: "Rice bowl daging sapi dengan merica andaliman." (review 1). **Cordon Bleu**: "Dengan mashed potato, salad, dan saus krim jamur." (review 5; photos). Prices Rp 58rb / 68rb / 52rb / 55rb [MOCKUP]. Round crop of the Ayam Afrika plate (owner-7), caption "Ayam Afrika: nasi kebuli, pisang goreng, tiga saus." h3 "Juga dari dapur kami": steak saus jamur dengan telur dan buncis; daging iris dengan sambal bawang, tomat dan cabai segar; rice bowl daging dengan cabai dan daun bawang; hidangan panggang bertopping mayo (photos). [MOCKUP] "Sarapan mulai pukul 08.00: croissant dan piring telur, Rp 35rb–50rb." |
| Camilan & manis (mustard) | Small bites and sweets, shown | h2 "Camilan & manis". Lead "Buat teman ngobrol, atau dibagi ramai-ramai di meja." owner-2 with caption "Mac & cheese balls, spring roll, ayam krispi, onion rings, dan dumpling goreng, lengkap dengan saus cocolan." (review 1; photos) + "Rp 25rb–35rb" [MOCKUP]. owner-4 with caption "Churros bertabur gula dengan saus cokelat." (photos) + "Rp 28rb" [MOCKUP]. Line "Ada juga pastry dan dessert." (review 1) |
| Minuman (cobalt) | Coffee credibility and the colourful drinks | h2 "Minuman". Lead "Kopinya bisa diracik sesuai seleramu. Tinggal bilang ke barista kami." (brief; review 1). h3 "Kopi": Kopi susu gula aren Rp 25rb, Caffe latte Rp 32rb, Cappuccino Rp 32rb, Black Basil Rp 38rb (prices [MOCKUP]); Black Basil note "Espresso dengan sirup stroberi dan jus anggur. Suka lebih kuat? Minta tambah espresso." (review 1). h3 "Mocktail & teh": "Lemonade telang, teh leci, teh peach-jeruk, soda kiwi-lemon, dan racikan selasih-pandan." (photos) "Rp 30rb–35rb" [MOCKUP]; "Juga teh dan minuman berbasis susu." (review 1). owner-3 with five tags (photos); owner-5 caption "Mocktail pink dengan daun thyme." (photos) |
| Ramah anak (paper) | The family reason to choose Madre | h2 "Ramah anak". Lead "Makan enak buat ayah dan bunda, ruang main seru buat si kecil." (brief). Body "Ruang mainnya punya ruangan sendiri, dengan kolam bola, perosotan, dan loteng kecil. Kursi makan bayi juga ada." (photos; reviews 3, 4). h3 "Menu anak" (reviews 1, 3): [MOCKUP] "Chicken nugget dan kentang goreng, spaghetti bolognese mini, nasi chicken katsu. Sekitar Rp 30rb–40rb." owner-6 (cropped) with tags "Loteng", "Kursi makan bayi", "Perosotan", "Kolam bola" (photos) |
| Ruang kami (cognac) | The room, for hanging out or working | h2 "Ruang kami". Lead "Dinding putih, kayu jati, sofa kulit panjang, dan lukisan penuh warna." (photos). Body "Pas untuk makan bareng teman, nongkrong, atau kerja dari kafe." (reviews 3, 5). [MOCKUP] "Madre artinya 'ibu' dalam bahasa Spanyol. Pas untuk tempat makan keluarga." owner-1 |
| Kata mereka (cognac) | Proof, paraphrased | h2 "Kata mereka". "4,7 dari 519 ulasan Google" + link "Lihat ulasan di Google Maps" (listing). Four unattributed themes: **Makanan yang konsisten**: "Rempah nasi kebulinya terasa, daging Beef Dabu-Dabu-nya beraroma asap, dan rasanya selalu pas." (reviews 1, 4, 5). **Pelayanan yang hangat**: "Tamu memuji pelayanannya, sama seperti makanan dan kopinya." (reviews 2, 4). **Anak-anak betah**: "Ruang main dan menu anaknya dinilai juara." (review 3). **Kopi sesuai selera**: "Barista mau menambah espresso sampai rasanya pas di lidahmu." (review 1) |
| Kunjungi kami (paper) | Get there | h2 "Kunjungi kami". Address "Jl. Gongseng Raya No. 1, Cijantung, Jakarta Timur 13770" (listing; do not print the kecamatan). "Buka setiap hari" + table: Senin, Selasa, Rabu, Kamis 08.00–22.00; Jumat, Sabtu 08.00–23.00; Minggu 08.00–22.00 (hours), today's row marked. Button "Petunjuk Arah". Map embed of the address |
| Hubungi kami (cobalt) | Close with the actions | h2 "Hubungi kami". [MOCKUP] lead "Mau pesan meja, atau merayakan ulang tahun dan kumpul keluarga di Madre? Chat kami di WhatsApp." Rows: WhatsApp 0851-2110-2047 [MOCKUP]; Telepon 0851-2110-2047 (listing); Petunjuk Arah, Jl. Gongseng Raya No. 1, Cijantung (listing). Footer line: name and address |

Not on the page: parking, price claims in copy, "quiet" or "tenang" promises (review 4 says it
gets lively), rating stars, reviewer names, the kecamatan, an Instagram link (no handle known).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, multiple pages, a logo (type-only
wordmark until the owner sends one), photos other than the seven `owner-*.jpg` files
(`photo-*.jpg` are customer uploads and never appear).

## Open questions for the owner
Owner-facing, in Bahasa Indonesia; these become `owner-checklist.md`.

From [MOCKUP] items:
1. Apakah nomor 0851-2110-2047 bisa dihubungi lewat WhatsApp?
2. Apakah tamu bisa pesan meja, atau acara keluarga dan ulang tahun, lewat WhatsApp?
3. Apakah harga contoh menu utama sudah mendekati (Ayam Afrika Rp 58rb, Beef Dabu-Dabu Rp 68rb, Cordon Bleu Rp 55rb, Gyudon Andaliman Rp 52rb)?
4. Apakah harga contoh kopi sudah mendekati (kopi susu gula aren Rp 25rb, caffe latte Rp 32rb, cappuccino Rp 32rb, Black Basil Rp 38rb)?
5. Apakah harga camilan (Rp 25rb–35rb), churros (Rp 28rb) dan mocktail (Rp 30rb–35rb) sudah mendekati?
6. Apakah menu anak berisi chicken nugget dan kentang goreng, spaghetti bolognese mini, dan nasi chicken katsu, sekitar Rp 30rb–40rb?
7. Apakah ada menu sarapan mulai 08.00, seperti croissant dan piring telur, sekitar Rp 35rb–50rb?
8. Apakah nama "Madre" memang dari kata "ibu" dalam bahasa Spanyol? Kalau ada cerita lain, boleh diceritakan.
9. Apakah sapaan "kamu" sudah pas, atau lebih suka "Anda"?
10. Apakah latar mustard dan biru kobalt (diambil dari foto menu Anda) cocok untuk situs ini?
11. Apakah Madre punya akun Instagram yang ingin ditautkan?

Other questions:
12. Label di foto ("Steak saus jamur", "Daging & sambal segar", "Lemonade telang", dan lainnya) adalah deskripsi kami. Apakah perlu diganti dengan nama menu resmi?
13. Apakah ada logo Madre yang bisa dipakai?
14. Apakah ada foto kopi atau Black Basil yang bisa ditambahkan?
