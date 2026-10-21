// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) = Google listing, (hours) = opening hours, (reviews n),
// (photos) = what the owner and customer photos show.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Indokopi", // (listing)
  type: "Kedai kopi", // (type: cafe)
  address: "Jl. Jatinegara Timur II No.4b, Rawa Bunga, Jatinegara, Jakarta Timur 13350", // (listing)
  addressLines: ["Jl. Jatinegara Timur II No.4b", "Rawa Bunga, Jatinegara", "Jakarta Timur 13350"],
  phone: "0815-1124-3389", // (listing)
  phoneIntl: "+6281511243389",
  // [MOCKUP] that the number takes WhatsApp (it is a mobile number)
  whatsapp: {
    url: "https://wa.me/6281511243389?text=Halo%20Indokopi%2C%20mau%20tanya%20dong",
    mockup: true,
  },
  mapsUrl:
    "https://maps.google.com/?cid=6812312873273142749&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // (listing)
  mapEmbed:
    "https://www.google.com/maps?q=Indokopi%2C%20Jl.%20Jatinegara%20Timur%20II%20No.4b%2C%20Rawa%20Bunga%2C%20Jatinegara%2C%20Jakarta%20Timur&output=embed",
  rating: "4,9", // (listing)
  ratingCount: "430", // (listing)
};

export const meta = {
  title: "Indokopi · Coffee · Work · Thrift · Jatinegara",
  description:
    "Kedai kopi di Rawa Bunga, Jatinegara. Buka 09.00–03.00 Senin–Kamis, nonstop di akhir pekan.",
};

export const banner =
  "Draf mockup untuk Indokopi. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const hero = {
  zoneLabel: "Kawasan Wajib Ngopi", // (photos: the yellow sign plate)
  wordmark: "Indokopi", // (listing, fascia) set in caps by CSS
  tagline: "Coffee · Work · Thrift", // (photos: fascia)
  line: { text: "Kopi, teman cerita, di Jatinegara", mockup: true } as Item, // built on the banner's "Kopi, Teman Cerita!"
  photo: {
    src: "/indokopi-depan.jpg", // owner-1.jpg, uploaded by the business, cropped
    width: 600,
    height: 450,
    alt: "Depan kedai Indokopi: papan batu bertuliskan INDOKOPI, Coffee . Work . Thrift, dinding bata dengan rambu Kawasan Wajib Ngopi.",
  },
  photoCaption: { text: "Pesan di jendela konter, lalu duduk di samping kios atau di depan." } as Item, // (photos)
  ctaDirections: "Petunjuk Arah",
  ctaWhatsapp: "WhatsApp",
};

// Weekday index: 0 = Minggu ... 6 = Sabtu (JavaScript getDay order).
export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// (hours) Mon–Thu 09:00–03:00; Fri 09:00 non-stop to Sun 24:00.
export const todayHours = {
  label: "Buka hari ini",
  fallbackLabel: "Jam buka",
  fallbackValue: "Sen–Kam 09.00–03.00 · Jum–Min nonstop",
  byDay: [
    "Buka 24 jam", // Minggu (sampai 24.00)
    "09.00–03.00", // Senin
    "09.00–03.00", // Selasa
    "09.00–03.00", // Rabu
    "09.00–03.00", // Kamis
    "Buka 09.00, lanjut 24 jam sampai Minggu", // Jumat
    "Buka 24 jam", // Sabtu
  ],
};

export type Art = "caramel" | "matcha" | "kopisusu" | "indomie";
export type Featured = { name: string; price?: string; note?: string; art: Art; mockup?: boolean };

export const menuIntro = {
  line: { text: "Ngopi dulu, cerita belakangan.", mockup: true } as Item,
  howToOrder: { text: "Pesan di jendela konter, atau scan QR “Scan Menu” di meja." } as Item, // (photos)
};

