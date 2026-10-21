// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief (or is section copy written for the
// mockup). Every one of them is listed in owner-checklist.md.
// Sources: (listing) / (hours) = raw.json, (rN) = Google review N, (photos) = reference photos.

import { ill } from "@/lib/palette";

export type Item = { text: string; mockup?: boolean };
export type Price = { text: string; mockup: true }; // every price in the brief is [MOCKUP]

export type GlassLayer = { color: string; height: number }; // height = share of the liquid
export type GlassSpec = {
  layers: GlassLayer[]; // bottom → top
  cap?: { color: string; height: number }; // thick cream layer at the top, inside the glass
  garnish: "flower" | "lemon" | "lemongrass" | "mint" | "swirl" | null;
  label: string; // Indonesian aria-label for the drawing
};

export type Drink = {
  id:
    | "axelle"
    | "black-lemonade"
    | "mariani"
    | "misty"
    | "dirty-latte"
    | "mango-yakult"
    | "iced-red-velvet"
    | "lembayung";
  name: string; // exactly as the shop writes it
  line: Item;
  price?: Price;
  glass: GlassSpec;
};

export type Dish = {
  id: "karage" | "hotplate" | "nasi-goreng" | "chicken-steak" | "churros";
  name: Item;
  line?: Item;
  price?: Price;
  drawn: boolean;
};

// ---------------------------------------------------------------------------------------
// Shop facts

export const shop = {
  name: "SAYKOP", // (listing: "SAYKOP ( Saya Kopi )"; owner to confirm capitals)
  subline: "Saya Kopi",
  type: "Kedai kopi", // (listing: coffee_shop, cafe)
  addressLines: ["Jl. Bangunan Timur No.13B", "Kayu Putih, Pulo Gadung", "Jakarta Timur 13220"], // (listing)
  address: "Jl. Bangunan Timur No.13B, Kayu Putih, Pulo Gadung, Jakarta Timur 13220",
  phone: "0821-6485-3355", // (listing)
  telUrl: "tel:+6282164853355",
  waUrl: "https://wa.me/6282164853355",
  waMockup: true, // [MOCKUP] assumes the mobile number takes WhatsApp
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=SAYKOP%20Saya%20Kopi&destination_place_id=ChIJtQmhjRf1aS4RRi1NEU73WBY",
  mapsUrl: "https://maps.google.com/?cid=1610308781454732614",
  mapEmbedUrl:
    "https://www.google.com/maps?q=SAYKOP+Saya+Kopi,+Jl.+Bangunan+Timur+No.13B,+Kayu+Putih,+Jakarta+Timur&output=embed",
  instagram: { text: "Instagram (menyusul)", mockup: true } as Item, // handle unknown
  parking: { text: "Parkir mobil dan motor" } as Item, // (r3)
};

// (hours) JS day numbers: 0 = Minggu … 6 = Sabtu
export const hours = [
  { label: "Senin–Kamis", short: "Sen–Kam", days: [1, 2, 3, 4], open: "11.00", close: "22.30" },
  { label: "Jumat", short: "Jum", days: [5], open: "13.00", close: "22.30" },
  { label: "Sabtu–Minggu", short: "Sab–Min", days: [6, 0], open: "11.00", close: "22.30" },
];
// Shown when JavaScript can't work out today's day.
export const hoursSummary = "Sen–Kam & Sab–Min 11.00–22.30 · Jum 13.00–22.30";

export const meta = {
  title: "SAYKOP (Saya Kopi) · Kedai kopi di Kayu Putih, Jakarta Timur",
  description:
    "Minuman kreatif seperti Axelle dan Black Lemonade, makanan, dan tempat nyaman buat kerja di Jl. Bangunan Timur No.13B, Pulo Gadung.",
};

export const banner = "Ini contoh tampilan, belum situs resmi SAYKOP.";

export const nav = [
  { href: "#minuman", label: "Minuman" },
  { href: "#makanan", label: "Makanan" },
  { href: "#lokasi", label: "Lokasi" },
];

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

// ---------------------------------------------------------------------------------------
// Hero

export const hero = {
  line: { text: "Kopi kreatif dan tempat nyaman buat betah lama di Kayu Putih.", mockup: true } as Item,
  todayPrefix: "Buka hari ini",
  caption: {
    name: "Axelle", // (r1)
    price: { text: "Rp 30rb", mockup: true } as Price,
    tone: { text: "Belum pernah coba Axelle? Ini saatnya." } as Item, // brief tone line
  },
};

