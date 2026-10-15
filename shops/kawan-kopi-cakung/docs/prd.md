# PRD: Kawan Kopi, Cakung mockup site

## Goal
A one-page mockup that makes Kawan Kopi, Cakung's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
A small, carefully run coffee bar in a shophouse (Ruko Maison De Wisteria 2 No. 11, Ujung Menteng,
Cakung) where the coffee is the point. Reviewers single out the Americano (full marks from one
reviewer) and Kopi Kawan Lama (a stronger coffee taste that's still creamy). The bar also serves a
Dirty Latte, and light plates and sweets rather than full meals. People praise the good coffee, the
warm waiters and barista (the barista explains the coffee well), service that puts mistakes right
and then some, a cozy place to hang out, fair prices, and wifi with people working there. It opens
07:30 every day, closing 22:00 on weekdays and 23:00 at weekends. Rated 4.9 from 233 Google reviews.
Parking is limited. (All from brief.md and raw.json.)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local looking for a nearby café to chill in (review 1) | See what it's like and how to get there | See the bar's look and "Petunjuk Arah" in the first screen |
| Laptop worker (review 1) | Know there's wifi and how late it's open | Find wifi and the hours bars in "Kerja atau santai" |
| Friends hanging out (reviews 3, 5) | Know it's open late at the weekend | See Sab–Min until 23.00 in the hero and the hours bars |
| Coffee drinker who likes hearing about the beans (review 2) | Know what's good on the bar | Read the drink cards with taste notes and layer keys |
| [MOCKUP] Early commuter | Check it's open at 07.30 | See today's hours in the first screen |

## Primary actions
1. Get directions ("Petunjuk Arah")  2. Call ("Telepon")  3. See the coffee (scroll to "Kopi kami")
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
Copy is final unless marked `[MOCKUP]`. Every `[MOCKUP]` item renders with `data-mockup`.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Banner | Mark the draft | "Draf mockup untuk Kawan Kopi, Cakung. Beberapa detail masih contoh sampai dikonfirmasi pemilik." (CLAUDE.md rule 7) |
| Hero | Recognition, hours, directions | h1 "Kawan Kopi" + "Cakung · Jakarta Timur" (listing). [MOCKUP] "Teman ngopi di ujung jalan. Datang sendiri, pulang sudah kenal sama barista." "Buka hari ini 07.30–22.00" (today, from hours; static fallback "Buka setiap hari dari 07.30"). "Sen–Jum 07.30–22.00 · Sab–Min 07.30–23.00" (hours). Buttons "Petunjuk Arah", "Telepon". Drawn drinks: Americano, Dirty Latte, citrus iced drink (photos, review 2). |
| Kopi kami | Show the coffee | Intro "Pesan apa hari ini? Biar barista kami ceritain kopinya." (brief tone; review 2). **Americano**: "Salah satu tamu kasih nilai penuh untuk Americano kami." (review 2), key "espresso + air", [MOCKUP] Rp 25rb. **Kopi Kawan Lama**: "Rasa kopinya lebih tegas, tapi tetap creamy." (review 2), key "lebih tegas" / "tetap creamy", [MOCKUP] Rp 28rb. **Dirty Latte** (photos): [MOCKUP] "Espresso dituang di atas susu dingin, jadi berlapis.", [MOCKUP] key "espresso" / "susu dingin", [MOCKUP] Rp 32rb. [MOCKUP] **V60 hari ini**: "Seduh manual, bijinya bergantian dari Indonesia, misalnya Gayo atau Kintamani.", key "seduh manual" / "biji Indonesia, bergantian", "harga menyusul". |
| Teman ngopi | Show the food honestly | Intro "Piring ringan dan yang manis-manis buat menemani kopi. Kami tidak menyajikan makanan berat." (review 2). **French toast**: "Dengan es krim dan stroberi." (photos), [MOCKUP] Rp 38rb. **Salad**: "Dengan dressing dan saus cocolan." (photos), [MOCKUP] "harga menyusul". **Sandwich panggang**: "Roti isi, dipanggang." (photos), [MOCKUP] "harga menyusul". **Pastri**: "Dari etalase di bar." (photos), [MOCKUP] "harga menyusul". |
| Kerja atau santai | Wifi, work, hours | "Ada wifi, dan banyak yang datang bawa laptop. Atau datang bareng teman dan nongkrong sampai malam." (review 1; reviews 3, 5; hours). Hours bars: Senin–Jumat 07.30–22.00, Sabtu–Minggu 07.30–23.00, "hari ini" tag on today's row (hours). Facts: "Wifi tersedia" (review 1), "Banyak yang kerja di sini" (review 1), "Nyaman buat nongkrong bareng teman" (reviews 3, 5), [MOCKUP] "Mampir sebelum berangkat kerja: buka 07.30 tiap hari". |
| Kata mereka | Social proof, paraphrased | "4,9 dari 233 ulasan di Google" (listing). "Diringkas dari ulasan Google." Themes: **Kopi** "Kopinya enak: Americano dapat nilai penuh, Kopi Kawan Lama tegas tapi tetap creamy." (review 2). **Pelayanan** "Pelayan dan baristanya hangat, dan baristanya pintar menjelaskan kopinya." (review 2). **Kalau ada salah** "Pesanan sempat tertukar; langsung diganti, plus satu kopi tambahan." (review 1). **Suasana & harga** "Tempatnya nyaman buat nongkrong, harganya wajar." (reviews 1, 3, 5). No quotation marks, no names. |
| Kunjungi kami | Find it | "Ruko Maison De Wisteria 2 No. 11, Ujung Menteng, Cakung, Jakarta Timur 13960" (listing). Map embed, "Petunjuk Arah". Hours list (hours). "Tempat parkir terbatas." (review 2). [MOCKUP] "Tips parkir terdekat: menyusul dari pemilik." |
| Hubungi kami | Call | [MOCKUP] "Ada pertanyaan sebelum mampir? Telepon saja." "0851-1131-4830" (listing). Buttons "Telepon", [MOCKUP] "WhatsApp", "Petunjuk Arah". |
| Footer | Close | "Kawan Kopi, Cakung · Ruko Maison De Wisteria 2 No. 11, Cakung, Jakarta Timur · Draf mockup, belum dipublikasikan." |

Copy register: [MOCKUP] casual Jakarta-café Indonesian. It avoids pronouns where it can and uses
"kamu" when it must address the reader. Drink names stay exactly "Americano", "Kopi Kawan Lama",
"Dirty Latte".

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: an open/closed-now indicator, an English
version, and any use of the customer photos `photo-1/2/3.jpg`.

## Open questions for the owner
1. Is "Teman ngopi di ujung jalan. Datang sendiri, pulang sudah kenal sama barista." a good line for Kawan Kopi?
2. Is the casual "kamu" register right for the site?
3. Do you serve a rotating V60 manual brew with Indonesian beans such as Gayo or Kintamani?
4. Are these prices right: Americano Rp 25rb, Kopi Kawan Lama Rp 28rb, Dirty Latte Rp 32rb, French toast Rp 38rb?
5. Do you want prices shown for the V60, salad, toasted sandwich and pastries? (If yes, which?)
6. Is the Dirty Latte espresso poured over cold milk?
7. Can we say "Mampir sebelum berangkat kerja" (drop by before work) to early commuters?
8. Does 0851-1131-4830 take WhatsApp messages?
9. Is there a nearby parking spot you'd like us to recommend?
10. Are "Sandwich panggang" and "Pastri" the names you use on your menu?
11. Is it fine to show the citrus iced drink with the dried orange wheel without its name? (If not, what is it called?)
12. Are the drink drawings close to how you serve the Americano, Kopi Kawan Lama and V60 (glass shape, hot or iced)?
13. Would you like to send your own photos of the bar and menu to replace the drawings?