export const featured: Featured[] = [
  {
    name: "Caramel Latte", // (reviews 2)
    price: "Rp 22rb", // [MOCKUP] example price
    note: "Karamelnya terasa, dengan pahit kopi tipis di belakangnya.", // (reviews 2, paraphrased)
    art: "caramel",
    mockup: true,
  },
  {
    name: "Matcha Latte", // Matcha (reviews 1); "Matcha Latte" name [MOCKUP]
    price: "Rp 22rb", // [MOCKUP]
    note: "Dapat pujian di ulasan pelanggan.", // (reviews 1)
    art: "matcha",
    mockup: true,
  },
  {
    name: "Es Kopi Susu Indokopi", // [MOCKUP] name; iced milk coffee (photos)
    price: "Rp 18rb", // [MOCKUP]
    note: "Pakai gula aren, di gelas kaleng dan tatakan kayu.", // glass + coaster (photos); gula aren [MOCKUP]
    art: "kopisusu",
    mockup: true,
  },
  {
    name: "Indomie Goreng + Tahu", // (photos)
    note: "Pakai tahu goreng, daun bawang dan cabai.", // (photos)
    art: "indomie",
  },
];

export type MenuItem = { name: string; price?: string; mockup?: boolean };
export type MenuGroup = { title: string; items: MenuItem[] };

// [MOCKUP] menu list and example prices, to be checked against the shop's QR menu.
export const menu: MenuGroup[] = [
  {
    title: "Kopi",
    items: [
      { name: "Es Kopi Susu Indokopi", price: "Rp 18rb", mockup: true },
      { name: "Caramel Latte", price: "Rp 22rb", mockup: true },
      { name: "Hazelnut Latte", mockup: true },
      { name: "Americano", price: "Rp 15rb", mockup: true },
      { name: "Kopi Tubruk", mockup: true },
    ],
  },
  {
    title: "Non-kopi",
    items: [
      { name: "Matcha Latte", price: "Rp 22rb", mockup: true },
      { name: "Thai Tea", price: "Rp 15rb", mockup: true },
      { name: "Red Velvet", mockup: true },
      { name: "Berry Series: Strawberry Yakult", mockup: true },
      { name: "Berry Series: Mixed Berry Soda", mockup: true },
    ],
  },
  {
    title: "Makanan",
    items: [
      { name: "Indomie Goreng / Rebus Telur", price: "Rp 15rb", mockup: true },
      { name: "Indomie Goreng + Tahu" }, // (photos)
      { name: "Pisang Bakar Coklat Keju", price: "Rp 18rb", mockup: true },
      { name: "Kentang Goreng", price: "Rp 15rb", mockup: true },
      { name: "Roti Bakar", mockup: true },
      { name: "Nasi Goreng", mockup: true },
      { name: "Kue potong, ada bolu pandan" }, // (photos)
      { name: "Donat meses coklat" }, // (photos)
    ],
  },
];

export type Picto =
  | "people"
  | "laptop"
  | "hanger"
  | "threeplusone"
  | "twocups"
  | "moon"
  | "cake"
  | "cupbowl";

export type Promo = {
  name: string; // exactly as on the shop's banner (photos)
  detail: string; // [MOCKUP] read off the banner, small and partly legible
  price?: string; // [MOCKUP]
  picto: Picto;
  variant: "yellow" | "night";
  mockup: true;
};

export const promoIntro = { note: "Syarat berlaku. Detail dan harga bisa berubah." };

export const promos: Promo[] = [
  {
    name: "Beli 3 Gratis 1",
    detail: "Beli 3 minuman, gratis 1. Pas buat ngopi rame-rame.",
    price: "Gratis 1",
    picto: "threeplusone",
    variant: "yellow",
    mockup: true,
  },
  {
    name: "Promo Bestie Berdua",
    detail: "Paket hemat buat berdua. Ajak bestie kamu, cerita sampai puas.",
    picto: "people",
    variant: "yellow",
    mockup: true,
  },
  {
    name: "Promo Favorite Bestie",
    detail: "Pisang Bakar + Americano Rp 22rb, atau Kentang + Thai Tea Rp 32rb.",
    price: "Mulai Rp 22rb",
    picto: "twocups",
    variant: "yellow",
    mockup: true,
  },
  {
    name: "Workspace",
    detail: "Americano + Indomie, buat kamu yang kerja di sini seharian.",
    price: "Rp 30rb",
    picto: "cupbowl",
    variant: "yellow",
    mockup: true,
  },
  {
    name: "Promo Night Healing",
    detail: "Coffee latte series dan Berry Series lebih hemat buat yang ngopi malam.",
    price: "Hemat 5rb–10rb",
    picto: "moon",
    variant: "night",
    mockup: true,
  },
  {
    name: "Birthday Treat",
    detail: "Lagi ulang tahun? Ada kue gratis buat kamu.",
    price: "Gratis kue",
    picto: "cake",
    variant: "yellow",
    mockup: true,
  },
];

