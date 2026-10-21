// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or copy written for the mockup).
// Every mockup item is listed in ../owner-checklist.md for the owner to confirm or correct.
// quiet: true = sentence-level mockup copy: keeps data-mockup but no dotted underline.

export type Item = { text: string; mockup?: boolean; quiet?: boolean };

export const shop = {
  name: "Mabsooth Cafe & Resto",
  wordmark: "Mabsooth",
  arabic: "مبسوط",
  sub: "Cafe & Resto",
  // Short form for display; the full Google address is used for the map query (listing).
  addressLines: ["Jl. Raya Condet No.6, Cililitan,", "Kramat Jati, Jakarta Timur 13640"],
  addressShort: "Jl. Raya Condet No.6",
  addressFull:
    "Jl. Raya Condet No.6, RT.3/RW.16, Cililitan, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640, Indonesia",
  phone: "0819-4744-4493",
  tel: "tel:+6281947444493",
  // [MOCKUP] assumes the mobile number takes WhatsApp.
  whatsapp: { url: "https://wa.me/6281947444493", mockup: true },
  mapsUrl:
    "https://maps.google.com/?cid=6596187018166048149&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Mabsooth%20Cafe%20%26%20Resto&destination_place_id=ChIJTeUERADzaS4RlZXUGSVdils",
  mapEmbed:
    "https://www.google.com/maps?q=Mabsooth%20Cafe%20%26%20Resto%2C%20Jl.%20Raya%20Condet%20No.6%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,7", count: 240 }, // listing
};

export const meta = {
  title: "Mabsooth Cafe & Resto · Condet, Jakarta Timur",
  description:
    "Kafe dan resto bernuansa Arab di Jl. Raya Condet No.6. Buka setiap hari 08.00–24.00, Jumat dan Sabtu sampai 01.00.",
};

export const banner =
  "Draf mockup untuk Mabsooth Cafe & Resto. Teks bergaris titik-titik masih contoh sampai Anda konfirmasi.";

// Hours (listing): open daily, Fri and Sat until 01.00. jsDay follows Date.getDay() (0 = Minggu).
export type HoursRow = {
  day: string;
  jsDay: number;
  open: string;
  close: string;
  openMin: number;
  closeMin: number; // minutes after 00.00 of the same day; past 1440 runs into the next day
};
export const hours: HoursRow[] = [
  { day: "Senin", jsDay: 1, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 },
  { day: "Selasa", jsDay: 2, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 },
  { day: "Rabu", jsDay: 3, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 },
  { day: "Kamis", jsDay: 4, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 },
  { day: "Jumat", jsDay: 5, open: "08.00", close: "01.00", openMin: 480, closeMin: 1500 },
  { day: "Sabtu", jsDay: 6, open: "08.00", close: "01.00", openMin: 480, closeMin: 1500 },
  { day: "Minggu", jsDay: 0, open: "08.00", close: "24.00", openMin: 480, closeMin: 1440 },
];
export const hoursCopy = {
  everyDay: "Buka setiap hari",
  fallback: "Buka setiap hari 08.00–24.00 · Jumat & Sabtu sampai 01.00",
  today: "Hari ini",
  todayOpen: "Buka hari ini",
  lateSession: "Masih buka sampai",
  opensAt: "Buka lagi pukul",
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
  directionsRow: "Petunjuk arah",
  openMaps: "Buka di Google Maps",
  skip: "Langsung ke isi",
};

export const hero = {
  line: { text: "Teh, kopi, dan hidangan Timur Tengah di Condet", mockup: true, quiet: true } as Item,
};

export const suasana = {
  heading: "Suasana",
  lead: { text: "Duduk di teras di bawah lentera, atau di lounge yang sejuk.", mockup: true, quiet: true } as Item,
  photoAlt: "Kursi rotan dan lantai tegel bermotif di teras",
  caption: "Lantai tegel dan kursi rotan di teras.",
  terrace: {
    title: "Teras di bawah lentera",
    // photos
    body: "Sisi terbuka, kursi rotan, lantai tegel bermotif, dan lentera Maroko merah muda di bawah tanaman rambat. Paling ramai saat malam.",
  },
  lounge: {
    title: "Lounge ber-AC",
    body: "Ruang berdinding kaca dengan sofa kulit: sejuk, dan tetap menghadap ke teras.", // photos
  },
  shisha: "Shisha tersedia di teras dan di lounge.", // reviews 3, photos
};

export type Dish = {
  name: Item;
  price: Item;
  desc: string;
  visual: "photo" | "rice-bowl" | "lychee-tea" | "teapot";
  alt: string;
};

