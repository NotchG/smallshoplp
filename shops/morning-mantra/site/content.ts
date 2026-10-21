// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Register: "kamu" throughout (mockup, the owner may prefer "Anda"; see the checklist).

export type Item = { text: string; mockup?: boolean };

// Sources: raw.json (listing, hours), brief.md, photos (reference only).
export const shop = {
  name: "Morning Mantra",
  type: "Kafe & restoran",
  // Full address as listed (raw.json formattedAddress, tidied). House number to confirm.
  addressLines: [
    "Jl. Raya Condet No.03 6, RT.3/RW.4",
    "Balekambang, Kramat Jati, Jakarta Timur 13530",
  ],
  shortAddress: "Jl. Raya Condet, Balekambang, Kramat Jati",
  phone: "0817-5414-141",
  tel: "tel:+628175414141",
  // Assumes the mobile number takes WhatsApp.
  waUrl: "https://wa.me/628175414141",
  waMockup: true,
  mapsUrl:
    "https://maps.google.com/?cid=7216540379459333030&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbed:
    "https://www.google.com/maps?q=Morning%20Mantra%2C%20Jl.%20Raya%20Condet%2C%20Balekambang&output=embed",
  hoursSummary: "Buka setiap hari",
  // index matches Date#getDay (0 = Minggu). Every day 08:00–22:00 (raw.json).
  hours: [
    { day: "Senin", index: 1, time: "08.00–22.00" },
    { day: "Selasa", index: 2, time: "08.00–22.00" },
    { day: "Rabu", index: 3, time: "08.00–22.00" },
    { day: "Kamis", index: 4, time: "08.00–22.00" },
    { day: "Jumat", index: 5, time: "08.00–22.00" },
    { day: "Sabtu", index: 6, time: "08.00–22.00" },
    { day: "Minggu", index: 0, time: "08.00–22.00" },
  ],
  // The owner's own English brand line (owner-1.jpg).
  brandLine: "Let's start your morning with mantra",
};

export const meta = {
  title: "Morning Mantra · Kopi & makan di Jl. Raya Condet",
  description:
    "Kafe dan restoran di Jl. Raya Condet, Kramat Jati. Kopi pilihan, masakan Indonesia, buka setiap hari 08.00–22.00.",
};

export const banner =
  "Draf mockup untuk Morning Mantra. Teks bergaris titik-titik adalah contoh dan menunggu konfirmasi Anda.";

export const hero = {
  // Same hours every day, so this is true whichever day it is read (raw.json).
  todayLabel: "Buka hari ini 08.00–22.00",
  line: { text: "Awali pagimu dengan mantra.", mockup: true } as Item,
  sub: { text: "Kopi dari banyak pilihan biji dan masakan Indonesia di Jalan Raya Condet." } as Item,
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  image: {
    src: "/owner-1.jpg",
    width: 960,
    height: 904,
    alt: "Area luar Morning Mantra: sofa rangka besi berbantal abu-abu, rak penuh tanaman dan lantai tegel bermotif, dengan tulisan “Let's start your morning with mantra”.",
  },
};

export type BoardItem = { name: string; price: string; mockup: boolean };

// Names and order exactly as on the board behind the bar (photos). Prices read off a
// customer photo of unknown date, so every price is a mockup until confirmed.
export const coffee = {
  title: "Menu kopi",
  lead: "Racikan rumah dari papan di belakang bar, dari Morning Coffee sampai kopi kapulaga dan pandan. Suka seduh manual? Ada V60 dan banyak pilihan biji.",
  boardHeader: "Papan kopi · harga dalam ribu rupiah",
  board: [
    { name: "Morning Coffee", price: "35", mockup: true },
    { name: "Mantra Coffee", price: "30", mockup: true },
    { name: "Kapulaga Coffee", price: "35", mockup: true },
    { name: "Pandan Coffee", price: "35", mockup: true },
    { name: "Choco Regal", price: "30", mockup: true },
    { name: "Coffee Latte", price: "35", mockup: true },
    { name: "Matcha / Taro / Red Velvet", price: "30", mockup: true },
    { name: "Vietnam Coffee", price: "35", mockup: true },
    { name: "V60", price: "40", mockup: true },
  ] as BoardItem[],
  // Baileys coffee, iced (reviews 2); wide choice of beans (reviews 3); V60 on the board (photos).
  boardNote: "Juga ada Baileys coffee yang disajikan dingin. Biji kopinya banyak pilihan, dan V60 untuk yang suka seduh manual.",
  featured: [
    { key: "kapulaga", name: "Kapulaga Coffee" },
    { key: "pandan", name: "Pandan Coffee" },
    { key: "v60", name: "V60" },
  ] as const,
  illoCaption: "Gambar: ilustrasi, bukan foto.",
};

export type FoodItem = {
  name: string;
  mockup?: boolean; // the dish itself is a guess
  price?: string;
  priceMockup?: boolean;
  href?: string;
};

