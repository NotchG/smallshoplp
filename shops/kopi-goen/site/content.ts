// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief, or was written to fill the page.
// Every mockup item is listed in ../owner-checklist.md. Sources in comments:
// (listing) raw.json, (hours) opening hours, (reviews N) Google review N, (photos) customer photos.

export type Item = { text: string; mockup?: boolean };

export const banner = "Draf: contoh situs untuk Kopi Goen, belum resmi.";

export const meta = {
  title: "Kopi Goen · Kedai kopi di kebun, Balekambang, Jakarta Timur",
  description:
    "Ngopi di kebun dari siang sampai malam di Jl. Munggang, Balekambang. Buka setiap hari 12.00–23.00, Jumat mulai 12.30.",
};

export const shop = {
  name: "Kopi Goen", // (listing)
  eyebrow: "Kedai kopi di kebun · Balekambang, Jakarta Timur", // (listing, photos)
  tagline: { text: "Ngopi di kebun, dari siang sampai malam.", mockup: true } as Item,
};

// (listing) The listed house number "No.rt05 5" looks garbled, so it is left out until confirmed.
// Kecamatan Kramat Jati is not printed: the listing does not say it.
export const address = {
  street: "Jl. Munggang",
  rtrw: "RT.6/RW.4",
  area: "Balekambang",
  city: "Jakarta Timur",
  postcode: "13530",
  houseNumberNote: { text: "Nomor rumah menyusul", mockup: true } as Item,
};
export const addressLines = [
  `${address.street}, ${address.rtrw}`,
  `${address.area}, ${address.city} ${address.postcode}`,
];

export const phone = { display: "0878-1105-0836", tel: "tel:+6287811050836" }; // (listing)
export const whatsapp = { href: "https://wa.me/6287811050836", mockup: true }; // assumed to take WhatsApp

export const maps = {
  // Directions and keyless embed, from the place id in raw.json (listing)
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Kopi%20Goen&destination_place_id=ChIJnRo87ZHzaS4RKRVDIdGtPWg",
  embed:
    "https://maps.google.com/maps?q=Kopi%20Goen%2C%20Jl.%20Munggang%2C%20Balekambang%2C%20Jakarta%20Timur&z=17&output=embed",
};

// (hours) Keyed by JS weekday: 0 = Minggu ... 6 = Sabtu. Times as printed on the page.
export const hours = {
  byDay: [
    { day: "Minggu", open: "12.00", close: "23.00" },
    { day: "Senin", open: "12.00", close: "23.00" },
    { day: "Selasa", open: "12.00", close: "23.00" },
    { day: "Rabu", open: "12.00", close: "23.00" },
    { day: "Kamis", open: "12.00", close: "23.00" },
    { day: "Jumat", open: "12.30", close: "23.00" },
    { day: "Sabtu", open: "12.00", close: "23.00" },
  ],
  rows: [
    { label: "Senin–Kamis", time: "12.00–23.00", days: [1, 2, 3, 4] },
    { label: "Jumat", time: "12.30–23.00", days: [5] },
    { label: "Sabtu–Minggu", time: "12.00–23.00", days: [6, 0] },
  ],
  everyDay: "Buka setiap hari",
  // Shown before the page knows today's date (first paint, JS off)
  summary: { lead: "Buka setiap hari", time: "12.00–23.00", note: "Jumat mulai 12.30" },
  today: "Buka hari ini",
  openNow: "Sedang buka",
  closed: "Tutup",
  reopenToday: "buka lagi pukul",
  reopenTomorrow: "buka besok pukul",
  todayTag: "hari ini",
};

export const rating = { value: "4,7", count: 275, source: "Google" }; // (listing)

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#suasana", label: "Suasana" },
  { href: "#lokasi", label: "Lokasi" },
];

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export type Visual = "es-kopi-aren" | "havana-frame" | "cappuccino" | "v60" | "kentang";
export type Product = {
  id: string;
  name: Item;
  price: Item;
  desc: Item;
  visual: Visual;
  art: string; // Indonesian label for the drawing or frame
};

