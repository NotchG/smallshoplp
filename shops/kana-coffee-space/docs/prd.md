# PRD: Kana Coffee & Space mockup site

## Goal
A one-page mockup that makes Kana Coffee & Space's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner; `lang="id"`.
Menu and dish names stay exactly as the shop writes them.

## The shop in one paragraph
Kana Coffee & Space is a cafe on Jl. BBKK in Pekayon, Pasar Rebo, Jakarta Timur, open every day
08.00–22.00 at a moderate price level. It's hard to spot from the main road, and guests call it a
hidden gem that makes a strong first impression. Inside are industrial-modern rooms in warm wood
and black steel, an Indonesian-and-Western kitchen, and many small considerate touches: no
background music, plenty of sockets, a clean mushola with mukena laid out, very clean toilets
with small bags for sanitary pads, and parking organised by security. There are indoor rooms with
AC, an outdoor area downstairs and an upstairs outdoor area where smoking is allowed, plus a fish
pond, a motorbike on display and an abaya shop inside. Fried rice is the dish people come back
for (Nasi Goreng Teri Cabai Hijau, Nasgor Kana); guests also praise the cappuccino, the
cheesecake, the cuanki and the Salad Kelapa Muda. Remote workers, arisan and buka bersama
groups, friends, families and creative regulars all come here. (brief.md)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| First-timer from Pekayon, Kalisari or wider Pasar Rebo | find a place that's off the main road | tap "Petunjuk Arah" in the first screen; read the address and the "how to find us" note |
| Remote worker | know if it's calm, has sockets and is open late | see "Buka hari ini 08.00–22.00" in the hero; see "no music" and "many sockets" in Fasilitas |
| Arisan or buka bersama organiser | check the menu and ask about a group table | see real dishes with prices; reach WhatsApp (placeholder until the owner gives a number) |
| Muslim guests and families | know the mushola and toilets are looked after | see the mushola with mukena and the clean toilets named plainly in Fasilitas |
| Friend or creative regular | get a feel for the rooms | see the owner's room photo and the list of spaces and surprises |