export const menu = {
  heading: "Menu andalan",
  intro: { text: "Hidangan yang sering muncul di meja kami.", mockup: true, quiet: true } as Item,
  legend: "Nama dan harga bergaris titik-titik masih contoh.",
  featured: [
    {
      name: { text: "Lamb Shank" }, // dish from owner-2; owner to confirm the menu name
      price: { text: "Rp 110rb", mockup: true },
      desc: "Kuah gelap, kentang tumbuk, wortel, buncis, selada, seiris lemon, dan semangkuk kuah tambahan.",
      visual: "photo",
      alt: "Lamb shank dengan kuah, kentang tumbuk dan sayuran",
    },
    {
      name: { text: "Rice bowl" },
      price: { text: "Rp 35rb", mockup: true },
      desc: "Nasi dengan telur mata sapi di atasnya: daging sapi tumis dengan paprika merah, atau ayam saus krim dengan daun kari.",
      visual: "rice-bowl",
      alt: "Ilustrasi rice bowl dengan telur mata sapi",
    },
    {
      name: { text: "Lychee Tea" },
      price: { text: "Rp 25rb", mockup: true },
      desc: "Es teh dengan buah leci di tusuk bambu, dalam gelas kristal di atas tatakan kayu.",
      visual: "lychee-tea",
      alt: "Ilustrasi es Lychee Tea dalam gelas kristal",
    },
  ] as Dish[],
  moreHeading: "Juga ada di menu",
  more: [
    { name: { text: "Nasi kebuli kambing", mockup: true }, price: { text: "Rp 55rb", mockup: true } },
    { name: { text: "Nasi mandhi ayam", mockup: true } },
    { name: { text: "Nasi briyani", mockup: true } },
    { name: { text: "Roti maryam kari kambing", mockup: true } },
    { name: { text: "Hummus dengan pita", mockup: true } },
    { name: { text: "Mutabbal", mockup: true } },
    { name: { text: "Falafel", mockup: true } },
  ] as { name: Item; price?: Item }[],
};

export const tea = {
  heading: "Teh, kopi & shisha",
  greeting: { text: "Ahlan wa sahlan. Silakan duduk, tehnya kami siapkan.", mockup: true, quiet: true } as Item,
  pot: {
    name: { text: "Teh Arab satu teko", mockup: true },
    price: { text: "Rp 40rb", mockup: true },
    desc: "Teko perak bergaya Arab dan gelas-gelas kecil untuk semua yang duduk di meja.", // photos
    visual: "teapot",
    alt: "Ilustrasi teko perak dan empat gelas teh di atas nampan kuningan",
  } as Dish,
  drinksHeading: "Teh & kopi",
  drinks: [
    { text: "Shai adeni (teh susu rempah)", mockup: true },
    { text: "Teh mint", mockup: true },
    { text: "Kopi Arab (qahwa) dengan kurma", mockup: true },
    { text: "Lemon mint", mockup: true },
    { text: "Kopi dari bar espresso" }, // type, photos
  ] as Item[],
  shishaHeading: "Shisha",
  shisha: {
    where: { text: "Ada di teras dan di lounge." } as Item, // reviews 3, photos
    flavours: { text: "Rasa apel ganda, mint, anggur, dan blueberry.", mockup: true } as Item,
    from: { text: "Mulai Rp 75rb", mockup: true } as Item,
  },
};

// Paraphrased from the listing's reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  lead: "Tamu kami paling sering menyebut:",
  themes: [
    { before: "tempatnya", word: "nyaman" }, // reviews 1, 2, 3, 5
    { before: "makanannya", word: "enak" }, // reviews 1, 2, 5
    { before: "harganya", word: "terjangkau" }, // reviews 1, 2
    { before: "pelayanannya", word: "ramah" }, // reviews 3
  ],
  paraphrase: "Seorang tamu menyebutnya kafe bernuansa Arab terbaik di Condet.", // reviews 3
  ratingSuffix: "dari 240 ulasan Google", // listing
  link: "Lihat ulasan di Google Maps",
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Mabsooth Cafe & Resto",
};

export const contact = {
  heading: "Hubungi kami",
  line: {
    text: "Datang rombongan, arisan, atau makan malam keluarga? Kabari kami lewat WhatsApp.",
    mockup: true,
    quiet: true,
  } as Item,
  closing: { text: "Mabsooth artinya senang. Semoga Anda pulang begitu.", mockup: true, quiet: true } as Item,
  draftNote: "Draf mockup, belum dipublikasikan.",
};
