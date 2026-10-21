// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: listing, hours, description, review N (raw.json), photos (brief.md).

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Kopi Made",
  // The sign writes it as one lowercase word. Set in a stand-in script until the owner sends the logo.
  wordmark: { text: "kopimade", mockup: true } as Item,
  type: "Kedai kopi",
  street: "Jl. Radin Inten II No. 213",
  area: "Klender, Duren Sawit, Jakarta Timur 13470",
  shortAddress: "Jl. Radin Inten II No. 213, Klender",
  landmarkShort: "seberang Buaran Plaza", // review 2
  landmark: "Di jalan utama, seberang Buaran Plaza dan Electronic City.", // review 2
  mapsUrl: "https://maps.google.com/?cid=8082327129688560767", // raw.json googleMapsUri
  mapEmbedUrl:
    "https://www.google.com/maps?q=Kopi+Made,+Jl.+Radin+Inten+II+No.213,+Klender,+Jakarta+Timur&output=embed",
  // The listing has no phone number. Buttons point to #kunjungi until the owner gives one.
  whatsapp: { number: "", mockup: true },
  phone: { number: "", mockup: true },
  instagram: { url: "", mockup: true }, // only rendered if the owner has one
  rating: { value: "4,4", count: 577 }, // listing
};

export const meta = {
  title: "Kopi Made · Kopi seduh di seberang Buaran Plaza, Klender",
  description:
    "Kedai kopi kecil dan tenang di Jl. Radin Inten II No. 213, Klender, Jakarta Timur. Manual brew, Es kopimade, Nasi Goreng Made. Senin–Sabtu 10.00–22.00.",
};

