// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing), (hours), (reviews N), (photos).

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Undertwenty Coffee Co", // (listing)
  wordmark: "Undertwenty", // door decal "UNDERTWENTY" (photos)
  mark: "U20", // black plate by the door (photos)
  script: "Coffee. Co", // script line on the plate (photos)
  type: "Kedai kopi", // primaryType coffee_shop (listing)
  address: "Budaya 69, Condet, Batu Ampar, Kramat Jati, Jakarta Timur 13520", // (listing)
  addressShort: "Budaya 69, Condet, Kramat Jati", // (listing)
  phoneDisplay: "0856-9991-113", // (listing)
  tel: "tel:+628569991113", // (listing)
  whatsapp: { url: "https://wa.me/628569991113", mockup: true }, // [MOCKUP] mobile number, assumed on WhatsApp
  mapsUrl: "https://maps.google.com/?cid=9699381566018863506", // (listing)
  mapEmbed:
    "https://maps.google.com/maps?q=Undertwenty%20Coffee%20Co%2C%20Budaya%2069%2C%20Condet%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,7", count: 216 }, // (listing)
};

export const meta = {
  title: "Undertwenty Coffee Co · Kedai kopi di Condet, buka sampai larut",
  description:
    "Kedai kopi kecil di Budaya 69, Condet, Jakarta Timur. Manual brew dan es kopi susu, buka setiap hari 10.00–01.00, Sabtu–Minggu sampai 02.00.",
};

export const banner =
  "Draf situs untuk ditinjau pemilik Undertwenty Coffee Co. Beberapa detail masih contoh sampai dikonfirmasi.";

// Opening hours (hours). Minutes from midnight; close is after midnight on the next calendar day.
// day: 0 = Minggu ... 6 = Sabtu. From raw.json regularOpeningHours.periods.
export type DayHours = { day: number; open: number; close: number };
export const hours: DayHours[] = [
  { day: 0, open: 600, close: 120 }, // Minggu 10.00–02.00
  { day: 1, open: 600, close: 60 }, // Senin 10.00–01.00
  { day: 2, open: 600, close: 60 }, // Selasa
  { day: 3, open: 600, close: 60 }, // Rabu
  { day: 4, open: 600, close: 60 }, // Kamis
  { day: 5, open: 600, close: 60 }, // Jumat
  { day: 6, open: 600, close: 120 }, // Sabtu 10.00–02.00
];
export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Weekly summary, used wherever the page lists the full week (hours).
export const week = [
  { days: "Senin–Jumat", time: "10.00–01.00" },
  { days: "Sabtu–Minggu", time: "10.00–02.00" },
];
export const everyDay = "Buka setiap hari";

export const hero = {
  tagline: { text: "Kecil dari luar, serius soal kopi di dalam.", mockup: true } as Item,
  // Static fallback in the plate, before the browser works out "today" (hours).
  fallback: { label: "Buka setiap hari", time: "10.00–01.00", note: "Sabtu–Minggu sampai 02.00" },
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  facadeAlt:
    "Tampak depan Undertwenty Coffee Co: dinding bata oranye, jendela besi hitam, papan U20, pintu kaca bertuliskan UNDERTWENTY, dan tiga bangku besi di depan jendela.",
};

// Menu andalan. Names and prices are placeholders until the owner confirms them.
export type DrinkArt = "photo" | "greenTea" | "pourOver" | "espressoSusu";
export type Featured = {
  name: string;
  detail: string;
  price?: string;
  art: DrinkArt;
  alt?: string;
  mockup: boolean;
};

export const menu = {
  heading: "Menu andalan",
  lead: {
    text: "Di balik pintu kaca itu: kopi susu, manual brew, dan green tea latte.",
    mockup: true,
  } as Item,
  photoAlt:
    "Es kopi susu berlapis di gelas bersegi, di samping tanaman lidah mertua dalam pot tanah liat.",
  note: { text: "Nama menu dan harga masih contoh, menunggu konfirmasi.", mockup: true } as Item,
};

export const featured: Featured[] = [
  {
    // owner-2.jpg (photos); name and price [MOCKUP]
    name: "Es Kopi Susu U20",
    detail: "Kopi, susu, dan es, berlapis di gelas bersegi.",
    price: "Rp 20rb",
    art: "photo",
    mockup: true,
  },
  {
    // (reviews 5, photos); price [MOCKUP]
    name: "Green Tea Latte",
    detail: "Panas atau dingin.",
    price: "Rp 25rb",
    art: "greenTea",
    alt: "Gambar secangkir green tea latte dengan latte art berbentuk daun.",
    mockup: true,
  },
  {
    // (reviews 2); methods, beans and price [MOCKUP]
    name: "Manual brew",
    detail: "V60 · Japanese iced · Syphon. Biji Nusantara bergantian: Gayo, Toraja, Jawa.",
    price: "Rp 25rb–35rb",
    art: "pourOver",
    alt: "Gambar dripper V60 di atas server kaca berisi kopi.",
    mockup: true,
  },
  {
    // (photos); name [MOCKUP], no price shown
    name: "Espresso + susu kental manis",
    detail: "Gelas kecil, dua lapis.",
    art: "espressoSusu",
    alt: "Gambar gelas kecil bersegi berisi susu kental manis di bawah espresso, di atas lepek putih.",
    mockup: true,
  },
];

