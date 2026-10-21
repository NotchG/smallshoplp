// All page copy and shop facts live here, so the owner's corrections are one-file edits.
// mockup: true = came from a [MOCKUP] line in the brief, or is a heading / intro line written
// for this page. Every one of them is listed in owner-checklist.md.
// Sources in comments: (listing) (hours) (review n) (photos owner-1.jpg) (photos case, Nov 2025).

export type Item = { text: string; mockup?: boolean };

const WA_NUMBER = "6282249996668";
const wa = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const shop = {
  name: "Sedap Wangi", // logo on owner-1.jpg; listing says "Sedap Wangi Bakery"
  fullName: "Roti & Kue Sedap Wangi",
  label: "Roti & Kue", // logo
  since: "Sejak 1979", // logo on owner-1.jpg
  type: "Toko roti dan kue",
  // (listing) The listing also names Cipinang Muara, Jatinegara: owner to confirm the area.
  address: {
    street: "Jl. Cipinang Muara I No. 20",
    area: "Pondok Bambu, Duren Sawit",
    city: "Jakarta Timur 13430",
  },
  addressOneLine: "Jl. Cipinang Muara I No. 20, Pondok Bambu, Duren Sawit, Jakarta Timur 13430",
  phone: { display: "(021) 861 6311", href: "tel:+62218616311" }, // (listing)
  // The number is printed on the owner's menu; taking WhatsApp orders on it is [MOCKUP].
  whatsapp: {
    display: "0822 4999 6668",
    cake: wa("Halo Sedap Wangi, saya mau tanya pesanan kue."),
    nasiBox: wa("Halo Sedap Wangi, saya mau tanya pesanan nasi box."),
    general: wa("Halo Sedap Wangi, saya mau tanya."),
    mockup: true,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Sedap+Wangi+Bakery&destination_place_id=ChIJdTOcWmjzaS4RzdlubaWs7S4",
  mapsUrl:
    "https://maps.google.com/?cid=3381548721730673101&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Sedap+Wangi+Bakery,+Jl.+Cipinang+Muara+I+No.+20,+Jakarta+Timur&output=embed",
  rating: { value: "4,5", count: 942 }, // (listing)
};

// (hours) day: 0 = Minggu ... 6 = Sabtu, as in raw.json periods.
export type DayHours = { day: number; label: string; open: string; close: string };
export const hours: { days: DayHours[]; rows: { label: string; days: number[]; time: string }[]; everyDay: string } = {
  days: [
    { day: 0, label: "Minggu", open: "08.00", close: "19.00" },
    { day: 1, label: "Senin", open: "09.00", close: "19.00" },
    { day: 2, label: "Selasa", open: "09.00", close: "19.00" },
    { day: 3, label: "Rabu", open: "09.00", close: "19.00" },
    { day: 4, label: "Kamis", open: "09.00", close: "19.00" },
    { day: 5, label: "Jumat", open: "09.00", close: "19.00" },
    { day: 6, label: "Sabtu", open: "08.00", close: "19.30" },
  ],
  rows: [
    { label: "Senin–Jumat", days: [1, 2, 3, 4, 5], time: "09.00–19.00" },
    { label: "Sabtu", days: [6], time: "08.00–19.30" },
    { label: "Minggu", days: [0], time: "08.00–19.00" },
  ],
  everyDay: "Buka setiap hari",
};

export const copy = {
  banner: "Draf mockup untuk Sedap Wangi. Beberapa detail masih contoh sampai Anda konfirmasi.",
  metaTitle: "Sedap Wangi · Roti & Kue sejak 1979 · Duren Sawit, Jakarta Timur",
  metaDescription:
    "Roti dan kue rumahan, sotomie dan masakan Indonesia di Jl. Cipinang Muara I No. 20, Jakarta Timur. Buka setiap hari.",
  hero: {
    // description + reviews 1, 3, 5
    line: { text: "Roti dan kue rumahan, plus sotomie dan masakan Indonesia." } as Item,
    todayPrefix: "Buka hari ini",
    directions: "Petunjuk Arah",
    whatsapp: { text: "WhatsApp", mockup: true } as Item,
    call: "Telepon",
    toMenu: "Lihat menu dapur",
    toMenuShort: "Menu dapur", // phone, so both hero links share one line
    boxLabel: "Ilustrasi kotak kue Sedap Wangi berisi lemon cake utuh",
    boxTag: { name: "Lemon Cake", note: "Favorit pelanggan" }, // reviews 3, 4
  },
  etalase: {
    heading: { text: "Etalase kami", mockup: true } as Item,
    intro: { text: "Roti dan kue rumahan, segar dari oven. Rasanya jadul, dan memang beda." } as Item, // reviews 3, 4
    favouritesTitle: "Kue favorit pelanggan", // reviews 1, 3, 4
    illustrationNote: {
      text: "Gambar kue masih ilustrasi, nanti diganti foto kue dari toko.",
      mockup: true,
    } as Item,
    caseTitle: "Juga di etalase",
    caseCaption: "Harga di etalase, November 2025. Bisa berubah.", // customer photo of the case, Nov 2025
    deals: { text: "Ada juga potongan harga dan paket bundling, kebanyakan roti." } as Item, // review 1
    alsoSold: {
      text: "Juga ada roti tawar, roti sobek, lapis legit, bolu gulung, dan kue kering Lebaran per toples: nastar, kastengel, putri salju.",
      mockup: true,
    } as Item,
  },
  dapur: {
    heading: { text: "Dapur Sedap Wangi", mockup: true } as Item,
    line: { text: "Mampir makan sotomie, pulang bawa lemon cake.", mockup: true } as Item,
    sub: { text: "Mie, soto, dan masakan Indonesia. Harga dalam rupiah, sesuai menu toko." } as Item, // owner-1.jpg
    tilesLabel: "Foto hidangan dari menu toko",
    boardTitle: "Menu dapur",
  },
  pesan: {
    heading: { text: "Pesan untuk acara", mockup: true } as Item,
    intro: { text: "Untuk ulang tahun, pernikahan, dan acara kantor.", mockup: true } as Item,
  },
  ulasan: {
    heading: { text: "Kata pelanggan", mockup: true } as Item,
    rating: "4,5 dari 5", // listing
    count: "942 ulasan di Google", // listing
    caption: "Diringkas dari ulasan Google, bukan kutipan langsung.",
  },
  lokasi: {
    heading: { text: "Kunjungi kami", mockup: true } as Item,
    hoursTitle: "Jam buka",
    todayLabel: "hari ini",
    parking: { text: "Parkir untuk mobil dan motor." } as Item, // review 3
    mapTitle: "Peta lokasi Sedap Wangi",
    mapFallback: "Buka di Google Maps",
  },
  footer: {
    draft: "Draf mockup, belum dipublikasikan.",
    reservations: "Reservasi", // owner-1.jpg heading above both numbers
  },
};

// Kue favorit (reviews 1, 3, 4). Prices are [MOCKUP]; items with no price have none.
export type Favourite = {
  id: "lemon" | "pandan" | "lapis" | "brownie" | "strawberry";
  name: string;
  note: string;
  price?: Item;
  alt: string;
};
export const favourites: Favourite[] = [
  {
    id: "lemon",
    name: "Lemon Cake",
    note: "Paling enak, kata pelanggan.", // reviews 3, 4
    price: { text: "Rp 125.000 utuh", mockup: true },
    alt: "Ilustrasi sepotong lemon cake dengan glasir lemon dan irisan lemon",
  },
  {
    id: "pandan",
    name: "Pandan Chiffon",
    note: "Pakai pandan asli.", // review 4
    price: { text: "Rp 85.000", mockup: true },
    alt: "Ilustrasi sepotong pandan chiffon hijau yang tinggi dan lembut",
  },
  {
    id: "lapis",
    name: "Lapis Kopi",
    note: "Kesukaan pelanggan.", // review 1
    price: { text: "Rp 18.000 / potong", mockup: true },
    alt: "Ilustrasi sepotong lapis kopi berlapis-lapis cokelat kopi dan krem",
  },
  {
    id: "brownie",
    name: "Cheese Brownie",
    note: "Rekomendasi untuk pencinta kue jadul.", // review 4
    alt: "Ilustrasi sepotong cheese brownie dengan lapisan keju di atasnya",
  },
  {
    id: "strawberry",
    name: "Strawberry Cake",
    note: "Sama favoritnya dengan lemon cake.", // review 3
    alt: "Ilustrasi sepotong strawberry cake dengan krim merah muda dan stroberi",
  },
];

// Tent-card tags as seen in the display case (customer photo, Nov 2025). Prices as on the case.
export const caseItems: { name: string; price: string; kind: "ROTI" | "KUE" }[] = [
  { name: "Abon Cheese", price: "Rp 10.500", kind: "ROTI" },
  { name: "Bolen Pisang Keju", price: "Rp 10.000", kind: "KUE" },
  { name: "Bolen", price: "Rp 9.000", kind: "KUE" },
  { name: "Kos Nanas", price: "Rp 7.500", kind: "KUE" },
  { name: "Kos Keju", price: "Rp 7.500", kind: "KUE" },
  { name: "Kos Strawberry", price: "Rp 7.500", kind: "KUE" },
];

// Dish tiles cropped from owner-1.jpg (the owner's own menu). Prices as printed, date unknown.
export const dishes: { name: string; price: string; src: string; alt: string }[] = [
  { name: "Sotomie", price: "30.000", src: "/dishes/sotomie.jpg", alt: "Semangkuk sotomie dengan risol, tomat, dan jeruk limau" },
  { name: "Mie Bangka Jumbo", price: "20.000", src: "/dishes/mie-bangka-jumbo.jpg", alt: "Mie bangka jumbo dengan sayur, tauge, dan ayam cincang" },
  { name: "Mie Chilli Oil", price: "18.000", src: "/dishes/mie-chilli-oil.jpg", alt: "Mie chilli oil merah diangkat dengan sumpit" },
  { name: "Soto Betawi + Nasi", price: "55.000", src: "/dishes/soto-betawi.jpg", alt: "Soto betawi kuah santan di mangkuk ayam jago, dengan nasi dan emping" },
  { name: "Gado-Gado Mede", price: "25.000", src: "/dishes/gado-gado-mede.jpg", alt: "Gado-gado dengan saus kacang mede, telur, dan kerupuk" },
  { name: "Nasi Kuning Manado", price: "20.000", src: "/dishes/nasi-kuning-manado.jpg", alt: "Nasi kuning manado dalam kotak dengan telur dan lauk" },
  { name: "Ayam Kalasan Bakar", price: "26.000", src: "/dishes/ayam-kalasan-bakar.jpg", alt: "Ayam kalasan bakar dengan sambal dan lalapan" },
  { name: "Nasi Timbel Komplit", price: "45.000", src: "/dishes/nasi-timbel-komplit.jpg", alt: "Nasi timbel komplit dengan tahu, tempe, ayam, sayur asem, dan es teh" },
];

// Full kitchen menu, transcribed from owner-1.jpg. The two Ayam blocks are merged into one.
export type MenuRow = { name: string; price: string; sub?: string; addon?: boolean };
export type MenuCategory = { id: string; title: string; openOnPhone: boolean; rows: MenuRow[]; note?: string };
export const menu: MenuCategory[] = [
  {
    id: "mie-spesial",
    title: "Mie Spesial",
    openOnPhone: true,
    rows: [
      { name: "Mie Spesial Polos", price: "16.000" },
      { name: "Ayam", price: "+6.000", addon: true },
      { name: "Jamur", price: "+5.000", addon: true },
      { name: "Pangsit Ayam", sub: "(2)", price: "+6.000", addon: true },
      { name: "Baso Sapi", sub: "(2)", price: "+6.000", addon: true },
      { name: "Mie Goreng Ayam", price: "35.000" },
      { name: "Baso Super", price: "25.000" },
      { name: "Mie Kangkung Ayam", price: "25.000" },
      { name: "Pangsit Goreng", price: "30.000" },
      { name: "Pangsit Rebus Kuah", price: "27.000" },
    ],
    note: "*Mie dapat diganti dengan bihun.",
  },
  {
    id: "soto",
    title: "Soto",
    openOnPhone: true,
    rows: [
      { name: "Sotomie Plus", price: "35.000" },
      { name: "Sotomie", price: "30.000" },
      { name: "Sotomie Baso Plus", price: "40.000" },
      { name: "Sotomie Baso", price: "32.000" },
      { name: "Soto Ayam", price: "20.000" },
      { name: "Mie Soto Ayam", price: "25.000" },
      { name: "Soto Betawi", sub: "+ Nasi", price: "55.000" },
    ],
  },
  {
    id: "nasi",
    title: "Nasi",
    openOnPhone: false,
    rows: [
      { name: "Nasi Goreng", price: "35.000" },
      { name: "Gado-Gado Mede Lontong", price: "30.000" },
      { name: "Gado-Gado Mede", price: "25.000" },
      { name: "Ketoprak Lontong Spesial", price: "35.000" },
      { name: "Ketoprak Lontong", price: "25.000" },
      { name: "Nasi Kuning Manado", price: "20.000" },
    ],
  },
  {
    id: "mie-bangka",
    title: "Mie Bangka",
    openOnPhone: false,
    rows: [
      { name: "Mie Bangka Jumbo", price: "20.000" },
      { name: "Mie Bangka Reguler", price: "15.000" },
      { name: "Mie Chilli Oil", price: "18.000" },
      { name: "Mie Chilli Oil Jumbo", price: "22.000" },
      { name: "Pangsit Chilli Oil", price: "15.000" },
    ],
  },
  {
    id: "ayam",
    title: "Ayam",
    openOnPhone: false,
    rows: [
      { name: "Ayam Kalasan Bakar", price: "26.000" },
      { name: "Ayam Kalasan Frozen", sub: "½ ekor", price: "50.000" },
      { name: "Ayam Kalasan Frozen", sub: "1 ekor", price: "90.000" },
      { name: "Nasi Timbel Komplit", price: "45.000" },
      { name: "Ayam Gulai Paket", price: "35.000" },
      { name: "Ayam Gulai", sub: "½ ekor", price: "55.000" },
      { name: "Ayam Gulai", sub: "1 ekor", price: "100.000" },
      { name: "Sate Ayam Lontong", price: "30.000" },
    ],
  },
  {
    id: "tambahan",
    title: "Tambahan",
    openOnPhone: false,
    rows: [
      { name: "Nasi Putih", price: "7.000" },
      { name: "Lontong", price: "5.000" },
      { name: "Risol Sotomie", sub: "isi 3", price: "10.000" },
      { name: "Gulai Kikil", price: "30.000" },
      { name: "Gulai Ati Ampela", price: "30.000" },
      { name: "Gulai Daun Singkong", price: "22.500" },
      { name: "Extra Sambal Chilli Oil", price: "5.000" },
      { name: "Extra Sambal Gulai", price: "5.000" },
      { name: "Sayur Asem", price: "10.000" },
      { name: "Telur", price: "5.000" },
    ],
  },
  {
    id: "minuman",
    title: "Minuman",
    openOnPhone: false,
    rows: [
      { name: "Es Jeruk Asli", price: "15.000" },
      { name: "Es Markisa Kebon Sendiri", price: "10.000" },
      { name: "Es Kacang Merah Manado", price: "25.000" },
      { name: "Es Cendol", price: "15.000" },
      { name: "Es Lemon Tea", price: "15.000" },
      { name: "Es Teh", price: "7.000" },
      { name: "Teh Panas", price: "5.000" },
      { name: "Teh Botol", price: "8.000" },
      { name: "Teh Kotak", price: "7.000" },
      { name: "Air Mineral", price: "7.000" },
    ],
  },
];

// Order cards. "Pesan sekarang!" and the nasi box price are printed on owner-1.jpg.
export type OrderCard = {
  id: "kue" | "nasi-box";
  title: string;
  lines: Item[];
  price: Item;
  cta: string;
  button: Item;
  href: string;
  alt?: { text: string; href: string; label: string };
};
export const orders: OrderCard[] = [
  {
    id: "kue",
    title: "Kue ulang tahun & pernikahan",
    lines: [
      { text: "Dibuat sesuai pesanan Anda." }, // review 4
      { text: "Pesan paling lambat 3 hari sebelumnya.", mockup: true },
    ],
    price: { text: "Mulai Rp 250.000", mockup: true },
    cta: "Pesan sekarang!",
    button: { text: "Pesan lewat WhatsApp", mockup: true },
    href: shop.whatsapp.cake,
  },
  {
    id: "nasi-box",
    title: "Nasi box",
    lines: [{ text: "Untuk kantor dan acara." }], // brief audience
    price: { text: "Harga mulai Rp 30.000" }, // owner-1.jpg
    cta: "Pesan sekarang!",
    button: { text: "Pesan lewat WhatsApp", mockup: true },
    href: shop.whatsapp.nasiBox,
    alt: { text: "atau telepon", href: shop.phone.href, label: shop.phone.display },
  },
];

// Paraphrased from real reviews only. Never quoted, never attributed to a name.
export const praise: Item[] = [
  { text: "Toko kue legendaris; rotinya buatan sendiri, segar dari oven." }, // review 3
  { text: "Langganan sejak kecil. Kue jadulnya punya rasa sendiri." }, // review 4
  { text: "Lemon cake dan cheese brownie wajib dicoba; pandan chiffon-nya pakai pandan asli." }, // review 4
  { text: "Sotomie-nya enak sekali, mie dan masakan Indonesianya juga." }, // reviews 1, 3, 5
  { text: "Parkirnya nyaman untuk mobil dan motor." }, // review 3
  { text: "Ada diskon dan paket roti." }, // review 1
];
