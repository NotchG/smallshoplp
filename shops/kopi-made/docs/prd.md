# PRD: Kopi Made mockup site

## Goal
A one-page mockup that makes Kopi Made's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds, and the
checklist questions are few enough to answer in one conversation.

Site language: Bahasa Indonesia for all copy, buttons, hours and the draft banner, with `lang="id"`.
Menu and dish names stay exactly as the shop writes them ("Es kopimade", "Nasi Goreng Made",
"V60 (Pour Over)", "Vietnam Drip", "Piccolo Latte").

## The shop in one paragraph
Kopi Made is a small, snug coffee house at Jl. Radin Inten II No. 213, Klender, Duren Sawit, on the
main road across from Buaran Plaza and Electronic City. It serves manual brews (AeroPress, V60,
cold brew, French press, Vietnam drip), a full espresso bar, its house iced coffee Es kopimade,
ice blended drinks, thick shakes and other non-coffee drinks, plus light food: Nasi Goreng Made,
Mie Goreng Made, pastas and Pisang Goreng Made. The room is dim and rustic: dark slate walls, a
honey-pine counter with cold drip towers, wooden tables, a long leather banquette, and jars of
beans labelled by origin. People come because it is quiet (no loud live music), not crowded, good
for a few hours of work with fast Wi-Fi, and serious about coffee; one reviewer saw them roast on
site. The carbonara gets singled out as creamy. Open Monday to Saturday 10.00–22.00, closed
Sunday. 4.4 on Google from 577 reviews. (brief.md: listing, hours, description, reviews 1–5, photos)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Local or shopper near Buaran Plaza | know if it's open now and exactly where it is | see today's open/closed state, "seberang Buaran Plaza" and Petunjuk Arah in the first screen |
| Someone looking for a quiet place to work | know it's calm, not crowded, with Wi-Fi | read the "Tempat yang tenang" facts and paraphrased praise |
| Coffee lover | see the brew methods and beans | see the six-cubby brew grid and the origin jars |
| Couple or friends after a calm catch-up | see what's on the menu and roughly what it costs | read the two menu boards with example prices |
| Non-coffee drinker | know there's something for them | find thick shakes and the non-coffee group on the Minum board |

## Primary actions
1. Petunjuk Arah (Google Maps)  2. WhatsApp (needs the owner's number)  3. Telepon (needs the owner's number)
The first screen shows action 1 without scrolling, on a phone.

Directions link: `https://maps.google.com/?cid=8082327129688560767` (from raw.json `googleMapsUri`).
WhatsApp and Telepon render as `data-mockup` buttons that point to `#kunjungi` until a number exists.

