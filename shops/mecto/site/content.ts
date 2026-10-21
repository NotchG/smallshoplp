// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) / (hours) / (review n) / (photos) = raw.json and photos.json.

export type Item = { text: string; mockup?: boolean };

export type DayRow = { day: string; jsDay: number; open: string; close: string };

export const shop = {
  name: "Mecto", // (listing)
  nameMockup: true, // spelling, capitals and any tagline still to confirm
  type: "Kafe", // (listing: Cafe)
  address:
    "Jl. Raya Kalimalang, RT.3/RW.16, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13340", // (listing; no house number)
  addressShort: "Jl. Raya Kalimalang, Duren Sawit", // (listing)
  phone: "0819-4411-3955", // (listing)
  phoneHref: "tel:+6281944113955", // (listing)
  whatsapp: { href: "https://wa.me/6281944113955", mockup: true }, // number assumed to take WhatsApp
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Mecto&destination_place_id=ChIJa9-Yc-rzaS4Rj6EivhLIGTs",
  mapsHref: "https://maps.google.com/?cid=4258654905480421775", // (listing)
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Mecto%2C%20Jl.%20Raya%20Kalimalang%2C%20Duren%20Sawit%2C%20Jakarta%20Timur&z=16&output=embed",
  // [MOCKUP] Render the Instagram button only once the owner confirms a handle. Never a dead link.
  instagram: null as null | { href: string; handle: string; mockup: true },
  // (hours) Seven rows, week starting Senin. jsDay: 0 = Sunday ... 6 = Saturday.
  hours: [
    { day: "Senin", jsDay: 1, open: "07.00", close: "23.00" },
    { day: "Selasa", jsDay: 2, open: "07.00", close: "23.00" },
    { day: "Rabu", jsDay: 3, open: "07.00", close: "23.00" },
    { day: "Kamis", jsDay: 4, open: "07.00", close: "23.00" },
    { day: "Jumat", jsDay: 5, open: "07.00", close: "00.00" },
    { day: "Sabtu", jsDay: 6, open: "07.00", close: "00.00" },
    { day: "Minggu", jsDay: 0, open: "07.00", close: "00.00" },
  ] as DayRow[],
  hoursSummary: "Buka setiap hari", // (hours)
};

export const meta = {
  title: "Mecto · Kafe di Jl. Raya Kalimalang, Duren Sawit",
  description:
    "Kafe Mecto di Duren Sawit, Jakarta Timur. Buka setiap hari 07.00–23.00, Jumat–Minggu sampai 00.00.",
};

export const banner =
  "Draf tampilan untuk Mecto. Detail bertanda contoh masih menunggu konfirmasi pemilik.";

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#jam", label: "Jam buka" },
  { href: "#tempat", label: "Tempat" },
  { href: "#lokasi", label: "Lokasi" },
];

export const hero = {
  // (brief hero line; hours; reviews 1–3)
  line: "Ngopi, makan, dan kerja dari pagi sampai malam di Kalimalang.",
  todayPrefix: "Buka hari ini", // + "07.00–23.00" computed for Asia/Jakarta
  hoursFallback: "Buka setiap hari mulai 07.00", // SSR / no-JS
  image: {
    src: "/img/ruang-dalam.jpg",
    srcSet: "/img/ruang-dalam-700.jpg 700w, /img/ruang-dalam.jpg 1000w",
    width: 1000,
    height: 860,
    alt: "Ruang dalam Mecto: plafon kayu beratap pelana dengan lampu LED, dinding beton, dan halaman berdinding kuning di balik kaca.",
  },
  ctaDirections: "Petunjuk Arah",
  ctaWhatsapp: "WhatsApp",
};

export type DishArtKind = "nachos" | "chicken" | "kopi";

export type Dish = {
  name: string;
  nameMockup?: boolean;
  price: Item;
  art?: DishArtKind;
  artLabel?: string;
};

export const menu = {
  heading: "Menu andalan",
  sub: "Yang paling sering dipuji: nasi goreng, nachos, buttermilk chicken, dan kopi gula arennya.", // (review 1)
  featured: {
    name: "Nasi Goreng", // (review 1; photos)
    price: { text: "Rp\u00a038rb", mockup: true },
    image: {
      src: "/img/nasi-goreng.jpg",
      srcSet: "/img/nasi-goreng-480.jpg 480w, /img/nasi-goreng.jpg 800w",
      width: 800,
      height: 1000,
      alt: "Nasi goreng dengan telur mata sapi, kerupuk, acar, dan cabai hijau dalam mangkuk keramik abu-abu.",
    },
  },
  items: [
    {
      name: "Nachos", // (review 1)
      price: { text: "Rp\u00a035rb", mockup: true },
      art: "nachos",
      artLabel: "Ilustrasi nachos di piring keramik abu-abu",
    },
    {
      name: "Buttermilk Chicken", // (review 1)
      price: { text: "Rp\u00a045rb", mockup: true },
      art: "chicken",
      artLabel: "Ilustrasi buttermilk chicken dengan nasi di piring keramik abu-abu",
    },
    {
      name: "Kopi Gula Aren", // (review 1: palm sugar coffee)
      nameMockup: true, // exact menu name to confirm
      price: { text: "Rp\u00a025rb", mockup: true },
      art: "kopi",
      artLabel: "Ilustrasi es kopi gula aren dalam gelas",
    },
  ] as Dish[],
  artCaption: "ilustrasi",
  moreHeading: "Juga ada",
  // [MOCKUP] all four rows
  more: [
    { name: "Kopi lain", items: "Americano, Caffe\u00a0Latte", price: "Rp\u00a022rb · Rp\u00a030rb", mockup: true },
    { name: "Non-kopi", items: "Matcha latte, cokelat, berry soda", price: "Rp\u00a025–32rb", mockup: true },
    { name: "Sarapan mulai 07.00", items: "Roti bakar, croissant, breakfast\u00a0plate", price: "Rp\u00a025–45rb", mockup: true },
    { name: "Pastry", items: "Croissant, pain\u00a0au\u00a0chocolat", price: "Rp\u00a020–30rb", mockup: true },
  ],
  priceNote: "Harga dan daftar “Juga ada” masih contoh, menunggu konfirmasi.",
};

