// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief or was written for the mockup.
// Every mockup item is listed in owner-checklist.md. Sources are noted in comments:
// (listing) = Google listing, (hours) = listing hours, (photos) = owner photos, (review N) = review N.

export type Item = { text: string; mockup?: boolean };

const WHATSAPP = "https://wa.me/6285134286223"; // [MOCKUP] that the number takes WhatsApp

export const shop = {
  name: "Paras Lawas Kopi", // (listing)
  sign: "Paras Lawas", // what the sign and logo say (photos)
  type: "Kedai kopi", // coffee_shop (listing)
  address: "Jl. Swakarsa IV No. 2, Pondok Kelapa, Duren Sawit, Jakarta Timur 13450", // (listing)
  addressLines: ["Jl. Swakarsa IV No. 2", "Pondok Kelapa, Duren Sawit", "Jakarta Timur 13450"],
  phone: "0851-3428-6223", // (listing)
  tel: "tel:+6285134286223",
  whatsapp: { href: WHATSAPP, mockup: true },
  instagram: { handle: "@paraslawaskopi", href: "https://www.instagram.com/paraslawaskopi/" }, // in-store screen (photos)
  mapsUrl: "https://maps.google.com/?cid=9969786020556534008", // (listing)
  mapEmbed:
    "https://maps.google.com/maps?q=Paras+Lawas+Kopi,+Jl.+Swakarsa+IV+No.2,+Pondok+Kelapa,+Jakarta+Timur&output=embed",
};

export const meta = {
  title: "Paras Lawas Kopi · Pondok Kelapa, Jakarta Timur",
  description:
    "Kopi, cemilan, makanan dan paket bundling mulai Rp 22rb di Pondok Kelapa. Buka setiap hari 10.30–22.30.",
};

// Every day is the same (hours).
export const hours = {
  open: { h: 10, m: 30 },
  close: { h: 22, m: 30 },
  openLabel: "10.30",
  closeLabel: "22.30",
  range: "10.30–22.30",
  timeZone: "Asia/Jakarta",
  days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
  everyDay: "Buka setiap hari",
  summary: "Buka setiap hari 10.30–22.30",
  todayLabel: "Hari ini",
};

// Live status under the wall clock (rule from the TRD).
export const status = {
  open: "Lagi buka · tutup jam 22.30",
  beforeOpen: "Lagi tutup · buka jam 10.30",
  afterClose: "Lagi tutup · buka lagi besok 10.30",
  clockIdle: "Jam dinding",
  clockNow: (hhmm: string) => `Jam dinding, sekarang pukul ${hhmm} WIB`,
};

export const banner = "Draf mockup untuk Paras Lawas Kopi. Beberapa detail masih contoh sampai dikonfirmasi.";

export const skipLink = "Langsung ke konten";

export const hero = {
  kicker: "Kopi · Pondok Kelapa, Jakarta Timur", // (listing)
  tagline: { text: "Ngopi santai, lagu lawas, ngobrol sampai malam.", mockup: true } as Item,
  directions: "Petunjuk Arah",
  whatsapp: { text: "WhatsApp", mockup: true } as Item,
  menuLink: "Lihat papan menu",
  photoAlt:
    "Tampak depan Paras Lawas: dinding bata berongga, pintu lengkung biru, dan papan nama bergambar wajah perempuan.",
};

// ---------- Papan menu (prices as written on the chalkboard, photos) ----------
export type MenuItem = {
  name: string;
  qty?: string;
  price?: string;
  variants?: string;
  mockup?: boolean;
};
export type MenuColumn = { id: string; title: string; priceRange?: string; items: MenuItem[] };

export const menu = {
  title: "Papan Menu",
  intro: { text: "Langsung dari papan kapur di kasir.", mockup: true } as Item,
  columns: [
    {
      id: "kopi",
      title: "Kopi",
      priceRange: "24–27rb", // (photos) names cut off in the photo
      items: [
        { name: "Es Kopi Susu Paras Lawas", mockup: true },
        { name: "Kopi Susu Gula Aren", mockup: true },
        { name: "Americano", mockup: true },
        { name: "Cappuccino", mockup: true },
        { name: "Non-kopi", variants: "Matcha Latte · Coklat · Red Velvet", mockup: true },
        { name: "Es Teh Manis", price: "9rb", mockup: true }, // price (photos), name [MOCKUP]
        { name: "Air Mineral", price: "9rb", mockup: true }, // price (photos), name [MOCKUP]
      ],
    },
    {
      id: "cemilan",
      title: "Cemilan",
      items: [
        {
          name: "Sosis Solo",
          qty: "3 pcs",
          price: "18rb",
          variants: "Isian: Ayam · Beef Mayo · Black Pepper · Mozza Keju · Mozza Coklat",
        },
        { name: "Dimsum", qty: "4 pcs", price: "22rb", variants: "Original · Mentai · Goreng" },
        { name: "Kentang Goreng", price: "17rb" },
        { name: "Singkong Keju", price: "18rb" },
        { name: "Extra Saus", price: "3rb" },
      ],
    },
    {
      id: "makanan",
      title: "Makanan",
      items: [
        { name: "Mi Korean Edition", price: "19rb" },
        { name: "Mi Nusantara", price: "19rb" },
        { name: "Mentaiki Ayam", price: "20rb" },
        { name: "Mentaiki Dori", price: "22rb" },
        { name: "Extra Mi", price: "6rb" },
      ],
    },
  ] as MenuColumn[],
  bundleLink: "Paket bundling",
  note: "Harga dalam ribuan rupiah, dibaca dari papan menu. Harga bisa berubah, cek papan di kasir ya.",
};

