// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief, or is copy written for the mockup.
// Every mockup item is listed in ../owner-checklist.md.
// Sources in comments: (listing), (hours), (photos), (reviews n) refer to raw.json and brief.md.

export type Item = { text: string; mockup?: boolean };

export const site = {
  lang: "id",
  title: "Pabbo Unifirst · Coffee & Social Space",
  description:
    "Coffee & Social Space di Food Garden, Cakung, Jakarta Timur. Kopi, makanan dan musik, buka 24 jam setiap hari.",
  banner: "Draf mockup untuk Pabbo Unifirst, belum situs resmi.",
  skipLink: "Lewati ke konten",
};

export const shop = {
  name: "Pabbo Unifirst", // (listing)
  nameLines: ["Pabbo", "Unifirst"],
  descriptor: "Coffee & Social Space", // (listing)
  tagline: { text: "Unite your vibes.", mockup: true } as Item, // window graphics (photos), owner to confirm
  area: "Food Garden, Cakung · Jakarta Timur", // (listing)
  addressLines: [
    "Food Garden, RT.11/RW.8",
    "Cakung Timur, Kec. Cakung",
    "Jakarta Timur 13910",
  ], // (listing)
  locationLabel: { text: "di Food Garden JGC", mockup: true } as Item,
  hours: "Buka 24 jam · setiap hari", // (hours)
  hoursRow: "Senin–Minggu · 24 jam", // (hours)
  priceLevel: "Harga: menengah", // (listing) PRICE_LEVEL_MODERATE
  rating: "4,6", // (listing)
  reviewCount: 328, // (listing)
  badge: { text: "Logo Pabbo (sementara)", mockup: true } as Item, // red P stands in for the real logo
};

const mapQuery = "Pabbo Unifirst, Food Garden, Cakung Timur, Jakarta Timur 13910";

