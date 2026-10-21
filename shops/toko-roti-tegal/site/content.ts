// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Toko Roti Tegal",
  type: "Toko roti",
  address: "Jl. Matraman Raya No. 68, Kebon Manggis, Matraman, Jakarta Timur 13150",
  addressShort: "Jl. Matraman Raya No. 68",
  phone: "(021) 8580766",
  phoneHref: "tel:+62218580766",
  mapsUrl: "https://maps.google.com/?cid=458563842701889531",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Toko%20Roti%20Tegal%2C%20Jl.%20Matraman%20Raya%20No.68%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,4", count: 305 },
  // [MOCKUP] No WhatsApp number yet. When the owner gives one, set it here
  // (e.g. "https://wa.me/62...") and the hero "Telepon" button becomes "WhatsApp".
  whatsapp: null as string | null,
};

export const meta = {
  title: "Toko Roti Tegal · Roti dan kue di Jalan Matraman Raya, Jakarta Timur",
  description:
    "Toko roti di Jl. Matraman Raya No. 68, Jakarta Timur. Roti dalam kantong Tegal, kue tradisional, buka setiap hari.",
};

export const banner =
  "Draf tampilan untuk Toko Roti Tegal. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const labels = {
  skip: "Langsung ke isi",
  directions: "Petunjuk Arah",
  call: "Telepon",
  whatsapp: "WhatsApp",
  todayOpen: "Buka hari ini",
  today: "Hari ini",
  hoursHeading: "Jam buka",
  and: "dan",
  mapTitle: "Peta lokasi Toko Roti Tegal",
  mapLink: "Buka lokasi di Google Maps",
  mapLoading: "Peta Google Maps",
};

// Hours from the listing. dow: 0 = Minggu ... 6 = Sabtu. Order on the page: Senin to Minggu.
export type HoursRow = { day: string; dow: number; periods: string[]; note?: string };
export const hours: HoursRow[] = [
  { day: "Senin", dow: 1, periods: ["07.00–19.00"] },
  { day: "Selasa", dow: 2, periods: ["07.00–19.00"] },
  { day: "Rabu", dow: 3, periods: ["07.00–19.00"] },
  { day: "Kamis", dow: 4, periods: ["07.00–19.00"] },
  { day: "Jumat", dow: 5, periods: ["07.00–19.00"] },
  { day: "Sabtu", dow: 6, periods: ["07.00–19.00"] },
  { day: "Minggu", dow: 0, periods: ["08.00–13.00", "16.00–19.00"], note: "tutup 13.00–16.00" },
];

// What the hero sticker shows before JavaScript runs (and with JS off).
export const hoursSummary = ["Senin–Sabtu 07.00–19.00", "Minggu 08.00–13.00 dan 16.00–19.00"];

export const hero = {
  tagline: { text: "Roti dan kue rumahan di Jalan Matraman Raya.", mockup: true } as Item,
  buns: [
    { sticker: "kacang", variant: "kacang", label: "Roti kacang dalam kantong Toko Roti Tegal, berstiker kacang" },
    { sticker: "cok ju", variant: "cokju", label: "Roti cokelat keju dalam kantong Toko Roti Tegal, berstiker cok ju" },
  ] as const,
};

export type BunVariant =
  | "cokelat"
  | "cokju"
  | "kacang"
  | "keju"
  | "pisangCokelat"
  | "srikaya"
  | "abon";

export type RotiItem = {
  name: string;
  sticker: string;
  variant: BunVariant;
  price?: string;
  note?: string;
  mockup?: boolean;
  priceMockup?: boolean;
};

export const rotiSection = {
  heading: "Roti kami",
  lead: { text: "Rasa yang sama, dari dulu sampai sekarang.", mockup: true } as Item,
  body: {
    text: "Setiap roti dibungkus satu per satu dalam kantong Toko Roti Tegal, lalu diberi stiker rasa yang ditulis tangan.",
  } as Item,
  trayLabel: "Roti di atas baki",
};

