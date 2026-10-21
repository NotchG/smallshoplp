// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names stay as the shop uses them.

export type Item = { text: string; mockup?: boolean };

export type ProductId =
  | "kopi-susu-strong"
  | "kopi-susu-mantan"
  | "wake-up-call"
  | "kentang-bangkok"
  | "risol-smoked-beef"
  | "beef-bowl";

export type Product = {
  id: ProductId;
  name: Item; // name.mockup = true for spelling/name not confirmed
  note: Item; // one line, source in PRD
  price: Item; // always mockup: true
  alt: string; // Indonesian alt for the illustration
};

export const shop = {
  name: "Saturday Coffee 2.0", // listing
  display: "Saturday Coffee", // listing
  tag: { text: "2.0", mockup: true } as Item, // name from listing; small-tag treatment is [MOCKUP]
  type: "Coffee shop", // listing
  address:
    "Jl. Cipinang Cempedak IV No.20, Cipinang Cempedak, Jatinegara, Jakarta Timur 13340", // listing
  addressShort: "Jl. Cipinang Cempedak IV No.20, Jatinegara", // listing
  phone: "0878-8379-8730", // listing
  tel: "tel:+6287883798730", // listing
  whatsapp: { text: "https://wa.me/6287883798730", mockup: true } as Item, // [MOCKUP] takes WhatsApp
  mapsUrl: "https://maps.google.com/?cid=6104321714020755894", // listing
  mapEmbed:
    "https://www.google.com/maps?q=Saturday+Coffee+2.0,+Jl.+Cipinang+Cempedak+IV+No.20,+Jatinegara,+Jakarta+Timur&output=embed",
  // hours (listing). dayIdx: 0 = Minggu ... 6 = Sabtu
  hours: [
    { days: "Senin–Jumat", dayIdx: [1, 2, 3, 4, 5], time: "08.30–22.00" },
    { days: "Sabtu–Minggu", dayIdx: [6, 0], time: "08.30–23.00" },
  ],
  hoursNote: "Buka setiap hari", // hours
  rating: { value: "4,7", count: 760 }, // listing
};

export const meta = {
  title: "Saturday Coffee 2.0 · Coffee shop di Jatinegara, Jakarta Timur",
  description:
    "Coffee shop dengan halaman semi-outdoor di Cipinang Cempedak, dekat Stasiun KCIC Halim. Buka setiap hari 08.30–22.00, Sabtu–Minggu sampai 23.00.",
};

export const banner =
  "Draf mockup untuk Saturday Coffee 2.0. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const hero = {
  line: { text: "Kopi, camilan, dan tempat lega untuk kerja atau nongkrong.", mockup: true } as Item,
  todayPrefix: "Buka hari ini", // hours
  hoursFallback: "Buka setiap hari 08.30–22.00 · Sabtu–Minggu sampai 23.00", // hours (no-JS)
  addressLine: "Jl. Cipinang Cempedak IV No.20, Jatinegara · dekat Stasiun KCIC Halim", // listing; reviews 5
  directions: "Petunjuk Arah", // listing
  whatsapp: { text: "WhatsApp", mockup: true } as Item, // [MOCKUP] the number takes WhatsApp
  vignetteAlt: "Ilustrasi sudut halaman Saturday Coffee",
};

export const menu = {
  title: "Menu andalan",
  intro: { text: "Favorit tamu dari ulasan dan foto di Google.", mockup: true } as Item,
  priceNote: { text: "Harga masih contoh.", mockup: true } as Item,
  drinksLabel: "Minuman",
  foodLabel: "Makanan",
  drinks: [
    {
      id: "kopi-susu-strong",
      name: { text: "Kopi Susu Strong" }, // reviews 4
      note: { text: "Kopi susu gula aren, andalan rumah." }, // reviews 4
      price: { text: "Rp 27rb", mockup: true },
      alt: "Ilustrasi Kopi Susu Strong: gelas tinggi dengan gula aren di dasar, susu, dan kopi di atasnya",
    },
    {
      id: "kopi-susu-mantan",
      name: { text: "Kopi Susu Mantan" }, // reviews 4
      note: { text: "Es kopi susu yang lebih ringan dan creamy." }, // reviews 4
      price: { text: "Rp 25rb", mockup: true },
      alt: "Ilustrasi Kopi Susu Mantan: es kopi susu pucat dengan tiga es batu",
    },
    {
      id: "wake-up-call",
      name: { text: "Wake Up Call" }, // reviews 5
      note: { text: "Kopi hitam dengan lemon." }, // reviews 5
      price: { text: "Rp 25rb", mockup: true },
      alt: "Ilustrasi Wake Up Call: kopi hitam dalam gelas dengan irisan lemon di bibir gelas",
    },
  ] as Product[],
  food: [
    {
      id: "kentang-bangkok",
      name: { text: "Kentang Goreng Saus Bangkok", mockup: true }, // reviews 5; spelling [MOCKUP]
      note: { text: "Kentang goreng dengan saus Bangkok." }, // reviews 5
      price: { text: "Rp 25rb", mockup: true },
      alt: "Ilustrasi kentang goreng dalam wadah kertas dengan semangkuk kecil saus Bangkok",
    },
    {
      id: "risol-smoked-beef",
      name: { text: "Risol Smoked Beef", mockup: true }, // reviews 5; spelling [MOCKUP]
      note: { text: "Risol isi smoked beef." }, // reviews 5
      price: { text: "Rp 22rb", mockup: true },
      alt: "Ilustrasi tiga risol di piring kecil, satu terpotong memperlihatkan isinya",
    },
    {
      id: "beef-bowl",
      name: { text: "Beef Bowl Onsen Egg", mockup: true }, // name [MOCKUP]
      note: { text: "Nasi daging sapi, telur setengah matang, nori, dan kriuk tempura." }, // photos
      price: { text: "Rp 42rb", mockup: true },
      alt: "Ilustrasi mangkuk gelap berisi daging sapi, telur setengah matang, nori, dan kriuk tempura",
    },
  ] as Product[],
  moreLabel: "Juga ada di menu",
  // [MOCKUP] all of these; the Orange Cream Latte drink is in the photos, its name is not
  more: [
    { text: "Americano Rp 22rb", mockup: true },
    { text: "Cappuccino", mockup: true },
    { text: "Caffè Latte", mockup: true },
    { text: "Matcha Latte", mockup: true },
    { text: "Cokelat", mockup: true },
    { text: "teh buah", mockup: true },
    { text: "Orange Cream Latte", mockup: true },
    { text: "Cireng", mockup: true },
    { text: "Tahu Cabe Garam", mockup: true },
    { text: "Mix Platter", mockup: true },
  ] as Item[],
};

