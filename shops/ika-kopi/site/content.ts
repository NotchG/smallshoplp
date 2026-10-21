// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or is copy we wrote). Every one of
// them is listed in ../owner-checklist.md. All copy is Bahasa Indonesia, "kamu" register (mockup).

export type Item = { text: string; mockup?: boolean };
export type Priced = { name: string; price: string; note?: string; mockup?: boolean };

export const shop = {
  name: "Ika Kopi", // the sign and trays read "IKA KOPI" (photos); listing: "Ika Kopi Ciracas"
  tagline: "Keharuman & Cita Rasa", // as on the round sign (photos)
  type: "Coffee shop",
  address: "Jl. Raya Ciracas No.3, RT.4/RW.3, Ciracas, Kec. Ciracas, Jakarta Timur 13740", // listing
  addressShort: "Jl. Raya Ciracas No.3, Ciracas, Jakarta Timur",
  phone: "0852-8584-4007", // listing
  telUrl: "tel:+6285285844007",
  waUrl: "https://wa.me/6285285844007", // mockup: we assume the mobile number takes WhatsApp
  waMockup: true,
  mapsUrl: "https://maps.google.com/?cid=10608466388104175179", // raw.json googleMapsUri
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ika+Kopi+Ciracas,+Jl.+Raya+Ciracas+No.3&z=16&output=embed",
  hours: { days: "Senin–Minggu", time: "07.00–23.00", note: "buka setiap hari" }, // listing hours
  todayLine: "Buka hari ini 07.00–23.00", // same hours every day, so always true
};

export const meta = {
  title: "Ika Kopi · Coffee shop di Jl. Raya Ciracas, Jakarta Timur",
  description:
    "Coffee shop di Jl. Raya Ciracas No.3, Ciracas, Jakarta Timur. Buka setiap hari 07.00–23.00.",
  banner:
    "Draf situs untuk ditinjau pemilik Ika Kopi. Beberapa detail masih contoh sampai Anda konfirmasi.",
};

export const nav = [
  { label: "Kopi", href: "#kopi" },
  { label: "Ruang kerja", href: "#ruang-kerja" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#lokasi" },
];

export const buttons = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: `Telepon ${shop.phone}`,
};

export const hero = {
  locationLine: { text: "Kopi pilihan di Jl. Raya Ciracas.", mockup: true } as Item,
  // Facts from review 1 (cold, roomy, a plug at every table); the sentence is our copy.
  workLine: { text: "Ruang sejuk dan lega, colokan di setiap meja.", mockup: true } as Item,
  photoAlt:
    "Ruang Ika Kopi yang terang: lantai putih mengilap, pilar batu, kotak tanaman, dan kursi kayu berbantal hijau di depan dinding kaca.",
};

export const kopi = {
  heading: "Kopi kami",
  lead: {
    text: "Manual brew datang di atas nampan kayu, lengkap dengan kartu yang menceritakan bijinya.",
    mockup: true,
  } as Item,
  // The bean card, field for field as printed (photos). Facts, not mockup.
  bean: {
    title: "Arabica Pangalengan",
    fields: [
      { label: "Asal", value: "Jawa Barat" },
      { label: "Cocok untuk", value: "Pour over, French press" },
      { label: "Catatan rasa", value: "Berry, floral, manis di akhir" },
      { label: "Proses", value: "Natural" },
      { label: "Ketinggian", value: "1.500 mdpl" },
      { label: "Profil sangrai", value: "Light to medium" },
    ],
  },
  caption: {
    text: "Kartu biji yang menyertai manual brew. Bijinya bisa berganti.",
    mockup: true,
  } as Item,
  brewNotes: [
    {
      method: "Pour over",
      text: "Air panas dituang pelan lewat kertas saring. Rasanya bersih dan ringan, catatan buahnya lebih terasa.",
      mockup: true,
    },
    {
      method: "French press",
      text: "Bubuk kopi direndam beberapa menit, lalu ditekan. Rasanya lebih tebal dan bulat.",
      mockup: true,
    },
  ],
  coffee: [
    { name: "Manual brew, V60 atau French press", price: "Rp 28rb–35rb", note: "biji bergantian", mockup: true },
    { name: "Es Kopi Susu Ika", price: "Rp 22rb", note: "dengan gula aren", mockup: true },
    { name: "Americano", price: "Rp 22rb", mockup: true },
    { name: "Cappuccino atau Caffè Latte", price: "Rp 28rb", mockup: true },
  ] as Priced[],
  // Fact: espresso bar with grinder and machine, bagged beans on the counter (photos).
  espressoLine: "Di bar ada grinder dan mesin espresso, jadi espresso dibuat langsung di depan kamu.",
};

