// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Sources in comments: (listing) raw.json, (hours) opening hours, (review n) Google review n,
// (photos) customer photos used as reference only, (owner photo) owner-1.jpg.

export type Item = { text: string; mockup?: boolean };

const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Kawa%20Coffee%20Jakarta&destination_place_id=ChIJxTQfVbPtaS4R-S36fWUTRs0";

export const shop = {
  name: "Kawa Coffee", // sign on the facade (photos); listing says "Kawa Coffee Jakarta"
  listingName: "Kawa Coffee Jakarta", // (listing)
  type: "Coffee shop", // (listing)
  area: "Cipayung, Jakarta Timur", // (listing)
  // Address lines (listing). The house number is unconfirmed: a photo shows 24 on the gate.
  address: [
    { text: "Jl. Raya Mabes Hankam No.3", mockup: true },
    { text: "Bambu Apus, Kec. Cipayung" },
    { text: "Jakarta Timur 13890" },
  ] as Item[],
  phone: "0878-8824-2274", // (listing)
  tel: "+6287888242274",
  whatsapp: { url: "https://wa.me/6287888242274", mockup: true }, // number may not take WhatsApp
  placeId: "ChIJxTQfVbPtaS4R-S36fWUTRs0",
  mapsUrl:
    "https://maps.google.com/?cid=14791531352771145209&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA", // (listing)
  directionsUrl: DIRECTIONS,
  mapEmbed:
    "https://maps.google.com/maps?q=Kawa%20Coffee%20Jakarta%2C%20Jl.%20Raya%20Mabes%20Hankam%2C%20Bambu%20Apus%2C%20Cipayung&z=16&output=embed",
  // (hours) open every day, no closed day
  openEveryDay: "Buka setiap hari",
  hours: [
    { days: "Senin–Jumat", time: "08.00–22.00" },
    { days: "Sabtu–Minggu", time: "08.00–23.00" },
  ],
  // 0 = Sunday ... 6 = Saturday, in Asia/Jakarta
  hoursByDay: {
    0: "08.00–23.00",
    1: "08.00–22.00",
    2: "08.00–22.00",
    3: "08.00–22.00",
    4: "08.00–22.00",
    5: "08.00–22.00",
    6: "08.00–23.00",
  } as Record<number, string>,
  hoursFallback: "Buka setiap hari mulai 08.00", // shown before JS knows today's weekday
  payment: { text: "Bayar dengan QRIS atau tunai.", mockup: true } as Item, // review 5 (2023)
};

export const meta = {
  title: "Kawa Coffee · Kopi di Cipayung, Jakarta Timur",
  description:
    "Kawa Coffee di Jl. Raya Mabes Hankam, Bambu Apus, Cipayung. Kopi dan makanan rumahan, wifi kencang, parkir luas. Buka setiap hari mulai 08.00.",
};

export const banner =
  "Draf situs untuk Kawa Coffee. Beberapa detail masih contoh sampai pemilik mengonfirmasi.";

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#tempat", label: "Tempat" },
  { href: "#lokasi", label: "Lokasi" },
];

export const actions = {
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  call: "Telepon",
};

export const hero = {
  line: { text: "Kopi dan makanan rumahan di Cipayung." } as Item, // reviews 4, 5
  tone: {
    text: "Kopi enak, wifi kencang, parkir lega. Duduk saja selama yang kamu mau.",
  } as Item, // reviews 1, 3, 5
  photo: {
    src: "/img/kopi-susu-1600.jpg",
    srcSmall: "/img/kopi-susu-800.jpg",
    width: 1600,
    height: 901,
    alt: "Kopi susu panas dengan latte art daun dan hati, di cangkir hitam bertepi putih di atas meja beton.",
    caption: "Kopi susu panas dengan latte art", // (owner photo)
  },
};

export type ArtKey =
  | "montBlanc"
  | "espressoRock"
  | "esKopiSignature"
  | "nasiGoreng"
  | "chickenKatsu"
  | "donatKampung";

export type Ground = "botol" | "beton" | "arang" | "lampu" | "batu";

export type Sleeve = {
  no: string;
  name: Item;
  price: Item;
  note?: Item;
  ground: Ground;
  art: ArtKey;
  alt: string;
};