export const roti: RotiItem[] = [
  {
    name: "Roti cokelat",
    sticker: "cokelat",
    variant: "cokelat",
    price: "Rp 8rb",
    priceMockup: true,
    note: "Pelanggan lama bilang rasanya masih sama seperti waktu mereka kecil.",
  },
  { name: "Roti cokelat keju", sticker: "cok ju", variant: "cokju" },
  { name: "Roti kacang", sticker: "kacang", variant: "kacang" },
  { name: "Roti keju", sticker: "keju", variant: "keju", mockup: true },
  { name: "Roti pisang cokelat", sticker: "pisang cokelat", variant: "pisangCokelat", mockup: true },
  { name: "Roti srikaya", sticker: "srikaya", variant: "srikaya", mockup: true },
  { name: "Roti abon", sticker: "abon", variant: "abon", mockup: true },
];

export type KueVariant =
  | "pastel"
  | "risoles"
  | "lemper"
  | "kueLumpur"
  | "dadarGulung"
  | "boluPandanGulung";

export type KueItem = {
  name: string;
  variant: KueVariant;
  price?: string;
  mockup?: boolean;
  priceMockup?: boolean;
  label: string;
};

export const kueSection = {
  heading: "Kue tradisional",
  lead: { text: "Dari etalase kaca di meja kayu panjang kami." } as Item,
  note: { text: "Kue basah mulai Rp 4rb", mockup: true } as Item,
  caseLabel: "Etalase kaca berisi kue",
};

export const kue: KueItem[] = [
  { name: "Pastel", variant: "pastel", price: "Rp 6rb", priceMockup: true, label: "Tiga pastel berlipat di atas baki cokelat" },
  { name: "Risoles", variant: "risoles", mockup: true, label: "Tiga risoles bertabur tepung roti di atas baki" },
  { name: "Lemper", variant: "lemper", mockup: true, label: "Tiga lemper terbungkus daun pisang di atas baki" },
  { name: "Kue lumpur", variant: "kueLumpur", mockup: true, label: "Tiga kue lumpur kuning dalam cup kertas di atas baki" },
  { name: "Dadar gulung", variant: "dadarGulung", mockup: true, label: "Tiga dadar gulung hijau di atas baki" },
  { name: "Bolu pandan gulung", variant: "boluPandanGulung", mockup: true, label: "Tiga potong bolu pandan gulung hijau putih di atas baki" },
];

// The whole section is [MOCKUP].
export const pesan = {
  mockup: true,
  heading: "Pesan kotak kue",
  lead: "Untuk pengajian, ulang tahun, arisan dan rapat kantor.",
  offers: [
    { title: "Kotak kue", text: "Pesan sehari sebelumnya, mulai Rp 20rb." },
    {
      title: "Kue kering hari raya",
      text: "Nastar, kastengel dan putri salju dalam toples dan kotak hadiah, menjelang Lebaran, Natal dan Imlek.",
    },
  ],
  cta: "Telepon untuk pesan",
  sceneLabel:
    "Kotak kue putih berisi pastel, lemper, kue lumpur dan risoles, dengan toples nastar dan dua kotak hadiah segi delapan",
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praiseSection = {
  heading: "Kata mereka",
  ratingValue: "4,4",
  ratingText: "dari 305 ulasan di Google",
  note: "Diringkas dari ulasan pelanggan di Google.",
};
export const praise: Item[] = [
  { text: "Roti cokelatnya dibeli sejak kecil, dan rasanya masih sama sampai sekarang." },
  { text: "Banyak pilihan kue dan roti khas Indonesia, rasanya bikin kangen, harganya wajar." },
  { text: "Tempat legendaris di Matraman untuk beli camilan teman minum kopi atau teh." },
];

export const visit = {
  heading: "Kunjungi kami",
};

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Mau tanya roti hari ini atau pesan kotak kue? Telepon saja.", mockup: true } as Item,
  phoneLabel: "Telepon",
  whatsappNote: { text: "Nomor WhatsApp untuk pesanan menyusul setelah dikonfirmasi.", mockup: true } as Item,
};

export const footer = {
  line: "Toko Roti Tegal · Jl. Matraman Raya No. 68, Jakarta Timur · (021) 8580766",
  draft: "Ini adalah draf tampilan, belum resmi.",
};