## Primary actions
1. Petunjuk Arah (Google Maps, from the listing)  2. WhatsApp (placeholder, see open questions)  3. Lihat menu (anchor to Menu andalan)
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Say it's a draft | "Ini draf situs untuk ditinjau pemilik" (CLAUDE.md rule 7) |
| Hero | Recognition plus directions in one screen | Wordmark "kana" with "COFFEE & SPACE" beneath (logo, owner-3; set in a stand-in script, [MOCKUP] until the logo file arrives); line "Ngopi, bekerja, dan berkumpul di Pasar Rebo." (brief); "Buka hari ini 08.00–22.00" (hours: same every day, so static text is always correct); "Petunjuk Arah" (listing Maps link) and "WhatsApp" ([MOCKUP] placeholder); handwritten note "sedikit tersembunyi, ini jalannya" ([MOCKUP] copy); photo owner-1.jpg |
| Menu andalan | Show real dishes the way their own poster does | From the "New Menu" poster (owner-3): ① Nasi Goreng Teri Cabai Hijau, telur mata sapi atau dadar, Rp 35rb; ② Soto Betawi, disajikan dengan nasi, Rp 48rb; ③ Tropical Breeze (teh hitam rasa lemon-jeruk, sirup stroberi, selasih) Rp 30rb; ④ Paradise Punch (air kelapa rasa lemon-jeruk, sirup stroberi, nata de coco) Rp 32rb. Photos: crops of owner-3 and owner-2. "Main Course Asian" range served with kerupuk and acar (owner-2); signature plate named Nasi Goreng Kana ([MOCKUP] name). Guests' favourites from reviews: Nasgor Kana, truffle fries, truffle carbonara rice, cappuccino, cheesecake, cuanki, Salad Kelapa Muda (reviews 1, 3, 5); example prices cappuccino Rp 30rb, cheesecake Rp 35rb, truffle fries Rp 35rb, truffle carbonara rice Rp 45rb, cuanki Rp 30rb ([MOCKUP]). "Juga di menu" row: Kopi Susu Kana, Caffe Latte, Americano, Manual Brew, Iced Shaken Espresso; Matcha Latte, Chocolate, Teh Tarik; Chicken Popcorn, Onion Rings, Waffle Fries platter (all [MOCKUP]). Fish 'n chips is not featured (review 2). |
| Satu tempat, banyak ruang | Show it's more than a coffee stop | Indoor rooms with AC; outdoor area on the ground floor; upstairs outdoor area where smoking is allowed; the fish pond; the motorbike on display in the middle of the cafe; the abaya shop inside (reviews 1, 3, 4). Lead line about work, gatherings, shopping and prayer ([MOCKUP] copy, from the brief's "Space" line) |
| Fasilitas | Name the considerate details plainly | Mushola with mukena provided, wudhu area outside it (review 1); many sockets (reviews 1, 4); very clean toilets with small bags for sanitary pads (review 3); parking organised by security, many motorbikes and about 4–6 cars (review 1); a calm room with no background music (review 2). "Untuk acara" line inviting arisan and buka bersama groups to book through WhatsApp ([MOCKUP]) |
| Kata mereka | Social proof without quotes or names | Four paraphrased points: a hidden gem worth finding (reviews 1, 5); the fried rice above all (reviews 3, 4, 5); calm enough to talk or work, with many sockets (reviews 1, 2, 4); clean and fresh-smelling, with a well-kept mushola (reviews 1, 3). Label "Dirangkum dari ulasan Google". No names, no stars, no rating number (brief) |
| Kunjungi kami | Get them there | Map embed; address Jl. BBKK, Pekayon, Kec. Pasar Rebo, Jakarta Timur 13790 (listing); "Cara menemukan kami": ① Masuk dari jalan utama ② ikuti Jl. BBKK ([MOCKUP], landmark needed); hours "Senin–Minggu 08.00–22.00" and "Buka setiap hari" (hours) |
| Hubungi kami | A real close | "Sampai ketemu di Kana" ([MOCKUP] copy) and "Sedikit tersembunyi, tapi sekali datang, kamu pasti kembali." (brief tone line); WhatsApp ([MOCKUP] placeholder) and Petunjuk Arah |
| Footer | Basics and draft status | Wordmark, address, hours, draft note, `noindex` |

Section headings and short lead lines are drafts written for the mockup ([MOCKUP] copy).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also out: star ratings, review quotes, reviewer
names, the "best cafe in Kalisari" claim from one review, promises of a large car park, and the
Ramadan complimentary dates and tea as a standing offer.

## Open questions for the owner
1. Do you have a WhatsApp number for questions and table bookings that we can put on the site? (If yes, which number?)
2. Should the page say Pekayon (as on Google) rather than Kalisari?
3. Is "masuk dari jalan utama, lalu ikuti Jl. BBKK" right? Is there a landmark we should mention?
4. Is the plate marked "Our Signature" in your Main Course Asian photo called Nasi Goreng Kana?
5. Are the New Menu prices still current: Nasi Goreng Teri Cabai Hijau Rp 35rb, Soto Betawi Rp 48rb, Tropical Breeze Rp 30rb, Paradise Punch Rp 32rb?
6. Are these example prices close: cappuccino Rp 30rb, cheesecake Rp 35rb, truffle fries Rp 35rb, truffle carbonara rice Rp 45rb, cuanki Rp 30rb?
7. Are these coffees on the menu: Kopi Susu Kana, Caffe Latte, Americano, Manual Brew, Iced Shaken Espresso?
8. Are these non-coffee drinks on the menu: Matcha Latte, Chocolate, Teh Tarik?
9. Is there a sharing platter of chicken popcorn, onion rings and waffle fries? What's it called?
10. Do you take group bookings for arisan and buka bersama through WhatsApp?
11. Is "kamu" right for the page, or would you prefer "Anda"?
12. Are you happy with the draft headings and short lines, including "Satu tempat, banyak ruang" and "Sampai ketemu di Kana"?
13. Can you send your logo file (SVG or a large PNG)? The page uses a similar handwriting font for now.
14. Can you send photos of the entrance, the fish pond, the motorbike on display and the mushola?
15. Is the abaya shop still inside the cafe, and should the page mention that it may close earlier than the cafe?
