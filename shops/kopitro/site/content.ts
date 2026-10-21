// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) / (hours) / (reviews n) / (photos) from shops/kopitro/raw.json.

export type Item = { text: string; mockup?: boolean; note?: string };

export const shop = {
  name: "Kopitro", // (listing)
  tagline: "Manual Brew", // (photos: banner, cups)
  type: "Kafe", // (listing: Cafe)
  address: "Jl. Slamet Riyadi No.9-21, Kebon Manggis, Matraman, Jakarta Timur 13150", // (listing)
  addressShort: "Jl. Slamet Riyadi No.9-21, Matraman", // (listing)
  phone: "0815-1084-3658", // (listing)
  phoneHref: "tel:+6281510843658",
  // [MOCKUP] the mobile number takes WhatsApp
  whatsapp: { href: "https://wa.me/6281510843658", mockup: true },
  mapsUrl:
    "https://maps.google.com/?cid=4616837944967865954&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kopitro&destination_place_id=ChIJOVJoKkz1aS4RYqZaX6ZNEkA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Kopitro%2C%20Jl.%20Slamet%20Riyadi%20No.9-21%2C%20Matraman%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,7", count: 316 }, // (listing)
};

export const meta = {
  title: "Kopitro · Manual Brew di Matraman",
  description:
    "Kopi seduh manual di pinggir Jl. Slamet Riyadi, Matraman, Jakarta Timur. Buka Selasa–Minggu 19.00–02.00, Senin tutup.",
};

// (hours) Every open day runs 19.00 to 02.00 the next day. Monday is closed.
// jsDay follows JavaScript: 0 = Minggu.
export type Day = { day: string; jsDay: number; open: string | null; close: string | null };
export const hours: Day[] = [
  { day: "Senin", jsDay: 1, open: null, close: null },
  { day: "Selasa", jsDay: 2, open: "19.00", close: "02.00" },
  { day: "Rabu", jsDay: 3, open: "19.00", close: "02.00" },
  { day: "Kamis", jsDay: 4, open: "19.00", close: "02.00" },
  { day: "Jumat", jsDay: 5, open: "19.00", close: "02.00" },
  { day: "Sabtu", jsDay: 6, open: "19.00", close: "02.00" },
  { day: "Minggu", jsDay: 0, open: "19.00", close: "02.00" },
];

// Open-status lines (hours). `main` is the lead line, `sub` the small line under it.
export type StatusKey = "fallback" | "openNow" | "tonight" | "monday";
export const status: Record<StatusKey, { main: string; sub: string }> = {
  fallback: { main: "Selasa–Minggu 19.00–02.00", sub: "Senin tutup" },
  openNow: { main: "Buka sekarang · sampai 02.00", sub: "Selasa–Minggu 19.00–02.00 · Senin tutup" },
  tonight: { main: "Buka malam ini 19.00–02.00", sub: "Senin tutup" },
  monday: { main: "Senin tutup", sub: "Buka lagi Selasa 19.00" },
};

// [MOCKUP] line drawings stand in for owner photos; the red disc stands in for the logo's red shape.
export const placeholders = { illustrations: true, logoMark: true };

export const hero = {
  // [MOCKUP] hero line
  line: { text: "Kopi seduh manual, buka sampai jam 2 pagi.", mockup: true } as Item,
  statusFallback: "Selasa–Minggu 19.00–02.00 · Senin tutup",
};

export type MenuArt = "v60" | "vietnam" | "eskopi" | "roti" | "kentang";
export type MenuItem = {
  id: string;
  name: string;
  nameMockup?: boolean;
  note: string;
  noteMockup?: boolean;
  price: string;
  priceMockup: true;
  art: MenuArt;
  wide?: boolean;
};

export const menu: MenuItem[] = [
  {
    id: "v60",
    name: "V60", // (reviews 1, 3)
    note: "Diseduh satu-satu, porsinya pas buat berdua.", // (reviews 3)
    price: "Rp 25rb · berdua Rp 40rb", // [MOCKUP]
    priceMockup: true,
    art: "v60",
    wide: true,
  },
  {
    id: "vietnam",
    name: "Vietnam Drip", // (photos)
    note: "Kopi menetes dari phin ke atas susu kental manis.", // (photos)
    price: "Rp 20rb", // [MOCKUP]
    priceMockup: true,
    art: "vietnam",
  },
  {
    id: "eskopi",
    name: "Es Kopi Susu Kopitro", // [MOCKUP] name; iced milk coffee in a Kopitro cup (photos)
    nameMockup: true,
    note: "Kopi susu dingin di gelas Kopitro.", // (photos)
    price: "Rp 20rb", // [MOCKUP]
    priceMockup: true,
    art: "eskopi",
  },
  {
    id: "roti",
    name: "Roti Bakar", // [MOCKUP] name; toast (reviews 1)
    nameMockup: true,
    note: "Cokelat keju atau srikaya.", // [MOCKUP] flavours
    noteMockup: true,
    price: "Rp 18rb", // [MOCKUP]
    priceMockup: true,
    art: "roti",
  },
  {
    id: "kentang",
    name: "Kentang Goreng", // [MOCKUP] name; fries (reviews 3)
    nameMockup: true,
    note: "Porsinya besar, enak buat dibagi.", // (reviews 3: served generously)
    price: "Rp 18rb", // [MOCKUP]
    priceMockup: true,
    art: "kentang",
  },
];

