// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Site language: Bahasa Indonesia.

export type Item = { text: string; mockup?: boolean };

const mapQuery =
  "In Out Coffee House, Jl. Dr. KRT Radjiman Widyodiningrat No.7-9, Cakung, Jakarta Timur";

export const shop = {
  name: "In Out Coffee House",
  type: "Kafe",
  // Listing address (raw.json formattedAddress), en dash for the number range.
  address:
    "Jl. Dr. KRT Radjiman Widyodiningrat No.7–9, RT.5/RW.6, Jatinegara, Cakung, Jakarta Timur 13930",
  addressShort: "Jl. Dr. KRT Radjiman Widyodiningrat No.7–9, Jatinegara, Cakung",
  // A reviewer places it in the Pulo Jahe area (reviews 1).
  areaNote: { text: "Sekitar Pulo Jahe" } as Item,
  phone: "0812-6060-9930",
  telUrl: "tel:+6281260609930",
  // [MOCKUP] the number is a mobile number; WhatsApp not confirmed yet.
  waUrl: "https://wa.me/6281260609930",
  waMockup: true,
  mapsUrl: "https://maps.google.com/?cid=7190884297404004731",
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
  rating: 4.7,
  ratingCount: 215,
};

// JS day numbers (0 = Minggu), Asia/Jakarta. From raw.json regularOpeningHours.
export type HoursRow = { days: number[]; label: string; open: string; close: string };
export const hours: HoursRow[] = [
  { days: [1, 2, 3, 4], label: "Senin–Kamis", open: "14.00", close: "22.00" },
  { days: [5, 6, 0], label: "Jumat–Minggu", open: "14.00", close: "23.00" },
];
export const hoursNote = "Buka setiap hari mulai 14.00";

export const banner: Item = {
  text: "Draf situs untuk ditinjau pemilik In Out Coffee House. Beberapa detail masih contoh sampai dikonfirmasi.",
};
export const footerNote: Item = {
  text: "Draf situs untuk ditinjau pemilik. Detail bertanda contoh menunggu konfirmasi.",
};

export const cta = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export const hero = {
  line: { text: "Tempat nongkrong dari sore sampai malam di Cakung", mockup: true } as Item,
  ovalLabel:
    "Gambar jendela oval berbingkai oranye di dinding lantai 2, menghadap ruang beanbag berdinding kuning dengan lampu bulat, rak besi dengan kaktus kecil, rumput sintetis, dan beanbag",
};

export type Space = {
  id: "rooftop" | "indoor" | "beanbag";
  title: string;
  body: Item[];
  artLabel: string;
};

export const spaces = {
  title: "Pilih tempatmu",
  intro: { text: "Tiga suasana, satu gedung. Yang paling atas tanpa atap.", mockup: true } as Item,
  items: [
    {
      id: "rooftop",
      title: "Rooftop lantai 3",
      body: [
        { text: "Area terbuka di lantai 3, di atas pucuk-pucuk pohon." },
        { text: "Naik ke rooftop, lihat langit sore, kopi di tangan.", mockup: true },
      ],
      artLabel:
        "Gambar rooftop: langit kuning, matahari sore di balik pohon, tembok pembatas putih dengan pagar jaring hitam, dua tiang lampu melengkung, meja hitam dan bangku putih",
    },
    {
      id: "indoor",
      title: "Lantai 2, indoor",
      body: [
        { text: "Dinding putih penuh poster musik, lampu gantung hijau, meja dan kursi kayu." },
        { text: "Pas buat ngobrol lama.", mockup: true },
      ],
      artLabel:
        "Gambar lantai 2: plafon baja, lampu gantung hijau, empat bingkai poster di dinding putih, jendela oval ke ruang kuning, meja bundar dan dua kursi kayu",
    },
    {
      id: "beanbag",
      title: "Ruang beanbag",
      body: [
        { text: "Ruang kuning di balik jendela oval: lampu bulat, rumput sintetis, beanbag." },
        { text: "Lepas alas kaki dulu, lalu santai.", mockup: true },
      ],
      artLabel:
        "Gambar ruang beanbag: dinding kuning, pilar bata dan lengkungan, dua lampu bulat, rumput sintetis, beanbag",
    },
  ] as Space[],
};

export type ProductArtId = "kopiSusu" | "latte" | "matcha" | "nasiGoreng" | "rotiBakar";
export type Featured = {
  id: ProductArtId;
  name: string;
  price: string;
  field: "kuning" | "bata" | "ink" | "hijau" | "paper";
  artLabel: string;
  mockup: boolean;
};

