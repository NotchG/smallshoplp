// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief, or is a placeholder (illustration,
// unknown menu name). Every one is listed in owner-checklist.md.
// Site language: Bahasa Indonesia. Menu names stay exactly as the shop uses them.

export type Item = { text: string; mockup?: boolean };

/** A menu line: the dish name, plus an optional short note under it. */
export type MenuItem = Item & { note?: Item };

const PHONE_WA = "628119117845";
const waLink = (message: string) =>
  `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`;

export const shop = {
  name: "KOMUKA Cafe & Eatery", // listing name is keyword-stuffed; this is the clean form (brief)
  shortName: "KOMUKA",
  type: "Cafe & Eatery",
  area: "Cakung, Jakarta Timur",
  address: "Jl. Menteng Timur No. 9–10 Blok F4, RT.01/RW.07, Ujung Menteng, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13960",
  addressLines: ["Jl. Menteng Timur No. 9–10", "Blok F4, Ujung Menteng", "Cakung, Jakarta Timur 13960"],
  phoneDisplay: "0811-9117-845",
  phoneTel: "+628119117845",
  // [MOCKUP] that this number takes WhatsApp.
  whatsapp: { url: waLink("Halo KOMUKA, saya mau tanya…"), mockup: true },
  // [MOCKUP] that VIP-room bookings go through WhatsApp on the same number.
  whatsappVip: {
    url: waLink("Halo KOMUKA, saya mau pesan ruang VIP untuk … orang pada tanggal …"),
    mockup: true,
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=KOMUKA%20Cafe%20%26%20Eatery&destination_place_id=ChIJ8eYMJtiLaS4RpOiKeaXUJGc",
  mapEmbed:
    "https://www.google.com/maps?q=KOMUKA%20Cafe%20%26%20Eatery%2C%20Jl.%20Menteng%20Timur%20No.9-10%20Blok%20F4%2C%20Cakung%2C%20Jakarta%20Timur&output=embed",
  rating: { value: "4,9", count: "2.441" }, // listing
};

export const meta = {
  title: "KOMUKA Cafe & Eatery · Cakung, Jakarta Timur",
  description:
    "Kafe dan tempat makan di Jl. Menteng Timur, Ujung Menteng, Cakung. Kopi, teh, makanan berat dan camilan. Buka Rabu–Minggu.",
  banner:
    "Draf mockup untuk KOMUKA Cafe & Eatery. Beberapa detail masih contoh sampai Anda konfirmasi.",
};

/* ---------- Hours (listing) ---------- */

/** Machine form, index = day (0 = Minggu). Times in Asia/Jakarta. */
export const hours: { day: number; open: string | null; close: string | null }[] = [
  { day: 0, open: "09:00", close: "22:00" },
  { day: 1, open: null, close: null },
  { day: 2, open: null, close: null },
  { day: 3, open: "11:00", close: "22:00" },
  { day: 4, open: "11:00", close: "22:00" },
  { day: 5, open: "11:00", close: "22:00" },
  { day: 6, open: "11:00", close: "22:00" },
];

export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

/** Display rows, Monday first. `days` lets the table highlight today's row. */
export const hoursRows: { label: string; time: string; closed?: boolean; days: number[] }[] = [
  { label: "Senin–Selasa", time: "Tutup", closed: true, days: [1, 2] },
  { label: "Rabu–Sabtu", time: "11.00–22.00", days: [3, 4, 5, 6] },
  { label: "Minggu", time: "09.00–22.00", days: [0] },
];

/* ---------- Navigation ---------- */

export const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#ruang", label: "Ruang" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

/* ---------- Hero ---------- */

export const hero = {
  name: "KOMUKA",
  nameHidden: " Cafe & Eatery",
  sub: { type: "Cafe & Eatery", area: "Cakung, Jakarta Timur" },
  line: {
    text: "Dari secangkir kopi sampai makan malam bareng keluarga, di teras rindang Jl. Menteng Timur.",
  } as Item,
  // What the door sign reads before JS runs (and with JS off).
  signFallback: { word: "Buka", line: "Rabu–Minggu" },
  directions: "Petunjuk Arah",
  whatsapp: "WhatsApp",
  hoursLabel: "Jam buka",
};

/* ---------- Pertama kali ke sini? (review 4) ---------- */

export const mustTry = {
  heading: "Pertama kali ke sini?",
  lead: "Biar kami bantu pilih.",
  intro: "Tujuh yang wajib dicoba di kunjungan pertama, menurut salah satu tamu kami:",
  items: [
    { text: "Komuka chips" },
    { text: "Lumpia" },
    { text: "Kwetiau goreng" },
    { text: "Sop buntut" },
    { text: "Dirty chai" },
    { text: "V60", note: { text: "biji kopinya bergantian" } },
    { text: "Pudding mangga" },
  ] as MenuItem[],
  close: "Habis itu, balik lagi untuk coba yang lain.",
};

/** The four illustrated dishes on the teak table. Placeholders for real photos. */
export type PlateKind = "sop" | "lumpia" | "pudding" | "chai";
export const plates: { kind: PlateKind; name: string; listNo: number; mockup: boolean }[] = [
  { kind: "sop", name: "Sop buntut", listNo: 4, mockup: true },
  { kind: "lumpia", name: "Lumpia", listNo: 2, mockup: true },
  { kind: "pudding", name: "Pudding mangga", listNo: 7, mockup: true },
  { kind: "chai", name: "Dirty chai", listNo: 5, mockup: true },
];

/* ---------- Menu andalan ---------- */

export const menu = {
  heading: "Menu andalan",
  lead: "Bukan cuma kopi: ada teh, makanan berat, sampai camilan dan yang manis.",
  categories: [
    {
      title: "Kopi & teh",
      from: { text: "mulai Rp 28rb", mockup: true } as Item,
      items: [
        { text: "Dirty chai" },
        {
          text: "V60",
          note: { text: "single origin Indonesia bergantian, mis. Gayo, Kintamani, Toraja", mockup: true },
        },
        { text: "Caramel coffee" },
        { text: "Hojicha latte" },
        { text: "Soul Sister" },
      ] as MenuItem[],
    },
    {
      title: "Makanan berat",
      from: { text: "mulai Rp 45rb", mockup: true } as Item,
      items: [
        {
          text: "Spaghetti Bolognese Brûlée",
          note: { text: "berdaging, creamy, keju leleh di atasnya" },
        },
        { text: "Kwetiau goreng" },
        { text: "Sop buntut" },
        // Seen in the owner's photo; real menu name unknown, so this label is a placeholder.
        {
          text: "Nasi goreng daging wijen",
          mockup: true,
          note: { text: "dengan telur mata sapi, kerupuk dan acar" },
        },
        {
          text: "Sarapan Minggu",
          mockup: true,
          note: { text: "mulai 09.00: bubur ayam, paket roti", mockup: true },
        },
      ] as MenuItem[],
    },
    {
      title: "Camilan & manis",
      from: { text: "mulai Rp 25rb", mockup: true } as Item,
      items: [
        { text: "Signature Toast" },
        { text: "Komuka chips" },
        { text: "Lumpia" },
        { text: "Pudding mangga" },
      ] as MenuItem[],
    },
  ],
  pairing:
    "Cocok dipadukan, kata tamu kami: Signature Toast dengan caramel coffee, Spaghetti Bolognese Brûlée dengan Soul Sister.",
  photo: {
    src: "/photos/nasi-goreng.jpg",
    width: 1280,
    height: 961,
    alt: "Nasi goreng dengan daging berlapis wijen, telur mata sapi, kerupuk, dan acar di atas daun pisang",
    // Real menu name unknown: the caption describes the plate and is tagged until the owner names it.
    nameUnknown: true,
    caption: {
      text: "Nasi goreng dengan daging berlapis wijen, telur mata sapi, kerupuk dan acar, di atas daun pisang.",
      mockup: true,
    } as Item,
  },
};

/* ---------- Ruang di KOMUKA ---------- */

export const spaces = {
  heading: "Ruang di KOMUKA",
  lead: "Paling seru datang ramai-ramai.",
  items: [
    { name: "Teras depan", text: "Meja kayu jati di bawah pepohonan, dengan lampu-lampu kecil saat malam." },
    { name: "Di dalam", text: "Banyak pilihan tempat duduk, dan sudut tenang untuk kerja atau baca buku." },
    { name: "Ruang VIP", text: "Ruang privat untuk kumpul bareng keluarga atau teman." },
  ],
  cta: { text: "Pesan ruang VIP", mockup: true } as Item,
  photo: {
    src: "/photos/teras-depan.jpg",
    width: 1400,
    height: 1050,
    alt: "Teras depan KOMUKA: meja piknik kayu jati di antara tanaman",
  },
};

/* ---------- Kata mereka (paraphrased, no names, no quotes) ---------- */

export const praise = {
  heading: "Kata mereka",
  note: `Diringkas dari ulasan Google · ${shop.rating.value} dari ${shop.rating.count} ulasan`,
  items: [
    { text: "Suasananya hangat dan nyaman, susah dijelaskan; harus dirasakan sendiri." },
    { text: "Stafnya ramah dan sigap bantu pilih menu kalau kamu bingung." },
    { text: "Bukan cuma kopi: ada teh, bahkan makanan lengkap." },
    { text: "Makanan dan minumannya cocok dipadukan." },
    { text: "Kalau butuh ruang sendiri, enak buat kerja atau baca buku." },
  ] as Item[],
};

/* ---------- Kunjungi kami ---------- */

export const visit = {
  heading: "Kunjungi kami",
  lead: "Gampang dicari, di Blok F4 Jl. Menteng Timur.",
  hoursCaption: "Jam buka",
  todayLabel: "hari ini",
  mapTitle: "Peta lokasi KOMUKA",
  mapFallback: "KOMUKA · Blok F4, Jl. Menteng Timur",
  mapLink: "Lihat peta di Google Maps",
  photo: {
    src: "/photos/tampak-depan.jpg",
    width: 1050,
    height: 1400,
    alt: "Tampak depan gedung KOMUKA",
    caption: "Tampak depan KOMUKA",
  },
};

/* ---------- Hubungi kami + footer ---------- */

export const contact = {
  heading: "Hubungi kami",
  lead: { text: "Ruang tamunya warga Metland Menteng dan JGC. Hari Minggu, ajak semua keluarga.", mockup: true } as Item,
  closing: "Buka sampai 22.00.",
  call: "Telepon",
  whatsapp: "WhatsApp",
  directions: "Petunjuk Arah",
};
