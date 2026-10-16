# PRD: Nadine Kitchen mockup site

## Goal
A one-page mockup that makes Nadine Kitchen's owner say "that's us" and want it.
Success for the mockup: the owner recognises their shop within five seconds (their own cakes,
the shop name spelled the way they spell names on cake boards) and the checklist questions
are few enough to answer in one conversation (11 yes/no questions, below).

## The shop in one paragraph
Nadine Kitchen is a custom birthday-cake maker in a side lane of Duren Sawit, Jakarta Timur
(Jl. Rawa Domba Gg. Buntu No. 24A, off Jl. Swadaya Raya), open every day 08:00–17:00 and rated
5.0 from 257 Google reviews. Every cake in the owner's photos is built for one child's party:
their name, their age, their favourite thing, in tall single-tier cakes with hand-modelled
fondant figures (cats, a teddy bear, jungle animals, a mermaid), rainbow stripes, ombré cream
and piped rosettes, plus a split two-theme cake for two children. Parents praise the taste,
the cute and very detailed decoration, prices that feel low for a cake that tall and big, and
a friendly seller; one parent ordered the day before and still got a cake that made their
son's party festive. (All from brief.md.)

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| Parent planning a child's party (main) | see if their child's theme is something Nadine Kitchen makes, and how to order | see real cakes by theme in the first two scrolls; start a WhatsApp order from the first screen |
| Parent in a hurry (party tomorrow) | know if a short-notice order is possible | read the lead-time note beside the order steps; reach WhatsApp or the phone in one tap |
| Budget-conscious parent | get a rough price before asking | see "mulai dari" prices next to drawn-to-scale sizes |
| Parent picking up an order | find the gang and know when it's open | read the address with its landmark, the hours, a map and a directions link |
| The owner (pitch audience) | recognise their shop | see their own name, their own cakes and their Instagram handle without scrolling far |

## Primary actions
1. Pesan via WhatsApp (wa.me link to 0857-1112-5253 with a short prefilled greeting)
2. Lihat galeri (jump to the gallery)
3. Petunjuk arah / Telepon (Google Maps link from the listing; `tel:` link)

The first screen shows action 1 without scrolling, on a phone (390 × 844).

