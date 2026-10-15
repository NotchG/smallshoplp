// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief. Listed in owner-checklist.md.
// Copy is Bahasa Indonesia, verbatim from docs/prd.md unless noted.

export type Item = { text: string; mockup?: boolean };

const PLACE_ID = "ChIJp7wM6dmLaS4RUixdISvxVLk";

// Facts from raw.json (listing).
export const shop = {
  name: "Kawan Kopi, Cakung",
  shortName: "Kawan Kopi",
  area: "Cakung · Jakarta Timur",
  address: "Ruko Maison De Wisteria 2 No. 11, Ujung Menteng, Cakung, Jakarta Timur 13960",
  addressShort: "Ruko Maison De Wisteria 2 No. 11, Cakung, Jakarta Timur",
  phone: "0851-1131-4830",
  tel: "+6285111314830",
  placeId: PLACE_ID,
  mapsUrl:
    "https://maps.google.com/?cid=13354563962606005330&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Kawan%20Kopi%2C%20Cakung&destination_place_id=${PLACE_ID}`,
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kawan%20Kopi%2C%20Ruko%20Maison%20De%20Wisteria%202%20No.11%2C%20Cakung&z=16&output=embed",
  whatsapp: { url: "https://wa.me/6285111314830", mockup: true },
  rating: { value: "4,9", count: 233 },
};

// Opening hours (raw.json regularOpeningHours). Single source: the hero line, the hours bars
// and the visit list all derive from this. days: 0 = Minggu ... 6 = Sabtu.
export type HoursRow = {
  label: string;
  short: string;
  days: number[];
  open: string;
  close: string;
};

export const hours: HoursRow[] = [
  { label: "Senin–Jumat", short: "Sen–Jum", days: [1, 2, 3, 4, 5], open: "07.30", close: "22.00" },
  { label: "Sabtu–Minggu", short: "Sab–Min", days: [6, 0], open: "07.30", close: "23.00" },
];

export const banner =
  "Draf mockup untuk Kawan Kopi, Cakung. Beberapa detail masih contoh sampai dikonfirmasi pemilik.";

export const meta = {
  title: "Kawan Kopi, Cakung · Kedai kopi di Ujung Menteng, Jakarta Timur",
  description:
    "Kedai kopi di Ruko Maison De Wisteria 2, Cakung. Buka setiap hari dari 07.30. Americano, Kopi Kawan Lama, Dirty Latte, dan camilan ringan.",
};

export const actions = {
  directions: { text: "Petunjuk Arah", label: "Petunjuk arah ke Kawan Kopi (Google Maps)" },
  call: { text: "Telepon", label: `Telepon ${shop.phone}` },
  whatsapp: { text: "WhatsApp", label: "WhatsApp Kawan Kopi" },
};

export const hero = {
  line: {
    text: "Teman ngopi di ujung jalan. Datang sendiri, pulang sudah kenal sama barista.",
    mockup: true,
  } as Item,
  todayPrefix: "Buka hari ini",
  everyDayPrefix: "Buka setiap hari",
  // Drawn drinks standing on the counter edge (photos, review 2). The citrus drink is unnamed.
  drinks: ["americano", "dirtyLatte", "citrus"] as const,
};

export type ArtId =
  | "americano"
  | "kawanLama"
  | "dirtyLatte"
  | "v60"
  | "citrus"
  | "frenchToast"
  | "salad"
  | "sandwich"
  | "pastri";

export type Drink = {
  art: ArtId;
  name: Item;
  note: Item;
  price: Item;
  keys: Item[];
};

export const kopi = {
  heading: "Kopi kami",
  intro: "Pesan apa hari ini? Biar barista kami ceritain kopinya.",
  drinks: [
    {
      art: "americano",
      name: { text: "Americano" },
      note: { text: "Salah satu tamu kasih nilai penuh untuk Americano kami." },
      price: { text: "Rp 25rb", mockup: true },
      keys: [{ text: "espresso + air" }],
    },
    {
      art: "kawanLama",
      name: { text: "Kopi Kawan Lama" },
      note: { text: "Rasa kopinya lebih tegas, tapi tetap creamy." },
      price: { text: "Rp 28rb", mockup: true },
      keys: [{ text: "lebih tegas" }, { text: "tetap creamy" }],
    },
    {
      art: "dirtyLatte",
      name: { text: "Dirty Latte" },
      note: { text: "Espresso dituang di atas susu dingin, jadi berlapis.", mockup: true },
      price: { text: "Rp 32rb", mockup: true },
      keys: [
        { text: "espresso", mockup: true },
        { text: "susu dingin", mockup: true },
      ],
    },
    {
      art: "v60",
      name: { text: "V60 hari ini", mockup: true },
      note: {
        text: "Seduh manual, bijinya bergantian dari Indonesia, misalnya Gayo atau Kintamani.",
        mockup: true,
      },
      price: { text: "harga menyusul", mockup: true },
      keys: [
        { text: "seduh manual", mockup: true },
        { text: "biji Indonesia, bergantian", mockup: true },
      ],
    },
  ] satisfies Drink[],
};

