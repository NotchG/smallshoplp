// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy is Bahasa Indonesia, register "kamu" (itself a [MOCKUP] choice the owner confirms).

export const shop = {
  name: "Halaman Pertama Kitchen & Coffee",
  shortName: "Halaman Pertama",
  // Set the way the shop's cups print it (listing, photos).
  wordmark: { bold: "halaman", light: "pertama", sub: "KITCHEN & COFFEE" },
  area: "Ciracas, Jakarta Timur",
  address: {
    street: "Jl. Raya PKP No. 2",
    area: "Kelapa Dua Wetan, Ciracas",
    city: "Jakarta Timur 13730",
  },
  phoneDisplay: "0821-1244-6115", // listing
  phoneTel: "+6282112446115", // listing
  // [MOCKUP] the number is a mobile and probably takes WhatsApp.
  whatsapp: { url: "https://wa.me/6282112446115", mockup: true },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Halaman+Pertama+Kitchen+%26+Coffee&destination_place_id=ChIJ179-INbtaS4RsfbPgsMbfjI",
  mapsUrl: "https://maps.google.com/?cid=3638376075489179313",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Halaman+Pertama+Kitchen+%26+Coffee,+Jl.+Raya+PKP+No.2,+Kelapa+Dua+Wetan,+Ciracas,+Jakarta+Timur&output=embed",
  rating: { value: "4,1", count: 596 }, // listing
};

export const meta = {
  title: "Halaman Pertama Kitchen & Coffee · Ciracas, Jakarta Timur",
  description:
    "Kafe dan dapur di Ciracas dengan ruang ber-AC, area terbuka, dan teras beratap. Buka setiap hari 08.30–22.30, Jumat–Minggu sampai 23.00.",
};

export const banner = "Draf mockup · belum situs resmi Halaman Pertama";

// Hours from the listing. jsDay matches Date.getDay(): 0 = Minggu.
export type HoursRow = { day: string; short: string; jsDay: number; open: string; close: string };
export const hours: HoursRow[] = [
  { day: "Senin", short: "Sen", jsDay: 1, open: "08.30", close: "22.30" },
  { day: "Selasa", short: "Sel", jsDay: 2, open: "08.30", close: "22.30" },
  { day: "Rabu", short: "Rab", jsDay: 3, open: "08.30", close: "22.30" },
  { day: "Kamis", short: "Kam", jsDay: 4, open: "08.30", close: "22.30" },
  { day: "Jumat", short: "Jum", jsDay: 5, open: "08.30", close: "23.00" },
  { day: "Sabtu", short: "Sab", jsDay: 6, open: "08.30", close: "23.00" },
  { day: "Minggu", short: "Min", jsDay: 0, open: "08.30", close: "23.00" },
];
export const hoursNote = "Buka setiap hari.";
export const hoursSummary = "Sen–Kam sampai 22.30 · Jum–Min sampai 23.00";

export type Text = { text: string; mockup?: boolean };

