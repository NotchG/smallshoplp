// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources: raw.json (listing, hours, reviews 1–5), photos/, brief.md.

export type Item = { text: string; mockup?: boolean };

export const shop = {
  name: "Kedai Malabar", // listing, façade sign
  subline: "Roti & Kopi", // façade sign (photos)
  type: "Kafe",
  street: "Jl. Cipinang Jaya Raya No.27B", // listing
  area: "Cipinang Besar Selatan, Jatinegara",
  city: "Jakarta Timur 13420",
  address: "Jl. Cipinang Jaya Raya No.27B, Cipinang Besar Selatan, Jatinegara, Jakarta Timur 13420",
  phone: "0816-833-844", // listing
  tel: "tel:+62816833844",
  whatsapp: { url: "https://wa.me/62816833844", mockup: true }, // assumes the mobile number takes WhatsApp
  instagram: { url: null as string | null, mockup: true }, // handle from the owner
  mapsUrl: "https://maps.google.com/?cid=7653992045239536017",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Kedai%20Malabar&destination_place_id=ChIJdRMZ9rfzaS4RkQkrajZxOGo",
  mapEmbed:
    "https://maps.google.com/maps?q=Kedai%20Malabar%2C%20Jl.%20Cipinang%20Jaya%20Raya%20No.27B%2C%20Jakarta%20Timur&z=16&output=embed",
  rating: { value: "4,6", count: 985 }, // listing
};

export const meta = {
  title: "Kedai Malabar · Roti & Kopi di Cipinang Jaya, Jatinegara",
  description:
    "Roti bakar, kopi tubruk dan teras malam di Jl. Cipinang Jaya Raya No.27B, Jakarta Timur. Buka setiap hari.",
};

export const banner = "Ini contoh tampilan, belum situs resmi Kedai Malabar.";

// Opening hours exactly as raw.json periods. Index 0 = Minggu … 6 = Sabtu (JS getDay order).
export type DayHours = { day: string; open: string; close: string };
export const hours: DayHours[] = [
  { day: "Minggu", open: "10:00", close: "22:00" },
  { day: "Senin", open: "10:00", close: "22:00" },
  { day: "Selasa", open: "10:00", close: "22:00" },
  { day: "Rabu", open: "12:00", close: "22:00" },
  { day: "Kamis", open: "10:00", close: "22:00" },
  { day: "Jumat", open: "13:00", close: "23:00" },
  { day: "Sabtu", open: "10:00", close: "23:00" },
];
// Display order for the week list: Senin first.
export const weekOrder = [1, 2, 3, 4, 5, 6, 0];
// Days that open later than 10.00; their open time is marked on the page.
export const lateOpenDays = [3, 5];

export const hero = {
  line: {
    text: "Roti hangat dan kopi tubruk di Cipinang Jaya, buka sampai malam.",
    mockup: true,
  } as Item,
  photoAlt:
    "Teras Kedai Malabar di malam hari: lampu gantung, kanopi garis hitam-putih dan dinding bata.",
};

export const status = {
  fallback: "Buka setiap hari",
  fallbackLink: "lihat jam lengkap",
  open: "Buka sekarang",
  notYet: "Belum buka",
  closed: "Sudah tutup",
};

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: `Telepon ${shop.phone}`,
  menu: "Lihat menu",
};

// Five drawn dishes (design brief §6). Pairs [0+1] and [2+3] touch on the page, then lontong.
export type Dish = {
  id: "roti-nougat" | "es-kopi-tubruk" | "roti-bakar-coklat-kacang" | "kopi-susu-panas" | "lontong-sayur";
  name: Item;
  detail: Item;
  price?: Item;
};
export const dishes: Dish[] = [
  {
    id: "roti-nougat",
    name: { text: "Roti Nougat" }, // review 1
    detail: { text: "roti gandum" }, // review 1
    price: { text: "Rp 22rb", mockup: true },
  },
  {
    id: "es-kopi-tubruk",
    name: { text: "Es Kopi Tubruk" }, // review 1
    detail: { text: "panas atau es", mockup: true },
    price: { text: "Rp 12rb", mockup: true },
  },
  {
    id: "roti-bakar-coklat-kacang",
    name: { text: "Roti bakar coklat kacang", mockup: true }, // dish from photos, name assumed
    detail: { text: "meses, saus coklat, kacang" }, // photos
  },
  {
    id: "kopi-susu-panas",
    name: { text: "Kopi susu panas", mockup: true }, // dish from photos, name assumed
    detail: { text: "di cangkir bermotif" }, // photos
  },
  {
    id: "lontong-sayur",
    name: { text: "Lontong sayur" }, // photos
    detail: { text: "ayam, telur, sambal, kerupuk" }, // photos
    price: { text: "Rp 25rb", mockup: true },
  },
];