export type MenuLine = { name: string; price?: string; mockup: boolean };
export type MenuGroup = { title: string; items: MenuLine[] };

// Full list, all [MOCKUP].
export const menuGroups: MenuGroup[] = [
  {
    title: "Kopi susu & espresso",
    items: [
      { name: "Es Kopi Susu U20", price: "Rp 20rb", mockup: true },
      { name: "Espresso", price: "Rp 15rb", mockup: true },
      { name: "Americano", price: "Rp 18rb", mockup: true },
      { name: "Cappuccino / Latte", price: "Rp 23rb–25rb", mockup: true },
    ],
  },
  {
    title: "Manual brew",
    items: [
      { name: "V60 · Japanese iced · Syphon", price: "Rp 25rb–35rb", mockup: true },
      { name: "Cold drip (botol)", price: "Rp 30rb", mockup: true },
    ],
  },
  {
    title: "Non-kopi",
    items: [
      { name: "Green Tea Latte", price: "Rp 25rb", mockup: true },
      { name: "Cokelat · Red velvet · Teh", price: "Rp 20rb–25rb", mockup: true },
    ],
  },
  {
    title: "Camilan malam",
    items: [
      {
        name: "Roti bakar · Kentang goreng · Pisang goreng · Mie instan",
        price: "Rp 15rb–25rb",
        mockup: true,
      },
    ],
  },
];

// Cara kami menyeduh. Methods are from the photos; the one-liners are [MOCKUP].
export type Method = { name: string; icon: "v60" | "syphon" | "coldDrip" | "frenchPress"; line: Item };
export const brew = {
  heading: "Cara kami menyeduh",
  lead: { text: "Satu meja bar, banyak cara menyeduh.", mockup: true } as Item,
  body: "Di meja bar juga ada mesin espresso dan grinder.", // (photos)
};
export const methods: Method[] = [
  {
    name: "Pour over",
    icon: "v60",
    line: { text: "Diseduh manual lewat dripper, rasa bijinya lebih jernih.", mockup: true },
  },
  {
    name: "Syphon",
    icon: "syphon",
    line: { text: "Seduhan vakum di dua tabung kaca, seru ditonton dari bar.", mockup: true },
  },
  {
    name: "Cold drip",
    icon: "coldDrip",
    line: { text: "Tetes demi tetes, pelan dan lama.", mockup: true },
  },
  {
    name: "French press",
    icon: "frenchPress",
    line: { text: "Direndam lalu ditekan, hasilnya tebal dan penuh.", mockup: true },
  },
];

// Ngopi sampai larut. The heading itself is a [MOCKUP] description (brief: personality).
export const late = {
  heading: { text: "Ngopi sampai larut", mockup: true } as Item,
  lead: "Buka sampai 01.00 tiap malam, dan sampai 02.00 di Sabtu dan Minggu.", // (hours)
  now: "Sekarang",
  ticks: ["10.00", "14.00", "18.00", "22.00", "00.00", "02.00"],
};
export const latePoints: Item[] = [
  { text: "Free WiFi" }, // (photos: door decal)
  { text: "Nyaman buat duduk lama." }, // (reviews 2)
  { text: "Kedai kopi dekat rumah untuk ngobrol sampai larut.", mockup: true },
];

// Kata mereka. Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praiseIntro = {
  heading: "Kata mereka",
  ratingSuffix: `dari ${shop.rating.count} ulasan Google`, // (listing)
  caption: "Dirangkum dari ulasan Google, bukan kutipan langsung.",
};
export const praise: { topic: string; text: string }[] = [
  {
    topic: "Pilihan kopi",
    text: "Dari luar kelihatan kecil dan biasa, ternyata pilihan kopinya banyak, manual brew juga ada.", // (reviews 2)
  },
  {
    topic: "Suasana",
    text: "Tempatnya nyaman dan enak buat duduk lama, bahkan sambil menunggu hujan reda.", // (reviews 2)
  },
  {
    topic: "Pelayanan",
    text: "Kopinya enak, suasananya pas, pelayanannya ramah; ada yang datang untuk live TikTok dan bikin konten.", // (reviews 3)
  },
  {
    topic: "Malam hari",
    text: "Tempat yang pas untuk menghabiskan malam dengan kopi yang baru diseduh, di Jakarta Timur.", // (reviews 1, 4)
  },
];

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Undertwenty Coffee Co",
  patokanTitle: "Patokan",
  patokan: "Cari dinding bata oranye, papan hitam U20, dan pintu kaca bertuliskan UNDERTWENTY.", // (photos)
  patokanAlt:
    "Papan hitam U20 Coffee. Co di dinding bata dan pintu kaca dengan stiker UNDERTWENTY dan Free WiFi.",
};

export const contact = {
  heading: "Hubungi kami",
  lead: {
    text: "Mau tanya menu, biji yang lagi ada, atau memastikan kami masih buka? Kabari saja.",
    mockup: true,
  } as Item,
  whatsappLabel: "WhatsApp",
  phoneLabel: "Telepon",
  directionsLabel: "Petunjuk Arah",
  directionsDetail: "Budaya 69",
};

export const footer = {
  hours: "Setiap hari 10.00–01.00, Sabtu–Minggu sampai 02.00", // (hours)
  draft: "Draf situs untuk ditinjau pemilik. Beberapa detail masih contoh.",
};
