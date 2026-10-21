// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names and the tagline stay as the shop writes them.

export type Item = { text: string; mockup?: boolean };

export type Tile = "botol" | "krem" | "kunyit" | "bata" | "sage";

export type ProductId =
  | "esKopiSusu"
  | "singkongGoreng"
  | "pisangGoreng"
  | "buburKacangHijau"
  | "esTeh"
  | "kuePandan";

export type Product = {
  id: ProductId;
  name: Item;
  price?: Item;
  note: Item;
  tile: Tile;
  art: string; // aria-label of the drawn illustration
};

// dow: 0 = Minggu (Sunday), as in raw.json periods and Date.getDay().
export type Day = { day: string; short: string; dow: number; open: string; close: string };

export const shop = {
  name: "SEATAP Kopitiam",
  wordmark: "SEATAP",
  sub: "Kopitiam",
  type: "Kopitiam",
  tagline: "Coffee · Eat · Friends", // shop sign and cups (photos)
  address: "Arundina, Jl. Lap. Tembak No.A10, Cibubur, Ciracas, Jakarta Timur 13720",
  addressLines: ["Arundina, Jl. Lap. Tembak No.A10", "Cibubur, Ciracas, Jakarta Timur 13720"],
  phone: "0811-953-156",
  phoneHref: "tel:+62811953156",
  whatsappHref: "https://wa.me/62811953156",
  whatsappMockup: true, // [MOCKUP] the number takes WhatsApp
  mapsUrl: "https://maps.google.com/?cid=13652005133390330378",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=SEATAP%20KOPITIAM&destination_place_id=ChIJM6n_r-PtaS4RCjqKX1aqdb0",
  mapEmbedUrl:
    "https://www.google.com/maps?q=SEATAP%20KOPITIAM%2C%20Jl.%20Lap.%20Tembak%20No.A10%2C%20Cibubur&output=embed",
  rating: { value: "4,5", count: 971 }, // listing
};

export const meta = {
  title: "SEATAP Kopitiam · Kopitiam di Cibubur, Jakarta Timur",
  description:
    "Kopitiam penuh warna di Arundina, Cibubur. Buka setiap hari dari 07.00. Coffee · Eat · Friends.",
};

export const banner = "Ini contoh tampilan, belum situs resmi SEATAP Kopitiam.";

// regularOpeningHours in raw.json. Week starts Senin, as Indonesian calendars do.
export const hours: Day[] = [
  { day: "Senin", short: "Sen", dow: 1, open: "07.00", close: "21.00" },
  { day: "Selasa", short: "Sel", dow: 2, open: "07.00", close: "21.00" },
  { day: "Rabu", short: "Rab", dow: 3, open: "07.00", close: "21.00" },
  { day: "Kamis", short: "Kam", dow: 4, open: "07.00", close: "21.00" },
  { day: "Jumat", short: "Jum", dow: 5, open: "07.00", close: "22.00" },
  { day: "Sabtu", short: "Sab", dow: 6, open: "07.00", close: "22.00" },
  { day: "Minggu", short: "Min", dow: 0, open: "07.00", close: "21.00" },
];

export const hoursSummary = "Setiap hari 07.00–21.00 · Jumat–Sabtu sampai 22.00";

export const hero = {
  line: {
    text: "Kopitiam penuh warna di Cibubur, buka dari jam 7 pagi.",
    mockup: true,
  } as Item,
  hoursFallback: "Buka setiap hari 07.00–21.00, Jumat–Sabtu sampai 22.00",
  todayPrefix: "Buka hari ini",
  photoAlt:
    "Sudut lounge SEATAP Kopitiam: dinding hijau botol dengan cermin bulat, lampu kristal, dinding kotak warna-warni, sofa kulit hijau dan kursi jati berbantal oranye.",
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  maps: "Buka di Google Maps",
};

export const breakfast = {
  heading: "Sarapan dari jam 7",
  lead: { text: "Pintu buka jam 07.00, setiap hari." } as Item,
  intro: {
    text: "Roti bakar, telur setengah matang, dan kopi tiam yang kental. Sarapan kopitiam, sebelum mulai hari.",
    mockup: true,
  } as Item,
  art: "Ilustrasi sarapan kopitiam: roti bakar srikaya, dua telur setengah matang, dan secangkir kopi",
  items: [
    { name: { text: "Roti Bakar Srikaya", mockup: true }, price: { text: "Rp 20rb", mockup: true } },
    { name: { text: "Telur Setengah Matang", mockup: true }, price: { text: "Rp 10rb", mockup: true } },
    { name: { text: "Kopi Tiam", mockup: true }, price: { text: "Rp 18rb", mockup: true } },
    { name: { text: "Nasi Lemak", mockup: true }, price: { text: "Rp 35rb", mockup: true } },
  ] as { name: Item; price: Item }[],
};

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Teman ngopi dari pagi sampai malam.", mockup: true } as Item,
};