export const menuIntro: Item = {
  // Paraphrase of review 1, not a quote.
  text: "Pasangan yang disukai tamu: Roti Nougat dari roti gandum, ditemani Es Kopi Tubruk.",
};

export type MenuItem = { name: Item; note?: Item; price?: Item };
export type MenuGroup = { title: string; items: MenuItem[] };
export const menu: MenuGroup[] = [
  {
    title: "Roti",
    items: [
      { name: { text: "Roti Nougat" }, note: { text: "roti gandum" }, price: { text: "Rp 22rb", mockup: true } },
      { name: { text: "Roti Bakar Coklat Keju", mockup: true }, price: { text: "Rp 20rb", mockup: true } },
      { name: { text: "Roti Bakar Srikaya", mockup: true } },
      { name: { text: "Roti Bakar Selai Kacang", mockup: true } },
      { name: { text: "Roti Keju" }, note: { text: "bisa setengah porsi" } }, // review 2
    ],
  },
  {
    title: "Kopi",
    items: [
      { name: { text: "Kopi Tubruk" }, note: { text: "panas / es", mockup: true }, price: { text: "Rp 12rb", mockup: true } },
      { name: { text: "Es Kopi Susu Malabar", mockup: true }, price: { text: "Rp 20rb", mockup: true } },
      { name: { text: "Cafe Latte" }, price: { text: "Rp 25rb", mockup: true } }, // latte: review 2
      { name: { text: "Americano", mockup: true } },
      { name: { text: "Cappuccino", mockup: true } },
    ],
  },
  {
    title: "Non-kopi",
    items: [
      { name: { text: "Teh Tarik", mockup: true } },
      { name: { text: "Es Teh Manis", mockup: true } },
      { name: { text: "Coklat", mockup: true } },
    ],
  },
  {
    title: "Makan",
    items: [
      { name: { text: "Lontong Sayur" }, price: { text: "Rp 25rb", mockup: true } }, // photos
      { name: { text: "Nasi Goreng Malabar", mockup: true } },
      { name: { text: "Indomie Goreng Telur", mockup: true } },
    ],
  },
];

export const menuNote: Item = { text: "Harga contoh, menunggu konfirmasi dari kedai.", mockup: true };

export const night = {
  line: { text: "Roti hangat, kopi tubruk, ngobrol sampai malam.", mockup: true } as Item,
  facts: [
    {
      title: "Teras di bawah lampu",
      text: "Duduk di luar, di bawah lampu gantung dan kanopi bergaris. Paling enak saat malam.", // review 1, photos
    },
    {
      title: "Area merokok dan bebas rokok",
      text: "Dua area yang terpisah, ditambah kursi di luar.", // reviews 2, 3
    },
    {
      title: "Parkir gampang",
      text: "Tempat parkir ada tepat di samping area duduk.", // reviews 1, 3
    },
    {
      title: "Buka sampai malam",
      text: "Setiap hari sampai 22.00. Jumat dan Sabtu sampai 23.00.", // hours
    },
  ],
};

// Paraphrased themes from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  note: "Dirangkum dari ulasan Google, bukan kutipan.",
  items: [
    { title: "Harga bersahabat", text: "Tamu menyebutnya pilihan kafe yang terjangkau." }, // reviews 1, 2, 4
    { title: "Tempat lega, dekorasi cantik", text: "Ruangnya cukup luas dan nyaman, dekorasinya disukai tamu." }, // reviews 1, 3
    { title: "Teras enak saat malam", text: "Bagian luarnya disebut paling nyaman begitu hari gelap." }, // review 1
    { title: "Staf ramah", text: "Stafnya dikenal ramah dan sigap membantu." }, // review 3
  ],
};

export const visit = {
  parking: "Parkir gampang, tepat di samping area duduk.", // reviews 1, 3
  lateNote: "Rabu buka 12.00 dan Jumat buka 13.00.", // hours
  todayTag: "hari ini",
  mapTitle: "Peta lokasi Kedai Malabar",
  mapFallback: "Peta tidak tampil? Buka di Google Maps",
};

export const contact = {
  line: { text: "Mampir sebentar, pulangnya nanti saja.", mockup: true } as Item,
  cashless: { text: "Bisa bayar non-tunai." } as Item, // review 3
  instagramPlaceholder: { text: "Instagram: menunggu nama akun dari kedai", mockup: true } as Item,
};