export type Plate = { art: ArtId; name: Item; note: Item; price: Item };

export const teman = {
  heading: "Teman ngopi",
  intro:
    "Piring ringan dan yang manis-manis buat menemani kopi. Kami tidak menyajikan makanan berat.",
  plates: [
    {
      art: "frenchToast",
      name: { text: "French toast" },
      note: { text: "Dengan es krim dan stroberi." },
      price: { text: "Rp 38rb", mockup: true },
    },
    {
      art: "salad",
      name: { text: "Salad" },
      note: { text: "Dengan dressing dan saus cocolan." },
      price: { text: "harga menyusul", mockup: true },
    },
    {
      art: "sandwich",
      name: { text: "Sandwich panggang" },
      note: { text: "Roti isi, dipanggang." },
      price: { text: "harga menyusul", mockup: true },
    },
    {
      art: "pastri",
      name: { text: "Pastri" },
      note: { text: "Dari etalase di bar." },
      price: { text: "harga menyusul", mockup: true },
    },
  ] satisfies Plate[],
};

export const work = {
  heading: "Kerja atau santai",
  statement:
    "Ada wifi, dan banyak yang datang bawa laptop. Atau datang bareng teman dan nongkrong sampai malam.",
  hoursHeading: "Jam buka",
  todayTag: "hari ini",
  facts: [
    { text: "Wifi tersedia" },
    { text: "Banyak yang kerja di sini" },
    { text: "Nyaman buat nongkrong bareng teman" },
    { text: "Mampir sebelum berangkat kerja: buka 07.30 tiap hari", mockup: true },
  ] as Item[],
};

// Paraphrased from real Google reviews only. Never quoted, never attributed to a name.
export const praise = {
  heading: "Kata mereka",
  rating: `${shop.rating.value} dari ${shop.rating.count} ulasan di Google`,
  source: "Diringkas dari ulasan Google.",
  themes: [
    {
      theme: "Kopi",
      // PRD opened with the review's own words ("Kopinya enak"); reworded to stay a paraphrase.
      text: "Kopinya berkualitas: Americano dapat nilai penuh, Kopi Kawan Lama tegas tapi tetap creamy.",
    },
    {
      theme: "Pelayanan",
      text: "Pelayan dan baristanya hangat, dan baristanya pintar menjelaskan kopinya.",
    },
    {
      theme: "Kalau ada salah",
      text: "Pesanan sempat tertukar; langsung diganti, plus satu kopi tambahan.",
    },
    {
      theme: "Suasana & harga",
      text: "Tempatnya nyaman buat nongkrong, harganya wajar.",
    },
  ],
};

export const visit = {
  heading: "Kunjungi kami",
  hoursHeading: "Jam buka",
  parking: { text: "Tempat parkir terbatas." } as Item,
  parkingTip: { text: "Tips parkir terdekat: menyusul dari pemilik.", mockup: true } as Item,
  mapTitle: "Peta lokasi Kawan Kopi, Cakung",
};

export const contact = {
  heading: "Hubungi kami",
  line: { text: "Ada pertanyaan sebelum mampir? Telepon saja.", mockup: true } as Item,
};

export const footer = {
  line: `${shop.name} · ${shop.addressShort} · Draf mockup, belum dipublikasikan.`,
};

// Accessible descriptions for the drawings (Indonesian, as the site language).
export const artLabels: Record<ArtId, string> = {
  americano: "Ilustrasi Americano: espresso dan air dalam gelas tumbler lurus, dengan garis crema di atasnya",
  kawanLama:
    "Ilustrasi Kopi Kawan Lama: lapisan kopi pekat di atas badan kopi susu yang creamy dalam gelas tinggi",
  dirtyLatte:
    "Ilustrasi Dirty Latte: lapisan espresso di atas susu dalam gelas pendek bergelombang",
  v60: "Ilustrasi V60: dripper kerucut di atas server kaca berisi kopi seduh berwarna amber",
  citrus:
    "Ilustrasi minuman jeruk dingin dalam gelas tinggi bersegi, dengan busa dan irisan jeruk kering di atasnya",
  frenchToast: "Ilustrasi French toast dilihat dari atas: roti dengan dua bola es krim dan dua potong stroberi",
  salad: "Ilustrasi salad dilihat dari atas: sayuran hijau dengan dressing dan mangkuk kecil saus merah",
  sandwich: "Ilustrasi sandwich panggang dilihat dari atas: dua potong roti isi berbentuk segitiga",
  pastri: "Ilustrasi pastri dilihat dari atas: dua croissant di atas piring",
};
