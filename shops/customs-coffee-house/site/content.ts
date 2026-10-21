// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) raw.json, (hours) opening hours, (reviews n), (photos).

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Customs Coffee House", // (listing) "CUSTOMS coffee house"
  type: "Coffee shop", // (type)
  address: "Jl. Bujana Tirta 2 No.4A, Pisangan Timur, Pulo Gadung, Jakarta Timur 13230", // (listing)
  addressLines: ["Jl. Bujana Tirta 2 No.4A", "Pisangan Timur, Pulo Gadung", "Jakarta Timur 13230"],
  phone: "0812-9154-8783", // (listing)
  tel: "+6281291548783",
  whatsapp: { url: "https://wa.me/6281291548783", mockup: true }, // [MOCKUP] number takes WhatsApp
  mapsUrl: "https://maps.google.com/?cid=5990836913435509214", // (listing)
  mapEmbedUrl:
    "https://www.google.com/maps?q=CUSTOMS+coffee+house,+Jl.+Bujana+Tirta+2+No.4A,+Pisangan+Timur,+Jakarta+Timur&output=embed",
  // (hours) Mon–Sat 08:00–01:00, Sun 09:00–01:00
  hours: [
    { days: "Senin–Sabtu", time: "08.00–01.00" },
    { days: "Minggu", time: "09.00–01.00" },
  ],
  // 0 = Minggu … 6 = Sabtu. `group` points at the row in `hours` that covers the day.
  hoursByWeekday: [
    { day: "Minggu", time: "09.00–01.00", group: 1 },
    { day: "Senin", time: "08.00–01.00", group: 0 },
    { day: "Selasa", time: "08.00–01.00", group: 0 },
    { day: "Rabu", time: "08.00–01.00", group: 0 },
    { day: "Kamis", time: "08.00–01.00", group: 0 },
    { day: "Jumat", time: "08.00–01.00", group: 0 },
    { day: "Sabtu", time: "08.00–01.00", group: 0 },
  ],
  rating: { value: "4,6", count: 334 }, // (listing)
};

export const meta = {
  title: "Customs Coffee House · Kopi single origin di Pulo Gadung",
  description:
    "Coffee shop di Pisangan Timur, Pulo Gadung, Jakarta Timur. Banyak pilihan kopi single origin, WiFi gratis, buka tiap hari sampai 01.00.",
};

export const banner =
  "Ini draf tampilan untuk Customs Coffee House. Beberapa detail masih contoh sampai kamu konfirmasi.";

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappLabel: "Chat WhatsApp",
  call: "Telepon",
};

export const hero = {
  line: { text: "Kopi single origin, buka sampai jam 1 malam.", mockup: true } as Item,
  photoAlt:
    "Depan Customs Coffee House menjelang malam: papan nama kuning bertuliskan CUSTOMS coffee, kanopi seng hijau toska, pagar besi hijau, dan tamu yang sedang ngopi di dalam.",
};

// Origins on the bar, in the order of the jars (photos). Taste notes are [MOCKUP].
export const shelf = {
  heading: "rak biji kami",
  intro: "Dari Gayo sampai Guatemala, semua ada di rak kami.",
};

export const origins: { name: string; note: Item; fill: number }[] = [
  { name: "Lombok", note: { text: "cokelat, rempah, asam lembut", mockup: true }, fill: 0.72 },
  { name: "Brasil", note: { text: "kacang, cokelat, asam rendah", mockup: true }, fill: 0.8 },
  { name: "Guatemala", note: { text: "cokelat hitam, karamel", mockup: true }, fill: 0.66 },
  { name: "Gayo", note: { text: "rempah, herbal, body tebal", mockup: true }, fill: 0.85 },
  { name: "Wamena", note: { text: "manis, cokelat, bersih", mockup: true }, fill: 0.6 },
  { name: "Bali", note: { text: "jeruk, gula merah, segar", mockup: true }, fill: 0.76 },
  { name: "Wine", note: { text: "fermentasi, buah, aroma anggur", mockup: true }, fill: 0.7 },
];

export const shelfCard = {
  title: { text: "Pilih bijinya,", mockup: true } as Item,
  line: { text: "kami seduh manual: V60 atau tubruk.", mockup: true } as Item,
};

export const menu = {
  heading: "menu andalan",
  intro: "Diseduh di bar, disajikan di meja kotak-kotak.", // (photos: checkerboard tables)
  note: { text: "Harga contoh. Menu lengkap ada di bar.", mockup: true } as Item,
};

export type Featured = {
  name: Item;
  price: Item;
  desc: Item;
  image: string | "art";
  alt: string;
  width?: number;
  height?: number;
};

