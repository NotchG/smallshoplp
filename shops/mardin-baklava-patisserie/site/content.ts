// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Language: Bahasa Indonesia ("Anda" register is itself a mockup choice). Turkish names keep
// their spelling and render inside <span lang="tr">.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Mardin Baklava Patisserie",
  shortName: "Mardin",
  subName: "Baklava Patisserie",
  type: "Patisserie & kafe dessert Turki",
  address:
    "Jl. Cipinang Jaya Raya No. 74, Cipinang Besar Selatan, Jatinegara, Jakarta Timur 13410",
  addressLines: [
    "Jl. Cipinang Jaya Raya No. 74",
    "Cipinang Besar Selatan, Jatinegara",
    "Jakarta Timur 13410",
  ],
  phone: "0821-1203-3331",
  tel: "tel:+6282112033331",
  // [MOCKUP] The number looks like a mobile; WhatsApp ordering is unconfirmed.
  whatsapp: { href: "https://wa.me/6282112033331", mockup: true },
  mapsUrl: "https://maps.google.com/?cid=17580670136252498889",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Mardin+Baklava+Patisserie&destination_place_id=ChIJK3xb0mDzaS4RyQOmsFcW-_M",
  mapEmbed:
    "https://www.google.com/maps?q=Mardin+Baklava+Patisserie,+Jl.+Cipinang+Jaya+Raya+No.74,+Jakarta+Timur&output=embed",
  rating: "4,7",
  ratingCount: "935",
};

export const meta = {
  title: "Mardin Baklava Patisserie · Baklava & Kunafe Turki di Jatinegara",
  description:
    "Patisserie Turki di Jl. Cipinang Jaya Raya, Jatinegara, Jakarta Timur. Baklava pistachio, kunafe hangat dan teh Turki. Buka setiap hari 11.00–21.00, Jumat 13.00–21.00.",
  banner:
    "Draf mockup untuk Mardin Baklava Patisserie. Beberapa detail masih contoh sampai Anda konfirmasi.",
};

// Hours from raw.json. day: 0 = Minggu (Sunday) … 6 = Sabtu, as in the Places API.
export type Hours = { day: number; open: string; close: string };
export const hours: Hours[] = [
  { day: 0, open: "11.00", close: "21.00" },
  { day: 1, open: "11.00", close: "21.00" },
  { day: 2, open: "11.00", close: "21.00" },
  { day: 3, open: "11.00", close: "21.00" },
  { day: 4, open: "11.00", close: "21.00" },
  { day: 5, open: "13.00", close: "21.00" },
  { day: 6, open: "11.00", close: "21.00" },
];
export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
// Display order for the hours list: Senin first.
export const weekOrder = [1, 2, 3, 4, 5, 6, 0];
export const hoursLine =
  "Senin–Kamis & Sabtu–Minggu 11.00–21.00 · Jumat 13.00–21.00 · buka setiap hari";
export const hoursShort = "Buka setiap hari 11.00–21.00 · Jumat 13.00–21.00";

export const hero = {
  line: { text: "Baklava dan kunafe khas Turki di Jakarta Timur." } as Item,
  rating: `${shop.rating} di Google · ${shop.ratingCount} ulasan`,
  photoAlt:
    "Baklava pistachio, baklava cokelat dan sepotong kunafe di atas nampan emas berukir",
  captionLead: "Di nampan:",
};

// The six pieces seen in the counter trays and owner photos. Turkish names are [MOCKUP]
// until the owner confirms them; the shapes come from the photos.
export type PieceId = "fistikli" | "havuc" | "fistikSarma" | "cevizSarma" | "bulbul" | "cikolata";
export type Piece = {
  id: PieceId;
  nameTr: string;
  descId: string;
  alt: string;
  favourite?: boolean;
  mockup: true;
};
export const pieces: Piece[] = [
  {
    id: "fistikli",
    nameTr: "Fıstıklı Baklava",
    descId: "pistachio, potong kotak",
    alt: "Baklava pistachio potong kotak",
    favourite: true,
    mockup: true,
  },
  {
    id: "havuc",
    nameTr: "Havuç Dilimi",
    descId: "pistachio, potong irisan wortel",
    alt: "Baklava pistachio potong segitiga",
    mockup: true,
  },
  {
    id: "fistikSarma",
    nameTr: "Fıstıklı Sarma",
    descId: "gulung pistachio",
    alt: "Baklava gulung isi pistachio",
    mockup: true,
  },
  {
    id: "cevizSarma",
    nameTr: "Cevizli Sarma",
    descId: "gulung kenari",
    alt: "Baklava gulung isi kenari",
    mockup: true,
  },
  {
    id: "bulbul",
    nameTr: "Bülbül Yuvası",
    descId: "sarang filo, pistachio di tengah",
    alt: "Baklava sarang dengan pistachio di tengah",
    mockup: true,
  },
  {
    id: "cikolata",
    nameTr: "Çikolatalı Baklava",
    descId: "cokelat & pistachio",
    alt: "Baklava cokelat dengan lapisan pistachio",
    mockup: true,
  },
];
export const pieceById = (id: PieceId) => pieces.find((p) => p.id === id)!;

export const etalase = {
  heading: "Etalase kami",
  lead: { text: "Lapisan filo yang renyah, pistachio melimpah, sirup yang pas.", mockup: true } as Item,
  favourite: "Favorit pelanggan", // review 4: classic pistachio baklava
  price: { text: "Per potong Rp 22rb–28rb", mockup: true } as Item,
  photoAlt: "Nampan tembaga berisi baklava gulung kenari",
};