export const products: Product[] = [
  {
    id: "esKopiSusu",
    name: { text: "Es Kopi Susu", mockup: true }, // iced coffee (review 2); name is ours
    price: { text: "Rp 22rb", mockup: true },
    note: { text: "Favorit teman ngopi, dingin dan pas.", mockup: true },
    tile: "kunyit",
    art: "Ilustrasi es kopi susu dalam gelas SEATAP",
  },
  {
    id: "singkongGoreng",
    name: { text: "Singkong Goreng" }, // review 3
    price: { text: "Rp 20rb", mockup: true },
    note: { text: "Renyah dan gurih.", mockup: true },
    tile: "sage",
    art: "Ilustrasi singkong goreng di piring",
  },
  {
    id: "pisangGoreng",
    name: { text: "Pisang Goreng" }, // review 2
    price: { text: "Rp 20rb", mockup: true },
    note: { text: "Camilan wajib di samping kopi.", mockup: true },
    tile: "bata",
    art: "Ilustrasi pisang goreng di atas kertas",
  },
  {
    id: "buburKacangHijau",
    name: { text: "Bubur Kacang Hijau" }, // review 3
    price: { text: "Rp 15rb", mockup: true },
    note: { text: "Kesukaan pelanggan setia.", mockup: true },
    tile: "krem",
    art: "Ilustrasi semangkuk bubur kacang hijau dengan santan",
  },
  {
    id: "esTeh",
    name: { text: "Es Teh", mockup: true }, // iced tea in the SEATAP cup (photos)
    note: { text: "Disajikan di gelas SEATAP.", mockup: true },
    tile: "botol",
    art: "Ilustrasi es teh dalam gelas SEATAP",
  },
  {
    id: "kuePandan",
    name: { text: "Kue Pandan", mockup: true }, // green layer cake (photos)
    note: { text: "Lapis hijau dengan krim keju.", mockup: true },
    tile: "kunyit",
    art: "Ilustrasi sepotong kue lapis hijau dengan krim keju",
  },
];

export const bundle = {
  name: { text: "Bundling paket" } as Item, // standee in photos
  price: { text: "sekitar Rp 42rb–48rb", mockup: true } as Item, // standee only partly legible
  note: { text: "Tanya pilihan paket hari ini di kasir.", mockup: true } as Item,
  art: "Ilustrasi paket: es teh dan pisang goreng di atas nampan",
};

export const room = {
  heading: "Ruang kumpul",
  lead: {
    text: "Sofa kulit hijau, kursi jati berbantal oranye, lampu kristal, dan banyak tanaman.",
  } as Item,
  body: { text: "Datang berdua atau ramean, ada sudut sofa untuk semua.", mockup: true } as Item,
  music: { text: "Jumat malam: live music", mockup: true } as Item,
  photoAlt: "Cermin bulat, lampu kristal dan pohon palem di depan dinding kotak warna-warni.",
};

// Paraphrased from real reviews only. Never invented, never attributed to a name.
export const praise: (Item & { tile: Tile })[] = [
  { text: "Interiornya hangat dan alami, penuh furnitur kayu dan tanaman.", tile: "botol" }, // r2
  { text: "Stafnya ramah, sigap, dan cepat mengantar pesanan.", tile: "bata" }, // r2, r3
  { text: "Singkong gorengnya renyah, bubur kacang hijaunya juara.", tile: "sage" }, // r3
  { text: "Harganya wajar, dan bisa bayar dengan banyak cara.", tile: "krem" }, // r2, r4
];

export const praiseSection = {
  heading: "Kata mereka",
  rating: `Rating Google ${shop.rating.value} dari ${shop.rating.count} ulasan.`,
  note: "Dirangkum dari ulasan, bukan kutipan.",
};

export const visit = {
  heading: "Kunjungi kami",
  open: "Buka setiap hari",
  todayLabel: "Hari ini",
  parking: {
    text: "Parkir mobil terbatas. Lebih mudah datang naik motor atau ojek online.",
    mockup: true,
  } as Item,
  mapTitle: "Peta lokasi SEATAP Kopitiam",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Kopi, makan, teman. Itu saja yang kami urus.", mockup: true } as Item,
  payment: { text: "Bisa bayar tunai dan non-tunai." } as Item, // review 4
  instagram: { text: "Instagram: segera hadir", mockup: true } as Item,
};

export const footer = {
  hoursLabel: "Jam buka",
  addressLabel: "Alamat",
  skip: "Lewati ke konten",
};