export const dayParts = {
  heading: "Dari pagi sampai malam",
  sub: "Buka setiap hari dari jam 07.00. Sarapan, makan siang, dan makan malam ada semua.", // (hours; review 2)
  quietLabel: "paling tenang", // (review 3) mornings are quieter
  weekendLabel: "Jum–Min",
  weekendLong: "Jumat–Minggu sampai 00.00",
  parts: [
    {
      name: "Pagi",
      from: "07.00",
      text: "Buka jam 07.00. Sarapan dulu, lalu kerja. Datang pagi untuk suasana paling tenang.", // (hours; reviews 2, 3)
    },
    {
      name: "Siang",
      from: "12.00",
      text: "Makan siang, kopi, dan kerja sampai sore.", // (reviews 1, 2, 5)
    },
    {
      name: "Malam",
      from: "18.00",
      text: "Makan malam dan ngobrol. Senin–Kamis sampai 23.00, Jumat–Minggu sampai tengah malam.", // (hours; reviews 1, 2)
    },
  ],
  // Beam ticks: clock marks only. 07.00, 23.00 and 00.00 are the facts (hours).
  ticks: ["07.00", "12.00", "18.00", "23.00", "00.00"],
};

export const spaces = {
  heading: "Dalam & luar",
  sub: "Mau duduk di dalam atau di luar, dua-duanya ada.", // (reviews 3, 5)
  zones: [
    {
      key: "dalam",
      name: "Ruang dalam",
      text: "Plafon kayu beratap pelana dengan skylight, meja jati, dan bangku kulit panjang di sepanjang kaca.", // (photos)
    },
    {
      key: "halaman",
      name: "Halaman dalam",
      text: "Di balik kaca, halaman berkerikil putih dengan dinding kuning.", // (photos)
    },
    {
      key: "taman",
      name: "Taman",
      text: "Taman teduh di bawah pohon, kerikil hitam, dan lampu hangat saat malam.", // (photos)
    },
  ] as const,
};

export const amenities = {
  heading: "Nyaman untuk semua",
  items: [
    {
      name: "Kerja seharian",
      text: "Bangku panjang dekat kaca dan meja tinggi; pagi hari paling tenang.", // (reviews 1–3; photos)
      extra: { text: "Wi-Fi dan colokan di bangku", mockup: true } as Item,
    },
    { name: "Keluarga", text: "Ada kursi bayi untuk si kecil." }, // (review 2; photos)
    { name: "Musholla", text: "Tersedia musholla." }, // (review 4)
    { name: "Parkir", text: "Parkir luas." }, // (review 5)
  ] as { name: string; text: string; extra?: Item }[],
  mockupTag: "contoh",
};

// Paraphrased from real reviews only. Never invented, never attributed to a name, no quote marks.
export const praise = {
  heading: "Kata mereka",
  rating: { value: "4,7", count: 507 }, // (listing)
  ratingLine: "Rata-rata 4,7 dari 507 ulasan di Google.",
  themes: [
    "Makanannya enak, dari nachos dan nasi goreng sampai buttermilk chicken, porsinya pas.", // (reviews 1, 4)
    "Kopi gula arennya enak, dan pilihan kopinya banyak.", // (reviews 1, 5)
    "Tempatnya nyaman dan santai, dekorasinya modern, musiknya pas.", // (reviews 1, 3, 5)
    "Cocok kapan saja, buat sarapan sampai makan malam, sendiri atau bareng teman dan keluarga, dengan harga bersahabat.", // (reviews 2, 5)
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  addressLabel: "Alamat",
  hoursLabel: "Jam buka",
  mapTitle: "Peta lokasi Mecto",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  closing: "Sarapan jam tujuh, kerja sampai sore, ngobrol sampai malam.", // (brief tone example)
  whatsapp: "WhatsApp",
  call: "Telepon 0819-4411-3955",
  instagram: "Instagram",
};

export const footer = {
  identity: "Mecto · Jl. Raya Kalimalang, Duren Sawit, Jakarta Timur 13340",
  draft: "Draf tampilan, belum dipublikasikan.",
};

export const skipLink = "Langsung ke konten";
