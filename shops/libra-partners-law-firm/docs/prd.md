# PRD: LIBRA & Partners Law Firm mockup site

## Goal
A one-page mockup that makes LIBRA & Partners Law Firm's owner say "that's us" and want it.
Success for the mockup: the owner recognises their firm within five seconds (their name, "Advokat /
Konsultan Hukum", and the "Lembaga Hukum Indonesia Bebas Riba" phrase from their emblem), and the
checklist questions are few enough to answer in one conversation.

## The shop in one paragraph
LIBRA & Partners Law Firm is a small advocates' and legal consultants' office ("Advokat / Konsultan Hukum")
at Jl. Duren No. 31, Semper Barat, Cilincing, North Jakarta. It sits behind a white signboard with a round
gold-and-black scales emblem whose ring reads "Lembaga Hukum Indonesia Bebas Riba", the phrase that spells
LIBRA. Google lists it as an attorney, open 24 hours every day, rated 5,0 from 16 reviews. It has no website
and no owner photos. Reviewers, about two years ago, praised good and satisfying service and a cool office.
They recommended it to anyone nearby looking for a lawyer, and one framed conscience as the mark of a
successful lawyer. The practice areas are not in the listing; the emblem points at debt and usury, so the
page leads with those, all `[MOCKUP]`.

## Requirements from the advocates' code of ethics (binding on all copy and design)
From the brief's tone section (Kode Etik Advokat Indonesia, Pasal 4c and Pasal 8). The builder checks every
string in `content.ts` against these before step 11.
- **R1 No outcome guarantees.** Never "pasti menang", "100% berhasil", "dijamin", "pasti beres".
- **R2 No superlatives.** Never "terbaik", "nomor 1", "paling", "terpercaya", "ahli terkemuka".
- **R3 No case results or track record.** No numbers of cases or clients, no wins, no years in business.
- **R4 No client names.** Reviews are paraphrased themes. They are not quoted verbatim, not styled as quotes and
  not attributed to anyone.
- **R5 Never promise debts will be cancelled or erased.** No "utang lunas", "bebas utang", "hapus utang",
  "utang hilang". The firm *mendampingi* and *membantu*; it does not erase.
- **R6 No attention-seeking advertising (Pasal 8).** No flashing or looping effects, pop-ups, countdowns,
  "Konsultasi Gratis!" offers, oversized badges or rating displays.
- **R7 General information is labelled as such.** The debt-collector steps carry "informasi umum, bukan
  nasihat untuk kasus Anda dan bukan jaminan hasil". The footer carries a general-information disclaimer.
- **R8 No staff or owner names or titles, and no registration number,** until the owner confirms them.
- Tone: warm, patient, plain Bahasa Indonesia, addressing the reader as "Anda". There is no judgement about
  debt. A light religious register is allowed in a word, not in decoration.

## Visitors and what they need
| Visitor | Arrives wanting to | The page must let them |
|---|---|---|
| A neighbour in Semper or Cilincing who has just had a debt collector at the door, or threatening pinjol messages, reading on a phone | Know at once whether this office helps with that, and what to do right now | See "masalah utang" in the first screen with a working **Telepon** button; reach the four calm first steps (section 4) in one scroll |
| Someone a neighbour recommended the firm to (reviews 3, 5) | Check it is a real office and find it | See the name, "Advokat / Konsultan Hukum", the address, the Google rating and the map; the "white signboard above a green door" wayfinding line |
| A person who wants financing or a business contract checked for riba | Understand what "bebas riba" means here | Read "Arti nama LIBRA" and the "Kontrak bebas riba" practice item |
| A family with a divorce, custody or inheritance matter, or a criminal or civil case | See whether the firm handles it | Find "Perkara lain" in the practice list, then call |
| The owner, being pitched | Recognise the firm in five seconds | See their name set like their signboard, the emblem's phrase decoded, their own colours (white, navy, gold, shutter green) |

## Primary actions
1. **Telepon** (`tel:+628118421184`)  2. **Petunjuk Arah** (Google Maps directions)  3. **WhatsApp** `[MOCKUP]` (`https://wa.me/628118421184`)
The first screen shows action 1 without scrolling, on a phone. The Telepon button ends at about y = 600 of 844.

## Sections and content
All copy in Bahasa Indonesia. Sources: (listing) = raw.json; (photos) = from the customer photos via the brief;
(reviews n) = paraphrased; `[MOCKUP]` = invented for the mockup, rendered with `data-mockup`.

| Section | Purpose | Content (source or [MOCKUP]) |
|---|---|---|
| Draft banner | Rule 7 | "Draf mockup untuk LIBRA & Partners Law Firm. Beberapa detail masih contoh sampai Anda konfirmasi." |
| 1. Kop (hero) | Recognition + call in one screen | H1 "LIBRA & Partners Law Firm" (listing; spelling to confirm). "Advokat / Konsultan Hukum" (photos). Decode line "Lembaga Hukum Indonesia Bebas Riba" (photos). Mission `[MOCKUP]`: "Mendampingi Anda menghadapi masalah utang dan riba, lewat jalur hukum." This refines the brief's draft so it implies no outcome (R1, R5). Buttons Telepon, WhatsApp `[MOCKUP]`, Petunjuk Arah. Contact block: address and phone (listing). "Buka setiap hari, 24 jam" (listing; first checklist item) |
| 2. Arti nama LIBRA | Explain the name and the mission | Lead: "LIBRA adalah singkatan dari Lembaga Hukum Indonesia Bebas Riba, tulisan yang melingkari lambang di papan nama kantor kami." (fact: photos; wording `[MOCKUP]`). `[MOCKUP]` "Nama itu juga arah kerja kami: membantu orang biasa menghadapi utang yang memberatkan dan perjanjian yang tidak adil, dengan sabar dan tanpa menghakimi." `[MOCKUP]` "Bagi Anda yang ingin pembiayaan dan kontraknya sesuai prinsip syariah, kami bisa membantu memeriksanya." |
| 3. Kami bisa membantu | Practice areas, debt first | Intro `[MOCKUP]`: "Kami mendahulukan masalah utang dan pembiayaan. Ceritakan keadaan Anda; kami jelaskan pilihan yang ada menurut hukum." **Utang dan pembiayaan**, all `[MOCKUP]`: *Kredit bermasalah dan utang-piutang*: "Menelaah perjanjian Anda dan mencari penyelesaian yang sah, lewat musyawarah atau pengadilan." *Sengketa leasing kendaraan*: "Termasuk penarikan kendaraan oleh debt collector tanpa prosedur yang sah." *Pinjol ilegal*: "Pendampingan bila Anda ditagih dengan ancaman atau data pribadi Anda disebar." *Kontrak bebas riba*: "Memeriksa perjanjian pembiayaan dan usaha agar sesuai prinsip syariah." **Perkara lain**, `[MOCKUP]`: *Keluarga*: "Perceraian, hak asuh anak, dan waris." *Pidana dan perdata*: "Pendampingan perkara pidana dan gugatan perdata umum." Fee note `[MOCKUP]`: "Biaya dijelaskan dan disepakati tertulis sebelum pekerjaan dimulai." |
| 4. Kalau Anda ditagih debt collector | Calm first steps; route to a call | Intro `[MOCKUP]`: "Langkah pertama yang bisa Anda lakukan:" Steps `[MOCKUP]`: 1 "Tetap tenang dan bicara dengan sopan." 2 "Simpan semua dokumen: perjanjian kredit, bukti pembayaran, dan pesan atau surat tagihan." 3 "Jangan serahkan kendaraan tanpa putusan pengadilan atau surat-surat yang sah." 4 "Hubungi kami di 0811-8421-184 untuk berkonsultasi." Telepon button. Note (R7) `[MOCKUP]`: "Ini informasi umum, bukan nasihat untuk kasus Anda dan bukan jaminan hasil. Setiap perkara berbeda." |
| 5. Dari ulasan Google | Social proof, within R4 | "5,0 dari 16 ulasan Google" (listing) + link "Baca ulasannya di Google Maps" (listing URL). Paraphrased themes: "Pelayanan yang baik dan memuaskan, menurut beberapa pengulas." (reviews 2, 3, 4). "Ruang kantornya sejuk dan nyaman." (review 2). "Disarankan untuk warga sekitar yang sedang mencari pengacara." (reviews 2, 3, 5). "Seorang pengulas menulis bahwa hati nurani adalah ukuran pengacara yang baik." (review 1). Small note: "Diringkas dari ulasan Google, bukan kutipan langsung." No names, stars row optional and small |
| 6. Kunjungi kami | Find the office | Address "Jl. Duren No. 31, Semper Barat, Cilincing, Jakarta Utara 14130" (listing). Wayfinding "Cari papan nama putih LIBRA di atas pintu hijau." (photos). Hours "Buka setiap hari, 24 jam" (listing). `[MOCKUP]` "Sebaiknya telepon dulu sebelum datang." Map embed + Petunjuk Arah |
| 7. Hubungi kami + sign-off | A real close | `[MOCKUP]` "Telepon atau datang langsung. Kami dengarkan dulu, tanpa menghakimi." Phone 0811-8421-184 (listing), buttons. Sign-off: "Hormat kami," / "LIBRA & Partners Law Firm" / "Advokat / Konsultan Hukum" / short address. Footer `[MOCKUP]`: "Informasi di situs ini bersifat umum dan bukan nasihat hukum." |

Not on the page: the registration number (until confirmed), the "Kantor Perwakilan" banner, any person's
name, any photo, any logo artwork beyond a plain scales mark, years in business, case counts.

## Out of scope
Online booking or consultation forms, WhatsApp chat widgets, CMS, accounts, analytics, an English version,
articles or a legal-info blog, real photos (none provided; customer photos never appear), recreating the
emblem, multiple pages.

## Open questions for the owner
In Bahasa Indonesia, ready for `owner-checklist.md`. Hours first, as the brief asks.
1. Apakah kantor benar menerima telepon atau tamu **24 jam setiap hari**? Jika tidak, jam berapa saja?
2. Apakah nama yang dipakai **"LIBRA & Partners Law Firm"** (seperti di Google), bukan "LIBRA & Partner" (seperti di papan nama)?
3. Apakah nomor **0811-8421-184 bisa dihubungi lewat WhatsApp**?
4. Apakah kalimat utama **"Mendampingi Anda menghadapi masalah utang dan riba, lewat jalur hukum."** sesuai?
5. Apakah **LIBRA tersusun dari L-embaga, I-ndonesia, B-ebas, R-ib-A**, dan penjelasan arti nama di bagian "Arti nama LIBRA" sudah tepat?
6. Apakah **masalah utang dan riba memang fokus utama** kantor?
7. Apakah kantor menangani **semua bidang ini** (coret yang tidak): kredit bermasalah dan utang-piutang · sengketa leasing kendaraan dan penarikan oleh debt collector · pinjol ilegal · pemeriksaan kontrak sesuai syariah · keluarga (cerai, hak asuh, waris) · pidana dan perdata umum?
8. Apakah **biaya selalu dijelaskan dan disepakati tertulis** sebelum pekerjaan dimulai?
9. Apakah **empat langkah "Kalau Anda ditagih debt collector"** boleh ditampilkan sebagai informasi umum?
10. Apakah kalimat **"Sebaiknya telepon dulu sebelum datang"** dan **"Kami dengarkan dulu, tanpa menghakimi"** sesuai?
11. Apakah catatan **"Informasi di situs ini bersifat umum dan bukan nasihat hukum"** boleh dipasang?
12. Apakah petunjuk **"papan nama putih LIBRA di atas pintu hijau"** masih sesuai dengan kantor sekarang?
13. Bisakah Anda mengirim **file logo** (lambang timbangan bulat)? Sementara ini kami pakai tanda timbangan sederhana.
14. Bolehkah **nomor SK Kemenkumham** di papan nama ditampilkan di situs?
15. Apakah spanduk **"Kantor Perwakilan"** di lantai atas milik kantor ini? (Saat ini tidak kami tampilkan.)
16. **Siapa yang boleh disebut namanya** di situs, dengan gelarnya? (Saat ini tidak ada nama.)
17. Bisakah Anda mengirim **foto kantor** (tampak depan, ruang tunggu) untuk dipasang di situs?
