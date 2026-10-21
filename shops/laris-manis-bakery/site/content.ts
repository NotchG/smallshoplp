// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia throughout (lang="id").

export type Item = { text: string; mockup?: boolean };

export type Illo = "mesesKeju" | "cokelat" | "sosis" | "boluPizza" | "toplesSemprit";

export type Product = {
  id: string;
  name: Item;
  price: Item;
  note: Item;
  illustration: Illo;
  alt: string;
};

// [MOCKUP] that this listing number takes WhatsApp orders.
const waNumber = "628128116231";
const wa = (message: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

export const meta = {
  title: "Laris Manis Bakery · Toko roti di Pisangan Baru, Matraman",
  description:
    "Roti rumahan enak dan terjangkau di Jl. Pisangan Baru No. 02, Matraman, Jakarta Timur. Buka setiap hari 07.00–18.00.",
};

export const banner = "Ini adalah draf tampilan, belum resmi. Beberapa detail masih contoh.";
export const footerDraft = "Ini adalah draf tampilan, belum resmi.";

export const shop = {
  name: "Laris Manis Bakery", // listing
  nameScript: "Laris Manis",
  nameSuffix: "Bakery",
  type: "Toko roti", // listing: bakery
  address: "Jl. Pisangan Baru No. 02, Pisangan Baru, Matraman, Jakarta Timur 13110", // listing
  addressLines: ["Jl. Pisangan Baru No. 02", "Pisangan Baru, Matraman", "Jakarta Timur 13110"],
  addressShort: "Jl. Pisangan Baru No. 02, Matraman",
  phone: "0812-8116-231", // listing
  phoneHref: "tel:+628128116231",
  whatsappHref: { text: wa("Halo Laris Manis, saya mau pesan roti."), mockup: true } as Item,
  mapsUrl:
    "https://maps.google.com/?cid=11797479426007173256&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // raw.json googleMapsUri
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(
    "Laris Manis Bakery, Jl. Pisangan Baru No.02, Matraman, Jakarta Timur",
  )}&output=embed`,
  rating: "4,6", // listing
  ratingCount: 216, // listing
};

// From the shop's printed "Contact Order" sign (photos). Not mockup, but the owner
// confirms they may be shown (owner-checklist.md).
export const orderNumbers = [
  { label: "Admin 1", number: "0821-3513-5932", href: "tel:+6282135135932" },
  { label: "Admin 2", number: "0812-1985-8295", href: "tel:+6281219858295" },
];

// Listing hours: every day 07.00–18.00. dayIndex matches JS getDay() (Minggu = 0).
export const hours = [
  { day: "Senin", dayIndex: 1, time: "07.00–18.00" },
  { day: "Selasa", dayIndex: 2, time: "07.00–18.00" },
  { day: "Rabu", dayIndex: 3, time: "07.00–18.00" },
  { day: "Kamis", dayIndex: 4, time: "07.00–18.00" },
  { day: "Jumat", dayIndex: 5, time: "07.00–18.00" },
  { day: "Sabtu", dayIndex: 6, time: "07.00–18.00" },
  { day: "Minggu", dayIndex: 0, time: "07.00–18.00" },
];

export const hoursSummary = {
  openToday: "Buka hari ini",
  time: "07.00–18.00",
  everyday: "setiap hari",
  footer: "Buka setiap hari 07.00–18.00",
};

export const hero = {
  line: { text: "Roti rumahan yang enak dan terjangkau di Pisangan Baru.", mockup: true } as Item,
};

// Roti kami. Products from the photos; names, prices and notes are [MOCKUP].
export const breads: Product[] = [
  {
    id: "roti-meses-keju",
    name: { text: "Roti Meses Keju", mockup: true },
    price: { text: "Rp 7rb", mockup: true },
    note: { text: "Roti manis tebal, separuh meses cokelat, separuh keju parut.", mockup: true },
    illustration: "mesesKeju",
    alt: "Ilustrasi Roti Meses Keju dalam kemasan",
  },
  {
    id: "roti-cokelat",
    name: { text: "Roti Cokelat", mockup: true },
    price: { text: "Rp 5rb", mockup: true },
    note: { text: "Roti pilin empuk dengan cokelat di setiap lekuknya.", mockup: true },
    illustration: "cokelat",
    alt: "Ilustrasi Roti Cokelat dalam kemasan",
  },
  {
    id: "roti-sosis",
    name: { text: "Roti Sosis", mockup: true },
    price: { text: "Rp 5rb", mockup: true },
    note: { text: "Roti keemasan dengan sosis utuh dan taburan keju.", mockup: true },
    illustration: "sosis",
    alt: "Ilustrasi Roti Sosis dalam kemasan",
  },
];

// Kue & camilan. Products from the photos; names, prices and notes are [MOCKUP].
export const treats: Product[] = [
  {
    id: "bolu-pizza",
    name: { text: "Bolu Pizza", mockup: true },
    price: { text: "Rp 45rb", mockup: true },
    note: { text: "Bolu bulat lembut dengan saus tomat, irisan sosis dan keju.", mockup: true },
    illustration: "boluPizza",
    alt: "Ilustrasi Bolu Pizza di atas taplak renda",
  },
  {
    id: "kue-semprit-keju",
    name: { text: "Kue Semprit Keju", mockup: true },
    price: { text: "Rp 85rb / toples", mockup: true },
    note: { text: "Kue semprit dalam cup kertas hitam, satu toples penuh.", mockup: true },
    illustration: "toplesSemprit",
    alt: "Ilustrasi toples Kue Semprit Keju dilihat dari atas",
  },
];

export const flavours: Item[] = [
  { text: "keju", mockup: true },
  { text: "srikaya", mockup: true },
  { text: "pisang cokelat", mockup: true },
];

// Pesan untuk acara & reseller: the whole section is [MOCKUP].
export const orders = {
  heading: { text: "Pesan untuk acara & reseller", mockup: true } as Item,
  intro: {
    text: "Kue kering untuk Lebaran, kue untuk hari spesial, atau roti per krat untuk warungmu. Kirim pesan, kami bantu.",
    mockup: true,
  } as Item,
  rows: [
    {
      title: { text: "Kue kering Lebaran", mockup: true } as Item,
      line: { text: "Semprit keju, nastar dan kastengel dalam toples.", mockup: true } as Item,
    },
    {
      title: { text: "Ulang tahun & acara", mockup: true } as Item,
      line: { text: "Bolu dan kue pesanan untuk hari spesial.", mockup: true } as Item,
    },
    {
      title: { text: "Warung & reseller", mockup: true } as Item,
      line: { text: "Roti per krat, harga grosir tanya lewat WhatsApp.", mockup: true } as Item,
    },
  ],
  whatsappHref: {
    text: wa("Halo Laris Manis, saya mau tanya pesanan untuk acara atau reseller."),
    mockup: true,
  } as Item,
};

// Paraphrased from real reviews only (reviews 2–4 and 1). Never invented, never attributed.
export const praise: Item[] = [
  { text: "Rasanya enak dan harganya bersahabat." },
  { text: "Toko roti rumahan yang bikin jatuh hati." },
];

export const copy = {
  rotiIntro: { text: "Dibungkus satu per satu, siap dibawa pulang.", mockup: true } as Item,
  hubungiLine: { text: "Pesan lewat WhatsApp, ambil hangat di toko.", mockup: true } as Item,
};

// Interface labels.
export const ui = {
  headings: {
    roti: "Roti kami",
    kue: "Kue & camilan",
    kata: "Kata mereka",
    kunjungi: "Kunjungi kami",
    hubungi: "Hubungi kami",
  },
  pesanWhatsapp: "Pesan via WhatsApp",
  tanyaWhatsapp: "Tanya via WhatsApp",
  whatsapp: "WhatsApp",
  petunjukArah: "Petunjuk arah",
  telepon: "Telepon",
  atauTelepon: "atau telepon",
  rasaLain: "Rasa lain",
  lihat: "Lihat",
  ratingSuffix: "ulasan di Google",
  ratingFrom: "dari",
  hariIni: "Hari ini",
  jamBuka: "Jam buka",
  mapTitle: "Peta lokasi Laris Manis Bakery",
  mapFallback: "Laris Manis Bakery",
  contactOrder: "Contact Order",
  signName: "Laris Manis",
  signLabel: "Papan nomor pesanan Laris Manis",
};