export const menu = {
  title: "Menu andalan",
  // Red espresso machine (photos) and a varied menu (reviews 1); the wording is a draft.
  intro: {
    text: "Kopi dari mesin espresso merah di bar, plus makanan dan camilan buat teman nongkrong.",
    mockup: true,
  } as Item,
  note: "Nama menu dan harga di bawah ini masih contoh.",
  featured: [
    {
      id: "kopiSusu",
      name: "Es Kopi Susu In Out",
      price: "Rp 20rb",
      field: "kuning",
      artLabel:
        "Gambar es kopi susu dalam gelas plastik bening berlogo IN OUT, dengan lapisan susu, kopi, dan es batu",
      mockup: true,
    },
    {
      id: "latte",
      name: "Café Latte",
      price: "Rp 25rb",
      field: "bata",
      artLabel: "Gambar cangkir putih café latte di atas tatakan, dengan uap",
      mockup: true,
    },
    {
      id: "matcha",
      name: "Matcha",
      price: "dari Rp 20rb",
      field: "ink",
      artLabel: "Gambar es matcha susu dalam gelas berlogo IN OUT",
      mockup: true,
    },
    {
      id: "nasiGoreng",
      name: "Nasi goreng",
      price: "dari Rp 25rb",
      field: "hijau",
      artLabel: "Gambar sepiring nasi goreng dari atas, dengan telur ceplok, timun, dan sambal",
      mockup: true,
    },
    {
      id: "rotiBakar",
      name: "Roti bakar",
      price: "dari Rp 15rb",
      field: "paper",
      artLabel: "Gambar dua potong roti bakar bertumpuk dengan saus cokelat dan parutan keju",
      mockup: true,
    },
  ] as Featured[],
  groups: [
    {
      title: "Kopi",
      items: [
        { name: "Es Kopi Susu In Out", price: "Rp 20rb" },
        { name: "Americano", price: "Rp 20rb" },
        { name: "Café Latte", price: "Rp 25rb" },
        { name: "Cappuccino", price: "Rp 25rb" },
      ],
    },
    {
      title: "Non-kopi",
      range: "Rp 20–27rb",
      items: [{ name: "Matcha" }, { name: "Chocolate" }, { name: "Taro" }, { name: "Lychee Tea" }],
    },
    {
      title: "Makanan",
      range: "Rp 25–35rb",
      items: [
        { name: "Nasi goreng" },
        { name: "Rice bowl ayam sambal matah" },
        { name: "Mie goreng" },
      ],
    },
    {
      title: "Camilan",
      range: "Rp 15–25rb",
      items: [
        { name: "Kentang goreng" },
        { name: "Cireng" },
        { name: "Roti bakar" },
        { name: "Pisang goreng" },
      ],
    },
  ] as { title: string; range?: string; items: { name: string; price?: string }[] }[],
  groupsMockup: true,
  paket: {
    title: "Paket Nongkrong",
    contents: "2 minuman + 1 camilan",
    price: "Rp 50rb",
    artLabel: "Gambar dua gelas kopi berlogo IN OUT dan satu wadah kentang goreng",
    mockup: true,
  },
};

// Whole section is [MOCKUP]. Set show: false if the owner says the car wash is no longer part of the site.
export const carWash = {
  show: true,
  title: "Sambil menunggu cuci mobil",
  body: "Ngopi atau makan dulu selagi mobilmu dicuci. Kopi, makanan, dan cuci mobil di satu tempat.",
  link: "Lihat menu",
  mockup: true,
};

// Paraphrased from real reviews only. Never invented, never attributed to a name, no quote marks.
export const praise = {
  title: "Kata mereka",
  rating: `${shop.rating.toString().replace(".", ",")} dari ${shop.ratingCount} ulasan Google`,
  items: [
    { text: "Permata tersembunyi di Cakung." }, // reviews 1
    { text: "Nyaman, pas buat nongkrong bareng teman." }, // reviews 1, 3
    { text: "Menunya beragam, harganya wajar." }, // reviews 1
    { text: "Rasanya enak, suasananya asyik." }, // reviews 5
  ] as Item[],
  source: "Ringkasan dari ulasan Google, bukan kutipan langsung.",
  link: "Baca ulasan di Google",
};

export const visit = {
  title: "Kunjungi kami",
  hoursTitle: "Jam buka",
  todayTag: "hari ini",
  mapTitle: "Peta lokasi In Out Coffee House",
};

export const close = {
  label: "Hubungi kami",
  title: { text: "Masuk santai, keluar senang.", mockup: true } as Item,
  line: {
    text: "Sampai ketemu di In Out. Tanya apa saja lewat WhatsApp, atau telepon langsung.",
    mockup: true,
  } as Item,
};

export const meta = {
  title: "In Out Coffee House · Kafe di Cakung, Jakarta Timur",
  description:
    "Kafe tiga suasana di Cakung: indoor lantai 2, ruang beanbag, dan rooftop lantai 3. Buka setiap hari mulai 14.00.",
};

export const skipLink = "Langsung ke konten";
