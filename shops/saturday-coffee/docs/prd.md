# PRD: Saturday Coffee 2.0 mockup site

## Goal
A one-page mockup that makes Saturday Coffee 2.0's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner; `lang="id"`.
Menu and dish names stay as the shop uses them.

## The shop in one paragraph
Saturday Coffee 2.0 is a coffee shop and café at Jl. Cipinang Cempedak IV No.20, Cipinang
Cempedak, Jatinegara, Jakarta Timur, close to the KCIC Halim high-speed train station. It looks like
a converted house: a roomy, plant-filled, semi-outdoor courtyard under string lights, white
columns, a terracotta-and-slate tiled floor, and an upstairs area. People come to work on laptops,
to hang out with friends, or to pass time before a train. Guests praise the space (spacious, lots
of seating, much of it outdoors), the friendly staff, and food and coffee that are good for the
price in decent portions. Favourites named in reviews: Kopi Susu Strong (the house palm-sugar
latte), Kopi Susu Mantan, Wake Up Call (black coffee with lemon), Bangkok-sauce fries and smoked
beef risoles. Open every day, Mon–Fri 08:30–22:00, Sat–Sun 08:30–23:00. Google rating 4.7 from 760
reviews, moderate prices. Car parking is tight; guests use a nearby minimarket.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Remote worker or student planning a session | check opening time and whether it suits work | see today's hours in the first screen; see "Cocok untuk kerja", indoor & outdoor and the upstairs in Suasana (no wifi promise) |
| Friends planning a hangout, often evenings and weekends | know how late it's open and what to order | see the weekend 23.00 close; see the named drinks and food drawn, with example prices |
| Train traveller near KCIC Halim | find a place to wait near the station | find "Dekat Stasiun KCIC Halim" and get directions in one tap |
| Guest coming by car | know where to park | read the parking tip right next to the address in "Kunjungi kami" |
| Guest with a question | reach the shop quickly | tap WhatsApp or Telepon from the hero or "Hubungi kami" |
| The owner (the pitch) | recognise their place | see the string-lit courtyard, the tile floor and their named drinks in the first two screens |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp chat  3. Telepon
The first screen shows action 1 without scrolling, on a phone. WhatsApp sits beside it.

## Sections and content
Copy below is the content for `content.ts`. Lines marked [MOCKUP] carry `mockup: true`.
Section copy written for this mockup (intros, short lines) is [MOCKUP]; facts inside it carry
their source.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft (project rule) | "Draf mockup untuk Saturday Coffee 2.0. Beberapa detail masih contoh sampai dikonfirmasi pemilik." Plus `noindex`. |
| Hero | Recognition in five seconds; hours and directions at once | h1 "Saturday Coffee" with tag "2.0" inside the h1 (listing; tag treatment [MOCKUP]). Line: "Kopi, camilan, dan tempat lega untuk kerja atau nongkrong." [MOCKUP]. Today's hours: "Buka hari ini 08.30–22.00" or "08.30–23.00" on Sabtu–Minggu (hours); no-JS fallback "Buka setiap hari 08.30–22.00 · Sabtu–Minggu sampai 23.00". Address line: "Jl. Cipinang Cempedak IV No.20, Jatinegara · dekat Stasiun KCIC Halim" (listing; reviews 5). Buttons "Petunjuk Arah" (listing) + "WhatsApp" ([MOCKUP] that the number takes WhatsApp). Courtyard illustration ([MOCKUP] placeholder until owner photos). |
| Menu andalan | Show at least 3 real items, drawn | h2 "Menu andalan". Intro: "Favorit tamu dari ulasan dan foto di Google." [MOCKUP copy]. Note: "Harga masih contoh." [MOCKUP]. **Minuman:** Kopi Susu Strong, "Kopi susu gula aren, andalan rumah." (reviews 4), Rp 27rb [MOCKUP] · Kopi Susu Mantan, "Es kopi susu yang lebih ringan dan creamy." (reviews 4), Rp 25rb [MOCKUP] · Wake Up Call, "Kopi hitam dengan lemon." (reviews 5), Rp 25rb [MOCKUP]. **Makanan:** Kentang Goreng Saus Bangkok, "Kentang goreng dengan saus Bangkok." (reviews 5; spelling [MOCKUP]), Rp 25rb [MOCKUP] · Risol Smoked Beef, "Risol isi smoked beef." (reviews 5; spelling [MOCKUP]), Rp 22rb [MOCKUP] · Beef Bowl Onsen Egg (name [MOCKUP]), "Nasi daging sapi, telur setengah matang, nori, dan kriuk tempura." (photos), Rp 42rb [MOCKUP]. **Juga ada** [MOCKUP]: Americano (Rp 22rb), Cappuccino, Caffè Latte, Matcha Latte, Cokelat, teh buah, Orange Cream Latte (name to confirm; the drink itself is in photos), Cireng, Tahu Cabe Garam, Mix Platter. |
| Suasana | Show the space people come for | h2 "Suasana". Lead: "Rumah dengan halaman semi-outdoor yang luas, banyak tanaman, dan lampu gantung di atasnya." (reviews 2, 3; photos; copy [MOCKUP]). Line: "Kerja, nongkrong, atau nunggu kereta, semua enak di sini." [MOCKUP]. Facts: "Indoor & outdoor", "Ada lantai atas", "Cocok untuk kerja" (reviews 3, 5). House illustration labelled "Lantai atas" and "Halaman semi-outdoor" (reviews 3; photos; illustration [MOCKUP] placeholder). |
| Dekat Stasiun KCIC Halim | Win the train traveller | h2 "Dekat Stasiun KCIC Halim" (reviews 5). Line: "Punya waktu sebelum naik kereta? Duduk dulu, ngopi, makan, lalu lanjut ke stasiun." (reviews 5; copy [MOCKUP]). Route line "Saturday Coffee 2.0 ── ± 10 menit ── Stasiun KCIC Halim" (time [MOCKUP]). Link "Buka di Google Maps" (listing). |
| Kata mereka | Social proof without quotes | h2 "Kata mereka". "4,7 dari 760 ulasan Google" (listing). Six paraphrased themes, no quotes, no names: "Luas dan lega": tempatnya luas, kursinya banyak, enak dilihat (reviews 1, 2, 3) · "Enak buat kerja, enak buat ketemu teman" (reviews 2, 3, 5) · "Banyak kursi di luar": area outdoor-nya lega (reviews 3, 4) · "Stafnya ramah" (reviews 2) · "Sepadan dengan harganya": makanan dan kopinya pas di harga, porsinya cukup (reviews 1, 2, 5) · "Yang disebut tamu": kentang goreng saus Bangkok, risol smoked beef, Wake Up Call (reviews 5). |
| Kunjungi kami | Where, when, how to park | h2 "Kunjungi kami". Address "Jl. Cipinang Cempedak IV No.20, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340" (listing). Hours: "Senin–Jumat 08.30–22.00", "Sabtu–Minggu 08.30–23.00", "Buka setiap hari" (hours); today's row marked "Hari ini". Parking tip: "Parkir mobil terbatas. Kalau bawa mobil, bisa parkir di minimarket terdekat." (reviews 1). Google map embed + "Petunjuk Arah" button (listing). |
| Hubungi kami | Close with the actions | h2 "Hubungi kami". "Chat WhatsApp" 0878-8379-8730 ([MOCKUP] WhatsApp) · "Telepon" 0878-8379-8730 (listing) · "Petunjuk Arah" "Buka Google Maps" (listing). Sign-off: "Setiap hari rasanya seperti hari Sabtu." [MOCKUP]. |
| Footer | Identify, end the page | "Saturday Coffee 2.0 · Coffee shop di Jatinegara, Jakarta Timur" (listing) · "Draf mockup, belum dipublikasikan." |

