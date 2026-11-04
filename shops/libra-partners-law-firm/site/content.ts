// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Every string follows the PRD's code-of-ethics requirements R1 to R8.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "LIBRA & Partners Law Firm", // listing; spelling to confirm (signboard: "LIBRA & Partner")
  nameLine: "LIBRA",
  nameTail: "& Partners Law Firm",
  type: "Advokat / Konsultan Hukum", // signboard (photos)
  addressLines: ["Jl. Duren No. 31", "Semper Barat, Cilincing", "Jakarta Utara 14130"], // listing
  addressInline: "Jl. Duren No. 31, Semper Barat, Cilincing, Jakarta Utara 14130",
  phoneDisplay: "0811-8421-184", // listing
  tel: "tel:+628118421184",
  whatsapp: { href: "https://wa.me/628118421184", mockup: true },
  mapsUrl:
    "https://maps.google.com/?cid=12254252401907771170&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=LIBRA%20%26%20PARTNERS%20LAW%20FIRM%2C%20Jl.%20Duren%20No.31%2C%20Semper%20Barat&destination_place_id=ChIJgwAdNQAhai4RIqewO6LZD6o",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=LIBRA%20%26%20PARTNERS%20LAW%20FIRM%2C%20Jl.%20Duren%20No.31%2C%20Semper%20Barat%2C%20Cilincing%2C%20Jakarta%20Utara&z=17&output=embed",
  hours: "Buka setiap hari, 24 jam", // listing: open 24 hours, every day (first checklist item)
  rating: { value: "5,0", count: 16 }, // listing
};

export const meta = {
  title: "LIBRA & Partners Law Firm · Advokat / Konsultan Hukum di Cilincing, Jakarta Utara",
  description:
    "Kantor advokat dan konsultan hukum di Jl. Duren No. 31, Semper Barat, Cilincing, Jakarta Utara. Telepon 0811-8421-184.",
};

export const banner = (shopName: string) =>
  `Draf mockup untuk ${shopName}. Beberapa detail masih contoh sampai Anda konfirmasi.`;

// Button and link labels.
export const labels = {
  call: `Telepon ${shop.phoneDisplay}`,
  callShort: "Telepon",
  whatsapp: "WhatsApp",
  directions: "Petunjuk Arah",
  openMaps: "Buka di Google Maps",
  readReviews: "Baca ulasannya di Google Maps",
  mapTitle: "Peta lokasi LIBRA & Partners Law Firm",
  draft: "Draf mockup",
};

// The phrase on the emblem's ring (photos). i = an initial of L-I-B-R-A.
export type Segment = { t: string; i?: boolean };
export const decode: Segment[][] = [
  [{ t: "L", i: true }, { t: "embaga" }],
  [{ t: "Hukum" }],
  [{ t: "I", i: true }, { t: "ndonesia" }],
  [{ t: "B", i: true }, { t: "ebas" }],
  [{ t: "R", i: true }, { t: "ib" }, { t: "a", i: true }],
];
export const decodePlain = decode.map((w) => w.map((s) => s.t).join("")).join(" ");

export const hero = {
  mission: {
    text: "Mendampingi Anda menghadapi masalah utang dan riba, lewat jalur hukum.",
    mockup: true,
  } as Item,
};

export const meaning = {
  heading: "Arti nama LIBRA",
  lead: {
    text: "LIBRA adalah singkatan dari Lembaga Hukum Indonesia Bebas Riba, tulisan yang melingkari lambang di papan nama kantor kami.",
    mockup: true,
  } as Item,
  body: [
    {
      text: "Nama itu juga arah kerja kami: membantu orang biasa menghadapi utang yang memberatkan dan perjanjian yang tidak adil, dengan sabar dan tanpa menghakimi.",
      mockup: true,
    },
    {
      text: "Bagi Anda yang ingin pembiayaan dan kontraknya sesuai prinsip syariah, kami bisa membantu memeriksanya.",
      mockup: true,
    },
  ] as Item[],
};

