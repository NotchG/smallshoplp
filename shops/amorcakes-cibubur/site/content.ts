// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia (lang="id"), "kamu" register.

export type Item = { text: string; mockup?: boolean };

export const meta = {
  title: "Amorcakes & Bakery Cibubur | Kue ulang tahun, bolu & roti",
  description:
    "Kue ulang tahun, bolu dan roti manis di Cibubur, Jakarta Timur. Buka setiap hari 06.00–22.00.",
  banner: "Ini adalah draf tampilan, belum resmi.",
};

// Facts from the Google listing (raw.json) and the facade sign (photos).
export const shop = {
  name: "Amorcakes & Bakery",
  outlet: "Cibubur",
  fullName: "Amorcakes & Bakery Cibubur",
  type: "Toko kue & roti",
  // The facade sign: lowercase, stacked.
  lockup: { top: "amor", middle: "cakes", bottom: "& bakery" },
  address: "Jl. Lapangan Tembak / Jl. Belimbing No. 6, Cibubur, Ciracas, Jakarta Timur 13720",
  addressLines: ["Jl. Lapangan Tembak / Jl.\u00a0Belimbing\u00a0No.\u00a06", "Cibubur, Ciracas, Jakarta Timur\u00a013720"],
  phone: "0896-5499-3538",
  phoneIntl: "+6289654993538",
  // [MOCKUP] The listing number is a mobile number; we assume it takes WhatsApp orders.
  waNumber: "6289654993538",
  waMockup: true,
  mapsUrl: "https://maps.google.com/?cid=2024976129182907176",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Amorcakes%20and%20Bakery%20Cibubur&destination_place_id=ChIJ6w3S2O_saS4RKLuXig8pGhw",
  mapEmbed:
    "https://www.google.com/maps?q=Amorcakes+and+Bakery+Cibubur,+Jl.+Lapangan+Tembak+No.6,+Cibubur,+Ciracas,+Jakarta+Timur&output=embed",
  group: "Member of Amor Group",
  rating: "4,9",
  reviews: 557,
};

// Opening hours (listing): every day 06.00–22.00. `js` is Date.getDay() (0 = Minggu).
export const hours = [
  { day: "Senin", short: "Sen", js: 1, time: "06.00–22.00" },
  { day: "Selasa", short: "Sel", js: 2, time: "06.00–22.00" },
  { day: "Rabu", short: "Rab", js: 3, time: "06.00–22.00" },
  { day: "Kamis", short: "Kam", js: 4, time: "06.00–22.00" },
  { day: "Jumat", short: "Jum", js: 5, time: "06.00–22.00" },
  { day: "Sabtu", short: "Sab", js: 6, time: "06.00–22.00" },
  { day: "Minggu", short: "Min", js: 0, time: "06.00–22.00" },
];
export const hoursSummary = "Setiap hari 06.00–22.00";
export const hoursSentence = "Buka Senin sampai Minggu, pukul 06.00 sampai 22.00.";

// Social accounts printed on the facade sign (photos).
export const socials = {
  instagram: { handle: "@boluamor", url: "https://www.instagram.com/boluamor/" },
  facebook: { handle: "boluamor", url: "https://www.facebook.com/boluamor" },
  tiktok: { handle: "@amorcakes", url: "https://www.tiktok.com/@amorcakes" },
};

export const hero = {
  line: {
    text: "Kue ulang tahun, bolu dan roti manis, buka dari pagi sampai malam.",
    mockup: true,
  } as Item,
  today: "Buka hari ini 06.00–22.00",
  ctaWa: "Pesan via WhatsApp",
  ctaMaps: "Petunjuk arah",
  plaque: { lines: ["Selamat", "Ulang Tahun"], mockup: true },
  sticker: { lines: ["Tulis", "nama", "gratis"], mockup: true },
};

export type CakeId = "blackForest" | "chocolateDrip" | "greenTea" | "strawberryCream";

export type Cake = {
  id: CakeId;
  name: string;
  nameMockup?: boolean; // flavour name inferred from the photo
  sizeLine: string; // small line on the tag
  price: string;
  priceMockup: boolean;
  alt: string; // aria-label of the illustration
};

export const cakes: Cake[] = [
  {
    id: "blackForest",
    name: "Black Forest",
    sizeLine: "12 · 16 · 20 cm",
    price: "mulai Rp 49rb",
    priceMockup: true,
    alt: "Ilustrasi kue Black Forest dengan serutan cokelat, krim kocok dan ceri",
  },
  {
    id: "chocolateDrip",
    name: "Chocolate Drip",
    // Price tag seen in a customer photo (date unknown). Owner to confirm it belongs to this cake.
    sizeLine: "Deluxe 16",
    price: "Rp 130rb",
    priceMockup: true,
    alt: "Ilustrasi kue putih dengan lelehan cokelat, ceri dan cakram cokelat",
  },
  {
    id: "greenTea",
    name: "Green Tea",
    nameMockup: true,
    sizeLine: "12 · 16 · 20 cm",
    price: "mulai Rp 49rb",
    priceMockup: true,
    alt: "Ilustrasi kue hijau muda dengan ceri dan kipas cokelat",
  },
  {
    id: "strawberryCream",
    name: "Strawberry Cream",
    nameMockup: true,
    // Price tag seen in a customer photo (date unknown). Owner to confirm.
    sizeLine: "Deluxe 12 Cream (Mika)",
    price: "Rp 49rb",
    priceMockup: true,
    alt: "Ilustrasi kue krim berlapis glasir merah di dalam kubah mika bening",
  },
];

