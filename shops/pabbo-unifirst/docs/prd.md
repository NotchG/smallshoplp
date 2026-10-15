# PRD: Pabbo Unifirst mockup site

## Goal
A one-page mockup that makes Pabbo Unifirst's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
Pabbo Unifirst, "Coffee & Social Space", is a coffee shop and cafe in Food Garden, Cakung Timur,
Jakarta Timur, listed as open 24 hours every day at a moderate price level, rated 4.6 on Google
from 328 reviews (listing, hours). It is a big hall with a projection screen, speakers, stage
lights, a disco ball and white line patterns on a black ceiling, furnished with rattan and
pale-wood chairs with cream cushions, round wood tables and burgundy booths; outside is a white
two-storey front with a green roof, palm trees, a red round "P" logo and "UNITE YOUR VIBES" on
the windows (photos). People come with friends for the music, the vibe and the food and drinks,
praise the coffee and say it works as a restaurant too, and come back for the service (reviews
1–5). Dishes seen in photos: nasi goreng with fried egg, kerupuk, tomato, cucumber and lettuce; a
rice bowl of seasoned minced meat and egg; iced milk coffee and a green iced drink in cups printed
with the "P" logo (photos).

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Friends planning where to hang out tonight (reviews 1, 5) | know the vibe and whether there's music | see the hall's night side (ceiling, stage, music) within two scrolls; get directions in one tap |
| Night owl or late-shift worker ([MOCKUP] audience) | check it's open right now | read "Buka 24 jam · setiap hari" in the first screen |
| Someone nearby looking for lunch and coffee | see what they serve and roughly what it costs | see at least 4 actual dishes and drinks with "mulai Rp …" price lines |
| Returning regular (review 3) | call ahead or find the number | tap "Telepon" in the first screen and again at the end |
| Group or organiser ([MOCKUP] hall bookings) | ask about using the hall for a gathering | reach "Tanya jadwal & booking" (call / WhatsApp [MOCKUP]) in the Musik & acara section |
| The owner (real audience of the mockup) | recognise their place | see the name set like the facade sign, the black line ceiling, the red P, their real dishes |

## Primary actions
1. Petunjuk Arah (Google Maps link from the listing)  2. Telepon 0822-9921-7829  3. Tanya jadwal & booking (WhatsApp, [MOCKUP])
The first screen shows action 1 without scrolling, on a phone.

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`. Names stay in English as the shop uses them.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Honest framing | "Draf mockup untuk Pabbo Unifirst, belum situs resmi." (CLAUDE.md rule 7); `noindex` |
| Hero | Recognition + action in 5 s | Name "Pabbo Unifirst" (listing); descriptor "Coffee & Social Space" (listing); "Unite your vibes." ([MOCKUP] tagline from window graphics); "Buka 24 jam · setiap hari" (hours); "Food Garden, Cakung · Jakarta Timur" (listing); buttons Petunjuk Arah (listing maps link) and Telepon (listing); red round "P" badge as a placeholder for the real logo ([MOCKUP] stand-in) |
| Siang ngopi, malam nongkrong | Show the two sides of one place | [MOCKUP] framing and copy. Siang: coffee and rice plates (reviews 1, 2; photos); rattan and wood chairs, round wood tables (photos). Malam: stage lights, projection screen, speakers, disco ball (photos); music and vibe (reviews 1, 5) |
| Menu andalan | Show real products | Kopi & minuman, "kopi mulai Rp 25rb" ([MOCKUP] price): Es Kopi Susu Pabbo ([MOCKUP] name; iced milk coffee in P cup, photos), Matcha Latte ([MOCKUP] name; green iced drink, photos). Makanan, "nasi mulai Rp 35rb" ([MOCKUP] price): Nasi Goreng Pabbo ([MOCKUP] name; fried egg, kerupuk, tomato, cucumber, lettuce, photos), Rice Bowl Daging Cincang ([MOCKUP] name; seasoned minced meat and egg, photos). Camilan malam, "mulai Rp 20rb": Indomie Goreng Telur, Roti Bakar, Kentang Goreng (all [MOCKUP]). Small caption: "Nama menu dan harga masih contoh." |
| Musik & acara | Sell the night and the hall | Stage, projection screen, speakers, stage lights, disco ball (photos); a bossa nova slide seen on the screen (photos), shown as a "layar" card. [MOCKUP]: music nights (akustik, bossa nova), schedule from owner; hall bookable for gatherings and small events. CTA "Tanya jadwal & booking" → WhatsApp ([MOCKUP]) and Telepon |
| Kata mereka | Social proof, honestly | "4,6 di Google · 328 ulasan" (listing). Four paraphrases in reported speech, no names, no verbatim: music and vibe praised (reviews 1, 5); good coffee and good as a place to eat (reviews 1, 2); very good service, people want to come back (review 3); worth a visit (reviews 3, 4) |
| Kunjungi kami | Get them there | Address (listing); "[MOCKUP] di Food Garden JGC"; "Buka 24 jam, setiap hari" (hours); "Harga: menengah" (listing); Google Maps embed; Petunjuk Arah button |
| Hubungi kami | Close with the actions | Phone 0822-9921-7829 (listing); Telepon, WhatsApp ([MOCKUP]), Petunjuk Arah; footer: name, descriptor, "Data dari Google Maps", draft note |

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them; none provided, and customer photos are never used), multiple
pages, a real event calendar, the real logo file (placeholder badge only).

## Open questions for the owner
1. Is "Unite your vibes" your line, and may the site use it as the tagline?
2. Is "di Food Garden JGC" the right way to describe where you are?
3. Are you really open 24 hours, every day?
4. Does "siang ngopi, malam nongkrong" (coffee and rice by day, music and hanging out by night) describe Pabbo well?
5. Are the menu names right: "Es Kopi Susu Pabbo", "Matcha Latte", "Nasi Goreng Pabbo", "Rice Bowl Daging Cincang"? Is the green iced drink matcha?
6. Do you serve late-night snacks like Indomie goreng telur, roti bakar and kentang goreng?
7. Are the example prices close: kopi from Rp 25rb, rice plates from Rp 35rb, snacks from Rp 20rb?
8. Do you hold music nights (for example acoustic or bossa nova sets)? Can you share the schedule?
9. Can groups book the hall for gatherings or small events?
10. Does 0822-9921-7829 take WhatsApp messages and event bookings?
11. Is the casual "kamu" tone right for your customers?
12. Are night owls and late-shift workers a big part of your crowd?
13. Is the section copy (siang/malam lines, dish descriptions, music text) OK to use as written?
14. Can you send your logo file to replace the placeholder red "P" badge?
15. Would you like to send your own food and hall photos to replace the illustrations?