export const kunafe = {
  heading: "Kunafe",
  lead: {
    text: "Kunafe hangat dengan keju yang meleleh, sirupnya disajikan terpisah.",
    mockup: true,
  } as Item,
  // reviews 1, 2, 3, 4
  points: [
    { title: "Renyah di luar", text: "Lapisan luarnya garing di setiap gigitan." },
    { title: "Keju meleleh di dalam", text: "Gurih dan lumer di bagian tengahnya." },
    { title: "Sirup terpisah", text: "Tuang sendiri, sedikit atau banyak, sesuai selera." },
  ],
  // review 5: came from far away for the kunafe
  far: { text: "Ada pelanggan yang datang dari jauh khusus untuk kunafe ini." } as Item,
  price: { text: "Rp 62,5rb", mockup: true } as Item,
  priceNote: "per porsi",
  art: "Kunafe bundar di piring logam, taburan pistachio di tengah, teko kecil berisi sirup di sampingnya",
};

export const drinks = {
  heading: "Teman minum teh",
  // reviews 3, 5; photos
  lead: {
    text: "Teh Turki disajikan dalam gelas tulip, di tatakan logam berukir lengkap dengan tutupnya. Pahitnya yang tipis menyeimbangkan manis baklava dan kunafe.",
  } as Item,
  menu: [
    { nameTr: "Çay", descId: "teh Turki", price: "Rp 20rb", mockup: true },
    { nameTr: "Türk Kahvesi", descId: "kopi Turki", price: "Rp 35rb", mockup: true },
  ],
  room: { text: "Ruangnya kecil tapi nyaman dan ber-AC." } as Item, // reviews 2, 4, 5
  host: { text: "Duduk dulu, tehnya kami siapkan.", mockup: true } as Item,
  art: "Gelas teh tulip di tatakan logam bertutup, di atas piring kecil",
};

export const sweetness = {
  heading: "Seberapa manis?",
  lead: {
    text: "Baklava kami untuk pencinta manis. Kalau Anda lebih suka yang ringan, mulai dari sini.",
    mockup: true,
  } as Item,
  ends: { light: "Lebih ringan", sweet: "Paling manis" },
  stops: [
    // review 1 (less sweet); as a menu recommendation it is [MOCKUP]
    { kind: "cikolata" as const, name: "Çikolatalı Baklava", tr: true, text: "Lebih ringan. Cokelatnya pekat, manisnya paling kalem.", mockup: true },
    // reviews 2, 4
    { kind: "kunafe" as const, name: "Kunafe", tr: false, text: "Keju gurih, sirupnya Anda atur sendiri.", mockup: false },
    // review 4 (the Turkish name is [MOCKUP])
    { kind: "fistikli" as const, name: "Fıstıklı Baklava", tr: true, text: "Manis klasik, untuk yang suka manis.", mockup: true },
  ],
  note: { text: "Teh Turki yang sedikit pahit menyeimbangkan manisnya." } as Item, // reviews 3, 5
};

export const boxes = {
  heading: "Untuk oleh-oleh & hampers",
  lead: { text: "Semua bisa dibawa pulang dalam tas kraft Mardin." } as Item, // photos
  more: {
    text: "Kotak campur untuk Ramadan, Lebaran, hampers atau acara kantor. Pesan lewat WhatsApp, kami siapkan.",
    mockup: true,
  } as Item,
  occasions: { text: "Ramadan · Lebaran · Hampers · Kantor", mockup: true } as Item,
  options: [
    { id: "box6", name: "Kotak Campur", size: "isi 6", price: "Rp 150rb", mockup: true, alt: "Kotak berisi enam baklava campur" },
    { id: "box12", name: "Kotak Campur", size: "isi 12", price: "Rp 285rb", mockup: true, alt: "Kotak berisi dua belas baklava campur" },
    { id: "tray", name: "Loyang", size: "1 kg", price: "Pesan dulu (pre-order)", mockup: true, alt: "Loyang bundar penuh baklava pistachio" },
  ],
  cta: { text: "Pesan lewat WhatsApp", mockup: true } as Item,
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating} di Google · ${shop.ratingCount} ulasan`,
  note: "Diringkas dari ulasan Google",
  items: [
    { topic: "Rasa", text: "Rasa Turki yang autentik. Ada yang menyebutnya salah satu baklava dan kunafe terbaik di Jakarta." },
    { topic: "Kunafe", text: "Renyah di luar, kejunya meleleh di dalam. Disebut wajib dicoba." },
    { topic: "Pelayanan", text: "Stafnya ramah dan sabar menjelaskan setiap kue dan minuman." },
    { topic: "Tempat", text: "Ruangnya kecil tapi nyaman dan ber-AC, dapurnya bersih." },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursHeading: "Jam buka",
  todayLabel: "hari ini",
  parking: { text: "Tempat parkir mobil terbatas." } as Item, // review 3
  photoAlt: "Rak tali dengan tas kraft Mardin dan papan kapur Kunafe di dalam toko",
  mapTitle: "Peta lokasi Mardin Baklava Patisserie",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Tanya stok, pesan kotak, atau minta petunjuk arah.", mockup: true } as Item,
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export const footer = {
  draft: "Draf mockup · belum situs resmi",
};