export const featured: Featured[] = [
  {
    // Drink is real (photos, owner-3.jpg); the menu name and price are unconfirmed.
    name: { text: "Vietnam Drip", mockup: true },
    price: { text: "Rp 22rb", mockup: true },
    desc: { text: "Kopi tetes pelan-pelan di atas susu kental manis." },
    image: "/photos/vietnam-drip.jpg",
    width: 1000,
    height: 1250,
    alt: "Saringan Vietnam drip di atas gelas bersegi berisi kopi dan susu kental manis, di samping toples biji berlabel GUATEMALA, di atas meja kotak-kotak hitam putih.",
  },
  {
    // Drink is real (photos, owner-2.jpg); "Es Green Tea Latte" is our guess at its name.
    name: { text: "Es Green Tea Latte", mockup: true },
    price: { text: "Rp 25rb", mockup: true },
    desc: { text: "Hijau dan dingin, di gelas bersegi dan tatakan kaca." },
    image: "/photos/green-tea-latte.jpg",
    width: 800,
    height: 1000,
    alt: "Es green tea latte berwarna hijau dengan es batu dan sendok, di gelas bersegi di atas tatakan kaca bermotif, di meja kotak-kotak.",
  },
  {
    name: { text: "Manual Brew Single Origin", mockup: true },
    price: { text: "Rp 25rb", mockup: true },
    desc: { text: "Biji pilihanmu dari rak, diseduh V60 atau tubruk.", mockup: true },
    image: "art",
    alt: "Ilustrasi: dripper V60 putih di atas gelas bersegi berisi kopi, di atas tatakan kaca, dengan dinding papan kayu di belakang dan tepi meja kotak-kotak di depan.",
  },
];

export const menuBoard: { label: string; items: { name: Item; price?: Item }[] }[] = [
  {
    label: "Kopi lainnya",
    items: [
      { name: { text: "Kopi Susu", mockup: true } },
      { name: { text: "Kopi Susu Gula Aren", mockup: true } },
    ],
  },
  {
    label: "Makanan",
    items: [
      { name: { text: "Nasi Goreng", mockup: true }, price: { text: "Rp 28rb", mockup: true } },
      { name: { text: "Mie Goreng", mockup: true } },
      { name: { text: "Indomie Telur", mockup: true } },
      { name: { text: "Roti Bakar", mockup: true } },
      { name: { text: "Pisang Goreng", mockup: true } },
      { name: { text: "Kentang Goreng", mockup: true } },
    ],
  },
];

export const hangout = {
  heading: "tempat nongkrong",
  lead: "Fasad kuning, meja kotak-kotak, dinding penuh stiker klub mobil dan motor.", // (photos)
  photoAlt:
    "Ruang belakang Customs Coffee House: dinding hitam, mosaik biji kopi bergambar Mona Lisa, TV di dinding, dan meja kayu bundar.",
};

export type Feature = { title: string; line: string; mockup?: boolean; whatsapp?: boolean };

export const features: Feature[] = [
  { title: "WiFi gratis", line: "Ada papan Free WiFi Zone. Enak buat ngerjain tugas." }, // (reviews 1; photos)
  { title: "Musiknya asik", line: "Lagunya pas buat ngobrol lama." }, // (reviews 2)
  { title: "Meeting & kerja", line: "Cocok buat meeting singkat atau kerja." }, // (reviews 2, 5)
  { title: "Goweser welcome", line: "Ada sepeda tua tergantung di atas kursi." }, // (reviews 2; photos)
  { title: "Buka s/d 01.00", line: "Buka tiap hari sampai jam 1 malam." }, // (hours)
  {
    title: "Komunitas",
    line: "Klub mobil, motor atau sepeda? Kopdar di teras kami. Kabari lewat WhatsApp.",
    mockup: true,
    whatsapp: true,
  },
];

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  heading: "kata mereka",
  themes: [
    "Pelayanannya tulus dan ramah.", // (reviews 1)
    "Kopinya kuat dan enak, harganya bersahabat.", // (reviews 1, 3)
    "Pilihan kopi single origin-nya banyak.", // (reviews 2)
    "Enak buat nongkrong, sendiri atau bareng teman, sambil ngerjain tugas atau meeting.", // (reviews 1, 2, 4, 5)
  ],
  source: `Dirangkum dari ulasan Google · rating ${shop.rating.value} dari ${shop.rating.count} ulasan`,
};

export const visit = {
  heading: "kunjungi kami",
  houseRule: "Mohon tidak membawa makanan dan minuman dari luar.", // (reviews 3; photos)
  mapTitle: "Peta lokasi Customs Coffee House",
};

export const footer = {
  heading: "hubungi kami",
  line: "Mampir dulu, pilih bijinya, ngobrol sampai larut.",
};
