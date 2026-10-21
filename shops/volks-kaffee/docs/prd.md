# PRD: Volks Kaffee mockup site

## Goal
A one-page mockup that makes Volks Kaffee's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (the maroon
awning with yellow "Volks Kaffee" lettering, the mint gate, B23, their own menu items), and
the checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia throughout (copy, buttons, hours, draft banner), `lang="id"`.
Name always "Volks Kaffee", never "Volks Coffee".

## The shop in one paragraph
Volks Kaffee is a coffee shop in a converted house on a residential block in Cipinang Jaya,
Jatinegara (Blok AA No. B23), open Monday to Saturday 15.30–23.00 and closed on Sunday
(listing, hours). Google sums it up as a mellow late-night spot with inventive coffee drinks
and light cafe food in a cosy space (description). People come with friends, as couples,
alone to relax, or as neighbours and regulars (reviews 1–5). They praise friendly baristas
who learn your order after a few visits, know their coffee and will adjust a drink to your
taste (review 1); fair prices and a good choice of coffee and snacks (reviews 1, 5); the cosy
terrace, good background music and the cats (reviews 3, 5); and specific items: Ice Choco
Mint and Marshmallow Brownie (review 4), plus the Smoked Beef Sandwich (photos). It rates
4.6 from 501 Google reviews (listing). It can be a bit noisy for quiet work (review 1), so it
is pitched as a hangout. Reviews are old (2019–2022), so named items are confirmed with the owner.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Neighbour or regular, late afternoon, on a phone | check it's open tonight | see today's hours (or "tutup" on Sunday) in the first screen |
| Friends planning to nongkrong | decide where to go tonight | see the vibe and signature items, share directions in one tap |
| First-timer on a motorbike | find a house inside a residential block | get directions, see "Blok AA No. B23", know what the front looks like and where to park |
| Coffee lover | know if the coffee is taken seriously | read that baristas talk beans and tune drinks to taste |
| Couple or someone coming alone | picture an evening there | see the terrace, music and cats described |
| The owner (pitch) | recognise their shop | see their awning colours and lettering, their items, their address and hours, correctly |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp ([MOCKUP] assumes 0878 takes WhatsApp)  3. Telepon
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | flag the draft | "Draf mockup untuk Volks Kaffee. Beberapa detail masih contoh sampai dikonfirmasi pemilik." + `noindex` (CLAUDE.md rule 7) |
| Hero | name, today, act | "Volks Kaffee" (listing). [MOCKUP] "Kopi racikan sendiri, dari sore sampai malam, di Cipinang Jaya." Today's status: Mon–Sat "Buka hari ini 15.30–23.00", Sunday "Hari ini tutup — buka lagi Senin 15.30" (hours). Buttons "Petunjuk Arah" (listing Maps link), "WhatsApp" ([MOCKUP] WhatsApp on 0878-8864-2785). Illustrated counter with the four items below (see Menu andalan). |
| Menu andalan | show what to order | Intro: inventive coffee drinks and light cafe food at fair prices (description, reviews 1, 5). Featured, illustrated: Ice Choco Mint (review 4), Marshmallow Brownie (review 4), Smoked Beef Sandwich: toasted bread, smoked beef, lettuce, tomato, cheese (photos), Kopi racikan, drinks tuned to taste (description, review 1). [MOCKUP] one-line descriptions for Ice Choco Mint and Marshmallow Brownie. [MOCKUP] prices: Ice Choco Mint Rp 28rb, Marshmallow Brownie Rp 25rb, Smoked Beef Sandwich Rp 35rb, espresso drinks Rp 20rb–32rb. [MOCKUP] full list: Kopi (Espresso, Americano, Cappuccino, Caffe Latte, Es Kopi Susu Gula Aren, Kopi Tubruk, V60); Non-kopi (Chocolate, Matcha Latte, Lychee Tea, plus Ice Choco Mint); Makanan (Kentang Goreng, Roti Bakar, Chicken Wings, Pisang Goreng Keju, plus Smoked Beef Sandwich, Marshmallow Brownie). No prices beyond those listed. |
| Kopi sesuai seleramu | the barista relationship | "Setelah beberapa kali mampir, baristanya sudah hafal pesananmu." Baristas know their coffee, happy to talk beans and brewing, adjust a coffee to your taste (review 1). Order-slip list: "Hafal pesanan langganan", "Paham kopi, senang diajak ngobrol", "Racikan disesuaikan seleramu" (review 1). No names. |
| Suasana | the evening there | [MOCKUP] "Rasanya seperti nongkrong di teras rumah teman — yang kebetulan punya mesin espresso enak." Terrace full of plants, red brick, mixed folding, bamboo and wire chairs (photos). Background music that suits chatting or relaxing alone (review 5). [MOCKUP] the resident cats (review 3), kept flagged until the owner confirms. |
| Kata mereka | proof, paraphrased | "4,6 dari 501 ulasan di Google" (listing). Four paraphrases, no quotes, no names: friendly baristas who know coffee and remember you (review 1); fair prices, good choice of coffee and snacks (reviews 1, 5); cosy, easy to stay a while (review 3); great for hanging out with friends or as a couple (reviews 1, 3, 4). Line "Dirangkum dari ulasan pengunjung di Google." |
| Kunjungi kami | get there | Map embed. "Jl. Cipinang Jaya Blok AA No. B23, Cipinang Besar Selatan, Jatinegara, Jakarta Timur 13410" (listing). Wayfinding: maroon awning with "Volks Kaffee" and B23 on the gate pillar (photos). Hours table: Senin–Sabtu 15.30–23.00, Minggu Tutup (hours). [MOCKUP] "Parkir motor langsung di depan pagar." |
| Hubungi kami | close with actions | "Mampir aja, nanti baristanya hafal pesananmu." (tone line from brief, review 1). Buttons: WhatsApp ([MOCKUP]), Telepon 0878-8864-2785 (listing), Petunjuk Arah (listing). Footer line: name, address, hours. |

