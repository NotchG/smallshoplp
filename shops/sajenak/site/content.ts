// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Sajenak",
  tagline: "space for everyone", // under the logo (photos: owner-2)
  menuTagline: "Feel like home", // on the menu board (photos: owner-4)
  type: "Kafe",
  address: "Jl. Rawa Domba No.47A, Duren Sawit, Kec. Duren Sawit, Jakarta Timur 13440",
  addressLines: ["Jl. Rawa Domba No.47A, Duren Sawit,", "Kec. Duren Sawit, Jakarta Timur 13440"],
  phone: "0856-9317-2926",
  tel: "+6285693172926",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SAJENAK&query_place_id=ChIJIRSyIl-NaS4RB4COoTsZbRk",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=SAJENAK&destination_place_id=ChIJIRSyIl-NaS4RB4COoTsZbRk",
  mapEmbed:
    "https://www.google.com/maps?q=SAJENAK%2C%20Jl.%20Rawa%20Domba%20No.47A%2C%20Duren%20Sawit%2C%20Jakarta%20Timur&output=embed",
  // The 0856 number is a mobile number, assumed to take WhatsApp. Owner to confirm.
  whatsapp: {
    url: "https://wa.me/6285693172926?text=Halo%20Sajenak%2C%20saya%20mau%20tanya%20meja",
    mockup: true,
  },
  rating: "4,9",
  reviewCount: 455,
};

export const meta = {
  title: "Sajenak · space for everyone · Kafe di Duren Sawit",
  description:
    "Kafe dengan taman, ruang baca, dan rooftop di Jl. Rawa Domba No.47A, Duren Sawit, Jakarta Timur. Buka setiap hari 07.30–23.00, Jumat–Sabtu sampai 24.00.",
  banner: "Draf mockup untuk Sajenak. Beberapa detail masih contoh sampai kamu konfirmasi.",
};

// dayIdx: 0 = Minggu (Sunday) … 6 = Sabtu, as in raw.json periods.
export type HoursRow = { days: string; time: string; close: string; dayIdx: number[] };
export const hours: HoursRow[] = [
  { days: "Minggu–Kamis", time: "07.30–23.00", close: "23.00", dayIdx: [0, 1, 2, 3, 4] },
  { days: "Jumat–Sabtu", time: "07.30–24.00", close: "24.00", dayIdx: [5, 6] },
];
export const hoursCopy = {
  fallback: "Buka setiap hari · 07.30–23.00, Jumat–Sabtu sampai 24.00",
  fallbackMain: "Buka setiap hari 07.30–23.00",
  fallbackNote: "Jumat–Sabtu sampai 24.00",
  today: "Buka hari ini",
  todayMarker: "hari ini",
  everyDay: "Buka setiap hari.",
};

export const hero = {
  sub: { text: "Kopi, taman, dan rooftop di Rawa Domba — buka dari pagi.", mockup: true } as Item,
  // Redrawn from the logo on owner-2 until the owner sends the original file.
  logoMark: { mockup: true },
  photo: {
    src: "/img/hero-garden-1600.jpg",
    srcSet: "/img/hero-garden-900.jpg 900w, /img/hero-garden-1600.jpg 1420w",
    width: 1420,
    height: 1066,
  },
  photoAlt:
    "Taman Sajenak: rumput hijau, meja kayu panjang dan kursi putih, kuning, dan toska di depan rumah papan putih",
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
};

export type DrinkArtKind = "sajenak" | "sepintas" | "rumit" | "butterscotch";
export type Drink = { name: string; price: string; desc?: string; art?: DrinkArtKind; artLabel?: string };

export const menu = {
  title: "Menu andalan",
  lead: "Empat yang kami beri bintang di menu.",
  starLabel: "favorit",
  photo: {
    src: "/img/butterscotch.jpg",
    width: 794,
    height: 610,
    alt: "Creamy Butterscotch Latte dalam gelas plastik bening dengan logo Sajenak, busa tebal bertabur bubuk cokelat",
    caption: "Creamy Butterscotch Latte, dari poster promo Sajenak.",
  },
  coffeeTitle: "Kopi lainnya",
  mockupTag: "contoh",
};

// Starred on the shop's own menu board (photos: owner-4). Prices as printed.
export const starred: Drink[] = [
  {
    name: "Es Kopi Sajenak",
    price: "Rp 26rb",
    desc: "Kopi susu caramel dengan creamy ice cream vanila.",
    art: "sajenak",
    artLabel: "Gambar Es Kopi Sajenak: kopi susu dengan saus caramel dan satu scoop es krim vanila di atasnya",
  },
  {
    name: "Es Kopi Sepintas",
    price: "Rp 26rb",
    desc: "Es kopi susu gula aren yang creamy.",
    art: "sepintas",
    artLabel: "Gambar Es Kopi Sepintas: lapisan gula aren di dasar gelas, kopi susu creamy dan es batu di atasnya",
  },
  {
    name: "Es Kopi Rumit",
    price: "Rp 28rb",
    desc: "Kopi susu hazelnut dengan creamy ice cream cokelat.",
    art: "rumit",
    artLabel: "Gambar Es Kopi Rumit: kopi susu hazelnut dengan satu scoop es krim cokelat di atasnya",
  },
  {
    name: "Creamy Butterscotch Latte",
    price: "Rp 30rb",
    desc: "Favorit yang sampai punya poster sendiri.",
    art: "butterscotch",
    artLabel: "Gambar Creamy Butterscotch Latte: susu di atas lapisan butterscotch, busa tebal bertabur bubuk",
  },
];

