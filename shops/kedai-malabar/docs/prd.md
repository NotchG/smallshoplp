# PRD: Kedai Malabar mockup site

## Goal
A one-page mockup that makes Kedai Malabar's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the brick wall with
"KEDAI MALABAR / ROTI & KOPI" in white capitals, the black-and-white awnings, the string lights),
and the checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia throughout (`lang="id"`), register "kamu" [MOCKUP].

## The shop in one paragraph
Kedai Malabar is a neighbourhood "roti & kopi" cafe on Jl. Cipinang Jaya Raya No.27B in
Jatinegara, Jakarta Timur, dressed like a small European street bistro: red brick, white arched
windows, black-and-white striped awnings and string lights over the terrace (photos). It's
easy-going and affordable (reviews 1, 2, 4), with indoor, outdoor, smoking and non-smoking seating
(reviews 2, 3), easy parking beside the seating (reviews 1, 3), friendly staff and decoration guests
like (review 3). The outdoor terrace is at its best at night (review 1). People come for thick toast
such as Roti Nougat on whole wheat bread, iced Kopi Tubruk (review 1), toast loaded with chocolate
and peanuts, hot milk coffee and lontong sayur (photos). Open every day, until 22.00, and until
23.00 on Friday and Saturday (hours). 4.6 on Google from 985 reviews (listing).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local nearby, after work (reviews 1, 2, 4) | know if it's open right now and how late | see "Buka sekarang · hari ini 10.00–22.00" in the first screen |
| Friends planning an evening out (review 1) | check the terrace, smoking area, closing time | find "Malam di Malabar" with terrace, smoking/non-smoking, open until 22.00/23.00 |
| Mixed group of smokers and non-smokers (reviews 2, 3) | confirm separate areas | read it as one plain line, no hunting |
| Someone driving or riding in (reviews 1, 3) | get directions, know parking is easy | tap "Petunjuk Arah" in the first screen; see "Parkir gampang" |
| First-timer comparing cafes | see what to order and the price level | see 5 drawn dishes and a short menu with example prices |
| Lunch visitor ([MOCKUP] audience) | check midday opening | see that Rabu opens 12.00 and Jumat 13.00, clearly |

## Primary actions
1. Petunjuk Arah (Google Maps directions)  2. WhatsApp [MOCKUP] / Telepon 0816-833-844  3. Lihat menu (scroll to Menu andalan)
The first screen shows action 1 without scrolling, on a phone (390 × 750 visible).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Night band + awning | Open the page as the shop front at night; carry the signature moment | String lights on a dark band (photos), striped awning valance (photos). Decorative, `aria-hidden` |
| Hero | Recognition in five seconds, today's hours, action 1 | H1 "Kedai Malabar" set as the façade sign, subline "Roti & Kopi" (listing, photos); line "Roti hangat dan kopi tubruk di Cipinang Jaya, buka sampai malam." [MOCKUP]; live status "Buka sekarang · hari ini 10.00–22.00" from the weekly hours (hours); buttons "Petunjuk Arah", "WhatsApp" [MOCKUP: number takes WhatsApp]; owner-1.jpg cropped into an arched window (owner photo) |
| Menu andalan | Show real products, price level, the pairing guests mention | 5 drawn dishes on table tiles: Roti Nougat, roti gandum (review 1); Es Kopi Tubruk (review 1); roti bakar with chocolate sprinkles, chocolate sauce and crushed peanuts (photos; name "Roti bakar coklat kacang" [MOCKUP]); hot milk coffee in a patterned cup (photos; name "Kopi susu panas" [MOCKUP]); Lontong sayur with chicken, egg, sambal, krupuk (photos). Intro line on the Roti Nougat + Es Kopi Tubruk pairing (review 1). Short menu: roti bakar flavours, coffee, non-coffee, rice and noodles [all MOCKUP lists]; Roti keju "bisa setengah porsi" (review 2); example prices for 6 items only [MOCKUP]; note "Harga contoh" |
| Malam di Malabar | Sell the evening: terrace, seating choice, parking, late hours | Terrace under string lights and awnings (photos; review 1); separate smoking and non-smoking areas, plus outdoor seats (reviews 2, 3); parking right beside the seating (reviews 1, 3); open until 22.00, Fri–Sat 23.00 (hours). One line of section copy [MOCKUP] |
| Kata mereka | Social proof without quotes or names | "4,6 dari 985 ulasan di Google" (listing); 4 paraphrased themes: affordable (reviews 1, 2, 4), roomy with nice decoration (reviews 1, 3), terrace best at night (review 1), friendly, helpful staff (review 3). Note "Dirangkum dari ulasan Google". No stars, no names |
| Kunjungi kami | Find it and plan the visit | Address (listing); full week hours with Rabu 12.00 and Jumat 13.00 openings marked (hours); today's row highlighted; map embed and "Petunjuk Arah"; easy parking (reviews 1, 3) |
| Hubungi kami | Close with every way to reach them | WhatsApp [MOCKUP], Telepon 0816-833-844 (listing), Petunjuk Arah; "Bisa bayar non-tunai" (review 3); Instagram placeholder [MOCKUP]; line "Mampir sebentar, pulangnya nanti saja." (brief tone) |
| Footer + draft banner | Honesty about the mockup | "Ini contoh tampilan, belum situs resmi Kedai Malabar"; name, address, `noindex` |

