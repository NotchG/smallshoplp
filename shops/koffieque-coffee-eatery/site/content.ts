// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: raw.json (listing, hours, reviews 1–5), brief.md, docs/prd.md.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "KoffieQue",
  descriptor: "Coffee & Eatery",
  fullName: "KoffieQue Coffee & Eatery",
  type: "Kafe",
  line: "Kopi dan makanan Barat & Indonesia di Duren Sawit.",
  addressShort: "Jl. Rawa Domba, Duren Sawit",
  address: "Jl. Rawa Domba, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13440",
  placeId: "ChIJD7EJitKNaS4RVT12jP_HjpY",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=KoffieQue+Coffee+%26+Eatery%2C+Jl.+Rawa+Domba%2C+Duren+Sawit&destination_place_id=ChIJD7EJitKNaS4RVT12jP_HjpY",
  mapEmbedUrl:
    "https://www.google.com/maps?q=KoffieQue+Coffee+%26+Eatery,+Jl.+Rawa+Domba,+Duren+Sawit,+Jakarta+Timur&output=embed",
  // No phone on the listing. Placeholder until the owner sends a WhatsApp number.
  whatsapp: { number: "", mockup: true },
  // JS getDay(): 0 = Minggu. From raw.json regularOpeningHours.
  hours: [
    { label: "Senin–Kamis", days: [1, 2, 3, 4], time: "10.30–22.00" },
    { label: "Jumat–Sabtu", days: [5, 6], time: "08.30–23.30" },
    { label: "Minggu", days: [0], time: "10.30–22.00" },
  ],
  hoursNote: "Buka setiap hari",
};

export const meta = {
  title: "KoffieQue Coffee & Eatery · Duren Sawit",
  description:
    "Kopi dan makanan Barat & Indonesia di Jl. Rawa Domba, Duren Sawit, Jakarta Timur. Buka setiap hari.",
};

export const banner = "Draf situs KoffieQue untuk ditinjau pemilik. Beberapa detail masih contoh.";

export const labels = {
  skip: "Langsung ke konten",
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappPending: "nomor menyusul",
  seeMenu: "Lihat menu",
  openToday: "Buka hari ini",
};

// Owner photo (uploaded by the business). Name and price are [MOCKUP].
export const heroPhoto = {
  src: "/images/owner-1.jpg",
  w: 352,
  h: 422,
  alt: "Burger keju dengan roti wijen, kentang goreng dan saus tomat di piring putih",
  name: "Beef Cheese Burger",
  price: "Rp 45rb",
  mockup: true,
  credit: "Foto dari KoffieQue",
};

export type Art = "kopi-susu" | "rice-bowl" | "nasi-goreng" | "croissant";

export const menuIntro = {
  heading: "Menu andalan",
  line: "Dari kopi susu sampai nasi goreng, semua ada di KoffieQue.",
};

// Illustrated, all [MOCKUP] names and prices.
export const featured: { name: string; price?: string; art: Art; alt: string; mockup: boolean }[] = [
  { name: "Es Kopi Susu KoffieQue", art: "kopi-susu", alt: "Ilustrasi es kopi susu", mockup: true },
  { name: "Rice Bowl Ayam Teriyaki", price: "Rp 35rb", art: "rice-bowl", alt: "Ilustrasi rice bowl ayam teriyaki", mockup: true },
  { name: "Nasi Goreng Kampung", price: "Rp 32rb", art: "nasi-goreng", alt: "Ilustrasi nasi goreng dengan telur ceplok", mockup: true },
  { name: "Butter Croissant", price: "Rp 18rb", art: "croissant", alt: "Ilustrasi croissant mentega", mockup: true },
];

export type MenuItem = { name: string; price?: string; mockup: boolean };
export type MenuGroup = { title: string; price?: string; items: MenuItem[] };

const m = (name: string, price?: string): MenuItem => ({ name, price, mockup: true });

export const menu: Record<"kopi" | "nonKopi" | "western" | "pastry" | "indonesia", MenuGroup> = {
  kopi: {
    title: "Kopi",
    price: "Rp 22rb–32rb",
    items: [
      m("Es Kopi Susu KoffieQue"),
      m("Kopi Susu Gula Aren"),
      m("Americano"),
      m("Cappuccino"),
      m("Caramel Latte"),
      m("Manual Brew V60"),
    ],
  },
  nonKopi: {
    title: "Non-kopi",
    items: [m("Matcha Latte"), m("Red Velvet"), m("Lychee Tea"), m("Lemon Tea")],
  },
  western: {
    title: "Western",
    items: [
      m("Beef Cheese Burger", "45rb"),
      m("Chicken Katsu with Rice"),
      m("Spaghetti Aglio Olio"),
      m("French Fries"),
      m("Chicken Wings"),
    ],
  },
  pastry: {
    title: "Pastry",
    price: "Rp 18rb",
    items: [m("Chocolate Danish"), m("Butter Croissant")],
  },
  indonesia: {
    title: "Indonesia",
    items: [
      m("Nasi Goreng Kampung", "32rb"),
      m("Mie Goreng Jawa"),
      m("Ayam Geprek"),
      m("Rice Bowl Ayam Teriyaki", "35rb"),
    ],
  },
};

export const menuNote: Item = {
  text: "Nama menu dan harga masih contoh. Gambar menu adalah ilustrasi sampai foto dari KoffieQue tersedia.",
  mockup: true,
};

export const rooms = {
  heading: "Ruang & fasilitas",
  indoor: {
    title: "Di dalam",
    text: "Ruang terang dan rapi, dengan meja marmer hitam, lampu gantung bulat dan sofa panjang.",
  },
  outdoor: {
    title: "Di luar, di bawah kanopi",
    text: "Kanopi putih, lampu gantung yang hangat dan tanaman hijau. Jumat dan Sabtu buka sampai 23.30.",
  },
  meeting: {
    title: "Ruang meeting",
    text: "Ruang meeting yang siap dipakai untuk kegiatan tim atau komunitas.",
    cta: { text: "Pesan ruang meeting lewat WhatsApp.", mockup: true } as Item,
  },
};

// From reviews 1, 2, 3.
export const facilities: Item[] = [
  { text: "Mushola kecil untuk 2–3 orang" },
  { text: "Colokan listrik di setiap kursi" },
  { text: "Toilet bersih" },
];

// Paraphrased from real reviews only. Never invented, never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  source: "Diringkas dari ulasan Google.",
  items: [
    { text: "Gampang untuk mampir, nyaman dan bersih." },
    { text: "Menunya beragam, dari Barat sampai Indonesia, porsinya pas." },
    { text: "Kopinya enak, harganya wajar untuk daerah sini." },
    { text: "Fasilitasnya praktis: colokan di setiap kursi, mushola, toilet bersih, ruang meeting." },
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi KoffieQue",
};

export const contact = {
  heading: "Hubungi kami",
  line: "Mampir sebentar sebelum kerja, atau duduk lebih lama untuk makan siang.",
};

export const footer = {
  identity: "KoffieQue Coffee & Eatery · Jl. Rawa Domba, Duren Sawit, Jakarta Timur 13440",
  draft: "Ini draf situs untuk ditinjau pemilik.",
};
