// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Every string is in Bahasa Indonesia (lang="id").

export type Item = { text: string; mockup?: boolean };
export type MenuItem = { name: string; price?: string; note?: string; mockup?: boolean };
export type MenuGroup = { title: string; range: string; items: MenuItem[]; mockup?: boolean };

// Facts from raw.json (listing). googleMapsUri with the tracking parameter dropped.
export const shop = {
  name: "NUWA Cafe",
  wordmark: "NUWA",
  wordmarkSub: "Cafe",
  type: "Kafe",
  address: "Jl. Gongseng Raya No.16, Baru, Pasar Rebo, Jakarta Timur 13770",
  addressLines: ["Jl. Gongseng Raya No.16,", "Baru, Pasar Rebo,", "Jakarta Timur 13770"],
  addressShort: "Jl. Gongseng Raya No.16, Pasar Rebo",
  mapsUrl: "https://maps.google.com/?cid=365483487607896667",
  mapEmbedUrl:
    "https://www.google.com/maps?q=NUWA%20Cafe%2C%20Jl.%20Gongseng%20Raya%20No.16%2C%20Pasar%20Rebo%2C%20Jakarta%20Timur&output=embed",
  // Placeholder: the listing has no phone. When the owner gives a number, put it here as
  // international digits only (e.g. "62812xxxxxxx") and the WhatsApp buttons become wa.me links.
  whatsapp: "",
  hours: [{ days: "Senin–Minggu", time: "11.00–22.00" }],
  hoursNote: "Buka setiap hari",
  todayLine: "Buka hari ini 11.00–22.00",
  rating: { value: "4,6", count: 227, source: "ulasan Google" },
};

export const meta = {
  title: "NUWA Cafe · Makan siang & ngopi di Pasar Rebo",
  description:
    "NUWA Cafe di Jl. Gongseng Raya No.16, Pasar Rebo, Jakarta Timur. Buka setiap hari 11.00–22.00.",
};

export const banner =
  "Draf situs untuk ditinjau pemilik NUWA Cafe. Nama menu, harga dan beberapa teks masih contoh.";

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  whatsappPending: "nomor menyusul",
  whatsappPendingLabel: "WhatsApp, nomor menyusul",
  openMaps: "Buka di Google Maps",
};

export const hero = {
  tagline: {
    text: "Makan siang enak, ngopi santai, harga bersahabat di Pasar Rebo.",
    mockup: true,
  } as Item,
  bowlCaption: "Ilustrasi: ramen kuah creamy",
  bowlLabel:
    "Ilustrasi ramen kuah creamy dengan telur rebus, jagung, nori, narutomaki, daging dan minyak cabai",
};

export const menu = {
  heading: "Menu andalan",
  intro: {
    text: "Ramen dulu, lalu yang lain.",
    mockup: true,
  } as Item,
  note: {
    text: "Semua nama dan harga di bawah masih contoh sampai NUWA kirim menu aslinya.",
    mockup: true,
  } as Item,
  ramen: {
    title: "Ramen",
    range: { text: "Rp 35rb–45rb", mockup: true } as Item,
    // From the photo of the bowl (fact), not mockup.
    description:
      "Kuah putih yang creamy, irisan daging panggang, daging cincang berbumbu, dua belah telur rebus, jagung manis, nori, narutomaki, daun bawang dan sesendok minyak cabai.",
    items: [
      { name: "Ramen Kuah Creamy", mockup: true },
      { name: "Ramen Pedas", note: "minyak cabai ekstra", mockup: true },
    ] as MenuItem[],
  },
  groups: [
    {
      title: "Rice bowl",
      range: "Rp 30rb–38rb",
      mockup: true,
      items: [
        { name: "Chicken katsu", mockup: true },
        { name: "Chicken teriyaki", mockup: true },
      ],
    },
    {
      title: "Favorit Indonesia",
      range: "Rp 25rb–32rb",
      mockup: true,
      items: [
        { name: "Nasi goreng", mockup: true },
        { name: "Mie goreng", mockup: true },
      ],
    },
    {
      title: "Camilan",
      range: "Rp 18rb–28rb",
      mockup: true,
      items: [
        { name: "Kentang goreng", mockup: true },
        { name: "Cireng", mockup: true },
        { name: "Dimsum", mockup: true },
      ],
    },
  ] as MenuGroup[],
  lunchSet: {
    title: "Paket makan siang",
    text: "Ramen atau rice bowl + es teh",
    price: "Rp 40rb",
    mockup: true,
  },
};

