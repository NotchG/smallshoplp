# PRD: Ika Kopi mockup site

## Goal
A one-page mockup that makes Ika Kopi's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours, the draft banner and `lang="id"`.
Page name "Ika Kopi"; "Ciracas" appears only in the location line and address (brief).

## The shop in one paragraph
Ika Kopi is a bright, spacious coffee shop at Jl. Raya Ciracas No.3, Jakarta Timur, open every
day 07.00–23.00. It takes its coffee seriously: manual brew from single-origin beans comes in a
glass carafe on a wooden tray branded with the logo, with a printed card describing the bean
(one was Arabica Pangalengan from West Java), and there is an espresso bar, bagged beans on the
counter and a pastry display case. It is just as good for a long work session: a properly cold
room, roomy tables big enough for a laptop and a meal, a plug at every table, cushioned chairs
and a spotless toilet. Remote workers, students, people who come for the coffee and
price-conscious locals come; reviewers call the prices reasonable. 4,8 from 217 Google reviews.
The menu is small for now. Motorbike parking is easy, car parking is tight.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Remote worker or student (reviews 1) | know if they can work there for hours | read "sejuk, lega, colokan di setiap meja" in the first screen, then the full workspace list |
| Coffee person (reviews 2, 3) | see what they brew and how | see the bean card (origin, process, altitude, taste notes, brew methods) and the coffee list |
| Price-conscious local (reviews 1, 5) | check prices | see an example price next to every menu item [MOCKUP prices] |
| Someone on a motorbike or passing on Jl. Raya Ciracas | find it and check it's open | see today's hours and "Petunjuk Arah" in the first screen; the parking note by the map |
| Small group or study group [MOCKUP] | know if there's room for several people | read about the long table by the bar and message the shop |

## Primary actions
1. Petunjuk Arah (Google Maps link from raw.json)  2. WhatsApp ([MOCKUP] the number takes WhatsApp)  3. Telepon 0852-8584-4007
The first screen shows action 1 without scrolling, on a phone (390 × 844).

## Sections and content
| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Mark it as a draft | "Draf situs untuk ditinjau pemilik Ika Kopi. Beberapa detail masih contoh sampai Anda konfirmasi." (project rule); `noindex` |
| Hero | Recognition plus the first action | "Ika Kopi" + "Keharuman & Cita Rasa" (photos); location line "Kopi pilihan di Jl. Raya Ciracas" [MOCKUP]; "Ruang sejuk dan lega, colokan di setiap meja." (reviews 1, copy [MOCKUP]); "Buka hari ini 07.00–23.00" (hours); Petunjuk Arah + WhatsApp; owner-1.jpg (photos.json). Desktop header: address + anchors Kopi · Ruang kerja · Menu · Lokasi |
| Kopi kami | Prove the coffee is taken seriously | Manual brew in a glass carafe on a branded wooden tray with a printed bean card (photos); bean card: Arabica Pangalengan, Jawa Barat, natural process, 1.500 mdpl, light to medium roast, berry, floral, sweet aftertaste, for pour over or French press (photos); espresso bar with grinder and machine (photos); plain-words brew notes for pour over and French press (copy [MOCKUP]); coffee list with prices: manual brew from a rotating bean list Rp 28rb–35rb, Es Kopi Susu Ika with palm sugar Rp 22rb, Americano Rp 22rb, Cappuccino or Caffè Latte Rp 28rb [MOCKUP] |
| Nyaman untuk kerja | Win the work crowd | Cold AC, a plug at every table, big tables that aren't crammed together, cushioned chairs, a clean toilet (reviews 1); open 07.00–23.00 every day (hours); long table by the bar for groups [MOCKUP] (the table is in the photos, its use is a guess) |
| Menu andalan | Show food and non-coffee as real items | Rice Bowl Chicken Katsu Rp 35rb (dish from photos; name and price [MOCKUP]); iced orange drink in a stemless glass (photos), named "Es Teh Persik", Rp 22rb–28rb [MOCKUP]; pastry from the display case (photos): croissant or banana bread Rp 18rb–25rb [MOCKUP]; also matcha latte, chocolate Rp 22rb–28rb [MOCKUP]; morning set before 10.00 (coffee + pastry) Rp 35rb [MOCKUP]. Never "menu lengkap" (reviews 1) |
| Bawa pulang biji kopi | Beans to take home (whole section [MOCKUP]) | Bagged beans on the counter (photos); 200 g bags Rp 85rb–120rb [MOCKUP]; "Tanya via WhatsApp" |
| Kata mereka | Social proof without quotes | "4,8 dari 217 ulasan Google" (listing); paraphrased, unnamed: cold and roomy, good for long work (reviews 1); good coffee (reviews 2, 3); fair, affordable prices (reviews 1, 5); very clean, toilet included (reviews 1); note "Rangkuman ulasan Google, bukan kutipan langsung" |
| Kunjungi kami | Get them there | Map embed; Jl. Raya Ciracas No.3, RT.4/RW.3, Ciracas, Kec. Ciracas, Jakarta Timur 13740 (listing); "Senin–Minggu 07.00–23.00 · buka setiap hari" (hours); "Parkir motor mudah, parkir mobil terbatas" (reviews 1); Petunjuk Arah |
| Hubungi kami | Close with the actions | Short line (copy [MOCKUP]); WhatsApp [MOCKUP], Telepon 0852-8584-4007, Petunjuk Arah (listing) |
| Footer | Sign-off | Ika Kopi · Keharuman & Cita Rasa; short address; hours; draft note again |

Never on the site: certifications (framed certificates in photos), free parking, car parking promises,
"menu lengkap", the number of toilets, customer photos, reviewer names, verbatim quotes, any claim
about other outlets.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. Also: live open/closed status (hours are the
same every day, so static text is always correct), WhatsApp ordering flows, a full menu.

## Open questions for the owner
1. Can customers reach you on WhatsApp at 0852-8584-4007?
2. Is "Kopi pilihan di Jl. Raya Ciracas" a good line under your name?
3. Is it fine for the site to talk to visitors as "kamu"? (If not, we switch to "Anda".)
4. Is the page wording (headings, short descriptions, the brew-method notes) right for you?
5. Is Arabica Pangalengan still on your bean list, and may we show its card as the example?
6. Do you offer manual brew (V60 or French press) from a rotating bean list at about Rp 28rb–35rb?
7. Do you have a house iced milk coffee with palm sugar, and may we call it "Es Kopi Susu Ika" at Rp 22rb?
8. Are Americano Rp 22rb and Cappuccino or Caffè Latte Rp 28rb close to your prices?
9. Is the orange iced drink in your photos a peach tea, and is Rp 22rb–28rb right for non-coffee drinks?
10. Do you serve matcha latte and chocolate?
11. Is the chicken rice bowl called "Rice Bowl Chicken Katsu", at about Rp 35rb?
12. Does the display case hold croissants or banana bread at about Rp 18rb–25rb?
13. Do you have a morning set before 10.00 (coffee + pastry) at about Rp 35rb?
14. Do you sell the bagged beans to take home, in 200 g bags at about Rp 85rb–120rb? (If not, we remove that section.)
15. Is it fine to suggest the long table by the bar for small meetings and study groups?
16. May the site say motorbike parking is easy and car parking is limited?
17. Is the parking free? (The door lettering seems to say "Parkir Gratis"; we leave it off until you confirm.)
18. Are you happy with the logo green as the main colour and the bean-card mustard as the second?

Before pitching (for us, not the owner checklist): confirm Ika Kopi Ciracas is an independent
shop and not one outlet of a chain (brief).