// The rest of the coffee page on the menu board (photos: owner-4).
export const coffee: Drink[] = [
  { name: "Affogato", price: "Rp 27,5rb", desc: "Satu shot espresso di atas ice cream." },
  { name: "Americano | Long Black", price: "Rp 20rb" },
  { name: "Cafe Latte", price: "Rp 20rb" },
  { name: "Cappuccino", price: "Rp 25rb" },
  { name: "Coffee Beer", price: "Rp 28rb", desc: "Kopi, karamel, dan soda." },
  { name: "Caramel Latte", price: "Rp 27rb" },
  { name: "Hazelnut Latte", price: "Rp 30rb" },
  { name: "Vanilla Latte", price: "Rp 30rb" },
];

export type MenuGroup = {
  title: string;
  mockup: boolean;
  rows: { items: string[]; range: string }[];
};

// [MOCKUP] The menu photos only show the coffee page. Owner to confirm items and ranges.
export const nonCoffee: MenuGroup = {
  title: "Non-kopi",
  mockup: true,
  rows: [{ items: ["Chocolate", "Matcha Latte", "Red Velvet", "Lychee Tea", "Lemon Tea"], range: "Rp 22rb–28rb" }],
};

export const food: MenuGroup = {
  title: "Makanan",
  mockup: true,
  rows: [
    { items: ["Nasi Goreng Sajenak", "Rice Bowl Ayam Sambal Matah", "Mie Goreng"], range: "Rp 30rb–45rb" },
    { items: ["Kentang Goreng", "Cireng", "Roti Bakar", "Pisang Goreng"], range: "Rp 18rb–28rb" },
  ],
};

export type SpaceImg = { src: string; width: number; height: number; alt: string };
export type Space = { id: string; label: string; desc: string; img: SpaceImg[]; mockupLabel?: boolean };

export const spacesCopy = {
  title: "Pilih tempatmu",
  intro:
    "Taman rumput di depan, ruang-ruang di dalam, rooftop di atas. Di dalam ada kursi bayi dan photobox, dan di taman ada kucing yang suka ikut nongkrong.",
};

// Space names are ours, not the shop's (owner to confirm).
export const spaces: Space[] = [
  {
    id: "pojok-rotan",
    label: "Pojok rotan",
    desc: "Dinding kuning hangat, kursi rotan berbantal, meja akar jati di atas lantai kerikil.",
    mockupLabel: true,
    img: [
      {
        src: "/img/pojok-rotan.jpg",
        width: 1600,
        height: 1068,
        alt: "Pojok rotan dengan dinding kuning, kursi rotan berbantal abu-abu dan meja akar jati di atas kerikil",
      },
    ],
  },
  {
    id: "ruang-baca",
    label: "Ruang baca",
    desc: "Dinding beton, rak buku, neon bola dunia, dan jendela ke arah kebun. Meja di sini bisa dipesan.",
    mockupLabel: true,
    img: [
      {
        src: "/img/ruang-baca.jpg",
        width: 1200,
        height: 800,
        alt: "Ruang baca berdinding beton dengan rak buku, sofa gelap, kursi rotan, neon bola dunia dan jendela ke kebun",
      },
    ],
  },
  {
    id: "rooftop",
    label: "Rooftop",
    desc: "Tribun beton bertingkat, pohon di bak bata merah, dan untaian lampu di atas kepala.",
    mockupLabel: true,
    img: [
      {
        src: "/img/rooftop-tribun.jpg",
        width: 840,
        height: 1120,
        alt: "Tribun beton bertingkat di rooftop di bawah untaian lampu, langit sore",
      },
      {
        src: "/img/rooftop-pohon.jpg",
        width: 840,
        height: 1120,
        alt: "Rooftop dengan pohon di bak bata merah, meja bundar biru tua dan untaian lampu di bawah langit biru",
      },
    ],
  },
];

export const praiseCopy = {
  title: "Kata mereka",
  ratingLine: `${shop.rating} di Google · ${shop.reviewCount} ulasan`,
  note: "Dirangkum dari ulasan Google, bukan kutipan langsung.",
};

// Paraphrased from real reviews only (reviews 1–5). Never invented, never attributed to a name.
export const praise: Item[] = [
  { text: "Nyaman buat nongkrong bareng teman, dan makanan serta minumannya enak." },
  { text: "Baristanya dapat nilai sempurna, pelayanannya juga bagus." },
  { text: "Suasana, musik, dan harganya pas, terasa seperti kedai kopi yang otentik." },
  { text: "Ada yang menjadikannya tempat favorit sejak masa sekolah, penuh kenangan, dan selalu ingin balik lagi." },
];

export const visit = {
  title: "Kunjungi kami",
  directions: "Petunjuk Arah",
  mapTitle: "Peta lokasi Sajenak",
  hoursCaption: "Jam buka",
};

export const contact = {
  title: "Hubungi kami",
  line: { text: "Mau datang rame-rame? Pesan meja lewat WhatsApp dulu.", mockup: true } as Item,
  whatsapp: "WhatsApp",
  call: `Telepon ${shop.phone}`,
  closing: { text: "Pagi ngopi, malam ke rooftop. Semua kebagian tempat.", mockup: true } as Item,
};

export const footer = {
  name: `${shop.name} · ${shop.tagline}`,
  draft: "Draf mockup, belum dipublikasikan.",
};