export const nav = [
  { label: "Tiga sudut", href: "#sudut" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#kunjungi" },
];

export const hero = {
  line: { text: "Tempat kerja, makan, dan nongkrong di Ciracas." } as Text, // brief, reviews 1–3, 5
  rating: `${shop.rating.value} di Google · ${shop.rating.count} ulasan`,
  photo: {
    src: "/hero-900.jpg",
    srcSmall: "/hero-600.jpg",
    width: 900,
    height: 1350,
    alt: "Pizza pepperoni, sushi maki goreng, sweet potato fries, dan kentang saus keju di meja marmer Halaman Pertama",
  },
};

export type Corner = {
  name: string;
  line: string;
  drawing: "ruang" | "halaman" | "teras";
  fill: "kapur" | "daun-muda" | "arang";
};

export const sudut = {
  // [MOCKUP] plays on "halaman" = page and courtyard.
  heading: { bold: "Tiga sudut,", light: "satu halaman", mockup: true },
  intro: "Kerja, makan malam, atau nongkrong sampai larut. Pilih sudut favoritmu.",
  corners: [
    {
      name: "Ruang ber-AC",
      line: "Sejuk dan tenang, nyaman untuk bawa anak.", // reviews 1, 5
      drawing: "ruang",
      fill: "kapur",
    },
    {
      name: "Area terbuka",
      line: "Hijau dan segar, paling enak dari sore sampai malam. Kadang ada live music.", // reviews 3, 5
      drawing: "halaman",
      fill: "daun-muda",
    },
    {
      name: "Teras beratap",
      line: "Udara segar tanpa panas matahari langsung. Boleh merokok di sini.", // review 5
      drawing: "teras",
      fill: "arang",
    },
  ] as Corner[],
};

export type Dish = {
  name: string;
  line: string;
  price?: string;
  img: string;
  alt: string;
  mockup?: boolean; // the price is an example
  nameMockup?: boolean; // the name is our guess
};

export type MenuItem = {
  name: string;
  line?: string;
  price?: string;
  mockup?: boolean;
  nameMockup?: boolean;
  tag?: string;
  tagMockup?: boolean;
};

export const menu = {
  heading: { bold: "Menu", light: "andalan" },
  intro: "Menunya makin beragam, dan dapurnya yang bikin orang balik untuk makan malam.", // reviews 1, 2, 5
  priceNote: "Harga masih contoh dan menunggu konfirmasi.",
  dishes: [
    {
      name: "Pizza Pepperoni",
      line: "Pinggiran tipis, disajikan di papan kayu.",
      price: "Rp 65rb",
      mockup: true,
      img: "/menu/pizza-pepperoni.jpg",
      alt: "Pizza pepperoni tipis di papan kayu, satu potong diangkat",
    },
    {
      name: "Sushi Maki",
      line: "Digoreng ala tempura, di atas sayuran renyah.",
      img: "/menu/sushi-maki.jpg",
      alt: "Sushi maki goreng di atas sayuran renyah di nampan putih",
    },
    {
      name: "Sweet Potato Fries",
      line: "Dengan saus keju dan sambal.",
      price: "Rp 25rb–30rb",
      mockup: true,
      nameMockup: true,
      img: "/menu/sweet-potato-fries.jpg",
      alt: "Kentang ubi goreng di piring biru dengan saus keju dan sambal",
    },
    {
      name: "Cheese Fries",
      line: "Saus keju putih, irisan cabai, dan basil.",
      price: "Rp 25rb–30rb",
      mockup: true,
      nameMockup: true,
      img: "/menu/cheese-fries.jpg",
      alt: "Kentang goreng bersaus keju putih dengan cabai dan daun basil di piring hitam",
    },
  ] as Dish[],
  bar: {
    title: { bold: "Dari", light: "bar" },
    items: [
      {
        name: "Bonbon Noir",
        line: "Minuman terbaik menurut seorang pelanggan tetap.", // review 2
        tag: "Favorit",
        tagMockup: true,
      },
      {
        name: "Frappe",
        nameMockup: true,
        line: "Minuman blended dingin dengan whipped cream.", // photos
      },
      { name: "Kopi Susu Gula Aren", line: "Dingin, dengan gula aren.", price: "Rp 25rb", mockup: true },
      { name: "Americano / Cafe Latte", line: "Panas atau dingin.", price: "Rp 22rb–30rb", mockup: true },
      { name: "Matcha Latte / Cokelat", price: "Rp 28rb–32rb", mockup: true },
    ] as MenuItem[],
  },
  dapur: {
    title: { bold: "Dari", light: "dapur" },
    items: [
      { name: "Bulgogi Rice", line: "Daging sapi bulgogi dengan nasi." }, // review 3
      {
        name: "Chicken Teriyaki Rice / Chicken Katsu Curry",
        line: "Rice bowl ala Asia.",
        price: "Rp 38rb–48rb",
        mockup: true,
      },
      { name: "Spaghetti Aglio Olio / Creamy Carbonara", price: "Rp 40rb–55rb", mockup: true },
      { name: "Sarapan", line: "Roti panggang dan telur, mulai 08.30.", mockup: true },
    ] as MenuItem[],
  },
};

export const kerja = {
  heading: { bold: "Betah kerja", light: "di sini" },
  intro: "Datang pagi, pulang setelah makan malam.",
  rows: [
    { title: "Banyak colokan", text: "Stopkontak ada di banyak titik, jadi laptop dan ponsel tetap terisi." }, // review 1
    { title: "AC yang dingin", text: "Ruang dalamnya luas dan sejuk, enak untuk fokus." }, // review 1
    { title: "Betah berjam-jam", text: "Kerja atau ngobrol lama, tetap nyaman sampai sore dan malam." }, // reviews 1, 3
    { title: "Buka sampai malam", text: "Senin–Kamis sampai 22.30, Jumat–Minggu sampai 23.00." }, // hours
  ],
};

// Paraphrased themes from Google reviews. Never quoted, never attributed: no author field.
export const ulasan = {
  heading: { bold: "Kata", light: "mereka" },
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan Google`,
  note: "Dirangkum dari ulasan Google, bukan kutipan langsung.",
  themes: [
    { label: "Suasana", text: "Luas, sejuk, dan hijau. Ada yang bilang rasanya seperti kafe di Bandung." }, // reviews 1–5
    { label: "Jendela", text: "Jendelanya besar, nuansanya tropis." }, // review 4
    { label: "Makan malam", text: "Makanannya bikin orang datang lagi untuk makan malam. Menunya juga makin beragam." }, // reviews 1, 2, 5
    { label: "Pelayanan", text: "Pelayanannya makin cepat, harganya terjangkau." }, // reviews 2, 4
  ],
};

export const kunjungi = {
  heading: { bold: "Kunjungi", light: "kami" },
  parking: "Parkir mobil terbatas, kadang ada tempat di lahan sebelah. Parkir motor tersedia.", // reviews 2, 4
  mapTitle: "Peta lokasi Halaman Pertama",
};

export const hubungi = {
  heading: { bold: "Hubungi", light: "kami" },
  // [MOCKUP] group bookings by WhatsApp.
  line: { text: "Tanya menu atau pesan tempat untuk rombongan lewat WhatsApp.", mockup: true } as Text,
  whatsappLabel: "Chat WhatsApp",
  callLabel: `Telepon ${shop.phoneDisplay}`,
  directionsLabel: "Petunjuk Arah",
};

export const footer = {
  draft: "Situs ini masih draf mockup.",
};
