// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: raw.json (listing, hours, reviews) and the owner's own photos (owner-1 to owner-7).

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Agan Coffee", // as on the awning, window and cups (the listing says "Agan Coffee Shop")
  listingName: "Agan Coffee Shop",
  type: "Kedai kopi",
  address:
    "Jl. Angkasa No.13A, RT.1/RW.9, Halim Perdanakusuma, Kec. Makasar, Jakarta Timur 13610",
  addressShort: "Jl. Angkasa No.13A, Halim Perdanakusuma",
  phoneDisplay: "0877-7105-1994",
  phoneTel: "+6287771051994",
  whatsapp: { url: "https://wa.me/6287771051994", mockup: true }, // assumes the 0877 number takes WhatsApp
  instagram: { handle: "@agancoffee", url: "https://instagram.com/agancoffee" }, // printed on the cups
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Agan%20Coffee%20Shop&destination_place_id=ChIJGWNHZhbzaS4RBJb9lwZuDrA",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Agan%20Coffee%20Shop%2C%20Jl.%20Angkasa%20No.13A%2C%20Halim%20Perdanakusuma&z=17&output=embed",
  rating: { value: "4,6", count: 292 },
};

export const meta = {
  title: "Agan Coffee · Kopi di Jl. Angkasa, Halim",
  description:
    "Agan Coffee, kedai kopi di Jl. Angkasa No.13A, Halim Perdanakusuma, Jakarta Timur. Buka Senin–Sabtu 08.00–23.00.",
};

export const banner =
  "Draf mockup untuk Agan Coffee. Teks bergaris titik-titik masih contoh sampai dikonfirmasi.";

// Listing hours. js = Date.getDay() (0 = Minggu).
export type HoursRow =
  | { day: string; js: number; open: string; close: string; closed?: false }
  | { day: string; js: number; closed: true };

export const hours: HoursRow[] = [
  { day: "Senin", js: 1, open: "08.00", close: "23.00" },
  { day: "Selasa", js: 2, open: "08.00", close: "23.00" },
  { day: "Rabu", js: 3, open: "08.00", close: "23.00" },
  { day: "Kamis", js: 4, open: "08.00", close: "23.00" },
  { day: "Jumat", js: 5, open: "08.00", close: "23.00" },
  { day: "Sabtu", js: 6, open: "08.00", close: "23.00" },
  { day: "Minggu", js: 0, closed: true },
];

export const hoursSummary = "Senin–Sabtu 08.00–23.00 · Minggu tutup";

export const hero = {
  tagline: { text: "Rehat kopi di Jalan Angkasa, Halim.", mockup: true } as Item,
};

// Photos: owner uploads only (photos.json). Crops are CSS (aspect + object-position).
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: Item[]; // an array so only the mockup part of a caption is flagged
  aspect: string;
  aspectPhone?: string;
  position: string;
  // owner-3 is natively 16:9, so object-position alone can't crop it; scale from the right instead.
  zoom?: { scale: number; origin: string };
};

export const photos = {
  hero: {
    src: "/photos/owner-2.jpg",
    width: 1301,
    height: 1600,
    alt: "Dua croissant di atas serbet bermotif dan secangkir latte dengan latte art angsa",
    caption: [{ text: "Croissant dan latte art angsa di cangkir bibir merah." }],
    aspect: "5 / 4",
    aspectPhone: "4 / 5",
    position: "50% 70%",
  },
  latte: {
    src: "/photos/owner-4.jpg",
    width: 1067,
    height: 1600,
    alt: "Tangan mengangkat cangkir latte dengan latte art rosetta dari tatakan bibir merah",
    caption: [{ text: "Latte art rosetta, cangkir dan tatakan bibir merah." }],
    aspect: "4 / 5",
    position: "50% 85%",
  },
  frappe: {
    src: "/photos/owner-5.jpg",
    width: 719,
    height: 721,
    alt: "Minuman blended merah muda di gelas Agan Coffee, satu shot espresso dan biji kopi",
    caption: [
      { text: "Red Velvet Frappe", mockup: true },
      { text: " dan satu shot espresso, di gelas Agan Coffee." },
    ],
    aspect: "1 / 1",
    aspectPhone: "4 / 5",
    position: "50% 50%",
  },
  dimsum: {
    src: "/photos/owner-7.jpg",
    width: 1066,
    height: 1600,
    alt: "Dimsum diangkat dengan sumpit oranye, semangkuk saus cocol dan gelas kopi bawa pulang Agan Coffee",
    caption: [{ text: "Dimsum dengan saus cocol, ditemani kopi bawa pulang." }],
    aspect: "4 / 5",
    position: "50% 100%",
  },
  snack: {
    src: "/photos/owner-6.jpg",
    width: 1066,
    height: 1600,
    alt: "Camilan goreng bertabur parutan keju di piring putih, dengan saus merah dan minuman dingin merah muda",
    caption: [{ text: "Camilan goreng bertabur keju, dengan saus merah." }],
    aspect: "4 / 5",
    position: "50% 100%",
  },
  pavilion: {
    src: "/photos/owner-3.jpg",
    width: 720,
    height: 405,
    alt: "Paviliun kaca berawning merah dengan dinding roster terakota di bawah pohon rindang",
    caption: [{ text: "Paviliun kaca di bawah pohon rindang, Jalan Angkasa." }],
    aspect: "16 / 9",
    position: "80% 30%",
    zoom: { scale: 1.5, origin: "100% 20%" },
  },
  awning: {
    src: "/photos/owner-1.jpg",
    width: 1279,
    height: 1600,
    alt: "Awning kubah merah bertuliskan Agan Coffee dan papan nomor 13A di atas pintu kaca",
    caption: [{ text: "Cari awning merah ini. Nomor 13A ada di bawahnya." }],
    aspect: "2 / 1",
    position: "50% 0%",
  },
} satisfies Record<string, Photo>;

