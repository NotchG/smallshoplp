// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Dish names stay exactly as the shop uses them.

export type Item = { text: string; mockup?: boolean };

const PLACE_ID = "ChIJW3mgWh_zaS4R6nTOcpRfyd0";

export const shop = {
  name: "Rise n Roll Cake & Bakery", // listing: "Rise n Roll cake and bakery"
  type: "Cheesecake & kafe",
  area: "Lubang Buaya, Jakarta Timur",
  address: "Jl. Monumen Pancasila Sakti No. 14, Lubang Buaya, Cipayung, Jakarta Timur 13810",
  phone: "", // not in the listing, so there is no call button
  mapsUrl: "https://maps.google.com/?cid=15981409843886847210",
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Rise%20n%20Roll%20cake%20and%20bakery&destination_place_id=${PLACE_ID}`,
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rise%20n%20Roll%20cake%20and%20bakery%2C%20Jl.%20Monumen%20Pancasila%20Sakti%20No.14%2C%20Lubang%20Buaya&output=embed",
  // regularOpeningHours in raw.json. isoDays use JS getDay(): 0 = Minggu.
  hours: [
    { days: "Senin–Jumat", time: "08.00–21.00", isoDays: [1, 2, 3, 4, 5] },
    { days: "Sabtu–Minggu", time: "08.00–22.00", isoDays: [6, 0] },
  ],
  hoursNote: "Buka setiap hari",
  hoursFallback: "Buka setiap hari, 08.00–21.00 (Sabtu–Minggu sampai 22.00)",
  rating: { value: "4,9", count: 290 },
};

export const meta = {
  title: "Rise n Roll Cake & Bakery · Cheesecake dan kafe di Lubang Buaya",
  description:
    "Cheesecake dan kafe di Jl. Monumen Pancasila Sakti No. 14, Lubang Buaya, Jakarta Timur. Buka setiap hari.",
};

export const banner =
  "Draf mockup untuk Rise n Roll Cake & Bakery. Beberapa detail masih contoh sampai kamu konfirmasi.";

export const hero = {
  area: shop.area,
  nameMain: "Rise n Roll",
  nameSub: "Cake & Bakery",
  lead: {
    text: "Cheesecake yang creamy dan kaya rasa, tapi tetap ringan. Mampir untuk sepotong, betah sampai makan siang.",
    mockup: true,
  } as Item,
  todayLabel: "Buka hari ini",
  ctaLabel: "Petunjuk Arah",
  secondaryLabel: "Lihat cheesecake",
  cakeLabel:
    "Ilustrasi blueberry cheesecake utuh di atas tatakan kue, satu potongnya sedang ditarik keluar",
};

export type Flavour = "blueberry" | "biscoff" | "original" | "matcha" | "klepon";
export type Product = {
  name: string; // shown on the label
  menuName: string; // full menu name, read out to screen readers
  flavour: Flavour;
  note: Item;
  price: Item;
  mockup?: boolean;
};

export const cheesecakeSection = {
  heading: "Cheesecake kami",
  intro: {
    text: "Alasan banyak tamu datang lagi. Pilih rasamu, sepotong atau satu loyang.",
    mockup: true,
  } as Item,
};

const slicePrice: Item = { text: "Rp 35rb / potong", mockup: true };

export const cheesecakes: Product[] = [
  {
    name: "Blueberry",
    menuName: "Blueberry cheesecake", // review 1
    flavour: "blueberry",
    note: { text: "Blueberry yang kaya rasa di atas keju yang lembut", mockup: true },
    price: slicePrice,
  },
  {
    name: "Biscoff",
    menuName: "Biscoff cheesecake", // review 1
    flavour: "biscoff",
    note: { text: "Dengan sentuhan kayu manis", mockup: true },
    price: slicePrice,
  },
  {
    name: "Original",
    menuName: "Original cheesecake",
    flavour: "original",
    note: { text: "Klasik, polos dan creamy", mockup: true },
    price: slicePrice,
    mockup: true,
  },
  {
    name: "Matcha",
    menuName: "Matcha cheesecake",
    flavour: "matcha",
    note: { text: "Teh hijau yang lembut", mockup: true },
    price: slicePrice,
    mockup: true,
  },
  {
    name: "Klepon",
    menuName: "Klepon cheesecake",
    flavour: "klepon",
    note: { text: "Pandan dan gula merah", mockup: true },
    price: slicePrice,
    mockup: true,
  },
];

export const wholeCake = {
  title: "Cheesecake utuh, untuk ulang tahun dan kumpul keluarga",
  body: "Ukuran 16 cm dan 20 cm, mulai Rp 250rb. Tanya rasa yang tersedia lewat WhatsApp.",
  cta: "Pesan lewat WhatsApp",
  ctaNote: "Nomor WhatsApp menyusul",
  label: "Ilustrasi cheesecake utuh di atas papan kue",
  mockup: true,
};

export type MenuItem = { name: string; price?: Item; mockup?: boolean };
export type MenuGroup = {
  title: string;
  priceNote?: Item;
  drawing: "risol" | "bowl" | "sus" | "latte";
  drawingLabel: string;
  items: MenuItem[];
};

export const menuSection = {
  heading: "Bukan cuma kue",
  sub: {
    text: "Datang untuk sepotong cheesecake, lanjut makan siang. Ini pilihan yang direkomendasikan tamu.",
    mockup: true,
  } as Item,
};

// Dishes from reviews 1 and 3; prices and extra drinks are [MOCKUP].
export const menuGroups: MenuGroup[] = [
  {
    title: "Camilan",
    drawing: "risol",
    drawingLabel: "Ilustrasi risol ayam keju yang dipotong, isi keju terlihat",
    items: [
      { name: "Risol ayam keju", price: { text: "Rp 15rb", mockup: true } },
      { name: "Bitterballen" },
    ],
  },
  {
    title: "Makanan",
    priceNote: { text: "mulai Rp 40rb", mockup: true },
    drawing: "bowl",
    drawingLabel: "Ilustrasi matah chicken bowl: nasi, ayam, dan sambal matah",
    items: [{ name: "Mac n cheese" }, { name: "Matah chicken bowl" }, { name: "Menu utama lainnya" }],
  },
  {
    title: "Kue & pastry",
    drawing: "sus",
    drawingLabel: "Ilustrasi sus krakelin chocolate dengan saus cokelat di atas piring",
    items: [{ name: "Carrot cake" }, { name: "Sus krakelin chocolate" }, { name: "Pie susu" }],
  },
  {
    title: "Minuman",
    priceNote: { text: "mulai Rp 25rb", mockup: true },
    drawing: "latte",
    drawingLabel: "Ilustrasi secangkir latte dengan latte art di atas tatakan",
    items: [
      { name: "Latte" },
      { name: "Kopi susu gula aren", mockup: true },
      { name: "Matcha latte", mockup: true },
      { name: "Es teh", mockup: true },
    ],
  },
];

export const room = {
  heading: "Ruang kami",
  lead: { text: "Terang, bersih, dan nyaman untuk duduk lama.", mockup: true } as Item,
  facts: [
    { text: "Ruang makan terang, plafon hijau sage, lantai terrazzo" }, // photos; reviews 3, 4
    { text: "Ada area outdoor" }, // review 1
    { text: "Ada mushola" }, // review 3
    { text: "Kursi bayi untuk si kecil" }, // photos
    { text: "Minggu sore biasanya ramai, datang lebih awal" }, // review 1
    { text: "Parkir ada, tapi tidak luas" }, // review 3
  ] as Item[],
  caption: "Ilustrasi. Foto ruangan menyusul dari pemilik.",
  label: "Ilustrasi sudut ruang makan: meja kayu, vas dengan mawar merah muda, kursi mustard, dan jendela berlengkung",
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  note: "Dirangkum dari ulasan, bukan kutipan langsung.",
  items: [
    { text: "Cheesecake-nya termasuk yang terbaik yang pernah mereka coba: creamy, kaya rasa, tapi tidak berat." }, // reviews 1, 2
    { text: "Ada yang sudah sekitar sepuluh kali datang, karena tempatnya nyaman dan bersih, dan stafnya selalu menyapa dengan ramah." }, // review 3
    { text: "Salah satu tempat favorit di Lubang Buaya: makanan enak, harga terjangkau, suasana menyenangkan." }, // review 4
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  addressLabel: "Alamat",
  hoursLabel: "Jam buka",
  todayTag: "Hari ini",
  parking: "Parkir terbatas.", // review 3
  cta: "Petunjuk Arah",
  mapTitle: "Peta lokasi Rise n Roll Cake & Bakery",
  openInMaps: "Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Mau pesan cheesecake utuh atau tanya menu hari ini? Kirim pesan ke kami.",
    mockup: true,
  } as Item,
  whatsapp: { text: "WhatsApp (nomor menyusul)", mockup: true } as Item,
  instagram: { text: "Instagram (akun menyusul)", mockup: true } as Item,
  directions: "Petunjuk Arah",
  draftNote: "Situs ini masih draf.",
};

export const a11y = {
  skip: "Langsung ke konten",
};