export const food = {
  title: "Makan di sini",
  lead: { text: "Dari sarapan jam 08.00 sampai makan malam.", mockup: true } as Item,
  // Grilled squid plate and the tea cup (photos).
  body: "Cumi bakar dengan sambal matah di atas kangkung, nasi berbalut daun pisang bertabur bawang goreng, dua macam sambal dan lalapan segar. Tehnya datang di cangkir hitam bergaris emas.",
  groups: [
    {
      label: "Sarapan",
      items: [
        { name: "Nasi uduk", mockup: true },
        { name: "Bubur ayam", mockup: true },
        { name: "Roti panggang & telur", mockup: true },
      ],
    },
    {
      label: "Makan",
      items: [
        { name: "Cumi bakar sambal matah", price: "55rb", priceMockup: true },
        { name: "Ayam bakar madu", mockup: true, price: "40rb", priceMockup: true },
        { name: "Nasi goreng kampung", mockup: true, price: "35rb", priceMockup: true },
        { name: "Iga bakar", mockup: true },
        { name: "Sop buntut", mockup: true },
      ],
    },
    {
      label: "Camilan",
      items: [
        { name: "Pisang goreng keju", mockup: true, price: "22rb", priceMockup: true },
        { name: "Kentang goreng", mockup: true },
        { name: "Cireng rujak", mockup: true },
        { name: "Roti bakar", mockup: true },
      ],
    },
    {
      label: "Minuman",
      items: [
        { name: "Teh panas", price: "15rb", priceMockup: true },
        { name: "Semua kopi ada di papan kopi", href: "#menu-kopi" },
      ],
    },
  ] as { label: string; items: FoodItem[] }[],
  illos: [
    { key: "cumi", name: "Cumi bakar sambal matah" },
    { key: "teh", name: "Teh panas" },
  ] as const,
};

export type Room = {
  key: "atas" | "dalam" | "luar";
  label: string;
  title: string;
  body: string;
  details: string[];
  book?: Item & { href: string };
};

// Three areas (reviews 2), musala upstairs (reviews 1), Wi-Fi speed (reviews 1),
// furniture and roof (photos). No minimum-spend terms until the owner confirms them.
export const rooms = {
  title: "Tiga ruang",
  lead: "Kerja di depan bar, santai di luar, kumpul privat di atas. Pilih ruang yang pas untuk harimu.",
  bandLabel: "Foto ruangan menyusul",
  items: [
    {
      key: "atas",
      label: "Lantai atas",
      title: "Ruang privat di lantai atas",
      body: "Butuh privasi untuk kumpul bareng teman? Ada ruang karaoke di lantai atas, dan musala di lantai yang sama.",
      details: ["Ruang karaoke privat", "Musala"],
      book: {
        text: "Pesan lewat WhatsApp",
        mockup: true,
        href: "https://wa.me/628175414141",
      },
    },
    {
      key: "dalam",
      label: "Di dalam · depan bar",
      title: "Kerja dari sini",
      body: "Kursi nyaman di depan meja barista, sofa beludru biru dan kursi emas. Internetnya cukup kencang untuk menyelesaikan kerjaan.",
      details: ["Wi-Fi sekitar 60–80 Mbps", "Kursi di depan meja barista", "Buka sampai 22.00"],
    },
    {
      key: "luar",
      label: "Di luar · atap kaca",
      title: "Santai bareng teman",
      body: "Area beratap kaca dengan rak penuh tanaman, sofa besi berbantal abu-abu dan lampu gantung. Tempat paling enak untuk ngobrol lama.",
      details: ["Atap kaca dan tanaman", "Ada kursi bayi untuk si kecil"],
    },
  ] as Room[],
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  rating: { value: "4.7", count: 228, label: "dari 228 ulasan Google" },
  themes: [
    "Tempatnya cantik dan chic, di luar dugaan untuk Condet Raya.", // reviews 3
    "Nyaman di dalam maupun di luar.", // reviews 2, 3
    "Kopinya enak, dan pilihan bijinya banyak.", // reviews 3, 4
    "Pelayanannya ramah, makanannya juga disukai.", // reviews 1, 4, 5
  ],
  caption: "Diringkas dari ulasan Google.",
};

export const visit = {
  title: "Kunjungi kami",
  mapTitle: "Peta lokasi Morning Mantra",
  mapPlaceholder: "Peta dimuat…",
  todayNote: "hari ini",
};

export type ActionRowItem = {
  key: "wa" | "tel" | "maps";
  label: string;
  detail: string;
  href: string;
  external?: boolean;
  mockup?: boolean;
};

export const contact = {
  title: "Hubungi kami",
  lead: "Tanya apa saja, dari menu hari ini sampai ruang di lantai atas.",
  privateRoomLine: {
    text: "Ruang privat di lantai atas bisa dipesan lewat WhatsApp.",
    mockup: true,
  } as Item,
  rows: [
    { key: "wa", label: "WhatsApp", detail: "0817-5414-141", href: "https://wa.me/628175414141", external: true, mockup: true },
    { key: "tel", label: "Telepon", detail: "0817-5414-141", href: "tel:+628175414141" },
    {
      key: "maps",
      label: "Petunjuk arah",
      detail: "Jl. Raya Condet, Balekambang",
      href: "https://maps.google.com/?cid=7216540379459333030&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
      external: true,
    },
  ] as ActionRowItem[],
  footerNote: "Draf mockup, belum dipublikasikan.",
};