export type MenuItem = {
  name: string;
  nameMockup?: boolean;
  price?: string;
  priceMockup?: boolean;
  note?: Item;
  tag?: string;
  windowCase?: "upper" | "lower" | "latte"; // lettering as on the shop window, CSS only
};

export const drinks = {
  title: "Menu andalan",
  intro: {
    text: "Yang tertulis di kaca jendela, ditambah racikan andalan kami. Panas atau dingin, tinggal pilih.",
    mockup: true,
  } as Item,
  groups: [
    {
      title: "Coffee",
      items: [
        { name: "Espresso", windowCase: "upper" },
        { name: "Americano", price: "Rp 22rb", priceMockup: true },
        { name: "Cappuccino", windowCase: "lower", price: "Rp 28rb", priceMockup: true },
        { name: "Kaffee Latte", windowCase: "latte" },
        { name: "Macchiato" },
        {
          name: "Kopi Jawa",
          nameMockup: true,
          note: { text: "tubruk atau V60", mockup: true },
          tag: "favorit di ulasan",
        },
        {
          name: "Es Kopi Susu Agan",
          nameMockup: true,
          price: "Rp 25rb",
          priceMockup: true,
          note: { text: "kopi susu dingin dengan gula aren", mockup: true },
        },
      ] as MenuItem[],
    },
    {
      title: "Selain kopi",
      items: [
        { name: "Iced Matcha Latte", nameMockup: true, price: "Rp 30rb", priceMockup: true },
        { name: "Red Velvet Frappe", nameMockup: true },
        { name: "Chocolate", nameMockup: true },
      ] as MenuItem[],
    },
  ],
  footnote: "Harga dan nama bergaris titik-titik masih contoh.",
};

export const food = {
  title: "Teman ngopi",
  intro: {
    text: "Croissant buat sarapan, dimsum dan camilan goreng buat teman ngobrol sampai malam.",
    mockup: true,
  } as Item,
  items: [
    { name: "Croissant Butter", nameMockup: true, price: "Rp 20rb", priceMockup: true },
    { name: "Dimsum Ayam (4\u00a0pcs)", nameMockup: true, price: "Rp 22rb", priceMockup: true },
    { name: "Singkong Goreng Keju", nameMockup: true },
    { name: "Kentang Goreng", nameMockup: true },
    { name: "Nasi Goreng", nameMockup: true },
  ] as MenuItem[],
  footnote: "Harga dan nama bergaris titik-titik masih contoh.",
};

// All sourced from reviews 1 and 2 (and the photos for the awning). Never sold as a workspace.
export const amenities = {
  title: "Nongkrong atau kerja",
  intro: {
    text: "Mau mampir sebentar atau duduk berjam-jam, ini yang perlu kamu tahu.",
    mockup: true,
  } as Item,
  items: [
    { name: "Colokan tersedia", note: "Ada colokan listrik untuk mengisi daya ponsel dan laptop." },
    { name: "Banyak cara bayar", note: "Tersedia beberapa pilihan metode pembayaran." },
    { name: "Dekat Bandara Halim", note: "Tempat rehat sejenak setelah mendarat di Halim." },
    { name: "Gampang dilihat", note: "Paviliun kaca berawning merah di pinggir Jalan Angkasa." },
  ],
};

// Paraphrased from real Google reviews (1, 3, 2, 4). Never quoted, never attributed to a name.
export const praise = {
  title: "Kata mereka",
  items: [
    "Tempatnya nyaman untuk kumpul bareng teman atau menyelesaikan kerjaan, dan harganya terjangkau.",
    "Kopinya enak, terutama kopi Jawa-nya.",
    "Gampang terlihat dari jalan, pas untuk rehat sebentar sehabis mendarat di Halim.",
    "Rasa kopinya pas, barista-nya ramah, harganya bersahabat.",
  ],
  note: "Diringkas dari ulasan Google, bukan kutipan langsung.",
};

export const visit = {
  title: "Kunjungi kami",
  notes: ["Parkir terbatas, lahannya sempit.", "Boleh merokok di dalam ruangan."],
};

export const contact = {
  title: "Hubungi kami",
  closing: { text: "Mampir dulu sebelum lanjut jalan.", mockup: true } as Item,
  hoursLines: ["Senin–Sabtu 08.00–23.00", "Minggu tutup"],
};