Links: directions `https://maps.google.com/?cid=6104321714020755894` (listing), WhatsApp
`https://wa.me/6287883798730`, phone `tel:+6287883798730` (listing).

Not on the page: customer photos (reference only), the doughnut and the "Coffee Understands" cup
(may be another shop), any wifi or "best coffee" claim, smoking-area details, years in business,
staff names, quoted reviews.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: a breakfast/morning menu section (shown
only after the owner confirms), a logo (none available; the name is set in type).

## Open questions for the owner
1. Should the page read "Saturday Coffee" in large type with "2.0" as a small tag?
2. Is there another Saturday Coffee branch the page should mention?
3. Does 0878-8379-8730 take WhatsApp messages?
4. Is the hero line "Kopi, camilan, dan tempat lega untuk kerja atau nongkrong." right for you?
5. Do you like the line "Setiap hari rasanya seperti hari Sabtu."?
6. Is "Kerja, nongkrong, atau nunggu kereta, semua enak di sini." a good line for the page?
7. Should the site talk to guests as "kamu" (casual) rather than "Anda"?
8. Are these example prices close: Kopi Susu Mantan Rp 25rb, Kopi Susu Strong Rp 27rb, Wake Up Call Rp 25rb, Americano Rp 22rb, Bangkok-sauce fries Rp 25rb, smoked beef risoles Rp 22rb, beef rice bowl Rp 42rb?
9. Is the menu spelling "Kentang Goreng Saus Bangkok" correct?
10. Is the menu spelling "Risol Smoked Beef" correct?
11. Is the rice bowl called "Beef Bowl Onsen Egg"? (If not, what is its name?)
12. Is the cream-topped coffee with orange zest called "Orange Cream Latte"? (If not, what is its name?)
13. Do you serve Americano, Cappuccino, Caffè Latte, Matcha Latte, Cokelat and a fruit tea?
14. Do you serve Cireng, Tahu Cabe Garam and a Mix Platter?
15. Do you serve breakfast from 08.30 (toast, rice bowls), and should the page show it?
16. Is it about 10 minutes from Stasiun KCIC Halim? (If not, how long, on foot or by ride?)
17. Are students and young workers from Cipinang Cempedak and Halim a big part of your guests?
18. Are terracotta (the floor tiles) and leaf green good accent colours for your brand?
19. Is the short section copy (intros and captions) written in a voice you like?
20. Can you send your logo, and photos of the courtyard, the upstairs, the signature drinks, the rice bowl and the menu board, to replace the drawings?