export const menu = {
  side: "Sisi A",
  heading: "Menu andalan",
  intro: { text: "Datang untuk satu kopi, tinggal sampai makan siang.", mockup: true } as Item,
  sleeves: [
    {
      no: "01",
      name: { text: "Mont Blanc" }, // review 2
      price: { text: "Rp 30rb", mockup: true },
      note: { text: "Segar, bahkan buat yang biasanya tidak suka." }, // review 2
      ground: "botol",
      art: "montBlanc",
      alt: "Mont Blanc (ilustrasi)",
    },
    {
      no: "02",
      name: { text: "Espresso on the rock" }, // review 4
      price: { text: "Rp 25rb", mockup: true },
      note: { text: "Wajib coba, kata pelanggan." }, // review 4
      ground: "beton",
      art: "espressoRock",
      alt: "Espresso on the rock (ilustrasi)",
    },
    {
      no: "03",
      name: { text: "Es Kopi Signature Kawa", mockup: true }, // item: review 5; name guessed
      price: { text: "Rp 25rb", mockup: true },
      note: { text: "Es kopi andalan yang tetap bertahan." }, // review 5
      ground: "arang",
      art: "esKopiSignature",
      alt: "Es Kopi Signature Kawa (ilustrasi)",
    },
    {
      no: "04",
      name: { text: "Nasi Goreng Kawa", mockup: true }, // item: review 4; name guessed
      price: { text: "Rp 30rb", mockup: true },
      note: { text: "Wajib coba bareng espresso on the rock." }, // review 4
      ground: "lampu",
      art: "nasiGoreng",
      alt: "Nasi Goreng Kawa (ilustrasi)",
    },
    {
      no: "05",
      name: { text: "Chicken katsu & kentang goreng" }, // review 5
      price: { text: "Rp 35rb", mockup: true },
      note: { text: "Makan berat, harga bersahabat." }, // review 5
      ground: "batu",
      art: "chickenKatsu",
      alt: "Chicken katsu & kentang goreng (ilustrasi)",
    },
    {
      no: "06",
      name: { text: "Donat kampung" }, // review 5
      price: { text: "Rp 12rb", mockup: true },
      note: { text: "Teman kopi sore.", mockup: true }, // item: review 5; line guessed
      ground: "botol",
      art: "donatKampung",
      alt: "Donat kampung (ilustrasi)",
    },
  ] as Sleeve[],
  sideboard: {
    side: "Sisi B",
    heading: "Menu lainnya",
    groups: [
      {
        title: "Kopi lainnya",
        items: [
          { text: "Cappuccino" }, // photos (green cup)
          { text: "Americano", mockup: true },
          { text: "Caffe Latte", mockup: true },
          { text: "Kopi Susu Gula Aren", mockup: true },
          { text: "Manual Brew (V60)", mockup: true },
        ] as Item[],
      },
      {
        title: "Non-kopi",
        items: [
          { text: "Matcha Latte", mockup: true },
          { text: "Chocolate", mockup: true },
          { text: "Lychee Tea", mockup: true },
        ] as Item[],
      },
      {
        title: "Dari dapur",
        items: [{ text: "Mie goreng" }, { text: "Dimsum" }] as Item[], // review 5
      },
    ],
    note: {
      text: "Harga di draf ini masih contoh. Sudah termasuk pajak dan servis.",
      mockup: true,
    } as Item,
  },
};

export const place = {
  heading: "Tempat buat kerja & ngobrol",
  lead: { text: "Dua lantai, kursi empuk, wifi kencang." } as Item, // reviews 1, 3, 5; photos
  drawingAlt:
    "Ilustrasi bangunan Kawa Coffee: dua lantai dengan balkon, dan carport untuk parkir.",
  floors: [
    { label: "Lantai 2", text: { text: "Ruang merokok dalam ruangan, ber-AC." } as Item }, // review 5
    {
      label: "Lantai 1",
      text: {
        text: "Kursi empuk dan meja untuk kerja atau ngobrol, wifi kencang, dan sudut piringan hitam di dinding.",
      } as Item,
    }, // reviews 1, 3, 4, 5; photos
    { label: "Depan", text: { text: "Parkir luas untuk mobil dan motor." } as Item }, // review 3; photos
  ],
};

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  note: "Diringkas dari ulasan Google.",
  items: [
    { text: "Kopinya enak dan sepadan dengan harganya." }, // reviews 1, 5
    { text: "Nyaman buat kerja lama, wifinya kencang." }, // reviews 1, 3, 5
    { text: "Mont Blanc-nya segar, pas setelah perjalanan jauh." }, // review 2
    { text: "Parkirnya luas, jadi gampang mampir." }, // review 3
  ] as Item[],
};

export const visit = {
  heading: "Kunjungi kami",
  mapTitle: "Peta lokasi Kawa Coffee",
  mapLink: "Buka di Google Maps",
};

export const contact = {
  heading: "Hubungi kami",
  closing: { text: "Sampai ketemu di Kawa." } as Item,
};

export const footer = {
  draft: "Ini draf situs untuk ditinjau pemilik.",
  line: "Kawa Coffee · Bambu Apus, Cipayung",
};