// ---------------------------------------------------------------------------------------
// Minuman andalan

export const drinksSection = {
  heading: "Minuman andalan",
  intro: { text: "Delapan racikan, masing-masing punya nama. Kenalan dulu.", mockup: true } as Item,
};

export const drinks: Drink[] = [
  {
    id: "axelle",
    name: "Axelle",
    line: { text: "Seperti americano dengan sentuhan berry yang samar, lalu aroma bunga." }, // (r1)
    price: { text: "Rp 30rb", mockup: true },
    glass: {
      layers: [{ color: ill.berry, height: 1 }],
      garnish: "flower",
      label: "Ilustrasi Axelle: kopi berwarna merah berry dengan hiasan bunga",
    },
  },
  {
    id: "black-lemonade",
    name: "Black Lemonade",
    line: { text: "Kopi ketemu lemonade, pahit dan asamnya seimbang. Pas kalau kopi hitam terasa terlalu kuat." }, // (r1)
    price: { text: "Rp 27rb", mockup: true },
    glass: {
      layers: [
        { color: ill.lemon, height: 0.46 },
        { color: ill.coffee, height: 0.54 },
      ],
      garnish: "lemon",
      label: "Ilustrasi Black Lemonade: lemonade kuning di bawah, kopi hitam di atas, dengan irisan lemon",
    },
  },
  {
    id: "mariani",
    name: "Mariani",
    line: { text: "Minuman ungu dengan serai." }, // (r4)
    glass: {
      layers: [{ color: ill.lavender, height: 1 }],
      garnish: "lemongrass",
      label: "Ilustrasi Mariani: minuman ungu dengan batang serai",
    },
  },
  {
    id: "misty",
    name: "Misty",
    line: { text: "Lapisan krim manis di atas, lalu kopi arabika dengan sirup mint." }, // (r5)
    glass: {
      layers: [{ color: ill.coffee, height: 1 }],
      cap: { color: ill.cream, height: 0.26 },
      garnish: "mint",
      label: "Ilustrasi Misty: kopi dengan lapisan krim tebal dan daun mint",
    },
  },
  {
    id: "dirty-latte",
    name: "Dirty Latte",
    line: { text: "Latte dengan krim di atasnya." }, // (r1)
    price: { text: "Rp 28rb", mockup: true },
    glass: {
      layers: [
        { color: ill.milk, height: 0.5 },
        { color: ill.coffee, height: 0.5 },
      ],
      cap: { color: ill.cream, height: 0.18 },
      garnish: null,
      label: "Ilustrasi Dirty Latte: susu, kopi, dan krim berlapis",
    },
  },
  {
    id: "mango-yakult",
    name: "Mango Yakult",
    line: { text: "Mangga dan Yakult, tanpa kopi." }, // (r5, non-coffee)
    price: { text: "Rp 25rb", mockup: true },
    glass: {
      layers: [{ color: ill.mango, height: 1 }],
      garnish: null,
      label: "Ilustrasi Mango Yakult: minuman mangga berwarna oranye",
    },
  },
  {
    id: "iced-red-velvet",
    name: "Iced Red Velvet",
    line: { text: "Red velvet versi dingin, teman ngobrol sore.", mockup: true }, // (r4 name; line is mockup)
    glass: {
      layers: [{ color: ill.redVelvet, height: 1 }],
      garnish: "swirl",
      label: "Ilustrasi Iced Red Velvet: minuman merah dengan pusaran krim",
    },
  },
  {
    id: "lembayung",
    name: "Lembayung",
    line: { text: "Lembayung itu warna langit senja. Rasanya? Coba sendiri.", mockup: true }, // (r4 name; tone copy)
    glass: {
      layers: [
        { color: ill.mango, height: 0.42 },
        { color: ill.lavender, height: 0.58 },
      ],
      garnish: null,
      label: "Ilustrasi Lembayung: lapisan oranye dan ungu seperti langit senja (warna perkiraan)",
    },
  },
];

export const alsoOnMenu = {
  label: "Juga di menu",
  items: [
    { name: { text: "Elma" } as Item }, // (r3)
    { name: { text: "Kopi Susu Saykop", mockup: true } as Item, price: { text: "Rp 22rb", mockup: true } as Price },
    { name: { text: "Americano", mockup: true } as Item },
    { name: { text: "Cappuccino", mockup: true } as Item },
    { name: { text: "Caffè Latte", mockup: true } as Item },
    { name: { text: "V60", mockup: true } as Item },
    { name: { text: "Biji kopi 200 g untuk dibawa pulang", mockup: true } as Item },
  ] as { name: Item; price?: Price }[],
};