## Sections and content
Brief sections 2 + 4 are merged (beans and brew methods are one story: "pick the bean, pick the
brew"), 5 + 6 are merged (the praise is the proof for the quiet room), and 7 + 8 are merged (one
close with map, hours and contact).

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Rule 7 | "Draf mockup untuk Kopi Made. Beberapa detail masih contoh sampai dikonfirmasi." (CLAUDE.md) |
| Hero `#beranda` | Recognition in 5 s, open now, directions | Wordmark "kopimade" as on the sign, accessible name "Kopi Made" (listing, photos). Wordmark set in a stand-in brush script until the owner sends the logo [MOCKUP]. Line "Kopi seduh tenang di seberang Buaran Plaza" (review 2, tone). Today board: open/closed state in Jakarta time, "Senin–Sabtu 10.00–22.00 · Minggu tutup" (hours), "Jl. Radin Inten II No. 213, Klender · seberang Buaran Plaza" (listing, review 2). Buttons Petunjuk Arah + WhatsApp [MOCKUP number]. Background owner-1.jpg, darkened (owner photo). Awning check strip [MOCKUP motif]. |
| Pilih biji, pilih cara seduh `#seduh` | Prove the coffee seriousness | Heading + intro "Pilih biji kopinya, pilih cara seduhnya. Sisanya biar kami yang urus." (brief tone example; implies guests choose the origin [MOCKUP]). Biji: jars labelled by origin, e.g. Sumatra and Bali (photos); roasting on site you can watch (review 5, 2019, confirm still true); beans to take home, 200 g about Rp 85rb [MOCKUP]. Cara seduh grid: AeroPress, V60 (Pour Over), Cold Brew, French Press, Vietnam Drip (review 4, photos), plus the cold drip towers on the bar (photos). One process line per method [MOCKUP copy]. V60 example price Rp 35rb [MOCKUP]. |
| Menu andalan `#menu` | Show what to order and the price feel | Two boards. **Minum**: featured Es kopimade (Rp 28rb [MOCKUP]), Avocado Coffee ice blended (Rp 40rb–45rb [MOCKUP]), Thick Shake "untuk yang tidak ngopi" (review 5); groups Manual Brew, Espresso Bar, Es kopimade (Latte, Mocha, Signature, Bold, also to go), Ice Blended, Non-Kopi (photos). **Makan**: featured Nasi Goreng Made (Rp 38rb [MOCKUP]), Fettuccine Carbonara (Rp 50rb [MOCKUP]; creamy per review 2), Pisang Goreng Made (Rp 25rb [MOCKUP]); groups Nasi & Mie, Pasta, Camilan & Manis incl. Cireng [MOCKUP] (photos). Note: "Menu dibaca dari papan menu di bar" (photos) + "Harga contoh, menunggu konfirmasi" [MOCKUP]. |
| Tempat yang tenang `#tempat` | Sell the room and prove it | Statement on a small, dim, quiet room away from busy Buaran (reviews 1, 3, description). Facts: tanpa live music yang bising (review 1), kecil dan tidak ramai (review 2), Wi-Fi cepat (review 4, 2017, confirm), sofa kulit panjang dan meja kayu (owner-1). "Kata mereka": four paraphrased, unattributed themes: tenang dan tersembunyi dari hiruk-pikuk Buaran (reviews 2, 3); kopi untuk pencinta kopi, ada cold brew (reviews 3, 4); carbonara-nya creamy (review 2); enak untuk kerja, tidak ramai (reviews 2, 4). Rating line "4,4 di Google dari 577 ulasan" (listing). |
| Kunjungi kami `#kunjungi` | Get there, know when, get in touch | Full address + landmark "seberang Buaran Plaza dan Electronic City" (listing, review 2). Week table Senin–Sabtu 10.00–22.00, Minggu tutup, today highlighted (hours). Map embed of the address. Buttons Petunjuk Arah, WhatsApp [MOCKUP number], Telepon [MOCKUP number], Instagram [MOCKUP, only if they have one]. |
| Footer | Close and repeat essentials | Small wordmark, address, hours line, "Draf mockup" note, awning check strip [MOCKUP motif]. |

Not on the page: Balinese story behind the name (unconfirmed), alcohol (brief says don't feature),
the 2021 price range (stale), Caffe Latte example price (no natural spot; dropped).

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages.

## Open questions for the owner
Becomes `owner-checklist.md`. Each is a yes/no.
1. The page uses a stand-in script for the red "kopimade" sign. Can you send your logo file so we can use the real one?
2. Is there a WhatsApp number for questions and orders we can put on the buttons? (Same for a phone number for "Telepon".)
3. Do you have an Instagram account we should link?
4. Are these example prices close: Es kopimade Rp 28rb, V60 Rp 35rb, ice blended Rp 40rb–45rb, Nasi Goreng Made Rp 38rb, Fettuccine Carbonara Rp 50rb, Pisang Goreng Made Rp 25rb?
5. Is the menu on the page still current? (It was read from an undated customer photo of your menu boards.)
6. Is cireng on the menu?
7. Do you sell your beans to take home, around Rp 85rb for 200 g?
8. Do you still roast on site where guests can watch?
9. Can guests choose the bean origin (for example Sumatra or Bali) for their manual brew?
10. Is the Wi-Fi still fast enough to promote for working?
11. Are the short descriptions of each brew method OK?
12. Is it OK to use the black-and-white check from your awning as a design detail?
13. Is the relaxed "kamu" OK, or do you prefer "Anda"?
14. The drinks and dishes are shown as illustrations. Can you send photos of your drinks, the brew bar and the storefront?
15. Should alcohol be mentioned on the site? (It isn't now.)
16. Is there a story behind the name "Made" you'd like on the page? (Nothing is said about it now.)