Register: [MOCKUP] casual "kamu" throughout; owner may prefer "Anda".

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (illustrations only;
no owner photos exist and customer photos never appear), multiple pages, a live "open now" clock
beyond today's status, any loyalty or promo claims.

## Open questions for the owner
Becomes `owner-checklist.md`.
1. Is "Kopi racikan sendiri, dari sore sampai malam, di Cipinang Jaya" a good line for the top of the page?
2. Can customers reach you on WhatsApp at 0878-8864-2785?
3. Are Ice Choco Mint, Marshmallow Brownie and Smoked Beef Sandwich still on the menu, spelled like that?
4. Is the coffee list right: Espresso, Americano, Cappuccino, Caffe Latte, Es Kopi Susu Gula Aren, Kopi Tubruk, V60?
5. Is the non-coffee list right: Chocolate, Matcha Latte, Lychee Tea?
6. Is the food list right: Kentang Goreng, Roti Bakar, Chicken Wings, Pisang Goreng Keju?
7. Are these example prices close: espresso drinks Rp 20rb–32rb, Ice Choco Mint Rp 28rb, Marshmallow Brownie Rp 25rb, Smoked Beef Sandwich Rp 35rb?
8. Are the short descriptions of Ice Choco Mint and Marshmallow Brownie accurate?
9. Do the cats still live at the shop, and is it fine to mention them?
10. Can customers park motorbikes right at the gate?
11. Is "it feels like hanging out on a friend's terrace that happens to have a good espresso machine" a fair description?
12. Is casual "kamu" right for the site, or do you prefer "Anda"?
13. Is it fine that the page describes the baristas as remembering regulars and tuning coffee to taste (from a 2019 review)?
14. Would you send your own photos (the terrace at night, the awning, the drinks and food) to replace the drawings?
15. Not on the site, for our notes: are students and young workers from around Cipinang and Jatinegara a big part of your crowd?