export const atmosphere = {
  title: "Suasana",
  // reviews 2, 3; photos; copy [MOCKUP]
  lead: {
    text: "Rumah dengan halaman semi-outdoor yang luas, banyak tanaman, dan lampu gantung di atasnya.",
    mockup: true,
  } as Item,
  line: { text: "Kerja, nongkrong, atau nunggu kereta, semua enak di sini.", mockup: true } as Item,
  facts: [
    { text: "Indoor & outdoor" }, // reviews 5
    { text: "Ada lantai atas" }, // reviews 3
    { text: "Cocok untuk kerja" }, // reviews 3, 5
  ] as Item[],
  // reviews 3; photos; the drawing itself is a [MOCKUP] placeholder for owner photos
  labels: { upstairs: "Lantai atas", court: "Halaman semi-outdoor" },
  houseAlt:
    "Ilustrasi penampang rumah Saturday Coffee: ruang lantai atas yang menyala, tangga, dan halaman semi-outdoor dengan tanaman di bawah lampu gantung",
};

export const station = {
  title: "Dekat Stasiun KCIC Halim", // reviews 5
  line: {
    text: "Punya waktu sebelum naik kereta? Duduk dulu, ngopi, makan, lalu lanjut ke stasiun.",
    mockup: true,
  } as Item, // reviews 5; copy [MOCKUP]
  from: "Saturday Coffee 2.0",
  to: "Stasiun KCIC Halim",
  time: { text: "± 10 menit", mockup: true } as Item, // [MOCKUP] owner to confirm
  link: "Buka di Google Maps", // listing
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  rating: "4,7 dari 760 ulasan Google", // listing
  themes: [
    { title: "Luas dan lega", body: "Tempatnya luas, kursinya banyak, dan enak dilihat." }, // reviews 1, 2, 3
    {
      title: "Enak buat kerja, enak buat ketemu teman",
      body: "Nyaman untuk buka laptop, nyaman juga untuk ngobrol bareng teman.",
    }, // reviews 2, 3, 5
    { title: "Banyak kursi di luar", body: "Area outdoor-nya lega, kursinya cukup banyak." }, // reviews 3, 4
    { title: "Stafnya ramah", body: "Tamu menyebut stafnya ramah sekali." }, // reviews 2
    {
      title: "Sepadan dengan harganya",
      body: "Makanan dan kopinya pas di harga, porsinya cukup.",
    }, // reviews 1, 2, 5
    {
      title: "Yang disebut tamu",
      body: "Kentang goreng saus Bangkok, risol smoked beef, dan Wake Up Call.",
    }, // reviews 5
  ],
};

export const visit = {
  title: "Kunjungi kami",
  todayLabel: "Hari ini",
  parkingLabel: "Parkir",
  parking: "Parkir mobil terbatas. Kalau bawa mobil, bisa parkir di minimarket terdekat.", // reviews 1
  mapTitle: "Peta lokasi Saturday Coffee 2.0",
  mapLink: "Buka peta di Google Maps",
  directions: "Petunjuk Arah",
};

export const contact = {
  title: "Hubungi kami",
  signoff: { text: "Setiap hari rasanya seperti hari Sabtu.", mockup: true } as Item,
  tiles: [
    { key: "wa", label: "Chat WhatsApp", value: "0878-8379-8730", mockup: true },
    { key: "tel", label: "Telepon", value: "0878-8379-8730" },
    { key: "map", label: "Petunjuk Arah", value: "Buka Google Maps" },
  ] as { key: "wa" | "tel" | "map"; label: string; value: string; mockup?: boolean }[],
};

export const footer = {
  line: "Saturday Coffee 2.0 · Coffee shop di Jatinegara, Jakarta Timur", // listing
  draft: "Draf mockup, belum dipublikasikan.",
};