// Hours from raw.json. jsDay matches Date.getDay() (0 = Minggu).
export type Day = {
  day: string;
  jsDay: number;
  open?: string;
  close?: string;
  openMin?: number;
  closeMin?: number;
  closed?: boolean;
};
export const hours: Day[] = [
  { day: "Senin", jsDay: 1, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Selasa", jsDay: 2, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Rabu", jsDay: 3, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Kamis", jsDay: 4, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Jumat", jsDay: 5, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Sabtu", jsDay: 6, open: "10.00", close: "22.00", openMin: 600, closeMin: 1320 },
  { day: "Minggu", jsDay: 0, closed: true },
];
export const hoursSummary = "Senin–Sabtu 10.00–22.00 · Minggu tutup";
export const hoursLines = ["Senin–Sabtu 10.00–22.00", "Minggu tutup"];

export const hero = {
  tagline: "Kopi seduh tenang di seberang Buaran Plaza.", // review 2, tone
  photo: {
    src: "/img/ruang.jpg", // owner-1.jpg, uploaded by the business
    width: 1138,
    height: 638,
    alt: "Sudut dalam Kopi Made: meja dan kursi kayu di depan sofa kulit panjang",
  },
};

export const ui = {
  banner: "Draf mockup untuk Kopi Made. Beberapa detail masih contoh sampai dikonfirmasi.",
  skip: "Langsung ke isi",
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  instagram: "Instagram",
  numbersSoon: { text: "Nomor WhatsApp dan telepon menyusul.", mockup: true } as Item,
  today: "Hari ini",
  // Shown before JS runs (and with JS off): the plain week.
  todayStatic: "Buka Senin–Sabtu",
  todayStaticSub: "10.00–22.00 · Minggu tutup",
  openNow: (close: string) => `Buka sekarang, sampai ${close}`,
  beforeOpen: (open: string) => `Belum buka, mulai ${open}`,
  closedTonight: (nextDay: string, open: string) => `Sudah tutup, buka lagi ${nextDay} ${open}`,
  closedToday: (nextDay: string, open: string) => `Hari ini tutup, buka ${nextDay} ${open}`,
  tomorrow: "besok",
  hoursCaption: "Jam buka",
  todayTag: "hari ini",
  closed: "Tutup",
  mapTitle: "Peta lokasi Kopi Made",
  footerNote: "Draf mockup. Detail yang masih contoh menunggu konfirmasi pemilik.",
};

export const seduh = {
  heading: "Pilih biji, pilih cara seduh",
  // Brief tone example; implies guests choose the origin, which the owner should confirm.
  intro: {
    text: "Pilih biji kopinya, pilih cara seduhnya. Sisanya biar kami yang urus.",
    mockup: true,
  } as Item,
  beansHeading: "Biji kopi",
  origins: ["Sumatra", "Bali"], // jar labels, photos
  jarsLine: { text: "Toples berlabel asal berjajar di rak bar, dari Sumatra sampai Bali." } as Item, // photos
  roasting: { text: "Biji kopinya disangrai di sini, dan kamu bisa melihat prosesnya." } as Item, // review 5 (2020)
  takeHome: { text: "Bawa pulang biji sangrai, 200 g sekitar Rp 85rb.", mockup: true } as Item,
  methodsHeading: "Cara seduh",
};

export type Brew = {
  name: string;
  icon: "aeropress" | "v60" | "coldbrew" | "frenchpress" | "vietnam" | "colddrip";
  line: Item; // one process line per method, mockup copy
  price?: Item;
};
// Methods: review 4, photos (menu board, towers on the bar).
export const brew: Brew[] = [
  { name: "AeroPress", icon: "aeropress", line: { text: "Ditekan perlahan, hasilnya bersih dan ringan.", mockup: true } },
  {
    name: "V60 (Pour Over)",
    icon: "v60",
    line: { text: "Dituang memutar di atas kertas saring.", mockup: true },
    price: { text: "Rp 35rb", mockup: true },
  },
  { name: "Cold Brew", icon: "coldbrew", line: { text: "Direndam dingin berjam-jam, lembut di lidah.", mockup: true } },
  { name: "French Press", icon: "frenchpress", line: { text: "Direndam lalu ditekan, badannya lebih tebal.", mockup: true } },
  { name: "Vietnam Drip", icon: "vietnam", line: { text: "Menetes pelan dari phin ke gelas.", mockup: true } },
  { name: "Cold Drip", icon: "colddrip", line: { text: "Setetes demi setetes dari menara kaca di bar.", mockup: true } },
];

export type Illo = "eskopimade" | "avocado" | "thickshake" | "nasigoreng" | "carbonara" | "pisang";
export type Featured = { name: string; note?: Item; price?: Item; illo: Illo; alt: string };
export type Group = { label: string; note?: string; items: Item[] };
export type Board = { title: string; featured: Featured[]; groups: Group[] };

const items = (...names: string[]): Item[] => names.map((text) => ({ text }));

export const menu = {
  heading: "Menu andalan",
  note: { text: "Menu dibaca dari papan menu di bar." } as Item, // photos, date unknown
  priceNote: { text: "Harga contoh, menunggu konfirmasi.", mockup: true } as Item,
  minum: {
    title: "Minum",
    featured: [
      {
        name: "Es kopimade",
        note: { text: "Es kopi andalan rumah" },
        price: { text: "Rp 28rb", mockup: true },
        illo: "eskopimade",
        alt: "Ilustrasi Es kopimade: gelas tinggi berisi kopi, lapisan susu, es batu dan sedotan",
      },
      {
        name: "Avocado Coffee",
        note: { text: "Ice blended" },
        price: { text: "Rp 40rb–45rb", mockup: true },
        illo: "avocado",
        alt: "Ilustrasi Avocado Coffee: gelas plastik berisi alpukat blend dengan kopi di atasnya",
      },
      {
        name: "Thick Shake",
        note: { text: "Buat yang tidak ngopi" }, // review 5
        illo: "thickshake",
        alt: "Ilustrasi Thick Shake: gelas tebal berisi shake kental dengan sedotan lebar",
      },
    ],
    groups: [
      { label: "Manual Brew", items: items("AeroPress", "V60 (Pour Over)", "Cold Brew", "French Press", "Vietnam Drip") },
      {
        label: "Espresso Bar",
        items: items(
          "Espresso",
          "Espresso Affogato",
          "Espresso Shake",
          "Americano",
          "Long Black",
          "Piccolo Latte",
          "Cappuccino",
          "Caffe Latte",
          "Flavoured Latte",
        ),
      },
      {
        label: "Ice Blended",
        items: items(
          "Avocado Coffee",
          "Mocha",
          "Cookies",
          "Green Tea Coffee",
          "Chocolate Dream",
          "Strawberry Cream",
          "Green Tea Cream",
        ),
      },
      {
        label: "Non-Kopi",
        items: items(
          "Chocolate",
          "Flavoured Chocolate",
          "Green Tea Latte",
          "Milk Tea",
          "Flavoured Milk",
          "Aneka teh",
          "Italian Soda",
          "Thick Shake",
        ),
      },
    ],
  } as Board,
  // Es kopimade is also sold to go (photos: menu board). Its own small board on the menu wall.
  toGo: {
    title: "Es kopimade untuk dibawa pulang",
    items: items("Latte", "Mocha", "Signature", "Bold"),
  },
  makan: {
    title: "Makan",
    featured: [
      {
        name: "Nasi Goreng Made",
        price: { text: "Rp 38rb", mockup: true },
        illo: "nasigoreng",
        alt: "Ilustrasi Nasi Goreng Made: nasi goreng di atas piring dengan sendok dan garpu",
      },
      {
        name: "Fettuccine Carbonara",
        note: { text: "Dipuji karena creamy" }, // review 2
        price: { text: "Rp 50rb", mockup: true },
        illo: "carbonara",
        alt: "Ilustrasi Fettuccine Carbonara: pasta pita di piring bertepi dengan irisan daging dan keju",
      },
      {
        name: "Pisang Goreng Made",
        price: { text: "Rp 25rb", mockup: true },
        illo: "pisang",
        alt: "Ilustrasi Pisang Goreng Made: empat potong pisang goreng di atas piring",
      },
    ],
    groups: [
      { label: "Nasi & Mie", items: items("Nasi Goreng Made", "Mie Goreng Made") },
      { label: "Pasta", items: items("Spaghetti Aglio Olio", "Spaghetti Bolognaise", "Fettuccine Carbonara") },
      {
        label: "Camilan & Manis",
        items: [
          { text: "French Fries" },
          { text: "Pisang Goreng Made" },
          { text: "Sundae Ice Cream" },
          { text: "Cireng", mockup: true }, // a counter card seems to advertise it
        ],
      },
    ],
  } as Board,
};

export const tempat = {
  heading: "Tempat yang tenang",
  // description, reviews 1 and 3
  statement:
    "Ruangnya kecil dan redup, tersembunyi dari riuh Buaran. Pas untuk ngobrol pelan atau kerja beberapa jam.",
  facts: [
    { text: "Tanpa live music yang bising" }, // review 1
    { text: "Kecil dan tidak ramai" }, // review 2
    { text: "Wi-Fi cepat" }, // review 4 (2017)
    { text: "Sofa kulit panjang dan meja kayu" }, // owner-1
  ] as Item[],
  praiseHeading: "Kata mereka",
  ratingLine: `${shop.rating.value} di Google dari ${shop.rating.count} ulasan`,
  // Paraphrased from real reviews only. Never quoted, never attributed to a name.
  praise: [
    { text: "Terasa seperti tempat tersembunyi yang tenang, jauh dari hiruk-pikuk sekitar Buaran." }, // reviews 2, 3
    { text: "Kopinya cocok untuk pencinta kopi, dan ada cold brew juga." }, // reviews 3, 4
    { text: "Carbonara-nya creamy, yang paling disarankan untuk dicoba." }, // review 2
    { text: "Enak untuk kerja: tidak terlalu ramai, dan Wi-Fi-nya kencang." }, // reviews 2, 4
  ] as Item[],
};

export const kunjungi = {
  heading: "Kunjungi kami",
};
