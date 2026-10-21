// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia. Menu names and "Low Price High Taste" stay as the shop prints them.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Cup Times & Warkop", // listing "CUP TIMES & WARKOP", normal capitals per brief
  nameLines: ["Cup Times", "& Warkop"],
  shortName: "Cup Times",
  type: "Kafe",
  address: "Jl. Permata No.3 C, Kebon Pala, Kec. Makasar, Jakarta Timur 13650", // listing
  addressLines: ["Jl. Permata No.3 C, Kebon Pala", "Kec. Makasar, Jakarta Timur 13650"],
  area: "Kebon Pala, Jakarta Timur",
  // raw.json googleMapsUri, tracking parameter dropped
  mapsUrl: "https://maps.google.com/?cid=315027762923123507",
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Cup Times & Warkop, Jl. Permata No.3 C, Kebon Pala, Makasar, Jakarta Timur") +
    "&output=embed",
  // No phone on the listing. Placeholder until the owner gives a number. Never a wa.me link without one.
  whatsapp: { number: null as string | null, mockup: true },
};

// Hours from raw.json regularOpeningHours. Saturday closes at 00:00 (midnight).
export const hours = {
  everyDay: "Buka setiap hari",
  today: "Buka hari ini",
  summary: "09.00–23.00, Sabtu sampai 00.00",
  rows: [
    { days: "Senin–Jumat", time: "09.00–23.00" },
    { days: "Sabtu", time: "09.00–00.00" },
    { days: "Minggu", time: "09.00–23.00" },
  ],
  // 0 = Minggu ... 6 = Sabtu, pointing into rows
  byWeekday: [2, 0, 0, 0, 0, 0, 1],
};

export const ui = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappPending: "WhatsApp · nomor menyusul",
  seeMenu: "Lihat menu",
  skip: "Langsung ke konten",
  nav: [
    { href: "#menu", label: "Menu" },
    { href: "#tempat", label: "Tempat" },
    { href: "#lokasi", label: "Lokasi" },
  ],
};

export const banner =
  "Draf situs untuk Cup Times & Warkop. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const hero = {
  line: "Kopi enak, harga bersahabat, di Kebon Pala.", // review 4 + listing
  photo: {
    src: "/img/kiosk-malam.jpg",
    width: 488,
    height: 774,
    alt: "Kios Cup Times & Warkop pada malam hari, dengan lampu gantung dan dinding sachet minuman di belakang meja.",
  },
  // Copied from the labels on the owner's cups (owner-4). Price to be confirmed as current.
  sticker: { brand: "CUP TIMES", item: "Es Latte", price: "Rp 15.000", tagline: "Low Price High Taste" },
};

export const menu = {
  heading: "Menu andalan",
  lead: "Kopi enak nggak harus mahal.",
  tagline: "Low Price High Taste.", // as printed on the cups (owner-4)
};

// Sourced: owner-4 (labels "CUP TIMES / Vanilla Latte / Rp 15.000"). Butterscotch stays off until confirmed.
export const cupTimes = {
  heading: "Cup Times",
  lattes: [
    { name: "Vanilla Latte", price: "Rp 15.000", tint: "#E3CFA8", tilt: -2 },
    { name: "Caramel Latte", price: "Rp 15.000", tint: "#C99560", tilt: 1 },
    { name: "Hazelnut Latte", price: "Rp 15.000", tint: "#A57650", tilt: -1 },
  ],
  photo: {
    src: "/img/latte-cup-times.jpg",
    width: 1200,
    height: 554,
    alt: "Deretan es latte Cup Times dengan label harga Rp 15.000.",
    caption: "Es latte Cup Times dengan label harganya.",
  },
};

export type MenuItem = { name: string; price?: string; note?: string; mockup?: boolean };

export const warkop = {
  heading: "& Warkop",
  intro: {
    text: "Pesan kopi susu, lalu betah: Indomie, roti bakar, satu ronde lagi bareng teman.",
    mockup: true,
  } as Item,
  // Roti bakar is sourced (owner-2 post); fillings and price are [MOCKUP]. owner-2 itself is not shown.
  roti: {
    name: "Roti Bakar",
    variants: { text: "Cokelat Keju · Srikaya", mockup: true } as Item,
    price: { text: "Rp 15rb", mockup: true } as Item,
  },
  items: [
    { name: "Indomie Goreng / Rebus Telur", price: "Rp 12rb", mockup: true },
    { name: "Indomie Kornet", mockup: true },
    { name: "Pisang Goreng", price: "Rp 10rb", mockup: true },
    { name: "Nasi Telur Ceplok", mockup: true },
    // Kopi sachet from the sachet wall is sourced (owner-1); the price is [MOCKUP].
    { name: "Kopi sachet", price: "Rp 5rb", note: "Pilih dari dinding renceng, diseduh di tempat.", mockup: true },
    { name: "Es Teh Manis", price: "Rp 5rb", mockup: true },
  ] as MenuItem[],
  alsoLabel: "Juga ada:",
  alsoServed: [
    { text: "Kopi Susu Gula Aren", mockup: true },
    { text: "Kopi Hitam", mockup: true },
    { text: "Americano", mockup: true },
    { text: "Cappuccino", mockup: true },
    { text: "Teh Tarik", mockup: true },
    { text: "Milo", mockup: true },
    { text: "Matcha Latte", mockup: true },
    { text: "Red Velvet", mockup: true },
  ] as Item[],
};

export const night = {
  heading: "Nongkrong sampai malam",
  line: "Lampu gantung di bawah pohon, kursi bar di depan kios, meja di halaman.", // photos owner-1, owner-3
  hoursLine: "Buka sampai 23.00 setiap hari. Sabtu sampai tengah malam.", // hours
  photo: {
    src: "/img/es-kopi-susu.jpg",
    width: 800,
    height: 1000,
    alt: "Segelas es kopi susu di halaman Cup Times pada malam hari.",
    caption: "Es kopi susu di halaman, malam hari",
  },
  facilitiesLabel: "Fasilitas",
  facilities: [
    { text: "Tempat duduk outdoor", mockup: true },
    { text: "Parkir motor", mockup: true },
    { text: "Cocok buat meeting santai", mockup: true },
  ] as Item[],
};

// Paraphrased from real reviews only. Never quoted, never attributed, no dates or stars.
export const praise = {
  heading: "Kata mereka",
  note: "Diringkas dari ulasan di Google Maps.",
  items: [
    { text: "Kopinya enak, harganya bersahabat." }, // review 4
    { text: "Pemilik dan stafnya ramah." }, // review 1
    { text: "Pilihan minumannya banyak, pasti ada yang cocok." }, // review 2
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Cup Times & Warkop",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Nomor WhatsApp segera menyusul. Sementara itu, langsung mampir aja.",
    mockup: true,
  } as Item,
};

export const footer = {
  draft: "Ini draf situs untuk ditinjau pemilik.",
};

export const meta = {
  title: "Cup Times & Warkop · Kopi murah di Kebon Pala, Jakarta Timur",
  description:
    "Es latte Rp 15.000, roti bakar, dan tempat nongkrong sampai malam di Jl. Permata No.3 C, Kebon Pala, Makasar. Buka setiap hari 09.00–23.00, Sabtu sampai 00.00.",
};
