# PRD: Morning Mantra mockup site

## Goal
A one-page mockup that makes Morning Mantra's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Language: all copy, buttons, hours, the draft banner and `lang="id"` in Bahasa Indonesia.
Menu names stay exactly as on the board. The English tagline stays only where the owner
already uses it (owner-1 and the footer brand line).

## The shop in one paragraph
Morning Mantra is a chic blue-and-gold cafe-restaurant on Jl. Raya Condet in Balekambang,
Kramat Jati, more polished than people expect on that street (reviews 3, photos). It has three
areas: a cool indoor room by the cobalt bar where people sit to work on fast-enough Wi-Fi
(about 60–80 Mbps), a leafy glass-roofed outdoor space for friends, and rooms upstairs,
including a private (karaoke) room and a prayer room (reviews 1, 2, photos). It serves coffee
from a wide choice of beans, with house drinks like Morning Coffee, Mantra Coffee, Kapulaga
Coffee and Pandan Coffee plus V60, alongside Indonesian plates such as grilled squid with
sambal matah (reviews 3, 4, photos). People praise the ambience, the look, both indoor and
outdoor areas, the coffee and the friendly service (reviews 1–5). Open every day 08:00–22:00
(hours); 4.7 from 228 Google reviews (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Condet neighbour on the way out in the morning | check it's open now and how to get there | see "Buka hari ini 08.00–22.00" and Petunjuk Arah in the first phone screen |
| Remote worker | know if they can work here all afternoon | find Wi-Fi speed, the seats by the bar, the musala and the 22.00 close in "Tiga ruang" |
| Friends meeting up | see the space and what there is to eat and drink | see the outdoor room, the coffee board and the food menu, then WhatsApp |
| Group wanting privacy | know there's a private room and how to ask for it | find the upstairs room and a WhatsApp action next to it |
| Coffee drinker | see what's on the board and whether they can pick beans | read the full board with prices and the V60 / bean-choice note |
| Parent with a small child | know if it suits a family | see the high chair mention in the outdoor room |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp  3. Telepon 0817-5414-141
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
Seven sections. The brief's "Kerja dari sini" is kept as a heading but lives inside "Tiga ruang"
as the indoor room (it is that room's job); a separate band would only repeat the same facts.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Hero | Recognition in 5 s, hours, directions | Name as the neon sign: "MORNING" caps + "mantra" script (photos, owner-1). "Buka hari ini 08.00–22.00" (hours). [MOCKUP] line "Awali pagimu dengan mantra." Sub line: coffee from a wide choice of beans and Indonesian food on Jl. Raya Condet (reviews 3, photos, listing). Buttons Petunjuk Arah (listing `googleMapsUri`) and WhatsApp ([MOCKUP] number takes WhatsApp). Short address (listing). owner-1.jpg in an arch frame, no text over it (photos.json) |
| Menu kopi | Show the coffee the regulars order | Board list exactly as on the board: Morning Coffee, Mantra Coffee, Kapulaga Coffee, Pandan Coffee, Choco Regal, Coffee Latte, Matcha / Taro / Red Velvet, Vietnam Coffee, V60 (photos). [MOCKUP] prices 35 · 30 · 35 · 35 · 30 · 35 · 30 · 35 · 40 (ribu Rp), visibly flagged. Note: wide choice of beans, manual brew V60 (reviews 3, photos); Baileys coffee, iced (reviews 2). Illustrations of Kapulaga Coffee, Pandan Coffee, V60, captioned as illustrations |
| Makan di sini | Show it's a real kitchen, not just coffee | Grilled squid with sambal matah on kangkung, banana-leaf rice with fried shallots, two sambals, lalapan (photos); hot tea in black-and-gold cups (photos); food people enjoyed (reviews 1, 5). [MOCKUP] breakfast: nasi uduk, bubur ayam, roti panggang & telur. [MOCKUP] mains: ayam bakar madu, nasi goreng kampung, iga bakar, sop buntut. [MOCKUP] camilan: pisang goreng keju, kentang goreng, cireng rujak, roti bakar. [MOCKUP] prices: cumi bakar 55rb, ayam bakar madu 40rb, nasi goreng kampung 35rb, pisang goreng keju 22rb, teh panas 15rb. [MOCKUP] lead "Dari sarapan jam 08.00 sampai makan malam" (breakfast + evening idea). Illustrations of the squid plate and the tea cup. No pastries (reviews 4) |
| Tiga ruang | Pick the right room for today | Three areas (reviews 2). Upstairs: private karaoke room for groups wanting privacy (reviews 2, four years old, confirm); musala upstairs (reviews 1); [MOCKUP] "Tanya / pesan lewat WhatsApp". No minimum-spend terms shown until confirmed. Indoor, heading "Kerja dari sini": comfortable seats in front of the bar (reviews 2), Wi-Fi about 60–80 Mbps (reviews 1), blue velvet sofas and gold chairs (photos), open to 22.00 (hours). Outdoor, "Santai bareng teman": glass roof, plants (photos), best for chilling with friends (reviews 2), baby high chair (photos) |
| Kata mereka | Social proof without quotes | "4.7 dari 228 ulasan Google" (listing). Paraphrased themes: tempatnya cantik dan chic (reviews 3); nyaman di dalam maupun di luar (reviews 2, 3); kopinya enak, pilihan bijinya banyak (reviews 3, 4); pelayanannya ramah (reviews 4). Caption: summarised from Google reviews. No quotes, no names |
| Kunjungi kami | Get there | Full address as listed: Jl. Raya Condet No.03 6, RT.3/RW.4, Balekambang, Kramat Jati, Jakarta Timur 13530 (listing). "Buka setiap hari" and Senin–Minggu 08.00–22.00, today marked (hours). Google Maps embed + Petunjuk Arah |
| Hubungi kami | Act | WhatsApp ([MOCKUP] takes WhatsApp), Telepon 0817-5414-141 (listing), Petunjuk Arah. [MOCKUP] "Pesan ruang privat lewat WhatsApp". Footer: small sign lockup, brand line "Let's start your morning with mantra" (owner-1), address line, draft note |

Global: draft banner in Indonesian on the page, `noindex` (CLAUDE.md rule 7). [MOCKUP] register
"kamu" throughout.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Customer photos (photo-1..3) never appear.
No pastries or bakery items. No minimum-spend terms for the private room.

## Open questions for the owner
Becomes `owner-checklist.md` (owner-facing, so in Indonesian).
1. Boleh pakai kalimat "Awali pagimu dengan mantra" di bagian atas halaman?
2. Apakah sapaan "kamu" cocok, atau lebih suka "Anda"?
3. Apakah harga di papan kopi ini masih benar: Morning Coffee 35rb, Mantra Coffee 30rb, Kapulaga Coffee 35rb, Pandan Coffee 35rb, Choco Regal 30rb, Coffee Latte 35rb, Matcha/Taro/Red Velvet 30rb, Vietnam Coffee 35rb, V60 40rb?
4. Apakah Baileys coffee (es) masih ada di menu?
5. Apakah ada menu sarapan seperti nasi uduk, bubur ayam, dan roti panggang & telur?
6. Apakah ayam bakar madu, nasi goreng kampung, iga bakar, dan sop buntut ada di menu?
7. Apakah camilan pisang goreng keju, kentang goreng, cireng rujak, dan roti bakar ada di menu?
8. Apakah contoh harga ini mendekati: cumi bakar sambal matah 55rb, ayam bakar madu 40rb, nasi goreng kampung 35rb, pisang goreng keju 22rb, teh panas 15rb?
9. Apakah tepat menyebut Morning Mantra cocok dari sarapan jam 08.00 sampai makan malam?
10. Apakah nomor 0817-5414-141 bisa dihubungi lewat WhatsApp?
11. Apakah ruang karaoke privat di lantai atas masih ada? Boleh kami tulis ketentuannya (dulu: gratis dengan minimum order Rp 500rb untuk 2 jam)?
12. Apakah ruang privat bisa dipesan lewat WhatsApp?
13. Apakah alamat "Jl. Raya Condet No.03 6" sudah benar penulisannya, atau seharusnya lain?
14. Gambar menu di halaman ini berupa ilustrasi. Mau kirim foto asli minuman dan makanan untuk menggantinya?
15. Panel ruangan (lantai atas, dalam, luar) masih berupa gambar pengganti. Mau kirim foto ketiga ruangan?
16. Sekarang ada roti atau pastry untuk teman ngopi? Kalau ada, kami tambahkan.