export const kue = {
  heading: "Kue ulang tahun",
  intro: {
    text: "Siap bawa hari ini juga. Ukuran 12, 16 dan 20 cm, nama ditulis gratis.",
    mockup: true,
  } as Item,
  more: { text: "Juga ada Tiramisu dan roll cake.", mockup: true } as Item,
  link: "Pesan kue",
};

export type BreadId = "rotiManis" | "rotiTawarMini" | "doughnut" | "bolu";

export type Bread = {
  id: BreadId;
  name: string; // product names exactly as on the shop's banner
  price: string;
  priceMockup: boolean;
  detail?: Item;
  alt: string;
};

export const roti = {
  heading: "Roti & bolu harian",
  intro: { text: "Roti hangat dari jam 6 pagi.", mockup: true } as Item,
  breads: [
    {
      id: "rotiManis",
      name: "Roti Manis",
      price: "mulai Rp 8rb",
      priceMockup: true,
      detail: { text: "cokelat, keju, srikaya, abon sapi, sosis", mockup: true },
      alt: "Ilustrasi roti manis bundar berglasir",
    },
    {
      id: "rotiTawarMini",
      name: "Roti Tawar Mini",
      price: "Rp 12rb",
      priceMockup: true,
      alt: "Ilustrasi roti tawar mini",
    },
    {
      id: "doughnut",
      name: "Doughnut",
      price: "Rp 7rb",
      priceMockup: true,
      detail: { text: "banyak varian" }, // "all variant" on the opening banner (photos)
      alt: "Ilustrasi donat berglasir cokelat",
    },
    {
      id: "bolu",
      name: "Bolu",
      price: "Rp 45rb",
      priceMockup: true,
      detail: { text: "bolu gulung cokelat, pandan, keju", mockup: true },
      alt: "Ilustrasi bolu gulung di dalam mika dengan stiker oranye",
    },
  ] as Bread[],
  boxes: {
    names: ["Boluamor", "Snow Bolu"], // packaging seen in photos
    caption: { text: "Bolu dalam kotak, pas untuk oleh-oleh dan arisan.", mockup: true } as Item,
    alt: "Ilustrasi dua kotak bolu bertumpuk, Boluamor dan Snow Bolu",
  },
  bulk: {
    before: "Pesan bolu dan snack untuk kantor, sekolah atau arisan lewat ",
    link: "WhatsApp",
    after: ".",
    mockup: true,
    message:
      "Halo Amorcakes Cibubur, saya mau tanya pesanan bolu dan snack untuk acara kantor/sekolah/arisan.\nJumlah: \nTanggal ambil: ",
  },
};

// The order composer. All of it is [MOCKUP] until the owner confirms sizes, prices and free writing.
export const order = {
  heading: "Cara pesan kue",
  intro: "Pilih, tulis nama, kirim lewat WhatsApp.",
  steps: { size: "Pilih ukuran", flavour: "Pilih rasa", name: "Tulis nama" },
  sizes: [
    { cm: 12, price: "mulai Rp 49rb", scale: 0.88 },
    { cm: 16, price: "mulai Rp 130rb", scale: 1 },
    { cm: 20, price: "tanya harga", scale: 1.1 },
  ],
  defaultSize: 16,
  flavours: ["blackForest", "chocolateDrip", "greenTea", "strawberryCream"] as CakeId[],
  defaultFlavour: "blackForest" as CakeId,
  otherFlavour: "Rasa lain? Tulis saja di pesan.",
  defaultPlaque: "Selamat Ulang Tahun",
  namePlaceholder: "Nama di kue",
  maxName: 20,
  cta: "Kirim pesanan via WhatsApp",
  summaryLabel: "Pesanan kamu",
  mockup: true,
};

export function orderMessage(size: number, flavour: string, name: string) {
  const writing = `${order.defaultPlaque} ${name}`.trim();
  return [
    "Halo Amorcakes Cibubur, saya mau pesan kue ulang tahun.",
    `Ukuran: ${size} cm`,
    `Rasa: ${flavour}`,
    `Tulisan di kue: ${writing}`,
    "Mau diambil: (tanggal & jam)",
  ].join("\n");
}

export function waLink(message: string) {
  return `https://wa.me/${shop.waNumber}?text=${encodeURIComponent(message)}`;
}

export const kata = {
  heading: "Kata mereka",
  rating: `${shop.rating} dari 5 · ${shop.reviews} ulasan di Google`,
  note: "Diringkas dari ulasan pelanggan di Google.",
};

// Paraphrased from real reviews only (reviews 1 and 2). Never invented, never attributed to a name.
export const praise: Item[] = [
  { text: "Promonya banyak, diskonnya sering." },
  { text: "Pelayanannya ramah." },
];

export const kunjungi = {
  heading: "Kunjungi kami",
  today: "Hari ini",
  ctaMaps: "Petunjuk arah",
  ctaOpen: "Buka di Google Maps",
  mapTitle: "Peta lokasi Amorcakes & Bakery Cibubur",
};

export const hubungi = {
  heading: "Hubungi kami",
  promo: { text: "Promo terbaru biasanya diumumkan di Instagram.", mockup: true } as Item,
  waMessage: "Halo Amorcakes Cibubur, saya mau tanya.",
};

export const footer = {
  line: `${shop.fullName} · ${shop.group}`,
  illustrations: "Gambar kue dan roti di halaman ini adalah ilustrasi sementara.",
  noindex: "Halaman ini belum tampil di pencarian Google sampai disetujui pemilik toko.",
};