export type PracticeItem = { title: string; line: string; mockup?: boolean };
export const practice = {
  heading: "Kami bisa membantu",
  intro: {
    text: "Kami mendahulukan masalah utang dan pembiayaan. Ceritakan keadaan Anda; kami jelaskan pilihan yang ada menurut hukum.",
    mockup: true,
  } as Item,
  groups: [
    {
      title: "Utang dan pembiayaan",
      items: [
        {
          title: "Kredit bermasalah dan utang-piutang",
          line: "Menelaah perjanjian Anda dan mencari penyelesaian yang sah, lewat musyawarah atau pengadilan.",
          mockup: true,
        },
        {
          title: "Sengketa leasing kendaraan",
          line: "Termasuk penarikan kendaraan oleh debt collector tanpa prosedur yang sah.",
          mockup: true,
        },
        {
          title: "Pinjol ilegal",
          line: "Pendampingan bila Anda ditagih dengan ancaman atau data pribadi Anda disebar.",
          mockup: true,
        },
        {
          title: "Kontrak bebas riba",
          line: "Memeriksa perjanjian pembiayaan dan usaha agar sesuai prinsip syariah.",
          mockup: true,
        },
      ] as PracticeItem[],
    },
    {
      title: "Perkara lain",
      items: [
        { title: "Keluarga", line: "Perceraian, hak asuh anak, dan waris.", mockup: true },
        {
          title: "Pidana dan perdata",
          line: "Pendampingan perkara pidana dan gugatan perdata umum.",
          mockup: true,
        },
      ] as PracticeItem[],
    },
  ],
  feeNote: {
    text: "Biaya dijelaskan dan disepakati tertulis sebelum pekerjaan dimulai.",
    mockup: true,
  } as Item,
};

// Each step: a bold first clause, then the rest of the sentence.
export type Step = { lead: string; rest: string; mockup?: boolean };
export const collector = {
  heading: "Kalau Anda ditagih debt collector",
  intro: { text: "Langkah pertama yang bisa Anda lakukan:", mockup: true } as Item,
  steps: [
    { lead: "Tetap tenang", rest: " dan bicara dengan sopan.", mockup: true },
    {
      lead: "Simpan semua dokumen:",
      rest: " perjanjian kredit, bukti pembayaran, dan pesan atau surat tagihan.",
      mockup: true,
    },
    {
      lead: "Jangan serahkan kendaraan",
      rest: " tanpa putusan pengadilan atau surat-surat yang sah.",
      mockup: true,
    },
    {
      lead: "Hubungi kami",
      rest: ` di ${shop.phoneDisplay} untuk berkonsultasi.`,
      mockup: true,
    },
  ] as Step[],
  note: {
    text: "Ini informasi umum, bukan nasihat untuk kasus Anda dan bukan jaminan hasil. Setiap perkara berbeda.",
    mockup: true,
  } as Item,
};

// Paraphrased from the five Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Dari ulasan Google",
  ratingLine: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  themes: [
    { text: "Pelayanan yang baik dan memuaskan, menurut beberapa pengulas." }, // reviews 2, 3, 4
    { text: "Ruang kantornya sejuk dan nyaman." }, // review 2
    { text: "Disarankan untuk warga sekitar yang sedang mencari pengacara." }, // reviews 2, 3, 5
    { text: "Seorang pengulas menulis bahwa hati nurani adalah ukuran pengacara yang baik." }, // review 1
  ] as Item[],
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  heading: "Kunjungi kami",
  wayfinding: { text: "Cari papan nama putih LIBRA di atas pintu hijau." } as Item, // photos
  callFirst: { text: "Sebaiknya telepon dulu sebelum datang.", mockup: true } as Item,
};

export const closing = {
  heading: "Hubungi kami",
  line: {
    text: "Telepon atau datang langsung. Kami dengarkan dulu, tanpa menghakimi.",
    mockup: true,
  } as Item,
  signOff: "Hormat kami,",
};

export const footer = {
  disclaimer: {
    text: "Informasi di situs ini bersifat umum dan bukan nasihat hukum.",
    mockup: true,
  } as Item,
};