export const menu = {
  heading: "Menu andalan",
  // (reviews 2, 3)
  intro: "Dimulai dari yang dipuji tamu di ulasan Google: es kopi aren dan kopi Havana.",
  featured: [
    {
      id: "es-kopi-aren",
      name: { text: "Es Kopi Aren" }, // (reviews 3)
      price: { text: "Rp 20rb", mockup: true },
      desc: { text: "Kopi, susu, dan gula aren di atas es.", mockup: true },
      visual: "es-kopi-aren",
      art: "Gambar Es Kopi Aren dalam gelas tinggi berisi es, di atas kursi kubus beton",
    },
    {
      id: "kopi-havana",
      name: { text: "Kopi Havana", mockup: true }, // (reviews 2) spelling to confirm
      price: { text: "Rp 25rb", mockup: true },
      desc: { text: "Racikan khas Kopi Goen.", mockup: true },
      visual: "havana-frame",
      art: "Tempat foto Kopi Havana, menunggu foto dari pemilik",
    },
    {
      id: "cappuccino",
      name: { text: "Cappuccino", mockup: true }, // latte art seen in photos
      price: { text: "Rp 25rb", mockup: true },
      desc: { text: "Espresso dan susu, dengan latte art.", mockup: true },
      visual: "cappuccino",
      art: "Gambar Cappuccino dengan latte art, di atas kursi kubus beton",
    },
    {
      id: "v60",
      name: { text: "V60", mockup: true },
      price: { text: "Rp 25rb", mockup: true },
      desc: { text: "Seduh manual, biji lokal bergiliran.", mockup: true },
      visual: "v60",
      art: "Gambar dripper V60 di atas server kaca, di atas kursi kubus beton",
    },
    {
      id: "kentang-goreng",
      name: { text: "Kentang Goreng", mockup: true },
      price: { text: "Rp 18rb", mockup: true },
      desc: { text: "Gurih, teman ngopi sore.", mockup: true },
      visual: "kentang",
      art: "Gambar Kentang Goreng dalam keranjang, di atas kursi kubus beton",
    },
  ] as Product[],
  priceNote: { text: "Harga contoh, menunggu konfirmasi pemilik.", mockup: true } as Item,
  moreHeading: "Menu lainnya",
  groups: [
    { name: "Espresso", items: ["Americano", "Caffe Latte", "Piccolo"], mockup: true },
    { name: "Manual brew", items: ["Kopi Tubruk"], note: "Biji lokal bergiliran", mockup: true },
    { name: "Non-kopi", items: ["Matcha Latte", "Coklat", "Lychee Tea", "Teh Tarik"], mockup: true },
    { name: "Camilan", items: ["Pisang Goreng", "Roti Bakar", "Indomie Goreng"], mockup: true },
  ],
  bar: {
    frame: "Foto bar espresso dari pemilik",
    caption: "Di bar ada mesin espresso krom buatan Italia.", // (photos)
  },
};

export const garden = {
  heading: "Suasana kebun",
  intro: "Tempatnya terbuka, di antara pohon tua, pakis, dan tempat duduk dari beton.", // (reviews 4, photos)
  calm: { text: "Tenang dan santai, sudut hijau di tengah permukiman.", mockup: true } as Item,
  day: {
    title: "Siang",
    when: "Mulai tengah hari", // (hours)
    line: "Pohon tua berhias pakis tanduk rusa, kerikil, dan kursi kubus beton.", // (photos)
    frame: "Foto kebun siang dari pemilik",
  },
  night: {
    title: "Malam",
    when: "Sampai pukul 23.00", // (hours)
    line: "Begitu gelap, pohon dan jalan setapak disinari dari bawah.", // (reviews 4, photos)
    frame: "Foto kebun malam dari pemilik",
  },
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const reviews = {
  heading: "Kata mereka",
  items: [
    { text: "Es kopi arennya disebut yang terbaik di kota.", source: "reviews 3" },
    { text: "Ada yang menyebut baristanya paling ramah.", source: "reviews 3" },
    { text: "Tempatnya terbuka, dan makin cantik saat malam tiba.", source: "reviews 4" },
    { text: "Kopi Havana-nya dipuji tamu belakangan ini.", source: "reviews 2" },
  ],
  note: "Diringkas dari ulasan Google.",
};

export const visit = {
  heading: "Kunjungi kami",
  addressHeading: "Alamat",
  hoursCaption: "Jam buka",
  mapTitle: "Peta lokasi Kopi Goen",
};

export const close = {
  heading: { text: "Sampai ketemu di kebun.", mockup: true } as Item,
  line: { text: "Mau tanya menu atau jam buka? Kirim pesan atau telepon saja.", mockup: true } as Item,
};

export const footer = {
  note: "Situs ini draf contoh. Sebagian isi masih menunggu konfirmasi pemilik.",
};