Not on the page (kept for the checklist only): the kedai's idea line, the laptop and family
audiences, Java Malabar beans, and a second outlet card. These are all [MOCKUP] lines in the
brief that would read as claims if shown.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also out: a second-outlet card until the owner
asks for it; customer photos (photo-1 to photo-3) in any form.

## Open questions for the owner
1. Should the page cover only this shop on Jl. Cipinang Jaya Raya (not Kedai Malabar 2 Cipinang Muara)? If both, can you send the second address and hours?
2. Does 0816-833-844 take WhatsApp messages?
3. Do you have an Instagram account we should link? (Please send the handle.)
4. Is the hero line "Roti hangat dan kopi tubruk di Cipinang Jaya, buka sampai malam." right for you?
5. Is "warm toast and an honest cup of coffee, at prices that let you come back often" how you'd describe the kedai's idea?
6. Are the roti bakar flavours right: Coklat Keju, Srikaya, Selai Kacang, Nougat?
7. Is the coffee list right: Kopi Tubruk (panas/es), Kopi Susu Malabar, Americano, Cafe Latte, Cappuccino? Do you now offer more Indonesian coffees we should list?
8. Is the non-coffee list right: Teh Tarik, Es Teh Manis, Coklat?
9. Are the rice and noodle dishes right: Lontong Sayur, Nasi Goreng Malabar, Indomie Goreng Telur?
10. Are these example prices close: Roti Nougat Rp 22rb, Roti Bakar Coklat Keju Rp 20rb, Kopi Tubruk Rp 12rb, Es Kopi Susu Malabar Rp 20rb, Cafe Latte Rp 25rb, Lontong Sayur Rp 25rb?
11. Is the chocolate, sprinkle and peanut toast called "Roti bakar coklat kacang"? If not, what's its menu name?
12. Is the hot milk coffee in the patterned cup called "Kopi susu panas"? If not, what's its menu name?
13. Are the drawings of the five dishes OK for now? Would you send your own photos of them to replace the drawings?
14. Do you have the "Malabar" script logo (from the black wall) as a file? The mockup uses a similar stand-in script.
15. Do you serve Java Malabar beans? (The page doesn't mention it unless you say yes.)
16. Is "kamu" the right tone, or do you prefer "Anda"?
17. Is it right to say the terrace is for evening hangouts with friends, and that daytime laptop workers and weekend families come in? (Not shown on the page; it guides the copy.)
18. Are the black-and-white awning stripe and the black-and-terracotta tile pattern good choices as decoration?
19. Do you still accept cashless payment? (A review from a few years ago says so.)
20. Does the directions pin take people to the right entrance and parking?