// ---------------------------------------------------------------------------------------
// Teman ngopi

export const foodSection = {
  heading: "Teman ngopi",
  intro: { text: "Bukan cuma camilan. Ada nasi, ada ayam, ada yang datang di atas hot plate.", mockup: true } as Item,
  alsoLabel: "Juga ada",
};

export const dishes: Dish[] = [
  {
    id: "karage",
    name: { text: "Karage Salted Egg" }, // (r1)
    line: { text: "Karaage yang juicy, saus telur asinnya melimpah, porsinya pas buat sendiri." }, // (r1)
    price: { text: "Rp 35rb", mockup: true },
    drawn: true,
  },
  {
    id: "hotplate",
    name: { text: "Ayam Sambal Ijo Hotplate", mockup: true },
    line: { text: "Ayam, nasi bertabur bawang goreng, dan kol goreng renyah di atas hot plate besi." }, // (photos)
    drawn: true,
  },
  {
    id: "nasi-goreng",
    name: { text: "Nasi Goreng Saykop", mockup: true },
    line: { text: "Nasi goreng jagung dan cabai di atas daun pisang, dengan kerupuk, timun, dan ayam saus telur asin." }, // (photos)
    drawn: true,
  },
  {
    id: "chicken-steak",
    name: { text: "Chicken Steak Saus Jamur" }, // (r3)
    price: { text: "Rp 40rb", mockup: true },
    drawn: false,
  },
  {
    id: "churros",
    name: { text: "Churros" }, // (r5)
    price: { text: "Rp 22rb", mockup: true },
    drawn: false,
  },
];

// ---------------------------------------------------------------------------------------
// Nyaman buat kerja

export const comfort = {
  heading: "Nyaman buat kerja",
  statement: { text: "Colokan banyak, musiknya pelan, kopinya enak. Silakan betah." } as Item, // (r1, r5)
  evening: {
    text: "Malam hari, stafnya keliling dari meja ke meja, nanya gimana makanan dan pelayanannya.",
  } as Item, // (r1)
  items: [
    // Labels are sourced; the short detail lines are mockup copy written around them.
    { icon: "plug", label: "Banyak colokan", detail: { text: "Kerja berjam-jam tanpa cemas baterai habis.", mockup: true } }, // (r1, r5)
    { icon: "note", label: "Musik yang nggak ganggu", detail: { text: "Ada suasana, fokus tetap jalan.", mockup: true } }, // (r1)
    { icon: "arch", label: "Indoor dan semi-outdoor", detail: { text: "Hangat dan nyaman, cuaca panas atau dingin.", mockup: true } }, // (r2)
    { icon: "bike", label: "Parkir mobil dan motor", detail: { text: "Ada tempat buat keduanya.", mockup: true } }, // (r3)
  ] as { icon: "plug" | "note" | "arch" | "bike"; label: string; detail: Item }[],
};

// ---------------------------------------------------------------------------------------
// Kata mereka. Paraphrased from real reviews only. Never invented, never attributed to a name.

export const rating = { value: "4,8", count: "1.034" }; // (listing)

export const praise = {
  heading: "Kata mereka",
  ratingLine: "dari 1.034 ulasan Google",
  caption: "Diringkas dari ulasan Google.",
  themes: [
    { text: "Minumannya kreatif, beda dari kedai lain di sekitar." }, // (r4)
    { text: "Stafnya ramah dan senang dengar masukan." }, // (r1, r3)
    { text: "Tenang buat kerja berjam-jam." }, // (r1, r5)
    { text: "Harganya masuk akal untuk yang didapat." }, // (r1)
    { text: "Kopinya enak, makanannya juga." }, // (r2, r3)
  ] as Item[],
};

// ---------------------------------------------------------------------------------------
// Kunjungi kami + Hubungi kami

export const visit = {
  heading: "Kunjungi kami",
  hoursHeading: "Jam buka",
  todayTag: "hari ini",
  mapTitle: "Peta lokasi SAYKOP",
  mapFallback: "Peta Google Maps: Jl. Bangunan Timur No.13B",
};

export const contact = {
  heading: "Hubungi kami",
  closing: { text: "Sampai ketemu di bar.", mockup: true } as Item,
};

export const footer = {
  note: "Ini contoh tampilan untuk SAYKOP. Beberapa detail masih menunggu konfirmasi pemilik.",
};