// ---------- Paket bundling (photos) ----------
export type BundlePrice = { label?: string; price: string; mockup?: boolean };
export type Bundle = {
  name: string;
  prices: BundlePrice[];
  art: "sosis" | "mi" | "mentaiki";
  artLabel: string;
};

export const bundles = {
  title: "Paket Bundling",
  lead: "Makan + minum, mulai Rp 22rb.", // derived from the board (photos)
  items: [
    {
      name: "Sosis Solo + saus + es teh",
      prices: [{ price: "Rp 22rb" }],
      art: "sosis",
      artLabel: "Ilustrasi Sosis Solo, saus dan es teh",
    },
    {
      name: "Mi + es teh",
      prices: [{ price: "Rp 23rb" }],
      art: "mi",
      artLabel: "Ilustrasi semangkuk mi dan es teh",
    },
    {
      name: "Mentaiki + es teh manis",
      // Both prices are on the board; which is Ayam and which is Dori is [MOCKUP].
      prices: [
        { label: "Ayam", price: "Rp 24rb", mockup: true },
        { label: "Dori", price: "Rp 26rb", mockup: true },
      ],
      art: "mentaiki",
      artLabel: "Ilustrasi Mentaiki dan es teh manis",
    },
  ] as Bundle[],
};

// ---------- Kopi Toean Njonja (bottle and label seen on the in-store screen, photos) ----------
export const toeanNjonja = {
  kicker: "Kopi botolan",
  title: "Kopi Toean Njonja",
  body: "Kopi botolan berlabel Paras Lawas sendiri.",
  lines: [
    { text: "Bisa dibawa pulang, tinggal beli di kasir.", mockup: true },
    { text: "Botol 1 liter. Harganya tanya di kasir ya.", mockup: true },
  ] as Item[],
  cta: { text: "Tanya via WhatsApp", mockup: true } as Item,
  ctaHref: `${WHATSAPP}?text=${encodeURIComponent("Halo Paras Lawas, mau tanya Kopi Toean Njonja.")}`,
  artLabel: "Ilustrasi botol Kopi Toean Njonja berlabel Paras Lawas",
};

// ---------- Sudut lawas ----------
export const sudut = {
  title: "Sudut Lawas",
  intro: { text: "Pas buat me-time atau nongkrong bareng teman." } as Item, // review 3, paraphrased
  side: { text: "Sisi A", mockup: true } as Item, // tracklist device [MOCKUP]
  tracks: [
    { no: "A1", title: "Rak piringan hitam", text: "Pemutar piringan hitam, vinyl dan kaset lawas, juga kamera film." }, // (photos)
    { no: "A2", title: "Lagu lawas", text: "Pengunjung memuji pilihan musik yang diputar." }, // (review 1)
    { no: "A3", title: "Teras papan catur", text: "Lantai catur hitam-putih di belakang, bangku-bangku di atas kerikil." }, // (photos)
    { no: "A4", title: "Dek atas", text: "Naik tangga ke dek beratap di lantai atas." }, // (photos)
  ],
  photoAlt: "Di dalam Paras Lawas: papan kapur menu, lampu gantung, dan jam dinding tua di dinding biru.",
};

// ---------- Kata mereka ----------
// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise = {
  title: "Kata Mereka",
  rating: "5,0 dari 103 ulasan di Google", // (listing)
  note: "Diringkas dari ulasan Google.",
  link: "Baca ulasannya di Google",
  items: [
    { text: "Tempatnya nyaman, mau sendirian atau rame-rame bareng teman." }, // reviews 1, 3
    { text: "Pilihan musik latarnya bagus." }, // review 1
    { text: "Yang nggak ngopi tetap kebagian: minuman selain kopinya juga enak." }, // review 1
    { text: "Wajib dicoba, dan bikin pengin balik lagi." }, // reviews 1, 5
  ] as Item[],
};

// ---------- Mampir Doeloe (lokasi & jam buka) ----------
export const visit = {
  kicker: "Lokasi & jam buka",
  title: { text: "Mampir Doeloe", mockup: true } as Item,
  directions: "Petunjuk Arah",
  mapTitle: "Peta lokasi Paras Lawas Kopi",
  mapFallback: "Peta Google Maps",
};

// ---------- Hubungi kami ----------
export const contact = {
  title: "Hubungi Kami",
  intro: { text: "Mau tanya menu atau mastiin masih buka? Langsung aja.", mockup: true } as Item,
  rows: [
    { label: "WhatsApp", value: shop.phone, href: WHATSAPP, mockup: true },
    { label: "Telepon", value: shop.phone, href: shop.tel },
    { label: "Instagram", value: shop.instagram.handle, href: shop.instagram.href },
    { label: "Petunjuk Arah", value: "Buka di Google Maps", href: shop.mapsUrl },
  ],
  extras: [
    { text: "Bayar bisa pakai QRIS." }, // counter sign (photos)
    { text: "Ada program member, tanya di kasir.", mockup: true }, // offer seen (photos), details [MOCKUP]
  ] as Item[],
};