// Brew methods: V60 (reviews 1, 3), Vietnam Drip (photos); the rest [MOCKUP].
export const methods: Item[] = [
  { text: "V60" },
  { text: "Vietnam Drip" },
  { text: "Japanese iced", mockup: true },
  { text: "French press", mockup: true },
  { text: "Kopi Tubruk", mockup: true },
];

// [MOCKUP] example beans
export const beans: Item[] = [
  { text: "Gayo", mockup: true },
  { text: "Kintamani", mockup: true },
  { text: "Toraja", mockup: true },
  { text: "Flores Bajawa", mockup: true },
];

export const nightFacts: Item[] = [
  { text: "Suasana pinggir jalan, seru saat kendaraan lewat" }, // (reviews 1)
  { text: "Nyaman buat ngobrol santai" }, // (reviews 4)
  { text: "Ngopi bareng teman, ditemani musik" }, // (reviews 2)
  { text: "Musik live di akhir pekan", mockup: true, note: "menunggu konfirmasi" }, // (reviews 2, 2020) [MOCKUP] still happening?
  { text: "Bar kopi, tanpa alkohol" }, // (photos: "no alcohol" sign)
];

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise: Item[] = [
  { text: "V60 dan roti bakarnya dipuji" }, // (reviews 1)
  { text: "Banyak asal biji dan metode, kualitasnya terjaga" }, // (reviews 3)
  { text: "Kentang gorengnya porsi besar" }, // (reviews 3)
  { text: "Seru duduk di pinggir jalan, apalagi saat kendaraan lewat" }, // (reviews 1)
  { text: "Tempat yang enak buat ngobrol bareng teman" }, // (reviews 2, 4, 5)
];

export const copy = {
  banner: "Ini draf tampilan untuk Kopitro. Beberapa detail masih contoh sampai dikonfirmasi pemilik.",
  skip: "Langsung ke isi",
  buttons: {
    directions: "Petunjuk Arah",
    whatsapp: "WhatsApp",
    call: "Telepon",
  },
  menu: {
    heading: "Menu andalan",
    intro: { text: "Diseduh di bar, disajikan di meja pinggir jalan.", mockup: true } as Item,
    footnote: { text: "Harga masih contoh dan gambar masih ilustrasi, menunggu konfirmasi pemilik.", mockup: true } as Item,
  },
  brew: {
    heading: "Cara kami menyeduh",
    lead: { text: "Satu cangkir, satu seduhan. Pilih biji dan caranya, barista yang seduh.", mockup: true } as Item,
    origins: { text: "Banyak pilihan asal biji dan metode seduh." } as Item, // (reviews 3)
    forTwo: { text: "V60 buat berdua? Bisa." } as Item, // (reviews 3)
    methodsLabel: "Metode",
    beansLabel: "Contoh biji malam ini",
  },
  night: {
    heading: "Malam di Kopitro",
    statement: {
      text: "Meja di pinggir jalan, lampu hangat di atas bar, kendaraan lewat. Malam masih panjang, kopinya diseduh satu-satu.",
      mockup: true,
    } as Item,
  },
  praise: {
    heading: "Kata mereka",
    rating: `${shop.rating.value} di Google dari ${shop.rating.count} ulasan`, // (listing)
    note: "Dirangkum dari ulasan Google.",
  },
  visit: {
    heading: "Kunjungi kami",
    hoursLabel: "Jam buka",
    closed: "Tutup",
    today: "hari ini",
    mapTitle: "Peta lokasi Kopitro",
    openMap: "Buka di Google Maps",
  },
  contact: {
    heading: "Hubungi kami",
    line: { text: "Mau tanya biji yang ada malam ini? Chat aja dulu.", mockup: true } as Item,
    phoneLabel: "Telepon / WhatsApp",
  },
  footer: {
    draft: "Draf tampilan, belum untuk umum",
  },
};