## Sections and content
All copy in Bahasa Indonesia, `lang="id"`. Prices written as "Rp 250rb". Copy below is the
draft the builder puts in `content.ts`; wording may be tightened, facts may not change.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Mark the page as a draft | "Draf mockup untuk ditinjau pemilik. Belum dipublikasikan." (CLAUDE.md rule 7) |
| Hero | Recognition + first action | H1 "Nadine Kitchen" set as fondant name letters (listing). Line: "Kue ulang tahun custom dari Duren Sawit" (brief: Page sections). "Buka setiap hari 08.00–17.00" (hours). Buttons "Pesan via WhatsApp" ([MOCKUP] that the number takes WhatsApp orders) and "Lihat galeri". "5,0 dari 257 ulasan Google" (listing). Photo owner-5 (teddy bear cake, date stamp cropped), caption "Beruang & pelangi, ulang tahun ke-1" (photos). |
| Galeri kue | Prove the craft with real cakes | Intro "Tema favorit si kecil, jadi kue ulang tahunnya." (brief: Tone of voice) and "Figur fondant dibentuk tangan, sampai kumis kucing dan sisik putri duyungnya." (brief: Signature products, photos). Seven owner photos with theme + detail captions: owner-8 "Dunia laut", owner-4 "Hewan lucu, ulang tahun ke-1", owner-7 "Pastel & awan, ulang tahun ke-7", owner-2 "Pelangi", owner-9 "Dua tema, satu kue", owner-6 "Lintasan balap, ulang tahun ke-3", owner-3 "Pahlawan super, ulang tahun ke-7" (photos). No child names, no character or toy brand names. Closing card: "Tema si kecil belum ada di sini? Kirim foto referensinya." + "Kirim lewat WhatsApp" ([MOCKUP] WhatsApp). |
| Cara pesan | Make ordering feel easy; give the working order form | Steps (brief: Page sections): 1 "Kirim tema & foto referensi" ([MOCKUP] via WhatsApp); 2 "Pilih ukuran & rasa"; 3 "Tentukan tanggal" with note "Idealnya H-3. Butuh H-1? Tanyakan dulu, ya." ([MOCKUP] lead time; review 5 shows a next-day order once worked); 4 "Konfirmasi & DP" ([MOCKUP] deposit step); 5 "Ambil di Duren Sawit". "Kartu pesanan": four fields (Nama si kecil, Ulang tahun ke-, Tema favorit, Tanggal acara), a live preview of the name and age in fondant letters, and "Kirim lewat WhatsApp", which opens WhatsApp with the filled-in text. Nothing is stored or sent anywhere else. ([MOCKUP] WhatsApp, "Kak" register) |
| Ukuran & harga | Rough price before asking | All [MOCKUP] (brief: Signature products): "Kue karakter Ø 16 cm, mulai Rp 250rb"; "Kue karakter Ø 20 cm, mulai Rp 350rb"; "Kue 2 tingkat, mulai Rp 650rb"; "Cupcake karakter, Rp 15rb/pcs, min. 12". "Pilihan rasa": bolu vanila, cokelat, pandan, red velvet, rainbow cake. Each size drawn as a flat side-view silhouette to scale. |
| Kata mereka | Social proof, honestly | "5,0 dari 257 ulasan Google" (listing). Paraphrases, no names, no quotation marks (CLAUDE.md rule 6): (review 5) "Seorang orang tua memesan sehari sebelum acara dan tetap dilayani dengan baik. Kuenya tinggi dan besar, detail custom-nya sangat rinci, rasanya enak, dan harganya dinilai murah untuk kualitas segitu. Pesta ulang tahun anaknya jadi meriah." (review 4) "Pembeli lain menyebut kuenya enak, bentuknya lucu, harganya terjangkau, dan penjualnya ramah." (reviews 1–3) "Ulasan singkat lainnya memuji pelayanannya dan merekomendasikannya." Label "Diringkas dari ulasan Google". Link "Lihat di Google Maps" (listing URL). |
| Kunjungi kami | Find the place, pick up | Address "Jl. Rawa Domba Gg. Buntu No. 24A, RT 02/RW 07, Duren Sawit, Jakarta Timur 13440" and "Patokan: masuk dari Jl. Swadaya Raya" (listing). "Setiap hari 08.00–17.00" (hours). Sub-heading "Ambil pesanan di sini" ([MOCKUP] pickup framing). "Butuh diantar? Tanyakan saat pesan." ([MOCKUP] delivery). Map embed + "Petunjuk arah" (listing `googleMapsUri`). Photo owner-1 (the display chiller with four finished cakes), caption "Kue-kue yang siap diambil" (photos). |
| Hubungi kami | Close with every contact route | Lead "Mau tema apa, Kak?" ([MOCKUP] "Kak" register). "Chat atau telepon 0857-1112-5253" (listing). Buttons: WhatsApp ([MOCKUP]), Telepon, Instagram @nadine.kitchen.3701 (photos: owner-8). |
| Footer | Sign-off | "Nadine Kitchen · Cake ulang tahun custom · Duren Sawit, Jakarta Timur" (listing, photos.json) and the draft note. |

Meta: title "Nadine Kitchen · Kue Ulang Tahun Custom di Duren Sawit"; description "Kue ulang
tahun custom dengan figur fondant buatan tangan, dari Duren Sawit, Jakarta Timur. Buka setiap
hari 08.00–17.00." `noindex` on.

Left out on purpose, to keep the checklist short: the [MOCKUP] mini cakes and snack boxes, and
the [MOCKUP] list of nearby neighbourhoods. Never on the page: "halal" or any certification,
years in business, staff or owner names, star icons or a star row.

## Out of scope
Online ordering, booking backends, CMS, accounts, analytics, real photos (placeholders only
unless the owner provided them), multiple pages. The "Kartu pesanan" is not an order backend:
it only builds a WhatsApp link in the browser. Customer photo photo-1 is never used.

## Open questions for the owner
Becomes `owner-checklist.md` (in Indonesian, for the owner):
1. Apakah pesanan bisa dikirim lewat WhatsApp ke 0857-1112-5253?
2. Apakah Nadine Kitchen lebih ke pesan dulu lalu diambil (bukan toko dengan kue siap beli di etalase)?
3. Boleh kami menyapa pembeli dengan "Kak"? (Kalau tidak, kami pakai "Anda".)
4. Apakah pilihan rasanya bolu vanila, cokelat, pandan, red velvet dan rainbow cake?
5. Apakah harga contoh ini mendekati: Ø 16 cm mulai Rp 250rb, Ø 20 cm mulai Rp 350rb, 2 tingkat mulai Rp 650rb?
6. Apakah ada cupcake karakter, sekitar Rp 15rb per pcs, minimal 12?
7. Apakah idealnya pesan H-3, dan pesanan H-1 bisa ditanyakan dulu?
8. Apakah ada DP saat konfirmasi pesanan?
9. Apakah kue bisa diantar?
10. Boleh foto kue yang memuat nama anak pelanggan tampil di situs?
11. Boleh foto kue dengan karakter kartun atau mainan bermerek tampil, atau hanya desain orisinal (kucing, beruang, putri duyung)?
