# PRD: 2Sons Coffee mockup site

## Goal
A one-page mockup that makes 2Sons Coffee's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
2Sons Coffee is a specialty coffee shop in Ruko New East on Jl. Jakarta Garden City Boulevard
No. 60, Cakung. It is open every day 07.00–21.00 and is rated 5.0 from 35 Google reviews (listing,
hours). Reviewers say the coffee is genuinely good and properly made. They also mention friendly, helpful staff, a chill room that works for WFC or hanging out, plenty of food,
a beef cheese melt sandwich that was a hit, and a clean toilet (reviews 1–4). One group came to play
mahjong (review 5). Inside, the room is cool grey and white, with lit shelves of records, books, bean
bags and designer bear figures, navy and sage chairs, an oak communal table, and "specialty coffee"
lettered on the glass door (photos). The shop also serves a pale blue-grey drink in a 2Sons-branded
can (owner-2).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| `[MOCKUP]` JGC resident or commuter grabbing coffee from 07.00 | know if it's open right now and get there | see "Buka sekarang" with 07.00–21.00 and the Petunjuk Arah button in the first phone screen |
| Someone who works from cafes (WFC) (review 1) | know if they can sit and work for hours | see the room, the reasons people stay (room to work, clean toilet, friendly staff) and that it's open until 21.00 |
| Friends planning a hangout or mahjong (reviews 1, 5) | see the space and whether it suits a group | see the room photos, including the long oak table, and the mahjong line |
| Coffee drinker in the JGC area (review 3) | judge whether the coffee is serious | see specialty coffee, espresso drinks, `[MOCKUP]` manual brew, and what reviewers say |
| Hungry visitor (review 2) | know there's real food | see the food shelf, led by the beef cheese melt sandwich |
| The owner (the mockup's real reader) | recognise the shop | see their name lockup, shopfront and lit shelf in the first screen, and their can on the coffee shelf |

## Primary actions
1. **Petunjuk Arah**: Google Maps directions to the place (`place_id` ChIJ64BTIiuLaS4RyamBPUhs6QI, from raw.json).
2. **Telepon**: `tel:+628159133886` (listing).
3. `[MOCKUP]` **WhatsApp**: `https://wa.me/628159133886`.

The first screen shows action 1 without scrolling, on a phone. Action 2 sits beside it.

## Sections and content
All copy is in Bahasa Indonesia, with `lang="id"`. Headings are lowercase, matching the wordmark. The copy below is a draft the builder may tighten without adding facts.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Banner | Mark the draft | "Draf mockup untuk 2Sons Coffee. Beberapa detail masih contoh sampai kamu konfirmasi." (project rule) |
| 1. Hero | Recognition plus open / where / how | h1 lockup "2sons" / "coffee" (wordmark, photos). Line: "Specialty coffee di JGC Boulevard. Santai, dan kopinya dibuat dengan bener." (photos: door lettering; listing; reviews 2, 3, 4). Short address "Ruko New East No. 60, Jl. Jakarta Garden City Boulevard, Cakung" (listing). Buttons Petunjuk Arah and Telepon. Hours cell: live status "Buka sekarang · sampai 21.00" or "Sedang tutup · buka lagi 07.00" (computed in Asia/Jakarta time; no-JS text "Buka setiap hari"), "07.00–21.00", "Setiap hari" (hours). Photo owner-1, the shopfront |
| 2. kopinya bener. | Coffee credibility | Lead: "Specialty coffee, diseduh serius tanpa bikin suasana kaku." (photos; personality from reviews 2, 3, 4). **Can:** photo owner-2, "Si biru, dalam kaleng 2sons." (photos) + `[MOCKUP]` "Kalengnya juga bisa dibawa pulang." **Espresso:** drawing, "Minuman espresso" (brief §2), "Kopi yang dipuji di hampir semua ulasan." (reviews 2, 3, 4), `[MOCKUP]` "mulai Rp 25rb". **Manual brew:** drawing, `[MOCKUP]` "Manual brew (V60)", `[MOCKUP]` "Biji Indonesia atau biji tamu, bergantian.", `[MOCKUP]` "mulai Rp 35rb" |
| 3. bukan cuma kopi. | Food | Wall text: "Pilihan makannya banyak, bukan cuma camilan teman ngopi." (review 2). **Beef cheese melt sandwich:** drawing, "Sandwich yang dipuji di ulasan Google." (review 1), `[MOCKUP]` "Sandwich & makanan berat mulai Rp 45rb". **Egg toast:** drawing, `[MOCKUP]` "Roti telur & keju", `[MOCKUP]` "Sarapan dari jam 07.00, teman kopi susu pagi." |
| 4. betah lama di sini. | The room and why people stay | Lead: `[MOCKUP]` "Pagi jam tujuh buat kopi bawa pulang, sore panjang buat laptop atau mahjong." `[MOCKUP]` "Rak, piringan hitam, dan karya seninya ikut bikin betah." Reasons: "Staf yang ramah dan sigap membantu" (reviews 3, 4); "Toilet bersih" (review 3); "Enak buat kerja, alias WFC" (review 1); "Main mahjong bareng teman" (review 5); "Santai buat nongkrong" (reviews 1, 2, 4); `[MOCKUP]` "Wi-Fi dan colokan di meja". Photos with captions: owner-4 "Kursi navy dan hijau sage, meja bundar, dan papan bergambar di dinding."; owner-3 "Rak menyala: piringan hitam, buku, turntable, figur beruang."; owner-5 "Meja kayu panjang untuk datang bareng-bareng." (photos) |
| 5. kata mereka. | Proof | "5,0 di Google, dari 35 ulasan" (listing). Themes, paraphrased, never quoted or named: "Kopinya enak, dan dibuat dengan benar." (reviews 2, 3, 4) · "Stafnya ramah dan sigap membantu." (reviews 3, 4) · "Suasananya santai, enak buat WFC atau sekadar nongkrong." (reviews 1, 2, 4) · "Pilihan makannya banyak, dan sandwich beef cheese melt-nya dapat pujian." (reviews 1, 2) · "Toiletnya bersih, dan itu disebut penting." (review 3) · "Ada yang datang untuk main mahjong bareng teman." (review 5) |
| 6. kunjungi kami. | Get there | "Ruko New East, Jl. Jakarta Garden City Boulevard No. 60, Cakung Timur, Cakung, Jakarta 13910" (listing). "Setiap hari, 07.00–21.00" (hours). Petunjuk Arah button. Google Maps embed of the address |
| 7. hubungi kami. | Close with action | "0815-9133-886" (listing) as a `tel:` link. `[MOCKUP]` "Telepon atau WhatsApp untuk tanya meja dan pesanan." Buttons Telepon, `[MOCKUP]` WhatsApp, Petunjuk Arah. Footer (small): "2Sons Coffee · Ruko New East No. 60, JGC Boulevard · Setiap hari 07.00–21.00 · Draf mockup" |
| Meta | Title and description | Title "2Sons Coffee · Specialty coffee di JGC Boulevard". Description "Specialty coffee, makanan, dan ruang yang santai di Ruko New East, JGC Boulevard, Cakung. Buka setiap hari 07.00–21.00." (listing, hours) |

Voice: `[MOCKUP]` casual Jakarta-cafe Indonesian that addresses the reader as "kamu", with coffee terms like WFC and manual brew left in English. Do not feature kopi gula aren (brief note on review 1).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, multiple pages, a redrawn logo (the
name is set in Jost until the owner sends the logo file), real photos of drinks or food (drawings
stand in until the owner provides them). The only real photos are the owner's own uploads
(owner-1 to owner-5).

## Open questions for the owner
From the brief's `[MOCKUP]` lines (one each, yes/no):
1. Is it right to describe 2Sons as just as easy at 07.00 for a quick takeaway as for a long afternoon with a laptop or a game of mahjong?
2. Is it right to say the shelves, records and art are part of why people stay?
3. Do early commuters and JGC residents come in for coffee from 07.00?
4. Do you serve manual brew (V60) with a rotating Indonesian or guest bean?
5. Do you serve breakfast from 07.00, for example an egg-and-cheese toast with a morning kopi susu?
6. Are the 2Sons cans also sold as a takeaway range?
7. Are these example prices close: coffee from Rp 25rb, manual brew from Rp 35rb, sandwiches and mains from Rp 45rb?
8. Is a casual voice that calls the reader "kamu" right for 2Sons?
9. Are there Wi-Fi and power outlets at the tables?
10. Does 0815-9133-886 also take WhatsApp messages for orders and table questions?

From the brief's "Ask the owner" and the page's placeholders:
11. What is the blue drink in the can called? (The page currently says "si biru".)
12. Is mahjong available at the shop, or do guests bring their own?
13. Is there a story behind the name or the wall sign of two figures at a table that you'd like on the page? (Nothing is written about it now.)
14. Can you send the 2sons logo file? (The name is set in a similar typeface for now.)
15. Can you send photos of your coffee and food to replace the drawings?
16. The shopfront photo shows opening-day flower stands. Would you like to use a newer one?