export type IconName = "snow" | "plug" | "table" | "chair" | "sparkle" | "clock";

export const kerja = {
  heading: "Nyaman untuk kerja",
  lead: {
    text: "Butuh tempat kerja yang sejuk dan lega? Ini yang membuat orang betah berjam-jam di sini.",
    mockup: true,
  } as Item,
  // Facts from review 1 and the listing hours.
  work: [
    { icon: "snow", title: "AC dingin", line: "AC-nya bekerja baik, ruangannya benar-benar sejuk." },
    { icon: "plug", title: "Colokan di setiap meja", line: "Laptop dan ponsel tetap terisi selama kamu kerja." },
    { icon: "table", title: "Meja lega", line: "Cukup untuk laptop dan makanan, dan tidak berdempetan." },
    { icon: "chair", title: "Kursi berbantal", line: "Duduk lama tetap nyaman." },
    { icon: "sparkle", title: "Toilet bersih", line: "Bersih dan terawat, enak dipakai." },
    { icon: "clock", title: "07.00–23.00", line: "Buka setiap hari, dari kopi pagi sampai kerja malam." },
  ] as { icon: IconName; title: string; line: string }[],
  // The long table is in the photos; using it for groups is our guess.
  groupTable: {
    text: "Datang berkelompok? Ada meja panjang di dekat bar untuk rapat kecil atau belajar bareng.",
    mockup: true,
  } as Item,
};

export type Illustration = "bowl" | "drink" | "croissant";

export const menu = {
  heading: "Menu andalan",
  lead: {
    text: "Teman kopi dan teman kerja: makanan, minuman tanpa kopi, dan pastry dari etalase di bar.",
    mockup: true,
  } as Item,
  // Dishes seen in photos; names and prices are placeholders.
  items: [
    {
      name: "Rice Bowl Chicken Katsu",
      price: "Rp 35rb",
      line: "Nasi, ayam katsu renyah, selada, dan tomat.",
      illustration: "bowl",
      mockup: true,
    },
    {
      name: "Es Teh Persik",
      price: "Rp 22rb–28rb",
      line: "Teh persik dingin dengan es, segar di siang hari.",
      illustration: "drink",
      mockup: true,
    },
    {
      name: "Croissant & banana bread",
      price: "Rp 18rb–25rb",
      line: "Dari etalase pastry di bar, pas untuk teman kopi.",
      illustration: "croissant",
      mockup: true,
    },
  ] as { name: string; price: string; line: string; illustration: Illustration; mockup?: boolean }[],
  extras: [
    { name: "Juga ada matcha latte dan cokelat", price: "Rp 22rb–28rb", mockup: true },
    { name: "Paket pagi sebelum 10.00: kopi + pastry", price: "Rp 35rb", mockup: true },
  ] as Priced[],
};

// The whole section is mockup: bagged beans are on the counter (photos), sale is a guess.
export const beansToGo = {
  mockup: true,
  heading: "Bawa pulang biji kopi",
  text: "Biji kopi 200 g untuk diseduh di rumah, dari biji yang sama dengan di bar.",
  price: "Rp 85rb–120rb",
  cta: "Tanya via WhatsApp",
};

export const reviews = {
  heading: "Kata mereka",
  rating: "4,8", // listing
  ratingLabel: "dari 217 ulasan Google", // listing
  // Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
  praise: [
    "Ruangannya sejuk dan lega, enak untuk kerja berjam-jam.", // review 1
    "Kopinya enak.", // reviews 2, 3
    "Harganya masuk akal dan terjangkau.", // reviews 1, 5
    "Bersih, sampai ke toiletnya.", // review 1
  ],
  note: "Rangkuman ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  heading: "Kunjungi kami",
  parkingLine: "Parkir motor mudah, parkir mobil terbatas.", // review 1
  mapTitle: "Peta lokasi Ika Kopi",
};

export const contact = {
  heading: "Hubungi kami",
  lead: {
    text: "Mau tanya menu, biji kopi, atau tempat untuk rombongan kecil? Kirim pesan saja.",
    mockup: true,
  } as Item,
  hoursLabel: "Jam buka",
  addressLabel: "Alamat",
};

export const footer = {
  draftNote: "Draf situs, belum dipublikasikan.",
};