export type Pillar = { word: "Coffee" | "Work" | "Thrift"; text: string; picto: Picto; mockup?: boolean };

export const pillarsIntro = {
  heading: "Coffee · Work · Thrift", // (photos: fascia)
  line: { text: "Kerja siang, nongkrong malam, lihat-lihat thrift di sela-selanya.", mockup: true } as Item,
};

export const pillars: Pillar[] = [
  {
    word: "Coffee",
    text: "Tempatnya pas buat nongkrong bareng teman. Datang berdua? Ada promo bestie.", // (reviews 5, photos)
    picto: "people",
  },
  {
    word: "Work",
    text: "Bawa laptop, pesan paket Workspace. Ada Wi-Fi dan colokan buat kamu yang kerja.", // Workspace (photos); Wi-Fi, outlets [MOCKUP]
    picto: "laptop",
    mockup: true,
  },
  {
    word: "Thrift",
    text: "Rak kecil baju bekas pilihan. Lihat-lihat sambil nunggu kopi kamu jadi.", // [MOCKUP] what "Thrift" means
    picto: "hanger",
    mockup: true,
  },
];

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praiseIntro = {
  heading: "Kata mereka",
  rating: `${shop.rating} di Google dari ${shop.ratingCount} ulasan`, // (listing)
  source: "Dirangkum dari ulasan pelanggan di Google.",
};

export const praise: Item[] = [
  { text: "Minumannya juara, dari matcha sampai caramel latte." }, // (reviews 1, 2, 4)
  { text: "Enak, dan harganya ramah di kantong." }, // (reviews 3)
  { text: "Stafnya santai, tempatnya pas buat nongkrong bareng teman." }, // (reviews 1, 5)
];

// (hours) From the listing's opening periods. open = [startHour, endHour] segments within each calendar day.
export type DayRow = { day: string; text: string; open: [number, number][] };

export const visit = {
  heading: "Kunjungi kami",
  line: { text: "Buka sampai jam 3 pagi. Weekend? Kami nggak tutup.", mockup: true } as Item,
  hoursTitle: "Jam buka",
  legend: "Hitam = buka",
  note: "Lewat tengah malam masuk ke hari berikutnya.",
};

// Ordered Senin → Minggu; jsDay is the getDay() index, for marking today.
export const week: (DayRow & { jsDay: number })[] = [
  { day: "Senin", text: "09.00–03.00", open: [[9, 24]], jsDay: 1 },
  { day: "Selasa", text: "09.00–03.00", open: [[0, 3], [9, 24]], jsDay: 2 },
  { day: "Rabu", text: "09.00–03.00", open: [[0, 3], [9, 24]], jsDay: 3 },
  { day: "Kamis", text: "09.00–03.00", open: [[0, 3], [9, 24]], jsDay: 4 },
  { day: "Jumat", text: "Buka 09.00, lalu nonstop", open: [[0, 3], [9, 24]], jsDay: 5 },
  { day: "Sabtu", text: "24 jam", open: [[0, 24]], jsDay: 6 },
  { day: "Minggu", text: "24 jam, tutup 24.00", open: [[0, 24]], jsDay: 0 },
];

export const contact = {
  heading: "Hubungi kami",
  phoneLabel: "Telepon",
  instagram: { text: "Instagram: menyusul", mockup: true } as Item,
  endLabel: "Akhir",
  endSign: "Kawasan Wajib Ngopi",
  closing: { text: "Balik lagi besok, ya.", mockup: true } as Item,
};