export const links = {
  directions: "https://maps.google.com/?cid=17569859189948075139", // (listing) googleMapsUri
  tel: "tel:+6282299217829", // (listing)
  phoneDisplay: "0822-9921-7829", // (listing)
  whatsapp: { url: "https://wa.me/6282299217829", mockup: true }, // owner to confirm WhatsApp
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`,
};

export const labels = {
  directions: "Petunjuk Arah",
  call: "Telepon",
  whatsapp: "WhatsApp",
  booking: "Tanya jadwal & booking",
  mapTitle: "Peta lokasi Pabbo Unifirst",
  mapLoading: "Memuat peta Google Maps…",
};

export const nav = [
  { label: "Menu", href: "#menu", phone: true },
  { label: "Musik & acara", href: "#musik", phone: false },
  { label: "Lokasi", href: "#lokasi", phone: false },
];

// Section 2: one place, two moods. Framing is [MOCKUP]; the facts are from photos and reviews.
export const dayNight = {
  heading: "Siang ngopi, malam nongkrong.",
  siang: {
    lead: "Siang ngopi,",
    body: {
      text: "Es kopi susu, nasi goreng, rice bowl. Duduk di kursi rotan berbantal krem, di meja kayu bundar, dan ngobrol selama yang kamu mau.",
      mockup: true,
    } as Item,
    facts: ["Kursi rotan", "Meja kayu bundar", "Bantal krem"], // (photos)
  },
  malam: {
    lead: "malam nongkrong.",
    body: {
      text: "Lampu panggung menyala, musik dari speaker di ujung hall, layar proyektor dan disco ball di atas kepala. Ajak teman, pesan kopi lagi.",
      mockup: true,
    } as Item,
    facts: ["Panggung", "Layar proyektor", "Lampu panggung", "Disco ball"], // (photos)
  },
};

export type Illustration =
  | "esKopiSusu"
  | "matchaLatte"
  | "nasiGoreng"
  | "riceBowl"
  | "indomieTelur"
  | "rotiBakar"
  | "kentangGoreng";

export type MenuItem = {
  name: string;
  desc: string;
  illustration: Illustration;
  mockup: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  priceFrom: Item;
  mockup?: boolean;
  items: MenuItem[];
};

// Dishes seen in photos; their menu names and all prices are [MOCKUP].
export const menu = {
  heading: "Menu andalan",
  intro: { text: "Yang paling sering ada di meja: kopi susu dingin, minuman hijau, nasi goreng dan rice bowl.", mockup: true } as Item,
  caption: { text: "Nama menu, harga dan ilustrasi masih contoh.", mockup: true } as Item,
  categories: [
    {
      id: "minuman",
      title: "Kopi & minuman",
      priceFrom: { text: "kopi mulai Rp 25rb", mockup: true },
      items: [
        {
          name: "Es Kopi Susu Pabbo",
          desc: "Kopi susu dingin di gelas berlogo P merah.",
          illustration: "esKopiSusu",
          mockup: true,
        },
        {
          name: "Matcha Latte",
          desc: "Hijau, dingin dan lembut, juga di gelas P.",
          illustration: "matchaLatte",
          mockup: true,
        },
      ],
    },
    {
      id: "makanan",
      title: "Makanan",
      priceFrom: { text: "nasi mulai Rp 35rb", mockup: true },
      items: [
        {
          name: "Nasi Goreng Pabbo",
          desc: "Telur ceplok, kerupuk, tomat, timun dan selada.",
          illustration: "nasiGoreng",
          mockup: true,
        },
        {
          name: "Rice Bowl Daging Cincang",
          desc: "Daging cincang berbumbu dan telur di atas nasi.",
          illustration: "riceBowl",
          mockup: true,
        },
      ],
    },
  ] as MenuCategory[],
  snacks: {
    id: "camilan",
    title: "Camilan malam",
    priceFrom: { text: "mulai Rp 20rb", mockup: true },
    mockup: true,
    items: [
      { name: "Indomie Goreng Telur", desc: "Teman begadang.", illustration: "indomieTelur", mockup: true },
      { name: "Roti Bakar", desc: "Hangat dari panggangan.", illustration: "rotiBakar", mockup: true },
      { name: "Kentang Goreng", desc: "Buat dibagi semeja.", illustration: "kentangGoreng", mockup: true },
    ],
  } as MenuCategory,
};

export const music = {
  heading: "Musik & acara",
  body: {
    text: "Di ujung hall ada panggung, speaker dan layar proyektor. Waktu lampu panggung menyala dan disco ball berputar, Pabbo jadi tempat dengar musik bareng teman.",
    mockup: true,
  } as Item,
  facts: ["Panggung & speaker", "Layar proyektor", "Lampu panggung & disco ball"], // (photos)
  mockupItems: [
    { text: "Malam musik akustik & bossa nova, jadwal menyusul", mockup: true },
    { text: "Hall bisa dipesan untuk acara & kumpul rombongan", mockup: true },
  ] as Item[],
  screen: {
    kicker: { text: "Malam musik · akustik & bossa nova", mockup: true } as Item,
    title: "Bossa Nova", // slide seen on the projection screen (photos)
    label: "Layar proyektor di ujung hall",
  },
};

// Paraphrased from the five listing reviews, in reported speech. No names, no quotes.
export const reviews = {
  heading: "Kata mereka",
  ratingLine: `${shop.rating} di Google · ${shop.reviewCount} ulasan`, // (listing)
  items: [
    {
      theme: "Musik & suasana",
      text: "Pengunjung memuji musiknya dan suasananya yang asyik.",
      sources: [1, 5],
    },
    {
      theme: "Kopi & makanan",
      text: "Kopinya disebut enak, makanan dan minumannya juga, jadi pas buat makan sekalian.",
      sources: [1, 2],
    },
    {
      theme: "Pelayanan",
      text: "Pelayanannya dibilang sangat baik, sampai ada yang ingin cepat balik lagi.",
      sources: [3],
    },
    {
      theme: "Layak mampir",
      text: "Dua pengunjung menyebut Pabbo tempat yang wajib didatangi.",
      sources: [3, 4],
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
};

export const contact = {
  heading: "Hubungi kami",
  body: { text: "Telepon atau WhatsApp ke nomor yang sama, untuk tanya menu, jadwal musik atau pesan hall.", mockup: true } as Item,
  footerSource: "Data dari Google Maps",
  footerDraft: "Draf mockup, belum situs resmi.",
};