export const coffee = {
  heading: "Ngopi di NUWA",
  intro: {
    text: "Habis makan, jangan buru-buru pulang. Satu kopi lagi, ya.",
    mockup: true,
  } as Item,
  note: { text: "Nama dan harga di bawah masih contoh.", mockup: true } as Item,
  kopiTitle: "Kopi",
  kopi: [
    { name: "Es Kopi Susu Gula Aren", price: "Rp 22rb", mockup: true },
    { name: "Cappuccino / Café Latte", price: "Rp 25rb–28rb", mockup: true },
    { name: "Americano", price: "Rp 20rb", mockup: true },
  ] as MenuItem[],
  nonKopi: {
    title: "Non-kopi",
    range: "Rp 20rb–28rb",
    mockup: true,
    items: [
      { name: "Matcha latte", mockup: true },
      { name: "Cokelat", mockup: true },
      { name: "Lychee tea", mockup: true },
      { name: "Lemon tea", mockup: true },
    ],
  } as MenuGroup,
  // Drawn from the customer photo (fact: red cup, tall iced glass); the photo itself is never shown.
  cup: {
    caption: "Cappuccino",
    label: "Ilustrasi cappuccino dalam cangkir merah di atas tatakan merah, dengan latte art berbentuk hati",
  },
  glass: {
    caption: "Es kopi susu",
    label: "Ilustrasi es kopi susu dalam gelas tinggi, dengan es batu dan busa susu",
  },
};

export type AmbienceCell = {
  id: "photo" | "vines" | "roster1" | "roster2" | "terang" | "meja" | "chair" | "bulbs" | "shelf";
  kind: "drawing" | "text" | "block" | "photo";
  label: string;
  phoneHidden?: boolean;
  mockup?: boolean;
};

export const ambience = {
  heading: "Suasana NUWA",
  // Facts from the photos and reviews 1; the wording is mockup.
  intro: {
    text: "Rumah putih yang terang, penuh tanaman gantung dan pot. Mejanya pas buat ramai-ramai: teman, keluarga, anak-anak.",
    mockup: true,
  } as Item,
  cells: [
    { id: "photo", kind: "photo", label: "Tempat foto ruang makan · menunggu foto dari pemilik" },
    { id: "vines", kind: "drawing", label: "Tanaman gantung" },
    { id: "roster1", kind: "block", label: "Roster" },
    { id: "terang", kind: "text", label: "Terang & hijau", mockup: true },
    { id: "chair", kind: "drawing", label: "Kursi besi merah" },
    { id: "meja", kind: "text", label: "Meja buat ramai-ramai", mockup: true },
    { id: "bulbs", kind: "drawing", label: "Lampu gantung" },
    { id: "shelf", kind: "drawing", label: "Rak kayu", phoneHidden: true },
    { id: "roster2", kind: "block", label: "Roster", phoneHidden: true },
  ] as AmbienceCell[],
  photoLabel: "Tempat foto ruang makan, menunggu foto dari pemilik",
  photoTitle: "Foto ruang makan",
  photoNote: "menunggu foto dari pemilik",
};

// Paraphrased from real reviews only (reviews 5, 5, 1). Never invented, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  lines: [
    { text: "Makanannya enak, harganya terjangkau." },
    { text: "Pemiliknya ramah, tempatnya selalu ramai." },
    { text: "Pas buat makan siang dan nongkrong bareng teman." },
  ] as Item[],
  rating: "4,6 dari 227 ulasan Google",
  note: "Ringkasan ulasan Google, bukan kutipan",
};

export const visit = {
  heading: "Kunjungi kami",
  hoursTitle: "Jam buka",
  mapTitle: "Peta lokasi NUWA Cafe",
};

export const close = {
  heading: { text: "Mampir ke NUWA hari ini, ya.", mockup: true } as Item,
  sub: { text: "Ajak teman, kami siapkan mejanya.", mockup: true } as Item,
};

export const footer = {
  addressLines: ["Jl. Gongseng Raya No.16,", "Pasar Rebo, Jakarta Timur"],
  hoursLine: "Setiap hari 11.00–22.00",
  draftNote: "Draf situs untuk ditinjau pemilik NUWA Cafe. Belum resmi.",
};

export const skipLink = "Lewati ke konten";
